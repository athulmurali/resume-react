if (self.CavalryLogger) {
  CavalryLogger.start_js(['bI0Xh']);
}

__d(
  'Button.react',
  ['cx', 'AbstractButton.react', 'React', 'joinClasses'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h;
    c = b('React').PropTypes;
    h = babelHelpers.inherits(a, b('React').Component);
    h && h.prototype;
    a.prototype.render = function () {
      var a = this.props.use || 'default',
        c = this.props.size || 'medium';
      c =
        '_42fu' +
        (a === 'special' ? ' _42gz' : '') +
        (a === 'confirm' ? ' _42g-' : '') +
        (c === 'large' ? ' _42gy' : '') +
        (this.props.suppressed ? ' _42gx' : '') +
        (a !== 'default' ? ' selected' : '');
      return b('React').createElement(
        b('AbstractButton.react'),
        babelHelpers['extends']({}, this.props, {
          label: this.props.label,
          className: b('joinClasses')(this.props.className, c),
        })
      );
    };
    function a() {
      h.apply(this, arguments);
    }
    a.propTypes = {
      use: c.oneOf(['special', 'confirm', 'default']),
      size: c.oneOf(['medium', 'large']),
      suppressed: c.bool,
    };
    e.exports = a;
  },
  null
);
