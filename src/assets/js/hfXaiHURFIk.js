if (self.CavalryLogger) {
  CavalryLogger.start_js(['FJdxL']);
}

__d(
  'Selector.react',
  ['AbstractSelector.react', 'PopoverButton.react', 'React', 'ReactMenu'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g,
      h = b('ReactMenu').SelectableMenu;
    c = b('ReactMenu').SelectableItem;
    g = babelHelpers.inherits(a, b('React').Component);
    g && g.prototype;
    a.prototype.render = function () {
      var a = {
        button: b('React').createElement(b('PopoverButton.react'), {
          rel: 'toggle',
          suppressed: this.props.suppressed,
        }),
        menu: b('React').createElement(h, null),
      };
      return b('React').createElement(
        b('AbstractSelector.react'),
        babelHelpers['extends']({}, this.props, {
          overlappingborder: !0,
          config: a,
        }),
        this.props.children
      );
    };
    function a() {
      g.apply(this, arguments);
    }
    a.Option = c;
    e.exports = a;
  },
  null
);
