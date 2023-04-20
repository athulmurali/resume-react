if (self.CavalryLogger) {
  CavalryLogger.start_js(['47MZz']);
}

__d(
  'ActorURIConfig',
  [],
  function (a, b, c, d, e, f) {
    e.exports = { PARAMETER_ACTOR: 'av', ENCRYPTED_PARAMETER_ACTOR: 'eav' };
  },
  null
);
__d(
  'EmojiStaticConfig',
  [],
  function (a, b, c, d, e, f) {
    e.exports = {
      checksumBase: 317426846,
      fileExt: '.png',
      supportedSizes: {
        16: 'DP16',
        18: 'DP18',
        20: 'DP20',
        24: 'DP24',
        28: 'DP28',
        30: 'DP30',
        32: 'DP32',
        56: 'DP56',
        64: 'DP64',
        72: 'DP72',
        96: 'DP96',
        112: 'DP112',
        128: 'DP128',
        256: 'DP256',
      },
      types: {
        FBEMOJI: 'f',
        FB_EMOJI_EXTENDED: 'e',
        MESSENGER: 'z',
        UNICODE: 'u',
      },
      sizeMap: {
        dp16: 16,
        dp18: 18,
        dp20: 20,
        dp24: 24,
        dp28: 28,
        dp30: 30,
        dp32: 32,
        dp36: 36,
        dp56: 56,
        dp64: 64,
        dp72: 72,
        dp96: 96,
        dp112: 112,
        dp128: 128,
        dp256: 256,
        xsmall: 16,
        small: 32,
        medium: 64,
        large: 128,
      },
    };
  },
  null
);
__d(
  'XUIButton.react',
  ['cx', 'AbstractButton.react', 'React', 'joinClasses'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h;
    c = b('React').PropTypes;
    var i = 'medium';
    h = babelHelpers.inherits(a, b('React').Component);
    h && h.prototype;
    a.getButtonSize = function (a) {
      return a.size || i;
    };
    a.prototype.render = function () {
      var a = this.props,
        c = a.use,
        d = a.size,
        e = a.borderShade,
        f = a.suppressed;
      a = babelHelpers.objectWithoutProperties(a, [
        'use',
        'size',
        'borderShade',
        'suppressed',
      ]);
      d =
        '_4jy0' +
        (d === 'small' ? ' _517i' : '') +
        (d === 'medium' ? ' _4jy3' : '') +
        (d === 'large' ? ' _4jy4' : '') +
        (d === 'xlarge' ? ' _4jy5' : '') +
        (d === 'xxlarge' ? ' _4jy6' : '') +
        (c === 'default' ? ' _517h' : '') +
        (c === 'confirm' ? ' _4jy1' : '') +
        (c === 'special' ? ' _4jy2' : '') +
        (e === 'light' ? ' _51sy' : '') +
        (e === 'dark' ? ' _9c6' : '') +
        (f ? ' _59pe' : '') +
        (c === 'confirm' || c === 'special' ? ' selected' : '');
      return b('React').createElement(
        b('AbstractButton.react'),
        babelHelpers['extends']({}, a, {
          label: this.props.label,
          className: b('joinClasses')(this.props.className, d),
        })
      );
    };
    function a() {
      h.apply(this, arguments);
    }
    a.defaultProps = {
      use: 'default',
      size: i,
      borderShade: 'light',
      suppressed: !1,
    };
    a.propTypes = {
      use: c.oneOf(['default', 'special', 'confirm']),
      size: c.oneOf(['small', 'medium', 'large', 'xlarge', 'xxlarge']),
      borderShade: c.oneOf(['light', 'dark']),
      suppressed: c.bool,
    };
    e.exports = a;
  },
  null
);
__d(
  'XUIDialogButton.react',
  ['cx', 'React', 'XUIButton.react', 'joinClasses'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h;
    h = babelHelpers.inherits(a, b('React').Component);
    h && h.prototype;
    a.prototype.render = function () {
      var a = this.props.action,
        c =
          (a === 'confirm' ? 'layerConfirm' : '') +
          (a === 'cancel' ? ' layerCancel' : '') +
          (a === 'button' ? ' layerButton' : ''),
        d = this.props.href;
      a === 'cancel'
        ? (d = '#')
        : a === 'button' && (d == null || d === '') && (d = '#');
      return b('React').createElement(
        b('XUIButton.react'),
        babelHelpers['extends']({}, this.props, {
          className: b('joinClasses')(this.props.className, c),
          href: d,
          role: 'button',
        })
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
  'XUIDialogOkayButton.react',
  ['cx', 'fbt', 'React', 'XUIDialogButton.react', 'joinClasses'],
  function (a, b, c, d, e, f, g, h) {
    __p && __p();
    var i;
    c = b('React').PropTypes;
    i = babelHelpers.inherits(a, b('React').Component);
    i && i.prototype;
    a.prototype.render = function () {
      return b('React').createElement(
        b('XUIDialogButton.react'),
        babelHelpers['extends']({}, this.props, {
          className: b('joinClasses')(this.props.className, '_2z1w'),
          action: this.props.action,
          label: h._('OK'),
        })
      );
    };
    function a() {
      i.apply(this, arguments);
    }
    a.propTypes = {
      action: c.oneOf(['confirm', 'cancel', 'button']).isRequired,
    };
    e.exports = a;
  },
  null
);
__d(
  'XUIDialogBody.react',
  ['cx', 'React', 'XUIText.react', 'joinClasses'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h;
    h = babelHelpers.inherits(a, b('React').Component);
    h && h.prototype;
    a.prototype.render = function () {
      var a = '_4-i2' + (this.props.useCustomPadding ? '' : ' _pig');
      return b('React').createElement(
        b('XUIText.react'),
        babelHelpers['extends']({}, this.props, {
          className: b('joinClasses')(this.props.className, a),
          display: 'block',
          size: this.props.fontSize,
        }),
        this.props.children
      );
    };
    function a() {
      h.apply(this, arguments);
    }
    a.defaultProps = { fontSize: 'medium' };
    e.exports = a;
  },
  null
);
__d(
  'XUIOverlayFooter.react',
  ['cx', 'React', 'joinClasses'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h;
    h = babelHelpers.inherits(a, b('React').Component);
    h && h.prototype;
    a.prototype.render = function () {
      return b('React').createElement(
        'div',
        babelHelpers['extends']({}, this.props, {
          className: b('joinClasses')(
            this.props.className,
            '_5lnf uiOverlayFooter'
          ),
        }),
        this.props.children
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
  'XUIDialogFooter.react',
  [
    'cx',
    'LeftRight.react',
    'React',
    'XUIOverlayFooter.react',
    'XUIText.react',
    'joinClasses',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h;
    c = b('React').PropTypes;
    h = babelHelpers.inherits(a, b('React').Component);
    h && h.prototype;
    a.prototype.render = function () {
      var a = '_5a8u' + (this.props.fullBleedBorder ? ' _27qq' : ''),
        c = this.props,
        d = c.children,
        e = c.leftContent;
      c = babelHelpers.objectWithoutProperties(c, ['children', 'leftContent']);
      return b('React').createElement(
        b('XUIOverlayFooter.react'),
        babelHelpers['extends']({}, c, {
          className: b('joinClasses')(this.props.className, a),
        }),
        b('React').createElement(
          b('XUIText.react'),
          { display: 'block', fontSize: this.props.fontSize },
          b('React').createElement(
            b('LeftRight.react'),
            null,
            b('React').createElement('div', null, e),
            b('React').createElement('div', null, d)
          )
        )
      );
    };
    function a() {
      h.apply(this, arguments);
    }
    a.propTypes = {
      fontSize: c.oneOf(['medium', 'inherit']),
      fullBleedBorder: c.bool,
      leftContent: c.object,
    };
    a.defaultProps = { fontSize: 'medium' };
    e.exports = a;
  },
  null
);
__d(
  'XUIDialogTitle.react',
  [
    'cx',
    'fbt',
    'LeftRight.react',
    'React',
    'XUICloseButton.react',
    'joinClasses',
  ],
  function (a, b, c, d, e, f, g, h) {
    __p && __p();
    var i;
    i = babelHelpers.inherits(a, b('React').Component);
    i && i.prototype;
    a.prototype.render = function () {
      var a = null,
        c = this.props,
        d = c.closeButtonText,
        e = c.showCloseButton;
      c = babelHelpers.objectWithoutProperties(c, [
        'closeButtonText',
        'showCloseButton',
      ]);
      e &&
        (a = b('React').createElement(b('XUICloseButton.react'), {
          label: d,
          className: 'layerCancel _51-t',
        }));
      d = b('React').Children.toArray(this.props.children);
      return b('React').createElement(
        'div',
        babelHelpers['extends']({}, c, {
          className: b('joinClasses')(
            this.props.className,
            '_4-i0' + (e ? ' _2gb3' : '')
          ),
        }),
        b('React').createElement(
          b('LeftRight.react'),
          null,
          b('React').createElement(
            'h3',
            {
              className: '_52c9',
              'data-hover': 'tooltip',
              'data-tooltip-display': 'overflow',
            },
            d[0]
          ),
          b('React').createElement('div', { className: '_51-u' }, d.slice(1), a)
        )
      );
    };
    function a() {
      i.apply(this, arguments);
    }
    a.defaultProps = { closeButtonText: h._('Close'), showCloseButton: !0 };
    e.exports = a;
  },
  null
);
__d(
  'CrowdsourcedTranslationPlatformActionType',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      CLICK_ADD_TRANSLATION_MODULE: 'click_add_translation_module',
      CLICK_ATTACHMENT: 'click_attachment',
      CLICK_CANCEL_TRANSLATION: 'click_cancel_translation',
      CLICK_EDIT_SETTINGS: 'click_edit_settings',
      CLICK_SUBMIT_TRANSLATION: 'click_submit_translation',
      SWITCH_TO_TRANSLATE_CONTENT: 'switch_to_translate_content',
      SWITCH_TO_TRANSLATE_INTERFACE: 'switch_to_translate_interface',
      VISITED: 'visited',
    });
  },
  null
);
__d(
  'CrowdsourcedTranslationPlatformInitiativeType',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      NATIONAL: 'national',
      TRANSLATE_TO: 'translate_to',
    });
  },
  null
);
__d(
  'LtgCrowdsourcedTranslationsPlatformTypedLogger',
  ['Banzai', 'GeneratedLoggerUtils', 'nullthrows'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a() {
      this.clear();
    }
    a.prototype.log = function () {
      b('GeneratedLoggerUtils').log(
        'logger:LtgCrowdsourcedTranslationsPlatformLoggerConfig',
        this.$1,
        b('Banzai').BASIC
      );
    };
    a.prototype.logVital = function () {
      b('GeneratedLoggerUtils').log(
        'logger:LtgCrowdsourcedTranslationsPlatformLoggerConfig',
        this.$1,
        b('Banzai').VITAL
      );
    };
    a.prototype.logImmediately = function () {
      b('GeneratedLoggerUtils').log(
        'logger:LtgCrowdsourcedTranslationsPlatformLoggerConfig',
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
    a.prototype.setEvent = function (a) {
      this.$1.event = a;
      return this;
    };
    a.prototype.setFbid = function (a) {
      this.$1.fbid = a;
      return this;
    };
    a.prototype.setInitiative = function (a) {
      this.$1.initiative = a;
      return this;
    };
    a.prototype.setSourceDialects = function (a) {
      this.$1.source_dialects = b('GeneratedLoggerUtils').serializeVector(a);
      return this;
    };
    a.prototype.setTargetDialect = function (a) {
      this.$1.target_dialect = a;
      return this;
    };
    a.prototype.setVC = function (a) {
      this.$1.vc = a;
      return this;
    };
    c = {
      event: !0,
      fbid: !0,
      initiative: !0,
      source_dialects: !0,
      target_dialect: !0,
      vc: !0,
    };
    e.exports = a;
  },
  null
);
__d(
  'DialogPosition',
  ['Vector'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = 40,
      h;
    a = {
      calculateTopMargin: function (a, c, d, e) {
        __p && __p();
        d === void 0 && (d = null);
        e === void 0 && (e = !1);
        var f = b('Vector').getViewportDimensions(),
          i = !1;
        e && d && (i = d + c > f.y);
        if (d && !i) return d;
        if (h) return h;
        e = Math.floor(((f.x + a) * (f.y - c)) / (4 * f.x));
        return Math.max(e, g);
      },
      setFixedTopMargin: function (a) {
        h = a;
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'TabIsolation',
  ['Event', 'Focus', 'Keys', 'TabbableElements', 'containsNode'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = [],
      h = 0;
    function a(a) {
      (this.$3 = a), (this.$1 = null), (this.$2 = h++);
    }
    a.prototype.enable = function () {
      g.unshift(this.$2),
        (this.$1 = b('Event').listen(
          window,
          'keydown',
          function (a) {
            g[0] === this.$2 && this.$4(a);
          }.bind(this),
          b('Event').Priority.URGENT
        ));
    };
    a.prototype.disable = function () {
      if (this.$1) {
        var a = g.indexOf(this.$2);
        a > -1 && g.splice(a, 1);
        this.$1.remove();
        this.$1 = null;
      }
    };
    a.prototype.$4 = function (a) {
      __p && __p();
      if (b('Event').getKeyCode(a) !== b('Keys').TAB) return;
      var c = a.getTarget();
      if (!c) return;
      var d = b('TabbableElements').find(this.$3),
        e = d[0];
      d = d[d.length - 1];
      var f = a.getModifiers();
      f = f.shift;
      f && c === e
        ? (a.preventDefault(), b('Focus').set(d))
        : ((!f && c === d) || !b('containsNode')(this.$3, c)) &&
          (a.preventDefault(), b('Focus').set(e));
    };
    e.exports = a;
  },
  null
);
__d(
  'LayerTabIsolation',
  ['TabIsolation'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a) {
      (this._layer = a), (this._tabIsolation = null);
    }
    a.prototype.enable = function () {
      (this._tabIsolation = new (b('TabIsolation'))(this._layer.getRoot())),
        (this._subscriptions = [
          this._layer.subscribe(
            'show',
            this._tabIsolation.enable.bind(this._tabIsolation)
          ),
          this._layer.subscribe(
            'hide',
            this._tabIsolation.disable.bind(this._tabIsolation)
          ),
        ]);
    };
    a.prototype.disable = function () {
      while (this._subscriptions.length)
        this._subscriptions.pop().unsubscribe();
      this._tabIsolation.disable();
      this._tabIsolation = null;
    };
    Object.assign(a.prototype, { _subscriptions: [] });
    e.exports = a;
  },
  null
);
__d(
  'LayerTogglerContext',
  ['Toggler'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a) {
      this._layer = a;
    }
    a.prototype.enable = function () {
      (this._root = this._layer.getRoot()),
        b('Toggler').createInstance(this._root).setSticky(!1);
    };
    a.prototype.disable = function () {
      b('Toggler').destroyInstance(this._root), (this._root = null);
    };
    e.exports = a;
  },
  null
);
__d(
  'DialogX',
  [
    'cx',
    'fbt',
    'Arbiter',
    'CSS',
    'DialogPosition',
    'DOMQuery',
    'Event',
    'JSXDOM',
    'Layer',
    'LayerAutoFocus',
    'LayerButtons',
    'LayerFormHooks',
    'LayerRefocusOnHide',
    'LayerTabIsolation',
    'LayerTogglerContext',
    'ModalLayer',
    'Style',
    'Vector',
    'debounce',
    'getOrCreateDOMID',
    'goURI',
    'shield',
  ],
  function (a, b, c, d, e, f, g, h) {
    __p && __p();
    var i, j;
    i = babelHelpers.inherits(a, b('Layer'));
    j = i && i.prototype;
    a.prototype._configure = function (a, c) {
      __p && __p();
      j._configure.call(this, a, c);
      b('CSS').addClass(this.getRoot(), '_4-hy');
      if (a.autohide)
        var d = this.subscribe(
          'show',
          function () {
            d.unsubscribe(),
              setTimeout(b('shield')(this.hide, this), a.autohide);
          }.bind(this)
        );
      if (a.redirectURI)
        var e = this.subscribe('hide', function () {
          e.unsubscribe(), b('goURI')(a.redirectURI);
        });
      this._fixedTopPosition = a.fixedTopPosition;
      this._ignoreFixedTopInShortViewport = a.ignoreFixedTopInShortViewport;
    };
    a.prototype._getDefaultBehaviors = function () {
      return j._getDefaultBehaviors
        .call(this)
        .concat([
          k,
          b('ModalLayer'),
          b('LayerAutoFocus'),
          b('LayerButtons'),
          b('LayerFormHooks'),
          b('LayerTabIsolation'),
          b('LayerTogglerContext'),
          b('LayerRefocusOnHide'),
        ]);
    };
    a.prototype._buildWrapper = function (a, c) {
      __p && __p();
      var d = a.xui ? '_4t2a' : '_t',
        e = a.xui ? '_59s7' : '_1yv';
      this._innerContent = b('JSXDOM').div(null, c);
      c = { className: e, role: 'dialog' };
      if (a.labelledBy) c['aria-labelledby'] = a.labelledBy;
      else if (a.label) c['aria-label'] = a.label;
      else if (a.titleID) c['aria-labelledby'] = a.titleID;
      else if (a.titleClass) {
        e = b('DOMQuery').scry(this._innerContent, a.titleClass);
        if (e.length) {
          e = b('getOrCreateDOMID')(e[0]);
          c['aria-labelledby'] = e;
        } else c['aria-label'] = this._getDefaultLabel();
      } else c['aria-label'] = this._getDefaultLabel();
      e = { className: d };
      a['data-testid'] && (e['data-testid'] = a['data-testid']);
      this._wrapper = b('JSXDOM').div(
        c,
        b('JSXDOM').div(e, this._innerContent)
      );
      this.setWidth(a.width);
      return b('JSXDOM').div({ className: '_10' }, this._wrapper);
    };
    a.prototype._getDefaultLabel = function () {
      return h._('Dialog content');
    };
    a.prototype.getContentRoot = function () {
      return this._wrapper;
    };
    a.prototype.getInnerContent = function () {
      return this._innerContent;
    };
    a.prototype.updatePosition = function () {
      var a = b('Vector').getElementDimensions(this._wrapper);
      a = b('DialogPosition').calculateTopMargin(
        a.x,
        a.y,
        this._fixedTopPosition,
        this._ignoreFixedTopInShortViewport
      );
      b('Style').set(this._wrapper, 'margin-top', a + 'px');
      this.inform('update_position', { type: 'DialogX', top: a });
    };
    a.prototype.setWidth = function (a) {
      a = Math.floor(a);
      if (a === this._width) return;
      this._width = a;
      b('Style').set(this._wrapper, 'width', a + 'px');
    };
    a.prototype.getWidth = function () {
      return this._width;
    };
    a.prototype.getFixedTopPosition = function () {
      return this._fixedTopPosition;
    };
    a.prototype.shouldIgnoreFixedTopInShortViewport = function () {
      return this._ignoreFixedTopInShortViewport;
    };
    function a() {
      i.apply(this, arguments);
    }
    function k(a) {
      this._layer = a;
    }
    k.prototype.enable = function () {
      this._subscription = this._layer.subscribe(
        ['show', 'hide'],
        function (a) {
          a === 'show'
            ? (this._attach(),
              b('Arbiter').inform('layer_shown', { type: 'DialogX' }))
            : (this._detach(),
              b('Arbiter').inform('layer_hidden', { type: 'DialogX' }));
        }.bind(this)
      );
    };
    k.prototype.disable = function () {
      this._subscription.unsubscribe(),
        (this._subscription = null),
        this._resize && this._detach();
    };
    k.prototype._attach = function () {
      this._layer.updatePosition(),
        (this._resize = b('Event').listen(
          window,
          'resize',
          b('debounce')(this._layer.updatePosition.bind(this._layer))
        ));
    };
    k.prototype._detach = function () {
      this._resize.remove(), (this._resize = null);
    };
    Object.assign(k.prototype, { _subscription: null, _resize: null });
    e.exports = a;
  },
  null
);
__d(
  'LayerAutoFocusReact',
  ['focusWithinLayer'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a) {
      (this._layer = a), (this._subscription = null);
    }
    a.prototype.enable = function () {
      this._layer.containsReactComponent &&
        (this._subscription = this._layer.subscribe(
          'reactshow',
          this._focus.bind(this)
        ));
    };
    a.prototype.disable = function () {
      this._subscription &&
        (this._subscription.unsubscribe(), (this._subscription = null));
    };
    a.prototype._focus = function () {
      var a = this._layer.getRoot();
      a && b('focusWithinLayer')(a);
    };
    e.exports = a;
  },
  null
);
__d(
  'CrowdsourcingTranslateTo.react',
  [
    'cx',
    'ix',
    'AsyncRequest',
    'ContentTranslationStrings',
    'CrowdsourcedTranslationPlatformActionType',
    'CrowdsourcedTranslationPlatformInitiativeType',
    'DOMContainer.react',
    'Image.react',
    'Link.react',
    'LtgCrowdsourcedTranslationsPlatformTypedLogger',
    'Middot.react',
    'ProvideTranslationDialog.react',
    'React',
    'SimpleXUIDialog',
    'XTranslationCrowdsourcingSubmitAsyncController',
    'XUIDialogButton.react',
    'XUIDialogCancelButton.react',
  ],
  function (a, b, c, d, e, f, g, h) {
    __p && __p();
    var i;
    c = babelHelpers.inherits(a, b('React').PureComponent);
    i = c && c.prototype;
    function a(a) {
      i.constructor.call(this, a),
        (this.$2 = function () {
          new (b('LtgCrowdsourcedTranslationsPlatformTypedLogger'))()
            .setEvent(
              b('CrowdsourcedTranslationPlatformActionType')
                .CLICK_CANCEL_TRANSLATION
            )
            .setInitiative(
              b('CrowdsourcedTranslationPlatformInitiativeType').TRANSLATE_TO
            )
            .setFbid(this.props.contentID)
            .setSourceDialects([this.props.sourceDialect])
            .setTargetDialect(this.props.targetDialect)
            .log();
        }.bind(this)),
        (this.$3 = function () {
          var a = b('XTranslationCrowdsourcingSubmitAsyncController')
            .getURIBuilder()
            .setFBID('content_id', this.props.contentID)
            .setString('source_dialect', this.props.sourceDialect)
            .setString('target_dialect', this.props.targetDialect)
            .setString('translation', this.state.translationText)
            .getURI();
          new (b('AsyncRequest'))().setURI(a).send();
          new (b('LtgCrowdsourcedTranslationsPlatformTypedLogger'))()
            .setEvent(
              b('CrowdsourcedTranslationPlatformActionType')
                .CLICK_SUBMIT_TRANSLATION
            )
            .setInitiative(
              b('CrowdsourcedTranslationPlatformInitiativeType').TRANSLATE_TO
            )
            .setFbid(this.props.contentID)
            .setSourceDialects([this.props.sourceDialect])
            .setTargetDialect(this.props.targetDialect)
            .log();
          b('SimpleXUIDialog').show(
            b('ContentTranslationStrings').EDIT_TRANSLATION_THANKS,
            b('React').createElement(
              b('DOMContainer.react'),
              null,
              this.props.linkContent.cloneNode(!0)
            )
          );
        }.bind(this)),
        (this.state = { translationText: '' });
    }
    a.prototype.render = function () {
      return b('React').createElement(
        'span',
        {
          className: '_5pio',
          onClick: this.$1.bind(this),
          role: 'presentation',
        },
        b('React').createElement(b('Image.react'), {
          style: { verticalAlign: '-2px' },
          src: h('27290'),
        }),
        b('React').createElement(b('Middot.react'), null),
        b('React').createElement(
          b('Link.react'),
          { role: 'button' },
          b('React').createElement(
            b('DOMContainer.react'),
            null,
            this.props.linkContent
          )
        )
      );
    };
    a.prototype.$1 = function () {
      new (b('LtgCrowdsourcedTranslationsPlatformTypedLogger'))()
        .setEvent(b('CrowdsourcedTranslationPlatformActionType').VISITED)
        .setInitiative(
          b('CrowdsourcedTranslationPlatformInitiativeType').TRANSLATE_TO
        )
        .setFbid(this.props.contentID)
        .setSourceDialects([this.props.sourceDialect])
        .setTargetDialect(this.props.targetDialect)
        .log(),
        b('SimpleXUIDialog').showEx(
          b('React').createElement(
            b('ProvideTranslationDialog.react'),
            {
              onTranslationTextChange: function (a) {
                return this.setState({ translationText: a.target.value });
              }.bind(this),
              defaultText: '',
            },
            b('React').createElement(
              b('DOMContainer.react'),
              null,
              this.props.originalText
            )
          ),
          b('React').createElement(
            b('DOMContainer.react'),
            null,
            this.props.linkContent.cloneNode(!0)
          ),
          b('React').createElement(
            'div',
            null,
            b('React').createElement(b('XUIDialogCancelButton.react'), {
              onClick: this.$2,
            }),
            b('React').createElement(b('XUIDialogButton.react'), {
              action: 'cancel',
              label: b('ContentTranslationStrings').SUBMIT,
              use: 'confirm',
              onClick: this.$3,
            })
          )
        );
    };
    e.exports = a;
  },
  null
);
__d(
  'MessengerDispatcher',
  ['Dispatcher_DEPRECATED'],
  function (a, b, c, d, e, f) {
    e.exports = new (b('Dispatcher_DEPRECATED'))();
  },
  null
);
__d(
  'MercuryLoggingHelper',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    function g(a) {
      return Array.from(a).slice(0, 6).join('');
    }
    a = {
      obfuscateThread: function (a) {
        var b = babelHelpers['extends']({}, a);
        a &&
          a.snippet &&
          a.snippet.length > 9 &&
          (b.snippet = g(a.snippet) + '...');
        return b;
      },
      obfuscateMessage: function (a) {
        var b = babelHelpers['extends']({}, a);
        a && a.body && a.body.length > 9 && (b.body = g(a.body) + '...');
        return b;
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'InputSelection',
  ['DOM', 'Focus'],
  function (a, b, c, d, e, f) {
    __p && __p();
    a = {
      get: function (a) {
        __p && __p();
        try {
          if (typeof a.selectionStart === 'number')
            return { start: a.selectionStart, end: a.selectionEnd };
        } catch (a) {
          return { start: 0, end: 0 };
        }
        if (!document.selection) return { start: 0, end: 0 };
        var c = document.selection.createRange();
        if (c.parentElement() !== a) return { start: 0, end: 0 };
        var d = a.value.length;
        if (b('DOM').isNodeOfType(a, 'input'))
          return {
            start: -c.moveStart('character', -d),
            end: -c.moveEnd('character', -d),
          };
        else {
          var e = c.duplicate();
          e.moveToElementText(a);
          e.setEndPoint('StartToEnd', c);
          a = d - e.text.length;
          e.setEndPoint('StartToStart', c);
          return { start: d - e.text.length, end: a };
        }
      },
      set: function (a, c, d) {
        __p && __p();
        typeof d === 'undefined' && (d = c);
        if (document.selection) {
          if (a.tagName == 'TEXTAREA') {
            var e = (a.value.slice(0, c).match(/\r/g) || []).length,
              f = (a.value.slice(c, d).match(/\r/g) || []).length;
            c -= e;
            d -= e + f;
          }
          e = a.createTextRange();
          e.collapse(!0);
          e.moveStart('character', c);
          e.moveEnd('character', d - c);
          e.select();
        } else
          (a.selectionStart = c),
            (a.selectionEnd = Math.min(d, a.value.length)),
            b('Focus').set(a);
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'BadgeHelper',
  ['cx', 'fbt', 'DOM', 'joinClasses'],
  function (a, b, c, d, e, f, g, h) {
    __p && __p();
    var i = {
        xsmall: '_5dzz',
        small: '_5dz-',
        medium: '_5dz_',
        large: '_5d-0',
        xlarge: '_5d-1',
      },
      j = {
        bot: '_64nf',
        verified: '_56_f',
        trending: '_1gop',
        topcommenter: '_59t2',
        page_gray_check: '_5n3t',
        work: '_5d62',
        game_blue: '_59c6',
        work_non_coworker: '_2ad7',
        interest_community: '_3qcr',
        subscription: '_4fvy',
        username: '_pt7',
      },
      k = {
        bot: h._('Bot'),
        work_non_coworker: h._('Not part of your company'),
      };
    function l(a, c) {
      return b('joinClasses')(i[a], j[c], '_5dzy');
    }
    function m(a) {
      return k[a];
    }
    function a(a, c) {
      a = l(a, c);
      if (a) {
        c = m(c);
        return b('DOM').create(
          'span',
          { className: a },
          c
            ? b('DOM').create('span', { className: 'accessible_elem' }, c)
            : null
        );
      }
    }
    e.exports = {
      getClasses: l,
      getAlt: m,
      renderBadge: a,
      sizes: Object.keys(i),
      types: Object.keys(j),
    };
  },
  null
);
__d(
  'Badge.react',
  ['BadgeHelper', 'React'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g;
    c = b('React').PropTypes;
    g = babelHelpers.inherits(a, b('React').Component);
    g && g.prototype;
    a.prototype.render = function () {
      var a = b('BadgeHelper').getAlt(this.props.type);
      a = a
        ? b('React').createElement('span', { className: 'accessible_elem' }, a)
        : null;
      return b('React').createElement(
        'span',
        {
          className: b('BadgeHelper').getClasses(
            this.props.size,
            this.props.type
          ),
        },
        a
      );
    };
    function a() {
      g.apply(this, arguments);
    }
    a.propTypes = {
      size: c.oneOf(b('BadgeHelper').sizes),
      type: c.oneOf(b('BadgeHelper').types),
    };
    a.defaultProps = { size: 'xsmall', type: 'verified' };
    e.exports = a;
  },
  null
);
__d(
  'ActorURI',
  ['ActorURIConfig', 'URI'],
  function (a, b, c, d, e, f) {
    a = {
      create: function (a, c) {
        return new (b('URI'))(a).addQueryData(
          b('ActorURIConfig').PARAMETER_ACTOR,
          c
        );
      },
      PARAMETER_ACTOR: b('ActorURIConfig').PARAMETER_ACTOR,
    };
    e.exports = a;
  },
  null
);
__d(
  'arrayStableSort',
  [],
  function (a, b, c, d, e, f) {
    function a(a, b) {
      return a
        .map(function (a, b) {
          return { data: a, index: b };
        })
        .sort(function (a, c) {
          return b(a.data, c.data) || a.index - c.index;
        })
        .map(function (a) {
          return a.data;
        });
    }
    e.exports = a;
  },
  null
);
__d(
  'RangedCallbackManager',
  ['CallbackManagerController', 'arrayStableSort', 'createObjectFrom'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a, c, d) {
      (this.$1 = []),
        (this.$2 = !1),
        (this.$3 = !1),
        (this.$4 = {}),
        (this.$5 = new (b('CallbackManagerController'))(this.$6.bind(this))),
        (this.$7 = a),
        (this.$8 = c),
        (this.$9 = d);
    }
    a.prototype.executeOrEnqueue = function (a, b, c, d, e) {
      return this.$5.executeOrEnqueue({ start: a, limit: b }, c, {
        strict: !!d,
        skipOnStrictHandler: e,
      });
    };
    a.prototype.unsubscribe = function (a) {
      this.$5.unsubscribe(a);
    };
    a.prototype.getUnavailableResources = function (a) {
      __p && __p();
      a = this.$5.getRequest(a);
      var b = [];
      if (a && !this.$2) {
        var c = a.request;
        a = this.$10(a.options);
        c = c.start + c.limit;
        for (var a = a.length; a < c; a++) b.push(a);
      }
      return b;
    };
    a.prototype.addResources = function (a) {
      a.forEach(
        function (a) {
          this.$4[a] || ((this.$4[a] = !0), this.$1.push(a), (this.$3 = null));
        }.bind(this)
      ),
        this.resortResources(),
        this.$5.runPossibleCallbacks();
    };
    a.prototype.addResourcesWithoutSorting = function (a, c) {
      var d = this.$1.slice(0, c);
      d = d.concat(a);
      d = d.concat(this.$1.slice(c));
      this.$1 = d;
      Object.assign(this.$4, b('createObjectFrom')(a, !0));
      this.$3 = null;
      this.$5.runPossibleCallbacks();
    };
    a.prototype.removeResources = function (a) {
      a.forEach(
        function (a) {
          if (this.$4[a]) {
            this.$4[a] = !1;
            a = this.$1.indexOf(a);
            a != -1 && this.$1.splice(a, 1);
          }
        }.bind(this)
      );
    };
    a.prototype.removeAllResources = function () {
      (this.$1 = []), (this.$4 = {});
    };
    a.prototype.resortResources = function () {
      this.$1 = b('arrayStableSort')(
        this.$1,
        function (a, b) {
          return this.$8(this.$7(a), this.$7(b));
        }.bind(this)
      );
    };
    a.prototype.setReachedEndOfArray = function () {
      this.$2 ||
        ((this.$2 = !0), (this.$3 = null), this.$5.runPossibleCallbacks());
    };
    a.prototype.hasReachedEndOfArray = function () {
      return this.$2;
    };
    a.prototype.forceRunCallbacks = function () {
      this.$5.runPossibleCallbacks({ force: !0 });
    };
    a.prototype.setError = function (a) {
      this.$3 !== a && ((this.$3 = a), this.$5.runPossibleCallbacks());
    };
    a.prototype.getError = function (a, b, c) {
      c = this.$10({ strict: c });
      return a + b > c.length ? this.$3 : null;
    };
    a.prototype.hasResource = function (a) {
      return this.$4[a];
    };
    a.prototype.getResourceAtIndex = function (a) {
      return this.$1[a];
    };
    a.prototype.getAllResources = function () {
      return this.$1.concat();
    };
    a.prototype.getCurrentArraySize = function (a) {
      return this.$10(a).length;
    };
    a.prototype.$10 = function (a) {
      var b = this.$1;
      if (a && a.strict) {
        a = a.skipOnStrictHandler || this.$9;
        a && (b = b.filter(a));
      }
      return b;
    };
    a.prototype.$6 = function (a, b) {
      __p && __p();
      var c = this.$10(b),
        d = a.start;
      a = a.start + a.limit;
      b = !!(b && b.force);
      if (!b && !this.$2 && !this.$3 && a > c.length) return !1;
      else {
        b = c.slice(d, a);
        d = a > c.length ? this.$3 : null;
        return [b, d];
      }
    };
    a.prototype.getElementsUntil = function (a) {
      var b = [];
      for (var c = 0; c < this.$1.length; c++) {
        var d = this.$7(this.$1[c]);
        if (this.$8(d, a) > 0) break;
        b.push(this.$1[c]);
      }
      return b;
    };
    e.exports = a;
  },
  null
);
__d(
  'createChunkedResponseParser',
  ['invariant'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h = '\r\n',
      i = 2;
    function a(a, b) {
      __p && __p();
      var c = 0,
        d = function (d, e, f) {
          __p && __p();
          b &&
            ((d = b(d)), d == null || typeof d === 'string' || g(0, undefined));
          if (d) {
            var j = d.length;
            while (c < j) {
              var k = d.indexOf(h, c);
              if (k < 0)
                if (f) k = j;
                else break;
              k = d.slice(c, k);
              c += k.length + i;
              a(k, e, f && c >= j);
            }
          } else f && a('', e, !0);
        };
      d.parseStreaming = !0;
      return d;
    }
    e.exports = a;
  },
  null
);
__d(
  'XGraphQLBatchAPIController',
  ['XController'],
  function (a, b, c, d, e, f) {
    e.exports = b('XController').create('/api/graphqlbatch/', {
      queries: { type: 'String' },
      batch_name: { type: 'String' },
      scheduler: { type: 'Enum', enumType: 1 },
      shared_params: { type: 'String' },
      fb_api_req_friendly_name: { type: 'String' },
      uft_request_id: { type: 'String' },
    });
  },
  null
);
__d(
  'WebGraphQL',
  [
    'ActorURI',
    'Deferred',
    'FBLogger',
    'WebGraphQLConfig',
    'XGraphQLBatchAPIController',
    'XHRRequest',
    'createChunkedResponseParser',
    'getAsyncParams',
    'getSameOriginTransport',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    function g(a) {
      __p && __p();
      var c = a.getURIBuilder().getURI(),
        d = {
          exec: function (a, b) {
            return d.execAll([a], b)[0];
          },
          execAll: function (a, d) {
            __p && __p();
            var e = {},
              f = {};
            a = a.map(function (a, c) {
              c = 'o' + c;
              e[c] = {
                doc_id: a.__getDocID(),
                query_params: a.__getVariables(),
              };
              a = new (b('Deferred'))();
              f[c] = a;
              return a.getPromise();
            });
            var g = babelHelpers['extends']({}, b('getAsyncParams')('POST'));
            d &&
              d.actorID != null &&
              (g[b('ActorURI').PARAMETER_ACTOR] = d.actorID);
            d = d && d.batchName ? { batch_name: d.batchName } : {};
            d = new (b('XHRRequest'))(c)
              .setMethod('POST')
              .setTransportBuilder(b('getSameOriginTransport'))
              .setRequestHeader(
                'Content-Type',
                'application/x-www-form-urlencoded'
              )
              .setData(
                babelHelpers['extends']({}, d, g, {
                  queries: JSON.stringify(e),
                })
              )
              .setResponseHandler(
                b('createChunkedResponseParser')(function (a, c, d) {
                  __p && __p();
                  try {
                    var e = JSON.parse(a);
                    Object.keys(e).forEach(function (a) {
                      var b = f[a];
                      if (b) {
                        a = e[a];
                        a.errors
                          ? b.reject(a)
                          : a.data
                          ? b.resolve(a.data)
                          : b.reject({
                              data: {},
                              errors: [
                                {
                                  message:
                                    'Unexpected response received from server.',
                                  severity: 'CRITICAL',
                                  response: a,
                                },
                              ],
                            });
                      }
                    });
                  } catch (c) {
                    b('FBLogger')('webgraphql')
                      .catching(c)
                      .mustfix(
                        'Bad response: %s%s',
                        a.substr(0, 250),
                        a.length > 250 ? '[truncated]' : ''
                      );
                  }
                  d &&
                    Object.keys(f).forEach(function (a) {
                      f[a].isSettled() ||
                        f[a].reject({
                          data: {},
                          errors: [
                            {
                              message: 'No response received from server.',
                              severity: 'CRITICAL',
                            },
                          ],
                        });
                    });
                })
              )
              .setTimeout(b('WebGraphQLConfig').timeout)
              .setTimeoutHandler(function () {
                Object.keys(f).forEach(function (a) {
                  f[a].isSettled() ||
                    f[a].reject({
                      data: {},
                      errors: [
                        { message: 'Request timed out.', severity: 'CRITICAL' },
                      ],
                    });
                });
              })
              .setErrorHandler(function (a) {
                Object.keys(f).forEach(function (b) {
                  f[b].isSettled() ||
                    f[b].reject({
                      data: {},
                      errors: [
                        {
                          message: (a && a.message) || 'Transport error.',
                          severity: 'CRITICAL',
                          error: a,
                        },
                      ],
                    });
                }),
                  a instanceof Error
                    ? b('FBLogger')('webgraphql')
                        .catching(a)
                        .mustfix('WebGraphQL error')
                    : b('FBLogger')('webgraphql').mustfix(
                        'Unknown WebGraphQL error'
                      );
              });
            d.send();
            return a;
          },
          __forController: g,
        };
      return d;
    }
    e.exports = g(b('XGraphQLBatchAPIController'));
  },
  null
);
__d(
  'WebGraphQLLegacyHelper',
  ['invariant'],
  function (a, b, c, d, e, f, g) {
    e.exports = {
      getURI: function (a) {
        var b = a.controller,
          c = a.docID,
          d = a.queryID;
        a = a.variables;
        (c != d && (c || d) != null) || g(0, undefined, c, d);
        b = b.getURIBuilder();
        d ? b.setFBID('query_id', d) : b.setFBID('doc_id', c);
        a && b.setString('variables', JSON.stringify(a));
        return b.getURI();
      },
    };
  },
  null
);
__d(
  'XWebGraphQLMutationController',
  ['XController'],
  function (a, b, c, d, e, f) {
    e.exports = b('XController').create('/webgraphql/mutation/', {
      query_id: { type: 'FBID' },
      variables: { type: 'String' },
      doc_id: { type: 'FBID' },
    });
  },
  null
);
__d(
  'base62',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    function a(a) {
      if (!a) return '0';
      var b = '';
      while (a > 0) (b = g[a % 62] + b), (a = Math.floor(a / 62));
      return b;
    }
    e.exports = a;
  },
  null
);
__d(
  'WebGraphQLMutationBase',
  [
    'invariant',
    'CurrentUser',
    'WebGraphQLLegacyHelper',
    'XWebGraphQLMutationController',
    'base62',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h = 0;
    function a(a) {
      this.$1 = a;
    }
    a.prototype.__getVariables = function () {
      return this.$1;
    };
    a.prototype.__getDocID = function () {
      return this.constructor.__getDocID();
    };
    a.__getController = function () {
      return b('XWebGraphQLMutationController');
    };
    a.__getDocID = function () {
      g(0, undefined);
    };
    a.getURI = function (a) {
      return b('WebGraphQLLegacyHelper').getURI({
        controller: this.__getController(),
        docID: this.__getDocID(),
        variables: {
          data: babelHelpers['extends'](
            {
              client_mutation_id: b('base62')(h++),
              actor_id: b('CurrentUser').getID(),
            },
            a
          ),
        },
      });
    };
    e.exports = a;
  },
  null
);
__d(
  'XWebGraphQLQueryController',
  ['XController'],
  function (a, b, c, d, e, f) {
    e.exports = b('XController').create('/webgraphql/query/', {
      query_id: { type: 'FBID' },
      variables: { type: 'String' },
      doc_id: { type: 'FBID' },
    });
  },
  null
);
__d(
  'WebGraphQLQueryBase',
  ['invariant', 'WebGraphQLLegacyHelper', 'XWebGraphQLQueryController'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    function a(a) {
      this.$1 = a;
    }
    a.prototype.__getVariables = function () {
      return this.$1;
    };
    a.prototype.__getDocID = function () {
      return this.constructor.__getDocID();
    };
    a.__getController = function () {
      return b('XWebGraphQLQueryController');
    };
    a.__getDocID = function () {
      g(0, undefined);
    };
    a.getURI = function (a) {
      return b('WebGraphQLLegacyHelper').getURI({
        controller: this.__getController(),
        docID: this.__getDocID(),
        variables: a,
      });
    };
    a.getLegacyURI = function (a) {
      return b('WebGraphQLLegacyHelper').getURI({
        controller: this.__getController(),
        queryID: this.getQueryID(),
        variables: a,
      });
    };
    a.getQueryID = function () {
      g(0, undefined);
    };
    e.exports = a;
  },
  null
);
