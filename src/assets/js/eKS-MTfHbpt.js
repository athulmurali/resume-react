if (self.CavalryLogger) {
  CavalryLogger.start_js(['F5tjN']);
}

__d(
  'PopoverButton.react',
  [
    'cx',
    'ix',
    'AbstractPopoverButton.react',
    'Button.react',
    'Image.react',
    'React',
    'joinClasses',
  ],
  function (a, b, c, d, e, f, g, h) {
    __p && __p();
    var i;
    c = b('React').PropTypes;
    i = babelHelpers.inherits(a, b('React').Component);
    i && i.prototype;
    a.prototype.render = function () {
      var a = b('React').createElement(b('Image.react'), { src: h('101373') });
      a = {
        button: b('React').createElement(
          b('Button.react'),
          babelHelpers['extends']({}, this.props, {
            className: b('joinClasses')(this.props.className, '_4-s1'),
          })
        ),
        chevron: a,
        defaultMaxWidth: 200,
        chevronWidth: 14,
      };
      return b('React').createElement(b('AbstractPopoverButton.react'), {
        config: a,
        haschevron: this.props.haschevron,
        image: this.props.image,
        label: this.props.label,
        labelIsHidden: this.props.labelIsHidden,
        maxwidth: this.props.maxwidth,
      });
    };
    function a() {
      i.apply(this, arguments);
    }
    a.propTypes = {
      haschevron: c.bool,
      label: c.node,
      labelIsHidden: c.bool,
      maxwidth: c.number,
    };
    e.exports = a;
  },
  null
);
