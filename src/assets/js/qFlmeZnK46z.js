if (self.CavalryLogger) {
  CavalryLogger.start_js(['UW0Iw']);
}

__d(
  'PopoverMenuContextMinWidth',
  ['cx', 'CSS', 'Style', 'shield'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    function a(a) {
      (this._popoverMenu = a), (this._popover = a.getPopover());
    }
    a.prototype.enable = function () {
      this._setMenuSubscription = this._popoverMenu.subscribe(
        'setMenu',
        b('shield')(this._onSetMenu, this)
      );
    };
    a.prototype.disable = function () {
      this._setMenuSubscription.unsubscribe(),
        (this._setMenuSubscription = null),
        this._showSubscription &&
          (this._showSubscription.unsubscribe(),
          (this._showSubscription = null)),
        this._menuSubscription &&
          (this._menuSubscription.unsubscribe(),
          (this._menuSubscription = null));
    };
    a.prototype._onSetMenu = function () {
      this._menu = this._popoverMenu.getMenu();
      this._showSubscription = this._popover.subscribe(
        'show',
        b('shield')(this._updateWidth, this)
      );
      var a = this._updateWidth.bind(this);
      this._menuSubscription = this._menu.subscribe(
        ['change', 'resize'],
        function () {
          setTimeout(a, 0);
        }
      );
      this._updateWidth();
    };
    a.prototype._updateWidth = function () {
      var a = this._menu.getRoot(),
        c = this._popoverMenu.getTriggerElem();
      c = c.offsetWidth;
      b('Style').set(a, 'min-width', c + 'px');
      b('CSS').conditionClass(a, '_575s', c >= a.offsetWidth);
    };
    Object.assign(a.prototype, {
      _setMenuSubscription: null,
      _showSubscription: null,
      _menuSubscription: null,
    });
    e.exports = a;
  },
  null
);
