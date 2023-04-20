if (self.CavalryLogger) {
  CavalryLogger.start_js(['4trQA']);
}

__d(
  'crc16',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = [
      0, 4129, 8258, 12387, 16516, 20645, 24774, 28903, 33032, 37161, 41290,
      45419, 49548, 53677, 57806, 61935, 4657, 528, 12915, 8786, 21173, 17044,
      29431, 25302, 37689, 33560, 45947, 41818, 54205, 50076, 62463, 58334,
      9314, 13379, 1056, 5121, 25830, 29895, 17572, 21637, 42346, 46411, 34088,
      38153, 58862, 62927, 50604, 54669, 13907, 9842, 5649, 1584, 30423, 26358,
      22165, 18100, 46939, 42874, 38681, 34616, 63455, 59390, 55197, 51132,
      18628, 22757, 26758, 30887, 2112, 6241, 10242, 14371, 51660, 55789, 59790,
      63919, 35144, 39273, 43274, 47403, 23285, 19156, 31415, 27286, 6769, 2640,
      14899, 10770, 56317, 52188, 64447, 60318, 39801, 35672, 47931, 43802,
      27814, 31879, 19684, 23749, 11298, 15363, 3168, 7233, 60846, 64911, 52716,
      56781, 44330, 48395, 36200, 40265, 32407, 28342, 24277, 20212, 15891,
      11826, 7761, 3696, 65439, 61374, 57309, 53244, 48923, 44858, 40793, 36728,
      37256, 33193, 45514, 41451, 53516, 49453, 61774, 57711, 4224, 161, 12482,
      8419, 20484, 16421, 28742, 24679, 33721, 37784, 41979, 46042, 49981,
      54044, 58239, 62302, 689, 4752, 8947, 13010, 16949, 21012, 25207, 29270,
      46570, 42443, 38312, 34185, 62830, 58703, 54572, 50445, 13538, 9411, 5280,
      1153, 29798, 25671, 21540, 17413, 42971, 47098, 34713, 38840, 59231,
      63358, 50973, 55100, 9939, 14066, 1681, 5808, 26199, 30326, 17941, 22068,
      55628, 51565, 63758, 59695, 39368, 35305, 47498, 43435, 22596, 18533,
      30726, 26663, 6336, 2273, 14466, 10403, 52093, 56156, 60223, 64286, 35833,
      39896, 43963, 48026, 19061, 23124, 27191, 31254, 2801, 6864, 10931, 14994,
      64814, 60687, 56684, 52557, 48554, 44427, 40424, 36297, 31782, 27655,
      23652, 19525, 15522, 11395, 7392, 3265, 61215, 65342, 53085, 57212, 44955,
      49082, 36825, 40952, 28183, 32310, 20053, 24180, 11923, 16050, 3793, 7920,
    ];
    function h(a) {
      var b = 65535;
      for (var c = 0; c < a.length; c++) {
        var d = a.charCodeAt(c);
        if (d > 255) throw new RangeError();
        d = (d ^ (b >> 8)) & 255;
        b = g[d] ^ (b << 8);
      }
      return (b ^ 0) & 65535;
    }
    function a(a) {
      return h(a).toString(16).padStart(4, '0');
    }
    h.hex = a;
    e.exports = h;
  },
  null
);
__d(
  'VideoPlayerAbrTypedLogger',
  ['Banzai', 'GeneratedLoggerUtils', 'nullthrows'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a() {
      this.clear();
    }
    a.prototype.log = function () {
      b('GeneratedLoggerUtils').log(
        'vpabr_proxy:VideoPlayerAbrLoggerConfig',
        this.$1,
        b('Banzai').BASIC
      );
    };
    a.prototype.logVital = function () {
      b('GeneratedLoggerUtils').log(
        'vpabr_proxy:VideoPlayerAbrLoggerConfig',
        this.$1,
        b('Banzai').VITAL
      );
    };
    a.prototype.logImmediately = function () {
      b('GeneratedLoggerUtils').log(
        'vpabr_proxy:VideoPlayerAbrLoggerConfig',
        this.$1,
        { signal: !0 }
      );
    };
    a.prototype.clear = function () {
      this.$1 = {};
      return this;
    };
    a.prototype.getData = function () {
      return babelHelpers['extends']({}, this.$1);
    };
    a.prototype.updateData = function (a) {
      this.$1 = babelHelpers['extends']({}, this.$1, a);
      return this;
    };
    a.prototype.setActiveIsHvq = function (a) {
      this.$1.active_is_hvq = a;
      return this;
    };
    a.prototype.setActiveRepresentationID = function (a) {
      this.$1.active_representation_id = a;
      return this;
    };
    a.prototype.setAvailableTracks = function (a) {
      this.$1.available_tracks = b('GeneratedLoggerUtils').serializeMap(a);
      return this;
    };
    a.prototype.setBandwidthEstimate = function (a) {
      this.$1.bandwidth_estimate = a;
      return this;
    };
    a.prototype.setBufferedAhead = function (a) {
      this.$1.buffered_ahead = a;
      return this;
    };
    a.prototype.setBytes = function (a) {
      this.$1.bytes = a;
      return this;
    };
    a.prototype.setClientTime = function (a) {
      this.$1.client_time = a;
      return this;
    };
    a.prototype.setClientTimeBegin = function (a) {
      this.$1.client_time_begin = a;
      return this;
    };
    a.prototype.setClientTimeEnd = function (a) {
      this.$1.client_time_end = a;
      return this;
    };
    a.prototype.setDelayMs = function (a) {
      this.$1.delay_ms = a;
      return this;
    };
    a.prototype.setEvent = function (a) {
      this.$1.event = a;
      return this;
    };
    a.prototype.setFbQualityLabel = function (a) {
      this.$1.fb_quality_label = a;
      return this;
    };
    a.prototype.setIsHvq = function (a) {
      this.$1.is_hvq = a;
      return this;
    };
    a.prototype.setIsLive = function (a) {
      this.$1.is_live = a;
      return this;
    };
    a.prototype.setPlayerOriginCallerSpecified = function (a) {
      this.$1.player_origin_caller_specified = a;
      return this;
    };
    a.prototype.setPlayhead = function (a) {
      this.$1.playhead = a;
      return this;
    };
    a.prototype.setReason = function (a) {
      this.$1.reason = a;
      return this;
    };
    a.prototype.setRepresentationID = function (a) {
      this.$1.representation_id = a;
      return this;
    };
    a.prototype.setScriptPath = function (a) {
      this.$1.script_path = a;
      return this;
    };
    a.prototype.setSession = function (a) {
      this.$1.session = a;
      return this;
    };
    a.prototype.setUnsampledReason = function (a) {
      this.$1.unsampled_reason = a;
      return this;
    };
    a.prototype.setVC = function (a) {
      this.$1.vc = a;
      return this;
    };
    a.prototype.setVideoDuration = function (a) {
      this.$1.video_duration = a;
      return this;
    };
    a.prototype.setVideoID = function (a) {
      this.$1.video_id = a;
      return this;
    };
    a.prototype.updateExtraData = function (a) {
      a = b('nullthrows')(b('GeneratedLoggerUtils').serializeMap(a));
      b('GeneratedLoggerUtils').checkExtraDataFieldNames(a, g);
      this.$1 = babelHelpers['extends']({}, this.$1, a);
      return this;
    };
    a.prototype.addToExtraData = function (a, b) {
      var c = {};
      c[a] = b;
      return this.updateExtraData(c);
    };
    var g = {
      active_is_hvq: !0,
      active_representation_id: !0,
      available_tracks: !0,
      bandwidth_estimate: !0,
      buffered_ahead: !0,
      bytes: !0,
      client_time: !0,
      client_time_begin: !0,
      client_time_end: !0,
      delay_ms: !0,
      event: !0,
      fb_quality_label: !0,
      is_hvq: !0,
      is_live: !0,
      player_origin_caller_specified: !0,
      playhead: !0,
      reason: !0,
      representation_id: !0,
      script_path: !0,
      session: !0,
      unsampled_reason: !0,
      vc: !0,
      video_duration: !0,
      video_id: !0,
    };
    e.exports = a;
  },
  null
);
__d(
  'dispatchCustomEvent',
  [],
  function (a, b, c, d, e, f) {
    function b(b, c, d) {
      var e;
      typeof a.CustomEvent === 'function'
        ? (e = new a.CustomEvent(c, { detail: d }))
        : ((e = a.document.createEvent('CustomEvent')),
          e.initCustomEvent(c, !0, !0, d));
      b.dispatchEvent(e);
    }
    e.exports = b;
  },
  null
);
__d(
  'XRlAbrController',
  ['XController'],
  function (a, b, c, d, e, f) {
    e.exports = b('XController').create('/video/repomen/', {
      reason: { type: 'String' },
      query: { type: 'FloatVector' },
      bitrates: { type: 'FloatVector' },
      action: { type: 'Int' },
      action_prob: { type: 'FloatVector' },
      id: { type: 'Int' },
      session_id: { type: 'String' },
      smc_tier: { type: 'String' },
      model_id: { type: 'String' },
      mdp_step: { type: 'Int' },
      prev_reward: { type: 'Float' },
      label_0: { type: 'Float' },
      label_1: { type: 'Float' },
      label_2: { type: 'Float' },
      label_3: { type: 'Float' },
      label_4: { type: 'Float' },
      label_5: { type: 'Float' },
      label_6: { type: 'Float' },
      label_7: { type: 'Float' },
      label_8: { type: 'Float' },
      label_9: { type: 'Float' },
    });
  },
  null
);
__d(
  'RlAbrUtils',
  ['Promise', 'AsyncRequest', 'XRlAbrController'],
  function (a, b, c, d, e, f) {
    __p && __p();
    a = {
      _unavailableBitrate: -1,
      _networkFeatureCount: 8,
      _labelBrackets: [
        '144p',
        '240p',
        '360p',
        '480p',
        '720p',
        '1080p',
        '1440p',
        '2160p',
        '4320p',
      ],
      _reasonGetAction: 'get_action',
      _reasonGetPolicy: 'get_policy',
      _reasonPutExperience: 'put_exp',
      getQualityLabelBracket: function (a, b) {
        __p && __p();
        b === void 0 && (b = !1);
        if (b) {
          if (!a.endsWith('p') || a == 'p') return null;
          b = a.replace(/p$/, '');
          if (isNaN(b)) return null;
          b = parseInt(b, 10);
          if (b <= 0 || b >= 4320) return null;
          if (b < 162) return 'label_0';
          else if (b < 210) return 'label_1';
          else if (b < 315) return 'label_2';
          else if (b < 420) return 'label_3';
          else if (b < 590) return 'label_4';
          else if (b < 780) return 'label_5';
          else if (b < 1260) return 'label_6';
          else if (b < 1520) return 'label_7';
          else if (b < 1880) return 'label_8';
          else return 'label_9';
        }
        var c = parseInt(a, 10);
        return isNaN(c) || c <= 0
          ? null
          : this._labelBrackets.find(function (a) {
              return c <= parseInt(a, 10);
            }) || this._labelBrackets[this._labelBrackets.length - 1];
      },
      getRlAbrFeaturesDeprecated: function (a, b, c, d, e, f) {
        __p && __p();
        var g = [];
        for (var h = 0; h < b.length; h++) {
          var i = this.getQualityLabelBracket(b[h].fbQualityLabel);
          if (!i) continue;
          var j = b[h].bandwidth;
          (!j || j <= 0) && (j = 1e9);
          g.push({ label: i, bitrate: j });
        }
        i = this._labelBrackets.map(function (a) {
          var b = g.find(function (b) {
            return b.label === a;
          });
          return b ? b.bitrate : 1e9;
        });
        var k = null;
        j = 0;
        h = 0;
        c &&
          ((k = this.getQualityLabelBracket(c.fbQualityLabel)),
          (j = c.bandwidth || 0),
          (h = c.isHVQ ? 1 : 0));
        b = this._labelBrackets.map(function (a) {
          return a === k ? 1 : 0;
        });
        c = a.currentTime || 0;
        a = a.duration || 0;
        a = Math.max(a - c, 0) * 1e3;
        c = [].concat(j, b, h, e, a);
        j = [];
        for (var b = 0; b < this._networkFeatureCount; b++)
          b < d.length
            ? j.push(d[d.length - b - 1][0] || 0, d[d.length - b - 1][1] || 0)
            : j.push(0, 0);
        h = [].concat(i, c, j, f);
        return h;
      },
      getRlAbrAvailableBitrates: function (a) {
        var b = [];
        for (var c = 0; c < a.length; c++) b.push(a[c].bandwidth);
        return b;
      },
      getRemainingPlayback: function (a) {
        var b = a.duration;
        a = a.currentTime;
        b = !isNaN(b) && !isNaN(a) && b > a ? (b - a) * 1e3 : -1;
        return b;
      },
      getRlAbrFeatures: function (a, b, c, d, e) {
        __p && __p();
        b = this.getRemainingPlayback(a);
        var f = [];
        if (e) {
          e.update(a.currentTime, Date.now());
          a = e.getWatchTimeSinceLastReport();
          var g = e.getStallCountSinceLastReport();
          e = e.getStallTimeSinceLastReport();
          f.push(a);
          f.push(g);
          f.push(e);
        } else f.push(-1, -1, -1);
        return [].concat(d, c, b, f);
      },
      getRlAbrShortFeatures: function (a, b, c, d) {
        __p && __p();
        var e = Array(10).fill(this._unavailableBitrate),
          f = !1;
        for (var g = b.length - 1; g >= 0; g--) {
          var h = this.getQualityLabelBracket(b[g].fbQualityLabel, !0);
          if (h) {
            f = !0;
            h = parseInt(h.substr(-1, 1), 10);
            e[h] = b[g].bandwidth;
          }
        }
        if (!f) return null;
        h = this.getRemainingPlayback(a);
        return [].concat(d, c, h, e);
      },
      _getRlQuery: function (a, b) {
        if (b.length === 0) return [];
        if (!a) a = b;
        else if (b.length !== a.length) return [];
        var c = b[b.length - 1] - a[a.length - 1];
        return [].concat(a.slice(0, a.length - 1), b.slice(0, b.length - 1), c);
      },
      genRlAbrShortFeaturesRecommendation: function (a, c, d) {
        var e = b('XRlAbrController')
          .getURIBuilder()
          .setString('reason', this._reasonGetAction)
          .setInt('id', d)
          .setFloatVector('query', [a[0], a[1], a[2]]);
        e = self._setAvailableBitrateFeatures(a, e);
        e = e.getURI();
        return new (b('Promise'))(function (a, d) {
          new (b('AsyncRequest'))(e)
            .setMethod('GET')
            .setURI(e)
            .setReadOnly(!0)
            .setHandler(function (b) {
              b = b.payload.data;
              a(b || []);
            })
            .setErrorHandler(function (a) {
              d([]);
            })
            .setTimeoutHandler(c, function (a) {
              d([]);
            })
            .send();
        });
      },
      genRlAbrRecommendationDeprecated: function (a, c, d, e) {
        a = this._getRlQuery(a, c);
        var f = b('XRlAbrController')
          .getURIBuilder()
          .setString('reason', this._reasonGetAction)
          .setInt('id', e)
          .setFloatVector('query', a)
          .getURI();
        return new (b('Promise'))(function (a, c) {
          new (b('AsyncRequest'))(f)
            .setMethod('GET')
            .setURI(f)
            .setReadOnly(!0)
            .setHandler(function (b) {
              b = b.payload.data;
              a(b || []);
            })
            .setErrorHandler(function (a) {
              c([]);
            })
            .setTimeoutHandler(d, function (a) {
              c([]);
            })
            .send();
        });
      },
      genRlAbrRecommendation: function (a, c, d, e) {
        var f = b('XRlAbrController')
          .getURIBuilder()
          .setString('reason', this._reasonGetAction)
          .setString('session_id', e)
          .setFloatVector('query', a)
          .setFloatVector('bitrates', c);
        f = f.getURI();
        return new (b('Promise'))(function (a, c) {
          new (b('AsyncRequest'))(f)
            .setMethod('GET')
            .setURI(f)
            .setReadOnly(!0)
            .setHandler(function (b) {
              b = b.payload.data;
              a(b || []);
            })
            .setErrorHandler(function (a) {
              c([]);
            })
            .setTimeoutHandler(d, function (a) {
              c([]);
            })
            .send();
        });
      },
      fetchRlAbrModel: function (a, c, d) {
        var e = b('XRlAbrController')
          .getURIBuilder()
          .setString('reason', this._reasonGetPolicy)
          .setString('session_id', a)
          .setString('smc_tier', c);
        e = e.getURI();
        return new (b('Promise'))(function (a, c) {
          new (b('AsyncRequest'))(e)
            .setMethod('GET')
            .setURI(e)
            .setReadOnly(!0)
            .setHandler(function (b) {
              var c = b.payload.model_id,
                d = b.payload.weights;
              b = b.payload.biases;
              a([c, d, b] || []);
            })
            .setErrorHandler(function (a) {
              c([]);
            })
            .setTimeoutHandler(d, function (a) {
              c([]);
            })
            .send();
        });
      },
      _setAvailableBitrateFeatures: function (a, b) {
        for (var c = 0; c < 10; c++)
          a[c + 3] !== this._unavailableBitrate &&
            (b = b.setFloat('label_' + c, a[c + 3]));
        return b;
      },
      putExperience: function (a, c, d, e, f, g, h, i, j, k) {
        var l = b('XRlAbrController')
          .getURIBuilder()
          .setString('reason', this._reasonPutExperience)
          .setString('smc_tier', c)
          .setString('model_id', d)
          .setInt('mdp_step', e)
          .setString('session_id', a)
          .setFloatVector('query', f)
          .setFloatVector('bitrates', g)
          .setFloat('prev_reward', h)
          .setInt('action', i)
          .setFloatVector('action_prob', j);
        l = l.getURI();
        return new (b('Promise'))(function (a, c) {
          new (b('AsyncRequest'))(l)
            .setMethod('GET')
            .setURI(l)
            .setReadOnly(!0)
            .setHandler(function (b) {
              a([]);
            })
            .setErrorHandler(function (a) {
              c([]);
            })
            .setTimeoutHandler(k, function (a) {
              c([]);
            })
            .send();
        });
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'RlAlgebra',
  ['Random'],
  function (a, b, c, d, e, f) {
    __p && __p();
    a = {
      matrixMultiply: function (a, b) {
        __p && __p();
        if (a.length == 0 || a[0].length == 0 || b.length == 0)
          throw new Error('Matrix or vector has 0 size.');
        var c = [];
        for (var d = 0; d < a.length; d++) {
          if (a[d].length !== b.length)
            throw new Error('Matrix and vector not compatible');
          var e = 0;
          for (var f = 0; f < b.length; f++) e += a[d][f] * b[f];
          c.push(e);
        }
        return c;
      },
      vectorAdd: function (a, b) {
        if (a.length !== b.length)
          throw new Error('Two vectors have different length');
        var c = [];
        for (var d = 0; d < a.length; d++) c.push(a[d] + b[d]);
        return c;
      },
      vectorRelu: function (a) {
        var b = [];
        for (var c = 0; c < a.length; c++) a[c] > 0 ? b.push(a[c]) : b.push(0);
        return b;
      },
      vectorSoftmax: function (a) {
        __p && __p();
        if (a.length == 0) throw new Error('vector length is 0');
        var b = [],
          c = 0,
          d = Math.max.apply(Math, a);
        for (var e = 0; e < a.length; e++) {
          var f = Math.exp(a[e] - d);
          b.push(f);
          c += f;
        }
        for (var f = 0; f < a.length; f++) b[f] /= c;
        return b;
      },
      vectorSample: function (a, c) {
        __p && __p();
        c === void 0 && (c = 1e-6);
        if (a.length == 0) throw new Error('vector length is 0');
        var d = 1 / c,
          e = [],
          f = 0;
        for (var g = 0; g < a.length; g++) (f += a[g]), e.push(f);
        if (Math.abs(e[e.length - 1] - 1) > c)
          throw new Error('probability distribution does not sum to 1');
        g = (Math.floor(b('Random').random() * d) + 1) / d;
        f = -1;
        for (var a = 0; a < e.length; a++)
          if (g <= e[a]) {
            f = a;
            break;
          }
        return f;
      },
      policyInference: function (a, b, c, d) {
        __p && __p();
        var e = [];
        for (var f = 0; f < d.length; f++) {
          var g = [].concat(c, d[f]);
          g = g;
          for (var h = 0; h < a.length; h++)
            (g = this.matrixMultiply(a[h], g)),
              (g = this.vectorAdd(g, b[h])),
              h < a.length - 1 && (g = this.vectorRelu(g));
          e.push(g[0]);
        }
        h = this.vectorSoftmax(e);
        return h;
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'XVideoDataAsyncController',
  ['XController'],
  function (a, b, c, d, e, f) {
    e.exports = b('XController').create('/video/video_data_async/', {
      video_id: { type: 'String', required: !0 },
      width: { type: 'Int' },
      height: { type: 'Int' },
      scrubbing_preference: { type: 'Int' },
      source: { type: 'String' },
      preferred_projection: { type: 'Enum', enumType: 1 },
      supports_html5_video: { type: 'Bool', defaultValue: !0 },
      is_ad: { type: 'Bool', defaultValue: !1 },
      force_flash: { type: 'Bool', defaultValue: !1 },
      is_omnistab_preview_select_revert: { type: 'Bool', defaultValue: !1 },
      allow_dash_prefetch: { type: 'Bool', defaultValue: !1 },
      force_hd: { type: 'Bool', defaultValue: !1 },
    });
  },
  null
);
__d(
  'VideoPlayerMetaData',
  [
    'regeneratorRuntime',
    'Promise',
    'AsyncRequest',
    'AsyncResponse',
    'TimeSlice',
    'VideoData',
    'XVideoDataAsyncController',
    'isHTML5VideoImplementationUnavailable',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = {},
      h = 12e4;
    function i(a) {
      this.videoID = a;
    }
    i.prototype.getVideoID = function () {
      return this.videoID;
    };
    i.prototype.genVideoData = function (a, c) {
      __p && __p();
      var d;
      return b('regeneratorRuntime').async(
        function (e) {
          __p && __p();
          while (1)
            switch ((e.prev = e.next)) {
              case 0:
                a === void 0 && (a = {});
                e.prev = 1;
                d = this.$1;
                (!d || a.forceRefetch) &&
                  (this.$2 && (clearTimeout(this.$2), (this.$2 = null)),
                  (d = this.$1 = this.$3(a)),
                  (this.$2 = setTimeout(
                    b('TimeSlice').guard(
                      function () {
                        (this.$1 = null), c();
                      }.bind(this),
                      'VideoPlayerMetaData cacheTimeout',
                      { propagationType: b('TimeSlice').PropagationType.ORPHAN }
                    ),
                    a.cacheTimeout || h
                  )));
                e.next = 6;
                return b('regeneratorRuntime').awrap(d);
              case 6:
                return e.abrupt('return', e.sent);
              case 9:
                e.prev = 9;
                e.t0 = e['catch'](1);
                throw e.t0;
              case 12:
              case 'end':
                return e.stop();
            }
        },
        null,
        this,
        [[1, 9]]
      );
    };
    i.prototype.$3 = function (a) {
      __p && __p();
      var c = b('XVideoDataAsyncController')
          .getURIBuilder()
          .setString('video_id', this.videoID)
          .setBool(
            'supports_html5_video',
            !b('isHTML5VideoImplementationUnavailable')(!0)
          ),
        d = a.forceFlash,
        e = a.allowDashPrefetch;
      a = a.forceHD;
      d !== undefined && (c = c.setBool('force_flash', d));
      e !== undefined && (c = c.setBool('allow_dash_prefetch', e));
      a !== undefined && (c = c.setBool('force_hd', a));
      var f = c.getURI();
      return new (b('Promise'))(function (a, c) {
        new (b('AsyncRequest'))(f)
          .setMethod('GET')
          .setURI(f)
          .setReadOnly(!0)
          .setAllowCrossPageTransition(!0)
          .setHandler(function (d) {
            d = d.payload;
            !d.error ? a(new (b('VideoData'))(d)) : c(d.error);
          })
          .setErrorHandler(function (a) {
            c(a.getErrorDescription());
          })
          .send();
      });
    };
    i.get = function (a) {
      g[a] || (g[a] = new i(a));
      return g[a];
    };
    i.genVideoData = function (a, c, d) {
      return b('regeneratorRuntime').async(
        function (e) {
          while (1)
            switch ((e.prev = e.next)) {
              case 0:
                c === void 0 && (c = {});
                d === void 0 && (d = function () {});
                e.next = 4;
                return b('regeneratorRuntime').awrap(
                  i.get(a).genVideoData(c, d)
                );
              case 4:
                return e.abrupt('return', e.sent);
              case 5:
              case 'end':
                return e.stop();
            }
        },
        null,
        this
      );
    };
    e.exports = i;
  },
  null
);
__d(
  'VideoPlayerUtils',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    a = {
      getBufferedAheadOf: function (a) {
        var b = 1 / 60,
          c = a.currentTime;
        a = a.buffered;
        for (var d = 0; d < a.length; d++) {
          var e = a.start(d) - b,
            f = a.end(d) + b;
          if (c >= e && c <= f) return Math.max(a.end(d) - c, 0);
        }
        return 0;
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'VideoPushParametersHelper',
  ['URI', 'VideoPlayerShakaGlobalConfig'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = /(.*)\.(xx|fna)\.fbcdn\.net/;
    function a(a) {
      this.$1 = new (b('URI'))(a);
      return this;
    }
    a.prototype.setStreamEndOffset = function (a) {
      this.$2 = Math.min(
        Math.floor(a) + 1,
        b('VideoPlayerShakaGlobalConfig').getNumber(
          'live_max_segments_to_push',
          2
        )
      );
      this.$4 = Math.floor(a) + 1;
      return this;
    };
    a.prototype.setSegmentStartTime = function (a) {
      this.$3 = a;
      return this;
    };
    a.prototype.setPushVideoRepresentationID = function (a) {
      this.$5 = a;
      return this;
    };
    a.prototype.setPushAudioRepresentationID = function (a) {
      this.$6 = a;
      return this;
    };
    a.prototype.setUseLongCacheForManifest = function (a) {
      this.$7 = a;
      return this;
    };
    a.prototype.getURL = function () {
      var a = this.getPushQueryParameters();
      a.forEach(
        function (a, b) {
          this.$1.addQueryData(b, a);
        }.bind(this)
      );
      return this.$1.toString();
    };
    a.prototype.getPushQueryParameters = function () {
      var a = new Map(),
        c = g.test(this.$1.toString());
      c &&
        b('VideoPlayerShakaGlobalConfig').getBool(
          'live_send_push_headers',
          !0
        ) &&
        (this.$2 != null && a.set('_nc_p_n', this.$2),
        this.$3 != null
          ? a.set('_nc_p_ts', this.$3)
          : this.$4 != null && a.set('_nc_p_o', this.$4),
        this.$5 != null &&
          this.$6 != null &&
          (a.set('_nc_p_rid', this.$5), a.set('_nc_p_arid', this.$6)),
        this.$7 && a.set('_nc_nc', '1'));
      return a;
    };
    a.prototype.getSegmentsToPush = function () {
      return this.$2;
    };
    a.prototype.getSegmentStartTime = function () {
      return this.$3;
    };
    a.prototype.getSegmentOffset = function () {
      return this.$4;
    };
    a.prototype.getPushVideoRepresentationID = function () {
      return this.$5;
    };
    a.prototype.getPushAudioRepresentationID = function () {
      return this.$6;
    };
    a.prototype.getUseLongCacheForManifest = function () {
      return this.$7;
    };
    e.exports = a;
  },
  null
);
__d(
  'VideoWatchTimeTracker',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a) {
      (this.$1 = a),
        (this.$2 = 0),
        (this.$3 = 0),
        (this.$4 = 0),
        (this.$5 = 0),
        (this.$6 = 0),
        (this.$7 = 0),
        (this.$8 = 0),
        (this.$9 = 0),
        (this.$10 = null),
        (this.STATE_PAUSE = 'pause'),
        (this.STATE_PLAYING = 'playing'),
        (this.STATE_BUFFERING_START = 'buffering_start'),
        (this.STATE_BUFFERING_END = 'buffering_end');
    }
    a.prototype.$11 = function (a) {
      var b = Math.max(a - this.$8, 0);
      this.$3 += b;
      this.$2 += b;
      this.$8 = a;
    };
    a.prototype.$12 = function (a) {
      if (this.$9 > 0) {
        var b = Math.max(a - this.$9, 0);
        this.$7 += b;
        this.$6 += b;
        this.$9 = a;
      }
    };
    a.prototype.pause = function (a) {
      this.$11(a), (this.$10 = this.STATE_PAUSE);
    };
    a.prototype.playing = function (a) {
      (this.$8 = a), (this.$10 = this.STATE_PLAYING);
    };
    a.prototype.bufferingStart = function (a, b) {
      this.$10 != this.STATE_PAUSE &&
        (this.$11(a), (this.$9 = b), (this.$5 += 1), (this.$4 += 1)),
        (this.$10 = this.STATE_BUFFERING_START);
    };
    a.prototype.bufferingEnd = function (a, b) {
      (this.$8 = a),
        this.$12(b),
        (this.$10 = this.STATE_BUFFERING_END),
        (this.$9 = 0);
    };
    a.prototype.update = function (a, b) {
      this.$10 == this.STATE_PLAYING
        ? this.$11(a)
        : this.$10 == this.STATE_BUFFERING_START && this.$12(b);
    };
    a.prototype.getWatchTimeSinceLastReport = function () {
      var a = this.$3;
      this.$3 = 0;
      return a;
    };
    a.prototype.getTotalWatchTime = function () {
      return this.$2;
    };
    a.prototype.getStallTimeSinceLastReport = function () {
      var a = this.$7;
      this.$7 = 0;
      return a;
    };
    a.prototype.getTotalStallTime = function () {
      return this.$6;
    };
    a.prototype.getStallCountSinceLastReport = function () {
      var a = this.$5;
      this.$5 = 0;
      return a;
    };
    a.prototype.getTotalStallCount = function () {
      return this.$4;
    };
    a.prototype.getGuid = function () {
      return this.$1;
    };
    e.exports = a;
  },
  null
);
__d(
  'AbrEvaluationSignal',
  ['EventEmitter', 'EventListener', 'SubscriptionsHandler', 'VideoPlayerUtils'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g;
    c = babelHelpers.inherits(a, b('EventEmitter'));
    g = c && c.prototype;
    function a(a, c, d, e) {
      __p && __p();
      g.constructor.call(this);
      this.$AbrEvaluationSignal3 = !0;
      this.$AbrEvaluationSignal4 = !1;
      this.$AbrEvaluationSignal5 = 0;
      this.$AbrEvaluationSignal6 = 0;
      this.$AbrEvaluationSignal7 = 0;
      this.$AbrEvaluationSignal10 = a;
      this.$AbrEvaluationSignal1 = c;
      this.$AbrEvaluationSignal11 = d;
      this.$AbrEvaluationSignal8 = e;
      this.$AbrEvaluationSignal9 = new (b('SubscriptionsHandler'))();
      a = [
        b('EventListener').listen(
          this.$AbrEvaluationSignal11,
          'adaptation',
          this.$AbrEvaluationSignal12.bind(this)
        ),
        b('EventListener').listen(
          this.$AbrEvaluationSignal11,
          'trackschanged',
          this.$AbrEvaluationSignal13.bind(this)
        ),
        b('EventListener').listen(
          this.$AbrEvaluationSignal1.getEstimator(),
          'bandwidth',
          this.$AbrEvaluationSignal14.bind(this)
        ),
      ];
      e.evaluateAbrOnFetchEnd &&
        a.push(
          b('EventListener').listen(
            this.$AbrEvaluationSignal11,
            'fetch_end',
            this.$AbrEvaluationSignal15.bind(this)
          )
        );
      (c = this.$AbrEvaluationSignal9).addSubscriptions.apply(c, a);
    }
    a.prototype.notifySwitch = function () {
      this.$AbrEvaluationSignal4 = !0;
    };
    a.prototype.destroy = function () {
      this.$AbrEvaluationSignal9.release(),
        this.$AbrEvaluationSignal9.engage(),
        this.removeAllListeners();
    };
    a.prototype.$AbrEvaluationSignal12 = function () {
      (this.$AbrEvaluationSignal4 = !1),
        (this.$AbrEvaluationSignal7 = Date.now());
    };
    a.prototype.$AbrEvaluationSignal16 = function () {
      return (
        this.$AbrEvaluationSignal8.useLowBufferVelocityInterval &&
        b('VideoPlayerUtils').getBufferedAheadOf(this.$AbrEvaluationSignal10) <
          this.$AbrEvaluationSignal8.lowBufferVelocityIntervalBufferThreshold
      );
    };
    a.prototype.$AbrEvaluationSignal15 = function () {
      var a = this.$AbrEvaluationSignal5;
      this.$AbrEvaluationSignal5 = Date.now();
      this.$AbrEvaluationSignal17(
        this.$AbrEvaluationSignal8.ignoreRecentBandwidthEvalOnFetchEnd
          ? a
          : this.$AbrEvaluationSignal6
      );
    };
    a.prototype.$AbrEvaluationSignal14 = function () {
      this.$AbrEvaluationSignal17(this.$AbrEvaluationSignal6);
    };
    a.prototype.$AbrEvaluationSignal17 = function (a) {
      if (
        this.$AbrEvaluationSignal3 &&
        this.$AbrEvaluationSignal8.ignoreTimeLimitForInitialSample
      ) {
        this.$AbrEvaluationSignal3 = !1;
        this.$AbrEvaluationSignal18();
        return;
      }
      var b = this.$AbrEvaluationSignal8.minEvalInterval,
        c = this.$AbrEvaluationSignal8.minSwitchInterval;
      this.$AbrEvaluationSignal16() &&
        (b = c = this.$AbrEvaluationSignal8.lowBufferVelocityAbrInterval);
      !this.$AbrEvaluationSignal4 &&
        Date.now() >= a + b &&
        Date.now() >= this.$AbrEvaluationSignal7 + c &&
        this.$AbrEvaluationSignal18();
    };
    a.prototype.$AbrEvaluationSignal13 = function () {
      this.$AbrEvaluationSignal18();
    };
    a.prototype.$AbrEvaluationSignal18 = function () {
      this.emit('evaluate'), (this.$AbrEvaluationSignal6 = Date.now());
    };
    e.exports = a;
  },
  null
);
__d(
  'MosUtils',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = {
      getQualityLabel: function (a, b) {
        if (a === 0 || b === 0) return 0;
        if (a < b) {
          var c = a;
          a = b;
          b = c;
        }
        c = a / b;
        return c > 16 / 9 ? Math.round(a / (16 / 9)) : b;
      },
      getMosValue: function (a, b) {
        __p && __p();
        var c = null,
          d = null,
          e = null,
          f = null;
        for (var g = 0; g < a.length; g++) {
          var h = a[g].qualityLabel;
          if (h <= b) (e = a[g].mosValue), (c = h);
          else {
            f = a[g].mosValue;
            d = h;
            break;
          }
        }
        if (c === null && d === null) return 0;
        else if (c === null && f !== null) return f;
        else if (d === null && e !== null) return e;
        else if (f !== null && e !== null && c !== null && d !== null) {
          h = e + ((b - c) * (f - e)) / (d - c);
          return h < 0 ? 0 : h > 100 ? 100 : h;
        }
        return 0;
      },
      parsePlaybackMos: function (a) {
        __p && __p();
        a = a.split(',');
        var b = [];
        for (var c = 0; c < a.length; c++) {
          var d = a[c].split(':');
          if (d.length !== 2) return null;
          var e = Number(d[0]);
          d = Number(d[1]);
          if (isNaN(e) || isNaN(d)) return null;
          b.push({ qualityLabel: e, mosValue: d });
        }
        return b;
      },
      filterTracksWithExpensiveMos: function (a, b, c, d, e, f) {
        __p && __p();
        if (a.length < 2) return a;
        var h = a.map(function (a) {
            return {
              track: a,
              mosValue: a.playbackResolutionMos
                ? g.getMosValue(
                    a.playbackResolutionMos,
                    g.getQualityLabel(b, c)
                  )
                : -1,
            };
          }),
          i = [],
          j = e;
        for (var k = h.length - 1; k > 0; k--) {
          if (h[k].mosValue === -1 || h[k - 1].mosValue === -1) return a;
          var l = h[k].track.bandwidth || -1,
            m = h[k - 1].track.bandwidth || -1;
          if (l === -1 || m === -1) return a;
          if (h[k].mosValue < h[k - 1].mosValue && l >= m) continue;
          l =
            h[k - 1].track.bandwidth !== null
              ? h[k].mosValue - h[k - 1].mosValue
              : Infinity;
          if (l <= j && h[k].track.bandwidth && d / h[k].track.bandwidth <= f) {
            j -= l;
            continue;
          } else j = e;
          i.push(h[k].track);
        }
        i.push(h[0].track);
        i.reverse();
        return i;
      },
    };
    e.exports = g;
  },
  null
);
__d(
  'BlobFactory',
  ['emptyFunction'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g;
    function h() {
      try {
        new a.Blob(), (g = !0);
      } catch (a) {
        g = !1;
      }
    }
    var i =
      a.BlobBuilder ||
      a.WebKitBlobBuilder ||
      a.MozBlobBuilder ||
      a.MSBlobBuilder;
    a.Blob
      ? (c = {
          getBlob: function (b, c) {
            __p && __p();
            b = b || [];
            c = c || {};
            g === undefined && h();
            if (g) return new a.Blob(b, c);
            else {
              var d = new i();
              for (var e = 0; e < b.length; e++) d.append(b[e]);
              return d.getBlob(c.type);
            }
          },
          isSupported: b('emptyFunction').thatReturnsTrue,
        })
      : (c = {
          getBlob: function () {},
          isSupported: b('emptyFunction').thatReturnsFalse,
        });
    e.exports = c;
  },
  null
);
__d(
  'filterObject',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = Object.prototype.hasOwnProperty;
    function a(a, b, c) {
      if (!a) return null;
      var d = {};
      for (var e in a) g.call(a, e) && b.call(c, a[e], e, a) && (d[e] = a[e]);
      return d;
    }
    e.exports = a;
  },
  null
);
__d(
  'WebWorker',
  [
    'invariant',
    'BlobFactory',
    'Bootloader',
    'EventListener',
    'SubscriptionsHandler',
    'URI',
    'WebWorkerConfig',
    'XHRRequest',
    'areSameOrigin',
    'destroyOnUnload',
    'emptyFunction',
    'filterObject',
    'getCrossOriginTransport',
    'memoize',
    'performanceNow',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h = a.URL || a.webkitURL;
    function i(a) {
      (this.$1 = !1),
        (this.$2 = null),
        (this.$3 = a),
        (this.__worker = null),
        (this.$4 = b('emptyFunction')),
        (this.$5 = b('emptyFunction')),
        (this.$6 = []),
        (this.$7 = []),
        (this.$8 = !1),
        (this.$9 = new (b('SubscriptionsHandler'))()),
        b('destroyOnUnload')(
          function () {
            this.$8 || this.terminate();
          }.bind(this)
        ),
        this.$10('constructed');
    }
    i.prototype.setMessageHandler = function (a) {
      this.$4 = a || b('emptyFunction');
      return this;
    };
    i.prototype.setErrorHandler = function (a) {
      this.$5 = a || b('emptyFunction');
      return this;
    };
    i.prototype.postMessage = function (a, b) {
      __p && __p();
      this.isCurrentState('constructed') && g(0, undefined);
      this.isCurrentState('terminated') && g(0, undefined);
      if (this.isCurrentState('preparing')) {
        this.$6.push(this.postMessage.bind(this, a, b));
        return this;
      }
      a = { type: 'message', message: a };
      b
        ? this.getInterfaceableWorker().postMessage(a, b)
        : this.getInterfaceableWorker().postMessage(a);
      return this;
    };
    i.prototype.$11 = function () {
      this.isCurrentState('terminated') ||
        (this.$10('terminated'),
        (this.__worker = null),
        this.$12(),
        (this.$6 = []),
        (this.$7 = []));
    };
    i.prototype.terminate = function () {
      this.isCurrentState('executing') && this.__worker.terminate();
      this.$11();
      return this;
    };
    i.prototype.execute = function () {
      this.isCurrentState('terminated') && g(0, undefined);
      if (['preparing', 'executing'].some(this.isCurrentState, this))
        return this;
      this.$10('preparing');
      i.prepareResource(this.$3, this.$13.bind(this));
      return this;
    };
    i.prototype.setAllowCrossPageTransition = function (a) {
      this.$8 = a;
      return this;
    };
    i.prototype.isCurrentState = function (a) {
      i.states.includes(a) || g(0, undefined, a);
      return a === this.$2;
    };
    i.prototype.$13 = function () {
      __p && __p();
      this.isCurrentState('executing') && g(0, undefined);
      if (this.isCurrentState('terminated')) return;
      this.$3.sameOriginURL || this.$3.source || g(0, undefined);
      this.$3.sameOriginURL
        ? (this.__worker = this.constructWorker(this.$3.sameOriginURL))
        : ((this.__worker = this.constructWorker(i.evalWorkerURL)),
          this.getInterfaceableWorker().postMessage(this.$3.source));
      this.$14('ping', Date.now());
      if (this.$3.dynamicModules)
        try {
          this.$14('defineModules', this.$3.dynamicModules);
        } catch (a) {
          this.terminate();
          this.$15('define_error', { message: a.message });
          throw a;
        }
      this.$16();
      this.$10('executing');
      this.$6.forEach(function (a) {
        return a();
      });
      this.$6 = null;
      this.$7.forEach(function (a) {
        return a();
      });
      this.$7 = null;
    };
    i.prototype.$12 = function () {
      this.$9.release();
    };
    i.prototype.$14 = function (a) {
      for (
        var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
        d < b;
        d++
      )
        c[d - 1] = arguments[d];
      this.getInterfaceableWorker().postMessage({ type: a, args: c });
    };
    i.prototype.$15 = function (event, a) {
      i.$15(
        event,
        this.$3.name,
        babelHelpers['extends']({}, a, {
          cross_page_transition: !!this.$8,
          state: this.$2,
        })
      );
    };
    i.$17 = function () {
      return Object.keys(
        b('filterObject')(
          {
            object_url: i.$18(),
            eval_url: n(),
            data_url: i.$19(),
            worker: i.isSupported(),
            transferables: i.areTransferablesSupported(),
          },
          function (a) {
            return !!a;
          }
        )
      );
    };
    i.prototype.$16 = function () {
      this.$9.addSubscriptions(
        b('EventListener').listen(
          this.getInterfaceableWorker(),
          'message',
          this.$20.bind(this)
        ),
        b('EventListener').listen(this.__worker, 'error', this.$21.bind(this))
      );
    };
    i.prototype.$21 = function (a) {
      var b = this.$5(a);
      !b &&
        !a.defaultPrevented &&
        this.$15('exception', { message: a.message });
    };
    i.prototype.$20 = function (event) {
      __p && __p();
      var b = event.data;
      switch (b.type) {
        case 'message':
          this.$4(b.message);
          break;
        case 'pong':
          this.$1 = !0;
          this.$15('executed', {
            dt: Math.floor(b.args[1] - b.args[0]),
            bytes: this.$3.source ? this.$3.source.length : -1,
          });
          break;
        case 'terminate':
          this.terminate();
          break;
        case 'haste-error':
          this.terminate();
          this.$15('haste_error', { message: b.message });
          break;
        case 'console':
          var c = b.args.shift();
          ['log', 'error', 'info', 'debug', 'warn'].includes(c) ||
            g(0, undefined, c);
          a.console[c].apply(a.console, b.args);
          break;
      }
    };
    i.prototype.$10 = function (a) {
      i.states.includes(a) || g(0, undefined, a),
        this.$15('transition', { next_state: a }),
        (this.$2 = a);
    };
    i.prepareResource = function (c, d) {
      __p && __p();
      d = d || b('emptyFunction');
      c.sameOriginURL || c.url || c.source || g(0, undefined);
      !i.isSupported() && g(0, undefined);
      if (c.sameOriginURL) d();
      else if (
        c.url &&
        b('areSameOrigin')(
          new (b('URI'))(c.url),
          new (b('URI'))(a.location.href)
        )
      )
        (c.sameOriginURL = c.url), d();
      else if (c.source) i.$22() && (c.sameOriginURL = i.$23(c.source)), d();
      else if (!c.loading) {
        var e = b('performanceNow')();
        c.loading = [d];
        i.$24(c.url, function (a) {
          a
            ? ((c.source = a),
              i.$22() && (c.sameOriginURL = i.$23(a)),
              i.$15('prepared', c.name, {
                dt: Math.floor(b('performanceNow')() - e),
                bytes: a.length,
              }))
            : i.$15('failed', c.name, {
                dt: Math.floor(b('performanceNow')() - e),
                bytes: 0,
              }),
            c.loading.forEach(function (a) {
              return a();
            }),
            (c.loading = !1);
        });
      } else c.loading.push(d);
      return c;
    };
    i.releaseResource = function (a) {
      a.sameOriginURL.indexOf('blob:') === 0 &&
        (h.revokeObjectURL && h.revokeObjectURL(a.sameOriginURL),
        (a.sameOriginURL = null));
      return a;
    };
    i.isSupported = function () {
      return m && (i.$22() || n());
    };
    i.isMessageChannelSupported = function () {
      return i.areTransferablesSupported() && !!a.MessageChannel;
    };
    i.areTransferablesSupported = function () {
      return i.isSupported() && o();
    };
    i.$24 = function (a, c) {
      new (b('XHRRequest'))(a)
        .setTransportBuilder(b('getCrossOriginTransport'))
        .setMethod('GET')
        .setResponseHandler(function (a) {
          c(a);
        })
        .setErrorHandler(c.bind(null, null))
        .send();
    };
    i.$23 = function (a) {
      i.$22() || g(0, undefined);
      if (i.$18()) {
        var c = b('BlobFactory').getBlob([a], {
          type: 'application/javascript',
        });
        return h.createObjectURL(c);
      }
      if (i.$19())
        return 'data:application/javascript,' + encodeURIComponent(a);
    };
    i.$18 = function () {
      return b('BlobFactory').isSupported() && k();
    };
    i.$19 = function () {
      return l();
    };
    i.$22 = function () {
      return i.$18() || i.$19();
    };
    i.$15 = function (event, a, c) {
      if (!b('WebWorkerConfig').logging.enabled) return;
      b('Bootloader').loadModules(
        ['BanzaiLogger'],
        function (d) {
          d.log(
            b('WebWorkerConfig').logging.config,
            babelHelpers['extends']({}, c, {
              features_array: i.$17(),
              event: event,
              resource: a,
            })
          );
        },
        'WebWorker'
      );
    };
    i.prototype.constructWorker = function (a) {
      return j(a);
    };
    i.prototype.$25 = function (a, b) {
      if (this.isCurrentState('preparing')) {
        this.$7.push(this.$25.bind(this, a, b));
        return;
      }
      this.getInterfaceableWorker().postMessage(
        { type: 'port', message: a },
        b
      );
    };
    i.prototype.createMessageChannel = function (a, b) {
      var c = new MessageChannel();
      this.$25(a, [c.port2].concat(b || []));
      c.port1.start();
      return c.port1;
    };
    i.prototype.getInterfaceableWorker = function () {
      return this.__worker;
    };
    function j(b) {
      return new a.Worker(b);
    }
    var k = b('memoize')(function () {
        __p && __p();
        var a;
        if (!h || !h.createObjectURL) return !1;
        try {
          a = h.createObjectURL(
            b('BlobFactory').getBlob([''], { type: 'application/javascript' })
          );
          var c = j(a);
          c.terminate();
          c = !0;
        } catch (a) {
          c = !1;
        } finally {
          h.revokeObjectURL && h.revokeObjectURL(a);
        }
        return c;
      }),
      l = b('memoize')(function () {
        try {
          var a = j('data:application/javascript,');
          a.terminate();
          a = !0;
        } catch (b) {
          a = !1;
        }
        return a;
      }),
      m = !!a.Worker,
      n = b('memoize')(function () {
        try {
          var a = j(i.evalWorkerURL);
          a.terminate();
          a = !0;
        } catch (b) {
          a = !1;
        }
        return a;
      }),
      o = b('memoize')(function () {
        try {
          var a = j(i.evalWorkerURL),
            b = new ArrayBuffer(0);
          a.postMessage({ buffer: b }, [b]);
          a.terminate();
          b = !0;
        } catch (a) {
          b = !1;
        }
        return b;
      });
    i.states = ['constructed', 'preparing', 'executing', 'terminated'];
    i.evalWorkerURL = b('WebWorkerConfig').evalWorkerURL;
    e.exports = i;
  },
  null
);
__d(
  'WebWorkerTransferPromise',
  ['invariant', 'Promise'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    a = {
      expectPromise: function (a) {
        __p && __p();
        var c = new (b('Promise'))(function (b, c) {
          __p && __p();
          function d(event) {
            __p && __p();
            event instanceof MessageEvent || g(0, undefined);
            var e = event.data;
            e || g(0, undefined);
            var f = e.type;
            e = e.data;
            switch (f) {
              case 'resolve':
                b(e);
                break;
              case 'reject':
                c(e);
                break;
              default:
                throw new Error(
                  "Expected a WebWorkerTransferPromise, but didn't receive one."
                );
            }
            a.removeEventListener('message', d);
          }
          a.addEventListener('message', d);
        });
        return c;
      },
      sendPromise: function (a, b) {
        function c(b) {
          a.postMessage({ type: 'resolve', data: b });
        }
        function d(b) {
          a.postMessage({ type: 'reject', data: b });
        }
        b(c, d);
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'CEA608ExtractorWebWorker',
  ['CEA608ExtractorWorkerResource', 'WebWorker', 'WebWorkerTransferPromise'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = null;
    function h() {
      g ||
        (g = new (b('WebWorker'))(b('CEA608ExtractorWorkerResource'))
          .setAllowCrossPageTransition(!0)
          .execute());
      return g;
    }
    a = {
      isSupported: function () {
        return b('WebWorker').isMessageChannelSupported();
      },
      extract: function (a, c) {
        var d = h().createMessageChannel({ timescale: c, data: a });
        return b('WebWorkerTransferPromise')
          .expectPromise(d)
          ['finally'](function () {
            return d.close();
          });
      },
      prepare: function () {
        h();
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'concatArrayBuffer',
  [],
  function (a, b, c, d, e, f) {
    a = function (a, b) {
      var c = new Uint8Array(a.byteLength + b.byteLength);
      c.set(new Uint8Array(a), 0);
      c.set(new Uint8Array(b), a.byteLength);
      return c.buffer;
    };
    e.exports = a;
  },
  null
);
__d(
  'extractCEA608',
  ['CEA608ExtractorWebWorker', 'JSResource', 'gkx'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = null,
      h = b('gkx')(
        'AT7ZhC0bT2qaKKrqqUClaYz5cxMNLW9luFxLLcju-HrYV9zpmyoz0rLE7KCckHU0dv1poI1iLtE9paBLdvxf2Tz3pNXZ-MipnoYwsHvuNe_ilw'
      );
    function a(a, c) {
      if (h && b('CEA608ExtractorWebWorker').isSupported())
        return b('CEA608ExtractorWebWorker').extract(a, c);
      g ||
        (g = b('JSResource')('CEA608Extractor')
          .__setRef('extractCEA608')
          .load()
          .then(function (a) {
            return new a(c);
          }));
      return g.then(function (b) {
        return b.extract(a);
      });
    }
    a.prepare = function () {
      if (!h || !b('CEA608ExtractorWebWorker').isSupported()) return;
      b('CEA608ExtractorWebWorker').prepare();
    };
    e.exports = a;
  },
  null
);
__d(
  'BufferReplacementHelper',
  ['TaggedTimeRanges'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function g(a, b, c, d) {
      return a.startTime > b - c && a.endTime < b + d;
    }
    function h(a, b, c, d) {
      d = d.get(a.startTime);
      return !!d && c(b, d.id) > 0;
    }
    function i(a, b, c, d, e, f, i) {
      __p && __p();
      var j = i.thresholdBefore,
        k = i.thresholdAfter;
      i = i.wrapReplacementPastEnd;
      var l = [],
        m = !1;
      for (var c = c; c < a.length; c++) {
        g(a[c], b, j, k) && h(a[c], d, e, f) && l.push(a[c]);
        if (a[c].endTime > b + k) {
          m = !0;
          break;
        }
      }
      if (!m && i) {
        c = b + k - a[a.length - 1].endTime;
        for (var j = 0; j < a.length; j++) {
          c -= a[j].endTime - a[j].startTime;
          c >= 0 && h(a[j], d, e, f) && l.push(a[j]);
          if (a[j].endTime > b + k) break;
        }
      }
      return l;
    }
    function j(a, b, c, d, e, f, i) {
      var j = i.thresholdBefore,
        k = i.thresholdAfter;
      i.wrapReplacementPastEnd;
      i = [];
      for (var c = c - 1; c >= 0; c--) {
        g(a[c], b, j, k) && h(a[c], d, e, f) && i.push(a[c]);
        if (a[c].startTime < b - j) break;
      }
      return i;
    }
    function a(a, b, c, d, e, f, g) {
      a = [a, b, c, d, e, f, g];
      return i.apply(undefined, a).concat(j.apply(undefined, a));
    }
    e.exports = { getSegmentsToReplaceLowerQuality: a };
  },
  null
);
__d(
  'BufferVelocity',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a) {
      (this.$1 = []), (this.$2 = a * 1e3);
    }
    a.prototype.recordBufferAhead = function (a) {
      this.$1.push({ bufferAhead: a, timestamp: Date.now() });
    };
    a.prototype.getVelocity = function () {
      if (this.$1.length < 2) return null;
      var a = this.$1[this.$1.length - 1],
        b = this.$3(),
        c = b.oldestValidEntry;
      b = b.oldestValidEntryIndex;
      b != null && b > 0 && this.$1.splice(0, b);
      return c != null
        ? (a.bufferAhead - c.bufferAhead) / ((a.timestamp - c.timestamp) / 1e3)
        : null;
    };
    a.prototype.$3 = function () {
      var a = null,
        b = null;
      for (var c = 0; c < this.$1.length - 1; c++) {
        a = this.$1[c];
        if (this.$1[c].timestamp >= Date.now() - this.$2) break;
        b = c;
      }
      return { oldestValidEntry: a, oldestValidEntryIndex: b };
    };
    a.prototype.reset = function () {
      this.$1 = [];
    };
    e.exports = a;
  },
  null
);
__d(
  'FixedSizeTransform',
  [
    'invariant',
    'Deferred',
    'DeferredBuffer',
    'MaybeNativePromise',
    'ProducerInterruptedError',
    'ReadableStream',
    'WritableStream',
    'pipeErrorTo',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    function a(a) {
      __p && __p();
      a === void 0 && (a = {});
      this.$1 = 0;
      this.$4 = 0;
      this.$5 = b('MaybeNativePromise').resolve();
      this.$8 = [];
      a = a;
      var c = a.disableDeferredBufferArrayShift,
        d = a.useNativePromiseInDeferredBuffer;
      a = a.fixFixedSizeTransformOnNullEndByte;
      this.$12 = a || !1;
      this.$3 = new (b('DeferredBuffer'))({
        disableArrayShift: !!c,
        useNativePromise: !!d,
      });
    }
    a.prototype.cancel = function (a) {
      this.$13(a), this.$7 && b('pipeErrorTo')(this.$7, a);
    };
    a.prototype.cancelAfterBytes = function (a, b) {
      a <= this.$1 ? this.cancel(b) : ((this.$10 = a), (this.$11 = b));
    };
    a.prototype.$13 = function (a) {
      (this.$9 = a), this.$6 && this.$6.reject(this.$9);
    };
    a.prototype.getSink = function () {
      this.$2 ||
        (this.$2 = new (b('WritableStream'))({
          start: function (a) {
            this.$7 = a;
          }.bind(this),
          write: function (a) {
            a instanceof Uint8Array || g(0, undefined),
              this.$3.produce(a),
              (this.$1 += a.length),
              this.$10 != null && this.$10 <= this.$1 && this.cancel(this.$11);
          }.bind(this),
          close: function () {
            this.$3.signalProducerInterruption(), (this.$2 = null);
          }.bind(this),
          abort: function (a) {
            this.$3.produce(a);
          }.bind(this),
        }));
      return this.$2;
    };
    a.prototype.getNextFixedSizeStream = function (a) {
      __p && __p();
      var c = a === undefined,
        d = 0;
      if (this.$9) return b('MaybeNativePromise').reject(this.$9);
      this.$6 = new (b('Deferred'))(b('MaybeNativePromise'));
      var e = this.$6.getPromise(),
        f = this.$5;
      this.$5 = e;
      return f.then(
        function () {
          __p && __p();
          return new (b('ReadableStream'))({
            start: function (a) {
              this.$8.push(a);
            }.bind(this),
            pull: function (e) {
              __p && __p();
              if (!c && this.$4 === a) return this.$14(e);
              var f = c ? undefined : (a || 0) - this.$4;
              return this.$3
                .consume(f)
                .then(
                  function (a) {
                    e.enqueue(a), (this.$4 += a.length);
                  }.bind(this)
                )
                ['catch'](
                  function (a) {
                    if (a instanceof b('ProducerInterruptedError'))
                      if (this.$12)
                        return c && (this.$4 > 0 || d > 0) ? this.$14(e) : d++;
                      else
                        return c
                          ? this.$14(e)
                          : b('MaybeNativePromise').resolve();
                    this.$13(a);
                    this.$8.forEach(function (c) {
                      b('pipeErrorTo')(c, a);
                    });
                  }.bind(this)
                );
            }.bind(this),
            cancel: function (a) {
              this.$13(a), b('pipeErrorTo')(this.$7, a);
            }.bind(this),
          });
        }.bind(this)
      );
    };
    a.prototype.$14 = function (a) {
      a.close();
      this.$4 = 0;
      this.$6.resolve();
      return b('MaybeNativePromise').resolve();
    };
    e.exports = a;
  },
  null
);
__d(
  'ChunkableContinuousRangeStream',
  [
    'ByteRange',
    'Deferred',
    'FixedSizeTransform',
    'MaybeNativePromise',
    'PausableRangeStream',
    'ReadableStream',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = b('ByteRange').disjoinAfter,
      h = b('ByteRange').getLength,
      i = b('ByteRange').startsAtSame,
      j = b('ByteRange').startsDuring,
      k = b('ByteRange').startsImmediateAfter,
      l = b('ByteRange').union;
    function a(a, c) {
      __p && __p();
      this.$1 = b('MaybeNativePromise').resolve(null);
      this.$2 = null;
      this.$3 = null;
      this.$5 = [];
      this.$7 = null;
      this.$9 = !1;
      this.$10 = !1;
      this.$12 = !1;
      this.$13 = !1;
      this.$14 = !1;
      this.$15 = !1;
      this.$16 = !1;
      this.$17 = !1;
      this.$18 = !1;
      this.$19 = !1;
      this.$20 = !1;
      this.$4 = a;
      c = c || {};
      a = c;
      c = a.disableStreamAutoStart;
      var d = a.enableStreamRangeConcat,
        e = a.disableDeferredBufferArrayShift,
        f = a.useNativePromiseInDeferredBuffer,
        g = a.fixFixedSizeTransformOnNullEndByte,
        h = a.fixStreamingUndefinedEndByte,
        i = a.enablePausableStreamResumeFromStart,
        j = a.fixPausePreReadableStream;
      a = a.enableFactoryDestroy;
      this.$12 = !!c;
      this.$13 = !!d;
      this.$14 = !!e;
      this.$16 = !!g;
      this.$15 = !!f;
      this.$8 = new (b('FixedSizeTransform'))({
        disableDeferredBufferArrayShift: this.$14,
        useNativePromiseInDeferredBuffer: this.$15,
        fixFixedSizeTransformOnNullEndByte: this.$16,
      });
      this.$17 = !!h;
      this.$18 = !!i;
      this.$19 = !!j;
      this.$20 = !!a;
    }
    a.prototype.$21 = function () {
      __p && __p();
      this.$6 && (this.$6.resolve(null), (this.$6 = null));
      this.$3 = null;
      this.$9 = !0;
      if (this.$20) {
        var a = [];
        this.$5.map(
          function (b) {
            var c = this.$7;
            if (!c) return;
            i(b.getByteRange(), c) && a.push(b);
          }.bind(this)
        );
        this.$5 = a;
      }
    };
    a.prototype.isClosed = function () {
      return this.$9;
    };
    a.prototype.getReservedChunkStream = function (a) {
      __p && __p();
      if (this.isClosed()) return b('MaybeNativePromise').reject();
      this.updateRangeStream(a);
      if (this.$7 && !k(a, this.$7)) {
        this.destroy();
        return b('MaybeNativePromise').reject(new Error('Bad Range Request'));
      }
      this.$7 = a;
      a = h(a);
      return this.$8.getNextFixedSizeStream(a === null ? undefined : a);
    };
    a.prototype.$22 = function () {
      var a = 'close stream';
      this.$7 != null && this.$7.endByte != null && this.$11 != null
        ? this.$8.cancelAfterBytes(this.$7.endByte - this.$11 + 1, a)
        : this.$7 || this.$8.cancel(a);
    };
    a.prototype.updateRangeStream = function (a) {
      __p && __p();
      if (this.isClosed()) return 'closed';
      if (!this.$23(a)) {
        this.$1.then(
          function () {
            this.$22();
          }.bind(this)
        );
        this.$21();
        return 'closed';
      }
      if (!this.$2) this.$24(a);
      else {
        this.$3 = this.$25(a);
        a = this.$5[this.$5.length - 1];
        this.$13 && this.$3 != null && a && a.tryConcatByteRange(this.$3)
          ? (this.$3 = null)
          : !this.$10 && this.$3 != null && this.$24(this.$3);
      }
      return 'streaming';
    };
    a.prototype.getCurrentStreamRange = function () {
      return this.$2;
    };
    a.prototype.removeQueuedRange = function () {
      this.$3 = null;
    };
    a.prototype.$24 = function (a) {
      (this.$10 = !0),
        this.$26(a)
          .then(
            function () {
              this.$10 = !1;
              if (this.$3) {
                var a = this.$3;
                this.$3 = null;
                this.$24(a);
              }
            }.bind(this)
          )
          ['catch'](
            function (a) {
              this.$10 = !1;
            }.bind(this)
          );
    };
    a.prototype.getPausableStreamFactory = function () {
      return function () {
        if (this.$5.length) return b('MaybeNativePromise').resolve(this.$5[0]);
        return this.$6
          ? this.$6.getPromise()
          : b('MaybeNativePromise').resolve(null);
      }.bind(this);
    };
    a.prototype.$26 = function (a) {
      __p && __p();
      this.$2 = a;
      this.$11 == null && (this.$11 = a.startByte);
      var c = new (b('Deferred'))(b('MaybeNativePromise'));
      this.$1 = c.getPromise();
      a = new (b('PausableRangeStream'))(a, this.$4, {
        disableDeferredBufferArrayShift: this.$14,
        useNativePromiseInDeferredBuffer: this.$15,
        fixStreamingUndefinedEndByte: this.$17,
        enablePausableStreamResumeFromStartDangerously: this.$18,
        fixPausePreReadableStream: this.$19,
      });
      this.$12
        ? ((a = this.$27(a, c)), this.$5.push(a))
        : a.startStream().then(function () {
            c.resolve();
          });
      a = a.getStream();
      return a.pipeTo(this.$8.getSink())['catch'](
        function (a) {
          this.$21();
          throw a;
        }.bind(this)
      );
    };
    a.prototype.$27 = function (a, c) {
      __p && __p();
      var d = a.startStream;
      a.startStream = function () {
        __p && __p();
        return d.call(a).then(
          function (d) {
            __p && __p();
            d = d.statusPromise;
            c.resolve();
            d = d.then(
              function (c) {
                if (c !== 'stream_paused') {
                  var d = this.$5.indexOf(a);
                  d > -1 && this.$5.splice(d, 1);
                }
                this.$3 &&
                  (this.$6 = new (b('Deferred'))(b('MaybeNativePromise')));
                return c;
              }.bind(this)
            );
            return { statusPromise: d };
          }.bind(this)
        );
      }.bind(this);
      this.$6 && (this.$6.resolve(a), (this.$6 = null));
      return a;
    };
    a.prototype.destroy = function () {
      this.$22(), this.$21();
    };
    a.prototype.$25 = function (a) {
      a = a;
      this.$3 && (a = l(this.$3, a));
      a != null && this.$2 && (a = g(a, this.$2));
      return a;
    };
    a.prototype.$23 = function (a) {
      if (!this.$2) return !0;
      return !this.$7 ? i(a, this.$2) : j(a, this.$7) || k(a, this.$7);
    };
    e.exports = a;
  },
  null
);
__d(
  'VideoPriorityCalculator',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    function g() {
      return 2;
    }
    function h(a, b) {
      var c = a.playhead,
        d = a.bufferEnd;
      a = a.isPlaying;
      d = d - c <= b ? 0 : 1;
      c = a ? 0 : 1;
      return g() - d - c;
    }
    function a(a, b, c) {
      var d = a.playhead,
        e = a.bufferEnd;
      if (!c) return h(a, b);
      e = e - d;
      return e <= c ? g() : h(a, b);
    }
    e.exports = { calculate: h, calculateLive: a, getMaxPriority: g };
  },
  null
);
__d(
  'ContinuousPausableStreamTask',
  ['VideoPriorityCalculator', 'clearInterval', 'setInterval'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a, b, c, d, e) {
      __p && __p();
      c === void 0 && (c = 0);
      d === void 0 && (d = null);
      e === void 0 && (e = {});
      this.$3 = !1;
      this.$9 = !1;
      this.$10 = !1;
      this.$11 = !1;
      this.$12 = !1;
      this.$13 = 0;
      this.$14 = 0;
      this.$15 = 1;
      this.$1 = a;
      this.$4 = b;
      this.$7 = c;
      this.$5 = d;
      a = e;
      b = a.uncancellablePriority;
      c = a.disableAudioStreamPause;
      d = a.yieldOnLowPriStream;
      e = a.lowPriTaskYieldCheckInterval;
      var f = a.lowPriTaskMinBytesToYield;
      a = a.lowPriTaskYieldsPerTask;
      this.$8 = b == null ? Infinity : b;
      this.$11 = !!c;
      this.$12 = !!d;
      this.$13 = e || 0;
      this.$14 = f || 0;
      this.$15 = a || 1;
    }
    a.prototype.run = function () {
      __p && __p();
      if (this.$5) {
        var a = this.$5.getOperationLogger('streaming_task').start();
        a.setType(this.$4);
        this.$6 = a;
      }
      var c = function () {
        __p && __p();
        this.$2 = null;
        return this.$1().then(
          function (a) {
            __p && __p();
            this.$2 = a;
            this.$3 && this.$16();
            if (!a) {
              this.$6 && this.$6.setResult('done').log();
              return;
            }
            var d = a.getBytesStreamed(),
              e = a.getByteRange(),
              f = e.endByte ? (e.endByte - e.startByte) / this.$15 : 0;
            return a.startStream().then(
              function (e) {
                __p && __p();
                e = e.statusPromise;
                var g,
                  h = a;
                this.$13 &&
                  h &&
                  (g = b('setInterval')(
                    function () {
                      var a = h.getBytesStreamed() - d;
                      this.$7 < b('VideoPriorityCalculator').getMaxPriority() &&
                        a > this.$14 &&
                        a > f &&
                        (h.pauseStream(), b('clearInterval')(g));
                    }.bind(this),
                    this.$13
                  ));
                return e
                  .then(
                    function (a) {
                      b('clearInterval')(g);
                      if (a === 'stream_paused') this.$16();
                      else if (a === 'stream_aborted') {
                        this.$6 && this.$6.setResult('failed').log();
                        throw new Error('failed');
                      }
                      ((this.$12 &&
                        this.$7 <
                          b('VideoPriorityCalculator').getMaxPriority()) ||
                        this.$10) &&
                        ((this.$10 = !1), this.$16());
                      return c();
                    }.bind(this)
                  )
                  ['catch'](function (a) {
                    b('clearInterval')(g);
                    throw a;
                  });
              }.bind(this)
            );
          }.bind(this)
        );
      }.bind(this);
      return c();
    };
    a.prototype.updatePriority = function (a) {
      (this.$7 = a), this.$9 && this.cancel();
    };
    a.prototype.cancel = function () {
      if (this.$11 && this.$4 === 'audio') return;
      if (this.$7 >= this.$8) {
        this.$9 = !0;
        return;
      }
      this.$2 && this.$2.pauseStream();
      this.$3 = !0;
    };
    a.prototype.cancelOnCurrentStreamDone = function () {
      this.$10 = !0;
    };
    a.prototype.$16 = function () {
      this.$6 && this.$6.setResult('cancelled').log();
      throw new Error('cancelled');
    };
    e.exports = a;
  },
  null
);
__d(
  'RlAbrModel',
  ['regeneratorRuntime', 'RlAbrUtils', 'RlAlgebra'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a) {
      (this.$1 = a),
        (this.$2 = []),
        (this.$3 = 0),
        (this.$4 = 0),
        (this.$5 = 0),
        (this.$6 = 0);
    }
    a.prototype.$7 = function (a, b) {
      var c = b[1],
        d = b[2] / 1e3,
        e = b[3],
        f = b[4];
      b = b[5];
      var g = c - this.$5 + this.$4 - d;
      g =
        this.$3 * g * this.$1.getNumber('rl_bitrate_reward', 1) +
        e * this.$1.getNumber('rl_watch_time_reward', 0) -
        f * this.$1.getNumber('rl_stall_count_penalty', 30) -
        b * this.$1.getNumber('rl_stall_time_penalty', 0);
      this.$3 = a;
      this.$4 = d;
      this.$5 = c;
      return g;
    };
    a.prototype.fetchIfNotExist = function (a, c, d) {
      __p && __p();
      return b('regeneratorRuntime').async(
        function (e) {
          __p && __p();
          while (1)
            switch ((e.prev = e.next)) {
              case 0:
                if (!(this.$2.length == 0)) {
                  e.next = 4;
                  break;
                }
                e.next = 3;
                return b('regeneratorRuntime').awrap(
                  b('RlAbrUtils').fetchRlAbrModel(a, c, d)
                );
              case 3:
                this.$2 = e.sent;
              case 4:
              case 'end':
                return e.stop();
            }
        },
        null,
        this
      );
    };
    a.prototype.getPolicyReportExperience = function (a, c, d, e, f, g) {
      __p && __p();
      var h = [].concat(
          d[0] / this.$1.getNumber('rl_bandwidth_scale', 1e6),
          d[1] / this.$1.getNumber('rl_buffer_scale', 10),
          d[2] / this.$1.getNumber('rl_playback_scale', 2e5)
        ),
        i = [];
      for (var j = 0; j < e.length; j++)
        i.push(e[j] / this.$1.getNumber('rl_bandwidth_scale', 1e6));
      j = b('RlAlgebra').policyInference(this.$2[1], this.$2[2], h, i);
      h = b('RlAlgebra').vectorSample(j);
      if (h >= f.length) throw new Error('RL chooses unavailable bitrate.');
      f = this.$7(i[h], d);
      b('RlAbrUtils').putExperience(
        a,
        c,
        String(this.$2[0]),
        this.$6,
        d,
        e,
        f,
        h,
        j,
        g
      );
      this.$6 += 1;
      return h;
    };
    a.prototype.modelFetched = function () {
      return this.$2.length == 3;
    };
    e.exports = a;
  },
  null
);
__d(
  'FirstLoadedVideoPriorityAdjuster',
  ['EventListener', 'SubscriptionsHandler'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = null;
    function a(a) {
      (this.$1 = function () {}),
        (this.$2 = new (b('SubscriptionsHandler'))()),
        (this.$3 = !1),
        (this.$5 = !1),
        g === null &&
          ((g = a),
          (this.$5 = !0),
          this.$2.addSubscriptions(
            b('EventListener').listen(
              a,
              'playing',
              function () {
                (this.$3 = !0),
                  this.$1 && this.$1(this.getPriorityAdjustment()),
                  this.cleanup();
              }.bind(this)
            )
          ));
    }
    a.prototype.setOnPriorityChanged = function (a) {
      this.$1 = a;
    };
    a.prototype.getPriorityAdjustment = function () {
      return this.$5 && !this.$3 ? 0.5 : 0;
    };
    a.prototype.cleanup = function () {
      this.$2.release(), (this.$1 = function () {});
    };
    e.exports = a;
  },
  null
);
__d(
  'UnitConstants',
  [],
  function (a, b, c, d, e, f) {
    a = 8;
    e.exports = { BITS_IN_BYTE: a };
  },
  null
);
__d(
  'LocalBitrateHelper',
  ['UnitConstants'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = b('UnitConstants').BITS_IN_BYTE;
    function a(a, b, c) {
      __p && __p();
      if (!a[b]) return null;
      if (a[b].startTime > c) return b;
      while (b < a.length) {
        if (a[b].startTime > c) return b;
        b++;
      }
      return null;
    }
    function c(a, b, c) {
      if (b >= a.length || b < 0) return null;
      c = b + c >= a.length ? a.length - b - 1 : c;
      var d = a[b];
      a = a[b + c];
      b = d.url.startByte;
      c = a.url.endByte;
      return b === undefined || c === undefined
        ? null
        : Math.round(((c - b) / (a.endTime - d.startTime)) * g);
    }
    e.exports = { getBufferEndSegmentIndex: a, getLocalBitrate: c };
  },
  null
);
__d(
  'ShakaSegmentReferenceHelper',
  ['BinarySearch', 'FBLogger'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = 0.001;
    function h(a, b) {
      for (var c = a.length - 1; c >= 0; --c) {
        var d = a[c];
        if (Math.abs(b - d.startTime) < g) return c;
      }
      return -1;
    }
    function i(a, c) {
      __p && __p();
      var d = h(a, c);
      if (d > -1) return d;
      for (var d = a.length - 1; d >= 0; --d) {
        var e = a[d];
        if (c >= e.startTime && c < e.endTime) {
          b('FBLogger')('shaka').warn(
            'Segment reference have no matching start time %s, %d',
            JSON.stringify(e),
            c
          );
          return d;
        }
      }
      return -1;
    }
    function a(a, b) {
      var c = i(a, b.startTime);
      if (c >= 0) {
        a.splice(c, 0, b);
        return c + 1;
      } else {
        a.push(b);
        return a.length;
      }
    }
    function c(a, c) {
      var d = a.startByte;
      d = b('BinarySearch').leastUpperBound(
        function (a) {
          a = c[a];
          return a.url.startByte;
        },
        d,
        0,
        c.length,
        function (a, b) {
          return a - b;
        }
      );
      var e = c[d];
      return e &&
        e.url.baseUrl === a.baseUrl &&
        e.url.startByte === a.startByte &&
        e.url.endByte === a.endByte
        ? d
        : -1;
    }
    e.exports = {
      findIndexByStartTime: i,
      insertReference: a,
      findIndexByRequestInfo: c,
      findIndexByStartTimeExact: h,
    };
  },
  null
);
__d(
  'MultipleSegmentsProvider',
  [
    'invariant',
    'ShakaSegmentReferenceHelper',
    'VideoPlayerShakaGlobalConfig',
    'emptyFunction',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    function a(a) {
      (this.$2 = []),
        (this.$3 = []),
        (this.$4 = 0),
        (this.$5 = b('emptyFunction')),
        (this.$1 = a);
    }
    a.prototype.getNumberOfSegments = function () {
      var a = this.$1;
      this.$1 = Math.max(
        this.$1 -
          b('VideoPlayerShakaGlobalConfig').getNumber('multi_segment_decay', 0),
        1
      );
      return Math.ceil(a);
    };
    a.prototype.setFutureSegments = function (a) {
      this.$2 = a;
    };
    a.prototype.setOnSegmentsUpdated = function (a) {
      this.$5 = a;
    };
    a.prototype.clearOnSegmentsUpdated = function () {
      this.setOnSegmentsUpdated(b('emptyFunction'));
    };
    a.prototype.setSegments = function (a) {
      var b = this.$3;
      this.$3 = a;
      this.$5(b, a);
    };
    a.prototype.isRequestInBufferTarget = function (a, c) {
      a = b('ShakaSegmentReferenceHelper').findIndexByRequestInfo(a, this.$3);
      if (a < 0) return !1;
      a = this.$3[a];
      return a.startTime < c.bufferStart + c.bufferingGoal;
    };
    a.prototype.setBufferingGoal = function (a) {
      this.$4 = a;
    };
    a.prototype.$6 = function (a) {
      __p && __p();
      var c = [],
        d = b('ShakaSegmentReferenceHelper').findIndexByRequestInfo(a, this.$3);
      if (d >= 0) {
        var e = Math.min(this.$3.length, d + this.$1);
        for (var d = d; d < e; d++) c.push(this.$3[d]);
      }
      if (!c.length) return [{ startByte: a.startByte, endByte: a.endByte }];
      d = c[0];
      e = c[c.length - 1];
      return [{ startByte: d.url.startByte || 0, endByte: e.url.endByte }];
    };
    a.prototype.getFetchRanges = function (a) {
      if (
        b('VideoPlayerShakaGlobalConfig').getBool(
          'enable_fixed_segment_boundary',
          !1
        )
      )
        return this.$7(a);
      var c = this.$2;
      if (
        c.length === 0 ||
        b('VideoPlayerShakaGlobalConfig').getBool(
          'enable_streaming_authentic_fetch_range_query',
          !1
        )
      )
        return this.$6(a);
      c.length > 0 || g(0, undefined);
      a = c[0];
      c = c[c.length - 1];
      return c.url.baseUrl !== a.url.baseUrl
        ? [{ startByte: a.url.startByte, endByte: a.url.endByte }]
        : [{ startByte: a.url.startByte || 0, endByte: c.url.endByte }];
    };
    a.prototype.getNextRequestInfo = function (a) {
      var b = this.$3.findIndex(function (b) {
        return b.url.baseUrl === a.baseUrl && b.url.startByte === a.startByte;
      });
      b = this.$3[b + 1];
      return !b
        ? null
        : {
            baseUrl: b.url.baseUrl,
            startByte: b.url.startByte,
            endByte: b.url.endByte,
          };
    };
    a.prototype.$7 = function (a) {
      __p && __p();
      var c = a.startByte;
      a = b('ShakaSegmentReferenceHelper').findIndexByRequestInfo(a, this.$3);
      if (a < 0) return [];
      var d = [],
        e = this.$3[a];
      if (!e) return [];
      var f = e.startTime;
      for (var a = a; a < this.$3.length; a++) {
        e = this.$3[a];
        if ((a + 1) % this.$1 === 0) {
          d.push({ startByte: c, endByte: e.url.endByte });
          var g = e.endTime;
          e = null;
          if (g - f >= this.$4) break;
        }
      }
      e && d.push({ startByte: c, endByte: e.url.endByte });
      return d;
    };
    a.prototype.getSegmentsBoundaries = function (a) {
      if (this.$2.length === 0)
        return [{ startByte: a.startByte, endByte: a.endByte }];
      this.$2.length > 0 || g(0, undefined);
      return this.$2.map(function (a) {
        a = a.url;
        var b = a.startByte;
        a = a.endByte;
        return { startByte: b || 0, endByte: a };
      });
    };
    a.prototype.getTimeRange = function (a) {
      var b = { startTime: null, endTime: null };
      this.$2.forEach(function (c) {
        var d = c.url;
        if (!d) return;
        d.startByte === a.startByte && (b.startTime = c.startTime);
        d.endByte === a.endByte && (b.endTime = c.endTime);
      });
      return b;
    };
    e.exports = a;
  },
  null
);
__d(
  'NetworkStatusDetector',
  ['EventEmitter', 'clearInterval', 'setInterval'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g,
      h = 1e3,
      i = 9999;
    c = babelHelpers.inherits(a, b('EventEmitter'));
    g = c && c.prototype;
    function a() {
      g.constructor.call(this),
        (this.$NetworkStatusDetector3 = !0),
        (this.$NetworkStatusDetector4 = !1),
        (this.$NetworkStatusDetector2 = Date.now()),
        (this.$NetworkStatusDetector1 = b('setInterval')(
          function () {
            return this.$NetworkStatusDetector5();
          }.bind(this),
          h
        ));
    }
    a.prototype.destroy = function () {
      b('clearInterval')(this.$NetworkStatusDetector1);
    };
    a.prototype.$NetworkStatusDetector5 = function () {
      var a = this.$NetworkStatusDetector2;
      this.$NetworkStatusDetector2 = Date.now();
      var b = this.$NetworkStatusDetector3;
      this.$NetworkStatusDetector3 = this.getOnLineStatus();
      this.emitIfOnLineStateChanges(
        a,
        this.$NetworkStatusDetector2,
        b,
        this.$NetworkStatusDetector3
      );
    };
    a.prototype.emitIfOnLineStateChanges = function (a, b, c, d) {
      !c && d ? this.emit('onLine') : c && !d && this.emit('offLine');
      c = i;
      b - a > c &&
        this.emit('systemWake', { sleepStartTime: a, sleepEndTime: b });
    };
    a.prototype.informNetworkInterrupted = function () {
      this.$NetworkStatusDetector4 ||
        ((this.$NetworkStatusDetector4 = !0), this.emit('networkInterrupted'));
    };
    a.prototype.informNetworkResumed = function () {
      this.$NetworkStatusDetector4 &&
        ((this.$NetworkStatusDetector4 = !1), this.emit('networkResumed'));
    };
    a.prototype.isNetworkInterrupted = function () {
      return this.$NetworkStatusDetector4;
    };
    a.prototype.getOnLineStatus = function () {
      return window && window.navigator && window.navigator.onLine !== undefined
        ? window.navigator.onLine
        : !0;
    };
    e.exports = a;
  },
  null
);
__d(
  'VideoSegmentInfoHelper',
  [
    'URI',
    'VideoAkamaiRequestHelper',
    'VideoDashPrefetchCache',
    'XHRRequest',
    'getCrossOriginTransport',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a) {
      __p && __p();
      a = a.requestInfo;
      var c = new (b('XHRRequest'))(g(a))
          .setMethod('GET')
          .setResponseType('arraybuffer')
          .setTransportBuilder(b('getCrossOriginTransport')),
        d = /livestream-lookaside\.facebook\.com$/;
      d = d.test(c.getURI().getDomain());
      d && c.setTransportBuilder(b('getCrossOriginTransport').withCredentials);
      if (b('VideoAkamaiRequestHelper').isAkamai(a.baseUrl)) {
        var e = b('VideoAkamaiRequestHelper').getRequestHeaders(a);
        e &&
          Object.keys(e).forEach(function (a) {
            c.setRequestHeader(a, e[a]);
          });
      }
      return c;
    }
    function c(a) {
      a = a.requestInfo;
      var b = a.startByte;
      a = a.endByte;
      return b && a ? a - b : null;
    }
    function g(a) {
      var c = a.baseUrl,
        d = a.startByte,
        e = a.endByte;
      c = new (b('URI'))(c);
      if (!b('VideoAkamaiRequestHelper').isAkamai(a.baseUrl)) {
        if (d === 0 && e == null) return c;
        c = c.addQueryData({ bytestart: d });
        e != null && (c = c.addQueryData({ byteend: e }));
      }
      return c;
    }
    function d(a) {
      return b('VideoDashPrefetchCache').hasCacheValue(
        g(a.requestInfo).toString()
      );
    }
    function f(a) {
      return a.baseUrl + ',' + (a.startByte || 0) + (',' + (a.endByte || 0));
    }
    e.exports = {
      createRequest: a,
      estimateRequestSize: c,
      getRequestUri: g,
      isPrefetchedRequest: d,
      getRequestCacheKey: f,
    };
  },
  null
);
__d(
  'SegmentsUpdateHelper',
  ['BanzaiODS', 'VideoPlayerShakaGlobalConfig', 'VideoSegmentInfoHelper'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function g(a, b) {
      (this.$1 = a), (this.$2 = b);
    }
    g.prototype.updateSegments = function (a, b) {
      __p && __p();
      if (!b.length) return;
      var c = this.$2.get(a) || [],
        d = c[c.length - 1];
      d = d ? d.startTime : -1;
      var e = b.length;
      while (e > 0) {
        var f = b[e - 1];
        if (f.startTime <= d) break;
        e--;
      }
      f = b.slice(e);
      d = b.slice(0, e);
      this.$3(c, d);
      b = f.map(function (a) {
        return g.createSegmentInfo(a);
      });
      b.forEach(
        function (a) {
          this.$4(a), c.push(a);
        }.bind(this)
      );
      this.$2.set(a, c);
    };
    g.createSegmentInfo = function (a) {
      var b = a.startTime,
        c = a.endTime,
        d = a.url,
        e = a.unscaledStartTime;
      a = a.unscaledDuration;
      var f = d.baseUrl,
        g = d.startByte;
      d = d.endByte;
      b = {
        segmentID: 0,
        startTime: b,
        endTime: c,
        requestInfo: { baseUrl: f, startByte: g, endByte: d || undefined },
        unscaledStartTime: e,
        unscaledDuration: a,
      };
      return b;
    };
    g.prototype.$5 = function (a, b) {
      __p && __p();
      var c = b.startTime,
        d = b.endTime,
        e = b.url,
        f = b.unscaledStartTime;
      b = b.unscaledDuration;
      var g = e.baseUrl,
        h = e.startByte;
      e = e.endByte;
      a.segmentID = 0;
      a.startTime = c;
      a.endTime = d;
      c = a.requestInfo;
      c.baseUrl = g;
      c.startByte = h;
      c.endByte = e || undefined;
      a.unscaledStartTime = f;
      a.unscaledDuration = b;
      return a;
    };
    g.prototype.$3 = function (a, c) {
      __p && __p();
      if (!c.length) return;
      var d = c.length,
        e = function () {
          var a = c[d - 1] || null;
          d--;
          return a;
        },
        f = e(),
        h = Number.POSITIVE_INFINITY;
      for (var i = 0; i <= a.length && f != null; i++) {
        var j = a.length - i,
          k = a[j - 1],
          l = j >= 1 ? k.startTime : Number.NEGATIVE_INFINITY,
          m = void 0;
        if (l <= f.startTime && f.endTime <= h) {
          if (l === f.startTime) {
            var n = b('VideoSegmentInfoHelper').getRequestCacheKey(
              k.requestInfo
            );
            m = this.$5(k, f);
            k = b('VideoSegmentInfoHelper').getRequestCacheKey(m.requestInfo);
            k !== n && (this.$1['delete'](n), this.$4(m));
          } else {
            m = g.createSegmentInfo(f);
            this.$4(m);
            a.splice(j, 0, m);
            k = b('VideoPlayerShakaGlobalConfig').getString(
              'segment_update_helper_splice_path_entity_key',
              ''
            );
            if (k) {
              n = f.unscaledStartTime;
              j = f.unscaledDuration;
              typeof n === 'number' &&
                typeof j === 'number' &&
                m.unscaledStartTime === n &&
                m.unscaledDuration === j &&
                b('BanzaiODS').bumpEntityKey('videos.www.shaka', k);
            }
          }
          f = e();
        }
        h = l;
      }
    };
    g.prototype.$4 = function (a) {
      var c = b('VideoSegmentInfoHelper').getRequestCacheKey(a.requestInfo);
      this.$1.set(c, a);
    };
    e.exports = g;
  },
  null
);
__d(
  'TrackedPromise',
  ['Promise'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = window.Promise || b('Promise');
    b('Promise').resolve();
    function a(a, b) {
      (this.$3 = !1),
        (this.$1 = 'pending'),
        (this.$2 = a.then(
          function (a) {
            this.$1 = 'fulfilled';
            return a;
          }.bind(this),
          function (a) {
            this.$1 = 'rejected';
            if (!b.getBool('fix_uncaught_promise_error_message', !1) || this.$3)
              return g.reject(a);
          }.bind(this)
        ));
    }
    a.prototype.getPromise = function () {
      this.$3 = !0;
      return this.$2;
    };
    a.prototype.isPending = function () {
      return this.$1 === 'pending';
    };
    a.prototype.getState = function () {
      return this.$1;
    };
    e.exports = a;
  },
  null
);
__d(
  'VideoSegmentPromiseBuffer',
  ['VideoPlayerShakaGlobalConfig'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a() {
      this.$1 = new Map();
    }
    a.prototype.appendSegmentPromise = function (a, b) {
      this.$1.set(a, b);
      return this;
    };
    a.prototype.hasSegmentPromise = function (a) {
      return this.$1.has(a);
    };
    a.prototype.getSegmentPromise = function (a) {
      var c = this.$1.get(a) || null;
      if (
        !b('VideoPlayerShakaGlobalConfig').getBool(
          'fix_promise_buffer_caches_rejected_promises',
          !0
        )
      )
        return c;
      c && c.getState() === 'rejected' && this.$1['delete'](a);
      return c;
    };
    a.prototype.hasOtherPendingSegments = function (a) {
      var b = new Set(a);
      return Array.from(this.$1.entries()).some(function (a) {
        return a[1].isPending() && !b.has(a[0]);
      });
    };
    a.prototype.isFirstPendingSegment = function (a) {
      __p && __p();
      var b = this.$1.get(a);
      if (!b || !b.isPending()) return !1;
      var c;
      for (
        var b = this.$1.entries(),
          d = Array.isArray(b),
          e = 0,
          b = d
            ? b
            : b[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var f;
        if (d) {
          if (e >= b.length) break;
          f = b[e++];
        } else {
          e = b.next();
          if (e.done) break;
          f = e.value;
        }
        f = f;
        if (f[1].isPending()) {
          c = f[0];
          break;
        }
      }
      return c === a;
    };
    a.prototype.clearAllSegmentPromises = function () {
      this.$1.clear();
      return this;
    };
    a.prototype.removeSegmentPromisesOlderThan = function (a, b) {
      __p && __p();
      if (!this.hasSegmentPromise(a)) {
        b.getBool('fixing_old_promise_clearance', !0) && this.$1.clear();
        return;
      }
      for (
        var b = this.$1.keys(),
          c = Array.isArray(b),
          d = 0,
          b = c
            ? b
            : b[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var e;
        if (c) {
          if (d >= b.length) break;
          e = b[d++];
        } else {
          d = b.next();
          if (d.done) break;
          e = d.value;
        }
        e = e;
        if (e === a) return;
        this.$1['delete'](e);
      }
    };
    a.prototype.removeSegmentPromise = function (a) {
      this.$1['delete'](a);
    };
    e.exports = a;
  },
  null
);
__d(
  'NetworkRequestPipelineStats',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = 5,
      h = 0.5,
      i = 30;
    function a() {
      (this.$1 = {}),
        (this.$2 = {}),
        (this.$3 = 0),
        (this.$4 = 0),
        (this.$5 = 0),
        (this.$6 = 0),
        (this.$7 = new Set());
    }
    a.prototype.addEntry = function (a, b) {
      this.$6 = Math.max(this.$6, a);
      if (!b) return;
      this.$1[a] = b;
      var c = this.$1[a - 1];
      !this.$7.has(a - 1) && c && this.$8(c, b, a);
      c = this.$1[a + 1];
      !this.$7.has(a) && c && this.$8(b, c, a + 1);
    };
    a.prototype.setNetworkIdle = function () {
      this.$7.add(this.$6);
    };
    a.prototype.$8 = function (a, b, c) {
      this.$2[c] =
        b.startTime + b.timeToFirstByte - (a.startTime + a.timeToLastByte);
    };
    a.prototype.getBandwidthAlignments = function () {
      return this.$2;
    };
    a.prototype.getBandwidthUtilization = function () {
      var a = 0,
        b = 0;
      Object.keys(this.$2).forEach(
        function (c) {
          c = Number.parseInt(c, 10);
          var d = this.$2[c];
          c = this.$1[c];
          c = c.timeToLastByte - c.timeToFirstByte;
          a += c;
          b += Math.max(0, d) + c;
        }.bind(this)
      );
      return a / Math.max(1, b);
    };
    a.prototype.$9 = function (a) {
      __p && __p();
      a = [];
      var b = 0;
      while (!0) {
        var c = this.$1[this.$6 - b];
        if (!c) break;
        c.timeToLastByte - c.timeToFirstByte >= i && a.push(c);
        b++;
      }
      return a;
    };
    a.prototype.getEstimatedDownloadTime = function (a) {
      if (a) {
        var b = this.$10();
        return !b ? 0 : a / b;
      }
      return this.$11(
        function (a) {
          return a.timeToLastByte - a.timeToFirstByte;
        },
        { lastN: g, defaultValue: 0 }
      );
    };
    a.prototype.$10 = function () {
      return this.$11(
        function (a) {
          return a.transferSize / (a.timeToLastByte - a.timeToFirstByte || 1);
        },
        { lastN: g, defaultValue: 0 }
      );
    };
    a.prototype.$11 = function (a, b) {
      var c = b.lastN;
      b = b.defaultValue;
      c = this.$9(c);
      return !c.length
        ? b
        : c.reverse().reduce(function (b, c) {
            return h * a(c) + (1 - h) * b;
          }, a(c[0]));
    };
    a.prototype.getEstimatedTimeToFirstByte = function () {
      return this.$11(
        function (a) {
          return a.timeToFirstByte;
        },
        { lastN: g, defaultValue: 5e3 }
      );
    };
    a.prototype.getOptimisticTimeToFirstByte = function () {
      var a = this.$9(g);
      if (!a.length) return 0;
      a = Math.min.apply(
        Math,
        a.map(function (a) {
          return a.timeToFirstByte;
        })
      );
      var b = this.$11(
        function (a) {
          return a.timeToFirstByte;
        },
        { lastN: g, defaultValue: 5e3 }
      );
      return (a + b) / 2;
    };
    e.exports = a;
  },
  null
);
__d(
  'VideoPlayerResourceTimer',
  ['VideoPlayerShakaGlobalConfig'],
  function (a, b, c, d, e, f) {
    __p && __p();
    a = {
      getResourceTimingEntry: function (a, c, d) {
        __p && __p();
        if (performance.getEntriesByType) {
          a = performance.getEntriesByName(a, 'resource');
          var e = [];
          a.forEach(function (a) {
            typeof a.responseEnd === 'number' &&
              typeof a.responseStart === 'number' &&
              typeof a.requestStart === 'number' &&
              typeof a.connectEnd === 'number' &&
              typeof a.connectStart === 'number' &&
              typeof a.domainLookupEnd === 'number' &&
              typeof a.domainLookupStart === 'number' &&
              typeof a.transferSize === 'number' &&
              a.responseEnd <= d &&
              a.startTime >= c &&
              (!b('VideoPlayerShakaGlobalConfig').getBool(
                'ignore_invalid_timing_entries',
                !1
              ) ||
                (typeof a.responseEnd === 'number' &&
                  typeof a.responseStart === 'number' &&
                  typeof a.startTime === 'number' &&
                  a.responseStart > a.startTime &&
                  a.responseEnd > a.startTime &&
                  a.responseStart > 0 &&
                  a.responseEnd > 0)) &&
              e.push({
                entry: {
                  timeToFirstByte: a.responseStart - a.startTime,
                  timeToLastByte: a.responseEnd - a.startTime,
                  timeToRequestStart: a.requestStart - a.startTime,
                  timeToConectionEnd: a.connectEnd - a.startTime,
                  timeToConnectionStart: a.connectStart - a.startTime,
                  timeToDomainLookupEnd: a.domainLookupEnd - a.startTime,
                  timeToDomainLookupStart: a.domainLookupStart - a.startTime,
                  transferSize: a.transferSize,
                  startTime: a.startTime,
                },
                sort: a.responseEnd,
              });
          });
          e.sort(function (a, b) {
            return b.sort - a.sort;
          });
          if (e.length) return e[0].entry;
        }
        return null;
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'getXHRRequestHandlerHelper',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    function g(a, b, c, d) {
      var e = b.call(a);
      c.call(
        a,
        Object.assign(
          function () {
            e && e.apply(undefined, arguments), d.apply(undefined, arguments);
          },
          e,
          d
        )
      );
    }
    function h(a) {
      this.$1 = a;
    }
    h.prototype.addResponseHandler = function (a) {
      g(this.$1, this.$1.getResponseHandler, this.$1.setResponseHandler, a);
      return this;
    };
    h.prototype.addAbortHandler = function (a) {
      g(this.$1, this.$1.getAbortHandler, this.$1.setAbortHandler, a);
      return this;
    };
    h.prototype.addErrorHandler = function (a) {
      g(this.$1, this.$1.getErrorHandler, this.$1.setErrorHandler, a);
      return this;
    };
    h.prototype.addTimeoutHandler = function (a) {
      g(this.$1, this.$1.getTimeoutHandler, this.$1.setTimeoutHandler, a);
      return this;
    };
    h.prototype.addNetworkFailureHandler = function (a) {
      g(
        this.$1,
        this.$1.getNetworkFailureHandler,
        this.$1.setNetworkFailureHandler,
        a
      );
      return this;
    };
    function a(a) {
      return new h(a);
    }
    e.exports = a;
  },
  null
);
__d(
  'NetworkRequestPipeline',
  [
    'EventEmitter',
    'NetworkRequestPipelineStats',
    'VideoPlayerResourceTimer',
    'VideoPlayerShakaGlobalConfig',
    'getXHRRequestHandlerHelper',
    'performanceNow',
    'setTimeoutAcrossTransitions',
    'setTimeout',
    'clearTimeout',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g,
      h = b('VideoPlayerShakaGlobalConfig').getBool(
        'timeouts_persist_on_page_transition',
        !0
      )
        ? b('setTimeoutAcrossTransitions')
        : b('setTimeout'),
      i = 2,
      j = 1;
    c = babelHelpers.inherits(a, b('EventEmitter'));
    g = c && c.prototype;
    function a(a, c) {
      __p && __p();
      g.constructor.call(this);
      this.$NetworkRequestPipeline1 = i;
      this.$NetworkRequestPipeline2 = j;
      this.$NetworkRequestPipeline3 = 0;
      this.$NetworkRequestPipeline4 = new (b('NetworkRequestPipelineStats'))();
      this.$NetworkRequestPipeline5 = 0;
      this.$NetworkRequestPipeline6 = new Map();
      this.$NetworkRequestPipeline11 = null;
      this.$NetworkRequestPipeline12 = null;
      this.$NetworkRequestPipeline13 = 0;
      this.$NetworkRequestPipeline15 = function () {
        this.$NetworkRequestPipeline14 ||
          ((this.$NetworkRequestPipeline14 = this.$NetworkRequestPipeline16()),
          (this.$NetworkRequestPipeline12 = null),
          this.$NetworkRequestPipeline17());
      }.bind(this);
      this.$NetworkRequestPipeline8 = a;
      a = c || {};
      c = a.xhrHandleNetworkFailure;
      var d = a.maxConcurrentRequests,
        e = a.soothingFactor,
        f = a.fixFinishRequest;
      a = a.requestTimeout;
      this.$NetworkRequestPipeline9 = !!c;
      this.$NetworkRequestPipeline10 = !!f;
      this.$NetworkRequestPipeline8.setOnItemAdded(
        this.$NetworkRequestPipeline15
      );
      d !== undefined && (this.$NetworkRequestPipeline1 = d);
      e !== undefined && (this.$NetworkRequestPipeline2 = e);
      a !== undefined && (this.$NetworkRequestPipeline13 = a);
      this.$NetworkRequestPipeline15();
    }
    a.prototype.$NetworkRequestPipeline18 = function () {
      var a = this.$NetworkRequestPipeline3;
      this.$NetworkRequestPipeline3++;
      return a;
    };
    a.prototype.$NetworkRequestPipeline17 = function () {
      if (
        this.$NetworkRequestPipeline14 &&
        this.$NetworkRequestPipeline5 < this.$NetworkRequestPipeline1
      ) {
        var a = this.$NetworkRequestPipeline19(this.$NetworkRequestPipeline14);
        a || (this.$NetworkRequestPipeline14 = null);
      }
    };
    a.prototype.$NetworkRequestPipeline20 = function (a) {
      if (a.hasEnded) return !1;
      b('clearTimeout')(a.timeout);
      a.hasEnded = !0;
      this.$NetworkRequestPipeline14 = this.$NetworkRequestPipeline16();
      this.$NetworkRequestPipeline17();
      return !0;
    };
    a.prototype.$NetworkRequestPipeline19 = function (a) {
      __p && __p();
      if (a.xhrRequest) return !0;
      var c = b('performanceNow')(),
        d = this.$NetworkRequestPipeline8.dequeue();
      if (!d) {
        this.$NetworkRequestPipeline4.setNetworkIdle();
        return !1;
      }
      var e = d.xhrRequest;
      d = d.estimatedSize;
      var f = !1,
        g = function () {
          if (!this.$NetworkRequestPipeline10) return !1;
          if (f) return !0;
          f = !0;
          return !1;
        }.bind(this),
        i,
        j = function (d) {
          if (!g()) {
            d = b('VideoPlayerResourceTimer').getResourceTimingEntry(
              e.getURI().toString(),
              c,
              b('performanceNow')()
            );
            this.$NetworkRequestPipeline4.addEntry(a.id, d);
            this.$NetworkRequestPipeline5--;
            this.$NetworkRequestPipeline20(a) ||
              this.$NetworkRequestPipeline17();
          }
          i && i.remove();
        }.bind(this),
        k = function () {
          g() ||
            (this.$NetworkRequestPipeline5--,
            this.$NetworkRequestPipeline20(a) ||
              this.$NetworkRequestPipeline17()),
            i && i.remove();
        }.bind(this);
      f ||
        (i = this.addListener('evict', function (a) {
          e === a.xhrRequest && k();
        }));
      j = b('getXHRRequestHandlerHelper')(e)
        .addResponseHandler(j)
        .addAbortHandler(k)
        .addErrorHandler(k)
        .addNetworkFailureHandler(
          function () {
            this.$NetworkRequestPipeline9 && k();
          }.bind(this)
        );
      this.$NetworkRequestPipeline13 && j.addTimeoutHandler(k);
      a.xhrRequest = e;
      this.$NetworkRequestPipeline5++;
      a.timeout = h(
        function () {
          this.$NetworkRequestPipeline20(a);
        }.bind(this),
        this.$NetworkRequestPipeline21(e, d || undefined)
      );
      this.$NetworkRequestPipeline11 = this.$NetworkRequestPipeline12;
      this.$NetworkRequestPipeline12 = e.getURI().toString();
      this.$NetworkRequestPipeline13 &&
        e.setTimeout(this.$NetworkRequestPipeline13);
      e.send();
      return !0;
    };
    a.prototype.evictRequest = function (a) {
      this.emit('evict', { xhrRequest: a });
    };
    a.prototype.getRecentBlockingRequestUrl = function () {
      return this.$NetworkRequestPipeline11;
    };
    a.prototype.$NetworkRequestPipeline16 = function () {
      var a = this.$NetworkRequestPipeline18();
      a = { id: a, hasEnded: !1, xhrRequest: null, timeout: null };
      return a;
    };
    a.prototype.$NetworkRequestPipeline21 = function (a, b) {
      a = this.$NetworkRequestPipeline4.getEstimatedDownloadTime(b);
      b = this.$NetworkRequestPipeline4.getEstimatedTimeToFirstByte();
      var c = this.$NetworkRequestPipeline4.getOptimisticTimeToFirstByte();
      return (a + b - c) * this.$NetworkRequestPipeline2;
    };
    e.exports = a;
  },
  null
);
__d(
  'VideoClientEdgeCooperation',
  ['clearTimeout', 'gkx', 'setTimeoutAcrossTransitions'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = b('gkx')(
        'AT4FCWD9S53UDtOrRSY9Zx7NzsoO-pBlAiTb5YSo3lCjpTsQt4JukbLnEU-rTpIzW3xv20NfAhwK6KX23Gc_jkLjRFQezUbT8rHyoNBpyHYVuA'
      ),
      h = 'X-FB-CEC-Video-Limit'.toLowerCase(),
      i = 1e3 * 60 * 2,
      j = /[\r\n]+/,
      k = null,
      l = null;
    function m() {
      (k = null), b('clearTimeout')(l), (l = null);
    }
    var n = (e.exports = {
      updateFromXHR: function (a) {
        this.updateFromHeaders(a.getAllResponseHeaders());
      },
      updateFromHeaders: function (a) {
        if (!g) return;
        a = a.trim().split(j);
        a.forEach(function (a) {
          a = a.split(': ');
          var b = a.shift().toLowerCase();
          a = a.shift();
          b === h && n._updateFromLimitHeader(a);
        });
      },
      updateFromResponse: function (a) {
        if (!g) return;
        a = a.headers;
        if (!a.has(h)) return;
        a = a.get(h);
        a && n._updateFromLimitHeader(a);
      },
      _updateFromLimitHeader: function (a) {
        a = a.match('s:([\\.0-9]+)');
        if (!a) return;
        a = Number(a[1]);
        k === null && (k = a);
        a <= k &&
          ((k = a),
          b('clearTimeout')(l),
          (l = b('setTimeoutAcrossTransitions')(m, i)));
      },
      applyBandwidthLimit: function (a, b) {
        if (!g) return a;
        return k !== null ? Math.min(a, b) * k : a;
      },
    });
  },
  null
);
__d(
  'PriorityRequestQueue',
  ['invariant', 'EventEmitter'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h;
    c = babelHelpers.inherits(a, b('EventEmitter'));
    h = c && c.prototype;
    function a() {
      var a, b;
      for (var c = arguments.length, d = new Array(c), e = 0; e < c; e++)
        d[e] = arguments[e];
      return (
        (b = (a = h.constructor).call.apply(a, [this].concat(d))),
        (this.$PriorityRequestQueue1 = new Map()),
        (this.$PriorityRequestQueue2 = new Map()),
        (this.$PriorityRequestQueue3 = function () {}),
        b
      );
    }
    a.prototype.dequeue = function () {
      return this.$PriorityRequestQueue4(Infinity);
    };
    a.prototype.setOnItemAdded = function (a) {
      this.$PriorityRequestQueue3 = a;
    };
    a.prototype.$PriorityRequestQueue4 = function (a) {
      var b = -Infinity;
      Array.from(this.$PriorityRequestQueue1.keys()).forEach(function (c) {
        c < a && (b = Math.max(b, c));
      });
      if (b === -Infinity) return null;
      var c = this.$PriorityRequestQueue1.get(b);
      c || g(0, undefined);
      c = this.$PriorityRequestQueue5(c);
      return c ? c : this.$PriorityRequestQueue4(b);
    };
    a.prototype.$PriorityRequestQueue5 = function (a) {
      __p && __p();
      var b = a.queues,
        c = a.lastDequeued;
      if (!b.size) return null;
      var d = Array.from(b),
        e = c
          ? d.findIndex(function (a) {
              return a === c;
            })
          : -1;
      for (var f = e + 1; f <= e + b.size; f++) {
        var g = f % b.size;
        g = d[g];
        var h = g.dequeue();
        if (h) {
          a.lastDequeued = g;
          return h;
        }
      }
      return null;
    };
    a.prototype.setQueue = function (a, b) {
      __p && __p();
      var c = this.$PriorityRequestQueue2.get(a);
      if (c === b) return;
      c || this.$PriorityRequestQueue3('append');
      this.removeQueue(a);
      c = this.$PriorityRequestQueue1.get(b);
      c || (c = { lastDequeued: null, queues: new Set() });
      c.queues.add(a);
      a.setOnItemAdded(
        function (b) {
          this.$PriorityRequestQueue6(a, b);
        }.bind(this)
      );
      this.$PriorityRequestQueue2.set(a, b);
      this.$PriorityRequestQueue1.set(b, c);
    };
    a.prototype.removeQueue = function (a) {
      var b = this.$PriorityRequestQueue7(a);
      a.setOnItemAdded(function () {});
      this.$PriorityRequestQueue2['delete'](a);
      b && b.queues['delete'](a);
    };
    a.prototype.$PriorityRequestQueue6 = function (a, b) {
      this.$PriorityRequestQueue3(b),
        b === 'prepend' && this.$PriorityRequestQueue7(a);
    };
    a.prototype.$PriorityRequestQueue7 = function (a) {
      __p && __p();
      var b = this.$PriorityRequestQueue2.get(a);
      if (b !== undefined && b !== null) {
        b = this.$PriorityRequestQueue1.get(b);
        b || g(0, undefined);
        var c = b.queues;
        if (b.lastDequeued === a) {
          c = Array.from(c);
          var d = c.findIndex(function (b) {
            return b === a;
          });
          b.lastDequeued = c[d - 1] || null;
        }
        return b;
      }
      return null;
    };
    a.prototype.demandReschedule = function () {
      this.emit('demand_reschedule');
    };
    e.exports = a;
  },
  null
);
__d(
  'VideoPipelineProvider',
  [
    'NetworkRequestPipeline',
    'PriorityRequestQueue',
    'VideoPlayerShakaGlobalConfig',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = new Map();
    function a(a) {
      var c = g.get(a);
      if (!c) {
        var d = new (b('PriorityRequestQueue'))(),
          e = b('VideoPlayerShakaGlobalConfig').getNumber(
            'request_pipeline_soothing_factor',
            2
          ),
          f = b('VideoPlayerShakaGlobalConfig').getNumber(
            'request_pipeline_max_concurrent_requests',
            2
          );
        a === 'audio' &&
          ((e = b('VideoPlayerShakaGlobalConfig').getNumber(
            'audio_request_pipeline_soothing_factor',
            1
          )),
          (f = b('VideoPlayerShakaGlobalConfig').getNumber(
            'audio_request_pipeline_max_concurrent_requests',
            1
          )));
        f = new (b('NetworkRequestPipeline'))(d, {
          xhrHandleNetworkFailure: b('VideoPlayerShakaGlobalConfig').getBool(
            'xhr_handle_network_failure',
            !0
          ),
          maxConcurrentRequests: f,
          soothingFactor: e,
          fixFinishRequest: b('VideoPlayerShakaGlobalConfig').getBool(
            'skip_old_handler_on_finished_requests',
            !1
          ),
          requestTimeout: b('VideoPlayerShakaGlobalConfig').getNumber(
            'request_pipeline_timeout_ms',
            0
          ),
        });
        c = { requestQueue: d, pipeline: f };
        g.set(a, c);
      }
      return c;
    }
    e.exports = { getPriorityRequestQueueAndPipeline: a };
  },
  null
);
__d(
  'VideoSegmentRequestQueue',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a() {
      (this.$1 = function () {}), (this.$2 = new Map()), (this.$3 = new Map());
    }
    a.prototype.dequeue = function () {
      __p && __p();
      var a = this.$3.entries().next().value;
      if (a) {
        this.$3['delete'](a[0]);
        return a[1] || null;
      }
      a = this.$2.entries().next().value;
      if (!a) return null;
      this.$2['delete'](a[0]);
      return a[1] || null;
    };
    a.prototype.setOnItemAdded = function (a) {
      this.$1 = a;
    };
    a.prototype.append = function (a, b, c) {
      this.$4(a, b, c, this.$2, 'append');
      return this;
    };
    a.prototype.clearNormalQueue = function () {
      this.$2.clear();
    };
    a.prototype.changeToTopPri = function (a) {
      var b = this.$2.get(a);
      b && (this.$2['delete'](a), this.$3.set(a, b));
    };
    a.prototype.removeTopPriSegment = function (a) {
      var b = this.$3.get(a);
      this.$3['delete'](a);
      return b ? b.xhrRequest : null;
    };
    a.prototype.isEmpty = function () {
      return this.$2.size === 0 && this.$3.size === 0;
    };
    a.prototype.prependTopPri = function (a, b, c) {
      var d = this.$3;
      this.$3 = new Map();
      this.$5(a, b, c, d, this.$3);
    };
    a.prototype.prepend = function (a, b, c) {
      var d = this.$2;
      this.$2 = new Map();
      this.$5(a, b, c, d, this.$2);
    };
    a.prototype.$5 = function (a, b, c, d, e) {
      this.$4(a, b, c, e, 'prepend'),
        d.forEach(
          function (b, c) {
            var a = b.xhrRequest;
            b = b.estimatedSize;
            this.$6(c, a, b, e);
          }.bind(this)
        );
    };
    a.prototype.$4 = function (a, b, c, d, e) {
      this.$6(a, b, c, d), this.$1(e);
    };
    a.prototype.$6 = function (a, b, c, d) {
      b = { xhrRequest: b, estimatedSize: c };
      d.set(a, b);
    };
    e.exports = a;
  },
  null
);
__d(
  'createVideoResponsePromise',
  [
    'Promise',
    'VideoPlayerShakaError',
    'VideoPlayerShakaGlobalConfig',
    'getXHRRequestHandlerHelper',
    'performanceNow',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = window.Promise || b('Promise');
    b('Promise').resolve();
    function a(a) {
      __p && __p();
      var c,
        d = a.getURI().toString(),
        e = a.send;
      a.send = function () {
        (c = b('performanceNow')()), e.call(a);
      };
      var f = new g(function (e, f) {
        __p && __p();
        var g = b('getXHRRequestHandlerHelper')(a)
          .addResponseHandler(function (a) {
            e({ response: a, responseTime: b('performanceNow')() - c });
          })
          .addAbortHandler(function (a) {
            if (a === 'reschedule') return;
            a = {
              errorMsg: 'Request aborted.',
              errorType: 'abort',
              errorCode: b('VideoPlayerShakaGlobalConfig').getBool(
                'fix_shaka_xhr_error_status',
                !0
              )
                ? ''
                : 0,
              errorRawTransportStatus: 0,
            };
            a = b('VideoPlayerShakaError').translateError(a, d, 'aborted');
            f(a);
          })
          .addErrorHandler(function (a) {
            a = b('VideoPlayerShakaError').translateError(a, d, 'net');
            f(a);
          })
          .addNetworkFailureHandler(function (a) {
            if (
              b('VideoPlayerShakaGlobalConfig').getBool(
                'xhr_handle_network_failure',
                !0
              )
            ) {
              a = b('VideoPlayerShakaError').translateError(a, d, 'net');
              f(a);
            }
          });
        b('VideoPlayerShakaGlobalConfig').getNumber(
          'request_pipeline_timeout_ms',
          0
        ) &&
          g.addTimeoutHandler(function () {
            var a = b('VideoPlayerShakaError').createTimeoutError(d);
            f(a);
          });
      });
      return f;
    }
    e.exports = a;
  },
  null
);
__d(
  'VideoSegmentRequestPipeline',
  [
    'NetworkRequestPipeline',
    'SubscriptionsHandler',
    'VideoClientEdgeCooperation',
    'VideoPipelineProvider',
    'VideoPlayerResourceTimer',
    'VideoPlayerShakaError',
    'VideoPriorityCalculator',
    'VideoSegmentInfoHelper',
    'VideoSegmentRequestQueue',
    'createVideoResponsePromise',
    'getXHRRequestHandlerHelper',
    'performanceNow',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a, c, d, e, f, g, h) {
      __p && __p();
      this.$2 = new Map();
      this.$3 = new Map();
      this.$4 = null;
      this.$5 = null;
      this.$6 = null;
      this.$12 = new Map();
      this.$13 = new Map();
      this.$14 = null;
      this.$16 = 0;
      this.$17 = new (b('SubscriptionsHandler'))();
      this.$21 = function () {
        if (this.$20() === b('VideoPriorityCalculator').getMaxPriority())
          return;
        this.$1.getBool('enable_rescheduler', !1) &&
          this.$12.size > 0 &&
          this.$25();
      }.bind(this);
      this.$1 = a;
      this.$19 = g;
      this.$11 = new (b('VideoSegmentRequestQueue'))();
      if (this.$1.getBool('enable_global_scheduler', !0)) {
        a = b('VideoPipelineProvider').getPriorityRequestQueueAndPipeline(c);
        g = a.requestQueue;
        a = a.pipeline;
        this.$14 = g;
        this.$15 = a;
      } else
        this.$15 = new (b('NetworkRequestPipeline'))(this.$11, {
          xhrHandleNetworkFailure: this.$1.getBool(
            'xhr_handle_network_failure',
            !0
          ),
          maxConcurrentRequests: this.$1.getNumber(
            'request_pipeline_max_concurrent_requests',
            2
          ),
          soothingFactor: this.$1.getNumber(
            'request_pipeline_soothing_factor',
            2
          ),
          fixFinishRequest: this.$1.getBool(
            'skip_old_handler_on_finished_requests',
            !1
          ),
          requestTimeout: this.$1.getNumber('request_pipeline_timeout_ms', 0),
        });
      g = this.$14;
      g &&
        (g.setQueue(this.$11, this.$20()),
        this.$17.addSubscriptions(
          g.addListener('demand_reschedule', this.$21)
        ));
      this.$9 = c;
      this.$7 = d;
      this.$8 = h;
      this.$10 = e;
      this.$18 = f;
    }
    a.prototype.enqueue = function (a, c) {
      var d = b('VideoSegmentInfoHelper').createRequest(a),
        e = b('VideoSegmentInfoHelper').estimateRequestSize(a),
        f = b('createVideoResponsePromise')(d),
        g = d.send;
      d.send = function () {
        this.$12.set(a, d), this.$22(a, d, c), g.call(d);
      }.bind(this);
      this.$11.append(a, d, e);
      this.$23();
      return f;
    };
    a.prototype.lockRequest = function (a) {
      this.$11.changeToTopPri(a),
        this.$13.set(a, {
          lockedTime: b('performanceNow')(),
          rescheduleCount: 0,
        });
    };
    a.prototype.cancelUnlockedRequests = function () {
      this.$11.clearNormalQueue(),
        this.$12.forEach(
          function (a, b) {
            this.$13.has(b) || (a.abort(), this.$12['delete'](b));
          }.bind(this)
        );
    };
    a.prototype.abortLockedRequest = function (a) {
      var b = this.$11.removeTopPriSegment(a);
      b && b.abort();
      b = this.$12.get(a);
      b && (b.abort(), this.$24(a));
    };
    a.prototype.$24 = function (a) {
      this.$12['delete'](a), this.$13['delete'](a);
    };
    a.prototype.unload = function () {
      this.$14 && this.$14.removeQueue(this.$11), this.$17.release();
    };
    a.prototype.setPriority = function (a) {
      if (this.$20() === a) return;
      this.$16 = a;
      var b = this.$14;
      b && (b.setQueue(this.$11, a), this.$23());
    };
    a.prototype.getResourceTimingEntry = function (a) {
      return this.$3.get(a) || null;
    };
    a.prototype.$23 = function () {
      var a = this.$14;
      a &&
        !this.$11.isEmpty() &&
        this.$20() >= b('VideoPriorityCalculator').getMaxPriority() &&
        a.demandReschedule();
    };
    a.prototype.$25 = function () {
      Array.from(this.$12.values()).forEach(
        function (a) {
          this.$15.evictRequest(a);
        }.bind(this)
      );
    };
    a.prototype.$20 = function () {
      return this.$16;
    };
    a.prototype.$26 = function (a) {
      var b = this.$13.get(a) || {},
        c = b.lockedTime;
      b = b.rescheduleCount;
      b = (b || 0) + 1;
      this.$24(a);
      this.$13.set(a, { lockedTime: c, rescheduleCount: b });
    };
    a.prototype.$22 = function (a, c, d) {
      __p && __p();
      var e = c.getURI().toString(),
        f = this.$20(),
        g,
        h,
        i = this.$15.getRecentBlockingRequestUrl(),
        j = !1;
      i && i !== this.$5 && (j = !0);
      this.$1.getBool('fixing_scheduler_xhr_request_leaks', !0)
        ? ((h = this.$5), (this.$5 = e))
        : ((g = this.$4), (this.$4 = c));
      if (a) {
        var k = this.$27(e, f, j, d),
          l = b('performanceNow')(),
          m = !1,
          n = function () {
            if (!this.$1.getBool('skip_old_handler_on_finished_requests', !1))
              return !1;
            if (m) return !0;
            m = !0;
            return !1;
          }.bind(this);
        i = b('getXHRRequestHandlerHelper')(c)
          .addResponseHandler(
            Object.assign(
              function (d, f) {
                __p && __p();
                b('VideoClientEdgeCooperation').updateFromHeaders(f);
                this.$8 && this.$8.handleHeaders(f);
                if (!n()) {
                  f = b('performanceNow')();
                  var i = b('VideoPlayerResourceTimer').getResourceTimingEntry(
                      e,
                      l,
                      f
                    ),
                    j = d.byteLength;
                  if (this.$10) {
                    f = i ? this.$28(i, c, g, h) : f - l;
                    this.$10.sample(
                      f,
                      j,
                      this.$9 === 'video',
                      { timeToLastByte: f },
                      this.$18,
                      this.$7,
                      this.$1.getBool('evaluate_abr_on_fetch_end', !1)
                    );
                  }
                  k && this.$29(a, k, d.byteLength, i, l);
                  this.$24(a);
                }
              }.bind(this),
              { includeHeaders: !0 }
            )
          )
          .addAbortHandler(
            function (c) {
              if (!n()) {
                var d = {
                  errorMsg: 'Request aborted.',
                  errorType: 'abort',
                  errorCode: this.$1.getBool('fix_shaka_xhr_error_status', !0)
                    ? ''
                    : 0,
                  errorRawTransportStatus: 0,
                };
                d = b('VideoPlayerShakaError').translateError(d, e, 'aborted');
                c === 'reschedule' ? this.$26(a) : this.$24(a);
                k && k.setError(d).log();
              }
            }.bind(this)
          )
          .addErrorHandler(
            function (c) {
              if (!n()) {
                c = b('VideoPlayerShakaError').translateError(c, e, 'net');
                k && k.setError(c).log();
                this.$24(a);
              }
            }.bind(this)
          )
          .addNetworkFailureHandler(
            function (c) {
              if (!n() && this.$1.getBool('xhr_handle_network_failure', !0)) {
                c = b('VideoPlayerShakaError').translateError(c, e, 'net');
                k && k.setError(c).log();
                this.$24(a);
              }
            }.bind(this)
          );
        this.$1.getNumber('request_pipeline_timeout_ms', 0) &&
          i.addTimeoutHandler(
            function () {
              var c = b('VideoPlayerShakaError').createTimeoutError(e);
              k && k.setError(c).log();
              this.$24(a);
            }.bind(this)
          );
      }
    };
    a.prototype.$27 = function (a, b, c, d) {
      var e = null;
      this.$7 &&
        ((e = this.$7.getOperationLogger('request').setResource(a).start()),
        e
          .setReason(d)
          .setPriorityFloat(b)
          .setType(this.$9 || null)
          .setWasDelayed(c)
          .setInitiator('pipeline'),
        this.$19 && e.setPushed(this.$19.getPushCountForUrl(a)));
      return e;
    };
    a.prototype.$29 = function (a, b, c, d, e) {
      __p && __p();
      a = this.$13.get(a) || {};
      var f = a.lockedTime;
      a = a.rescheduleCount;
      var g = 0;
      f && (g = e - f);
      a || (a = 0);
      b.setLength(c);
      if (d) {
        e = d.timeToFirstByte;
        f = d.timeToLastByte;
        c = d.timeToRequestStart;
        b.setTimeToFirstByte(Math.round(e))
          .setTimeToLastByte(Math.round(f))
          .setTimeToRequestStart(Math.round(c))
          .setTimeToRequestSent(Math.round(g))
          .setRescheduleCount(Math.round(a));
      }
      b.log();
    };
    a.prototype.$28 = function (a, b, c, d) {
      __p && __p();
      var e = null;
      c &&
        ((e = this.$2.get(c)),
        this.$1.getBool('fixing_scheduler_xhr_request_leaks', !0)
          ? this.$2['delete'](c)
          : this.$2['delete'](e));
      d && ((e = this.$3.get(d)), this.$3['delete'](d));
      this.$1.getBool('fixing_scheduler_xhr_request_leaks', !0)
        ? this.$3.set(b.getURI().toString(), a)
        : this.$2.set(b, a);
      if (e) {
        c = e.startTime + e.timeToLastByte;
        d = a.startTime + a.timeToLastByte;
        b = Math.min(d - c, a.timeToLastByte);
        return Math.max(a.timeToLastByte - a.timeToFirstByte, b);
      }
      return a.timeToLastByte;
    };
    e.exports = a;
  },
  null
);
__d(
  'SegmentRequestManager',
  [
    'invariant',
    'BinarySearch',
    'SegmentsUpdateHelper',
    'TrackedPromise',
    'VideoPriorityCalculator',
    'VideoSegmentInfoHelper',
    'VideoSegmentPromiseBuffer',
    'VideoSegmentRequestPipeline',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h = 3;
    function a(a, c, d, e, f, g, h, i) {
      (this.$2 = new Map()),
        (this.$3 = new Map()),
        (this.$4 = 0),
        (this.$5 = null),
        (this.$7 = []),
        (this.$8 = new (b('VideoSegmentPromiseBuffer'))()),
        (this.$9 = !1),
        (this.$11 = 0),
        (this.$1 = a),
        (this.$6 = new (b('VideoSegmentRequestPipeline'))(a, c, e, f, g, h, i)),
        (this.$12 = d || b('VideoPriorityCalculator').calculate);
    }
    a.prototype.updateSegmentsByShakaReferences = function (a, c) {
      new (b('SegmentsUpdateHelper'))(this.$3, this.$2).updateSegments(a, c);
    };
    a.prototype.updateSegments = function (a, c) {
      var d = this.getSegments(a);
      c.forEach(
        function (a) {
          var c = b('VideoSegmentInfoHelper').getRequestCacheKey(a.requestInfo);
          this.$3.has(c) || (this.$3.set(c, a), this.$13(d, a));
        }.bind(this)
      );
      this.$2.set(a, d);
    };
    a.prototype.getSegments = function (a) {
      a = this.$2.get(a);
      return a || [];
    };
    a.prototype.hasSegment = function (a) {
      a = b('VideoSegmentInfoHelper').getRequestCacheKey(a.requestInfo);
      return this.$3.has(a);
    };
    a.prototype.updatePriorityWithNewPlayhead = function (a) {
      this.$10 && (this.$10.playhead = a);
      this.$14();
      return this;
    };
    a.prototype.updatePriorityWithNewPlayingState = function (a) {
      this.$10 && (this.$10.isPlaying = a);
      this.$14();
      return this;
    };
    a.prototype.updatePriorityWithNewAdjustment = function (a) {
      if (a === this.$11) return this;
      a <= 0 || g(0, undefined);
      this.$11 = a;
      this.$14();
      return this;
    };
    a.prototype.updatePlayerState = function (a, b) {
      __p && __p();
      var c = this.$2.get(a);
      this.$10 = b;
      if (!c) return this;
      var d = this.$5;
      this.$5 = a;
      if (this.$9) return this;
      this.$14();
      c = this.$15(b, c);
      b = b.additionalSegmentsRequired;
      var e = [];
      b.length > 0 &&
        ((e = this.$16(b)),
        (c = c.concat(e).sort(function (a, b) {
          return a.startTime - b.startTime;
        })));
      if (d !== a) {
        this.$17();
        this.$18(c, e);
        return this;
      }
      b = [];
      this.$8.hasOtherPendingSegments(c)
        ? (this.$17(), (b = c))
        : ((b = c.filter(
            function (a) {
              return !this.$8.hasSegmentPromise(a);
            }.bind(this)
          )),
          this.$8.removeSegmentPromisesOlderThan(c[0], this.$1));
      this.$18(b, e);
      return this;
    };
    a.prototype.getPromise = function (a) {
      a = b('VideoSegmentInfoHelper').getRequestCacheKey(a);
      a = this.$3.get(a);
      if (!a)
        throw new Error(
          'the given request info is not found it segments cache '
        );
      var c = this.$8.getSegmentPromise(a),
        d;
      c && (!c.isPending() || this.$8.isFirstPendingSegment(a))
        ? (d = c.getPromise())
        : (this.$17(),
          (d = this.$6.enqueue(a)),
          (c = new (b('TrackedPromise'))(d, this.$1)),
          this.$8.appendSegmentPromise(a, c));
      this.$6.lockRequest(a);
      return d;
    };
    a.prototype.getResourceTimingEntry = function (a) {
      return this.$6.getResourceTimingEntry(a);
    };
    a.prototype.$16 = function (a) {
      var c = [];
      a.forEach(
        function (a) {
          a = this.$3.get(
            b('VideoSegmentInfoHelper').getRequestCacheKey(
              b('SegmentsUpdateHelper').createSegmentInfo(a).requestInfo
            )
          );
          a && c.push(a);
        }.bind(this)
      );
      return c;
    };
    a.prototype.$13 = function (a, b) {
      var c = Number.POSITIVE_INFINITY;
      for (var d = 0; d <= a.length; d++) {
        var e = a.length - d,
          f = e >= 1 ? a[e - 1].startTime : Number.NEGATIVE_INFINITY;
        if (f <= b.startTime && b.startTime < c) {
          e === a.length ? a.push(b) : a.splice(e, 0, b);
          return;
        }
        c = f;
      }
    };
    a.prototype.$14 = function () {
      if (!this.$10) return;
      var a = this.$12(
        this.$10,
        this.$1.getNumber('global_scheduler_priority_threshold', 6)
      );
      a += this.$11;
      this.$6.setPriority(a);
    };
    a.prototype.$17 = function () {
      this.$6.cancelUnlockedRequests(), this.$8.clearAllSegmentPromises();
    };
    a.prototype.$18 = function (a, c) {
      __p && __p();
      for (
        var a = a,
          d = Array.isArray(a),
          e = 0,
          a = d
            ? a
            : a[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var f;
        if (d) {
          if (e >= a.length) break;
          f = a[e++];
        } else {
          e = a.next();
          if (e.done) break;
          f = e.value;
        }
        f = f;
        if (b('VideoSegmentInfoHelper').isPrefetchedRequest(f)) return;
        var g = c.includes(f) ? 'replacing_lower_quality_buffer' : null;
        g = this.$6.enqueue(f, g);
        this.$8.appendSegmentPromise(f, new (b('TrackedPromise'))(g, this.$1));
      }
    };
    a.prototype.abortRequest = function (a) {
      a = b('VideoSegmentInfoHelper').getRequestCacheKey(a);
      a = this.$3.get(a);
      a && (this.$6.abortLockedRequest(a), this.$8.removeSegmentPromise(a));
    };
    a.prototype.disable = function () {
      if (this.$9) return;
      this.$6.cancelUnlockedRequests();
      this.$6.unload();
      this.$9 = !0;
    };
    a.prototype.enable = function () {
      this.$9 = !1;
    };
    a.prototype.isDisabled = function () {
      return this.$9;
    };
    a.prototype.$15 = function (a, b) {
      __p && __p();
      var c = a.playhead,
        d = a.bufferEnd;
      a = a.bufferingGoal;
      d = Math.max(d, c);
      var e = [];
      d = this.$19(d, b);
      for (var d = Math.max(d, 0); d < b.length; d++) {
        var f = b[d];
        if (f.startTime > c + a) break;
        e.push(f);
      }
      return e;
    };
    a.prototype.$19 = function (a, c) {
      return b('BinarySearch').leastUpperBound(
        function (b) {
          var d = this.$20(c[b].startTime);
          b = this.$20(c[b].endTime);
          a = this.$20(a);
          return d <= a && b > a ? 0 : d - a;
        }.bind(this),
        0,
        0,
        c.length,
        function (a, b) {
          return a - b;
        }
      );
    };
    a.prototype.$20 = function (a) {
      return +a.toFixed(h) || 0;
    };
    e.exports = a;
  },
  null
);
__d(
  'ShakaTimelineSegmentIndexUtils',
  ['VideoPlayerShakaGlobalConfig'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = function (a, b, c) {
        return Math.abs(a - b) < c;
      },
      h = function (a, b, c) {
        return !g(a, b, c) && a - b < 0;
      },
      i = function (a, b, c) {
        return g(a, b, c) || a - b < 0;
      },
      j = function (a, b, c) {
        return g(a, b, c) || a - b > 0;
      };
    function k(b) {
      var a = b.length;
      for (var c = 0; c < b.length; ++c) a += b[c].repeat;
      return a;
    }
    function l(b, c, a) {
      __p && __p();
      c = a - c;
      var d = 0;
      if (a < 1 || c < 0 || b.length < 1)
        throw new RangeError('Index out of range.');
      for (a = b.length - 1; a > -1; --a) {
        var e = b[a].repeat + 1;
        d = e - c;
        if (d < 0) {
          c = Math.abs(d);
          continue;
        }
        break;
      }
      return { S: a, r: d };
    }
    function a(a, b, c, d) {
      __p && __p();
      var e = b.length - 1,
        f = 1e-7,
        g = function (a) {
          return a / c + d;
        };
      for (; e > -1; --e) if (i(g(b[e].startTime), a, f)) break;
      if (e === -1) return e;
      var k = b[e],
        l = k.duration / c,
        m = 0;
      for (var n = 0; n < e; ++n) m += b[n].repeat + 1;
      n = g(k.startTime);
      var o = n + l * (k.repeat + 1);
      if (j(a, o, f) && b[e + 1] && h(a, g(b[e + 1].startTime), f))
        return m + k.repeat;
      else if (j(a, o, f) && !b[e + 1]) return -1;
      g = m + Math.floor((a - n) / l);
      n += l * (g - m);
      o = n + l;
      return j(a, n, f) && h(a, o, f) ? g : g + 1;
    }
    function c(a, c, d, e) {
      __p && __p();
      c = c - a;
      a = a;
      var f = 0,
        g = 0,
        h = !0;
      for (var i = 0; i < d.length; ++i) {
        var j = d[i],
          k = j.repeat;
        k = k + 1;
        var l = Math.min(g + k, a);
        l = l - g;
        var m = j.startTime,
          n = void 0;
        l &&
          ((n = m + l * j.duration),
          d[i + 1] && n > d[i + 1].startTime && (n = d[i + 1].startTime),
          (m = n),
          (f = n),
          (h = !1));
        for (var j = l; j < k; ++j) {
          l = null;
          var o = b('VideoPlayerShakaGlobalConfig').getBool(
            'fix_time_point_boundary_gap_expansion',
            !1
          );
          !o && !h && m != f && (l = m - f || null);
          n = m + d[i].duration;
          o = o
            ? d[i + 1] && j + 1 >= k && n !== d[i + 1].startTime
            : d[i + 1] && n > d[i + 1].startTime;
          o &&
            ((l = d[i + 1].startTime - n), (f = n), (n = d[i + 1].startTime));
          o = g + j;
          e(m, n, o, l, l !== null ? f : l);
          h = !1;
          if (--c <= 0) return;
          a++;
          m = n;
          f = n;
        }
        g += k;
      }
    }
    function d(a, b, c) {
      __p && __p();
      var d = [];
      if (a.length > 1) {
        var e = 0;
        for (var f = 0; f < a.length; ++f) {
          var g = a[f],
            h = g.startTime;
          g = h + (g.repeat + 1) * g.duration;
          if (f && h !== e) {
            var i = h - e;
            i > 0 && d.push({ start: e / b + c, end: h / b + c });
          }
          e = g;
        }
      }
      return d;
    }
    function m(a) {
      __p && __p();
      var b = [];
      if (a.length === 0) return b;
      b.push(a[0]);
      for (var c = 1; c < a.length; ++c) {
        var d = b[b.length - 1];
        if (d.duration !== a[c].duration) {
          b.push(a[c]);
          continue;
        }
        var e = d.startTime + d.duration * (d.repeat + 1);
        if (e === a[c].startTime) {
          d.repeat++;
          continue;
        }
        b.push(a[c]);
      }
      return b;
    }
    function f(a, b) {
      __p && __p();
      a = a.slice();
      b = b.slice();
      if (b.length === 0) return a;
      if (a.length === 0) {
        for (var c = 0; c < b.length; ++c) a.push(b[c]);
        return a;
      }
      c = a[a.length - 1];
      var d = c.startTime + c.duration * c.repeat;
      c = d + c.duration;
      var e = b[b.length - 1];
      e = e.startTime + e.duration * (e.repeat + 1);
      var f = k(b),
        g = [];
      if (c !== e) {
        for (var c = f - 1; c > -1; --c) {
          e = l(b, c, f);
          var h = b[e.S],
            i = h.duration;
          h = h.startTime + i * e.r;
          if (d !== h) g.push({ startTime: h, duration: i, repeat: 0 });
          else break;
        }
        while (g.length) a.push(g.pop());
      }
      e = m(a);
      return e;
    }
    function n(b, c, a) {
      __p && __p();
      if (c + 1 >= a) return p(b, a);
      a = l(b, c + 1, a);
      var d = a.S;
      a = a.r;
      var e = d,
        f = a;
      f === 0 ? ((d = e - 1), (a = b[d].repeat)) : ((d = e), (a = f - 1));
      a = b[d].startTime + b[d].duration * a;
      d = a + b[d].duration;
      f = f !== 0 ? null : b[e].startTime - d;
      var g = f ? d : null;
      d = f ? b[e].startTime : d;
      return {
        unscaledStartTime: a,
        unscaledEndTime: d,
        segmentReplacement: c,
        delta: f,
        previousEndTime: g,
      };
    }
    function o(b, a) {
      if (a < 1 || !b.length) throw new RangeError('Index out of range');
      return n(b, 0, a);
    }
    function p(b, a) {
      if (a < 1 || !b.length) throw new RangeError('Index out of range');
      var c = b.length - 1,
        d = b[c].repeat;
      d = b[c].startTime + b[c].duration * d;
      b = d + b[c].duration;
      return {
        unscaledStartTime: d,
        unscaledEndTime: b,
        segmentReplacement: a - 1,
        delta: null,
        previousEndTime: null,
      };
    }
    e.exports = {
      length: k,
      findIndex: a,
      findSTagAndRepeatValueByIndex: l,
      get: n,
      getSegments: c,
      getSeekRangeGaps: d,
      compressTimePoints: m,
      integrateTimePoints: f,
      first: o,
      last: p,
    };
  },
  null
);
__d(
  'VideoPlayerBitrateEstimator',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    a.prototype.sample = function (a, b) {};
    a.prototype.getTotalWeight = function () {
      return 0;
    };
    a.prototype.getEstimate = function () {
      return 0;
    };
    a.prototype.reset = function () {};
    function a() {}
    function b(a, b, c, d) {
      (this.$1 = a), (this.$2 = b), (this.$3 = c), (this.$4 = d);
    }
    b.prototype.getEstimate = function () {
      return this.$1.getTotalWeight() < this.$3
        ? this.$2
        : Math.round(this.$1.getEstimate());
    };
    b.prototype.sample = function (a, b) {
      a = a / b;
      b = b;
      a > this.getEstimate() && ((b *= this.$4), this.$1.reset());
      this.$1.sample(b, a);
    };
    e.exports = b;
  },
  null
);
__d(
  'VideoPlayerShakaBandwidthUtils',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    function g(a) {
      var b = 0;
      for (var c = 0; c < a.length; c++)
        b += (a[c].bytes * 8e3) / a[c].timeInMs;
      return b / a.length;
    }
    function h(a) {
      var b = g(a),
        c = 0;
      for (var d = 0; d < a.length; d++)
        c += Math.pow((a[d].bytes * 8e3) / a[d].timeInMs - b, 2);
      return Math.round(Math.sqrt(c / a.length));
    }
    function i(a, b) {
      b = Math.exp(Math.log(0.5) / b);
      var c = 0,
        d = 0;
      for (var e = 0; e < a.length; e++) {
        var f = (a[e].bytes * 8e3) / a[e].timeInMs,
          g = Math.pow(b, a[e].timeInMs / 1e3);
        c = f * (1 - g) + c * g;
        d += a[e].timeInMs / 1e3;
      }
      return Math.round(c / (1 - Math.pow(b, d)));
    }
    function j(a, b) {
      var c = g(a),
        d = [];
      for (var e = 0; e < a.length; e++)
        Math.abs(c - (a[e].bytes * 8e3) / a[e].timeInMs) < b && d.push(a[e]);
      return d;
    }
    function a(a, b, c, d) {
      var e = h(a);
      a = j(a, e * c);
      c = i(a, b);
      return c - e * d;
    }
    e.exports = {
      getBandwidthEstimate: a,
      getExponentiallyWeightedMovingAverageOfBandwidth: i,
      getStandardDeviationOfBandwidth: h,
      getMeanBandwidth: g,
      getBandwidthSamplesWithinRangeOfMean: j,
    };
  },
  null
);
__d(
  'VideoStreamingTaskQueueProvider',
  [
    'RoundRobinPriorityTaskQueue',
    'SequentialTaskScheduler',
    'VideoPlayerShakaGlobalConfig',
    'VideoPriorityCalculator',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = new Map(),
      h = new Map();
    function a(a) {
      a = i(a);
      return a ? a.getLength() : 0;
    }
    function i(a) {
      var c = g.get(a);
      if (!c) {
        c = new (b('RoundRobinPriorityTaskQueue'))(
          b('VideoPriorityCalculator').getMaxPriority(),
          b('VideoPlayerShakaGlobalConfig').getNumber('priority_precision', -1)
        );
        var d = new (b('SequentialTaskScheduler'))(c, { taskTimeout: 6e4 });
        d.start();
        g.set(a, c);
        h.set(a, d);
      }
      return c;
    }
    function c(a) {
      return h.get(a) || null;
    }
    e.exports = { getQueue: i, getQueueSize: a, getSchedulerForDebug: c };
  },
  null
);
__d(
  'getBandwidthPenaltyFactorForScheduledVideoCount',
  [],
  function (a, b, c, d, e, f) {
    function a(a, b, c, d) {
      a = Math.max(0, a - b + 1);
      b = 0;
      c = c;
      for (var e = 1; e <= a; e++) (b += c), (c *= d);
      return 1 - b;
    }
    e.exports = a;
  },
  null
);
__d(
  'getNeuralBandwidthEstimate',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a) {
      var b = a;
      if (b.length > 8) b = b.slice(0, 8);
      else if (b.length < 8) while (b.length < 8) b.push(0);
      var c = 1e9;
      return (
        j(
          a.map(function (a) {
            return a / c;
          })
        )[0] * c
      );
    }
    var g = [
        function (a, b) {
          a = 1 / (1 + Math.exp(-a));
          return !b ? a : a * (1 - a);
        },
      ],
      h = [
        776e-6, 0, 0, 0, 0, 0, 0, 0, 0.07993045087713074, 0.019315817148901328,
        0.49837995466162727, 0.019521651881765512, 0.00021613261390548784,
        0.07750491170273517, 0.06736225161443557, 0.0007569189868508071,
        0.8409143388252623, 0.01986646603812691, 0.0007195506066612518,
      ],
      i = [
        0, 0, 0, 0, 0, 0, 0, 0, -2.443292371536531, -3.9273261721766457,
        -0.0064802040303537645, -3.9165163604073605, -8.439402229432238,
        -2.4767407404009374, -2.6279320641013375, -7.185497123350212,
        1.6650469917803437, -3.8986556349267514, -7.2361638886289805,
      ];
    function j(a) {
      __p && __p();
      for (var b = 0; b < a.length; b++) h[b] = a[b];
      i[8] =
        h[0] * -20.85073990285843 +
        h[1] * -0.17466848432563759 +
        h[2] * -0.057525299304308844 +
        h[3] * 0.03110003879725791 +
        h[4] * -0.008895762588835858 +
        h[5] * -0.0683893713124604 +
        h[6] * 0.06576749148339567 +
        h[7] * -0.01772020718777774 +
        -2.4271121973719127;
      h[8] = g[0](i[8]);
      i[9] =
        h[0] * -529.6211404152259 +
        h[1] * -10.085931929547788 +
        h[2] * -4.540198005288279 +
        h[3] * -2.6352715249222896 +
        h[4] * -2.047125192304325 +
        h[5] * -1.8521580652576841 +
        h[6] * -2.4005121520581447 +
        h[7] * -0.07718938908000435 +
        -3.5163401672144303;
      h[9] = g[0](i[9]);
      i[10] =
        h[0] * 189.221355777461 +
        h[1] * 10.199243264545071 +
        h[2] * 4.697355964097093 +
        h[3] * 2.6339556539173423 +
        h[4] * 1.7925547331406204 +
        h[5] * 1.7015875595365062 +
        h[6] * 2.255633060777646 +
        h[7] * 0.01805203313602992 +
        -0.15331597611366352;
      h[10] = g[0](i[10]);
      i[11] =
        h[0] * -19.43067537504266 +
        h[1] * 8.73022147952729 +
        h[2] * 4.820819354033675 +
        h[3] * 2.709578269559789 +
        h[4] * 1.978560568303787 +
        h[5] * 1.9830323294564676 +
        h[6] * 2.5745137738069044 +
        h[7] * 0.09334179618953584 +
        -3.9014381563163276;
      h[11] = g[0](i[11]);
      i[12] =
        h[0] * -5.048452581794674 +
        h[1] * 14.938163257617958 +
        h[2] * 8.784340440836452 +
        h[3] * 4.64012793867896 +
        h[4] * 3.1756670528730058 +
        h[5] * 2.620356039948262 +
        h[6] * 3.7942580850886625 +
        h[7] * -0.029713142657160185 +
        -8.435484630228766;
      h[12] = g[0](i[12]);
      i[13] =
        h[0] * -21.10308480104038 +
        h[1] * -0.18020886205098594 +
        h[2] * -0.03715917747193107 +
        h[3] * -0.014443058733183056 +
        h[4] * 0.08847178195128587 +
        h[5] * 0.142772115586438 +
        h[6] * -0.0069832531579266015 +
        h[7] * -0.0921071783400488 +
        -2.46036474659533;
      h[13] = g[0](i[13]);
      i[14] =
        h[0] * -24.614999084523344 +
        h[1] * -0.5706213316377333 +
        h[2] * -0.5315686923846422 +
        h[3] * -0.41561197239084546 +
        h[4] * -0.4622208593249528 +
        h[5] * -0.47076637110996444 +
        h[6] * -0.5160286139457088 +
        h[7] * 0.09458872769476198 +
        -2.6088308248117476;
      h[14] = g[0](i[14]);
      i[15] =
        h[0] * -10.646367946852898 +
        h[1] * 9.894069563224784 +
        h[2] * 6.38876106194455 +
        h[3] * 4.440529733916467 +
        h[4] * 3.4585448009421538 +
        h[5] * 3.1241038175984204 +
        h[6] * 3.6086610959448384 +
        h[7] * -0.05630455554937189 +
        -7.177235541823454;
      h[15] = g[0](i[15]);
      i[16] =
        h[0] * 169.19579326461104 +
        h[1] * 10.173311065987626 +
        h[2] * 4.643577083747655 +
        h[3] * 2.5947613769479383 +
        h[4] * 1.8128565992680805 +
        h[5] * 1.7184203818262473 +
        h[6] * 2.2652341722655147 +
        h[7] * -0.013828130098586827 +
        1.5337510562070056;
      h[16] = g[0](i[16]);
      i[17] =
        h[0] * -18.836521088957262 +
        h[1] * 0.07459368402448659 +
        h[2] * 0.060777588023931 +
        h[3] * 0.18289413867450946 +
        h[4] * 0.16801985006774095 +
        h[5] * 0.16611109930358084 +
        h[6] * 0.09992971037111033 +
        h[7] * 0.01144813346735582 +
        -3.8840384945617203;
      h[17] = g[0](i[17]);
      i[18] =
        h[8] * -10.700053978575285 +
        h[9] * -137.47854623908006 +
        h[10] * 11.958608720277157 +
        h[11] * -7.615750916889078 +
        h[12] * -5.975976449386021 +
        h[13] * -10.809028988340401 +
        h[14] * -11.738069079393329 +
        h[15] * -5.935205222074537 +
        h[16] * -38.98332368718187 +
        h[17] * -9.626144857503322 +
        25.07046089429775;
      h[18] = g[0](i[18]);
      return [h[18]];
    }
    e.exports = a;
  },
  null
);
__d(
  'VideoPlayerLocalBandwidthEstimator',
  [
    'Banzai',
    'EventEmitter',
    'EventListener',
    'SubscriptionsHandler',
    'VideoPlayerAbrEvaluation',
    'VideoPlayerShakaBandwidthUtils',
    'VideoStreamingTaskQueueProvider',
    'getBandwidthPenaltyFactorForScheduledVideoCount',
    'getNeuralBandwidthEstimate',
    'guid',
    'requireWeak',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g, h;
    b('requireWeak')('Shaka', function (a) {
      a && a.util && (h = a.util.EWMACacheBandwidthEstimator);
    });
    c = babelHelpers.inherits(a, b('EventEmitter'));
    g = c && c.prototype;
    function a(a, c, d) {
      g.constructor.call(this),
        (this.$VideoPlayerLocalBandwidthEstimator3 = a),
        (this.$VideoPlayerLocalBandwidthEstimator1 = c),
        (this.$VideoPlayerLocalBandwidthEstimator4 = d),
        (this.$VideoPlayerLocalBandwidthEstimator5 = []),
        (this.$VideoPlayerLocalBandwidthEstimator6 = null),
        (this.$VideoPlayerLocalBandwidthEstimator7 = b('guid')()),
        (this.$VideoPlayerLocalBandwidthEstimator10 = new (b(
          'SubscriptionsHandler'
        ))()),
        this.$VideoPlayerLocalBandwidthEstimator10.addSubscriptions(
          b('EventListener').listen(
            this.$VideoPlayerLocalBandwidthEstimator1,
            'bandwidth',
            function (a) {
              return this.emit('bandwidth', a);
            }.bind(this)
          )
        ),
        this.$VideoPlayerLocalBandwidthEstimator4 &&
          this.$VideoPlayerLocalBandwidthEstimator4.getBool(
            'use_per_video_bandwidth_estimator',
            !1
          ) &&
          h &&
          (this.$VideoPlayerLocalBandwidthEstimator2 = new h(
            this.$VideoPlayerLocalBandwidthEstimator4.getNumber(
              'cache_delay',
              30
            ),
            this.$VideoPlayerLocalBandwidthEstimator4.getNumber(
              'cache_bandwidth',
              2e6
            )
          ));
    }
    a.prototype.setRepresentationID = function (a) {
      this.$VideoPlayerLocalBandwidthEstimator6 = a;
    };
    a.prototype.sample = function (a, b, c, d, e, f, g) {
      g === void 0 && (g = !1);
      c &&
        this.$VideoPlayerLocalBandwidthEstimator6 &&
        this.$VideoPlayerLocalBandwidthEstimator11(
          a,
          b,
          this.$VideoPlayerLocalBandwidthEstimator6,
          this.$VideoPlayerLocalBandwidthEstimator3.getVideoTracks()
        );
      a = [
        a,
        b,
        c,
        d,
        e,
        f,
        g,
        this.$VideoPlayerLocalBandwidthEstimator4.getBool(
          'estimator_override_cache_exclusion',
          !1
        ),
      ];
      (b = this.$VideoPlayerLocalBandwidthEstimator1).sample.apply(b, a);
      if (this.$VideoPlayerLocalBandwidthEstimator2) {
        (c = this.$VideoPlayerLocalBandwidthEstimator2).sample.apply(c, a);
      }
    };
    a.prototype.getRecentSamples = function () {
      return this.$VideoPlayerLocalBandwidthEstimator1.getRecentSamples();
    };
    a.prototype.supportsCaching = function () {
      return this.$VideoPlayerLocalBandwidthEstimator1.supportsCaching();
    };
    a.prototype.getEstimator = function () {
      return this.$VideoPlayerLocalBandwidthEstimator1;
    };
    a.prototype.getBandwidth = function (a) {
      __p && __p();
      var c = 0,
        d = this.$VideoPlayerLocalBandwidthEstimator12(),
        e = this.$VideoPlayerLocalBandwidthEstimator4.getNumber(
          'minimum_sample_count_to_use_new_estimator',
          0
        ),
        f = this.$VideoPlayerLocalBandwidthEstimator4.getNumber(
          'minimum_sample_count_to_use_deviation_penalty',
          0
        );
      if (e > 0) {
        var g = this.getRecentSamples();
        if (g.length >= e) {
          e = b('VideoPlayerShakaBandwidthUtils').getBandwidthEstimate(
            g.map(function (a) {
              return { bytes: a[0], timeInMs: a[1] };
            }),
            this.$VideoPlayerLocalBandwidthEstimator4.getNumber(
              'new_estimator_half_life',
              5
            ),
            this.$VideoPlayerLocalBandwidthEstimator4.getNumber(
              'new_estimator_standard_deviation_exclusion_factor',
              2
            ),
            this.$VideoPlayerLocalBandwidthEstimator4.getNumber(
              'bandwidth_standard_deviation_penalty_factor',
              0.15
            )
          );
          if (e > 0) return d * e;
        }
      } else if (f > 0) {
        g = this.getRecentSamples();
        if (g.length >= f) {
          e = b(
            'VideoPlayerShakaBandwidthUtils'
          ).getStandardDeviationOfBandwidth(
            g.map(function (a) {
              return { bytes: a[0], timeInMs: a[1] };
            })
          );
          c =
            e *
            this.$VideoPlayerLocalBandwidthEstimator4.getNumber(
              'bandwidth_standard_deviation_penalty_factor',
              0.15
            );
        }
      }
      f = this.$VideoPlayerLocalBandwidthEstimator4.getNumber(
        'minimum_weight_to_trust_local_bandwidth_estimate',
        0.5
      );
      g = this.$VideoPlayerLocalBandwidthEstimator4.getBool(
        'use_minimum_of_global_and_local_bandwidth_estimates',
        !1
      );
      e = this.$VideoPlayerLocalBandwidthEstimator4.getBool(
        'use_per_video_bandwidth_estimator',
        !1
      );
      if (
        e &&
        this.$VideoPlayerLocalBandwidthEstimator2 &&
        this.$VideoPlayerLocalBandwidthEstimator2.canTrustEstimate(f)
      )
        if (g) {
          e = this.$VideoPlayerLocalBandwidthEstimator2
            ? this.$VideoPlayerLocalBandwidthEstimator2.getBandwidth(a)
            : Infinity;
          return Math.min(
            this.$VideoPlayerLocalBandwidthEstimator1.getBandwidth(a),
            e
          );
        } else
          return d * this.$VideoPlayerLocalBandwidthEstimator2.getBandwidth(a);
      f = this.$VideoPlayerLocalBandwidthEstimator4.getNumber(
        'neural_estimate_weight',
        0
      );
      return f > 0
        ? d * this.$VideoPlayerLocalBandwidthEstimator13()
        : d * this.$VideoPlayerLocalBandwidthEstimator1.getBandwidth(a) - c;
    };
    a.prototype.setResolutionConstraint = function (a, b) {
      (this.$VideoPlayerLocalBandwidthEstimator8 = a),
        (this.$VideoPlayerLocalBandwidthEstimator9 = b);
    };
    a.prototype.$VideoPlayerLocalBandwidthEstimator12 = function () {
      var a = b('getBandwidthPenaltyFactorForScheduledVideoCount')(
        b('VideoStreamingTaskQueueProvider').getQueue('video').getLength(),
        this.$VideoPlayerLocalBandwidthEstimator4.getNumber(
          'multiple_videos_queue_penalty_start_count',
          2
        ),
        this.$VideoPlayerLocalBandwidthEstimator4.getNumber(
          'bandwidth_penalty_per_additional_video',
          0
        ),
        this.$VideoPlayerLocalBandwidthEstimator4.getNumber(
          'bandwidth_penalty_decay_per_video',
          1
        )
      );
      return a > 0 && a <= 1 ? a : 1;
    };
    a.prototype.$VideoPlayerLocalBandwidthEstimator13 = function (a) {
      __p && __p();
      var c = this.$VideoPlayerLocalBandwidthEstimator4.getNumber(
          'minimum_samples_to_use_neural_estimate',
          1
        ),
        d = this.$VideoPlayerLocalBandwidthEstimator1.getRecentSamples();
      a = this.$VideoPlayerLocalBandwidthEstimator1.getBandwidth(a);
      if (c > d.length) return a;
      d.reverse();
      c = b('getNeuralBandwidthEstimate')(
        d.map(function (a) {
          return (a[0] / a[1]) * 8e3;
        })
      );
      d = this.$VideoPlayerLocalBandwidthEstimator4.getNumber(
        'neural_estimate_weight',
        0
      );
      return c * d + a * (1 - d);
    };
    a.prototype.$VideoPlayerLocalBandwidthEstimator11 = function (a, c, d, e) {
      __p && __p();
      c = (8e3 * c) / a;
      a = e.filter(
        function (a) {
          return (
            a.width <= this.$VideoPlayerLocalBandwidthEstimator8 ||
            a.height <= this.$VideoPlayerLocalBandwidthEstimator9
          );
        }.bind(this)
      );
      var f = this.$VideoPlayerLocalBandwidthEstimator14(c, e);
      a = this.$VideoPlayerLocalBandwidthEstimator14(c, a);
      e = e.find(function (a) {
        return a.streamInfoID === d;
      });
      if (e) {
        this.$VideoPlayerLocalBandwidthEstimator4.getBool(
          'videos_abr_debugger_storage',
          !1
        ) &&
          b('Banzai').post('video_player_abr', {
            id: this.$VideoPlayerLocalBandwidthEstimator7,
            bandwidth: c,
            chosenBandwidth: e.bandwidth,
          });
        c = e.id;
        e = this.$VideoPlayerLocalBandwidthEstimator15(f, c);
        f = this.$VideoPlayerLocalBandwidthEstimator15(a, c);
        e !== f &&
          e === b('VideoPlayerAbrEvaluation').CONSERVATIVE &&
          f === b('VideoPlayerAbrEvaluation').IDEAL &&
          (e = b(
            'VideoPlayerAbrEvaluation'
          ).CONSERVATIVE_RESOLUTION_CONSTRAINED);
        this.$VideoPlayerLocalBandwidthEstimator5.push(e);
      }
    };
    a.prototype.$VideoPlayerLocalBandwidthEstimator14 = function (a, b) {
      var c = 0;
      for (var d = 0; d < b.length; d++) {
        if (a <= b[d].bandwidth) break;
        c = b[d].id;
      }
      return c;
    };
    a.prototype.$VideoPlayerLocalBandwidthEstimator15 = function (a, c) {
      return a === c
        ? b('VideoPlayerAbrEvaluation').IDEAL
        : a > c
        ? b('VideoPlayerAbrEvaluation').CONSERVATIVE
        : b('VideoPlayerAbrEvaluation').AGGRESSIVE;
    };
    a.prototype.flushABREvaluationSet = function () {
      var a = this.$VideoPlayerLocalBandwidthEstimator5;
      this.$VideoPlayerLocalBandwidthEstimator5 = [];
      return a;
    };
    e.exports = a;
  },
  null
);
__d(
  'VideoPushTracker',
  ['URI', 'crc16'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a() {
      (this.$1 = 0), (this.$2 = new Map());
    }
    a.prototype.addPushDataFromXHR = function (a) {
      __p && __p();
      var b = a.getResponseHeader('X-FB-Debug-Num-Pushed');
      a = a.getResponseHeader('X-FB-Debug-List-Pushed');
      if (!a || !b) return;
      b = parseInt(b, 10);
      var c = [];
      if (a.length % 4) {
        !1;
        return;
      }
      var d = a.length / 4;
      for (var e = 0; e < d; e++) c.push(a.substr(e * 4, 4));
      b != c.length && !1;
      if (!b) return;
      this.$1 += b;
      c.forEach(
        function (a) {
          this.$2.set(a, (this.$2.get(a) || 0) + 1);
        }.bind(this)
      );
    };
    a.prototype.getPushCountForUrl = function (a) {
      a = new (b('URI'))(a);
      a = b('crc16').hex(a.getPath());
      a = this.$2.get(a) || 0;
      return a;
    };
    e.exports = a;
  },
  null
);
__d(
  'FetchStreamStateTracker',
  ['invariant'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    a.prototype.setNextRequestInfo = function (a) {
      (this.$1 = this.$2), (this.$2 = a);
    };
    a.prototype.setFetchRange = function (a) {
      this.$3 = a;
    };
    a.prototype.isNextRequestContinuous = function () {
      this.$2 || g(0, undefined);
      if (!this.$1) return !1;
      return this.$1.baseUrl !== this.$2.baseUrl ||
        (this.$1.endByte || 0) + 1 !== (this.$2.startByte || 0)
        ? !1
        : !0;
    };
    a.prototype.isNextRequestInRange = function () {
      this.$2 || g(0, undefined);
      if (!this.$3) return !1;
      var a = Infinity,
        b = this.$3.endByte;
      b !== null && b !== undefined && (a = b);
      return (this.$2.endByte || 0) <= a;
    };
    function a() {}
    e.exports = a;
  },
  null
);
__d(
  'NetworkErrorTransformStream',
  ['ReadableStream', 'WritableStream', 'pipeErrorTo'],
  function (a, b, c, d, e, f) {
    __p && __p();
    a.prototype.$3 = function (a) {
      this.$1.enqueue(a);
    };
    function a() {
      (this.writable = new (b('WritableStream'))({
        start: function (a) {
          this.$2 = a;
        }.bind(this),
        write: function (a) {
          this.$3(a);
        }.bind(this),
        close: function () {
          this.$1.close();
        }.bind(this),
        abort: function (a) {
          var c = a;
          a instanceof TypeError &&
            (c = { type: 'net', status: 0, message: 'Network failure.' });
          b('pipeErrorTo')(this.$1, c);
        }.bind(this),
      })),
        (this.readable = new (b('ReadableStream'))({
          start: function (a) {
            this.$1 = a;
          }.bind(this),
          cancel: function (a) {
            b('pipeErrorTo')(this.$2, a);
          }.bind(this),
        }));
    }
    e.exports = a;
  },
  null
);
__d(
  'StreamBandwidthReporter',
  [
    'EventEmitter',
    'ReadableStream',
    'WritableStream',
    'performanceNow',
    'pipeErrorTo',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g;
    c = babelHelpers.inherits(a, b('EventEmitter'));
    g = c && c.prototype;
    a.prototype.$StreamBandwidthReporter13 = function (a) {
      this.$StreamBandwidthReporter11.enqueue(a);
    };
    function a(a, c, d) {
      g.constructor.call(this),
        (this.$StreamBandwidthReporter2 = null),
        (this.$StreamBandwidthReporter3 = 0),
        (this.$StreamBandwidthReporter4 = 0),
        (this.$StreamBandwidthReporter8 = 0),
        (this.$StreamBandwidthReporter9 = Infinity),
        (this.$StreamBandwidthReporter1 = a),
        (this.$StreamBandwidthReporter2 =
          this.$StreamBandwidthReporter1.getNumber(
            'streaming_bandwidth_update_interval',
            18e4
          )),
        (this.$StreamBandwidthReporter7 = d),
        (this.$StreamBandwidthReporter9 = c),
        this.$StreamBandwidthReporter2 &&
          ((this.$StreamBandwidthReporter10 = this.$StreamBandwidthReporter9),
          this.$StreamBandwidthReporter14()),
        (this.writable = new (b('WritableStream'))({
          start: function (a) {
            (this.$StreamBandwidthReporter5 = this.$StreamBandwidthReporter6 =
              b('performanceNow')()),
              (this.$StreamBandwidthReporter12 = a);
          }.bind(this),
          write: function (a) {
            a.length != undefined &&
              (this.$StreamBandwidthReporter3 += a.length),
              this.$StreamBandwidthReporter15(),
              this.$StreamBandwidthReporter13(a);
          }.bind(this),
          close: function () {
            this.$StreamBandwidthReporter11.close(),
              this.$StreamBandwidthReporter16();
          }.bind(this),
          abort: function (a) {
            b('pipeErrorTo')(this.$StreamBandwidthReporter11, a);
          }.bind(this),
        })),
        (this.readable = new (b('ReadableStream'))({
          start: function (a) {
            this.$StreamBandwidthReporter11 = a;
          }.bind(this),
          cancel: function (a) {
            b('pipeErrorTo')(this.$StreamBandwidthReporter12, a);
          }.bind(this),
        }));
    }
    a.prototype.$StreamBandwidthReporter17 = function () {
      var a = this.$StreamBandwidthReporter1.getNumber(
        'max_bandwidth_update_interval',
        0
      );
      return a > 0
        ? b('performanceNow')() > this.$StreamBandwidthReporter5 + a
        : !1;
    };
    a.prototype.$StreamBandwidthReporter15 = function () {
      var a = this.$StreamBandwidthReporter9 + this.$StreamBandwidthReporter3,
        b = this.$StreamBandwidthReporter18(),
        c =
          this.$StreamBandwidthReporter1.getBool(
            'enable_segment_based_bandwidth_update',
            !0
          ) || this.$StreamBandwidthReporter2;
      (this.$StreamBandwidthReporter17() || !c || (b != null && a >= b)) &&
        this.$StreamBandwidthReporter16();
    };
    a.prototype.$StreamBandwidthReporter16 = function () {
      if (this.$StreamBandwidthReporter4 === this.$StreamBandwidthReporter3)
        return;
      var a = b('performanceNow')();
      this.$StreamBandwidthReporter14();
      this.emit('bandwidthUpdate', {
        bytesRead:
          this.$StreamBandwidthReporter3 - this.$StreamBandwidthReporter4,
        timeTaken: a - this.$StreamBandwidthReporter5,
      });
      this.$StreamBandwidthReporter5 = a;
      this.$StreamBandwidthReporter4 = this.$StreamBandwidthReporter3;
    };
    a.prototype.$StreamBandwidthReporter18 = function () {
      return this.$StreamBandwidthReporter10 != null
        ? this.$StreamBandwidthReporter10
        : this.$StreamBandwidthReporter7[this.$StreamBandwidthReporter8];
    };
    a.prototype.$StreamBandwidthReporter14 = function () {
      this.$StreamBandwidthReporter17()
        ? (this.$StreamBandwidthReporter10 =
            this.$StreamBandwidthReporter9 +
            this.$StreamBandwidthReporter3 +
            this.$StreamBandwidthReporter2)
        : this.$StreamBandwidthReporter10 != null
        ? (this.$StreamBandwidthReporter10 += this.$StreamBandwidthReporter2)
        : this.$StreamBandwidthReporter8++;
    };
    e.exports = a;
  },
  null
);
__d(
  'StreamFetchRequestLogger',
  [
    'PausableRangeStream',
    'ReadableStream',
    'VideoPlayerResourceTimer',
    'WritableStream',
    'performanceNow',
    'pipeErrorTo',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a, c, d, e, f, g, h) {
      (this.$6 = 0),
        (this.$9 = null),
        (this.$10 = 0),
        (this.$3 = d),
        (this.$2 = g),
        (this.$1 = a),
        (this.$4 = c),
        (this.$5 = f),
        (this.$11 = e),
        (this.$8 = h),
        (this.writable = new (b('WritableStream'))({
          start: function (a) {
            this.$14(), (this.$13 = a);
          }.bind(this),
          write: function (a) {
            (this.$6 += a.byteLength),
              this.$9 &&
                (this.$10 = Math.round(
                  Math.max(
                    this.$10,
                    b('performanceNow')() - (this.$9 || Infinity)
                  )
                )),
              (this.$9 = b('performanceNow')()),
              this.$15(a);
          }.bind(this),
          close: function () {
            this.$12.close(), this.$16();
          }.bind(this),
          abort: function (a) {
            b('pipeErrorTo')(this.$12, a), this.$17(a);
          }.bind(this),
        })),
        (this.readable = new (b('ReadableStream'))({
          start: function (a) {
            this.$12 = a;
          }.bind(this),
          cancel: function (a) {
            b('pipeErrorTo')(this.$13, a);
            a = {
              type:
                a === b('PausableRangeStream').STREAM_PAUSED
                  ? 'paused'
                  : 'aborted',
              status: 0,
              url: this.$3,
            };
            this.$17(a);
          }.bind(this),
        }));
    }
    a.prototype.$14 = function () {
      this.$7 = this.$1
        .getOperationLogger('fetch_stream')
        .setSegmentStartTime(this.$11.startTime)
        .setSegmentEndTime(this.$11.endTime)
        .setResource(this.$3)
        .start();
      this.$7.setPriorityFloat(this.$8);
      var a = this.$5,
        b = a.startByte;
      a = a.endByte;
      a = a === null ? null : (a || 0) + 1 - b;
      this.$7.setType(this.$4).setExpectedLength(a);
    };
    a.prototype.$17 = function (a) {
      this.$7
        .setError(a)
        .setTimeBetweenBytesMax(this.$10)
        .setLength(this.$6)
        .log();
    };
    a.prototype.$16 = function () {
      var a = b('VideoPlayerResourceTimer').getResourceTimingEntry(
        this.$3,
        this.$2,
        b('performanceNow')()
      );
      if (a) {
        var c = a.timeToFirstByte,
          d = a.timeToLastByte;
        a = a.timeToRequestStart;
        this.$7
          .setTimeToFirstByte(Math.round(c))
          .setTimeToLastByte(Math.round(d))
          .setTimeToRequestStart(Math.round(a))
          .setLength(this.$6);
      }
      this.$7.setTimeBetweenBytesMax(this.$10).log();
    };
    a.prototype.$15 = function (a) {
      this.$12.enqueue(a);
    };
    e.exports = a;
  },
  null
);
__d(
  'StreamProgress',
  [
    'ReadableStream',
    'VideoPlayerShakaBandwidthEstimator',
    'WritableStream',
    'pipeErrorTo',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a) {
      (this.$1 = 0),
        (this.$2 = 0),
        (this.$4 = !1),
        (this.$3 = a),
        (this.writable = new (b('WritableStream'))({
          start: function (a) {
            this.$6 = a;
          }.bind(this),
          write: function (a) {
            a.length != null && (this.$1 += a.length), this.$5.enqueue(a);
          }.bind(this),
          close: function () {
            this.$5.close();
          }.bind(this),
          abort: function (a) {
            (this.$4 = !0), b('pipeErrorTo')(this.$5, a);
          }.bind(this),
        })),
        (this.readable = new (b('ReadableStream'))({
          start: function (a) {
            this.$5 = a;
          }.bind(this),
          cancel: function (a) {
            (this.$4 = !0), b('pipeErrorTo')(this.$6, a);
          }.bind(this),
        }));
    }
    a.prototype.notifyBytesConsumed = function (a) {
      this.$2 += a;
    };
    a.prototype.getProgress = function () {
      return this.$7(this.$1);
    };
    a.prototype.getEstimatedTimeRemaining = function () {
      var a = this.$8(),
        c = b('VideoPlayerShakaBandwidthEstimator').getBandwidth();
      return a > -1 ? ((a - this.$1) * 8) / c : null;
    };
    a.prototype.getConsumptionProgress = function () {
      return this.$7(this.$2);
    };
    a.prototype.getBytesRemainingToConsume = function () {
      var a = this.$8();
      return a === -1 ? 0 : a - this.$2;
    };
    a.prototype.hasAbortedOrCancelled = function () {
      return this.$4;
    };
    a.prototype.$8 = function () {
      return this.$3.endByte ? this.$3.endByte - this.$3.startByte + 1 : -1;
    };
    a.prototype.$7 = function (a) {
      var b = this.$8();
      return b === -1 ? 0 : a / b;
    };
    e.exports = a;
  },
  null
);
__d(
  'StreamProgressTracker',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a() {
      (this.$1 = null), (this.$2 = []);
    }
    a.prototype.add = function (a) {
      this.$2.push(a);
    };
    a.prototype.setOnStreamConsumed = function (a) {
      this.$1 = a;
    };
    a.prototype.notifyBytesConsumed = function (a) {
      __p && __p();
      for (var b = 0; b < this.$2.length; b++) {
        if (this.$2[b].hasAbortedOrCancelled()) {
          this.$2.splice(b, 1);
          b--;
          continue;
        }
        var c = this.$2[b].getBytesRemainingToConsume();
        this.$2[b].notifyBytesConsumed(c >= a ? a : a - c);
        a -= c;
        if (a < 0) break;
        else this.$2.splice(b, 1), b--;
      }
      this.$1 && this.$2.length === 0 && (this.$1(), (this.$1 = null));
    };
    a.prototype.canTrackProgress = function () {
      return this.$2.length > 0 && this.$2[0].getBytesRemainingToConsume() > -1;
    };
    a.prototype.hasStarted = function () {
      return this.$2.length > 0;
    };
    a.prototype.getProgress = function () {
      return this.$2.length > 0 ? this.$2[0].getProgress() : null;
    };
    a.prototype.getConsumptionProgress = function () {
      return this.$2.length > 0 ? this.$2[0].getConsumptionProgress() : null;
    };
    a.prototype.getEstimatedTimeRemainingOfStream = function () {
      return this.$2.length > 0 ? this.$2[0].getEstimatedTimeRemaining() : null;
    };
    a.prototype.destroy = function () {
      this.$2 = [];
    };
    e.exports = a;
  },
  null
);
__d(
  'VideoPriorityUpdater',
  ['EventEmitter', 'VideoPriorityCalculator'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g;
    c = babelHelpers.inherits(a, b('EventEmitter'));
    g = c && c.prototype;
    function a(a, b) {
      b === void 0 && (b = []),
        g.constructor.call(this),
        (this.$VideoPriorityUpdater3 = 0),
        (this.$VideoPriorityUpdater4 = []),
        (this.$VideoPriorityUpdater1 = a),
        (this.$VideoPriorityUpdater4 = b.slice(0)),
        b.forEach(
          function (a) {
            return a.setOnPriorityChanged(
              function () {
                this.$VideoPriorityUpdater5();
              }.bind(this)
            );
          }.bind(this)
        );
    }
    a.prototype.updatePriorityWithNewPlayhead = function (a) {
      this.$VideoPriorityUpdater2 && (this.$VideoPriorityUpdater2.playhead = a);
      this.$VideoPriorityUpdater5();
      return this;
    };
    a.prototype.updatePriorityWithNewPlayingState = function (a) {
      this.$VideoPriorityUpdater2 &&
        (this.$VideoPriorityUpdater2.isPlaying = a);
      this.$VideoPriorityUpdater5();
      return this;
    };
    a.prototype.updatePriorityWithNewPlayerState = function (a) {
      this.$VideoPriorityUpdater2 = a;
      this.$VideoPriorityUpdater5();
      return this;
    };
    a.prototype.$VideoPriorityUpdater5 = function () {
      if (!this.$VideoPriorityUpdater2) return;
      var a = this.$VideoPriorityUpdater1.getNumber(
          'global_scheduler_priority_downgrade_bufferahead_threshold',
          0
        ),
        c = this.$VideoPriorityUpdater1.getNumber(
          'global_scheduler_priority_threshold',
          6
        );
      this.$VideoPriorityUpdater3 >=
        b('VideoPriorityCalculator').getMaxPriority() &&
        a &&
        (c = a);
      a = this.$VideoPriorityUpdater4.reduce(function (a, b) {
        return a + b.getPriorityAdjustment();
      }, 0);
      c =
        b('VideoPriorityCalculator').calculate(this.$VideoPriorityUpdater2, c) +
        a;
      c !== this.$VideoPriorityUpdater3 &&
        ((this.$VideoPriorityUpdater3 = c), this.emit('priority_updated', c));
    };
    e.exports = a;
  },
  null
);
__d(
  'VideoSegmentStreamByFetch',
  [
    'invariant',
    'ReadableStream',
    'VideoAkamaiRequestHelper',
    'VideoClientEdgeCooperation',
    'VideoSegmentInfoHelper',
    'createErrorStream',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h = window.fetch;
    function a(a) {
      this.$1 = a;
    }
    a.prototype.getResourceUrl = function (a) {
      a = this.$2(a);
      a = b('VideoSegmentInfoHelper').getRequestUri(a);
      a = a.toString();
      return a;
    };
    a.prototype.startStream = function (a) {
      __p && __p();
      h || g(0, undefined);
      var c = this.getResourceUrl(a),
        d = {};
      if (b('VideoAkamaiRequestHelper').isAkamai(c)) {
        a = this.$2(a);
        d = b('VideoAkamaiRequestHelper').getRequestHeaders(a) || {};
      }
      return h(c, { headers: d })
        .then(function (a) {
          b('VideoClientEdgeCooperation').updateFromResponse(a);
          var d = a.body,
            e = a.status;
          a = a.ok;
          if (!a)
            return b('createErrorStream')({
              type: 'net',
              status: e,
              url: c,
              message: 'HTTP error.',
            });
          d.getReader || g(0, undefined);
          return d;
        })
        ['catch'](function (a) {
          return a instanceof TypeError
            ? b('createErrorStream')({
                type: 'net',
                status: 0,
                url: c,
                message: 'Network failure.',
              })
            : b('createErrorStream')({
                type: 'stream_processing',
                status: 0,
                url: c,
                message: 'Stream processing error.' + a,
              });
        });
    };
    a.prototype.$2 = function (a) {
      return {
        baseUrl: this.$1,
        startByte: a.startByte,
        endByte: a.endByte === null ? undefined : a.endByte,
      };
    };
    e.exports = a;
  },
  null
);
__d(
  'VideoStreamingManager',
  [
    'ChunkableContinuousRangeStream',
    'ContinuousPausableStreamTask',
    'EventEmitter',
    'FetchStreamStateTracker',
    'FixedSizeTransform',
    'MaybeNativePromise',
    'NetworkErrorTransformStream',
    'PausableRangeStream',
    'ShakaSegmentReferenceHelper',
    'StreamBandwidthReporter',
    'StreamFetchRequestLogger',
    'StreamProgress',
    'StreamProgressTracker',
    'SubscriptionsHandler',
    'VideoPriorityCalculator',
    'VideoPriorityUpdater',
    'VideoSegmentStreamByFetch',
    'VideoStreamingTaskQueueProvider',
    'performanceNow',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g;
    c = babelHelpers.inherits(a, b('EventEmitter'));
    g = c && c.prototype;
    function a(a, c, d, e, f) {
      __p && __p();
      d === void 0 && (d = 'video'),
        e === void 0 && (e = null),
        f === void 0 && (f = []),
        g.constructor.call(this),
        (this.$VideoStreamingManager9 = []),
        (this.$VideoStreamingManager10 = null),
        (this.$VideoStreamingManager13 = new (b('SubscriptionsHandler'))()),
        (this.$VideoStreamingManager14 = Infinity),
        (this.$VideoStreamingManager16 = null),
        (this.$VideoStreamingManager17 = !1),
        (this.$VideoStreamingManager20 = function (a, c) {
          __p && __p();
          this.$VideoStreamingManager17 = !1;
          if (
            this.$VideoStreamingManager1.getBool(
              'enable_streaming_quick_abr_switch',
              !1
            )
          ) {
            var d = this.$VideoStreamingManager15;
            if (!d) return;
            d = b('ShakaSegmentReferenceHelper').findIndexByRequestInfo(d, a);
            if (d < -1) return;
            a = a[d];
            if (!a) return;
            d = b('ShakaSegmentReferenceHelper').findIndexByStartTimeExact(
              c,
              a.startTime
            );
            if (d >= 0 && d + 1 < c.length) {
              a = c[d + 1];
              c = {
                baseUrl: a.url.baseUrl,
                startByte: a.url.startByte,
                endByte: a.url.endByte,
              };
              typeof this.$VideoStreamingManager3.setFutureSegments ===
                'function' &&
                this.$VideoStreamingManager3.setFutureSegments([]);
              this.$VideoStreamingManager25(c);
              (!this.$VideoStreamingManager1.getBool(
                'disable_streaming_quick_abr_switch_for_low_pri_video',
                !1
              ) ||
                this.$VideoStreamingManager14 >=
                  b('VideoPriorityCalculator').getMaxPriority()) &&
                this.$VideoStreamingManager26(c);
            }
          }
        }.bind(this)),
        (this.$VideoStreamingManager19 = function (a) {
          __p && __p();
          if (
            !this.$VideoStreamingManager1.getBool(
              'disable_auto_stream_start',
              !0
            ) ||
            a === this.$VideoStreamingManager14
          )
            return;
          this.$VideoStreamingManager14 = a;
          this.$VideoStreamingManager5 &&
            this.$VideoStreamingManager5
              .getEventLogger('priority_changed')
              .setPriorityFloat(this.$VideoStreamingManager14)
              .log();
          var c = this.$VideoStreamingManager10;
          if (!c) return;
          c.updatePriority(this.$VideoStreamingManager14);
          var d = this.$VideoStreamingManager6;
          if (!d || d.isClosed()) return;
          a >= b('VideoPriorityCalculator').getMaxPriority() ||
          this.$VideoStreamingManager1.getBool(
            'enable_low_pri_multi_segment_fetch',
            !1
          )
            ? this.$VideoStreamingManager15 &&
              this.$VideoStreamingManager27(this.$VideoStreamingManager15)
            : d.removeQueuedRange();
          this.$VideoStreamingManager11 &&
            this.$VideoStreamingManager11.updatePriority(
              c,
              this.$VideoStreamingManager14
            );
        }.bind(this)),
        (this.$VideoStreamingManager1 = a),
        (this.$VideoStreamingManager4 = new (b('FetchStreamStateTracker'))()),
        (this.$VideoStreamingManager3 = c),
        (this.$VideoStreamingManager5 = e),
        (this.$VideoStreamingManager7 = d),
        this.$VideoStreamingManager1.getBool(
          'disable_streaming_scheduler',
          !1
        ) ||
          (this.$VideoStreamingManager11 = b(
            'VideoStreamingTaskQueueProvider'
          ).getQueue(d)),
        (this.$VideoStreamingManager12 = new (b('VideoPriorityUpdater'))(
          this.$VideoStreamingManager1,
          f
        )),
        this.$VideoStreamingManager13.addSubscriptions(
          this.$VideoStreamingManager12.addListener(
            'priority_updated',
            this.$VideoStreamingManager19
          )
        ),
        this.$VideoStreamingManager3.setOnSegmentsUpdated(
          this.$VideoStreamingManager20
        ),
        this.$VideoStreamingManager1.getBool(
          'enable_stream_progress_tracker',
          !1
        ) &&
          (this.$VideoStreamingManager16 = new (b('StreamProgressTracker'))());
    }
    a.prototype.getStream = function (a) {
      return this.$VideoStreamingManager1.getBool(
        'use_continuous_streaming',
        !0
      )
        ? this.$VideoStreamingManager21(a)
        : this.$VideoStreamingManager22(a);
    };
    a.prototype.getPriorityUpdater = function () {
      return this.$VideoStreamingManager12;
    };
    a.prototype.getProgressTracker = function () {
      return this.$VideoStreamingManager16;
    };
    a.prototype.resumeVideoFetching = function () {
      (this.$VideoStreamingManager17 = !1), this.$VideoStreamingManager23();
    };
    a.prototype.stopUntilSegmentsUpdate = function () {
      this.$VideoStreamingManager10 &&
        this.$VideoStreamingManager10.cancelOnCurrentStreamDone(),
        (this.$VideoStreamingManager17 = !0);
    };
    a.prototype.updatePlayerState = function (a) {
      (this.$VideoStreamingManager18 = a),
        this.$VideoStreamingManager12.updatePriorityWithNewPlayerState(a);
    };
    a.prototype.destroy = function () {
      this.$VideoStreamingManager16 != null &&
        this.$VideoStreamingManager16.destroy(),
        this.$VideoStreamingManager13.release(),
        this.$VideoStreamingManager10 && this.$VideoStreamingManager10.cancel(),
        this.$VideoStreamingManager10 &&
          this.$VideoStreamingManager11 &&
          this.$VideoStreamingManager11.remove(this.$VideoStreamingManager10),
        this.$VideoStreamingManager24(),
        this.$VideoStreamingManager3 &&
          this.$VideoStreamingManager3.clearOnSegmentsUpdated();
    };
    a.prototype.$VideoStreamingManager24 = function () {
      this.$VideoStreamingManager6 && this.$VideoStreamingManager6.destroy(),
        (this.$VideoStreamingManager6 = null);
    };
    a.prototype.$VideoStreamingManager28 = function () {
      __p && __p();
      var a = function () {
        __p && __p();
        if (!this.$VideoStreamingManager9.length)
          return b('MaybeNativePromise').resolve(null);
        var c = this.$VideoStreamingManager9[0];
        return c().then(
          function (b) {
            __p && __p();
            if (!b) {
              if (this.$VideoStreamingManager9.length === 1) {
                var c = this.$VideoStreamingManager15,
                  d =
                    this.$VideoStreamingManager1.getBool(
                      'switch_to_new_stream_when_end_byte_is_null',
                      !1
                    ) &&
                    c &&
                    c.endByte == null,
                  e =
                    this.$VideoStreamingManager1.getBool(
                      'continuous_stream_on_higher_priority',
                      !1
                    ) && this.$VideoStreamingManager29();
                if (c && (d || e)) {
                  d = this.$VideoStreamingManager3.getNextRequestInfo(c);
                  if (
                    d &&
                    this.$VideoStreamingManager18 &&
                    this.$VideoStreamingManager3.isRequestInBufferTarget(
                      d,
                      this.$VideoStreamingManager18
                    )
                  ) {
                    this.$VideoStreamingManager9.shift();
                    this.$VideoStreamingManager6 = null;
                    this.$VideoStreamingManager25(d);
                    this.$VideoStreamingManager26(d);
                    return a();
                  }
                }
                return null;
              }
              this.$VideoStreamingManager9.shift();
              return a();
            }
            return b;
          }.bind(this)
        );
      }.bind(this);
      return a;
    };
    a.prototype.$VideoStreamingManager29 = function () {
      var a = this.$VideoStreamingManager11
          ? this.$VideoStreamingManager11.getHighestPriority()
          : -Infinity,
        b = this.$VideoStreamingManager11
          ? this.$VideoStreamingManager11.getLength() === 0
          : !0;
      return !b && this.$VideoStreamingManager14 > a;
    };
    a.prototype.$VideoStreamingManager23 = function () {
      if (
        !this.$VideoStreamingManager1.getBool(
          'disable_auto_stream_start',
          !0
        ) ||
        this.$VideoStreamingManager10 ||
        this.$VideoStreamingManager17
      )
        return;
      var a = new (b('ContinuousPausableStreamTask'))(
        this.$VideoStreamingManager28(),
        this.$VideoStreamingManager7,
        this.$VideoStreamingManager14,
        this.$VideoStreamingManager5,
        {
          uncancellablePriority: this.$VideoStreamingManager1.getBool(
            'disable_streaming_task_cancellation_on_high_pri',
            !1
          )
            ? b('VideoPriorityCalculator').getMaxPriority()
            : Infinity,
          disableAudioStreamPause: this.$VideoStreamingManager1.getBool(
            'disable_audio_stream_pause',
            !1
          ),
          yieldOnLowPriStream: this.$VideoStreamingManager1.getBool(
            'enable_low_pri_multi_segment_fetch',
            !1
          ),
          lowPriTaskYieldCheckInterval: this.$VideoStreamingManager1.getNumber(
            'low_pri_task_yield_check_interval',
            0
          ),
          lowPriTaskMinBytesToYield: this.$VideoStreamingManager1.getNumber(
            'low_pri_task_min_bytes_to_yield',
            0
          ),
          lowPriTaskYieldsPerTask: this.$VideoStreamingManager1.getNumber(
            'low_pri_task_yields_per_task',
            0
          ),
        }
      );
      this.$VideoStreamingManager10 = a;
      var c;
      this.$VideoStreamingManager11
        ? (c = this.$VideoStreamingManager11.enqueue(
            a,
            this.$VideoStreamingManager14
          ))
        : (c = a.run());
      c.then(
        function () {
          this.$VideoStreamingManager10 = null;
        }.bind(this)
      )['catch'](
        function (a) {
          (this.$VideoStreamingManager10 = null),
            a.message === 'cancelled' && this.$VideoStreamingManager23();
        }.bind(this)
      );
    };
    a.prototype.$VideoStreamingManager30 = function (a, c) {
      var d = a.startByte,
        e = a.endByte;
      c =
        c >= b('VideoPriorityCalculator').getMaxPriority() ||
        this.$VideoStreamingManager1.getBool(
          'enable_low_pri_multi_segment_fetch',
          !1
        )
          ? this.$VideoStreamingManager3.getFetchRanges(a)
          : [{ startByte: d, endByte: e }];
      return c;
    };
    a.prototype.$VideoStreamingManager25 = function (a) {
      this.$VideoStreamingManager15 = a;
      a = a.baseUrl;
      this.$VideoStreamingManager8 &&
        this.$VideoStreamingManager8 !== a &&
        this.$VideoStreamingManager24();
      this.$VideoStreamingManager8 = a;
    };
    a.prototype.$VideoStreamingManager26 = function (a) {
      this.$VideoStreamingManager6 == null &&
        (this.$VideoStreamingManager6 = this.$VideoStreamingManager31(a)),
        this.$VideoStreamingManager27(a);
    };
    a.prototype.$VideoStreamingManager21 = function (a) {
      __p && __p();
      this.$VideoStreamingManager25(a);
      this.$VideoStreamingManager26(a);
      var c = a.startByte,
        d = a.endByte;
      return !this.$VideoStreamingManager6
        ? b('MaybeNativePromise').reject()
        : this.$VideoStreamingManager6
            .getReservedChunkStream({ startByte: c, endByte: d })
            .then(
              function (a) {
                this.$VideoStreamingManager23();
                return a;
              }.bind(this)
            )
            ['catch'](
              function (b) {
                this.$VideoStreamingManager6 = this.$VideoStreamingManager31(a);
                return this.$VideoStreamingManager6
                  .getReservedChunkStream({ startByte: c, endByte: d })
                  .then(
                    function (a) {
                      this.$VideoStreamingManager23();
                      return a;
                    }.bind(this)
                  );
              }.bind(this)
            );
    };
    a.prototype.$VideoStreamingManager31 = function (a) {
      var c = this.$VideoStreamingManager3.getSegmentsBoundaries(a);
      a = this.$VideoStreamingManager32(a.baseUrl, c);
      c = new (b('ChunkableContinuousRangeStream'))(a, {
        disableStreamAutoStart: this.$VideoStreamingManager1.getBool(
          'disable_auto_stream_start',
          !0
        ),
        enableStreamRangeConcat: this.$VideoStreamingManager1.getBool(
          'enable_stream_range_concat',
          !1
        ),
        disableDeferredBufferArrayShift: this.$VideoStreamingManager1.getBool(
          'disable_deferred_buffer_array_shift',
          !1
        ),
        fixFixedSizeTransformOnNullEndByte:
          this.$VideoStreamingManager1.getBool(
            'fix_fixed_size_transform_on_null_end_byte',
            !1
          ),
        useNativePromiseInDeferredBuffer: this.$VideoStreamingManager1.getBool(
          'use_native_promise_in_deferred_buffer',
          !1
        ),
        fixStreamingUndefinedEndByte: this.$VideoStreamingManager1.getBool(
          'fix_streaming_undefined_end_byte',
          !0
        ),
        enablePausableStreamResumeFromStart:
          this.$VideoStreamingManager1.getBool(
            'enable_pausable_stream_resume_from_start',
            !0
          ),
        fixPausePreReadableStream: this.$VideoStreamingManager1.getBool(
          'fix_pause_pre_readable_stream',
          !1
        ),
        enableFactoryDestroy: this.$VideoStreamingManager1.getBool(
          'enable_pausable_range_stream_factory_destroy',
          !1
        ),
      });
      this.$VideoStreamingManager9.push(c.getPausableStreamFactory());
      return c;
    };
    a.prototype.$VideoStreamingManager27 = function (a) {
      __p && __p();
      var b = this.$VideoStreamingManager6;
      if (!b) return;
      var c = this.$VideoStreamingManager30(a, this.$VideoStreamingManager14);
      for (
        var c = c,
          d = Array.isArray(c),
          e = 0,
          c = d
            ? c
            : c[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var f;
        if (d) {
          if (e >= c.length) break;
          f = c[e++];
        } else {
          e = c.next();
          if (e.done) break;
          f = e.value;
        }
        f = f;
        var g = b.updateRangeStream(f),
          h = b.getCurrentStreamRange();
        if (g === 'closed')
          (this.$VideoStreamingManager6 = this.$VideoStreamingManager31(a)),
            this.$VideoStreamingManager27(a);
        else if (h && h.endByte === f.endByte) continue;
        return;
      }
    };
    a.prototype.$VideoStreamingManager22 = function (a) {
      __p && __p();
      var c = a.startByte,
        d = a.endByte;
      if (c === undefined)
        return b('MaybeNativePromise').reject('request range does not exist');
      var e = function () {
        this.$VideoStreamingManager4.setNextRequestInfo(a);
        (!this.$VideoStreamingManager4.isNextRequestContinuous() ||
          !this.$VideoStreamingManager4.isNextRequestInRange() ||
          !this.$VideoStreamingManager2) &&
          (this.$VideoStreamingManager2 &&
            this.$VideoStreamingManager2.cancel('reset stream'),
          (this.$VideoStreamingManager2 = this.$VideoStreamingManager33(a)));
        var b;
        d == null ? (b = undefined) : (b = d - c + 1);
        return this.$VideoStreamingManager2.getNextFixedSizeStream(b);
      }.bind(this);
      return e()['catch'](
        function () {
          this.$VideoStreamingManager34();
          return e();
        }.bind(this)
      );
    };
    a.prototype.$VideoStreamingManager33 = function (a) {
      var c = this.$VideoStreamingManager3.getSegmentsBoundaries(a);
      c = this.$VideoStreamingManager32(a.baseUrl, c);
      a = this.$VideoStreamingManager3.getFetchRanges(a)[0];
      this.$VideoStreamingManager4.setFetchRange(a);
      a = new (b('PausableRangeStream'))(a, c, {
        fixStreamingUndefinedEndByte: this.$VideoStreamingManager1.getBool(
          'fix_streaming_undefined_end_byte',
          !0
        ),
      });
      c = new (b('FixedSizeTransform'))({
        fixFixedSizeTransformOnNullEndByte:
          this.$VideoStreamingManager1.getBool(
            'fix_fixed_size_transform_on_null_end_byte',
            !1
          ),
      });
      a.startStream();
      a.getStream().pipeTo(c.getSink());
      return c;
    };
    a.prototype.$VideoStreamingManager32 = function (a, c) {
      var d = new (b('VideoSegmentStreamByFetch'))(a);
      a = function (a) {
        return d.getResourceUrl(a);
      };
      var e = function (a) {
          return this.$VideoStreamingManager3.getTimeRange(a);
        }.bind(this),
        f = d;
      f = this.$VideoStreamingManager35(f);
      f = this.$VideoStreamingManager36(f, a, e);
      this.$VideoStreamingManager7 === 'video' &&
        ((f = this.$VideoStreamingManager37(f, c)),
        this.$VideoStreamingManager1.getBool(
          'enable_stream_progress_tracker',
          !1
        ) && (f = this.$VideoStreamingManager38(f)));
      return f;
    };
    a.prototype.$VideoStreamingManager35 = function (a) {
      var c = {
        startStream: function (c) {
          var d = new (b('NetworkErrorTransformStream'))();
          return a.startStream(c).then(function (a) {
            return a.pipeThrough(d);
          });
        },
      };
      return c;
    };
    a.prototype.$VideoStreamingManager37 = function (a, c) {
      var d = {
        startStream: function (d) {
          var e = c[0].startByte,
            f = new (b('StreamBandwidthReporter'))(
              this.$VideoStreamingManager1,
              e,
              c
                .filter(function (a) {
                  return a !== null;
                })
                .map(function (a) {
                  return a.endByte || 0;
                })
            );
          f.addListener(
            'bandwidthUpdate',
            function (a) {
              return this.emit('bandwidthUpdate', a);
            }.bind(this)
          );
          return a.startStream(d).then(function (a) {
            return a.pipeThrough(f);
          });
        }.bind(this),
      };
      return d;
    };
    a.prototype.$VideoStreamingManager36 = function (a, c, d) {
      var e = this.$VideoStreamingManager5;
      if (
        !e ||
        this.$VideoStreamingManager1.getBool(
          'disable_shaka_perf_logger_for_streaming',
          !1
        )
      )
        return a;
      var f = {
        startStream: function (f) {
          var g = new (b('StreamFetchRequestLogger'))(
            e,
            this.$VideoStreamingManager7,
            c(f),
            d(f),
            f,
            b('performanceNow')(),
            this.$VideoStreamingManager14
          );
          return a.startStream(f).then(function (a) {
            return a.pipeThrough(g);
          });
        }.bind(this),
      };
      return f;
    };
    a.prototype.$VideoStreamingManager38 = function (a) {
      if (this.$VideoStreamingManager7 !== 'video') return a;
      var c = {
        startStream: function (c) {
          var d = new (b('StreamProgress'))(c);
          this.$VideoStreamingManager16 != null &&
            this.$VideoStreamingManager16.add(d);
          return a.startStream(c).then(function (a) {
            return a.pipeThrough(d);
          });
        }.bind(this),
      };
      return c;
    };
    a.prototype.$VideoStreamingManager34 = function () {
      this.$VideoStreamingManager4 = new (b('FetchStreamStateTracker'))();
    };
    e.exports = a;
  },
  null
);
__d(
  'ViewportPriorityAdjuster',
  [
    'Event',
    'SubscriptionsHandler',
    'getElementPosition',
    'getViewportDimensions',
    'throttle',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = 500,
      h = 800;
    function a(a) {
      (this.$1 = function () {}),
        (this.$2 = new (b('SubscriptionsHandler'))()),
        (this.$3 = a),
        this.$2.addSubscriptions(
          b('Event').listen(
            window,
            'scroll',
            b('throttle')(
              function () {
                return this.$4(a);
              }.bind(this),
              g
            )
          )
        );
    }
    a.prototype.$5 = function (a) {
      __p && __p();
      if (!a.paused) return 0;
      var c = b('getViewportDimensions')();
      a = b('getElementPosition')(a);
      var d = a.y;
      a = a.height;
      c = c.height;
      if (!d && !a) return -2;
      if (d + a < 0) return -2;
      return (d >= 0 && d + a <= c + h) || (d <= 0 && d + a >= 0) ? 0 : -1;
    };
    a.prototype.$4 = function (a) {
      this.$1(this.$5(a));
    };
    a.prototype.setOnPriorityChanged = function (a) {
      this.$1 = a;
    };
    a.prototype.getPriorityAdjustment = function () {
      return this.$5(this.$3);
    };
    a.prototype.cleanup = function () {
      (this.$1 = function () {}), this.$2.release();
    };
    e.exports = a;
  },
  null
);
__d(
  'canUseFetchStream',
  [],
  function (a, b, c, d, e, f) {
    function a() {
      var a = !!window.fetch,
        b = !!(window.ReadableStream && window.WritableStream),
        c = !!(window.ReadableStream && window.ReadableStream.prototype.pipeTo);
      return a && b && c;
    }
    e.exports = a;
  },
  null
);
__d(
  'getSeekRangeGapsFromShakaReferences',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a, b) {
      var c = [];
      for (var d = 0; d < a.length; ++d)
        if (a[d].timescaledGapInfo && a[d].timescaledGapInfo.gapDistance > 0) {
          var e = 0;
          a[d].unscaledStartTime &&
            (e = a[d].startTime - a[d].unscaledStartTime / b);
          c.push({
            start: a[d].timescaledGapInfo.segmentOriginalEndTime + e,
            end: a[d].endTime,
          });
        }
      return c;
    }
    e.exports = a;
  },
  null
);
__d(
  'logLongAkamaiRequest',
  ['CurrentUser', 'FBLogger'],
  function (a, b, c, d, e, f) {
    var g = !1,
      h = 2,
      i = [];
    function a(a) {
      b('CurrentUser').isEmployee() &&
        !g &&
        ((i = i.filter(function (a) {
          a = a.time;
          return Date.now() - a < 1e3 * 60 * 2;
        })),
        i.push({ data: a, time: Date.now() }),
        i.length >= h &&
          ((g = !0),
          b('FBLogger')('shaka').warn(
            'Long latency video request to akamai: %s',
            i
              .map(function (a) {
                a = a.data;
                return a;
              })
              .join(' ; ')
          )));
    }
    e.exports = a;
  },
  null
);
__d(
  'mergeSeekRangeGaps',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a) {
      __p && __p();
      var b = [];
      if (a.length) {
        a.sort(function (a, b) {
          return a.start - b.start;
        });
        var c = a[0].start,
          d = a[0].end;
        for (var e = 1; e < a.length; ++e)
          a[e].start <= d
            ? (d = Math.max(d, a[e].end))
            : (b.push({ startTime: c, endTime: d }),
              (c = a[e].start),
              (d = a[e].end));
        b.push({ startTime: c, endTime: d });
      }
      return b;
    }
    e.exports = a;
  },
  null
);
__d(
  'VideoPlayerStreamSwitchReasons',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      BANDWIDTH: 'bandwidth',
      FORCED: 'forced',
      LOW_BUFFER_AVAILABILITY: 'low_buffer_availability',
      PREFER_QUALITY_CLASS: 'prefer_quality_class',
      USER: 'user',
      RL_DECISION: 'rl_decision',
    });
  },
  null
);
__d(
  'getBandwidthUpgradeTargetFactor',
  [],
  function (a, b, c, d, e, f) {
    function a(a, b, c, d) {
      return b < c || c <= 0 ? 1 : 1 - (a / b) * d;
    }
    e.exports = a;
  },
  null
);
__d(
  'getVideoTracksWithoutSmoothPlayback',
  ['Promise'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a, c) {
      __p && __p();
      if (
        !window.navigator ||
        !window.navigator.mediaCapabilities ||
        typeof window.navigator.mediaCapabilities.decodingInfo !== 'function'
      )
        return b('Promise').resolve([]);
      var d = window.navigator.mediaCapabilities.decodingInfo,
        e = {
          type: 'media-source',
          audio: {
            contentType:
              (c.mimeType || '') + '; codecs="' + (c.codecs || '') + '"',
            channels: String(c.channels),
            bitrate: c.bandwidth,
            samplerate: c.samplingRate,
          },
        };
      return b('Promise')
        .all(
          a.map(function (a) {
            return d(
              babelHelpers['extends']({}, e, {
                video: {
                  contentType:
                    (a.mimeType || '') + '; codecs="' + (a.codecs || '') + '"',
                  width: a.width,
                  height: a.height,
                  bitrate: a.bandwidth,
                  framerate: a.frameRate,
                },
              })
            );
          })
        )
        .then(function (b) {
          var c = [];
          a.forEach(function (a, d) {
            (!b[d].supported || !b[d].smooth) && c.push(a);
          });
          return c;
        })
        ['catch'](function (a) {
          return [];
        });
    }
    e.exports = a;
  },
  null
);
__d(
  'CustomAbrManager',
  [
    'invariant',
    'regeneratorRuntime',
    'AbrEvaluationSignal',
    'MosUtils',
    'RlAbrModel',
    'RlAbrUtils',
    'Shaka',
    'SubscriptionsHandler',
    'VideoClientEdgeCooperation',
    'VideoDashPrefetchCache',
    'VideoPlaybackQuality',
    'VideoPlayerConnectionQuality',
    'VideoPlayerLocalBandwidthEstimator',
    'VideoPlayerLoggerSource',
    'VideoPlayerStreamSwitchReasons',
    'VideoPlayerUtils',
    'VideoQualityClasses',
    'getBandwidthUpgradeTargetFactor',
    'getVideoTracksWithoutSmoothPlayback',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h = b('Shaka').player.VideoTrack,
      i = b('VideoPlaybackQuality').getDroppedFrames,
      j = b('VideoPlaybackQuality').getTotalFrames,
      k = window.devicePixelRatio || 1;
    function l(a) {
      (this.$39 = !1),
        (this.$2 = null),
        (this.$3 = null),
        (this.$4 = a.shakaConfig),
        (this.$5 = a.performanceLogger),
        (this.$7 = new (b('SubscriptionsHandler'))()),
        (this.$8 = !0),
        (this.$9 = !1),
        (this.$6 = a.isSpherical),
        (this.$10 = a.width),
        (this.$11 = a.height),
        (this.$13 = a.resolutionConstraintMaxWidth),
        (this.$12 = a.resolutionConstraintMaxHeight),
        (this.$14 =
          a.minPlayQuality && !this.$4.getBool('disable_min_quality', !1)
            ? a.minPlayQuality
            : null),
        (this.$15 = a.maxPlayQuality ? a.maxPlayQuality : null),
        (this.$16 =
          a.initiallyForcedRepresentations ||
          b('VideoDashPrefetchCache').getCachedRepresentations(a.videoID)),
        (this.$17 = a.video),
        (this.$18 = a.videoID),
        (this.$30 = null),
        (this.$27 = null),
        (this.$29 = null),
        (this.$28 = a.abrLogger),
        (this.$41 = !1),
        (this.$31 = a.getSource),
        (this.$37 =
          typeof a.useStrictTrackDimensionsExclusionLogic === 'boolean'
            ? a.useStrictTrackDimensionsExclusionLogic
            : this.$4.getBool(
                'use_strict_track_dimensions_exclusion_logic',
                !1
              )),
        a.enableAdaptation &&
          ((this.$19 = a.bandwidthModel),
          (this.$20 = a.bandwidthDowngradeTarget),
          (this.$21 = a.bandwidthUpgradeTarget),
          (this.$22 = a.useNewBandwidthBandLogic),
          (this.$23 = a.hvqUpgradeAggressiveness),
          (this.$24 = a.hvqInlineUpgradeAggressiveness),
          (this.$25 = a.preHvqUpgradeAggressiveness),
          (this.$26 = a.preHvqInlineUpgradeAggressiveness),
          (this.$32 = a.enableReinforcementLearning),
          (this.$34 = a.rlModelId),
          (this.$33 = a.rlUseShortFeatures),
          (this.$40 = a.videoWatchTimeTracker),
          (this.$42 = new (b('RlAbrModel'))(this.$4)));
    }
    l.prototype.destroy = function () {
      this.$1 && (this.$1.destroy(), (this.$1 = null)),
        this.$7.release(),
        this.$7.engage(),
        (this.$2 = null),
        (this.$3 = null),
        (this.$8 = !1);
    };
    l.prototype.setDimensions = function (a, b) {
      this.$10 = a;
      this.$11 = b;
      this.$2 && this.$2.setResolutionConstraint(this.$43(), this.$44());
      a = this.$17.paused
        ? this.$4.getNumber(
            'clear_buffer_on_constraint_change_paused_offset',
            5
          )
        : this.$4.getNumber('clear_buffer_on_constraint_change_offset', 5);
      this.$45({
        clearBufferIfUpgrading: this.$4.getBool(
          'clear_buffer_on_constraint_change',
          !1
        ),
        clearBufferOffset: a,
      });
    };
    l.prototype.initialize = function (a, b) {
      if (this.$2 || this.$3) return;
      this.$2 = a;
      this.$3 = b;
      a.setResolutionConstraint(this.$43(), this.$44());
    };
    l.prototype.start = function () {
      if (!this.$2 || !this.$3 || this.$9) return;
      this.$2 &&
        ((this.$1 = new (b('AbrEvaluationSignal'))(this.$17, this.$2, this.$3, {
          minEvalInterval: this.$4.getNumber('min_eval_interval', 1e3),
          minSwitchInterval: this.$4.getNumber('min_switch_interval', 5e3),
          ignoreTimeLimitForInitialSample: !0,
          useLowBufferVelocityInterval: this.$4.getBool(
            'use_low_buffer_velocity_abr_interval',
            !1
          ),
          lowBufferVelocityIntervalBufferThreshold: this.$4.getNumber(
            'low_buffer_velocity_abr_interval_buffer_threshold',
            10
          ),
          lowBufferVelocityAbrInterval: this.$4.getNumber(
            'low_buffer_velocity_abr_interval',
            500
          ),
          evaluateAbrOnFetchEnd: this.$4.getBool(
            'evaluate_abr_on_fetch_end',
            !1
          ),
          ignoreRecentBandwidthEvalOnFetchEnd: this.$4.getBool(
            'ignore_recent_bandwidth_eval_on_fetch_end',
            !1
          ),
        })),
        this.$1.addListener('evaluate', this.$46.bind(this)));
      this.$9 = !0;
      this.$4.getBool('make_early_track_selection', !1) &&
        this.$29 === b('VideoPlayerStreamSwitchReasons').FORCED &&
        this.$45();
    };
    l.prototype.$47 = function () {
      this.$16 ||
        (this.$16 = b('VideoDashPrefetchCache').getCachedRepresentations(
          this.$18
        ));
      return this.$16;
    };
    l.prototype.$46 = function () {
      this.$45();
    };
    l.prototype.$48 = function () {
      var a = this.$4.getNumber('resolution_constraint_factor', 2);
      return a * k;
    };
    l.prototype.$43 = function () {
      return this.$6 || !this.$4.getBool('use_resolution_constraints', !0)
        ? Infinity
        : Math.min(this.$10 * this.$48(), this.$13);
    };
    l.prototype.$44 = function () {
      return this.$6 || !this.$4.getBool('use_resolution_constraints', !0)
        ? Infinity
        : Math.min(this.$11 * this.$48(), this.$12);
    };
    l.prototype.setPreferredVideoTrack = function (a) {
      (this.$30 = a),
        this.$45({ clearBufferIfUpgrading: !0, clearBufferOffset: 0 });
    };
    l.prototype.unsetPreferredVideoTrack = function () {
      (this.$30 = null), this.$45();
    };
    l.prototype.enable = function (a) {
      this.$8 = a;
    };
    l.prototype.getInitialVideoTrackId = function () {
      if (!this.$2 || !this.$3) return null;
      var a = this.$49();
      return a ? a.id : null;
    };
    l.prototype.getInitialSwitchReason = function () {
      return this.$29;
    };
    l.prototype.getInitialAudioTrackId = function () {
      if (!this.$2 || !this.$3) return null;
      var a = this.$50();
      return a ? a.id : null;
    };
    l.prototype.selectVideoTrack = function (a, c, d, e) {
      __p && __p();
      if (!this.$9) return;
      var f = this.$4.getBool('abr_switch_after_stream_completes', !1),
        g = this.$4.getNumber(
          'abr_abort_when_fetch_estimate_exceeds_buffer_factor',
          0
        ),
        i = this.$4.getNumber('abr_abort_when_fetch_estimate_exceeds_time', 0),
        j = this.$4.getNumber(
          'abr_abort_on_zero_stream_progress_below_threshold',
          -1
        ),
        k = this.$3.getVideoStreamProgressTracker(),
        m = l.$51(this.$3.getVideoTracks());
      m =
        m && h.compare(m, a) < 0
          ? this.$4.getBool('abr_abort_only_on_downgrade', !1)
          : !0;
      if (k && k.canTrackProgress() && k.hasStarted()) {
        var n = b('VideoPlayerUtils').getBufferedAheadOf(this.$17),
          o = k.getEstimatedTimeRemainingOfStream();
        n = g > 0 && o > n * g;
        g = i > 0 && o > i;
        o = j > -1 ? k.getProgress() <= j : !1;
        if (m && (n || g || o)) {
          this.$3.selectVideoTrack(a.id, c, d, e, !0);
          return;
        } else if (f) {
          this.$3.stopUntilVideoStreamSwitch();
          k.setOnStreamConsumed(
            function () {
              this.$3.selectVideoTrack(a.id, c, d, e);
            }.bind(this)
          );
          return;
        }
      }
      this.$3.selectVideoTrack(
        a.id,
        c,
        d,
        e,
        this.$4.getBool('abr_abort_without_stream_progress', !1)
      );
    };
    l.$51 = function (a) {
      for (var b = 0; b < a.length; ++b) if (a[b].active) return a[b];
      return null;
    };
    l.prototype.$45 = function (a) {
      __p && __p();
      var c, d, e, f, g, i, j;
      return b('regeneratorRuntime').async(
        function (k) {
          __p && __p();
          while (1)
            switch ((k.prev = k.next)) {
              case 0:
                a === void 0 &&
                  (a = { clearBufferIfUpgrading: !1, clearBufferOffset: 0 });
                if (this.$8) {
                  k.next = 3;
                  break;
                }
                return k.abrupt('return');
              case 3:
                (c = a),
                  (d = c.clearBufferIfUpgrading),
                  (e = c.clearBufferOffset);
                f = [];
                if (
                  !this.$4.getBool('exclude_tracks_without_smooth_playback', !1)
                ) {
                  k.next = 9;
                  break;
                }
                k.next = 8;
                return b('regeneratorRuntime').awrap(
                  b('getVideoTracksWithoutSmoothPlayback')(
                    this.$52(),
                    this.$53()
                  )
                );
              case 8:
                f = k.sent;
              case 9:
                g = null;
                if (
                  !(
                    this.$32 &&
                    (!this.$17.paused ||
                      !this.$4.getBool(
                        'rl_use_fallback_evaluation_when_paused',
                        !1
                      ))
                  )
                ) {
                  k.next = 28;
                  break;
                }
                if (
                  !(
                    !this.$41 &&
                    this.$4.getBool('rl_use_fallback_for_first_evaluation', !1)
                  )
                ) {
                  k.next = 15;
                  break;
                }
                g = this.$49(f);
                k.next = 26;
                break;
              case 15:
                if (!this.$4.getBool('rl_block_fetching', !1)) {
                  k.next = 23;
                  break;
                }
                this.$3.stopUntilVideoStreamSwitch();
                k.next = 19;
                return b('regeneratorRuntime').awrap(this.$54());
              case 19:
                g = k.sent;
                this.$3.resumeVideoFetching();
                k.next = 26;
                break;
              case 23:
                k.next = 25;
                return b('regeneratorRuntime').awrap(this.$54());
              case 25:
                g = k.sent;
              case 26:
                k.next = 29;
                break;
              case 28:
                g = this.$49(f);
              case 29:
                if (!g) {
                  k.next = 36;
                  break;
                }
                if (!g.active) {
                  k.next = 32;
                  break;
                }
                return k.abrupt('return');
              case 32:
                (i = !1),
                  d &&
                    ((j = l.$51(this.$3.getVideoTracks())),
                    (i = j ? h.compare(j, g) < 0 : !1)),
                  this.$1 && this.$1.notifySwitch(),
                  this.selectVideoTrack(g, i, e, this.$27);
              case 36:
              case 'end':
                return k.stop();
            }
        },
        null,
        this
      );
    };
    l.prototype.$55 = function () {
      this.$39 =
        this.$39 ||
        b('VideoPlayerConnectionQuality').evaluate(
          function () {
            return this.$56();
          }.bind(this)
        ) === 'POOR';
      return this.$39;
    };
    l.prototype.$57 = function () {
      if (!this.$3) return !1;
      var a = this.$3.getBufferVelocity();
      return (
        a !== null && a < this.$4.getNumber('low_buffer_velocity_threshold', 0)
      );
    };
    l.prototype.$58 = function (a, b, c) {
      __p && __p();
      if (!this.$28) return;
      var d = this.$35 || l.$51(c);
      this.$5 &&
        this.$5
          .getEventLogger('abr_evaluation')
          .setDynamicBitrate(b.bandwidth)
          .setStreamSwitchReason(a)
          .setInitiator(d ? d.streamInfoID : null)
          .setConcluder(b.streamInfoID)
          .setResult(b.active ? 'paused' : 'success')
          .log();
      if (this.$28) {
        var e = new Map();
        if (c)
          for (var f = 0; f < c.length; f++)
            e.set(c[f].fbQualityLabel, c[f].bandwidth);
        this.$28
          .setEvent('track_selection')
          .setReason(a)
          .setRepresentationID(b.streamInfoID)
          .setFbQualityLabel(b.fbQualityLabel)
          .setIsHvq(b.isInlineHVQ || b.isHVQ)
          .setActiveRepresentationID(d ? d.streamInfoID : null)
          .setActiveIsHvq(d ? d.isInlineHVQ || d.isHVQ : null)
          .setAvailableTracks(e)
          .log();
      }
    };
    l.prototype.$53 = function () {
      return this.$3.getAudioTracks().find(function (a) {
        return a.active;
      });
    };
    l.prototype.$52 = function () {
      return this.$3.getVideoTracks({
        useLocalBitrate: this.$4.getBool('use_local_bitrate', !1),
      });
    };
    l.prototype.$59 = function (a) {
      (this.$35 = l.$51(a)), (this.$36 = this.$35 ? a.indexOf(this.$35) : -1);
    };
    l.prototype.$60 = function (a) {
      __p && __p();
      if (a.length == 0) return [];
      a = a.filter(
        function (a) {
          return !(a.avoidOnPoorConnection && this.$55());
        }.bind(this)
      );
      var c = this.$47();
      if (!this.$9)
        for (var d = 0; d < a.length; d++)
          if (c && c.includes(a[d].streamInfoID)) {
            this.$27 = b('VideoPlayerStreamSwitchReasons').FORCED;
            this.$29 = b('VideoPlayerStreamSwitchReasons').FORCED;
            this.$58(this.$27, a[d], [a[d]]);
            return [a[d]];
          }
      if (this.$30) {
        var e = this.$30.id;
        d = a.find(function (a) {
          return a.id === e;
        });
        if (d) {
          this.$27 = b('VideoPlayerStreamSwitchReasons').USER;
          this.$58(this.$27, d, [d]);
          return [d];
        }
      }
      a.sort(h.compare);
      if (this.$14 !== null || this.$15 !== null) {
        var f =
            this.$14 !== null ? b('VideoQualityClasses').indexOf(this.$14) : 0,
          g =
            this.$15 !== null
              ? b('VideoQualityClasses').indexOf(this.$15)
              : b('VideoQualityClasses').length - 1;
        if (f <= g) {
          c = a.filter(function (a) {
            return (
              b('VideoQualityClasses').indexOf(a.fbQualityClass) >= f &&
              b('VideoQualityClasses').indexOf(a.fbQualityClass) <= g
            );
          });
          this.$27 = b('VideoPlayerStreamSwitchReasons').PREFER_QUALITY_CLASS;
          if (!c.length) {
            this.$58(this.$27, a[a.length - 1], [a[a.length - 1]]);
            return [a[a.length - 1]];
          }
          d = b('VideoQualityClasses').indexOf('sd');
          if (a.length == 2 && c.length == 2 && g <= d) {
            this.$58(this.$27, a[0], [a[0]]);
            return [a[0]];
          }
          a = c;
        }
      }
      return a;
    };
    l.prototype.$61 = function (a) {
      var b = this.$44(),
        c = this.$43();
      a = a.filter(
        function (a) {
          return this.$37
            ? (a.width || 0) <= c && (a.height || 0) <= b
            : (a.width || 0) <= c || (a.height || 0) <= b;
        }.bind(this)
      );
      return a;
    };
    l.prototype.$62 = function (a, b) {
      return b.length === 0
        ? a
        : a.filter(function (a) {
            return !b.find(function (b) {
              return a.id === b.id;
            });
          });
    };
    l.prototype.$63 = function () {
      if (this.$3 === null) return !1;
      var a = this.$4.getBool(
        'use_buffer_target_only_after_buffering_goal_is_hit',
        !1
      );
      if (a && !this.$3.hasHitBufferingGoal()) return !0;
      a = this.$4.getNumber('buffer_velocity_time_in_past_to_consider', 0) > 0;
      return a && !this.$57() ? !0 : !1;
    };
    l.prototype.$49 = function (a) {
      __p && __p();
      a === void 0 && (a = []);
      var c = this.$52();
      this.$59(c);
      c = this.$60(c);
      var d = this.$56();
      this.$4.getBool('exclude_tracks_with_expensive_mos', !1) &&
        (c = b('MosUtils').filterTracksWithExpensiveMos(
          c,
          this.$10 * k,
          this.$11 * k,
          d,
          this.$4.getNumber('maximum_mos_to_decrease', 3),
          this.$4.getNumber('maximum_bandwidth_bitrate_ratio', 1.5)
        ));
      if (c.length == 0) return null;
      else if (c.length == 1) return c[0];
      this.$41 = !0;
      var e = c[0];
      c = this.$62(c, a);
      a = c.reduce(function (a, b) {
        return a > (b.bandwidth || 0) ? a : b.bandwidth || 0;
      }, 0);
      d = b('VideoClientEdgeCooperation').applyBandwidthLimit(d, a);
      c = this.$61(c);
      a = l.$51(this.$3.getAudioTracks());
      a = a ? a.bandwidth : 0;
      var f = b('VideoPlayerUtils').getBufferedAheadOf(this.$17);
      if (
        f < this.$4.getNumber('force_lowest_representation_threshold', 0) &&
        !this.$63()
      ) {
        var g = 0;
        this.$36 > -1 &&
          (g = Math.floor(
            this.$36 *
              this.$4.getNumber('force_lower_representation_step_ratio', 0)
          ));
        g >= c.length && (g = c.length - 1);
        this.$27 = b('VideoPlayerStreamSwitchReasons').LOW_BUFFER_AVAILABILITY;
        e = c[g] || e;
        this.$58(this.$27, e, c);
        return e;
      } else {
        g = 0;
        for (var h = 0; h < c.length; h++) {
          var i = c[h],
            j =
              h + 1 < c.length
                ? c[h + 1]
                : { bandwidth: Number.POSITIVE_INFINITY };
          if (!i.bandwidth) continue;
          var m = this.$64(i, j, f, this.$31 && this.$31()),
            n = this.$22 ? g : (i.bandwidth + a) / this.$20;
          j = (j.bandwidth + a) / m;
          g = j;
          m = this.$4.getBool('use_buffer_downgrade_threshold', !1);
          var o = this.$4.getNumber('buffer_downgrade_threshold', 10);
          if (m && f > o && h <= this.$36) {
            e = this.$35 ? this.$35 : i;
            continue;
          }
          if (d >= n && d <= j) {
            e = i;
            if (e.active) break;
          }
        }
        this.$27 = b('VideoPlayerStreamSwitchReasons').BANDWIDTH;
      }
      this.$58(this.$27, e, c);
      return e;
    };
    l.prototype.$65 = function () {
      return !this.$2 ||
        !this.$2 instanceof b('VideoPlayerLocalBandwidthEstimator')
        ? []
        : this.$2.getRecentSamples();
    };
    l.prototype.$56 = function () {
      this.$2 instanceof b('VideoPlayerLocalBandwidthEstimator') ||
        g(0, undefined);
      return this.$2.getBandwidth(this.$19);
    };
    l.prototype.$64 = function (a, c, d, e) {
      __p && __p();
      var f = 1;
      !a.isInlineHVQ && c.isInlineHVQ
        ? (f = this.$26)
        : a.isInlineHVQ && e === b('VideoPlayerLoggerSource').INLINE
        ? (f = this.$24)
        : a.isHVQ && (f = this.$23);
      c = this.$4.getNumber('buffer_target', -1);
      e =
        !this.$4.getBool(
          'use_buffer_target_only_after_buffering_goal_is_hit',
          !1
        ) ||
        (this.$3 && this.$3.hasHitBufferingGoal());
      a = c > -1 && e;
      if (a) {
        e = d > c;
        a = e
          ? this.$4.getNumber(
              'buffer_target_overflow_upgrade_aggressiveness',
              1
            )
          : this.$4.getNumber(
              'buffer_target_underflow_upgrade_aggressiveness',
              1
            );
        f *= a;
      }
      d = this.$4.getNumber('frame_drop_penalty_minimum_frame_count', 0);
      d > 0 &&
        (f *= b('getBandwidthUpgradeTargetFactor')(
          i(this.$17),
          j(this.$17),
          d,
          this.$4.getNumber('frame_drop_penalty_factor', 0)
        ));
      return this.$21 * f;
    };
    l.prototype.$50 = function () {
      __p && __p();
      var a = this.$3.getAudioTracks();
      if (a.length == 0) return null;
      var b = this.$47();
      if (!this.$9)
        for (var c = 0; c < a.length; c++)
          if (b && b.includes(a[c].streamInfoID)) return a[c];
      return null;
    };
    l.prototype.$54 = function () {
      __p && __p();
      var a = this,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n;
      return b('regeneratorRuntime').async(
        function (o) {
          __p && __p();
          while (1)
            switch ((o.prev = o.next)) {
              case 0:
                c = this.$52();
                this.$59(c);
                c = this.$60(c);
                if (!(c.length == 0)) {
                  o.next = 7;
                  break;
                }
                return o.abrupt('return', null);
              case 7:
                if (!(c.length == 1)) {
                  o.next = 9;
                  break;
                }
                return o.abrupt('return', c[0]);
              case 9:
                c = this.$61(c);
                if (!(c.length == 0)) {
                  o.next = 14;
                  break;
                }
                return o.abrupt('return', null);
              case 14:
                if (!(c.length == 1)) {
                  o.next = 16;
                  break;
                }
                return o.abrupt('return', c[0]);
              case 16:
                this.$27 = b('VideoPlayerStreamSwitchReasons').FORCED;
                d = c[0];
                e = b('VideoPlayerUtils').getBufferedAheadOf(this.$17);
                this.$65();
                f = this.$56();
                g = this.$33
                  ? b('RlAbrUtils').getRlAbrShortFeatures(this.$17, c, e, f)
                  : b('RlAbrUtils').getRlAbrFeatures(
                      this.$17,
                      c,
                      e,
                      f,
                      this.$40
                    );
                if (g) {
                  o.next = 24;
                  break;
                }
                return o.abrupt('return', this.$49());
              case 24:
                h = this.$43();
                i = this.$44();
                o.prev = 26;
                if (!this.$33) {
                  o.next = 32;
                  break;
                }
                o.next = 30;
                return b('regeneratorRuntime').awrap(
                  (function () {
                    __p && __p();
                    var e, f, j, k;
                    return b('regeneratorRuntime').async(
                      function (l) {
                        __p && __p();
                        while (1)
                          switch ((l.prev = l.next)) {
                            case 0:
                              l.next = 2;
                              return b('regeneratorRuntime').awrap(
                                b(
                                  'RlAbrUtils'
                                ).genRlAbrShortFeaturesRecommendation(
                                  g,
                                  a.$4.getNumber('min_eval_interval', 1e3),
                                  a.$34
                                )
                              );
                            case 2:
                              e = l.sent;
                              if (!(!e || e.length == 0)) {
                                l.next = 5;
                                break;
                              }
                              throw new Error('RL service not available.');
                            case 5:
                              (f = function (f) {
                                var g = c.find(function (a) {
                                  var c = b(
                                    'RlAbrUtils'
                                  ).getQualityLabelBracket(
                                    a.fbQualityLabel,
                                    this.$33
                                  );
                                  return (
                                    c === e[f] &&
                                    (a.width <= h || a.height <= i)
                                  );
                                });
                                if (g) {
                                  d = g;
                                  a.$27 = b(
                                    'VideoPlayerStreamSwitchReasons'
                                  ).RL_DECISION;
                                  return 'break';
                                }
                              }),
                                (j = 0);
                            case 7:
                              if (!(j < e.length)) {
                                l.next = 14;
                                break;
                              }
                              k = f(j);
                              if (!(k === 'break')) {
                                l.next = 11;
                                break;
                              }
                              return l.abrupt('break', 14);
                            case 11:
                              j++;
                              l.next = 7;
                              break;
                            case 14:
                            case 'end':
                              return l.stop();
                          }
                      },
                      null,
                      this
                    );
                  })()
                );
              case 30:
                o.next = 52;
                break;
              case 32:
                j = this.$40 ? this.$40.getGuid() : null;
                if (!(j === null)) {
                  o.next = 35;
                  break;
                }
                return o.abrupt('return', this.$49());
              case 35:
                k = b('RlAbrUtils').getRlAbrAvailableBitrates(c);
                if (
                  !(
                    k.length >
                    this.$4.getNumber('rl_max_number_of_bitrates', 10)
                  )
                ) {
                  o.next = 38;
                  break;
                }
                return o.abrupt('return', this.$49());
              case 38:
                l = this.$4.getNumber('rl_request_timeout', 1e3);
                if (!this.$4.getBool('rl_buffer_timeout', !0)) {
                  o.next = 43;
                  break;
                }
                l = Math.min(l, (e - 1) * 1e3);
                if (!(l < 0)) {
                  o.next = 43;
                  break;
                }
                return o.abrupt('return', this.$49());
              case 43:
                m = this.$4.getString('rl_smc_tier', 'repomen_1');
                if (this.$42.modelFetched()) {
                  o.next = 49;
                  break;
                }
                this.$42.fetchIfNotExist(j, m, l);
                return o.abrupt('return', this.$49());
              case 49:
                (n = this.$42.getPolicyReportExperience(j, m, g, k, c, l)),
                  (d = c[n]),
                  (this.$27 = b('VideoPlayerStreamSwitchReasons').RL_DECISION);
              case 52:
                o.next = 57;
                break;
              case 54:
                o.prev = 54;
                o.t0 = o['catch'](26);
                return o.abrupt('return', this.$49());
              case 57:
                this.$38 = g;
                this.$58(this.$27, d, c);
                return o.abrupt('return', d);
              case 60:
              case 'end':
                return o.stop();
            }
        },
        null,
        this,
        [[26, 54]]
      );
    };
    e.exports = l;
  },
  null
);
__d(
  'VideoPlayerAbrLogger',
  [
    'ScriptPath',
    'VideoPlayerAbrLoggerConfig',
    'VideoPlayerAbrTypedLogger',
    'VideoPlayerShakaBandwidthEstimator',
    'VideoPlayerShakaGlobalConfig',
    'VideoPlayerUtils',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g;
    c = babelHelpers.inherits(a, b('VideoPlayerAbrTypedLogger'));
    g = c && c.prototype;
    function a(a) {
      g.constructor.call(this),
        g.setSession.call(this, a.uniqueID),
        g.setVideoID.call(this, a.videoID),
        (this.$VideoPlayerAbrLogger4 = a.video),
        (this.$VideoPlayerAbrLogger5 = a.isLive),
        (this.$VideoPlayerAbrLogger6 = a.playerOrigin),
        this.$VideoPlayerAbrLogger7();
    }
    a.prototype.setBytes = function (a) {
      this.$VideoPlayerAbrLogger1.bytes = a;
      return this;
    };
    a.prototype.setDelayMs = function (a) {
      this.$VideoPlayerAbrLogger1.delayMs = a;
      return this;
    };
    a.prototype.setEvent = function (event) {
      this.$VideoPlayerAbrLogger1.event = event;
      return this;
    };
    a.prototype.setUnsampledReason = function (a) {
      this.$VideoPlayerAbrLogger1.unsampledReason = a;
      return this;
    };
    a.prototype.setReason = function (a) {
      this.$VideoPlayerAbrLogger1.reason = a;
      return this;
    };
    a.prototype.setRepresentationID = function (a) {
      this.$VideoPlayerAbrLogger2 = a;
      return this;
    };
    a.prototype.setFbQualityLabel = function (a) {
      this.$VideoPlayerAbrLogger3 = a;
      return this;
    };
    a.prototype.setClientTimeBegin = function (a) {
      this.$VideoPlayerAbrLogger1.clientTimeBegin = a;
      return this;
    };
    a.prototype.setClientTimeEnd = function (a) {
      this.$VideoPlayerAbrLogger1.clientTimeEnd = a;
      return this;
    };
    a.prototype.setIsHvq = function (a) {
      this.$VideoPlayerAbrLogger1.isHvq = a;
      return this;
    };
    a.prototype.setActiveIsHvq = function (a) {
      this.$VideoPlayerAbrLogger1.activeIsHvq = a;
      return this;
    };
    a.prototype.setActiveRepresentationID = function (a) {
      this.$VideoPlayerAbrLogger1.activeRepresentationID = a;
      return this;
    };
    a.prototype.setAvailableTracks = function (a) {
      this.$VideoPlayerAbrLogger1.availableTracks = a;
      return this;
    };
    a.prototype.$VideoPlayerAbrLogger7 = function () {
      this.$VideoPlayerAbrLogger1 = {
        bytes: null,
        delayMs: null,
        event: null,
        unsampledReason: null,
        reason: null,
        clientTimeBegin: null,
        clientTimeEnd: null,
        isHvq: null,
        activeIsHvq: null,
        activeRepresentationID: null,
        availableTracks: null,
      };
    };
    a.prototype.$VideoPlayerAbrLogger8 = function () {
      __p && __p();
      if (this.$VideoPlayerAbrLogger1.event == null) return;
      else
        this.$VideoPlayerAbrLogger1.event == 'track_selection' &&
          (g.setActiveIsHvq.call(this, this.$VideoPlayerAbrLogger1.activeIsHvq),
          g.setActiveRepresentationID.call(
            this,
            this.$VideoPlayerAbrLogger1.activeRepresentationID
          ),
          g.setAvailableTracks.call(
            this,
            this.$VideoPlayerAbrLogger1.availableTracks
          ),
          g.setIsHvq.call(this, this.$VideoPlayerAbrLogger1.isHvq));
      g.setBytes.call(this, this.$VideoPlayerAbrLogger1.bytes);
      g.setDelayMs.call(this, this.$VideoPlayerAbrLogger1.delayMs);
      g.setEvent.call(this, this.$VideoPlayerAbrLogger1.event);
      g.setUnsampledReason.call(
        this,
        this.$VideoPlayerAbrLogger1.unsampledReason
      );
      g.setReason.call(this, this.$VideoPlayerAbrLogger1.reason);
      var a = this.$VideoPlayerAbrLogger1.clientTimeBegin,
        b = this.$VideoPlayerAbrLogger1.clientTimeEnd;
      a == null ? ((a = Date.now()), (b = a)) : b == null && (b = a);
      g.setClientTimeBegin.call(this, a);
      g.setClientTimeEnd.call(this, b);
    };
    a.prototype.log = function () {
      __p && __p();
      if (
        b('VideoPlayerShakaGlobalConfig').getBool(
          'enable_client_side_abr_logger_sampling',
          !0
        ) &&
        !b('VideoPlayerAbrLoggerConfig').isSampled
      )
        return;
      this.$VideoPlayerAbrLogger8();
      g.setBandwidthEstimate.call(
        this,
        parseInt(b('VideoPlayerShakaBandwidthEstimator').getBandwidth(), 10)
      );
      g.setRepresentationID.call(this, this.$VideoPlayerAbrLogger2);
      g.setFbQualityLabel.call(this, this.$VideoPlayerAbrLogger3);
      g.setPlayhead.call(
        this,
        Math.round(this.$VideoPlayerAbrLogger4.currentTime * 1e3)
      );
      g.setBufferedAhead.call(
        this,
        Math.round(
          b('VideoPlayerUtils').getBufferedAheadOf(this.$VideoPlayerAbrLogger4)
        )
      );
      g.setVideoDuration.call(
        this,
        Math.round(this.$VideoPlayerAbrLogger4.duration * 1e3)
      );
      g.setIsLive.call(this, this.$VideoPlayerAbrLogger5);
      g.setPlayerOriginCallerSpecified.call(this, this.$VideoPlayerAbrLogger6);
      g.setScriptPath.call(this, b('ScriptPath').getScriptPath());
      g.log.call(this);
      this.$VideoPlayerAbrLogger7();
    };
    e.exports = a;
  },
  null
);
__d(
  'PerformanceResourceBuffer',
  ['BanzaiODS', 'EventEmitter'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g,
      h = a.__isResourceTimingBufferFull;
    delete a.__isResourceTimingBufferFull;
    performance.onresourcetimingbufferfull = function () {
      (h = !0), i && i.emit('full');
    };
    var i;
    g = babelHelpers.inherits(c, b('EventEmitter'));
    g && g.prototype;
    c.prototype.isBufferFull = function () {
      return h;
    };
    function c() {
      g.apply(this, arguments);
    }
    i = new c();
    i.isBufferFull()
      ? b('BanzaiODS').bumpEntityKey('performance', 'resourcetimingbufferfull')
      : i.addListener('full', function () {
          return b('BanzaiODS').bumpEntityKey(
            'performance',
            'resourcetimingbufferfull'
          );
        });
    e.exports = i;
  },
  null
);
__d(
  'VideoPlayerLiveStreamState',
  ['EventEmitter', 'RTISubscriptionManager'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g,
      h = { interrupt: 'streamInterruptAt', ended: 'endedAt' };
    c = babelHelpers.inherits(a, b('EventEmitter'));
    g = c && c.prototype;
    function a(a) {
      g.constructor.call(this),
        (this.$VideoPlayerLiveStreamState2 = a),
        (this.$VideoPlayerLiveStreamState1 = []);
    }
    a.prototype.subscribe = function () {
      this.$VideoPlayerLiveStreamState1 = [];
      for (var a in h)
        this.$VideoPlayerLiveStreamState1.push(
          b('RTISubscriptionManager').subscribe(
            'video_broadcast/' + a + '_' + this.$VideoPlayerLiveStreamState2,
            this.$VideoPlayerLiveStreamState3.bind(this, h[a])
          )
        );
    };
    a.prototype.unsubscribe = function () {
      __p && __p();
      for (
        var a = this.$VideoPlayerLiveStreamState1,
          b = Array.isArray(a),
          c = 0,
          a = b
            ? a
            : a[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var d;
        if (b) {
          if (c >= a.length) break;
          d = a[c++];
        } else {
          c = a.next();
          if (c.done) break;
          d = c.value;
        }
        d = d;
        d.unsubscribe();
      }
      this.$VideoPlayerLiveStreamState1 = [];
    };
    a.prototype.$VideoPlayerLiveStreamState3 = function (a, b) {
      b = JSON.parse(b.payload || '{}') || {};
      b = b.time_position;
      typeof b === 'number' && ((b /= 1e3), this.emit(a, b));
    };
    e.exports = a;
  },
  null
);
__d(
  'getVideoPlayerShakaSeekableRanges',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a) {
      __p && __p();
      var b = [];
      if (a.seekRangeGaps.length === 0)
        b.push({ startTime: a.start, endTime: a.end });
      else {
        var c = a.start,
          d;
        for (var e = 0; e < a.seekRangeGaps.length; ++e)
          (d = a.seekRangeGaps[e].startTime),
            b.push({ startTime: c, endTime: d }),
            (c = a.seekRangeGaps[e].endTime);
        d = a.end;
        b.push({ startTime: c, endTime: d });
      }
      return b;
    }
    e.exports = a;
  },
  null
);
__d(
  'VideoPlayerHTML5Shaka',
  [
    'invariant',
    'Promise',
    'CustomAbrManager',
    'Event',
    'EventEmitter',
    'EventListener',
    'Shaka',
    'SubscriptionsHandler',
    'TaggedTimeRanges',
    'VideoDashPrefetchCache',
    'VideoPlayerAbrLogger',
    'VideoPlayerConnectionQuality',
    'VideoPlayerLiveStreamState',
    'VideoPlayerMetaData',
    'VideoPlayerShakaBandwidthEstimator',
    'VideoPlayerShakaPerformanceLogger',
    'VideoPriorityCalculator',
    'VideoStreamingTaskQueueProvider',
    'VideoWatchTimeTracker',
    'VideoPlayerVersions',
    'clearInterval',
    'dangerouslyOverrideMediaElementEndedProperty',
    'dispatchCustomEvent',
    'dispatchEvent',
    'setInterval',
    'throttle',
    'TimeRanges',
    'getVideoPlayerShakaSeekableRanges',
    'PerformanceResourceBuffer',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h;
    a = b('Shaka').player;
    var i = a.DashVideoSource,
      j = a.Player,
      k = a.VideoTrack,
      l = b('Shaka').dash.mpd.parseMpd,
      m = b('VideoPlayerShakaBandwidthEstimator').getEstimator();
    b('PerformanceResourceBuffer');
    c = babelHelpers.inherits(n, b('EventEmitter'));
    h = c && c.prototype;
    function n(a, c, d) {
      __p && __p();
      var e = d.config,
        f = d.videoID,
        g = d.playerInstanceKey,
        i = d.width,
        k = d.height,
        m = d.manifest,
        o = d.manifestUrl,
        p = d.isLive,
        q = d.isServableViaFbms,
        r = d.minPlayQuality,
        s = d.maxPlayQuality,
        t = d.accessToken,
        u = d.startTimestamp,
        v = d.disableStreaming,
        w = d.playerOrigin,
        x = d.playerSuborigin,
        y = d.resolutionConstraintMaxHeight,
        z = d.resolutionConstraintMaxWidth,
        A = d.useStrictTrackDimensionsExclusionLogic,
        B = d.isSpherical,
        C = d.getSource,
        D = d.vpcPlayingStateEmitter,
        E = d.streamPriorityAdjuster,
        F = d.videoLiveTrace;
      d = d.videoLicenseUri;
      h.constructor.call(this);
      this.$VideoPlayerHTML5Shaka36 = null;
      this.$VideoPlayerHTML5Shaka50 = new (b('SubscriptionsHandler'))();
      this.$VideoPlayerHTML5Shaka2 = e;
      this.$VideoPlayerHTML5Shaka5 = r;
      this.$VideoPlayerHTML5Shaka6 = s;
      this.$VideoPlayerHTML5Shaka7 = !1;
      this.$VideoPlayerHTML5Shaka8 = null;
      this.$VideoPlayerHTML5Shaka9 = 1;
      this.$VideoPlayerHTML5Shaka10 = !1;
      this.$VideoPlayerHTML5Shaka11 = p;
      this.$VideoPlayerHTML5Shaka12 = p;
      this.$VideoPlayerHTML5Shaka13 = q;
      this.$VideoPlayerHTML5Shaka14 = !1;
      this.$VideoPlayerHTML5Shaka15 = B;
      this.$VideoPlayerHTML5Shaka16 = !1;
      this.$VideoPlayerHTML5Shaka17 = i;
      this.$VideoPlayerHTML5Shaka18 = k;
      this.$VideoPlayerHTML5Shaka19 = !1;
      this.$VideoPlayerHTML5Shaka51 = d;
      this.$VideoPlayerHTML5Shaka36 = m || o;
      this.$VideoPlayerHTML5Shaka47 =
        (typeof y === 'number'
          ? y
          : this.$VideoPlayerHTML5Shaka2.getNumber(
              'resolution_constraint_max_height',
              0
            )) || Infinity;
      this.$VideoPlayerHTML5Shaka48 =
        (typeof z === 'number'
          ? z
          : this.$VideoPlayerHTML5Shaka2.getNumber(
              'resolution_constraint_max_width',
              0
            )) || Infinity;
      this.$VideoPlayerHTML5Shaka49 = A;
      this.$VideoPlayerHTML5Shaka3 = c;
      this.$VideoPlayerHTML5Shaka39 = null;
      this.$VideoPlayerHTML5Shaka21 = C;
      e = this.$VideoPlayerHTML5Shaka39;
      this.$VideoPlayerHTML5Shaka4 = f;
      this.$VideoPlayerHTML5Shaka27 = b(
        'VideoPlayerShakaPerformanceLogger'
      ).isEnabled()
        ? new (b('VideoPlayerShakaPerformanceLogger'))({
            videoID: f,
            video: a,
            representationId: e,
            isLive: p,
            isServableViaFbms: q,
            accessToken: t,
            playerOrigin: w,
            playerSuborigin: x,
            playerVersion: this.getPlayerVersion(),
            uniqueID: g,
            getBandwidthEstimate: function (a) {
              return b(
                'VideoPlayerShakaBandwidthEstimator'
              ).getBandwidthByVideoType(a);
            },
          })
        : null;
      this.$VideoPlayerHTML5Shaka31 = new (b('VideoPlayerAbrLogger'))({
        videoID: f,
        uniqueID: g,
        video: a,
        isLive: p,
        isServableViaFbms: q,
        playerOrigin: w,
      }).setRepresentationID(e);
      this.$VideoPlayerHTML5Shaka52();
      b('EventListener').listen(
        a,
        'playing',
        this.$VideoPlayerHTML5Shaka53.bind(this)
      );
      b('EventListener').listen(
        a,
        'timeupdate',
        function (a) {
          this.$VideoPlayerHTML5Shaka54(a.target.currentTime);
        }.bind(this)
      );
      b('EventListener').listen(
        a,
        'pause',
        this.$VideoPlayerHTML5Shaka55.bind(this)
      );
      b('EventListener').listen(
        a,
        'play',
        function () {
          this.$VideoPlayerHTML5Shaka14 = !0;
        }.bind(this)
      );
      this.$VideoPlayerHTML5Shaka35 = Date.now();
      this.$VideoPlayerHTML5Shaka2.getBool('refresh_vod_manifest', !1) &&
        this.$VideoPlayerHTML5Shaka56();
      this.$VideoPlayerHTML5Shaka23 = [];
      this.$VideoPlayerHTML5Shaka24 = null;
      this.$VideoPlayerHTML5Shaka25 = null;
      this.$VideoPlayerHTML5Shaka41 = D;
      this.$VideoPlayerHTML5Shaka42 = E;
      this.$VideoPlayerHTML5Shaka20 = new j(
        a,
        this.$VideoPlayerHTML5Shaka2,
        this.$VideoPlayerHTML5Shaka27,
        this.$VideoPlayerHTML5Shaka31,
        this.$VideoPlayerHTML5Shaka41,
        this.$VideoPlayerHTML5Shaka42,
        F
      );
      this.$VideoPlayerHTML5Shaka20.addEventListener(
        'seekrangechanged',
        function () {
          return this.$VideoPlayerHTML5Shaka57();
        }.bind(this)
      );
      this.$VideoPlayerHTML5Shaka20.addEventListener(
        'bufferingStart',
        function () {
          return this.$VideoPlayerHTML5Shaka58();
        }.bind(this)
      );
      this.$VideoPlayerHTML5Shaka20.addEventListener(
        'bufferingEnd',
        function () {
          return this.$VideoPlayerHTML5Shaka59();
        }.bind(this)
      );
      this.$VideoPlayerHTML5Shaka20.addEventListener(
        'bufferingProgress',
        this.$VideoPlayerHTML5Shaka60.bind(this)
      );
      this.$VideoPlayerHTML5Shaka20.addEventListener(
        'error',
        function (a) {
          return this.$VideoPlayerHTML5Shaka61(a);
        }.bind(this)
      );
      this.$VideoPlayerHTML5Shaka20.addEventListener(
        'adaptation',
        this.$VideoPlayerHTML5Shaka62.bind(this)
      );
      this.$VideoPlayerHTML5Shaka20.addEventListener(
        'trackschanged',
        this.$VideoPlayerHTML5Shaka63.bind(this)
      );
      this.$VideoPlayerHTML5Shaka20.addEventListener(
        'debug/dashPlayerEvent',
        function (a) {
          return this.emit('debug/dashPlayerEvent', a.detail);
        }.bind(this)
      );
      this.$VideoPlayerHTML5Shaka20.addEventListener(
        'manifestwrapped',
        this.$VideoPlayerHTML5Shaka64.bind(this)
      );
      this.$VideoPlayerHTML5Shaka20.addEventListener(
        'cea608-captions',
        function (a) {
          this.emit('cea608CaptionsParsed', a.detail.captions);
        }.bind(this)
      );
      this.$VideoPlayerHTML5Shaka20.addEventListener(
        'cea608AvailabilityChanged',
        function () {
          this.emit('cea608AvailabilityChanged');
        }.bind(this)
      );
      this.$VideoPlayerHTML5Shaka20.addEventListener(
        'manifestIsUpdating',
        this.$VideoPlayerHTML5Shaka65.bind(this)
      );
      this.$VideoPlayerHTML5Shaka20.addEventListener(
        'networkinterrupted',
        this.$VideoPlayerHTML5Shaka66.bind(this)
      );
      this.$VideoPlayerHTML5Shaka20.addEventListener(
        'networkresumed',
        this.$VideoPlayerHTML5Shaka67.bind(this)
      );
      r = !1;
      s = null;
      B = null;
      this.$VideoPlayerHTML5Shaka45 = this.$VideoPlayerHTML5Shaka2.getBool(
        'live_send_push_headers',
        !0
      );
      this.$VideoPlayerHTML5Shaka46 = o;
      m
        ? (this.$VideoPlayerHTML5Shaka38 = l(m, o))
        : ((this.$VideoPlayerHTML5Shaka38 = o),
          (r = o && o.indexOf('dash-abr') !== -1));
      r &&
        ((this.$VideoPlayerHTML5Shaka45 = this.$VideoPlayerHTML5Shaka2.getBool(
          'live_abr_send_push_headers',
          !0
        )),
        this.$VideoPlayerHTML5Shaka45 &&
          ((s = this.$VideoPlayerHTML5Shaka2.getString(
            'live_abr_initial_push_representation',
            'live-md_H264'
          )),
          (B = this.$VideoPlayerHTML5Shaka2.getString(
            'live_abr_audio_push_representation',
            'live-md_AAC'
          )),
          (this.$VideoPlayerHTML5Shaka3 = [
            this.$VideoPlayerHTML5Shaka2.getString(
              'live_abr_initial_push_representation',
              'live-md_H264'
            ),
          ])),
        this.$VideoPlayerHTML5Shaka2.getBool(
          'live_abr_always_force_representation',
          !1
        ) &&
          (this.$VideoPlayerHTML5Shaka3 = [
            this.$VideoPlayerHTML5Shaka2.getString(
              'live_abr_initial_push_representation',
              'live-md_H264'
            ),
          ]));
      this.$VideoPlayerHTML5Shaka1 = a;
      this.$VideoPlayerHTML5Shaka44 = this.$VideoPlayerHTML5Shaka2.getBool(
        'enable_video_watch_time_tracker',
        !1
      )
        ? new (b('VideoWatchTimeTracker'))(g)
        : null;
      this.$VideoPlayerHTML5Shaka43 = this.$VideoPlayerHTML5Shaka68();
      this.$VideoPlayerHTML5Shaka26 = this.$VideoPlayerHTML5Shaka69();
      this.$VideoPlayerHTML5Shaka20.configure({
        enableAdaptation: this.getIsAbrEnabled(),
        appendPlayingQueryParam: this.$VideoPlayerHTML5Shaka2.getBool(
          'add_cdn_debug_query_parameters',
          !0
        ),
        endBufferingOnPlaying: this.$VideoPlayerHTML5Shaka2.getBool(
          'end_buffering_on_playing',
          !1
        ),
        usePlaybackRateForBuffering: !0,
        streamBufferSize: this.$VideoPlayerHTML5Shaka2.getBool(
          'use_stream_buffer_size_override',
          !1
        )
          ? 0
          : this.$VideoPlayerHTML5Shaka70(),
        initialStreamBufferSize: n.isAutoplayBandwidthRestrained(p)
          ? this.$VideoPlayerHTML5Shaka2.getNumber(
              'initial_stream_buffer_size_for_blocked_autoplay',
              5.9335983320607
            )
          : this.$VideoPlayerHTML5Shaka2.getBool(
              'use_stream_buffer_size_override',
              !1
            )
          ? 0
          : this.$VideoPlayerHTML5Shaka71(),
        smartBufferAdjustmentParams: {
          useSmartBuffering: this.$VideoPlayerHTML5Shaka2.getBool(
            'use_smart_buffering',
            !1
          ),
          bufferSize_00_to_03: this.$VideoPlayerHTML5Shaka2.getNumber(
            'buffer_size_00_to_03',
            5
          ),
          bufferSize_03_to_10: this.$VideoPlayerHTML5Shaka2.getNumber(
            'buffer_size_03_to_10',
            15
          ),
          bufferSize_10_to_30: this.$VideoPlayerHTML5Shaka2.getNumber(
            'buffer_size_10_to_30',
            30
          ),
          bufferSize_30_to_60: this.$VideoPlayerHTML5Shaka2.getNumber(
            'buffer_size_30_to_60',
            600
          ),
          bufferSize_above_60: this.$VideoPlayerHTML5Shaka2.getNumber(
            'buffer_size_above_60',
            600
          ),
          nonSmartBufferSize: this.$VideoPlayerHTML5Shaka2.getNumber(
            'non_smart_buffer_size',
            15
          ),
        },
        dynamicStreamBufferSize: p
          ? this.$VideoPlayerHTML5Shaka2.getNumber(
              'live_dynamic_stream_buffer_size',
              12
            )
          : null,
        includeStreamBufferSizeInStartOffset: !0,
        minMpdRefreshInterval: this.$VideoPlayerHTML5Shaka2.getNumber(
          'min_mpd_refresh_interval',
          1e3
        ),
        disableCacheBustingEvenThoughItMayAffectBandwidthEstimation: !0,
        liveStreamEndTimeout: this.$VideoPlayerHTML5Shaka2.getNumber(
          'live_stream_end_timeout',
          6e4
        ),
        enableLiveInterruptionDetection: !0,
        liveInterruptionConsecutiveUpdatesWithoutChange:
          this.$VideoPlayerHTML5Shaka2.getNumber(
            'live_interruption_consecutive_updates_without_change',
            5
          ),
        liveInterruptionConsecutiveUpdatesWithChange:
          this.$VideoPlayerHTML5Shaka2.getNumber(
            'live_interruption_consecutive_updates_with_change',
            3
          ),
        liveMaxSegmentsToPush: this.$VideoPlayerHTML5Shaka2.getNumber(
          'live_max_segments_to_push',
          2
        ),
        liveSendPushHeaders: n.isAutoplayBandwidthRestrained(p)
          ? !1
          : this.$VideoPlayerHTML5Shaka72(),
        liveMaxManifestFetchesWithPush: this.$VideoPlayerHTML5Shaka2.getNumber(
          'live_max_manifest_fetches_with_push',
          1
        ),
        resolveVideoTimeUpdateOnFragmentedTimeRanges:
          this.$VideoPlayerHTML5Shaka2.getBool(
            'resolve_video_time_update_on_fragmented_time_ranges',
            !0
          ),
        enableManifestDebug: this.$VideoPlayerHTML5Shaka2.getBool(
          'enable_video_debug',
          !1
        ),
        reappendInitSegmentAfterAbort: this.$VideoPlayerHTML5Shaka2.getBool(
          'reappend_init_segment_after_abort',
          !1
        ),
        useInlineInitSegment: this.$VideoPlayerHTML5Shaka2.getBool(
          'use_inline_init_segment',
          !1
        ),
        currentTimeDuringReadyStateZeroThrows:
          this.$VideoPlayerHTML5Shaka2.getBool(
            'current_time_during_ready_state_zero_throws',
            !1
          ),
        liveInitialPushRepresentation: s,
        liveAudioPushRepresentation: B,
        jumpToLiveThreshold: this.$VideoPlayerHTML5Shaka2.getNumber(
          'jump_to_live_threshold',
          0.5
        ),
        liveDataFetchMaxRetries: this.$VideoPlayerHTML5Shaka2.getNumber(
          'live_data_fetch_max_retries',
          0
        ),
        liveSourceBufferClearMaxRetries: this.$VideoPlayerHTML5Shaka2.getNumber(
          'live_source_buffer_clear_max_retries',
          0
        ),
        useLongCacheForManifest: this.$VideoPlayerHTML5Shaka2.getBool(
          'use_long_cache_for_manifest',
          !0
        ),
        jumpToEarliestPositionInCurrentBlock:
          this.$VideoPlayerHTML5Shaka2.getBool(
            'jump_to_earliest_position_in_current_block',
            !0
          ),
        ignoreMinBufferTime: this.$VideoPlayerHTML5Shaka2.getBool(
          'ignore_min_buffer_time',
          !1
        ),
        playheadFragmentedGapDiffAllowance:
          this.$VideoPlayerHTML5Shaka2.getNumber(
            'playhead_fragmented_gap_diff_allowance',
            0.1
          ),
        fixBufferingGoalDetermination: this.$VideoPlayerHTML5Shaka2.getBool(
          'fix_buffering_goal_determination',
          !0
        ),
        skipEmptySegments: this.$VideoPlayerHTML5Shaka2.getBool(
          'skip_empty_segments',
          !1
        ),
        useMicroTaskTimeouts: !0,
        enableRequestPipelining: this.$VideoPlayerHTML5Shaka12
          ? this.$VideoPlayerHTML5Shaka2.getBool(
              'enable_request_pipelining_for_live',
              !0
            )
          : this.$VideoPlayerHTML5Shaka2.getBool(
              'enable_request_pipelining_for_vod',
              !0
            ),
        enableStreaming:
          !v &&
          (this.$VideoPlayerHTML5Shaka12
            ? this.$VideoPlayerHTML5Shaka2.getBool(
                'enable_streaming_for_live',
                !1
              )
            : this.$VideoPlayerHTML5Shaka2.getBool(
                'enable_streaming_for_vod',
                !0
              )),
        enableContentProtection: this.$VideoPlayerHTML5Shaka2.getBool(
          'enable_content_protection',
          !1
        ),
      });
      if (p) {
        i = new (b('VideoPlayerLiveStreamState'))(f);
        this.$VideoPlayerHTML5Shaka40 = i;
        this.$VideoPlayerHTML5Shaka20.addEventListener(
          'liveheadIdleAt',
          function (event) {
            var a = event.seconds;
            a > (this.$VideoPlayerHTML5Shaka8 || 0) &&
              (this.$VideoPlayerHTML5Shaka73(a),
              this.$VideoPlayerHTML5Shaka28 &&
                this.$VideoPlayerHTML5Shaka74() &&
                (this.$VideoPlayerHTML5Shaka75(), this.emit('bufferingEnd')));
          }.bind(this)
        );
        this.addListenersToLiveStreamState(i);
      }
      u && this.$VideoPlayerHTML5Shaka20.setPlaybackStartTime(u);
      this.$VideoPlayerHTML5Shaka20
        .load(this.$VideoPlayerHTML5Shaka26)
        ['catch'](
          function (a) {
            this.$VideoPlayerHTML5Shaka2.getBool(
              'fallback_on_videosource_load_410_error',
              !1
            ) &&
              a.type === 'net' &&
              a.status === 410 &&
              this.$VideoPlayerHTML5Shaka61(a);
            if (
              this.$VideoPlayerHTML5Shaka7 &&
              this.$VideoPlayerHTML5Shaka2.getBool(
                'ignore_errors_after_unload',
                !0
              )
            )
              return;
            throw a;
          }.bind(this)
        );
    }
    n.prototype.addListenersToLiveStreamState = function (a) {
      a.addListener(
        'streamInterruptAt',
        this.$VideoPlayerHTML5Shaka73.bind(this)
      ),
        ['streamInterruptAt', 'commercialBreakAt', 'endedAt'].forEach(
          function (b) {
            a.addListener(
              b,
              function (event) {
                this.emit('debug/dashPlayerEvent', { type: b, event: event });
              }.bind(this)
            );
          }.bind(this)
        );
    };
    n.prototype.hasSubtitles = function () {
      return (
        this.$VideoPlayerHTML5Shaka26.hasInlinedCea608Subtitles() &&
        this.$VideoPlayerHTML5Shaka2.getBool('enable_cea608_parsing', !0)
      );
    };
    n.prototype.areSubtitlesAutogenerated = function () {
      return this.$VideoPlayerHTML5Shaka26.isUsingASRCaptions();
    };
    n.prototype.enableSubtitles = function (a) {
      this.$VideoPlayerHTML5Shaka26.setEnableCea608Parsing(
        a && this.$VideoPlayerHTML5Shaka2.getBool('enable_cea608_parsing', !0)
      );
    };
    n.prototype.getDebug = function () {
      return {
        manifest: this.$VideoPlayerHTML5Shaka36,
        AbrManager: this.$VideoPlayerHTML5Shaka43,
        VideoSource: this.$VideoPlayerHTML5Shaka26,
        DashPlayer: this.$VideoPlayerHTML5Shaka20,
        VideoTaskQueue: b('VideoStreamingTaskQueueProvider').getQueue('video'),
        VideoTaskScheduler: b(
          'VideoStreamingTaskQueueProvider'
        ).getSchedulerForDebug('video'),
      };
    };
    n.getEstimatedBandwidth = function () {
      return m.getBandwidth();
    };
    n.isAutoplayBandwidthRestrained = function (a) {
      a = b('VideoPlayerShakaBandwidthEstimator').isAutoplayBandwidthRestrained(
        a
      );
      return a;
    };
    n.prototype.$VideoPlayerHTML5Shaka52 = function () {
      var a = this.$VideoPlayerHTML5Shaka2.getNumber(
        'connection_quality_context_throttle_frequency',
        0
      );
      if (a === 0) return;
      this.$VideoPlayerHTML5Shaka50.addSubscriptions(
        b('EventListener').listen(
          m,
          'bandwidth',
          b('throttle')(
            function () {
              this.$VideoPlayerHTML5Shaka2.setContext(
                'connection_quality',
                b('VideoPlayerConnectionQuality').evaluate(
                  n.getEstimatedBandwidth
                )
              );
            }.bind(this),
            a
          )
        )
      );
    };
    n.prototype.$VideoPlayerHTML5Shaka54 = function (a) {
      __p && __p();
      a = this.$VideoPlayerHTML5Shaka22.get(a);
      if (!a) return;
      var b = a.id,
        c = a.reason;
      a = a.performanceLogger;
      if (
        this.$VideoPlayerHTML5Shaka2.getBool(
          'fix_initial_stream_id_logging',
          !1
        ) &&
        !this.$VideoPlayerHTML5Shaka39 &&
        b
      )
        this.$VideoPlayerHTML5Shaka39 = b;
      else if (this.$VideoPlayerHTML5Shaka39 !== b) {
        if (
          this.$VideoPlayerHTML5Shaka2.getBool(
            'prevent_representation_ended_when_paused',
            !1
          ) &&
          this.$VideoPlayerHTML5Shaka1.paused
        ) {
          this.emit('blocked_paused_representation_ended');
          return;
        }
        var d = this.$VideoPlayerHTML5Shaka39;
        this.$VideoPlayerHTML5Shaka39 = b;
        a && a.setStreamSwitchReason(c).log();
        this.emit('representation_ended', {
          representationID: d,
          nextRepresentationID: b,
          streamSwitchReason: c,
        });
      }
    };
    n.prototype.getStreamInfoIDForTimePosition = function (a) {
      a = this.$VideoPlayerHTML5Shaka22.get(a);
      var b = null;
      a && (b = a.id);
      return b;
    };
    n.prototype.$VideoPlayerHTML5Shaka76 = function (a) {
      if (a.fbQualityLabel) return a.fbQualityLabel;
      else if (a.height) return [a.height, 'p'].join('');
      return null;
    };
    n.prototype.$VideoPlayerHTML5Shaka77 = function (a, b) {
      var c = this.$VideoPlayerHTML5Shaka76(a);
      if (c) return c;
      else if (k.compare(a, b[0]) == 0) return 'SD';
      else if (k.compare(a, b[b.length - 1]) == 0) return 'HD';
      else return null;
    };
    n.prototype.getAvailableVideoQualities = function () {
      if (this.$VideoPlayerHTML5Shaka7) return this.$VideoPlayerHTML5Shaka23;
      var a = this.$VideoPlayerHTML5Shaka26.getVideoTracks();
      a.sort(k.compare);
      return a.every(
        function (a) {
          return this.$VideoPlayerHTML5Shaka76(a) !== null;
        }.bind(this)
      )
        ? a.map(
            function (a) {
              return this.$VideoPlayerHTML5Shaka76(a);
            }.bind(this)
          )
        : a.length > 1
        ? ['SD', 'HD']
        : ['SD'];
    };
    n.prototype.getVideoProjection = function () {
      return this.$VideoPlayerHTML5Shaka26.getVideoProjection();
    };
    n.prototype.getIsAbrEnabled = function () {
      return !0;
    };
    n.prototype.getSelectedVideoQuality = function () {
      if (this.$VideoPlayerHTML5Shaka7) return this.$VideoPlayerHTML5Shaka24;
      var a = this.$VideoPlayerHTML5Shaka26.getVideoTracks();
      a.sort(k.compare);
      var b = a.find(function (a) {
        return a.active;
      });
      return b ? this.$VideoPlayerHTML5Shaka77(b, a) : null;
    };
    n.prototype.clearBufferAfterSeekingIfLowerQuality = function (a) {
      __p && __p();
      a = this.$VideoPlayerHTML5Shaka22.get(a);
      var b = a && a.id;
      if (!b) return;
      a = this.$VideoPlayerHTML5Shaka26.getVideoTracks();
      var c = a.find(function (a) {
        return a.active;
      });
      a = a.find(function (a) {
        return a.streamInfoID === b;
      });
      k.compare(c, a) > 0 &&
        this.$VideoPlayerHTML5Shaka26.setClearBufferAfterSeeking();
    };
    n.prototype.getDashAudioConfiguration = function () {
      return this.$VideoPlayerHTML5Shaka26.getMpdAudioConfig();
    };
    n.prototype.canAutoSelectVideoQuality = function () {
      return !0;
    };
    n.prototype.setPreloadDisabled = function (a) {
      this.$VideoPlayerHTML5Shaka2.getBool(
        'block_autoplay_allow_preload_settings_change',
        !1
      ) &&
        this.$VideoPlayerHTML5Shaka20.configure({
          initialStreamBufferSize: a ? 0 : this.$VideoPlayerHTML5Shaka71(),
          liveSendPushHeaders: a ? !1 : this.$VideoPlayerHTML5Shaka72(),
        });
    };
    n.prototype.restoreStreamBufferSize = function () {
      if (
        !this.$VideoPlayerHTML5Shaka2.getBool(
          'use_stream_buffer_size_override',
          !1
        )
      )
        return;
      this.$VideoPlayerHTML5Shaka20.configure({
        initialStreamBufferSize: this.$VideoPlayerHTML5Shaka71(),
        streamBufferSize: this.$VideoPlayerHTML5Shaka70(),
      });
    };
    n.prototype.$VideoPlayerHTML5Shaka71 = function () {
      return this.$VideoPlayerHTML5Shaka11
        ? this.$VideoPlayerHTML5Shaka2.getNumber(
            'live_initial_stream_buffer_size_float',
            3.5
          )
        : this.$VideoPlayerHTML5Shaka2.getNumber(
            'initial_stream_buffer_size_float',
            7.5
          );
    };
    n.prototype.$VideoPlayerHTML5Shaka70 = function () {
      return this.$VideoPlayerHTML5Shaka11
        ? this.$VideoPlayerHTML5Shaka2.getNumber(
            'live_stream_buffer_size_float',
            3
          )
        : this.$VideoPlayerHTML5Shaka2.getNumber(
            'stream_buffer_size_float',
            15
          );
    };
    n.prototype.$VideoPlayerHTML5Shaka72 = function () {
      return this.$VideoPlayerHTML5Shaka45;
    };
    n.prototype.setPreferredVideoQuality = function (a) {
      var b = this.$VideoPlayerHTML5Shaka26.getVideoTracks();
      b.sort(k.compare);
      var c = b.find(
        function (c) {
          return a == this.$VideoPlayerHTML5Shaka77(c, b);
        }.bind(this)
      );
      c &&
        ((this.$VideoPlayerHTML5Shaka25 = a),
        this.$VideoPlayerHTML5Shaka43.setPreferredVideoTrack(c));
    };
    n.prototype.unsetPreferredVideoQuality = function () {
      (this.$VideoPlayerHTML5Shaka25 = null),
        this.$VideoPlayerHTML5Shaka43.unsetPreferredVideoTrack();
    };
    n.prototype.isDrm = function () {
      return this.$VideoPlayerHTML5Shaka16;
    };
    n.prototype.pause = function () {
      this.$VideoPlayerHTML5Shaka1.pause();
    };
    n.prototype.play = function () {
      this.$VideoPlayerHTML5Shaka14 = !0;
      this.$VideoPlayerHTML5Shaka27 &&
        (this.$VideoPlayerHTML5Shaka1.paused ||
          this.$VideoPlayerHTML5Shaka1.ended) &&
        (this.$VideoPlayerHTML5Shaka29 = this.$VideoPlayerHTML5Shaka27
          .getOperationLogger('play')
          .setState('pending_play')
          .start());
      this.$VideoPlayerHTML5Shaka20.setPendingPlayRequest(!0);
      if (this.$VideoPlayerHTML5Shaka4) {
        var a = b('VideoDashPrefetchCache').getPrefetchTaskByID(
          '' + this.$VideoPlayerHTML5Shaka4
        );
        a &&
          b('VideoStreamingTaskQueueProvider')
            .getQueue('video')
            .updatePriority(a, b('VideoPriorityCalculator').getMaxPriority());
      }
      return this.$VideoPlayerHTML5Shaka1.play();
    };
    n.prototype.$VideoPlayerHTML5Shaka74 = function () {
      var a = this.$VideoPlayerHTML5Shaka8;
      if (a) {
        var b = this.$VideoPlayerHTML5Shaka1.currentTime,
          c = 4;
        c = b > a - c;
        b = b > a;
        b
          ? (this.emit('debug/dashPlayerEvent', {
              type: 'streamResumedAt',
              event: this.$VideoPlayerHTML5Shaka8,
            }),
            (this.$VideoPlayerHTML5Shaka8 = null))
          : this.$VideoPlayerHTML5Shaka28 &&
            (this.$VideoPlayerHTML5Shaka10 = c);
      }
      return this.$VideoPlayerHTML5Shaka10;
    };
    n.prototype.$VideoPlayerHTML5Shaka58 = function () {
      (this.$VideoPlayerHTML5Shaka28 = !0),
        this.$VideoPlayerHTML5Shaka74()
          ? this.$VideoPlayerHTML5Shaka75()
          : (this.$VideoPlayerHTML5Shaka20.setResumeAfterBuffering(!0),
            this.emit('bufferingStart')),
        this.$VideoPlayerHTML5Shaka44 &&
          this.$VideoPlayerHTML5Shaka44.bufferingStart(
            this.$VideoPlayerHTML5Shaka1.currentTime,
            Date.now()
          );
    };
    n.prototype.$VideoPlayerHTML5Shaka60 = function (event) {
      event.progress && this.emit('bufferingProgress', event.progress);
    };
    n.prototype.$VideoPlayerHTML5Shaka57 = function () {
      this.emit('seekRangeChanged');
    };
    n.prototype.$VideoPlayerHTML5Shaka66 = function () {
      this.emit('networkInterrupted');
    };
    n.prototype.$VideoPlayerHTML5Shaka67 = function () {
      this.emit('networkResumed');
    };
    n.prototype.$VideoPlayerHTML5Shaka75 = function () {
      this.$VideoPlayerHTML5Shaka2.getBool(
        'fix_is_live_interrupted_backtest',
        !1
      ) ||
        (this.$VideoPlayerHTML5Shaka27 &&
          !this.$VideoPlayerHTML5Shaka30 &&
          (this.$VideoPlayerHTML5Shaka30 = this.$VideoPlayerHTML5Shaka27
            .getOperationLogger('stream_interrupted')
            .start()),
        this.$VideoPlayerHTML5Shaka26.setIsLiveInterrupted(!0)),
        this.emit('streamInterrupted');
    };
    n.prototype.$VideoPlayerHTML5Shaka59 = function () {
      (this.$VideoPlayerHTML5Shaka28 = !1),
        this.$VideoPlayerHTML5Shaka30 &&
          (this.$VideoPlayerHTML5Shaka30.log(),
          (this.$VideoPlayerHTML5Shaka30 = null)),
        this.$VideoPlayerHTML5Shaka26.setIsLiveInterrupted(!1),
        this.$VideoPlayerHTML5Shaka10
          ? this.$VideoPlayerHTML5Shaka78()
          : this.emit('bufferingEnd'),
        this.$VideoPlayerHTML5Shaka44 &&
          this.$VideoPlayerHTML5Shaka44.bufferingEnd(
            this.$VideoPlayerHTML5Shaka1.currentTime,
            Date.now()
          );
    };
    n.prototype.$VideoPlayerHTML5Shaka61 = function (a) {
      __p && __p();
      a = a.detail || {};
      var c = a.status !== undefined ? a.status : null,
        d = a.url || null;
      this.$VideoPlayerHTML5Shaka79();
      var e = this.$VideoPlayerHTML5Shaka2
        .getString('block_play_request_http_status_list', '410')
        .split(',');
      this.$VideoPlayerHTML5Shaka2.getBool(
        'disable_block_play_request_http_status_list',
        !1
      ) && (e = []);
      if (
        this.$VideoPlayerHTML5Shaka11 &&
        e
          .map(function (a) {
            return parseInt(a, 10);
          })
          .indexOf(c) !== -1
      ) {
        this.$VideoPlayerHTML5Shaka14 &&
          (b('dispatchEvent')(this.$VideoPlayerHTML5Shaka1, 'playing'),
          (this.$VideoPlayerHTML5Shaka14 = !1));
        return this.$VideoPlayerHTML5Shaka80();
      }
      this.emit('error', {
        error: ('SHAKA_' + a.type).toUpperCase(),
        message: a.message,
        httpStatus: c,
        url: d,
        stack: a.stack,
      });
    };
    n.prototype.unload = function () {
      __p && __p();
      this.$VideoPlayerHTML5Shaka24 = this.getSelectedVideoQuality();
      this.$VideoPlayerHTML5Shaka23 = this.getAvailableVideoQualities();
      !this.$VideoPlayerHTML5Shaka26
        ? (this.$VideoPlayerHTML5Shaka11 = !1)
        : this.$VideoPlayerHTML5Shaka26.isLive() !== null &&
          (this.$VideoPlayerHTML5Shaka11 =
            this.$VideoPlayerHTML5Shaka26.isLive());
      this.$VideoPlayerHTML5Shaka7 = !0;
      b('clearInterval')(this.$VideoPlayerHTML5Shaka37);
      var a = this.$VideoPlayerHTML5Shaka40;
      a && (a.unsubscribe(), a.removeAllListeners());
      this.$VideoPlayerHTML5Shaka50.release();
      this.$VideoPlayerHTML5Shaka20.unload()['catch'](
        function (a) {
          if (
            this.$VideoPlayerHTML5Shaka2.getBool(
              'ignore_errors_after_unload',
              !0
            )
          )
            return;
          throw a;
        }.bind(this)
      );
    };
    n.prototype.$VideoPlayerHTML5Shaka68 = function () {
      var a = {
        shakaConfig: this.$VideoPlayerHTML5Shaka2,
        performanceLogger: this.$VideoPlayerHTML5Shaka27,
        enableAdaptation: this.getIsAbrEnabled(),
        minPlayQuality: this.$VideoPlayerHTML5Shaka5,
        maxPlayQuality: this.$VideoPlayerHTML5Shaka6,
        width: this.$VideoPlayerHTML5Shaka17,
        height: this.$VideoPlayerHTML5Shaka18,
        resolutionConstraintMaxWidth: this.$VideoPlayerHTML5Shaka48,
        resolutionConstraintMaxHeight: this.$VideoPlayerHTML5Shaka47,
        isSpherical: this.$VideoPlayerHTML5Shaka15,
        initiallyForcedRepresentations: this.$VideoPlayerHTML5Shaka3,
        bandwidthModel: b(
          'VideoPlayerShakaBandwidthEstimator'
        ).getBandwidthModel(this.$VideoPlayerHTML5Shaka11),
        bandwidthDowngradeTarget: this.$VideoPlayerHTML5Shaka11
          ? this.$VideoPlayerHTML5Shaka2.getNumber(
              'live_bandwidth_downgrade_target',
              1
            )
          : this.$VideoPlayerHTML5Shaka2.getNumber(
              'bandwidth_downgrade_target',
              0.9
            ),
        bandwidthUpgradeTarget: this.$VideoPlayerHTML5Shaka11
          ? this.$VideoPlayerHTML5Shaka2.getNumber(
              'live_bandwidth_upgrade_target',
              1
            )
          : this.$VideoPlayerHTML5Shaka2.getNumber(
              'bandwidth_upgrade_target',
              0.9
            ),
        useNewBandwidthBandLogic: this.$VideoPlayerHTML5Shaka2.getBool(
          'use_new_bandwidth_band_logic',
          !0
        ),
        hvqUpgradeAggressiveness: this.$VideoPlayerHTML5Shaka11
          ? this.$VideoPlayerHTML5Shaka2.getNumber(
              'live_hvq_upgrade_aggressiveness',
              1
            )
          : this.$VideoPlayerHTML5Shaka2.getNumber(
              'hvq_upgrade_aggressiveness',
              1
            ),
        hvqInlineUpgradeAggressiveness: this.$VideoPlayerHTML5Shaka11
          ? this.$VideoPlayerHTML5Shaka2.getNumber(
              'live_hvq_inline_upgrade_aggressiveness',
              1
            )
          : this.$VideoPlayerHTML5Shaka2.getNumber(
              'hvq_inline_upgrade_aggressiveness',
              1
            ),
        preHvqUpgradeAggressiveness: this.$VideoPlayerHTML5Shaka11
          ? this.$VideoPlayerHTML5Shaka2.getNumber(
              'live_pre_hvq_upgrade_aggressiveness',
              1
            )
          : this.$VideoPlayerHTML5Shaka2.getNumber(
              'pre_hvq_upgrade_aggressiveness',
              1
            ),
        preHvqInlineUpgradeAggressiveness: this.$VideoPlayerHTML5Shaka11
          ? this.$VideoPlayerHTML5Shaka2.getNumber(
              'live_pre_hvq_inline_upgrade_aggressiveness',
              1
            )
          : this.$VideoPlayerHTML5Shaka2.getNumber(
              'pre_hvq_inline_upgrade_aggressiveness',
              1
            ),
        video: this.$VideoPlayerHTML5Shaka1,
        videoID: this.$VideoPlayerHTML5Shaka4,
        abrLogger: this.$VideoPlayerHTML5Shaka31,
        getSource: this.$VideoPlayerHTML5Shaka21,
        enableReinforcementLearning:
          !this.$VideoPlayerHTML5Shaka12 &&
          (this.$VideoPlayerHTML5Shaka2.getBool(
            'enable_reinforcement_learning',
            !1
          ) ||
            (this.$VideoPlayerHTML5Shaka15 &&
              this.$VideoPlayerHTML5Shaka2.getBool(
                'enable_reinforcement_learning_on_360',
                !1
              ))),
        rlModelId: this.$VideoPlayerHTML5Shaka2.getNumber('rl_model_id', 0),
        rlUseShortFeatures: this.$VideoPlayerHTML5Shaka2.getBool(
          'rl_use_short_features',
          !1
        ),
        useStrictTrackDimensionsExclusionLogic: this.$VideoPlayerHTML5Shaka49,
        videoWatchTimeTracker: this.$VideoPlayerHTML5Shaka44,
      };
      return new (b('CustomAbrManager'))(a);
    };
    n.prototype.$VideoPlayerHTML5Shaka81 = function () {
      __p && __p();
      if (
        !this.$VideoPlayerHTML5Shaka2.getBool('enable_content_protection', !1)
      )
        return null;
      var a = this.$VideoPlayerHTML5Shaka4,
        b = null;
      this.$VideoPlayerHTML5Shaka27 &&
        (b = this.$VideoPlayerHTML5Shaka27
          .getOperationLogger('request')
          .setType('license'));
      var c = function (a) {
          b && b.start();
          var c = window.btoa(
            String.fromCharCode.apply(null, new Uint8Array(a.body))
          );
          a.body = c;
          a.method = 'POST';
          a.headers['Content-Type'] = 'application/text';
        },
        d = function (a) {
          a = String.fromCharCode.apply(null, a);
          a = window.atob(a);
          a = new Uint8Array(
            a.split('').map(function (a) {
              return a.charCodeAt(0);
            })
          );
          if (b) {
            var c = a != null ? 'success' : 'failed';
            b.setResult(c).log();
          }
          return a;
        };
      return function (b, e) {
        this.$VideoPlayerHTML5Shaka16 = !0;
        if (b == 'urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed') {
          e = this.$VideoPlayerHTML5Shaka51
            ? this.$VideoPlayerHTML5Shaka51 + '?video_id=' + a
            : '/video/drm/getlicense?video_id=' + a;
          b = 'com.widevine.alpha';
          return [
            {
              keySystem: b,
              licenseServerUrl: e,
              withCredentials: !0,
              licensePreProcessor: c,
              licensePostProcessor: d,
              videoRobustness: '',
              audioRobustness: '',
            },
          ];
        }
        return null;
      }.bind(this);
    };
    n.prototype.$VideoPlayerHTML5Shaka69 = function () {
      this.$VideoPlayerHTML5Shaka43 || g(0, undefined);
      this.$VideoPlayerHTML5Shaka38 || g(0, undefined);
      var a = new i(
        this.$VideoPlayerHTML5Shaka38,
        this.$VideoPlayerHTML5Shaka2,
        this.$VideoPlayerHTML5Shaka81(),
        m,
        this.$VideoPlayerHTML5Shaka43
      );
      this.$VideoPlayerHTML5Shaka22 = new (b('TaggedTimeRanges'))(function (
        a,
        b
      ) {
        return a.id === b.id && a.reason === b.reason;
      });
      a.setTaggedTimeRanges(this.$VideoPlayerHTML5Shaka22);
      return a;
    };
    n.prototype.$VideoPlayerHTML5Shaka82 = function (a) {
      __p && __p();
      this.$VideoPlayerHTML5Shaka43 = this.$VideoPlayerHTML5Shaka68();
      this.$VideoPlayerHTML5Shaka26 = this.$VideoPlayerHTML5Shaka69();
      this.$VideoPlayerHTML5Shaka74() &&
        ((this.$VideoPlayerHTML5Shaka9 =
          this.$VideoPlayerHTML5Shaka20.getPlaybackRate()),
        (this.$VideoPlayerHTML5Shaka1.playbackRate = 0),
        this.emit('streamInterrupted'));
      this.$VideoPlayerHTML5Shaka20.setPlaybackStartTime(a);
      this.$VideoPlayerHTML5Shaka7 = !1;
      return this.$VideoPlayerHTML5Shaka20
        .load(this.$VideoPlayerHTML5Shaka26)
        .then(
          function () {
            if (
              this.$VideoPlayerHTML5Shaka11 !=
              this.$VideoPlayerHTML5Shaka26.isLive()
            )
              return this.$VideoPlayerHTML5Shaka80();
            this.$VideoPlayerHTML5Shaka25 &&
              this.setPreferredVideoQuality(this.$VideoPlayerHTML5Shaka25);
            this.$VideoPlayerHTML5Shaka24 = null;
            this.$VideoPlayerHTML5Shaka23 = [];
            return undefined;
          }.bind(this)
        );
    };
    n.prototype.$VideoPlayerHTML5Shaka83 = function (a) {
      if (
        this.$VideoPlayerHTML5Shaka7 &&
        this.$VideoPlayerHTML5Shaka2.getBool('ignore_errors_after_unload', !0)
      )
        return;
      throw a;
    };
    n.prototype.reload = function (a) {
      __p && __p();
      if (!this.$VideoPlayerHTML5Shaka7)
        return this.$VideoPlayerHTML5Shaka2.getBool('fix_reload_promise', !1)
          ? b('Promise').resolve()
          : undefined;
      var c = this.$VideoPlayerHTML5Shaka40;
      c && (c.subscribe(), this.addListenersToLiveStreamState(c));
      this.$VideoPlayerHTML5Shaka2.getBool('refresh_vod_manifest', !1)
        ? (c = this.$VideoPlayerHTML5Shaka56()
            .then(
              function () {
                return this.$VideoPlayerHTML5Shaka82(a);
              }.bind(this)
            )
            ['catch'](
              function (a) {
                return this.$VideoPlayerHTML5Shaka83(a);
              }.bind(this)
            ))
        : (c = this.$VideoPlayerHTML5Shaka82(a)['catch'](
            function (a) {
              return this.$VideoPlayerHTML5Shaka83();
            }.bind(this)
          ));
      return this.$VideoPlayerHTML5Shaka2.getBool('fix_reload_promise', !1)
        ? c
        : undefined;
    };
    n.prototype.setPlaybackRate = function (a) {
      (this.$VideoPlayerHTML5Shaka9 = a),
        this.$VideoPlayerHTML5Shaka74() ||
          this.$VideoPlayerHTML5Shaka20.setPlaybackRate(a);
    };
    n.prototype.getPlaybackRate = function () {
      return this.$VideoPlayerHTML5Shaka20.getPlaybackRate();
    };
    n.prototype.setSmartBufferAdjustmentEnabled = function (a) {
      this.$VideoPlayerHTML5Shaka20.configure({
        smartBufferAdjustmentEnabled: a,
      });
    };
    n.prototype.setVideoStreamOffset = function (a) {
      this.$VideoPlayerHTML5Shaka20.setVideoStreamOffset(a);
    };
    n.prototype.$VideoPlayerHTML5Shaka80 = function () {
      b('dispatchEvent')(this.$VideoPlayerHTML5Shaka1, 'seeked');
      b('dispatchEvent')(this.$VideoPlayerHTML5Shaka1, 'playing');
      var a = this.$VideoPlayerHTML5Shaka2.getBool(
        'abort_loading_decisioning_logic',
        !1
      );
      a
        ? (b('dispatchCustomEvent')(
            this.$VideoPlayerHTML5Shaka1,
            'pause',
            b('dangerouslyOverrideMediaElementEndedProperty')()
          ),
          b('dispatchEvent')(this.$VideoPlayerHTML5Shaka1, 'ended'))
        : this.$VideoPlayerHTML5Shaka2.getBool(
            'end_live_playback_with_pause',
            !0
          )
        ? b('dispatchEvent')(this.$VideoPlayerHTML5Shaka1, 'pause')
        : b('dispatchEvent')(this.$VideoPlayerHTML5Shaka1, 'ended');
      this.emit('streamResumed');
      this.unload();
    };
    n.prototype.getLongestInitResponseTime = function () {
      return this.$VideoPlayerHTML5Shaka26.getLongestInitResponseTime();
    };
    n.prototype.getLocalEstimator = function () {
      return this.$VideoPlayerHTML5Shaka26.getLocalEstimator();
    };
    n.prototype.setDimensions = function (a, b) {
      (this.$VideoPlayerHTML5Shaka17 = a),
        (this.$VideoPlayerHTML5Shaka18 = b),
        this.$VideoPlayerHTML5Shaka43.setDimensions(a, b);
    };
    n.isSupported = function (a) {
      return j.isBrowserSupported();
    };
    n.prototype.$VideoPlayerHTML5Shaka63 = function () {
      this.emit('tracksChanged');
    };
    n.prototype.$VideoPlayerHTML5Shaka62 = function (event) {
      event.contentType === 'video' &&
        (this.$VideoPlayerHTML5Shaka27 &&
          this.$VideoPlayerHTML5Shaka27.setRepresentationID(event.id),
        this.$VideoPlayerHTML5Shaka27 &&
          this.$VideoPlayerHTML5Shaka27.setDynamicBitrate(event.bandwidth),
        this.$VideoPlayerHTML5Shaka31.setRepresentationID(event.id),
        this.emit('adaptation', { reason: event.reason }));
    };
    n.prototype.$VideoPlayerHTML5Shaka73 = function (a) {
      this.$VideoPlayerHTML5Shaka2.getBool(
        'fix_is_live_interrupted_backtest',
        !1
      ) &&
        (this.$VideoPlayerHTML5Shaka27 &&
          !this.$VideoPlayerHTML5Shaka30 &&
          (this.$VideoPlayerHTML5Shaka30 = this.$VideoPlayerHTML5Shaka27
            .getOperationLogger('stream_interrupted')
            .start()),
        this.$VideoPlayerHTML5Shaka26.setIsLiveInterrupted(!0)),
        (this.$VideoPlayerHTML5Shaka8 = a);
    };
    n.prototype.$VideoPlayerHTML5Shaka65 = function () {
      this.$VideoPlayerHTML5Shaka74() && this.$VideoPlayerHTML5Shaka78();
    };
    n.prototype.$VideoPlayerHTML5Shaka78 = function () {
      (this.$VideoPlayerHTML5Shaka8 = null),
        (this.$VideoPlayerHTML5Shaka10 = !1),
        this.$VideoPlayerHTML5Shaka26.forceResyncVideoBuffer(),
        this.$VideoPlayerHTML5Shaka20.setPlaybackRate(
          this.$VideoPlayerHTML5Shaka9
        ),
        this.emit('streamResumed');
    };
    n.prototype.$VideoPlayerHTML5Shaka64 = function () {
      var a = this.$VideoPlayerHTML5Shaka27
          ? this.$VideoPlayerHTML5Shaka27
              .getOperationLogger('manifest_wrapped')
              .setResource(this.$VideoPlayerHTML5Shaka46)
              .start()
          : null,
        b = !this.$VideoPlayerHTML5Shaka1.paused;
      this.unload();
      this.reload()
        .then(
          function () {
            this.$VideoPlayerHTML5Shaka10 && this.$VideoPlayerHTML5Shaka78(),
              b && this.play(),
              a && a.log();
          }.bind(this)
        )
        ['catch'](function (b) {
          a && a.setError(b).log(), !1;
        });
    };
    n.prototype.$VideoPlayerHTML5Shaka53 = function () {
      (this.$VideoPlayerHTML5Shaka14 = !1),
        this.$VideoPlayerHTML5Shaka34 && (this.$VideoPlayerHTML5Shaka34 = !1),
        this.$VideoPlayerHTML5Shaka20.setPendingPlayRequest(!1),
        this.$VideoPlayerHTML5Shaka29 &&
          (this.$VideoPlayerHTML5Shaka29.log(),
          (this.$VideoPlayerHTML5Shaka29 = null)),
        this.$VideoPlayerHTML5Shaka44 &&
          this.$VideoPlayerHTML5Shaka44.playing(
            this.$VideoPlayerHTML5Shaka1.currentTime
          );
    };
    n.prototype.$VideoPlayerHTML5Shaka55 = function () {
      this.$VideoPlayerHTML5Shaka14 &&
        ((this.$VideoPlayerHTML5Shaka14 = !1),
        this.$VideoPlayerHTML5Shaka20.setPendingPlayRequest(!1)),
        this.$VideoPlayerHTML5Shaka29 &&
          (this.$VideoPlayerHTML5Shaka29.setResult('aborted').log(),
          (this.$VideoPlayerHTML5Shaka29 = null)),
        this.$VideoPlayerHTML5Shaka44 &&
          this.$VideoPlayerHTML5Shaka44.pause(
            this.$VideoPlayerHTML5Shaka1.currentTime
          );
    };
    n.prototype.$VideoPlayerHTML5Shaka84 = function () {
      if (this.$VideoPlayerHTML5Shaka12) return b('Promise').resolve();
      return this.$VideoPlayerHTML5Shaka35 + 1e3 * 60 * 60 < Date.now()
        ? b('VideoPlayerMetaData')
            .genVideoData(this.$VideoPlayerHTML5Shaka4)
            .then(
              function (a) {
                return this.$VideoPlayerHTML5Shaka85(
                  this.$VideoPlayerHTML5Shaka19
                    ? a.getHighlightsManifest()
                    : a.getDashManifest()
                );
              }.bind(this)
            )
        : b('Promise').resolve();
    };
    n.prototype.$VideoPlayerHTML5Shaka85 = function (a) {
      if (!this.$VideoPlayerHTML5Shaka26) return;
      this.$VideoPlayerHTML5Shaka38 = l(a);
      this.$VideoPlayerHTML5Shaka7 ||
        ((this.$VideoPlayerHTML5Shaka35 = Date.now()),
        this.$VideoPlayerHTML5Shaka26.updateManifest(
          this.$VideoPlayerHTML5Shaka38
        ));
    };
    n.prototype.$VideoPlayerHTML5Shaka56 = function () {
      this.$VideoPlayerHTML5Shaka79();
      this.$VideoPlayerHTML5Shaka37 = b('setInterval')(
        function () {
          this.$VideoPlayerHTML5Shaka84();
        }.bind(this),
        1e3 * 60
      );
      return this.$VideoPlayerHTML5Shaka84()['catch'](function () {
        return b('Promise').resolve();
      });
    };
    n.prototype.refreshDashManifest = function () {
      this.unload();
      var a = b('VideoPlayerMetaData').genVideoData(
        this.$VideoPlayerHTML5Shaka4
      );
      return a.then(
        function (a) {
          this.$VideoPlayerHTML5Shaka85(a.getDashManifest()),
            (this.$VideoPlayerHTML5Shaka19 = !1);
        }.bind(this)
      );
    };
    n.prototype.refreshLiveVODHighlightsManifest = function () {
      this.unload();
      var a = b('VideoPlayerMetaData').genVideoData(
        this.$VideoPlayerHTML5Shaka4
      );
      return a.then(
        function (a) {
          this.$VideoPlayerHTML5Shaka85(a.getHighlightsManifest()),
            (this.$VideoPlayerHTML5Shaka19 = !0);
        }.bind(this)
      );
    };
    n.prototype.$VideoPlayerHTML5Shaka79 = function () {
      b('clearInterval')(this.$VideoPlayerHTML5Shaka37);
    };
    n.prototype.isPlayingLiveVODHighlights = function () {
      return this.$VideoPlayerHTML5Shaka19;
    };
    n.prototype.$VideoPlayerHTML5Shaka86 = function (a) {
      var b = a[0];
      if (b)
        if (b.startTime + 0.5 < b.endTime) b.startTime += 0.5;
        else {
          a.splice(0, 1);
          return this.$VideoPlayerHTML5Shaka86(a);
        }
      return a;
    };
    n.prototype.getSeekableRanges = function () {
      var a = this.$VideoPlayerHTML5Shaka20.getVideoSourceStreamLimits();
      if (a && a.seekRangeGaps) {
        a = b('getVideoPlayerShakaSeekableRanges')(a);
        return new (b('TimeRanges'))(this.$VideoPlayerHTML5Shaka86(a));
      }
      return null;
    };
    n.prototype.setEnableLiveheadCatchup = function (a) {
      this.$VideoPlayerHTML5Shaka20.setEnableLiveheadCatchup(a);
    };
    n.prototype.isLiveheadCatchupEnabled = function () {
      return this.$VideoPlayerHTML5Shaka20.isLiveheadCatchupEnabled();
    };
    n.prototype.$VideoPlayerHTML5Shaka87 = function () {
      return this.$VideoPlayerHTML5Shaka26
        ? this.$VideoPlayerHTML5Shaka26.getManifest()
        : null;
    };
    n.prototype.isFBWasLive = function () {
      var a = this.$VideoPlayerHTML5Shaka87();
      return !!(a && a.FBWasLive);
    };
    n.prototype.isFBIsLiveTemplated = function () {
      var a = this.$VideoPlayerHTML5Shaka87();
      return !!(a && a.FBIsLiveTemplated);
    };
    n.prototype.isFBMS = function () {
      var a = this.$VideoPlayerHTML5Shaka87();
      return !!(a && a.FBMS);
    };
    n.prototype.getPlayerVersion = function () {
      return b('VideoPlayerVersions').PLEASANTVILLE;
    };
    e.exports = n;
  },
  null
);
