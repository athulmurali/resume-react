if (self.CavalryLogger) {
  CavalryLogger.start_js(['0T3gM']);
}

__d(
  'PixelRatioConst',
  [],
  function (a, b, c, d, e, f) {
    e.exports = { cookieName: 'dpr' };
  },
  null
);
__d(
  'camelize',
  [],
  function (a, b, c, d, e, f) {
    var g = /-(.)/g;
    function a(a) {
      return a.replace(g, function (a, b) {
        return b.toUpperCase();
      });
    }
    e.exports = a;
  },
  null
);
__d(
  'getOpacityStyleName',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = !1,
      h = null;
    function a() {
      __p && __p();
      if (!g) {
        if (document.body && 'opacity' in document.body.style) h = 'opacity';
        else {
          var a = document.createElement('div');
          a.style.filter = 'alpha(opacity=100)';
          a.style.filter && (h = 'filter');
        }
        g = !0;
      }
      return h;
    }
    e.exports = a;
  },
  null
);
__d(
  'hyphenate',
  [],
  function (a, b, c, d, e, f) {
    var g = /([A-Z])/g;
    function a(a) {
      return a.replace(g, '-$1').toLowerCase();
    }
    e.exports = a;
  },
  null
);
__d(
  'getStyleProperty',
  ['camelize', 'hyphenate'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function g(a) {
      return a == null ? a : String(a);
    }
    function a(a, c) {
      __p && __p();
      var d;
      if (window.getComputedStyle) {
        d = window.getComputedStyle(a, null);
        if (d) return g(d.getPropertyValue(b('hyphenate')(c)));
      }
      if (document.defaultView && document.defaultView.getComputedStyle) {
        d = document.defaultView.getComputedStyle(a, null);
        if (d) return g(d.getPropertyValue(b('hyphenate')(c)));
        if (c === 'display') return 'none';
      }
      return a.currentStyle
        ? c === 'float'
          ? g(a.currentStyle.cssFloat || a.currentStyle.styleFloat)
          : g(a.currentStyle[b('camelize')(c)])
        : g(a.style && a.style[b('camelize')(c)]);
    }
    e.exports = a;
  },
  null
);
__d(
  'StyleCore',
  [
    'invariant',
    'camelize',
    'containsNode',
    'ex',
    'getOpacityStyleName',
    'getStyleProperty',
    'hyphenate',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    function h(a, b) {
      a = n.get(a, b);
      return a === 'auto' || a === 'scroll';
    }
    var i = new RegExp(
      '\\s*([^\\s:]+)\\s*:\\s*([^;(\'"]*(?:(?:\\([^)]*\\)|"[^"]*"|\'[^\']*\')[^;(?:\'"]*)*)(?:;|$)',
      'g'
    );
    function j(a) {
      var b = {};
      a.replace(i, function (a, c, d) {
        b[c] = d;
        return d;
      });
      return b;
    }
    function k(a) {
      var b = '';
      for (var c in a) a[c] && (b += c + ':' + a[c] + ';');
      return b;
    }
    function l(a) {
      return a !== '' ? 'alpha(opacity=' + a * 100 + ')' : '';
    }
    function m(a, c, d) {
      switch (b('hyphenate')(c)) {
        case 'font-weight':
        case 'line-height':
        case 'opacity':
        case 'z-index':
        case 'animation-iteration-count':
        case '-webkit-animation-iteration-count':
          break;
        case 'width':
        case 'height':
          var e = parseInt(d, 10) < 0;
          e && g(0, undefined, a, c, d);
        default:
          isNaN(d) || !d || d === '0' || g(0, undefined, a, c, d, d + 'px');
          break;
      }
    }
    var n = {
      set: function (a, c, d) {
        __p && __p();
        m('Style.set', c, d);
        a = a.style;
        switch (c) {
          case 'opacity':
            b('getOpacityStyleName')() === 'filter'
              ? (a.filter = l(d))
              : (a.opacity = d);
            break;
          case 'float':
            a.cssFloat = a.styleFloat = d || '';
            break;
          default:
            try {
              a[b('camelize')(c)] = d;
            } catch (a) {
              throw new Error(
                b('ex')('Style.set: "%s" argument is invalid: %s', c, d)
              );
            }
        }
      },
      apply: function (a, c) {
        __p && __p();
        var d;
        for (d in c) m('Style.apply', d, c[d]);
        'opacity' in c &&
          b('getOpacityStyleName')() === 'filter' &&
          ((c.filter = l(c.opacity)), delete c.opacity);
        var e = j(a.style.cssText);
        for (d in c) {
          var f = c[d];
          delete c[d];
          var g = b('hyphenate')(d);
          for (var h in e) (h === g || h.indexOf(g + '-') === 0) && delete e[h];
          c[g] = f;
        }
        Object.assign(e, c);
        a.style.cssText = k(e);
      },
      get: b('getStyleProperty'),
      getFloat: function (a, b) {
        return parseFloat(n.get(a, b), 10);
      },
      getOpacity: function (a) {
        if (b('getOpacityStyleName')() === 'filter') {
          var c = n.get(a, 'filter');
          if (c) {
            c = /(\d+(?:\.\d+)?)/.exec(c);
            if (c) return parseFloat(c.pop()) / 100;
          }
        }
        return n.getFloat(a, 'opacity') || 1;
      },
      isFixed: function (a) {
        while (b('containsNode')(document.body, a)) {
          if (n.get(a, 'position') === 'fixed') return !0;
          a = a.parentNode;
        }
        return !1;
      },
      getScrollParent: function (a) {
        if (!a) return null;
        while (a && a !== document.body) {
          if (h(a, 'overflow') || h(a, 'overflowY') || h(a, 'overflowX'))
            return a;
          a = a.parentNode;
        }
        return window;
      },
    };
    e.exports = n;
  },
  null
);
__d(
  'Style',
  ['StyleCore', '$'],
  function (a, b, c, d, e, f) {
    a = babelHelpers['extends']({}, b('StyleCore'), {
      get: function (a, c) {
        typeof a === 'string' && (!1, (a = b('$')(a)));
        return b('StyleCore').get(a, c);
      },
      getFloat: function (a, c) {
        typeof a === 'string' && (!1, (a = b('$')(a)));
        return b('StyleCore').getFloat(a, c);
      },
    });
    e.exports = a;
  },
  null
);
__d(
  'csx',
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      throw new Error('csx: Unexpected class selector transformation.');
    }
    e.exports = a;
  },
  null
);
__d(
  'BlueBar',
  ['csx', 'CSS', 'DOMQuery', 'Style', 'ge'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h = document,
      i = {};
    function j(a) {
      return b('DOMQuery').scry(h, a)[0];
    }
    function k(a, b) {
      return i[a] ? i[a] : (i[a] = j(b));
    }
    function a() {
      (h = b('ge')('blueBarDOMInspector') || document), (i = {});
    }
    var l = {
      hasFixedBlueBar: function () {
        var a = this.getMaybeFixedRoot();
        return !a
          ? !1
          : b('CSS').matchesSelector(a, '._5rmj') || b('Style').isFixed(a);
      },
      getBar: function () {
        return k('bar', 'div._1s4v');
      },
      getNavRoot: function () {
        return k('navRoot', 'div._cx4') || l.getBar();
      },
      getMaybeFixedRoot: function () {
        return k('maybeFixedRoot', 'div._26aw');
      },
      getLoggedOutRoot: function () {
        return k('maybeFixedRootLoggedOut', 'div._1pmx');
      },
      getNewLoggedOutRoot: function () {
        return k('maybeFixedRootLogin', 'div._53jh');
      },
    };
    a();
    e.exports = l;
  },
  null
);
__d(
  'ChannelClientID',
  [],
  function (a, b, c, d, e, f) {
    var g = ((Math.random() * 2147483648) | 0).toString(16);
    a = {
      getID: function () {
        return g;
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'Clipboard',
  ['Promise', 'UserAgent'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = {
      isSupported: function () {
        return (
          (window.document.queryCommandSupported instanceof Function &&
            window.document.queryCommandSupported('copy') &&
            !(
              b('UserAgent').isBrowser('Firefox < 41') ||
              b('UserAgent').isPlatform('iOS < 10.3')
            )) ||
          b('UserAgent').isBrowser('Chrome >= 43')
        );
      },
      copy: function (a, c) {
        __p && __p();
        c = c || document.body;
        if (!c) return !1;
        var d = !0,
          e = document.createElement('textarea');
        c.appendChild(e);
        e.value = a;
        if (b('UserAgent').isPlatform('iOS >= 10.3')) {
          a = document.createRange();
          a.selectNodeContents(e);
          var f = window.getSelection();
          f.removeAllRanges();
          f.addRange(a);
          e.setSelectionRange(0, 999999);
        } else e.select();
        try {
          d = document.execCommand('copy');
        } catch (a) {
          d = !1;
        }
        c.removeChild(e);
        return d;
      },
      copyAsync: function (a) {
        var c = window.navigator;
        if (c && c.clipboard && typeof c.clipboard.writeText === 'function')
          return c.clipboard.writeText(a);
        return g.copy(a) ? b('Promise').resolve() : b('Promise').reject();
      },
    };
    e.exports = g;
  },
  null
);
__d(
  'forEachObject',
  [],
  function (a, b, c, d, e, f) {
    var g = Object.prototype.hasOwnProperty;
    function a(a, b, c) {
      for (var d in a) {
        var e = d;
        g.call(a, e) && b.call(c, a[e], e, a);
      }
    }
    e.exports = a;
  },
  null
);
__d(
  'killswitch',
  ['KSConfig'],
  function (a, b, c, d, e, f) {
    function a(a) {
      return b('KSConfig').killed.has(a);
    }
    a.override = function (a, c) {
      c ? b('KSConfig').killed.add(a) : b('KSConfig').killed['delete'](a);
    };
    e.exports = a;
  },
  null
);
__d(
  'FbtResultBase',
  ['FBLogger', 'killswitch'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function g(a) {
      b('FBLogger')('fbt')
        .blameToPreviousFile()
        .mustfix(
          'Error using fbt string. Used method %s on Fbt string. Fbt string is designed to be immutable and should not be manipulated.',
          a
        );
    }
    function h(a) {
      (this.$1 = a), (this.$2 = null);
    }
    h.prototype.flattenToArray = function () {
      return h.flattenToArray(this.$1);
    };
    h.prototype.getContents = function () {
      return this.$1;
    };
    h.prototype.toString = function () {
      __p && __p();
      if (this.$2 != null) return this.$2;
      var a = '',
        c = this.flattenToArray();
      for (var d = 0; d < c.length; ++d) {
        var e = c[d];
        if (typeof e === 'string' || e instanceof h) a += e.toString();
        else {
          var f = 'Context not logged.';
          if (!b('killswitch')('JS_RELIABILITY_FBT_LOGGING'))
            try {
              f = JSON.stringify(e).substr(0, 250);
            } catch (a) {
              f = a.message;
            }
          b('FBLogger')('fbt')
            .blameToPreviousFile()
            .mustfix('Converting to a string will drop content data. %s', f);
        }
      }
      Object.isFrozen(this) || (this.$2 = a);
      return a;
    };
    h.prototype.toJSON = function () {
      return this.toString();
    };
    h.flattenToArray = function (a) {
      var b = [];
      for (var c = 0; c < a.length; ++c) {
        var d = a[c];
        Array.isArray(d)
          ? b.push.apply(b, h.flattenToArray(d))
          : d instanceof h
          ? b.push.apply(b, d.flattenToArray())
          : b.push(d);
      }
      return b;
    };
    [
      'anchor',
      'big',
      'blink',
      'bold',
      'charAt',
      'charCodeAt',
      'codePointAt',
      'contains',
      'endsWith',
      'fixed',
      'fontcolor',
      'fontsize',
      'includes',
      'indexOf',
      'italics',
      'lastIndexOf',
      'link',
      'localeCompare',
      'match',
      'normalize',
      'repeat',
      'replace',
      'search',
      'slice',
      'small',
      'split',
      'startsWith',
      'strike',
      'sub',
      'substr',
      'substring',
      'sup',
      'toLocaleLowerCase',
      'toLocaleUpperCase',
      'toLowerCase',
      'toUpperCase',
      'trim',
      'trimLeft',
      'trimRight',
    ].forEach(function (a) {
      h.prototype[a] = function () {
        g(a);
        return this.toString()[a].apply(this, arguments);
      };
    });
    e.exports = h;
  },
  null
);
__d(
  'isScalar',
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      return /string|number|boolean/.test(typeof a);
    }
    e.exports = a;
  },
  null
);
__d(
  'DOM',
  [
    'DOMQuery',
    'Event',
    'FBLogger',
    'FbtResultBase',
    'HTML',
    'TAAL',
    'UserAgent_DEPRECATED',
    '$',
    'createArrayFromMixed',
    'isNode',
    'isScalar',
    'isTextNode',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = babelHelpers['extends']({}, b('DOMQuery'), {
      create: function (a, b, c) {
        a = document.createElement(a);
        b && g.setAttributes(a, b);
        c != null && g.setContent(a, c);
        return a;
      },
      setAttributes: function (a, c) {
        c.type && (a.type = c.type);
        for (var d in c) {
          var e = c[d],
            f = /^on/i.test(d);
          f &&
            typeof e !== 'function' &&
            b('FBLogger')('dom').warn(
              'Handlers passed to DOM.setAttributes must be functions. Handler passed for %s was %s',
              d,
              typeof e
            );
          if (d == 'type') continue;
          else
            d == 'style'
              ? typeof e === 'string'
                ? (a.style.cssText = e)
                : Object.assign(a.style, e)
              : f
              ? b('Event').listen(a, d.substr(2), e)
              : d in a
              ? (a[d] = e)
              : a.setAttribute && a.setAttribute(d, e);
        }
      },
      prependContent: function (a, c) {
        if (!a)
          throw new Error(
            b('TAAL').blameToPreviousFile('reference element is not a node')
          );
        return i(c, a, function (b) {
          a.firstChild ? a.insertBefore(b, a.firstChild) : a.appendChild(b);
        });
      },
      insertAfter: function (a, c) {
        if (!a || !a.parentNode)
          throw new Error(
            b('TAAL').blameToPreviousFile(
              'reference element does not have a parent'
            )
          );
        var d = a.parentNode;
        return i(c, d, function (b) {
          a.nextSibling ? d.insertBefore(b, a.nextSibling) : d.appendChild(b);
        });
      },
      insertBefore: function (a, c) {
        if (!a || !a.parentNode)
          throw new Error(
            b('TAAL').blameToPreviousFile(
              'reference element does not have a parent'
            )
          );
        var d = a.parentNode;
        return i(c, d, function (b) {
          d.insertBefore(b, a);
        });
      },
      setContent: function (a, c) {
        if (!a)
          throw new Error(
            b('TAAL').blameToPreviousFile('reference element is not a node')
          );
        while (a.firstChild) h(a.firstChild);
        return g.appendContent(a, c);
      },
      appendContent: function (a, c) {
        if (!a)
          throw new Error(
            b('TAAL').blameToPreviousFile('reference element is not a node')
          );
        return i(c, a, function (b) {
          a.appendChild(b);
        });
      },
      replace: function (a, c) {
        if (!a || !a.parentNode)
          throw new Error(
            b('TAAL').blameToPreviousFile(
              'reference element does not have a parent'
            )
          );
        var d = a.parentNode;
        return i(c, d, function (b) {
          d.replaceChild(b, a);
        });
      },
      remove: function (a) {
        h(typeof a === 'string' ? b('$')(a) : a);
      },
      empty: function (a) {
        a = typeof a === 'string' ? b('$')(a) : a;
        while (a.firstChild) h(a.firstChild);
      },
    });
    Object.assign(g, b('DOMQuery'));
    function h(a) {
      a.parentNode && a.parentNode.removeChild(a);
    }
    function i(a, c, d) {
      __p && __p();
      a = b('HTML').replaceJSONWrapper(a);
      if (
        a instanceof b('HTML') &&
        c.firstChild === null &&
        -1 === a.toString().indexOf('<script')
      ) {
        var e = b('UserAgent_DEPRECATED').ie();
        if (
          !e ||
          (e > 7 &&
            !b('DOMQuery').isNodeOfType(c, [
              'table',
              'tbody',
              'thead',
              'tfoot',
              'tr',
              'select',
              'fieldset',
            ]))
        ) {
          var f = e ? '<em style="display:none;">&nbsp;</em>' : '';
          c.innerHTML = f + a;
          e && c.removeChild(c.firstChild);
          return Array.from(c.childNodes);
        }
      } else if (b('isTextNode')(c)) {
        c.data = a;
        return [a];
      }
      f = document.createDocumentFragment();
      var g;
      e = [];
      c = [];
      a = b('createArrayFromMixed')(a);
      a.length === 1 &&
        a[0] instanceof b('FbtResultBase') &&
        (a = a[0].getContents());
      for (var h = 0; h < a.length; h++) {
        g = b('HTML').replaceJSONWrapper(a[h]);
        if (g instanceof b('HTML')) {
          c.push(g.getAction());
          var i = g.getNodes();
          for (var j = 0; j < i.length; j++) e.push(i[j]), f.appendChild(i[j]);
        } else if (b('isScalar')(g) || g instanceof b('FbtResultBase')) {
          j = document.createTextNode(g);
          e.push(j);
          f.appendChild(j);
        } else
          b('isNode')(g)
            ? (e.push(g), f.appendChild(g))
            : (Array.isArray(g) &&
                b('FBLogger')('dom').warn('Nest arrays not supported'),
              g !== null &&
                b('FBLogger')('dom').warn('No way to set content %s', g));
      }
      d(f);
      c.forEach(function (a) {
        a();
      });
      return e;
    }
    e.exports = g;
  },
  null
);
__d(
  'SessionName',
  ['SessionNameConfig', 'isInIframe'],
  function (a, b, c, d, e, f) {
    var g = '_e_',
      h;
    function i() {
      (h = (window.name || '').toString()),
        h.length == 7 && h.substr(0, 3) == g
          ? (h = h.substr(3))
          : ((h = b('SessionNameConfig').seed || ''),
            b('isInIframe')() || (window.name = g + h));
    }
    e.exports = {
      TOKEN: g,
      getName: function () {
        h === undefined && i();
        return h;
      },
    };
  },
  null
);
__d(
  'WebPixelRatio',
  ['Cookie', 'DOMEventListener', 'PixelRatioConst', 'Run'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = b('PixelRatioConst').cookieName,
      h,
      i = !1,
      j = !1,
      k = !1;
    function l() {
      return window.devicePixelRatio || 1;
    }
    function m() {
      b('Cookie').set(g, String(l()));
    }
    function n() {
      b('Cookie').clear(g);
    }
    function o() {
      if (j) return;
      j = !0;
      k && n();
      l() !== 1 ? m() : n();
    }
    a = {
      startDetecting: function (a, c) {
        h = a || 1;
        c && (k = !0);
        if (i) return;
        i = !0;
        'onpagehide' in window &&
          b('DOMEventListener').add(window, 'pagehide', o);
        b('Run').onBeforeUnload(o, !1);
      },
      get: function () {
        return h || l();
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'isBonfireURI',
  [],
  function (a, b, c, d, e, f) {
    var g = new RegExp('(^|\\.)(get|my)bonfire\\.com$', 'i'),
      h = ['https'];
    function a(a) {
      if (a.isEmpty() && a.toString() !== '#') return !1;
      return !a.getDomain() && !a.getProtocol()
        ? !1
        : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain());
    }
    e.exports = a;
  },
  null
);
__d(
  'isMessengerDotComURI',
  [],
  function (a, b, c, d, e, f) {
    var g = new RegExp('(^|\\.)messenger\\.com$', 'i'),
      h = ['https'];
    function a(a) {
      if (a.isEmpty() && a.toString() !== '#') return !1;
      return !a.getDomain() && !a.getProtocol()
        ? !1
        : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain());
    }
    e.exports = a;
  },
  null
);
__d(
  'promiseDone',
  ['TAAL', 'setTimeoutAcrossTransitions'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a, c, d) {
      var e = new Error('promiseDone'),
        f = arguments.length > 1 ? a.then(c, d) : a;
      f.then(null, function (a) {
        b('setTimeoutAcrossTransitions')(function () {
          if (a instanceof Error) throw a;
          else {
            e.message = b('TAAL').blameToPreviousFile(a);
            throw e;
          }
        }, 0);
      });
    }
    e.exports = a;
  },
  null
);
__d(
  'XControllerURIBuilder',
  ['invariant', 'URI', 'gkx'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    function h(a, b) {
      (this.$1 = {}), (this.$2 = a), (this.$3 = b);
    }
    h.prototype.setInt = function (a, b) {
      return this.__setParam(a, 'Int', b);
    };
    h.prototype.setFBID = function (a, b) {
      return this.__setParam(a, 'FBID', b);
    };
    h.prototype.setFloat = function (a, b) {
      return this.__setParam(a, 'Float', b);
    };
    h.prototype.setString = function (a, b) {
      return this.__setParam(a, 'String', b);
    };
    h.prototype.setExists = function (a, b) {
      b === !1 && (b = undefined);
      return this.__setParam(a, 'Exists', b);
    };
    h.prototype.setBool = function (a, b) {
      return this.__setParam(a, 'Bool', b);
    };
    h.prototype.setEnum = function (a, b) {
      return this.__setParam(a, 'Enum', b);
    };
    h.prototype.setIntVector = function (a, b) {
      return this.__setParam(a, 'IntVector', b);
    };
    h.prototype.setIntKeyset = function (a, b) {
      return this.__setParam(a, 'IntKeyset', b);
    };
    h.prototype.setIntSet = function (a, b) {
      return this.__setParam(a, 'IntSet', b.join(','));
    };
    h.prototype.setFloatVector = function (a, b) {
      return this.__setParam(a, 'FloatVector', b);
    };
    h.prototype.setFloatSet = function (a, b) {
      return this.__setParam(a, 'FloatSet', b.join(','));
    };
    h.prototype.setStringVector = function (a, b) {
      return this.__setParam(a, 'StringVector', b);
    };
    h.prototype.setStringKeyset = function (a, b) {
      return this.__setParam(a, 'StringKeyset', b);
    };
    h.prototype.setStringSet = function (a, b) {
      return this.__setParam(a, 'StringSet', b);
    };
    h.prototype.setFBIDVector = function (a, b) {
      return this.__setParam(a, 'FBIDVector', b);
    };
    h.prototype.setFBIDSet = function (a, b) {
      return this.__setParam(a, 'FBIDSet', b);
    };
    h.prototype.setFBIDKeyset = function (a, b) {
      return this.__setParam(a, 'FBIDKeyset', b);
    };
    h.prototype.setEnumVector = function (a, b) {
      return this.__setParam(a, 'EnumVector', b);
    };
    h.prototype.setEnumSet = function (a, b) {
      return this.__setParam(a, 'EnumSet', b);
    };
    h.prototype.setEnumKeyset = function (a, b) {
      return this.__setParam(a, 'EnumKeyset', b);
    };
    h.prototype.setIntToIntMap = function (a, b) {
      return this.__setParam(a, 'IntToIntMap', b);
    };
    h.prototype.setIntToFloatMap = function (a, b) {
      return this.__setParam(a, 'IntToFloatMap', b);
    };
    h.prototype.setIntToStringMap = function (a, b) {
      return this.__setParam(a, 'IntToStringMap', b);
    };
    h.prototype.setIntToBoolMap = function (a, b) {
      return this.__setParam(a, 'IntToBoolMap', b);
    };
    h.prototype.setStringToIntMap = function (a, b) {
      return this.__setParam(a, 'StringToIntMap', b);
    };
    h.prototype.setStringToFloatMap = function (a, b) {
      return this.__setParam(a, 'StringToFloatMap', b);
    };
    h.prototype.setStringToStringMap = function (a, b) {
      return this.__setParam(a, 'StringToStringMap', b);
    };
    h.prototype.setStringToNullableStringMap = function (a, b) {
      return this.__setParam(a, 'StringToNullableStringMap', b);
    };
    h.prototype.setStringToBoolMap = function (a, b) {
      return this.__setParam(a, 'StringToBoolMap', b);
    };
    h.prototype.setEnumToStringVectorMap = function (a, b) {
      return this.__setParam(a, 'EnumToStringVectorMap', b);
    };
    h.prototype.setEnumToBoolMap = function (a, b) {
      return this.__setParam(a, 'EnumToBoolMap', b);
    };
    h.prototype.setEnumToFBIDVectorMap = function (a, b) {
      return this.__setParam(a, 'EnumToFBIDVectorMap', b);
    };
    h.prototype.setHackType = function (a, b) {
      return this.__setParam(a, 'HackType', b);
    };
    h.prototype.setTypeAssert = function (a, b) {
      return this.__setParam(a, 'TypeAssert', b);
    };
    h.prototype.__validateRequiredParamsExistence = function () {
      for (var a in this.$3)
        !this.$3[a].required ||
          Object.prototype.hasOwnProperty.call(this.$1, a) ||
          g(0, undefined, a);
    };
    h.prototype.setParams = function (a) {
      for (var b in a) {
        this.__assertParamExists(b);
        var c = this.$3[b].type;
        this.__setParam(b, c, a[b]);
      }
      return this;
    };
    h.prototype.__assertParamExists = function (a) {
      a in this.$3 || g(0, undefined, a);
    };
    h.prototype.__setParam = function (a, b, c) {
      this.__assertParamExists(a);
      var d = this.$3[a].type;
      d === b || g(0, undefined, a, b, d);
      this.__setParamInt(a, c);
      return this;
    };
    h.prototype.__setParamInt = function (a, b) {
      this.$1[a] = b;
    };
    h.prototype.getRequest = function (a) {
      b('gkx')(
        'AT4miIiW4pJzE0dukYVRr93bo-U7aeRzegmes3xLz6J7QfAO9xBCVDCcWNxQBaSegngcbU8UJ8KqD-c2mDX0kNsMkP4Db418yITqzzh_hAbRIA'
      ) && (a = a.setReplaceTransportMarkers());
      return a.setURI(this.getURI());
    };
    h.prototype.getURI = function () {
      __p && __p();
      this.__validateRequiredParamsExistence();
      var a = {},
        c = '',
        d = /^(.*)?\{(\?)?(\*)?(.+?)\}(.*)?$/,
        e = this.$2.split('/'),
        f = !1;
      for (var h = 0; h < e.length; h++) {
        var i = e[h];
        if (i === '') continue;
        var j = d.exec(i);
        if (!j) c += '/' + i;
        else {
          i = j[2] === '?';
          var k = j[4],
            l = this.$3[k];
          l || g(0, undefined, k, this.$2);
          if (i && f) continue;
          if (this.$1[k] == null && i) {
            f = !0;
            continue;
          }
          this.$1[k] != null || g(0, undefined, k);
          l = j[1] ? j[1] : '';
          i = j[5] ? j[5] : '';
          c += '/' + l + this.$1[k] + i;
          a[k] = !0;
        }
      }
      this.$2.slice(-1) === '/' && (c += '/');
      c === '' && (c = '/');
      j = new (b('URI'))(c);
      for (var m in this.$1) {
        l = this.$1[m];
        if (!a[m] && l != null) {
          i = this.$3[m];
          j.addQueryData(m, i && i.type === 'Exists' ? null : l);
        }
      }
      return j;
    };
    h.prototype.getLookasideURI = function () {
      var a = 'origincache.facebook.com';
      b('gkx')(
        'AT68bJwSI-83elN-7JSMMH9zt32KbiF6pW-XMlf6NViAJ3CbAk_16Vq8cK1tl1029_ApvFwINR8hmoci3nMKFTDhDCBp1wrvYQbOKq0pCjZpqA'
      ) && (a = 'lookaside.internmc.facebook.com');
      return this.getURI().setDomain(a).setProtocol('https');
    };
    h.create = function (a, b) {
      return function () {
        return new h(a, b);
      };
    };
    e.exports = h;
  },
  null
);
__d(
  'XRequest',
  ['invariant'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h = function a(b, c, d) {
      __p && __p();
      var e;
      switch (b) {
        case 'Bool':
          e = (c && c !== 'false' && c !== '0') || !1;
          break;
        case 'Int':
          e = c.toString();
          /-?\d+/.test(e) || g(0, undefined, c);
          break;
        case 'Float':
          e = parseFloat(c, 10);
          isNaN(e) && g(0, undefined, c);
          break;
        case 'FBID':
          e = c.toString();
          for (var f = 0; f < e.length; ++f) {
            var h = e.charCodeAt(f);
            (48 <= h && h <= 57) || g(0, undefined, c);
          }
          break;
        case 'String':
          e = c.toString();
          break;
        case 'Enum':
          d === 0
            ? (e = a('Int', c, null))
            : d === 1
            ? (e = a('String', c, null))
            : d === 2
            ? (e = c)
            : g(0, undefined, d);
          break;
        default:
          if ((h = /^Nullable(\w+)$/.exec(b)))
            c === null ? (e = null) : (e = a(h[1], c, d));
          else if ((f = /^(\w+)Vector$/.exec(b))) {
            !Array.isArray(c)
              ? ((e = c.toString()), (e = e === '' ? [] : e.split(',')))
              : (e = c);
            var i = f[1];
            typeof i === 'string' || g(0, undefined);
            e = e.map(function (b) {
              return a(i, b, d && d.member);
            });
          } else if ((h = /^(\w+)(Set|Keyset)$/.exec(b)))
            !Array.isArray(c)
              ? ((e = c.toString()), (e = e === '' ? [] : e.split(',')))
              : (e = c),
              (e = e.reduce(function (a, b) {
                a[b] = b;
                return a;
              }, {})),
              (i = h[1]),
              typeof i === 'string' || g(0, undefined),
              (e = Object.keys(e).map(function (b) {
                return a(i, e[b], d && d.member);
              }));
          else if ((f = /^(\w+)To(\w+)Map$/.exec(b))) {
            e = {};
            var j = f[1],
              k = f[2];
            (typeof j === 'string' && typeof k === 'string') || g(0, undefined);
            Object.keys(c).forEach(function (b) {
              e[a(j, b, d && d.key)] = a(k, c[b], d && d.value);
            });
          } else g(0, undefined, b);
      }
      return e;
    };
    function a(a, b, c) {
      __p && __p();
      this.$1 = b;
      this.$2 = babelHelpers['extends']({}, c.getQueryData());
      b = a.split('/').filter(function (a) {
        return a;
      });
      a = c
        .getPath()
        .split('/')
        .filter(function (a) {
          return a;
        });
      for (var d = 0; d < b.length; ++d) {
        var e = /^\{(\?)?(\*)?(\w+)\}$/.exec(b[d]);
        if (!e) {
          b[d] === a[d] || g(0, undefined, c.getPath());
          continue;
        }
        var f = !!e[1],
          h = !!e[2];
        !h || d === b.length - 1 || g(0, undefined, i);
        var i = e[3];
        Object.prototype.hasOwnProperty.call(this.$1, i) || g(0, undefined, i);
        this.$1[i].required ? f && g(0, undefined, i) : f || g(0, undefined, i);
        a[d] && (this.$2[i] = h ? a.slice(d).join('/') : a[d]);
      }
      Object.keys(this.$1).forEach(function (a) {
        !this.$1[a].required ||
          Object.prototype.hasOwnProperty.call(this.$2, a) ||
          g(0, undefined);
      }, this);
    }
    a.prototype.getExists = function (a) {
      return this.$2[a] !== undefined;
    };
    a.prototype.getBool = function (a) {
      return this.$3(a, 'Bool');
    };
    a.prototype.getInt = function (a) {
      return this.$3(a, 'Int');
    };
    a.prototype.getFloat = function (a) {
      return this.$3(a, 'Float');
    };
    a.prototype.getFBID = function (a) {
      return this.$3(a, 'FBID');
    };
    a.prototype.getString = function (a) {
      return this.$3(a, 'String');
    };
    a.prototype.getEnum = function (a) {
      return this.$3(a, 'Enum');
    };
    a.prototype.getOptionalInt = function (a) {
      return this.$4(a, 'Int');
    };
    a.prototype.getOptionalFloat = function (a) {
      return this.$4(a, 'Float');
    };
    a.prototype.getOptionalFBID = function (a) {
      return this.$4(a, 'FBID');
    };
    a.prototype.getOptionalString = function (a) {
      return this.$4(a, 'String');
    };
    a.prototype.getOptionalEnum = function (a) {
      return this.$4(a, 'Enum');
    };
    a.prototype.getIntVector = function (a) {
      return this.$3(a, 'IntVector');
    };
    a.prototype.getFloatVector = function (a) {
      return this.$3(a, 'FloatVector');
    };
    a.prototype.getFBIDVector = function (a) {
      return this.$3(a, 'FBIDVector');
    };
    a.prototype.getStringVector = function (a) {
      return this.$3(a, 'StringVector');
    };
    a.prototype.getEnumVector = function (a) {
      return this.$3(a, 'EnumVector');
    };
    a.prototype.getOptionalIntVector = function (a) {
      return this.$4(a, 'IntVector');
    };
    a.prototype.getOptionalFloatVector = function (a) {
      return this.$4(a, 'FloatVector');
    };
    a.prototype.getOptionalFBIDVector = function (a) {
      return this.$4(a, 'FBIDVector');
    };
    a.prototype.getOptionalStringVector = function (a) {
      return this.$4(a, 'StringVector');
    };
    a.prototype.getOptionalEnumVector = function (a) {
      return this.$4(a, 'EnumVector');
    };
    a.prototype.getIntSet = function (a) {
      return this.$3(a, 'IntSet');
    };
    a.prototype.getFBIDSet = function (a) {
      return this.$3(a, 'FBIDSet');
    };
    a.prototype.getFBIDKeyset = function (a) {
      return this.$3(a, 'FBIDKeyset');
    };
    a.prototype.getStringSet = function (a) {
      return this.$3(a, 'StringSet');
    };
    a.prototype.getEnumKeyset = function (a) {
      return this.$3(a, 'EnumKeyset');
    };
    a.prototype.getOptionalIntSet = function (a) {
      return this.$4(a, 'IntSet');
    };
    a.prototype.getOptionalFBIDSet = function (a) {
      return this.$4(a, 'FBIDSet');
    };
    a.prototype.getOptionalFBIDKeyset = function (a) {
      return this.$4(a, 'FBIDKeyset');
    };
    a.prototype.getOptionalStringSet = function (a) {
      return this.$4(a, 'StringSet');
    };
    a.prototype.getEnumToBoolMap = function (a) {
      return this.$3(a, 'EnumToBoolMap');
    };
    a.prototype.getEnumToEnumMap = function (a) {
      return this.$3(a, 'EnumToEnumMap');
    };
    a.prototype.getEnumToFloatMap = function (a) {
      return this.$3(a, 'EnumToFloatMap');
    };
    a.prototype.getEnumToIntMap = function (a) {
      return this.$3(a, 'EnumToIntMap');
    };
    a.prototype.getEnumToStringMap = function (a) {
      return this.$3(a, 'EnumToStringMap');
    };
    a.prototype.getIntToBoolMap = function (a) {
      return this.$3(a, 'IntToBoolMap');
    };
    a.prototype.getIntToEnumMap = function (a) {
      return this.$3(a, 'IntToEnumMap');
    };
    a.prototype.getIntToFloatMap = function (a) {
      return this.$3(a, 'IntToFloatMap');
    };
    a.prototype.getIntToIntMap = function (a) {
      return this.$3(a, 'IntToIntMap');
    };
    a.prototype.getIntToStringMap = function (a) {
      return this.$3(a, 'IntToStringMap');
    };
    a.prototype.getStringToBoolMap = function (a) {
      return this.$3(a, 'StringToBoolMap');
    };
    a.prototype.getStringToEnumMap = function (a) {
      return this.$3(a, 'StringToEnumMap');
    };
    a.prototype.getStringToFloatMap = function (a) {
      return this.$3(a, 'StringToFloatMap');
    };
    a.prototype.getStringToIntMap = function (a) {
      return this.$3(a, 'StringToIntMap');
    };
    a.prototype.getStringToStringMap = function (a) {
      return this.$3(a, 'StringToStringMap');
    };
    a.prototype.getOptionalEnumToBoolMap = function (a) {
      return this.$4(a, 'EnumToBoolMap');
    };
    a.prototype.getOptionalEnumToEnumMap = function (a) {
      return this.$4(a, 'EnumToEnumMap');
    };
    a.prototype.getOptionalEnumToFloatMap = function (a) {
      return this.$4(a, 'EnumToFloatMap');
    };
    a.prototype.getOptionalEnumToIntMap = function (a) {
      return this.$4(a, 'EnumToIntMap');
    };
    a.prototype.getOptionalEnumToStringMap = function (a) {
      return this.$4(a, 'EnumToStringMap');
    };
    a.prototype.getOptionalIntToBoolMap = function (a) {
      return this.$4(a, 'IntToBoolMap');
    };
    a.prototype.getOptionalIntToEnumMap = function (a) {
      return this.$4(a, 'IntToEnumMap');
    };
    a.prototype.getOptionalIntToFloatMap = function (a) {
      return this.$4(a, 'IntToFloatMap');
    };
    a.prototype.getOptionalIntToIntMap = function (a) {
      return this.$4(a, 'IntToIntMap');
    };
    a.prototype.getOptionalIntToStringMap = function (a) {
      return this.$4(a, 'IntToStringMap');
    };
    a.prototype.getOptionalStringToBoolMap = function (a) {
      return this.$4(a, 'StringToBoolMap');
    };
    a.prototype.getOptionalStringToEnumMap = function (a) {
      return this.$4(a, 'StringToEnumMap');
    };
    a.prototype.getOptionalStringToFloatMap = function (a) {
      return this.$4(a, 'StringToFloatMap');
    };
    a.prototype.getOptionalStringToIntMap = function (a) {
      return this.$4(a, 'StringToIntMap');
    };
    a.prototype.getOptionalStringToStringMap = function (a) {
      return this.$4(a, 'StringToStringMap');
    };
    a.prototype.getEnumToNullableEnumMap = function (a) {
      return this.$3(a, 'EnumToNullableEnumMap');
    };
    a.prototype.getEnumToNullableFloatMap = function (a) {
      return this.$3(a, 'EnumToNullableFloatMap');
    };
    a.prototype.getEnumToNullableIntMap = function (a) {
      return this.$3(a, 'EnumToNullableIntMap');
    };
    a.prototype.getEnumToNullableStringMap = function (a) {
      return this.$3(a, 'EnumToNullableStringMap');
    };
    a.prototype.getIntToNullableEnumMap = function (a) {
      return this.$3(a, 'IntToNullableEnumMap');
    };
    a.prototype.getIntToNullableFloatMap = function (a) {
      return this.$3(a, 'IntToNullableFloatMap');
    };
    a.prototype.getIntToNullableIntMap = function (a) {
      return this.$3(a, 'IntToNullableIntMap');
    };
    a.prototype.getIntToNullableStringMap = function (a) {
      return this.$3(a, 'IntToNullableStringMap');
    };
    a.prototype.getStringToNullableEnumMap = function (a) {
      return this.$3(a, 'StringToNullableEnumMap');
    };
    a.prototype.getStringToNullableFloatMap = function (a) {
      return this.$3(a, 'StringToNullableFloatMap');
    };
    a.prototype.getStringToNullableIntMap = function (a) {
      return this.$3(a, 'StringToNullableIntMap');
    };
    a.prototype.getStringToNullableStringMap = function (a) {
      return this.$3(a, 'StringToNullableStringMap');
    };
    a.prototype.getOptionalEnumToNullableEnumMap = function (a) {
      return this.$4(a, 'EnumToNullableEnumMap');
    };
    a.prototype.getOptionalEnumToNullableFloatMap = function (a) {
      return this.$4(a, 'EnumToNullableFloatMap');
    };
    a.prototype.getOptionalEnumToNullableIntMap = function (a) {
      return this.$4(a, 'EnumToNullableIntMap');
    };
    a.prototype.getOptionalEnumToNullableStringMap = function (a) {
      return this.$4(a, 'EnumToNullableStringMap');
    };
    a.prototype.getOptionalIntToNullableEnumMap = function (a) {
      return this.$4(a, 'IntToNullableEnumMap');
    };
    a.prototype.getOptionalIntToNullableFloatMap = function (a) {
      return this.$4(a, 'IntToNullableFloatMap');
    };
    a.prototype.getOptionalIntToNullableIntMap = function (a) {
      return this.$4(a, 'IntToNullableIntMap');
    };
    a.prototype.getOptionalIntToNullableStringMap = function (a) {
      return this.$4(a, 'IntToNullableStringMap');
    };
    a.prototype.getOptionalStringToNullableEnumMap = function (a) {
      return this.$4(a, 'StringToNullableEnumMap');
    };
    a.prototype.getOptionalStringToNullableFloatMap = function (a) {
      return this.$4(a, 'StringToNullableFloatMap');
    };
    a.prototype.getOptionalStringToNullableIntMap = function (a) {
      return this.$4(a, 'StringToNullableIntMap');
    };
    a.prototype.getOptionalStringToNullableStringMap = function (a) {
      return this.$4(a, 'StringToNullableStringMap');
    };
    a.prototype.$3 = function (a, b) {
      this.$5(a, b);
      var c = this.$1[a];
      if (
        !Object.prototype.hasOwnProperty.call(this.$2, a) &&
        c.defaultValue != null
      ) {
        c.required && g(0, undefined);
        return h(b, c.defaultValue, c.enumType);
      }
      c.required ||
        b === 'Bool' ||
        c.defaultValue != null ||
        g(0, undefined, b, a, b, a);
      return h(b, this.$2[a], c.enumType);
    };
    a.prototype.$4 = function (a, b) {
      this.$5(a, b);
      var c = this.$1[a];
      c.required && g(0, undefined, b, a, b, a);
      c.defaultValue && g(0, undefined);
      return Object.prototype.hasOwnProperty.call(this.$2, a)
        ? h(b, this.$2[a], c.enumType)
        : null;
    };
    a.prototype.$5 = function (a, b) {
      Object.prototype.hasOwnProperty.call(this.$1, a) || g(0, undefined, a),
        this.$1[a].type === b || g(0, undefined, a, b, this.$1[a].type);
    };
    e.exports = a;
  },
  null
);
__d(
  'XController',
  ['XControllerURIBuilder', 'XRequest'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function g(a, b) {
      (this.$1 = a), (this.$2 = b);
    }
    g.prototype.getURIBuilder = function (a) {
      __p && __p();
      var c = new (b('XControllerURIBuilder'))(this.$1, this.$2);
      if (a) {
        var d = this.getRequest(a);
        Object.keys(this.$2).forEach(function (a) {
          var b = this.$2[a],
            e = '';
          !b.required &&
            !Object.prototype.hasOwnProperty.call(b, 'defaultValue') &&
            (e = 'Optional');
          e = 'get' + e + b.type;
          e = d[e](a);
          if (
            e == null ||
            (Object.prototype.hasOwnProperty.call(b, 'defaultValue') &&
              e === b.defaultValue)
          )
            return;
          b = 'set' + b.type;
          c[b](a, e);
        }, this);
      }
      return c;
    };
    g.prototype.getRequest = function (a) {
      return new (b('XRequest'))(this.$1, this.$2, a);
    };
    g.create = function (a, b) {
      return new g(a, b);
    };
    e.exports = g;
  },
  null
);
__d(
  'getElementText',
  ['isElementNode', 'isTextNode'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = null;
    function a(a) {
      __p && __p();
      if (b('isTextNode')(a)) return a.data;
      else if (b('isElementNode')(a)) {
        if (g === null) {
          var c = document.createElement('div');
          g = c.textContent != null ? 'textContent' : 'innerText';
        }
        return a[g];
      } else return '';
    }
    e.exports = a;
  },
  null
);
__d(
  'tooltipPropsFor',
  [],
  function (a, b, c, d, e, f) {
    function a(a, b, c) {
      if (!a) return {};
      a = { 'data-tooltip-content': a, 'data-hover': 'tooltip' };
      b && (a['data-tooltip-position'] = b);
      c && (a['data-tooltip-alignh'] = c);
      return a;
    }
    e.exports = a;
  },
  null
);
__d(
  'TooltipData',
  [
    'DataStore',
    'DOM',
    'URI',
    'getElementText',
    'ifRequired',
    'isTextNode',
    'tooltipPropsFor',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    function g(a) {
      var c = a.getAttribute('data-tooltip-delay');
      c = c ? parseInt(c, 10) || 1e3 : 0;
      return babelHelpers['extends'](
        {
          className: a.getAttribute('data-tooltip-root-class'),
          content: a.getAttribute('data-tooltip-content'),
          delay: c,
          position: a.getAttribute('data-tooltip-position') || 'above',
          alignH: a.getAttribute('data-tooltip-alignh') || 'left',
          offsetY: a.getAttribute('data-tooltip-offsety') || 0,
          suppress: !1,
          overflowDisplay:
            a.getAttribute('data-tooltip-display') === 'overflow',
          persistOnClick: a.getAttribute('data-pitloot-persistonclick'),
          textDirection: a.getAttribute('data-tooltip-text-direction'),
        },
        b('DataStore').get(a, 'tooltip')
      );
    }
    function h(a, c) {
      var d = g(a);
      b('DataStore').set(a, 'tooltip', {
        content: c.content || d.content,
        position: c.position || d.position,
        alignH: c.alignH || d.alignH,
        suppress: c.suppress !== undefined ? c.suppress : d.suppress,
        overflowDisplay: c.overflowDisplay || d.overflowDisplay,
        persistOnClick: c.persistOnClick || d.persistOnClick,
      });
    }
    function i(a, b) {
      h(a, b), a.setAttribute('data-hover', 'tooltip');
    }
    function j(a, b) {}
    var k = {
      remove: function (a) {
        b('DataStore').remove(a, 'tooltip'),
          a.removeAttribute('data-hover'),
          a.removeAttribute('data-tooltip-position'),
          a.removeAttribute('data-tooltip-alignh'),
          b('ifRequired')('Tooltip', function (b) {
            b.isActive(a) && b.hide();
          });
      },
      set: function (a, c, d, e) {
        j(a, c);
        if (c instanceof b('URI'))
          a.setAttribute('data-tooltip-uri', c),
            b('ifRequired')('Tooltip', function (b) {
              b.isActive(a) && b.fetchIfNecessary(a);
            });
        else {
          c = k._store({ context: a, content: c, position: d, alignH: e });
          typeof c.content !== 'string'
            ? a.setAttribute(
                'data-tooltip-content',
                b('getElementText')(c.content)
              )
            : a.setAttribute('data-tooltip-content', c.content);
          b('ifRequired')('Tooltip', function (b) {
            b.isActive(a) && b.show(a);
          });
        }
      },
      _store: function (a) {
        var c = a.context,
          d = a.content,
          e = a.position;
        a = a.alignH;
        j(c, d);
        b('isTextNode')(d) && (d = b('getElementText')(d));
        var f = !1;
        typeof d !== 'string'
          ? (d = b('DOM').create('div', {}, d))
          : (f = d === '');
        a = { alignH: a, content: d, position: e, suppress: f };
        i(c, a);
        return a;
      },
      propsFor: b('tooltipPropsFor'),
      enableDisplayOnOverflow: function (a) {
        a.removeAttribute('data-tooltip-display'),
          i(a, { overflowDisplay: !0 });
      },
      enablePersistOnClick: function (a) {
        a.removeAttribute('data-pitloot-persistOnClick'),
          i(a, { persistOnClick: !0 });
      },
      suppress: function (a, b) {
        h(a, { suppress: b });
      },
      _get: g,
    };
    e.exports = k;
  },
  null
);
__d(
  'joinClasses',
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      var b = a || '',
        c = arguments.length <= 1 ? 0 : arguments.length - 1;
      for (var d = 0; d < c; d++) {
        var e =
          d + 1 < 1 || arguments.length <= d + 1 ? undefined : arguments[d + 1];
        e != null && e !== '' && (b = (b ? b + ' ' : '') + e);
      }
      return b;
    }
    e.exports = a;
  },
  null
);
__d(
  'FBClipboardLink.react',
  [
    'cx',
    'fbt',
    'Clipboard',
    'DOMContainer.react',
    'Event',
    'KeyEventController',
    'React',
    'ReactDOM',
    'SubscriptionsHandler',
    'Tooltip.react',
    'isKeyActivation',
    'joinClasses',
  ],
  function (a, b, c, d, e, f, g, h) {
    __p && __p();
    var i;
    c = babelHelpers.inherits(a, b('React').PureComponent);
    i = c && c.prototype;
    function a() {
      __p && __p();
      var a, c;
      for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
        e[f] = arguments[f];
      return (
        (c = (a = i.constructor).call.apply(a, [this].concat(e))),
        (this.state = { copied: !1, supported: b('Clipboard').isSupported() }),
        (this.$1 = null),
        (this.$2 = null),
        (this.$4 = function (a) {
          a.clipboardData
            ? (a.clipboardData.setData('text/html', this.$7()),
              a.preventDefault())
            : !1;
        }.bind(this)),
        (this.$6 = function () {
          if (!this.state.supported) return 'Unsupported in this browser';
          return this.state.copied
            ? this.props.tooltipSuccess
            : this.props.tooltip;
        }.bind(this)),
        (this.$3 = function () {
          this.$2 && (clearTimeout(this.$2), (this.$2 = null));
        }.bind(this)),
        (this.$8 = function () {
          this.$2 = setTimeout(this.$9, this.props.tooltipSuccessDuration);
        }.bind(this)),
        (this.$5 = function (event) {
          var a = b('ReactDOM').findDOMNode(this.refs.root);
          a = b('Clipboard').copy(this.$7(), a);
          this.$3();
          this.setState({ copied: !0, supported: a });
          this.$8();
          this.props.onComplete && this.props.onComplete(a);
          this.props.stopPropagation && event.stopPropagation();
          this.props.preventDefaultOnClick && event.preventDefault();
        }.bind(this)),
        (this.$9 = function () {
          this.$3(), this.setState({ copied: !1 });
        }.bind(this)),
        c
      );
    }
    a.prototype.componentWillUnmount = function () {
      this.$3(), this.$1 && this.$1.release();
    };
    a.prototype.componentDidMount = function () {
      if (this.props.type === 'html') {
        var a = b('ReactDOM').findDOMNode(this);
        this.$1 = this.$1 || new (b('SubscriptionsHandler'))();
        this.$1.addSubscriptions(b('Event').listen(a, 'copy', this.$4));
      }
      this.props.hotkey &&
        ((this.$1 = this.$1 || new (b('SubscriptionsHandler'))()),
        this.$1.addSubscriptions(
          b('KeyEventController').registerKey(this.props.hotkey, this.$5)
        ));
    };
    a.prototype.render = function () {
      var a = b('joinClasses')(this.props.className, '_xd6'),
        c = this.props.children || this.props.label;
      !c &&
        this.props.childrenDONOTUSE &&
        (c = b('React').createElement(
          b('DOMContainer.react'),
          null,
          this.props.childrenDONOTUSE
        ));
      return b('React').createElement(
        b('Tooltip.react'),
        babelHelpers['extends']({}, this.props, {
          ref: 'root',
          tabIndex: '0',
          className: a,
          tooltip: this.$6(),
          'data-pitloot-persistonclick': !0,
          onClick: this.$5,
          onKeyPress: function (a) {
            return b('isKeyActivation')(a) && this.$5();
          }.bind(this),
          position: this.props.position,
          alignH: this.props.alignment,
        }),
        b('React').createElement(
          'div',
          { ref: 'content', className: '_2lj1' },
          c
        )
      );
    };
    a.prototype.$7 = function () {
      if (this.props.getValue) return this.props.getValue();
      else return this.props.value;
    };
    a.defaultProps = {
      tooltip: h._('Copy Text to Clipboard'),
      tooltipSuccess: h._('Text Copied to Clipboard'),
      tooltipSuccessDuration: 1e3,
      type: 'string',
    };
    e.exports = a;
  },
  null
);
__d(
  'EncryptedImgUtils',
  [],
  function (a, b, c, d, e, f) {
    var g = 'ek',
      h = /^data\:/,
      i = /\?(ek\=|.*&ek\=)/;
    a = {
      extractKey: function (a) {
        var b = a.getQueryData(),
          c = b[g];
        delete b[g];
        a.setQueryData(b);
        return c;
      },
      isEncrypted: function (a) {
        return !h.test(a) && i.test(a);
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'coerceImageishSprited',
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      if (
        a &&
        typeof a === 'object' &&
        a.sprited &&
        a.spriteMapCssClass &&
        a.spriteCssClass
      )
        return a;
      else return null;
    }
    e.exports = a;
  },
  null
);
__d(
  'coerceImageishURL',
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      if (
        a &&
        typeof a === 'object' &&
        a.sprited === !1 &&
        typeof a.uri === 'string' &&
        a.width !== undefined &&
        a.height !== undefined
      )
        return a;
      else return null;
    }
    e.exports = a;
  },
  null
);
__d(
  'getImageSourceURLFromImageish',
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      if (typeof a === 'string') return a;
      return typeof a === 'object' &&
        !a.sprited &&
        a.uri &&
        typeof a.uri === 'string'
        ? a.uri
        : '';
    }
    e.exports = a;
  },
  null
);
__d(
  'validateImageSrcPropType',
  ['coerceImageishSprited', 'getImageSourceURLFromImageish'],
  function (a, b, c, d, e, f) {
    function a(a, c, d) {
      a = a[c];
      return a == null ||
        b('coerceImageishSprited')(a) ||
        b('getImageSourceURLFromImageish')(a) !== ''
        ? null
        : new Error(
            'Provided `' +
              c +
              '` to `' +
              d +
              '`. Must be `null`, `undefined`, a string or an `ix` call.'
          );
    }
    e.exports = a;
  },
  null
);
__d(
  'warnUnsupportedProp',
  ['warning'],
  function (a, b, c, d, e, f) {
    function a(a, c, d) {
      b('warning')(
        !1,
        '%s component does not support prop `%s`.%s',
        a,
        c,
        d ? ' ' + d : ''
      );
    }
    e.exports = a;
  },
  null
);
__d(
  'ImageCore.react',
  [
    'Bootloader',
    'EncryptedImgUtils',
    'FBLogger',
    'React',
    'SubscriptionsHandler',
    'coerceImageishSprited',
    'coerceImageishURL',
    'createCancelableFunction',
    'getImageSourceURLFromImageish',
    'ifRequired',
    'joinClasses',
    'validateImageSrcPropType',
    'warnUnsupportedProp',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g;
    c = { alt: '' };
    d = babelHelpers.inherits(h, b('React').Component);
    g = d && d.prototype;
    function h() {
      var a, c;
      for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
        e[f] = arguments[f];
      return (
        (c = (a = g.constructor).call.apply(a, [this].concat(e))),
        (this.$1 = !1),
        (this.$2 = null),
        (this.$3 = new (b('SubscriptionsHandler'))()),
        (this.state = { decryptedSrc: null }),
        c
      );
    }
    h.prototype.$4 = function (a) {
      this.$2 && this.$2.cancel();
      var c = b('getImageSourceURLFromImageish')(this.props.encryptedSrc),
        d = b('createCancelableFunction')(
          function (a) {
            c === b('getImageSourceURLFromImageish')(this.props.encryptedSrc) &&
              this.setState({ decryptedSrc: a });
          }.bind(this)
        );
      a.load(c, d);
      this.$3.addSubscriptions({
        remove: function () {
          d.cancel();
        },
      });
      this.$2 = d;
    };
    h.prototype.$5 = function () {
      b('ifRequired')(
        'EncryptedImg',
        function (a) {
          this.$4(a);
        }.bind(this),
        function () {
          if (this.$1) return;
          this.$1 = !0;
          this.$3.addSubscriptions(
            b('Bootloader').loadModules(
              ['EncryptedImg'],
              function (a) {
                return this.$4(a);
              }.bind(this),
              'ImageCore.react'
            )
          );
        }.bind(this)
      );
    };
    h.prototype.componentDidMount = function () {
      this.$5();
    };
    h.prototype.componentDidUpdate = function (a) {
      a.encryptedSrc !== this.props.encryptedSrc && this.$5();
    };
    h.prototype.componentWillUnmount = function () {
      this.$3.release();
    };
    h.prototype.render = function () {
      var a = this.props,
        c = a.encryptedSrc,
        d = a.forwardedRef;
      a = babelHelpers.objectWithoutProperties(a, [
        'encryptedSrc',
        'forwardedRef',
      ]);
      var e = this.state.decryptedSrc;
      b('EncryptedImgUtils').isEncrypted(c) === !1 &&
        (b('FBLogger')('image').mustfix(
          'The `EncryptedImage` component was rendered with a non-encrypted image (%s). Only images that meet the encrypted image test (see `EncryptedImgUtils.isEncrypted()`) should be rendered with this component. Falling back to `ImageishRenderer`.',
          JSON.stringify(c)
        ),
        (e = c));
      return b('React').createElement(
        i,
        babelHelpers['extends']({}, a, { forwardedRef: d, src: e })
      );
    };
    h.defaultProps = c;
    h.propTypes = { encryptedSrc: b('validateImageSrcPropType') };
    function i(a) {
      __p && __p();
      var c = a.forwardedRef;
      a = babelHelpers.objectWithoutProperties(a, ['forwardedRef']);
      var d = b('joinClasses')(a.className, 'img');
      if (a.src == null)
        return b('React').createElement(
          'img',
          babelHelpers['extends']({}, a, { className: d, ref: c })
        );
      var e = b('coerceImageishSprited')(a.src),
        f =
          !!e && a.alt != null && String(a.alt) !== ''
            ? b('React').createElement('u', null, a.alt)
            : null;
      if (typeof a.src === 'string')
        return b('React').createElement(
          'img',
          babelHelpers['extends']({}, a, { className: d, ref: c, src: a.src }),
          f
        );
      if (e) {
        var g = e.spriteCssClass;
        e = e.spriteMapCssClass;
        a.src;
        var h = babelHelpers.objectWithoutProperties(a, ['src']);
        return b('React').createElement(
          'i',
          babelHelpers['extends']({}, h, {
            className: b('joinClasses')(d, e, g),
            ref: c,
          }),
          f
        );
      }
      h = a.src ? b('getImageSourceURLFromImageish')(a.src) : '';
      e = b('coerceImageishURL')(a.src);
      return a.width === undefined && a.height === undefined && e
        ? b('React').createElement(
            'img',
            babelHelpers['extends']({}, a, {
              className: d,
              height: e.height,
              src: h,
              ref: c,
              width: e.width,
            }),
            f
          )
        : b('React').createElement(
            'img',
            babelHelpers['extends']({}, a, { className: d, ref: c, src: h }),
            f
          );
    }
    i.defaultProps = c;
    i.propTypes = { src: b('validateImageSrcPropType') };
    function a(a, c) {
      Object.prototype.hasOwnProperty.call(a, 'source') &&
        b('warnUnsupportedProp')('ImageCore', 'source', 'Did you mean `src`?');
      var d = a.src != null ? b('getImageSourceURLFromImageish')(a.src) : '';
      if (b('EncryptedImgUtils').isEncrypted(d)) {
        a.src;
        var e = babelHelpers.objectWithoutProperties(a, ['src']);
        return b('React').createElement(
          h,
          babelHelpers['extends']({}, e, { encryptedSrc: d, forwardedRef: c })
        );
      } else
        return b('React').createElement(
          i,
          babelHelpers['extends']({}, a, { forwardedRef: c })
        );
    }
    a.displayName = 'ImageCore';
    e.exports = b('React').forwardRef(a);
  },
  null
);
__d(
  'Image.react',
  ['ImageCore.react'],
  function (a, b, c, d, e, f) {
    e.exports = b('ImageCore.react');
  },
  null
);
__d(
  'destroyOnUnload',
  ['Run'],
  function (a, b, c, d, e, f) {
    function a(a) {
      b('Run').onLeave(a);
    }
    e.exports = a;
  },
  null
);
__d(
  'PlatformDialog',
  ['cx', 'CSS', 'DOMEvent', 'DOMEventListener'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h;
    a.getInstance = function () {
      return h;
    };
    function a(a, c, d) {
      (h = this),
        (this.$1 = a),
        (this.$2 = c),
        (this.$3 = !1),
        b('DOMEventListener').add(
          this.$1,
          'submit',
          function (c) {
            if (this.$3) {
              new (b('DOMEvent'))(c).kill();
              return;
            }
            this.$3 = !0;
            d && b('CSS').addClass(a, '_32qa');
          }.bind(this)
        );
    }
    a.prototype.getForm = function () {
      return this.$1;
    };
    a.prototype.getDisplay = function () {
      return this.$2;
    };
    a.prototype.hasBeenSubmitted = function () {
      return this.$3;
    };
    a.RESPONSE = 'platform/dialog/response';
    e.exports = a;
  },
  null
);
__d(
  'XLynxAsyncCallbackController',
  ['XController'],
  function (a, b, c, d, e, f) {
    e.exports = b('XController').create('/si/linkclick/ajax_callback/', {
      lynx_uri: { type: 'String' },
    });
  },
  null
);
__d(
  'FBLynxLogging',
  [
    'AsyncRequest',
    'AsyncResponse',
    'BanzaiODS',
    'XLynxAsyncCallbackController',
  ],
  function (a, b, c, d, e, f) {
    a = {
      log: function (a) {
        var c = b('XLynxAsyncCallbackController').getURIBuilder().getURI();
        new (b('AsyncRequest'))(c)
          .setData({ lynx_uri: a })
          .setErrorHandler(function (a) {
            a = a.getError();
            b('BanzaiODS').bumpEntityKey(
              'linkshim',
              'click_log.post.fail.' + a
            );
          })
          .setTransportErrorHandler(function (a) {
            a = a.getError();
            b('BanzaiODS').bumpEntityKey(
              'linkshim',
              'click_log.post.transport_fail.' + a
            );
          })
          .send();
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'isLinkshimURI',
  ['isBonfireURI', 'isFacebookURI', 'isMessengerDotComURI'],
  function (a, b, c, d, e, f) {
    function a(a) {
      var c = a.getPath();
      return (c === '/l.php' ||
        c.indexOf('/si/ajax/l/') === 0 ||
        c.indexOf('/l/') === 0 ||
        c.indexOf('l/') === 0) &&
        (b('isFacebookURI')(a) ||
          b('isMessengerDotComURI')(a) ||
          b('isBonfireURI')(a))
        ? !0
        : !1;
    }
    e.exports = a;
  },
  null
);
__d(
  'FBLynxBase',
  ['FBLynxLogging', 'LinkshimHandlerConfig', 'URI', '$', 'isLinkshimURI'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function g(a) {
      if (!b('isLinkshimURI')(a)) return null;
      a = a.getQueryData().u;
      return !a ? null : a;
    }
    var h = {
      logAsyncClick: function (a) {
        h.swapLinkWithUnshimmedLink(a);
        a = a.getAttribute('data-lynx-uri');
        if (!a) return;
        b('FBLynxLogging').log(a);
      },
      originReferrerPolicyClick: function (a) {
        var c = b('$')('meta_referrer');
        c.content = b('LinkshimHandlerConfig').switched_meta_referrer_policy;
        h.logAsyncClick(a);
        setTimeout(function () {
          c.content = b('LinkshimHandlerConfig').default_meta_referrer_policy;
        }, 100);
      },
      swapLinkWithUnshimmedLink: function (a) {
        var c = a.href,
          d = g(new (b('URI'))(c));
        if (!d) return;
        a.setAttribute('data-lynx-uri', c);
        a.href = d;
      },
      revertSwapIfLynxURIPresent: function (a) {
        var b = a.getAttribute('data-lynx-uri');
        if (!b) return;
        a.removeAttribute('data-lynx-uri');
        a.href = b;
      },
    };
    e.exports = h;
  },
  null
);
__d(
  'FBLynx',
  ['Event', 'FBLynxBase', 'LinkshimHandlerConfig', 'Parent'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = {
      alreadySetup: !1,
      setupDelegation: function (a) {
        __p && __p();
        a === void 0 && (a = !1);
        if (document.body == null) {
          if (a) return;
          setTimeout(function () {
            g.setupDelegation(!0);
          }, 100);
          return;
        }
        if (g.alreadySetup) return;
        g.alreadySetup = !0;
        var c = function (event) {
          __p && __p();
          var a = g.getMaybeLynxLink(event.target);
          if (!a) return;
          var c = a[0];
          a = a[1];
          switch (c) {
            case 'async':
            case 'asynclazy':
              b('FBLynxBase').logAsyncClick(a);
              break;
            case 'origin':
              b('FBLynxBase').originReferrerPolicyClick(a);
              break;
            case 'hover':
              g.hoverClick(a);
              break;
          }
        };
        b('Event').listen(document.body, 'click', c);
        b('LinkshimHandlerConfig').middle_click_requires_event &&
          b('Event').listen(document.body, 'mouseup', function (event) {
            event.button == 1 && c(event);
          });
        b('Event').listen(document.body, 'mouseover', function (event) {
          var a = g.getMaybeLynxLink(event.target);
          if (!a) return;
          var b = a[0];
          a = a[1];
          switch (b) {
            case 'async':
            case 'asynclazy':
            case 'origin':
            case 'hover':
              g.mouseover(a);
              break;
          }
        });
        b('Event').listen(document.body, 'contextmenu', function (event) {
          var a = g.getMaybeLynxLink(event.target);
          if (!a) return;
          var b = a[0];
          a = a[1];
          switch (b) {
            case 'async':
            case 'hover':
            case 'origin':
              g.contextmenu(a);
              break;
            case 'asynclazy':
              break;
          }
        });
      },
      getMaybeLynxLink: function (a) {
        a = b('Parent').byAttribute(a, 'data-lynx-mode');
        if (a instanceof HTMLAnchorElement) {
          var c = a.getAttribute('data-lynx-mode');
          switch (c) {
            case 'async':
            case 'asynclazy':
            case 'hover':
            case 'origin':
              return [c, a];
            default:
              return null;
          }
        }
        return null;
      },
      hoverClick: function (a) {
        b('FBLynxBase').revertSwapIfLynxURIPresent(a);
      },
      mouseover: function (a) {
        b('FBLynxBase').swapLinkWithUnshimmedLink(a);
      },
      contextmenu: function (a) {
        b('FBLynxBase').revertSwapIfLynxURIPresent(a);
      },
    };
    e.exports = g;
  },
  null
);
__d(
  'ArbiterFrame',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    a = {
      inform: function (a, b, c) {
        var d = parent.frames,
          e = d.length,
          f;
        b.crossFrame = !0;
        for (var g = 0; g < e; g++) {
          f = d[g];
          try {
            if (!f || f == window) continue;
            f.require
              ? f.require('Arbiter').inform(a, b, c)
              : f.ServerJSAsyncLoader && f.ServerJSAsyncLoader.wakeUp(a, b, c);
          } catch (a) {}
        }
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'isAdsExcelAddinURI',
  [],
  function (a, b, c, d, e, f) {
    var g = new RegExp('(^|\\.)fbaddins\\.com$', 'i'),
      h = ['https'];
    function a(a) {
      if (a.isEmpty() && a.toString() !== '#') return !1;
      return !a.getDomain() && !a.getProtocol()
        ? !1
        : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain());
    }
    e.exports = a;
  },
  null
);
__d(
  'isValidURI',
  [],
  function (a, b, c, d, e, f) {
    var g = new RegExp(
        '((^|\\.)instagram\\.com$)|((^|\\.)wit\\.ai$)|((^|\\.)accountkit\\.com$)',
        'i'
      ),
      h = ['https'];
    function a(a) {
      if (a.isEmpty() && a.toString() !== '#') return !1;
      return !a.getDomain() && !a.getProtocol()
        ? !1
        : h.includes(a.getProtocol()) && g.test(a.getDomain());
    }
    e.exports = a;
  },
  null
);
__d(
  'AsyncSignal',
  [
    'Promise',
    'ErrorUtils',
    'QueryString',
    'Run',
    'TimeSlice',
    'TrackingConfig',
    'URI',
    'ZeroRewrites',
    'getAsyncParams',
    'isAdsExcelAddinURI',
    'isBonfireURI',
    'isFacebookURI',
    'isMessengerDotComURI',
    'isValidURI',
    'memoize',
    'promiseDone',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g;
    function a(a, c) {
      (this.data = c || {}),
        (this.uri = a.toString()),
        b('TrackingConfig').domain &&
          this.uri.charAt(0) == '/' &&
          (this.uri = b('TrackingConfig').domain + this.uri);
    }
    a.prototype.setHandler = function (a) {
      this.handler = a;
      return this;
    };
    a.prototype.setTimeout = function (a) {
      this.timeout = a;
      return this;
    };
    a.prototype.send = function () {
      b('TimeSlice').guard(this._send.bind(this), 'AsyncSignal send', {
        propagationType: b('TimeSlice').PropagationType.ORPHAN,
      })();
    };
    a.prototype._send = function () {
      __p && __p();
      var a = this.handler,
        c = this.data;
      c.asyncSignal = ((Math.random() * 1e4) | 0) + 1;
      var d = b('ZeroRewrites').rewriteURI(new (b('URI'))(this.uri));
      d =
        b('isFacebookURI')(d) ||
        b('isMessengerDotComURI')(d) ||
        b('isBonfireURI')(d) ||
        b('isAdsExcelAddinURI')(d) ||
        b('isValidURI')(d);
      if (d) Object.assign(c, b('getAsyncParams')('POST'));
      else
        throw new Error(
          "'" +
            this.uri +
            "' is an external URL, you should not send async signals to offsite links."
        );
      var e = b('QueryString').appendToUrl(this.uri, c);
      g ||
        (g = new (b('Promise'))(function (a) {
          b('Run').onAfterLoad(a);
        }));
      d = g.then(function () {
        return new (b('Promise'))(function (a, b) {
          var c = new Image();
          c.onload = a;
          c.onerror = c.onabort = b;
          c.src = e;
        });
      });
      if (a) {
        var f = !1,
          h = b('memoize')(function () {
            b('ErrorUtils').applyWithGuard(a, null, [f]);
          });
        b('promiseDone')(
          d.then(function () {
            (f = !0), h();
          }, h)
        );
        this.timeout && setTimeout(h, this.timeout);
      }
      return this;
    };
    e.exports = a;
  },
  null
);
__d(
  'DOMDimensions',
  ['Style', 'getDocumentScrollElement'],
  function (a, b, c, d, e, f) {
    __p && __p();
    a = {
      getElementDimensions: function (a) {
        return { width: a.offsetWidth || 0, height: a.offsetHeight || 0 };
      },
      getDocumentDimensions: function (a) {
        a = b('getDocumentScrollElement')(a);
        var c = a.scrollWidth || 0;
        a = a.scrollHeight || 0;
        return { width: c, height: a };
      },
      measureElementBox: function (a, c, d, e, f) {
        __p && __p();
        var g;
        switch (c) {
          case 'left':
          case 'right':
          case 'top':
          case 'bottom':
            g = [c];
            break;
          case 'width':
            g = ['left', 'right'];
            break;
          case 'height':
            g = ['top', 'bottom'];
            break;
          default:
            throw Error('Invalid plane: ' + c);
        }
        c = function (c, d) {
          var e = 0;
          for (var f = 0; f < g.length; f++)
            e += parseFloat(b('Style').get(a, c + '-' + g[f] + d)) || 0;
          return e;
        };
        return (
          (d ? c('padding', '') : 0) +
          (e ? c('border', '-width') : 0) +
          (f ? c('margin', '') : 0)
        );
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'AbstractErrorSignal',
  ['invariant', 'BanzaiODS', 'ScriptPath', 'SessionName', 'SiteData'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h = !0;
    function i() {
      this.constructor !== i || g(0, undefined);
    }
    i.prototype.logJSError = function (a, c) {
      __p && __p();
      c = c || {};
      c.svn_rev = b('SiteData').client_revision;
      c.push_phase = b('SiteData').push_phase;
      c.script_path = b('ScriptPath').getScriptPath();
      c.extra = c.extra || {};
      c.extra.hrm = b('SiteData').be_mode;
      var d = c.extra.type || 'error';
      h &&
        a === 'onerror' &&
        d === 'error' &&
        ((c.extra.extra = c.extra.extra || []),
        c.extra.extra.push('first_error'),
        (h = !1));
      d = (b('SessionName').getName() || '-') + '/-';
      this.performCounterLogging('javascript_error');
      this.performSignalLogging('javascript_error', { c: a, a: d, m: c });
    };
    i.prototype.performCounterLogging = function (a) {
      b('BanzaiODS').bumpEntityKey(
        'js_error_reporting',
        'error_signal.category.' + a
      ),
        a === 'javascript_error' &&
          b('BanzaiODS').bumpEntityKey(
            'js_error_reporting',
            'error_signal.sent'
          );
    };
    i.prototype.performSignalLogging = function (a, b) {
      g(0, undefined);
    };
    e.exports = i;
  },
  null
);
__d(
  'XJavaScriptLogviewSiteCategory',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      MBASIC: 'm_basic',
      MTOUCH: 'm_touch',
      WWW: 'www',
    });
  },
  null
);
__d(
  'ErrorSignal',
  [
    'AbstractErrorSignal',
    'AsyncSignal',
    'Banzai',
    'BanzaiODS',
    'ErrorSignalConfig',
    'XJavaScriptLogviewSiteCategory',
    'gkx',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g,
      h,
      i = 'js_error_logging';
    g = babelHelpers.inherits(c, b('AbstractErrorSignal'));
    h = g && g.prototype;
    c.prototype.performCounterLogging = function (a) {
      h.performCounterLogging.call(this, a),
        a === 'javascript_error' &&
          b('BanzaiODS').bumpEntityKey(
            'js_error_reporting',
            'error_signal.' + b('XJavaScriptLogviewSiteCategory').WWW + '.sent'
          );
    };
    c.prototype.performSignalLogging = function (a, c) {
      b('gkx')(
        'AT62Qfye-sgsYoL_O9bZPRJT6jN8PE-zabHwEoClspTZbYQrtc9jOblGZfAFttbXVhFOFzFWDnaLP8Tm92W-qRAJ'
      )
        ? b('Banzai').post(i, c)
        : new (b('AsyncSignal'))(b('ErrorSignalConfig').uri, {
            c: a,
            m: JSON.stringify(c),
          }).send();
    };
    function c() {
      g.apply(this, arguments);
    }
    d = new c();
    e.exports = d;
    a.ErrorSignal = d;
  },
  null
);
__d(
  'PageHooks',
  ['Arbiter', 'ErrorUtils', 'InitialJSLoader', 'PageEvents'],
  function (a, b, c, d, e, f) {
    __p && __p();
    f = { DOMREADY_HOOK: 'domreadyhooks', ONLOAD_HOOK: 'onloadhooks' };
    function g() {
      var c = a.CavalryLogger;
      !window.domready && c && c.getInstance().setTimeStamp('t_prehooks');
      j(k.DOMREADY_HOOK);
      !window.domready && c && c.getInstance().setTimeStamp('t_hooks');
      window.domready = !0;
      b('Arbiter').inform('uipage_onload', !0, 'state');
    }
    function h() {
      j(k.ONLOAD_HOOK), (window.loaded = !0);
    }
    function i(a, c) {
      return b('ErrorUtils').applyWithGuard(
        a,
        null,
        null,
        function (a) {
          (a.event_type = c), (a.category = 'runhook');
        },
        'PageHooks:' + c
      );
    }
    function j(a) {
      __p && __p();
      var b = a == 'onbeforeleavehooks' || a == 'onbeforeunloadhooks';
      do {
        var c = window[a];
        if (!c) break;
        b || (window[a] = null);
        for (var d = 0; d < c.length; d++) {
          var e = i(c[d], a);
          if (b && e) return e;
        }
      } while (!b && window[a]);
    }
    function c() {
      window.domready || ((window.domready = !0), j('onloadhooks')),
        window.loaded || ((window.loaded = !0), j('onafterloadhooks'));
    }
    function d() {
      b('Arbiter').registerCallback(g, [
        b('PageEvents').BIGPIPE_DOMREADY,
        b('InitialJSLoader').INITIAL_JS_READY,
      ]),
        b('Arbiter').registerCallback(h, [
          b('PageEvents').BIGPIPE_DOMREADY,
          b('PageEvents').BIGPIPE_ONLOAD,
          b('InitialJSLoader').INITIAL_JS_READY,
        ]),
        b('Arbiter').subscribe(
          b('PageEvents').NATIVE_ONBEFOREUNLOAD,
          function (a, b) {
            (b.warn = j('onbeforeleavehooks') || j('onbeforeunloadhooks')),
              b.warn || ((window.domready = !1), (window.loaded = !1));
          },
          'new'
        ),
        b('Arbiter').subscribe(
          b('PageEvents').NATIVE_ONUNLOAD,
          function (a, b) {
            j('onunloadhooks'), j('onafterunloadhooks');
          },
          'new'
        );
    }
    var k = babelHelpers['extends'](
      {
        _domreadyHook: g,
        _onloadHook: h,
        runHook: i,
        runHooks: j,
        keepWindowSetAsLoaded: c,
      },
      f
    );
    d();
    a.PageHooks = e.exports = k;
  },
  null
);
__d(
  'Popup',
  [],
  function (a, b, c, d, e, f) {
    a = {
      open: function (a, b, c, d) {
        var e = document.body,
          f = 'screenX' in window ? window.screenX : window.screenLeft,
          g = 'screenY' in window ? window.screenY : window.screenTop,
          h = 'outerWidth' in window ? window.outerWidth : e.clientWidth;
        e = 'outerHeight' in window ? window.outerHeight : e.clientHeight - 22;
        f = Math.floor(f + (h - b) / 2);
        h = Math.floor(g + (e - c) / 2.5);
        g = [
          'width=' + b,
          'height=' + c,
          'left=' + f,
          'top=' + h,
          'scrollbars',
        ];
        return window.open(a, d || '_blank', g.join(','));
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'PopupLink',
  ['DOMEvent', 'DOMEventListener', 'Popup'],
  function (a, b, c, d, e, f) {
    a = {
      listen: function (a, c, d) {
        b('DOMEventListener').add(a, 'click', function (e) {
          new (b('DOMEvent'))(e).kill(), b('Popup').open(a.href, c, d);
        });
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'BasicVector',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    function g(a, b) {
      (this.x = a), (this.y = b);
    }
    g.prototype.derive = function (a, b) {
      return new g(a, b);
    };
    g.prototype.toString = function () {
      return '(' + this.x + ', ' + this.y + ')';
    };
    g.prototype.add = function (a, b) {
      b === undefined && ((b = a.y), (a = a.x));
      a = parseFloat(a);
      b = parseFloat(b);
      return this.derive(this.x + a, this.y + b);
    };
    g.prototype.mul = function (a, b) {
      b === undefined && (b = a);
      return this.derive(this.x * a, this.y * b);
    };
    g.prototype.div = function (a, b) {
      b === undefined && (b = a);
      return this.derive((this.x * 1) / a, (this.y * 1) / b);
    };
    g.prototype.sub = function (a, b) {
      if (arguments.length === 1) return this.add(a.mul(-1));
      else return this.add(-a, -b);
    };
    g.prototype.distanceTo = function (a) {
      return this.sub(a).magnitude();
    };
    g.prototype.magnitude = function () {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    g.prototype.rotate = function (a) {
      return this.derive(
        this.x * Math.cos(a) - this.y * Math.sin(a),
        this.x * Math.sin(a) + this.y * Math.cos(a)
      );
    };
    e.exports = g;
  },
  null
);
__d(
  'getUnboundedScrollPosition',
  ['Scroll'],
  function (a, b, c, d, e, f) {
    function a(a) {
      return a === window
        ? {
            x:
              window.pageXOffset ||
              b('Scroll').getLeft(document.documentElement),
            y:
              window.pageYOffset ||
              b('Scroll').getTop(document.documentElement),
          }
        : { x: b('Scroll').getLeft(a), y: b('Scroll').getTop(a) };
    }
    e.exports = a;
  },
  null
);
__d(
  'DOMVector',
  [
    'BasicVector',
    'getDocumentScrollElement',
    'getElementPosition',
    'getUnboundedScrollPosition',
    'getViewportDimensions',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g;
    a = babelHelpers.inherits(h, b('BasicVector'));
    g = a && a.prototype;
    function h(a, b, c) {
      g.constructor.call(this, a, b), (this.domain = c || 'pure');
    }
    h.prototype.derive = function (a, b, c) {
      return new h(a, b, c || this.domain);
    };
    h.prototype.add = function (a, b) {
      a instanceof h &&
        a.getDomain() !== 'pure' &&
        (a = a.convertTo(this.domain));
      return g.add.call(this, a, b);
    };
    h.prototype.convertTo = function (a) {
      __p && __p();
      if (a != 'pure' && a != 'viewport' && a != 'document') {
        !1;
        return this.derive(0, 0);
      }
      if (a == this.domain) return this.derive(this.x, this.y, this.domain);
      if (a == 'pure') return this.derive(this.x, this.y);
      if (this.domain == 'pure') {
        !1;
        return this.derive(0, 0);
      }
      var b = h.getScrollPosition('document'),
        c = this.x,
        d = this.y;
      this.domain == 'document'
        ? ((c -= b.x), (d -= b.y))
        : ((c += b.x), (d += b.y));
      return this.derive(c, d, a);
    };
    h.prototype.getDomain = function () {
      return this.domain;
    };
    h.from = function (a, b, c) {
      return new h(a, b, c);
    };
    h.getScrollPosition = function (a) {
      a = a || 'document';
      var c = b('getUnboundedScrollPosition')(window);
      return this.from(c.x, c.y, 'document').convertTo(a);
    };
    h.getElementPosition = function (a, c) {
      c = c || 'document';
      a = b('getElementPosition')(a);
      return this.from(a.x, a.y, 'viewport').convertTo(c);
    };
    h.getElementDimensions = function (a) {
      return this.from(a.offsetWidth || 0, a.offsetHeight || 0);
    };
    h.getViewportDimensions = function () {
      var a = b('getViewportDimensions')();
      return this.from(a.width, a.height, 'viewport');
    };
    h.getViewportWithoutScrollbarDimensions = function () {
      var a = b('getViewportDimensions').withoutScrollbars();
      return this.from(a.width, a.height, 'viewport');
    };
    h.getDocumentDimensions = function (a) {
      a = b('getDocumentScrollElement')(a);
      return this.from(a.scrollWidth, a.scrollHeight, 'document');
    };
    e.exports = h;
  },
  null
);
__d(
  'Vector',
  ['DOMVector', 'Event', 'Scroll'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g;
    a = babelHelpers.inherits(h, b('DOMVector'));
    g = a && a.prototype;
    function h(a, b, c) {
      g.constructor.call(this, parseFloat(a), parseFloat(b), c);
    }
    h.prototype.derive = function (a, b, c) {
      return new h(a, b, c || this.domain);
    };
    h.prototype.setElementPosition = function (a) {
      var b = this.convertTo('document');
      a.style.left = parseInt(b.x, 10) + 'px';
      a.style.top = parseInt(b.y, 10) + 'px';
      return this;
    };
    h.prototype.setElementDimensions = function (a) {
      return this.setElementWidth(a).setElementHeight(a);
    };
    h.prototype.setElementWidth = function (a) {
      a.style.width = parseInt(this.x, 10) + 'px';
      return this;
    };
    h.prototype.setElementHeight = function (a) {
      a.style.height = parseInt(this.y, 10) + 'px';
      return this;
    };
    h.prototype.scrollElementBy = function (a) {
      a == document.body
        ? window.scrollBy(this.x, this.y)
        : (b('Scroll').setLeft(a, b('Scroll').getLeft(a) + this.x),
          b('Scroll').setTop(a, b('Scroll').getTop(a) + this.y));
      return this;
    };
    h.from = function (a, b, c) {
      return new h(a, b, c);
    };
    h.getEventPosition = function (a, c) {
      c = c || 'document';
      a = b('Event').getPosition(a);
      a = this.from(a.x, a.y, 'document');
      return a.convertTo(c);
    };
    h.getTouchEventPosition = function (a, b) {
      b === void 0 && (b = 'document');
      a = a.touches[0];
      a = this.from(a.pageX, a.pageY, 'document');
      return a.convertTo(b);
    };
    h.deserialize = function (a) {
      a = a.split(',');
      return this.from(a[0], a[1]);
    };
    e.exports = h;
  },
  null
);
__d(
  'ViewportBounds',
  [
    'Arbiter',
    'ArbiterMixin',
    'BlueBar',
    'PageEvents',
    'Vector',
    'emptyFunction',
    'removeFromArray',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = { top: [], right: [], bottom: [], left: [] };
    function a(a) {
      return function () {
        return g[a].reduce(function (a, b) {
          return Math.max(a, b.getSize());
        }, 0);
      };
    }
    function c(a, b) {
      return function (c) {
        return new h(a, c, b);
      };
    }
    function h(a, c, d) {
      d === void 0 && (d = !1),
        (this.getSide = b('emptyFunction').thatReturns(a)),
        (this.getSize = function () {
          return typeof c === 'function' ? c() : c;
        }),
        (this.isPersistent = b('emptyFunction').thatReturns(d)),
        g[a].push(this),
        i.inform('change');
    }
    h.prototype.remove = function () {
      b('removeFromArray')(g[this.getSide()], this), i.inform('change');
    };
    b('Arbiter').subscribe(b('PageEvents').AJAXPIPE_ONUNLOAD, function () {
      ['top', 'right', 'bottom', 'left'].forEach(function (a) {
        a = g[a];
        for (var b = a.length - 1; b >= 0; b--) {
          var c = a[b];
          c.isPersistent() || c.remove();
        }
      });
    });
    var i = babelHelpers['extends']({}, b('ArbiterMixin'), {
      getTop: a('top'),
      getRight: a('right'),
      getBottom: a('bottom'),
      getLeft: a('left'),
      getElementPosition: function (a) {
        a = b('Vector').getElementPosition(a);
        a.y -= i.getTop();
        return a;
      },
      addTop: c('top'),
      addRight: c('right'),
      addBottom: c('bottom'),
      addLeft: c('left'),
      addPersistentTop: c('top', !0),
      addPersistentRight: c('right', !0),
      addPersistentBottom: c('bottom', !0),
      addPersistentLeft: c('left', !0),
    });
    i.addPersistentTop(function () {
      if (b('BlueBar').hasFixedBlueBar()) {
        var a = b('BlueBar').getMaybeFixedRoot();
        return a ? a.offsetHeight : 0;
      }
      return 0;
    });
    e.exports = i;
  },
  null
);
__d(
  'Log',
  ['sprintf'],
  function (a, b, c, d, e, f) {
    c = { DEBUG: 3, INFO: 2, WARNING: 1, ERROR: 0 };
    function a(a, c) {
      var d = Array.prototype.slice.call(arguments, 2),
        e = b('sprintf').apply(null, d),
        f = window.console;
      f && g.level >= c && f[a in f ? a : 'log'](e);
    }
    var g = {
      level: -1,
      Level: c,
      debug: a.bind(null, 'debug', c.DEBUG),
      info: a.bind(null, 'info', c.INFO),
      warn: a.bind(null, 'warn', c.WARNING),
      error: a.bind(null, 'error', c.ERROR),
      log: a,
    };
    e.exports = g;
  },
  null
);
__d(
  'Queue',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = {};
    function h(a) {
      (this._opts = babelHelpers['extends'](
        { interval: 0, processor: null },
        a
      )),
        (this._queue = []),
        (this._stopped = !0);
    }
    h.prototype._dispatch = function (a) {
      __p && __p();
      if (this._stopped || this._queue.length === 0) return;
      if (!this._opts.processor) {
        this._stopped = !0;
        throw new Error('No processor available');
      }
      if (this._opts.interval)
        this._opts.processor.call(this, this._queue.shift()),
          (this._timeout = setTimeout(
            this._dispatch.bind(this),
            this._opts.interval
          ));
      else
        while (this._queue.length)
          this._opts.processor.call(this, this._queue.shift());
    };
    h.prototype.enqueue = function (a) {
      this._opts.processor && !this._stopped
        ? this._opts.processor.call(this, a)
        : this._queue.push(a);
      return this;
    };
    h.prototype.start = function (a) {
      a && (this._opts.processor = a);
      this._stopped = !1;
      this._dispatch();
      return this;
    };
    h.prototype.isStarted = function () {
      return !this._stopped;
    };
    h.prototype.dispatch = function () {
      this._dispatch(!0);
    };
    h.prototype.stop = function (a) {
      this._stopped = !0;
      a && clearTimeout(this._timeout);
      return this;
    };
    h.prototype.merge = function (a, b) {
      this._queue[b ? 'unshift' : 'push'].apply(this._queue, a._queue);
      a._queue = [];
      this._dispatch();
      return this;
    };
    h.prototype.getLength = function () {
      return this._queue.length;
    };
    h.get = function (a, b) {
      var c;
      a in g ? (c = g[a]) : (c = g[a] = new h(b));
      return c;
    };
    h.exists = function (a) {
      return a in g;
    };
    h.remove = function (a) {
      return delete g[a];
    };
    e.exports = h;
  },
  null
);
__d(
  'resolveWindow',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a) {
      __p && __p();
      var b = window;
      a = a.split('.');
      try {
        for (var c = 0; c < a.length; c++) {
          var d = a[c],
            e = /^frames\[[\'\"]?([a-zA-Z0-9\-_]+)[\'\"]?\]$/.exec(d);
          if (e) b = b.frames[e[1]];
          else if (d === 'opener' || d === 'parent' || d === 'top') b = b[d];
          else return null;
        }
      } catch (a) {
        return null;
      }
      return b;
    }
    e.exports = a;
  },
  null
);
__d(
  'XD',
  [
    'Arbiter',
    'DOM',
    'DOMDimensions',
    'Log',
    'PHPQuerySerializer',
    'Queue',
    'URI',
    'isFacebookURI',
    'isInIframe',
    'resolveWindow',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = 'fb_xdm_frame_' + location.protocol.replace(':', ''),
      h = {
        _callbacks: [],
        _opts: {
          autoResize: !1,
          allowShrink: !0,
          channelUrl: null,
          hideOverflow: !1,
          resizeTimeout: 1e3,
          resizeWidth: !1,
          expectResizeAck: !1,
          resizeAckTimeout: 6e3,
        },
        _lastResizeAckId: 0,
        _resizeCount: 0,
        _resizeTimestamp: 0,
        _shrinker: null,
        init: function (a) {
          (this._opts = babelHelpers['extends']({}, this._opts, a)),
            this._opts.autoResize && this._startResizeMonitor(),
            b('Arbiter').subscribe(
              'Connect.Unsafe.resize.ack',
              function (a, b) {
                b.id || (b.id = this._resizeCount),
                  b.id > this._lastResizeAckId &&
                    (this._lastResizeAckId = b.id);
              }.bind(this)
            );
        },
        getQueue: function () {
          this._queue || (this._queue = new (b('Queue'))());
          return this._queue;
        },
        setChannelUrl: function (a) {
          this.getQueue().start(
            function (b) {
              return this.send(b, a);
            }.bind(this)
          );
        },
        send: function (a, c) {
          __p && __p();
          c = c || this._opts.channelUrl;
          if (!c) {
            this.getQueue().enqueue(a);
            return;
          }
          var d = {};
          c = new (b('URI'))(c);
          Object.assign(
            d,
            a,
            b('PHPQuerySerializer').deserialize(c.getFragment())
          );
          var e = new (b('URI'))(d.origin).getOrigin(),
            f = b('resolveWindow')(d.relation.replace(/^parent\./, '')),
            h = 50;
          a = function a() {
            var c = f.frames[g];
            try {
              c.proxyMessage(b('PHPQuerySerializer').serialize(d), e);
            } catch (c) {
              --h
                ? setTimeout(a, 100)
                : b('Log').warn('No such frame "' + g + '" to proxyMessage to');
            }
          };
          a();
        },
        _computeSize: function () {
          __p && __p();
          var a = b('DOMDimensions').getDocumentDimensions(),
            c = 0;
          if (this._opts.resizeWidth) {
            var d = document.body;
            if (d.clientWidth < d.scrollWidth) c = a.width;
            else {
              d = d.childNodes;
              for (var e = 0; e < d.length; e++) {
                var f = d[e];
                f = f.offsetLeft + f.offsetWidth;
                f > c && (c = f);
              }
            }
            c = Math.max(c, h.forced_min_width);
          }
          a.width = c;
          this._opts.allowShrink &&
            (this._shrinker || (this._shrinker = b('DOM').create('div')),
            b('DOM').appendContent(document.body, this._shrinker),
            (a.height = Math.max(this._shrinker.offsetTop, 0)));
          return a;
        },
        _startResizeMonitor: function () {
          __p && __p();
          var a,
            c = document.documentElement;
          this._opts.hideOverflow &&
            ((c.style.overflow = 'hidden'),
            (document.body.style.overflow = 'hidden'));
          c = function () {
            __p && __p();
            var c = this._computeSize(),
              d = Date.now(),
              e =
                this._lastResizeAckId < this._resizeCount &&
                d - this._resizeTimestamp > this._opts.resizeAckTimeout;
            if (
              !a ||
              (this._opts.expectResizeAck && e) ||
              (this._opts.allowShrink && a.width != c.width) ||
              (!this._opts.allowShrink && a.width < c.width) ||
              (this._opts.allowShrink && a.height != c.height) ||
              (!this._opts.allowShrink && a.height < c.height)
            ) {
              a = c;
              this._resizeCount++;
              this._resizeTimestamp = d;
              e = {
                type: 'resize',
                height: c.height,
                ackData: { id: this._resizeCount },
              };
              c.width && c.width != 0 && (e.width = c.width);
              try {
                if (
                  b('isFacebookURI')(new (b('URI'))(document.referrer)) &&
                  b('isInIframe')() &&
                  window.name &&
                  window.parent.location &&
                  window.parent.location.toString &&
                  b('isFacebookURI')(new (b('URI'))(window.parent.location))
                ) {
                  d = window.parent.document.getElementsByTagName('iframe');
                  for (var c = 0; c < d.length; c = c + 1)
                    d[c].name == window.name &&
                      (this._opts.resizeWidth &&
                        (d[c].style.width = e.width + 'px'),
                      (d[c].style.height = e.height + 'px'));
                }
                this.send(e);
              } catch (a) {
                this.send(e);
              }
            }
          }.bind(this);
          c();
          setInterval(c, this._opts.resizeTimeout);
        },
      };
    c = babelHelpers['extends']({}, h);
    e.exports.UnverifiedXD = c;
    e.exports.XD = h;
    a.UnverifiedXD = c;
    a.XD = h;
  },
  null
);
__d(
  'XHPTemplate',
  ['DataStore', 'DOM', 'HTML', 'XHPTemplateProcessor'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = b('XHPTemplateProcessor').processor;
    function h(a) {
      g instanceof Function && (a = g(a)), (this._model = a);
    }
    h.prototype.render = function () {
      b('HTML').isHTML(this._model) &&
        (this._model = b('DOM').setContent(
          document.createDocumentFragment(),
          this._model
        )[0]);
      return this._model.cloneNode(!0);
    };
    h.prototype.build = function () {
      return new i(this.render());
    };
    h.getNode = function (a, b) {
      return h.getNodes(a)[b];
    };
    h.getNodes = function (a) {
      __p && __p();
      var c = b('DataStore').get(a, 'XHPTemplate:nodes');
      if (!c) {
        c = {};
        var d = b('DOM').scry(a, '[data-jsid]');
        d.push(a);
        var e = d.length;
        while (e--) {
          var f = d[e];
          c[f.getAttribute('data-jsid')] = f;
          f.removeAttribute('data-jsid');
        }
        b('DataStore').set(a, 'XHPTemplate:nodes', c);
      }
      return c;
    };
    function i(a) {
      (this._root = a), this._populateNodes();
    }
    i.prototype._populateNodes = function () {
      this._nodes = {};
      this._leaves = {};
      var a = this._root.getElementsByTagName('*');
      for (var b = 0, c = a.length; b < c; b++) {
        var d = a[b],
          e = d.getAttribute('data-jsid');
        e &&
          (d.removeAttribute('data-jsid'),
          (this._nodes[e] = d),
          (this._leaves[e] = !d.childNodes.length));
      }
    };
    i.prototype.getRoot = function () {
      return this._root;
    };
    i.prototype.getNode = function (a) {
      return this._nodes[a];
    };
    i.prototype.setNodeProperty = function (a, b, c) {
      this.getNode(a)[b] = c;
      return this;
    };
    i.prototype.setNodeContent = function (a, c) {
      if (!this._leaves[a])
        throw new Error("Can't setContent on non-leaf node: " + a);
      b('DOM').setContent(this.getNode(a), c);
      return this;
    };
    e.exports = h;
  },
  null
);
__d(
  'Plugin',
  ['Arbiter', 'ArbiterFrame'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = {
      CONNECT: 'platform/plugins/connect',
      DISCONNECT: 'platform/plugins/disconnect',
      ERROR: 'platform/plugins/error',
      RELOAD: 'platform/plugins/reload',
      DIALOG: 'platform/plugins/dialog',
      connect: function (a, c) {
        a = { identifier: a, href: a, story_fbid: c };
        b('Arbiter').inform(g.CONNECT, a);
        b('ArbiterFrame').inform(g.CONNECT, a);
      },
      disconnect: function (a, c) {
        a = { identifier: a, href: a, story_fbid: c };
        b('Arbiter').inform(g.DISCONNECT, a);
        b('ArbiterFrame').inform(g.DISCONNECT, a);
      },
      error: function (a, c) {
        b('Arbiter').inform(g.ERROR, { action: a, content: c });
      },
      reload: function (a) {
        b('Arbiter').inform(g.RELOAD, { reloadUrl: a || '' }),
          b('ArbiterFrame').inform(g.RELOAD, { reloadUrl: a || '' });
      },
      reloadOtherPlugins: function (a, c) {
        b('ArbiterFrame').inform(g.RELOAD, {
          reloadUrl: '',
          reload: a || '',
          identifier: c || '',
        });
      },
    };
    e.exports = g;
  },
  null
);
__d(
  'Locale',
  ['ExecutionEnvironment', 'SiteData'],
  function (a, b, c, d, e, f) {
    function a() {
      if (!b('ExecutionEnvironment').canUseDOM) return !1;
      else return b('SiteData').is_rtl;
    }
    e.exports = { isRTL: a };
  },
  null
);
__d(
  'UnverifiedXD',
  ['XD'],
  function (a, b, c, d, e, f) {
    a = b('XD').UnverifiedXD;
    e.exports = a;
  },
  null
);
__d(
  'getOffsetParent',
  ['Style'],
  function (a, b, c, d, e, f) {
    function g(a) {
      a = a.parentNode;
      if (!a || a === document.documentElement) return document.documentElement;
      return b('Style').get(a, 'position') !== 'static'
        ? a
        : a === document.body
        ? document.documentElement
        : g(a);
    }
    e.exports = g;
  },
  null
);
__d(
  'PluginResize',
  ['Locale', 'Log', 'UnverifiedXD', 'getOffsetParent', 'getStyleProperty'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function g(a) {
      a = a || document.body;
      var c = 0,
        d = b('getOffsetParent')(a);
      b('Locale').isRTL() && d
        ? (c = d.offsetWidth - a.offsetLeft - a.offsetWidth)
        : b('Locale').isRTL() || (c = a.offsetLeft);
      return h(a) + c;
    }
    function h(a) {
      return (
        Math.ceil(parseFloat(b('getStyleProperty')(a, 'width'))) ||
        a.offsetWidth
      );
    }
    function i(a) {
      a = a || document.body;
      return a.offsetHeight + a.offsetTop;
    }
    function j(a, b, event) {
      (this.calcWidth = a || g),
        (this.calcHeight = b || i),
        (this.width = undefined),
        (this.height = undefined),
        (this.event = event || 'resize');
    }
    Object.assign(j.prototype, {
      resize: function () {
        var a = this.calcWidth(),
          c = this.calcHeight();
        (a !== this.width || c !== this.height) &&
          (b('Log').debug(
            'Resizing Plugin: (%s, %s, %s, %s)',
            a,
            c,
            this.event
          ),
          (this.width = a),
          (this.height = c),
          b('UnverifiedXD').send({ type: this.event, width: a, height: c }));
        return this;
      },
      auto: function (a) {
        setInterval(this.resize.bind(this), a || 250);
        return this;
      },
    });
    j.auto = function (a, event, b) {
      return new j(g.bind(null, a), i.bind(null, a), event).resize().auto(b);
    };
    j.autoHeight = function (a, b, event, c) {
      return new j(
        function () {
          return a;
        },
        i.bind(null, b),
        event
      )
        .resize()
        .auto(c);
    };
    j.getElementWidth = h;
    e.exports = j;
  },
  null
);
__d(
  'StrSet',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    function g(a) {
      (this.$2 = {}), (this.$1 = 0), a && this.addAll(a);
    }
    g.prototype.add = function (a) {
      Object.prototype.hasOwnProperty.call(this.$2, a) ||
        ((this.$2[a] = !0), this.$1++);
      return this;
    };
    g.prototype.addAll = function (a) {
      a.forEach(this.add, this);
      return this;
    };
    g.prototype.remove = function (a) {
      Object.prototype.hasOwnProperty.call(this.$2, a) &&
        (delete this.$2[a], this.$1--);
      return this;
    };
    g.prototype.removeAll = function (a) {
      a.forEach(this.remove, this);
      return this;
    };
    g.prototype.toArray = function () {
      return Object.keys(this.$2);
    };
    g.prototype.toMap = function (a) {
      var b = {};
      Object.keys(this.$2).forEach(function (c) {
        b[c] = typeof a === 'function' ? a(c) : a || !0;
      });
      return b;
    };
    g.prototype.contains = function (a) {
      return Object.prototype.hasOwnProperty.call(this.$2, a);
    };
    g.prototype.count = function () {
      return this.$1;
    };
    g.prototype.clear = function () {
      this.$2 = {};
      this.$1 = 0;
      return this;
    };
    g.prototype.clone = function () {
      return new g(this);
    };
    g.prototype.forEach = function (a, b) {
      Object.keys(this.$2).forEach(a, b);
    };
    g.prototype.map = function (a, b) {
      return Object.keys(this.$2).map(a, b);
    };
    g.prototype.some = function (a, b) {
      return Object.keys(this.$2).some(a, b);
    };
    g.prototype.every = function (a, b) {
      return Object.keys(this.$2).every(a, b);
    };
    g.prototype.filter = function (a, b) {
      return new g(Object.keys(this.$2).filter(a, b));
    };
    g.prototype.union = function (a) {
      return this.clone().addAll(a);
    };
    g.prototype.intersect = function (a) {
      return this.filter(function (b) {
        return a.contains(b);
      });
    };
    g.prototype.difference = function (a) {
      return a.filter(
        function (a) {
          return !this.contains(a);
        }.bind(this)
      );
    };
    g.prototype.equals = function (a) {
      __p && __p();
      var b = function (a, b) {
          return a === b ? 0 : a < b ? -1 : 1;
        },
        c = this.toArray();
      a = a.toArray();
      if (c.length !== a.length) return !1;
      var d = c.length;
      c = c.sort(b);
      a = a.sort(b);
      while (d--) if (c[d] !== a[d]) return !1;
      return !0;
    };
    e.exports = g;
  },
  null
);
__d(
  'PlatformBaseVersioning',
  ['invariant', 'PlatformVersions', 'StrSet', 'getObjectValues'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h = new (b('StrSet'))(
      b('getObjectValues')(b('PlatformVersions').versions)
    );
    c = location.pathname;
    d = c.substring(1, c.indexOf('/', 1));
    var i = h.contains(d) ? d : b('PlatformVersions').versions.UNVERSIONED;
    function j(a, c) {
      if (c == b('PlatformVersions').versions.UNVERSIONED) return a;
      h.contains(c) || g(0, undefined);
      a.indexOf('/') !== 0 && (a = '/' + a);
      return '/' + c + a;
    }
    function a(a) {
      return h.contains(a.substring(1, a.indexOf('/', 1)))
        ? a.substring(a.indexOf('/', 1))
        : a;
    }
    f = {
      addVersionToPath: j,
      getLatestVersion: function () {
        return b('PlatformVersions').LATEST;
      },
      versionAwareURI: function (a) {
        return a.setPath(j(a.getPath(), i));
      },
      versionAwarePath: function (a) {
        return j(a, i);
      },
      getUnversionedPath: a,
    };
    e.exports = f;
  },
  null
);
__d(
  'PlatformWidgetEndpoint',
  ['PlatformBaseVersioning'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a, c) {
      return b('PlatformBaseVersioning').versionAwarePath(
        '/dialog/' + a + (c ? '/' + c : '')
      );
    }
    function c(a, c) {
      return b('PlatformBaseVersioning').versionAwarePath(
        '/plugins/' + a + (c ? '/' + c : '')
      );
    }
    function d(a) {
      return /^\/plugins\//.test(
        b('PlatformBaseVersioning').getUnversionedPath(a)
      );
    }
    function f(a) {
      return /^\/dialog\//.test(
        b('PlatformBaseVersioning').getUnversionedPath(a)
      );
    }
    a = { dialog: a, plugins: c, isPluginEndpoint: d, isDialogEndpoint: f };
    e.exports = a;
  },
  null
);
__d(
  'PluginReturn',
  [
    'invariant',
    'Arbiter',
    'Log',
    'PlatformDialog',
    'PlatformWidgetEndpoint',
    'Plugin',
    'URI',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    b('Arbiter').subscribe(b('PlatformDialog').RESPONSE, function (event, a) {
      if (a.error_code) {
        b('Log').debug(
          'Plugin Return Error (%s): %s',
          a.error_code,
          a.error_message || a.error_description
        );
        return;
      }
      b('Plugin').reload(a.plugin_reload);
    });
    var h = {
      auto: function () {
        b('Arbiter').subscribe(b('Plugin').RELOAD, function (event, a) {
          a = typeof a === 'object' ? a.reloadUrl : a;
          h.reload(a);
        });
      },
      syncPlugins: function () {
        b('Arbiter').subscribe(b('Plugin').RELOAD, function (event, a) {
          a.crossFrame && h.reload(a.reloadUrl, a.reload, a.identifier);
        });
      },
      reload: function (a, c, d) {
        d = b('URI')
          .getRequestURI()
          .removeQueryData('ret')
          .removeQueryData('act')
          .removeQueryData('hash')
          .addQueryData('reload', c)
          .addQueryData('id', d);
        if (a) {
          var c = new (b('URI'))(a);
          b('PlatformWidgetEndpoint').isPluginEndpoint(c.getPath()) ||
            g(0, undefined);
          d.setPath(c.getPath()).addQueryData(c.getQueryData());
        }
        window.location.replace(d.toString());
      },
    };
    e.exports = h;
  },
  null
);
__d(
  'PluginXDReady',
  ['Arbiter', 'UnverifiedXD'],
  function (a, b, c, d, e, f) {
    c = {
      handleMessage: function (a) {
        if (!a.method) return;
        try {
          b('Arbiter').inform(
            'Connect.Unsafe.' + a.method,
            JSON.parse(a.params),
            'persistent'
          );
        } catch (a) {}
      },
    };
    a.XdArbiter = c;
    b('UnverifiedXD').send({ xd_action: 'plugin_ready', name: window.name });
    e.exports = null;
  },
  null
);
__d(
  'LayerHideSources',
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      BLUR: 'blur',
      ESCAPE: 'escape',
      LAYER_CANCEL_BUTTON: 'layerCancelButton',
      LAYER_HIDE_BUTTON: 'layerHideButton',
      TRANSITION: 'transition',
    });
    e.exports = a;
  },
  null
);
__d(
  'LayerHideOnBlur',
  ['LayerHideSources', 'requestAnimationFrame'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a) {
      this._layer = a;
    }
    a.prototype.enable = function () {
      (this._subscriptions = [
        this._layer.subscribe('show', this._attach.bind(this)),
        this._layer.subscribe('hide', this._detach.bind(this)),
      ]),
        this._layer.isShown() && this._attach();
    };
    a.prototype.disable = function () {
      this._detach();
      while (this._subscriptions && this._subscriptions.length)
        this._subscriptions.pop().unsubscribe();
      this._subscriptions = null;
    };
    a.prototype._detach = function () {
      this._onBlur && this._onBlur.unsubscribe(), (this._onBlur = null);
    };
    a.prototype._attach = function () {
      this._onBlur = this._layer.subscribe(
        'blur',
        function () {
          b('requestAnimationFrame')(
            function () {
              this._layer.hide(b('LayerHideSources').BLUR);
            }.bind(this)
          );
          return !1;
        }.bind(this)
      );
    };
    Object.assign(a.prototype, { _subscriptions: null, _onBlur: null });
    e.exports = a;
  },
  null
);
__d(
  'getContextualLayerCursorOffset',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a, b, c) {
      __p && __p();
      var d = a.getOrientation(),
        e = d.getPosition();
      d = d.getAlignment();
      var f = a.getContent().getBoundingClientRect();
      a = a.getContext().getBoundingClientRect();
      b = b - a.left;
      c = c - a.top;
      switch (d) {
        case 'left':
          b -= f.width;
          break;
        case 'center':
          b -= a.width * 0.5;
          break;
        case 'right':
          b -= a.width - f.width;
          break;
        default:
          throw new Error('invalid alignment');
      }
      switch (e) {
        case 'above':
          break;
        case 'left':
          b += f.width;
          c -= f.height * 0.5;
          break;
        case 'right':
          b -= f.width;
          c -= f.height * 0.5;
          break;
        case 'below':
          c -= a.height;
          break;
        default:
          throw new Error('invalid position');
      }
      return { offsetX: b, offsetY: c };
    }
    e.exports = a;
  },
  null
);
__d(
  'getOrCreateDOMID',
  ['uniqueID'],
  function (a, b, c, d, e, f) {
    function a(a) {
      a.id || (a.id = b('uniqueID')());
      return a.id;
    }
    e.exports = a;
  },
  null
);
__d(
  'throttle',
  [
    'TimeSlice',
    'TimeSliceInteractionSV',
    'setTimeout',
    'setTimeoutAcrossTransitions',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a, c, d) {
      return g(a, c, d, b('setTimeout'), !1);
    }
    Object.assign(a, {
      acrossTransitions: function (a, c, d) {
        return g(a, c, d, b('setTimeoutAcrossTransitions'), !1);
      },
      withBlocking: function (a, c, d) {
        return g(a, c, d, b('setTimeout'), !0);
      },
      acrossTransitionsWithBlocking: function (a, c, d) {
        return g(a, c, d, b('setTimeoutAcrossTransitions'), !0);
      },
    });
    function g(a, c, d, e, f) {
      __p && __p();
      var g = c == null ? 100 : c,
        h,
        i,
        j = 0,
        k = null,
        l = [],
        m = b('TimeSlice').guard(
          function () {
            __p && __p();
            j = Date.now();
            if (i) {
              var b = function (b) {
                  a.apply(h, b);
                }.bind(null, i),
                c = l.length;
              while (--c >= 0) b = l[c].bind(null, b);
              l = [];
              b();
              i = null;
              k = e(m, g);
            } else k = null;
          },
          'throttle_' + g + '_ms',
          { propagationType: b('TimeSlice').PropagationType.EXECUTION }
        );
      m.__SMmeta = a.__SMmeta;
      return function () {
        b('TimeSliceInteractionSV').ref_counting_fix &&
          l.push(
            b('TimeSlice').getGuardedContinuation('throttleWithContinuation')
          ),
          (i = arguments),
          (h = this),
          d !== undefined && (h = d),
          (k === null || Date.now() - j > g) && (f ? m() : (k = e(m, 0)));
      };
    }
    e.exports = a;
  },
  null
);
__d(
  'areEqual',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = [],
      h = [];
    function a(a, b) {
      var c = g.length ? g.pop() : [],
        d = h.length ? h.pop() : [];
      a = i(a, b, c, d);
      c.length = 0;
      d.length = 0;
      g.push(c);
      h.push(d);
      return a;
    }
    function i(a, b, c, d) {
      __p && __p();
      if (a === b) return a !== 0 || 1 / a == 1 / b;
      if (a == null || b == null) return !1;
      if (typeof a !== 'object' || typeof b !== 'object') return !1;
      var e = Object.prototype.toString,
        f = e.call(a);
      if (f != e.call(b)) return !1;
      switch (f) {
        case '[object String]':
          return a == String(b);
        case '[object Number]':
          return isNaN(a) || isNaN(b) ? !1 : a == Number(b);
        case '[object Date]':
        case '[object Boolean]':
          return +a == +b;
        case '[object RegExp]':
          return (
            a.source == b.source &&
            a.global == b.global &&
            a.multiline == b.multiline &&
            a.ignoreCase == b.ignoreCase
          );
      }
      e = c.length;
      while (e--) if (c[e] == a) return d[e] == b;
      c.push(a);
      d.push(b);
      e = 0;
      if (f === '[object Array]') {
        e = a.length;
        if (e !== b.length) return !1;
        while (e--) if (!i(a[e], b[e], c, d)) return !1;
      } else {
        if (a.constructor !== b.constructor) return !1;
        if (
          Object.prototype.hasOwnProperty.call(a, 'valueOf') &&
          Object.prototype.hasOwnProperty.call(b, 'valueOf')
        )
          return a.valueOf() == b.valueOf();
        f = Object.keys(a);
        if (f.length != Object.keys(b).length) return !1;
        for (var e = 0; e < f.length; e++) {
          if (f[e] === '_owner') continue;
          if (
            !Object.prototype.hasOwnProperty.call(b, f[e]) ||
            !i(a[f[e]], b[f[e]], c, d)
          )
            return !1;
        }
      }
      c.pop();
      d.pop();
      return !0;
    }
    e.exports = a;
  },
  null
);
__d(
  'MountedContextMenu.react',
  [
    'cx',
    'ContextualLayer.react',
    'DOMQuery',
    'Event',
    'Focus',
    'LayerHideOnEscape',
    'PopoverMenu.react',
    'PopoverMenuInterface',
    'React',
    'ReactDOM',
    'SubscriptionsHandler',
    'isNode',
    'getContextualLayerCursorOffset',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h,
      i = Object.prototype.hasOwnProperty;
    c = b('React').PropTypes;
    d = babelHelpers.inherits(a, b('React').Component);
    h = d && d.prototype;
    function a() {
      __p && __p();
      var a, c;
      for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
        e[f] = arguments[f];
      return (
        (c = (a = h.constructor).call.apply(a, [this].concat(e))),
        (this.state = {
          shown: !1,
          lastOpenedX: 0,
          lastOpenedY: 0,
          offsetX: 0,
          offsetY: 0,
        }),
        (this.$6 = function (a) {
          var b = a.clientX,
            c = a.clientY;
          a.preventDefault();
          a.stopPropagation();
          this.showAt(b, c);
        }.bind(this)),
        (this.$7 = function (a) {
          var c = this.$3();
          c = c && b('DOMQuery').contains(c, a.target);
          a = a.button === 0;
          (c && a) || this.hide();
        }.bind(this)),
        (this.$8 = function () {
          this.props.disableFocusOutline &&
            b('Focus').setWithoutOutline(this.$2());
        }.bind(this)),
        (this.$9 = function () {
          var a = this.$2();
          this.props.disableFocusOutline
            ? b('Focus').setWithoutOutline(a)
            : b('Focus').set(a);
          this.state.shown && this.hide();
        }.bind(this)),
        (this.$10 = function () {
          this.hide();
        }.bind(this)),
        c
      );
    }
    a.prototype.getDefaultProps = function () {
      return { disableFocusOutline: !1 };
    };
    a.prototype.$2 = function () {
      return this.props.mountedTriggerElem;
    };
    a.prototype.$3 = function () {
      var a = this.refs.popover.getMenu();
      return a && a.getRoot();
    };
    a.prototype.$4 = function () {
      return this.refs.menuLayer.layer;
    };
    a.prototype.renderLayers = function () {
      return b('React').createElement(
        b('ContextualLayer.react'),
        {
          alignment: 'right',
          behaviors: [b('LayerHideOnEscape')],
          contextRef: function () {
            return this.$2();
          }.bind(this),
          offsetX: this.state.offsetX,
          offsetY: this.state.offsetY,
          position: 'below',
          ref: 'menuLayer',
          shown: this.state.shown,
          key: 'menu',
        },
        b('React').createElement(
          b('PopoverMenu.react'),
          {
            alignh: 'left',
            menu: this.props.menu,
            position: 'below',
            ref: 'popover',
          },
          b('React').createElement('div', {
            className: '_4345',
            ref: 'fakeTrigger',
          })
        )
      );
    };
    a.prototype.render = function () {
      return this.props.mountedTriggerElem
        ? b('React').createElement('span', null, this.renderLayers())
        : null;
    };
    a.prototype.$5 = function (a, c) {
      var d = this.$4();
      a = b('getContextualLayerCursorOffset')(d, a, c);
      c = a.offsetX;
      a = a.offsetY;
      d.setOffsetX(c).setOffsetY(a);
      this.setState({ offsetX: c, offsetY: a });
    };
    a.prototype.componentDidMount = function () {
      var a = this.$2(),
        c = b('ReactDOM').findDOMNode(this.refs.fakeTrigger),
        d = this.$4(),
        e = this.refs.popover;
      this.$1 = new (b('SubscriptionsHandler'))();
      this.$1.addSubscriptions(
        b('Event').listen(a, 'contextmenu', this.$6),
        b('Event').listen(document.body, 'mousedown', this.$7),
        b('Event').listen(a, 'focus', this.$8),
        b('Event').listen(c, 'focus', this.$9),
        b('Event').listen(window, 'blur', this.$10),
        d.subscribe(
          'show',
          function () {
            var a = this.state.lastOpenedX,
              b = this.state.lastOpenedY;
            this.$5(a, b);
            e.showPopover();
          }.bind(this)
        ),
        d.subscribe('hide', function () {
          e.hidePopover();
        })
      );
    };
    a.prototype.componentWillUnmount = function () {
      this.$1 && this.$1.release();
    };
    a.prototype.show = function () {
      this.setState({ shown: !0 });
    };
    a.prototype.showAt = function (a, b) {
      this.setState({ lastOpenedX: a, lastOpenedY: b }), this.show();
    };
    a.prototype.hide = function () {
      this.setState({ shown: !1 });
    };
    a.propTypes = {
      disableFocusOutline: c.bool,
      menu: function (a, c, d) {
        if (!i.call(a, c)) return new Error(d + '.' + c + ' is required');
        d = a[c];
        a = d && d.type;
        return !(a && a.prototype instanceof b('PopoverMenuInterface'))
          ? new Error(c + ' must implement PopoverMenuInterface')
          : null;
      },
      mountedTriggerElem: function (a, c, d) {
        if (!i.call(a, c)) return new Error(d + '.' + c + ' is required');
        else if (!b('isNode')(a[c]))
          return new Error(d + '.' + c + ' must be a raw DOM node');
        return null;
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'debounceCore',
  ['TimeSlice'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a, c, d, e, f) {
      __p && __p();
      e = e || setTimeout;
      f = f || clearTimeout;
      var g;
      function h() {
        for (var f = arguments.length, i = new Array(f), j = 0; j < f; j++)
          i[j] = arguments[j];
        h.reset();
        var k = b('TimeSlice').guard(function () {
          (g = null), a.apply(d, i);
        }, 'debounceCore');
        k.__SMmeta = a.__SMmeta;
        g = e(k, c);
      }
      h.reset = function () {
        f(g), (g = null);
      };
      h.isPending = function () {
        return g != null;
      };
      return h;
    }
    e.exports = a;
  },
  null
);
__d(
  'debounce',
  ['clearTimeout', 'debounceCore', 'setTimeout'],
  function (a, b, c, d, e, f) {
    function a(a, c, d, e) {
      c == null && (c = 100);
      var f = function (a, c, d) {
        return b('setTimeout')(a, c, d, !e);
      };
      return b('debounceCore')(a, c, d, f, b('clearTimeout'));
    }
    e.exports = a;
  },
  null
);
__d(
  'VideoPlayerHTML5ContextMenu.react',
  [
    'cx',
    'fbt',
    'ContextualLayer.react',
    'DOMQuery',
    'Event',
    'FBClipboardLink.react',
    'Focus',
    'FullScreen',
    'Keys',
    'LayerAutoFocus',
    'LayerHideOnEscape',
    'MountedContextMenu.react',
    'React',
    'ReactDOM',
    'ReactXUIMenu',
    'SubscriptionsHandler',
    'URI',
    'VideoContextMenuGK',
    'VideoPermalinkURI',
    'VideoPlayerExperiments',
    'getFullScreenElement',
  ],
  function (a, b, c, d, e, f, g, h) {
    __p && __p();
    var i,
      j = b('ReactXUIMenu').Item,
      k = 0.35,
      l = 6,
      m = 60;
    c = babelHelpers.inherits(a, b('React').Component);
    i = c && c.prototype;
    function a() {
      __p && __p();
      var a, c;
      for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
        e[f] = arguments[f];
      return (
        (c = (a = i.constructor).call.apply(a, [this].concat(e))),
        (this.state = {
          permalinkVisible: !1,
          fullscreened: !1,
          screenWidth: screen.width,
          screenHeight: screen.height,
        }),
        (this.$2 = function () {
          var a = b('getFullScreenElement')(),
            c = this.props.rootContainer;
          a = !!(
            b('FullScreen').isFullScreen() &&
            a &&
            c &&
            b('DOMQuery').contains(a, c)
          );
          this.setState({ fullscreened: a });
        }.bind(this)),
        (this.$7 = function () {
          this.props.onTogglePause && this.props.onTogglePause();
        }.bind(this)),
        (this.$8 = function () {
          this.props.onToggleMute && this.props.onToggleMute();
        }.bind(this)),
        (this.$4 = function () {
          b('Focus').set(b('ReactDOM').findDOMNode(this.refs.permalinkText)),
            this.setState({ permalinkVisible: !0 });
        }.bind(this)),
        (this.$3 = function () {
          this.setState({ permalinkVisible: !1 });
        }.bind(this)),
        (this.$9 = function () {
          b('ReactDOM').findDOMNode(this.refs.permalinkText).select();
        }.bind(this)),
        (this.$10 = function (a) {
          b('Event').getKeyCode(a) == b('Keys').ESC &&
            this.setState({ permalinkVisible: !1 });
        }.bind(this)),
        c
      );
    }
    a.prototype.componentDidMount = function () {
      var a = this.refs.permalinkLayer.layer;
      this.$1 = new (b('SubscriptionsHandler'))();
      this.$1.addSubscriptions(
        b('FullScreen').subscribe('changed', this.$2),
        a.subscribe('hide', this.$3),
        a.subscribe('show', this.$4)
      );
      this.props.initialPosition &&
        this.refs.menu.showAt(
          this.props.initialPosition.x,
          this.props.initialPosition.y
        );
    };
    a.prototype.componentWillUnmount = function () {
      this.$1 && this.$1.release();
    };
    a.prototype.$5 = function () {
      if (this.props.paused) return h._('Play');
      else return h._('Pause');
    };
    a.prototype.$6 = function () {
      if (this.props.muted) return h._('Unmute');
      else return h._('Mute');
    };
    a.prototype.hidePermalinkOverlay = function () {
      this.$3();
    };
    a.prototype.$11 = function (a) {
      a.preventDefault();
    };
    a.prototype.$12 = function () {
      var a, b;
      if (this.state.fullscreened)
        (a = this.state.screenWidth), (b = this.state.screenHeight);
      else {
        var c = this.props.rootContainer.getBoundingClientRect();
        a = c.width;
        b = c.height;
      }
      return { width: a, height: b };
    };
    a.prototype.$13 = function (a) {
      var c = this.props.permalinkURL;
      if (c) {
        a = { width: a + 'px' };
        return b('React').createElement(
          'div',
          { className: '_26oo', style: a },
          b('React').createElement('input', {
            className: '_26op autofocus',
            onFocus: this.$9,
            onKeyDown: this.$10,
            onMouseUp: this.$11,
            readOnly: !0,
            ref: 'permalinkText',
            type: 'text',
            value: c,
          }),
          b('React').createElement(
            'button',
            { className: '_26oq', onClick: this.$3 },
            h._('Close')
          )
        );
      }
      return null;
    };
    a.prototype.renderLayers = function () {
      var a = this.props.permalinkURL && this.state.permalinkVisible,
        c = 0,
        d = 0,
        e = null,
        f = this.$12(),
        g = f.width;
      f = f.height;
      var h = g * k;
      c = g / 2 - h / 2;
      d = -f + l;
      this.state.fullscreened && (d += m);
      e = this.$13(h);
      return b('React').createElement(
        b('ContextualLayer.react'),
        {
          alignment: 'left',
          behaviors: [b('LayerHideOnEscape'), b('LayerAutoFocus')],
          contextRef: function () {
            return this.props.videoContainer;
          }.bind(this),
          offsetX: c,
          offsetY: d,
          position: 'below',
          ref: 'permalinkLayer',
          shown: a,
          key: 'permalinkOverlay',
        },
        e
      );
    };
    a.prototype.$14 = function () {
      if (!this.props.permalinkURL) return null;
      var a = new (b('URI'))(this.props.permalinkURL);
      if (
        b('VideoPlayerExperiments').copyLinkAtCurrentTimeInContextMenu &&
        b('VideoPermalinkURI').isValid(a)
      ) {
        a.addQueryData('t', this.props.getVideoCurrentTimePosition());
        return b('React').createElement(
          j,
          { ref: 'copyPermalinkMenuItem' },
          b('React').createElement(
            b('FBClipboardLink.react'),
            { tooltip: null, tooltipSuccess: null, value: a.toString() },
            h._('Copy video URL at current time')
          )
        );
      }
      return null;
    };
    a.prototype.$15 = function () {
      if (this.props.permalinkURL)
        if (b('VideoPlayerExperiments').copyLinkInContextMenu)
          return b('React').createElement(
            j,
            { ref: 'copyPermalinkMenuItem' },
            b('React').createElement(
              b('FBClipboardLink.react'),
              {
                tooltip: null,
                tooltipSuccess: null,
                value: this.props.permalinkURL,
              },
              h._('Copy Video URL')
            )
          );
        else
          return b('React').createElement(
            j,
            { onclick: this.$4, ref: 'permalinkMenuItem' },
            h._('Show video URL')
          );
      return null;
    };
    a.prototype.render = function () {
      var a =
          this.props.paused !== null &&
          b('React').createElement(j, { onclick: this.$7 }, this.$5()),
        c = this.props.isLive ? null : this.$14();
      a = b('React').createElement(
        b('ReactXUIMenu'),
        { className: b('VideoContextMenuGK').menuRedesign ? '_45di' : '' },
        a,
        b('React').createElement(j, { onclick: this.$8 }, this.$6()),
        this.$15(),
        c,
        this.props.children
      );
      return b('React').createElement(
        'span',
        null,
        b('React').createElement(b('MountedContextMenu.react'), {
          mountedTriggerElem: this.props.videoContainer,
          menu: a,
          ref: 'menu',
        }),
        this.renderLayers()
      );
    };
    e.exports = a;
  },
  null
);
__d(
  'VideoContextMenu',
  [
    'Bootloader',
    'CurrentUser',
    'EventListener',
    'React',
    'ReactDOM',
    'URI',
    'UserAgent',
    'VideoPlayerHTML5ContextMenu.react',
    'VideoPlayerReason',
    'VideoPlayerStates',
    'isFacebookURI',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = /(instagram)/g;
    function a(a, c, d) {
      __p && __p();
      this.$10 = function () {
        for (var a in this.$8) {
          var b = this.$8[a].name,
            c = this.$8[a].option,
            d = this.$8[a].description,
            e = this.$8[a].closeMessage;
          this.$2.hasOption(b, c) ? this.$13(b, c, d, e) : this.$12(b, c);
        }
        this.$9();
      }.bind(this);
      this.$9 = function () {
        this.$6 && this.$14();
      }.bind(this);
      this.$11 = function (a) {
        var c = /^a$/i.test(a.target.nodeName || '');
        c =
          c ||
          (b('CurrentUser').isEmployee() &&
            (b('UserAgent').isPlatform('Mac OS X')
              ? a.getModifiers().meta
              : a.getModifiers().ctrl));
        c && this.$6
          ? (b('ReactDOM').unmountComponentAtNode(this.$4), delete this.$6)
          : !c && !this.$6 && (a.preventDefault(), this.$14(a));
      }.bind(this);
      this.$8 = {
        debugOverlay: {
          name: 'DebugOverlay',
          option: 'hidden',
          description: 'Employee Debug Info',
          closeMessage: 'Hide Debug Information',
        },
        statsForNerds: {
          name: 'StatsForNerds',
          option: 'hidden',
          description: 'Show video stats',
          closeMessage: 'Hide video stats',
        },
      };
      this.$2 = a;
      this.$3 = d;
      this.$4 = c;
      this.$1 = {};
      this.$5 = null;
      if (this.$3.permalinkURL) {
        d = new (b('URI'))(this.$3.permalinkURL).getQualifiedURI();
        b('isFacebookURI')(d) ||
          (d.setSubdomain('www'),
          d.setDomain(d.getDomain().replace(g, 'facebook')));
        this.$5 = d.toString();
      }
      c = [
        'muteVideo',
        'unmuteVideo',
        'changeVolume',
        'beginPlayback',
        'pausePlayback',
        'finishPlayback',
        'adBreakIndicatorShowing',
      ];
      ['enterWatchAndScroll', 'exitWatchAndScroll'].forEach(
        function (b) {
          return a.addListener(
            b,
            function () {
              this.$6 && this.$6.hidePermalinkOverlay(), this.$9();
            }.bind(this)
          );
        }.bind(this)
      );
      a.addListener('optionsChange', this.$10);
      this.$10();
      c.forEach(
        function (b) {
          return a.addListener(b, this.$9);
        }.bind(this)
      );
      b('EventListener').listen(this.$2.getRootNode(), 'contextmenu', this.$11);
    }
    a.prototype.setPermalinkURL = function (a) {
      (this.$5 = a), this.$9();
    };
    a.prototype.$12 = function (a, b) {
      this.$7 && this.$7.removeMenuItem(a, b);
    };
    a.prototype.$13 = function (a, c, d, e) {
      b('Bootloader').loadModules(
        ['VideoComponentOptionMenuItems'],
        function (b) {
          this.$7 || (this.$7 = new b(this.$2, this.$9)),
            this.$7.addComponentOptionMenuItem(a, c, d, e);
        }.bind(this),
        'VideoContextMenu'
      );
    };
    a.prototype.$15 = function (a, b) {
      return !this.$7 ? undefined : this.$7.getComponentOptionMenuItem(a, b);
    };
    a.prototype.$14 = function (a) {
      var c = this.$15(this.$8.debugOverlay.name, this.$8.debugOverlay.option),
        d = this.$15(this.$8.statsForNerds.name, this.$8.statsForNerds.option),
        e = this.$2.getRootNode(),
        f = this.$2.getContainerNode(),
        g = function () {
          return Math.round(this.$2.getCurrentTimePosition());
        }.bind(this);
      this.$6 = b('ReactDOM').render(
        b('React').createElement(
          b('VideoPlayerHTML5ContextMenu.react'),
          {
            rootContainer: e,
            videoContainer: f,
            paused: this.$16()
              ? null
              : !this.$2.isState(b('VideoPlayerStates').PLAYING),
            muted: this.$2.isMuted(),
            permalinkURL: this.$5,
            initialPosition: a ? { x: a.clientX, y: a.clientY } : undefined,
            getVideoCurrentTimePosition: g,
            onTogglePause: function () {
              return this.$17();
            }.bind(this),
            onToggleMute: function () {
              return this.$18();
            }.bind(this),
            isLive: this.$2.isLiveVideo(),
          },
          c,
          d
        ),
        this.$4
      );
    };
    a.prototype.$16 = function () {
      if (
        this.$2.getOption('VideoContextMenu', 'disablePauseMenuItem') &&
        !this.$2.isState(b('VideoPlayerStates').PAUSED)
      )
        return !0;
      var a = this.$2.getOption('VideoWithCommercialBreak', 'controller');
      return a && a.getIsDuringTransition() ? !0 : !1;
    };
    a.prototype.$18 = function () {
      this.$2.isMuted() ? this.$2.unmute() : this.$2.mute();
    };
    a.prototype.$17 = function () {
      !this.$2.isState('playing')
        ? this.$2.play(b('VideoPlayerReason').USER)
        : this.$2.pause(b('VideoPlayerReason').USER);
    };
    e.exports = a;
  },
  null
);
__d(
  'EmbeddedVideoFbLogoOverlay',
  ['cx', 'CSS', 'EventListener', 'SubscriptionsHandler', 'throttle'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    function a(a, c, d) {
      (this.$1 = c),
        (this.$2 = a),
        (this.$3 = new (b('SubscriptionsHandler'))()),
        d
          ? this.$3.addSubscriptions(
              a.addListener(
                'beginPlayback',
                function () {
                  c.parentNode.removeChild(c), this.$3.release();
                }.bind(this)
              )
            )
          : (this.$2.addListener('beginPlayback', this.$4.bind(this)),
            this.$2.addListener('pausePlayback', this.$5.bind(this)),
            this.$2.addListener('finishPlayback', this.$5.bind(this)),
            b('EventListener').listen(
              this.$2.getRootNode(),
              'mousemove',
              b('throttle')(this.$6.bind(this), 200)
            ),
            b('EventListener').listen(
              this.$2.getRootNode(),
              'mouseenter',
              function () {
                this.$7 = !0;
              }.bind(this)
            ),
            b('EventListener').listen(
              this.$2.getRootNode(),
              'mouseleave',
              function () {
                (this.$7 = !1), this.$2.isState('playing') && this.$8();
              }.bind(this)
            ));
    }
    a.prototype.$4 = function () {
      b('CSS').addClass(this.$1, '_16d3'), this.$6();
    };
    a.prototype.$6 = function () {
      this.$2.isState('playing') &&
        this.$7 &&
        (this.$5(),
        clearTimeout(this.$9),
        (this.$9 = setTimeout(
          function () {
            this.$2.isState('playing') && this.$8();
          }.bind(this),
          3e3
        )));
    };
    a.prototype.$5 = function () {
      b('CSS').removeClass(this.$1, '_16d4');
    };
    a.prototype.$8 = function () {
      b('CSS').addClass(this.$1, '_16d4');
    };
    e.exports = a;
  },
  null
);
__d(
  'EmbeddedVideoInitialInfoOverlay',
  ['SubscriptionsHandler'],
  function (a, b, c, d, e, f) {
    function a(a, c) {
      (this.$1 = new (b('SubscriptionsHandler'))()),
        this.$1.addSubscriptions(
          a.addListener(
            'beginPlayback',
            function () {
              c.parentNode.removeChild(c), this.$1.release();
            }.bind(this)
          )
        );
    }
    e.exports = a;
  },
  null
);
__d(
  'EmbeddedVideoPauseOverlay',
  [
    'cx',
    'fbt',
    'Arbiter',
    'CSS',
    'DOM',
    'DOMDimensions',
    'EventListener',
    'VideoPlayerExperiments',
    'throttle',
  ],
  function (a, b, c, d, e, f, g, h) {
    __p && __p();
    var i = '_3bw';
    function a(a, c, d, e, f, g, i, j, k) {
      (this.$1 = c),
        (this.$2 = a),
        (this.$3 = d),
        (this.$4 = e),
        (this.$5 = f),
        (this.$6 = g),
        (this.$7 = i),
        (this.$8 = j),
        (this.$9 = 0),
        k
          ? ((this.$10 = k.showOnlyOnFullscreen),
            (this.$11 = k.showOnEndscreen))
          : ((this.$10 = !1), (this.$11 = !0)),
        (this.$12 = h._('Like')),
        (this.$13 = h._('Unlike')),
        (this.$14 = h._('Share')),
        this.$15(),
        this.$2.addListener('beginPlayback', this.$16.bind(this)),
        b('VideoPlayerExperiments').embeddedPlayerInlineChaining
          ? (this.$2.addListener('pausePlayback', this.$17.bind(this)),
            this.$2.addListener('finishPlayback', this.$18.bind(this)))
          : (this.$2.addListener('pausePlayback', this.$19.bind(this)),
            this.$2.addListener('finishPlayback', this.$19.bind(this))),
        this.$2.addListener('toggleFullscreen', this.$20.bind(this)),
        b('EventListener').listen(
          this.$2.getRootNode(),
          'mousemove',
          b('throttle')(this.$21.bind(this), 200)
        ),
        b('EventListener').listen(
          this.$2.getRootNode(),
          'mouseenter',
          function () {
            this.$22 = !0;
          }.bind(this)
        ),
        b('EventListener').listen(
          this.$2.getRootNode(),
          'mouseleave',
          function () {
            this.$2.isState('playing') && ((this.$22 = !1), this.$23());
          }.bind(this)
        ),
        b('Arbiter').subscribe(
          'embeddedUfiToggle',
          function () {
            this.$24(), this.$25();
          }.bind(this)
        ),
        b('EventListener').listen(
          window,
          'resize',
          b('throttle')(
            function () {
              this.$25();
            }.bind(this),
            100
          )
        );
    }
    a.prototype.$16 = function () {
      this.$24(), this.$25(), this.$21();
    };
    a.prototype.$24 = function () {
      var a;
      this.$2.isFullscreen() ? (a = 64) : (a = 32);
      this.$15();
      this.$9 =
        b('DOMDimensions').getElementDimensions(this.$3).width +
        b('DOMDimensions').getElementDimensions(this.$4).width +
        a;
    };
    a.prototype.$25 = function () {
      if (this.$2.isState('destroyed')) return;
      var a = b('DOMDimensions').getElementDimensions(
        this.$2.getRootNode()
      ).width;
      a = a < this.$9;
      a ? this.$26() : this.$15();
    };
    a.prototype.$15 = function () {
      this.$6 && b('DOM').setContent(this.$6, this.$14),
        this.$7 && b('DOM').setContent(this.$7, this.$12),
        this.$8 && b('DOM').setContent(this.$8, this.$13),
        this.$5 && this.$5.showText();
    };
    a.prototype.$26 = function () {
      this.$6 && b('DOM').setContent(this.$6, null),
        this.$7 && b('DOM').setContent(this.$7, null),
        this.$8 && b('DOM').setContent(this.$8, null),
        this.$5 && this.$5.hideText();
    };
    a.prototype.$27 = function () {
      return this.$10 && !this.$2.isFullscreen()
        ? !1
        : (this.$2.isState('playing') && this.$22) ||
            this.$2.isState('paused') ||
            (!b('VideoPlayerExperiments').embeddedPlayerInlineChaining &&
              this.$2.isState('finished'));
    };
    a.prototype.$21 = function () {
      this.$27() &&
        (this.$28(),
        clearTimeout(this.$29),
        (this.$29 = setTimeout(
          function () {
            this.$2.isState('playing') && this.$23();
          }.bind(this),
          3e3
        )));
    };
    a.prototype.$20 = function () {
      this.$27() ? this.$28() : this.$23();
    };
    a.prototype.$19 = function () {
      this.$27() && this.$28();
    };
    a.prototype.$17 = function () {
      this.$27() && this.$28();
    };
    a.prototype.$18 = function () {
      this.$11 ? this.$28() : this.$23();
    };
    a.prototype.$28 = function () {
      b('CSS').removeClass(this.$1, i);
    };
    a.prototype.$23 = function () {
      b('CSS').addClass(this.$1, i);
    };
    e.exports = a;
  },
  null
);
__d(
  'BootloaderResource',
  ['ifRequired'],
  function (a, b, c, d, e, f) {
    function g(a) {
      return a;
    }
    a = {
      preload: function (a) {
        a.load();
      },
      read: function (a) {
        return b('ifRequired').call(null, a.getModuleId(), g, function () {
          throw a.load();
        });
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'shield',
  [],
  function (a, b, c, d, e, f) {
    function a(a, b) {
      if (typeof a !== 'function')
        throw new TypeError('shield expects a function as the first argument');
      var c = Array.prototype.slice.call(arguments, 2);
      return function () {
        return a.apply(b, c);
      };
    }
    e.exports = a;
  },
  null
);
__d(
  'LeftRight.react',
  ['cx', 'invariant', 'React', 'joinClasses'],
  function (a, b, c, d, e, f, g, h) {
    __p && __p();
    var i;
    i = babelHelpers.inherits(j, b('React').Component);
    i && i.prototype;
    j.prototype.getChildrenArr = function () {
      var a = [];
      b('React').Children.forEach(this.props.children, function (b) {
        return a.push(b);
      });
      return a;
    };
    j.prototype.render = function () {
      var a = this.getChildrenArr();
      a.length === 1 || a.length === 2 || h(0, undefined);
      var c = this.props.direction || j.DIRECTION.both,
        d = c === j.DIRECTION.both,
        e = d || c === j.DIRECTION.left ? '_ohe lfloat' : '';
      d = d || c === j.DIRECTION.right ? '_ohf rfloat' : '';
      e = b('React').createElement('div', { key: 'left', className: e }, a[0]);
      d =
        a.length < 2
          ? null
          : b('React').createElement(
              'div',
              { key: 'right', className: d },
              a[1]
            );
      a = c === j.DIRECTION.right && d ? [d, e] : [e, d];
      return b('React').createElement(
        'div',
        babelHelpers['extends']({}, this.props, {
          className: b('joinClasses')(this.props.className, 'clearfix'),
        }),
        a
      );
    };
    function j() {
      i.apply(this, arguments);
    }
    j.DIRECTION = { left: 'left', right: 'right', both: 'both' };
    e.exports = j;
  },
  null
);
__d(
  'SimpleFBAuthenticatedXHRRequest',
  [
    'invariant',
    'CurrentUser',
    'DTSG',
    'DTSGUtils',
    'ServerJSDefine',
    'SprinkleConfig',
    'XHRRequest',
    'isFacebookURI',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h,
      i = 1;
    a = babelHelpers.inherits(j, b('XHRRequest'));
    h = a && a.prototype;
    function j(a, c) {
      h.constructor.call(this, a);
      a = {
        __dyn: b('ServerJSDefine').getLoadedModuleHash(),
        __req: (i++).toString(36),
        __ajax__: 1,
        __a: 1,
        __user: b('CurrentUser').getID(),
      };
      h.setData.call(this, babelHelpers['extends']({}, c, a));
    }
    j.prototype.send = function () {
      __p && __p();
      if (!b('isFacebookURI')(this.getURI())) return h.send.call(this);
      if (b('DTSG').getCachedToken) {
        var a = b('DTSG').getCachedToken();
        if (a) return this.sendOnDTSGToken(a);
        else {
          b('DTSG')
            .getToken()
            .done(
              function (a) {
                return this.sendOnDTSGToken(a);
              }.bind(this)
            );
          return this;
        }
      } else this.sendOnDTSGToken(b('DTSG').getToken());
    };
    j.prototype.sendOnDTSGToken = function (a) {
      if (a) {
        h.setData.call(
          this,
          babelHelpers['extends']({}, this.getData(), { fb_dtsg: a })
        );
        if (b('SprinkleConfig').param_name) {
          var c;
          h.setData.call(
            this,
            babelHelpers['extends'](
              {},
              this.getData(),
              ((c = {}),
              (c[b('SprinkleConfig').param_name] =
                b('DTSGUtils').getNumericValue(a)),
              c)
            )
          );
        }
      }
      return h.send.call(this);
    };
    j.prototype.setData = function (a) {
      g(0, undefined);
    };
    j.parseResponse = function (a) {
      return JSON.parse(a.substr(9));
    };
    j.getPayload = function (a) {
      a = j.parseResponse(a).payload;
      return a.payload ? a.payload : a;
    };
    e.exports = j;
  },
  null
);
__d(
  'XFantailLogController',
  ['XController'],
  function (a, b, c, d, e, f) {
    e.exports = b('XController').create('/ajax/fantail/', {
      service: { type: 'String', required: !0 },
    });
  },
  null
);
__d(
  'FantailLogQueue',
  [
    'ChannelClientID',
    'CircularBuffer',
    'FantailConfig',
    'PHPQuerySerializer',
    'SimpleFBAuthenticatedXHRRequest',
    'XFantailLogController',
    'destroyOnUnload',
    'setIntervalAcrossTransitions',
    'sprintf',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = { DEBUG: 'debug', INFO: 'info', WARN: 'warn', ERROR: 'error' };
    function h(a) {
      (this.$2 = a),
        (this.$3 = new (b('CircularBuffer'))(200)),
        b('setIntervalAcrossTransitions')(this.$4.bind(this), 30 * 1e3),
        b('destroyOnUnload')(this.$4.bind(this));
    }
    h.get = function (a) {
      h.$1 = h.$1 || {};
      h.$1[a] = h.$1[a] || new h(a);
      return h.$1[a];
    };
    h.prototype.debug = function (a) {
      for (
        var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
        d < b;
        d++
      )
        c[d - 1] = arguments[d];
      this.$5.apply(this, [g.DEBUG, a].concat(c));
    };
    h.prototype.info = function (a) {
      for (
        var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
        d < b;
        d++
      )
        c[d - 1] = arguments[d];
      this.$5.apply(this, [g.INFO, a].concat(c));
    };
    h.prototype.warn = function (a) {
      for (
        var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
        d < b;
        d++
      )
        c[d - 1] = arguments[d];
      this.$5.apply(this, [g.WARN, a].concat(c));
    };
    h.prototype.error = function (a) {
      for (
        var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
        d < b;
        d++
      )
        c[d - 1] = arguments[d];
      this.$5.apply(this, [g.ERROR, a].concat(c));
    };
    h.prototype.$5 = function (a, c) {
      for (
        var d = arguments.length, e = new Array(d > 2 ? d - 2 : 0), f = 2;
        f < d;
        f++
      )
        e[f - 2] = arguments[f];
      var g = b('sprintf').apply(undefined, [c].concat(e));
      this.$3.write({
        log_time: Date.now(),
        log: g,
        severity: a,
        device_id: b('ChannelClientID').getID(),
      });
    };
    h.prototype.$4 = function () {
      __p && __p();
      var a = this.$3.read();
      if (a.length > 0) {
        var c = { log_time: [], log: [], severity: [], device_id: [] };
        a.forEach(function (a) {
          c.log_time.push(a.log_time),
            c.log.push(a.log),
            c.severity.push(a.severity),
            c.device_id.push(a.device_id);
        });
        this.$3.clear();
        a = b('XFantailLogController')
          .getURIBuilder()
          .setString('service', this.$2)
          .getURI();
        new (b('SimpleFBAuthenticatedXHRRequest'))(a, c)
          .setMethod('POST')
          .setDataSerializer(b('PHPQuerySerializer').serialize)
          .setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
          .send();
      }
    };
    e.exports = h;
  },
  null
);
__d(
  'NavigationMetricsEnumJS',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      NAVIGATION_START: 'navigationStart',
      UNLOAD_EVENT_START: 'unloadEventStart',
      UNLOAD_EVENT_END: 'unloadEventEnd',
      REDIRECT_START: 'redirectStart',
      REDIRECT_END: 'redirectEnd',
      FETCH_START: 'fetchStart',
      DOMAIN_LOOKUP_START: 'domainLookupStart',
      DOMAIN_LOOKUP_END: 'domainLookupEnd',
      CONNECT_START: 'connectStart',
      CONNECT_END: 'connectEnd',
      SECURE_CONNECTION_START: 'secureConnectionStart',
      REQUEST_START: 'requestStart',
      RESPONSE_START: 'responseStart',
      RESPONSE_END: 'responseEnd',
      DOM_LOADING: 'domLoading',
      DOM_INTERACTIVE: 'domInteractive',
      DOM_CONTENT_LOADED_EVENT_START: 'domContentLoadedEventStart',
      DOM_CONTENT_LOADED_EVENT_END: 'domContentLoadedEventEnd',
      DOM_COMPLETE: 'domComplete',
      LOAD_EVENT_START: 'loadEventStart',
      LOAD_EVENT_END: 'loadEventEnd',
    });
  },
  null
);
__d(
  'ResourceTimingMetricsEnumJS',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      START_TIME: 'startTime',
      REDIRECT_START: 'redirectStart',
      REDIRECT_END: 'redirectEnd',
      FETCH_START: 'fetchStart',
      DOMAIN_LOOKUP_START: 'domainLookupStart',
      DOMAIN_LOOKUP_END: 'domainLookupEnd',
      CONNECT_START: 'connectStart',
      SECURE_CONNECTION_START: 'secureConnectionStart',
      CONNECT_END: 'connectEnd',
      REQUEST_START: 'requestStart',
      RESPONSE_START: 'responseStart',
      RESPONSE_END: 'responseEnd',
    });
  },
  null
);
__d(
  'ImageTimingHelper',
  ['Arbiter', 'BigPipe', 'URI'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = {},
      h = {};
    function i(a) {
      __p && __p();
      var c = a.lid,
        d = a.pagelet,
        e = a.images,
        f = a.timeslice,
        i = a.ts,
        j = g[c];
      j || (j = g[c] = []);
      e.forEach(function (a) {
        try {
          var c = new (b('URI'))(a);
          a = c.setFragment('').toString();
        } catch (a) {
          return;
        }
        if (h[a]) return;
        h[a] = !0;
        j.push({ pagelet: d, timeslice: f, ts: i, uri: a });
      });
    }
    b('Arbiter').subscribe(b('BigPipe').Events.init, function (a, b) {
      b.lid &&
        b.lid !== '0' &&
        b.arbiter.subscribe('images_displayed', function (a, b) {
          i(b);
        });
    });
    b('Arbiter').subscribe(
      'MRenderingScheduler/images_displayed',
      function (a, b) {
        i(b);
      }
    );
    e.exports.getImageTimings = function (a) {
      return g[a] || [];
    };
  },
  null
);
__d(
  'NavigationTimingHelper',
  ['NavigationMetricsEnumJS', 'forEachObject', 'performance'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function g(a, c) {
      var d = {};
      b('forEachObject')(b('NavigationMetricsEnumJS'), function (b) {
        var e = c[b];
        e && (d[b] = e + a);
      });
      return d;
    }
    var h = {
      getAsyncRequestTimings: function (a) {
        if (
          !a ||
          !b('performance').timing ||
          !b('performance').getEntriesByName
        )
          return undefined;
        a = b('performance').getEntriesByName(a);
        return a.length === 0
          ? undefined
          : g(b('performance').timing.navigationStart, a[0]);
      },
      getPerformanceNavigationTiming: function () {
        if (!b('performance').timing || !b('performance').getEntriesByType)
          return {};
        var a = b('performance').getEntriesByType('navigation');
        return !a.length
          ? {}
          : g(b('performance').timing.navigationStart, a[0]);
      },
      getNavTimings: function () {
        if (!b('performance').timing) return undefined;
        var a = babelHelpers['extends'](
          {},
          g(0, b('performance').timing),
          h.getPerformanceNavigationTiming()
        );
        return g(0, a);
      },
    };
    e.exports = h;
  },
  null
);
__d(
  'PageletEventsHelper',
  ['Arbiter', 'PageletEventConstsJS'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = 'BigPipe/init',
      h = 'MRenderingScheduler/init',
      i = 'pagelet_event',
      j = 'phase_begin',
      k = {},
      l = [],
      m = !1;
    function n() {
      return {
        pagelets: {},
        categories: {},
        phase_start: {},
        display_resources: {},
        all_resources: {},
      };
    }
    function o(a, b, c, d) {
      k[d] == undefined && (k[d] = n()),
        k[d].pagelets[b] == undefined && (k[d].pagelets[b] = {}),
        (k[d].pagelets[b][a] = c);
    }
    function p(a) {
      __p && __p();
      a.subscribe(i, function (a, c) {
        __p && __p();
        var event = c.event,
          d = c.ts;
        a = c.id;
        var e = c.lid,
          f = c.phase,
          g = c.categories,
          h = c.allResources;
        c = c.displayResources;
        o(event, a, d, e);
        var i = k[e],
          j = i.pagelets[a];
        event === b('PageletEventConstsJS').ARRIVE_END &&
          ((j.phase = f),
          (i.all_resources[a] = h),
          (i.display_resources[a] = c));
        (event === b('PageletEventConstsJS').ONLOAD_END ||
          event === b('PageletEventConstsJS').DISPLAY_END) &&
          g &&
          g.forEach(function (a) {
            i.categories[a] == undefined && (i.categories[a] = {}),
              (i.categories[a][event] = d);
          });
        for (var j = 0, f = l.length; j < f; j++) l[j](a, event, d, e);
      }),
        a.subscribe(j, function (event, a) {
          k[a.lid].phase_start[a.phase] = a.ts;
        });
    }
    a = {
      init: function () {
        __p && __p();
        if (m) return;
        b('Arbiter').subscribe(g, function (event, a) {
          var b = a.lid;
          a = a.arbiter;
          k[b] = n();
          p(a);
        });
        b('Arbiter').subscribe(h, function (event, a) {
          var b = a.lid;
          a = a.arbiter;
          k[b] = n();
          p(a);
        });
        m = !0;
      },
      getMetrics: function (a) {
        return k[a] ? JSON.parse(JSON.stringify(k[a])) : null;
      },
      subscribeToPageletEvents: function (a) {
        l.push(a);
        return {
          remove: function () {
            l.splice(0, l.indexOf(a));
          },
        };
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'ResourceTimingBootloaderHelper',
  [
    'Bootloader',
    'ErrorUtils',
    'ImageTimingHelper',
    'ResourceTimingMetricsEnumJS',
    'ResourceTimingsStore',
    'ResourceTypes',
    'URI',
    'forEachObject',
    'isEmpty',
    'performance',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = 500,
      h = [],
      i = {},
      j = {},
      k = {},
      l = ['.mp4', '.m4v', '.mpd', 'm4a'],
      m = new Set(['bootload', 'js_exec', 'start_bootload', 'tag_bootload']);
    function n(a) {
      for (var b = 0; b < l.length; b++) {
        var c = l[b];
        if (a.endsWith(c)) return !0;
      }
      return !1;
    }
    function o(a) {
      __p && __p();
      var c = new Map();
      b('ResourceTimingsStore')
        .getMapFor(a)
        .forEach(function (a) {
          if (a.requestSent != null) {
            var b = c.get(a.uri);
            b != null ? b.push(a) : c.set(a.uri, [a]);
          }
        });
      c.forEach(function (a) {
        return a.sort(function (a, b) {
          return a.requestSent - b.requestSent;
        });
      });
      return c;
    }
    function p(a, b, c, d) {
      __p && __p();
      var e = a.get(b);
      if (e == null) {
        var f = b.indexOf('?');
        if (f !== -1) {
          b = b.substring(0, f);
          e = a.get(b);
        }
      }
      if (e != null)
        for (var f = 0; f < e.length; f++) {
          a = e[f];
          b = a.requestSent;
          a = a.responseReceived;
          if (
            (c == null || (b != null && b <= c)) &&
            (d == null || (a != null && a >= d))
          )
            return e.splice(f, 1)[0];
        }
      return null;
    }
    function q(a, c, d, e, f, g, h) {
      __p && __p();
      if (!b('performance').timing || !b('performance').getEntriesByType)
        return null;
      var i = {},
        l = b('performance').timing.navigationStart;
      d &&
        (i = b('ImageTimingHelper')
          .getImageTimings(e)
          .sort(function (a, b) {
            return a.ts - b.ts;
          })
          .reduce(function (a, b) {
            if (a[b.uri]) return a;
            a[b.uri] = b.pagelet;
            return a;
          }, {}));
      d = Array.from(b('performance').getEntriesByType('resource'));
      e = d.filter(function (a) {
        return (
          a.duration >= 0 &&
          a.startTime != null &&
          a.startTime + l > c &&
          (f == null || a.responseEnd == null || a.responseEnd + l < f)
        );
      });
      e.sort(function (a, b) {
        return a.startTime - b.startTime;
      });
      d = e.length;
      var m = 0,
        q = 0,
        u = 0,
        v = 0,
        w = 0,
        x = o(b('ResourceTypes').XHR),
        y = o(b('ResourceTypes').CSS),
        z = o(b('ResourceTypes').JS);
      for (var A = 0; A < e.length; A++) {
        var B = e[A],
          C = '',
          D = '',
          E = void 0,
          F = B.initiatorType;
        switch (F) {
          case 'css':
          case 'link':
          case 'script':
            F = b('ResourceTimingsStore').parseMakeHasteURL(B.name);
            if (!F) continue;
            var G = F[0];
            F = F[1];
            if (F === 'css' || F === 'js') {
              var H = F === 'css' ? y : z;
              E = p(H, B.name, B.startTime + l, B.responseEnd + l);
              if (E != null && h) {
                D = F;
                C = E.uid;
                break;
              } else {
                D = F;
                H = k[B.name] || u++;
                C = H + '_' + G;
              }
            } else {
              F = t(B.name);
              H = F[0];
              D = F[1];
              C = q++ + '_' + H;
            }
            break;
          case 'img':
            C = q++ + '_' + r(B.name);
            D = 'img';
            break;
          case 'iframe':
            C = v++ + '_' + r(B.name) + s(B.name);
            D = 'iframe';
            break;
          case 'xmlhttprequest':
            if (g) {
              G = r(B.name);
              F = s(B.name);
              if (n(F)) {
                C = w++ + '_' + G + F;
                D = 'video';
                break;
              } else {
                E = p(x, B.name, B.startTime + l, B.responseEnd + l);
                if (E != null) {
                  D = b('ResourceTypes').XHR;
                  C = E.uid;
                  break;
                }
              }
            }
          default:
            continue;
        }
        H = {};
        G = Object.keys(b('ResourceTimingMetricsEnumJS'));
        for (var F = 0; F < G.length; F++) {
          var I = b('ResourceTimingMetricsEnumJS')[G[F]],
            J = B[I];
          J && (H[I] = J + b('performance').timing.navigationStart);
        }
        if (E != null) {
          I = E;
          J = I.requestSent;
          F = I.responseReceived;
          if (
            (c != null && J != null && J < c) ||
            (f != null && F != null && F > f)
          )
            continue;
          H.requestSent = J;
          H.responseReceived = F;
        }
        H.type = D;
        H.desc = C;
        if (
          E != null &&
          (D === b('ResourceTypes').JS ||
            D === b('ResourceTypes').CSS ||
            D === b('ResourceTypes').XHR)
        ) {
          G = b('ResourceTimingsStore').getAnnotationsFor(D, E.uid);
          G != null && (H.annotations = G);
        }
        D == 'img' &&
          Object.prototype.hasOwnProperty.call(i, B.name) &&
          (H.pagelet = i[B.name]);
        H.transferSize = B.transferSize;
        H.encodedBodySize = B.encodedBodySize;
        a[B.name] == undefined && (a[B.name] = []);
        m++;
        a[B.name].push(H);
      }
      return h ? { numValidEntries: d, numSuccessfulMetrics: m } : null;
    }
    function r(a) {
      a = new (b('URI'))(a).getDomain();
      return a;
    }
    function s(a) {
      a = new (b('URI'))(a).getPath();
      return a;
    }
    function t(a) {
      return [r(a), 'img'];
    }
    function u(a) {
      __p && __p();
      var b = Object.keys(a)
        .filter(function (a) {
          return a.startsWith('start_bootload/');
        })
        .sort(function (b, c) {
          return a[b] - a[c];
        })
        .map(function (a) {
          return a.substring(a.indexOf('/') + 1);
        });
      b.forEach(function (b) {
        return m.forEach(function (c) {
          c = c + '/' + b;
          a[c] != null && (i[c] = a[c]);
        });
      });
      h = h.concat(b);
      if (h.length > g) {
        b = h.splice(0, h.length - g);
        b.forEach(function (a) {
          return m.forEach(function (b) {
            i[b + '/' + a] && delete i[b + '/' + a];
          });
        });
      }
    }
    a = {
      addPastBootloaderMetricsToResourceTimings: function (c, d) {
        __p && __p();
        c === void 0 && (c = {});
        d === void 0 && (d = {});
        var a = b('Bootloader').getURLToHashMap();
        b('forEachObject')(c, function (b, c) {
          __p && __p();
          var e = a[c];
          if (!e) return;
          var f = new Map();
          f.set('bootloader_hash', e);
          m.forEach(function (a) {
            var b = a + '/' + e;
            b = d[b] || i[b];
            b != null && f.set(a, b);
          });
          f.size > 0 &&
            b.forEach(function (a) {
              if (a.requestSent || a.responseReceived) return;
              f.forEach(function (b, c) {
                return (a[c] = b);
              });
            });
        });
      },
      mergeBootloaderMetricsAndResourceTimings: function (a, c, d) {
        __p && __p();
        a === void 0 && (a = {});
        c === void 0 && (c = {});
        d === void 0 && (d = !0);
        b('isEmpty')(k) && (k = b('Bootloader').getURLToHashMap());
        var e = new Map();
        b('forEachObject')(k, function (a, b) {
          e.set(a, b);
        });
        var f = [];
        b('forEachObject')(c, function (b, c) {
          __p && __p();
          var d = c.indexOf('/');
          if (d === -1) return;
          var g = c.substring(0, d);
          if (!m.has(g)) return;
          f.push(c);
          var h = c.substring(d + 1);
          c = e.get(h);
          if (!c) {
            c = h;
            h = k[c];
            if (!h) return;
          }
          c.startsWith('data:') && (c = 'inlined resource: ' + h);
          a[c] == null && (a[c] = [{}]);
          a[c].forEach(function (a) {
            (a.bootloader_hash = h), (a[g] = b);
          });
        });
        d ||
          (u(c),
          f.forEach(function (a) {
            return delete c[a];
          }));
        return a;
      },
      getLastTTIAndE2EImageResponseEnds: function (a, c, d) {
        __p && __p();
        var e = { TTI: a, E2E: c };
        if (!b('performance').timing) return e;
        var f = d
            .filter(function (b) {
              return b.ts <= a;
            })
            .map(function (a) {
              return a.uri;
            })
            .reduce(function (b, a) {
              b[a] = !0;
              return b;
            }, {}),
          g = d
            .map(function (a) {
              return a.uri;
            })
            .reduce(function (b, a) {
              b[a] = !0;
              return b;
            }, {});
        for (var h in j)
          j[h].forEach(function (a) {
            a.type === 'img' &&
              (f[h] && (e.TTI = Math.max(e.TTI, a.responseEnd)),
              g[h] && (e.E2E = Math.max(e.E2E, a.responseEnd)));
          });
        return e;
      },
      getMetrics: function (a, c, d, e, f, g) {
        j = {};
        b('isEmpty')(k) && (k = b('Bootloader').getURLToHashMap());
        a = q(j, a, c, d, e, f, g);
        return { data: j, diagnostics: a };
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'PerfXFlusher',
  ['invariant', 'Banzai'],
  function (a, b, c, d, e, f, g) {
    var h = 'perfx_custom_logger_endpoint',
      i = ['perfx_page', 'perfx_page_type', 'lid'];
    function j(a) {
      i.forEach(function (b) {
        return g(
          b in a,
          'PerfXFlusher: Field "%s" missing in the PerfX payload',
          b
        );
      });
    }
    a = {
      flush: function (a) {
        j(a), b('Banzai').post(h, a, { signal: !0 });
      },
      registerToSendWithBeacon: function (a) {
        b('Banzai').registerToSendWithBeacon(h, a);
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'DataAttributeUtils',
  ['DataStore', 'Parent'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = [],
      h = {
        LEGACY_CLICK_TRACKING_ATTRIBUTE: 'data-ft',
        CLICK_TRACKING_DATASTORE_KEY: 'data-ft',
        ENABLE_STORE_CLICK_TRACKING: 'data-fte',
        IMPRESSION_TRACKING_CONFIG_ATTRIBUTE: 'data-xt-vimp',
        IMPRESSION_TRACKING_CONFIG_DATASTORE_KEY: 'data-xt-vimp',
        REMOVE_LEGACY_TRACKING: 'data-ftr',
        getDataAttribute: function (a, b) {
          return i[b] ? i[b](a) : a.getAttribute(b);
        },
        setDataAttribute: function (a, b, c) {
          return j[b] ? j[b](a, c) : a.setAttribute(b, c);
        },
        getDataFt: function (a) {
          if (a.getAttribute(h.ENABLE_STORE_CLICK_TRACKING)) {
            var c = b('DataStore').get(a, h.CLICK_TRACKING_DATASTORE_KEY);
            c ||
              (c = h.moveClickTrackingToDataStore(
                a,
                a.getAttribute(h.REMOVE_LEGACY_TRACKING)
              ));
            return c;
          }
          return a.getAttribute(h.LEGACY_CLICK_TRACKING_ATTRIBUTE);
        },
        setDataFt: function (a, c) {
          if (a.getAttribute(h.ENABLE_STORE_CLICK_TRACKING)) {
            b('DataStore').set(a, h.CLICK_TRACKING_DATASTORE_KEY, c);
            return;
          }
          a.setAttribute(h.LEGACY_CLICK_TRACKING_ATTRIBUTE, c);
        },
        moveXTVimp: function (a) {
          h.moveAttributeToDataStore(
            a,
            h.IMPRESSION_TRACKING_CONFIG_ATTRIBUTE,
            h.IMPRESSION_TRACKING_CONFIG_DATASTORE_KEY
          ),
            g.push(a.id);
        },
        getXTrackableElements: function () {
          var a = g
              .map(function (a) {
                return document.getElementById(a);
              })
              .filter(function (a) {
                return !!a;
              }),
            b = document.querySelectorAll('[data-xt-vimp]');
          for (var c = 0; c < b.length; c++) a.push(b[c]);
          return a;
        },
        getDataAttributeGeneric: function (a, c, d) {
          d = b('DataStore').get(a, d);
          return d !== undefined ? d : a.getAttribute(c);
        },
        moveAttributeToDataStore: function (a, c, d) {
          var e = a.getAttribute(c);
          e && (b('DataStore').set(a, d, e), a.removeAttribute(c));
        },
        moveClickTrackingToDataStore: function (a, c) {
          var d = a.getAttribute(h.LEGACY_CLICK_TRACKING_ATTRIBUTE);
          d &&
            (b('DataStore').set(a, h.CLICK_TRACKING_DATASTORE_KEY, d),
            c && a.removeAttribute(h.LEGACY_CLICK_TRACKING_ATTRIBUTE));
          return d;
        },
        getClickTrackingParent: function (a) {
          a =
            b('Parent').byAttribute(a, h.LEGACY_CLICK_TRACKING_ATTRIBUTE) ||
            b('Parent').byAttribute(a, h.ENABLE_STORE_CLICK_TRACKING);
          return a;
        },
        getClickTrackingElements: function (a) {
          return a.querySelectorAll(
            '[' +
              h.LEGACY_CLICK_TRACKING_ATTRIBUTE +
              '], [' +
              h.ENABLE_STORE_CLICK_TRACKING +
              ']'
          );
        },
        getParentByAttributeOrDataStoreKey: function (a, c, d) {
          while (
            a &&
            (!a.getAttribute || !a.getAttribute(c)) &&
            b('DataStore').get(a, d) === undefined
          )
            a = a.parentNode;
          return a;
        },
      },
      i = {
        'data-ft': h.getDataFt,
        'data-xt-vimp': function (a) {
          return h.getDataAttributeGeneric(a, 'data-xt-vimp', 'data-xt-vimp');
        },
        'data-ad': function (a) {
          return h.getDataAttributeGeneric(a, 'data-ad', 'data-ad');
        },
        'data-xt': function (a) {
          return h.getDataAttributeGeneric(a, 'data-xt', 'data-xt');
        },
      },
      j = {
        'data-ft': h.setDataFt,
        'data-xt': function (a, c) {
          b('DataStore').set(a, 'data-xt', c);
        },
      };
    e.exports = h;
  },
  null
);
__d(
  'PerfXSharedFields',
  [],
  function (a, b, c, d, e, f) {
    var g = {
      addCommonValues: function (a) {
        navigator &&
          navigator.hardwareConcurrency !== undefined &&
          (a.num_cores = navigator.hardwareConcurrency);
        navigator &&
          navigator.deviceMemory &&
          (a.ram_gb = navigator.deviceMemory);
        navigator &&
          navigator.connection &&
          (typeof navigator.connection.downlink === 'number' &&
            (a.downlink_megabits = navigator.connection.downlink),
          typeof navigator.connection.effectiveType === 'string' &&
            (a.effective_connection_type = navigator.connection.effectiveType),
          typeof navigator.connection.rtt === 'number' &&
            (a.rtt_ms = navigator.connection.rtt));
        return a;
      },
      getCommonData: function () {
        var a = {};
        g.addCommonValues(a);
        return a;
      },
    };
    e.exports = g;
  },
  null
);
__d(
  'QuicklingRefreshOverheadUtil',
  ['QuicklingConfig', 'WebStorage', 'performanceAbsoluteNow'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = null,
      h = 1e4;
    a = {
      onQuicklingStart: function () {
        g = b('performanceAbsoluteNow')();
      },
      onQuicklingVersionMatch: function () {
        g = null;
      },
      onQuicklingRefreshStart: function () {
        if (!b('QuicklingConfig').logRefreshOverhead || g === null) return;
        var a = b('WebStorage').getSessionStorage();
        if (!a) return;
        a.setItem(
          'quickling_refresh_overhead',
          (b('performanceAbsoluteNow')() - g).toString()
        );
        a.setItem('quickling_refresh_start', Date.now().toString());
      },
      getOverhead: function (a) {
        __p && __p();
        if (!b('QuicklingConfig').logRefreshOverhead) return null;
        var c = b('WebStorage').getSessionStorageForRead();
        if (!c) return null;
        var d = c.getItem('quickling_refresh_start');
        if (d == null) return null;
        if (a - parseInt(d, 10) > h) return null;
        a = c.getItem('quickling_refresh_overhead');
        return a != null ? parseFloat(a) : null;
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'pageLoadedViaSWCache',
  [],
  function (a, b, c, d, e, f) {
    function a() {
      return self.__SW_CACHE__ === 1;
    }
    e.exports = a;
  },
  null
);
__d(
  'PerfXLogger',
  [
    'ArtilleryOnUntilOffLogging',
    'BanzaiODS',
    'DataAttributeUtils',
    'NavigationMetrics',
    'NavigationTimingHelper',
    'PerfXFlusher',
    'PerfXSharedFields',
    'QuicklingRefreshOverheadUtil',
    'VisibilityListener',
    'forEachObject',
    'pageLoadedViaSWCache',
    'performanceAbsoluteNow',
    'setTimeoutAcrossTransitions',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = {},
      h = {},
      i = 65 * 1e3,
      j = [
        'e2e',
        'tti',
        'all_pagelets_displayed',
        'all_pagelets_loaded',
        'artillery_disable_time',
      ],
      k = {},
      l = {
        _listenersSetUp: !1,
        _uploadEarly: !1,
        _alreadyUploadedEarly: !1,
        _setupListeners: function () {
          __p && __p();
          if (this._listenersSetUp) return;
          this._subscribeToNavigationMetrics();
          b('PerfXFlusher').registerToSendWithBeacon(
            function () {
              var a = [];
              b('forEachObject')(
                g,
                function (b, c) {
                  if (!g[c].sent) {
                    b = this.getPayload(c, 'unload fired');
                    b != null && a.push(b);
                  }
                }.bind(this)
              );
              g = {};
              return a;
            }.bind(this)
          );
          this._listenersSetUp = !0;
        },
        _init: function (a) {
          __p && __p();
          var b = a.lid;
          if (b == null) return;
          this._alreadyUploadedEarly = !1;
          this._uploadEarly = !!a.upload_perfx_early;
          delete a.upload_perfx_early;
          var c = h[b] || [];
          delete h[b];
          if (a.sw_controlled_tags) {
            if (navigator.serviceWorker && navigator.serviceWorker.controller)
              for (var d = 0; d < a.sw_controlled_tags.length; d++)
                c.push(a.sw_controlled_tags[d]);
            delete a.sw_controlled_tags;
          }
          g[b] = babelHelpers['extends']({ tags: new Set(c), sent: !1 }, a);
          this._registerTimeoutSendback(b);
          this._setupListeners();
        },
        initWithNavigationMetricsLID: function (a, c) {
          __p && __p();
          var d = b('NavigationMetrics').getFullPageLoadLid();
          if (!d) return;
          this._init(babelHelpers['extends']({}, c, { lid: d }));
          if (a && a.always)
            for (var c = 0; c < a.always.length; c++) l.addTag(d, a.always[c]);
          if (a && a.swCache && b('pageLoadedViaSWCache')())
            for (var c = 0; c < a.swCache.length; c++)
              l.addTag(d, a.swCache[c]);
        },
        init: function (a, b) {
          b != null && a.lid != null && (k[a.lid] = b), this._init(a);
        },
        addTag: function (a, c) {
          this._alreadyUploadedEarly &&
            b('BanzaiODS').bumpEntityKey('PerfXLateTag', c);
          var d = g[a];
          if (d) {
            d.tags.add(c);
            return;
          }
          h[a] || (h[a] = []);
          h[a].push(c);
        },
        addTagWithNavigationMetricsLID: function (a) {
          this._alreadyUploadedEarly &&
            b('BanzaiODS').bumpEntityKey('PerfXLateTag', a);
          var c = b('NavigationMetrics').getFullPageLoadLid();
          if (!c) return;
          l.addTag(c, a);
        },
        _registerTimeoutSendback: function (a) {
          var c = this._getFetchStart(a),
            d = i;
          c != null && (d -= b('performanceAbsoluteNow')() - c);
          b('setTimeoutAcrossTransitions')(
            function () {
              return this._uploadPayload(a, 'sendback time out');
            }.bind(this),
            d
          );
        },
        _subscribeToNavigationMetrics: function () {
          __p && __p();
          b('NavigationMetrics').addRetroactiveListener(
            b('NavigationMetrics').Events.EVENT_OCCURRED,
            function (a, b) {
              if (!(a in g)) return;
              j.includes(b.event) &&
                Object.prototype.hasOwnProperty.call(b, 'timestamp') &&
                b.timestamp != null &&
                (g[a][b.event] = b.timestamp);
              b.event === 'all_pagelets_displayed' &&
                this._uploadEarly &&
                (j.forEach(function (event) {
                  Object.prototype.hasOwnProperty.call(b, event) &&
                    b[event] != null &&
                    (g[a][event] = b[event]);
                }),
                this._uploadPayload(a),
                (this._alreadyUploadedEarly = !0));
            }.bind(this)
          ),
            b('NavigationMetrics').addRetroactiveListener(
              b('NavigationMetrics').Events.NAVIGATION_DONE,
              function (a, b) {
                var c = b.serverLID;
                if (!(c in g)) return;
                j.forEach(function (event) {
                  Object.prototype.hasOwnProperty.call(b, event) &&
                    b[event] != null &&
                    (g[c][event] = b[event]);
                });
                this._uploadPayload(c);
              }.bind(this)
            );
        },
        _getPayloadWithOffset: function (a, c, d) {
          __p && __p();
          a = g[a];
          if (a == null) return null;
          var e = Object.assign({}, a),
            f = document.querySelector('[id^="hyperfeed_story_id"]');
          if (f) {
            f = JSON.parse(b('DataAttributeUtils').getDataFt(f));
            f && (e.mf_query_id = f.qid);
          }
          e.tags = Array.from(a.tags);
          e.art_id ||
            (e.artillery_disable_time = b(
              'ArtilleryOnUntilOffLogging'
            ).lastDisableTime());
          this._adjustValues(e, c);
          e.fetch_start = c;
          if (e.perfx_page_type === 'normal') {
            f = b('NavigationTimingHelper').getNavTimings();
            f != null &&
              f.navigationStart != null &&
              (e.nav_to_fetch = c - f.navigationStart);
            a = b('QuicklingRefreshOverheadUtil').getOverhead(c);
            a !== null && (e.quickling_refresh_overhead = a);
          }
          d != null && (e.sendback_reason = d);
          b('PerfXSharedFields').addCommonValues(e);
          b('VisibilityListener').supported() &&
            e.fetch_start &&
            e.all_pagelets_displayed &&
            e.tti &&
            e.e2e &&
            ((e.tab_hidden_time_dd = b('VisibilityListener').getHiddenTime(
              e.fetch_start,
              e.fetch_start + e.all_pagelets_displayed
            )),
            (e.tab_hidden_time_tti = b('VisibilityListener').getHiddenTime(
              e.fetch_start,
              e.fetch_start + e.tti
            )),
            (e.tab_hidden_time_e2e = b('VisibilityListener').getHiddenTime(
              e.fetch_start,
              e.fetch_start + e.e2e
            )));
          window &&
            window.location &&
            window.location.pathname &&
            (e.request_uri = window.location.pathname);
          delete e.sent;
          return e;
        },
        _uploadPayload: function (a, c) {
          if (g[a] != null && !g[a].sent) {
            c = this.getPayload(a, c);
            c != null && (b('PerfXFlusher').flush(c), (g[a].sent = !0));
          }
        },
        getPayload: function (a, b) {
          return this._getPayloadWithOffset(a, this._getFetchStart(a), b);
        },
        _getFetchStart: function (a) {
          if (!(a in g)) return null;
          var c = g[a].perfx_page_type;
          if (c == 'quickling')
            if (!(a in k)) return null;
            else c = b('NavigationTimingHelper').getAsyncRequestTimings(k[a]);
          else c = b('NavigationTimingHelper').getNavTimings();
          return !c || !c.fetchStart ? null : c.fetchStart;
        },
        _adjustValues: function (a, b) {
          j.forEach(function (c) {
            Object.prototype.hasOwnProperty.call(a, c) && (a[c] -= b);
          });
        },
      };
    e.exports = l;
  },
  null
);
__d(
  'QuickLogEvents',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      22347782: {
        moduleName: 'STORIES_ARCHIVE',
        name: 'ARCHIVE_GRID_TTI_WWW',
        sampleRate: 100,
      },
      23265284: {
        moduleName: 'CHECKOUT_PURCHASE_EXPERIENCES',
        name: 'CHECKOUT_FLOW_WWW',
        sampleRate: 1,
      },
      23265285: {
        moduleName: 'CHECKOUT_PURCHASE_EXPERIENCES',
        name: 'CHECKOUT_LAUNCH_BY_PRODUCT_WWW',
        sampleRate: 1,
      },
      23855110: {
        moduleName: 'UNIDASH',
        name: 'CLEAN_LOAD_WWW',
        sampleRate: 1,
      },
      655585: { moduleName: 'FEED', name: 'COMMENT_TTL_WWW', sampleRate: 250 },
      25296900: {
        moduleName: 'MESSENGER_WEB',
        name: 'COMPOSER_INTERACTION',
        sampleRate: null,
      },
      655575: {
        moduleName: 'FEED',
        name: 'CONSUMPTION_RESTORATION_WWW',
        sampleRate: 1,
      },
      26869763: {
        moduleName: 'CREATOR_STUDIO',
        name: 'CREATOR_STUDIO_CONTEXT_SWITCH',
        sampleRate: 1,
      },
      26869762: {
        moduleName: 'CREATOR_STUDIO',
        name: 'CREATOR_STUDIO_FEED_LOAD',
        sampleRate: 1,
      },
      26869761: {
        moduleName: 'CREATOR_STUDIO',
        name: 'CREATOR_STUDIO_INITIAL_LOAD',
        sampleRate: 1,
      },
      25296897: {
        moduleName: 'MESSENGER_WEB',
        name: 'FIRSTCHATTABOPEN_WWW',
        sampleRate: 1,
      },
      25296899: {
        moduleName: 'MESSENGER_WEB',
        name: 'GROUP_INPUT_INDIVIDUAL_TAB_OPEN_WWW',
        sampleRate: null,
      },
      25296898: {
        moduleName: 'MESSENGER_WEB',
        name: 'GROUP_INPUT_TAB_OPEN_WWW',
        sampleRate: null,
      },
      27459585: { moduleName: 'IG_WEB', name: 'IG_FEED_LOAD', sampleRate: 1e4 },
      27459586: {
        moduleName: 'IG_WEB',
        name: 'IG_FEED_LOAD_MORE',
        sampleRate: 1e4,
      },
      655576: { moduleName: 'FEED', name: 'IMAGE_LOAD_WWW', sampleRate: 5e3 },
      23855105: { moduleName: 'UNIDASH', name: 'INIT_LOAD_WWW', sampleRate: 1 },
      19202060: {
        moduleName: 'PAGES_INSIGHTS',
        name: 'LIKES_TAB_LOAD_WWW',
        sampleRate: 10,
      },
      19202061: {
        moduleName: 'PAGES_INSIGHTS',
        name: 'LIKES_TAB_UPDATE_WWW',
        sampleRate: 10,
      },
      655596: {
        moduleName: 'FEED',
        name: 'LOAD_ANY_DESTINATION_FROM_NOTIFICATIONS_WWW',
        sampleRate: 50,
      },
      655597: {
        moduleName: 'FEED',
        name: 'LOAD_STORY_PERMALINK_FROM_ANYWHERE_WWW',
        sampleRate: 100,
      },
      655595: {
        moduleName: 'FEED',
        name: 'MAIN_THREAD_PERFORMANCE',
        sampleRate: 1,
      },
      20578316: {
        moduleName: 'GROUPS_ADMIN',
        name: 'MEMBER_REQUESTS_TTI_WWW',
        sampleRate: 0,
      },
      7995401: {
        moduleName: 'RELAY',
        name: 'NETWORK_FETCH_QUERY',
        sampleRate: 1,
      },
      655584: {
        moduleName: 'FEED',
        name: 'NOTIFICATION_INTERACTION_WWW',
        sampleRate: 1,
      },
      19202053: {
        moduleName: 'PAGES_INSIGHTS',
        name: 'OVERVIEW_CARD_WWW',
        sampleRate: 100,
      },
      19202055: {
        moduleName: 'PAGES_INSIGHTS',
        name: 'OVERVIEW_TAB_MOST_RECENT_POST_WWW',
        sampleRate: 10,
      },
      19202054: {
        moduleName: 'PAGES_INSIGHTS',
        name: 'OVERVIEW_TAB_PAGE_SUMMARY_WWW',
        sampleRate: 10,
      },
      23855108: {
        moduleName: 'UNIDASH',
        name: 'PAGE_LOAD_END_WWW',
        sampleRate: 1,
      },
      24117250: {
        moduleName: 'SRT',
        name: 'PAGE_NAVIGATION_START_WWW',
        sampleRate: 0,
      },
      23265286: {
        moduleName: 'CHECKOUT_PURCHASE_EXPERIENCES',
        name: 'PAY_FLOW_WWW',
        sampleRate: 1,
      },
      19202056: {
        moduleName: 'PAGES_INSIGHTS',
        name: 'POSTS_TAB_ALL_POSTS_PUBLISHED_WWW',
        sampleRate: 10,
      },
      19202066: {
        moduleName: 'PAGES_INSIGHTS',
        name: 'POSTS_TAB_ALL_POSTS_SEE_MORE_WWW',
        sampleRate: 10,
      },
      19202058: {
        moduleName: 'PAGES_INSIGHTS',
        name: 'POSTS_TAB_BEST_POSTS_WWW',
        sampleRate: 10,
      },
      19202057: {
        moduleName: 'PAGES_INSIGHTS',
        name: 'POSTS_TAB_WHEN_FANS_ONLINE_WWW',
        sampleRate: 10,
      },
      19202059: {
        moduleName: 'PAGES_INSIGHTS',
        name: 'POST_TAB_PAGE_YOU_WATCH_WWW',
        sampleRate: 10,
      },
      19202062: {
        moduleName: 'PAGES_INSIGHTS',
        name: 'REACH_TAB_LOAD_WWW',
        sampleRate: 10,
      },
      19202064: {
        moduleName: 'PAGES_INSIGHTS',
        name: 'REACH_TAB_REACTION_LOAD_WWW',
        sampleRate: 10,
      },
      19202065: {
        moduleName: 'PAGES_INSIGHTS',
        name: 'REACH_TAB_REACTION_UPDATE_WWW',
        sampleRate: 10,
      },
      19202063: {
        moduleName: 'PAGES_INSIGHTS',
        name: 'REACH_TAB_UPDATE_WWW',
        sampleRate: 10,
      },
      11075606: {
        moduleName: 'MARKETPLACE',
        name: 'REACT_TTI_WWW',
        sampleRate: 100,
      },
      7995404: {
        moduleName: 'RELAY',
        name: 'RESPONSE_NORMALIZER_NORMALIZE',
        sampleRate: 100,
      },
      7995402: { moduleName: 'RELAY', name: 'RUNTIME_GC', sampleRate: 1 },
      7995403: { moduleName: 'RELAY', name: 'RUNTIME_NOTIFY', sampleRate: 100 },
      7995400: {
        moduleName: 'RELAY',
        name: 'RUNTIME_SUBSCRIPTIONS',
        sampleRate: 1,
      },
      13238314: {
        moduleName: 'STORIES',
        name: 'STORY_VIEWER_LOAD_FIRST_TIME_WWW',
        sampleRate: 100,
      },
      13238313: {
        moduleName: 'STORIES',
        name: 'STORY_VIEWER_LOAD_TTI_WWW',
        sampleRate: 100,
      },
      23855109: {
        moduleName: 'UNIDASH',
        name: 'TAB_NAV_START_WWW',
        sampleRate: 1,
      },
      23855112: { moduleName: 'UNIDASH', name: 'TAB_NAV_WWW', sampleRate: 1 },
      25493506: {
        moduleName: 'TAHOE',
        name: 'TAHOE_DISPLAY_DONE',
        sampleRate: null,
      },
      25493505: {
        moduleName: 'TAHOE',
        name: 'TAHOE_MEDIA_DONE',
        sampleRate: null,
      },
      26476545: {
        moduleName: 'WWW_PROFILE',
        name: 'TIMELINE_TAIL_LOAD_WWW',
        sampleRate: 1,
      },
      24117249: {
        moduleName: 'SRT',
        name: 'TIME_TO_FIRST_JOB_WWW',
        sampleRate: 1,
      },
      24117251: {
        moduleName: 'SRT',
        name: 'TIME_TO_NEXT_JOB_WWW',
        sampleRate: 1,
      },
      3735603: {
        moduleName: 'UFI',
        name: 'UFI2_COMMENT_REACTION',
        sampleRate: 1,
      },
      3735606: {
        moduleName: 'UFI',
        name: 'UFI2_COMPOSER_KEYPRESS_LATENCY',
        sampleRate: 1,
      },
      3735590: {
        moduleName: 'UFI',
        name: 'UFI2_OPTIMISTIC_COMMENT',
        sampleRate: 1,
      },
      3735593: {
        moduleName: 'UFI',
        name: 'UFI2_OPTIMISTIC_COMMENT_EDIT',
        sampleRate: 1,
      },
      3735592: {
        moduleName: 'UFI',
        name: 'UFI2_PERSISTED_COMMENT',
        sampleRate: 1,
      },
      3735594: {
        moduleName: 'UFI',
        name: 'UFI2_PERSISTED_COMMENT_EDIT',
        sampleRate: 1,
      },
      3735597: {
        moduleName: 'UFI',
        name: 'UFI2_REPLY_COMMENTS_PAGINATION',
        sampleRate: 1,
      },
      3735599: {
        moduleName: 'UFI',
        name: 'UFI2_SHARE_DIALOG_OPENS',
        sampleRate: 1,
      },
      3735602: {
        moduleName: 'UFI',
        name: 'UFI2_STORY_REACTION',
        sampleRate: 1,
      },
      3735596: {
        moduleName: 'UFI',
        name: 'UFI2_TOP_LEVEL_COMMENTS_PAGINATION',
        sampleRate: 1,
      },
      3735604: {
        moduleName: 'UFI',
        name: 'UFI_COMMENT_REACTION',
        sampleRate: 100,
      },
      3735600: {
        moduleName: 'UFI',
        name: 'UFI_COMPOSER_INPUT_FOCUS',
        sampleRate: 100,
      },
      3735605: {
        moduleName: 'UFI',
        name: 'UFI_COMPOSER_KEYPRESS_LATENCY',
        sampleRate: 100,
      },
      3735589: {
        moduleName: 'UFI',
        name: 'UFI_OPTIMISTIC_COMMENT',
        sampleRate: 100,
      },
      3735591: {
        moduleName: 'UFI',
        name: 'UFI_PERSISTED_COMMENT',
        sampleRate: 100,
      },
      3735598: {
        moduleName: 'UFI',
        name: 'UFI_SHARE_DIALOG_OPENS',
        sampleRate: 100,
      },
      3735601: {
        moduleName: 'UFI',
        name: 'UFI_STORY_REACTION',
        sampleRate: 100,
      },
      3735595: {
        moduleName: 'UFI',
        name: 'UFI_TOP_LEVEL_COMMENTS_PAGINATION',
        sampleRate: 100,
      },
      7995399: {
        moduleName: 'RELAY',
        name: 'UNSAFE_ASYNC_TEST',
        sampleRate: 100,
      },
      7995396: {
        moduleName: 'RELAY',
        name: 'UNSAFE_SUBSCRIPTIONS_TEST',
        sampleRate: 100,
      },
      7995398: {
        moduleName: 'RELAY',
        name: 'UNSAFE_SYNC_TEST',
        sampleRate: 100,
      },
      14549005: {
        moduleName: 'LIVE',
        name: 'VIDEO_COMPONENT_TTL',
        sampleRate: null,
      },
      23855107: {
        moduleName: 'UNIDASH',
        name: 'WIDGET_LOAD_END_WWW',
        sampleRate: 1,
      },
      23855106: {
        moduleName: 'UNIDASH',
        name: 'WIDGET_LOAD_START_WWW',
        sampleRate: 1,
      },
      23855111: {
        moduleName: 'UNIDASH',
        name: 'WIDGET_LOAD_WWW',
        sampleRate: 1,
      },
      12517384: {
        moduleName: 'ABOUTPAGE',
        name: 'Z_AMPERANDY_TEST_WWW',
        sampleRate: 0,
      },
    });
  },
  null
);
__d(
  'Placeholder.react',
  ['react'],
  function (a, b, c, d, e, f) {
    e.exports = b('react').Placeholder;
  },
  null
);
__d(
  'lazyLoadComponent',
  ['BootloaderResource', 'react'],
  function (a, b, c, d, e, f) {
    function a(a) {
      function c(c) {
        var d = b('BootloaderResource').read(a);
        return b('react').createElement(d, c);
      }
      c.displayName = 'lazyLoadComponent(' + a.getModuleId() + ')';
      return c;
    }
    e.exports = a;
  },
  null
);
__d(
  'BanzaiLogger',
  ['Banzai'],
  function (a, b, c, d, e, f) {
    var g = 'logger';
    function a(a) {
      return {
        log: function (c, d) {
          b('Banzai').post(h._getRoute(c), d, a);
        },
        registerToSendWithBeacon: function (a, c, d, e) {
          b('Banzai').registerToSendWithBeacon(h._getRoute(a), c, d, e);
        },
        _getRoute: function (a) {
          return g + ':' + a;
        },
      };
    }
    var h = a();
    h.create = a;
    e.exports = h;
  },
  null
);
__d(
  'cssVar',
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      throw new Error('cssVar("' + a + '"): Unexpected class transformation.');
    }
    e.exports = a;
  },
  null
);
__d(
  'XRelayBootloadController',
  ['XController'],
  function (a, b, c, d, e, f) {
    e.exports = b('XController').create('/relay/bootload/', {
      component: { type: 'String', required: !0 },
      params: { type: 'String', required: !0 },
      route: { type: 'String', required: !0 },
      uri: { type: 'String', required: !0 },
    });
  },
  null
);
