if (self.CavalryLogger) {
  CavalryLogger.start_js(['LvMRU']);
}

__d(
  'DesktopHscrollUnitEventConstants',
  [],
  function (a, b, c, d, e, f) {
    e.exports = {
      HSCROLL_ITEM_INSERTED_EVENT: 'DesktopHScrollUnit/itemInserted',
      HSCROLL_ITEM_SHOWN_EVENT: 'DesktopHScrollUnit/itemShown',
      HSCROLL_ITEM_HIDE_EVENT: 'DesktopHScrollUnit/HideIndividualItem',
      HSCROLL_ITEM_SCROLL_BEFORE_XOUT_EVENT:
        'DesktopHScrollUnit/scrollItemBeforeXout',
      HSCROLL_ITEM_UNHIDE_EVENT: 'DesktopHScrollUnit/unhideIndividualItem',
      HSCROLL_LAST_ITEM_NFX_ACTION_TAKEN: 'logLastAdXout',
      HSCROLL_PAGER_ITEM_HIDE_EVENT: 'onXoutIndividualItem',
    };
  },
  null
);
__d(
  'CSSFade',
  [
    'cx',
    'invariant',
    'CSS',
    'DataStore',
    'Event',
    'Style',
    'requestAnimationFrameAcrossTransitions',
  ],
  function (a, b, c, d, e, f, g, h) {
    __p && __p();
    var i = 'css-fade-animation',
      j = 'css-show-animation',
      k = 'CSSFade_hide',
      l = 'CSSFade_show';
    a = document.createElement('div').animate !== undefined;
    var m = { cancel: function () {} };
    function n(a, c) {
      a != null || h(0, undefined);
      a = b('DataStore').get(a, c);
      a && a.cancel();
      return a;
    }
    function o(a, b, c) {
      a =
        ((a = a) != null ? ((a = a.style) != null ? a.animation : a) : a) || '';
      b = b + 's ' + c;
      a.length > 5 && (b = a.slice(0, -1) + (', ' + b));
      return b;
    }
    function p(a, b) {
      a =
        ((a = a) != null ? ((a = a.style) != null ? a.animation : a) : a) || '';
      a = a.split(',');
      var c = a.findIndex(function (a) {
        return a.indexOf(b) > -1;
      });
      c !== -1 && a.splice(c, 1);
      return a.join(',');
    }
    c = {
      show: function (a, c) {
        __p && __p();
        c === void 0 && (c = {});
        var d = c.duration != null ? c.duration / 1e3 : 0.3;
        n(a, i);
        n(a, j);
        b('CSS').removeClass(a, c.invisible ? 'invisible_elem' : 'hidden_elem');
        b('requestAnimationFrameAcrossTransitions')(function () {
          a.style.animation = o(a, d, l);
        });
        var e = b('Event').listen(a, 'animationend', function () {
            c.callback && c.callback(), (a.style.animation = p(a, l));
          }),
          f = {
            cancel: function () {
              (a.style.animation = p(a, l)),
                e.remove(),
                (f.cancel = function () {});
            },
          };
        b('DataStore').set(a, j, f);
        return f;
      },
      hide: function (a, c) {
        __p && __p();
        c === void 0 && (c = {});
        var d = function () {
          b('CSS').addClass(a, c.invisible ? 'invisible_elem' : 'hidden_elem'),
            c.callback && c.callback(),
            (a.style.animation = p(a, k));
        };
        if (c.simple) {
          d();
          return m;
        }
        var e = c.duration != null ? c.duration / 1e3 : 0.3;
        n(a, j);
        n(a, i);
        b('requestAnimationFrameAcrossTransitions')(function () {
          a.style.animation = o(a, e, k);
        });
        var f = b('Event').listen(a, 'animationend', d),
          g = {
            cancel: function () {
              (a.style.animation = p(a, k)),
                f.remove(),
                (g.cancel = function () {});
            },
          };
        b('DataStore').set(a, i, g);
        return g;
      },
    };
    d = {
      show: function (a, c) {
        __p && __p();
        c === void 0 && (c = {});
        var d = c.duration != null ? c.duration : 300;
        n(a, i);
        n(a, j);
        b('CSS').removeClass(a, c.invisible ? 'invisible_elem' : 'hidden_elem');
        b('Style').set(a, 'opacity', '1');
        d = a.animate([{ opacity: '0' }, { opacity: '1.0' }], { duration: d });
        c.callback && (d.onfinish = c.callback);
        b('DataStore').set(a, j, d);
        return d;
      },
      hide: function (a, c) {
        __p && __p();
        c === void 0 && (c = {});
        var d = c.duration != null ? c.duration : 300;
        n(a, j);
        if (c.simple === !0) {
          b('CSS').addClass(a, c.invisible ? 'invisible_elem' : 'hidden_elem');
          return m;
        } else {
          n(a, i);
          b('Style').set(a, 'opacity', '0');
          d = a.animate([{ opacity: '1.0' }, { opacity: '0' }], {
            duration: d,
          });
          d.onfinish = function () {
            b('CSS').addClass(
              a,
              c.invisible ? 'invisible_elem' : 'hidden_elem'
            ),
              c.callback && c.callback();
          };
          b('DataStore').set(a, i, d);
          return d;
        }
      },
    };
    e.exports = a ? d : c;
  },
  null
);
__d(
  'createTooltipPortal',
  ['ReactDOM'],
  function (a, b, c, d, e, f) {
    function a(a, c) {
      return b('ReactDOM').createPortal(a, c);
    }
    e.exports = a;
  },
  null
);
__d(
  'Tooltip.react',
  [
    'Arbiter',
    'React',
    'ReactDOM',
    'SubscriptionsHandler',
    'TooltipData',
    'createTooltipPortal',
    'ifRequired',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g;
    c = babelHelpers.inherits(a, b('React').Component);
    g = c && c.prototype;
    function a() {
      var a, c;
      for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
        e[f] = arguments[f];
      return (
        (c = (a = g.constructor).call.apply(a, [this].concat(e))),
        (this.$1 = document.createElement('div')),
        (this.$2 = new (b('SubscriptionsHandler'))()),
        (this.state = { visible: !1 }),
        (this.tooltipEl = b('React').createRef()),
        c
      );
    }
    a.prototype.componentDidMount = function () {
      __p && __p();
      this.$2.addSubscriptions(
        b('Arbiter').subscribe(
          'tooltip/requesthide',
          function (a, c) {
            a = c.context;
            this.state.visible &&
              (!a || a === this.tooltipEl.current) &&
              b('ifRequired')(
                'Tooltip',
                function (a) {
                  a.suspend(),
                    b('ReactDOM').unstable_interactiveUpdates(
                      function () {
                        this.setState({ visible: !1 });
                      }.bind(this)
                    );
                }.bind(this)
              );
          }.bind(this)
        ),
        b('Arbiter').subscribe(
          'tooltip/requestshow',
          function (a, c) {
            a = c.context;
            !this.state.visible &&
              a === this.tooltipEl.current &&
              b('ifRequired')(
                'Tooltip',
                function (a) {
                  a.suspend(),
                    b('ReactDOM').unstable_interactiveUpdates(
                      function () {
                        this.setState({ visible: !0 });
                      }.bind(this)
                    );
                }.bind(this)
              );
          }.bind(this)
        )
      ),
        this.$3();
    };
    a.prototype.componentDidUpdate = function (a, c) {
      c.visible !== this.state.visible &&
        (this.props.onVisibilityChange &&
          this.props.onVisibilityChange(this.state.visible),
        b('ifRequired')(
          'Tooltip',
          function (a) {
            this.state.visible
              ? a.commitShow(this.tooltipEl.current)
              : a.commitHide(this.tooltipEl.current);
          }.bind(this)
        )),
        this.$3();
    };
    a.prototype.componentWillUnmount = function () {
      b('TooltipData').remove(b('ReactDOM').findDOMNode(this)),
        this.$2.release();
    };
    a.prototype.render = function () {
      __p && __p();
      var a = this.props;
      a.alignH;
      a.children;
      a.display;
      a.position;
      var c = a.tooltip,
        d = a.mountedWhileHidden;
      a = babelHelpers.objectWithoutProperties(a, [
        'alignH',
        'children',
        'display',
        'position',
        'tooltip',
        'mountedWhileHidden',
      ]);
      var e = this.state.visible;
      return b('React').createElement(
        this.props.display === 'block' ? 'div' : 'span',
        babelHelpers['extends']({}, a, {
          ref: this.tooltipEl,
          'data-hover': 'tooltip',
          'data-tooltip-content': typeof c === 'string' ? c : undefined,
        }),
        (e || d) && c !== null ? b('createTooltipPortal')(c, this.$1) : null,
        this.props.children
      );
    };
    a.prototype.$3 = function () {
      var a = b('ReactDOM').findDOMNode(this);
      if (!this.props.tooltip) b('TooltipData').remove(a);
      else {
        var c = this.props,
          d = c.alignH;
        c = c.position;
        b('TooltipData').set(a, this.$1, c, d);
      }
    };
    a.defaultProps = { display: 'inline', mountedWhileHidden: !0 };
    e.exports = a;
  },
  null
);
__d(
  'LoadingMarker.react',
  ['LoadingMarkerGated', 'React'],
  function (a, b, c, d, e, f) {
    function a(a) {
      return a.children;
    }
    e.exports = b('LoadingMarkerGated').component || a;
  },
  null
);
__d(
  'FBLoadShimmer.react',
  ['cx', 'LoadingMarker.react', 'React', 'gkx', 'joinClasses'],
  function (a, b, c, d, e, f, g) {
    function a(a) {
      var c = a.className,
        d = a.height,
        e = a.style,
        f = a.width,
        g = a.disableAnimation;
      a = babelHelpers.objectWithoutProperties(a, [
        'className',
        'height',
        'style',
        'width',
        'disableAnimation',
      ]);
      var h = '_1tt';
      g && (h = b('joinClasses')(h, '_300z'));
      g = b('React').createElement(
        'div',
        babelHelpers['extends']({}, a, {
          className: b('joinClasses')(c, h),
          style: babelHelpers['extends'](
            {
              height: d != null ? d + 'px' : undefined,
              width: f != null ? f + 'px' : undefined,
            },
            e
          ),
        })
      );
      return b('React').createElement(b('LoadingMarker.react'), null, g);
    }
    e.exports = a;
  },
  null
);
__d(
  'CircularProgressBar.react',
  ['cx', 'React'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    a = b('React').PropTypes;
    c = b('React').createClass({
      displayName: 'CircularProgressBar',
      propTypes: {
        animate: a.bool,
        percentComplete: a.number.isRequired,
        text: a.string,
      },
      render: function () {
        var a = this.props,
          c = a.animate,
          d = a.text;
        a = a.percentComplete;
        var e = (360 * a) / 100,
          f = Math.max(e, 180) - 180;
        e = Math.min(e, 180);
        a = a < 100 ? '1' : '0';
        return b('React').createElement(
          'div',
          { className: '_1_bj', style: { opacity: a } },
          !!d && b('React').createElement('div', { className: '_22sa' }, d),
          b('React').createElement(
            'div',
            { className: '_1_bk' },
            b('React').createElement(
              'div',
              { className: c ? '_22sb' : '' },
              b('React').createElement('div', {
                className: '_1_bl',
                style: { opacity: a },
              }),
              b('React').createElement(
                'div',
                { className: '_1_bp _1_bq' },
                b('React').createElement('div', {
                  className: '_1_br',
                  style: {
                    transform: 'translateX(-100%) rotate(' + f + 'deg)',
                    opacity: a,
                  },
                })
              ),
              b('React').createElement(
                'div',
                { className: '_1_bs _1_bq' },
                b('React').createElement('div', {
                  className: '_1_br',
                  style: {
                    transform: 'translateX(-100%) rotate(' + e + 'deg)',
                    opacity: a,
                  },
                })
              )
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
  'ARIA',
  ['DOM', 'emptyFunction', 'ge', 'getOrCreateDOMID'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g,
      h,
      i = function () {
        (g = b('ge')('ariaAssertiveAlert')),
          g ||
            ((g = b('DOM').create('div', {
              id: 'ariaAssertiveAlert',
              className: 'accessible_elem',
              'aria-live': 'assertive',
            })),
            b('DOM').appendContent(document.body, g)),
          (h = b('ge')('ariaPoliteAlert')),
          h ||
            ((h = g.cloneNode(!1)),
            h.setAttribute('id', 'ariaPoliteAlert'),
            h.setAttribute('aria-live', 'polite'),
            b('DOM').appendContent(document.body, h)),
          (i = b('emptyFunction'));
      };
    function j(a, c) {
      i();
      c = c ? g : h;
      b('DOM').setContent(c, a);
    }
    a = {
      controls: function (a) {
        for (
          var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), e = 1;
          e < c;
          e++
        )
          d[e - 1] = arguments[e];
        var f = d
          .map(function (a) {
            return b('getOrCreateDOMID')(a);
          })
          .join(' ');
        a.setAttribute('aria-controls', f);
      },
      describedBy: function (a) {
        for (
          var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), e = 1;
          e < c;
          e++
        )
          d[e - 1] = arguments[e];
        var f = d
          .map(function (a) {
            return b('getOrCreateDOMID')(a);
          })
          .join(' ');
        a.setAttribute('aria-describedby', f);
      },
      owns: function (a, c) {
        a.setAttribute('aria-owns', b('getOrCreateDOMID')(c));
      },
      setPopup: function (a, c) {
        c = b('getOrCreateDOMID')(c);
        a.setAttribute('aria-controls', c);
        a.setAttribute('aria-haspopup', 'true');
        c = a.getAttribute('role') || '';
        c && a.setAttribute('role', c);
      },
      announce: function (a) {
        j(a, !0);
      },
      notify: function (a) {
        j(a, !1);
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'ContextualLayerAlignmentEnum',
  ['React'],
  function (a, b, c, d, e, f) {
    a = b('React').PropTypes;
    c = {
      left: 'left',
      center: 'center',
      right: 'right',
      propType: a.oneOf(['left', 'center', 'right']),
      values: ['left', 'center', 'right'],
    };
    e.exports = c;
  },
  null
);
__d(
  'ContextualLayerPositionEnum',
  ['React'],
  function (a, b, c, d, e, f) {
    a = b('React').PropTypes;
    c = {
      above: 'above',
      below: 'below',
      left: 'left',
      right: 'right',
      propType: a.oneOf(['above', 'below', 'left', 'right']),
      values: ['above', 'below', 'left', 'right'],
    };
    e.exports = c;
  },
  null
);
__d(
  'ContextualThing',
  ['CSS', 'containsNode', 'ge', 'getOrCreateDOMID'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = {
      register: function (a, c) {
        a.setAttribute('data-ownerid', b('getOrCreateDOMID')(c));
      },
      containsIncludingLayers: function (a, c) {
        c = c;
        while (c) {
          if (b('containsNode')(a, c)) return !0;
          c = g.getContext(c);
        }
        return !1;
      },
      getContext: function (a) {
        a = a;
        var c;
        while (a) {
          if (a.getAttribute && (c = a.getAttribute('data-ownerid')))
            return b('ge')(c);
          a = a.parentNode;
        }
        return null;
      },
      parentByClass: function (a, c) {
        a = a;
        var d;
        while (a && !b('CSS').hasClass(a, c))
          a.getAttribute && (d = a.getAttribute('data-ownerid'))
            ? (a = b('ge')(d))
            : (a = a.parentNode);
        return a;
      },
    };
    e.exports = g;
  },
  null
);
__d(
  'BehaviorsMixin',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    function g(a) {
      (this.$1 = a), (this.$2 = !1);
    }
    g.prototype.enable = function () {
      this.$2 || ((this.$2 = !0), this.$1.enable());
    };
    g.prototype.disable = function () {
      this.$2 && ((this.$2 = !1), this.$1.disable());
    };
    var h = 1;
    function i(a) {
      a.__BEHAVIOR_ID || (a.__BEHAVIOR_ID = h++);
      return a.__BEHAVIOR_ID;
    }
    a = {
      enableBehavior: function (a) {
        this._behaviors || (this._behaviors = {});
        var b = i(a);
        this._behaviors[b] || (this._behaviors[b] = new g(new a(this)));
        this._behaviors[b].enable();
        return this;
      },
      disableBehavior: function (a) {
        if (this._behaviors) {
          a = i(a);
          this._behaviors[a] && this._behaviors[a].disable();
        }
        return this;
      },
      enableBehaviors: function (a) {
        a.forEach(this.enableBehavior, this);
        return this;
      },
      destroyBehaviors: function () {
        if (this._behaviors) {
          for (var a in this._behaviors) this._behaviors[a].disable();
          this._behaviors = {};
        }
      },
      hasBehavior: function (a) {
        return this._behaviors && i(a) in this._behaviors;
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'isValidReactElement',
  [],
  function (a, b, c, d, e, f) {
    var g =
      (typeof Symbol === 'function' &&
        Symbol['for'] &&
        Symbol['for']('react.element')) ||
      60103;
    function a(a) {
      return !!(typeof a === 'object' && a !== null && a.$$typeof === g);
    }
    e.exports = a;
  },
  null
);
__d(
  'BootloadedReact',
  ['Bootloader', 'isValidReactElement'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = function (a) {
      b('Bootloader').loadModules(['ReactDOM'], a, 'BootloadedReact');
    };
    a = {
      isValidElement: function (a) {
        return b('isValidReactElement')(a);
      },
      render: function (a, b, c) {
        g(function (d) {
          d.render(a, b, function () {
            c && c(this);
          });
        });
      },
      unmountComponentAtNode: function (a, b) {
        g(function (c) {
          c.unmountComponentAtNode(a), b && b();
        });
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'isContentEditable',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a) {
      a = a;
      while (a instanceof HTMLElement) {
        if (
          a.contentEditable === 'true' ||
          a.contentEditable === 'plaintext-only'
        )
          return !0;
        a = a.parentElement;
      }
      return !1;
    }
    e.exports = a;
  },
  null
);
__d(
  'isElementInteractive',
  ['isContentEditable'],
  function (a, b, c, d, e, f) {
    var g = new Set(['EMBED', 'INPUT', 'OBJECT', 'SELECT', 'TEXTAREA']),
      h = new Set(['button', 'checkbox', 'radio', 'submit']);
    function a(a) {
      if (!a instanceof HTMLElement) return !1;
      var c = b('isContentEditable')(a),
        d = g.has(a.nodeName);
      a = a instanceof HTMLInputElement && h.has(a.type);
      return (c || d) && !a;
    }
    e.exports = a;
  },
  null
);
__d(
  'KeyEventController',
  [
    'Bootloader',
    'DOMQuery',
    'Event',
    'Run',
    'emptyFunction',
    'getElementText',
    'isContentEditable',
    'isElementInteractive',
    'isEmpty',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = null,
      h = {
        BACKSPACE: [8],
        TAB: [9],
        RETURN: [13],
        ALT: [18],
        ESCAPE: [27],
        LEFT: [37, 63234],
        UP: [38, 63232],
        RIGHT: [39, 63235],
        DOWN: [40, 63233],
        NUMPAD_ADD: [43],
        NUMPAD_SUBSTRACT: [45],
        DELETE: [46],
        COMMA: [188],
        PERIOD: [190],
        SLASH: [191],
        '`': [192],
        '[': [219],
        ']': [221],
        PAGE_UP: [33],
        PAGE_DOWN: [34],
        END: [35],
        HOME: [36],
        SPACE: [32],
        KP_DOT: [46, 110],
        '-': [189],
        '=': [187],
        FORWARD_SLASH: [191],
      },
      i = {
        8: 1,
        9: 1,
        13: 1,
        27: 1,
        32: 1,
        37: 1,
        63234: 1,
        38: 1,
        63232: 1,
        39: 1,
        63235: 1,
        40: 1,
        63233: 1,
        46: 1,
      };
    function j() {
      (this.handlers = {}),
        (document.onkeyup = this.onkeyevent.bind(this, 'onkeyup')),
        (document.onkeydown = this.onkeyevent.bind(this, 'onkeydown')),
        (document.onkeypress = this.onkeyevent.bind(this, 'onkeypress'));
    }
    j.prototype.mapKey = function (a) {
      if (a >= 0 && a <= 9) {
        typeof a !== 'number' && (a = a.charCodeAt(0) - 48);
        return [48 + a, 96 + a];
      }
      var b = h[a.toUpperCase()];
      return b ? b : [a.toUpperCase().charCodeAt(0)];
    };
    j.prototype.onkeyevent = function (a, c) {
      __p && __p();
      c = b('Event').$E(c);
      var d = this.handlers[c.keyCode] || this.handlers[c.which],
        e,
        f;
      if (d)
        for (var g = 0; g < d.length; g++) {
          e = d[g].callback;
          f = d[g].filter;
          try {
            if (!f || f(c, a)) {
              var h = (function () {
                f = e(c, a);
                var d = c.which || c.keyCode;
                b('Bootloader').loadModules(
                  ['KeyEventTypedLogger'],
                  function (a) {
                    new a()
                      .setAction('key_shortcut')
                      .setKey(c.key || '')
                      .setKeyChar(String.fromCharCode(d))
                      .setKeyCode(d)
                      .addToExtraData('is_trusted', c.isTrusted)
                      .log();
                  },
                  'KeyEventController'
                );
                if (f === !1) return { v: b('Event').kill(c) };
              })();
              if (typeof h === 'object') return h.v;
            }
          } catch (a) {
            !1;
          }
        }
      return !0;
    };
    j.prototype.resetHandlers = function () {
      for (var a in this.handlers)
        if (Object.prototype.hasOwnProperty.call(this.handlers, a)) {
          var b = this.handlers[a].filter(function (a) {
            return a.preserve();
          });
          b.length ? (this.handlers[a] = b) : delete this.handlers[a];
        }
    };
    j.getInstance = function () {
      return g || (g = new j());
    };
    j.defaultFilter = function (event, a) {
      event = b('Event').$E(event);
      return (
        j.filterEventTypes(event, a) &&
        j.filterEventTargets(event, a) &&
        j.filterEventModifiers(event, a)
      );
    };
    j.filterEventTypes = function (event, a) {
      return a === 'onkeydown' ? !0 : !1;
    };
    j.filterEventTargets = function (event, a) {
      a = event.getTarget();
      return (
        !b('isElementInteractive')(a) ||
        (event.keyCode in i &&
          ((b('DOMQuery').isNodeOfType(a, ['input', 'textarea']) &&
            a.value.length === 0) ||
            (b('isContentEditable')(a) && b('getElementText')(a).length === 0)))
      );
    };
    j.filterEventModifiers = function (event, a) {
      return event.ctrlKey || event.altKey || event.metaKey || event.repeat
        ? !1
        : !0;
    };
    j.registerKey = function (a, c, d, e, f) {
      __p && __p();
      d === void 0 && (d = j.defaultFilter);
      e === void 0 && (e = !1);
      f === void 0 && (f = b('emptyFunction').thatReturnsFalse);
      var g = j.getInstance(),
        h = g.mapKey(a);
      b('isEmpty')(g.handlers) && b('Run').onLeave(g.resetHandlers.bind(g));
      var i = {};
      for (var k = 0; k < h.length; k++) {
        a = h[k];
        (!g.handlers[a] || e) && (g.handlers[a] = []);
        var l = { callback: c, filter: d, preserve: f };
        i[a] = l;
        g.handlers[a].push(l);
      }
      return {
        remove: function () {
          for (var a in i) {
            if (g.handlers[a] && g.handlers[a].length) {
              var b = g.handlers[a].indexOf(i[a]);
              b >= 0 && g.handlers[a].splice(b, 1);
            }
            delete i[a];
          }
        },
      };
    };
    e.exports = j;
  },
  null
);
__d(
  'KeyStatus',
  ['Event', 'ExecutionEnvironment'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = null,
      h = null;
    function i() {
      h ||
        (h = b('Event').listen(window, 'blur', function () {
          (g = null), j();
        }));
    }
    function j() {
      h && (h.remove(), (h = null));
    }
    function a(event) {
      (g = b('Event').getKeyCode(event)), i();
    }
    function c() {
      (g = null), j();
    }
    if (b('ExecutionEnvironment').canUseDOM) {
      d = document.documentElement;
      if (d)
        if (d.addEventListener)
          d.addEventListener('keydown', a, !0),
            d.addEventListener('keyup', c, !0);
        else if (d.attachEvent) {
          f = d.attachEvent;
          f('onkeydown', a);
          f('onkeyup', c);
        }
    }
    d = {
      isKeyDown: function () {
        return !!g;
      },
      getKeyDownCode: function () {
        return g;
      },
    };
    e.exports = d;
  },
  null
);
__d(
  'Layer',
  [
    'invariant',
    'KeyStatus',
    'ArbiterMixin',
    'BehaviorsMixin',
    'BootloadedReact',
    'ContextualThing',
    'CSS',
    'DataStore',
    'DOM',
    'Event',
    'FBLogger',
    'HTML',
    'KeyEventController',
    'Parent',
    'Style',
    'ge',
    'isNode',
    'mixin',
    'removeFromArray',
    'setImmediate',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h;
    b('KeyStatus');
    var i = [];
    a = babelHelpers.inherits(
      j,
      b('mixin')(b('ArbiterMixin'), b('BehaviorsMixin'))
    );
    h = a && a.prototype;
    function j(a, c) {
      h.constructor.call(this);
      this._config = a || {};
      if (c) {
        this._configure(this._config, c);
        a = this._config.addedBehaviors || [];
        this.enableBehaviors(this._getDefaultBehaviors().concat(a));
      } else
        b('FBLogger')('layer').warn(
          "The markup param wasn't provided to the Layer constructor"
        );
    }
    j.prototype.init = function (a) {
      this._configure(this._config, a);
      a = this._config.addedBehaviors || [];
      this.enableBehaviors(this._getDefaultBehaviors().concat(a));
      this._initialized = !0;
      return this;
    };
    j.prototype._configure = function (a, c) {
      __p && __p();
      if (c) {
        var d = b('isNode')(c),
          e = typeof c === 'string' || b('HTML').isHTML(c);
        this.containsReactComponent = b('BootloadedReact').isValidElement(c);
        !d &&
          !e &&
          !this.containsReactComponent &&
          b('FBLogger')('layer').warn(
            'Layer must be init with HTML, DOM node or React instance'
          );
        if (e) c = b('HTML')(c).getRootNode();
        else if (this.containsReactComponent) {
          d = document.createElement('div');
          var f = !0;
          b('BootloadedReact').render(
            c,
            d,
            function () {
              this.inform('reactshow'), f || this.updatePosition();
            }.bind(this)
          );
          f = !1;
          c = this._reactContainer = d;
        }
      }
      this._root = this._buildWrapper(a, c);
      a.attributes && b('DOM').setAttributes(this._root, a.attributes);
      a.classNames &&
        a.classNames.forEach(b('CSS').addClass.bind(null, this._root));
      b('CSS').addClass(this._root, 'uiLayer');
      a.causalElement && (this._causalElement = b('ge')(a.causalElement));
      a.permanent && (this._permanent = a.permanent);
      a.isStrictlyControlled &&
        (this._isStrictlyControlled = a.isStrictlyControlled);
      b('DataStore').set(this._root, 'layer', this);
      return this;
    };
    j.prototype._getDefaultBehaviors = function () {
      return [];
    };
    j.prototype.getCausalElement = function () {
      return this._causalElement;
    };
    j.prototype.setCausalElement = function (a) {
      this._causalElement = a;
      return this;
    };
    j.prototype.getInsertParent = function () {
      return this._insertParent || document.body;
    };
    j.prototype.getRoot = function () {
      this._root ||
        (this._destroyed
          ? b('FBLogger')('layer').warn(
              'No root node for this Layer. It has either not yet been set or the Layer has been destroyed.  This layer has been destroyed.'
            )
          : b('FBLogger')('layer').warn(
              'No root node for this Layer. It has probably not been set.'
            ));
      return this._root;
    };
    j.prototype.getContentRoot = function () {
      return this.getRoot();
    };
    j.prototype._buildWrapper = function (a, b) {
      return b;
    };
    j.prototype.setInsertParent = function (a) {
      a &&
        (this._shown &&
          a !== this.getInsertParent() &&
          (b('DOM').appendContent(a, this.getRoot()), this.updatePosition()),
        (this._insertParent = a));
      return this;
    };
    j.prototype.showAfterDelay = function (a) {
      setTimeout(this.show.bind(this), a);
    };
    j.prototype.show = function () {
      __p && __p();
      if (this._shown) return this;
      var a = this.getRoot();
      a != null || g(0, undefined);
      this.inform('beforeshow');
      b('Style').set(a, 'visibility', 'hidden');
      b('Style').set(a, 'overflow', 'hidden');
      b('CSS').show(a);
      b('DOM').appendContent(this.getInsertParent(), a);
      this.updatePosition() !== !1
        ? ((this._shown = !0),
          this.inform('show'),
          j.inform('show', this),
          this._permanent ||
            setTimeout(
              function () {
                this._shown && i.push(this);
              }.bind(this),
              0
            ))
        : b('CSS').hide(a);
      b('Style').set(a, 'visibility', '');
      b('Style').set(a, 'overflow', '');
      b('Style').set(a, 'opacity', '1');
      this.inform('aftershow');
      return this;
    };
    j.prototype.hide = function (a) {
      if (this._isStrictlyControlled) {
        this._shown && this.inform('runhide', a);
        return this;
      }
      return this._hide();
    };
    j.prototype._hide = function () {
      if (this._hiding || !this._shown || this.inform('beforehide') === !1)
        return this;
      this._hiding = !0;
      this.inform('starthide') !== !1 && this.finishHide();
      return this;
    };
    j.prototype.conditionShow = function (a) {
      return a ? this.show() : this._hide();
    };
    j.prototype.finishHide = function () {
      __p && __p();
      if (this._shown) {
        this._permanent || b('removeFromArray')(i, this);
        this._hiding = !1;
        this._shown = !1;
        var a = this.getRoot();
        a != null || g(0, undefined);
        b('CSS').hide(a);
        this.inform('hide');
        j.inform('hide', this);
      }
    };
    j.prototype.isShown = function () {
      return this._shown;
    };
    j.prototype.updatePosition = function () {
      return !0;
    };
    j.prototype.destroy = function () {
      __p && __p();
      this.containsReactComponent &&
        b('BootloadedReact').unmountComponentAtNode(this._reactContainer);
      this.finishHide();
      var a = this.getRoot();
      b('DOM').remove(a);
      this.destroyBehaviors();
      this.inform('destroy');
      j.inform('destroy', this);
      b('DataStore').remove(a, 'layer');
      this._root = this._causalElement = null;
      this._destroyed = !0;
    };
    j.init = function (a, b) {
      a.init(b);
    };
    j.initAndShow = function (a, b) {
      a.init(b).show();
    };
    j.show = function (a) {
      a.show();
    };
    j.showAfterDelay = function (a, b) {
      a.showAfterDelay(b);
    };
    j.getTopmostLayer = function () {
      return i[i.length - 1];
    };
    Object.assign(j, b('ArbiterMixin'));
    Object.assign(j.prototype, {
      _destroyed: !1,
      _initialized: !1,
      _root: null,
      _shown: !1,
      _hiding: !1,
      _causalElement: null,
      _reactContainer: null,
    });
    b('Event').listen(
      document.documentElement,
      'keydown',
      function (event) {
        if (b('KeyEventController').filterEventTargets(event, 'keydown'))
          for (var a = i.length - 1; a >= 0; a--)
            if (i[a].inform('key', event) === !1) return !1;
        return !0;
      },
      b('Event').Priority.URGENT
    );
    var k;
    b('Event').listen(document.documentElement, 'mousedown', function (event) {
      k = event.getTarget();
    });
    var l;
    b('Event').listen(document.documentElement, 'mouseup', function (event) {
      (l = event.getTarget()),
        b('setImmediate')(function () {
          (k = null), (l = null);
        });
    });
    b('Event').listen(document.documentElement, 'click', function (event) {
      __p && __p();
      var a = k,
        c = l;
      k = null;
      l = null;
      var d = i.length;
      if (!d) return;
      var e = event.getTarget();
      if (e !== c || e !== a) return;
      if (!b('DOM').contains(document.documentElement, e)) return;
      if (e.offsetWidth != null && !e.offsetWidth) return;
      if (b('Parent').byClass(e, 'generic_dialog')) return;
      while (d--) {
        c = i[d];
        a = c.getContentRoot();
        a != null || g(0, undefined);
        if (b('ContextualThing').containsIncludingLayers(a, e)) return;
        if (c.inform('blur', { target: e }) === !1 || c.isShown()) return;
      }
    });
    e.exports = j;
  },
  null
);
__d(
  'DOMControl',
  ['DataStore', '$'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a) {
      (this.root = b('$').fromIDOrElement(a)),
        (this.updating = !1),
        b('DataStore').set(a, 'DOMControl', this);
    }
    a.prototype.getRoot = function () {
      return this.root;
    };
    a.prototype.beginUpdate = function () {
      if (this.updating) return !1;
      this.updating = !0;
      return !0;
    };
    a.prototype.endUpdate = function () {
      this.updating = !1;
    };
    a.prototype.update = function (a) {
      if (!this.beginUpdate()) return this;
      this.onupdate(a);
      this.endUpdate();
    };
    a.prototype.onupdate = function (a) {};
    a.getInstance = function (a) {
      return b('DataStore').get(a, 'DOMControl');
    };
    e.exports = a;
  },
  null
);
__d(
  'Input',
  ['CSS', 'DOMControl', 'DOMQuery'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = {
      isWhiteSpaceOnly: function (a) {
        return !/\S/.test(a || '');
      },
      isEmpty: function (a) {
        return g.isWhiteSpaceOnly(a.value);
      },
      getValue: function (a) {
        return g.isEmpty(a) ? '' : a.value;
      },
      getValueRaw: function (a) {
        return a.value;
      },
      setValue: function (a, c) {
        a.value = c || '';
        c = b('DOMControl').getInstance(a);
        c && c.resetHeight && c.resetHeight();
      },
      setPlaceholder: function (a, b) {
        a.setAttribute('aria-label', b), a.setAttribute('placeholder', b);
      },
      reset: function (a) {
        (a.value = ''), (a.style.height = '');
      },
      setSubmitOnEnter: function (a, c) {
        b('CSS').conditionClass(a, 'enter_submit', c);
      },
      getSubmitOnEnter: function (a) {
        return b('CSS').hasClass(a, 'enter_submit');
      },
      setMaxLength: function (a, b) {
        b > 0 ? a.setAttribute('maxlength', b) : a.removeAttribute('maxlength');
      },
    };
    e.exports = g;
  },
  null
);
__d(
  'Form',
  [
    'DataStore',
    'DOM',
    'DOMQuery',
    'DTSG',
    'DTSGUtils',
    'Input',
    'LSD',
    'PHPQuerySerializer',
    'Random',
    'SprinkleConfig',
    'URI',
    'getElementPosition',
    'isFacebookURI',
    'isNode',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = 'FileList' in window,
      h = 'FormData' in window;
    function i(a) {
      var c = {};
      b('PHPQuerySerializer')
        .serialize(a)
        .split('&')
        .forEach(function (a) {
          if (a) {
            a = /^([^=]*)(?:=(.*))?$/.exec(a);
            var d = b('URI').decodeComponent(a[1]),
              e = a[2] !== undefined;
            e = e ? b('URI').decodeComponent(a[2]) : null;
            c[d] = e;
          }
        });
      return c;
    }
    var j = {
      getInputs: function (a) {
        a === void 0 && (a = document);
        return [].concat(
          b('DOMQuery').scry(a, 'input'),
          b('DOMQuery').scry(a, 'select'),
          b('DOMQuery').scry(a, 'textarea'),
          b('DOMQuery').scry(a, 'button')
        );
      },
      getInputsByName: function (a) {
        var b = {};
        j.getInputs(a).forEach(function (a) {
          var c = b[a.name];
          b[a.name] = typeof c === 'undefined' ? a : [a].concat(c);
        });
        return b;
      },
      getSelectValue: function (a) {
        return a.options[a.selectedIndex].value;
      },
      setSelectValue: function (a, b) {
        for (var c = 0; c < a.options.length; ++c)
          if (a.options[c].value == b) {
            a.selectedIndex = c;
            break;
          }
      },
      getRadioValue: function (a) {
        for (var b = 0; b < a.length; b++) if (a[b].checked) return a[b].value;
        return null;
      },
      getElements: function (a) {
        return a.tagName == 'FORM' && a.elements != a
          ? Array.from(a.elements)
          : j.getInputs(a);
      },
      getAttribute: function (a, b) {
        return (a.getAttributeNode(b) || {}).value || null;
      },
      setDisabled: function (a, c) {
        j.getElements(a).forEach(function (a) {
          if (a.disabled !== undefined) {
            var d = b('DataStore').get(a, 'origDisabledState');
            c
              ? (d === undefined &&
                  b('DataStore').set(a, 'origDisabledState', a.disabled),
                (a.disabled = c))
              : d === !1 && (a.disabled = !1);
          }
        });
      },
      forEachValue: function (a, c, d) {
        __p && __p();
        j.getElements(a).forEach(function (a) {
          __p && __p();
          if (!a.name || a.disabled) return;
          if (a.type === 'submit') return;
          if (a.type === 'reset' || a.type === 'button' || a.type === 'image')
            return;
          if ((a.type === 'radio' || a.type === 'checkbox') && !a.checked)
            return;
          if (a.nodeName === 'SELECT') {
            for (var c = 0, e = a.options.length; c < e; c++) {
              var f = a.options[c];
              f.selected && d('select', a.name, f.value);
            }
            return;
          }
          if (a.type === 'file') {
            if (g) {
              f = a.files;
              for (var c = 0; c < f.length; c++) d('file', a.name, f.item(c));
            }
            return;
          }
          d(a.type, a.name, b('Input').getValue(a));
        }),
          c &&
            c.name &&
            c.type === 'submit' &&
            b('DOMQuery').contains(a, c) &&
            b('DOMQuery').isNodeOfType(c, ['input', 'button']) &&
            d('submit', c.name, c.value);
      },
      createFormData: function (a, c) {
        __p && __p();
        if (!h) return null;
        var d = new FormData();
        if (a)
          if (b('isNode')(a))
            j.forEachValue(a, c, function (b, a, c) {
              d.append(a, c);
            });
          else {
            c = i(a);
            for (var e in c) c[e] == null ? d.append(e, '') : d.append(e, c[e]);
          }
        return d;
      },
      serialize: function (a, b) {
        var c = {};
        j.forEachValue(a, b, function (a, b, d) {
          if (a === 'file') return;
          j._serializeHelper(c, b, d);
        });
        return j._serializeFix(c);
      },
      _serializeHelper: function (a, b, c) {
        __p && __p();
        var d = Object.prototype.hasOwnProperty,
          e = /([^\]]+)\[([^\]]*)\](.*)/.exec(b);
        if (e) {
          if (!a[e[1]] || !d.call(a, e[1])) {
            a[e[1]] = d = {};
            if (a[e[1]] !== d) return;
          }
          d = 0;
          if (e[2] === '') while (a[e[1]][d] !== undefined) d++;
          else d = e[2];
          e[3] === ''
            ? (a[e[1]][d] = c)
            : j._serializeHelper(a[e[1]], d.concat(e[3]), c);
        } else a[b] = c;
      },
      _serializeFix: function (a) {
        __p && __p();
        for (var b in a)
          a[b] instanceof Object && (a[b] = j._serializeFix(a[b]));
        var c = Object.keys(a);
        if (c.length === 0 || c.some(isNaN)) return a;
        c.sort(function (a, b) {
          return a - b;
        });
        var d = 0,
          e = c.every(function (a) {
            return +a === d++;
          });
        return e
          ? c.map(function (b) {
              return a[b];
            })
          : a;
      },
      post: function (a, c, d, e) {
        __p && __p();
        e === void 0 && (e = !0);
        a = new (b('URI'))(a);
        var f = document.createElement('form');
        f.action = a.toString();
        f.method = 'POST';
        f.style.display = 'none';
        var g = !b('isFacebookURI')(a);
        if (d) {
          if (g) {
            f.rel = 'noopener';
            if (d === '_blank') {
              d = btoa(b('Random').uint32());
              var h = window.open('about:blank', d);
              h === undefined || (h.opener = null);
            }
          }
          f.target = d;
        }
        if (e && !g && a.getSubdomain() !== 'apps') {
          h = b('DTSG').getToken();
          h &&
            ((c.fb_dtsg = h),
            b('SprinkleConfig').param_name &&
              (c[b('SprinkleConfig').param_name] =
                b('DTSGUtils').getNumericValue(h)));
          b('LSD').token && (c.lsd = b('LSD').token);
        }
        j.createHiddenInputs(c, f);
        b('DOMQuery').getRootElement().appendChild(f);
        f.submit();
        return !1;
      },
      createHiddenInputs: function (a, c, d, e) {
        __p && __p();
        e === void 0 && (e = !1);
        d = d || {};
        a = i(a);
        for (var f in a) {
          if (a[f] === null) continue;
          if (d[f] && e) d[f].value = a[f];
          else {
            var g = b('DOM').create('input', {
              type: 'hidden',
              name: f,
              value: a[f],
            });
            d[f] = g;
            c.appendChild(g);
          }
        }
        return d;
      },
      getFirstElement: function (a, c) {
        __p && __p();
        c === void 0 &&
          (c = [
            'input[type="text"]',
            'textarea',
            'input[type="password"]',
            'input[type="button"]',
            'input[type="submit"]',
          ]);
        var d = [];
        for (var e = 0; e < c.length; e++) {
          d = b('DOMQuery').scry(a, c[e]);
          for (var f = 0; f < d.length; f++) {
            var g = d[f];
            try {
              var h = b('getElementPosition')(g);
              if (h.y > 0 && h.x > 0) return g;
            } catch (a) {}
          }
        }
        return null;
      },
      focusFirst: function (a) {
        a = j.getFirstElement(a);
        if (a) {
          a.focus();
          return !0;
        }
        return !1;
      },
    };
    e.exports = j;
  },
  null
);
__d(
  'LinkController',
  ['DataStore', 'Event', 'Parent', 'trackReferrer'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = '@@LinkController',
      h = [],
      i = [];
    c = {
      registerHandler: function (a) {
        h.push(a);
      },
      registerFallbackHandler: function (a) {
        i.push(a);
      },
    };
    function a(a) {
      __p && __p();
      a = a.getTarget();
      var c = b('Parent').byTag(a, 'a');
      if (!(c instanceof HTMLAnchorElement)) return;
      var d = k(c);
      if (!d || m(a) || b('DataStore').get(c, g) || d.endsWith('#')) return;
      a = b('Event').listen(c, 'click', function (a) {
        b('trackReferrer')(c, d), !c.rel && !c.target && !l(a) && j(c, a);
      });
      b('DataStore').set(c, g, a);
    }
    function j(a, event) {
      h.concat(i).every(function (b) {
        if (b(a, event) === !1) {
          event.prevent();
          return !1;
        }
        return !0;
      });
    }
    function k(a) {
      if (a && !a.rel) {
        a = a.getAttribute('href');
        if (a) {
          var b = a.match(/^(\w+):/);
          if (!b || b[1].match(/^http/i)) return a;
        }
      }
      return null;
    }
    function l(event) {
      return event.getModifiers().any || (event.which && event.which !== 1);
    }
    function m(a) {
      return a.nodeName === 'INPUT' && a.type === 'file';
    }
    b('Event').listen(document.documentElement, 'mousedown', a);
    b('Event').listen(document.documentElement, 'keydown', a);
    e.exports = c;
  },
  null
);
__d(
  'PageTransitionPriorities',
  [],
  function (a, b, c, d, e, f) {
    a = 5;
    b = a + 1;
    e.exports = { DEFAULT: a, LEFT_NAV: b, SOCIAL_SEARCH_DIALOG: b + 1 };
  },
  null
);
__d(
  'computeRelativeURI',
  ['URI', 'isEmpty', 'isFacebookURI'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function g(a, b) {
      if (!b) return a;
      if (b.charAt(0) == '/') return b;
      var c = a.split('/').slice(0, -1);
      c[0] !== '' && !1;
      b.split('/').forEach(function (a) {
        a === '.' ||
          (a === '..' ? c.length > 1 && (c = c.slice(0, -1)) : c.push(a));
      });
      return c.join('/');
    }
    function a(a, c) {
      __p && __p();
      var d = new (b('URI'))(),
        e = new (b('URI'))(a),
        f = new (b('URI'))(c);
      if (f.getDomain() && !b('isFacebookURI')(f)) return c;
      var h = e;
      a = ['Protocol', 'Domain', 'Port', 'Path', 'QueryData', 'Fragment'];
      a.forEach(function (a) {
        var c = a === 'Path' && h === e;
        c && d.setPath(g(e.getPath(), f.getPath()));
        b('isEmpty')(f['get' + a]()) || (h = f);
        c || d['set' + a](h['get' + a]());
      });
      return d;
    }
    e.exports = a;
  },
  null
);
__d(
  'getReferrerURI',
  ['ErrorUtils', 'URI', 'isFacebookURI'],
  function (a, b, c, d, e, f) {
    function c() {
      if (a.PageTransitions && a.PageTransitions.isInitialized())
        return a.PageTransitions.getReferrerURI();
      else {
        var c = b('ErrorUtils').applyWithGuard(
          function (a) {
            return new (b('URI'))(a);
          },
          null,
          [document.referrer]
        );
        return c && b('isFacebookURI')(c) ? c : null;
      }
    }
    e.exports = c;
  },
  null
);
__d(
  'PageTransitionsRegistrar',
  [
    'invariant',
    'Bootloader',
    'DOMQuery',
    'Form',
    'LinkController',
    'PageTransitionPriorities',
    'Parent',
    'Run',
    'URI',
    'computeRelativeURI',
    'getReferrerURI',
    'goURI',
    'setTimeoutAcrossTransitions',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    b('Run').onAfterLoad(function () {
      b('Bootloader').loadModules(
        ['PageTransitions'],
        function (a) {
          a && a._init && a._init();
        },
        'PageTransitionsRegistrar'
      );
    });
    var h = [],
      i = [];
    d = {
      DELAY_HISTORY: 'delay_history_PTR',
      registerHandler: function (a, c) {
        a != null || g(0, undefined),
          (c = c || b('PageTransitionPriorities').DEFAULT),
          h[c] || (h[c] = []),
          h[c].push(a);
      },
      removeHandler: function (a, c) {
        c = c || b('PageTransitionPriorities').DEFAULT;
        var d = -1;
        h[c] && (d = h[c].indexOf(a));
        d > -1 && h[c].splice(d, 1);
      },
      registerCompletionCallback: function (a) {
        i.push(a);
      },
      getMostRecentURI: l,
      getReferrerURI: b('getReferrerURI'),
      _getTransitionHandlers: function () {
        return h;
      },
      _getCompletionCallbacks: function () {
        return i;
      },
      _resetCompletionCallbacks: function () {
        i = [];
      },
      __onClick: d,
      __onSubmit: f,
    };
    var j = null;
    function c(a) {
      (j = a),
        b('setTimeoutAcrossTransitions')(function () {
          j = null;
        }, 0);
    }
    function d(event) {
      j &&
        (event.isDefaultPrevented() ||
          (k(j), b('goURI')(j.getAttribute('href'))),
        event.kill());
    }
    function k(a) {
      var c = a.getAttribute('href'),
        d = b('computeRelativeURI')(l().getQualifiedURI(), c).toString();
      c != d && a.setAttribute('href', d);
    }
    function f(event, a) {
      __p && __p();
      var c = event.getTarget();
      if (
        b('Form').getAttribute(c, 'rel') ||
        b('Form').getAttribute(c, 'target')
      )
        return;
      var d = new (b('URI'))(b('Form').getAttribute(c, 'action'));
      d = b('computeRelativeURI')(l(), d);
      c.setAttribute('action', d.toString());
      if (
        (b('Form').getAttribute(c, 'method') || 'GET').toUpperCase() == 'GET'
      ) {
        c = b('Form').serialize(c);
        a &&
          ((b('DOMQuery').isNodeOfType(a, 'input') && a.type === 'submit') ||
            (a = b('Parent').byTag(a, 'button'))) &&
          a.name &&
          (c[a.name] = a.value);
        b('goURI')(d.addQueryData(c));
        event.kill();
      }
    }
    b('LinkController').registerFallbackHandler(c);
    function l() {
      if (a.PageTransitions && a.PageTransitions.isInitialized())
        return a.PageTransitions.getMostRecentURI();
      else {
        var c = b('URI').getRequestURI(!1);
        c = c.getUnqualifiedURI();
        var d = new (b('URI'))(c).setFragment(null),
          e = c.getFragment();
        e.charAt(0) === '!' && d.toString() === e.substr(1) && (c = d);
        return c;
      }
    }
    e.exports = d;
  },
  null
);
__d(
  'LayerHideOnTransition',
  ['LayerHideSources', 'PageTransitionsRegistrar'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a) {
      (this._handler = function (a) {
        this._enabled &&
          this.isTransitionRelevant(a) &&
          this._layer.hide(b('LayerHideSources').TRANSITION),
          this._subscribe();
      }.bind(this)),
        (this._layer = a);
    }
    a.prototype.enable = function () {
      (this._enabled = !0),
        this._subscribed || setTimeout(this._subscribe.bind(this), 0);
    };
    a.prototype.disable = function () {
      (this._enabled = !1),
        b('PageTransitionsRegistrar').removeHandler(this._handler);
    };
    a.prototype.isTransitionRelevant = function (a) {
      return !0;
    };
    a.prototype._subscribe = function () {
      b('PageTransitionsRegistrar').registerHandler(this._handler),
        (this._subscribed = !0);
    };
    Object.assign(a.prototype, { _enabled: !1, _subscribed: !1 });
    e.exports = a;
  },
  null
);
__d(
  'Rect',
  ['invariant', 'Vector', '$'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    function h(a, c, d, e, f) {
      __p && __p();
      if (arguments.length === 1) {
        if (a instanceof h) return a;
        if (a instanceof b('Vector'))
          return new h(a.y, a.x, a.y, a.x, a.domain);
        typeof a === 'string' && (a = b('$')(a));
        return h.getElementBounds(a);
      }
      (typeof a === 'number' &&
        typeof c === 'number' &&
        typeof d === 'number' &&
        typeof e === 'number' &&
        (!f || typeof f === 'string')) ||
        g(0, undefined);
      Object.assign(this, { t: a, r: c, b: d, l: e, domain: f || 'pure' });
      return this;
    }
    h.prototype.w = function () {
      return this.r - this.l;
    };
    h.prototype.h = function () {
      return this.b - this.t;
    };
    h.prototype.getWidth = function () {
      return this.w();
    };
    h.prototype.getHeight = function () {
      return this.h();
    };
    h.prototype.toString = function () {
      return (
        '((' + this.l + ', ' + this.t + '), (' + this.r + ', ' + this.b + '))'
      );
    };
    h.prototype.contains = function (a) {
      a = new h(a).convertTo(this.domain);
      var b = this;
      return b.l <= a.l && b.r >= a.r && b.t <= a.t && b.b >= a.b;
    };
    h.prototype.isEqualTo = function (a) {
      return (
        this.t === a.t &&
        this.r === a.r &&
        this.b === a.b &&
        this.l === a.l &&
        this.domain === a.domain
      );
    };
    h.prototype.add = function (a, c) {
      if (arguments.length == 1) {
        a instanceof h && a.domain != 'pure' && (a = a.convertTo(this.domain));
        return a instanceof b('Vector') ? this.add(a.x, a.y) : this;
      }
      var d = parseFloat(a),
        e = parseFloat(c);
      return new h(this.t + e, this.r + d, this.b + e, this.l + d, this.domain);
    };
    h.prototype.sub = function (a, c) {
      if (arguments.length == 1 && a instanceof b('Vector'))
        return this.add(a.mul(-1));
      else if (typeof a === 'number' && typeof c === 'number')
        return this.add(-a, -c);
      return this;
    };
    h.prototype.rotateAroundOrigin = function (a) {
      var b = this.getCenter().rotate((a * Math.PI) / 2),
        c = 0;
      a % 2
        ? ((c = this.h()), (a = this.w()))
        : ((c = this.w()), (a = this.h()));
      var d = b.y - a / 2;
      b = b.x - c / 2;
      a = d + a;
      c = b + c;
      return new h(d, c, a, b, this.domain);
    };
    h.prototype.boundWithin = function (a) {
      var b = 0,
        c = 0;
      this.l < a.l ? (b = a.l - this.l) : this.r > a.r && (b = a.r - this.r);
      this.t < a.t ? (c = a.t - this.t) : this.b > a.b && (c = a.b - this.b);
      return this.add(b, c);
    };
    h.prototype.getCenter = function () {
      return new (b('Vector'))(
        this.l + this.w() / 2,
        this.t + this.h() / 2,
        this.domain
      );
    };
    h.prototype.getTop = function () {
      return this.t;
    };
    h.prototype.getRight = function () {
      return this.r;
    };
    h.prototype.getBottom = function () {
      return this.b;
    };
    h.prototype.getLeft = function () {
      return this.l;
    };
    h.prototype.getPositionVector = function () {
      return new (b('Vector'))(this.l, this.t, this.domain);
    };
    h.prototype.getDimensionVector = function () {
      return new (b('Vector'))(this.w(), this.h(), 'pure');
    };
    h.prototype.convertTo = function (a) {
      __p && __p();
      if (this.domain == a) return this;
      if (a == 'pure') return new h(this.t, this.r, this.b, this.l, 'pure');
      if (this.domain == 'pure') {
        !1;
        return new h(0, 0, 0, 0);
      }
      var c = new (b('Vector'))(this.l, this.t, this.domain).convertTo(a);
      return new h(c.y, c.x + this.w(), c.y + this.h(), c.x, a);
    };
    h.deserialize = function (a) {
      a = a.split(':');
      return new h(
        parseFloat(a[1]),
        parseFloat(a[2]),
        parseFloat(a[3]),
        parseFloat(a[0])
      );
    };
    h.newFromVectors = function (a, b) {
      return new h(a.y, a.x + b.x, a.y + b.y, a.x, a.domain);
    };
    h.getElementBounds = function (a) {
      return h.newFromVectors(
        b('Vector').getElementPosition(a),
        b('Vector').getElementDimensions(a)
      );
    };
    h.getViewportBounds = function () {
      return h.newFromVectors(
        b('Vector').getScrollPosition(),
        b('Vector').getViewportDimensions()
      );
    };
    h.getViewportWithoutScrollbarsBounds = function () {
      return h.newFromVectors(
        b('Vector').getScrollPosition(),
        b('Vector').getViewportWithoutScrollbarDimensions()
      );
    };
    h.minimumBoundingBox = function (a) {
      var b = new h(Infinity, -Infinity, -Infinity, Infinity),
        c;
      for (var d = 0; d < a.length; d++)
        (c = a[d]),
          (b.t = Math.min(b.t, c.t)),
          (b.r = Math.max(b.r, c.r)),
          (b.b = Math.max(b.b, c.b)),
          (b.l = Math.min(b.l, c.l));
      return b;
    };
    e.exports = h;
  },
  null
);
__d(
  'SVGChecker',
  [],
  function (a, b, c, d, e, f) {
    e.exports = {
      isSVG: function (a) {
        return !!a.ownerSVGElement || a.tagName.toLowerCase() === 'svg';
      },
      isDisplayed: function (a) {
        try {
          a = a.getBBox();
          if (a && (a.height === 0 || a.width === 0)) return !1;
        } catch (a) {
          return !1;
        }
        return !0;
      },
    };
  },
  null
);
__d(
  'getOverlayZIndex',
  ['Style'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a, c) {
      __p && __p();
      c = c || document.body;
      var d = [];
      while (a && a !== c) d.push(a), (a = a.parentNode);
      if (a !== c) return 0;
      for (var a = d.length - 1; a >= 0; a--) {
        c = d[a];
        if (b('Style').get(c, 'position') != 'static') {
          c = parseInt(b('Style').get(c, 'z-index'), 10);
          if (!isNaN(c)) return c;
        }
      }
      return 0;
    }
    e.exports = a;
  },
  null
);
__d(
  'getOwnObjectValues',
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      return Object.keys(a).map(function (b) {
        return a[b];
      });
    }
    e.exports = a;
  },
  null
);
__d(
  'ContextualLayer',
  [
    'Arbiter',
    'ARIA',
    'Bootloader',
    'ContextualLayerAlignmentEnum',
    'ContextualLayerPositionEnum',
    'ContextualThing',
    'CSS',
    'DataStore',
    'DOM',
    'Event',
    'Layer',
    'LayerHideOnTransition',
    'Locale',
    'Parent',
    'Rect',
    'Scroll',
    'Style',
    'SVGChecker',
    'Vector',
    'containsNode',
    'emptyFunction',
    'getOffsetParent',
    'getOverlayZIndex',
    'getOwnObjectValues',
    'isElementNode',
    'removeFromArray',
    'throttle',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g, h;
    function i(a) {
      return (
        a.getPosition() === 'left' ||
        (a.isVertical() && a.getAlignment() === 'right')
      );
    }
    g = babelHelpers.inherits(j, b('Layer'));
    h = g && g.prototype;
    j.prototype._configure = function (a, b) {
      a.dialogRole !== 'dialog' && (this._dialogRole = a.dialogRole),
        a.shouldSetARIAProperties === !1 &&
          (this._shouldSetARIAProperties = a.shouldSetARIAProperties),
        a.label && (this._label = a.label),
        a.labelledBy && (this._labelledBy = a.labelledBy),
        h._configure.call(this, a, b),
        a.context
          ? this.setContext(a.context)
          : a.contextID
          ? this._setContextID(a.contextID)
          : a.contextSelector &&
            (this._setContextSelector(a.contextSelector),
            this._setARIAProperties()),
        this.setPosition(a.position),
        this.setAlignment(a.alignment),
        this.setOffsetX(a.offsetX),
        this.setOffsetY(a.offsetY),
        this.setArrowDimensions(a.arrowDimensions),
        (this._content = b);
    };
    j.prototype._getDefaultBehaviors = function () {
      var a = j.getDefaultBehaviorsAsObject();
      return h._getDefaultBehaviors
        .call(this)
        .concat(b('getOwnObjectValues')(a));
    };
    j.prototype._buildWrapper = function (a, c) {
      this._contentWrapper = b('DOM').create(
        'div',
        { className: 'uiContextualLayer' },
        c
      );
      this._dialogRole &&
        this._contentWrapper.setAttribute('role', this._dialogRole);
      this._labelledBy
        ? this._contentWrapper.setAttribute('aria-labelledby', this._labelledBy)
        : this._label &&
          this._contentWrapper.setAttribute('aria-label', this._label);
      this._dialogRole === 'alert' &&
        this._contentWrapper.setAttribute('aria-atomic', 'true');
      return b('DOM').create(
        'div',
        {
          className: 'uiContextualLayerPositioner',
          'data-testid': a['data-testid'],
        },
        this._contentWrapper
      );
    };
    j.prototype.getInsertParent = function () {
      var a = this._insertParent;
      if (!a) {
        var c = this.getContext();
        c && (a = b('Parent').byClass(c, 'uiContextualLayerParent'));
      }
      return a || h.getInsertParent.call(this);
    };
    j.prototype.setContent = function (a) {
      this._content = a;
      b('DOM').setContent(this._contentWrapper, this._content);
      this._shown && this.updatePosition();
      return this;
    };
    j.prototype.setContext = function (a) {
      return this.setContextWithBounds(a, null);
    };
    j.prototype.setContextWithBounds = function (a, c) {
      __p && __p();
      if (
        this._contextNode === a &&
        c &&
        this._contextBounds &&
        c.isEqualTo(this._contextBounds)
      )
        return this;
      this._contextNode = a;
      a =
        c &&
        this._contextBounds &&
        c.t === this._contextBounds.t &&
        c.r === this._contextBounds.r &&
        c.b === this._contextBounds.b &&
        c.l === this._contextBounds.l;
      if (a) return this;
      this._contextBounds = c || null;
      this._contextSelector = this._contextScrollParent = null;
      this._shown &&
        (b('ContextualThing').register(this.getRoot(), this._contextNode),
        this.updatePosition());
      this._setParentSubscription();
      this._setARIAProperties();
      return this;
    };
    j.prototype.shouldSetARIAProperties = function (a) {
      this._shouldSetARIAProperties = a;
      return this;
    };
    j.prototype._setARIAProperties = function () {
      if (!this._shouldSetARIAProperties) return this;
      this._dialogRole === 'dialog'
        ? b('ARIA').setPopup(this.getCausalElement(), this.getRoot())
        : this._dialogRole === 'region' &&
          b('Bootloader').loadModules(
            ['ContextualLayerInlineTabOrder'],
            function (a) {
              this.hasBehavior(a) || this.enableBehavior(a);
            }.bind(this),
            'ContextualLayer'
          );
      return this;
    };
    j.prototype._setContextID = function (a) {
      (this._contextSelector = '#' + a), (this._contextNode = null);
    };
    j.prototype._setContextSelector = function (a) {
      (this._contextSelector = a), (this._contextNode = null);
    };
    j.prototype.getCausalElement = function () {
      return h.getCausalElement.call(this) || this.getContext();
    };
    j.prototype._setParentSubscription = function () {
      __p && __p();
      var a = this.getContext(),
        c = null;
      while (a != null) {
        c = b('DataStore').get(a, 'layer');
        if (c) break;
        a = a.parentNode;
      }
      if (c === this._parentLayer) return;
      this._parentLayer &&
        this._parentSubscription &&
        (this._parentLayer.unsubscribe(this._parentSubscription),
        (this._parentSubscription = null));
      c &&
        (this._parentSubscription = c.subscribe('hide', this.hide.bind(this)));
      this._parentLayer = c;
    };
    j.prototype.setPosition = function (a) {
      this.getOrientation().setDefaultPosition(a) &&
        this._shown &&
        this.updatePosition();
      return this;
    };
    j.prototype.setAlignment = function (a) {
      this.getOrientation().setDefaultAlignment(a) &&
        this._shown &&
        this.updatePosition();
      return this;
    };
    j.prototype.setOffsetX = function (a) {
      this.getOrientation().setDefaultOffsetX(a) &&
        this._shown &&
        this.updatePosition();
      return this;
    };
    j.prototype.setArrowDimensions = function (a) {
      a &&
        this.getOrientation().setArrowOffset(a.offset) &&
        this._shown &&
        this.updatePosition();
      return this;
    };
    j.prototype.setOffsetY = function (a) {
      this.getOrientation().setDefaultOffsetY(a) &&
        this._shown &&
        this.updatePosition();
      return this;
    };
    j.prototype.getPosition = function () {
      return this.getOrientation().getPosition();
    };
    j.prototype.getOrientation = function () {
      this._orientation || (this._orientation = new n());
      return this._orientation;
    };
    j.prototype.getContentRoot = function () {
      return this._contentWrapper;
    };
    j.prototype.getContent = function () {
      return this._content;
    };
    j.prototype.getContext = function () {
      this._contextNode ||
        (this._contextNode = b('DOM').find(document, this._contextSelector));
      return this._contextNode;
    };
    j.prototype.getContextBounds = function (a) {
      if (this._contextBounds) return this._contextBounds.convertTo(a);
      var c = this.getContext();
      return b('Rect').newFromVectors(
        b('Vector').getElementPosition(c, a),
        b('Vector').getElementDimensions(c)
      );
    };
    j.prototype.getContextScrollParent = function () {
      !this._contextScrollParent
        ? (this._contextScrollParent = b('Style').getScrollParent(
            this.getContext()
          ))
        : b('isElementNode')(this._contextScrollParent) &&
          !b('containsNode')(
            document.documentElement,
            this._contextScrollParent
          ) &&
          (this._contextScrollParent = b('Style').getScrollParent(
            this.getContext()
          ));
      return this._contextScrollParent;
    };
    j.prototype.setInsertParent = function (a) {
      this._insertScrollParent = null;
      return h.setInsertParent.call(this, a);
    };
    j.prototype.getInsertScrollParent = function () {
      this._insertScrollParent ||
        (this._insertScrollParent = b('Style').getScrollParent(
          this.getInsertParent()
        ));
      return this._insertScrollParent;
    };
    j.prototype.show = function () {
      if (this._shown) return this;
      h.show.call(this);
      b('Arbiter').inform('contextualLayer/toggle', {
        show: !0,
        contentRoot: this.getRoot(),
      });
      this._shown &&
        (b('ContextualThing').register(this.getRoot(), this.getContext()),
        k.push(this),
        (this._resizeListener =
          this._resizeListener ||
          b('Event').listen(
            window,
            'resize',
            b('throttle')(
              function () {
                this._shown && this.updatePosition();
              }.bind(this)
            )
          )));
      return this;
    };
    j.prototype.finishHide = function () {
      b('removeFromArray')(k, this);
      this._resizeListener && this._resizeListener.remove();
      this._resizeListener = null;
      this._insertScrollParent = null;
      b('Arbiter').inform('contextualLayer/toggle', {
        show: !1,
        contentRoot: this.getRoot(),
      });
      return h.finishHide.call(this);
    };
    j.prototype.isFixed = function () {
      return (
        b('Style').isFixed(this.getContext()) &&
        !b('Style').isFixed(this.getInsertParent())
      );
    };
    j.prototype.updatePosition = function () {
      __p && __p();
      var a = this.getContext();
      if (!a) return !1;
      var c = this.isFixed();
      if (
        !c &&
        !(
          a.offsetParent ||
          (b('SVGChecker').isSVG(a) && b('SVGChecker').isDisplayed(a))
        )
      )
        return !1;
      var d = this.getRoot();
      b('Style').set(d, 'width', b('Vector').getViewportDimensions().x + 'px');
      var e = this.getOrientation();
      this.inform('adjust', e.reset());
      if (!e.isValid()) return !1;
      this._updateWrapperPosition(e);
      this._updateWrapperClass(e);
      b('CSS').conditionClass(d, 'uiContextualLayerPositionerFixed', c);
      var f,
        g,
        h = c ? 'viewport' : 'document';
      c = c ? document.documentElement : b('getOffsetParent')(d);
      if (c === document.documentElement)
        (f = new (b('Vector'))(0, 0)),
          (g = document.documentElement.clientWidth);
      else if (!d.offsetParent) return !1;
      else
        (f = b('Vector').getElementPosition(c, h)),
          (g = c.offsetWidth),
          c !== document.body &&
            (f = f.sub(
              new (b('Vector'))(b('Scroll').getLeft(c), b('Scroll').getTop(c))
            ));
      c = this.getContextBounds(h);
      h = c.l - f.x;
      f = c.t - f.y;
      var j = c.h();
      c = c.w();
      var k = b('Locale').isRTL();
      e.getPosition() === 'below' && (f += j);
      (e.getPosition() === 'right' ||
        (e.isVertical() && e.getAlignment() === 'right')) != k && (h += c);
      j = e.getOffsetX();
      e.isVertical() &&
        e.getAlignment() === 'center' &&
        (j += (c - this.getContentRoot().offsetWidth) / 2);
      k && (j *= -1);
      c = 'left';
      h = Math.floor(h + j);
      i(e) !== k && ((c = 'right'), (h = g - h));
      b('Style').set(d, c, h + 'px');
      b('Style').set(d, c === 'left' ? 'right' : 'left', '');
      j = this.getInsertScrollParent();
      k = 0;
      j !== window
        ? ((g = j.clientWidth), (k = b('Vector').getElementPosition(j).x))
        : (g = document.documentElement.clientWidth);
      h = b('Vector').getElementPosition(d).x - k;
      c === 'left' && g - h > 0
        ? b('Style').set(d, 'width', g - h + 'px')
        : c === 'right' && h + d.offsetWidth > 0
        ? b('Style').set(d, 'width', h + d.offsetWidth + 'px')
        : b('Style').set(d, 'width', '');
      b('Style').set(d, 'top', f + e.getOffsetY() + 'px');
      j = b('getOverlayZIndex')(a, this.getInsertParent());
      b('Style').set(d, 'z-index', j > 200 ? j : '');
      this.inform('reposition', e);
      return !0;
    };
    j.prototype._updateWrapperPosition = function (a) {
      var c = a.getPosition() === 'above';
      b('Style').set(this._contentWrapper, 'bottom', c ? '0' : null);
      c = b('Locale').isRTL() ? 'left' : 'right';
      a = i(a);
      b('Style').set(this._contentWrapper, c, a ? '0' : null);
    };
    j.prototype._updateWrapperClass = function (a) {
      a = a.getClassName();
      if (a === this._orientationClass) return;
      this._orientationClass &&
        b('CSS').removeClass(this._contentWrapper, this._orientationClass);
      this._orientationClass = a;
      b('CSS').addClass(this._contentWrapper, a);
    };
    j.prototype.simulateOrientation = function (a, c) {
      __p && __p();
      a = a.getClassName();
      if (a === this._orientationClass) return c();
      else {
        this._orientationClass &&
          b('CSS').removeClass(this._contentWrapper, this._orientationClass);
        b('CSS').addClass(this._contentWrapper, a);
        c = c();
        b('CSS').removeClass(this._contentWrapper, a);
        this._orientationClass &&
          b('CSS').addClass(this._contentWrapper, this._orientationClass);
        return c;
      }
    };
    j.prototype.destroy = function () {
      h.destroy.call(this);
      this._contentWrapper = null;
      this._content = null;
      return this;
    };
    j.prototype.getArrowDimensions = function () {
      return this._config.arrowDimensions || { offset: 0, length: 0 };
    };
    j.getDefaultBehaviorsAsObject = function () {
      return { LayerHideOnTransition: b('LayerHideOnTransition') };
    };
    function j() {
      g.apply(this, arguments);
    }
    var k = [];
    b('Arbiter').subscribe('reflow', function () {
      k.forEach(function (a) {
        a.updatePosition() === !1 && a.hide();
      });
    });
    Object.assign(j.prototype, {
      _contentWrapper: null,
      _content: null,
      _contextNode: null,
      _contextBounds: null,
      _contextSelector: null,
      _dialogRole: 'dialog',
      _label: null,
      _labelledBy: [],
      _parentLayer: null,
      _parentSubscription: null,
      _orientation: null,
      _orientationClass: null,
      _shouldSetARIAProperties: !0,
    });
    var l = b('emptyFunction').thatReturnsArgument,
      m = b('emptyFunction').thatReturnsArgument;
    function n() {
      (this._default = {
        _position: 'above',
        _alignment: 'left',
        _offsetX: 0,
        _offsetY: 0,
        _valid: !0,
        _preferMoreContentShownRect: !1,
      }),
        this.reset();
    }
    n.prototype.setPosition = function (a) {
      this._position = l(a);
      return this;
    };
    n.prototype.setAlignment = function (a) {
      this._alignment = m(a);
      return this;
    };
    n.prototype.getOppositePosition = function () {
      return n.OPPOSITE[this.getPosition()];
    };
    n.prototype.invalidate = function () {
      this._valid = !1;
      return this;
    };
    n.prototype.getPosition = function () {
      return this._position || 'above';
    };
    n.prototype.getAlignment = function () {
      return this._alignment || 'left';
    };
    n.prototype.getOffsetX = function () {
      var a = this._offsetX || 0;
      !this.isVertical()
        ? this._default._position !== this._position && (a *= -1)
        : this._default._alignment !== this._alignment && (a *= -1);
      return a;
    };
    n.prototype.getOffsetY = function () {
      var a = this._offsetY || 0;
      this.isVertical() &&
        this._default._position !== this._position &&
        (a *= -1);
      return a;
    };
    n.prototype.getClassName = function () {
      __p && __p();
      var a = this.getAlignment(),
        b = this.getPosition();
      if (b === 'below')
        if (a === 'left') return 'uiContextualLayerBelowLeft';
        else if (a === 'right') return 'uiContextualLayerBelowRight';
        else return 'uiContextualLayerBelowCenter';
      else if (b === 'above')
        if (a === 'left') return 'uiContextualLayerAboveLeft';
        else if (a === 'right') return 'uiContextualLayerAboveRight';
        else return 'uiContextualLayerAboveCenter';
      else if (b === 'left') return 'uiContextualLayerLeft';
      else return 'uiContextualLayerRight';
    };
    n.prototype.isValid = function () {
      return this._valid;
    };
    n.prototype.isVertical = function () {
      return this.getPosition() === 'above' || this.getPosition() === 'below';
    };
    n.prototype.reset = function () {
      Object.assign(this, this._default);
      return this;
    };
    n.prototype.setDefaultPosition = function (a) {
      var b = this._default._position;
      this._default._position = l(a);
      return b !== a;
    };
    n.prototype.setDefaultAlignment = function (a) {
      var b = this._default._alignment;
      this._default._alignment = m(a);
      return b !== a;
    };
    n.prototype.setDefaultOffsetX = function (a) {
      var b = this._default._offsetX;
      this._default._offsetX = a;
      return b !== a;
    };
    n.prototype.setArrowOffset = function (a) {
      var b = this._default._arrowOffset;
      this._default._arrowOffset = a;
      return b !== a;
    };
    n.prototype.getArrowOffset = function () {
      return this._default._arrowOffset || 0;
    };
    n.prototype.setDefaultOffsetY = function (a) {
      var b = this._default._offsetY;
      this._default._offsetY = a;
      return b !== a;
    };
    n.prototype.setPreferMoreContentShownRect = function (a) {
      var b = this._default._preferMoreContentShownRect;
      this._default._preferMoreContentShownRect = a;
      return b !== a;
    };
    n.prototype.getPreferMoreContentShownRect = function () {
      return this._default._preferMoreContentShownRect;
    };
    n.OPPOSITE = {
      above: 'below',
      below: 'above',
      left: 'right',
      right: 'left',
    };
    e.exports = j;
  },
  null
);
__d(
  'ReactBrowserEventEmitter',
  ['ReactDOM-fb'],
  function (a, b, c, d, e, f) {
    a = b('ReactDOM-fb').__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    e.exports = a.ReactBrowserEventEmitter;
  },
  null
);
__d(
  'ReactLayerCommon',
  [
    'invariant',
    'React',
    'ReactBrowserEventEmitter',
    'ReactDOM',
    'SubscriptionsHandler',
    'emptyFunction',
    'warning',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h,
      i = function (a) {
        a.isPropagationStopped = b('emptyFunction').thatReturnsTrue;
      };
    h = babelHelpers.inherits(j, b('React').Component);
    h && h.prototype;
    j.prototype.render = function () {
      return b('React').createElement(
        'div',
        {
          onClick: i,
          onBlur: i,
          onDoubleClick: i,
          onFocus: i,
          onKeyDown: i,
          onKeyPress: i,
          onKeyUp: i,
          onMouseDown: i,
          onMouseMove: i,
          onMouseUp: i,
        },
        this.props.children
      );
    };
    function j() {
      h.apply(this, arguments);
    }
    var k = {
      makeInitialSubscriptions: function (a, c, d) {
        __p && __p();
        var e = new (b('SubscriptionsHandler'))();
        k.layerSubscribe(
          a,
          e,
          'show',
          function () {
            return c.onToggle && c.onToggle(!0);
          },
          d
        );
        k.layerSubscribe(
          a,
          e,
          'hide',
          function () {
            return c.onToggle && c.onToggle(!1);
          },
          d
        );
        k.layerSubscribe(
          a,
          e,
          'blur',
          function (a, b) {
            return c.onBlur && c.onBlur(b);
          },
          d
        );
        k.layerSubscribe(
          a,
          e,
          'runhide',
          function (a, b) {
            return c.onHide && (c.includeHideSource ? c.onHide(b) : c.onHide());
          },
          d
        );
        return e;
      },
      layerSubscribe: function (a, c, d, e, f) {
        f = a.subscribe || a.addListener;
        c.addSubscriptions(
          f.call(a, d, function (a, c) {
            var d = b('ReactBrowserEventEmitter').isEnabled();
            d && e(a, c);
          })
        );
      },
      render: function (a, c) {
        a = b('ReactDOM').createPortal(b('React').createElement(j, null, a), c);
        a === undefined &&
          b('ReactDOM').createPortal._isMockFunction &&
          (a = null);
        return a;
      },
      diffBehaviors: function (a, b, c) {
        __p && __p();
        var d;
        for (d in a) a[d] && !b[d] && c.disableBehavior(a[d]);
        for (d in b) {
          var e = a[d],
            f = b[d];
          if (e && f) {
            e === f || g(0, undefined, d);
            continue;
          }
          e && c.disableBehavior(e);
          f && c.enableBehavior(f);
        }
      },
    };
    e.exports = k;
  },
  null
);
__d(
  'ReactLayer',
  [
    'invariant',
    'React',
    'ReactDOM',
    'ReactLayerCommon',
    'emptyFunction',
    'getObjectValues',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    a = !1;
    var h = {
      UNSAFE_componentWillMount: function () {
        this._layerContainer = document.createElement('div');
      },
      componentDidMount: function () {
        (this.layer = this.createLayer(this._layerContainer)),
          this.layer || g(0, undefined),
          (this.layerSubscriptions = b(
            'ReactLayerCommon'
          ).makeInitialSubscriptions(
            this.layer,
            this.props,
            this._stackDEVTemporaryDoNotUse || null
          )),
          this._resetBehaviors();
      },
      componentDidUpdate: function (a) {
        this.receiveProps(this.props, a);
      },
      componentWillUnmount: function () {
        (this._layerContainer = null),
          this.layerSubscriptions &&
            (this.layerSubscriptions.release(),
            (this.layerSubscriptions = null)),
          this.layer && (this.layer.destroy(), (this.layer = null));
      },
      render: function () {
        return b('ReactLayerCommon').render(
          this.props.children,
          this._layerContainer
        );
      },
      enumerateBehaviors: function (a) {
        a = this.getEffectiveBehaviors(a);
        return b('getObjectValues')(a).filter(
          b('emptyFunction').thatReturnsArgument
        );
      },
      _resetBehaviors: function () {
        this._diffBehaviors({}, this.props.behaviors);
      },
      updateBehaviors: function (a, b) {
        this._diffBehaviors(a, b);
      },
      _diffBehaviors: function (a, c) {
        (a = this.getEffectiveBehaviors(a)),
          (c = this.getEffectiveBehaviors(c)),
          b('ReactLayerCommon').diffBehaviors(a, c, this.layer);
      },
      getEffectiveBehaviors: function (a) {
        return !this.getDefaultEnabledBehaviors
          ? a || {}
          : babelHelpers['extends']({}, this.getDefaultEnabledBehaviors(), a);
      },
      layerSubscribe: function (a, c) {
        b('ReactLayerCommon').layerSubscribe(
          this.layer,
          this.layerSubscriptions,
          a,
          c,
          this._stackDEVTemporaryDoNotUse || null
        );
      },
    };
    c = {
      createClass: function (a) {
        return b('React').createClass({ mixins: [h, a] });
      },
    };
    e.exports = c;
  },
  null
);
__d(
  'ContextualLayer.react',
  [
    'ContextualLayer',
    'React',
    'ReactBrowserEventEmitter',
    'ReactDOM',
    'ReactLayer',
    'Style',
    'warning',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    a = b('React').PropTypes;
    c = b('ReactLayer').createClass({
      propTypes: {
        contextRef: a.func,
        context: function (a, c, d) {
          if ((a.context == null) == (a.contextRef == null))
            return new Error(
              'Exactly one of `context` or `contextRef` must be set on `' +
                (d + '`.')
            );
          a = a[c];
          if (a != null) {
            if (typeof a !== 'object')
              return new Error(
                'Invalid `' +
                  c +
                  '` supplied to `' +
                  d +
                  '`, expected a React component.'
              );
            if (b('React').isValidElement(a))
              return new Error(
                'Invalid `' +
                  c +
                  '` supplied to `' +
                  d +
                  "`, expected a React component instance. You're passing a React descriptor."
              );
          }
        },
      },
      immutableProps: { modal: null },
      createLayer: function (a) {
        __p && __p();
        var c = this._getContextNode(),
          d = {
            context: c,
            contextBounds: this.props.contextBounds,
            'data-testid': this.props['data-testid'],
            position: this.props.position,
            alignment: this.props.alignment,
            offsetX: this.props.offsetX,
            offsetY: this.props.offsetY,
            addedBehaviors: this.enumerateBehaviors(this.props.behaviors),
            shouldSetARIAProperties: this.props.shouldSetARIAProperties,
          };
        d = new (b('ContextualLayer'))(d, a);
        this._node = a;
        this._matchContextSize(this.props);
        this.props.contextBounds &&
          d.setContextWithBounds(c, this.props.contextBounds);
        this._resizeSubscription = d.subscribe(
          'resize',
          function (a, c) {
            a = b('ReactBrowserEventEmitter').isEnabled();
            a && this.props.onResize && this.props.onResize(c);
          }.bind(this)
        );
        d.conditionShow(this.props.shown);
        return d;
      },
      componentWillUnmount: function () {
        this._resizeSubscription &&
          (this._resizeSubscription.unsubscribe(),
          (this._resizeSubscription = null));
      },
      receiveProps: function (a, b) {
        this.updateBehaviors(b.behaviors, a.behaviors);
        b = this._getContextNode();
        a.contextBounds
          ? this.layer.setContextWithBounds(b, a.contextBounds)
          : this.layer.setContext(b);
        this._matchContextSize(a);
        this.layer.setPosition(a.position);
        this.layer.setAlignment(a.alignment);
        this.layer.setOffsetX(a.offsetX);
        this.layer.setOffsetY(a.offsetY);
        this.layer.conditionShow(a.shown);
      },
      getDefaultEnabledBehaviors: function () {
        return b('ContextualLayer').getDefaultBehaviorsAsObject();
      },
      _getContextNode: function () {
        var a;
        this.props.context
          ? (a = b('ReactDOM').findDOMNode(this.props.context))
          : this.props.contextRef &&
            (a = b('ReactDOM').findDOMNode(this.props.contextRef()));
        return a;
      },
      _matchContextSize: function (a) {
        var c = this._node,
          d = this._getContextNode();
        a.containerWidthMatchContext &&
          b('Style').set(c, 'width', d.offsetWidth + 'px');
        a.containerHeightMatchContext &&
          b('Style').set(c, 'height', d.offsetHeight + 'px');
      },
    });
    e.exports = c;
  },
  null
);
__d(
  'FocusEvent',
  ['Event', 'Run', 'ge', 'getOrCreateDOMID'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = {},
      h = !1;
    function i(a, b) {
      if (g[a]) {
        b = g[a].indexOf(b);
        b >= 0 && g[a].splice(b, 1);
        g[a].length === 0 && delete g[a];
      }
    }
    function j(event) {
      var a = event.getTarget();
      if (g[a.id] && g[a.id].length > 0) {
        var b = event.type === 'focusin' || event.type === 'focus';
        g[a.id].forEach(function (a) {
          a(b);
        });
      }
    }
    function k() {
      if (h) return;
      b('Event').listen(document.documentElement, 'focusout', j);
      b('Event').listen(document.documentElement, 'focusin', j);
      h = !0;
    }
    a = {
      listen: function (a, c) {
        __p && __p();
        k();
        var d = b('getOrCreateDOMID')(a);
        g[d] || (g[d] = []);
        g[d].push(c);
        var e = !1;
        function f() {
          e || (i(d, c), h && (h.remove(), (h = null)), (e = !0));
        }
        var h = b('Run').onLeave(function () {
          b('ge')(d) || f();
        });
        return {
          remove: function () {
            f();
          },
        };
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'Focus',
  [
    'cx',
    'CSS',
    'Event',
    'FocusEvent',
    'KeyStatus',
    'TooltipData',
    'ifRequired',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h = b('KeyStatus').isKeyDown,
      i = {
        set: function (a, c) {
          c === void 0 && (c = !1);
          if (a) {
            var d = b('ifRequired')(
              'VirtualCursorStatus',
              function (a) {
                return a.isVirtualCursorTriggered();
              },
              function () {
                return !1;
              }
            );
            c || h() || d ? j(a) : i.setWithoutOutline(a);
          }
        },
        setWithoutOutline: function (a) {
          if (a) {
            b('CSS').addClass(a, '_5f0v');
            var c = b('Event').listen(a, 'blur', function () {
              a && b('CSS').removeClass(a, '_5f0v'), c.remove();
            });
            b('TooltipData').suppress(a, !0);
            j(a);
            b('TooltipData').suppress(a, !1);
          }
        },
        relocate: function (a, c) {
          b('CSS').addClass(a, '_5f0v');
          return b('FocusEvent').listen(
            a,
            this.performRelocation.bind(this, a, c)
          );
        },
        performRelocation: function (a, c, d) {
          b('CSS').addClass(a, '_5f0v');
          a = b('ifRequired')(
            'FocusRing',
            function (a) {
              return a.usingKeyboardNavigation();
            },
            function () {
              return !0;
            }
          );
          d = d && a;
          b('CSS').conditionClass(c, '_3oxt', d);
          b('CSS').conditionClass(c, '_16jm', d);
        },
      };
    function j(a) {
      try {
        (a.tabIndex = a.tabIndex), a.focus();
      } catch (a) {}
    }
    e.exports = i;
  },
  null
);
__d(
  'AccessibleLayer',
  ['fbt', 'DOM', 'Event', 'Focus'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    function a(a) {
      (this._layer = a), (this._listener = null);
    }
    a.prototype.enable = function () {
      (this._afterShowSubscription = this._layer.subscribe(
        'aftershow',
        this._onAfterShow.bind(this)
      )),
        (this._afterHideSubscription = this._layer.subscribe(
          'hide',
          this._onAfterHide.bind(this)
        ));
    };
    a.prototype.disable = function () {
      this._listener && this._listener.remove(),
        this._afterShowSubscription.unsubscribe(),
        (this._listener = this._afterShowSubscription = null);
    };
    a.prototype._closeListener = function (event) {
      var a = this._layer.getCausalElement();
      a &&
        (a.tabIndex == -1
          ? ((a.tabIndex = 0), b('Focus').setWithoutOutline(a))
          : b('Focus').set(a));
      this._layer.hide();
    };
    a.prototype._setupCloseButton = function () {
      var a = this._layer.getContentRoot(),
        c = b('DOM').scry(a, '.layer_close_elem')[0];
      c ||
        ((c = b('DOM').create(
          'a',
          {
            className: 'accessible_elem layer_close_elem',
            href: '#',
            role: 'button',
          },
          [g._('Close popup and return')]
        )),
        b('DOM').appendContent(a, c));
      this._listener = b('Event').listen(
        c,
        'click',
        this._closeListener.bind(this)
      );
    };
    a.prototype._onAfterShow = function () {
      this._listener || this._setupCloseButton();
    };
    a.prototype._onAfterHide = function () {
      this._listener && this._listener.remove(), (this._listener = null);
    };
    e.exports = a;
  },
  null
);
__d(
  'ContextualDialogARIA',
  ['DOM', 'getOrCreateDOMID'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a) {
      this._layer = a;
    }
    a.prototype.enable = function () {
      this._subscription = this._layer.subscribe(
        'beforeshow',
        this._addAriaAttribute.bind(this)
      );
    };
    a.prototype.disable = function () {
      this._subscription.unsubscribe(), (this._subscription = null);
    };
    a.prototype._addAriaAttribute = function () {
      var a = this._layer.getCausalElement();
      if (!a) return;
      var c = b('DOM').scry(this._layer.getRoot(), '.accessible_elem');
      c.length &&
        a.setAttribute('aria-describedby', b('getOrCreateDOMID')(c[0]));
    };
    e.exports = a;
  },
  null
);
__d(
  'AbstractContextualDialogArrowBehavior',
  ['cx', 'CSS', 'DOM', 'Locale', 'Style', 'Vector', 'abstractMethod'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h = { bottom: '_53ik', top: '_53il', right: '_53im', left: '_53in' },
      i = { above: 'bottom', below: 'top', left: 'right', right: 'left' };
    function j(a) {
      this.__layer = this._layer = a;
    }
    j.prototype.enable = function () {
      this._subscription = this._layer.subscribe(
        ['adjust', 'reposition'],
        this._handle.bind(this)
      );
    };
    j.prototype.disable = function () {
      this._subscription.unsubscribe(), (this._subscription = null);
    };
    j.prototype.__getArrow = function () {
      return b('abstractMethod')(
        'AbstractContextualDialogArrowBehavior',
        '__getArrow'
      );
    };
    j.prototype._handle = function (a, b) {
      a === 'adjust' ? this._repositionArrow(b) : this._repositionRoot(b);
    };
    j.prototype._repositionRoot = function (a) {
      __p && __p();
      var c = a.getAlignment();
      if (c == 'center') return;
      var d = this._layer.getRoot(),
        e = this._layer.getContext();
      a = a.isVertical();
      var f = this._layer.getArrowDimensions(),
        g = f.offset;
      f = f.length;
      e = b('Vector').getElementDimensions(e);
      e = a ? e.x : e.y;
      if (e >= f + g * 2) return;
      f = f / 2 + g;
      g = e / 2;
      e = parseInt(f - g, 10);
      if (a) {
        f = null;
        c == 'left'
          ? (f = b('Locale').isRTL() ? 'right' : 'left')
          : (f = b('Locale').isRTL() ? 'left' : 'right');
        g = parseInt(b('Style').get(d, f), 10);
        b('Style').set(d, f, g - e + 'px');
      } else {
        a = parseInt(b('Style').get(d, 'top'), 10);
        b('Style').set(d, 'top', a - e + 'px');
      }
    };
    j.prototype._repositionArrow = function (a) {
      __p && __p();
      var c = this._layer.getContentRoot(),
        d = a.getPosition(),
        e = i[d];
      for (var f in h) b('CSS').conditionClass(c, h[f], e === f);
      if (d == 'none') return;
      this._arrow || (this._arrow = this.__getArrow());
      b('DOM').contains(c, this._arrow) ||
        b('DOM').appendContent(c, this._arrow);
      b('Style').set(this._arrow, 'top', '');
      b('Style').set(this._arrow, 'left', '');
      b('Style').set(this._arrow, 'right', '');
      b('Style').set(this._arrow, 'margin', '');
      e = j.getOffsetPercent(a);
      d = j.getOffset(a, e, this._layer);
      c = j.getOffsetSide(a);
      b('Style').set(this._arrow, c, e + '%');
      b('Style').set(this._arrow, 'margin-' + c, d + 'px');
    };
    j.getOffsetPercent = function (a) {
      var b = a.getAlignment();
      a = a.getPosition();
      if (a == 'above' || a == 'below')
        if (b == 'center') return 50;
        else if (b == 'right') return 100;
      return 0;
    };
    j.getOffsetSide = function (a) {
      a = a.isVertical();
      return a ? (b('Locale').isRTL() ? 'right' : 'left') : 'top';
    };
    j.getOffset = function (a, b, c) {
      c = c.getArrowDimensions();
      var d = c.offset;
      c = c.length;
      a = a.getAlignment();
      d = a == 'center' ? 0 : d;
      d += (c * b) / 100;
      a != 'left' && (d *= -1);
      return d;
    };
    e.exports = j;
  },
  null
);
__d(
  'flattenArray',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a) {
      var b = [];
      g(a, b);
      return b;
    }
    function g(a, b) {
      var c = a.length,
        d = 0;
      while (c--) {
        var e = a[d++];
        Array.isArray(e) ? g(e, b) : b.push(e);
      }
    }
    e.exports = a;
  },
  null
);
__d(
  'JSXDOM',
  ['DOM', 'FbtResultBase', 'flattenArray'],
  function (a, b, c, d, e, f) {
    __p && __p();
    a = [
      'a',
      'blockquote',
      'br',
      'button',
      'canvas',
      'checkbox',
      'dd',
      'div',
      'dl',
      'dt',
      'em',
      'form',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'hr',
      'i',
      'iframe',
      'img',
      'input',
      'label',
      'li',
      'option',
      'p',
      'pre',
      'select',
      'span',
      'strong',
      'table',
      'tbody',
      'thead',
      'td',
      'textarea',
      'th',
      'tr',
      'ul',
      'video',
    ];
    var g = {};
    a.forEach(function (a) {
      var c = function (c, d) {
        arguments.length > 2 && (d = Array.prototype.slice.call(arguments, 1));
        !d && c && ((d = c.children), delete c.children);
        d &&
          ((d = Array.isArray(d) ? d : [d]),
          (d = d.map(function (a) {
            return a instanceof b('FbtResultBase') ? a.flattenToArray() : a;
          })),
          (d = b('flattenArray')(d)));
        return b('DOM').create(a, c, d);
      };
      g[a] = c;
    });
    e.exports = g;
  },
  null
);
__d(
  'ContextualDialogArrow',
  ['cx', 'AbstractContextualDialogArrowBehavior', 'CSS', 'JSXDOM'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h, i;
    h = babelHelpers.inherits(a, b('AbstractContextualDialogArrowBehavior'));
    i = h && h.prototype;
    a.prototype.__getArrow = function () {
      return b('JSXDOM').i({ className: '_53io' });
    };
    a.prototype.enable = function () {
      i.enable.call(this);
      var a = this.__layer.getContentRoot();
      b('CSS').addClass(a, '_5v-0');
    };
    a.prototype.disable = function () {
      i.disable.call(this);
      var a = this.__layer.getContentRoot();
      b('CSS').removeClass(a, '_5v-0');
    };
    function a() {
      h.apply(this, arguments);
    }
    e.exports = a;
  },
  null
);
__d(
  'ContextualDialogDefaultTheme',
  ['cx'],
  function (a, b, c, d, e, f, g) {
    a = {
      wrapperClassName: '_53ip',
      arrowDimensions: { offset: 15, length: 16 },
    };
    e.exports = a;
  },
  null
);
__d(
  'ContextualDialogFitInViewport_PUSHSAFE',
  ['Style', 'Vector'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = 50,
      h = 10;
    function a(a) {
      (this._layer = a), (this._contentHeight = null), (this._contextY = null);
    }
    a.prototype.enable = function () {
      var a = this._layer.getArrowDimensions();
      this._arrowOffset = a.offset;
      a = a.length;
      this._arrowBuffer = this._arrowOffset + a;
      this._subscription = this._layer.subscribe(
        ['reposition'],
        function (a, b) {
          if (!this._layer.isFixed() || b.isVertical()) return;
          this._adjustPosition();
        }.bind(this)
      );
    };
    a.prototype.disable = function () {
      this._subscription.unsubscribe(), (this._subscription = null);
    };
    a.prototype._getContentHeight = function () {
      return b('Vector').getElementDimensions(this._layer._contentWrapper).y;
    };
    a.prototype._getContextY = function () {
      return b('Vector').getElementPosition(
        this._layer.getContext(),
        'viewport'
      ).y;
    };
    a.prototype._adjustPosition = function () {
      var a = this._getContextY(),
        c = this._getContentHeight();
      if (a === this._contextY && c === this._contentHeight) return;
      this._contextY = a;
      this._contentHeight = c;
      var d = b('Vector').getViewportDimensions().y;
      d = Math.min(
        Math.max(0, a + c + h - d),
        Math.max(0, a - g),
        c - this._arrowOffset - this._arrowBuffer
      );
      b('Style').set(this._layer.getContent(), 'top', -d + 'px');
    };
    e.exports = a;
  },
  null
);
__d(
  'LayerBounds',
  [
    'Locale',
    'Rect',
    'ViewportBounds',
    'containsNode',
    'ge',
    'getOverlayZIndex',
  ],
  function (a, b, c, d, e, f) {
    a = {
      getViewportRectForContext: function (a) {
        var c = b('ge')('globalContainer');
        c = (c && b('containsNode')(c, a)) || b('getOverlayZIndex')(a) < 300;
        a = b('Rect').getViewportWithoutScrollbarsBounds();
        c &&
          ((a.t += b('ViewportBounds').getTop()),
          b('Locale').isRTL()
            ? ((a.r -= b('ViewportBounds').getLeft()),
              (a.l += b('ViewportBounds').getRight()))
            : ((a.r -= b('ViewportBounds').getRight()),
              (a.l += b('ViewportBounds').getLeft())));
        return a;
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'ContextualLayerDimensions',
  ['LayerBounds', 'Locale', 'Rect', 'Vector'],
  function (a, b, c, d, e, f) {
    __p && __p();
    a = {
      getViewportRect: function (a) {
        return b('LayerBounds').getViewportRectForContext(a.getContext());
      },
      getLayerRect: function (a, c) {
        __p && __p();
        var d = a.getContextBounds('viewport'),
          e = a.simulateOrientation(c, function () {
            return b('Vector').getElementDimensions(a.getContentRoot());
          }),
          f = d.t + c.getOffsetY();
        c.getPosition() === 'above'
          ? (f -= e.y)
          : c.getPosition() === 'below' && (f += d.b - d.t);
        var g = d.l + c.getOffsetX();
        d = d.r - d.l;
        if (c.isVertical()) {
          var h = c.getAlignment();
          h === 'center'
            ? (g += (d - e.x) / 2)
            : (h === 'right') !== b('Locale').isRTL()
            ? (g += d - e.x + c.getArrowOffset())
            : (g -= c.getArrowOffset());
        } else
          (c.getPosition() === 'right') !== b('Locale').isRTL()
            ? (g += d)
            : (g -= e.x);
        return new (b('Rect'))(f, g + e.x, f + e.y, g, 'viewport');
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'AbstractContextualDialogKeepInViewportBehavior',
  [
    'ContextualLayerDimensions',
    'Event',
    'Vector',
    'abstractMethod',
    'throttle',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a) {
      (this._layer = a),
        (this._listeners = []),
        (this._subscription = null),
        (this._minimumTop = null);
    }
    a.prototype.enable = function () {
      __p && __p();
      var a = this._layer.getArrowDimensions();
      this._arrowOffset = a.offset;
      a = a.length;
      this._arrowBuffer = this._arrowOffset + a;
      this._subscription = this._layer.subscribe(
        ['show', 'hide', 'reposition'],
        function (a, b) {
          if (this._layer.isFixed()) return;
          a == 'reposition'
            ? (this._calculateMinimumTop(b), this._adjustForScroll())
            : a == 'show'
            ? (this._attachScroll(), this._adjustForScroll())
            : this._detachScroll();
        }.bind(this)
      );
      this._layer.isShown() && this._attachScroll();
    };
    a.prototype.disable = function () {
      this._layer.isShown() && this._detachScroll(),
        this._subscription.unsubscribe(),
        (this._subscription = null);
    };
    a.prototype.__adjustForScroll = function (a, c) {
      return b('abstractMethod')(
        'AbstractContextualDialogArrowBehavior',
        '__adjustForScroll'
      );
    };
    a.prototype._attachScroll = function () {
      var a = b('throttle')(this._adjustForScroll.bind(this)),
        c = this._layer.getContextScrollParent() || window;
      this._listeners = [
        b('Event').listen(c, 'scroll', a),
        b('Event').listen(window, 'resize', a),
      ];
    };
    a.prototype._detachScroll = function () {
      while (this._listeners.length) this._listeners.pop().remove();
      this._listeners = [];
    };
    a.prototype._getContentHeight = function () {
      return !this._layer._contentWrapper
        ? 0
        : b('Vector').getElementDimensions(this._layer._contentWrapper).y;
    };
    a.prototype._getContextY = function () {
      return b('Vector').getElementPosition(this._layer.getContext()).y;
    };
    a.prototype._calculateMinimumTop = function (a) {
      if (a.isVertical()) return;
      this._minimumTop =
        this._getContextY() -
        (this._getContentHeight() - this._arrowBuffer) +
        a.getOffsetY();
    };
    a.prototype._adjustForScroll = function () {
      __p && __p();
      var a = this._layer.getOrientation(),
        c = this._layer.getContent();
      if (a.isVertical() || !c) return;
      a = b('ContextualLayerDimensions').getViewportRect(this._layer);
      c = a.b - this._minimumTop;
      if (c < 0) return;
      a = this._getContentHeight();
      var d = a - (this._arrowBuffer + this._arrowOffset);
      d = Math.max(0, Math.min(d, d - (c - a)));
      this.__adjustForScroll(this._layer, d);
    };
    e.exports = a;
  },
  null
);
__d(
  'ContextualDialogKeepInViewport',
  ['AbstractContextualDialogKeepInViewportBehavior', 'Style'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g;
    g = babelHelpers.inherits(
      a,
      b('AbstractContextualDialogKeepInViewportBehavior')
    );
    g && g.prototype;
    a.prototype.__adjustForScroll = function (a, c) {
      a = a.getContent();
      b('Style').set(a, 'top', -c + 'px');
    };
    function a() {
      g.apply(this, arguments);
    }
    e.exports = a;
  },
  null
);
__d(
  'Button',
  [
    'csx',
    'cx',
    'CSS',
    'DataStore',
    'DOM',
    'Event',
    'Parent',
    'emptyFunction',
    'isNode',
  ],
  function (a, b, c, d, e, f, g, h) {
    __p && __p();
    var i = 'uiButtonDisabled',
      j = 'uiButtonDepressed',
      k = '_42fr',
      l = '_42fs',
      m = 'button:blocker',
      n = 'href',
      o = 'ajaxify';
    function p(a, c) {
      var d = b('DataStore').get(a, m);
      c
        ? d && (d.remove(), b('DataStore').remove(a, m))
        : d ||
          b('DataStore').set(
            a,
            m,
            b('Event').listen(
              a,
              'click',
              b('emptyFunction').thatReturnsFalse,
              b('Event').Priority.URGENT
            )
          );
    }
    function q(a) {
      a =
        b('Parent').byClass(a, 'uiButton') ||
        b('Parent').bySelector(a, '._42ft');
      if (!a) throw new Error('invalid use case');
      return a;
    }
    function r(a) {
      return b('DOM').isNodeOfType(a, 'a');
    }
    function s(a) {
      return b('DOM').isNodeOfType(a, 'button');
    }
    function t(a) {
      return b('CSS').matchesSelector(a, '._42ft');
    }
    var u = {
      getInputElement: function (a) {
        a = q(a);
        if (r(a)) throw new Error('invalid use case');
        return s(a) ? a : b('DOM').find(a, 'input');
      },
      isEnabled: function (a) {
        return !(b('CSS').hasClass(q(a), i) || b('CSS').hasClass(q(a), k));
      },
      setEnabled: function (a, c) {
        __p && __p();
        a = q(a);
        var d = t(a) ? k : i;
        b('CSS').conditionClass(a, d, !c);
        if (r(a)) {
          d = a.getAttribute('href');
          var e = a.getAttribute('ajaxify'),
            f = b('DataStore').get(a, n, '#'),
            g = b('DataStore').get(a, o);
          c
            ? (d || a.setAttribute('href', f),
              !e && g && a.setAttribute('ajaxify', g),
              a.removeAttribute('tabIndex'))
            : (d && d !== f && b('DataStore').set(a, n, d),
              e && e !== g && b('DataStore').set(a, o, e),
              a.removeAttribute('href'),
              a.removeAttribute('ajaxify'),
              a.setAttribute('tabIndex', '-1'));
          p(a, c);
        } else {
          f = u.getInputElement(a);
          f.disabled = !c;
          p(f, c);
        }
      },
      setDepressed: function (a, c) {
        a = q(a);
        var d = t(a) ? l : j;
        b('CSS').conditionClass(a, d, c);
      },
      isDepressed: function (a) {
        a = q(a);
        var c = t(a) ? l : j;
        return b('CSS').hasClass(a, c);
      },
      setLabel: function (a, c) {
        __p && __p();
        a = q(a);
        if (t(a)) {
          var d = [];
          c && d.push(c);
          var e = b('DOM').scry(a, '.img');
          for (var f = 0; f < e.length; f++) {
            var g = e[f],
              h = g.parentNode;
            h.classList &&
            (h.classList.contains('_4o_3') || h.classList.contains('_-xe'))
              ? a.firstChild === h
                ? d.unshift(h)
                : d.push(h)
              : a.firstChild == g
              ? d.unshift(g)
              : d.push(g);
          }
          b('DOM').setContent(a, d);
        } else if (r(a)) {
          h = b('DOM').find(a, 'span.uiButtonText');
          b('DOM').setContent(h, c);
        } else u.getInputElement(a).value = c;
        g = t(a) ? '_42fv' : 'uiButtonNoText';
        b('CSS').conditionClass(a, g, !c);
      },
      getIcon: function (a) {
        a = q(a);
        return b('DOM').scry(a, '.img')[0];
      },
      setIcon: function (a, c) {
        if (c && !b('isNode')(c)) return;
        var d = u.getIcon(a);
        if (!c) {
          d && b('DOM').remove(d);
          return;
        }
        b('CSS').addClass(c, 'customimg');
        d != c &&
          (d ? b('DOM').replace(d, c) : b('DOM').prependContent(q(a), c));
      },
    };
    e.exports = u;
  },
  null
);
__d(
  'LayerButtons',
  ['csx', 'Button', 'Event', 'LayerHideSources', 'Parent'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    function a(a) {
      this._layer = a;
    }
    a.prototype.enable = function () {
      this._listener = b('Event').listen(
        this._layer.getRoot(),
        'click',
        this._handle.bind(this)
      );
    };
    a.prototype.disable = function () {
      this._listener.remove(), (this._listener = null);
    };
    a.prototype._handle = function (a) {
      __p && __p();
      var c = a.getTarget(),
        d = b('Parent').byClass(c, 'layerHide');
      if (d) {
        this._layer.hide(b('LayerHideSources').LAYER_HIDE_BUTTON);
        return;
      }
      d = b('Parent').byClass(c, 'layerConfirm');
      if (d) {
        if (this._isButton(d) && !b('Button').isEnabled(d)) return;
        if (this._isInNestedLayer(d)) return;
        this._layer.inform('confirm', d) === !1 && a.prevent();
        return;
      }
      d = b('Parent').byClass(c, 'layerCancel');
      if (d) {
        if (this._isButton(d) && !b('Button').isEnabled(d)) return;
        if (this._isInNestedLayer(d)) return;
        this._layer.inform('cancel', d) !== !1 &&
          this._layer.hide(b('LayerHideSources').LAYER_CANCEL_BUTTON);
        a.prevent();
        return;
      }
      d = b('Parent').byClass(c, 'layerButton');
      if (d) {
        if (this._isButton(d) && !b('Button').isEnabled(d)) return;
        if (this._isInNestedLayer(d)) return;
        this._layer.inform('button', d) === !1 && a.prevent();
      }
    };
    a.prototype._isInNestedLayer = function (a) {
      a = b('Parent').byClass(a, 'uiLayer');
      var c = this._layer.getRoot();
      return !!(a && c !== a);
    };
    a.prototype._isButton = function (a) {
      return !!(
        b('Parent').byClass(a, 'uiButton') ||
        b('Parent').bySelector(a, '._42ft')
      );
    };
    a.prototype._listener = null;
    e.exports = a;
  },
  null
);
__d(
  'LayerFormHooks',
  ['Event'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a) {
      this._layer = a;
    }
    a.prototype.enable = function () {
      var a = this._layer.getRoot();
      this._subscriptions = [
        b('Event').listen(a, 'submit', this._onSubmit.bind(this)),
        b('Event').listen(a, 'success', this._onSuccess.bind(this)),
        b('Event').listen(a, 'error', this._onError.bind(this)),
      ];
    };
    a.prototype.disable = function () {
      this._subscriptions.forEach(function (a) {
        a.remove();
      }),
        (this._subscriptions = null);
    };
    a.prototype._onSubmit = function (event) {
      this._layer.inform('submit', event) === !1 && event.kill();
    };
    a.prototype._onSuccess = function (event) {
      this._layer.inform('success', event) === !1 && event.kill();
    };
    a.prototype._onError = function (event) {
      var a = event.getData();
      this._layer.inform('error', { response: a.response }) === !1 &&
        event.kill();
    };
    Object.assign(a.prototype, { _subscriptions: null });
    e.exports = a;
  },
  null
);
__d(
  'LayerMouseHooks',
  ['Arbiter', 'ContextualThing', 'Event', 'Layer'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = new (b('Arbiter'))();
    function a(a) {
      (this._layer = a),
        (this._subscriptions = []),
        (this._currentlyActive = !1);
    }
    a.prototype.enable = function () {
      this._subscriptions = [
        g.subscribe('mouseenter', this._handleActive.bind(this)),
        g.subscribe('mouseleave', this._handleInactive.bind(this)),
        this._layer.subscribe(
          'hide',
          function () {
            this._currentlyActive = !1;
          }.bind(this)
        ),
      ];
    };
    a.prototype.disable = function () {
      while (this._subscriptions.length)
        this._subscriptions.pop().unsubscribe();
      this._subscriptions = [];
      this._currentlyActive = !1;
    };
    a.prototype._handleActive = function (a, b) {
      !this._currentlyActive &&
        this._isNodeWithinStack(b) &&
        (this._layer.inform('mouseenter', b), (this._currentlyActive = !0));
    };
    a.prototype._handleInactive = function (a, b) {
      this._currentlyActive &&
        (!b || !this._isNodeWithinStack(b)) &&
        (this._layer.inform('mouseleave', b), (this._currentlyActive = !1));
    };
    a.prototype._isNodeWithinStack = function (a) {
      return b('ContextualThing').containsIncludingLayers(
        this._layer.getContentRoot(),
        a
      );
    };
    b('Layer').subscribe('show', function (a, c) {
      var d = c.getContentRoot(),
        e = [
          b('Event').listen(d, 'mouseenter', function () {
            g.inform('mouseenter', d);
          }),
          b('Event').listen(d, 'mouseleave', function (a) {
            g.inform('mouseleave', a.getRelatedTarget());
          }),
        ],
        f = c.subscribe('hide', function () {
          while (e.length) e.pop().remove();
          f.unsubscribe();
          e = f = null;
        });
    });
    e.exports = a;
  },
  null
);
__d(
  'LayerRefocusOnHide',
  ['ContextualThing', 'DOM', 'DOMQuery', 'Focus', 'Parent', 'getActiveElement'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a) {
      this._layer = a;
    }
    a.prototype.enable = function () {
      this._subscription = this._layer.subscribe(
        'hide',
        this._handle.bind(this)
      );
    };
    a.prototype.disable = function () {
      this._subscription.unsubscribe(), (this._subscription = null);
    };
    a.prototype._handle = function (a, event) {
      __p && __p();
      a = b('getActiveElement')();
      if (
        a === document.body ||
        b('DOMQuery').contains(this._layer.getRoot(), a)
      ) {
        a = this._layer.getCausalElement();
        while (a && !a.offsetWidth) {
          var c = b('Parent').byClass(a, 'uiToggle');
          if (c && c.offsetWidth) a = b('DOM').scry(c, '[rel="toggle"]')[0];
          else {
            c = b('ContextualThing').getContext(a);
            c ? (a = c) : (a = a.parentNode);
          }
        }
        a && b('Focus').set(a);
      }
    };
    Object.assign(a.prototype, { _subscription: null });
    e.exports = a;
  },
  null
);
__d(
  'ContextualDialog',
  [
    'csx',
    'cx',
    'invariant',
    'AccessibleLayer',
    'ContextualDialogARIA',
    'ContextualDialogArrow',
    'ContextualDialogDefaultTheme',
    'ContextualDialogFitInViewport_PUSHSAFE',
    'ContextualDialogKeepInViewport',
    'ContextualLayer',
    'CSS',
    'DOM',
    'Event',
    'JSXDOM',
    'LayerButtons',
    'LayerFormHooks',
    'LayerHideOnTransition',
    'LayerMouseHooks',
    'LayerRefocusOnHide',
    'Style',
    'removeFromArray',
    'shield',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    __p && __p();
    var j,
      k = 0,
      l = 300;
    c = babelHelpers.inherits(a, b('ContextualLayer'));
    j = c && c.prototype;
    function a(a, b) {
      j.constructor.call(this, a, b), (this._footer = null);
    }
    a.prototype._configure = function (a, c) {
      Object.assign(a, a.theme || b('ContextualDialogDefaultTheme'));
      var d = a.arrowBehavior || b('ContextualDialogArrow');
      a.addedBehaviors = a.addedBehaviors || [];
      a.addedBehaviors.push(d);
      j._configure.call(this, a, c);
      this._footer = b('DOM').scry(c, 'div._572u')[0];
      this._footer &&
        (this._footer.children.length === 1 &&
        this._footer.children[0].nodeName === 'DIV' &&
        this._footer.children[0].children.length === 0
          ? this._footer.parentNode.removeChild(this._footer)
          : b('CSS').addClass(this.getContentRoot(), '_kc'));
      a.hoverContext &&
        this._registerHoverHandlers(
          a.hoverContext,
          a.hoverShowDelay,
          a.hoverHideDelay
        );
    };
    a.prototype._registerHoverHandlers = function (a, c, d) {
      __p && __p();
      c == null && (c = k);
      d == null && (d = l);
      var e,
        f,
        g = function (event) {
          clearTimeout(f), (e = setTimeout(b('shield')(this.show, this), c));
        }.bind(this),
        h = function (event) {
          if (this._isHoverLocked()) return;
          clearTimeout(e);
          f = setTimeout(this.hide.bind(this), d);
        }.bind(this),
        i = b('Event').listen(a, 'mouseenter', g),
        j = b('Event').listen(a, 'mouseleave', h),
        m = this.subscribe('mouseenter', g),
        n = this.subscribe('mouseleave', h);
      this.subscribe('destroy', function () {
        clearTimeout(f),
          i.remove(),
          j.remove(),
          m.unsubscribe(),
          n.unsubscribe();
      });
    };
    a.prototype._getDefaultBehaviors = function () {
      var a = j._getDefaultBehaviors.call(this);
      b('removeFromArray')(a, b('LayerHideOnTransition'));
      return a.concat([
        b('AccessibleLayer'),
        b('LayerRefocusOnHide'),
        b('ContextualDialogKeepInViewport'),
        b('ContextualDialogFitInViewport_PUSHSAFE'),
        b('LayerButtons'),
        b('LayerFormHooks'),
        b('LayerMouseHooks'),
        b('ContextualDialogARIA'),
      ]);
    };
    a.prototype._buildWrapper = function (a, c) {
      __p && __p();
      this._innerWrapper = b('JSXDOM').div(null, c);
      var d = j._buildWrapper.call(this, a, this._innerWrapper);
      if (a.wrapperClassName) {
        var e = a.wrapperClassName.split(/\s+/);
        for (
          var e = e,
            f = Array.isArray(e),
            g = 0,
            e = f
              ? e
              : e[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var h;
          if (f) {
            if (g >= e.length) break;
            h = e[g++];
          } else {
            g = e.next();
            if (g.done) break;
            h = g.value;
          }
          h = h;
          b('CSS').addClass(d, h);
        }
      }
      this.replaceEntireLayerContents(c);
      this.getContent() === c || i(0, undefined);
      this.setWidth(a.width);
      return d;
    };
    a.prototype.getContentRoot = function () {
      !this._innerWrapper && i(0, undefined);
      return this._innerWrapper;
    };
    a.prototype.setContent = function (a) {
      i(0, undefined);
    };
    a.prototype.replaceEntireLayerContents = function (a) {
      (this._content = null),
        b('DOM').empty(this.getContentRoot()),
        this.setInnerContent(a);
    };
    a.prototype.setInnerContent = function (a) {
      b('CSS').addClass(a, '_53ij'),
        this.getContent()
          ? b('DOM').replace(this.getContent(), a)
          : b('DOM').appendContent(this.getContentRoot(), a),
        (this._content = a),
        this.isShown() && this.updatePosition();
    };
    a.prototype.setWidth = function (a) {
      b('Style').set(
        this.getContentRoot(),
        'width',
        a ? Math.floor(a) + 'px' : ''
      );
      return this;
    };
    a.prototype.getFooter = function () {
      return this._footer;
    };
    a.prototype.lockHover = function () {
      this._hoverLocked = !0;
      return this;
    };
    a.prototype.unlockHover = function () {
      this._hoverLocked = !1;
      return this;
    };
    a.prototype._isHoverLocked = function () {
      return !!this._hoverLocked;
    };
    a.setContext = function (a, b) {
      a.setContext(b);
    };
    e.exports = a;
  },
  null
);
__d(
  'TabbableElements',
  ['Style'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function g(a) {
      __p && __p();
      if (a.tabIndex < 0) return !1;
      if (
        a.tabIndex > 0 ||
        (a.tabIndex === 0 && a.getAttribute('tabIndex') !== null)
      )
        return !0;
      var b = a;
      switch (a.tagName) {
        case 'A':
          a = b;
          return !!a.href && a.rel != 'ignore';
        case 'INPUT':
          a = b;
          return a.type != 'hidden' && a.type != 'file' && !a.disabled;
        case 'BUTTON':
        case 'SELECT':
        case 'TEXTAREA':
          a = b;
          return !a.disabled;
      }
      return !1;
    }
    function h(a) {
      a = a;
      while (
        a &&
        a !== document &&
        b('Style').get(a, 'visibility') != 'hidden' &&
        b('Style').get(a, 'display') != 'none'
      )
        a = a.parentNode;
      return a === document;
    }
    var i = {
      find: function (a) {
        return Array.from(a.getElementsByTagName('*')).filter(i.isTabbable);
      },
      findFirst: function (a) {
        return Array.from(a.getElementsByTagName('*')).find(i.isTabbable);
      },
      isTabbable: function (a) {
        return g(a) && h(a);
      },
      isVisible: function (a) {
        return h(a);
      },
    };
    e.exports = i;
  },
  null
);
__d(
  'focusWithinLayer',
  ['DOMQuery', 'Focus', 'TabbableElements', 'getActiveElement'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a, c) {
      __p && __p();
      var d = b('DOMQuery').scry(a, '.autofocus')[0],
        e = !0;
      if (!d) {
        var f = b('getActiveElement')();
        if (b('DOMQuery').isNodeOfType(f, ['input', 'textarea'])) return;
        f = b('TabbableElements').find(a);
        for (var g = 0; g < f.length; g++) {
          var h = f[g];
          if (h.tagName !== 'A' || h.getAttribute('role') === 'button') {
            d = f[g];
            break;
          }
        }
      } else d.tabIndex !== 0 && (e = !1);
      d
        ? e
          ? b('Focus').set(d, c)
          : b('Focus').setWithoutOutline(d)
        : a.offsetWidth || ((a.tabIndex = -1), b('Focus').setWithoutOutline(a));
    }
    e.exports = a;
  },
  null
);
__d(
  'LayerAutoFocus',
  ['focusWithinLayer'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a) {
      (this._layer = a), (this._subscription = null);
    }
    a.prototype.enable = function () {
      this._subscription = this._layer.subscribe(
        'aftershow',
        this._focus.bind(this)
      );
    };
    a.prototype.disable = function () {
      this._subscription.unsubscribe(), (this._subscription = null);
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
  'LayerHideOnEscape',
  ['Event', 'Keys', 'LayerHideSources'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a) {
      this._layer = a;
    }
    a.prototype.enable = function () {
      this._subscription = this._layer.subscribe(
        'key',
        this._handle.bind(this)
      );
    };
    a.prototype.disable = function () {
      this._subscription != null && this._subscription.unsubscribe(),
        (this._subscription = null);
    };
    a.prototype._handle = function (a, event) {
      if (b('Event').getKeyCode(event) === b('Keys').ESC) {
        this._layer.hide(b('LayerHideSources').ESCAPE);
        return !1;
      }
      return undefined;
    };
    Object.assign(a.prototype, { _subscription: null });
    e.exports = a;
  },
  null
);
__d(
  'ReactAbstractContextualDialog',
  [
    'ContextualDialog',
    'ContextualDialogArrow',
    'ContextualDialogKeepInViewport',
    'LayerAutoFocus',
    'LayerHideOnBlur',
    'LayerHideOnEscape',
    'LayerRefocusOnHide',
    'React',
    'ReactDOM',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = b('React').PropTypes;
    a = {
      createSpec: function (a) {
        __p && __p();
        return {
          displayName: a.displayName,
          propTypes: {
            position: g.oneOf(['above', 'below', 'left', 'right']),
            alignment: g.oneOf(['left', 'center', 'right']),
            offsetX: g.number,
            offsetY: g.number,
            width: g.number,
            autoFocus: g.bool,
            focusContextOnHide: g.bool,
            arrowBehavior: g.func,
            behaviors: g.object,
            shown: g.bool,
            context: g.object,
            contextRef: g.func,
            dialogRole: g.oneOf(['dialog', 'region', 'alert']),
            hoverContext: g.object,
            hoverContextRef: g.func,
            hoverShowDelay: g.number,
            hoverHideDelay: g.number,
            hideOnBlur: g.bool,
            hideOnEscape: g.bool,
            insertParent: g.object,
            keepInViewport: g.bool,
            label: g.node,
            labelledBy: g.string,
            onBeforeHide: g.func,
            onToggle: g.func,
            hasActionableContext: g.bool,
            'data-testid': g.string,
          },
          immutableProps: { modal: null },
          createLayer: function (c) {
            __p && __p();
            var d =
                this.props.context ||
                b('ReactDOM').findDOMNode(this.props.contextRef()),
              e =
                this.props.hoverContext ||
                (this.props.hoverContextRef &&
                  b('ReactDOM').findDOMNode(this.props.hoverContextRef()));
            e = babelHelpers['extends'](
              {
                context: d,
                hoverContext: e,
                hoverShowDelay: this.props.hoverShowDelay,
                hoverHideDelay: this.props.hoverHideDelay,
                position: this.props.position,
                alignment: this.props.alignment,
                offsetX: this.props.offsetX,
                offsetY: this.props.offsetY,
                width: this.props.width,
                dialogRole: this.props.dialogRole,
                label: this.props.label,
                labelledBy: this.props.labelledBy,
                shouldSetARIAProperties: !this.props.hasActionableContext,
                arrowBehavior:
                  this.props.arrowBehavior || b('ContextualDialogArrow'),
                addedBehaviors: this.enumerateBehaviors(this.props.behaviors),
                'data-testid': this.props['data-testid'],
              },
              a || {}
            );
            e = new (b('ContextualDialog'))(e, c);
            this.props.contextBounds &&
              e.setContextWithBounds(d, this.props.contextBounds);
            this.props.autoFocus !== !1 &&
              e.enableBehavior(b('LayerAutoFocus'));
            this.props.hideOnBlur === !0 &&
              e.enableBehavior(b('LayerHideOnBlur'));
            this.props.hideOnEscape === !0 &&
              e.enableBehavior(b('LayerHideOnEscape'));
            this.props.focusContextOnHide === !1 &&
              e.disableBehavior(b('LayerRefocusOnHide'));
            this.props.keepInViewport === !1 &&
              e.disableBehavior(b('ContextualDialogKeepInViewport'));
            this.props.onBeforeHide &&
              e.subscribe('beforehide', this.props.onBeforeHide);
            this.props.insertParent &&
              e.setInsertParent(this.props.insertParent);
            e.conditionShow(this.props.shown);
            return e;
          },
          receiveProps: function (a, c) {
            this.updateBehaviors(c.behaviors, a.behaviors);
            var d =
              a.context ||
              (a.contextRef && b('ReactDOM').findDOMNode(a.contextRef()));
            d &&
              (a.contextBounds
                ? this.layer.setContextWithBounds(d, a.contextBounds)
                : this.layer.setContext(d));
            c.hideOnEscape !== a.hideOnEscape &&
              (a.hideOnEscape
                ? this.layer.enableBehavior(b('LayerHideOnEscape'))
                : this.layer.disableBehavior(b('LayerHideOnEscape')));
            this.layer
              .setPosition(a.position)
              .setAlignment(a.alignment)
              .setOffsetX(a.offsetX)
              .setOffsetY(a.offsetY)
              .setWidth(a.width)
              .conditionShow(a.shown);
          },
        };
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'InlineBlock.react',
  ['cx', 'React', 'joinClasses'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h;
    c = b('React').PropTypes;
    var i = { baseline: null, bottom: '_6d', middle: '_6b', top: '_6e' };
    h = babelHelpers.inherits(a, b('React').Component);
    h && h.prototype;
    a.prototype.render = function () {
      __p && __p();
      var a = this.props,
        c = a.alignv,
        d = a.height,
        e = a.fullWidth;
      a = babelHelpers.objectWithoutProperties(a, [
        'alignv',
        'height',
        'fullWidth',
      ]);
      c = i[c];
      e = '_6a' + (e ? ' _5u5j' : '');
      var f = b('joinClasses')(e, c);
      if (d != null) {
        c = b('React').createElement('div', {
          className: b('joinClasses')('_6a', c),
          style: { height: d + 'px' },
        });
        return b('React').createElement(
          'div',
          babelHelpers['extends']({}, a, {
            className: b('joinClasses')(this.props.className, e),
            height: null,
          }),
          c,
          b('React').createElement('div', { className: f }, this.props.children)
        );
      } else
        return b('React').createElement(
          'div',
          babelHelpers['extends']({}, a, {
            className: b('joinClasses')(this.props.className, f),
          }),
          this.props.children
        );
    };
    function a() {
      h.apply(this, arguments);
    }
    a.propTypes = {
      alignv: c.oneOf(['baseline', 'bottom', 'middle', 'top']),
      height: c.number,
      fullWidth: c.bool,
    };
    a.defaultProps = { alignv: 'baseline', fullWidth: !1 };
    e.exports = a;
  },
  null
);
__d(
  'ContextualLayerHideOnScroll',
  ['Event'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a) {
      this._layer = a;
    }
    a.prototype.enable = function () {
      this._subscriptions = [
        this._layer.subscribe(
          'contextchange',
          this._handleContextChange.bind(this)
        ),
        this._layer.subscribe('show', this.attach.bind(this)),
        this._layer.subscribe('hide', this.detach.bind(this)),
      ];
    };
    a.prototype.disable = function () {
      while (this._subscriptions.length)
        this._subscriptions.pop().unsubscribe();
      this.detach();
    };
    a.prototype.attach = function () {
      if (this._listener) return;
      var a = this._layer.getContextScrollParent();
      if (a === window) return;
      this._listener = b('Event').listen(
        a,
        'scroll',
        this._layer.hide.bind(this._layer)
      );
    };
    a.prototype.detach = function () {
      this._listener && this._listener.remove(), (this._listener = null);
    };
    a.prototype._handleContextChange = function () {
      this.detach(), this._layer.isShown() && this.attach();
    };
    Object.assign(a.prototype, { _subscriptions: [] });
    e.exports = a;
  },
  null
);
__d(
  'Toggler',
  [
    'csx',
    'invariant',
    'Arbiter',
    'ArbiterMixin',
    'ContextualThing',
    'CSS',
    'DataStore',
    'DOM',
    'Event',
    'Focus',
    'Keys',
    'Parent',
    'TabbableElements',
    'TimeSlice',
    '$',
    'createArrayFromMixed',
    'emptyFunction',
    'ge',
    'getContextualParent',
    'getObjectValues',
    'killswitch',
    'mixin',
    'queryThenMutateDOM',
    'setImmediate',
  ],
  function (a, b, c, d, e, f, g, h) {
    __p && __p();
    var i,
      j = [],
      k,
      l = !1;
    function m() {
      l ||
        ((l = !0),
        b('setImmediate')(function () {
          l = !1;
        }));
    }
    var n = function () {
      (n = b('emptyFunction')),
        b('Event').listen(
          document.documentElement,
          'click',
          function (event) {
            if (l) return;
            var a = event.getTarget();
            j.forEach(function (c) {
              (c.clickedTarget = a),
                c.active &&
                  !c.sticky &&
                  !b('ContextualThing').containsIncludingLayers(
                    c.getActive(),
                    a
                  ) &&
                  !c.inTargetFlyout(a) &&
                  c.inActiveDialog() &&
                  !c.isIgnoredByModalLayer(a) &&
                  c.hide();
            });
          },
          b('Event').Priority.URGENT
        );
    };
    c = babelHelpers.inherits(o, b('mixin')(b('ArbiterMixin')));
    i = c && c.prototype;
    function o() {
      i.constructor.call(this);
      this.active = null;
      this.togglers = {};
      this.setSticky(!1);
      j.push(this);
      this.subscribe(['show', 'hide'], o.inform.bind(o));
      return n();
    }
    o.prototype.focusFirstTabbableDescendant = function (a, c) {
      __p && __p();
      if (!b('killswitch')('TOGGLER_FAST_SHOW')) {
        c.$Toggler2 && c.$Toggler2.cancel();
        var d = null;
        c.$Toggler2 = b('queryThenMutateDOM')(
          function () {
            var c = a.querySelector('.uiToggleFlyout');
            c && (d = b('TabbableElements').findFirst(c) || c);
          },
          function () {
            delete c.$Toggler2,
              d &&
                (d.tabIndex == -1 && (d.tabIndex = 0),
                b('Focus').setWithoutOutline(d));
          }
        );
      } else {
        var e = a.querySelector('.uiToggleFlyout');
        if (e) {
          e = b('TabbableElements').find(e)[0] || e;
          e.tabIndex == -1 && (e.tabIndex = 0);
          b('Focus').setWithoutOutline(e);
        }
      }
    };
    o.prototype.show = function (a) {
      __p && __p();
      var c = p(this, a),
        d = c.active;
      if (a !== d) {
        d && c.hide();
        c.active = a;
        b('CSS').addClass(a, 'openToggler');
        d = b('DOM').scry(a, 'a[rel="toggle"]');
        d.length > 0 &&
          d[0].getAttribute('data-target') &&
          b('CSS').removeClass(
            b('$')(d[0].getAttribute('data-target')),
            'toggleTargetClosed'
          );
        this.focusFirstTabbableDescendant(a, c);
        d.length > 0 &&
          (b('DOM').appendContent(a, c.getToggler('next')),
          b('DOM').prependContent(a, c.getToggler('prev')));
        b('Event').listen(a, 'keydown', function (event) {
          if (b('Event').getKeyCode(event) === b('Keys').ESC && c.isShown()) {
            var d = b('DOM').scry(a, 'a[rel="toggle"]')[0];
            d && d.focus();
            c.hide();
            event.kill();
          }
        });
        a.getAttribute('data-toggle-wc') &&
          (c.__continuation = b('TimeSlice').getGuardedContinuation(
            'Toggler.show inform'
          ));
        c.inform('show', c, 'state');
      }
    };
    o.prototype.hide = function (a) {
      __p && __p();
      var c = p(this, a);
      c.$Toggler2 && c.$Toggler2.cancel();
      var d = c.active;
      if (d && (!a || a === d)) {
        b('CSS').removeClass(d, 'openToggler');
        a = b('DOM').scry(d, 'a[rel="toggle"]');
        a.length > 0 &&
          a[0].getAttribute('data-target') &&
          b('CSS').addClass(
            b('$')(a[0].getAttribute('data-target')),
            'toggleTargetClosed'
          );
        b('getObjectValues')(c.togglers).forEach(b('DOM').remove);
        d.getAttribute('data-toggle-wc') &&
          (c.__continuation = b('TimeSlice').getGuardedContinuation(
            'Toggler.hide inform'
          ));
        c.inform('hide', c, 'state');
        c.active = null;
      }
    };
    o.prototype.toggle = function (a) {
      var b = p(this, a);
      b.active === a ? b.hide() : b.show(a);
      m();
    };
    o.prototype.getActive = function () {
      return p(this).active;
    };
    o.prototype.isShown = function () {
      return p(this).active && b('CSS').hasClass(p(this).active, 'openToggler');
    };
    o.isNodeShown = function (a) {
      return b('CSS').hasClass(a, 'openToggler');
    };
    o.prototype.inTargetFlyout = function (a) {
      var c = q(this.getActive());
      return Boolean(c && b('ContextualThing').containsIncludingLayers(c, a));
    };
    o.prototype.inActiveDialog = function () {
      var c = a.Dialog && a.Dialog.getCurrent();
      return !c || b('DOM').contains(c.getRoot(), this.getActive());
    };
    o.prototype.isIgnoredByModalLayer = function (a) {
      a = !!b('Parent').bySelector(a, '._3qw');
      var c = !!b('Parent').bySelector(this.getActive(), '._3qw');
      return a && !c;
    };
    o.prototype.getToggler = function (a) {
      var c = p(this);
      c.togglers[a] ||
        ((c.togglers[a] = b('DOM').create('button', {
          className: 'hideToggler',
          onfocus: function () {
            var a = b('DOM').scry(c.active, 'a[rel="toggle"]')[0];
            a && a.focus();
            c.hide();
          },
          style: { right: a === 'next' ? '0' : '' },
        })),
        c.togglers[a].setAttribute('type', 'button'));
      return this.togglers[a];
    };
    o.prototype.setSticky = function (a) {
      var c = p(this);
      a = a !== !1;
      a !== c.sticky &&
        ((c.sticky = a),
        a
          ? c.$Toggler1 && c.$Toggler1.unsubscribe()
          : (c.$Toggler1 = b('Arbiter').subscribe(
              'pre_page_transition',
              c.hide.bind(c, null)
            )));
      return c;
    };
    o.prototype.setPrePageTransitionCallback = function (a) {
      var c = p(this);
      c.$Toggler1 && c.$Toggler1.unsubscribe();
      c.$Toggler1 = b('Arbiter').subscribe('pre_page_transition', a);
    };
    o.bootstrap = function (a) {
      a = a.parentNode;
      a != null || h(0, undefined);
      var b = o.getInstance(a);
      b != null || h(0, undefined);
      b.toggle(a);
    };
    o.createInstance = function (a) {
      var c = new o().setSticky(!0);
      b('DataStore').set(a, 'toggler', c);
      return c;
    };
    o.destroyInstance = function (a) {
      var c = b('DataStore').get(a, 'toggler');
      c && c.$Toggler2 && c.$Toggler2.cancel();
      b('DataStore').remove(a, 'toggler');
    };
    o.getInstance = function (a) {
      __p && __p();
      a = a;
      while (a) {
        var c = b('DataStore').get(a, 'toggler');
        if (c) return c;
        if (a instanceof Element)
          if (b('CSS').hasClass(a, 'uiToggleContext'))
            return o.createInstance(a);
          else if (
            !b('killswitch')('JEWEL_TOGGLER_INSTANCE_FIXES') &&
            b('CSS').hasClass(a, 'uiToggleFlyout')
          )
            return o.createInstance(a).setSticky(!1);
        a = b('getContextualParent')(a);
      }
      return (k = k || new o());
    };
    o.listen = function (a, c, d) {
      __p && __p();
      return o.subscribe(b('createArrayFromMixed')(a), function (a, b) {
        if (b.getActive() === c) {
          if (b.__continuation) {
            var e = b.__continuation;
            delete b.__continuation;
            return e(function () {
              return d(a, b);
            });
          }
          return d(a, b);
        }
      });
    };
    Object.assign(o, o.prototype, b('ArbiterMixin'));
    Object.assign(o, {
      subscribe: (function (a) {
        return function (c, d) {
          c = b('createArrayFromMixed')(c);
          c.includes('show') &&
            j.forEach(function (a) {
              a.getActive() && setTimeout(d.bind(null, 'show', a), 0);
            });
          return a(c, d);
        };
      })(o.subscribe.bind(o)),
    });
    function p(a, b) {
      return a instanceof o ? a : o.getInstance(b);
    }
    function q(a) {
      a = b('DOM').scry(a, 'a[rel="toggle"]');
      return a.length > 0 && a[0].getAttribute('data-target')
        ? b('ge')(a[0].getAttribute('data-target'))
        : null;
    }
    e.exports = o;
  },
  null
);
__d(
  'curry',
  ['bind'],
  function (a, b, c, d, e, f) {
    a = b('bind')(null, b('bind'), null);
    e.exports = a;
  },
  null
);
__d(
  'ParameterizedPopover',
  [
    'invariant',
    'Arbiter',
    'ArbiterMixin',
    'CSS',
    'DataStore',
    'Event',
    'Focus',
    'Keys',
    'KeyStatus',
    'LayerHideOnEscape',
    'SubscriptionsHandler',
    'Toggler',
    'curry',
    'mixin',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h;
    b('Toggler').subscribe(['show', 'hide'], function (a, c) {
      c = c.getActive();
      c != null || g(0, undefined);
      c = b('DataStore').get(c, 'Popover');
      c && (a === 'show' ? c.showLayer() : c.hideLayer());
    });
    c = babelHelpers.inherits(a, b('mixin')(b('ArbiterMixin')));
    h = c && c.prototype;
    function a(a, c, d, e) {
      h.constructor.call(this),
        (this._root = a),
        (this._triggerElem = c),
        (this._behaviors = d),
        (this._config = e || {}),
        (this._disabled = !!this._config.disabled),
        (this._listeners = new (b('SubscriptionsHandler'))()),
        this._disabled ||
          ((c.nodeName !== 'A' || c.rel !== 'toggle') &&
            this._setupClickListener(),
          this._setupKeyListener(),
          this._setupFocusListener(),
          this._setupBlurListener()),
        c.setAttribute('role', 'button'),
        b('DataStore').set(a, 'Popover', this),
        b('Toggler').getActive() === a && this.showLayer();
    }
    a.prototype.ensureInit = function () {
      this._layer || this._init();
    };
    a.prototype.showLayer = function () {
      if (this._disabled) return;
      this.ensureInit();
      this._layer.show();
      b('Toggler').show(this._root);
      b('CSS').addClass(this._root, 'selected');
      this.inform('show');
    };
    a.prototype.getContentRoot = function () {
      return this._root;
    };
    a.prototype.getLayer = function () {
      this.ensureInit();
      return this._layer;
    };
    a.prototype.hideLayer = function () {
      this.ensureInit(), this._layer.hide();
    };
    a.prototype.isShown = function () {
      return this._layer && this._layer.isShown();
    };
    a.prototype.setLayerContent = function (a) {
      this.ensureInit(), this._layer.setContent && this._layer.setContent(a);
    };
    a.prototype._init = function () {
      var a = this._config.layer;
      a.enableBehaviors([b('LayerHideOnEscape')]);
      b('Toggler').createInstance(a.getRoot()).setSticky(!1);
      a.subscribe('hide', this._onLayerHide.bind(this));
      this._behaviors && a.enableBehaviors(this._behaviors);
      this._layer = a;
      this.inform('init', null, 'persistent');
    };
    a.prototype._onLayerHide = function () {
      b('Toggler').hide(this._root),
        b('CSS').removeClass(this._root, 'selected'),
        this.inform('hide'),
        b('KeyStatus').getKeyDownCode() === b('Keys').ESC &&
          b('Focus').set(this._triggerElem);
    };
    a.prototype.enable = function () {
      if (!this._disabled) return;
      this._listeners.engage();
      this._setupClickListener();
      this._setupKeyListener();
      this._setupFocusListener();
      this._setupBlurListener();
      this._disabled = !1;
    };
    a.prototype.disable = function () {
      if (this._disabled) return;
      this.isShown() && this.hideLayer();
      this._listeners.release();
      this._triggerElem.getAttribute('rel') === 'toggle' &&
        this._triggerElem.removeAttribute('rel');
      this._disabled = !0;
    };
    a.prototype._setupClickListener = function () {
      this._listeners.addSubscriptions(
        b('Event').listen(
          this._triggerElem,
          'click',
          b('curry')(b('Toggler').bootstrap, this._triggerElem)
        )
      );
    };
    a.prototype._setupKeyListener = function () {
      this._listeners.addSubscriptions(
        b('Event').listen(
          this._triggerElem,
          'keydown',
          this._handleKeyEvent.bind(this)
        )
      );
    };
    a.prototype._setupFocusListener = function () {
      this._listeners.addSubscriptions(
        b('Event').listen(
          this._triggerElem,
          'focus',
          this._handleFocusEvent.bind(this)
        )
      );
    };
    a.prototype._setupBlurListener = function () {
      this._listeners.addSubscriptions(
        b('Event').listen(
          this._triggerElem,
          'blur',
          this._handleBlurEvent.bind(this)
        )
      );
    };
    a.prototype._handleKeyEvent = function (event) {
      __p && __p();
      if (event.getModifiers().any) return;
      var a = b('Event').getKeyCode(event);
      switch (a) {
        case b('Keys').DOWN:
        case b('Keys').UP:
          if (this._config.disableArrowKeyActivation) return;
          this.isShown() || b('Toggler').bootstrap(this._triggerElem);
          break;
        case b('Keys').RETURN:
          if (!this._config.enableActivationOnEnter) return;
          this.isShown() || b('Toggler').bootstrap(this._triggerElem);
          break;
        case b('Keys').SPACE:
          b('Toggler').bootstrap(this._triggerElem);
          break;
        default:
          return;
      }
      event.prevent();
    };
    a.prototype._handleFocusEvent = function (event) {
      b('CSS').addClass(this._root, 'focused');
    };
    a.prototype._handleBlurEvent = function (event) {
      b('CSS').removeClass(this._root, 'focused');
    };
    a.prototype.destroy = function () {
      this.disable(), b('DataStore').remove(this._root, 'Popover');
    };
    Object.assign(a.prototype, { _layer: null });
    e.exports = a;
  },
  null
);
__d(
  'Popover',
  [
    'ContextualLayer',
    'ContextualLayerHideOnScroll',
    'DOM',
    'ParameterizedPopover',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g, h;
    g = babelHelpers.inherits(a, b('ParameterizedPopover'));
    h = g && g.prototype;
    a.prototype._init = function () {
      var a = new (b('ContextualLayer'))(
        {
          context: this._triggerElem,
          position: 'below',
          arrowDimensions: { offset: 12, length: 16 },
          'data-testid': this._config['data-testid'],
        },
        b('DOM').create('div')
      );
      this._config.shouldDisableHideOnScroll ||
        a.enableBehaviors([b('ContextualLayerHideOnScroll')]);
      this._config.layer = a;
      this._config.alignh && a.setAlignment(this._config.alignh);
      this._config.layer_content && a.setContent(this._config.layer_content);
      this._config.position && a.setPosition(this._config.position);
      this._config.arrowDimensions &&
        a.setArrowDimensions(this._config.arrowDimensions);
      h._init.call(this);
    };
    a.prototype.destroy = function () {
      h.destroy.call(this), this._layer && this._layer.destroy();
    };
    function a() {
      g.apply(this, arguments);
    }
    e.exports = a;
  },
  null
);
__d(
  'VirtualCursorStatus',
  ['Event', 'UserAgent', 'emptyFunction', 'setImmediate'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = null,
      h = null;
    function i() {
      h ||
        (h = b('Event').listen(window, 'blur', function () {
          (g = null), j();
        }));
    }
    function j() {
      h && (h.remove(), (h = null));
    }
    function a(event) {
      (g = event.keyCode), i();
    }
    function c() {
      (g = null), j();
    }
    if (
      typeof window !== 'undefined' &&
      window.document &&
      window.document.createElement
    ) {
      d = document.documentElement;
      if (d)
        if (d.addEventListener)
          d.addEventListener('keydown', a, !0),
            d.addEventListener('keyup', c, !0);
        else if (d.attachEvent) {
          f = d.attachEvent;
          f('onkeydown', a);
          f('onkeyup', c);
        }
    }
    var k = {
        isKeyDown: function () {
          return !!g;
        },
        getKeyDownCode: function () {
          return g;
        },
      },
      l = !1,
      m = !1,
      n = null,
      o = !1;
    function p(event) {
      var a = new Set(),
        c = k.isKeyDown(),
        d = event.clientX,
        e = event.clientY,
        f = event.isPrimary,
        g = event.isTrusted,
        h = event.offsetX,
        i = event.offsetY,
        j = event.pointerType,
        n = event.mozInputSource,
        o = event.WEBKIT_FORCE_AT_MOUSE_DOWN,
        p = event.webkitForce,
        q = event.target,
        r = q.clientWidth;
      q = q.clientHeight;
      d === 0 &&
        e === 0 &&
        h >= 0 &&
        i >= 0 &&
        m &&
        g &&
        n == null &&
        a.add('Chrome');
      l &&
        m &&
        !c &&
        p != null &&
        p < o &&
        h === 0 &&
        i === 0 &&
        n == null &&
        a.add('Safari-edge');
      d === 0 &&
        e === 0 &&
        h < 0 &&
        i < 0 &&
        m &&
        n == null &&
        a.add('Safari-old');
      !l &&
        !m &&
        c &&
        f === !1 &&
        g &&
        j === '' &&
        d === 0 &&
        e === 0 &&
        h === 0 &&
        i === 0 &&
        n == null;
      !l &&
        !m &&
        !c &&
        g &&
        b('UserAgent').isBrowser('IE >= 10') &&
        n == null &&
        (d < 0 && e < 0
          ? a.add('IE')
          : (h < 0 || h > r) && (i < 0 || i > q) && a.add('MSIE'));
      n === 0 && g && a.add('Firefox');
      return a;
    }
    function q() {
      (l = !0),
        b('setImmediate')(function () {
          l = !1;
        });
    }
    function r() {
      (m = !0),
        b('setImmediate')(function () {
          m = !1;
        });
    }
    function s(event, a) {
      n === null && (n = p(event));
      o = n.size > 0;
      var c =
        event.target.getAttribute('data-accessibilityid') ===
        'virtual_cursor_trigger';
      a(o, n, c);
      b('setImmediate')(function () {
        (o = !1), (n = null);
      });
    }
    d = {
      isVirtualCursorTriggered: function () {
        return o;
      },
      add: function (a, c) {
        c === void 0 && (c = b('emptyFunction'));
        var d = function (event) {
          return s(event, c);
        };
        a.addEventListener('click', d);
        var e = b('Event').listen(a, 'mousedown', q),
          f = b('Event').listen(a, 'mouseup', r);
        return {
          remove: function () {
            a.removeEventListener('click', d), e.remove(), f.remove();
          },
        };
      },
    };
    e.exports = d;
  },
  null
);
__d(
  'PopoverMenu',
  [
    'Arbiter',
    'ArbiterMixin',
    'ARIA',
    'BehaviorsMixin',
    'Event',
    'Focus',
    'Keys',
    'KeyStatus',
    'SubscriptionsHandler',
    'VirtualCursorStatus',
    'mixin',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g;
    c = babelHelpers.inherits(
      a,
      b('mixin')(b('ArbiterMixin'), b('BehaviorsMixin'))
    );
    g = c && c.prototype;
    function a(a, c, d, e) {
      g.constructor.call(this),
        (this._popover = a),
        (this._triggerElem = c),
        (this._getInitialMenu =
          typeof d !== 'function'
            ? function () {
                return d;
              }
            : d),
        (this._subscriptions = new (b('SubscriptionsHandler'))()),
        this._subscriptions.addSubscriptions(
          a.subscribe('init', this._onLayerInit.bind(this)),
          a.subscribe('show', this._onPopoverShow.bind(this)),
          a.subscribe('hide', this._onPopoverHide.bind(this)),
          b('Event').listen(
            this._triggerElem,
            'keydown',
            this._handleKeyEventOnTrigger.bind(this)
          ),
          b('VirtualCursorStatus').add(
            this._triggerElem,
            this._checkInitialFocus.bind(this)
          )
        ),
        e && this.enableBehaviors(e);
    }
    a.prototype.getContentRoot = function () {
      return this._popover.getContentRoot();
    };
    a.prototype.setMenu = function (a) {
      this._menu && this._menu !== a && this._menu.destroy();
      this._menu = a;
      var c = a.getRoot();
      this._popover.setLayerContent(c);
      a.subscribe('done', this._onMenuDone.bind(this));
      this._popoverShown && this._menu.onShow();
      b('ARIA').controls(this._triggerElem, c);
      this.inform('setMenu', null, 'persistent');
    };
    a.prototype.setInitialFocus = function (a, b) {
      b && a.focusAnItem();
    };
    a.prototype.getPopover = function () {
      return this._popover;
    };
    a.prototype.getTriggerElem = function () {
      return this._triggerElem;
    };
    a.prototype.getInitialMenu = function () {
      return this._getInitialMenu();
    };
    a.prototype.getMenu = function () {
      return this._menu;
    };
    a.prototype._onLayerInit = function () {
      this._menu || this.setMenu(this._getInitialMenu()),
        this._popover
          .getLayer()
          .subscribe('key', this._handleKeyEvent.bind(this));
    };
    a.prototype._onPopoverShow = function () {
      this._menu && this._menu.onShow(),
        this._checkInitialFocus(),
        (this._popoverShown = !0);
    };
    a.prototype._checkInitialFocus = function () {
      var a =
        b('KeyStatus').isKeyDown() ||
        b('VirtualCursorStatus').isVirtualCursorTriggered();
      this._menu && this.setInitialFocus(this._menu, a);
    };
    a.prototype._onPopoverHide = function () {
      this._menu && this._menu.onHide(), (this._popoverShown = !1);
    };
    a.prototype._handleKeyEvent = function (a, c) {
      __p && __p();
      if (c.target === this._triggerElem) return;
      a = b('Event').getKeyCode(c);
      if (a === b('Keys').TAB) {
        this._popover.hideLayer();
        b('Focus').set(this._triggerElem);
        return;
      }
      if (c.getModifiers().any) return;
      switch (a) {
        case b('Keys').RETURN:
          this.getMenu().getFocusedItem() ||
            this.inform('returnWithoutFocusedItem');
          return;
        default:
          if (a === b('Keys').SPACE && c.target.type === 'file') return;
          this._menu.handleKeydown(a, c) === !1 &&
            (this._menu.blur(), this._menu.handleKeydown(a, c));
          break;
      }
      c.prevent();
    };
    a.prototype._handleKeyEventOnTrigger = function (a) {
      if (this._isTypeaheadActivationDisabled) return;
      var c = b('Event').getKeyCode(a),
        d = String.fromCharCode(c).toLowerCase();
      /^\w$/.test(d) &&
        (this._popover.showLayer(),
        this._menu.blur(),
        this._menu.handleKeydown(c, a) === !1 &&
          (this._popover.hideLayer(), b('Focus').set(this._triggerElem)));
    };
    a.prototype.disableTypeaheadActivation = function () {
      this._isTypeaheadActivationDisabled = !0;
    };
    a.prototype._onMenuDone = function (a) {
      setTimeout(
        function () {
          this._popover.hideLayer(), b('Focus').set(this._triggerElem);
        }.bind(this),
        0
      );
    };
    a.prototype.enable = function () {
      this._popover.enable();
    };
    a.prototype.disable = function () {
      this._popover.disable();
    };
    a.prototype.destroy = function () {
      this._subscriptions.release(),
        this._popover.destroy(),
        this._getInitialMenu().destroy(),
        this._menu && this._menu.destroy();
    };
    Object.assign(a.prototype, { _popoverShown: !1 });
    e.exports = a;
  },
  null
);
__d(
  'PopoverMenu.react',
  [
    'cx',
    'CSS',
    'InlineBlock.react',
    'Popover',
    'PopoverMenu',
    'React',
    'ReactDOM',
    'SubscriptionsHandler',
    'areEqual',
    'clearImmediate',
    'joinClasses',
    'setImmediate',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h;
    a = b('React').PropTypes;
    c = babelHelpers.inherits(i, b('React').Component);
    h = c && c.prototype;
    function i() {
      __p && __p();
      var a, c;
      for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
        e[f] = arguments[f];
      return (
        (c = (a = h.constructor).call.apply(a, [this].concat(e))),
        (this.$1 = null),
        (this.$7 = function () {
          this.$1 && (this.$1.release(), (this.$1 = null)),
            this.$8(),
            this.$4.setMenu(this.$5(this.props.menu)),
            this.$6();
        }.bind(this)),
        (this.$5 = function (a) {
          __p && __p();
          var c = a.props;
          a = new a.type(c);
          this.$1 = new (b('SubscriptionsHandler'))();
          c.onItemClick &&
            this.$1.addSubscriptions(a.subscribe('itemclick', c.onItemClick));
          c.onItemFocus &&
            this.$1.addSubscriptions(a.subscribe('focus', c.onItemFocus));
          c.onItemBlur &&
            this.$1.addSubscriptions(a.subscribe('blur', c.onItemBlur));
          c.onChange &&
            this.$1.addSubscriptions(a.subscribe('change', c.onChange));
          this.props.onShow &&
            this.$1.addSubscriptions(
              this.$3.subscribe('show', this.props.onShow)
            );
          this.props.onHide &&
            this.$1.addSubscriptions(
              this.$3.subscribe('hide', this.props.onHide)
            );
          return a;
        }.bind(this)),
        (this.getMenu = function () {
          return this.$4.getMenu();
        }.bind(this)),
        (this.isShown = function () {
          return !!(this.$3 && this.$3.isShown());
        }.bind(this)),
        (this.showPopover = function (a) {
          this.$3.showLayer();
          if (a) {
            var b = this.$4.getMenu();
            b.blur();
            b.focusAnItem(a);
          }
        }.bind(this)),
        (this.hidePopover = function () {
          var a = this.$3;
          a && a.isShown() && a.hideLayer();
        }.bind(this)),
        (this.getFocusedItem = function () {
          var a = this.$4.getMenu();
          return a.getFocusedItem();
        }.bind(this)),
        (this.$8 = function () {
          var a = this.getMenu();
          a &&
            a.forEachItem(function (a) {
              a = a.getRoot().firstElementChild;
              a && b('ReactDOM').unmountComponentAtNode(a);
            });
        }.bind(this)),
        c
      );
    }
    i.getFirstChild = function (a) {
      a = a.children;
      return Array.isArray(a) ? a[0] : a;
    };
    i.getButtonSize = function (a) {
      a = i.getFirstChild(a);
      return a && a.type.getButtonSize(a.props);
    };
    i.prototype.componentDidMount = function () {
      var a = b('ReactDOM').findDOMNode(this.refs.root),
        c = a.firstChild;
      b('CSS').addClass(c, '_p');
      this.$3 = new (b('Popover'))(a, c, this.props.layerBehaviors, {
        alignh: this.props.alignh,
        position: this.props.position,
        disabled: this.props.disabled,
        arrowDimensions: { offset: 0, length: 0 },
        disableArrowKeyActivation: this.props.disableArrowKeyActivation,
        enableActivationOnEnter: this.props.enableActivationOnEnter,
        'data-testid': this.props['data-testid'],
        shouldDisableHideOnScroll: this.props.shouldDisableHideOnScroll,
      });
      this.$4 = new (b('PopoverMenu'))(
        this.$3,
        c,
        this.$5(this.props.menu),
        this.props.behaviors
      );
      this.$6();
    };
    i.prototype.componentDidUpdate = function (a) {
      b('areEqual')(a.menu, this.props.menu) ||
        (b('clearImmediate')(this.$2), (this.$2 = b('setImmediate')(this.$7))),
        this.props.alignh !== a.alignh &&
          this.$4.getPopover().getLayer().setAlignment(this.props.alignh),
        this.props.disabled !== a.disabled &&
          (this.props.disabled ? this.$4.disable() : this.$4.enable());
    };
    i.prototype.$6 = function () {
      this.props.onReturnWithoutFocusedItem &&
        this.$1.addSubscriptions(
          this.$4.subscribe(
            'returnWithoutFocusedItem',
            this.props.onReturnWithoutFocusedItem
          )
        );
    };
    i.prototype.render = function () {
      __p && __p();
      var a = b('React').Children.map(this.props.children, function (a, c) {
          if (c === 0)
            return b('React').cloneElement(a, {
              className: b('joinClasses')(a.props.className, '_p'),
            });
          else return a;
        }),
        c = Object.assign({}, this.props);
      delete c.onShow;
      delete c.onHide;
      delete c.alignh;
      delete c.position;
      delete c.layerBehaviors;
      delete c.behaviors;
      delete c.menu;
      delete c.disabled;
      delete c.disableArrowKeyActivation;
      delete c.enableActivationOnEnter;
      return b('React').createElement(
        b('InlineBlock.react'),
        babelHelpers['extends']({}, c, {
          className: b('joinClasses')(this.props.className, 'uiPopover'),
          ref: 'root',
          disabled: null,
        }),
        a
      );
    };
    i.prototype.componentWillUnmount = function () {
      b('clearImmediate')(this.$2),
        this.hidePopover(),
        this.$1 && (this.$1.release(), (this.$1 = null)),
        this.$4 && this.$4.destroy();
    };
    i.propTypes = {
      alignh: a.oneOf(['left', 'center', 'right']),
      alignv: a.oneOf(['baseline', 'bottom', 'middle', 'top']),
      position: a.oneOf(['above', 'below', 'left', 'right']),
      layerBehaviors: a.array,
      menu: a.object.isRequired,
      disabled: a.bool,
      disableArrowKeyActivation: a.bool,
      enableActivationOnEnter: a.bool,
      onReturnWithoutFocusedItem: a.func,
      shouldDisableHideOnScroll: a.bool,
    };
    i.defaultProps = { alignv: 'middle', shouldDisableHideOnScroll: !1 };
    e.exports = i;
  },
  null
);
__d(
  'PopoverMenuInterface',
  ['ArbiterMixin', 'emptyFunction', 'mixin'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g;
    g = babelHelpers.inherits(a, b('mixin')(b('ArbiterMixin')));
    g && g.prototype;
    a.prototype.done = function () {
      this.inform('done');
    };
    function a() {
      g.apply(this, arguments);
    }
    Object.assign(a.prototype, {
      getRoot: b('emptyFunction'),
      onShow: b('emptyFunction'),
      onHide: b('emptyFunction'),
      focusAnItem: b('emptyFunction').thatReturnsFalse,
      blur: b('emptyFunction'),
      handleKeydown: b('emptyFunction').thatReturnsFalse,
      destroy: b('emptyFunction'),
    });
    e.exports = a;
  },
  null
);
__d(
  'getVendorPrefixedName',
  ['invariant', 'ExecutionEnvironment', 'UserAgent', 'camelize'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h = {},
      i = ['Webkit', 'ms', 'Moz', 'O'],
      j = new RegExp('^(' + i.join('|') + ')'),
      k = b('ExecutionEnvironment').canUseDOM
        ? document.createElement('div').style
        : {};
    function l(a) {
      for (var b = 0; b < i.length; b++) {
        var c = i[b] + a;
        if (c in k) return c;
      }
      return null;
    }
    function m(a) {
      switch (a) {
        case 'lineClamp':
          return b('UserAgent').isEngine('WebKit >= 315.14.2')
            ? 'WebkitLineClamp'
            : null;
        default:
          return null;
      }
    }
    function a(a) {
      var c = b('camelize')(a);
      if (h[c] === undefined) {
        var d = c.charAt(0).toUpperCase() + c.slice(1);
        j.test(d) && g(0, undefined, a);
        b('ExecutionEnvironment').canUseDOM
          ? (h[c] = c in k ? c : l(d))
          : (h[c] = m(c));
      }
      return h[c];
    }
    e.exports = a;
  },
  null
);
__d(
  'BrowserSupportCore',
  ['getVendorPrefixedName'],
  function (a, b, c, d, e, f) {
    a = {
      hasCSSAnimations: function () {
        return !!b('getVendorPrefixedName')('animationName');
      },
      hasCSSTransforms: function () {
        return !!b('getVendorPrefixedName')('transform');
      },
      hasCSS3DTransforms: function () {
        return !!b('getVendorPrefixedName')('perspective');
      },
      hasCSSTransitions: function () {
        return !!b('getVendorPrefixedName')('transition');
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'BrowserSupport',
  [
    'BrowserSupportCore',
    'ExecutionEnvironment',
    'UserAgent_DEPRECATED',
    'getVendorPrefixedName',
    'memoize',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = null;
    function h() {
      if (b('ExecutionEnvironment').canUseDOM) {
        g || (g = document.createElement('div'));
        return g;
      }
      return null;
    }
    c = function (a) {
      return b('memoize')(function () {
        var b = h();
        return !b ? !1 : a(b);
      });
    };
    d = {
      hasCSSAnimations: b('BrowserSupportCore').hasCSSAnimations,
      hasCSSTransforms: b('BrowserSupportCore').hasCSSTransforms,
      hasCSS3DTransforms: b('BrowserSupportCore').hasCSS3DTransforms,
      hasCSSTransitions: b('BrowserSupportCore').hasCSSTransitions,
      hasPositionSticky: c(function (a) {
        a.style.cssText =
          'position:-moz-sticky;position:-webkit-sticky;position:-o-sticky;position:-ms-sticky;position:sticky;';
        return /sticky/.test(a.style.position);
      }),
      hasScrollSnapPoints: c(function (a) {
        return (
          'scrollSnapType' in a.style ||
          'webkitScrollSnapType' in a.style ||
          'msScrollSnapType' in a.style
        );
      }),
      hasScrollBehavior: c(function (a) {
        return 'scrollBehavior' in a.style;
      }),
      hasPointerEvents: c(function (a) {
        if (!('pointerEvents' in a.style)) return !1;
        a.style.cssText = 'pointer-events:auto';
        return a.style.pointerEvents === 'auto';
      }),
      hasFileAPI: b('memoize')(function () {
        return (
          !(
            b('UserAgent_DEPRECATED').webkit() &&
            !b('UserAgent_DEPRECATED').chrome() &&
            b('UserAgent_DEPRECATED').windows()
          ) &&
          'FileList' in window &&
          'FormData' in window
        );
      }),
      hasBlobFactory: b('memoize')(function () {
        return !!a.blob;
      }),
      hasSVGForeignObject: b('memoize')(function () {
        return (
          b('ExecutionEnvironment').canUseDOM &&
          document.createElementNS &&
          document
            .createElementNS('http://www.w3.org/2000/svg', 'foreignObject')
            .toString()
            .includes('SVGForeignObject')
        );
      }),
      hasMutationObserver: b('memoize')(function () {
        return !!window.MutationObserver;
      }),
      getTransitionEndEvent: b('memoize')(function () {
        var a = {
            transition: 'transitionend',
            WebkitTransition: 'webkitTransitionEnd',
            MozTransition: 'mozTransitionEnd',
            OTransition: 'oTransitionEnd',
          },
          c = b('getVendorPrefixedName')('transition');
        return a[c] || null;
      }),
      hasCanvasRenderingContext2D: function () {
        return !!window.CanvasRenderingContext2D;
      },
    };
    e.exports = d;
  },
  null
);
__d(
  'SimpleDrag',
  [
    'ArbiterMixin',
    'Event',
    'SubscriptionsHandler',
    'UserAgent_DEPRECATED',
    'Vector',
    'emptyFunction',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a) {
      (this.minDragDistance = 0),
        (this._subscriptions = new (b('SubscriptionsHandler'))()),
        this._subscriptions.addSubscriptions(
          b('Event').listen(a, 'mousedown', this._start.bind(this))
        );
    }
    Object.assign(a.prototype, b('ArbiterMixin'), {
      setMinDragDistance: function (a) {
        this.minDragDistance = a;
      },
      destroy: function () {
        this._subscriptions.release();
      },
      _start: function (event) {
        __p && __p();
        var a = !1,
          c = !0,
          d = null;
        this.inform('mousedown', event) && (c = !1);
        if (this.minDragDistance) d = b('Vector').getEventPosition(event);
        else {
          a = !0;
          var e = this.inform('start', event);
          if (e === !0) c = !1;
          else if (e === !1) {
            a = !1;
            return;
          }
        }
        e =
          b('UserAgent_DEPRECATED').ie() < 9
            ? document.documentElement
            : window;
        var f = b('Event').listen(e, {
          selectstart: c ? b('Event').prevent : b('emptyFunction'),
          mousemove: function (event) {
            __p && __p();
            if (!a) {
              var c = b('Vector').getEventPosition(event);
              if (d.distanceTo(c) < this.minDragDistance) return;
              a = !0;
              if (this.inform('start', event) === !1) {
                a = !1;
                return;
              }
            }
            this.inform('update', event);
          }.bind(this),
          mouseup: function (event) {
            for (var b in f) f[b].remove();
            a ? this.inform('end', event) : this.inform('click', event);
          }.bind(this),
        });
        c && event.prevent();
      },
    });
    e.exports = a;
  },
  null
);
__d(
  'firstx',
  ['invariant'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    function a(a) {
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
        return d;
      }
      g(0, undefined);
    }
    e.exports = a;
  },
  null
);
__d(
  'ScrollableArea',
  [
    'ArbiterMixin',
    'Bootloader',
    'BrowserSupport',
    'CSS',
    'CSSFade',
    'DataStore',
    'Deferred',
    'DOM',
    'Event',
    'FocusEvent',
    'Parent',
    'Run',
    'Scroll',
    'SimpleDrag',
    'Style',
    'SubscriptionsHandler',
    'TimeSlice',
    'UserAgent_DEPRECATED',
    'Vector',
    'clearTimeout',
    'createCancelableFunction',
    'emptyFunction',
    'firstx',
    'ifRequired',
    'mixin',
    'promiseDone',
    'queryThenMutateDOM',
    'setTimeoutAcrossTransitions',
    'throttle',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g,
      h = 12;
    function i() {
      b('Run').onAfterLoad(function () {
        return b('Bootloader').loadModules(
          ['Animation'],
          b('emptyFunction'),
          'ScrollableArea'
        );
      });
    }
    a = babelHelpers.inherits(j, b('mixin')(b('ArbiterMixin')));
    g = a && a.prototype;
    function j(a, c) {
      __p && __p();
      g.constructor.call(this);
      this.adjustGripper = function () {
        var a = function () {
          b('queryThenMutateDOM')(
            function () {
              return this._needsGripper();
            }.bind(this),
            function (a) {
              a &&
                (b('Style').set(
                  this._gripper,
                  'height',
                  this._gripperHeight + 'px'
                ),
                this._slideGripper());
            }.bind(this)
          ),
            this._throttledShowGripperAndShadows();
        }.bind(this);
        a = b('TimeSlice').guard(a, 'ScrollableArea adjustGripper', {
          propagationType: b('TimeSlice').PropagationType.ORPHAN,
        });
        a();
        return this;
      }.bind(this);
      this._computeHeights = function () {
        (this._containerHeight = this._elem.clientHeight),
          (this._contentHeight = this._content.offsetHeight),
          (this._trackHeight = this._track.offsetHeight),
          (this._gripperHeight = Math.max(
            (this._containerHeight / this._contentHeight) * this._trackHeight,
            h
          ));
      }.bind(this);
      this._showGripperAndShadows = function () {
        b('queryThenMutateDOM')(
          function () {
            return {
              needsGripper: this._needsGripper(),
              top: b('Scroll').getTop(this._wrap) > 0,
              isScrolledToBottom: this.isScrolledToBottom(),
            };
          }.bind(this),
          function (a) {
            var c = a.needsGripper,
              d = a.top;
            a = a.isScrolledToBottom;
            b('CSS').conditionShow(this._gripper, c);
            b('CSS').conditionClass(this._elem, 'contentBefore', d);
            b('CSS').conditionClass(this._elem, 'contentAfter', !a);
          }.bind(this)
        );
      }.bind(this);
      this._respondMouseMove = function () {
        if (!this._mouseOver || this._isFocussed) return;
        var a = this._options.fade !== !1,
          c = this._mousePos,
          d = b('Vector').getElementPosition(this._track).x,
          e = b('Vector').getElementDimensions(this._track).x;
        d = Math.abs(d + e / 2 - c.x);
        e = b('BrowserSupport').hasPointerEvents() && d <= 10;
        e && !this._trackIsHovered
          ? ((this._trackIsHovered = !0),
            b('CSS').addClass(this._elem, 'uiScrollableAreaTrackOver'),
            this.throttledAdjustGripper())
          : !e &&
            this._trackIsHovered &&
            ((this._trackIsHovered = !1),
            b('CSS').removeClass(this._elem, 'uiScrollableAreaTrackOver'));
        a &&
          (d < 25
            ? this.showScrollbar({ hideAfterDelay: !1 })
            : !this._options.no_fade_on_hover &&
              !this._isFocussed &&
              this.hideScrollbar({ hideAfterDelay: !0, shouldFade: !0 }));
      }.bind(this);
      if (!a) return;
      c = c || {};
      i();
      this._elem = a;
      this._wrap = b('firstx')(b('DOM').scry(a, 'div.uiScrollableAreaWrap'));
      this._body = b('firstx')(
        b('DOM').scry(this._wrap, 'div.uiScrollableAreaBody')
      );
      this._content = b('firstx')(
        b('DOM').scry(this._body, 'div.uiScrollableAreaContent')
      );
      this._track = b('firstx')(b('DOM').scry(a, 'div.uiScrollableAreaTrack'));
      this._trackIsHovered = !1;
      this._isFocussed = !1;
      this._gripper = b('firstx')(
        b('DOM').scry(this._track, 'div.uiScrollableAreaGripper')
      );
      this._options = c;
      this._throttledComputeHeights = b('throttle').withBlocking(
        this._computeHeights,
        250,
        this
      );
      this.throttledAdjustGripper = b('throttle').withBlocking(
        this.adjustGripper,
        250,
        this
      );
      this.throttledAdjustGripper = b('TimeSlice').guard(
        this.throttledAdjustGripper,
        'ScrollableArea throttledAdjustGripper',
        { propagationType: b('TimeSlice').PropagationType.ORPHAN }
      );
      this._throttledShowGripperAndShadows = b('throttle').withBlocking(
        this._showGripperAndShadows,
        250,
        this
      );
      this._throttledRespondMouseMove = b('throttle')(
        this._respondMouseMove,
        250,
        this
      );
      b('setTimeoutAcrossTransitions')(this.adjustGripper.bind(this), 0);
      this._listeners = new (b('SubscriptionsHandler'))();
      this._listeners.addSubscriptions(
        b('Event').listen(this._wrap, 'scroll', this._handleScroll.bind(this)),
        b('Event').listen(a, 'mousemove', this._handleMouseMove.bind(this)),
        b('Event').listen(
          this._track,
          'click',
          this._handleClickOnTrack.bind(this)
        )
      );
      b('BrowserSupport').hasPointerEvents() &&
        this._listeners.addSubscriptions(
          b('Event').listen(a, 'mousedown', this._handleClickOnTrack.bind(this))
        );
      if (c.fade !== !1) {
        var d;
        (d = this._listeners).addSubscriptions.apply(
          d,
          [
            b('Event').listen(
              a,
              'mouseenter',
              this._handleMouseEnter.bind(this)
            ),
            b('Event').listen(
              a,
              'mouseleave',
              this._handleMouseLeave.bind(this)
            ),
          ].concat(this._attachFocusListeners(this._wrap))
        );
      } else
        b('BrowserSupport').hasPointerEvents() &&
          this._listeners.addSubscriptions(
            b('Event').listen(
              a,
              'mouseleave',
              function () {
                this._isFocussed ||
                  ((this._trackIsHovered = !1),
                  b('CSS').removeClass(a, 'uiScrollableAreaTrackOver'));
              }.bind(this)
            )
          );
      b('UserAgent_DEPRECATED').webkit() || b('UserAgent_DEPRECATED').chrome()
        ? this._listeners.addSubscriptions(
            b('Event').listen(a, 'mousedown', function () {
              var c = b('Event').listen(window, 'mouseup', function () {
                b('Scroll').getLeft(a) && b('Scroll').setLeft(a, 0), c.remove();
              });
            })
          )
        : b('UserAgent_DEPRECATED').firefox() &&
          this._wrap.addEventListener(
            'DOMMouseScroll',
            function (event) {
              event.axis === event.HORIZONTAL_AXIS && event.preventDefault();
            },
            !1
          );
      this._drag = this.initDrag();
      b('DataStore').set(this._elem, 'ScrollableArea', this);
      c.persistent ||
        ((this._destroy = b('createCancelableFunction')(
          this._destroy.bind(this)
        )),
        b('Run').onLeave(this._destroy));
      c.shadow !== !1 &&
        b('CSS').addClass(this._elem, 'uiScrollableAreaWithShadow');
    }
    j.prototype.getContentHeight = function () {
      return this._contentHeight;
    };
    j.prototype.getElement = function () {
      return this._elem;
    };
    j.prototype.initDrag = function () {
      __p && __p();
      var a = b('BrowserSupport').hasPointerEvents(),
        c = new (b('SimpleDrag'))(a ? this._elem : this._gripper);
      c.subscribe(
        'start',
        function (d, event) {
          __p && __p();
          if (
            !(
              (event.which && event.which === 1) ||
              (event.button && event.button === 1)
            )
          )
            return undefined;
          d = b('Vector').getEventPosition(event, 'viewport');
          if (a) {
            var e = this._gripper.getBoundingClientRect();
            if (d.x < e.left || d.x > e.right || d.y < e.top || d.y > e.bottom)
              return !1;
          }
          event.stopPropagation();
          this.inform('grip_start');
          var f = d.y,
            g = this._gripper.offsetTop;
          b('CSS').addClass(this._elem, 'uiScrollableAreaDragging');
          var h = c.subscribe(
              'update',
              function (a, event) {
                a = b('Vector').getEventPosition(event, 'viewport').y - f;
                this._throttledComputeHeights();
                var c = this._contentHeight - this._containerHeight;
                a = g + a;
                var d = this._trackHeight - this._gripperHeight;
                a = Math.max(Math.min(a, d), 0);
                a = (a / d) * c;
                b('Scroll').setTop(this._wrap, a);
              }.bind(this)
            ),
            i = c.subscribe(
              'end',
              function () {
                c.unsubscribe(h),
                  c.unsubscribe(i),
                  b('CSS').removeClass(this._elem, 'uiScrollableAreaDragging'),
                  this.inform('grip_end');
              }.bind(this)
            );
          return undefined;
        }.bind(this)
      );
      return c;
    };
    j.prototype._attachFocusListeners = function (a) {
      var c;
      return [
        b('FocusEvent').listen(
          a,
          function (a) {
            c && (c.reject(), (c = null)),
              a
                ? ((c = new (b('Deferred'))()),
                  b('promiseDone')(
                    c.getPromise(),
                    function () {
                      (this._isFocussed = !0),
                        (this._trackIsHovered = !0),
                        b('queryThenMutateDOM')(
                          null,
                          function () {
                            b('CSS').addClass(
                              this._elem,
                              'uiScrollableAreaTrackOver'
                            );
                          }.bind(this)
                        ),
                        this.showScrollbar({ hideAfterDelay: !1 }),
                        (c = null);
                    }.bind(this),
                    function () {
                      c = null;
                    }
                  ))
                : ((this._isFocussed = !1),
                  this._mouseOver
                    ? this._respondMouseMove()
                    : (b('queryThenMutateDOM')(
                        null,
                        function () {
                          b('CSS').removeClass(
                            this._elem,
                            'uiScrollableAreaTrackOver'
                          );
                        }.bind(this)
                      ),
                      this.hideScrollbar({
                        hideAfterDelay: !1,
                        shouldFade: !1,
                      })));
          }.bind(this)
        ),
        b('Event').listen(document.documentElement, 'keyup', function (a) {
          c && c.resolve();
        }),
      ];
    };
    j.prototype._needsGripper = function () {
      this._throttledComputeHeights();
      return this._gripperHeight < this._trackHeight;
    };
    j.prototype._slideGripper = function () {
      b('queryThenMutateDOM')(
        function () {
          return (
            (b('Scroll').getTop(this._wrap) /
              (this._contentHeight - this._containerHeight)) *
            (this._trackHeight - this._gripperHeight)
          );
        }.bind(this),
        function (a) {
          b('Style').set(this._gripper, 'top', a + 'px');
        }.bind(this)
      );
    };
    j.prototype.destroy = function () {
      this._destroy(), this._destroy.cancel && this._destroy.cancel();
    };
    j.prototype._destroy = function () {
      this._listeners && this._listeners.release(),
        this._elem && b('DataStore').remove(this._elem, 'ScrollableArea'),
        this._drag && this._drag.destroy();
    };
    j.prototype._handleClickOnTrack = function (event) {
      var a = b('Vector').getEventPosition(event, 'viewport'),
        c = this._gripper.getBoundingClientRect();
      a.x < c.right &&
        a.x > c.left &&
        (a.y < c.top
          ? this.setScrollTop(this.getScrollTop() - this._elem.clientHeight)
          : a.y > c.bottom &&
            this.setScrollTop(this.getScrollTop() + this._elem.clientHeight),
        event.kill());
    };
    j.prototype._handleMouseMove = function (event) {
      var a = this._options.fade !== !1;
      (b('BrowserSupport').hasPointerEvents() || a) &&
        ((this._mousePos = b('Vector').getEventPosition(event)),
        this._throttledRespondMouseMove());
    };
    j.prototype._handleScroll = function (event) {
      this._needsGripper() && this._slideGripper(),
        this.throttledAdjustGripper(),
        this._options.fade !== !1 &&
          !this._isFocussed &&
          this.showScrollbar({ hideAfterDelay: !0 }),
        this.inform('scroll');
    };
    j.prototype._handleMouseLeave = function () {
      (this._mouseOver = !1),
        this._isFocussed ||
          this.hideScrollbar({ hideAfterDelay: !0, shouldFade: !0 });
    };
    j.prototype._handleMouseEnter = function () {
      (this._mouseOver = !0),
        this._isFocussed || this.showScrollbar({ hideAfterDelay: !0 });
    };
    j.prototype.hideScrollbar = function (a) {
      var c = a.hideAfterDelay,
        d = a.shouldFade;
      if (this._hideTimeout || !this._scrollbarVisible) return this;
      var e = function () {
        (this._scrollbarVisible = !1),
          b('CSSFade').hide(this._track, {
            simple: !d,
            invisible: b('CSS').hasClass(this._track, 'invisible_elem'),
          });
      }.bind(this);
      c
        ? (this._hideTimeout = b('setTimeoutAcrossTransitions')(
            function () {
              (this._hideTimeout = null), e();
            }.bind(this),
            750
          ))
        : e();
      return this;
    };
    j.prototype.pageDown = function (a, b) {
      this._scrollPage(1, a, b);
    };
    j.prototype.pageUp = function (a, b) {
      this._scrollPage(-1, a, b);
    };
    j.prototype._scrollPage = function (a, b, c) {
      a = a * this._containerHeight;
      var d = this.getScrollHeight() - this._containerHeight;
      d = Math.max(0, Math.min(d, this.getScrollTop() + a));
      this.setScrollTop(d, b, c);
    };
    j.prototype.resize = function () {
      this._body.style.width && (this._body.style.width = '');
      var a = this._wrap.offsetWidth - this._wrap.clientWidth;
      a > 0 && b('Style').set(this._body, 'margin-right', -a + 'px');
      return this;
    };
    j.prototype.showScrollbar = function (a) {
      var c = a.hideAfterDelay;
      this._hideTimeout &&
        (b('clearTimeout')(this._hideTimeout), (this._hideTimeout = null));
      if (this._scrollbarVisible) return this;
      this._scrollbarVisible = !0;
      b('queryThenMutateDOM')(
        null,
        function () {
          b('CSSFade').show(this._track, {
            duration: 0,
            invisible: b('CSS').hasClass(this._track, 'invisible_elem'),
          }),
            this.throttledAdjustGripper(),
            c &&
              this.hideScrollbar({
                hideAfterDelay: !0,
                shouldFade: !this._options.no_fade_on_hover,
              });
        }.bind(this)
      );
      return this;
    };
    j.prototype.distanceToBottom = function () {
      this._computeHeights();
      var a = Math.round(b('Scroll').getTop(this._wrap));
      return this._contentHeight - (a + this._containerHeight);
    };
    j.prototype.isScrolledToBottom = function () {
      return this.distanceToBottom() <= 0;
    };
    j.prototype.isScrolledToTop = function () {
      return b('Scroll').getTop(this._wrap) === 0;
    };
    j.prototype.scrollToBottom = function (a, b) {
      this.setScrollTop(this._wrap.scrollHeight, a, b);
    };
    j.prototype.scrollToTop = function (a, b) {
      this.setScrollTop(0, a, b);
    };
    j.prototype.scrollIntoView = function (a, c, d) {
      __p && __p();
      var e = this._wrap.clientHeight,
        f = a.offsetHeight,
        g = b('Scroll').getTop(this._wrap),
        h = g + e;
      a = this.getScrollOffsetForElement(a);
      var i = a + f;
      if (a < g || e < f) return this.setScrollTop(a, c, { callback: d });
      else if (i > h) return this.setScrollTop(g + (i - h), c, { callback: d });
      d && d();
      return b('emptyFunction');
    };
    j.prototype.getScrollOffsetForElement = function (a) {
      var b = 0;
      while (a != null && a !== this._wrap)
        (b += a.offsetTop), (a = a.offsetParent);
      return b;
    };
    j.prototype.scrollElemToTop = function (a, b, c) {
      this.setScrollTop(a.offsetTop, b, { callback: c });
    };
    j.prototype.poke = function () {
      var a = b('Scroll').getTop(this._wrap);
      b('Scroll').setTop(this._wrap, b('Scroll').getTop(this._wrap) + 1);
      b('Scroll').setTop(this._wrap, b('Scroll').getTop(this._wrap) - 1);
      b('Scroll').setTop(this._wrap, a);
      if (this._isFocussed) return this;
      else return this.showScrollbar({ hideAfterDelay: !1 });
    };
    j.prototype.getClientHeight = function () {
      return this._wrap.clientHeight;
    };
    j.prototype.getScrollTop = function () {
      return b('Scroll').getTop(this._wrap);
    };
    j.prototype.getScrollHeight = function () {
      return this._wrap.scrollHeight;
    };
    j.prototype.setScrollTop = function (a, c, d) {
      d === void 0 && (d = {});
      var e;
      c !== !1
        ? (e = b('ifRequired')(
            'Animation',
            function (b) {
              return this._animatedSetScrollTop(b, a, d);
            }.bind(this),
            function () {
              return this._simpleSetScrollTop(a, d);
            }.bind(this)
          ))
        : this._simpleSetScrollTop(a, d);
      return function () {
        e && e.stop(), (e = null);
      };
    };
    j.prototype._simpleSetScrollTop = function (a, c) {
      b('Scroll').setTop(this._wrap, a), c.callback && c.callback();
    };
    j.prototype._animatedSetScrollTop = function (a, b, c) {
      this._scrollTopAnimation && this._scrollTopAnimation.stop();
      var d = c.duration || 250,
        e = c.ease || a.ease.end;
      this._scrollTopAnimation = new a(this._wrap)
        .to('scrollTop', b)
        .ease(e)
        .duration(d)
        .ondone(c.callback)
        .go();
      return this._scrollTopAnimation;
    };
    j.renderDOM = function () {
      var a = b('DOM').create('div', { className: 'uiScrollableAreaContent' }),
        c = b('DOM').create('div', { className: 'uiScrollableAreaBody' }, a),
        d = b('DOM').create(
          'div',
          { className: 'uiScrollableAreaWrap scrollable' },
          c
        ),
        e = b('DOM').create('div', { className: 'uiScrollableArea native' }, d);
      return { root: e, wrap: d, body: c, content: a };
    };
    j.fromNative = function (a, c) {
      __p && __p();
      if (
        !b('CSS').hasClass(a, 'uiScrollableArea') ||
        !b('CSS').hasClass(a, 'native')
      )
        return undefined;
      c = c || {};
      b('CSS').removeClass(a, 'native');
      var d = b('DOM').create(
        'div',
        { className: 'uiScrollableAreaTrack' },
        b('DOM').create('div', { className: 'uiScrollableAreaGripper' })
      );
      c.fade !== !1
        ? (b('CSS').addClass(a, 'fade'), b('CSS').addClass(d, 'hidden_elem'))
        : b('CSS').addClass(a, 'nofade');
      c.tabIndex !== undefined && c.tabIndex !== null
        ? (b('DOM').setAttributes(d, { tabIndex: c.tabIndex }),
          b('DOM').prependContent(a, d))
        : b('DOM').appendContent(a, d);
      d = new j(a, c);
      d.resize();
      return d;
    };
    j.getInstance = function (a) {
      a = b('Parent').byClass(a, 'uiScrollableArea');
      return a ? b('DataStore').get(a, 'ScrollableArea') : null;
    };
    j.poke = function (a) {
      a = j.getInstance(a);
      a && a.poke();
    };
    e.exports = j;
  },
  null
);
__d(
  'Menu',
  [
    'cx',
    'BehaviorsMixin',
    'CSS',
    'DataStore',
    'DOM',
    'Event',
    'Keys',
    'Parent',
    'PopoverMenuInterface',
    'ScrollableArea',
    'Style',
    'SubscriptionsHandler',
    'UserAgent',
    'debounce',
    'gkx',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h,
      i = 500;
    a = babelHelpers.inherits(j, b('PopoverMenuInterface'));
    h = a && a.prototype;
    function j(a, c) {
      __p && __p();
      h.constructor.call(this);
      this._items = [];
      for (var d = 0; d < a.length; d++) {
        var e = a[d];
        e = j.buildItemFromData(e);
        this._items[d] = e;
      }
      this._config = c || {};
      this._theme = c.theme || {};
      this._subscriptions = new (b('SubscriptionsHandler'))();
      this._keysSoFar = '';
      this._clearKeysSoFarAfterDelay = b('debounce')(
        function () {
          this._keysSoFar = '';
        }.bind(this),
        i
      );
    }
    j.buildItemFromData = function (a) {
      if (a.ctor) return new a.ctor(a);
      else return new a.type(a.props);
    };
    j.prototype.addItem = function (a) {
      this._addItem(a);
    };
    j.prototype.addItemBefore = function (a, b) {
      this._addItem(a, b, !1);
    };
    j.prototype.addItemAfter = function (a, b) {
      this._addItem(a, b, !0);
    };
    j.prototype._addItem = function (a, b, c) {
      __p && __p();
      var d = this._items.indexOf(a);
      if (d >= 0) {
        var e = c ? -1 : 1;
        if (this._items[d + e] == b) return;
        this._items.splice(d, 1);
      }
      if (b) {
        d = this._items.indexOf(b);
        if (d < 0)
          throw new Error('reference item must already be in the menu');
        c && d++;
        this._items.splice(d, 0, a);
      } else this._items.push(a);
      this._root && this._insertItem(a, b, c);
    };
    j.prototype.removeItem = function (a) {
      var c = this._items.indexOf(a);
      if (c < 0) return;
      this._items.splice(c, 1);
      this._root && b('DOM').remove(a.getRoot());
    };
    j.prototype.forEachItem = function (a) {
      this._items.forEach(a);
    };
    j.prototype.getFocusedItem = function () {
      return this._focused;
    };
    j.prototype.getItemAt = function (a) {
      return this._items[a] || null;
    };
    j.prototype.getRoot = function () {
      this._root || this._render();
      return this._root;
    };
    j.prototype.onShow = function () {
      this._config.maxheight &&
        (!this._scrollableArea
          ? (this._scrollableArea = b('ScrollableArea').fromNative(
              this._scrollableElems.root,
              { fade: !0 }
            ))
          : this._scrollableArea.resize()),
        this.inform('show');
    };
    j.prototype.onHide = function () {
      this.blur(), this.inform('hide');
    };
    j.prototype.focusAnItem = function (a) {
      return this._attemptFocus(a || 0, 1);
    };
    j.prototype.blur = function () {
      if (this._focused) {
        var a = this._focused;
        this._focused.blur();
        this._focused = null;
        this.inform('blur', { item: a });
      }
    };
    j.prototype.handleKeydown = function (a, c) {
      __p && __p();
      if (!this._items.length) return !1;
      var d = this._items.indexOf(this._focused);
      switch (a) {
        case b('Keys').UP:
        case b('Keys').DOWN:
          var e = a === b('Keys').UP,
            f = e ? -1 : 1;
          e = e ? this._items.length - 1 : 0;
          return d === -1
            ? this._attemptFocus(e, f)
            : this._attemptFocus(d + f, f);
        case b('Keys').HOME:
          return this._attemptFocus(0, 1);
        case b('Keys').END:
          return this._attemptFocus(this._items.length - 1, -1);
        case b('Keys').SPACE:
          if (this._items.indexOf(this._focused) !== -1) {
            this._handleItemClick(this._focused, c);
            return !0;
          }
          return !1;
        case b('Keys').RIGHT:
        case b('Keys').LEFT:
        case b('Keys').INSERT:
        case b('Keys').DELETE:
          return !1;
        default:
          e = this._findItemToFocus(a, d);
          return !!(e && this._focusItem(e));
      }
    };
    j.prototype._findItemToFocus = function (a, b) {
      a = String.fromCharCode(a).toLowerCase();
      this._keysSoFar ||
        ((this._searchIndex = b),
        (this._itemToFocus = this._focused || this._items[0]));
      this._keysSoFar += a;
      this._clearKeysSoFarAfterDelay();
      b = this._findMatchInRange(this._searchIndex + 1, this._items.length);
      b || (b = this._findMatchInRange(0, this._searchIndex));
      this._itemToFocus = b || this._itemToFocus;
      return this._itemToFocus;
    };
    j.prototype._findMatchInRange = function (a, b) {
      for (var a = a; a < b; a++) {
        var c = this._items[a].getLabel();
        if (c && c.toString().toLowerCase().indexOf(this._keysSoFar) === 0)
          return this._items[a];
      }
      return null;
    };
    j.prototype._render = function () {
      __p && __p();
      this._ul = b('DOM').create('ul', { className: '_54nf' });
      this._ul.setAttribute('role', 'menu');
      this._items.forEach(function (a) {
        this._insertItem(a, null);
      }, this);
      this._subscriptions.addSubscriptions(
        b('Event').listen(this._ul, 'click', this._handleClick.bind(this)),
        b('Event').listen(
          this._ul,
          'mouseover',
          this._handleMouseOver.bind(this)
        ),
        b('Event').listen(this._ul, 'mouseout', this._handleMouseOut.bind(this))
      );
      var a = this._ul;
      this._config.maxheight &&
        ((this._scrollableElems = b('ScrollableArea').renderDOM()),
        b('DOM').setContent(this._scrollableElems.content, this._ul),
        (a = this._scrollableElems.root),
        b('Style').set(
          this._scrollableElems.wrap,
          'max-height',
          this._config.maxheight + 'px'
        ));
      var c =
        '_54nq' +
        (this._config.className ? ' ' + this._config.className : '') +
        (this._theme.className ? ' ' + this._theme.className : '');
      this._root = b('DOM').create(
        'div',
        { className: c },
        b('DOM').create('div', { className: '_54ng' }, a)
      );
      this._config.id && this._root.setAttribute('id', this._config.id);
      this._config.testid &&
        this._root.setAttribute('data-testid', this._config.testid);
      this._config.behaviors && this.enableBehaviors(this._config.behaviors);
      this.inform('rendered', this._root);
    };
    j.prototype._needsDefaultBehavior = function (a) {
      if (a.isDefaultRequested && a.isDefaultRequested()) {
        a = b('Parent').byTag(a.getTarget(), 'a');
        a = a && a.getAttribute('href');
        return a && a[0] !== '#';
      }
      return !1;
    };
    j.prototype._handleClick = function (a) {
      __p && __p();
      if (a.getTarget() === this._ul && b('UserAgent').isBrowser('IE')) {
        a.stop();
        return;
      }
      if (!this._needsDefaultBehavior(a)) {
        var c = this._getItemInstance(a.getTarget());
        if (c) return this._handleItemClick(c, a);
      }
    };
    j.prototype._handleItemClick = function (a, c) {
      this.inform('itemclick', { item: a, event: c });
      if (
        b('gkx')(
          'AT7yJfGqUAYErBtluXPI3xt8Kj9AOqSUEGJF0BCR2J_i9CiO4A6lB8EcOpkF_9TVveQM0I-srPFdXFt8oCaBYn30'
        ) &&
        c.isDefaultPrevented()
      )
        return !0;
      a.shouldCloseOnClick() && a.hasAction() && this.done();
      return a.handleClick(c);
    };
    j.prototype._handleMouseOver = function (a) {
      a = this._getItemInstance(a.getTarget());
      a && this._focusItem(a, !0);
    };
    j.prototype._handleMouseOut = function (a) {
      a = this._getItemInstance(a.getTarget());
      a && this._focused === a && this.blur();
    };
    j.prototype._insertItem = function (a, c, d) {
      var e = a.getRoot();
      b('CSS').addClass(e, '__MenuItem');
      b('DataStore').set(e, 'MenuItem', a);
      if (c) {
        a = d ? b('DOM').insertAfter : b('DOM').insertBefore;
        a(c.getRoot(), e);
      } else b('DOM').appendContent(this._ul, e);
    };
    j.prototype._attemptFocus = function (a, b) {
      var c = this._items.length;
      if ((a < 0 || a >= c) && !this._focused) return !1;
      a = (c + (a % c)) % c;
      c = this.getItemAt(a);
      return c === this._focused || this._focusItem(c)
        ? !0
        : this._attemptFocus(a + b, b);
    };
    j.prototype._focusItem = function (a, b) {
      if (a && a.focus(b) !== !1) {
        this._focused !== a &&
          (this.blur(),
          (this._focused = a),
          this.inform('focus', { item: a, from_mouse_over: b }));
        return !0;
      }
      return !1;
    };
    j.prototype._getItemInstance = function (a) {
      a = b('Parent').byClass(a, '__MenuItem');
      return a ? b('DataStore').get(a, 'MenuItem') : null;
    };
    j.prototype.destroy = function () {
      this._items.forEach(function (a) {
        var c = a.getRoot();
        b('DataStore').remove(c, 'MenuItem');
        a.destroy();
      }),
        this._subscriptions.release(),
        this.destroyBehaviors();
    };
    Object.assign(j.prototype, b('BehaviorsMixin'), {
      _focused: null,
      _root: null,
    });
    e.exports = j;
  },
  null
);
__d(
  'MenuItemInterface',
  ['React', 'emptyFunction'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g;
    g = babelHelpers.inherits(a, b('React').Component);
    g && g.prototype;
    a.prototype.getRoot = function () {
      this._root || (this._root = this.render());
      return this._root;
    };
    function a() {
      g.apply(this, arguments);
    }
    Object.assign(a.prototype, {
      _root: null,
      render: b('emptyFunction'),
      getAccessKey: b('emptyFunction'),
      getLabel: b('emptyFunction'),
      hasAction: b('emptyFunction').thatReturnsFalse,
      focus: b('emptyFunction').thatReturnsFalse,
      blur: b('emptyFunction').thatReturnsFalse,
      onShow: b('emptyFunction').thatReturnsFalse,
      handleClick: b('emptyFunction').thatReturnsFalse,
      shouldCloseOnClick: b('emptyFunction').thatReturnsTrue,
      destroy: b('emptyFunction'),
    });
    e.exports = a;
  },
  null
);
__d(
  'MenuItemBase',
  ['cx', 'DOM', 'HTML', 'MenuItemInterface'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h;
    c = babelHelpers.inherits(a, b('MenuItemInterface'));
    h = c && c.prototype;
    function a(a) {
      h.constructor.call(this),
        (this._ARIARole = 'menuitem'),
        (this._data = babelHelpers['extends']({}, a));
    }
    a.prototype.render = function () {
      var a = '_54ni';
      this._data.className && (a += ' ' + this._data.className);
      a = { className: a, role: 'presentation' };
      Object.assign(a, this.__getAttributesFromData());
      delete a['data-testid'];
      return b('DOM').create('li', a, this._renderItemContent());
    };
    a.prototype._renderItemContent = function () {
      return b('HTML')(this._data.markup).getNodes();
    };
    a.prototype.__getAttributesFromData = function () {
      var a = {};
      for (var b in this._data)
        (b.indexOf('data-') === 0 || b.indexOf('aria-') === 0) &&
          (a[b] = this._data[b]);
      return a;
    };
    e.exports = a;
  },
  null
);
__d(
  'MenuItem',
  [
    'cx',
    'CSS',
    'DOM',
    'MenuItemBase',
    'React',
    'ReactDOM',
    'emptyFunction',
    'joinClasses',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h,
      i = ['href', 'rel', 'ajaxify', 'target', 'accesskey'];
    function j(a, c) {
      var d = {};
      i.forEach(function (a) {
        c[a] && (d[a] = c[a]);
      });
      b('DOM').setAttributes(a, d);
    }
    function k(a) {
      i.forEach(function (b) {
        a.removeAttribute(b);
      });
    }
    c = babelHelpers.inherits(a, b('MenuItemBase'));
    h = c && c.prototype;
    function a(a) {
      h.constructor.call(this, a),
        (this._disabled = !!this._data.disabled),
        (this._onclickHandler = this._data.onclick || this._data.onClick);
    }
    a.prototype.getValue = function () {
      return this._data.value;
    };
    a.prototype.getLabel = function () {
      return this._data.label;
    };
    a.prototype.getLink = function () {
      return this._data.href;
    };
    a.prototype.getAccessKey = function () {
      var a = this.getLabel();
      return a && a.charAt(0);
    };
    a.prototype.focus = function (a) {
      if (
        this.isDisabled() ||
        !this._root.offsetParent ||
        !this.hasAction() ||
        this.isHoverDisabled()
      )
        return !1;
      b('CSS').addClass(this._root, '_54ne');
      b('CSS').addClass(this._root, 'selected');
      a || this._anchor.focus();
    };
    a.prototype.blur = function () {
      b('CSS').removeClass(this._root, '_54ne'),
        b('CSS').removeClass(this._root, 'selected');
    };
    a.prototype.handleClick = function (a) {
      if (this.isDisabled()) return !1;
      return typeof this._onclickHandler === 'function'
        ? this._onclickHandler(a)
        : !0;
    };
    a.prototype.setOnClickHandler = function (a) {
      this._onclickHandler = a;
    };
    a.prototype._renderItemContent = function () {
      __p && __p();
      this._anchor = b('DOM').create(
        this._data.renderas === 'label' ? 'label' : 'a',
        { className: '_54nc' + (this._data.icon ? ' _54nu' : '') }
      );
      if (this._data.children) {
        var a = null;
        this._data.icon &&
          (a = b('React').cloneElement(this._data.icon, {
            className: b('joinClasses')(this._data.icon.props.className, 'mrs'),
          }));
        b('ReactDOM').render(
          b('React').createElement(
            'span',
            null,
            a,
            b('React').createElement(
              'span',
              { className: '_54nh' },
              this._data.children
            )
          ),
          this._anchor
        );
        this._data.label = this._anchor.innerText || this._anchor.textContent;
      } else {
        a = b('DOM').create(
          'span',
          null,
          b('DOM').create(
            'span',
            { className: '_54nh' },
            this._data.markup || this._data.label
          )
        );
        this._data.icon && b('DOM').prependContent(a, this._data.icon);
        b('DOM').setContent(this._anchor, a);
      }
      this._data.href || (this._data.href = '#');
      this.isDisabled() || j(this._anchor, this._data);
      b('DOM').setAttributes(this._anchor, this.__getAttributesFromData());
      this._anchor.setAttribute('role', this._ARIARole);
      a = this._data.title;
      a && this._anchor.setAttribute('title', a);
      return this._anchor;
    };
    a.prototype.isDisabled = function () {
      return this._disabled;
    };
    a.prototype.isHoverDisabled = function () {
      return this._data.hoverdisabled;
    };
    a.prototype.enable = function () {
      this._root &&
        (j(this._anchor, this._data),
        b('CSS').removeClass(this._root, '_5arm')),
        (this._disabled = !1);
    };
    a.prototype.disable = function () {
      this._root && (k(this._anchor), b('CSS').addClass(this._root, '_5arm')),
        (this._disabled = !0);
    };
    a.prototype.render = function () {
      var a = h.render.call(this);
      this._disabled && b('CSS').addClass(a, '_5arm');
      return a;
    };
    a.prototype.destroy = function () {
      this._anchor && b('ReactDOM').unmountComponentAtNode(this._anchor);
    };
    Object.assign(a.prototype, {
      hasAction: b('emptyFunction').thatReturnsTrue,
    });
    e.exports = a;
  },
  null
);
__d(
  'MenuItemNoAction',
  ['MenuItem'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g;
    g = babelHelpers.inherits(a, b('MenuItem'));
    g && g.prototype;
    a.prototype.hasAction = function () {
      return !1;
    };
    function a() {
      g.apply(this, arguments);
    }
    e.exports = a;
  },
  null
);
__d(
  'MenuSelectableItem',
  ['cx', 'CSS', 'DOM', 'MenuItem'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h;
    c = babelHelpers.inherits(a, b('MenuItem'));
    h = c && c.prototype;
    function a(a) {
      h.constructor.call(this, a),
        (this._ARIARole = 'menuitemcheckbox'),
        (this._selected = !!this._data.selected);
    }
    a.prototype.getIcon = function () {
      return this._data.icon;
    };
    a.prototype.setIcon = function (a) {
      b('DOM').replace(this._data.icon, a), (this._data.icon = a);
    };
    a.prototype.isSelected = function () {
      return this._selected;
    };
    a.prototype.select = function () {
      if (this.isDisabled()) return !1;
      b('CSS').addClass(this._root, '_54nd');
      this._anchor.setAttribute('aria-checked', 'true');
      this._selected = !0;
    };
    a.prototype.deselect = function () {
      b('CSS').removeClass(this._root, '_54nd'),
        this._anchor.setAttribute('aria-checked', 'false'),
        (this._selected = !1);
    };
    a.prototype.render = function () {
      var a = h.render.call(this);
      this._data.selected &&
        (b('CSS').addClass(a, '_54nd'),
        this._anchor.setAttribute('aria-checked', 'true'));
      return a;
    };
    Object.assign(a.prototype, { _selected: !1 });
    e.exports = a;
  },
  null
);
__d(
  'MenuTheme',
  ['cx'],
  function (a, b, c, d, e, f, g) {
    e.exports = { className: '_569t' };
  },
  null
);
__d(
  'SelectableMenuUtils',
  [],
  function (a, b, c, d, e, f) {
    a = {
      doesItemSupportSelect: function (a) {
        return g(a);
      },
      isSelected: function (a) {
        return g(a) && a.isSelected();
      },
    };
    function g(a) {
      return a.select && a.deselect && a.isSelected;
    }
    e.exports = a;
  },
  null
);
__d(
  'SelectableMenu',
  ['Menu', 'SelectableMenuUtils', 'createArrayFromMixed'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g, h;
    g = babelHelpers.inherits(a, b('Menu'));
    h = g && g.prototype;
    a.prototype.focusAnItem = function () {
      for (var a = 0; a < this._items.length; a++)
        if (
          b('SelectableMenuUtils').isSelected(this._items[a]) &&
          this._focusItem(this._items[a]) !== !1
        )
          return !0;
      return h.focusAnItem.call(this);
    };
    a.prototype.setValue = function (a) {
      this._root || this._render();
      var c = b('createArrayFromMixed')(a);
      this._items.forEach(function (a) {
        b('SelectableMenuUtils').doesItemSupportSelect(a) &&
          (c.includes(a.getValue())
            ? a.select()
            : b('SelectableMenuUtils').isSelected(a) && a.deselect());
      });
      this.inform('change', this.getSelection());
    };
    a.prototype._handleItemClick = function (a, c) {
      __p && __p();
      if (!b('SelectableMenuUtils').doesItemSupportSelect(a))
        return h._handleItemClick.call(this, a, c);
      var d = this.inform('itemclick', { item: a, event: c });
      if (d) return;
      if (this._config.multiple) {
        d = b('SelectableMenuUtils').isSelected(a) ? a.deselect() : a.select();
        d !== !1 && this.inform('change', this.getSelection());
        this._config.closeOnSelectWithMultiple && this.done();
      } else
        b('SelectableMenuUtils').isSelected(a) ||
          (a.select() !== !1 &&
            (this._items.forEach(function (c) {
              b('SelectableMenuUtils').isSelected(c) && c !== a && c.deselect();
            }),
            this.inform('change', this.getSelection()))),
          this.done();
      return a.handleClick(c);
    };
    a.prototype.getSelection = function () {
      var a = [];
      this._items.forEach(function (c) {
        b('SelectableMenuUtils').isSelected(c) &&
          a.push({ label: c.getLabel(), value: c.getValue(), item: c });
      });
      this._config.multiple || (a = a[0]);
      return a;
    };
    function a() {
      g.apply(this, arguments);
    }
    e.exports = a;
  },
  null
);
__d(
  'ReactMenu',
  [
    'cx',
    'Menu',
    'MenuItem',
    'MenuItemNoAction',
    'MenuSelectableItem',
    'MenuTheme',
    'React',
    'SelectableMenu',
    'joinClasses',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h, i;
    function j(a) {
      var c = [];
      b('React').Children.forEach(a, function (a) {
        a && c.push(a);
      });
      return c;
    }
    function a(a) {
      a != null && ((a.isReactLegacyFactory = {}), (a.type = a));
    }
    f = babelHelpers.inherits(c, b('Menu'));
    h = f && f.prototype;
    function c(a, c) {
      c = babelHelpers['extends'](
        {
          theme: b('MenuTheme'),
          maxheight: a ? a.maxheight : null,
          className: a ? a.className : null,
        },
        c
      );
      h.constructor.call(this, j(a.children), c);
    }
    a(c);
    g = babelHelpers.inherits(d, b('SelectableMenu'));
    i = g && g.prototype;
    function d(a, c) {
      c = babelHelpers['extends'](
        {
          className: b('joinClasses')('_57di', a ? a.className : null),
          theme: b('MenuTheme'),
          multiple: a && a.multiple,
          closeOnSelectWithMultiple: a && a.closeOnSelectWithMultiple,
          maxheight: a ? a.maxheight : null,
          testid: a ? a['data-testid'] : null,
        },
        c
      );
      i.constructor.call(this, j(a.children), c);
    }
    a(d);
    c.SelectableMenu = d;
    a(b('MenuItem'));
    c.Item = b('MenuItem');
    c.ItemNoAction = b('MenuItemNoAction');
    a(b('MenuSelectableItem'));
    c.SelectableItem = b('MenuSelectableItem');
    e.exports = c;
  },
  null
);
__d(
  'LynxJSMode',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      ASYNC: 'async',
      ASYNCLAZY: 'asynclazy',
      HOVER: 'hover',
      ORIGIN: 'origin',
    });
  },
  null
);
__d(
  'AbstractLinkLynxMode',
  ['FBLynx', 'LinkshimHandlerConfig', 'LynxJSMode'],
  function (a, b, c, d, e, f) {
    a = {
      getMode: function (a) {
        return a
          ? [b('LinkshimHandlerConfig').www_safe_js_mode, null]
          : [b('LynxJSMode').HOVER, null];
      },
      setupDelegation: function () {
        b('FBLynx').setupDelegation();
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'LynxGeneration',
  ['LinkshimHandlerConfig', 'URI'],
  function (a, b, c, d, e, f) {
    var g = {
      getShimURI: function () {
        return new (b('URI'))('/l.php').setDomain(
          b('LinkshimHandlerConfig').linkshim_host
        );
      },
      getLynxURIProtocol: function (a) {
        return b('LinkshimHandlerConfig').always_use_https
          ? 'https'
          : a.getProtocol() === 'http'
          ? 'http'
          : 'https';
      },
      getShimmedHref: function (a, b) {
        var c = g.getLynxURIProtocol(a);
        return g
          .getShimURI()
          .setQueryData({ u: a.toString(), h: b })
          .setProtocol(c);
      },
    };
    e.exports = g;
  },
  null
);
__d(
  'AbstractLink.react',
  ['AbstractLinkLynxMode', 'LynxGeneration', 'React', 'URI'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g;
    g = babelHelpers.inherits(a, b('React').Component);
    g && g.prototype;
    a.prototype.componentDidMount = function () {
      b('AbstractLinkLynxMode').setupDelegation();
    };
    a.prototype.render = function () {
      __p && __p();
      var a = this.props,
        c = a.href,
        d = a.linkRef,
        e = a.shimhash,
        f = a.nofollow,
        g = a.noopener,
        h = a.rel,
        i = a.isSafeToSkipShim;
      a = babelHelpers.objectWithoutProperties(a, [
        'href',
        'linkRef',
        'shimhash',
        'nofollow',
        'noopener',
        'rel',
        'isSafeToSkipShim',
      ]);
      var j = c;
      h = h;
      var k = null,
        l = null;
      if (e !== null) {
        j = b('LynxGeneration').getShimmedHref(c, e || '');
        c = b('AbstractLinkLynxMode').getMode(i);
        l = c[0];
        k = c[1];
      }
      f && (h = h ? h + ' nofollow' : 'nofollow');
      g && (h = h ? h + ' noopener' : 'noopener');
      return b('React').createElement(
        'a',
        babelHelpers['extends']({}, a, {
          href: j.toString(),
          rel: h,
          ref: d,
          'data-sigil': k,
          'data-lynx-mode': l,
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
  'Link.react',
  [
    'AbstractLink.react',
    'LinkshimHandlerConfig',
    'React',
    'URI',
    'isBonfireURI',
    'isFacebookURI',
    'isLinkshimURI',
    'isMessengerDotComURI',
    'killswitch',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g;
    function h(a) {
      return (
        b('isFacebookURI')(a) ||
        b('isMessengerDotComURI')(a) ||
        b('isBonfireURI')(a)
      );
    }
    function i(a) {
      return a.getDomain().endsWith('.onion');
    }
    var j = /^(#|\/\w)/;
    function k(a) {
      if (j.test(a.toString())) return !1;
      var b = a.getProtocol();
      return (b === 'http' || b === 'https') && !h(a);
    }
    function l(a) {
      __p && __p();
      var c = '#',
        d = null;
      a instanceof b('URI')
        ? (c = a.toString())
        : typeof a === 'string' && a !== '' && a !== '#'
        ? (c = a)
        : typeof a === 'object' && a !== null
        ? ((c = a.url.toString()), (d = a.shimhash ? a.shimhash.toString() : d))
        : ((c = '#'), (d = null));
      if (b('URI').isValidURI(c)) {
        a = new (b('URI'))(c);
        if (
          !b('killswitch')('LINK_PARSES_SHIMHASH_FROM_LINKSHIM') &&
          b('isLinkshimURI')(a)
        ) {
          var e = a.getQueryData(),
            f = e.u;
          e = e.h;
          b('URI').isValidURI(f) &&
            ((c = f), (a = new (b('URI'))(c)), d == null && (d = e));
        }
      } else a = new (b('URI'))('#');
      d == null &&
        k(a) &&
        (d = b('LinkshimHandlerConfig').link_react_default_hash);
      f = n(a);
      f != null && (a = f);
      return [a, d];
    }
    var m = new RegExp('^(l|lm|h)\\..*$', 'i');
    function n(a) {
      if (b('killswitch')('LINK_UPGRADE_UNSHIMMED_JS')) return null;
      if (a.getProtocol() !== 'http') return null;
      if (!h(a)) return null;
      return m.test(a.getDomain()) ? null : a.setProtocol('https');
    }
    g = babelHelpers.inherits(a, b('React').Component);
    g && g.prototype;
    a.prototype.render = function () {
      __p && __p();
      var a = this.props;
      a.allowunsafehref;
      var c = a.s,
        d = a.href,
        e = a.linkRef,
        f = a.target;
      a = babelHelpers.objectWithoutProperties(a, [
        'allowunsafehref',
        's',
        'href',
        'linkRef',
        'target',
      ]);
      d = l(d);
      var g = d[0];
      d = d[1];
      var h = d != null;
      f = f || (d !== null ? '_blank' : null);
      c = !!c;
      b('LinkshimHandlerConfig').onion_always_shim && i(g) && (c = !1);
      var j =
        b('LinkshimHandlerConfig').use_rel_no_opener &&
        d !== null &&
        f === '_blank';
      return b('React').createElement(
        b('AbstractLink.react'),
        babelHelpers['extends']({}, a, {
          href: g,
          linkRef: e,
          nofollow: h,
          noopener: j,
          shimhash: d,
          target: f,
          isSafeToSkipShim: c,
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
  'ReactPropTransfererCore',
  ['emptyFunction', 'joinClasses'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a) {
      return function (b, c, d) {
        !Object.prototype.hasOwnProperty.call(b, c)
          ? (b[c] = d)
          : (b[c] = a(b[c], d));
      };
    }
    c = a(function (a, b) {
      return Object.assign({}, b, a);
    });
    var g = {
      children: b('emptyFunction'),
      className: a(b('joinClasses')),
      style: c,
    };
    function h(a, b) {
      for (var c in b) {
        if (!Object.prototype.hasOwnProperty.call(b, c)) continue;
        var d = g[c];
        d && Object.prototype.hasOwnProperty.call(g, c)
          ? d(a, c, b[c])
          : Object.prototype.hasOwnProperty.call(a, c) || (a[c] = b[c]);
      }
      return a;
    }
    d = {
      mergeProps: function (a, b) {
        return h(Object.assign({}, a), b);
      },
    };
    e.exports = d;
  },
  null
);
__d(
  'ReactPropTransferer',
  ['ReactPropTransfererCore'],
  function (a, b, c, d, e, f) {
    e.exports = b('ReactPropTransfererCore');
  },
  null
);
__d(
  'cloneWithProps_DEPRECATED',
  ['React', 'ReactPropTransferer', 'warning'],
  function (a, b, c, d, e, f) {
    var g = 'children';
    c = !1;
    function a(a, c) {
      c = b('ReactPropTransferer').mergeProps(c, a.props);
      !Object.prototype.hasOwnProperty.call(c, g) &&
        Object.prototype.hasOwnProperty.call(a.props, g) &&
        (c.children = a.props.children);
      return b('React').createElement(a.type, c);
    }
    e.exports = a;
  },
  null
);
__d(
  'AbstractButton.react',
  ['cx', 'Link.react', 'React', 'cloneWithProps_DEPRECATED', 'joinClasses'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h;
    c = b('React').Component;
    d = b('React').PropTypes;
    f = babelHelpers.inherits(a, c);
    h = f && f.prototype;
    function a() {
      var a, b;
      for (var c = arguments.length, d = new Array(c), e = 0; e < c; e++)
        d[e] = arguments[e];
      return (
        (b = (a = h.constructor).call.apply(a, [this].concat(d))),
        (this.handleLinkClick = function (event) {
          this.props.disabled
            ? event.preventDefault()
            : this.props.onClick && this.props.onClick(event);
        }.bind(this)),
        b
      );
    }
    a.prototype.render = function () {
      __p && __p();
      var a = this.props,
        c = a.depressed,
        d = a.disabled,
        e = a.image,
        f = a.imageRight,
        g = a.label,
        h = a.labelIsHidden;
      a = babelHelpers.objectWithoutProperties(a, [
        'depressed',
        'disabled',
        'image',
        'imageRight',
        'label',
        'labelIsHidden',
      ]);
      delete a.shade;
      c = '_42ft' + (d ? ' _42fr' : '') + (c ? ' _42fs' : '');
      e = e;
      if (e) {
        var i = {};
        g && ((i.alt = ''), h || (i.className = '_3-8_'));
        e = b('cloneWithProps_DEPRECATED')(e, i);
      }
      i = f;
      if (i) {
        f = {};
        g && ((f.alt = ''), h || (f.className = '_3-99'));
        i = b('cloneWithProps_DEPRECATED')(i, f);
      }
      if (this.props.href) {
        f = this.props;
        var j = f.disabled;
        f = f.role;
        f = j && f === 'button';
        return b('React').createElement(
          b('Link.react'),
          babelHelpers['extends']({}, a, {
            'aria-disabled': f ? !0 : undefined,
            className: b('joinClasses')(this.props.className, c),
            onClick: this.handleLinkClick,
            tabIndex: j ? -1 : this.props.tabIndex,
          }),
          e,
          h
            ? b('React').createElement(
                'span',
                { className: 'accessible_elem' },
                g
              )
            : g,
          i
        );
      } else if (this.props.type && this.props.type !== 'submit')
        return b('React').createElement(
          'button',
          babelHelpers['extends']({}, a, {
            className: b('joinClasses')(this.props.className, c),
            disabled: d,
            type: this.props.type,
          }),
          e,
          h
            ? b('React').createElement(
                'span',
                { className: 'accessible_elem' },
                g
              )
            : g,
          i
        );
      else
        return b('React').createElement(
          'button',
          babelHelpers['extends']({}, a, {
            className: b('joinClasses')(this.props.className, c),
            disabled: d,
            type: 'submit',
            value: '1',
          }),
          e,
          h
            ? b('React').createElement(
                'span',
                { className: 'accessible_elem' },
                g
              )
            : g,
          i
        );
    };
    a.propTypes = {
      image: d.element,
      imageRight: d.element,
      depressed: d.bool,
      label: d.node,
      onClick: d.func,
      labelIsHidden: d.bool,
    };
    a.defaultProps = { disabled: !1, depressed: !1, labelIsHidden: !1 };
    e.exports = a;
  },
  null
);
__d(
  'XUIAbstractGlyphButton.react',
  ['cx', 'AbstractButton.react', 'React', 'joinClasses'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h;
    h = babelHelpers.inherits(a, b('React').Component);
    h && h.prototype;
    a.prototype.render = function () {
      return b('React').createElement(
        b('AbstractButton.react'),
        babelHelpers['extends']({}, this.props, {
          className: b('joinClasses')(this.props.className, '_5upp'),
          label: this.props.label,
        })
      );
    };
    function a() {
      h.apply(this, arguments);
    }
    a.propTypes = b('AbstractButton.react').propTypes;
    e.exports = a;
  },
  null
);
__d(
  'XUICloseButton.react',
  ['cx', 'fbt', 'React', 'XUIAbstractGlyphButton.react', 'joinClasses'],
  function (a, b, c, d, e, f, g, h) {
    __p && __p();
    var i;
    c = b('React').PropTypes;
    i = babelHelpers.inherits(a, b('React').Component);
    i && i.prototype;
    a.prototype.render = function () {
      var a = this.props.size,
        c = this.props.shade;
      a =
        '_50zy' +
        (a === 'small' ? ' _50zz' : '') +
        (a === 'medium' ? ' _50-0' : '') +
        (a === 'large' ? ' _50-1' : '') +
        (c === 'light' ? ' _50z_' : '') +
        (c === 'dark' ? ' _50z-' : '');
      c = this.props.label;
      var d = this.props.title;
      !this.props.title && !this.props.tooltip && (d = c);
      return b('React').createElement(
        b('XUIAbstractGlyphButton.react'),
        babelHelpers['extends']({}, this.props, {
          label: c,
          title: d,
          type: this.props.href ? undefined : this.props.type,
          'data-hover': this.props.tooltip && 'tooltip',
          'data-tooltip-alignh': this.props.tooltip && 'center',
          'data-tooltip-content': this.props.tooltip,
          className: b('joinClasses')(this.props.className, a),
        })
      );
    };
    function a() {
      i.apply(this, arguments);
    }
    a.propTypes = {
      shade: c.oneOf(['light', 'dark']),
      size: c.oneOf(['small', 'medium', 'large']),
      title: c.string,
      tooltip: c.string,
      type: c.oneOf(['submit', 'button', 'reset']),
    };
    a.defaultProps = {
      label: h._('Remove'),
      size: 'medium',
      shade: 'dark',
      type: 'button',
    };
    e.exports = a;
  },
  null
);
__d(
  'XUIAmbientNUXBody.react',
  ['cx', 'React', 'XUICloseButton.react', 'joinClasses'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h;
    h = babelHelpers.inherits(a, b('React').Component);
    h && h.prototype;
    a.prototype.render = function () {
      var a = b('joinClasses')(
          '_21es',
          this.props.className,
          this.props.noCloseButton ? '_izg' : null
        ),
        c = this.props.noCloseButton
          ? null
          : b('React').createElement(b('XUICloseButton.react'), {
              shade: 'light',
              className: 'layer_close_elem _36gl',
              onClick: this.props.onCloseButtonClick,
              onFocus: this.props.onFocus,
            });
      return b('React').createElement(
        'div',
        { className: a },
        c,
        b('React').createElement(
          'div',
          { className: '__xn' },
          this.props.children
        )
      );
    };
    function a() {
      h.apply(this, arguments);
    }
    a.defaultProps = { noCloseButton: !1 };
    e.exports = a;
  },
  null
);
__d(
  'XUIAmbientNUXDarkTheme',
  ['cx'],
  function (a, b, c, d, e, f, g) {
    a = {
      wrapperClassName: '_6dh- _2x6q',
      arrowDimensions: { offset: 14, length: 18 },
    };
    e.exports = a;
  },
  null
);
__d(
  'XUIAmbientNUXTheme',
  ['cx'],
  function (a, b, c, d, e, f, g) {
    a = {
      wrapperClassName: '_2x6q',
      arrowDimensions: { offset: 14, length: 18 },
    };
    e.exports = a;
  },
  null
);
__d(
  'XUIAmbientNUX.react',
  [
    'fbt',
    'React',
    'ReactAbstractContextualDialog',
    'ReactLayer',
    'XUIAmbientNUXBody.react',
    'XUIAmbientNUXDarkTheme',
    'XUIAmbientNUXTheme',
    'uniqueID',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h,
      i = 300,
      j = 380,
      k = b('ReactLayer').createClass(
        b('ReactAbstractContextualDialog').createSpec({
          displayName: 'XUIAmbientNUX',
          theme: b('XUIAmbientNUXTheme'),
        })
      ),
      l = b('ReactLayer').createClass(
        b('ReactAbstractContextualDialog').createSpec({
          displayName: 'XUIAmbientNUX',
          theme: b('XUIAmbientNUXDarkTheme'),
        })
      );
    c = babelHelpers.inherits(a, b('React').Component);
    h = c && c.prototype;
    function a() {
      var a, c;
      for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
        e[f] = arguments[f];
      return (
        (c = (a = h.constructor).call.apply(a, [this].concat(e))),
        (this.$1 = b('uniqueID')()),
        (this.$2 = b('uniqueID')()),
        c
      );
    }
    a.prototype.$3 = function () {
      switch (this.props.width) {
        case 'wide':
          return j;
        case 'custom':
          return this.props.customwidth;
        case 'auto':
          return null;
        default:
          return i;
      }
    };
    a.prototype.$4 = function () {
      return g._('Learn about this new feature');
    };
    a.prototype.render = function () {
      var a = this.props.labelledBy,
        c = null,
        d = null;
      a ||
        ((c = b('React').createElement('div', {
          'aria-label': this.props.label || this.$4(),
          id: this.$2,
          key: this.$2,
        })),
        (a = this.$2));
      var e = g._('Close');
      d = b('React').createElement('a', {
        className: 'layer_close_elem accessible_elem',
        href: '#',
        id: this.$1,
        key: this.$1,
        'aria-label': e,
        'aria-labelledby': this.$1 + ' ' + a,
        role: 'button',
      });
      e = this.props.useDarkMode ? l : k;
      return b('React').createElement(
        e,
        {
          alignment: this.props.alignment,
          autoFocus: !1,
          behaviors: this.props.behaviors,
          context: this.props.context,
          contextRef: this.props.contextRef,
          dialogRole: 'region',
          focusContextOnHide: !1,
          hasActionableContext: this.props.hasActionableContext,
          hideOnBlur: this.props.hideOnBlur,
          insertParent: this.props.insertParent,
          labelledBy: a,
          offsetX: this.props.offsetX,
          offsetY: this.props.offsetY,
          onBeforeHide: this.props.onBeforeHide,
          position: this.props.position,
          shown: this.props.shown,
          width: this.$3(),
        },
        b('React').createElement(
          b('XUIAmbientNUXBody.react'),
          {
            className: this.props.className,
            noCloseButton: this.props.noCloseButton,
            onCloseButtonClick: this.props.onCloseButtonClick,
            onFocus: this.props.onFocus,
          },
          this.props.children,
          c,
          this.props.noCloseButton ? d : null
        )
      );
    };
    a.defaultProps = {
      hasActionableContext: !1,
      hideOnBlur: !1,
      noCloseButton: !1,
      shown: !1,
      useDarkMode: !1,
      width: 'normal',
    };
    e.exports = a;
  },
  null
);
__d(
  'XUIMenuTheme',
  ['cx'],
  function (a, b, c, d, e, f, g) {
    e.exports = { className: '_558b' };
  },
  null
);
__d(
  'XUIMenuWithSquareCorner',
  ['cx', 'CSS'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    function a(a) {
      this.$1 = a;
    }
    a.prototype.enable = function () {
      b('CSS').addClass(this.$1.getRoot(), '_2n_z');
    };
    a.prototype.disable = function () {
      b('CSS').removeClass(this.$1.getRoot(), '_2n_z');
    };
    e.exports = a;
  },
  null
);
__d(
  'ReactXUIMenu',
  ['ReactMenu', 'XUIMenuTheme', 'XUIMenuWithSquareCorner'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g, h;
    function a(a) {
      (a.isReactLegacyFactory = {}), (a.type = a);
    }
    f = babelHelpers.inherits(c, b('ReactMenu'));
    g = f && f.prototype;
    function c(a) {
      var c = { behaviors: undefined, theme: b('XUIMenuTheme') };
      (!a || a.withsquarecorner !== !1) &&
        (c.behaviors = [b('XUIMenuWithSquareCorner')]);
      g.constructor.call(this, a, c);
    }
    a(c);
    f = babelHelpers.inherits(d, b('ReactMenu').SelectableMenu);
    h = f && f.prototype;
    function d(a) {
      var c = { behaviors: undefined, theme: b('XUIMenuTheme') };
      (!a || a.withsquarecorner !== !1) &&
        (c.behaviors = [b('XUIMenuWithSquareCorner')]);
      h.constructor.call(this, a, c);
    }
    a(d);
    c.SelectableMenu = d;
    c.Item = b('ReactMenu').Item;
    c.SelectableItem = b('ReactMenu').SelectableItem;
    e.exports = c;
  },
  null
);
__d(
  'XUISpinner.react',
  [
    'cx',
    'fbt',
    'BrowserSupport',
    'LoadingMarker.react',
    'React',
    'UserAgent',
    'joinClasses',
  ],
  function (a, b, c, d, e, f, g, h) {
    __p && __p();
    var i;
    c = b('React').PropTypes;
    var j =
      b('BrowserSupport').hasCSSAnimations() &&
      !(
        b('UserAgent').isEngine('Trident < 6') ||
        b('UserAgent').isEngine('Gecko < 39') ||
        b('UserAgent').isBrowser('Safari < 6')
      );
    i = babelHelpers.inherits(a, b('React').Component);
    i && i.prototype;
    a.prototype.render = function () {
      var a = this.props,
        c = a.showOnAsync,
        d = a.background,
        e = a.paused;
      a = babelHelpers.objectWithoutProperties(a, [
        'showOnAsync',
        'background',
        'paused',
      ]);
      d =
        'img _55ym' +
        (this.props.size == 'small' ? ' _55yn' : '') +
        (this.props.size == 'large' ? ' _55yq' : '') +
        (d == 'light' ? ' _55yo' : '') +
        (d == 'dark' ? ' _55yp' : '') +
        (c ? ' _5tqs' : '') +
        (j ? '' : ' _5d9-') +
        (j && e ? ' _2y32' : '');
      return b('React').createElement(
        b('LoadingMarker.react'),
        null,
        b('React').createElement(
          'span',
          babelHelpers['extends']({}, a, {
            className: b('joinClasses')(this.props.className, d),
            role: 'progressbar',
            'aria-valuetext': h._('Loading...'),
            'aria-busy': 'true',
            'aria-valuemin': '0',
            'aria-valuemax': '100',
          })
        )
      );
    };
    function a() {
      i.apply(this, arguments);
    }
    a.propTypes = {
      paused: c.bool,
      showOnAsync: c.bool,
      size: c.oneOf(['small', 'large']),
      background: c.oneOf(['light', 'dark']),
    };
    a.defaultProps = { showOnAsync: !1, size: 'small', background: 'light' };
    e.exports = a;
  },
  null
);
__d(
  'XUIText.react',
  ['cx', 'React', 'joinClasses'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h;
    c = b('React').PropTypes;
    h = babelHelpers.inherits(a, b('React').Component);
    h && h.prototype;
    a.prototype.getAriaLevel = function (a, b) {
      __p && __p();
      if (a === 'header1') return 1;
      else if (a === 'header2') return 2;
      else if (a === 'header3') return 3;
      else if (a === 'header4') return 4;
      return b;
    };
    a.prototype.render = function () {
      var a = this.props,
        c = a.color,
        d = a.palette,
        e = a.type,
        f = a.size,
        g = a.weight,
        h = a.display,
        i = a.headingLevel,
        j = a.children;
      a = babelHelpers.objectWithoutProperties(a, [
        'color',
        'palette',
        'type',
        'size',
        'weight',
        'display',
        'headingLevel',
        'children',
      ]);
      e =
        (e === 'serif' ? '_5s6c' : '') +
        (f === 'small' ? ' _50f3' : '') +
        (f === 'medium' ? ' _50f4' : '') +
        (f === 'large' ? ' _50f5' : '') +
        (f === 'xlarge' || f === 'xlarge_DEPRECATED' ? ' _50f6' : '') +
        (g === 'bold' ? ' _50f7' : '') +
        (g === 'normal' ? ' _5kx5' : '') +
        (f === 'display' ? ' _2iei' : '') +
        (f === 'header1' ? ' _2iej' : '') +
        (f === 'header2' ? ' _2iek' : '') +
        (f === 'header3' ? ' _2iel' : '') +
        (f === 'header4' ? ' _2iem' : '') +
        (f === 'body1' ? ' _2ien' : '') +
        (f === 'body2' ? ' _2ieo' : '') +
        (f === 'body3' ? ' _2iep' : '') +
        (f === 'meta1' ? ' _2ieq' : '') +
        (c === 'blueLink' ? ' _rzx' : '') +
        (c === 'white' ? ' _2ier' : '') +
        (c === 'highlight' ? ' _1hk0' : '') +
        (c === 'positive' ? ' _2iet' : '') +
        (c === 'negative' ? ' _2ieu' : '') +
        (d !== 'dark' && c === 'placeholder' ? ' _rzy' : '') +
        (d !== 'dark' && c === 'primary' ? ' _2iev' : '') +
        (d !== 'dark' && c === 'secondary' ? ' _2iex' : '') +
        (d !== 'dark' && c === 'disabled' ? ' _2iey' : '') +
        (d === 'dark' && c === 'primary' ? ' _2iez' : '') +
        (d === 'dark' && c === 'secondary' ? ' _2ie-' : '') +
        (d === 'dark' && c === 'disabled' ? ' _2ie_' : '');
      g = this.getAriaLevel(f, i);
      g !== undefined &&
        g !== null &&
        (a = babelHelpers['extends']({}, a, {
          role: 'heading',
          'aria-level': '' + g,
        }));
      return h === 'block'
        ? b('React').createElement(
            'div',
            babelHelpers['extends']({}, a, {
              className: b('joinClasses')(this.props.className, e),
            }),
            j
          )
        : b('React').createElement(
            'span',
            babelHelpers['extends']({}, a, {
              className: b('joinClasses')(this.props.className, e),
            }),
            j
          );
    };
    function a() {
      h.apply(this, arguments);
    }
    a.propTypes = {
      color: c.oneOf([
        'primary',
        'secondary',
        'blueLink',
        'placeholder',
        'disabled',
        'white',
        'highlight',
        'positive',
        'negative',
      ]),
      display: c.oneOf(['inline', 'block']),
      headingLevel: c.oneOf([1, 2, 3, 4, 5, 6]),
      palette: c.oneOf(['light', 'dark']),
      size: c.oneOf([
        'small',
        'medium',
        'large',
        'xlarge',
        'xlarge_DEPRECATED',
        'inherit',
        'display',
        'header1',
        'header2',
        'header3',
        'header4',
        'body1',
        'body2',
        'body3',
        'meta1',
      ]),
      type: c.oneOf(['serif', 'inherit']),
      weight: c.oneOf(['bold', 'inherit', 'normal']),
    };
    a.defaultProps = {
      type: 'inherit',
      size: 'inherit',
      weight: 'inherit',
      display: 'inline',
    };
    e.exports = a;
  },
  null
);
__d(
  'AlignmentEnum',
  ['React'],
  function (a, b, c, d, e, f) {
    a = b('React').PropTypes;
    c = {
      left: 'left',
      center: 'center',
      right: 'right',
      propType: a.oneOf(['left', 'center', 'right']),
      values: ['left', 'center', 'right'],
    };
    e.exports = c;
  },
  null
);
__d(
  'PositionEnum',
  ['React'],
  function (a, b, c, d, e, f) {
    a = b('React').PropTypes;
    c = {
      above: 'above',
      below: 'below',
      left: 'left',
      right: 'right',
      propType: a.oneOf(['above', 'below', 'left', 'right']),
      values: ['above', 'below', 'left', 'right'],
    };
    e.exports = c;
  },
  null
);
__d(
  'LiveVideoRewindTypedLogger',
  ['Banzai', 'GeneratedLoggerUtils', 'nullthrows'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a() {
      this.clear();
    }
    a.prototype.log = function () {
      b('GeneratedLoggerUtils').log(
        'logger:LiveVideoRewindLoggerConfig',
        this.$1,
        b('Banzai').BASIC
      );
    };
    a.prototype.logVital = function () {
      b('GeneratedLoggerUtils').log(
        'logger:LiveVideoRewindLoggerConfig',
        this.$1,
        b('Banzai').VITAL
      );
    };
    a.prototype.logImmediately = function () {
      b('GeneratedLoggerUtils').log(
        'logger:LiveVideoRewindLoggerConfig',
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
    a.prototype.setActionSequenceNumber = function (a) {
      this.$1.action_sequence_number = a;
      return this;
    };
    a.prototype.setDeviceid = function (a) {
      this.$1.deviceid = a;
      return this;
    };
    a.prototype.setEvent = function (a) {
      this.$1.event = a;
      return this;
    };
    a.prototype.setPositionAfter = function (a) {
      this.$1.position_after = a;
      return this;
    };
    a.prototype.setPositionBefore = function (a) {
      this.$1.position_before = a;
      return this;
    };
    a.prototype.setSessionID = function (a) {
      this.$1.session_id = a;
      return this;
    };
    a.prototype.setVC = function (a) {
      this.$1.vc = a;
      return this;
    };
    a.prototype.setVideoDuration = function (a) {
      this.$1.video_duration = a;
      return this;
    };
    a.prototype.setVideoID = function (a) {
      this.$1.video_id = a;
      return this;
    };
    c = {
      action_sequence_number: !0,
      deviceid: !0,
      event: !0,
      position_after: !0,
      position_before: !0,
      session_id: !0,
      vc: !0,
      video_duration: !0,
      video_id: !0,
    };
    e.exports = a;
  },
  null
);
__d(
  'PluginLoggedOutUserTypedLogger',
  ['Banzai', 'GeneratedLoggerUtils', 'nullthrows'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a() {
      this.clear();
    }
    a.prototype.log = function () {
      b('GeneratedLoggerUtils').log(
        'logger:PluginLoggedOutUserLoggerConfig',
        this.$1,
        b('Banzai').BASIC
      );
    };
    a.prototype.logVital = function () {
      b('GeneratedLoggerUtils').log(
        'logger:PluginLoggedOutUserLoggerConfig',
        this.$1,
        b('Banzai').VITAL
      );
    };
    a.prototype.logImmediately = function () {
      b('GeneratedLoggerUtils').log(
        'logger:PluginLoggedOutUserLoggerConfig',
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
    a.prototype.setHref = function (a) {
      this.$1.href = a;
      return this;
    };
    a.prototype.setIsSDK = function (a) {
      this.$1.is_sdk = a;
      return this;
    };
    a.prototype.setPluginAppID = function (a) {
      this.$1.plugin_app_id = a;
      return this;
    };
    a.prototype.setPluginName = function (a) {
      this.$1.plugin_name = a;
      return this;
    };
    a.prototype.setRefererURL = function (a) {
      this.$1.referer_url = a;
      return this;
    };
    a.prototype.setVC = function (a) {
      this.$1.vc = a;
      return this;
    };
    a.prototype.updateExtraData = function (a) {
      a = b('nullthrows')(b('GeneratedLoggerUtils').serializeMap(a));
      b('GeneratedLoggerUtils').checkExtraDataFieldNames(a, g);
      this.$1 = babelHelpers['extends']({}, this.$1, a);
      return this;
    };
    a.prototype.addToExtraData = function (a, b) {
      var c = {};
      c[a] = b;
      return this.updateExtraData(c);
    };
    var g = {
      href: !0,
      is_sdk: !0,
      plugin_app_id: !0,
      plugin_name: !0,
      referer_url: !0,
      vc: !0,
    };
    e.exports = a;
  },
  null
);
__d(
  'TahoeTypedLogger',
  ['Banzai', 'GeneratedLoggerUtils', 'nullthrows'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a() {
      this.clear();
    }
    a.prototype.log = function () {
      b('GeneratedLoggerUtils').log(
        'logger:TahoeLoggerConfig',
        this.$1,
        b('Banzai').BASIC
      );
    };
    a.prototype.logVital = function () {
      b('GeneratedLoggerUtils').log(
        'logger:TahoeLoggerConfig',
        this.$1,
        b('Banzai').VITAL
      );
    };
    a.prototype.logImmediately = function () {
      b('GeneratedLoggerUtils').log('logger:TahoeLoggerConfig', this.$1, {
        signal: !0,
      });
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
    a.prototype.setChainDepth = function (a) {
      this.$1.chain_depth = a;
      return this;
    };
    a.prototype.setChainingContextIdentifier = function (a) {
      this.$1.chaining_context_identifier = a;
      return this;
    };
    a.prototype.setEvent = function (a) {
      this.$1.event = a;
      return this;
    };
    a.prototype.setIsAutoplaying = function (a) {
      this.$1.is_autoplaying = a;
      return this;
    };
    a.prototype.setMediaID = function (a) {
      this.$1.media_id = a;
      return this;
    };
    a.prototype.setUpNextMediaID = function (a) {
      this.$1.up_next_media_id = a;
      return this;
    };
    a.prototype.setUpNextPosition = function (a) {
      this.$1.up_next_position = a;
      return this;
    };
    a.prototype.setVC = function (a) {
      this.$1.vc = a;
      return this;
    };
    c = {
      chain_depth: !0,
      chaining_context_identifier: !0,
      event: !0,
      is_autoplaying: !0,
      media_id: !0,
      up_next_media_id: !0,
      up_next_position: !0,
      vc: !0,
    };
    e.exports = a;
  },
  null
);
__d(
  'SUITypeStyle',
  ['UserAgent_DEPRECATED'],
  function (a, b, c, d, e, f) {
    c = b('UserAgent_DEPRECATED').windows() ? '' : '0.01em';
    var g = { letterSpacing: c },
      h = {
        '40px': '50px',
        '32px': '40px',
        '24px': '30px',
        '16px': '20px',
        '14px': '18px',
        '12px': '16px',
        '11px': '14px',
      };
    function a(a) {
      return babelHelpers['extends']({}, g, a, { lineHeight: h[a.fontSize] });
    }
    e.exports = a;
  },
  null
);
__d(
  'SUIAtlasConstants',
  ['cssVar', 'SUITypeStyle'],
  function (a, b, c, d, e, f, g) {
    a = {
      black: '#000',
      blackOpacity40: 'rgba(0, 0, 0, .4)',
      neutral80: '#394E5D',
      neutral72: '#466072',
      neutral50: '#788F9F',
      neutral30: '#A0B0BB',
      neutral15: '#D0DAE0',
      neutral06: '#EEEEEE',
      neutral03: '#F6F6F6',
      neutral02: '#F9F9F9',
      white: '#fff',
      green: '#4EC099',
      greenTint85: '#E4F5EF',
      greenTint50: '#A6DFCC',
      greenShade10: '#46AC89',
      greenShade25: '#3A8F72',
      greenStatus: '#9FD356',
      blue: '#27A9E1',
      blueTint85: '#DEF2FA',
      blueTint50: '#93D4F0',
      blueShade10: '#2397CA',
      blueShade25: '#1D7EA8',
      red: '#F55D5D',
      redTint85: '#FDE6E6',
      redTint50: '#FAAEAE',
      redShade10: '#DC5353',
      redShade25: '#B74545',
      yellow: '#FFA933',
      yellowTint85: '#FFF2E0',
      yellowTint50: '#FFD499',
      yellowShade10: '#E5972D',
      yellowShade25: '#BF7E26',
    };
    c = {
      type40: new (b('SUITypeStyle'))({
        color: '#466072',
        fontFamily:
          'Freight Sans Bold, Helvetica, Arial, Lucida Grande, sans-serif',
        fontSize: '40px',
        textRendering: 'optimizelegibility',
      }),
      type32: new (b('SUITypeStyle'))({
        color: '#788F9F',
        fontFamily:
          'Freight Sans Bold, Helvetica, Arial, Lucida Grande, sans-serif',
        fontSize: '32px',
        textRendering: 'optimizelegibility',
      }),
      type32Value: new (b('SUITypeStyle'))({
        color: '#466072',
        fontFamily:
          'Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif',
        fontSize: '32px',
        fontWeight: '200',
      }),
      type24: new (b('SUITypeStyle'))({
        color: '#788F9F',
        fontFamily:
          'Freight Sans Bold, Helvetica, Arial, Lucida Grande, sans-serif',
        fontSize: '24px',
        textRendering: 'optimizelegibility',
      }),
      type24Bold: new (b('SUITypeStyle'))({
        color: '#466072',
        fontFamily:
          'Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif',
        fontSize: '24px',
        fontWeight: 'bold',
      }),
      type24Value: new (b('SUITypeStyle'))({
        color: '#466072',
        fontFamily:
          'Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif',
        fontSize: '24px',
        fontWeight: '200',
      }),
      type16: new (b('SUITypeStyle'))({
        color: '#466072',
        fontFamily:
          'Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif',
        fontSize: '16px',
      }),
      type12: new (b('SUITypeStyle'))({
        color: '#466072',
        fontFamily:
          'Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif',
        fontSize: '12px',
      }),
      type12Bold: new (b('SUITypeStyle'))({
        color: '#466072',
        fontFamily:
          'Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif',
        fontSize: '12px',
        fontWeight: 'bold',
      }),
      type12Form: new (b('SUITypeStyle'))({
        color: '#000',
        fontFamily:
          'Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif',
        fontSize: '12px',
      }),
      type12Toast: new (b('SUITypeStyle'))({
        color: '#fff',
        fontFamily:
          'Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif',
        fontSize: '12px',
        fontWeight: 'normal',
      }),
      type11: new (b('SUITypeStyle'))({
        color: '#466072',
        fontFamily:
          'Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif',
        fontSize: '11px',
      }),
      type11Bold: new (b('SUITypeStyle'))({
        color: '#466072',
        fontFamily:
          'Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif',
        fontSize: '11px',
        fontWeight: '700',
      }),
    };
    e.exports = { COLORS: a, TYPOGRAPHY: c };
  },
  null
);
__d(
  'IconConfig.atlas',
  ['cx'],
  function (a, b, c, d, e, f, g) {
    e.exports = {
      addItem: '_2dev',
      ads: '_382x',
      advertisers: '_382y',
      allDocuments: '_2bs-',
      assets: '_256d',
      assign: '_42mq',
      assignment: '_2dew',
      associationsFile: '_5bvf',
      atlasLogo: '_3bw3',
      backwardArrow: '_10rf',
      blockedItem: '_2dex',
      brandSafety: '_2dez',
      calendar: '_3fzc',
      calendarDay: '_3bw4',
      calendarMonth: '_3bw5',
      campaigns: '_382z',
      chart: '_3bw6',
      check: '_2de-',
      chevronDown: '_42mr',
      chevronLeft: '_42ms',
      chevronRight: '_42mt',
      chevronUp: '_42mu',
      clickThru: '_382-',
      clock: '_2_bn',
      connect: '_2de_',
      copy: '_3bw8',
      create: '_pif',
      creativeConcept: '_382_',
      dash: '_1z18',
      decisionGroups: '_qpt',
      defaultAd: '_3830',
      delete: '_3bw9',
      disconnect: '_2df0',
      document: '_2bt0',
      downArrow: '_2n8m',
      download: '_3bwa',
      edit: '_1cdu',
      encryptionFile: '_2bt1',
      evenCreditModel: '_sbd',
      exclude: '_3sbg',
      export: '_3bwb',
      favorite: '_42mv',
      file: '_1cdv',
      filter: '_3bwc',
      flashDark: '_1cdw',
      flashLight: '_1cdx',
      folder: '_1_nt',
      folderZIP: '_5ymd',
      forwardArrow: '_2n8n',
      gauge: '_3bwd',
      generate: '_42mw',
      health: '_3bwe',
      help: '_3m7e',
      hierarchy: '_3fzd',
      html: '_1cdy',
      htmlFile: '_3m7f',
      import: '_3bwf',
      information: '_3bwg',
      'information-open': '_2df1',
      intersection: '_3sbh',
      lastClickModel: '_sbe',
      liverailLogo: '_5ymr',
      menu: '_3e67',
      metadata: '_256j',
      metadataFile: '_5bvg',
      money: '_42mx',
      more: '_10rg',
      notification: '_3bwh',
      notificationActive: '_3832',
      packages: '_3833',
      percent: '_42my',
      photo: '_1cdz',
      placement: '_2df2',
      placements: '_3834',
      positionalModel: '_sbf',
      prioritize: '_42mz',
      privateInventory: '_5yms',
      removeItem: '_2df3',
      replace: '_3fze',
      reports: '_3835',
      review: '_3bwi',
      rtb: '_3836',
      search: '_42m-',
      segments: '_3837',
      settings: '_3bwj',
      sharingFrom: '_5ymt',
      sharingTo: '_5ym_',
      statisticalModel: '_sbg',
      success: '_3bwk',
      targeting: '_3838',
      timeDecayModel: '_sbh',
      timer: '_3839',
      tracking: '_383a',
      trackingNav: '_5mde',
      trackingPixel: '_383b',
      traffic: '_3bwl',
      union: '_3sbi',
      universalTag: '_4fd5',
      upArrow: '_2n8o',
      user: '_3bwm',
      users: '_3bwn',
      video: '_4ndo',
      warning: '_3bwo',
      weighting: '_256l',
      x1: '_1cd-',
    };
  },
  null
);
__d(
  'Typography.atlas',
  ['cx'],
  function (a, b, c, d, e, f, g) {
    a = ['xs', 's', 'm', 'l', 'xl'];
    b = ['regular', 'bold'];
    c = [
      'blue',
      'dark',
      'darkBlue',
      'green',
      'light',
      'lightBlue',
      'medium',
      'orange',
      'red',
      'white',
    ];
    d = {
      Colors: c,
      Sizes: a,
      Weights: b,
      getClassName: function (a, b, c) {
        return (
          '_4vo9' +
          (a === 'l' ? ' _4vod' : '') +
          (a === 'xl' ? ' _4voe' : '') +
          (b === 'bold' ? ' _4voh' : '') +
          (a === 'm' ? ' _4voc' : '') +
          (c === 'light' ? ' _4von' : '') +
          (c === 'medium' ? ' _4voo' : '') +
          (c === 'dark' ? ' _4vop' : '') +
          (c === 'orange' ? ' _5k1o' : '') +
          (c === 'red' ? ' _4voq' : '') +
          (c === 'blue' ? ' _4vor' : '') +
          (c === 'darkBlue' ? ' _mo-' : '') +
          (c === 'lightBlue' ? ' _4_0z' : '') +
          (a === 's' ? ' _4vob' : '') +
          (c === 'white' ? ' _4vos' : '') +
          (a === 'xs' ? ' _4voa' : '') +
          (c === 'green' ? ' _43jm' : '') +
          (b === 'regular' ? ' _4vom' : '')
        );
      },
    };
    e.exports = d;
  },
  null
);
__d(
  'Icon.atlas',
  ['cx', 'IconConfig.atlas', 'React', 'Typography.atlas', 'joinClasses'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h;
    c = b('React').PureComponent;
    h = babelHelpers.inherits(a, c);
    h && h.prototype;
    a.prototype.render = function () {
      var a = b('IconConfig.atlas')[this.props.name],
        c = this.props.style;
      this.props.height &&
        (c = babelHelpers['extends'](
          {
            fontSize: this.props.height + 'px',
            lineHeight: this.props.height + 'px',
          },
          c
        ));
      var d = null;
      this.props.color &&
        (d = b('Typography.atlas').getClassName(null, null, this.props.color));
      return b('React').createElement(
        'span',
        babelHelpers['extends']({}, this.props, {
          className: b('joinClasses')(this.props.className, '_3bwp', d, a),
          style: c,
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
  'SUIAtlasIcon.react',
  ['Icon.atlas', 'React'],
  function (a, b, c, d, e, f) {
    function a(a) {
      var c = a.colorDefault,
        d = a.colorDisabled,
        e = a.colorFocused,
        f = a.colorHover,
        g = a.disabled,
        h = a.focused,
        i = a.hover,
        j = a.size,
        k = a.style;
      a = babelHelpers.objectWithoutProperties(a, [
        'colorDefault',
        'colorDisabled',
        'colorFocused',
        'colorHover',
        'disabled',
        'focused',
        'hover',
        'size',
        'style',
      ]);
      c = c;
      g && d ? (c = d) : h && e ? (c = e) : i && f && (c = f);
      return b('React').createElement(
        b('Icon.atlas'),
        babelHelpers['extends']({}, a, {
          height: j,
          style: babelHelpers['extends']({ color: c }, k),
        })
      );
    }
    e.exports = a;
  },
  null
);
__d(
  'SUITheme',
  ['invariant', 'requireWeak'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h = [
      'SUIActionMenu',
      'SUIAdTechText',
      'SUIBreadcrumbNav',
      'SUIButton',
      'SUIButtonIcon',
      'SUICalendarPager',
      'SUICardDEPRECATED',
      'SUICard',
      'SUICloseButton',
      'SUICustomPopover_DEPRECATED',
      'SUIDateInput',
      'SUIDateTimeRangePicker',
      'SUIDecisionModal',
      'SUIDivider',
      'SUIDropdownMenu',
      'SUIError',
      'SUIFileSelector',
      'SUIFloatLabelTextInput',
      'SUIFloatLabelTypeahead',
      'SUIFormRow',
      'SUITableHeaderCell',
      'SUIHelpMessage',
      'SUIHighlightedText',
      'SUIHorizontalLayout',
      'SUIInlineNux',
      'SUIInlineTypeahead',
      'SUIItemListScopeHeader',
      'SUILayerFooter',
      'SUILayerHeader',
      'SUILink',
      'SUILoadingBar',
      'SUIMessageBox',
      'SUIModalDEPRECATED',
      'SUIModalBackgroundDEPRECATED',
      'SUIModalCardDEPRECATED',
      'SUIModalCard',
      'SUIMultistepModal',
      'SUIMultiTabDrawer',
      'SUINameCell',
      'SUINestedTable',
      'SUINotice',
      'SUINoticeGroup',
      'SUIPopover',
      'SUIRadioList',
      'SUIRemovableSearchableSelector',
      'SUISearchableSelector',
      'SUISearchInput',
      'SUISectionHeading',
      'SUISelector',
      'SUISelectorButton',
      'SUISelectorOption',
      'SUISelectorOptionGroup',
      'SUISelectorSeparator',
      'SUISimpleTable',
      'SUISpinner',
      'SUISplitButton',
      'SUIStatusIndicator',
      'SUITabGroup',
      'SUITabItem',
      'SUITableDEPRECATED',
      'SUITableCell',
      'SUITable',
      'SUIText',
      'SUITextArea',
      'SUITextInput',
      'SUIThreeStateCheckboxInput',
      'SUIToast',
      'SUIToggle',
      'SUIToggleButtonGroup',
      'SUIToken',
      'SUITokenizer',
      'SUITokenizerItem',
      'SUITokenizerItemList',
      'SUITooltip',
      'SUITypeahead',
    ];
    function a(a) {
      (this.$1 = a.components),
        (this.id = a.id),
        (this.logger = a.logger),
        h.forEach(
          function (a) {
            var c = this.$1[a];
            !c
              ? Object.defineProperty(this, a, {
                  get: function () {
                    c ||
                      b('requireWeak')(
                        'AdsInterfacesComponentsLogger',
                        function (b) {
                          return b.logSUIThemeError(
                            new Error(
                              'Silvertail theme ' +
                                this.id +
                                ' does not define a uniform for component ' +
                                a
                            ),
                            this.id
                          );
                        }.bind(this)
                      );
                    c || g(0, undefined, this.id, a);
                    return c;
                  },
                })
              : (this[a] = c);
          }.bind(this)
        );
    }
    a.prototype.hasUniform = function (a) {
      return !!this.$1[a];
    };
    a.get = function (a) {
      if (a.props.preserveThemeFromContext && a.props.theme)
        return a.props.theme;
      var c = a.props.theme || (a.context && a.context.theme),
        d = a.constructor.displayName || a.constructor.name;
      c ||
        b('requireWeak')('AdsInterfacesComponentsLogger', function (a) {
          return a.logSUIThemeError(
            new Error(
              'Silvertail component ' +
                d +
                ' was not passed a theme in props or context. See https://fburl.com/silvertail-theme for more details.'
            ),
            d
          );
        });
      c || g(0, undefined, d);
      return c;
    };
    e.exports = a;
  },
  null
);
__d(
  'SUIAtlasTheme',
  [
    'cssVar',
    'Icon.atlas',
    'React',
    'SUIAtlasConstants',
    'SUIAtlasIcon.react',
    'SUITheme',
    'SUITypeStyle',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h = b('SUIAtlasConstants').COLORS;
    a = b('SUIAtlasConstants').TYPOGRAPHY;
    c = function (a) {
      return b('React').createElement(
        b('SUIAtlasIcon.react'),
        babelHelpers['extends']({}, a, {
          colorDefault: h.neutral50,
          colorDisabled: h.neutral15,
          colorHover: h.neutral72,
          name: 'delete',
        })
      );
    };
    d = function (a) {
      return b('React').createElement(
        b('SUIAtlasIcon.react'),
        babelHelpers['extends']({}, a, {
          colorDefault: h.neutral15,
          colorDisabled: h.neutral30,
          colorHover: h.neutral06,
          name: 'delete',
        })
      );
    };
    f = {
      SUIButton: {
        height: { normal: 32, short: 32, tall: 48 },
        padding: {
          normal: { button: '16px', icon: '6px', onlyIcon: '19px' },
          short: { button: '16px', icon: '6px', onlyIcon: '19px' },
          tall: { button: '16px', icon: '6px', onlyIcon: '19px' },
        },
        typeStyle: a.type12,
        use: {
          confirm: {
            active: {
              background: h.blueShade25,
              borderColor: h.blueShade25,
              color: h.white,
            },
            disabled: {
              background: h.neutral15,
              borderColor: h.neutral15,
              color: h.white,
            },
            hover: {
              background: h.blueShade10,
              borderColor: h.blueShade10,
              color: h.white,
            },
            normal: { background: h.blue, borderColor: h.blue, color: h.white },
          },
          default: {
            active: {
              background: h.neutral06,
              borderColor: h.neutral15,
              color: h.neutral72,
            },
            disabled: {
              background: h.neutral15,
              borderColor: h.neutral15,
              color: h.white,
            },
            hover: {
              background: h.neutral03,
              borderColor: h.neutral15,
              color: h.neutral72,
            },
            normal: {
              background: h.white,
              borderColor: h.neutral15,
              color: h.neutral72,
            },
          },
          special: {
            active: {
              background: h.greenShade25,
              borderColor: h.greenShade25,
              color: h.white,
            },
            disabled: {
              background: h.neutral15,
              borderColor: h.neutral15,
              color: h.white,
            },
            hover: {
              background: h.greenShade10,
              borderColor: h.greenShade10,
              color: h.white,
            },
            normal: {
              background: h.green,
              borderColor: h.green,
              color: h.white,
            },
          },
          flat: {
            active: {
              background: 'transparent',
              borderColor: 'transparent',
              color: h.neutral72,
            },
            disabled: {
              background: 'transparent',
              borderColor: 'transparent',
              color: h.neutral15,
            },
            hover: {
              background: 'transparent',
              borderColor: 'transparent',
              color: h.neutral72,
            },
            normal: {
              background: 'transparent',
              borderColor: 'transparent',
              color: h.neutral72,
            },
          },
          flatWhite: {
            active: {
              background: 'transparent',
              borderColor: 'transparent',
              color: h.white,
            },
            disabled: {
              background: 'transparent',
              borderColor: 'transparent',
              color: 'rgba(255, 255, 255, 0.3)',
            },
            hover: {
              background: 'transparent',
              borderColor: 'transparent',
              color: h.white,
            },
            normal: {
              background: 'transparent',
              borderColor: 'transparent',
              color: h.white,
            },
          },
        },
      },
      SUIButtonIcon: {
        colorConfirm: h.blueTint50,
        colorDefault: h.neutral50,
        colorDisabled: h.white,
        colorSpecial: h.greenTint50,
        defaultSize: 18,
        iconComponent: b('SUIAtlasIcon.react'),
      },
      SUICardDEPRECATED: {
        colors: {
          background: h.white,
          border: h.neutral06,
          footerBackground: h.neutral02,
          innerBorder: h.neutral15,
        },
        typeStyles: { content: a.type12, footer: a.type12, header: a.type24 },
      },
      SUICard: {
        backgroundColor: h.white,
        borderColor: h.neutral06,
        borderRadius: '4px',
        borderWidth: 1,
        boxShadow: '0px 1px 0px 0px rgba(0, 0, 0, 0.10)',
        body: {
          paddingBottom: 24,
          paddingLeft: 24,
          paddingRight: 24,
          paddingTop: 24,
          typeStyle: a.type12,
        },
        header: {
          borderBottomColor: h.neutral15,
          borderBottomWidth: 1,
          marginLeft: 24,
          marginRight: 24,
          paddingBottom: 16,
          paddingTop: 16,
        },
        headerFullBleed: {
          borderBottomColor: h.neutral15,
          borderBottomWidth: 1,
          paddingBottom: 16,
          paddingLeft: 24,
          paddingRight: 24,
          paddingTop: 16,
        },
        footer: {
          backgroundColor: h.neutral02,
          borderTopColor: h.neutral15,
          borderTopWidth: 1,
          paddingBottom: 8,
          paddingLeft: 24,
          paddingRight: 24,
          paddingTop: 8,
          typeStyle: a.type12,
        },
        status: {
          backgroundColor: h.neutral02,
          borderTopColor: h.neutral15,
          borderTopWidth: 1,
          paddingBottom: 8,
          paddingLeft: 24,
          paddingRight: 24,
          paddingTop: 8,
          typeStyle: a.type12,
        },
        title: { typeStyle: a.type24 },
      },
      SUIThreeStateCheckboxInput: {
        activeCheckboxBackgroundColor: h.white,
        activeCheckboxBorderColor: h.blueTint50,
        checkboxBackgroundColor: h.white,
        checkboxBorderColor: h.neutral15,
        checkedIcon: b('React').createElement(b('SUIAtlasIcon.react'), {
          colorDefault: h.neutral72,
          name: 'check',
          size: 14,
        }),
        disabledCheckboxBackgroundColor: h.neutral15,
        disabledLabelColor: h.neutral30,
        labelColor: h.neutral72,
        partiallyCheckedIcon: b('React').createElement(
          b('SUIAtlasIcon.react'),
          { colorDefault: h.neutral72, name: 'dash', size: 14 }
        ),
        typeStyle: a.type12,
      },
      SUICloseButton: {
        dark: { large: c, small: c },
        light: { large: d, small: d },
        iconSize: { large: 18, small: 14 },
      },
      SUICustomPopover_DEPRECATED: {
        backgroundColor: h.white,
        borderColor: h.neutral15,
        borderHighlightColor: h.green,
        color: h.neutral72,
      },
      SUITooltip: {
        backgroundColor: h.black,
        color: h.white,
        typeStyle: babelHelpers['extends']({}, a.type12, {
          WebkitFontSmoothing: 'auto',
        }),
      },
      SUIDateInput: {
        inputIcon: b('React').createElement(b('SUIAtlasIcon.react'), {
          colorDefault: h.neutral30,
          name: 'calendarMonth',
          size: 24,
        }),
        layerBackgroundColor: h.white,
        layerBorderColor: h.neutral15,
      },
      SUICalendarPager: {
        dayColor: h.neutral72,
        dayDisabledColor: h.neutral30,
        dayNameColor: h.neutral30,
        gridBorderColor: h.neutral15,
        pagerBackgroundColor: h.neutral03,
        pagerBorderColor: h.neutral06,
        rangeBackgroundColor: h.neutral06,
        selectedBackgroundColor: h.blueTint50,
        typeStyle: a.type12,
      },
      SUIDateTimeRangePicker: {
        backgroundColor: h.white,
        borderColor: h.neutral15,
        typeStyle: a.type12,
      },
      SUIDecisionModal: {
        decisionOption: {
          backgroundColor: '#fff',
          borderColor: '#D0DAE0',
          hoverBackgroundColor: '#EEEEEE',
          titleStyle: babelHelpers['extends']({}, a.type16, {
            color: '#2397CA',
          }),
          descriptionStyle: a.type12,
        },
      },
      SUIError: {
        error: {
          borderColor: h.red,
          icon: b('React').createElement(b('SUIAtlasIcon.react'), {
            colorDefault: h.red,
            name: 'warning',
            size: 24,
          }),
        },
        warning: {
          borderColor: h.yellow,
          icon: b('React').createElement(b('SUIAtlasIcon.react'), {
            colorDefault: h.yellow,
            name: 'warning',
            size: 24,
          }),
        },
      },
      SUIFileSelector: {
        backgroundColor: { default: h.white, hovering: h.neutral03 },
        borderColor: { default: h.neutral15, error: h.red },
        typeStyles: { content: a.type12, header: a.type24Bold },
      },
      SUIFormRow: {
        childrenText: a.type12,
        emphasizedBackgroundColor: h.neutral06,
        labelText: a.type12,
        positions: {
          helpPosition: '13px',
          requiredPosition: '16px',
          requiredPositionWithHelp: '32px',
        },
        requiredColor: h.red,
      },
      SUIHelpMessage: {
        icon: b('React').createElement(b('SUIAtlasIcon.react'), {
          name: 'information',
          style: { color: h.neutral30 },
        }),
      },
      SUIHighlightedText: { backgroundColor: h.greenTint50 },
      SUIInlineNux: {
        borderColor: h.blueTint50,
        icon: b('React').createElement(b('SUIAtlasIcon.react'), {
          colorDefault: h.blue,
          name: 'information',
          size: 20,
        }),
        titleTypeStyle: a.type12Bold,
        childrenTypeStyle: a.type12,
      },
      SUIInlineTypeahead: {
        dividerBorderColor: h.neutral15,
        searchIcon: b('React').createElement(b('SUIAtlasIcon.react'), {
          colorDefault: h.neutral50,
          name: 'search',
        }),
      },
      SUIItemListScopeHeader: {
        favorite: {
          color: h.yellow,
          enabledColor: h.white,
          iconName: 'favorite',
        },
        iconComponent: b('Icon.atlas'),
      },
      SUILoadingBar: { backgroundColor: h.blue, movingColor: h.blueTint50 },
      SUILink: { hoverColor: h.blueShade25, normalColor: h.blue },
      SUIMessageBox: {
        filled: {
          backgroundColor: h.blueTint85,
          border: '1px solid',
          borderColor: h.neutral30,
        },
        outline: {
          backgroundColor: h.white,
          border: '1px solid',
          borderColor: h.neutral30,
        },
      },
      SUIModalDEPRECATED: { margin: 64 },
      SUIModalBackgroundDEPRECATED: { backgroundColor: h.blackOpacity40 },
      SUIModalCardDEPRECATED: {
        boxShadow: '0px 1px 0px 0px rgba(0, 0, 0, 0.10)',
        colors: {
          background: h.neutral02,
          border: h.neutral06,
          footerBackground: h.white,
          headerBackground: h.white,
          innerBorder: h.neutral15,
        },
        fullWidthFooterDivider: !0,
        padding: {
          contentLightPadding: {
            paddingBottom: '8px',
            paddingLeft: '24px',
            paddingRight: '24px',
            paddingTop: '8px',
          },
          contentNormalPadding: {
            paddingBottom: '24px',
            paddingLeft: '24px',
            paddingRight: '24px',
            paddingTop: '24px',
          },
          footer: {
            paddingBottom: '0',
            paddingLeft: '24px',
            paddingRight: '8px',
            paddingTop: '0',
          },
          header: {
            paddingBottom: '0',
            paddingLeft: '24px',
            paddingRight: '8px',
            paddingTop: '0',
          },
        },
        typeStyles: { content: a.type12, footer: a.type16, header: a.type16 },
      },
      SUIModalCard: {
        backgroundColor: h.neutral02,
        bodyHorizontalMargin: 24,
        bodyVerticalMargin: 24,
        cardBoxShadow: '0px 1px 0px 0px rgba(0, 0, 0, 0.10)',
        closeButtonPosition: 12,
        modalBoxShadow: '0px 1px 0px 0px rgba(0, 0, 0, 0.10)',
        typeStyle: a.type12,
      },
      SUILayerFooter: { isFullBleed: !1, topBorderColor: h.neutral15 },
      SUILayerHeader: {
        backgroundColor: h.white,
        bottomBorderColor: h.neutral15,
        errorIconMarginLeft: '8px',
        horizontalPadding: 12,
        typeStyle: a.type16,
      },
      SUINameCell: {
        description: { color: h.neutral72, typeStyle: a.type11 },
        height: 48,
      },
      SUINestedTable: {
        borderColor: h.neutral15,
        evenBackgroundColor: h.white,
        loadingBackgroundColor: h.neutral03,
        loadingColor: h.neutral30,
        oddBackgroundColor: h.neutral02,
        rowIconClosedName: 'chevronRight',
        rowIconComponent: b('Icon.atlas'),
        rowIconOpenName: 'chevronDown',
        textColor: h.neutral72,
        textStyle: a.type12,
      },
      SUINotice: {
        textStyle: babelHelpers['extends']({}, a.type12, {
          lineHeight: '21px',
        }),
        type: {
          error: {
            icon: b('React').createElement(b('SUIAtlasIcon.react'), {
              colorDefault: h.white,
              name: 'warning',
            }),
            iconBackgroundColor: h.red,
            messageBackgroundColor: h.white,
            messageBorderColor: h.neutral15,
          },
          information: {
            icon: b('React').createElement(b('SUIAtlasIcon.react'), {
              colorDefault: h.white,
              name: 'information-open',
            }),
            iconBackgroundColor: h.blue,
            messageBackgroundColor: h.white,
            messageBorderColor: h.neutral15,
          },
          success: {
            icon: b('React').createElement(b('SUIAtlasIcon.react'), {
              colorDefault: h.white,
              name: 'check',
            }),
            iconBackgroundColor: h.blue,
            messageBackgroundColor: h.white,
            messageBorderColor: h.neutral15,
          },
          warning: {
            icon: b('React').createElement(b('SUIAtlasIcon.react'), {
              colorDefault: h.white,
              name: 'warning',
            }),
            iconBackgroundColor: h.yellow,
            messageBackgroundColor: h.white,
            messageBorderColor: h.neutral15,
          },
        },
      },
      SUIRadioList: {
        activeBackgroundColor: h.neutral06,
        activeBorderColor: h.neutral30,
        activeDotColor: h.neutral80,
        backgroundColor: h.white,
        borderColor: h.neutral15,
        disabledBackgroundColor: h.neutral06,
        disabledBorderColor: h.neutral15,
        disabledDotColor: h.neutral50,
        disabledTypeColor: h.neutral30,
        dotColor: h.neutral72,
        enabledTypeColor: h.neutral72,
        typeStyle: a.type12,
      },
      SUIRemovableSearchableSelector: {
        removeButtonBackgroundColor: h.neutral03,
        removeButtonBorderColor: h.neutral15,
      },
      SUISearchableSelector: {
        disabledSubtitleTypeStyle: a.type12,
        disabledTitleTypeStyle: a.type12,
        dropdownBackgroundColor: h.white,
        dropdownBorderColor: h.neutral15,
        headerBackgroundColor: h.white,
        headerTypeStyle: a.type12,
        subtitleColor: h.neutral30,
        subtitleTypeStyle: a.type12,
        titleTypeStyle: a.type12,
      },
      SUISearchInput: {
        cancelIcon: b('React').createElement(b('SUIAtlasIcon.react'), {
          colorDefault: h.neutral15,
          colorHover: h.neutral50,
          name: 'delete',
        }),
        searchIcon: b('React').createElement(b('SUIAtlasIcon.react'), {
          colorDefault: h.neutral15,
          colorFocused: h.neutral50,
          name: 'search',
          size: 24,
        }),
      },
      SUISectionHeading: {
        borderColor: h.neutral15,
        color: h.neutral50,
        typeStyle: a.type24,
      },
      SUISelector: {
        backgroundColor: h.white,
        borderColor: h.neutral15,
        boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.10)',
      },
      SUISelectorButton: {
        use: {
          default: {
            chevron: b('React').createElement(b('SUIAtlasIcon.react'), {
              colorDefault: h.neutral72,
              colorDisabled: h.neutral30,
              name: 'chevronDown',
              size: 12,
            }),
            disabled: {
              background: h.neutral02,
              borderColor: h.neutral15,
              color: h.neutral30,
            },
          },
        },
        padding: '12px',
      },
      SUISelectorOption: {
        activeBackgroundColor: h.neutral02,
        activeColor: h.neutral72,
        color: h.neutral72,
        descriptionColor: h.neutral50,
        descriptionSelectedColor: h.neutral15,
        disabledBackgroundColor: h.white,
        disabledColor: h.neutral30,
        highlightedBackgroundColor: h.neutral03,
        highlightedColor: h.neutral72,
        padding: { bottom: '8px', left: '24px', right: '24px', top: '8px' },
        paddingWhenNoValue: {
          bottom: '8px',
          left: '12px',
          right: '24px',
          top: '8px',
        },
        selectedBackgroundColor: h.blueTint85,
        selectedColor: h.neutral72,
        selectedIcon: b('React').createElement(b('SUIAtlasIcon.react'), {
          name: 'check',
          size: 16,
        }),
        selectedIconMarginLeft: '-7px',
        selectedIconMarginRight: '3px',
        selectedTypeStyle: new (b('SUITypeStyle'))({
          color: '#466072',
          fontFamily:
            'Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif',
          fontSize: '12px',
          fontWeight: 'bold',
        }),
        typeStyle: a.type12,
      },
      SUISelectorOptionGroup: {
        activeBackgroundColor: h.neutral02,
        activeColor: h.neutral72,
        collapsedIcon: b('React').createElement(b('SUIAtlasIcon.react'), {
          colorDefault: h.neutral72,
          name: 'chevronRight',
          size: 12,
        }),
        color: h.neutral72,
        expandedIcon: b('React').createElement(b('SUIAtlasIcon.react'), {
          colorDefault: h.neutral72,
          name: 'chevronDown',
          size: 12,
        }),
        highlightedBackgroundColor: h.neutral03,
        highlightedColor: h.neutral72,
        typeStyle: a.type12Bold,
      },
      SUISelectorSeparator: {
        color: h.neutral15,
        margin: { bottom: '12px', left: '12px', right: '12px', top: '12px' },
      },
      SUISpinner: {
        activeColor: h.neutral50,
        backgroundColor: h.neutral15,
        darkActiveColor: h.neutral50,
        darkBackgroundColor: h.neutral15,
        sizes: {
          large: { border: 2, diameter: 20 },
          small: { border: 1.5, diameter: 14 },
        },
      },
      SUISplitButton: {
        chevronPadding: '4px',
        use: {
          confirm: {
            chevron: b('React').createElement(b('SUIAtlasIcon.react'), {
              colorDefault: h.white,
              colorDisabled: h.white,
              name: 'chevronDown',
              style: { padding: '0 5px' },
            }),
            dividerColor: h.white,
          },
          default: {
            chevron: b('React').createElement(b('SUIAtlasIcon.react'), {
              colorDefault: h.neutral72,
              colorDisabled: h.white,
              name: 'chevronDown',
              style: { padding: '0 5px' },
            }),
            dividerColor: h.neutral15,
          },
          special: {
            chevron: b('React').createElement(b('SUIAtlasIcon.react'), {
              colorDefault: h.white,
              colorDisabled: h.white,
              name: 'chevronDown',
              style: { padding: '0 5px' },
            }),
            dividerColor: h.white,
          },
          flat: {
            chevron: b('React').createElement(b('SUIAtlasIcon.react'), {
              colorDefault: h.neutral72,
              colorDisabled: h.white,
              name: 'chevronDown',
              style: { padding: '0 5px' },
            }),
            dividerColor: h.neutral15,
          },
          flatWhite: {
            chevron: b('React').createElement(b('SUIAtlasIcon.react'), {
              colorDefault: h.white,
              colorDisabled: h.white,
              name: 'chevronDown',
              style: { padding: '0 5px' },
            }),
            dividerColor: h.white,
          },
        },
      },
      SUIStatusIndicator: {
        colors: {
          active: h.greenStatus,
          error: h.red,
          empty: h.white,
          inactive: h.neutral15,
          warning: h.yellow,
        },
        size: { border: 2, diameter: 10 },
      },
      SUITabGroup: {},
      SUITabItem: {
        activeBorderBottomColor: h.neutral72,
        activeTypeStyle: a.type12,
        disabledColor: h.neutral30,
        height: 44,
        hoverBackgroundColor: h.neutral03,
        iconMargin: 4,
        subtextTypeStyle: a.type11,
        typeStyle: a.type12,
      },
      SUITableDEPRECATED: {
        cellPadding: 12,
        colors: {
          cell: h.neutral72,
          cellBorder: h.neutral03,
          cellErrorBackground: h.redTint85,
          cellHoverBackground: h.neutral06,
          cellModifiedBackground: h.neutral15,
          cellSelectedBackground: h.blueTint85,
          cellSelectedHoverBackground: h.neutral06,
          cellWarningBackground: h.yellowTint85,
          error: h.red,
          heading: h.neutral30,
          headingBackground: h.white,
          headingRule: h.neutral15,
          highlight: h.blue,
          loading: h.neutral30,
          loadingBackground: h.neutral03,
          noItemsMessage: h.neutral72,
          rowBackground: h.white,
          rowStripe: h.neutral02,
          text: h.neutral72,
          warning: h.yellow,
        },
        textStyles: { cell: a.type12, heading: a.type12, table: a.type12 },
      },
      SUIText: {
        header1: {
          fontFamily:
            'Freight Sans Bold, Helvetica, Arial, Lucida Grande, sans-serif',
          fontSize: 24,
          lineHeight: 32,
        },
        header2: {
          fontFamily:
            'Freight Sans Bold, Helvetica, Arial, Lucida Grande, sans-serif',
          fontSize: 20,
          lineHeight: 24,
        },
        header3: {
          fontFamily:
            'Freight Sans Bold, Helvetica, Arial, Lucida Grande, sans-serif',
          fontSize: 16,
          lineHeight: 24,
        },
        header4: {
          fontFamily:
            'Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif',
          fontSize: 14,
          lineHeight: 20,
        },
        body1: {
          fontFamily:
            'Freight Sans Bold, Helvetica, Arial, Lucida Grande, sans-serif',
          fontSize: 14,
          lineHeight: 18,
        },
        body1_DEPRECATED: {
          fontFamily:
            'Freight Sans Bold, Helvetica, Arial, Lucida Grande, sans-serif',
          fontSize: 16,
          lineHeight: 20,
        },
        body2: {
          fontFamily:
            'Freight Sans Bold, Helvetica, Arial, Lucida Grande, sans-serif',
          fontSize: 13,
          lineHeight: 17,
        },
        body2_DEPRECATED: {
          fontFamily:
            'Freight Sans Bold, Helvetica, Arial, Lucida Grande, sans-serif',
          fontSize: 14,
          lineHeight: 18,
        },
        body3: {
          fontFamily:
            'Freight Sans Bold, Helvetica, Arial, Lucida Grande, sans-serif',
          fontSize: 12,
          lineHeight: 16,
        },
        body3_DEPRECATED: {
          fontFamily:
            'Freight Sans Bold, Helvetica, Arial, Lucida Grande, sans-serif',
          fontSize: 12,
          lineHeight: 17,
        },
        meta1: {
          fontFamily:
            'Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif',
          fontSize: 12,
          lineHeight: 17,
        },
        display: {
          fontFamily:
            'Freight Sans Bold, Helvetica, Arial, Lucida Grande, sans-serif',
          fontSize: 40,
          lineHeight: 48,
        },
        heading: {
          fontFamily:
            'Freight Sans Bold, Helvetica, Arial, Lucida Grande, sans-serif',
          fontSize: 24,
          lineHeight: 32,
        },
        subheading: {
          fontFamily:
            'Freight Sans Bold, Helvetica, Arial, Lucida Grande, sans-serif',
          fontSize: 20,
          lineHeight: 24,
        },
        headline: {
          fontFamily:
            'Freight Sans Bold, Helvetica, Arial, Lucida Grande, sans-serif',
          fontSize: 16,
          lineHeight: 24,
        },
        regular: {
          fontFamily:
            'Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif',
          fontSize: 14,
          lineHeight: 20,
        },
        regularUI: {
          fontFamily:
            'Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif',
          fontSize: 14,
          lineHeight: 16,
        },
        large: {
          fontFamily:
            'Freight Sans Bold, Helvetica, Arial, Lucida Grande, sans-serif',
          fontSize: 24,
          lineHeight: 30,
        },
        medium: {
          fontFamily:
            'Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif',
          fontSize: 16,
          lineHeight: 21,
        },
        shade: {
          dark: h.neutral72,
          light: h.neutral30,
          link: h.blue,
          medium: h.neutral50,
          white: h.white,
        },
        small: {
          fontFamily:
            'Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif',
          fontSize: 12,
          lineHeight: 17,
        },
        color: {
          blueLink: h.blue,
          disabled: h.neutral30,
          disabledDark: h.neutral72,
          interactive: h.blue,
          negative: h.red,
          placeholder: h.neutral30,
          positive: h.green,
          primary: h.neutral72,
          primaryDark: h.neutral15,
          secondary: h.neutral30,
          secondaryDark: h.neutral50,
          white: h.white,
        },
        xlarge: {
          fontFamily:
            'Freight Sans Bold, Helvetica, Arial, Lucida Grande, sans-serif',
          fontSize: 32,
          lineHeight: 40,
        },
        xsmall: {
          fontFamily:
            'Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif',
          fontSize: 11,
          lineHeight: 16,
        },
        xxlarge: {
          fontFamily:
            'Freight Sans Bold, Helvetica, Arial, Lucida Grande, sans-serif',
          fontSize: 40,
          lineHeight: 50,
        },
        letterSpacing: 'normal',
      },
      SUITextArea: {
        disabled: { background: h.neutral02, borderColor: h.neutral15 },
        enabled: { background: h.white, borderColor: h.neutral15 },
        focusedBorderColor: '#4080ff',
        placeholderColor: h.neutral30,
        placeholderColorFocused: h.neutral15,
        typeStyle: a.type12Form,
      },
      SUITextInput: {
        characterCountTypeStyle: new (b('SUITypeStyle'))({
          color: h.neutral30,
          fontFamily:
            'Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif',
          fontSize: '11px',
          fontWeight: 'normal',
        }),
        disabled: { background: h.neutral02, borderColor: h.neutral15 },
        enabled: { background: h.white, borderColor: h.neutral15 },
        errorIconMargin: '3px',
        focusedBorderColor: '#4080ff',
        height: 32,
        maxLengthHighlightColor: 'rgba(250, 62, 62, 0.3)',
        placeholderColor: h.neutral30,
        placeholderColorFocused: h.neutral15,
        typeStyle: a.type12Form,
      },
      SUIToast: {
        errorBackgroundColor: h.red,
        errorIcon: b('React').createElement(b('SUIAtlasIcon.react'), {
          colorDefault: h.white,
          name: 'warning',
        }),
        informationBackgroundColor: h.neutral72,
        informationIcon: b('React').createElement(b('SUIAtlasIcon.react'), {
          colorDefault: h.white,
          name: 'information',
        }),
        isSpinnerDark: !0,
        messageBackgroundColor: h.neutral72,
        messageBorderColor: h.neutral72,
        successBackgroundColor: h.neutral72,
        successIcon: b('React').createElement(b('SUIAtlasIcon.react'), {
          colorDefault: h.white,
          name: 'check',
        }),
        typeStyle: a.type12Toast,
        warningBackgroundColor: h.yellow,
        warningIcon: b('React').createElement(b('SUIAtlasIcon.react'), {
          colorDefault: h.white,
          name: 'warning',
        }),
      },
      SUIToggle: {
        height: 20,
        off: {
          hover: { backgroundColor: h.neutral30, color: h.neutral72 },
          normal: { backgroundColor: h.neutral15, color: h.neutral50 },
        },
        on: {
          hover: { backgroundColor: h.neutral72, color: h.neutral02 },
          normal: { backgroundColor: h.neutral50, color: h.neutral02 },
        },
        switchColor: h.white,
        typeStyle: a.type11Bold,
      },
      SUIToggleButtonGroup: {
        selected: { backgroundColor: h.neutral50, color: h.white },
      },
      SUIToken: {
        backgroundColor: h.blue,
        color: h.white,
        typeStyle: a.type12,
        closeButtonShade: 'light',
      },
      SUITokenizer: {
        disabled: { backgroundColor: h.neutral02, borderColor: h.neutral15 },
        enabled: { backgroundColor: h.white, borderColor: h.neutral15 },
        errorIconMarginRight: '4px',
        typeaheadInput: { typeStyle: a.type12 },
      },
      SUITokenizerItem: {
        disabled: { color: h.neutral30, subtitleColor: h.neutral15 },
        highlighted: {
          backgroundColor: h.blueTint85,
          color: h.neutral80,
          subtitleColor: h.neutral50,
        },
        normal: { color: h.neutral72, subtitleColor: h.neutral50 },
        remove: {
          disabledIcon: b('React').createElement(b('SUIAtlasIcon.react'), {
            colorDefault: h.neutral30,
            name: 'delete',
            size: 14,
          }),
          highlightedIcon: b('React').createElement(b('SUIAtlasIcon.react'), {
            colorDefault: h.neutral80,
            name: 'delete',
            size: 14,
          }),
          normalIcon: b('React').createElement(b('SUIAtlasIcon.react'), {
            colorDefault: h.neutral72,
            name: 'delete',
            size: 14,
          }),
          selectedIcon: b('React').createElement(b('SUIAtlasIcon.react'), {
            colorDefault: h.white,
            name: 'delete',
            size: 14,
          }),
        },
        selected: {
          backgroundColor: h.blue,
          color: h.white,
          disabledIcon: b('React').createElement(b('SUIAtlasIcon.react'), {
            colorDefault: h.neutral30,
            name: 'check',
            size: 14,
          }),
          highlightedIcon: b('React').createElement(b('SUIAtlasIcon.react'), {
            colorDefault: h.neutral80,
            name: 'check',
            size: 14,
          }),
          isIconShownForSingleSelection: !1,
          normalIcon: b('React').createElement(b('SUIAtlasIcon.react'), {
            colorDefault: h.neutral72,
            name: 'check',
            size: 14,
          }),
          selectedIcon: b('React').createElement(b('SUIAtlasIcon.react'), {
            colorDefault: h.white,
            name: 'check',
            size: 14,
          }),
          subtitleColor: h.blueTint50,
        },
      },
      SUITokenizerItemList: {
        backgroundColor: h.white,
        borderColor: h.neutral15,
        categoryHeader: { borderColor: h.neutral06, typeStyle: a.type16 },
        typeStyle: a.type12,
      },
      SUITypeahead: {
        input: {
          backgroundColor: h.white,
          borderColor: h.neutral15,
          errorBorderColor: h.red,
          focusedBorderColor: '#4080ff',
          typeStyle: a.type12Form,
          height: 32,
        },
        dropdown: {
          backgroundColor: h.white,
          borderColor: h.neutral06,
          boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.10)',
          itemPadding: {
            bottom: '8px',
            left: '12px',
            right: '12px',
            top: '8px',
          },
        },
        highlight: { backgroundColor: h.blueTint85 },
      },
      SUIHorizontalLayout: { margin: 8 },
    };
    g = new (b('SUITheme'))({ id: 'atlas', components: f });
    e.exports = g;
  },
  null
);
__d(
  'SUIAtlasChromeTheme',
  [
    'cssVar',
    'React',
    'SUIAtlasConstants',
    'SUIAtlasIcon.react',
    'SUIAtlasTheme',
    'SUITheme',
    'SUITypeStyle',
  ],
  function (a, b, c, d, e, f, g) {
    a = b('SUIAtlasConstants').COLORS;
    c = b('SUIAtlasConstants').TYPOGRAPHY;
    d = {
      SUIButton: {
        height: { normal: 32, short: 32, tall: 48 },
        padding: {
          normal: { button: '16px', icon: '6px', onlyIcon: '19px' },
          short: { button: '16px', icon: '6px', onlyIcon: '19px' },
          tall: { button: '16px', icon: '6px', onlyIcon: '19px' },
        },
        typeStyle: c.type12,
        use: {
          confirm: {
            active: {
              background: a.blueShade25,
              borderColor: a.blueShade25,
              color: a.white,
            },
            disabled: {
              background: a.neutral15,
              borderColor: a.neutral15,
              color: a.white,
            },
            hover: {
              background: a.blueShade10,
              borderColor: a.blueShade10,
              color: a.white,
            },
            normal: { background: a.blue, borderColor: a.blue, color: a.white },
          },
          default: {
            active: {
              background: a.neutral15,
              borderColor: a.neutral15,
              color: a.neutral72,
            },
            disabled: {
              background: a.neutral15,
              borderColor: a.neutral15,
              color: a.white,
            },
            hover: {
              background: a.neutral06,
              borderColor: a.neutral06,
              color: a.neutral72,
            },
            normal: {
              background: a.neutral03,
              borderColor: a.neutral03,
              color: a.neutral72,
            },
          },
          special: {
            active: {
              background: a.greenShade25,
              borderColor: a.greenShade25,
              color: a.white,
            },
            disabled: {
              background: a.neutral15,
              borderColor: a.neutral15,
              color: a.white,
            },
            hover: {
              background: a.greenShade10,
              borderColor: a.greenShade10,
              color: a.white,
            },
            normal: {
              background: a.green,
              borderColor: a.green,
              color: a.white,
            },
          },
          flat: b('SUIAtlasTheme').SUIButton.use.flat,
          flatWhite: b('SUIAtlasTheme').SUIButton.use.flatWhite,
        },
      },
      SUIButtonIcon: {
        colorConfirm: a.blueTint50,
        colorDefault: a.neutral72,
        colorDisabled: a.white,
        colorSpecial: a.greenTint50,
        defaultSize: 18,
        iconComponent: b('SUIAtlasIcon.react'),
      },
      SUISearchInput: {
        cancelIcon: b('React').createElement(b('SUIAtlasIcon.react'), {
          colorDefault: a.neutral15,
          colorHover: a.neutral50,
          name: 'delete',
        }),
        searchIcon: b('React').createElement(b('SUIAtlasIcon.react'), {
          colorDefault: a.neutral72,
          name: 'search',
          size: 24,
        }),
      },
      SUITextInput: {
        characterCountTypeStyle: new (b('SUITypeStyle'))({
          color: a.neutral30,
          fontFamily:
            'Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif',
          fontSize: '11px',
          fontWeight: 'normal',
        }),
        disabled: { background: a.neutral02, borderColor: a.neutral15 },
        enabled: { background: a.neutral06, borderColor: a.neutral06 },
        errorIconMargin: '3px',
        focusedBorderColor: '#4080ff',
        height: 32,
        maxLengthHighlightColor: 'rgba(250, 62, 62, 0.3)',
        placeholderColor: a.neutral30,
        placeholderColorFocused: a.neutral30,
        typeStyle: c.type12Form,
      },
    };
    e.exports = new (b('SUITheme'))({
      id: 'atlas_chrome',
      components: babelHelpers['extends']({}, b('SUIAtlasTheme'), d),
    });
  },
  null
);
__d(
  'FormSubmit',
  [
    'AsyncRequest',
    'AsyncResponse',
    'CSS',
    'DOMQuery',
    'Event',
    'Form',
    'Parent',
    'trackReferrer',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = {
      buildRequest: function (a, c) {
        __p && __p();
        var d = (b('Form').getAttribute(a, 'method') || 'GET').toUpperCase();
        c = (c && b('Parent').byTag(c, 'button')) || c;
        var e = (c && b('Parent').byClass(c, 'stat_elem')) || a;
        if (b('CSS').hasClass(e, 'async_saving')) return null;
        if (
          c &&
          (c.form !== a ||
            (c.nodeName != 'INPUT' && c.nodeName != 'BUTTON') ||
            c.type != 'submit')
        ) {
          var f = b('DOMQuery').scry(a, '.enter_submit_target')[0];
          f && (c = f);
        }
        f = b('Form').serialize(a, c);
        b('Form').setDisabled(a, !0);
        c =
          b('Form').getAttribute(a, 'ajaxify') ||
          b('Form').getAttribute(a, 'action');
        var g = !!b('Form').getAttribute(a, 'data-cors');
        b('trackReferrer')(a, c);
        return new (b('AsyncRequest'))()
          .setAllowCrossOrigin(g)
          .setURI(c)
          .setData(f)
          .setNectarModuleDataSafe(a)
          .setReadOnly(d == 'GET')
          .setMethod(d)
          .setRelativeTo(a)
          .setStatusElement(e)
          .setInitialHandler(b('Form').setDisabled.bind(null, a, !1))
          .setHandler(function (c) {
            b('Event').fire(a, 'success', { response: c });
          })
          .setErrorHandler(function (c) {
            b('Event').fire(a, 'error', { response: c }) !== !1 &&
              b('AsyncResponse').defaultErrorHandler(c);
          })
          .setFinallyHandler(b('Form').setDisabled.bind(null, a, !1));
      },
      send: function (a, b) {
        a = g.buildRequest(a, b);
        a && a.send();
        return a;
      },
    };
    e.exports = g;
  },
  null
);
__d(
  'PopupWindow',
  ['DOMDimensions', 'DOMQuery', 'Layer', 'Popup', 'getViewportDimensions'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = {
      _opts: {
        allowShrink: !0,
        strategy: 'vector',
        timeout: 100,
        widthElement: null,
      },
      init: function (a) {
        Object.assign(g._opts, a), setInterval(g._resizeCheck, g._opts.timeout);
      },
      _resizeCheck: function () {
        __p && __p();
        var a = b('getViewportDimensions')(),
          c = g._getDocumentSize(),
          d = b('Layer').getTopmostLayer();
        if (d) {
          d = d.getRoot().firstChild;
          var e = b('DOMDimensions').getElementDimensions(d);
          e.height += b('DOMDimensions').measureElementBox(
            d,
            'height',
            !0,
            !0,
            !0
          );
          e.width += b('DOMDimensions').measureElementBox(
            d,
            'width',
            !0,
            !0,
            !0
          );
          c.height = Math.max(c.height, e.height);
          c.width = Math.max(c.width, e.width);
        }
        d = c.height - a.height;
        e = c.width - a.width;
        e < 0 && !g._opts.widthElement && (e = 0);
        e = e > 1 ? e : 0;
        !g._opts.allowShrink && d < 0 && (d = 0);
        if (d || e)
          try {
            window.console && window.console.firebug && !1,
              window.resizeBy(e, d),
              e && window.moveBy(e / -2, 0);
          } catch (a) {}
      },
      _getDocumentSize: function () {
        var c = b('DOMDimensions').getDocumentDimensions();
        g._opts.strategy === 'offsetHeight' &&
          (c.height = document.body.offsetHeight);
        if (g._opts.widthElement) {
          var d = b('DOMQuery').scry(document.body, g._opts.widthElement)[0];
          d && (c.width = b('DOMDimensions').getElementDimensions(d).width);
        }
        d = a.Dialog;
        d &&
          d.max_bottom &&
          d.max_bottom > c.height &&
          (c.height = d.max_bottom);
        return c;
      },
      open: function (a, c, d, e) {
        return b('Popup').open(a, d, c, e);
      },
    };
    e.exports = g;
  },
  null
);
__d(
  'AsyncRequestUtil',
  ['Promise'],
  function (a, b, c, d, e, f) {
    a = {
      send: function (a) {
        return new (b('Promise'))(function (b, c) {
          return a.setHandler(b).setErrorHandler(c).send();
        });
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'DeferredComponent.react',
  ['React', 'createCancelableFunction', 'gkx'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g;
    c = b('React').PropTypes;
    d = babelHelpers.inherits(a, b('React').Component);
    g = d && d.prototype;
    function a(a, c) {
      __p && __p();
      g.constructor.call(this, a, c);
      this.$1 = function (a) {
        this.setState(
          { ComponentClass: a },
          function () {
            this.props.onComponentLoad && this.props.onComponentLoad(a);
          }.bind(this)
        );
      }.bind(this);
      var d = null;
      function e(a) {
        d = a;
      }
      this.props.deferredComponent(e);
      this.state = {
        ComponentClass: d,
        cancelableModulesLoaded: b('createCancelableFunction')(this.$1),
      };
    }
    a.prototype.componentDidMount = function () {
      this.props.deferredComponent(this.state.cancelableModulesLoaded);
    };
    a.prototype.componentWillUnmount = function () {
      this.state.cancelableModulesLoaded.cancel();
    };
    a.prototype.render = function () {
      __p && __p();
      var a = this.state.ComponentClass;
      if (!a || this.props.deferredForcePlaceholder)
        return this.props.deferredPlaceholder;
      var c = this.props;
      c.deferredPlaceholder;
      c.deferredComponent;
      c.onComponentLoad;
      c.deferredForcePlaceholder;
      c = babelHelpers.objectWithoutProperties(c, [
        'deferredPlaceholder',
        'deferredComponent',
        'onComponentLoad',
        'deferredForcePlaceholder',
      ]);
      return b('React').createElement(a, c);
    };
    a.propTypes = {
      deferredPlaceholder: c.element.isRequired,
      deferredComponent: c.func.isRequired,
      onComponentLoad: c.func,
      deferredForcePlaceholder: c.bool,
    };
    e.exports = a;
  },
  null
);
__d(
  'PerfHelperUtils',
  [
    'cx',
    'DeferredComponent.react',
    'JSResource',
    'React',
    'joinClasses',
    'promiseDone',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h;
    h = babelHelpers.inherits(i, b('React').PureComponent);
    h && h.prototype;
    i.prototype.render = function () {
      var a = this.props,
        c = a.tooltip;
      a = a.className;
      return b('React').createElement(
        'div',
        {
          className:
            '_28hn' +
            (this.props.color === 'red' ? ' _4ez8' : '') +
            (this.props.color === 'green' ? ' _28ho' : ''),
        },
        b('React').createElement(
          b('DeferredComponent.react'),
          {
            deferredPlaceholder: b('React').createElement('div', null),
            deferredComponent: function (a) {
              b('promiseDone')(
                b('JSResource')('Tooltip.react')
                  .__setRef('PerfHelperUtils')
                  .load(),
                a
              );
            },
            className: b('joinClasses')('_5_my', a),
            tooltip: c,
          },
          this.props.children
        )
      );
    };
    function i() {
      h.apply(this, arguments);
    }
    function a(a) {
      return b('React').createElement(
        i,
        {
          color: 'red',
          tooltip:
            'This bootloaded component has a red border\n          because ' +
            a.moduleId +
            '\n          took over ' +
            a.timeLimitSecs +
            ' seconds (' +
            a.timeSpentSecs +
            's) to load',
        },
        a.children
      );
    }
    c = { SlowBootloadBorder: a, BorderedComponent: i };
    e.exports = c;
  },
  null
);
__d(
  'AsyncFormRequestUtils',
  ['Arbiter'],
  function (a, b, c, d, e, f) {
    a = {
      subscribe: function (a, c, d) {
        b('Arbiter').subscribe('AsyncRequest/' + c, function (b, c) {
          b = c.request.relativeTo;
          b && b === a && d(c);
        });
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'EmbeddedPostPluginActionTypes',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({ CLICK: 'click' });
  },
  null
);
__d(
  'EmbeddedPostPluginActions',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      EMBEDDED_POSTS_COMMENT: 'embedded_post_comment',
      EMBEDDED_POSTS_LIKE: 'embedded_post_like',
      EMBEDDED_POSTS_SHARE: 'embedded_post_share',
      EMBEDDED_POSTS_UNLIKE: 'embedded_post_unlike',
    });
  },
  null
);
__d(
  'XPostPluginLoggingController',
  ['XController'],
  function (a, b, c, d, e, f) {
    e.exports = b('XController').create('/platform/plugin/post/logging/', {});
  },
  null
);
__d(
  'PluginFeedFooterActionLogger',
  [
    'AsyncRequest',
    'DOM',
    'EmbeddedPostPluginActions',
    'EmbeddedPostPluginActionTypes',
    'Event',
    'XPostPluginLoggingController',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    a = {
      initializeClickLoggers: function (a, c, d, e, f, g, h, i, j) {
        var k = function (c, d) {
          try {
            c = b('DOM').find(a, '.' + c);
            b('Event').listen(c, 'click', function (a) {
              new (b('AsyncRequest'))()
                .setURI(
                  b('XPostPluginLoggingController').getURIBuilder().getURI()
                )
                .setData({
                  action: d,
                  action_type: b('EmbeddedPostPluginActionTypes').CLICK,
                  source: g,
                  story_token: h,
                  referer_url: i,
                  is_sdk: j,
                })
                .send();
            });
          } catch (a) {}
        };
        k(c, b('EmbeddedPostPluginActions').EMBEDDED_POSTS_LIKE);
        k(d, b('EmbeddedPostPluginActions').EMBEDDED_POSTS_UNLIKE);
        k(e, b('EmbeddedPostPluginActions').EMBEDDED_POSTS_COMMENT);
        k(f, b('EmbeddedPostPluginActions').EMBEDDED_POSTS_SHARE);
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'randomInt',
  ['invariant'],
  function (a, b, c, d, e, f, g) {
    function a(a, b) {
      var c = arguments.length;
      (c > 0 && c <= 2) || g(0, undefined, c);
      c === 1 && ((b = a), (a = 0));
      b = b;
      b > a || g(0, undefined, b, a);
      var d = this.random || Math.random;
      return Math.floor(a + d() * (b - a));
    }
    e.exports = a;
  },
  null
);
__d(
  'ClientIDs',
  ['randomInt'],
  function (a, b, c, d, e, f) {
    var g = {};
    a = {
      getNewClientID: function () {
        var a = Date.now();
        a = a + ':' + (b('randomInt')(0, 4294967295) + 1);
        g[a] = !0;
        return a;
      },
      isExistingClientID: function (a) {
        return !!g[a];
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'FBFeedLocations',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      NEWSFEED: 1,
      GROUP: 2,
      GROUP_PERMALINK: 3,
      COMMUNITY: 4,
      PERMALINK: 5,
      SHARE_OVERLAY: 6,
      PERMALINK_STREAM: 7,
      GROUP_PINNED: 8,
      FRIEND_LIST: 9,
      TIMELINE: 10,
      HASHTAG_FEED: 11,
      TOPIC_FEED: 12,
      PAGE: 13,
      NOTIFICATION_FEED: 14,
      GROUP_REPORTED: 15,
      GROUP_PENDING: 16,
      PAGES_FEED_IN_PAGES_MANAGER: 17,
      TICKER_CLASSIC: 18,
      PAGES_SUGGESTED_FEED_IN_PAGES_MANAGER: 19,
      SEARCH: 20,
      GROUP_SEARCH: 21,
      NO_ATTACHMENT: 22,
      EMBED: 23,
      EMBED_FEED: 24,
      ATTACHMENT_PREVIEW: 25,
      STORIES_TO_SHARE: 26,
      PROMPT_PERMALINK: 27,
      TREND_HOVERCARD: 28,
      OPEN_GRAPH_PREVIEW: 30,
      HOTPOST_IN_PAGES_FEED: 31,
      SCHEDULED_POSTS: 32,
      TIMELINE_NOTES: 33,
      PAGE_INSIGHTS: 34,
      COMMENT_ATTACHMENT: 35,
      PAGE_TIMELINE: 36,
      GOODWILL_THROWBACK_PERMALINK: 37,
      LIKE_CONFIRM: 39,
      GOODWILL_THROWBACK_PROMOTION: 40,
      BROWSE_CONSOLE: 42,
      GROUP_FOR_SALE_COMPACT: 43,
      ENTITY_FEED: 44,
      GROUP_FOR_SALE_DISCUSSION: 45,
      PAGES_CONTENT_TAB_PREVIEW: 46,
      GOODWILL_THROWBACK_SHARE: 47,
      TIMELINE_VIDEO_SHARES: 48,
      EVENT: 49,
      PAGE_PLUGIN: 50,
      SRT: 51,
      PAGES_CONTENT_TAB_INSIGHTS: 52,
      ADS_PE_CONTENT_TAB_INSIGHTS: 53,
      PAGE_ACTIVITY_FEED: 54,
      VIDEO_CHANNEL: 55,
      POST_TO_PAGE: 56,
      GROUPS_GSYM_HOVERCARD: 57,
      GROUP_POST_TOPIC_FEED: 58,
      FEED_SURVEY: 59,
      PAGES_MODERATION: 60,
      SAVED_DASHBOARD: 61,
      PULSE_SEARCH: 62,
      GROUP_NUX: 63,
      GROUP_NUX_POST_VIEW: 64,
      EVENT_PERMALINK: 65,
      FUNDRAISER_PAGE: 66,
      EXPLORE_FEED: 67,
      CRT: 68,
      REVIEWS_FEED: 69,
      VIDEO_HOME_CHANNEL: 70,
      NEWS: 71,
      TIMELINE_FRIENDSHIP: 72,
      SAVED_REMINDERS: 73,
      PSYM: 74,
      ADMIN_FEED: 75,
      CAMPFIRE_NOTE: 76,
      PAGES_CONTEXT_CARD: 77,
      ACTIVITY_LOG: 78,
      WALL_POST_REPORT: 79,
      TIMELINE_BREAKUP: 80,
      TOWN_HALL: 81,
      PRODUCT_DETAILS: 82,
      SPORTS_PLAY_FEED: 83,
      GROUP_TOP_STORIES: 84,
      PAGE_TIMELINE_PERMALINK: 86,
      OFFERS_WALLET: 87,
      INSTREAM_VIDEO_IN_LIVE: 88,
      SPOTLIGHT: 89,
      SEARCH_DERP: 90,
      SOCIAL_BALLOT: 91,
      GROUP_SUGGESTIONS_WITH_STORY: 92,
      SOCIAL_BALLOT_PERMALINK: 93,
      LOCAL_SERP: 94,
      FUNDRAISER_SELF_DONATION_FEED: 95,
      CONVERSATION_NUB: 97,
      GROUP_TOP_SALE_STORIES: 98,
      GROUP_LEARNING_COURSE_UNIT_FEED: 99,
      SUPPORT_INBOX_READ_TIME_BLOCK: 100,
      PAGE_POSTS_CARD: 101,
      CRISIS_POST: 102,
      SUPPORT_INBOX_GROUP_RESPONSIBLE: 103,
      PAGE_POST_DIALOG: 104,
      CRISIS_DIALOG_POST: 105,
      PAGE_LIVE_VIDEOS_CARD: 106,
      PAGE_POSTS_CARD_COMPACT: 107,
      GROUP_MEMBER_BIO_FEED: 108,
      LIVE_COMMENT_ATTACHMENT: 109,
      GROUP_COMPOSER: 110,
      GROUP_INBOX_GROUP: 111,
      GROUP_INBOX_AGGREGATED: 112,
      ENDORSEMENTS: 113,
      EVENTS_DASHBOARD: 114,
      CURATED_COLLECTIONS_PAGE: 115,
      OYML: 116,
      COLLEGE_HOMEPAGE: 117,
      GROUP_LIVE_VIDEOS_CARD: 118,
      COLLEGE_HIGHLIGHTS: 119,
      VIDEO_PERMALINK: 120,
      JOB_CAROUSEL_NETEGO: 121,
      TOPIC_PAGE: 122,
      USER_SCHEDULED_POSTS: 123,
      GOODWILL_THROWBACK_ATTACHMENT_PREVIEW: 124,
      INSTREAM_VIDEO_IN_WASLIVE: 125,
      INSTREAM_VIDEO_IN_NONLIVE: 126,
      SIGNAL_APP: 127,
      ALBUM_FEED: 128,
      TOP_MARKETPLACE_STORIES: 129,
      CE_PII_STRIPPED_FEED: 130,
      TAHOE: 131,
      SAVE_COUNT_DIALOG: 132,
      GROUP_POST_TAG_FEED: 133,
      GOV_DIGEST: 134,
      GROUP_SCHEDULED: 135,
      GAMEROOM_FEED: 136,
      WORKPLACE_HUB_PREVIEW: 137,
      BRANDED_CONTENT_TRENDING_POSTS: 138,
      GROUP_ANNOUNCEMENTS: 139,
      GROUP_ANNOUNCEMENTS_FEED: 140,
      EXTERN_CE_PII_STRIPPED_FEED: 141,
      CRISIS_HUB_DESKTOP: 142,
      GROUP_DRAFT_POSTS: 143,
      TRENDING_ISSUES: 144,
      GAME_HUB_FEED: 145,
      LUMOS_POST_PREVIEW: 146,
      BRANDED_CONTENT_PAGE_SETTINGS: 147,
      PETITIONS: 148,
      BC_MULTI_POST_REVIEW: 149,
      ADS_TRANSPARENCY_SHOW_ADS: 150,
      POLITICAL_POST_FEED: 151,
      RECOMMENDATIONS_DASHBOARD: 152,
      SEEN_CONTENT: 153,
      AGGREGATED_FEED: 154,
      GROUP_HOISTED: 155,
      GROUP_MENTORSHIP_OVERVIEW_FEED: 156,
      GROUP_MENTORSHIP_CURRICULUM_FEED: 157,
      PAGE_SURFACE_RECOMMENDATIONS: 158,
      SURVEY_GALLERY: 159,
      GAMING_VIDEO_STREAMER_HUB: 160,
      GROUP_MEETUP_FEED: 161,
      GROUP_FLAGGED_FEED: 162,
      PAGE_RECOMMENDATIONS_TOOL: 163,
      MEDIA_MANAGER_HOME: 164,
      WOODHENGE_EXCLUSIVE_FEED: 165,
      PAGE_RECOMMENDATIONS_TAB_FEED: 166,
      GROUP_ANNOUNCEMENTS_WITH_UFI: 167,
      GROUP_ADMIN_TO_MEMBER_FEEDBACK: 168,
      MEDIA_MANAGER_POST_INSIGHTS: 169,
      MISINFORMATION_FACT_CHECKER_APP: 170,
      WORKPLACE_TEAM_FEED: 171,
      NEWS_STORYLINE_FEED: 172,
      PAGE_RECOMMENDATIONS_VERTEX_TAB_FEED: 173,
      MONTHLY_ACTIVITY_DIGEST: 174,
      ACTOR_EXPERIENCE_APPEALS: 175,
      WORKPLACE_NEWSFEED_PROMOTED_POST: 176,
      ASSET3D_PHOTO_FULLSCREEN: 177,
      MARKETPLACE_MEGAMALL: 178,
      CIVIC_PROPOSAL: 179,
      WORKPLACE_DISCOVERY_FEED: 180,
    });
  },
  null
);
__d(
  'PluginMessage',
  ['DOMEventListener'],
  function (a, b, c, d, e, f) {
    a = {
      listen: function () {
        b('DOMEventListener').add(window, 'message', function (event) {
          if (
            /\.facebook\.com$/.test(event.origin) &&
            /^FB_POPUP:/.test(event.data)
          ) {
            var a = JSON.parse(event.data.substring(9));
            'reload' in a &&
              /^https?:/.test(a.reload) &&
              document.location.replace(a.reload);
          }
        });
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'PluginOptin',
  [
    'DOMEvent',
    'DOMEventListener',
    'PlatformWidgetEndpoint',
    'PluginLoggedOutUserTypedLogger',
    'PluginMessage',
    'PopupWindow',
    'URI',
    'UserAgent_DEPRECATED',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    function g(a, c) {
      Object.assign(this, {
        return_params: b('URI').getRequestURI().getQueryData(),
        login_params: {},
        optin_params: {},
        plugin: a,
        api_key: c,
      }),
        this.addReturnParams({ ret: 'optin' }),
        delete this.return_params.hash;
    }
    Object.assign(g.prototype, {
      addReturnParams: function (a) {
        Object.assign(this.return_params, a);
        return this;
      },
      addLoginParams: function (a) {
        Object.assign(this.login_params, a);
        return this;
      },
      addOptinParams: function (a) {
        Object.assign(this.optin_params, a);
        return this;
      },
      start: function () {
        var a = this.api_key || 127760087237610;
        b('URI').getRequestURI().getQueryData().kid_directed_site &&
          (this.login_params.kid_directed_site = !0);
        this.login_params.referrer = document.referrer;
        var c = new (b('URI'))(
          b('PlatformWidgetEndpoint').dialog('plugin.optin')
        )
          .addQueryData(this.optin_params)
          .addQueryData({
            app_id: a,
            secure: b('URI').getRequestURI().isSecure(),
            social_plugin: this.plugin,
            return_params: JSON.stringify(this.return_params),
            login_params: JSON.stringify(this.login_params),
          });
        b('UserAgent_DEPRECATED').mobile()
          ? c.setSubdomain('m')
          : c.addQueryData({ display: 'popup' });
        this.return_params.act !== null &&
          this.return_params.act === 'send' &&
          new (b('PluginLoggedOutUserTypedLogger'))()
            .setPluginAppID(a)
            .setPluginName(this.return_params.act)
            .setHref(this.return_params.href)
            .logVital();
        this.popup = b('PopupWindow').open(c.toString(), 420, 450);
        b('PluginMessage').listen();
        return this;
      },
    });
    g.starter = function (a, b, c, d) {
      a = new g(a);
      a.addReturnParams(b || {});
      a.addLoginParams(c || {});
      a.addOptinParams(d || {});
      return a.start.bind(a);
    };
    g.listen = function (a, c, d, e, f) {
      b('DOMEventListener').add(a, 'click', function (a) {
        new (b('DOMEvent'))(a).kill(), g.starter(c, d, e, f)();
      });
    };
    e.exports = g;
  },
  null
);
__d(
  'PluginFeedLikeButton',
  [
    'Arbiter',
    'AsyncFormRequestUtils',
    'ClientIDs',
    'CSS',
    'DOM',
    'DOMEventListener',
    'FBFeedLocations',
    'FormSubmit',
    'Keys',
    'PluginOptin',
    'URI',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    window.resetConfirmStoryLike = function (a) {
      b('CSS').show(b('DOM').find(document, '#likeStory_' + a)),
        b('DOM').remove(b('DOM').find(document, '#confirmStory_' + a));
    };
    a = {
      addClientId: function (a) {
        a.setAttribute('value', b('ClientIDs').getNewClientID());
      },
      loggedOutLikeButton: function (a, c, d) {
        var e = '';
        if (c === b('FBFeedLocations').EMBED) e = 'post';
        else if (c === b('FBFeedLocations').PAGE_PLUGIN) e = 'page';
        else throw new Error('Invalid FBFeedLocation type.');
        c = new (b('PluginOptin'))(e).addReturnParams({ act: 'like_' + a });
        b('DOMEventListener').add(d, 'click', c.start.bind(c));
      },
      init: function (a, c, d, e, f) {
        __p && __p();
        var g = function (a) {
          if (a.type === 'keypress')
            if (a.keyCode === b('Keys').RETURN || a.keyCode === b('Keys').SPACE)
              b('FormSubmit').send(f);
            else return;
          b('FormSubmit').send(f);
        };
        b('DOMEventListener').add(c, 'click', g);
        b('DOMEventListener').add(d, 'click', g);
        b('DOMEventListener').add(c, 'keypress', g);
        b('DOMEventListener').add(d, 'keypress', g);
        g = e.getAttribute('value') === '1';
        b('AsyncFormRequestUtils').subscribe(f, 'send', function (f) {
          f = e.getAttribute('value') === '1';
          b('CSS').conditionShow(d, f);
          b('CSS').conditionShow(c, !f);
          b('Arbiter').inform('embeddedUfiToggle', {
            isLike: f,
            storyToken: a,
          });
          e.setAttribute('value', f ? '' : '1');
        });
        b('AsyncFormRequestUtils').subscribe(f, 'response', function (f) {
          f = f.response.payload;
          if (f && !f.success) {
            f = f.isLike;
            b('CSS').conditionShow(c, f);
            b('CSS').conditionShow(d, !f);
            b('Arbiter').inform('revertLike', { isLike: f, storyToken: a });
            e.setAttribute('value', f ? '1' : '');
          }
        });
        var h = new (b('URI'))(window.location.search).getQueryData();
        g && h.act === 'like_' + a && b('FormSubmit').send(f);
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'ImageBlock.react',
  ['cx', 'invariant', 'LeftRight.react', 'React', 'joinClasses'],
  function (a, b, c, d, e, f, g, h) {
    __p && __p();
    var i;
    function j(a) {
      a = a.children;
      (a && (a.length === 2 || a.length === 3)) || h(0, undefined);
      a[0] !== null || h(0, undefined);
      return a;
    }
    function k(a) {
      return (
        'img _8o' +
        (a === 'small' ? ' _8r' : '') +
        (a === 'medium' ? ' _8s' : '') +
        (a === 'large' ? ' _8t' : '')
      );
    }
    i = babelHelpers.inherits(a, b('React').Component);
    i && i.prototype;
    a.prototype.render = function () {
      __p && __p();
      var a = j(this.props),
        c = a[0],
        d = a[1];
      a = a[2];
      var e = this.props,
        f = e.imageClassName,
        g = e.contentClassName,
        h = e.spacing;
      e = babelHelpers.objectWithoutProperties(e, [
        'imageClassName',
        'contentClassName',
        'spacing',
      ]);
      var i = c.props,
        l = i.className,
        m = i.alt,
        n = i.tabIndex;
      i = i.title;
      l = { className: b('joinClasses')(l, k(h), f) };
      c.type === 'img'
        ? m === undefined && (l.alt = '')
        : (c.type === 'a' || c.type === 'link') &&
          n === undefined &&
          i === undefined &&
          c.props['aria-label'] === undefined &&
          ((l.tabIndex = '-1'), (l['aria-hidden'] = 'true'));
      c = b('React').cloneElement(c, l);
      f = b('joinClasses')(g, '_42ef' + (h === 'small' ? ' _8u' : ''));
      !a
        ? (m = b('React').createElement('div', { className: f }, d))
        : (m = b('React').createElement(
            b('LeftRight.react'),
            { className: f, direction: b('LeftRight.react').DIRECTION.right },
            d,
            a
          ));
      return b('React').createElement(
        b('LeftRight.react'),
        babelHelpers['extends']({}, e, {
          direction: b('LeftRight.react').DIRECTION.left,
        }),
        c,
        m
      );
    };
    function a() {
      i.apply(this, arguments);
    }
    a.defaultProps = { spacing: 'small' };
    e.exports = a;
  },
  null
);
__d(
  'ProfileTile.react',
  [
    'Image.react',
    'ImageBlock.react',
    'Link.react',
    'React',
    'URI',
    'XUIText.react',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g,
      h = 24;
    g = babelHelpers.inherits(a, b('React').Component);
    g && g.prototype;
    a.prototype.render = function () {
      var a = this.props.size || h;
      a =
        (this.props.imageProps && this.props.imageProps.src) ||
        'https://graph.facebook.com/' +
          this.props.id +
          '/picture?width=' +
          a +
          '&height=' +
          a;
      var c =
          (this.props.imageProps && this.props.imageProps.href) ||
          '/' + this.props.id,
        d = null;
      this.props.shouldShowProfileCardOnHover &&
        (d = new (b('URI'))('/ajax/hovercard/user.php').setQueryData({
          id: this.props.id,
        }));
      var e = this.props.desc
          ? b('React').createElement(
              b('XUIText.react'),
              babelHelpers['extends'](
                { display: 'block' },
                this.props.descProps
              ),
              this.props.desc
            )
          : null,
        f = b('React').createElement(
          'span',
          this.props.titleProps,
          this.props.name
        );
      this.props.shouldNameLinkToProfile &&
        (f = b('React').createElement(
          b('Link.react'),
          babelHelpers['extends'](
            { 'data-hovercard': d },
            this.props.titleProps,
            {
              href:
                (this.props.titleProps && this.props.titleProps.href) ||
                '/' + this.props.id,
            }
          ),
          this.props.name
        ));
      d =
        this.props.image ||
        (this.props.size &&
        this.props.imageProps &&
        !this.props.imageProps.height &&
        this.props.imageProps &&
        !this.props.imageProps.width
          ? b('React').createElement(
              b('Image.react'),
              babelHelpers['extends'](
                { height: this.props.size, src: a, width: this.props.size },
                this.props.imageProps
              )
            )
          : b('React').createElement(
              b('Image.react'),
              babelHelpers['extends']({ src: a }, this.props.imageProps)
            ));
      a = this.props.shouldImageLinkToProfile
        ? b('React').createElement(b('Link.react'), { href: c }, d)
        : d;
      return b('React').createElement(
        b('ImageBlock.react'),
        this.props.tileProps,
        a,
        b('React').createElement('div', null, f, e)
      );
    };
    function a() {
      g.apply(this, arguments);
    }
    a.defaultProps = {
      shouldShowProfileCardOnHover: !0,
      shouldNameLinkToProfile: !0,
    };
    e.exports = a;
  },
  null
);
__d(
  'SUIComponent',
  ['React', 'SUITheme', 'prop-types'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g;
    g = babelHelpers.inherits(a, b('React').PureComponent);
    g && g.prototype;
    a.prototype.getChildContext = function () {
      return this.props.preserveThemeFromContext === !0
        ? { theme: this.context.theme }
        : { theme: this.props.theme || this.context.theme };
    };
    a.prototype.componentDidCatch = function (a) {
      a.suiChildError = !0;
      var b = this.getChildContext().theme;
      b && b.logger && b.logger.logError(a, this.constructor.displayName || '');
      throw a;
    };
    function a() {
      g.apply(this, arguments);
    }
    a.contextTypes = { theme: b('prop-types').instanceOf(b('SUITheme')) };
    a.childContextTypes = { theme: b('prop-types').instanceOf(b('SUITheme')) };
    e.exports = a;
  },
  null
);
__d(
  'SUIInternalDisplay',
  ['cx', 'React'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    a = b('React').PropTypes;
    c = ['block', 'inline', 'unset_DEPRECATED'];
    d = [].concat(c, ['truncateInline', 'truncateBlock']);
    var h = {
      propType: a.oneOf(c),
      propTypeWithTruncate: a.oneOf(d),
      get: function (a) {
        return (
          (a === 'block' ? '_4yee' : '') + (a === 'inline' ? ' _4yef' : '')
        );
      },
      getWithTruncate: function (a) {
        if (a === 'truncateInline') return '_4yeg';
        return a === 'truncateBlock' ? '_3tep' : h.get(a);
      },
      getFlex: function (a) {
        return (
          (a === 'block' ? '_4yeh' : '') + (a === 'inline' ? ' _4yei' : '')
        );
      },
      getTable: function (a) {
        return (
          (a === 'block' ? '_4yg0' : '') + (a === 'inline' ? ' _4yg1' : '')
        );
      },
    };
    e.exports = h;
  },
  null
);
__d(
  'ContextualLayerAutoFlip',
  [
    'ContextualLayerAlignmentEnum',
    'ContextualLayerDimensions',
    'DOMDimensions',
    'Rect',
    'Vector',
    'getDocumentScrollElement',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    function g(a, c) {
      c = new (b('Rect'))(c).convertTo(a.domain);
      var d = Math.max(a.l, c.l);
      a = Math.min(a.r, c.r);
      return Math.max(a - d, 0);
    }
    function a(a) {
      this._layer = a;
    }
    a.prototype.enable = function () {
      (this._subscription = this._layer.subscribe(
        'adjust',
        this._adjustOrientation.bind(this)
      )),
        this._layer.isShown() && this._layer.updatePosition();
    };
    a.prototype.disable = function () {
      this._subscription.unsubscribe(),
        (this._subscription = null),
        this._layer.isShown() && this._layer.updatePosition();
    };
    a.prototype._adjustOrientation = function (a, c) {
      __p && __p();
      a = this.getValidPositions(c);
      if (!a.length) {
        c.invalidate();
        return;
      }
      var d = b('ContextualLayerDimensions').getViewportRect(this._layer),
        e = this._getValidAlignments(c),
        f,
        h,
        i;
      for (f = 0; f < e.length; f++) {
        c.setAlignment(e[f]);
        for (h = 0; h < a.length; h++) {
          c.setPosition(a[h]);
          i = b('ContextualLayerDimensions').getLayerRect(this._layer, c);
          if (d.contains(i)) return;
        }
      }
      var j = -1;
      if (c.getPreferMoreContentShownRect()) {
        var k = b('DOMDimensions').getDocumentDimensions(),
          l = new (b('Rect'))(d).convertTo('document'),
          m = 99999;
        for (h = 0; h < a.length; h++) {
          c.setPosition(a[h]);
          i = b('ContextualLayerDimensions').getLayerRect(this._layer, c);
          var n = new (b('Rect'))(i).convertTo('document');
          if (n.l >= 0 && n.r <= k.width && n.t >= 43 && n.b <= k.height) {
            var o = l.l - n.l,
              p = n.r - l.r,
              q = l.t - n.t;
            n = n.b - l.b;
            o =
              (o > 0 ? o : 0) +
              (p > 0 ? p : 0) +
              (q > 0 ? q : 0) +
              (n > 0 ? n : 0);
            o < m && ((j = h), (m = o));
          }
        }
      }
      this.__setBestPosition(j, c, a);
      p = 0;
      q = 0;
      for (f = 0; f < e.length; f++)
        c.setAlignment(e[f]),
          (i = b('ContextualLayerDimensions').getLayerRect(this._layer, c)),
          (n = g(d, i)),
          n > q && ((q = n), (p = f));
      c.setAlignment(e[p]);
    };
    a.prototype.__setBestPosition = function (a, b, c) {
      a >= 0
        ? b.setPosition(c[a])
        : b.setPosition(c.includes('below') ? 'below' : c[0]);
    };
    a.prototype.getValidPositions = function (a) {
      __p && __p();
      var c = [a.getPosition(), a.getOppositePosition()],
        d = this._layer.getContextScrollParent();
      if (d === window || d === b('getDocumentScrollElement')()) return c;
      var e = this._layer.getContext(),
        f = b('Vector').getElementPosition(d, 'viewport').y,
        g = b('Vector').getElementPosition(e, 'viewport').y;
      if (a.isVertical())
        return c.filter(function (a) {
          if (a === 'above') return g >= f;
          else {
            a = f + d.offsetHeight;
            var b = g + e.offsetHeight;
            return b <= a;
          }
        });
      else {
        a = f + d.offsetHeight;
        if (g >= f && g + e.offsetHeight <= a) return c;
        else return [];
      }
    };
    a.prototype._getValidAlignments = function (a) {
      var c = b('ContextualLayerAlignmentEnum').values;
      a = a.getAlignment();
      var d = c.indexOf(a);
      d > 0 && (c.splice(d, 1), c.unshift(a));
      return c;
    };
    Object.assign(a.prototype, { _subscription: null });
    e.exports = a;
  },
  null
);
__d(
  'LayerFadeOnShow',
  ['Bootloader', 'Run', 'emptyFunction', 'ifRequired'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function g(a) {
      (this._layer = a),
        b('Run').onAfterLoad(function () {
          b('Bootloader').loadModules(
            ['CSSFade'],
            b('emptyFunction'),
            'LayerFadeOnShow'
          );
        });
    }
    g.prototype.enable = function () {
      this._subscriptions = [
        this._layer.subscribe('show', this._animate.bind(this)),
      ];
    };
    g.prototype.disable = function () {
      if (this._subscriptions) {
        while (this._subscriptions.length)
          this._subscriptions.pop().unsubscribe();
        this._subscriptions = null;
      }
    };
    g.prototype._getDuration = function () {
      return 100;
    };
    g.prototype._animate = function () {
      var a = this._layer.getRoot();
      b('ifRequired')(
        'CSSFade',
        function (b) {
          b.show(a, { duration: this._getDuration() });
        }.bind(this),
        function () {}
      );
    };
    g.forDuration = function (a) {
      var c;
      c = babelHelpers.inherits(d, g);
      c && c.prototype;
      function d() {
        c.apply(this, arguments);
      }
      d.prototype._getDuration = b('emptyFunction').thatReturns(a);
      return d;
    };
    Object.assign(g.prototype, { _subscriptions: null });
    e.exports = g;
  },
  null
);
__d(
  'SUILink.react',
  [
    'cx',
    'React',
    'SUIComponent',
    'SUIInternalDisplay',
    'SUITheme',
    'joinClasses',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h;
    c = b('React').PropTypes;
    d = ['always', 'hover', 'never'];
    f = {
      display: 'unset_DEPRECATED',
      isInverseColor: !1,
      showUnderline: 'hover',
    };
    g = babelHelpers.inherits(a, b('SUIComponent'));
    h = g && g.prototype;
    function a() {
      h.constructor.call(this),
        (this.$SUILink1 = function () {
          this.setState({ isHovering: !0 });
        }.bind(this)),
        (this.$SUILink2 = function () {
          this.setState({ isHovering: !1 });
        }.bind(this)),
        (this.state = { isHovering: !1 });
    }
    a.prototype.render = function () {
      var a = b('SUITheme').get(this).SUILink,
        c = this.props,
        d = c.children,
        e = c.className,
        f = c.display,
        g = c.href,
        h = c.isInverseColor,
        i = c.margin,
        j = c.showUnderline;
      c.theme;
      var k = c.width;
      c = babelHelpers.objectWithoutProperties(c, [
        'children',
        'className',
        'display',
        'href',
        'isInverseColor',
        'margin',
        'showUnderline',
        'theme',
        'width',
      ]);
      var l = a.inverseColor || a.normalColor,
        m = a.inverseHoverColor || a.hoverColor;
      m = {
        color: this.state.isHovering
          ? h
            ? m
            : a.hoverColor
          : h
          ? l
          : a.normalColor,
        width: k,
      };
      h = {};
      (f === 'truncateInline' || f === 'truncateBlock') &&
        ((h['data-hover'] = 'tooltip'),
        (h['data-tooltip-display'] = 'overflow'));
      return b('React').createElement(
        'a',
        babelHelpers['extends']({}, c, h, {
          className: b('joinClasses')(
            '_231w' +
              (j === 'always' ? ' _231y' : '') +
              (j === 'hover' ? ' _231z' : ''),
            b('SUIInternalDisplay').getWithTruncate(f),
            e,
            i
          ),
          href: g ? g.toString() : '#',
          onMouseEnter: this.$SUILink1,
          onMouseLeave: this.$SUILink2,
          style: m,
        }),
        d
      );
    };
    a.propTypes = {
      display: b('SUIInternalDisplay').propTypeWithTruncate.isRequired,
      margin: c.string,
      showUnderline: c.oneOf(d),
      theme: c.instanceOf(b('SUITheme')),
      width: c.oneOfType([c.number, c.string]),
    };
    a.defaultProps = f;
    e.exports = a;
  },
  null
);
__d(
  'SUITooltip.react',
  [
    'cx',
    'AlignmentEnum',
    'ContextualLayer.react',
    'ContextualLayerAutoFlip',
    'ContextualLayerHideOnScroll',
    'LayerFadeOnShow',
    'PositionEnum',
    'React',
    'SUIComponent',
    'SUILink.react',
    'SUITheme',
    'getElementRect',
    'joinClasses',
    'uniqueID',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h, i, j, k;
    f = b('React').PropTypes;
    var l = 4,
      m = {
        LayerFadeOnShow: b('LayerFadeOnShow'),
        ContextualLayerAutoFlip: b('ContextualLayerAutoFlip'),
        ContextualLayerHideOnScroll: b('ContextualLayerHideOnScroll'),
      },
      n = 100;
    g = ['block', 'inline'];
    var o = ['normal', 'break-word'],
      p = null;
    h = babelHelpers.inherits(a, b('SUIComponent'));
    h && h.prototype;
    a.prototype.render = function () {
      var a = this.props,
        c = a.label,
        d = a.value;
      a = babelHelpers.objectWithoutProperties(a, ['label', 'value']);
      return b('React').createElement(
        'li',
        a,
        c && b('React').createElement('strong', null, c),
        ' ',
        d
      );
    };
    function a() {
      h.apply(this, arguments);
    }
    a.propTypes = { value: f.node.isRequired, label: f.string };
    i = babelHelpers.inherits(c, b('SUIComponent'));
    i && i.prototype;
    c.prototype.render = function () {
      return b('React').createElement(
        'div',
        { className: b('joinClasses')(this.props.className, '_2pif') },
        this.props.description,
        ' ',
        b('React').createElement(
          b('SUILink.react'),
          { onClick: this.props.onClick },
          this.props.label
        )
      );
    };
    function c() {
      i.apply(this, arguments);
    }
    c.propTypes = {
      label: f.node.isRequired,
      onClick: f.func.isRequired,
      description: f.node,
      theme: f.instanceOf(b('SUITheme')),
    };
    var q = {
      alignment: 'left',
      display: 'inline',
      offset: 4,
      position: 'above',
      tooltipDelay: 0,
      tooltipWidth: 'auto',
    };
    j = babelHelpers.inherits(d, b('SUIComponent'));
    k = j && j.prototype;
    function d() {
      __p && __p();
      var a, c;
      for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
        e[f] = arguments[f];
      return (
        (c = (a = k.constructor).call.apply(a, [this].concat(e))),
        (this.state = {
          isTextHover: !1,
          isTooltipHover: !1,
          isTooltipVisible: !1,
        }),
        (this.$SUITooltip4 = b('uniqueID')()),
        (this.$SUITooltip6 = function () {
          this.props.tooltipDelay
            ? (this.$SUITooltip5 = setTimeout(
                this.$SUITooltip7,
                this.props.tooltipDelay
              ))
            : this.$SUITooltip7();
        }.bind(this)),
        (this.$SUITooltip9 = function () {
          this.$SUITooltip2 = setTimeout(this.$SUITooltip7, n);
        }.bind(this)),
        (this.$SUITooltip7 = function () {
          this.state.isTextHover || this.state.isTooltipHover
            ? this.show()
            : this.hide();
        }.bind(this)),
        (this.$SUITooltip8 = function () {
          this.props.onToggle &&
            this.props.onToggle(this.state.isTooltipVisible);
        }.bind(this)),
        (this.$SUITooltip10 = function () {
          this.setState({ isTextHover: !1 }, this.$SUITooltip9);
        }.bind(this)),
        (this.$SUITooltip11 = function () {
          this.setState({ isTooltipHover: !1 }, this.$SUITooltip9);
        }.bind(this)),
        (this.$SUITooltip12 = function () {
          this.setState({ isTextHover: !0 }, this.$SUITooltip6);
        }.bind(this)),
        (this.$SUITooltip13 = function () {
          this.setState({ isTextHover: !1 }, this.$SUITooltip9);
        }.bind(this)),
        (this.$SUITooltip14 = function () {
          this.setState({ isTooltipHover: !0 });
        }.bind(this)),
        (this.$SUITooltip15 = function () {
          this.setState({ isTooltipHover: !1 }, this.$SUITooltip9);
        }.bind(this)),
        (this.$SUITooltip16 = function (a) {
          this.$SUITooltip1 = a;
        }.bind(this)),
        (this.$SUITooltip17 = function () {
          return this.$SUITooltip1;
        }.bind(this)),
        c
      );
    }
    d.prototype.componentDidMount = function () {
      this.$SUITooltip3 = !0;
    };
    d.prototype.componentWillUnmount = function () {
      (this.$SUITooltip3 = !1),
        this.$SUITooltip5 && clearTimeout(this.$SUITooltip5),
        this.$SUITooltip2 && clearTimeout(this.$SUITooltip2),
        p === this && (p = null);
    };
    d.prototype.show = function () {
      if (this.state.isTooltipVisible) return;
      p && p !== this && p.hide();
      p = this;
      this.$SUITooltip3 &&
        this.setState({ isTooltipVisible: !0 }, this.$SUITooltip8);
    };
    d.prototype.hide = function () {
      if (!this.state.isTooltipVisible) return;
      p = null;
      this.$SUITooltip3 &&
        this.setState({ isTooltipVisible: !1 }, this.$SUITooltip8);
    };
    d.prototype.$SUITooltip18 = function () {
      __p && __p();
      var a = !!this.props.tooltip && this.state.isTooltipVisible;
      if (!a) return null;
      a = this.props.position === 'above';
      var c = this.props.position === 'below',
        d = this.props.position === 'left',
        e = this.props.position === 'right',
        f = a || c,
        g = b('SUITheme').get(this).SUITooltip,
        h = 0;
      c ? (h = this.props.offset) : a && (h = -1 * this.props.offset);
      c = 0;
      e ? (c = this.props.offset + l) : d && (c = -1 * (this.props.offset + l));
      a = babelHelpers['extends']({}, g.typeStyle, {
        backgroundColor: g.backgroundColor,
        color: g.color,
        width:
          this.props.tooltipWidth !== 'auto' ? this.props.tooltipWidth : null,
        maxWidth: this.props.maxWidth,
        overflowWrap: this.props.overflowWrap,
      });
      e = 0;
      d = this.$SUITooltip1;
      if (!f && d) {
        f = b('getElementRect')(d);
        d = f.bottom - f.top;
        e = d / 2;
      }
      return b('React').createElement(
        b('ContextualLayer.react'),
        {
          alignment: this.props.alignment,
          behaviors: this.props.behaviors
            ? babelHelpers['extends']({}, m, this.props.behaviors)
            : m,
          contextRef: this.$SUITooltip17,
          offsetX: c,
          offsetY: h,
          position: this.props.position,
          shown: !0,
        },
        b('React').createElement(
          'div',
          {
            className: '_4_gw',
            id: this.$SUITooltip4,
            onBlur: this.$SUITooltip11,
            onMouseEnter: this.$SUITooltip14,
            onMouseLeave: this.$SUITooltip15,
            style: { top: e + 'px' },
          },
          b('React').createElement(
            'ul',
            { className: '_3b5i', style: a },
            this.props.tooltip
          ),
          b('React').createElement('div', {
            'aria-hidden': !0,
            className: '_3b61',
            style: { borderTopColor: g.backgroundColor },
          })
        )
      );
    };
    d.prototype.render = function () {
      var a = this.props.display === 'block' ? 'div' : 'span';
      return b('React').createElement(
        a,
        {
          'aria-describedby': this.state.isTextHover
            ? this.$SUITooltip4
            : undefined,
          className: b('joinClasses')(
            this.props.className,
            this.props.margin,
            '_3b62'
          ),
          onBlur: this.$SUITooltip10,
          onMouseEnter: this.$SUITooltip12,
          onMouseLeave: this.$SUITooltip13,
          ref: this.$SUITooltip16,
          style: this.props.style,
        },
        this.props.children,
        this.$SUITooltip18()
      );
    };
    d.Row = a;
    d.ActionDEPRECATED = c;
    d.propTypes = {
      alignment: b('AlignmentEnum').propType.isRequired,
      behaviors: f.object,
      className: f.string,
      display: f.oneOf(g).isRequired,
      margin: f.string,
      maxWidth: f.number,
      offset: f.number.isRequired,
      overflowWrap: f.oneOf(o),
      position: b('PositionEnum').propType.isRequired,
      theme: f.instanceOf(b('SUITheme')),
      tooltip: f.node,
      tooltipDelay: f.number,
      tooltipWidth: f.oneOfType([f.oneOf(['auto']), f.number]),
    };
    d.defaultProps = q;
    e.exports = d;
  },
  null
);
__d(
  'VideoChannelProgressCircle.react',
  ['cx', 'React', 'ReactDOM', 'Style'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h;
    c = b('React').PropTypes;
    d = babelHelpers.inherits(a, b('React').PureComponent);
    h = d && d.prototype;
    function a() {
      var a, b;
      for (var c = arguments.length, d = new Array(c), e = 0; e < c; e++)
        d[e] = arguments[e];
      return (
        (b = (a = h.constructor).call.apply(a, [this].concat(d))),
        (this.$1 = null),
        (this.$2 = 0),
        b
      );
    }
    a.prototype.componentDidMount = function () {
      this.drawProgressCircle(this.props);
    };
    a.prototype.componentWillUnmount = function () {
      clearInterval(this.$1);
    };
    a.prototype.UNSAFE_componentWillReceiveProps = function (a) {
      (a.makeProgress !== this.props.makeProgress ||
        a.timeoutSec !== this.props.timeoutSec) &&
        this.drawProgressCircle(a);
    };
    a.prototype.drawProgressCircle = function (a) {
      var c = b('ReactDOM').findDOMNode(this.refs.progressCircle),
        d = this.$2,
        e = d / 100;
      b('Style').set(c, 'stroke-dashoffset', d + 'px');
      clearInterval(this.$1);
      a.makeProgress &&
        (this.$1 = setInterval(
          function () {
            (d -= e),
              b('Style').set(c, 'stroke-dashoffset', d + 'px'),
              d <= 0 &&
                (clearInterval(this.$1),
                b('Style').set(c, 'stroke-dashoffset', '0px'),
                a.onProgressDone && a.onProgressDone());
          }.bind(this),
          a.timeoutSec * 10
        ));
    };
    a.prototype.render = function () {
      var a = this.props.watchAndScroll ? 34 : 80,
        c = this.props.watchAndScroll ? 2 : 4;
      a = a / 2;
      var d = a - c / 2;
      this.$2 = d * 2 * Math.PI;
      return b('React').createElement(
        'div',
        null,
        b('React').createElement(
          'svg',
          { className: '_20_8' },
          b('React').createElement('circle', {
            cx: a,
            cy: a,
            r: d,
            stroke: '#ffffff',
            strokeWidth: c,
            strokeDasharray: this.$2,
            fill: 'transparent',
          }),
          b('React').createElement('circle', {
            ref: 'progressCircle',
            cx: a,
            cy: a,
            r: d,
            stroke: '#5890ff',
            strokeWidth: c,
            strokeDasharray: this.$2,
            fill: 'transparent',
          })
        ),
        this.props.children
      );
    };
    a.propTypes = {
      children: c.element,
      makeProgress: c.bool.isRequired,
      onProgressDone: c.func,
      timeoutSec: c.number.isRequired,
      watchAndScroll: c.bool,
    };
    e.exports = a;
  },
  null
);
__d(
  'VideoChannelReplayImage.react',
  ['cx', 'Image.react', 'React'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h;
    h = babelHelpers.inherits(a, b('React').Component);
    h && h.prototype;
    a.prototype.render = function () {
      return b('React').createElement(b('Image.react'), {
        onClick: this.props.onClick,
        className: '_4nxy' + (this.props.size === 'small' ? ' _4nxz' : ''),
        src: '/images/video/channel_view/replay.svg',
      });
    };
    function a() {
      h.apply(this, arguments);
    }
    a.defaultProps = { size: 'normal' };
    e.exports = a;
  },
  null
);
__d(
  'VideoChannelLoggerEvents',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      SESSION_START: 'session_start',
      SESSION_PAUSE: 'session_pause',
      SESSION_RESUME: 'session_resume',
      SESSION_END: 'session_end',
      IMPRESSION: 'impression',
      VPV: 'vpv',
      CLICK: 'click',
      WATCH_SUMMARY: 'watch_summary',
      FOLLOW: 'follow',
      UNFOLLOW: 'unfollow',
      SUBSCRIBE: 'subscribe',
      SUBSCRIBE_SOME: 'subscribe_some',
      UNSUBSCRIBE: 'unsubscribe',
      PIN_TOPIC: 'pin_topic',
      UNPIN_TOPIC: 'unpin_topic',
      MARK_VISIT: 'mark_visit',
      AUTO_ADVANCE: 'auto_advance',
      STORY_FETCH_RESULTS: 'story_fetch_results',
      FETCH_FIRST_STORY: 'fetch_first_story_success',
      FETCH_STORIES_FROM_ENTQUERY: 'fetch_stories_from_entquery',
      FETCH_STORIES_FORWARD: 'fetch_stories_forward',
      FETCH_STORIES_BACKWARD: 'fetch_stories_backward',
      FETCH_CHANNEL_PIVOTS: 'fetch_channel_pivots_success',
      APPEND_CHANNEL_PIVOTS: 'append_channel_pivots',
      FETCH_FIRST_STORY_SUCCESS: 'fetch_first_story_success',
      FETCH_FIRST_STORY_ERROR: 'fetch_first_story_error',
      FETCH_STORIES_FROM_ENTQUERY_SUCCESS:
        'fetch_stories_from_entquery_success',
      FETCH_STORIES_FROM_ENTQUERY_ERROR: 'fetch_stories_from_entquery_error',
      FETCH_STORIES_FORWARD_SUCCESS: 'fetch_stories_forward_success',
      FETCH_STORIES_FORWARD_ERROR: 'fetch_stories_forward_error',
      FETCH_STORIES_BACKWARD_SUCCESS: 'fetch_stories_backward_success',
      FETCH_STORIES_BACKWARD_ERROR: 'fetch_stories_backward_error',
    });
  },
  null
);
__d(
  'VideoChannelLoggerFields',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      DEPTH_LEVEL: 'depth_level',
      EVENT_TARGET: 'event_target',
      EVENT_TARGET_INFO: 'event_target_info',
      ENTRY_POINT: 'entry_point',
      ENTRY_POINT_TYPE: 'entry_point_type',
      ENTRY_POINT_VALUE: 'entry_point_value',
      EXIT_POINT_TYPE: 'exit_point_type',
      EXIT_POINT_VALUE: 'exit_point_value',
      FOLLOW_SURFACE: 'follow_surface',
      EVENT: 'event',
      HAS_STORY_FETCH_CURSOR: 'has_story_fetch_cursor',
      IS_AD: 'is_ad',
      IS_EMPLOYEE: 'is_employee',
      IS_TEST_USER: 'is_test_user',
      PERF_TIME_MS: 'perf_time_ms',
      REQUEST_STATUS: 'request_status',
      HAS_NEXT_PAGE: 'has_next_page',
      POSITION_IN_CHANNEL: 'position_in_channel',
      SESSION_ID: 'session_id',
      SUBSCRIPTION_SURFACE: 'subscription_surface',
      STORY_ID: 'story_id',
      STORY_FETCH_COUNT: 'story_fetch_count',
      STORY_FETCH_CURSOR: 'story_fetch_cursor',
      STORY_FETCH_LIMIT: 'story_fetch_limit',
      TIME_SINCE_START: 'time_since_start',
      TRACKING_DATA: 'tracking_data',
      VIDEO_ID: 'video',
      VIDEO_ID_OVERRIDE: 'video_id_override',
      VIDEO_CHAINING_CALLER: 'video_chaining_caller',
      VIDEO_CHANNEL_ID: 'video_channel_id',
      VIDEO_CHANNEL_TYPE: 'video_channel_type',
      VIDEO_CHANNEL_TITLE: 'video_channel_title',
      VIDEO_HOME_SESSION_ID: 'video_home_session_id',
      WATCH_TIME_S: 'watch_time_s',
    });
  },
  null
);
__d(
  'VideoChannelRequestStatus',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      SUCCEEDED: 'succeeded',
      FAILED: 'failed',
      ABORTED: 'aborted',
    });
  },
  null
);
__d(
  'XVideoChannelViewAsyncController',
  ['XController'],
  function (a, b, c, d, e, f) {
    e.exports = b('XController').create('/video/channel/view/async/{id}/', {
      id: { type: 'String', required: !0 },
      original_video_id: { type: 'String', required: !0 },
      cursor: { type: 'String' },
      story_count: { type: 'Int', defaultValue: 3 },
      caller: {
        type: 'Enum',
        defaultValue: 'channel_view_from_unknown',
        enumType: 1,
      },
    });
  },
  null
);
__d(
  'XVideoChannelViewStoryAsyncController',
  ['XController'],
  function (a, b, c, d, e, f) {
    e.exports = b('XController').create(
      '/video/channel/view/story/async/{root_video_id}/',
      {
        root_video_id: { type: 'String', required: !0 },
        video_ids: { type: 'StringVector', defaultValue: [] },
        use_video_placeholder: { type: 'Bool', defaultValue: !1 },
        setup_interactions: { type: 'Bool', defaultValue: !1 },
        is_first_story: { type: 'Bool', defaultValue: !1 },
        feed_tracking_data: { type: 'StringVector', defaultValue: [] },
        caller: {
          type: 'Enum',
          defaultValue: 'channel_view_from_unknown',
          enumType: 1,
        },
        channel_id: { type: 'String' },
        ad_impression_token: { type: 'String' },
        fetch_channel_pivots: { type: 'Bool', defaultValue: !1 },
      }
    );
  },
  null
);
__d(
  'VideoChannelStoryFetcher',
  [
    'AsyncRequest',
    'HTML',
    'VideoChannelLoggerEvents',
    'VideoChannelLoggerFields',
    'VideoChannelRequestStatus',
    'VideoChannelViewVariables',
    'XVideoChannelViewAsyncController',
    'XVideoChannelViewStoryAsyncController',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = b('VideoChannelViewVariables').channelPivots;
    function a(a, b, c, d, e, f, g) {
      __p && __p();
      this.$7 = a;
      this.$8 = b;
      this.$4 = c;
      this.$10 = 0;
      this.$2 = null;
      this.$3 = !0;
      this.$5 = [];
      this.$6 = [];
      this.$9 = {};
      if (e) {
        this.$5 = e.videoIDs;
        this.$6 = e.feedTrackingData;
        this.$2 = e.cursorInfo.cursor;
        this.$3 = e.cursorInfo.hasNextPage;
        a = this.$5.indexOf(this.$7);
        this.$9.start = a;
        this.$9.end = a + 1;
      }
      if (f) {
        this.$5 = f;
        this.$3 = !!g;
        b = this.$5.indexOf(this.$7);
        this.$9.start = b;
        this.$9.end = b + 1;
      }
      this.$11 = d;
      this.$12 = [];
      this.$13 = [];
    }
    a.prototype.reset = function (a, b) {
      (this.$7 = a),
        (this.$8 = b),
        (this.$10 = 0),
        (this.$2 = null),
        (this.$3 = !0),
        (this.$5 = []),
        (this.$6 = []),
        (this.$9 = {}),
        (this.$12 = []),
        (this.$13 = []);
    };
    a.prototype.abandonRequest = function () {
      this.$1 && this.$1.abandon();
    };
    a.prototype.hasNext = function () {
      var a = this.$5.length - this.$9.end > 0;
      return this.$3 || a;
    };
    a.prototype.$14 = function (event, a, c) {
      var d = {};
      d[b('VideoChannelLoggerFields').EVENT] = event;
      d[b('VideoChannelLoggerFields').REQUEST_STATUS] = a;
      d[b('VideoChannelLoggerFields').PERF_TIME_MS] = Date.now() - c;
      g && (d[b('VideoChannelLoggerFields').VIDEO_CHANNEL_ID] = this.$8);
    };
    a.prototype.fetchFirstStory = function (a, c, d) {
      __p && __p();
      if (c === null && this.$5.length !== 0) {
        var e = this.$5.indexOf(this.$7);
        c = this.$6[e];
      }
      e = b('XVideoChannelViewStoryAsyncController')
        .getURIBuilder()
        .setEnum('caller', this.$4)
        .setStringVector('video_ids', [this.$7])
        .setString('root_video_id', this.$7)
        .setBool('is_first_story', !0)
        .setBool('use_video_placeholder', a)
        .setBool('setup_interactions', d)
        .setString('channel_id', this.$8)
        .setString('ad_impression_token', this.$11);
      c && e.setStringVector('feed_tracking_data', [JSON.stringify(c)]);
      var f = Date.now();
      a = new (b('AsyncRequest'))(e.getURI())
        .setAllowCrossPageTransition(!0)
        .setHandler(
          function () {
            __p && __p();
            this.$14(
              b('VideoChannelLoggerEvents').FETCH_FIRST_STORY,
              b('VideoChannelRequestStatus').SUCCEEDED,
              f
            );
            this.$15();
            if (g) {
              var a = Date.now(),
                d = b('XVideoChannelViewStoryAsyncController')
                  .getURIBuilder()
                  .setEnum('caller', this.$4)
                  .setStringVector('video_ids', [this.$7])
                  .setString('root_video_id', this.$7)
                  .setString('channel_id', this.$8)
                  .setBool('fetch_channel_pivots', !0);
              c && d.setStringVector('feed_tracking_data', [JSON.stringify(c)]);
              d = new (b('AsyncRequest'))(d.getURI())
                .setAllowCrossPageTransition(!0)
                .setHandler(
                  function () {
                    this.$14(
                      b('VideoChannelLoggerEvents').FETCH_CHANNEL_PIVOTS,
                      b('VideoChannelRequestStatus').SUCCEEDED,
                      a
                    ),
                      this.$15();
                  }.bind(this)
                )
                .setErrorHandler(
                  function () {
                    this.$14(
                      b('VideoChannelLoggerEvents').FETCH_CHANNEL_PIVOTS,
                      b('VideoChannelRequestStatus').FAILED,
                      a
                    ),
                      this.$15();
                  }.bind(this)
                )
                .setAbortHandler(
                  function () {
                    this.$14(
                      b('VideoChannelLoggerEvents').FETCH_CHANNEL_PIVOTS,
                      b('VideoChannelRequestStatus').ABORTED,
                      a
                    ),
                      this.$15();
                  }.bind(this)
                );
              this.$1 = d;
              this.$10 = Date.now();
              d.send();
            }
          }.bind(this)
        )
        .setErrorHandler(
          function () {
            this.$14(
              b('VideoChannelLoggerEvents').FETCH_FIRST_STORY,
              b('VideoChannelRequestStatus').FAILED,
              f
            ),
              this.$15();
          }.bind(this)
        )
        .setAbortHandler(
          function () {
            this.$14(
              b('VideoChannelLoggerEvents').FETCH_FIRST_STORY,
              b('VideoChannelRequestStatus').ABORTED,
              f
            ),
              this.$15();
          }.bind(this)
        );
      this.$1 = a;
      this.$10 = Date.now();
      a.send();
    };
    a.prototype.getPreloadedData = function () {
      return { stories: this.$12, thumbnails: this.$13 };
    };
    a.prototype.$16 = function (a, c) {
      __p && __p();
      if (!this.$8) return;
      a = b('XVideoChannelViewAsyncController')
        .getURIBuilder()
        .setString('id', this.$8)
        .setEnum('caller', this.$4)
        .setString('original_video_id', this.$7)
        .setInt('story_count', a);
      this.$2 && a.setString('cursor', this.$2.toString());
      var d = Date.now();
      a = a.getURI();
      a = new (b('AsyncRequest'))(a)
        .setAllowCrossPageTransition(!0)
        .setHandler(
          function (a) {
            this.$14(
              b('VideoChannelLoggerEvents').FETCH_STORIES_FROM_ENTQUERY,
              b('VideoChannelRequestStatus').SUCCEEDED,
              d
            ),
              (this.$2 = a.getPayload().cursor),
              (this.$3 = a.getPayload().hasNextPage),
              this.$15(),
              this.$17(
                a,
                function (a, b) {
                  this.$12 = [].concat(this.$12, a);
                  this.$13 = [].concat(this.$13, b);
                  return c(a, b);
                }.bind(this)
              );
          }.bind(this)
        )
        .setErrorHandler(
          function () {
            this.$14(
              b('VideoChannelLoggerEvents').FETCH_STORIES_FROM_ENTQUERY,
              b('VideoChannelRequestStatus').FAILED,
              d
            ),
              this.$15();
          }.bind(this)
        )
        .setAbortHandler(
          function () {
            this.$14(
              b('VideoChannelLoggerEvents').FETCH_STORIES_FROM_ENTQUERY,
              b('VideoChannelRequestStatus').ABORTED,
              d
            ),
              this.$15();
          }.bind(this)
        );
      this.$1 = a;
      a.send();
    };
    a.prototype.$18 = function (a, c, d) {
      __p && __p();
      var e = this.$9.end,
        f = this.$5.length - e,
        g = e + Math.min(f, a);
      if (f > 0) {
        var h = this.$5.slice(e, g);
        e = this.$6.slice(e, g).map(function (a) {
          return JSON.stringify(a);
        });
        h = b('XVideoChannelViewStoryAsyncController')
          .getURIBuilder()
          .setEnum('caller', this.$4)
          .setString('channel_id', this.$8)
          .setString('root_video_id', this.$7)
          .setStringVector('video_ids', h)
          .setStringVector('feed_tracking_data', e);
        var i = Date.now();
        this.$1 = new (b('AsyncRequest'))(h.getURI())
          .setAllowCrossPageTransition(!0)
          .setErrorHandler(
            function () {
              this.$14(
                b('VideoChannelLoggerEvents').FETCH_STORIES_FORWARD,
                b('VideoChannelRequestStatus').FAILED,
                i
              ),
                this.$15();
            }.bind(this)
          )
          .setAbortHandler(
            function () {
              this.$14(
                b('VideoChannelLoggerEvents').FETCH_STORIES_FORWARD,
                b('VideoChannelRequestStatus').ABORTED,
                i
              ),
                this.$15();
            }.bind(this)
          )
          .setHandler(
            function (a) {
              this.$14(
                b('VideoChannelLoggerEvents').FETCH_STORIES_FORWARD,
                b('VideoChannelRequestStatus').SUCCEEDED,
                i
              ),
                (this.$9.end = g),
                this.$15(),
                this.$17(
                  a,
                  function (a, b) {
                    this.$12 = [].concat(this.$12, a);
                    this.$13 = [].concat(this.$13, b);
                    return c(a, b);
                  }.bind(this)
                );
            }.bind(this)
          );
        this.$1.send();
        d && d(f);
      } else this.$3 && (this.$16(a, c), d && d(a));
    };
    a.prototype.$19 = function (a, c, d) {
      __p && __p();
      var e = this.$9.start;
      if (e > 0) {
        var f = Math.max(e - a, 0);
        a = this.$5.slice(f, e);
        var g = this.$6.slice(f, e).map(function (a) {
          return JSON.stringify(a);
        });
        a = b('XVideoChannelViewStoryAsyncController')
          .getURIBuilder()
          .setEnum('caller', this.$4)
          .setString('channel_id', this.$8)
          .setString('root_video_id', this.$7)
          .setStringVector('video_ids', a)
          .setStringVector('feed_tracking_data', g);
        var h = Date.now();
        this.$1 = new (b('AsyncRequest'))(a.getURI())
          .setAllowCrossPageTransition(!0)
          .setErrorHandler(
            function () {
              this.$14(
                b('VideoChannelLoggerEvents').FETCH_STORIES_BACKWARD,
                b('VideoChannelRequestStatus').FAILED,
                h
              ),
                this.$15();
            }.bind(this)
          )
          .setAbortHandler(
            function () {
              this.$14(
                b('VideoChannelLoggerEvents').FETCH_STORIES_BACKWARD,
                b('VideoChannelRequestStatus').ABORTED,
                h
              ),
                this.$15();
            }.bind(this)
          )
          .setHandler(
            function (a) {
              this.$14(
                b('VideoChannelLoggerEvents').FETCH_STORIES_BACKWARD,
                b('VideoChannelRequestStatus').SUCCEEDED,
                h
              ),
                (this.$9.start = f),
                this.$15(),
                this.$17(a, c);
            }.bind(this)
          );
        this.$1.send();
        d && d(e - f);
      }
    };
    a.prototype.fetchStories = function (a, c, d) {
      var e = b('VideoChannelViewVariables').defaultStoriesToLoad;
      if (this.$1) return;
      a ? this.$18(e, c, d) : this.$19(e, c, d);
    };
    a.prototype.$17 = function (a, c) {
      a = a.getPayload();
      var d = b('HTML').replaceJSONWrapper(a.stories).getNodes();
      a = a.thumbnails.map(function (a) {
        return b('HTML').replaceJSONWrapper(a).getRootNode();
      });
      c(d, a);
    };
    a.prototype.$15 = function () {
      this.$1 = null;
    };
    e.exports = a;
  },
  null
);
__d(
  'XLiveClipVideoInternalSubmitController',
  ['XController'],
  function (a, b, c, d, e, f) {
    e.exports = b('XController').create('/videos/clipping/submit/', {
      video_id: { type: 'Int', required: !0 },
      start_seconds: { type: 'Int' },
      end_seconds: { type: 'Int' },
    });
  },
  null
);
__d(
  'XLiveVideoClippingShareDialogController',
  ['XController'],
  function (a, b, c, d, e, f) {
    e.exports = b('XController').create('/live/clipping/share/dialog/', {
      video_id: { type: 'FBID', required: !0 },
    });
  },
  null
);
__d(
  'XLiveVideoClippingStatusController',
  ['XController'],
  function (a, b, c, d, e, f) {
    e.exports = b('XController').create('/videos/clipping/status/', {
      clip_id: { type: 'Int', required: !0 },
      encoding: { type: 'String', required: !0 },
    });
  },
  null
);
__d(
  'ClippingApi',
  [
    'regeneratorRuntime',
    'Promise',
    'AsyncRequest',
    'AsyncRequestUtil',
    'XLiveClipVideoInternalSubmitController',
    'XLiveVideoClippingShareDialogController',
    'XLiveVideoClippingStatusController',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    a.prototype.clipVideo = function (a, c, d) {
      __p && __p();
      var e, f, g, h, i, j, k;
      return b('regeneratorRuntime').async(
        function (l) {
          __p && __p();
          while (1)
            switch ((l.prev = l.next)) {
              case 0:
                c = Math.round(c);
                e = b('XLiveClipVideoInternalSubmitController')
                  .getURIBuilder()
                  .setInt('end_seconds', c)
                  .setInt('start_seconds', c - 30)
                  .setInt('video_id', a)
                  .getURI();
                l.next = 4;
                return b('regeneratorRuntime').awrap(
                  b('AsyncRequestUtil').send(
                    new (b('AsyncRequest'))(e).setMethod('POST')
                  )
                );
              case 4:
                (f = l.sent),
                  (g = f.payload.clipID),
                  (h = b('XLiveVideoClippingShareDialogController')
                    .getURIBuilder()
                    .setFBID('video_id', g.toString())
                    .getURI()),
                  (i = !1),
                  (j = b('XLiveVideoClippingStatusController')
                    .getURIBuilder()
                    .setInt('clip_id', g)
                    .setString('encoding', 'dash_live_md_frag_2_video')
                    .getURI());
              case 9:
                if (i) {
                  l.next = 18;
                  break;
                }
                l.next = 12;
                return b('regeneratorRuntime').awrap(this.$1(1e3));
              case 12:
                l.next = 14;
                return b('regeneratorRuntime').awrap(
                  b('AsyncRequestUtil').send(new (b('AsyncRequest'))(j))
                );
              case 14:
                k = l.sent;
                i = k.payload.ready;
                l.next = 9;
                break;
              case 18:
                new (b('AsyncRequest'))(h).setHandler(d).send();
              case 19:
              case 'end':
                return l.stop();
            }
        },
        null,
        this
      );
    };
    a.prototype.$1 = function (a) {
      return new (b('Promise'))(function (b) {
        return setTimeout(b, a);
      });
    };
    function a() {}
    e.exports = new a();
  },
  null
);
__d(
  'VideoScrollTracker',
  ['Scroll'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a) {
      (this.$2 = -1), (this.$3 = !1), (this.$4 = a);
    }
    a.prototype.$5 = function () {
      return this.$4 ? b('Scroll').getTop(this.$4) : null;
    };
    a.prototype.onScroll = function () {
      if (this.$3) {
        var a = this.$5();
        a !== null &&
          a !== undefined &&
          ((this.$1 = a < this.$2 ? 'up' : 'down'), this.$6(a));
      }
    };
    a.prototype.$6 = function (a) {
      this.$2 = a;
    };
    a.prototype.start = function () {
      this.$3 = !0;
      var a = this.$5();
      a !== null && a !== undefined && this.$6(a);
    };
    a.prototype.stop = function () {
      this.$3 = !1;
    };
    a.prototype.getLastScrollDirection = function () {
      return this.$1;
    };
    a.prototype.destroy = function () {
      this.stop(), (this.$4 = null);
    };
    e.exports = a;
  },
  null
);
__d(
  'VideoWithClickPlayPause',
  ['VideoPlayerReason', 'logVideosClickTracking'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a) {
      (this.$1 = a),
        (this.$2 = this.$1.getVideoNode()),
        this.$1.addListener('clickVideo', this.$3.bind(this)),
        this.$1.hasSeenClick() && this.$3();
    }
    a.prototype.$3 = function () {
      var a = this.$1.getOption(
        'CommercialBreakVideoAdOverlay',
        'videoController'
      );
      if (this.$1.isState('playing')) {
        if (
          this.$1.getOption('VideoWithLiveBroadcast', 'isLive') ||
          (a && a.getOption('VideoWithLiveBroadcast', 'isLive')) ||
          this.$4() ||
          this.$5()
        )
          return;
        this.$1.pause(b('VideoPlayerReason').USER);
      } else
        b('logVideosClickTracking')(this.$2),
          this.$1.play(b('VideoPlayerReason').USER);
    };
    a.prototype.$4 = function () {
      var a = this.$1.getOption(
        'CommercialBreakVideoAdOverlay',
        'videoController'
      );
      a = a && a.getOption('VideoWithInstreamVideo', 'controller');
      return a && !a.getConfig().canPauseAdBreak;
    };
    a.prototype.$5 = function () {
      return this.$1.getOption('VideoWithInstreamVideo', 'disableClickToPause');
    };
    e.exports = a;
  },
  null
);
__d(
  'AbstractVideoFullscreenControl.react',
  ['cx', 'AbstractButton.react', 'React', 'joinClasses'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h;
    c = b('React').PropTypes;
    d = babelHelpers.inherits(a, b('React').PureComponent);
    h = d && d.prototype;
    function a() {
      var a, b;
      for (var c = arguments.length, d = new Array(c), e = 0; e < c; e++)
        d[e] = arguments[e];
      return (
        (b = (a = h.constructor).call.apply(a, [this].concat(d))),
        (this.state = { awaitingUpdate: !1 }),
        (this.isFullscreen = function () {
          return this.state.awaitingUpdate
            ? this.state.isFullscreenOverride
            : !!this.props.isFullscreen;
        }.bind(this)),
        (this.onButtonClick = function () {
          this.props.onToggleFullscreen && this.props.onToggleFullscreen();
        }.bind(this)),
        b
      );
    }
    a.prototype.render = function () {
      var a = Object.assign({}, this.props);
      delete a.isFullscreen;
      delete a.onToggleFullscreen;
      return b('React').createElement(
        b('AbstractButton.react'),
        babelHelpers['extends']({}, a, {
          className: b('joinClasses')(
            this.props.isFullscreen ? 'uiContextualLayerParent' : '',
            this.props.className
          ),
          disabled: this.props.disabled,
          image: this.props.image,
          label: this.props.label,
          onClick: this.onButtonClick,
        })
      );
    };
    a.propTypes = {
      disabled: c.bool,
      image: c.element,
      isFullscreen: c.bool,
      onToggleFullscreen: c.func,
    };
    e.exports = a;
  },
  null
);
__d(
  'VideoAutoplayRule',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a) {
      (this.$1 = !0), (this.videoUnit = a);
    }
    a.prototype.calculateAutoplayScore = function () {
      throw new Error('Should be overridden');
    };
    a.prototype.enableRule = function () {
      this.$1 = !0;
    };
    a.prototype.disableRule = function () {
      this.$1 = !1;
    };
    a.prototype.isEnabled = function () {
      return this.$1;
    };
    e.exports = a;
  },
  null
);
__d(
  'DocumentFocusForMutedVideoAutoplayRule',
  ['VideoAutoplayRule'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g;
    c = babelHelpers.inherits(a, b('VideoAutoplayRule'));
    g = c && c.prototype;
    function a(a) {
      g.constructor.call(this, a);
    }
    a.prototype.calculateAutoplayScore = function () {
      return this.isEnabled()
        ? this.$DocumentFocusForMutedVideoAutoplayRule1()
        : 1;
    };
    a.prototype.$DocumentFocusForMutedVideoAutoplayRule1 = function () {
      var a = this.videoUnit.getVideoPlayerController();
      return a && a.isMuted() ? (document.hasFocus() ? 1 : 0) : 1;
    };
    e.exports = a;
  },
  null
);
__d(
  'VideoAutoplayControllerAbortLoadingHelper',
  [
    'invariant',
    'VideoPlayerAbortLoadingExperiment',
    'VideoPlayerExperiments',
    'VideoPlayerLoggerSource',
    'VideoPlayerShakaGlobalConfig',
    'getViewportDimensions',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    function h() {
      (this.$1 = new Set()), (this.$2 = new Map());
    }
    h.prototype.maybeAbortLoading = function () {
      __p && __p();
      for (
        var a = this.$1,
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
        var f = b('VideoPlayerShakaGlobalConfig').getString(
            'defer_which_video_to_abort_loading_decisioning_logic',
            'all'
          ),
          i = e.getVideoPlayerController();
        i = i ? i.isLiveVideo() : null;
        if (i !== null && ((f === 'vod' && i) || (f === 'live' && !i)))
          continue;
        if (
          !e.isState('playing') &&
          typeof e.abortLoading === 'function' &&
          h.shouldAbortLoadingVideoUnit(e)
        )
          b('VideoPlayerExperiments').abortLoadingHelperNegativeYAbortLoading
            ? this.$3(e)
            : this.$4(e);
        else if (
          b('VideoPlayerExperiments').abortLoadingHelperNegativeYAbortLoading &&
          e.isState('playing')
        ) {
          f = this.$2.get(e);
          !f && g(0, undefined);
          f && f.abortedLoading && (f.abortedLoading = !1);
        }
      }
    };
    h.prototype.$3 = function (a) {
      if (b('VideoPlayerExperiments').abortLoadingHelperBoundedReloading) {
        var c = b('getViewportDimensions')().height / -2;
        a.getDistanceToViewport() <
          b('VideoPlayerExperiments').abortedLoadingPixelBoundary + c &&
        !a.isVisible()
          ? this.$5(a)
          : a.getDistanceToViewport() >
              b('VideoPlayerExperiments').reloadingPixelBoundary + c &&
            this.$6(a);
      } else a.getDistanceToViewport() < 0 && !a.isVisible() && this.$5(a);
    };
    h.prototype.addVideoUnit = function (a) {
      this.$1.has(a) ||
        (this.$1.add(a),
        this.$2.set(a, {
          y: a.getDistanceToViewport(),
          timestamp: new Date().valueOf(),
          v: 0,
          abortedLoading: !1,
        }));
    };
    h.prototype.removeVideoUnit = function (a) {
      this.$1['delete'](a), this.$2['delete'](a);
    };
    h.prototype.calculateFutureScrollPosition = function (a) {
      var b = a.y1 - a.y0,
        c = a.t1 - a.t0;
      b = b / c;
      var d = b - a.v0;
      d = d / c;
      c = a.t;
      c = (d * c * c) / 2 + c * b + a.y1;
      return { v1: b, a: d, S: c };
    };
    h.prototype.preloadClosestVideoUnits = function (a) {
      this.$7(a).forEach(
        function (a) {
          return this.$6(a);
        }.bind(this)
      );
    };
    h.prototype.$7 = function (a) {
      return Array.from(this.$1)
        .filter(function (a) {
          return a.getDistanceToViewport() >= 0;
        })
        .sort(function (a, b) {
          return a.getDistanceToViewport() - b.getDistanceToViewport();
        })
        .slice(0, a);
    };
    h.prototype.$6 = function (a) {
      var b = this.$2.get(a);
      !b && g(0, undefined);
      var c;
      b && ((c = b.abortedLoading), (b.abortedLoading = !1));
      c && typeof a.preload === 'function' && a.preload();
    };
    h.prototype.$5 = function (a) {
      var b = this.$2.get(a);
      !b && g(0, undefined);
      var c;
      b && ((c = b.abortedLoading), (b.abortedLoading = !0));
      !c && typeof a.abortLoading === 'function' && a.abortLoading();
    };
    h.prototype.$4 = function (a) {
      __p && __p();
      var c = b('getViewportDimensions')().height,
        d = 1600;
      c = c / 2;
      var e = c + d;
      c = -c;
      c = c - d;
      d = this.$2.get(a);
      !d && g(0, undefined);
      if (!d) return;
      var f = a.getDistanceToViewport(),
        h = d.y;
      d.y = f;
      var i = new Date().valueOf(),
        j = d.timestamp;
      d.timestamp = i;
      var k = d.v;
      if (c <= f && e >= f) {
        d.abortedLoading && this.$6(a);
        return;
      }
      var l = 500;
      h = this.calculateFutureScrollPosition({
        y0: h,
        y1: f,
        t0: j,
        t1: i,
        v0: k,
        t: l,
      });
      d.v = h.v1;
      j = h.S;
      d.abortedLoading
        ? ((f < c && j > c) || (f > e && j < e)) && this.$6(a)
        : this.$5(a);
    };
    h.prototype.$8 = function (a) {
      a = a.getVideoPlayerController();
      return a ? a.getVideoPlayerID() : null;
    };
    h.shouldAbortLoadingVideoUnit = function (a) {
      var c = b('VideoPlayerShakaGlobalConfig').getBool(
          'abort_loading_decisioning_logic',
          !1
        ),
        d = !c,
        e = !0;
      if (a) {
        typeof a.getIsInChannel === 'function' && (e = a.getIsInChannel());
        typeof a.getSource === 'function' &&
          c &&
          (d = a.getSource() === b('VideoPlayerLoggerSource').TAHOE);
        return b('VideoPlayerAbortLoadingExperiment').canAbort && !e && !d;
      }
      return !1;
    };
    e.exports = h;
  },
  null
);
__d(
  'VideoAutoplayControllerBase',
  [
    'Arbiter',
    'DesktopHscrollUnitEventConstants',
    'Event',
    'SubscriptionsHandler',
    'VideoAutoplayControllerAbortLoadingHelper',
    'VideoPlayerExperiments',
    'VideoPlayerReason',
    'VideoPlayerShakaGlobalConfig',
    'VideoScrollTracker',
    'Visibility',
    'clearTimeout',
    'debounce',
    'destroyOnUnload',
    'emptyFunction',
    'setTimeout',
    'throttle',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = b('VideoPlayerShakaGlobalConfig').getNumber(
      'abort_loading_delay',
      3e3
    );
    function h(a, b) {
      var c = [];
      return function () {
        var d = Date.now();
        c.unshift(d);
        var e = 0;
        while (c[++e] + b > d);
        c = c.slice(0, e);
        return c.length <= a;
      };
    }
    function i(a, c, d) {
      __p && __p();
      var e = null;
      return function () {
        __p && __p();
        for (var f = arguments.length, g = new Array(f), h = 0; h < f; h++)
          g[h] = arguments[h];
        if (c()) {
          a.apply(undefined, g);
          return b('emptyFunction').thatReturnsFalse;
        } else if (!e) {
          var i = b('setTimeout')(function () {
            (e = null), a.apply(undefined, g);
          }, d);
          e = function () {
            if (!e) return !1;
            b('clearTimeout')(i);
            e = null;
            return !0;
          };
        }
        return e;
      };
    }
    function a(a) {
      (this.$8 = b('emptyFunction')),
        (this.$9 = b('emptyFunction')),
        (this.$3 = null),
        (this.$2 = null),
        (this.$10 = []),
        (this.$1 = a),
        (this.$4 = null),
        (this.$5 = new (b('SubscriptionsHandler'))()),
        b('VideoPlayerShakaGlobalConfig').getBool(
          'autoplay_controller_use_video_scroll_tracker',
          !1
        ) &&
          ((this.$11 = new (b('VideoScrollTracker'))(document.body)),
          this.$11.start()),
        b('destroyOnUnload')(
          function () {
            (this.$10 = []),
              (this.$3 = null),
              this.$4 && (this.$4.remove(), (this.$4 = null)),
              this.$5.release(),
              this.$11 && this.$11.destroy();
          }.bind(this)
        ),
        b('VideoPlayerExperiments').autoplayMaxCallsPerWindow &&
          (this.$6 = i(
            function (a) {
              var b = this.$3;
              b && b.playWithoutUnmute(a);
            }.bind(this),
            h(
              b('VideoPlayerExperiments').autoplayMaxCallsPerWindow,
              b('VideoPlayerExperiments').autoplayThrottleWindow
            ),
            b('VideoPlayerExperiments').autoplayThrottleDelay
          )),
        (this.$7 = b('emptyFunction').thatReturnsFalse);
    }
    a.prototype.getVideoUnits = function () {
      return this.$10;
    };
    a.prototype.setVideoUnits = function (a) {
      this.$10 = a;
    };
    a.prototype.addVideoUnit = function (a) {
      this.$10.push(a);
    };
    a.prototype.removeVideoUnit = function (a) {
      var b = this.$10.findIndex(function (b) {
        return b === a;
      });
      b > -1 && this.$10.splice(b, 1);
    };
    a.prototype.getPlayingVideoUnit = function () {
      return this.$3;
    };
    a.prototype.setPlayingVideoUnit = function (a) {
      (this.$3 = a), this.$3 && this.setupPlayingVideoUnitSubscriptions();
    };
    a.prototype.playVideo = function (a, c) {
      __p && __p();
      if (
        b('VideoPlayerExperiments').disableAutoplayForInactiveTab &&
        b('Visibility').isHidden()
      ) {
        if (b('VideoPlayerExperiments').removeHiddenVideoTracking) {
          this.setPlayingVideoUnit(null);
          return;
        }
        this.$2 = a;
        return;
      }
      this.setPlayingVideoUnit(a);
      if (this.$3) {
        a = this.$6;
        a ? (this.$7 = a.call(this, c)) : this.$3.playWithoutUnmute(c);
      }
    };
    a.prototype.setupPlayingVideoUnitSubscriptions = function () {
      throw new Error('Should be overridden');
    };
    a.prototype.addSubscriberVideoUnit = function () {
      this.getVideoUnits().length ||
        (this.$5.addSubscriptions(
          b('Event').listen(window, 'resize', this.updateAutoplay.bind(this)),
          b('Event').listen(window, 'blur', this.$12.bind(this)),
          b('Event').listen(window, 'focus', this.$13.bind(this)),
          b('Visibility').addListener(
            b('Visibility').HIDDEN,
            this.$12.bind(this)
          ),
          b('Visibility').addListener(
            b('Visibility').VISIBLE,
            this.$13.bind(this)
          ),
          b('Arbiter').subscribe(
            b('DesktopHscrollUnitEventConstants').HSCROLL_ITEM_SHOWN_EVENT,
            this.updateAutoplay.bind(this)
          )
        ),
        this.$14() || this.$15());
    };
    a.prototype.$12 = function () {
      b('VideoPlayerExperiments').removeHiddenVideoTracking
        ? this.$16(b('VideoPlayerReason').PAGE_VISIBILITY)
        : this.$2 ||
          ((this.$2 = this.getPlayingVideoUnit()),
          this.$16(b('VideoPlayerReason').PAGE_VISIBILITY));
    };
    a.prototype.$13 = function () {
      b('VideoPlayerExperiments').removeHiddenVideoTracking
        ? this.updateAutoplay()
        : this.$2 &&
          (this.playVideo(this.$2, b('VideoPlayerReason').PAGE_VISIBILITY),
          (this.$2 = null));
    };
    a.prototype.$15 = function () {
      __p && __p();
      var a = function () {
        this.$11 && this.$11.onScroll(), this.updateAutoplay();
      }.bind(this);
      this.$4 && this.$4.remove();
      this.$8 = b('throttle')(a, this.$1);
      this.$9 = b('debounce')(
        function () {
          return this.updateAutoplay();
        }.bind(this),
        this.$1
      );
      var c = b('VideoPlayerShakaGlobalConfig').getBool(
        'autoplay_use_unthrottled_scroll_handler',
        !1
      )
        ? function () {
            return a();
          }
        : function () {
            this.$8(),
              b('VideoPlayerExperiments').useDebouncedScroll && this.$9();
          }.bind(this);
      this.$4 = b('Event').listen(window, 'scroll', c);
    };
    a.prototype.$14 = function () {
      return !!this.$4;
    };
    a.prototype.getClosestVideoUnits = function (a) {
      return this.$10
        .filter(function (a) {
          return a.getDistanceToViewport() >= 0;
        })
        .sort(function (a, b) {
          return a.getDistanceToViewport() - b.getDistanceToViewport();
        })
        .slice(0, a);
    };
    a.prototype.getVisibleUnits = function () {
      var a = [];
      this.$10.forEach(function (b) {
        var c = b.getVideoPlayerController();
        b.isVisible()
          ? (a.push(b),
            b.wasVisible ||
              ((b.wasVisible = !0),
              b.logDisplayed(),
              c && c.emit('becomeVisible')))
          : b.wasVisible &&
            (c && c.emit('becomeInvisible'), (b.wasVisible = !1));
      });
      return a;
    };
    a.prototype.$17 = function (a) {
      var c = b('VideoPlayerShakaGlobalConfig').getString(
          'defer_which_video_to_abort_loading_decisioning_logic',
          'all'
        ),
        d = a.getVideoPlayerController();
      d = d ? d.isLiveVideo() : null;
      return d !== null && ((c === 'vod' && d) || (c === 'live' && !d))
        ? !1
        : b(
            'VideoAutoplayControllerAbortLoadingHelper'
          ).shouldAbortLoadingVideoUnit(a);
    };
    a.prototype.pausePlayingVideo = function (a, c) {
      __p && __p();
      var d = this.$3;
      if (d) {
        var e = function a() {
          if (!d.isState('playing')) {
            if (
              b('VideoPlayerExperiments').abortLoadingReUpStillVisibleVideos &&
              d.isVisible()
            ) {
              b('setTimeout')(a, g);
              return;
            }
            typeof d.abortLoading === 'function' && d.abortLoading();
          }
        };
        this.$7() || d.pause(a);
        b('VideoPlayerExperiments').decoupleAbortLoadingFromPause ||
          (this.$17(d) && !c && b('setTimeout')(e, g));
        this.$3 = null;
      }
    };
    a.prototype.$16 = function (a) {
      this.pausePlayingVideo(a, !0);
    };
    a.prototype.updateAutoplay = function () {
      throw new Error('Should be overridden');
    };
    e.exports = a;
  },
  null
);
__d(
  'Network',
  ['mixInEventEmitter'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = !0,
      h = a.navigator.connection,
      i = { 0: 'unknown', 1: 'ethernet', 2: 'wifi', 3: '2g', 4: '3g' };
    function c() {
      return g;
    }
    function d(a) {
      if (a == g) return;
      g = a;
      l.emit(a ? 'online' : 'offline');
    }
    function f() {
      return h ? h.bandwidth : g ? Infinity : 0;
    }
    function j() {
      return h ? h.metered : !1;
    }
    function k() {
      var a = h ? String(h.type) : '0';
      return i[a] || a;
    }
    var l = {
      getBandwidth: f,
      getType: k,
      isMetered: j,
      isOnline: c,
      setOnline: d,
    };
    b('mixInEventEmitter')(l, { online: !0, offline: !0 });
    a.addEventListener
      ? (a.addEventListener('online', d.bind(null, !0)),
        a.addEventListener('offline', d.bind(null, !1)))
      : a.attachEvent &&
        (a.attachEvent('online', d.bind(null, !0)),
        a.attachEvent('offline', d.bind(null, !1)));
    e.exports = l;
  },
  null
);
__d(
  'XVideoAutoplayNuxAsyncController',
  ['XController'],
  function (a, b, c, d, e, f) {
    e.exports = b('XController').create('/video/autoplay/nux/', {});
  },
  null
);
__d(
  'XVideoAutoplayNuxDismissAsyncController',
  ['XController'],
  function (a, b, c, d, e, f) {
    e.exports = b('XController').create('/video/autoplay/nux/dismiss/', {});
  },
  null
);
__d(
  'XVideoAutoplayNuxLogViewAsyncController',
  ['XController'],
  function (a, b, c, d, e, f) {
    e.exports = b('XController').create('/video/autoplay/nux/log/view/', {});
  },
  null
);
__d(
  'cancelAnimationFramePolyfill',
  [],
  function (a, b, c, d, e, f) {
    b =
      a.__fbNativeCancelAnimationFrame ||
      a.cancelAnimationFrame ||
      a.webkitCancelAnimationFrame ||
      a.mozCancelAnimationFrame ||
      a.oCancelAnimationFrame ||
      a.msCancelAnimationFrame ||
      a.clearTimeout;
    e.exports = b;
  },
  null
);
__d(
  'cancelAnimationFrame',
  [
    'Env',
    'TimerStorage',
    'TimeSlice',
    'cancelAnimationFramePolyfill',
    'requestAnimationFrameAcrossTransitions',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = b('TimerStorage').ANIMATION_FRAME;
    function a(a) {
      if (a != null)
        if (b('Env').gk_raf_flush)
          b('requestAnimationFrameAcrossTransitions').cancelVirtualRAF(a);
        else {
          b('TimerStorage').unset(g, a);
          var c = g + String(a);
          b('TimeSlice').cancelWithToken(c);
        }
      b('cancelAnimationFramePolyfill')(a);
    }
    e.exports = a;
  },
  null
);
__d(
  'requestBoundedAnimationFrame',
  [
    'cancelAnimationFrame',
    'clearTimeout',
    'performanceNow',
    'requestAnimationFrame',
    'setTimeout',
  ],
  function (a, b, c, d, e, f) {
    a = function (a, c, d) {
      var e = b('setTimeout')(function () {
          (e = null),
            f !== null && b('cancelAnimationFrame')(f),
            a(b('performanceNow')());
        }, d),
        f = b('requestAnimationFrame')(function (c) {
          (f = null), e !== null && b('clearTimeout')(e), a(c);
        }, c);
      return function () {
        f !== null && (b('cancelAnimationFrame')(f), (f = null)),
          e !== null && (b('clearTimeout')(e), (e = null));
      };
    };
    e.exports = a;
  },
  null
);
__d(
  'VideoAutoplayControllerX',
  [
    'csx',
    'AsyncRequest',
    'DocumentFocusForMutedVideoAutoplayRule',
    'DOM',
    'Event',
    'Network',
    'Run',
    'SubscriptionsHandler',
    'VideoAutoplayControllerAbortLoadingHelper',
    'VideoAutoplayControllerBase',
    'VideoPlayerExperiments',
    'VideoPlayerPreloadExperiment',
    'VideoPlayerReason',
    'VideoPlayerShakaGlobalConfig',
    'XVideoAutoplayNuxAsyncController',
    'XVideoAutoplayNuxDismissAsyncController',
    'XVideoAutoplayNuxLogViewAsyncController',
    'clearTimeout',
    'destroyOnUnload',
    'getViewportDimensions',
    'performance',
    'requestBoundedAnimationFrame',
    'requestIdleCallback',
    'setTimeout',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h,
      i = null,
      j = b('VideoPlayerExperiments').videoPollingFrequency,
      k = !1;
    function l() {
      return !b('VideoPlayerExperiments').delayAutoplayUntilAfterLoad || k;
    }
    a = babelHelpers.inherits(m, b('VideoAutoplayControllerBase'));
    h = a && a.prototype;
    function m() {
      __p && __p();
      h.constructor.call(this, j);
      this.$VideoAutoplayControllerX4 = !1;
      this.$VideoAutoplayControllerX5 = !1;
      this.$VideoAutoplayControllerX6 = 0;
      this.$VideoAutoplayControllerX17 = new (b(
        'VideoAutoplayControllerAbortLoadingHelper'
      ))();
      this.$VideoAutoplayControllerX10 = new (b('SubscriptionsHandler'))();
      this.$VideoAutoplayControllerX18 = new (b('SubscriptionsHandler'))();
      this.$VideoAutoplayControllerX12 = !0;
      this.$VideoAutoplayControllerX9 = !0;
      this.$VideoAutoplayControllerX13 = !0;
      this.$VideoAutoplayControllerX2 = null;
      this.$VideoAutoplayControllerX1 = null;
      this.$VideoAutoplayControllerX14 = !1;
      this.$VideoAutoplayControllerX3 = null;
      this.$VideoAutoplayControllerX7 = !1;
      this.$VideoAutoplayControllerX16 = !1;
      this.$VideoAutoplayControllerX15 = !1;
      var a = b('XVideoAutoplayNuxAsyncController').getURIBuilder().getURI();
      new (b('AsyncRequest'))(a).setAllowCrossPageTransition().send();
      b('destroyOnUnload')(
        function () {
          this.$VideoAutoplayControllerX19(),
            b('VideoPlayerExperiments').disableAutoplayOnHomePgUpPgDownEnd &&
              (this.$VideoAutoplayControllerX11 &&
                b('clearTimeout')(this.$VideoAutoplayControllerX11),
              this.$VideoAutoplayControllerX8.remove()),
            this === i && (i = null);
        }.bind(this)
      );
      b('Run').onAfterLoad(
        function () {
          (k = !0),
            b('VideoPlayerExperiments').delayAutoplayUntilAfterLoad &&
              i &&
              i.updateAutoplay(),
            document.hasFocus() || b('Event').fire(window, 'blur'),
            b('VideoPlayerExperiments').disableAutoplayOnHomePgUpPgDownEnd &&
              this.$VideoAutoplayControllerX20();
        }.bind(this)
      );
      b('VideoPlayerShakaGlobalConfig').getBool(
        'use_two_frequency_update_autoplay',
        !1
      ) && this.$VideoAutoplayControllerX21(Date.now());
    }
    m.$VideoAutoplayControllerX22 = function (a) {
      return b('VideoPlayerExperiments').fixVPCCallBeforeLoaded
        ? !(a.isState('fallback') || a.isState('loading'))
        : !0;
    };
    m.prototype.$VideoAutoplayControllerX20 = function () {
      __p && __p();
      var a = 33,
        c = 34,
        d = 35,
        e = 36;
      this.$VideoAutoplayControllerX11 = null;
      var f = function () {
        this.$VideoAutoplayControllerX23(this.$VideoAutoplayControllerX9),
          b('clearTimeout')(this.$VideoAutoplayControllerX11),
          (this.$VideoAutoplayControllerX11 = null);
      }.bind(this);
      this.$VideoAutoplayControllerX8 = b('Event').listen(
        document.body,
        'keydown',
        function (g) {
          var h = -1;
          switch (g.keyCode) {
            case a:
            case c:
              h = b(
                'VideoPlayerExperiments'
              ).pressPgUpPgDownAutoplayShutoffInterval;
              break;
            case d:
            case e:
              h = b(
                'VideoPlayerExperiments'
              ).pressHomeEndAutoplayShutoffInterval;
              break;
            default:
              break;
          }
          h > -1 &&
            (this.$VideoAutoplayControllerX11
              ? (b('clearTimeout')(this.$VideoAutoplayControllerX11),
                (this.$VideoAutoplayControllerX11 = b('setTimeout')(f, h)))
              : this.$VideoAutoplayControllerX12 &&
                (this.$VideoAutoplayControllerX23(!1),
                (this.$VideoAutoplayControllerX11 = b('setTimeout')(f, h))));
        }.bind(this)
      );
    };
    m.prototype.$VideoAutoplayControllerX23 = function (a) {
      (this.$VideoAutoplayControllerX12 = a), this.updateAutoplay();
    };
    m.registerVideoUnit = function (a) {
      __p && __p();
      i == null && (i = new m());
      i.addSubscriberVideoUnit();
      i.registerDefaultAutoplayRules(a);
      i.addVideoUnit(a);
      var c = new (b('SubscriptionsHandler'))();
      c.addSubscriptions.apply(c, i.$VideoAutoplayControllerX24(a));
      i.$VideoAutoplayControllerX25();
      a.isVisible() && l() && i.updateAutoplay();
      i.shouldRestoreAllSubsequentStreamBufferSizes() &&
        i.restoreStreamBufferSize();
      return function () {
        i && i.removeVideoUnit(a),
          c.release(),
          i &&
            a === i.getPlayingVideoUnit() &&
            (i.$VideoAutoplayControllerX18.release(),
            i.setPlayingVideoUnit(null));
      };
    };
    m.setShouldAutoplay = function (a) {
      i == null && (i = new m()),
        (i.$VideoAutoplayControllerX12 = a),
        (i.$VideoAutoplayControllerX13 = a),
        (i.$VideoAutoplayControllerX9 = a),
        i.updateAutoplay();
    };
    m.prototype.$VideoAutoplayControllerX19 = function () {
      this.$VideoAutoplayControllerX10.release(),
        this.$VideoAutoplayControllerX18.release();
    };
    m.setAutoplayNux = function (a, c) {
      __p && __p();
      var d = i;
      if (!d) return;
      d.$VideoAutoplayControllerX2 = a;
      d.$VideoAutoplayControllerX1 = c;
      d.$VideoAutoplayControllerX14 = !0;
      a = b('DOM').find(c.getContentRoot(), '._5cqr');
      b('Event').listen(a, 'click', function () {
        d.$VideoAutoplayControllerX26();
      });
      a = b('DOM').scry(c.getContentRoot(), '._36gl')[0];
      a &&
        b('Event').listen(a, 'click', function () {
          d.$VideoAutoplayControllerX26();
        });
    };
    m.prototype.$VideoAutoplayControllerX26 = function () {
      this.$VideoAutoplayControllerX1 && this.$VideoAutoplayControllerX1.hide();
      this.$VideoAutoplayControllerX14 = !1;
      var a = b('XVideoAutoplayNuxDismissAsyncController')
        .getURIBuilder()
        .getURI();
      new (b('AsyncRequest'))(a).setAllowCrossPageTransition().send();
    };
    m.prototype.registerDefaultAutoplayRules = function (a) {
      b('VideoPlayerExperiments').useBringYourOwnAutoplayRule &&
        b('VideoPlayerExperiments').pauseMutedIfNoDocumentFocus &&
        a.registerAutoplayRule(
          new (b('DocumentFocusForMutedVideoAutoplayRule'))(a)
        );
    };
    m.prototype.setupPlayingVideoUnitSubscriptions = function () {
      __p && __p();
      var a = this.getPlayingVideoUnit();
      if (!a) return;
      a.addListener &&
        (this.$VideoAutoplayControllerX10.release(),
        this.$VideoAutoplayControllerX10.engage(),
        a.isLooping() ||
          this.$VideoAutoplayControllerX10.addSubscriptions(
            a.addListener(
              'finishPlayback',
              function () {
                this.setPlayingVideoUnit(null);
              }.bind(this)
            )
          ),
        this.$VideoAutoplayControllerX10.addSubscriptions(
          a.addListener(
            'turnOffAutoplay',
            function () {
              this.setPlayingVideoUnit(null);
            }.bind(this)
          ),
          a.addListener(
            'pausePlayback',
            function () {
              this.$VideoAutoplayControllerX25();
            }.bind(this)
          ),
          a.addListener(
            'finishPlayback',
            function () {
              this.$VideoAutoplayControllerX25();
            }.bind(this)
          ),
          b('Network').addListener(
            'online',
            function () {
              this.$VideoAutoplayControllerX25();
            }.bind(this)
          ),
          b('Network').addListener(
            'offline',
            function () {
              this.$VideoAutoplayControllerX25();
            }.bind(this)
          )
        ));
    };
    m.prototype.$VideoAutoplayControllerX25 = function () {
      __p && __p();
      if (b('VideoPlayerExperiments').webVideosBlockAutoplayWhenOffline)
        if (b('Network').isOnline())
          this.$VideoAutoplayControllerX12 = this.$VideoAutoplayControllerX13;
        else {
          this.$VideoAutoplayControllerX13 = this.$VideoAutoplayControllerX12;
          this.$VideoAutoplayControllerX12 = !1;
          return;
        }
      var a = this.getVideoUnits();
      for (var c = 0; c < a.length; c++) {
        var d = a[c].getVideoPlayerController();
        d &&
          (d.getDataInsertionPosition() === '0' &&
            ((this.$VideoAutoplayControllerX7 = !0),
            this.$VideoAutoplayControllerX16 === !1 &&
              (m.$VideoAutoplayControllerX22(d) && d.restoreStreamBufferSize(),
              d.once(
                'beginPlayback',
                function () {
                  (this.$VideoAutoplayControllerX15 = !0),
                    this.restoreStreamBufferSize();
                }.bind(this)
              ),
              (this.$VideoAutoplayControllerX16 = !0))),
          b('VideoPlayerExperiments').autoplayBlockBlacklist ||
            d.updateAutoplayRestrained());
      }
      this.$VideoAutoplayControllerX7 || this.restoreStreamBufferSize();
    };
    m.prototype.shouldRestoreAllSubsequentStreamBufferSizes = function () {
      return !this.$VideoAutoplayControllerX7
        ? !0
        : this.$VideoAutoplayControllerX15;
    };
    m.prototype.restoreStreamBufferSize = function () {
      var a = this.getVideoUnits();
      for (var b = 0; b < a.length; b++) {
        var c = a[b].getVideoPlayerController();
        c && m.$VideoAutoplayControllerX22(c) && c.restoreStreamBufferSize();
      }
    };
    m.prototype.$VideoAutoplayControllerX24 = function (a) {
      __p && __p();
      var c;
      if (!a.addListener) return [];
      var d = function () {
        __p && __p();
        if (!a.isMuted() && a.isState('playing')) {
          var c = this.$VideoAutoplayControllerX3;
          if (c && c !== a) {
            var d = c.getVideoPlayerController();
            if (d) {
              var e = d.getOption('VideoWithLiveBroadcast', 'isLive');
              e ? d.mute() : d.pause(b('VideoPlayerReason').USER);
            }
            try {
              c.pause(b('VideoPlayerReason').USER);
            } catch (a) {}
          }
          this.$VideoAutoplayControllerX3 = a;
        }
      }.bind(this);
      d = [
        a.addListener('beginPlayback', d),
        a.addListener('changeVolume', d),
        a.addListener('unmuteVideo', d),
      ];
      (c = this.$VideoAutoplayControllerX18).addSubscriptions.apply(c, d);
      return d;
    };
    m.prototype.$VideoAutoplayControllerX27 = function (a) {
      __p && __p();
      var c = a.length,
        d = null;
      if (c === 1)
        (d = a[0]),
          (d = d.isAutoplayable() ? d : null),
          b('VideoPlayerExperiments').useBringYourOwnAutoplayRule &&
            d &&
            (d = this.$VideoAutoplayControllerX28(d) ? d : null);
      else if (c > 1) {
        var e = b('getViewportDimensions')().height / 2;
        a.forEach(
          function (a) {
            if (!a.isAutoplayable()) return;
            if (
              b('VideoPlayerExperiments').useBringYourOwnAutoplayRule &&
              !this.$VideoAutoplayControllerX28(a)
            )
              return;
            var c = a.getDOMPosition();
            c = c.y + c.height / 2;
            c = Math.abs(c - e);
            a.playPriority = c;
            (!d || !d.playPriority || a.playPriority < d.playPriority) &&
              (d = a);
          }.bind(this)
        );
      }
      return d;
    };
    m.prototype.$VideoAutoplayControllerX28 = function (a) {
      var b = !0;
      a = a.getAutoplayRules();
      for (var c = 0; c < a.length; ++c) {
        var d = a[c].calculateAutoplayScore();
        b = d !== 0;
        if (!b) break;
      }
      return b;
    };
    m.prototype.showAutoplayNUX = function (a) {
      __p && __p();
      var c = this.$VideoAutoplayControllerX1;
      if (c && !c.isShown()) {
        a = a.getVideoPlayerController();
        a = a ? a.getRootNode() : null;
        b('DOM').prependContent(a, this.$VideoAutoplayControllerX2);
        c.show();
        a = b('XVideoAutoplayNuxLogViewAsyncController')
          .getURIBuilder()
          .getURI();
        new (b('AsyncRequest'))(a).setAllowCrossPageTransition().send();
      }
      this.$VideoAutoplayControllerX14 = !1;
    };
    m.prototype.addVideoUnit = function (a) {
      a && h.addVideoUnit.call(this, a),
        b('VideoPlayerExperiments').decoupleAbortLoadingFromPause &&
          a &&
          this.$VideoAutoplayControllerX17.addVideoUnit(a);
    };
    m.prototype.removeVideoUnit = function (a) {
      a && h.removeVideoUnit.call(this, a),
        b('VideoPlayerExperiments').decoupleAbortLoadingFromPause &&
          a &&
          this.$VideoAutoplayControllerX17.removeVideoUnit(a);
    };
    m.prototype.$VideoAutoplayControllerX21 = function (a) {
      __p && __p();
      var c = b('VideoPlayerShakaGlobalConfig').getNumber(
        'request_bounded_animation_frame_bound',
        50
      );
      this.$VideoAutoplayControllerX29();
      if (b('VideoPlayerShakaGlobalConfig').getBool('use_ric_cycle', !1)) {
        a = b('VideoPlayerShakaGlobalConfig').getNumber(
          'ric_autoplay_bound',
          50
        );
        var d = b('VideoPlayerShakaGlobalConfig').getBool('use_native_ric', !1);
        d = d ? window.requestIdleCallback : b('requestIdleCallback');
        return d(
          function () {
            this.$VideoAutoplayControllerX21(b('performance').now());
          }.bind(this),
          { timeout: a }
        );
      }
      b('VideoPlayerShakaGlobalConfig').getBool(
        'update_autoplay_lower_raf_cycle',
        !1
      )
        ? b('setTimeout')(
            function () {
              b('VideoPlayerShakaGlobalConfig').getBool(
                'update_autoplay_no_raf',
                !1
              )
                ? this.$VideoAutoplayControllerX21(b('performance').now())
                : b('requestBoundedAnimationFrame')(
                    function (a) {
                      this.$VideoAutoplayControllerX21(a);
                    }.bind(this),
                    { priority: 1 },
                    c
                  );
            }.bind(this),
            j
          )
        : b('requestBoundedAnimationFrame')(
            function (a) {
              this.$VideoAutoplayControllerX21(a);
            }.bind(this),
            { priority: 1 },
            c
          );
    };
    m.prototype.$VideoAutoplayControllerX29 = function () {
      __p && __p();
      var a = this.$VideoAutoplayControllerX3,
        c = Date.now(),
        d = c - this.$VideoAutoplayControllerX6,
        e = b('VideoPlayerShakaGlobalConfig').getNumber(
          'autoplay_start_video_interval',
          200
        );
      if (
        b('VideoPlayerShakaGlobalConfig').getBool(
          'update_autoplay_no_high_frequency_ops',
          !1
        ) &&
        d < e
      )
        return;
      this.$VideoAutoplayControllerX4 &&
        b('VideoPlayerExperiments').pauseAudioUnitsOffscreen &&
        a &&
        a.shouldPauseWhenScrolledOffscreen() &&
        !a.isVisible() &&
        a.pause(b('VideoPlayerReason').AUTOPLAY);
      if (!this.$VideoAutoplayControllerX12) {
        this.pausePlayingVideo(b('VideoPlayerReason').AUTOPLAY);
        return;
      }
      a = this.getVideoUnits();
      var f = this.getPlayingVideoUnit(),
        g = this.$VideoAutoplayControllerX4 ? null : f;
      this.$VideoAutoplayControllerX4 &&
        f &&
        f.isVisible() &&
        (g = this.$VideoAutoplayControllerX27([f]));
      f && f !== g && this.pausePlayingVideo(b('VideoPlayerReason').AUTOPLAY);
      if (d >= e) {
        this.$VideoAutoplayControllerX6 = c;
        if (this.$VideoAutoplayControllerX5) {
          d = this.getVisibleUnits();
          for (var e = 0; e < a.length; ++e)
            a[e].isMuted() &&
              d.indexOf(a[e]) === -1 &&
              a[e].pause(b('VideoPlayerReason').AUTOPLAY);
          g = this.$VideoAutoplayControllerX27(d);
          g &&
            g !== f &&
            (f && this.pausePlayingVideo(b('VideoPlayerReason').AUTOPLAY),
            this.playVideo(g, b('VideoPlayerReason').AUTOPLAY),
            this.$VideoAutoplayControllerX14 && this.showAutoplayNUX(g));
          this.getClosestVideoUnits(
            b('VideoPlayerExperiments').preloadVideosCount
          ).forEach(function (a) {
            return a.preload();
          });
          g &&
            b('VideoPlayerExperiments').adjustPriorityBasedOnAutoplayIndex &&
            this.$VideoAutoplayControllerX30(g);
        }
        this.$VideoAutoplayControllerX5 = !1;
      }
      this.$VideoAutoplayControllerX4 = !1;
    };
    m.prototype.updateAutoplay = function () {
      __p && __p();
      if (
        b('VideoPlayerShakaGlobalConfig').getBool(
          'use_two_frequency_update_autoplay',
          !1
        )
      ) {
        this.$VideoAutoplayControllerX4 = !0;
        this.$VideoAutoplayControllerX5 = !0;
        return;
      }
      var a = this.getVideoUnits(),
        c;
      if (b('VideoPlayerExperiments').pauseOffscreenUnitsFirst) {
        c = this.getVisibleUnits();
        if (b('VideoPlayerExperiments').pauseOffscreenMutedOnUpdateAutoplay)
          for (var d = 0; d < a.length; ++d)
            a[d].isMuted() &&
              c.indexOf(a[d]) === -1 &&
              a[d].pause(b('VideoPlayerReason').AUTOPLAY);
      }
      if (!this.$VideoAutoplayControllerX12) {
        this.pausePlayingVideo(b('VideoPlayerReason').AUTOPLAY);
        return;
      }
      d = this.$VideoAutoplayControllerX3;
      b('VideoPlayerExperiments').pauseAudioUnitsOffscreen &&
        d &&
        d.shouldPauseWhenScrolledOffscreen() &&
        !d.isVisible() &&
        d.pause(b('VideoPlayerReason').AUTOPLAY);
      !b('VideoPlayerExperiments').decoupleAbortLoadingFromPause
        ? this.getClosestVideoUnits(
            b('VideoPlayerPreloadExperiment').preloadVideosCount
          ).forEach(function (a) {
            a.preload();
          })
        : b('VideoPlayerExperiments').abortLoadingHelperDefaultPreloading &&
          this.$VideoAutoplayControllerX17.preloadClosestVideoUnits(
            b('VideoPlayerPreloadExperiment').preloadVideosCount
          );
      c = this.getVisibleUnits();
      d = this.$VideoAutoplayControllerX27(c);
      var e = this.getPlayingVideoUnit();
      e
        ? d != e &&
          (this.pausePlayingVideo(b('VideoPlayerReason').AUTOPLAY),
          this.playVideo(d, b('VideoPlayerReason').AUTOPLAY),
          this.$VideoAutoplayControllerX14 && d && this.showAutoplayNUX(d))
        : d &&
          (this.playVideo(d, b('VideoPlayerReason').AUTOPLAY),
          this.$VideoAutoplayControllerX14 && this.showAutoplayNUX(d));
      if (
        !b('VideoPlayerExperiments').pauseOffscreenUnitsFirst &&
        b('VideoPlayerExperiments').pauseOffscreenMutedOnUpdateAutoplay
      )
        for (var e = 0; e < a.length; ++e)
          a[e].isMuted() &&
            c.indexOf(a[e]) === -1 &&
            a[e].pause(b('VideoPlayerReason').AUTOPLAY);
      b('VideoPlayerExperiments').adjustPriorityBasedOnAutoplayIndex &&
        this.$VideoAutoplayControllerX30(d);
      b('VideoPlayerExperiments').decoupleAbortLoadingFromPause &&
        this.$VideoAutoplayControllerX17.maybeAbortLoading();
    };
    m.prototype.$VideoAutoplayControllerX30 = function (a) {
      __p && __p();
      var c = -1,
        d = this.getVideoUnits();
      if (a) {
        var e = d.findIndex(function (b) {
          return b === a;
        });
        e >= 0 && (c = e + 1);
      } else {
        e = b('getViewportDimensions')().height / 2;
        for (var f = 0; f < d.length; f++) {
          var g = d[f];
          g = g.getDOMPosition();
          g = g.y + g.height / 2;
          if (g - e > 0) {
            c = f;
            break;
          }
        }
      }
      if (c === -1) return;
      for (var g = 0; g < d.length; g++) {
        f = d[g];
        e = f.getVideoPlayerController();
        if (!e) continue;
        g === c
          ? e.setVideoPriorityAdjustment(0.1)
          : f === a
          ? e.setVideoPriorityAdjustment(
              b('VideoPlayerExperiments').offsetToBestUnitPriority
            )
          : b('VideoPlayerExperiments').dePrioritizeUpfoldVideos && g < c
          ? e.setVideoPriorityAdjustment(-0.5)
          : e.setVideoPriorityAdjustment(0);
      }
    };
    e.exports = m;
  },
  null
);
__d(
  'XVideoQualitySurveyController',
  ['XController'],
  function (a, b, c, d, e, f) {
    e.exports = b('XController').create('/video/quality_survey/', {
      videoid: { type: 'String' },
      __asyncDialog: { type: 'Int' },
    });
  },
  null
);
__d(
  'VideoPlayButton',
  [
    'AsyncRequest',
    'CSS',
    'EventListener',
    'VideoDisplayTimePlayButton',
    'VideoPlayerLoggerSource',
    'VideoPlayerReason',
    'XVideoQualitySurveyController',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a, c, d) {
      __p && __p();
      this.$1 = a;
      this.$2 = c;
      d &&
        ((this.$3 = d.hiddenAfterFinish),
        (this.$4 = d.hiddenWhilePaused),
        (this.$5 = !!d.hiddenInFallback),
        (this.$5 = d.hiddenInFallback),
        (this.$6 = d.spherical));
      c = b('VideoDisplayTimePlayButton').getClicked(this.$2);
      b('VideoDisplayTimePlayButton').unregister(this.$2);
      a.addListener('beginPlayback', this.$7.bind(this));
      a.addListener('finishPlayback', this.$8.bind(this));
      a.addListener('pausePlayback', this.$9.bind(this));
      a.addListener('buffering', this.$10.bind(this));
      a.addListener('buffered', this.$11.bind(this));
      a.addListener('stateChange', this.$12.bind(this));
      a.addListener('playRequested', this.$13.bind(this));
      a.addListener('VideoChannelController/exitChannel', this.$14.bind(this));
      a.addListener('clickVideo', this.$15.bind(this));
      a.addListener('TahoeController/enterTahoe', this.$16.bind(this));
      b('EventListener').listen(this.$2, 'click', this.$17.bind(this));
      d &&
        d.hiddenWhileJSLoading &&
        !d.hiddenWhileVideoLoading &&
        b('CSS').show(this.$2);
      c && this.$17();
    }
    a.prototype.$12 = function () {
      this.$1.isState('fallback') &&
        (this.$5 || this.$1.getIsInChannel()
          ? b('CSS').hide(this.$2)
          : b('CSS').show(this.$2));
    };
    a.prototype.$7 = function () {
      b('CSS').hide(this.$2);
    };
    a.prototype.$9 = function () {
      if (
        this.$4 ||
        this.$1.getSource() === b('VideoPlayerLoggerSource').INLINE
      )
        return;
      b('CSS').show(this.$2);
    };
    a.prototype.$13 = function (a) {
      if (this.$1.isState('fallback') || a === b('VideoPlayerReason').AUTOPLAY)
        return;
      b('CSS').hide(this.$2);
    };
    a.prototype.$14 = function () {
      ((this.$1.isState('paused') && (!this.$4 || this.$6)) ||
        (this.$1.isState('finished') && !this.$3)) &&
        b('CSS').show(this.$2);
    };
    a.prototype.$16 = function () {
      this.$1.isState('playing') || b('CSS').show(this.$2);
    };
    a.prototype.$8 = function () {
      var a = this.$1.getOption('Looping', 'isLooping');
      this.$3 ||
      this.$1.getIsInChannel() ||
      this.$1.getSource() === b('VideoPlayerLoggerSource').TAHOE ||
      a
        ? b('CSS').hide(this.$2)
        : b('CSS').show(this.$2);
      if (
        !this.$1.getIsInChannel() &&
        !this.$1.isAd() &&
        !this.$1.hasOption('WatchAndScroll', 'isActive') &&
        !this.$1.isMuted() &&
        this.$1.getSource() !== b('VideoPlayerLoggerSource').MESSAGING
      ) {
        a = b('XVideoQualitySurveyController')
          .getURIBuilder()
          .setString('videoid', this.$1.getVideoID())
          .getURI();
        a = new (b('AsyncRequest'))().setURI(a);
        a.send();
      }
    };
    a.prototype.$10 = function () {
      b('CSS').hide(this.$2);
    };
    a.prototype.$11 = function () {
      b('CSS').hide(this.$2);
    };
    a.prototype.$17 = function () {
      this.$1.clickVideo();
    };
    a.prototype.$15 = function () {
      if (this.$1.isState('fallback')) return;
      b('CSS').hide(this.$2);
    };
    e.exports = a;
  },
  null
);
__d(
  'VideoSpinner',
  [
    'cx',
    'CircularProgressBar.react',
    'CSS',
    'EventListener',
    'React',
    'ReactDOM',
    'VideoPlayerShakaGlobalConfig',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    function a(a, c) {
      (this.$2 = c),
        (this.$1 = a),
        (this.$3 = !1),
        a.addListener('beginPlayback', this.$5.bind(this)),
        a.addListener('finishPlayback', this.$6.bind(this)),
        a.addListener('pausePlayback', this.$7.bind(this)),
        a.addListener('playRequested', this.$8.bind(this)),
        a.addListener('buffering', this.$9.bind(this)),
        a.addListener('buffered', this.$10.bind(this)),
        a.addListener('networkInterrupted', this.$11.bind(this)),
        a.addListener('networkResumed', this.$12.bind(this)),
        a.addListener('stateChange', this.$13.bind(this)),
        a.addListener('clickVideo', this.$14.bind(this)),
        a.addListener(
          'VideoSphericalOverlay/animationUpdate',
          this.$15.bind(this)
        ),
        b('EventListener').listen(this.$2, 'click', this.$16.bind(this)),
        b('VideoPlayerShakaGlobalConfig').getBool('use_progress_spinner', !1) &&
          (a.addListener(
            'bufferingProgress',
            function (a) {
              return this.$17(a);
            }.bind(this)
          ),
          b('CSS').addClass(this.$2, '_69ci'));
    }
    a.prototype.$17 = function (a) {
      b('ReactDOM').render(
        b('React').createElement(b('CircularProgressBar.react'), {
          animate: !0,
          text: Math.round(a * 100) + '%',
          percentComplete: Math.max(a * 100, 10),
        }),
        this.$2
      );
    };
    a.prototype.$15 = function (a, c) {
      a
        ? b('CSS').addClass(this.$2, '_1st9')
        : b('CSS').removeClass(this.$2, '_1st9');
    };
    a.prototype.$11 = function () {
      b('VideoPlayerShakaGlobalConfig').getBool(
        'enable_spinner_on_network_interrupted',
        !1
      ) &&
        this.$3 &&
        b('CSS').show(this.$2),
        (this.$4 = !0);
    };
    a.prototype.$12 = function () {
      b('VideoPlayerShakaGlobalConfig').getBool(
        'enable_spinner_on_network_interrupted',
        !1
      ) &&
        (this.$3 || b('CSS').hide(this.$2)),
        (this.$4 = !1);
    };
    a.prototype.$9 = function () {
      b('CSS').show(this.$2),
        (this.$3 = !0),
        b('VideoPlayerShakaGlobalConfig').getBool('use_progress_spinner', !1) &&
          this.$17(0);
    };
    a.prototype.$10 = function () {
      b('VideoPlayerShakaGlobalConfig').getBool(
        'enable_spinner_on_network_interrupted',
        !1
      )
        ? this.$4 || b('CSS').hide(this.$2)
        : b('CSS').hide(this.$2),
        (this.$3 = !1);
    };
    a.prototype.$5 = function () {
      this.$3 ? b('CSS').show(this.$2) : b('CSS').hide(this.$2);
    };
    a.prototype.$7 = function () {
      b('VideoPlayerShakaGlobalConfig').getBool(
        'enable_spinner_on_network_interrupted',
        !1
      )
        ? this.$4 || b('CSS').hide(this.$2)
        : b('CSS').hide(this.$2);
    };
    a.prototype.$8 = function () {
      b('CSS').hide(this.$2);
    };
    a.prototype.$6 = function () {
      b('CSS').hide(this.$2);
    };
    a.prototype.$13 = function () {
      this.$1.isState('fallback') && b('CSS').hide(this.$2);
    };
    a.prototype.$14 = function () {
      if (this.$1.isState('fallback')) return;
      (this.$3 || this.$1.isState('ready') || this.$1.isState('loading')) &&
        b('CSS').show(this.$2);
    };
    a.prototype.$16 = function () {
      this.$1.clickVideo();
    };
    e.exports = a;
  },
  null
);
__d(
  'LiveVideoPlayerActions',
  ['LiveVideoPlayerDispatcher'],
  function (a, b, c, d, e, f) {
    a = {
      setIsRewound: function (a, c) {
        c = { type: 'SET_IS_REWOUND', isRewound: c, vpc: a };
        b('LiveVideoPlayerDispatcher').dispatch(c);
      },
      dismissRewindCommentOverlay: function (a) {
        a = { type: 'DISMISS_REWIND_COMMENT_OVERLAY', playerID: a };
        b('LiveVideoPlayerDispatcher').dispatch(a);
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'LiveVideoRewindLoggerEvent',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      GO_TO_LIVE: 'go_to_live',
      GO_TO_BEGINNING: 'go_to_beginning',
      BACK_BUTTON: 'back_button',
      FORWARD_BUTTON: 'forward_button',
      SCRUBBER: 'scrubber',
      PAUSE: 'pause',
      PLAY: 'play',
      RENDER_REWIND_CONTROLS: 'render_rewind_controls',
    });
  },
  null
);
__d(
  'LiveRewindUtils',
  [
    'LiveVideoPlayerActions',
    'LiveVideoRewindLoggerEvent',
    'LiveVideoRewindTypedLogger',
    'TimeRanges',
    'VideoPlayerController',
    'VideoPlayerReason',
    'uuid',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = 5,
      h = new Map(),
      i = 250;
    function j(a) {
      var b = 0;
      for (var c = 0; c < a.length(); c++) b += a.end(c) - a.start(c);
      return b > g ? b - g : 0;
    }
    function a(a, b) {
      __p && __p();
      var c = a;
      if (b.length() < 1) return 0;
      if (a <= 0) return b.start(0);
      for (var a = 0; a < b.length(); a++) {
        var d = b.end(a) - b.start(a);
        if (c < d) return b.start(a) + c;
        c -= d;
      }
      return b.end(b.length() - 1);
    }
    function k(a, b) {
      __p && __p();
      var c = a;
      if (b.length() < 1) return c;
      var d = 0;
      for (var e = 0; e < b.length(); e++) {
        var f = b.start(e),
          g = f - d;
        c -= g;
        if (a < f) {
          g = f - a;
          return c + g;
        }
        if (a <= b.end(e)) return c;
        d = b.end(e);
      }
      return c;
    }
    function l(a, b, c, d) {
      __p && __p();
      if (c.length() < 1) return 0;
      d == null && (d = n(a, c));
      a < c.start(d) && (a = c.start(d));
      a > c.end(d) && (a = c.end(d));
      var e = a + b,
        f = c.end(c.length() - 1),
        g = c.start(0);
      if (e <= g) return g;
      if (e >= f) return f;
      if (e >= c.start(d) && e <= c.end(d)) return e;
      if (e < c.start(d)) {
        if (d < 1) return g;
        g = a - c.start(d);
        g = b + g;
        var h = c.end(d - 1);
        return l(h, g, c, d - 1);
      }
      if (e > c.start(d)) {
        if (d >= c.length() - 1) return f;
        h = c.end(d) - a;
        g = b - h;
        e = c.start(d + 1);
        return l(e, g, c, d + 1);
      }
      return 0;
    }
    function m(a, b) {
      b == null && (b = g);
      var c = a.end(a.length() - 1);
      return l(c, -1 * b, a);
    }
    function n(a, b) {
      if (b.length() < 1) return 0;
      var c = 0;
      while (c < b.length() - 1) {
        if (a < b.end(c)) return c;
        c++;
      }
      return c;
    }
    function c(a) {
      var c = h.get(a);
      if (c == null) {
        var d = b('uuid')();
        h.set(a, { sessionID: d, currentSequenceNumber: 0 });
        return d;
      }
      return c.sessionID;
    }
    function d(a) {
      var c = h.get(a);
      if (c == null) {
        h.set(a, { sessionID: b('uuid')(), currentSequenceNumber: 0 });
        return 0;
      }
      a = ++c.currentSequenceNumber;
      return a;
    }
    function f(a) {
      var c = a.getSeekableRanges();
      if (c) {
        var d = k(a.getCurrentTimePosition(), c);
        c = c.start(0);
        s(a, c);
        b('LiveVideoPlayerActions').setIsRewound(a, !0);
        r(b('LiveVideoRewindLoggerEvent').GO_TO_BEGINNING, a, d, null, 0, null);
      }
    }
    function o(a) {
      var c = a.getSeekableRanges();
      if (!c) return;
      var d = a.getCurrentTimePosition(),
        e = k(d, c);
      d = l(d, -10, c);
      s(a, d);
      b('LiveVideoPlayerActions').setIsRewound(a, !0);
      r(b('LiveVideoRewindLoggerEvent').BACK_BUTTON, a, e, null, null, d);
    }
    function p(a) {
      var c = a.getSeekableRanges();
      if (!c) return;
      var d = a.getCurrentTimePosition(),
        e = k(d, c);
      d = l(d, 10, c);
      s(a, d);
      c = m(c);
      a.isState('playing') &&
        c - d < 1 &&
        b('LiveVideoPlayerActions').setIsRewound(a, !1);
      r(b('LiveVideoRewindLoggerEvent').FORWARD_BUTTON, a, e, null, null, d);
    }
    function q(a) {
      __p && __p();
      var c = a.getSeekableRanges();
      if (c) {
        var d = a.getCurrentTimePosition();
        d = k(d, c);
        c = c.end(c.length() - 1);
        s(a, c);
        a.isState('paused') && a.play(b('VideoPlayerReason').USER);
        b('LiveVideoPlayerActions').setIsRewound(a, !1);
        r(b('LiveVideoRewindLoggerEvent').GO_TO_LIVE, a, d, null, null, c);
      }
    }
    function r(event, a, c, d, e, f) {
      var g = a.getSeekableRanges(),
        h = g ? j(g) : 0;
      c == null && d != null && g != null && (c = k(d, g));
      e == null && f != null && g != null && (e = k(f, g));
      new (b('LiveVideoRewindTypedLogger'))()
        .setEvent(event)
        .setPositionBefore(c)
        .setPositionAfter(e)
        .setVideoDuration(h)
        .setVideoID(a.getVideoID())
        .setSessionID(t.getLoggingSessionID(a.getVideoPlayerID()))
        .setActionSequenceNumber(
          t.getLoggingSequenceNumber(a.getVideoPlayerID())
        )
        .log();
    }
    function s(a, c) {
      var d = a.getState() === 'paused';
      a.pause(b('VideoPlayerReason').SEEK);
      setTimeout(function () {
        a.seek(c), d || a.play(b('VideoPlayerReason').SEEK);
      }, i);
    }
    var t = {
      getSeekTime: l,
      getAbsolutePosition: a,
      getLiveHeadTimestamp: m,
      getLoggingSessionID: c,
      getLoggingSequenceNumber: d,
      getRelativePosition: k,
      getTotalDuration: j,
      goToBeginning: f,
      goToLive: q,
      logLiveRewindEvent: r,
      seekBack: o,
      seekForward: p,
      LIVE_HEAD_BUFFER_S: g,
    };
    e.exports = t;
  },
  null
);
__d(
  'TahoeLoggerEvent',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      END_SCREEN_REPLAY: 'end_screen_replay',
      EXIT_WITH_ESC: 'exit_with_esc',
      EXIT_WITH_BACK_AFFORDANCE: 'exit_with_back_affordance',
      EXIT_WITH_WNS_CONTROL: 'exit_with_wns_control',
      ENTER_WITH_PLAYER_CLICK: 'enter_with_player_click',
      ENTER_WITH_CONTROL_CLICK: 'enter_with_control_click',
      ENTER_WITH_LIVE_VIDEO_REPLY_CLICK: 'enter_with_live_video_reply_click',
      GRID_VIEW_END_SCREEN_SHOWN: 'grid_view_end_screen_shown',
      GRID_VIEW_END_SCREEN_CLICK_VIDEO: 'grid_view_end_screen_click_video',
      TURN_ON_QUIET_MODE: 'turn_on_quiet_mode',
      TURN_OFF_QUIET_MODE: 'turn_off_quiet_mode',
      UP_NEXT_OVERLAY_SHOWN: 'up_next_overlay_shown',
      UP_NEXT_OVERLAY_CANCEL: 'up_next_overlay_cancel',
      UP_NEXT_OVERLAY_REDIRECT_ON_COUNTDOWN_FINISHED:
        'up_next_overlay_redirect_on_countdown_finished',
      UP_NEXT_OVERLAY_REDIRECT_ON_CLICK: 'up_next_overlay_redirect_on_click',
      SOCIAL_CONTEXT_COMPONENT_CLICKED: 'social_context_component_clicked',
      SOCIAL_CONTEXT_COMPONENT_SHOWN: 'social_context_component_shown',
      SOCIAL_CONTEXT_SHOWN: 'social_context_shown',
      SOCIAL_CONTEXT_NOT_SHOWN: 'social_context_not_shown',
      AUTOCHAIN_CANCELLED: 'autochain_cancelled',
      PREV_CONTROL_CLICK: 'prev_control_click',
      PREV_CONTROL_OVERLAY_SHOWN: 'prev_control_overlay_shown',
      UP_NEXT_CONTROL_CLICK: 'up_next_control_click',
      UP_NEXT_CONTROL_OVERLAY_SHOWN: 'up_next_control_overlay_shown',
    });
  },
  null
);
__d(
  'LayoutColumn.react',
  ['cx', 'React', 'joinClasses'],
  function (a, b, c, d, e, f, g) {
    function a(a, c) {
      var d = a.className,
        e = a.children;
      a = babelHelpers.objectWithoutProperties(a, ['className', 'children']);
      return b('React').createElement(
        'div',
        babelHelpers['extends']({ ref: c }, a, {
          className: b('joinClasses')(d, '_4bl7'),
        }),
        e
      );
    }
    e.exports = b('React').forwardRef(a);
  },
  null
);
__d(
  'LayoutFillColumn.react',
  ['cx', 'React', 'joinClasses'],
  function (a, b, c, d, e, f, g) {
    function a(a, c) {
      var d = a.className,
        e = a.children;
      a = babelHelpers.objectWithoutProperties(a, ['className', 'children']);
      return b('React').createElement(
        'div',
        babelHelpers['extends']({ ref: c }, a, {
          className: b('joinClasses')(d, '_4bl9'),
        }),
        e
      );
    }
    e.exports = b('React').forwardRef(a);
  },
  null
);
__d(
  'Layout.react',
  [
    'cx',
    'LayoutColumn.react',
    'LayoutFillColumn.react',
    'React',
    'joinClasses',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h;
    h = babelHelpers.inherits(i, b('React').Component);
    h && h.prototype;
    i.prototype.render = function () {
      var a = !1,
        c = !1,
        d = this.props,
        e = d.children,
        f = d.className;
      d = babelHelpers.objectWithoutProperties(d, ['children', 'className']);
      b('React').Children.forEach(e, function (b) {
        if (!b) return;
        b.type === i.FillColumn ? (c = !0) : c && (a = !0);
      });
      return b('React').createElement(
        'div',
        babelHelpers['extends']({}, d, {
          className: b('joinClasses')(f, a ? '_5aj7' : 'clearfix _ikh'),
        }),
        e
      );
    };
    function i() {
      h.apply(this, arguments);
    }
    i.Column = b('LayoutColumn.react');
    i.FillColumn = b('LayoutFillColumn.react');
    e.exports = i;
  },
  null
);
__d(
  'DOMContainer.react',
  ['invariant', 'React', 'ReactDOM', 'isNode'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h;
    c = b('React').PropTypes;
    h = babelHelpers.inherits(a, b('React').Component);
    h && h.prototype;
    a.prototype.getDOMChild = function () {
      var a = this.props.children;
      b('isNode')(a) || g(0, undefined);
      return a;
    };
    a.prototype.shouldComponentUpdate = function (a) {
      return a.children !== this.props.children;
    };
    a.prototype.componentDidMount = function () {
      var a = b('ReactDOM').findDOMNode(this);
      a != null && a.appendChild(this.getDOMChild());
    };
    a.prototype.componentDidUpdate = function () {
      var a = b('ReactDOM').findDOMNode(this);
      if (a == null) return;
      while (a.lastChild) a.removeChild(a.lastChild);
      a.appendChild(this.getDOMChild());
    };
    a.prototype.render = function () {
      var a = this.props,
        c = a.display,
        d = a.containerRef;
      a = babelHelpers.objectWithoutProperties(a, ['display', 'containerRef']);
      return c === 'block'
        ? b('React').createElement(
            'div',
            babelHelpers['extends']({}, a, { ref: d }),
            undefined
          )
        : b('React').createElement(
            'span',
            babelHelpers['extends']({}, a, { ref: d }),
            undefined
          );
    };
    function a() {
      h.apply(this, arguments);
    }
    a.propTypes = {
      display: c.oneOf(['inline', 'block']),
      containerRef: c.func,
    };
    a.defaultProps = { display: 'inline' };
    e.exports = a;
  },
  null
);
__d(
  'LineClamp.react',
  [
    'cx',
    'DOMContainer.react',
    'Locale',
    'React',
    'ReactDOM',
    'getElementText',
    'getVendorPrefixedName',
    'joinClasses',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h,
      i = b('getVendorPrefixedName')('lineClamp');
    c = babelHelpers.inherits(a, b('React').Component);
    h = c && c.prototype;
    function a() {
      var a, c;
      for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
        e[f] = arguments[f];
      return (
        (c = (a = h.constructor).call.apply(a, [this].concat(e))),
        (this.state = { enableTooltip: !1 }),
        (this.$2 = function (a) {
          a = b('ReactDOM').findDOMNode(a);
          a instanceof HTMLElement && ((this.innerElement = a), this.$3());
        }.bind(this)),
        (this.$4 = function (a) {
          a = b('ReactDOM').findDOMNode(a);
          a instanceof HTMLElement && ((this.rootElement = a), this.$3());
        }.bind(this)),
        c
      );
    }
    a.prototype.$1 = function () {
      var a;
      this.props.lineHeight &&
        !this.props.customEllipsisDisableGradient &&
        (a = { bottom: this.props.lineHeight + 'px' });
      var c;
      this.props.customEllipsis && this.props.customEllipsisDisableGradient
        ? (c = b('Locale').isRTL() ? '_1osp' : '_1osq')
        : (c = b('Locale').isRTL()
            ? '_4ik3 _2k5c'
            : '_4ik3' +
              (this.props.enableCustomizedStyleForEllipsis ? ' _6q5n' : '') +
              (this.props.enableCustomizedStyleForEllipsis ? '' : ' _2k5d'));
      return b('React').createElement(
        'div',
        { style: a, className: c, key: 'ellipsis' },
        this.props.customEllipsis ? this.props.customEllipsis : '\u2026'
      );
    };
    a.prototype.$3 = function () {
      __p && __p();
      if (!this.props.enableTooltipOnOverflow) return;
      if (!this.rootElement) return;
      var a = this.rootElement,
        b;
      !1;
      if (this.$5()) b = a.scrollHeight > a.offsetHeight;
      else {
        if (!this.innerElement) return;
        b = this.innerElement.offsetHeight > a.offsetHeight;
      }
      this.state.enableTooltip !== b && this.setState({ enableTooltip: b });
    };
    a.prototype.$5 = function () {
      return !!i && !this.props.disableNative;
    };
    a.prototype.componentDidMount = function () {
      this.$3();
    };
    a.prototype.componentDidUpdate = function () {
      this.$3();
    };
    a.prototype.render = function () {
      var a = this.$5(),
        c = b('joinClasses')(
          this.props.className,
          '_4ik4' + (a ? ' _4ik5' : '')
        ),
        d = this.props.hasXHPChildren
          ? b('React').createElement(
              b('DOMContainer.react'),
              null,
              this.props.children
            )
          : this.props.children,
        e = {};
      this.props.lineHeight &&
        ((e = { lineHeight: this.props.lineHeight + 'px' }),
        this.props.fitHeightToShorterText
          ? (e = babelHelpers['extends']({}, e, {
              maxHeight: this.props.lineHeight * this.props.lines,
            }))
          : (e = babelHelpers['extends']({}, e, {
              height: this.props.lineHeight * this.props.lines,
            })));
      a
        ? (e[i] = this.props.lines)
        : ((c = b('joinClasses')(c, 'clearfix')),
          this.props.customEllipsisDisableGradient
            ? (d = [
                b('React').createElement('div', {
                  className: '_1osu',
                  key: 'spacer',
                }),
                this.$1(),
                b('React').createElement(
                  'div',
                  { className: '_1osv', key: 'inner', ref: this.$2 },
                  this.props.children
                ),
              ])
            : (d = [
                b('React').createElement(
                  'div',
                  { className: '_4ik6', key: 'inner', ref: this.$2 },
                  d
                ),
                this.$1(),
              ]));
      var f = {};
      this.props.enableTooltipOnOverflow &&
        ((f['data-hover'] = 'tooltip'),
        this.state.enableTooltip &&
          (f['data-tooltip-content'] = a
            ? b('getElementText')(this.rootElement)
            : b('getElementText')(this.innerElement)));
      return b('React').createElement(
        'div',
        babelHelpers['extends']({}, f, {
          className: c,
          ref: this.$4,
          style: e,
        }),
        d
      );
    };
    e.exports = a;
  },
  null
);
__d(
  'XTahoeVideoDataAsyncController',
  ['XController'],
  function (a, b, c, d, e, f) {
    e.exports = b('XController').create('/video/tahoe/video_data/', {
      video_ids: { type: 'FBIDSet', required: !0 },
    });
  },
  null
);
__d(
  'VideoControlsVideoInfoOverlay.react',
  [
    'cx',
    'AsyncRequest',
    'Image.react',
    'Layout.react',
    'LineClamp.react',
    'Link.react',
    'React',
    'URI',
    'XTahoeVideoDataAsyncController',
    'XUIText.react',
    'joinClasses',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h,
      i = b('Layout.react').Column,
      j = b('Layout.react').FillColumn,
      k = 90,
      l = 160;
    c = babelHelpers.inherits(a, b('React').Component);
    h = c && c.prototype;
    function a() {
      var a, b;
      for (var c = arguments.length, d = new Array(c), e = 0; e < c; e++)
        d[e] = arguments[e];
      return (
        (b = (a = h.constructor).call.apply(a, [this].concat(d))),
        (this.state = { mouseOnOverlay: !1, videoData: {}, displayed: !1 }),
        b
      );
    }
    a.prototype.componentDidUpdate = function () {
      (!this.state.videoData.id ||
        this.props.videoID !== this.state.videoData.id.toString()) &&
        this.$1(),
        this.props.mouseOnBtn &&
          !this.state.displayed &&
          this.setState({ displayed: !0 });
    };
    a.prototype.render = function () {
      var a = this.state.videoData,
        c = a.thumbURI,
        d = a.title,
        e = a.permalink;
      return !c || !d || !e
        ? null
        : b('React').createElement(
            'div',
            {
              className: '_6buh',
              onMouseEnter: function () {
                this.state.mouseOnOverlay ||
                  this.setState({ mouseOnOverlay: !0 });
              }.bind(this),
              onMouseLeave: function () {
                this.state.mouseOnOverlay &&
                  this.setState({ mouseOnOverlay: !1 });
              }.bind(this),
            },
            b('React').createElement(
              'div',
              { className: '_6bui' },
              b('React').createElement(
                b('Layout.react'),
                {
                  className: b('joinClasses')(
                    (this.state.displayed ? '' : '_6k70') +
                      ' _6buj' +
                      (!this.state.mouseOnOverlay && !this.props.mouseOnBtn
                        ? ' _6buk'
                        : ''),
                    this.props.customClassName
                  ),
                },
                b('React').createElement(
                  i,
                  null,
                  b('React').createElement(
                    b('Link.react'),
                    {
                      onClick: function () {
                        return this.$2(e);
                      }.bind(this),
                    },
                    b('React').createElement(b('Image.react'), {
                      src: c,
                      height: k,
                      width: l,
                    })
                  )
                ),
                b('React').createElement(
                  j,
                  { className: '_6bul' },
                  b('React').createElement(
                    'div',
                    { className: '_6bum' },
                    b('React').createElement(
                      'div',
                      { className: '_6bun' },
                      b('React').createElement(
                        b('Link.react'),
                        {
                          onClick: function () {
                            return this.$2(e);
                          }.bind(this),
                        },
                        b('React').createElement(
                          b('XUIText.react'),
                          { weight: 'bold' },
                          this.props.label
                        )
                      )
                    ),
                    d
                      ? b('React').createElement(
                          'div',
                          { className: '_2pim' },
                          b('React').createElement(
                            b('LineClamp.react'),
                            { lines: 3, enableTooltipOnOverflow: !0 },
                            b('React').createElement(
                              'div',
                              { className: '_6buo' },
                              d
                            )
                          )
                        )
                      : null
                  )
                )
              )
            )
          );
    };
    a.prototype.$1 = function () {
      this.props.videoID &&
        new (b('AsyncRequest'))(
          b('XTahoeVideoDataAsyncController')
            .getURIBuilder()
            .setFBIDSet('video_ids', [this.props.videoID])
            .getURI()
        )
          .setHandler(
            function (a) {
              a =
                (a = a) != null
                  ? (a = a.payload) != null
                    ? a.videosData
                    : a
                  : a;
              a && a.length > 0 && this.setState({ videoData: a[0] });
            }.bind(this)
          )
          .send();
    };
    a.prototype.$2 = function (a) {
      this.props.logOverlayClick();
      this.setState({ videoData: {} });
      a = a;
      a && b('URI').go(a);
    };
    e.exports = a;
  },
  null
);
__d(
  'NextVideoControlOverlay.react',
  [
    'cx',
    'fbt',
    'React',
    'TahoeLoggerEvent',
    'TahoeTypedLogger',
    'VideoControlsVideoInfoOverlay.react',
  ],
  function (a, b, c, d, e, f, g, h) {
    __p && __p();
    var i;
    i = babelHelpers.inherits(a, b('React').Component);
    i && i.prototype;
    a.prototype.render = function () {
      return b('React').createElement(
        b('VideoControlsVideoInfoOverlay.react'),
        {
          videoID: this.props.nextVideoID,
          mouseOnBtn: this.props.mouseOnBtn,
          logOverlayClick: this.$1.bind(this),
          label: h._('NEXT'),
          customClassName: '_6eam',
        }
      );
    };
    a.prototype.$1 = function () {
      new (b('TahoeTypedLogger'))()
        .setEvent(b('TahoeLoggerEvent').UP_NEXT_CONTROL_CLICK)
        .setMediaID(this.props.currentVideoID)
        .log();
    };
    function a() {
      i.apply(this, arguments);
    }
    e.exports = a;
  },
  null
);
__d(
  'PrevVideoControlOverlay.react',
  [
    'cx',
    'fbt',
    'React',
    'TahoeLoggerEvent',
    'TahoeTypedLogger',
    'VideoControlsVideoInfoOverlay.react',
  ],
  function (a, b, c, d, e, f, g, h) {
    __p && __p();
    var i;
    i = babelHelpers.inherits(a, b('React').Component);
    i && i.prototype;
    a.prototype.render = function () {
      return b('React').createElement(
        b('VideoControlsVideoInfoOverlay.react'),
        {
          videoID: this.props.prevVideoID,
          mouseOnBtn: this.props.mouseOnBtn,
          logOverlayClick: this.$1.bind(this),
          label: h._('PREVIOUS'),
          customClassName: '_6eeb',
        }
      );
    };
    a.prototype.$1 = function () {
      new (b('TahoeTypedLogger'))()
        .setEvent(b('TahoeLoggerEvent').PREV_CONTROL_CLICK)
        .setMediaID(this.props.currentVideoID)
        .log();
    };
    function a() {
      i.apply(this, arguments);
    }
    e.exports = a;
  },
  null
);
__d(
  'asset',
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      throw new Error(
        'asset(' + JSON.stringify(a) + '): Unexpected asset reference.'
      );
    }
    e.exports = a;
  },
  null
);
__d(
  'VideoClipButton.react',
  [
    'ix',
    'cx',
    'fbt',
    'AbstractButton.react',
    'Image.react',
    'React',
    'TooltipData',
    'XUISpinner.react',
    'XUIText.react',
    'asset',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    __p && __p();
    var j,
      k = i._('Create a clip from the last 30 seconds'),
      l = i._('Generating clip...');
    c = babelHelpers.inherits(a, b('React').Component);
    j = c && c.prototype;
    function a() {
      var a, b;
      for (var c = arguments.length, d = new Array(c), e = 0; e < c; e++)
        d[e] = arguments[e];
      return (
        (b = (a = j.constructor).call.apply(a, [this].concat(d))),
        (this.state = { isClipping: !1 }),
        (this.$1 = function () {
          this.setState({ isClipping: !1 });
        }.bind(this)),
        b
      );
    }
    a.prototype.render = function () {
      return this.state.isClipping
        ? b('React').createElement(
            b('XUIText.react'),
            {
              className: '_zbd _25cu',
              'data-hover': 'tooltip',
              'data-tooltip-content': l,
            },
            b('React').createElement(b('XUISpinner.react'), {
              className: '_rwt',
              background: 'light',
              size: 'small',
              paused: !1,
            })
          )
        : b('React').createElement(
            b('AbstractButton.react'),
            babelHelpers['extends']({}, b('TooltipData').propsFor(k, 'above'), {
              className: '_zbd',
              image: b('React').createElement(b('Image.react'), {
                className: '_rwt',
                src: g('468574'),
              }),
              label: k,
              labelIsHidden: !0,
              onClick: function () {
                this.setState({ isClipping: !0 }),
                  this.props.onClipVideo(this.$1);
              }.bind(this),
              tabIndex: '0',
            })
          );
    };
    e.exports = a;
  },
  null
);
__d(
  'VideoChainingCaller',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      INTERNAL: 'internal',
      WWW_FEED_PIVOTS: 'www_feed_pivots',
      WWW_FEED_SNOWLIFT: 'www_feed_snowlift',
      MISC_PHOTO_SET: 'misc_photo_set',
      MOBILE: 'mobile',
      SEARCH: 'search',
      WWW_FEED_RHC: 'www_feed_rhc',
      WWW_NOTIFICATION: 'www_notification',
      WWW_PERMALINK: 'www_permalink',
      WWW_PERMALINK_RHC: 'www_permalink_rhc',
      WWW_PERMALINK_RHC_FROM_NOTIFICATION:
        'www_permalink_rhc_from_notification',
      MY_VIDEO_CHANNELS_ENT_QUERY: 'my_video_channels_ent_query',
      TOP_FOLLOWED_VIDEO_CHANNELS_ENT_QUERY:
        'top_followed_video_channels_ent_query',
      BADGE: 'badge',
      PAGINATION: 'pagination',
      SUBTITLE: 'subtitle',
      CHANNEL_VIEW_FROM_UNKNOWN: 'channel_view_from_unknown',
      CHANNEL_VIEW_FROM_NEWSFEED: 'channel_view_from_newsfeed',
      CHANNEL_VIEW_FROM_EXPLOREFEED: 'channel_view_from_explorefeed',
      LIVE_INDEXER_FROM_EXPLOREFEED: 'live_indexer_from_explorefeed',
      LIVE_INDEXER_FROM_NEWSFEED: 'live_indexer_from_newsfeed',
      NN_INDEXER_FROM_NEWSFEED: 'nn_indexer_from_newsfeed',
      CHANNEL_VIEW_FROM_SEARCH: 'channel_view_from_search',
      CHANNEL_VIEW_FROM_NEWSFEED_PIVOT: 'channel_view_from_newsfeed_pivot',
      NEWSFEED_PIVOT_INLINE: 'newsfeed_pivot_inline',
      MOBILE_NEWSFEED_PIVOT_INLINE: 'mobile_newsfeed_pivot_inline',
      CHANNEL_VIEW_FROM_PAGE_CALL_TO_ACTION:
        'channel_view_from_page_call_to_action',
      CHANNEL_VIEW_FROM_PAGE_TIMELINE: 'channel_view_from_page_timeline',
      CHANNEL_VIEW_FROM_PAGE_TIMELINE_FEATURED:
        'channel_view_from_page_timeline_featured',
      CHANNEL_VIEW_FROM_PAGE_VIDEO_TAB: 'channel_view_from_page_video_tab',
      CHANNEL_VIEW_FROM_PAGE_HOME_HERO: 'channel_view_from_page_home_hero',
      CHANNEL_VIEW_FROM_USER_TIMELINE: 'channel_view_from_user_timeline',
      CHANNEL_VIEW_FROM_USER_VIDEO_TAB: 'channel_view_from_user_video_tab',
      CHANNEL_VIEW_FROM_GROUP_TIMELINE: 'channel_view_from_group_timeline',
      CHANNEL_VIEW_FROM_GROUP_VIDEO_TAB: 'channel_view_from_group_video_tab',
      CHANNEL_VIEW_FROM_VIDEO_PAGE_SPOTLIGHT:
        'channel_view_from_video_page_spotlight',
      CHANNEL_VIEW_FROM_VIDEO_PAGE_VIDEO_LIST:
        'channel_view_from_video_page_video_list',
      CHANNEL_VIEW_FROM_VIDEO_PAGE_VIDEO_TAB:
        'channel_view_from_video_page_video_tab',
      CHANNEL_VIEW_FROM_SAVED_STORY: 'channel_view_from_saved_story',
      SAVED_STORY_INLINE: 'saved_story_inline',
      CHANNEL_VIEW_FROM_SHARED_WITH_YOU_STORY:
        'channel_view_from_shared_with_you_story',
      SHARED_WITH_YOU_STORY_INLINE: 'shared_with_you_story_inline',
      CHANNEL_VIEW_FROM_LATEST_FROM_YOUR_CHANNELS_STORY:
        'channel_view_from_latest_from_your_channels_story',
      LATEST_FROM_YOUR_CHANNELS_STORY_INLINE:
        'latest_from_your_channels_story_inline',
      CHANNEL_VIEW_FROM_CHANNEL_PIVOT: 'channel_view_from_channel_pivot',
      CHANNEL_PIVOT_INLINE: 'channel_pivot_inine',
      CHANNEL_VIEW_FROM_CHANNEL_RECOMMENDED_CHANNEL_STORY:
        'channel_view_from_recommended_channel_story',
      RECOMMENDED_CHANNEL_STORY_INLINE: 'recommended_channel_story_inline',
      CHANNEL_VIEW_FROM_VIDEO_HOME: 'channel_view_from_video_home',
      VIDEO_HOME_INLINE: 'video_home_inline',
      VIDEO_HOME_CHANNEL_SEE_ALL: 'video_home_channel_see_all',
      SOCIAL_PLAYER_UP_NEXT: 'social_player_up_next',
      CHANNEL_VIEW_FROM_CASTING: 'channel_view_from_casting',
      CONNECTED_TV: 'connected_tv',
      CONNECTED_TV_DISCOVERY: 'connected_tv_discovery',
      CONNECTED_TV_PLAYER: 'connected_tv_player',
      CONNECTED_TV_PROFILE: 'connected_tv_profile',
      VIDEO_HOME_FEED: 'video_home_feed',
      VIDEO_HOME_HERO: 'video_home_hero',
      FEED_SURVEY_SWIPE: 'feed_survey_swipe',
      FEED_PIVOTS_INLINE: 'feed_pivots_inline',
      CHANNEL_VIEW_FROM_FEED_PIVOTS: 'channel_view_from_feed_pivots',
      VIDEO_SETS_CACHE_REFRESH: 'video_sets_cache_refresh',
      VIDEO_SETS_CACHE_CHECK: 'video_sets_cache_check',
      DUMMY_STORY_RECOMMENDED_VIDEOS: 'dummy_story_recommended_videos',
      DUMMY_STORY_FRIENDS_ENJOYING: 'dummy_story_friends_enjoying',
      LIVE_EVENT_VIDEO_SET: 'live_event_video_set',
      LIVE_VIDEOS_SET: 'live_videos_set',
      SINGLE_CREATOR_VIDEO_SET: 'single_creator_video_set',
      FRT_TOOL: 'frt_tool',
      DUMMY_STORY_FRIENDS_ENJOYING_NOW: 'dummy_story_friends_enjoying_now',
      DUMMY_STORY_DUMMY_ACTION: 'dummy_story_dummy_action',
      OCULUS_VIDEO: 'oculus_video',
      TRENDING_DEMOGRAPHICS_LIVE: 'trending_demographics_live',
      LIVE_MAP: 'live_map',
      UNCONNECTED_LIVE_VIDEO: 'unconnected_live_video',
      PROFILE_VIDEO_GALLERY: 'profile_video_gallery',
      CHANNEL_VIEW_FROM_PLAYLIST: 'channel_view_from_playlist',
      OCULUS_SOCIAL_HUB: 'oculus_social_hub',
      AKIRA: 'akira',
      IS_LIVE_VIDEO_CHAINING: 'is_live_video_chaining',
      IS_LIVE_VIDEO_CHAINING_OTHERS: 'is_live_video_chaining_others',
      VIDEO_CREATOR_CHAINING: 'video_creator_chaining',
      TAHOE: 'tahoe',
      LIVING_ROOM: 'living_room',
      SHOWS_COVER_TRAILER: 'shows_cover_trailer',
      SHOWS_EPISODES_TAB: 'shows_episodes_tab',
      SHOWS_PLAYLISTS_TAB: 'shows_playlists_tab',
      SHOWS_HOME_TAB: 'shows_home_tab',
      SHOWS_MORE_VIDEOS_TAB: 'shows_more_videos_tab',
      SHOW_EPISODE_FEED_RECOMMENDATIONS: 'show_episode_feed_recommendations',
      PARENT_PAGE_TIMELINE: 'parent_page_timeline',
      WATCH_WATCHLIST_TAB: 'watch_watchlist_tab',
      WATCH_FEED_TAB: 'watch_feed_tab',
      WATCH_TOPIC_FEED: 'watch_topic_feed',
      WATCH_SECTION_SEE_ALL: 'watch_section_see_all',
      SOCIAL_PLAYER_FROM_VIDEO_HOME: 'social_player_from_video_home',
      WNS: 'wns',
      EXPLORE_FEED_DEEP_DIVE: 'explore_feed_deep_dive',
      VOYAGER: 'voyager',
    });
  },
  null
);
__d(
  'PerfUtils',
  ['React', 'performanceNow', 'PerfHelperUtils'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = b('React').Component,
      h = b('PerfHelperUtils').SlowBootloadBorder;
    function a(a, c, d) {
      __p && __p();
      var e;
      e = babelHelpers.inherits(f, g);
      e && e.prototype;
      f.prototype.componentDidMount = function () {
        c();
      };
      f.prototype.render = function () {
        if (d)
          return b('React').createElement(
            a,
            babelHelpers['extends']({}, this.props, { ref: d })
          );
        else return b('React').createElement(a, this.props);
      };
      function f() {
        e.apply(this, arguments);
      }
      return f;
    }
    function c(a, c, d) {
      __p && __p();
      var e,
        f = 1e4;
      d = b('performanceNow')() - d;
      if (d < f) return a;
      var i = f / 1e3,
        j = Math.round(d) / 1e3;
      e = babelHelpers.inherits(k, g);
      e && e.prototype;
      k.prototype.componentDidMount = function () {
        !1;
      };
      k.prototype.render = function () {
        return b('React').createElement(
          h,
          { moduleId: c, timeLimitSecs: i, timeSpentSecs: j },
          b('React').createElement(a, this.props)
        );
      };
      function k() {
        e.apply(this, arguments);
      }
      return k;
    }
    d = { appendListener: a, markRedInDev: c };
    e.exports = d;
  },
  null
);
__d(
  'BootloadedComponent.react',
  [
    'invariant',
    'DeferredComponent.react',
    'JSResource',
    'PerfUtils',
    'Placeholder.react',
    'React',
    'TimeSlice',
    'gkx',
    'lazyLoadComponent',
    'performanceNow',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h, i, j;
    f = b('React').Component;
    var k = b('PerfUtils').appendListener,
      l = b('PerfUtils').markRedInDev;
    l = b('gkx')(
      'AT4ur5VkalbLDRYfOhgfyfeh-Q226-tyC5XityoZgsXc4PYiJdsTiv6XvQmBWMW1Qt9QQG1jWng0teg3J00ZZ6fS'
    );
    h = babelHelpers.inherits(a, f);
    h && h.prototype;
    a.create = function (a) {
      __p && __p();
      var c;
      c = babelHelpers.inherits(d, b('React').Component);
      c && c.prototype;
      d.prototype.render = function () {
        var c = this.props;
        c.bootloadLoader;
        c = babelHelpers.objectWithoutProperties(c, ['bootloadLoader']);
        return b('React').createElement(
          m,
          babelHelpers['extends'](
            {
              bootloadLoader: a,
              bootloadPlaceholder: b('React').createElement('div', null),
            },
            c
          )
        );
      };
      function d() {
        c.apply(this, arguments);
      }
      d.displayName = 'BootloadedComponent(' + a.getModuleId() + ')';
      return d;
    };
    function a() {
      h.apply(this, arguments);
    }
    f = babelHelpers.inherits(c, a);
    i = f && f.prototype;
    function c(a) {
      i.constructor.call(this, a);
      this.$SuspenseBootloadedComponent1 = null;
      a.onBootloaderWillMount && a.onBootloaderWillMount();
      var c = a.isContinuation
        ? b('TimeSlice').PropagationType.CONTINUATION
        : b('TimeSlice').PropagationType.EXECUTION;
      c = b('TimeSlice').guard(
        b('lazyLoadComponent'),
        'Use lazyLoadComponent to load the module',
        { propagationType: c }
      );
      c = c(a.bootloadLoader);
      this.$SuspenseBootloadedComponent1 = a.onComponentDidMount
        ? k(c, a.onComponentDidMount)
        : c;
    }
    c.prototype.render = function () {
      __p && __p();
      var a = this.props,
        c = a.bootloadLoader,
        d = a.bootloadPlaceholder,
        e = a.bootloadForcePlaceholder;
      a.isContinuation;
      a.onComponentDidMount;
      a = babelHelpers.objectWithoutProperties(a, [
        'bootloadLoader',
        'bootloadPlaceholder',
        'bootloadForcePlaceholder',
        'isContinuation',
        'onComponentDidMount',
      ]);
      var f = this.$SuspenseBootloadedComponent1;
      if (e === !0) return d;
      f != null || g(0, undefined, c.getModuleId());
      return b('React').createElement(
        b('Placeholder.react'),
        { fallback: d },
        b('React').createElement(f, a)
      );
    };
    f = babelHelpers.inherits(d, a);
    j = f && f.prototype;
    function d(a) {
      j.constructor.call(this, a),
        (this.$BootloadedComponent1 = function (a) {
          var c = this.props.isContinuation,
            d;
          c = c
            ? b('TimeSlice').PropagationType.CONTINUATION
            : b('TimeSlice').PropagationType.EXECUTION;
          b('TimeSlice').guard(
            b('JSResource').loadAll,
            'BootloadedComponent load all JSResource',
            { propagationType: c }
          )(
            [this.props.bootloadLoader],
            function (b) {
              (b = this.props.onComponentDidMount
                ? k(b, this.props.onComponentDidMount)
                : b),
                a(b);
            }.bind(this)
          );
        }.bind(this)),
        a.onBootloaderWillMount && a.onBootloaderWillMount();
    }
    d.prototype.render = function () {
      var a = this.props;
      a.bootloadLoader;
      a.isContinuation;
      var c = a.bootloadPlaceholder,
        d = a.bootloadForcePlaceholder;
      a = babelHelpers.objectWithoutProperties(a, [
        'bootloadLoader',
        'isContinuation',
        'bootloadPlaceholder',
        'bootloadForcePlaceholder',
      ]);
      return b('React').createElement(
        b('DeferredComponent.react'),
        babelHelpers['extends'](
          {
            deferredPlaceholder: c,
            deferredComponent: this.$BootloadedComponent1,
            deferredForcePlaceholder: d,
          },
          a
        )
      );
    };
    d.defaultProps = { isContinuation: !0 };
    var m = l ? c : d;
    e.exports = m;
  },
  null
);
__d(
  'VideoFBIconControl.react',
  [
    'ix',
    'cx',
    'fbt',
    'AbstractButton.react',
    'Image.react',
    'React',
    'TooltipData',
    'URI',
    'VideoPlayerExperiments',
    'asset',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    __p && __p();
    var j,
      k = 2;
    c = babelHelpers.inherits(a, b('React').Component);
    j = c && c.prototype;
    function a(a) {
      j.constructor.call(this, a), (this.state = { iconColor: 'white' });
    }
    a.prototype.onMouseOut = function (a) {
      this.setState({ iconColor: 'white' });
    };
    a.prototype.onMouseOver = function (a) {
      this.setState({ iconColor: 'blue' });
    };
    a.prototype.$1 = function () {
      return new (b('URI'))(this.props.permalinkURL).addQueryData(
        't',
        Math.max(0, Math.floor(this.props.playbackPosTimestamp) - k)
      );
    };
    a.prototype.render = function () {
      var a = this.state.iconColor === 'blue' ? g('390907') : g('390910'),
        c = null;
      c = b('React').createElement(b('Image.react'), {
        className: '_rwt',
        src: a,
      });
      a = b('VideoPlayerExperiments').embeddedPlayerEnhancements
        ? this.$1()
        : this.props.permalinkURL;
      return b('React').createElement(
        b('AbstractButton.react'),
        babelHelpers['extends'](
          {},
          b('TooltipData').propsFor(this.props.label, 'above'),
          {
            className: '_zbd',
            href: a,
            image: c,
            label: this.props.label,
            labelIsHidden: this.props.labelIsHidden,
            onMouseOut: this.onMouseOut.bind(this),
            onMouseOver: this.onMouseOver.bind(this),
            ref: 'button',
            tabIndex: '0',
            target: '_blank',
            type: 'button',
          }
        )
      );
    };
    a.defaultProps = {
      label: i._('Click to watch on Facebook'),
      labelIsHidden: !0,
    };
    e.exports = a;
  },
  null
);
__d(
  'VideoWebDriverIDs',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      FEED_VIDEO: 'feed_video',
      FULLSCREEN_CONTROL: 'fullscreen_control',
      MUTE_UNMUTE_CONTROL: 'mute_unmute_control',
      PLAY_PAUSE_CONTROL: 'play_pause_control',
      WNS_CONTROL: 'wns_control',
      REPLAY_CONTROL: 'replay_control',
      CTA_BUTTON: 'video_cta',
    });
  },
  null
);
__d(
  'shallowEqual',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = Object.prototype.hasOwnProperty;
    function h(a, b) {
      if (a === b) return a !== 0 || b !== 0 || 1 / a === 1 / b;
      else return a !== a && b !== b;
    }
    function a(a, b) {
      __p && __p();
      if (h(a, b)) return !0;
      if (
        typeof a !== 'object' ||
        a === null ||
        typeof b !== 'object' ||
        b === null
      )
        return !1;
      var c = Object.keys(a),
        d = Object.keys(b);
      if (c.length !== d.length) return !1;
      for (var d = 0; d < c.length; d++)
        if (!g.call(b, c[d]) || !h(a[c[d]], b[c[d]])) return !1;
      return !0;
    }
    e.exports = a;
  },
  null
);
__d(
  'fbjs/lib/shallowEqual',
  ['shallowEqual'],
  function (a, b, c, d, e, f) {
    e.exports = b('shallowEqual');
  },
  null
);
__d(
  'shallowCompare',
  ['fbjs/lib/shallowEqual'],
  function (a, b, c, d, e, f) {
    function a(a, c, d) {
      return (
        !b('fbjs/lib/shallowEqual')(a.props, c) ||
        !b('fbjs/lib/shallowEqual')(a.state, d)
      );
    }
    e.exports = a;
  },
  null
);
__d(
  'VideoFullscreenControl.react',
  [
    'ix',
    'cx',
    'fbt',
    'AbstractVideoFullscreenControl.react',
    'Image.react',
    'React',
    'ReactDOM',
    'VideoPlayerExperiments',
    'VideoWebDriverIDs',
    'asset',
    'shallowCompare',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    __p && __p();
    var j;
    c = b('React').PropTypes;
    j = babelHelpers.inherits(a, b('React').Component);
    j && j.prototype;
    a.prototype.shouldComponentUpdate = function (a, c) {
      return b('shallowCompare')(this, a, c);
    };
    a.prototype.onMouseOut = function (a) {
      b('ReactDOM').findDOMNode(this.refs.button).blur();
    };
    a.prototype.render = function () {
      var a;
      !b('VideoPlayerExperiments').fourArrowFullScreen
        ? (a = this.props.isFullscreen ? g('463022') : g('407577'))
        : (a = this.props.isFullscreen ? g('463031') : g('412613'));
      a = b('React').createElement(b('Image.react'), {
        className: '_rwt',
        src: a,
      });
      var c = this.props.isFullscreen
        ? i._('Exit Fullscreen')
        : i._('Enter Fullscreen');
      return b('React').createElement(
        b('AbstractVideoFullscreenControl.react'),
        babelHelpers['extends']({}, this.props, {
          className: '_zbd _39ip',
          'data-testid': b('VideoWebDriverIDs').FULLSCREEN_CONTROL,
          disabled: this.props.disabled,
          image: a,
          onMouseOut: this.onMouseOut.bind(this),
          ref: 'button',
          tabIndex: this.props.tabIndex,
          type: 'button',
          label: c,
          labelIsHidden: !0,
        })
      );
    };
    function a() {
      j.apply(this, arguments);
    }
    a.propTypes = {
      isFullscreen: c.bool,
      onToggleFullscreen: c.func,
      tabIndex: c.string,
    };
    e.exports = a;
  },
  null
);
__d(
  'Tahoe',
  [],
  function (a, b, c, d, e, f) {
    var g = null;
    a = {
      get: function () {
        return g;
      },
      set: function (a) {
        g = a;
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'TahoeConstants',
  ['CurrentUser'],
  function (a, b, c, d, e, f) {
    a = {
      MIN_PLAYER_WIDTH: 640,
      MIN_PLAYER_HEIGHT: 360,
      MAX_PLAYER_HEIGHT: 1e3,
      MIN_BOTTOM_PANE_HEIGHT: 160,
      SIDE_PANE_WIDTH: 400,
      BLUE_BAR_HEIGHT: b('CurrentUser').isLoggedIn() ? 49 : 0,
      DEFAULT_BROWSER_TITLE: 'Facebook',
      UP_NEXT_UNIT_ID_PREFIX: 'video-up-next-',
    };
    e.exports = a;
  },
  null
);
/**
 * License: https://www.facebook.com/legal/license/MDzNl_j9yvg/
 */
__d(
  'lodash-4.17.5',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    b = {};
    var g = { exports: b };
    function h() {
      function a() {
        (this.__data__ = []), (this.size = 0);
      }
      g.exports = a;
    }
    var i = !1,
      j = function () {
        i || ((i = !0), h());
        return g.exports;
      };
    c = {};
    var k = { exports: c };
    function l() {
      function a(a, b) {
        return a === b || (a !== a && b !== b);
      }
      k.exports = a;
    }
    var m = !1,
      n = function () {
        m || ((m = !0), l());
        return k.exports;
      };
    d = {};
    var o = { exports: d };
    function p() {
      var a = n();
      function b(b, c) {
        var d = b.length;
        while (d--) if (a(b[d][0], c)) return d;
        return -1;
      }
      o.exports = b;
    }
    var q = !1,
      r = function () {
        q || ((q = !0), p());
        return o.exports;
      };
    f = {};
    var s = { exports: f };
    function t() {
      __p && __p();
      var a = r(),
        b = Array.prototype,
        c = b.splice;
      function d(b) {
        var d = this.__data__;
        b = a(d, b);
        if (b < 0) return !1;
        var e = d.length - 1;
        b == e ? d.pop() : c.call(d, b, 1);
        --this.size;
        return !0;
      }
      s.exports = d;
    }
    var u = !1,
      v = function () {
        u || ((u = !0), t());
        return s.exports;
      };
    b = {};
    var w = { exports: b };
    function x() {
      var a = r();
      function b(b) {
        var c = this.__data__;
        b = a(c, b);
        return b < 0 ? undefined : c[b][1];
      }
      w.exports = b;
    }
    var y = !1,
      z = function () {
        y || ((y = !0), x());
        return w.exports;
      };
    c = {};
    var A = { exports: c };
    function B() {
      var a = r();
      function b(b) {
        return a(this.__data__, b) > -1;
      }
      A.exports = b;
    }
    var C = !1,
      aa = function () {
        C || ((C = !0), B());
        return A.exports;
      };
    d = {};
    var ba = { exports: d };
    function ca() {
      var a = r();
      function b(b, c) {
        var d = this.__data__,
          e = a(d, b);
        e < 0 ? (++this.size, d.push([b, c])) : (d[e][1] = c);
        return this;
      }
      ba.exports = b;
    }
    var da = !1,
      ea = function () {
        da || ((da = !0), ca());
        return ba.exports;
      };
    f = {};
    var fa = { exports: f };
    function ga() {
      __p && __p();
      var a = j(),
        b = v(),
        c = z(),
        d = aa(),
        e = ea();
      function f(a) {
        var b = -1,
          c = a == null ? 0 : a.length;
        this.clear();
        while (++b < c) {
          var d = a[b];
          this.set(d[0], d[1]);
        }
      }
      f.prototype.clear = a;
      f.prototype['delete'] = b;
      f.prototype.get = c;
      f.prototype.has = d;
      f.prototype.set = e;
      fa.exports = f;
    }
    var ha = !1,
      D = function () {
        ha || ((ha = !0), ga());
        return fa.exports;
      };
    b = {};
    var ia = { exports: b };
    function ja() {
      var a = D();
      function b() {
        (this.__data__ = new a()), (this.size = 0);
      }
      ia.exports = b;
    }
    var ka = !1,
      la = function () {
        ka || ((ka = !0), ja());
        return ia.exports;
      };
    c = {};
    var ma = { exports: c };
    function na() {
      function a(a) {
        var b = this.__data__;
        a = b['delete'](a);
        this.size = b.size;
        return a;
      }
      ma.exports = a;
    }
    var oa = !1,
      pa = function () {
        oa || ((oa = !0), na());
        return ma.exports;
      };
    d = {};
    var qa = { exports: d };
    function ra() {
      function a(a) {
        return this.__data__.get(a);
      }
      qa.exports = a;
    }
    var sa = !1,
      ta = function () {
        sa || ((sa = !0), ra());
        return qa.exports;
      };
    f = {};
    var ua = { exports: f };
    function va() {
      function a(a) {
        return this.__data__.has(a);
      }
      ua.exports = a;
    }
    var wa = !1,
      xa = function () {
        wa || ((wa = !0), va());
        return ua.exports;
      };
    b = {};
    var ya = { exports: b };
    function za() {
      var b = typeof a == 'object' && a && a.Object === Object && a;
      ya.exports = b;
    }
    var Aa = !1,
      Ba = function () {
        Aa || ((Aa = !0), za());
        return ya.exports;
      };
    c = {};
    var Ca = { exports: c };
    function Da() {
      var a = Ba(),
        b = typeof self == 'object' && self && self.Object === Object && self;
      a = a || b || Function('return this')();
      Ca.exports = a;
    }
    var Ea = !1,
      E = function () {
        Ea || ((Ea = !0), Da());
        return Ca.exports;
      };
    d = {};
    var Fa = { exports: d };
    function Ga() {
      var a = E();
      a = a.Symbol;
      Fa.exports = a;
    }
    var Ha = !1,
      F = function () {
        Ha || ((Ha = !0), Ga());
        return Fa.exports;
      };
    f = {};
    var Ia = { exports: f };
    function Ja() {
      __p && __p();
      var a = F(),
        b = Object.prototype,
        c = b.hasOwnProperty,
        d = b.toString,
        e = a ? a.toStringTag : undefined;
      function f(a) {
        var b = c.call(a, e),
          f = a[e];
        try {
          a[e] = undefined;
          var g = !0;
        } catch (a) {}
        var h = d.call(a);
        g && (b ? (a[e] = f) : delete a[e]);
        return h;
      }
      Ia.exports = f;
    }
    var Ka = !1,
      La = function () {
        Ka || ((Ka = !0), Ja());
        return Ia.exports;
      };
    b = {};
    var Ma = { exports: b };
    function Na() {
      var a = Object.prototype,
        b = a.toString;
      function c(a) {
        return b.call(a);
      }
      Ma.exports = c;
    }
    var Oa = !1,
      Pa = function () {
        Oa || ((Oa = !0), Na());
        return Ma.exports;
      };
    c = {};
    var Qa = { exports: c };
    function Ra() {
      var a = F(),
        b = La(),
        c = Pa(),
        d = '[object Null]',
        e = '[object Undefined]',
        f = a ? a.toStringTag : undefined;
      function g(a) {
        return a == null
          ? a === undefined
            ? e
            : d
          : f && f in Object(a)
          ? b(a)
          : c(a);
      }
      Qa.exports = g;
    }
    var Sa = !1,
      G = function () {
        Sa || ((Sa = !0), Ra());
        return Qa.exports;
      };
    d = {};
    var Ta = { exports: d };
    function Ua() {
      function a(a) {
        var b = typeof a;
        return a != null && (b == 'object' || b == 'function');
      }
      Ta.exports = a;
    }
    var Va = !1,
      H = function () {
        Va || ((Va = !0), Ua());
        return Ta.exports;
      };
    f = {};
    var Wa = { exports: f };
    function Xa() {
      var a = G(),
        b = H(),
        c = '[object AsyncFunction]',
        d = '[object Function]',
        e = '[object GeneratorFunction]',
        f = '[object Proxy]';
      function g(g) {
        if (!b(g)) return !1;
        g = a(g);
        return g == d || g == e || g == c || g == f;
      }
      Wa.exports = g;
    }
    var Ya = !1,
      Za = function () {
        Ya || ((Ya = !0), Xa());
        return Wa.exports;
      };
    b = {};
    var $a = { exports: b };
    function ab() {
      var a = E();
      a = a['__core-js_shared__'];
      $a.exports = a;
    }
    var bb = !1,
      cb = function () {
        bb || ((bb = !0), ab());
        return $a.exports;
      };
    c = {};
    var db = { exports: c };
    function eb() {
      var a = cb(),
        b = (function () {
          var b = /[^.]+$/.exec((a && a.keys && a.keys.IE_PROTO) || '');
          return b ? 'Symbol(src)_1.' + b : '';
        })();
      function c(a) {
        return !!b && b in a;
      }
      db.exports = c;
    }
    var fb = !1,
      gb = function () {
        fb || ((fb = !0), eb());
        return db.exports;
      };
    d = {};
    var hb = { exports: d };
    function ib() {
      __p && __p();
      var a = Function.prototype,
        b = a.toString;
      function c(a) {
        if (a != null) {
          try {
            return b.call(a);
          } catch (a) {}
          try {
            return a + '';
          } catch (a) {}
        }
        return '';
      }
      hb.exports = c;
    }
    var jb = !1,
      kb = function () {
        jb || ((jb = !0), ib());
        return hb.exports;
      };
    f = {};
    var lb = { exports: f };
    function mb() {
      __p && __p();
      var a = Za(),
        b = gb(),
        c = H(),
        d = kb(),
        e = /[\\^$.*+?()[\]{}|]/g,
        f = /^\[object .+?Constructor\]$/,
        g = Function.prototype,
        h = Object.prototype;
      g = g.toString;
      h = h.hasOwnProperty;
      var i = RegExp(
        '^' +
          g
            .call(h)
            .replace(e, '\\$&')
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              '$1.*?'
            ) +
          '$'
      );
      function j(e) {
        if (!c(e) || b(e)) return !1;
        var g = a(e) ? i : f;
        return g.test(d(e));
      }
      lb.exports = j;
    }
    var nb = !1,
      ob = function () {
        nb || ((nb = !0), mb());
        return lb.exports;
      };
    b = {};
    var pb = { exports: b };
    function qb() {
      function a(a, b) {
        return a == null ? undefined : a[b];
      }
      pb.exports = a;
    }
    var rb = !1,
      sb = function () {
        rb || ((rb = !0), qb());
        return pb.exports;
      };
    c = {};
    var tb = { exports: c };
    function ub() {
      var a = ob(),
        b = sb();
      function c(c, d) {
        c = b(c, d);
        return a(c) ? c : undefined;
      }
      tb.exports = c;
    }
    var vb = !1,
      I = function () {
        vb || ((vb = !0), ub());
        return tb.exports;
      };
    d = {};
    var wb = { exports: d };
    function xb() {
      var a = I(),
        b = E();
      a = a(b, 'Map');
      wb.exports = a;
    }
    var yb = !1,
      J = function () {
        yb || ((yb = !0), xb());
        return wb.exports;
      };
    f = {};
    var zb = { exports: f };
    function Ab() {
      var a = I();
      a = a(Object, 'create');
      zb.exports = a;
    }
    var Bb = !1,
      K = function () {
        Bb || ((Bb = !0), Ab());
        return zb.exports;
      };
    b = {};
    var Cb = { exports: b };
    function Db() {
      var a = K();
      function b() {
        (this.__data__ = a ? a(null) : {}), (this.size = 0);
      }
      Cb.exports = b;
    }
    var Eb = !1,
      Fb = function () {
        Eb || ((Eb = !0), Db());
        return Cb.exports;
      };
    c = {};
    var Gb = { exports: c };
    function Hb() {
      function a(a) {
        a = this.has(a) && delete this.__data__[a];
        this.size -= a ? 1 : 0;
        return a;
      }
      Gb.exports = a;
    }
    var Ib = !1,
      Jb = function () {
        Ib || ((Ib = !0), Hb());
        return Gb.exports;
      };
    d = {};
    var Kb = { exports: d };
    function Lb() {
      var a = K(),
        b = '__lodash_hash_undefined__',
        c = Object.prototype,
        d = c.hasOwnProperty;
      function e(c) {
        var e = this.__data__;
        if (a) {
          var f = e[c];
          return f === b ? undefined : f;
        }
        return d.call(e, c) ? e[c] : undefined;
      }
      Kb.exports = e;
    }
    var Mb = !1,
      Nb = function () {
        Mb || ((Mb = !0), Lb());
        return Kb.exports;
      };
    f = {};
    var Ob = { exports: f };
    function Pb() {
      var a = K(),
        b = Object.prototype,
        c = b.hasOwnProperty;
      function d(b) {
        var d = this.__data__;
        return a ? d[b] !== undefined : c.call(d, b);
      }
      Ob.exports = d;
    }
    var Qb = !1,
      Rb = function () {
        Qb || ((Qb = !0), Pb());
        return Ob.exports;
      };
    b = {};
    var Sb = { exports: b };
    function Tb() {
      var a = K(),
        b = '__lodash_hash_undefined__';
      function c(c, d) {
        var e = this.__data__;
        this.size += this.has(c) ? 0 : 1;
        e[c] = a && d === undefined ? b : d;
        return this;
      }
      Sb.exports = c;
    }
    var Ub = !1,
      Vb = function () {
        Ub || ((Ub = !0), Tb());
        return Sb.exports;
      };
    c = {};
    var Wb = { exports: c };
    function Xb() {
      __p && __p();
      var a = Fb(),
        b = Jb(),
        c = Nb(),
        d = Rb(),
        e = Vb();
      function f(a) {
        var b = -1,
          c = a == null ? 0 : a.length;
        this.clear();
        while (++b < c) {
          var d = a[b];
          this.set(d[0], d[1]);
        }
      }
      f.prototype.clear = a;
      f.prototype['delete'] = b;
      f.prototype.get = c;
      f.prototype.has = d;
      f.prototype.set = e;
      Wb.exports = f;
    }
    var Yb = !1,
      Zb = function () {
        Yb || ((Yb = !0), Xb());
        return Wb.exports;
      };
    d = {};
    var $b = { exports: d };
    function ac() {
      var a = Zb(),
        b = D(),
        c = J();
      function d() {
        (this.size = 0),
          (this.__data__ = {
            hash: new a(),
            map: new (c || b)(),
            string: new a(),
          });
      }
      $b.exports = d;
    }
    var bc = !1,
      cc = function () {
        bc || ((bc = !0), ac());
        return $b.exports;
      };
    f = {};
    var dc = { exports: f };
    function ec() {
      function a(a) {
        var b = typeof a;
        return b == 'string' || b == 'number' || b == 'symbol' || b == 'boolean'
          ? a !== '__proto__'
          : a === null;
      }
      dc.exports = a;
    }
    var fc = !1,
      gc = function () {
        fc || ((fc = !0), ec());
        return dc.exports;
      };
    b = {};
    var hc = { exports: b };
    function ic() {
      var a = gc();
      function b(b, c) {
        b = b.__data__;
        return a(c) ? b[typeof c == 'string' ? 'string' : 'hash'] : b.map;
      }
      hc.exports = b;
    }
    var jc = !1,
      L = function () {
        jc || ((jc = !0), ic());
        return hc.exports;
      };
    c = {};
    var kc = { exports: c };
    function lc() {
      var a = L();
      function b(b) {
        b = a(this, b)['delete'](b);
        this.size -= b ? 1 : 0;
        return b;
      }
      kc.exports = b;
    }
    var mc = !1,
      nc = function () {
        mc || ((mc = !0), lc());
        return kc.exports;
      };
    d = {};
    var oc = { exports: d };
    function pc() {
      var a = L();
      function b(b) {
        return a(this, b).get(b);
      }
      oc.exports = b;
    }
    var qc = !1,
      rc = function () {
        qc || ((qc = !0), pc());
        return oc.exports;
      };
    f = {};
    var sc = { exports: f };
    function tc() {
      var a = L();
      function b(b) {
        return a(this, b).has(b);
      }
      sc.exports = b;
    }
    var uc = !1,
      vc = function () {
        uc || ((uc = !0), tc());
        return sc.exports;
      };
    b = {};
    var wc = { exports: b };
    function xc() {
      var a = L();
      function b(b, c) {
        var d = a(this, b),
          e = d.size;
        d.set(b, c);
        this.size += d.size == e ? 0 : 1;
        return this;
      }
      wc.exports = b;
    }
    var yc = !1,
      zc = function () {
        yc || ((yc = !0), xc());
        return wc.exports;
      };
    c = {};
    var Ac = { exports: c };
    function Bc() {
      __p && __p();
      var a = cc(),
        b = nc(),
        c = rc(),
        d = vc(),
        e = zc();
      function f(a) {
        var b = -1,
          c = a == null ? 0 : a.length;
        this.clear();
        while (++b < c) {
          var d = a[b];
          this.set(d[0], d[1]);
        }
      }
      f.prototype.clear = a;
      f.prototype['delete'] = b;
      f.prototype.get = c;
      f.prototype.has = d;
      f.prototype.set = e;
      Ac.exports = f;
    }
    var Cc = !1,
      M = function () {
        Cc || ((Cc = !0), Bc());
        return Ac.exports;
      };
    d = {};
    var Dc = { exports: d };
    function Ec() {
      __p && __p();
      var a = D(),
        b = J(),
        c = M(),
        d = 200;
      function e(e, f) {
        __p && __p();
        var g = this.__data__;
        if (g instanceof a) {
          var h = g.__data__;
          if (!b || h.length < d - 1) {
            h.push([e, f]);
            this.size = ++g.size;
            return this;
          }
          g = this.__data__ = new c(h);
        }
        g.set(e, f);
        this.size = g.size;
        return this;
      }
      Dc.exports = e;
    }
    var Fc = !1,
      Gc = function () {
        Fc || ((Fc = !0), Ec());
        return Dc.exports;
      };
    f = {};
    var Hc = { exports: f };
    function Ic() {
      __p && __p();
      var a = D(),
        b = la(),
        c = pa(),
        d = ta(),
        e = xa(),
        f = Gc();
      function g(b) {
        b = this.__data__ = new a(b);
        this.size = b.size;
      }
      g.prototype.clear = b;
      g.prototype['delete'] = c;
      g.prototype.get = d;
      g.prototype.has = e;
      g.prototype.set = f;
      Hc.exports = g;
    }
    var Jc = !1,
      Kc = function () {
        Jc || ((Jc = !0), Ic());
        return Hc.exports;
      };
    b = {};
    var Lc = { exports: b };
    function Mc() {
      var a = '__lodash_hash_undefined__';
      function b(b) {
        this.__data__.set(b, a);
        return this;
      }
      Lc.exports = b;
    }
    var Nc = !1,
      Oc = function () {
        Nc || ((Nc = !0), Mc());
        return Lc.exports;
      };
    c = {};
    var Pc = { exports: c };
    function Qc() {
      function a(a) {
        return this.__data__.has(a);
      }
      Pc.exports = a;
    }
    var Rc = !1,
      Sc = function () {
        Rc || ((Rc = !0), Qc());
        return Pc.exports;
      };
    d = {};
    var Tc = { exports: d };
    function Uc() {
      var a = M(),
        b = Oc(),
        c = Sc();
      function d(b) {
        var c = -1,
          d = b == null ? 0 : b.length;
        this.__data__ = new a();
        while (++c < d) this.add(b[c]);
      }
      d.prototype.add = d.prototype.push = b;
      d.prototype.has = c;
      Tc.exports = d;
    }
    var Vc = !1,
      Wc = function () {
        Vc || ((Vc = !0), Uc());
        return Tc.exports;
      };
    f = {};
    var Xc = { exports: f };
    function Yc() {
      function a(a, b) {
        var c = -1,
          d = a == null ? 0 : a.length;
        while (++c < d) if (b(a[c], c, a)) return !0;
        return !1;
      }
      Xc.exports = a;
    }
    var Zc = !1,
      $c = function () {
        Zc || ((Zc = !0), Yc());
        return Xc.exports;
      };
    b = {};
    var ad = { exports: b };
    function bd() {
      function a(a, b) {
        return a.has(b);
      }
      ad.exports = a;
    }
    var cd = !1,
      dd = function () {
        cd || ((cd = !0), bd());
        return ad.exports;
      };
    c = {};
    var ed = { exports: c };
    function fd() {
      __p && __p();
      var a = Wc(),
        b = $c(),
        c = dd(),
        d = 1,
        e = 2;
      function f(f, g, h, i, j, k) {
        __p && __p();
        var l = h & d,
          m = f.length,
          n = g.length;
        if (m != n && !(l && n > m)) return !1;
        n = k.get(f);
        if (n && k.get(g)) return n == g;
        n = -1;
        var o = !0,
          p = h & e ? new a() : undefined;
        k.set(f, g);
        k.set(g, f);
        while (++n < m) {
          var q = f[n],
            r = g[n];
          if (i) var s = l ? i(r, q, n, g, f, k) : i(q, r, n, f, g, k);
          if (s !== undefined) {
            if (s) continue;
            o = !1;
            break;
          }
          if (p) {
            if (
              !b(g, function (a, b) {
                if (!c(p, b) && (q === a || j(q, a, h, i, k))) return p.push(b);
              })
            ) {
              o = !1;
              break;
            }
          } else if (!(q === r || j(q, r, h, i, k))) {
            o = !1;
            break;
          }
        }
        k['delete'](f);
        k['delete'](g);
        return o;
      }
      ed.exports = f;
    }
    var gd = !1,
      hd = function () {
        gd || ((gd = !0), fd());
        return ed.exports;
      };
    d = {};
    var id = { exports: d };
    function jd() {
      var a = E();
      a = a.Uint8Array;
      id.exports = a;
    }
    var kd = !1,
      ld = function () {
        kd || ((kd = !0), jd());
        return id.exports;
      };
    f = {};
    var md = { exports: f };
    function nd() {
      function a(a) {
        var b = -1,
          c = Array(a.size);
        a.forEach(function (a, d) {
          c[++b] = [d, a];
        });
        return c;
      }
      md.exports = a;
    }
    var od = !1,
      pd = function () {
        od || ((od = !0), nd());
        return md.exports;
      };
    b = {};
    var qd = { exports: b };
    function rd() {
      function a(a) {
        var b = -1,
          c = Array(a.size);
        a.forEach(function (a) {
          c[++b] = a;
        });
        return c;
      }
      qd.exports = a;
    }
    var sd = !1,
      td = function () {
        sd || ((sd = !0), rd());
        return qd.exports;
      };
    c = {};
    var ud = { exports: c };
    function vd() {
      __p && __p();
      var a = F(),
        b = ld(),
        c = n(),
        d = hd(),
        e = pd(),
        f = td(),
        g = 1,
        h = 2,
        i = '[object Boolean]',
        j = '[object Date]',
        k = '[object Error]',
        l = '[object Map]',
        m = '[object Number]',
        o = '[object RegExp]',
        p = '[object Set]',
        q = '[object String]',
        r = '[object Symbol]',
        s = '[object ArrayBuffer]',
        t = '[object DataView]';
      a = a ? a.prototype : undefined;
      var u = a ? a.valueOf : undefined;
      function v(a, n, v, w, x, y, z) {
        __p && __p();
        switch (v) {
          case t:
            if (a.byteLength != n.byteLength || a.byteOffset != n.byteOffset)
              return !1;
            a = a.buffer;
            n = n.buffer;
          case s:
            return a.byteLength != n.byteLength || !y(new b(a), new b(n))
              ? !1
              : !0;
          case i:
          case j:
          case m:
            return c(+a, +n);
          case k:
            return a.name == n.name && a.message == n.message;
          case o:
          case q:
            return a == n + '';
          case l:
            var A = e;
          case p:
            v = w & g;
            A || (A = f);
            if (a.size != n.size && !v) return !1;
            v = z.get(a);
            if (v) return v == n;
            w |= h;
            z.set(a, n);
            v = d(A(a), A(n), w, x, y, z);
            z['delete'](a);
            return v;
          case r:
            if (u) return u.call(a) == u.call(n);
        }
        return !1;
      }
      ud.exports = v;
    }
    var wd = !1,
      xd = function () {
        wd || ((wd = !0), vd());
        return ud.exports;
      };
    d = {};
    var yd = { exports: d };
    function zd() {
      function a(a, b) {
        var c = -1,
          d = b.length,
          e = a.length;
        while (++c < d) a[e + c] = b[c];
        return a;
      }
      yd.exports = a;
    }
    var Ad = !1,
      Bd = function () {
        Ad || ((Ad = !0), zd());
        return yd.exports;
      };
    f = {};
    var Cd = { exports: f };
    function Dd() {
      var a = Array.isArray;
      Cd.exports = a;
    }
    var Ed = !1,
      N = function () {
        Ed || ((Ed = !0), Dd());
        return Cd.exports;
      };
    b = {};
    var Fd = { exports: b };
    function Gd() {
      var a = Bd(),
        b = N();
      function c(c, d, e) {
        d = d(c);
        return b(c) ? d : a(d, e(c));
      }
      Fd.exports = c;
    }
    var Hd = !1,
      Id = function () {
        Hd || ((Hd = !0), Gd());
        return Fd.exports;
      };
    c = {};
    var Jd = { exports: c };
    function Kd() {
      function a(a, b) {
        var c = -1,
          d = a == null ? 0 : a.length,
          e = 0,
          f = [];
        while (++c < d) {
          var g = a[c];
          b(g, c, a) && (f[e++] = g);
        }
        return f;
      }
      Jd.exports = a;
    }
    var Ld = !1,
      Md = function () {
        Ld || ((Ld = !0), Kd());
        return Jd.exports;
      };
    d = {};
    var Nd = { exports: d };
    function Od() {
      function a() {
        return [];
      }
      Nd.exports = a;
    }
    var Pd = !1,
      Qd = function () {
        Pd || ((Pd = !0), Od());
        return Nd.exports;
      };
    f = {};
    var Rd = { exports: f };
    function Sd() {
      var a = Md(),
        b = Qd(),
        c = Object.prototype,
        d = c.propertyIsEnumerable,
        e = Object.getOwnPropertySymbols;
      c = e
        ? function (b) {
            if (b == null) return [];
            b = Object(b);
            return a(e(b), function (a) {
              return d.call(b, a);
            });
          }
        : b;
      Rd.exports = c;
    }
    var Td = !1,
      Ud = function () {
        Td || ((Td = !0), Sd());
        return Rd.exports;
      };
    b = {};
    var Vd = { exports: b };
    function Wd() {
      function a(a, b) {
        var c = -1,
          d = Array(a);
        while (++c < a) d[c] = b(c);
        return d;
      }
      Vd.exports = a;
    }
    var Xd = !1,
      Yd = function () {
        Xd || ((Xd = !0), Wd());
        return Vd.exports;
      };
    c = {};
    var Zd = { exports: c };
    function $d() {
      function a(a) {
        return a != null && typeof a == 'object';
      }
      Zd.exports = a;
    }
    var ae = !1,
      O = function () {
        ae || ((ae = !0), $d());
        return Zd.exports;
      };
    d = {};
    var be = { exports: d };
    function ce() {
      var a = G(),
        b = O(),
        c = '[object Arguments]';
      function d(d) {
        return b(d) && a(d) == c;
      }
      be.exports = d;
    }
    var de = !1,
      ee = function () {
        de || ((de = !0), ce());
        return be.exports;
      };
    f = {};
    var fe = { exports: f };
    function ge() {
      var a = ee(),
        b = O(),
        c = Object.prototype,
        d = c.hasOwnProperty,
        e = c.propertyIsEnumerable;
      c = a(
        (function () {
          return arguments;
        })()
      )
        ? a
        : function (a) {
            return b(a) && d.call(a, 'callee') && !e.call(a, 'callee');
          };
      fe.exports = c;
    }
    var he = !1,
      P = function () {
        he || ((he = !0), ge());
        return fe.exports;
      };
    b = {};
    var ie = { exports: b };
    function je() {
      function a() {
        return !1;
      }
      ie.exports = a;
    }
    var ke = !1,
      le = function () {
        ke || ((ke = !0), je());
        return ie.exports;
      },
      Q = {},
      R = { exports: Q };
    function me() {
      var a = E(),
        b = le(),
        c = typeof Q == 'object' && Q && !Q.nodeType && Q,
        d = c && typeof R == 'object' && R && !R.nodeType && R;
      d = d && d.exports === c;
      c = d ? a.Buffer : undefined;
      d = c ? c.isBuffer : undefined;
      a = d || b;
      R.exports = a;
    }
    var ne = !1,
      oe = function () {
        ne || ((ne = !0), me());
        return R.exports;
      };
    c = {};
    var pe = { exports: c };
    function qe() {
      var a = 9007199254740991,
        b = /^(?:0|[1-9]\d*)$/;
      function c(c, d) {
        var e = typeof c;
        d = d == null ? a : d;
        return (
          !!d &&
          (e == 'number' || (e != 'symbol' && b.test(c))) &&
          c > -1 &&
          c % 1 == 0 &&
          c < d
        );
      }
      pe.exports = c;
    }
    var re = !1,
      S = function () {
        re || ((re = !0), qe());
        return pe.exports;
      };
    d = {};
    var se = { exports: d };
    function te() {
      var a = 9007199254740991;
      function b(b) {
        return typeof b == 'number' && b > -1 && b % 1 == 0 && b <= a;
      }
      se.exports = b;
    }
    var ue = !1,
      T = function () {
        ue || ((ue = !0), te());
        return se.exports;
      };
    f = {};
    var ve = { exports: f };
    function we() {
      var a = G(),
        b = T(),
        c = O(),
        d = '[object Arguments]',
        e = '[object Array]',
        f = '[object Boolean]',
        g = '[object Date]',
        h = '[object Error]',
        i = '[object Function]',
        j = '[object Map]',
        k = '[object Number]',
        l = '[object Object]',
        m = '[object RegExp]',
        n = '[object Set]',
        o = '[object String]',
        p = '[object WeakMap]',
        q = '[object ArrayBuffer]',
        r = '[object DataView]',
        s = '[object Float32Array]',
        t = '[object Float64Array]',
        u = '[object Int8Array]',
        v = '[object Int16Array]',
        w = '[object Int32Array]',
        x = '[object Uint8Array]',
        y = '[object Uint8ClampedArray]',
        z = '[object Uint16Array]',
        A = '[object Uint32Array]',
        B = {};
      B[s] = B[t] = B[u] = B[v] = B[w] = B[x] = B[y] = B[z] = B[A] = !0;
      B[d] =
        B[e] =
        B[q] =
        B[f] =
        B[r] =
        B[g] =
        B[h] =
        B[i] =
        B[j] =
        B[k] =
        B[l] =
        B[m] =
        B[n] =
        B[o] =
        B[p] =
          !1;
      function C(d) {
        return c(d) && b(d.length) && !!B[a(d)];
      }
      ve.exports = C;
    }
    var xe = !1,
      ye = function () {
        xe || ((xe = !0), we());
        return ve.exports;
      };
    b = {};
    var ze = { exports: b };
    function Ae() {
      function a(a) {
        return function (b) {
          return a(b);
        };
      }
      ze.exports = a;
    }
    var Be = !1,
      Ce = function () {
        Be || ((Be = !0), Ae());
        return ze.exports;
      },
      U = {},
      V = { exports: U };
    function De() {
      var a = Ba(),
        b = typeof U == 'object' && U && !U.nodeType && U,
        c = b && typeof V == 'object' && V && !V.nodeType && V;
      c = c && c.exports === b;
      var d = c && a.process;
      b = (function () {
        try {
          return d && d.binding && d.binding('util');
        } catch (a) {}
      })();
      V.exports = b;
    }
    var Ee = !1,
      Fe = function () {
        Ee || ((Ee = !0), De());
        return V.exports;
      };
    c = {};
    var Ge = { exports: c };
    function He() {
      var a = ye(),
        b = Ce(),
        c = Fe();
      c = c && c.isTypedArray;
      b = c ? b(c) : a;
      Ge.exports = b;
    }
    var Ie = !1,
      Je = function () {
        Ie || ((Ie = !0), He());
        return Ge.exports;
      };
    d = {};
    var Ke = { exports: d };
    function Le() {
      __p && __p();
      var a = Yd(),
        b = P(),
        c = N(),
        d = oe(),
        e = S(),
        f = Je(),
        g = Object.prototype,
        h = g.hasOwnProperty;
      function i(g, i) {
        var j = c(g),
          k = !j && b(g),
          l = !j && !k && d(g),
          m = !j && !k && !l && f(g);
        j = j || k || l || m;
        k = j ? a(g.length, String) : [];
        var n = k.length;
        for (var o in g)
          (i || h.call(g, o)) &&
            !(
              j &&
              (o == 'length' ||
                (l && (o == 'offset' || o == 'parent')) ||
                (m &&
                  (o == 'buffer' || o == 'byteLength' || o == 'byteOffset')) ||
                e(o, n))
            ) &&
            k.push(o);
        return k;
      }
      Ke.exports = i;
    }
    var Me = !1,
      Ne = function () {
        Me || ((Me = !0), Le());
        return Ke.exports;
      };
    f = {};
    var Oe = { exports: f };
    function Pe() {
      var a = Object.prototype;
      function b(b) {
        var c = b && b.constructor;
        c = (typeof c == 'function' && c.prototype) || a;
        return b === c;
      }
      Oe.exports = b;
    }
    var Qe = !1,
      Re = function () {
        Qe || ((Qe = !0), Pe());
        return Oe.exports;
      };
    b = {};
    var Se = { exports: b };
    function Te() {
      function a(a, b) {
        return function (c) {
          return a(b(c));
        };
      }
      Se.exports = a;
    }
    var Ue = !1,
      Ve = function () {
        Ue || ((Ue = !0), Te());
        return Se.exports;
      };
    c = {};
    var We = { exports: c };
    function Xe() {
      var a = Ve();
      a = a(Object.keys, Object);
      We.exports = a;
    }
    var Ye = !1,
      Ze = function () {
        Ye || ((Ye = !0), Xe());
        return We.exports;
      };
    d = {};
    var $e = { exports: d };
    function af() {
      var a = Re(),
        b = Ze(),
        c = Object.prototype,
        d = c.hasOwnProperty;
      function e(c) {
        if (!a(c)) return b(c);
        var e = [];
        for (var f in Object(c))
          d.call(c, f) && f != 'constructor' && e.push(f);
        return e;
      }
      $e.exports = e;
    }
    var bf = !1,
      cf = function () {
        bf || ((bf = !0), af());
        return $e.exports;
      };
    f = {};
    var df = { exports: f };
    function ef() {
      var a = Za(),
        b = T();
      function c(c) {
        return c != null && b(c.length) && !a(c);
      }
      df.exports = c;
    }
    var ff = !1,
      W = function () {
        ff || ((ff = !0), ef());
        return df.exports;
      };
    b = {};
    var gf = { exports: b };
    function hf() {
      var a = Ne(),
        b = cf(),
        c = W();
      function d(d) {
        return c(d) ? a(d) : b(d);
      }
      gf.exports = d;
    }
    var jf = !1,
      X = function () {
        jf || ((jf = !0), hf());
        return gf.exports;
      };
    c = {};
    var kf = { exports: c };
    function lf() {
      var a = Id(),
        b = Ud(),
        c = X();
      function d(d) {
        return a(d, c, b);
      }
      kf.exports = d;
    }
    var mf = !1,
      nf = function () {
        mf || ((mf = !0), lf());
        return kf.exports;
      };
    d = {};
    var of = { exports: d };
    function pf() {
      __p && __p();
      var a = nf(),
        b = 1,
        c = Object.prototype,
        d = c.hasOwnProperty;
      function e(c, e, f, g, h, i) {
        __p && __p();
        var j = f & b,
          k = a(c),
          l = k.length,
          m = a(e);
        m = m.length;
        if (l != m && !j) return !1;
        m = l;
        while (m--) {
          var n = k[m];
          if (!(j ? n in e : d.call(e, n))) return !1;
        }
        var o = i.get(c);
        if (o && i.get(e)) return o == e;
        o = !0;
        i.set(c, e);
        i.set(e, c);
        var p = j;
        while (++m < l) {
          n = k[m];
          var q = c[n],
            r = e[n];
          if (g) var s = j ? g(r, q, n, e, c, i) : g(q, r, n, c, e, i);
          if (!(s === undefined ? q === r || h(q, r, f, g, i) : s)) {
            o = !1;
            break;
          }
          p || (p = n == 'constructor');
        }
        if (o && !p) {
          q = c.constructor;
          r = e.constructor;
          q != r &&
            'constructor' in c &&
            'constructor' in e &&
            !(
              typeof q == 'function' &&
              q instanceof q &&
              typeof r == 'function' &&
              r instanceof r
            ) &&
            (o = !1);
        }
        i['delete'](c);
        i['delete'](e);
        return o;
      }
      of.exports = e;
    }
    var qf = !1,
      rf = function () {
        qf || ((qf = !0), pf());
        return of.exports;
      };
    f = {};
    var sf = { exports: f };
    function tf() {
      var a = I(),
        b = E();
      a = a(b, 'DataView');
      sf.exports = a;
    }
    var uf = !1,
      vf = function () {
        uf || ((uf = !0), tf());
        return sf.exports;
      };
    b = {};
    var wf = { exports: b };
    function xf() {
      var a = I(),
        b = E();
      a = a(b, 'Promise');
      wf.exports = a;
    }
    var yf = !1,
      zf = function () {
        yf || ((yf = !0), xf());
        return wf.exports;
      };
    c = {};
    var Af = { exports: c };
    function Bf() {
      var a = I(),
        b = E();
      a = a(b, 'Set');
      Af.exports = a;
    }
    var Cf = !1,
      Df = function () {
        Cf || ((Cf = !0), Bf());
        return Af.exports;
      };
    d = {};
    var Ef = { exports: d };
    function Ff() {
      var a = I(),
        b = E();
      a = a(b, 'WeakMap');
      Ef.exports = a;
    }
    var Gf = !1,
      Hf = function () {
        Gf || ((Gf = !0), Ff());
        return Ef.exports;
      };
    f = {};
    var If = { exports: f };
    function Jf() {
      __p && __p();
      var a = vf(),
        b = J(),
        c = zf(),
        d = Df(),
        e = Hf(),
        f = G(),
        g = kb(),
        h = '[object Map]',
        i = '[object Object]',
        j = '[object Promise]',
        k = '[object Set]',
        l = '[object WeakMap]',
        m = '[object DataView]',
        n = g(a),
        o = g(b),
        p = g(c),
        q = g(d),
        r = g(e),
        s = f;
      ((a && s(new a(new ArrayBuffer(1))) != m) ||
        (b && s(new b()) != h) ||
        (c && s(c.resolve()) != j) ||
        (d && s(new d()) != k) ||
        (e && s(new e()) != l)) &&
        (s = function (a) {
          __p && __p();
          var b = f(a);
          a = b == i ? a.constructor : undefined;
          a = a ? g(a) : '';
          if (a)
            switch (a) {
              case n:
                return m;
              case o:
                return h;
              case p:
                return j;
              case q:
                return k;
              case r:
                return l;
            }
          return b;
        });
      If.exports = s;
    }
    var Kf = !1,
      Lf = function () {
        Kf || ((Kf = !0), Jf());
        return If.exports;
      };
    b = {};
    var Mf = { exports: b };
    function Nf() {
      __p && __p();
      var a = Kc(),
        b = hd(),
        c = xd(),
        d = rf(),
        e = Lf(),
        f = N(),
        g = oe(),
        h = Je(),
        i = 1,
        j = '[object Arguments]',
        k = '[object Array]',
        l = '[object Object]',
        m = Object.prototype,
        n = m.hasOwnProperty;
      function o(m, o, p, q, r, s) {
        __p && __p();
        var t = f(m),
          u = f(o),
          v = t ? k : e(m);
        u = u ? k : e(o);
        v = v == j ? l : v;
        u = u == j ? l : u;
        var w = v == l,
          x = u == l;
        u = v == u;
        if (u && g(m)) {
          if (!g(o)) return !1;
          t = !0;
          w = !1;
        }
        if (u && !w) {
          s || (s = new a());
          return t || h(m) ? b(m, o, p, q, r, s) : c(m, o, v, p, q, r, s);
        }
        if (!(p & i)) {
          t = w && n.call(m, '__wrapped__');
          v = x && n.call(o, '__wrapped__');
          if (t || v) {
            w = t ? m.value() : m;
            x = v ? o.value() : o;
            s || (s = new a());
            return r(w, x, p, q, s);
          }
        }
        if (!u) return !1;
        s || (s = new a());
        return d(m, o, p, q, r, s);
      }
      Mf.exports = o;
    }
    var Of = !1,
      Pf = function () {
        Of || ((Of = !0), Nf());
        return Mf.exports;
      };
    c = {};
    var Qf = { exports: c };
    function Rf() {
      var a = Pf(),
        b = O();
      function c(d, e, f, g, h) {
        if (d === e) return !0;
        return d == null || e == null || (!b(d) && !b(e))
          ? d !== d && e !== e
          : a(d, e, f, g, c, h);
      }
      Qf.exports = c;
    }
    var Sf = !1,
      Tf = function () {
        Sf || ((Sf = !0), Rf());
        return Qf.exports;
      };
    d = {};
    var Uf = { exports: d };
    function Vf() {
      __p && __p();
      var a = Kc(),
        b = Tf(),
        c = 1,
        d = 2;
      function e(e, f, g, h) {
        __p && __p();
        var i = g.length,
          j = i,
          k = !h;
        if (e == null) return !j;
        e = Object(e);
        while (i--) {
          var l = g[i];
          if (k && l[2] ? l[1] !== e[l[0]] : !(l[0] in e)) return !1;
        }
        while (++i < j) {
          l = g[i];
          var m = l[0],
            n = e[m],
            o = l[1];
          if (k && l[2]) {
            if (n === undefined && !(m in e)) return !1;
          } else {
            l = new a();
            if (h) var p = h(n, o, m, e, f, l);
            if (!(p === undefined ? b(o, n, c | d, h, l) : p)) return !1;
          }
        }
        return !0;
      }
      Uf.exports = e;
    }
    var Wf = !1,
      Xf = function () {
        Wf || ((Wf = !0), Vf());
        return Uf.exports;
      };
    f = {};
    var Yf = { exports: f };
    function Zf() {
      var a = H();
      function b(b) {
        return b === b && !a(b);
      }
      Yf.exports = b;
    }
    var $f = !1,
      ag = function () {
        $f || (($f = !0), Zf());
        return Yf.exports;
      };
    b = {};
    var bg = { exports: b };
    function cg() {
      var a = ag(),
        b = X();
      function c(c) {
        var d = b(c),
          e = d.length;
        while (e--) {
          var f = d[e],
            g = c[f];
          d[e] = [f, g, a(g)];
        }
        return d;
      }
      bg.exports = c;
    }
    var dg = !1,
      eg = function () {
        dg || ((dg = !0), cg());
        return bg.exports;
      };
    c = {};
    var fg = { exports: c };
    function gg() {
      function a(a, b) {
        return function (c) {
          return c == null
            ? !1
            : c[a] === b && (b !== undefined || a in Object(c));
        };
      }
      fg.exports = a;
    }
    var hg = !1,
      ig = function () {
        hg || ((hg = !0), gg());
        return fg.exports;
      };
    d = {};
    var jg = { exports: d };
    function kg() {
      var a = Xf(),
        b = eg(),
        c = ig();
      function d(d) {
        var e = b(d);
        return e.length == 1 && e[0][2]
          ? c(e[0][0], e[0][1])
          : function (b) {
              return b === d || a(b, d, e);
            };
      }
      jg.exports = d;
    }
    var lg = !1,
      mg = function () {
        lg || ((lg = !0), kg());
        return jg.exports;
      };
    f = {};
    var ng = { exports: f };
    function og() {
      var a = G(),
        b = O(),
        c = '[object Symbol]';
      function d(d) {
        return typeof d == 'symbol' || (b(d) && a(d) == c);
      }
      ng.exports = d;
    }
    var pg = !1,
      Y = function () {
        pg || ((pg = !0), og());
        return ng.exports;
      };
    b = {};
    var qg = { exports: b };
    function rg() {
      var a = N(),
        b = Y(),
        c = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        d = /^\w*$/;
      function e(e, f) {
        if (a(e)) return !1;
        var g = typeof e;
        return g == 'number' ||
          g == 'symbol' ||
          g == 'boolean' ||
          e == null ||
          b(e)
          ? !0
          : d.test(e) || !c.test(e) || (f != null && e in Object(f));
      }
      qg.exports = e;
    }
    var sg = !1,
      tg = function () {
        sg || ((sg = !0), rg());
        return qg.exports;
      };
    c = {};
    var ug = { exports: c };
    function vg() {
      __p && __p();
      var a = M(),
        b = 'Expected a function';
      function c(d, e) {
        __p && __p();
        if (typeof d != 'function' || (e != null && typeof e != 'function'))
          throw new TypeError(b);
        var f = function () {
          var a = arguments,
            b = e ? e.apply(this, a) : a[0],
            c = f.cache;
          if (c.has(b)) return c.get(b);
          var g = d.apply(this, a);
          f.cache = c.set(b, g) || c;
          return g;
        };
        f.cache = new (c.Cache || a)();
        return f;
      }
      c.Cache = a;
      ug.exports = c;
    }
    var wg = !1,
      xg = function () {
        wg || ((wg = !0), vg());
        return ug.exports;
      };
    d = {};
    var yg = { exports: d };
    function zg() {
      var a = xg(),
        b = 500;
      function c(c) {
        c = a(c, function (a) {
          d.size === b && d.clear();
          return a;
        });
        var d = c.cache;
        return c;
      }
      yg.exports = c;
    }
    var Ag = !1,
      Bg = function () {
        Ag || ((Ag = !0), zg());
        return yg.exports;
      };
    f = {};
    var Cg = { exports: f };
    function Dg() {
      var a = Bg(),
        b =
          /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        c = /\\(\\)?/g;
      a = a(function (a) {
        var d = [];
        a.charCodeAt(0) === 46 && d.push('');
        a.replace(b, function (a, b, e, f) {
          d.push(e ? f.replace(c, '$1') : b || a);
        });
        return d;
      });
      Cg.exports = a;
    }
    var Eg = !1,
      Fg = function () {
        Eg || ((Eg = !0), Dg());
        return Cg.exports;
      };
    b = {};
    var Gg = { exports: b };
    function Hg() {
      function a(a, b) {
        var c = -1,
          d = a == null ? 0 : a.length,
          e = Array(d);
        while (++c < d) e[c] = b(a[c], c, a);
        return e;
      }
      Gg.exports = a;
    }
    var Ig = !1,
      Jg = function () {
        Ig || ((Ig = !0), Hg());
        return Gg.exports;
      };
    c = {};
    var Kg = { exports: c };
    function Lg() {
      __p && __p();
      var a = F(),
        b = Jg(),
        c = N(),
        d = Y(),
        e = 1 / 0;
      a = a ? a.prototype : undefined;
      var f = a ? a.toString : undefined;
      function g(a) {
        if (typeof a == 'string') return a;
        if (c(a)) return b(a, g) + '';
        if (d(a)) return f ? f.call(a) : '';
        var h = a + '';
        return h == '0' && 1 / a == -e ? '-0' : h;
      }
      Kg.exports = g;
    }
    var Mg = !1,
      Ng = function () {
        Mg || ((Mg = !0), Lg());
        return Kg.exports;
      };
    d = {};
    var Og = { exports: d };
    function Pg() {
      var a = Ng();
      function b(b) {
        return b == null ? '' : a(b);
      }
      Og.exports = b;
    }
    var Qg = !1,
      Rg = function () {
        Qg || ((Qg = !0), Pg());
        return Og.exports;
      };
    f = {};
    var Sg = { exports: f };
    function Tg() {
      var a = N(),
        b = tg(),
        c = Fg(),
        d = Rg();
      function e(e, f) {
        return a(e) ? e : b(e, f) ? [e] : c(d(e));
      }
      Sg.exports = e;
    }
    var Ug = !1,
      Vg = function () {
        Ug || ((Ug = !0), Tg());
        return Sg.exports;
      };
    b = {};
    var Wg = { exports: b };
    function Xg() {
      var a = Y(),
        b = 1 / 0;
      function c(c) {
        if (typeof c == 'string' || a(c)) return c;
        var d = c + '';
        return d == '0' && 1 / c == -b ? '-0' : d;
      }
      Wg.exports = c;
    }
    var Yg = !1,
      Z = function () {
        Yg || ((Yg = !0), Xg());
        return Wg.exports;
      };
    c = {};
    var Zg = { exports: c };
    function $g() {
      var a = Vg(),
        b = Z();
      function c(c, d) {
        d = a(d, c);
        var e = 0,
          f = d.length;
        while (c != null && e < f) c = c[b(d[e++])];
        return e && e == f ? c : undefined;
      }
      Zg.exports = c;
    }
    var ah = !1,
      bh = function () {
        ah || ((ah = !0), $g());
        return Zg.exports;
      };
    d = {};
    var ch = { exports: d };
    function dh() {
      var a = bh();
      function b(b, c, d) {
        b = b == null ? undefined : a(b, c);
        return b === undefined ? d : b;
      }
      ch.exports = b;
    }
    var eh = !1,
      fh = function () {
        eh || ((eh = !0), dh());
        return ch.exports;
      };
    f = {};
    var gh = { exports: f };
    function hh() {
      function a(a, b) {
        return a != null && b in Object(a);
      }
      gh.exports = a;
    }
    var ih = !1,
      jh = function () {
        ih || ((ih = !0), hh());
        return gh.exports;
      };
    b = {};
    var kh = { exports: b };
    function lh() {
      __p && __p();
      var a = Vg(),
        b = P(),
        c = N(),
        d = S(),
        e = T(),
        f = Z();
      function g(g, h, i) {
        __p && __p();
        h = a(h, g);
        var j = -1,
          k = h.length,
          l = !1;
        while (++j < k) {
          var m = f(h[j]);
          if (!(l = g != null && i(g, m))) break;
          g = g[m];
        }
        if (l || ++j != k) return l;
        k = g == null ? 0 : g.length;
        return !!k && e(k) && d(m, k) && (c(g) || b(g));
      }
      kh.exports = g;
    }
    var mh = !1,
      nh = function () {
        mh || ((mh = !0), lh());
        return kh.exports;
      };
    c = {};
    var oh = { exports: c };
    function ph() {
      var a = jh(),
        b = nh();
      function c(c, d) {
        return c != null && b(c, d, a);
      }
      oh.exports = c;
    }
    var qh = !1,
      rh = function () {
        qh || ((qh = !0), ph());
        return oh.exports;
      };
    d = {};
    var sh = { exports: d };
    function th() {
      var a = Tf(),
        b = fh(),
        c = rh(),
        d = tg(),
        e = ag(),
        f = ig(),
        g = Z(),
        h = 1,
        i = 2;
      function j(j, k) {
        return d(j) && e(k)
          ? f(g(j), k)
          : function (d) {
              var e = b(d, j);
              return e === undefined && e === k ? c(d, j) : a(k, e, h | i);
            };
      }
      sh.exports = j;
    }
    var uh = !1,
      vh = function () {
        uh || ((uh = !0), th());
        return sh.exports;
      };
    f = {};
    var wh = { exports: f };
    function xh() {
      function a(a) {
        return a;
      }
      wh.exports = a;
    }
    var yh = !1,
      $ = function () {
        yh || ((yh = !0), xh());
        return wh.exports;
      };
    b = {};
    var zh = { exports: b };
    function Ah() {
      function a(a) {
        return function (b) {
          return b == null ? undefined : b[a];
        };
      }
      zh.exports = a;
    }
    var Bh = !1,
      Ch = function () {
        Bh || ((Bh = !0), Ah());
        return zh.exports;
      };
    c = {};
    var Dh = { exports: c };
    function Eh() {
      var a = bh();
      function b(b) {
        return function (c) {
          return a(c, b);
        };
      }
      Dh.exports = b;
    }
    var Fh = !1,
      Gh = function () {
        Fh || ((Fh = !0), Eh());
        return Dh.exports;
      };
    d = {};
    var Hh = { exports: d };
    function Ih() {
      var a = Ch(),
        b = Gh(),
        c = tg(),
        d = Z();
      function e(e) {
        return c(e) ? a(d(e)) : b(e);
      }
      Hh.exports = e;
    }
    var Jh = !1,
      Kh = function () {
        Jh || ((Jh = !0), Ih());
        return Hh.exports;
      };
    f = {};
    var Lh = { exports: f };
    function Mh() {
      var a = mg(),
        b = vh(),
        c = $(),
        d = N(),
        e = Kh();
      function f(f) {
        if (typeof f == 'function') return f;
        if (f == null) return c;
        return typeof f == 'object' ? (d(f) ? b(f[0], f[1]) : a(f)) : e(f);
      }
      Lh.exports = f;
    }
    var Nh = !1,
      Oh = function () {
        Nh || ((Nh = !0), Mh());
        return Lh.exports;
      };
    b = {};
    var Ph = { exports: b };
    function Qh() {
      __p && __p();
      var a = Oh(),
        b = W(),
        c = X();
      function d(d) {
        __p && __p();
        return function (e, f, g) {
          var h = Object(e);
          if (!b(e)) {
            var i = a(f, 3);
            e = c(e);
            f = function (a) {
              return i(h[a], a, h);
            };
          }
          f = d(e, f, g);
          return f > -1 ? h[i ? e[f] : f] : undefined;
        };
      }
      Ph.exports = d;
    }
    var Rh = !1,
      Sh = function () {
        Rh || ((Rh = !0), Qh());
        return Ph.exports;
      };
    c = {};
    var Th = { exports: c };
    function Uh() {
      function a(a, b, c, d) {
        var e = a.length;
        c = c + (d ? 1 : -1);
        while (d ? c-- : ++c < e) if (b(a[c], c, a)) return c;
        return -1;
      }
      Th.exports = a;
    }
    var Vh = !1,
      Wh = function () {
        Vh || ((Vh = !0), Uh());
        return Th.exports;
      };
    d = {};
    var Xh = { exports: d };
    function Yh() {
      __p && __p();
      var a = H(),
        b = Y(),
        c = 0 / 0,
        d = /^\s+|\s+$/g,
        e = /^[-+]0x[0-9a-f]+$/i,
        f = /^0b[01]+$/i,
        g = /^0o[0-7]+$/i,
        h = parseInt;
      function i(i) {
        __p && __p();
        if (typeof i == 'number') return i;
        if (b(i)) return c;
        if (a(i)) {
          var j = typeof i.valueOf == 'function' ? i.valueOf() : i;
          i = a(j) ? j + '' : j;
        }
        if (typeof i != 'string') return i === 0 ? i : +i;
        i = i.replace(d, '');
        j = f.test(i);
        return j || g.test(i) ? h(i.slice(2), j ? 2 : 8) : e.test(i) ? c : +i;
      }
      Xh.exports = i;
    }
    var Zh = !1,
      $h = function () {
        Zh || ((Zh = !0), Yh());
        return Xh.exports;
      };
    f = {};
    var ai = { exports: f };
    function bi() {
      __p && __p();
      var a = $h(),
        b = 1 / 0,
        c = 17976931348623157e292;
      function d(d) {
        if (!d) return d === 0 ? d : 0;
        d = a(d);
        if (d === b || d === -b) {
          var e = d < 0 ? -1 : 1;
          return e * c;
        }
        return d === d ? d : 0;
      }
      ai.exports = d;
    }
    var ci = !1,
      di = function () {
        ci || ((ci = !0), bi());
        return ai.exports;
      };
    b = {};
    var ei = { exports: b };
    function fi() {
      var a = di();
      function b(b) {
        b = a(b);
        var c = b % 1;
        return b === b ? (c ? b - c : b) : 0;
      }
      ei.exports = b;
    }
    var gi = !1,
      hi = function () {
        gi || ((gi = !0), fi());
        return ei.exports;
      };
    c = {};
    var ii = { exports: c };
    function ji() {
      var a = Wh(),
        b = Oh(),
        c = hi(),
        d = Math.max;
      function e(e, f, g) {
        var h = e == null ? 0 : e.length;
        if (!h) return -1;
        g = g == null ? 0 : c(g);
        g < 0 && (g = d(h + g, 0));
        return a(e, b(f, 3), g);
      }
      ii.exports = e;
    }
    var ki = !1,
      li = function () {
        ki || ((ki = !0), ji());
        return ii.exports;
      };
    d = {};
    var mi = { exports: d };
    function ni() {
      var a = Sh(),
        b = li();
      a = a(b);
      mi.exports = a;
    }
    var oi = !1,
      pi = function () {
        oi || ((oi = !0), ni());
        return mi.exports;
      };
    f = {};
    var qi = { exports: f };
    function ri() {
      var a = Ve();
      a = a(Object.getPrototypeOf, Object);
      qi.exports = a;
    }
    var si = !1,
      ti = function () {
        si || ((si = !0), ri());
        return qi.exports;
      };
    b = {};
    var ui = { exports: b };
    function vi() {
      __p && __p();
      var a = G(),
        b = ti(),
        c = O(),
        d = '[object Object]',
        e = Function.prototype,
        f = Object.prototype,
        g = e.toString,
        h = f.hasOwnProperty,
        i = g.call(Object);
      function j(e) {
        if (!c(e) || a(e) != d) return !1;
        e = b(e);
        if (e === null) return !0;
        e = h.call(e, 'constructor') && e.constructor;
        return typeof e == 'function' && e instanceof e && g.call(e) == i;
      }
      ui.exports = j;
    }
    var wi = !1,
      xi = function () {
        wi || ((wi = !0), vi());
        return ui.exports;
      };
    c = {};
    var yi = { exports: c };
    function zi() {
      var a = F(),
        b = P(),
        c = N(),
        d = a ? a.isConcatSpreadable : undefined;
      function e(a) {
        return c(a) || b(a) || !!(d && a && a[d]);
      }
      yi.exports = e;
    }
    var Ai = !1,
      Bi = function () {
        Ai || ((Ai = !0), zi());
        return yi.exports;
      };
    d = {};
    var Ci = { exports: d };
    function Di() {
      __p && __p();
      var a = Bd(),
        b = Bi();
      function c(d, e, f, g, h) {
        var i = -1,
          j = d.length;
        f || (f = b);
        h || (h = []);
        while (++i < j) {
          var k = d[i];
          e > 0 && f(k)
            ? e > 1
              ? c(k, e - 1, f, g, h)
              : a(h, k)
            : g || (h[h.length] = k);
        }
        return h;
      }
      Ci.exports = c;
    }
    var Ei = !1,
      Fi = function () {
        Ei || ((Ei = !0), Di());
        return Ci.exports;
      };
    f = {};
    var Gi = { exports: f };
    function Hi() {
      __p && __p();
      function a(a) {
        __p && __p();
        return function (b, c, d) {
          var e = -1,
            f = Object(b);
          d = d(b);
          var g = d.length;
          while (g--) {
            var h = d[a ? g : ++e];
            if (c(f[h], h, f) === !1) break;
          }
          return b;
        };
      }
      Gi.exports = a;
    }
    var Ii = !1,
      Ji = function () {
        Ii || ((Ii = !0), Hi());
        return Gi.exports;
      };
    b = {};
    var Ki = { exports: b };
    function Li() {
      var a = Ji();
      a = a();
      Ki.exports = a;
    }
    var Mi = !1,
      Ni = function () {
        Mi || ((Mi = !0), Li());
        return Ki.exports;
      };
    c = {};
    var Oi = { exports: c };
    function Pi() {
      var a = Ni(),
        b = X();
      function c(c, d) {
        return c && a(c, d, b);
      }
      Oi.exports = c;
    }
    var Qi = !1,
      Ri = function () {
        Qi || ((Qi = !0), Pi());
        return Oi.exports;
      };
    d = {};
    var Si = { exports: d };
    function Ti() {
      __p && __p();
      var a = W();
      function b(b, c) {
        __p && __p();
        return function (d, e) {
          if (d == null) return d;
          if (!a(d)) return b(d, e);
          var f = d.length,
            g = c ? f : -1,
            h = Object(d);
          while (c ? g-- : ++g < f) if (e(h[g], g, h) === !1) break;
          return d;
        };
      }
      Si.exports = b;
    }
    var Ui = !1,
      Vi = function () {
        Ui || ((Ui = !0), Ti());
        return Si.exports;
      };
    f = {};
    var Wi = { exports: f };
    function Xi() {
      var a = Ri(),
        b = Vi();
      b = b(a);
      Wi.exports = b;
    }
    var Yi = !1,
      Zi = function () {
        Yi || ((Yi = !0), Xi());
        return Wi.exports;
      };
    b = {};
    var $i = { exports: b };
    function aj() {
      var a = Zi(),
        b = W();
      function c(c, d) {
        var e = -1,
          f = b(c) ? Array(c.length) : [];
        a(c, function (b, c, a) {
          f[++e] = d(b, c, a);
        });
        return f;
      }
      $i.exports = c;
    }
    var bj = !1,
      cj = function () {
        bj || ((bj = !0), aj());
        return $i.exports;
      };
    c = {};
    var dj = { exports: c };
    function ej() {
      function a(a, b) {
        var c = a.length;
        a.sort(b);
        while (c--) a[c] = a[c].value;
        return a;
      }
      dj.exports = a;
    }
    var fj = !1,
      gj = function () {
        fj || ((fj = !0), ej());
        return dj.exports;
      };
    d = {};
    var hj = { exports: d };
    function ij() {
      __p && __p();
      var a = Y();
      function b(b, c) {
        if (b !== c) {
          var d = b !== undefined,
            e = b === null,
            f = b === b,
            g = a(b),
            h = c !== undefined,
            i = c === null,
            j = c === c,
            k = a(c);
          if (
            (!i && !k && !g && b > c) ||
            (g && h && j && !i && !k) ||
            (e && h && j) ||
            (!d && j) ||
            !f
          )
            return 1;
          if (
            (!e && !g && !k && b < c) ||
            (k && d && f && !e && !g) ||
            (i && d && f) ||
            (!h && f) ||
            !j
          )
            return -1;
        }
        return 0;
      }
      hj.exports = b;
    }
    var jj = !1,
      kj = function () {
        jj || ((jj = !0), ij());
        return hj.exports;
      };
    f = {};
    var lj = { exports: f };
    function mj() {
      __p && __p();
      var a = kj();
      function b(b, c, d) {
        __p && __p();
        var e = -1,
          f = b.criteria,
          g = c.criteria,
          h = f.length,
          i = d.length;
        while (++e < h) {
          var j = a(f[e], g[e]);
          if (j) {
            if (e >= i) return j;
            var k = d[e];
            return j * (k == 'desc' ? -1 : 1);
          }
        }
        return b.index - c.index;
      }
      lj.exports = b;
    }
    var nj = !1,
      oj = function () {
        nj || ((nj = !0), mj());
        return lj.exports;
      };
    b = {};
    var pj = { exports: b };
    function qj() {
      __p && __p();
      var a = Jg(),
        b = Oh(),
        c = cj(),
        d = gj(),
        e = Ce(),
        f = oj(),
        g = $();
      function h(h, i, j) {
        var k = -1;
        i = a(i.length ? i : [g], e(b));
        h = c(h, function (c, d, b) {
          d = a(i, function (a) {
            return a(c);
          });
          return { criteria: d, index: ++k, value: c };
        });
        return d(h, function (a, b) {
          return f(a, b, j);
        });
      }
      pj.exports = h;
    }
    var rj = !1,
      sj = function () {
        rj || ((rj = !0), qj());
        return pj.exports;
      };
    c = {};
    var tj = { exports: c };
    function uj() {
      function a(a, b, c) {
        switch (c.length) {
          case 0:
            return a.call(b);
          case 1:
            return a.call(b, c[0]);
          case 2:
            return a.call(b, c[0], c[1]);
          case 3:
            return a.call(b, c[0], c[1], c[2]);
        }
        return a.apply(b, c);
      }
      tj.exports = a;
    }
    var vj = !1,
      wj = function () {
        vj || ((vj = !0), uj());
        return tj.exports;
      };
    d = {};
    var xj = { exports: d };
    function yj() {
      __p && __p();
      var a = wj(),
        b = Math.max;
      function c(c, d, e) {
        __p && __p();
        d = b(d === undefined ? c.length - 1 : d, 0);
        return function () {
          var f = arguments,
            g = -1,
            h = b(f.length - d, 0),
            i = Array(h);
          while (++g < h) i[g] = f[d + g];
          g = -1;
          var j = Array(d + 1);
          while (++g < d) j[g] = f[g];
          j[d] = e(i);
          return a(c, this, j);
        };
      }
      xj.exports = c;
    }
    var zj = !1,
      Aj = function () {
        zj || ((zj = !0), yj());
        return xj.exports;
      };
    f = {};
    var Bj = { exports: f };
    function Cj() {
      function a(a) {
        return function () {
          return a;
        };
      }
      Bj.exports = a;
    }
    var Dj = !1,
      Ej = function () {
        Dj || ((Dj = !0), Cj());
        return Bj.exports;
      };
    b = {};
    var Fj = { exports: b };
    function Gj() {
      var a = I(),
        b = (function () {
          try {
            var b = a(Object, 'defineProperty');
            b({}, '', {});
            return b;
          } catch (a) {}
        })();
      Fj.exports = b;
    }
    var Hj = !1,
      Ij = function () {
        Hj || ((Hj = !0), Gj());
        return Fj.exports;
      };
    c = {};
    var Jj = { exports: c };
    function Kj() {
      var a = Ej(),
        b = Ij(),
        c = $();
      c = b
        ? function (c, d) {
            return b(c, 'toString', {
              configurable: !0,
              enumerable: !1,
              value: a(d),
              writable: !0,
            });
          }
        : c;
      Jj.exports = c;
    }
    var Lj = !1,
      Mj = function () {
        Lj || ((Lj = !0), Kj());
        return Jj.exports;
      };
    d = {};
    var Nj = { exports: d };
    function Oj() {
      __p && __p();
      var a = 800,
        b = 16,
        c = Date.now;
      function d(d) {
        __p && __p();
        var e = 0,
          f = 0;
        return function () {
          var g = c(),
            h = b - (g - f);
          f = g;
          if (h > 0) {
            if (++e >= a) return arguments[0];
          } else e = 0;
          return d.apply(undefined, arguments);
        };
      }
      Nj.exports = d;
    }
    var Pj = !1,
      Qj = function () {
        Pj || ((Pj = !0), Oj());
        return Nj.exports;
      };
    f = {};
    var Rj = { exports: f };
    function Sj() {
      var a = Mj(),
        b = Qj();
      b = b(a);
      Rj.exports = b;
    }
    var Tj = !1,
      Uj = function () {
        Tj || ((Tj = !0), Sj());
        return Rj.exports;
      };
    b = {};
    var Vj = { exports: b };
    function Wj() {
      var a = $(),
        b = Aj(),
        c = Uj();
      function d(d, e) {
        return c(b(d, e, a), d + '');
      }
      Vj.exports = d;
    }
    var Xj = !1,
      Yj = function () {
        Xj || ((Xj = !0), Wj());
        return Vj.exports;
      };
    c = {};
    var Zj = { exports: c };
    function $j() {
      var a = n(),
        b = W(),
        c = S(),
        d = H();
      function e(e, f, g) {
        if (!d(g)) return !1;
        var h = typeof f;
        return (
          h == 'number' ? b(g) && c(f, g.length) : h == 'string' && f in g
        )
          ? a(g[f], e)
          : !1;
      }
      Zj.exports = e;
    }
    var ak = !1,
      bk = function () {
        ak || ((ak = !0), $j());
        return Zj.exports;
      };
    d = {};
    var ck = { exports: d };
    function dk() {
      var a = Fi(),
        b = sj(),
        c = Yj(),
        d = bk();
      c = c(function (c, e) {
        if (c == null) return [];
        var f = e.length;
        f > 1 && d(c, e[0], e[1])
          ? (e = [])
          : f > 2 && d(e[0], e[1], e[2]) && (e = [e[0]]);
        return b(c, a(e, 1), []);
      });
      ck.exports = c;
    }
    var ek = !1,
      fk = function () {
        ek || ((ek = !0), dk());
        return ck.exports;
      };
    f = function (a) {
      switch (a) {
        case undefined:
          throw new Error(
            'Cannot require the default exported value from a package listed as excluded'
          );
        case '/find':
          return pi();
        case '/isPlainObject':
          return xi();
        case '/sortBy':
          return fk();
      }
    };
    e.exports = f;
  },
  null
);
/**
 * License: https://www.facebook.com/legal/license/MDzNl_j9yvg/
 */
__d(
  'symbol-observable-1.2.0',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = {},
      h = { exports: g };
    function i() {
      Object.defineProperty(g, '__esModule', { value: !0 });
      g['default'] = a;
      function a(a) {
        var b;
        a = a.Symbol;
        typeof a === 'function'
          ? a.observable
            ? (b = a.observable)
            : ((b = a('observable')), (a.observable = b))
          : (b = '@@observable');
        return b;
      }
    }
    var j = !1,
      k = function () {
        j || ((j = !0), i());
        return h.exports;
      },
      l = {},
      m = { exports: l };
    function n() {
      Object.defineProperty(l, '__esModule', { value: !0 });
      var b = k();
      c = c(b);
      function c(a) {
        return a && a.__esModule ? a : { default: a };
      }
      typeof self !== 'undefined'
        ? (b = self)
        : typeof window !== 'undefined'
        ? (b = window)
        : typeof a !== 'undefined'
        ? (b = a)
        : typeof m !== 'undefined'
        ? (b = m)
        : (b = Function('return this')());
      c = c['default'](b);
      l['default'] = c;
    }
    var o = !1,
      p = function () {
        o || ((o = !0), n());
        return m.exports;
      };
    b = function (a) {
      switch (a) {
        case undefined:
          return p();
      }
    };
    e.exports = b;
  },
  null
);
/**
 * License: https://www.facebook.com/legal/license/MDzNl_j9yvg/
 */
__d(
  'redux-3.7.2',
  ['lodash-4.17.5', 'symbol-observable-1.2.0'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a) {
      return a && typeof a === 'object' && 'default' in a ? a['default'] : a;
    }
    var g = a(b('lodash-4.17.5')),
      h = a(b('symbol-observable-1.2.0')),
      i = {},
      j = { exports: i };
    function k() {
      __p && __p();
      i.__esModule = !0;
      i.ActionTypes = undefined;
      i['default'] = f;
      var a = g('/isPlainObject'),
        b = d(a);
      a = h();
      var c = d(a);
      function d(a) {
        return a && a.__esModule ? a : { default: a };
      }
      var e = (i.ActionTypes = { INIT: '@@redux/INIT' });
      function f(a, d, g) {
        __p && __p();
        typeof d === 'function' &&
          typeof g === 'undefined' &&
          ((g = d), (d = undefined));
        if (typeof g !== 'undefined') {
          if (typeof g !== 'function')
            throw new Error('Expected the enhancer to be a function.');
          return g(f)(a, d);
        }
        if (typeof a !== 'function')
          throw new Error('Expected the reducer to be a function.');
        var h = a,
          i = d,
          j = [],
          k = j,
          l = !1;
        function m() {
          k === j && (k = j.slice());
        }
        function n() {
          return i;
        }
        function o(a) {
          __p && __p();
          if (typeof a !== 'function')
            throw new Error('Expected listener to be a function.');
          var b = !0;
          m();
          k.push(a);
          return function () {
            if (!b) return;
            b = !1;
            m();
            var c = k.indexOf(a);
            k.splice(c, 1);
          };
        }
        function p(a) {
          __p && __p();
          if (!b['default'](a))
            throw new Error(
              'Actions must be plain objects. Use custom middleware for async actions.'
            );
          if (typeof a.type === 'undefined')
            throw new Error(
              'Actions may not have an undefined "type" property. Have you misspelled a constant?'
            );
          if (l) throw new Error('Reducers may not dispatch actions.');
          try {
            (l = !0), (i = h(i, a));
          } finally {
            l = !1;
          }
          var c = (j = k);
          for (var d = 0; d < c.length; d++) {
            var e = c[d];
            e();
          }
          return a;
        }
        function q(a) {
          if (typeof a !== 'function')
            throw new Error('Expected the nextReducer to be a function.');
          h = a;
          p({ type: e.INIT });
        }
        function r() {
          __p && __p();
          var a,
            b = o;
          return (
            (a = {
              subscribe: function (a) {
                if (typeof a !== 'object')
                  throw new TypeError('Expected the observer to be an object.');
                function c() {
                  a.next && a.next(n());
                }
                c();
                c = b(c);
                return { unsubscribe: c };
              },
            }),
            (a[c['default']] = function () {
              return this;
            }),
            a
          );
        }
        p({ type: e.INIT });
        return (
          (g = { dispatch: p, subscribe: o, getState: n, replaceReducer: q }),
          (g[c['default']] = r),
          g
        );
      }
    }
    var l = !1,
      m = function () {
        l || ((l = !0), k());
        return j.exports;
      },
      n = {},
      o = { exports: n };
    function p() {
      n.__esModule = !0;
      n['default'] = a;
      function a(a) {
        typeof console !== 'undefined' &&
          typeof emptyFunction === 'function' &&
          !1;
        try {
          throw new Error(a);
        } catch (a) {}
      }
    }
    var q = !1,
      r = function () {
        q || ((q = !0), p());
        return o.exports;
      },
      s = {},
      t = { exports: s };
    function u() {
      __p && __p();
      s.__esModule = !0;
      s['default'] = e;
      var a = m();
      e = g('/isPlainObject');
      b(e);
      e = r();
      b(e);
      function b(a) {
        return a && a.__esModule ? a : { default: a };
      }
      function c(a, b) {
        b = b && b.type;
        b = (b && '"' + b.toString() + '"') || 'an action';
        return (
          'Given action ' +
          b +
          ', reducer "' +
          a +
          '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'
        );
      }
      function d(b) {
        Object.keys(b).forEach(function (c) {
          var d = b[c],
            e = d(undefined, { type: a.ActionTypes.INIT });
          if (typeof e === 'undefined')
            throw new Error(
              'Reducer "' +
                c +
                '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don\'t want to set a value for this reducer, you can use null instead of undefined.'
            );
          e =
            '@@redux/PROBE_UNKNOWN_ACTION_' +
            Math.random().toString(36).substring(7).split('').join('.');
          if (typeof d(undefined, { type: e }) === 'undefined')
            throw new Error(
              'Reducer "' +
                c +
                '" returned undefined when probed with a random type. ' +
                ("Don't try to handle " +
                  a.ActionTypes.INIT +
                  ' or other actions in "redux/*" ') +
                'namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.'
            );
        });
      }
      function e(a) {
        __p && __p();
        var b = Object.keys(a),
          e = {};
        for (var f = 0; f < b.length; f++) {
          var g = b[f];
          typeof a[g] === 'function' && (e[g] = a[g]);
        }
        var h = Object.keys(e),
          i = void 0;
        try {
          d(e);
        } catch (a) {
          i = a;
        }
        return function () {
          __p && __p();
          var a =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : {},
            b = arguments[1];
          if (i) throw i;
          var d = !1,
            f = {};
          for (var g = 0; g < h.length; g++) {
            var j = h[g],
              k = e[j],
              l = a[j],
              m = k(l, b);
            if (typeof m === 'undefined') {
              var n = c(j, b);
              throw new Error(n);
            }
            f[j] = m;
            d = d || m !== l;
          }
          return d ? f : a;
        };
      }
    }
    var v = !1,
      w = function () {
        v || ((v = !0), u());
        return t.exports;
      },
      x = {},
      y = { exports: x };
    function z() {
      __p && __p();
      x.__esModule = !0;
      x['default'] = b;
      function a(a, b) {
        return function () {
          return b(a.apply(undefined, arguments));
        };
      }
      function b(b, c) {
        __p && __p();
        if (typeof b === 'function') return a(b, c);
        if (typeof b !== 'object' || b === null)
          throw new Error(
            'bindActionCreators expected an object or a function, instead received ' +
              (b === null ? 'null' : typeof b) +
              '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
          );
        var d = Object.keys(b),
          e = {};
        for (var f = 0; f < d.length; f++) {
          var g = d[f],
            h = b[g];
          typeof h === 'function' && (e[g] = a(h, c));
        }
        return e;
      }
    }
    var A = !1,
      B = function () {
        A || ((A = !0), z());
        return y.exports;
      },
      C = {},
      D = { exports: C };
    function E() {
      __p && __p();
      C.__esModule = !0;
      C['default'] = a;
      function a() {
        for (var a = arguments.length, b = Array(a), c = 0; c < a; c++)
          b[c] = arguments[c];
        if (b.length === 0)
          return function (a) {
            return a;
          };
        return b.length === 1
          ? b[0]
          : b.reduce(function (a, b) {
              return function () {
                return a(b.apply(undefined, arguments));
              };
            });
      }
    }
    var F = !1,
      G = function () {
        F || ((F = !0), E());
        return D.exports;
      },
      H = {},
      I = { exports: H };
    function J() {
      __p && __p();
      H.__esModule = !0;
      var a =
        Object.assign ||
        function (a) {
          for (var b = 1; b < arguments.length; b++) {
            var c = arguments[b];
            for (var d in c)
              Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
          }
          return a;
        };
      H['default'] = d;
      d = G();
      var b = c(d);
      function c(a) {
        return a && a.__esModule ? a : { default: a };
      }
      function d() {
        __p && __p();
        for (var c = arguments.length, d = Array(c), e = 0; e < c; e++)
          d[e] = arguments[e];
        return function (c) {
          __p && __p();
          return function (e, f, g) {
            e = c(e, f, g);
            var h = e.dispatch;
            [];
            var i = {
              getState: e.getState,
              dispatch: function (a) {
                return h(a);
              },
            };
            f = d.map(function (a) {
              return a(i);
            });
            h = b['default'].apply(undefined, f)(e.dispatch);
            return a({}, e, { dispatch: h });
          };
        };
      }
    }
    var K = !1,
      L = function () {
        K || ((K = !0), J());
        return I.exports;
      },
      M = {},
      N = { exports: M };
    function O() {
      __p && __p();
      M.__esModule = !0;
      M.compose =
        M.applyMiddleware =
        M.bindActionCreators =
        M.combineReducers =
        M.createStore =
          undefined;
      var a = m();
      a = g(a);
      var b = w();
      b = g(b);
      var c = B();
      c = g(c);
      var d = L();
      d = g(d);
      var e = G();
      e = g(e);
      var f = r();
      g(f);
      function g(a) {
        return a && a.__esModule ? a : { default: a };
      }
      M.createStore = a['default'];
      M.combineReducers = b['default'];
      M.bindActionCreators = c['default'];
      M.applyMiddleware = d['default'];
      M.compose = e['default'];
    }
    var P = !1,
      Q = function () {
        P || ((P = !0), O());
        return N.exports;
      };
    c = function (a) {
      switch (a) {
        case undefined:
          return Q();
      }
    };
    e.exports = c;
  },
  null
);
__d(
  'redux',
  ['redux-3.7.2'],
  function (a, b, c, d, e, f) {
    e.exports = b('redux-3.7.2')();
  },
  null
);
__d(
  'upNextVideoStateActionTypes',
  [],
  function (a, b, c, d, e, f) {
    a = {
      APPEND_TO_BUFFER: 'APPEND_TO_BUFFER',
      REMOVE_BUFFER_HEADS: 'REMOVE_BUFFER_HEADS',
      RETRIEVE_FROM_BUFFER: 'RETRIEVE_FROM_BUFFER',
      SET_CHAINING_CURSOR: 'SET_CHAINING_CURSOR',
    };
    e.exports = a;
  },
  null
);
__d(
  'upNextVideoStateReducer',
  ['TahoeConstants', 'upNextVideoStateActionTypes'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = { upNextVideoBuffer: [], retrievedUnits: [], chainingCursor: null },
      h = b('TahoeConstants').UP_NEXT_UNIT_ID_PREFIX,
      i = 20;
    a = function (a, c) {
      __p && __p();
      a === void 0 && (a = g);
      switch (c.type) {
        case b('upNextVideoStateActionTypes').APPEND_TO_BUFFER:
          var d = c.payload;
          if (Array.isArray(d))
            return {
              upNextVideoBuffer: a.upNextVideoBuffer.concat(d),
              retrievedUnits: a.retrievedUnits,
              chainingCursor: a.chainingCursor,
            };
          else return a;
        case b('upNextVideoStateActionTypes').REMOVE_BUFFER_HEADS:
          d = c.payload;
          if (typeof d === 'string') {
            d = h + d;
            while (
              a.upNextVideoBuffer.length > 0 &&
              a.upNextVideoBuffer[0].id !== d
            )
              a.upNextVideoBuffer.shift();
            a.upNextVideoBuffer.length > 0 && a.upNextVideoBuffer.shift();
            return {
              upNextVideoBuffer: a.upNextVideoBuffer,
              retrievedUnits: a.retrievedUnits,
              chainingCursor: a.chainingCursor,
            };
          } else return a;
        case b('upNextVideoStateActionTypes').RETRIEVE_FROM_BUFFER:
          d = c.payload;
          if (typeof d === 'number') {
            var e = Math.min(i, a.upNextVideoBuffer.length);
            d = a.upNextVideoBuffer.slice(d, e);
            return {
              upNextVideoBuffer: a.upNextVideoBuffer,
              retrievedUnits: d,
              chainingCursor: a.chainingCursor,
            };
          } else return a;
        case b('upNextVideoStateActionTypes').SET_CHAINING_CURSOR:
          if (typeof c.payload === 'string')
            return {
              upNextVideoBuffer: a.upNextVideoBuffer,
              retrievedUnits: a.retrievedUnits,
              chainingCursor: c.payload,
            };
          else return a;
        default:
          return a;
      }
    };
    e.exports = a;
  },
  null
);
__d(
  'upNextVideoStateStore',
  ['redux', 'upNextVideoStateReducer'],
  function (a, b, c, d, e, f) {
    a = b('redux').createStore(b('upNextVideoStateReducer'));
    e.exports = a;
  },
  null
);
__d(
  'VideoNextControl.react',
  [
    'ix',
    'cx',
    'fbt',
    'AbstractButton.react',
    'AsyncRequest',
    'Image.react',
    'NextVideoControlOverlay.react',
    'React',
    'Tahoe',
    'TahoeConstants',
    'TahoeLoggerEvent',
    'TahoeTypedLogger',
    'TahoeV2Config',
    'URI',
    'XTahoeVideoDataAsyncController',
    'asset',
    'gkx',
    'upNextVideoStateStore',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    __p && __p();
    var j,
      k = 500;
    c = babelHelpers.inherits(a, b('React').Component);
    j = c && c.prototype;
    function a() {
      var a, b;
      for (var c = arguments.length, d = new Array(c), e = 0; e < c; e++)
        d[e] = arguments[e];
      return (
        (b = (a = j.constructor).call.apply(a, [this].concat(d))),
        (this.state = { nextVideoID: this.$1(), mouseOnBtn: !1 }),
        b
      );
    }
    a.prototype.shouldComponentUpdate = function (a, b) {
      return this.state.mouseOnBtn === b.mouseOnBtn &&
        this.state.nextVideoID === b.nextVideoID
        ? !1
        : !0;
    };
    a.prototype.render = function () {
      var a = b('React').createElement(b('Image.react'), {
          className: '_rwt',
          src: g('597341'),
        }),
        c = b('React').createElement(b('NextVideoControlOverlay.react'), {
          currentVideoID: this.props.videoID,
          nextVideoID: this.state.nextVideoID,
          mouseOnBtn: this.state.mouseOnBtn,
        });
      return b('React').createElement(
        'div',
        { className: '_6bup _6eec' },
        b('React').createElement(b('AbstractButton.react'), {
          className: '_zbd _6auz',
          image: a,
          label: i._('Next'),
          labelIsHidden: !0,
          onMouseEnter: this.$2.bind(this),
          onMouseLeave: this.$3.bind(this),
          onClick: this.$4.bind(this),
          type: 'button',
        }),
        c
      );
    };
    a.prototype.$2 = function () {
      new (b('TahoeTypedLogger'))()
        .setEvent(b('TahoeLoggerEvent').UP_NEXT_CONTROL_OVERLAY_SHOWN)
        .setMediaID(this.props.videoID)
        .log(),
        this.setState({ nextVideoID: this.$1() }),
        this.state.mouseOnBtn || this.setState({ mouseOnBtn: !0 });
    };
    a.prototype.$3 = function () {
      this.state.mouseOnBtn &&
        setTimeout(
          function () {
            this.setState({ mouseOnBtn: !1 });
          }.bind(this),
          k
        );
    };
    a.prototype.$4 = function () {
      new (b('TahoeTypedLogger'))()
        .setEvent(b('TahoeLoggerEvent').UP_NEXT_CONTROL_CLICK)
        .setMediaID(this.props.videoID)
        .log(),
        new (b('AsyncRequest'))(
          b('XTahoeVideoDataAsyncController')
            .getURIBuilder()
            .setFBIDSet('video_ids', [this.state.nextVideoID])
            .getURI()
        )
          .setHandler(function (a) {
            a =
              (a = a) != null
                ? (a = a.payload) != null
                  ? a.videosData
                  : a
                : a;
            if (a && a.length > 0 && a[0]) {
              a = a[0].permalink;
              a && b('URI').go(a);
            }
          })
          .send();
    };
    a.prototype.$1 = function () {
      if (b('TahoeV2Config').showMoreUpNext) {
        var a = b('upNextVideoStateStore').getState().upNextVideoBuffer;
        return a.length > 0
          ? a[0].id.substring(b('TahoeConstants').UP_NEXT_UNIT_ID_PREFIX.length)
          : '';
      } else {
        a = b('Tahoe').get();
        a = a && a.getView();
        a = a && a.getUpNextVideoIDs();
        return a && a.length > 0 ? a[0] : '';
      }
    };
    e.exports = a;
  },
  null
);
__d(
  'VideoPlaybackControl.react',
  [
    'ix',
    'cx',
    'fbt',
    'AbstractButton.react',
    'Image.react',
    'React',
    'ReactDOM',
    'TooltipData',
    'VideoPlayerExperiments',
    'VideoWebDriverIDs',
    'asset',
    'shallowCompare',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    __p && __p();
    var j;
    c = b('React').PropTypes;
    d = babelHelpers.inherits(a, b('React').Component);
    j = d && d.prototype;
    function a(a) {
      j.constructor.call(this, a),
        (this.state = { awaitingUpdate: !1, isPlayingOverwrite: !1 });
    }
    a.prototype.shouldComponentUpdate = function (a, c) {
      return b('shallowCompare')(this, a, c);
    };
    a.prototype.isPlaying = function () {
      return this.state.awaitingUpdate
        ? this.state.isPlayingOverwrite
        : this.props.isPlaying;
    };
    a.prototype.onButtonClick = function () {
      var a = this.isPlaying();
      this.setState({ awaitingUpdate: !0, isPlayingOverwrite: !a });
      a
        ? this.props.onPause && this.props.onPause()
        : this.props.onPlay && this.props.onPlay();
    };
    a.prototype.UNSAFE_componentWillReceiveProps = function () {
      this.setState({ awaitingUpdate: !1 });
    };
    a.prototype.onMouseOut = function (a) {
      b('ReactDOM').findDOMNode(this.refs.button).blur();
    };
    a.prototype.render = function () {
      var a = null,
        c = '';
      this.props.finishedPlaying
        ? (this.props.useDarkTheme ? (a = g('463014')) : (a = g('463019')),
          (c = i._('Replay')))
        : this.props.isLiveVideo
        ? (a = this.isPlaying() ? g('463008') : g('431972'))
        : (this.props.useDarkTheme
            ? (a = this.isPlaying() ? g('463003') : g('462853'))
            : (a = this.isPlaying() ? g('463005') : g('374088')),
          (c = this.isPlaying() ? i._('Pause') : i._('Play')));
      a = b('React').createElement(b('Image.react'), {
        className: '_rwt',
        src: a,
      });
      var d =
        (this.props.isLiveVideo ? '' : '_zbd') +
        (this.props.isLiveVideo ? ' _rx5' : '') +
        ' _2sm1';
      if (b('VideoPlayerExperiments').embeddedPlayerEnhancements)
        return b('React').createElement(
          b('AbstractButton.react'),
          babelHelpers['extends']({}, b('TooltipData').propsFor(c, 'above'), {
            className: d,
            'data-testid': b('VideoWebDriverIDs').PLAY_PAUSE_CONTROL,
            image: a,
            label: c,
            labelIsHidden: !0,
            onClick: this.onButtonClick.bind(this),
            onMouseOut: this.onMouseOut.bind(this),
            ref: 'button',
            tabIndex: this.props.tabIndex,
            type: 'button',
          })
        );
      else
        return b('React').createElement(b('AbstractButton.react'), {
          className: d,
          'data-testid': b('VideoWebDriverIDs').PLAY_PAUSE_CONTROL,
          image: a,
          label: c,
          labelIsHidden: !0,
          onClick: this.onButtonClick.bind(this),
          onMouseOut: this.onMouseOut.bind(this),
          ref: 'button',
          tabIndex: this.props.tabIndex,
          type: 'button',
        });
    };
    a.propTypes = {
      finishedPlaying: c.bool,
      isPlaying: c.bool,
      onPlay: c.func,
      onPause: c.func,
      tabIndex: c.string,
    };
    a.defaultProps = { useDarkTheme: !1 };
    e.exports = a;
  },
  null
);
__d(
  'VideoPlaybackRateControl.react',
  [
    'cx',
    'fbt',
    'AbstractButton.react',
    'React',
    'VideoPlayerExperiments',
    'shallowCompare',
  ],
  function (a, b, c, d, e, f, g, h) {
    __p && __p();
    var i;
    c = b('React').PropTypes;
    function j(a) {
      return a.toFixed(2).replace(/\.0+/, '.0') + 'x';
    }
    d = babelHelpers.inherits(a, b('React').Component);
    i = d && d.prototype;
    function a() {
      var a, b;
      for (var c = arguments.length, d = new Array(c), e = 0; e < c; e++)
        d[e] = arguments[e];
      return (
        (b = (a = i.constructor).call.apply(a, [this].concat(d))),
        (this.state = { isMenuOpen: !1, isFocusTriggeredByMouse: !1, rate: 1 }),
        (this.onFocus = function () {
          this.state.isFocusTriggeredByMouse ||
            this.setState({ isMenuOpen: !0 });
        }.bind(this)),
        (this.onBlur = function () {
          this.state.isFocusTriggeredByMouse
            ? this.setState({ isFocusTriggeredByMouse: !1 })
            : this.setState({ isMenuOpen: !1 });
        }.bind(this)),
        (this.onMouseDown = function () {
          return this.setState({ isFocusTriggeredByMouse: !0 });
        }.bind(this)),
        (this.onMouseOverButton = function () {
          return this.setState({ isMenuOpen: !0 });
        }.bind(this)),
        (this.onMouseLeave = function () {
          return this.setState({ isMenuOpen: !1 });
        }.bind(this)),
        b
      );
    }
    a.prototype.shouldComponentUpdate = function (a, c) {
      return b('shallowCompare')(this, a, c);
    };
    a.prototype.createRateItem = function (a, c, d) {
      var e = function (a) {
          d(), a.preventDefault();
        },
        f = null;
      c && (f = b('React').createElement('div', { className: '_2iw1' }));
      c = b('React').createElement(
        'div',
        { className: '_2iw3', style: { backgroundColor: 'inherit' } },
        f
      );
      return b('React').createElement(
        'a',
        {
          href: '#',
          key: a,
          className: '_2iw4',
          onClick: e,
          tabIndex: this.props.tabIndex,
        },
        c,
        b('React').createElement('div', { className: '_2iw5 _2iw6' }, a)
      );
    };
    a.prototype.render = function () {
      __p && __p();
      var a = j(this.state.rate),
        c = null;
      if (!this.props.disabled) {
        var d = [0.5, 1, 1.25, 1.5, 1.75, 2, 2.5, 3];
        d = d.map(
          function (a) {
            return this.createRateItem(
              j(a),
              this.state.rate == a,
              function () {
                this.props.onSelectPlaybackRate &&
                  this.props.onSelectPlaybackRate(a),
                  this.setState({ rate: a });
              }.bind(this)
            );
          }.bind(this)
        );
        c = b('React').createElement(
          'div',
          { className: '_67bw' + (this.state.isMenuOpen ? ' _2iw8' : '') },
          b('React').createElement(
            'div',
            { className: '_2i_w' },
            b('React').createElement(
              'div',
              { className: '_2i_x' },
              b('React').createElement(
                'div',
                { className: '_2iw5' },
                h._('Play Speed')
              ),
              d,
              b('React').createElement('div', { className: '_ukl' })
            )
          )
        );
      }
      d =
        '_zbd _66_y' +
        (!b('VideoPlayerExperiments').embeddedPlayerEnhancements ||
        !this.props.isEmbedded
          ? ' _66_z'
          : '');
      d = b('React').createElement(b('AbstractButton.react'), {
        className: d,
        label: a,
        onMouseDown: this.onMouseDown,
        onMouseOver: this.onMouseOverButton,
        ref: 'button',
        tabIndex: this.props.tabIndex,
        type: 'button',
      });
      return b('React').createElement(
        'div',
        {
          className: '_2j04',
          onFocus: this.onFocus,
          onBlur: this.onBlur,
          onMouseLeave: this.onMouseLeave,
        },
        d,
        c
      );
    };
    a.propTypes = {
      isEmbedded: c.bool,
      onSelectPlaybackRate: c.func,
      tabIndex: c.string,
    };
    a.defaultProps = { tabIndex: '-1' };
    e.exports = a;
  },
  null
);
__d(
  'DateConsts',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = 1e3;
    a = 60;
    b = 60;
    c = 24;
    d = 7;
    f = 12;
    var h = 1e3,
      i = 30.43,
      j = 365.242,
      k = a * b,
      l = k * c,
      m = l * d,
      n = l * j,
      o = g * a,
      p = o * b,
      q = g * l,
      r = q * d,
      s = q * j,
      t = {
        SUNDAY: 0,
        MONDAY: 1,
        TUESDAY: 2,
        WEDNESDAY: 3,
        THURSDAY: 4,
        FRIDAY: 5,
        SATURDAY: 6,
      };
    Object.freeze(t);
    t = {
      getDaysInMonth: function (a, b) {
        return new Date(a, b, 0).getDate();
      },
      getCurrentTimeInSeconds: function () {
        return Date.now() / g;
      },
      DAYS: t,
      MS_PER_SEC: g,
      MS_PER_MIN: o,
      MS_PER_HOUR: p,
      MS_PER_DAY: q,
      MS_PER_WEEK: r,
      MS_PER_YEAR: s,
      SEC_PER_MIN: a,
      SEC_PER_HOUR: k,
      SEC_PER_DAY: l,
      SEC_PER_WEEK: m,
      SEC_PER_YEAR: n,
      US_PER_MS: h,
      MIN_PER_HOUR: b,
      HOUR_PER_DAY: c,
      DAYS_PER_WEEK: d,
      MONTHS_PER_YEAR: f,
      AVG_DAYS_PER_MONTH: i,
      AVG_DAYS_PER_YEAR: j,
      private: { instantRange: { since: -864e10, until: 864e10 + 1 } },
    };
    e.exports = t;
  },
  null
);
__d(
  'VideoPlaybackTimer.react',
  [
    'cx',
    'DateConsts',
    'React',
    'VideoPlayerExperiments',
    'joinClasses',
    'shallowCompare',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h;
    c = b('React').PropTypes;
    d = babelHelpers.inherits(a, b('React').Component);
    h = d && d.prototype;
    function a(a) {
      h.constructor.call(this, a),
        (this.state = {
          displayRemainingTime: !this.props.displayElapsedTime,
          displayPreferenceSet: !1,
        });
    }
    a.prototype.shouldComponentUpdate = function (a, c) {
      return b('shallowCompare')(this, a, c);
    };
    a.prototype.UNSAFE_componentWillReceiveProps = function (a) {
      this.state.displayPreferenceSet ||
        this.setState({ displayRemainingTime: !a.displayElapsedTime });
    };
    a.prototype.getClock = function (a) {
      __p && __p();
      var c = '';
      isNaN(a) ? (a = 0) : a < 0 && ((a *= -1), (c = '-'));
      var d = Math.floor(a / b('DateConsts').SEC_PER_HOUR),
        e = Math.floor(
          (a - d * b('DateConsts').SEC_PER_HOUR) / b('DateConsts').SEC_PER_MIN
        ),
        f = null;
      !this.props.displayMilliseconds
        ? (f = Math.round(
            a -
              d * b('DateConsts').SEC_PER_HOUR -
              e * b('DateConsts').SEC_PER_MIN
          ))
        : (f = Math.floor(
            a -
              d * b('DateConsts').SEC_PER_HOUR -
              e * b('DateConsts').SEC_PER_MIN
          ));
      f === b('DateConsts').SEC_PER_MIN && ((f = 0), e++);
      e === b('DateConsts').MIN_PER_HOUR && ((e = 0), d++);
      a =
        a -
        d * b('DateConsts').SEC_PER_HOUR -
        e * b('DateConsts').SEC_PER_MIN -
        f;
      a = Math.round(a * b('DateConsts').MS_PER_SEC);
      var g = ('0' + e).slice(-2);
      f = ('0' + f).slice(-2);
      a = ('00' + a).slice(-3);
      c = c;
      d === 0 ? (c += e + ':' + f) : (c += d + ':' + g + ':' + f);
      this.props.displayMilliseconds && (c += '.' + a);
      return c;
    };
    a.prototype.onButtonClick = function () {
      this.setState({
        displayRemainingTime: !this.state.displayRemainingTime,
        displayPreferenceSet: !0,
      });
    };
    a.prototype.render = function () {
      __p && __p();
      var a = this.state.displayPreferenceSet
        ? this.state.displayRemainingTime
        : !this.props.displayElapsedTime;
      a = a ? this.props.remainingTimestamp : this.props.playbackPosTimestamp;
      var c =
        '_66_y' +
        ((!b('VideoPlayerExperiments').embeddedPlayerEnhancements ||
          !this.props.isEmbedded) &&
        !this.props.displayBothTimes
          ? ' _66_z'
          : '');
      this.props.isInScrubberPreview && (c = '_66_-');
      var d = Object.assign({}, this.props);
      delete d.displayElapsedTime;
      delete d.displayMilliseconds;
      delete d.isInScrubberPreview;
      delete d.playbackPosTimestamp;
      delete d.remainingTimestamp;
      delete d.isEmbedded;
      return this.props.displayBothTimes
        ? b('React').createElement(
            'div',
            babelHelpers['extends']({}, d, {
              className: b('joinClasses')(this.props.className, c),
            }),
            b('React').createElement(
              'span',
              { className: '_66_z' },
              this.getClock(this.props.playbackPosTimestamp)
            ),
            b('React').createElement('span', null, ' / '),
            b('React').createElement(
              'span',
              null,
              this.getClock(this.props.playbackDurationTimestamp)
            )
          )
        : b('React').createElement(
            'div',
            babelHelpers['extends']({}, d, {
              className: b('joinClasses')(this.props.className, c),
              onClick: this.props.isLiveVideo
                ? undefined
                : this.onButtonClick.bind(this),
              role: 'button',
              tabIndex: '0',
            }),
            this.getClock(a)
          );
    };
    a.propTypes = {
      isEmbedded: c.bool,
      isInScrubberPreview: c.bool,
      playbackDurationTimestamp: c.number,
      playbackPosTimestamp: c.number,
      remainingTimestamp: c.number,
      displayElapsedTime: c.bool,
      displayMilliseconds: c.bool,
      displayBothTimes: c.bool,
      useDarkTheme: c.bool,
    };
    a.defaultProps = {
      isInScrubberPreview: !1,
      playbackDurationTimestamp: 0,
      playbackPosTimestamp: 0,
      remainingTimestamp: 0,
      displayElapsedTime: !1,
      displayMilliseconds: !1,
      displayBothTimes: !1,
      useDarkTheme: !1,
    };
    e.exports = a;
  },
  null
);
__d(
  'prevNextControlActionTypes',
  [],
  function (a, b, c, d, e, f) {
    a = { ADD_ID: 'ADD_ID', POP_ID: 'POP_ID' };
    e.exports = a;
  },
  null
);
__d(
  'prevNextControlReducer',
  ['prevNextControlActionTypes'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = { videoIdQueue: [] };
    a = function (a, c) {
      a === void 0 && (a = g);
      switch (c.type) {
        case b('prevNextControlActionTypes').ADD_ID:
          if (c.payload !== undefined)
            return { videoIdQueue: a.videoIdQueue.concat(c.payload) };
          else return a;
        case b('prevNextControlActionTypes').POP_ID:
          return {
            videoIdQueue: a.videoIdQueue.slice(0, a.videoIdQueue.length - 1),
          };
        default:
          return a;
      }
    };
    e.exports = a;
  },
  null
);
__d(
  'prevNextControlStore',
  ['prevNextControlReducer', 'redux'],
  function (a, b, c, d, e, f) {
    a = b('redux').createStore(b('prevNextControlReducer'));
    e.exports = a;
  },
  null
);
__d(
  'VideoPrevControl.react',
  [
    'ix',
    'cx',
    'fbt',
    'AbstractButton.react',
    'AsyncRequest',
    'Image.react',
    'PrevVideoControlOverlay.react',
    'React',
    'TahoeLoggerEvent',
    'TahoeTypedLogger',
    'URI',
    'XTahoeVideoDataAsyncController',
    'asset',
    'prevNextControlStore',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    __p && __p();
    var j,
      k = 500;
    c = babelHelpers.inherits(a, b('React').Component);
    j = c && c.prototype;
    function a() {
      var a, b;
      for (var c = arguments.length, d = new Array(c), e = 0; e < c; e++)
        d[e] = arguments[e];
      return (
        (b = (a = j.constructor).call.apply(a, [this].concat(d))),
        (this.state = { mouseOnBtn: !1 }),
        b
      );
    }
    a.prototype.componentDidMount = function () {
      b('prevNextControlStore').subscribe(this.forceUpdate.bind(this));
    };
    a.prototype.shouldComponentUpdate = function (a, b) {
      return this.state.mouseOnBtn !== b.mouseOnBtn;
    };
    a.prototype.render = function () {
      var a = b('React').createElement(b('Image.react'), {
          className: '_rwt',
          src: g('597342'),
        }),
        c = b('prevNextControlStore').getState().videoIdQueue,
        d = b('React').createElement(b('PrevVideoControlOverlay.react'), {
          currentVideoID: this.props.videoID,
          prevVideoID: c[c.length - 1],
          mouseOnBtn: this.state.mouseOnBtn,
        });
      return b('React').createElement(
        'div',
        { className: '_6bup _6eal' },
        b('React').createElement(b('AbstractButton.react'), {
          className: '_zbd _6auz' + (c.length === 0 ? ' _132h' : ''),
          image: a,
          label: i._('PREVIOUS'),
          labelIsHidden: !0,
          onMouseEnter: this.$1.bind(this),
          onMouseLeave: this.$2.bind(this),
          onClick: this.$3.bind(this),
          type: 'button',
        }),
        d
      );
    };
    a.prototype.$2 = function () {
      this.state.mouseOnBtn &&
        setTimeout(
          function () {
            this.setState({ mouseOnBtn: !1 });
          }.bind(this),
          k
        );
    };
    a.prototype.$1 = function () {
      new (b('TahoeTypedLogger'))()
        .setEvent(b('TahoeLoggerEvent').PREV_CONTROL_OVERLAY_SHOWN)
        .setMediaID(this.props.videoID)
        .log(),
        this.state.mouseOnBtn || this.setState({ mouseOnBtn: !0 });
    };
    a.prototype.$3 = function () {
      __p && __p();
      new (b('TahoeTypedLogger'))()
        .setEvent(b('TahoeLoggerEvent').PREV_CONTROL_CLICK)
        .setMediaID(this.props.videoID)
        .log();
      var a = b('prevNextControlStore').getState().videoIdQueue;
      if (a.length > 0) {
        a = a[a.length - 1];
        new (b('AsyncRequest'))(
          b('XTahoeVideoDataAsyncController')
            .getURIBuilder()
            .setFBIDSet('video_ids', [a])
            .getURI()
        )
          .setHandler(function (a) {
            a =
              (a = a) != null
                ? (a = a.payload) != null
                  ? a.videosData
                  : a
                : a;
            if (a && a.length > 0 && a[0]) {
              a = a[0].permalink;
              a && b('URI').go(a);
            }
          })
          .send();
      }
    };
    e.exports = a;
  },
  null
);
__d(
  'AdBreakInsertionDisabledReason',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      BRANDED_CONTENT: 'branded_content',
      BROADCAST: 'broadcast',
      HAS_LIVE_AD_BREAKS: 'has_live_ad_breaks',
      NO_PERMISSION: 'no_permission',
      NOT_ONBOARDED: 'not_onboarded',
      NOT_ORGANIC_UPLOAD: 'not_organic_upload',
      TRIMMED_VIDEO_TOO_SHORT: 'trimmed_video_too_short',
      VIDEO_TOO_SHORT: 'video_too_short',
    });
  },
  null
);
__d(
  'VideoInstreamUtils',
  [
    'fbt',
    'AdBreakInsertionDisabledReason',
    'DateConsts',
    'VideoInstreamAdsConstants',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h = {
      convertFormattedTimeToSeconds: function (a) {
        __p && __p();
        var c = 0;
        a = a.split('.');
        if (a.length > 2) return null;
        if (a.length === 2) {
          if (a[1].length === 0) return null;
          var d = a[1];
          while (d.length < 3) d += '0';
          d = Number(d);
          if (isNaN(d) || d < 0 || d >= b('DateConsts').MS_PER_SEC) return null;
          c += d / b('DateConsts').MS_PER_SEC;
        }
        d = a[0].split(':');
        if (d.length > 3) return null;
        for (var a = 0; a < d.length; a++) {
          if (d[a].length === 0) return null;
          var e = Number(d[a]);
          if (isNaN(e) || e < 0 || e >= 60) return null;
          c += e * Math.pow(60, d.length - a - 1);
        }
        return c;
      },
      convertTimestampToFormattedString: function (a) {
        __p && __p();
        a =
          Math.round(a * b('DateConsts').MS_PER_SEC) /
          b('DateConsts').MS_PER_SEC;
        var c = Math.floor(a / b('DateConsts').SEC_PER_HOUR);
        a = a - c * b('DateConsts').SEC_PER_HOUR;
        var d = Math.floor(a / b('DateConsts').SEC_PER_MIN),
          e = Math.floor(a - d * b('DateConsts').SEC_PER_MIN);
        a = Math.round(a * b('DateConsts').MS_PER_SEC);
        var f = ('0' + c).slice(-2);
        d = ('0' + d).slice(-2);
        e = ('0' + e).slice(-2);
        a = ('00' + a).slice(-3);
        var g = '';
        c > 0 && (g += f + ':');
        return (g += d + ':' + e + '.' + a);
      },
      getMaxPossibleAdBreaks: function (a, c) {
        a = Math.ceil(a) * b('DateConsts').MS_PER_SEC;
        if (
          a <
          b('VideoInstreamAdsConstants').AD_INSERTION_MINIMUM_VIDEO_LENGTH_MS
        )
          return 0;
        if (!c)
          return b('VideoInstreamAdsConstants')
            .AD_INSERTION_MAXIMUM_NUMBER_OF_AD_BREAKS;
        c =
          (a -
            b('VideoInstreamAdsConstants').AD_INSERTION_END_TIME_OFFSET_MS -
            b('VideoInstreamAdsConstants').AD_INSERTION_START_TIME_OFFSET_MS) /
          b('VideoInstreamAdsConstants').AD_INSERTION_INTERVAL_MS;
        return Math.max(0, Math.floor(c) + 1);
      },
      getEligibleTimeSegments: function (a, c, d) {
        __p && __p();
        var e = h.getMaxPossibleAdBreaks(c, d);
        if (e === 0 || (!d && a.length >= e)) return [];
        var f =
            b('VideoInstreamAdsConstants').AD_INSERTION_START_TIME_OFFSET_MS /
            b('DateConsts').MS_PER_SEC,
          g =
            c -
            b('VideoInstreamAdsConstants').AD_INSERTION_END_TIME_OFFSET_MS /
              b('DateConsts').MS_PER_SEC,
          i =
            b('VideoInstreamAdsConstants').AD_INSERTION_INTERVAL_MS /
            b('DateConsts').MS_PER_SEC;
        if (a.length === 0 || !d) return [{ start: f, end: g }];
        var j = [];
        a.forEach(function (b, c) {
          __p && __p();
          if (c === 0) {
            var d = b.timeOffset - i;
            d >= f && j.push({ start: f, end: d });
          }
          if (c - 1 >= 0) {
            d = a[c - 1].timeOffset + i;
            var e = b.timeOffset - i;
            d <= e && j.push({ start: d, end: e });
          }
          if (c === a.length - 1) {
            d = b.timeOffset + i;
            d <= g && j.push({ start: d, end: g });
          }
        });
        return j;
      },
      isInEligibleTimeSegments: function (a, b, c, d) {
        if (a === null || a === undefined) return !1;
        c = h.getEligibleTimeSegments(c, b, d);
        for (var b = 0; b < c.length; b++)
          if (a >= c[b].start && a <= c[b].end) return !0;
        return !1;
      },
      isAdBreakViolatingInsertionRules: function (a, c, d, e) {
        __p && __p();
        var f = a[c];
        if (
          f.timeOffset * b('DateConsts').MS_PER_SEC <
          b('VideoInstreamAdsConstants').AD_INSERTION_START_TIME_OFFSET_MS
        )
          return !0;
        if (
          (d - f.timeOffset) * b('DateConsts').MS_PER_SEC <
          b('VideoInstreamAdsConstants').AD_INSERTION_END_TIME_OFFSET_MS
        )
          return !0;
        if (e)
          for (var d = 0; d < a.length; d++) {
            if (d === c || a[d].timeOffset >= f.timeOffset) continue;
            if (
              (f.timeOffset - a[d].timeOffset) * b('DateConsts').MS_PER_SEC <
              b('VideoInstreamAdsConstants').AD_INSERTION_INTERVAL_MS
            )
              return !0;
          }
        return !1;
      },
      getAdBreakTabState: function (a, c, d, e) {
        a = new Set(a);
        h.getMaxPossibleAdBreaks(d, e) === 0 &&
          a.add(b('AdBreakInsertionDisabledReason').VIDEO_TOO_SHORT);
        c && a.add(b('AdBreakInsertionDisabledReason').BRANDED_CONTENT);
        return this._getAdBreakTabStateFromDisabledReasons(a);
      },
      _getAdBreakTabStateFromDisabledReasons: function (a) {
        if (a.size === 0)
          return {
            disabled: !1,
            errorMessageHeader: null,
            errorMessageContent: null,
          };
        else if (a.has(b('AdBreakInsertionDisabledReason').VIDEO_TOO_SHORT))
          return {
            disabled: !0,
            errorMessageHeader: g._(
              { '*': 'Videos Must Be {insertion interval} Seconds or Longer' },
              [
                g._param(
                  'insertion interval',
                  b('VideoInstreamAdsConstants')
                    .AD_INSERTION_MINIMUM_VIDEO_LENGTH,
                  [0]
                ),
              ]
            ),
            errorMessageContent: g._(
              'Your video is too short to include ad breaks.'
            ),
          };
        else if (a.has(b('AdBreakInsertionDisabledReason').NOT_ORGANIC_UPLOAD))
          return {
            disabled: !0,
            errorMessageHeader: g._('Ad Breaks Not Available'),
            errorMessageContent: g._(
              'Ad breaks can only be placed in original videos, not crossposted or reshared videos.'
            ),
          };
        else if (a.has(b('AdBreakInsertionDisabledReason').BRANDED_CONTENT))
          return {
            disabled: !0,
            errorMessageHeader: g._('Ad Breaks Not Available'),
            errorMessageContent: g._(
              "Ad breaks can't be used in this video because it contains tagged business partners."
            ),
          };
        return {
          disabled: !0,
          errorMessageHeader: g._('Ad Breaks Not Available'),
          errorMessageContent: null,
        };
      },
    };
    e.exports = h;
  },
  null
);
__d(
  'isKeyActivation',
  ['Keys'],
  function (a, b, c, d, e, f) {
    function a(event) {
      var a = 0,
        c = event.charCode,
        d = event.keyCode;
      c != null && c !== 0 ? (a = c) : d != null && d !== 0 && (a = d);
      return [b('Keys').RETURN, b('Keys').SPACE].includes(a);
    }
    e.exports = a;
  },
  null
);
__d(
  'KeyActivationToClickHOC.react',
  ['React', 'isKeyActivation'],
  function (a, b, c, d, e, f) {
    __p && __p();
    a = function (a) {
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
              var a;
              for (
                var c = arguments.length, e = new Array(c), f = 0;
                f < c;
                f++
              )
                e[f] = arguments[f];
              (a = d.constructor).call.apply(a, [this].concat(e));
              this.$2 = function (event) {
                b('isKeyActivation')(event) &&
                  (event.preventDefault(),
                  event.stopPropagation(),
                  this.$1 && this.$1.click());
              }.bind(this);
              this.$3 = function (a) {
                this.$1 = a;
              }.bind(this);
              this.$1 = null;
            }
            e.prototype.render = function () {
              return b('React').createElement(
                a,
                babelHelpers['extends']({}, this.props, {
                  keyActivationToClickEvent: this.$2,
                  keyActivationToClickRef: this.$3,
                })
              );
            };
            return e;
          })()),
        (c.displayName = 'KeyActivationToClickHOC'),
        d
      );
    };
    e.exports = a;
  },
  null
);
__d(
  'ShimButton.react',
  ['KeyActivationToClickHOC.react', 'React', 'emptyFunction'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g;
    c = b('React').PropTypes;
    d = babelHelpers.inherits(a, b('React').Component);
    g = d && d.prototype;
    function a() {
      var a, b;
      for (var c = arguments.length, d = new Array(c), e = 0; e < c; e++)
        d[e] = arguments[e];
      return (
        (b = (a = g.constructor).call.apply(a, [this].concat(d))),
        (this.$1 = function (event) {
          this.props.keyActivationToClickEvent(event),
            this.props.onKeyPress(event);
        }.bind(this)),
        (this.$2 = function (a) {
          this.props.keyActivationToClickRef(a), this.props.onRef(a);
        }.bind(this)),
        b
      );
    }
    a.prototype.render = function () {
      __p && __p();
      var a = this.props,
        c = a.children,
        d = a.form,
        e = a.inline;
      a.keyActivationToClickEvent;
      a.keyActivationToClickRef;
      a.onRef;
      var f = a.pressed;
      a = babelHelpers.objectWithoutProperties(a, [
        'children',
        'form',
        'inline',
        'keyActivationToClickEvent',
        'keyActivationToClickRef',
        'onRef',
        'pressed',
      ]);
      e = e ? 'span' : 'div';
      d === 'link' && (e = 'a');
      return b('React').createElement(
        e,
        babelHelpers['extends']({}, a, {
          'aria-pressed': f,
          ref: this.$2,
          role: 'button',
          onKeyPress: this.$1,
        }),
        c
      );
    };
    a.defaultProps = {
      form: 'none',
      inline: !1,
      keyActivationToClickRef: b('emptyFunction'),
      tabIndex: '0',
      onClick: b('emptyFunction'),
      onKeyPress: b('emptyFunction'),
      onRef: b('emptyFunction'),
    };
    a.propTypes = {
      children: c.any,
      form: c.oneOf(['none', 'link']),
      inline: c.bool,
      tabIndex: c.oneOf(['-1', '0', -1, 0]),
      onClick: c.func,
      onKeyPress: c.func,
      onRef: c.func,
    };
    e.exports = b('KeyActivationToClickHOC.react')(a);
  },
  null
);
__d(
  'VideoScrubberAnnotatedMomentOfInterest.react',
  [
    'cx',
    'React',
    'ShimButton.react',
    'SUIAtlasChromeTheme',
    'SUITooltip.react',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h;
    c = b('React').PropTypes;
    h = babelHelpers.inherits(a, b('React').PureComponent);
    h && h.prototype;
    a.prototype.render = function () {
      var a = this.props.timestamp;
      if (a < 0 || a > this.props.playbackDuration)
        return b('React').createElement('div', null);
      var c = (a * 100) / this.props.playbackDuration + '%',
        d = this.props.annotation;
      return b('React').createElement(
        'div',
        { style: { marginLeft: c } },
        b('React').createElement(
          'div',
          { className: '_2egj' },
          b('React').createElement(
            b('SUITooltip.react'),
            {
              alignment: 'center',
              tooltip: d,
              theme: b('SUIAtlasChromeTheme'),
              offset: 10,
              maxWidth: 150,
            },
            b('React').createElement(b('ShimButton.react'), {
              className: '_2egk _2egl',
              onClick: function (b) {
                return this.props.onPointOfInterestSelect(a);
              }.bind(this),
              style: { left: c },
            })
          )
        )
      );
    };
    function a() {
      h.apply(this, arguments);
    }
    a.propTypes = {
      annotation: c.string.isRequired,
      playbackDuration: c.number.isRequired,
      timestamp: c.number.isRequired,
      onPointOfInterestSelect: c.func.isRequired,
    };
    e.exports = a;
  },
  null
);
__d(
  'VideoScrubberAnnotatedMomentOfInterestBar.react',
  ['cx', 'React', 'VideoScrubberAnnotatedMomentOfInterest.react'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h;
    c = b('React').PropTypes;
    h = babelHelpers.inherits(a, b('React').Component);
    h && h.prototype;
    a.prototype.$1 = function (a, c) {
      return b('React').createElement(
        b('VideoScrubberAnnotatedMomentOfInterest.react'),
        {
          key: 'poi' + a,
          annotation: c,
          playbackDuration: this.props.playbackDuration,
          timestamp: a,
          onPointOfInterestSelect: this.props.onPointOfInterestSelect,
        }
      );
    };
    a.prototype.render = function () {
      return b('React').createElement(
        'div',
        { className: '_3fh5' },
        b('React').createElement(
          'div',
          { className: '_3fh8' },
          Object.entries(this.props.pointsOfInterest).map(
            function (a) {
              var b = a[0];
              a = a[1];
              return this.$1(parseInt(b, 10), String(a));
            }.bind(this)
          )
        )
      );
    };
    function a() {
      h.apply(this, arguments);
    }
    a.propTypes = {
      playbackDuration: c.number.isRequired,
      onPointOfInterestSelect: c.func.isRequired,
      pointsOfInterest: c.object.isRequired,
    };
    e.exports = a;
  },
  null
);
__d(
  'VideoScrubberPointOfInterestBar.react',
  ['cx', 'React', 'ShimButton.react', 'VideoPlaybackTimer.react'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h, i;
    c = b('React').PropTypes;
    d = babelHelpers.inherits(j, b('React').PureComponent);
    h = d && d.prototype;
    function j() {
      var a, b;
      for (var c = arguments.length, d = new Array(c), e = 0; e < c; e++)
        d[e] = arguments[e];
      return (
        (b = (a = h.constructor).call.apply(a, [this].concat(d))),
        (this.state = { visibility: 'hidden' }),
        b
      );
    }
    j.prototype.render = function () {
      var a = this.props.timestamp,
        c = (a * 100) / this.props.playbackDuration + '%',
        d = b('React').createElement(b('VideoPlaybackTimer.react'), {
          className: '_zs-',
          isInScrubberPreview: !0,
          playbackPosTimestamp: 0,
          remainingTimestamp: a,
          style: { left: c, visibility: this.state.visibility },
        });
      return b('React').createElement(
        'div',
        null,
        b('React').createElement(b('ShimButton.react'), {
          className: '_zt2' + (this.props.isActive ? ' _zt3' : ''),
          onClick: function (b) {
            return this.props.onPointOfInterestSelect(a);
          }.bind(this),
          onMouseEnter: function (a) {
            return this.setState({ visibility: 'visible' });
          }.bind(this),
          onMouseLeave: function (a) {
            return this.setState({ visibility: 'hidden' });
          }.bind(this),
          style: { left: c },
        }),
        this.props.showPointOfInterestTimestamps && d
      );
    };
    j.propTypes = {
      playbackDuration: c.number.isRequired,
      timestamp: c.number.isRequired,
      isActive: c.bool.isRequired,
      showPointOfInterestTimestamps: c.bool.isRequired,
      onPointOfInterestSelect: c.func.isRequired,
    };
    f = babelHelpers.inherits(a, b('React').Component);
    i = f && f.prototype;
    function a() {
      var a, c;
      for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
        e[f] = arguments[f];
      return (
        (c = (a = i.constructor).call.apply(a, [this].concat(e))),
        (this.$1 = function (a) {
          return b('React').createElement(j, {
            key: 'poi' + a,
            playbackDuration: this.props.playbackDuration,
            timestamp: a,
            isActive: a === this.props.currentPointOfInterest,
            onPointOfInterestSelect: this.props.onPointOfInterestSelect,
            showPointOfInterestTimestamps:
              !!this.props.showPointOfInterestTimestamps,
          });
        }.bind(this)),
        c
      );
    }
    a.prototype.shouldComponentUpdate = function (a, b) {
      return (
        a.tabIndex != this.props.tabIndex ||
        a.currentPointOfInterest !== this.props.currentPointOfInterest ||
        a.playbackDuration != this.props.playbackDuration ||
        a.pointsOfInterest.length != this.props.pointsOfInterest.length ||
        a.pointsOfInterest.some(
          function (a, b) {
            return this.props.pointsOfInterest[b] != a;
          }.bind(this)
        )
      );
    };
    a.prototype.render = function () {
      return b('React').createElement(
        'div',
        { className: '_zud', tabIndex: this.props.tabIndex },
        b('React').createElement(
          'div',
          { className: '_zue' },
          this.props.pointsOfInterest.map(this.$1, this)
        )
      );
    };
    a.propTypes = {
      tabIndex: c.string.isRequired,
      playbackDuration: c.number.isRequired,
      onPointOfInterestSelect: c.func.isRequired,
      currentPointOfInterest: c.number,
      pointsOfInterest: c.array.isRequired,
      showPointOfInterestTimestamps: c.bool,
    };
    e.exports = a;
  },
  null
);
__d(
  'VideoScrubberPreviewSpriteCalculation',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    a = {
      getImageCoordinatesInSpriteByTime: function (a, b) {
        var c = this.getTotalTimeInSprite(
          b.maxImagesPerSprite,
          b.timeIntervalBetweenImages
        );
        a = Math.floor((a % c) / b.timeIntervalBetweenImages);
        c = Math.floor(a / b.imagesPerRow);
        a = a % b.imagesPerRow;
        return {
          x: a * b.previewScrubberWidth,
          y: c * b.previewScrubberHeight,
        };
      },
      getSpriteIndex: function (a, b, c) {
        b = this.getTotalTimeInSprite(b, c);
        return Math.floor(a / b) + 1;
      },
      getTotalTimeInSprite: function (a, b) {
        return a * b;
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'VideoStereoFormat',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      MONO: 'mono',
      LEFT_RIGHT: 'left-right',
      TOP_BOTTOM: 'top-bottom',
    });
  },
  null
);
__d(
  'VideoScrubber.react',
  [
    'cx',
    'fbt',
    'BootloadedComponent.react',
    'DateConsts',
    'EventListener',
    'JSResource',
    'Keys',
    'ProfileTile.react',
    'React',
    'ReactDOM',
    'Tooltip.react',
    'VideoInstreamAdsConstants',
    'VideoInstreamUtils',
    'VideoPlaybackTimer.react',
    'VideoScrubberAnnotatedMomentOfInterestBar.react',
    'VideoScrubberPointOfInterestBar.react',
    'VideoScrubberPreviewSpriteCalculation',
    'VideoStereoFormat',
    'emptyFunction',
    'getElementPosition',
    'gkx',
    'joinClasses',
    'shallowCompare',
  ],
  function (a, b, c, d, e, f, g, h) {
    __p && __p();
    var i;
    c = b('React').PropTypes;
    d = babelHelpers.inherits(a, b('React').Component);
    i = d && d.prototype;
    function a(a) {
      i.constructor.call(this, a),
        (this.$6 = new Map()),
        this.$6.set(0, ''),
        (this.$9 = 0),
        (this.state = {
          awaitingUpdate: !1,
          barCoords: { x: 0, y: 0, height: 0, width: 0 },
          mouseOver: !1,
          nubEngaged: !1,
          previewRatio: 0,
          scrubRatio: 0,
          timecodeRatio: 0,
          timecodeTimestamp: 0,
          scrubberPreviewSpriteIndex: 0,
          scrubberPreviewBackgroundPosition: { x: 0, y: 0 },
          previewThumbnailInformation: {
            timeIntervalBetweenImages: 0,
            maxImagesPerSprite: 0,
            imagesPerRow: 0,
            imagesPerColumn: 0,
            previewScrubberWidth: 0,
            previewScrubberHeight: 0,
            stereoMode: null,
            scrubberVideoURI: null,
            useScrubberVideo: !1,
          },
          lastSpriteDimension: { numRow: 0, numColumn: 0 },
          shouldIgnoreClipStartTS: !1,
        });
    }
    a.prototype.shouldComponentUpdate = function (a, c) {
      return b('shallowCompare')(this, a, c);
    };
    a.prototype.onDragNubBeginImpl = function (a, b) {
      this.setState({
        nubEngaged: !0,
        scrubRatio: this.getPositionRatio(b, this.state.barCoords),
      }),
        this.props.onScrubBegin && this.props.onScrubBegin(),
        a.stopPropagation(),
        a.preventDefault();
    };
    a.prototype.onDragNubBeginClick = function (a) {
      if (a.button !== 0) return;
      this.onDragNubBeginImpl(a, a.clientX);
    };
    a.prototype.onDragNubBeginTouch = function (a) {
      if (this.props.alwaysShowThumbnail) return;
      a.persist();
      var c = b('getElementPosition')(b('ReactDOM').findDOMNode(this.refs.bar));
      this.setState(
        { barCoords: c },
        function () {
          return this.onDragNubBeginImpl(a, a.touches[0].clientX);
        }.bind(this)
      );
    };
    a.prototype.UNSAFE_componentWillReceiveProps = function (a) {
      this.setState({ awaitingUpdate: !1 });
      if (this.props.alwaysShowThumbnail) {
        var c = b('getElementPosition')(
          b('ReactDOM').findDOMNode(this.refs.bar)
        );
        this.setState({ barCoords: c });
        this.$8 = null;
        this.$7 = null;
        this.timecodeUpdate(
          c.x +
            c.width *
              this.getPlayedRatio(a.playbackDuration, a.playbackPosition)
        );
      }
    };
    a.prototype.componentDidUpdate = function (a, c) {
      !c.nubEngaged && this.state.nubEngaged
        ? ((this.$1 = b('EventListener').listen(
            document,
            'mousemove',
            function (a) {
              this.onDragNubUpdate(a.clientX),
                this.onTimecodeUpdate(a, a.clientX);
            }.bind(this)
          )),
          (this.$2 = b('EventListener').listen(
            document,
            'mouseup',
            this.onDragNubRelease.bind(this)
          )),
          (this.$4 = b('EventListener').listen(
            document,
            'touchmove',
            function (a) {
              this.onDragNubUpdate(a.touches[0].clientX),
                this.onTimecodeUpdate(a, a.touches[0].clientX);
            }.bind(this)
          )),
          (this.$3 = b('EventListener').listen(
            document,
            'touchend',
            this.onDragNubRelease.bind(this)
          )))
        : c.nubEngaged &&
          !this.state.nubEngaged &&
          (this.$1 && this.$1.remove(),
          this.$2 && this.$2.remove(),
          this.$4 && this.$4.remove(),
          this.$3 && this.$3.remove()),
        !c.mouseOver && this.state.mouseOver
          ? (this.$5 = b('EventListener').listen(
              document,
              'mousemove',
              function (a) {
                return this.onTimecodeUpdate(a, a.clientX);
              }.bind(this)
            ))
          : c.mouseOver && !this.state.mouseOver && this.$5 && this.$5.remove();
    };
    a.prototype.timecodeUpdate = function (a) {
      __p && __p();
      var c = this.props.playbackDuration;
      if (!c) return;
      var d = this.getPositionRatio(a, this.state.barCoords) * c,
        e = this.$7
          ? this.$7
          : b('getElementPosition')(
              b('ReactDOM').findDOMNode(this.refs.timecode)
            );
      this.$7 = e;
      if (!this.props.hasScrubberPreview) {
        c =
          this.getPositionRatio(a, this.state.barCoords) -
          Math.ceil(e.width / 2) / this.state.barCoords.width;
        this.setState({ timecodeTimestamp: d, timecodeRatio: c });
      } else
        this.props.previewThumbnailInformation &&
          (this.state.previewThumbnailInformation.previewScrubberWidth === 0 &&
            this.retrievePreviewThumbnailInfo(),
          b('ReactDOM').unstable_batchedUpdates(
            function () {
              this.state.previewThumbnailInformation.useScrubberVideo &&
              this.state.previewThumbnailInformation.scrubberVideoURI !== null
                ? this.updatePreviewThumbnailVideo(d, e, a)
                : this.props.scrubberPreviewSprites &&
                  this.updatePreviewThumbnail(
                    this.props.scrubberPreviewSprites,
                    d,
                    e,
                    a
                  );
            }.bind(this)
          ));
    };
    a.prototype.onTimecodeUpdate = function (a, b) {
      this.timecodeUpdate(b), a.preventDefault(), a.stopPropagation();
    };
    a.prototype.updatePreviewThumbnail = function (a, b, c, d) {
      __p && __p();
      this.setState({ timecodeTimestamp: b });
      b = Math.floor(b);
      var e = this.$6;
      this.isSpriteMapURIFetched() || (this.$6 = a);
      if (this.state.previewThumbnailInformation) {
        a = this.state.previewThumbnailInformation;
        this.updatePreviewThumbnailImage(b, a, e);
      }
      this.updatePreviewThumbnailLocation(c, d);
    };
    a.prototype.updatePreviewThumbnailVideo = function (a, c, d) {
      this.setState({ timecodeTimestamp: a });
      var e = b('ReactDOM').findDOMNode(this.refs.previewThumbnailVideo);
      e.currentTime = a / 30;
      this.updatePreviewThumbnailLocation(c, d);
    };
    a.prototype.updatePreviewThumbnailLocation = function (a, c) {
      var d = this.$8
        ? this.$8
        : (this.$8 = b('getElementPosition')(
            b('ReactDOM').findDOMNode(this.refs.previewThumbnailContainer)
          ));
      this.$8 = d;
      c =
        this.getPositionRatio(c, this.state.barCoords) -
        Math.ceil(d.width / 2) / this.state.barCoords.width;
      a = (d.width - a.width) / (2 * d.width);
      this.setState({ timecodeRatio: a, previewRatio: c });
    };
    a.prototype.updatePreviewThumbnailImage = function (a, c, d) {
      __p && __p();
      d = b(
        'VideoScrubberPreviewSpriteCalculation'
      ).getImageCoordinatesInSpriteByTime(a, c);
      a = b('VideoScrubberPreviewSpriteCalculation').getSpriteIndex(
        a,
        c.maxImagesPerSprite,
        c.timeIntervalBetweenImages
      );
      if (
        a == this.getNumberOfSprites() &&
        this.state.lastSpriteDimension.numRow == 0 &&
        this.$6
      ) {
        c = this.$6.get(a);
        var e = new Image(),
          f = this.onLastImageLoad.bind(this);
        e.onload = function () {
          f(this.width, this.height);
        };
        e.src = c;
      }
      this.setState({
        scrubberPreviewSpriteIndex: a,
        scrubberPreviewBackgroundPosition: d,
      });
    };
    a.prototype.onLastImageLoad = function (a, b) {
      this.setState({
        lastSpriteDimension: {
          numRow:
            b / this.state.previewThumbnailInformation.previewScrubberHeight,
          numColumn:
            a / this.state.previewThumbnailInformation.previewScrubberWidth,
        },
      });
    };
    a.prototype.retrievePreviewThumbnailInfo = function () {
      this.setState({
        previewThumbnailInformation: this.props.previewThumbnailInformation,
      });
    };
    a.prototype.isSpriteMapURIFetched = function () {
      if (this.$6) return this.$6.size > 1;
      else return !1;
    };
    a.prototype.getPositionRatio = function (a, b) {
      a = a - b.x;
      a = a / b.width;
      return Math.min(Math.max(0, a), 1);
    };
    a.prototype.onDragNubUpdate = function (a) {
      this.setState({
        scrubRatio: this.getPositionRatio(a, this.state.barCoords),
      });
    };
    a.prototype.onDragNubRelease = function (a) {
      __p && __p();
      var c = this.props.playbackDuration;
      if (!c) return;
      var d = this.state.awaitingUpdate;
      c = this.state.scrubRatio * c;
      this.props.onScrubEnd && (this.props.onScrubEnd(c), (d = !0));
      var e = this.props.videoClipInfo;
      e &&
        e.start_time_in_ms !== null &&
        c <= e.start_time_in_ms / b('DateConsts').MS_PER_SEC &&
        this.setState({ shouldIgnoreClipStartTS: !0 });
      this.setState({ nubEngaged: !1, awaitingUpdate: d });
      a.preventDefault();
      a.stopPropagation();
    };
    a.prototype.getPlayedRatio = function (a, b) {
      if (this.state.nubEngaged || this.state.awaitingUpdate)
        return this.state.scrubRatio;
      if (!a || !b) return 0;
      b = b / a;
      return this.getRangeLimitedRatio(b);
    };
    a.prototype.getBufferedRatio = function () {
      var a = this.props.playbackDuration,
        b = this.props.bufferedPosition;
      if (!a || !b) return 0;
      b = b / a;
      return this.getRangeLimitedRatio(b);
    };
    a.prototype.getRangeLimitedRatio = function (a) {
      return isNaN(a) || a < 0 || a > 1 ? 0 : a;
    };
    a.prototype.getNumberOfSprites = function () {
      return this.$6 ? this.$6.size : 0;
    };
    a.prototype.getAdBreakIndicators = function () {
      __p && __p();
      if (!this.props.playbackDuration || !this.props.adBreaks) return null;
      var a = [];
      for (var c = 0; c < this.props.adBreaks.length; c++) {
        var d = this.props.adBreaks[c],
          e = d.getTimeOffsetInMs();
        if (e === null || e === undefined) continue;
        e /= b('DateConsts').MS_PER_SEC;
        var f = this.props.playbackDuration;
        if (e < 0 || e > f) continue;
        e = { left: (e / f) * 100 + '%' };
        f = [];
        this.props.adBreaksDisableReasons &&
          (f = this.props.adBreaksDisableReasons[c]);
        var g = '[FB Only] The ad break is disabled for ' + f.join(', ') + '.';
        a.push(
          b('React').createElement(
            'div',
            {
              key: 'ad_break_indicator_' + c,
              style: e,
              className:
                (f.length === 0 ? '_1p4l' : '') +
                (f.length > 0 ? ' _1p4m' : '') +
                (d.getIsAdBreakAutoInserted() && f.length === 0
                  ? ' _1p4n'
                  : '') +
                (d.getIsAdBreakAutoInserted() && f.length > 0 ? ' _1p4o' : ''),
            },
            f.length > 0
              ? b('React').createElement(
                  b('Tooltip.react'),
                  { tooltip: g },
                  'X'
                )
              : null
          )
        );
      }
      return b('React').createElement('div', null, a);
    };
    a.prototype.getInsertedAdBreaks = function () {
      __p && __p();
      if (!this.props.playbackDuration || !this.props.insertedAdBreaks)
        return null;
      var a = [];
      this.props.insertedAdBreaks.map(
        function (c, d) {
          c = c.timeOffset;
          var e = this.props.playbackDuration;
          c = { left: 'calc(' + (c / e) * 100 + '% - 2px)' };
          a.push(
            b('React').createElement(
              'div',
              {
                key: 'inserted_ad_break' + d,
                style: c,
                className:
                  (this.props.isAdBreakInsertionWithoutGapRule ? '' : '_1p4q') +
                  (this.props.isAdBreakInsertionWithoutGapRule
                    ? ' _1p4r'
                    : '') +
                  (this.props.isAdBreakDisabled ? ' _1p4s' : ''),
              },
              this.props.isAdBreakInsertionWithoutGapRule ? null : d + 1
            )
          );
        }.bind(this)
      );
      return b('React').createElement('div', null, a);
    };
    a.prototype.getEligibleAdBreaksTimeSegments = function () {
      __p && __p();
      if (!this.props.playbackDuration || !this.props.insertedAdBreaks)
        return null;
      if (
        this.props.isAdBreakInsertionWithoutGapRule &&
        this.props.insertedAdBreaks &&
        this.props.insertedAdBreaks.length >=
          b('VideoInstreamAdsConstants')
            .AD_INSERTION_MAXIMUM_NUMBER_OF_AD_BREAKS
      )
        return null;
      var a = 0;
      this.state.awaitingUpdate
        ? (a = this.$9)
        : (a = this.props.playbackPosition);
      var c = this.props.playbackDuration,
        d = b('VideoInstreamUtils').getEligibleTimeSegments(
          this.props.insertedAdBreaks,
          c,
          !this.props.isAdBreakInsertionWithoutGapRule
        );
      this.state.nubEngaged
        ? (this.$9 = this.state.timecodeTimestamp)
        : (this.$9 = a);
      var e = [];
      d.forEach(
        function (a, d) {
          var f = ((a.end - a.start) / c) * 100,
            g = this.$9 >= a.start && this.$9 <= a.end;
          a = {
            left: 'calc(' + (a.start / c) * 100 + '% - 2px)',
            width: f + '%',
          };
          e.push(
            b('React').createElement('span', {
              key: 'time_segment' + d,
              className: '_1p4t' + (g ? ' _1p4u' : ''),
              style: a,
            })
          );
        }.bind(this)
      );
      return b('React').createElement('div', { className: '_1p50' }, e);
    };
    a.prototype.onMouseEnter = function (a) {
      if (this.props.alwaysShowThumbnail) return;
      a = b('getElementPosition')(b('ReactDOM').findDOMNode(this.refs.bar));
      this.setState({ mouseOver: !0, barCoords: a });
    };
    a.prototype.onMouseLeave = function (a) {
      if (this.props.alwaysShowThumbnail) return;
      b('ReactDOM').findDOMNode(this.refs.bar).blur();
      b('ReactDOM').unstable_batchedUpdates(
        function () {
          this.setState({ mouseOver: !1 }),
            this.state.nubEngaged ||
              this.setState({
                scrubberPreviewSpriteIndex: 0,
                scrubberPreviewBackgroundPosition: { x: 0, y: 0 },
              });
        }.bind(this)
      );
      this.$8 = null;
      this.$7 = null;
    };
    a.prototype.onMouseEnterOnThumbnailOrTimecode = function (a) {
      if (this.state.nubEngaged || this.props.alwaysShowThumbnail) return;
      this.props.hasScrubberPreview
        ? (a = this.refs.previewThumbnailContainer)
        : (a = this.refs.timecode);
      a = b('ReactDOM').findDOMNode(a);
      a.style.visibility = 'hidden';
    };
    a.prototype.onMouseLeaveOnThumbnailOrTimecode = function (a) {
      if (this.state.nubEngaged || this.props.alwaysShowThumbnail) return;
      this.props.hasScrubberPreview
        ? (a = this.refs.previewThumbnailContainer)
        : (a = this.refs.timecode);
      a = b('ReactDOM').findDOMNode(a);
      a.style.visibility = 'visible';
    };
    a.prototype.onKeyDown = function (a) {
      __p && __p();
      var c = this.props.playbackDuration,
        d = this.props.playbackPosition;
      if (!c || !d) return;
      d = d;
      if (a.keyCode === b('Keys').RIGHT) {
        a.preventDefault();
        a.stopPropagation();
        if (this.props.isLiveVideo && this.props.onLiveRewindSeekForward) {
          this.props.onLiveRewindSeekForward();
          return;
        }
        d += 5;
        d >= c && (d = c - 0.01);
      } else if (a.keyCode === b('Keys').LEFT) {
        a.preventDefault();
        a.stopPropagation();
        if (this.props.isLiveVideo && this.props.onLiveRewindSeekBack) {
          this.props.onLiveRewindSeekBack();
          return;
        }
        d -= 5;
        d < 0 && (d = 0);
      } else if (a.keyCode === b('Keys').HOME) {
        a.preventDefault();
        a.stopPropagation();
        if (this.props.isLiveVideo && this.props.onLiveRewindToBeginning) {
          this.props.onLiveRewindToBeginning();
          return;
        }
        d = 0;
      } else if (a.keyCode === b('Keys').END) {
        a.preventDefault();
        a.stopPropagation();
        if (this.props.isLiveVideo && this.props.onLiveRewindToLive) {
          this.props.onLiveRewindToLive();
          return;
        }
        d = c - 0.01;
      } else return;
      this.props.onScrubEnd && this.props.onScrubEnd(d);
    };
    a.prototype.canShowHeatmap = function () {
      return (
        this.props.interestLevels != null &&
        this.props.isPlaying != null &&
        this.props.controlsHidden != null &&
        this.props.drawer != null
      );
    };
    a.prototype.render = function () {
      __p && __p();
      var a = b('joinClasses')(
          this.props.className,
          '_2yu5' + (this.state.nubEngaged ? ' _2yu6' : '')
        ),
        c =
          (this.props.hasScrubberPreview ? '_3iit' : '') +
          (this.props.hasScrubberPreview ? '' : ' _3iiu'),
        d = {
          width:
            this.getPlayedRatio(
              this.props.playbackDuration,
              this.props.playbackPosition
            ) *
              100 +
            '%',
        },
        e = { width: this.getBufferedRatio() * 100 + '%' },
        f = this.props.videoClipInfo,
        g = '0%';
      if (f) {
        var i = this.getRangeLimitedRatio(
          f.start_time_in_ms /
            b('DateConsts').MS_PER_SEC /
            this.props.playbackDuration
        );
        g = i * 100 + '%';
        this.state.shouldIgnoreClipStartTS ||
          ((d = {
            width:
              this.getRangeLimitedRatio(
                this.getPlayedRatio(
                  this.props.playbackDuration,
                  this.props.playbackPosition
                ) - i
              ) *
                100 +
              '%',
            marginLeft: g,
          }),
          (e = {
            width:
              this.getRangeLimitedRatio(this.getBufferedRatio() - i) * 100 +
              '%',
            marginLeft: g,
          }));
      }
      i = { left: this.state.timecodeRatio * 100 + '%' };
      var j = {},
        k = {},
        l = null,
        m = null,
        n = null;
      if (
        this.state.mouseOver ||
        this.state.nubEngaged ||
        this.props.alwaysShowThumbnail
      ) {
        n = b('React').createElement(b('VideoPlaybackTimer.react'), {
          className: c,
          isInScrubberPreview: !0,
          onMouseEnter: this.onMouseEnterOnThumbnailOrTimecode.bind(this),
          onMouseLeave: this.onMouseLeaveOnThumbnailOrTimecode.bind(this),
          playbackPosTimestamp: 0,
          ref: 'timecode',
          remainingTimestamp: this.state.timecodeTimestamp,
          style: i,
        });
        if (
          this.props.hasScrubberPreview &&
          this.state.previewThumbnailInformation
        ) {
          c = this.state.previewThumbnailInformation.previewScrubberWidth;
          i = this.state.previewThumbnailInformation.previewScrubberHeight;
          var o = 100,
            p = 100;
          this.getNumberOfSprites() !== this.state.scrubberPreviewSpriteIndex
            ? ((o *= this.state.previewThumbnailInformation.imagesPerRow),
              (p *= this.state.previewThumbnailInformation.imagesPerColumn))
            : this.state.lastSpriteDimension.numRow &&
              ((o *= this.state.lastSpriteDimension.numRow),
              (p *= this.state.lastSpriteDimension.numColumn));
          var q = this.state.previewThumbnailInformation.stereoMode;
          q === b('VideoStereoFormat').LEFT_RIGHT
            ? ((c /= 2), (o *= 2))
            : q === b('VideoStereoFormat').TOP_BOTTOM && ((i /= 2), (p *= 2));
          q = 1;
          this.props.isFullscreen
            ? (q = 1.5)
            : this.props.isInTahoe && (q = 1.2);
          if (
            this.state.previewThumbnailInformation.useScrubberVideo &&
            this.state.previewThumbnailInformation.scrubberVideoURI !== null
          )
            (j = { width: c * q + 'px', height: i * q + 'px' }),
              (m = b('React').createElement('video', {
                muted: 'true',
                preload: 'auto',
                ref: 'previewThumbnailVideo',
                src: this.state.previewThumbnailInformation.scrubberVideoURI,
                style: j,
              }));
          else if (this.$6) {
            var r = '';
            if (this.state.scrubberPreviewSpriteIndex) {
              var s = this.$6.get(this.state.scrubberPreviewSpriteIndex);
              s && (r = 'url(' + s + ')');
            }
            var t;
            o > 100 ? (t = o + '% ' + p + '%') : (r = '');
            j = {
              width: c * q + 'px',
              height: i * q + 'px',
              backgroundImage: r,
              backgroundPosition:
                '-' +
                this.state.scrubberPreviewBackgroundPosition.x * q +
                'px -' +
                this.state.scrubberPreviewBackgroundPosition.y * q +
                'px',
              backgroundSize: t,
            };
            m = b('React').createElement('div', {
              className: '_3iiw',
              ref: 'previewThumbnail',
              style: j,
            });
          }
          k = {
            left: this.state.previewRatio * 100 + '%',
            display: this.props.alwaysShowThumbnail ? 'block' : undefined,
          };
          l = b('React').createElement(
            'div',
            {
              onMouseEnter: this.onMouseEnterOnThumbnailOrTimecode.bind(this),
              onMouseLeave: this.onMouseLeaveOnThumbnailOrTimecode.bind(this),
              className: '_3iiv',
              ref: 'previewThumbnailContainer',
              style: k,
            },
            m,
            n
          );
        }
      }
      s = null;
      this.props.pointsOfInterest.length > 0 &&
        (s = b('React').createElement(
          b('VideoScrubberPointOfInterestBar.react'),
          {
            tabIndex: this.props.tabIndex,
            playbackDuration: this.props.playbackDuration,
            onPointOfInterestSelect: this.props.onPointOfInterestSelect,
            currentPointOfInterest: this.props.currentPointOfInterest,
            pointsOfInterest: this.props.pointsOfInterest,
            showPointOfInterestTimestamps:
              this.props.showPointOfInterestTimestamps,
          }
        ));
      o = null;
      p = b('gkx')(
        'AT7Y9hnWd5pbilzcl7lFh32-HD7EMVlcWgz9JemtXl1pgkaX7DJkV5ufEAhC7zBlQbW0rRmqr3VoprtLWKzJrk02'
      );
      Object.keys(this.props.annotatedMomentsOfInterest).length > 0 &&
        p &&
        (o = b('React').createElement(
          b('VideoScrubberAnnotatedMomentOfInterestBar.react'),
          {
            playbackDuration: this.props.playbackDuration,
            onPointOfInterestSelect:
              this.props.onAnnotatedMomentOfInterestSelect,
            pointsOfInterest: this.props.annotatedMomentsOfInterest,
          }
        ));
      c = this.getAdBreakIndicators();
      i = null;
      if (this.canShowHeatmap()) {
        r = this.props.hasScrubberPreview ? l : n;
        q = null;
        r != null && (q = this.refs[r.ref]);
        i = b('React').createElement(
          'div',
          { className: '_27ew' },
          b('React').createElement(
            'div',
            { className: '_5h19', style: d },
            b('React').createElement('div', {
              className: '_2yua _4sxb',
              ref: 'nub',
            })
          ),
          b('React').createElement(b('BootloadedComponent.react'), {
            bootloadLoader: b('JSResource')('LiveHeatmap.react').__setRef(
              'VideoScrubber.react'
            ),
            bootloadPlaceholder: b('React').createElement('div', null),
            controlsHidden: this.props.controlsHidden,
            drawer: this.props.drawer,
            interestLevels: this.props.interestLevels,
            isPlaying: this.props.isPlaying,
            playedRatio: this.getPlayedRatio(
              this.props.playbackDuration,
              this.props.playbackPosition
            ),
            bufferedRatio: this.getBufferedRatio(),
            nubEngaged: this.state.nubEngaged,
            scrubberPreviewElement: q,
            ref: 'bar',
            tabIndex: this.props.tabIndex,
            'aria-label': h._('Change Position'),
          }),
          r,
          c
        );
      }
      j = this.props.playbackDuration > 500 ? 10 : 1;
      k =
        Math.round(
          this.getPlayedRatio(
            this.props.playbackDuration,
            this.props.playbackPosition
          ) *
            100 *
            j
        ) / j;
      m = k + '%';
      p = this.props.isFullscreen || this.props.isInTahoe;
      q = b('React').createElement(
        'div',
        {
          className: a,
          onKeyDown: this.onKeyDown.bind(this),
          onMouseDown: this.onDragNubBeginClick.bind(this),
          onMouseEnter: this.onMouseEnter.bind(this),
          onMouseLeave: this.onMouseLeave.bind(this),
          onTouchStart: this.onDragNubBeginTouch.bind(this),
        },
        i
          ? i
          : b('React').createElement(
              'div',
              {
                tabIndex: this.props.tabIndex,
                role: 'slider',
                'aria-orientation': 'horizontal',
                'aria-valuemin': '0',
                'aria-valuemax': this.props.playbackDuration,
                'aria-valuenow': this.props.playbackPosition,
                'aria-valuetext': m,
                'aria-label': h._('Change Position'),
                className: '_2yu7',
                ref: 'bar',
              },
              b('React').createElement('div', { className: '_2yu8', style: e }),
              b('React').createElement(
                'div',
                {
                  style: d,
                  className:
                    (this.props.isLiveVideo ? '' : '_2yu9') +
                    (this.props.isLiveVideo && !this.props.isLiveRewound
                      ? ' _1p51'
                      : '') +
                    (this.props.isLiveRewound ? ' _1p52' : ''),
                },
                b('React').createElement('div', {
                  className: '_2yua _4sxb',
                  ref: 'nub',
                })
              ),
              f
                ? b('React').createElement(
                    'div',
                    { className: '_355j', style: { width: g } },
                    b('React').createElement(b('ProfileTile.react'), {
                      id: f.sharer_id,
                      size: p ? 32 : 24,
                      imageProps: { className: '_355k' },
                      tileProps: {
                        className: '_355n',
                        style: { marginTop: p ? -16 : -10 },
                      },
                    })
                  )
                : null,
              this.props.hasScrubberPreview ? l : n,
              c,
              this.getInsertedAdBreaks(),
              this.getEligibleAdBreaksTimeSegments()
            )
      );
      return b('React').createElement('div', null, o, q, s);
    };
    a.propTypes = {
      alwaysShowThumbnail: c.bool,
      annotatedMomentsOfInterest: c.object,
      bufferedPosition: c.number.isRequired,
      hasScrubberPreview: c.bool,
      isFullscreen: c.bool,
      onAnnotatedMomentOfInterestSelect: c.func,
      onScrubBegin: c.func.isRequired,
      onPointOfInterestSelect: c.func,
      onScrubEnd: c.func.isRequired,
      playbackDuration: c.number.isRequired,
      playbackPosition: c.number.isRequired,
      pointsOfInterest: c.array,
      previewThumbnailInformation: c.object,
      scrubberPreviewSprites: c.object,
      showPointOfInterestTimestamps: c.bool,
      tabIndex: c.string.isRequired,
    };
    a.defaultProps = {
      alwaysShowThumbnail: !1,
      annotatedMomentsOfInterest: {},
      hasScrubberPreview: !1,
      pointsOfInterest: [],
      onAnnotatedMomentOfInterestSelect: b('emptyFunction'),
      onPointOfInterestSelect: b('emptyFunction'),
      onScrubBegin: b('emptyFunction'),
      onScrubEnd: b('emptyFunction'),
      showPointOfInterestTimestamps: !1,
    };
    e.exports = a;
  },
  null
);
__d(
  'fbglyph',
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      throw new Error(
        'fbglyph(' + JSON.stringify(a) + '): Unexpected fbglyph reference.'
      );
    }
    e.exports = a;
  },
  null
);
__d(
  'VideoSidepaneToggleControl.react',
  [
    'ix',
    'cx',
    'fbt',
    'AbstractButton.react',
    'Image.react',
    'React',
    'TooltipData',
    'fbglyph',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    __p && __p();
    var j;
    c = b('React').PropTypes;
    d = babelHelpers.inherits(a, b('React').PureComponent);
    j = d && d.prototype;
    function a() {
      var a, b;
      for (var c = arguments.length, d = new Array(c), e = 0; e < c; e++)
        d[e] = arguments[e];
      return (
        (b = (a = j.constructor).call.apply(a, [this].concat(d))),
        (this.onButtonClick = function () {
          this.props.onSidePaneToggle();
        }.bind(this)),
        b
      );
    }
    a.prototype.render = function () {
      var a = this.props.isSidePaneOpen
          ? i._('Click to hide details')
          : i._('Click to show details'),
        c = this.props.isSidePaneOpen ? g('114795') : g('114783');
      return b('React').createElement(
        b('AbstractButton.react'),
        babelHelpers['extends'](
          { className: '_zbd' },
          b('TooltipData').propsFor(a, 'above'),
          {
            image: b('React').createElement(b('Image.react'), {
              className: '_23j0',
              src: c,
            }),
            label: this.props.label,
            labelIsHidden: this.props.labelIsHidden,
            onClick: this.onButtonClick,
            ref: 'button',
            tabIndex: this.props.tabIndex,
            type: 'button',
          }
        )
      );
    };
    a.defaultProps = { label: i._('Toggle details'), labelIsHidden: !0 };
    a.propTypes = {
      isSidePaneOpen: c.bool,
      label: c.string,
      onSidePaneToggle: c.func,
      tabIndex: c.string,
    };
    e.exports = a;
  },
  null
);
__d(
  'XBasicFBNuxDismissController',
  ['XController'],
  function (a, b, c, d, e, f) {
    e.exports = b('XController').create('/ajax/megaphone/dismiss_fbnux/', {
      nux_id: { type: 'Int', required: !0 },
    });
  },
  null
);
__d(
  'SpatialAudioFeedNUX.react',
  [
    'ix',
    'cx',
    'fbt',
    'AsyncRequest',
    'Image.react',
    'React',
    'XBasicFBNuxDismissController',
    'XUIAmbientNUX.react',
    'XUIText.react',
    'fbglyph',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    __p && __p();
    var j,
      k = i._('Experience more with Audio 360'),
      l = i._('Hear sound from all directions when you wear headphones'),
      m = 4576;
    c = babelHelpers.inherits(a, b('React').Component);
    j = c && c.prototype;
    function a(a) {
      j.constructor.call(this, a),
        (this.$1 = function () {
          this.setState({ showNux: !1 });
          var a = b('XBasicFBNuxDismissController')
            .getURIBuilder()
            .setInt('nux_id', m)
            .getURI();
          new (b('AsyncRequest'))().setURI(a).send();
        }.bind(this)),
        (this.state = { showNux: !0 });
    }
    a.prototype.render = function () {
      return b('React').createElement(
        b('XUIAmbientNUX.react'),
        {
          contextRef: this.props.contextRef,
          shown: this.state.showNux,
          position: 'below',
          alignment: 'right',
          onCloseButtonClick: this.$1,
          width: 'auto',
        },
        b('React').createElement(
          'div',
          { className: '_4r0v' },
          b('React').createElement(
            'div',
            { className: '_4r0w' },
            b('React').createElement(
              'div',
              { className: '_4r0x' },
              b('React').createElement(b('Image.react'), { src: g('114375') })
            )
          ),
          b('React').createElement(
            'div',
            { className: '_4r0y' },
            b('React').createElement(
              b('XUIText.react'),
              { size: 'header4', className: '_4r0z' },
              k
            ),
            b('React').createElement(
              b('XUIText.react'),
              { size: 'meta1', className: '_4r0-' },
              l
            )
          )
        )
      );
    };
    e.exports = a;
  },
  null
);
__d(
  'VideoVolumeSlider.react',
  [
    'cx',
    'EventListener',
    'React',
    'ReactDOM',
    'getElementPosition',
    'shallowCompare',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h;
    c = b('React').PropTypes;
    d = babelHelpers.inherits(a, b('React').Component);
    h = d && d.prototype;
    function a(a) {
      h.constructor.call(this, a),
        (this.state = { awaitingUpdate: !1, engaged: !1, volume: a.volume });
    }
    a.prototype.shouldComponentUpdate = function (a, c) {
      return b('shallowCompare')(this, a, c);
    };
    a.prototype.UNSAFE_componentWillReceiveProps = function (a) {
      this.setState({ awaitingUpdate: !1 });
    };
    a.prototype.componentDidUpdate = function (a, c) {
      !this.state.engaged && c.engaged
        ? (this.$2 && this.$2.remove(),
          this.$1 && this.$1.remove(),
          this.$3 && this.$3.remove(),
          this.$4 && this.$4.remove())
        : this.state.engaged &&
          !c.engaged &&
          ((this.$1 = b('EventListener').listen(
            document,
            'mousemove',
            this.onMouseMove.bind(this)
          )),
          (this.$2 = b('EventListener').listen(
            document,
            'mouseup',
            this.onMouseUpImpl.bind(this)
          )),
          (this.$3 = b('EventListener').listen(
            document,
            'touchmove',
            this.onTouchMove.bind(this)
          )),
          (this.$4 = b('EventListener').listen(
            document,
            'touchend',
            this.onMouseUpImpl.bind(this)
          )));
    };
    a.prototype.onMouseDownImpl = function (a, b, c) {
      this.props.onVolumeChangeBegin &&
        this.props.onVolumeChangeBegin(this.state.volume),
        this.props.isHorizontal
          ? this.setState({
              engaged: !0,
              volume: this.getClampedClickPositionVolume(b),
            })
          : this.setState({
              engaged: !0,
              volume: this.getClampedClickPositionVolume(c),
            }),
        a.preventDefault(),
        a.stopPropagation();
    };
    a.prototype.onMouseDown = function (a) {
      if (a.button !== 0) return;
      this.onMouseDownImpl(a, a.clientX, a.clientY);
    };
    a.prototype.onTouchDown = function (a) {
      this.onMouseDownImpl(a, a.touches[0].clientX, a.touches[0].clientY);
    };
    a.prototype.getClampedClickPositionVolume = function (a) {
      var c = b('getElementPosition')(
          b('ReactDOM').findDOMNode(this.refs.slider)
        ),
        d = b('getElementPosition')(
          b('ReactDOM').findDOMNode(this.refs.nub)
        ).height;
      if (this.props.isHorizontal) {
        var e = a + d / 2 - c.x;
        return Math.max(0, Math.min(1, e / c.width));
      } else {
        e = c.y - a + c.height + d / 2;
        return Math.max(0, Math.min(1, e / c.height));
      }
    };
    a.prototype.onMouseUpImpl = function (a) {
      this.props.onVolumeChangeEnd &&
        this.props.onVolumeChangeEnd(this.state.volume),
        this.setState({ engaged: !1, awaitingUpdate: !0 }),
        a.preventDefault(),
        a.stopPropagation();
    };
    a.prototype.onMouseMoveImpl = function (a, b, c) {
      this.props.isHorizontal
        ? this.setState({ volume: this.getClampedClickPositionVolume(b) })
        : this.setState({ volume: this.getClampedClickPositionVolume(c) }),
        this.props.onVolumeChange &&
          this.props.onVolumeChange(this.state.volume),
        a.preventDefault(),
        a.stopPropagation();
    };
    a.prototype.onMouseMove = function (a) {
      this.onMouseMoveImpl(a, a.clientX, a.clientY);
    };
    a.prototype.onTouchMove = function (a) {
      this.onMouseMoveImpl(a, a.touches[0].clientX, a.touches[0].clientY);
    };
    a.prototype.getVolume = function () {
      return this.state.engaged || this.state.awaitingUpdate
        ? this.state.volume
        : this.props.volume;
    };
    a.prototype.render = function () {
      var a = this.props.isHorizontal || !1,
        c = a
          ? { width: Math.round(this.getVolume() * 100) + '%' }
          : { height: Math.round(this.getVolume() * 100) + '%' };
      a = '_3pao' + (a ? ' _4sx9' : '') + (this.state.engaged ? ' _2yu6' : '');
      return b('React').createElement(
        'div',
        {
          className: a,
          onMouseDown: this.onMouseDown.bind(this),
          onTouchStart: this.onTouchDown.bind(this),
        },
        b('React').createElement(
          'div',
          { className: '_4sxa' },
          b('React').createElement(
            'div',
            { className: '_3paq', ref: 'slider' },
            b('React').createElement(
              'div',
              { className: '_3par', style: c },
              b('React').createElement('div', {
                className: '_3pas _4sxb',
                ref: 'nub',
              })
            )
          )
        ),
        b('React').createElement('div', { className: '_3pat' })
      );
    };
    a.propTypes = {
      volume: c.number,
      onVolumeChangeBegin: c.func,
      onVolumeChangeEnd: c.func,
      onVolumeChange: c.func,
    };
    a.defaultProps = {
      volume: 0,
      onVolumeChange: function (a) {},
      onVolumeChangeBegin: function (a) {},
      onVolumeChangeEnd: function (a) {},
    };
    e.exports = a;
  },
  null
);
__d(
  'VideoVolumeControl.react',
  [
    'ix',
    'cx',
    'fbt',
    'invariant',
    'AbstractButton.react',
    'Image.react',
    'Keys',
    'React',
    'ReactDOM',
    'SpatialAudioFeedNUX.react',
    'VideoPlayerVolumeSettings',
    'VideoVolumeSlider.react',
    'VideoWebDriverIDs',
    'asset',
    'shallowCompare',
  ],
  function (a, b, c, d, e, f, g, h, i, j) {
    __p && __p();
    var k;
    c = b('React').PropTypes;
    d = babelHelpers.inherits(a, b('React').Component);
    k = d && d.prototype;
    function a(a) {
      k.constructor.call(this, a),
        (this.state = { nubEngaged: !1, focused: !1, lastVolumeBeforeMute: 1 });
    }
    a.prototype.shouldComponentUpdate = function (a, c) {
      return b('shallowCompare')(this, a, c);
    };
    a.prototype.onButtonClick = function () {
      this.checkLastVolumeBeforeMuteInvariant();
      if (this.props.volume === 0)
        return this.onSliderVolumeChange(this.state.lastVolumeBeforeMute);
      this.props.onToggleMuted && this.props.onToggleMuted();
    };
    a.prototype.onButtonFocus = function () {
      this.setState({ focused: !0 });
    };
    a.prototype.onButtonBlur = function () {
      this.setState({ focused: !1 });
    };
    a.prototype.onKeyDown = function (a) {
      var c = this.props.volume;
      if (a.keyCode === b('Keys').UP)
        a.preventDefault(), a.stopPropagation(), (c += 0.05), c > 1 && (c = 1);
      else if (a.keyCode === b('Keys').DOWN)
        a.preventDefault(), a.stopPropagation(), (c -= 0.05), c < 0 && (c = 0);
      else return;
      this.onSliderVolumeChangeEnd(c);
    };
    a.prototype.onMouseOut = function (a) {
      b('ReactDOM').findDOMNode(this.refs.button).blur();
    };
    a.prototype.getVolume = function () {
      return this.props.isMuted ? 0 : this.props.volume;
    };
    a.prototype.onSliderVolumeChangeBegin = function () {
      var a = this.props.volume;
      a > 0 &&
        (this.setState({ nubEngaged: !0, lastVolumeBeforeMute: a }),
        b('VideoPlayerVolumeSettings').saveLastVolumeBeforeMute(a));
    };
    a.prototype.onSliderVolumeChangeEnd = function (a) {
      a > 0
        ? (this.setState({ lastVolumeBeforeMute: a }),
          b('VideoPlayerVolumeSettings').saveLastVolumeBeforeMute(a),
          this.onSliderVolumeChange(a))
        : (this.props.onVolumeChange(this.state.lastVolumeBeforeMute),
          this.props.isMuted ||
            (this.props.onToggleMuted && this.props.onToggleMuted())),
        this.setState({ nubEngaged: !1 });
    };
    a.prototype.onSliderVolumeChange = function (a) {
      ((a > 0 && this.props.isMuted) || (a === 0 && !this.props.isMuted)) &&
        this.props.onToggleMuted &&
        this.props.onToggleMuted(),
        this.props.onVolumeChange && this.props.onVolumeChange(a);
    };
    a.prototype.checkLastVolumeBeforeMuteInvariant = function () {
      (this.state.lastVolumeBeforeMute > 0 &&
        this.state.lastVolumeBeforeMute <= 1) ||
        j(0, undefined);
    };
    a.prototype.render = function () {
      __p && __p();
      if (this.props.isAudioBlocked) {
        var a = b('React').createElement(
          'div',
          { className: '_6t0i' },
          i._('Audio unavailable')
        );
        return b('React').createElement(
          'div',
          null,
          a,
          b('React').createElement(b('Image.react'), {
            className: '_rwt',
            src: g('660433'),
          })
        );
      }
      a = Math.round(this.getVolume() * 100);
      var c = null;
      if (a == 0)
        c = b('React').createElement(b('Image.react'), {
          className: '_rwt',
          src: this.props.useDarkTheme ? g('462991') : g('462993'),
        });
      else {
        var d = null;
        a <= 33
          ? (d = this.props.useDarkTheme ? g('462983') : g('462984'))
          : a <= 66
          ? (d = this.props.useDarkTheme ? g('462987') : g('462988'))
          : (d = this.props.useDarkTheme ? g('462971') : g('443962'));
        c = b('React').createElement(
          'div',
          { className: '_1age' },
          b('React').createElement(
            'div',
            { className: '_1agf' },
            b('React').createElement(b('Image.react'), {
              className: '_rwt',
              src: d,
            })
          )
        );
      }
      a =
        '_2swo' +
        (this.state.nubEngaged ? ' _2yu6' : '') +
        (this.state.focused ? ' _2iw8' : '');
      d = '_zbd _1agg';
      var e = this.getVolume() ? i._('Mute') : i._('Unmute'),
        f = b('React').createElement(b('VideoVolumeSlider.react'), {
          onVolumeChangeBegin: this.onSliderVolumeChangeBegin.bind(this),
          onVolumeChangeEnd: this.onSliderVolumeChangeEnd.bind(this),
          onVolumeChange: this.onSliderVolumeChange.bind(this),
          isHorizontal: this.props.isHorizontal || !1,
          volume: this.getVolume(),
        });
      d = b('React').createElement(b('AbstractButton.react'), {
        className: d,
        'data-testid': b('VideoWebDriverIDs').MUTE_UNMUTE_CONTROL,
        image: c,
        label: e,
        labelIsHidden: !0,
        onBlur: this.onButtonBlur.bind(this),
        onClick: this.onButtonClick.bind(this),
        onFocus: this.onButtonFocus.bind(this),
        onKeyDown: this.onKeyDown.bind(this),
        onMouseOut: this.onMouseOut.bind(this),
        ref: 'button',
        tabIndex: this.props.tabIndex,
        type: 'button',
      });
      c = this.props.showSpatialAudioNUX
        ? b('React').createElement(b('SpatialAudioFeedNUX.react'), {
            contextRef: function () {
              return this.refs.button;
            }.bind(this),
          })
        : null;
      return this.props.isHorizontal
        ? b('React').createElement('div', { className: a }, d, f, c)
        : b('React').createElement('div', { className: a }, f, d, c);
    };
    a.propTypes = {
      isAudioBlocked: c.bool,
      isMuted: c.bool,
      onVolumeChange: c.func,
      onToggleMuted: c.func,
      tabIndex: c.string,
      volume: c.number,
      useDarkTheme: c.bool,
    };
    a.defaultProps = { isAudioBlocked: !1, useDarkTheme: !1 };
    e.exports = a;
  },
  null
);
__d(
  'VideoControls.react',
  [
    'cx',
    'fbt',
    'ix',
    'AbstractButton.react',
    'BootloadedComponent.react',
    'Image.react',
    'JSResource',
    'LiveVideoRewindLoggerEvent',
    'LiveVideoRewindTypedLogger',
    'React',
    'TooltipData',
    'VideoClipButton.react',
    'VideoFBIconControl.react',
    'VideoFullscreenControl.react',
    'VideoNextControl.react',
    'VideoPlaybackControl.react',
    'VideoPlaybackRateControl.react',
    'VideoPlaybackTimer.react',
    'VideoPlayerExperiments',
    'VideoPrevControl.react',
    'VideoScrubber.react',
    'VideoSidepaneToggleControl.react',
    'VideoVolumeControl.react',
    'asset',
    'gkx',
    'joinClasses',
    'shallowCompare',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    __p && __p();
    var j;
    c = b('React').PropTypes;
    j = babelHelpers.inherits(a, b('React').Component);
    j && j.prototype;
    a.prototype.shouldComponentUpdate = function (a, c) {
      return b('shallowCompare')(this, a, c);
    };
    a.prototype.isHidden = function () {
      return this.props.hidden;
    };
    a.prototype.isTransparent = function () {
      return this.props.transparent;
    };
    a.prototype.render = function () {
      __p && __p();
      var a = b('VideoPlayerExperiments').inlineSoundVisible,
        c =
          b('gkx')(
            'AT7ApUZVTaeaFVAZosDCyoYg5jewu8k9nTInty9zhgPcbA_qZ0Wekm54rZEtV5zN2fziN-IbrpdI7b9TIq2nwd-2KJh-lL261Q2BabnaLjE70g'
          ) &&
          this.props.isInTahoe &&
          !this.props.isLive,
        d =
          '_1c7d' +
          (this.isHidden() ? ' _1c7e' : '') +
          (this.isTransparent() && !a ? ' _2oy-' : ''),
        e =
          '_2w_u' +
          (this.props.showSidePaneToggle ? ' _vr5' : '') +
          (this.props.useDarkTheme ? ' _vr6' : '') +
          (b('gkx')(
            'AT7ApUZVTaeaFVAZosDCyoYg5jewu8k9nTInty9zhgPcbA_qZ0Wekm54rZEtV5zN2fziN-IbrpdI7b9TIq2nwd-2KJh-lL261Q2BabnaLjE70g'
          )
            ? ' _w7n'
            : ''),
        f = '_1c7f _1c7g' + (this.isTransparent() && a ? ' _2oy-' : ''),
        g = '_1c7f _2pvx' + (this.isTransparent() && a ? ' _2oy-' : ''),
        j = '_1c7f _1c7h' + (this.isTransparent() && a ? ' _2oy-' : ''),
        k =
          '_1c7f _w7o' +
          (this.isTransparent() &&
          (!this.props.isInline ||
            this.props.isFullscreen ||
            !this.props.isPlaying)
            ? ' _2oy-'
            : ''),
        l = '_2w_w',
        m = !1;
      this.props.isLive && this.props.isInTahoe && (m = !0);
      m = '_1otk _3t1r _4ubd' + (m ? ' _w7y' : '');
      var n =
          '_3t1r _4ubd _3t1s' +
          (this.props.isCommentAttachment ? '' : ' hidden_elem'),
        o = null;
      if (
        !this.props.isLive &&
        !this.props.hideRemainingTime &&
        !this.props.isInWatchAndScroll
      ) {
        var p = this.props.playbackPosition - this.props.playbackDuration;
        o = b('React').createElement(b('VideoPlaybackTimer.react'), {
          className: '_5qsr' + (this.props.displayMilliseconds ? ' _w7-' : ''),
          isEmbedded: this.props.isEmbedded,
          playbackPosTimestamp: this.props.playbackPosition,
          playbackDurationTimestamp: this.props.playbackDuration,
          remainingTimestamp: p,
          displayElapsedTime: this.props.displayElapsedTime,
          displayMilliseconds: this.props.displayMilliseconds,
          displayBothTimes: b('gkx')(
            'AT7ApUZVTaeaFVAZosDCyoYg5jewu8k9nTInty9zhgPcbA_qZ0Wekm54rZEtV5zN2fziN-IbrpdI7b9TIq2nwd-2KJh-lL261Q2BabnaLjE70g'
          ),
        });
      }
      p = null;
      var q = null,
        r = null,
        s = null,
        t;
      this.props.isInTahoe &&
        this.props.isLive &&
        !this.props.isFullscreen &&
        (t = b('React').createElement(b('BootloadedComponent.react'), {
          bootloadLoader: b('JSResource')(
            'VideoQuietModeControl.react'
          ).__setRef('VideoControls.react'),
          bootloadPlaceholder: b('React').createElement('span', null),
          videoID: this.props.videoID,
          gamesVideoQuietModeGK: this.props.gamesVideoQuietModeGK,
        }));
      (!this.props.isLive || this.props.hasHD) &&
        !this.props.hideSettings &&
        !this.props.isInWatchAndScroll &&
        b('VideoPlayerExperiments').redesign &&
        (r = b('React').createElement(b('BootloadedComponent.react'), {
          bootloadLoader: b('JSResource')(
            'VideoSettingsControl.react'
          ).__setRef('VideoControls.react'),
          bootloadPlaceholder: b('React').createElement('span', null),
          disabled: this.props.isCasting,
          hasHD: this.props.hasHD,
          hasSubtitles: this.props.hasSubtitles,
          isHD: this.props.isHD,
          isInline: this.props.isInline,
          isLive: this.props.isLive,
          isSphericalVideo: this.props.isSphericalVideo,
          areSubtitlesActive: this.props.areSubtitlesActive,
          areSubtitlesAutogenerated: this.props.areSubtitlesAutogenerated,
          onSettingsClick: this.props.onSettingsClick,
          onToggleHD: this.props.onToggleHD,
          onToggleSubtitles: this.props.onToggleSubtitles,
          tabIndex: '0',
          availableQualities: this.props.availableQualities,
          selectedQuality: this.props.selectedQuality,
          preferredQuality: this.props.preferredQuality,
          canAutoSelectVideoQuality: this.props.canAutoSelectVideoQuality,
          onSelectQuality: this.props.onSelectQuality,
          showQualitySelector: this.props.showQualitySelector,
          qualitySelectorMinStreams: this.props.qualitySelectorMinStreams,
          streamingFormat: this.props.streamingFormat,
          videoID: this.props.videoID,
        }));
      this.props.isLive &&
        b('VideoPlayerExperiments').hlsButton &&
        (s = b('React').createElement(b('BootloadedComponent.react'), {
          bootloadPlaceholder: b('React').createElement('span', null),
          bootloadLoader: b('JSResource')('VideoToHLSControl.react').__setRef(
            'VideoControls.react'
          ),
          areHLSActive: this.props.areHLSActive,
          onToggleHLS: this.props.onToggleHLS,
          tabIndex: '0',
        }));
      var u =
          this.props.gamesVideoCreatorClipping &&
          (this.props.isInTahoe || this.props.isInline)
            ? b('React').createElement(b('VideoClipButton.react'), {
                onClipVideo: this.props.onClipVideo,
              })
            : null,
        v = null;
      if (this.props.allowFullscreen)
        if (
          this.props.doesFullscreenEnterTahoe &&
          (this.props.isInline || this.props.isInWatchAndScroll)
        ) {
          var w = b('React').createElement(b('Image.react'), {
              className: '_rwt',
              src: i('407577'),
            }),
            x = h._('Click to enlarge');
          v = b('React').createElement(
            b('AbstractButton.react'),
            babelHelpers['extends']({}, b('TooltipData').propsFor(x, 'above'), {
              className: '_zbd _400z _1vek',
              image: w,
              label: x,
              labelIsHidden: !0,
              onClick: this.props.onEnterTahoe,
              tabIndex: '0',
            })
          );
        } else {
          w = this.props.isFullscreen
            ? h._('Click to exit fullscreen')
            : h._('Click to enter fullscreen');
          v = b('React').createElement(
            b('VideoFullscreenControl.react'),
            babelHelpers['extends']({}, b('TooltipData').propsFor(w, 'above'), {
              disabled: this.props.isCasting && !this.props.isFullscreen,
              isFullscreen: this.props.isFullscreen,
              onToggleFullscreen: this.props.onToggleFullscreen,
              tabIndex: '0',
            })
          );
        }
      x = null;
      this.props.hasWatchAndScroll &&
        !this.props.isFullscreen &&
        !this.props.isInWatchAndScroll &&
        (x = b('React').createElement(b('BootloadedComponent.react'), {
          bootloadPlaceholder: b('React').createElement('span', null),
          bootloadLoader: b('JSResource')(
            'VideoWatchAndScrollControl.react'
          ).__setRef('VideoControls.react'),
          disabled: this.props.isCasting,
          onEnterWatchAndScroll: this.props.onEnterWatchAndScroll,
          isSlidingWNSEligible: this.props.isSlidingWNSEligible,
          onWNSNUXClose: this.props.onWNSNUXClose,
          showWNSNUX: this.props.showWNSNUX,
        }));
      w = null;
      this.props.allowCasting &&
        this.props.hasFoundReceiver &&
        (w = b('React').createElement(b('BootloadedComponent.react'), {
          bootloadPlaceholder: b('React').createElement('span', null),
          bootloadLoader: b('JSResource')('VideoCastingControl.react').__setRef(
            'VideoControls.react'
          ),
          hasFoundReceiver: this.props.hasFoundReceiver,
          isCasting: this.props.isCasting,
          isCastingSupported: this.props.isCastingSupported,
          onStartCast: this.props.onStartCast,
          onStopCast: this.props.onStopCast,
        }));
      var y = null;
      if (b('VideoPlayerExperiments').embeddedPlayerEnhancements)
        y = this.props.permalinkURL
          ? b('React').createElement(b('VideoFBIconControl.react'), {
              permalinkURL: this.props.permalinkURL,
              playbackPosTimestamp: this.props.playbackPosition,
            })
          : null;
      else {
        var z = null;
        this.props.permalinkURL &&
          ((z = b('React').createElement(b('Image.react'), {
            className: '_rwt',
            src: i('390910'),
          })),
          (y = b('React').createElement(b('AbstractButton.react'), {
            className: '_zbd',
            href: this.props.permalinkURL,
            image: z,
            label: h._('Open in a new tab'),
            labelIsHidden: !0,
            ref: 'button',
            tabIndex: '0',
            target: '_blank',
            type: 'button',
          })));
      }
      z = null;
      var A = null,
        B = null,
        C = null,
        D = null;
      if (
        this.props.isLive &&
        this.props.showPlayButtonForLive &&
        !this.props.isLiveRewindEnabled
      )
        A = b('React').createElement(b('VideoPlaybackControl.react'), {
          finishedPlaying: this.props.finishedPlaying,
          isPlaying: this.props.isPlaying,
          onPause: this.props.onPause,
          onPlay: this.props.onPlay,
          useDarkTheme: this.props.useDarkTheme,
          tabIndex: '0',
        });
      else if (!this.props.isLive && !this.props.hidePlaybackControl) {
        A = b('React').createElement(b('VideoPlaybackControl.react'), {
          finishedPlaying: this.props.finishedPlaying,
          isPlaying: this.props.isPlaying,
          onPause: this.props.onPause,
          onPlay: this.props.onPlay,
          useDarkTheme: this.props.useDarkTheme,
          tabIndex: '0',
        });
        c &&
          this.props.videoID &&
          ((C = b('React').createElement(b('VideoNextControl.react'), {
            videoID: this.props.videoID,
          })),
          (D = b('React').createElement(b('VideoPrevControl.react'), {
            videoID: this.props.videoID,
          })));
        if (
          this.props.showPlaybackRateControl &&
          this.props.onSetVideoPlaybackRate
        ) {
          c = h._('Playback Rate');
          B = b('React').createElement(
            b('VideoPlaybackRateControl.react'),
            babelHelpers['extends']({}, b('TooltipData').propsFor(c, 'above'), {
              isEmbedded: this.props.isEmbedded,
              tabIndex: '0',
              onSelectPlaybackRate: this.props.onSetVideoPlaybackRate,
            })
          );
        }
        this.props.hidePlaybackScrubber ||
          (z = b('React').createElement(b('VideoScrubber.react'), {
            adBreaks: this.props.adBreaks,
            adBreaksDisableReasons: this.props.adBreaksDisableReasons,
            annotatedMomentsOfInterest: this.props.annotatedMomentsOfInterest,
            bufferedPosition: this.props.bufferedPosition,
            controlsHidden: this.props.hidden,
            hasScrubberPreview: this.props.hasScrubberPreview,
            interestLevels: this.props.interestLevels,
            drawer: this.props.drawer,
            insertedAdBreaks: this.props.insertedAdBreaks,
            isAdBreakDisabled: this.props.isAdBreakDisabled,
            isAdBreakInsertionWithoutGapRule:
              this.props.isAdBreakInsertionWithoutGapRule,
            isFullscreen: this.props.isFullscreen,
            isPlaying: this.props.isPlaying,
            onScrubBegin: this.props.onScrubBegin,
            onScrubEnd: this.props.onScrubEnd,
            playbackDuration: this.props.playbackDuration,
            playbackPosition: this.props.playbackPosition,
            onAnnotatedMomentOfInterestSelect:
              this.props.onAnnotatedMomentOfInterestSelect,
            previewThumbnailInformation: this.props.previewThumbnailInformation,
            scrubberPreviewSprites: this.props.scrubberPreviewSprites,
            onPointOfInterestSelect: this.props.onPointOfInterestSelect,
            currentPointOfInterest: this.props.currentPointOfInterest,
            pointsOfInterest: this.props.pointsOfInterest,
            showPointOfInterestTimestamps:
              this.props.showPointOfInterestTimestamps,
            tabIndex: '0',
            isInTahoe: this.props.isInTahoe,
            videoClipInfo: this.props.videoClipInfo,
          }));
      }
      c = null;
      this.props.showSidePaneToggle &&
        (c = b('React').createElement(b('VideoSidepaneToggleControl.react'), {
          isSidePaneOpen: this.props.isSidePaneOpen,
          onSidePaneToggle: this.props.onSidePaneToggle,
          tabIndex: '0',
        }));
      var E = null;
      this.props.hideGradient ||
        (E = b('React').createElement('div', {
          className: '_w80' + (this.isTransparent() ? ' _2oy-' : ''),
        }));
      var F = b('React').createElement(b('VideoVolumeControl.react'), {
          isAudioBlocked: this.props.isAudioBlocked,
          isMuted: this.props.isMuted,
          onToggleMuted: this.props.onToggleMuted,
          onVolumeChange: this.props.onVolumeChange,
          volume: this.props.volume,
          tabIndex: '0',
          showSpatialAudioNUX: this.props.showSpatialAudioNUX,
          useDarkTheme: this.props.useDarkTheme,
        }),
        G,
        H,
        I,
        J,
        K,
        L,
        M,
        N = this.props,
        O = N.onLiveRewindToBeginning,
        P = N.onLiveRewindSeekBack,
        Q = N.onLiveRewindSeekForward;
      N = N.onLiveRewindToLive;
      if (this.props.isLiveRewindEnabled && !this.props.isEmbedded) {
        if (this.props.liveRelativePlaybackPosition != null) {
          var R =
            this.props.liveRelativePlaybackPosition >
            this.props.playbackDuration
              ? this.props.playbackDuration
              : this.props.liveRelativePlaybackPosition;
          M = this.props.isInWatchAndScroll
            ? null
            : b('React').createElement(b('VideoPlaybackTimer.react'), {
                className:
                  '_3ek9 _5qsr' +
                  (this.props.displayMilliseconds ? ' _w7-' : ''),
                displayElapsedTime: !0,
                displayMilliseconds: this.props.displayMilliseconds,
                isEmbedded: this.props.isEmbedded,
                isLiveVideo: !0,
                playbackPosTimestamp: R,
                remainingTimestamp: -1 * (this.props.playbackDuration - R),
              });
          L = b('React').createElement(b('VideoScrubber.react'), {
            adBreaks: this.props.adBreaks,
            adBreaksDisableReasons: this.props.adBreaksDisableReasons,
            bufferedPosition: this.props.bufferedPosition,
            className: '_3ek9',
            controlsHidden: this.props.hidden,
            currentPointOfInterest: this.props.currentPointOfInterest,
            drawer: this.props.drawer,
            hasScrubberPreview: this.props.hasScrubberPreview,
            interestLevels: this.props.interestLevels,
            insertedAdBreaks: this.props.insertedAdBreaks,
            isAdBreakDisabled: this.props.isAdBreakDisabled,
            isAdBreakInsertionWithoutGapRule:
              this.props.isAdBreakInsertionWithoutGapRule,
            isFullscreen: this.props.isFullscreen,
            isInTahoe: this.props.isInTahoe,
            isLiveRewound: this.props.isLiveRewound,
            isLiveVideo: !0,
            isPlaying: this.props.isPlaying,
            playbackDuration: this.props.playbackDuration,
            playbackPosition: this.props.isLiveRewound
              ? R
              : this.props.playbackDuration,
            pointsOfInterest: this.props.pointsOfInterest,
            previewThumbnailInformation: this.props.previewThumbnailInformation,
            scrubberPreviewSprites: this.props.scrubberPreviewSprites,
            showPointOfInterestTimestamps:
              this.props.showPointOfInterestTimestamps,
            tabIndex: '0',
            onLiveRewindToBeginning: this.props.onLiveRewindToBeginning,
            onLiveRewindSeekBack: this.props.onLiveRewindSeekBack,
            onLiveRewindSeekForward: this.props.onLiveRewindSeekForward,
            onLiveRewindToLive: this.props.onLiveRewindToLive,
            onPointOfInterestSelect: this.props.onPointOfInterestSelect,
            onScrubBegin: this.props.onScrubBegin,
            onScrubEnd: this.props.onScrubEnd,
          });
          new (b('LiveVideoRewindTypedLogger'))()
            .setEvent(b('LiveVideoRewindLoggerEvent').RENDER_REWIND_CONTROLS)
            .setVideoID(this.props.videoID)
            .log();
        }
        G =
          O && !this.props.isInWatchAndScroll && !this.props.isInline
            ? b('React').createElement(b('BootloadedComponent.react'), {
                bootloadLoader: b('JSResource')(
                  'VideoLiveRewindControl.react'
                ).__setRef('VideoControls.react'),
                bootloadPlaceholder: b('React').createElement('span', null),
                asset: i('465766'),
                tooltip: h._('Go to beginning'),
                onButtonClick: O,
              })
            : null;
        H =
          P && !this.props.isInWatchAndScroll
            ? b('React').createElement(b('BootloadedComponent.react'), {
                bootloadLoader: b('JSResource')(
                  'VideoLiveRewindControl.react'
                ).__setRef('VideoControls.react'),
                bootloadPlaceholder: b('React').createElement('span', null),
                asset: i('465767'),
                tooltip: h._('Skip back'),
                onButtonClick: P,
              })
            : null;
        R = this.props.isLiveRewound ? h._('Skip ahead') : undefined;
        I =
          Q && !this.props.isInWatchAndScroll && !this.props.isInline
            ? b('React').createElement(b('BootloadedComponent.react'), {
                bootloadLoader: b('JSResource')(
                  'VideoLiveRewindControl.react'
                ).__setRef('VideoControls.react'),
                bootloadPlaceholder: b('React').createElement('span', null),
                asset: i('465768'),
                disabled: !this.props.isLiveRewound,
                tooltip: R,
                onButtonClick: Q,
              })
            : null;
        O = this.props.isLiveRewound ? i('467224') : i('467223');
        P = this.props.isLiveRewound ? h._('Live view') : undefined;
        J = N
          ? b('React').createElement(b('BootloadedComponent.react'), {
              bootloadLoader: b('JSResource')(
                'VideoLiveRewindControl.react'
              ).__setRef('VideoControls.react'),
              bootloadPlaceholder: b('React').createElement('span', null),
              asset: O,
              tooltip: P,
              onButtonClick: N,
            })
          : null;
        K = this.props.isInWatchAndScroll
          ? null
          : b('React').createElement(b('VideoPlaybackControl.react'), {
              finishedPlaying: this.props.finishedPlaying,
              isLiveVideo: !0,
              isPlaying: this.props.isPlaying,
              onPause: this.props.onPause,
              onPlay: this.props.onPlay,
              useDarkTheme: this.props.useDarkTheme,
              tabIndex: '0',
            });
      }
      R = null;
      if (this.props.useTwoRows) {
        Q = b('React').createElement(b('VideoVolumeControl.react'), {
          isAudioBlocked: this.props.isAudioBlocked,
          isMuted: this.props.isMuted,
          onToggleMuted: this.props.onToggleMuted,
          onVolumeChange: this.props.onVolumeChange,
          volume: this.props.volume,
          isHorizontal: !0,
          tabIndex: '0',
        });
        R = b('React').createElement(
          'div',
          { className: n },
          b('React').createElement(
            'div',
            { className: l },
            b('React').createElement(
              'div',
              { className: d },
              b('React').createElement('div', { className: f }),
              b('React').createElement('div', { className: g }, z),
              b('React').createElement('div', { className: j }, o)
            )
          ),
          b('React').createElement(
            'div',
            { className: l },
            b('React').createElement(
              'div',
              { className: d },
              b('React').createElement('div', { className: f }, A, B, Q),
              b('React').createElement('div', { className: g }),
              b('React').createElement(
                'div',
                { className: j },
                q,
                s,
                p,
                r,
                x,
                w,
                v,
                y,
                u
              )
            )
          )
        );
      }
      O = null;
      if (
        b('VideoPlayerExperiments').embeddedPlayerEnhancements &&
        this.props.isEmbedded
      ) {
        P = b('joinClasses')(
          d,
          b('VideoPlayerExperiments').embeddedPlayerEnhancements ? '_w83' : ''
        );
        N = b('joinClasses')(d, '_w86');
        O = b('React').createElement(
          'div',
          { className: P },
          b('React').createElement(
            'div',
            { className: l },
            b('React').createElement(
              'div',
              { className: N },
              b('React').createElement('div', { className: f }, A, B),
              b('React').createElement('div', { className: g }, z),
              b('React').createElement('div', { className: j }, o)
            ),
            b('React').createElement(
              'div',
              { className: d },
              b('React').createElement('div', { className: f }),
              b('React').createElement('div', { className: g }),
              b('React').createElement(
                'div',
                { className: j },
                a || F,
                q,
                s,
                p,
                t,
                r,
                x,
                w,
                c,
                v,
                y,
                u
              ),
              b('React').createElement('div', { className: k }, !a || F)
            )
          )
        );
      } else
        O =
          !this.props.useTwoRows || !this.props.isCommentAttachment
            ? b('React').createElement(
                'div',
                { className: m },
                b('React').createElement(
                  'div',
                  { className: l },
                  b('React').createElement(
                    'div',
                    { className: d },
                    b('React').createElement(
                      'div',
                      { className: f },
                      D,
                      A,
                      B,
                      C,
                      G,
                      H,
                      K,
                      I,
                      J,
                      M,
                      b('gkx')(
                        'AT7ApUZVTaeaFVAZosDCyoYg5jewu8k9nTInty9zhgPcbA_qZ0Wekm54rZEtV5zN2fziN-IbrpdI7b9TIq2nwd-2KJh-lL261Q2BabnaLjE70g'
                      )
                        ? o
                        : null
                    ),
                    b('React').createElement('div', { className: g }, z, L),
                    b('React').createElement(
                      'div',
                      { className: j },
                      b('gkx')(
                        'AT7ApUZVTaeaFVAZosDCyoYg5jewu8k9nTInty9zhgPcbA_qZ0Wekm54rZEtV5zN2fziN-IbrpdI7b9TIq2nwd-2KJh-lL261Q2BabnaLjE70g'
                      )
                        ? null
                        : o,
                      a || F,
                      q,
                      s,
                      p,
                      t,
                      r,
                      x,
                      w,
                      c,
                      v,
                      y,
                      u
                    ),
                    b('React').createElement('div', { className: k }, !a || F)
                  )
                )
              )
            : null;
      return b('React').createElement('div', { className: e }, E, O, R);
    };
    function a() {
      j.apply(this, arguments);
    }
    a.propTypes = {
      adBreaks: c.array,
      adBreaksDisableReasons: c.array,
      allowFullscreen: c.bool,
      areHLSActive: c.bool,
      areSubtitlesActive: c.bool,
      areSubtitlesAutogenerated: c.bool,
      availableQualities: c.array,
      canAutoSelectVideoQuality: c.bool,
      displayElapsedTime: c.bool,
      displayMilliseconds: c.bool,
      annotatedMomentsOfInterest: c.object,
      finishedPlaying: c.bool,
      hasHD: c.bool,
      hasScrubberPreview: c.bool,
      hasSubtitles: c.bool,
      hasWatchAndScroll: c.bool,
      hidden: c.bool,
      hideGradient: c.bool,
      hidePlaybackControl: c.bool,
      hidePlaybackScrubber: c.bool,
      hideRemainingTime: c.bool,
      hideSettings: c.bool,
      isAudioBlocked: c.bool,
      isCommentAttachment: c.bool,
      isEmbedded: c.bool,
      isFullscreen: c.bool,
      isHD: c.bool,
      isInline: c.bool,
      isInWatchAndScroll: c.bool,
      isLive: c.bool,
      isLiveRewindEnabled: c.bool,
      isMuted: c.bool,
      isPlaying: c.bool,
      isSidePaneOpen: c.bool,
      isSlidingWNSEligible: c.bool,
      isSphericalVideo: c.bool,
      onEnterWatchAndScroll: c.func,
      onLiveRewindSeekBack: c.func,
      onLiveRewindSeekForward: c.func,
      onLiveRewindToBeginning: c.func,
      onLiveRewindToLive: c.func,
      onPause: c.func,
      onPlay: c.func,
      onPointOfInterestSelect: c.func,
      onSeek: c.func,
      onSelectQuality: c.func,
      onSetVideoPlaybackRate: c.func,
      onToggleFullscreen: c.func,
      onToggleHD: c.func,
      onToggleHLS: c.func,
      onToggleMuted: c.func,
      onToggleSubtitles: c.func,
      onVolumeChange: c.func,
      permalinkURL: c.string,
      playbackDuration: c.number,
      playbackPosition: c.number,
      pointsOfInterest: c.array,
      preferredQuality: c.string,
      previewThumbnailInformation: c.object,
      qualitySelectorMinStreams: c.number,
      scrubberPreviewSprites: c.object,
      selectedQuality: c.string,
      showPointOfInterestTimestamps: c.bool,
      showQualitySelector: c.bool,
      showSidePaneToggle: c.bool,
      showWNSNUX: c.bool,
      streamingFormat: c.string,
      transparent: c.bool,
      useDarkTheme: c.bool,
      useTwoRows: c.bool,
      volume: c.number,
      videoClipInfo: c.object,
    };
    a.defaultProps = {
      allowCasting: !1,
      bufferedPosition: 0,
      displayElapsedTime: !1,
      displayMilliseconds: !1,
      hasFoundReceiver: !1,
      hidden: !1,
      hideGradient: !1,
      hidePlaybackControl: !1,
      hidePlaybackScrubber: !1,
      hideRemainingTime: !1,
      hideSettings: !1,
      isAudioBlocked: !1,
      isCasting: !1,
      isCastingSupported: !1,
      isCommentAttachment: !1,
      isMuted: !1,
      isPlaying: !1,
      isSphericalVideo: !1,
      onSidePaneToggle: function () {},
      onStartCast: function () {},
      onStopCast: function () {},
      playbackDuration: 0,
      playbackPosition: 0,
      showPlaybackRateControl: !1,
      showSidePaneToggle: !1,
      showWNSNUX: !1,
      transparent: !1,
      useDarkTheme: !1,
      useTwoRows: !1,
      volume: 0,
    };
    e.exports = a;
  },
  null
);
__d(
  'fbjs/lib/ExecutionEnvironment',
  ['ExecutionEnvironment'],
  function (a, b, c, d, e, f) {
    e.exports = b('ExecutionEnvironment');
  },
  null
);
__d(
  'getVendorPrefixedEventName',
  ['fbjs/lib/ExecutionEnvironment'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a, b) {
      var c = {};
      c[a.toLowerCase()] = b.toLowerCase();
      c['Webkit' + a] = 'webkit' + b;
      c['Moz' + a] = 'moz' + b;
      c['ms' + a] = 'MS' + b;
      c['O' + a] = 'o' + b.toLowerCase();
      return c;
    }
    var g = {
        animationend: a('Animation', 'AnimationEnd'),
        animationiteration: a('Animation', 'AnimationIteration'),
        animationstart: a('Animation', 'AnimationStart'),
        transitionend: a('Transition', 'TransitionEnd'),
      },
      h = {},
      i = {};
    b('fbjs/lib/ExecutionEnvironment').canUseDOM &&
      ((i = document.createElement('div').style),
      'AnimationEvent' in window ||
        (delete g.animationend.animation,
        delete g.animationiteration.animation,
        delete g.animationstart.animation),
      'TransitionEvent' in window || delete g.transitionend.transition);
    function c(a) {
      if (h[a]) return h[a];
      else if (!g[a]) return a;
      var b = g[a];
      for (var c in b)
        if (Object.prototype.hasOwnProperty.call(b, c) && c in i)
          return (h[a] = b[c]);
      return '';
    }
    e.exports = c;
  },
  null
);
__d(
  'ReactTransitionEvents',
  ['fbjs/lib/ExecutionEnvironment', 'getVendorPrefixedEventName'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = [];
    function a() {
      var a = b('getVendorPrefixedEventName')('animationend'),
        c = b('getVendorPrefixedEventName')('transitionend');
      a && g.push(a);
      c && g.push(c);
    }
    b('fbjs/lib/ExecutionEnvironment').canUseDOM && a();
    function h(a, b, c) {
      a.addEventListener(b, c, !1);
    }
    function i(a, b, c) {
      a.removeEventListener(b, c, !1);
    }
    c = {
      addEndEventListener: function (a, b) {
        if (g.length === 0) {
          window.setTimeout(b, 0);
          return;
        }
        g.forEach(function (c) {
          h(a, c, b);
        });
      },
      removeEndEventListener: function (a, b) {
        if (g.length === 0) return;
        g.forEach(function (c) {
          i(a, c, b);
        });
      },
    };
    e.exports = c;
  },
  null
);
__d(
  'fbjs/lib/CSSCore',
  ['CSSCore'],
  function (a, b, c, d, e, f) {
    e.exports = b('CSSCore');
  },
  null
);
__d(
  'ReactCSSTransitionGroupChild',
  ['React', 'ReactDOM', 'ReactTransitionEvents', 'fbjs/lib/CSSCore'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = 17;
    a = b('React').createClass({
      displayName: 'ReactCSSTransitionGroupChild',
      propTypes: {
        name: b('React').PropTypes.oneOfType([
          b('React').PropTypes.string,
          b('React').PropTypes.shape({
            enter: b('React').PropTypes.string,
            leave: b('React').PropTypes.string,
            active: b('React').PropTypes.string,
          }),
          b('React').PropTypes.shape({
            enter: b('React').PropTypes.string,
            enterActive: b('React').PropTypes.string,
            leave: b('React').PropTypes.string,
            leaveActive: b('React').PropTypes.string,
            appear: b('React').PropTypes.string,
            appearActive: b('React').PropTypes.string,
          }),
        ]).isRequired,
        appear: b('React').PropTypes.bool,
        enter: b('React').PropTypes.bool,
        leave: b('React').PropTypes.bool,
        appearTimeout: b('React').PropTypes.number,
        enterTimeout: b('React').PropTypes.number,
        leaveTimeout: b('React').PropTypes.number,
      },
      transition: function (a, c, d) {
        __p && __p();
        var e = b('ReactDOM').findDOMNode(this);
        if (!e) {
          c && c();
          return;
        }
        var f = this.props.name[a] || this.props.name + '-' + a,
          g = this.props.name[a + 'Active'] || f + '-active',
          h = null;
        a = function a(d) {
          if (d && d.target !== e) return;
          clearTimeout(h);
          b('fbjs/lib/CSSCore').removeClass(e, f);
          b('fbjs/lib/CSSCore').removeClass(e, g);
          b('ReactTransitionEvents').removeEndEventListener(e, a);
          c && c();
        };
        b('fbjs/lib/CSSCore').addClass(e, f);
        this.queueClassAndNode(g, e);
        d
          ? ((h = setTimeout(a, d)), this.transitionTimeouts.push(h))
          : b('ReactTransitionEvents').addEndEventListener(e, a);
      },
      queueClassAndNode: function (a, b) {
        this.classNameAndNodeQueue.push({ className: a, node: b }),
          this.timeout ||
            (this.timeout = setTimeout(this.flushClassNameAndNodeQueue, g));
      },
      flushClassNameAndNodeQueue: function () {
        this.isMounted() &&
          this.classNameAndNodeQueue.forEach(function (a) {
            b('fbjs/lib/CSSCore').addClass(a.node, a.className);
          }),
          (this.classNameAndNodeQueue.length = 0),
          (this.timeout = null);
      },
      UNSAFE_componentWillMount: function () {
        (this.classNameAndNodeQueue = []), (this.transitionTimeouts = []);
      },
      componentWillUnmount: function () {
        this.timeout && clearTimeout(this.timeout),
          this.transitionTimeouts.forEach(function (a) {
            clearTimeout(a);
          }),
          (this.classNameAndNodeQueue.length = 0);
      },
      componentWillAppear: function (a) {
        this.props.appear
          ? this.transition('appear', a, this.props.appearTimeout)
          : a();
      },
      componentWillEnter: function (a) {
        this.props.enter
          ? this.transition('enter', a, this.props.enterTimeout)
          : a();
      },
      componentWillLeave: function (a) {
        this.props.leave
          ? this.transition('leave', a, this.props.leaveTimeout)
          : a();
      },
      render: function () {
        return b('React').Children.only(this.props.children);
      },
    });
    e.exports = a;
  },
  null
);
__d(
  'ReactTransitionChildMapping',
  ['React', 'emptyFunction', 'warning'],
  function (a, b, c, d, e, f) {
    __p && __p();
    a = b('emptyFunction');
    c = {
      getChildMapping: function (a) {
        if (!a) return a;
        var c = {};
        b('React')
          .Children.toArray(a)
          .forEach(function (a) {
            var b = a.key,
              d = c[b] === undefined;
            d && (c[b] = a);
          });
        return c;
      },
      mergeChildMappings: function (a, b) {
        __p && __p();
        a = a || {};
        b = b || {};
        function c(c) {
          if (Object.prototype.hasOwnProperty.call(b, c)) return b[c];
          else return a[c];
        }
        var d = {},
          e = [];
        for (var f in a)
          Object.prototype.hasOwnProperty.call(b, f)
            ? e.length && ((d[f] = e), (e = []))
            : e.push(f);
        var g,
          h = {};
        for (var i in b) {
          if (Object.prototype.hasOwnProperty.call(d, i))
            for (g = 0; g < d[i].length; g++) {
              var j = d[i][g];
              h[d[i][g]] = c(j);
            }
          h[i] = c(i);
        }
        for (g = 0; g < e.length; g++) h[e[g]] = c(e[g]);
        return h;
      },
    };
    e.exports = c;
  },
  null
);
__d(
  'ReactTransitionGroup',
  ['React', 'ReactTransitionChildMapping', 'fbjs/lib/emptyFunction'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g;
    c = babelHelpers.inherits(a, b('React').Component);
    g = c && c.prototype;
    function a() {
      __p && __p();
      var a, c;
      for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
        e[f] = arguments[f];
      return (
        (c = (a = g.constructor).call.apply(a, [this].concat(e))),
        (this.state = {
          children: b('ReactTransitionChildMapping').getChildMapping(
            this.props.children
          ),
        }),
        (this.performAppear = function (a) {
          this.currentlyTransitioningKeys[a] = !0;
          var b = this.refs[a];
          b.componentWillAppear
            ? b.componentWillAppear(this.$1.bind(this, a))
            : this.$1(a);
        }.bind(this)),
        (this.$1 = function (a) {
          var c = this.refs[a];
          c.componentDidAppear && c.componentDidAppear();
          delete this.currentlyTransitioningKeys[a];
          c = b('ReactTransitionChildMapping').getChildMapping(
            this.props.children
          );
          (!c || !Object.prototype.hasOwnProperty.call(c, a)) &&
            this.performLeave(a);
        }.bind(this)),
        (this.performEnter = function (a) {
          this.currentlyTransitioningKeys[a] = !0;
          var b = this.refs[a];
          b.componentWillEnter
            ? b.componentWillEnter(this.$2.bind(this, a))
            : this.$2(a);
        }.bind(this)),
        (this.$2 = function (a) {
          var c = this.refs[a];
          c.componentDidEnter && c.componentDidEnter();
          delete this.currentlyTransitioningKeys[a];
          c = b('ReactTransitionChildMapping').getChildMapping(
            this.props.children
          );
          (!c || !Object.prototype.hasOwnProperty.call(c, a)) &&
            this.performLeave(a);
        }.bind(this)),
        (this.performLeave = function (a) {
          this.currentlyTransitioningKeys[a] = !0;
          var b = this.refs[a];
          b.componentWillLeave
            ? b.componentWillLeave(this.$3.bind(this, a))
            : this.$3(a);
        }.bind(this)),
        (this.$3 = function (a) {
          var c = this.refs[a];
          c.componentDidLeave && c.componentDidLeave();
          delete this.currentlyTransitioningKeys[a];
          c = b('ReactTransitionChildMapping').getChildMapping(
            this.props.children
          );
          c && Object.prototype.hasOwnProperty.call(c, a)
            ? this.performEnter(a)
            : this.setState(function (b) {
                b = Object.assign({}, b.children);
                delete b[a];
                return { children: b };
              });
        }.bind(this)),
        c
      );
    }
    a.prototype.UNSAFE_componentWillMount = function () {
      (this.currentlyTransitioningKeys = {}),
        (this.keysToEnter = []),
        (this.keysToLeave = []);
    };
    a.prototype.componentDidMount = function () {
      var a = this.state.children;
      for (var b in a) a[b] && this.performAppear(b);
    };
    a.prototype.UNSAFE_componentWillReceiveProps = function (a) {
      __p && __p();
      a = b('ReactTransitionChildMapping').getChildMapping(a.children);
      var c = this.state.children;
      this.setState({
        children: b('ReactTransitionChildMapping').mergeChildMappings(c, a),
      });
      var d;
      for (d in a) {
        var e = c && Object.prototype.hasOwnProperty.call(c, d);
        a[d] &&
          !e &&
          !this.currentlyTransitioningKeys[d] &&
          this.keysToEnter.push(d);
      }
      for (d in c) {
        e = a && Object.prototype.hasOwnProperty.call(a, d);
        c[d] &&
          !e &&
          !this.currentlyTransitioningKeys[d] &&
          this.keysToLeave.push(d);
      }
    };
    a.prototype.componentDidUpdate = function () {
      var a = this.keysToEnter;
      this.keysToEnter = [];
      a.forEach(this.performEnter);
      a = this.keysToLeave;
      this.keysToLeave = [];
      a.forEach(this.performLeave);
    };
    a.prototype.render = function () {
      __p && __p();
      var a = [];
      for (var c in this.state.children) {
        var d = this.state.children[c];
        d &&
          a.push(
            b('React').cloneElement(this.props.childFactory(d), {
              ref: c,
              key: c,
            })
          );
      }
      d = Object.assign({}, this.props);
      delete d.transitionLeave;
      delete d.transitionName;
      delete d.transitionAppear;
      delete d.transitionEnter;
      delete d.childFactory;
      delete d.transitionLeaveTimeout;
      delete d.transitionEnterTimeout;
      delete d.transitionAppearTimeout;
      delete d.component;
      return b('React').createElement(this.props.component, d, a);
    };
    a.displayName = 'ReactTransitionGroup';
    a.propTypes = {
      component: b('React').PropTypes.any,
      childFactory: b('React').PropTypes.func,
    };
    a.defaultProps = {
      component: 'span',
      childFactory: b('fbjs/lib/emptyFunction').thatReturnsArgument,
    };
    e.exports = a;
  },
  null
);
__d(
  'ReactCSSTransitionGroup',
  ['React', 'ReactCSSTransitionGroupChild', 'ReactTransitionGroup'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g;
    function a(a) {
      var b = 'transition' + a + 'Timeout',
        c = 'transition' + a;
      return function (a) {
        if (a[c])
          if (a[b] == null)
            return new Error(
              b +
                " wasn't supplied to ReactCSSTransitionGroup: this can cause unreliable animations and won't be supported in a future version of React. See https://fb.me/react-animation-transition-group-timeout for more information."
            );
          else if (typeof a[b] !== 'number')
            return new Error(b + ' must be a number (in milliseconds)');
      };
    }
    d = babelHelpers.inherits(c, b('React').Component);
    g = d && d.prototype;
    function c() {
      var a, c;
      for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
        e[f] = arguments[f];
      return (
        (c = (a = g.constructor).call.apply(a, [this].concat(e))),
        (this.$1 = function (a) {
          return b('React').createElement(
            b('ReactCSSTransitionGroupChild'),
            {
              name: this.props.transitionName,
              appear: this.props.transitionAppear,
              enter: this.props.transitionEnter,
              leave: this.props.transitionLeave,
              appearTimeout: this.props.transitionAppearTimeout,
              enterTimeout: this.props.transitionEnterTimeout,
              leaveTimeout: this.props.transitionLeaveTimeout,
            },
            a
          );
        }.bind(this)),
        c
      );
    }
    c.prototype.render = function () {
      return b('React').createElement(
        b('ReactTransitionGroup'),
        Object.assign({}, this.props, { childFactory: this.$1 })
      );
    };
    c.displayName = 'ReactCSSTransitionGroup';
    c.propTypes = {
      transitionName: b('ReactCSSTransitionGroupChild').propTypes.name,
      transitionAppear: b('React').PropTypes.bool,
      transitionEnter: b('React').PropTypes.bool,
      transitionLeave: b('React').PropTypes.bool,
      transitionAppearTimeout: a('Appear'),
      transitionEnterTimeout: a('Enter'),
      transitionLeaveTimeout: a('Leave'),
    };
    c.defaultProps = {
      transitionAppear: !1,
      transitionEnter: !0,
      transitionLeave: !0,
    };
    e.exports = c;
  },
  null
);
__d(
  'XVideoWnsUpNextAsyncController',
  ['XController'],
  function (a, b, c, d, e, f) {
    e.exports = b('XController').create('/video/wns/upnext/async/{video_id}/', {
      video_id: { type: 'FBID', required: !0 },
      viewed_videos: { type: 'FBIDSet' },
    });
  },
  null
);
__d(
  'VideoWatchAndScrollDrawer.react',
  [
    'csx',
    'cx',
    'fbt',
    'AsyncRequest',
    'DOM',
    'DOMContainer.react',
    'FBLoadShimmer.react',
    'React',
    'XVideoWnsUpNextAsyncController',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    __p && __p();
    var j;
    c = babelHelpers.inherits(a, b('React').Component);
    j = c && c.prototype;
    function a() {
      var a, b;
      for (var c = arguments.length, d = new Array(c), e = 0; e < c; e++)
        d[e] = arguments[e];
      return (
        (b = (a = j.constructor).call.apply(a, [this].concat(d))),
        (this.state = { fetching: !0, upNext: null }),
        b
      );
    }
    a.prototype.componentDidMount = function () {
      this.props.videoID && this.$2(this.props.videoID);
    };
    a.prototype.componentWillUnmount = function () {
      this.$1 && this.$1.abort();
    };
    a.prototype.$2 = function (a) {
      __p && __p();
      a = b('XVideoWnsUpNextAsyncController')
        .getURIBuilder()
        .setFBID('video_id', a)
        .setFBIDSet('viewed_videos', this.props.viewedVideos);
      this.$1 = new (b('AsyncRequest'))(a.getURI());
      this.$1
        .setHandler(
          function (a) {
            a = a.getPayload();
            var c = a.upNextUnit && a.upNextUnit.markup;
            if (c) {
              c = b('DOM').create('div', {}, c);
              var d = b('DOM').scry(c, '._3iqr');
              d.length &&
                (this.setState({ upNext: c }),
                this.props.onLoadUpNext(c, a.canAutoplay));
            }
            this.setState({ fetching: !1 });
          }.bind(this)
        )
        .send();
    };
    a.prototype.render = function () {
      var a = null;
      if (this.state.upNext)
        a = b('React').createElement(
          b('DOMContainer.react'),
          null,
          this.state.upNext
        );
      else if (this.state.fetching)
        a = b('React').createElement(
          'div',
          { className: '_2685' },
          b('React').createElement(b('FBLoadShimmer.react'), {
            height: 70,
            width: 124,
          }),
          b('React').createElement(
            'div',
            { className: '_63-r' },
            b('React').createElement(b('FBLoadShimmer.react'), {
              height: 14,
              width: 140,
              className: '_3-94',
            }),
            b('React').createElement(b('FBLoadShimmer.react'), {
              height: 14,
              width: 140,
              className: '_3-94',
            }),
            b('React').createElement(b('FBLoadShimmer.react'), {
              height: 14,
              width: 70,
              className: '_3-94',
            }),
            b('React').createElement(b('FBLoadShimmer.react'), {
              height: 14,
              width: 70,
            })
          )
        );
      else return null;
      return b('React').createElement(
        'div',
        { className: '_3rq1 _60a7 _2tyk' },
        b('React').createElement(
          'div',
          { className: '_3652' },
          b('React').createElement(
            'div',
            { className: '_3653' },
            i._('Up Next')
          )
        ),
        a
      );
    };
    e.exports = a;
  },
  null
);
__d(
  'VideoWatchAndScrollEndScreen.react',
  [
    'ix',
    'cx',
    'fbt',
    'Image.react',
    'PopoverMenu.react',
    'React',
    'ReactXUIMenu',
    'ShimButton.react',
    'TooltipData',
    'VideoChannelProgressCircle.react',
    'VideoChannelReplayImage.react',
    'VideoPlayerExperiments',
    'fbglyph',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    __p && __p();
    var j,
      k = b('VideoPlayerExperiments').showWNSClose;
    c = b('React').PropTypes;
    var l = function (a) {
        a = a.onClose;
        return b('React').createElement(
          b('ShimButton.react'),
          { className: '_3r7h', onClick: a },
          b('React').createElement(b('Image.react'), { src: g('114710') })
        );
      },
      m = function (a) {
        a = a.onCollapse;
        return b('React').createElement(
          'div',
          babelHelpers['extends'](
            { className: '_1dtq', onClick: a, role: 'button', tabIndex: '1' },
            b('TooltipData').propsFor(i._('Collapse Video'))
          ),
          b('React').createElement(b('Image.react'), { src: g('115705') })
        );
      },
      n = function (a) {
        var c = a.onClose;
        a = b('React').createElement(
          b('ReactXUIMenu'),
          {
            onItemClick: function (a, b) {
              a = b.item;
              a.getValue() === 'close' && c();
            },
          },
          b('React').createElement(
            b('ReactXUIMenu').Item,
            { value: 'close' },
            'Close'
          )
        );
        return b('React').createElement(
          b('PopoverMenu.react'),
          { className: '_ivg', menu: a },
          b('React').createElement(
            'a',
            { href: '#' },
            b('React').createElement(b('Image.react'), { src: g('114186') })
          )
        );
      };
    j = babelHelpers.inherits(a, b('React').Component);
    j && j.prototype;
    a.prototype.render = function () {
      return b('React').createElement(
        'div',
        {
          className:
            '_5qdn _2se8' + (this.props.fadeOut ? ' _2gud' : '') + ' _1s-2',
        },
        b('React').createElement(
          'div',
          { className: '_1szz _2se8' },
          b('React').createElement(
            'div',
            {
              className: '_1szy _ww8',
              onClick: this.props.onReplay,
              role: 'presentation',
            },
            b('React').createElement(
              b('VideoChannelProgressCircle.react'),
              {
                makeProgress: this.props.makeProgress,
                timeoutSec: this.props.endScreenDuration,
                watchAndScroll: !0,
              },
              b('React').createElement(b('VideoChannelReplayImage.react'), {
                size: 'small',
              })
            )
          )
        ),
        b('React').createElement(
          'div',
          { className: '_ivh' },
          k
            ? null
            : b('React').createElement(n, { onClose: this.props.onClose }),
          b('React').createElement(m, { onCollapse: this.props.onCollapse }),
          k
            ? b('React').createElement(l, { onClose: this.props.onClose })
            : null
        )
      );
    };
    function a() {
      j.apply(this, arguments);
    }
    a.propTypes = {
      endScreenDuration: c.number.isRequired,
      fadeOut: c.bool,
      makeProgress: c.bool.isRequired,
      onReplay: c.func.isRequired,
      onClose: c.func.isRequired,
    };
    e.exports = a;
  },
  null
);
__d(
  'shouldWNSRenderToRHC',
  ['ge'],
  function (a, b, c, d, e, f) {
    function a() {
      return !!b('ge')('fbRHCVideoWNS-container');
    }
    e.exports = a;
  },
  null
);
__d(
  'VideoWatchAndScrollContainer.react',
  [
    'csx',
    'cx',
    'Arbiter',
    'CSS',
    'DOM',
    'DOMContainer.react',
    'DOMDimensions',
    'Event',
    'Locale',
    'Parent',
    'React',
    'ReactCSSTransitionGroup',
    'Rect',
    'SubscriptionsHandler',
    'VideoChannelProgressCircle.react',
    'VideoChannelReplayImage.react',
    'VideoPlayerExperiments',
    'VideoWatchAndScrollDrawer.react',
    'VideoWatchAndScrollEndScreen.react',
    'cancelAnimationFrame',
    'clearTimeout',
    'getViewportDimensions',
    'requestAnimationFrame',
    'setTimeoutAcrossTransitions',
    'shallowCompare',
    'shouldWNSRenderToRHC',
    'throttle',
  ],
  function (a, b, c, d, e, f, g, h) {
    __p && __p();
    var i;
    c = b('React').PropTypes;
    var j = 10,
      k = 230,
      l = 476,
      m = 300,
      n = 2e3,
      o = b('VideoPlayerExperiments').endScreenDuration,
      p = Object.freeze({ NW: 'nw', NE: 'ne', SE: 'se', SW: 'sw' });
    d = babelHelpers.inherits(a, b('React').Component);
    i = d && d.prototype;
    function a(a, b) {
      i.constructor.call(this, a, b), (this.state = this.$3(this.props));
    }
    a.prototype.$3 = function (a) {
      a = this.$4();
      var b = this.$5(this.props.initialPosition, a);
      return {
        channelVideoElements: [this.props.initialVideoElement],
        containerBoundingBox: a,
        dragging: !1,
        draggingStartHeight: 0,
        draggingStartLeft: 0,
        draggingStartMousePositionX: 0,
        draggingStartMousePositionY: 0,
        draggingStartTop: 0,
        draggingStartWidth: 0,
        endScreenFadeOut: !1,
        endScreenShown: !1,
        fadeOut: !1,
        fadeOutPlaceholder: null,
        hasDrawer: !1,
        height: b.height,
        left: b.left,
        playbackFinished: !1,
        resizeDirection: null,
        showDrawer: !1,
        timeUntilNext: 0,
        top: b.top,
        width: b.width,
        videoIndex: 0,
      };
    };
    a.prototype.shouldComponentUpdate = function (a, c) {
      return !this.state.fadeOut && b('shallowCompare')(this, a, c);
    };
    a.prototype.componentDidUpdate = function (a, c) {
      __p && __p();
      if (!c) return;
      !c.dragging && this.state.dragging
        ? ((this.documentSubscriptions = new (b('SubscriptionsHandler'))()),
          this.documentSubscriptions.addSubscriptions(
            b('Event').listen(document, 'mousemove', this.$6.bind(this)),
            b('Event').listen(document, 'mouseup', this.$7.bind(this))
          ))
        : c.dragging &&
          !this.state.dragging &&
          this.documentSubscriptions.release();
      c.playbackFinished !== this.state.playbackFinished &&
        this.state.playbackFinished &&
        this.state.timeUntilNext &&
        (b('clearTimeout')(this.$2),
        this.$8(),
        (this.$2 = b('setTimeoutAcrossTransitions')(
          function () {
            this.props.onPlayNext();
          }.bind(this),
          this.state.timeUntilNext * 1e3
        )));
      var d = ['._23if', '._23ig', '._452w', '._2i7a'],
        e = c.channelVideoElements || [];
      this.state.channelVideoElements.forEach(function (a) {
        if (e.indexOf(a) !== -1) return;
        d.forEach(function (c) {
          c = b('DOM').scry(a, c);
          c = c[0];
          c && b('CSS').hide(c);
        });
        var c = b('DOM').scry(a, '._3pay');
        c = c[0];
        c && (b('CSS').removeClass(c, '_3pay'), b('CSS').addClass(c, '_2337'));
      });
    };
    a.prototype.componentDidMount = function () {
      (this.movementListeners = new (b('SubscriptionsHandler'))()),
        this.movementListeners.addSubscriptions(
          b('Event').listen(
            window,
            'resize',
            b('throttle')(this.$9.bind(this), 100)
          ),
          b('Arbiter').subscribe(
            'sidebar/visibility',
            b('throttle')(this.$9.bind(this), 100)
          )
        );
    };
    a.prototype.componentWillUnmount = function () {
      this.documentSubscriptions && this.documentSubscriptions.release(),
        this.movementListeners && this.movementListeners.release(),
        this.$1 && b('clearTimeout')(this.$1),
        this.$2 && b('clearTimeout')(this.$2);
    };
    a.prototype.getFadeOutStatus = function () {
      return this.state.fadeOut;
    };
    a.prototype.getChannelVideoElements = function () {
      return this.state.channelVideoElements;
    };
    a.prototype.$9 = function () {
      var a = this.$4(),
        b = this.$5(
          {
            height: this.state.height,
            left: this.state.left,
            top: this.state.top,
            width: this.state.width,
          },
          a
        );
      this.setState({
        containerBoundingBox: a,
        height: b.height,
        left: b.left,
        top: b.top,
        width: b.width,
      });
    };
    a.prototype.$10 = function (a, event) {
      this.$11(event, a);
    };
    a.prototype.$12 = function (event) {
      if (
        b('Parent').bySelector(event.target, '._5-32') ||
        !b('Parent').bySelector(event.target, '._3t-6')
      )
        return;
      this.$11(event, null);
    };
    a.prototype.$13 = function (event) {
      return (
        event.button !== 0 ||
        b('Parent').bySelector(event.target, '._3t-6') ||
        b('Parent').bySelector(event.target, '._2se8')
      );
    };
    a.prototype.$14 = function (event) {
      if (this.$13(event)) return;
      this.props.onClick && this.props.onClick();
    };
    a.prototype.$11 = function (event, a) {
      var c = event.button,
        d = event.target;
      if (c !== 0) return;
      if (b('Parent').bySelector(d, '._360f')) return;
      this.props.onGrab();
      this.setState({
        containerBoundingBox: this.$4(),
        dragging: !0,
        draggingStartHeight: this.state.height,
        draggingStartLeft: this.state.left,
        draggingStartMousePositionX: event.screenX,
        draggingStartMousePositionY: event.screenY,
        draggingStartTop: this.state.top,
        draggingStartWidth: this.state.width,
        resizeDirection: a,
      });
      event.preventDefault();
    };
    a.prototype.$4 = function () {
      var a = 0,
        c = b('DOM').scry(document.body, '.fbChatSidebar');
      c.length === 1 &&
        (a = b('DOMDimensions').getElementDimensions(c[0]).width);
      c = b('getViewportDimensions').withoutScrollbars();
      var d = 43 + j,
        e = c.height - j,
        f = j;
      c = c.width - j;
      b('Locale').isRTL() ? (f += a) : (c -= a);
      return new (b('Rect'))(d, c, e, f);
    };
    a.prototype.$5 = function (a, c) {
      a = new (b('Rect'))(a.top, a.left + a.width, a.top + a.height, a.left);
      a = a.boundWithin(c);
      return {
        height: a.h(),
        left: a.getLeft(),
        top: a.getTop(),
        width: a.w(),
      };
    };
    a.prototype.$15 = function (a, b, c) {
      __p && __p();
      var d = a.top,
        e = b.getTop();
      d = e - d;
      d > 0 && ((c === p.NE || c === p.NW) && (a.height -= d), (a.top = e));
      d = a.left;
      e = b.getLeft();
      d = e - d;
      d > 0 && ((c === p.NW || c === p.SW) && (a.width -= d), (a.left = e));
      c = a.top + a.height;
      d = b.getTop() + b.h();
      e = c - d;
      e > 0 && (a.height = d - a.top);
      c = a.left + a.width;
      e = b.getLeft() + b.w();
      d = c - e;
      d > 0 && (a.width = e - a.left);
    };
    a.prototype.$16 = function (a, b, c) {
      a.width < k &&
        ((c === p.NW || c === p.SW) && (a.left -= k - a.width), (a.width = k)),
        a.height < k &&
          ((c === p.NE || c === p.NW) && (a.top -= k - a.height),
          (a.height = k));
    };
    a.prototype.$17 = function (a, b, c) {
      a.width > l &&
        ((c === p.NW || c === p.SW) && (a.left += a.width - l), (a.width = l)),
        a.height > l &&
          ((c === p.NE || c === p.NW) && (a.top += a.height - l),
          (a.height = l));
    };
    a.prototype.$18 = function (a, b, c) {
      __p && __p();
      var d = a.width / a.height;
      b = b.width / b.height;
      if (d > b) {
        var e = a.height * b,
          f = a.height;
        e < k &&
          ((f *= k / e),
          (e = k),
          (c === p.NE || c === p.NW) && (a.top += a.height - f));
        (c === p.NW || c === p.SW) && (a.left += a.width - e);
        a.width = e;
        a.height = f;
      } else if (d < b) {
        e = a.width / b;
        (c === p.NE || c === p.NW) && (a.top += a.height - e);
        a.height = e;
      }
    };
    a.prototype.$19 = function (a, b, c, d) {
      this.$15(a, c, d);
      this.$16(a, b, d);
      this.$17(a, b, d);
      this.$18(a, b, d);
      return { height: a.height, left: a.left, top: a.top, width: a.width };
    };
    a.prototype.$6 = function (event) {
      b('cancelAnimationFrame')(this.dragUpdateRequestAnimationFrameID),
        (this.dragUpdateRequestAnimationFrameID = b('requestAnimationFrame')(
          this.$20.bind(this, event)
        ));
    };
    a.prototype.$21 = function (a) {
      (a.height !== this.state.height || a.width !== this.state.width) &&
        this.props.onInitialPositionUpdate(a);
    };
    a.prototype.$20 = function (event) {
      __p && __p();
      if (!this.state.dragging) return;
      var a = event.screenX - this.state.draggingStartMousePositionX,
        b = event.screenY - this.state.draggingStartMousePositionY,
        c = this.state.resizeDirection,
        d;
      if (!c)
        (d = this.$5(
          {
            height: this.state.draggingStartHeight,
            left: this.state.draggingStartLeft + a,
            top: this.state.draggingStartTop + b,
            width: this.state.draggingStartWidth,
          },
          this.state.containerBoundingBox
        )),
          this.$21(d),
          this.setState({
            height: d.height,
            left: d.left,
            top: d.top,
            width: d.width,
          });
      else {
        var e = this.state.draggingStartHeight,
          f = this.state.draggingStartLeft,
          g = this.state.draggingStartTop,
          h = this.state.draggingStartWidth;
        (c === p.NE || c === p.SE) && (h += a);
        (c === p.NW || c === p.SW) && ((f += a), (h -= a));
        (c === p.SE || c === p.SW) && (e += b);
        (c === p.NE || c === p.NW) && ((g += b), (e -= b));
        d = this.$19(
          { height: e, left: f, top: g, width: h },
          {
            height: this.state.draggingStartHeight,
            left: this.state.draggingStartLeft,
            top: this.state.draggingStartTop,
            width: this.state.draggingStartWidth,
          },
          this.state.containerBoundingBox,
          c
        );
        this.$21(d);
        this.setState({
          height: d.height,
          left: d.left,
          top: d.top,
          width: d.width,
        });
      }
      event.preventDefault();
    };
    a.prototype.$7 = function (event) {
      b('cancelAnimationFrame')(this.dragUpdateRequestAnimationFrameID),
        this.props.onDrop(),
        this.setState({
          dragging: !1,
          draggingStartHeight: 0,
          draggingStartLeft: 0,
          draggingStartMousePositionX: 0,
          draggingStartMousePositionY: 0,
          draggingStartTop: 0,
          draggingStartWidth: 0,
          resizeDirection: null,
        }),
        event.preventDefault();
    };
    a.prototype.$22 = function () {
      this.$1 && (b('clearTimeout')(this.$1), (this.$1 = null)),
        this.setState({ showDrawer: !0 });
    };
    a.prototype.$23 = function () {
      this.state.showDrawer && this.$8();
    };
    a.prototype.$24 = function () {
      b('clearTimeout')(this.$2),
        this.setState({ playbackFinished: !1 }),
        this.props.onReplay();
    };
    a.prototype.$8 = function () {
      this.$1 ? b('clearTimeout')(this.$1) : this.setState({ showDrawer: !0 }),
        (this.$1 = b('setTimeoutAcrossTransitions')(
          function () {
            this.setState({ showDrawer: !1 }), (this.$1 = null);
          }.bind(this),
          n
        ));
    };
    a.prototype.$25 = function (a, c) {
      if (a > this.state.channelVideoElements.length) return null;
      a = this.state.channelVideoElements[a];
      return !a
        ? null
        : b('React').createElement(
            'div',
            {
              className:
                '_2yq3' +
                (c === 'left' ? ' _2yq4' : '') +
                (c === 'center' ? ' _2yq5' : '') +
                (c === 'right' ? ' _2yq6' : ''),
              key: a.id,
            },
            b('React').createElement(b('DOMContainer.react'), null, a)
          );
    };
    a.prototype.$26 = function () {
      return b('shouldWNSRenderToRHC')()
        ? []
        : [
            b('React').createElement('div', {
              className: '_52ua',
              onMouseDown: this.$10.bind(this, p.NW),
              key: p.NW,
            }),
            b('React').createElement('div', {
              className: '_52uc',
              onMouseDown: this.$10.bind(this, p.NE),
              key: p.NE,
            }),
            b('React').createElement('div', {
              className: '_52ui',
              onMouseDown: this.$10.bind(this, p.SE),
              key: p.SE,
            }),
            b('React').createElement('div', {
              className: '_52uj',
              onMouseDown: this.$10.bind(this, p.SW),
              key: p.SW,
            }),
          ];
    };
    a.prototype.getWidth = function () {
      return this.state.width;
    };
    a.prototype.onLoadUpNext = function (a, b) {
      this.props.onLoadUpNext(a, b), this.setState({ hasDrawer: !0 });
    };
    a.prototype.canPlayAnotherVideo = function () {
      var a = this.state.channelVideoElements;
      return this.state.videoIndex < a.length - 1;
    };
    a.prototype.render = function () {
      __p && __p();
      var a = null;
      this.props.isDrawerEnabled ||
        (a = {
          height: Math.round(this.state.height) + 'px',
          left: this.state.left + 'px',
          top: this.state.top + 'px',
          width: Math.round(this.state.width) + 'px',
        });
      var c = this.state.channelVideoElements,
        d = c[this.state.videoIndex];
      d &&
        (b('CSS').addClass(d, '_1kfp'),
        b('CSS').conditionClass(d, '_1blk', this.state.width < m));
      this.state.endScreenShown &&
        b('React').createElement(b('VideoWatchAndScrollEndScreen.react'), {
          endScreenDuration: o / 1e3,
          fadeOut: this.state.endScreenFadeOut,
          makeProgress: this.canPlayAnotherVideo(),
          onReplay: this.props.onReplay,
          onClose: function () {
            b('clearTimeout')(this.$2), (this.$2 = null), this.props.onClose();
          }.bind(this),
          onCollapse: this.props.onCollapse,
        });
      d = null;
      this.state.fadeOutPlaceholder
        ? (d = b('React').createElement(
            b('DOMContainer.react'),
            null,
            this.state.fadeOutPlaceholder
          ))
        : (d = b('React').createElement(
            'ul',
            { className: '_2yq7' },
            c.map(
              function (a, c) {
                (c > this.state.videoIndex + 1 ||
                  c < this.state.videoIndex - 1) &&
                  b('CSS').removeClass(a, '_1kfp');
                return c <= this.state.videoIndex + 1
                  ? null
                  : b('React').createElement(
                      'li',
                      { key: a.id },
                      b('React').createElement(b('DOMContainer.react'), null, a)
                    );
              }.bind(this)
            )
          ));
      c = null;
      this.state.playbackFinished &&
        (c = b('React').createElement(
          'div',
          {
            role: 'presentation',
            onClick: this.$24.bind(this),
            className: '_1szy _ww8',
          },
          b('React').createElement(
            b('VideoChannelProgressCircle.react'),
            {
              makeProgress: !!this.state.timeUntilNext,
              timeoutSec: this.state.timeUntilNext,
              watchAndScroll: !0,
            },
            b('React').createElement(b('VideoChannelReplayImage.react'), {
              size: 'small',
            })
          )
        ));
      var e = null;
      this.props.isDrawerEnabled &&
        (e = b('React').createElement(b('VideoWatchAndScrollDrawer.react'), {
          videoID: this.props.videoID,
          viewedVideos: this.props.viewedVideos,
          onLoadUpNext: this.onLoadUpNext.bind(this),
        }));
      return b('React').createElement(
        b('ReactCSSTransitionGroup'),
        {
          transitionAppear: !0,
          transitionAppearTimeout: 500,
          transitionEnter: !1,
          transitionLeave: !1,
          transitionName: { appear: '_tie', appearActive: '_tik' },
        },
        b('React').createElement(
          'div',
          {
            className:
              '_360g' +
              (this.state.showDrawer ? ' _hzi' : '') +
              (this.state.fadeOut ? ' _473b' : '') +
              (this.state.hasDrawer ? ' _60a6' : '') +
              (this.props.isLiveVideo() ? ' _29mh' : ''),
            onMouseLeave: this.$23.bind(this),
            onMouseMove: this.$22.bind(this),
            style: a,
          },
          b('React').createElement(
            'div',
            {
              className: '_52u8',
              onClick: this.$14.bind(this),
              onMouseDown: this.$12.bind(this),
              role: 'presentation',
            },
            b('React').createElement(
              'div',
              { className: '_hzj' },
              this.$25(this.state.videoIndex - 1, 'left'),
              this.$25(this.state.videoIndex, 'center'),
              this.$25(this.state.videoIndex + 1, 'right'),
              c
            ),
            e
          ),
          this.$26(),
          d
        )
      );
    };
    a.propTypes = {
      initialPosition: c.object.isRequired,
      initialVideoElement: c.instanceOf(HTMLElement).isRequired,
      onChannelNavigation: c.func.isRequired,
      onClick: c.func.isRequired,
      onClose: c.func.isRequired,
      onDrop: c.func.isRequired,
      onGrab: c.func.isRequired,
      onInitialPositionUpdate: c.func.isRequired,
      onReplay: c.func.isRequired,
    };
    e.exports = a;
  },
  null
);
__d(
  'XVideoWNSSurveyController',
  ['XController'],
  function (a, b, c, d, e, f) {
    e.exports = b('XController').create('/video/wns_survey/', {
      __asyncDialog: { type: 'Int' },
    });
  },
  null
);
__d(
  'VideoWatchAndScrollController',
  [
    'csx',
    'cx',
    'invariant',
    'Arbiter',
    'AsyncRequest',
    'CSS',
    'DOM',
    'DOMDimensions',
    'Event',
    'EventListener',
    'Locale',
    'React',
    'ReactDOM',
    'SubscriptionsHandler',
    'Tahoe',
    'VideoAutoplayControllerX',
    'VideoChainingCaller',
    'VideoChannelStoryFetcher',
    'VideoFrameBuffer',
    'VideoPlayerExperiments',
    'VideoPlayerLoggerEvent',
    'VideoPlayerLoggerSource',
    'VideoPlayerReason',
    'VideoPlayerShakaGlobalConfig',
    'VideoPlayerStates',
    'VideoPlayerVolumeSettings',
    'VideoWatchAndScrollContainer.react',
    'VideoWatchAndScrollVariables',
    'ViewportBounds',
    'XVideoWNSSurveyController',
    'cancelAnimationFrame',
    'clearTimeout',
    'destroyOnUnload',
    'getViewportDimensions',
    'ifRequired',
    'setTimeoutAcrossTransitions',
    'shouldWNSRenderToRHC',
    'throttle',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    __p && __p();
    var j = 158,
      k = 280,
      l = 10,
      m = 42,
      n = m + l,
      o = 476,
      p = 230,
      q = [
        b('VideoPlayerReason').AUTOPLAY,
        b('VideoPlayerReason').PAGE_VISIBILITY,
      ],
      r = 750,
      s = 308,
      t = 3,
      u = null,
      v = b('VideoPlayerExperiments').persistentWNSEnabled;
    function w() {
      return Math.max(b('getViewportDimensions')().height, 400) - m - 80;
    }
    function x(a, c, d, e) {
      __p && __p();
      this.$31 = new (b('SubscriptionsHandler'))();
      this.$32 = new (b('SubscriptionsHandler'))();
      this.$1 = !1;
      this.$2 = null;
      this.$3 = null;
      this.$4 = !1;
      this.$35 = d;
      this.$38 = !1;
      this.$30 = !1;
      this.$48 = e;
      this.$49 = e;
      this.$34 = new (b('VideoChannelStoryFetcher'))(c, a, this.$35, null);
      this.$36 = [];
      this.$37 = 0;
      this.$39 = [];
      this.$40 = [];
      this.$5 = j;
      this.$6 = k;
      this.$10 = window.document.getElementById('leftCol');
      this.$11 = window.document.getElementById('rightCol');
      this.$12 = window.document.getElementById('pagelet_bluebar');
      this.$44 = {};
      this.$47 = null;
      this.$53();
      (d = this.$31).addSubscriptions.apply(d, this.$54());
      v ||
        b('destroyOnUnload')(
          function () {
            this.$55(),
              this.$4 && this.$56(),
              this.$31 && this.$31.release(),
              this === u && (u = null);
          }.bind(this)
        );
    }
    x.prototype.$54 = function () {
      __p && __p();
      var a = [];
      a.push(
        b('Arbiter').subscribe(
          'VideoChannelView/opened',
          function (a, b) {
            this.$4 &&
              (!b.controller || this.$16 !== b.controller) &&
              this.$56();
          }.bind(this)
        )
      );
      a.push(
        b('Arbiter').subscribe(
          'fbVideoWatchAndScroll/closeWNS',
          function () {
            if (!this.$4) return;
            var a = this.$16,
              c = a.getOption(
                'CommercialBreakVideoAdOverlay',
                'videoController'
              );
            c && (a = c);
            a.logEvent(b('VideoPlayerLoggerEvent').WATCH_AND_SCROLL_EXITED);
            this.$57();
            c = b('XVideoWNSSurveyController').getURIBuilder().getURI();
            a = new (b('AsyncRequest'))().setURI(c);
            a.send();
          }.bind(this)
        )
      );
      if (b('VideoPlayerExperiments').rhcWNSEnabled) {
        a.push(
          b('Arbiter').subscribe(
            'RHCVideoWNSController/collapseStart',
            function () {
              var a = this.$14;
              if (!a || !b('shouldWNSRenderToRHC')()) return;
              a.setState({ endScreenFadeOut: !0, endScreenShown: !1 });
            }.bind(this)
          ),
          b('Arbiter').subscribe(
            'RHCVideoWNSController/collapseEnd',
            function () {
              var a = this.$14;
              if (!a || !b('shouldWNSRenderToRHC')()) return;
              this.pauseActiveVideo(b('VideoPlayerReason').USER);
              a.setState({ endScreenFadeOut: !1 });
            }.bind(this)
          ),
          b('Arbiter').subscribe(
            'RHCVideoWNSController/expandStart',
            function () {
              var a = this.$14;
              if (
                !a ||
                !this.isActiveVideoDonePlaying() ||
                !b('shouldWNSRenderToRHC')()
              )
                return;
              a.setState({ endScreenShown: !0 });
            }.bind(this)
          )
        );
        if (v) {
          var c = function () {
            var a = this.$16.getVideoNode();
            a instanceof HTMLVideoElement || i(0, undefined);
            a.currentTime = a.currentTime;
          }.bind(this);
          a.push(
            b('Arbiter').subscribe(
              'RHCVideoWNSController/eject',
              function (a, d) {
                if (!b('shouldWNSRenderToRHC')()) return;
                this.$2 = d;
                b('DOM').appendContent(document.body, d);
                b('VideoPlayerShakaGlobalConfig').getBool(
                  'timeouts_persist_on_page_transition',
                  !0
                ) || c();
                this.$16.isState(b('VideoPlayerStates').PLAYING) &&
                  this.playActiveVideo(b('VideoPlayerReason').USER);
              }.bind(this)
            ),
            b('Arbiter').subscribe(
              'RHCVideoWNSController/dock',
              function () {
                if (!b('shouldWNSRenderToRHC')()) return;
                b('VideoPlayerShakaGlobalConfig').getBool(
                  'timeouts_persist_on_page_transition',
                  !0
                ) || c();
                this.$16.isState(b('VideoPlayerStates').PLAYING) &&
                  this.playActiveVideo(b('VideoPlayerReason').USER);
              }.bind(this)
            ),
            b('Event').listen(
              window,
              'resize',
              b('throttle')(
                function () {
                  if (!b('shouldWNSRenderToRHC')()) return;
                  this.$58();
                }.bind(this)
              )
            ),
            b('Arbiter').subscribe(
              'RHCVideoWNSController/mount',
              function () {
                this.$58();
              }.bind(this)
            )
          );
        }
      }
      return a;
    };
    x.prototype.$58 = function () {
      __p && __p();
      var a = this.$14;
      if (!a || this.$38) return;
      var c = this.$16.getVideoNode();
      c = this.$59(c);
      this.$16.removeOffsetStylings();
      this.$16.setDimensions(c.width, c.height);
      a.setState({ width: c.width, height: c.height });
      this.$47 = c;
      b('Arbiter').inform('VideoWatchAndScrollController/resize');
    };
    x.prototype.isActiveVideoDonePlaying = function () {
      var a = this.$16.getState();
      return a === b('VideoPlayerStates').FINISHED;
    };
    x.isActiveVideoDonePlaying = function () {
      return u ? u.isActiveVideoDonePlaying() : !1;
    };
    x.prototype.$60 = function (a, c, d) {
      __p && __p();
      a || i(0, undefined);
      c.length || i(0, undefined);
      this.$48 = !0;
      this.$38 = !1;
      this.$32 = new (b('SubscriptionsHandler'))();
      this.$37 = d;
      this.$34 = a;
      this.$39 = a.getPreloadedData().thumbnails || [];
      this.$40 = [];
      this.$36 = c.slice(0);
      this.$36.forEach(
        function (a) {
          this.$61(a),
            this.$62(a),
            a.updateSource(b('VideoPlayerLoggerSource').WATCH_SCROLL);
        }.bind(this)
      );
      d = this.$36.shift();
      this.$63(d, b('VideoPlayerReason').USER);
    };
    x.prototype.$64 = function (a, b, c, d, e) {
      (this.$9 = e),
        (this.$47 = this.$59(e.videoRootNode)),
        this.$60(a, b, c),
        this.$14 &&
          this.$14.setState(
            { channelVideoElements: d },
            function () {
              this.$65();
            }.bind(this)
          ),
        (this.$9 = null);
    };
    x.registerVideoController = function (a, c, d, e) {
      __p && __p();
      u == null && (u = new x(a.getVideoChannelID(), a.getVideoID(), c, e));
      u.$31.addSubscriptions(
        a.addListener('enterWatchAndScroll', function () {
          u && u.$66(a);
        }),
        a.addListener('crossfadeWatchAndScroll', function () {
          if (u) {
            u.$67();
            var c = a.getVideoNode();
            u.$47 = u.$59(c);
            u.$63(a, b('VideoPlayerReason').USER, !1, !0);
            a.unmute();
          }
        }),
        a.addListener('exitWatchAndScroll', function () {
          u && u.$4 && u.$56();
        }),
        a.addListener('VideoChannelController/enterChannel', function () {
          u && (u.$38 = !0);
        }),
        a.addListener('VideoChannelController/exitChannel', function () {
          u && (u.$38 = !1);
        })
      );
      c === b('VideoChainingCaller').WNS && u.$36.push(a);
      if (!d) return;
      e = [
        'beginPlayback',
        'changeVolume',
        'muteVideo',
        'toggleFullscreen',
        'unmuteVideo',
        'VideoChannelController/enterChannel',
      ];
      e.forEach(function (event) {
        u &&
          u.$31.addSubscriptions(
            a.addListener(event, function (b) {
              u && u.$68(a, event, b);
            })
          );
      });
    };
    x.isActive = function () {
      return !u ? !1 : u.$4 && !u.$38;
    };
    x.updateSlidingCalculations = function () {
      if (!u) return;
      u.$19 && u.$69(u.$19);
    };
    x.registerChannelVideoController = function (a) {
      if (!u) return;
      a.updateSource(b('VideoPlayerLoggerSource').WATCH_SCROLL);
      u.$61(a);
      u.$62(a);
      u.$36.push(a);
    };
    x.getStoryFetcherData = function () {
      return u && u.$70();
    };
    x.prototype.$70 = function () {
      return {
        storyFetcher: this.$34,
        videoPlayerControllers: this.$36,
        channelVideoIndex: this.$37,
        rootVideoPlayerController: this.$17,
        channelInteractionsToRegister: this.$40,
        isFromWNS: !0,
      };
    };
    x.getVideoPlaceholder = function () {
      return !u ? null : u.$18;
    };
    x.getReactContainer = function () {
      return !u ? null : u.$14;
    };
    x.registerChannelInteraction = function (a) {
      u && u.$40.push(a);
    };
    x.onEnterTahoe = function () {
      if (!u) return;
      u.$71();
    };
    x.prototype.$71 = function () {
      (this.$38 = !0), this.$34.abandonRequest();
    };
    x.onEnterChannel = function () {
      if (!u) return;
      u.$72();
    };
    x.prototype.$72 = function () {
      __p && __p();
      this.$38 = !0;
      this.$34.abandonRequest();
      var a = this.$14;
      if (!a) return;
      var c = ['._23if', '._23ig', '._452w', '._2i7a'];
      a.getChannelVideoElements().forEach(function (a) {
        c.forEach(function (c) {
          c = b('DOM').scry(a, c);
          c = c[0];
          c && b('CSS').show(c);
        });
        var d = b('DOM').scry(a, '._2337');
        d = d[0];
        d && (b('CSS').removeClass(d, '_2337'), b('CSS').addClass(d, '_3pay'));
      });
    };
    x.resetFromChannelView = function (a, b, c) {
      if (!u) return;
      u.$60(a, b, c);
    };
    x.startFromChannelView = function (a, b, c, d, e) {
      if (!u) return;
      u.$64(a, b, c, d, e);
    };
    x.prototype.$68 = function (a, event, c) {
      __p && __p();
      if (this.$4) {
        if (this.$16 === a) return;
        if (c && q.includes(c.reason)) return;
        if (!a.isIntentionallyViewing()) return;
        var d = this.$16.getOption('VideoWithLiveBroadcast', 'isLive');
        d ? this.$16.mute() : this.$16.pause(b('VideoPlayerReason').USER);
      }
      if (
        (event === 'toggleFullscreen' && a.isFullscreen()) ||
        event === 'VideoChannelController/enterChannel'
      )
        this.$19 && this.$55();
      else if (
        (event !== 'beginPlayback' ||
          (c && c.reason === b('VideoPlayerReason').USER) ||
          a.getSource() === b('VideoPlayerLoggerSource').PERMALINK) &&
        a.isIntentionallyViewing() &&
        !a.isFullscreen() &&
        !a.getIsInChannel()
      ) {
        d = this.$73(a.getVideoNode());
        d = d.top;
        (d > window.scrollY ||
          (event === 'beginPlayback' &&
            c &&
            c.reason === b('VideoPlayerReason').AUTOPLAY)) &&
          this.$69(a);
      }
    };
    x.prototype.$74 = function (a) {
      if (this.$38 || a !== this.$16) return;
      this.$14 &&
        this.$14.setState({
          endScreenShown: !0,
          playbackFinished: !0,
          timeUntilNext: this.$51 ? t : 0,
        });
    };
    x.prototype.$75 = function (a) {
      return a.addListener(
        'finishPlayback',
        function () {
          return this.$74(a);
        }.bind(this)
      );
    };
    x.prototype.$69 = function (a) {
      var c = a.getVideoNode();
      if (!c.offsetParent) return;
      this.$19 = a;
      this.$26 = b('throttle')(this.$76.bind(this), 100);
      window.addEventListener('resize', this.$26);
      this.$77(c);
      this.$78();
    };
    x.prototype.$76 = function () {
      this.$19 &&
        (this.$77(this.$18 || this.$19.getVideoNode()), this.$27 && this.$27());
    };
    x.prototype.$79 = function (a) {
      __p && __p();
      var b = this.$73(a),
        c = a.scrollWidth;
      a = a.scrollHeight;
      var d = p,
        e = o;
      c < a && ((d *= c / a), (e *= c / a));
      c = d;
      if (this.$10 && this.$10.children.length) {
        a = this.$73(this.$10);
        if (a.left <= b.left) c = Math.min(a.left - 2 * l, e);
        else if (this.$11 && this.$11.children.length) {
          b = this.$73(this.$11);
          c = Math.min(b.left - 2 * l, e);
        }
      } else {
        a = document.getElementById('timeline_tab_content');
        if (a) {
          b = this.$73(a).left;
          c = Math.min(b - 2 * l, e);
        }
      }
      return Math.max(c, d);
    };
    x.prototype.$73 = function (a) {
      var b = { left: 0, top: 0 };
      do (b.top += a.offsetTop), (b.left += a.offsetLeft);
      while ((a = a.offsetParent));
      return b;
    };
    x.prototype.$80 = function () {
      __p && __p();
      if (b('VideoPlayerExperiments').rhcWNSEnabled) return s;
      var a = 0;
      if (this.$10 && this.$10.children.length) {
        var c = this.$73(this.$10),
          d = window.getComputedStyle(this.$10);
        d = parseInt(d.width, 10);
        v && (d = d || k);
        a = d + c.left - l;
      } else {
        d = document.getElementById('timeline_tab_content');
        if (!d) {
          c = document.getElementById('pagelet_timeline_main_column');
          c ? (d = c.parentNode) : (d = document.getElementById('contentArea'));
        }
        if (d) {
          c = this.$73(d).left;
          a = c - 2 * l;
        }
      }
      return a;
    };
    x.prototype.$59 = function (a) {
      __p && __p();
      var c = !a && this.$9;
      ({ left: 0 });
      var d = 16,
        e = 9;
      if (!c) {
        this.$73(a);
        e = 1;
        d = parseFloat(a.getAttribute('data-original-aspect-ratio'));
        a = a.parentElement;
        (!d || e === 0) &&
          a &&
          (this.$73(a), (d = a.scrollWidth), (e = a.scrollHeight));
      }
      a = p;
      var f = o;
      d < e && ((a *= d / e), (f *= d / e));
      var g = this.$80(),
        h = l;
      this.$12 && (h += this.$12.scrollHeight);
      h = Math.max(h, n);
      var i = b('VideoPlayerExperiments').rhcWNSEnabled
          ? g
          : Math.max(Math.min(g, f), p),
        j;
      b('VideoPlayerExperiments').rhcWNSEnabled
        ? (j = b('Locale').isRTL()
            ? l + b('ViewportBounds').getRight()
            : b('getViewportDimensions')().width - i - l)
        : ((j = g > f ? g - f + l : l), (j = Math.max(j, l)));
      f = (i * e) / d;
      b('VideoPlayerExperiments').rhcWNSEnabled && (f = Math.min(f, w()));
      return {
        hasEnoughSpace: !!c || g >= a,
        height: f,
        left: j,
        top: h,
        width: i,
      };
    };
    x.hasEnoughSpaceToEnter = function (a) {
      __p && __p();
      if (!u || !a || !a.getVideoNode()) return !1;
      a = a.getVideoNode();
      var b = 1,
        c = parseFloat(a.getAttribute('data-original-aspect-ratio'));
      a = a.parentElement;
      (!c || b === 0) && a && ((c = a.scrollWidth), (b = a.scrollHeight));
      a = p;
      c < b && (a *= c / b);
      return u.$80() > a;
    };
    x.prototype.$77 = function (a) {
      __p && __p();
      this.$22 = this.$73(a);
      this.$28 = a.scrollWidth;
      this.$29 = a.scrollHeight;
      var b = Math.max(this.$28, this.$29);
      if (b < p) {
        b = p / b;
        this.$28 *= b;
        this.$29 *= b;
      }
      this.$21 = this.$22.top + this.$29 * 0.5 - m;
      this.$20 = this.$22.top + this.$29 * 0.5 - window.innerHeight;
      this.$47 = this.$59(a);
      this.$30 = !this.$47.hasEnoughSpace;
    };
    x.prototype.$78 = function () {
      this.$19.isIntentionallyViewing()
        ? (this.$81(this.$82.bind(this)), this.$82())
        : this.$55();
    };
    x.isVideoAlmostFinished = function (a) {
      var c = a.getPlaybackDuration();
      a = a.getCurrentTimePosition();
      var d = b('VideoWatchAndScrollVariables').noWNSRemainingTime;
      if (c * 0.2 < d) return a / c > 0.8;
      else return c - a < d;
    };
    x.isSlidingEnabled = function (a) {
      __p && __p();
      var c = u;
      if (c == null) return !1;
      var d = c.$19;
      if (d == null || d !== a) return !1;
      if (
        c.$30 ||
        !a.isIntentionallyViewing() ||
        !a.getVideoNode().offsetParent ||
        x.isVideoAlmostFinished(a) ||
        a.getSource() === b('VideoPlayerLoggerSource').TAHOE ||
        a.hasLooped()
      ) {
        c.$55();
        return !1;
      }
      return !0;
    };
    x.prototype.$82 = function () {
      var a = this.$19;
      if (a == null) return;
      if (!a.isIntentionallyViewing() || !a.getVideoNode().offsetParent) {
        this.$55();
        return;
      }
      (window.scrollY > this.$21 || window.scrollY < this.$20) &&
        x.isSlidingEnabled(a) &&
        a !== this.$16 &&
        !a.isFullscreen() &&
        !this.$38 &&
        (b('VideoPlayerExperiments').rhcWNS &&
        b('VideoPlayerExperiments').responsiveRHC &&
        window.innerWidth <
          Number(b('VideoPlayerExperiments').ResponsiveRHCMinWidth)
          ? a.pause(b('VideoPlayerReason').USER)
          : (this.$67(),
            b('VideoPlayerExperiments').fixFeedVideosPlayOffscreen &&
              a.emit('enterWatchAndScroll'),
            this.$63(a, b('VideoPlayerReason').AUTOPLAY, !1, !0)),
        this.$55());
    };
    x.prototype.$67 = function () {
      this.$48 = this.$49;
    };
    x.prototype.$81 = function (a) {
      window.removeEventListener('scroll', this.$27),
        (this.$27 = a || null),
        window.addEventListener('scroll', this.$27),
        b('cancelAnimationFrame')(this.$33),
        delete this.$33;
    };
    x.prototype.$55 = function () {
      window.removeEventListener('resize', this.$26),
        this.$81(),
        delete this.$19,
        (this.$30 = !1);
    };
    x.prototype.$66 = function (a) {
      this.$55(),
        this.$4 && this.$16 !== a
          ? this.$83(a)
          : ((this.$47 = this.$59(a.getVideoNode())),
            this.$67(),
            this.$63(a, b('VideoPlayerReason').USER));
    };
    x.prototype.$83 = function (a) {
      (this.$23 = a), this.$84();
    };
    x.prototype.$63 = function (a, c, d, e) {
      __p && __p();
      if (a.getSource() === b('VideoPlayerLoggerSource').TAHOE) {
        this.$38 = !1;
        var f = b('Tahoe').get();
        f && f.onExit('wns');
      }
      f = !!this.$46;
      this.$46 &&
        (b('clearTimeout')(this.$46),
        (this.$46 = null),
        b('ReactDOM').unmountComponentAtNode(this.$85()),
        this.$86());
      e = this.$1 && (d || e) && !!this.$17 && this.$17 !== a;
      e &&
        ((this.$37 = 0),
        (this.$36 = []),
        (this.$39 = []),
        (this.$42 = this.$17),
        (this.$44 = babelHelpers['extends']({}, this.$8)),
        (this.$45 = this.$18),
        (this.$41 = this.$14),
        (this.$43 = this.$2),
        (this.$2 = null),
        this.$13 && this.$13.remove(),
        this.$32.release(),
        (this.$32 = new (b('SubscriptionsHandler'))()));
      this.$17 = a;
      this.$87(this.$14 && this.$37 > 0 ? this.$88(this.$37) : a);
      this.$50
        ? this.$50.add(a.getVideoID())
        : (this.$50 = new Set([a.getVideoID()]));
      this.$14 &&
        this.$36.length > this.$37 &&
        this.$88(this.$37 + 1).preload();
      this.$15 = this.$16.getRootNode();
      var g = !this.$1 || !this.$16.isMuted(),
        h = !this.$1 || this.$16.isState('playing'),
        i = this.$1 && this.$16.isState('finished');
      if (!this.$1 || e) {
        (!d || f) && (f && (this.$47 = this.$59(this.$15)), this.$53(this.$15));
        if (this.$9) {
          this.$8 = this.$9;
          if (this.$8.videoRootNode) {
            this.$18 = this.$89(this.$8.dimensions, this.$17.getVideoNode());
            b('DOM').appendContent(this.$8.videoRootNode, this.$18);
            d = b('DOM').scry(this.$8.videoRootNode, '._344x');
            f = d[0];
            f && b('DOM').remove(f);
          }
        } else
          (this.$8 = {
            videoRootNode: this.$15.parentNode,
            dimensions: b('DOMDimensions').getElementDimensions(this.$15),
            source: this.$16.getSource(),
          }),
            (this.$18 = this.$89(this.$8.dimensions, this.$16.getVideoNode())),
            b('DOM').insertAfter(this.$15, this.$18);
        d = null;
        this.$9 && (d = this.$9.videoRootNode);
        !d && this.$15 && (d = this.$15.parentNode);
        d &&
          (this.$13 = b('EventListener').listen(
            d,
            'click',
            function () {
              this.$57(),
                a.play(b('VideoPlayerReason').USER),
                b('setTimeoutAcrossTransitions')(
                  function () {
                    this.$68(a, 'beginPlayback', {
                      reason: b('VideoPlayerReason').USER,
                    });
                  }.bind(this),
                  r
                );
            }.bind(this)
          ));
        this.$16.pause(b('VideoPlayerReason').USER);
        this.$16.isPlayerVersion('silvercity') && this.$16.detachRootNode();
        f = this.$7 ? this.$7.width : this.$6;
        d = this.$7 ? this.$7.height : this.$5;
        this.$16.removeOffsetStylings();
        this.$16.setDimensions(f, d);
        this.$4 = !0;
        e && this.$90();
        this.$14 = this.$91();
        !this.$1 &&
          b('shouldWNSRenderToRHC')() &&
          b('Arbiter').inform('VideoWatchAndScrollController/init');
        i && this.$74(this.$16);
      } else this.$16.pause(b('VideoPlayerReason').USER), this.$65();
      h && this.$16.play(c);
      if (g) {
        this.$16.unmute();
        if (this.$16.getVolume() === 0) {
          f = b('VideoPlayerVolumeSettings').getLastVolumeBeforeMute() || 1;
          this.$16.setVolume(f);
          this.$16.emit('unmuteVideo');
        }
      }
      this.$16.updateSource(b('VideoPlayerLoggerSource').WATCH_SCROLL);
      d = this.$34;
      (!this.$1 || e) &&
        d &&
        (d.abandonRequest(),
        this.$9 || d.reset(a.getVideoID(), a.getVideoChannelID()),
        this.$92(),
        this.$61(a),
        this.$62(a));
      this.$1 = !0;
      b('shouldWNSRenderToRHC')() &&
        b('Arbiter').inform('VideoWatchAndScrollController/start');
    };
    x.prototype.$61 = function (a) {
      a.hasOption('WatchAndScroll', 'isActive') ||
        a.registerOption('WatchAndScroll', 'isActive', x.isActive);
    };
    x.prototype.$62 = function (a) {
      this.$32.addSubscriptions(
        this.$75(a),
        a.addListener(
          'VideoChannelController/enterChannel',
          function () {
            this.$32.release();
          }.bind(this)
        ),
        a.addListener(
          'WatchAndScroll/close',
          function () {
            this.$57();
            var a = b('XVideoWNSSurveyController').getURIBuilder().getURI();
            a = new (b('AsyncRequest'))().setURI(a);
            a.send();
          }.bind(this)
        )
      );
    };
    x.prototype.$93 = function () {
      if (!this.$14) return;
      this.$14.setState({ endScreenShown: !1 });
      this.$16 && this.$16.play(b('VideoPlayerReason').USER);
    };
    x.prototype.$92 = function () {
      __p && __p();
      if (!this.$48) return;
      this.$34.fetchStories(
        !0,
        function (a, c) {
          var d = this.$14;
          if (!a || !a.length || !d) return;
          a = d.getChannelVideoElements().concat(a);
          d.setState(
            { channelVideoElements: a },
            function () {
              b('setTimeoutAcrossTransitions')(
                function () {
                  this.$88(this.$37 + 1).preload();
                }.bind(this)
              );
            }.bind(this)
          );
          this.$39 = this.$39.concat(c);
        }.bind(this)
      );
    };
    x.prototype.$88 = function (a) {
      var b = this.$14 ? this.$14.getChannelVideoElements() : [],
        c = [this.$17].concat(this.$36),
        d = null;
      c.forEach(function (c) {
        b[a].contains(c.getRootNode()) && (d = c);
      });
      d || i(0, undefined);
      return d;
    };
    x.prototype.$94 = function () {
      if (u && u.$51)
        for (var a = 0; a < u.$36.length; a++) {
          var b = u.$36[a];
          if (u.$51.contains(b.getRootNode())) return b;
        }
      return null;
    };
    x.prototype.$65 = function () {
      __p && __p();
      var a = this.$16.isMuted();
      this.$16.pause(b('VideoPlayerReason').USER);
      this.$16 !== this.$17 && this.$16.abortLoading();
      this.$87(this.$88(this.$37));
      this.$15 = this.$16.getRootNode();
      var c = this.$16.getVideoNode(),
        d = parseFloat(c.getAttribute('data-original-aspect-ratio'));
      d || (d = 16 / 9);
      var e = this.$47;
      e || (e = this.$59(c));
      this.$14 && (e.width = this.$14.getWidth());
      e.height = e.width / d;
      b('VideoPlayerExperiments').rhcWNSEnabled
        ? (e.height = Math.min(e.height, w()))
        : e.height > o && ((e.height = o), (e.width = e.height * d));
      this.$16.removeOffsetStylings();
      this.$16.setDimensions(e.width, e.height);
      this.$53(c);
      this.$14 &&
        this.$14.setState(
          {
            playbackFinished: !1,
            videoIndex: this.$37,
            width: e.width,
            height: e.height,
          },
          function () {
            b('shouldWNSRenderToRHC')() &&
              b('Arbiter').inform('VideoWatchAndScrollController/resize');
          }
        );
      this.$47 = e;
      this.$16.play(b('VideoPlayerReason').AUTOPLAY);
      a && this.$16.mute();
      this.$36.length <= this.$37
        ? this.$92()
        : this.$88(this.$37 + 1).preload();
    };
    x.prototype.$95 = function () {
      var a = l;
      this.$12 && (a += this.$12.scrollHeight);
      return Math.max(a, n);
    };
    x.prototype.$53 = function (a) {
      __p && __p();
      if (this.$47) {
        this.$7 = {
          height: this.$47.height,
          left: this.$47.left,
          top: this.$47.top,
          width: this.$47.width,
        };
        return;
      }
      if (a) {
        var b = a.scrollWidth,
          c = a.scrollHeight;
        a = this.$79(a);
        c = (a * c) / b;
        this.$7.height = c;
        this.$7.width = a;
      } else
        this.$7 = { height: this.$5, left: l, top: this.$95(), width: this.$6 };
    };
    x.prototype.$89 = function (a, c) {
      __p && __p();
      var d = b('DOM').create('canvas', { className: '_57n6' });
      d.height = a.height;
      d.width = a.width;
      if (d.getContext && d.getContext('2d'))
        if (c.scrollHeight === 0) {
          a = b('DOM').scry(c.parentNode, '._3t5i');
          a = a[0];
          if (a) {
            var e = d.getContext('2d');
            e.drawImage(a, 0, 0);
          }
        } else if (c instanceof window.HTMLVideoElement) {
          e = new (b('VideoFrameBuffer'))(d, c);
          e.updateFrameBuffer();
        }
      a = b('DOM').create('div');
      a.appendChild(d);
      c = b('DOM').create('i', { className: '_1jto _bsl _3htz' });
      a.appendChild(c);
      return a;
    };
    x.prototype.$57 = function () {
      this.$19 && this.$55();
      this.$16.pause(b('VideoPlayerReason').USER);
      if (b('VideoPlayerExperiments').pauseUpNextControllerWNS) {
        var a = this.$94();
        a && a.pause(b('VideoPlayerReason').USER);
        u && (u.$51 = null);
      }
      this.$84();
    };
    x.prototype.$96 = function () {
      this.$16.emit('WatchAndScroll/collapse');
    };
    x.prototype.$97 = function () {
      var a = this.$89(this.$7, this.$16.getVideoNode(), !0);
      this.$14 && this.$14.setState({ fadeOut: !0, fadeOutPlaceholder: a });
      this.$98(this.$17, this.$8);
      this.$18 && (b('DOM').remove(this.$18), (this.$18 = null));
      this.$13 && (this.$13.remove(), (this.$13 = null));
    };
    x.prototype.$98 = function (a, c, d) {
      __p && __p();
      a.getOption('VideoWithLiveBroadcast', 'isLive');
      a.pause(b('VideoPlayerReason').USER);
      a.isPlayerVersion('silvercity') && a.detachRootNode();
      d && b('ReactDOM').unmountComponentAtNode(d);
      c.dimensions &&
        c.dimensions.width &&
        c.dimensions.height &&
        (a.addOffsetStylings(),
        a.setDimensions(c.dimensions.width, c.dimensions.height));
      c.videoRootNode &&
        b('DOM').prependContent(c.videoRootNode, a.getRootNode());
      a.emit('WatchAndScroll/positionUpdated');
      a.updateSource(c.source || b('VideoPlayerLoggerSource').INLINE);
      d = this.$73(a.getVideoNode());
      c = d.top;
      d = b('getViewportDimensions')().height;
      a.getSource() !== b('VideoPlayerLoggerSource').PERMALINK && a.mute();
      c < window.scrollY || c > window.scrollY + d || this.$52 === !1
        ? (a.pause(b('VideoPlayerReason').AUTOPLAY), a.emit('resumeAutoplay'))
        : a.play(b('VideoPlayerReason').USER);
    };
    x.prototype.$90 = function () {
      this.$4 || i(0, undefined),
        this.$41 || i(0, undefined),
        this.$41.setState({ fadeOut: !0 }),
        (this.$46 = b('setTimeoutAcrossTransitions')(
          function () {
            this.$42 || i(0, undefined),
              this.$43 || i(0, undefined),
              this.$98(this.$42, this.$44, this.$43),
              this.$45 && (b('DOM').remove(this.$45), (this.$45 = null)),
              (this.$46 = null);
          }.bind(this),
          r
        ));
    };
    x.prototype.$56 = function () {
      this.$4 || i(0, undefined),
        this.$14 || i(0, undefined),
        !this.$23 &&
          b('shouldWNSRenderToRHC')() &&
          b('Arbiter').inform('VideoWatchAndScrollController/exit'),
        this.$36.forEach(function (a) {
          return a.abortLoading();
        }),
        this.$97(),
        (this.$46 = b('setTimeoutAcrossTransitions')(
          function () {
            b('ReactDOM').unmountComponentAtNode(this.$85()), this.$86();
          }.bind(this),
          r
        ));
    };
    x.prototype.$86 = function () {
      this.$4 || i(0, undefined),
        this.$34 && this.$34.abandonRequest(),
        (this.$37 = 0),
        (this.$1 = !1),
        this.$32.release(),
        (this.$32 = new (b('SubscriptionsHandler'))()),
        (this.$8 = {}),
        (this.$16 = null),
        (this.$17 = null),
        (this.$4 = !1),
        (this.$36 = []),
        (this.$39 = []),
        (this.$14 = null),
        b('clearTimeout')(this.$46),
        (this.$46 = null),
        this.$42 &&
          this.$43 &&
          this.$44 &&
          this.$98(this.$42, this.$44, this.$43),
        (this.$42 = null),
        (this.$44 = {}),
        this.$45 && (b('DOM').remove(this.$45), (this.$45 = null)),
        b('VideoAutoplayControllerX').setShouldAutoplay(!0),
        (this.$2 = null),
        this.$23 &&
          ((this.$47 = this.$59(this.$23.getVideoNode())),
          this.$67(),
          this.$63(this.$23, b('VideoPlayerReason').USER),
          (this.$23 = null)),
        (this.$30 = !1),
        (this.$47 = null);
    };
    x.prototype.$91 = function () {
      return b('ReactDOM').render(
        b('React').createElement(b('VideoWatchAndScrollContainer.react'), {
          isDrawerEnabled:
            b('VideoPlayerExperiments').rhcWNSDrawerEnabled &&
            b('shouldWNSRenderToRHC')() &&
            b('VideoPlayerExperiments').rhcWNSExpandToTahoe,
          isLiveVideo: function () {
            return this.$16.isLiveVideo();
          }.bind(this),
          initialPosition: this.$7,
          initialVideoElement: this.$15,
          onChannelNavigation: this.$99.bind(this),
          onClick: this.$100.bind(this),
          onClose: this.$57.bind(this),
          onCollapse: this.$96.bind(this),
          onDrop: this.$101.bind(this),
          onGrab: this.$102.bind(this),
          onInitialPositionUpdate: this.$103.bind(this),
          onLoadUpNext: this.registerUpNextUnit.bind(this),
          onPlayNext: this.$104.bind(this),
          onReplay: this.$93.bind(this),
          viewedVideos: Array.from(this.$50),
          videoID: this.$16.getVideoID(),
        }),
        this.$85()
      );
    };
    x.prototype.$84 = function () {
      this.$17 && this.$17.emit('exitWatchAndScroll');
      if (b('VideoPlayerExperiments').pauseUpNextControllerWNS) {
        var a = this.$94();
        a && a.emit('exitWatchAndScroll');
      }
    };
    x.prototype.$99 = function (a) {
      if (a > 0 && this.$36.length <= this.$37) {
        b('shouldWNSRenderToRHC')() || this.$57();
        return;
      }
      this.$37 += a;
      this.$65();
    };
    x.prototype.$104 = function () {
      var a = this.$94();
      a &&
        ((this.$51 = null),
        a.emit('crossfadeWatchAndScroll'),
        this.$52
          ? a.play(b('VideoPlayerReason').AUTOPLAY)
          : (a.preload(), a.emit('showOverlay')));
    };
    x.prototype.$102 = function () {
      this.$19 && this.$55();
      var a = this.$16.getOption('VideoWithLiveBroadcast', 'isLive');
      if (a) return;
      this.$24 = this.$16.isState('playing');
      this.$16.pause(b('VideoPlayerReason').USER);
    };
    x.prototype.$101 = function () {
      var a = this.$16.getOption('VideoWithLiveBroadcast', 'isLive');
      if (a) return;
      this.$24 && this.$16.play(b('VideoPlayerReason').USER);
      this.$24 = null;
    };
    x.prototype.$100 = function () {
      var a = this.$16.getOption('VideoWithLiveBroadcast', 'isLive');
      if (this.$19 || a) return;
      this.$16.isState('playing')
        ? this.$16.pause(b('VideoPlayerReason').USER)
        : (this.$16.isState('paused') ||
            this.$16.isState('finished') ||
            this.$16.isState('ready')) &&
          this.$16.play(b('VideoPlayerReason').USER);
    };
    x.prototype.$87 = function (a) {
      __p && __p();
      if (this.$16 === a) return;
      b('VideoPlayerExperiments').rhcWNSEnabled &&
        a.addListener(
          'WatchAndScroll/collapse',
          function () {
            if (a != this.$16) {
              a.removeCurrentListener();
              return;
            }
            if (!b('shouldWNSRenderToRHC')()) return;
            b('Arbiter').inform('VideoWatchAndScrollController/collapse');
          }.bind(this)
        );
      this.$16 = a;
    };
    x.prototype.pauseActiveVideo = function (a) {
      if (!this.$16) return;
      this.$16.pause(a);
    };
    x.pauseActiveVideo = function (a) {
      a === void 0 && (a = b('VideoPlayerReason').USER);
      if (!u) return;
      u.pauseActiveVideo(a);
    };
    x.prototype.playActiveVideo = function (a) {
      if (!this.$16) return;
      this.$16.play(a);
    };
    x.prototype.registerUpNextUnit = function (a, c) {
      __p && __p();
      var d = b('DOM').find(a, '._3iqr');
      if (!u || !d) return;
      u.$51 = a;
      u.$52 = c;
      b('EventListener').listen(d, 'click', function (event) {
        if (!u) return;
        var a = u.$94();
        a &&
          (event.preventDefault(),
          event.stopPropagation(),
          (u.$51 = null),
          a.emit('crossfadeWatchAndScroll'),
          a.play(b('VideoPlayerReason').USER));
      });
    };
    x.playActiveVideo = function (a) {
      a === void 0 && (a = b('VideoPlayerReason').USER);
      if (!u) return;
      u.playActiveVideo(a);
    };
    x.prototype.$103 = function (a) {
      (this.$7 = a),
        this.$14 &&
          !this.$14.getFadeOutStatus() &&
          (this.$16.removeOffsetStylings(),
          this.$16.setDimensions(a.width, a.height),
          this.$16.emit('WatchAndScroll/positionUpdated'));
    };
    x.prototype.$105 = function () {
      var a = b('DOM').create('div');
      b('shouldWNSRenderToRHC')()
        ? b('ifRequired')('RHCVideoWNSController', function (b) {
            return b.mount(a);
          })
        : b('DOM').appendContent(document.body, a);
      return a;
    };
    x.prototype.$85 = function () {
      this.$2 || (this.$2 = this.$105());
      return this.$2;
    };
    e.exports = x;
  },
  null
);
__d(
  'XBasicFBNuxGenShouldShowController',
  ['XController'],
  function (a, b, c, d, e, f) {
    e.exports = b('XController').create('/ajax/megaphone/should_show_fbnux/', {
      nux_id: { type: 'Int', required: !0 },
    });
  },
  null
);
__d(
  'VideoControls',
  [
    'csx',
    'cx',
    'Arbiter',
    'AsyncRequest',
    'Bootloader',
    'ClippingApi',
    'CSS',
    'DeferredComponent.react',
    'EventListener',
    'FullScreen',
    'LiveRewindUtils',
    'LiveVideoPlayerActions',
    'LiveVideoRewindLoggerEvent',
    'Parent',
    'React',
    'ReactDOM',
    'SubscriptionsHandler',
    'VideoChainingCaller',
    'VideoChannelViewVariables',
    'VideoPlayerExperiments',
    'VideoPlayerLoggerEvent',
    'VideoPlayerLoggerSource',
    'VideoPlayerReason',
    'VideoPlayerUIComponentDrawer',
    'VideoPlayerVersions',
    'VideoWatchAndScrollController',
    'XBasicFBNuxGenShouldShowController',
    'cancelAnimationFrame',
    'containsNode',
    'destroyOnUnload',
    'getActiveElement',
    'logVideosClickTracking',
    'promiseDone',
    'requestAnimationFrame',
    'shouldWNSRenderToRHC',
    'throttle',
  ],
  function (a, b, c, d, e, f, g, h) {
    __p && __p();
    var i = b('VideoChannelViewVariables').channelRedesign,
      j = new Set([
        b('VideoPlayerLoggerSource').EMBEDDED,
        b('VideoPlayerLoggerSource').EMBEDDED_VIDEO,
        b('VideoPlayerLoggerSource').EMBEDDED_VIDEO_PREVIEW,
        b('VideoPlayerLoggerSource').EMBEDDED_PAGE_PLUGIN,
        b('VideoPlayerLoggerSource').EMBEDDED_VIDEO_FROM_UFI,
      ]),
      k = 200,
      l = 4936,
      m = b('VideoPlayerExperiments').persistentWNSEnabled;
    function a(a, c, d) {
      __p && __p();
      this.$14 = function () {
        (this.$10 = !1), this.scheduleRenderReactComponent();
      }.bind(this);
      this.$15 = a;
      this.$80 = c;
      this.$9 = 0;
      this.$74 = 0;
      this.$73 = 0;
      this.$27 = 0;
      this.$106 = !1;
      this.$81 = !1;
      this.$43 = d.hideOnEvents.autoplay;
      this.$44 = d.hideOnEvents.finish;
      this.$38 = d.hideOnEvents.pause;
      this.$89 = d.unhideOnHover;
      this.$39 = d.hidePlaybackControl;
      this.$40 = d.hidePlaybackScrubber;
      this.$90 = d.showPlaybackRateControl;
      this.$41 = d.hideRemainingTime;
      this.$42 = d.hideSettings;
      this.$103 = d.useTwoRows;
      this.$50 = d.isCommentAttachment;
      this.$75 = d.pointsOfInterestConfig || {};
      this.$17 = d.displayElapsedTime || !1;
      this.$18 = d.displayMilliseconds || !1;
      this.$19 = d.displayDurationLimit;
      this.$20 = d.displayTimeOffset;
      this.$1 = d.adBreaks;
      this.$2 = d.adBreaksDisableReasons;
      this.$93 = d.showSpatialAudioNUX;
      this.$60 = !1;
      this.$88 = d.shouldShowWNSNUX;
      this.$10 = !1;
      this.$33 = !1;
      this.$45 = d.insertedAdBreaks;
      this.$46 = d.isAdBreakDisabled;
      this.$47 = d.isAdBreakInsertionWithoutGapRule;
      this.$55 = d.isLiveRewindEnabled;
      this.$56 = !1;
      this.$67 = null;
      this.$91 = d.showPlayButtonForLive;
      this.$104 = d.videoClipInfo;
      this.$87 = !!d.videoClipInfo;
      this.$12 = null;
      a = a.isHtml5Player();
      this.$35 = d.showButtons.watchandscroll && a;
      this.$3 = d.showButtons.casting;
      this.$4 = d.showButtons.fullscreen && !!b('FullScreen').isSupported();
      this.$71 = d.permalinkURL;
      this.$54 = d.isLive;
      this.$61 = d.isSphericalVideo;
      this.$28 = d.forceVisible || !1;
      this.$37 = d.hideGradient || !1;
      this.$102 = d.useDarkTheme || !1;
      this.$48 = !1;
      this.$36 = !1;
      this.$59 = !1;
      this.$92 = d.showQualitySelector;
      this.$77 = d.qualitySelectorMinStreams;
      this.$65 = this.liveRewindToBeginning.bind(this);
      this.$63 = this.liveRewindSeekBack.bind(this);
      this.$64 = this.liveRewindSeekForward.bind(this);
      this.$66 = this.liveRewindToLive.bind(this);
      this.$13 = this.clipVideo.bind(this);
      this.$24 = this.enterWatchAndScroll.bind(this);
      this.$23 = this.enterTahoe.bind(this);
      this.$72 = this.play.bind(this);
      this.$70 = this.pause.bind(this);
      this.$82 = this.scrubBegin.bind(this);
      this.$83 = this.scrubEnd.bind(this);
      this.$94 = this.startCasting.bind(this);
      this.$95 = this.stopCasting.bind(this);
      this.$97 = this.toggleFullscreen.bind(this);
      this.$98 = this.toggleHD.bind(this);
      this.$99 = this.toggleHLS.bind(this);
      this.$100 = this.toggleMuted.bind(this);
      this.$101 = this.toggleSubtitles.bind(this);
      this.$11 = this.changeVolume.bind(this);
      this.$86 = this.setVideoPlaybackRate.bind(this);
      this.$85 = this.setPreferredVideoQuality.bind(this);
      this.$22 = this.$15.registerDrawer(
        b('VideoPlayerUIComponentDrawer').priorities.EmbeddedControls,
        36
      );
      this.$69 = d.needsInitialVideoInfoUpdate;
      this.$16 = this.$15.getSource();
      this.$29 = !!d.gamesVideoQuietModeGK;
      this.$30 = !!d.gamesVideoCreatorClippingGK && !j.has(this.$16);
      this.$6 = d.annotatedMomentsOfInterest || {};
      m ||
        b('destroyOnUnload')(function () {
          return b('ReactDOM').unmountComponentAtNode(c);
        });
      a = this.$15.getRootNode();
      b('EventListener').listen(
        this.$80,
        'focusin',
        function () {
          (this.$26 = !0), this.scheduleRenderReactComponent();
        }.bind(this)
      );
      b('EventListener').listen(
        this.$80,
        'focusout',
        function () {
          b('containsNode')(this.$80, b('getActiveElement')()) ||
            ((this.$26 = !1), this.scheduleRenderReactComponent());
        }.bind(this)
      );
      b('EventListener').listen(
        a,
        'click',
        function (a) {
          if (this.$26 && a.detail) {
            a = b('getActiveElement')();
            a && a.blur();
          }
        }.bind(this)
      );
      b('EventListener').listen(
        a,
        'mouseleave',
        function () {
          (this.$68 = !1), this.scheduleRenderReactComponent();
        }.bind(this)
      );
      b('EventListener').listen(
        a,
        'mouseenter',
        function () {
          (this.$68 = !0), this.scheduleRenderReactComponent();
        }.bind(this)
      );
      this.$15.registerOption(
        'VideoControls',
        'acquireForceHideLock',
        function () {
          this.$27++;
          return {
            release: function () {
              this.$27--, this.scheduleRenderReactComponent();
            }.bind(this),
          };
        }.bind(this)
      );
      this.$15.registerOption(
        'VideoControls',
        'hideOnFinish',
        function () {
          return this.$44;
        }.bind(this),
        function (a) {
          this.$44 = a;
        }.bind(this)
      );
      this.$15.registerOption(
        'VideoControls',
        'hideOnPause',
        function () {
          return this.$38;
        }.bind(this),
        function (a) {
          this.$38 = a;
        }.bind(this)
      );
      this.$15.registerOption(
        'VideoControls',
        'unhideOnHover',
        function () {
          return this.$89;
        }.bind(this),
        function (a) {
          this.$89 = a;
        }.bind(this)
      );
      this.$15.registerOption('VideoControls', 'available', function () {
        return !0;
      });
      this.$15.registerOption(
        'VideoControls',
        'areControlsVisible',
        this.areControlsVisible.bind(this)
      );
      ['mousemove', 'mousedown', 'keydown'].forEach(
        function (a) {
          b('EventListener').listen(
            this.$15.getRootNode(),
            a,
            b('throttle')(this.flashControls.bind(this), 200)
          );
        }.bind(this)
      );
      this.$96 = new (b('SubscriptionsHandler'))();
      this.scheduleRenderReactComponent();
      d = [
        'changeVolume',
        'loadedSubtitles',
        'muteVideo',
        'pausePlayback',
        'stateChange',
        'toggleFullscreen',
        'toggleSubtitles',
        'updateMetadata',
        'unmuteVideo',
        'qualityChange',
        'casting/receiverStateChange',
        'casting/supportStateChange',
        'casting/castingStateChange',
        'casting/playStateChange',
      ];
      d.forEach(
        function (event) {
          return this.$96.addSubscriptions(
            this.$15.addListener(
              event,
              function () {
                return this.scheduleRenderReactComponentWithVideoInfoUpdate();
              }.bind(this)
            )
          );
        }.bind(this)
      );
      this.$96.addSubscriptions(
        this.$15.addListener(
          'pauseRequested',
          function (a) {
            this.$107(a);
          }.bind(this)
        ),
        this.$15.addListener(
          'playRequested',
          function (a) {
            this.$108(a);
          }.bind(this)
        ),
        this.$15.addListener(
          'beginPlayback',
          function () {
            return this.$109();
          }.bind(this)
        ),
        this.$15.addListener(
          'updateStatus',
          function (a) {
            if (this.$55) {
              var c = this.$15.getSeekableRanges();
              c &&
                (this.$62 = b('LiveRewindUtils').getRelativePosition(
                  a.position,
                  c
                ));
            }
            this.$74 = a.position;
            this.$20 && (this.$74 -= this.$20);
            this.scheduleRenderReactComponent();
          }.bind(this)
        ),
        this.$15.addListener(
          'casting/updateStatus',
          function (a) {
            if (this.$55) {
              var c = this.$15.getSeekableRanges();
              c &&
                (this.$62 = b('LiveRewindUtils').getRelativePosition(
                  a.position,
                  c
                ));
            }
            this.$74 = a.position;
            this.scheduleRenderReactComponent();
          }.bind(this)
        ),
        this.$15.addListener(
          'seekRangeChanged',
          function (a) {
            if (this.$55) {
              a = this.$15.getSeekableRanges();
              a && (this.$73 = b('LiveRewindUtils').getTotalDuration(a));
            }
          }.bind(this)
        ),
        this.$15.addListener(
          'updateBuffer',
          function (a) {
            (this.$9 = a.duration + a.offset),
              this.scheduleRenderReactComponent();
          }.bind(this)
        ),
        this.$15.addListener(
          'optionsChange',
          function (a) {
            this.$110();
          }.bind(this)
        ),
        this.$15.addListener(
          'resumeAutoplay',
          function (a) {
            this.$111(), this.scheduleRenderReactComponentWithVideoInfoUpdate();
          }.bind(this)
        ),
        this.$15.addListener(
          'turnOffAutoplay',
          function (a) {
            this.$49 = !1;
          }.bind(this)
        ),
        this.$15.addListener(
          'LivePlayer/isRewoundChanged',
          function (a) {
            a = this.$15.getOption('LivePlayer', 'isRewound');
            this.$56 !== a &&
              ((this.$56 = a), this.scheduleRenderReactComponent());
          }.bind(this)
        ),
        this.$15.addListener(
          'blockAudio',
          function (a) {
            this.$48 = !0;
          }.bind(this)
        ),
        this.$15.addListener(
          'unblockAudio',
          function (a) {
            this.$48 = !1;
          }.bind(this)
        )
      );
      this.$88 &&
        this.$96.addSubscriptions(
          this.$15.addListener(
            'VideoWithStallRecovery/bufferingStateOn',
            function () {
              this.$33 || this.$112(l);
            }.bind(this)
          ),
          this.$15.addListener(
            'VideoWithStallRecovery/bufferingStateOff',
            function () {
              this.$10 = !1;
            }.bind(this)
          )
        );
      this.$96.addSubscriptions(
        this.$15.addListener(
          'finishPlayback',
          function () {
            this.scheduleRenderReactComponent(!0);
          }.bind(this)
        )
      );
      this.$111();
      this.$113();
    }
    a.prototype.$114 = function () {
      return (
        this.$15.isState('playing') &&
        this.$15.getOption('FeedAutoplay', 'isAutoplaying')
      );
    };
    a.prototype.$113 = function () {
      (this.$84 = this.$15.getOption(
        'VideoScrubberPreviewComponent',
        'scrubberPreviewSprites'
      )),
        (this.$32 = this.$15.getOption(
          'VideoScrubberPreviewComponent',
          'hasPreviewThumbnails'
        )),
        (this.$76 = this.$15.getOption(
          'VideoScrubberPreviewComponent',
          'previewThumbnailInformation'
        ));
    };
    a.prototype.$111 = function () {
      this.$49 = this.$15.getOption('FeedAutoplay', 'isAutoplaying');
    };
    a.prototype.$110 = function () {
      this.$111(), this.$113();
    };
    a.prototype.$107 = function (a) {
      this.scheduleRenderReactComponentWithVideoInfoUpdate(),
        this.$55 &&
          a === b('VideoPlayerReason').USER &&
          !this.$56 &&
          this.$67 === null &&
          (this.$67 = setTimeout(
            function () {
              (this.$67 = null),
                b('LiveVideoPlayerActions').setIsRewound(this.$15, !0);
            }.bind(this),
            k
          ));
    };
    a.prototype.$108 = function (a) {
      this.$55 &&
        a === b('VideoPlayerReason').USER &&
        this.$67 !== null &&
        (clearTimeout(this.$67), (this.$67 = null));
    };
    a.prototype.$109 = function () {
      this.flashControls(),
        (this.$58 = !0),
        this.scheduleRenderReactComponentWithVideoInfoUpdate();
    };
    a.prototype.$112 = function (a) {
      a = b('XBasicFBNuxGenShouldShowController')
        .getURIBuilder()
        .setInt('nux_id', a)
        .getURI();
      new (b('AsyncRequest'))()
        .setURI(a)
        .setMethod('GET')
        .setReadOnly(!0)
        .setHandler(
          function (a) {
            a = a.getPayload();
            this.$10 = a.should_show_nux;
          }.bind(this)
        )
        .send();
    };
    a.prototype.updateConfig_DEPRECATED = function (a, b) {
      (this.$71 = a.permalinkURL || null),
        (this.$3 = a.showButtons ? a.showButtons.casting : !1),
        (this.$54 = !!a.isLive),
        this.scheduleRenderReactComponent();
    };
    a.prototype.updateAdBreaksConfig = function (a) {
      (this.$45 = a.insertedAdBreaks),
        (this.$46 = a.isAdBreakDisabled),
        (this.$47 = a.isAdBreakInsertionWithoutGapRule),
        (this.$28 = !a.isPreviewingAdBreak),
        this.scheduleRenderReactComponent();
    };
    a.prototype.flashControls = function () {
      this.$78 || ((this.$78 = !0), this.scheduleRenderReactComponent()),
        clearTimeout(this.$25),
        (this.$25 = setTimeout(
          function () {
            (this.$78 = !1), this.scheduleRenderReactComponent();
          }.bind(this),
          3e3
        ));
    };
    a.prototype.areControlsVisible = function () {
      __p && __p();
      if (!this.areControlsEnabled()) return !1;
      if (this.$28 || this.$10 || this.$59) return !0;
      if (this.$15.isState('playing')) {
        if (this.$87) {
          this.$12 ||
            (this.$12 = setTimeout(
              function () {
                this.$87 = !1;
              }.bind(this),
              5e3
            ));
          return !0;
        } else if (this.$43 && this.$49) return !1;
        return this.$26 || (this.$68 && this.$78);
      } else if (this.$15.isState('finished')) {
        var a = this.$15.getSource() === b('VideoPlayerLoggerSource').TAHOE;
        return this.$15.isFullscreen() || a || !this.$44;
      } else if (this.$15.isState('paused'))
        return (
          this.$15.isFullscreen() ||
          !this.$38 ||
          (this.$89 && (this.$26 || (this.$68 && this.$78)))
        );
      return !1;
    };
    a.prototype.areControlsEnabled = function () {
      var a = this.$15.getSource() === b('VideoPlayerLoggerSource').TAHOE;
      return this.$27 > 0 ||
        this.$15.isState('loading') ||
        this.$15.isState('fallback') ||
        (this.$15.isState('finished') &&
          this.$44 &&
          !this.$15.isFullscreen() &&
          !a)
        ? !1
        : !0;
    };
    a.prototype.scheduleRenderReactComponentWithVideoInfoUpdate = function () {
      (this.$69 = !0), this.scheduleRenderReactComponent(!0);
    };
    a.prototype.shouldRenderComponent = function () {
      __p && __p();
      if (this.$15.isState('loading') || this.$15.isState('fallback'))
        return !1;
      if (this.areControlsVisible()) {
        this.$36 = !1;
        return !0;
      }
      if (!this.$36) {
        this.$36 = !0;
        return !0;
      }
      return !1;
    };
    a.prototype.scheduleRenderReactComponent = function (a) {
      a === void 0 && (a = !1);
      if (!a && !this.shouldRenderComponent()) return;
      b('cancelAnimationFrame')(this.$79);
      this.$79 = b('requestAnimationFrame')(
        this.renderReactComponent.bind(this)
      );
    };
    a.prototype.renderReactComponent = function () {
      __p && __p();
      if (
        b('VideoPlayerExperiments').delayVideoControlRenderForApiReady &&
        this.$15.getState() === 'loading' &&
        !this.$81
      ) {
        this.$81 = !0;
        this.$15.runOnApiReady(
          function () {
            this.scheduleRenderReactComponent();
          }.bind(this)
        );
        return;
      }
      this.$69 && this.$115();
      var a = this.areControlsVisible();
      this.$106 !== a &&
        (this.$15.emit('VideoControls/visibilityUpdate', {
          areControlsVisible: a,
        }),
        a ? this.$22.reserve() : this.$22.release(),
        this.$15.isState('destroyed') ||
          b('CSS').conditionClass(this.$15.getRootNode(), '_302m', !a));
      this.$106 = a;
      var c = this.$15.getAvailableVideoQualities(),
        e = this.$15.getPreferredVideoQuality(),
        f = this.$15.getSelectedVideoQuality(),
        g = this.$15.canAutoSelectVideoQuality(),
        h = this.$15.getStreamingFormat(),
        k = null;
      this.$15.hasOption('LiveHeatmap', 'interestLevels') &&
        (k = this.$15.getOption('LiveHeatmap', 'interestLevels'));
      var l = this.$60;
      this.$60 =
        b('VideoPlayerExperiments').slidingWNSv3 &&
        this.$35 &&
        b('VideoWatchAndScrollController').isSlidingEnabled(this.$15);
      l !== this.$60 &&
        this.$15.logEvent(
          this.$60
            ? b('VideoPlayerLoggerEvent').WATCH_AND_SCROLL_ICON_HIGHLIGHTED
            : b('VideoPlayerLoggerEvent').WATCH_AND_SCROLL_ICON_UNHIGHLIGHTED
        );
      l = this.$15.getSource() === b('VideoPlayerLoggerSource').TAHOE;
      var m =
          this.$15.getSource() === b('VideoPlayerLoggerSource').WATCH_SCROLL,
        n = this.$15.isFBIsLiveTemplated() || this.$15.isFBWasLive();
      n = this.$55 && n && this.$15.getState() !== 'finished';
      b('ReactDOM').render(
        b('React').createElement(b('DeferredComponent.react'), {
          deferredPlaceholder: b('React').createElement('span', null),
          deferredComponent: function (a) {
            return d(['VideoControls.react'], a);
          },
          allowCasting: this.$3,
          allowFullscreen: this.$4,
          annotatedMomentsOfInterest: this.$6,
          areSubtitlesActive: this.$7,
          areSubtitlesAutogenerated: this.$8,
          areHLSActive: this.$5,
          bufferedPosition: this.$9,
          finishedPlaying: this.$15.isState('finished'),
          hasFoundReceiver: this.hasFoundReceiver(),
          hasHD: this.$31,
          hasSubtitles: this.$34,
          hasWatchAndScroll: this.$35 && !this.getIsInChannel(),
          hidden: !this.areControlsEnabled(),
          hideGradient: this.$37,
          isAudioBlocked: this.$48,
          isCasting: this.isCasting(),
          isCastingSupported: this.isCastingSupported(),
          isCommentAttachment: this.$50,
          isEmbedded: j.has(this.$16),
          isFullscreen: this.$51,
          isHD: this.$52,
          isInline: this.$53,
          isInTahoe: l,
          isInWatchAndScroll: m,
          isLive: this.$54,
          isLiveRewindEnabled: n,
          isLiveRewound: this.$56,
          isSphericalVideo: this.$61,
          isMuted: this.$57,
          isPlaying: this.$58,
          isSidePaneOpen:
            this.getIsInChannel() &&
            !!b('Parent').bySelector(this.$80, '._57bj'),
          isSlidingWNSEligible: this.$60,
          interestLevels: k,
          liveRelativePlaybackPosition: this.$62,
          drawer: this.$22,
          onAnnotatedMomentOfInterestSelect: function (a) {
            this.$15.seek(a);
          }.bind(this),
          onEnterWatchAndScroll: this.$24,
          onEnterTahoe: this.$23,
          doesFullscreenEnterTahoe: this.$21,
          onLiveRewindToBeginning: this.$65,
          onLiveRewindSeekBack: this.$63,
          onLiveRewindSeekForward: this.$64,
          onLiveRewindToLive: this.$66,
          onWNSNUXClose: this.$14,
          onClipVideo: this.$13,
          onPause: this.$70,
          onPlay: this.$72,
          onScrubBegin: this.$82,
          onScrubEnd: this.$83,
          onSetVideoPlaybackRate: this.$86,
          onSettingsClick: function () {
            this.$59 = !this.$59;
          }.bind(this),
          onSidePaneToggle: function () {
            b('Arbiter').inform('VideoChannelView/sidePaneToggle', {});
          },
          onStartCast: this.$94,
          onStopCast: this.$95,
          onToggleFullscreen: this.$97,
          onToggleHD: this.$98,
          onToggleHLS: this.$99,
          onToggleMuted: this.$100,
          onToggleSubtitles: this.$101,
          onVolumeChange: this.$11,
          permalinkURL: this.$71,
          playbackDuration: this.$73,
          playbackPosition: this.$74,
          transparent: !a,
          hidePlaybackControl: this.$39,
          hidePlaybackScrubber: this.$40,
          showPlaybackRateControl: this.$90,
          showPlayButtonForLive: this.$91,
          hideRemainingTime: this.$41,
          hideSettings: this.$42,
          useTwoRows: this.$103,
          volume: this.$105,
          scrubberPreviewSprites: this.$84,
          hasScrubberPreview: this.$32 && !m,
          previewThumbnailInformation: this.$76,
          availableQualities: c,
          selectedQuality: f,
          preferredQuality: e,
          canAutoSelectVideoQuality: g,
          onSelectQuality: this.$85,
          showQualitySelector: this.$92,
          qualitySelectorMinStreams: this.$77,
          streamingFormat: h,
          showSpatialAudioNUX: this.$93,
          onPointOfInterestSelect: this.$75.onPointOfInterestSelect,
          currentPointOfInterest: this.$75.currentPointOfInterest,
          pointsOfInterest: this.$75.pointsOfInterest,
          showPointOfInterestTimestamps: this.$75.showPointOfInterestTimestamps,
          displayElapsedTime: this.$17,
          displayMilliseconds: this.$18,
          adBreaks: this.$1,
          adBreaksDisableReasons: this.$2,
          showSidePaneToggle: this.getIsInChannel() && !this.$51 && i,
          showWNSNUX: this.$10 && this.areControlsEnabled() && this.$88,
          insertedAdBreaks: this.$45,
          isAdBreakDisabled: this.$46,
          isAdBreakInsertionWithoutGapRule: this.$47,
          useDarkTheme: this.$102,
          videoID: this.$15.getVideoID(),
          videoClipInfo: this.$104 ? this.$104 : undefined,
          gamesVideoQuietModeGK: this.$29,
          gamesVideoCreatorClipping: this.$30,
        }),
        this.$80
      );
      this.$10 && this.areControlsEnabled() && this.$88 && (this.$33 = !0);
    };
    a.prototype.$115 = function () {
      __p && __p();
      var a = this.$15.getVideoInfo_DEPRECATED();
      if (a) {
        this.$7 = a.areSubtitlesActive;
        this.$8 = a.areSubtitlesAutogenerated;
        this.$34 = a.hasSubtitles;
        this.$31 = a.hasHD;
        this.$52 = a.isHD;
        this.$57 = a.isMuted;
        this.$58 = a.isPlaying || this.isCastPlaying();
        if (this.$55) {
          var c = this.$15.getSeekableRanges();
          c && (this.$73 = b('LiveRewindUtils').getTotalDuration(c));
        } else
          this.$19 !== null && this.$19 !== undefined
            ? (this.$73 = Math.min(a.playbackDuration, this.$19))
            : (this.$73 = a.playbackDuration);
        this.$105 = a.volume;
        c = this.$15.getOption(
          'CommercialBreakVideoAdOverlay',
          'videoController'
        );
        c
          ? (this.$51 = c.isFullscreen())
          : (this.$51 = this.$15.isFullscreen());
        this.$53 =
          this.$15.getSource() === b('VideoPlayerLoggerSource').INLINE ||
          this.$15.getSource() ===
            b('VideoPlayerLoggerSource').CONTINUE_WATCHING_RECOMMENDATION;
        this.$54 = a.isLiveStream;
        this.$5 = a.areHLSActive;
        this.$69 = !1;
        this.$21 = this.$15.listeners('enterTahoe').length !== 0;
      }
    };
    a.prototype.toggleHD = function () {
      this.$15.toggleHD();
    };
    a.prototype.setPreferredVideoQuality = function (a) {
      a
        ? this.$15.setPreferredVideoQuality(a)
        : this.$15.unsetPreferredVideoQuality();
    };
    a.prototype.toggleHLS = function () {
      this.$15.switchToStreamType('hls');
    };
    a.prototype.clipVideo = function (a) {
      b('promiseDone')(
        b('ClippingApi')
          .clipVideo(
            this.$15.getVideoID(),
            this.$15.getCurrentTimePosition(),
            a
          )
          .then()
      );
    };
    a.prototype.enterWatchAndScroll = function () {
      b('shouldWNSRenderToRHC')()
        ? this.$15.emit('crossfadeWatchAndScroll')
        : this.$15.emit('enterWatchAndScroll');
    };
    a.prototype.enterTahoe = function () {
      this.$15.getSource() === b('VideoPlayerLoggerSource').WATCH_SCROLL
        ? (this.$15.logEvent(
            b('VideoPlayerLoggerEvent').WATCH_AND_SCROLL_CHANNEL_ENTERED
          ),
          b('Bootloader').loadModules(
            ['TahoeController', 'URI'],
            function (a, c) {
              var d = new c(this.$15.getVideoURL());
              c = babelHelpers['extends'](
                {},
                c.getRequestURI().getQueryData(),
                { ref: 'tahoe' }
              );
              b('VideoWatchAndScrollController').onEnterTahoe();
              a.openFromVideoPlayer(
                this.$15,
                d.setQueryData(c),
                this.$15.getVideoChannelID(),
                b('VideoChainingCaller').WNS
              );
            }.bind(this),
            'VideoControls'
          ))
        : this.$15.emit('enterTahoe');
    };
    a.prototype.scrubBegin = function () {
      this.isCasting() || this.$15.pause(b('VideoPlayerReason').SEEK);
    };
    a.prototype.scrubEnd = function (a) {
      __p && __p();
      if (this.$55) {
        var c = this.$15.getSeekableRanges();
        if (c) {
          var d = this.$62;
          this.$62 = a;
          a = b('LiveRewindUtils').getAbsolutePosition(a, c);
          c = b('LiveRewindUtils').getLiveHeadTimestamp(c);
          c = c - a < 1;
          b('LiveVideoPlayerActions').setIsRewound(this.$15, !c);
          b('LiveRewindUtils').logLiveRewindEvent(
            b('LiveVideoRewindLoggerEvent').SCRUBBER,
            this.$15,
            d,
            null,
            null,
            a
          );
        }
      }
      this.$20 && (a += this.$20);
      this.$15.seek(a);
      this.$74 = a;
      c = this.$58 || (this.$15.isState('finished') && !this.$44);
      !this.isCasting() && c && this.$15.play(b('VideoPlayerReason').SEEK);
    };
    a.prototype.toggleMuted = function () {
      this.$15.isMuted()
        ? (b('logVideosClickTracking')(this.$15.getVideoNode()),
          this.$15.unmute())
        : this.$15.mute();
    };
    a.prototype.toggleFullscreen = function () {
      this.$15.isFullscreen() ||
        b('logVideosClickTracking')(this.$15.getVideoNode()),
        this.$15.toggleFullscreen();
    };
    a.prototype.toggleSubtitles = function () {
      this.$15.toggleSubtitles(), this.scheduleRenderReactComponent();
    };
    a.prototype.changeVolume = function (a) {
      this.$15.setVolume(a);
    };
    a.prototype.liveRewindToBeginning = function () {
      b('LiveRewindUtils').goToBeginning(this.$15);
    };
    a.prototype.liveRewindSeekBack = function () {
      b('LiveRewindUtils').seekBack(this.$15);
    };
    a.prototype.liveRewindSeekForward = function () {
      b('LiveRewindUtils').seekForward(this.$15);
    };
    a.prototype.liveRewindToLive = function () {
      b('LiveRewindUtils').goToLive(this.$15);
    };
    a.prototype.play = function () {
      b('logVideosClickTracking')(this.$15.getVideoNode()),
        this.isCasting()
          ? this.$15.setOption('casting', 'isPlaying', !0)
          : this.$15.play(b('VideoPlayerReason').USER),
        this.$54 &&
          this.$55 &&
          b('LiveRewindUtils').logLiveRewindEvent(
            b('LiveVideoRewindLoggerEvent').PLAY,
            this.$15,
            this.$62,
            null,
            this.$62,
            null
          );
    };
    a.prototype.pause = function () {
      this.isCasting()
        ? this.$15.setOption('casting', 'isPlaying', !1)
        : this.$15.pause(b('VideoPlayerReason').USER),
        this.$54 &&
          this.$55 &&
          (b('LiveVideoPlayerActions').setIsRewound(this.$15, !0),
          b('LiveRewindUtils').logLiveRewindEvent(
            b('LiveVideoRewindLoggerEvent').PAUSE,
            this.$15,
            this.$62,
            null,
            this.$62,
            null
          ));
    };
    a.prototype.setVideoPlaybackRate = function (a) {
      this.$15.setPlaybackRate(a);
    };
    a.prototype.startCasting = function () {
      this.$15.setOption('casting', 'isCasting', !0);
    };
    a.prototype.stopCasting = function () {
      this.$15.setOption('casting', 'isCasting', !1);
    };
    a.prototype.isCastPlaying = function () {
      return this.$15.getOption('casting', 'isPlaying');
    };
    a.prototype.hasFoundReceiver = function () {
      return this.$15.getOption('casting', 'hasFoundReceiver');
    };
    a.prototype.isCasting = function () {
      return this.$15.getOption('casting', 'isCasting');
    };
    a.prototype.isCastingSupported = function () {
      return this.$15.getOption('casting', 'isSupported');
    };
    a.prototype.updatePointsOfInterestConfig = function (a) {
      Object.assign(this.$75, a), this.scheduleRenderReactComponent();
    };
    a.prototype.updateDisplayElapsedTime = function (a) {
      (this.$17 = a), this.scheduleRenderReactComponent();
    };
    a.prototype.updateDisplayTimeRangeConfig = function (a) {
      (this.$19 = a.displayDurationLimit),
        (this.$20 = a.displayTimeOffset),
        this.scheduleRenderReactComponentWithVideoInfoUpdate();
    };
    a.prototype.getIsInChannel = function () {
      return this.$15.getIsInChannel();
    };
    a.prototype.unregister = function () {
      b('cancelAnimationFrame')(this.$79), this.$96.release();
    };
    e.exports = a;
  },
  null
);
__d(
  'EmbeddedVideoAPIComponent',
  ['Arbiter', 'SubscriptionsHandler', 'VideoPlayerReason', 'XD'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = b('XD').UnverifiedXD;
    function a(a) {
      __p && __p();
      this.$1 = a;
      this.$2 = new (b('SubscriptionsHandler'))();
      this.$3 = {
        playing: 'startedPlaying',
        paused: 'paused',
        finished: 'finishedPlaying',
        buffering: 'startedBuffering',
        buffered: 'finishedBuffering',
        error: 'error',
      };
      this.$2.addSubscriptions(
        b('Arbiter').subscribe(
          'Connect.Unsafe.play',
          function () {
            this.$1.play(b('VideoPlayerReason').EMBEDDED_VIDEO_API);
          }.bind(this)
        ),
        b('Arbiter').subscribe(
          'Connect.Unsafe.pause',
          function () {
            this.$1.pause(b('VideoPlayerReason').EMBEDDED_VIDEO_API);
          }.bind(this)
        ),
        b('Arbiter').subscribe(
          'Connect.Unsafe.seek',
          function (a, b) {
            this.$1.seek(b.target);
          }.bind(this)
        ),
        b('Arbiter').subscribe(
          'Connect.Unsafe.mute',
          function () {
            this.$1.mute();
          }.bind(this)
        ),
        b('Arbiter').subscribe(
          'Connect.Unsafe.unmute',
          function () {
            this.$1.unmute();
          }.bind(this)
        ),
        b('Arbiter').subscribe(
          'Connect.Unsafe.setVolume',
          function (a, b) {
            this.$1.setVolume(b.volume);
          }.bind(this)
        ),
        this.$1.addListener(
          'stateChange',
          function () {
            if (this.$1.isState('ready')) {
              var a = {
                isMuted: this.$1.isMuted(),
                volume: this.$1.getVolume(),
                timePosition: this.$1.getCurrentTimePosition(),
                duration: this.$1.getPlaybackDuration(),
              };
              this.sendVideoAPIReady(a);
            } else
              this.$1.isState('playing')
                ? this.sendEventToSDK(this.$3.playing)
                : this.$1.isState('paused')
                ? this.sendEventToSDK(this.$3.paused)
                : this.$1.isState('finished') &&
                  this.sendEventToSDK(this.$3.finished);
          }.bind(this)
        ),
        this.$1.addListener(
          'updateStatus',
          function (a) {
            if (a.position !== undefined) {
              a = { timePosition: a.position };
              this.sendStateDataForUpdateToSDK(a);
            }
          }.bind(this)
        ),
        this.$1.addListener(
          'buffering',
          function () {
            this.sendEventToSDK(this.$3.buffering);
          }.bind(this)
        ),
        this.$1.addListener(
          'buffered',
          function () {
            this.sendEventToSDK(this.$3.buffered);
          }.bind(this)
        ),
        this.$1.addListener(
          'error',
          function () {
            this.sendEventToSDK(this.$3.error);
          }.bind(this)
        ),
        this.$1.addListener(
          'updateMetadata',
          function (a) {
            a = { duration: this.$1.getPlaybackDuration() };
            this.sendStateDataForUpdateToSDK(a);
          }.bind(this)
        ),
        this.$1.addListener(
          'muteVideo',
          function () {
            var a = { isMuted: !0 };
            this.sendStateDataForUpdateToSDK(a);
          }.bind(this)
        ),
        this.$1.addListener(
          'unmuteVideo',
          function () {
            var a = { isMuted: !1 };
            this.sendStateDataForUpdateToSDK(a);
          }.bind(this)
        ),
        this.$1.addListener(
          'changeVolume',
          function (a) {
            a = { volume: a.volume, isMuted: a.volume === 0 };
            this.sendStateDataForUpdateToSDK(a);
          }.bind(this)
        )
      );
      if (!this.$1.isState('loading') && !this.$1.isState('fallback')) {
        a = {
          isMuted: this.$1.isMuted(),
          volume: this.$1.getVolume(),
          timePosition: this.$1.getCurrentTimePosition(),
          duration: this.$1.getPlaybackDuration(),
        };
        this.sendVideoAPIReady(a);
      }
    }
    a.prototype.sendVideoAPIReady = function (a) {
      g.send({ type: 'onVideoAPIReady', data: JSON.stringify(a) });
    };
    a.prototype.sendEventToSDK = function (event) {
      g.send({ type: 'stateChange', state: event });
    };
    a.prototype.sendStateDataForUpdateToSDK = function (a) {
      g.send({ type: 'cachedStateUpdateRequest', data: JSON.stringify(a) });
    };
    e.exports = a;
  },
  null
);
__d(
  'VideoPlayerFallbackEvents',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      ENTER: 'VideoPlayerFallbackEvents/enter',
      RECOVER: 'VideoPlayerFallbackEvents/recover',
    });
  },
  null
);
__d(
  'SphericalVideoFallback',
  [
    'cx',
    'CSS',
    'VideoPlayerFallbackEvents',
    'VideoPlayerLoggerEvent',
    'VideoPlayerStates',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    a = {
      setup: function (a, c) {
        __p && __p();
        var d = c.fallbackUriList,
          e = c.fallbackType,
          f = function () {
            __p && __p();
            a.emit(b('VideoPlayerFallbackEvents').ENTER);
            var c = a.getLastError();
            if (
              c &&
              c.error !== 'SPHERICAL_SETUP_FAILED' &&
              c.error !== 'SPHERICAL_RENDER_ERROR'
            )
              return;
            var f = a.addListener('stateChange', function () {
              a.isState(b('VideoPlayerStates').PLAYING) &&
                (a.logEvent(
                  b('VideoPlayerLoggerEvent').SPHERICAL_FALLBACK_ENTERED,
                  { spherical_fallback_type: e }
                ),
                f.remove());
            });
            a.setFallbackSources(d);
            b('CSS').removeClass(a.getRootNode(), '_3-n5');
            a.reset();
            a.emit(b('VideoPlayerFallbackEvents').RECOVER);
          };
        if (a.isState(b('VideoPlayerStates').FALLBACK)) f();
        else
          var g = a.addListener('stateChange', function () {
            a.isState(b('VideoPlayerStates').FALLBACK) && (f(), g.remove());
          });
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'VideoErrorOverlay',
  ['SphericalVideoFallback'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function g(a, b) {
      'textContent' in a && (a.textContent = b), (a.innerText = b);
    }
    function h(a) {
      if ('textContent' in a) return a.textContent;
      return !a.innerText ? '' : a.innerText;
    }
    function a(a, c, d, e, f) {
      __p && __p();
      (this.$1 = c),
        (this.$2 = d),
        (this.$3 = e),
        a.registerOption(
          'VideoErrorOverlay',
          'title',
          function () {
            return this.getTitle();
          }.bind(this),
          function (a) {
            return this.setTitle(a);
          }.bind(this)
        ),
        a.registerOption(
          'VideoErrorOverlay',
          'message',
          function () {
            return this.getMessage();
          }.bind(this),
          function (a) {
            return this.setMessage(a);
          }.bind(this)
        ),
        a.registerOption(
          'VideoErrorOverlay',
          'linkURL',
          function () {
            return this.getLinkURL();
          }.bind(this),
          function (a) {
            return this.setLinkURL(a);
          }.bind(this)
        ),
        a.registerOption(
          'VideoErrorOverlay',
          'linkTitle',
          function () {
            return this.getLinkTitle();
          }.bind(this),
          function (a) {
            return this.setLinkTitle(a);
          }.bind(this)
        ),
        a.registerOption('VideoErrorOverlay', 'available', function () {
          return !0;
        }),
        f && b('SphericalVideoFallback').setup(a, f);
    }
    a.prototype.getTitle = function () {
      return this.$1 ? h(this.$1) : '';
    };
    a.prototype.setTitle = function (a) {
      this.$1 && g(this.$1, a);
    };
    a.prototype.getMessage = function () {
      return h(this.$2);
    };
    a.prototype.setMessage = function (a) {
      g(this.$2, a);
    };
    a.prototype.getLinkURL = function () {
      return this.$3.href;
    };
    a.prototype.setLinkURL = function (a) {
      this.$3.href = a;
    };
    a.prototype.getLinkTitle = function () {
      return h(this.$3);
    };
    a.prototype.setLinkTitle = function (a) {
      g(this.$3, a);
    };
    e.exports = a;
  },
  null
);
