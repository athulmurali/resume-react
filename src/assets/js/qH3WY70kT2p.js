if (self.CavalryLogger) {
  CavalryLogger.start_js(['CIhnX']);
}

__d(
  'ReactSelectorUtils',
  ['React'],
  function (a, b, c, d, e, f) {
    __p && __p();
    a = {
      processMenuItems: function (a, c, d) {
        __p && __p();
        d === void 0 && (d = !1);
        var e;
        d = b('React').Children.map(a, function (a) {
          if (a) {
            var d = a.props.value === c;
            a = b('React').cloneElement(a, { selected: d });
            d && (e = a);
            return a;
          }
        });
        return { items: d, selectedItem: e };
      },
      processMultiMenuItems: function (a, c, d) {
        __p && __p();
        d === void 0 && (d = !1);
        var e = [];
        d = a;
        c &&
          (d = b('React').Children.map(a, function (a) {
            if (a) {
              var d = c.some(function (b) {
                return b === a.props.value;
              });
              a = b('React').cloneElement(a, { selected: d });
              d && e.push(a);
              return a;
            }
          }));
        return { items: d, selectedItems: e };
      },
    };
    e.exports = a;
  },
  null
);
