if (self.CavalryLogger) {
  CavalryLogger.start_js(['MXPfg']);
}

__d(
  'ClickableArea.react',
  ['Focus', 'React', 'ReactDOM'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g;
    g = babelHelpers.inherits(a, b('React').Component);
    g && g.prototype;
    a.prototype.componentDidMount = function () {
      if (this.props.buttonRef) {
        var a = this.props.buttonRef();
        b('Focus').relocate(
          b('ReactDOM').findDOMNode(a),
          b('ReactDOM').findDOMNode(this)
        );
      }
    };
    a.prototype.render = function () {
      var a = this.props,
        c = a.children,
        d = a.onClick;
      a = babelHelpers.objectWithoutProperties(a, ['children', 'onClick']);
      return b('React').cloneElement(
        b('React').Children.only(c),
        babelHelpers['extends']({}, a, { onClick: d })
      );
    };
    function a() {
      g.apply(this, arguments);
    }
    e.exports = a;
  },
  null
);
