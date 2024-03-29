if (self.CavalryLogger) {
  CavalryLogger.start_js(['51zND']);
}

__d(
  'ClickableAreaButton.react',
  ['cx', 'invariant', 'Focus', 'React', 'ReactDOM', 'XUICard.react'],
  function (a, b, c, d, e, f, g, h) {
    __p && __p();
    var i;
    i = babelHelpers.inherits(a, b('React').Component);
    i && i.prototype;
    a.prototype.componentDidMount = function () {
      this.$1 &&
        b('Focus').relocate(
          b('ReactDOM').findDOMNode(this.$1),
          b('ReactDOM').findDOMNode(this)
        );
    };
    a.prototype.focus = function () {
      b('Focus').set(this.$1);
    };
    a.prototype.render = function () {
      var a = this.props,
        c = a.children,
        d = a.disabled,
        e = a.label,
        f = a.onClick,
        g = a.pressed;
      a = a.tabIndex;
      c = b('React').Children.only(c);
      c.props.onClick && h(0, undefined);
      g = f
        ? b('React').createElement(
            'button',
            {
              'aria-pressed': g,
              className: 'accessible_elem',
              disabled: d,
              label: e,
              key: 'accessible_button',
              tabIndex: a,
              ref: function (a) {
                return (this.$1 = a);
              }.bind(this),
            },
            e
          )
        : null;
      return b('React').cloneElement(c, { onClick: d ? null : f }, [
        c.props.children,
        g,
      ]);
    };
    function a() {
      i.apply(this, arguments);
    }
    e.exports = a;
  },
  null
);
