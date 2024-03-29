if (self.CavalryLogger) {
  CavalryLogger.start_js(['f2c8f']);
}

__d(
  'BUISwitch.react',
  ['cx', 'fbt', 'BUIComponent', 'Event', 'Keys', 'React'],
  function (a, b, c, d, e, f, g, h) {
    __p && __p();
    var i;
    c = b('React').PropTypes;
    d = babelHelpers.inherits(a, b('BUIComponent'));
    i = d && d.prototype;
    function a() {
      __p && __p();
      var a, c;
      for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
        e[f] = arguments[f];
      return (
        (c = (a = i.constructor).call.apply(a, [this].concat(e))),
        (this.$BUISwitch1 = function (event) {
          if (this.props.disabled) return;
          this.props.onToggle && this.props.onToggle(!this.props.value);
          this.props.preventEventBubbling && event.stopPropagation();
        }.bind(this)),
        (this.$BUISwitch2 = function (event) {
          if (this.props.disabled) return;
          var a = b('Event').getKeyCode(event);
          (a === b('Keys').RETURN || a === b('Keys').SPACE) &&
            (event.preventDefault(),
            this.props.onToggle && this.props.onToggle(!this.props.value),
            this.props.preventEventBubbling && event.stopPropagation());
        }.bind(this)),
        c
      );
    }
    a.prototype.render = function () {
      return b('React').createElement(
        'div',
        babelHelpers['extends']({}, this.props, {
          className:
            '_128j' +
            (this.props.value ? ' _128k' : '') +
            (this.props.value ? '' : ' _128l') +
            (this.props.disabled ? ' _128m' : '') +
            (this.props.animate ? ' _128n' : '') +
            (this.props.inline ? ' _3n6a' : ''),
        }),
        b('React').createElement(
          'div',
          {
            'aria-checked': this.props.value ? 'true' : 'false',
            className: '_128o',
            onClick: this.$BUISwitch1,
            onKeyDown: this.$BUISwitch2,
            onMouseDown: this.$BUISwitch3,
            role: 'checkbox',
            tabIndex: this.props.disabled ? '-1' : '0',
          },
          b('React').createElement('div', { className: '_128p' })
        ),
        this.$BUISwitch4()
      );
    };
    a.prototype.$BUISwitch4 = function () {
      return !this.props.showLabel
        ? null
        : b('React').createElement(
            'span',
            { className: '_128q' },
            this.props.value ? h._('ON') : h._('OFF')
          );
    };
    a.prototype.$BUISwitch3 = function (event) {
      event.preventDefault();
    };
    a.propTypes = {
      animate: c.bool.isRequired,
      disabled: c.bool,
      onToggle: c.func,
      showLabel: c.bool,
      value: c.bool.isRequired,
      preventEventBubbling: c.bool,
      inline: c.bool,
    };
    a.defaultProps = { animate: !0 };
    e.exports = a;
  },
  null
);
