if (self.CavalryLogger) {
  CavalryLogger.start_js(['FeEUK']);
}

__d(
  'XUICard.react',
  ['cx', 'React', 'XUIBlock', 'joinClasses'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h;
    h = babelHelpers.inherits(a, b('React').Component);
    h && h.prototype;
    a.prototype.render = function () {
      var a = this.props;
      a.background;
      var c = a.children,
        d = a.className;
      a = babelHelpers.objectWithoutProperties(a, [
        'background',
        'children',
        'className',
      ]);
      d = b('joinClasses')(
        d,
        '_4-u2',
        b('XUIBlock').getBackgroundClass(this.props)
      );
      return b('React').createElement(
        'div',
        babelHelpers['extends']({}, a, { className: d }),
        c
      );
    };
    function a() {
      h.apply(this, arguments);
    }
    a.propTypes = b('XUIBlock').propTypes;
    a.defaultProps = babelHelpers['extends'](
      {},
      b('XUIBlock').getDefaultProps(),
      { background: 'white' }
    );
    e.exports = a;
  },
  null
);
