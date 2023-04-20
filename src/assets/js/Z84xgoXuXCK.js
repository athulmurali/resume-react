if (self.CavalryLogger) {
  CavalryLogger.start_js(['E2J1m']);
}

__d(
  'FetchStreamConfig',
  [],
  function (a, b, c, d, e, f) {
    e.exports = { delim: '/*<!-- fetch-stream -->*/' };
  },
  null
);
__d(
  'GenderConst',
  [],
  function (a, b, c, d, e, f) {
    e.exports = {
      NOT_A_PERSON: 0,
      FEMALE_SINGULAR: 1,
      MALE_SINGULAR: 2,
      FEMALE_SINGULAR_GUESS: 3,
      MALE_SINGULAR_GUESS: 4,
      MIXED_SINGULAR: 5,
      MIXED_PLURAL: 5,
      NEUTER_SINGULAR: 6,
      UNKNOWN_SINGULAR: 7,
      FEMALE_PLURAL: 8,
      MALE_PLURAL: 9,
      NEUTER_PLURAL: 10,
      UNKNOWN_PLURAL: 11,
      UNKNOWN: 0,
    };
  },
  null
);
__d(
  'IntlVariations',
  [],
  function (a, b, c, d, e, f) {
    e.exports = {
      BITMASK_NUMBER: 28,
      BITMASK_GENDER: 3,
      NUMBER_ZERO: 16,
      NUMBER_ONE: 4,
      NUMBER_TWO: 8,
      NUMBER_FEW: 20,
      NUMBER_MANY: 12,
      NUMBER_OTHER: 24,
      GENDER_MALE: 1,
      GENDER_FEMALE: 2,
      GENDER_UNKNOWN: 3,
    };
  },
  null
);
__d(
  'VideoPlayerFormatsMap',
  [],
  function (a, b, c, d, e, f) {
    e.exports = {
      live_map: 'inline',
      live_map_sidebar: 'inline',
      live_map_listview: 'inline',
      live_map_tooltip: 'inline',
      live_map_tooltip_from_listview: 'inline',
      live_map_tooltip_from_map: 'inline',
      video_home_inline: 'inline',
      inline: 'inline',
      chained: 'inline',
      page_live_video_module: 'inline',
      chained_suggestion: 'inline',
      embedded_video: 'inline',
      embedded_video_preview: 'inline',
      embedded_video_from_ufi: 'inline',
      ufi_comment_attachment: 'inline',
      media_collage: 'inline',
      channel: 'channel',
      permalink: 'permalink',
      snowlift: 'snowlift',
      tv: 'tv',
      watch_scroll: 'watch_scroll',
      continue_watching_recommendation: 'inline',
      tahoe: 'tahoe',
      search_live_video_module: 'inline',
      videohub_live: 'inline',
      camera_post: 'fb_stories',
      pages_cover: 'inline',
      video_page_spotlight_unit: 'inline',
      pages_cover_hover: 'inline',
      profile_overview: 'inline',
      profile_cover: 'inline',
      memory_leak_test: 'inline',
      games_video_home_streamer_hub: 'inline',
      games_video_live_recommendation: 'inline',
      games_video_search_unit: 'inline',
      games_video_streamer_unit: 'inline',
      trivia_game_admin_dashboard: 'misc',
      games_streamer_dashboard: 'inline',
      ads_preview: 'inline',
      ads: null,
      animated_image_share: null,
      asset: null,
      broadcast_request_attachment: null,
      embedded: null,
      embedded_page_plugin: null,
      gameroom_live_video_hero_banner: null,
      gameroom_live_video_tab: null,
      gameroom_live_video_thumbnail: null,
      games_video_home: null,
      games_video_home_hero: null,
      games_video_single_game: null,
      games_video_social_plugin: null,
      games_video_hub: null,
      games_video_hub_redirect_notification: null,
      games_video_hub_redirect_unknown: null,
      group_live_video_module: null,
      html5: null,
      insights: null,
      intern_example: null,
      issues_module: null,
      live_beeper: null,
      live_control_panel: null,
      live_map_tooltip_from_webgl: null,
      live_video_broadcast: null,
      live_video_preview: null,
      living_room: null,
      living_room_recap_fullscreen: null,
      living_room_recap_inline: null,
      lookback: null,
      messaging: null,
      misc: null,
      mobile: null,
      not_specified_please_fix: null,
      offers_detail: null,
      pages_finch_main_video: null,
      pages_finch_thumbnail_video: null,
      pages_finch_trailer: null,
      pages_video_set: null,
      pages_timeline_pages_cover: null,
      pages_home_hero: null,
      video_page_video_list: null,
      profile_video: null,
      profile_video_hovercard: null,
      profile_video_thumb: null,
      report_flow: null,
      review: null,
      serp_videos_tab: null,
      slideshow: null,
      srt_review: null,
      topic_channel_living_room: null,
      topic_gaming: null,
      trailer_og_attachment: null,
      trailer_timeline_collections: null,
      trailer_timeline_unit: null,
      user_video_tab: null,
      video_copyright_preview: null,
      discover: null,
      watchlist: null,
      video_inline_chaining: null,
      videohub_featured: null,
      videohub_playlist: null,
      live_autoplay_watch_and_scroll: null,
    };
  },
  null
);
__d(
  'VideoQualityClassInternal',
  [],
  function (a, b, c, d, e, f) {
    e.exports = { orderedValues: ['sd', 'hd', 'uhd'] };
  },
  null
);
__d(
  'VideoViewabilityKeyEvents',
  [],
  function (a, b, c, d, e, f) {
    e.exports = {
      Events: [
        'entered_fs',
        'exited_fs',
        'finished_playing',
        'paused',
        'player_format_changed',
        'started_playing',
        'unpaused',
      ],
    };
  },
  null
);
__d(
  'RTISubscriptionData',
  ['ChannelConstants', 'areEqual'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = b('ChannelConstants').SUBSCRIPTION_STATE;
    function a(a, b, c, d, e, f, h) {
      (this.$1 = a),
        (this.$2 = b),
        (this.$7 = !0),
        (this.$8 = !1),
        (this.$9 = g.SUBSCRIBE),
        (this.$10 = null),
        (this.$11 = Date.now()),
        (this.$3 = d),
        (this.$4 = e ? e : null),
        (this.$5 = f ? f : null),
        (this.$6 = h ? h : null),
        (this.$12 = c);
    }
    a.prototype.matchesContext = function (a) {
      return b('areEqual')(this.$3, a);
    };
    a.prototype.getCreatedTime = function () {
      return this.$11;
    };
    a.prototype.getTopic = function () {
      return this.$1;
    };
    a.prototype.getViewId = function () {
      return this.$12;
    };
    a.prototype.getSubscribeCallback = function () {
      return this.$4;
    };
    a.prototype.setSubscribeCallback = function (a) {
      this.$4 = a;
    };
    a.prototype.getUnsubscribeCallback = function () {
      return this.$6;
    };
    a.prototype.setUnsubscribeCallback = function (a) {
      this.$6 = a;
    };
    a.prototype.getUnsubscribeHook = function () {
      return this.$5;
    };
    a.prototype.setUnsubscribeHook = function (a) {
      this.$5 = a;
    };
    a.prototype.getMessageListener = function () {
      return this.$2;
    };
    a.prototype.setMessageListener = function (a) {
      this.$2 = a;
    };
    a.prototype.getArbiterToken = function () {
      return this.$10;
    };
    a.prototype.setArbiterToken = function (a) {
      this.$10 = a;
    };
    a.prototype.isAlive = function () {
      return this.$9 != g.UNSUBSCRIBE;
    };
    a.prototype.isMutatingContext = function () {
      return this.$9 == g.MUTATE_CONTEXT;
    };
    a.prototype.isDirty = function () {
      return this.$7;
    };
    a.prototype.setDirty = function (a) {
      this.$7 = a;
    };
    a.prototype.getState = function () {
      return this.$9;
    };
    a.prototype.setState = function (a) {
      this.$9 = a;
    };
    a.prototype.getContext = function () {
      return this.$3;
    };
    a.prototype.isSent = function () {
      return this.$8;
    };
    a.prototype.setSent = function (a) {
      this.$8 = a;
    };
    a.prototype.prepareMutateContext = function (a) {
      this.setState(g.MUTATE_CONTEXT),
        this.setDirty(!0),
        this.setSent(!1),
        (this.$3 = a);
    };
    a.prototype.prepareUnsubscribe = function () {
      this.setState(g.UNSUBSCRIBE),
        this.setDirty(!0),
        this.setSent(!1),
        (this.$2 = null);
    };
    e.exports = a;
  },
  null
);
__d(
  'CurrentLocale',
  ['LocaleInitialData'],
  function (a, b, c, d, e, f) {
    a = {};
    a.get = function () {
      return b('LocaleInitialData').locale;
    };
    e.exports = a;
  },
  null
);
__d(
  'RTISubscriptionStore',
  [
    'Arbiter',
    'BanzaiODS',
    'ChannelConstants',
    'CurrentLocale',
    'ErrorUtils',
    'RTISubscriptionData',
    'RTISubscriptionManagerConfig',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = b('ChannelConstants').SUBSCRIPTION_STATE;
    function a() {
      (this.$1 = {}), (this.$2 = 1);
    }
    a.prototype.subscribe = function (a, c, d, e, f, h) {
      __p && __p();
      d || (d = {});
      Object.assign(d, this.$3());
      var i = this.$4(a, d);
      if (i) {
        var j = i.getState() == g.UNSUBSCRIBE && i.isDirty() && !i.isSent();
        i.isAlive()
          ? b('BanzaiODS').bumpEntityKey(
              'RTISubscriptionStore',
              'duplicate_subscription_alive'
            )
          : j
          ? b('BanzaiODS').bumpEntityKey(
              'RTISubscriptionStore',
              'duplicate_subscription_unflushed_unsubscribe'
            )
          : b('BanzaiODS').bumpEntityKey(
              'RTISubscriptionStore',
              'duplicate_subscription_unknown'
            );
        if (i.isAlive() || j) {
          i.setMessageListener(c);
          i.setSubscribeCallback(e);
          i.setUnsubscribeHook(f);
          i.setUnsubscribeCallback(h);
          if (j) {
            i.setDirty(!1);
            i.setSent(!0);
            i.setState(g.SUBSCRIBE);
            j = b('ChannelConstants').getRTISkywalkerArbiterType(
              i.getTopic(),
              i.getViewId()
            );
            i.setArbiterToken(this.$5(j, i.getTopic(), i));
          }
          return i;
        }
      }
      j = this.$2;
      this.$2 += 1;
      i = new (b('RTISubscriptionData'))(a, c, j, d, e, f, h);
      c = b('ChannelConstants').getRTISkywalkerArbiterType(a, j);
      i.setArbiterToken(this.$5(c, a, i));
      a in this.$1 || (this.$1[a] = new Set());
      this.$1[a].add(i);
      return i;
    };
    a.prototype.unsubscribe = function (a) {
      if (!this.isSubscribed(a)) return;
      a.prepareUnsubscribe();
      a.getArbiterToken() &&
        (b('Arbiter').unsubscribe(a.getArbiterToken()),
        a.setArbiterToken(null));
    };
    a.prototype.mutateContext = function (a, b) {
      if (!this.isSubscribed(a)) return;
      a.prepareMutateContext(b);
    };
    a.prototype.isSubscribed = function (a) {
      return (
        a.getTopic() in this.$1 && this.$1[a.getTopic()].has(a) && a.isAlive()
      );
    };
    a.prototype.clearSubscriptions = function () {
      this.$1 = {};
    };
    a.prototype.deleteSubscriptions = function (a) {
      var b = [];
      this.forEachSubscription(
        function (c) {
          a.call(this, c) && b.push(c);
        }.bind(this)
      );
      b.forEach(
        function (a) {
          if (a.getTopic() in this.$1) {
            var b = this.$1[a.getTopic()];
            b['delete'](a);
          }
        }.bind(this)
      );
    };
    a.prototype.forEachSubscription = function (a) {
      __p && __p();
      for (var b in this.$1) {
        var c = this.$1[b];
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
          if (a.call(this, f)) return;
        }
      }
    };
    a.prototype.$4 = function (a, b) {
      __p && __p();
      a = this.$1[a];
      if (!a) return null;
      for (
        var a = a,
          c = Array.isArray(a),
          d = 0,
          a = c
            ? a
            : a[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var e;
        if (c) {
          if (d >= a.length) break;
          e = a[d++];
        } else {
          d = a.next();
          if (d.done) break;
          e = d.value;
        }
        e = e;
        if (e.matchesContext(b)) return e;
      }
      return null;
    };
    a.prototype.$5 = function (a, c, d) {
      return b('Arbiter').subscribe(
        a,
        function (a, event) {
          b('BanzaiODS').bumpEntityKey(
            'RTISubscriptionStore',
            'skywalker_subscription_delivery'
          ),
            event.obj.forEach(
              function (a) {
                a = { topic: c, payload: a };
                var e = d.getMessageListener();
                e && b('ErrorUtils').applyWithGuard(e, this, [a]);
              }.bind(this)
            );
        }.bind(this)
      );
    };
    a.prototype.$3 = function () {
      var a = {};
      a.locale = b('CurrentLocale').get();
      if (b('RTISubscriptionManagerConfig').assimilator) {
        var c = b('RTISubscriptionManagerConfig').assimilator;
        c.tierType && (a.tierType = c.tierType);
        c.sandboxIP &&
          c.sandboxPort &&
          c.sandboxHostname &&
          ((a.sandboxIP = c.sandboxIP),
          (a.sandboxPort = c.sandboxPort),
          (a.sandboxHostname = c.sandboxHostname));
      }
      return a;
    };
    e.exports = a;
  },
  null
);
__d(
  'StreamStateMachineConstants',
  [],
  function (a, b, c, d, e, f) {
    a = {
      states: {
        GQLS_STATE_CREATED: 'created',
        GQLS_STATE_ACTIVE: 'active',
        GQLS_STATE_PAUSED: 'paused',
        GQLS_STATE_TERMINATED: 'terminated',
      },
      events: {
        GQLS_STATE_TRANSIT_ON_CREATE: 'onCreated',
        GQLS_STATE_TRANSIT_ON_ACTIVE: 'onActive',
        GQLS_STATE_TRANSIT_ON_PAUSE: 'onPause',
        GQLS_STATE_TRANSIT_ON_RESUME: 'onResume',
        GQLS_STATE_TRANSIT_ON_TERMINATE: 'onTerminate',
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'StreamStateMachine',
  ['StreamStateMachineConstants'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = b('StreamStateMachineConstants').events,
      h = b('StreamStateMachineConstants').states,
      i = babelHelpers['extends']({}, g, {
        GQLS_STATE_TRANSIT_ON_REFRESH: 'onRefresh',
      });
    function a(a, b) {
      a === void 0 && (a = !1),
        b === void 0 && (b = 1e4),
        (this.$1 = b),
        (this.$2 = null),
        (this.$3 = null),
        (this.$5 = a),
        (this.$4 = null);
    }
    a.prototype.start = function () {
      this.$6(i.GQLS_STATE_TRANSIT_ON_CREATE),
        this.$5 || this.$6(i.GQLS_STATE_TRANSIT_ON_ACTIVE);
    };
    a.prototype.ping = function () {
      switch (this.$4) {
        case h.GQLS_STATE_ACTIVE:
          this.$6(i.GQLS_STATE_TRANSIT_ON_REFRESH);
          break;
        case h.GQLS_STATE_PAUSED:
          this.$6(i.GQLS_STATE_TRANSIT_ON_RESUME);
          break;
        case h.GQLS_STATE_CREATED:
          this.$6(i.GQLS_STATE_TRANSIT_ON_ACTIVE);
          break;
        case h.GQLS_STATE_TERMINATED:
          break;
      }
    };
    a.prototype.kill = function () {
      this.$6(i.GQLS_STATE_TRANSIT_ON_TERMINATE);
    };
    a.prototype.setLifecycleHandler = function (a) {
      this.$3 = a;
    };
    a.prototype.getState = function () {
      return this.$4;
    };
    a.prototype.$6 = function (event) {
      __p && __p();
      switch (event) {
        case i.GQLS_STATE_TRANSIT_ON_CREATE:
          this.$7();
          break;
        case i.GQLS_STATE_TRANSIT_ON_ACTIVE:
          this.$8();
          break;
        case i.GQLS_STATE_TRANSIT_ON_REFRESH:
          this.$9();
          break;
        case i.GQLS_STATE_TRANSIT_ON_PAUSE:
          this.$10();
          break;
        case i.GQLS_STATE_TRANSIT_ON_RESUME:
          this.$11();
          break;
        case i.GQLS_STATE_TRANSIT_ON_TERMINATE:
          this.$12();
          break;
      }
    };
    a.prototype.$7 = function () {
      (this.$4 = h.GQLS_STATE_CREATED),
        this.$3 && this.$3(g.GQLS_STATE_TRANSIT_ON_CREATE);
    };
    a.prototype.$8 = function () {
      (this.$4 = h.GQLS_STATE_ACTIVE),
        this.$3 && this.$3(g.GQLS_STATE_TRANSIT_ON_ACTIVE),
        this.$13();
    };
    a.prototype.$9 = function () {
      clearTimeout(this.$2), this.$13();
    };
    a.prototype.$10 = function () {
      (this.$4 = h.GQLS_STATE_PAUSED),
        this.$3 && this.$3(g.GQLS_STATE_TRANSIT_ON_PAUSE);
    };
    a.prototype.$11 = function () {
      (this.$4 = h.GQLS_STATE_ACTIVE),
        this.$3 && this.$3(g.GQLS_STATE_TRANSIT_ON_RESUME),
        this.$13();
    };
    a.prototype.$12 = function () {
      clearTimeout(this.$2), (this.$4 = h.GQLS_STATE_TERMINATED);
    };
    a.prototype.$13 = function () {
      this.$5 &&
        (this.$2 = setTimeout(
          function () {
            this.$6(g.GQLS_STATE_TRANSIT_ON_PAUSE);
          }.bind(this),
          this.$1
        ));
    };
    e.exports = a;
  },
  null
);
__d(
  'RTISubscriptionToken',
  ['StreamStateMachine', 'gkx'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a, c, d, e, f) {
      __p && __p();
      this.$1 = a;
      this.$2 = c;
      this.$4 = d;
      this.$5 = e;
      this.$3 = f;
      this.$6 = null;
      if (
        b('gkx')(
          'AT5R2c8RV30ACfB-g2mU6TcK4P-_zOijNJNqRwBajAhWM8GWb-fwUePWej8KWj9_IXc7p84bphBbXj-kQGC6BJIz'
        )
      ) {
        a = this.getContext();
        c = this.hasHeartbeatOption(a);
        this.$7 = new (b('StreamStateMachine'))(c);
        this.$7.start();
      }
    }
    a.prototype.setFriendFanoutToken = function (a) {
      this.$6 = a;
    };
    a.prototype.getFriendFanoutToken = function () {
      return this.$6;
    };
    a.prototype.getSubscriptionData = function () {
      return this.$1;
    };
    a.prototype.isSubscribed = function () {
      return this.$3(this.$1);
    };
    a.prototype.getContext = function () {
      return this.$1.getContext();
    };
    a.prototype.mutateContext = function (a) {
      this.$4(this.$1, a);
    };
    a.prototype.unsubscribe = function () {
      var a = this.$1.getUnsubscribeHook();
      a && a();
      this.$2(this.$1);
      this.$6 && this.$6.unsubscribe();
      b('gkx')(
        'AT5R2c8RV30ACfB-g2mU6TcK4P-_zOijNJNqRwBajAhWM8GWb-fwUePWej8KWj9_IXc7p84bphBbXj-kQGC6BJIz'
      ) &&
        this.$7 &&
        this.$7.kill();
    };
    a.prototype.fastUnsubscribe = function () {
      this.unsubscribe(), this.$5();
    };
    a.prototype.hasHeartbeatOption = function (a) {
      __p && __p();
      if (a && a.transformContext) {
        a = JSON.parse(a.transformContext);
        if (a.serializedQueryParameters) {
          a = JSON.parse(a.serializedQueryParameters);
          if (a && a['%options'] && a['%options'].heartbeat) return !0;
        }
      }
      return !1;
    };
    a.prototype.ping = function () {
      b('gkx')(
        'AT5R2c8RV30ACfB-g2mU6TcK4P-_zOijNJNqRwBajAhWM8GWb-fwUePWej8KWj9_IXc7p84bphBbXj-kQGC6BJIz'
      ) &&
        this.$7 &&
        this.$7.ping();
    };
    a.prototype.handleLifecycles = function (a) {
      b('gkx')(
        'AT5R2c8RV30ACfB-g2mU6TcK4P-_zOijNJNqRwBajAhWM8GWb-fwUePWej8KWj9_IXc7p84bphBbXj-kQGC6BJIz'
      ) &&
        this.$7 &&
        this.$7.setLifecycleHandler(a);
    };
    e.exports = a;
  },
  null
);
__d(
  'SkywalkerOracle',
  ['gkx'],
  function (a, b, c, d, e, f) {
    f.OracleGK = b('gkx')(
      'AT59V6_3CXkJmeopb17WL3lllXAZhhPsl_xZYGU_Fzoz-3upzO1pVrZU-Ep-OtgX-_2D2sag28jt7-3H6BkLpraJ'
    );
  },
  null
);
__d(
  'guid',
  [],
  function (a, b, c, d, e, f) {
    function a() {
      return 'f' + (Math.random() * (1 << 30)).toString(16).replace('.', '');
    }
    e.exports = a;
  },
  null
);
__d(
  'ArbiterMixin',
  ['Arbiter', 'guid'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = 'arbiter$' + b('guid')(),
      h = Object.prototype.hasOwnProperty;
    a = {
      _getArbiterInstance: function () {
        return h.call(this, g) ? this[g] : (this[g] = new (b('Arbiter'))());
      },
      inform: function (a, b, c) {
        return this._getArbiterInstance().inform(a, b, c);
      },
      subscribe: function (a, b, c) {
        return this._getArbiterInstance().subscribe(a, b, c);
      },
      subscribeOnce: function (a, b, c) {
        return this._getArbiterInstance().subscribeOnce(a, b, c);
      },
      unsubscribe: function (a) {
        this._getArbiterInstance().unsubscribe(a);
      },
      unsubscribeCurrentSubscription: function () {
        this._getArbiterInstance().unsubscribeCurrentSubscription();
      },
      releaseCurrentPersistentEvent: function () {
        this._getArbiterInstance().releaseCurrentPersistentEvent();
      },
      registerCallback: function (a, b) {
        return this._getArbiterInstance().registerCallback(a, b);
      },
      query: function (a) {
        return this._getArbiterInstance().query(a);
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'UserActivity',
  ['Arbiter', 'Event'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = 5e3,
      h = 500,
      i = -5,
      j = Date.now(),
      k = j,
      l = !1,
      m = Date.now(),
      n = document.hasFocus ? document.hasFocus() : !0,
      o = 0,
      p = Date.now(),
      q = -1,
      r = -1,
      s = {
        EVENT_INTERVAL_MS: h,
        subscribeOnce: function (a) {
          var b = s.subscribe(function (c, d) {
            s.unsubscribe(b), a(d);
          });
          return b;
        },
        subscribe: function (a) {
          return b('Arbiter').subscribe('useractivity/activity', a);
        },
        unsubscribe: function (a) {
          a.unsubscribe();
        },
        isActive: function (a) {
          return new Date() - j < (a || g);
        },
        isOnTab: function () {
          return n;
        },
        hasBeenInactive: function () {
          return l;
        },
        resetActiveStatus: function () {
          (n = !0), (l = !1);
        },
        getLastInActiveEnds: function () {
          return m;
        },
        getLastActive: function () {
          return j;
        },
        setIdleTime: function (a) {
          o = a;
        },
        getLastLeaveTime: function () {
          return p;
        },
        getLastInformTime: function () {
          return k;
        },
        reset: function () {
          (j = Date.now()),
            (k = j),
            (l = !1),
            (m = Date.now()),
            (n = document.hasFocus ? document.hasFocus() : !0),
            (o = 0),
            (p = Date.now()),
            (q = -1),
            (r = -1);
        },
      };
    function t(event) {
      v(event, h);
    }
    function u(event) {
      v(event, 0);
    }
    function v(event, c) {
      __p && __p();
      c === void 0 && (c = 0);
      var d = a.MouseEvent;
      if (d && event instanceof d) {
        if (
          /^mouse(enter|leave|move|out|over)$/.test(event.type) &&
          event.pageX == q &&
          event.pageY == r
        )
          return;
        q = event.pageX;
        r = event.pageY;
      }
      j = Date.now();
      d = j - k;
      d > c
        ? ((k = j),
          n || (p = j),
          d >= (o || g) && ((l = !0), (m = j)),
          b('Arbiter').inform('useractivity/activity', {
            event: event,
            idleness: d,
            last_inform: k,
          }))
        : d < i && (k = j);
    }
    function c(event) {
      (n = !0), (m = Date.now()), u(event);
    }
    function d(event) {
      (n = !1), (l = !0), (p = Date.now());
    }
    b('Event').listen(window, 'scroll', t);
    b('Event').listen(window, 'focus', c);
    b('Event').listen(window, 'blur', d);
    b('Event').listen(
      document.documentElement,
      {
        DOMMouseScroll: t,
        mousewheel: t,
        keydown: t,
        mouseover: t,
        mousemove: t,
        click: t,
      },
      undefined,
      undefined,
      { passive: !0 }
    );
    b('Arbiter').subscribe('Event/stop', function (a, b) {
      t(b.event);
    });
    e.exports = s;
  },
  null
);
__d(
  'mixin',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a, b, c, d, e, f, g, h, i, j, k) {
      __p && __p();
      k = function () {};
      a = [a, b, c, d, e, f, g, h, i, j];
      b = 0;
      while (a[b]) {
        c = a[b];
        for (var l in c)
          Object.prototype.hasOwnProperty.call(c, l) && (k.prototype[l] = c[l]);
        b += 1;
      }
      return k;
    }
    e.exports = a;
  },
  null
);
__d(
  'SystemEvents',
  [
    'ArbiterMixin',
    'Cookie',
    'ErrorUtils',
    'SystemEventsInitialData',
    'TimeSlice',
    'UserActivity',
    'UserAgent_DEPRECATED',
    'gkx',
    'mixin',
    'setIntervalAcrossTransitions',
    'setTimeoutAcrossTransitions',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g,
      h = 1e3;
    c = babelHelpers.inherits(a, b('mixin')(b('ArbiterMixin')));
    g = c && c.prototype;
    function a() {
      g.constructor.call(this),
        (this.$SystemEvents12 = function () {
          var a = this.$SystemEvents7();
          this.$SystemEvents2 != a &&
            ((this.$SystemEvents2 = a), this.inform(this.USER, a));
          this.$SystemEvents13();
        }.bind(this)),
        (this.USER = 'SystemEvents/USER'),
        (this.ONLINE = 'SystemEvents/ONLINE'),
        (this.TIME_TRAVEL = 'SystemEvents/TIME_TRAVEL'),
        (this.$SystemEvents1 = b('SystemEventsInitialData').ORIGINAL_USER_ID),
        (this.$SystemEvents2 = this.$SystemEvents1),
        (this.$SystemEvents3 = navigator.onLine),
        (this.$SystemEvents4 = Date.now()),
        this.$SystemEvents6();
    }
    a.prototype.isPageOwner = function (a) {
      return (a || this.$SystemEvents7()) == this.$SystemEvents1;
    };
    a.prototype.isOnline = function () {
      return !!(b('UserAgent_DEPRECATED').chrome() || this.$SystemEvents3);
    };
    a.prototype.checkTimeTravel = function () {
      var a = Date.now(),
        b = a - this.$SystemEvents4;
      this.$SystemEvents4 = a;
      (b < 0 || b > 1e4) && this.inform(this.TIME_TRAVEL, b);
    };
    a.prototype.$SystemEvents6 = function () {
      this.$SystemEvents8(),
        this.$SystemEvents9(),
        this.$SystemEvents10(),
        this.$SystemEvents11();
    };
    a.prototype.$SystemEvents8 = function () {
      var a = b('TimeSlice').guard(
          function () {
            this.$SystemEvents3 ||
              ((this.$SystemEvents3 = !0),
              this.inform(this.ONLINE, this.$SystemEvents3));
          }.bind(this),
          'SystemEvents onOnline'
        ),
        c = b('TimeSlice').guard(
          function () {
            this.$SystemEvents3 &&
              ((this.$SystemEvents3 = !1),
              this.inform(this.ONLINE, this.$SystemEvents3));
          }.bind(this),
          'SystemEvents onOffline'
        );
      b('UserAgent_DEPRECATED').ie()
        ? b('UserAgent_DEPRECATED').ie() >= 11
          ? (window.addEventListener('online', a, !1),
            window.addEventListener('offline', c, !1))
          : b('UserAgent_DEPRECATED').ie() >= 8
          ? window.attachEvent('onload', function () {
              (document.body.ononline = a), (document.body.onoffline = c);
            })
          : b('setIntervalAcrossTransitions')(function () {
              (navigator.onLine ? a : c)();
            }, h)
        : window.addEventListener &&
          (window.addEventListener('online', a, !1),
          window.addEventListener('offline', c, !1));
    };
    a.prototype.$SystemEvents13 = function () {
      clearTimeout(this.$SystemEvents5),
        (this.$SystemEvents5 = b('setTimeoutAcrossTransitions')(
          this.$SystemEvents12,
          h
        ));
    };
    a.prototype.$SystemEvents9 = function () {
      if (
        self !== top &&
        b('gkx')(
          'AT7WkTBxtNvgg_cd28WME4VYYDSKNpQ6HV3ctXAazcEPazpx3HNWlYY_-VsDnRxxrQVwv993oQqldtr2UtEMBK_M9oLZL53MZPvIfc3E35mYU8nK0yCIOLib0JAs2StViz4'
        )
      )
        return;
      b('gkx')(
        'AT72AlgY59EKSOuCUEsuNGbWTW69f1LrBG_LxugpCdh4wELvqVniwX_iqC_4mJ8Vy26mVWILg2OAip_cjALGqTt-n2n6gpyEWH0Q7NvRHBsELlO3gDjVTWbvLiWom5Li7tg'
      ) &&
        b('UserActivity').subscribe(
          function () {
            this.$SystemEvents13();
          }.bind(this)
        );
      this.$SystemEvents13();
    };
    a.prototype.$SystemEvents10 = function () {
      b('setIntervalAcrossTransitions')(this.checkTimeTravel.bind(this), h);
    };
    a.prototype.$SystemEvents11 = function () {
      b('setIntervalAcrossTransitions')(function () {
        window.onerror != b('ErrorUtils').onerror &&
          (window.onerror = b('ErrorUtils').onerror);
      }, h);
    };
    a.prototype.$SystemEvents7 = function () {
      return b('Cookie').get('c_user') || '0';
    };
    e.exports = new a();
  },
  3
);
__d(
  'RTISubscriptionManager',
  [
    'invariant',
    'Arbiter',
    'BanzaiODS',
    'Bootloader',
    'ChannelConstants',
    'CurrentUser',
    'ErrorUtils',
    'RTIFriendFanoutConfig',
    'RTISubscriptionManagerConfig',
    'RTISubscriptionStore',
    'RTISubscriptionToken',
    'Run',
    'SkywalkerOracle',
    'SystemEvents',
    'gkx',
    'setTimeoutAcrossTransitions',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h = b('SkywalkerOracle').OracleGK,
      i = b('ChannelConstants').SUBSCRIPTION_STATE;
    function a() {
      __p && __p();
      (this.PULL_HINT_DELAY_MILLIS = 1e4),
        (this.$1 = new (b('RTISubscriptionStore'))()),
        (this.$2 = !1),
        (this.$3 = !1),
        (this.$4 = !1),
        (this.$5 = !1),
        (this.$6 = !1),
        (this.$7 = !0),
        (this.$8 = 0),
        (this.$9 = document.readyState === 'complete'),
        b('Run').onAfterLoad(
          function () {
            (this.$9 = !0), this.flush();
          }.bind(this)
        ),
        (this.$10 = null),
        b('Arbiter').subscribe(
          b('ChannelConstants').ON_ENTER_STATE,
          function (a, c) {
            if (!this.$10) return;
            a = /pull/.test(c.state);
            !this.$2 && a
              ? ((this.$3 = !0),
                this.$4 ||
                  ((this.$4 = !0),
                  b('setTimeoutAcrossTransitions')(
                    function () {
                      (this.$2 = this.$3),
                        (this.$4 = !1),
                        this.$2 && this.flush();
                    }.bind(this),
                    this.PULL_HINT_DELAY_MILLIS
                  )))
              : !a
              ? ((this.$3 = !1), (this.$2 = !1))
              : a && ((this.$2 = !0), this.flush());
          }.bind(this)
        ),
        b('SystemEvents').subscribe(
          b('SystemEvents').ONLINE,
          function (a, b) {
            b || ((this.$2 = !1), (this.$3 = !1));
          }.bind(this)
        ),
        b('SystemEvents').subscribe(
          b('SystemEvents').USER,
          function (a, b) {
            (this.$2 = !1), (this.$3 = !1), this.$1.clearSubscriptions();
          }.bind(this)
        ),
        b('Arbiter').subscribe(
          b('ChannelConstants').RTI_SESSION,
          function (a, b) {
            !this.$10 &&
              b &&
              this.deleteSubscriptions(function (a) {
                return a.getState() === i.UNSUBSCRIBE;
              }),
              (this.$10 = b),
              this.$10 && ((this.$2 = !0), this.flush());
          }.bind(this)
        ),
        b('Arbiter').subscribe(
          b('ChannelConstants').ON_INVALID_HISTORY,
          function () {
            (this.$2 = !0),
              this.forEachSubscription(function (a) {
                return a.setDirty(!0);
              }),
              this.getCurrentSession();
          }.bind(this)
        ),
        this.getCurrentSession(),
        b('Arbiter').subscribe(
          b('ChannelConstants').SKYWALKER,
          function (a, c) {
            b('BanzaiODS').bumpEntityKey(
              'RTISubscriptionManager',
              'skywalker_delivery'
            );
            a = c.obj.topic;
            var d = c.obj.view_id,
              e = {};
            c.obj.payloads === undefined
              ? (e.obj = [c.obj.payload])
              : (e.obj = c.obj.payloads);
            c = b('ChannelConstants').getRTISkywalkerArbiterType(a, d);
            b('Arbiter').inform(c, e);
          }
        ),
        this.$11();
    }
    a.prototype.subscribe = function (a, c, d, e, f, h) {
      __p && __p();
      a || g(0, undefined);
      c || g(0, undefined);
      b('BanzaiODS').bumpEntityKey(
        'RTISubscriptionManager',
        'subscribe_attempt'
      );
      e = this.$1.subscribe(
        a,
        function (a) {
          b('gkx')(
            'AT5R2c8RV30ACfB-g2mU6TcK4P-_zOijNJNqRwBajAhWM8GWb-fwUePWej8KWj9_IXc7p84bphBbXj-kQGC6BJIz'
          )
            ? (this.isHeartbeat(a.payload) || c(a), i.ping())
            : c(a);
        }.bind(this),
        d,
        e,
        f,
        h
      );
      var i = this.$12(e);
      f = a.substr(0, a.lastIndexOf('/'));
      if (
        b('RTIFriendFanoutConfig').passFriendFanoutSubscribeGK &&
        b('RTIFriendFanoutConfig').topicPrefixes.indexOf(f) >= 0
      ) {
        h = a + '_user_id_' + b('CurrentUser').getID();
        f = this.$1.subscribe(h, c, d);
        a = this.$12(f);
        i.setFriendFanoutToken(a);
      }
      e.isDirty() && this.flush();
      return i;
    };
    a.prototype.mutateContext = function (a, c) {
      b('BanzaiODS').bumpEntityKey(
        'RTISubscriptionManager',
        'mutate_context_attempt'
      ),
        this.$1.isSubscribed(a) && (this.$1.mutateContext(a, c), this.flush());
    };
    a.prototype.isHeartbeat = function (a) {
      try {
        a = JSON.parse(a);
        if (a.heartbeat) return !0;
      } catch (a) {}
      return !1;
    };
    a.prototype.unsubscribe = function (a) {
      b('BanzaiODS').bumpEntityKey(
        'RTISubscriptionManager',
        'unsubscribe_attempt'
      ),
        this.$1.unsubscribe(a);
    };
    a.prototype.unsubscribeAll = function (a) {
      if (!this.isReady() || this.$10 == null) return;
      var c = this.$10;
      b('BanzaiODS').bumpEntityKey('RTISubscriptionManager', 'unsubscribe_all');
      var d = { reset: 't' };
      a = a != null ? a : function (a) {};
      c.issueRequest('/sub', d, {}, a);
    };
    a.prototype.activePing = function () {
      if (!this.isReady() || this.$10 == null) return;
      var a = { state: 'active' };
      this.$10.issueRequest('/active_ping', a, {}, function (a) {});
    };
    a.prototype.flush = function () {
      __p && __p();
      if (!this.isReady() || this.$10 == null || this.$5) {
        this.$6 = !0;
        this.$10 == null && this.getCurrentSession();
        return;
      }
      var a = this.$10;
      this.$5 = !0;
      this.$6 = !1;
      var c = this.getMaxConsecutiveFlushFailures();
      if (this.$8 >= c) {
        b('BanzaiODS').bumpEntityKey('RTISubscriptionManager', 'reset_state');
        this.$8 = 0;
        this.$1.clearSubscriptions();
        this.unsubscribeAll(
          function () {
            this.$5 = !1;
          }.bind(this)
        );
        return;
      }
      var d = [],
        e = {};
      c = !0;
      var f = 0,
        g = function (a) {
          __p && __p();
          if (f >= this.getMaxFlushBatchSize()) {
            this.$6 = !0;
            return !0;
          }
          if (a.isDirty()) {
            a.getState() === i.MUTATE_CONTEXT && (c = !1);
            var b = 'subscriptions',
              g = e[b];
            g || ((g = []), (e[b] = g));
            d.push(a);
            a.setDirty(!1);
            a.setSent(!1);
            b = {
              topic: a.getTopic(),
              state: a.getState(),
              context: a.getContext(),
              viewId: a.getViewId(),
            };
            f += 1;
            g.push(b);
          } else c = !1;
          return !1;
        }.bind(this);
      this.forEachSubscription(g);
      if (c && e.subscriptions && e.subscriptions.length > 0) {
        g = [];
        for (var h = 0; h < e.subscriptions.length; h++)
          e.subscriptions[h].state === i.SUBSCRIBE &&
            g.push(e.subscriptions[h]);
        e.subscriptions = g;
        this.$7 = !0;
      }
      h = function (a) {
        __p && __p();
        var c = a.data != null;
        this.$8 = c ? 0 : this.$8 + 1;
        this.$7 && c && (this.$7 = !1);
        for (var e = 0; e < d.length; e++) {
          var f = d[e];
          f.isDirty() || (f.setSent(c), f.setDirty(!c));
          if (f.getState() === i.SUBSCRIBE) {
            c
              ? b('BanzaiODS').bumpEntityKey(
                  'RTISubscriptionManager',
                  'subscribe_success'
                )
              : b('BanzaiODS').bumpEntityKey(
                  'RTISubscriptionManager',
                  'subscribe_failure'
                );
            var g = f.getSubscribeCallback();
            g && b('ErrorUtils').applyWithGuard(g, this, [a]);
          } else if (f.getState() === i.MUTATE_CONTEXT)
            c
              ? (b('BanzaiODS').bumpEntityKey(
                  'RTISubscriptionManager',
                  'mutate_context_success'
                ),
                f.setState(i.SUBSCRIBE))
              : b('BanzaiODS').bumpEntityKey(
                  'RTISubscriptionManager',
                  'mutate_context_failure'
                );
          else if (f.getState() === i.UNSUBSCRIBE) {
            c
              ? b('BanzaiODS').bumpEntityKey(
                  'RTISubscriptionManager',
                  'unsubscribe_success'
                )
              : b('BanzaiODS').bumpEntityKey(
                  'RTISubscriptionManager',
                  'unsubscribe_failure'
                );
            g = f.getUnsubscribeCallback();
            g && b('ErrorUtils').applyWithGuard(g, this, [a]);
          }
        }
        this.deleteSubscriptions(function (a) {
          return a.getState() === i.UNSUBSCRIBE && a.isSent() && !a.isDirty();
        });
        this.$5 = !1;
        this.$6 &&
          (b('BanzaiODS').bumpEntityKey(
            'RTISubscriptionManager',
            'repeated_flush'
          ),
          (this.$6 = !1),
          this.flush());
      }.bind(this);
      if (Object.keys(e).length <= 0) {
        this.$5 = !1;
        return;
      }
      g = {};
      this.$7 && (g.reset = 't');
      a.issueRequest('/sub', g, e, h);
    };
    a.prototype.deleteSubscriptions = function (a) {
      this.$1.deleteSubscriptions(a);
    };
    a.prototype.forEachSubscription = function (a) {
      this.$1.forEachSubscription(a);
    };
    a.prototype.isFlushInProgress = function () {
      return this.$5;
    };
    a.prototype.getSubscriptions = function () {
      var a = [];
      this.forEachSubscription(function (b) {
        return a.push(b);
      });
      return a;
    };
    a.prototype.isSubscribed = function (a) {
      return this.$1.isSubscribed(a);
    };
    a.prototype.isReady = function () {
      return this.$10 != null && this.$2 && this.$9;
    };
    a.prototype.getCurrentSession = function () {
      b('Arbiter').inform(b('ChannelConstants').GET_RTI_SESSION_REQUEST);
    };
    a.prototype.getMaxConsecutiveFlushFailures = function () {
      return b('RTISubscriptionManagerConfig').config &&
        Object.prototype.hasOwnProperty.call(
          b('RTISubscriptionManagerConfig').config,
          'max_consecutive_flush_failures'
        )
        ? Number(
            b('RTISubscriptionManagerConfig').config
              .max_consecutive_flush_failures
          )
        : b('ChannelConstants').DEFAULT_MAX_CONSECUTIVE_FLUSH_FAILURES;
    };
    a.prototype.getMaxFlushBatchSize = function () {
      return b('RTISubscriptionManagerConfig').config &&
        Object.prototype.hasOwnProperty.call(
          b('RTISubscriptionManagerConfig').config,
          'max_subscription_flush_batch_size'
        )
        ? Number(
            b('RTISubscriptionManagerConfig').config
              .max_subscription_flush_batch_size
          )
        : b('ChannelConstants').DEFAULT_MAX_SUBSCRIPTION_FLUSH_BATCH_SIZE;
    };
    a.prototype.$12 = function (a) {
      return new (b('RTISubscriptionToken'))(
        a,
        function (a) {
          return this.unsubscribe(a);
        }.bind(this),
        function (a, b) {
          return this.mutateContext(a, b);
        }.bind(this),
        function () {
          return this.flush();
        }.bind(this),
        function (a) {
          return this.isSubscribed(a);
        }.bind(this)
      );
    };
    a.prototype.$11 = function () {
      if (!h) return;
      b('Bootloader').loadModules(
        ['SkywalkerOracleManager'],
        function (a) {
          new a(
            function (a, b) {
              this.subscribe(a, b);
            }.bind(this)
          ).startOracle();
        }.bind(this),
        'RTISubscriptionManager'
      );
    };
    var j = new a();
    b('Run').onUnload(function () {
      return j.unsubscribeAll();
    });
    e.exports = j;
  },
  null
);
__d(
  'createWarning',
  ['CoreWarningGK', 'SiteData', 'emptyFunction'],
  function (a, b, c, d, e, f) {
    a = b('emptyFunction').thatReturns;
    e.exports = a;
  },
  null
);
__d(
  'BanzaiScuba',
  ['Banzai'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = 'scuba_sample';
    function a(a, c, d) {
      __p && __p();
      this.fields = {};
      this.post = function (e) {
        if (!a) return;
        var f = babelHelpers['extends']({}, this.fields);
        f._ds = a;
        c && (f._lid = c);
        f._options = d;
        b('Banzai').post(g, f, e);
        this.post = function () {};
        this.posted = !0;
      };
      this.lid = c;
      return this;
    }
    function h(a, b, c) {
      this.fields[a] || (this.fields[a] = {});
      this.fields[a][b] = c;
      return this;
    }
    function c(a) {
      return function (b, c) {
        return this.posted ? this : h.call(this, a, b, c);
      };
    }
    Object.assign(a.prototype, {
      post: function () {},
      addNormal: c('normal'),
      addInteger: c('int'),
      addDenorm: c('denorm'),
      addTagset: c('tags'),
      addNormVector: c('normvector'),
    });
    e.exports = a;
  },
  null
);
__d(
  'ReactCurrentOwner',
  [],
  function (a, b, c, d, e, f) {
    a = { current: null };
    e.exports = a;
  },
  null
);
__d(
  'monitorCodeUse',
  [
    'invariant',
    'BanzaiScuba',
    'ErrorUtils',
    'ScriptPath',
    'forEachObject',
    'ReactCurrentOwner',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    function h(a) {
      a = a.type;
      if (typeof a === 'string') return a;
      return typeof a === 'function' ? a.displayName || a.name : null;
    }
    function i(a) {
      var b = 1e3,
        c = [];
      while (a && c.length < b)
        c.push(h(a) || ''),
          typeof a.tag === 'number'
            ? (a = a['return'])
            : (a = a._currentElement && a._currentElement._owner);
      return c;
    }
    function j(a) {
      return Array.isArray(a) ? '[...]' : k(a);
    }
    function k(a) {
      __p && __p();
      if (a == null) return '' + a;
      if (Array.isArray(a)) {
        if (a.length > 10) {
          var b = a.slice(0, 5).map(j);
          return '[' + b.join(', ') + ', ...]';
        }
        b = a.map(j);
        return '[' + b.join(', ') + ']';
      }
      if (typeof a === 'string') return "'" + a + "'";
      if (typeof a === 'object') {
        b = Object.keys(a).map(function (a) {
          return a + '=...';
        });
        return '{' + b.join(', ') + '}';
      }
      return '' + a;
    }
    function l(a) {
      return a.identifier || '';
    }
    function m(a) {
      return a.script + '  ' + a.line + ':' + a.column;
    }
    function a(a, c, d) {
      __p && __p();
      d === void 0 && (d = {});
      (a && !/[^a-z0-9_]/.test(a)) || g(0, undefined);
      var e = {};
      d.sampleRate != null && (e.sampleRate = d.sampleRate);
      var f = new (b('BanzaiScuba'))('core_monitor', null, e);
      f.addNormal('event', a);
      e = b('ReactCurrentOwner');
      f.addNormVector('owners', i(e.current));
      f.addNormal('uri', window.location.href);
      f.addNormal('script_path', b('ScriptPath').getScriptPath());
      e = !1;
      d.forceIncludeStackTrace && (e = !0);
      if (e)
        try {
          d = new Error(a);
          d.framesToPop = 1;
          e = b('ErrorUtils').normalizeError(d).stackFrames;
          a = e.map(l);
          d = e.map(m).join('\n');
          f.addNormVector('stacktrace', a);
          f.addDenorm('stack', d);
        } catch (a) {}
      b('forEachObject')(c, function (a, b, c) {
        typeof a === 'string'
          ? f.addNormal(b, a)
          : typeof a === 'number' && (a | 0) === a
          ? f.addInteger(b, a)
          : Array.isArray(a)
          ? f.addNormVector(b, a.map(k))
          : f.addNormal(b, k(a));
      });
      f.post();
    }
    e.exports = a;
  },
  null
);
__d(
  'warning',
  ['Bootloader', 'createWarning', 'monitorCodeUse'],
  function (a, b, c, d, e, f) {
    a = function () {};
    e.exports = a;
  },
  null
);
__d(
  'BaseGraphQLSubscription',
  [
    'Banzai',
    'BanzaiLogger',
    'ChannelClientID',
    'CurrentLocale',
    'CurrentUser',
    'GraphQLSubscriptionsConfig',
    'Random',
    'RTISubscriptionManager',
    'URI',
    'gkx',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = 1e4,
      h = 1,
      i = 100,
      j = 'www_e2e_reliability';
    a = {
      subscribe: function (a, c, d) {
        __p && __p();
        d === void 0 && (d = {});
        d.forceLogContext == null &&
          b('gkx')(
            'AT7Chz5wgKLZbSd9ly8uFQQBsVBGTLtk8_Yf3E8ifENKY4n9DNZfVEomwBg6vUHF1MWvJVXwrBfYznXqFMX9Hd7EhR2xpmULKwr8D4oho-SBhA'
          ) &&
          b('Random').coinflip(i) &&
          (d.forceLogContext = j);
        var e = this._getQueryParameters(a);
        d.forceLogContext != null &&
          (e['%options'] = { client_logged_context: d.forceLogContext });
        var f = {};
        f.transformContext = JSON.stringify(this._getTransformContext(a, e));
        d.policy != null && (f.policy = d.policy);
        this._logEvent('client_subscribe', e, d);
        return b('RTISubscriptionManager').subscribe(
          this._getTopic(a),
          function (a) {
            this._logEvent('receivepayload', e, d), c(JSON.parse(a.payload));
          }.bind(this),
          f,
          null,
          function () {
            this._logEvent('client_unsubscribe', e, d);
          }.bind(this)
        );
      },
      subscribeWithIcebreaker_EXPERIMENTAL: function (a, c, d) {
        __p && __p();
        var e = new (b('URI'))(
          'https://streaming-graph.facebook.com/gqls_bore'
        );
        e.setQueryData({ access_token: d });
        d = this._getTopic(a);
        var f = {
          topic: d,
          locale: b('CurrentLocale').get(),
          queryID: this._getQueryID(),
          serializedQueryParameters: JSON.stringify(
            this._getQueryParameters(a)
          ),
        };
        e.addQueryData(f);
        var g = new EventSource(e.toString(), { withCredentials: !0 });
        g.addEventListener(
          'message',
          function (a) {
            c(JSON.parse(JSON.parse(a.data).payload));
          },
          !1
        );
        return {
          getContext: function () {
            return f;
          },
          unsubscribe: function () {
            return g.close();
          },
        };
      },
      _getTransformContext: function (a, c) {
        var d = 0;
        return {
          viewerID: this._getViewerID(a),
          appID: d,
          locale: b('CurrentLocale').get(),
          queryID: this._getQueryID(),
          serializedQueryParameters: JSON.stringify(c),
        };
      },
      _getViewerID: function (a) {
        return b('CurrentUser').getID();
      },
      _logEvent: function (a, c, d) {
        if (b('Banzai').isEnabled('gqls_web_logging')) {
          var e =
            b('GraphQLSubscriptionsConfig').shouldAlwaysLog || d.forceLogContext
              ? h
              : g;
          b('Random').coinflip(e) &&
            b('BanzaiLogger').log('GraphQLSubscriptionsLoggerConfig', {
              clienttime: Date.now() / 1e3,
              client_sample_weight: e,
              event: a,
              force_log_context: d.forceLogContext,
              mechanism: 'skywalker',
              query_id: parseInt(this._getQueryID(), 10),
              query_params: c,
              session_id: b('ChannelClientID').getID(),
              subscription_call: this._getSubscriptionCallName(),
            });
        }
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'WebGraphQLSubscriptionHelper',
  [],
  function (a, b, c, d, e, f) {
    e.exports = {
      getExports: function (a) {
        var b = a.docID,
          c = a.queryID;
        return {
          getDocID: function () {
            return b;
          },
          getLegacyQueryID: function () {
            return c;
          },
        };
      },
    };
  },
  null
);
__d(
  'LiveVideoCopyrightActionSubscriptionWebGraphQLSubscription',
  ['WebGraphQLSubscriptionHelper'],
  function (a, b, c, d, e, f) {
    e.exports = b('WebGraphQLSubscriptionHelper').getExports({
      docID: '1818287208247100',
      queryID: '329774284439480',
    });
  },
  null
);
__d(
  'uuid',
  [],
  function (a, b, c, d, e, f) {
    function a() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
        /[xy]/g,
        function (a) {
          var b = (Math.random() * 16) | 0;
          a = a == 'x' ? b : (b & 3) | 8;
          return a.toString(16);
        }
      );
    }
    e.exports = a;
  },
  null
);
__d(
  'LiveVideoCopyrightActionSubscription',
  [
    'BaseGraphQLSubscription',
    'LiveVideoCopyrightActionSubscriptionWebGraphQLSubscription',
    'uuid',
  ],
  function (a, b, c, d, e, f) {
    a = babelHelpers['extends']({}, b('BaseGraphQLSubscription'), {
      _getTopic: function (a) {
        return 'gqls/live_video_copyright_action_subscribe/video_id_' + a;
      },
      _getQueryID: function () {
        return b(
          'LiveVideoCopyrightActionSubscriptionWebGraphQLSubscription'
        ).getDocID();
      },
      _getQueryParameters: function (a) {
        return {
          input: JSON.stringify({
            client_subscription_id: b('uuid')(),
            video_id: a,
          }),
        };
      },
      _getSubscriptionCallName: function () {
        return 'live_video_copyright_action_subscribe';
      },
    });
    e.exports = a;
  },
  null
);
__d(
  'VideoPlayerShakaPerformanceTypedLogger',
  ['Banzai', 'GeneratedLoggerUtils', 'nullthrows'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a() {
      this.clear();
    }
    a.prototype.log = function () {
      b('GeneratedLoggerUtils').log(
        'vpsp_proxy:VideoPlayerShakaPerformanceLoggerConfig',
        this.$1,
        b('Banzai').BASIC
      );
    };
    a.prototype.logVital = function () {
      b('GeneratedLoggerUtils').log(
        'vpsp_proxy:VideoPlayerShakaPerformanceLoggerConfig',
        this.$1,
        b('Banzai').VITAL
      );
    };
    a.prototype.logImmediately = function () {
      b('GeneratedLoggerUtils').log(
        'vpsp_proxy:VideoPlayerShakaPerformanceLoggerConfig',
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
    a.prototype.setAccessToken = function (a) {
      this.$1.access_token = a;
      return this;
    };
    a.prototype.setAdditionalBufferedRanges = function (a) {
      this.$1.additional_buffered_ranges = a;
      return this;
    };
    a.prototype.setBandwidthEstimate = function (a) {
      this.$1.bandwidth_estimate = a;
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
    a.prototype.setCode = function (a) {
      this.$1.code = a;
      return this;
    };
    a.prototype.setConcluder = function (a) {
      this.$1.concluder = a;
      return this;
    };
    a.prototype.setConnectionQualityLevel = function (a) {
      this.$1.connection_quality_level = a;
      return this;
    };
    a.prototype.setDroppedFrames = function (a) {
      this.$1.dropped_frames = a;
      return this;
    };
    a.prototype.setDynamicBitrate = function (a) {
      this.$1.dynamic_bitrate = a;
      return this;
    };
    a.prototype.setError = function (a) {
      this.$1.error = a;
      return this;
    };
    a.prototype.setEvent = function (a) {
      this.$1.event = a;
      return this;
    };
    a.prototype.setExpectedLength = function (a) {
      this.$1.expected_length = a;
      return this;
    };
    a.prototype.setInitiator = function (a) {
      this.$1.initiator = a;
      return this;
    };
    a.prototype.setIsLive = function (a) {
      this.$1.is_live = a;
      return this;
    };
    a.prototype.setIsMuted = function (a) {
      this.$1.is_muted = a;
      return this;
    };
    a.prototype.setIsPageVisible = function (a) {
      this.$1.is_page_visible = a;
      return this;
    };
    a.prototype.setIsServableViaFbms = function (a) {
      this.$1.is_servable_via_fbms = a;
      return this;
    };
    a.prototype.setIsTemplatedManifest = function (a) {
      this.$1.is_templated_manifest = a;
      return this;
    };
    a.prototype.setLastBufferedEnd = function (a) {
      this.$1.last_buffered_end = a;
      return this;
    };
    a.prototype.setLastBufferedStart = function (a) {
      this.$1.last_buffered_start = a;
      return this;
    };
    a.prototype.setLastBufferingEventEndTime = function (a) {
      this.$1.last_buffering_event_end_time = a;
      return this;
    };
    a.prototype.setLastPlayingEventTime = function (a) {
      this.$1.last_playing_event_time = a;
      return this;
    };
    a.prototype.setLength = function (a) {
      this.$1.length = a;
      return this;
    };
    a.prototype.setLiveheadDelta = function (a) {
      this.$1.livehead_delta = a;
      return this;
    };
    a.prototype.setLogicalCpuCount = function (a) {
      this.$1.logical_cpu_count = a;
      return this;
    };
    a.prototype.setLowestQualityRepresentationID = function (a) {
      this.$1.lowest_quality_representation_id = a;
      return this;
    };
    a.prototype.setManifestType = function (a) {
      this.$1.manifest_type = a;
      return this;
    };
    a.prototype.setParentID = function (a) {
      this.$1.parent_id = a;
      return this;
    };
    a.prototype.setPlayerOriginCallerSpecified = function (a) {
      this.$1.player_origin_caller_specified = a;
      return this;
    };
    a.prototype.setPlayerSuborigin = function (a) {
      this.$1.player_suborigin = a;
      return this;
    };
    a.prototype.setPlayerVersion = function (a) {
      this.$1.player_version = a;
      return this;
    };
    a.prototype.setPlayhead = function (a) {
      this.$1.playhead = a;
      return this;
    };
    a.prototype.setPreloadTime = function (a) {
      this.$1.preload_time = a;
      return this;
    };
    a.prototype.setPreviousRepresentationID = function (a) {
      this.$1.previous_representation_id = a;
      return this;
    };
    a.prototype.setPriorityFloat = function (a) {
      this.$1.priority_float = a;
      return this;
    };
    a.prototype.setPushed = function (a) {
      this.$1.pushed = a;
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
    a.prototype.setRescheduleCount = function (a) {
      this.$1.reschedule_count = a;
      return this;
    };
    a.prototype.setResource = function (a) {
      this.$1.resource = a;
      return this;
    };
    a.prototype.setResult = function (a) {
      this.$1.result = a;
      return this;
    };
    a.prototype.setScriptPath = function (a) {
      this.$1.script_path = a;
      return this;
    };
    a.prototype.setSegmentEndTime = function (a) {
      this.$1.segment_end_time = a;
      return this;
    };
    a.prototype.setSegmentStartTime = function (a) {
      this.$1.segment_start_time = a;
      return this;
    };
    a.prototype.setSegmentTimeGap = function (a) {
      this.$1.segment_time_gap = a;
      return this;
    };
    a.prototype.setSequentialID = function (a) {
      this.$1.sequential_id = a;
      return this;
    };
    a.prototype.setSession = function (a) {
      this.$1.session = a;
      return this;
    };
    a.prototype.setState = function (a) {
      this.$1.state = a;
      return this;
    };
    a.prototype.setStreamSwitchReason = function (a) {
      this.$1.stream_switch_reason = a;
      return this;
    };
    a.prototype.setTimeBetweenBytesMax = function (a) {
      this.$1.time_between_bytes_max = a;
      return this;
    };
    a.prototype.setTimeSinceMainThreadAvailable = function (a) {
      this.$1.time_since_main_thread_available = a;
      return this;
    };
    a.prototype.setTimeToFirstByte = function (a) {
      this.$1.time_to_first_byte = a;
      return this;
    };
    a.prototype.setTimeToLastByte = function (a) {
      this.$1.time_to_last_byte = a;
      return this;
    };
    a.prototype.setTimeToRequestSent = function (a) {
      this.$1.time_to_request_sent = a;
      return this;
    };
    a.prototype.setTimeToRequestStart = function (a) {
      this.$1.time_to_request_start = a;
      return this;
    };
    a.prototype.setTotalFrames = function (a) {
      this.$1.total_frames = a;
      return this;
    };
    a.prototype.setType = function (a) {
      this.$1.type = a;
      return this;
    };
    a.prototype.setUpdatePeriod = function (a) {
      this.$1.update_period = a;
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
    a.prototype.setWasDelayed = function (a) {
      this.$1.was_delayed = a;
      return this;
    };
    c = {
      access_token: !0,
      additional_buffered_ranges: !0,
      bandwidth_estimate: !0,
      client_time_begin: !0,
      client_time_end: !0,
      code: !0,
      concluder: !0,
      connection_quality_level: !0,
      dropped_frames: !0,
      dynamic_bitrate: !0,
      error: !0,
      event: !0,
      expected_length: !0,
      initiator: !0,
      is_live: !0,
      is_muted: !0,
      is_page_visible: !0,
      is_servable_via_fbms: !0,
      is_templated_manifest: !0,
      last_buffered_end: !0,
      last_buffered_start: !0,
      last_buffering_event_end_time: !0,
      last_playing_event_time: !0,
      length: !0,
      livehead_delta: !0,
      logical_cpu_count: !0,
      lowest_quality_representation_id: !0,
      manifest_type: !0,
      parent_id: !0,
      player_origin_caller_specified: !0,
      player_suborigin: !0,
      player_version: !0,
      playhead: !0,
      preload_time: !0,
      previous_representation_id: !0,
      priority_float: !0,
      pushed: !0,
      reason: !0,
      representation_id: !0,
      reschedule_count: !0,
      resource: !0,
      result: !0,
      script_path: !0,
      segment_end_time: !0,
      segment_start_time: !0,
      segment_time_gap: !0,
      sequential_id: !0,
      session: !0,
      state: !0,
      stream_switch_reason: !0,
      time_between_bytes_max: !0,
      time_since_main_thread_available: !0,
      time_to_first_byte: !0,
      time_to_last_byte: !0,
      time_to_request_sent: !0,
      time_to_request_start: !0,
      total_frames: !0,
      type: !0,
      update_period: !0,
      vc: !0,
      video_duration: !0,
      video_id: !0,
      was_delayed: !0,
    };
    e.exports = a;
  },
  null
);
__d(
  'VideosInfraLoapTypedLogger',
  ['Banzai', 'GeneratedLoggerUtils', 'nullthrows'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a() {
      this.clear();
    }
    a.prototype.log = function () {
      b('GeneratedLoggerUtils').log(
        'logger:VideosInfraLoapLoggerConfig',
        this.$1,
        b('Banzai').BASIC
      );
    };
    a.prototype.logVital = function () {
      b('GeneratedLoggerUtils').log(
        'logger:VideosInfraLoapLoggerConfig',
        this.$1,
        b('Banzai').VITAL
      );
    };
    a.prototype.logImmediately = function () {
      b('GeneratedLoggerUtils').log(
        'logger:VideosInfraLoapLoggerConfig',
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
    a.prototype.setEventCreationTime = function (a) {
      this.$1.event_creation_time = a;
      return this;
    };
    a.prototype.setEventID = function (a) {
      this.$1.event_id = a;
      return this;
    };
    a.prototype.setEventName = function (a) {
      this.$1.event_name = a;
      return this;
    };
    a.prototype.setEventSeverity = function (a) {
      this.$1.event_severity = a;
      return this;
    };
    a.prototype.setMetadata = function (a) {
      this.$1.metadata = b('GeneratedLoggerUtils').serializeMap(a);
      return this;
    };
    a.prototype.setParentSource = function (a) {
      this.$1.parent_source = a;
      return this;
    };
    a.prototype.setSource = function (a) {
      this.$1.source = a;
      return this;
    };
    a.prototype.setStreamID = function (a) {
      this.$1.stream_id = a;
      return this;
    };
    a.prototype.setStreamType = function (a) {
      this.$1.stream_type = a;
      return this;
    };
    a.prototype.setTraceID = function (a) {
      this.$1.trace_id = a;
      return this;
    };
    c = {
      event_creation_time: !0,
      event_id: !0,
      event_name: !0,
      event_severity: !0,
      metadata: !0,
      parent_source: !0,
      source: !0,
      stream_id: !0,
      stream_type: !0,
      trace_id: !0,
    };
    e.exports = a;
  },
  null
);
__d(
  'AsyncDOM',
  ['CSS', 'DOM', 'FBLogger'],
  function (a, b, c, d, e, f) {
    __p && __p();
    a = {
      invoke: function (a, c) {
        __p && __p();
        for (var d = 0; d < a.length; ++d) {
          var e = a[d],
            f = e[0],
            g = e[1],
            h = e[2];
          e = e[3];
          h = (h && c) || null;
          g && (h = b('DOM').scry(h || document.documentElement, g)[0]);
          f != 'eval' &&
            !h &&
            b('FBLogger')('async_dom').warn(
              'Could not find relativeTo element for %s AsyncDOM operation based on selector: %s',
              f,
              g
            );
          switch (f) {
            case 'eval':
              new Function(e).apply(h);
              break;
            case 'hide':
              b('CSS').hide(h);
              break;
            case 'show':
              b('CSS').show(h);
              break;
            case 'setContent':
              b('DOM').setContent(h, e);
              break;
            case 'appendContent':
              b('DOM').appendContent(h, e);
              break;
            case 'prependContent':
              b('DOM').prependContent(h, e);
              break;
            case 'insertAfter':
              b('DOM').insertAfter(h, e);
              break;
            case 'insertBefore':
              b('DOM').insertBefore(h, e);
              break;
            case 'remove':
              b('DOM').remove(h);
              break;
            case 'replace':
              b('DOM').replace(h, e);
              break;
            default:
              b('FBLogger')('async_dom').warn(
                'Received invalid command %s for AsyncDOM operation',
                f
              );
          }
        }
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'AsyncResponse',
  ['invariant', 'Bootloader', 'FBLogger'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    function h(a, b) {
      (this.error = 0),
        (this.errorSummary = null),
        (this.errorDescription = null),
        (this.onload = null),
        (this.replay = !1),
        (this.payload = b),
        (this.request = a),
        (this.silentError = !1),
        (this.transientError = !1),
        (this.blockedAction = !1),
        (this.is_last = !0),
        (this.responseHeaders = null);
    }
    h.prototype.getRequest = function () {
      return this.request;
    };
    h.prototype.getPayload = function () {
      return this.payload;
    };
    h.prototype.toError = function () {
      this.error !== 0 || g(0, undefined);
      var a = this.errorSummary || '',
        b = this.errorDescription || '',
        c = new Error(a.toString() + ': ' + b.toString());
      Object.assign(c, {
        code: this.error,
        description: b,
        response: this,
        summary: a,
        isSilent: this.silentError,
        isTransient: this.transientError,
      });
      return c;
    };
    h.prototype.getError = function () {
      return this.error;
    };
    h.prototype.getErrorSummary = function () {
      return this.errorSummary;
    };
    h.prototype.setErrorSummary = function (a) {
      a = a === undefined ? null : a;
      this.errorSummary = a;
      return this;
    };
    h.prototype.getErrorDescription = function () {
      return this.errorDescription;
    };
    h.prototype.getErrorIsWarning = function () {
      return !!this.errorIsWarning;
    };
    h.prototype.isTransient = function () {
      return !!this.transientError;
    };
    h.prototype.isBlockedAction = function () {
      return !!this.blockedAction;
    };
    h.prototype.getResponseHeader = function (a) {
      __p && __p();
      var b = this.responseHeaders;
      if (!b) return null;
      b = b.replace(/^\n/, '');
      a = a.toLowerCase();
      b = b.split('\r\n');
      for (var c = 0; c < b.length; ++c) {
        var d = b[c],
          e = d.indexOf(': ');
        if (e <= 0) continue;
        var f = d.substring(0, e).toLowerCase();
        if (f === a) return d.substring(e + 2);
      }
      return null;
    };
    h.defaultErrorHandler = function (a) {
      try {
        !a.silentError
          ? h.verboseErrorHandler(a)
          : b('FBLogger')('async_response')
              .catching(a.toError())
              .warn('default error handler called');
      } catch (b) {
        alert(a);
      }
    };
    h.verboseErrorHandler = function (a, c) {
      b('Bootloader').loadModules(
        ['ExceptionDialog'],
        function (b) {
          return b.showAsyncError(a, c);
        },
        'AsyncResponse'
      );
    };
    e.exports = h;
  },
  null
);
__d(
  'StreamBlockReader',
  ['Promise', 'regeneratorRuntime'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a) {
      __p && __p();
      if (!a.getReader)
        throw new Error('No getReader method found on given object');
      this.$3 = a.getReader();
      this.$1 = '';
      this.$2 = null;
      this.$4 = !1;
      this.$5 = 'utf-8';
      this.$6 = '';
      this.$9 = !1;
      this.$8 = function () {
        return b('Promise').reject(
          'Sorry, you are somehow using this too early.'
        );
      };
      this.$7 = new (b('Promise'))(
        function (a, b) {
          this.$8 = a;
        }.bind(this)
      );
    }
    a.prototype.changeEncoding = function (a) {
      if (this.$2)
        throw new Error('Decoder already in use, encoding cannot be changed');
      this.$5 = a;
    };
    a.prototype.$10 = function () {
      if (!self.TextDecoder)
        throw new Error('TextDecoder is not supported here');
      this.$2 || (this.$2 = new self.TextDecoder(this.$5));
      return this.$2;
    };
    a.prototype.$11 = function () {
      if (this.$9)
        throw new Error('Something else is already reading from this reader');
      this.$9 = !0;
    };
    a.prototype.$12 = function () {
      this.$9 = !1;
    };
    a.prototype.isDone = function () {
      return this.$4;
    };
    a.prototype.$13 = function () {
      __p && __p();
      var a, c, d, e;
      return b('regeneratorRuntime').async(
        function (f) {
          __p && __p();
          while (1)
            switch ((f.prev = f.next)) {
              case 0:
                if (!(this.$6 !== '')) {
                  f.next = 4;
                  break;
                }
                a = this.$6;
                this.$6 = '';
                return f.abrupt('return', a);
              case 4:
                if (!this.isDone()) {
                  f.next = 6;
                  break;
                }
                throw new Error('You cannot read from a stream that is done');
              case 6:
                f.next = 8;
                return b('regeneratorRuntime').awrap(this.$3.read());
              case 8:
                c = f.sent;
                d = c.done;
                e = c.value;
                this.$4 = d;
                d && this.$8();
                return f.abrupt(
                  'return',
                  e ? this.$10().decode(e, { stream: !d }) : ''
                );
              case 14:
              case 'end':
                return f.stop();
            }
        },
        null,
        this
      );
    };
    a.prototype.readNextBlock = function () {
      __p && __p();
      var a;
      return b('regeneratorRuntime').async(
        function (b) {
          while (1)
            switch ((b.prev = b.next)) {
              case 0:
                this.$11();
                a = this.$13();
                this.$12();
                return b.abrupt('return', a);
              case 4:
              case 'end':
                return b.stop();
            }
        },
        null,
        this
      );
    };
    a.prototype.readUntilStringOrEnd = function (a) {
      return b('regeneratorRuntime').async(
        function (c) {
          while (1)
            switch ((c.prev = c.next)) {
              case 0:
                c.next = 2;
                return b('regeneratorRuntime').awrap(
                  this.readUntilOneOfStringOrEnd_DO_NOT_USE([a])
                );
              case 2:
                return c.abrupt('return', c.sent);
              case 3:
              case 'end':
                return c.stop();
            }
        },
        null,
        this
      );
    };
    a.prototype.readUntilStringOrThrow = function (a) {
      __p && __p();
      var c, d, e;
      return b('regeneratorRuntime').async(
        function (f) {
          __p && __p();
          while (1)
            switch ((f.prev = f.next)) {
              case 0:
                if (a) {
                  f.next = 2;
                  break;
                }
                throw new Error('cannot read empty string');
              case 2:
                this.$11(), (c = ''), (d = 0);
              case 5:
                if (this.isDone()) {
                  f.next = 22;
                  break;
                }
                f.next = 8;
                return b('regeneratorRuntime').awrap(this.$13());
              case 8:
                c += f.sent;
                if (!(c.length < a.length)) {
                  f.next = 11;
                  break;
                }
                return f.abrupt('continue', 5);
              case 11:
                e = c.substring(d).indexOf(a);
                if (!(e !== -1)) {
                  f.next = 19;
                  break;
                }
                e += d;
                this.$6 = c.substring(e + a.length);
                this.$12();
                return f.abrupt('return', c.substring(0, e));
              case 19:
                d = c.length - a.length + 1;
              case 20:
                f.next = 5;
                break;
              case 22:
                this.$6 = c;
                this.$12();
                throw new Error('Breakpoint not found');
              case 25:
              case 'end':
                return f.stop();
            }
        },
        null,
        this
      );
    };
    a.prototype.readUntilOneOfStringOrEnd_DO_NOT_USE = function (a) {
      __p && __p();
      var c, d, e, f;
      return b('regeneratorRuntime').async(
        function (g) {
          __p && __p();
          while (1)
            switch ((g.prev = g.next)) {
              case 0:
                this.$11(), (c = '');
              case 2:
                if (this.isDone()) {
                  g.next = 19;
                  break;
                }
                g.next = 5;
                return b('regeneratorRuntime').awrap(this.$13());
              case 5:
                (c += g.sent), (d = 0);
              case 7:
                if (!(d < a.length)) {
                  g.next = 17;
                  break;
                }
                e = a[d];
                f = c.indexOf(e);
                if (!(f !== -1)) {
                  g.next = 14;
                  break;
                }
                this.$6 = c.substring(f + e.length);
                this.$12();
                return g.abrupt('return', c.substring(0, f));
              case 14:
                d++;
                g.next = 7;
                break;
              case 17:
                g.next = 2;
                break;
              case 19:
                this.$12();
                return g.abrupt('return', c);
              case 21:
              case 'end':
                return g.stop();
            }
        },
        null,
        this
      );
    };
    a.prototype.waitUntilDone = function () {
      return b('regeneratorRuntime').async(
        function (a) {
          while (1)
            switch ((a.prev = a.next)) {
              case 0:
                return a.abrupt('return', this.$7);
              case 1:
              case 'end':
                return a.stop();
            }
        },
        null,
        this
      );
    };
    e.exports = a;
  },
  null
);
__d(
  'FetchStreamTransport',
  [
    'regeneratorRuntime',
    'ArbiterMixin',
    'FBLogger',
    'FetchStreamConfig',
    'StreamBlockReader',
    'TimeSlice',
    'URI',
    'mixin',
    'nullthrows',
  ],
  function $module_FetchStreamTransport(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports
  ) {
    __p && __p();
    var _mixin,
      _superProto,
      instance_count = 0;
    _mixin = babelHelpers.inherits(
      FetchStreamTransport,
      require('mixin')(require('ArbiterMixin'))
    );
    _superProto = _mixin && _mixin.prototype;
    function FetchStreamTransport(uri) {
      __p && __p();
      if (!self.ReadableStream || !self.fetch || !Request || !TextDecoder)
        throw new Error('fetch stream transport is not supported here');
      _superProto.constructor.call(this);
      this.$FetchStreamTransport6 = null;
      this.$FetchStreamTransport1 = uri;
      this.$FetchStreamTransport3 = !1;
      this.$FetchStreamTransport4 = !1;
      this.$FetchStreamTransport5 = !1;
      this.$FetchStreamTransport2 = ++instance_count;
      return this;
    }
    FetchStreamTransport.prototype.hasFinished = function () {
      return this.$FetchStreamTransport5;
    };
    FetchStreamTransport.prototype.getRequestURI = function () {
      return new (require('URI'))(this.$FetchStreamTransport1).addQueryData({
        __a: 1,
        __adt: this.$FetchStreamTransport2,
        __req: 'fetchstream_' + this.$FetchStreamTransport2,
        ajaxpipe_fetch_stream: 1,
      });
    };
    FetchStreamTransport.prototype.send = function () {
      if (this.$FetchStreamTransport3)
        throw new Error('FetchStreamTransport instances cannot be re-used.');
      this.$FetchStreamTransport3 = !0;
      var req = new Request(this.getRequestURI().toString(), {
        mode: 'same-origin',
        credentials: 'include',
      });
      this.$FetchStreamTransport6 = require('TimeSlice').getGuardedContinuation(
        'FetchStreamTransport: waiting on first response'
      );
      var fetchPromise = self.fetch(req, { redirect: 'follow' });
      this.$FetchStreamTransport7(fetchPromise);
    };
    FetchStreamTransport.prototype.$FetchStreamTransport7 = function _callee(
      fetchPromise
    ) {
      __p && __p();
      var _this = this,
        response,
        reader,
        first,
        _loop,
        _ret;
      return require('regeneratorRuntime').async(
        function _callee$(_context2) {
          __p && __p();
          while (1)
            switch ((_context2.prev = _context2.next)) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return require('regeneratorRuntime').awrap(fetchPromise);
              case 3:
                response = _context2.sent;
                _context2.next = 9;
                break;
              case 6:
                (_context2.prev = 6),
                  (_context2.t0 = _context2['catch'](0)),
                  this.abort();
              case 9:
                if (!(!response || !response.body || !response.ok)) {
                  _context2.next = 12;
                  break;
                }
                this.abort();
                return _context2.abrupt('return');
              case 12:
                (reader = new (require('StreamBlockReader'))(response.body)),
                  (first = !0),
                  (_loop = function _loop() {
                    __p && __p();
                    var nextData;
                    return require('regeneratorRuntime').async(
                      function _loop$(_context) {
                        __p && __p();
                        while (1)
                          switch ((_context.prev = _context.next)) {
                            case 0:
                              _context.next = 2;
                              return require('regeneratorRuntime').awrap(
                                reader.readUntilStringOrEnd(
                                  require('FetchStreamConfig').delim
                                )
                              );
                            case 2:
                              nextData = _context.sent;
                              if (!_this.$FetchStreamTransport4) {
                                _context.next = 5;
                                break;
                              }
                              return _context.abrupt('return', 'break');
                            case 5:
                              require('nullthrows')(
                                _this.$FetchStreamTransport6
                              )(
                                function () {
                                  __p && __p();
                                  if (first && nextData.startsWith('<')) {
                                    require('FBLogger')(
                                      'FetchStreamTransport'
                                    ).mustfix(
                                      'Endpoint: %s is sending a raw HTML response instead of properly formatted payload',
                                      this.$FetchStreamTransport1.toString()
                                    );
                                    var node = document.createElement('div');
                                    node.innerHTML = nextData;
                                    var scripts =
                                      node.getElementsByTagName('script');
                                    for (var i = 0; i < scripts.length; i++)
                                      eval(scripts[i].innerHTML);
                                    this.$FetchStreamTransport5 = !0;
                                    return;
                                  }
                                  first = !1;
                                  var parsedResponse = JSON.parse(nextData);
                                  reader.isDone() || parsedResponse.finished
                                    ? (this.$FetchStreamTransport5 = !0)
                                    : (this.$FetchStreamTransport6 =
                                        require('TimeSlice').getGuardedContinuation(
                                          'FetchStreamTransport: waiting on next response'
                                        ));
                                  this.inform(
                                    'response',
                                    parsedResponse.content
                                  );
                                }.bind(_this)
                              );
                            case 6:
                            case 'end':
                              return _context.stop();
                          }
                      },
                      null,
                      this
                    );
                  });
              case 15:
                if (
                  !(
                    !this.$FetchStreamTransport5 && !this.$FetchStreamTransport4
                  )
                ) {
                  _context2.next = 23;
                  break;
                }
                _context2.next = 18;
                return require('regeneratorRuntime').awrap(_loop());
              case 18:
                _ret = _context2.sent;
                if (!(_ret === 'break')) {
                  _context2.next = 21;
                  break;
                }
                return _context2.abrupt('break', 23);
              case 21:
                _context2.next = 15;
                break;
              case 23:
              case 'end':
                return _context2.stop();
            }
        },
        null,
        this,
        [[0, 6]]
      );
    };
    FetchStreamTransport.prototype.abort = function () {
      __p && __p();
      if (this.$FetchStreamTransport4 || this.$FetchStreamTransport5) return;
      this.$FetchStreamTransport4 = !0;
      this.$FetchStreamTransport5 = !0;
      if (this.$FetchStreamTransport6) {
        var continuation = this.$FetchStreamTransport6;
        continuation(
          function () {
            this.inform('abort');
          }.bind(this)
        );
      } else this.inform('abort');
    };
    module.exports = FetchStreamTransport;
  },
  null
);
__d(
  'HTTPErrors',
  ['emptyFunction'],
  function (a, b, c, d, e, f) {
    a = { get: b('emptyFunction'), getAll: b('emptyFunction') };
    e.exports = a;
  },
  null
);
__d(
  'JSONPTransport',
  ['ArbiterMixin', 'DOM', 'HTML', 'TimeSlice', 'URI', 'mixin'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g,
      h = {},
      i = 2,
      j = 'jsonp',
      k = 'iframe';
    function l(a) {
      delete h[a];
    }
    d = babelHelpers.inherits(c, b('mixin')(b('ArbiterMixin')));
    g = d && d.prototype;
    function c(a, b) {
      g.constructor.call(this),
        (this._type = a),
        (this._uri = b),
        (this._hasResponse = !1),
        (h[this.getID()] = this);
    }
    c.prototype.getID = function () {
      return this._id || (this._id = i++);
    };
    c.prototype.hasFinished = function () {
      return !(this.getID() in h);
    };
    c.prototype.getRequestURI = function () {
      return new (b('URI'))(this._uri).addQueryData({
        __a: 1,
        __adt: this.getID(),
        __req: 'jsonp_' + this.getID(),
      });
    };
    c.prototype.getTransportFrame = function () {
      if (this._iframe) return this._iframe;
      var a = 'transport_frame_' + this.getID();
      a = b('HTML')(
        '<iframe class="hidden_elem" name="' +
          a +
          '" src="javascript:void(0)" />'
      );
      return (this._iframe = b('DOM').appendContent(document.body, a)[0]);
    };
    c.prototype.send = function () {
      this._type === j
        ? setTimeout(
            function () {
              b('DOM').appendContent(
                document.body,
                b('DOM').create('script', {
                  src: this.getRequestURI().toString(),
                  type: 'text/javascript',
                })
              );
            }.bind(this),
            0
          )
        : ((this.getTransportFrame().onload = this._checkForErrors.bind(this)),
          (this.getTransportFrame().src = this.getRequestURI().toString())),
        (this._continuation = b('TimeSlice').getGuardedContinuation(
          'JSONPTransport: waiting for first response'
        ));
    };
    c.prototype.createContinuationForFileForm_DO_NOT_USE = function () {
      this._continuation = b('TimeSlice').getGuardedContinuation(
        'JSONPTransport: waiting for first response'
      );
    };
    c.prototype.handleResponse = function (a) {
      this._continuation(
        function () {
          this.inform('response', a),
            this.hasFinished()
              ? setTimeout(this._cleanup.bind(this), 0)
              : (this._continuation = b('TimeSlice').getGuardedContinuation(
                  'JSONPTransport: waiting for next response'
                ));
        }.bind(this)
      );
    };
    c.prototype.abort = function () {
      if (this._aborted) return;
      this._aborted = !0;
      this._cleanup();
      l(this.getID());
      this.inform('abort');
      this._continuation && b('TimeSlice').cancel(this._continuation);
    };
    c.prototype._checkForErrors = function () {
      this._hasResponse || this.abort();
    };
    c.prototype._cleanup = function () {
      this._iframe && (b('DOM').remove(this._iframe), (this._iframe = null));
    };
    c.respond = function (b, c, d) {
      var e = h[b];
      if (e)
        (e._hasResponse = !0),
          d || l(b),
          e._type == k &&
            (typeof c === 'string'
              ? (c = JSON.parse(c))
              : (c = JSON.parse(JSON.stringify(c)))),
          e.handleResponse(c);
      else {
        e = a.ErrorSignal;
        e &&
          !d &&
          e.logJSError('ajax', {
            error: 'UnexpectedJsonResponse',
            extra: { id: b, uri: (c.payload && c.payload.uri) || '' },
          });
      }
    };
    c.respond = b('TimeSlice').guard(c.respond, 'JSONPTransport.respond', {
      root: !0,
    });
    e.exports = c;
  },
  null
);
__d(
  'bind',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a, b) {
      __p && __p();
      var c = Array.prototype.slice.call(arguments, 2);
      if (typeof b !== 'string')
        return Function.prototype.bind.apply(b, [a].concat(c));
      function d() {
        var d = c.concat(Array.prototype.slice.call(arguments));
        if (a[b]) return a[b].apply(a, d);
      }
      d.toString = function () {
        return 'bound lazily: ' + a[b];
      };
      return d;
    }
    e.exports = a;
  },
  null
);
__d(
  'errorCode',
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      throw new Error(
        'errorCode("' + a + '"): This should not happen. Oh noes!'
      );
    }
    e.exports = a;
  },
  null
);
__d(
  'executeAfter',
  [],
  function (a, b, c, d, e, f) {
    function a(a, b, c) {
      return function () {
        a.apply(c || this, arguments), b.apply(c || this, arguments);
      };
    }
    e.exports = a;
  },
  null
);
__d(
  'FbtNativeTranslations',
  [],
  function (a, b, c, d, e, f) {
    function a(a, b, c) {
      return null;
    }
    function b() {
      return !1;
    }
    e.exports = { getTranslatedPayload: a, isComponentScript: b };
  },
  null
);
__d(
  'FbtNumberType',
  ['IntlNumberTypeConfig', 'IntlVariations'],
  function (a, b, c, d, e, f) {
    a = new Function(
      'IntlVariations',
      '"use strict"; return (function(n) {' +
        b('IntlNumberTypeConfig').impl +
        '});'
    )(b('IntlVariations'));
    e.exports = { getNumberVariationType: a };
  },
  null
);
__d(
  'FbtReactUtil',
  [],
  function (a, b, c, d, e, f) {
    a =
      (typeof Symbol === 'function' &&
        Symbol['for'] &&
        Symbol['for']('react.element')) ||
      60103;
    var g = !1;
    b = {
      REACT_ELEMENT_TYPE: a,
      defineProperty: function (a, b, c) {
        g
          ? Object.defineProperty(a, b, {
              configurable: !1,
              enumerable: !1,
              writable: !1,
              value: c,
            })
          : (a[b] = c);
      },
    };
    e.exports = b;
  },
  null
);
__d(
  'FbtResult',
  ['FbtReactUtil', 'FbtResultBase'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g;
    c = function (a) {
      return a.content;
    };
    d = babelHelpers.inherits(a, b('FbtResultBase'));
    g = d && d.prototype;
    function a(a) {
      g.constructor.call(this, a),
        (this.key = null),
        (this.ref = null),
        (this.props = { content: a });
    }
    a.prototype.type = c;
    a.prototype.$$typeof = b('FbtReactUtil').REACT_ELEMENT_TYPE;
    e.exports = a;
  },
  null
);
__d(
  'InlineFbtResult',
  ['cx', 'FbtReactUtil', 'FbtResultBase'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h;
    function i(a, c, d, e) {
      var f = '_4qba';
      e &&
        (c === 'TRANSLATION'
          ? (f = '_4qbb')
          : c === 'APPROVE'
          ? (f = '_4qbc')
          : c === 'REPORT' && (f = '_4qbd'));
      return {
        $$typeof: b('FbtReactUtil').REACT_ELEMENT_TYPE,
        type: 'em',
        key: null,
        ref: null,
        props: {
          className: f,
          'data-intl-hash': e,
          'data-intl-translation': d,
          'data-intl-trid': '',
          children: a,
          suppressHydrationWarning: !0,
        },
        _owner: null,
      };
    }
    c = function (a) {
      return i(a.content, a.inlineMode, a.translation, a.hash);
    };
    d = babelHelpers.inherits(a, b('FbtResultBase'));
    h = d && d.prototype;
    function a(a, b, c, d) {
      h.constructor.call(this, a),
        (this.key = null),
        (this.ref = null),
        (this.props = { content: a, inlineMode: b, translation: c, hash: d });
    }
    a.prototype.type = c;
    a.prototype.$$typeof = b('FbtReactUtil').REACT_ELEMENT_TYPE;
    e.exports = a;
  },
  null
);
__d(
  'escapeRegex',
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      return a.replace(/([.?*+\^$\[\]\\(){}|\-])/g, '\\$1');
    }
    e.exports = a;
  },
  null
);
__d(
  'intlNumUtils',
  ['NumberFormatConfig', 'escapeRegex'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = 3;
    f = [
      '\u0433\u0440\u043d.',
      '\u0434\u0435\u043d.',
      '\u043b\u0432.',
      '\u043c\u0430\u043d.',
      '\u0564\u0580.',
      '\u062c.\u0645.',
      '\u062f.\u0625.',
      '\u062f.\u0627.',
      '\u062f.\u0628.',
      '\u062f.\u062a.',
      '\u062f.\u062c.',
      '\u062f.\u0639.',
      '\u062f.\u0643.',
      '\u062f.\u0644.',
      '\u062f.\u0645.',
      '\u0631.\u0633.',
      '\u0631.\u0639.',
      '\u0631.\u0642.',
      '\u0631.\u064a.',
      '\u0644.\u0633.',
      '\u0644.\u0644.',
      '\u0783.',
      'B/.',
      'Bs.',
      'Fr.',
      'kr.',
      'L.',
      'p.',
      'S/.',
    ];
    var h = {};
    function i(a) {
      h[a] || (h[a] = new RegExp(a, 'i'));
      return h[a];
    }
    var j = i(
      f.reduce(function (a, c, d) {
        return a + (d ? '|' : '') + '(' + b('escapeRegex')(c) + ')';
      }, '')
    );
    function k(a, c, d, e, f, h, j) {
      __p && __p();
      d = d || '';
      e = e || '.';
      f = f || 0;
      h = h || { primaryGroupSize: g, secondaryGroupSize: g };
      var k = h.primaryGroupSize || g;
      h = h.secondaryGroupSize || k;
      j = j && j.digits;
      c === undefined || c === null
        ? (a = a.toString())
        : typeof a === 'string'
        ? (a = p(a, c))
        : (a = n(a, c));
      c = a.toString().split('.');
      a = c[0];
      c = c[1];
      if (Math.abs(parseInt(a, 10)).toString().length >= f) {
        f = '$1' + d + '$2$3';
        k = '(\\d)(\\d{' + (k - 0) + '})($|\\D)';
        k = a.replace(i(k), f);
        if (k != a) {
          a = k;
          h = '(\\d)(\\d{' + (h - 0) + '})(' + b('escapeRegex')(d) + ')';
          d = i(h);
          while ((k = a.replace(d, f)) != a) a = k;
        }
      }
      j && ((a = l(a, j)), (c = c && l(c, j)));
      h = a;
      c && (h += e + c);
      return h;
    }
    function l(a, b) {
      var c = '';
      for (var d = 0; d < a.length; ++d) {
        var e = b[a.charCodeAt(d) - 48];
        c += e !== undefined ? e : a[d];
      }
      return c;
    }
    function a(a, c) {
      return k(
        a,
        c,
        '',
        b('NumberFormatConfig').decimalSeparator,
        b('NumberFormatConfig').minDigitsForThousandsSeparator,
        b('NumberFormatConfig').standardDecimalPatternInfo,
        b('NumberFormatConfig').numberingSystemData
      );
    }
    function m(a, c) {
      return k(
        a,
        c,
        b('NumberFormatConfig').numberDelimiter,
        b('NumberFormatConfig').decimalSeparator,
        b('NumberFormatConfig').minDigitsForThousandsSeparator,
        b('NumberFormatConfig').standardDecimalPatternInfo,
        b('NumberFormatConfig').numberingSystemData
      );
    }
    function c(a, b, c) {
      var d = Math.floor(Math.log(a) / Math.LN10),
        e = a;
      d < c && (e = a * Math.pow(10, -d + c));
      a = Math.pow(10, Math.floor(Math.log(e) / Math.LN10) - c + 1);
      e = Math.round(e / a) * a;
      d < c && (e /= Math.pow(10, -d + c));
      return m(e, b);
    }
    function n(a, b) {
      __p && __p();
      b = b == null ? 0 : b;
      var c = Math.pow(10, b);
      a = a;
      a = Math.round(a * c) / c;
      a = a + '';
      if (!b) return a;
      if (a.indexOf('e-') !== -1) return a;
      c = a.indexOf('.');
      var d;
      c == -1 ? ((a += '.'), (d = b)) : (d = b - (a.length - c - 1));
      for (var b = 0, c = d; b < c; b++) a += '0';
      return a;
    }
    var o = function (a, b) {
      for (var c = 0; c < b; c++) a += '0';
      return a;
    };
    function p(a, b) {
      var c = a.indexOf('.'),
        d = c === -1 ? a : a.slice(0, c);
      a = c === -1 ? '' : a.slice(c + 1);
      return b ? d + '.' + o(a.slice(0, b), b - a.length) : d;
    }
    var q = {};
    (function (a) {
      q[a] ||
        (q[a] = new RegExp(
          '([^\\/p]|^)' + b('escapeRegex')(a) + '(\\d*).*',
          'i'
        ));
      return q[a];
    });
    function r(a, c, d) {
      __p && __p();
      var e = t();
      e &&
        (a = a
          .split('')
          .map(function (a) {
            return e[a] || a;
          })
          .join('')
          .trim());
      a = a.replace(/^[^\d]*\-/, '\x02');
      a = a.replace(j, '');
      d = d || '';
      c = b('escapeRegex')(c);
      d = b('escapeRegex')(d);
      var f = i('^[^\\d]*\\d.*' + c + '.*\\d[^\\d]*$');
      if (!f.test(a)) {
        f = i('(^[^\\d]*)' + c + '(\\d*[^\\d]*$)');
        if (f.test(a)) {
          a = a.replace(f, '$1\x01$2');
          return s(a);
        }
        f = i('^[^\\d]*[\\d ' + b('escapeRegex')(d) + ']*[^\\d]*$');
        f.test(a) || (a = '');
        return s(a);
      }
      f = i('(^[^\\d]*[\\d ' + d + ']*)' + c + '(\\d*[^\\d]*$)');
      a = f.test(a) ? a.replace(f, '$1\x01$2') : '';
      return s(a);
    }
    function s(a) {
      a = a
        .replace(/[^0-9\u0001\u0002]/g, '')
        .replace('\x01', '.')
        .replace('\x02', '-');
      var b = Number(a);
      return a === '' || isNaN(b) ? null : b;
    }
    function t() {
      var a = {},
        c =
          b('NumberFormatConfig').numberingSystemData &&
          b('NumberFormatConfig').numberingSystemData.digits;
      if (!c) return null;
      for (var d = 0; d < c.length; d++) a[c.charAt(d)] = d.toString();
      return a;
    }
    function d(a) {
      return r(
        a,
        b('NumberFormatConfig').decimalSeparator || '.',
        b('NumberFormatConfig').numberDelimiter
      );
    }
    var u = {
      formatNumber: a,
      formatNumberRaw: k,
      formatNumberWithThousandDelimiters: m,
      formatNumberWithLimitedSigFig: c,
      parseNumber: d,
      parseNumberRaw: r,
      truncateLongNumber: p,
      getFloatString: function (a, b, c) {
        a = String(a);
        a = a.split('.');
        b = u.getIntegerString(a[0], b);
        return a.length === 1 ? b : b + c + a[1];
      },
      getIntegerString: function (a, b) {
        b === '' && (b = ',');
        a = String(a);
        var c = /(\d+)(\d{3})/;
        while (c.test(a)) a = a.replace(c, '$1' + b + '$2');
        return a;
      },
    };
    e.exports = u;
  },
  null
);
__d(
  'IntlPunctuation',
  ['IntlPhonologicalRules'],
  function (a, b, c, d, e, f) {
    __p && __p();
    d = '[.!?\u3002\uff01\uff1f\u0964\u2026\u0eaf\u1801\u0e2f\uff0e]';
    var g = new RegExp(
        d +
          '[)"\'\xbb\u0f3b\u0f3d\u2019\u201d\u203a\u3009\u300b\u300d\u300f\u3011\u3015\u3017\u3019\u301b\u301e\u301f\ufd3f\uff07\uff09\uff3d\\s]*$'
      ),
      h = [];
    for (var i in b('IntlPhonologicalRules').patterns) {
      f = b('IntlPhonologicalRules').patterns[i];
      for (var j in b('IntlPhonologicalRules').meta) {
        var k = new RegExp(j.slice(1, -1), 'g'),
          l = b('IntlPhonologicalRules').meta[j];
        i = i.replace(k, l);
        f = f.replace(k, l);
      }
      f === 'javascript' &&
        (f = function (a) {
          return a.slice(1).toLowerCase();
        });
      h.push([new RegExp(i.slice(1, -1), 'g'), f]);
    }
    function a(a) {
      var b = h;
      for (var c = 0; c < b.length; c++) {
        var d = b[c],
          e = d[0];
        d = d[1];
        a = a.replace(e, d);
      }
      return a.replace(/\x01/g, '');
    }
    function c(a) {
      return typeof a !== 'string' ? !1 : g.test(a);
    }
    e.exports = {
      PUNCT_CHAR_CLASS: d,
      endsInPunct: c,
      applyPhonologicalRules: a,
    };
  },
  null
);
__d(
  'substituteTokens',
  ['invariant', 'IntlPunctuation'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h = new RegExp(
      '\\{([^}]+)\\}(' + b('IntlPunctuation').PUNCT_CHAR_CLASS + '*)',
      'g'
    );
    function i(a) {
      return a;
    }
    function a(a, c) {
      __p && __p();
      var d = c;
      if (!d) return a;
      typeof d === 'object' || g(0, undefined, a);
      var e = [],
        f = [];
      c = a
        .replace(h, function (a, c, g) {
          a = d[c];
          if (a && typeof a === 'object') {
            e.push(a);
            f.push(c);
            return '\x17' + g;
          } else if (a === null) return '';
          return a + (b('IntlPunctuation').endsInPunct(a) ? '' : g);
        })
        .split('\x17')
        .map(b('IntlPunctuation').applyPhonologicalRules);
      if (c.length === 1) return c[0];
      a = [c[0]];
      for (var j = 0; j < e.length; j++) a.push(i(e[j]), c[j + 1]);
      return a;
    }
    e.exports = a;
  },
  null
);
__d(
  'fbt',
  [
    'invariant',
    'Banzai',
    'FbtLogger',
    'FbtNumberType',
    'FbtQTOverrides',
    'FbtResult',
    'FbtResultGK',
    'GenderConst',
    'FbtNativeTranslations',
    'InlineFbtResult',
    'IntlHoldoutGK',
    'IntlVariations',
    'IntlViewerContext',
    'intlNumUtils',
    'substituteTokens',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h = b('FbtLogger').logger,
      i = b('FbtQTOverrides').overrides,
      j = b('FbtNativeTranslations').getTranslatedPayload,
      k = b('FbtNativeTranslations').isComponentScript,
      l = !1,
      m = { INDEX: 0, SUBSTITUTION: 1 },
      n = { NUMBER: 0, GENDER: 1 },
      o = { OBJECT: 0, POSSESSIVE: 1, REFLEXIVE: 2, SUBJECT: 3 },
      p = '_1',
      q = {},
      r = function () {};
    r._ = function (a, c, d) {
      __p && __p();
      if (d && (d.hk || d.ehk)) {
        if (l) return { text: a, fbt: !0, hashKey: d.hk };
        d = j(d.hk, d.ehk, c) || { table: a, args: c };
        a = d.table;
        c = d.args;
      }
      d = {};
      var e = a;
      a.__vcg &&
        ((c = c || []),
        c.unshift([[b('IntlViewerContext').GENDER, '*'], null]));
      c && ((e = this._accessTable(a, d, c, 0)), e !== null || g(0, undefined));
      a = e;
      c = null;
      var f = k()
        ? '\nNote: Certain fbt constructs such as fbt.plural() and the third positional `variations` argument to fbt.param() are currently disallowed'
        : '';
      typeof e === 'string' ||
        Array.isArray(e) ||
        g(0, undefined, JSON.stringify(e), f);
      if (Array.isArray(e)) {
        a = e[0];
        c = e[1];
        f = '1_' + c;
        a = i[f] || a;
        i[f] && r.logQTImpression(c);
        r.logImpression(c);
      }
      e = q[a];
      f = this._hasKeys(d);
      if (e && !f) return e;
      else {
        e = b('substituteTokens')(a, d);
        d = v(e, a, c);
        f || (q[a] = d);
        return d;
      }
    };
    r._hasKeys = function (a) {
      for (var b in a) return !0;
      return !1;
    };
    r._accessTable = function (a, b, c, d) {
      __p && __p();
      if (d >= c.length) return a;
      else if (a == null) return null;
      var e = null,
        f = c[d],
        g = f[m.INDEX];
      if (Array.isArray(g))
        for (var h = 0; h < g.length; ++h) {
          var i = a[g[h]];
          e = this._accessTable(i, b, c, d + 1);
          if (e != null) break;
        }
      else (a = g !== null ? a[g] : a), (e = this._accessTable(a, b, c, d + 1));
      e != null && Object.assign(b, f[m.SUBSTITUTION]);
      return e;
    };
    function s(a) {
      if (b('IntlHoldoutGK').inIntlHoldout) return a === 1 ? [p, '*'] : ['*'];
      var c = b('FbtNumberType').getNumberVariationType(a);
      c & b('IntlVariations').BITMASK_NUMBER || g(0, undefined);
      return a === 1 ? [p, c, '*'] : [c, '*'];
    }
    function t(a) {
      if (b('IntlHoldoutGK').inIntlHoldout) return ['*'];
      a & b('IntlVariations').BITMASK_GENDER || g(0, undefined);
      return [a, '*'];
    }
    r._enum = function (a, b) {
      return Object.assign([a, null], { _enum: !0 });
    };
    r._subject = function (a) {
      return [t(a), null];
    };
    r._param = function (a, c, d) {
      __p && __p();
      var e = null,
        f = !1;
      if (d)
        if (d[0] === n.NUMBER) {
          var h = d.length > 1 ? d[1] : c;
          typeof h === 'number' || g(0, undefined);
          e = s(h);
          f = !0;
        } else
          d[0] === n.GENDER
            ? (d.length > 1 || g(0, undefined), (e = t(d[1])))
            : g(0, undefined);
      h = {};
      h[a] =
        f && typeof c === 'number'
          ? b('intlNumUtils').formatNumberWithThousandDelimiters(c)
          : c;
      return [e, h];
    };
    r._plural = function (a, c, d) {
      var e = s(a),
        f = {};
      c &&
        (typeof d === 'number'
          ? (f[c] = b('intlNumUtils').formatNumberWithThousandDelimiters(d))
          : (f[c] =
              d || b('intlNumUtils').formatNumberWithThousandDelimiters(a)));
      return [e, f];
    };
    r._pronoun = function (a, c, d) {
      c !== b('GenderConst').NOT_A_PERSON || !d || !d.human || g(0, undefined);
      d = u(a, c);
      return [[d, '*'], null];
    };
    function u(a, c) {
      switch (c) {
        case b('GenderConst').NOT_A_PERSON:
          return a === o.OBJECT || a === o.REFLEXIVE
            ? b('GenderConst').NOT_A_PERSON
            : b('GenderConst').UNKNOWN_PLURAL;
        case b('GenderConst').FEMALE_SINGULAR:
        case b('GenderConst').FEMALE_SINGULAR_GUESS:
          return b('GenderConst').FEMALE_SINGULAR;
        case b('GenderConst').MALE_SINGULAR:
        case b('GenderConst').MALE_SINGULAR_GUESS:
          return b('GenderConst').MALE_SINGULAR;
        case b('GenderConst').MIXED_SINGULAR:
        case b('GenderConst').FEMALE_PLURAL:
        case b('GenderConst').MALE_PLURAL:
        case b('GenderConst').NEUTER_PLURAL:
        case b('GenderConst').UNKNOWN_PLURAL:
          return b('GenderConst').UNKNOWN_PLURAL;
        case b('GenderConst').NEUTER_SINGULAR:
        case b('GenderConst').UNKNOWN_SINGULAR:
          return a === o.REFLEXIVE
            ? b('GenderConst').NOT_A_PERSON
            : b('GenderConst').UNKNOWN_PLURAL;
      }
      return b('GenderConst').NOT_A_PERSON;
    }
    r._name = function (a, b, c) {
      c = t(c);
      var d = {};
      d[a] = b;
      return [c, d];
    };
    r.logImpression = function (a) {
      h && h.logImpression(a);
      return a;
    };
    r.logQTImpression = function (a) {
      b('Banzai').post('intl_qt_event', { hash: a });
      return a;
    };
    function v(a, c, d) {
      if (
        !b('FbtResultGK').shouldReturnFbtResult &&
        b('FbtResultGK').inlineMode !== 'REPORT'
      )
        return a;
      a = typeof a === 'string' ? [a] : a;
      return b('FbtResultGK').inlineMode &&
        b('FbtResultGK').inlineMode !== 'NO_INLINE'
        ? new (b('InlineFbtResult'))(a, b('FbtResultGK').inlineMode, c, d)
        : new (b('FbtResult'))(a);
    }
    r.enableJsonExportMode = function () {
      l = !0;
    };
    r.disableJsonExportMode = function () {
      l = !1;
    };
    e.exports = r;
  },
  null
);
__d(
  'isWorkplaceDotComURI',
  [],
  function (a, b, c, d, e, f) {
    var g = new RegExp('(^|\\.)workplace\\.com$', 'i');
    function a(a) {
      return a.getProtocol() === 'https' && g.test(a.getDomain());
    }
    e.exports = a;
  },
  null
);
__d(
  'AsyncRequest',
  [
    'errorCode',
    'fbt',
    'invariant',
    'ix',
    'Promise',
    'Arbiter',
    'ArtilleryAsyncRequestTracingAnnotator',
    'AsyncDOM',
    'AsyncRequestConfig',
    'AsyncResponse',
    'Bootloader',
    'CSS',
    'Deferred',
    'DTSG',
    'DTSG_ASYNC',
    'Env',
    'ErrorUtils',
    'Event',
    'FBLogger',
    'FetchStreamTransport',
    'HTTPErrors',
    'JSCC',
    'Parent',
    'PHPQuerySerializer',
    'PixelRatioConst',
    'ProfilingCounters',
    'ResourceTimingsStore',
    'ResourceTypes',
    'ServerJS',
    'SessionName',
    'TimeSlice',
    'URI',
    'UserAgent_DEPRECATED',
    'WebPixelRatio',
    'ZeroRewrites',
    'bind',
    'bx',
    'clearTimeout',
    'emptyFunction',
    'evalGlobal',
    'executeAfter',
    'ge',
    'getAsyncHeaders',
    'getAsyncParams',
    'gkx',
    'goURI',
    'ifRequired',
    'isBonfireURI',
    'isEmpty',
    'isFacebookURI',
    'isMessengerDotComURI',
    'isWorkplaceDotComURI',
    'killswitch',
    'promiseDone',
    'qex',
    'replaceTransportMarkers',
    'setTimeout',
    'setTimeoutAcrossTransitions',
  ],
  function $module_AsyncRequest(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
    errorCode,
    fbt,
    invariant,
    ix
  ) {
    __p && __p();
    var nineteenSecInMs = 19e3;
    function hasUnloaded() {
      try {
        return !window.domready;
      } catch (_unused) {
        return !0;
      }
    }
    function supportsUploadProgress(transport) {
      return 'upload' in transport && 'onprogress' in transport.upload;
    }
    function supportsCrossOrigin(transport) {
      return 'withCredentials' in transport;
    }
    function isNetworkError(transport) {
      return (
        transport.status in { 0: 1, 12029: 1, 12030: 1, 12031: 1, 12152: 1 }
      );
    }
    function validateResponseHandler(handler) {
      var valid = !handler || typeof handler === 'function';
      valid ||
        require('FBLogger')('asyncresponse').mustfix(
          'AsyncRequest response handlers must be functions. Pass a function, or use bind() to build one.'
        );
      return valid;
    }
    var last_id = 2,
      id_threshold = last_id;
    require('Arbiter').subscribe('page_transition', function (_, message) {
      id_threshold = message.id;
    });
    function AsyncRequest(uri) {
      __p && __p();
      (this._allowIrrelevantRequests = !1),
        (this._delayPreDisplayJS = !1),
        (this._shouldReplaceTransportMarkers = require('gkx')(
          'AT5Memmu70UpIS1xI3COUT3lBXzz0iUY-TObKzqdfQ0mqqF7VWsxqMFktNJB3nlXh6uBge6Yp5VEZXjYuakRkhRV8mqhGab4muDzekdMtZuu2w'
        )),
        (this._dispatchErrorResponse = function (asyncResponse, errorHandler) {
          __p && __p();
          var error = asyncResponse.getError();
          this.clearStatusIndicator();
          if (!this._isRelevant() || error === 1010) {
            !1;
            this.abort();
            return;
          }
          if (this._isServerDialogErrorCode(error)) {
            var is_confirmation = error == 1357008 || error == 1357007;
            this.interceptHandler(asyncResponse);
            error == 1357041
              ? this._solveQuicksandChallenge(asyncResponse)
              : error == 1357007
              ? this._displayServerDialog(asyncResponse, is_confirmation, !0)
              : this._displayServerDialog(asyncResponse, is_confirmation);
          } else if (this.initialHandler(asyncResponse) !== !1) {
            require('clearTimeout')(this.timer);
            try {
              errorHandler(asyncResponse);
            } catch (e) {
              this.finallyHandler(asyncResponse);
              throw e;
            }
            this.finallyHandler(asyncResponse);
          }
        }.bind(this)),
        (this._onStateChange = function () {
          __p && __p();
          var transport = this.transport;
          if (!transport) return;
          try {
            AsyncRequest._inflightCount--;
            require('ResourceTimingsStore').measureResponseReceived(
              require('ResourceTypes').XHR,
              this.resourceTimingStoreUID
            );
            try {
              typeof transport.getResponseHeader !== 'undefined' &&
                transport.getResponseHeader('X-FB-Debug') &&
                (this._xFbServer = transport.getResponseHeader('X-FB-Debug'));
            } catch (_unused2) {}
            if (transport.status >= 200 && transport.status < 300)
              (AsyncRequest.lastSuccessTime = Date.now()),
                this._handleXHRResponse(transport);
            else if (
              require('UserAgent_DEPRECATED').webkit() &&
              typeof transport.status === 'undefined'
            )
              this._invokeErrorHandler(1002);
            else if (
              require('AsyncRequestConfig').retryOnNetworkError &&
              isNetworkError(transport) &&
              this.remainingRetries > 0 &&
              !this._requestTimeout
            ) {
              this.remainingRetries--;
              delete this.transport;
              this.send(!0);
              return;
            } else this._invokeErrorHandler();
            this.getOption('asynchronous_DEPRECATED') !== !1 &&
              delete this.transport;
          } catch (exception) {
            if (hasUnloaded()) return;
            delete this.transport;
            this.remainingRetries > 0
              ? (this.remainingRetries--, this.send(!0))
              : (this.getOption('suppressErrorAlerts') ||
                  require('FBLogger')('AsyncRequest')
                    .catching(exception)
                    .mustfix(
                      'AsyncRequest exception when attempting to handle a state change'
                    ),
                this._invokeErrorHandler(1007));
          }
        }.bind(this)),
        (this.continuation =
          require('TimeSlice').getPlaceholderReusableContinuation()),
        (this.transport = null),
        (this.method = 'POST'),
        (this.uri = ''),
        (this.timeout = null),
        (this.timer = null),
        (this.initialHandler = require('emptyFunction')),
        (this.handler = null),
        (this.uploadProgressHandler = null),
        (this.errorHandler = require('AsyncResponse').defaultErrorHandler),
        (this.transportErrorHandler = null),
        (this.timeoutHandler = null),
        (this.interceptHandler = require('emptyFunction')),
        (this.finallyHandler = require('emptyFunction')),
        (this.abortHandler = require('emptyFunction')),
        (this.serverDialogCancelHandler = null),
        (this.relativeTo = null),
        (this.statusElement = null),
        (this.statusClass = ''),
        (this.data = {}),
        (this.headers = {}),
        (this.file = null),
        (this.context = {}),
        (this.readOnly = !1),
        (this.writeRequiredParams = []),
        (this.remainingRetries = 0),
        (this.userActionID = '-'),
        (this.logErrorsEnabled = require('AsyncRequestConfig').logAsyncRequest),
        (this.allowInteractionServerTracing = !0),
        (this.resourceTimingStoreUID = require('ResourceTimingsStore').getUID(
          require('ResourceTypes').XHR,
          uri != null ? uri.toString() : ''
        )),
        (this._warningList = [500, 1010, 1004]),
        (this.option = {
          asynchronous_DEPRECATED: !0,
          suppressErrorHandlerWarning: !1,
          suppressEvaluation: !1,
          suppressErrorAlerts: !1,
          retries: 0,
          jsonp: !1,
          bundle: !1,
          useIframeTransport: !1,
          handleErrorAfterUnload: !1,
          useFetchWithIframeFallback: !1,
        }),
        (this.transportErrorHandler = require('bind')(this, 'errorHandler')),
        uri !== undefined && this.setURI(uri),
        this.setAllowCrossPageTransition(
          require('AsyncRequestConfig')
            .asyncRequestsSurviveTransitionsDefault || !1
        );
    }
    AsyncRequest.prototype._dispatchResponse = function (asyncResponse) {
      __p && __p();
      this.clearStatusIndicator();
      if (!this._isRelevant()) {
        this._invokeErrorHandler(1010);
        return;
      }
      if (this.initialHandler(asyncResponse) === !1) return;
      require('clearTimeout')(this.timer);
      if (asyncResponse.jscc_map) {
        var jsccMap = require('JSCC').parse(asyncResponse.jscc_map);
        require('JSCC').init(jsccMap);
      }
      var suppress_js,
        handler = this.getHandler();
      if (handler)
        try {
          suppress_js = this._shouldSuppressJS(handler(asyncResponse));
        } catch (e) {
          asyncResponse.is_last && this.finallyHandler(asyncResponse);
          throw e;
        }
      suppress_js || this._handleJSResponse(asyncResponse);
      asyncResponse.is_last && this.finallyHandler(asyncResponse);
    };
    AsyncRequest.prototype._shouldSuppressJS = function (handler_return_value) {
      return handler_return_value === AsyncRequest.suppressOnloadToken;
    };
    AsyncRequest.prototype._handlePreDisplayServerJS = function (
      serverJS,
      preDisplayJSMods
    ) {
      __p && __p();
      var _displayStarted = !1,
        preDisplayPromises = [],
        registerToBlockDisplayUntilDone_DONOTUSE =
          function registerToBlockDisplayUntilDone_DONOTUSE() {
            if (_displayStarted) {
              require('FBLogger')('AsyncResponse').warn(
                'registerToBlockDisplayUntilDone_DONOTUSE called after AsyncResponse display started. This is a no-op.'
              );
              return function () {};
            }
            var timeoutId,
              deferrable = new (require('Deferred'))();
            preDisplayPromises.push(deferrable.getPromise());
            return require('TimeSlice').guard(
              function () {
                timeoutId && require('clearTimeout')(timeoutId),
                  deferrable.resolve();
              },
              'AsyncRequestDisplayBlockingEvent',
              {
                propagationType: require('TimeSlice').PropagationType.EXECUTION,
              }
            );
          };
      serverJS.handle(preDisplayJSMods, {
        bigPipeContext: {
          registerToBlockDisplayUntilDone_DONOTUSE:
            registerToBlockDisplayUntilDone_DONOTUSE,
        },
      });
      _displayStarted = !0;
      return preDisplayPromises;
    };
    AsyncRequest.prototype._hasEvalDomOp = function (domOps) {
      return domOps && domOps.length
        ? domOps.some(function (op) {
            return op[0] === 'eval';
          })
        : !1;
    };
    AsyncRequest.prototype._handleJSResponse = function (asyncResponse) {
      __p && __p();
      var relativeTo = this.getRelativeTo(),
        domOps = asyncResponse.domops,
        dtsgToken = asyncResponse.dtsgToken,
        dtsgAsyncGetToken = asyncResponse.dtsgAsyncGetToken,
        jsMods = asyncResponse.jsmods,
        serverJS,
        savedServerJSInstance = asyncResponse.savedServerJSInstance;
      savedServerJSInstance &&
      savedServerJSInstance instanceof require('ServerJS')
        ? (serverJS = savedServerJSInstance)
        : (serverJS = new (require('ServerJS'))());
      serverJS.setRelativeTo(relativeTo);
      if (jsMods) {
        var preDisplayJSMods = {};
        preDisplayJSMods.define = jsMods.define;
        preDisplayJSMods.instances = jsMods.instances;
        preDisplayJSMods.markup = jsMods.markup;
        delete jsMods.define;
        delete jsMods.instances;
        delete jsMods.markup;
        this._hasEvalDomOp(domOps) &&
          ((preDisplayJSMods.elements = jsMods.elements),
          delete jsMods.elements);
        serverJS.handle(preDisplayJSMods);
      }
      dtsgToken && require('DTSG').setToken(dtsgToken);
      dtsgAsyncGetToken && require('DTSG_ASYNC').setToken(dtsgAsyncGetToken);
      domOps && require('AsyncDOM').invoke(domOps, relativeTo);
      jsMods && serverJS.handle(jsMods);
      this._handleJSRegisters(asyncResponse, 'onload');
      this._handleJSRegisters(asyncResponse, 'onafterload');
    };
    AsyncRequest.prototype._handleJSRegisters = function (
      asyncResponse,
      phase
    ) {
      var registers = asyncResponse[phase];
      if (registers)
        for (var ii = 0; ii < registers.length; ii++)
          require('ErrorUtils').applyWithGuard(
            new Function(registers[ii]),
            this
          );
    };
    AsyncRequest.prototype.invokeResponseHandler = function (interpreted) {
      __p && __p();
      if (typeof interpreted.redirect !== 'undefined') {
        require('setTimeout')(
          function () {
            this.setURI(interpreted.redirect).send();
          }.bind(this),
          0
        );
        return;
      }
      if (interpreted.bootloadOnly !== undefined) {
        var toBootload =
            typeof interpreted.bootloadOnly === 'string'
              ? JSON.parse(interpreted.bootloadOnly)
              : interpreted.bootloadOnly,
          _loop = function _loop() {
            __p && __p();
            if (_isArray) {
              if (_i >= _iterator.length) return 'break';
              _ref = _iterator[_i++];
            } else {
              _i = _iterator.next();
              if (_i.done) return 'break';
              _ref = _i.value;
            }
            var rsrcs = _ref;
            require('TimeSlice').guard(
              function () {
                require('Bootloader').loadPredictedResourceMap(rsrcs);
              },
              'Bootloader.loadPredictedResourceMap',
              { root: !0 }
            )();
          };
        for (
          var _iterator = toBootload,
            _isArray = Array.isArray(_iterator),
            _i = 0,
            _iterator = _isArray
              ? _iterator
              : _iterator[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var _ref,
            _ret = _loop();
          if (_ret === 'break') break;
        }
        return;
      }
      if (
        !this.handler &&
        !this.errorHandler &&
        !this.transportErrorHandler &&
        !this.preBootloadHandler &&
        this.initialHandler === require('emptyFunction') &&
        this.finallyHandler === require('emptyFunction')
      )
        return;
      var response = interpreted.asyncResponse;
      if (typeof response !== 'undefined') {
        this._artilleryHandle != null && this._artilleryHandle(response);
        if (!this._isRelevant()) {
          this._invokeErrorHandler(1010);
          return;
        }
        response.inlinejs && require('evalGlobal')(response.inlinejs);
        response.lid &&
          ((this._responseTime = Date.now()),
          global.CavalryLogger &&
            (this.cavalry = global.CavalryLogger.getInstance(response.lid)),
          (this.lid = response.lid));
        ix.add(response.ixData);
        require('bx').add(response.bxData);
        require('gkx').add(response.gkxData);
        require('qex').add(response.qexData);
        response.resource_map &&
          require('Bootloader').setResourceMap(response.resource_map);
        response.bootloadable &&
          require('Bootloader').enableBootload(response.bootloadable);
        var dispatch, arbiter_event;
        if (response.getError() && !response.getErrorIsWarning()) {
          var handler = this.getErrorHandler().bind(this);
          dispatch = require('ErrorUtils').guard(
            this._dispatchErrorResponse,
            'AsyncRequest#_dispatchErrorResponse for ' + this.getURI()
          );
          dispatch = dispatch.bind(this, response, handler);
          this._logError(response);
          arbiter_event = 'error';
        } else {
          dispatch = require('ErrorUtils').guard(
            this._dispatchResponse.bind(this),
            'AsyncRequest#_dispatchResponse for ' + this.getURI()
          );
          dispatch = dispatch.bind(this, response);
          arbiter_event = 'response';
          var domOps = response.domops;
          if (
            !this._delayPreDisplayJS &&
            response.jsmods &&
            response.jsmods.pre_display_requires &&
            !this._hasEvalDomOp(domOps) &&
            !require('killswitch')(
              'ASYNC_REQUEST_EARLY_RENDERING_OF_PREDISPLAY_PRIORITY_JS'
            )
          ) {
            var jsMods = response.jsmods,
              preDisplayJSMods = {};
            preDisplayJSMods.define = jsMods.define;
            preDisplayJSMods.instances = jsMods.instances;
            preDisplayJSMods.markup = jsMods.markup;
            delete jsMods.define;
            delete jsMods.instances;
            delete jsMods.markup;
            preDisplayJSMods.pre_display_requires = jsMods.pre_display_requires;
            delete jsMods.pre_display_requires;
            var serverJS = new (require('ServerJS'))();
            serverJS.setRelativeTo(this.getRelativeTo());
            response.savedServerJSInstance = serverJS;
            var preDisplayPromises = this._handlePreDisplayServerJS(
              serverJS,
              preDisplayJSMods
            );
            if (preDisplayPromises && preDisplayPromises.length) {
              var realDispatch = dispatch;
              dispatch = function dispatch() {
                require('promiseDone')(
                  require('Promise').all(preDisplayPromises).then(realDispatch)
                );
              };
            }
          }
        }
        dispatch = require('executeAfter')(
          dispatch,
          function () {
            require('Arbiter').inform('AsyncRequest/' + arbiter_event, {
              request: this,
              response: response,
            });
          }.bind(this)
        );
        var replace = !1;
        this.preBootloadHandler &&
          (replace = this.preBootloadHandler(response));
        response.css = response.css || [];
        response.js = response.js || [];
        require('Bootloader').loadResources(
          response.css.concat(response.js),
          require('AsyncRequestConfig').immediateDispatch
            ? dispatch
            : function () {
                require('setTimeout')(dispatch, 0);
              },
          replace,
          this.getURI()
        );
      } else
        typeof interpreted.transportError !== 'undefined'
          ? this._xFbServer
            ? this._invokeErrorHandler(1008)
            : this._invokeErrorHandler(1012)
          : this._invokeErrorHandler(1007);
    };
    AsyncRequest.prototype._logError = function (response) {
      __p && __p();
      if (this.logErrorsEnabled && !this.getOption('suppressErrorAlerts')) {
        var message;
        try {
          message = JSON.stringify(response);
        } catch (_unused3) {
          try {
            message = JSON.stringify({
              error: response.error,
              errorSummary: response.errorSummary,
              errorDescription: response.errorDescription,
            });
          } catch (ex) {
            require('FBLogger')('AsyncRequest')
              .catching(ex)
              .mustfix('Failed to stringify message');
            return;
          }
        }
        require('FBLogger')('asyncresponse').mustfix(
          'Async error response %s',
          message
        );
      }
    };
    AsyncRequest.prototype._invokeErrorHandler = function (explicitError) {
      __p && __p();
      var transport = this.transport;
      if (!transport) return;
      var error;
      if (this.responseText === '') error = 1002;
      else if (this._requestAborted) error = 1011;
      else {
        try {
          error = explicitError || transport.status || 1004;
        } catch (_unused4) {
          error = 1005;
        }
        !1 === navigator.onLine && (error = 1006);
      }
      var desc,
        summary,
        silent = !0;
      if (error === 1006)
        (summary = fbt._('No Network Connection')),
          (desc = fbt._(
            'Your browser appears to be offline. Please check your internet connection and try again.'
          ));
      else if (error >= 300 && error <= 399) {
        summary = fbt._('Redirection');
        desc = fbt._(
          'Your access to Facebook was redirected or blocked by a third party at this time, please contact your ISP or reload.'
        );
        var location = transport.getResponseHeader('Location');
        location && require('goURI')(location, !0);
        silent = !0;
      } else
        (summary = fbt._('Oops')),
          (desc = fbt._(
            "Something went wrong. We're working on getting this fixed as soon as we can. You may be able to try again."
          ));
      var async_response = new (require('AsyncResponse'))(this, transport);
      Object.assign(async_response, {
        error: error,
        errorSummary: summary,
        errorDescription: desc,
        silentError: silent,
      });
      this._logError(async_response);
      require('setTimeout')(
        function () {
          require('Arbiter').inform('AsyncRequest/error', {
            request: this,
            response: async_response,
          });
        }.bind(this),
        0
      );
      if (hasUnloaded() && !this.getOption('handleErrorAfterUnload')) return;
      if (!this.transportErrorHandler) {
        require('FBLogger')('asyncresponse').mustfix(
          'Async request to %s failed with a %d error, but there was no error handler available to deal with it.',
          this.getURI(),
          error
        );
        return;
      }
      var error_handler = this.getTransportErrorHandler().bind(this);
      !(
        this.getOption('suppressErrorAlerts') ||
        this._warningList.indexOf(error) > -1
      )
        ? require('FBLogger')('asyncresponse').mustfix(
            'Async request failed with error %s: %s when requesting %s',
            error,
            desc.toString(),
            this.getURI()
          )
        : this._warningList.indexOf(error) > -1 &&
          require('FBLogger')('asyncresponse').warn(
            'Async request failed with error %s: %s when requesting %s',
            error,
            desc.toString(),
            this.getURI()
          );
      require('ErrorUtils').applyWithGuard(this._dispatchErrorResponse, this, [
        async_response,
        error_handler,
      ]);
    };
    AsyncRequest.prototype._isServerDialogErrorCode = function (error) {
      return (
        error == 1357008 ||
        error == 1357007 ||
        error == 1357041 ||
        error == 1442002 ||
        error == 1357001
      );
    };
    AsyncRequest.prototype._solveQuicksandChallenge = function (
      async_response
    ) {
      var payload = async_response.getPayload();
      require('Bootloader').loadModules(
        ['QuickSandSolver'],
        function (QuickSandSolver) {
          QuickSandSolver.solveAndSendRequestBack(this, payload);
        }.bind(this),
        'AsyncRequest'
      );
    };
    AsyncRequest.prototype._displayServerDialog = function (
      async_response,
      is_confirmation,
      allow_get
    ) {
      __p && __p();
      allow_get === void 0 && (allow_get = !1);
      var payload = async_response.getPayload();
      if (payload.__dialog !== undefined) {
        this._displayServerLegacyDialog(async_response, is_confirmation);
        return;
      }
      var json = payload.__dialogx;
      new (require('ServerJS'))().handle(json);
      require('Bootloader').loadModules(
        ['ConfirmationDialog'],
        function (ConfirmationDialog) {
          ConfirmationDialog.setupConfirmation(async_response, this, allow_get);
        }.bind(this),
        'AsyncRequest'
      );
    };
    AsyncRequest.prototype._displayServerLegacyDialog = function (
      async_response,
      is_confirmation
    ) {
      __p && __p();
      var model = async_response.getPayload().__dialog;
      require('Bootloader').loadModules(
        ['Dialog'],
        function (Dialog) {
          var dialog = new Dialog(model);
          is_confirmation &&
            dialog.setHandler(
              this._displayConfirmationHandler.bind(this, dialog)
            );
          dialog
            .setCancelHandler(
              function () {
                var handler = this.getServerDialogCancelHandler();
                try {
                  handler && handler(async_response);
                } catch (e) {
                  throw e;
                } finally {
                  this.finallyHandler(async_response);
                }
              }.bind(this)
            )
            .setCausalElement(this.relativeTo)
            .show();
        }.bind(this),
        'AsyncRequest'
      );
    };
    AsyncRequest.prototype._displayConfirmationHandler = function (dialog) {
      (this.data.confirmed = 1),
        Object.assign(this.data, dialog.getFormData()),
        this.send();
    };
    AsyncRequest.prototype.setJSONPTransport = function (transport) {
      transport.subscribe('response', this._handleJSONPResponse.bind(this)),
        transport.subscribe('abort', this._handleJSONPAbort.bind(this)),
        (this.transport = transport);
    };
    AsyncRequest.prototype._handleJSONPResponse = function (_, data) {
      var transport = this.transport;
      if (!transport) return;
      data.bootloadOnly || (this.is_first = this.is_first === undefined);
      var interpreted = this._interpretResponse(data);
      interpreted.asyncResponse &&
        ((interpreted.asyncResponse.is_first = this.is_first),
        (interpreted.asyncResponse.is_last = transport.hasFinished()));
      this.invokeResponseHandler(interpreted);
      transport.hasFinished() && delete this.transport;
    };
    AsyncRequest.prototype._handleJSONPAbort = function () {
      this._invokeErrorHandler(), delete this.transport;
    };
    AsyncRequest.prototype._handleXHRResponse = function (transport) {
      __p && __p();
      var interpreted;
      if (this.getOption('suppressEvaluation'))
        interpreted = {
          asyncResponse: new (require('AsyncResponse'))(this, transport),
        };
      else {
        var text = transport.responseText;
        try {
          var safe_text = this._unshieldResponseText(text),
            _response = eval('(' + safe_text + ')');
          interpreted = this._interpretResponse(_response);
        } catch (error) {
          (interpreted = error.message),
            require('FBLogger')('async_request')
              .catching(error)
              .warn('Faild to handle repsonse');
        }
      }
      this.invokeResponseHandler(interpreted);
    };
    AsyncRequest.prototype._unshieldResponseText = function (text) {
      var shield = 'for (;;);',
        shieldlen = shield.length;
      if (text.length <= shieldlen)
        throw new Error('Response too short on async to ' + this.getURI());
      var offset = 0;
      while (text.charAt(offset) == ' ' || text.charAt(offset) == '\n')
        offset++;
      offset && text.substring(offset, offset + shieldlen) == shield && !1;
      return text.substring(offset + shieldlen);
    };
    AsyncRequest.prototype._interpretResponse = function (response) {
      __p && __p();
      if (response.redirect) return { redirect: response.redirect };
      if (response.bootloadOnly) return { bootloadOnly: response.bootloadOnly };
      var isServerDialog =
        response.error && this._isServerDialogErrorCode(response.error);
      this._shouldReplaceTransportMarkers &&
        response.payload &&
        !isServerDialog &&
        require('replaceTransportMarkers')(
          { relativeTo: this.getRelativeTo(), bigPipeContext: null },
          response.payload
        );
      var r = new (require('AsyncResponse'))(this);
      if (response.__ar != 1)
        require('FBLogger')('AsyncRequest').warn(
          'AsyncRequest to endpoint %s returned a JSON response, but it is not properly formatted. The endpoint needs to provide a response using the AsyncResponse class in PHP.',
          this.getURI()
        ),
          (r.payload = response);
      else {
        Object.assign(r, response);
        var transport = this.transport;
        transport &&
          transport.getAllResponseHeaders !== undefined &&
          (r.responseHeaders = transport.getAllResponseHeaders());
      }
      return { asyncResponse: r };
    };
    AsyncRequest.prototype._isMultiplexable = function () {
      __p && __p();
      if (
        this.getOption('jsonp') ||
        this.getOption('useIframeTransport') ||
        this.getOption('useFetchWithIframeFallback')
      ) {
        require('FBLogger')('AsyncRequest').mustfix(
          'You cannot bundle AsyncRequest that uses jsonp or iframe transport.'
        );
        return !1;
      }
      if (!require('isFacebookURI')(new (require('URI'))(this.uri))) {
        require('FBLogger')('AsyncRequest').mustfix(
          'You can not bundle AsyncRequest sent to non-facebook URIs.  Uri: %s',
          this.getURI()
        );
        return !1;
      }
      if (!this.getOption('asynchronous_DEPRECATED')) {
        require('FBLogger')('AsyncRequest').mustfix(
          'We cannot bundle synchronous AsyncRequests'
        );
        return !1;
      }
      return !0;
    };
    AsyncRequest.prototype.handleResponse = function (response) {
      var interpreted = this._interpretResponse(response);
      this.invokeResponseHandler(interpreted);
    };
    AsyncRequest.prototype.setMethod = function (m) {
      this.method = m.toString().toUpperCase();
      return this;
    };
    AsyncRequest.prototype.getMethod = function () {
      return this.method;
    };
    AsyncRequest.prototype.setData = function (obj) {
      this.data = obj;
      return this;
    };
    AsyncRequest.prototype.setRequestHeader = function (name, value) {
      this.headers[name] = value;
      return this;
    };
    AsyncRequest.prototype.setRawData = function (raw_data) {
      this.rawData = raw_data;
      return this;
    };
    AsyncRequest.prototype.getData = function () {
      return this.data;
    };
    AsyncRequest.prototype.setContextData = function (key, value, enabled) {
      enabled = enabled === undefined ? !0 : enabled;
      enabled && (this.context['_log_' + key] = value);
      return this;
    };
    AsyncRequest.prototype._setUserActionID = function () {
      this.userActionID = (require('SessionName').getName() || '-') + '/-';
    };
    AsyncRequest.prototype.setURI = function (uri) {
      __p && __p();
      typeof uri === 'string' &&
        uri.match(/^\/?u_\d+_\d+/) &&
        require('FBLogger')('asyncrequest').warn('Invalid URI %s', uri);
      var uri_obj = new (require('URI'))(uri);
      if (
        (this.getOption('useIframeTransport') ||
          this.getOption('useFetchWithIframeFallback')) &&
        !require('isFacebookURI')(uri_obj)
      ) {
        !1;
        return this;
      }
      if (
        !this._allowCrossOrigin &&
        !this.getOption('jsonp') &&
        !this.getOption('useIframeTransport') &&
        !this.getOption('useFetchWithIframeFallback') &&
        !uri_obj.isSameOrigin()
      ) {
        !1;
        return this;
      }
      this._setUserActionID();
      if (!uri || uri_obj.isEmpty()) {
        require('FBLogger')('async_request').mustfix('URI cannot be empty');
        return this;
      }
      this.uri = require('ZeroRewrites').rewriteURI(uri_obj);
      return this;
    };
    AsyncRequest.prototype.getURI = function () {
      return this.uri.toString();
    };
    AsyncRequest.prototype.delayPreDisplayJS = function (shouldDelayJS) {
      shouldDelayJS === void 0 && (shouldDelayJS = !0);
      this._delayPreDisplayJS = shouldDelayJS;
      return this;
    };
    AsyncRequest.prototype.setInitialHandler = function (fn) {
      this.initialHandler = fn;
      return this;
    };
    AsyncRequest.prototype.setPayloadHandler = function (fn) {
      this.setHandler(function (response) {
        return fn(response.payload);
      });
      return this;
    };
    AsyncRequest.prototype.setHandler = function (fn) {
      validateResponseHandler(fn) && (this.handler = fn);
      return this;
    };
    AsyncRequest.prototype.getHandler = function () {
      return this.handler || require('emptyFunction');
    };
    AsyncRequest.prototype.setUploadProgressHandler = function (fn) {
      validateResponseHandler(fn) && (this.uploadProgressHandler = fn);
      return this;
    };
    AsyncRequest.prototype.setErrorHandler = function (fn) {
      validateResponseHandler(fn) && (this.errorHandler = fn);
      return this;
    };
    AsyncRequest.prototype.setTransportErrorHandler = function (fn) {
      this.transportErrorHandler = fn;
      return this;
    };
    AsyncRequest.prototype.getErrorHandler = function () {
      return this.errorHandler || require('emptyFunction');
    };
    AsyncRequest.prototype.getTransportErrorHandler = function () {
      return this.transportErrorHandler || require('emptyFunction');
    };
    AsyncRequest.prototype.setTimeoutHandler = function (timeout, fn) {
      validateResponseHandler(fn) &&
        ((this.timeout = timeout), (this.timeoutHandler = fn));
      return this;
    };
    AsyncRequest.prototype.resetTimeout = function (timeout) {
      __p && __p();
      if (this.timeoutHandler === null) !1;
      else if (timeout === null)
        (this.timeout = null),
          require('clearTimeout')(this.timer),
          (this.timer = null);
      else {
        var clear_on_quickling_event = !this._allowCrossPageTransition;
        this.timeout = timeout;
        require('clearTimeout')(this.timer);
        clear_on_quickling_event
          ? (this.timer = require('setTimeout')(
              this._handleTimeout.bind(this),
              this.timeout
            ))
          : (this.timer = require('setTimeoutAcrossTransitions')(
              this._handleTimeout.bind(this),
              this.timeout
            ));
      }
      return this;
    };
    AsyncRequest.prototype._handleTimeout = function () {
      this.continuation.last(
        function () {
          this._requestTimeout = !0;
          var func = this.timeoutHandler;
          this.abandon();
          func && func(this);
          this._logError({ timeout: this });
          require('setTimeout')(
            function () {
              require('Arbiter').inform('AsyncRequest/timeout', {
                request: this,
              });
            }.bind(this),
            0
          );
        }.bind(this)
      );
    };
    AsyncRequest.prototype.disableInteractionServerTracing = function () {
      this.allowInteractionServerTracing = !1;
      return this;
    };
    AsyncRequest.prototype.setNewSerial = function () {
      this.id = ++last_id;
      return this;
    };
    AsyncRequest.prototype.setInterceptHandler = function (fn) {
      this.interceptHandler = fn;
      return this;
    };
    AsyncRequest.prototype.setFinallyHandler = function (fn) {
      this.finallyHandler = fn;
      return this;
    };
    AsyncRequest.prototype.setAbortHandler = function (fn) {
      this.abortHandler = fn;
      return this;
    };
    AsyncRequest.prototype.getServerDialogCancelHandler = function () {
      return this.serverDialogCancelHandler;
    };
    AsyncRequest.prototype.setServerDialogCancelHandler = function (fn) {
      this.serverDialogCancelHandler = fn;
      return this;
    };
    AsyncRequest.prototype.setPreBootloadHandler = function (fn) {
      this.preBootloadHandler = fn;
      return this;
    };
    AsyncRequest.prototype.setReadOnly = function (readOnly) {
      typeof readOnly !== 'boolean' ? !1 : (this.readOnly = readOnly);
      return this;
    };
    AsyncRequest.prototype.getReadOnly = function () {
      return this.readOnly;
    };
    AsyncRequest.prototype.setRelativeTo = function (element) {
      this.relativeTo = element;
      return this;
    };
    AsyncRequest.prototype.getRelativeTo = function () {
      return this.relativeTo;
    };
    AsyncRequest.prototype.setStatusClass = function (c) {
      this.statusClass = c;
      return this;
    };
    AsyncRequest.prototype.setStatusElement = function (element) {
      this.statusElement = element;
      return this;
    };
    AsyncRequest.prototype.getStatusElement = function () {
      return require('ge')(this.statusElement);
    };
    AsyncRequest.prototype._isRelevant = function () {
      if (this._allowCrossPageTransition) return !0;
      return !this.id ? !0 : this.id > id_threshold;
    };
    AsyncRequest.prototype.clearStatusIndicator = function () {
      var statusElem = this.getStatusElement();
      statusElem &&
        (require('CSS').removeClass(statusElem, 'async_saving'),
        require('CSS').removeClass(statusElem, this.statusClass));
    };
    AsyncRequest.prototype.addStatusIndicator = function () {
      var statusElem = this.getStatusElement();
      statusElem &&
        (require('CSS').addClass(statusElem, 'async_saving'),
        require('CSS').addClass(statusElem, this.statusClass));
    };
    AsyncRequest.prototype.specifiesWriteRequiredParams = function () {
      return this.writeRequiredParams.every(function (param) {
        this.data[param] =
          this.data[param] ||
          require('Env')[param] ||
          (require('ge')(param) || {}).value;
        return this.data[param] !== undefined ? !0 : !1;
      }, this);
    };
    AsyncRequest.prototype.setOption = function (opt, v) {
      typeof this.option[opt] !== 'undefined' ? (this.option[opt] = v) : !1;
      return this;
    };
    AsyncRequest.prototype.getOption = function (opt) {
      typeof this.option[opt] === 'undefined' && !1;
      return this.option[opt];
    };
    AsyncRequest.prototype.abort = function () {
      __p && __p();
      this.continuation.last(
        function () {
          __p && __p();
          var transport = this.transport;
          if (transport) {
            var old_handler = this.getTransportErrorHandler();
            this.setOption('suppressErrorAlerts', !0);
            this.setTransportErrorHandler(require('emptyFunction'));
            this._requestAborted = !0;
            transport.abort();
            this.setTransportErrorHandler(old_handler);
          }
          this.abortHandler();
          AsyncMultiplex.unschedule(this);
        }.bind(this)
      );
    };
    AsyncRequest.prototype.abandon = function () {
      this.continuation.last(
        function () {
          require('clearTimeout')(this.timer),
            this.setOption('suppressErrorAlerts', !0)
              .setHandler(require('emptyFunction'))
              .setErrorHandler(require('emptyFunction'))
              .setTransportErrorHandler(require('emptyFunction')),
            this.transport &&
              ((this._requestAborted = !0), this.transport.abort()),
            this.abortHandler(),
            AsyncMultiplex.unschedule(this);
        }.bind(this)
      );
    };
    AsyncRequest.prototype.setNectarData = function (nctrParams) {
      nctrParams &&
        (this.data.nctr === undefined && (this.data.nctr = {}),
        Object.assign(this.data.nctr, nctrParams));
      return this;
    };
    AsyncRequest.prototype.setNectarModuleDataSafe = function (elem) {
      var setNectarModuleData = this.setNectarModuleData;
      setNectarModuleData && setNectarModuleData.call(this, elem);
      return this;
    };
    AsyncRequest.prototype.setAllowCrossPageTransition = function (allow) {
      this._allowCrossPageTransition = !!allow;
      this.timer && this.resetTimeout(this.timeout);
      return this;
    };
    AsyncRequest.prototype.getAllowIrrelevantRequests = function () {
      return this._allowIrrelevantRequests;
    };
    AsyncRequest.prototype.setAllowIrrelevantRequests = function (
      allowIrrelevantRequests
    ) {
      this._allowIrrelevantRequests = allowIrrelevantRequests;
      return this;
    };
    AsyncRequest.prototype.setAllowCrossOrigin = function (allow) {
      this._allowCrossOrigin = allow;
      return this;
    };
    AsyncRequest.prototype.setAllowCredentials = function (allow) {
      this._allowCredentials = allow;
      return this;
    };
    AsyncRequest.prototype.setIsBackgroundRequest = function (
      isBackgroundRequest
    ) {
      this._isBackgroundRequest = isBackgroundRequest;
      return this;
    };
    AsyncRequest.prototype.setReplaceTransportMarkers = function (value) {
      value === void 0 && (value = !0);
      this._shouldReplaceTransportMarkers = value;
      return this;
    };
    AsyncRequest.prototype.send = function (isRetry) {
      __p && __p();
      var _this$uri$addQueryDat;
      isRetry = isRetry || !1;
      if (!this.uri) {
        !1;
        return !1;
      }
      !this.errorHandler &&
        !this.getOption('suppressErrorHandlerWarning') &&
        !1;
      this.getOption('jsonp') && this.method != 'GET' && this.setMethod('GET');
      (this.getOption('useIframeTransport') ||
        this.getOption('useFetchWithIframeFallback')) &&
        this.method != 'GET' &&
        (!1, this.setMethod('GET'));
      this.timeoutHandler !== null &&
        (this.getOption('jsonp') ||
          this.getOption('useIframeTransport') ||
          this.getOption('useFetchWithIframeFallback')) &&
        !1;
      if (!this.getReadOnly()) {
        this.specifiesWriteRequiredParams();
        if (this.method != 'POST') {
          !1;
          return !1;
        }
      }
      if (document.location.search.toString().includes(this.uri.toString())) {
        !1;
        return !1;
      }
      Object.assign(this.data, require('getAsyncParams')(this.method));
      this.allowInteractionServerTracing &&
        (this._artilleryHandle =
          require('ArtilleryAsyncRequestTracingAnnotator').registerAsyncRequest(
            this,
            this.resourceTimingStoreUID
          ));
      require('isEmpty')(this.context) ||
        (Object.assign(this.data, this.context), (this.data.ajax_log = 1));
      require('Env').force_param &&
        Object.assign(this.data, require('Env').force_param);
      this._setUserActionID();
      if (this.getOption('bundle') && this._isMultiplexable()) {
        AsyncMultiplex.schedule(this);
        return !0;
      }
      this.setNewSerial();
      this.getOption('asynchronous_DEPRECATED') ||
        this.uri.addQueryData({ __s: 1 });
      this.uri.addQueryData(
        ((_this$uri$addQueryDat = {}),
        (_this$uri$addQueryDat[require('PixelRatioConst').cookieName] =
          require('WebPixelRatio').get()),
        _this$uri$addQueryDat)
      );
      require('Arbiter').inform('AsyncRequest/send', { request: this });
      var uri_str, query;
      this.method == 'GET' &&
        this.uri.addQueryData({ fb_dtsg_ag: require('DTSG_ASYNC').getToken() });
      this.method == 'GET' || this.rawData
        ? ((uri_str = this.uri.addQueryData(this.data).toString()),
          (query = this.rawData || ''))
        : (this._allowCrossOrigin && this.uri.addQueryData({ __a: 1 }),
          (uri_str = this.uri.toString()),
          (query = require('PHPQuerySerializer').serialize(this.data)));
      if (this.transport) {
        !1;
        return !1;
      }
      if (this.getOption('useFetchWithIframeFallback'))
        try {
          var _transport = new (require('FetchStreamTransport'))(this.uri);
          this.setJSONPTransport(_transport);
          this._markRequestSent();
          _transport.send();
          this.setOption('useIframeTransport', !1);
          return !0;
        } catch (_unused5) {
          this.setOption('useFetchWithIframeFallback', !1),
            this.setOption('useIframeTransport', !0);
        }
      if (this.getOption('jsonp') || this.getOption('useIframeTransport')) {
        requireLazy(
          ['JSONPTransport'],
          function (JSONPTransport) {
            var transport = new JSONPTransport(
              this.getOption('jsonp') ? 'jsonp' : 'iframe',
              this.uri
            );
            this.setJSONPTransport(transport);
            this._markRequestSent();
            transport.send();
            require('ProfilingCounters').incrementCounter(
              'ASYNC_REQUEST_COUNT',
              1
            );
          }.bind(this)
        );
        return !0;
      }
      var transport = require('ZeroRewrites').getTransportBuilderForURI(
        this.uri
      )();
      if (!transport) {
        !1;
        return !1;
      }
      this.schedule('AsyncRequest.send');
      transport.onreadystatechange = function () {
        transport.readyState === 4 &&
          this.continuation.last(this._onStateChange);
      }.bind(this);
      this.uploadProgressHandler &&
        supportsUploadProgress(transport) &&
        (transport.upload.onprogress = function () {
          for (
            var _len = arguments.length, args = new Array(_len), _key = 0;
            _key < _len;
            _key++
          )
            args[_key] = arguments[_key];
          this.continuation(
            function () {
              this.uploadProgressHandler &&
                this.uploadProgressHandler.apply(this, args);
            }.bind(this)
          );
        }.bind(this));
      isRetry || (this.remainingRetries = this.getOption('retries'));
      this.transport = transport;
      try {
        transport.open(
          this.method,
          uri_str,
          this.getOption('asynchronous_DEPRECATED')
        );
      } catch (exception) {
        !1;
        return !1;
      }
      if (
        !this.uri.isSameOrigin() &&
        !this.getOption('jsonp') &&
        !this.getOption('useIframeTransport') &&
        !this.getOption('useFetchWithIframeFallback')
      ) {
        if (!supportsCrossOrigin(transport)) {
          !1;
          return !1;
        }
        this._canSendCredentials() && (transport.withCredentials = !0);
      }
      this.method == 'POST' &&
        !this.rawData &&
        transport.setRequestHeader(
          'Content-Type',
          'application/x-www-form-urlencoded'
        );
      this._isBackgroundRequest &&
        transport.setRequestHeader('X_FB_BACKGROUND_STATE', '1');
      var asyncHeaders = require('getAsyncHeaders')(this.uri);
      Object.keys(asyncHeaders).forEach(function (name) {
        transport && transport.setRequestHeader(name, asyncHeaders[name]);
      });
      require('Arbiter').inform('AsyncRequest/will_send', { request: this });
      if (transport)
        for (var headerName in this.headers)
          Object.prototype.hasOwnProperty.call(this.headers, headerName) &&
            transport.setRequestHeader(headerName, this.headers[headerName]);
      this.addStatusIndicator();
      this._markRequestSent();
      transport.send(query);
      this.timeout !== null && this.resetTimeout(this.timeout);
      AsyncRequest._inflightCount++;
      require('ProfilingCounters').incrementCounter('ASYNC_REQUEST_COUNT', 1);
      return !0;
    };
    AsyncRequest.prototype.schedule = function (name) {
      this.continuation = require('TimeSlice').getReusableContinuation(name);
    };
    AsyncRequest.prototype._canSendCredentials = function () {
      if (this._allowCredentials === !1) return !1;
      var uri = new (require('URI'))(this.uri);
      return (
        require('isFacebookURI')(uri) ||
        require('isMessengerDotComURI')(uri) ||
        require('isWorkplaceDotComURI')(uri) ||
        require('isBonfireURI')(uri)
      );
    };
    AsyncRequest.prototype._markRequestSent = function () {
      var fullURI = new (require('URI'))(this.getURI())
        .getQualifiedURI()
        .toString();
      require('ResourceTimingsStore').updateURI(
        require('ResourceTypes').XHR,
        this.resourceTimingStoreUID,
        fullURI
      );
      require('ResourceTimingsStore')
        .annotate(require('ResourceTypes').XHR, this.resourceTimingStoreUID)
        .addStringAnnotation('uri', fullURI);
      require('ifRequired')(
        'TimeSliceAutoclosedInteraction',
        function (TimeSliceAutoclosedInteraction) {
          return TimeSliceAutoclosedInteraction.getInteractionsActiveRightNow().forEach(
            function (interaction) {
              return interaction
                .forResourceRequest(this.resourceTimingStoreUID)
                .addStringAnnotation('requested_in_continuation', 'true');
            }.bind(this)
          );
        }.bind(this)
      );
      require('ResourceTimingsStore').measureRequestSent(
        require('ResourceTypes').XHR,
        this.resourceTimingStoreUID
      );
    };
    AsyncRequest.prototype.exec = function (isRetry) {
      if (
        this.getHandler() !== require('emptyFunction') ||
        this.getErrorHandler() !== require('AsyncResponse').defaultErrorHandler
      )
        throw new Error(
          'exec is an async function and does not allow previously set handlers'
        );
      return new (require('Promise'))(
        function (resolve, reject) {
          this.setHandler(resolve).setErrorHandler(reject).send(isRetry);
        }.bind(this)
      );
    };
    AsyncRequest.bootstrap = function (href, elem, is_post) {
      __p && __p();
      var method = 'GET',
        readonly = !0,
        data = {};
      (is_post || (elem && elem.rel == 'async-post')) &&
        ((method = 'POST'),
        (readonly = !1),
        href &&
          ((href = new (require('URI'))(href)),
          (data = href.getQueryData()),
          href.setQueryData({})));
      var status_elem = require('Parent').byClass(elem, 'stat_elem') || elem;
      if (status_elem && require('CSS').hasClass(status_elem, 'async_saving'))
        return !1;
      var async = new AsyncRequest(href)
        .setReadOnly(readonly)
        .setMethod(method)
        .setData(data)
        .setNectarModuleDataSafe(elem)
        .setRelativeTo(elem);
      elem &&
        (async.setHandler(function (response) {
          require('Event').fire(elem, 'success', { response: response });
        }),
        async.setErrorHandler(function (response) {
          require('Event').fire(elem, 'error', { response: response }) !== !1 &&
            require('AsyncResponse').defaultErrorHandler(response);
        }));
      if (status_elem instanceof HTMLElement) {
        async.setStatusElement(status_elem);
        var status_class = status_elem.getAttribute('data-status-class');
        status_class && async.setStatusClass(status_class);
      }
      async.send();
      return !1;
    };
    AsyncRequest.post = function (href, data) {
      new AsyncRequest(href)
        .setReadOnly(!1)
        .setMethod('POST')
        .setData(data)
        .send();
      return !1;
    };
    AsyncRequest.getLastID = function () {
      return last_id;
    };
    AsyncRequest.getInflightCount = function () {
      return this._inflightCount;
    };
    AsyncRequest._inflightCount = 0;
    var _asyncMultiplex,
      _pendingAsyncMultiplexes = [];
    function AsyncMultiplex() {
      this._requests = [];
    }
    AsyncMultiplex.prototype.add = function (request) {
      this._requests.push(request);
    };
    AsyncMultiplex.prototype.remove = function (request) {
      var requests = this._requests,
        requestsSent = this._requestsSent;
      for (var ii = 0, jj = requests.length; ii < jj; ii++)
        requests[ii] === request &&
          (requestsSent ? (requests[ii] = null) : requests.splice(ii, 1));
    };
    AsyncMultiplex.prototype.send = function () {
      __p && __p();
      this._requestsSent && invariant(0, undefined);
      this._requestsSent = !0;
      this._wrapperRequest = null;
      var requests = this._requests;
      if (!requests.length) return;
      var request;
      if (requests.length === 1) request = requests[0];
      else {
        var data = requests.filter(Boolean).map(function (request) {
          return [
            request.uri.getPath(),
            require('PHPQuerySerializer').serialize(request.data),
          ];
        });
        request = this._wrapperRequest = new AsyncRequest('/ajax/proxy.php')
          .setAllowCrossPageTransition(!0)
          .setData({ data: data })
          .setHandler(this._handler.bind(this))
          .setTransportErrorHandler(this._transportErrorHandler.bind(this));
      }
      request && request.setOption('bundle', !1).send();
    };
    AsyncMultiplex.prototype._handler = function (response) {
      __p && __p();
      var _this = this,
        responses = response.getPayload().responses;
      if (responses.length !== this._requests.length) {
        !1;
        return;
      }
      var _loop2 = function _loop2(ii) {
        __p && __p();
        var request = _this._requests[ii];
        if (!request) return 'continue';
        var request_path = request.uri.getPath();
        _this._wrapperRequest && (request.id = _this._wrapperRequest.id);
        if (responses[ii][0] !== request_path) {
          request.continuation.last(function () {
            request.invokeResponseHandler({
              transportError:
                'Wrong response order in bundled request to ' + request_path,
            });
          });
          return 'continue';
        }
        request.continuation.last(function () {
          request.handleResponse(responses[ii][1]);
        });
      };
      for (var ii = 0; ii < this._requests.length; ii++) {
        var _ret2 = _loop2(ii);
        if (_ret2 === 'continue') continue;
      }
      _pendingAsyncMultiplexes.splice(
        _pendingAsyncMultiplexes.indexOf(this, 1)
      );
    };
    AsyncMultiplex.prototype._transportErrorHandler = function (response) {
      var interpreted = { transportError: response.errorDescription },
        paths = this._requests.filter(Boolean).map(function (request) {
          this._wrapperRequest && (request.id = this._wrapperRequest.id);
          request.invokeResponseHandler(interpreted);
          return request.uri.getPath();
        }, this);
      !1;
    };
    AsyncMultiplex.schedule = function (request) {
      request.schedule('AsyncMultiplex.schedule');
      _asyncMultiplex ||
        ((_asyncMultiplex = new AsyncMultiplex()),
        _pendingAsyncMultiplexes.push(_asyncMultiplex),
        require('TimeSlice').guard(
          function () {
            require('setTimeoutAcrossTransitions')(function () {
              _asyncMultiplex &&
                (_asyncMultiplex.send(), (_asyncMultiplex = null));
            }, 0);
          },
          'AsyncMultiplex.schedule',
          { propagationType: require('TimeSlice').PropagationType.ORPHAN }
        )());
      _asyncMultiplex.add(request);
      return _asyncMultiplex;
    };
    AsyncMultiplex.unschedule = function (request) {
      _pendingAsyncMultiplexes.forEach(function (asyncMultiplex) {
        asyncMultiplex.remove(request);
      });
    };
    AsyncRequest.suppressOnloadToken = {};
    global.AsyncRequest = AsyncRequest;
    module.exports = AsyncRequest;
  },
  null
);
__d(
  'FullScreen',
  [
    'ArbiterMixin',
    'CSS',
    'Event',
    'Keys',
    'UserAgent',
    'UserAgent_DEPRECATED',
    'mixin',
    'throttle',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g,
      h = {},
      i = !1,
      j = function (a) {
        b('Event').getKeyCode(a) === b('Keys').ESC && a.stopPropagation();
      },
      k = function () {
        i || (document.addEventListener('keydown', j, !0), (i = !0));
      },
      l = function () {
        i && (document.removeEventListener('keydown', j, !0), (i = !1));
      };
    g = babelHelpers.inherits(a, b('mixin')(b('ArbiterMixin')));
    g && g.prototype;
    a.prototype.listenForEvent = function (a) {
      var c = b('throttle')(this.onChange, 0, this);
      h[a.id] ||
        ((h[a.id] = !0),
        b('Event').listen(a, {
          webkitfullscreenchange: c,
          mozfullscreenchange: c,
          MSFullscreenChange: c,
          fullscreenchange: c,
        }));
    };
    a.prototype.enableFullScreen = function (a) {
      __p && __p();
      this.listenForEvent(a);
      if (a.webkitRequestFullScreen)
        b('UserAgent_DEPRECATED').chrome()
          ? a.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)
          : a.webkitRequestFullScreen();
      else if (a.mozRequestFullScreen) a.mozRequestFullScreen();
      else if (a.msRequestFullscreen) k(), a.msRequestFullscreen();
      else if (a.requestFullScreen) a.requestFullScreen();
      else return !1;
      return !0;
    };
    a.prototype.disableFullScreen = function () {
      __p && __p();
      if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
      else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
      else if (document.msExitFullscreen) document.msExitFullscreen();
      else if (document.cancelFullScreen) document.cancelFullScreen();
      else if (document.exitFullScreen) document.exitFullScreen();
      else return !1;
      return !0;
    };
    a.prototype.isFullScreen = function () {
      return (
        document.webkitIsFullScreen ||
        document.fullScreen ||
        document.mozFullScreen ||
        document.msFullscreenElement
      );
    };
    a.prototype.toggleFullScreen = function (a) {
      if (this.isFullScreen()) {
        this.disableFullScreen();
        return !1;
      } else return this.enableFullScreen(a);
    };
    a.prototype.onChange = function () {
      var a = this.isFullScreen();
      b('CSS').conditionClass(document.body, 'fullScreen', a);
      this.inform('changed');
      a || l();
    };
    a.prototype.isSupportedWithKeyboardInput = function () {
      return this.isSupported() && !b('UserAgent').isBrowser('Safari');
    };
    a.prototype.isSupported = function () {
      var a =
        document.webkitFullscreenEnabled ||
        document.mozFullScreenEnabled ||
        document.msFullscreenEnabled ||
        document.fullscreenEnabled;
      return (
        a ||
        document.webkitCancelFullScreen ||
        document.mozCancelFullScreen ||
        document.msExitFullscreen ||
        document.cancelFullScreen ||
        document.exitFullScreen
      );
    };
    function a() {
      g.apply(this, arguments);
    }
    c = new a();
    d = b('throttle')(c.onChange, 0, c);
    b('Event').listen(document, {
      webkitfullscreenchange: d,
      mozfullscreenchange: d,
      MSFullscreenChange: d,
      fullscreenchange: d,
    });
    e.exports = c;
  },
  null
);
__d(
  'ViewportTrackingHelper',
  [
    'DOMDimensions',
    'getElementPosition',
    'getElementRect',
    'getViewportDimensions',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = {
      isDescendantOf: function (a, b) {
        if (a === b) return !0;
        while (a && a.parentElement) {
          if (a.parentElement === b) return !0;
          a = a.parentElement;
        }
        return !1;
      },
      isVisible: function (a, c) {
        return g.isVisibleInDimension(b('getViewportDimensions')(), a, c);
      },
      isFullyVisibleInContainer: function (a, c) {
        a = b('getElementRect')(a);
        c = b('getElementRect')(c);
        return (
          c.top >= a.top &&
          c.bottom <= a.bottom &&
          c.left >= a.left &&
          c.right <= a.right
        );
      },
      isVisibleInDimension: function (a, c, d) {
        var e = b('getElementPosition')(c);
        c = b('DOMDimensions').getElementDimensions(c);
        if (!e.x && !e.y && !c.height && !c.width) return !1;
        var f = Math.max(e.y, 0);
        e = Math.min(e.y + c.height, a.height);
        a = Math.min(c.height, d);
        return e - f >= a;
      },
      getHeightIfVisible: function (a, c) {
        var d = this.getHeightInViewport(a);
        a = b('DOMDimensions').getElementDimensions(a);
        a = Math.min(a.height, c);
        return d >= a ? d : 0;
      },
      getHeightInViewport: function (a) {
        var c = b('getElementPosition')(a);
        a = b('DOMDimensions').getElementDimensions(a);
        if (!c.x && !c.y && !a.x && !a.y) return 0;
        var d = b('getViewportDimensions')().height,
          e = Math.max(c.y, 0);
        c = Math.min(c.y + a.height, d);
        return c - e;
      },
      getElementsInViewIgnoreHeight: function (a) {
        var b = !1,
          c = [];
        for (var d = 0; d < a.length; d++) {
          var e = a[d];
          if (this.isVisible(e, 0, null)) c.push(e), (b = !0);
          else if (b) break;
        }
        return c;
      },
    };
    e.exports = g;
  },
  null
);
__d(
  'dispatchEvent',
  [],
  function (a, b, c, d, e, f) {
    function b(b, c) {
      var d;
      typeof a.Event === 'function'
        ? (d = new a.Event(c))
        : ((d = a.document.createEvent('Event')), d.initEvent(c, !0, !0));
      b.dispatchEvent(d);
    }
    e.exports = b;
  },
  null
);
__d(
  'getFullScreenElement',
  [],
  function (a, b, c, d, e, f) {
    function a() {
      return (
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement
      );
    }
    e.exports = a;
  },
  null
);
__d(
  'VideoPermalinkURI',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = {
      isValid: function (a) {
        return g.parse(a) !== null;
      },
      parse: function (a) {
        __p && __p();
        if (this.isValidLegacy(a)) {
          var b = a.getQueryData();
          return b.v ? { video_id: b.v, set_token: b.set } : null;
        }
        b = a.getPath();
        b[b.length - 1] === '/' && (b = b.substring(0, b.length - 1));
        a = b.split('/');
        if (a.length >= 3 && a[2] === 'videos')
          if (a.length === 4 && this.isNumeric(a[3]))
            return { video_id: a[3], set_token: null };
          else if (a.length === 5) {
            if (this.isNumeric(a[4]))
              return { video_id: a[4], set_token: a[3] };
            else if (this.isNumeric(a[3]))
              return { video_id: a[3], story_id: a[4] };
          } else if (a.length === 6 && this.isNumeric(a[4]))
            return { video_id: a[4], set_token: a[3], story_id: a[5] };
        return null;
      },
      isNumeric: function (a) {
        return /^\d+$/.exec(a) !== null;
      },
      isValidLegacy: function (a) {
        a = a.getPath();
        a[a.length - 1] === '/' && (a = a.substring(0, a.length - 1));
        return a === '/photo.php' ||
          a === '/force_photo/photo.php' ||
          a === '/photo' ||
          a === '/force_photo/photo/index.php' ||
          a === '/photo/index.php' ||
          a === '/force_photo/photo' ||
          a === '/video.php' ||
          a === '/video/video.php'
          ? !0
          : !1;
      },
      getCustomStoryURI: function (a, b) {
        return a + b + '/';
      },
    };
    e.exports = g;
  },
  null
);
__d(
  'UITinyViewportAction',
  [
    'Arbiter',
    'ArbiterMixin',
    'BanzaiScuba',
    'CSS',
    'Event',
    'getDocumentScrollElement',
    'queryThenMutateDOM',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = document.documentElement,
      h,
      i,
      j,
      k,
      l = !1,
      m = !1,
      n = !1,
      o = !1,
      p = {
        init: function (a) {
          __p && __p();
          a = b('queryThenMutateDOM').bind(
            null,
            function () {
              (k = k || b('getDocumentScrollElement')()),
                (i = g.clientWidth < k.scrollWidth - 1),
                (j = g.clientHeight < 400),
                (h = j || i);
            },
            function () {
              (h !== l || i !== m || j !== n) &&
                (b('CSS').conditionClass(g, 'tinyViewport', h),
                b('CSS').conditionClass(g, 'tinyWidth', i),
                b('CSS').conditionClass(g, 'tinyHeight', j),
                b('CSS').conditionClass(g, 'canHaveFixedElements', !h),
                p.inform('change', h),
                b('Arbiter').inform(
                  'tinyViewport/change',
                  { tiny: h, tinyWidth: i, tinyHeight: j },
                  'state'
                ),
                (l = h),
                (m = i),
                (n = j));
              if (!o) {
                var a = new (b('BanzaiScuba'))('www_tinyview_port', null, {
                  addBrowserFields: !0,
                });
                a.addInteger('clientWidth', g.clientWidth);
                a.addInteger('clientHeight', g.clientHeight);
                a.addNormal('view', h ? 'tiny' : 'normal');
                a.post();
                o = !0;
              }
            },
            'TinyViewport'
          );
          a();
          b('Arbiter').subscribe('quickling/response', a);
          b('Event').listen(window, 'resize', a);
        },
        isTiny: function () {
          return h;
        },
        isTinyWidth: function () {
          return i;
        },
        isTinyHeight: function () {
          return j;
        },
      };
    Object.assign(p, b('ArbiterMixin'));
    e.exports = p;
  },
  null
);
__d(
  'StaleVideoMonitor',
  [
    'EventEmitter',
    'EventListener',
    'SubscriptionsHandler',
    'clearTimeout',
    'performanceNow',
    'setTimeout',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g,
      h = 1500;
    c = babelHelpers.inherits(a, b('EventEmitter'));
    g = c && c.prototype;
    function a(a) {
      g.constructor.call(this),
        (this.$StaleVideoMonitor4 = null),
        (this.$StaleVideoMonitor1 = new (b('SubscriptionsHandler'))()),
        (this.$StaleVideoMonitor2 = a.currentTime),
        (this.$StaleVideoMonitor3 = b('performanceNow')()),
        (this.$StaleVideoMonitor5 = a),
        this.$StaleVideoMonitor1.addSubscriptions(
          b('EventListener').listen(
            a,
            'playing',
            function () {
              return this.$StaleVideoMonitor6();
            }.bind(this)
          ),
          b('EventListener').listen(
            a,
            'play',
            function () {
              return this.$StaleVideoMonitor6();
            }.bind(this)
          ),
          b('EventListener').listen(
            a,
            'timeupdate',
            function () {
              return this.$StaleVideoMonitor6();
            }.bind(this)
          )
        );
    }
    a.prototype.$StaleVideoMonitor7 = function () {
      __p && __p();
      if (this.$StaleVideoMonitor5) {
        if (
          this.$StaleVideoMonitor5.paused ||
          this.$StaleVideoMonitor5.playbackRate <= 0
        )
          return;
        var a = this.$StaleVideoMonitor5.currentTime,
          c = this.$StaleVideoMonitor5.buffered,
          d = !1,
          e;
        for (e = 0; e < c.length; ++e) {
          var f = c.start(e),
            g = c.end(e);
          if (f > a) break;
          if (f <= a && g >= a + 1) {
            d = !0;
            break;
          }
        }
        d &&
          (a === this.$StaleVideoMonitor2
            ? this.emit(
                'stale',
                b('performanceNow')() - this.$StaleVideoMonitor3,
                (a - this.$StaleVideoMonitor2) * 1e3
              )
            : this.$StaleVideoMonitor8());
      }
    };
    a.prototype.$StaleVideoMonitor9 = function (a) {
      this.$StaleVideoMonitor10(),
        (this.$StaleVideoMonitor4 = b('setTimeout')(
          function () {
            return this.$StaleVideoMonitor7();
          }.bind(this),
          a
        ));
    };
    a.prototype.$StaleVideoMonitor10 = function () {
      this.$StaleVideoMonitor4 !== null &&
        (b('clearTimeout')(this.$StaleVideoMonitor4),
        (this.$StaleVideoMonitor4 = null));
    };
    a.prototype.$StaleVideoMonitor8 = function () {
      this.$StaleVideoMonitor6();
    };
    a.prototype.$StaleVideoMonitor6 = function () {
      this.$StaleVideoMonitor5 &&
        ((this.$StaleVideoMonitor2 = this.$StaleVideoMonitor5.currentTime),
        (this.$StaleVideoMonitor3 = b('performanceNow')()),
        this.$StaleVideoMonitor9(h));
    };
    a.prototype.$StaleVideoMonitor11 = function () {
      this.$StaleVideoMonitor1 && this.$StaleVideoMonitor1.release();
    };
    a.prototype.notifyBuffering = function () {
      this.$StaleVideoMonitor10();
    };
    a.prototype.notifyBuffered = function () {
      this.$StaleVideoMonitor9(h);
    };
    a.prototype.destroy = function () {
      this.$StaleVideoMonitor11(),
        this.$StaleVideoMonitor10(),
        (this.$StaleVideoMonitor5 = null);
    };
    e.exports = a;
  },
  null
);
__d(
  'TimeRanges',
  ['invariant'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    function a(a) {
      (this.$1 = []), (this.$1 = a);
    }
    a.prototype.start = function (a) {
      this.$1[a] || g(0, undefined);
      return this.$1[a].startTime;
    };
    a.prototype.end = function (a) {
      this.$1[a] || g(0, undefined);
      return this.$1[a].endTime;
    };
    a.prototype.length = function () {
      return this.$1.length;
    };
    e.exports = a;
  },
  null
);
__d(
  'VideoQualityClasses',
  ['VideoQualityClassInternal'],
  function (a, b, c, d, e, f) {
    e.exports = b('VideoQualityClassInternal').orderedValues;
  },
  null
);
/**
 * License: https://www.facebook.com/legal/license/2v2plzJQoTQ/
 */
__d(
  'IntersectionObserverFallback',
  [
    'FBLogger',
    'TimeSlice',
    'containsNode',
    'getElementRect',
    'performanceNow',
    'setInterval',
    'throttle',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = document.documentElement,
      h = [];
    function i(a, b) {
      var c = Math.max(a.top, b.top),
        d = Math.min(a.bottom, b.bottom),
        e = Math.max(a.left, b.left);
      a = Math.min(a.right, b.right);
      b = a - e;
      var f = d - c;
      return b >= 0 && f >= 0
        ? { top: c, bottom: d, left: e, right: a, width: b, height: f }
        : undefined;
    }
    function j() {
      return { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
    }
    function k(a) {
      __p && __p();
      this.time = a.time;
      this.target = a.target;
      this.rootBounds = a.rootBounds;
      this.boundingClientRect = a.boundingClientRect;
      this.intersectionRect = a.intersectionRect || j();
      this.isIntersecting = !!a.intersectionRect;
      a = this.boundingClientRect;
      a = a.width * a.height;
      var b = this.intersectionRect.width * this.intersectionRect.height;
      a
        ? (this.intersectionRatio = b / a)
        : (this.intersectionRatio = this.isIntersecting ? 1 : 0);
    }
    function a(a, c) {
      __p && __p();
      this.THROTTLE_TIMEOUT = 100;
      this.POLL_INTERVAL = null;
      this.$12 = b('TimeSlice').guard(
        b('throttle')(
          function () {
            var a = this.$14(),
              c = a ? this.$15() : j();
            this.$6.forEach(
              function (d) {
                var e = d.element,
                  f = b('getElementRect')(e),
                  g = this.$16(e),
                  h = d.entry,
                  i = a && g && !this.$2 && this.$17(e, c);
                d = d.entry = new k({
                  time: b('performanceNow')(),
                  target: e,
                  boundingClientRect: f,
                  rootBounds: c,
                  intersectionRect: i,
                });
                !h
                  ? this.$7.push(d)
                  : a && g
                  ? this.$18(h, d) && this.$7.push(d)
                  : h && h.isIntersecting && this.$7.push(d);
              }.bind(this)
            );
            this.$7.length && this.$1(this.takeRecords(), this);
          }.bind(this),
          this.THROTTLE_TIMEOUT
        ),
        'IntersectionObserverFallback: checkForIntersections'
      );
      this.$2 = !1;
      try {
        window.top.document;
      } catch (a) {
        this.$2 = !0;
      }
      c = c || {};
      this.$1 = a;
      this.$4 = !1;
      this.$6 = [];
      this.$7 = [];
      this.$8 = this.$9(c.rootMargin);
      this.thresholds = this.$10(c.threshold);
      this.root = c.root || null;
      this.rootMargin = this.$8
        .map(function (a) {
          return a.value + a.unit;
        })
        .join(' ');
    }
    a.prototype.$10 = function (a) {
      a = a || [0];
      Array.isArray(a) || (a = [a]);
      return a.sort().filter(function (a, b, c) {
        return a !== c[b - 1];
      });
    };
    a.prototype.$9 = function (a) {
      a = a || '0px';
      a = a.split(/\s+/).map(function (a) {
        a = /^(-?\d*\.?\d+)(px|%)$/.exec(a);
        return { value: parseFloat(a[1]), unit: a[2] };
      });
      a[1] = a[1] || a[0];
      a[2] = a[2] || a[0];
      a[3] = a[3] || a[1];
      return a;
    };
    a.prototype.$11 = function () {
      this.$4 ||
        ((this.$4 = !0),
        this.$12(),
        this.POLL_INTERVAL
          ? (this.$5 = b('setInterval')(this.$12, this.POLL_INTERVAL))
          : (window.addEventListener('resize', this.$12),
            document.addEventListener('scroll', this.$12),
            'MutationObserver' in window &&
              ((this.$3 = new MutationObserver(this.$12)),
              this.$3.observe(document, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0,
              }))));
    };
    a.prototype.$13 = function () {
      this.$4 &&
        ((this.$4 = !1),
        this.$5 && (clearInterval(this.$5), (this.$5 = undefined)),
        window.removeEventListener('resize', this.$12),
        document.removeEventListener('scroll', this.$12),
        this.$3 && (this.$3.disconnect(), (this.$3 = undefined)));
    };
    a.prototype.$17 = function (a, c) {
      __p && __p();
      var d = window.getComputedStyle(a);
      if (!d || d.display == 'none') return undefined;
      d = b('getElementRect')(a);
      d = d;
      a = a.parentElement;
      var e = !1;
      while (!e) {
        var f = null;
        a == this.root || (a && a.nodeType != 1)
          ? ((e = !0), (f = c))
          : a &&
            window.getComputedStyle(a).overflow != 'visible' &&
            (f = b('getElementRect')(a));
        if (f) {
          d = i(f, d);
          if (!d) break;
        }
        a = a && a.parentElement;
      }
      return d;
    };
    a.prototype.$15 = function () {
      var a;
      if (this.root) a = b('getElementRect')(this.root);
      else {
        var c = document.documentElement,
          d = document.body,
          e = (c && c.clientWidth) || (d && d.clientWidth);
        c = (c && c.clientHeight) || (d && d.clientHeight);
        a = { top: 0, left: 0, right: e, width: e, bottom: c, height: c };
      }
      return this.$19(a);
    };
    a.prototype.$19 = function (a) {
      var b = this.$8.map(function (b, c) {
        return b.unit == 'px'
          ? b.value
          : (b.value * (c % 2 ? a.width : a.height)) / 100;
      });
      b = {
        top: a.top - b[0],
        right: a.right + b[1],
        bottom: a.bottom + b[2],
        left: a.left - b[3],
        width: 0,
        height: 0,
      };
      b.width = b.right - b.left;
      b.height = b.bottom - b.top;
      return b;
    };
    a.prototype.$18 = function (a, b) {
      __p && __p();
      a = a && a.isIntersecting ? a.intersectionRatio || 0 : -1;
      b = b.isIntersecting ? b.intersectionRatio || 0 : -1;
      if (a === b) return !1;
      for (var c = 0; c < this.thresholds.length; c++) {
        var d = this.thresholds[c];
        if (d == a || d == b || d < a !== d < b) return !0;
      }
      return !1;
    };
    a.prototype.$14 = function () {
      return !this.root || b('containsNode')(g, this.root);
    };
    a.prototype.$16 = function (a) {
      var c = this.root || g;
      return b('containsNode')(c, a);
    };
    a.prototype.$20 = function () {
      h.indexOf(this) < 0 && h.push(this);
    };
    a.prototype.$21 = function () {
      var a = h.indexOf(this);
      a != -1 && h.splice(a, 1);
    };
    a.prototype.observe = function (a) {
      __p && __p();
      if (!a) {
        b('FBLogger')('io').warn(
          'IntersectionObserverFallback target does not exist'
        );
        return;
      }
      if (
        this.$6.some(function (b) {
          return b.element == a;
        })
      )
        return;
      this.$20();
      this.$6.push({ element: a, entry: null });
      this.$11();
      this.$12();
    };
    a.prototype.unobserve = function (a) {
      (this.$6 = this.$6.filter(function (b) {
        return b.element != a;
      })),
        this.$6.length || (this.$13(), this.$21());
    };
    a.prototype.disconnect = function () {
      (this.$6 = []), this.$13(), this.$21();
    };
    a.prototype.takeRecords = function () {
      var a = this.$7.slice();
      this.$7 = [];
      return a;
    };
    e.exports = a;
  },
  null
);
__d(
  'IntersectionObserver',
  ['IntersectionObserverFallback'],
  function (a, b, c, d, e, f) {
    a =
      'IntersectionObserver' in window &&
      'IntersectionObserverEntry' in window &&
      'intersectionRatio' in window.IntersectionObserverEntry.prototype;
    e.exports = a
      ? window.IntersectionObserver
      : b('IntersectionObserverFallback');
  },
  null
);
__d(
  'intersectionObserverEntryIsIntersecting',
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      return a.isIntersecting != null
        ? a.isIntersecting
        : a.intersectionRatio > 0 ||
            (a.intersectionRect &&
              (a.intersectionRect.height > 0 || a.intersectionRect.width > 0));
    }
    e.exports = a;
  },
  null
);
__d(
  'VideoVisibilityObserver',
  [
    'EventEmitter',
    'IntersectionObserver',
    'VideoPlayerExperiments',
    'WWWSiteOrganizationGating',
    'intersectionObserverEntryIsIntersecting',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g,
      h = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
    c = b('WWWSiteOrganizationGating').largerBlueBar;
    d = c ? 49 : 44;
    var i = '-' + d + 'px 0px 0px';
    f = babelHelpers.inherits(a, b('EventEmitter'));
    g = f && f.prototype;
    function a(a) {
      __p && __p();
      g.constructor.call(this);
      this.$VideoVisibilityObserver4 = function (a) {
        a = a[a.length - 1];
        var c = this.$VideoVisibilityObserver1,
          d = this.$VideoVisibilityObserver2;
        this.$VideoVisibilityObserver1 = a.intersectionRatio;
        this.$VideoVisibilityObserver2 = b(
          'intersectionObserverEntryIsIntersecting'
        )(a);
        (c !== this.$VideoVisibilityObserver1 ||
          d !== this.$VideoVisibilityObserver2) &&
          this.emit('visibilityChanged', this.$VideoVisibilityObserver1);
      }.bind(this);
      this.$VideoVisibilityObserver1 = 0;
      this.$VideoVisibilityObserver2 = !1;
      var c = h,
        d = b(
          'VideoPlayerExperiments'
        ).videoVisibilityObserverUseMinimumThreshold;
      d && (c = [0.5]);
      this.$VideoVisibilityObserver3 = new (b('IntersectionObserver'))(
        this.$VideoVisibilityObserver4,
        { threshold: c, rootMargin: i }
      );
      this.$VideoVisibilityObserver3.observe(a);
    }
    a.prototype.destroy = function () {
      this.$VideoVisibilityObserver3 &&
        (this.$VideoVisibilityObserver3.disconnect(),
        (this.$VideoVisibilityObserver3 = null));
    };
    a.prototype.getIsIntersecting = function () {
      return this.$VideoVisibilityObserver2;
    };
    a.prototype.getCurrentIntersectionRatio = function () {
      return this.$VideoVisibilityObserver1;
    };
    e.exports = a;
  },
  null
);
__d(
  'VideoPlayerLoggerEvent',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      AUTOPLAY_PREFERENCE_CHANGED: 'autoplay_preference_changed',
      END_STALL_TIME: 'end_stall_time',
      AUTOPLAY_PREFERENCE_STATUS: 'autoplay_preference_status',
      ERROR_ALERT_SHOWN: 'video_error_alert_shown',
      COMMERCIAL_BREAK_OFFSCREEN: 'commercial_break_offscreen',
      COMMERCIAL_BREAK_ONSCREEN: 'commercial_break_onscreen',
      NOT_AUTOPLAYING: 'not_autoplaying',
      VIDEO_CHANNEL_NO_RELATED_VIDEO: 'video_channel_no_related_video',
      VIDEO_ORIENTATION_CHANGED: 'video_orientation_changed',
      AD_BREAK_STARTING_INDICATOR: 'ad_break_starting_indicator',
      AD_BREAK_NON_INTERRUPTIVE_AD_START: 'ad_break_non_interruptive_ad_start',
      AD_BREAK_NON_INTERRUPTIVE_AD_CLICK: 'ad_break_non_interruptive_ad_click',
      AD_BREAK_PRE_ROLL_AD_START: 'ad_break_pre_roll_ad_start',
      AD_BREAK_TAP_ON_TRAILER: 'ad_break_tap_on_trailer',
      AD_BREAK_TAP_START_FROM_TRAILER: 'ad_break_tap_start_from_trailer',
      ASSETS_LOADED: 'assets_loaded',
      BUFFERED: 'buffered',
      CANCELLED_REQUESTED_PLAYING: 'cancelled_requested_playing',
      CAPTION_CHANGE: 'caption_change',
      CAROUSEL_CHANGE: 'carousel_change',
      CHROMECAST_AVAILABILITY_CHECKED: 'chromecast_availabilty_checked',
      CHROMECAST_CAST_CLICKED: 'chromecast_button_clicked',
      CHROMECAST_CAST_CONNECTED: 'chromecast_connected',
      CHROMECAST_CAST_DISABLED: 'chromecast_button_disabled',
      CHROMECAST_CAST_DISCONNECTED: 'chromecast_disconnected',
      CHROMECAST_CAST_RECONNECTED: 'chromecast_reconnected',
      CHROMECAST_CAST_VISIBLE: 'chromecast_button_visible',
      CHROMECAST_NOT_SUPPORTED: 'chromecast_not_supported',
      CLICK: 'click',
      DISPLAYED: 'displayed',
      ENTERED_FALLBACK: 'entered_fallback',
      ENTERED_FS: 'entered_fs',
      ENTERED_HD: 'entered_hd',
      ERROR: 'error',
      EXITED_FS: 'exited_fs',
      EXITED_HD: 'exited_hd',
      FINISHED_LOADING: 'finished_loading',
      FINISHED_PLAYING: 'finished_playing',
      HEADSET_CONNECTED: 'headset_connected',
      HEADSET_DISCONNECTED: 'headset_disconnected',
      HEART_BEAT: 'heart_beat',
      HOST_ERROR: 'host_error',
      HTTP_STATUS_UPDATE: 'http_status_update',
      IMPRESSION: 'impression',
      INLINE_CLICK_TO_PLAY: 'inline_click_to_play',
      INVALID_URL: 'invalid_url',
      MUTED: 'muted',
      NO_SURFACE_UPDATE: 'no_surface_update',
      PAUSED: 'paused',
      PLAY_REQUESTED: 'play_requested',
      PLAY_REQUESTED_OOB: 'play_requested_oob',
      PLAYER_ALLOCATED: 'player_allocated',
      PLAYER_FORMAT_CHANGED: 'player_format_changed',
      PLAYER_LOADED: 'player_loaded',
      PLAYING_LIVE_STARTED: 'playing_live_started',
      PLAYING_LIVE_STOPPED: 'playing_live_stopped',
      POP_FAILOVER: 'pop_failover',
      PROGRESS: 'progress',
      QUALITY_CHANGE: 'quality_change',
      R2D2_SUMMARY: 'r2d2_summary',
      R2D2_EVENT_VALIDATION: 'r2d2_event_validation',
      READY_TO_PLAY: 'ready_to_play',
      REPLAYED: 'replayed',
      REPRESENTATION_ENDED: 'representation_ended',
      REPRESENTATION_FIRST_ENDED: 'representation_first_ended',
      REQUESTED: 'requested',
      REQUESTED_PLAYING: 'requested_playing',
      SCRUBBED: 'scrubbed',
      SEEKED: 'seeked',
      SPLASH_DISPLAYED: 'splash_displayed',
      STALE: 'stale',
      STARTED_PLAYING: 'started_playing',
      STARTED_RECEIVING_BYTES: 'started_receiving_bytes',
      STOPPED_PLAYING: 'stopped_playing',
      STREAM_RESET: 'stream_reset',
      SURFACE_UPDATED: 'surface_updated',
      SWITCHED_IMPLEMENTATION: 'switched_implementation',
      UNMUTED: 'unmuted',
      UNPAUSED: 'unpaused',
      VIDEO_CHAINING_IMPRESSION: 'video_chaining_impression',
      VIDEO_CHAINING_TAP: 'video_chaining_tap',
      VIDEO_CLICKED_WITHIN_PLAYER: 'video_clicked_within_player',
      VIDEO_PLAYER_SERVICE_DISCONNECTED: 'video_player_service_disconnected',
      VIDEO_PLAYER_SERVICE_RECONNECTED: 'video_player_service_reconnected',
      VIDEO_PLAYER_SERVICE_UNAVAILABLE: 'video_player_service_unavailable',
      VIDEO_PLAYING: 'video_playing',
      VIDEO_SKIP_AD: 'video_skip_ad',
      VOLUME_CHANGED: 'volume_changed',
      VOLUME_DECREASE: 'volume_decrease',
      VOLUME_INCREASE: 'volume_increase',
      WATCH_AND_SCROLL_CHANNEL_ENTERED: 'watch_and_scroll_channel_entered',
      WATCH_AND_SCROLL_EXITED: 'watch_and_scroll_exited',
      WATCH_AND_SCROLL_ICON_HIGHLIGHTED: 'watch_and_scroll_icon_highlighted',
      WATCH_AND_SCROLL_ICON_UNHIGHLIGHTED:
        'watch_and_scroll_icon_unhighlighted',
      WATCH_AND_SCROLL_PAUSED: 'watch_and_scroll_paused',
      LIVE_SEGMENT_LOAD_ERROR: 'live_segment_load_error',
      MANIFEST_DATA_TYPE_ERROR: 'manifest_data_type_error',
      MANIFEST_LOAD_ERROR: 'manifest_load_error',
      PLAYER_WARNING: 'player_warning',
      PLAYHEAD_FELL_BEHIND_ERROR: 'playhead_fell_behind_error',
      STREAM_SEGMENT_LOAD_ERROR: 'stream_segment_load_error',
      UNEXPECTED_SEGMENT_ERROR: 'unexpected_segment_error',
      NETWORK_TIMEOUT: 'network_timeout',
      VIDEO_LOGGING_SESSION_TIMEOUT: 'video_logging_session_timeout',
      COMPLETION: 'completion',
      VIEW: 'view',
      PLAYED_FOR_THREE_SECONDS: 'played_for_three_seconds',
      GUIDE_ENTERED: 'guide_entered',
      GUIDE_EXITED: 'guide_exited',
      HEADING_RESET: 'heading_reset',
      SPHERICAL_FALLBACK_ENTERED: 'spherical_fallback_entered',
      SPHERICAL_VIDEO_FALLBACK_CTA_CLICKED:
        'spherical_video_fallback_cta_clicked',
      VIEWPORT_ROTATED: 'viewport_rotated',
      VIEWPORT_ZOOMED: 'viewport_zoomed',
      BANZAI_OAUTH_GK_ERROR: 'banzai_oauth_gk_error',
      BANZAI_OAUTH_PARSE_ERROR: 'banzai_oauth_parse_error',
      BANZAI_OAUTH_SESSION_ERROR: 'banzai_oauth_session_error',
      VIEWABILITY_CHANGED: 'viewability_changed',
    });
  },
  null
);
__d(
  'VideoPlayerLoggerFallbackReasons',
  [],
  function (a, b, c, d, e, f) {
    e.exports = {
      TIMEOUT: 'timeout',
      FLASH_ERROR: 'flash_error',
      FLASH_UNAVAILABLE: 'flash_unavailable',
    };
  },
  null
);
__d(
  'VideoPlayerReason',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      AUTOPLAY: 'autoplay_initiated',
      COMMERCIAL_BREAK: 'commercial_break',
      CONNECTION: 'host-connection-error',
      EMBEDDED_VIDEO_API: 'embedded_video_api_initiated',
      FALLBACK_MODE: 'fallback_mode',
      HOVER: 'hover',
      LOOP: 'loop_initiated',
      NETWORK_INTERRUPTED: 'network_interrupted',
      NETWORK_RESUMED: 'network_resumed',
      PAGE_VISIBILITY: 'page_visibility_initiated',
      SEEK: 'seek_initiated',
      SPHERICAL_FALLBACK: 'spherical_fallback',
      SPHERICAL_SWITCH_CANVAS: 'spherical_switch_canvas',
      SPHERICAL_FAILED: 'spherical_failed',
      UNLOADED: 'unloaded',
      USER: 'user_initiated',
      VIDEO_DATA_REPLACED: 'video_data_replaced',
      VIDEO_DATA_SWITCH: 'video_data_switch',
      VIDEO_VISIBILITY: 'video_visibility_initiated',
      VOD_NOT_READY: 'vod_not_ready',
      WARNING_SCREEN_COVER: 'warning_screen_cover',
    });
  },
  null
);
__d(
  'VideoWithFallbackMode',
  [
    'Event',
    'SubscriptionsHandler',
    'TimeSlice',
    'VideoPlayerExperiments',
    'VideoPlayerLoggerEvent',
    'VideoPlayerLoggerFallbackReasons',
    'VideoPlayerReason',
    'Visibility',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a, c) {
      (this.$1 = !1),
        (this.$2 = !1),
        (this.$5 = function () {
          (this.$1 = !0),
            b('VideoPlayerExperiments').disableFallbackModeForInactiveTab &&
              this.$2 &&
              (this.$6.play(b('VideoPlayerReason').FALLBACK_MODE),
              (this.$2 = !1));
        }.bind(this)),
        (this.$8 = function () {
          this.$1 = !1;
        }.bind(this)),
        (this.$3 = new (b('SubscriptionsHandler'))()),
        c || ((c = a), (a = null)),
        (this.$4 = c),
        a && this.enable(a);
    }
    a.prototype.enable = function (a) {
      __p && __p();
      this.$3.engage();
      this.$6 = a;
      if (
        this.$6.isImplementationUnavailable() ||
        this.$6.getOption('SphericalVideoPlayer', 'isUnavailable')
      ) {
        this.$7(b('VideoPlayerLoggerFallbackReasons').FLASH_UNAVAILABLE);
        return;
      }
      this.$3.addSubscriptions(
        b('Event').listen(window, 'blur', this.$8),
        b('Event').listen(window, 'focus', this.$5),
        b('Visibility').addListener(b('Visibility').HIDDEN, this.$8),
        b('Visibility').addListener(b('Visibility').VISIBLE, this.$5),
        a.addListener('error', this.$9.bind(this))
      );
      if (this.$4.fallbackTimeoutMs) {
        a = this.$4.fallbackTimeoutMs;
        this.$10 = setTimeout(
          b('TimeSlice').guard(
            function () {
              this.$6.isState('loading') &&
                (this.$6.pause(b('VideoPlayerReason').FALLBACK_MODE),
                this.$7(b('VideoPlayerLoggerFallbackReasons').TIMEOUT),
                (this.$2 = !0));
            }.bind(this),
            'VideoWithFallbackMode fallbackTimeout',
            { propagationType: b('TimeSlice').PropagationType.EXECUTION }
          ),
          a
        );
      }
    };
    a.prototype.disable = function () {
      this.$3.release(),
        clearTimeout(this.$10),
        (this.$10 = null),
        (this.$6 = null);
    };
    a.prototype.$9 = function (a) {
      if (this.$6.isState('fallback')) return;
      this.$6.isState('playing') &&
        this.$6.pause(b('VideoPlayerReason').FALLBACK_MODE);
      this.$6.abortLoading();
      a
        ? this.$7(a)
        : (this.$7(b('VideoPlayerLoggerFallbackReasons').FLASH_ERROR),
          (this.$2 = !0));
    };
    a.prototype.$7 = function (a) {
      if (
        b('VideoPlayerExperiments').disableFallbackModeForInactiveTab &&
        !this.$1
      )
        return;
      this.$6.setState('fallback');
      a === b('VideoPlayerLoggerFallbackReasons').TIMEOUT &&
        this.$6.emit('VideoWithStallRecoveryOverlay/timeout');
      this.$6.logEvent(b('VideoPlayerLoggerEvent').ENTERED_FALLBACK, {
        debug_reason: a,
      });
    };
    e.exports = a;
  },
  null
);
__d(
  'VideoPlayerApiEvents',
  [],
  function (a, b, c, d, e, f) {
    a = [
      'buffered',
      'buffering',
      'bufferingProgress',
      'beginPlayback',
      'updateStatus',
      'logEvent',
      'pausePlayback',
      'playbackNotAllowed',
      'clickVideo',
      'clickForTracking',
      'finishPlayback',
      'unmuteVideo',
      'muteVideo',
      'changeVolume',
      'turnOffAutoplay',
      'updateBuffer',
      'updateMetadata',
      'qualityChange',
      'updateViewportBegin',
      'updateViewportMove',
      'updateViewportEnd',
      'dimensionsChange',
      'viewportChange',
      'wheelScroll',
      'error',
      'loadedSubtitles',
      'toggleSubtitles',
      'toggleFullscreen',
      'seekEnd',
      'seekRangeChanged',
      'streamInterrupted',
      'streamResumed',
      'networkInterrupted',
      'networkResumed',
      'debug/dashPlayerEvent',
      'abortedLoading',
      'restoringAfterAbort',
      'restoredAfterAbort',
      'sphericalOrientationChange',
      'videoNodeStaled',
    ];
    e.exports = a;
  },
  null
);
__d(
  'AbstractVideoPlayerApi',
  ['invariant', 'EventEmitter', 'VideoPlayerApiEvents'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h, i;
    h = babelHelpers.inherits(a, b('EventEmitter'));
    i = h && h.prototype;
    a.prototype.addListener = function () {
      for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++)
        b[c] = arguments[c];
      return i.addListener.apply(this, b);
    };
    a.prototype.emit = function () {
      for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++)
        b[c] = arguments[c];
      return i.emit.apply(this, b);
    };
    a.prototype.setRelativeSphericalOrientation = function (a, b) {};
    a.isImplementationUnavailable = function () {
      return !0;
    };
    a.prototype.isDrm = function () {
      return !1;
    };
    function a() {
      h.apply(this, arguments);
    }
    e.exports = a;
  },
  null
);
__d(
  'VideoConfig',
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      Object.assign(this, a);
    }
    e.exports = a;
  },
  null
);
__d(
  'VideoData',
  ['invariant'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    function h(a) {
      this.$1 = a || {
        aspect_ratio: 0,
        original_height: 0,
        original_width: 0,
        video_id: '',
      };
    }
    h.prototype.hasHD = function () {
      return !!this.$1.hd_src;
    };
    h.prototype.getEncodingTag = function () {
      return this.$1.encoding_tag;
    };
    h.prototype.getContentCategory = function () {
      return this.$1.content_category;
    };
    h.prototype.getVideoID = function () {
      return this.$1.video_id;
    };
    h.prototype.getVideoURL = function () {
      return this.$1.video_url;
    };
    h.prototype.getAspectRatio = function () {
      return this.$1.aspect_ratio;
    };
    h.prototype.getRotation = function () {
      return this.$1.rotation || 0;
    };
    h.prototype.hasSubtitles = function () {
      return !!this.$1.subtitles_src;
    };
    h.prototype.hasDashManifest = function () {
      return !!this.$1.dash_manifest;
    };
    h.prototype.getDashManifest = function () {
      return this.$1.dash_manifest;
    };
    h.prototype.hasHighlightsManifest = function () {
      return !!this.$1.highlights_manifest;
    };
    h.prototype.getHighlightsManifest = function () {
      return this.$1.highlights_manifest;
    };
    h.prototype.getDashPrefetchedRepresentationIDs = function () {
      return this.$1.dash_prefetched_representation_ids;
    };
    h.prototype.getSubtitlesSrc = function () {
      this.$1.subtitles_src || g(0, undefined);
      return this.$1.subtitles_src;
    };
    h.prototype.getPlayableSrcSD = function () {
      return this.$1.sd_src_no_ratelimit
        ? this.$1.sd_src_no_ratelimit
        : this.getPlayableSrcRateLimitedSD();
    };
    h.prototype.getPlayableSrcHD = function () {
      return this.$1.hd_src_no_ratelimit
        ? this.$1.hd_src_no_ratelimit
        : this.getPlayableSrcRateLimitedHD();
    };
    h.prototype.getPlayableSrcRateLimitedSD = function () {
      return this.$1.sd_src;
    };
    h.prototype.getPlayableSrcRateLimitedHD = function () {
      return this.$1.hd_src;
    };
    h.prototype.getLiveManifestUrl = function () {
      this.isLiveStream() || g(0, undefined);
      return this.getPlayableSrcRateLimitedSD();
    };
    h.prototype.hasRateLimit = function () {
      return !!this.$1.sd_src_no_ratelimit;
    };
    h.prototype.getStreamType = function () {
      this.$1.stream_type || g(0, undefined);
      return this.$1.stream_type;
    };
    h.prototype.isBroadcast = function () {
      return !!this.$1.is_broadcast;
    };
    h.prototype.isServableViaFbms = function () {
      return !!this.$1.is_servable_via_fbms;
    };
    h.prototype.isLiveStream = function () {
      return !!this.$1.is_live_stream;
    };
    h.prototype.isFacecastAudio = function () {
      return !!this.$1.is_facecast_audio;
    };
    h.prototype.liveRoutingToken = function () {
      return this.$1.live_routing_token;
    };
    h.prototype.getHDTag = function () {
      return this.$1.hd_tag;
    };
    h.prototype.getSDTag = function () {
      return this.$1.sd_tag;
    };
    h.prototype.getProjection = function () {
      return this.$1.projection;
    };
    h.prototype.getPlayerVersionOverwrite = function () {
      return this.$1.player_version_overwrite;
    };
    h.prototype.getFalloverData = function () {
      var a = this.$1.fallover_data;
      return a
        ? a.map(function (a) {
            return new h(a);
          })
        : [];
    };
    h.prototype.getSphericalConfig = function () {
      return this.$1.spherical_config;
    };
    h.prototype.isSpherical = function () {
      return !!this.$1.is_spherical;
    };
    h.prototype.getOriginalHeight = function () {
      return this.$1.original_height;
    };
    h.prototype.getOriginalWidth = function () {
      return this.$1.original_width;
    };
    h.prototype.getOverrideConfig = function () {
      return this.$1.override_config;
    };
    h.prototype.getRawData = function () {
      return this.$1;
    };
    h.prototype.getPrefetchCache = function () {
      return this.$1.prefetch_cache;
    };
    e.exports = h;
  },
  null
);
__d(
  'dangerouslyOverrideMediaElementEndedProperty',
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      a === void 0 && (a = {});
      a.dangerouslyOverrideMediaElementEndedProperty = !0;
      return a;
    }
    a.isEnded = function (event) {
      return !!(
        event &&
        event.detail &&
        event.detail.dangerouslyOverrideMediaElementEndedProperty
      );
    };
    e.exports = a;
  },
  null
);
__d(
  'HTMLMediaElementReadyStates',
  [],
  function (a, b, c, d, e, f) {
    a = {
      HAVE_NOTHING: 0,
      HAVE_METADATA: 1,
      HAVE_CURRENT_DATA: 2,
      HAVE_FUTURE_DATA: 3,
      HAVE_ENOUGH_DATA: 4,
    };
    e.exports = a;
  },
  null
);
__d(
  'getHTMLMediaElementMutedState',
  ['HTMLMediaElementReadyStates'],
  function (a, b, c, d, e, f) {
    function a(a) {
      if (a.readyState >= b('HTMLMediaElementReadyStates').HAVE_METADATA)
        return a.muted;
      else return a.hasAttribute('muted') || a.muted;
    }
    e.exports = a;
  },
  null
);
__d(
  'HVideoPlayerMixin',
  [
    'EventListener',
    'UserAgent',
    'VideoPlayerHTML5Experiments',
    'VideoPlayerLoggerEvent',
    'dangerouslyOverrideMediaElementEndedProperty',
    'getHTMLMediaElementMutedState',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = -1,
      h = !!(
        window.performance &&
        window.performance.now &&
        window.performance.timing &&
        window.performance.timing.navigationStart
      );
    function i(a, event) {
      __p && __p();
      a.time_ms = Date.now();
      var b = event.timeStamp;
      if (b && h) {
        var c = Math.floor(b).toString().length,
          d = Date.now().toString().length,
          e = window.performance.now();
        if (c === d + 3) (b = Math.floor(b / 1e3)), (a.time_ms = b);
        else if (c === d) a.time_ms = b;
        else if (b <= e) {
          c = window.performance.timing.navigationStart;
          a.time_ms = c + Math.floor(b);
        }
      }
      return a;
    }
    a = {
      initLogger: function (a, c, d) {
        __p && __p();
        this._loggedEvents = {};
        this._logFunction = a;
        this._useEventTime = c;
        a = this.getVideoElement();
        d &&
          (this._overwriteVideoCurrentTimeProperty(a),
          this._didOverwriteVideoCurrentTimeProperty ||
            (this.preventSeekLoggingInMixin = !0));
        this._lastStartTimePosition = g;
        this._muted = b('getHTMLMediaElementMutedState')(a);
        this._pausedPosition = g;
        this._seeking = !1;
        this._seekSourceTimePosition = g;
        this._currentTimeAtSeekStart = g;
        this._volume = a.volume;
        this._hasBlockedPausedRepresentationEnded = !1;
        this._logNextPlayingEvent = !0;
        this._lastPlayedTime = g;
        c = !1;
        a.readyState >= a.HAVE_FUTURE_DATA ? this._logReadyToPlay() : (c = !0);
        if (this.skipSubscriptions()) return;
        d = this.getSubscriptions();
        c &&
          d.addSubscriptions(
            b('EventListener').listen(
              a,
              'canplay',
              this._logReadyToPlay.bind(this)
            )
          );
        d.addSubscriptions(
          b('EventListener').listen(a, 'ended', this.onEnded.bind(this)),
          b('EventListener').listen(a, 'pause', this.onPause.bind(this)),
          b('EventListener').listen(a, 'playing', this.onPlaying.bind(this)),
          b('EventListener').listen(a, 'seeked', this.onSeeked.bind(this)),
          b('EventListener').listen(a, 'seeking', this.onSeeking.bind(this)),
          b('EventListener').listen(a, 'play', this.onPlay.bind(this)),
          b('EventListener').listen(
            a,
            'loadedmetadata',
            this.onLoadedMetadata.bind(this)
          ),
          b('EventListener').listen(
            a,
            'timeupdate',
            this.onTimeUpdate.bind(this)
          ),
          b('EventListener').listen(
            a,
            'volumechange',
            this.onVolumeChange.bind(this)
          )
        );
      },
      skipSubscriptions: function () {
        return !1;
      },
      onCanPlay: function (a) {
        this._logReadyToPlay(a);
      },
      onPlay: function (a) {
        (this._logNextPlayingEvent = !0),
          (this._ignoreNextPlaying = !1),
          (this._pendingPlayRequest = !0);
      },
      logHeartbeat: function () {
        if (b('VideoPlayerHTML5Experiments').heartbeatUpdateWatchTime) {
          this._logEvent(
            b('VideoPlayerLoggerEvent').HEART_BEAT,
            this._getWatchTimeClosingLogData({})
          );
          var a = this._getVideoCurrentTime();
          this._lastStartTimePosition = a;
          this._lastPlayedTime = a;
        } else this._logEvent(b('VideoPlayerLoggerEvent').HEART_BEAT);
      },
      _getWatchTimeClosingLogData: function (a) {
        this._lastPlayedTime = this._getVideoCurrentTime();
        return this._amendEventTime(
          babelHelpers['extends'](
            {
              video_last_start_time_position:
                this._lastStartTimePosition === g
                  ? this._lastPlayedTime
                  : this._lastStartTimePosition,
              video_time_position: this._lastPlayedTime,
            },
            a
          )
        );
      },
      _logOnce: function (event, a) {
        if (this._loggedEvents[event]) return;
        this._logEvent(event, a);
      },
      _logEvent: function (event, a) {
        __p && __p();
        this._loggedEvents[event] = !0;
        a = a ? a : {};
        a.video_id = this.getVideoID();
        a.has_blocked_paused_representation_ended =
          this._hasBlockedPausedRepresentationEnded;
        Object.prototype.hasOwnProperty.call(a, 'video_time_position') ||
          (a.video_time_position = this._getVideoCurrentTime());
        a.time_ms || (a.time_ms = Date.now());
        a.time = Math.round(a.time_ms / 1e3);
        if (this.getAdClientToken) {
          var b = this.getAdClientToken();
          b && (a.ad_client_token = b);
        }
        this.getPlayerFormat && (a.player_format = this.getPlayerFormat());
        this.getPlayerOrigin && (a.player_origin = this.getPlayerOrigin());
        this.getPlayerSuborigin &&
          (a.player_suborigin = this.getPlayerSuborigin());
        if (this.getExternalLogIDAndType) {
          b = this.getExternalLogIDAndType();
          var c = b.externalLogID;
          b = b.externalLogType;
          a.external_log_id = c;
          a.external_log_type = b;
        }
        this._logFunction(event, a);
      },
      _logReadyToPlay: function () {
        this._logOnce(b('VideoPlayerLoggerEvent').READY_TO_PLAY);
      },
      onPause: function (a) {
        __p && __p();
        this._logNextPlayingEvent = !0;
        var c = this.getVideoElement();
        if (this._pendingPlayRequest) {
          var d = { debug_reason: this.getLastPlayReason() };
          this._pendingPlayRequest = !1;
          this._logEvent(
            b('VideoPlayerLoggerEvent').CANCELLED_REQUESTED_PLAYING,
            d
          );
          return;
        }
        d =
          !!this._getVideoPlayerShakaConfig() &&
          this._getVideoPlayerShakaConfig().getBool(
            'abort_loading_decisioning_logic',
            !1
          );
        var event =
          c.ended ||
          (d && b('dangerouslyOverrideMediaElementEndedProperty').isEnded(a))
            ? b('VideoPlayerLoggerEvent').FINISHED_PLAYING
            : b('VideoPlayerLoggerEvent').PAUSED;
        d = this._getVideoCurrentTime();
        d && (this._lastPlayedTime = d);
        d = this._lastPlayedTime;
        var e =
          this._lastStartTimePosition === g
            ? this._lastPlayedTime
            : this._lastStartTimePosition;
        b('VideoPlayerHTML5Experiments').preventNegativeTimePositions &&
          this._lastPlayedTime < 0 &&
          ((d = 0), this._lastStartTimePosition < 0 && (e = 0));
        var f = a.lastPauseReason;
        if (event === b('VideoPlayerLoggerEvent').FINISHED_PLAYING)
          d = Math.max(d, c.duration);
        else if (this.preventPauseLoggingInMixin === !0) return;
        else this.preventPauseLoggingInMixin === !1 && (f = f || 'unloaded');
        this._logEvent(
          event,
          this._amendEventTime(
            {
              video_last_start_time_position: e,
              video_time_position: d,
              debug_reason: f,
            },
            a
          )
        );
        this._lastStartTimePosition = g;
      },
      onEnded: function () {
        (this._logNextPlayingEvent = !0),
          this._lastStartTimePosition !== g &&
            b('UserAgent').isBrowser('IE') &&
            this.onPause({});
      },
      onBlockedPausedRepresentationEnded: function () {
        this._hasBlockedPausedRepresentationEnded = !0;
      },
      logRepresentationEnded: function (a) {
        __p && __p();
        if (a) {
          a = {
            representation_id: a.representationID,
            next_representation_id: a.nextRepresentationID,
            stream_switch_reason: a.streamSwitchReason,
          };
          b('VideoPlayerHTML5Experiments').newStateChangeCalculation &&
            (a = this._getWatchTimeClosingLogData(a));
          this._logEvent(b('VideoPlayerLoggerEvent').REPRESENTATION_ENDED, a);
          if (b('VideoPlayerHTML5Experiments').newStateChangeCalculation) {
            a = this._getVideoCurrentTime();
            this._lastStartTimePosition = a;
            this._lastPlayedTime = a;
          }
        }
      },
      addWatchTimeData: function (a) {
        this._lastStartTimePosition != g &&
          this._lastPlayedTime != g &&
          ((a.video_last_start_time_position = this._lastStartTimePosition),
          (a.video_time_position = this._lastPlayedTime),
          (this._lastStartTimePosition = g));
        return a;
      },
      getLastPlayReason: function () {
        return null;
      },
      getVideoPlayReason: function () {
        return null;
      },
      onPlaying: function (a) {
        __p && __p();
        if (!this._logNextPlayingEvent) return;
        b('VideoPlayerHTML5Experiments').superficialUnpauseEventsFix &&
          (this._logNextPlayingEvent = !1);
        if (this._ignoreNextPlaying) {
          this._ignoreNextPlaying = !1;
          return;
        }
        var c = this.getLastPlayReason();
        this._pendingPlayRequest = !1;
        var event = this._loggedEvents[
          b('VideoPlayerLoggerEvent').STARTED_PLAYING
        ]
          ? b('VideoPlayerLoggerEvent').UNPAUSED
          : b('VideoPlayerLoggerEvent').STARTED_PLAYING;
        c = this._amendEventTime(
          { debug_reason: c, video_play_reason: this.getVideoPlayReason() },
          a
        );
        a = this._getVideoCurrentTime();
        if (b('VideoPlayerHTML5Experiments').useCurrentTimeAdjustment) {
          var d = this.getVideoElement().currentTime;
          d = d - a;
          c.time_ms -= Math.round(d * 1e3);
        }
        this._logEvent(event, c);
        this._lastStartTimePosition = a;
        this._lastPlayedTime = a;
        this._currentTimeAtLoadedMetadataCache = null;
      },
      allowNextSeekInMixin: function () {
        this._allowNextSeek = !0;
      },
      onSeeked: function (a) {
        __p && __p();
        this._seeking = !1;
        var c = this._seekSourceTimePosition;
        this._seekSourceTimePosition = g;
        if (this.preventSeekLoggingInMixin && !this._allowNextSeek) {
          this._pendingPlayRequest || (this._ignoreNextPlaying = !0);
          return;
        }
        this._allowNextSeek = !1;
        this._ignoreNextPlaying = !1;
        var d = {
          video_seek_source_time_position: c,
          video_last_start_time_position: c,
        };
        this.preventSeekLoggingInMixin &&
          (this._lastStartTimePosition !== g
            ? (d.video_last_start_time_position = this._lastStartTimePosition)
            : (d.video_last_start_time_position = c));
        this._logEvent(
          b('VideoPlayerLoggerEvent').SCRUBBED,
          this._amendEventTime(d, a)
        );
        c = this.getVideoElement();
        c.paused
          ? (this._lastStartTimePosition = g)
          : (this._lastStartTimePosition = this._getVideoCurrentTime());
      },
      onSeeking: function (a) {
        (this._currentTimeAtLoadedMetadataCache = null),
          this._seeking ||
            ((this._seekSourceTimePosition = this._getVideoCurrentTime()),
            (this._seeking = !0)),
          (this._currentTimeAtSeekStart = g);
      },
      onTimeUpdate: function (a) {
        this._currentTimeAtLoadedMetadataCache = null;
        a = this.getVideoElement();
        a.paused || (this._lastPlayedTime = this._getVideoCurrentTime());
      },
      onVolumeChange: function (a) {
        __p && __p();
        var c = this.getVideoElement(),
          d = {},
          event = null;
        if (b('VideoPlayerHTML5Experiments').useFixedVolumeLogging) {
          var e = c.muted,
            f = this._muted,
            g = c.volume,
            h = this._volume;
          d.current_volume = Math.round(g * 100);
          this._volume = g;
          this._muted = e;
          e = e || g == 0;
          f = f || h == 0;
          if (f && e) return;
          if (f != e)
            e
              ? (event = b('VideoPlayerLoggerEvent').MUTED)
              : (event = b('VideoPlayerLoggerEvent').UNMUTED);
          else {
            if (h == g) return;
            g < h
              ? (event = b('VideoPlayerLoggerEvent').VOLUME_DECREASE)
              : (event = b('VideoPlayerLoggerEvent').VOLUME_INCREASE);
          }
        } else
          c.muted !== this._muted && c.volume === this._volume && c.volume > 0
            ? (event = c.muted
                ? b('VideoPlayerLoggerEvent').MUTED
                : b('VideoPlayerLoggerEvent').UNMUTED)
            : ((event =
                c.volume > this._volume
                  ? b('VideoPlayerLoggerEvent').VOLUME_INCREASE
                  : b('VideoPlayerLoggerEvent').VOLUME_DECREASE),
              (d.current_volume = Math.round(c.volume * 100))),
            (this._muted = c.muted),
            (this._volume = c.volume);
        this._logEvent(event, this._amendEventTime(d, a));
      },
      _amendEventTime: function (a, event) {
        var c = this._useEventTime;
        b('VideoPlayerHTML5Experiments').fixEventTimeLogging &&
          (c = c && event);
        if (c) return i(a, event);
        else a.time_ms = Date.now();
        return a;
      },
      _getVideoCurrentTime: function () {
        var a =
          this._currentTimeAtSeekStart === g
            ? this.getVideoElement().currentTime
            : this._currentTimeAtSeekStart;
        a = a.toFixed(2);
        b('VideoPlayerHTML5Experiments').useCurrentTimeAdjustment &&
          this._currentTimeAtLoadedMetadataCache != null &&
          (a = this._currentTimeAtLoadedMetadataCache.toFixed(2));
        return b('VideoPlayerHTML5Experiments').fixCurrentTimeType ? +a : a;
      },
      _getVideoPlayerShakaConfig: function () {
        return this.getVideoPlayerShakaConfig &&
          typeof this.getVideoPlayerShakaConfig === 'function'
          ? this.getVideoPlayerShakaConfig()
          : null;
      },
      onLoadedMetadata: function (a) {
        this._currentTimeAtLoadedMetadataCache =
          this.getVideoElement().currentTime;
      },
      _overwriteVideoCurrentTimeProperty: function (a) {
        __p && __p();
        this._didOverwriteVideoCurrentTimeProperty = !1;
        try {
          var b =
            Object.getOwnPropertyDescriptor &&
            Object.getOwnPropertyDescriptor(
              HTMLMediaElement.prototype,
              'currentTime'
            );
          if (!b) return;
          if (typeof b.get !== 'function' || typeof b.set !== 'function')
            return;
          Object.defineProperty &&
            Object.defineProperty(a, 'currentTime', {
              get: function () {
                return b.get.call(this);
              },
              set: function (c) {
                this._currentTimeAtSeekStart === g &&
                  (this._currentTimeAtSeekStart = b.get.call(a)),
                  b.set.call(a, c);
              }.bind(this),
              configurable: !0,
              enumerable: !0,
            });
          this._didOverwriteVideoCurrentTimeProperty = !0;
        } catch (a) {}
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'MediaBufferingDetector',
  [
    'Event',
    'EventEmitter',
    'SubscriptionsHandler',
    'VideoPlayerExperiments',
    'VideoPlayerHTML5Experiments',
    'VideoPlayerShakaGlobalConfig',
    'clearInterval',
    'performanceNow',
    'setInterval',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g;
    c = babelHelpers.inherits(a, b('EventEmitter'));
    g = c && c.prototype;
    function a(a, c) {
      g.constructor.call(this),
        (this.$MediaBufferingDetector1 = a),
        (this.$MediaBufferingDetector2 = new (b('SubscriptionsHandler'))()),
        this.$MediaBufferingDetector1.paused || this.$MediaBufferingDetector8(),
        this.$MediaBufferingDetector2.addSubscriptions(
          b('Event').listen(
            this.$MediaBufferingDetector1,
            'playing',
            function () {
              return this.$MediaBufferingDetector9();
            }.bind(this)
          ),
          b('Event').listen(
            this.$MediaBufferingDetector1,
            'pause',
            function () {
              return this.$MediaBufferingDetector10();
            }.bind(this)
          ),
          b('Event').listen(
            this.$MediaBufferingDetector1,
            'ended',
            function () {
              return this.$MediaBufferingDetector11();
            }.bind(this)
          ),
          b('Event').listen(
            this.$MediaBufferingDetector1,
            'timeupdate',
            function () {
              return this.$MediaBufferingDetector12();
            }.bind(this)
          )
        ),
        this.$MediaBufferingDetector13(
          'drop_buffering_detection_from_html5_api',
          !1
        ) &&
          this.$MediaBufferingDetector2.addSubscriptions(
            b('Event').listen(
              this.$MediaBufferingDetector1,
              'waiting',
              function () {
                return this.$MediaBufferingDetector14();
              }.bind(this)
            )
          );
    }
    a.prototype.$MediaBufferingDetector15 = function () {
      var a = b('performanceNow')(),
        c = this.$MediaBufferingDetector1.currentTime;
      a = a - this.$MediaBufferingDetector5;
      c = c - this.$MediaBufferingDetector6;
      c = c * 1e3;
      c = a - c;
      var d =
        b('VideoPlayerHTML5Experiments').disableBufferAtEndOfPlayback &&
        this.$MediaBufferingDetector1.currentTime ===
          this.$MediaBufferingDetector1.duration;
      a * 0.2 < Math.abs(c) && !d
        ? this.$MediaBufferingDetector16()
        : this.$MediaBufferingDetector17();
      this.$MediaBufferingDetector18();
    };
    a.prototype.$MediaBufferingDetector18 = function () {
      (this.$MediaBufferingDetector5 = b('performanceNow')()),
        (this.$MediaBufferingDetector6 =
          this.$MediaBufferingDetector1.currentTime);
    };
    a.prototype.$MediaBufferingDetector8 = function () {
      if (this.$MediaBufferingDetector4) return;
      this.$MediaBufferingDetector18();
      this.$MediaBufferingDetector4 = b('setInterval')(
        function () {
          return this.$MediaBufferingDetector15();
        }.bind(this),
        500
      );
    };
    a.prototype.$MediaBufferingDetector19 = function () {
      b('clearInterval')(this.$MediaBufferingDetector4),
        (this.$MediaBufferingDetector4 = null);
    };
    a.prototype.$MediaBufferingDetector16 = function () {
      if (this.$MediaBufferingDetector3) return;
      this.$MediaBufferingDetector3 = !0;
      this.emit('bufferingStart');
    };
    a.prototype.$MediaBufferingDetector17 = function () {
      if (!this.$MediaBufferingDetector3) return;
      this.$MediaBufferingDetector3 = !1;
      this.emit('bufferingEnd');
    };
    a.prototype.$MediaBufferingDetector9 = function () {
      this.$MediaBufferingDetector17(), this.$MediaBufferingDetector8();
    };
    a.prototype.$MediaBufferingDetector10 = function () {
      this.$MediaBufferingDetector17(), this.$MediaBufferingDetector19();
    };
    a.prototype.$MediaBufferingDetector11 = function () {
      this.$MediaBufferingDetector17(), this.$MediaBufferingDetector19();
    };
    a.prototype.$MediaBufferingDetector12 = function () {
      this.$MediaBufferingDetector1.paused ||
        (this.$MediaBufferingDetector17(),
        this.$MediaBufferingDetector19(),
        this.$MediaBufferingDetector8());
    };
    a.prototype.$MediaBufferingDetector14 = function () {
      this.$MediaBufferingDetector19(), this.$MediaBufferingDetector16();
    };
    a.prototype.$MediaBufferingDetector13 = function (a, c) {
      return this.$MediaBufferingDetector7
        ? this.$MediaBufferingDetector7.getBool(a, c)
        : b('VideoPlayerShakaGlobalConfig').getBool(a, c);
    };
    a.prototype.destroy = function () {
      b('VideoPlayerExperiments').fireBufferingEndEventOnDestroy &&
        this.$MediaBufferingDetector17(),
        this.$MediaBufferingDetector19(),
        this.$MediaBufferingDetector2.release();
    };
    e.exports = a;
  },
  null
);
__d(
  'VideoFrameBuffer',
  ['HTMLMediaElementReadyStates'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a, b, c, d, e, f, g) {
      d === void 0 && (d = null),
        e === void 0 && (e = null),
        f === void 0 && (f = null),
        g === void 0 && (g = null),
        (this.$2 = b),
        (this.$1 = a),
        (this.$3 = c || 'contain'),
        (this.$6 = d),
        (this.$7 = e),
        (this.$8 = f),
        (this.$9 = g);
    }
    a.prototype.updateFrameBuffer = function () {
      __p && __p();
      this.$4 && ((this.$1.width = this.$4), (this.$4 = null));
      this.$5 && ((this.$1.height = this.$5), (this.$5 = null));
      if (
        this.$2.readyState < b('HTMLMediaElementReadyStates').HAVE_CURRENT_DATA
      )
        return;
      var a = this.$1.clientWidth || this.$1.width,
        c = this.$1.clientHeight || this.$1.height,
        d = a,
        e = c,
        f = this.$2.videoWidth / this.$2.videoHeight,
        g = d / e;
      this.$3 === 'cover' && ((g *= -1), (f *= -1));
      g > f ? (d = e * f) : g < f && (e = d / f);
      g = this.$1.getContext('2d');
      if (!(g instanceof window.CanvasRenderingContext2D)) return;
      try {
        if (this.$6 || this.$7) {
          g.drawImage(
            this.$2,
            (f = this.$8) != null ? f : 0,
            (f = this.$9) != null ? f : 0,
            (f = this.$6) != null ? f : a,
            (f = this.$7) != null ? f : c,
            0,
            0,
            a,
            c
          );
        } else g.drawImage(this.$2, (a - d) / 2, (c - e) / 2, d, e);
      } catch (a) {
        if (a.name !== 'NS_ERROR_NOT_AVAILABLE') throw a;
      }
    };
    a.prototype.getDOMNode = function () {
      return this.$1;
    };
    a.prototype.updateDimensions = function (a, b) {
      (this.$4 = a), (this.$5 = b);
    };
    e.exports = a;
  },
  null
);
__d(
  'VideoPlaybackQuality',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a) {
      if (typeof a.getVideoPlaybackQuality === 'function')
        return a.getVideoPlaybackQuality().droppedVideoFrames;
      a = a.webkitDroppedFrameCount;
      return typeof a === 'number' ? a : 0;
    }
    function b(a) {
      if (typeof a.getVideoPlaybackQuality === 'function')
        return a.getVideoPlaybackQuality().totalVideoFrames;
      a = a.webkitDecodedFrameCount;
      return typeof a === 'number' ? a : 0;
    }
    e.exports = { getDroppedFrames: a, getTotalFrames: b };
  },
  null
);
__d(
  'VideoPlayerVersions',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      HTML5: 'html5',
      PLEASANTVILLE: 'pleasantville',
      REACT: 'react',
      REACT_PLEASANTVILLE: 'react_pleasantville',
      REACT_SILVERCITY: 'react_silvercity',
      SILVERCITY: 'silvercity',
      OZ: 'oz',
      REACT_OZ: 'react_oz',
      OLD_API_EXO: 'old_api_exo',
      OLD_API_EXO_DEPRECATED: 'old_api_exo_deprecated',
      OLD_API_EXO_NEW_LIB: 'old_api_exo_new_lib',
      OLD_API_PSR: 'old_api_psr',
      HEROPLAYER: 'heroplayer',
      FNF: 'fnf',
      LEGACY: 'legacy',
      REFACTORED: 'refactored',
      MBASIC: 'mbasic',
      MTOUCH_SHAKA_LIVE: 'mtouch_shaka_live',
      MTOUCH_SPHERICAL: 'mtouch_360',
      MTOUCH_OZ: 'mtouch_oz',
      CASTING_DEBUG: 'casting_debug',
      CHROMECAST: 'chromecast',
      WEBAPIS_AVPLAY: 'webapis_avplay',
      FBLITE_LEGACY: 'fblite_legacy',
      FBLITE_SURFACE: 'fblite_surface',
      FBLITE_TEXTURE: 'fblite_texture',
      HERO_SURFACE: 'hero_surface',
      HERO_TEXTURE: 'hero_texture',
      UNKNOWN: 'unknown',
    });
  },
  null
);
__d(
  'classWithMixins',
  [],
  function (a, b, c, d, e, f) {
    function a(a, b) {
      var c = function () {
        a.apply(this, arguments);
      };
      c.prototype = Object.assign(Object.create(a.prototype), b.prototype);
      return c;
    }
    e.exports = a;
  },
  null
);
__d(
  'VideoMimeTypes',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a, b, c) {
      return a + '; codecs="' + b + ', ' + c + '"';
    }
    f = 'mp4a.40.2';
    function b(a) {
      return 'avc1.42E0' + a.toString(16).toUpperCase();
    }
    function c(a) {
      return 'avc1.4D40' + a.toString(16).toUpperCase();
    }
    function d(a) {
      return 'avc1.6400' + a.toString(16).toUpperCase();
    }
    var g = 'video/mp4';
    b = {
      h264baseline: a(g, b(30), f),
      h264main30avc: a(g, c(30), f),
      h264main31avc: a(g, c(31), f),
      h264high50avc: a(g, d(50), f),
      h264high51avc: a(g, d(51), f),
    };
    e.exports = b;
  },
  null
);
__d(
  'canVideoPlayType',
  ['DOM'],
  function (a, b, c, d, e, f) {
    var g = null;
    function a(a) {
      g = g || b('DOM').create('video');
      return !('canPlayType' in g) ? '' : g.canPlayType(a);
    }
    e.exports = a;
  },
  null
);
__d(
  'supportsHTML5Video',
  ['DOM', 'memoize'],
  function (a, b, c, d, e, f) {
    e.exports = b('memoize')(function () {
      return !!b('DOM').create('video').canPlayType;
    });
  },
  null
);
__d(
  'isHTML5VideoImplementationUnavailable',
  ['VideoMimeTypes', 'canVideoPlayType', 'supportsHTML5Video'],
  function (a, b, c, d, e, f) {
    a = function (a) {
      if (a) {
        a = b('canVideoPlayType')(b('VideoMimeTypes').h264main30avc);
        return a !== 'probably';
      }
      return !b('supportsHTML5Video')();
    };
    e.exports = a;
  },
  null
);
__d(
  'onCanPlayHTMLMediaElement',
  ['invariant', 'EventListener', 'HTMLMediaElementReadyStates', 'setImmediate'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    function h(a) {
      return a >= b('HTMLMediaElementReadyStates').HAVE_FUTURE_DATA;
    }
    function i(a, c) {
      a instanceof window.HTMLMediaElement || g(0, undefined);
      h(a.readyState) && b('setImmediate')(c);
      return b('EventListener').listen(a, 'canplay', c);
    }
    i.once = function (a, b) {
      var c = i(
        a,
        function () {
          if (!c) return;
          c.remove();
          c = null;
          for (var a = arguments.length, d = new Array(a), e = 0; e < a; e++)
            d[e] = arguments[e];
          b.apply(this, d);
        }.bind(this)
      );
    };
    e.exports = i;
  },
  null
);
__d(
  'onLoadedMetadataHTMLMediaElement',
  ['EventListener', 'HTMLMediaElementReadyStates', 'setImmediate'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function g(a) {
      return a >= b('HTMLMediaElementReadyStates').HAVE_METADATA;
    }
    function h(a, c) {
      g(a.readyState) && b('setImmediate')(c);
      return b('EventListener').listen(a, 'loadedmetadata', c);
    }
    h.once = function (a, b) {
      var c = h(
        a,
        function () {
          c.remove();
          for (var a = arguments.length, d = new Array(a), e = 0; e < a; e++)
            d[e] = arguments[e];
          b.apply(this, d);
        }.bind(this)
      );
    };
    e.exports = h;
  },
  null
);
__d(
  'seekHTMLMediaElementTo',
  ['EventListener', 'onLoadedMetadataHTMLMediaElement', 'setImmediate'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a, c, d) {
      __p && __p();
      if (a.currentTime == c) return d && b('setImmediate')(d);
      try {
        a.currentTime = c;
      } catch (a) {}
      if (a.currentTime)
        var e = b('EventListener').listen(a, 'seeked', function () {
          e.remove(), d && d();
        });
      else
        b('onLoadedMetadataHTMLMediaElement')(a, function () {
          a.currentTime = c;
          var e = b('EventListener').listen(a, 'seeked', function () {
            e.remove(), d && d();
          });
        });
    }
    e.exports = a;
  },
  null
);
__d(
  'VideoPlayerHTML5Api',
  [
    'cx',
    'Promise',
    'regeneratorRuntime',
    'AbstractVideoPlayerApi',
    'Arbiter',
    'Bootloader',
    'CSS',
    'Deferred',
    'DOM',
    'DOMDimensions',
    'Event',
    'EventListener',
    'FBLogger',
    'HVideoPlayerMixin',
    'MediaBufferingDetector',
    'Run',
    'StaleVideoMonitor',
    'SubscriptionsHandler',
    'TimeRanges',
    'VideoData',
    'VideoFrameBuffer',
    'VideoPlaybackQuality',
    'VideoPlayerExperiments',
    'VideoPlayerHTML5Experiments',
    'VideoPlayerLoggerEvent',
    'VideoPlayerMemLeakExperiments',
    'VideoPlayerReason',
    'VideoPlayerShakaGlobalConfig',
    'VideoPlayerVersions',
    'VideoQualityClasses',
    'classWithMixins',
    'dangerouslyOverrideMediaElementEndedProperty',
    'dispatchEvent',
    'getHTMLMediaElementMutedState',
    'isHTML5VideoImplementationUnavailable',
    'mixin',
    'onCanPlayHTMLMediaElement',
    'requireWeak',
    'seekHTMLMediaElementTo',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h,
      i = b('VideoPlaybackQuality').getDroppedFrames,
      j = b('VideoPlaybackQuality').getTotalFrames,
      k = null;
    b('requireWeak')('TVViewerConfigsManager', function (a) {
      return (k = a);
    });
    function l(a) {
      switch (a) {
        case 1:
          return 'The fetching process for the media resource was aborted by the user agent at the users request.';
        case 2:
          return 'A network error of some description caused the user agent to stop fetching the media resource, after the resource was established to be usable.';
        case 3:
          return 'An error of some description occurred while decoding the media resource, after the resource was established to be usable.';
        case 4:
          return 'The media resource indicated by the src attribute was not suitable.';
      }
      return null;
    }
    function m(a) {
      switch (a) {
        case 1:
          return 'MEDIA_ERR_ABORTED';
        case 2:
          return 'MEDIA_ERR_NETWORK';
        case 3:
          return 'MEDIA_ERR_DECODE';
        case 4:
          return 'MEDIA_ERR_SRC_NOT_SUPPORTED';
        default:
          return 'Error code ' + a + ' is unknown';
      }
    }
    var n = -1,
      o = 0.05,
      p = 476,
      q = 476;
    a = babelHelpers.inherits(
      r,
      b('classWithMixins')(
        b('AbstractVideoPlayerApi'),
        b('mixin')(b('HVideoPlayerMixin'))
      )
    );
    h = a && a.prototype;
    function r(a, c) {
      __p && __p();
      h.constructor.call(this);
      this.$VideoPlayerHTML5Api37 = a;
      this.$VideoPlayerHTML5Api43 = c ? c.shakaConfig : null;
      this.$VideoPlayerHTML5Api15 = this.$VideoPlayerHTML5Api37.id;
      this.preventSeekLoggingInMixin = !0;
      this.$VideoPlayerHTML5Api61('allow_seek_logging_in_mixin', !1) &&
        (this.preventSeekLoggingInMixin = !1);
      a = this.$VideoPlayerHTML5Api62();
      this.$VideoPlayerHTML5Api54 = a.width;
      this.$VideoPlayerHTML5Api14 = a.height;
      c
        ? (this.$VideoPlayerHTML5Api9 = c)
        : (this.$VideoPlayerHTML5Api9 = JSON.parse(
            this.$VideoPlayerHTML5Api37.getAttribute('data-config')
          ));
      this.$VideoPlayerHTML5Api5 = new (b('MediaBufferingDetector'))(
        this.$VideoPlayerHTML5Api37,
        this.$VideoPlayerHTML5Api43
      );
      this.$VideoPlayerHTML5Api5.addListener(
        'bufferingStart',
        function () {
          return this.$VideoPlayerHTML5Api63();
        }.bind(this)
      );
      this.$VideoPlayerHTML5Api5.addListener(
        'bufferingEnd',
        function () {
          return this.$VideoPlayerHTML5Api64();
        }.bind(this)
      );
      this.$VideoPlayerHTML5Api24 = n;
      this.$VideoPlayerHTML5Api26 = b('getHTMLMediaElementMutedState')(
        this.$VideoPlayerHTML5Api37
      );
      this.$VideoPlayerHTML5Api52 = this.$VideoPlayerHTML5Api37.volume;
      this.$VideoPlayerHTML5Api25 = !1;
      this.$VideoPlayerHTML5Api22 = null;
      this.$VideoPlayerHTML5Api30 = !1;
      this.$VideoPlayerHTML5Api3 = !1;
      this.$VideoPlayerHTML5Api32 =
        this.$VideoPlayerHTML5Api37.getAttribute('preload') == 'auto';
      this.$VideoPlayerHTML5Api33 = null;
      this.$VideoPlayerHTML5Api39 = new (b('StaleVideoMonitor'))(
        this.$VideoPlayerHTML5Api37
      );
      this.$VideoPlayerHTML5Api39.addListener(
        'stale',
        function (a, b) {
          return this.$VideoPlayerHTML5Api65(a, b);
        }.bind(this)
      );
      this.$VideoPlayerHTML5Api12 = !1;
      this.$VideoPlayerHTML5Api42 = !1;
      this.$VideoPlayerHTML5Api9.lazyPreload &&
        (this.$VideoPlayerHTML5Api9.onafterloadRegister
          ? b('Run').onAfterLoad(
              function () {
                return this.$VideoPlayerHTML5Api37.setAttribute(
                  'preload',
                  this.$VideoPlayerHTML5Api9.lazyPreload
                );
              }.bind(this)
            )
          : this.$VideoPlayerHTML5Api37.setAttribute(
              'preload',
              this.$VideoPlayerHTML5Api9.lazyPreload
            ));
      this.$VideoPlayerHTML5Api11 =
        this.$VideoPlayerHTML5Api9.disableNativeControls;
      this.$VideoPlayerHTML5Api46 = this.$VideoPlayerHTML5Api9.subtitlesActive;
      this.$VideoPlayerHTML5Api66();
      this.preventPauseLoggingInMixin = !1;
      this.$VideoPlayerHTML5Api44 = new (b('SubscriptionsHandler'))();
      this.$VideoPlayerHTML5Api67();
      this.$VideoPlayerHTML5Api20 = this.$VideoPlayerHTML5Api9.useRateLimited;
      this.$VideoPlayerHTML5Api68(!1);
      a = b('VideoQualityClasses').indexOf('hd');
      this.$VideoPlayerHTML5Api19 =
        this.$VideoPlayerHTML5Api9.minQuality !== null &&
        b('VideoQualityClasses').indexOf(
          this.$VideoPlayerHTML5Api9.minQuality
        ) >= a;
      this.$VideoPlayerHTML5Api27 = this.$VideoPlayerHTML5Api9.minQuality;
      this.$VideoPlayerHTML5Api28 = this.$VideoPlayerHTML5Api9.maxQuality;
      this.$VideoPlayerHTML5Api2 = this.$VideoPlayerHTML5Api9.accessToken;
      this.$VideoPlayerHTML5Api40 = this.$VideoPlayerHTML5Api9.startTimestamp;
      this.$VideoPlayerHTML5Api34 = o;
      this.$VideoPlayerHTML5Api4 = this.$VideoPlayerHTML5Api9.autoFullscreenHD;
      this.switchVideo(0);
      this.initLogger(
        this.$VideoPlayerHTML5Api69.bind(this),
        this.$VideoPlayerHTML5Api9.useEventTime,
        this.$VideoPlayerHTML5Api61('overwrite_video_current_time_property', !1)
      );
      this.$VideoPlayerHTML5Api70();
      this.$VideoPlayerHTML5Api31 = null;
      this.$VideoPlayerHTML5Api55 = !1;
      this.$VideoPlayerHTML5Api56 = !1;
      this.$VideoPlayerHTML5Api57 =
        this.$VideoPlayerHTML5Api9.unloadShouldCancelPendingRequest;
    }
    r.prototype.getAdClientToken = function () {
      this.$VideoPlayerHTML5Api9.ad_client_token;
    };
    r.prototype.$VideoPlayerHTML5Api65 = function (a, c) {
      this.$VideoPlayerHTML5Api69(b('VideoPlayerLoggerEvent').STALE, {
        stale_detect_time_delta: a,
        stale_video_current_time_delta: c,
      }),
        this.$VideoPlayerHTML5Api9.nudgeStaleVideo &&
          typeof this.$VideoPlayerHTML5Api9.staleVideoNudgeAmountMs ===
            'number' &&
          this.seek(
            this.getCurrentTimePosition() +
              this.$VideoPlayerHTML5Api9.staleVideoNudgeAmountMs / 1e3
          ),
        b('VideoPlayerExperiments').showStaleOverlayOnVideoNodeStaled &&
          this.emit('videoNodeStaled');
    };
    r.prototype.$VideoPlayerHTML5Api63 = function () {
      this.emit('buffering'), this.$VideoPlayerHTML5Api39.notifyBuffering();
    };
    r.prototype.$VideoPlayerHTML5Api64 = function () {
      this.emit('buffered'), this.$VideoPlayerHTML5Api39.notifyBuffered();
    };
    r.prototype.$VideoPlayerHTML5Api71 = function (a) {
      this.emit('bufferingProgress', a);
    };
    r.prototype.$VideoPlayerHTML5Api72 = function () {
      this.emit('networkInterrupted');
    };
    r.prototype.$VideoPlayerHTML5Api73 = function () {
      this.emit('networkResumed');
    };
    r.prototype.$VideoPlayerHTML5Api74 = function () {
      this.emit('streamInterrupted'), (this.$VideoPlayerHTML5Api55 = !0);
    };
    r.prototype.$VideoPlayerHTML5Api75 = function () {
      this.emit('seekRangeChanged');
    };
    r.prototype.$VideoPlayerHTML5Api76 = function () {
      this.emit('streamResumed'), (this.$VideoPlayerHTML5Api55 = !1);
    };
    r.prototype.$VideoPlayerHTML5Api61 = function (a, c) {
      return this.$VideoPlayerHTML5Api43
        ? this.$VideoPlayerHTML5Api43.getBool(a, c)
        : b('VideoPlayerShakaGlobalConfig').getBool(a, c);
    };
    r.prototype.getVideoPlayerShakaConfig = function () {
      return this.$VideoPlayerHTML5Api43 || b('VideoPlayerShakaGlobalConfig');
    };
    r.prototype.isStreamInterrupted = function () {
      return this.$VideoPlayerHTML5Api55;
    };
    r.prototype.getVideoID = function () {
      return this.$VideoPlayerHTML5Api10
        ? this.$VideoPlayerHTML5Api10.getVideoID()
        : this.$VideoPlayerHTML5Api9.video_id;
    };
    r.prototype.getDroppedFrames = function () {
      return i(this.$VideoPlayerHTML5Api37);
    };
    r.prototype.getTotalFrames = function () {
      return j(this.$VideoPlayerHTML5Api37);
    };
    r.prototype.isDrm = function () {
      return this.$VideoPlayerHTML5Api38
        ? this.$VideoPlayerHTML5Api38.isDrm()
        : !1;
    };
    r.prototype.getDebug = function () {
      return { VideoPlayerHTML5DashPlayer: this.$VideoPlayerHTML5Api38 };
    };
    r.prototype.getDOMElement = function () {
      return this.$VideoPlayerHTML5Api37;
    };
    r.prototype.getVideoElement = function () {
      return this.$VideoPlayerHTML5Api37;
    };
    r.prototype.getSubscriptions = function () {
      return this.$VideoPlayerHTML5Api44;
    };
    r.onImplementationReady = function (a, b) {
      b();
    };
    r.prototype.destroy = function (a) {
      if (this.$VideoPlayerHTML5Api12) return;
      a = a || {};
      this.$VideoPlayerHTML5Api12 = !0;
      this.$VideoPlayerHTML5Api77();
      b('VideoPlayerMemLeakExperiments').clear_handlers_on_destroy &&
        this.$VideoPlayerHTML5Api5.destroy();
      a.renderStillFrame
        ? this.abortLoading(a)
        : (b('VideoPlayerHTML5Experiments').destroyWithoutStillFrame
            ? this.abortLoadingWithoutStillFrame()
            : this.abortLoading(a),
          this.$VideoPlayerHTML5Api78(),
          this.$VideoPlayerHTML5Api79 &&
            b('DOM').remove(this.$VideoPlayerHTML5Api79));
      b('VideoPlayerMemLeakExperiments').clear_handlers_on_destroy &&
        this.$VideoPlayerHTML5Api44.release();
    };
    r.prototype.getVideoInfo = function () {
      if (!this.$VideoPlayerHTML5Api10) return null;
      var a = this.getAvailableVideoQualities();
      return {
        isHD: a && this.getSelectedVideoQuality() == a[a.length - 1],
        streamType: this.$VideoPlayerHTML5Api10.getStreamType(),
        hasHD: a && a.length > 1,
        areSubtitlesActive: this.areSubtitlesActive(),
        areSubtitlesAutogenerated: this.areSubtitlesAutogenerated(),
        isMuted: this.isMuted(),
        isPlaying: this.$VideoPlayerHTML5Api18,
        playbackDuration: this.getPlaybackDuration(),
        volume: this.getVolume(),
        resourceUrl: this.$VideoPlayerHTML5Api38
          ? 'DASH manifest'
          : this.$VideoPlayerHTML5Api80(),
        hasSubtitles: this.hasSubtitles(),
        hasUnlimitedSrc: this.$VideoPlayerHTML5Api10.hasRateLimit(),
        useUnlimitedSrc: !this.$VideoPlayerHTML5Api20,
        projection: this.getVideoProjection(),
        tagSD: this.$VideoPlayerHTML5Api10.getSDTag(),
        tagHD: this.$VideoPlayerHTML5Api10.getHDTag(),
        isLiveStream: this.$VideoPlayerHTML5Api10.isLiveStream(),
        liveManifestUrl: this.$VideoPlayerHTML5Api10.isLiveStream()
          ? this.$VideoPlayerHTML5Api10.getLiveManifestUrl()
          : null,
      };
    };
    r.isImplementationUnavailable = function (a) {
      return b('isHTML5VideoImplementationUnavailable')(a);
    };
    r.prototype.pause = function (a) {
      __p && __p();
      this.$VideoPlayerHTML5Api22 = a;
      if (a === 'unloaded' && !this.isPaused()) {
        a =
          this.$VideoPlayerHTML5Api57 ||
          b('VideoPlayerHTML5Experiments').unloadShouldCancelPendingRequest;
        a && this.$VideoPlayerHTML5Api17
          ? this.$VideoPlayerHTML5Api69(
              b('VideoPlayerLoggerEvent').CANCELLED_REQUESTED_PLAYING,
              this.addWatchTimeData({ reason: 'unloaded' })
            )
          : this.$VideoPlayerHTML5Api69(
              b('VideoPlayerLoggerEvent').PAUSED,
              this.addWatchTimeData({ reason: 'unloaded' })
            );
        this.$VideoPlayerHTML5Api56 = !0;
        this.preventPauseLoggingInMixin = !0;
      }
      this.$VideoPlayerHTML5Api81();
      this.$VideoPlayerHTML5Api38
        ? this.$VideoPlayerHTML5Api38.pause()
        : this.$VideoPlayerHTML5Api37.pause();
    };
    r.prototype.$VideoPlayerHTML5Api68 = function (a) {
      this.$VideoPlayerHTML5Api17 = a;
    };
    r.prototype.preload = function () {
      this.$VideoPlayerHTML5Api32 ||
        (this.$VideoPlayerHTML5Api1 && this.$VideoPlayerHTML5Api82(),
        (this.$VideoPlayerHTML5Api32 = !0),
        this.$VideoPlayerHTML5Api37.setAttribute('preload', 'auto'));
    };
    r.prototype.isPreloading = function () {
      return this.$VideoPlayerHTML5Api32;
    };
    r.prototype.play = function (a) {
      __p && __p();
      this.$VideoPlayerHTML5Api51 || (this.$VideoPlayerHTML5Api51 = a);
      this.$VideoPlayerHTML5Api23 = a;
      if (!this.isPaused()) {
        b('VideoPlayerHTML5Experiments').shouldDispatchPlayingEvent
          ? (b('dispatchEvent')(this.$VideoPlayerHTML5Api37, 'play'),
            setTimeout(
              function () {
                return b('dispatchEvent')(
                  this.$VideoPlayerHTML5Api37,
                  'playing'
                );
              }.bind(this),
              0
            ))
          : this.$VideoPlayerHTML5Api83();
        return;
      }
      this.$VideoPlayerHTML5Api30 = !0;
      this.$VideoPlayerHTML5Api68(!0);
      if (this.$VideoPlayerHTML5Api1) {
        b('dispatchEvent')(this.$VideoPlayerHTML5Api37, 'play');
        this.$VideoPlayerHTML5Api82();
        this.$VideoPlayerHTML5Api3 = !0;
        return;
      }
      this.$VideoPlayerHTML5Api84();
    };
    r.prototype.$VideoPlayerHTML5Api81 = function () {
      this.$VideoPlayerHTML5Api3 &&
        this.isPaused() &&
        b('dispatchEvent')(this.$VideoPlayerHTML5Api37, 'pause'),
        this.$VideoPlayerHTML5Api68(!1),
        this.$VideoPlayerHTML5Api85();
    };
    r.prototype.$VideoPlayerHTML5Api85 = function () {
      (this.$VideoPlayerHTML5Api30 = !1), (this.$VideoPlayerHTML5Api3 = !1);
    };
    r.prototype.$VideoPlayerHTML5Api86 = function () {
      this.$VideoPlayerHTML5Api37.setAttribute('preload', 'auto'),
        (this.$VideoPlayerHTML5Api32 = !0),
        this.$VideoPlayerHTML5Api37.load(),
        (this.$VideoPlayerHTML5Api37.muted = this.$VideoPlayerHTML5Api26);
    };
    r.prototype.seek = function (a) {
      var b = this.$VideoPlayerHTML5Api61('clear_buffer_on_seek_back', !1),
        c =
          this.$VideoPlayerHTML5Api43 &&
          this.$VideoPlayerHTML5Api43.getNumber(
            'clear_buffer_on_seek_back_delta',
            0
          );
      this.$VideoPlayerHTML5Api38 &&
        b &&
        typeof c === 'number' &&
        this.$VideoPlayerHTML5Api37.currentTime - a >= c &&
        this.$VideoPlayerHTML5Api38.clearBufferAfterSeekingIfLowerQuality(a);
      this.allowNextSeekInMixin();
      if (
        this.$VideoPlayerHTML5Api61(
          'current_time_during_ready_state_zero_throws',
          !1
        )
      )
        this.$VideoPlayerHTML5Api37.readyState !== 0 &&
          (this.$VideoPlayerHTML5Api37.currentTime = a);
      else
        try {
          this.$VideoPlayerHTML5Api37.currentTime = a;
        } catch (a) {}
    };
    r.prototype.removeRotation = function () {
      b('CSS').removeClass(this.$VideoPlayerHTML5Api37, '_56jr'),
        b('CSS').removeClass(this.$VideoPlayerHTML5Api37, '_56js'),
        b('CSS').removeClass(this.$VideoPlayerHTML5Api37, '_56jt'),
        (this.$VideoPlayerHTML5Api37.style.marginLeft = ''),
        (this.$VideoPlayerHTML5Api37.style.marginTop = ''),
        (this.$VideoPlayerHTML5Api37.style.width = ''),
        (this.$VideoPlayerHTML5Api37.style.height = '');
    };
    r.prototype.applyRotation = function (a) {
      __p && __p();
      if (!a) return;
      b('CSS').conditionClass(this.$VideoPlayerHTML5Api37, '_56jr', a == 90);
      b('CSS').conditionClass(this.$VideoPlayerHTML5Api37, '_56js', a == 180);
      b('CSS').conditionClass(this.$VideoPlayerHTML5Api37, '_56jt', a == 270);
      if (a == 180) return;
      a = this.$VideoPlayerHTML5Api14;
      var c = this.$VideoPlayerHTML5Api54,
        d = (a - c) / 2,
        e = (c - a) / 2;
      this.$VideoPlayerHTML5Api37.style.marginLeft = e + 'px';
      this.$VideoPlayerHTML5Api37.style.marginTop = d + 'px';
      this.$VideoPlayerHTML5Api37.style.height = c + 'px';
      this.$VideoPlayerHTML5Api37.style.width = a + 'px';
    };
    r.prototype.$VideoPlayerHTML5Api87 = function (a) {
      this.$VideoPlayerHTML5Api43 &&
        this.$VideoPlayerHTML5Api43.setContext(
          'content_category',
          a.getContentCategory() || 'content_category'
        );
    };
    r.prototype.switchVideo = function (a) {
      __p && __p();
      if (
        !this.$VideoPlayerHTML5Api9.videoData ||
        this.$VideoPlayerHTML5Api9.videoData.length <= a
      )
        return;
      a = new (b('VideoData'))(this.$VideoPlayerHTML5Api9.videoData[a]);
      this.$VideoPlayerHTML5Api10 = a;
      a.getOverrideConfig() &&
        this.$VideoPlayerHTML5Api43 &&
        this.$VideoPlayerHTML5Api43.setOverrideConfig(a.getOverrideConfig());
      this.$VideoPlayerHTML5Api87(a);
      if (
        (a.hasDashManifest() || a.isLiveStream()) &&
        this.$VideoPlayerHTML5Api9.VideoPlayerHTML5Shaka &&
        this.$VideoPlayerHTML5Api9.VideoPlayerHTML5Shaka.isSupported(a) &&
        !this.$VideoPlayerHTML5Api9.fallbackSources
      ) {
        this.$VideoPlayerHTML5Api5.destroy();
        var c, d;
        this.$VideoPlayerHTML5Api16 =
          this.$VideoPlayerHTML5Api9.isHighlightEnabled &&
          a.hasHighlightsManifest();
        c = a.getDashManifest();
        a.isLiveStream() && (d = a.getLiveManifestUrl());
        var e = a.getDashPrefetchedRepresentationIDs();
        e = new this.$VideoPlayerHTML5Api9.VideoPlayerHTML5Shaka(
          this.$VideoPlayerHTML5Api37,
          e,
          {
            accessToken: this.$VideoPlayerHTML5Api2,
            config: this.$VideoPlayerHTML5Api9.shakaConfig,
            minPlayQuality: this.$VideoPlayerHTML5Api27,
            maxPlayQuality: this.$VideoPlayerHTML5Api28,
            width: this.$VideoPlayerHTML5Api54,
            height: this.$VideoPlayerHTML5Api14,
            manifest: c,
            manifestUrl: d,
            isLive: a.isLiveStream(),
            isServableViaFbms: a.isServableViaFbms(),
            startTimestamp: this.$VideoPlayerHTML5Api40,
            videoID: this.getVideoID(),
            playerInstanceKey: this.$VideoPlayerHTML5Api9.playerInstanceKey,
            disableStreaming: this.$VideoPlayerHTML5Api9.disableStreaming,
            playerOrigin: this.$VideoPlayerHTML5Api9.playerOrigin,
            playerSuborigin: this.$VideoPlayerHTML5Api9.playerSuborigin,
            resolutionConstraintMaxHeight:
              this.$VideoPlayerHTML5Api9.resolutionConstraintMaxHeight,
            resolutionConstraintMaxWidth:
              this.$VideoPlayerHTML5Api9.resolutionConstraintMaxWidth,
            useStrictTrackDimensionsExclusionLogic:
              this.$VideoPlayerHTML5Api9.useStrictTrackDimensionsExclusionLogic,
            isSpherical: this.$VideoPlayerHTML5Api9.isSpherical,
            getSource: this.$VideoPlayerHTML5Api9.getSource,
            vpcPlayingStateEmitter:
              this.$VideoPlayerHTML5Api9.vpcPlayingStateEmitter,
            streamPriorityAdjuster:
              this.$VideoPlayerHTML5Api9.streamPriorityAdjuster,
            videoLiveTrace: this.$VideoPlayerHTML5Api9.videoLiveTrace
              ? this.$VideoPlayerHTML5Api9.videoLiveTrace
              : null,
            videoLicenseUri: this.$VideoPlayerHTML5Api9.videoLicenseUri
              ? this.$VideoPlayerHTML5Api9.videoLicenseUri
              : null,
            prefetchCache: a.getPrefetchCache(),
          }
        );
        e.addListener(
          'seekRangeChanged',
          function () {
            return this.$VideoPlayerHTML5Api75();
          }.bind(this)
        );
        e.addListener(
          'bufferingStart',
          function () {
            return this.$VideoPlayerHTML5Api63();
          }.bind(this)
        );
        e.addListener(
          'bufferingEnd',
          function () {
            return this.$VideoPlayerHTML5Api64();
          }.bind(this)
        );
        e.addListener(
          'bufferingProgress',
          this.$VideoPlayerHTML5Api71.bind(this)
        );
        e.addListener(
          'tracksChanged',
          function () {
            return this.emit('qualityChange');
          }.bind(this)
        );
        e.addListener(
          'streamInterrupted',
          function () {
            return this.$VideoPlayerHTML5Api74();
          }.bind(this)
        );
        e.addListener(
          'streamResumed',
          function () {
            return this.$VideoPlayerHTML5Api76();
          }.bind(this)
        );
        e.addListener(
          'networkInterrupted',
          function () {
            return this.$VideoPlayerHTML5Api72();
          }.bind(this)
        );
        e.addListener(
          'networkResumed',
          function () {
            return this.$VideoPlayerHTML5Api73();
          }.bind(this)
        );
        e.addListener(
          'adaptation',
          function (a) {
            a = a.reason;
            b('VideoPlayerHTML5Experiments').dropQualityChange ||
              this.$VideoPlayerHTML5Api69(
                b('VideoPlayerLoggerEvent').QUALITY_CHANGE,
                { reason: a }
              );
            this.emit('qualityChange');
          }.bind(this)
        );
        e.addListener(
          'representation_ended',
          function (a) {
            this.logRepresentationEnded(a);
          }.bind(this)
        );
        e.addListener(
          'blocked_paused_representation_ended',
          function () {
            this.onBlockedPausedRepresentationEnded();
          }.bind(this)
        );
        e.addListener(
          'debug/dashPlayerEvent',
          function (a) {
            return this.emit('debug/dashPlayerEvent', a);
          }.bind(this)
        );
        e.addListener(
          'error',
          function (a) {
            return this.$VideoPlayerHTML5Api88(a);
          }.bind(this)
        );
        e.addListener(
          'cea608AvailabilityChanged',
          function () {
            this.$VideoPlayerHTML5Api89();
          }.bind(this)
        );
        e.addListener(
          'cea608CaptionsParsed',
          function (a) {
            this.$VideoPlayerHTML5Api60 ||
              (this.$VideoPlayerHTML5Api60 = this.$VideoPlayerHTML5Api90()),
              this.$VideoPlayerHTML5Api60
                .then(
                  function (b) {
                    b.appendFragments(a), this.$VideoPlayerHTML5Api89();
                  }.bind(this)
                )
                ['catch'](function (a) {
                  return b('FBLogger')('video')
                    .catching(a)
                    .mustfix('Caught error in cea608 stream');
                });
          }.bind(this)
        );
        this.$VideoPlayerHTML5Api38 = e;
      } else {
        c = this.$VideoPlayerHTML5Api80();
        c && (this.$VideoPlayerHTML5Api37.src = c);
        this.$VideoPlayerHTML5Api40 && this.seek(this.$VideoPlayerHTML5Api40);
      }
      this.$VideoPlayerHTML5Api45 &&
        this.$VideoPlayerHTML5Api45.removeSubtitles();
      a.hasSubtitles() &&
        this.$VideoPlayerHTML5Api91(
          this.$VideoPlayerHTML5Api10.getSubtitlesSrc()
        );
      this.removeRotation();
      this.applyRotation(a.getRotation());
    };
    r.prototype.switchToStreamType = function (a) {};
    r.prototype.replaceVideoDataFromURL = function (a) {};
    r.prototype.getDashAudioConfiguration = function () {
      return this.$VideoPlayerHTML5Api38
        ? this.$VideoPlayerHTML5Api38.getDashAudioConfiguration()
        : 'none';
    };
    r.prototype.getAudioStreamInfoIDDebug = function () {
      __p && __p();
      if (this.$VideoPlayerHTML5Api38) {
        var a = this.$VideoPlayerHTML5Api38.getDebug();
        if (a.VideoSource) {
          a = a.VideoSource.getAudioTracks();
          for (
            var a = a,
              b = Array.isArray(a),
              c = 0,
              a = b
                ? a
                : a[
                    typeof Symbol === 'function'
                      ? Symbol.iterator
                      : '@@iterator'
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
            if (d.active) return d.streamInfoID;
          }
        }
      }
      return null;
    };
    r.prototype.getVideoTracksDebug = function () {
      if (this.$VideoPlayerHTML5Api38) {
        var a = this.$VideoPlayerHTML5Api38.getDebug();
        if (a.VideoSource) return a.VideoSource.getVideoTracks();
      }
      return null;
    };
    r.prototype.getCurrentlyPlayingStreamInfoID = function () {
      var a = this.getCurrentTimePosition();
      return this.$VideoPlayerHTML5Api38 && a != null
        ? this.$VideoPlayerHTML5Api38.getStreamInfoIDForTimePosition(a)
        : null;
    };
    r.prototype.getLocalEstimator = function () {
      return this.$VideoPlayerHTML5Api38
        ? this.$VideoPlayerHTML5Api38.getLocalEstimator()
        : null;
    };
    r.prototype.unmute = function () {
      if (this.$VideoPlayerHTML5Api1) {
        this.$VideoPlayerHTML5Api1.mutedState = !1;
        this.$VideoPlayerHTML5Api26 = !1;
        this.emit('unmuteVideo');
        return;
      }
      this.$VideoPlayerHTML5Api37.muted = !1;
    };
    r.prototype.mute = function () {
      if (this.$VideoPlayerHTML5Api1) {
        this.$VideoPlayerHTML5Api1.mutedState = !0;
        this.$VideoPlayerHTML5Api26 = !0;
        this.emit('muteVideo');
        return;
      }
      this.$VideoPlayerHTML5Api37.muted = !0;
    };
    r.prototype.setRotation = function (a) {
      this.removeRotation(), this.applyRotation(a);
    };
    r.prototype.setDimensions = function (a, b) {
      this.removeRotation(),
        (this.$VideoPlayerHTML5Api54 = a),
        (this.$VideoPlayerHTML5Api14 = b),
        this.applyRotation(this.$VideoPlayerHTML5Api10.getRotation()),
        this.$VideoPlayerHTML5Api41 &&
          this.$VideoPlayerHTML5Api41.updateDimensions(a, b),
        this.$VideoPlayerHTML5Api38 &&
          this.$VideoPlayerHTML5Api38.setDimensions(a, b),
        this.$VideoPlayerHTML5Api45 &&
          this.$VideoPlayerHTML5Api45.setDimensions(a),
        this.emit('dimensionsChange', a, b);
    };
    r.prototype.setVideoStreamOffset = function (a) {
      this.$VideoPlayerHTML5Api38 &&
        this.$VideoPlayerHTML5Api38.setVideoStreamOffset(a);
    };
    r.prototype.$VideoPlayerHTML5Api92 = function () {
      this.$VideoPlayerHTML5Api37.controls = !this.$VideoPlayerHTML5Api11;
    };
    r.prototype.$VideoPlayerHTML5Api66 = function () {
      this.$VideoPlayerHTML5Api37.controls =
        this.$VideoPlayerHTML5Api37.controls && !this.$VideoPlayerHTML5Api11;
    };
    r.prototype.$VideoPlayerHTML5Api67 = function () {
      (this.$VideoPlayerHTML5Api13 = b('EventListener').listen(
        this.$VideoPlayerHTML5Api37,
        'error',
        this.$VideoPlayerHTML5Api93.bind(this)
      )),
        b('VideoPlayerMemLeakExperiments').clear_html5_error_handler ||
          this.$VideoPlayerHTML5Api44.addSubscriptions(
            this.$VideoPlayerHTML5Api13
          ),
        this.$VideoPlayerHTML5Api44.addSubscriptions(
          b('EventListener').listen(
            this.$VideoPlayerHTML5Api37,
            'playing',
            this.$VideoPlayerHTML5Api94.bind(this)
          ),
          b('EventListener').listen(
            this.$VideoPlayerHTML5Api37,
            'play',
            this.$VideoPlayerHTML5Api83.bind(this)
          ),
          b('EventListener').listen(
            this.$VideoPlayerHTML5Api37,
            'ended',
            this.$VideoPlayerHTML5Api95.bind(this)
          ),
          b('EventListener').listen(
            this.$VideoPlayerHTML5Api37,
            'waiting',
            this.$VideoPlayerHTML5Api96.bind(this)
          ),
          b('EventListener').listen(
            this.$VideoPlayerHTML5Api37,
            'pause',
            this.$VideoPlayerHTML5Api97.bind(this)
          ),
          b('EventListener').listen(
            this.$VideoPlayerHTML5Api37,
            'volumechange',
            this.$VideoPlayerHTML5Api98.bind(this)
          ),
          b('EventListener').listen(
            this.$VideoPlayerHTML5Api37,
            'mousedown',
            this.$VideoPlayerHTML5Api99.bind(this)
          ),
          b('EventListener').listen(
            this.$VideoPlayerHTML5Api37,
            'mouseup',
            this.$VideoPlayerHTML5Api100.bind(this)
          ),
          b('EventListener').listen(
            this.$VideoPlayerHTML5Api37,
            'timeupdate',
            this.$VideoPlayerHTML5Api101.bind(this)
          ),
          b('EventListener').listen(
            this.$VideoPlayerHTML5Api37,
            'click',
            this.$VideoPlayerHTML5Api102.bind(this)
          ),
          b('EventListener').listen(
            this.$VideoPlayerHTML5Api37,
            'loadedmetadata',
            this.$VideoPlayerHTML5Api103.bind(this)
          ),
          b('EventListener').listen(
            this.$VideoPlayerHTML5Api37,
            'progress',
            this.$VideoPlayerHTML5Api104.bind(this)
          ),
          b('EventListener').listen(
            this.$VideoPlayerHTML5Api37,
            'seeked',
            this.$VideoPlayerHTML5Api105.bind(this)
          ),
          b('EventListener').capture(
            this.$VideoPlayerHTML5Api37.parentNode,
            'pause',
            this.$VideoPlayerHTML5Api106.bind(this)
          )
        );
    };
    r.prototype.$VideoPlayerHTML5Api107 = function (a) {
      (this.preventPauseLoggingInMixin = !1),
        a.preventDefault(),
        a.stopPropagation();
    };
    r.prototype.$VideoPlayerHTML5Api106 = function (a) {
      if (a.target !== this.$VideoPlayerHTML5Api37) return;
      this.$VideoPlayerHTML5Api37.ended ||
        (this.$VideoPlayerHTML5Api56 && this.$VideoPlayerHTML5Api107(a),
        (a.lastPauseReason = this.$VideoPlayerHTML5Api22));
      this.$VideoPlayerHTML5Api56 = !1;
    };
    r.prototype.$VideoPlayerHTML5Api104 = function () {
      __p && __p();
      var a = this.$VideoPlayerHTML5Api37.buffered,
        b = 0,
        c = 0,
        d = a.length;
      while (d-- > 0) {
        var e = a.end(d),
          f = a.start(d);
        if (f <= this.$VideoPlayerHTML5Api37.currentTime) {
          c = f;
          b = e - f;
          break;
        }
      }
      this.$VideoPlayerHTML5Api70();
      this.$VideoPlayerHTML5Api108('flash/updateBuffer', {
        duration: b,
        offset: c,
      });
    };
    r.prototype.$VideoPlayerHTML5Api77 = function () {
      clearTimeout(this.$VideoPlayerHTML5Api29);
    };
    r.prototype.$VideoPlayerHTML5Api70 = function () {
      this.$VideoPlayerHTML5Api77(),
        this.$VideoPlayerHTML5Api37.networkState ===
          this.$VideoPlayerHTML5Api37.NETWORK_LOADING &&
          (this.$VideoPlayerHTML5Api29 = setTimeout(
            function () {
              return this.$VideoPlayerHTML5Api109();
            }.bind(this),
            r.networkTimeout
          ));
    };
    r.prototype.$VideoPlayerHTML5Api109 = function () {
      var a = this.$VideoPlayerHTML5Api37.buffered,
        c = 0;
      for (var d = 0; d < a.length; d++) {
        var e = a.start(d),
          f = a.end(d);
        c += f - e;
      }
      this.$VideoPlayerHTML5Api69(b('VideoPlayerLoggerEvent').NETWORK_TIMEOUT, {
        buffered: c,
      });
    };
    r.prototype.$VideoPlayerHTML5Api101 = function () {
      var a;
      this.$VideoPlayerHTML5Api1
        ? (a = this.$VideoPlayerHTML5Api1.currentTime)
        : (a = this.$VideoPlayerHTML5Api37.currentTime);
      this.$VideoPlayerHTML5Api108('flash/updateStatus', {
        position: +a.toFixed(3),
      });
    };
    r.prototype.$VideoPlayerHTML5Api102 = function (a) {
      if (a.button !== 0) return;
      this.emit('clickVideo');
      a.preventDefault();
    };
    r.prototype.isPaused = function () {
      return b('VideoPlayerHTML5Experiments').fixIE11EndedPausedState
        ? this.$VideoPlayerHTML5Api37.paused ||
            this.$VideoPlayerHTML5Api37.ended
        : this.$VideoPlayerHTML5Api37.paused;
    };
    r.prototype.$VideoPlayerHTML5Api110 = function () {
      var a = this.$VideoPlayerHTML5Api37.buffered;
      return (
        a.length > 0 &&
        a.start(0) === 0 &&
        a.end(0) === this.$VideoPlayerHTML5Api37.duration
      );
    };
    r.prototype.$VideoPlayerHTML5Api96 = function () {
      if (
        this.$VideoPlayerHTML5Api61(
          'drop_buffering_detection_from_html5_api',
          !1
        )
      )
        return;
      this.$VideoPlayerHTML5Api110() ||
        ((this.$VideoPlayerHTML5Api53 = !0),
        this.$VideoPlayerHTML5Api108('flash/buffering'));
    };
    r.prototype.setVolume = function (a) {
      this.$VideoPlayerHTML5Api37.volume = a;
    };
    r.prototype.$VideoPlayerHTML5Api98 = function () {
      this.$VideoPlayerHTML5Api37.muted !== this.$VideoPlayerHTML5Api26 &&
      this.$VideoPlayerHTML5Api37.volume === this.$VideoPlayerHTML5Api52 &&
      this.$VideoPlayerHTML5Api37.volume > 0
        ? ((this.$VideoPlayerHTML5Api26 = this.$VideoPlayerHTML5Api37.muted),
          (this.$VideoPlayerHTML5Api52 = this.$VideoPlayerHTML5Api37.volume),
          !this.$VideoPlayerHTML5Api37.muted
            ? this.$VideoPlayerHTML5Api108('flash/unmuteVideo')
            : this.$VideoPlayerHTML5Api108('flash/muteVideo'))
        : ((this.$VideoPlayerHTML5Api26 = this.$VideoPlayerHTML5Api37.muted),
          (this.$VideoPlayerHTML5Api52 = this.$VideoPlayerHTML5Api37.volume),
          this.$VideoPlayerHTML5Api108('flash/changeVolume', {
            volume: this.$VideoPlayerHTML5Api37.volume,
          })),
        this.$VideoPlayerHTML5Api37.muted ||
          this.$VideoPlayerHTML5Api108('flash/turnOffAutoplay', {
            reason: 'unmuted',
          });
    };
    r.prototype.$VideoPlayerHTML5Api99 = function (a) {
      a.button === 0 && (this.$VideoPlayerHTML5Api25 = !0);
    };
    r.prototype.$VideoPlayerHTML5Api100 = function (a) {
      a.button === 0 && (this.$VideoPlayerHTML5Api25 = !1);
    };
    r.prototype.$VideoPlayerHTML5Api94 = function () {
      this.$VideoPlayerHTML5Api68(!1),
        this.$VideoPlayerHTML5Api53 &&
          ((this.$VideoPlayerHTML5Api53 = !1),
          this.$VideoPlayerHTML5Api108('flash/buffered'));
    };
    r.prototype.$VideoPlayerHTML5Api83 = function () {
      (this.$VideoPlayerHTML5Api18 = !0),
        this.$VideoPlayerHTML5Api92(),
        this.$VideoPlayerHTML5Api89(),
        this.$VideoPlayerHTML5Api108('flash/beginPlayback', {
          position: +this.$VideoPlayerHTML5Api37.currentTime.toFixed(2),
          reason: this.$VideoPlayerHTML5Api23,
        }),
        this.$VideoPlayerHTML5Api70();
    };
    r.prototype.$VideoPlayerHTML5Api97 = function (event) {
      __p && __p();
      var a = this.$VideoPlayerHTML5Api61(
        'abort_loading_decisioning_logic',
        !1
      );
      if (
        this.$VideoPlayerHTML5Api37.ended ||
        (a && b('dangerouslyOverrideMediaElementEndedProperty').isEnded(event))
      ) {
        this.$VideoPlayerHTML5Api18 = !1;
        this.$VideoPlayerHTML5Api68(!1);
        return;
      }
      if (
        this.$VideoPlayerHTML5Api37.seeking &&
        this.$VideoPlayerHTML5Api22 === b('VideoPlayerReason').SEEK
      )
        return;
      if (
        !this.$VideoPlayerHTML5Api61('ignore_left_button_when_pausing', !0) &&
        this.$VideoPlayerHTML5Api25
      )
        return;
      if (this.$VideoPlayerHTML5Api22 === b('VideoPlayerReason').SEEK) {
        this.$VideoPlayerHTML5Api22 = null;
        return;
      }
      (this.$VideoPlayerHTML5Api22 === null ||
        this.$VideoPlayerHTML5Api22 === b('VideoPlayerReason').USER) &&
        this.$VideoPlayerHTML5Api108('flash/turnOffAutoplay', {
          reason: 'manually_paused',
        });
      this.$VideoPlayerHTML5Api22 = null;
      this.$VideoPlayerHTML5Api18 = !1;
      this.$VideoPlayerHTML5Api68(!1);
      this.$VideoPlayerHTML5Api66();
      this.$VideoPlayerHTML5Api108('flash/pausePlayback', {
        position: this.$VideoPlayerHTML5Api37.currentTime.toFixed(2),
      });
    };
    r.prototype.$VideoPlayerHTML5Api95 = function () {
      if (this.$VideoPlayerHTML5Api1) return;
      this.$VideoPlayerHTML5Api66();
      this.$VideoPlayerHTML5Api18 = !1;
      this.$VideoPlayerHTML5Api68(!1);
      this.$VideoPlayerHTML5Api108('flash/finishPlayback');
      this.$VideoPlayerHTML5Api45 &&
        this.$VideoPlayerHTML5Api45.hideSubtitles();
    };
    r.prototype.$VideoPlayerHTML5Api105 = function () {
      this.emit('seekEnd', {
        position: +this.$VideoPlayerHTML5Api37.currentTime.toFixed(3),
      });
    };
    r.prototype.getEstimatedBandwidth = function () {
      return this.$VideoPlayerHTML5Api38 &&
        this.$VideoPlayerHTML5Api9.VideoPlayerHTML5Shaka
        ? this.$VideoPlayerHTML5Api9.VideoPlayerHTML5Shaka.getEstimatedBandwidth()
        : null;
    };
    r.prototype.$VideoPlayerHTML5Api103 = function () {
      this.$VideoPlayerHTML5Api108('flash/updateMetadata');
    };
    r.prototype.$VideoPlayerHTML5Api88 = function (a) {
      this.emit(
        'error',
        babelHelpers['extends']({}, a, {
          isPlayback: this.$VideoPlayerHTML5Api30,
        })
      );
    };
    r.prototype.$VideoPlayerHTML5Api93 = function () {
      if (this.$VideoPlayerHTML5Api1) return;
      if (!this.$VideoPlayerHTML5Api37.error) return;
      var a = this.$VideoPlayerHTML5Api37.error,
        b = a.message;
      b || (b = l(a.code));
      this.emit('error', {
        error: m(a.code),
        isPlayback: this.$VideoPlayerHTML5Api30,
        message: b,
      });
    };
    r.prototype.$VideoPlayerHTML5Api69 = function (event, a) {
      event === b('VideoPlayerLoggerEvent').STARTED_PLAYING &&
        this.$VideoPlayerHTML5Api38 &&
        (a.longest_init_response_time =
          this.$VideoPlayerHTML5Api38.getLongestInitResponseTime()),
        (a.projection = this.getVideoProjection()),
        this.$VideoPlayerHTML5Api108('flash/logEvent', {
          logData: babelHelpers['extends']({ event: event }, a),
        });
    };
    r.prototype.$VideoPlayerHTML5Api108 = function (event, a) {
      b('Arbiter').inform(
        event,
        babelHelpers['extends']({ divID: this.$VideoPlayerHTML5Api15 }, a)
      ),
        this.emit(event.substr('flash/'.length), a);
    };
    r.prototype.getLastPlayReason = function () {
      return this.$VideoPlayerHTML5Api23;
    };
    r.prototype.getVideoPlayReason = function () {
      return this.$VideoPlayerHTML5Api51;
    };
    r.prototype.isMuted = function () {
      return this.$VideoPlayerHTML5Api26;
    };
    r.prototype.setPlaybackRate = function (a) {
      this.$VideoPlayerHTML5Api38
        ? this.$VideoPlayerHTML5Api38.setPlaybackRate(a)
        : (this.$VideoPlayerHTML5Api37.playbackRate = a);
    };
    r.prototype.getPlaybackRate = function () {
      if (this.$VideoPlayerHTML5Api38)
        return this.$VideoPlayerHTML5Api38.getPlaybackRate();
      else return this.$VideoPlayerHTML5Api37.playbackRate;
    };
    r.prototype.getPlaybackDuration = function () {
      return this.$VideoPlayerHTML5Api1
        ? this.$VideoPlayerHTML5Api1.playbackDuration
        : this.$VideoPlayerHTML5Api37.duration || 0;
    };
    r.prototype.getVolume = function () {
      return this.$VideoPlayerHTML5Api37.volume;
    };
    r.prototype.getCurrentTimePosition = function () {
      return this.$VideoPlayerHTML5Api37.currentTime;
    };
    r.prototype.getBufferEndPosition = function () {
      var a = this.$VideoPlayerHTML5Api37.buffered;
      if (a && a.length > 0) {
        var b = a.length - 1;
        return a.end(b);
      }
      return null;
    };
    r.prototype.$VideoPlayerHTML5Api80 = function () {
      if (this.$VideoPlayerHTML5Api9.fallbackSources)
        return this.$VideoPlayerHTML5Api19 &&
          this.$VideoPlayerHTML5Api9.fallbackSources.HD
          ? this.$VideoPlayerHTML5Api9.fallbackSources.HD
          : this.$VideoPlayerHTML5Api9.fallbackSources.SD;
      if (this.$VideoPlayerHTML5Api19 && this.$VideoPlayerHTML5Api10.hasHD())
        return this.$VideoPlayerHTML5Api111();
      else return this.$VideoPlayerHTML5Api112();
    };
    r.prototype.$VideoPlayerHTML5Api111 = function () {
      if (this.$VideoPlayerHTML5Api20)
        return this.$VideoPlayerHTML5Api10.getPlayableSrcRateLimitedHD();
      else return this.$VideoPlayerHTML5Api10.getPlayableSrcHD();
    };
    r.prototype.$VideoPlayerHTML5Api112 = function () {
      if (this.$VideoPlayerHTML5Api20)
        return this.$VideoPlayerHTML5Api10.getPlayableSrcRateLimitedSD();
      else return this.$VideoPlayerHTML5Api10.getPlayableSrcSD();
    };
    r.prototype.toggleSubtitles = function () {
      (this.$VideoPlayerHTML5Api46 = !this.$VideoPlayerHTML5Api46),
        this.$VideoPlayerHTML5Api89(),
        this.emit('toggleSubtitles');
    };
    r.prototype.hasSubtitles = function () {
      return (
        this.$VideoPlayerHTML5Api10.hasSubtitles() ||
        (!!this.$VideoPlayerHTML5Api38 &&
          this.$VideoPlayerHTML5Api38.hasSubtitles())
      );
    };
    r.prototype.areSubtitlesActive = function () {
      return this.$VideoPlayerHTML5Api46;
    };
    r.prototype.areSubtitlesAutogenerated = function () {
      return this.$VideoPlayerHTML5Api38
        ? this.$VideoPlayerHTML5Api38.areSubtitlesAutogenerated()
        : !1;
    };
    r.prototype.areHLSActive = function () {
      return !1;
    };
    r.prototype.isRTMP = function () {
      return !1;
    };
    r.prototype.setSubtitlesStyle = function (a, b, c, d) {
      (this.$VideoPlayerHTML5Api47 = a),
        (this.$VideoPlayerHTML5Api48 = b),
        (this.$VideoPlayerHTML5Api49 = c),
        (this.$VideoPlayerHTML5Api50 = d);
    };
    r.prototype.$VideoPlayerHTML5Api89 = function () {
      this.$VideoPlayerHTML5Api38 &&
        this.$VideoPlayerHTML5Api38.hasSubtitles() &&
        this.$VideoPlayerHTML5Api38.enableSubtitles(
          this.$VideoPlayerHTML5Api46
        ),
        this.$VideoPlayerHTML5Api46
          ? this.$VideoPlayerHTML5Api45 &&
            this.$VideoPlayerHTML5Api45.showSubtitles()
          : this.$VideoPlayerHTML5Api45 &&
            this.$VideoPlayerHTML5Api45.hideSubtitles();
    };
    r.prototype.$VideoPlayerHTML5Api113 = function () {
      this.$VideoPlayerHTML5Api18 && this.$VideoPlayerHTML5Api89(),
        this.emit('loadedSubtitles'),
        this.$VideoPlayerHTML5Api45.setSubtitlesStyle(
          this.$VideoPlayerHTML5Api47,
          this.$VideoPlayerHTML5Api48,
          this.$VideoPlayerHTML5Api49,
          this.$VideoPlayerHTML5Api50
        );
    };
    r.prototype.$VideoPlayerHTML5Api91 = function (a) {
      __p && __p();
      b('Bootloader').loadModules(
        ['VideoPlayerHTML5Subtitles', 'VideoPlayerWebVttSubtitleStream'],
        function (b, c) {
          this.$VideoPlayerHTML5Api45 &&
            this.$VideoPlayerHTML5Api45.removeSubtitles();
          var d = this.$VideoPlayerHTML5Api9.subtitleDrawer;
          c = new c(this.$VideoPlayerHTML5Api37, a);
          this.$VideoPlayerHTML5Api45 = new b(this.$VideoPlayerHTML5Api37, c);
          this.$VideoPlayerHTML5Api45.setOnSubtitlesReady(
            function () {
              return this.$VideoPlayerHTML5Api113();
            }.bind(this)
          );
          this.$VideoPlayerHTML5Api45.registerDrawer(d);
          this.$VideoPlayerHTML5Api45.loadSubtitles();
        }.bind(this),
        'VideoPlayerHTML5Api'
      );
    };
    r.prototype.$VideoPlayerHTML5Api90 = function () {
      __p && __p();
      var a = new (b('Deferred'))();
      b('Bootloader').loadModules(
        ['VideoPlayerHTML5Subtitles', 'VideoPlayerCea608SubtitleSource'],
        function (b, c) {
          c = new c(this.$VideoPlayerHTML5Api37);
          a.resolve(c);
          this.$VideoPlayerHTML5Api45 &&
            this.$VideoPlayerHTML5Api45.removeSubtitles();
          var d = this.$VideoPlayerHTML5Api9.subtitleDrawer;
          this.$VideoPlayerHTML5Api45 = new b(this.$VideoPlayerHTML5Api37, c);
          this.$VideoPlayerHTML5Api45.setOnSubtitlesReady(
            function () {
              return this.$VideoPlayerHTML5Api113();
            }.bind(this)
          );
          this.$VideoPlayerHTML5Api45.registerDrawer(d);
          this.$VideoPlayerHTML5Api45.loadSubtitles();
        }.bind(this),
        'VideoPlayerHTML5Api'
      );
      return a.getPromise();
    };
    r.prototype.setStillFrameEnabled = function (a) {
      this.$VideoPlayerHTML5Api42 = !a;
    };
    r.prototype.$VideoPlayerHTML5Api62 = function () {
      __p && __p();
      if (this.$VideoPlayerHTML5Api61('use_dimensions_fallbacks', !0)) {
        var a = b('DOMDimensions').getElementDimensions(
          this.$VideoPlayerHTML5Api37
        );
        if (a.width !== 0 && a.height !== 0) return a;
        else {
          a = this.$VideoPlayerHTML5Api37.getAttribute('data-video-width');
          var c = this.$VideoPlayerHTML5Api37.getAttribute('data-video-height');
          return {
            width: Number(a) || this.$VideoPlayerHTML5Api37.width || p,
            height: Number(c) || this.$VideoPlayerHTML5Api37.height || q,
          };
        }
      } else
        return b('DOMDimensions').getElementDimensions(
          this.$VideoPlayerHTML5Api37
        );
    };
    r.prototype.getDimensionsForDevice = function () {
      var a = window.devicePixelRatio || 1,
        b = this.$VideoPlayerHTML5Api62();
      return { width: b.width * a, height: b.height * a };
    };
    r.prototype.$VideoPlayerHTML5Api114 = function () {
      __p && __p();
      if (this.$VideoPlayerHTML5Api42) return;
      if (!this.$VideoPlayerHTML5Api41) {
        var a = this.$VideoPlayerHTML5Api62();
        a = b('DOM').create('canvas', {
          width: a.width,
          height: a.height,
          className: '_3t5i',
        });
        b('DOM').insertAfter(this.$VideoPlayerHTML5Api37, a);
        this.$VideoPlayerHTML5Api41 = a = new (b('VideoFrameBuffer'))(
          a,
          this.$VideoPlayerHTML5Api37
        );
      } else a = this.$VideoPlayerHTML5Api41;
      b('CSS').show(a.getDOMNode());
      a.updateFrameBuffer();
      b('CSS').hide(this.$VideoPlayerHTML5Api37);
    };
    r.prototype.$VideoPlayerHTML5Api78 = function () {
      if (!this.$VideoPlayerHTML5Api41) return;
      b('CSS').hide(this.$VideoPlayerHTML5Api41.getDOMNode());
      b('CSS').show(this.$VideoPlayerHTML5Api37);
    };
    r.prototype.$VideoPlayerHTML5Api82 = function (a) {
      __p && __p();
      a === void 0 && (a = null);
      var c = this.$VideoPlayerHTML5Api1;
      if (!c) return;
      if (this.$VideoPlayerHTML5Api21) return;
      this.$VideoPlayerHTML5Api21 = !0;
      this.emit('restoringAfterAbort');
      this.allowNextSeekInMixin();
      a = a == null ? c.currentTime : a;
      if (this.$VideoPlayerHTML5Api38) this.$VideoPlayerHTML5Api38.reload(a);
      else {
        var d = this.$VideoPlayerHTML5Api80();
        d && (this.$VideoPlayerHTML5Api37.src = d);
        this.$VideoPlayerHTML5Api37.preload = c.preload;
      }
      b('seekHTMLMediaElementTo')(
        this.$VideoPlayerHTML5Api37,
        a,
        function () {
          this.$VideoPlayerHTML5Api78(),
            this.$VideoPlayerHTML5Api1 &&
              ((this.$VideoPlayerHTML5Api37.muted =
                this.$VideoPlayerHTML5Api1.mutedState),
              (this.$VideoPlayerHTML5Api1 = null),
              this.emit('restoredAfterAbort')),
            (this.$VideoPlayerHTML5Api21 = !1),
            b('onCanPlayHTMLMediaElement').once(
              this.$VideoPlayerHTML5Api37,
              function () {
                return this.$VideoPlayerHTML5Api84();
              }.bind(this)
            );
        }.bind(this)
      );
    };
    r.prototype.abortLoadingWithoutStillFrame = function () {
      __p && __p();
      if (this.$VideoPlayerHTML5Api1) return;
      var a = this.$VideoPlayerHTML5Api37.currentTime,
        c = this.isMuted(),
        d = this.$VideoPlayerHTML5Api37.duration,
        e = this.isPaused(),
        f = this.$VideoPlayerHTML5Api37.preload;
      if (
        b('VideoPlayerShakaGlobalConfig').getBool(
          'abort_loading_live_head_as_current_time',
          !1
        ) &&
        this.$VideoPlayerHTML5Api10 &&
        this.$VideoPlayerHTML5Api10.isLiveStream()
      ) {
        var g = this.getSeekableRanges();
        if (g) {
          var h = g.length() - 1;
          g = g.end(h);
          a = g;
        }
      }
      this.$VideoPlayerHTML5Api32 = !1;
      this.$VideoPlayerHTML5Api1 = {
        mutedState: c,
        currentTime: a,
        playbackDuration: d,
        preload: f,
      };
      e &&
        this.$VideoPlayerHTML5Api18 &&
        b('dispatchEvent')(this.$VideoPlayerHTML5Api37, 'pause');
      this.emit('abortedLoading');
      if (this.$VideoPlayerHTML5Api38) {
        this.$VideoPlayerHTML5Api38.unload();
        return;
      }
      this.$VideoPlayerHTML5Api37.preload = 'none';
      this.$VideoPlayerHTML5Api37.removeAttribute('src');
      this.$VideoPlayerHTML5Api37.load();
    };
    r.prototype.abortLoading = function (a) {
      if (this.$VideoPlayerHTML5Api1) return;
      a = a || {};
      a.disableStillFrame || this.$VideoPlayerHTML5Api114();
      this.abortLoadingWithoutStillFrame();
    };
    r.prototype.setPreferredVideoQuality = function (a) {
      __p && __p();
      this.$VideoPlayerHTML5Api31 = a;
      if (!this.$VideoPlayerHTML5Api10) return;
      if (this.$VideoPlayerHTML5Api38) {
        this.$VideoPlayerHTML5Api38.setPreferredVideoQuality(a);
        return;
      }
      b('VideoPlayerHTML5Experiments').newStateChangeCalculation ||
        (this.$VideoPlayerHTML5Api69(
          b('VideoPlayerLoggerEvent').PAUSED,
          this.addWatchTimeData({ reason: 'toggle_hd' })
        ),
        this.$VideoPlayerHTML5Api69(
          b('VideoPlayerLoggerEvent').REQUESTED_PLAYING,
          { reason: b('VideoPlayerReason').USER }
        ));
      this.$VideoPlayerHTML5Api19 = !this.$VideoPlayerHTML5Api19;
      var c = this.$VideoPlayerHTML5Api37.currentTime,
        d = this.$VideoPlayerHTML5Api37.muted,
        e = this.$VideoPlayerHTML5Api37.volume;
      a = this.$VideoPlayerHTML5Api80();
      a && (this.$VideoPlayerHTML5Api37.src = a);
      b('onCanPlayHTMLMediaElement').once(
        this.$VideoPlayerHTML5Api37,
        function () {
          (this.$VideoPlayerHTML5Api37.currentTime = c),
            (this.$VideoPlayerHTML5Api37.muted = d),
            (this.$VideoPlayerHTML5Api37.volume = e),
            this.$VideoPlayerHTML5Api84(),
            this.emit('qualityChange');
        }.bind(this)
      );
      this.$VideoPlayerHTML5Api30 = !0;
      this.$VideoPlayerHTML5Api68(!0);
      this.$VideoPlayerHTML5Api86();
    };
    r.prototype.unsetPreferredVideoQuality = function () {
      (this.$VideoPlayerHTML5Api31 = null),
        this.$VideoPlayerHTML5Api38 &&
          this.$VideoPlayerHTML5Api38.unsetPreferredVideoQuality();
    };
    r.prototype.getPreferredVideoQuality = function () {
      return this.$VideoPlayerHTML5Api31;
    };
    r.prototype.getSelectedVideoQuality = function () {
      return this.$VideoPlayerHTML5Api38
        ? this.$VideoPlayerHTML5Api38.getSelectedVideoQuality()
        : this.$VideoPlayerHTML5Api19
        ? 'HD'
        : 'SD';
    };
    r.prototype.getAvailableVideoQualities = function () {
      if (this.$VideoPlayerHTML5Api9.fallbackSources)
        return this.$VideoPlayerHTML5Api9.fallbackSources.HD
          ? ['SD', 'HD']
          : ['SD'];
      if (!this.$VideoPlayerHTML5Api10) return [];
      return this.$VideoPlayerHTML5Api38
        ? this.$VideoPlayerHTML5Api38.getAvailableVideoQualities()
        : this.$VideoPlayerHTML5Api10.hasHD()
        ? ['SD', 'HD']
        : ['SD'];
    };
    r.prototype.getIsAbrEnabled = function () {
      return this.$VideoPlayerHTML5Api38
        ? this.$VideoPlayerHTML5Api38.getIsAbrEnabled()
        : !1;
    };
    r.prototype.canAutoSelectVideoQuality = function () {
      return this.$VideoPlayerHTML5Api38
        ? this.$VideoPlayerHTML5Api38.canAutoSelectVideoQuality()
        : !1;
    };
    r.prototype.setPreloadDisabled = function (a) {
      this.$VideoPlayerHTML5Api38 &&
        this.$VideoPlayerHTML5Api38.setPreloadDisabled(a);
    };
    r.prototype.restoreStreamBufferSize = function () {
      this.$VideoPlayerHTML5Api38 &&
        this.$VideoPlayerHTML5Api38.restoreStreamBufferSize();
    };
    r.prototype.setSmartBufferAdjustmentEnabled = function (a) {
      this.$VideoPlayerHTML5Api38 &&
        this.$VideoPlayerHTML5Api38.setSmartBufferAdjustmentEnabled(a);
    };
    r.getPlayerVersion = function () {
      return b('VideoPlayerVersions').PLEASANTVILLE;
    };
    r.prototype.getUpdatedPlayerVersion = function () {
      return this.$VideoPlayerHTML5Api38
        ? this.$VideoPlayerHTML5Api38.getPlayerVersion() || r.getPlayerVersion()
        : r.getPlayerVersion();
    };
    r.prototype.getVideoNodeSource = function () {
      return this.$VideoPlayerHTML5Api37.src || '';
    };
    r.prototype.getVideoProjection = function () {
      __p && __p();
      if (this.$VideoPlayerHTML5Api33) return this.$VideoPlayerHTML5Api33;
      if (this.$VideoPlayerHTML5Api38) {
        this.$VideoPlayerHTML5Api33 =
          this.$VideoPlayerHTML5Api38.getVideoProjection();
        if (this.$VideoPlayerHTML5Api33) return this.$VideoPlayerHTML5Api33;
      }
      this.$VideoPlayerHTML5Api33 = this.$VideoPlayerHTML5Api10.getProjection();
      return this.$VideoPlayerHTML5Api33;
    };
    r.prototype.$VideoPlayerHTML5Api115 = function () {
      this.$VideoPlayerHTML5Api7 = this.getCurrentTimePosition();
    };
    r.prototype.$VideoPlayerHTML5Api116 = function () {
      this.$VideoPlayerHTML5Api7
        ? ((this.$VideoPlayerHTML5Api34 = this.$VideoPlayerHTML5Api7),
          (this.$VideoPlayerHTML5Api7 = null))
        : (this.$VideoPlayerHTML5Api34 = o);
    };
    r.prototype.$VideoPlayerHTML5Api117 = function () {
      (this.$VideoPlayerHTML5Api8 = this.getVolume()),
        (this.$VideoPlayerHTML5Api6 = this.isMuted());
    };
    r.prototype.$VideoPlayerHTML5Api118 = function () {
      this.$VideoPlayerHTML5Api8 &&
        this.$VideoPlayerHTML5Api6 &&
        (this.setVolume(this.$VideoPlayerHTML5Api8),
        this.$VideoPlayerHTML5Api6 ? this.mute() : this.unmute(),
        (this.$VideoPlayerHTML5Api8 = null),
        (this.$VideoPlayerHTML5Api6 = null));
    };
    r.prototype.reloadDashManifest = function () {
      var a = this.$VideoPlayerHTML5Api38;
      if (a) {
        this.$VideoPlayerHTML5Api115();
        this.abortLoading();
        return this.$VideoPlayerHTML5Api119(function () {
          return a.refreshDashManifest();
        }, this.$VideoPlayerHTML5Api34);
      }
      return b('Promise').reject();
    };
    r.prototype.reloadLiveVODHighlightsManifest = function () {
      var a = this.$VideoPlayerHTML5Api38;
      if (a) {
        this.$VideoPlayerHTML5Api115();
        this.abortLoading();
        return this.$VideoPlayerHTML5Api119(function () {
          return a.refreshLiveVODHighlightsManifest();
        }, this.$VideoPlayerHTML5Api34);
      }
      return b('Promise').reject();
    };
    r.prototype.$VideoPlayerHTML5Api119 = function (a, b) {
      return a().then(
        function () {
          this.$VideoPlayerHTML5Api82(b), this.$VideoPlayerHTML5Api116();
        }.bind(this)
      );
    };
    r.prototype.isPlayingVODHighlights = function () {
      return this.$VideoPlayerHTML5Api38
        ? this.$VideoPlayerHTML5Api38.isPlayingLiveVODHighlights()
        : !1;
    };
    r.prototype.$VideoPlayerHTML5Api84 = function () {
      __p && __p();
      if (this.$VideoPlayerHTML5Api30) {
        if (this.$VideoPlayerHTML5Api3)
          var a = b('EventListener').capture(
            this.$VideoPlayerHTML5Api37.parentNode,
            'play',
            function (c) {
              b('Event').kill(c), a.remove();
            }
          );
        this.$VideoPlayerHTML5Api37.ended &&
          !this.$VideoPlayerHTML5Api37.paused &&
          b('dispatchEvent')(this.$VideoPlayerHTML5Api37, 'play');
        if (this.$VideoPlayerHTML5Api38) {
          var c = this.$VideoPlayerHTML5Api38,
            d = k && k.isReady() && k.get('www_videos_shaka_wait_for_buffered');
          d = d ? this.$VideoPlayerHTML5Api120() : c.play();
        } else
          b('VideoPlayerHTML5Experiments').preloadOnPlay &&
            (this.$VideoPlayerHTML5Api37.preload = 'auto'),
            (d = this.$VideoPlayerHTML5Api37.play());
        d &&
          d['catch'] &&
          d['catch'](
            function (a) {
              a.name === 'NotAllowedError' &&
                (this.$VideoPlayerHTML5Api69(
                  b('VideoPlayerLoggerEvent').CANCELLED_REQUESTED_PLAYING,
                  { reason: 'not_allowed' }
                ),
                this.$VideoPlayerHTML5Api108('flash/playbackNotAllowed')),
                !1,
                this.$VideoPlayerHTML5Api68(!1);
            }.bind(this)
          );
      }
      this.$VideoPlayerHTML5Api85();
    };
    r.prototype.isLiveVODHighlightsAvailable = function () {
      return this.$VideoPlayerHTML5Api16;
    };
    r.prototype.setEnableLiveheadCatchup = function (a) {
      this.$VideoPlayerHTML5Api38 &&
        this.$VideoPlayerHTML5Api38.setEnableLiveheadCatchup(a);
    };
    r.prototype.isFBWasLive = function () {
      return !!(
        this.$VideoPlayerHTML5Api38 && this.$VideoPlayerHTML5Api38.isFBWasLive()
      );
    };
    r.prototype.isFBIsLiveTemplated = function () {
      return !!(
        this.$VideoPlayerHTML5Api38 &&
        this.$VideoPlayerHTML5Api38.isFBIsLiveTemplated()
      );
    };
    r.prototype.isFBMS = function () {
      return !!(
        this.$VideoPlayerHTML5Api38 && this.$VideoPlayerHTML5Api38.isFBMS()
      );
    };
    r.prototype.isLiveheadCatchupEnabled = function () {
      return this.$VideoPlayerHTML5Api38
        ? this.$VideoPlayerHTML5Api38.isLiveheadCatchupEnabled()
        : !1;
    };
    r.prototype.getSeekableRanges = function () {
      __p && __p();
      if (this.$VideoPlayerHTML5Api38)
        return this.$VideoPlayerHTML5Api38.getSeekableRanges();
      var a = [];
      if (this.$VideoPlayerHTML5Api37) {
        var c = this.$VideoPlayerHTML5Api37.seekable;
        for (var d = 0; d < c.length; ++d)
          a.push({ startTime: c.start(d), endTime: c.end(d) });
      }
      a.length === 0 && a.push({ startTime: 0, endTime: 0 });
      return new (b('TimeRanges'))(a);
    };
    r.prototype.$VideoPlayerHTML5Api120 = function () {
      __p && __p();
      var a, c, d, e;
      return b('regeneratorRuntime').async(
        function (f) {
          __p && __p();
          while (1)
            switch ((f.prev = f.next)) {
              case 0:
                a = 3;
              case 1:
                if (
                  !(!this.$VideoPlayerHTML5Api12 && this.$VideoPlayerHTML5Api38)
                ) {
                  f.next = 12;
                  break;
                }
                if (!(this.$VideoPlayerHTML5Api37.buffered.length > 0)) {
                  f.next = 8;
                  break;
                }
                c = this.$VideoPlayerHTML5Api37.buffered.start(0);
                d = this.$VideoPlayerHTML5Api37.buffered.end(0);
                e = Math.round(d - c) >= a;
                if (!(e && this.$VideoPlayerHTML5Api38)) {
                  f.next = 8;
                  break;
                }
                return f.abrupt('return', this.$VideoPlayerHTML5Api38.play());
              case 8:
                f.next = 10;
                return b('regeneratorRuntime').awrap(
                  new (b('Promise'))(function (a) {
                    return setTimeout(a, 100);
                  })
                );
              case 10:
                f.next = 1;
                break;
              case 12:
                return f.abrupt('return', null);
              case 13:
              case 'end':
                return f.stop();
            }
        },
        null,
        this
      );
    };
    r.getStartMutedFromConfig = function (a) {
      return a.muted;
    };
    r.getStreamTypeFromConfig = function (a) {
      a = new (b('VideoData'))(a.videoData[0]);
      return a.getStreamType();
    };
    r.getIsServableViaFbmsFromConfig = function (a) {
      a = new (b('VideoData'))(a.videoData[0]);
      return a.isServableViaFbms();
    };
    r.getIsPlayingLiveFromConfig = function (a) {
      a = new (b('VideoData'))(a.videoData[0]);
      return a.isLiveStream();
    };
    r.getIsFacecastAudioFromConfig = function (a) {
      a = new (b('VideoData'))(a.videoData[0]);
      return a.isFacecastAudio();
    };
    r.getIsSpherical = function (a) {
      a = new (b('VideoData'))(a.videoData[0]);
      return a.isSpherical();
    };
    r.networkTimeout = 5e3;
    e.exports = r;
  },
  null
);
__d(
  'VideoAsyncLoggerHelper',
  ['SubscriptionsHandler'],
  function (a, b, c, d, e, f) {
    function a(a, c, d) {
      var e,
        f = new (b('SubscriptionsHandler'))(),
        g = !1,
        h = function () {
          g || (a(), (g = !0)), e && (clearTimeout(e), (e = null)), f.release();
        };
      e = setTimeout(h, 0);
      c.forEach(function (event) {
        f.addSubscriptions(d.addListener(event, h));
      });
    }
    e.exports = { operateAsync: a };
  },
  null
);
__d(
  'VideoPlayerConnectionQuality',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = {
        POOR: 'POOR',
        MODERATE: 'MODERATE',
        GOOD: 'GOOD',
        EXCELLENT: 'EXCELLENT',
      },
      h = [
        { bandwidth: 5e5, connectionQuality: g.POOR },
        { bandwidth: 2e6, connectionQuality: g.MODERATE },
        { bandwidth: 1e7, connectionQuality: g.GOOD },
      ],
      i = 100,
      j = null,
      k = null;
    a = {
      evaluate: function (a) {
        __p && __p();
        if (j !== null && k !== null && j >= Date.now() - i) return k;
        a = a();
        var b = null;
        for (var c = 0; c < h.length; c++)
          if (a < h[c].bandwidth) {
            b = h[c].connectionQuality;
            break;
          }
        b === null && (b = g.EXCELLENT);
        j = Date.now();
        k = b;
        return b;
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'CoverVideoOffsetType',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({ VERTICAL: 0, HORIZONTAL: 1 });
  },
  null
);
__d(
  'DelegatedVideoPriorityAdjuster',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a() {
      (this.$1 = function () {}), (this.$2 = 0);
    }
    a.prototype.setOnPriorityChanged = function (a) {
      this.$1 = a;
    };
    a.prototype.getPriorityAdjustment = function () {
      return this.$2;
    };
    a.prototype.notifyAdjustment = function (a) {
      if (this.$2 === a) return;
      this.$2 = a;
      this.$1(this.$2);
    };
    a.prototype.cleanup = function () {
      this.$1 = function () {};
    };
    e.exports = a;
  },
  null
);
__d(
  'LiveCopyrightAction',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      BLOCK: 'block',
      MUTE: 'mute',
      UNMUTE: 'unmute',
    });
  },
  null
);
__d(
  'LiveVideoPlayerConstants',
  [],
  function (a, b, c, d, e, f) {
    a = {
      ACTIONS: {
        SET_IS_REWOUND: 'SET_IS_REWOUND',
        DISMISS_REWIND_COMMENT_OVERLAY: 'DISMISS_REWIND_COMMENT_OVERLAY',
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'ExplicitRegistrationReactDispatcher',
  ['ExplicitRegistrationDispatcher', 'ReactDOM'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g, h;
    g = babelHelpers.inherits(a, b('ExplicitRegistrationDispatcher'));
    h = g && g.prototype;
    a.prototype.dispatch = function (a) {
      b('ReactDOM').unstable_batchedUpdates(
        function () {
          h.dispatch.call(this, a);
        }.bind(this)
      );
    };
    function a() {
      g.apply(this, arguments);
    }
    e.exports = a;
  },
  null
);
__d(
  'LiveVideoPlayerDispatcher',
  ['ExplicitRegistrationReactDispatcher'],
  function (a, b, c, d, e, f) {
    var g;
    c = babelHelpers.inherits(a, b('ExplicitRegistrationReactDispatcher'));
    g = c && c.prototype;
    function a(a) {
      g.constructor.call(this, a), (this.dispatch = this.dispatch.bind(this));
    }
    e.exports = new a({ strict: !0 });
  },
  null
);
__d(
  'immutable',
  [],
  function (a, b, c, d, e, f) {
    (function (b, c) {
      typeof f === 'object' && typeof e !== 'undefined'
        ? (e.exports = c())
        : typeof define === 'function' && define.amd
        ? define(c)
        : (b.Immutable = c());
    })(this, function () {
      var a = Array.prototype.slice;
      function b(a, b) {
        b && (a.prototype = Object.create(b.prototype)),
          (a.prototype.constructor = a);
      }
      var c = 'delete',
        d = 5,
        e = 1 << d,
        f = e - 1,
        g = {},
        h = { value: !1 },
        i = { value: !1 };
      function j(a) {
        a.value = !1;
        return a;
      }
      function k(a) {
        a && (a.value = !0);
      }
      function l() {}
      function m(a, b) {
        b = b || 0;
        var c = Math.max(0, a.length - b),
          d = new Array(c);
        for (var e = 0; e < c; e++) d[e] = a[e + b];
        return d;
      }
      function n(a) {
        a.size === undefined && (a.size = a.__iterate(p));
        return a.size;
      }
      function o(a, b) {
        return b >= 0 ? +b : n(a) + +b;
      }
      function p() {
        return !0;
      }
      function q(a, b, c) {
        return (
          (a === 0 || (c !== undefined && a <= -c)) &&
          (b === undefined || (c !== undefined && b >= c))
        );
      }
      function r(a, b) {
        return aa(a, b, 0);
      }
      function s(a, b) {
        return aa(a, b, b);
      }
      function aa(a, b, c) {
        return a === undefined
          ? c
          : a < 0
          ? Math.max(0, b + a)
          : b === undefined
          ? a
          : Math.min(b, a);
      }
      function t(a) {
        return x(a) ? a : F(a);
      }
      b(u, t);
      function u(a) {
        return y(a) ? a : G(a);
      }
      b(v, t);
      function v(a) {
        return z(a) ? a : H(a);
      }
      b(w, t);
      function w(a) {
        return x(a) && !ba(a) ? a : I(a);
      }
      function x(a) {
        return !!(a && a[da]);
      }
      function y(a) {
        return !!(a && a[ea]);
      }
      function z(a) {
        return !!(a && a[fa]);
      }
      function ba(a) {
        return y(a) || z(a);
      }
      function ca(a) {
        return !!(a && a[ga]);
      }
      t.isIterable = x;
      t.isKeyed = y;
      t.isIndexed = z;
      t.isAssociative = ba;
      t.isOrdered = ca;
      t.Keyed = u;
      t.Indexed = v;
      t.Set = w;
      var da = '@@__IMMUTABLE_ITERABLE__@@',
        ea = '@@__IMMUTABLE_KEYED__@@',
        fa = '@@__IMMUTABLE_INDEXED__@@',
        ga = '@@__IMMUTABLE_ORDERED__@@',
        ha = 0,
        A = 1,
        B = 2,
        ia = typeof Symbol === 'function' && Symbol.iterator,
        ja = '@@iterator',
        ka = ia || ja;
      function C(a) {
        this.next = a;
      }
      C.prototype.toString = function () {
        return '[Iterator]';
      };
      C.KEYS = ha;
      C.VALUES = A;
      C.ENTRIES = B;
      C.prototype.inspect = C.prototype.toSource = function () {
        return this.toString();
      };
      C.prototype[ka] = function () {
        return this;
      };
      function D(a, b, c, d) {
        a = a === 0 ? b : a === 1 ? c : [b, c];
        d ? (d.value = a) : (d = { value: a, done: !1 });
        return d;
      }
      function E() {
        return { value: undefined, done: !0 };
      }
      function la(a) {
        return !!oa(a);
      }
      function ma(a) {
        return a && typeof a.next === 'function';
      }
      function na(a) {
        var b = oa(a);
        return b && b.call(a);
      }
      function oa(a) {
        a = a && ((ia && a[ia]) || a[ja]);
        if (typeof a === 'function') return a;
      }
      function pa(a) {
        return a && typeof a.length === 'number';
      }
      b(F, t);
      function F(a) {
        return a === null || a === undefined ? xa() : x(a) ? a.toSeq() : Aa(a);
      }
      F.of = function () {
        return F(arguments);
      };
      F.prototype.toSeq = function () {
        return this;
      };
      F.prototype.toString = function () {
        return this.__toString('Seq {', '}');
      };
      F.prototype.cacheResult = function () {
        !this._cache &&
          this.__iterateUncached &&
          ((this._cache = this.entrySeq().toArray()),
          (this.size = this._cache.length));
        return this;
      };
      F.prototype.__iterate = function (a, b) {
        return Ca(this, a, b, !0);
      };
      F.prototype.__iterator = function (a, b) {
        return Da(this, a, b, !0);
      };
      b(G, F);
      function G(a) {
        return a === null || a === undefined
          ? xa().toKeyedSeq()
          : x(a)
          ? y(a)
            ? a.toSeq()
            : a.fromEntrySeq()
          : ya(a);
      }
      G.prototype.toKeyedSeq = function () {
        return this;
      };
      b(H, F);
      function H(a) {
        return a === null || a === undefined
          ? xa()
          : x(a)
          ? y(a)
            ? a.entrySeq()
            : a.toIndexedSeq()
          : za(a);
      }
      H.of = function () {
        return H(arguments);
      };
      H.prototype.toIndexedSeq = function () {
        return this;
      };
      H.prototype.toString = function () {
        return this.__toString('Seq [', ']');
      };
      H.prototype.__iterate = function (a, b) {
        return Ca(this, a, b, !1);
      };
      H.prototype.__iterator = function (a, b) {
        return Da(this, a, b, !1);
      };
      b(I, F);
      function I(a) {
        return (
          a === null || a === undefined
            ? xa()
            : x(a)
            ? y(a)
              ? a.entrySeq()
              : a
            : za(a)
        ).toSetSeq();
      }
      I.of = function () {
        return I(arguments);
      };
      I.prototype.toSetSeq = function () {
        return this;
      };
      F.isSeq = va;
      F.Keyed = G;
      F.Set = I;
      F.Indexed = H;
      var qa = '@@__IMMUTABLE_SEQ__@@';
      F.prototype[qa] = !0;
      b(ra, H);
      function ra(a) {
        (this._array = a), (this.size = a.length);
      }
      ra.prototype.get = function (a, b) {
        return this.has(a) ? this._array[o(this, a)] : b;
      };
      ra.prototype.__iterate = function (a, b) {
        var c = this._array,
          d = c.length - 1;
        for (var e = 0; e <= d; e++)
          if (a(c[b ? d - e : e], e, this) === !1) return e + 1;
        return e;
      };
      ra.prototype.__iterator = function (a, b) {
        var c = this._array,
          d = c.length - 1,
          e = 0;
        return new C(function () {
          return e > d ? E() : D(a, e, c[b ? d - e++ : e++]);
        });
      };
      b(sa, G);
      function sa(a) {
        var b = Object.keys(a);
        this._object = a;
        this._keys = b;
        this.size = b.length;
      }
      sa.prototype.get = function (a, b) {
        return b !== undefined && !this.has(a) ? b : this._object[a];
      };
      sa.prototype.has = function (a) {
        return this._object.hasOwnProperty(a);
      };
      sa.prototype.__iterate = function (a, b) {
        var c = this._object,
          d = this._keys,
          e = d.length - 1;
        for (var f = 0; f <= e; f++) {
          var g = d[b ? e - f : f];
          if (a(c[g], g, this) === !1) return f + 1;
        }
        return f;
      };
      sa.prototype.__iterator = function (a, b) {
        var c = this._object,
          d = this._keys,
          e = d.length - 1,
          f = 0;
        return new C(function () {
          var g = d[b ? e - f : f];
          return f++ > e ? E() : D(a, g, c[g]);
        });
      };
      sa.prototype[ga] = !0;
      b(ta, H);
      function ta(a) {
        (this._iterable = a), (this.size = a.length || a.size);
      }
      ta.prototype.__iterateUncached = function (a, b) {
        if (b) return this.cacheResult().__iterate(a, b);
        b = this._iterable;
        b = na(b);
        var c = 0;
        if (ma(b)) {
          var d;
          while (!(d = b.next()).done) if (a(d.value, c++, this) === !1) break;
        }
        return c;
      };
      ta.prototype.__iteratorUncached = function (a, b) {
        if (b) return this.cacheResult().__iterator(a, b);
        b = this._iterable;
        var c = na(b);
        if (!ma(c)) return new C(E);
        var d = 0;
        return new C(function () {
          var b = c.next();
          return b.done ? b : D(a, d++, b.value);
        });
      };
      b(ua, H);
      function ua(a) {
        (this._iterator = a), (this._iteratorCache = []);
      }
      ua.prototype.__iterateUncached = function (a, b) {
        if (b) return this.cacheResult().__iterate(a, b);
        b = this._iterator;
        var c = this._iteratorCache,
          d = 0;
        while (d < c.length) if (a(c[d], d++, this) === !1) return d;
        var e;
        while (!(e = b.next()).done) {
          e = e.value;
          c[d] = e;
          if (a(e, d++, this) === !1) break;
        }
        return d;
      };
      ua.prototype.__iteratorUncached = function (a, b) {
        if (b) return this.cacheResult().__iterator(a, b);
        var c = this._iterator,
          d = this._iteratorCache,
          e = 0;
        return new C(function () {
          if (e >= d.length) {
            var b = c.next();
            if (b.done) return b;
            d[e] = b.value;
          }
          return D(a, e, d[e++]);
        });
      };
      function va(a) {
        return !!(a && a[qa]);
      }
      var wa;
      function xa() {
        return wa || (wa = new ra([]));
      }
      function ya(a) {
        var b = Array.isArray(a)
          ? new ra(a).fromEntrySeq()
          : ma(a)
          ? new ua(a).fromEntrySeq()
          : la(a)
          ? new ta(a).fromEntrySeq()
          : typeof a === 'object'
          ? new sa(a)
          : undefined;
        if (!b)
          throw new TypeError(
            'Expected Array or iterable object of [k, v] entries, or keyed object: ' +
              a
          );
        return b;
      }
      function za(a) {
        var b = Ba(a);
        if (!b)
          throw new TypeError(
            'Expected Array or iterable object of values: ' + a
          );
        return b;
      }
      function Aa(a) {
        var b = Ba(a) || (typeof a === 'object' && new sa(a));
        if (!b)
          throw new TypeError(
            'Expected Array or iterable object of values, or keyed object: ' + a
          );
        return b;
      }
      function Ba(a) {
        return pa(a)
          ? new ra(a)
          : ma(a)
          ? new ua(a)
          : la(a)
          ? new ta(a)
          : undefined;
      }
      function Ca(a, b, c, d) {
        var e = a._cache;
        if (e) {
          var f = e.length - 1;
          for (var g = 0; g <= f; g++) {
            var h = e[c ? f - g : g];
            if (b(h[1], d ? h[0] : g, a) === !1) return g + 1;
          }
          return g;
        }
        return a.__iterateUncached(b, c);
      }
      function Da(a, b, c, d) {
        var e = a._cache;
        if (e) {
          var f = e.length - 1,
            g = 0;
          return new C(function () {
            var a = e[c ? f - g : g];
            return g++ > f ? E() : D(b, d ? a[0] : g - 1, a[1]);
          });
        }
        return a.__iteratorUncached(b, c);
      }
      b(Ea, t);
      function Ea() {
        throw TypeError('Abstract');
      }
      b(Fa, Ea);
      function Fa() {}
      b(Ga, Ea);
      function Ga() {}
      b(Ha, Ea);
      function Ha() {}
      Ea.Keyed = Fa;
      Ea.Indexed = Ga;
      Ea.Set = Ha;
      function J(a, b) {
        if (a === b || (a !== a && b !== b)) return !0;
        if (!a || !b) return !1;
        if (
          typeof a.valueOf === 'function' &&
          typeof b.valueOf === 'function'
        ) {
          a = a.valueOf();
          b = b.valueOf();
          if (a === b || (a !== a && b !== b)) return !0;
          if (!a || !b) return !1;
        }
        return typeof a.equals === 'function' &&
          typeof b.equals === 'function' &&
          a.equals(b)
          ? !0
          : !1;
      }
      function Ia(a, b) {
        return b ? Ja(b, a, '', { '': a }) : Ka(a);
      }
      function Ja(a, b, c, d) {
        if (Array.isArray(b))
          return a.call(
            d,
            c,
            H(b).map(function (c, d) {
              return Ja(a, c, d, b);
            })
          );
        return La(b)
          ? a.call(
              d,
              c,
              G(b).map(function (c, d) {
                return Ja(a, c, d, b);
              })
            )
          : b;
      }
      function Ka(a) {
        if (Array.isArray(a)) return H(a).map(Ka).toList();
        return La(a) ? G(a).map(Ka).toMap() : a;
      }
      function La(a) {
        return a && (a.constructor === Object || a.constructor === undefined);
      }
      var Ma =
        typeof Math.imul === 'function' && Math.imul(4294967295, 2) === -2
          ? Math.imul
          : function (a, b) {
              a = a | 0;
              b = b | 0;
              var c = a & 65535,
                d = b & 65535;
              return (
                (c * d + ((((a >>> 16) * d + c * (b >>> 16)) << 16) >>> 0)) | 0
              );
            };
      function Na(a) {
        return ((a >>> 1) & 1073741824) | (a & 3221225471);
      }
      function K(a) {
        if (a === !1 || a === null || a === undefined) return 0;
        if (typeof a.valueOf === 'function') {
          a = a.valueOf();
          if (a === !1 || a === null || a === undefined) return 0;
        }
        if (a === !0) return 1;
        var b = typeof a;
        if (b === 'number') {
          var c = a | 0;
          c !== a && (c ^= a * 4294967295);
          while (a > 4294967295) (a /= 4294967295), (c ^= a);
          return Na(c);
        }
        if (b === 'string') return a.length > Ya ? Oa(a) : Pa(a);
        return typeof a.hashCode === 'function' ? a.hashCode() : Qa(a);
      }
      function Oa(b) {
        var a = ab[b];
        a === undefined &&
          ((a = Pa(b)), $a === Za && (($a = 0), (ab = {})), $a++, (ab[b] = a));
        return a;
      }
      function Pa(b) {
        var a = 0;
        for (var c = 0; c < b.length; c++) a = (31 * a + b.charCodeAt(c)) | 0;
        return Na(a);
      }
      function Qa(b) {
        var a;
        if (Ua) {
          a = Va.get(b);
          if (a !== undefined) return a;
        }
        a = b[Xa];
        if (a !== undefined) return a;
        if (!Sa) {
          a = b.propertyIsEnumerable && b.propertyIsEnumerable[Xa];
          if (a !== undefined) return a;
          a = Ta(b);
          if (a !== undefined) return a;
        }
        a = ++Wa;
        Wa & 1073741824 && (Wa = 0);
        if (Ua) Va.set(b, a);
        else if (Ra !== undefined && Ra(b) === !1)
          throw new Error('Non-extensible objects are not allowed as keys.');
        else if (Sa)
          Object.defineProperty(b, Xa, {
            enumerable: !1,
            configurable: !1,
            writable: !1,
            value: a,
          });
        else if (
          b.propertyIsEnumerable !== undefined &&
          b.propertyIsEnumerable ===
            b.constructor.prototype.propertyIsEnumerable
        )
          (b.propertyIsEnumerable = function () {
            return this.constructor.prototype.propertyIsEnumerable.apply(
              this,
              arguments
            );
          }),
            (b.propertyIsEnumerable[Xa] = a);
        else if (b.nodeType !== undefined) b[Xa] = a;
        else
          throw new Error('Unable to set a non-enumerable property on object.');
        return a;
      }
      var Ra = Object.isExtensible,
        Sa = (function () {
          try {
            Object.defineProperty({}, '@', {});
            return !0;
          } catch (a) {
            return !1;
          }
        })();
      function Ta(a) {
        if (a && a.nodeType > 0)
          switch (a.nodeType) {
            case 1:
              return a.uniqueID;
            case 9:
              return a.documentElement && a.documentElement.uniqueID;
          }
      }
      var Ua = typeof WeakMap === 'function',
        Va;
      Ua && (Va = new WeakMap());
      var Wa = 0,
        Xa = '__immutablehash__';
      typeof Symbol === 'function' && (Xa = Symbol(Xa));
      var Ya = 16,
        Za = 255,
        $a = 0,
        ab = {};
      function bb(a, b) {
        if (!a) throw new Error(b);
      }
      function L(a) {
        bb(a !== Infinity, 'Cannot perform this action with an infinite size.');
      }
      b(M, G);
      function M(a, b) {
        (this._iter = a), (this._useKeys = b), (this.size = a.size);
      }
      M.prototype.get = function (a, b) {
        return this._iter.get(a, b);
      };
      M.prototype.has = function (a) {
        return this._iter.has(a);
      };
      M.prototype.valueSeq = function () {
        return this._iter.valueSeq();
      };
      M.prototype.reverse = function () {
        var a = this,
          b = hb(this, !0);
        this._useKeys ||
          (b.valueSeq = function () {
            return a._iter.toSeq().reverse();
          });
        return b;
      };
      M.prototype.map = function (a, b) {
        var c = this,
          d = gb(this, a, b);
        this._useKeys ||
          (d.valueSeq = function () {
            return c._iter.toSeq().map(a, b);
          });
        return d;
      };
      M.prototype.__iterate = function (a, b) {
        var c = this,
          d;
        return this._iter.__iterate(
          this._useKeys
            ? function (b, d) {
                return a(b, d, c);
              }
            : ((d = b ? xb(this) : 0),
              function (e) {
                return a(e, b ? --d : d++, c);
              }),
          b
        );
      };
      M.prototype.__iterator = function (a, b) {
        if (this._useKeys) return this._iter.__iterator(a, b);
        var c = this._iter.__iterator(A, b),
          d = b ? xb(this) : 0;
        return new C(function () {
          var e = c.next();
          return e.done ? e : D(a, b ? --d : d++, e.value, e);
        });
      };
      M.prototype[ga] = !0;
      b(cb, H);
      function cb(a) {
        (this._iter = a), (this.size = a.size);
      }
      cb.prototype.includes = function (a) {
        return this._iter.includes(a);
      };
      cb.prototype.__iterate = function (a, b) {
        var c = this,
          d = 0;
        return this._iter.__iterate(function (b) {
          return a(b, d++, c);
        }, b);
      };
      cb.prototype.__iterator = function (a, b) {
        var c = this._iter.__iterator(A, b),
          d = 0;
        return new C(function () {
          var b = c.next();
          return b.done ? b : D(a, d++, b.value, b);
        });
      };
      b(db, I);
      function db(a) {
        (this._iter = a), (this.size = a.size);
      }
      db.prototype.has = function (a) {
        return this._iter.includes(a);
      };
      db.prototype.__iterate = function (a, b) {
        var c = this;
        return this._iter.__iterate(function (b) {
          return a(b, b, c);
        }, b);
      };
      db.prototype.__iterator = function (a, b) {
        var c = this._iter.__iterator(A, b);
        return new C(function () {
          var b = c.next();
          return b.done ? b : D(a, b.value, b.value, b);
        });
      };
      b(eb, G);
      function eb(a) {
        (this._iter = a), (this.size = a.size);
      }
      eb.prototype.entrySeq = function () {
        return this._iter.toSeq();
      };
      eb.prototype.__iterate = function (a, b) {
        var c = this;
        return this._iter.__iterate(function (b) {
          if (b) {
            wb(b);
            var d = x(b);
            return a(d ? b.get(1) : b[1], d ? b.get(0) : b[0], c);
          }
        }, b);
      };
      eb.prototype.__iterator = function (a, b) {
        var c = this._iter.__iterator(A, b);
        return new C(function () {
          while (!0) {
            var b = c.next();
            if (b.done) return b;
            var d = b.value;
            if (d) {
              wb(d);
              var e = x(d);
              return D(a, e ? d.get(0) : d[0], e ? d.get(1) : d[1], b);
            }
          }
        });
      };
      cb.prototype.cacheResult =
        M.prototype.cacheResult =
        db.prototype.cacheResult =
        eb.prototype.cacheResult =
          Ab;
      function fb(a) {
        var b = zb(a);
        b._iter = a;
        b.size = a.size;
        b.flip = function () {
          return a;
        };
        b.reverse = function () {
          var b = a.reverse.apply(this);
          b.flip = function () {
            return a.reverse();
          };
          return b;
        };
        b.has = function (b) {
          return a.includes(b);
        };
        b.includes = function (b) {
          return a.has(b);
        };
        b.cacheResult = Ab;
        b.__iterateUncached = function (b, c) {
          var d = this;
          return a.__iterate(function (a, c) {
            return b(c, a, d) !== !1;
          }, c);
        };
        b.__iteratorUncached = function (b, c) {
          if (b === B) {
            var d = a.__iterator(b, c);
            return new C(function () {
              var a = d.next();
              if (!a.done) {
                var b = a.value[0];
                a.value[0] = a.value[1];
                a.value[1] = b;
              }
              return a;
            });
          }
          return a.__iterator(b === A ? ha : A, c);
        };
        return b;
      }
      function gb(a, b, c) {
        var d = zb(a);
        d.size = a.size;
        d.has = function (b) {
          return a.has(b);
        };
        d.get = function (d, e) {
          var f = a.get(d, g);
          return f === g ? e : b.call(c, f, d, a);
        };
        d.__iterateUncached = function (d, e) {
          var f = this;
          return a.__iterate(function (a, e, g) {
            return d(b.call(c, a, e, g), e, f) !== !1;
          }, e);
        };
        d.__iteratorUncached = function (d, e) {
          var f = a.__iterator(B, e);
          return new C(function () {
            var e = f.next();
            if (e.done) return e;
            var g = e.value,
              h = g[0];
            return D(d, h, b.call(c, g[1], h, a), e);
          });
        };
        return d;
      }
      function hb(a, b) {
        var c = zb(a);
        c._iter = a;
        c.size = a.size;
        c.reverse = function () {
          return a;
        };
        a.flip &&
          (c.flip = function () {
            var b = fb(a);
            b.reverse = function () {
              return a.flip();
            };
            return b;
          });
        c.get = function (c, d) {
          return a.get(b ? c : -1 - c, d);
        };
        c.has = function (c) {
          return a.has(b ? c : -1 - c);
        };
        c.includes = function (b) {
          return a.includes(b);
        };
        c.cacheResult = Ab;
        c.__iterate = function (b, c) {
          var d = this;
          return a.__iterate(function (a, c) {
            return b(a, c, d);
          }, !c);
        };
        c.__iterator = function (b, c) {
          return a.__iterator(b, !c);
        };
        return c;
      }
      function ib(a, b, c, d) {
        var e = zb(a);
        d &&
          ((e.has = function (d) {
            var e = a.get(d, g);
            return e !== g && !!b.call(c, e, d, a);
          }),
          (e.get = function (d, e) {
            var f = a.get(d, g);
            return f !== g && b.call(c, f, d, a) ? f : e;
          }));
        e.__iterateUncached = function (e, f) {
          var g = this,
            h = 0;
          a.__iterate(function (a, f, i) {
            if (b.call(c, a, f, i)) {
              h++;
              return e(a, d ? f : h - 1, g);
            }
          }, f);
          return h;
        };
        e.__iteratorUncached = function (e, f) {
          var g = a.__iterator(B, f),
            h = 0;
          return new C(function () {
            while (!0) {
              var f = g.next();
              if (f.done) return f;
              var i = f.value,
                j = i[0];
              i = i[1];
              if (b.call(c, i, j, a)) return D(e, d ? j : h++, i, f);
            }
          });
        };
        return e;
      }
      function jb(a, b, c) {
        var d = O().asMutable();
        a.__iterate(function (e, f) {
          d.update(b.call(c, e, f, a), 0, function (a) {
            return a + 1;
          });
        });
        return d.asImmutable();
      }
      function kb(a, b, c) {
        var d = y(a),
          e = (ca(a) ? S() : O()).asMutable();
        a.__iterate(function (f, g) {
          e.update(b.call(c, f, g, a), function (a) {
            return (a = a || []), a.push(d ? [g, f] : f), a;
          });
        });
        var f = yb(a);
        return e.map(function (b) {
          return N(a, f(b));
        });
      }
      function lb(a, b, c, d) {
        var e = a.size;
        if (q(b, c, e)) return a;
        var f = r(b, e);
        e = s(c, e);
        if (f !== f || e !== e) return lb(a.toSeq().cacheResult(), b, c, d);
        b = e - f;
        var g;
        b === b && (g = b < 0 ? 0 : b);
        c = zb(a);
        c.size = g;
        !d &&
          va(a) &&
          g >= 0 &&
          (c.get = function (b, c) {
            b = o(this, b);
            return b >= 0 && b < g ? a.get(b + f, c) : c;
          });
        c.__iterateUncached = function (b, c) {
          var e = this;
          if (g === 0) return 0;
          if (c) return this.cacheResult().__iterate(b, c);
          var h = 0,
            i = !0,
            j = 0;
          a.__iterate(function (a, c) {
            if (!(i && (i = h++ < f))) {
              j++;
              return b(a, d ? c : j - 1, e) !== !1 && j !== g;
            }
          });
          return j;
        };
        c.__iteratorUncached = function (b, c) {
          if (g !== 0 && c) return this.cacheResult().__iterator(b, c);
          var e = g !== 0 && a.__iterator(b, c),
            h = 0,
            i = 0;
          return new C(function () {
            while (h++ < f) e.next();
            if (++i > g) return E();
            var a = e.next();
            if (d || b === A) return a;
            else if (b === ha) return D(b, i - 1, undefined, a);
            else return D(b, i - 1, a.value[1], a);
          });
        };
        return c;
      }
      function mb(a, b, c) {
        var d = zb(a);
        d.__iterateUncached = function (d, e) {
          var f = this;
          if (e) return this.cacheResult().__iterate(d, e);
          var g = 0;
          a.__iterate(function (a, e, h) {
            return b.call(c, a, e, h) && ++g && d(a, e, f);
          });
          return g;
        };
        d.__iteratorUncached = function (d, e) {
          var f = this;
          if (e) return this.cacheResult().__iterator(d, e);
          var g = a.__iterator(B, e),
            h = !0;
          return new C(function () {
            if (!h) return E();
            var a = g.next();
            if (a.done) return a;
            var e = a.value,
              i = e[0];
            e = e[1];
            if (!b.call(c, e, i, f)) {
              h = !1;
              return E();
            }
            return d === B ? a : D(d, i, e, a);
          });
        };
        return d;
      }
      function nb(a, b, c, d) {
        var e = zb(a);
        e.__iterateUncached = function (e, f) {
          var g = this;
          if (f) return this.cacheResult().__iterate(e, f);
          var h = !0,
            i = 0;
          a.__iterate(function (a, f, j) {
            if (!(h && (h = b.call(c, a, f, j)))) {
              i++;
              return e(a, d ? f : i - 1, g);
            }
          });
          return i;
        };
        e.__iteratorUncached = function (e, f) {
          var g = this;
          if (f) return this.cacheResult().__iterator(e, f);
          var h = a.__iterator(B, f),
            i = !0,
            j = 0;
          return new C(function () {
            var a, f;
            do {
              a = h.next();
              if (a.done)
                if (d || e === A) return a;
                else if (e === ha) return D(e, j++, undefined, a);
                else return D(e, j++, a.value[1], a);
              var k = a.value;
              f = k[0];
              k = k[1];
              i && (i = b.call(c, k, f, g));
            } while (i);
            return e === B ? a : D(e, f, k, a);
          });
        };
        return e;
      }
      function ob(a, b) {
        var c = y(a);
        b = [a]
          .concat(b)
          .map(function (a) {
            !x(a)
              ? (a = c ? ya(a) : za(Array.isArray(a) ? a : [a]))
              : c && (a = u(a));
            return a;
          })
          .filter(function (a) {
            return a.size !== 0;
          });
        if (b.length === 0) return a;
        if (b.length === 1) {
          var d = b[0];
          if (d === a || (c && y(d)) || (z(a) && z(d))) return d;
        }
        d = new ra(b);
        c ? (d = d.toKeyedSeq()) : z(a) || (d = d.toSetSeq());
        d = d.flatten(!0);
        d.size = b.reduce(function (a, b) {
          if (a !== undefined) {
            b = b.size;
            if (b !== undefined) return a + b;
          }
        }, 0);
        return d;
      }
      function pb(a, b, c) {
        var d = zb(a);
        d.__iterateUncached = function (d, e) {
          var f = 0,
            g = !1;
          function h(a, i) {
            var j = this;
            a.__iterate(function (a, e) {
              (!b || i < b) && x(a)
                ? h(a, i + 1)
                : d(a, c ? e : f++, j) === !1 && (g = !0);
              return !g;
            }, e);
          }
          h(a, 0);
          return f;
        };
        d.__iteratorUncached = function (d, e) {
          var f = a.__iterator(d, e),
            g = [],
            h = 0;
          return new C(function () {
            while (f) {
              var a = f.next();
              if (a.done !== !1) {
                f = g.pop();
                continue;
              }
              var i = a.value;
              d === B && (i = i[1]);
              if ((!b || g.length < b) && x(i))
                g.push(f), (f = i.__iterator(d, e));
              else return c ? a : D(d, h++, i, a);
            }
            return E();
          });
        };
        return d;
      }
      function qb(a, b, c) {
        var d = yb(a);
        return a
          .toSeq()
          .map(function (e, f) {
            return d(b.call(c, e, f, a));
          })
          .flatten(!0);
      }
      function rb(a, b) {
        var c = zb(a);
        c.size = a.size && a.size * 2 - 1;
        c.__iterateUncached = function (c, d) {
          var e = this,
            f = 0;
          a.__iterate(function (a, d) {
            return (!f || c(b, f++, e) !== !1) && c(a, f++, e) !== !1;
          }, d);
          return f;
        };
        c.__iteratorUncached = function (c, d) {
          var e = a.__iterator(A, d),
            f = 0,
            g;
          return new C(function () {
            if (!g || f % 2) {
              g = e.next();
              if (g.done) return g;
            }
            return f % 2 ? D(c, f++, b) : D(c, f++, g.value, g);
          });
        };
        return c;
      }
      function sb(a, b, c) {
        b || (b = Bb);
        var d = y(a),
          e = 0,
          f = a
            .toSeq()
            .map(function (b, d) {
              return [d, b, e++, c ? c(b, d, a) : b];
            })
            .toArray();
        f.sort(function (a, c) {
          return b(a[3], c[3]) || a[2] - c[2];
        }).forEach(
          d
            ? function (a, b) {
                f[b].length = 2;
              }
            : function (a, b) {
                f[b] = a[1];
              }
        );
        return d ? G(f) : z(a) ? H(f) : I(f);
      }
      function tb(a, b, c) {
        b || (b = Bb);
        if (c) {
          var d = a
            .toSeq()
            .map(function (b, d) {
              return [b, c(b, d, a)];
            })
            .reduce(function (a, c) {
              return ub(b, a[1], c[1]) ? c : a;
            });
          return d && d[0];
        } else
          return a.reduce(function (a, c) {
            return ub(b, a, c) ? c : a;
          });
      }
      function ub(a, b, c) {
        a = a(c, b);
        return (
          (a === 0 && c !== b && (c === undefined || c === null || c !== c)) ||
          a > 0
        );
      }
      function vb(a, b, c) {
        a = zb(a);
        a.size = new ra(c)
          .map(function (a) {
            return a.size;
          })
          .min();
        a.__iterate = function (a, b) {
          b = this.__iterator(A, b);
          var c,
            d = 0;
          while (!(c = b.next()).done) if (a(c.value, d++, this) === !1) break;
          return d;
        };
        a.__iteratorUncached = function (a, d) {
          var e = c.map(function (a) {
              return (a = t(a)), na(d ? a.reverse() : a);
            }),
            f = 0,
            g = !1;
          return new C(function () {
            var c;
            g ||
              ((c = e.map(function (a) {
                return a.next();
              })),
              (g = c.some(function (a) {
                return a.done;
              })));
            return g
              ? E()
              : D(
                  a,
                  f++,
                  b.apply(
                    null,
                    c.map(function (a) {
                      return a.value;
                    })
                  )
                );
          });
        };
        return a;
      }
      function N(a, b) {
        return va(a) ? b : a.constructor(b);
      }
      function wb(a) {
        if (a !== Object(a)) throw new TypeError('Expected [K, V] tuple: ' + a);
      }
      function xb(a) {
        L(a.size);
        return n(a);
      }
      function yb(a) {
        return y(a) ? u : z(a) ? v : w;
      }
      function zb(a) {
        return Object.create((y(a) ? G : z(a) ? H : I).prototype);
      }
      function Ab() {
        if (this._iter.cacheResult) {
          this._iter.cacheResult();
          this.size = this._iter.size;
          return this;
        } else return F.prototype.cacheResult.call(this);
      }
      function Bb(a, b) {
        return a > b ? 1 : a < b ? -1 : 0;
      }
      function Cb(a) {
        var b = na(a);
        if (!b) {
          if (!pa(a))
            throw new TypeError('Expected iterable or array-like: ' + a);
          b = na(t(a));
        }
        return b;
      }
      b(O, Fa);
      function O(a) {
        return a === null || a === undefined
          ? Pb()
          : Db(a)
          ? a
          : Pb().withMutations(function (b) {
              var c = u(a);
              L(c.size);
              c.forEach(function (a, c) {
                return b.set(c, a);
              });
            });
      }
      O.prototype.toString = function () {
        return this.__toString('Map {', '}');
      };
      O.prototype.get = function (a, b) {
        return this._root ? this._root.get(0, undefined, a, b) : b;
      };
      O.prototype.set = function (a, b) {
        return Qb(this, a, b);
      };
      O.prototype.setIn = function (a, b) {
        return this.updateIn(a, g, function () {
          return b;
        });
      };
      O.prototype.remove = function (a) {
        return Qb(this, a, g);
      };
      O.prototype.deleteIn = function (a) {
        return this.updateIn(a, function () {
          return g;
        });
      };
      O.prototype.update = function (a, b, c) {
        return arguments.length === 1 ? a(this) : this.updateIn([a], b, c);
      };
      O.prototype.updateIn = function (a, b, c) {
        c || ((c = b), (b = undefined));
        a = $b(this, Cb(a), b, c);
        return a === g ? undefined : a;
      };
      O.prototype.clear = function () {
        if (this.size === 0) return this;
        if (this.__ownerID) {
          this.size = 0;
          this._root = null;
          this.__hash = undefined;
          this.__altered = !0;
          return this;
        }
        return Pb();
      };
      O.prototype.merge = function () {
        return Xb(this, undefined, arguments);
      };
      O.prototype.mergeWith = function (b) {
        var c = a.call(arguments, 1);
        return Xb(this, b, c);
      };
      O.prototype.mergeIn = function (b) {
        var c = a.call(arguments, 1);
        return this.updateIn(b, Pb(), function (a) {
          return typeof a.merge === 'function'
            ? a.merge.apply(a, c)
            : c[c.length - 1];
        });
      };
      O.prototype.mergeDeep = function () {
        return Xb(this, Yb(undefined), arguments);
      };
      O.prototype.mergeDeepWith = function (b) {
        var c = a.call(arguments, 1);
        return Xb(this, Yb(b), c);
      };
      O.prototype.mergeDeepIn = function (b) {
        var c = a.call(arguments, 1);
        return this.updateIn(b, Pb(), function (a) {
          return typeof a.mergeDeep === 'function'
            ? a.mergeDeep.apply(a, c)
            : c[c.length - 1];
        });
      };
      O.prototype.sort = function (a) {
        return S(sb(this, a));
      };
      O.prototype.sortBy = function (a, b) {
        return S(sb(this, b, a));
      };
      O.prototype.withMutations = function (a) {
        var b = this.asMutable();
        a(b);
        return b.wasAltered() ? b.__ensureOwner(this.__ownerID) : this;
      };
      O.prototype.asMutable = function () {
        return this.__ownerID ? this : this.__ensureOwner(new l());
      };
      O.prototype.asImmutable = function () {
        return this.__ensureOwner();
      };
      O.prototype.wasAltered = function () {
        return this.__altered;
      };
      O.prototype.__iterator = function (a, b) {
        return new Kb(this, a, b);
      };
      O.prototype.__iterate = function (a, b) {
        var c = this,
          d = 0;
        this._root &&
          this._root.iterate(function (b) {
            d++;
            return a(b[1], b[0], c);
          }, b);
        return d;
      };
      O.prototype.__ensureOwner = function (a) {
        if (a === this.__ownerID) return this;
        if (!a) {
          this.__ownerID = a;
          this.__altered = !1;
          return this;
        }
        return Nb(this.size, this._root, a, this.__hash);
      };
      function Db(a) {
        return !!(a && a[Eb]);
      }
      O.isMap = Db;
      var Eb = '@@__IMMUTABLE_MAP__@@',
        P = O.prototype;
      P[Eb] = !0;
      P[c] = P.remove;
      P.removeIn = P.deleteIn;
      function Fb(a, b) {
        (this.ownerID = a), (this.entries = b);
      }
      Fb.prototype.get = function (a, b, c, d) {
        a = this.entries;
        for (var b = 0, e = a.length; b < e; b++)
          if (J(c, a[b][0])) return a[b][1];
        return d;
      };
      Fb.prototype.update = function (a, b, c, d, e, f, h) {
        b = e === g;
        c = this.entries;
        var i = 0;
        for (var j = c.length; i < j; i++) if (J(d, c[i][0])) break;
        var l = i < j;
        if (l ? c[i][1] === e : b) return this;
        k(h);
        (b || !l) && k(f);
        if (b && c.length === 1) return;
        if (!l && !b && c.length >= ec) return Ub(a, c, d, e);
        h = a && a === this.ownerID;
        f = h ? c : m(c);
        l
          ? b
            ? i === j - 1
              ? f.pop()
              : (f[i] = f.pop())
            : (f[i] = [d, e])
          : f.push([d, e]);
        if (h) {
          this.entries = f;
          return this;
        }
        return new Fb(a, f);
      };
      function Gb(a, b, c) {
        (this.ownerID = a), (this.bitmap = b), (this.nodes = c);
      }
      Gb.prototype.get = function (a, b, c, e) {
        b === undefined && (b = K(c));
        var g = 1 << ((a === 0 ? b : b >>> a) & f),
          h = this.bitmap;
        return (h & g) === 0
          ? e
          : this.nodes[ac(h & (g - 1))].get(a + d, b, c, e);
      };
      Gb.prototype.update = function (a, b, c, e, h, i, j) {
        c === undefined && (c = K(e));
        var k = (b === 0 ? c : c >>> b) & f,
          l = 1 << k,
          m = this.bitmap,
          n = (m & l) !== 0;
        if (!n && h === g) return this;
        var o = ac(m & (l - 1)),
          p = this.nodes,
          q = n ? p[o] : undefined;
        b = Rb(q, a, b + d, c, e, h, i, j);
        if (b === q) return this;
        if (!n && b && p.length >= fc) return Wb(a, p, m, k, b);
        if (n && !b && p.length === 2 && Sb(p[o ^ 1])) return p[o ^ 1];
        if (n && b && p.length === 1 && Sb(b)) return b;
        c = a && a === this.ownerID;
        e = n ? (b ? m : m ^ l) : m | l;
        h = n ? (b ? bc(p, o, b, c) : dc(p, o, c)) : cc(p, o, b, c);
        if (c) {
          this.bitmap = e;
          this.nodes = h;
          return this;
        }
        return new Gb(a, e, h);
      };
      function Hb(a, b, c) {
        (this.ownerID = a), (this.count = b), (this.nodes = c);
      }
      Hb.prototype.get = function (a, b, c, e) {
        b === undefined && (b = K(c));
        var g = (a === 0 ? b : b >>> a) & f;
        g = this.nodes[g];
        return g ? g.get(a + d, b, c, e) : e;
      };
      Hb.prototype.update = function (a, b, c, e, h, i, j) {
        c === undefined && (c = K(e));
        var k = (b === 0 ? c : c >>> b) & f,
          l = h === g,
          m = this.nodes,
          n = m[k];
        if (l && !n) return this;
        l = Rb(n, a, b + d, c, e, h, i, j);
        if (l === n) return this;
        b = this.count;
        if (!n) b++;
        else if (!l) {
          b--;
          if (b < gc) return Vb(a, m, b, k);
        }
        c = a && a === this.ownerID;
        e = bc(m, k, l, c);
        if (c) {
          this.count = b;
          this.nodes = e;
          return this;
        }
        return new Hb(a, b, e);
      };
      function Ib(a, b, c) {
        (this.ownerID = a), (this.keyHash = b), (this.entries = c);
      }
      Ib.prototype.get = function (a, b, c, d) {
        a = this.entries;
        for (var b = 0, e = a.length; b < e; b++)
          if (J(c, a[b][0])) return a[b][1];
        return d;
      };
      Ib.prototype.update = function (a, b, c, d, e, f, h) {
        c === undefined && (c = K(d));
        var i = e === g;
        if (c !== this.keyHash) {
          if (i) return this;
          k(h);
          k(f);
          return Tb(this, a, b, c, [d, e]);
        }
        b = this.entries;
        c = 0;
        for (var j = b.length; c < j; c++) if (J(d, b[c][0])) break;
        var l = c < j;
        if (l ? b[c][1] === e : i) return this;
        k(h);
        (i || !l) && k(f);
        if (i && j === 2) return new Jb(a, this.keyHash, b[c ^ 1]);
        h = a && a === this.ownerID;
        f = h ? b : m(b);
        l
          ? i
            ? c === j - 1
              ? f.pop()
              : (f[c] = f.pop())
            : (f[c] = [d, e])
          : f.push([d, e]);
        if (h) {
          this.entries = f;
          return this;
        }
        return new Ib(a, this.keyHash, f);
      };
      function Jb(a, b, c) {
        (this.ownerID = a), (this.keyHash = b), (this.entry = c);
      }
      Jb.prototype.get = function (a, b, c, d) {
        return J(c, this.entry[0]) ? this.entry[1] : d;
      };
      Jb.prototype.update = function (a, b, c, d, e, f, h) {
        c = e === g;
        var i = J(d, this.entry[0]);
        if (i ? e === this.entry[1] : c) return this;
        k(h);
        if (c) {
          k(f);
          return;
        }
        if (i) {
          if (a && a === this.ownerID) {
            this.entry[1] = e;
            return this;
          }
          return new Jb(a, this.keyHash, [d, e]);
        }
        k(f);
        return Tb(this, a, b, K(d), [d, e]);
      };
      Fb.prototype.iterate = Ib.prototype.iterate = function (a, b) {
        var c = this.entries;
        for (var d = 0, e = c.length - 1; d <= e; d++)
          if (a(c[b ? e - d : d]) === !1) return !1;
      };
      Gb.prototype.iterate = Hb.prototype.iterate = function (a, b) {
        var c = this.nodes;
        for (var d = 0, e = c.length - 1; d <= e; d++) {
          var f = c[b ? e - d : d];
          if (f && f.iterate(a, b) === !1) return !1;
        }
      };
      Jb.prototype.iterate = function (a, b) {
        return a(this.entry);
      };
      b(Kb, C);
      function Kb(a, b, c) {
        (this._type = b),
          (this._reverse = c),
          (this._stack = a._root && Mb(a._root));
      }
      Kb.prototype.next = function () {
        var a = this._type,
          b = this._stack;
        while (b) {
          var c = b.node,
            d = b.index++,
            e;
          if (c.entry) {
            if (d === 0) return Lb(a, c.entry);
          } else if (c.entries) {
            e = c.entries.length - 1;
            if (d <= e) return Lb(a, c.entries[this._reverse ? e - d : d]);
          } else {
            e = c.nodes.length - 1;
            if (d <= e) {
              c = c.nodes[this._reverse ? e - d : d];
              if (c) {
                if (c.entry) return Lb(a, c.entry);
                b = this._stack = Mb(c, b);
              }
              continue;
            }
          }
          b = this._stack = this._stack.__prev;
        }
        return E();
      };
      function Lb(a, b) {
        return D(a, b[0], b[1]);
      }
      function Mb(a, b) {
        return { node: a, index: 0, __prev: b };
      }
      function Nb(b, c, d, a) {
        var e = Object.create(P);
        e.size = b;
        e._root = c;
        e.__ownerID = d;
        e.__hash = a;
        e.__altered = !1;
        return e;
      }
      var Ob;
      function Pb() {
        return Ob || (Ob = Nb(0));
      }
      function Qb(a, b, c) {
        var d, e;
        if (!a._root) {
          if (c === g) return a;
          e = 1;
          d = new Fb(a.__ownerID, [[b, c]]);
        } else {
          var f = j(h),
            k = j(i);
          d = Rb(a._root, a.__ownerID, 0, undefined, b, c, f, k);
          if (!k.value) return a;
          e = a.size + (f.value ? (c === g ? -1 : 1) : 0);
        }
        if (a.__ownerID) {
          a.size = e;
          a._root = d;
          a.__hash = undefined;
          a.__altered = !0;
          return a;
        }
        return d ? Nb(e, d) : Pb();
      }
      function Rb(a, b, c, d, e, f, h, i) {
        if (!a) {
          if (f === g) return a;
          k(i);
          k(h);
          return new Jb(b, d, [e, f]);
        }
        return a.update(b, c, d, e, f, h, i);
      }
      function Sb(a) {
        return a.constructor === Jb || a.constructor === Ib;
      }
      function Tb(a, b, c, e, g) {
        if (a.keyHash === e) return new Ib(b, e, [a.entry, g]);
        var h = (c === 0 ? a.keyHash : a.keyHash >>> c) & f,
          i = (c === 0 ? e : e >>> c) & f;
        e =
          h === i
            ? [Tb(a, b, c + d, e, g)]
            : ((c = new Jb(b, e, g)), h < i ? [a, c] : [c, a]);
        return new Gb(b, (1 << h) | (1 << i), e);
      }
      function Ub(a, b, c, d) {
        a || (a = new l());
        c = new Jb(a, K(c), [c, d]);
        for (var d = 0; d < b.length; d++) {
          var e = b[d];
          c = c.update(a, 0, undefined, e[0], e[1]);
        }
        return c;
      }
      function Vb(a, b, c, d) {
        var e = 0,
          f = 0;
        c = new Array(c);
        for (var g = 0, h = 1, i = b.length; g < i; g++, h <<= 1) {
          var j = b[g];
          j !== undefined && g !== d && ((e |= h), (c[f++] = j));
        }
        return new Gb(a, e, c);
      }
      function Wb(a, b, c, d, f) {
        var g = 0,
          h = new Array(e);
        for (var i = 0; c !== 0; i++, c >>>= 1)
          h[i] = c & 1 ? b[g++] : undefined;
        h[d] = f;
        return new Hb(a, g + 1, h);
      }
      function Xb(a, b, c) {
        var d = [];
        for (var e = 0; e < c.length; e++) {
          var f = c[e],
            g = u(f);
          x(f) ||
            (g = g.map(function (a) {
              return Ia(a);
            }));
          d.push(g);
        }
        return Zb(a, b, d);
      }
      function Yb(a) {
        return function (b, c, d) {
          return b && b.mergeDeepWith && x(c)
            ? b.mergeDeepWith(a, c)
            : a
            ? a(b, c, d)
            : c;
        };
      }
      function Zb(a, b, c) {
        c = c.filter(function (a) {
          return a.size !== 0;
        });
        if (c.length === 0) return a;
        return a.size === 0 && !a.__ownerID && c.length === 1
          ? a.constructor(c[0])
          : a.withMutations(function (a) {
              var d = b
                ? function (c, d) {
                    a.update(d, g, function (a) {
                      return a === g ? c : b(a, c, d);
                    });
                  }
                : function (b, c) {
                    a.set(c, b);
                  };
              for (var e = 0; e < c.length; e++) c[e].forEach(d);
            });
      }
      function $b(a, b, c, d) {
        var e = a === g,
          f = b.next();
        if (f.done) {
          var h = e ? c : a,
            i = d(h);
          return i === h ? a : i;
        }
        bb(e || (a && a.set), 'invalid keyPath');
        h = f.value;
        i = e ? g : a.get(h, g);
        f = $b(i, b, c, d);
        return f === i ? a : f === g ? a.remove(h) : (e ? Pb() : a).set(h, f);
      }
      function ac(a) {
        a = a - ((a >> 1) & 1431655765);
        a = (a & 858993459) + ((a >> 2) & 858993459);
        a = (a + (a >> 4)) & 252645135;
        a = a + (a >> 8);
        a = a + (a >> 16);
        return a & 127;
      }
      function bc(a, b, c, d) {
        d = d ? a : m(a);
        d[b] = c;
        return d;
      }
      function cc(a, b, c, d) {
        var e = a.length + 1;
        if (d && b + 1 === e) {
          a[b] = c;
          return a;
        }
        d = new Array(e);
        var f = 0;
        for (var g = 0; g < e; g++)
          g === b ? ((d[g] = c), (f = -1)) : (d[g] = a[g + f]);
        return d;
      }
      function dc(a, b, c) {
        var d = a.length - 1;
        if (c && b === d) {
          a.pop();
          return a;
        }
        c = new Array(d);
        var e = 0;
        for (var f = 0; f < d; f++) f === b && (e = 1), (c[f] = a[f + e]);
        return c;
      }
      var ec = e / 4,
        fc = e / 2,
        gc = e / 4;
      b(Q, Ga);
      function Q(a) {
        var b = oc();
        if (a === null || a === undefined) return b;
        if (hc(a)) return a;
        var c = v(a),
          f = c.size;
        if (f === 0) return b;
        L(f);
        return f > 0 && f < e
          ? mc(0, f, d, null, new jc(c.toArray()))
          : b.withMutations(function (a) {
              a.setSize(f),
                c.forEach(function (b, c) {
                  return a.set(c, b);
                });
            });
      }
      Q.of = function () {
        return this(arguments);
      };
      Q.prototype.toString = function () {
        return this.__toString('List [', ']');
      };
      Q.prototype.get = function (a, b) {
        a = o(this, a);
        if (a < 0 || a >= this.size) return b;
        a += this._origin;
        b = sc(this, a);
        return b && b.array[a & f];
      };
      Q.prototype.set = function (a, b) {
        return pc(this, a, b);
      };
      Q.prototype.remove = function (a) {
        return this.has(a)
          ? a === 0
            ? this.shift()
            : a === this.size - 1
            ? this.pop()
            : this.splice(a, 1)
          : this;
      };
      Q.prototype.clear = function () {
        if (this.size === 0) return this;
        if (this.__ownerID) {
          this.size = this._origin = this._capacity = 0;
          this._level = d;
          this._root = this._tail = null;
          this.__hash = undefined;
          this.__altered = !0;
          return this;
        }
        return oc();
      };
      Q.prototype.push = function () {
        var a = arguments,
          b = this.size;
        return this.withMutations(function (c) {
          tc(c, 0, b + a.length);
          for (var d = 0; d < a.length; d++) c.set(b + d, a[d]);
        });
      };
      Q.prototype.pop = function () {
        return tc(this, 0, -1);
      };
      Q.prototype.unshift = function () {
        var a = arguments;
        return this.withMutations(function (b) {
          tc(b, -a.length);
          for (var c = 0; c < a.length; c++) b.set(c, a[c]);
        });
      };
      Q.prototype.shift = function () {
        return tc(this, 1);
      };
      Q.prototype.merge = function () {
        return uc(this, undefined, arguments);
      };
      Q.prototype.mergeWith = function (b) {
        var c = a.call(arguments, 1);
        return uc(this, b, c);
      };
      Q.prototype.mergeDeep = function () {
        return uc(this, Yb(undefined), arguments);
      };
      Q.prototype.mergeDeepWith = function (b) {
        var c = a.call(arguments, 1);
        return uc(this, Yb(b), c);
      };
      Q.prototype.setSize = function (a) {
        return tc(this, 0, a);
      };
      Q.prototype.slice = function (a, b) {
        var c = this.size;
        return q(a, b, c) ? this : tc(this, r(a, c), s(b, c));
      };
      Q.prototype.__iterator = function (a, b) {
        var c = 0,
          d = lc(this, b);
        return new C(function () {
          var b = d();
          return b === kc ? E() : D(a, c++, b);
        });
      };
      Q.prototype.__iterate = function (a, b) {
        var c = 0;
        b = lc(this, b);
        var d;
        while ((d = b()) !== kc) if (a(d, c++, this) === !1) break;
        return c;
      };
      Q.prototype.__ensureOwner = function (a) {
        if (a === this.__ownerID) return this;
        if (!a) {
          this.__ownerID = a;
          return this;
        }
        return mc(
          this._origin,
          this._capacity,
          this._level,
          this._root,
          this._tail,
          a,
          this.__hash
        );
      };
      function hc(a) {
        return !!(a && a[ic]);
      }
      Q.isList = hc;
      var ic = '@@__IMMUTABLE_LIST__@@',
        R = Q.prototype;
      R[ic] = !0;
      R[c] = R.remove;
      R.setIn = P.setIn;
      R.deleteIn = R.removeIn = P.removeIn;
      R.update = P.update;
      R.updateIn = P.updateIn;
      R.mergeIn = P.mergeIn;
      R.mergeDeepIn = P.mergeDeepIn;
      R.withMutations = P.withMutations;
      R.asMutable = P.asMutable;
      R.asImmutable = P.asImmutable;
      R.wasAltered = P.wasAltered;
      function jc(a, b) {
        (this.array = a), (this.ownerID = b);
      }
      jc.prototype.removeBefore = function (a, b, c) {
        if (c === b ? 1 << b : this.array.length === 0) return this;
        var e = (c >>> b) & f;
        if (e >= this.array.length) return new jc([], a);
        var g = e === 0,
          h;
        if (b > 0) {
          var i = this.array[e];
          h = i && i.removeBefore(a, b - d, c);
          if (h === i && g) return this;
        }
        if (g && !h) return this;
        b = rc(this, a);
        if (!g) for (var c = 0; c < e; c++) b.array[c] = undefined;
        h && (b.array[e] = h);
        return b;
      };
      jc.prototype.removeAfter = function (a, b, c) {
        if (c === b ? 1 << b : this.array.length === 0) return this;
        var e = ((c - 1) >>> b) & f;
        if (e >= this.array.length) return this;
        var g = e === this.array.length - 1,
          h;
        if (b > 0) {
          var i = this.array[e];
          h = i && i.removeAfter(a, b - d, c);
          if (h === i && g) return this;
        }
        if (g && !h) return this;
        b = rc(this, a);
        g || b.array.pop();
        h && (b.array[e] = h);
        return b;
      };
      var kc = {};
      function lc(a, b) {
        var c = a._origin,
          f = a._capacity,
          g = vc(f),
          h = a._tail;
        return i(a._root, a._level, 0);
        function i(a, b, c) {
          return b === 0 ? j(a, c) : k(a, b, c);
        }
        function j(a, d) {
          var i = d === g ? h && h.array : a && a.array,
            j = d > c ? 0 : c - d,
            k = f - d;
          k > e && (k = e);
          return function () {
            if (j === k) return kc;
            var a = b ? --k : j++;
            return i && i[a];
          };
        }
        function k(a, g, h) {
          var j,
            k = a && a.array,
            l = h > c ? 0 : (c - h) >> g,
            m = ((f - h) >> g) + 1;
          m > e && (m = e);
          return function () {
            do {
              if (j) {
                var a = j();
                if (a !== kc) return a;
                j = null;
              }
              if (l === m) return kc;
              a = b ? --m : l++;
              j = i(k && k[a], g - d, h + (a << g));
            } while (!0);
          };
        }
      }
      function mc(b, c, d, e, f, g, a) {
        var h = Object.create(R);
        h.size = c - b;
        h._origin = b;
        h._capacity = c;
        h._level = d;
        h._root = e;
        h._tail = f;
        h.__ownerID = g;
        h.__hash = a;
        h.__altered = !1;
        return h;
      }
      var nc;
      function oc() {
        return nc || (nc = mc(0, 0, d));
      }
      function pc(a, b, c) {
        b = o(a, b);
        if (b >= a.size || b < 0)
          return a.withMutations(function (a) {
            b < 0 ? tc(a, b).set(0, c) : tc(a, 0, b + 1).set(b, c);
          });
        b += a._origin;
        var d = a._tail,
          e = a._root,
          f = j(i);
        b >= vc(a._capacity)
          ? (d = qc(d, a.__ownerID, 0, b, c, f))
          : (e = qc(e, a.__ownerID, a._level, b, c, f));
        if (!f.value) return a;
        if (a.__ownerID) {
          a._root = e;
          a._tail = d;
          a.__hash = undefined;
          a.__altered = !0;
          return a;
        }
        return mc(a._origin, a._capacity, a._level, e, d);
      }
      function qc(a, b, c, e, g, h) {
        var i = (e >>> c) & f,
          j = a && i < a.array.length;
        if (!j && g === undefined) return a;
        if (c > 0) {
          var l = a && a.array[i];
          c = qc(l, b, c - d, e, g, h);
          if (c === l) return a;
          e = rc(a, b);
          e.array[i] = c;
          return e;
        }
        if (j && a.array[i] === g) return a;
        k(h);
        e = rc(a, b);
        g === undefined && i === e.array.length - 1
          ? e.array.pop()
          : (e.array[i] = g);
        return e;
      }
      function rc(a, b) {
        return b && a && b === a.ownerID
          ? a
          : new jc(a ? a.array.slice() : [], b);
      }
      function sc(a, b) {
        if (b >= vc(a._capacity)) return a._tail;
        if (b < 1 << (a._level + d)) {
          var c = a._root;
          a = a._level;
          while (c && a > 0) (c = c.array[(b >>> a) & f]), (a -= d);
          return c;
        }
      }
      function tc(a, b, c) {
        var e = a.__ownerID || new l(),
          g = a._origin,
          h = a._capacity;
        b = g + b;
        c = c === undefined ? h : c < 0 ? h + c : g + c;
        if (b === g && c === h) return a;
        if (b >= c) return a.clear();
        var i = a._level,
          j = a._root,
          k = 0;
        while (b + k < 0)
          (j = new jc(j && j.array.length ? [undefined, j] : [], e)),
            (i += d),
            (k += 1 << i);
        k && ((b += k), (g += k), (c += k), (h += k));
        var m = vc(h),
          n = vc(c);
        while (n >= 1 << (i + d))
          (j = new jc(j && j.array.length ? [j] : [], e)), (i += d);
        var o = a._tail,
          p = n < m ? sc(a, c - 1) : n > m ? new jc([], e) : o;
        if (o && n > m && b < h && o.array.length) {
          j = rc(j, e);
          var q = j;
          for (var r = i; r > d; r -= d) {
            var s = (m >>> r) & f;
            q = q.array[s] = rc(q.array[s], e);
          }
          q.array[(m >>> d) & f] = o;
        }
        c < h && (p = p && p.removeAfter(e, 0, c));
        if (b >= n)
          (b -= n),
            (c -= n),
            (i = d),
            (j = null),
            (p = p && p.removeBefore(e, 0, b));
        else if (b > g || n < m) {
          k = 0;
          while (j) {
            s = (b >>> i) & f;
            if ((s !== n >>> i) & f) break;
            s && (k += (1 << i) * s);
            i -= d;
            j = j.array[s];
          }
          j && b > g && (j = j.removeBefore(e, i, b - k));
          j && n < m && (j = j.removeAfter(e, i, n - k));
          k && ((b -= k), (c -= k));
        }
        if (a.__ownerID) {
          a.size = c - b;
          a._origin = b;
          a._capacity = c;
          a._level = i;
          a._root = j;
          a._tail = p;
          a.__hash = undefined;
          a.__altered = !0;
          return a;
        }
        return mc(b, c, i, j, p);
      }
      function uc(a, b, c) {
        var d = [],
          e = 0;
        for (var f = 0; f < c.length; f++) {
          var g = c[f],
            h = v(g);
          h.size > e && (e = h.size);
          x(g) ||
            (h = h.map(function (a) {
              return Ia(a);
            }));
          d.push(h);
        }
        e > a.size && (a = a.setSize(e));
        return Zb(a, b, d);
      }
      function vc(a) {
        return a < e ? 0 : ((a - 1) >>> d) << d;
      }
      b(S, O);
      function S(a) {
        return a === null || a === undefined
          ? zc()
          : wc(a)
          ? a
          : zc().withMutations(function (b) {
              var c = u(a);
              L(c.size);
              c.forEach(function (a, c) {
                return b.set(c, a);
              });
            });
      }
      S.of = function () {
        return this(arguments);
      };
      S.prototype.toString = function () {
        return this.__toString('OrderedMap {', '}');
      };
      S.prototype.get = function (a, b) {
        a = this._map.get(a);
        return a !== undefined ? this._list.get(a)[1] : b;
      };
      S.prototype.clear = function () {
        if (this.size === 0) return this;
        if (this.__ownerID) {
          this.size = 0;
          this._map.clear();
          this._list.clear();
          return this;
        }
        return zc();
      };
      S.prototype.set = function (a, b) {
        return Ac(this, a, b);
      };
      S.prototype.remove = function (a) {
        return Ac(this, a, g);
      };
      S.prototype.wasAltered = function () {
        return this._map.wasAltered() || this._list.wasAltered();
      };
      S.prototype.__iterate = function (a, b) {
        var c = this;
        return this._list.__iterate(function (b) {
          return b && a(b[1], b[0], c);
        }, b);
      };
      S.prototype.__iterator = function (a, b) {
        return this._list.fromEntrySeq().__iterator(a, b);
      };
      S.prototype.__ensureOwner = function (a) {
        if (a === this.__ownerID) return this;
        var b = this._map.__ensureOwner(a),
          c = this._list.__ensureOwner(a);
        if (!a) {
          this.__ownerID = a;
          this._map = b;
          this._list = c;
          return this;
        }
        return xc(b, c, a, this.__hash);
      };
      function wc(a) {
        return Db(a) && ca(a);
      }
      S.isOrderedMap = wc;
      S.prototype[ga] = !0;
      S.prototype[c] = S.prototype.remove;
      function xc(b, c, d, a) {
        var e = Object.create(S.prototype);
        e.size = b ? b.size : 0;
        e._map = b;
        e._list = c;
        e.__ownerID = d;
        e.__hash = a;
        return e;
      }
      var yc;
      function zc() {
        return yc || (yc = xc(Pb(), oc()));
      }
      function Ac(a, b, c) {
        var d = a._map,
          f = a._list,
          h = d.get(b),
          i = h !== undefined,
          j,
          k;
        if (c === g) {
          if (!i) return a;
          f.size >= e && f.size >= d.size * 2
            ? ((k = f.filter(function (a, b) {
                return a !== undefined && h !== b;
              })),
              (j = k
                .toKeyedSeq()
                .map(function (a) {
                  return a[0];
                })
                .flip()
                .toMap()),
              a.__ownerID && (j.__ownerID = k.__ownerID = a.__ownerID))
            : ((j = d.remove(b)),
              (k = h === f.size - 1 ? f.pop() : f.set(h, undefined)));
        } else if (i) {
          if (c === f.get(h)[1]) return a;
          j = d;
          k = f.set(h, [b, c]);
        } else (j = d.set(b, f.size)), (k = f.set(f.size, [b, c]));
        if (a.__ownerID) {
          a.size = j.size;
          a._map = j;
          a._list = k;
          a.__hash = undefined;
          return a;
        }
        return xc(j, k);
      }
      b(T, Ga);
      function T(a) {
        return a === null || a === undefined
          ? Gc()
          : Bc(a)
          ? a
          : Gc().unshiftAll(a);
      }
      T.of = function () {
        return this(arguments);
      };
      T.prototype.toString = function () {
        return this.__toString('Stack [', ']');
      };
      T.prototype.get = function (a, b) {
        var c = this._head;
        a = o(this, a);
        while (c && a--) c = c.next;
        return c ? c.value : b;
      };
      T.prototype.peek = function () {
        return this._head && this._head.value;
      };
      T.prototype.push = function () {
        if (arguments.length === 0) return this;
        var a = this.size + arguments.length,
          b = this._head;
        for (var c = arguments.length - 1; c >= 0; c--)
          b = { value: arguments[c], next: b };
        if (this.__ownerID) {
          this.size = a;
          this._head = b;
          this.__hash = undefined;
          this.__altered = !0;
          return this;
        }
        return Ec(a, b);
      };
      T.prototype.pushAll = function (a) {
        a = v(a);
        if (a.size === 0) return this;
        L(a.size);
        var b = this.size,
          c = this._head;
        a.reverse().forEach(function (a) {
          b++, (c = { value: a, next: c });
        });
        if (this.__ownerID) {
          this.size = b;
          this._head = c;
          this.__hash = undefined;
          this.__altered = !0;
          return this;
        }
        return Ec(b, c);
      };
      T.prototype.pop = function () {
        return this.slice(1);
      };
      T.prototype.unshift = function () {
        return this.push.apply(this, arguments);
      };
      T.prototype.unshiftAll = function (a) {
        return this.pushAll(a);
      };
      T.prototype.shift = function () {
        return this.pop.apply(this, arguments);
      };
      T.prototype.clear = function () {
        if (this.size === 0) return this;
        if (this.__ownerID) {
          this.size = 0;
          this._head = undefined;
          this.__hash = undefined;
          this.__altered = !0;
          return this;
        }
        return Gc();
      };
      T.prototype.slice = function (a, b) {
        if (q(a, b, this.size)) return this;
        var c = r(a, this.size),
          d = s(b, this.size);
        if (d !== this.size) return Ga.prototype.slice.call(this, a, b);
        d = this.size - c;
        a = this._head;
        while (c--) a = a.next;
        if (this.__ownerID) {
          this.size = d;
          this._head = a;
          this.__hash = undefined;
          this.__altered = !0;
          return this;
        }
        return Ec(d, a);
      };
      T.prototype.__ensureOwner = function (a) {
        if (a === this.__ownerID) return this;
        if (!a) {
          this.__ownerID = a;
          this.__altered = !1;
          return this;
        }
        return Ec(this.size, this._head, a, this.__hash);
      };
      T.prototype.__iterate = function (a, b) {
        if (b) return this.reverse().__iterate(a);
        b = 0;
        var c = this._head;
        while (c) {
          if (a(c.value, b++, this) === !1) break;
          c = c.next;
        }
        return b;
      };
      T.prototype.__iterator = function (a, b) {
        if (b) return this.reverse().__iterator(a);
        var c = 0,
          d = this._head;
        return new C(function () {
          if (d) {
            var b = d.value;
            d = d.next;
            return D(a, c++, b);
          }
          return E();
        });
      };
      function Bc(a) {
        return !!(a && a[Cc]);
      }
      T.isStack = Bc;
      var Cc = '@@__IMMUTABLE_STACK__@@',
        Dc = T.prototype;
      Dc[Cc] = !0;
      Dc.withMutations = P.withMutations;
      Dc.asMutable = P.asMutable;
      Dc.asImmutable = P.asImmutable;
      Dc.wasAltered = P.wasAltered;
      function Ec(b, c, d, a) {
        var e = Object.create(Dc);
        e.size = b;
        e._head = c;
        e.__ownerID = d;
        e.__hash = a;
        e.__altered = !1;
        return e;
      }
      var Fc;
      function Gc() {
        return Fc || (Fc = Ec(0));
      }
      b(U, Ha);
      function U(a) {
        return a === null || a === undefined
          ? Mc()
          : Hc(a)
          ? a
          : Mc().withMutations(function (b) {
              var c = w(a);
              L(c.size);
              c.forEach(function (a) {
                return b.add(a);
              });
            });
      }
      U.of = function () {
        return this(arguments);
      };
      U.fromKeys = function (a) {
        return this(u(a).keySeq());
      };
      U.prototype.toString = function () {
        return this.__toString('Set {', '}');
      };
      U.prototype.has = function (a) {
        return this._map.has(a);
      };
      U.prototype.add = function (a) {
        return Jc(this, this._map.set(a, !0));
      };
      U.prototype.remove = function (a) {
        return Jc(this, this._map.remove(a));
      };
      U.prototype.clear = function () {
        return Jc(this, this._map.clear());
      };
      U.prototype.union = function () {
        var b = a.call(arguments, 0);
        b = b.filter(function (a) {
          return a.size !== 0;
        });
        if (b.length === 0) return this;
        return this.size === 0 && !this.__ownerID && b.length === 1
          ? this.constructor(b[0])
          : this.withMutations(function (a) {
              for (var c = 0; c < b.length; c++)
                w(b[c]).forEach(function (b) {
                  return a.add(b);
                });
            });
      };
      U.prototype.intersect = function () {
        var b = a.call(arguments, 0);
        if (b.length === 0) return this;
        b = b.map(function (a) {
          return w(a);
        });
        var c = this;
        return this.withMutations(function (a) {
          c.forEach(function (c) {
            b.every(function (a) {
              return a.includes(c);
            }) || a.remove(c);
          });
        });
      };
      U.prototype.subtract = function () {
        var b = a.call(arguments, 0);
        if (b.length === 0) return this;
        b = b.map(function (a) {
          return w(a);
        });
        var c = this;
        return this.withMutations(function (a) {
          c.forEach(function (c) {
            b.some(function (a) {
              return a.includes(c);
            }) && a.remove(c);
          });
        });
      };
      U.prototype.merge = function () {
        return this.union.apply(this, arguments);
      };
      U.prototype.mergeWith = function (b) {
        var c = a.call(arguments, 1);
        return this.union.apply(this, c);
      };
      U.prototype.sort = function (a) {
        return Nc(sb(this, a));
      };
      U.prototype.sortBy = function (a, b) {
        return Nc(sb(this, b, a));
      };
      U.prototype.wasAltered = function () {
        return this._map.wasAltered();
      };
      U.prototype.__iterate = function (a, b) {
        var c = this;
        return this._map.__iterate(function (b, d) {
          return a(d, d, c);
        }, b);
      };
      U.prototype.__iterator = function (a, b) {
        return this._map
          .map(function (a, b) {
            return b;
          })
          .__iterator(a, b);
      };
      U.prototype.__ensureOwner = function (a) {
        if (a === this.__ownerID) return this;
        var b = this._map.__ensureOwner(a);
        if (!a) {
          this.__ownerID = a;
          this._map = b;
          return this;
        }
        return this.__make(b, a);
      };
      function Hc(a) {
        return !!(a && a[Ic]);
      }
      U.isSet = Hc;
      var Ic = '@@__IMMUTABLE_SET__@@',
        V = U.prototype;
      V[Ic] = !0;
      V[c] = V.remove;
      V.mergeDeep = V.merge;
      V.mergeDeepWith = V.mergeWith;
      V.withMutations = P.withMutations;
      V.asMutable = P.asMutable;
      V.asImmutable = P.asImmutable;
      V.__empty = Mc;
      V.__make = Kc;
      function Jc(a, b) {
        if (a.__ownerID) {
          a.size = b.size;
          a._map = b;
          return a;
        }
        return b === a._map ? a : b.size === 0 ? a.__empty() : a.__make(b);
      }
      function Kc(a, b) {
        var c = Object.create(V);
        c.size = a ? a.size : 0;
        c._map = a;
        c.__ownerID = b;
        return c;
      }
      var Lc;
      function Mc() {
        return Lc || (Lc = Kc(Pb()));
      }
      b(Nc, U);
      function Nc(a) {
        return a === null || a === undefined
          ? Sc()
          : Oc(a)
          ? a
          : Sc().withMutations(function (b) {
              var c = w(a);
              L(c.size);
              c.forEach(function (a) {
                return b.add(a);
              });
            });
      }
      Nc.of = function () {
        return this(arguments);
      };
      Nc.fromKeys = function (a) {
        return this(u(a).keySeq());
      };
      Nc.prototype.toString = function () {
        return this.__toString('OrderedSet {', '}');
      };
      function Oc(a) {
        return Hc(a) && ca(a);
      }
      Nc.isOrderedSet = Oc;
      var Pc = Nc.prototype;
      Pc[ga] = !0;
      Pc.__empty = Sc;
      Pc.__make = Qc;
      function Qc(a, b) {
        var c = Object.create(Pc);
        c.size = a ? a.size : 0;
        c._map = a;
        c.__ownerID = b;
        return c;
      }
      var Rc;
      function Sc() {
        return Rc || (Rc = Qc(zc()));
      }
      b(W, Fa);
      function W(a, b) {
        var c,
          d = function (f) {
            if (f instanceof d) return f;
            if (!(this instanceof d)) return new d(f);
            if (!c) {
              c = !0;
              var g = Object.keys(a);
              Vc(e, g);
              e.size = g.length;
              e._name = b;
              e._keys = g;
              e._defaultValues = a;
            }
            this._map = O(f);
          },
          e = (d.prototype = Object.create(X));
        e.constructor = d;
        return d;
      }
      W.prototype.toString = function () {
        return this.__toString(Uc(this) + ' {', '}');
      };
      W.prototype.has = function (a) {
        return this._defaultValues.hasOwnProperty(a);
      };
      W.prototype.get = function (a, b) {
        if (!this.has(a)) return b;
        b = this._defaultValues[a];
        return this._map ? this._map.get(a, b) : b;
      };
      W.prototype.clear = function () {
        if (this.__ownerID) {
          this._map && this._map.clear();
          return this;
        }
        var a = this.constructor;
        return a._empty || (a._empty = Tc(this, Pb()));
      };
      W.prototype.set = function (a, b) {
        if (!this.has(a))
          throw new Error('Cannot set unknown key "' + a + '" on ' + Uc(this));
        a = this._map && this._map.set(a, b);
        return this.__ownerID || a === this._map ? this : Tc(this, a);
      };
      W.prototype.remove = function (a) {
        if (!this.has(a)) return this;
        a = this._map && this._map.remove(a);
        return this.__ownerID || a === this._map ? this : Tc(this, a);
      };
      W.prototype.wasAltered = function () {
        return this._map.wasAltered();
      };
      W.prototype.__iterator = function (a, b) {
        var c = this;
        return u(this._defaultValues)
          .map(function (a, b) {
            return c.get(b);
          })
          .__iterator(a, b);
      };
      W.prototype.__iterate = function (a, b) {
        var c = this;
        return u(this._defaultValues)
          .map(function (a, b) {
            return c.get(b);
          })
          .__iterate(a, b);
      };
      W.prototype.__ensureOwner = function (a) {
        if (a === this.__ownerID) return this;
        var b = this._map && this._map.__ensureOwner(a);
        if (!a) {
          this.__ownerID = a;
          this._map = b;
          return this;
        }
        return Tc(this, b, a);
      };
      var X = W.prototype;
      X[c] = X.remove;
      X.deleteIn = X.removeIn = P.removeIn;
      X.merge = P.merge;
      X.mergeWith = P.mergeWith;
      X.mergeIn = P.mergeIn;
      X.mergeDeep = P.mergeDeep;
      X.mergeDeepWith = P.mergeDeepWith;
      X.mergeDeepIn = P.mergeDeepIn;
      X.setIn = P.setIn;
      X.update = P.update;
      X.updateIn = P.updateIn;
      X.withMutations = P.withMutations;
      X.asMutable = P.asMutable;
      X.asImmutable = P.asImmutable;
      function Tc(a, b, c) {
        a = Object.create(Object.getPrototypeOf(a));
        a._map = b;
        a.__ownerID = c;
        return a;
      }
      function Uc(a) {
        return a._name || a.constructor.name || 'Record';
      }
      function Vc(a, b) {
        try {
          b.forEach(Wc.bind(undefined, a));
        } catch (a) {}
      }
      function Wc(a, b) {
        Object.defineProperty(a, b, {
          get: function () {
            return this.get(b);
          },
          set: function (a) {
            bb(this.__ownerID, 'Cannot set on an immutable record.'),
              this.set(b, a);
          },
        });
      }
      function Xc(a, b) {
        if (a === b) return !0;
        if (
          !x(b) ||
          (a.size !== undefined && b.size !== undefined && a.size !== b.size) ||
          (a.__hash !== undefined &&
            b.__hash !== undefined &&
            a.__hash !== b.__hash) ||
          y(a) !== y(b) ||
          z(a) !== z(b) ||
          ca(a) !== ca(b)
        )
          return !1;
        if (a.size === 0 && b.size === 0) return !0;
        var c = !ba(a);
        if (ca(a)) {
          var d = a.entries();
          return (
            b.every(function (a, b) {
              var e = d.next().value;
              return e && J(e[1], a) && (c || J(e[0], b));
            }) && d.next().done
          );
        }
        var e = !1;
        if (a.size === undefined)
          if (b.size === undefined)
            typeof a.cacheResult === 'function' && a.cacheResult();
          else {
            e = !0;
            var f = a;
            a = b;
            b = f;
          }
        f = !0;
        b = b.__iterate(function (b, d) {
          if (c ? !a.has(b) : e ? !J(b, a.get(d, g)) : !J(a.get(d, g), b)) {
            f = !1;
            return !1;
          }
        });
        return f && a.size === b;
      }
      b(Y, H);
      function Y(a, b, c) {
        if (!(this instanceof Y)) return new Y(a, b, c);
        bb(c !== 0, 'Cannot step a Range by 0');
        a = a || 0;
        b === undefined && (b = Infinity);
        c = c === undefined ? 1 : Math.abs(c);
        b < a && (c = -c);
        this._start = a;
        this._end = b;
        this._step = c;
        this.size = Math.max(0, Math.ceil((b - a) / c - 1) + 1);
        if (this.size === 0) {
          if (Yc) return Yc;
          Yc = this;
        }
      }
      Y.prototype.toString = function () {
        return this.size === 0
          ? 'Range []'
          : 'Range [ ' +
              this._start +
              '...' +
              this._end +
              (this._step > 1 ? ' by ' + this._step : '') +
              ' ]';
      };
      Y.prototype.get = function (a, b) {
        return this.has(a) ? this._start + o(this, a) * this._step : b;
      };
      Y.prototype.includes = function (a) {
        a = (a - this._start) / this._step;
        return a >= 0 && a < this.size && a === Math.floor(a);
      };
      Y.prototype.slice = function (a, b) {
        if (q(a, b, this.size)) return this;
        a = r(a, this.size);
        b = s(b, this.size);
        return b <= a
          ? new Y(0, 0)
          : new Y(this.get(a, this._end), this.get(b, this._end), this._step);
      };
      Y.prototype.indexOf = function (a) {
        a = a - this._start;
        if (a % this._step === 0) {
          a = a / this._step;
          if (a >= 0 && a < this.size) return a;
        }
        return -1;
      };
      Y.prototype.lastIndexOf = function (a) {
        return this.indexOf(a);
      };
      Y.prototype.__iterate = function (a, b) {
        var c = this.size - 1,
          d = this._step,
          e = b ? this._start + c * d : this._start;
        for (var f = 0; f <= c; f++) {
          if (a(e, f, this) === !1) return f + 1;
          e += b ? -d : d;
        }
        return f;
      };
      Y.prototype.__iterator = function (a, b) {
        var c = this.size - 1,
          d = this._step,
          e = b ? this._start + c * d : this._start,
          f = 0;
        return new C(function () {
          var g = e;
          e += b ? -d : d;
          return f > c ? E() : D(a, f++, g);
        });
      };
      Y.prototype.equals = function (a) {
        return a instanceof Y
          ? this._start === a._start &&
              this._end === a._end &&
              this._step === a._step
          : Xc(this, a);
      };
      var Yc;
      b(Z, H);
      function Z(a, b) {
        if (!(this instanceof Z)) return new Z(a, b);
        this._value = a;
        this.size = b === undefined ? Infinity : Math.max(0, b);
        if (this.size === 0) {
          if (Zc) return Zc;
          Zc = this;
        }
      }
      Z.prototype.toString = function () {
        return this.size === 0
          ? 'Repeat []'
          : 'Repeat [ ' + this._value + ' ' + this.size + ' times ]';
      };
      Z.prototype.get = function (a, b) {
        return this.has(a) ? this._value : b;
      };
      Z.prototype.includes = function (a) {
        return J(this._value, a);
      };
      Z.prototype.slice = function (a, b) {
        var c = this.size;
        return q(a, b, c) ? this : new Z(this._value, s(b, c) - r(a, c));
      };
      Z.prototype.reverse = function () {
        return this;
      };
      Z.prototype.indexOf = function (a) {
        return J(this._value, a) ? 0 : -1;
      };
      Z.prototype.lastIndexOf = function (a) {
        return J(this._value, a) ? this.size : -1;
      };
      Z.prototype.__iterate = function (a, b) {
        for (var b = 0; b < this.size; b++)
          if (a(this._value, b, this) === !1) return b + 1;
        return b;
      };
      Z.prototype.__iterator = function (a, b) {
        var c = this,
          d = 0;
        return new C(function () {
          return d < c.size ? D(a, d++, c._value) : E();
        });
      };
      Z.prototype.equals = function (a) {
        return a instanceof Z ? J(this._value, a._value) : Xc(a);
      };
      var Zc;
      function $c(a, b) {
        var c = function (c) {
          a.prototype[c] = b[c];
        };
        Object.keys(b).forEach(c);
        Object.getOwnPropertySymbols &&
          Object.getOwnPropertySymbols(b).forEach(c);
        return a;
      }
      t.Iterator = C;
      $c(t, {
        toArray: function () {
          L(this.size);
          var a = new Array(this.size || 0);
          this.valueSeq().__iterate(function (b, c) {
            a[c] = b;
          });
          return a;
        },
        toIndexedSeq: function () {
          return new cb(this);
        },
        toJS: function () {
          return this.toSeq()
            .map(function (a) {
              return a && typeof a.toJS === 'function' ? a.toJS() : a;
            })
            .__toJS();
        },
        toJSON: function () {
          return this.toSeq()
            .map(function (a) {
              return a && typeof a.toJSON === 'function' ? a.toJSON() : a;
            })
            .__toJS();
        },
        toKeyedSeq: function () {
          return new M(this, !0);
        },
        toMap: function () {
          return O(this.toKeyedSeq());
        },
        toObject: function () {
          L(this.size);
          var a = {};
          this.__iterate(function (b, c) {
            a[c] = b;
          });
          return a;
        },
        toOrderedMap: function () {
          return S(this.toKeyedSeq());
        },
        toOrderedSet: function () {
          return Nc(y(this) ? this.valueSeq() : this);
        },
        toSet: function () {
          return U(y(this) ? this.valueSeq() : this);
        },
        toSetSeq: function () {
          return new db(this);
        },
        toSeq: function () {
          return z(this)
            ? this.toIndexedSeq()
            : y(this)
            ? this.toKeyedSeq()
            : this.toSetSeq();
        },
        toStack: function () {
          return T(y(this) ? this.valueSeq() : this);
        },
        toList: function () {
          return Q(y(this) ? this.valueSeq() : this);
        },
        toString: function () {
          return '[Iterable]';
        },
        __toString: function (a, b) {
          return this.size === 0
            ? a + b
            : a +
                ' ' +
                this.toSeq().map(this.__toStringMapper).join(', ') +
                ' ' +
                b;
        },
        concat: function () {
          var b = a.call(arguments, 0);
          return N(this, ob(this, b));
        },
        contains: function (a) {
          return this.includes(a);
        },
        includes: function (a) {
          return this.some(function (b) {
            return J(b, a);
          });
        },
        entries: function () {
          return this.__iterator(B);
        },
        every: function (a, b) {
          L(this.size);
          var c = !0;
          this.__iterate(function (d, e, f) {
            if (!a.call(b, d, e, f)) {
              c = !1;
              return !1;
            }
          });
          return c;
        },
        filter: function (a, b) {
          return N(this, ib(this, a, b, !0));
        },
        find: function (a, b, c) {
          a = this.findEntry(a, b);
          return a ? a[1] : c;
        },
        findEntry: function (a, b) {
          var c;
          this.__iterate(function (d, e, f) {
            if (a.call(b, d, e, f)) {
              c = [e, d];
              return !1;
            }
          });
          return c;
        },
        findLastEntry: function (a, b) {
          return this.toSeq().reverse().findEntry(a, b);
        },
        forEach: function (a, b) {
          L(this.size);
          return this.__iterate(b ? a.bind(b) : a);
        },
        join: function (a) {
          L(this.size);
          a = a !== undefined ? '' + a : ',';
          var b = '',
            c = !0;
          this.__iterate(function (d) {
            c ? (c = !1) : (b += a),
              (b += d !== null && d !== undefined ? d.toString() : '');
          });
          return b;
        },
        keys: function () {
          return this.__iterator(ha);
        },
        map: function (a, b) {
          return N(this, gb(this, a, b));
        },
        reduce: function (a, b, c) {
          L(this.size);
          var d, e;
          arguments.length < 2 ? (e = !0) : (d = b);
          this.__iterate(function (b, f, g) {
            e ? ((e = !1), (d = b)) : (d = a.call(c, d, b, f, g));
          });
          return d;
        },
        reduceRight: function (a, b, c) {
          var d = this.toKeyedSeq().reverse();
          return d.reduce.apply(d, arguments);
        },
        reverse: function () {
          return N(this, hb(this, !0));
        },
        slice: function (a, b) {
          return N(this, lb(this, a, b, !0));
        },
        some: function (a, b) {
          return !this.every(cd(a), b);
        },
        sort: function (a) {
          return N(this, sb(this, a));
        },
        values: function () {
          return this.__iterator(A);
        },
        butLast: function () {
          return this.slice(0, -1);
        },
        isEmpty: function () {
          return this.size !== undefined
            ? this.size === 0
            : !this.some(function () {
                return !0;
              });
        },
        count: function (a, b) {
          return n(a ? this.toSeq().filter(a, b) : this);
        },
        countBy: function (a, b) {
          return jb(this, a, b);
        },
        equals: function (a) {
          return Xc(this, a);
        },
        entrySeq: function () {
          var a = this;
          if (a._cache) return new ra(a._cache);
          var b = a.toSeq().map(bd).toIndexedSeq();
          b.fromEntrySeq = function () {
            return a.toSeq();
          };
          return b;
        },
        filterNot: function (a, b) {
          return this.filter(cd(a), b);
        },
        findLast: function (a, b, c) {
          return this.toKeyedSeq().reverse().find(a, b, c);
        },
        first: function () {
          return this.find(p);
        },
        flatMap: function (a, b) {
          return N(this, qb(this, a, b));
        },
        flatten: function (a) {
          return N(this, pb(this, a, !0));
        },
        fromEntrySeq: function () {
          return new eb(this);
        },
        get: function (a, b) {
          return this.find(
            function (b, c) {
              return J(c, a);
            },
            undefined,
            b
          );
        },
        getIn: function (a, b) {
          var c = this;
          a = Cb(a);
          var d;
          while (!(d = a.next()).done) {
            d = d.value;
            c = c && c.get ? c.get(d, g) : g;
            if (c === g) return b;
          }
          return c;
        },
        groupBy: function (a, b) {
          return kb(this, a, b);
        },
        has: function (a) {
          return this.get(a, g) !== g;
        },
        hasIn: function (a) {
          return this.getIn(a, g) !== g;
        },
        isSubset: function (a) {
          a = typeof a.includes === 'function' ? a : t(a);
          return this.every(function (b) {
            return a.includes(b);
          });
        },
        isSuperset: function (a) {
          return a.isSubset(this);
        },
        keySeq: function () {
          return this.toSeq().map(ad).toIndexedSeq();
        },
        last: function () {
          return this.toSeq().reverse().first();
        },
        max: function (a) {
          return tb(this, a);
        },
        maxBy: function (a, b) {
          return tb(this, b, a);
        },
        min: function (a) {
          return tb(this, a ? dd(a) : gd);
        },
        minBy: function (a, b) {
          return tb(this, b ? dd(b) : gd, a);
        },
        rest: function () {
          return this.slice(1);
        },
        skip: function (a) {
          return this.slice(Math.max(0, a));
        },
        skipLast: function (a) {
          return N(this, this.toSeq().reverse().skip(a).reverse());
        },
        skipWhile: function (a, b) {
          return N(this, nb(this, a, b, !0));
        },
        skipUntil: function (a, b) {
          return this.skipWhile(cd(a), b);
        },
        sortBy: function (a, b) {
          return N(this, sb(this, b, a));
        },
        take: function (a) {
          return this.slice(0, Math.max(0, a));
        },
        takeLast: function (a) {
          return N(this, this.toSeq().reverse().take(a).reverse());
        },
        takeWhile: function (a, b) {
          return N(this, mb(this, a, b));
        },
        takeUntil: function (a, b) {
          return this.takeWhile(cd(a), b);
        },
        valueSeq: function () {
          return this.toIndexedSeq();
        },
        hashCode: function () {
          return this.__hash || (this.__hash = hd(this));
        },
      });
      var $ = t.prototype;
      $[da] = !0;
      $[ka] = $.values;
      $.__toJS = $.toArray;
      $.__toStringMapper = ed;
      $.inspect = $.toSource = function () {
        return this.toString();
      };
      $.chain = $.flatMap;
      (function () {
        try {
          Object.defineProperty($, 'length', {
            get: function () {
              if (!t.noLengthWarning) {
                var a;
                try {
                  throw new Error();
                } catch (b) {
                  a = b.stack;
                }
                if (a.indexOf('_wrapObject') === -1) {
                  console && emptyFunction && !1;
                  return this.size;
                }
              }
            },
          });
        } catch (a) {}
      })();
      $c(u, {
        flip: function () {
          return N(this, fb(this));
        },
        findKey: function (a, b) {
          a = this.findEntry(a, b);
          return a && a[0];
        },
        findLastKey: function (a, b) {
          return this.toSeq().reverse().findKey(a, b);
        },
        keyOf: function (a) {
          return this.findKey(function (b) {
            return J(b, a);
          });
        },
        lastKeyOf: function (a) {
          return this.findLastKey(function (b) {
            return J(b, a);
          });
        },
        mapEntries: function (a, b) {
          var c = this,
            d = 0;
          return N(
            this,
            this.toSeq()
              .map(function (e, f) {
                return a.call(b, [f, e], d++, c);
              })
              .fromEntrySeq()
          );
        },
        mapKeys: function (a, b) {
          var c = this;
          return N(
            this,
            this.toSeq()
              .flip()
              .map(function (d, e) {
                return a.call(b, d, e, c);
              })
              .flip()
          );
        },
      });
      c = u.prototype;
      c[ea] = !0;
      c[ka] = $.entries;
      c.__toJS = $.toObject;
      c.__toStringMapper = function (a, b) {
        return JSON.stringify(b) + ': ' + ed(a);
      };
      $c(v, {
        toKeyedSeq: function () {
          return new M(this, !1);
        },
        filter: function (a, b) {
          return N(this, ib(this, a, b, !1));
        },
        findIndex: function (a, b) {
          a = this.findEntry(a, b);
          return a ? a[0] : -1;
        },
        indexOf: function (a) {
          a = this.toKeyedSeq().keyOf(a);
          return a === undefined ? -1 : a;
        },
        lastIndexOf: function (a) {
          return this.toSeq().reverse().indexOf(a);
        },
        reverse: function () {
          return N(this, hb(this, !1));
        },
        slice: function (a, b) {
          return N(this, lb(this, a, b, !1));
        },
        splice: function (a, b) {
          var c = arguments.length;
          b = Math.max(b | 0, 0);
          if (c === 0 || (c === 2 && !b)) return this;
          a = r(a, this.size);
          var d = this.slice(0, a);
          return N(
            this,
            c === 1 ? d : d.concat(m(arguments, 2), this.slice(a + b))
          );
        },
        findLastIndex: function (a, b) {
          a = this.toKeyedSeq().findLastKey(a, b);
          return a === undefined ? -1 : a;
        },
        first: function () {
          return this.get(0);
        },
        flatten: function (a) {
          return N(this, pb(this, a, !1));
        },
        get: function (a, b) {
          a = o(this, a);
          return a < 0 ||
            this.size === Infinity ||
            (this.size !== undefined && a > this.size)
            ? b
            : this.find(
                function (b, c) {
                  return c === a;
                },
                undefined,
                b
              );
        },
        has: function (a) {
          a = o(this, a);
          return (
            a >= 0 &&
            (this.size !== undefined
              ? this.size === Infinity || a < this.size
              : this.indexOf(a) !== -1)
          );
        },
        interpose: function (a) {
          return N(this, rb(this, a));
        },
        interleave: function () {
          var a = [this].concat(m(arguments)),
            b = vb(this.toSeq(), H.of, a),
            c = b.flatten(!0);
          b.size && (c.size = b.size * a.length);
          return N(this, c);
        },
        last: function () {
          return this.get(-1);
        },
        skipWhile: function (a, b) {
          return N(this, nb(this, a, b, !1));
        },
        zip: function () {
          var a = [this].concat(m(arguments));
          return N(this, vb(this, fd, a));
        },
        zipWith: function (a) {
          var b = m(arguments);
          b[0] = this;
          return N(this, vb(this, a, b));
        },
      });
      v.prototype[fa] = !0;
      v.prototype[ga] = !0;
      $c(w, {
        get: function (a, b) {
          return this.has(a) ? a : b;
        },
        includes: function (a) {
          return this.has(a);
        },
        keySeq: function () {
          return this.valueSeq();
        },
      });
      w.prototype.has = $.includes;
      $c(G, u.prototype);
      $c(H, v.prototype);
      $c(I, w.prototype);
      $c(Fa, u.prototype);
      $c(Ga, v.prototype);
      $c(Ha, w.prototype);
      function ad(a, b) {
        return b;
      }
      function bd(a, b) {
        return [b, a];
      }
      function cd(a) {
        return function () {
          return !a.apply(this, arguments);
        };
      }
      function dd(a) {
        return function () {
          return -a.apply(this, arguments);
        };
      }
      function ed(a) {
        return typeof a === 'string' ? JSON.stringify(a) : a;
      }
      function fd() {
        return m(arguments);
      }
      function gd(a, b) {
        return a < b ? 1 : a > b ? -1 : 0;
      }
      function hd(a) {
        if (a.size === Infinity) return 0;
        var b = ca(a),
          c = y(a),
          d = b ? 1 : 0;
        a = a.__iterate(
          c
            ? b
              ? function (a, b) {
                  d = (31 * d + jd(K(a), K(b))) | 0;
                }
              : function (a, b) {
                  d = (d + jd(K(a), K(b))) | 0;
                }
            : b
            ? function (a) {
                d = (31 * d + K(a)) | 0;
              }
            : function (a) {
                d = (d + K(a)) | 0;
              }
        );
        return id(a, d);
      }
      function id(a, b) {
        b = Ma(b, 3432918353);
        b = Ma((b << 15) | (b >>> -15), 461845907);
        b = Ma((b << 13) | (b >>> -13), 5);
        b = ((b + 3864292196) | 0) ^ a;
        b = Ma(b ^ (b >>> 16), 2246822507);
        b = Ma(b ^ (b >>> 13), 3266489909);
        b = Na(b ^ (b >>> 16));
        return b;
      }
      function jd(a, b) {
        return (a ^ (b + 2654435769 + (a << 6) + (a >> 2))) | 0;
      }
      b = {
        Iterable: t,
        Seq: F,
        Collection: Ea,
        Map: O,
        OrderedMap: S,
        List: Q,
        Stack: T,
        Set: U,
        OrderedSet: Nc,
        Record: W,
        Range: Y,
        Repeat: Z,
        is: J,
        fromJS: Ia,
      };
      return b;
    });
  },
  null
);
__d(
  'LiveVideoPlayerStore',
  [
    'FluxReduceStore',
    'LiveVideoPlayerConstants',
    'LiveVideoPlayerDispatcher',
    'immutable',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g,
      h = b('LiveVideoPlayerConstants').ACTIONS;
    g = babelHelpers.inherits(a, b('FluxReduceStore'));
    g && g.prototype;
    a.prototype.getInitialState = function () {
      return b('immutable').Map({});
    };
    a.prototype.getIsRewound = function (a) {
      return this.getState().getIn([a, 'isRewound'], !1);
    };
    a.prototype.getIsRewindCommentOverlayDismissed = function (a) {
      return this.getState().getIn([a, 'isRewindCommentOverlayDismissed'], !1);
    };
    a.prototype.$LiveVideoPlayerStore1 = function (a, b) {
      a.hasOption('LivePlayer', 'isRewound') ||
        a.registerOption(
          'LivePlayer',
          'isRewound',
          function () {
            return this.getIsRewound(a.getVideoPlayerID());
          }.bind(this)
        ),
        a.emit('LivePlayer/isRewoundChanged');
    };
    a.prototype.reduce = function (a, b) {
      __p && __p();
      switch (b.type) {
        case h.DISMISS_REWIND_COMMENT_OVERLAY:
          a = a.setIn([b.playerID, 'isRewindCommentOverlayDismissed'], !0);
          break;
        case h.SET_IS_REWOUND:
          var c = b.vpc,
            d = b.isRewound;
          a = a.setIn([c.getVideoPlayerID(), 'isRewound'], d);
          setTimeout(
            function () {
              return this.$LiveVideoPlayerStore1(c, d);
            }.bind(this),
            0
          );
          c.setEnableLiveheadCatchup(!d);
          break;
        default:
          break;
      }
      return a;
    };
    function a() {
      g.apply(this, arguments);
    }
    a.__moduleID = e.id;
    e.exports = new a(b('LiveVideoPlayerDispatcher'));
  },
  null
);
__d(
  'MediaController',
  ['EventEmitter', 'Style'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g;
    g = babelHelpers.inherits(a, b('EventEmitter'));
    g && g.prototype;
    a.prototype.getRootNode = function () {
      return this.$MediaController1;
    };
    a.prototype.setDimensions = function (a, c) {
      var d = this.getRootNode();
      b('Style').apply(d, { width: a + 'px', height: c + 'px' });
    };
    a.prototype.getMediaID = function () {
      return this.$MediaController2;
    };
    a.prototype.isLiveVideo = function () {
      return !1;
    };
    function a() {
      g.apply(this, arguments);
    }
    e.exports = a;
  },
  null
);
__d(
  'SphericalVideoPlayerEvents',
  [],
  function (a, b, c, d, e, f) {
    e.exports = {
      SET_RELATIVE_SPHERICAL_ORIENTATION: 'setRelativeSphericalOrientation',
      SET_ABSOLUTE_SPHERICAL_ORIENTATION: 'setAbsoluteSphericalOrientation',
      SET_FIELD_OF_VIEW: 'setFieldOfView',
      SET_VIDEO_PROJECTION: 'setVideoProjection',
      SET_STEREO_MODE: 'setStereoMode',
      SET_PARTIAL_LIMITS: 'setPartialLimits',
      SET_VIEWPORT_CONTROL_CONFIG: 'setViewportControlConfig',
    };
  },
  null
);
__d(
  'VideoChannelViewChainLengthManager',
  ['guid'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function g(a) {
      (this.$1 = b('guid')()),
        (this.$2 = 0),
        (this.$3 = a),
        (this.$4 = {}),
        (this.$4[a] = 0),
        (this.$5 = a);
    }
    g.prototype.registerVideoID = function (a) {
      this.$4[a] === undefined && (this.$2++, (this.$4[a] = this.$2)),
        (this.$5 = a);
    };
    g.prototype.getSessionID = function () {
      return this.$1;
    };
    g.prototype.getCurrentChainLength = function () {
      return this.$4[this.$5] !== undefined ? this.$4[this.$5] : null;
    };
    var h = {};
    a = {
      _ensureSessionID: function (a) {
        (a = a.toString()), h[a] || (h[a] = new g(a));
      },
      getLoggingData: function (a) {
        a && (a = a.toString());
        a = h && h[a];
        return !a
          ? {
              video_chaining_depth_level: null,
              video_chaining_session_id: null,
            }
          : {
              video_chaining_depth_level: a.getCurrentChainLength(),
              video_chaining_session_id: a.getSessionID(),
            };
      },
      registerChainingInfos: function (a, b) {
        var c = a;
        if (b) {
          b = b.decode();
          b.root_id && (c = b.root_id);
        }
        c && (c = c.toString());
        this.registerVideoID(c, a);
      },
      registerVideoID: function (a, b) {
        (a = a.toString()), this._ensureSessionID(a), h[a].registerVideoID(b);
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'VideoControllerPlayingStateEmitter',
  ['EventEmitter', 'SubscriptionsHandler'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g;
    c = babelHelpers.inherits(a, b('EventEmitter'));
    g = c && c.prototype;
    function a(a) {
      g.constructor.call(this),
        (this.$VideoControllerPlayingStateEmitter2 = null),
        (this.$VideoControllerPlayingStateEmitter3 = a);
    }
    a.prototype.enable = function () {
      this.$VideoControllerPlayingStateEmitter4().addSubscriptions(
        this.$VideoControllerPlayingStateEmitter3.addListener(
          'stateChange',
          function () {
            var a = this.$VideoControllerPlayingStateEmitter2;
            this.$VideoControllerPlayingStateEmitter2 =
              this.$VideoControllerPlayingStateEmitter3.getState();
            if (this.$VideoControllerPlayingStateEmitter2 === a) return;
            this.$VideoControllerPlayingStateEmitter5(
              this.$VideoControllerPlayingStateEmitter2
            );
          }.bind(this)
        )
      ),
        (this.$VideoControllerPlayingStateEmitter2 =
          this.$VideoControllerPlayingStateEmitter3.getState()),
        this.$VideoControllerPlayingStateEmitter5(
          this.$VideoControllerPlayingStateEmitter2
        );
    };
    a.prototype.setOnPlaying = function (a) {
      this.$VideoControllerPlayingStateEmitter4().addSubscriptions(
        this.addListener('play', a)
      );
    };
    a.prototype.setOnPaused = function (a) {
      this.$VideoControllerPlayingStateEmitter4().addSubscriptions(
        this.addListener('pause', a)
      );
    };
    a.prototype.disable = function () {
      (this.$VideoControllerPlayingStateEmitter2 = null),
        this.$VideoControllerPlayingStateEmitter1 &&
          (this.$VideoControllerPlayingStateEmitter1.release(),
          (this.$VideoControllerPlayingStateEmitter1 = null));
    };
    a.prototype.$VideoControllerPlayingStateEmitter4 = function () {
      this.$VideoControllerPlayingStateEmitter1 ||
        (this.$VideoControllerPlayingStateEmitter1 = new (b(
          'SubscriptionsHandler'
        ))());
      return this.$VideoControllerPlayingStateEmitter1;
    };
    a.prototype.$VideoControllerPlayingStateEmitter5 = function (a) {
      a === 'playing'
        ? this.emit('play')
        : a === 'paused' && this.emit('pause');
    };
    e.exports = a;
  },
  null
);
__d(
  'VideoLiveTrace',
  ['VideosInfraLoapTypedLogger', 'gkx', 'guid'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = 'x-fb-video-livetrace-ids',
      h = 'x-fb-video-livetrace-parentsource',
      i = /[\r\n]+/;
    function a(a, b) {
      (this.$1 = a), (this.$2 = b), (this.$3 = 0);
    }
    a.prototype.setStreamType = function (a) {
      this.$3 = a;
    };
    a.prototype.$4 = function (a, c, d, e, f) {
      var g = 'PLY:WWW:',
        h = Date.now(),
        i = b('guid')();
      i = new (b('VideosInfraLoapTypedLogger'))()
        .setStreamID(this.$1)
        .setEventID(i)
        .setStreamType(this.$3)
        .setEventName(a)
        .setEventSeverity(e)
        .setEventCreationTime(h)
        .setSource(g + this.$2)
        .setTraceID(c)
        .setParentSource(d)
        .setMetadata(f);
      i.log();
    };
    a.prototype.handleHeaders = function (a) {
      __p && __p();
      if (
        !b('gkx')(
          'AT6WIGl7QS5nu848Y7ngRVHZcuuuVPcrc5rTukU4D6KZHTB75e7bP0ZcL7k6gPP9u9pg2HKrcRQLXacAt9ynLXhs'
        )
      )
        return;
      var c = [],
        d = '';
      a = a.trim().split(i);
      a.forEach(function (a) {
        a = a.split(': ');
        var b = a.shift().toLowerCase();
        a = a.shift();
        if (b === g && a) {
          var e = a.split(',');
          c.push.apply(
            c,
            e.map(function (a) {
              return +a.split(':')[0];
            })
          );
        }
        b === h && (d = a);
      });
      if (c.length && d !== '') {
        var e = d;
        c.forEach(
          function (a) {
            return this.$4('SEGMENT', a, e, 'SUCCESS');
          }.bind(this)
        );
      }
    };
    a.prototype.handleXHR = function (a) {
      this.handleHeaders(a.getAllResponseHeaders());
    };
    e.exports = a;
  },
  null
);
__d(
  'VideoPlayerAbrEvaluation',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      IDEAL: 'ideal',
      CONSERVATIVE: 'conservative',
      AGGRESSIVE: 'aggressive',
      CONSERVATIVE_RESOLUTION_CONSTRAINED:
        'conservative_resolution_constrained',
    });
  },
  null
);
__d(
  'VideoPlayerABRQualityTracker',
  ['VideoPlayerAbrEvaluation'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a) {
      (this.$1 = a), (this.$2 = null);
    }
    a.prototype.setLastQualitySwitchReason = function (a) {
      this.$2 = a;
    };
    a.prototype.getABREvaluation = function () {
      __p && __p();
      var a = [];
      this.$1 && (a = this.$1.flushABREvaluationSet());
      var c = 0,
        d = 0,
        e = 0,
        f = 0,
        g = this.$2;
      for (var h = 0; h < a.length; h++)
        switch (a[h]) {
          case b('VideoPlayerAbrEvaluation').IDEAL:
            c++;
            break;
          case b('VideoPlayerAbrEvaluation').CONSERVATIVE:
            d++;
            break;
          case b('VideoPlayerAbrEvaluation').AGGRESSIVE:
            e++;
            break;
          case b('VideoPlayerAbrEvaluation')
            .CONSERVATIVE_RESOLUTION_CONSTRAINED:
            f++;
            break;
        }
      return {
        idealSamples: c,
        conservativeSamples: d,
        aggressiveSamples: e,
        conservativeResolutionConstrainedSamples: f,
        lastQualitySwitchReason: g,
      };
    };
    e.exports = a;
  },
  null
);
__d(
  'VideoPlayerFormats',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      INLINE: 'inline',
      SNOWLIFT: 'snowlift',
      PERMALINK: 'permalink',
      CHANNEL: 'channel',
      FULL_SCREEN: 'full_screen',
      SOCIAL_PLAYER: 'social_player',
      TV: 'tv',
      MISC: 'misc',
      WATCH_SCROLL: 'watch_scroll',
      WATCH_SCROLL_APP_BACKGROUND: 'watch_scroll_app_background',
      WATCH_AND_GO: 'watch_and_go',
      WATCH_AND_BROWSE: 'watch_and_browse',
      CANVAS: 'canvas',
      TAHOE: 'tahoe',
      FB_STORIES: 'fb_stories',
      UNKNOWN: 'unknown',
    });
  },
  null
);
__d(
  'VideoPlayerImmediatePlayReason',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      WATCH_TIME_NOT_LOGGED: 'watch_time_not_logged',
    });
  },
  null
);
__d(
  'R2D2VideoMetadata',
  ['uuid'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = 1e3,
      h = 10;
    function a(a) {
      (this.$1 = a.video_id),
        (this.$2 = a.ad_client_token),
        (this.$3 = a.player_origin),
        (this.$4 = a.player_instance_key),
        (this.$6 = parseInt(a.playback_duration * g, h)),
        (this.$5 = b('uuid')());
    }
    a.prototype.toJSON = function () {
      return {
        video_id: this.$1,
        ad_client_token: this.$2,
        player_origin: this.$3,
        player_instance_key: this.$4,
        r2d2_session_id: this.$5,
        duration_ms: this.getDurationMs(),
      };
    };
    a.prototype.getVideoId = function () {
      return this.$1;
    };
    a.prototype.getDurationMs = function () {
      return parseInt(this.$6, h);
    };
    a.prototype.setDurationMs = function (a) {
      this.$6 = a;
    };
    e.exports = a;
  },
  null
);
__d(
  'R2D2VideoEventValidationSummary',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a() {
      (this.$2 = 0), (this.$1 = new Map());
    }
    a.prototype.addEvent = function (event) {
      this.$1.has(event) || this.$1.set(event, 0);
      var a = this.$1.get(event);
      this.$1.set(event, a + 1);
      this.$2++;
    };
    a.prototype.getEvents = function () {
      return this.$1;
    };
    a.prototype.getEventsCount = function () {
      return this.$2;
    };
    a.prototype.toJSON = function () {
      var a = {},
        b = [];
      this.$1.forEach(function (c, d) {
        (a[d] = c), b.push(d);
      });
      return {
        events_count: JSON.stringify(a),
        events_name: "['" + b.join("','") + "']",
      };
    };
    e.exports = a;
  },
  null
);
__d(
  'R2D2VideoWatchTimeSegment',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a, b) {
      (this.$1 = a), (this.$2 = b);
    }
    a.prototype.getStartTimeMs = function () {
      return this.$1;
    };
    a.prototype.getEndTimeMs = function () {
      return this.$2;
    };
    e.exports = a;
  },
  null
);
__d(
  'R2D2VideoState',
  ['R2D2VideoWatchTimeSegment'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a, b) {
      (this.$1 = a), (this.$2 = b), this.reset();
    }
    a.prototype.startPlaying = function (a) {
      this.$3 || ((this.$3 = !0), (this.$5 = a));
    };
    a.prototype.stopPlaying = function (a) {
      this.$3 && ((this.$3 = !1), this.addPlaySegment(this.$5, a));
    };
    a.prototype.addPlaySegment = function (a, c) {
      __p && __p();
      if (a >= c) return;
      c = new (b('R2D2VideoWatchTimeSegment'))(a, c);
      var d = !1;
      for (var e = 0; e < this.$6.length; e++)
        if (this.$6[e].getStartTimeMs() > a) {
          this.$6.splice(e, 0, c);
          d = !0;
          break;
        }
      d || this.$6.push(c);
    };
    a.prototype.setFinishedPlaying = function () {
      this.$4 = !0;
    };
    a.prototype.getFinishedPlaying = function () {
      return this.$4;
    };
    a.prototype.getVideoId = function () {
      return this.$1;
    };
    a.prototype.getDurationMs = function () {
      return this.$2;
    };
    a.prototype.getWatchedSegments = function () {
      return this.$6;
    };
    a.prototype.reset = function () {
      (this.$3 = !1), (this.$4 = !1), (this.$5 = 0), (this.$6 = []);
    };
    e.exports = a;
  },
  null
);
__d(
  'R2D2VideoSession',
  ['R2D2VideoState', 'R2D2VideoEventValidationSummary'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = 1e3,
      h = 30 * 60 * 1e3;
    function a(a, c, d) {
      (this.$4 = new (b('R2D2VideoState'))(a.getVideoId(), a.getDurationMs())),
        (this.$5 = c),
        (this.$6 = d),
        (this.$7 = a),
        (this.$8 = []),
        (this.$3 = !1),
        (this.$9 = new (b('R2D2VideoEventValidationSummary'))());
    }
    a.prototype.addEvent = function (event, a) {
      this.$5.processEvent(event, a, this.$4),
        this.$7.setDurationMs(a.playback_duration * g),
        (this.$2 = new Date()),
        (this.$3 = !0),
        this.$9.addEvent(event),
        this.$10(event, a);
    };
    a.prototype.$10 = function (event, a) {
      var b = {};
      b.Name = event;
      b.ClientTime = new Date();
      b.seq_num = a.seq_num;
      b.video_time_position = a.video_time_position;
      a.video_last_start_time_position !== undefined &&
        (b.video_last_start_time_position = a.video_last_start_time_position);
      this.$8.push(b);
    };
    a.prototype.hasUpdates = function () {
      return this.$3;
    };
    a.prototype.hasExpired = function () {
      return this.$2.getTime() <= Date.now() - h;
    };
    a.prototype.recalculateDelta = function () {
      var a = this.$6.calculateDelta(this.$1, this.$4);
      this.$8.forEach(function (b) {
        a.addDebugInfo(b);
      });
      this.$8 = [];
      this.$1 = a;
      this.$3 = !1;
      return a;
    };
    a.prototype.getMetadata = function () {
      return this.$7;
    };
    a.prototype.getDebugInfo = function () {
      return this.$8;
    };
    a.prototype.getEventValidationSummary = function () {
      return this.$9;
    };
    e.exports = a;
  },
  null
);
__d(
  'R2D2VideoStateMachine',
  ['VideoPlayerLoggerEvent'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = 1e3;
    function a() {}
    a.prototype.processEvent = function (event, a, c) {
      switch (event) {
        case b('VideoPlayerLoggerEvent').STARTED_PLAYING:
        case b('VideoPlayerLoggerEvent').UNPAUSED:
          c.startPlaying(a.video_time_position * g);
          break;
        case b('VideoPlayerLoggerEvent').FINISHED_PLAYING:
          c.stopPlaying(a.video_time_position * g);
          c.setFinishedPlaying();
          break;
        case b('VideoPlayerLoggerEvent').PAUSED:
          c.stopPlaying(a.video_time_position * g);
          break;
      }
    };
    e.exports = a;
  },
  null
);
__d(
  'R2D2FinishCountMetric',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = 'finish_count';
    a.prototype.compute = function (a) {
      return a.getFinishedPlaying() ? 1 : 0;
    };
    a.prototype.computeDelta = function (a, b) {
      return a - b;
    };
    a.prototype.getMetricName = function () {
      return g;
    };
    function a() {}
    e.exports = a;
  },
  null
);
__d(
  'R2D2UniqueTimeSpentMetric',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = 'unique_time_spent_ms';
    a.prototype.compute = function (a) {
      return this.$1(a);
    };
    a.prototype.computeDelta = function (a, b) {
      return a - b;
    };
    a.prototype.getMetricName = function () {
      return g;
    };
    a.prototype.$1 = function (a) {
      __p && __p();
      var b = 0,
        c = 0;
      a = a.getWatchedSegments();
      for (var d = 0; d < a.length; d++) {
        var e = a[d],
          f = e.getEndTimeMs();
        if (f > b) {
          f = Math.max(b, e.getStartTimeMs());
          c += e.getEndTimeMs() - f;
          b = e.getEndTimeMs();
        }
      }
      f = 10;
      return parseInt(c, f);
    };
    function a() {}
    e.exports = a;
  },
  null
);
__d(
  'R2D2PlayCountMetric',
  ['R2D2UniqueTimeSpentMetric'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = 'play_count';
    a.prototype.compute = function (a) {
      var c = new (b('R2D2UniqueTimeSpentMetric'))();
      return a.getWatchedSegments().length > 0 && c.compute(a) > 0 ? 1 : 0;
    };
    a.prototype.computeDelta = function (a, b) {
      return a - b;
    };
    a.prototype.getMetricName = function () {
      return g;
    };
    function a() {}
    e.exports = a;
  },
  null
);
__d(
  'R2D2VideoPlayRetention0to15s',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = 'video_play_retention_0_to_15s',
      h = 15,
      i = 0,
      j = 1e3;
    a.prototype.compute = function (a) {
      __p && __p();
      var b = new Array(h - i + 1);
      b.fill(0);
      a = a.getWatchedSegments();
      var c = 10;
      for (var d = 0; d < a.length; d++) {
        var e = parseInt(a[d].getStartTimeMs() / j, c),
          f = parseInt(a[d].getEndTimeMs() / j, c);
        for (var e = e; e <= f; e++)
          if (e >= i && e <= h) b[e - i] = 1;
          else if (e > h) break;
      }
      return b;
    };
    a.prototype.computeDelta = function (a, b) {
      var c = [];
      if (a.length !== b.length) return c;
      for (var d = 0; d < a.length; d++) c.push(a[d] - b[d]);
      return c;
    };
    a.prototype.getMetricName = function () {
      return g;
    };
    function a() {}
    e.exports = a;
  },
  null
);
__d(
  'R2D2VideoStateSummary',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a() {
      (this.$2 = []), (this.$1 = new Map());
    }
    a.prototype.getMetricValue = function (a) {
      return this.$1.get(a) || null;
    };
    a.prototype.setMetricValue = function (a, b) {
      this.$1.set(a, b);
    };
    a.prototype.toJSON = function () {
      var a = {};
      this.$1.forEach(
        function (b, c) {
          a[c] = this.$3(b);
        }.bind(this)
      );
      if (this.$2.length > 0) {
        var b = 'Debug Details';
        a[b] = JSON.stringify(this.$2);
      }
      return a;
    };
    a.prototype.addDebugInfo = function (a) {
      this.$2.push(a);
    };
    a.prototype.$3 = function (a) {
      return Array.isArray(a) ? '[' + a.toString() + ']' : a;
    };
    e.exports = a;
  },
  null
);
__d(
  'R2D2ViewCountMetric',
  ['R2D2UniqueTimeSpentMetric'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = 'view_count',
      h = 3e3,
      i = 0.97;
    a.prototype.compute = function (a) {
      var c = new (b('R2D2UniqueTimeSpentMetric'))();
      return c.compute(a) >= h ||
        (a.getDurationMs() > 0 && c.compute(a) >= a.getDurationMs() * i)
        ? 1
        : 0;
    };
    a.prototype.computeDelta = function (a, b) {
      return a - b;
    };
    a.prototype.getMetricName = function () {
      return g;
    };
    function a() {}
    e.exports = a;
  },
  null
);
__d(
  'R2D2ViewCountRetentionGraphMetric',
  ['R2D2ViewCountMetric'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = 'retention_graph',
      h = 4,
      i = 40,
      j = 1e3,
      k = 10;
    a.prototype.computeDelta = function (a, b) {
      if (a.length !== b.length) return [];
      var c = [];
      for (var d = 0; d < a.length; d++) c.push(a[d] - b[d]);
      return c;
    };
    a.prototype.getMetricName = function () {
      return g;
    };
    a.prototype.compute = function (a) {
      __p && __p();
      if (a.getDurationMs() <= 0) return [];
      var c = new (b('R2D2ViewCountMetric'))().compute(a),
        d = a.getDurationMs(),
        e = parseInt(((d - 1) / (j * h) + 1) * h, k);
      e = Math.min(e, i);
      var f = new Array(e + 1);
      f.fill(0);
      if (c == 0) return f;
      c = a.getWatchedSegments();
      for (var a = 0; a < c.length; a++) {
        var g = c[a],
          l = parseInt((e * g.getStartTimeMs()) / d, k);
        g = parseInt((e * g.getEndTimeMs()) / d, k);
        if (l <= g && l >= 0 && g <= e) for (var l = l; l <= g; l++) f[l] = 1;
      }
      return f;
    };
    function a() {}
    e.exports = a;
  },
  null
);
__d(
  'R2D2VideoStateSummaryCalculator',
  [
    'R2D2FinishCountMetric',
    'R2D2PlayCountMetric',
    'R2D2UniqueTimeSpentMetric',
    'R2D2VideoPlayRetention0to15s',
    'R2D2VideoStateSummary',
    'R2D2ViewCountMetric',
    'R2D2ViewCountRetentionGraphMetric',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a() {
      this.$1 = [
        new (b('R2D2UniqueTimeSpentMetric'))(),
        new (b('R2D2PlayCountMetric'))(),
        new (b('R2D2ViewCountMetric'))(),
        new (b('R2D2VideoPlayRetention0to15s'))(),
        new (b('R2D2FinishCountMetric'))(),
        new (b('R2D2ViewCountRetentionGraphMetric'))(),
      ];
    }
    a.prototype.calculateDelta = function (a, c) {
      __p && __p();
      var d = new (b('R2D2VideoStateSummary'))();
      this.$1.forEach(function (b) {
        var e = b.compute(c);
        if (a !== undefined) {
          var f = a.getMetricValue(b.getMetricName());
          e = b.computeDelta(e, f);
        }
        d.setMetricValue(b.getMetricName(), e);
      });
      return d;
    };
    e.exports = a;
  },
  null
);
__d(
  'R2D2Logger',
  [
    'Banzai',
    'R2D2VideoMetadata',
    'R2D2VideoSession',
    'R2D2VideoStateMachine',
    'R2D2VideoStateSummaryCalculator',
    'VideoPlayerStateBasedLoggingEvents',
    'gkx',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = 10 * 1e3,
      h = 'video_player',
      i = 'r2d2_summary',
      j = 'r2d2_event_validation';
    function a(a) {
      (this.$4 = a),
        (this.$2 = new (b('R2D2VideoStateSummaryCalculator'))()),
        (this.$1 = new Map());
    }
    a.prototype.setScriptPath = function (a) {
      this.$3 = a;
    };
    a.prototype.$5 = function (a, b) {
      return a + ':' + b;
    };
    a.prototype.addEvent = function (event, a) {
      if (this.shouldNotLogEvent(event)) return;
      var c = this.$5(a.player_instance_key, a.video_id),
        d = this.$1.get(c);
      d == null &&
        ((d = new (b('R2D2VideoSession'))(
          new (b('R2D2VideoMetadata'))(a),
          new (b('R2D2VideoStateMachine'))(),
          this.$2
        )),
        this.$1.set(c, d));
      d.addEvent(event, a);
      setTimeout(
        function () {
          return this.$6();
        }.bind(this),
        g
      );
    };
    a.prototype.$6 = function () {
      var a = [];
      this.$1.forEach(
        function (c, d) {
          var e = null;
          c.hasUpdates()
            ? (e = this.createR2D2SummaryLoggingData(
                c.getMetadata(),
                c.recalculateDelta(),
                i
              ))
            : c.hasExpired() &&
              (a.push(d),
              (e = this.createR2D2SummaryLoggingData(
                c.getMetadata(),
                c.getEventValidationSummary(),
                j
              )));
          e !== null && b('Banzai').post(h, e);
        }.bind(this)
      );
      a.forEach(
        function (a) {
          this.$1['delete'](a);
        }.bind(this)
      );
    };
    a.prototype.createR2D2SummaryLoggingData = function (a, b, event) {
      a = Object.assign(a.toJSON(), b.toJSON());
      return { event: event, logData: a, scriptPath: this.$3, source: this.$4 };
    };
    a.prototype.shouldLogForR2D2 = function () {
      return b('gkx')(
        'AT7jlJv9DbEnKNedHGdyr-TVhI_ulMo3WNph9a8Ltip2bVKjueYdorsoB4LbZB2k9do'
      );
    };
    a.prototype.shouldNotLogEvent = function (event) {
      var a = new Set(
        b('VideoPlayerStateBasedLoggingEvents').StateBasedLoggingEventNames
      );
      return !a.has(event);
    };
    e.exports = a;
  },
  null
);
__d(
  'VideoPlayerInitializationEvent',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      REQUESTED_PLAYING: 'requested_playing',
      STARTED_PLAYING: 'started_playing',
    });
  },
  null
);
__d(
  'VideoPlayerLoggerErrorStates',
  [],
  function (a, b, c, d, e, f) {
    e.exports = {
      PLAYBACK_FAILURE: 'playback_failure',
      PLAYER_FAILURE: 'player_failure',
    };
  },
  null
);
__d(
  'VideoPlayerLoggerErrors',
  [],
  function (a, b, c, d, e, f) {
    e.exports = {
      ENTERED_FALLBACK: 'entered_fallback',
      ERROR_CALLING_FLASH: 'error_calling_flash',
    };
  },
  null
);
__d(
  'VideoPlayerLoggerPlayerStates',
  [],
  function (a, b, c, d, e, f) {
    e.exports = { STARTED: 'started', UNPAUSED: 'unpaused' };
  },
  null
);
__d(
  'VideoPlayerLoggerSource',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      ADS: 'ads',
      ANIMATED_IMAGE_SHARE: 'animated_image_share',
      ASSET: 'asset',
      BROADCAST_REQUEST_ATTACHMENT: 'broadcast_request_attachment',
      CAMERA_POST: 'camera_post',
      CHAINED: 'chained',
      CHAINED_SUGGESTION: 'chained_suggestion',
      CHANNEL: 'channel',
      CONTINUE_WATCHING_RECOMMENDATION: 'continue_watching_recommendation',
      EMBEDDED: 'embedded',
      EMBEDDED_PAGE_PLUGIN: 'embedded_page_plugin',
      EMBEDDED_VIDEO: 'embedded_video',
      EMBEDDED_VIDEO_FROM_UFI: 'embedded_video_from_ufi',
      EMBEDDED_VIDEO_PREVIEW: 'embedded_video_preview',
      GAMEROOM_LIVE_VIDEO_HERO_BANNER: 'gameroom_live_video_hero_banner',
      GAMEROOM_LIVE_VIDEO_TAB: 'gameroom_live_video_tab',
      GAMEROOM_LIVE_VIDEO_THUMBNAIL: 'gameroom_live_video_thumbnail',
      GAMES_VIDEO_LIVE_RECOMMENDATION: 'games_video_live_recommendation',
      GAMES_VIDEO_HOME: 'games_video_home',
      GAMES_VIDEO_HOME_HERO: 'games_video_home_hero',
      GAMES_VIDEO_HOME_STREAMER_HUB: 'games_video_home_streamer_hub',
      GAMES_VIDEO_SINGLE_GAME: 'games_video_single_game',
      GAMES_VIDEO_SEARCH_UNIT: 'games_video_search_unit',
      GAMES_VIDEO_SOCIAL_PLUGIN: 'games_video_social_plugin',
      GAMES_VIDEO_HUB: 'games_video_hub',
      GAMES_VIDEO_HUB_REDIRECT_NOTIFICATION:
        'games_video_hub_redirect_notification',
      GAMES_VIDEO_HUB_REDIRECT_UNKNOWN: 'games_video_hub_redirect_unknown',
      GROUP_LIVE_VIDEO_MODULE: 'group_live_video_module',
      HTML5: 'html5',
      INLINE: 'inline',
      INSIGHTS: 'insights',
      INTERN_EXAMPLE: 'intern_example',
      ISSUES_MODULE: 'issues_module',
      LIVE_BEEPER: 'live_beeper',
      LIVE_CONTROL_PANEL: 'live_control_panel',
      LIVE_MAP: 'live_map',
      LIVE_MAP_LISTVIEW: 'live_map_listview',
      LIVE_MAP_SIDEBAR: 'live_map_sidebar',
      LIVE_MAP_TOOLTIP: 'live_map_tooltip',
      LIVE_MAP_TOOLTIP_FROM_LISTVIEW: 'live_map_tooltip_from_listview',
      LIVE_MAP_TOOLTIP_FROM_MAP: 'live_map_tooltip_from_map',
      LIVE_MAP_TOOLTIP_FROM_WEBGL: 'live_map_tooltip_from_webgl',
      LIVE_VIDEO_BROADCAST: 'live_video_broadcast',
      LIVE_VIDEO_PREVIEW: 'live_video_preview',
      LIVING_ROOM: 'living_room',
      LIVING_ROOM_RECAP_FULLSCREEN: 'living_room_recap_fullscreen',
      LIVING_ROOM_RECAP_INLINE: 'living_room_recap_inline',
      LOOKBACK: 'lookback',
      MEDIA_COLLAGE: 'media_collage',
      MEMORY_LEAK_TEST: 'memory_leak_test',
      MESSAGING: 'messaging',
      MISC: 'misc',
      MOBILE: 'mobile',
      NOT_SPECIFIED_PLEASE_FIX: 'not_specified_please_fix',
      OFFERS_DETAIL: 'offers_detail',
      PAGE_LIVE_VIDEO_MODULE: 'page_live_video_module',
      PAGES_FINCH_MAIN_VIDEO: 'pages_finch_main_video',
      PAGES_FINCH_THUMBNAIL_VIDEO: 'pages_finch_thumbnail_video',
      PAGES_FINCH_TRAILER: 'pages_finch_trailer',
      PAGES_VIDEO_SET: 'pages_video_set',
      PAGES_COVER: 'pages_cover',
      PAGES_TIMELINE_PAGES_COVER: 'pages_timeline_pages_cover',
      PAGES_COVER_HOVER: 'pages_cover_hover',
      PAGES_HOME_HERO: 'pages_home_hero',
      VIDEO_PAGE_SPOTLIGHT_UNIT: 'video_page_spotlight_unit',
      VIDEO_PAGE_VIDEO_LIST: 'video_page_video_list',
      PERMALINK: 'permalink',
      PROFILE_OVERVIEW: 'profile_overview',
      PROFILE_COVER: 'profile_cover',
      PROFILE_VIDEO: 'profile_video',
      PROFILE_VIDEO_HOVERCARD: 'profile_video_hovercard',
      PROFILE_VIDEO_THUMB: 'profile_video_thumb',
      REPORT_FLOW: 'report_flow',
      REVIEW: 'review',
      SEARCH_LIVE_VIDEO_MODULE: 'search_live_video_module',
      SERP_VIDEOS_TAB: 'serp_videos_tab',
      SLIDESHOW: 'slideshow',
      SNOWLIFT: 'snowlift',
      SRT_REVIEW: 'srt_review',
      TAHOE: 'tahoe',
      TOPIC_CHANNEL_LIVING_ROOM: 'topic_channel_living_room',
      TOPIC_GAMING: 'topic_gaming',
      TRAILER_OG_ATTACHMENT: 'trailer_og_attachment',
      TRAILER_TIMELINE_COLLECTIONS: 'trailer_timeline_collections',
      TRAILER_TIMELINE_UNIT: 'trailer_timeline_unit',
      TRIVIA_GAME_ADMIN_DASHBOARD: 'trivia_game_admin_dashboard',
      TV: 'tv',
      USER_VIDEO_TAB: 'user_video_tab',
      VIDEO_COPYRIGHT_PREVIEW: 'video_copyright_preview',
      VIDEO_HOME_INLINE: 'video_home_inline',
      VIDEO_HOME_EXPLORE: 'discover',
      VIDEO_HOME_WATCHLIST: 'watchlist',
      VIDEO_INLINE_CHAINING: 'video_inline_chaining',
      VIDEOHUB_FEATURED: 'videohub_featured',
      VIDEOHUB_LIVE: 'videohub_live',
      VIDEOHUB_PLAYLIST: 'videohub_playlist',
      WATCH_SCROLL: 'watch_scroll',
      UFI_COMMENT_ATTACHMENT: 'ufi_comment_attachment',
      LIVE_AUTOPLAY_WATCH_AND_SCROLL: 'live_autoplay_watch_and_scroll',
      GAMES_VIDEO_STREAMER_SEARCH_UNIT: 'games_video_streamer_unit',
      GAMES_STREAMER_DASHBOARD: 'games_streamer_dashboard',
      ADS_PREVIEW: 'ads_preview',
    });
  },
  null
);
__d(
  'VideoPlayerLogger',
  [
    'invariant',
    'Banzai',
    'FBLogger',
    'R2D2Logger',
    'VideoPlayerExperiments',
    'VideoPlayerHTML5Experiments',
    'VideoPlayerInitializationEvent',
    'VideoPlayerLoggerErrors',
    'VideoPlayerLoggerErrorStates',
    'VideoPlayerLoggerEvent',
    'VideoPlayerLoggerFallbackReasons',
    'VideoPlayerLoggerPlayerStates',
    'VideoPlayerLoggerSource',
    'performanceAbsoluteNow',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h = b('VideoPlayerHTML5Experiments').useBanzaiVitalForLive,
      i = b('VideoPlayerHTML5Experiments').discerningAbandonStallLogging,
      j = 'video_player',
      k = 5e3,
      l = function () {
        return b('VideoPlayerHTML5Experiments').useMonotonicallyIncreasingTimers
          ? b('performanceAbsoluteNow')()
          : Date.now();
      };
    function a(a, c) {
      (this.$2 = a),
        (this.$3 = null),
        (this.$6 = {}),
        (this.$4 = c),
        (this.$8 = 0),
        (this.$9 = 0),
        (this.$10 = 0),
        (this.$11 = 0),
        (this.$7 = []),
        (this.$19 = 0),
        (this.$20 = 0),
        (this.$12 = 0),
        (this.$27 = !1),
        (this.$16 = !1),
        this.$29(),
        this.$30(),
        (this.$28 = new (b('R2D2Logger'))(this.$2));
    }
    a.prototype.updateSource = function (a) {
      this.$2 = a;
    };
    a.prototype.getSource = function () {
      return this.$2;
    };
    a.prototype.logEvent = function (event, a) {
      __p && __p();
      a = babelHelpers['extends']({}, a, this.$4);
      a.initial_event = !Object.prototype.hasOwnProperty.call(this.$6, event);
      Object.prototype.hasOwnProperty.call(a, 'time_ms') || (a.time_ms = l());
      Object.prototype.hasOwnProperty.call(a, 'time') ||
        (a.time = Math.round(a.time_ms / 1e3));
      a.is_stalling = this.$31();
      a.error_user_info = this.$32(a.error_user_info);
      this.$3 && Object.assign(a, this.$3);
      switch (event) {
        case b('VideoPlayerLoggerEvent').PAUSED:
        case b('VideoPlayerLoggerEvent').FINISHED_PLAYING:
          if (this.$24) {
            var c = this.$24,
              d = c.getABREvaluation();
            a.ideal_samples = d.idealSamples;
            a.conservative_samples = d.conservativeSamples;
            a.aggressive_samples = d.aggressiveSamples;
            a.conservative_resolution_constrained_samples =
              d.conservativeResolutionConstrainedSamples;
            a.last_quality_switch_reason = d.lastQualitySwitchReason;
            a.reason && c.setLastQualitySwitchReason(a.reason);
          }
          d = typeof this.$25 === 'function' && this.$25();
          c = typeof this.$26 === 'function' && this.$26();
          typeof c === 'number' &&
            typeof d === 'number' &&
            ((a.dropped_frame_count = d), (a.total_frame_count = c));
          break;
      }
      switch (event) {
        case b('VideoPlayerLoggerEvent').STARTED_PLAYING:
        case b('VideoPlayerLoggerEvent').UNPAUSED:
          this.$27 = !0;
          break;
        case b('VideoPlayerLoggerEvent').FINISHED_PLAYING:
        case b('VideoPlayerLoggerEvent').ERROR:
        case b('VideoPlayerLoggerEvent').PAUSED:
          this.$27 = !1;
          break;
      }
      switch (event) {
        case b('VideoPlayerLoggerEvent').REQUESTED_PLAYING:
          this.$29();
          this.$33();
          this.$6[b('VideoPlayerLoggerEvent').STARTED_PLAYING]
            ? (a.state = b('VideoPlayerLoggerPlayerStates').UNPAUSED)
            : (a.state = b('VideoPlayerLoggerPlayerStates').STARTED);
          break;
        case b('VideoPlayerLoggerEvent').STARTED_PLAYING:
        case b('VideoPlayerLoggerEvent').UNPAUSED:
        case b('VideoPlayerLoggerEvent').FINISHED_PLAYING:
        case b('VideoPlayerLoggerEvent').CANCELLED_REQUESTED_PLAYING:
        case b('VideoPlayerLoggerEvent').ERROR:
        case b('VideoPlayerLoggerEvent').PAUSED:
        case b('VideoPlayerLoggerEvent').REPRESENTATION_ENDED:
        case b('VideoPlayerLoggerEvent').HEART_BEAT:
          if (
            event === b('VideoPlayerLoggerEvent').ERROR &&
            b('VideoPlayerExperiments').disableStallLoggingForError
          )
            break;
          if (
            event == b('VideoPlayerLoggerEvent').REPRESENTATION_ENDED &&
            !this.$6[b('VideoPlayerLoggerEvent').STARTED_PLAYING]
          )
            break;
          if (
            event === b('VideoPlayerLoggerEvent').HEART_BEAT &&
            (!this.$6[b('VideoPlayerLoggerEvent').STARTED_PLAYING] ||
              !b('VideoPlayerHTML5Experiments').heartbeatUpdateWatchTimeV2 ||
              this.$31())
          )
            break;
          event === b('VideoPlayerLoggerEvent').HEART_BEAT &&
            (a.v2_heart_beat = !0);
          (event === b('VideoPlayerLoggerEvent').STARTED_PLAYING ||
            event === b('VideoPlayerLoggerEvent').UNPAUSED) &&
            ((this.$12 = a.time_ms), this.$34());
          if (
            event === b('VideoPlayerLoggerEvent').ERROR &&
            a.state !== b('VideoPlayerLoggerErrorStates').PLAYBACK_FAILURE
          )
            break;
          event === b('VideoPlayerLoggerEvent').CANCELLED_REQUESTED_PLAYING &&
            (this.$6[b('VideoPlayerLoggerEvent').STARTED_PLAYING]
              ? (a.state = b('VideoPlayerLoggerPlayerStates').UNPAUSED)
              : (a.state = b('VideoPlayerLoggerPlayerStates').STARTED));
          this.$35();
          this.$36();
          (event === b('VideoPlayerLoggerEvent').PAUSED ||
            event === b('VideoPlayerLoggerEvent').FINISHED_PLAYING) &&
            (i &&
              event === b('VideoPlayerLoggerEvent').FINISHED_PLAYING &&
              this.$34(),
            (a.recent_stalls_count = this.$37()));
          this.$38();
          this.$39(a);
          this.$40(a);
          this.$30();
          i && this.$34();
          this.$29();
          break;
      }
      d = { logData: a, event: event, scriptPath: this.$1, source: this.$2 };
      event || b('FBLogger')('video').warn('Missing event name');
      this.$6[event] = !0;
      if (this.$2 === b('VideoPlayerLoggerSource').ANIMATED_IMAGE_SHARE)
        return null;
      a.ad_client_token || (h && a.playback_is_live_streaming)
        ? b('Banzai').post(j, d, b('Banzai').VITAL)
        : b('VideoPlayerHTML5Experiments').useVitalForClosing &&
          (event === b('VideoPlayerLoggerEvent').PAUSED ||
            event === b('VideoPlayerLoggerEvent').FINISHED_PLAYING ||
            event === b('VideoPlayerLoggerEvent').HEART_BEAT)
        ? b('Banzai').post(j, d, b('Banzai').VITAL)
        : b('VideoPlayerHTML5Experiments').useVitalForOpening &&
          (event === b('VideoPlayerLoggerEvent').UNPAUSED ||
            event === b('VideoPlayerLoggerEvent').STARTED_PLAYING)
        ? b('Banzai').post(j, d, b('Banzai').VITAL)
        : b('Banzai').post(j, d);
      this.$28.shouldLogForR2D2() && this.$28.addEvent(event, a);
      return d;
    };
    a.prototype.setScriptPath = function (a) {
      (this.$1 = a), this.$28.setScriptPath(a);
    };
    a.prototype.setFTData = function (a) {
      this.$3 = a;
    };
    a.prototype.setABRQualityTracker = function (a) {
      this.$24 = a;
    };
    a.prototype.setFrameCountGetters = function (a, b) {
      (this.$25 = a), (this.$26 = b);
    };
    a.prototype.startBuffering = function (a) {
      this.$33(a);
    };
    a.prototype.endBuffering = function () {
      this.$36(), this.$41(), this.$35(), this.$38();
    };
    a.prototype.startInterrupt = function () {
      this.$42();
    };
    a.prototype.endInterrupt = function () {
      this.$36(), this.$41();
    };
    a.prototype.$31 = function () {
      return this.$15 > 0;
    };
    a.prototype.$33 = function (a) {
      if (this.$31()) return;
      this.$16 = this.$27;
      this.$15 = Date.now();
      a !== undefined &&
        this.$6[b('VideoPlayerLoggerEvent').STARTED_PLAYING] &&
        (this.$17 = a);
    };
    a.prototype.$42 = function () {
      if (this.$43()) return;
      this.$21 = Date.now();
    };
    a.prototype.$43 = function () {
      return this.$21 > 0;
    };
    a.prototype.$44 = function () {
      return !this.$43() ? 0 : Date.now() - this.$21;
    };
    a.prototype.$45 = function () {
      return this.$31() ? Date.now() - this.$15 : 0;
    };
    a.prototype.$36 = function () {
      if (this.$43()) {
        var a = this.$44();
        this.$22 += a;
        this.$20 += a;
        this.$23 += 1;
        this.$19 += 1;
      }
    };
    a.prototype.$41 = function () {
      this.$43() && (this.$21 = 0);
    };
    a.prototype.$30 = function () {
      (this.$22 = 0), (this.$23 = 0), this.$41();
    };
    a.prototype.$35 = function () {
      __p && __p();
      if (this.$31()) {
        var a = this.$45();
        this.$17 !== null && (this.$18 = a);
        this.$14 += a;
        this.$9 += a;
        this.$13++;
        this.$8++;
        this.$16 && ((this.$11 += a), this.$10++, (this.$16 = !1));
        i && this.$7.push(l());
      }
    };
    a.prototype.$38 = function () {
      this.$31() && (this.$15 = 0);
    };
    a.prototype.$32 = function (a) {
      return a && typeof a === 'object' ? JSON.stringify(a) : a;
    };
    a.prototype.getCumulativeStallCount = function () {
      return this.$8;
    };
    a.prototype.getCumulativeInPlayStallCount = function () {
      return this.$10;
    };
    a.prototype.getStallCount = function () {
      return this.$13;
    };
    a.prototype.getCumulativeStallTime = function () {
      return this.$9 + this.$45();
    };
    a.prototype.getCumulativeInPlayStallTime = function () {
      return this.$11 + (this.$16 ? this.$45() : 0);
    };
    a.prototype.getCumulativeInterruptCount = function () {
      return this.$19;
    };
    a.prototype.getCumulativeInterruptTime = function () {
      return this.$20 + this.$44();
    };
    a.prototype.$39 = function (a) {
      (a.stall_time = Math.max(0, this.$14)),
        (a.stall_count = this.$13),
        this.$18 &&
          ((a.first_stall_time = this.$18),
          (a.first_stall_start_position = this.$17));
    };
    a.prototype.$40 = function (a) {
      (a.interrupt_time = Math.max(0, this.$22)),
        (a.interrupt_count = this.$23);
    };
    a.prototype.$37 = function () {
      var a = l(),
        b = a - k;
      this.$7 = this.$7.filter(function (a) {
        return a >= b;
      });
      i || (this.$13 > 0 && this.$7.push(a));
      return this.$7.length;
    };
    a.prototype.$29 = function () {
      (this.$14 = 0),
        (this.$15 = 0),
        (this.$13 = 0),
        (this.$17 = null),
        (this.$18 = 0);
    };
    a.prototype.$34 = function () {
      this.$7 = [];
    };
    a.prototype.getFTdata = function () {
      return this.$3;
    };
    a.Sources = b('VideoPlayerLoggerSource');
    a.Errors = b('VideoPlayerLoggerErrors');
    a.FallbackReasons = b('VideoPlayerLoggerFallbackReasons');
    a.ErrorStates = b('VideoPlayerLoggerErrorStates');
    a.PlayerStates = b('VideoPlayerLoggerPlayerStates');
    e.exports = a;
  },
  null
);
__d(
  'VideoPlayerOrigins',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      UNKNOWN: 'unknown',
      NEWSFEED: 'newsfeed',
      USER_TIMELINE: 'user_timeline',
      PAGE_TIMELINE: 'page_timeline',
      PARENT_PAGE_TIMELINE: 'parent_page_timeline',
      PERMALINK: 'permalink',
      GROUP: 'group',
      CONNECTED_TV: 'connected_tv',
      CONNECTED_TV_DISCOVERY: 'connected_tv_discovery',
      CONNECTED_TV_PLAYER: 'connected_tv_player',
      CONNECTED_TV_PROFILE: 'connected_tv_profile',
      CONNECTED_TV_SAMSUNG_EDEN_TILE: 'connected_tv_samsung_eden_tile',
      CONNECTED_TV_SAMSUNG_LC: 'connected_tv_samsung_lc',
      SOCIAL_PLAYER: 'social_player',
      VIDEO_HOME: 'video_home',
      VIDEO_HOME_FEED: 'video_home_feed',
      VIDEO_HOME_REACTION: 'video_home_reaction',
      VIDEO_HOME_MAIN: 'video_home_main',
      VIDEO_HOME_GUIDE: 'video_home_guide',
      VIDEO_TAB: 'video_tab',
      EXTERNAL: 'external',
      INSTANT_ARTICLES: 'instant_articles',
      INTERN: 'intern',
      BACKSTAGE: 'backstage',
      INSTANT_SHOPPING: 'instant_shopping',
      REDSPACE: 'redspace',
      SAVED: 'saved',
      SEARCH: 'search',
      NOTIFICATIONS: 'notifications',
      LIVE_CONTROL_PANEL: 'live_control_panel',
      LIVE_DISCOVERY: 'live_discovery',
      LIVE_MAP: 'live_map',
      LIVE_REDIRECT: 'live_redirect',
      LIVE_EMBED_REDIRECT: 'live_embed_redirect',
      LOCAL_NEWS: 'local_news',
      MOVIE_CHECKOUT_FLOW: 'movie_checkout_flow',
      PAGES_MODULE: 'pages_module',
      PAGES_VIDEO_TAB: 'pages_video_tab',
      BUSINESS_PAGE_VIDEO_EDUCATION_UNIT: 'business_page_video_education_unit',
      BUSINESS_PAGE_VIDEO_EDUCATION_DIALOG:
        'business_page_video_education_dialog',
      PROMOTIONS_MANAGER_INSPIRATION_GALLERY:
        'promotions_manager_inspiration_gallery',
      BACKGROUND_PLAY: 'background_play',
      QUICK_PROMOTION: 'quick_promotion',
      CULTURAL_MOMENTS_SHARE: 'cultural_moments_share',
      CULTURAL_MOMENTS_PROMOTION: 'cm_promotion',
      DAILY_DIALOGUE_PINNED_UNIT: 'dd_pinned',
      SPHERIAL_VIDEO_EDITING: 'spherial_video_editing',
      EXPLORE_FEED: 'explorefeed',
      RHC: 'rhc',
      ADS: 'ads',
      CANVAS: 'canvas',
      COMMERCE: 'commerce',
      COMPOSER: 'composer',
      DASH: 'dash',
      FACEWEB: 'faceweb',
      FEEDBACK: 'feedback',
      FRIENDS: 'friends',
      EVENTS: 'events',
      HELP: 'help',
      INFRASTRUCTURE: 'infrastructure',
      LOGIN: 'login',
      MARKETING: 'marketing',
      MESSAGING: 'messaging',
      NAVIGATION: 'navigation',
      PHOTOS: 'photos',
      PRIVACY: 'privacy',
      SETTINGS: 'settings',
      STORY_VIEW: 'story_view',
      WEBVIEW: 'webview',
      TRENDING: 'trending',
      FACECAST_NUX: 'facecast_nux',
      PIXELCLOUD: 'pixelcloud',
      PROTON: 'proton',
      TAROT: 'tarot',
      GAMEROOM: 'gameroom',
      GAMES_VIDEO_HUB: 'games_video_hub',
      LEARN: 'learn',
      BEEPER: 'beeper',
      FACECAST_BEEPER: 'facecast_beeper',
      JOB_SEARCH: 'job_search',
      TOP_LIVE_BOOKMARK: 'top_live_bookmark',
      AUTODOWNLOAD: 'autodownload',
      FB_STORIES: 'fb_stories',
      DIRECT_INBOX: 'direct_inbox',
      COMMENT: 'comment',
      LIVE_VIDEO_END_SCREEN: 'live_video_end_screen',
      MEDIA_GALLERY: 'media_gallery',
      MOMENTS: 'moments',
      PHOTOSFEED: 'photosfeed',
      SIMPLE_PICKER: 'simple_picker',
      VIDEO_EDITING_GALLERY: 'video_editing_gallery',
      ALBUM: 'album',
      OFFERS: 'offers',
      MESSENGER_THREAD: 'messenger_thread',
      MESSENGER_MONTAGE: 'messenger_montage',
      MESSENGER_GIF: 'messenger_gif',
      SHARED_VIDEO: 'shared_video',
      VISUAL_POLL_GIF: 'visual_poll_gif',
      LIVING_ROOM: 'living_room',
      LIVE_CHAINING: 'live_chaining',
      BRANDED_CONTENT: 'branded_content',
      LIVING_ROOM_RECAP: 'living_room_recap',
      POLITICAL_AD_ARCHIVE: 'political_ad_archive',
      MESSENGER_ADS: 'messenger_ads',
      VIDEO_PAGE_VIDEO_LIST: 'video_page_video_list',
      HASHTAG_DISCOVERY: 'hashtag_discovery',
      VIDEO_GIF_CREATION: 'video_gif_creation',
      VIEW_ADS: 'view_ads',
      GAME_GROUP_RHC: 'game_group_rhc',
      GAME_PAGE_RHC: 'game_page_rhc',
      LOL_CURATION: 'lol_curation',
      SEARCH_VOYAGER: 'search_voyager',
      KOTOTORO: 'kototoro',
    });
  },
  null
);
__d(
  'VideoPlayerReasonTransitionHelper',
  ['VideoPlayerReasonTransitionExperiment'],
  function (a, b, c, d, e, f) {
    function a(a) {
      this.$1 = a;
    }
    a.prototype.getReason = function () {
      return !b('VideoPlayerReasonTransitionExperiment').provideReason
        ? null
        : this.$1;
    };
    e.exports = a;
  },
  null
);
__d(
  'CacheStorage',
  [
    'ErrorUtils',
    'EventListener',
    'ExecutionEnvironment',
    'FBJSON',
    'WebStorage',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g,
      h,
      i = '_@_',
      j = '3b',
      k = 'CacheStorageVersion';
    function a(a) {
      this._store = a;
    }
    a.prototype.getStore = function () {
      return this._store;
    };
    a.prototype.keys = function () {
      var a = [];
      for (var b = 0; b < this._store.length; b++) a.push(this._store.key(b));
      return a;
    };
    a.prototype.get = function (a) {
      return this._store.getItem(a);
    };
    a.prototype.set = function (a, b) {
      this._store.setItem(a, b);
    };
    a.prototype.remove = function (a) {
      this._store.removeItem(a);
    };
    a.prototype.clear = function () {
      this._store.clear();
    };
    f = babelHelpers.inherits(c, a);
    g = f && f.prototype;
    function c() {
      g.constructor.call(this, b('WebStorage').getLocalStorage());
    }
    c.available = function () {
      return !!b('WebStorage').getLocalStorage();
    };
    f = babelHelpers.inherits(d, a);
    h = f && f.prototype;
    function d() {
      h.constructor.call(this, b('WebStorage').getSessionStorage());
    }
    d.available = function () {
      return !!b('WebStorage').getSessionStorage();
    };
    function l() {
      this._store = {};
    }
    l.prototype.getStore = function () {
      return this._store;
    };
    l.prototype.keys = function () {
      return Object.keys(this._store);
    };
    l.prototype.get = function (a) {
      return this._store[a] === undefined ? null : this._store[a];
    };
    l.prototype.set = function (a, b) {
      this._store[a] = b;
    };
    l.prototype.remove = function (a) {
      a in this._store && delete this._store[a];
    };
    l.prototype.clear = function () {
      this._store = {};
    };
    l.available = function () {
      return !0;
    };
    var m = { memory: l, localstorage: c, sessionstorage: d };
    function n(a, c) {
      __p && __p();
      this._exceptionMessage = null;
      this._key_prefix = c || '_cs_';
      if (a == 'AUTO' || !a)
        for (var d in m) {
          c = m[d];
          if (c.available()) {
            a = d;
            break;
          }
        }
      a &&
        (!m[a] || !m[a].available()
          ? (b('ExecutionEnvironment').canUseDOM, (this._backend = new l()))
          : (this._backend = new m[a]()));
      c = this.useBrowserStorage();
      c &&
        b('EventListener').listen(
          window,
          'storage',
          this._onBrowserValueChanged.bind(this)
        );
      a = c ? this._backend.getStore().getItem(k) : this._backend.getStore()[k];
      a !== j && this.clear();
    }
    n.prototype.useBrowserStorage = function () {
      return (
        this._backend.getStore() === b('WebStorage').getLocalStorage() ||
        this._backend.getStore() === b('WebStorage').getSessionStorage()
      );
    };
    n.prototype.addValueChangeCallback = function (a) {
      this._changeCallbacks = this._changeCallbacks || [];
      this._changeCallbacks.push(a);
      return {
        remove: function () {
          this._changeCallbacks.slice(this._changeCallbacks.indexOf(a), 1);
        }.bind(this),
      };
    };
    n.prototype._onBrowserValueChanged = function (a) {
      this._changeCallbacks &&
        String(a.key).startsWith(this._key_prefix) &&
        this._changeCallbacks.forEach(function (b) {
          b(a.key, a.oldValue, a.newValue);
        });
    };
    n.prototype.keys = function () {
      var a = [];
      b('ErrorUtils').guard(
        function () {
          if (this._backend) {
            var b = this._backend.keys(),
              c = this._key_prefix.length;
            for (var d = 0; d < b.length; d++)
              b[d].substr(0, c) == this._key_prefix && a.push(b[d].substr(c));
          }
        }.bind(this),
        'CacheStorage'
      )();
      return a;
    };
    n.prototype.set = function (a, c, d) {
      __p && __p();
      if (this._backend) {
        var e;
        typeof c === 'string'
          ? (e = i + c)
          : !d
          ? ((e = { __t: Date.now(), __v: c }), (e = b('FBJSON').stringify(e)))
          : (e = b('FBJSON').stringify(c));
        d = this._backend;
        c = this._key_prefix + a;
        a = !0;
        var f = null;
        while (a)
          try {
            (f = null), d.set(c, e), (a = !1);
          } catch (b) {
            f = b;
            var g = d.keys().length;
            this._evictCacheEntries();
            a = d.keys().length < g;
          }
        if (f !== null) {
          this._exceptionMessage = f.message;
          return !1;
        } else {
          this._exceptionMessage = null;
          return !0;
        }
      }
      this._exceptionMessage = 'no back end';
      return !1;
    };
    n.prototype.getLastSetExceptionMessage = function () {
      return this._exceptionMessage;
    };
    n.prototype.getStorageKeyCount = function () {
      var a = this._backend;
      return a ? a.keys().length : 0;
    };
    n.prototype._evictCacheEntries = function () {
      __p && __p();
      var a = [],
        c = this._backend;
      c.keys().forEach(function (d) {
        __p && __p();
        if (d === k) return;
        var f = c.get(d);
        if (f === undefined) {
          c.remove(d);
          return;
        }
        if (n._hasMagicPrefix(f)) return;
        try {
          f = b('FBJSON').parse(f, e.id);
        } catch (a) {
          c.remove(d);
          return;
        }
        f && f.__t !== undefined && f.__v !== undefined && a.push([d, f.__t]);
      });
      a.sort(function (a, b) {
        return a[1] - b[1];
      });
      for (var d = 0; d < Math.ceil(a.length / 2); d++) c.remove(a[d][0]);
    };
    n.prototype.get = function (a, c) {
      __p && __p();
      var d;
      if (this._backend) {
        b('ErrorUtils').applyWithGuard(
          function () {
            d = this._backend.get(this._key_prefix + a);
          },
          this,
          null,
          function () {
            d = null;
          },
          'CacheStorage:get'
        );
        if (d !== null)
          if (n._hasMagicPrefix(d)) d = d.substr(i.length);
          else
            try {
              (d = b('FBJSON').parse(d, e.id)),
                d && d.__t !== undefined && d.__v !== undefined && (d = d.__v);
            } catch (a) {
              d = undefined;
            }
        else d = undefined;
      }
      d === undefined && c !== undefined && ((d = c), this.set(a, d));
      return d;
    };
    n.prototype.remove = function (a) {
      this._backend &&
        b('ErrorUtils').applyWithGuard(
          this._backend.remove,
          this._backend,
          [this._key_prefix + a],
          null,
          'CacheStorage:remove'
        );
    };
    n.prototype.clear = function () {
      this._backend &&
        (b('ErrorUtils').applyWithGuard(
          this._backend.clear,
          this._backend,
          null,
          null,
          null,
          'CacheStorage:clear'
        ),
        this.useBrowserStorage()
          ? this._backend.getStore().setItem(k, j)
          : (this._backend.getStore()[k] = j));
    };
    n.getAllStorageTypes = function () {
      return Object.keys(m);
    };
    n._hasMagicPrefix = function (a) {
      return a.substr(0, i.length) === i;
    };
    e.exports = n;
  },
  null
);
__d(
  'VideoPlayerShakaBandwidthEstimator',
  ['CacheStorage', 'Run', 'VideoPlayerShakaGlobalConfig', 'requireWeak'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g;
    b('requireWeak')('Shaka', function (a) {
      g = a.util.EWMACacheBandwidthEstimator;
    });
    var h = null,
      i = !1;
    function j() {
      var a = new (b('CacheStorage'))('localstorage', '_video_'),
        c = a.get('bandwidthEstimate');
      this.$1 = {
        isMockObject: !0,
        getBandwidth: function (a) {
          return c;
        },
        getFastMovingBandwidth: function () {
          return c;
        },
      };
      g &&
        ((this.$1 = new g(
          b('VideoPlayerShakaGlobalConfig').getNumber('cache_delay', 30),
          b('VideoPlayerShakaGlobalConfig').getNumber('cache_bandwidth', 2e6),
          c
        )),
        (this.$1.isMockObject = !1));
      b('Run').onUnload(
        function () {
          a.set('bandwidthEstimate', this.$1.getBandwidth());
        }.bind(this)
      );
    }
    j.prototype.getEstimator = function () {
      return this.$1;
    };
    j.getInstance = function () {
      (h === null || (h.getEstimator().isMockObject && g)) && (h = new j());
      return h;
    };
    j.getEstimator = function () {
      return j.getInstance().getEstimator();
    };
    j.getBandwidth = function (a) {
      var b = j.getEstimator();
      return b.getBandwidth(a);
    };
    j.getBandwidthByVideoType = function (a) {
      return j.getBandwidth(j.getBandwidthModel(a));
    };
    j.getBandwidthModel = function (a) {
      return a ? 'aggressive' : 'conservative';
    };
    j.isAutoplayBandwidthRestrained = function (a) {
      var c = j.getEstimator(),
        d;
      b('VideoPlayerShakaGlobalConfig').getBool(
        'block_autoplay_use_fast_moving_average',
        !0
      ) && i
        ? (d = c.getFastMovingBandwidth())
        : (d = c.getBandwidth());
      c = a
        ? b('VideoPlayerShakaGlobalConfig').getNumber(
            'live_block_autoplay_bandwidth_threshold',
            25e4
          )
        : b('VideoPlayerShakaGlobalConfig').getNumber(
            'block_autoplay_bandwidth_threshold',
            123034
          );
      d === null || d >= c ? (i = !1) : (i = !0);
      return i;
    };
    e.exports = j;
  },
  null
);
__d(
  'ContextualConfigConstants',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    a = 1e3;
    b = ', ';
    c = {
      SAME: 'same',
      OOR: 'oor',
      CCR: 'ccr',
      OCR: 'ocr',
      COR: 'cor',
      LT: 'lt',
      LTE: 'lte',
      EQ: 'eq',
      NEQ: 'neq',
      GT: 'gt',
      GTE: 'gte',
      IN: 'in',
      NIN: 'nin',
      CONTAINS: 'contains',
      REGEX: 'regex',
    };
    d = {
      DENSE: 'dense',
      MULTI_OUTPUT_RESOLVED: 'multi-output-resolved',
      TABLE: 'table',
    };
    f = [];
    var g = f,
      h = f;
    f = f;
    var i = {
        BAD_BOOLEAN_FORMAT: 'Bad boolean format',
        BAD_CONFIG: 'Bad config',
        BAD_CONTEXT_IDENTIFIER: 'Bad context identifier',
        BAD_CONTEXT_VALUE: 'Bad context value',
        BAD_MONITORED_CONTEXTS: 'Bad monitored contexts',
        BAD_NUMBER_FORMAT: 'Bad number format',
        BAD_OUTPUT_NAME: 'Bad output name',
        BAD_OUTPUT_TYPE: 'Bad output type',
        BAD_VALUE_ORDER: 'Bad values order',
        DUPLICATE_OUTPUT_NAME: 'Duplicate output name',
        ILLEGAL_BOOLEAN_STRATEGY: 'Illegal boolean strategy',
        ILLEGAL_BUCKET_VALUES: 'Illegal bucket values',
        ILLEGAL_NUMERIC_STRATEGY: 'Illegal numeric strategy',
        ILLEGAL_STRING_STRATEGY: 'Illegal string strategy',
        INVALID_BOOLEAN: 'Invalid boolean',
        INVALID_FLOAT: 'Invalid float',
        INVALID_INTEGER: 'Invalid integer',
        INVALID_STRING: 'Invalid string',
        INVALID_VALUE_TYPE: 'Invalid value type',
        MISMATCH_NUMBER_OF_VALUES: 'Mismatching number of values',
        MISSING_BUCKETS: 'Missing buckets',
        MISSING_BUCKET_MATCH: 'Missing bucket match',
        MISSING_BUCKET_NAME: 'Missing bucket name',
        MISSING_BUCKET_STRATEGY: 'Missing bucket strategy',
        MISSING_CONTEXT_IN_CONFIG: 'Missing context in config',
        MISSING_DEFAULT_VALUE: 'Missing default value',
        MISSING_OUTPUTS_DEFINITION: 'Missing outputs field definition',
        MISSING_RESULTS: 'Missing results',
        MISSING_TABLE: 'Missing table',
        MISSING_TABLE_ITEM_BUCKET: 'Missing table item bucket',
        MISSING_TABLE_ITEM_VALUES: 'Missing table item values',
        MISSING_VECTOR: 'Missing vector',
        REGEX_SYNTAX_ERROR: 'Regex syntax error',
        REQUESTED_PARAM_NOT_FOUND: 'Requested param not found',
        RESULTS_VECTOR_SIZE_MISMATCH: 'Results vector size mismatch',
        UNDECLARED_OUTPUT_PARAM: 'Undeclared output param',
        UNKNOWN_BUCKET_DEFINITION: 'Unknown bucket definition',
        UNKNOWN_CONFIG_TYPE: 'Unknown config type',
        UNKNOWN_CONTEXT: 'Unknown context',
        UNSUPPORTED_CONFIG_VERSION: 'Unsupported config version',
      },
      j = 10,
      k = ', ',
      l = { BOOL: 'BOOL', FLOAT: 'FLOAT', INT: 'INT', STRING: 'STRING' };
    e.exports = {
      ANALYTICS_SAMPLE_RATE: a,
      BUCKET_DELIMITER: b,
      CONTEXT_BUCKET_STRATEGY: c,
      CONFIG_TYPE: d,
      EMPTY_RESOLVED_CONTEXTS: g,
      EMPTY_RESOLVED_MONITORS: h,
      EMPTY_RESULT_PARAMS: f,
      ERROR: i,
      JSON_SUB_SAMPLE_RATE: j,
      LIST_DELIMITER: k,
      TYPE: l,
    };
  },
  null
);
__d(
  'ContextualConfigResolvedContextsUtils',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    a = function (a) {
      __p && __p();
      var b = [];
      for (
        var a = a,
          c = Array.isArray(a),
          d = 0,
          a = c
            ? a
            : a[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var e;
        if (c) {
          if (d >= a.length) break;
          e = a[d++];
        } else {
          d = a.next();
          if (d.done) break;
          e = d.value;
        }
        e = e;
        e = e.bucketIndex;
        if (e == undefined) break;
        b.push(e);
      }
      return b;
    };
    b = function (a) {
      __p && __p();
      var b = [];
      for (
        var a = a,
          c = Array.isArray(a),
          d = 0,
          a = c
            ? a
            : a[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var e;
        if (c) {
          if (d >= a.length) break;
          e = a[d++];
        } else {
          d = a.next();
          if (d.done) break;
          e = d.value;
        }
        e = e;
        e = e.bucketName;
        if (e === undefined) break;
        b.push(e);
      }
      return b;
    };
    var g = function (a) {
      return a.name;
    };
    c = function (a) {
      return a.map(g);
    };
    d = function (a) {
      __p && __p();
      var b = [];
      for (
        var a = a,
          c = Array.isArray(a),
          d = 0,
          a = c
            ? a
            : a[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var e;
        if (c) {
          if (d >= a.length) break;
          e = a[d++];
        } else {
          d = a.next();
          if (d.done) break;
          e = d.value;
        }
        e = e;
        e = e.value;
        if (e === undefined) break;
        b.push(e);
      }
      return b;
    };
    e.exports = {
      getBucketIndices: a,
      getBucketNames: b,
      getContextNames: c,
      getContextValues: d,
    };
  },
  null
);
__d(
  'ContextualConfigCollateExposureData',
  ['ContextualConfigConstants', 'ContextualConfigResolvedContextsUtils'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = b('ContextualConfigConstants').ANALYTICS_SAMPLE_RATE,
      h = b('ContextualConfigConstants').LIST_DELIMITER,
      i = b('ContextualConfigResolvedContextsUtils').getBucketNames,
      j = b('ContextualConfigResolvedContextsUtils').getContextNames,
      k = b('ContextualConfigResolvedContextsUtils').getContextValues,
      l = ['cfg_ver_timestamp', 'policy_id', 'version', 'sample_rate'],
      m = function (a) {
        return a.join(h);
      },
      n = function (a, b) {
        for (var c = 0; c < l.length; c++) {
          var d = l[c];
          b[d] != null && (a[d] = b[d]);
        }
        b.name && (a.config_name = b.name);
      },
      o = function (a, b) {
        __p && __p();
        var c = b[0],
          d = b[1],
          e = b[2];
        b = b[3];
        c != null && (a.exception = c.message);
        a.result =
          m(
            d.map(function (a) {
              return a.value;
            })
          ) || 'INVALID';
        a.context = m(j(e));
        a.context_value = m(k(e));
        a.bucket_name = m(i(e));
        a.monitor = m(j(b));
        a.monitor_value = m(k(b));
      };
    a = function (a, b, c) {
      var d = { sample_rate: g };
      n(d, a);
      o(d, b);
      c && (d.config_contents = JSON.stringify(a));
      return d;
    };
    e.exports = a;
  },
  null
);
__d(
  'ContextualConfigExposureEvent',
  ['Random'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a, c, d) {
      (this.$2 = a),
        (this.$4 = b('Random').random() < 1 / a.sample_rate),
        (this.$3 = c),
        (this.$1 = d);
    }
    a.prototype.getData = function () {
      return this.$2;
    };
    a.prototype.log = function (a) {
      var b = this.$2,
        c = this.$3,
        d = this.$4;
      a && c(b);
      d && this.$1(b);
      return this;
    };
    a.prototype.isSampled = function () {
      return this.$4;
    };
    e.exports = a;
  },
  null
);
__d(
  'ContextualConfigExposureLoggerFactory',
  ['ContextualConfigExposureEvent'],
  function (a, b, c, d, e, f) {
    function g(a, b) {
      (this.$2 = a), (this.$1 = b);
    }
    g.prototype.createEvent = function (a) {
      var c = this.$1,
        d = this.$2,
        event = new (b('ContextualConfigExposureEvent'))(a, d, c);
      return event;
    };
    a = function (a, b) {
      return new g(a, b);
    };
    e.exports = a;
  },
  null
);
__d(
  'MarauderLogger',
  ['Banzai', 'CacheStorage', 'MarauderConfig'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = 'client_event',
      h = 'navigation',
      i = 18e4,
      j = 'marauder',
      k = 'marauder_last_event_time',
      l = 'marauder_last_session_id',
      m = {},
      n = [],
      o = !1,
      p = null,
      q = null,
      r = null,
      s = 0,
      t,
      u,
      v = !1,
      w = null,
      x = !1;
    function a() {
      G().set(k, y());
    }
    b('Banzai').subscribe(b('Banzai').SHUTDOWN, a);
    function y() {
      t = t || G().get(k) || 0;
      return t;
    }
    function z() {
      v || ((u = G().get(l)), (v = !0));
      var a = Date.now();
      (!u || a - i > y()) &&
        ((u =
          a.toString(16) + '-' + (~~(Math.random() * 16777215)).toString(16)),
        G().set(l, u));
      return u;
    }
    function A() {
      return {
        user_agent: window.navigator.userAgent,
        screen_height: window.screen.availHeight,
        screen_width: window.screen.availWidth,
        density: window.screen.devicePixelRatio || null,
        platform: window.navigator.platform || null,
        locale: window.navigator.language || null,
      };
    }
    function B() {
      return { locale: navigator.language };
    }
    function C(b, a, c, d, f, g, h) {
      var i = h || Date.now();
      t = h ? Date.now() : i;
      a = a || p;
      return {
        name: b,
        time: i / 1e3,
        module: a,
        obj_type: d,
        obj_id: f,
        uuid: g,
        extra: c,
      };
    }
    function D(a, b, c) {
      return C('content', null, { flags: b }, null, null, a, c);
    }
    function E(a) {
      __p && __p();
      var b = window.__mrdr;
      if (b)
        for (var c in b) {
          var d = b[c];
          if (d[3] !== 0) {
            delete b[c];
            if (c === '1')
              if (r !== null) c = r;
              else continue;
            a.push(D(c, 1, d[1]));
            a.push(D(c, 2, d[2]));
            a.push(D(c, 3, d[3]));
          }
        }
    }
    function F(a) {
      __p && __p();
      E(a);
      if (a.length === 0) return;
      o && a.push(C('counters', null, m));
      var c = b('Banzai').BASIC,
        d = b('MarauderConfig').gk_enabled;
      s === 0 &&
        d &&
        (a.push(C('device_status', null, B())), (c = { delay: 5e3 }));
      d && Math.random() < 0.01 && a.push(C('device_info', null, A()));
      if (r !== null)
        for (var d = 0; d < a.length; d++) {
          var e = a[d];
          (e.uuid === null || e.uuid === undefined) && (e.uuid = r);
        }
      e = {
        app_ver: b('MarauderConfig').app_version,
        data: a,
        log_type: g,
        seq: s++,
        session_id: z(),
      };
      d = G().get('device_id');
      d && (e.device_id = d);
      m = {};
      o = !1;
      b('Banzai').post(j, e, c);
    }
    function G() {
      x || ((x = !0), (w = new (b('CacheStorage'))('localstorage', '')));
      return w;
    }
    function c(a) {
      m[a] || (m[a] = 0), m[a]++, (o = !0);
    }
    function H(b, a, c, d, f, g, h) {
      F([C(b, a, c, d, f, g, h)]);
    }
    function I(a, b) {
      p !== b &&
        (n.push(C(h, p, { dest_module: b, source_url: q, destination_url: a })),
        (p = b),
        (q = a));
    }
    function d(a, b) {
      p !== b && ((r = null), I(a, b));
    }
    function f(a, b, c) {
      H(b ? 'show_module' : 'hide_module', a, c);
    }
    function J(a) {
      p = a;
    }
    function K() {
      return p;
    }
    function L(a) {
      r === null && ((r = a), a !== null && (F(n), (n = [])));
    }
    e.exports = {
      count: c,
      log: H,
      navigateTo: d,
      navigateWithinSession: I,
      toggleModule: f,
      setUUID: L,
      setNavigationModule: J,
      getNavigationModule: K,
    };
  },
  null
);
__d(
  'ContextualConfigExposureLogger',
  ['ContextualConfigExposureLoggerFactory', 'MarauderLogger'],
  function (a, b, c, d, e, f) {
    a = function (a) {};
    c = function (a) {
      b('MarauderLogger').log('contextual_config_exposure', '', a);
    };
    e.exports = b('ContextualConfigExposureLoggerFactory')(a, c);
  },
  null
);
__d(
  'ContextualConfigAssert',
  [],
  function (a, b, c, d, e, f) {
    a = function (a, b) {
      if (a === !1) throw new Error(b);
    };
    e.exports = a;
  },
  null
);
__d(
  'ContextualConfigValidators',
  ['ContextualConfigConstants'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = b('ContextualConfigConstants').TYPE;
    a = function (a) {
      return Array.isArray(a);
    };
    c = function (a) {
      return typeof a === 'boolean';
    };
    d = function (a) {
      return a != null;
    };
    f = function (a) {
      return function (b) {
        return Object.prototype.hasOwnProperty.call(a, b);
      };
    };
    b = function (a) {
      return i(a) && a % 1 === 0;
    };
    var h = function (a) {
        return j(a) && a.length > 0;
      },
      i = function (a) {
        return (
          typeof a === 'number' &&
          !isNaN(a) &&
          a !== Infinity &&
          a !== -Infinity
        );
      },
      j = function (a) {
        return typeof a === 'string';
      },
      k = function (a) {
        switch (a) {
          case g.BOOL:
          case g.FLOAT:
          case g.INT:
          case g.STRING:
            return !0;
          default:
            return !1;
        }
      };
    e.exports = {
      isArray: a,
      isBoolean: c,
      isDefined: d,
      isKey: f,
      isInteger: b,
      isNonEmptyString: h,
      isNumber: i,
      isString: j,
      isType: k,
    };
  },
  null
);
__d(
  'ContextualConfigParseBoolean',
  ['ContextualConfigConstants'],
  function (a, b, c, d, e, f) {
    var g = b('ContextualConfigConstants').ERROR;
    a = function (a) {
      switch (a.toUpperCase()) {
        case 'TRUE':
          return !0;
        case 'FALSE':
          return !1;
        default:
          throw new Error(g.BAD_BOOLEAN_FORMAT);
      }
    };
    e.exports = a;
  },
  null
);
__d(
  'ContextualConfigParsePredBoolean',
  [
    'ContextualConfigAssert',
    'ContextualConfigConstants',
    'ContextualConfigParseBoolean',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = b('ContextualConfigConstants').CONTEXT_BUCKET_STRATEGY,
      h = b('ContextualConfigConstants').ERROR;
    a = function (a, c) {
      __p && __p();
      var d;
      switch (c) {
        case g.SAME:
          var e = b('ContextualConfigParseBoolean')(a);
          d = function (a) {
            return a === e;
          };
          break;
        default:
          throw new Error(h.ILLEGAL_BOOLEAN_STRATEGY);
      }
      return function (a) {
        if (typeof a !== 'boolean') throw new Error(h.INVALID_VALUE_TYPE);
        return d(a);
      };
    };
    e.exports = a;
  },
  null
);
__d(
  'ContextualConfigParseFloat',
  [
    'ContextualConfigAssert',
    'ContextualConfigConstants',
    'ContextualConfigValidators',
  ],
  function (a, b, c, d, e, f) {
    var g = b('ContextualConfigConstants').ERROR,
      h = b('ContextualConfigValidators').isNumber,
      i = /^[-\+]?([1-9]\d*|0)(\.\d+)?$/,
      j = function (a) {
        return i.test(a);
      };
    a = function (a) {
      b('ContextualConfigAssert')(j(a), g.BAD_NUMBER_FORMAT);
      a = parseFloat(a);
      b('ContextualConfigAssert')(h(a), g.BAD_NUMBER_FORMAT);
      return a;
    };
    e.exports = a;
  },
  null
);
__d(
  'ContextualConfigParseInteger',
  [
    'ContextualConfigAssert',
    'ContextualConfigConstants',
    'ContextualConfigValidators',
  ],
  function (a, b, c, d, e, f) {
    var g = b('ContextualConfigConstants').ERROR,
      h = b('ContextualConfigValidators').isNumber,
      i = /^[-\+]?([1-9]\d*|0)$/,
      j = function (a) {
        return i.test(a);
      };
    a = function (a) {
      b('ContextualConfigAssert')(j(a), g.BAD_NUMBER_FORMAT);
      a = parseInt(a, 10);
      b('ContextualConfigAssert')(h(a), g.BAD_NUMBER_FORMAT);
      return a;
    };
    e.exports = a;
  },
  null
);
__d(
  'ContextualConfigPredAssertions',
  ['ContextualConfigAssert', 'ContextualConfigConstants'],
  function (a, b, c, d, e, f) {
    var g = b('ContextualConfigConstants').ERROR;
    a = function (a) {
      return b('ContextualConfigAssert')(a > 0, g.MISMATCH_NUMBER_OF_VALUES);
    };
    c = function (a, c) {
      return b('ContextualConfigAssert')(a === c, g.MISMATCH_NUMBER_OF_VALUES);
    };
    d = function (a, c) {
      return b('ContextualConfigAssert')(a < c, g.BAD_VALUE_ORDER);
    };
    e.exports = {
      assertHasValues: a,
      assertNumberOfValues: c,
      assertValueOrder: d,
    };
  },
  null
);
__d(
  'ContextualConfigParsePredNumeric',
  [
    'ContextualConfigAssert',
    'ContextualConfigConstants',
    'ContextualConfigParseFloat',
    'ContextualConfigParseInteger',
    'ContextualConfigPredAssertions',
    'ContextualConfigValidators',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = b('ContextualConfigConstants').CONTEXT_BUCKET_STRATEGY,
      h = b('ContextualConfigConstants').ERROR,
      i = b('ContextualConfigPredAssertions').assertNumberOfValues,
      j = b('ContextualConfigPredAssertions').assertValueOrder,
      k = b('ContextualConfigValidators').isInteger;
    a = function (a, c, d, e) {
      __p && __p();
      var f = d.map(
          e
            ? b('ContextualConfigParseInteger')
            : b('ContextualConfigParseFloat')
        ),
        l;
      switch (c) {
        case g.OOR:
          i(f.length, 2);
          j(f[0], f[1]);
          l = function (a) {
            return a > f[0] && a < f[1];
          };
          break;
        case g.CCR:
          i(f.length, 2);
          j(f[0], f[1]);
          l = function (a) {
            return a >= f[0] && a <= f[1];
          };
          break;
        case g.OCR:
          i(f.length, 2);
          j(f[0], f[1]);
          l = function (a) {
            return a > f[0] && a <= f[1];
          };
          break;
        case g.COR:
          i(f.length, 2);
          j(f[0], f[1]);
          l = function (a) {
            return a >= f[0] && a < f[1];
          };
          break;
        case g.LT:
          i(f.length, 1);
          l = function (a) {
            return a < f[0];
          };
          break;
        case g.LTE:
          i(f.length, 1);
          l = function (a) {
            return a <= f[0];
          };
          break;
        case g.EQ:
          i(f.length, 1);
          l = function (a) {
            return a === f[0];
          };
          break;
        case g.NEQ:
          i(f.length, 1);
          l = function (a) {
            return a !== f[0];
          };
          break;
        case g.GT:
          i(f.length, 1);
          l = function (a) {
            return a > f[0];
          };
          break;
        case g.GTE:
          i(f.length, 1);
          l = function (a) {
            return a >= f[0];
          };
          break;
        case g.SAME:
          var m = e
            ? b('ContextualConfigParseInteger')(a)
            : b('ContextualConfigParseFloat')(a);
          l = function (a) {
            return a === m;
          };
          break;
        default:
          throw new Error(h.ILLEGAL_NUMERIC_STRATEGY);
      }
      return function (a) {
        if (typeof a !== 'number' || (e && !k(a)))
          throw new Error(h.INVALID_VALUE_TYPE);
        return l(a);
      };
    };
    e.exports = a;
  },
  null
);
__d(
  'ContextualConfigParseRegExp',
  ['ContextualConfigConstants'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = /^\/(.+)\/(.*)$/;
    a = b('ContextualConfigConstants').ERROR;
    c = function (b) {
      try {
        var c = b.match(g);
        if (c != null) return new RegExp(c[1], c[2]);
        else return new RegExp(b);
      } catch (b) {
        throw new Error(a.REGEX_SYNTAX_ERROR);
      }
    };
    e.exports = c;
  },
  null
);
__d(
  'ContextualConfigParsePredString',
  [
    'ContextualConfigAssert',
    'ContextualConfigConstants',
    'ContextualConfigParseRegExp',
    'ContextualConfigPredAssertions',
    'ContextualConfigValidators',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = b('ContextualConfigConstants').CONTEXT_BUCKET_STRATEGY,
      h = b('ContextualConfigConstants').ERROR,
      i = b('ContextualConfigPredAssertions').assertHasValues,
      j = b('ContextualConfigPredAssertions').assertNumberOfValues,
      k = b('ContextualConfigValidators').isString,
      l = function (a) {
        return b('ContextualConfigAssert')(k(a), h.INVALID_VALUE_TYPE);
      },
      m = function (a) {
        __p && __p();
        for (
          var b = a,
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
          l(e);
        }
        return a;
      };
    a = function (a, c, d) {
      __p && __p();
      var e = m(d),
        f;
      switch (c) {
        case g.IN:
          i(e.length);
          f = function (a) {
            l(a);
            return e.indexOf(a) !== -1;
          };
          break;
        case g.NIN:
          i(e.length);
          f = function (a) {
            l(a);
            return e.indexOf(a) === -1;
          };
          break;
        case g.CONTAINS:
          j(e.length, 1);
          f = function (a) {
            l(a);
            return a.indexOf(e[0]) !== -1;
          };
          break;
        case g.REGEX:
          j(e.length, 1);
          var k = b('ContextualConfigParseRegExp')(e[0]);
          f = function (a) {
            l(a);
            return k.test(a);
          };
          break;
        case g.SAME:
          f = function (b) {
            l(b);
            return b === a;
          };
          break;
        default:
          throw new Error(h.ILLEGAL_STRING_STRATEGY);
      }
      return function (a) {
        if (typeof a !== 'string') throw new Error(h.INVALID_VALUE_TYPE);
        return f(a);
      };
    };
    e.exports = a;
  },
  null
);
__d(
  'ContextualConfigParseContextBuckets',
  [
    'ContextualConfigAssert',
    'ContextualConfigConstants',
    'ContextualConfigParsePredBoolean',
    'ContextualConfigParsePredNumeric',
    'ContextualConfigParsePredString',
    'ContextualConfigValidators',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    a = b('ContextualConfigConstants').CONTEXT_BUCKET_STRATEGY;
    var g = b('ContextualConfigConstants').ERROR,
      h = b('ContextualConfigConstants').TYPE,
      i = b('ContextualConfigValidators').isArray,
      j = b('ContextualConfigValidators').isDefined;
    c = b('ContextualConfigValidators').isKey;
    var k = b('ContextualConfigValidators').isNonEmptyString,
      l = b('ContextualConfigValidators').isString,
      m = function (a) {
        return b('ContextualConfigAssert')(j(a), g.MISSING_BUCKETS);
      },
      n = function (a) {
        return b('ContextualConfigAssert')(i(a), g.MISSING_BUCKETS);
      },
      o = c(a),
      p = function (a) {
        return b('ContextualConfigAssert')(
          l(a) && o(a.toUpperCase()),
          g.MISSING_BUCKET_STRATEGY
        );
      },
      q = function (a) {
        return b('ContextualConfigAssert')(i(a), g.ILLEGAL_BUCKET_VALUES);
      },
      r = function (a) {
        return b('ContextualConfigAssert')(k(a), g.MISSING_BUCKET_NAME);
      },
      s = function (a, c) {
        __p && __p();
        var d = c.name;
        r(d);
        var e = c.strategy;
        p(e);
        c = c.values || [];
        q(c);
        switch (a) {
          case h.BOOL:
            return b('ContextualConfigParsePredBoolean')(d, e);
          case h.FLOAT:
            return b('ContextualConfigParsePredNumeric')(d, e, c, !1);
          case h.INT:
            return b('ContextualConfigParsePredNumeric')(d, e, c, !0);
          case h.STRING:
            return b('ContextualConfigParsePredString')(d, e, c);
          default:
            throw new Error(g.UNKNOWN_BUCKET_DEFINITION);
        }
      },
      t = function (a, b) {
        m(b);
        var c = b.name;
        r(c);
        return { name: c, pred: s(a, b) };
      };
    d = function (a, b) {
      n(b);
      return b.map(function (b) {
        return t(a, b);
      });
    };
    e.exports = d;
  },
  null
);
__d(
  'ContextualConfigParseContexts',
  [
    'ContextualConfigAssert',
    'ContextualConfigConstants',
    'ContextualConfigParseContextBuckets',
    'ContextualConfigValidators',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = b('ContextualConfigConstants').ERROR,
      h = b('ContextualConfigValidators').isArray;
    b('ContextualConfigValidators').isBoolean;
    var i = b('ContextualConfigValidators').isDefined,
      j = b('ContextualConfigValidators').isNonEmptyString,
      k = b('ContextualConfigValidators').isType,
      l = function (a) {
        return b('ContextualConfigAssert')(i(a), g.BAD_CONTEXT_IDENTIFIER);
      },
      m = function (a) {
        return b('ContextualConfigAssert')(
          h(a) && a.length > 0,
          g.MISSING_CONTEXT_IN_CONFIG
        );
      },
      n = function (a) {
        return b('ContextualConfigAssert')(j(a), g.BAD_CONTEXT_IDENTIFIER);
      },
      o = function (a) {
        return b('ContextualConfigAssert')(k(a), g.BAD_CONTEXT_IDENTIFIER);
      },
      p = function (a) {
        l(a);
        var c = a.name,
          d = a.type;
        a = a.buckets;
        n(c);
        o(d);
        return {
          name: c,
          type: d,
          buckets: b('ContextualConfigParseContextBuckets')(d, a),
        };
      };
    a = function (a) {
      m(a);
      return a.map(p);
    };
    e.exports = a;
  },
  null
);
__d(
  'ContextualConfigIsEqualParams',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    a = function (a, b) {
      if (a.length != b.length) return !1;
      for (var c = 0; c < a.length; c += 1) {
        var d = a[c],
          e = b[c];
        if (d.name !== e.name || d.type !== e.type) return !1;
      }
      return !0;
    };
    e.exports = a;
  },
  null
);
__d(
  'ContextualConfigParseResultParamValue',
  [
    'ContextualConfigAssert',
    'ContextualConfigConstants',
    'ContextualConfigParseBoolean',
    'ContextualConfigParseFloat',
    'ContextualConfigParseInteger',
    'ContextualConfigValidators',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = b('ContextualConfigConstants').ERROR,
      h = b('ContextualConfigConstants').TYPE,
      i = b('ContextualConfigValidators').isString,
      j = function (a) {
        return b('ContextualConfigAssert')(i(a), g.INVALID_STRING);
      };
    a = function (a, c) {
      j(c);
      switch (a) {
        case h.BOOL:
          return b('ContextualConfigParseBoolean')(c);
        case h.FLOAT:
          return b('ContextualConfigParseFloat')(c);
        case h.INT:
          return b('ContextualConfigParseInteger')(c);
        case h.STRING:
          return c;
        default:
          throw new Error(g.INVALID_VALUE_TYPE);
      }
    };
    e.exports = a;
  },
  null
);
__d(
  'ContextualConfigParseResultParams',
  [
    'ContextualConfigAssert',
    'ContextualConfigConstants',
    'ContextualConfigParseResultParamValue',
    'ContextualConfigValidators',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = b('ContextualConfigConstants').ERROR,
      h = b('ContextualConfigValidators').isArray,
      i = b('ContextualConfigValidators').isDefined,
      j = b('ContextualConfigValidators').isNonEmptyString,
      k = b('ContextualConfigValidators').isType,
      l = function (a) {
        return b('ContextualConfigAssert')(h(a), g.MISSING_RESULTS);
      },
      m = function (a) {
        return b('ContextualConfigAssert')(i(a), g.BAD_CONTEXT_VALUE);
      },
      n = function (a) {
        return b('ContextualConfigAssert')(j(a), g.BAD_CONTEXT_VALUE);
      },
      o = function (a) {
        return b('ContextualConfigAssert')(k(a), g.BAD_CONTEXT_VALUE);
      },
      p = function (a, b) {
        __p && __p();
        for (
          var a = a,
            c = Array.isArray(a),
            d = 0,
            a = c
              ? a
              : a[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var e;
          if (c) {
            if (d >= a.length) break;
            e = a[d++];
          } else {
            d = a.next();
            if (d.done) break;
            e = d.value;
          }
          e = e;
          if (e.name === b) return e.type;
        }
        throw new Error(g.UNDECLARED_OUTPUT_PARAM);
      },
      q = function (a) {
        return function (c) {
          m(c);
          var d = c.name;
          n(d);
          var e = p(a, d);
          o(e);
          c = b('ContextualConfigParseResultParamValue')(e, c.value);
          return { name: d, type: e, value: c };
        };
      };
    a = function (a, b) {
      l(b);
      return b.map(q(a));
    };
    e.exports = a;
  },
  null
);
__d(
  'ContextualConfigParseDenseResultParams',
  [
    'ContextualConfigAssert',
    'ContextualConfigConstants',
    'ContextualConfigIsEqualParams',
    'ContextualConfigParseResultParams',
  ],
  function (a, b, c, d, e, f) {
    var g = b('ContextualConfigConstants').ERROR,
      h = function (a, c) {
        return b('ContextualConfigAssert')(
          b('ContextualConfigIsEqualParams')(a, c),
          g.RESULTS_VECTOR_SIZE_MISMATCH
        );
      };
    a = function (a, c) {
      c = b('ContextualConfigParseResultParams')(
        a,
        c.map(function (b, c) {
          return { name: a[c].name, value: b };
        })
      );
      h(a, c);
      return c;
    };
    e.exports = a;
  },
  null
);
__d(
  'ContextualConfigParseDenseDefaults',
  [
    'ContextualConfigAssert',
    'ContextualConfigConstants',
    'ContextualConfigParseDenseResultParams',
  ],
  function (a, b, c, d, e, f) {
    a = b('ContextualConfigConstants').ERROR;
    c = function (c, d) {
      try {
        return b('ContextualConfigParseDenseResultParams')(c, d);
      } catch (b) {
        throw new Error(a.MISSING_DEFAULT_VALUE);
      }
    };
    e.exports = c;
  },
  null
);
__d(
  'ContextualConfigParseMonitors',
  [
    'ContextualConfigAssert',
    'ContextualConfigConstants',
    'ContextualConfigValidators',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = b('ContextualConfigConstants').ERROR,
      h = b('ContextualConfigValidators').isArray,
      i = b('ContextualConfigValidators').isDefined,
      j = b('ContextualConfigValidators').isNonEmptyString,
      k = b('ContextualConfigValidators').isType,
      l = function (a) {
        return b('ContextualConfigAssert')(i(a), g.BAD_CONTEXT_IDENTIFIER);
      },
      m = function (a) {
        return b('ContextualConfigAssert')(h(a), g.BAD_MONITORED_CONTEXTS);
      },
      n = function (a) {
        return b('ContextualConfigAssert')(j(a), g.BAD_CONTEXT_IDENTIFIER);
      },
      o = function (a) {
        return b('ContextualConfigAssert')(k(a), g.BAD_CONTEXT_IDENTIFIER);
      },
      p = function (a) {
        l(a);
        var b = a.name;
        a = a.type;
        n(b);
        o(a);
        return { name: b, type: a };
      };
    a = function (a) {
      m(a);
      return a.map(p);
    };
    e.exports = a;
  },
  null
);
__d(
  'ContextualConfigParseOutputParams',
  [
    'ContextualConfigAssert',
    'ContextualConfigConstants',
    'ContextualConfigValidators',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = b('ContextualConfigConstants').ERROR,
      h = b('ContextualConfigValidators').isArray,
      i = b('ContextualConfigValidators').isNonEmptyString,
      j = b('ContextualConfigValidators').isType,
      k = function (a) {
        return b('ContextualConfigAssert')(h(a), g.MISSING_OUTPUTS_DEFINITION);
      },
      l = function (a) {
        return b('ContextualConfigAssert')(j(a), g.BAD_OUTPUT_TYPE);
      },
      m = function (a) {
        return b('ContextualConfigAssert')(i(a), g.BAD_OUTPUT_NAME);
      },
      n = function (a) {
        return b('ContextualConfigAssert')(o(a), g.DUPLICATE_OUTPUT_NAME);
      },
      o = function (a) {
        __p && __p();
        var b = {};
        for (
          var a = a,
            c = Array.isArray(a),
            d = 0,
            a = c
              ? a
              : a[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var e;
          if (c) {
            if (d >= a.length) break;
            e = a[d++];
          } else {
            d = a.next();
            if (d.done) break;
            e = d.value;
          }
          e = e;
          if (b[e.name]) return !1;
          b[e.name] = !0;
        }
        return !0;
      },
      p = function (a) {
        m(a.name);
        l(a.type);
        return a;
      };
    a = function (a) {
      k(a);
      a = a.map(p);
      n(a);
      return a;
    };
    e.exports = a;
  },
  null
);
__d(
  'ContextualConfigParseVector',
  [
    'ContextualConfigAssert',
    'ContextualConfigConstants',
    'ContextualConfigParseResultParamValue',
    'ContextualConfigValidators',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = b('ContextualConfigConstants').ERROR,
      h = b('ContextualConfigValidators').isArray,
      i = function (a) {
        return b('ContextualConfigAssert')(h(a), g.MISSING_VECTOR);
      },
      j = function (a, c) {
        return b('ContextualConfigAssert')(
          a === c,
          g.RESULTS_VECTOR_SIZE_MISMATCH
        );
      },
      k = function (a, c) {
        j(a.length, c.length);
        for (var d = 0; d < a.length; d += 1) {
          var e = a[d].type,
            f = c[d];
          b('ContextualConfigParseResultParamValue')(e, f);
        }
      },
      l = function (a) {
        return a.reduce(function (a, b) {
          b = b.buckets;
          return a * b.length;
        }, 1);
      };
    a = function (a, b, c) {
      i(c);
      b = l(b);
      var d = a.length;
      j(b * d, c.length);
      for (var e = 0; e < b; e += 1) {
        var f = e * d;
        k(a, c.slice(f, f + d));
      }
      return c;
    };
    e.exports = a;
  },
  null
);
__d(
  'ContextualConfigResolveContexts',
  ['ContextualConfigConstants'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = b('ContextualConfigConstants').ERROR,
      h = function (a, b) {
        for (var c = 0; c < a.length; c += 1) {
          var d = a[c];
          try {
            if (d.pred(b)) return [d.name, c];
          } catch (a) {
            return null;
          }
        }
        return null;
      };
    a = function (a, b, c) {
      __p && __p();
      var d = null;
      a = a.map(function (a) {
        __p && __p();
        var e = a.name,
          f = { name: e };
        if (d != null) return f;
        var i;
        if (c[e] != null) i = c[e];
        else if (b[e] != null) i = b[e]();
        else {
          d = new Error(g.UNKNOWN_CONTEXT);
          return f;
        }
        f.value = i;
        if (a.buckets != null) {
          e = h(a.buckets, i);
          if (e == null) {
            d = new Error(g.MISSING_BUCKET_MATCH);
            return f;
          }
          a = e[0];
          i = e[1];
          f.bucketName = a;
          f.bucketIndex = i;
        }
        return f;
      });
      return [d, a];
    };
    e.exports = a;
  },
  null
);
__d(
  'DenseContextualConfig',
  [
    'ContextualConfigAssert',
    'ContextualConfigConstants',
    'ContextualConfigParseContexts',
    'ContextualConfigParseDenseDefaults',
    'ContextualConfigParseDenseResultParams',
    'ContextualConfigParseMonitors',
    'ContextualConfigParseOutputParams',
    'ContextualConfigParseVector',
    'ContextualConfigResolveContexts',
    'ContextualConfigResolvedContextsUtils',
    'ContextualConfigValidators',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    c = b('ContextualConfigConstants').EMPTY_RESOLVED_CONTEXTS;
    var g = b('ContextualConfigConstants').EMPTY_RESOLVED_MONITORS,
      h = b('ContextualConfigConstants').ERROR,
      i = b('ContextualConfigResolvedContextsUtils').getBucketIndices,
      j = b('ContextualConfigValidators').isDefined,
      k = function (a) {
        return b('ContextualConfigAssert')(j(a), h.BAD_CONFIG);
      },
      l = function (a) {
        var b = [],
          c = 1;
        for (var d = a.length - 1; d >= 0; d -= 1)
          b.push(c), (c *= a[d].buckets.length);
        return b.reverse();
      },
      m = function (a, c, d, e) {
        try {
          c = c.slice(d, d + a.length);
          return [null, b('ContextualConfigParseDenseResultParams')(a, c)];
        } catch (a) {
          return [a, e];
        }
      },
      n = function (a, c, d) {
        try {
          d = d.reduce(function (c, d, e) {
            b('ContextualConfigAssert')(
              e < a.length,
              'Auxillery index out of range.'
            );
            return c + a[e] * d;
          }, 0);
          return [null, d * c];
        } catch (a) {
          return [a, -1];
        }
      };
    function a(a, c) {
      __p && __p();
      k(a);
      this.globalContextProviders = babelHelpers['extends']({}, c);
      c = b('ContextualConfigParseOutputParams')(a.outputs);
      var d = b('ContextualConfigParseContexts')(a.contexts);
      this.aux = l(d);
      this.contexts = d;
      this.defaults = b('ContextualConfigParseDenseDefaults')(
        c,
        a.vectorDefaults
      );
      this.monitors =
        a.monitors != null
          ? b('ContextualConfigParseMonitors')(a.monitors)
          : [];
      this.outputs = c;
      this.vector = b('ContextualConfigParseVector')(c, d, a.vector);
    }
    a.prototype.resolve = function (a) {
      try {
        return this.unsafeResolve(a);
      } catch (a) {
        return [a, this.defaults, c, g];
      }
    };
    a.prototype.unsafeResolve = function (a) {
      __p && __p();
      var c = this.aux,
        d = this.globalContextProviders,
        e = this.contexts,
        f = this.defaults,
        h = this.monitors,
        j = this.outputs,
        k = this.vector;
      e = b('ContextualConfigResolveContexts')(e, d, a);
      var l = e[0];
      e = e[1];
      if (l != null) return [l, f, e, g];
      l = n(c, j.length, i(e));
      c = l[0];
      l = l[1];
      if (c != null) return [c, f, e, g];
      c = m(j, k, l, f);
      j = c[0];
      k = c[1];
      if (j != null) return [j, k, e, g];
      l = b('ContextualConfigResolveContexts')(h, d, a);
      f = l[0];
      c = l[1];
      return f != null ? [f, k, e, g] : [null, k, e, c];
    };
    e.exports = a;
  },
  null
);
__d(
  'ContextualConfigParseDefaults',
  [
    'ContextualConfigAssert',
    'ContextualConfigConstants',
    'ContextualConfigIsEqualParams',
    'ContextualConfigParseResultParams',
  ],
  function (a, b, c, d, e, f) {
    var g = b('ContextualConfigConstants').ERROR,
      h = function (a, c) {
        return b('ContextualConfigAssert')(
          b('ContextualConfigIsEqualParams')(a, c),
          g.MISSING_DEFAULT_VALUE
        );
      };
    a = function (a, c) {
      c = b('ContextualConfigParseResultParams')(a, c);
      h(a, c);
      return c;
    };
    e.exports = a;
  },
  null
);
__d(
  'MultiOutputResolvedContextualConfig',
  [
    'ContextualConfigAssert',
    'ContextualConfigConstants',
    'ContextualConfigParseDefaults',
    'ContextualConfigParseMonitors',
    'ContextualConfigParseOutputParams',
    'ContextualConfigParseResultParams',
    'ContextualConfigResolveContexts',
    'ContextualConfigValidators',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = b('ContextualConfigConstants').EMPTY_RESOLVED_CONTEXTS,
      h = b('ContextualConfigConstants').EMPTY_RESOLVED_MONITORS,
      i = b('ContextualConfigConstants').ERROR,
      j = b('ContextualConfigValidators').isDefined,
      k = function (a) {
        return b('ContextualConfigAssert')(j(a), i.BAD_CONFIG);
      };
    function a(a, c) {
      k(a);
      this.globalContextProviders = babelHelpers['extends']({}, c);
      c = b('ContextualConfigParseOutputParams')(a.outputs);
      this.monitors =
        a.monitors != null
          ? b('ContextualConfigParseMonitors')(a.monitors)
          : [];
      this.values = b('ContextualConfigParseResultParams')(c, a.values);
    }
    a.prototype.resolve = function (a) {
      try {
        return this.unsafeResolve(a);
      } catch (a) {
        return [a, this.values, g, h];
      }
    };
    a.prototype.unsafeResolve = function (a) {
      var c = this.globalContextProviders,
        d = this.monitors,
        e = this.values;
      d = b('ContextualConfigResolveContexts')(d, c, a);
      c = d[0];
      a = d[1];
      return c != null ? [c, e, g, h] : [null, e, g, a];
    };
    e.exports = a;
  },
  null
);
__d(
  'ContextualConfigMergePartialResultParams',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    a = function (a, b) {
      __p && __p();
      var c = [],
        d = b.length,
        e = 0;
      for (
        var a = a,
          f = Array.isArray(a),
          g = 0,
          a = f
            ? a
            : a[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var h;
        if (f) {
          if (g >= a.length) break;
          h = a[g++];
        } else {
          g = a.next();
          if (g.done) break;
          h = g.value;
        }
        h = h;
        if (e >= d) {
          c.push(h);
          continue;
        }
        var i = b[e];
        i.name === h.name && i.type === h.type
          ? (c.push(i), (e += 1))
          : c.push(h);
      }
      return c;
    };
    e.exports = a;
  },
  null
);
__d(
  'ContextualConfigParseTable',
  [
    'ContextualConfigAssert',
    'ContextualConfigParseResultParams',
    'ContextualConfigConstants',
    'ContextualConfigValidators',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = b('ContextualConfigConstants').ERROR,
      h = b('ContextualConfigValidators').isArray,
      i = b('ContextualConfigValidators').isDefined,
      j = b('ContextualConfigValidators').isNonEmptyString,
      k = function (a) {
        return b('ContextualConfigAssert')(h(a), g.MISSING_TABLE);
      },
      l = function (a) {
        return b('ContextualConfigAssert')(i(a), g.MISSING_TABLE);
      },
      m = function (a) {
        return b('ContextualConfigAssert')(j(a), g.MISSING_TABLE_ITEM_BUCKET);
      },
      n = function (a) {
        return b('ContextualConfigAssert')(h(a), g.MISSING_TABLE_ITEM_VALUES);
      },
      o = function (a, c) {
        l(c);
        var d = c.bucket;
        c = c.values;
        m(d);
        n(c);
        return {
          bucket: d,
          values: b('ContextualConfigParseResultParams')(a, c),
        };
      };
    a = function (a, b) {
      k(b);
      return b.reduce(function (b, c) {
        c = o(a, c);
        b[c.bucket] = c.values;
        return b;
      }, {});
    };
    e.exports = a;
  },
  null
);
__d(
  'ContextualConfigWarn',
  [],
  function (a, b, c, d, e, f) {
    a = function (a) {
      !1;
    };
    e.exports = a;
  },
  null
);
__d(
  'ContextualConfigResult',
  ['ContextualConfigConstants', 'ContextualConfigWarn'],
  function (a, b, c, d, e, f) {
    __p && __p();
    b('ContextualConfigConstants').TYPE;
    var g = b('ContextualConfigConstants').ERROR;
    function a(a) {
      (this.$1 = a.reduce(function (a, b) {
        var c = b.name;
        b = b.value;
        a[c] = b;
        return a;
      }, {})),
        (this.$2 = a);
    }
    a.prototype.get = function (a, c) {
      try {
        a = this.$1[a];
        if (typeof a !== typeof c) {
          b('ContextualConfigWarn')(g.REQUESTED_PARAM_NOT_FOUND);
          return c;
        }
        return a;
      } catch (a) {
        b('ContextualConfigWarn')(a.message);
        return c;
      }
    };
    a.prototype.getParams = function () {
      return this.$2;
    };
    e.exports = a;
  },
  null
);
__d(
  'TableContextualConfig',
  [
    'ContextualConfigAssert',
    'ContextualConfigConstants',
    'ContextualConfigMergePartialResultParams',
    'ContextualConfigParseContexts',
    'ContextualConfigParseDefaults',
    'ContextualConfigParseMonitors',
    'ContextualConfigParseOutputParams',
    'ContextualConfigParseTable',
    'ContextualConfigResolveContexts',
    'ContextualConfigResolvedContextsUtils',
    'ContextualConfigResult',
    'ContextualConfigValidators',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = b('ContextualConfigConstants').BUCKET_DELIMITER;
    c = b('ContextualConfigConstants').EMPTY_RESOLVED_CONTEXTS;
    d = b('ContextualConfigConstants').EMPTY_RESOLVED_MONITORS;
    var h = b('ContextualConfigConstants').ERROR,
      i = b('ContextualConfigResolvedContextsUtils').getBucketNames,
      j = b('ContextualConfigValidators').isDefined,
      k = [],
      l = function (a) {
        return b('ContextualConfigAssert')(j(a), h.BAD_CONFIG);
      };
    function a(a, c) {
      l(a);
      this.globalContextProviders = babelHelpers['extends']({}, c);
      c = b('ContextualConfigParseOutputParams')(a.outputs);
      this.contexts = b('ContextualConfigParseContexts')(a.contexts);
      this.defaults = b('ContextualConfigParseDefaults')(c, a.defaults);
      this.monitors =
        a.monitors != null
          ? b('ContextualConfigParseMonitors')(a.monitors)
          : [];
      this.table = b('ContextualConfigParseTable')(c, a.table);
    }
    a.prototype.resolve = function (a) {
      try {
        return this.unsafeResolve(a);
      } catch (a) {
        return [a, this.defaults, c, d];
      }
    };
    a.prototype.unsafeResolve = function (a) {
      __p && __p();
      var c = this.globalContextProviders,
        d = this.contexts,
        e = this.defaults,
        f = this.monitors,
        h = this.table;
      d = b('ContextualConfigResolveContexts')(d, c, a);
      var j = d[0];
      d = d[1];
      if (j != null) return [j, e, d, []];
      j = i(d).join(g);
      h = h[j] || k;
      j = b('ContextualConfigMergePartialResultParams')(e, h);
      e = b('ContextualConfigResolveContexts')(f, c, a);
      h = e[0];
      f = e[1];
      return h != null ? [h, j, d, []] : [null, j, d, f];
    };
    e.exports = a;
  },
  null
);
__d(
  'ContextualConfigParseConfig',
  [
    'ContextualConfigAssert',
    'ContextualConfigConstants',
    'ContextualConfigValidators',
    'DenseContextualConfig',
    'MultiOutputResolvedContextualConfig',
    'TableContextualConfig',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = b('ContextualConfigConstants').CONFIG_TYPE,
      h = b('ContextualConfigConstants').ERROR,
      i = b('ContextualConfigValidators').isDefined,
      j = [1],
      k = function (a) {
        return b('ContextualConfigAssert')(i(a) && i(a.version), h.BAD_CONFIG);
      },
      l = function (a) {
        return b('ContextualConfigAssert')(
          j.indexOf(a) !== -1,
          h.UNSUPPORTED_CONFIG_VERSION
        );
      };
    a = function (a, c) {
      k(a);
      l(a.version);
      switch (a.cctype) {
        case g.DENSE:
          return new (b('DenseContextualConfig'))(a, c);
        case g.MULTI_OUTPUT_RESOLVED:
          return new (b('MultiOutputResolvedContextualConfig'))(a, c);
        case g.TABLE:
          return new (b('TableContextualConfig'))(a, c);
        default:
          throw new Error(h.UNKNOWN_CONFIG_TYPE);
      }
    };
    e.exports = a;
  },
  null
);
__d(
  'ErrorContextualConfig',
  ['ContextualConfigConstants'],
  function (a, b, c, d, e, f) {
    var g = b('ContextualConfigConstants').EMPTY_RESOLVED_CONTEXTS,
      h = b('ContextualConfigConstants').EMPTY_RESOLVED_MONITORS,
      i = b('ContextualConfigConstants').EMPTY_RESULT_PARAMS;
    function a(a) {
      this.error = a;
    }
    a.prototype.resolve = function (a) {
      return [this.error, i, g, h];
    };
    e.exports = a;
  },
  null
);
__d(
  'ContextualConfig',
  [
    'ContextualConfigCollateExposureData',
    'ContextualConfigConstants',
    'ContextualConfigExposureLogger',
    'ContextualConfigParseConfig',
    'ContextualConfigResult',
    'ErrorContextualConfig',
    'Random',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    c = b('ContextualConfigConstants').JSON_SUB_SAMPLE_RATE;
    var g = 1 / c,
      h = 1;
    function a(a, b) {
      b === void 0 && (b = {}),
        (this.isDebugLoggingEnabled = !1),
        (this.$3 = !1),
        (this.$4 = a),
        (this.$2 = b);
    }
    a.prototype.$5 = function () {
      if (this.$1) return this.$1;
      var a = this.$2,
        c = this.$4;
      try {
        c = b('ContextualConfigParseConfig')(c, a);
      } catch (a) {
        c = new (b('ErrorContextualConfig'))(a);
      }
      this.$1 = c;
      return c;
    };
    a.prototype.$6 = function (a) {
      var c = this.isDebugLoggingEnabled,
        d = this.$4,
        e = this.$3;
      e = !e && b('Random').random() < g;
      e && (this.$3 = !0);
      d = b('ContextualConfigCollateExposureData')(d, a, e);
      var event = b('ContextualConfigExposureLogger').createEvent(d);
      event.log(c);
    };
    a.prototype.resolve = function (a) {
      a === void 0 && (a = {});
      var c = this.$1 || this.$5();
      c = c.resolve(a);
      this.$6(c);
      return new (b('ContextualConfigResult'))(c[h]);
    };
    e.exports = a;
  },
  null
);
__d(
  'VideoPlayerShakaConfigContextProvider',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a() {
      this.$1 = {};
    }
    a.prototype.setContext = function (a, b) {
      if (this.$1[a] !== b) {
        var c;
        this.$1 = Object.assign({}, this.$1, ((c = {}), (c[a] = b), c));
      }
    };
    a.prototype.setAllContexts = function (a) {
      this.$1 = a;
    };
    a.prototype.getAllContexts = function () {
      return this.$1;
    };
    e.exports = a;
  },
  null
);
__d(
  'VideoPlayerShakaConfig',
  [
    'ContextualConfig',
    'VideoPlayerShakaConfigContextProvider',
    'VideoPlayerShakaExperimentsConfig',
    'VideoPlayerShakaParsedContextualConfig',
    'VideoPlayerShakaSessionConfigOverride',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g =
        b('VideoPlayerShakaParsedContextualConfig').getStaticConfig() || null,
      h;
    c = function () {
      var a = b(
        'VideoPlayerShakaParsedContextualConfig'
      ).getRawContextualConfig();
      h = a ? new (b('ContextualConfig'))(a) : null;
    };
    b('VideoPlayerShakaParsedContextualConfig').addListener('configChange', c);
    c();
    function a(a, c) {
      (this.$1 = new (b('VideoPlayerShakaConfigContextProvider'))()),
        (this.$2 = c || null),
        (this.$3 = null),
        a && this.$1.setAllContexts(a),
        h !== null && (this.$3 = h.resolve(a || {}));
    }
    a.prototype.setContext = function (a, b) {
      if (h === null) return null;
      var c = this.$1.getAllContexts();
      this.$1.setContext(a, b);
      a = this.$1.getAllContexts();
      c !== a && (this.$3 = h.resolve(a));
    };
    a.prototype.setOverrideConfig = function (a) {
      this.$2 = a;
    };
    a.prototype.getBool = function (a, c) {
      var d = this.$4(a, c);
      return typeof d === 'boolean'
        ? d
        : typeof b('VideoPlayerShakaExperimentsConfig')[a] === 'boolean'
        ? b('VideoPlayerShakaExperimentsConfig')[a]
        : c;
    };
    a.prototype.getNumber = function (a, c) {
      var d = this.$4(a, c);
      return typeof d === 'number'
        ? d
        : typeof b('VideoPlayerShakaExperimentsConfig')[a] === 'number'
        ? b('VideoPlayerShakaExperimentsConfig')[a]
        : c;
    };
    a.prototype.getString = function (a, c) {
      var d = this.$4(a, c);
      return typeof d === 'string'
        ? d
        : typeof b('VideoPlayerShakaExperimentsConfig')[a] === 'string'
        ? b('VideoPlayerShakaExperimentsConfig')[a]
        : c;
    };
    a.prototype.$4 = function (a, c) {
      if (!!this.$2 && typeof this.$2[a] === typeof c) return this.$2[a];
      if (
        b('VideoPlayerShakaSessionConfigOverride') &&
        typeof b('VideoPlayerShakaSessionConfigOverride')[a] === typeof c
      )
        return b('VideoPlayerShakaSessionConfigOverride')[a];
      if (g !== null && typeof g[a] === typeof c) return g[a];
      return this.$3 ? this.$3.get(a, c) : null;
    };
    e.exports = a;
  },
  null
);
__d(
  'VideoPlayerStates',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      READY: 'ready',
      PLAYING: 'playing',
      PAUSED: 'paused',
      LOADING: 'loading',
      FALLBACK: 'fallback',
      FINISHED: 'finished',
      DESTROYED: 'destroyed',
      REPLAYED: 'replayed',
      UNKNOWN: 'unknown',
    });
  },
  null
);
__d(
  'VideoPlayerUIComponentDrawer',
  ['EventEmitter'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g;
    c = babelHelpers.inherits(a, b('EventEmitter'));
    g = c && c.prototype;
    function a(a, b) {
      g.constructor.call(this),
        (this.$VideoPlayerUIComponentDrawer1 = a),
        (this.$VideoPlayerUIComponentDrawer2 = b),
        (this.$VideoPlayerUIComponentDrawer4 = !1);
    }
    a.prototype.reserve = function () {
      if (this.$VideoPlayerUIComponentDrawer4) return;
      this.$VideoPlayerUIComponentDrawer4 = !0;
      this.emit('reserve');
    };
    a.prototype.release = function () {
      if (!this.$VideoPlayerUIComponentDrawer4) return;
      this.$VideoPlayerUIComponentDrawer4 = !1;
      this.emit('release');
    };
    a.prototype.getPriority = function () {
      return this.$VideoPlayerUIComponentDrawer1;
    };
    a.prototype.getHeight = function () {
      return this.$VideoPlayerUIComponentDrawer2;
    };
    a.prototype.setHeight = function (a) {
      (this.$VideoPlayerUIComponentDrawer2 = a), this.emit('heightChange');
    };
    a.prototype.emit = function (event) {
      var a;
      for (
        var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
        d < b;
        d++
      )
        c[d - 1] = arguments[d];
      event === 'reposition' && (this.$VideoPlayerUIComponentDrawer3 = c[0]);
      (a = g.emit).call.apply(a, [this, event].concat(c));
    };
    a.prototype.reposition = function () {
      this.emit('reposition', this.$VideoPlayerUIComponentDrawer3);
    };
    a.prototype.isReserved = function () {
      return this.$VideoPlayerUIComponentDrawer4;
    };
    a.priorities = {
      EmbeddedControls: 0,
      AdBreakStartingIndicator: 1,
      ClickForMore: 2,
      Subtitles: 3,
      SphericalMouseAnimation: 4,
    };
    e.exports = a;
  },
  null
);
__d(
  'VideoPlayerUIComponentDrawerController',
  ['VideoPlayerUIComponentDrawer'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = function (a, b) {
      return a.getPriority() - b.getPriority();
    };
    function a() {
      this.$1 = [];
    }
    a.prototype.register = function (a, c) {
      __p && __p();
      c = new (b('VideoPlayerUIComponentDrawer'))(a, c);
      c.addListener(
        'reserve',
        function () {
          return this.$2(a);
        }.bind(this)
      );
      c.addListener(
        'release',
        function () {
          return this.$2(a);
        }.bind(this)
      );
      c.addListener(
        'heightChange',
        function () {
          return this.$2(a);
        }.bind(this)
      );
      this.$1.push(c);
      this.$1.sort(g);
      return c;
    };
    a.prototype.$2 = function (a) {
      var b = 0;
      this.$1.forEach(function (c) {
        c.getPriority() > a && c.emit('reposition', b),
          c.isReserved() && (b += c.getHeight());
      });
    };
    e.exports = a;
  },
  null
);
__d(
  'VideoPlayerVolumeSettings',
  ['WebStorage'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a() {
      (this.$1 = 1), (this.$2 = 1);
    }
    a.prototype.getVolume = function () {
      var a = b('WebStorage').getLocalStorage();
      if (a) {
        a = a.getItem('videoPlayerControllerVolume');
        return a === null || isNaN(+a) ? 1 : +a;
      }
      return this.$1;
    };
    a.prototype.getSessionVolume = function () {
      return this.$1;
    };
    a.prototype.setSessionVolume = function (a) {
      this.$1 = a;
    };
    a.prototype.saveVolume = function (a) {
      var c = b('WebStorage').getLocalStorage();
      c && c.setItem('videoPlayerControllerVolume', a);
      this.$1 = a;
    };
    a.prototype.getLastVolumeBeforeMute = function () {
      var a = b('WebStorage').getLocalStorage();
      if (a) {
        a = a.getItem('videoPlayerControllerLastVolumeBeforeMute');
        return a === null || isNaN(+a) ? 1 : +a;
      }
      return this.$2;
    };
    a.prototype.saveLastVolumeBeforeMute = function (a) {
      var c = b('WebStorage').getLocalStorage();
      c && c.setItem('videoPlayerControllerLastVolumeBeforeMute', a);
      this.$2 = a;
    };
    c = new a();
    e.exports = c;
  },
  null
);
__d(
  'VideoViewabilityPercentage',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      OFFSCREEN: -2,
      VIEWABLE_UNKNOWN: -1,
      VIEWABLE_0: 0,
      VIEWABLE_25: 25,
      VIEWABLE_50: 50,
      VIEWABLE_75: 75,
      VIEWABLE_100: 100,
    });
  },
  null
);
__d(
  'ViewabilityVideoElement',
  [
    'UITinyViewportAction',
    'VideoPlayerExperiments',
    'getElementPosition',
    'getViewportDimensions',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = 42;
    function a(a, b, c, d) {
      d === void 0 && (d = !1),
        (this.$1 = a),
        (this.$2 = b),
        (this.$3 = c),
        (this.$4 = d);
    }
    a.prototype.feedViewabilityPercentage = function () {
      var a = b('UITinyViewportAction').isTinyHeight();
      return this.$5(!a);
    };
    a.prototype.viewabilityPercentage = function () {
      return this.$5(!1);
    };
    a.prototype.isTopElement = function (a, b, c) {
      b = document.elementFromPoint(b, c);
      return b === a || (!!a && a.contains(b)) || (!!b && b.contains(a));
    };
    a.prototype.$6 = function (a, c, d) {
      __p && __p();
      var e = b('VideoPlayerExperiments').viewabilityMinBlockSize || 200,
        f = a[0];
      a = a[1];
      var g = c[0];
      c = c[1];
      var h = a - f,
        i = c - g,
        j = h === 0 || i === 0;
      j = Math.floor(((j ? Math.max : Math.min)(h, i) * e) / 1e3);
      j = Math.max(j, 1);
      e = h > 0 ? Math.ceil(j / 2) : 0;
      h = i > 0 ? Math.ceil(j / 2) : 0;
      i = 0;
      var k = 0;
      if (d === null) return [0, 1];
      for (var f = f + e; f <= a; f += j)
        for (var e = g + h; e <= c; e += j)
          (i += 1), this.isTopElement(d, f, e) && (k += 1);
      return i === 0 ? [0, 1] : [k, i];
    };
    a.prototype.$7 = function (a, b, c, d, e, f) {
      __p && __p();
      var g = 1,
        h = d + g;
      d = d + a - g;
      a = c + g;
      c = c + b - g;
      b = this.$6([h, d], [a, a], e);
      g = b[0];
      b = b[1];
      var i = this.$6([h, d], [c, c], e),
        j = i[0];
      i = i[1];
      var k = this.$6([h, h], [a, c], e),
        l = k[0];
      k = k[1];
      var m = this.$6([d, d], [a, c], e),
        n = m[0];
      m = m[1];
      var o = 0,
        p = 0;
      o = b + i + k + m;
      p = g + j + l + n;
      b = p / o;
      if (b === 1 || b === 0) return f * b;
      else {
        i = this.$6([h, d], [a, c], e);
        k = i[0];
        m = i[1];
        o += m;
        p += k;
        return f * (p / o);
      }
    };
    a.prototype.$5 = function (a) {
      __p && __p();
      var c = b('getViewportDimensions')(),
        d = c.width;
      c = c.height;
      var e = this.$4 && this.$3 ? this.$3 : this.$1;
      e = b('getElementPosition')(e);
      if (e.width === 0 || e.height === 0) return 0;
      var f = e.x,
        h = e.x + e.width,
        i = e.y,
        j = e.y + e.height;
      a = a ? g : 0;
      if (h <= 0 || f >= d || j <= a || i >= c) return 0;
      h = Math.min(h, d) - Math.max(f, 0);
      d = Math.min(j, c) - Math.max(i, a);
      f = (h * d * 100) / (e.width * e.height);
      return f;
    };
    e.exports = a;
  },
  null
);
__d(
  'VideoViewabilityLogging',
  [
    'VideoPlayerExperiments',
    'VideoPlayerLoggerEvent',
    'VideoViewabilityPercentage',
    'ViewabilityVideoElement',
    'performanceNow',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = b('VideoPlayerExperiments').viewabilityPollingRate,
      h = new Map([
        [0, b('VideoViewabilityPercentage').VIEWABLE_0],
        [25, b('VideoViewabilityPercentage').VIEWABLE_25],
        [50, b('VideoViewabilityPercentage').VIEWABLE_50],
        [75, b('VideoViewabilityPercentage').VIEWABLE_75],
        [100, b('VideoViewabilityPercentage').VIEWABLE_100],
      ]);
    function a(a, c, d, e) {
      (this.$12 = function (a) {
        if (!this.$14()) return;
        a = b('performanceNow')();
        a - this.$1 > g && (this.$10(), (this.$1 = a));
        this.$2 = window.requestAnimationFrame(this.$12);
      }.bind(this)),
        (this.$9 = function () {
          this.$13();
        }.bind(this)),
        (this.$8 = function () {
          this.setLastLoggedViewability(this.getViewability()), this.$11();
        }.bind(this)),
        (this.$1 = 0),
        (this.$4 = a),
        (this.$5 = new (b('ViewabilityVideoElement'))(
          c,
          d,
          e,
          this.$4.isSpherical()
        )),
        this.$6();
    }
    a.prototype.getViewability = function () {
      var a;
      this.$4.isInline()
        ? (a = this.$5.feedViewabilityPercentage())
        : (a = this.$5.viewabilityPercentage());
      return this.$7(a);
    };
    a.prototype.setLastLoggedViewability = function (a) {
      this.$3 = a;
    };
    a.prototype.$6 = function () {
      this.$4.addListener('beginPlayback', this.$8),
        this.$4.addListener('pausePlayback', this.$9);
    };
    a.prototype.$10 = function () {
      var a = this.getViewability();
      a != this.$3 &&
        (this.$4.logEvent(b('VideoPlayerLoggerEvent').VIEWABILITY_CHANGED, {
          current_viewability_percentage: a,
          last_viewability_percentage: this.$3,
        }),
        (this.$3 = a));
    };
    a.prototype.$11 = function () {
      this.$2 = window.requestAnimationFrame(this.$12);
    };
    a.prototype.$13 = function () {
      window.cancelAnimationFrame(this.$2);
    };
    a.prototype.$14 = function () {
      return this.$4.getVideoAPI().isPaused() !== undefined
        ? !this.$4.getVideoAPI().isPaused()
        : this.$4.getState() === 'playing';
    };
    a.prototype.$7 = function (a) {
      __p && __p();
      var c = b('VideoViewabilityPercentage').OFFSCREEN;
      if (a <= 0) return c;
      for (
        var d = h,
          e = Array.isArray(d),
          f = 0,
          d = e
            ? d
            : d[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var g;
        if (e) {
          if (f >= d.length) break;
          g = d[f++];
        } else {
          f = d.next();
          if (f.done) break;
          g = f.value;
        }
        g = g;
        var i = g[0];
        g = g[1];
        a >= i && (c = g);
      }
      return c;
    };
    e.exports = a;
  },
  null
);
__d(
  'XVideoDataController',
  ['XController'],
  function (a, b, c, d, e, f) {
    e.exports = b('XController').create('/video/video_data/', {
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
    });
  },
  null
);
__d(
  'getContextualParent',
  ['ge'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a, c) {
      __p && __p();
      c === void 0 && (c = !1);
      var d = !1;
      a = a;
      do {
        if (a instanceof Element) {
          var e = a.getAttribute('data-ownerid');
          if (e) {
            a = b('ge')(e);
            d = !0;
            continue;
          }
        }
        a = a.parentNode;
      } while (c && a && !d);
      return a;
    }
    e.exports = a;
  },
  null
);
__d(
  'collectDataAttributes',
  ['DataAttributeUtils', 'getContextualParent'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = 'normal';
    function a(a, c, d) {
      __p && __p();
      var e = {},
        f = [],
        h = c.length,
        i;
      for (i = 0; i < h; ++i) (e[c[i]] = {}), f.push('data-' + c[i]);
      if (d) {
        e[g] = {};
        for (i = 0; i < (d || []).length; ++i) f.push(d[i]);
      }
      d = { tn: '', 'tn-debug': ',' };
      a = a;
      while (a) {
        if (a.getAttribute)
          for (i = 0; i < f.length; ++i) {
            var j = f[i],
              k = b('DataAttributeUtils').getDataAttribute(a, j);
            if (k) {
              if (i >= h) {
                e[g][j] === undefined && (e[g][j] = k);
                continue;
              }
              j = JSON.parse(k);
              for (var l in j)
                d[l] !== undefined
                  ? (e[c[i]][l] === undefined && (e[c[i]][l] = []),
                    e[c[i]][l].push(j[l]))
                  : e[c[i]][l] === undefined && (e[c[i]][l] = j[l]);
            }
          }
        a = b('getContextualParent')(a);
      }
      for (var m in e)
        for (var n in d)
          e[m][n] !== undefined && (e[m][n] = e[m][n].join(d[n]));
      return e;
    }
    e.exports = a;
  },
  null
);
__d(
  'enumerate',
  [],
  function (a, b, c, d, e, f) {
    e.exports = (function (b) {
      return b.FB_enumerate;
    })(a);
  },
  null
);
__d(
  'forwardEvent',
  [],
  function (a, b, c, d, e, f) {
    function a(a, b, event) {
      return a.addListener(event, function () {
        for (var a = arguments.length, c = new Array(a), d = 0; d < a; d++)
          c[d] = arguments[d];
        return b.emit.apply(b, [event].concat(c));
      });
    }
    e.exports = a;
  },
  null
);
__d(
  'getVideoComponentName',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a) {
      if (a != null) {
        var b = null;
        a.prototype && a.prototype.constructor
          ? (b = a.prototype.constructor)
          : a.constructor && (b = a.constructor);
        if (b && b.name) return b.name;
        if (typeof a.toString === 'function') return a.toString();
      }
      return null;
    }
    e.exports = a;
  },
  null
);
__d(
  'logVideosClickTracking',
  ['clickRefAction'],
  function (a, b, c, d, e, f) {
    function a(a) {
      b('clickRefAction')('click', a, null, 'FORCE');
    }
    e.exports = a;
  },
  null
);
__d(
  'VideoPlayerController',
  [
    'csx',
    'cx',
    'invariant',
    'Promise',
    'Arbiter',
    'Banzai',
    'Bootloader',
    'CoverVideoOffsetType',
    'CSS',
    'DelegatedVideoPriorityAdjuster',
    'DOM',
    'DOMDimensions',
    'DOMQuery',
    'ErrorUtils',
    'EventEmitter',
    'FBLogger',
    'FullScreen',
    'JSLogger',
    'JSResource',
    'LiveCopyrightAction',
    'LiveVideoCopyrightActionSubscription',
    'LiveVideoPlayerStore',
    'MediaController',
    'Parent',
    'Run',
    'ScriptPath',
    'SphericalVideoPlayerEvents',
    'SubscriptionsHandler',
    'TahoeVariables',
    'URI',
    'VideoAsyncLoggerHelper',
    'VideoChannelViewChainLengthManager',
    'VideoControllerPlayingStateEmitter',
    'VideoLiveTrace',
    'VideoMimeTypes',
    'VideoPermalinkURI',
    'VideoPlaybackQuality',
    'VideoPlayerABRQualityTracker',
    'VideoPlayerApiEvents',
    'VideoPlayerConnectionQuality',
    'VideoPlayerExperiments',
    'VideoPlayerFormats',
    'VideoPlayerFormatsMap',
    'VideoPlayerHTML5Experiments',
    'VideoPlayerImmediatePlayReason',
    'VideoPlayerLogger',
    'VideoPlayerLoggerErrorStates',
    'VideoPlayerLoggerEvent',
    'VideoPlayerLoggerFallbackReasons',
    'VideoPlayerLoggerSource',
    'VideoPlayerMemLeakExperiments',
    'VideoPlayerOrigins',
    'VideoPlayerReason',
    'VideoPlayerReasonTransitionHelper',
    'VideoPlayerResizeSettings',
    'VideoPlayerShakaBandwidthEstimator',
    'VideoPlayerShakaConfig',
    'VideoPlayerStateBasedLoggingEvents',
    'VideoPlayerStates',
    'VideoPlayerUIComponentDrawer',
    'VideoPlayerUIComponentDrawerController',
    'VideoPlayerVersions',
    'VideoPlayerVolumeSettings',
    'VideosRenderingInstrumentation',
    'VideoViewabilityKeyEvents',
    'VideoViewabilityLogging',
    'VideoVisibilityObserver',
    'ViewportTrackingHelper',
    'Visibility',
    'XVideoDataController',
    'canVideoPlayType',
    'clearInterval',
    'collectDataAttributes',
    'enumerate',
    'forwardEvent',
    'getContextualParent',
    'getElementPosition',
    'getFullScreenElement',
    'getVideoComponentName',
    'getViewportDimensions',
    'gkx',
    'guid',
    'ifRequired',
    'logVideosClickTracking',
    'mapObject',
    'performanceAbsoluteNow',
    'promiseDone',
    'setInterval',
    'uniqueID',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    __p && __p();
    var j,
      k = b('VideoAsyncLoggerHelper').operateAsync,
      l = b('VideoPlaybackQuality').getDroppedFrames,
      m = b('VideoPlaybackQuality').getTotalFrames,
      n = 5,
      o = 1;
    function p() {
      return b('VideoPlayerHTML5Experiments').useMonotonicallyIncreasingTimers
        ? b('performanceAbsoluteNow')()
        : Date.now();
    }
    d = babelHelpers.inherits(c, b('MediaController'));
    j = d && d.prototype;
    function c(a, c) {
      __p && __p();
      var d = a.video_id,
        e = a.video_ids,
        f = a.video_url,
        g = a.video_urls,
        h = a.chaining_token,
        i = a.video_channel_id,
        k = a.reaction_video_channel_type,
        n = a.reaction_video_channel_subtype,
        o = a.source,
        q = a.ad_client_token,
        r = a.should_autoplay,
        s = a.immediateplay_reason,
        t = a.player_version,
        u = a.autoplay_setting,
        v = a.apiModule,
        w = a.apiConfig,
        x = a.useInlineFallback,
        y = a.accessToken,
        z = a.projection,
        A = a.playerOrigin,
        B = a.playerSuborigin,
        C = a.isBroadcast,
        D = a.isInstreamAd,
        E = a.components,
        F = a.trackingCodes,
        G = a.alwaysShowCaptions;
      a.disableLogging;
      var H = a.subtitleBackgroundColor,
        I = a.subtitleBackgroundOpacity,
        J = a.subtitleTextColor,
        K = a.subtitleTextSize,
        L = a.video_path,
        M = a.customLoggingProps,
        N = a.broadcasterOrigin,
        O = a.allowCrossPageTransition,
        P = a.isReactPlayer,
        Q = a.offsettype,
        R = a.offsetvalue,
        S = a.upstreamPlayerSource,
        T = a.shouldLogVideoViewability,
        U = a.livingRoomSessionID,
        V = a.broadcastId,
        W = a.isAdsPreview,
        X = a.isBroadcaster;
      a = a.keepPlayingOnDialog;
      var Y = c.root_element,
        Z = c.container_element;
      c = c.video_element;
      j.constructor.call(this);
      this.$VideoPlayerController21 = !1;
      this.$VideoPlayerController39 = !1;
      this.$VideoPlayerController77 = new Set(
        b('VideoPlayerStateBasedLoggingEvents').StateBasedLoggingEventNames
      );
      this.$VideoPlayerController78 = 0;
      this.$VideoPlayerController109 = [];
      this.$VideoPlayerController115 = null;
      this.$VideoPlayerController116 = null;
      this.$VideoPlayerController117 = new (b('EventEmitter'))();
      this.emitHeartbeat = function () {
        if (
          !this.isState(b('VideoPlayerStates').PLAYING) ||
          !this.getVideoNode()
        ) {
          this.stopHeartbeat();
          return;
        }
        if (
          b('VideoPlayerHTML5Experiments').heartbeatSkipOnBuffering &&
          this.isBuffering()
        )
          return;
        this.getVideoAPI().logHeartbeat();
      }.bind(this);
      this.$VideoPlayerController161 = function () {
        if (
          !b('VideoPlayerExperiments').allowBufferingErrorForHiddenTab &&
          b('Visibility').isHidden()
        ) {
          this.$VideoPlayerController160();
          this.$VideoPlayerController98 = setTimeout(
            this.$VideoPlayerController161,
            this.$VideoPlayerController104
          );
          return;
        }
        var a =
          this.getVideoAPI().isPaused() !== undefined
            ? !this.getVideoAPI().isPaused()
            : this.getState() === 'playing';
        a &&
          (this.logError({
            error: 'BUFFERING_TIMEOUT',
            message:
              'video has been in buffering state for over ' +
              this.$VideoPlayerController104 +
              'ms.',
            isPlayback: this.isPlayRequestPending(),
          }),
          this.$VideoPlayerController160(),
          this.emit('error', b('VideoPlayerLoggerFallbackReasons').TIMEOUT));
      }.bind(this);
      this.$VideoPlayerController113 = b('guid')();
      this.$VideoPlayerController46 = 0;
      this.$VideoPlayerController25 = 0;
      this.$VideoPlayerController24 = new Map();
      this.$VideoPlayerController80 = {};
      M && this.setLogEntryPropertyGetters(M);
      if (r === undefined)
        throw new Error(
          'Must pass should_autoplay to ' + this.constructor.name + '!'
        );
      this.$VideoPlayerController23 = new (b(
        'VideoPlayerUIComponentDrawerController'
      ))();
      this.$VideoPlayerController13 = new Map();
      this.$VideoPlayerController58 = z;
      this.$VideoPlayerController1 = y;
      this.$VideoPlayerController68 = !!r;
      this.$VideoPlayerController69 = s;
      this.$VideoPlayerController8 = u;
      this.$VideoPlayerController2 = q;
      this.$VideoPlayerController54 = !1;
      this.$VideoPlayerController89 = c;
      this.$VideoPlayerController67 = Y;
      this.$VideoPlayerController15 = Z;
      this.$VideoPlayerController34 = !1;
      this.$VideoPlayerController35 = !1;
      this.$VideoPlayerController57 = t;
      this.$VideoPlayerController88 = d || (e && e[0]) || '';
      this.$VideoPlayerController91 = f || (g && g[0]);
      this.$VideoPlayerController90 = L;
      this.$VideoPlayerController11 = h;
      this.$VideoPlayerController86 = i;
      this.$VideoPlayerController55 = A;
      this.$VideoPlayerController56 = B || o;
      this.$VideoPlayerController32 = C;
      this.$VideoPlayerController40 = D;
      this.$VideoPlayerController82 = F;
      this.$VideoPlayerController3 = G;
      this.$VideoPlayerController72 = H || '';
      this.$VideoPlayerController73 = I == undefined ? 0 : I;
      this.$VideoPlayerController74 = J || '';
      this.$VideoPlayerController75 = K == undefined ? 0 : K;
      this.$VideoPlayerController30 = b('uniqueID')();
      this.$VideoPlayerController64 = k;
      this.$VideoPlayerController65 = n;
      this.$VideoPlayerController116 = V;
      this.$VideoPlayerController118 = W;
      this.$VideoPlayerController119 = a;
      this.$VideoPlayerController5 = v;
      this.$VideoPlayerController4 = w;
      this.$VideoPlayerController76 =
        this.$VideoPlayerController5.getStartMutedFromConfig(
          this.$VideoPlayerController4
        );
      this.$VideoPlayerController43 =
        this.$VideoPlayerController5.getStreamTypeFromConfig(
          this.$VideoPlayerController4
        );
      this.$VideoPlayerController42 =
        this.$VideoPlayerController5.getIsServableViaFbmsFromConfig(
          this.$VideoPlayerController4
        );
      this.$VideoPlayerController41 =
        this.$VideoPlayerController5.getIsPlayingLiveFromConfig(
          this.$VideoPlayerController4
        );
      this.isLiveVideo() &&
        this.$VideoPlayerController116 &&
        (this.$VideoPlayerController115 = new (b('VideoLiveTrace'))(
          this.$VideoPlayerController116,
          this.$VideoPlayerController113
        ));
      this.$VideoPlayerController111 = !!T;
      this.$VideoPlayerController37 =
        this.$VideoPlayerController5.getIsSpherical(
          this.$VideoPlayerController4
        );
      this.$VideoPlayerController14 = new (b('VideoPlayerShakaConfig'))({
        is_ad: this.isAd(),
        is_live: this.$VideoPlayerController41,
        player_format:
          this.$VideoPlayerController120(this.isFullscreen(), o) || 'unknown',
        connection_quality: b('VideoPlayerConnectionQuality').evaluate(
          b('VideoPlayerShakaBandwidthEstimator').getBandwidth
        ),
        is_spherical: this.$VideoPlayerController37,
        content_category: 'general',
      });
      this.$VideoPlayerController112 = U;
      this.$VideoPlayerController43 === 'progressive'
        ? (this.$VideoPlayerController104 = b(
            'VideoPlayerExperiments'
          ).progressiveBufferingErrorTimeout)
        : this.isLiveVideo()
        ? (this.$VideoPlayerController104 = b(
            'VideoPlayerExperiments'
          ).liveBufferingErrorTimeout)
        : (this.$VideoPlayerController104 = b(
            'VideoPlayerExperiments'
          ).bufferingErrorTimeout);
      b('VideoPlayerExperiments').createVideoVisibilityObserver &&
        this.$VideoPlayerController121();
      this.$VideoPlayerController36 =
        this.$VideoPlayerController5.getIsFacecastAudioFromConfig(
          this.$VideoPlayerController4
        );
      this.$VideoPlayerController84 = !!x;
      this.$VideoPlayerController96 = new Set();
      this.$VideoPlayerController97 = N;
      this.$VideoPlayerController98 = null;
      this.$VideoPlayerController99 = !!O;
      this.$VideoPlayerController100 = !!P;
      this.$VideoPlayerController101 =
        this.getContainerNode().style.paddingBottom;
      this.$VideoPlayerController102 = Q;
      this.$VideoPlayerController103 = R;
      this.$VideoPlayerController105 = !1;
      this.$VideoPlayerController106 = !1;
      this.$VideoPlayerController83 = S;
      this.$VideoPlayerController22 = b('Arbiter').subscribe(
        'DOM/destroy',
        function (a, c) {
          if (!b('Parent').bySelector(this.getVideoNode(), c)) return;
          this.pause(b('VideoPlayerReason').UNLOADED);
          this.destroy();
        }.bind(this)
      );
      this.$VideoPlayerController19 = 0;
      M = b('URI').getRequestURI();
      z = b('VideoPermalinkURI').parse(M);
      y = parseFloat(M.getQueryData().t);
      r = z ? z.video_id == this.$VideoPlayerController88 : !1;
      y &&
        r &&
        this.$VideoPlayerController4 &&
        (this.$VideoPlayerController4.startTimestamp = y);
      b('VideoPlayerHTML5Experiments').useVpcPlayingStateForPrioritization &&
        this.$VideoPlayerController4 &&
        (this.$VideoPlayerController4.vpcPlayingStateEmitter = new (b(
          'VideoControllerPlayingStateEmitter'
        ))(this));
      this.$VideoPlayerController110 = new (b(
        'DelegatedVideoPriorityAdjuster'
      ))();
      b('VideoPlayerExperiments').adjustPriorityBasedOnAutoplayIndex &&
        this.$VideoPlayerController4 &&
        (this.$VideoPlayerController4.streamPriorityAdjuster =
          this.$VideoPlayerController110);
      this.$VideoPlayerController17 = null;
      this.$VideoPlayerController52 = null;
      this.$VideoPlayerController70 = o;
      this.$VideoPlayerController48 = new (b('VideoPlayerLogger'))(o);
      this.$VideoPlayerController70 === b('VideoPlayerLoggerSource').TAHOE &&
        this.focusOnContainerNode();
      this.collectFeedTrackingData();
      this.$VideoPlayerController48.setScriptPath(
        b('ScriptPath').getScriptPath()
      );
      this.$VideoPlayerController48.setFrameCountGetters(
        function () {
          return this.$VideoPlayerController89 != null
            ? l(this.$VideoPlayerController89)
            : null;
        }.bind(this),
        function () {
          return this.$VideoPlayerController89 != null
            ? m(this.$VideoPlayerController89)
            : null;
        }.bind(this)
      );
      this.$VideoPlayerController60 = b(
        'VideosRenderingInstrumentation'
      ).retrieveRenderTime(this.getRootNode());
      this.$VideoPlayerController59 = p() - this.$VideoPlayerController60;
      w &&
        (w.subtitleDrawer = this.registerDrawer(
          b('VideoPlayerUIComponentDrawer').priorities.Subtitles,
          0
        ));
      this.$VideoPlayerController71 = 'loading';
      this.$VideoPlayerController122(!1);
      if (
        this.$VideoPlayerController5.isImplementationUnavailable(
          this.$VideoPlayerController84
        )
      )
        if (this.$VideoPlayerController84) this.$VideoPlayerController123();
        else {
          this.$VideoPlayerController124();
          return;
        }
      else this.$VideoPlayerController125();
      b('Banzai').subscribe(
        b('Banzai').SHUTDOWN,
        function () {
          this.pause(b('VideoPlayerReason').UNLOADED), this.destroy();
        }.bind(this)
      );
      this.$VideoPlayerController7 = new (b('SubscriptionsHandler'))();
      this.$VideoPlayerController68 &&
        (b('VideoPlayerExperiments').delayAutoplayUntilAfterLoad
          ? this.$VideoPlayerController7.addSubscriptions(
              b('Run').onAfterLoad(
                function () {
                  return this.$VideoPlayerController126();
                }.bind(this)
              )
            )
          : this.$VideoPlayerController126());
      this.$VideoPlayerController20 = 0;
      this.$VideoPlayerController66 = !1;
      this.$VideoPlayerController26 = this.$VideoPlayerController127();
      this.$VideoPlayerController7.addSubscriptions(
        b('Banzai').subscribe(
          b('Banzai').SHUTDOWN,
          function () {
            this.pause(b('VideoPlayerReason').UNLOADED), this.destroy();
          }.bind(this)
        )
      );
      this.$VideoPlayerController128() ||
        this.$VideoPlayerController7.addSubscriptions(
          b('Arbiter').subscribe(
            'layer_shown',
            function (a, c) {
              if (
                c.type === 'DialogX' ||
                c.type === 'PhotoSnowlift' ||
                c.type === 'Spotlight'
              ) {
                c.type !== 'Spotlight' &&
                  b('Bootloader').loadModules(
                    ['VideoAutoplayControllerX'],
                    function (a) {
                      a.setShouldAutoplay(!1);
                    },
                    'VideoPlayerController'
                  );
                this.$VideoPlayerController20 =
                  this.$VideoPlayerController20 + 1;
                if (
                  b('VideoPlayerExperiments').ignoreDialogCounter ||
                  this.$VideoPlayerController20 > 0
                ) {
                  a =
                    this.$VideoPlayerController70 ===
                      b('VideoPlayerLoggerSource').TAHOE && this.isLiveVideo();
                  this.isState('playing') &&
                    !(a && b('TahoeVariables').neverAutoPauseLive) &&
                    !this.$VideoPlayerController119 &&
                    (this.pause(b('VideoPlayerReason').PAGE_VISIBILITY),
                    (this.$VideoPlayerController66 = !0));
                }
              }
            }.bind(this)
          ),
          b('Arbiter').subscribe(
            'layer_hidden',
            function (a, c) {
              (c.type === 'DialogX' ||
                c.type === 'PhotoSnowlift' ||
                c.type === 'Spotlight') &&
                (b('VideoPlayerExperiments').addViewabilityFixEnabled
                  ? (this.$VideoPlayerController20 = Math.max(
                      0,
                      this.$VideoPlayerController20 - 1
                    ))
                  : (this.$VideoPlayerController20 =
                      this.$VideoPlayerController20 - 1),
                this.$VideoPlayerController20 === 0 &&
                  (c.type !== 'Spotlight' &&
                    b('Bootloader').loadModules(
                      ['VideoAutoplayControllerX'],
                      function (a) {
                        a.setShouldAutoplay(!0);
                      },
                      'VideoPlayerController'
                    ),
                  this.$VideoPlayerController66 &&
                    (this.play(b('VideoPlayerReason').PAGE_VISIBILITY),
                    (this.$VideoPlayerController66 = !1))));
            }.bind(this)
          )
        );
      this.$VideoPlayerController7.addSubscriptions(
        b('Arbiter').subscribe(
          b('JSLogger').DUMP_EVENT,
          function (a, b) {
            return this.$VideoPlayerController129(a, b);
          }.bind(this)
        )
      );
      b('Run').onLeave(
        function () {
          if (
            this.$VideoPlayerController99 ||
            (b('VideoPlayerExperiments').persistentWNSEnabled &&
              this.$VideoPlayerController70 ===
                b('VideoPlayerLoggerSource').WATCH_SCROLL)
          )
            return;
          this.cleanOnLeave();
        }.bind(this)
      );
      this.$VideoPlayerController12 = E || [];
      this.$VideoPlayerController12.forEach(
        function (a) {
          var c = b('getVideoComponentName')(a) || '<MalformedComponent>';
          a && typeof a.enable === 'function'
            ? b('VideoPlayerExperiments').enableComponentGuards
              ? b('ErrorUtils').applyWithGuard(
                  a.enable,
                  a,
                  [this],
                  null,
                  'VideoPlayerController Component Enable Guard: ' + c
                )
              : a.enable(this)
            : b('FBLogger')('video').warn(
                'no_enable_method_on_component: %s',
                c
              );
        }.bind(this)
      );
      this.$VideoPlayerController51 = 1;
      this.$VideoPlayerController92 = !1;
      this.$VideoPlayerController89 &&
        (this.shouldCalculateViewability()
          ? ((this.$VideoPlayerController92 =
              b('VideoPlayerExperiments').enableViewabilityLogging ||
              (b('VideoPlayerExperiments')
                .enableVideoSampledViewabilityLogging &&
                !!this.$VideoPlayerController111)),
            this.isInstreamAd() &&
              (this.$VideoPlayerController92 =
                this.$VideoPlayerController92 &&
                (b('VideoPlayerExperiments')
                  .enableInstreamAdViewabilityLogging ||
                  (b('VideoPlayerExperiments')
                    .enableVideoSampledViewabilityLogging &&
                    !!this.$VideoPlayerController111))))
          : (this.$VideoPlayerController92 = b(
              'VideoPlayerExperiments'
            ).enableViewabilityLoggingForOrganic));
      this.$VideoPlayerController92 &&
        this.$VideoPlayerController89 &&
        (this.$VideoPlayerController93 = new (b('VideoViewabilityLogging'))(
          this,
          this.$VideoPlayerController89,
          this.$VideoPlayerController67,
          this.$VideoPlayerController15
        ));
      this.$VideoPlayerController31 = !1;
      this.isLiveVideo() &&
        (this.$VideoPlayerController16 = b(
          'LiveVideoCopyrightActionSubscription'
        ).subscribe(
          this.getVideoID(),
          function (a) {
            __p && __p();
            a = a.live_video_copyright_action_subscribe.action.toLowerCase();
            switch (a) {
              case b('LiveCopyrightAction').BLOCK:
                this.emit('blockVideo');
                break;
              case b('LiveCopyrightAction').MUTE:
                this.emit('blockAudio');
                this.$VideoPlayerController31 = !0;
                this.mute();
                break;
              case b('LiveCopyrightAction').UNMUTE:
                this.emit('unblockAudio');
                this.$VideoPlayerController31 = !1;
                this.unmute();
                break;
            }
          }.bind(this)
        ));
      this.$VideoPlayerController33 = X;
    }
    c.prototype.setVideoPriorityAdjustment = function (a) {
      this.$VideoPlayerController110.notifyAdjustment(a);
    };
    c.prototype.addListener = function () {
      var a;
      for (var b = arguments.length, c = new Array(b), d = 0; d < b; d++)
        c[d] = arguments[d];
      var e = (a = j.addListener).call.apply(a, [this].concat(c));
      c[0] === 'visibilityChanged' && this.$VideoPlayerController121();
      return e;
    };
    c.prototype.$VideoPlayerController121 = function () {
      if (this.$VideoPlayerController107) return;
      this.$VideoPlayerController89 || i(0, undefined);
      this.$VideoPlayerController107 = new (b('VideoVisibilityObserver'))(
        this.$VideoPlayerController89
      );
      this.$VideoPlayerController107.addListener(
        'visibilityChanged',
        function (a) {
          return this.emit('visibilityChanged', a);
        }.bind(this)
      );
    };
    c.prototype.setAutoScrollIntoView = function (a) {
      this.$VideoPlayerController21 = !a;
    };
    c.prototype.setDetectionID = function (a) {
      this.$VideoPlayerController114 = a;
    };
    c.prototype.destroy = function (a) {
      __p && __p();
      a = a || {};
      if (this.isState('destroyed') || this.$VideoPlayerController35) return;
      this.$VideoPlayerController35 = !0;
      this.$VideoPlayerController107 &&
        (this.$VideoPlayerController107.destroy(),
        (this.$VideoPlayerController107 = null));
      var c = this.$VideoPlayerController12;
      for (var d = c.length - 1; d >= 0; d--) {
        var e = c[d],
          f = b('getVideoComponentName')(e) || '<MalformedComponent>';
        e && typeof e.disable === 'function'
          ? b('VideoPlayerExperiments').enableComponentGuards
            ? b('ErrorUtils').applyWithGuard(
                e.disable,
                e,
                [this],
                null,
                'VideoPlayerController Component Disable Guard: ' + f
              )
            : e.disable(this)
          : b('FBLogger')('video').warn(
              'no_disable_method_on_component: %s',
              f
            );
      }
      b('gkx')(
        'AT4JzxHQIxRND8Kmb4P0ZKgRZIAtL9c6D4Sb7E0b1oCDX0oYcMUrO_8NRrEgEKcOrnd9zWa26WQWQYrttYx8SZzBTB7PEFVsuhlrNpYaHcKJ5Q'
      )
        ? this.$VideoPlayerController85 && this.getVideoAPI().destroy(a)
        : this.getVideoAPI().destroy(a);
      this.setState('destroyed');
      this.$VideoPlayerController7.release();
      a.skipRemoveAllListeners || this.removeAllListeners();
      this.$VideoPlayerController22 &&
        (this.$VideoPlayerController22.unsubscribe(),
        (this.$VideoPlayerController22 = null));
      this.stopHeartbeat();
      b('VideoPlayerMemLeakExperiments').release_dom_nodes_on_destroy &&
        ((this.$VideoPlayerController89 = null),
        (this.$VideoPlayerController67 = null),
        (this.$VideoPlayerController15 = null));
      this.$VideoPlayerController16 &&
        (this.$VideoPlayerController16.unsubscribe(),
        (this.$VideoPlayerController16 = null));
    };
    c.prototype.$VideoPlayerController130 = function () {
      var a = b('DOMQuery').scry(
        this.getVideoNode(),
        '[data-fallback-markup="1"]'
      );
      if (!a.length) return b('Promise').reject();
      b('DOM').replace(this.getVideoNode(), a[0]);
      this.$VideoPlayerController89 = a[0];
      return b('JSResource')('VideoPlayerFlashApi')
        .__setRef('VideoPlayerController')
        .load();
    };
    c.prototype.$VideoPlayerController123 = function () {
      this.logEvent(b('VideoPlayerLoggerEvent').SWITCHED_IMPLEMENTATION, {
        error_user_info: this.getDebugInfo(),
      }),
        b('promiseDone')(
          this.$VideoPlayerController130().then(function (a) {
            if (a.isImplementationUnavailable()) return b('Promise').reject();
            else return b('Promise').resolve(a);
          }),
          function (a) {
            (this.$VideoPlayerController5 = a),
              this.$VideoPlayerController125();
          }.bind(this),
          function (a) {
            return this.$VideoPlayerController124();
          }.bind(this)
        );
    };
    c.prototype.collectFeedTrackingData = function () {
      __p && __p();
      if (this.$VideoPlayerController82) {
        var a = { tn: '', 'tn-debug': ',' },
          c = {};
        for (var d = 0; d < this.$VideoPlayerController82.length; d++) {
          var e = JSON.parse(this.$VideoPlayerController82[d]);
          if (!Array.isArray(e))
            for (var f in e)
              a[f] !== undefined
                ? (c[f] === undefined && (c[f] = []), c[f].push(e[f]))
                : c[f] === undefined && (c[f] = e[f]);
        }
        for (var g in a) c[g] !== undefined && (c[g] = c[g].join(a[g]));
        e = { ft: c };
      } else {
        d = !1;
        a = this.getRootNode();
        while (a) {
          if (a instanceof Element && b('CSS').matchesSelector(a, '._4oep')) {
            d = !0;
            break;
          }
          a = b('getContextualParent')(a);
        }
        !d
          ? this.isState('replayed')
            ? (e = b('collectDataAttributes')(window.event.target, ['ft']))
            : (e = b('collectDataAttributes')(this.getRootNode(), ['ft']))
          : (e = {});
      }
      this.$VideoPlayerController48.setFTData(e);
    };
    c.prototype.$VideoPlayerController129 = function (a, c) {
      (c.video_player_debug_info = c.video_player_debug_info || {
        hardware: this.$VideoPlayerController131(),
        live_autoplay_bandwidth_restrain: b(
          'VideoPlayerShakaBandwidthEstimator'
        ).isAutoplayBandwidthRestrained(!0),
        autoplay_bandwidth_restrain: b(
          'VideoPlayerShakaBandwidthEstimator'
        ).isAutoplayBandwidthRestrained(!1),
      }),
        (c.video_player_debug_info[this.getVideoID()] = this.getDebugInfo());
    };
    c.prototype.$VideoPlayerController131 = function () {
      try {
        var a = document.createElement('canvas');
        a = a.getContext('webgl') || a.getContext('experimental-webgl');
        var b = a.getExtension('WEBGL_debug_renderer_info');
        return (
          b && {
            vendor: a.getParameter(b.UNMASKED_VENDOR_WEBGL),
            renderer: a.getParameter(b.UNMASKED_RENDERER_WEBGL),
          }
        );
      } catch (a) {}
      return null;
    };
    c.prototype.setStillFrameEnabled = function (a) {
      var b = this.getVideoAPI();
      b.setStillFrameEnabled && b.setStillFrameEnabled(a);
    };
    c.prototype.isFallbackRecoverable = function () {
      return !!this.$VideoPlayerController79;
    };
    c.prototype.setFallbackSources = function (a) {
      this.$VideoPlayerController79 = a;
    };
    c.prototype.setRelativeSphericalOrientation = function (a, c) {
      this.emit(
        b('SphericalVideoPlayerEvents').SET_RELATIVE_SPHERICAL_ORIENTATION,
        a,
        c
      );
    };
    c.prototype.setSphericalOrientation = function (a, c) {
      this.emit(
        b('SphericalVideoPlayerEvents').SET_ABSOLUTE_SPHERICAL_ORIENTATION,
        a,
        c
      );
    };
    c.prototype.setSphericalFieldOfView = function (a) {
      this.emit(b('SphericalVideoPlayerEvents').SET_FIELD_OF_VIEW, a);
    };
    c.prototype.isSpherical = function () {
      return this.$VideoPlayerController37;
    };
    c.prototype.getVideoPlayerID = function () {
      return this.$VideoPlayerController30;
    };
    c.prototype.focusOnContainerNode = function () {
      this.$VideoPlayerController15 && this.$VideoPlayerController15.focus();
    };
    c.prototype.setLogEntryPropertyGetters = function (a) {
      Object.keys(a).forEach(
        function (b) {
          var c = a[b];
          typeof c === 'function'
            ? this.$VideoPlayerController24.set(b, c)
            : (this.$VideoPlayerController80[b] = c);
        }.bind(this)
      );
    };
    c.prototype.removeLogEntryPropertyGetters = function (a) {
      typeof a === 'string' && (a = [a]),
        Array.isArray(a) || (a = Object.keys(a)),
        a.forEach(
          function (a) {
            this.$VideoPlayerController24['delete'](a),
              delete this.$VideoPlayerController80[a];
          }.bind(this)
        );
    };
    c.prototype.$VideoPlayerController125 = function () {
      this.$VideoPlayerController5.onImplementationReady(
        this.getVideoNode(),
        function () {
          return this.onApiReady();
        }.bind(this)
      );
    };
    c.prototype.isImplementationUnavailable = function () {
      return (
        this.$VideoPlayerController5.isImplementationUnavailable(
          this.$VideoPlayerController84
        ) && !this.$VideoPlayerController84
      );
    };
    c.prototype.getIsInChannel = function () {
      return (
        this.$VideoPlayerController70 === b('VideoPlayerLoggerSource').CHANNEL
      );
    };
    c.prototype.updateSource = function (a) {
      if (!this.$VideoPlayerController70) return;
      var c = b('VideoPlayerFormatsMap')[this.$VideoPlayerController70],
        d = b('VideoPlayerFormatsMap')[a];
      this.$VideoPlayerController48.updateSource(a);
      this.$VideoPlayerController14.setContext(
        'player_format',
        this.$VideoPlayerController120(this.isFullscreen(), a) || 'unknown'
      );
      c &&
        c !== d &&
        this.$VideoPlayerController94 &&
        (b('VideoPlayerExperiments').delayFormatChangeEvent
          ? this.isState(b('VideoPlayerStates').PLAYING) &&
            !this.$VideoPlayerController38
            ? (this.logEvent(b('VideoPlayerLoggerEvent').PLAYER_FORMAT_CHANGED),
              (this.$VideoPlayerController45 = d))
            : (this.$VideoPlayerController45 = c)
          : this.logEvent(b('VideoPlayerLoggerEvent').PLAYER_FORMAT_CHANGED));
      this.$VideoPlayerController70 = a;
    };
    c.prototype.getSource = function () {
      return this.$VideoPlayerController48.getSource();
    };
    c.prototype.getPlayerOrigin = function () {
      return this.$VideoPlayerController55;
    };
    c.prototype.getPlayerSuborigin = function () {
      return this.$VideoPlayerController56;
    };
    c.prototype.hasLooped = function () {
      return this.$VideoPlayerController51 > 1;
    };
    c.prototype.$VideoPlayerController124 = function () {
      var a = {
        error: 'IMPLEMENTATION_NOT_SUPPORTED',
        state: b('VideoPlayerLoggerErrorStates').PLAYER_FAILURE,
        error_description: 'Implementation unavailable',
        error_user_info: this.getDebugInfo(),
      };
      this.logEvent(b('VideoPlayerLoggerEvent').ERROR, a);
      this.$VideoPlayerController68 = !1;
    };
    c.prototype.logError = function (a) {
      __p && __p();
      a = this.$VideoPlayerController44 = a;
      var c = a.error,
        d = a.message,
        e = a.isPlayback,
        f = a.httpStatus,
        g = a.url;
      a = a.stack;
      var h = this.getDebugInfo();
      a && (h.player.stack = a);
      delete h.player.loggedError;
      delete h.player.lastError;
      a = {
        error: c,
        error_description: d,
        error_user_info: h,
        error_code: f,
        resource_url: g,
        state: e
          ? b('VideoPlayerLoggerErrorStates').PLAYBACK_FAILURE
          : b('VideoPlayerLoggerErrorStates').PLAYER_FAILURE,
      };
      this.$VideoPlayerController47 = this.logEvent(
        b('VideoPlayerLoggerEvent').ERROR,
        a
      );
      this.$VideoPlayerController37 &&
        Math.random() < 0.01 &&
        b('gkx')(
          'AT62ojn41xLdDzte74igQHKCvhNbjzVlg7Mqtf_NPyGWcc3hsqsjlDziE5T1_FG2OvTDtt0aFUYmKbuuIJNlQLTz'
        ) &&
        b('FBLogger')('360video').warn('360 video player error: %s %s', c, d);
      e && this.$VideoPlayerController54 && this.$VideoPlayerController122(!1);
    };
    c.prototype.setRotation = function (a) {
      this.getVideoAPI().setRotation(a);
    };
    c.prototype.setDimensions = function (a, c) {
      __p && __p();
      var d = this.getContainerNode();
      d.style.width = a + 'px';
      d.style.height = c + 'px';
      d = this.getVideoNode();
      d.style.width = a + 'px';
      d.style.height = c + 'px';
      if (this.isState('loading'))
        this.$VideoPlayerController61 = { width: a, height: c };
      else {
        if (
          this.isPlayerVersion('silvercity') &&
          (this.$VideoPlayerController38 ||
            b('VideoPlayerResizeSettings').disable_flash_set_dimensions)
        )
          return;
        this.setVideoPlayerAPIDimensions(a, c);
      }
    };
    c.prototype.isPlayRequestPending = function () {
      return this.$VideoPlayerController54;
    };
    c.prototype.$VideoPlayerController122 = function (a) {
      if (this.$VideoPlayerController54 === a) return;
      this.$VideoPlayerController54 = a;
      this.emit('pendingPlayRequestChanged');
    };
    c.prototype.updateAutoplayRestrained = function () {
      b('ifRequired')(
        'VideoPlayerHTML5Shaka',
        function (a) {
          a = a.isAutoplayBandwidthRestrained(this.$VideoPlayerController41);
          this.$VideoPlayerController132(a);
        }.bind(this)
      );
    };
    c.prototype.$VideoPlayerController132 = function (a) {
      a
        ? this.emit('turnOffAutoplay', { reason: 'poor_network_quality' })
        : this.emit('resumeAutoplay', { reason: 'poor_network_quality' });
      if (
        b('gkx')(
          'AT4JzxHQIxRND8Kmb4P0ZKgRZIAtL9c6D4Sb7E0b1oCDX0oYcMUrO_8NRrEgEKcOrnd9zWa26WQWQYrttYx8SZzBTB7PEFVsuhlrNpYaHcKJ5Q'
        )
      ) {
        var c = this.getVideoAPI();
        c && c.setPreloadDisabled(a);
      } else this.getVideoAPI().setPreloadDisabled(a);
    };
    c.prototype.restoreStreamBufferSize = function () {
      if (
        b('gkx')(
          'AT4JzxHQIxRND8Kmb4P0ZKgRZIAtL9c6D4Sb7E0b1oCDX0oYcMUrO_8NRrEgEKcOrnd9zWa26WQWQYrttYx8SZzBTB7PEFVsuhlrNpYaHcKJ5Q'
        )
      ) {
        var a = this.getVideoAPI();
        a && a.restoreStreamBufferSize();
      } else this.getVideoAPI().restoreStreamBufferSize();
    };
    c.prototype.getDataInsertionPosition = function () {
      return (
        this.$VideoPlayerController26 &&
        this.$VideoPlayerController26.getAttribute('data-insertion-position')
      );
    };
    c.prototype.getDataFt = function () {
      return (
        this.$VideoPlayerController26 &&
        this.$VideoPlayerController26.getAttribute('data-ft')
      );
    };
    c.prototype.play = function (a) {
      __p && __p();
      var c = null;
      a instanceof b('VideoPlayerReasonTransitionHelper')
        ? (c = a.getReason())
        : (c = a);
      a = this.getVideoNodeNullable();
      if (
        a &&
        a.scrollIntoView &&
        c === b('VideoPlayerReason').USER &&
        !this.$VideoPlayerController21 &&
        this.$VideoPlayerController14.getBool('enable_autoscroll_into_view', !1)
      ) {
        var d = this.getDOMPosition(),
          e = d.y >= 0;
        d = d.y + d.height <= b('getViewportDimensions')().height;
        !e ? a.scrollIntoView(!0) : d || a.scrollIntoView(!1);
      }
      this.$VideoPlayerController133();
      this.$VideoPlayerController53 || (this.$VideoPlayerController53 = c);
      this.$VideoPlayerController108 = this.getOption(
        'VideoWithCommercialBreak',
        'controller'
      );
      if (
        this.$VideoPlayerController108 &&
        this.$VideoPlayerController108.shouldPlayPreRollAds(c)
      ) {
        this.$VideoPlayerController108.schedulePreRollAds();
        return;
      }
      if (!this.$VideoPlayerController54) {
        this.$VideoPlayerController52 = this.$VideoPlayerController134();
        var f = this.$VideoPlayerController135({ debug_reason: c });
        e = this.$VideoPlayerController70;
        b('VideoPlayerExperiments').delayFormatChangeEvent &&
          e &&
          this.$VideoPlayerController94 &&
          this.$VideoPlayerController45 &&
          b('VideoPlayerFormatsMap')[e] !== this.$VideoPlayerController45 &&
          !this.$VideoPlayerController38 &&
          (this.logEvent(b('VideoPlayerLoggerEvent').PLAYER_FORMAT_CHANGED),
          (this.$VideoPlayerController45 = b('VideoPlayerFormatsMap')[e]));
        b('VideoPlayerExperiments').logRequestedPlayingAsync
          ? k(
              function () {
                this.logEvent(b('VideoPlayerLoggerEvent').REQUESTED_PLAYING, f);
              }.bind(this),
              [
                b('VideoPlayerLoggerEvent').STARTED_PLAYING,
                b('VideoPlayerLoggerEvent').UNPAUSED,
              ],
              this.$VideoPlayerController117
            )
          : this.logEvent(b('VideoPlayerLoggerEvent').REQUESTED_PLAYING, f);
        this.$VideoPlayerController94 = !0;
      }
      this.$VideoPlayerController136(c);
      this.emit('playRequested', c);
      this.sendPlayRequest(c);
      c === b('VideoPlayerReason').LOOP &&
        (this.$VideoPlayerController51++,
        this.$VideoPlayerController51 > 10 &&
          this.$VideoPlayerController14.getBool(
            'disable_logging_for_long_loops',
            !1
          ) &&
          (this.$VideoPlayerController95 = !0));
    };
    c.prototype.sendPlayRequest = function (a) {
      if (this.isState('fallback')) {
        this.emit('fallbackPlay');
        b('VideoPlayerExperiments').endBufferingOnFallbackPlay &&
          this.$VideoPlayerController48.endBuffering();
        return;
      }
      this.$VideoPlayerController122(!0);
      this.isState('loading')
        ? (this.$VideoPlayerController62 = { reason: a })
        : (!this.getVideoAPI().isMuted() &&
            this.$VideoPlayerController50 &&
            (b('VideoPlayerExperiments').logUnmutedAsync
              ? k(
                  function () {
                    this.logEvent(b('VideoPlayerLoggerEvent').UNMUTED);
                  }.bind(this),
                  [
                    b('VideoPlayerLoggerEvent').STARTED_PLAYING,
                    b('VideoPlayerLoggerEvent').UNPAUSED,
                  ],
                  this.$VideoPlayerController117
                )
              : this.logEvent(b('VideoPlayerLoggerEvent').UNMUTED)),
          (this.$VideoPlayerController50 = !1),
          this.$VideoPlayerController137(),
          this.getVideoAPI().play(a));
    };
    c.prototype.getOriginalPlayReason = function () {
      return this.$VideoPlayerController53;
    };
    c.prototype.reset = function () {
      if (
        this.isState('loading') ||
        (this.isState('fallback') && !this.isFallbackRecoverable())
      )
        return;
      this.resetPositions();
      this.$VideoPlayerController138();
      this.$VideoPlayerController85 &&
        this.$VideoPlayerController85.destroy &&
        this.$VideoPlayerController85.destroy();
      this.$VideoPlayerController85 = null;
      this.setState('loading');
      this.$VideoPlayerController125();
    };
    c.prototype.detachRootNode = function () {
      if (!this.$VideoPlayerController67) return;
      b('DOM').remove(this.$VideoPlayerController67);
      if (this.isState('fallback') || this.isState('loading')) return;
      this.setState('loading');
      this.$VideoPlayerController5.onImplementationReady(
        this.getVideoNode(),
        function () {
          return this.$VideoPlayerController139();
        }.bind(this)
      );
    };
    c.prototype.getVideoAPI = function () {
      this.$VideoPlayerController85 || i(0, undefined);
      return this.$VideoPlayerController85;
    };
    c.prototype.getVideoNodeNullable = function () {
      return this.$VideoPlayerController89;
    };
    c.prototype.getVideoNode = function () {
      if (this.isState('destroyed')) {
        var a =
          'Cannot get video node, VideoPlayerController is destroyed. In the future, this will be an error.';
        b('FBLogger')('video').debug(a);
      }
      a = this.getVideoNodeNullable();
      b('VideoPlayerMemLeakExperiments').release_dom_nodes_on_destroy &&
        (a || i(0, undefined));
      return a;
    };
    c.prototype.getRootNodeNullable = function () {
      return this.$VideoPlayerController67;
    };
    c.prototype.getRootNode = function () {
      if (this.isState('destroyed')) {
        var c = a.console,
          d =
            'Cannot get root node, VideoPlayerController is destroyed. In the future, this will throw an error.';
        b('FBLogger')('video').warn(d);
        c.warn(d);
      }
      c = this.getRootNodeNullable();
      b('VideoPlayerMemLeakExperiments').release_dom_nodes_on_destroy &&
        (c || i(0, undefined));
      return c;
    };
    c.prototype.getContainerNodeNullable = function () {
      return this.$VideoPlayerController15;
    };
    c.prototype.getContainerNode = function () {
      if (this.isState('destroyed')) {
        var c = a.console,
          d =
            'Cannot get container node, VideoPlayerController is destroyed.In the future, this will throw an error.';
        b('FBLogger')('FIXME').warn(d);
        c.warn(d);
      }
      c = this.getContainerNodeNullable();
      b('VideoPlayerMemLeakExperiments').release_dom_nodes_on_destroy &&
        (c || i(0, undefined));
      return c;
    };
    c.prototype.getVideoResolution = function () {
      var a = this.getVideoNode();
      return { height: a.videoHeight, width: a.videoWidth };
    };
    c.prototype.$VideoPlayerController139 = function () {
      this.setState('ready'),
        (this.$VideoPlayerController50 = !this.getVideoAPI().isMuted()),
        (this.$VideoPlayerController81 = !this.$VideoPlayerController3),
        this.getVideoAPI().setSubtitlesStyle &&
          this.getVideoAPI().setSubtitlesStyle(
            this.$VideoPlayerController72,
            this.$VideoPlayerController73,
            this.$VideoPlayerController74,
            this.$VideoPlayerController75
          ),
        this.$VideoPlayerController62 &&
          (this.sendPlayRequest(this.$VideoPlayerController62.reason),
          (this.$VideoPlayerController62 = null)),
        this.$VideoPlayerController61 &&
          (this.setDimensions(
            this.$VideoPlayerController61.width,
            this.$VideoPlayerController61.height
          ),
          (this.$VideoPlayerController61 = null)),
        this.$VideoPlayerController63 &&
          (this.getVideoAPI().unmute(), (this.$VideoPlayerController63 = null));
    };
    c.prototype.onApiReady = function () {
      __p && __p();
      this.$VideoPlayerController4 &&
        ((this.$VideoPlayerController4.id = this.$VideoPlayerController30),
        this.$VideoPlayerController79 &&
          (this.$VideoPlayerController4.fallbackSources =
            this.$VideoPlayerController79),
        (this.$VideoPlayerController4.playerOrigin =
          this.$VideoPlayerController55),
        (this.$VideoPlayerController4.playerSuborigin =
          this.$VideoPlayerController56),
        (this.$VideoPlayerController4.getSource = function () {
          return this.getSource();
        }.bind(this)),
        (this.$VideoPlayerController4.shakaConfig =
          this.$VideoPlayerController14),
        (this.$VideoPlayerController4.playerInstanceKey =
          this.$VideoPlayerController113),
        this.$VideoPlayerController115 &&
          (this.$VideoPlayerController4.videoLiveTrace =
            this.$VideoPlayerController115));
      this.$VideoPlayerController85 = new this.$VideoPlayerController5(
        this.getVideoNode(),
        this.$VideoPlayerController4
      );
      this.$VideoPlayerController140();
      this.$VideoPlayerController139();
      var a = { is_auto_played: this.isAutoplayable() };
      this.logEvent(b('VideoPlayerLoggerEvent').PLAYER_LOADED, a);
      this.$VideoPlayerController85 &&
        this.$VideoPlayerController48.setABRQualityTracker(
          new (b('VideoPlayerABRQualityTracker'))(
            this.$VideoPlayerController85.getLocalEstimator()
          )
        );
      a = this.getVideoProjection();
      a && (this.$VideoPlayerController58 = a);
      this.emit('apiReady');
    };
    c.prototype.getLocalEstimator = function () {
      if (this.$VideoPlayerController85)
        return this.$VideoPlayerController85.getLocalEstimator();
      else return null;
    };
    c.prototype.runOnApiReady = function (a) {
      a === void 0 && (a = function () {}),
        !this.isState('loading') ? a() : this.once('apiReady', a);
    };
    c.prototype.resetPositions = function () {
      this.$VideoPlayerController19 = 0;
    };
    c.prototype.getCurrentTimePosition = function () {
      if (this.isState('playing')) {
        var a = this.getVideoAPI().getCurrentTimePosition();
        a != null && a !== undefined && (this.$VideoPlayerController19 = a);
      }
      return this.$VideoPlayerController19;
    };
    c.prototype.getBufferEndPosition = function () {
      if (this.isState('loading')) return 0;
      var a = this.getVideoAPI().getBufferEndPosition();
      return a !== null && a !== undefined ? a : this.getCurrentTimePosition();
    };
    c.prototype.$VideoPlayerController133 = function () {
      __p && __p();
      if (!this.$VideoPlayerController9) {
        b('VideoChannelViewChainLengthManager').registerChainingInfos(
          this.getVideoID(),
          this.$VideoPlayerController11
        );
        var a = this.getVideoID();
        if (this.$VideoPlayerController11) {
          var c = this.$VideoPlayerController11.decode();
          a = c.root_id;
        }
        this.$VideoPlayerController9 = b(
          'VideoChannelViewChainLengthManager'
        ).getLoggingData(a);
      }
    };
    c.prototype.$VideoPlayerController141 = function (a) {
      this.$VideoPlayerController122(!1);
      a = a.position;
      a !== undefined && (this.$VideoPlayerController19 = a);
      this.setState('playing');
      this.areHLSActive()
        ? this.$VideoPlayerController142()
        : this.isRTMP_DEPRECATED() && this.$VideoPlayerController143();
      this.startHeartbeat();
    };
    c.prototype.$VideoPlayerController144 = function (a) {
      a = a.position;
      a !== undefined && (this.$VideoPlayerController19 = a);
      this.$VideoPlayerController17 =
        this.getVideoAPI().getCurrentlyPlayingStreamInfoID();
    };
    c.prototype.$VideoPlayerController145 = function (event) {
      return this.$VideoPlayerController96.has(event);
    };
    c.prototype.runOnceOnApiEventLogged = function (event, a) {
      if (this.$VideoPlayerController145(event)) a();
      else
        var b = this.addListener('apiEventLogged', function (c) {
          c === event && (a(), b.remove());
        });
    };
    c.prototype.$VideoPlayerController146 = function (a) {
      var event = a.event;
      this.$VideoPlayerController96.add(event);
      delete a.event;
      this.logEvent(event, a);
      this.emit('apiEventLogged', event);
    };
    c.prototype.$VideoPlayerController147 = function () {
      this.isState('finished') || this.setState('paused'), this.stopHeartbeat();
    };
    c.prototype.$VideoPlayerController148 = function (a) {
      a = a.position;
      a !== undefined && (this.$VideoPlayerController19 = a);
    };
    c.prototype.$VideoPlayerController149 = function () {
      this.setState('finished'),
        (this.$VideoPlayerController66 = !1),
        this.stopHeartbeat();
    };
    c.prototype.getVolume = function () {
      return this.getVideoAPI().getVolume();
    };
    c.prototype.$VideoPlayerController150 = function () {
      __p && __p();
      this.$VideoPlayerController39 = !1;
      var a = this.getContainerNode(),
        c = this.isFullscreen();
      b('CSS').conditionClass(a, '_1hwh', c);
      c
        ? (a.style.paddingBottom = '0')
        : (a.removeAttribute('data-fullscreen'),
          (a.style.paddingBottom = this.$VideoPlayerController101));
      !c &&
        this.$VideoPlayerController27 &&
        (this.$VideoPlayerController27.unsubscribe(),
        (this.$VideoPlayerController27 = null));
      if (this.$VideoPlayerController38 != c) {
        this.logFullscreenChanged(c);
        this.$VideoPlayerController14.setContext(
          'player_format',
          this.$VideoPlayerController120(c, this.$VideoPlayerController70) ||
            'unknown'
        );
        a = b('DOMDimensions').getElementDimensions(a);
        this.isPlayerVersion('silvercity') ||
          this.setVideoPlayerAPIDimensions(a.width, a.height);
        this.emit('toggleFullscreen');
        !c
          ? (this.addOffsetStylings(),
            b('Arbiter').inform('video_fullscreen_change', {}))
          : this.removeOffsetStylings();
      }
      this.$VideoPlayerController38 = c;
    };
    c.prototype.$VideoPlayerController120 = function (a, c) {
      return a
        ? b('VideoPlayerFormats').FULL_SCREEN
        : c
        ? b('VideoPlayerFormatsMap')[c]
        : b('VideoPlayerFormats').INLINE;
    };
    c.prototype.logFullscreenChanged = function (a) {
      var c = {
        player_format: this.$VideoPlayerController120(
          a,
          this.$VideoPlayerController70
        ),
      };
      b('VideoPlayerHTML5Experiments').enteredExitedFsLoggingFix
        ? this.logEvent(
            a
              ? b('VideoPlayerLoggerEvent').ENTERED_FS
              : b('VideoPlayerLoggerEvent').EXITED_FS,
            c
          )
        : this.logEvent(
            a
              ? b('VideoPlayerLoggerEvent').ENTERED_FS
              : b('VideoPlayerLoggerEvent').EXITED_FS
          );
    };
    c.prototype.setVideoPlayerAPIDimensions = function (a, b) {
      this.getVideoAPI().setDimensions &&
        this.getVideoAPI().setDimensions(a, b);
    };
    c.prototype.removeOffsetStylings = function () {
      var a = this.$VideoPlayerController103;
      if (a === null || a === undefined) return;
      this.$VideoPlayerController102 === b('CoverVideoOffsetType').HORIZONTAL
        ? (this.getVideoNode().style.setProperty('left', '0'),
          b('CSS').removeClass(this.getVideoNode(), '_blh'))
        : this.$VideoPlayerController102 ===
            b('CoverVideoOffsetType').VERTICAL &&
          (this.getVideoNode().style.setProperty('top', '0'),
          b('CSS').removeClass(this.getVideoNode(), '_bli'));
    };
    c.prototype.addOffsetStylings = function () {
      var a = this.$VideoPlayerController103;
      if (a === null || a === undefined) return;
      this.$VideoPlayerController102 === b('CoverVideoOffsetType').HORIZONTAL
        ? (this.getVideoNode().style.setProperty('left', a + 'px'),
          b('CSS').addClass(this.getVideoNode(), '_blh'))
        : this.$VideoPlayerController102 ===
            b('CoverVideoOffsetType').VERTICAL &&
          (this.getVideoNode().style.setProperty('top', a + 'px'),
          b('CSS').addClass(this.getVideoNode(), '_bli'));
    };
    c.prototype.isFullscreen = function () {
      return (
        this.$VideoPlayerController39 ||
        (b('FullScreen').isFullScreen() &&
          this.$VideoPlayerController15 === b('getFullScreenElement')())
      );
    };
    c.prototype.toggleFullscreen = function () {
      var a = this.isFullscreen(),
        c = this.getContainerNode();
      b('FullScreen').toggleFullScreen(c) &&
        (a ||
          ((this.$VideoPlayerController39 = !0),
          c.setAttribute('data-fullscreen', 'true')),
        b('CSS').addClass(c, '_1hwh'),
        (this.$VideoPlayerController27 = b('FullScreen').subscribe(
          'changed',
          this.$VideoPlayerController150.bind(this)
        )));
    };
    c.prototype.instreamVideoStart = function () {
      b('CSS').addClass(this.getContainerNode(), '_24pm');
    };
    c.prototype.instreamVideoEnd = function () {
      b('CSS').removeClass(this.getContainerNode(), '_24pm');
    };
    c.prototype.unmute = function () {
      if (this.$VideoPlayerController31) return;
      !this.isState('loading')
        ? (this.getVideoAPI().unmute(),
          b('VideoPlayerVolumeSettings').saveVolume(
            b('VideoPlayerVolumeSettings').getLastVolumeBeforeMute()
          ),
          this.$VideoPlayerController81 &&
            this.getVideoAPI().areSubtitlesActive() &&
            this.$VideoPlayerController151())
        : (this.$VideoPlayerController63 = !0);
    };
    c.prototype.isAudioBlocked = function () {
      return this.$VideoPlayerController31;
    };
    c.prototype.isMuted = function () {
      return this.$VideoPlayerController85
        ? this.getVideoAPI().isMuted()
        : this.$VideoPlayerController76;
    };
    c.prototype.mute = function () {
      this.$VideoPlayerController81 &&
        !this.getVideoAPI().areSubtitlesActive() &&
        this.$VideoPlayerController151(),
        this.getVideoAPI().mute(),
        b('VideoPlayerVolumeSettings').saveVolume(0);
    };
    c.prototype.getMediaID = function () {
      return this.getVideoID();
    };
    c.prototype.getPlaybackDuration = function () {
      return this.getVideoAPI().getPlaybackDuration();
    };
    c.prototype.getPlayerFormat = function () {
      return this.$VideoPlayerController120(
        this.isFullscreen(),
        this.$VideoPlayerController70
      );
    };
    c.prototype.getVideoID = function () {
      return this.$VideoPlayerController88;
    };
    c.prototype.getVideoChannelID = function () {
      return this.$VideoPlayerController86;
    };
    c.prototype.getVideoURL = function () {
      return this.$VideoPlayerController91;
    };
    c.prototype.$VideoPlayerController140 = function () {
      __p && __p();
      var a = this.getVideoAPI(),
        c = new (b('SubscriptionsHandler'))();
      this.$VideoPlayerController6 = c;
      var d = {
        buffered: function () {
          return this.setBuffering(!1);
        }.bind(this),
        buffering: function () {
          return this.setBuffering(!0);
        }.bind(this),
        bufferingProgress: function (a) {
          return this.$VideoPlayerController152(a);
        }.bind(this),
        streamInterrupted: function () {
          return this.$VideoPlayerController48.startInterrupt();
        }.bind(this),
        streamResumed: function () {
          return this.$VideoPlayerController48.endInterrupt();
        }.bind(this),
        beginPlayback: function (a) {
          return this.$VideoPlayerController141(a);
        }.bind(this),
        updateStatus: function (a) {
          return this.$VideoPlayerController144(a);
        }.bind(this),
        logEvent: function (a) {
          return this.$VideoPlayerController146(a.logData);
        }.bind(this),
        pausePlayback: function () {
          return this.$VideoPlayerController147();
        }.bind(this),
        seekEnd: function (a) {
          return this.$VideoPlayerController148(a);
        }.bind(this),
        clickForTracking: function () {
          return b('logVideosClickTracking')(this.getVideoNode());
        }.bind(this),
        error: function (a) {
          return this.logError(a);
        }.bind(this),
        finishPlayback: function () {
          return this.$VideoPlayerController149();
        }.bind(this),
        networkInterrupted: function () {
          return this.$VideoPlayerController153();
        }.bind(this),
        networkResumed: function () {
          return this.$VideoPlayerController154();
        }.bind(this),
      };
      c.addSubscriptions.apply(
        c,
        Object.keys(d).map(function (b) {
          return a.addListener(b, d[b]);
        })
      );
      c.addSubscriptions.apply(
        c,
        b('VideoPlayerApiEvents').map(
          function (c) {
            return b('forwardEvent')(a, this, c);
          }.bind(this)
        )
      );
    };
    c.prototype.$VideoPlayerController138 = function () {
      this.$VideoPlayerController6 && this.$VideoPlayerController6.release();
    };
    c.prototype.seek = function (a) {
      this.emit('seekRequested', a), this.getVideoAPI().seek(a);
    };
    c.prototype.pause = function (a) {
      this.isState('loading')
        ? (this.$VideoPlayerController62 = null)
        : this.isState('playing')
        ? this.getVideoAPI().pause(a)
        : this.$VideoPlayerController54 && this.getVideoAPI().pause(a),
        this.$VideoPlayerController122(!1),
        (this.$VideoPlayerController66 = !1),
        this.$VideoPlayerController155(a),
        this.emit('pauseRequested', a);
    };
    c.prototype.stopHeartbeat = function () {
      b('clearInterval')(this.$VideoPlayerController29),
        (this.$VideoPlayerController29 = null);
    };
    c.prototype.startHeartbeat = function () {
      if (
        this.$VideoPlayerController29 ||
        !b('VideoPlayerHTML5Experiments').heartbeatIntervalMS
      )
        return;
      this.$VideoPlayerController29 = b('setInterval')(
        this.emitHeartbeat,
        b('VideoPlayerHTML5Experiments').heartbeatIntervalMS
      );
    };
    c.prototype.isPlayerVersion = function (a) {
      return (
        this.getPlayerVersion() === a ||
        (this.$VideoPlayerController100 &&
          this.$VideoPlayerController156(a) === this.getPlayerVersion())
      );
    };
    c.prototype.isHtml5Player = function () {
      return (
        this.isPlayerVersion(b('VideoPlayerVersions').PLEASANTVILLE) ||
        this.isPlayerVersion(b('VideoPlayerVersions').OZ)
      );
    };
    c.prototype.isAutoplayable = function () {
      return this.$VideoPlayerController68;
    };
    c.prototype.$VideoPlayerController157 = function () {
      return b('ViewportTrackingHelper').isVisible(this.getVideoNode(), 0);
    };
    c.prototype.$VideoPlayerController126 = function () {
      if (b('Visibility').isHidden()) {
        var a = b('Visibility').once(
          b('Visibility').VISIBLE,
          function () {
            return this.$VideoPlayerController126();
          }.bind(this)
        );
        b('VideoPlayerExperiments').unsubscribeImmediateplay &&
          this.$VideoPlayerController7.addSubscriptions(a);
      } else
        !this.$VideoPlayerController157() &&
          this.$VideoPlayerController69 !==
            b('VideoPlayerImmediatePlayReason').WATCH_TIME_NOT_LOGGED &&
          b('FBLogger')('video').warn(
            'immediateplay on a hidden video player: %s %s %s %s',
            this.getPlayerOrigin(),
            this.getPlayerSuborigin(),
            this.getSource(),
            b('ScriptPath').getScriptPath()
          ),
          this.play(b('VideoPlayerReason').AUTOPLAY);
    };
    c.prototype.isBuffering = function () {
      return this.$VideoPlayerController34;
    };
    c.prototype.$VideoPlayerController158 = function () {
      __p && __p();
      var a = Math.floor(Date.now() / 1e3);
      this.$VideoPlayerController109 = this.$VideoPlayerController109.filter(
        function (b) {
          return b.time + 3 > a;
        }
      );
      this.$VideoPlayerController109.some(function (b) {
        if (b.time === a) {
          b.count += 1;
          return !0;
        }
        return !1;
      }) || this.$VideoPlayerController109.push({ time: a, count: 1 });
    };
    c.prototype.$VideoPlayerController159 = function () {
      var a = Math.floor(Date.now() / 1e3);
      return this.$VideoPlayerController109.reduce(function (b, c) {
        return (c.time + 3 > a ? c.count : 0) + b;
      }, 0);
    };
    c.prototype.$VideoPlayerController152 = function (a) {
      this.emit('bufferingProgress', a);
    };
    c.prototype.setBuffering = function (a) {
      __p && __p();
      if (a !== this.$VideoPlayerController34) {
        this.$VideoPlayerController34 = a;
        if (this.$VideoPlayerController34) {
          a = this.$VideoPlayerController14.getNumber(
            'buffering_count_threshold',
            0
          );
          if (a) {
            this.$VideoPlayerController158();
            if (this.$VideoPlayerController159() >= a) {
              this.logError({
                error: 'EXCEED_BUFFER_FREQUENCY_THRESHOLD',
                message:
                  'video has entered buffering state ' +
                  a +
                  ' times in the last 3 seconds.',
                isPlayback: this.isPlayRequestPending(),
              });
              return this.emit('error', 'EXCEED_BUFFER_FREQUENCY_THRESHOLD');
            }
          }
          this.$VideoPlayerController48.startBuffering(
            this.getCurrentTimePosition()
          );
          this.$VideoPlayerController104 &&
            (this.$VideoPlayerController160(),
            (this.$VideoPlayerController98 = setTimeout(
              this.$VideoPlayerController161,
              this.$VideoPlayerController104
            )));
          this.$VideoPlayerController162();
        } else
          this.$VideoPlayerController48.endBuffering(),
            this.$VideoPlayerController160(),
            this.isState('paused') && this.$VideoPlayerController163();
        this.emit('bufferingChanged');
      }
    };
    c.prototype.setSmartBufferAdjustmentEnabled = function (a) {
      var b = this.getVideoAPI();
      'setSmartBufferAdjustmentEnabled' in b &&
        b.setSmartBufferAdjustmentEnabled(a);
    };
    c.prototype.setVideoStreamOffset = function (a) {
      var b = this.getVideoAPI();
      typeof b.setVideoStreamOffset === 'function' && b.setVideoStreamOffset(a);
    };
    c.prototype.$VideoPlayerController160 = function () {
      this.$VideoPlayerController98 &&
        (clearTimeout(this.$VideoPlayerController98),
        (this.$VideoPlayerController98 = null));
    };
    c.prototype.$VideoPlayerController163 = function () {
      this.$VideoPlayerController14.getBool(
        'allow_infinite_retry_on_net_err',
        !0
      ) &&
        this.$VideoPlayerController14.getBool(
          'allow_autoplay_on_resume_from_sleep',
          !0
        ) &&
        this.$VideoPlayerController106 &&
        this.play(b('VideoPlayerReason').NETWORK_RESUMED);
    };
    c.prototype.$VideoPlayerController162 = function () {
      this.$VideoPlayerController14.getBool(
        'allow_infinite_retry_on_net_err',
        !0
      ) &&
        this.$VideoPlayerController34 &&
        this.$VideoPlayerController105 &&
        this.isState('playing') &&
        this.pause(b('VideoPlayerReason').NETWORK_INTERRUPTED);
    };
    c.prototype.$VideoPlayerController136 = function (a) {
      this.$VideoPlayerController106 = !1;
    };
    c.prototype.$VideoPlayerController155 = function (a) {
      a === b('VideoPlayerReason').NETWORK_INTERRUPTED
        ? (this.$VideoPlayerController106 = !0)
        : (this.$VideoPlayerController106 = !1);
    };
    c.prototype.$VideoPlayerController153 = function () {
      (this.$VideoPlayerController105 = !0), this.$VideoPlayerController162();
    };
    c.prototype.$VideoPlayerController154 = function () {
      (this.$VideoPlayerController105 = !1), this.$VideoPlayerController163();
    };
    c.prototype.isLiveVideo = function () {
      return this.$VideoPlayerController41;
    };
    c.prototype.isBroadcast = function () {
      return !!this.$VideoPlayerController32;
    };
    c.prototype.isInline = function () {
      return (
        !!this.$VideoPlayerController70 &&
        b('VideoPlayerFormatsMap')[this.$VideoPlayerController70] ===
          b('VideoPlayerFormats').INLINE &&
        !this.isFullscreen()
      );
    };
    c.prototype.isFacecastAudio = function () {
      return this.$VideoPlayerController36;
    };
    c.prototype.isStreamInterrupted = function () {
      var a = this.$VideoPlayerController85;
      return !!(a && a.isStreamInterrupted && a.isStreamInterrupted());
    };
    c.prototype.setVolume = function (a) {
      if (this.$VideoPlayerController31) return;
      b('VideoPlayerVolumeSettings').saveVolume(a);
      this.getVideoAPI().setVolume(a);
    };
    c.prototype.getDOMPosition = function () {
      var a = this.getRootNodeNullable();
      return a
        ? b('getElementPosition')(a)
        : { x: 0, y: 0, width: 0, height: 0 };
    };
    c.prototype.clickVideo = function () {
      this.emit('clickVideo'), (this.$VideoPlayerController28 = !0);
    };
    c.prototype.mouseMove = function (a) {
      this.emit('mouseMove', a);
    };
    c.prototype.mouseUp = function (a) {
      this.emit('mouseUp', a);
    };
    c.prototype.mouseLeave = function (a) {
      this.emit('mouseLeave', a);
    };
    c.prototype.hasSeenClick = function () {
      return !!this.$VideoPlayerController28;
    };
    c.prototype.isAd = function () {
      return !!this.$VideoPlayerController2;
    };
    c.prototype.shouldCalculateViewability = function () {
      if (this.isAd()) return !0;
      var a = this.$VideoPlayerController48.getFTdata();
      if (a == null) return !1;
      a = a.ft;
      return a == null ? !1 : !!a.ei;
    };
    c.prototype.isInstreamAd = function () {
      return !!this.$VideoPlayerController40;
    };
    c.prototype.getAdClientToken = function () {
      return this.$VideoPlayerController2;
    };
    c.prototype.$VideoPlayerController164 = function () {
      __p && __p();
      var a = null,
        c = null,
        d = !1,
        e = null,
        f = null,
        g = null,
        h = null;
      if (!this.isState('loading') && !this.isState('fallback')) {
        this.$VideoPlayerController17 === null &&
          (this.$VideoPlayerController17 =
            this.getVideoAPI().getCurrentlyPlayingStreamInfoID());
        a = this.getVideoAPI().getEstimatedBandwidth();
        c = this.getVideoAPI().getAvailableVideoQualities().length;
        d = this.getVideoAPI().getIsAbrEnabled();
        e = this.getPlaybackDuration();
        if (
          this.$VideoPlayerController14.getBool('log_player_dimensions', !1)
        ) {
          var i = this.getVideoAPI().getDimensionsForDevice();
          g = i && i.height;
          f = i && i.width;
        }
        this.$VideoPlayerController14.getBool('log_connection_quality', !1) &&
          (h = b('VideoPlayerConnectionQuality').evaluate(
            function () {
              return this.getVideoAPI().getEstimatedBandwidth();
            }.bind(this)
          ));
      }
      var j = babelHelpers['extends']({}, this.$VideoPlayerController80);
      this.$VideoPlayerController24.forEach(
        function (a, b) {
          j[b] = a(b, this);
        }.bind(this)
      );
      i = {};
      this.getOption(
        'SphericalVideoSpatialAudioController',
        'hasSpatialAudio'
      ) &&
        (i.audio_ch_conf = this.getOption(
          'SphericalVideoSpatialAudioController',
          'getSpatialAudioChannelLayout'
        ));
      var k =
        this.isLiveVideo() &&
        b('LiveVideoPlayerStore').getIsRewound(this.getVideoPlayerID());
      return babelHelpers['extends'](
        {
          ad_client_token: this.$VideoPlayerController2,
          available_qualities: c,
          access_token: this.$VideoPlayerController1,
          autoplay_eligible: this.isAutoplayable(),
          autoplay_setting: this.$VideoPlayerController8,
          broadcaster_origin: this.$VideoPlayerController97,
          projection: this.$VideoPlayerController58,
          player_version: this.getPlayerVersion(),
          flash_version: b('ifRequired')('Flash', function (a) {
            return a.getVersionString();
          }),
          video_id: this.getVideoID(),
          player_state: this.$VideoPlayerController71,
          player_origin: this.$VideoPlayerController55,
          player_suborigin: this.$VideoPlayerController56,
          playback_is_broadcast: this.$VideoPlayerController32,
          player_instance_key: this.$VideoPlayerController113,
          playback_duration: e,
          referrer: document.referrer,
          streaming_format: this.getStreamingFormat(),
          video_time_position: this.getCurrentTimePosition(),
          video_buffer_end_position: b('gkx')(
            'AT4JzxHQIxRND8Kmb4P0ZKgRZIAtL9c6D4Sb7E0b1oCDX0oYcMUrO_8NRrEgEKcOrnd9zWa26WQWQYrttYx8SZzBTB7PEFVsuhlrNpYaHcKJ5Q'
          )
            ? this.$VideoPlayerController85
              ? this.getBufferEndPosition()
              : 0
            : this.getBufferEndPosition(),
          is_servable_via_fbms: this.$VideoPlayerController42,
          playback_is_live_streaming: this.$VideoPlayerController41,
          is_templated_manifest:
            this.isFBIsLiveTemplated() || this.isFBWasLive(),
          is_fbms: this.isFBMS(),
          is_live_video_rewound: k,
          video_channel_id: this.$VideoPlayerController86,
          reaction_video_channel_type: this.$VideoPlayerController64,
          reaction_video_channel_subtype: this.$VideoPlayerController65,
          fbcdn_pop: this.$VideoPlayerController52,
          representation_id: this.$VideoPlayerController17,
          video_bandwidth: a,
          video_player_height: g,
          video_player_width: f,
          data_connection_quality: h,
          is_abr_enabled: d,
          feed_position: this.getDataInsertionPosition(),
          upstream_player_source: this.$VideoPlayerController83,
          should_log_video_viewability: this.$VideoPlayerController111,
          living_room_session_id: this.$VideoPlayerController112,
          detectionID: this.$VideoPlayerController114,
          is_ads_preview: this.$VideoPlayerController118,
        },
        this.$VideoPlayerController87,
        this.$VideoPlayerController9,
        j,
        i
      );
    };
    c.prototype.$VideoPlayerController134 = function () {
      var a = this.getVideoInfo_DEPRECATED();
      if (!a) return null;
      a = a.resourceUrl;
      a = /scontent-([a-z]+)\./.exec(a);
      return !a ? null : a[1];
    };
    c.prototype.getVideoInfo_DEPRECATED = function () {
      return this.isState('loading') || this.isState('fallback')
        ? null
        : this.getVideoAPI().getVideoInfo();
    };
    c.prototype.getDebugInfo = function () {
      var a = this.getVideoInfo_DEPRECATED(),
        c = {
          initializationTime: this.$VideoPlayerController59,
          initializationTimestamp: this.$VideoPlayerController60,
          version: this.getPlayerVersion(),
          stallCount: this.$VideoPlayerController48.getCumulativeStallCount(),
          stallTime: this.$VideoPlayerController48.getCumulativeStallTime(),
          inPlayStallCount:
            this.$VideoPlayerController48.getCumulativeInPlayStallCount(),
          inPlayStallTime:
            this.$VideoPlayerController48.getCumulativeInPlayStallTime(),
          interruptCount:
            this.$VideoPlayerController48.getCumulativeInterruptCount(),
          interruptTime:
            this.$VideoPlayerController48.getCumulativeInterruptTime(),
          state: this.$VideoPlayerController71,
          canPlayType: b('mapObject')(
            b('VideoMimeTypes'),
            b('canVideoPlayType')
          ),
          loggedError: this.$VideoPlayerController47,
          lastError: this.$VideoPlayerController44,
          droppedFrames:
            !!this.$VideoPlayerController85 &&
            this.$VideoPlayerController85.getDroppedFrames(),
          totalFrames:
            !!this.$VideoPlayerController85 &&
            this.$VideoPlayerController85.getTotalFrames(),
          videoSource:
            !!this.$VideoPlayerController85 &&
            this.$VideoPlayerController85.getVideoNodeSource(),
          viewabilityPercentage:
            !!this.$VideoPlayerController93 &&
            this.$VideoPlayerController93.getViewability(),
          stack: undefined,
        },
        d = {
          videoID: this.getVideoID(),
          isDrm:
            this.$VideoPlayerController85 &&
            this.$VideoPlayerController85.isDrm(),
        };
      if (!a) return { player: c, currentVideo: d };
      var e = this.getVideoAPI().getDimensionsForDevice();
      return {
        currentVideo: babelHelpers['extends']({}, d, {
          streamType: a.streamType,
          isLiveStream: a.isLiveStream,
          liveManifestUrl: a.liveManifestUrl,
          isHD: a.isHD,
          hasHD: a.hasHD,
          resourceUrl: a.resourceUrl,
          hasSubtitles: a.hasSubtitles,
          hasRateLimit: !!a.hasUnlimitedSrc,
          isRateLimited: a.hasUnlimitedSrc && !a.useUnlimitedSrc,
          tagHD: a.tagHD,
          tagSD: a.tagSD,
          projection: this.$VideoPlayerController58,
          streamId: this.$VideoPlayerController17,
          audioStreamId: this.getVideoAPI().getAudioStreamInfoIDDebug(),
          dashAudioFormat: this.getVideoAPI().getDashAudioConfiguration(),
        }),
        player: babelHelpers['extends']({}, c, { dimensions: e }),
      };
    };
    c.prototype.getLastError = function () {
      return this.$VideoPlayerController44;
    };
    c.prototype.isAkamai = function () {
      var a = this.getVideoInfo_DEPRECATED();
      return a
        ? a.liveManifestUrl && a.liveManifestUrl.includes('akamaihd')
        : !1;
    };
    c.prototype.getLoggedError = function () {
      return this.$VideoPlayerController47;
    };
    c.prototype.getTotalFrames = function () {
      return this.$VideoPlayerController85
        ? this.$VideoPlayerController85.getTotalFrames()
        : 0;
    };
    c.prototype.getDroppedFrames = function () {
      return this.$VideoPlayerController85
        ? this.$VideoPlayerController85.getDroppedFrames()
        : 0;
    };
    c.prototype.getInterruptCount = function () {
      return this.$VideoPlayerController48.getCumulativeInterruptCount();
    };
    c.prototype.getInterruptTime = function () {
      return this.$VideoPlayerController48.getCumulativeInterruptTime();
    };
    c.prototype.getStreamId = function () {
      return this.getVideoAPI().getCurrentlyPlayingStreamInfoID();
    };
    c.prototype.getAudioStreamId = function () {
      return this.getVideoAPI().getAudioStreamInfoIDDebug();
    };
    c.prototype.getVideoTracks = function () {
      return this.getVideoAPI().getVideoTracksDebug();
    };
    c.prototype.getAudioDashFormat = function () {
      return this.getVideoAPI().getDashAudioConfigurationDebug();
    };
    c.prototype.getCumulativeStallCount = function () {
      return this.$VideoPlayerController48.getCumulativeStallCount();
    };
    c.prototype.getCumulativeStallTime = function () {
      return this.$VideoPlayerController48.getCumulativeStallTime();
    };
    c.prototype.getStallCount = function () {
      return this.$VideoPlayerController48.getStallCount();
    };
    c.prototype.getStreamType = function () {
      var a = this.getVideoInfo_DEPRECATED();
      return a ? a.streamType : 'n/a';
    };
    c.prototype.hasSubtitles = function () {
      return this.getVideoAPI().hasSubtitles();
    };
    c.prototype.getVideoState = function () {
      return this.$VideoPlayerController71;
    };
    c.prototype.areSubtitlesActive = function () {
      return this.getVideoAPI().areSubtitlesActive();
    };
    c.prototype.areSubtitlesAutogenerated = function () {
      return this.getVideoAPI().areSubtitlesAutogenerated();
    };
    c.prototype.areHLSActive = function () {
      return this.getVideoAPI().areHLSActive();
    };
    c.prototype.isRTMP_DEPRECATED = function () {
      return this.getVideoAPI().isRTMP();
    };
    c.prototype.toggleSubtitles = function () {
      this.$VideoPlayerController151(),
        this.logEvent(b('VideoPlayerLoggerEvent').CAPTION_CHANGE),
        (this.$VideoPlayerController81 = !1);
    };
    c.prototype.$VideoPlayerController151 = function () {
      this.getVideoAPI().toggleSubtitles(), this.$VideoPlayerController137();
    };
    c.prototype.$VideoPlayerController137 = function () {
      this.hasSubtitles() && this.areSubtitlesActive()
        ? (this.$VideoPlayerController10 = 'on')
        : (this.$VideoPlayerController10 = 'off');
    };
    c.prototype.isHD = function () {
      return (
        this.getSelectedVideoQuality() ==
        this.getAvailableVideoQualities().pop()
      );
    };
    c.prototype.hasHD = function () {
      return this.getAvailableVideoQualities().length > 1;
    };
    c.prototype.toggleHD = function () {
      this.isHD()
        ? this.setPreferredVideoQuality(this.getAvailableVideoQualities()[0])
        : this.setPreferredVideoQuality(
            this.getAvailableVideoQualities().pop()
          );
    };
    c.prototype.setPreferredVideoQuality = function (a) {
      this.getVideoAPI().setPreferredVideoQuality(a);
    };
    c.prototype.unsetPreferredVideoQuality = function () {
      this.getVideoAPI().unsetPreferredVideoQuality();
    };
    c.prototype.getPreferredVideoQuality = function () {
      return this.getVideoAPI().getPreferredVideoQuality();
    };
    c.prototype.getSelectedVideoQuality = function () {
      return this.getVideoAPI().getSelectedVideoQuality();
    };
    c.prototype.getAvailableVideoQualities = function () {
      return this.getVideoAPI().getAvailableVideoQualities();
    };
    c.prototype.getVideoProjection = function () {
      return this.getVideoAPI().getVideoProjection();
    };
    c.prototype.canAutoSelectVideoQuality = function () {
      return this.getVideoAPI().canAutoSelectVideoQuality();
    };
    c.prototype.switchToStreamType = function (a) {
      this.getVideoAPI().switchToStreamType(a);
    };
    c.prototype.$VideoPlayerController143 = function () {
      this.getVideoAPI().replaceVideoDataFromURL(
        b('XVideoDataController')
          .getURIBuilder()
          .setString('video_id', this.getVideoID())
          .setInt('scrubbing_preference', n)
          .setString('source', this.$VideoPlayerController70)
          .getURI()
          .toString()
      );
    };
    c.prototype.$VideoPlayerController142 = function () {
      this.getVideoAPI().replaceVideoDataFromURL(
        b('XVideoDataController')
          .getURIBuilder()
          .setString('video_id', this.getVideoID())
          .setInt('scrubbing_preference', o)
          .setString('source', this.$VideoPlayerController70)
          .getURI()
          .toString()
      );
    };
    c.prototype.$VideoPlayerController135 = function (a) {
      var b = this.getVideoInfo_DEPRECATED();
      return b != null
        ? Object.assign(
            {
              resource_url: b.resourceUrl,
              liveStream: b.isLiveStream,
              hd: b.isHD,
            },
            a
          )
        : a;
    };
    c.prototype.$VideoPlayerController165 = function () {
      var a = this.getDOMPosition(),
        c = b('getViewportDimensions')().height,
        d;
      a.y <= 0
        ? (d = a.y)
        : a.y + a.height < c
        ? (d = 0)
        : (d = a.y + a.height - c);
      return d;
    };
    c.prototype.logEvent = function (event, a) {
      __p && __p();
      this.$VideoPlayerController46++;
      if (this.$VideoPlayerController95) return undefined;
      this.$VideoPlayerController117.emit(event);
      var c = this.$VideoPlayerController14.getNumber(
        'logging_log_event_limit',
        0
      );
      c &&
        this.$VideoPlayerController46 > c &&
        (this.$VideoPlayerController95 = !0);
      c = ++this.$VideoPlayerController25;
      a = Object.assign(this.$VideoPlayerController164(), a);
      var d = this.getOriginalPlayReason();
      d &&
        event !== b('VideoPlayerLoggerEvent').DISPLAYED &&
        (a.video_play_reason = d);
      event === b('VideoPlayerLoggerEvent').FINISHED_PLAYING &&
        (a.viewport_distance = this.$VideoPlayerController165());
      (event === b('VideoPlayerLoggerEvent').MUTED ||
        event === b('VideoPlayerLoggerEvent').UNMUTED ||
        event === b('VideoPlayerLoggerEvent').STARTED_PLAYING ||
        event === b('VideoPlayerLoggerEvent').CAPTION_CHANGE ||
        event === b('VideoPlayerLoggerEvent').UNPAUSED) &&
        (a.caption_state = this.$VideoPlayerController10);
      this.$VideoPlayerController92 &&
        b('VideoViewabilityKeyEvents').Events.includes(event) &&
        ((a.current_viewability_percentage =
          this.$VideoPlayerController93.getViewability()),
        this.$VideoPlayerController93.setLastLoggedViewability(
          a.current_viewability_percentage
        ));
      a.event_seq_num = c;
      b('VideoPlayerExperiments').correctedSBLEventSequence
        ? this.$VideoPlayerController77.has(event) &&
          (a.seq_num = ++this.$VideoPlayerController78)
        : (a.seq_num = c);
      event === b('VideoPlayerLoggerEvent').PLAYED_FOR_THREE_SECONDS &&
        ((a.detection_id = this.$VideoPlayerController114),
        this.emit('videoView/runFraudDetector'));
      d = this.$VideoPlayerController48.logEvent(event, a);
      this.emit('debug/vpcLogEvent', d);
      return d;
    };
    c.prototype.getState = function () {
      return this.$VideoPlayerController71;
    };
    c.prototype.getStreamingFormat = function () {
      var a = this.getVideoInfo_DEPRECATED() || {};
      return a.streamType || this.$VideoPlayerController43;
    };
    c.prototype.setPlaybackRate = function (a) {
      this.getVideoAPI().setPlaybackRate &&
        this.getVideoAPI().setPlaybackRate(a);
    };
    c.prototype.getPlaybackRate = function () {
      return this.getVideoAPI().getPlaybackRate
        ? this.getVideoAPI().getPlaybackRate()
        : 1;
    };
    c.prototype.setState = function (a) {
      if (
        this.isState(b('VideoPlayerStates').DESTROYED) ||
        (this.isState(b('VideoPlayerStates').FALLBACK) &&
          !this.isFallbackRecoverable())
      )
        return;
      this.$VideoPlayerController71 = a;
      this.$VideoPlayerController71 === 'fallback' &&
        (b('CSS').addClass(this.getRootNode(), '_3-n5'),
        this.$VideoPlayerController138());
      this.emit('stateChange');
    };
    c.prototype.isState = function (a) {
      return this.$VideoPlayerController71 === a;
    };
    c.prototype.isIntentionallyViewing = function () {
      return this.isState('playing') && !this.isMuted();
    };
    c.prototype.abortLoading = function (a) {
      if (this.isState('loading') || this.isState('fallback')) return;
      b('VideoPlayerExperiments').seekZeroWhenAbortLoadingFinishedVideos &&
        !(
          b('VideoPlayerExperiments').seekZeroOnlyVodVideo &&
          this.$VideoPlayerController41
        ) &&
        this.isState('finished') &&
        this.seek(0);
      this.getVideoAPI().abortLoading(a || {});
      this.stopHeartbeat();
    };
    c.prototype.preload = function () {
      if (this.isState('loading') || this.isState('fallback')) return;
      this.getVideoAPI().preload();
    };
    c.prototype.getPlayerVersion = function () {
      var a;
      this.$VideoPlayerController85 && (a = this.getVideoAPI());
      var b =
        a && a.getUpdatedPlayerVersion
          ? a.getUpdatedPlayerVersion.bind(a)
          : this.$VideoPlayerController5.getPlayerVersion;
      b = b ? b() : this.$VideoPlayerController57;
      return this.$VideoPlayerController100
        ? this.$VideoPlayerController156(b)
        : b;
    };
    c.prototype.$VideoPlayerController156 = function (a) {
      switch (a) {
        case b('VideoPlayerVersions').SILVERCITY:
          return b('VideoPlayerVersions').REACT_SILVERCITY;
        case b('VideoPlayerVersions').PLEASANTVILLE:
          return b('VideoPlayerVersions').REACT_PLEASANTVILLE;
        case b('VideoPlayerVersions').OZ:
          return b('VideoPlayerVersions').REACT_OZ;
        default:
          return b('VideoPlayerVersions').REACT;
      }
    };
    c.prototype.registerOption = function (a, b, c, d) {
      var e = this.$VideoPlayerController13.get(a);
      e || ((e = new Map()), this.$VideoPlayerController13.set(a, e));
      if (e.has(b))
        throw new Error(
          'An option can only be registered once for each component'
        );
      e.set(b, { getter: c, setter: d });
      this.emit('optionsChange');
    };
    c.prototype.unregisterOption = function (a, b) {
      var c = this.$VideoPlayerController13.get(a);
      if (!c)
        throw new Error('The component "' + a + '" has no options registered');
      if (!c.has(b))
        throw new Error(
          'The component "' + a + '" has no option "' + b + '" registered'
        );
      c['delete'](b);
      c.size || this.$VideoPlayerController13['delete'](a);
      this.emit('optionsChange');
    };
    c.prototype.getComponents = function () {
      return this.$VideoPlayerController13.keys();
    };
    c.prototype.getOptions = function (a) {
      a = this.$VideoPlayerController13.get(a);
      return a ? a.keys() : b('enumerate')([]);
    };
    c.prototype.hasOption = function (a, b) {
      a = this.$VideoPlayerController13.get(a);
      return !!a && a.has(b);
    };
    c.prototype.getOption = function (a, b) {
      a = this.$VideoPlayerController13.get(a);
      if (!a) return undefined;
      a = a.get(b);
      return !a ? undefined : a.getter();
    };
    c.prototype.setOption = function (a, b, c) {
      __p && __p();
      a = this.$VideoPlayerController13.get(a);
      if (!a) throw new Error('Component not registered');
      a = a.get(b);
      if (!a) throw new Error('Option not registered');
      b = a.setter;
      if (b) return b(c);
      throw new Error('Read-only option');
    };
    c.prototype.showDebugOverlayView = function (a) {
      this.emit('showDebugOverlay', a);
    };
    c.prototype.$VideoPlayerController127 = function () {
      var a = b('DOMQuery').scry(this.$VideoPlayerController67, '^._5pat');
      return a.length ? a[0] : null;
    };
    c.prototype.registerDrawer = function (a, b) {
      return this.$VideoPlayerController23.register(a, b);
    };
    c.prototype.getVideoPath = function () {
      return this.$VideoPlayerController90;
    };
    c.prototype.setAllowCrossPageTransition = function (a) {
      this.$VideoPlayerController99 = a;
    };
    c.prototype.cleanOnLeave = function () {
      this.pause(b('VideoPlayerReason').UNLOADED), this.destroy();
    };
    c.prototype.switchToFullVideo = function () {
      this.pause(b('VideoPlayerReason').UNLOADED),
        this.getVideoAPI()
          .reloadDashManifest()
          .done(
            function () {
              this.play(
                new (b('VideoPlayerReasonTransitionHelper'))(
                  b('VideoPlayerReason').USER
                )
              ),
                this.emit('switchedToFullVideo'),
                this.emit('playLiveVODHighlights/showUFI');
            }.bind(this)
          );
    };
    c.prototype.switchToLiveVODHighlights = function () {
      this.pause(b('VideoPlayerReason').UNLOADED),
        this.getVideoAPI()
          .reloadLiveVODHighlightsManifest()
          .done(
            function () {
              this.play(
                new (b('VideoPlayerReasonTransitionHelper'))(
                  b('VideoPlayerReason').USER
                )
              ),
                this.emit('switchedToLiveVODHighlights'),
                this.emit('playLiveVODHighlights/hideUFI');
            }.bind(this)
          );
    };
    c.prototype.isPlayingVODHighlights = function () {
      return this.isState('loading') ||
        this.isState('fallback') ||
        this.isState('destroyed')
        ? !1
        : this.getVideoAPI().isPlayingVODHighlights();
    };
    c.prototype.isLiveVODHighlightsAvailable = function () {
      return this.isState('loading') ||
        this.isState('fallback') ||
        this.isState('destroyed')
        ? !1
        : this.getVideoAPI().isLiveVODHighlightsAvailable();
    };
    c.prototype.$VideoPlayerController128 = function () {
      return (
        this.getIsInChannel() ||
        this.$VideoPlayerController70 ===
          b('VideoPlayerLoggerSource').LIVING_ROOM ||
        this.$VideoPlayerController70 ===
          b('VideoPlayerLoggerSource').TOPIC_CHANNEL_LIVING_ROOM ||
        this.$VideoPlayerController55 ===
          b('VideoPlayerOrigins').LOL_CURATION ||
        this.$VideoPlayerController55 ===
          b('VideoPlayerOrigins').GAMES_VIDEO_HUB
      );
    };
    c.prototype.getDashAudioConfiguration = function () {
      return this.getVideoAPI().getDashAudioConfiguration();
    };
    c.prototype.setEnableLiveheadCatchup = function (a) {
      var b = this.getVideoAPI();
      b && b.setEnableLiveheadCatchup(a);
    };
    c.prototype.isFBWasLive = function () {
      var a = this.$VideoPlayerController85 && this.getVideoAPI();
      return !!(a && a.isFBWasLive());
    };
    c.prototype.isFBIsLiveTemplated = function () {
      var a = this.$VideoPlayerController85 && this.getVideoAPI();
      return !!(a && a.isFBIsLiveTemplated());
    };
    c.prototype.isFBMS = function () {
      var a = this.$VideoPlayerController85 && this.getVideoAPI();
      return !!(a && a.isFBMS());
    };
    c.prototype.isLiveheadCatchupEnabled = function () {
      var a = this.getVideoAPI();
      return a ? a.isLiveheadCatchupEnabled() : !1;
    };
    c.prototype.getSeekableRanges = function () {
      var a = this.getVideoAPI();
      return a ? a.getSeekableRanges() : null;
    };
    c.prototype.isBroadcaster = function () {
      return this.$VideoPlayerController33 || !1;
    };
    e.exports = c;
  },
  null
);
__d(
  'VideoCover',
  ['invariant', 'Bootloader', 'CSS', 'EventListener', 'SubscriptionsHandler'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    function a(a, c, d, e) {
      __p && __p();
      e === void 0 && (e = null),
        (this.$7 = new (b('SubscriptionsHandler'))()),
        (this.$13 = function () {
          this.$5 && b('CSS').show(this.$1);
        }.bind(this)),
        (this.$14 = function () {
          this.$5 && b('CSS').hide(this.$1);
        }.bind(this)),
        (this.$9 = function () {
          this.$3 != null && this.$3.length > 0
            ? b('Bootloader').loadModules(
                ['PhotoSnowlift'],
                function (a) {
                  return a.bootstrap(this.$3);
                }.bind(this),
                'VideoCover'
              )
            : this.$8 && this.$8.clickVideo();
        }.bind(this)),
        (this.$10 = function () {
          b('CSS').hide(this.$1);
        }.bind(this)),
        (this.$12 = function () {
          if (this.$8) {
            var a = this.$8.getOption('Looping', 'isLooping');
            if (this.$4 || a) return;
            b('CSS').show(this.$1);
          }
        }.bind(this)),
        (this.$11 = function () {
          this.$8 &&
            this.$8.isState('fallback') &&
            this.$6 &&
            b('CSS').show(this.$1);
        }.bind(this)),
        a instanceof Element || g(0, undefined),
        (this.$1 = a),
        c[0] instanceof Element || g(0, undefined),
        (this.$2 = c[0]),
        (this.$3 = d),
        e &&
          ((this.$4 = e.hiddenAfterFinish),
          (this.$5 = e.showWhileBuffering),
          (this.$6 = e.showAfterFallback)),
        b('EventListener').listen(this.$1, 'click', this.$9);
    }
    a.prototype.disable = function () {
      this.$7.release(),
        this.$8 && this.$8.unregisterOption('VideoCover', 'coverElement'),
        (this.$8 = null);
    };
    a.prototype.enable = function (a) {
      (this.$8 = a),
        a.getState() === 'playing' && this.$10(),
        this.$7.addSubscriptions(
          a.addListener('stateChange', this.$11),
          a.addListener('beginPlayback', this.$10),
          a.addListener('finishPlayback', this.$12),
          a.addListener('buffering', this.$13),
          a.addListener('buffered', this.$14)
        ),
        a.registerOption(
          'VideoCover',
          'coverElement',
          function () {
            return this.$1;
          }.bind(this)
        );
    };
    a.prototype.getCurrentCover = function () {
      return this.$2;
    };
    a.prototype.setSnowLiftURI = function (a) {
      this.$3 = a;
    };
    e.exports = a;
  },
  null
);
__d(
  'VideoNodeStaledScreen',
  ['CSS', 'EventListener', 'SubscriptionsHandler'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a) {
      (this.$3 = new (b('SubscriptionsHandler'))()),
        (this.$5 = function () {
          b('CSS').show(this.$1);
        }.bind(this)),
        (this.$4 = function () {
          b('CSS').hide(this.$1);
        }.bind(this)),
        (this.$1 = a),
        (this.$2 = null),
        b('EventListener').listen(this.$1, 'click', this.$4);
    }
    a.prototype.enable = function (a) {
      (this.$2 = a),
        this.$3.addSubscriptions(
          this.$2.addListener('videoNodeStaled', this.$5)
        );
    };
    a.prototype.disable = function () {
      this.$3.release(), (this.$2 = null);
    };
    e.exports = a;
  },
  null
);
__d(
  'VideoPlayerMainThreadAvailability',
  [
    'VideoPlayerShakaGlobalConfig',
    'Visibility',
    'nativeRequestAnimationFrame',
    'performanceNow',
    'requestAnimationFrame',
    'requestIdleCallback',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = window.__fbNativeSetTimeout,
      h = a.__fbNativeClearTimeout,
      i = window.requestIdleCallback,
      j = window.cancelIdleCallback,
      k = function (a) {
        var b = function b() {
          a(b);
        };
        return b;
      },
      l = function (a, b) {
        var c = function c() {
          a(c, b);
        };
        return c;
      },
      m = function (a, b) {
        var c = function c() {
          a(c, b);
        };
        return c;
      };
    function c() {
      (this.$1 = !1),
        (this.$2 = null),
        (this.$3 = null),
        (this.$4 = null),
        (this.$5 = null);
    }
    c.prototype.enable = function () {
      if (this.$1 || !this.$6()) return;
      this.$7();
      this.$8();
      this.$1 = !0;
    };
    c.prototype.getTimeSinceMainThreadAvailable = function () {
      return this.$2 != null ? b('performanceNow')() - Number(this.$2) : null;
    };
    c.prototype.$9 = function () {
      this.$2 = b('Visibility').isHidden() ? null : b('performanceNow')();
    };
    c.prototype.$10 = function () {
      (this.$2 = null),
        typeof this.$5 === 'number' && (j(this.$5), (this.$5 = null)),
        typeof this.$4 === 'number' && (h(this.$4), (this.$4 = null));
    };
    c.prototype.$8 = function () {
      b('VideoPlayerShakaGlobalConfig').getBool(
        'use_settimeout_for_main_thread_available',
        !1
      )
        ? this.$11()
        : this.$12();
    };
    c.prototype.$7 = function () {
      b('Visibility').addListener(
        b('Visibility').VISIBLE,
        function () {
          this.$10(), this.$8();
        }.bind(this)
      ),
        b('Visibility').addListener(
          b('Visibility').HIDDEN,
          function () {
            this.$10();
          }.bind(this)
        );
    };
    c.prototype.$11 = function () {
      var a = b('VideoPlayerShakaGlobalConfig').getNumber(
        'settimeout_polling_delay',
        -1
      );
      if (a > -1) {
        var c = function () {
          this.$9(), (this.$4 = g(c, a));
        }.bind(this);
        g(c, a);
      }
    };
    c.prototype.$12 = function () {
      var a = b('VideoPlayerShakaGlobalConfig').getNumber(
          'recursive_ric_timeout',
          -1
        ),
        c;
      a > -1 && (c = { timeout: a });
      var d = function (a) {
        this.$9(), (this.$5 = b('requestIdleCallback')(d, c));
      }.bind(this);
      b('requestIdleCallback')(d, c);
    };
    c.prototype.$6 = function () {
      return (
        b('Visibility').isSupported() &&
        typeof i === 'function' &&
        typeof j === 'function' &&
        typeof g === 'function' &&
        typeof h === 'function'
      );
    };
    c.prototype.maybeEnablePerformanceTest = function () {
      var a,
        c,
        d = b('VideoPlayerShakaGlobalConfig').getNumber(
          'recursive_ric_timeout',
          -1
        );
      d > -1 && (c = { timeout: d });
      b('VideoPlayerShakaGlobalConfig').getBool('enable_recursive_raf', !1) &&
        (a = k(b('requestAnimationFrame')));
      b('VideoPlayerShakaGlobalConfig').getBool('enable_recursive_ric', !1) &&
        (a = l(b('requestIdleCallback'), c));
      b('VideoPlayerShakaGlobalConfig').getBool(
        'enable_recursive_native_raf',
        !1
      ) &&
        typeof b('nativeRequestAnimationFrame') === 'function' &&
        (a = k(b('nativeRequestAnimationFrame')));
      b('VideoPlayerShakaGlobalConfig').getBool(
        'enable_recursive_native_ric',
        !1
      ) &&
        typeof i === 'function' &&
        (a = l(i, c));
      d = b('VideoPlayerShakaGlobalConfig').getNumber(
        'recursive_native_settimeout_delay',
        -1
      );
      d > -1 && typeof g === 'function' && (a = m(g, d));
      a && a();
    };
    e.exports = new c();
  },
  null
);
__d(
  'ExtendableVideoPlayerShakaPerformanceTypedLogger',
  [
    'VideoPlayerShakaPerformanceLoggerConfig',
    'VideoPlayerShakaPerformanceTypedLogger',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g, h;
    function i(a) {
      typeof a === 'number' && (a = Math.floor(a));
      return a;
    }
    g = babelHelpers.inherits(a, b('VideoPlayerShakaPerformanceTypedLogger'));
    h = g && g.prototype;
    a.prototype.log = function () {
      b('VideoPlayerShakaPerformanceLoggerConfig').isSampled &&
        h.log.call(this);
    };
    a.prototype.setState = function (a) {
      this.$ExtendableVideoPlayerShakaPerformanceTypedLogger1 = a;
      return h.setState.call(this, a);
    };
    a.prototype.getState = function () {
      return this.$ExtendableVideoPlayerShakaPerformanceTypedLogger1;
    };
    a.prototype.setSequentialID = function (a) {
      this.$ExtendableVideoPlayerShakaPerformanceTypedLogger2 = a;
      h.setSequentialID.call(this, a);
      return this;
    };
    a.prototype.setParentLogger = function (a) {
      this.setParentID(a.$ExtendableVideoPlayerShakaPerformanceTypedLogger2);
      return this;
    };
    a.prototype.setSegmentEndTime = function (a) {
      h.setSegmentEndTime.call(this, i(a));
      return this;
    };
    a.prototype.setSegmentTimeGap = function (a) {
      h.setSegmentTimeGap.call(this, i(a));
      return this;
    };
    a.prototype.setSegmentStartTime = function (a) {
      h.setSegmentStartTime.call(this, i(a));
      return this;
    };
    function a() {
      g.apply(this, arguments);
    }
    e.exports = a;
  },
  null
);
__d(
  'VideoPlayerArtilleryOperationMarker',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a, b, c, d) {
      (this.$2 = a),
        (this.$3 = b),
        (this.$4 = c),
        (this.$5 = d),
        (this.$6 = !1);
    }
    a.prototype.markOperationStart = function () {
      return this.$7('Starting');
    };
    a.prototype.markOperationEnd = function () {
      return this.$7('Ending');
    };
    a.prototype.$7 = function (a) {
      var b = this.$4();
      b &&
        b
          .inform(a + ' ' + this.$2 + ' #' + this.$3, {
            pointGroup: this.$5.getGroupName(this.$2, this.$1),
            isPointOfInterest: !0,
            type: null,
          })
          .addStringAnnotation('resource', this.$1 || '')
          .addStringAnnotation('wasPrefetchCacheHit', this.$6.toString());
      return this;
    };
    a.prototype.setResource = function (a) {
      this.$1 = a;
      return this;
    };
    a.prototype.setWasPrefetchCacheHit = function (a) {
      this.$6 = a;
      return this;
    };
    e.exports = a;
  },
  null
);
__d(
  'VideoPlayerArtilleryPointGrouper',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a() {
      (this.$1 = new Map()), (this.$2 = new Map());
    }
    a.prototype.getGroupName = function (a, b) {
      __p && __p();
      if (!b) {
        switch (a) {
          case 'start_streams':
            a = 'source_attach';
            break;
        }
        return a;
      }
      a = this.$1.get(b);
      if (a) return a;
      var c;
      if (b.indexOf('-init.m4v') !== -1) c = '-init.m4v';
      else if (b.indexOf('-init.m4a') !== -1) c = '-init.m4a';
      else if (b.indexOf('.mpd') !== -1) return 'source_load';
      else
        b.indexOf('.m4v') !== -1
          ? (c = '.m4v')
          : b.indexOf('.m4a') !== -1
          ? (c = '.m4a')
          : (c = 'unknown');
      var d = this.$2.get(c) + 1 || 1;
      this.$2.set(c, d);
      a = c + ' #' + d;
      this.$1.set(b, a);
      return a;
    };
    e.exports = a;
  },
  null
);
__d(
  'VideoPlayerArtilleryTrace',
  [
    'TimeSliceInteraction',
    'UserAgentData',
    'VideoPlayerArtilleryOperationMarker',
    'VideoPlayerArtilleryPointGrouper',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = 3e4,
      h = 3e3;
    function a(a, c) {
      __p && __p();
      (this.$13 = function () {
        var a = this.$2;
        if (a) {
          var b = a.stallTrace,
            c = a.hasStalls;
          a = a.stallTraceTimeout;
          c ? b.finish() : b.disable();
          clearTimeout(a);
        }
        this.$2 = null;
      }.bind(this)),
        (this.$17 = function () {
          return this.$1;
        }.bind(this)),
        (this.$18 = function () {
          var a = this.$2;
          return a ? a.stallTrace : null;
        }.bind(this)),
        (this.$4 = c.videoID),
        (this.$5 = c.video),
        (this.$6 = a),
        (this.$7 = c.isLive),
        (this.$9 = c.playerOrigin),
        (this.$10 = c.playerSuborigin),
        (this.$8 = 0),
        (this.$11 = new (b('VideoPlayerArtilleryPointGrouper'))());
    }
    a.prototype.updateBufferAhead = function (a) {
      var c = this.$2;
      !c && a <= h
        ? (this.$2 = {
            stallTrace: this.$12(
              b('TimeSliceInteraction').create('video_stall')
            ),
            hasStalls: !1,
            stallTraceTimeout: setTimeout(this.$13, g),
          })
        : a > h && this.$13();
    };
    a.prototype.enterState = function (a) {
      switch (a) {
        case 'loading':
          this.$14();
          break;
        case 'playing':
          this.$15();
          break;
        default:
          this.$16(a);
          break;
      }
      return this;
    };
    a.prototype.$16 = function (a) {
      var b = this.$1;
      b && b.inform('State: ' + a);
    };
    a.prototype.getMarkers = function (a) {
      var c = [],
        d = (++this.$8).toString();
      this.$1 &&
        c.push(
          new (b('VideoPlayerArtilleryOperationMarker'))(
            a,
            d,
            this.$17,
            this.$11
          )
        );
      var e = this.$2;
      e &&
        (a === 'buffering' && (e.hasStalls = !0),
        c.push(
          new (b('VideoPlayerArtilleryOperationMarker'))(
            a,
            d,
            this.$18,
            this.$11
          )
        ));
      return c;
    };
    a.prototype.$14 = function () {
      var a = this.$12(b('TimeSliceInteraction').create('video_psr'));
      this.$1 = a;
      this.$16('loading');
    };
    a.prototype.$15 = function () {
      this.$16('playing');
      var a = this.$1;
      a && (a.finish(), (this.$1 = null));
    };
    a.prototype.$12 = function (a) {
      a.trace()
        .addStringAnnotation('videoID', this.$4)
        .addStringAnnotation('sessionID', this.$6)
        .addStringAnnotation('browserName', b('UserAgentData').browserName)
        .addStringAnnotation(
          'browserVersion',
          b('UserAgentData').browserVersion
        )
        .addStringAnnotation('isLive', this.$7.toString())
        .addStringAnnotation('playerOrigin', this.$9 || '')
        .addStringAnnotation('playerSuborigin', this.$10 || '');
      return a;
    };
    e.exports = a;
  },
  null
);
__d(
  'oz-player/loggings/OzPerfLoggerProviderBase',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    a.prototype.cloneContext = function () {
      var a = this.createLoggerProvider();
      this.$6(a);
      return a;
    };
    a.prototype.setType = function (a) {
      this.$1 = a;
      return this;
    };
    a.prototype.setInitiator = function (a) {
      this.$2 = a;
      return this;
    };
    a.prototype.setResource = function (a) {
      this.$3 = a;
      return this;
    };
    a.prototype.setSegmentStartTime = function (a) {
      this.$4 = a;
      return this;
    };
    a.prototype.setSegmentEndTime = function (a) {
      this.$5 = a;
      return this;
    };
    a.prototype.getType = function () {
      return this.$1;
    };
    a.prototype.getInitiator = function () {
      return this.$2;
    };
    a.prototype.getResource = function () {
      return this.$3;
    };
    a.prototype.getSegmentStartTime = function () {
      return this.$4;
    };
    a.prototype.getSegmentEndTime = function () {
      return this.$5;
    };
    a.prototype.getOperationLogger = function (a) {
      a = this.createOperationLogger(a);
      return this.setOperationContext(a);
    };
    a.prototype.setOperationContext = function (a) {
      this.$6(a);
      return a;
    };
    a.prototype.createOperationLogger = function (a) {
      throw new Error('Not implemented');
    };
    a.prototype.createLoggerProvider = function () {
      throw new Error('Not implemented');
    };
    a.prototype.$6 = function (a) {
      this.getType() && a.setType(this.getType()),
        this.getInitiator() && a.setInitiator(this.getInitiator()),
        this.getResource() && a.setResource(this.getResource()),
        typeof this.getSegmentStartTime() === 'number' &&
          a.setSegmentStartTime(this.getSegmentStartTime()),
        typeof this.getSegmentEndTime() === 'number' &&
          a.setSegmentEndTime(this.getSegmentEndTime());
    };
    function a() {}
    e.exports = a;
  },
  null
);
__d(
  'VideoPlayerShakaPerformanceLogger',
  [
    'ExtendableVideoPlayerShakaPerformanceTypedLogger',
    'ScriptPath',
    'VideoPlaybackQuality',
    'VideoPlayerArtilleryTrace',
    'VideoPlayerMainThreadAvailability',
    'VideoPlayerShakaBandwidthEstimator',
    'VideoPlayerShakaGlobalConfig',
    'VideoPlayerShakaPerformanceLoggerConfig',
    'Visibility',
    'oz-player/loggings/OzPerfLoggerProviderBase',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g,
      h = b('VideoPlaybackQuality').getDroppedFrames,
      i = b('VideoPlaybackQuality').getTotalFrames;
    b('VideoPlayerMainThreadAvailability').maybeEnablePerformanceTest();
    c = babelHelpers.inherits(
      a,
      b('oz-player/loggings/OzPerfLoggerProviderBase')
    );
    g = c && c.prototype;
    a.isEnabled = function () {
      return (
        b('VideoPlayerShakaPerformanceLoggerConfig').isSampled ||
        b('VideoPlayerShakaGlobalConfig').getBool(
          'enable_spl_when_unsampled',
          !1
        )
      );
    };
    function a(a) {
      g.constructor.call(this),
        (this.$VideoPlayerShakaPerformanceLogger12 = !1),
        (this.$VideoPlayerShakaPerformanceLogger23 = null),
        (this.$VideoPlayerShakaPerformanceLogger22 = a),
        (this.$VideoPlayerShakaPerformanceLogger2 = a.videoID),
        (this.$VideoPlayerShakaPerformanceLogger4 = a.video),
        (this.$VideoPlayerShakaPerformanceLogger1 = a.uniqueID),
        (this.$VideoPlayerShakaPerformanceLogger3 = 0),
        (this.$VideoPlayerShakaPerformanceLogger5 = a.representationId),
        (this.$VideoPlayerShakaPerformanceLogger10 = a.isLive),
        (this.$VideoPlayerShakaPerformanceLogger11 = a.isServableViaFbms),
        (this.$VideoPlayerShakaPerformanceLogger9 = null),
        (this.$VideoPlayerShakaPerformanceLogger13 = a.accessToken),
        (this.$VideoPlayerShakaPerformanceLogger15 = a.playerOrigin),
        (this.$VideoPlayerShakaPerformanceLogger16 = a.playerSuborigin),
        (this.$VideoPlayerShakaPerformanceLogger17 = a.playerVersion),
        (this.$VideoPlayerShakaPerformanceLogger24 = a.getBandwidthEstimate),
        (this.$VideoPlayerShakaPerformanceLogger14 = new (b(
          'VideoPlayerArtilleryTrace'
        ))(this.$VideoPlayerShakaPerformanceLogger1, a)),
        this.$VideoPlayerShakaPerformanceLogger25();
    }
    a.prototype.$VideoPlayerShakaPerformanceLogger25 = function () {
      b('VideoPlayerShakaGlobalConfig').getBool(
        'enable_main_thread_availability_logging',
        !1
      ) && b('VideoPlayerMainThreadAvailability').enable();
    };
    a.prototype.$VideoPlayerShakaPerformanceLogger26 = function (a) {
      __p && __p();
      var b = this.$VideoPlayerShakaPerformanceLogger4.buffered;
      if (b.length > 0) {
        var c = b.length - 1;
        a = a
          .setLastBufferedStart(Math.round(b.start(c) * 1e3))
          .setLastBufferedEnd(Math.round(b.end(c) * 1e3));
        this.$VideoPlayerShakaPerformanceLogger14.updateBufferAhead(
          (b.end(c) - this.$VideoPlayerShakaPerformanceLogger4.currentTime) *
            1e3
        );
      }
      c = [];
      for (var d = 0; d < b.length - 1; d++) {
        var e = Math.round(
            this.$VideoPlayerShakaPerformanceLogger4.buffered.start(d) * 1e3
          ),
          f = Math.round(
            this.$VideoPlayerShakaPerformanceLogger4.buffered.end(d) * 1e3
          );
        c.push([e, f]);
      }
      c && c.length && (a = a.setAdditionalBufferedRanges(JSON.stringify(c)));
      return a;
    };
    a.prototype.setType = function (a) {
      this.$VideoPlayerShakaPerformanceLogger21 = a;
      return this;
    };
    a.prototype.createLoggerProvider = function () {
      return new self(this.$VideoPlayerShakaPerformanceLogger22);
    };
    a.prototype.getLiveheadDelta = function () {
      return this.$VideoPlayerShakaPerformanceLogger9
        ? Math.round(
            (this.$VideoPlayerShakaPerformanceLogger9 -
              this.$VideoPlayerShakaPerformanceLogger4.currentTime) *
              1e3
          )
        : null;
    };
    a.prototype.getVideoID = function () {
      return this.$VideoPlayerShakaPerformanceLogger2;
    };
    a.prototype.setIsTemplatedManifest = function (a) {
      this.$VideoPlayerShakaPerformanceLogger12 = a;
    };
    a.prototype.$VideoPlayerShakaPerformanceLogger27 = function () {
      return this.$VideoPlayerShakaPerformanceLogger12;
    };
    a.prototype.getEventLogger = function (event) {
      __p && __p();
      var a = Date.now(),
        c = new (b('ExtendableVideoPlayerShakaPerformanceTypedLogger'))(),
        d = this.$VideoPlayerShakaPerformanceLogger4.currentTime,
        e = this.$VideoPlayerShakaPerformanceLogger4.duration;
      this.$VideoPlayerShakaPerformanceLogger26(c)
        .setEvent(event)
        .setVideoID(this.$VideoPlayerShakaPerformanceLogger2)
        .setDroppedFrames(h(this.$VideoPlayerShakaPerformanceLogger4))
        .setTotalFrames(i(this.$VideoPlayerShakaPerformanceLogger4))
        .setDynamicBitrate(this.$VideoPlayerShakaPerformanceLogger20)
        .setLogicalCpuCount(navigator && navigator.hardwareConcurrency)
        .setPlayerOriginCallerSpecified(
          this.$VideoPlayerShakaPerformanceLogger15
        )
        .setScriptPath(b('ScriptPath').getScriptPath())
        .setPlayerSuborigin(this.$VideoPlayerShakaPerformanceLogger16)
        .setPlayerVersion(this.$VideoPlayerShakaPerformanceLogger17)
        .setBandwidthEstimate(
          Math.round(
            this.$VideoPlayerShakaPerformanceLogger24(
              this.$VideoPlayerShakaPerformanceLogger10
            )
          )
        )
        .setRepresentationID(this.$VideoPlayerShakaPerformanceLogger5)
        .setLowestQualityRepresentationID(
          this.$VideoPlayerShakaPerformanceLogger19
        )
        .setPlayhead(Math.round(d * 1e3))
        .setVideoDuration(Math.round(e * 1e3))
        .setIsLive(this.$VideoPlayerShakaPerformanceLogger10)
        .setIsServableViaFbms(this.$VideoPlayerShakaPerformanceLogger11)
        .setIsMuted(this.$VideoPlayerShakaPerformanceLogger4.muted)
        .setIsPageVisible(!b('Visibility').isHidden())
        .setIsTemplatedManifest(this.$VideoPlayerShakaPerformanceLogger27())
        .setSession(this.$VideoPlayerShakaPerformanceLogger1)
        .setManifestType(this.$VideoPlayerShakaPerformanceLogger18)
        .setSequentialID(this.$VideoPlayerShakaPerformanceLogger3++)
        .setState(this.$VideoPlayerShakaPerformanceLogger6)
        .setLastBufferingEventEndTime(this.$VideoPlayerShakaPerformanceLogger8)
        .setLastPlayingEventTime(this.$VideoPlayerShakaPerformanceLogger7)
        .setLiveheadDelta(this.getLiveheadDelta())
        .setPushed(0)
        .setResult('success')
        .setAccessToken(this.$VideoPlayerShakaPerformanceLogger13)
        .setClientTimeBegin(a)
        .setClientTimeEnd(a);
      var f = this,
        g = c.setState;
      c.setState = function (a) {
        a !== this.$VideoPlayerShakaPerformanceLogger6 && a === 'playing'
          ? (f.$VideoPlayerShakaPerformanceLogger7 = Date.now())
          : a !== 'playing' && (f.$VideoPlayerShakaPerformanceLogger7 = null);
        f.$VideoPlayerShakaPerformanceLogger6 = a;
        f.$VideoPlayerShakaPerformanceLogger14.enterState(a);
        return g.call(this, a);
      };
      c.updateState = function (a) {
        if (this.getState() == f.$VideoPlayerShakaPerformanceLogger6) {
          f.$VideoPlayerShakaPerformanceLogger14.enterState(a);
          return this.setState(a);
        }
        return this;
      };
      var j = c.setError;
      c.setError = function (a) {
        typeof a === 'object'
          ? (a.type === 'aborted' || a.type === 'delay'
              ? this.setResult('aborted')
              : a.type === 'paused'
              ? this.setResult('paused')
              : (this.setResult('failed'), j.call(this, a.type)),
            this.setCode(a.status))
          : j.call(this, a);
        return this;
      };
      var k = c.setManifestType;
      c.setManifestType = function (a) {
        this.$VideoPlayerShakaPerformanceLogger18 = a;
        return k.call(c, a);
      }.bind(this);
      return c;
    };
    a.prototype.getArtilleryMarkers = function (a) {
      return this.$VideoPlayerShakaPerformanceLogger14.getMarkers(a);
    };
    a.prototype.getOperationLogger = function (a) {
      a = this.createOperationLogger(a);
      this.setOperationContext(a);
      return a;
    };
    a.prototype.createOperationLogger = function (a) {
      __p && __p();
      var c = this.getEventLogger(a),
        d = this.getArtilleryMarkers(a),
        e = c.setResource;
      c.setResource = function (a) {
        d.forEach(function (b) {
          return b.setResource(a);
        });
        return e.call(c, a);
      };
      var f = c.log,
        g = this;
      c.log = function () {
        this.setClientTimeEnd(Date.now());
        var c = b(
          'VideoPlayerMainThreadAvailability'
        ).getTimeSinceMainThreadAvailable();
        this.setTimeSinceMainThreadAvailable(c != null ? Math.round(c) : null);
        g.$VideoPlayerShakaPerformanceLogger28();
        a === 'buffering' &&
          (g.$VideoPlayerShakaPerformanceLogger8 = Date.now());
        d.forEach(function (a) {
          return a.markOperationEnd();
        });
        return f.call(this);
      };
      c.start = function () {
        d.forEach(function (a) {
          return a.markOperationStart();
        });
        return c;
      };
      c.setWasPrefetchCacheHit = function (a) {
        d.forEach(function (b) {
          return b.setWasPrefetchCacheHit(a);
        });
        return c;
      };
      c.setLiveheadPosition = function (a) {
        this.$VideoPlayerShakaPerformanceLogger9 = a;
        c.setLiveheadDelta(this.getLiveheadDelta());
        return c;
      }.bind(this);
      var h = c.setDynamicBitrate;
      c.setDynamicBitrate = function (a) {
        a = Number(a) || null;
        this.setDynamicBitrate(a);
        return h.call(c, a);
      }.bind(this);
      var i = c.setLowestQualityRepresentationID;
      c.setLowestQualityRepresentationID = function (a) {
        this.$VideoPlayerShakaPerformanceLogger19 = a;
        return i.call(c, a);
      }.bind(this);
      return c;
    };
    a.prototype.$VideoPlayerShakaPerformanceLogger28 = function () {
      var a = b('VideoPlayerShakaGlobalConfig').getNumber(
          'main_thread_blocked_event_threshold',
          200
        ),
        c = b(
          'VideoPlayerMainThreadAvailability'
        ).getTimeSinceMainThreadAvailable();
      if (c == null || a === 0 || c < a) return;
      a = Number(c);
      c = Date.now();
      if (c - a <= Number(this.$VideoPlayerShakaPerformanceLogger23)) return;
      this.$VideoPlayerShakaPerformanceLogger23 = c;
      this.getOperationLogger('main_thread_blocked')
        .setClientTimeEnd(c)
        .setClientTimeBegin(Math.round(c - a))
        .log();
    };
    a.prototype.setRepresentationID = function (a) {
      this.$VideoPlayerShakaPerformanceLogger5 = a;
    };
    a.prototype.setDynamicBitrate = function (a) {
      this.$VideoPlayerShakaPerformanceLogger20 =
        a != null ? Math.round(a) : null;
    };
    e.exports = a;
  },
  null
);
__d(
  'keyMirror',
  ['invariant'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    function a(a) {
      var b = {};
      (a instanceof Object && !Array.isArray(a)) || g(0, undefined);
      for (var c in a) {
        if (!Object.prototype.hasOwnProperty.call(a, c)) continue;
        b[c] = c;
      }
      return b;
    }
    e.exports = a;
  },
  null
);
__d(
  'ByteRange',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a, b) {
      return a.startByte === b.startByte;
    }
    function b(a, b) {
      return b.endByte === null ? !1 : a.startByte === b.endByte + 1;
    }
    function c(a, b) {
      return a.startByte < b.startByte
        ? !1
        : b.endByte == null || b.endByte >= a.startByte;
    }
    function d(a, b) {
      __p && __p();
      if (b.startByte < a.startByte) {
        var c = a;
        a = b;
        b = c;
      }
      if (a.endByte == null) return { startByte: a.startByte, endByte: null };
      if (b.startByte > a.endByte + 1) return null;
      c = b.endByte == null || b.endByte > a.endByte ? b.endByte : a.endByte;
      return { startByte: a.startByte, endByte: c };
    }
    function f(a, b) {
      if (b.endByte == null) return null;
      if (a.startByte > b.endByte)
        return { startByte: a.startByte, endByte: a.endByte };
      return a.endByte != null && a.endByte <= b.endByte
        ? null
        : { startByte: b.endByte + 1, endByte: a.endByte };
    }
    function g(a) {
      return a.endByte == null ? null : a.endByte - a.startByte + 1;
    }
    e.exports = {
      startsAtSame: a,
      startsImmediateAfter: b,
      startsDuring: c,
      union: d,
      disjoinAfter: f,
      getLength: g,
    };
  },
  null
);
__d(
  'ProducerInterruptedError',
  [],
  function (a, b, c, d, e, f) {
    var g;
    g = babelHelpers.inherits(a, Error);
    g && g.prototype;
    function a() {
      g.apply(this, arguments);
    }
    e.exports = a;
  },
  null
);
__d(
  'DeferredBuffer',
  ['Deferred', 'MaybeNativePromise', 'ProducerInterruptedError'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a) {
      a === void 0 && (a = {});
      this.$3 = [];
      this.$4 = !1;
      this.$6 = 0;
      a = a;
      var b = a.disableArrayShift;
      a = a.useNativePromise;
      this.$1 = !!b;
      this.$2 = !!a;
    }
    a.prototype.produce = function (a) {
      this.$7(a);
    };
    a.prototype.signalProducerInterruption = function () {
      this.$7(new (b('ProducerInterruptedError'))('producer interrupted'));
    };
    a.prototype.consume = function (a) {
      __p && __p();
      if (this.$4)
        throw new Error(
          'A buffer can only be consumed by one client at a time'
        );
      this.$4 = !0;
      var c = b('MaybeNativePromise').resolve();
      this.isEmpty() &&
        ((this.$5 = this.$2
          ? new (b('Deferred'))(b('MaybeNativePromise'))
          : new (b('Deferred'))()),
        (c = this.$5.getPromise()));
      return c.then(
        function () {
          __p && __p();
          if (this.$1) {
            if (this.$3[this.$6] === undefined)
              throw new Error('buffer has no value at position ' + this.$6);
          } else if (this.$3.length === 0)
            throw new Error('buffer length must not be 0');
          this.$5 = null;
          this.$4 = !1;
          var b = this.$1 ? this.$8(a) : this.$9(a);
          if (b instanceof Uint8Array) return b;
          throw b;
        }.bind(this)
      );
    };
    a.prototype.$7 = function (a) {
      this.$3.push(a), this.$5 && this.$5.resolve();
    };
    a.prototype.$8 = function (a) {
      __p && __p();
      var b = this.$3[this.$6];
      if (b === undefined) return new Uint8Array([]);
      b = b;
      if (!(b instanceof Uint8Array)) {
        this.$3[this.$6] = undefined;
        this.$6++;
        return b;
      }
      if (a !== undefined && b.length > a) {
        var c = b.slice(a);
        b = b.slice(0, a);
        this.$3[this.$6] = c;
      } else (this.$3[this.$6] = undefined), this.$6++;
      return b;
    };
    a.prototype.$9 = function (a) {
      __p && __p();
      if (this.$3.length === 0) return new Uint8Array([]);
      var b = this.$3[0];
      if (!(b instanceof Uint8Array)) {
        this.$3.shift();
        return b;
      }
      if (a !== undefined && b.length > a) {
        var c = b.slice(a);
        b = b.slice(0, a);
        this.$3[0] = c;
      } else this.$3.shift();
      return b;
    };
    a.prototype.isEmpty = function () {
      return this.$1 ? this.$3[this.$6] === undefined : this.$3.length === 0;
    };
    e.exports = a;
  },
  null
);
__d(
  'ReadableStream',
  [],
  function (a, b, c, d, e, f) {
    e.exports = self.ReadableStream;
  },
  null
);
__d(
  'WritableStream',
  [],
  function (a, b, c, d, e, f) {
    e.exports = self.WritableStream;
  },
  null
);
__d(
  'pipeErrorTo',
  [],
  function (a, b, c, d, e, f) {
    function a(a, b) {
      try {
        a.error(b);
      } catch (a) {}
    }
    e.exports = a;
  },
  null
);
__d(
  'PausableRangeStream',
  [
    'ByteRange',
    'Deferred',
    'DeferredBuffer',
    'MaybeNativePromise',
    'ReadableStream',
    'WritableStream',
    'pipeErrorTo',
  ],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = b('ByteRange').startsImmediateAfter;
    function h() {
      return new Error('Upstream has an inconsistent range');
    }
    function i() {
      this.$1 = 0;
    }
    i.prototype.setBytesToSkip = function (a) {
      this.$1 = a;
    };
    i.prototype.setBytesSkipped = function (a) {
      this.$1 -= a;
    };
    i.prototype.getBytesToSkip = function () {
      return this.$1;
    };
    i.prototype.hasMoreBytesToSkip = function () {
      return this.$1 > 0;
    };
    function j(a, c, d) {
      __p && __p();
      this.$5 = !1;
      this.$7 = 0;
      this.$8 = 0;
      this.$13 = !1;
      this.$14 = 0;
      this.$15 = new i();
      this.$16 = !1;
      this.$17 = !1;
      this.$1 = a;
      this.$2 = c;
      a = d || {};
      c = a.fixStreamingUndefinedEndByte;
      d = a.disableDeferredBufferArrayShift;
      var e = a.useNativePromiseInDeferredBuffer,
        f = a.enablePausableStreamResumeFromStartDangerously;
      a = a.fixPausePreReadableStream;
      this.$11 = !!c;
      this.$16 = !!f;
      this.$17 = !!a;
      this.$3 = new (b('DeferredBuffer'))({
        disableArrayShift: !!d,
        useNativePromise: !!e,
      });
      this.$6 = new (b('ReadableStream'))({
        start: function (a) {
          this.$10 = a;
        }.bind(this),
        pull: function (a) {
          __p && __p();
          if (
            ((this.$11 && this.$1.endByte === null && this.$5) ||
              this.$7 === this.$18()) &&
            this.$3.isEmpty()
          ) {
            a.close();
            return b('MaybeNativePromise').resolve();
          }
          var c = function () {
            __p && __p();
            var d = this.$15.hasMoreBytesToSkip()
              ? this.$15.getBytesToSkip()
              : undefined;
            return this.$3
              .consume(d)
              .then(
                function (d) {
                  if (this.$15.hasMoreBytesToSkip()) {
                    this.$15.setBytesSkipped(d.length);
                    return c();
                  }
                  this.$7 += d.length;
                  var e = this.$18();
                  e !== null &&
                    this.$7 > (e || 0) &&
                    b('pipeErrorTo')(this.$10, h());
                  a.enqueue(d);
                }.bind(this)
              )
              ['catch'](
                function (a) {
                  if (a === 'skip_buffered_bytes') {
                    this.$15.setBytesToSkip(this.$7);
                    return c();
                  }
                  throw a;
                }.bind(this)
              );
          }.bind(this);
          return c();
        }.bind(this),
        cancel: function (a) {
          this.$12 && this.$12.resolve('stream_cancelled'),
            b('pipeErrorTo')(this.$9, a);
        }.bind(this),
      });
      this.$19();
    }
    j.prototype.$18 = function () {
      var a = this.$1,
        b = a.startByte;
      a = a.endByte;
      return a != null ? a - b + 1 : null;
    };
    j.prototype.$19 = function () {
      this.$4 = new (b('WritableStream'))({
        start: function (a) {
          this.$9 = a;
        }.bind(this),
        write: function (a) {
          this.$3.produce(a), (this.$8 += a.length);
        }.bind(this),
        close: function () {
          this.$5 = !0;
          var a = this.$1,
            c = a.endByte;
          a = a.startByte;
          this.$11 && c === null && this.$3.produce(new Uint8Array([]));
          c !== null &&
            this.$8 !== (c || 0) - a + 1 &&
            b('pipeErrorTo')(this.$10, h());
        }.bind(this),
        abort: function (a) {
          this.$12 && this.$12.resolve('stream_aborted'),
            b('pipeErrorTo')(this.$10, a);
        }.bind(this),
      });
    };
    j.prototype.getStream = function () {
      return this.$6;
    };
    j.prototype.startStream = function () {
      __p && __p();
      this.$13 = !0;
      var a = { startByte: this.$1.startByte, endByte: this.$1.endByte };
      !this.$16
        ? (a.startByte += this.$8)
        : this.$8 && (this.$3.produce('skip_buffered_bytes'), (this.$8 = 0));
      var c = this.$4;
      return this.$2.startStream(a).then(
        function (a) {
          a.pipeTo(this.$17 ? c : this.$4)
            .then(
              function () {
                this.$12 && this.$12.resolve('stream_done');
              }.bind(this)
            )
            ['catch'](
              function (a) {
                this.$12 &&
                  !this.$12.isSettled() &&
                  (this.$17 && a === j.STREAM_PAUSED
                    ? this.$12.resolve('stream_paused')
                    : this.$12.resolve('stream_unexpected'));
              }.bind(this)
            );
          this.$12 = new (b('Deferred'))(b('MaybeNativePromise'));
          return { statusPromise: this.$12.getPromise() };
        }.bind(this)
      );
    };
    j.prototype.pauseStream = function () {
      b('pipeErrorTo')(this.$9, j.STREAM_PAUSED),
        this.$12 && this.$12.resolve('stream_paused'),
        this.$19();
    };
    j.prototype.getByteRange = function () {
      return this.$1;
    };
    j.prototype.getBytesStreamed = function () {
      return this.$7;
    };
    j.prototype.tryConcatByteRange = function (a) {
      if (this.$13 || !g(a, this.$1)) return !1;
      this.$1.endByte = a.endByte;
      return !0;
    };
    j.STREAM_PAUSED = 'streamPaused';
    e.exports = j;
  },
  null
);
__d(
  'createErrorStream',
  ['ReadableStream'],
  function (a, b, c, d, e, f) {
    function a(a) {
      return new (b('ReadableStream'))({
        pull: function (b) {
          b.error(a);
        },
      });
    }
    e.exports = a;
  },
  null
);
__d(
  'BinarySearch',
  ['invariant', 'keyMirror'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    a = b('keyMirror')({
      LEAST_UPPER_BOUND: null,
      GREATEST_LOWER_BOUND: null,
      LEAST_STRICT_UPPER_BOUND: null,
      GREATEST_STRICT_LOWER_BOUND: null,
    });
    var h = function (a, b) {
        (typeof a === 'number' && typeof b === 'number') || g(0, undefined);
        return a - b;
      },
      i = {
        LEAST_UPPER_BOUND: a.LEAST_UPPER_BOUND,
        GREATEST_LOWER_BOUND: a.GREATEST_LOWER_BOUND,
        LEAST_STRICT_UPPER_BOUND: a.LEAST_STRICT_UPPER_BOUND,
        GREATEST_STRICT_LOWER_BOUND: a.GREATEST_STRICT_LOWER_BOUND,
        find: function (a, b, c, d, e) {
          e === void 0 && (e = h);
          var f = i.LEAST_UPPER_BOUND;
          f = i.findBound(a, b, c, d, e, f);
          if (c <= f && f < d) {
            c = a(f);
            return e(c, b) === 0 ? c : undefined;
          } else return undefined;
        },
        findIndex: function (a, b, c, d, e) {
          e === void 0 && (e = h);
          var f = i.LEAST_UPPER_BOUND;
          f = i.findBound(a, b, c, d, e, f);
          if (c <= f && f < d) return e(a(f), b) === 0 ? f : -1;
          else return -1;
        },
        findBound: function (a, b, c, d, e, f) {
          switch (f) {
            case i.LEAST_UPPER_BOUND:
              return i.leastUpperBound(a, b, c, d, e);
            case i.GREATEST_LOWER_BOUND:
              return i.greatestLowerBound(a, b, c, d, e);
            case i.LEAST_STRICT_UPPER_BOUND:
              return i.leastStrictUpperBound(a, b, c, d, e);
            case i.GREATEST_STRICT_LOWER_BOUND:
              return i.greatestStrictLowerBound(a, b, c, d, e);
            default:
              g(0, undefined, f);
          }
        },
        leastUpperBound: function (a, b, c, d, e) {
          c = c;
          d = d;
          while (c + 1 < d) {
            var f = c + Math.floor((d - c) / 2);
            e(a(f), b) >= 0 ? (d = f) : (c = f);
          }
          return c < d && e(a(c), b) >= 0 ? c : d;
        },
        greatestLowerBound: function (a, b, c, d, e) {
          return i.leastStrictUpperBound(a, b, c, d, e) - 1;
        },
        leastStrictUpperBound: function (a, b, c, d, e) {
          c = c;
          d = d;
          while (c + 1 < d) {
            var f = c + Math.floor((d - c) / 2);
            e(a(f), b) > 0 ? (d = f) : (c = f);
          }
          return c < d && e(a(c), b) > 0 ? c : d;
        },
        greatestStrictLowerBound: function (a, b, c, d, e) {
          return i.leastUpperBound(a, b, c, d, e) - 1;
        },
        findInArray: function (a, b, c) {
          return i.find(
            function (b) {
              return a[b];
            },
            b,
            0,
            a.length,
            c
          );
        },
        findIndexInArray: function (a, b, c) {
          return i.findIndex(
            function (b) {
              return a[b];
            },
            b,
            0,
            a.length,
            c
          );
        },
        findBoundInArray: function (a, b, c, d) {
          return i.findBound(
            function (b) {
              return a[b];
            },
            b,
            0,
            a.length,
            c,
            d
          );
        },
      };
    e.exports = i;
  },
  null
);
__d(
  'TaggedTimeRanges',
  ['sprintf'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a) {
      (this.$1 = []),
        (this.$2 = 0),
        (this.$3 = 0),
        (this.$4 = a
          ? a
          : function (a, b) {
              return a === b;
            });
    }
    a.prototype.add = function (a, b, c) {
      __p && __p();
      if (b < a) return;
      if (b === a) return;
      if (this.$1.length === 0) {
        this.$1.push({ start: a, end: b, tag: c });
        return;
      }
      var d = 0,
        e = 0;
      for (var f = 0; f < this.$1.length; f++) {
        if (a === this.$1[f].start && b === this.$1[f].end) {
          d = f;
          e = f + 1;
          break;
        }
        a >= this.$1[f].start && (d = f + 1);
        b <= this.$1[f].end && (e = f);
        if (b < this.$1[f].start) break;
      }
      this.$1.splice(d, e - d, { start: a, end: b, tag: c });
      this.$5(d);
    };
    a.prototype.$5 = function (a) {
      var b = this.$1[a],
        c = null;
      a !== 0 && (c = this.$1[a - 1]);
      c !== null &&
        (this.$4(c.tag, b.tag)
          ? c.end >= b.start &&
            (this.$1.splice(a - 1, 2, {
              start: c.start,
              end: Math.max(b.end, c.end),
              tag: b.tag,
            }),
            a--)
          : (c.end > b.start && c.start === b.start
              ? (this.$1.splice(a - 1, 1), a--)
              : c.end > b.start &&
                this.$1.splice(a - 1, 1, {
                  start: c.start,
                  end: b.start,
                  tag: c.tag,
                }),
            c.end > b.end &&
              this.$1.splice(a + 1, 0, {
                start: b.end,
                end: c.end,
                tag: c.tag,
              })));
      c = null;
      a !== this.$1.length - 1 && (c = this.$1[a + 1]);
      c &&
        (this.$4(c.tag, b.tag)
          ? c.start <= b.end &&
            this.$1.splice(a, 2, {
              start: b.start,
              end: Math.max(c.end, b.end),
              tag: b.tag,
            })
          : c.start <= b.end &&
            (c.end < b.end
              ? (this.$1.splice(a, 1, {
                  start: b.start,
                  end: c.start,
                  tag: b.tag,
                }),
                this.$1.push({ start: c.end, end: b.end, tag: b.tag }))
              : this.$1.splice(a + 1, 1, {
                  start: b.end,
                  end: c.end,
                  tag: c.tag,
                })));
    };
    a.prototype.get = function (a) {
      __p && __p();
      var b = a >= this.$3 ? this.$2 : 0,
        c = null;
      for (var b = b; b < this.$1.length; b++)
        if (this.$1[b].start <= a && a < this.$1[b].end) {
          c = b;
          break;
        }
      this.$2 = c === null ? 0 : c;
      this.$3 = a;
      return c === null ? null : this.$1[c].tag;
    };
    a.prototype.getLength = function () {
      return this.$1.length;
    };
    e.exports = a;
  },
  null
);
__d(
  'RoundRobinPriorityTaskQueue',
  ['Deferred', 'MaybeNativePromise'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a, b) {
      b === void 0 && (b = -1),
        (this.$3 = function () {}),
        (this.$4 = []),
        (this.$5 = new Map()),
        (this.$6 = new Map()),
        (this.$1 = a),
        (this.$2 = b);
    }
    a.prototype.getHighestPriority = function () {
      return Math.max.apply(
        Math,
        this.$4.map(function (a) {
          return a.queue.length ? a.priority : -Infinity;
        })
      );
    };
    a.prototype.enqueue = function (a, b) {
      __p && __p();
      b = this.$7(b);
      var c = this.$5.get(a),
        d = this.$8(a);
      if (c === b) return d;
      this.$5.has(a) && this.remove(a);
      c = this.$9(b);
      var e = this.$4[c];
      (e && e.priority === b) ||
        ((e = { priority: b, queue: [] }), this.$4.splice(c, 0, e));
      this.$5.set(a, b);
      e.queue.push(a);
      this.$3(a, b >= this.$1 ? 'immediate' : 'normal');
      return d;
    };
    a.prototype.updatePriority = function (a, b) {
      if (!this.$5.has(a)) return;
      this.enqueue(a, b);
    };
    a.prototype.dequeue = function () {
      for (var a = 0; a < this.$4.length; a++) {
        var b = this.$4[a];
        if (b.queue.length) {
          b = b.queue.shift();
          this.$5['delete'](b);
          return b;
        }
      }
      return null;
    };
    a.prototype.remove = function (a) {
      __p && __p();
      var b = this.$5.get(a);
      if (b === undefined) return;
      b = this.$9(b);
      b = this.$4[b];
      if (b && b.queue) {
        var c = b.queue.findIndex(function (b) {
          return b === a;
        });
        c > -1 && b.queue.splice(c, 1);
      }
      this.$5['delete'](a);
    };
    a.prototype.setOnTaskUpdated = function (a) {
      this.$3 = a;
    };
    a.prototype.clearOnTaskUpdated = function () {
      this.setOnTaskUpdated(function () {});
    };
    a.prototype.getLength = function () {
      return this.$5.size;
    };
    a.prototype.$8 = function (a) {
      __p && __p();
      var c = this.$6.get(a);
      if (!c) {
        var d = new (b('Deferred'))(b('MaybeNativePromise'));
        c = d.getPromise();
        this.$6.set(a, c);
        var e = a.run;
        a.run = function () {
          return e
            .call(a)
            .then(function (a) {
              d.resolve(a);
              return a;
            })
            ['catch'](function (a) {
              d.reject(a);
              throw a;
            });
        };
      }
      return c;
    };
    a.prototype.$9 = function (a) {
      a = this.$7(a);
      var b;
      for (b = 0; b < this.$4.length; b++)
        if (a >= this.$4[b].priority) return b;
      return b;
    };
    a.prototype.$7 = function (a) {
      this.$2 >= 0 && (a = Number.parseFloat(a.toFixed(this.$2)));
      return a;
    };
    e.exports = a;
  },
  null
);
__d(
  'SequentialTaskScheduler',
  ['MaybeNativePromise', 'setTimeout'],
  function (a, b, c, d, e, f) {
    __p && __p();
    function a(a, b) {
      this.$3 = null;
      this.$4 = 0;
      this.$1 = a;
      a = b || {};
      b = a.taskTimeout;
      this.$5 = b || 0;
    }
    a.prototype.start = function () {
      this.$1.setOnTaskUpdated(this.$6.bind(this));
      var a = this.$1.dequeue();
      a && this.$7(a, 'immediate');
    };
    a.prototype.destroy = function () {
      this.$2 && this.$2.cancel(), this.$1.clearOnTaskUpdated();
    };
    a.prototype.$6 = function (a, b) {
      b = this.$7(a, b);
      b && this.$1.remove(a);
    };
    a.prototype.$7 = function (a, c) {
      __p && __p();
      if (this.$2 && c !== 'immediate') return !1;
      this.$2 && this.$2.cancel();
      c = a.run()['catch'](function (a) {});
      this.$5 > 0 &&
        (c = b('MaybeNativePromise').race([
          c,
          new (b('MaybeNativePromise'))(
            function (a, c) {
              b('setTimeout')(a, this.$5);
            }.bind(this)
          ),
        ]));
      this.$4++;
      this.$2 = a;
      c = c.then(
        function () {
          this.$4--;
          this.$2 === a && (this.$2 = null);
          if (this.$4 === 0) {
            var b = this.$1.dequeue();
            b && this.$7(b, 'immediate');
          }
        }.bind(this)
      );
      return !0;
    };
    e.exports = a;
  },
  null
);
