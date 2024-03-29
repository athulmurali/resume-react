if (self.CavalryLogger) {
  CavalryLogger.start_js(['zA+KG']);
}

__d(
  'dangerouslyBypassDispatchError',
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      for (
        var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
        d < b;
        d++
      )
        c[d - 1] = arguments[d];
      setTimeout(function () {
        a.apply(null, c);
      }, 0);
    }
    e.exports = a;
  },
  null
);
__d(
  'CommentVoteReactionType',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({ NONE: 0, UPVOTE: 1, DOWNVOTE: 2 });
  },
  null
);
__d(
  'CommentVoteUIVersion',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      NONE: 'none',
      INSIDE_BLING_BAR: 'inside_bling_bar',
      VERTICAL_ON_THE_SIDE: 'vertical_on_the_side',
    });
  },
  null
);
__d(
  'FeedbackActionType',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      CHANGE_ACCEPTED_ANSWER: 'fa-type:change-accepted-answer',
      COMMENT_LIKE: 'fa-type:comment-like',
      COMMENT_REACTION: 'fa-type:comment-reaction',
      COMMENT_SET_SPAM: 'fa-type:mark-spam',
      COMMENT_KEEP_SPAM: 'fa-type:keep_spam',
      COMMENT_APPEAL_SPAM: 'fa-type:appeal_spam',
      COMMENT_SECURE_ACCOUNT: 'fa-type:secure_account',
      COMMENT_VOTE: 'fa-type:comment_vote',
      DELETE_COMMENT: 'fa-type:delete-comment',
      DELETE_COMMENT_REMOVE_COMMENTER:
        'fa-type:delete_comment_remove_commenter',
      DISABLE_COMMENTS: 'fa-type:disable-comments',
      LIVE_DELETE_COMMENT: 'fa-type:live-delete-comment',
      LIKE_ACTION: 'fa-type:like',
      SUBSCRIBE_ACTION: 'fa-type:subscribe',
      REMOVE_PREVIEW: 'fa-type:remove-preview',
      MARK_COMMENT_SPAM: 'fa-type:mark-spam',
      MUTE_MEMBER: 'fa-type:mute-member',
      CONFIRM_COMMENT_REMOVAL: 'fa-type:confirm-remove',
      TRANSLATE_COMMENT: 'fa-type:translate-comment',
      TRANSLATE_ALL: 'fa-type:translate-all-comments',
      COMMENT_LIKECOUNT_UPDATE: 'fa-type:comment-likecount-update',
      ADD_COMMENT_ACTION: 'fa-type:add-comment',
      REACTION: 'fa-type:reaction',
      UPDATE_CONSTITUENT_BADGE: 'fa-type:comment_update_constituent_title',
      COMMENT_AUTHOR_PIN_CHANGE: 'fa-type:comment_author_pin_change',
    });
  },
  null
);
__d(
  'FeedbackPayloadSourceType',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      UNKNOWN: 0,
      INITIAL_SERVER: 1,
      LIVE_SEND: 2,
      USER_ACTION: 3,
      STREAMING: 4,
      COLLAPSE_ACTION: 7,
      ENDPOINT_LIKE: 10,
      ENDPOINT_COMMENT_LIKE: 11,
      ENDPOINT_ADD_COMMENT: 12,
      ENDPOINT_EDIT_COMMENT: 13,
      ENDPOINT_DELETE_COMMENT: 14,
      ENDPOINT_HIDE_COMMENT: 16,
      ENDPOINT_REMOVE_PREVIEW: 17,
      ENDPOINT_ID_COMMENT_FETCH: 18,
      ENDPOINT_COMMENT_FETCH: 19,
      ENDPOINT_TRANSLATE_COMMENT: 20,
      ENDPOINT_BAN: 21,
      ENDPOINT_SUBSCRIBE: 22,
      ENDPOINT_COMMENT_LIKECOUNT_UPDATE: 23,
      ENDPOINT_DISABLE_COMMENTS: 24,
      ENDPOINT_ACTOR_CHANGE: 25,
      ENDPOINT_REACTION: 26,
      ENDPOINT_PAGES_MODERATION: 27,
      ENDPOINT_COMMENT_REACTION: 28,
      ENDPOINT_COMMENT_ANSWER_ACCEPT: 29,
      ENDPOINT_COMMENT_KEEP_SPAM: 30,
      ENDPOINT_COMMENT_APPEAL_SPAM: 31,
      ENDPOINT_COMMENT_SECURE_ACCOUNT: 32,
      ENDPOINT_DELETE_COMMENT_AND_REMOVE_COMMENTER: 33,
      ENTPOINT_MUTE_MEMBER: 34,
      ENDPOINT_SUBSCRIBE_COMMENT: 35,
      ENDPOINT_HIDE_TEXT_DELIGHTS: 36,
      ENDPOINT_SEND_MESSAGE: 36,
      ENDPOINT_COMMENT_VOTE: 38,
      ENDPOINT_AUTHOR_PINNED_COMMENT: 39,
    });
  },
  null
);
__d(
  'FeedbackSourceType',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      PROFILE: 0,
      NEWS_FEED: 1,
      OBJECT: 2,
      MOBILE: 3,
      EMAIL: 4,
      PROFILE_APPROVAL: 10,
      TICKER: 12,
      NONE: 13,
      INTERN: 14,
      ADS: 15,
      EVENT_GOING_FLYOUT: 16,
      PHOTOS_SNOWLIFT: 17,
      PHOTOS_SNOWFLAKE: 20,
      USER_TIMELINE: 21,
      PAGE_TIMELINE: 22,
      SEARCH: 23,
      PAGE_TAB: 24,
      TIMELINE_COLLECTION: 25,
      ON_THIS_DAY: 27,
      INLINE_COMMENT: 28,
      VIDEOS_CHANNEL: 29,
      PRODUCT_DETAILS: 30,
      NEWSFEED_GROUP_TOP_STORIES: 31,
      LIVE_MAP: 32,
      REDSPACE: 33,
      EVENT_MALL: 34,
      LIVE_VIDEO: 35,
      QUICKSILVER_SPOTLIGHT: 36,
      GROUP_COMMERCE_BOOKMARK: 37,
      WATCH_AND_SCROLL: 38,
      LIVE_WWW_BROADCASTING: 39,
      COMPACT_SEARCH: 40,
      TAHOE: 41,
      GOV_DIGEST: 42,
      GAMEROOM_FEED: 43,
      PAGE_VIDEO_TAB: 44,
      VIDEO_HOME_AFTER_PARTY: 45,
      LIVE_VIDEO_STORIES: 46,
      GAME_HUB_FEED: 47,
      EMBEDED_VIDEO: 48,
      LIVING_ROOM: 49,
      CONSTITUENT_TOP_COMMENTS: 50,
      GAMES_VIDEO_DESTINATION: 51,
      INSTANT_GAMES_LIST: 52,
      INLINE_VIDEO_ENDSCREEN: 53,
      GAMESHOW_DASH: 54,
      PINNED_CONVERSATION: 55,
      MARKETPLACE_MEGAMALL: 56,
    });
  },
  null
);
__d(
  'UFIFeedbackMode',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      EXPANDED: 'expanded',
      NONE: 'none',
      NEVER: 'never',
      TOGGLE: 'toggle',
    });
  },
  null
);
__d(
  'UFIPaging',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({ TOP: 'top', BOTTOM: 'bottom', ALL: 'all' });
  },
  null
);
__d(
  'UFIStatus',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      DELETED: 'status:deleted',
      SPAM: 'status:spam',
      SPAM_DISPLAY: 'status:spam-display',
      LIVE_DELETED: 'status:live-deleted',
      FAILED_ADD: 'status:failed-add',
      FAILED_EDIT: 'status:failed-edit',
      PENDING_EDIT: 'status:pending-edit',
    });
  },
  null
);
__d(
  'UFIConstants',
  [
    'FeedbackActionType',
    'CommentVoteReactionType',
    'CommentVoteUIVersion',
    'UFIFeedbackMode',
    'FeedbackSourceType',
    'FeedbackPayloadSourceType',
    'UFIStatus',
    'UFIPaging',
  ],
  function (a, b, c, d, e, f) {
    a = 80;
    c = {
      UFIActionType: b('FeedbackActionType'),
      UFICommentVoteType: b('CommentVoteReactionType'),
      UFICommentVoteUIVersion: b('CommentVoteUIVersion'),
      UFIFeedbackMode: b('UFIFeedbackMode'),
      UFIFeedbackSourceType: b('FeedbackSourceType'),
      UFIPayloadSourceType: b('FeedbackPayloadSourceType'),
      UFIStatus: b('UFIStatus'),
      UFIPaging: b('UFIPaging'),
      attachmentTruncationLength: a,
      commentTruncationLength: 420,
      commentTruncationMaxLines: 3,
      commentTruncationPercent: 0.6,
      commentURLTruncationLength: 60,
      infiniteScrollRangeForQANDAPermalinks: 1e3,
      maxScrollDistanceForAutoScroll: 60,
      minCommentsForOrderingModeSelector: 1,
      unavailableCommentKey: 'unavailable_comment_key',
    };
    e.exports = c;
  },
  null
);
__d(
  'ReactDispatcher_DEPRECATED',
  ['Dispatcher_DEPRECATED', 'ReactDOM'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g, h;
    g = babelHelpers.inherits(a, b('Dispatcher_DEPRECATED'));
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
  'UFICommentActionType',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      CHANGE_REACTION: 'comment_change_reaction',
      CHANGE_REACTION_FAILURE: 'comment_change_reaction_failure',
      CHANGE_REACTION_SUCCESS: 'comment_change_reaction_success',
      CHANGE_VISIBILITY: 'comment_change_visibility',
      CHANGE_VOTE: 'comment_change_vote',
      CHANGE_VOTE_FAILURE: 'comment_change_vote_failure',
      CHANGE_VOTE_SUCCESS: 'comment_change_vote_success',
      EDIT: 'comment_edit',
      EMBED: 'embed',
      DELETE_COMMENT_AND_REMOVE_COMMENTER:
        'comment_delete_and_commenter_remove',
      MANAGE_CONSTITUENT_BADGE: 'comment_manage_constituent_badge',
      MOUNTED: 'comment_mounted',
      MUTE_MEMBER: 'commenter_muted',
      REMOVE: 'comment_remove',
      REMOVE_AND_BLOCK: 'comment_remove_and_block',
      REMOVE_PREVIEW: 'comment_remove_preview',
      TOGGLE_INLINE_BAN: 'comment_toggle_inline_ban',
      TOGGLE_INLINE_STREAM_BAN: 'comment_toggle_inline_stream_ban',
      TOGGLE_LIKE: 'comment_toggle_like',
      TOGGLE_MARK_AS_SPAM: 'comment_toggle_mark_as_spam',
      TOGGLE_KEEP_SPAM: 'comment_toggle_keep_spam',
      TOGGLE_APPEAL_SPAM: 'comment_toggle_appeal_spam',
      TOGGLE_SECURE_ACCOUNT: 'comment_toggle_secure_account',
      TOGGLE_TEXT_DELIGHTS: 'comment_toggle_text_delights',
      TRANSLATE: 'comment_translate',
      TRANSLATE_ARRAY: 'comment_translate_array',
      UNMOUNTED: 'comment_unmounted',
      UPDATE_VOTE_COUNT_AND_STATE: 'comment_update_vote_count_and_state',
      CHANGE_PIN_BY_AUTHOR: 'comment_change_author_pin',
    });
  },
  null
);
__d(
  'UFIDispatcherBase',
  [
    'invariant',
    'ReactDispatcher_DEPRECATED',
    'UFICommentActionType',
    'dangerouslyBypassDispatchError',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h, i;
    function j(a, b) {
      return Object.values(b).indexOf(a) >= 0;
    }
    function k(a, b, c) {
      a[b] || g(0, undefined, a.type, b, c);
    }
    h = babelHelpers.inherits(a, b('ReactDispatcher_DEPRECATED'));
    i = h && h.prototype;
    a.prototype.dispatch = function (a) {
      k(a, 'instanceID', 'contextArgs.instanceid');
      k(a, 'ftentidentifier', 'contextArgs.ftentidentifier');
      j(a.type, b('UFICommentActionType')) && k(a, 'fbid', 'comment.fbid');
      try {
        i.dispatch.call(this, a);
      } catch (c) {
        b('dangerouslyBypassDispatchError')(
          function () {
            return i.dispatch.call(this, a);
          }.bind(this)
        );
      }
    };
    function a() {
      h.apply(this, arguments);
    }
    e.exports = new a();
  },
  null
);
__d(
  'UFIRange',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    function g(a, b) {
      a === void 0 && (a = 0),
        b === void 0 && (b = 0),
        (this.offset = a),
        (this.length = b),
        (this.requestedOffset = this.offset),
        (this.requestedLength = this.length);
    }
    g.prototype.getOffset = function () {
      return this.offset;
    };
    g.prototype.getLength = function () {
      return this.length;
    };
    g.prototype.getRequestedOffset = function () {
      return this.requestedOffset;
    };
    g.prototype.getRequestedLength = function () {
      return this.requestedLength;
    };
    g.prototype.updateRequestedRange = function (a, b) {
      this.requestedOffset = a;
      this.requestedLength = b;
      return this;
    };
    g.prototype.isLoadingNext = function () {
      var a = this.requestedOffset + this.requestedLength,
        b = this.offset + this.length;
      return a > b;
    };
    g.prototype.isLoadingPrev = function () {
      return this.requestedOffset < this.offset;
    };
    g.combine = function (a, b) {
      __p && __p();
      if (!b) return a;
      var c = Math.min(a.getOffset(), b.getOffset());
      a = Math.max(a.getLength(), b.getLength());
      var d = new g(c, a);
      if (b.getRequestedLength() > 0) {
        var e = Math.min(c, b.getRequestedOffset());
        c = Math.max(c + a, b.getRequestedOffset() + b.getRequestedLength());
        d.updateRequestedRange(e, c - e);
      }
      return d;
    };
    e.exports = g;
  },
  null
);
__d(
  'UFIInstanceActionType',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      CHANGE_ORDER_MODE: 'story_change_order_mode',
      CHANGE_VISIBILITY: 'story_change_visibility',
      INIT: 'instance_init',
      PLAY_LIVE_VOD_HIGHLIGHTS: 'play_live_vod_highlights',
      RECEIVED_VOD_COMMENTS: 'received_vod_comments',
      REMOVE: 'story_remove',
      REQUESTED_VOD_COMMENTS: 'requested_vod_comments',
      TOGGLE_COMMENTS: 'story_toggle_comments',
      TOGGLE_COMMERCIAL_BREAK: 'story_toggle_commercial_break',
      TRANSLATE_ALL: 'translate_all',
      FOUND_VIDEO_PLAYER_CONTROLLER: 'found_video_player_controller',
    });
  },
  null
);
__d(
  'UFIFeedbackStore',
  ['FluxReduceStore', 'UFIDispatcherBase', 'UFIInstanceActionType'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g;
    g = babelHelpers.inherits(a, b('FluxReduceStore'));
    g && g.prototype;
    a.prototype.getInitialState = function () {
      return {};
    };
    a.prototype.reduce = function (a, c) {
      var d;
      switch (c.type) {
        case b('UFIInstanceActionType').INIT:
          var e = c.payload;
          e = e.feedbacktarget
            ? e.feedbacktarget
            : e.feedbacktargets && e.feedbacktargets[0];
          return !e
            ? a
            : babelHelpers['extends'](
                {},
                a,
                ((d = {}),
                (d[c.ftentidentifier] = babelHelpers['extends'](
                  { orderingmodes: [], defaultcommentorderingmode: '' },
                  e
                )),
                d)
              );
      }
      return a;
    };
    function a() {
      g.apply(this, arguments);
    }
    a.__moduleID = e.id;
    e.exports = new a(b('UFIDispatcherBase'));
  },
  null
);
__d(
  'WebCommentViewOption',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      CHRONOLOGICAL: 'chronological',
      FEATURED: 'featured',
      FILTERED: 'filtered',
      LIVE_STREAMING: 'live_streaming',
      RANKED_THREADED: 'ranked_threaded',
      RANKED_UNFILTERED: 'ranked_unfiltered',
      RECENT_ACTIVITY: 'recent_activity',
      SURVEY_GALLERY: 'survey_gallery',
      TOPLEVEL: 'toplevel',
      SUPPORTERS_COMMENTS: 'supporters_comments',
    });
  },
  null
);
__d(
  'UFIOrderingModeStore',
  [
    'invariant',
    'FluxReduceStore',
    'UFIDispatcherBase',
    'UFIFeedbackStore',
    'UFIInstanceActionType',
    'WebCommentViewOption',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h;
    function i(a, b) {
      return (
        a
          .filter(function (a) {
            return a.selected;
          })
          .map(function (a) {
            return a.value;
          })
          .pop() || b
      );
    }
    h = babelHelpers.inherits(a, b('FluxReduceStore'));
    h && h.prototype;
    a.prototype.getInitialState = function () {
      return new Map();
    };
    a.prototype.areEqual = function (a, b) {
      return a === b;
    };
    a.prototype.isLiveStreaming = function (a) {
      return this.getState().get(a) == b('WebCommentViewOption').LIVE_STREAMING;
    };
    a.prototype.isInverted = function (a, c) {
      __p && __p();
      var d = !1;
      c = b('UFIFeedbackStore').getState()[c];
      if (c) {
        c = c.orderingmodes
          .filter(function (a) {
            return a.selected;
          })
          .pop();
        c && (d = c.isBottomUpVideoCommentSreamingEnabled);
      }
      switch (a) {
        case b('WebCommentViewOption').RECENT_ACTIVITY:
        case b('WebCommentViewOption').RANKED_THREADED:
        case b('WebCommentViewOption').FILTERED:
        case b('WebCommentViewOption').LIVE_STREAMING:
          return !d;
      }
      return !1;
    };
    a.prototype.getOrderingMode = function (a) {
      a = this.getState().get(a);
      a !== undefined || g(0, undefined);
      return a;
    };
    a.prototype.reduce = function (a, c) {
      __p && __p();
      switch (c.type) {
        case b('UFIInstanceActionType').INIT:
          if (a.has(c.instanceID)) return a;
          b('UFIDispatcherBase').waitFor([
            b('UFIFeedbackStore').getDispatchToken(),
          ]);
          var d = b('UFIFeedbackStore').getState()[c.ftentidentifier];
          a = new Map(a);
          return a.set(
            c.instanceID,
            i(d.orderingmodes, d.defaultcommentorderingmode)
          );
        case b('UFIInstanceActionType').CHANGE_ORDER_MODE:
          (!a.has(c.instanceID) || a.get(c.instanceID) !== c.mode) &&
            ((a = new Map(a)), a.set(c.instanceID, c.mode));
          return a;
      }
      return a;
    };
    function a() {
      h.apply(this, arguments);
    }
    a.__moduleID = e.id;
    e.exports = new a(b('UFIDispatcherBase'));
  },
  null
);
__d(
  'NumberFormat',
  ['NumberFormatConfig', 'intlNumUtils'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = /(\d{3})(?=\d)/g;
    function h(a) {
      return ('' + a).split('').reverse().join('');
    }
    function a(a, c) {
      if (
        Math.abs(a).toString().length <
        b('NumberFormatConfig').minDigitsForThousandsSeparator
      )
        return a.toString();
      a = h('' + a);
      return h(a.replace(g, '$1' + c));
    }
    c = {
      formatIntegerWithDelimiter: a,
      formatInteger: function (a) {
        return b('intlNumUtils').formatNumberWithThousandDelimiters(a);
      },
    };
    e.exports = c;
  },
  null
);
__d(
  'TrackingNodeTypes',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      HEADLINE: 1,
      USER_NAME: 2,
      ACTOR_PHOTO: 3,
      ACTION_LINKS: 4,
      LIKE_LINK: 5,
      UNLIKE_LINK: 6,
      PARTICIPANT: 7,
      PRONOUN: 8,
      ROBOTEXT: 9,
      TITLE: 10,
      MEDIA_GENERIC: 11,
      PHOTO: 12,
      VIDEO: 13,
      MUSIC: 14,
      ATTACHMENT: 15,
      NAME_LIST: 16,
      SHARE_LINK: 17,
      USER_MESSAGE: 18,
      SUBTITLE: 19,
      DESCRIPTION: 20,
      SOURCE: 21,
      BLINGBOX: 22,
      OTHER: 23,
      VIEW_ALL_COMMENTS: 24,
      COMMENT: 25,
      COMMENT_LINK: 26,
      SMALL_ACTOR_PHOTO: 27,
      SUBSTORY: 28,
      XBUTTON: 29,
      HIDE_LINK: 30,
      REPORT_SPAM_LINK: 31,
      HIDE_ALL_LINK: 32,
      BAD_AGGREGATION_LINK: 33,
      ADD_COMMENT_BOX: 34,
      APP_CALL_TO_ACTION: 35,
      UFI: 36,
      OG_LEFT_SLIDE_PAGER: 37,
      OG_RIGHT_SLIDE_PAGER: 38,
      EXP_CALL_TO_ACTION: 39,
      LARGE_MEDIA_ATTACHMENT: 40,
      FAN_PAGE: 42,
      UNFAN_PAGE: 43,
      SEE_MORE: 44,
      COLLECTION_ROBOTEXT_LINK: 45,
      COLLECTION_ACTION_LINK: 46,
      COLLECTION_TICKER_LINK: 47,
      SPONSORED_LINK: 49,
      PAGE_LINK: 50,
      SOCIAL_CONTEXT: 51,
      SOCIAL_ACTOR_PHOTO: 52,
      OFFERS_CLAIM: 53,
      OFFERS_CLICK: 54,
      DROPDOWN_BUTTON: 55,
      EVENT_VIEW: 56,
      EVENT_RSVP: 57,
      ADS_SHIMMED_LINK: 58,
      COLLECTION_ADD_BUTTON: 59,
      EVENT_INVITE_FRIENDS: 60,
      RHC_AD: 61,
      AD_CREATIVE_TITLE: 62,
      AD_CREATIVE_BODY: 63,
      AD_CREATIVE_IMAGE: 64,
      AD_SOCIAL_SENTENCE: 65,
      APP_NAME: 66,
      GROUP_JOIN: 67,
      PAGE_COVER_PHOTO: 68,
      PAGE_PROFILE_PIC: 69,
      AD_IDENTITY: 70,
      UNHIDE_LINK: 71,
      TRENDING_TOPIC_LINK: 72,
      RELATED_SHARE_ARTICLE: 73,
      OFFERS_USE_NOW: 74,
      RELATED_SHARE_VIDEO: 75,
      RHC_CARD: 76,
      RHC_CARD_HIDE: 77,
      RHC_SIMPLIFICATION: 78,
      RHC_SIMPLIFICATION_HIDE: 79,
      TOPIC_PIVOT_HEADER: 80,
      ADD_FRIEND_BUTTON: 81,
      SNOWLIFT: 82,
      SNOWLIFT_MESSAGE: 83,
      OFFERS_RESEND: 84,
      RHC_LINK_OPEN: 85,
      GENERIC_CALL_TO_ACTION_BUTTON: 86,
      AD_LOGOUT: 87,
      RHC_PHOTO_SLIDER: 88,
      RHC_COMMENT_BUTTON: 89,
      HASHTAG: 90,
      NOTE: 91,
      RELATED_SHARE_ARTICLE_HIDE: 92,
      RELATED_SHARE_VIDEO_HIDE: 93,
      NEKO_PREVIEW: 94,
      OG_COMPOSER_OBJECT: 95,
      INSTALL_ACTION: 96,
      SPONSORED_CONTEXT: 97,
      DIGITAL_GOOD: 98,
      STORY_FOOTER: 99,
      STORY_LOCATION: 100,
      ADD_PHOTO_ACTION: 101,
      ACTION_ICON: 102,
      EGO_FEED_UNIT: 103,
      PLACE_STAR_SURVEY: 104,
      REVIEW_MENU: 105,
      SAVE_ACTION: 106,
      PHOTO_GALLERY: 107,
      SUB_ATTACHMENT: 108,
      FEEDBACK_SECTION: 109,
      ALBUM: 110,
      ALBUM_COLLAGE: 111,
      AVATAR_LIST: 112,
      STORY_LIST: 113,
      MEDIA_CONTROLS: 114,
      ZERO_UPSELL_BUY: 115,
      ZERO_UPSELL_FEED_UNIT: 116,
      RATING: 117,
      PERMALINK_COMMENT: 118,
      LIKE_COUNT: 119,
      RETRY_BUTTON: 120,
      TIMELINE_GIFTS: 121,
      NEARBY_FRIENDS_LIST: 122,
      PRESENCE_UNIT: 123,
      EVENT_INVITE_SENT: 124,
      ATTACHMENT_TITLE: 125,
      HSCROLL_PAGER: 126,
      STORY_MESSAGE: 127,
      STATUS_LINK: 128,
      ADD_MEDIA_LINK: 129,
      ADD_QUESTION_LINK: 130,
      START_Q_AND_A_LINK: 131,
      FEED_STORY_MESSAGE_FLYOUT: 132,
      START_CONVERSATION_LINK: 133,
      ATTACH_LIFE_EVENT_LINK: 134,
      ATTACH_PLACE_LINK: 135,
      COVER_PHOTO_EDIT_LINK: 136,
      SHOW_LIKES: 137,
      ROTATE_LEFT_BUTTON: 138,
      ROTATE_RIGHT_BUTTON: 139,
      TAG_LINK: 140,
      CLOSE_BUTTON: 141,
      PAGER_NEXT: 142,
      PAGER_PREVIOUS: 143,
      FULLSCREEN_BUTTON: 144,
      ACTIONS: 145,
      CURATION_MENU: 146,
      PROFILE_PIC_EDIT_LINK: 147,
      VIEW_ALL_SHARES: 148,
      THUMBNAIL_LINK: 149,
      EDIT_HISTORY: 150,
      ADD_TO_THREAD: 151,
      SIDEBAR: 152,
      HOME_SIDENAV: 153,
      BUDDYLIST_NUB: 154,
      TITLEBAR: 155,
      SEND_BUTTON: 156,
      CONVERSATION: 157,
      CHAT_FLYOUT: 158,
      INPUT: 159,
      EMOTICONS: 160,
      VIDEOCHAT: 161,
      TYPEAHEAD: 162,
      OPTIONS_MENU: 163,
      BOOST_POST_BUTTON: 164,
      TOGGLE_BUTTON: 165,
      CHAT_SIDEBAR_FOOTER: 166,
      GRIPPER: 167,
      BOOKMARK_ITEM: 168,
      BOOKMARKS_SECTION: 169,
      BOOKMARKS_NAV: 170,
      RHC: 171,
      RHC_HEADER: 172,
      SIDE_ADS: 173,
      BUDDY_LIST: 174,
      SHOW_ADS_FEED: 184,
      VIDEO_IN_PLAY_CALL_TO_ACTION_BUTTON: 185,
      VIDEO_ENDSCREEN_CALL_TO_ACTION_BUTTON: 186,
      INLINE_PHOTO_PIVOTS_HIDE: 187,
      VIDEO_CALL_TO_ACTION_ENDSCREEN_REPLAY: 188,
      APP_ATTACHMENT: 189,
      ACTIVITY_LINK: 190,
      SAVE_BUTTON: 191,
      SEE_MORE_PHOTO_PAGE_POST_BUTTON: 192,
      BUY_VIRTUAL_GOOD: 193,
      SAVE_SECONDARY_MENU: 194,
      MPP_INSIGHTS: 195,
      GROUP_CANCEL: 197,
      GROUP_LEAVE: 198,
      MESSAGE_LINK: 199,
      VIDEO_SPONSORSHIP_LABEL: 200,
      MULTI_ATTACHMENT_PAGER_NEXT: 201,
      MULTI_ATTACHMENT_PAGER_PREV: 202,
      WEB_CLICK: 203,
      COMPOSER_POST: 204,
      MULTI_ATTACHMENT_VIDEO: 205,
      VIDEO_CALL_TO_ACTION_PAUSESCREEN_RESUME: 206,
      VOICECHAT: 207,
      PAGE_INVITE_FRIEND: 208,
      SEE_MORE_REDIRECT: 209,
      VIDEO_CALL_TO_ACTION_ATTACHMENT: 210,
      PAGE_POST_SEE_FIRST: 211,
      PAGE_POST_DEFAULT: 212,
      TOPIC_FEED_CUSTOMIZATION_UNIT_SUBMIT: 213,
      TOPIC_FEED_CUSTOMIZATION_UNIT_OPTION: 214,
      LEAD_GEN_OPEN_POPOVER: 215,
      LEAD_GEN_SUBMIT_CLICK: 216,
      LEAD_GEN_PRIVACY_CLICK: 217,
      LEAD_GEN_OFFSITE_CLICK: 218,
      EVENT_YOU_MAY_LIKE_HSCROLL: 219,
      LEAD_GEN_CONTEXT_CARD_CLOSE: 220,
      LEAD_GEN_CONTEXT_CARD_CTA_CLICK: 221,
      FEED_STORY_PLACE_ATTACHMENT: 222,
      PAGE_CALL_TO_ACTION_UNIT: 224,
      TRANSLATION: 225,
      FEED_STORY_ATTACHMENT_MISINFO_WARNING: 226,
      RELATED_LOCAL_NEWS_ATTACHMENT_LINK: 227,
      RELATED_LOCAL_NEWS_ATTACHMENT_SHARE: 228,
      STORY_TIMESTAMP: 229,
      STORY_HEADER: 230,
      SPONSORED_STORY: 231,
      EVENT_CTA_BUTTON: 232,
      RELATED_PAGE_POSTS_ATTACHMENT_CLICK: 233,
      RELATED_PAGE_POSTS_ATTACHMENT_SHARE: 234,
      RELATED_PAGE_POSTS_ATTACHMENT_XOUT: 235,
      RELATED_PAGE_POSTS_UNIT_XOUT: 236,
      CAROUSEL_CARD_STORY: 237,
      OFFERS_DETAILS_POPOVER: 238,
      SPOTLIGHT: 239,
      INSTREAM_CALL_TO_ACTION_BUTTON: 240,
      INSTREAM_CALL_TO_ACTION_ATTACHMENT: 241,
      SEARCH_AD_ATTACHMENT_CLICK: 242,
      SEARCH_AD_CTA_CLICK: 243,
      SEARCH_AD_OFFSITE_CLICK: 244,
      MULTI_SHARE_GRID_EXPERIMENT_CARD_1: 245,
      MULTI_SHARE_GRID_EXPERIMENT_CARD_2: 246,
      MULTI_SHARE_GRID_EXPERIMENT_CARD_3: 247,
      MULTI_SHARE_GRID_EXPERIMENT_CARD_4: 248,
      MULTI_SHARE_GRID_EXPERIMENT_SEE_MORE: 249,
      HOVERCARD: 250,
      INSTANT_GAME_PLAYER: 251,
      POLITICAL_AD_STORY_HEADER_CLICK: 252,
      PHOTO_VOICE: 253,
      PHOTO_TAG: 254,
      ANDROID_PLAYSTORE_WATCH_AND_INSTALL_BUTTON: 255,
      VIDEO_POLLING_IN_CREATIVE_CTA_BUTTON: 256,
      VIDEO_SETTINGS: 257,
      STORY: 301,
      PERMALINK_STORY: 302,
      ARTICLE_CONTEXT_TRIGGER: 303,
      LINK: 304,
      ATTACHMENT_FOLLOW: 305,
      SNOWFLAKE_STORY: 306,
      SNOWFLAKE_PHOTO: 307,
      BIRTHDAY_REMINDER: 308,
      FRIEND_REQUEST: 309,
      PYMK_JEWEL: 310,
      BROWSE_RESULT: 311,
      PROFILE_LINK: 312,
      USER_PROFILE_PIC: 313,
      GROUP_MEMBER: 314,
      GROUP_SUGGESTION: 315,
      REACTION_BROWSER: 316,
      GROUP_MEMBER_SUGGESTION: 317,
      PROFILE_NAV_ITEM: 318,
      NOTIFICATION_JEWEL: 319,
      NOTIFICATION_ITEM: 320,
      SNACKS: 321,
      PROFILE_TILE: 322,
      FRIEND_PROFILE_TILE: 323,
      INTRO_PROFILE_TILE: 324,
      SUGGEST_FRIENDS_DIALOG: 325,
      APP_COLLECTION: 326,
      ALL_FRIENDS_COLLECTION: 327,
      MUTUAL_FRIENDS_COLLECTION: 328,
      OUTGOING_FRIEND_REQUESTS: 329,
      INSTANT_ARTICLE_RECIRCULATION_STORY: 330,
      FRIEND_CENTER_PYMK: 331,
      PARTICIPANTS_DIALOG: 332,
      FEED_COMPOSER: 333,
      CONFIRM_FRIEND_REQUEST: 334,
      GENERIC_PROFILE_BROWSER: 335,
      WORK_GALAHAD_NAV_ITEM: 400,
      WORK_GALAHAD_TAB_HOME: 401,
      WORK_GALAHAD_TAB_NOTIFICATIONS: 402,
      WORK_GALAHAD_TAB_CHATS: 403,
      WORK_GALAHAD_TAB_PROFILE: 404,
      WORK_GALAHAD_LIST_SHORTCUTS: 405,
      WORK_GALAHAD_LIST_GROUPS: 406,
      WORK_GALAHAD_LIST_PEOPLE: 407,
      WORK_GALAHAD_TAB_ADMIN_PANEL: 408,
    });
  },
  null
);
__d(
  'TrackingNodes',
  ['DataAttributeUtils', 'TrackingNodeTypes'],
  function (a, b, c, d, e, f) {
    __p && __p();
    var g = {
      types: b('TrackingNodeTypes'),
      BASE_CODE_START: 58,
      BASE_CODE_END: 126,
      BASE_CODE_SIZE: 69,
      PREFIX_CODE_START: 42,
      PREFIX_CODE_END: 47,
      PREFIX_CODE_SIZE: 6,
      ENCODE_NUMBER_MAX: 100,
      TN_URL_PARAM: '__tn__',
      encodeTN: function (a, b) {
        var c = (a - 1) % g.BASE_CODE_SIZE,
          d = parseInt((a - 1) / g.BASE_CODE_SIZE, 10);
        if (a < 1 || d > g.PREFIX_CODE_SIZE)
          throw Error('Invalid tracking node: ' + a);
        a = '';
        d > 0 && (a += String.fromCharCode(d - 1 + g.PREFIX_CODE_START));
        a += String.fromCharCode(c + g.BASE_CODE_START);
        b !== undefined &&
          b > 0 &&
          (b > 10 && (a += '#'),
          (a += parseInt(Math.min(b, g.ENCODE_NUMBER_MAX) - 1, 10)));
        return a.replace('\\', '\\\\');
      },
      decodeTN: function (a) {
        __p && __p();
        if (a.length === 0) return [0];
        var b = a.charCodeAt(0),
          c = 1,
          d,
          e;
        if (b >= g.PREFIX_CODE_START && b <= g.PREFIX_CODE_END) {
          if (a.length == 1) return [0];
          e = b - g.PREFIX_CODE_START + 1;
          d = a.charCodeAt(1);
          c = 2;
        } else (e = 0), (d = b);
        if (d < g.BASE_CODE_START || d > g.BASE_CODE_END) return [0];
        b = e * g.BASE_CODE_SIZE + (d - g.BASE_CODE_START) + 1;
        if (
          a.length > c + 2 &&
          a.charAt(c) === '#' &&
          a.charAt(c + 1) >= '0' &&
          a.charAt(c + 1) <= '9' &&
          a.charAt(c + 2) >= '0' &&
          a.charAt(c + 2) <= '9'
        )
          return [
            c + 3,
            [b, parseInt(a.charAt(c + 1) + a.charAt(c + 2), 10) + 1],
          ];
        return a.length > c && a.charAt(c) >= '0' && a.charAt(c) <= '9'
          ? [c + 1, [b, parseInt(a.charAt(c), 10) + 1]]
          : [c, [b]];
      },
      parseTrackingNodeString: function (a) {
        var b = [];
        while (a.length > 0) {
          var c = g.decodeTN(a);
          if (c.length == 1) return [];
          b.push(c[1]);
          a = a.substring(c[0]);
        }
        return b;
      },
      getTrackingInfo: function (a, b) {
        return '{"tn":"' + g.encodeTN(a, b) + '"}';
      },
      addDataAttribute: function (a, c, d) {
        __p && __p();
        if (c === undefined) return;
        ['data-ft', 'data-gt'].forEach(function (e) {
          __p && __p();
          var f;
          if (a.getAttribute)
            f = b('DataAttributeUtils').getDataAttribute(a, e) || '{}';
          else if (a.props) f = a.props[e] || '{}';
          else return;
          var h = g.encodeTN(c, d);
          try {
            f = JSON.parse(f);
            if (f.tn && f.tn === h) return;
            f.tn = h;
            if (a.setAttribute) a.setAttribute(e, JSON.stringify(f));
            else if (a.props) a.props[e] = JSON.stringify(f);
            else return;
          } catch (a) {}
        });
      },
    };
    e.exports = g;
  },
  null
);
__d(
  'UFIImageBlock.react',
  ['cx', 'ImageBlock.react', 'React'],
  function (a, b, c, d, e, f, g) {
    var h;
    h = babelHelpers.inherits(a, b('React').Component);
    h && h.prototype;
    a.prototype.render = function () {
      return b('React').createElement(
        b('ImageBlock.react'),
        babelHelpers['extends']({}, this.props, {
          imageClassName: 'UFIImageBlockImage',
          contentClassName: 'UFIImageBlockContent',
        }),
        this.props.children
      );
    };
    function a() {
      h.apply(this, arguments);
    }
    e.exports = a;
  },
  null
);
__d(
  'UFIPager.react',
  [
    'cx',
    'LeftRight.react',
    'React',
    'SutroBlingBarGatingConfig',
    'UFIImageBlock.react',
    'XUISpinner.react',
    'joinClasses',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h;
    c = babelHelpers.inherits(a, b('React').Component);
    h = c && c.prototype;
    function a() {
      var a, b;
      for (var c = arguments.length, d = new Array(c), e = 0; e < c; e++)
        d[e] = arguments[e];
      return (
        (b = (a = h.constructor).call.apply(a, [this].concat(d))),
        (this.onPagerClick = function (a) {
          !this.props.isLoading &&
            this.props.onPagerClick &&
            this.props.onPagerClick(),
            a.nativeEvent.prevent();
        }.bind(this)),
        b
      );
    }
    a.prototype.render = function () {
      var a = this.onPagerClick,
        c = b('SutroBlingBarGatingConfig').enabled,
        d = b('joinClasses')(
          'UFIRow' +
            (this.props.isUnseen ? ' UFIUnseenItem' : '') +
            ' UFIPagerRow _4oep' +
            (this.props.isFirstCommentComponent ? ' _48pi' : '') +
            (this.props.isLastCommentComponent
              ? ' UFILastCommentComponent'
              : '') +
            (this.props.isFirstComponent ||
            (c && this.props.isFirstCommentComponent)
              ? ' _4204'
              : '') +
            (this.props.isLastComponent ? ' _2o9m' : '')
        ),
        e = null;
      this.props.isLoading &&
        (e = b('React').createElement(b('XUISpinner.react'), {
          className: 'mls',
          background: 'light',
          size: 'small',
        }));
      e = b('React').createElement(
        'a',
        { className: 'UFIPagerLink', onClick: a, href: '#', role: 'button' },
        this.props.pagerLabel,
        e
      );
      var f = 'fcg UFIPagerCount';
      c =
        c &&
        b('React').createElement(
          'span',
          { className: f },
          this.props.countSentence
        );
      this.props.contextArgs.entstream || !this.props.isReply
        ? (f = b('React').createElement(
            b('LeftRight.react'),
            { direction: b('LeftRight.react').DIRECTION.right },
            e,
            c
          ))
        : (f = b('React').createElement(
            b('UFIImageBlock.react'),
            null,
            b('React').createElement('a', {
              className: 'UFIPagerIcon',
              onClick: a,
              href: '#',
              role: 'button',
            }),
            e,
            c
          ));
      return b('React').createElement(
        'div',
        { className: d, 'data-ft': this.props['data-ft'] },
        f
      );
    };
    e.exports = a;
  },
  null
);
__d(
  'UFIPagerLabel',
  ['fbt', 'NumberFormat'],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    function h(a) {
      return b('NumberFormat').formatInteger(a.count);
    }
    var i = {
      VIEW_ONE: 'view_one',
      VIEW_ONE_MORE: 'view_one_more',
      VIEW_ALL: 'view_all',
      VIEW_MORE_EXPLICIT: 'view_more_explicit',
      VIEW_MORE: 'view_more',
      VIEW_PREVIOUS: 'view_previous',
      VIEW_PREVIOUS_EXPLICIT: 'view_previous_explicit',
      _getReplyLabel: function (a, b) {
        switch (a) {
          case i.VIEW_ONE:
            return g._('View 1 reply');
          case i.VIEW_ONE_MORE:
            return g._('View 1 more reply');
          case i.VIEW_ALL:
            return g._({ '*': 'View all {count} replies' }, [
              g._param('count', h(b), [0, b.count]),
            ]);
          case i.VIEW_MORE_EXPLICIT:
            return g._(
              {
                '*': {
                  '*': 'View {count} more replies',
                  _1: 'View {count} more reply',
                },
              },
              [g._param('count', h(b), [0, b.count]), g._plural(b.count)]
            );
          case i.VIEW_MORE:
            return g._('View more replies');
          case i.VIEW_PREVIOUS:
            return g._('View previous replies');
          case i.VIEW_PREVIOUS_EXPLICIT:
            return g._(
              {
                '*': {
                  '*': 'View {count} previous replies',
                  _1: 'View {count} previous reply',
                },
              },
              [g._param('count', h(b), [0, b.count]), g._plural(b.count)]
            );
          default:
            return null;
        }
      },
      _getCommentLabel: function (a, b) {
        switch (a) {
          case i.VIEW_ONE:
            return g._('View 1 comment');
          case i.VIEW_ONE_MORE:
            return g._('View 1 more comment');
          case i.VIEW_ALL:
            return g._({ '*': 'View all {count} comments' }, [
              g._param('count', h(b), [0, b.count]),
            ]);
          case i.VIEW_MORE_EXPLICIT:
            return g._(
              {
                '*': {
                  '*': 'View {count} more comments',
                  _1: 'View {count} more comment',
                },
              },
              [g._param('count', h(b), [0, b.count]), g._plural(b.count)]
            );
          case i.VIEW_MORE:
            return g._('View more comments');
          case i.VIEW_PREVIOUS_EXPLICIT:
            return g._(
              {
                '*': {
                  '*': 'View {count} previous comments',
                  _1: 'View {count} previous comment',
                },
              },
              [g._param('count', h(b), [0, b.count]), g._plural(b.count)]
            );
          case i.VIEW_PREVIOUS:
            return g._('View previous comments');
          default:
            return null;
        }
      },
      _getCommentLabelWithHiddenCommentCount: function (a, b) {
        switch (a) {
          case i.VIEW_ONE:
            return g._('See comments');
          case i.VIEW_ALL:
            return g._('See all comments');
          case i.VIEW_ONE_MORE:
          case i.VIEW_MORE_EXPLICIT:
          case i.VIEW_MORE:
            return g._('See more comments');
          case i.VIEW_PREVIOUS_EXPLICIT:
          case i.VIEW_PREVIOUS:
            return g._('See previous comments');
          default:
            return null;
        }
      },
      _getQuestionLabel: function (a, b) {
        switch (a) {
          case i.VIEW_ONE:
            return g._('View 1 question');
          case i.VIEW_ONE_MORE:
            return g._('View 1 more question');
          case i.VIEW_ALL:
            return g._({ '*': 'View all {count} questions' }, [
              g._param('count', h(b), [0, b.count]),
            ]);
          case i.VIEW_MORE_EXPLICIT:
            return g._(
              {
                '*': {
                  '*': 'View {count} more questions',
                  _1: 'View {count} more question',
                },
              },
              [g._param('count', h(b), [0, b.count]), g._plural(b.count)]
            );
          case i.VIEW_MORE:
            return g._('View more questions');
          case i.VIEW_PREVIOUS:
            return g._('View previous questions');
          case i.VIEW_PREVIOUS_EXPLICIT:
            return g._(
              {
                '*': {
                  '*': 'View {count} previous questions',
                  _1: 'View {count} previous question',
                },
              },
              [g._param('count', h(b), [0, b.count]), g._plural(b.count)]
            );
          default:
            return null;
        }
      },
      _getAnswerLabel: function (a, b) {
        switch (a) {
          case i.VIEW_ONE:
            return g._('View 1 answer');
          case i.VIEW_ONE_MORE:
            return g._('View 1 more answer');
          case i.VIEW_ALL:
            return g._({ '*': 'View all {count} answers' }, [
              g._param('count', h(b), [0, b.count]),
            ]);
          case i.VIEW_MORE_EXPLICIT:
            return g._(
              {
                '*': {
                  '*': 'View {count} more answers',
                  _1: 'View {count} more answer',
                },
              },
              [g._param('count', h(b), [0, b.count]), g._plural(b.count)]
            );
          case i.VIEW_MORE:
            return g._('View more answers');
          case i.VIEW_PREVIOUS_EXPLICIT:
            return g._(
              {
                '*': {
                  '*': 'View {count} previous answers',
                  _1: 'View {count} previous answer',
                },
              },
              [g._param('count', h(b), [0, b.count]), g._plural(b.count)]
            );
          case i.VIEW_PREVIOUS:
            return g._('View previous answers');
          default:
            return null;
        }
      },
      getLabel: function (a, b, c) {
        if (b) return i._getReplyLabel(a, c);
        else
          return c.hideCount
            ? i._getCommentLabelWithHiddenCommentCount(a, c)
            : i._getCommentLabel(a, c);
      },
    };
    e.exports = i;
  },
  null
);
__d(
  'UFIPagerGenerator',
  [
    'fbt',
    'NumberFormat',
    'React',
    'TrackingNodes',
    'UFIConstants',
    'UFIOrderingModeStore',
    'UFIPager.react',
    'UFIPagerLabel',
    'UFIRange',
  ],
  function (a, b, c, d, e, f, g) {
    __p && __p();
    var h = b('UFIConstants').UFIPaging;
    a = {
      isBottomPager: function (a, c, d) {
        return b('UFIOrderingModeStore').isInverted(c, d) && !a;
      },
      needsStartOfRangePager: function (a) {
        return a > 0;
      },
      renderPagers: function (a) {
        __p && __p();
        var c = a.commentCount,
          d = a.contextArgs,
          e = a.currentLength,
          f = a.currentOffset,
          i = a.deletedCount,
          j = a.feedback,
          k = a.hideCount,
          l = a.onPageCallback,
          m = a.orderingMode,
          n = a.range;
        a = a.targetID;
        var o = c - i;
        i = e - i;
        var p = a !== d.ftentidentifier,
          q = this.isBottomPager(p, m, a);
        m = { topPager: null, bottomPager: null };
        var r = n.isLoadingPrev();
        n = n.isLoadingNext();
        k = { count: 0, hideCount: k };
        var s = f + e == c;
        if ((c < d.pagesize && s) || i === 0) {
          var t = Math.min(c, d.pagesize);
          s = function () {
            return l(q ? h.BOTTOM : h.TOP, new (b('UFIRange'))(c - t, t));
          };
          var u;
          i === 0
            ? o == 1
              ? (u = b('UFIPagerLabel').VIEW_ONE)
              : ((k.count = o), (u = b('UFIPagerLabel').VIEW_ALL))
            : o - i == 1
            ? (u = b('UFIPagerLabel').VIEW_ONE_MORE)
            : ((u = b('UFIPagerLabel').VIEW_MORE_EXPLICIT), (k.count = o - i));
          var v = b('TrackingNodes').getTrackingInfo(
            b('TrackingNodes').types.VIEW_ALL_COMMENTS
          );
          u = b('UFIPagerLabel').getLabel(u, p, k);
          j = b('React').createElement(b('UFIPager.react'), {
            key: 'allPager' + a,
            ref: q ? 'topLevelBottomPager' : null,
            contextArgs: d,
            isUnseen: j.hasunseencollapsed,
            isLoading: q ? n : r,
            isReply: p,
            pagerLabel: u,
            onPagerClick: s,
            'data-ft': v,
          });
          q ? (m.bottomPager = j) : (m.topPager = j);
          return m;
        }
        u = b('UFIPagerLabel').getLabel(b('UFIPagerLabel').VIEW_MORE, p, k);
        s = b('UFIPagerLabel').getLabel(b('UFIPagerLabel').VIEW_PREVIOUS, p, k);
        if (this.needsStartOfRangePager(f)) {
          var w = Math.max(f - d.pagesize, 0),
            x = f + e - w,
            y;
          if (!p || i > 1) {
            v = b('NumberFormat').formatInteger(i);
            j = b('NumberFormat').formatInteger(o);
            y = g._('{countshown} of {totalcount}', [
              g._param('countshown', v),
              g._param('totalcount', j),
            ]);
          }
          k = function () {
            return l(q ? h.BOTTOM : h.TOP, new (b('UFIRange'))(w, x));
          };
          q
            ? (m.bottomPager = b('React').createElement(b('UFIPager.react'), {
                key: 'bottomPager' + a,
                ref: p ? null : 'topLevelBottomPager',
                contextArgs: d,
                isLoading: r,
                isReply: p,
                pagerLabel: u,
                onPagerClick: k,
                countSentence: y,
              }))
            : (m.topPager = b('React').createElement(b('UFIPager.react'), {
                key: 'topPager' + a,
                contextArgs: d,
                isLoading: r,
                isReply: p,
                pagerLabel: s,
                onPagerClick: k,
                countSentence: y,
              }));
        }
        if (f + e < c) {
          var z = Math.min(e + d.pagesize, c - f);
          i = function () {
            return l(q ? h.TOP : h.BOTTOM, new (b('UFIRange'))(f, z));
          };
          q
            ? (m.topPager = b('React').createElement(b('UFIPager.react'), {
                key: 'topPager' + a,
                contextArgs: d,
                isLoading: n,
                isReply: p,
                pagerLabel: s,
                onPagerClick: i,
              }))
            : (m.bottomPager = b('React').createElement(b('UFIPager.react'), {
                key: 'bottomPager',
                ref: p ? null : 'topLevelBottomPager',
                contextArgs: d,
                isLoading: n,
                isReply: p,
                pagerLabel: u,
                onPagerClick: i,
              }));
        }
        return m;
      },
    };
    e.exports = a;
  },
  null
);
__d(
  'distinctArrayBy',
  [],
  function (a, b, c, d, e, f) {
    __p && __p();
    function g(a) {
      return a;
    }
    function a(a, b) {
      __p && __p();
      b === void 0 && (b = g);
      var c = [],
        d = new Set();
      for (
        var a = a,
          e = Array.isArray(a),
          f = 0,
          a = e
            ? a
            : a[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var h;
        if (e) {
          if (f >= a.length) break;
          h = a[f++];
        } else {
          f = a.next();
          if (f.done) break;
          h = f.value;
        }
        h = h;
        var i = b(h);
        d.has(i) || (d.add(i), c.push(h));
      }
      return c;
    }
    e.exports = a;
  },
  null
);
__d(
  'UFICommentFilterFallbackWarning.react',
  [
    'cx',
    'fbt',
    'React',
    'UFIPagerGenerator',
    'UFIPaging',
    'WebCommentViewOption',
    'distinctArrayBy',
  ],
  function (a, b, c, d, e, f, g, h) {
    __p && __p();
    var i;
    function j(a, c, d) {
      var e = c.availableComments;
      c = c.repliesMap;
      d ? (d = c[a] || []) : (d = e || []);
      d = b('distinctArrayBy')(d, function (a) {
        return a.id;
      });
      return d.length;
    }
    i = babelHelpers.inherits(a, b('React').Component);
    i && i.prototype;
    a.shouldRender = function (a, c, d, e) {
      __p && __p();
      if (!a) return !1;
      var f = a.availableComments,
        g = a.commentCounts,
        h = a.deletedCounts,
        i = a.hasPagedToplevel,
        k = a.orderingMode,
        l = a.ranges,
        m = a.repliesExpandedMap,
        n = a.repliesMap;
      if (!f || !g || !h || !k || !l || !m || !n) return !1;
      f = Math.max((g[c] || 0) - (h[c] || 0), 0);
      n = l[c];
      if (
        !n ||
        !f ||
        k !== b('WebCommentViewOption').FILTERED ||
        (e && !m[c]) ||
        (!e && !i)
      )
        return !1;
      g = j(c, a, e);
      h = n.isLoadingPrev();
      l = n.isLoadingNext();
      m = n.getOffset();
      i = n.getLength();
      a = b('UFIPagerGenerator').isBottomPager(e, k, c);
      n = Math.min(i, f);
      if (d === b('UFIPaging').ALL)
        return !h && !l && m === 0 && i >= f && g < n;
      else if (
        (!a && d === b('UFIPaging').TOP) ||
        (a && d === b('UFIPaging').BOTTOM)
      )
        return !h && m === 0 && g < n;
      else if (
        (!a && d === b('UFIPaging').BOTTOM) ||
        (a && d === b('UFIPaging').TOP)
      )
        return !l && m + i >= f && g < n;
      return !1;
    };
    a.prototype.$1 = function () {
      __p && __p();
      var a = this.props,
        b = a.asReplyWarning;
      a = a.ufiProps;
      a = a || {};
      var c = a.feedback,
        d = a.orderingMode;
      a = (c && c.orderingmodes) || [];
      c = a.find(function (a) {
        return a && a.value === d;
      });
      a = c && c.name;
      if (b)
        if (a)
          return h._(
            '{ordering mode name} is selected, so some replies may have been filtered out.',
            [h._param('ordering mode name', a)]
          );
        else
          return h._(
            'Some replies may have been filtered out by the selected ordering mode.'
          );
      else if (a)
        return h._(
          '{ordering mode name} is selected, so some comments may have been filtered out.',
          [h._param('ordering mode name', a)]
        );
      else
        return h._(
          'Some comments may have been filtered out by the selected ordering mode.'
        );
    };
    a.prototype.render = function () {
      var a = this.props,
        c = a.ufiProps,
        d = a.targetID,
        e = a.pagingDirection;
      a = a.asReplyWarning;
      return !this.constructor.shouldRender(c, d, e, a)
        ? null
        : b('React').createElement(
            'div',
            { className: '_2ah8 _4oep UFIRow' },
            b('React').createElement('div', { className: '_2ah9' }, this.$1())
          );
    };
    function a() {
      i.apply(this, arguments);
    }
    e.exports = a;
  },
  null
);
