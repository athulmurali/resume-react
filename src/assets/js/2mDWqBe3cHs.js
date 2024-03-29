if (self.CavalryLogger) {
  CavalryLogger.start_js(['kWfZE']);
}

__d(
  'ARIAComboboxNotify',
  ['fbt', 'ARIA', 'UserAgent'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h = !b('UserAgent').isPlatform('Mac OS X');
    a = {
      maybeNotifyHighlightedEntry: function (a) {
        if (a && !h) {
          var c = a.getTitle();
          a = a.getSubtitle();
          b('ARIA').notify(a ? c + ', ' + a : c);
          return !0;
        }
        return !1;
      },
      notifyFoundEntries: function (a) {
        a = g._({ '*': 'Found {number} results', _1: 'Found 1 result' }, [
          g._plural(a ? a.length : 0, 'number'),
        ]);
        b('ARIA').notify(a);
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'CenteredContainer.react',
  ['cx', 'React', 'joinClasses'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h;
    c = b('React').PropTypes;
    h = babelHelpers.inherits(a, b('React').Component);
    h && h.prototype;
    a.prototype.render = function () {
      var a =
          (this.props.vertical ? '_3bwv' : '') +
          (this.props.horizontal ? ' _3bww' : ''),
        c = b('React').Children.map(this.props.children, function (a) {
          return b('React').createElement('div', { className: '_3bwx' }, a);
        }),
        d = b('joinClasses')(
          this.props.className,
          this.props.fullHeight ? '_5bpf' : ''
        );
      return b('React').createElement(
        'div',
        babelHelpers['extends']({}, this.props, { className: d }),
        b('React').createElement(
          'div',
          { className: a },
          b('React').createElement('div', { className: '_3bwy' }, c)
        )
      );
    };
    function a() {
      h.apply(this, arguments);
    }
    a.propTypes = { fullHeight: c.bool, vertical: c.bool, horizontal: c.bool };
    a.defaultProps = { fullHeight: !1, vertical: !1, horizontal: !0 };
    e.exports = a;
  },
  null
);
__d(
  'EncryptedImg',
  ['EncryptedImgUtils', 'URI', 'XHRRequest', 'getCrossOriginTransport'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = {
      insertIntoStyleBackgroundImage: function (a, b) {
        b = function (a, b) {
          a && (a.style.backgroundImage = "url('" + b + "')");
        }.bind(undefined, b);
        g.load(a, b);
      },
      insertIntoDOM: function (a, b) {
        b = function (a, b) {
          a && a.setAttribute('src', b);
        }.bind(undefined, b);
        g.load(a, b);
      },
      load: function (a, c, d) {
        d === void 0 && (d = !0);
        a = new (b('URI'))(a);
        var e = b('EncryptedImgUtils').extractKey(a);
        e = h.bind(undefined, e, c, d);
        e.includeHeaders = !0;
        new (b('XHRRequest'))(a.toString())
          .setTransportBuilder(b('getCrossOriginTransport'))
          .setMethod('GET')
          .setResponseType('arraybuffer')
          .setResponseHandler(e)
          .send();
      },
      dataUrlPrefix: function (a, b) {
        b === void 0 && (b = 32);
        if (!a.startsWith('data:')) return a;
        var c = a.indexOf(',');
        (c < 0 || c > b) && (c = b);
        return a.slice(0, c);
      },
    };
    Object.assign(g, b('EncryptedImgUtils'));
    e.exports = g;
    function h(a, b, c, d, e) {
      __p && __p();
      if (!a) {
        b(k(d, j(e)));
        return;
      }
      a = i(a);
      var f = new Uint8Array(d);
      d = f.subarray(2, 14);
      f = f.subarray(14, f.length);
      var g = { name: 'AES-GCM', iv: d, tagLength: 128 };
      window.crypto.subtle
        .importKey('raw', a, g, !1, ['encrypt', 'decrypt'])
        .then(function (a) {
          return window.crypto.subtle.decrypt(g, a, f);
        })
        .then(function (a) {
          c ? b(k(a, j(e))) : b(a);
        })
        ['catch'](function () {});
    }
    function i(a) {
      if (typeof a === 'string') {
        var b = new Uint8Array(Math.floor(a.length / 2)),
          c = 0;
        a.replace(/(..)/g, function (a) {
          b[c++] = parseInt(a, 16);
        });
        return b;
      }
      return null;
    }
    function j(a) {
      var b = 'image/jpeg';
      a = a.toLowerCase().match(/content-type:\s?([\w\/]*)\s/);
      a && a.length > 1 && (b = a[1]);
      return b;
    }
    function k(a, b) {
      a = new Uint8Array(a);
      var c = '';
      for (var d = 0, e = a.byteLength; d < e; ++d)
        c += String.fromCharCode(a[d]);
      return 'data:' + b + ';base64,' + window.btoa(c);
    }
  },
  null
);
__d(
  'getDOMImageSize',
  ['EncryptedImg', 'URI'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function g(a) {
      (a.onload = null),
        (a.onerror = null),
        (a.onreadystatechange = null),
        (a._callback = null),
        (a._thisObj = null),
        (a._srcStr = null),
        a.parentNode && a.parentNode.removeChild(a);
    }
    function h() {
      var a = this;
      a._callback &&
        a._callback.call(
          a._thisObj,
          a.naturalWidth || a.width,
          a.naturalHeight || a.height,
          a._srcStr
        );
      g(a);
    }
    function i() {
      var a = this;
      a.readyState === 'complete' && h.call(a);
    }
    function j() {
      var a = this;
      a._callback && a._callback.call(a._thisObj, 0, 0, a._srcStr);
      g(a);
    }
    function k(a, c, d) {
      __p && __p();
      d = d || null;
      if (!a) {
        c.call(d, 0, 0, '');
        return;
      }
      var e = document.body;
      if (!e) {
        setTimeout(k.bind(this, a, c, d), 500);
        return;
      }
      var f;
      if (typeof a === 'string') f = a;
      else if (typeof a === 'object')
        if (typeof a.width === 'number' && typeof a.height === 'number') {
          if (typeof a.src === 'string') {
            f = a.src;
            if (a.naturalWidth && a.naturalHeight) {
              c.call(d, a.naturalWidth, a.naturalHeight, f);
              return;
            }
          }
          if (typeof a.uri === 'string') {
            f = a.uri;
            if (a.width && a.height) {
              c.call(d, a.width, a.height, f);
              return;
            }
          }
        } else a instanceof b('URI') && (f = a.toString());
      if (!f) {
        c(0, 0, a);
        return;
      }
      a = document.createElement('img');
      a.onreadystatechange = i;
      a.onload = h;
      a.onerror = j;
      a._callback = c;
      a._thisObj = d;
      a._srcStr = f;
      b('EncryptedImg').isEncrypted(f)
        ? b('EncryptedImg').insertIntoDOM(f, a)
        : (a.src = f);
      a.style.cssText =
        '\n    position:absolute;\n    left:-5000px;\n    top:-5000px;\n    width:auto;\n    height:auto;\n    clip:rect(0 0 0 0);\n  '.replace(
          /\s+/,
          ' '
        );
      e.insertBefore(a, e.firstChild);
    }
    e.exports = k;
  },
  null
);
__d(
  'CachedDOMImageSizePool',
  ['debounce', 'getDOMImageSize'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a, c) {
      (this.$1 = {}),
        (this.$2 = c),
        (this.$3 = 0),
        (this.$4 = a),
        (this.$5 = b('debounce')(this.$6, 5e3, this)),
        (this.$7 = {}),
        (this.$8 = {});
    }
    a.prototype.get = function (a, c, d) {
      if (!a) {
        c.call(d, 0, 0, a);
        return;
      }
      var e = this.$1[a];
      e
        ? ((e.lastAccessTime = Date.now()), c.call(d, e.width, e.height, e.src))
        : this.$7[a]
        ? (this.$7[a].push(c), this.$8[a].push(d))
        : ((this.$7[a] = [c]),
          (this.$8[a] = [d]),
          b('getDOMImageSize')(a, this.$9, this));
    };
    a.prototype.set = function (a, b, c) {
      this.$3 > this.$4 && this.$5();
      var d = this.$1;
      if (a && !d[a]) {
        b = { width: b, height: c, src: a, lastAccessTime: Date.now() };
        d[a] = b;
        this.$3++;
      }
    };
    a.prototype.$9 = function (a, b, c) {
      this.set(c, a, b);
      var d = this.$7[c],
        e = this.$8[c];
      for (var f = 0, g = d.length; f < g; f++) d[f].call(e[f], a, b, c);
      delete this.$7[c];
      delete this.$8[c];
    };
    a.prototype.$6 = function () {
      var a = Date.now(),
        b = this.$1,
        c = this.$3,
        d = this.$2;
      for (var e in b) {
        var f = b[e];
        a - f.lastAccessTime > d && (delete b[e], c--);
      }
      this.$3 = c;
    };
    e.exports = a;
  },
  null
);
__d(
  'clamp',
  [],
  function (a, b, c, d, e, f) {
    function a(a, b, c) {
      if (a < b) return b;
      return a > c ? c : a;
    }
    e.exports = a;
  },
  null
);
__d(
  'ImagePositioner.react',
  ['React', 'clamp'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g;
    g = babelHelpers.inherits(a, b('React').PureComponent);
    g && g.prototype;
    a.prototype.render = function () {
      __p && __p();
      var a = this.props.width,
        c = this.props.height,
        d,
        e;
      switch (this.props.backgroundSize) {
        case 'cover':
          d = 'cover';
          e = !1;
          break;
        case 'coverinside':
          d = 'cover';
          e = !0;
          break;
        case 'contain':
          d = 'contain';
          e = !1;
          break;
        case 'containinside':
          d = 'contain';
          e = !0;
          break;
        case 'fitWidth':
          d = 'fitWidth';
          e = !0;
          break;
      }
      var f = this.props.imageWidth,
        g = this.props.imageHeight,
        h = a / c,
        i = f / g;
      d === 'contain' &&
        ((f > a || !e) && i >= h
          ? ((f = a), (g = f / i))
          : (g > c || !e) && ((g = c), (f = g * i)));
      d == 'fitWidth' && ((f = a), (g = a / i));
      d === 'cover' &&
        ((f > a || !e) && i >= h
          ? ((g = c), (f = g * i))
          : (g > c || !e) && ((f = a), (g = f / i)));
      h = this.$1(f, g);
      c = this.props.children(h);
      return c && b('React').Children.only(c);
    };
    a.prototype.$1 = function (a, b) {
      var c = ['50%', '50%'],
        d = this.$2;
      this.props.backgroundPosition
        ? (c = this.props.backgroundPosition.split(' '))
        : this.props.backgroundFocus &&
          ((c = this.props.backgroundFocus.split(' ')), (d = this.$3));
      return {
        width: Math.round(a) + 'px',
        height: Math.round(b) + 'px',
        left: d(c[0], a, this.props.width),
        top: d(c[1] || c[0], b, this.props.height),
      };
    };
    a.prototype.$2 = function (a, b, c) {
      var d = parseFloat(a),
        e = a.substr(d.toString().length);
      return e === 'px' ? a : Math.round((c - b) * (d / 100)) + 'px';
    };
    a.prototype.$3 = function (a, c, d) {
      var e = parseFloat(a);
      a = a.substr(e.toString().length);
      if (c < d) return '0';
      a = a === 'px' ? e : Math.round(c * (e / 100));
      e = a - d / 2;
      e = b('clamp')(e, 0, c - d);
      return -e + 'px';
    };
    function a() {
      g.apply(this, arguments);
    }
    a.defaultProps = { backgroundSize: 'contain' };
    e.exports = a;
  },
  null
);
__d(
  'BackgroundImage.react',
  [
    'cx',
    'invariant',
    'CachedDOMImageSizePool',
    'Image.react',
    'ImagePositioner.react',
    'React',
    'XUISpinner.react',
    'joinClasses',
  ],
  function (a, b, c, d, e, f, g, h) {
    __p && __p();
    a = b('React').PropTypes;
    c = '(-?(\\d+\\.)?\\d+(px|\\%))';
    var i = new RegExp('^' + c + '?(\\s' + c + ')?$', 'g'),
      j = new (b('CachedDOMImageSizePool'))(50, 10 * 60 * 1e3);
    d = b('React').createClass({
      displayName: 'BackgroundImage',
      propTypes: {
        src: a.string,
        width: a.number.isRequired,
        height: a.number.isRequired,
        backgroundSize: a.oneOf([
          'contain',
          'cover',
          'containinside',
          'coverinside',
          'fitWidth',
        ]),
        loadingIndicatorStyle: a.oneOf(['none', 'large', 'small']),
        backgroundPosition: function (a, b, c) {
          c = a[b];
          c &&
            (typeof c === 'string' || h(0, undefined, c),
            c.match(i) || h(0, undefined, c));
          a.backgroundFocus == null ||
            a.backgroundPosition == null ||
            h(0, undefined);
        },
        backgroundFocus: function (a, b, c) {
          c = a[b];
          c &&
            (typeof c === 'string' || h(0, undefined, c),
            c.match(i) || h(0, undefined, c));
          a.backgroundFocus == null ||
            a.backgroundPosition == null ||
            h(0, undefined);
        },
        onImageLoad: a.func,
        optimizeResizeSpeed: a.bool,
        onContextMenu: a.func,
      },
      getInitialState: function () {
        return {
          imageWidth: null,
          imageHeight: null,
          imageSrc: this.props.src,
          loading: !0,
        };
      },
      getDefaultProps: function () {
        return { optimizeResizeSpeed: !1, loadingIndicatorStyle: 'none' };
      },
      componentDidMount: function () {
        this._resolveImageSize();
      },
      componentDidUpdate: function (a) {
        this.props.src !== this.state.imageSrc &&
          this.setState(
            {
              imageWidth: 0,
              imageHeight: 0,
              imageSrc: this.props.src,
              loading: !0,
            },
            this._resolveImageSize
          );
      },
      _resolveImageSize: function () {
        var a = this.state.imageSrc;
        a && j.get(a, this._onImageSizeResolved, this);
      },
      render: function () {
        var a = {
            width: this.props.width + 'px',
            height: this.props.height + 'px',
          },
          c = b('joinClasses')(this.props.className, '_5f0d');
        return b('React').createElement(
          'div',
          babelHelpers['extends']({}, this.props, {
            className: b('joinClasses')(this.props.className, c),
            style: babelHelpers['extends']({}, this.props.style || {}, a),
            onContextMenu: this.props.onContextMenu,
          }),
          this._renderImage(),
          this._renderContent(),
          this._renderLoadingIndicator()
        );
      },
      _renderLoadingIndicator: function () {
        return !this.state.loading ||
          this.props.loadingIndicatorStyle === 'none'
          ? null
          : b('React').createElement(
              'div',
              { className: '_1qe- _5lar' },
              b('React').createElement(
                'div',
                { className: '_1qe_' },
                b('React').createElement(
                  'div',
                  { className: '_1qf0' },
                  b('React').createElement(b('XUISpinner.react'), {
                    size: this.props.loadingIndicatorStyle,
                  })
                )
              )
            );
      },
      _renderContent: function () {
        if (this.props.children)
          return b('React').createElement(
            'div',
            { className: '_1qe-' },
            b('React').createElement(
              'div',
              { className: '_1qe_' },
              b('React').createElement(
                'div',
                { className: '_1qf0' },
                this.props.children
              )
            )
          );
      },
      _renderImage: function () {
        return !this.state.imageWidth || !this.state.imageHeight
          ? null
          : b('React').createElement(
              b('ImagePositioner.react'),
              {
                imageWidth: this.state.imageWidth,
                imageHeight: this.state.imageHeight,
                width: this.props.width,
                height: this.props.height,
                backgroundPosition: this.props.backgroundPosition,
                backgroundSize: this.props.backgroundSize,
                backgroundFocus: this.props.backgroundFocus,
              },
              function (a) {
                var c = a.width,
                  d = a.height,
                  e = a.left;
                a = a.top;
                return b('React').createElement(b('Image.react'), {
                  alt: this.props.alt,
                  className:
                    '_5i4g' + (this.props.optimizeResizeSpeed ? ' _5sjv' : ''),
                  style: { width: c, height: d, left: e, top: a },
                  src: this.state.imageSrc,
                });
              }.bind(this)
            );
      },
      _onImageSizeResolved: function (a, b, c) {
        if (!this.isMounted() || this.state.imageSrc !== c) return;
        c = this.props.onImageLoad
          ? this.props.onImageLoad.bind(null, a, b)
          : null;
        this.setState({ imageWidth: a, imageHeight: b, loading: !1 }, c);
      },
    });
    e.exports = d;
  },
  null
);
__d(
  'AbstractPopoverButton.react',
  ['cx', 'React', 'URI', 'joinClasses'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h;
    c = b('React').PropTypes;
    h = babelHelpers.inherits(a, b('React').Component);
    h && h.prototype;
    a.prototype.render = function () {
      __p && __p();
      var a = this.props.config,
        c = {},
        d = a.defaultMaxWidth;
      this.props.maxwidth !== undefined && (d = this.props.maxwidth);
      d &&
        (c.style = babelHelpers['extends']({}, a.button.props.style, {
          maxWidth: d + 'px',
        }));
      this.props.image &&
        (c.image = b('React').createElement(
          'span',
          { className: '_-xe _3-8_' },
          this.props.image
        ));
      this.props.label &&
        ((c.labelIsHidden = this.props.labelIsHidden),
        (c.label = b('React').createElement(
          'span',
          { className: '_55pe' },
          this.props.label
        )));
      this.props.haschevron &&
        (c.imageRight = b('React').createElement(
          'span',
          { className: '_4o_3' },
          a.chevron
        ));
      c.className = b('joinClasses')(a.button.props.className, '_2agf _4o_4');
      c.href = new (b('URI'))('#');
      c['aria-haspopup'] = !0;
      c.role = 'button';
      return b('React').cloneElement(a.button, c);
    };
    function a() {
      h.apply(this, arguments);
    }
    a.propTypes = {
      config: c.object.isRequired,
      haschevron: c.bool,
      label: c.node,
      labelIsHidden: c.bool,
      maxwidth: c.number,
    };
    a.defaultProps = { haschevron: !0 };
    e.exports = a;
  },
  null
);
__d(
  'MenuSeparator',
  ['cx', 'CSS', 'DOM', 'MenuItemInterface'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h;
    c = babelHelpers.inherits(a, b('MenuItemInterface'));
    h = c && c.prototype;
    function a(a) {
      h.constructor.call(this, a),
        (this._data = a),
        (this.showFn = this._data.should_show_fn);
    }
    a.prototype.updateShownState = function (a) {
      this.showFn &&
        ((this._isHidden = !this.showFn(a)),
        this._root && b('CSS').conditionShow(this._root, !this._isHidden));
    };
    a.prototype.isShown = function (a) {
      a = this.showFn ? this.showFn(a) : !0;
      return a;
    };
    a.prototype.render = function () {
      var a = '_54ak';
      this._data.className && (a += ' ' + this._data.className);
      var c = this._data.label || '';
      a = b('DOM').create('li', { className: a, role: 'separator' }, c);
      this._isHidden && b('CSS').hide(a);
      return a;
    };
    e.exports = a;
  },
  null
);
__d(
  'MenuSeparator.react',
  ['MenuSeparator'],
  function (a, b, c, d, e, f) {
    function a(a) {
      (a.isReactLegacyFactory = {}), (a.type = a);
    }
    c = b('MenuSeparator');
    a(c);
    e.exports = c;
  },
  null
);
__d(
  'MenuStaticItem',
  ['cx', 'DOM', 'MenuItemBase', 'React', 'ReactDOM', 'emptyFunction'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h;
    c = babelHelpers.inherits(a, b('MenuItemBase'));
    h = c && c.prototype;
    function a(a) {
      h.constructor.call(this), (this._data = a);
    }
    a.prototype._renderItemContent = function () {
      var a = b('DOM').create('span', { className: '_54nc _54ah' });
      this._data.children
        ? b('ReactDOM').render(
            b('React').createElement(
              'span',
              { className: '_54nh' },
              this._data.children
            ),
            a
          )
        : b('DOM').setContent(
            a,
            b('DOM').create('span', { className: '_54nh' }, this._data.markup)
          );
      return a;
    };
    Object.assign(a.prototype, { handleClick: b('emptyFunction') });
    e.exports = a;
  },
  null
);
__d(
  'MenuStaticItem.react',
  ['MenuStaticItem'],
  function (a, b, c, d, e, f) {
    function a(a) {
      (a.isReactLegacyFactory = {}), (a.type = a);
    }
    c = b('MenuStaticItem');
    a(c);
    e.exports = c;
  },
  null
);
__d(
  'AbstractTextField.react',
  ['cx', 'Keys', 'React', 'joinClasses'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h;
    c = b('React').Component;
    b('React').Element;
    d = b('React').PropTypes;
    f = babelHelpers.inherits(a, c);
    h = f && f.prototype;
    function a(a) {
      h.constructor.call(this, a),
        (this.onInputKeyDown = function (a) {
          var c = this.props,
            d = a.keyCode,
            e = a.shiftKey;
          d === b('Keys').BACKSPACE && !e && c.onBackspace
            ? c.onBackspace(a)
            : d === b('Keys').TAB && !e && c.onTab
            ? c.onTab(a)
            : d === b('Keys').TAB && e && c.onBackTab
            ? c.onBackTab(a)
            : d === b('Keys').UP
            ? e
              ? c.onShiftUpArrow && c.onShiftUpArrow(a)
              : c.onUpArrow && c.onUpArrow(a)
            : d === b('Keys').DOWN && c.onDownArrow
            ? e
              ? c.onShiftDownArrow && c.onShiftDownArrow(a)
              : c.onDownArrow && c.onDownArrow(a)
            : d === b('Keys').LEFT && c.onLeftArrow
            ? c.onLeftArrow(a)
            : d === b('Keys').RIGHT && c.onRightArrow
            ? c.onRightArrow(a)
            : d === b('Keys').RETURN
            ? (c.onEnter && c.onEnter(a),
              e
                ? c.onShiftEnter && c.onShiftEnter(a)
                : c.onNoShiftEnter && c.onNoShiftEnter(a))
            : d === b('Keys').ESC && c.onEscape
            ? c.onEscape(a)
            : d == b('Keys').COMMA && c.onComma
            ? c.onComma(a)
            : d == b('Keys').SPACE && c.onSpace && c.onSpace(a);
          c.onKeyDown && c.onKeyDown(a);
        }.bind(this)),
        (this.onInputChange = function (a) {
          this.props.onChange && this.props.onChange(a),
            (this.props.value === null || this.props.value === undefined) &&
              this.setState({ value: a.target.value });
        }.bind(this)),
        (this.onInputBlur = function (a) {
          this.props.onBlur && this.props.onBlur(a),
            a.isDefaultPrevented() || this.setState({ focused: !1 });
        }.bind(this)),
        (this.onInputFocus = function (a) {
          this.props.onFocus && this.props.onFocus(a),
            a.isDefaultPrevented() || this.setState({ focused: !0 });
        }.bind(this)),
        (this.state = { focused: !1, value: this.props.defaultValue || '' });
    }
    a.prototype.getValue = function () {
      return this.props.value != null
        ? String(this.props.value)
        : this.state.value;
    };
    a.prototype.getHint = function () {
      return this.props.hint != null ? String(this.props.hint) : '';
    };
    a.prototype.cloneElement = function (a) {
      var c = this.getHint() ? this.getHint() : this.getValue();
      return b('React').cloneElement(a, {
        'aria-activedescendant': this.props['aria-activedescendant'],
        'aria-autocomplete': this.props['aria-autocomplete'],
        'aria-controls': this.props['aria-controls'],
        'aria-describedby': this.props['aria-describedby'],
        'aria-errormessage': this.props['aria-errormessage'],
        'aria-invalid': this.props['aria-invalid'],
        'aria-label': this.props['aria-label'],
        'aria-labelledby': this.props['aria-labelledby'],
        'aria-multiline': this.props['aria-multiline'],
        'aria-expanded': this.props['aria-expanded'],
        'aria-valuenow': this.props['aria-valuenow'],
        'aria-valuetext': this.props['aria-valuetext'],
        'data-testid': this.props['data-testid'],
        required: this.props.required,
        role: this.props.role,
        placeholder: this.props.placeholder,
        autoCapitalize: this.props.autoCapitalize,
        autoComplete: this.props.autoComplete,
        autoCorrect: this.props.autoCorrect,
        autoFocus: this.props.autoFocus,
        onKeyDown: this.onInputKeyDown,
        onKeyUp: this.props.onKeyUp,
        onBlur: this.onInputBlur,
        onFocus: this.onInputFocus,
        onChange: this.onInputChange,
        onInput: this.props.onInput,
        onPaste: this.props.onPaste,
        onWheel: this.props.onWheel,
        className: this.props.useLabel
          ? a.props.className
          : b('joinClasses')(a.props.className, this.props.className),
        dir: this.props.dir,
        disabled: this.props.disabled,
        defaultValue: this.props.defaultValue,
        name: this.props.name,
        value: c,
        id: this.props.id,
        maxLength: this.props.maxLength,
        min: this.props.min,
        max: this.props.max,
        pattern: this.props.pattern,
        style: this.props.style,
        title: this.props.title,
        type: this.props.type || a.props.type,
      });
    };
    a.prototype.render = function () {
      var a = b('React').Children.only(this.props.children);
      if (!this.props.useLabel) return this.cloneElement(a);
      var c = this.props.className;
      this.props.classNames &&
        ((c = b('joinClasses')(c, this.props.classNames.root)),
        this.getValue() ||
          (c = b('joinClasses')(c, this.props.classNames.empty)));
      return b('React').createElement(
        'label',
        { className: c, style: this.props.styles.label },
        this.props.leftChild,
        this.cloneElement(a),
        this.props.rightChild
      );
    };
    a.defaultProps = {
      useLabel: !0,
      classNames: { root: '_58ak', empty: '_3ct8' },
      styles: { label: null },
    };
    a.propTypes = {
      useLabel: d.bool,
      leftChild: d.element,
      rightChild: d.element,
      classNames: d.shape({
        root: d.string.isRequired,
        empty: d.string.isRequired,
      }),
      styles: d.shape({ label: d.object }),
      'aria-activedescendant': d.string,
      'aria-autocomplete': d.string,
      'aria-controls': d.string,
      'aria-describedby': d.string,
      'aria-errormessage': d.string,
      'aria-invalid': d.oneOf(['grammar', 'false', 'spelling', 'true']),
      'aria-label': d.string,
      'aria-labelledby': d.string,
      'aria-multiline': d.bool,
      'aria-expanded': d.bool,
      'aria-valuenow': d.number,
      'aria-valuetext': d.string,
      'data-testid': d.string,
      autoComplete: d.string,
      autoFocus: d.bool,
      className: d.string,
      defaultValue: d.string,
      dir: d.string,
      disabled: d.bool,
      id: d.string,
      max: d.oneOfType([d.number, d.string]),
      maxLength: d.number,
      min: d.string,
      name: d.string,
      onBackspace: d.func,
      onBackTab: d.func,
      onBlur: d.func,
      onChange: d.func,
      onClick: d.func,
      onComma: d.func,
      onDownArrow: d.func,
      onEnter: d.func,
      onEscape: d.func,
      onFocus: d.func,
      onKeyDown: d.func,
      onKeyPress: d.func,
      onKeyUp: d.func,
      onLeftArrow: d.func,
      onNoShiftEnter: d.func,
      onPaste: d.func,
      onRightArrow: d.func,
      onShiftDownArrow: d.func,
      onShiftEnter: d.func,
      onShiftUpArrow: d.func,
      onSpace: d.func,
      onTab: d.func,
      onUpArrow: d.func,
      onWheel: d.func,
      pattern: d.string,
      placeholder: d.node,
      required: d.bool,
      role: d.string,
      style: d.object,
      tabIndex: d.number,
      title: d.string,
      type: d.string,
      value: d.string,
      autoCapitalize: d.string,
      autoCorrect: d.string,
    };
    e.exports = a;
  },
  null
);
__d(
  'ReactInstanceMap',
  ['ReactDOM-fb'],
  function (a, b, c, d, e, f) {
    a = b('ReactDOM-fb').__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    e.exports = a.ReactInstanceMap;
  },
  null
);
__d(
  'renderSubtreeIntoContainer',
  ['ReactDOM-fb'],
  function (a, b, c, d, e, f) {
    e.exports = b('ReactDOM-fb').unstable_renderSubtreeIntoContainer;
  },
  null
);
__d(
  'ReactLayeredComponentMixin_DEPRECATED',
  [
    'ExecutionEnvironment',
    'React',
    'ReactCurrentOwner',
    'ReactDOM',
    'ReactFragment',
    'ReactInstanceMap',
    'renderSubtreeIntoContainer',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    a = {
      UNSAFE_componentWillMount: function () {
        b('ExecutionEnvironment').canUseDOM &&
          (this._layersContainer = document.createElement('div'));
      },
      componentDidMount: function () {
        this._renderLayersIntoContainer();
      },
      componentDidUpdate: function () {
        this._renderLayersIntoContainer();
      },
      componentWillUnmount: function () {
        b('ReactDOM').unmountComponentAtNode(this._layersContainer);
      },
      _renderLayersIntoContainer: function () {
        b('ReactCurrentOwner').current = b('ReactInstanceMap').get(this);
        var a;
        try {
          a = this.renderLayers();
        } finally {
          b('ReactCurrentOwner').current = null;
        }
        a &&
          !Array.isArray(a) &&
          !b('React').isValidElement(a) &&
          (a = b('ReactFragment').create(a));
        b('renderSubtreeIntoContainer')(
          this,
          b('React').createElement('div', null, a),
          this._layersContainer
        );
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'SearchSourceQueryStatus',
  [],
  function (a, b, c, d, e, f) {
    a = { ACTIVE: 'ACTIVE', COMPLETE: 'COMPLETE' };
    e.exports = a;
  },
  null
);
__d(
  'AbstractTextInput.react',
  ['cx', 'AbstractTextField.react', 'React'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h;
    c = b('React').Component;
    h = babelHelpers.inherits(a, c);
    h && h.prototype;
    a.prototype.render = function () {
      return b('React').createElement(
        b('AbstractTextField.react'),
        this.props,
        b('React').createElement('input', {
          className: '_58al',
          onClick: this.props.onClick,
          onMouseDown: this.props.onMouseDown,
          onKeyUp: this.props.onKeyUp,
          onKeyDown: this.props.onKeyDown,
          onPaste: this.props.onPaste,
          size: this.props.size,
          tabIndex: this.props.tabIndex,
          type: this.props.type,
          ref: function (a) {
            return (this.$1 = a);
          }.bind(this),
        })
      );
    };
    a.prototype.focusInput = function () {
      this.$1 && this.$1.focus();
    };
    a.prototype.blurInput = function () {
      this.$1 && this.$1.blur();
    };
    a.prototype.selectInput = function () {
      this.$1 && this.$1.select();
    };
    a.prototype.getTextFieldDOM = function () {
      return this.$1;
    };
    a.prototype.getValue = function () {
      return this.$1 ? this.$1.value : '';
    };
    function a() {
      h.apply(this, arguments);
    }
    a.propTypes = b('AbstractTextField.react').propTypes;
    a.defaultProps = { type: 'text' };
    e.exports = a;
  },
  null
);
__d(
  'SearchableTextInput.react',
  [
    'AbstractTextInput.react',
    'EventListener',
    'React',
    'areEqual',
    'getActiveElement',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g;
    c = b('React').PropTypes;
    d = babelHelpers.inherits(a, b('React').Component);
    g = d && d.prototype;
    function a() {
      __p && __p();
      var a, c;
      for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
        e[f] = arguments[f];
      return (
        (c = (a = g.constructor).call.apply(a, [this].concat(e))),
        (this.$2 = function () {
          var a = this.props.searchSource.bootstrap(
            function () {
              this.props.searchOnFocus && this.search(this.props.queryString);
            }.bind(this)
          );
          a && a.done && a.done();
          this.props.onFocus && this.props.onFocus();
        }.bind(this)),
        (this.$3 = function (a, b, c) {
          this.props.queryString === b && this.props.onEntriesFound(a, b, c);
        }.bind(this)),
        (this.$4 = function (event) {
          this.props.onChange && this.props.onChange(event);
          var a = event.target.value;
          setTimeout(
            function () {
              return this.search(a);
            }.bind(this)
          );
        }.bind(this)),
        (this.focusInput = function () {
          var a = this.getTextFieldDOM();
          b('getActiveElement')() === a
            ? this.$2()
            : a.offsetHeight && a.focus();
        }.bind(this)),
        (this.blurInput = function () {
          var a = this.getTextFieldDOM();
          a.offsetHeight && a.blur();
        }.bind(this)),
        (this.getTextFieldDOM = function () {
          return this.refs.input.getTextFieldDOM();
        }.bind(this)),
        c
      );
    }
    a.prototype.componentDidMount = function () {
      this.props.onPaste &&
        (this.$1 = b('EventListener').listen(
          this.refs.input.getTextFieldDOM(),
          'paste',
          this.props.onPaste
        ));
    };
    a.prototype.UNSAFE_componentWillReceiveProps = function (a) {
      a.searchSourceOptions &&
        !b('areEqual')(a.searchSourceOptions, this.props.searchSourceOptions) &&
        this.search(this.props.queryString, a.searchSourceOptions);
    };
    a.prototype.componentDidUpdate = function (a) {
      this.props.searchOnUpdate &&
        a.queryString !== this.props.queryString &&
        this.search(this.props.queryString);
    };
    a.prototype.componentWillUnmount = function () {
      this.$1 && (this.$1.remove(), (this.$1 = null));
    };
    a.prototype.search = function (a, b) {
      this.props.onSearch && this.props.onSearch(),
        this.props.searchSource &&
          this.props.searchSource.search(
            a,
            this.$3,
            b || this.props.searchSourceOptions
          );
    };
    a.prototype.render = function () {
      var a = this.props.queryString || '';
      return this.props.useDefaultValue
        ? b('React').createElement(
            b('AbstractTextInput.react'),
            babelHelpers['extends']({}, this.props, {
              onChange: this.$4,
              onFocus: this.$2,
              ref: 'input',
              defaultValue: a,
            })
          )
        : b('React').createElement(
            b('AbstractTextInput.react'),
            babelHelpers['extends']({}, this.props, {
              onChange: this.$4,
              onFocus: this.$2,
              ref: 'input',
              role: 'combobox',
              value: a,
            })
          );
    };
    a.propTypes = babelHelpers['extends'](
      {},
      b('AbstractTextInput.react').propTypes,
      {
        queryString: c.string,
        searchSource: c.object,
        searchSourceOptions: c.object,
        onEntriesFound: c.func.isRequired,
        onSearch: c.func,
        searchOnFocus: c.bool,
        searchOnUpdate: c.bool,
        required: c.bool,
        onPaste: c.func,
        onFocus: c.func,
        onChange: c.func,
        hint: c.string,
        useDefaultValue: c.bool,
        className: c.string,
      }
    );
    e.exports = a;
  },
  null
);
__d(
  'TypeaheadNavigation',
  [],
  function (a, b, c, d, e, f) {
    a = {
      moveUp: function (a, b, c) {
        b = b ? a.indexOf(b) : -1;
        b = b == -1 ? a.length - 1 : b - 1;
        c(b == -1 ? null : a[b]);
      },
      moveDown: function (a, b, c) {
        b = b ? a.indexOf(b) + 1 : 0;
        c(b == a.length ? null : a[b]);
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'TypeaheadView.react',
  ['cx', 'React'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h;
    c = b('React').PropTypes;
    h = babelHelpers.inherits(a, b('React').Component);
    h && h.prototype;
    a.prototype.render = function () {
      var a = this.props,
        c = a.extraRendererProps,
        d = a.isVisible,
        e = a.Renderer;
      a = babelHelpers.objectWithoutProperties(a, [
        'extraRendererProps',
        'isVisible',
        'Renderer',
      ]);
      return b('React').createElement(
        'div',
        { className: d ? '' : 'typeaheadViewHidden' },
        e
          ? b('React').createElement(e, babelHelpers['extends']({}, a, c))
          : null
      );
    };
    function a() {
      h.apply(this, arguments);
    }
    a.propTypes = {
      entries: c.array.isRequired,
      extraRendererProps: c.object,
      highlightedEntry: c.object,
      isVisible: c.bool,
      queryString: c.string,
      Renderer: c.func,
      selectedEntry: c.object,
    };
    e.exports = a;
  },
  null
);
__d(
  'AbstractTypeahead.react',
  [
    'cx',
    'AbstractTextField.react',
    'ARIAComboboxNotify',
    'ContextualLayer.react',
    'Event',
    'InputSelection',
    'React',
    'ReactLayeredComponentMixin_DEPRECATED',
    'SearchableTextInput.react',
    'SearchSourceQueryStatus',
    'TypeaheadNavigation',
    'TypeaheadView.react',
    'clearImmediate',
    'getOrCreateDOMID',
    'joinClasses',
    'setImmediate',
    'uniqueID',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    a = b('React').PropTypes;
    var h = [],
      i = 10;
    c = b('React').createClass({
      displayName: 'AbstractTypeahead',
      mixins: [b('ReactLayeredComponentMixin_DEPRECATED')],
      propTypes: babelHelpers['extends'](
        {},
        b('AbstractTextField.react').propTypes,
        {
          ariaLabel: a.string,
          additionalElements: a.node,
          inputClassName: a.string,
          inputID: a.string,
          inputRightChild: a.node,
          inputStyle: a.object,
          inputStyles: a.object,
          inputUseLabel: a.bool,
          autoCapitalize: a.string,
          autoComplete: a.string,
          autoCorrect: a.string,
          queryString: a.string,
          searchSource: a.object,
          searchSourceOptions: a.object,
          textInputDataTestID: a.string,
          'data-testid': a.string,
          excludedEntries: a.object,
          entryFilter: a.func,
          additionalEntries: a.array,
          presenter: a.object.isRequired,
          onSelectAttempt: a.func,
          onEntriesFound: a.func,
          onSearch: a.func,
          onNoEntriesFound: a.func,
          onEnterWithoutSelection: a.func,
          autoHighlight: a.bool,
          showEntriesOnFocus: a.bool,
          selectOnBlur: a.bool,
          blurOnWindowBlur: a.bool,
          selectOnTab: a.bool,
          selectOnSpace: a.bool,
          selectOnComma: a.bool,
          focusedOnInit: a.bool,
          hideViewWithEntries: a.bool,
          disabled: a.bool,
          entriesWidthMatchContext: a.bool,
          selectedEntry: a.object,
          onTypeaheadVisibilityChanged: a.func,
          onPaste: a.func,
          navigation: a.object,
          isRightToLeft: a.bool,
          showSelection: a.bool,
          shouldSubmitSelectedEntry: a.func,
        }
      ),
      getDefaultProps: function () {
        return {
          autoComplete: 'off',
          autoCorrect: 'off',
          blurOnWindowBlur: !0,
          selectOnBlur: !1,
          selectOnTab: !0,
          selectOnSpace: !1,
          selectOnComma: !1,
          hideViewWithEntries: !0,
          entriesWidthMatchContext: !0,
          navigation: b('TypeaheadNavigation'),
          isRightToLeft: !1,
        };
      },
      getInitialState: function () {
        return {
          highlightedEntry: null,
          isArrowNavigation: !1,
          isAutoHighlight: !!this.props.autoHighlight,
          ariaActiveDescendantID: null,
          ariaControlleeID: b('uniqueID')(),
          activeEntries: null,
          focused: !!this.props.focusedOnInit,
          viewIsVisible: !!this.props.focusedOnInit,
        };
      },
      _onRenderHighlight: function (a) {
        a = b('getOrCreateDOMID')(a);
        var c = b('ARIAComboboxNotify').maybeNotifyHighlightedEntry(
          this.state.highlightedEntry
        );
        this.setState({ ariaActiveDescendantID: c ? null : a });
      },
      _determineViewVisibility: function (a, b) {
        if (!a) return !1;
        a =
          a.length > 0 &&
          (this.props.showEntriesOnFocus ||
            (this.props.queryString &&
              this.props.queryString.trim().length > 0));
        return !!(b && (this.props.presenter.alwaysVisibleOnFocus || a));
      },
      _onEntriesFound: function (a, c, d) {
        __p && __p();
        if (!this.isMounted()) return;
        if (this.props.excludedEntries) {
          var e = this.props.excludedEntries;
          a = a.filter(function (a) {
            return (
              !Object.prototype.hasOwnProperty.call(e, a.getUniqueID()) ||
              e[a.getUniqueID()] === !1
            );
          });
        }
        this.props.entryFilter && (a = a.filter(this.props.entryFilter));
        c = this.props.presenter;
        a =
          typeof c.sortEntries === 'function'
            ? c.sortEntries(a, this.state.activeEntries, this.props.queryString)
            : a;
        var f = this.props.additionalEntries;
        f = f ? f.length : 0;
        f = a.slice(0, (c.maxEntries || i) - f);
        this.props.additionalEntries &&
          ((f = f.concat(this.props.additionalEntries)),
          (a =
            typeof c.sortEntries === 'function'
              ? c.sortEntries(
                  f,
                  this.state.activeEntries,
                  this.props.queryString
                )
              : f),
          (f = a.slice(0, c.maxEntries || i)));
        a = this._determineViewVisibility(f, this.state.focused);
        b('ARIAComboboxNotify').notifyFoundEntries(f);
        if (!f.length) {
          this.setState({
            ariaActiveDescendantID: null,
            activeEntries: f,
            highlightedEntry: null,
            isAutoHighlight: !!this.props.autoHighlight,
          });
          this._setViewIsVisible(a);
          this.props.onNoEntriesFound &&
            d === b('SearchSourceQueryStatus').COMPLETE &&
            this.props.onNoEntriesFound();
          return;
        }
        this.props.onEntriesFound && this.props.onEntriesFound(f, d);
        c = this.state.highlightedEntry;
        d = c && f.indexOf(c) !== -1;
        if (!this.props.autoHighlight) {
          this.setState({ activeEntries: f, highlightedEntry: d ? c : null });
          a && this._setViewIsVisible(!0);
          return;
        }
        var g = this.state.isAutoHighlight;
        g ? (c = f[0]) : ((c = d ? c : f[0]), (g = !d));
        this.setState({
          activeEntries: f,
          highlightedEntry: c,
          isAutoHighlight: g,
        });
        a && this._setViewIsVisible(!0);
      },
      _onInputFocus: function () {
        var a = this._determineViewVisibility(this.state.activeEntries, !0);
        a && this._setViewIsVisible(!0);
        this.setState({ focused: !0 });
        this.props.onFocus && this.props.onFocus();
      },
      _onInputBlurWindowSafe: function () {
        var a,
          c = b('Event').listen(window, 'blur', function () {
            c.remove(), b('clearImmediate')(a);
          });
        a = b('setImmediate')(
          function () {
            c.remove(), this._onInputBlur();
          }.bind(this)
        );
      },
      _onInputBlur: function () {
        if (
          this.props.shouldSubmitSelectedEntry &&
          !this.props.shouldSubmitSelectedEntry(this.state.highlightedEntry)
        )
          return;
        this.setState({ focused: !1 });
        this.props.hideViewWithEntries && this._close();
        this.props.selectOnBlur &&
          this.state.highlightedEntry &&
          this.props.onSelectAttempt &&
          this.props.onSelectAttempt(this.state.highlightedEntry);
        this.props.onBlur && this.props.onBlur();
      },
      _onInputClick: function (a) {
        var c = this.getTextFieldDOM(),
          d = b('InputSelection').get(c);
        d && d.start == d.end && c.select();
        this.props.onClick && this.props.onClick(a, this._onEntriesFound);
      },
      _onEscape: function () {
        this._close(),
          this.blurInput(),
          this.setState({ focused: !1 }),
          this.props.onEscape && this.props.onEscape();
      },
      _onEnter: function (event) {
        __p && __p();
        if (
          this.props.onEnterWithoutSelection &&
          (!this.state.viewIsVisible || !this.state.highlightedEntry)
        ) {
          this.props.onEnterWithoutSelection(event);
          return;
        }
        if (!this.state.viewIsVisible) return;
        if (!this.state.highlightedEntry) {
          event.preventDefault();
          return;
        }
        if (
          this.props.shouldSubmitSelectedEntry &&
          !this.props.shouldSubmitSelectedEntry(this.state.highlightedEntry)
        )
          return;
        this.props.hideViewWithEntries && this._close();
        this.props.onSelectAttempt &&
          this.props.onSelectAttempt(this.state.highlightedEntry, event);
        event.preventDefault();
      },
      _onTab: function (event) {
        this._onKeySelectAttempt(this.props.selectOnTab, event);
      },
      _onSpace: function (event) {
        this._onKeySelectAttempt(this.props.selectOnSpace, event);
      },
      _onComma: function (event) {
        this._onKeySelectAttempt(this.props.selectOnComma, event);
      },
      _onKeySelectAttempt: function (a, event) {
        if (
          a &&
          this.state.viewIsVisible &&
          this.props.onSelectAttempt &&
          this.state.highlightedEntry
        ) {
          if (
            this.props.shouldSubmitSelectedEntry &&
            !this.props.shouldSubmitSelectedEntry(this.state.highlightedEntry)
          )
            return;
          this.props.hideViewWithEntries &&
            (this._close(), event.preventDefault());
          this.props.onSelectAttempt(this.state.highlightedEntry, event);
        }
      },
      _onDownArrow: function (event) {
        var a = this.props.navigation;
        a &&
          a.moveDown &&
          (event.preventDefault(),
          a.moveDown(
            this.state.activeEntries || h,
            this.state.highlightedEntry,
            this._setHighlight
          ));
      },
      _onLeftArrow: function (event) {
        var a = this.props.navigation;
        a &&
          a.moveLeft &&
          (event.preventDefault(),
          a.moveLeft(
            this.state.activeEntries || h,
            this.state.highlightedEntry,
            this._setHighlight
          ));
      },
      _onRightArrow: function (event) {
        var a = this.props.navigation;
        a &&
          a.moveRight &&
          (event.preventDefault(),
          a.moveRight(
            this.state.activeEntries || h,
            this.state.highlightedEntry,
            this._setHighlight
          ));
      },
      _onUpArrow: function (event) {
        var a = this.props.navigation;
        a &&
          a.moveUp &&
          (event.preventDefault(),
          a.moveUp(
            this.state.activeEntries || h,
            this.state.highlightedEntry,
            this._setHighlight
          ));
      },
      _setHighlight: function (a) {
        this.setState({
          highlightedEntry: a,
          isArrowNavigation: !0,
          isAutoHighlight: !a,
        });
      },
      _onInputChange: function (event) {
        this.props.onChange && this.props.onChange(event),
          this._setViewIsVisible(
            this.state.focused &&
              (this.props.showEntriesOnFocus ||
                event.target.value.trim().length > 0) &&
              (this.props.presenter.alwaysVisibleOnFocus ||
                (this.state.activeEntries != null &&
                  this.state.activeEntries.length > 0))
          );
      },
      _onViewHighlight: function (a) {
        this.setState({
          highlightedEntry: a,
          isArrowNavigation: !1,
          isAutoHighlight: !1,
        });
      },
      _getView: function () {
        return b('React').createElement(b('TypeaheadView.react'), {
          Renderer: this.props.presenter.ViewRenderer,
          extraRendererProps: babelHelpers['extends'](
            {},
            this.props.presenter.extraRendererProps,
            {
              isArrowNavigation: this.state.isArrowNavigation,
              isRightToLeft: this.props.isRightToLeft,
            }
          ),
          highlightedEntry: this.state.highlightedEntry,
          selectedEntry: this.props.selectedEntry,
          searchSource: this.props.searchSource,
          onEntriesFound: this._onEntriesFound,
          isVisible: this.state.viewIsVisible,
          controlleeID: this.state.ariaControlleeID,
          onHighlight: this._onViewHighlight,
          onRenderHighlight: this._onRenderHighlight,
          onSelect: this.props.onSelectAttempt,
          entries: this.state.activeEntries || h,
          queryString: this.props.queryString,
        });
      },
      _setViewIsVisible: function (a) {
        a !== this.state.viewIsVisible &&
          (this.props.onTypeaheadVisibilityChanged &&
            this.props.onTypeaheadVisibilityChanged(
              a,
              this.state.activeEntries || h
            ),
          this.setState({ viewIsVisible: a }));
      },
      UNSAFE_componentWillReceiveProps: function (a) {
        !a.queryString &&
          !this.props.showEntriesOnFocus &&
          this.clearActiveEntries();
      },
      componentDidUpdate: function () {
        var a = this._determineViewVisibility(
          this.state.activeEntries,
          this.state.focused
        );
        a && this._setViewIsVisible(!0);
      },
      renderLayers: function () {
        if (!this.props.presenter.useLayer) return {};
        var a = null,
          c = null;
        this.props.context
          ? (a = this.props.context)
          : this.props.presenter.useRootAsContext && this.refs.root
          ? (c = function () {
              return this.refs.root;
            }.bind(this))
          : (c = function () {
              return this.refs.input;
            }.bind(this));
        var d = this.props.presenter,
          e = d.layerComponent || b('ContextualLayer.react');
        return {
          typeaheadView: b('React').createElement(
            e,
            {
              alignment: d.alignment,
              behaviors: d.layerBehaviors,
              containerWidthMatchContext: this.props.entriesWidthMatchContext,
              contextRef: c,
              context: a,
              'data-testid': this.props['data-testid'],
              position: d.layerPosition || 'below',
              shown: this.state.viewIsVisible,
              shouldSetARIAProperties: !1,
              width: d.width,
            },
            this._getView()
          ),
        };
      },
      render: function () {
        __p && __p();
        var a =
            this.props.showSelection && this.state.highlightedEntry
              ? this.state.highlightedEntry.getTitle()
              : null,
          c = this.state.activeEntries;
        c = !!(c && c.length);
        c = b('React').createElement(b('SearchableTextInput.react'), {
          'aria-activedescendant': this.state.ariaActiveDescendantID,
          'aria-expanded': c,
          'aria-autocomplete': 'list',
          'aria-label': this.props.ariaLabel,
          'aria-controls': this.state.ariaControlleeID,
          'data-testid': this.props.textInputDataTestID,
          required: this.props.required,
          ref: 'input',
          autoCapitalize: this.props.autoCapitalize,
          autoComplete: this.props.autoComplete,
          autoCorrect: this.props.autoCorrect,
          className: this.props.inputClassName,
          id: this.props.inputID,
          name: this.props.name,
          queryString: this.props.queryString,
          placeholder: this.props.placeholder,
          rightChild: this.props.inputRightChild,
          maxLength: this.props.maxLength,
          searchSource: this.props.searchSource,
          searchSourceOptions: this.props.searchSourceOptions,
          searchOnFocus: !!this.props.showEntriesOnFocus,
          disabled: this.props.disabled,
          onDownArrow: this._onDownArrow,
          onLeftArrow: this._onLeftArrow,
          onRightArrow: this._onRightArrow,
          onUpArrow: this._onUpArrow,
          onEntriesFound: this._onEntriesFound,
          onSearch: this.props.onSearch,
          onEscape: this._onEscape,
          onBlur: this.props.blurOnWindowBlur
            ? this._onInputBlur
            : this._onInputBlurWindowSafe,
          onFocus: this._onInputFocus,
          onChange: this._onInputChange,
          onTab: this._onTab,
          onSpace: this._onSpace,
          onComma: this._onComma,
          onEnter: this._onEnter,
          onBackspace: this.props.onBackspace,
          onPaste: this.props.onPaste,
          onClick: this._onInputClick,
          style: this.props.inputStyle,
          styles: this.props.inputStyles,
          tabIndex: this.props.tabIndex,
          type: this.props.type,
          useLabel: this.props.inputUseLabel,
          hint: a,
        });
        a = Object.assign({}, this.props);
        delete a.additionalElements;
        delete a.additionalEntries;
        delete a.ariaLabel;
        delete a.context;
        delete a.focusAfterSelection;
        delete a.inputClassName;
        delete a.inputID;
        delete a.inputStyle;
        delete a.searchSource;
        delete a.searchSourceOptions;
        delete a.excludedEntries;
        delete a.presenter;
        delete a.onBackspace;
        delete a.onSelectAttempt;
        delete a.onEntriesFound;
        delete a.onNoEntriesFound;
        delete a.onEnterWithoutSelection;
        delete a.autoHighlight;
        delete a.showEntriesOnFocus;
        delete a.selectOnBlur;
        delete a.blurOnWindowBlur;
        delete a.selectOnTab;
        delete a.selectOnComma;
        delete a.selectOnSpace;
        delete a.focusedOnInit;
        delete a.hideViewWithEntries;
        delete a.disabled;
        delete a.entriesWidthMatchContext;
        delete a.selectedEntry;
        delete a.onTypeaheadVisibilityChanged;
        delete a.onPaste;
        delete a.navigation;
        delete a.type;
        delete a.tallInput;
        delete a.viewStyle;
        delete a.queryString;
        delete a.onClear;
        delete a.clearable;
        delete a.showPhoto;
        delete a.highlightOnSelect;
        delete a.maxEntries;
        delete a.textInputDataTestID;
        delete a.isRightToLeft;
        return b('React').createElement(
          'span',
          babelHelpers['extends']({}, a, {
            className: b('joinClasses')(this.props.className, '_58ah'),
            ref: 'root',
            onBlur: undefined,
            onChange: undefined,
            onClick: undefined,
            onFocus: undefined,
            tabIndex: undefined,
          }),
          c,
          this.props.additionalElements,
          this.props.presenter.useLayer ? null : this._getView()
        );
      },
      componentDidMount: function () {
        this.props.focusedOnInit && this.focusInput();
      },
      clearActiveEntries: function () {
        this.setState({
          ariaActiveDescendantID: null,
          activeEntries: null,
          highlightedEntry: null,
        });
      },
      focusInput: function () {
        var a = this.getTextFieldDOM();
        a.value && b('InputSelection').set(a, a.value.length);
        this.refs.input.focusInput();
      },
      blurInput: function () {
        this.refs.input.blur
          ? this.refs.input.blur()
          : this.refs.input.blurInput && this.refs.input.blurInput();
      },
      hideView: function () {
        this._setViewIsVisible(!1);
      },
      _close: function () {
        this._setViewIsVisible(!1), this.clearActiveEntries();
      },
      getTextFieldDOM: function () {
        return this.refs.input.getTextFieldDOM();
      },
    });
    e.exports = c;
  },
  null
);
__d(
  'XUIMenuStaticItem.react',
  ['MenuStaticItem.react'],
  function (a, b, c, d, e, f) {
    a = b('MenuStaticItem.react');
    e.exports = a;
  },
  null
);
__d(
  'XUIPopoverButton.react',
  [
    'cx',
    'ix',
    'AbstractPopoverButton.react',
    'Image.react',
    'React',
    'XUIButton.react',
    'joinClasses',
  ],
  function (a, b, c, d, e, f, g, h) {
    __p && __p();
    var i;
    a = b('React').PropTypes;
    i = babelHelpers.inherits(j, b('React').Component);
    i && i.prototype;
    j.getButtonSize = function (a) {
      return a.size || 'medium';
    };
    j.prototype.render = function () {
      __p && __p();
      var a = j.getButtonSize(this.props),
        c = '_55pi',
        d = this.props,
        e = d.theme,
        f = d.use,
        g = d.chevron,
        i = d.maxwidth,
        k = d.image,
        l = d.label,
        m = d.labelIsHidden,
        n = d.haschevron;
      d = babelHelpers.objectWithoutProperties(d, [
        'theme',
        'use',
        'chevron',
        'maxwidth',
        'image',
        'label',
        'labelIsHidden',
        'haschevron',
      ]);
      e === 'dark' &&
        (c = b('joinClasses')(
          c,
          (f !== 'special' ? '_5vto' : '') +
            (a === 'small' ? ' _55_o' : '') +
            (a === 'medium' ? ' _55_p' : '') +
            (a === 'large' ? ' _55_q' : '') +
            (a === 'xlarge' ? ' _55_r' : '') +
            (a === 'xxlarge' ? ' _55_s' : '')
        ));
      if (!g) {
        e =
          e === 'dark' || f === 'confirm' || f === 'special'
            ? h('101301')
            : h('101305');
        g = b('React').createElement(b('Image.react'), { src: e });
      }
      e = {
        button: b('React').createElement(
          b('XUIButton.react'),
          babelHelpers['extends']({}, d, {
            use: f,
            className: b('joinClasses')(this.props.className, c),
            size: a,
          })
        ),
        chevron: g,
        chevronWidth: 14,
        defaultMaxWidth: i || 200,
      };
      return b('React').createElement(b('AbstractPopoverButton.react'), {
        config: e,
        haschevron: n,
        image: k,
        label: l,
        labelIsHidden: m,
        maxwidth: i,
      });
    };
    function j() {
      i.apply(this, arguments);
    }
    j.propTypes = {
      haschevron: a.bool,
      label: a.node,
      labelIsHidden: a.bool,
      maxwidth: a.number,
    };
    e.exports = j;
  },
  null
);
__d(
  'LegacyContactTestConstants',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      CHOOSE_CONTACT_BUTTON: 'choose_contact_button',
      NOT_NOW_BUTTON: 'not_now_button',
      LEGACY_CONTACT_CARD: 'legacy_contact_card',
      CONFIRM_REMOVE: 'confirm_remove',
      SEND_MESSAGE_BUTTON: 'send_message_button',
      MESSAGE_SEND_CONFIRMED: 'message_send_confirmed',
      DELETE_ACCOUNT_SELECTOR: 'delete_account_selector',
      SAVE_BUTTON: 'save_button',
      DELETE_ACCOUNT_CONFIRM: 'delete_account_confirm',
      DELETE_AFTER_DEATH_CHOSEN: 'delete_after_death_chosen',
      DONT_DELETE_SELECTOR: 'dont_delete_selector',
      YES_ALLOW_SELECTOR: 'yes_allow_selector',
      DATA_ARCHIVE_SETTING: 'data_archive_setting',
      NO_DISALLOW_SELECTOR: 'no_disallow_selector',
      ADD_CONFIRM_BUTTON: 'add_confirm_button',
      DATA_ARCHIVE_SETTING_YES: 'data_archive_setting_yes',
      DATA_ARCHIVE_SETTING_NO: 'data_archive_setting_no',
      CHOOSE_FRIEND_TYPEAHEAD: 'choose_friend_typeahead',
      MESSAGE_COMPOSE_BOX: 'message_compose_box',
      REMOVE_CONTACT_BUTTON: 'remove_contact_button',
      MESSAGE_BUTTON: 'message_button',
      LOADING_INDICATOR: 'memorialization_loading_indicator',
    });
  },
  null
);
__d(
  'TypeaheadViewItem',
  ['React', 'ReactDOM', 'SearchableEntry', 'prop-types'],
  function (a, b, c, d, e, f) {
    __p && __p();
    c = {
      children: b('prop-types').node,
      className: b('prop-types').string,
      entry: b('prop-types').instanceOf(b('SearchableEntry')).isRequired,
      highlighted: b('prop-types').bool,
      role: b('prop-types').string,
      selected: b('prop-types').bool,
      onSelect: b('prop-types').func.isRequired,
      onHighlight: b('prop-types').func,
      onRenderHighlight: b('prop-types').func,
    };
    var g = { role: 'option' };
    d = {
      _onSelect: function (a) {
        this.props.onSelect(this.props.entry, a);
      },
      _onHighlight: function (a) {
        this.props.onHighlight && this.props.onHighlight(this.props.entry, a);
      },
      getDefaultProps: function () {
        return g;
      },
      shouldComponentUpdate: function (a) {
        return (
          this.props.entry.getUniqueID() !== a.entry.getUniqueID() ||
          this.props.highlighted !== a.highlighted ||
          this.props.selected !== a.selected
        );
      },
      componentDidMount: function () {
        var a = this.props.onRenderHighlight;
        this.props.highlighted && a && a(b('ReactDOM').findDOMNode(this));
      },
      componentDidUpdate: function () {
        var a = this.props.onRenderHighlight;
        this.props.highlighted && a && a(b('ReactDOM').findDOMNode(this));
      },
    };
    function a(a) {
      __p && __p();
      var c, d;
      return (
        (d = c =
          (function () {
            __p && __p();
            var c, d;
            c = babelHelpers.inherits(e, b('React').Component);
            d = c && c.prototype;
            function e() {
              var a, b;
              for (
                var c = arguments.length, e = new Array(c), f = 0;
                f < c;
                f++
              )
                e[f] = arguments[f];
              return (
                (b = (a = d.constructor).call.apply(a, [this].concat(e))),
                (this.$1 = function (a) {
                  this.props.onSelect(this.props.entry, a);
                }.bind(this)),
                (this.$2 = function (a) {
                  this.props.onHighlight &&
                    this.props.onHighlight(this.props.entry, a);
                }.bind(this)),
                b
              );
            }
            e.prototype.shouldComponentUpdate = function (a) {
              return (
                this.props.entry.getUniqueID() !== a.entry.getUniqueID() ||
                this.props.highlighted !== a.highlighted ||
                this.props.selected !== a.selected
              );
            };
            e.prototype.componentDidMount = function () {
              var a = this.props.onRenderHighlight;
              this.props.highlighted && a && a(b('ReactDOM').findDOMNode(this));
            };
            e.prototype.componentDidUpdate = function () {
              var a = this.props.onRenderHighlight;
              this.props.highlighted && a && a(b('ReactDOM').findDOMNode(this));
            };
            e.prototype.render = function () {
              return b('React').createElement(
                a,
                babelHelpers['extends']({}, this.props, {
                  onSelect: this.$1,
                  onHighlight: this.$2,
                })
              );
            };
            return e;
          })()),
        (c.displayName = 'TypeaheadViewItem(' + a.displayName + ')'),
        (c.defaultProps = g),
        d
      );
    }
    e.exports = { makeTypeaheadViewItem: a, Mixin: d, propTypes: c };
  },
  null
);
__d(
  'XUITypeaheadViewItem.react',
  [
    'cx',
    'BackgroundImage.react',
    'Badge.react',
    'ImageBlock.react',
    'LegacyContactTestConstants',
    'React',
    'TextWithEmoticons.react',
    'Tooltip',
    'TypeaheadViewItem',
    'joinClasses',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    a = b('React').PropTypes;
    c = b('React').createClass({
      displayName: 'XUITypeaheadViewItem',
      mixins: [b('TypeaheadViewItem').Mixin],
      propTypes: babelHelpers['extends']({}, b('TypeaheadViewItem').propTypes, {
        splitText: a.bool,
        tooltip: a.node,
        tooltipPosition: a.oneOf(['above', 'left', 'below', 'right']),
        backgroundSize: a.string,
        radiusImage: a.bool,
        photoWidth: a.number,
        photoHeight: a.number,
      }),
      render: function () {
        __p && __p();
        var a = this.props.entry,
          c = this.props.splitSubtext
            ? a.getSubtitle().split(' \xb7 ')[0]
            : a.getSubtitle();
        c = c
          ? b('React').createElement(
              'div',
              { className: '_599q' },
              this.props.children,
              c
            )
          : null;
        var d = this.props.backgroundSize || 'cover';
        d = a.getPhoto()
          ? b('React').createElement(b('BackgroundImage.react'), {
              width: this.props.photoWidth || 32,
              height: this.props.photoHeight || 32,
              backgroundSize: d,
              src: a.getPhoto(),
            })
          : b('React').createElement('span', null);
        var e = a.getAuxiliaryData(),
          f = null;
        e &&
          (e.verified
            ? (f = b('React').createElement(b('Badge.react'), null))
            : e.workForeignEntity &&
              (f = b('React').createElement(b('Badge.react'), {
                type: 'work_non_coworker',
              })));
        e = this.props.radiusImage !== null ? this.props.radiusImage : !0;
        e =
          '_599m' +
          (e ? ' _1u3_' : '') +
          (c ? '' : ' _5mne') +
          (this.props.highlighted ? ' _599n' : '');
        e = b('joinClasses')(e, this.props.className);
        var g = this.props.tooltipPosition
          ? this.props.tooltipPosition
          : 'right';
        return b('React').createElement(
          'li',
          babelHelpers['extends'](
            {
              'aria-selected': this.props.highlighted,
              className: e,
              onMouseDown: this._onSelect,
              onMouseEnter: this._onHighlight,
              role: this.props.role,
              'data-testid': b('LegacyContactTestConstants')
                .CHOOSE_CONTACT_BUTTON,
            },
            this.props.tooltip
              ? b('Tooltip').propsFor(this.props.tooltip, g)
              : {}
          ),
          b('React').createElement(
            b('ImageBlock.react'),
            { spacing: 'medium' },
            d,
            b('React').createElement(
              'div',
              null,
              b('React').createElement(
                'div',
                { className: '_599p' },
                b('React').createElement(b('TextWithEmoticons.react'), {
                  renderEmoticons: !1,
                  renderEmoji: !0,
                  text: a.getTitle(),
                }),
                f
              ),
              c
            )
          )
        );
      },
    });
    e.exports = c;
  },
  null
);
__d(
  'AbstractSearchSource',
  ['Promise'],
  function (a, b, c, d, e, f) {
    __p && __p();
    a.prototype.bootstrap = function (a) {
      this.$1 ||
        (this.$1 = new (b('Promise'))(
          function (a) {
            this.bootstrapImpl(a);
          }.bind(this)
        ));
      return this.$1.then(a);
    };
    a.prototype.search = function (a, b, c) {
      this.searchImpl(a, b, c);
    };
    a.prototype.bootstrapImpl = function (a) {
      a();
    };
    a.prototype.searchImpl = function (a, b, c) {
      throw new Error('Abstract method #searchImpl is not implemented.');
    };
    a.prototype.clearBootstrappedData = function () {
      this.$1 = null;
    };
    function a() {}
    e.exports = a;
  },
  null
);
__d(
  'SearchSourceCallbackManager',
  ['invariant', 'SearchSourceQueryStatus', 'createObjectFrom', 'nullthrows'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h = b('SearchSourceQueryStatus').ACTIVE,
      i = b('SearchSourceQueryStatus').COMPLETE;
    function a(a) {
      (this.$9 = a.parseFn),
        typeof this.$9 === 'function' || g(0, undefined),
        (this.$8 = a.matchFn),
        typeof this.$8 === 'function' || g(0, undefined),
        (this.$2 = a.alwaysPrefixMatch || !1),
        (this.$6 = a.indexFn || j),
        (this.$4 = a.exclusions || {}),
        this.reset();
    }
    a.prototype.search = function (a, b) {
      var c = this.$13(a, b);
      if (c) return 0;
      this.$1.push({ queryString: a, callback: b });
      c = this.$1.length - 1;
      this.$10.push(c);
      return c;
    };
    a.prototype.$13 = function (a, b) {
      __p && __p();
      var c = this.$14(a),
        d = !!this.$5[a];
      if (!c.length) {
        b([], a, d ? i : h);
        return d;
      }
      c = c.map(
        function (a) {
          return this.$3[a];
        }.bind(this)
      );
      b(c, a, d ? i : h);
      return d;
    };
    a.prototype.$15 = function () {
      var a = this.$10;
      this.$10 = [];
      a.forEach(this.$16, this);
    };
    a.prototype.$16 = function (a) {
      __p && __p();
      var b = this.$1[a];
      if (!b) return;
      b = this.$13(b.queryString, b.callback);
      if (b) {
        delete this.$1[a];
        return;
      }
      this.$10.push(a);
    };
    a.prototype.reset = function () {
      (this.$3 = {}),
        (this.$12 = {}),
        (this.$7 = {}),
        (this.$11 = {}),
        (this.$5 = {}),
        (this.$10 = []),
        (this.$1 = [undefined]);
    };
    a.prototype.addLocalEntries = function (a) {
      a.forEach(
        function (a) {
          var b = a.getUniqueID(),
            c = this.$6(a);
          this.$3[b] = a;
          this.$12[b] = c;
          a = this.$9(c);
          a.tokens.forEach(
            function (a) {
              Object.prototype.hasOwnProperty.call(this.$7, a) ||
                (this.$7[a] = {}),
                (this.$7[a][b] = !0);
            }.bind(this)
          );
        }.bind(this)
      ),
        this.$15();
    };
    a.prototype.addQueryEntries = function (a, c, d) {
      __p && __p();
      d === i && this.setQueryStringAsExhausted(c);
      d = this.$14(c);
      var e = this.$9(c).flatValue;
      this.$11[e] = b('createObjectFrom')(d, !0);
      a.forEach(
        function (a) {
          var b = a.getUniqueID();
          this.$3[b] = a;
          this.$12[b] = this.$6(a);
          this.$11[e][b] = !0;
        }.bind(this)
      );
      this.$15();
    };
    a.prototype.unsubscribe = function (a) {
      delete this.$1[a];
    };
    a.prototype.removeEntry = function (a) {
      delete this.$3[a];
    };
    a.prototype.getAllEntriesMap = function () {
      return this.$3;
    };
    a.prototype.setQueryStringAsExhausted = function (a) {
      this.$5[a] = !0;
    };
    a.prototype.unsetQueryStringAsExhausted = function (a) {
      delete this.$5[a];
    };
    a.prototype.$14 = function (a) {
      var b = this.$17(a, this.$18(a));
      a = this.$17(a, this.$19(a));
      b = b.concat(a);
      var c = {},
        d = [];
      b.forEach(
        function (a) {
          c[a] == null &&
            this.$3[a] != null &&
            this.$4[a] == null &&
            (d.push(a), (c[a] = !0));
        }.bind(this)
      );
      return d;
    };
    a.prototype.$17 = function (a, b) {
      __p && __p();
      var c = this.$20(a, b),
        d = this.$3;
      function e(a, b) {
        if (c[a] !== c[b]) return c[a] ? -1 : 1;
        a = d[a];
        b = d[b];
        if (a.getOrder() !== b.getOrder()) return a.getOrder() - b.getOrder();
        var e = a.getTitle().length,
          f = b.getTitle().length;
        return e !== f ? e - f : a.getUniqueID() - b.getUniqueID();
      }
      return b.sort(e).slice();
    };
    a.prototype.$20 = function (a, b) {
      var c = {};
      b.forEach(
        function (b) {
          c[b] = this.$8(a, this.$12[b]);
        }.bind(this)
      );
      return c;
    };
    a.prototype.$18 = function (a) {
      __p && __p();
      var c = this.$9(a, this.$2),
        d = this.$2 ? b('nullthrows')(c.sortedTokens) : c.tokens,
        e = d.length,
        f = c.isPrefixQuery ? e - 1 : null,
        g = {},
        h = {},
        i = {};
      c = !1;
      var j = {},
        k = 0;
      d.forEach(
        function (a, b) {
          __p && __p();
          if (Object.prototype.hasOwnProperty.call(j, a)) return;
          k++;
          j[a] = !0;
          for (var d in this.$7) {
            var e = d === a && !Object.prototype.hasOwnProperty.call(g, d),
              l = !1;
            e || (l = (this.$2 || f === b) && d.indexOf(a) === 0);
            if (!e && !l) continue;
            d === a
              ? (Object.prototype.hasOwnProperty.call(h, d) && (c = !0),
                (g[d] = !0))
              : ((Object.prototype.hasOwnProperty.call(g, d) ||
                  Object.prototype.hasOwnProperty.call(h, d)) &&
                  (c = !0),
                (h[d] = !0));
            for (var m in this.$7[d])
              (b === 0 ||
                (Object.prototype.hasOwnProperty.call(i, m) &&
                  i[m] == k - 1)) &&
                (i[m] = k);
          }
        }.bind(this)
      );
      d = Object.keys(i).filter(function (a) {
        return i[a] == k;
      });
      (c || k < e) && (d = this.$21(a, d));
      return d;
    };
    a.prototype.$19 = function (a) {
      var b = this.$9(a).flatValue,
        c = this.$22(b);
      return Object.prototype.hasOwnProperty.call(this.$11, b)
        ? c
        : this.$21(a, c);
    };
    a.prototype.$22 = function (a) {
      var b = 0,
        c = null,
        d = this.$11;
      Object.keys(d).forEach(function (d) {
        a.indexOf(d) === 0 && d.length > b && ((b = d.length), (c = d));
      });
      return c && Object.prototype.hasOwnProperty.call(d, c)
        ? Object.keys(d[c])
        : [];
    };
    a.prototype.$21 = function (a, b) {
      return b.filter(
        function (b) {
          return this.$8(a, this.$12[b]);
        }.bind(this)
      );
    };
    function j(a) {
      return [a.getTitle(), a.getKeywordString()].join(' ');
    }
    e.exports = a;
  },
  null
);
__d(
  'AbstractAsyncSearchSource',
  [
    'AbstractSearchSource',
    'SearchableEntry',
    'SearchSourceCallbackManager',
    'SearchSourceQueryStatus',
    'TokenizeUtil',
    'emptyFunction',
    'isValidUniqueID',
    'nullthrows',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g,
      h = b('SearchSourceQueryStatus').ACTIVE,
      i = b('SearchSourceQueryStatus').COMPLETE;
    c = babelHelpers.inherits(a, b('AbstractSearchSource'));
    g = c && c.prototype;
    function a(a, c, d) {
      g.constructor.call(this),
        (this.$AbstractAsyncSearchSource1 =
          a.asyncErrorHandler || b('emptyFunction')),
        (this.$AbstractAsyncSearchSource2 = a.auxiliaryFields),
        (this.$AbstractAsyncSearchSource4 = a.bootstrapRequests),
        (this.$AbstractAsyncSearchSource6 = a.getAllForEmptyQuery),
        (this.$AbstractAsyncSearchSource8 =
          a.packageFn || this.$AbstractAsyncSearchSource12),
        (this.$AbstractAsyncSearchSource9 = a.queryRequests),
        (this.$AbstractAsyncSearchSource10 = a.requestData || {}),
        (this.$AbstractAsyncSearchSource3 = []),
        (this.$AbstractAsyncSearchSource5 = new (b(
          'SearchSourceCallbackManager'
        ))({
          parseFn: b('TokenizeUtil').parse,
          matchFn: a.matchFn || b('TokenizeUtil').isQueryMatch,
          indexFn: a.indexFn,
          exclusions: a.exclusions,
        })),
        (this.$AbstractAsyncSearchSource11 = c),
        (this.$AbstractAsyncSearchSource7 = d);
    }
    a.prototype.bootstrapImpl = function (a) {
      __p && __p();
      var b = a;
      if (
        !this.$AbstractAsyncSearchSource4 ||
        !this.$AbstractAsyncSearchSource4.length
      ) {
        b();
        return;
      }
      var c = this.$AbstractAsyncSearchSource4.length,
        d = 0;
      this.$AbstractAsyncSearchSource4.forEach(
        function (a) {
          this.$AbstractAsyncSearchSource13(
            this.$AbstractAsyncSearchSource10,
            a,
            function (a) {
              this.$AbstractAsyncSearchSource5.addLocalEntries(a),
                (this.$AbstractAsyncSearchSource3 =
                  this.$AbstractAsyncSearchSource3.concat(a)),
                d++,
                b && d === c && (b(), (b = null));
            }.bind(this)
          );
        }.bind(this)
      );
    };
    a.prototype.searchImpl = function (a, c, d) {
      __p && __p();
      if (this.$AbstractAsyncSearchSource6 && a === '') {
        this.getBootstrappedEntries(function (d) {
          c(d, a, b('SearchSourceQueryStatus').COMPLETE);
        });
        return;
      }
      var e = null,
        f = {},
        g = this.$AbstractAsyncSearchSource5.search(a, function (g, a, h) {
          if (d && d.waitForAllResults && h !== i) return;
          !e
            ? ((e = g),
              e.forEach(function (a) {
                f[a.getUniqueID()] = !0;
              }))
            : g.forEach(function (a) {
                var c = a.getUniqueID();
                f[c] || (b('nullthrows')(e).push(a), (f[c] = !0));
              });
          c(e, a, h);
        });
      if (
        !g ||
        !this.$AbstractAsyncSearchSource9 ||
        !this.$AbstractAsyncSearchSource9.length
      )
        return;
      var j = babelHelpers['extends'](
          {
            value: a,
            existing_ids:
              e &&
              e
                .map(function (a) {
                  return a.getUniqueID();
                })
                .join(','),
          },
          this.$AbstractAsyncSearchSource10
        ),
        k = this.$AbstractAsyncSearchSource9.length;
      this.$AbstractAsyncSearchSource9.forEach(
        function (b) {
          this.$AbstractAsyncSearchSource13(
            j,
            b,
            function (b) {
              k--, this.$AbstractAsyncSearchSource14(b, a, k ? h : i);
            }.bind(this)
          );
        }.bind(this)
      );
    };
    a.prototype.getBootstrappedEntries = function (a) {
      return this.bootstrap(
        function () {
          return a(this.$AbstractAsyncSearchSource3 || []);
        }.bind(this)
      );
    };
    a.prototype.getAllEntriesMap = function () {
      return this.$AbstractAsyncSearchSource5.getAllEntriesMap();
    };
    a.prototype.setRequestData = function (a) {
      this.$AbstractAsyncSearchSource10 = a;
    };
    a.prototype.$AbstractAsyncSearchSource13 = function (a, b, c) {
      this.$AbstractAsyncSearchSource11(
        a,
        b,
        function (a) {
          return c(
            this.$AbstractAsyncSearchSource7(
              a,
              this.$AbstractAsyncSearchSource8
            ).filter(Boolean)
          );
        }.bind(this),
        this.$AbstractAsyncSearchSource1
      );
    };
    a.prototype.$AbstractAsyncSearchSource15 = function (a) {
      this.$AbstractAsyncSearchSource5.addLocalEntries(a);
    };
    a.prototype.$AbstractAsyncSearchSource14 = function (a, b, c) {
      this.$AbstractAsyncSearchSource5.addQueryEntries(a, b, c);
    };
    a.prototype.$AbstractAsyncSearchSource12 = function (a, c) {
      var d = a.title || a.text,
        e = a.uniqueID || a.uid;
      return !d || !b('isValidUniqueID')(e)
        ? null
        : new (b('SearchableEntry'))({
            uniqueID: e,
            order: a.order || a.index || c,
            title: d,
            subtitle: a.subtitle || a.category || a.subtext,
            keywordString: a.keywordString || a.tokens,
            type: a.type,
            photo: a.photo,
            uri: a.uri || a.path,
            auxiliaryData: this.$AbstractAsyncSearchSource16(a),
          });
    };
    a.prototype.$AbstractAsyncSearchSource16 = function (a) {
      __p && __p();
      var b;
      if (this.$AbstractAsyncSearchSource2) {
        b = {};
        for (var c in this.$AbstractAsyncSearchSource2) {
          var d = this.$AbstractAsyncSearchSource2[c];
          b[c] = a[d];
        }
      }
      a.aux_data && (b = babelHelpers['extends']({}, b, a.aux_data));
      return b;
    };
    e.exports = a;
  },
  null
);
__d(
  'WebAsyncSearchSourceUtils',
  [],
  function (a, b, c, d, e, f) {
    a = {
      normalizeResponse: function (a, b) {
        a = a.getPayload();
        var c;
        Array.isArray(a)
          ? (c = a)
          : a && a.entries
          ? (c = a.entries)
          : (c = []);
        typeof c === 'object' &&
          !Array.isArray(c) &&
          (c = Object.keys(c).map(function (a) {
            return c[a];
          }));
        return c.map(b, this);
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'WebAsyncSearchSource',
  [
    'AbstractAsyncSearchSource',
    'AbstractSearchSource',
    'AsyncRequest',
    'WebAsyncSearchSourceUtils',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g;
    c = babelHelpers.inherits(a, b('AbstractSearchSource'));
    g = c && c.prototype;
    function a(a) {
      g.constructor.call(this),
        (this.$WebAsyncSearchSource1 = new (b('AbstractAsyncSearchSource'))(
          a,
          this.$WebAsyncSearchSource2,
          b('WebAsyncSearchSourceUtils').normalizeResponse
        ));
    }
    a.prototype.bootstrapImpl = function (a) {
      this.$WebAsyncSearchSource1.bootstrap(a);
    };
    a.prototype.searchImpl = function (a, b, c) {
      this.$WebAsyncSearchSource1.search(a, b, c);
    };
    a.prototype.getBootstrappedEntries = function (a) {
      return this.$WebAsyncSearchSource1.getBootstrappedEntries(a);
    };
    a.prototype.getAllEntriesMap = function () {
      return this.$WebAsyncSearchSource1.getAllEntriesMap();
    };
    a.prototype.setRequestData = function (a) {
      this.$WebAsyncSearchSource1.setRequestData(a);
    };
    a.prototype.$WebAsyncSearchSource2 = function (a, c, d, e) {
      new (b('AsyncRequest'))(c.uri)
        .setData(babelHelpers['extends']({}, a, c.data))
        .setMethod('GET')
        .setReadOnly(!0)
        .setAllowCrossPageTransition(!0)
        .setHandler(d)
        .setErrorHandler(e)
        .send();
    };
    e.exports = a;
  },
  null
);
__d(
  'XLtgLanguageDialectTypeaheadController',
  ['XController'],
  function (a, b, c, d, e, f) {
    e.exports = b('XController').create('/translation/dialects/', {
      value: { type: 'String', defaultValue: '' },
      q: { type: 'String', defaultValue: '' },
      dialect_set: {
        type: 'Enum',
        defaultValue: 'language_detection',
        enumType: 1,
      },
      render: { type: 'Enum', defaultValue: 'default', enumType: 1 },
    });
  },
  null
);
__d(
  'LanguageDialectAsyncSearchSource',
  ['WebAsyncSearchSource', 'XLtgLanguageDialectTypeaheadController'],
  function (a, b, c, d, e, f) {
    var g;
    c = babelHelpers.inherits(a, b('WebAsyncSearchSource'));
    g = c && c.prototype;
    function a(a, c, d) {
      g.constructor.call(this, {
        asyncErrorHandler: d,
        bootstrapRequests: [
          {
            uri: b('XLtgLanguageDialectTypeaheadController')
              .getURIBuilder()
              .setEnum('dialect_set', a)
              .setEnum('render', c)
              .getURI(),
          },
        ],
      });
    }
    a.prototype.searchImpl = function (a, b, c) {
      !a
        ? b(Object.values(this.getAllEntriesMap()), a)
        : g.searchImpl.call(this, a, b, c);
    };
    e.exports = a;
  },
  null
);
__d(
  'LanguageDialectRenderStyle',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      DEFAULT: 'default',
      INTERNAL: 'internal',
      ULM_CATEGORIES: 'ulm_categories',
    });
  },
  null
);
__d(
  'LanguageDialectCategory',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      VIEWER_UNDERSTOOD: 'viewer_understood',
      OTHER: 'other',
    });
  },
  null
);
__d(
  'groupArray',
  [],
  function (a, b, c, d, e, f) {
    function a(a, b) {
      var c = {};
      a.forEach(function (d, e) {
        e = b(d, e, a);
        c[e] || (c[e] = []);
        c[e].push(d);
      });
      return c;
    }
    e.exports = a;
  },
  null
);
__d(
  'LanguageDialectViewRenderer.react',
  [
    'cx',
    'fbt',
    'LanguageDialectCategory',
    'LanguageDialectRenderStyle',
    'React',
    'XUIGrayText.react',
    'XUITypeaheadViewItem.react',
    'groupArray',
  ],
  function (a, b, c, d, e, f, g, h) {
    __p && __p();
    var i;
    i = babelHelpers.inherits(a, b('React').Component);
    i && i.prototype;
    a.prototype.$1 = function (a) {
      return b('React').createElement(b('XUITypeaheadViewItem.react'), {
        key: a.getUniqueID(),
        entry: a,
        highlighted: a === this.props.highlightedEntry,
        onSelect: this.props.onSelect,
        onHighlight: this.props.onHighlight,
        onRenderHighlight: this.props.onRenderHighlight,
      });
    };
    a.prototype.$2 = function (a, c) {
      __p && __p();
      var d = null;
      switch (a) {
        case b('LanguageDialectCategory').VIEWER_UNDERSTOOD:
          d = h._('Frequently used languages');
          break;
        case b('LanguageDialectCategory').OTHER:
          d = h._('Other languages');
          break;
        default:
          break;
      }
      c = c.map(
        function (a) {
          return this.$1(a);
        }.bind(this)
      );
      d &&
        c.unshift(
          b('React').createElement(
            b('XUIGrayText.react'),
            {
              key: a,
              className: '_2pir _2pi2',
              shade: 'light',
              display: 'block',
            },
            d
          )
        );
      return c;
    };
    a.prototype.$3 = function () {
      var a,
        c = b('groupArray')(this.props.entries, function (a) {
          return a.getType();
        }),
        d = Object.keys(c);
      if (d.length === 1) return this.$2('', this.props.entries);
      Object.prototype.hasOwnProperty.call(
        c,
        b('LanguageDialectCategory').VIEWER_UNDERSTOOD
      ) &&
        (d.splice(d.indexOf(b('LanguageDialectCategory').VIEWER_UNDERSTOOD), 1),
        d.unshift(b('LanguageDialectCategory').VIEWER_UNDERSTOOD));
      return (a = []).concat.apply(
        a,
        d.map(
          function (a) {
            return this.$2(a, c[a]);
          }.bind(this)
        )
      );
    };
    a.prototype.render = function () {
      var a =
        this.props.renderStyle ===
        b('LanguageDialectRenderStyle').ULM_CATEGORIES
          ? this.$3()
          : this.$2('', this.props.entries);
      return b('React').createElement(
        'ul',
        { className: '_5p0r', role: this.props.role },
        a
      );
    };
    function a() {
      i.apply(this, arguments);
    }
    e.exports = a;
  },
  null
);
__d(
  'LanguageDialectInlineTypeahead.react',
  [
    'cx',
    'AbstractTypeahead.react',
    'LanguageDialectAsyncSearchSource',
    'LanguageDialectRenderStyle',
    'LanguageDialectViewRenderer.react',
    'React',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h;
    c = babelHelpers.inherits(a, b('React').Component);
    h = c && c.prototype;
    function a(a) {
      h.constructor.call(this, a),
        (this.$1 = function (a) {
          this.props.onSelect && this.props.onSelect(a), this.$3();
        }.bind(this)),
        (this.$2 = function (event) {
          var a = event.target.value;
          this.props.onChange && this.props.onChange(a);
          this.setState({ query: event.target.value });
        }.bind(this)),
        (this.$3 = function () {
          this.setState({ query: '' });
        }.bind(this)),
        (this.searchSource = new (b('LanguageDialectAsyncSearchSource'))(
          this.props.dialectType,
          this.props.renderStyle
        )),
        (this.state = { query: '' });
    }
    a.prototype.UNSAFE_componentWillReceiveProps = function (a) {
      (a.dialectType !== this.props.dialectType ||
        a.renderStyle !== this.props.renderStyle) &&
        (this.searchSource = new (b('LanguageDialectAsyncSearchSource'))(
          a.dialectType,
          a.renderStyle
        ));
    };
    a.prototype.render = function () {
      var a = {};
      this.props.excludedDialects.forEach(function (b) {
        return (a[b] = !0);
      });
      return b('React').createElement(b('AbstractTypeahead.react'), {
        autoHighlight: !0,
        inputClassName: this.props.className || '_5p0s',
        hideViewWithEntries: !1,
        showEntriesOnFocus: !0,
        onSelectAttempt: this.$1,
        onChange: this.$2,
        onClear: this.$3,
        searchSource: this.searchSource,
        placeholder: this.props.placeholder,
        excludedEntries: a,
        queryString: this.state.query,
        presenter: {
          ViewRenderer: b('LanguageDialectViewRenderer.react'),
          maxEntries: 200,
          useLayer: !1,
          extraRendererProps: { renderStyle: this.props.renderStyle },
        },
      });
    };
    a.defaultProps = {
      excludedDialects: [],
      renderStyle: b('LanguageDialectRenderStyle').DEFAULT,
    };
    e.exports = a;
  },
  null
);
__d(
  'LanguageDialectSearchableDropdown.react',
  [
    'cx',
    'fbt',
    'ContextualLayer.react',
    'ContextualLayerAutoFlip',
    'ContextualLayerUpdateOnScroll',
    'LanguageDialectInlineTypeahead.react',
    'LanguageDialectRenderStyle',
    'LayerAutoFocus',
    'LayerHideOnBlur',
    'LayerHideOnEscape',
    'React',
    'XUIPopoverButton.react',
  ],
  function (a, b, c, d, e, f, g, h) {
    __p && __p();
    var i,
      j = ' \u25be',
      k = 'xx_XX';
    c = babelHelpers.inherits(a, b('React').Component);
    i = c && c.prototype;
    function a(a) {
      i.constructor.call(this, a),
        (this.$2 = function (a) {
          this.setState({
            selectedDialect: a.getUniqueID(),
            selectedDialectName: a.getTitle(),
            isOpen: !1,
          }),
            this.props.onSelect(a.getUniqueID());
        }.bind(this)),
        (this.$4 = function () {
          this.setState({ isOpen: !this.state.isOpen });
        }.bind(this)),
        (this.$5 = function (a) {
          this.setState({ isOpen: a });
        }.bind(this)),
        (this.state = {
          selectedDialect: this.props.initialDialect
            ? this.props.initialDialect
            : k,
          selectedDialectName: this.props.initialDialectName
            ? this.props.initialDialectName
            : h._('Select'),
          isOpen: !1,
        });
    }
    a.prototype.$3 = function () {
      return h._('Show available languages');
    };
    a.prototype.render = function () {
      var a = this.props.useSelector
        ? b('React').createElement(b('XUIPopoverButton.react'), {
            hasChevron: !0,
            label: this.state.selectedDialectName,
            onClick: this.$4,
            ref: function (a) {
              return (this.$1 = a);
            }.bind(this),
          })
        : b('React').createElement(
            'a',
            {
              onClick: this.$4,
              ref: function (a) {
                return (this.$1 = a);
              }.bind(this),
              role: 'button',
              tabIndex: '0',
              title: this.$3(),
            },
            this.state.selectedDialectName,
            j
          );
      return b('React').createElement(
        'span',
        { className: this.props.className },
        a,
        b('React').createElement(
          b('ContextualLayer.react'),
          {
            alignment: 'left',
            autofocus: !0,
            behaviors: {
              ContextualLayerAutoFlip: b('ContextualLayerAutoFlip'),
              ContextualLayerUpdateOnScroll: b('ContextualLayerUpdateOnScroll'),
              LayerAutoFocus: b('LayerAutoFocus'),
              LayerHideOnBlur: b('LayerHideOnBlur'),
              LayerHideOnEscape: b('LayerHideOnEscape'),
            },
            contextRef: function () {
              return this.$1;
            }.bind(this),
            position: 'below',
            onToggle: this.$5,
            shown: this.state.isOpen,
          },
          b('React').createElement(
            'div',
            { className: '_5ge1' },
            b('React').createElement(
              b('LanguageDialectInlineTypeahead.react'),
              {
                dialectType: this.props.dialectType,
                onSelect: this.$2,
                placeholder: this.props.placeholder,
                excludedDialects: this.props.excludedDialects,
                hasCategories: this.props.hasCategories,
                renderStyle: this.props.renderStyle,
              }
            )
          )
        )
      );
    };
    a.defaultProps = {
      initialDialect: k,
      hasCategories: !1,
      renderStyle: b('LanguageDialectRenderStyle').DEFAULT,
      useSelector: !1,
    };
    e.exports = a;
  },
  null
);
__d(
  'LtgTranslationPreferenceEntryBase',
  ['BanzaiLogger'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a) {
      this.translationData = a;
    }
    a.prototype.getPreferenceType = function () {
      return null;
    };
    a.prototype.getShouldShowPreference = function () {
      return !1;
    };
    a.prototype.getEntryTitle = function () {
      return null;
    };
    a.prototype.getEntrySubtitle = function () {
      return null;
    };
    a.prototype.getConfirmDialogTitle = function () {
      return null;
    };
    a.prototype.getConfirmDialogBody = function () {
      return null;
    };
    a.prototype.getUseConfirmDialog = function () {
      return !1;
    };
    a.prototype.getSuccessDialogTitle = function () {
      return null;
    };
    a.prototype.getSuccessDialogBody = function () {
      return null;
    };
    a.prototype.getUseSuccessDialog = function () {
      return !1;
    };
    a.prototype.getUseCustomAction = function () {
      return !1;
    };
    a.prototype.getURIForAsyncAction = function () {
      return null;
    };
    a.prototype.getGlyph = function () {
      return null;
    };
    a.prototype.performAction = function () {};
    a.prototype.log = function () {
      b('BanzaiLogger').log('LtgTranslationPreferencesLoggerConfig', {
        translation_request_id: this.translationData.requestID,
        translation_trigger: this.translationData.trigger,
        content_id: this.translationData.targetID,
        translation_ent_id: this.translationData.translationID,
        click_type: this.getPreferenceType(),
      });
    };
    e.exports = a;
  },
  null
);
__d(
  'TranslationPreferenceEvent',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      SEE_ORIGINAL: 'click_see_original',
      HIDE_ORIGINAL: 'click_hide_original',
      TRANSLATION_PREFERENCES: 'click_translation_preferences',
      DISABLE_TRANSLATION: 'disable_translation',
      DISABLE_AUTO_TRANSLATION: 'disable_auto_translation',
      LANGUAGE_SETTINGS: 'language_settings',
      EDIT_TRANSLATION: 'edit_translation',
      REPORT_LANGUAGE: 'report language',
      RATE_TRANSLATION: 'rate_translation',
      TRANSLATE_ALL_COMMENTS: 'translate_all_comments',
    });
  },
  null
);
__d(
  'LtgEditTranslationPreferenceEntryBase',
  [
    'ContentTranslationStrings',
    'LtgTranslationPreferenceEntryBase',
    'TranslationPreferenceEvent',
    'XTranslationCrowdsourcingSubmitAsyncController',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g;
    c = babelHelpers.inherits(a, b('LtgTranslationPreferenceEntryBase'));
    g = c && c.prototype;
    function a(a) {
      g.constructor.call(this, a),
        (this.newTranslation = this.translationData.translatedText.text);
    }
    a.prototype.getPreferenceType = function () {
      return b('TranslationPreferenceEvent').EDIT_TRANSLATION;
    };
    a.prototype.getShouldShowPreference = function () {
      return !0;
    };
    a.prototype.getEntryTitle = function () {
      return b('ContentTranslationStrings').EDIT_TRANSLATION_MENU;
    };
    a.prototype.getConfirmDialogTitle = function () {
      return this.getEntryTitle();
    };
    a.prototype.getUseConfirmDialog = function () {
      return !0;
    };
    a.prototype.getUseSuccessDialog = function () {
      return !0;
    };
    a.prototype.getSuccessDialogTitle = function () {
      return this.getConfirmDialogTitle();
    };
    a.prototype.getSuccessDialogBody = function () {
      return b('ContentTranslationStrings').EDIT_TRANSLATION_THANKS;
    };
    a.prototype.getURIForAsyncAction = function () {
      return b('XTranslationCrowdsourcingSubmitAsyncController')
        .getURIBuilder()
        .setFBID('content_id', this.translationData.targetID)
        .setString('source_dialect', this.translationData.sourceDialect)
        .setString('target_dialect', this.translationData.targetDialect)
        .setString('translation', this.newTranslation)
        .getURI();
    };
    e.exports = a;
  },
  null
);
__d(
  'LtgEditTranslationPreferenceEntry',
  [
    'LtgEditTranslationPreferenceEntryBase',
    'ProvideTranslationDialog.react',
    'React',
    'TextWithEntities.react',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g;
    g = babelHelpers.inherits(a, b('LtgEditTranslationPreferenceEntryBase'));
    g && g.prototype;
    a.prototype.getConfirmDialogBody = function () {
      return b('React').createElement(
        b('ProvideTranslationDialog.react'),
        {
          onTranslationTextChange: function (a) {
            return (this.newTranslation = a.target.value);
          }.bind(this),
          defaultText: this.translationData.translatedText.text,
        },
        b('React').createElement(b('TextWithEntities.react'), {
          text: this.translationData.originalText,
        })
      );
    };
    function a() {
      g.apply(this, arguments);
    }
    e.exports = a;
  },
  null
);
__d(
  'LtgLanguageSettingsBasePreferenceEntry',
  [
    'ix',
    'ContentTranslationStrings',
    'LtgTranslationPreferenceEntryBase',
    'TranslationPreferenceEvent',
    'fbglyph',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h;
    h = babelHelpers.inherits(a, b('LtgTranslationPreferenceEntryBase'));
    h && h.prototype;
    a.prototype.getPreferenceType = function () {
      return b('TranslationPreferenceEvent').LANGUAGE_SETTINGS;
    };
    a.prototype.getShouldShowPreference = function () {
      return !0;
    };
    a.prototype.getEntryTitle = function () {
      return b('ContentTranslationStrings').LANGUAGE_SETTINGS;
    };
    a.prototype.getUseConfirmDialog = function () {
      return !1;
    };
    a.prototype.getUseEditableDialog = function () {
      return !1;
    };
    a.prototype.getGlyph = function () {
      return g('127835');
    };
    function a() {
      h.apply(this, arguments);
    }
    e.exports = a;
  },
  null
);
__d(
  'LtgLanguageSettingsPreferenceEntry',
  ['LtgLanguageSettingsBasePreferenceEntry', 'URI'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g;
    g = babelHelpers.inherits(a, b('LtgLanguageSettingsBasePreferenceEntry'));
    g && g.prototype;
    a.prototype.performAction = function () {
      new (b('URI'))('/settings').addQueryData('tab', 'language').go();
    };
    function a() {
      g.apply(this, arguments);
    }
    e.exports = a;
  },
  null
);
__d(
  'AbstractRating.react',
  ['cx', 'fbt', 'invariant', 'React'],
  function (a, b, c, d, e, f, g, h, i) {
    __p && __p();
    var j;
    j = babelHelpers.inherits(a, b('React').Component);
    j && j.prototype;
    a.prototype.render = function () {
      this.props.rating >= 0 || i(0, undefined);
      this.props.maxRating > 0 || i(0, undefined);
      this.props.maxRating === parseInt(this.props.maxRating, 10) ||
        i(0, undefined);
      this.props.rating <= this.props.maxRating || i(0, undefined);
      var a = [];
      for (var c = 1; c <= this.props.maxRating; c++) a.push(this.$1(c));
      return b('React').createElement(
        'div',
        {
          'aria-label': this.$2(),
          className: '_2dh6',
          onMouseLeave: this.props.onMouseLeave,
          onMouseOut: this.props.onMouseOut,
        },
        a
      );
    };
    a.prototype.$2 = function () {
      return h._('{rating} out of {max rating} rating', [
        h._param('rating', this.props.rating),
        h._param('max rating', this.props.maxRating),
      ]);
    };
    a.prototype.$1 = function (a) {
      var c = Math.min(Math.max(0, this.props.rating - a + 1), 1);
      c = b('React').createElement(
        'div',
        null,
        this.props.emptyItem,
        b('React').createElement(
          'div',
          {
            className: (c !== 1 ? '_1v_j' : '') + (c === 1 ? ' _2t51' : ''),
            style: { width: c * 100 + '%' },
          },
          this.props.filledItem
        )
      );
      return b('React').cloneElement(c, {
        className: '_1v_k',
        key: a,
        onClick: function () {
          return this.props.onClick && this.props.onClick(a);
        }.bind(this),
        onMouseEnter: function () {
          return this.props.onMouseEnter && this.props.onMouseEnter(a);
        }.bind(this),
        onMouseOver: function () {
          return this.props.onMouseOver && this.props.onMouseOver(a);
        }.bind(this),
      });
    };
    function a() {
      j.apply(this, arguments);
    }
    e.exports = a;
  },
  null
);
__d(
  'AbstractRatingInput.react',
  ['AbstractRating.react', 'React'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g;
    c = babelHelpers.inherits(a, b('React').Component);
    g = c && c.prototype;
    function a(a) {
      g.constructor.call(this, a), (this.state = { rating: a.rating || 0 });
    }
    a.prototype.render = function () {
      return b('React').createElement(
        b('AbstractRating.react'),
        babelHelpers['extends']({}, this.props, {
          onClick: this.props.onClick,
          onMouseEnter: function (a) {
            this.setState({ rating: a }),
              this.props.onMouseEnter && this.props.onMouseEnter(a);
          }.bind(this),
          onMouseLeave: function () {
            this.setState({ rating: this.props.rating }),
              this.props.onMouseLeave && this.props.onMouseLeave();
          }.bind(this),
          onMouseOut: function () {
            this.setState({ rating: this.props.rating }),
              this.props.onMouseOut && this.props.onMouseOut();
          }.bind(this),
          onMouseOver: function (a) {
            this.setState({ rating: a }),
              this.props.onMouseOver && this.props.onMouseOver(a);
          }.bind(this),
          rating: this.state.rating,
        })
      );
    };
    a.prototype.componentDidUpdate = function (a) {
      this.props.rating !== a.rating &&
        this.setState({ rating: this.props.rating });
    };
    e.exports = a;
  },
  null
);
__d(
  'StarRatingEmptyStar.react',
  ['cx', 'invariant', 'ix', 'Image.react', 'React', 'asset'],
  function (a, b, c, d, e, f, g, h, i) {
    __p && __p();
    a = function (a) {
      __p && __p();
      var c = null,
        d = a.color ? a.color : 'fig-light-20';
      typeof a.size === 'string' || h(0, undefined);
      switch (d) {
        case 'fig-light-20':
          switch (a.size) {
            case '12':
              c = i('363876');
              break;
            case '16':
              c = i('375633');
              break;
            case '20':
              c = i('369680');
              break;
            case '24':
              c = i('375640');
              break;
          }
          break;
        case 'contextual-recommendations-orange':
          switch (a.size) {
            case '24':
              c = i('94640');
              break;
          }
          break;
      }
      c !== null || h(0, undefined);
      return b('React').createElement(
        b('Image.react'),
        babelHelpers['extends']({}, a, { className: '_55e6', src: c })
      );
    };
    e.exports = a;
  },
  null
);
__d(
  'StarRatingFilledStar.react',
  ['ix', 'cx', 'invariant', 'Image.react', 'React', 'asset', 'fbglyph'],
  function (a, b, c, d, e, f, g, h, i) {
    __p && __p();
    a = function (a) {
      __p && __p();
      var c = null,
        d = a.color ? a.color : 'accent-blue';
      typeof a.size === 'string' || i(0, undefined);
      switch (d) {
        case 'accent-blue':
          switch (a.size) {
            case '12':
              c = g('363875');
              break;
            case '16':
              c = g('375632');
              break;
            case '20':
              c = g('369679');
              break;
            case '24':
              c = g('375639');
              break;
          }
          break;
        case 'fig-blue':
          switch (a.size) {
            case '12':
              c = g('363874');
              break;
            case '16':
              c = g('375631');
              break;
            case '20':
              c = g('369678');
              break;
            case '24':
              c = g('375638');
              break;
          }
          break;
        case 'fds-blue-40':
          switch (a.size) {
            case '12':
              c = g('543761');
              break;
            case '16':
              c = g('543763');
              break;
            case '20':
              c = g('543765');
              break;
            case '24':
              c = g('543767');
              break;
          }
          break;
        case 'fig-white':
          switch (a.size) {
            case '24':
              c = g('375643');
              break;
          }
          break;
        case 'big-yellow':
          switch (a.size) {
            case '24':
              c = g('133222');
              break;
          }
          break;
        case 'artillery-cherry-dark-1':
          switch (a.size) {
            case '12':
              c = g('461119');
              break;
            case '16':
              c = g('461123');
              break;
            case '20':
              c = g('461127');
              break;
            case '24':
              c = g('461131');
              break;
          }
          break;
        case 'artillery-orange':
          switch (a.size) {
            case '12':
              c = g('400766');
              break;
            case '16':
              c = g('400767');
              break;
            case '20':
              c = g('400768');
              break;
            case '24':
              c = g('400769');
              break;
          }
          break;
        case 'artillery-lemon-dark-1':
          switch (a.size) {
            case '12':
              c = g('461120');
              break;
            case '16':
              c = g('461124');
              break;
            case '20':
              c = g('461128');
              break;
            case '24':
              c = g('461132');
              break;
          }
          break;
        case 'artillery-lime-dark-1':
          switch (a.size) {
            case '12':
              c = g('461121');
              break;
            case '16':
              c = g('461125');
              break;
            case '20':
              c = g('461129');
              break;
            case '24':
              c = g('461133');
              break;
          }
          break;
        case 'artillery-lime-dark-3':
          switch (a.size) {
            case '12':
              c = g('461122');
              break;
            case '16':
              c = g('461126');
              break;
            case '20':
              c = g('461130');
              break;
            case '24':
              c = g('461134');
              break;
          }
          break;
      }
      c !== null || i(0, undefined);
      return b('React').createElement(
        b('Image.react'),
        babelHelpers['extends']({}, a, { className: '_55e6', src: c })
      );
    };
    e.exports = a;
  },
  null
);
__d(
  'StarRatingInput.react',
  [
    'AbstractRatingInput.react',
    'React',
    'StarRatingEmptyStar.react',
    'StarRatingFilledStar.react',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g;
    g = babelHelpers.inherits(a, b('React').Component);
    g && g.prototype;
    a.prototype.render = function () {
      return b('React').createElement(
        b('AbstractRatingInput.react'),
        babelHelpers['extends']({}, this.props, {
          emptyItem: b('React').createElement(b('StarRatingEmptyStar.react'), {
            size: this.props.size,
            color: this.props.emptyColor,
          }),
          filledItem: b('React').createElement(
            b('StarRatingFilledStar.react'),
            { size: this.props.size, color: this.props.fillColor }
          ),
        })
      );
    };
    function a() {
      g.apply(this, arguments);
    }
    a.defaultProps = { maxRating: 5, size: '20', color: 'fig-light-20' };
    e.exports = a;
  },
  null
);
__d(
  'LtgRatingTranslationPreference.react',
  [
    'cx',
    'CenteredContainer.react',
    'ContentTranslationStrings',
    'React',
    'StarRatingInput.react',
    'TranslationRating',
    'XUIText.react',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h;
    c = babelHelpers.inherits(a, b('React').Component);
    h = c && c.prototype;
    function a(a) {
      h.constructor.call(this, a),
        (this.state = {
          hoverScore: this.props.score,
          score: this.props.score,
        });
    }
    a.prototype.render = function () {
      var a =
        this.state.hoverScore === b('TranslationRating').UNDEFINED
          ? this.state.score
          : this.state.hoverScore;
      a = this.props.preferenceEntry.coerceRatingType(a);
      return b('React').createElement(
        b('CenteredContainer.react'),
        { vertical: !0 },
        b('React').createElement(
          b('XUIText.react'),
          { size: 'header4' },
          b('ContentTranslationStrings').RATE_TRANSLATION
        ),
        b('React').createElement(
          'div',
          { className: '_2pic _2pin' },
          b('React').createElement(b('StarRatingInput.react'), {
            rating: this.props.score,
            size: '24',
            onClick: function (a) {
              return this.$1(a);
            }.bind(this),
            onMouseOver: function (a) {
              this.setState({
                hoverScore: this.props.preferenceEntry.coerceRatingType(a),
              });
            }.bind(this),
            onMouseOut: function (a) {
              return this.setState({
                hoverScore: b('TranslationRating').UNDEFINED,
              });
            }.bind(this),
          })
        ),
        b('React').createElement(
          b('XUIText.react'),
          { className: '_2tsj' },
          a === b('TranslationRating').UNDEFINED
            ? b('ContentTranslationStrings').CLICK_TO_RATE
            : b('ContentTranslationStrings').getUserFeedbackDescriptionForScore(
                a
              )
        )
      );
    };
    a.prototype.$1 = function (a) {
      this.props.preferenceEntry.setRating(a);
      a = this.props.preferenceEntry.rating;
      this.setState({ score: a });
      this.props.onClick(a);
    };
    a.defaultProps = { score: b('TranslationRating').UNDEFINED };
    e.exports = a;
  },
  null
);
__d(
  'LanguageDialectSetTypes',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      LANGUAGE_DETECTION: 'language_detection',
      MT_SOURCE: 'source',
      MT_TARGET: 'target',
      MLC: 'mlc',
      MT_SOURCE_DARK_TRAFFIC: 'source_dark',
      MT_TARGET_DARK_TRAFFIC: 'target_dark',
    });
  },
  null
);
__d(
  'LtgReportLanguagePreferenceEntryBase',
  [
    'BanzaiLogger',
    'ContentTranslationStrings',
    'CurrentUser',
    'LtgTranslationPreferenceEntryBase',
    'TranslationPreferenceEvent',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g;
    c = babelHelpers.inherits(a, b('LtgTranslationPreferenceEntryBase'));
    g = c && c.prototype;
    function a(a, b) {
      g.constructor.call(this, a),
        (this.haveSeenOriginal = b),
        (this.correctedDialect = 'xx_XX');
    }
    a.prototype.getPreferenceType = function () {
      return b('TranslationPreferenceEvent').DISABLE_AUTO_TRANSLATION;
    };
    a.prototype.getShouldShowPreference = function () {
      return this.haveSeenOriginal;
    };
    a.prototype.getEntryTitle = function () {
      return b('ContentTranslationStrings').getReportLanguage(
        this.translationData.sourceDialectName,
        this.translationData.contentLabelType
      );
    };
    a.prototype.getConfirmDialogTitle = function () {
      return this.getEntryTitle();
    };
    a.prototype.getDialogBody = function () {
      return b('ContentTranslationStrings').getReportLanguageDialogBody(
        this.translationData.sourceDialectName,
        this.translationData.contentLabelType
      );
    };
    a.prototype.getUseConfirmDialog = function () {
      return !0;
    };
    a.prototype.getUseSuccessDialog = function () {
      return !0;
    };
    a.prototype.getSuccessDialogTitle = function () {
      return this.getConfirmDialogTitle();
    };
    a.prototype.getSuccessDialogBody = function () {
      return b('CurrentUser').isWorkUser()
        ? b('ContentTranslationStrings').REPORT_LANGUAGE_THANKS_WORKPLACE
        : b('ContentTranslationStrings').REPORT_LANGUAGE_THANKS_FACEBOOK;
    };
    a.prototype.performAction = function () {
      b('BanzaiLogger').log('LtgLanguageFeedbackLoggerConfig', {
        content_id: this.translationData.targetID,
        corrected_dialect: this.correctedDialect,
      });
    };
    e.exports = a;
  },
  null
);
__d(
  'LtgReportLanguagePreferenceEntry',
  [
    'cx',
    'ContentTranslationStrings',
    'LanguageDialectSearchableDropdown.react',
    'LanguageDialectSetTypes',
    'LtgReportLanguagePreferenceEntryBase',
    'React',
    'TextWithEntities.react',
    'XUIGrayText.react',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h;
    h = babelHelpers.inherits(a, b('LtgReportLanguagePreferenceEntryBase'));
    h && h.prototype;
    a.prototype.getConfirmDialogBody = function () {
      return b('React').createElement(
        'div',
        null,
        b('ContentTranslationStrings').getReportLanguageDialogBody(
          this.translationData.sourceDialectName,
          this.translationData.contentLabelType
        ),
        b('React').createElement(
          b('XUIGrayText.react'),
          { display: 'block', size: 'meta1', className: '_2ph_' },
          b('React').createElement(b('TextWithEntities.react'), {
            text: this.translationData.originalText,
          })
        ),
        b('ContentTranslationStrings').getReportLanguageSelector(
          b('React').createElement(
            b('LanguageDialectSearchableDropdown.react'),
            {
              dialectType: b('LanguageDialectSetTypes').LANGUAGE_DETECTION,
              excludedDialects: [this.translationData.sourceDialect],
              placeholder: b('ContentTranslationStrings').SEARCH,
              initialDialectName: b('ContentTranslationStrings').I_DONT_KNOW,
              onSelect: function (a) {
                this.correctedDialect = a;
              }.bind(this),
            }
          ),
          this.translationData.contentLabelType
        )
      );
    };
    function a() {
      h.apply(this, arguments);
    }
    e.exports = a;
  },
  null
);
__d(
  'LanguageSettingsAction',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      TRANSLATE_INTO: 'translate_into',
      DO_NOT_TRANSLATE: 'do_not_translate',
      DO_NOT_AUTO_TRANSLATE: 'do_not_auto_translate',
      UNDO_NEVER_TRANSLATE: 'undo_never_translate',
      UNDO_DISABLE_AUTO_TRANSLATE: 'undo_disable_auto_translate',
    });
  },
  null
);
__d(
  'TranslationTrigger',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      SEE_TRANSLATION: 'see_translation',
      AUTO_TRANSLATION: 'auto_translation',
      SEE_CONVERSION: 'see_conversion',
      TRANSLATE_ALL: 'translate_all',
      LOGGED_OUT_AUTO_TRANSLATION: 'logged_out_auto_translation',
      SEE_TRANSLATION_WITH_ORIGINAL_TOGGLE:
        'see_translation_with_original_toggle',
      SEE_TRANSLATION_WITHOUT_ORIGINAL_TOGGLE:
        'see_translation_without_original_toggle',
      NONE: 'none',
    });
  },
  null
);
__d(
  'XLtgDisableAutoTranslatePreferenceController',
  ['XController'],
  function (a, b, c, d, e, f) {
    e.exports = b('XController').create(
      '/translation_preferences/disable_auto_translate/',
      {
        dialect: { type: 'String', required: !0 },
        event_trigger: { type: 'Enum', required: !0, enumType: 1 },
      }
    );
  },
  null
);
__d(
  'LtgDisableAutoTranslatePreferenceEntry',
  [
    'ix',
    'ContentTranslationStrings',
    'LanguageSettingsAction',
    'LtgTranslationPreferenceEntryBase',
    'React',
    'TranslationPreferenceEvent',
    'TranslationTrigger',
    'XLtgDisableAutoTranslatePreferenceController',
    'fbglyph',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h;
    h = babelHelpers.inherits(a, b('LtgTranslationPreferenceEntryBase'));
    h && h.prototype;
    a.prototype.getPreferenceType = function () {
      return b('TranslationPreferenceEvent').DISABLE_AUTO_TRANSLATION;
    };
    a.prototype.getShouldShowPreference = function () {
      return (
        this.translationData.trigger ===
        b('TranslationTrigger').AUTO_TRANSLATION
      );
    };
    a.prototype.getEntryTitle = function () {
      return b('ContentTranslationStrings').getDisableAutoTranslate(
        this.translationData.sourceDialectName
      );
    };
    a.prototype.getConfirmDialogTitle = function () {
      return this.getEntryTitle();
    };
    a.prototype.getConfirmDialogBody = function () {
      return b('React').createElement(
        'div',
        null,
        b('React').createElement(
          'div',
          null,
          b('ContentTranslationStrings').getDisableAutoTranslateDialog(
            this.translationData.sourceDialectName,
            this.translationData.contentLabelType
          )
        ),
        b('ContentTranslationStrings').LANGUAGE_SETTINGS_REMINDER
      );
    };
    a.prototype.getUseConfirmDialog = function () {
      return !0;
    };
    a.prototype.getUseSuccessDialog = function () {
      return !0;
    };
    a.prototype.getSuccessDialogTitle = function () {
      return this.getConfirmDialogTitle();
    };
    a.prototype.getSuccessDialogBody = function () {
      return b('ContentTranslationStrings').SETTINGS_SAVED;
    };
    a.prototype.getURIForAsyncAction = function () {
      return b('XLtgDisableAutoTranslatePreferenceController')
        .getURIBuilder()
        .setString('dialect', this.translationData.sourceDialect)
        .setEnum(
          'event_trigger',
          b('LanguageSettingsAction').DO_NOT_AUTO_TRANSLATE
        )
        .getURI();
    };
    a.prototype.getGlyph = function () {
      return g('127914');
    };
    function a() {
      h.apply(this, arguments);
    }
    e.exports = a;
  },
  null
);
__d(
  'XLtgNeverTranslatePreferenceController',
  ['XController'],
  function (a, b, c, d, e, f) {
    e.exports = b('XController').create(
      '/translation_preferences/never_translate/',
      {
        dialect: { type: 'String', required: !0 },
        event_trigger: { type: 'Enum', required: !0, enumType: 1 },
        redirect_uri: { type: 'String' },
      }
    );
  },
  null
);
__d(
  'LtgNeverTranslatePreferenceEntry',
  [
    'ix',
    'ContentTranslationStrings',
    'LanguageSettingsAction',
    'LtgTranslationPreferenceEntryBase',
    'React',
    'TranslationPreferenceEvent',
    'XLtgNeverTranslatePreferenceController',
    'fbglyph',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h;
    h = babelHelpers.inherits(a, b('LtgTranslationPreferenceEntryBase'));
    h && h.prototype;
    a.prototype.getPreferenceType = function () {
      return b('TranslationPreferenceEvent').DISABLE_TRANSLATION;
    };
    a.prototype.getShouldShowPreference = function () {
      return !0;
    };
    a.prototype.getEntryTitle = function () {
      return b('ContentTranslationStrings').getNeverTranslate(
        this.translationData.sourceDialectName
      );
    };
    a.prototype.getEntrySubtitle = function () {
      return b('ContentTranslationStrings').getTranslatedFromTo(
        this.translationData.sourceDialectName,
        this.translationData.targetDialectName
      );
    };
    a.prototype.getConfirmDialogTitle = function () {
      return this.getEntryTitle();
    };
    a.prototype.getConfirmDialogBody = function () {
      return b('React').createElement(
        'div',
        null,
        b('React').createElement(
          'div',
          null,
          b('ContentTranslationStrings').getNeverTranslateDialog(
            this.translationData.sourceDialectName,
            this.translationData.contentLabelType
          )
        ),
        b('ContentTranslationStrings').LANGUAGE_SETTINGS_REMINDER
      );
    };
    a.prototype.getUseConfirmDialog = function () {
      return !0;
    };
    a.prototype.getUseSuccessDialog = function () {
      return !0;
    };
    a.prototype.getSuccessDialogTitle = function () {
      return this.getConfirmDialogTitle();
    };
    a.prototype.getSuccessDialogBody = function () {
      return b('ContentTranslationStrings').SETTINGS_SAVED;
    };
    a.prototype.getURIForAsyncAction = function () {
      return b('XLtgNeverTranslatePreferenceController')
        .getURIBuilder()
        .setString('dialect', this.translationData.sourceDialect)
        .setEnum('event_trigger', b('LanguageSettingsAction').DO_NOT_TRANSLATE)
        .getURI();
    };
    a.prototype.getGlyph = function () {
      return g('127524');
    };
    function a() {
      h.apply(this, arguments);
    }
    e.exports = a;
  },
  null
);
__d(
  'XLtgTranslationFeedbackController',
  ['XController'],
  function (a, b, c, d, e, f) {
    e.exports = b('XController').create('/translation/feedback/', {
      target_id: { type: 'FBID', required: !0 },
      request_id: { type: 'String', required: !0 },
      trigger: { type: 'Enum', required: !0, enumType: 1 },
      rating: { type: 'Int', required: !0 },
      original_text: { type: 'String' },
      translated_text: { type: 'String' },
      source_dialect: { type: 'String' },
      target_dialect: { type: 'String' },
    });
  },
  null
);
__d(
  'LtgRatingPreferenceEntry',
  [
    'ContentTranslationStrings',
    'LtgTranslationPreferenceEntryBase',
    'TranslationPreferenceEvent',
    'TranslationRating',
    'XLtgTranslationFeedbackController',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g;
    c = babelHelpers.inherits(a, b('LtgTranslationPreferenceEntryBase'));
    g = c && c.prototype;
    function a(a, b) {
      g.constructor.call(this, a), this.setRating(b);
    }
    a.prototype.getPreferenceType = function () {
      return b('TranslationPreferenceEvent').RATE_TRANSLATION;
    };
    a.prototype.getEntryTitle = function () {
      return b('ContentTranslationStrings').RATE_TRANSLATION;
    };
    a.prototype.getURIForAsyncAction = function () {
      return b('XLtgTranslationFeedbackController')
        .getURIBuilder()
        .setEnum('trigger', this.translationData.trigger)
        .setFBID('target_id', this.translationData.targetID)
        .setString('request_id', this.translationData.requestID)
        .setInt('rating', this.rating)
        .setString('source_dialect', this.translationData.sourceDialect)
        .setString('target_dialect', this.translationData.targetDialect)
        .setString('original_text', this.translationData.originalText)
        .setString('translated_text', this.translationData.translatedText.text)
        .getURI();
    };
    a.prototype.coerceRatingType = function (a) {
      switch (a) {
        case 1:
          return b('TranslationRating').VERY_BAD;
        case 2:
          return b('TranslationRating').BAD;
        case 3:
          return b('TranslationRating').OK;
        case 4:
          return b('TranslationRating').GOOD;
        case 5:
          return b('TranslationRating').VERY_GOOD;
        default:
          return b('TranslationRating').UNDEFINED;
      }
    };
    a.prototype.setRating = function (a) {
      this.rating = this.coerceRatingType(a);
    };
    e.exports = a;
  },
  null
);
__d(
  'LtgTranslationUtils',
  ['TranslationTrigger'],
  function (a, b, c, d, e, f) {
    a = {
      hasSeeOriginalOption: function (a) {
        return (
          a === b('TranslationTrigger').AUTO_TRANSLATION ||
          a === b('TranslationTrigger').TRANSLATE_ALL ||
          a === b('TranslationTrigger').SEE_TRANSLATION_WITH_ORIGINAL_TOGGLE
        );
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'LtgSeeOriginalPreferenceEntry',
  [
    'ix',
    'ContentTranslationStrings',
    'LtgTranslationPreferenceEntryBase',
    'LtgTranslationUtils',
    'TranslationPreferenceEvent',
    'fbglyph',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h;
    c = babelHelpers.inherits(a, b('LtgTranslationPreferenceEntryBase'));
    h = c && c.prototype;
    function a(a, b, c) {
      h.constructor.call(this, a),
        (this.isShowingOriginal = b),
        (this.seeOriginalAction = c);
    }
    a.prototype.getPreferenceType = function () {
      return this.isShowingOriginal
        ? b('TranslationPreferenceEvent').HIDE_ORIGINAL
        : b('TranslationPreferenceEvent').SEE_ORIGINAL;
    };
    a.prototype.getShouldShowPreference = function () {
      return b('LtgTranslationUtils').hasSeeOriginalOption(
        this.translationData.trigger
      );
    };
    a.prototype.getEntryTitle = function () {
      return this.isShowingOriginal
        ? b('ContentTranslationStrings').HIDE_ORIGINAL
        : b('ContentTranslationStrings').SEE_ORIGINAL;
    };
    a.prototype.getUseConfirmDialog = function () {
      return !1;
    };
    a.prototype.getUseEditableDialog = function () {
      return !1;
    };
    a.prototype.getGlyph = function () {
      return g('128337');
    };
    a.prototype.performAction = function () {
      this.seeOriginalAction && this.seeOriginalAction();
    };
    e.exports = a;
  },
  null
);
__d(
  'LtgTranslationPreferencesTypedLogger',
  ['Banzai', 'GeneratedLoggerUtils', 'nullthrows'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a() {
      this.clear();
    }
    a.prototype.log = function () {
      b('GeneratedLoggerUtils').log(
        'logger:LtgTranslationPreferencesLoggerConfig',
        this.$1,
        b('Banzai').BASIC
      );
    };
    a.prototype.logVital = function () {
      b('GeneratedLoggerUtils').log(
        'logger:LtgTranslationPreferencesLoggerConfig',
        this.$1,
        b('Banzai').VITAL
      );
    };
    a.prototype.logImmediately = function () {
      b('GeneratedLoggerUtils').log(
        'logger:LtgTranslationPreferencesLoggerConfig',
        this.$1,
        { signal: !0 }
      );
    };
    a.prototype.clear = function () {
      this.$1 = {};
      return this;
    };
    a.prototype.getData = function () {
      return babelHelpers['extends']({}, this.$1);
    };
    a.prototype.updateData = function (a) {
      this.$1 = babelHelpers['extends']({}, this.$1, a);
      return this;
    };
    a.prototype.setClickType = function (a) {
      this.$1.click_type = a;
      return this;
    };
    a.prototype.setContentID = function (a) {
      this.$1.content_id = a;
      return this;
    };
    a.prototype.setTranslationEntID = function (a) {
      this.$1.translation_ent_id = a;
      return this;
    };
    a.prototype.setTranslationRequestID = function (a) {
      this.$1.translation_request_id = a;
      return this;
    };
    a.prototype.setTranslationTrigger = function (a) {
      this.$1.translation_trigger = a;
      return this;
    };
    a.prototype.setVC = function (a) {
      this.$1.vc = a;
      return this;
    };
    c = {
      click_type: !0,
      content_id: !0,
      translation_ent_id: !0,
      translation_request_id: !0,
      translation_trigger: !0,
      vc: !0,
    };
    e.exports = a;
  },
  null
);
__d(
  'ReactComponentWithPureRenderMixin',
  ['shallowCompare'],
  function (a, b, c, d, e, f) {
    a = {
      shouldComponentUpdate: function (a, c) {
        return b('shallowCompare')(this, a, c);
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'LtgTranslationPreferences.react',
  [
    'cx',
    'ix',
    'AsyncRequest',
    'ContentTranslationStrings',
    'CSS',
    'Image.react',
    'Link.react',
    'LtgDisableAutoTranslatePreferenceEntry',
    'LtgEditTranslationPreferenceEntry',
    'LtgLanguageSettingsPreferenceEntry',
    'LtgNeverTranslatePreferenceEntry',
    'LtgRatingPreferenceEntry',
    'LtgRatingTranslationPreference.react',
    'LtgReportLanguagePreferenceEntry',
    'LtgSeeOriginalPreferenceEntry',
    'LtgTranslationPreferencesTypedLogger',
    'LtgTranslationUtils',
    'MenuSeparator.react',
    'Middot.react',
    'PopoverMenu.react',
    'React',
    'ReactComponentWithPureRenderMixin',
    'ReactXUIMenu',
    'TranslationRating',
    'SimpleXUIDialog',
    'TranslationPreferenceEvent',
    'TranslationTrigger',
    'XUIDialogButton.react',
    'XUIDialogCancelButton.react',
    'XUIMenuStaticItem.react',
    'classWithMixins',
    'highlight',
    'mixin',
  ],
  function (a, b, c, d, e, f, g, h) {
    __p && __p();
    var i,
      j = b('ReactXUIMenu').Item,
      k = 'separator',
      l = [
        b('TranslationPreferenceEvent').RATE_TRANSLATION,
        k,
        b('TranslationPreferenceEvent').SEE_ORIGINAL,
        b('TranslationPreferenceEvent').DISABLE_TRANSLATION,
        b('TranslationPreferenceEvent').DISABLE_AUTO_TRANSLATION,
        b('TranslationPreferenceEvent').EDIT_TRANSLATION,
        b('TranslationPreferenceEvent').REPORT_LANGUAGE,
        b('TranslationPreferenceEvent').LANGUAGE_SETTINGS,
      ];
    c = babelHelpers.inherits(
      a,
      b('classWithMixins')(
        b('React').Component,
        b('mixin')(b('ReactComponentWithPureRenderMixin'))
      )
    );
    i = c && c.prototype;
    function a(a) {
      i.constructor.call(this, a);
      a = this.props.translationData.trigger;
      this.haveSeenOriginal = a !== b('TranslationTrigger').AUTO_TRANSLATION;
      this.state = {
        rating: b('TranslationRating').UNDEFINED,
        isShowingOriginal:
          a === b('TranslationTrigger').SEE_TRANSLATION ||
          a === b('TranslationTrigger').SEE_TRANSLATION_WITH_ORIGINAL_TOGGLE,
      };
    }
    a.prototype.$LtgTranslationPreferences1 = function (a) {
      __p && __p();
      var c = null;
      switch (a) {
        case b('TranslationPreferenceEvent').RATE_TRANSLATION:
          c = new (b('LtgRatingPreferenceEntry'))(
            this.props.translationData,
            this.state.rating
          );
          return b('React').createElement(
            b('XUIMenuStaticItem.react'),
            { key: 'rating' },
            b('React').createElement(
              b('LtgRatingTranslationPreference.react'),
              {
                onClick: function (a) {
                  this.setState({ rating: a }),
                    this.$LtgTranslationPreferences2(c);
                }.bind(this),
                score: this.state.rating,
                translationData: this.props.translationData,
                preferenceEntry: c,
              }
            )
          );
        case k:
          return b('React').createElement(b('MenuSeparator.react'), {
            key: 'separator',
          });
        case b('TranslationPreferenceEvent').SEE_ORIGINAL:
          this.props.shouldShowSeeOriginalInDropdown &&
            (c = new (b('LtgSeeOriginalPreferenceEntry'))(
              this.props.translationData,
              this.state.isShowingOriginal,
              function () {
                return this.$LtgTranslationPreferences3();
              }.bind(this)
            ));
          break;
        case b('TranslationPreferenceEvent').DISABLE_TRANSLATION:
          c = new (b('LtgNeverTranslatePreferenceEntry'))(
            this.props.translationData
          );
          break;
        case b('TranslationPreferenceEvent').DISABLE_AUTO_TRANSLATION:
          c = new (b('LtgDisableAutoTranslatePreferenceEntry'))(
            this.props.translationData
          );
          break;
        case b('TranslationPreferenceEvent').LANGUAGE_SETTINGS:
          c = new (b('LtgLanguageSettingsPreferenceEntry'))(
            this.props.translationData
          );
          break;
        case b('TranslationPreferenceEvent').EDIT_TRANSLATION:
          c = new (b('LtgEditTranslationPreferenceEntry'))(
            this.props.translationData
          );
          break;
        case b('TranslationPreferenceEvent').REPORT_LANGUAGE:
          c = new (b('LtgReportLanguagePreferenceEntry'))(
            this.props.translationData,
            this.haveSeenOriginal
          );
          this.haveSeenOriginal = !0;
          break;
      }
      return c === null || !c.getShouldShowPreference()
        ? null
        : b('React').createElement(
            j,
            { key: a, value: c },
            c && c.getEntryTitle()
          );
    };
    a.prototype.$LtgTranslationPreferences4 = function (a, b) {
      if (!b.item.getValue) return;
      a = b.item.getValue();
      this.$LtgTranslationPreferences2(a);
    };
    a.prototype.$LtgTranslationPreferences2 = function (a) {
      if (!a) return;
      a.getUseConfirmDialog()
        ? this.$LtgTranslationPreferences5(a)
        : this.$LtgTranslationPreferences6(a);
      a.log();
    };
    a.prototype.$LtgTranslationPreferences5 = function (a) {
      b('SimpleXUIDialog').showEx(
        a.getConfirmDialogBody(),
        a.getConfirmDialogTitle(),
        b('React').createElement(
          'div',
          null,
          b('React').createElement(b('XUIDialogCancelButton.react'), null),
          b('React').createElement(b('XUIDialogButton.react'), {
            action: 'cancel',
            label: b('ContentTranslationStrings').SUBMIT,
            use: 'confirm',
            onClick: function () {
              return this.$LtgTranslationPreferences6(a);
            }.bind(this),
          })
        )
      );
    };
    a.prototype.$LtgTranslationPreferences7 = function (a) {
      b('SimpleXUIDialog').show(
        a.getSuccessDialogBody(),
        a.getSuccessDialogTitle()
      );
    };
    a.prototype.$LtgTranslationPreferences6 = function (a) {
      var c = a.getURIForAsyncAction();
      c !== null
        ? new (b('AsyncRequest'))().setURI(c).send()
        : a.performAction();
      a.getUseSuccessDialog() && this.$LtgTranslationPreferences7(a);
    };
    a.prototype.$LtgTranslationPreferences3 = function () {
      this.props.originalMessage &&
        (this.state.isShowingOriginal
          ? b('CSS').hide(this.props.originalMessage)
          : (b('CSS').show(this.props.originalMessage),
            b('highlight')(this.props.originalMessage))),
        this.setState({ isShowingOriginal: !this.state.isShowingOriginal }),
        this.props.onToggleOriginal && this.props.onToggleOriginal(),
        this.$LtgTranslationPreferences8(
          this.state.isShowingOriginal
            ? b('TranslationPreferenceEvent').HIDE_ORIGINAL
            : b('TranslationPreferenceEvent').SEE_ORIGINAL
        );
    };
    a.prototype.$LtgTranslationPreferences9 = function () {
      this.$LtgTranslationPreferences8(
        b('TranslationPreferenceEvent').TRANSLATION_PREFERENCES
      );
    };
    a.prototype.render = function () {
      __p && __p();
      var a = l.map(
        function (a) {
          return this.$LtgTranslationPreferences1(a);
        }.bind(this)
      );
      a = b('React').createElement(
        b('ReactXUIMenu'),
        {
          onItemClick: function (a, b) {
            return this.$LtgTranslationPreferences4(a, b);
          }.bind(this),
        },
        a
      );
      var c = [];
      c.push(
        b('React').createElement(
          b('PopoverMenu.react'),
          { key: 'gear', menu: a },
          b('React').createElement(
            b('Link.react'),
            {
              onClick: function () {
                return this.$LtgTranslationPreferences9();
              }.bind(this),
            },
            this.props.isGray
              ? b('React').createElement(b('Image.react'), {
                  className: '_3-8w',
                  src: h('99675'),
                })
              : b('React').createElement(b('Image.react'), {
                  className: '_3-8w',
                  src: h('27290'),
                })
          )
        )
      );
      var d = this.props.isGray ? '_1u4h' : null;
      b('LtgTranslationUtils').hasSeeOriginalOption(
        this.props.translationData.trigger
      ) &&
        !this.props.shouldShowSeeOriginalInDropdown &&
        c.push(
          b('React').createElement(
            b('Link.react'),
            {
              key: 'seeOriginal',
              className: (this.props.isGray ? '_1u4h' : '') + ' _h90',
              onClick: function () {
                return this.$LtgTranslationPreferences3();
              }.bind(this),
            },
            this.state.isShowingOriginal
              ? b('ContentTranslationStrings').HIDE_ORIGINAL
              : b('ContentTranslationStrings').SEE_ORIGINAL
          )
        );
      c.push(
        b('React').createElement(
          b('PopoverMenu.react'),
          { key: 'rating', menu: a },
          b('React').createElement(
            b('Link.react'),
            {
              onClick: function () {
                return this.$LtgTranslationPreferences9();
              }.bind(this),
              className: d,
            },
            this.props.shouldShowTranslatedFromLanguage
              ? b('ContentTranslationStrings').getTranslatedFrom(
                  this.props.translationData.sourceDialectName
                )
              : b('ContentTranslationStrings').RATE_TRANSLATION
          )
        )
      );
      var e = [];
      c.forEach(function (a, c) {
        c !== 0 &&
          e.push(
            b('React').createElement(b('Middot.react'), {
              key: c,
              className: d,
            })
          ),
          e.push(a);
      });
      return b('React').createElement('span', { className: '_5pio' }, e);
    };
    a.prototype.$LtgTranslationPreferences8 = function (event) {
      new (b('LtgTranslationPreferencesTypedLogger'))()
        .setTranslationEntID(this.props.translationData.translationID)
        .setContentID(this.props.translationData.targetID)
        .setTranslationRequestID(this.props.translationData.requestID)
        .setTranslationTrigger(this.props.translationData.trigger)
        .setClickType(event)
        .log();
    };
    a.defaultProps = {
      isGray: !1,
      shouldShowTranslatedFromLanguage: !1,
      originalMessage: null,
      translateAllTargetID: '',
    };
    e.exports = a;
  },
  null
);
