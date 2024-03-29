if (self.CavalryLogger) {
  CavalryLogger.start_js(['PQ/wd']);
}

__d(
  'intlList',
  ['fbt', 'invariant', 'React'],
  function (a, b, c, d, e, f, g, h) {
    __p && __p();
    var i = { AND: 'AND', NONE: 'NONE', OR: 'OR' },
      j = { COMMA: 'COMMA', SEMICOLON: 'SEMICOLON' };
    a = function (a, b, c) {
      __p && __p();
      b = b || i.AND;
      c = c || j.COMMA;
      var d = a.length;
      if (d === 0) return '';
      else if (d === 1) return a[0];
      var e = a[d - 1],
        f = a[0];
      for (var h = 1; h < d - 1; ++h)
        switch (c) {
          case j.SEMICOLON:
            f = g._('{previous items}; {following items}', [
              g._param('previous items', f),
              g._param('following items', a[h]),
            ]);
            break;
          default:
            f = g._('{previous items}, {following items}', [
              g._param('previous items', f),
              g._param('following items', a[h]),
            ]);
        }
      return k(f, e, b, c);
    };
    function k(a, b, c, d) {
      switch (c) {
        case i.AND:
          return g._('{list of items} and {last item}', [
            g._param('list of items', a),
            g._param('last item', b),
          ]);
        case i.OR:
          return g._('{list of items} or {last item}', [
            g._param('list of items', a),
            g._param('last item', b),
          ]);
        case i.NONE:
          switch (d) {
            case j.SEMICOLON:
              return g._('{previous items}; {last item}', [
                g._param('previous items', a),
                g._param('last item', b),
              ]);
            default:
              return g._('{list of items}, {last item}', [
                g._param('list of items', a),
                g._param('last item', b),
              ]);
          }
        default:
          h(0, undefined, c);
      }
    }
    a.DELIMITERS = j;
    a.CONJUNCTIONS = i;
    e.exports = a;
  },
  null
);
