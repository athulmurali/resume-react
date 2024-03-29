if (self.CavalryLogger) {
  CavalryLogger.start_js(['WtbdV']);
}

__d(
  'PopoverMenuOverlappingBorder',
  ['cx', 'CSS', 'DOM', 'Style', 'shield'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    function a(a) {
      (this._popoverMenu = a),
        (this._popover = a.getPopover()),
        (this._triggerElem = a.getTriggerElem());
    }
    a.prototype.enable = function () {
      this._setMenuSubscription = this._popoverMenu.subscribe(
        'setMenu',
        b('shield')(this._onSetMenu, this)
      );
    };
    a.prototype.disable = function () {
      this._popoverMenu.unsubscribe(this._setMenuSubscription),
        (this._setMenuSubscription = null),
        this._removeBorderSubscriptions(),
        this._removeShortBorder();
    };
    a.prototype._onSetMenu = function () {
      this._removeBorderSubscriptions();
      this._menu = this._popoverMenu.getMenu();
      this._renderShortBorder(this._menu.getRoot());
      this._showSubscription = this._popover.subscribe(
        'show',
        b('shield')(this._updateBorder, this)
      );
      var a = this._updateBorder.bind(this);
      this._menuSubscription = this._menu.subscribe(
        ['change', 'resize'],
        function () {
          setTimeout(a, 0);
        }
      );
      this._updateBorder();
    };
    a.prototype._updateBorder = function () {
      var a = this._menu.getRoot(),
        c = this._triggerElem.offsetWidth;
      a = Math.max(a.offsetWidth - c, 0);
      b('Style').set(this._shortBorder, 'width', a + 'px');
    };
    a.prototype._renderShortBorder = function (a) {
      (this._shortBorder = b('DOM').create('div', { className: '_54hx' })),
        b('DOM').appendContent(a, this._shortBorder),
        b('CSS').addClass(a, '_54hy');
    };
    a.prototype._removeShortBorder = function () {
      this._shortBorder &&
        (b('DOM').remove(this._shortBorder),
        (this._shortBorder = null),
        b('CSS').removeClass(this._popoverMenu.getMenu().getRoot(), '_54hy'));
    };
    a.prototype._removeBorderSubscriptions = function () {
      this._showSubscription &&
        (this._popover.unsubscribe(this._showSubscription),
        (this._showSubscription = null)),
        this._menuSubscription &&
          (this._menu.unsubscribe(this._menuSubscription),
          (this._menuSubscription = null));
    };
    Object.assign(a.prototype, {
      _shortBorder: null,
      _setMenuSubscription: null,
      _showSubscription: null,
      _menuSubscription: null,
    });
    e.exports = a;
  },
  null
);
