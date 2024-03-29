if (self.CavalryLogger) {
  CavalryLogger.start_js(['+4sWy']);
}

/**
 * @providesModule Shaka
 * @preserve-whitespace
 * @nopackage
 * @generated
 */
__d(
  'Shaka',
  [
    'Promise',
    'EventListener',
    'VideoPlayerShakaPerformanceLogger',
    'VideoPushParametersHelper',
    'TimeSlice',
    'VideoPlayerLocalBandwidthEstimator',
    'VideoPlayerResourceTimer',
    'ShakaSegmentReferenceHelper',
    'SegmentRequestManager',
    'concatArrayBuffer',
    'BufferReplacementHelper',
    'logLongAkamaiRequest',
    'throttle',
    'ViewportPriorityAdjuster',
    'FirstLoadedVideoPriorityAdjuster',
    'VideoPriorityCalculator',
    'VideoStreamingManager',
    'MultipleSegmentsProvider',
    'LocalBitrateHelper',
    'UnitConstants',
    'BufferVelocity',
    'VideoPlayerBitrateEstimator',
    'VideoPlayerShakaGlobalConfig',
    'getSeekRangeGapsFromShakaReferences',
    'mergeSeekRangeGaps',
    'NetworkStatusDetector',
    'MosUtils',
    'BanzaiODS',
    'VideoDashPrefetchCache',
    'VideoClientEdgeCooperation',
    'VideoStreamingTaskQueueProvider',
    'BinarySearch',
    'ShakaTimelineSegmentIndexUtils',
    'setTimeoutAcrossTransitions',
    'setTimeout',
    'setIntervalAcrossTransitions',
    'setInterval',
    'setImmediateAcrossTransitions',
    'setImmediate',
    'clearTimeout',
    'clearInterval',
    'clearImmediate',
    'dispatchEvent',
    'EventListener',
    'Event',
    'extractCEA608',
    'performanceNow',
    'canUseFetchStream',
    'SubscriptionsHandler',
    'VideoPushTracker',
  ],
  function $module_Shaka(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports
  ) {
    // run `arc rebuild shaka-player` to regenerate Shaka.js after modifying this
    // file

    var Promise = require('Promise');
    var EventListener = require('EventListener');
    var VideoPlayerShakaPerformanceLogger = require('VideoPlayerShakaPerformanceLogger');
    var VideoPushParametersHelper = require('VideoPushParametersHelper');
    var TimeSlice = require('TimeSlice');
    var VideoPlayerLocalBandwidthEstimator = require('VideoPlayerLocalBandwidthEstimator');
    var VideoPlayerResourceTimer = require('VideoPlayerResourceTimer');
    var ShakaSegmentReferenceHelper = require('ShakaSegmentReferenceHelper');
    var SegmentRequestManager = require('SegmentRequestManager');
    var concatArrayBuffer = require('concatArrayBuffer');
    var BufferReplacementHelper = require('BufferReplacementHelper');
    var logLongAkamaiRequest = require('logLongAkamaiRequest');
    var throttle = require('throttle');
    var ViewportPriorityAdjuster = require('ViewportPriorityAdjuster');
    var FirstLoadedVideoPriorityAdjuster = require('FirstLoadedVideoPriorityAdjuster');
    var VideoPriorityCalculator = require('VideoPriorityCalculator');
    var VideoStreamingManager = require('VideoStreamingManager');
    var MultipleSegmentsProvider = require('MultipleSegmentsProvider');
    var LocalBitrateHelper = require('LocalBitrateHelper');
    var UnitConstants = require('UnitConstants');
    var BufferVelocity = require('BufferVelocity');
    var VideoPlayerBitrateEstimator = require('VideoPlayerBitrateEstimator');
    var VideoPlayerShakaGlobalConfig = require('VideoPlayerShakaGlobalConfig');
    var getSeekRangeGapsFromShakaReferences = require('getSeekRangeGapsFromShakaReferences');
    var mergeSeekRangeGaps = require('mergeSeekRangeGaps');
    var NetworkStatusDetector = require('NetworkStatusDetector');
    var MosUtils = require('MosUtils');
    var BanzaiODS = require('BanzaiODS');
    var VideoDashPrefetchCache = require('VideoDashPrefetchCache');
    var VideoClientEdgeCooperation = require('VideoClientEdgeCooperation');
    var VideoStreamingTaskQueueProvider = require('VideoStreamingTaskQueueProvider');
    var BinarySearch = require('BinarySearch');
    var ShakaTimelineSegmentIndexUtils = require('ShakaTimelineSegmentIndexUtils');

    var setTimeout = VideoPlayerShakaGlobalConfig.getBool(
      'timeouts_persist_on_page_transition',
      true
    )
      ? require('setTimeoutAcrossTransitions')
      : require('setTimeout');
    var setInterval = VideoPlayerShakaGlobalConfig.getBool(
      'timeouts_persist_on_page_transition',
      true
    )
      ? require('setIntervalAcrossTransitions')
      : require('setInterval');
    var setImmediate = VideoPlayerShakaGlobalConfig.getBool(
      'timeouts_persist_on_page_transition',
      true
    )
      ? require('setImmediateAcrossTransitions')
      : require('setImmediate');
    var clearTimeout = require('clearTimeout');
    var clearInterval = require('clearInterval');
    var clearImmediate = require('clearImmediate');
    var dispatchDomEvent = require('dispatchEvent');
    var eventListenerCapture = require('EventListener').capture;
    var eventKill = require('Event').kill;
    var extractCEA608 = require('extractCEA608');
    var performanceNow = require('performanceNow');
    var canUseFetchStream = require('canUseFetchStream');
    var SubscriptionsHandler = require('SubscriptionsHandler');
    var VideoPushTracker = require('VideoPushTracker');

    function setEventProperty(obj, name, handler) {
      obj[name] = TimeSlice.guard(handler, 'shaka ' + name);
    }

    if (
      VideoPlayerShakaGlobalConfig.getBool('shaka_native_promise', false) &&
      VideoPlayerShakaGlobalConfig.getBool('use_native_promise', true)
    ) {
      Promise = window.Promise;
    }

    var g = {};

    (function (window) {
      var m,
        ca = this;
      function q(a, b) {
        var c = a.split('.'),
          d = ca;
        c[0] in d || !d.execScript || d.execScript('var ' + c[0]);
        for (var e; c.length && (e = c.shift()); )
          c.length || void 0 === b
            ? d[e]
              ? (d = d[e])
              : (d = d[e] = {})
            : (d[e] = b);
      }
      function r(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.Jd = b.prototype;
        a.prototype = new c();
        a.prototype.constructor = a;
        a.Hd = function (a, c, f) {
          return b.prototype[c].apply(
            a,
            Array.prototype.slice.call(arguments, 2)
          );
        };
      } /*

 Copyright 2015 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
      function da() {}
      function ea() {}
      function fa(a) {
        var b = console[a];
        b
          ? b.bind ||
            (console[a] = function () {
              b.apply(console, arguments);
            })
          : (console[a] = function () {});
      }
      fa('error');
      fa('warn');
      fa('info');
      fa('log');
      fa('debug');
      function ga(a) {
        ia[a] = { Na: ja(), end: NaN };
      }
      function ka(a) {
        if ((a = ia[a])) a.end = ja();
      }
      function la() {
        var a = ia.buffering;
        return a && a.end ? a.end - a.Na : NaN;
      }
      var ja =
          window.performance && window.performance.now
            ? window.performance.now.bind(window.performance)
            : Date.now,
        ia = {}; /*

 Copyright 2004-present Facebook. All Rights Reserved.

*/
      function ma(a, b, c, d, e, f, g, h) {
        this.id = a;
        this.bandwidth = b || 0;
        this.lang = c || 'unknown';
        this.streamInfoID = d;
        this.mimeType = e || '';
        this.codecs = f || '';
        this.channels = g || null;
        this.samplingRate = h || null;
        this.active = !1;
      }
      q('shaka.player.AudioTrack.compare', function (a, b) {
        return a.lang < b.lang
          ? -1
          : a.lang > b.lang
          ? 1
          : a.bandwidth < b.bandwidth
          ? -1
          : a.bandwidth > b.bandwidth
          ? 1
          : 0;
      });
      var na = VideoPlayerShakaGlobalConfig.getNumber(
          'shaka_default_request_timeout_timescale',
          1e3
        ),
        oa = Math.floor(
          VideoPlayerShakaGlobalConfig.getNumber(
            'shaka_default_ajax_request_timeout_ms',
            0
          ) / na
        ),
        pa = Math.floor(
          VideoPlayerShakaGlobalConfig.getNumber(
            'shaka_default_ajax_request_timeout_ms',
            0
          ) / na
        ),
        qa = Math.floor(
          VideoPlayerShakaGlobalConfig.getNumber(
            'shaka_default_ajax_request_timeout_ms',
            0
          ) / na
        );
      function ra() {
        this.minBandwidth =
          this.maxBandwidth =
          this.maxWidth =
          this.minHeight =
          this.maxHeight =
            null;
      }
      ra.prototype.clone = function () {
        var a = new ra();
        a.maxHeight = this.maxHeight;
        a.minHeight = this.minHeight;
        a.maxWidth = this.maxWidth;
        a.maxBandwidth = this.maxBandwidth;
        a.minBandwidth = this.minBandwidth;
        return a;
      };
      function sa() {
        this.fontSize = '100%';
        this.fontColor = ta;
        this.fontOpacity = ua;
        this.backgroundColor = wa;
        this.backgroundOpacity = ua;
        this.fontEdge = xa;
      }
      q('shaka.player.TextStyle', sa);
      function ya(a) {
        var b = [];
        b.push('font-size: ' + a.fontSize);
        b.push('color: ' + za(a.fontColor, a.fontOpacity));
        b.push(
          'background-color: ' + za(a.backgroundColor, a.backgroundOpacity)
        );
        for (var c = [], d = 0; d < a.fontEdge.length; ++d) {
          var e = a.fontEdge[d].slice(3, 6);
          c.push(
            za(a.fontEdge[d].slice(0, 3), a.fontOpacity) +
              ' ' +
              e.join('px ') +
              'px'
          );
        }
        b.push('text-shadow: ' + c.join(','));
        return b.join('; ');
      }
      function za(a, b) {
        return 'rgba(' + a.concat(b).join(',') + ')';
      }
      var ta = [255, 255, 255],
        wa = [0, 0, 0];
      sa.StandardColors = {
        WHITE: ta,
        BLACK: wa,
        RED: [255, 0, 0],
        GREEN: [0, 255, 0],
        BLUE: [0, 0, 255],
        YELLOW: [255, 255, 0],
        MAGENTA: [255, 0, 255],
        CYAN: [0, 255, 255],
      };
      var ua = 1;
      sa.StandardOpacities = {
        OPAQUE: ua,
        SEMI_HIGH: 0.75,
        SEMI_LOW: 0.25,
        TRANSPARENT: 0,
      };
      var xa = [];
      sa.EdgeStyles = {
        NONE: xa,
        RAISED: [
          [34, 34, 34, 1, 1, 0],
          [34, 34, 34, 2, 2, 0],
          [34, 34, 34, 3, 3, 0],
        ],
        DEPRESSED: [
          [204, 204, 204, 1, 1, 0],
          [204, 204, 204, 0, 1, 0],
          [34, 34, 34, -1, -1, 0],
          [34, 34, 34, 0, -1, 0],
        ],
        UNIFORM: [
          [34, 34, 34, 0, 0, 4],
          [34, 34, 34, 0, 0, 4],
          [34, 34, 34, 0, 0, 4],
          [34, 34, 34, 0, 0, 4],
        ],
        DROP: [
          [34, 34, 34, 2, 2, 3],
          [34, 34, 34, 2, 2, 4],
          [34, 34, 34, 2, 2, 5],
        ],
      };
      function Aa(a, b) {
        this.id = a;
        this.lang = b || 'unknown';
        this.enabled = this.active = !1;
      }
      q('shaka.player.TextTrack.compare', function (a, b) {
        return a.lang < b.lang ? -1 : a.lang > b.lang ? 1 : 0;
      });
      function Ba(a, b, c, d, e, f, g, h, k, l, n, p, v) {
        this.id = a;
        this.bandwidth = b || 0;
        this.width = c || 0;
        this.height = d || 0;
        this.streamInfoID = e;
        this.fbQualityLabel = f;
        this.fbQualityClass = g;
        a = [];
        h && (a = h.split(','));
        this.frameRate = k || '';
        this.mimeType = l || '';
        this.codecs = n || '';
        this.isHVQ = -1 < a.indexOf('hvq');
        this.isInlineHVQ = -1 < a.indexOf('hvq_www_inline');
        this.avoidOnPoorConnection = -1 < a.indexOf('avoid_on_poor_connection');
        this.active = !1;
        this.playbackResolutionMos = p || null;
        this.playbackResolutionMosConfidenceLevel = v || null;
      }
      function Ca(a, b) {
        var c = a.width * a.height,
          d = b.width * b.height;
        return c < d
          ? -1
          : c > d
          ? 1
          : a.bandwidth < b.bandwidth
          ? -1
          : a.bandwidth > b.bandwidth
          ? 1
          : 0;
      }
      q('shaka.player.VideoTrack.compare', Ca);
      function Da(a) {
        for (var b = Ea, c = [], d = 0; d < a.length; ++d) {
          for (
            var e = !1, f = 0;
            f < c.length && !(e = b ? b(a[d], c[f]) : a[d] === c[f]);
            ++f
          );
          e || c.push(a[d]);
        }
        return c;
      }
      function Fa() {
        return Date.now() + Ga;
      }
      var Ga = 0;
      function Ha(a) {
        this.b = a;
        this.c = 0 == Ia;
        this.a = 0;
      }
      var Ia = 1;
      function Ja(a) {
        return a.a < a.b.byteLength;
      }
      function Ka(a) {
        var b = a.b.getUint8(a.a);
        a.a += 1;
        return b;
      }
      function t(a) {
        var b = a.b.getUint32(a.a, a.c);
        a.a += 4;
        return b;
      }
      function La(a) {
        var b, c;
        a.c
          ? ((b = a.b.getUint32(a.a, !0)), (c = a.b.getUint32(a.a + 4, !0)))
          : ((c = a.b.getUint32(a.a, !1)), (b = a.b.getUint32(a.a + 4, !1)));
        if (2097151 < c)
          throw new RangeError(
            'DataViewReader: Overflow reading 64-bit value.'
          );
        a.a += 8;
        return c * Math.pow(2, 32) + b;
      }
      function Ma(a) {
        if (a.a + 16 > a.b.byteLength)
          throw new RangeError('DataViewReader: Read past end of DataView.');
        var b = new Uint8Array(a.b.buffer, a.a, 16);
        a.a += 16;
        return b;
      }
      function Na(a, b) {
        if (a.a + b > a.b.byteLength)
          throw new RangeError('DataViewReader: Skip past end of DataView.');
        a.a += b;
      }
      function Oa(a) {
        this.b = a;
        this.a = new Ha(a);
        Pa ||
          (Pa = [
            new Uint8Array([255]),
            new Uint8Array([127, 255]),
            new Uint8Array([63, 255, 255]),
            new Uint8Array([31, 255, 255, 255]),
            new Uint8Array([15, 255, 255, 255, 255]),
            new Uint8Array([7, 255, 255, 255, 255, 255]),
            new Uint8Array([3, 255, 255, 255, 255, 255, 255]),
            new Uint8Array([1, 255, 255, 255, 255, 255, 255, 255]),
          ]);
      }
      var Pa;
      function Qa(a) {
        var b;
        b = Ra(a);
        if (7 < b.length)
          throw new RangeError('EbmlParser: EBML ID must be at most 7 bytes.');
        for (var c = 0, d = 0; d < b.length; d++) c = 256 * c + b[d];
        b = c;
        c = Ra(a);
        a: {
          for (d = 0; d < Pa.length; d++)
            if (Sa(c, Pa[d])) {
              d = !0;
              break a;
            }
          d = !1;
        }
        if (d) c = a.b.byteLength - a.a.a;
        else {
          if (8 == c.length && c[1] & 224)
            throw new RangeError(
              'EbmlParser: Variable sized integer value must be at most 53 bits.'
            );
          for (
            var d = c[0] & ((1 << (8 - c.length)) - 1), e = 1;
            e < c.length;
            e++
          )
            d = 256 * d + c[e];
          c = d;
        }
        c = a.a.a + c <= a.b.byteLength ? c : a.b.byteLength - a.a.a;
        d = new DataView(a.b.buffer, a.b.byteOffset + a.a.a, c);
        Na(a.a, c);
        return new Ta(b, d);
      }
      function Ra(a) {
        var b = Ka(a.a),
          c;
        for (c = 1; 8 >= c && !(b & (1 << (8 - c))); c++);
        if (8 < c)
          throw new RangeError(
            'EbmlParser: Variable sized integer must fit within 8 bytes.'
          );
        var d = new Uint8Array(c);
        d[0] = b;
        for (b = 1; b < c; b++) d[b] = Ka(a.a);
        return d;
      }
      function Ta(a, b) {
        this.id = a;
        this.a = b;
      }
      function Ua(a) {
        if (8 < a.a.byteLength)
          throw new RangeError(
            'EbmlElement: Unsigned integer has too many bytes.'
          );
        if (8 == a.a.byteLength && a.a.getUint8(0) & 224)
          throw new RangeError(
            'EbmlParser: Unsigned integer must be at most 53 bits.'
          );
        for (var b = 0, c = 0; c < a.a.byteLength; c++)
          var d = a.a.getUint8(c), b = 256 * b + d;
        return b;
      }
      var Va = {
        'output-restricted': 'The required output protection is not available.',
        'output-not-allowed':
          'The required output protection is not available.',
        expired: 'The decryption key has expired.',
        'internal-error':
          'The key system has encountered an unspecified error.',
      };
      function u(a) {
        this.b = Math.exp(Math.log(0.5) / a);
        this.tb = this.Ua = this.a = 0;
      }
      q('shaka.util.EWMA', u);
      u.prototype.sample = function (a, b) {
        var c = Math.pow(this.b, a);
        this.a = b * (1 - c) + c * this.a;
        this.Ua += a;
        this.tb += 1;
      };
      u.prototype.sample = u.prototype.sample;
      u.prototype.c = function () {
        return this.Ua;
      };
      u.prototype.getTotalWeight = u.prototype.c;
      u.prototype.getEstimate = function () {
        return this.a / (1 - Math.pow(this.b, this.Ua));
      };
      u.prototype.getEstimate = u.prototype.getEstimate;
      u.prototype.f = function () {
        this.tb = this.Ua = this.a = 0;
      };
      u.prototype.reset = u.prototype.f;
      var Wa = window.CustomEvent;
      'function' !== typeof Wa &&
        ((Wa = function (a, b) {
          b = b || { bubbles: !1, cancelable: !1, detail: void 0 };
          var c = document.createEvent('CustomEvent');
          c.initCustomEvent(a, b.bubbles, b.cancelable, b.detail);
          return c;
        }),
        (Wa.prototype = window.Event.prototype));
      function x(a) {
        var b = new Wa(a.type, { detail: a.detail, bubbles: !!a.bubbles }),
          c;
        for (c in a) c in b || (b[c] = a[c]);
        return b;
      }
      function y(a) {
        return new Wa('error', { detail: a, bubbles: !0 });
      }
      function Xa(a, b, c) {
        Za(b);
        Za(c);
        return c == b ||
          (a >= $a && c == b.split('-')[0]) ||
          (a >= ab && c.split('-')[0] == b.split('-')[0])
          ? !0
          : !1;
      }
      var $a = 1,
        ab = 2;
      function Za(a) {
        a = a.toLowerCase().split('-');
        var b = bb[a[0]];
        b && (a[0] = b);
        return a.join('-');
      }
      var bb = {
        aar: 'aa',
        abk: 'ab',
        afr: 'af',
        aka: 'ak',
        alb: 'sq',
        amh: 'am',
        ara: 'ar',
        arg: 'an',
        arm: 'hy',
        asm: 'as',
        ava: 'av',
        ave: 'ae',
        aym: 'ay',
        aze: 'az',
        bak: 'ba',
        bam: 'bm',
        baq: 'eu',
        bel: 'be',
        ben: 'bn',
        bih: 'bh',
        bis: 'bi',
        bod: 'bo',
        bos: 'bs',
        bre: 'br',
        bul: 'bg',
        bur: 'my',
        cat: 'ca',
        ces: 'cs',
        cha: 'ch',
        che: 'ce',
        chi: 'zh',
        chu: 'cu',
        chv: 'cv',
        cor: 'kw',
        cos: 'co',
        cre: 'cr',
        cym: 'cy',
        cze: 'cs',
        dan: 'da',
        deu: 'de',
        div: 'dv',
        dut: 'nl',
        dzo: 'dz',
        ell: 'el',
        eng: 'en',
        epo: 'eo',
        est: 'et',
        eus: 'eu',
        ewe: 'ee',
        fao: 'fo',
        fas: 'fa',
        fij: 'fj',
        fin: 'fi',
        fra: 'fr',
        fre: 'fr',
        fry: 'fy',
        ful: 'ff',
        geo: 'ka',
        ger: 'de',
        gla: 'gd',
        gle: 'ga',
        glg: 'gl',
        glv: 'gv',
        gre: 'el',
        grn: 'gn',
        guj: 'gu',
        hat: 'ht',
        hau: 'ha',
        heb: 'he',
        her: 'hz',
        hin: 'hi',
        hmo: 'ho',
        hrv: 'hr',
        hun: 'hu',
        hye: 'hy',
        ibo: 'ig',
        ice: 'is',
        ido: 'io',
        iii: 'ii',
        iku: 'iu',
        ile: 'ie',
        ina: 'ia',
        ind: 'id',
        ipk: 'ik',
        isl: 'is',
        ita: 'it',
        jav: 'jv',
        jpn: 'ja',
        kal: 'kl',
        kan: 'kn',
        kas: 'ks',
        kat: 'ka',
        kau: 'kr',
        kaz: 'kk',
        khm: 'km',
        kik: 'ki',
        kin: 'rw',
        kir: 'ky',
        kom: 'kv',
        kon: 'kg',
        kor: 'ko',
        kua: 'kj',
        kur: 'ku',
        lao: 'lo',
        lat: 'la',
        lav: 'lv',
        lim: 'li',
        lin: 'ln',
        lit: 'lt',
        ltz: 'lb',
        lub: 'lu',
        lug: 'lg',
        mac: 'mk',
        mah: 'mh',
        mal: 'ml',
        mao: 'mi',
        mar: 'mr',
        may: 'ms',
        mkd: 'mk',
        mlg: 'mg',
        mlt: 'mt',
        mon: 'mn',
        mri: 'mi',
        msa: 'ms',
        mya: 'my',
        nau: 'na',
        nav: 'nv',
        nbl: 'nr',
        nde: 'nd',
        ndo: 'ng',
        nep: 'ne',
        nld: 'nl',
        nno: 'nn',
        nob: 'nb',
        nor: 'no',
        nya: 'ny',
        oci: 'oc',
        oji: 'oj',
        ori: 'or',
        orm: 'om',
        oss: 'os',
        pan: 'pa',
        per: 'fa',
        pli: 'pi',
        pol: 'pl',
        por: 'pt',
        pus: 'ps',
        que: 'qu',
        roh: 'rm',
        ron: 'ro',
        rum: 'ro',
        run: 'rn',
        rus: 'ru',
        sag: 'sg',
        san: 'sa',
        sin: 'si',
        slk: 'sk',
        slo: 'sk',
        slv: 'sl',
        sme: 'se',
        smo: 'sm',
        sna: 'sn',
        snd: 'sd',
        som: 'so',
        sot: 'st',
        spa: 'es',
        sqi: 'sq',
        srd: 'sc',
        srp: 'sr',
        ssw: 'ss',
        sun: 'su',
        swa: 'sw',
        swe: 'sv',
        tah: 'ty',
        tam: 'ta',
        tat: 'tt',
        tel: 'te',
        tgk: 'tg',
        tgl: 'tl',
        tha: 'th',
        tib: 'bo',
        tir: 'ti',
        ton: 'to',
        tsn: 'tn',
        tso: 'ts',
        tuk: 'tk',
        tur: 'tr',
        twi: 'tw',
        uig: 'ug',
        ukr: 'uk',
        urd: 'ur',
        uzb: 'uz',
        ven: 've',
        vie: 'vi',
        vol: 'vo',
        wel: 'cy',
        wln: 'wa',
        wol: 'wo',
        xho: 'xh',
        yid: 'yi',
        yor: 'yo',
        zha: 'za',
        zho: 'zh',
        zul: 'zu',
      };
      function cb(a) {
        return Object.keys(a).map(function (b) {
          return a[b];
        });
      }
      function z(a, b) {
        return db(a, b, 'boolean');
      }
      function A(a, b, c) {
        a = db(a, b, 'number');
        if (null == a) return null;
        if (
          isNaN(a) ||
          a == Number.NEGATIVE_INFINITY ||
          a == Number.POSITIVE_INFINITY
        )
          throw new RangeError("'" + b + "' must be finite.");
        if (null != c && a < c)
          throw new RangeError("'" + b + "' must be >= " + c);
        return a;
      }
      function eb(a, b) {
        return db(a, b, 'string');
      }
      function db(a, b, c) {
        a = a[b];
        if (null == a) return null;
        if (typeof a !== c)
          throw new TypeError("'" + b + "' must be a " + c + '.');
        return a;
      }
      function fb(a, b, c) {
        a = a[b];
        if (null == a) return null;
        if (!(a instanceof c))
          throw new TypeError(
            "'" + b + "' must be an instance of " + c.name + '.'
          );
        return a;
      }
      function B() {
        this.a = {};
      }
      B.prototype.push = function (a, b) {
        this.a.hasOwnProperty(a) ? this.a[a].push(b) : (this.a[a] = [b]);
      };
      B.prototype.set = function (a, b) {
        this.a[a] = b;
      };
      B.prototype.get = function (a) {
        return (a = this.a[a]) ? a.slice() : null;
      };
      function gb(a) {
        var b = [],
          c;
        for (c in a.a) b.push.apply(b, a.a[c]);
        return b;
      }
      B.prototype.remove = function (a, b) {
        var c = this.a[a];
        if (c)
          for (var d = 0; d < c.length; ++d) c[d] == b && (c.splice(d, 1), --d);
      };
      function hb(a) {
        var b = [],
          c;
        for (c in a.a) b.push(c);
        return b;
      }
      function ib() {
        this.a = new B();
      }
      ib.prototype.destroy = function () {
        jb(this);
        this.a = null;
      };
      function D(a, b, c, d) {
        b = new kb(b, c, d);
        a.a.push(c, b);
      }
      ib.prototype.gb = function (a, b) {
        for (var c = this.a.get(b) || [], d = 0; d < c.length; ++d) {
          var e = c[d];
          e.target == a && (e.gb(), this.a.remove(b, e));
        }
      };
      function jb(a) {
        for (var b = gb(a.a), c = 0; c < b.length; ++c) b[c].gb();
        a.a.a = {};
      }
      function kb(a, b, c) {
        this.target = a;
        this.type = b;
        this.a = c;
        this.target.addEventListener(b, c, !1);
      }
      kb.prototype.gb = function () {
        this.target &&
          (this.target.removeEventListener(this.type, this.a, !1),
          (this.a = this.target = null));
      };
      function E(a) {
        this.xb = new B();
        this.Ga = a;
      }
      q('shaka.util.FakeEventTarget', E);
      m = E.prototype;
      m.addEventListener = function (a, b) {
        this.xb.push(a, b);
      };
      m.removeEventListener = function (a, b) {
        this.xb.remove(a, b);
      };
      m.dispatchEvent = function (a) {
        a.hasOwnProperty('srcElement') ||
          (delete a.srcElement,
          Object.defineProperty(a, 'srcElement', {
            get: function () {
              return null;
            },
          }));
        if (a.hasOwnProperty('target')) a.target = this;
        else {
          delete a.target;
          var b = this;
          Object.defineProperty(a, 'target', {
            get: function () {
              return b;
            },
            set: function (a) {
              b = a;
            },
          });
        }
        if (a.hasOwnProperty('currentTarget')) a.currentTarget = null;
        else {
          delete a.currentTarget;
          var c = null;
          Object.defineProperty(a, 'currentTarget', {
            get: function () {
              return c;
            },
            set: function (a) {
              c = a;
            },
          });
        }
        return lb(this, a);
      };
      m.mc = !1;
      m.Ia = function (a, b) {
        return this.dispatchEvent(
          x({
            type: 'debug/dashPlayerEvent',
            bubbles: !0,
            detail: { type: a, event: b },
          })
        );
      };
      function lb(a, b) {
        b.currentTarget = a;
        for (var c = a.xb.get(b.type) || [], d = 0; d < c.length; ++d) {
          var e = c[d];
          try {
            e.handleEvent ? e.handleEvent(b) : e.call(a, b);
          } catch (f) {}
        }
        a.Ga && b.bubbles && lb(a.Ga, b);
        return b.defaultPrevented;
      }
      function F(a) {
        E.call(this, null);
        this.a = {
          jb: {
            Oa: new u(
              VideoPlayerShakaGlobalConfig.getNumber(
                'fast_moving_average_half_life',
                3
              )
            ),
            sb: new u(
              VideoPlayerShakaGlobalConfig.getNumber(
                'slow_moving_average_half_life',
                10
              )
            ),
          },
          Wa: {
            Oa: new u(
              VideoPlayerShakaGlobalConfig.getNumber(
                'aggressive_fast_moving_average_half_life',
                1e-4
              )
            ),
            sb: new u(
              VideoPlayerShakaGlobalConfig.getNumber(
                'aggressive_slow_moving_average_half_life',
                9.2335087917745
              )
            ),
          },
        };
        this.h = a || 5e5;
        this.j = VideoPlayerShakaGlobalConfig.getNumber(
          'min_sample_count',
          1e4
        );
        this.b = 0;
        this.c = [];
        this.i = VideoPlayerShakaGlobalConfig.getNumber(
          'max_recent_bandwidth_samples',
          0
        );
      }
      r(F, E);
      q('shaka.util.EWMABandwidthEstimator', F);
      F.prototype.shouldExcludeSample = function (a, b) {
        return VideoPlayerShakaGlobalConfig.getBool(
          'change_abr_audio_exclusion_logic',
          !0
        )
          ? !b
          : 65536 > a;
      };
      F.prototype.sample = function (a, b, c, d, e, f, g) {
        if (this.shouldExcludeSample(b, c))
          e && e.setEvent('unsampled').setReason('audio').log();
        else {
          if (
            VideoPlayerShakaGlobalConfig.getBool(
              'use_resource_timing_entry_for_bandwidth',
              !0
            )
          ) {
            if (!d) {
              e &&
                e
                  .setEvent('unsampled')
                  .setReason('resource_timing_entry_missing')
                  .log();
              return;
            }
            a = d.timeToLastByte;
            if (0 > a) {
              e &&
                e
                  .setEvent('unsampled')
                  .setReason('resource_timing_entry_invalid')
                  .log();
              return;
            }
          }
          a = Math.max(a, 50);
          c = (1e3 * UnitConstants.BITS_IN_BYTE * b) / a;
          var h = a / 1e3;
          this.a.Wa.Oa.sample(h, c, d);
          this.a.Wa.sb.sample(h, c, d);
          this.a.jb.Oa.sample(h, c, d);
          this.a.jb.sb.sample(h, c, d);
          g || this.dispatchEvent(x({ type: 'bandwidth' }));
          this.b = Date.now();
          d = parseInt(a, 10);
          if (0 < this.i)
            for (this.c.push([b, d]); this.c.length > this.i; ) this.c.shift();
          e && e.setEvent('sampled').setBytes(b).setDelayMs(d).log();
          f &&
            f
              .getEventLogger('bandwidth_sampled')
              .setLength(b)
              .setClientTimeBegin(this.b - d)
              .setClientTimeEnd(this.b)
              .log();
        }
      };
      F.prototype.getBandwidth = function (a) {
        a = 'aggressive' === a ? this.a.Wa : this.a.jb;
        return this.canTrustEstimate()
          ? Math.min(a.Oa.getEstimate(), a.sb.getEstimate())
          : this.h;
      };
      F.prototype.getFastMovingBandwidth = function (a) {
        a = 'aggressive' === a ? this.a.Wa : this.a.jb;
        return this.canTrustEstimate() ? a.Oa.getEstimate() : this.h;
      };
      F.prototype.getDataAge = function () {
        return (Date.now() - this.b) / 1e3;
      };
      F.prototype.canTrustEstimate = function (a) {
        var b = this.a.Wa.Oa;
        return b.Ua >= (void 0 === a ? 0.5 : a) || b.tb >= this.j;
      };
      F.prototype.supportsCaching = function () {
        return !1;
      };
      F.prototype.setRepresentationID = function () {};
      F.prototype.flushABREvaluationSet = function () {
        return [];
      };
      F.prototype.getRecentSamples = function () {
        return this.c;
      }; /*

 Copyright 2015 Facebook Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
      function mb(a, b, c) {
        F.call(this, c);
        this.g = a || 0;
        this.f = void 0 === b ? Infinity : b;
      }
      r(mb, F);
      q('shaka.util.EWMACacheBandwidthEstimator', mb);
      mb.prototype.sample = function (a, b, c, d, e, f, g, h) {
        var k = (8e3 * b) / a;
        e && e.setBytes(b).setDelayMs(parseInt(a, 10));
        a <= this.g && k > this.f && !h
          ? (e && e.setEvent('unsampled').setReason('cached').log(),
            f &&
              !this.shouldExcludeSample(b, c) &&
              f
                .getEventLogger('bandwidth_sampled')
                .setResult('aborted')
                .setLength(b)
                .setClientTimeBegin(Date.now() - parseInt(a, 10))
                .setClientTimeEnd(Date.now())
                .log())
          : F.prototype.sample.call(this, a, b, c, d, e, f, g);
      };
      mb.prototype.supportsCaching = function () {
        return Infinity !== this.f && !!this.g;
      };
      mb.prototype.setRepresentationID = function () {};
      mb.prototype.flushABREvaluationSet = function () {
        return [];
      };
      function nb() {
        F.call(this);
      }
      r(nb, F);
      q('shaka.util.EWMASignedURLBandwidthEstimator', nb);
      nb.prototype.supportsCaching = function () {
        return !0;
      };
      function G() {
        var a,
          b,
          c = new Promise(function (c, e) {
            a = c;
            b = e;
          });
        c.resolve = a;
        c.reject = b;
        c.destroy = G.prototype.destroy;
        return c;
      }
      G.prototype.destroy = function () {
        this.catch(function () {});
        var a = Error('Destroyed!');
        a.type = 'destroy';
        this.reject(a);
      };
      function ob(a) {
        a.split('').reduce(function (a, c, d) {
          return a + (d && 0 == d % 4 ? ' ' + c : c);
        });
      }
      function pb() {
        this.fb = new G();
        this.c = !1;
        this.za = null;
        this.a = [];
        this.b = null;
      }
      function qb(a, b) {
        if (a.c) throw Error('Cannot append to a running task!');
        a.a.push(b);
      }
      pb.prototype.start = function () {
        if (this.c) throw Error('Task already started!');
        this.c = !0;
        this.a.unshift(function () {});
        rb(this, void 0);
      };
      pb.prototype.end = function () {
        this.a.splice(1);
      };
      function rb(a, b) {
        var c = a.a[0](b),
          d;
        c
          ? ((d = c[0]), (a.b = c[1]))
          : ((d = Promise.resolve()), (a.b = null));
        d.then(
          H(a, function (a) {
            this.za
              ? ((this.a = []), (this.b = null), sb(this))
              : (this.a.shift(),
                this.a.length
                  ? rb(this, a)
                  : (this.fb.resolve(a), (this.b = null)));
          })
        ).catch(
          H(a, function (a) {
            this.a = [];
            this.b = null;
            this.za ? sb(this) : this.fb.reject(a);
          })
        );
      }
      function sb(a) {
        function b() {
          var a = Error('Task aborted.');
          a.type = 'aborted';
          this.fb.reject(a);
          setTimeout(
            function () {
              this.za.resolve();
              this.za = null;
            }.bind(this),
            5
          );
        }
        a.f
          ? a.f.then(
              function () {
                this.f = null;
                b.call(this);
              }.bind(a)
            )
          : b.call(a);
      }
      function H(a, b) {
        return b.bind(a);
      }
      function tb(a, b, c, d, e, f, g) {
        MediaSource.isTypeSupported(c);
        E.call(this, e);
        e = b.addSourceBuffer(c);
        this.h = a;
        this.A = b;
        this.a = e;
        this.K = d;
        this.C = new ib();
        this.I = this.m = this.X = this.i = null;
        this.P = !1;
        this.O = this.L = this.N = 0;
        this.H = null;
        this.V = this.G = !1;
        this.Y = f;
        this.D = null;
        this.Z = g ? g : null;
        this.b = [];
        this.U = 0;
        this.l = this.c = this.f = null;
        this.T = qa;
        this.o = this.u = 0;
        this.w = this.S = !1;
        this.g = c && c.charAt(0);
        D(this.C, this.a, 'updateend', this.nd.bind(this));
        this.h.getBool('listen_for_async_append_buffer_errors', !0) &&
          D(this.C, this.a, 'error', this.ad.bind(this));
        this.j = null;
      }
      r(tb, E);
      tb.prototype.Aa = function () {
        return { SourceBuffer: this.a };
      };
      function ub(a, b, c) {
        a.mc && a.Ia(b, { type: a.g.charAt(0), segment: c, sourceBuffer: a.a });
      }
      var vb = 1 / 60;
      tb.prototype.destroy = function () {
        wb(this).catch(function () {});
        this.c && this.c.destroy();
        this.b = this.f = this.c = null;
        this.C.destroy();
        this.A = this.a = this.D = this.C = null;
      };
      function xb(a) {
        var b = a.b.length;
        return 0 < b ? a.b[b - 1] : null;
      }
      function yb(a, b) {
        for (var c = a.a.buffered, d = 0; d < c.length; ++d) {
          var e = c.start(d) - vb,
            f = c.end(d) + vb;
          if (b >= e && b <= f) return c.end(d) - b;
        }
        return 0;
      }
      function zb(a, b, c) {
        b = b.endTime ? b.endTime - b.startTime : 1;
        var d = new Ab();
        d.b = 3;
        d.l = 1e3 * b;
        d.f = 1e3 * a.T;
        d.A = a.X;
        d.o = c;
        d.da = a.Y;
        d.mimeType = a.g;
        d.i = a.Z;
        return d;
      }
      m = tb.prototype;
      m.fetch = function (a, b, c, d, e, f, g, h) {
        var k,
          l = f ? 'replacing_lower_quality_buffer' : null;
        if (this.m) {
          var n = this.b[this.b.length - 1],
            p = null;
          n && (p = 1e3 * (a.startTime - n.endTime));
          k = this.m
            .getOperationLogger('fetch')
            .setReason(l)
            .setResource(Bb(a.url))
            .setType(Cb(this))
            .setLength(Math.round(1e3 * (a.endTime - a.startTime)))
            .setSegmentStartTime(1e3 * a.startTime)
            .setSegmentEndTime(1e3 * a.endTime)
            .setSegmentTimeGap(p)
            .start();
        }
        this.j = k;
        if (this.f) {
          if (this.h.getBool('sbm_enable_concurrent_fetch_requests', !1)) {
            var v = [].slice.call(arguments);
            return this.f.fb.then(
              H(this, function () {
                return this.fetch.apply(this, v);
              }),
              function (a) {
                throw a;
              }
            );
          }
          n = Error(
            'Cannot fetch (' + this.g + '): previous operation not complete.'
          );
          this.u >= this.N
            ? ((n.type = 'stream'), k && k.setError(n).log(), (this.u = 0))
            : (this.u++, (n.type = 'aborted'));
          return Promise.reject(n);
        }
        this.f = new pb();
        c != this.a.timestampOffset && (this.a.timestampOffset = c);
        var n = zb(this, a, e),
          p = this.h.getBool('enable_streaming_code_path', !0),
          w;
        w = p
          ? a.url.stream(n, this.K, this.m, this.j, this.I, Cb(this), l, g, h)
          : a.url.fetch(n, this.K, this.m, this.j, this.I, Cb(this), l, g);
        ub(this, 'SegmentFetching', a);
        var C = I.prototype.Ha.bind(a.url);
        this.H && this.G && (d = this.H);
        var P = 0,
          aa = null;
        d &&
          ((this.H = d),
          (this.G = !1),
          qb(
            this.f,
            function () {
              return [
                d.then(
                  function (a) {
                    a.Ra > P && (P = a.Ra);
                    return Db(this, a, null);
                  }.bind(this)
                ),
                this.Va.bind(this),
              ];
            }.bind(this)
          ));
        var ba = function (a) {
          a.Ra > P && (P = a.Ra);
          aa = a.byteLength;
          ea((this.K.getBandwidth() / 1e6).toFixed(2));
          if (this.S) {
            var c;
            this.m &&
              (c = this.m.getOperationLogger('cea608_extraction').start());
            extractCEA608(a, b)
              .then(
                function (a) {
                  c && c.setLength(a.length).log();
                  a.length &&
                    this.dispatchEvent(
                      x({
                        type: 'cea608-captions',
                        bubbles: !0,
                        detail: { captions: a },
                      })
                    );
                }.bind(this)
              )
              .catch(function (a) {
                console.error(a);
              });
          }
        }.bind(this);
        p
          ? (h && ((n = h.getProgressTracker()), this.i !== n && (this.i = n)),
            qb(
              this.f,
              H(this, function () {
                var b = null,
                  c = Math.max(0, (a.url.endByte || 0) - a.url.startByte),
                  d = this.h.getNumber('streaming_append_per_segment', 3),
                  e = 0 === d ? 0 : c / d;
                return [
                  w
                    .then(
                      function (c) {
                        b = c;
                        this.w = !1;
                        return Eb(this, c, a, e);
                      }.bind(this)
                    )
                    .then(function (a) {
                      b = null;
                      return a;
                    })
                    .then(ba)
                    .catch(
                      function (a) {
                        this.h.getBool('abort_fetch_on_net_error', !1) &&
                          h &&
                          (this.a.abort(), (this.w = !0));
                        return Promise.reject(a);
                      }.bind(this)
                    ),
                  function () {
                    ub(this, 'SegmentFailed', a);
                    b &&
                      (b.cancel('abort'),
                      (b = null),
                      h && (this.a.abort(), (this.w = !0)));
                    C();
                    return this.Va();
                  }.bind(this),
                ];
              })
            ))
          : qb(
              this.f,
              H(this, function () {
                return [
                  w.then(
                    function (b) {
                      ub(this, 'SegmentFetched', a);
                      ba(b);
                      return Db(this, b, a, l);
                    }.bind(this)
                  ),
                  function () {
                    ub(this, 'SegmentFailed', a);
                    C();
                    return this.Va();
                  }.bind(this),
                ];
              })
            );
        var va = 0 == this.a.buffered.length && 0 == this.b.length,
          Ya = null;
        qb(
          this.f,
          function () {
            if (0 == this.a.buffered.length && !this.V) {
              var b = Error('Failed to buffer segment (' + this.g + ').');
              b.type = 'stream';
              return [Promise.reject(b)];
            }
            this.a.buffered.length &&
              va &&
              ((b = a.startTime), (Ya = this.a.buffered.start(0) - b));
            b = Fb(this.b, a.startTime);
            0 <= b ? this.b.splice(b + 1, 0, a) : this.b.push(a);
          }.bind(this)
        );
        this.u = 0;
        return Gb(this).then(
          function () {
            k && k.log();
            return Promise.resolve({
              $: Ya,
              Wc: P,
              F: a.endTime - a.startTime,
              yc: aa,
            });
          },
          function (a) {
            k && k.setError(a).log();
            a = Hb(a, 'task', 'An unknown task error occurred.');
            return Promise.reject(a);
          }
        );
      };
      function Eb(a, b, c, d) {
        var e = new ArrayBuffer(0),
          f = new ArrayBuffer(0),
          g = function () {
            return b.read().then(
              function (a) {
                var b = a.value;
                a = a.done;
                if (this.w || (a && 0 === f.byteLength)) return e;
                if (!a && !b) return g();
                b &&
                  (b instanceof Uint8Array && (b = b.buffer),
                  (f = concatArrayBuffer(f, b)));
                return f.byteLength >= d || a
                  ? (this.i && this.i.notifyBytesConsumed(f.byteLength),
                    ub(this, 'SegmentFetched', c),
                    (e = concatArrayBuffer(e, f)),
                    (b = f),
                    (f = new ArrayBuffer(0)),
                    Db(this, b, c).then(g))
                  : g();
              }.bind(this)
            );
          }.bind(a);
        return g();
      }
      function Ib(a) {
        if (a.f) {
          var b = Error(
            'Cannot clear (' + a.g + '): previous operation not complete.'
          );
          a.o >= a.L
            ? ((b.type = 'stream'), (a.o = 0))
            : (a.o++, (b.type = 'aborted'));
          return Promise.reject(b);
        }
        a.f = new pb();
        qb(
          a.f,
          function () {
            var a;
            a: if (0 == this.a.buffered.length) a = Promise.resolve();
            else {
              try {
                this.a.remove(0, this.A.duration);
              } catch (b) {
                b = Hb(
                  b,
                  'clear_buffer',
                  'An error occured when clearing the buffer.'
                );
                a = Promise.reject(b);
                break a;
              }
              this.b = [];
              a = this.c = new G();
            }
            return [a, this.Va.bind(this)];
          }.bind(a)
        );
        a.o = 0;
        return Gb(a);
      }
      function Jb(a, b) {
        if (a.f) {
          var c = Error(
            'Cannot clearAfter (' + a.g + '): previous operation not complete.'
          );
          c.type = 'stream';
          return Promise.reject(c);
        }
        a.f = new pb();
        qb(
          a.f,
          function () {
            return [Kb(this, b), this.Va.bind(this)];
          }.bind(a)
        );
        return Gb(a);
      }
      function Lb(a, b) {
        a.c = new G();
        var c = b - 5;
        if (0 < c) {
          try {
            a.a.remove(0, c);
          } catch (d) {
            return (
              (d = Hb(
                d,
                'clear_buffer',
                'An error occured when clearing the buffer.'
              )),
              Promise.reject(d)
            );
          }
          c = Mb(a, c);
          0 < c && (a.b = a.b.slice(c, a.b.length));
        } else a.c.resolve();
        return a.c;
      }
      function wb(a) {
        a.f
          ? ((a = a.f),
            a.za
              ? (a = a.za)
              : a.c
              ? (a.b && (a.f = a.b()), (a.za = new G()), (a = a.za))
              : ((a.c = !0), (a = Promise.resolve())))
          : (a = Promise.resolve());
        return a;
      }
      function Nb(a) {
        for (var b = a.currentTime, c = b, d = 0; d < a.buffered.length; d++)
          if (b <= a.buffered.start(d)) {
            c = a.buffered.start(d);
            break;
          }
        return c;
      }
      function Ob(a, b) {
        for (var c = b.currentTime, d = 0; d < b.buffered.length; d++)
          if (c >= b.buffered.start(d) && c <= b.buffered.end(d) - a.O)
            return !1;
        return !0;
      }
      function Gb(a) {
        a.f.start();
        return a.f.fb
          .then(
            H(a, function () {
              this.f = null;
            })
          )
          .catch(
            H(a, function (a) {
              this.f = null;
              a = Hb(a, 'task', 'An unknown task error occurred.');
              return Promise.reject(a);
            })
          );
      }
      function Db(a, b, c, d) {
        var e;
        if (a.m) {
          var f = c ? Bb(c.url) : 'init';
          e = a.m
            .getOperationLogger('append')
            .setReason(d)
            .setResource(f)
            .setType(Cb(a))
            .setLength(b.byteLength)
            .start();
          null !== c &&
            (e = e
              .setSegmentStartTime(1e3 * c.startTime)
              .setSegmentEndTime(1e3 * c.endTime));
          a.j && (e = e.setParentLogger(a.j));
        }
        try {
          a.a.appendBuffer(b);
        } catch (g) {
          return (
            a.h.getBool('nuke_source_buffer_on_quota_exceeded_err', !0) &&
              g instanceof DOMException &&
              g.code === DOMException.QUOTA_EXCEEDED_ERR &&
              g.message.match(/^.*SourceBuffer.*full.*free\sspace.*$/) &&
              (g.type = 'sourcebuffer_full'),
            e && e.setError(g).log(),
            Promise.reject(g)
          );
        }
        a.c = new G();
        a.l = c;
        return a.c.then(
          function () {
            e && e.log();
          },
          function (a) {
            e && e.setError(a).log();
            return Promise.reject(a);
          }
        );
      }
      m.ad = function (a) {
        a =
          a.error ||
          Error('Call to appendBuffer failed to append the segment.');
        a = Hb(
          a,
          'stream',
          'Call to appendBuffer failed to append the segment.'
        );
        this.c && this.c.reject(a);
      };
      function Kb(a, b) {
        if (0 == a.a.buffered.length) return Promise.resolve();
        var c = Mb(a, b);
        if (-1 == c || c == a.b.length - 1) return Promise.resolve();
        try {
          a.a.remove(a.b[c + 1].startTime, a.A.duration);
        } catch (d) {
          return Promise.reject(d);
        }
        a.b = a.b.slice(0, c + 1);
        a.c = new G();
        return a.c;
      }
      m.Va = function () {
        if (this.c) {
          if ('open' == this.A.readyState) {
            var a = Error('Previous operation aborted.');
            a.type = 'aborted';
            this.c.reject(a);
            this.a.abort();
            this.P && (this.G = !0);
            this.c = new G();
          }
          return this.c;
        }
        return Promise.resolve();
      };
      m.nd = function () {
        this.c &&
          (this.l && (ub(this, 'SegmentAppended', this.l), (this.l = null)),
          this.c.resolve(),
          (this.c = null));
      };
      m.Cd = function () {
        return this.i;
      };
      tb.prototype.getStreamProgressTracker = tb.prototype.Cd;
      function Cb(a) {
        return 'v' === a.g.charAt(0)
          ? 'video'
          : 'a' === a.g.charAt(0)
          ? 'audio'
          : null;
      }
      function Hb(a, b, c) {
        a || (a = Error(c));
        a.type || (a.type = b);
        a.message || (a.message = c);
        return a;
      }
      function Mb(a, b) {
        if (
          a.h.getBool('sbm_use_segment_index_to_find_timestamps', !1) &&
          a.D
        ) {
          var c = a.D.Ta(b);
          if (c) return Fb(a.b, c.startTime);
        } else return Fb(a.b, b);
        return -1;
      }
      function Pb(a) {
        return String.fromCharCode.apply(null, a);
      }
      q('shaka.util.Uint8ArrayUtils.toString', Pb);
      function Qb(a) {
        for (var b = new Uint8Array(a.length), c = 0; c < a.length; ++c)
          b[c] = a.charCodeAt(c);
        return b;
      }
      q('shaka.util.Uint8ArrayUtils.fromString', Qb);
      q('shaka.util.Uint8ArrayUtils.toBase64', function (a, b) {
        var c = void 0 == b ? !0 : b,
          d = window.btoa(Pb(a)).replace(/\+/g, '-').replace(/\//g, '_');
        return c ? d : d.replace(/=*$/, '');
      });
      function Rb(a) {
        return Qb(window.atob(a.replace(/-/g, '+').replace(/_/g, '/')));
      }
      q('shaka.util.Uint8ArrayUtils.fromBase64', Rb);
      q('shaka.util.Uint8ArrayUtils.fromHex', function (a) {
        for (var b = new Uint8Array(a.length / 2), c = 0; c < a.length; c += 2)
          b[c / 2] = window.parseInt(a.substr(c, 2), 16);
        return b;
      });
      function Sb(a) {
        for (var b = '', c = 0; c < a.length; ++c) {
          var d = a[c].toString(16);
          1 == d.length && (d = '0' + d);
          b += d;
        }
        return b;
      }
      q('shaka.util.Uint8ArrayUtils.toHex', Sb);
      function Sa(a, b) {
        if (!a && !b) return !0;
        if (!a || !b || a.length != b.length) return !1;
        for (var c = 0; c < a.length; ++c) if (a[c] != b[c]) return !1;
        return !0;
      }
      function Tb() {
        this.h = this.a = '';
        this.l = !1;
        this.u = this.o = null;
        this.i = this.g = !1;
        this.j = this.f = '';
        this.c = null;
        this.b = [];
      }
      function Ub(a, b) {
        var c = new Tb();
        c.a = a.a;
        c.h = a.h;
        c.l = a.l;
        c.o = a.o;
        c.u = a.u;
        c.g = a.g;
        c.i = a.i;
        c.f = a.f;
        c.j = a.j;
        c.c = a.c ? new Uint8Array(a.c.buffer) : null;
        Vb(c, a.b);
        Vb(c, b.b);
        return c;
      }
      function Vb(a, b) {
        var c = a.b.concat(
          b.map(function (a) {
            return {
              initData: new Uint8Array(a.initData.buffer),
              initDataType: a.initDataType,
            };
          })
        );
        a.b = Da(c);
      }
      function Ea(a, b) {
        return a.initDataType == b.initDataType && Sa(a.initData, b.initData);
      }
      function Wb(a, b, c, d) {
        this.a = [];
        d && this.a.push(d);
      }
      q('shaka.player.DrmSchemeInfo', Wb);
      Wb.DistinctiveIdentifier = { OPTIONAL: 0, REQUIRED: 1 };
      Wb.PersistentState = { OPTIONAL: 0, REQUIRED: 1 };
      Wb.createUnencrypted = function () {
        return new Wb(0, 0, 0, null);
      };
      function Xb(a) {
        this.systemIds = [];
        this.cencKeyIds = [];
        this.a = [];
        a = new Ha(new DataView(a.buffer));
        try {
          for (; Ja(a); ) {
            var b = a.a,
              c = t(a),
              d = t(a);
            1 == c ? (c = La(a)) : 0 == c && (c = a.b.byteLength - b);
            if (1886614376 != d) Na(a, c - (a.a - b));
            else {
              var e = Ka(a);
              if (1 < e) Na(a, c - (a.a - b));
              else {
                Na(a, 3);
                var f = Sb(Ma(a)),
                  g = [];
                if (0 < e)
                  for (var h = t(a), k = 0; k < h; ++k) {
                    var l = Sb(Ma(a));
                    g.push(l);
                  }
                var n = t(a);
                Na(a, n);
                this.cencKeyIds.push.apply(this.cencKeyIds, g);
                this.systemIds.push(f);
                this.a.push({ start: b, end: a.a - 1 });
                a.a != b + c && Na(a, c - (a.a - b));
              }
            }
          }
        } catch (p) {}
      }
      var Yb =
        /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;
      function J(a) {
        var b;
        a instanceof J
          ? (Zb(this, a.ya),
            (this.Ma = a.Ma),
            (this.ma = a.ma),
            $b(this, a.Qa),
            (this.ta = a.ta),
            ac(this, a.a.clone()),
            (this.Ja = a.Ja))
          : a && (b = String(a).match(Yb))
          ? (Zb(this, b[1] || '', !0),
            (this.Ma = bc(b[2] || '')),
            (this.ma = bc(b[3] || '', !0)),
            $b(this, b[4]),
            (this.ta = bc(b[5] || '', !0)),
            ac(this, b[6] || '', !0),
            (this.Ja = bc(b[7] || '')))
          : (this.a = new cc(null));
      }
      m = J.prototype;
      m.ya = '';
      m.Ma = '';
      m.ma = '';
      m.Qa = null;
      m.ta = '';
      m.Ja = '';
      m.toString = function () {
        var a = [],
          b = this.ya;
        b && a.push(dc(b, ec, !0), ':');
        if ((b = this.ma)) {
          a.push('//');
          var c = this.Ma;
          c && a.push(dc(c, ec, !0), '@');
          a.push(encodeURIComponent(b).replace(/%25([0-9a-fA-F]{2})/g, '%$1'));
          b = this.Qa;
          null != b && a.push(':', String(b));
        }
        if ((b = this.ta))
          this.ma && '/' != b.charAt(0) && a.push('/'),
            a.push(dc(b, '/' == b.charAt(0) ? fc : gc, !0));
        (b = this.a.toString()) && a.push('?', b);
        (b = this.Ja) && a.push('#', dc(b, hc));
        return a.join('');
      };
      m.resolve = function (a) {
        var b = this.clone();
        'data' === b.ya && (b = new J());
        var c = !!a.ya;
        c ? Zb(b, a.ya) : (c = !!a.Ma);
        c ? (b.Ma = a.Ma) : (c = !!a.ma);
        c ? (b.ma = a.ma) : (c = null != a.Qa);
        var d = a.ta;
        if (c) $b(b, a.Qa);
        else if ((c = !!a.ta)) {
          if ('/' != d.charAt(0))
            if (this.ma && !this.ta) d = '/' + d;
            else {
              var e = b.ta.lastIndexOf('/');
              -1 != e && (d = b.ta.substr(0, e + 1) + d);
            }
          if ('..' == d || '.' == d) d = '';
          else if (-1 != d.indexOf('./') || -1 != d.indexOf('/.')) {
            for (
              var e = 0 == d.lastIndexOf('/', 0),
                d = d.split('/'),
                f = [],
                g = 0;
              g < d.length;

            ) {
              var h = d[g++];
              '.' == h
                ? e && g == d.length && f.push('')
                : '..' == h
                ? ((1 < f.length || (1 == f.length && '' != f[0])) && f.pop(),
                  e && g == d.length && f.push(''))
                : (f.push(h), (e = !0));
            }
            d = f.join('/');
          }
        }
        c ? (b.ta = d) : (c = '' !== a.a.toString());
        c ? ac(b, a.a.clone()) : (c = !!a.Ja);
        c && (b.Ja = a.Ja);
        return b;
      };
      m.clone = function () {
        return new J(this);
      };
      function Zb(a, b, c) {
        a.ya = c ? bc(b, !0) : b;
        a.ya && (a.ya = a.ya.replace(/:$/, ''));
      }
      function $b(a, b) {
        if (b) {
          b = Number(b);
          if (isNaN(b) || 0 > b) throw Error('Bad port number ' + b);
          a.Qa = b;
        } else a.Qa = null;
      }
      function ac(a, b, c) {
        b instanceof cc ? (a.a = b) : (c || (b = dc(b, ic)), (a.a = new cc(b)));
      }
      function bc(a, b) {
        return a ? (b ? decodeURI(a) : decodeURIComponent(a)) : '';
      }
      function dc(a, b, c) {
        return 'string' == typeof a
          ? ((a = encodeURI(a).replace(b, jc)),
            c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, '%$1')),
            a)
          : null;
      }
      function jc(a) {
        a = a.charCodeAt(0);
        return '%' + ((a >> 4) & 15).toString(16) + (a & 15).toString(16);
      }
      var ec = /[#\/\?@]/g,
        gc = /[\#\?:]/g,
        fc = /[\#\?]/g,
        ic = /[\#\?@]/g,
        hc = /#/g;
      function cc(a) {
        this.b = a || null;
      }
      cc.prototype.a = null;
      cc.prototype.c = null;
      function kc(a, b, c) {
        if (!a.a && ((a.a = {}), (a.c = 0), a.b))
          for (var d = a.b.split('&'), e = 0; e < d.length; e++) {
            var f = d[e].indexOf('='),
              g = null,
              h = null;
            0 <= f
              ? ((g = d[e].substring(0, f)), (h = d[e].substring(f + 1)))
              : (g = d[e]);
            g = decodeURIComponent(g.replace(/\+/g, ' '));
            h = h || '';
            kc(a, g, decodeURIComponent(h.replace(/\+/g, ' ')));
          }
        a.b = null;
        (d = a.a.hasOwnProperty(b) && a.a[b]) || (a.a[b] = d = []);
        d.push(c);
        a.c++;
      }
      cc.prototype.toString = function () {
        if (this.b) return this.b;
        if (!this.a) return '';
        var a = [],
          b;
        for (b in this.a)
          for (
            var c = encodeURIComponent(b), d = this.a[b], e = 0;
            e < d.length;
            e++
          ) {
            var f = c;
            '' !== d[e] && (f += '=' + encodeURIComponent(d[e]));
            a.push(f);
          }
        return (this.b = a.join('&'));
      };
      cc.prototype.clone = function () {
        var a = new cc();
        a.b = this.b;
        if (this.a) {
          var b = {},
            c;
          for (c in this.a) b[c] = this.a[c].concat();
          a.a = b;
          a.c = this.c;
        }
        return a;
      };
      function lc(a, b, c) {
        var d = a.indexOf('<?xml');
        0 <= d && (a = a.substr(d));
        a = new DOMParser().parseFromString(a, 'text/xml');
        if (!a) return null;
        'string' === typeof b && (b = [new J(b)]);
        b = b || [new J('')];
        c = c || [new J('')];
        return K({ vc: b, baseUrl: c }, a, mc);
      }
      q('shaka.dash.mpd.parseMpd', lc);
      function mc() {
        this.id = this.url = null;
        this.type = 'static';
        this.FBMS =
          this.FBIsLiveTemplated =
          this.FBWasLive =
          this.manifestIsLiveStreaming =
            !1;
        this.o = this.baseUrl = this.vc = null;
        this.i = this.h = 0;
        this.b = null;
        this.j = 5;
        this.f = this.c = this.g = null;
        this.l = 1;
        this.a = [];
      }
      function nc() {
        this.f =
          this.c =
          this.b =
          this.baseUrl =
          this.duration =
          this.start =
          this.id =
            null;
        this.a = [];
      }
      function oc() {
        this.c =
          this.codecs =
          this.mimeType =
          this.height =
          this.width =
          this.contentType =
          this.lang =
          this.group =
          this.id =
            null;
        this.f = !1;
        this.i = this.h = this.g = this.baseUrl = null;
        this.j = [];
        this.a = [];
        this.b = null;
      }
      function pc() {
        this.value = null;
      }
      function qc() {
        this.lang = this.a = null;
      }
      function rc() {
        this.contentType = this.lang = this.id = null;
      }
      function sc() {
        this.data = null;
      }
      function tc() {
        this.data = null;
      }
      function uc() {
        this.a =
          this.b =
          this.f =
          this.i =
          this.baseUrl =
          this.j =
          this.frameRate =
          this.u =
          this.o =
          this.l =
          this.fbQualityClass =
          this.fbQualityLabel =
          this.h =
          this.g =
          this.codecs =
          this.mimeType =
          this.height =
          this.width =
          this.bandwidth =
          this.lang =
          this.id =
            null;
        this.c = [];
      }
      function vc() {
        this.value = this.a = null;
      }
      vc.prototype.clone = function () {
        var a = new vc();
        a.a = this.a;
        a.value = this.value;
        return a;
      };
      vc.prototype.parse = function (a, b) {
        this.a = L(b, 'schemeIdUri', M, this.a);
        this.value = L(b, 'value', M, this.value);
      };
      function wc() {
        this.b = this.a = this.f = this.c = null;
      }
      function xc() {
        this.parsedPssh = this.psshBox = null;
      }
      function yc() {
        this.url = null;
      }
      function zc() {
        this.url = null;
      }
      function Ac() {
        this.baseUrl = null;
        this.s = 1;
        this.c = this.b = this.f = this.a = this.J = null;
      }
      Ac.prototype.clone = function () {
        var a = new Ac();
        a.baseUrl = Bc(this.baseUrl);
        a.s = this.s;
        a.J = this.J;
        a.a = N(this.a);
        a.f = N(this.f);
        a.b = N(this.b);
        a.c = N(this.c);
        return a;
      };
      function Cc() {
        this.a = this.url = null;
      }
      Cc.prototype.clone = function () {
        var a = new Cc();
        a.url = Bc(this.url);
        a.a = N(this.a);
        return a;
      };
      function Dc() {
        this.a = this.url = null;
      }
      Dc.prototype.clone = function () {
        var a = new Dc();
        a.url = Bc(this.url);
        a.a = N(this.a);
        return a;
      };
      function Ec() {
        this.baseUrl = null;
        this.s = 1;
        this.F = this.J = null;
        this.c = 0;
        this.b = null;
        this.a = [];
        this.B = null;
      }
      Ec.prototype.clone = function () {
        var a = new Ec();
        a.baseUrl = Bc(this.baseUrl);
        a.s = this.s;
        a.J = this.J;
        a.F = this.F;
        a.c = this.c;
        a.b = N(this.b);
        a.a = Bc(this.a) || [];
        a.B = N(this.B);
        return a;
      };
      function Fc() {
        this.a = this.b = null;
      }
      Fc.prototype.clone = function () {
        var a = new Fc();
        a.b = Bc(this.b);
        a.a = N(this.a);
        return a;
      };
      function Gc() {
        this.s = 1;
        this.F = this.J = null;
        this.b = 0;
        this.B = this.c = this.a = this.f = null;
      }
      Gc.prototype.clone = function () {
        var a = new Gc();
        a.s = this.s;
        a.J = this.J;
        a.F = this.F;
        a.b = this.b;
        a.f = this.f;
        a.a = this.a;
        a.c = this.c;
        a.B = N(this.B);
        return a;
      };
      function Hc() {
        this.M = [];
      }
      Hc.prototype.clone = function () {
        var a = new Hc();
        a.M = Bc(this.M) || [];
        return a;
      };
      function Ic() {
        this.repeat = this.duration = this.startTime = null;
      }
      Ic.prototype.clone = function () {
        var a = new Ic();
        a.startTime = this.startTime;
        a.duration = this.duration;
        a.repeat = this.repeat;
        return a;
      };
      function Jc(a, b) {
        this.Na = a;
        this.end = b;
      }
      Jc.prototype.clone = function () {
        return new Jc(this.Na, this.end);
      };
      mc.TAG_NAME = 'MPD';
      nc.TAG_NAME = 'Period';
      oc.TAG_NAME = 'AdaptationSet';
      pc.TAG_NAME = 'Role';
      qc.TAG_NAME = 'Accessibility';
      rc.TAG_NAME = 'ContentComponent';
      uc.TAG_NAME = 'Representation';
      wc.TAG_NAME = 'ContentProtection';
      xc.TAG_NAME = 'cenc:pssh';
      yc.TAG_NAME = 'BaseURL';
      vc.TAG_NAME = 'AudioChannelConfiguration';
      zc.TAG_NAME = 'Location';
      Ac.TAG_NAME = 'SegmentBase';
      Cc.TAG_NAME = 'RepresentationIndex';
      sc.TAG_NAME = 'FBInitializationBinary';
      tc.TAG_NAME = 'FBSegmentIndexBinary';
      Dc.TAG_NAME = 'Initialization';
      Ec.TAG_NAME = 'SegmentList';
      Fc.TAG_NAME = 'SegmentURL';
      Gc.TAG_NAME = 'SegmentTemplate';
      Hc.TAG_NAME = 'SegmentTimeline';
      Ic.TAG_NAME = 'S';
      mc.prototype.parse = function (a, b) {
        this.url = a.vc;
        this.id = L(b, 'id', M);
        this.type = L(b, 'type', M) || 'static';
        this.manifestIsLiveStreaming = 'dynamic' === this.type;
        this.FBWasLive = L(b, 'FBWasLive', Kc) || !1;
        this.FBIsLiveTemplated = L(b, 'FBIsLiveTemplated', Kc) || !1;
        this.FBMS = L(b, 'FBMS', Kc) || !1;
        VideoPlayerShakaGlobalConfig.getBool(
          'override_fb_is_live_templated',
          !1
        ) && (this.FBIsLiveTemplated = !1);
        this.b = L(b, 'mediaPresentationDuration', Mc);
        this.j = L(b, 'minBufferTime', Mc, this.j);
        this.g = L(b, 'minimumUpdatePeriod', Mc, this.g);
        this.c = L(b, 'availabilityStartTime', Nc, this.c);
        this.f = L(b, 'timeShiftBufferDepth', Mc, this.f);
        this.f = null;
        this.l = L(b, 'suggestedPresentationDelay', Mc, this.l);
        this.h = L(b, 'loapStreamType', Oc, this.h);
        this.i = L(b, 'usingASRCaptions', Oc, this.i);
        var c = a.baseUrl,
          d = Pc(this, b, yc);
        this.baseUrl = Qc(c, d);
        if ((d = K(this, b, zc))) this.o = Rc(c, d.url);
        this.a = Pc(this, b, nc);
      };
      function Sc(a, b, c, d) {
        if (0 !== a.a.length) {
          var e = new oc();
          e.contentType = 'text';
          e.lang = c || 'en';
          e.f = !0;
          c = new uc();
          c.bandwidth = 0;
          c.mimeType = d || 'text/vtt';
          c.baseUrl = [new J(b)];
          e.a.push(c);
          a.a[0].a.push(e);
          Tc(a.a[0]);
        }
      }
      nc.prototype.parse = function (a, b) {
        this.id = L(b, 'id', M);
        this.start = L(b, 'start', Mc);
        this.duration = L(b, 'duration', Mc);
        var c = Pc(this, b, yc);
        this.baseUrl = Qc(a.baseUrl, c);
        this.b = K(this, b, Ac);
        this.c = K(this, b, Ec);
        this.f = K(this, b, Gc);
        this.a = Pc(this, b, oc);
        Tc(this);
      };
      function Tc(a) {
        for (var b = [], c = 0; c < a.a.length; ++c) {
          var d = a.a[c];
          null != d.group && (b[d.group] = !0);
        }
        for (c = 0; c < a.a.length; ++c)
          if (((d = a.a[c]), null == d.group)) {
            for (var e = 1; 1 == b[e]; ) ++e;
            b[e] = !0;
            d.group = e;
          }
      }
      oc.prototype.parse = function (a, b) {
        var c = K(this, b, rc) || {},
          d = K(this, b, pc);
        this.id = L(b, 'id', M);
        this.group = L(b, 'group', O);
        this.lang = L(b, 'lang', M, c.lang);
        this.contentType = L(b, 'contentType', M, c.contentType);
        this.width = L(b, 'width', Q);
        this.height = L(b, 'height', Q);
        this.mimeType = L(b, 'mimeType', M);
        this.codecs = L(b, 'codecs', M);
        this.c = L(b, 'FBProjection', M);
        this.f = d && 'main' == d.value;
        this.lang && (this.lang = Za(this.lang));
        c = Pc(this, b, yc);
        this.baseUrl = Qc(a.baseUrl, c);
        this.j = Pc(this, b, wc);
        !this.contentType &&
          this.mimeType &&
          (this.contentType = this.mimeType.split('/')[0]);
        this.g = a.b ? Uc(this, b, a.b) : K(this, b, Ac);
        this.h = a.c ? Uc(this, b, a.c) : K(this, b, Ec);
        this.i = a.f ? Uc(this, b, a.f) : K(this, b, Gc);
        this.a = Pc(this, b, uc);
        this.b = K(this, b, qc);
        !this.mimeType &&
          this.a.length &&
          ((this.mimeType = this.a[0].mimeType),
          !this.contentType &&
            this.mimeType &&
            (this.contentType = this.mimeType.split('/')[0]));
      };
      pc.prototype.parse = function (a, b) {
        this.value = L(b, 'value', M);
      };
      qc.prototype.parse = function (a, b) {
        this.a = L(b, 'schemeIdUri', M);
        this.lang = L(b, 'lang', M);
      };
      rc.prototype.parse = function (a, b) {
        this.id = L(b, 'id', M);
        this.lang = L(b, 'lang', M);
        this.contentType = L(b, 'contentType', M);
        this.lang && (this.lang = Za(this.lang));
      };
      uc.prototype.parse = function (a, b) {
        this.id = L(b, 'id', M);
        this.bandwidth = L(b, 'bandwidth', Q);
        this.width = L(b, 'width', Q, a.width);
        this.height = L(b, 'height', Q, a.height);
        this.mimeType = L(b, 'mimeType', M, a.mimeType);
        this.codecs = L(b, 'codecs', M, a.codecs);
        this.fbQualityLabel = L(b, 'FBQualityLabel', M);
        this.fbQualityClass = L(b, 'FBQualityClass', M);
        this.l = L(b, 'FBAbrPolicyTags', M);
        VideoPlayerShakaGlobalConfig.getBool('mpd_parse_mos_attributes', !1) &&
          ((this.o = L(
            b,
            'FBPlaybackResolutionMos',
            MosUtils.parsePlaybackMos
          )),
          (this.u = L(b, 'FBPlaybackResolutionMosConfidenceLevel', M)));
        VideoPlayerShakaGlobalConfig.getBool(
          'mpd_parse_frame_and_audio_sampling_rate',
          !1
        ) &&
          ((this.frameRate = L(b, 'frameRate', M)),
          (this.j = L(b, 'audioSamplingRate', Q)));
        this.lang = a.lang;
        var c = Pc(this, b, yc);
        this.baseUrl = Qc(a.baseUrl, c);
        VideoPlayerShakaGlobalConfig.getBool(
          'add_inline_initialization_resources',
          !1
        ) && ((this.g = K(this, b, sc)), (this.h = K(this, b, tc)));
        this.c = Pc(this, b, wc);
        this.i = K(this, b, vc);
        this.f = a.g ? Uc(this, b, a.g) : K(this, b, Ac);
        this.b = a.h ? Uc(this, b, a.h) : K(this, b, Ec);
        this.a = a.i ? Uc(this, b, a.i) : K(this, b, Gc);
        this.c = this.c.concat(a.j);
      };
      sc.prototype.parse = tc.prototype.parse = function (a, b) {
        if (b && b.firstChild) {
          var c = Vc(b);
          null != c && (this.data = Rb(c).buffer);
        }
      };
      wc.prototype.parse = function (a, b) {
        this.c = b;
        this.f = L(b, 'schemeIdUri', M);
        var c = L(b, 'cenc:default_KID', M);
        c && (this.b = c.replace(/[-]/g, ''));
        this.a = K(this, b, xc);
      };
      xc.prototype.parse = function (a, b) {
        var c = Vc(b);
        if (c) {
          this.psshBox = Rb(c);
          try {
            this.parsedPssh = new Xb(this.psshBox);
          } catch (d) {
            if (!(d instanceof RangeError)) throw d;
          }
        }
      };
      yc.prototype.parse = function (a, b) {
        var c = b.childNodes,
          d = '';
        if (1 == c.length) d = Vc(b);
        else
          for (var e = 0; e < c.length; e++)
            c[e].nodeType == Node.TEXT_NODE && (d += c[e].nodeValue);
        this.url = d;
      };
      zc.prototype.parse = function (a, b) {
        this.url = Vc(b);
      };
      Ac.prototype.parse = function (a, b) {
        this.baseUrl = a.baseUrl || this.baseUrl;
        this.s = L(b, 'timescale', Q, this.s);
        this.J = L(b, 'presentationTimeOffset', O, this.J);
        this.a = L(b, 'indexRange', Wc, this.a);
        this.f = L(b, 'FBFirstSegmentRange', Wc, this.f);
        this.b = K(this, b, Cc) || this.b;
        this.c = K(this, b, Dc) || this.c;
      };
      Cc.prototype.parse = function (a, b) {
        var c = L(b, 'sourceURL', M);
        this.url = Rc(a.baseUrl, c);
        this.a = L(b, 'range', Wc, N(a.a));
      };
      Dc.prototype.parse = function (a, b) {
        var c = L(b, 'sourceURL', M);
        this.url = Rc(a.baseUrl, c);
        this.a = L(b, 'range', Wc);
      };
      Ec.prototype.parse = function (a, b) {
        this.baseUrl = a.baseUrl || this.baseUrl;
        this.s = L(b, 'timescale', Q, this.s);
        this.J = L(b, 'presentationTimeOffset', O, this.J);
        this.F = L(b, 'duration', Q, this.F);
        var c = L(b, 'startNumber', Q);
        null != c && (this.c = c);
        this.b = K(this, b, Dc) || this.b;
        this.a = (c = Pc(this, b, Fc)) && 0 < c.length ? c : this.a;
        this.B = K(this, b, Hc) || this.B;
        VideoPlayerShakaGlobalConfig.getBool(
          'calculate_quick_dash_presentation_time_offset_from_timeline',
          !1
        ) &&
          ((c = VideoPlayerShakaGlobalConfig.getNumber(
            'calculate_quick_dash_presentation_time_offset_epsilon_ms',
            250
          )),
          this.B &&
            this.B.M[0] &&
            (this.J =
              1e3 < this.B.M[0].startTime
                ? this.B.M[0].startTime - c
                : this.J));
      };
      Fc.prototype.parse = function (a, b) {
        var c = L(b, 'media', M);
        this.b = Rc(a.baseUrl, c);
        this.a = L(b, 'mediaRange', Wc);
      };
      Gc.prototype.parse = function (a, b) {
        this.s = L(b, 'timescale', Q, this.s);
        this.J = L(b, 'presentationTimeOffset', O, this.J);
        this.F = L(b, 'duration', Q, this.F);
        var c = L(b, 'startNumber', O);
        null != c && (this.b = c);
        this.f = L(b, 'media', M, this.f);
        this.a = L(b, 'index', M, this.a);
        this.c = L(b, 'initialization', M, this.c);
        this.B = K(this, b, Hc) || this.B;
      };
      Hc.prototype.parse = function (a, b) {
        this.M = Pc(this, b, Ic);
      };
      Ic.prototype.parse = function (a, b) {
        this.startTime = L(b, 't', O);
        this.duration = L(b, 'd', O);
        this.repeat = L(b, 'r', Oc);
      };
      function Qc(a, b) {
        if (!b || 0 === b.length) return a;
        for (var c = [], d = 0; d < b.length; d++) {
          var e = b[d].url;
          null == a || 0 === a.length
            ? c.push(new J(e))
            : ((e = Rc(a.slice(0, 1), e)), c.push(e[0]));
        }
        return c;
      }
      function Rc(a, b) {
        if (!b) return a;
        var c = new J(b);
        return a
          ? a.map(function (a) {
              return a.resolve(c);
            })
          : [c];
      }
      function Uc(a, b, c) {
        var d = N(c);
        (b = Xc(b, c.constructor.TAG_NAME)) && d.parse(a, b);
        return d;
      }
      function K(a, b, c) {
        var d = null;
        if ((b = Xc(b, c.TAG_NAME))) (d = new c()), d.parse(a, b);
        return d;
      }
      function Xc(a, b) {
        for (var c = null, d = 0; d < a.childNodes.length; d++)
          if (a.childNodes[d].tagName == b) {
            if (c) return null;
            c = a.childNodes[d];
          }
        return c;
      }
      function Pc(a, b, c) {
        for (var d = [], e = 0; e < b.childNodes.length; e++)
          if (b.childNodes[e].tagName == c.TAG_NAME) {
            var f = new c();
            f.parse.call(f, a, b.childNodes[e]);
            d.push(f);
          }
        return d;
      }
      function Vc(a) {
        a = a.firstChild;
        return a.nodeType != Node.TEXT_NODE ? null : a.nodeValue;
      }
      function Bc(a) {
        return a
          ? a.map(function (a) {
              return a.clone();
            })
          : null;
      }
      function N(a) {
        return a ? a.clone() : null;
      }
      function L(a, b, c, d) {
        a = a.hasAttribute(b) ? c(a.getAttribute(b)) : null;
        return null != a ? a : void 0 !== d ? d : null;
      }
      function Nc(a) {
        if (!a) return null;
        a = Date.parse(a);
        return isNaN(a) ? null : Math.floor(a / 1e3);
      }
      function Mc(a) {
        if (!a) return null;
        var b =
          /^P(?:([0-9]*)Y)?(?:([0-9]*)M)?(?:([0-9]*)D)?(?:T(?:([0-9]*)H)?(?:([0-9]*)M)?(?:([0-9.]*)S)?)?$/.exec(
            a
          );
        if (!b) return null;
        a = 0;
        var c = O(b[1]);
        c && (a += 31536e3 * c);
        (c = O(b[2])) && (a += 2592e3 * c);
        (c = O(b[3])) && (a += 86400 * c);
        (c = O(b[4])) && (a += 3600 * c);
        (c = O(b[5])) && (a += 60 * c);
        b = window.parseFloat(b[6]);
        (b = isNaN(b) ? null : b) && (a += b);
        return a;
      }
      function Wc(a) {
        var b = /([0-9]+)-([0-9]+)/.exec(a);
        if (!b) return null;
        a = O(b[1]);
        if (null == a) return null;
        b = O(b[2]);
        return null == b ? null : new Jc(a, b);
      }
      function Oc(a) {
        a = window.parseInt(a, 10);
        return isNaN(a) ? null : a;
      }
      function Q(a) {
        a = window.parseInt(a, 10);
        return 0 < a ? a : null;
      }
      function O(a) {
        a = window.parseInt(a, 10);
        return 0 <= a ? a : null;
      }
      function Kc(a) {
        switch (a.toLowerCase()) {
          case 'true':
            return !0;
          case 'false':
            return !1;
          default:
            return null;
        }
      }
      function M(a) {
        return a;
      }
      function Yc(a, b) {
        this.url = a;
        this.b = b || new Ab();
        this.j = 0;
        this.g = -1;
        this.h = this.i = 0;
        this.a = null;
        this.c = new G();
        this.f = null;
        this.o = this.b.j;
        this.m = this.b.u;
      }
      q('shaka.util.AjaxRequest', Yc);
      function Ab() {
        this.body = null;
        this.b = 1;
        this.l = 1e3;
        this.f = 0;
        this.method = 'GET';
        this.g = 'arraybuffer';
        this.c = {};
        this.h = this.w = !1;
        this.da = this.a = this.A = null;
        this.o = !1;
        this.i = this.u = this.j = this.mimeType = null;
      }
      var Zc = !0;
      function $c(a) {
        ad(a);
        bd(a);
        a.b.body = null;
        a.c.destroy();
        a.c = null;
        a.f = null;
      }
      function bd(a) {
        a.a &&
          ((a.a.onload = null),
          (a.a.onreadystatechange = null),
          (a.a.onerror = null),
          (a.a.ontimeout = null));
        a.a = null;
      }
      function ad(a) {
        -1 !== a.g && (clearTimeout(a.g), (a.g = -1));
      }
      var cd = /(.*)\.(xx|fna)\.fbcdn\.net/,
        dd = /livestream-lookaside\.facebook\.com$/;
      Yc.prototype.l = function () {
        if (this.a) return this.c;
        if (0 == this.url.lastIndexOf('data:', 0)) {
          var a = this.url.split(':')[1].split(';').pop().split(','),
            b = a.pop(),
            b =
              'base64' == a.pop()
                ? window.atob(b.replace(/-/g, '+').replace(/_/g, '/'))
                : window.decodeURIComponent(b);
          'arraybuffer' == this.b.g && (b = Qb(b).buffer);
          a = JSON.parse(JSON.stringify(new XMLHttpRequest()));
          a.response = b;
          a.responseText = b.toString();
          b = this.c;
          b.resolve(a);
          $c(this);
          return b;
        }
        if (0 == this.url.lastIndexOf('idb:', 0)) return this.u();
        this.j++;
        this.i = performanceNow();
        this.h || (this.h = this.b.l);
        this.a = new XMLHttpRequest();
        var c = this.url,
          a = new J(c);
        Zc &&
          ((this.f && !this.f.supportsCaching()) || this.b.h) &&
          kc(a.a, '_', Date.now());
        c = cd.test(c);
        if (null != this.b.a && c) {
          var d = this.b.a,
            e = a.a;
          null != d.a &&
            ((d.h = d.a.getSegmentsToPush()),
            (d.f = d.a.getSegmentStartTime()),
            (d.g = d.a.getSegmentOffset()),
            (d.c = d.a.getPushVideoRepresentationID()),
            (d.b = d.a.getPushAudioRepresentationID()),
            (d.j = d.a.getUseLongCacheForManifest()));
          null != d.h && kc(e, '_nc_p_n', d.h);
          null != d.f
            ? kc(e, '_nc_p_ts', d.f)
            : null != d.g && kc(e, '_nc_p_o', d.g);
          null != d.c &&
            null != d.b &&
            (kc(e, '_nc_p_rid', d.c), kc(e, '_nc_p_arid', d.b));
          d.i && kc(e, '_nc_p_dbg', '1');
          d.j && kc(e, '_nc_nc', '1');
        }
        1 == this.b.o && c && kc(a.a, '_nc_playing', 1);
        c = a.toString();
        a = dd.test(a.ma);
        this.a.open(this.b.method, c, !0);
        this.a.responseType = this.b.g;
        this.a.timeout = this.b.f;
        this.a.withCredentials = this.b.w || a;
        setEventProperty(this.a, 'onload', this.fd.bind(this));
        setEventProperty(this.a, 'onreadystatechange', this.ld.bind(this));
        setEventProperty(this.a, 'onerror', this.dd.bind(this));
        setEventProperty(this.a, 'ontimeout', this.qd.bind(this));
        setEventProperty(this.a, 'onabort', this.$c.bind(this));
        for (b in this.b.c) this.a.setRequestHeader(b, this.b.c[b]);
        this.a.send(this.b.body);
        return this.c;
      };
      Yc.prototype.send = Yc.prototype.l;
      function ed(a, b, c) {
        b = Error(b);
        b.type = c;
        b.status = a.a.status;
        b.url = a.url;
        b.method = a.b.method;
        b.body = a.b.body;
        return b;
      }
      m = Yc.prototype;
      m.$c = function () {
        if (
          VideoPlayerShakaGlobalConfig.getBool(
            'fix_shaka_util_ajax_request_abort',
            !0
          )
        ) {
          var a = ed(this, 'Request aborted.', 'aborted');
          this.c.reject(a);
          $c(this);
        }
      };
      m.fd = function (a) {
        if (this.f) {
          var b = VideoPlayerResourceTimer.getResourceTimingEntry(
            this.url,
            this.i,
            performanceNow()
          );
          this.f.sample(
            performanceNow() - this.i,
            a.loaded || (this.a.response && this.a.response.byteLength) || 0,
            this.b.mimeType ? 'v' === this.b.mimeType.charAt(0) : !1,
            b,
            this.o,
            this.m,
            VideoPlayerShakaGlobalConfig.getBool(
              'evaluate_abr_on_fetch_end',
              !1
            )
          );
        }
        a = [403];
        200 <= this.a.status && 299 >= this.a.status
          ? (this.c.resolve(this.a), $c(this))
          : !VideoPlayerShakaGlobalConfig.getBool(
              'remove_ajax_resend_internal',
              !0
            ) &&
            this.j < this.b.b &&
            -1 === a.indexOf(this.a.status)
          ? fd(this)
          : ((a = ed(this, 'HTTP error.', 'net')), this.c.reject(a), $c(this));
      };
      m.ld = function () {
        if (
          this.a.readyState == XMLHttpRequest.HEADERS_RECEIVED &&
          ((this.a.Ra = Date.now() - this.i),
          this.b.a && this.b.da && this.b.da.addPushDataFromXHR(this.a),
          this.b.i && this.b.i.handleXHR(this.a),
          VideoClientEdgeCooperation.updateFromXHR(this.a),
          this.b.h)
        ) {
          var a = Date.parse(this.a.getResponseHeader('Date'));
          a && (Ga = a - Date.now());
        }
      };
      m.dd = function () {
        var a = ed(this, 'Network failure.', 'net');
        this.c.reject(a);
        $c(this);
      };
      m.qd = function () {
        if (
          !VideoPlayerShakaGlobalConfig.getBool(
            'remove_ajax_resend_internal',
            !0
          ) &&
          this.j < this.b.b
        )
          fd(this);
        else {
          var a = ed(this, 'Request timed out.', 'net');
          this.c.reject(a);
          $c(this);
        }
      };
      function fd(a) {
        bd(a);
        a.g = setTimeout(
          function () {
            this.g = -1;
            this.l();
          }.bind(a),
          a.h * (1 + 0.5 * (2 * Math.random() - 1))
        );
        a.h *= 2;
      }
      function I(a, b, c, d) {
        this.c = b;
        this.startByte = c || 0;
        this.baseUrl = this.toString();
        this.endByte = null != d ? d : null;
        this.f = null;
        this.j = 0;
        this.u = !1;
        this.g = null;
        this.l = a;
        this.h = null;
        this.i = !1;
        this.b = this.a = null;
      }
      q('shaka.util.FailoverUri', I);
      I.prototype.o = function (a) {
        this.u = a;
      };
      I.prototype.setShouldReadXFbVideoBroadcastEndedHeader = I.prototype.o;
      I.prototype.A = function () {
        return this.j;
      };
      I.prototype.getFbVideoBroadcastEndedResponseHeader = I.prototype.A;
      I.prototype.C = function () {
        return this.startByte;
      };
      I.prototype.getStartByte = I.prototype.C;
      I.prototype.w = function () {
        return this.endByte;
      };
      I.prototype.getEndByte = I.prototype.w;
      function gd(a, b) {
        return a && 0 !== a.length
          ? a.map(function (a) {
              return a.resolve(b);
            })
          : [b];
      }
      m = I.prototype;
      m.fetch = function (a, b, c, d, e, f, g, h) {
        return this.f
          ? this.f
          : (this.f = hd(this, 0, a || new Ab(), b, c, d, e, f, g, h));
      };
      m.stream = function (a, b, c, d, e, f, g, h, k) {
        return id(this, 0, a || new Ab(), b, c, d, e, f, g, h, k);
      };
      function hd(a, b, c, d, e, f, g, h, k, l) {
        return id(a, b, c, d, e, f, g, h, k, l).then(function (a) {
          var b,
            c = function () {
              return a.read().then(function (a) {
                var d = a.value;
                if (a.done) return b || new ArrayBuffer(0);
                d &&
                  ('string' === typeof d
                    ? (b = (b || '') + d)
                    : (b = concatArrayBuffer(b || new ArrayBuffer(0), d)));
                return c();
              });
            };
          return c();
        });
      }
      m.Ha = function () {
        if (this.g) {
          this.a = this.f = null;
          var a = this.g;
          ad(a);
          if (
            a.a &&
            a.a.readyState != XMLHttpRequest.DONE &&
            (a.a.abort(),
            !VideoPlayerShakaGlobalConfig.getBool(
              'fix_shaka_util_ajax_request_abort',
              !0
            ))
          ) {
            var b = ed(a, 'Request aborted.', 'aborted');
            a.c.reject(b);
            $c(a);
          }
          this.h = this.g = null;
        }
        this.b &&
          (this.b.abortRequest(jd(this)),
          VideoPlayerShakaGlobalConfig.getBool(
            'fixing_scheduler_disable_leaks',
            !0
          ) && (this.b = null));
      };
      function id(a, b, c, d, e, f, g, h, k, l, n) {
        a.b = l || null;
        var p;
        e &&
          (c.a && (c.a.i = !0),
          (l = 0),
          c.da && (l = c.da.getPushCountForUrl(a.c[b].toString())),
          (p = e.getOperationLogger('request')) &&
            p
              .setReason(k || null)
              .setPushed(l)
              .setType(h || null)
              .setInitiator('shaka')
              .start(),
          f && (p = p.setParentLogger(f)));
        var v = performanceNow();
        a.a = null;
        g && (c.j = g);
        e && (c.u = e);
        var w = kd(a, a.c[b], c);
        k = null;
        a.i = !1;
        var C = VideoDashPrefetchCache.getCacheValue(w);
        C &&
          ((k = C),
          (a.i = !0),
          p &&
            (p.setConnectionQualityLevel(
              VideoDashPrefetchCache.getConnectionQualityLevel(w)
            ),
            p.setInitiator('prefetch')));
        if (!C && n)
          return n.getStream(jd(a)).then(function (a) {
            return a.getReader();
          });
        n = null;
        if (a.b && !a.b.isDisabled() && !k)
          try {
            (k = n = a.b.getPromise(jd(a))) ? (p = null) : a.b.disable();
          } catch (P) {
            e &&
              e.getEventLogger('request_info_not_found').setResource(w).log();
          }
        k || ((a.g = new Yc(w, c)), (a.j = 0), d && (a.g.f = d), (k = a.g.l()));
        p && p.setResource(w);
        f && f.setResource(w);
        var aa = !1,
          ba = k.then(
            H(a, function (a) {
              !this.b || this.b.isDisabled() || this.a
                ? this.a ||
                  (this.a = VideoPlayerResourceTimer.getResourceTimingEntry(
                    w,
                    this.i ? 0 : v,
                    performanceNow()
                  ))
                : (this.a = this.b.getResourceTimingEntry(w));
              VideoPlayerShakaGlobalConfig.getBool(
                'sample_prefetch_bandwidth',
                !1
              ) &&
                C &&
                this.a &&
                0 < this.a.timeToLastByte &&
                d &&
                d.sample(
                  this.a.timeToLastByte,
                  a.response.byteLength,
                  'v' === h.charAt(0),
                  this.a,
                  g,
                  e,
                  !0
                );
              if (this.u)
                try {
                  this.j = parseInt(
                    a.getResponseHeader('x-fb-video-broadcast-ended'),
                    10
                  );
                } catch (c) {}
              this.b = this.h = this.g = this.f = null;
              this.h = a.a ? new J(a.a) : this.c[b];
              a.response.Ra = a.Ra;
              p &&
                ((p = p
                  .setLength(a.response.byteLength || a.response.length)
                  .setWasPrefetchCacheHit(this.i)),
                null != this.a &&
                  ((p = p
                    .setTimeToLastByte(Math.round(this.a.timeToLastByte))
                    .setTimeToFirstByte(Math.round(this.a.timeToFirstByte))
                    .setTimeToRequestStart(
                      Math.round(this.a.timeToRequestStart)
                    )),
                  2e3 <= this.a.timeToFirstByte &&
                    -1 < w.indexOf('akamaihd') &&
                    logLongAkamaiRequest(
                      a.getResponseHeader('Debug-Info') +
                        ', TTFB-> ' +
                        this.a.timeToFirstByte +
                        ', TTRS-> ' +
                        this.a.timeToRequestStart
                    )),
                p.log());
              return Promise.resolve({ value: a.response, done: !1 });
            })
          ),
          ba = ba.catch(
            H(a, function (a) {
              if (this.f && b + 1 < this.c.length)
                return (this.f = hd(this, b + 1, c, d));
              this.b = this.a = this.f = this.g = null;
              p && p.setError(a).log();
              return Promise.reject(a);
            })
          );
        return Promise.resolve({
          cancel: function () {},
          read: function () {
            return aa
              ? Promise.resolve({ value: null, done: !0 })
              : ba.then(function (a) {
                  aa = !0;
                  return a;
                });
          },
        });
      }
      function jd(a) {
        return {
          baseUrl: a.toString(),
          startByte: a.startByte,
          endByte: a.endByte,
        };
      }
      m.clone = function () {
        return new I(
          this.l,
          this.c.map(function (a) {
            return a.clone();
          }),
          this.startByte,
          this.endByte
        );
      };
      m.getResourceTimingEntry = function () {
        return this.a;
      };
      function kd(a, b, c) {
        var d = b.toString();
        if (a.startByte || a.endByte)
          (b = b.ma),
            !b.endsWith('fbcdn.net') ||
            b.startsWith('interncache') ||
            b.endsWith('ak.fbcdn.net')
              ? c &&
                (c.c.Range =
                  'bytes=' +
                  (a.startByte + '-' + (null != a.endByte ? a.endByte : '')))
              : ((d += '&bytestart=' + a.startByte),
                (d += null !== a.endByte ? '&byteend=' + a.endByte : ''));
        a.l && c && (d = a.l(d, c.c) || d);
        return d;
      }
      function Bb(a) {
        return kd(a, a.c[0]);
      }
      m.toString = function () {
        return this.c[0].toString();
      };
      function ld(a, b, c, d) {
        this.a = new Ab();
        b = null != b ? b : pa;
        this.a.g = 'text';
        this.a.b = 3;
        this.a.f = 1e3 * b;
        c && (this.a.a = c);
        d && (this.a.da = d);
        this.a.h = !0;
        this.b = a;
      }
      function md(a, b) {
        var c = a.b,
          d = VideoPlayerShakaGlobalConfig.getBool(
            'detect_live_stream_ended_from_response_headers',
            !1
          );
        c.o(d);
        return c.fetch(a.a, null, b, null, null, 'manifest').then(function (a) {
          a instanceof ArrayBuffer &&
            (a = String.fromCharCode.apply(null, new Uint8Array(a)));
          var f = d && !!c.j,
            g;
          b && (g = b.getOperationLogger('parse_manifest').start());
          a = lc(a, c.c, [c.h]);
          g && g.log();
          a &&
            'dynamic' === a.type &&
            f &&
            ((a.type = 'static'),
            b &&
              BanzaiODS.bumpEntityKey(
                'videos.www.shaka',
                'changed_manifest_to_dynamic_off_headers'
              ));
          if (a) return Promise.resolve(a);
          f = Error('MPD parse failure.');
          f.type = 'dash';
          return Promise.reject(f);
        });
      }
      function nd(a) {
        this.a = null;
        this.h = a;
        this.c = this.g = this.f = null;
        this.i = !1;
        this.j = this.b = null;
      }
      function od(a, b) {
        this.a = a;
        this.b = b || null;
      }
      od.prototype.destroy = function () {
        this.a && (this.a.Ha(), (this.a = null));
        this.b = null;
      };
      od.prototype.create = function (a, b) {
        var c = null;
        b && ((c = new Ab()), (c.da = b));
        return !this.b && this.a
          ? this.a.fetch(c, null, a, null, null, 'init')
          : Promise.resolve(this.b);
      };
      od.prototype.c = function () {
        return this.a;
      };
      od.prototype.getFailoverUri = od.prototype.c;
      function pd(a, b) {
        this.segmentOriginalEndTime = a;
        this.gapDistance = b;
      }
      function qd(a, b, c, d, e, f) {
        this.startTime = a;
        this.endTime = b;
        this.url = c;
        this.unscaledStartTime = d;
        this.unscaledDuration = e;
        this.debugInfo = (this.timescaledGapInfo = f || null)
          ? {
              endTime: this.timescaledGapInfo.segmentOriginalEndTime,
              delta: this.timescaledGapInfo.gapDistance,
            }
          : null;
      }
      function rd(a, b, c) {
        return new qd(
          b,
          c,
          a.url,
          a.unscaledStartTime,
          a.unscaledDuration,
          a.timescaledGapInfo
        );
      }
      function Fb(a, b) {
        if (
          VideoPlayerShakaGlobalConfig.getBool(
            'use_binary_search_when_finding_segment_references',
            !1
          )
        )
          return BinarySearch.findIndexInArray(a, b, function (a, b) {
            return b >= a.startTime && (null == a.endTime || b < a.endTime)
              ? 0
              : a.startTime - b;
          });
        for (var c = a.length - 1; 0 <= c; --c) {
          var d = a[c];
          if (b >= d.startTime && (null == d.endTime || b < d.endTime))
            return c;
        }
        return -1;
      }
      function sd(a, b) {
        return a.map(function (a) {
          return rd(
            a,
            a.startTime + b,
            null != a.endTime ? a.endTime + b : null
          );
        });
      }
      function td(a, b, c, d) {
        for (var e = b.a, f = [], g = 0; g < d; ++g) {
          var h = g + c,
            k = (h - 1) * e.F,
            l = k / e.s,
            n = (k + e.F) / e.s,
            h = ud(a, b, e.b + h - 1, k);
          if (!h) return null;
          f.push(new qd(l, n, h, k, e.F || 0));
        }
        return f;
      }
      function ud(a, b, c, d) {
        if (!b.a) return null;
        var e = b.a.f;
        if (!e) return b.baseUrl ? new I(a, b.baseUrl, 0, null) : null;
        c = vd(e, b.id, c, b.bandwidth, d);
        if (!c) return null;
        b = gd(b.baseUrl, c);
        return new I(a, b, 0, null);
      }
      function vd(a, b, c, d, e) {
        var f = { RepresentationID: b, Number: c, Bandwidth: d, Time: e };
        a = a.replace(
          /\$(RepresentationID|Number|Bandwidth|Time)?(?:%0([0-9]+)d)?\$/g,
          function (a, b, c) {
            if ('$$' == a) return '$';
            var d = f[b];
            if (null == d) return a;
            'RepresentationID' == b && c && (c = void 0);
            a = d.toString();
            c = window.parseInt(c, 10) || 1;
            c = Math.max(0, c - a.length);
            return Array(c + 1).join('0') + a;
          }
        );
        try {
          return new J(a);
        } catch (g) {
          if (g instanceof URIError) return null;
          throw g;
        }
      }
      function zd(a, b, c) {
        var d = 0;
        c *= b;
        a = a.M;
        var e = [],
          f = VideoPlayerShakaGlobalConfig.getNumber(
            'live_rewind_templated_last_x_segments_only',
            0
          );
        if (f) {
          for (var g = 0; g < a.length; ++g) {
            if (!a[g].duration) return e;
            var h = a[g].startTime,
              h = null != h ? h : d,
              k = a[g].repeat || 0;
            if (0 > k)
              if (((k = a[g].duration), g + 1 === a.length))
                var l = a[0].startTime + c - h,
                  k = Math.ceil(l / k) - 1;
              else (l = a[g + 1].startTime), (k = Math.ceil((l - h) / k) - 1);
            a[g].startTime = h;
            a[g].repeat = k;
            d = a[g].startTime + a[g].duration * (a[g].repeat + 1);
          }
          for (g = a.length - 1; -1 < g; --g)
            for (var n = 0; n <= a[g].repeat; ++n)
              if (
                ((h = a[g].startTime + a[g].duration * (a[g].repeat - n)),
                (d = h + a[g].duration),
                (c = null),
                e.length &&
                  d != e[e.length - 1].start &&
                  ((l = e[e.length - 1].start - d), (c = new pd(d / b, l / b))),
                e.push({ start: h, end: d }),
                c && (e[e.length - 1].timescaledGapInfo = c),
                e.length === f)
              )
                return (e = e.reverse());
          return e.reverse();
        }
        for (g = 0; g < a.length && a[g].duration; ++g)
          for (
            h = a[g].startTime,
              h = null != h ? h : d,
              k = a[g].repeat || 0,
              0 > k &&
                ((k = a[g].duration),
                g + 1 === a.length
                  ? ((l = a[0].startTime + c - h), (k = Math.ceil(l / k) - 1))
                  : ((l = a[g + 1].startTime),
                    (k = Math.ceil((l - h) / k) - 1))),
              0 < e.length &&
                h != d &&
                ((l = h - d),
                (f = e[e.length - 1]),
                (f.timescaledGapInfo = new pd(d / b, l / b)),
                (f.end = h)),
              n = 0;
            n <= k;
            ++n
          )
            (d = h + a[g].duration), e.push({ start: h, end: d }), (h = d);
        return e;
      }
      function Ad(a, b, c, d) {
        this.w = a;
        this.l = b;
        this.c = c;
        this.$ = 0;
        this.s = c.s || 0;
        this.A = !1;
        this.i = null;
        this.u = d;
        this.j = c.J || 0;
        this.b = 0;
        this.h = this.g = null;
        a: {
          b = c.B;
          var e = 0;
          a = (a.duration || 0) * this.s;
          c = b.M;
          for (d = 0; d < c.length; ++d) {
            if (!c[d].duration) {
              b.M = c.slice(0, d);
              break a;
            }
            var f = c[d].startTime,
              e = null != f ? f : e,
              f = c[d].repeat || 0;
            0 > f &&
              ((f = c[d].duration),
              (f =
                d + 1 === c.length
                  ? Math.ceil((c[0].startTime + a - e) / f) - 1
                  : Math.ceil((c[d + 1].startTime - e) / f) - 1));
            c[d].startTime = e;
            c[d].repeat = f;
            e = c[d].startTime + c[d].duration * (c[d].repeat + 1);
          }
        }
        this.f = [];
        this.o = VideoPlayerShakaGlobalConfig.getNumber(
          'timeline_segment_index_max_index_cache_length',
          0
        );
        this.b = ShakaTimelineSegmentIndexUtils.length(this.c.B.M);
      }
      Ad.prototype.destroy = function () {
        this.b = this.c = this.l = this.w = null;
        this.i = function () {};
        this.f = this.u = null;
      };
      m = Ad.prototype;
      m.length = function () {
        return this.b;
      };
      function Bd(a, b) {
        for (var c = a.f.length - 1; -1 < c; c--)
          if (a.f[c].index === b) {
            var d = a.f[c];
            a.f.splice(c, 1);
            a.f.push(d);
            return d.wd;
          }
        return null;
      }
      function Cd(a, b, c) {
        var d = [];
        if (a.o && 1 === c - b) {
          var e = Bd(a, b);
          if (e) return [e];
        }
        var f = -a.j / a.s + a.$;
        ShakaTimelineSegmentIndexUtils.getSegments(
          b,
          c,
          a.c.B.M,
          function (a, e, k, l, n) {
            if (l) {
              var p = d[d.length - 1];
              p &&
                ((p.timescaledGapInfo = new pd(n / this.s, l / this.s)),
                (p.debugInfo = {
                  endTime: p.timescaledGapInfo.segmentOriginalEndTime,
                  delta: p.timescaledGapInfo.gapDistance,
                }),
                (d[d.length - 1] = rd(p, p.startTime, a / this.s + f)));
            }
            k = ud(this.u, this.l, k + this.c.b, a);
            if (!k)
              throw (
                ((a = Error('Failed to generate media URL.')),
                (a.type = 'dash'),
                a)
              );
            a = new qd(a / this.s + f, e / this.s + f, k, a, e - a, null);
            e = b + d.length;
            d.push(a);
            !this.o ||
              (0 !== e && e !== this.b - 1 && 1 !== c - b) ||
              Bd(this, e) ||
              (this.f.length + 1 > this.o && this.f.shift(),
              this.f.push({ index: e, wd: a }));
          }.bind(a)
        );
        return d;
      }
      function Dd(a, b) {
        var c = b.unscaledStartTime,
          d = b.unscaledEndTime,
          e = b.delta,
          f = b.previousEndTime;
        if (e) var g = new pd(f / a.s, e / a.s);
        e = ud(a.u, a.l, b.segmentReplacement + a.c.b, c);
        if (!e)
          throw (
            ((c = Error('Failed to generate media URL.')), (c.type = 'dash'), c)
          );
        f = -a.j / a.s + a.$;
        return new qd(c / a.s + f, d / a.s + f, e, c, d - c, g || null);
      }
      m.getSegments = function () {
        return Cd(this, 0, this.b) || [];
      };
      m.first = function () {
        if (!this.b) throw new RangeError('Index out of range.');
        if (
          VideoPlayerShakaGlobalConfig.getBool(
            'optimize_common_segment_generations',
            !1
          )
        ) {
          if (this.g) return this.g;
          var a = ShakaTimelineSegmentIndexUtils.first(this.c.B.M, this.b);
          return (this.g = Dd(this, a));
        }
        return Cd(this, 0, 1)[0];
      };
      m.last = function () {
        if (!this.b) throw new RangeError('Index out of range.');
        if (
          VideoPlayerShakaGlobalConfig.getBool(
            'optimize_common_segment_generations',
            !1
          )
        ) {
          if (this.h) return this.h;
          var a = ShakaTimelineSegmentIndexUtils.last(this.c.B.M, this.b);
          return (this.h = Dd(this, a));
        }
        return Cd(this, this.b - 1, this.b)[0];
      };
      m.get = function (a) {
        if (!this.b || 0 > a || a >= this.b)
          throw new RangeError('Index out of range.');
        return VideoPlayerShakaGlobalConfig.getBool(
          'optimize_common_segment_generations',
          !1
        )
          ? ((a = ShakaTimelineSegmentIndexUtils.get(this.c.B.M, a, this.b)),
            Dd(this, a))
          : Cd(this, a, a + 1)[0];
      };
      m.Bc = function (a) {
        a = this.findIndex(a);
        return VideoPlayerShakaGlobalConfig.getBool(
          'optimize_common_segment_generations',
          !1
        )
          ? 0 <= a
            ? this.get(a)
            : null
          : 0 <= a
          ? Cd(this, a, a + 1)[0]
          : null;
      };
      m.findIndex = function (a) {
        return ShakaTimelineSegmentIndexUtils.findIndex(
          a,
          this.c.B.M,
          this.s,
          -this.j / this.s + this.$
        );
      };
      m.qb = function (a) {
        var b = a.length();
        if (
          0 !== b &&
          (b !== this.b ||
            (0 !== this.b && a.last().endTime !== this.last().endTime)) &&
          !(
            VideoPlayerShakaGlobalConfig.getBool(
              'fix_integration_on_earlier_endtime',
              !1
            ) && a.last().endTime <= this.last().endTime
          ) &&
          ((this.A = !1),
          (b = a.last()),
          null != b.endTime &&
            b.endTime < this.last().endTime &&
            b.endTime < this.first().startTime &&
            (this.A = !0),
          VideoPlayerShakaGlobalConfig.getBool(
            'integrate_segment_timeline_time_points',
            !1
          )
            ? (this.c.B.M = ShakaTimelineSegmentIndexUtils.integrateTimePoints(
                this.c.B.M,
                a.c.B.M
              ))
            : ((this.w = a.w),
              (this.l = a.l),
              (this.c = a.c),
              (this.j = this.c.J || 0),
              (this.s = this.c.s || 0)),
          (this.f = []),
          (this.h = this.g = null),
          (this.b = ShakaTimelineSegmentIndexUtils.length(this.c.B.M)),
          this.first(),
          this.last(),
          (a = !VideoPlayerShakaGlobalConfig.getBool(
            'no_provide_segments_to_on_segments_updated_listeners',
            !1
          )),
          this.i)
        ) {
          var c;
          a && (c = this.getSegments());
          this.i(c);
        }
      };
      m.Ac = function (a) {
        var b = a - this.$;
        if (0 == b) return 0;
        this.$ = a;
        this.h = this.g = null;
        this.f = [];
        return b;
      };
      m.Dc = function () {
        return this.b
          ? { start: this.first().startTime, end: this.last().endTime }
          : { start: 0, end: 0 };
      };
      m.getSeekRangeGaps = function () {
        return ShakaTimelineSegmentIndexUtils.getSeekRangeGaps(
          this.c.B.M,
          this.s,
          -this.j / this.s + this.$
        );
      };
      m.mb = function () {
        return this.A;
      };
      m.Ec = function (a) {
        a = a ? this.findIndex(a) : 0;
        return Cd(this, a, this.b).map(function (a, c) {
          return Ed(a, c);
        });
      };
      m.Cc = function () {
        return this.b ? Ed(this.last(), this.b - 1) : null;
      };
      function Ed(a, b) {
        return {
          startTime: a.startTime,
          endTime: null === a.endTime ? Number.POSITIVE_INFINITY : a.endTime,
          segmentID: b,
          requestInfo: jd(a.url),
        };
      }
      m.Fc = function (a) {
        this.i = a;
      };
      m.zc = function () {
        this.i = null;
      };
      m.cb = function () {};
      function Fd() {}
      Fd.prototype.parse = function (a, b, c, d, e) {
        var f = null;
        try {
          a: {
            var g = [],
              h = new Ha(a),
              k = t(h);
            if (1936286840 != t(h)) f = null;
            else {
              1 == k && (k = La(h));
              var l = Ka(h);
              Na(h, 3);
              Na(h, 4);
              var n = t(h);
              if (0 == n) f = null;
              else {
                var p, v;
                0 == l ? ((p = t(h)), (v = t(h))) : ((p = La(h)), (v = La(h)));
                Na(h, 2);
                var w = h.b.getUint16(h.a, h.c);
                h.a += 2;
                a = p;
                b = b + k + v;
                for (v = k = 0; v < w; v++) {
                  var C = t(h);
                  p = (C & 2147483648) >>> 31;
                  var l = C & 2147483647,
                    P = t(h);
                  t(h);
                  if (1 == p) {
                    f = null;
                    break a;
                  }
                  var aa;
                  aa = 0 == v && e ? e : new I(d, c, b, b + l - 1);
                  p = a / n;
                  var ba = (a + P) / n;
                  0 === v && (k = p);
                  g.push(new qd(p - k, ba - k, aa, a, P));
                  a += P;
                  b += l;
                }
                g.s = n;
                f = g;
              }
            }
          }
        } catch (va) {
          if (!(va instanceof RangeError)) throw va;
        }
        return f;
      };
      function R(a) {
        this.a = a;
        this.s = this.a.s;
        this.g = [];
      }
      R.prototype.H = function () {
        return !!this.g[this.g.length - 1];
      };
      R.prototype.lastPollHadChanges = R.prototype.H;
      R.prototype.G = function () {
        var a = this.g,
          b = a.lastIndexOf(!0);
        if (1 > b) return 0;
        a = a.lastIndexOf(!0, b - 1);
        return 0 > a ? 0 : b - a - 1;
      };
      R.prototype.getFetchesBetweenRecentChanges = R.prototype.G;
      R.prototype.u = function () {
        return Math.floor((this.g.length - 1 - this.g.lastIndexOf(!0)) / 2);
      };
      R.prototype.getConsecutiveUpdatesWithoutChanges = R.prototype.u;
      R.prototype.D = function () {
        return this.g.length - 1 - this.g.lastIndexOf(!1);
      };
      R.prototype.getConsecutiveUpdatesWithChanges = R.prototype.D;
      R.prototype.destroy = function () {
        this.a.destroy();
        this.a = null;
      };
      R.prototype.length = function () {
        return this.a.length();
      };
      R.prototype.getSegments = function () {
        return this.a.getSegments();
      };
      R.prototype.getSegments = R.prototype.getSegments;
      R.prototype.first = function () {
        return this.a.first();
      };
      R.prototype.last = function () {
        return this.a.last();
      };
      R.prototype.last = R.prototype.last;
      m = R.prototype;
      m.get = function (a) {
        return this.a.get(a);
      };
      m.Ta = function (a) {
        return this.a.Bc(a);
      };
      m.findIndex = function (a) {
        return this.a.findIndex(a);
      };
      m.Bb = function (a) {
        this.a.qb(a.a);
        return !0;
      };
      m.La = function (a) {
        return this.a.Ac(a);
      };
      m.Ab = function () {
        return this.a.Dc();
      };
      m.getSeekRangeGaps = function () {
        return this.a.getSeekRangeGaps();
      };
      R.prototype.getSeekRangeGaps = R.prototype.getSeekRangeGaps;
      R.prototype.mb = function () {
        return this.a.mb();
      };
      function Gd(a, b) {
        a.a.Fc(b);
      }
      function S(a, b, c, d) {
        R.call(this, a);
        this.i = b;
        this.C = c;
        this.h = d;
        this.duration =
          this.i.b ||
          this.i.a.reduce(function (a, b) {
            return null == b.duration ? NaN : a + b.duration;
          }, 0) ||
          0;
        this.b = this.o = this.f = null;
        Hd(this);
      }
      r(S, R);
      S.prototype.destroy = function () {
        this.C = this.i = null;
        R.prototype.destroy.call(this);
      };
      S.prototype.Ta = function (a) {
        Id(this, Fa() / 1e3);
        return R.prototype.Ta.call(this, a);
      };
      S.prototype.Bb = function (a) {
        if (!(a instanceof S)) return !1;
        this.a.qb(a.a);
        this.duration = Math.max(this.duration, a.duration);
        null == this.f ? ((this.h = a.h), Hd(this)) : Jd(this);
        return !0;
      };
      function Hd(a) {
        Jd(a);
        if (0 != a.length()) {
          a.length();
          var b =
            null != a.last().endTime ? a.last().endTime : a.last().startTime;
          if (a.i.c > a.h) a.f = b;
          else {
            var c = a.h - (a.i.c + a.C.start);
            0 > c
              ? (a.f = b)
              : c < Math.max(a.last().startTime, a.last().endTime || 0)
              ? (a.last(), (a.f = b))
              : (a.f = c);
          }
          a.o = a.last().startTime;
          a.b = a.first().startTime;
        }
      }
      S.prototype.La = function (a) {
        a = R.prototype.La.call(this, a);
        VideoPlayerShakaGlobalConfig.getBool('no_correct_delta_warning', !1) ||
          Math.min.apply(
            null,
            this.getSegments()
              .filter(function (a) {
                return null != a.endTime;
              })
              .map(function (a) {
                return a.endTime - a.startTime;
              })
          );
        null != this.f && ((this.o += a), (this.b += a), (this.f += a));
        return a;
      };
      S.prototype.Ab = function () {
        return Kd(this, Fa() / 1e3);
      };
      function Kd(a, b) {
        Id(a, b);
        if (null == a.f || null == a.o || null == a.b)
          return { start: 0, end: 0 };
        var c = Number.POSITIVE_INFINITY;
        a.duration && (c = a.duration);
        var d = b - a.h,
          e = a.f + d;
        null != a.i.f && ((e = e - a.b - a.i.f), 0 < e && (a.b += e));
        a.b = Math.min(a.b, c);
        d = a.o + d;
        if (d < a.b) return { start: a.b, end: a.b };
        d =
          0 < a.length()
            ? null != a.last().endTime
              ? Math.min(d, a.last().endTime)
              : d
            : a.b;
        d = Math.max(d, a.b);
        d = Math.min(d, c);
        return { start: a.b, end: d };
      }
      function Id(a, b) {
        if (a.a.a && (Jd(a), null != a.i.f))
          if (null == a.f) a.length();
          else {
            for (var c = a.f + (b - a.h), d = 0, e = 0; e < a.a.a.length; ++e) {
              var f = null;
              e < a.a.a.length - 1
                ? (f = a.a.a[e + 1].endTime)
                : ((f = a.a.a[e]),
                  (f =
                    null != f.endTime
                      ? f.endTime + (f.endTime - f.startTime)
                      : null));
              if (null != f && f < c - a.i.f) ++d;
              else break;
            }
            0 < d && a.a.a.splice(0, d);
          }
      }
      function Jd(a) {
        if (a.duration && a.a.a) {
          for (var b = 0, c = a.a.a.length - 1; 0 <= c; --c)
            if (a.a.a[c].startTime > a.duration) ++b;
            else break;
          0 < b && a.a.a.splice(-b);
        }
      }
      function T(a, b) {
        this.a = a;
        this.$ = 0;
        this.s = b;
        this.b = !1;
        this.f = function () {};
      }
      T.prototype.destroy = function () {
        this.a = null;
      };
      T.prototype.length = function () {
        return this.a.length;
      };
      T.prototype.getSegments = function () {
        return (this.a || []).slice();
      };
      T.prototype.getSegments = T.prototype.getSegments;
      T.prototype.first = function () {
        if (0 == this.a.length)
          throw new RangeError(
            'SegmentIndexBase: There is no first SegmentReference.'
          );
        return this.a[0];
      };
      T.prototype.last = function () {
        if (0 == this.a.length)
          throw new RangeError(
            'SegmentIndexBase: There is no last SegmentReference.'
          );
        return this.a[this.a.length - 1];
      };
      T.prototype.last = T.prototype.last;
      m = T.prototype;
      m.get = function (a) {
        if (0 > a || a >= this.a.length)
          throw new RangeError(
            'SegmentIndexBase: The specified index is out of range.'
          );
        return this.a[a];
      };
      m.Bc = function (a) {
        a = this.findIndex(a);
        return 0 <= a ? this.a[a] : null;
      };
      m.findIndex = function (a) {
        return Fb(this.a, a);
      };
      m.qb = function (a) {
        this.$ != a.$ && (a = new T(sd(a.a, this.$ - a.$), a.s));
        if (0 == this.length()) (this.a = a.a.slice(0)), this.cb();
        else if (0 != a.length() && null != this.last().endTime)
          if (
            null != a.last().endTime &&
            a.last().endTime < this.last().endTime
          )
            VideoPlayerShakaGlobalConfig.getBool('fix_manifest_wrapped', !0)
              ? a.last().endTime < this.first().startTime && (this.b = !0)
              : (this.b = !0);
          else {
            this.b = !1;
            if (this.last().endTime <= a.first().startTime)
              var b = rd(
                  this.last(),
                  this.last().startTime,
                  a.first().startTime
                ),
                b = this.a.slice(0, -1).concat([b]);
            else {
              var c;
              for (
                c = 0;
                c < this.a.length &&
                !(this.a[c].endTime >= a.first().startTime);
                ++c
              );
              this.a[c].startTime < a.first().startTime
                ? ((b = rd(
                    this.a[c],
                    this.a[c].startTime,
                    a.first().startTime
                  )),
                  (b = this.a.slice(0, c).concat([b])))
                : (this.first().startTime > a.first().startTime || a.first(),
                  (b = this.a.slice(0, c)));
            }
            this.a = b.concat(a.a);
            this.f(a.a);
            this.cb();
          }
      };
      m.Ac = function (a) {
        var b = a - this.$;
        if (0 == b) return 0;
        this.a = sd(this.a, b);
        this.cb();
        this.$ = a;
        return b;
      };
      m.Dc = function () {
        return 0 < this.length()
          ? { start: this.first().startTime, end: this.last().endTime }
          : { start: 0, end: 0 };
      };
      m.getSeekRangeGaps = function () {
        return getSeekRangeGapsFromShakaReferences(this.a, this.s);
      };
      T.prototype.getSeekRangeGaps = T.prototype.getSeekRangeGaps;
      m = T.prototype;
      m.mb = function () {
        return this.b;
      };
      m.Ec = function (a) {
        var b = [];
        if (null === a || void 0 === a) b = this.a;
        else {
          for (var c = 0; c < this.a.length; c++) {
            var d = this.a[this.a.length - c - 1];
            d.startTime >= a && b.push(d);
          }
          b.reverse();
        }
        return b.map(function (a, b) {
          return Ld(a, b);
        });
      };
      m.Cc = function () {
        return 0 === this.a.length ? null : Ld(this.last(), this.a.length - 1);
      };
      function Ld(a, b) {
        return {
          startTime: a.startTime,
          endTime: null === a.endTime ? Number.POSITIVE_INFINITY : a.endTime,
          segmentID: b,
          requestInfo: jd(a.url),
        };
      }
      m.Fc = function (a) {
        this.f = a;
      };
      m.zc = function () {
        this.f = function () {};
      };
      m.cb = function () {};
      function Md(a, b, c, d, e) {
        var f = 1,
          g = 0,
          h;
        if (a.c > d) h = null;
        else {
          var k = a.l || 0,
            l = a.f || 0;
          h = c.a;
          h = h.F / h.s;
          var n = d - (a.c + b.start);
          0 > n
            ? (h = null)
            : ((l = n - 2 * h - l),
              0 > l && (l = 0),
              (l = Math.ceil(l / h) * h),
              (n -= h),
              0 > n
                ? (h = null)
                : ((k = Math.floor(n / h) * h - k),
                  0 > k && (k = 0),
                  (k = Math.floor(k / h) * h),
                  (h = { qc: l / h + 1, current: (k >= l ? k : l) / h + 1 })));
        }
        h && ((f = h.qc), (g = h.current - h.qc + 1));
        f = td(e, c, f, g);
        if (null == f)
          throw (
            ((a = Error('Failed to generate SegmentReferences.')),
            (a.type = 'stream'),
            a)
          );
        S.call(this, new T(f, c.a.s || 1), a, b, d);
        this.w = c;
        this.l = this.c =
          0 < this.length() ? a.c + b.start + this.last().endTime : null;
        this.j = h ? h.current + 1 : null;
        this.A = e;
      }
      r(Md, S);
      Md.prototype.destroy = function () {
        this.A = this.w = null;
        S.prototype.destroy.call(this);
      };
      Md.prototype.Ta = function (a) {
        var b = Fa() / 1e3;
        Nd(this, b);
        Id(this, b);
        return R.prototype.Ta.call(this, a);
      };
      Md.prototype.Bb = function (a) {
        if (null != this.c || !(a instanceof Md) || null == a.c) return !1;
        this.c = a.c;
        this.l = a.l;
        this.j = a.j;
        this.h = a.h;
        this.duration = a.duration;
        this.a.qb(a.a);
        Nd(this, Fa() / 1e3);
        Hd(this);
        return !0;
      };
      Md.prototype.La = function (a) {
        a = S.prototype.La.call(this, a);
        null != this.c && ((this.c += a), (this.l += a));
        return a;
      };
      Md.prototype.Ab = function () {
        var a = Fa() / 1e3;
        Nd(this, a);
        return Kd(this, a);
      };
      function Nd(a, b) {
        if (null != a.c && null != a.l && null != a.j) {
          var c = a.w.a,
            c = c.F / c.s,
            d = Math.floor((a.l + (b - a.h) - a.c) / c);
          if (0 != d) {
            var e = td(a.A, a.w, a.j, d);
            Array.prototype.push.apply(a.a.a, sd(e, a.a.$));
            a.a.cb();
            a.c += d * c;
            a.j += d;
          }
        }
      }
      function Od(a, b, c, d, e) {
        this.g = a;
        this.f = b;
        this.c = c;
        this.i = d;
        this.a = null;
        this.h = e;
      }
      Od.prototype.destroy = function () {
        this.h = this.c = this.f = this.g = null;
        this.a && (this.a.destroy(), (this.a = null));
      };
      Od.prototype.create = function () {
        if (this.a) return Promise.resolve(this.a);
        if ('dynamic' == this.g.type)
          try {
            this.a = new Md(this.g, this.f, this.c, this.i, this.h);
          } catch (a) {
            return Promise.reject(a);
          }
        else {
          var b;
          b = this.c.a;
          if (
            (b = td(
              this.h,
              this.c,
              1,
              Math.ceil(this.f.duration / (b.F / b.s))
            ))
          ) {
            if (0 < b.length) {
              var c = b[b.length - 1];
              b[b.length - 1] = rd(c, c.startTime, this.f.duration);
            }
            b = new R(new T(b, this.c.a.s || 1));
          } else b = null;
          this.a = b;
          if (!this.a)
            return (
              (b = Error('Failed to generate SegmentReferences')),
              (b.type = 'stream'),
              Promise.reject(b)
            );
        }
        return Promise.resolve(this.a);
      };
      Od.prototype.b = function () {
        return this.a;
      };
      function Pd(a, b, c, d, e) {
        this.f = a;
        this.c = b;
        this.h = c;
        this.a = null;
        this.i = d;
        this.g = e;
      }
      Pd.prototype.destroy = function () {
        this.g = this.h = this.c = this.f = null;
        this.a && (this.a.destroy(), (this.a = null));
      };
      Pd.prototype.create = function () {
        if (this.a) return Promise.resolve(this.a);
        var a = this.h.b,
          b = [];
        a.B && (b = zd(a.B, a.s || 1, this.c.duration || 0));
        var c = 0;
        a.F && a.c
          ? (c = (a.c - 1) * a.F)
          : 0 < b.length && (c = b[0].start - (a.J || 0));
        var d = c,
          e = a.a.length;
        0 < b.length &&
          b.length != a.a.length &&
          (e = Math.min(b.length, a.a.length));
        for (var f = [], g = 0; g < e; ++g) {
          var h = a.a[g],
            k = c,
            l = k / a.s,
            n = (c = null),
            p;
          a.F
            ? ((c = k + a.F), (n = c / a.s))
            : 0 < b.length
            ? ((p = b[g].timescaledGapInfo),
              (c = b[g].end - (a.J || 0)),
              (n = c / a.s))
            : ((n = l + this.c.duration), (c = n * a.s));
          var v = 0,
            w = null;
          h.a && ((v = h.a.Na), (w = h.a.end));
          n = Math.min(this.c.duration + d / a.s, n);
          f.push(new qd(l, n, new I(this.g, h.b, v, w), k, p || null));
        }
        a = new T(f, a.s || 1);
        'dynamic' == this.f.type
          ? (this.a = new S(a, this.f, this.c, this.i))
          : (this.a = new R(a));
        return Promise.resolve(this.a);
      };
      Pd.prototype.b = function () {
        return this.a;
      };
      function Qd(a, b, c, d, e) {
        this.c = a;
        this.g = b;
        this.f = c;
        this.i = d;
        this.a = null;
        this.h = e;
      }
      Qd.prototype.destroy = function () {
        this.h = this.f = this.g = this.c = null;
        this.a && (this.a.destroy(), (this.a = null));
      };
      Qd.prototype.create = function () {
        if (this.a) return Promise.resolve(this.a);
        var a = VideoPlayerShakaGlobalConfig.getBool(
          'fbls_use_timeline_segment_index',
          !1
        );
        if (
          VideoPlayerShakaGlobalConfig.getBool(
            'use_timeline_segment_index',
            !1
          ) &&
          (this.c.FBIsLiveTemplated || this.c.FBWasLive || a)
        )
          a = new Ad(this.g, this.f, this.f.a, this.h);
        else {
          for (
            var a = this.f.a,
              b = zd(a.B, a.s || 1, this.g.duration || 0),
              c = [],
              d = 0;
            d < b.length;
            ++d
          ) {
            var e = b[d].start,
              f = b[d].end,
              g = b[d].timescaledGapInfo,
              h = e / a.s,
              k = f / a.s,
              l = e,
              n = ud(this.h, this.f, d + a.b, l);
            if (!n)
              return (
                (a = Error('Failed to generate media URL.')),
                (a.type = 'dash'),
                Promise.reject(a)
              );
            var p = (a.J || 0) / a.s;
            c.push(new qd(h - p, k - p, n, l, f - e, g || null));
          }
          a = new T(c, a.s || 1);
        }
        this.c.manifestIsLiveStreaming
          ? (this.a = new S(a, this.c, this.g, this.i))
          : (this.a = new R(a));
        return Promise.resolve(this.a);
      };
      Qd.prototype.b = function () {
        return this.a;
      };
      function Rd() {
        this.W = Sd++;
        this.id = this.aa = this.R = null;
        this.a = 0;
        this.height = this.width = this.bandwidth = null;
        this.codecs = this.mimeType = '';
        this.f = this.fbQualityClass = this.fbQualityLabel = null;
        this.frameRate = '';
        this.switchReason = this.h = this.g = this.c = null;
        this.b = [];
        this.oa = !1;
        this.ea = !0;
      }
      var Sd = 0;
      Rd.prototype.destroy = function () {
        this.R && (this.R.destroy(), (this.R = null));
        this.aa && (this.aa.destroy(), (this.aa = null));
      };
      function Td(a) {
        return a.mimeType.split('/')[0];
      }
      function Ud(a) {
        var b = a.mimeType || '';
        a.codecs && (b += '; codecs="' + a.codecs + '"');
        return b;
      }
      function Vd() {
        this.W = Wd++;
        this.id = null;
        this.contentType = this.lang = '';
        this.f = this.b = !1;
        this.c = null;
        this.v = [];
        this.a = [];
      }
      var Wd = 0;
      Vd.prototype.destroy = function () {
        for (var a = 0; a < this.v.length; ++a) this.v[a].destroy();
        this.a = this.v = null;
      };
      function Xd(a) {
        for (var b = [], c = 0; c < a.a.length; ++c) {
          var d = new Yd();
          d.id = a.W;
          d.a = a.a[c];
          d.contentType = a.contentType;
          d.b = a.v.length ? Ud(a.v[0]) : '';
          b.push(d);
        }
        return b;
      }
      function Zd() {
        this.id = null;
        this.start = 0;
        this.duration = null;
        this.a = [];
      }
      Zd.prototype.destroy = function () {
        for (var a = 0; a < this.a.length; ++a) this.a[a].destroy();
        this.a = null;
      };
      function $d() {
        this.w = this.i = this.b = !1;
        this.l = this.A = 0;
        this.j = this.h = this.c = null;
        this.f = 0;
        this.a = [];
        this.g = !1;
        this.u = 'none';
        this.o = null;
      }
      $d.prototype.destroy = function () {
        for (var a = 0; a < this.a.length; ++a) this.a[a].destroy();
        this.a = null;
      };
      function Yd() {
        this.id = 0;
        this.a = null;
        this.b = this.contentType = '';
      }
      function U(a, b, c, d, e, f, g, h, k, l, n, p, v, w) {
        E.call(this, a);
        this.b = b;
        this.a = c;
        this.c = new tb(c, d, e, f, this, h, w);
        this.$a = h;
        this.u = {};
        this.pa = f;
        this.wa = 0;
        this.ka = this.g = this.f = null;
        this.sa = !1;
        this.w = this.ba = null;
        this.P = !1;
        this.ga = 0;
        this.ia = !1;
        this.D = null;
        this.X = this.ca = this.h = !1;
        this.L = new G();
        this.H = this.S = this.C = !1;
        this.O = 0;
        this.fa = 15;
        this.Ea = this.ua = this.T = !1;
        this.ha = 1;
        this.Y = g;
        this.va = !1;
        this.m = null;
        this.Fa = !1;
        this.I = this.ra = this.K = null;
        this.U = !1;
        this.j = n || null;
        this.G = p || null;
        this.l = v || null;
        this.V = null;
        this.Z = !1;
        this.Ba = {};
        this.Da = k;
        this.i = null;
        this.la = !1;
        this.Ca = 0;
        this.xa = e ? e.split(';')[0] : '';
        this.N = !1;
        this.qa = l;
        this.A = this.o = null;
      }
      r(U, E);
      U.prototype.Aa = function () {
        return { SourceBufferManager: this.c };
      };
      U.prototype.getDebug = U.prototype.Aa;
      function ae(a, b) {
        return new VideoPlayerBitrateEstimator(
          new u(a.a.getNumber('live_bitrate_estimates_half_life', 2)),
          b,
          a.a.getNumber('live_bitrate_estimates_minimum_sample_count', 1),
          a.a.getNumber('live_bitrate_estimates_large_sample_weight_factor', 10)
        );
      }
      U.prototype.na = function (a) {
        null != a.initialStreamBufferSize &&
          (this.O = Number(a.initialStreamBufferSize));
        var b = this.a.getNumber(
          'initial_stream_buffer_size_for_video_stream',
          0
        );
        0 < b && -1 !== this.xa.indexOf('v') && (this.O = b);
        null != a.dynamicStreamBufferSize &&
          (this.ga = Number(a.dynamicStreamBufferSize));
        null != a.smartBufferAdjustmentParams &&
          (this.Ba = a.smartBufferAdjustmentParams);
        null != a.smartBufferAdjustmentEnabled &&
          (this.Z = Boolean(a.smartBufferAdjustmentEnabled));
        null != a.streamBufferSize && (this.fa = Number(a.streamBufferSize));
        null != a.fixBufferingGoalDetermination &&
          (this.T = Boolean(a.fixBufferingGoalDetermination));
        null != a.addCdnDebugQueryParameters &&
          (this.ua = Boolean(a.addCdnDebugQueryParameters));
        null != a.useInitialBufferSizeWhenPaused &&
          (this.Ea = Boolean(a.useInitialBufferSizeWhenPaused));
        null != a.segmentRequestTimeout &&
          (this.c.T = Number(a.segmentRequestTimeout));
        null != a.resolveVideoTimeUpdateOnFragmentedTimeRanges &&
          (this.va = Boolean(a.resolveVideoTimeUpdateOnFragmentedTimeRanges));
        null != a.performanceLogger &&
          (this.m = this.u.performanceLogger = a.performanceLogger);
        null != a.abrLogger && (this.u.abrLogger = a.abrLogger);
        null != a.reappendInitSegmentAfterAbort &&
          (this.u.reappendInitSegmentAfterAbort = Boolean(
            a.reappendInitSegmentAfterAbort
          ));
        null != a.liveDataFetchMaxRetries &&
          (this.u.liveDataFetchMaxRetries = Number(a.liveDataFetchMaxRetries));
        null != a.liveSourceBufferClearMaxRetries &&
          (this.u.liveSourceBufferClearMaxRetries = Number(
            a.liveSourceBufferClearMaxRetries
          ));
        null != a.skipEmptySegments &&
          (this.u.skipEmptySegments = Boolean(a.skipEmptySegments));
        null != a.playheadFragmentedGapDiffAllowance &&
          (this.u.playheadFragmentedGapDiffAllowance = Number(
            a.playheadFragmentedGapDiffAllowance
          ));
        null != a.useMicroTaskTimeouts &&
          (this.Fa = Boolean(a.useMicroTaskTimeouts));
        a = this.c;
        b = this.u;
        null != b.reappendInitSegmentAfterAbort &&
          (a.P = Boolean(b.reappendInitSegmentAfterAbort));
        null != b.performanceLogger && (a.m = b.performanceLogger);
        null != b.abrLogger && (a.I = b.abrLogger);
        null != b.liveDataFetchMaxRetries && (a.N = b.liveDataFetchMaxRetries);
        null != b.liveSourceBufferClearMaxRetries &&
          (a.L = b.liveSourceBufferClearMaxRetries);
        null != b.playheadFragmentedGapDiffAllowance &&
          (a.O = b.playheadFragmentedGapDiffAllowance);
        null != b.skipEmptySegments && (a.V = b.skipEmptySegments);
      };
      U.prototype.destroy = function () {
        be(this);
        this.L.destroy();
        this.pa = this.f = this.L = null;
        this.c.destroy();
        this.b = this.c = null;
        this.a.getBool('fixing_scheduler_disable_leaks', !0) && (this.j = null);
        this.Ga = null;
      };
      m = U.prototype;
      m.Pa = function () {
        return this.f;
      };
      m.zb = function () {
        return this.g;
      };
      m.Jc = function (a) {
        this.C ||
          a
            .then(
              function () {
                this.C = !0;
                this.w || V(this, 0);
              }.bind(this)
            )
            .catch(function () {});
        return this.L;
      };
      m.vb = function () {
        this.H = !0;
        ce(this);
      };
      m.Ya = function () {
        return this.H;
      };
      m.eb = function (a, b, c, d, e) {
        if (a != this.f) {
          var f = 1;
          this.a.getBool('use_live_bitrate_estimates', !1) &&
            null !== this.o &&
            0 < this.f.bandwidth &&
            (f = this.o.getEstimate() / this.f.bandwidth);
          var g = a.aa;
          g && (this.ka = g.create(this.m, this.$a));
          this.X = !0;
          a.R.create()
            .then(
              H(this, function (h) {
                if (this.b) {
                  this.X = !1;
                  var g = this.f;
                  this.f = a;
                  this.a.getBool('use_live_bitrate_estimates', !1) &&
                    (this.o = ae(this, (a.bandwidth || 0) * f));
                  var l = this.g;
                  this.g = h;
                  this.c.D = this.g;
                  l && l.a.zc();
                  Gd(
                    this.g,
                    function (a) {
                      this.l && this.l.setSegments(this.g.getSegments());
                      this.j &&
                        ((a =
                          a &&
                          this.a.getBool(
                            'optimize_stream_get_segments_calls',
                            !1
                          )
                            ? a
                            : this.g.getSegments()),
                        de(this, this.f.id || '', this.g, a));
                    }.bind(this)
                  );
                  this.l && this.l.setSegments(this.g.getSegments());
                  this.j && de(this, a.id || '', h, h.getSegments());
                  this.sa = !0;
                  this.ba = d ? d : null;
                  this.P ||
                    (this.a.getBool('make_early_track_selection', !1) &&
                    this.h &&
                    !this.N &&
                    !this.w
                      ? V(this, 0)
                      : g
                      ? b
                        ? ee(this, !0, c)
                        : e && ee(this, !1)
                      : V(this, 0));
                }
              })
            )
            .catch(
              H(this, function (a) {
                this.X = !1;
                'aborted' != a.type &&
                  (this.C
                    ? ((a = y(a)), this.dispatchEvent(a))
                    : this.L.reject(a));
              })
            );
        }
      };
      m.xc = function (a) {
        return ee(this, !!a);
      };
      m.Gc = function () {
        this.ia = !0;
      };
      m.Ic = function (a) {
        this.Ca = a;
      };
      function de(a, b, c, d) {
        a.a.getBool('use_update_segments_by_shaka_reference', !0)
          ? a.j.updateSegmentsByShakaReferences(b, d)
          : (d = c.a.Cc()) &&
            !a.j.hasSegment(d) &&
            ((d = 0 < a.j.getSegments(b).length ? a.b.currentTime - 10 : null),
            a.j.updateSegments(b, c.a.Ec(d)));
      }
      function ee(a, b, c) {
        a.f &&
          !a.P &&
          ((a.P = !0),
          be(a),
          (a.S = !1),
          null !== a.A && a.A.reset(),
          wb(a.c)
            .then(
              H(a, function () {
                var a = this.b.currentTime;
                this.a.getBool('set_current_time_in_resync', !1) && 0 == a
                  ? (this.m &&
                      BanzaiODS.bumpEntityKey(
                        'videos.www.shaka',
                        'set_current_time_in_resync'
                      ),
                    (a = this.g.first().startTime))
                  : this.a.getBool('better_set_current_time_in_resync', !1) &&
                    a < this.g.first().startTime &&
                    (BanzaiODS.bumpEntityKey(
                      'videos.www.shaka',
                      'set_current_time_in_resync'
                    ),
                    (a =
                      this.g.first().startTime +
                      this.a.getNumber(
                        'resync_set_current_time_fudge_factor',
                        0
                      )));
                if (!b && 0 < yb(this.c, a) && 0 <= Mb(this.c, a))
                  return Promise.resolve();
                if (c) return Jb(this.c, this.b.currentTime + c);
                this.la = !0;
                return Ib(this.c);
              })
            )
            .then(
              H(a, function () {
                this.P = !1;
                V(this, 0);
              })
            )
            .catch(
              H(a, function (a) {
                this.P = !1;
                'aborted' != a.type &&
                  (this.C
                    ? ((a = y(a)), this.dispatchEvent(a))
                    : this.L.reject(a));
              })
            ));
      }
      m.Hc = function (a) {
        return 0 < yb(this.c, a) && 0 <= Mb(this.c, a);
      };
      m.pb = function () {};
      m.wb = function () {
        return !0;
      };
      function fe(a) {
        a.ca = a.ca || !a.b.paused;
        a.b.paused || a.Z || ((a.V = Date.now()), (a.Z = !0));
        var b = a.Ba,
          c = null;
        if (b.inExperiment)
          if (b.useSmartBuffering) {
            if (a.Z && a.V) {
              var c = (Date.now() - a.V) / 1e3,
                d = null;
              1 > c
                ? (c = null)
                : ((d =
                    3 > c
                      ? b.bufferSize_00_to_03
                      : 10 > c
                      ? b.bufferSize_03_to_10
                      : 30 > c
                      ? b.bufferSize_10_to_30
                      : 60 > c
                      ? b.bufferSize_30_to_60
                      : b.bufferSize_above_60),
                  (c = Math.min(d, a.b.duration)));
            }
          } else a.V && (c = b.nonSmartBufferSize);
        c ||
          ((c = a.Ea && a.b.paused ? a.O : a.fa),
          a.b.paused && 1 < a.ha && (c *= a.ha),
          a.ga &&
            !a.b.paused &&
            (c = Math.max(
              Math.min(a.g.last().endTime - a.b.currentTime, a.ga),
              a.fa
            )));
        c = (a.T ? a.h && a.ca : a.h) ? Math.max(a.O, c) : a.O;
        0 < a.a.getNumber('audio_video_buffer_diff_threshold', 14400) &&
          ((b = a.b.buffered.length
            ? a.b.buffered.end(a.b.buffered.length - 1)
            : 0),
          (b = Math.max(0, b - a.b.currentTime)),
          (c = Math.min(
            c,
            b + a.a.getNumber('audio_video_buffer_diff_threshold', 14400)
          )));
        return c;
      }
      function ge(a) {
        var b = a.a.getNumber('start_stream_buffer_size', 1),
          c = a.a.getNumber('low_start_stream_buffer_size', 1);
        if (b !== c) {
          var d = a.a.getNumber(
              'low_bandwidth_start_stream_buffer_size_threshold',
              0
            ),
            e = a.a.getNumber(
              'scheduled_videos_start_stream_buffer_size_threshold',
              0
            );
          if (
            0 < d &&
            a.pa.getBandwidth() < d &&
            VideoStreamingTaskQueueProvider.getQueueSize('video') >= e
          )
            return c;
        }
        return b;
      }
      function me(a, b) {
        return yb(a.c, a.h ? b : b + (a.D || 0));
      }
      function ne(a) {
        if (
          (a.h && !a.C) ||
          (a.a.getBool('make_early_track_selection', !1) && a.X) ||
          (a.a.getBool('prevent_fetch_while_fetching_in_stream', !1) && a.N)
        )
          return (a.w = null), Promise.resolve();
        var b;
        if ((b = a.C && !a.H)) b = 1 < a.c.a.buffered.length ? !0 : !1;
        if (b && (a.ia || Ob(a.c, a.b)))
          return (
            a.va && (a.b.currentTime = Nb(a.b)),
            null === a.K && ((a.ia = !1), ee(a, !0)),
            Promise.resolve()
          );
        a.a.getNumber(
          'decouple_stream_on_update_loop_from_request_loop_int',
          0
        ) || (a.w = null);
        b = a.f;
        var c = a.g,
          d = a.b.currentTime;
        a.a.getBool('use_pending_seek_position_for_reference', !1) &&
          0 === a.b.readyState &&
          !d &&
          a.ra &&
          (d = a.ra);
        if (a.T && !a.h && me(a, d) >= ge(a))
          return (
            a.a.getBool('fix_chrome_mse_regression', !1) &&
              1 === a.b.readyState &&
              0 < a.b.buffered.length &&
              (a.b.currentTime = a.b.currentTime),
            oe(a),
            V(a, 0),
            Promise.resolve()
          );
        var e = null,
          f = [];
        null !== a.K && (d = a.K);
        if (me(a, d) >= fe(a))
          if (
            ((a.S = !0),
            null !== a.I && a.I.resolve(),
            a.T || oe(a),
            (f = pe(a) ? qe(a, d) : []),
            0 < f.length)
          )
            e = f[0];
          else
            return (
              V(a, 1e3 / (5 * (Math.abs(a.b.playbackRate) || 1))),
              Promise.resolve()
            );
        else {
          e = 1;
          a.l && (e = a.l.getNumberOfSegments());
          var g = xb(a.c);
          a.U && ((g = null), null !== a.K && (a.U = !1));
          a.a.getBool('find_last_inserted_segment_in_segment_index', !1) &&
            g &&
            !c.a.a &&
            (g = c.Ta(g.startTime));
          g = re(a, d, c, e, g);
          e = g[0];
          a.l &&
            (a.l.setFutureSegments(g), a.l.setBufferingGoal(fe(a) - me(a, d)));
          !e && pe(a) && ((f = qe(a, d)), 0 < f.length && (e = f[0]));
        }
        if (!e)
          return (
            oe(a),
            a.C && !a.H && ((a.H = !0), ce(a)),
            V(a, 200),
            Promise.resolve()
          );
        a.a.getBool('create_own_segment_reference_for_sbm', !1) &&
          (e = rd(e, e.startTime, e.endTime));
        se(a, te(a, d, f), b.id || '');
        ue(a, te(a, d, f));
        a.a.getBool('refresh_segment_reference_failover_uri', !0) &&
          (e.url = e.url.clone());
        a.N = !0;
        'video' === b.mimeType.split('/')[0] && a.pa.setRepresentationID(b.id);
        c = a.c.fetch(
          e,
          c.s,
          b.a + a.Ca,
          a.ka,
          a.ua && !a.b.paused,
          0 < f.length,
          a.j,
          a.G
        );
        c = c.then(
          H(a, function (a) {
            this.a.getBool('updates_priority_on_fetch_complete', !1) &&
              ue(this, te(this, d, []));
            this.qa.informNetworkResumed();
            return a;
          })
        );
        a.Y &&
          'video' === b.mimeType.split('/')[0] &&
          a.Y.add(e.startTime || 0, e.endTime || 0, {
            id: b.id,
            reason: a.ba,
            performanceLogger: a.m
              ? a.m.getOperationLogger('stream_switch')
              : null,
          });
        a.ka = null;
        a.sa && ((a.sa = !1), (f = a.ba), (a.ba = null), ve(a, b, f, a.ja()));
        a.H = !1;
        return c
          .then(
            H(a, function (a) {
              return this.a.getBool('clear_old_buffer', !1)
                ? Lb(this.c, this.b.currentTime).then(function () {
                    return a;
                  })
                : a;
            })
          )
          .then(
            H(a, function (a) {
              var b = a.$,
                c = a.Wc;
              this.h || (this.wa = c);
              this.a.getBool('use_live_bitrate_estimates', !1) &&
                null != a &&
                0 < a.yc &&
                0 < a.F &&
                (null === this.o && (this.o = ae(this, this.f.bandwidth || 0)),
                this.o.sample(8 * a.yc, a.F));
              a = this.a.getNumber(
                'buffer_velocity_time_in_past_to_consider',
                0
              );
              0 < a &&
                null !== this.f &&
                'video' === Td(this.f) &&
                (null === this.A && (this.A = new BufferVelocity(a)),
                this.A.recordBufferAhead(yb(this.c, this.b.currentTime)));
              this.N = !1;
              'video' === (this.f ? this.f.mimeType.split('/')[0] : null) &&
                this.dispatchEvent(x({ type: 'fetch_end', bubbles: !0 }));
              null == this.D && (this.D = b);
              this.la &&
                0 < yb(this.c, d) &&
                ((this.la = !1),
                this.a.getBool('disable_nudge', !1) ||
                  ((b = x({ type: 'should_nudge' })), this.dispatchEvent(b)));
              V(this, 0);
            })
          )
          .catch(
            H(a, function (a) {
              this.N = !1;
              return Promise.reject(a);
            })
          );
      }
      function te(a, b, c) {
        var d = a.h ? b : b + (a.D || 0);
        return {
          additionalSegmentsRequired: c,
          playhead: b,
          bufferStart: d,
          bufferEnd: me(a, b) + d,
          bufferingGoal: fe(a),
          isPlaying: !a.b.paused,
        };
      }
      function se(a, b, c) {
        a.j && a.j.updatePlayerState(c, b);
      }
      function ue(a, b) {
        a.G && a.G.updatePlayerState(b);
      }
      function we(a, b, c) {
        var d =
            null !== a.i && -1 < a.i && a.i < c.length() - 1
              ? c.get(a.i)
              : null,
          e = null;
        if (null === a.i || !d || d.startTime > b)
          return (e = c.findIndex(b)), (a.i = e);
        for (d = a.i; d <= a.i + 1; d++)
          if (((e = c.get(d)), e.startTime <= b && e.endTime > b))
            return (a.i = d);
        e = c.findIndex(b);
        return (a.i = e) || -1;
      }
      function pe(a) {
        return (
          a.a.getBool('replace_lower_quality_buffer', !1) &&
          null === a.G &&
          a.ca &&
          null !== a.Y &&
          'video' === Td(a.f) &&
          null !== a.g
        );
      }
      function qe(a, b) {
        if (!a.Da || !a.f.id || !a.g) return [];
        var c = we(a, b, a.g);
        return -1 === c
          ? []
          : BufferReplacementHelper.getSegmentsToReplaceLowerQuality(
              a.g.getSegments(),
              b,
              c,
              a.f.id,
              a.Da,
              a.Y,
              {
                thresholdBefore: a.a.getNumber(
                  'buffer_replacement_behind_threshold',
                  5
                ),
                thresholdAfter: a.a.getNumber(
                  'buffer_replacement_ahead_threshold',
                  15
                ),
                wrapReplacementPastEnd: a.a.getBool(
                  'wrap_replacement_past_end',
                  !1
                ),
              }
            );
      }
      m.uc = function () {
        var a;
        this.a.getNumber(
          'decouple_stream_on_update_loop_from_request_loop_int',
          0
        ) &&
          V(
            this,
            this.a.getNumber(
              'decouple_stream_on_update_loop_from_request_loop_int',
              0
            )
          );
        this.a.getBool('catch_stream_update_sync_code_error', !1)
          ? (a = new Promise(
              function (a, c) {
                try {
                  ne(this).then(a).catch(c);
                } catch (d) {
                  (d.type = 'uncaught'), c(d);
                }
              }.bind(this)
            ))
          : (a = ne(this));
        a.catch(
          H(this, function (a) {
            if ('aborted' != a.type) {
              if ('sourcebuffer_full' === a.type)
                return Ib(this.c).then(
                  H(this, function () {
                    V(this, 0);
                  })
                );
              var c = -1 === [0, 404, 410, 502, 503, 504].indexOf(a.status);
              if ('net' === a.type && !c && this.f)
                if (this.a.getBool('allow_infinite_retry_on_net_err', !0))
                  switch (a.status) {
                    case 404:
                      V(this, 2e3);
                      break;
                    case 410:
                      this.a.getBool('end_all_streams_on_410', !1)
                        ? xe(this)
                        : this.vb();
                      break;
                    default:
                      V(this, 1e3);
                  }
                else V(this, 1e3), (c = !0);
              0 === a.status
                ? this.qa.informNetworkInterrupted()
                : this.qa.informNetworkResumed();
              if (!this.a.getBool('allow_infinite_retry_on_net_err', !0) || c)
                (c = y(a)),
                  this.dispatchEvent(c),
                  this.m &&
                    setTimeout(
                      function () {
                        var c = this.m
                          .getEventLogger('stream_error_fallback')
                          .setError(a)
                          .setType(this.xa.split('/')[0]);
                        this.b ? c.setResult('failed') : c.setResult('success');
                        c.log();
                      }.bind(this),
                      0
                    );
            }
          })
        );
      };
      function re(a, b, c, d, e) {
        var f = -1;
        null != e
          ? (f = null != e.endTime ? c.findIndex(e.endTime) : -1)
          : ((f = we(a, b, c)),
            0 > f && (f = c.length() ? c.length() - 1 : -1));
        a = [];
        if (0 <= f)
          for (b = f; b < f + d && b < c.length(); b++) a.push(c.get(b));
        return a;
      }
      function oe(a) {
        if (!a.h && null != a.D) {
          a.h = !0;
          var b = a.c,
            c = a.D,
            d = c - b.U;
          0 != d && ((b.b = sd(b.b, d)), (b.U = c));
          a.L.resolve(a.D);
        }
      }
      m.Dd = function () {
        return this.h;
      };
      U.prototype.hasStarted = U.prototype.Dd;
      U.prototype.bb = function () {
        return this.S;
      };
      U.prototype.hasHitBufferingGoal = U.prototype.bb;
      U.prototype.ja = function () {
        return null === this.o ? null : this.o.getEstimate();
      };
      U.prototype.getBitrateEstimate = U.prototype.ja;
      U.prototype.lb = function () {
        return null === this.A ? null : this.A.getVelocity();
      };
      U.prototype.getBufferVelocity = U.prototype.lb;
      function ve(a, b, c, d) {
        var e = b.mimeType.split('/')[0];
        b = x({
          type: 'adaptation',
          id: b.id,
          bubbles: !0,
          contentType: e,
          size: 'video' != e ? null : { width: b.width, height: b.height },
          bandwidth: d || b.bandwidth,
          reason: c,
        });
        a.dispatchEvent(b);
      }
      function xe(a) {
        var b = x({ type: 'should_end_all_streams' });
        a.dispatchEvent(b);
      }
      function ce(a) {
        var b = x({ type: 'ended' });
        a.dispatchEvent(b);
      }
      U.prototype.Za = function () {
        return this.G;
      };
      U.prototype.getVideoStreamingManager = U.prototype.Za;
      function V(a, b) {
        be(a);
        !b && a.Fa
          ? Promise.resolve().then(a.uc.bind(a))
          : (a.w = setTimeout(a.uc.bind(a), b));
      }
      function be(a) {
        null != a.w && (clearTimeout(a.w), (a.w = null));
      }
      U.prototype.nb = function () {
        return this.wa;
      };
      U.prototype.ab = function () {
        return this.c.i;
      };
      U.prototype.getStreamProgressTracker = U.prototype.ab;
      function ye(a, b) {
        a.K = b;
        a.U = !0;
        a.I || (a.I = new G());
        return a.I;
      }
      function ze(a) {
        this.c = a;
        this.a = null;
      }
      ze.prototype.destroy = function () {
        this.a && (this.a.destroy(), (this.a = null));
      };
      ze.prototype.create = function () {
        if (this.a) return Promise.resolve(this.a);
        var a = new qd(0, null, this.c, 0, 0);
        this.a = new R(new T([a], 1));
        return Promise.resolve(this.a);
      };
      ze.prototype.b = function () {
        return this.a;
      };
      function Ae(a, b) {
        E.call(this, a);
        this.b = b;
        this.j = !0;
        this.l = this.g = null;
        this.f = new G();
        this.a = null;
      }
      r(Ae, E);
      Ae.prototype.na = function () {};
      Ae.prototype.destroy = function () {
        this.a && this.b.removeChild(this.a);
        this.f.destroy();
        this.Ga = this.b = this.g = this.l = this.a = this.f = null;
      };
      m = Ae.prototype;
      m.Pa = function () {
        return this.g;
      };
      m.zb = function () {
        return this.l;
      };
      m.Jc = function () {
        return this.f;
      };
      m.Ya = function () {
        return !0;
      };
      m.vb = function () {};
      m.eb = function (a) {
        a.R.create().then(
          H(this, function (b) {
            if (this.b) {
              if (0 == b.length())
                return Promise.reject(Error('No subtitles URL available.'));
              var c = this.g;
              this.g = a;
              this.l = b;
              b = b.first().url.c[0].toString();
              var d = this.wb();
              this.a && (this.pb(!1), this.b.removeChild(this.a));
              this.a = document.createElement('track');
              this.b.appendChild(this.a);
              this.a.src = b;
              this.pb(d);
              b = x({
                type: 'adaptation',
                bubbles: !0,
                contentType: 'text',
                size: null,
                bandwidth: a.bandwidth,
              });
              this.dispatchEvent(b);
              c || this.f.resolve(0);
            }
          })
        );
      };
      m.xc = function () {};
      m.Gc = function () {};
      m.Hc = function () {
        return !0;
      };
      m.pb = function (a) {
        this.j = a;
        this.a && (this.a.track.mode = a ? 'showing' : 'disabled');
      };
      m.wb = function () {
        this.a && (this.j = 'showing' == this.a.track.mode);
        return this.j;
      };
      m.nb = function () {
        return 0;
      };
      m.Ic = function () {};
      function Be() {}
      Be.prototype.parse = function (a, b, c, d) {
        var e = null;
        try {
          var f;
          var g = new Oa(b);
          if (440786851 != Qa(g).id) f = null;
          else {
            var h = Qa(g);
            if (408125543 != h.id) f = null;
            else {
              var k = h.a.byteOffset,
                l;
              var n = new Oa(h.a);
              for (b = null; Ja(n.a); ) {
                var p = Qa(n);
                if (357149030 == p.id) {
                  b = p;
                  break;
                }
              }
              if (b) {
                for (var v = new Oa(b.a), p = 1e6, n = null; Ja(v.a); ) {
                  var w = Qa(v);
                  if (2807729 == w.id) p = Ua(w);
                  else if (17545 == w.id)
                    if (((b = w), 4 == b.a.byteLength)) n = b.a.getFloat32(0);
                    else if (8 == b.a.byteLength) n = b.a.getFloat64(0);
                    else
                      throw new RangeError(
                        'EbmlElement: floating point numbers must be 4 or 8 bytes.'
                      );
                }
                null == n
                  ? (l = null)
                  : ((v = p / 1e9), (l = { Db: v, duration: n * v }));
              } else l = null;
              f = l ? { zd: k, Db: l.Db, duration: l.duration } : null;
            }
          }
          if (f) {
            var C = Qa(new Oa(a));
            if (475249515 != C.id) e = null;
            else {
              var P = f.zd,
                aa = f.Db,
                ba = f.duration;
              a = [];
              for (var va = new Oa(C.a), k = (f = C = -1); Ja(va.a); ) {
                var Ya = Qa(va);
                if (187 == Ya.id) {
                  var ha;
                  var wd = new Oa(Ya.a),
                    xd = Qa(wd);
                  if (179 != xd.id) ha = null;
                  else {
                    var af = Ua(xd),
                      yd = Qa(wd);
                    if (183 != yd.id) ha = null;
                    else {
                      var he = new Oa(yd.a);
                      for (l = 0; Ja(he.a); ) {
                        var ie = Qa(he);
                        if (241 == ie.id) {
                          l = Ua(ie);
                          break;
                        }
                      }
                      ha = { ub: af, xd: l };
                    }
                  }
                  if (ha) {
                    var je = aa * ha.ub,
                      ke = P + ha.xd;
                    if (0 <= C) {
                      var Lc = new I(d, c, k, ke - 1),
                        Ff = ha.ub - f;
                      a.push(new qd(C, je, Lc, ha.ub, Ff));
                    }
                    C = je;
                    f = ha.ub;
                    k = ke;
                  }
                }
              }
              0 <= C &&
                ((Lc = new I(d, c, k, null)),
                a.push(new qd(C, ba, Lc, f, ba / aa - f)));
              e = a;
            }
          } else e = null;
        } catch (le) {
          if (!(le instanceof RangeError)) throw le;
        }
        return e;
      };
      function Ce(a, b, c, d, e, f, g, h, k, l, n) {
        this.h = a;
        this.o = b;
        this.c = c;
        this.l = l || null;
        this.j = n || null;
        this.a = d;
        this.g = e;
        this.f = f;
        this.w = g;
        this.Ka = null;
        this.i = h;
        this.m = k || null;
        this.u = null;
      }
      Ce.prototype.destroy = function () {
        this.i = this.o = this.h = null;
        this.a.Ha();
        this.a = null;
        this.f && (this.f.Ha(), (this.f = null));
        this.g && (this.g.Ha(), (this.g = null));
        this.Ka = null;
      };
      Ce.prototype.Qc = function () {
        return this.Ka;
      };
      Ce.prototype.create = function () {
        return De(this);
      };
      Ce.prototype.kb = function () {
        return De(this);
      };
      function De(a) {
        if (a.Ka) return a.Ka;
        var b = null;
        a.m &&
          (b = a.m
            .getOperationLogger('create_container_segment_index_source')
            .start());
        if (null !== a.l && (null !== a.j || 'webm' !== a.c))
          return Ee(a, a.l, a.j, b);
        var c = [a.a.fetch(null, null, a.m, b)];
        'webm' == a.c && c.push(a.g.fetch(null, null, a.m, b));
        a.Ka = Promise.all(c).then(
          H(a, function (a) {
            return Ee(this, a[0], a[1] || null, b);
          })
        );
        return a.Ka;
      }
      function Ee(a, b, c, d) {
        var e = null;
        'mp4' == a.c
          ? ((e = new Fd()),
            (e = e.parse(new DataView(b), a.a.startByte, a.a.c, a.i, a.f)))
          : 'webm' == a.c &&
            ((e = new Be()),
            (e = e.parse(new DataView(b), new DataView(c), a.a.c, a.i)));
        if (!e)
          return (
            (a = Error(
              'Failed to parse SegmentReferences from ' +
                a.a.toString() +
                ' (or one of its fallbacks).'
            )),
            (a.type = 'stream'),
            Promise.reject(a)
          );
        b = new T(e, e.s);
        var f;
        'dynamic' == a.h.type ? (f = new S(b, a.h, a.o, a.w)) : (f = new R(b));
        d && d.log();
        a.u = f;
        return Promise.resolve(f);
      }
      Ce.prototype.b = function () {
        return this.u;
      };
      function Fe(a, b) {
        this.a = a;
        this.m = b || null;
      }
      function Ge(a, b, c) {
        for (var d = Fa() / 1e3, e = 0; e < b.a.length; ++e)
          for (var f = b.a[e], g = 0; g < f.a.length; ++g) {
            var h = f.a[g];
            if ('text' != h.contentType)
              for (var k = 0; k < h.a.length; ++k) {
                var l = h.a[k],
                  n = 0,
                  n = n + (l.f ? 1 : 0),
                  n = n + (l.b ? 1 : 0),
                  n = n + (l.a ? 1 : 0);
                0 == n
                  ? (h.a.splice(k, 1), --k)
                  : 1 != n &&
                    (l.f ? ((l.b = null), (l.a = null)) : l.b && (l.a = null));
              }
          }
        He(b);
        for (e = 0; e < b.a.length; ++e)
          for (f = b.a[e], g = 0; g < f.a.length; ++g) {
            k = h = f.a[g];
            l = null;
            for (n = 0; n < k.a.length; ++n) {
              var p = k.a[n].mimeType || '';
              l ? p != l && (k.a.splice(n, 1), --n) : (l = p);
            }
            0 == h.a.length && (f.a.splice(g, 1), --g);
          }
        b.manifestIsLiveStreaming && null == b.c && (b.c = d);
        e = new $d();
        'dynamic' == b.type &&
          ((e.b = !0),
          (e.c = b.g),
          (e.h = new I(c, b.o || b.url)),
          (e.j = b.c));
        e.A = b.h || 0;
        e.l = b.i || 0;
        e.f = b.j || 5;
        for (f = 0; f < b.a.length; ++f) {
          g = b.a[f];
          if (null == g.start) break;
          g = Ie(a, b, g, d, c);
          e.a.push(g);
        }
        e.i = b.FBIsLiveTemplated;
        a.m && a.m.setIsTemplatedManifest(b.FBIsLiveTemplated);
        e.w = b.FBWasLive;
        a = null;
        c = 'none';
        for (f = 0; f < b.a.length; f++)
          for (g = b.a[f], d = 0; d < g.a.length; d++)
            for (h = g.a[d], k = 0; k < h.a.length; k++)
              (l = h.a[k].i),
                null != l &&
                  null != l.value &&
                  ((a = c = l.value),
                  'urn:mpeg:dash:23003:3:audio_channel_configuration:2011' ===
                    l.a &&
                    ('1' === a ? (c = 'mono') : '2' === a && (c = 'stereo')));
        e.u = c;
        a = parseInt(a, 10);
        e.o = 0 < a ? a : null;
        return e;
      }
      function He(a) {
        if (a.a.length) {
          null == a.a[0].start && (a.a[0].start = 0);
          var b = function (a) {
            return 0 == a || !!a;
          };
          a.manifestIsLiveStreaming && (a.b = null);
          b(a.b) &&
            1 == a.a.length &&
            !b(a.a[0].duration) &&
            (a.a[0].duration = a.b);
          for (var c = 0, d = !0, e = 0; e < a.a.length; ++e) {
            var f = a.a[e - 1],
              g = a.a[e],
              h = a.a[e + 1] || { start: a.b };
            !b(g.start) &&
              f &&
              b(f.start) &&
              b(f.duration) &&
              (g.start = f.start + f.duration);
            !b(g.duration) && b(h.start) && (g.duration = h.start - g.start);
            null != g.start && null != g.duration
              ? (c += g.duration)
              : (d = !1);
          }
          b(a.b) ||
            ((e = a.a[a.a.length - 1]),
            d
              ? (a.b = c)
              : b(e.start) && b(e.duration)
              ? (a.b = e.start + e.duration)
              : a.manifestIsLiveStreaming || (a.b = c));
        }
      }
      function Ie(a, b, c, d, e) {
        var f = new Zd();
        f.id = c.id;
        f.start = c.start;
        f.duration = c.duration;
        var g = new B();
        c.a.forEach(function (a) {
          g.push(a.contentType || '', a);
        });
        for (var h = hb(g), k = 0; k < h.length; ++k) {
          var l = new B();
          g.get(h[k]).forEach(function (a) {
            l.push(a.group, a);
          });
          for (var n = hb(l), p = 0; p < n.length; ++p) {
            var v = new B();
            l.get(n[p]).forEach(function (a) {
              v.push(a.lang, a);
            });
            for (var w = hb(v), C = 0; C < w.length; ++C) {
              var P = v.get(w[C]),
                P = Je(a, b, c, P, d, e);
              f.a.push(P);
            }
          }
        }
        return f;
      }
      function Je(a, b, c, d, e, f) {
        da(
          d.every(function (a) {
            return (
              a.group == d[0].group &&
              (a.lang || '') == (d[0].lang || '') &&
              (a.contentType || '') == (d[0].contentType || '')
            );
          })
        );
        var g = new Vd(),
          h = d.filter(function (a) {
            return null != a.id;
          });
        h.length == d.length &&
          (g.id = h
            .map(function (a) {
              return a.id;
            })
            .sort()
            .reduce(function (a, b) {
              return a + ',' + b;
            }));
        g.b = !(!d[0].b || 'urn:scte:dash:cc:cea-608:2015' !== d[0].b.a);
        g.lang = d[0].lang || '';
        g.contentType = d[0].contentType || '';
        g.f = d.some(function (a) {
          return a.f;
        });
        for (var h = {}, k = 0; k < d.length; ++k) {
          var l = d[k];
          l.c && (g.c = l.c);
          for (var n = 0; n < l.a.length; ++n) {
            var p = l.a[n],
              v = Ke(a, p),
              w = g.a.slice(0);
            Le(v, w);
            (0 == w.length && 0 < g.a.length) ||
              !(p = Me(a, b, c, p, e, f)) ||
              (g.v.push(p), (g.a = w), (h[p.W] = l));
          }
        }
        if (
          g.a.some(function (a) {
            return '' == a.a;
          })
        )
          return (
            g.v.forEach(function (a) {
              a.oa = !0;
            }),
            g
          );
        a = Ne(d);
        for (k = 0; k < g.v.length; ++k)
          (p = g.v[k]), (l = h[p.W]), l == a && (p.oa = !0);
        return g;
      }
      function Ne(a) {
        for (var b = null, c = null, d = 0; d < a.length; ++d)
          for (var e = a[d], f = 0; f < e.a.length; ++f) {
            var g = e.a[f],
              g = (g.width || 1) * (g.height || 1) * (g.bandwidth || 1);
            if (null == b || g < b) (b = g), (c = e);
          }
        return c;
      }
      function Le(a, b) {
        if (0 == b.length) Array.prototype.push.apply(b, a);
        else
          for (var c = 0; c < b.length; ++c) {
            for (var d = !1, e = 0; e < a.length; ++e) {
              var f = b[c],
                g = a[e];
              if (
                f.a == g.a &&
                f.h == g.h &&
                f.l == g.l &&
                f.g == g.g &&
                f.i == g.i &&
                f.f == g.f &&
                f.j == g.j &&
                Sa(f.c, g.c)
              ) {
                d = !0;
                Vb(b[c], a[e].b);
                break;
              }
            }
            d || (b.splice(c, 1), --c);
          }
      }
      function Ke(a, b) {
        var c = [];
        if (0 == b.c.length) c.push(new Tb());
        else if (a.a)
          for (var d = 0; d < b.c.length; ++d) c.push.apply(c, Oe(a, b.c[d]));
        return c;
      }
      function Oe(a, b) {
        var c = [];
        if (2 != a.a.length) return [];
        var d = a.a(b.f || '', b.c);
        if (!(d && d instanceof Array)) return [];
        for (var e = 0; e < d.length; ++e) {
          var f;
          var g = d[e];
          f = new Tb();
          if (g) {
            var h = eb(g, 'keySystem');
            if (null != h) f.a = h;
            else throw Error("'keySystem' cannot be null.");
            var k = eb(g, 'licenseServerUrl');
            if (null != k) f.h = k;
            else if (h)
              throw Error(
                "For encrypted streaming content, 'licenseServerUrl' cannot be null or empty."
              );
            h = z(g, 'withCredentials');
            null != h && (f.l = h);
            h = fb(g, 'licensePostProcessor', Function);
            null != h && (f.o = h);
            h = fb(g, 'licensePreProcessor', Function);
            null != h && (f.u = h);
            h = z(g, 'distinctiveIdentifierRequired');
            null != h && (f.g = h);
            h = z(g, 'persistentStateRequired');
            null != h && (f.i = h);
            h = eb(g, 'audioRobustness');
            null != h && (f.f = h);
            h = eb(g, 'videoRobustness');
            null != h && (f.j = h);
            h = fb(g, 'serverCertificate', Uint8Array);
            null != h && (f.c = h);
            if ((h = fb(g, 'initData', Object))) {
              g = fb(h, 'initData', Uint8Array);
              if (null == g) throw Error("'initData.initData' cannot be null.");
              h = eb(h, 'initDataType');
              if (null == h)
                throw Error("'initData.initDataType' cannot be null.");
              f.b.push({ initData: new Uint8Array(g.buffer), initDataType: h });
            }
          }
          0 == f.b.length &&
            b.a &&
            b.a.psshBox &&
            Vb(f, [{ initData: b.a.psshBox, initDataType: 'cenc' }]);
          c.push(f);
        }
        return c;
      }
      function Me(a, b, c, d, e, f) {
        if (!d.baseUrl || 0 === d.baseUrl.length) return null;
        var g = null,
          h = 1,
          k = 0;
        if (d.f) {
          g = d.mimeType.split('/')[1];
          if ('mp4' != g && 'webm' != g) g = null;
          else {
            var l = d.f;
            if ('webm' != g || l.c)
              if (l.a || (l.b && l.b.a)) {
                h = l.b;
                h ||
                  ((h = new Cc()),
                  (h.url = d.baseUrl),
                  (h.a = l.a ? l.a.clone() : null));
                k = Pe(h, f);
                h = l.c ? Pe(l.c, f) : null;
                l.f
                  ? ((l = l.f), (l = new I(f, d.baseUrl, l.Na, l.end)))
                  : (l = null);
                var n = l,
                  p =
                    VideoPlayerShakaGlobalConfig.getBool(
                      'add_inline_initialization_resources',
                      !1
                    ) &&
                    d.h &&
                    d.h.data
                      ? d.h.data
                      : null,
                  l =
                    VideoPlayerShakaGlobalConfig.getBool(
                      'add_inline_initialization_resources',
                      !1
                    ) &&
                    d.g &&
                    d.g.data
                      ? d.g.data
                      : null;
                b = new Ce(b, c, g, k, h, n, e, f, a.m, p, l);
                c = new od(h, l);
                e = new Rd();
                e.R = b;
                e.aa = c;
                g = e;
              } else g = null;
            else g = null;
          }
          h = d.f.s;
          k = d.f.J;
        } else if (d.b)
          (a = d.b),
            !a.F && !a.B && 1 < a.a.length
              ? (g = null)
              : a.F || c.duration || a.B || 1 != a.a.length
              ? a.B && 0 === a.B.M.length
                ? (g = null)
                : ((a = a.b ? Pe(a.b, f) : null),
                  (b = new Pd(b, c, d, e, f)),
                  (c = new od(a)),
                  (e = new Rd()),
                  (e.R = b),
                  (e.aa = c),
                  (g = e))
              : (g = null),
            (h = d.b.s),
            (k = d.b.J);
        else if (d.a) {
          a: if (
            ((g = d.a),
            (h = 0 + (g.a ? 1 : 0)),
            (h += g.B ? 1 : 0),
            (h += g.F ? 1 : 0),
            0 == h
              ? (h = !1)
              : (1 != h &&
                  (g.a ? ((g.B = null), (g.F = null)) : g.B && (g.F = null)),
                (h = !0)),
            h)
          ) {
            h = null;
            if (g.c && ((h = (g = d.a.c) ? Qe(d, g, Dc) : null), !h)) {
              g = null;
              break a;
            }
            g = h ? Pe(h, f) : null;
            h = d.a;
            h.a
              ? ((h = d.mimeType.split('/')[1]),
                'mp4' != h && 'webm' != h
                  ? (b = null)
                  : 'webm' != h || g
                  ? ud(f, d, 1, 0)
                    ? (k = (k = d.a.a) ? Qe(d, k, Cc) : null)
                      ? ((k = Pe(k, f)),
                        (b = new Ce(b, c, h, k, g, null, e, f, a.m)))
                      : (b = null)
                    : (b = null)
                  : (b = null))
              : (b = h.f
                  ? h.B
                    ? new Qd(b, c, d, e, f)
                    : h.F
                    ? b.manifestIsLiveStreaming || null != c.duration
                      ? new Od(b, c, d, e, f)
                      : null
                    : null
                  : null);
            b
              ? ((c = new od(g)),
                (e = new Rd()),
                (e.R = b),
                (e.aa = c),
                (g = e))
              : (g = null);
          } else g = null;
          h = d.a.s;
          k = d.a.J;
        } else
          'text' == d.mimeType.split('/')[0] &&
            ((g = new Rd()), (g.R = new ze(new I(f, d.baseUrl))));
        if (!g) return null;
        g.id = d.id;
        k && (g.a = (-1 * k) / h);
        g.bandwidth = d.bandwidth;
        g.width = d.width;
        g.height = d.height;
        g.mimeType = d.mimeType || '';
        g.codecs = d.codecs || '';
        g.g = d.o || null;
        g.h = d.u || null;
        g.fbQualityLabel = d.fbQualityLabel || null;
        g.fbQualityClass = d.fbQualityClass || null;
        g.f = d.l || null;
        g.frameRate = d.frameRate || '';
        g.c = d.j || null;
        for (b = 0; b < d.c.length; ++b) (c = d.c[b]), c.b && g.b.push(c.b);
        return g;
      }
      function Qe(a, b, c) {
        b = vd(b, a.id, null, a.bandwidth, null);
        if (!b) return null;
        c = new c();
        c.url = gd(a.baseUrl, b);
        return c;
      }
      function Pe(a, b) {
        var c = a.url,
          d = 0,
          e = null;
        a.a && ((d = a.a.Na), (e = a.a.end));
        return new I(b, c, d, e);
      }
      function Re(a, b, c, d, e, f) {
        this.b = new I(null, [new J(a)]);
        this.a = new Ab();
        this.a.body = b;
        this.a.method = c;
        this.a.b = 3;
        this.a.w = d;
        this.a.f = 1e3 * (null != f ? f : oa);
        a = e || {};
        for (var g in a) this.a.c[g] = a[g];
      }
      function Se(a) {
        return a.b.fetch(a.a).then(function (a) {
          return Promise.resolve(new Uint8Array(a));
        });
      }
      function Te(a, b, c) {
        E.call(this, a);
        this.c = b;
        this.j = c;
        this.a = this.h = null;
        this.i = new ib();
        this.b = [];
        this.f = [];
        this.o = 0;
        this.g = new G();
        this.l = null;
        this.A = oa;
      }
      r(Te, E);
      Te.prototype.destroy = function () {
        this.Ga = null;
        for (var a = 0; a < this.f.length; ++a)
          this.f[a].close().catch(function () {});
        this.f = [];
        this.b = this.a = this.h = null;
        this.g.destroy();
        this.g = null;
        this.i.destroy();
        this.i = null;
        this.l && (clearTimeout(this.l), (this.l = null));
        this.c = this.j = null;
      };
      Te.prototype.initialize = function () {
        for (var a = new B(), b = Ue(this.j), c = 0; c < b.length; ++c) {
          var d = b[c];
          d.a.a || (d.b && !Ve(d.b)) || a.push(d.contentType, d);
        }
        for (var c = {}, d = !1, e = 0; e < b.length; ++e) {
          var f = b[e];
          if (f.a.a && !a.a.hasOwnProperty(f.contentType)) {
            var g = f.a.a,
              h = c[g];
            h ||
              ((h = f.a),
              (h = {
                audioCapabilities: void 0,
                videoCapabilities: void 0,
                initDataTypes: void 0,
                distinctiveIdentifier: h.g ? 'required' : 'optional',
                persistentState: h.i ? 'required' : 'optional',
                sessionTypes: ['temporary'],
              }),
              (c[g] = h));
            if (f.b && ((g = f.contentType + 'Capabilities'), g in h)) {
              d = !0;
              h[g] || (h[g] = []);
              var k;
              'audio' == f.contentType
                ? (k = f.a.f)
                : 'video' == f.contentType && (k = f.a.j);
              h[g].push({ contentType: f.b, robustness: k });
            }
          }
        }
        if (!d)
          if (b.length) this.a = b[0].a;
          else throw ((a = Error('No DrmInfo exists!')), (a.type = 'drm'), a);
        if (0 == Object.keys(c).length)
          return We(this.j, a), this.g.resolve(), Promise.resolve();
        k = new G();
        c = Xe(c, k);
        c = c.then(this.w.bind(this, b, a));
        k.reject(null);
        return c;
      };
      function Xe(a, b) {
        for (var c in a)
          b = b.catch(
            function (a, b) {
              return navigator.requestMediaKeySystemAccess(a, [b]);
            }.bind(null, c, a[c])
          );
        return b;
      }
      Te.prototype.w = function (a, b, c) {
        if (!this.c) return Ye();
        for (
          var d = c.keySystem,
            e = c.getConfiguration(),
            f = ['audio', 'video'],
            g = 0;
          g < f.length;
          ++g
        ) {
          var h = f[g];
          if (!b.a.hasOwnProperty(h)) {
            var k = e[h + 'Capabilities'];
            if (k) {
              for (var k = k[0], l = [], n = {}, p = 0; p < a.length; ++p) {
                var v = a[p],
                  w = k ? v.b == k.contentType : v.contentType == h;
                v.a.a != d ||
                  !w ||
                  v.id in n ||
                  (l.push(v),
                  (n[v.id] = !0),
                  (this.a = this.a ? Ub(this.a, v.a) : v.a));
              }
              b.set(h, l);
            }
          }
        }
        We(this.j, b);
        return c.createMediaKeys().then(
          function (a) {
            this.h = a;
          }.bind(this)
        );
      };
      function Ze(a) {
        return a.c
          ? a.h
            ? a.c
                .setMediaKeys(a.h)
                .then(
                  H(a, function () {
                    return this.c
                      ? this.a.c
                        ? this.h.setServerCertificate(this.a.c)
                        : Promise.resolve()
                      : Ye();
                  })
                )
                .then(
                  H(a, function () {
                    if (!this.c) return Ye();
                    for (var a = 0; a < this.a.b.length; ++a) {
                      var c = this.a.b[a];
                      this.u({
                        type: 'encrypted',
                        initDataType: c.initDataType,
                        initData: c.initData,
                      });
                    }
                    0 == this.a.b.length &&
                      D(this.i, this.c, 'encrypted', this.u.bind(this));
                  })
                )
            : Promise.resolve()
          : Ye();
      }
      function Ye() {
        var a = Error('EmeManager destroyed');
        a.type = 'destroy';
        return Promise.reject(a);
      }
      Te.prototype.u = function (a) {
        for (var b = new Uint8Array(a.initData), c = 0; c < this.b.length; ++c)
          if (Sa(b, this.b[c].data)) return;
        try {
          var d = $e(this);
        } catch (e) {
          b = y(e);
          this.dispatchEvent(b);
          this.g.reject(e);
          return;
        }
        a = d.generateRequest(a.initDataType, a.initData);
        this.b.push({ data: b, yb: d });
        a.catch(
          H(this, function (a) {
            if (this.c) {
              for (var b = 0; b < this.b.length; ++b)
                if (this.b[b].yb == d) {
                  this.b.splice(b, 1);
                  break;
                }
              b = y(a);
              this.dispatchEvent(b);
              this.g.reject(a);
            }
          })
        );
        this.f.push(d);
      };
      function $e(a) {
        var b = null,
          b = a.h.createSession();
        D(a.i, b, 'message', a.D.bind(a));
        D(a.i, b, 'keystatuseschange', a.C.bind(a));
        return b;
      }
      Te.prototype.D = function (a) {
        bf(this, a.target, this.a, a.message);
      };
      Te.prototype.C = function (a) {
        a = a.target;
        var b = {};
        a.keyStatuses.forEach(
          function (a, c) {
            if ('string' === typeof a) {
              var f = a;
              a = c;
              c = f;
            }
            if ('com.microsoft.playready' == this.a.a && 16 == a.byteLength) {
              var f = new DataView(a),
                g = f.getUint32(0, !0),
                h = f.getUint16(4, !0),
                k = f.getUint16(6, !0);
              f.setUint32(0, g, !1);
              f.setUint16(4, h, !1);
              f.setUint16(6, k, !1);
            }
            f = Sb(new Uint8Array(a));
            b[f] = c;
          }.bind(this)
        );
        if (a.expiration < Date.now()) {
          for (var c = 0; c < this.b.length; ++c)
            if (this.b[c].yb == a) {
              this.b.splice(c, 1);
              break;
            }
          a.close();
          this.f.splice(this.f.indexOf(a), 1);
        }
        cf(this.j, b);
      };
      function bf(a, b, c, d) {
        d = df(c, d);
        Se(new Re(d.url, d.body, d.method, c.l, d.headers, a.A))
          .then(
            H(a, function (a) {
              c.o && (a = c.o(a));
              return b.update(a);
            })
          )
          .then(
            H(a, function () {
              var a = x({ type: 'sessionReady', detail: b });
              this.dispatchEvent(a);
              this.o++;
              this.o >= this.f.length && this.g.resolve();
            })
          )
          .catch(
            H(a, function (a) {
              a.yb = b;
              a = y(a);
              this.dispatchEvent(a);
            })
          );
      }
      function df(a, b) {
        var c = { url: a.h, body: b.slice(0), method: 'POST', headers: {} };
        if ('com.microsoft.playready' === a.a) {
          for (
            var d = String.fromCharCode.apply(null, new Uint16Array(c.body)),
              d = new DOMParser().parseFromString(d, 'application/xml'),
              e = d.getElementsByTagName('name'),
              f = d.getElementsByTagName('value'),
              g = 0;
            g < e.length;
            g++
          )
            c.headers[e[g].childNodes[0].nodeValue] =
              f[g].childNodes[0].nodeValue;
          c.body = window.atob(
            d.getElementsByTagName('Challenge')[0].childNodes[0].nodeValue
          );
        }
        if (!a.u) return c;
        a.u(c);
        c.url = eb(c, 'url');
        if (null == c.url) throw Error("'url' cannot be null.");
        if (
          !(
            c.body instanceof ArrayBuffer ||
            'string' === typeof c.body ||
            null == c.body
          )
        )
          throw new TypeError(
            "'body' must be an ArrayBuffer, a string, or null."
          );
        c.method = eb(c, 'method');
        if ('GET' != c.method && 'POST' != c.method)
          throw Error("'method' must be either 'GET' or 'POST'.");
        c.headers = fb(c, 'headers', Object);
        if (null == c.headers) throw Error("'headers' cannot be null.");
        return c;
      }
      function W(a, b, c, d, e, f, g) {
        E.call(this, null);
        this.b = a;
        this.f = b;
        this.a = null;
        this.g = new ib();
        this.l = this.i = null;
        this.G = 0;
        this.S = this.Y = this.Z = null;
        this.ba = g;
        this.K = null;
        this.N = this.h = !1;
        this.V = this.X = !0;
        this.L = !1;
        this.c = {
          enableAdaptation: !0,
          streamBufferSize: 15,
          liveStreamEndTimeout: 15,
          licenseRequestTimeout: oa,
          mpdRequestTimeout: pa,
          segmentRequestTimeout: qa,
          preferredLanguage: 'en',
          restrictions: new ra(),
        };
        this.m = c;
        this.H = d;
        this.ca = e;
        this.ga = f;
        this.o = null;
        this.j = 1;
        this.T = null;
        this.u = this.A = this.w = !1;
        this.P = this.C = null;
      }
      r(W, E);
      q('shaka.player.Player', W);
      W.version = 'v1.6.4-fb';
      W.isBrowserSupported = function () {
        return !!window.MediaSource && !!window.Uint8Array;
      };
      W.prototype.Aa = function () {
        var a = {},
          b = this.a;
        if (b) {
          var c = b.Ub();
          a.BandwidthEstimator = c.BandwidthEstimator;
          var d = c.VideoSourceStream;
          d &&
            ((a.VideoSourceStream = d),
            (d = a.VideoBufferManager = d.Aa().SourceBufferManager) &&
              (a.VideoSourceBuffer = d.Aa().SourceBuffer));
          (d = a.AudioSourceStream = c.AudioSourceStream) &&
            (d = a.AudioBufferManager = d.Aa().SourceBufferManager) &&
            (a.AudioSourceBuffer = d.Aa().SourceBuffer);
          a.TextSourceStream = c.TextSourceStream;
          a.getManifest = b.Pb.bind(b);
        } else a.getManifest = function () {};
        a.Id = !0;
        return a;
      };
      W.prototype.getDebug = W.prototype.Aa;
      W.prototype.pa = function (a) {
        this.X = a;
      };
      W.prototype.setResumeAfterBuffering = W.prototype.pa;
      function Ve(a) {
        return 'text/vtt' == a
          ? !!window.VTTCue
          : MediaSource.isTypeSupported(a);
      }
      W.isTypeSupported = Ve;
      W.setTextStyle = function (a) {
        var b = document.getElementById('ShakaPlayerTextStyle');
        b ||
          ((b = document.createElement('style')),
          (b.id = 'ShakaPlayerTextStyle'),
          document.head.appendChild(b));
        for (b = b.sheet; b.cssRules.length; ) b.deleteRule(0);
        b.insertRule('::cue { ' + ya(a) + ' }', 0);
      };
      W.prototype.destroy = function () {
        return this.U()
          .then(
            H(this, function () {
              this.g.destroy();
              this.b = this.g = null;
              this.P && this.P.remove();
            })
          )
          .catch(function () {});
      };
      W.prototype.destroy = W.prototype.destroy;
      W.prototype.U = function () {
        this.L = !0;
        return ef(this);
      };
      W.prototype.unload = W.prototype.U;
      function ef(a) {
        var b;
        a.m && (b = a.m.getOperationLogger('unload').start());
        if (!a.a) return b && b.log(), Promise.resolve();
        a.h && ff(a, 'unloading');
        a.b.pause();
        jb(a.g);
        gf(a);
        hf(a);
        a.i && (a.i.destroy(), (a.i = null));
        a.a && (a.a.destroy(), (a.a = null));
        a.b.src = '';
        var c = Promise.resolve().then(function () {
          b && b.log();
        });
        a.h = !1;
        a.N = !1;
        a.A = !1;
        a.u = !1;
        return c;
      }
      function jf(a, b) {
        for (var c = 0; c < a.length; c++) b.push(a[c].contentType, a[c]);
      }
      W.prototype.Ba = function (a) {
        return kf(this, a);
      };
      W.prototype.load = W.prototype.Ba;
      function kf(a, b) {
        var c;
        a.m &&
          ((c = a.m.getOperationLogger('load').setState('loading').start()),
          (b.m = b.g.performanceLogger = a.m));
        a.H && (b.Jb = b.g.abrLogger = a.H);
        a.ba && (b.ha = a.ba);
        a.ca && (b.I = a.ca);
        a.ga && b.U.push(a.ga);
        lf(b, a.b);
        var d = null;
        a.L = !1;
        a.a &&
          (d = ef(a).then(
            H(a, function () {
              return b.rb();
            })
          ));
        a.b.autoplay && (ga('load'), D(a.g, a.b, 'timeupdate', a.ed.bind(a)));
        b.hc(a.c);
        b.ka = a.T;
        a.T = null;
        d || (d = b.rb());
        a.f.getBool('fix_shaka_player_load_race_condition', !1) && (a.a = b);
        d.catch(
          H(a, function (a) {
            b.destroy();
            return Promise.reject(a);
          })
        );
        return d
          .then(
            H(a, function () {
              if (mf(this, b)) return nf();
              this.a = b;
              D(this.g, this.a, 'seekrangechanged', this.ha.bind(this));
              D(this.g, this.a, 'allStreamsStarted', this.Ed.bind(this));
              var a = new B();
              jf(Ue(this.a), a);
              We(this.a, a);
              a = this.fa();
              c &&
                0 < a.length &&
                ((a = a.reduce(function (a, b) {
                  if (null === a || b.bandwidth < a.bandwidth) a = b;
                  return a;
                }, null)),
                c.setLowestQualityRepresentationID(a.streamInfoID));
              if (!this.c.enableContentProtection) return Promise.resolve();
              var d;
              this.m && (d = this.m.getOperationLogger('eme_init'));
              this.i = new Te(this, this.b, this.a);
              return this.i.initialize().then(function () {
                d && d.log();
              });
            })
          )
          .then(
            H(a, function () {
              if (mf(this, b)) return nf();
              of(this);
              D(this.g, this.b, 'playing', this.kd.bind(this));
              D(this.g, this.b, 'pause', this.ka.bind(this));
              D(this.g, this.b, 'waiting', this.sd.bind(this));
              D(this.g, this.b, 'play', this.la.bind(this));
              return pf(this.a, this, this.b);
            })
          )
          .then(
            H(a, function () {
              if (mf(this, b)) return nf();
              if (this.c.enableContentProtection) {
                var a;
                this.m && (a = this.m.getOperationLogger('eme_attach'));
                return Ze(this.i).then(function () {
                  a && a.log();
                });
              }
              return Promise.resolve();
            })
          )
          .then(
            H(a, function () {
              if (mf(this, b)) return nf();
              qf(this);
              c && c.updateState('ready').log();
            })
          )
          .catch(
            H(a, function (a) {
              c && c.setError(JSON.stringify(a)).log();
              if (mf(this, b)) return nf();
              if ('destroy' != a.type) {
                var d = y(a);
                this.dispatchEvent(d);
              }
              return this.U().then(function () {
                return Promise.reject(a);
              });
            })
          );
      }
      function mf(a, b) {
        return (
          !a.b ||
          a.L ||
          (a.f.getBool('fix_shaka_player_load_race_condition', !1) && b !== a.a)
        );
      }
      m = W.prototype;
      m.Ed = function () {
        this.N = !0;
        this.h ? this.D() : (this.b.playbackRate = this.j);
      };
      function nf() {
        var a = Error('Player destroyed');
        a.type = 'destroy';
        return Promise.reject(a);
      }
      function of(a) {
        var b = a.b.parentNode;
        b &&
          a.f.getBool('prevent_playing_on_insufficient_buffer', !1) &&
          (a.P = eventListenerCapture(
            b,
            'playing',
            function (a) {
              a.target === this.b && this.D(a);
            }.bind(a)
          ));
      }
      m.ed = function () {
        ka('load');
        this.g.gb(this.b, 'timeupdate');
      };
      m.sd = function (a) {
        rf(this);
        this.f.getBool('unify_stream_start_with_buffer_detector', !1) &&
          !this.h &&
          this.D(a);
      };
      m.kd = function () {
        ga('playing');
        this.m && this.m.getEventLogger('playing').setState('playing').log();
        !this.l &&
          0 > this.j &&
          ((this.b.playbackRate = 0),
          this.O(this.b.currentTime, Date.now(), this.j));
        this.h && !this.V && ff(this, 'playing');
      };
      m.Ad = function (a) {
        this.u = a;
      };
      W.prototype.setPendingPlayRequest = W.prototype.Ad;
      W.prototype.la = function () {
        this.u = !0;
      };
      W.prototype.ka = function () {
        this.m && this.m.getEventLogger('pause').setState('paused').log();
        ka('playing');
        hf(this);
      };
      W.prototype.ha = function (a) {
        this.G = a.start;
        this.Z = a.last;
        this.Y = a.end;
        this.S = a.seekRangeGaps;
        this.f.getBool('no_skip_gaps_on_seek_range_changed', !1) || rf(this);
      };
      W.prototype.fa = function () {
        return this.a ? this.a.Y() : [];
      };
      W.prototype.getVideoTracks = W.prototype.fa;
      W.prototype.ua = function () {
        return this.a ? this.a.ua() : [];
      };
      W.prototype.getAudioTracks = W.prototype.ua;
      W.prototype.wa = function () {
        return this.a ? this.a.ic() : [];
      };
      W.prototype.getTextTracks = W.prototype.wa;
      W.prototype.selectVideoTrack = function (a, b) {
        return this.a ? this.a.selectVideoTrack(a, void 0 == b ? !0 : b) : !1;
      };
      W.prototype.selectVideoTrack = W.prototype.selectVideoTrack;
      W.prototype.Ca = function (a, b, c) {
        return this.a ? sf(this.a, 'audio', a, void 0 == b ? !0 : b, c) : !1;
      };
      W.prototype.selectAudioTrack = W.prototype.Ca;
      W.prototype.Da = function (a) {
        return this.a ? sf(this.a, 'text', a, !1) : !1;
      };
      W.prototype.selectTextTrack = W.prototype.Da;
      W.prototype.sa = function (a) {
        this.a && tf(this.a, a);
      };
      W.prototype.enableTextTrack = W.prototype.sa;
      W.prototype.na = function (a) {
        hf(this);
        (this.w && this.h) || !(0 <= a)
          ? this.b.paused ||
            ((this.b.playbackRate = 0),
            this.O(this.b.currentTime, Date.now(), a))
          : (this.b.playbackRate = a);
        this.j = a;
      };
      W.prototype.setPlaybackRate = W.prototype.na;
      W.prototype.ia = function () {
        return this.j;
      };
      W.prototype.getPlaybackRate = W.prototype.ia;
      W.prototype.Fa = function (a) {
        this.T = a;
      };
      W.prototype.setPlaybackStartTime = W.prototype.Fa;
      W.prototype.I = function () {
        return this.a ? !!this.a.O() : !1;
      };
      W.prototype.isLive = W.prototype.I;
      W.prototype.ra = function (a) {
        if (a) {
          var b = z(a, 'enableAdaptation');
          null != b && (this.c.enableAdaptation = b);
          b = z(a, 'endBufferingOnPlaying');
          null != b && (this.V = b);
          b = z(a, 'usePlaybackRateForBuffering');
          null != b && (this.w = b);
          b = A(a, 'streamBufferSize', 0);
          null != b && (this.c.streamBufferSize = b);
          b = A(a, 'dynamicStreamBufferSize', 0);
          null != b && (this.c.dynamicStreamBufferSize = b);
          null != a.smartBufferAdjustmentParams &&
            (this.c.smartBufferAdjustmentParams =
              a.smartBufferAdjustmentParams);
          b = z(a, 'addCdnDebugQueryParameters');
          null != b && (this.c.addCdnDebugQueryParameters = b);
          b = A(a, 'initialStreamBufferSize', 0);
          null != b && (this.c.initialStreamBufferSize = b);
          b = z(a, 'includeStreamBufferSizeInStartOffset');
          null != b && (this.c.includeStreamBufferSizeInStartOffset = b);
          b = A(a, 'jumpToLiveThreshold');
          null != b && (this.c.jumpToLiveThreshold = b);
          b = A(a, 'liveStreamEndTimeout', 0);
          null != b && (this.c.liveStreamEndTimeout = b);
          b = A(a, 'licenseRequestTimeout', 0);
          null != b && (this.c.licenseRequestTimeout = b);
          b = A(a, 'mpdRequestTimeout', 0);
          null != b && (this.c.mpdRequestTimeout = b);
          b = A(a, 'minMpdRefreshInterval', 0);
          null != b && (this.c.minMpdRefreshInterval = b);
          b = z(a, 'enableLiveInterruptionDetection');
          null != b && (this.c.enableLiveInterruptionDetection = b);
          b = z(a, 'enableManifestDebug');
          null != b &&
            ((this.c.enableManifestDebug = b),
            (E.prototype.mc = b),
            b || (E.prototype.Ia = function () {}));
          b = z(a, 'resolveVideoTimeUpdateOnFragmentedTimeRanges');
          null != b &&
            (this.c.resolveVideoTimeUpdateOnFragmentedTimeRanges = b);
          b = A(a, 'liveInterruptionConsecutiveUpdatesWithoutChange');
          null != b &&
            (this.c.liveInterruptionConsecutiveUpdatesWithoutChange = b);
          b = A(a, 'liveInterruptionConsecutiveUpdatesWithChange');
          null != b &&
            (this.c.liveInterruptionConsecutiveUpdatesWithChange = b);
          b = z(a, 'reappendInitSegmentAfterAbort');
          null != b && (this.c.reappendInitSegmentAfterAbort = b);
          b = z(a, 'liveSendPushHeaders');
          null != b && (this.c.liveSendPushHeaders = b);
          b = A(a, 'liveMaxManifestFetchesWithPush');
          null != b && (this.c.liveMaxManifestFetchesWithPush = b);
          b = A(a, 'liveMaxSegmentsToPush');
          null != b && (this.c.liveMaxSegmentsToPush = b);
          b = A(a, 'segmentRequestTimeout', 0);
          null != b && (this.c.segmentRequestTimeout = b);
          b = eb(a, 'preferredLanguage');
          null != b && (this.c.preferredLanguage = b);
          b = fb(a, 'restrictions', ra);
          null != b && (this.c.restrictions = b.clone());
          b = a.liveInitialPushRepresentation;
          null != b && (this.c.liveInitialPushRepresentation = b);
          b = a.liveAudioPushRepresentation;
          null != b && (this.c.liveAudioPushRepresentation = b);
          b = a.useInlineInitSegment;
          null != b && (this.c.useInlineInitSegment = b);
          b = z(
            a,
            'disableCacheBustingEvenThoughItMayAffectBandwidthEstimation'
          );
          null != b && (Zc = !b);
          b = z(a, 'currentTimeDuringReadyStateZeroThrows');
          null != b && (this.c.currentTimeDuringReadyStateZeroThrows = b);
          b = A(a, 'liveDataFetchMaxRetries');
          null != b && (this.c.liveDataFetchMaxRetries = b);
          b = A(a, 'liveSourceBufferClearMaxRetries');
          null != b && (this.c.liveSourceBufferClearMaxRetries = b);
          b = z(a, 'useLongCacheForManifest');
          null != b && (this.c.useLongCacheForManifest = b);
          b = z(a, 'jumpToEarliestPositionInCurrentBlock');
          null != b && (this.c.jumpToEarliestPositionInCurrentBlock = b);
          b = z(a, 'ignoreMinBufferTime');
          null != b && (this.c.ignoreMinBufferTime = b);
          b = A(a, 'playheadFragmentedGapDiffAllowance');
          null != b && (this.c.playheadFragmentedGapDiffAllowance = b);
          b = z(a, 'fixBufferingGoalDetermination');
          null != b && (this.c.fixBufferingGoalDetermination = b);
          b = z(a, 'skipEmptySegments');
          null != b && (this.c.skipEmptySegments = b);
          (b = z(a, 'useMicroTaskTimeouts')) &&
            (this.c.useMicroTaskTimeouts = b);
          (b = z(a, 'enableRequestPipelining')) &&
            (this.c.enableRequestPipelining = b);
          (b = z(a, 'enableStreaming')) && (this.c.enableStreaming = b);
          (a = z(a, 'enableContentProtection')) &&
            (this.c.enableContentProtection = a);
          this.a && this.a.hc(this.c);
        }
      };
      W.prototype.configure = W.prototype.ra;
      W.prototype.Ea = function (a) {
        this.a && this.a.lc(a);
      };
      W.prototype.setEnableLiveheadCatchup = W.prototype.Ea;
      W.prototype.xa = function () {
        return this.a ? this.a.na : !1;
      };
      W.prototype.isLiveheadCatchupEnabled = W.prototype.xa;
      function rf(a) {
        if (
          a.f.getBool('skip_manifest_gap_based_on_stream_limits', !1) &&
          (!a.I() || !a.f.getBool('no_skip_manifest_gaps_if_live', !1))
        ) {
          var b;
          a.f.getBool('skip_manifest_gaps_use_cached_stream_limits', !1)
            ? a.a && null !== a.S
              ? (b = { start: a.G, end: a.Y, last: a.Z, Sa: a.S })
              : (b = a.a ? a.a.ib() : null)
            : (b = a.a ? a.a.ib() : null);
          if (b)
            for (
              var c =
                  a.f.getNumber(
                    'skip_manifest_gap_boundary_precision_ms',
                    1e3
                  ) / 1e3,
                d = b.Sa,
                e = a.b.playbackRate,
                f = a.b.currentTime,
                g = 0;
              g < d.length;
              ++g
            ) {
              var h = d[g].startTime - c,
                k = d[g].endTime + c;
              f <= k &&
                f >= h &&
                (a.f.getBool('fix_seek_range_gap_boundary', !1) ||
                  ((h = d[g].startTime), (k = d[g].endTime)),
                0 <= e
                  ? b.end > k && (a.b.currentTime = k)
                  : b.start < h && (a.b.currentTime = h));
            }
        }
      }
      W.prototype.ja = function () {
        var a = this.a && this.a.ib();
        return (
          (a = a && {
            start: a.start,
            end: a.end,
            last: a.last,
            seekRangeGaps: a.Sa,
          }) || null
        );
      };
      W.prototype.getVideoSourceStreamLimits = W.prototype.ja;
      W.prototype.va = function () {
        return this.c;
      };
      W.prototype.getConfiguration = W.prototype.va;
      function hf(a) {
        a.l && (clearTimeout(a.l), (a.l = null));
      }
      function qf(a) {
        gf(a);
        a.K = setTimeout(a.D.bind(a), 100);
      }
      function gf(a) {
        a.K && (clearTimeout(a.K), (a.K = null));
      }
      W.prototype.O = function (a, b, c) {
        this.l = null;
        var d = ((Date.now() - b) / 1e3) * c;
        this.b.currentTime < this.G + (this.I() ? 1 : 0.05)
          ? this.b.pause()
          : ((d = Math.max(this.G, a + d)),
            (this.b.currentTime = d),
            (this.l = setTimeout(this.O.bind(this, a, b, c), 250)));
      };
      function uf(a) {
        return (
          a.f.getBool('unify_stream_start_with_buffer_detector', !1) && !a.N
        );
      }
      function ff(a, b) {
        if (!uf(a)) {
          ka('buffering');
          null !== a.C && (a.C = null);
          a.o && (a.o.setConcluder(b).log(), (a.o = null));
          if (a.H) {
            var c = Date.now();
            a.H.setEvent('buffering')
              .setClientTimeBegin(Math.round(c - la()))
              .setClientTimeEnd(Math.round(c))
              .log();
          }
          a.w && (a.b.playbackRate = a.j);
          a.h = !1;
          a.dispatchEvent(x({ type: 'bufferingEnd' }));
          a.A && ((a.A = !1), dispatchDomEvent(a.b, 'playing'));
          a.u = !1;
        }
      }
      function vf(a) {
        var b = a.b.buffered;
        if (1 === b.length) b = b.end(0);
        else if (0 === b.length) b = 0;
        else {
          for (var c = 0, d = 0; d < b.length; ++d)
            b.end(d) >= a.b.currentTime &&
              (c =
                b.start(d) <= a.b.currentTime
                  ? c + (b.end(d) - a.b.currentTime)
                  : c + (b.end(d) - b.start(d)));
          return c;
        }
        return Math.max(b - a.b.currentTime, 0);
      }
      W.prototype.D = function (a) {
        if (
          !this.f.getBool('prevent_playing_on_insufficient_buffer', !1) ||
          !this.L
        ) {
          qf(this);
          var b = a ? a.type : '',
            c = 'waiting' === b;
          if ((!this.b.ended && !this.b.seeking) || c) {
            var d = this.b.buffered,
              e = d.length ? d.end(d.length - 1) : 0,
              f;
            this.f.getBool('fix_unstall_buffer_calculation', !1)
              ? (f = vf(this))
              : (f = Math.max(e - this.b.currentTime, 0));
            var g = this.b.currentTime,
              d = this.I()
                ? this.f.getNumber('live_buffering_underflow_threshold', 0.5)
                : this.f.getNumber('buffering_underflow_threshold', 0),
              h = this.b.duration,
              h = isNaN(h) ? 0 : Math.max(h - 0.05, 0),
              e = e >= h || g >= h,
              b = b || 'watchdog_timer';
            if (this.h) {
              wf(this, a);
              a = xf(this.a);
              var k = 0 < a ? f / a : 0;
              f > a ||
              yf(this.a) ||
              (this.f.getBool('fix_buffering_at_the_end_of_playback', !0) && e)
                ? (ff(this, b), this.X && !this.w && this.b.play())
                : this.C !== k &&
                  ((this.C = k),
                  this.dispatchEvent(
                    x({ type: 'bufferingProgress', progress: k })
                  ));
            } else
              (this.b.paused && !c) ||
                !((!e && f < d) || uf(this)) ||
                ((this.h = !0),
                this.w ? (this.b.playbackRate = 0) : this.b.pause(),
                this.m &&
                  !this.o &&
                  ((f = this.b.buffered),
                  (f = f.length ? f.end(f.length - 1) : 0),
                  this.f.getBool('fix_unstall_buffer_calculation', !1)
                    ? (k = vf(this))
                    : (k = Math.max(f - this.b.currentTime, 0)),
                  (f = 1e3 * (xf(this.a) - k)),
                  (this.o = this.m
                    .getOperationLogger('buffering')
                    .setLength(Math.round(f))
                    .setType(this.u ? 'start/unpause' : 'in_play')
                    .setInitiator(b)
                    .start())),
                ga('buffering'),
                this.dispatchEvent(x({ type: 'bufferingStart' })),
                this.f.getBool('no_skip_gaps_on_buffering', !1) || rf(this),
                wf(this, a)),
                yf(this.a) && ff(this, b);
          } else
            this.f.getBool('fix_ff_in_play_stall_upon_seek', !1) && wf(this, a);
        }
      };
      function wf(a, b) {
        b && 'playing' === b.type && ((a.A = !0), eventKill(b));
      }
      W.prototype.qa = function (a) {
        if (this.a) {
          var b = this.a;
          b.c.video && b.c.video.Ic(a);
        }
      };
      W.prototype.setVideoStreamOffset = W.prototype.qa;
      function zf(a) {
        for (var b = 0; b < a.length; ++b)
          for (var c = a[b], d = 0; d < c.a.length; ++d) {
            for (var e = c.a[d], f = e, g = !1, h = 0; h < f.v.length; ++h) {
              var k = f.v[h];
              Ve(Ud(k))
                ? 'video/webm; codecs="av1"' === Ud(k) && (g = !0)
                : (f.v.splice(h, 1), --h);
            }
            if (g)
              for (h = 0; h < f.v.length; ++h)
                (k = f.v[h]),
                  'video/webm; codecs="av1"' !== Ud(k) &&
                    (f.v.splice(h, 1), --h);
            0 == e.v.length && (c.a.splice(d, 1), --d);
          }
        for (b = 0; b < a.length; ++b)
          for (c = a[b], d = 0; d < c.a.length; ++d) c.a[d].v.sort(Af);
      }
      function Af(a, b) {
        var c = a.bandwidth || Number.MAX_VALUE,
          d = b.bandwidth || Number.MAX_VALUE;
        return c < d ? -1 : c > d ? 1 : 0;
      }
      function Bf(a) {
        this.a = a;
      }
      Bf.prototype.destroy = function () {
        this.a.destroy();
        this.a = null;
      };
      Bf.prototype.update = function (a) {
        var b = Cf(a),
          c = Cf(this.a);
        return Promise.all([b, c]).then(
          H(this, function (b) {
            var c = b[0];
            b = b[1];
            zf(this.a.a);
            a.b && !this.a.b && (a.g = !0);
            a.c = this.a.c;
            a.h = this.a.h ? this.a.h.clone() : null;
            a.f = this.a.f;
            var f = [];
            Df(a, this.a, c, b, f);
            zf(a.a);
            return Promise.resolve(f);
          })
        );
      };
      function Cf(a) {
        function b(a, b) {
          return a.concat(b);
        }
        var c = a.a
          .map(function (a) {
            return a.a;
          })
          .reduce(b, [])
          .map(function (a) {
            return a.v;
          })
          .reduce(b, []);
        a = c.map(function (a) {
          return a.R.create();
        });
        return Promise.all(a).then(function (a) {
          for (var b = {}, f = 0; f < c.length; ++f) b[c[f].W] = a[f];
          return Promise.resolve(b);
        });
      }
      function Df(a, b, c, d, e) {
        var f = new B();
        a.a.forEach(function (a, b) {
          f.push(a.id || '' + b, a);
        });
        var g = new B();
        b.a.forEach(function (a, b) {
          g.push(a.id || '' + b, a);
        });
        a = hb(f);
        for (b = 0; b < a.length; ++b) {
          var h = a[b],
            k = f.get(h);
          1 < k.length ||
            ((h = g.get(h)) &&
              0 != h.length &&
              1 == h.length &&
              (Ef(k[0], h[0], c, d, e), (k[0].duration = h[0].duration)));
        }
      }
      function Ef(a, b, c, d, e) {
        var f = new B();
        a.a.forEach(function (a, b) {
          f.push(a.id || '' + b, a);
        });
        var g = new B();
        b.a.forEach(function (a, b) {
          g.push(a.id || '' + b, a);
        });
        a = hb(f);
        for (b = 0; b < a.length; ++b) {
          var h = a[b],
            k = f.get(h);
          1 < k.length ||
            ((h = g.get(h)) &&
              0 != h.length &&
              1 == h.length &&
              Gf(k[0], h[0], c, d, e));
        }
      }
      function Gf(a, b, c, d, e) {
        var f = new B();
        a.v.forEach(function (a, b) {
          f.push(a.id || '' + b, a);
        });
        var g = new B();
        b.v.forEach(function (a, b) {
          g.push(a.id || '' + b, a);
        });
        b = {};
        for (var h = hb(f), k = 0; k < h.length; ++k) {
          var l = h[k];
          b[l] = l;
          var n = f.get(l);
          1 < n.length ||
            ((l = g.get(l)) && 0 != l.length
              ? 1 == l.length &&
                (Hf(n[0], l[0], c, d),
                (n[0].aa = l[0].aa),
                (l[0].aa = null),
                (n[0].a = l[0].a),
                VideoPlayerShakaGlobalConfig.getBool(
                  'refresh_bandwidth_from_live_manifest',
                  !1
                ) && (n[0].bandwidth = l[0].bandwidth))
              : (e.push(n[0]), a.v.splice(a.v.indexOf(n[0]), 1)));
        }
        h = hb(g);
        for (k = 0; k < h.length; ++k)
          (l = h[k]), b[l] || ((b[l] = l), (l = g.get(l)), a.v.push(l[0]));
      }
      function Hf(a, b, c, d) {
        a = c[a.W];
        d = d[b.W];
        b = a.length();
        a.Bb(d) &&
          ((d = a.length()), a.g.push(b !== d), 50 < a.g.length && a.g.shift());
      }
      function X() {
        this.a = this.b = null;
        this.f = new ib();
        this.c = Number.POSITIVE_INFINITY;
        this.i = !0;
        this.g = !1;
      }
      q('shaka.media.SimpleAbrManager', X);
      X.prototype.destroy = function () {
        this.f.destroy();
        this.a = this.b = this.f = null;
      };
      X.prototype.initialize = function (a, b) {
        this.b || this.a || ((this.b = a), (this.a = b));
      };
      X.prototype.start = function () {
        this.b &&
          this.a &&
          !this.g &&
          ((this.c = Date.now() + 4e3),
          D(this.f, this.b.getEstimator(), 'bandwidth', this.l.bind(this)),
          D(this.f, this.a, 'adaptation', this.j.bind(this)),
          D(this.f, this.a, 'trackschanged', this.h.bind(this)),
          (this.g = !0));
      };
      X.prototype.enable = function (a) {
        this.i = a;
      };
      X.prototype.getInitialVideoTrackId = function () {
        if (!this.b || !this.a) return null;
        var a = If(this);
        return a ? a.id : null;
      };
      X.prototype.getInitialSwitchReason = function () {
        return null;
      };
      X.prototype.getInitialAudioTrackId = function () {
        return null;
      };
      X.prototype.selectVideoTrack = function (a, b, c) {
        this.g && this.a.selectVideoTrack(a.id, b, c);
      };
      X.prototype.l = function () {
        Date.now() < this.c || this.h();
      };
      X.prototype.h = function () {
        if (this.i) {
          var a = If(this);
          if (a) {
            if (a.active) {
              this.c = Date.now() + 3e3;
              return;
            }
            this.selectVideoTrack(a, !1);
          }
          this.c = Number.POSITIVE_INFINITY;
        }
      };
      X.prototype.j = function () {
        this.c == Number.POSITIVE_INFINITY && (this.c = Date.now() + 3e4);
      };
      function If(a) {
        var b = a.a.Y();
        if (0 == b.length) return null;
        b.sort(Ca);
        var c;
        a: {
          c = a.a.ua();
          for (var d = 0; d < c.length; ++d)
            if (c[d].active) {
              c = c[d];
              break a;
            }
          c = null;
        }
        c = c ? c.bandwidth : 0;
        a = a.b.getBandwidth();
        for (var d = b[0], e = 0; e < b.length; ++e) {
          var f = b[e],
            g =
              e + 1 < b.length
                ? b[e + 1]
                : { bandwidth: Number.POSITIVE_INFINITY };
          if (
            f.bandwidth &&
            ((g = (g.bandwidth + c) / 0.85),
            a >= (f.bandwidth + c) / 0.95 && a <= g && ((d = f), d.active))
          )
            break;
        }
        return d;
      }
      function Y(a, b, c, d) {
        E.call(this, null);
        this.a = a;
        this.b = b;
        this.va = c;
        this.Cb = new VideoPlayerLocalBandwidthEstimator(this, c, b);
        this.h = new ib();
        this.i = new MediaSource();
        this.ba = this.video = null;
        this.Kb = 0;
        this.kc = this.Wb = !1;
        this.Hb = pa;
        this.Jb = this.V = this.ha = this.m = null;
        this.Gb = 3;
        this.qa = this.Xb = this.Ea = this.Da = !1;
        this.ab = 0;
        this.da = new VideoPushTracker();
        this.ga = null;
        this.ec = 1;
        this.cc = Infinity;
        this.Qb = this.Ob = !1;
        this.pa = this.$a = null;
        this.Sb = this.Rb = this.Fa = this.Zb = this.la = !1;
        this.f = new B();
        this.A = d;
        this.A.initialize(this.Cb, this);
        this.N = !1;
        this.S = 'en';
        this.xa = !1;
        this.K = new G();
        this.Eb = new G();
        this.l = new ra();
        this.D = null;
        this.gc = 1;
        this.c = {};
        this.ra = new G();
        this.ia = 0;
        this.bb = 15e3;
        this.j = null;
        this.ac = !1;
        this.$b = 0;
        this.Ba = !1;
        this.C = {};
        this.ka = this.ja = this.u = null;
        this.g = {};
        this.Z = !1;
        this.bc = 0;
        this.L = this.b.getNumber('buffering_overflow_threshold', 0);
        this.Lb = null;
        this.o = {};
        this.w = {};
        this.P = null;
        this.U = [];
        this.T = this.I = null;
        this.H = new NetworkStatusDetector();
        this.dc = !1;
        this.na = !0;
        this.fa = !1;
        this.nc = new SubscriptionsHandler();
        this.Vb = !1;
        this.wa = 1;
        this.yd = this.b.getNumber(
          'stream_maximum_onpause_buffer_size_multiplier',
          0
        );
        this.ca = null;
        this.b.getBool('allow_infinite_retry_on_net_err', !0) &&
          this.nc.addSubscriptions(
            this.H.addListener('networkInterrupted', this.Rc, this),
            this.H.addListener('networkResumed', this.Sc, this),
            this.H.addListener('systemWake', this.Tc, this)
          );
      }
      r(Y, E);
      q('shaka.player.StreamVideoSource', Y);
      Y.prototype.Ub = function () {
        return {
          VideoSourceStream: this.c.video,
          AudioSourceStream: this.c.audio,
          TextSourceStream: this.c.text,
          BandwidthEstimator: this.va,
        };
      };
      Y.prototype.getStreamDebug = Y.prototype.Ub;
      Y.prototype.Nc = function () {
        return this.a ? this.a.u : 'none';
      };
      Y.prototype.getMpdAudioConfig = Y.prototype.Nc;
      Y.prototype.hc = function (a) {
        null != a.streamBufferSize &&
          (this.g.streamBufferSize = a.streamBufferSize);
        null != a.initialStreamBufferSize &&
          (this.g.initialStreamBufferSize = a.initialStreamBufferSize);
        null != a.dynamicStreamBufferSize &&
          (this.g.dynamicStreamBufferSize = a.dynamicStreamBufferSize);
        null != a.smartBufferAdjustmentParams &&
          (this.g.smartBufferAdjustmentParams = a.smartBufferAdjustmentParams);
        null != a.addCdnDebugQueryParameters &&
          (this.g.addCdnDebugQueryParameters = a.addCdnDebugQueryParameters);
        null != a.segmentRequestTimeout &&
          (this.g.segmentRequestTimeout = a.segmentRequestTimeout);
        null != a.resolveVideoTimeUpdateOnFragmentedTimeRanges &&
          (this.g.resolveVideoTimeUpdateOnFragmentedTimeRanges =
            a.resolveVideoTimeUpdateOnFragmentedTimeRanges);
        null != a.reappendInitSegmentAfterAbort &&
          (this.g.reappendInitSegmentAfterAbort =
            a.reappendInitSegmentAfterAbort);
        null != a.liveDataFetchMaxRetries &&
          (this.g.liveDataFetchMaxRetries = a.liveDataFetchMaxRetries);
        null != a.liveSourceBufferClearMaxRetries &&
          (this.g.liveSourceBufferClearMaxRetries =
            a.liveSourceBufferClearMaxRetries);
        null != a.playheadFragmentedGapDiffAllowance &&
          (this.g.playheadFragmentedGapDiffAllowance =
            a.playheadFragmentedGapDiffAllowance);
        null != a.fixBufferingGoalDetermination &&
          (this.g.fixBufferingGoalDetermination =
            a.fixBufferingGoalDetermination);
        null != a.skipEmptySegments &&
          (this.g.skipEmptySegments = a.skipEmptySegments);
        null != a.useMicroTaskTimeouts &&
          (this.g.useMicroTaskTimeouts = a.useMicroTaskTimeouts);
        Jf(this);
        null != a.includeStreamBufferSizeInStartOffset &&
          (this.Wb = Boolean(a.includeStreamBufferSizeInStartOffset));
        null != a.liveAudioPushRepresentation &&
          (this.pa = String(a.liveAudioPushRepresentation));
        null != a.liveInitialPushRepresentation &&
          (this.$a = String(a.liveInitialPushRepresentation));
        null != a.enableAdaptation &&
          this.A.enable(Boolean(a.enableAdaptation));
        null != a.mpdRequestTimeout && (this.Hb = Number(a.mpdRequestTimeout));
        null != a.minMpdRefreshInterval &&
          (this.Gb = Number(a.minMpdRefreshInterval) / 1e3);
        null != a.enableManifestDebug && (this.Qb = !!a.enableManifestDebug);
        null != a.liveStreamEndTimeout &&
          (this.bb = Number(a.liveStreamEndTimeout));
        null != a.preferredLanguage &&
          (this.S = Za(String(a.preferredLanguage)));
        null != a.liveSendPushHeaders &&
          (this.qa = Boolean(a.liveSendPushHeaders));
        null != a.liveMaxManifestFetchesWithPush &&
          (this.ab = Number(a.liveMaxManifestFetchesWithPush));
        null != a.currentTimeDuringReadyStateZeroThrows &&
          (this.Ob = Boolean(a.currentTimeDuringReadyStateZeroThrows));
        null != a.liveMaxSegmentsToPush &&
          (this.cc = Number(a.liveMaxSegmentsToPush));
        null != a.jumpToLiveThreshold &&
          (this.$b = Number(a.jumpToLiveThreshold));
        null != a.restrictions &&
          ((this.l = a.restrictions), this.N && Kf(this));
        null != a.useLongCacheForManifest &&
          (this.la = Boolean(a.useLongCacheForManifest));
        null != a.jumpToEarliestPositionInCurrentBlock &&
          (this.Zb = Boolean(a.jumpToEarliestPositionInCurrentBlock));
        null != a.ignoreMinBufferTime &&
          (this.Fa = Boolean(a.ignoreMinBufferTime));
        null !== a.enableRequestPipelining &&
          (this.Rb = Boolean(a.enableRequestPipelining));
        null !== a.enableStreaming && (this.Sb = Boolean(a.enableStreaming));
      };
      Y.prototype.destroy = function () {
        this.K.destroy();
        this.ra.destroy();
        this.ra = this.K = null;
        this.ja && (clearTimeout(this.ja), (this.ja = null));
        this.u && (clearTimeout(this.u), (this.u = null));
        this.C = null;
        this.h.destroy();
        this.h = null;
        cb(this.c).forEach(function (a) {
          a.destroy();
        });
        this.f = this.c = null;
        this.a && (this.a.destroy(), (this.a = null));
        this.A.destroy();
        this.Ga = this.l = this.video = this.i = this.va = this.A = null;
        this.b.getBool('fixing_scheduler_disable_leaks', !0) &&
          (Object.keys(this.o).forEach(
            function (a) {
              (a = this.o[a]) && a.disable();
            }.bind(this)
          ),
          (this.o = {}));
        Object.keys(this.w).forEach(
          function (a) {
            (a = this.w[a]) && a.destroy();
          }.bind(this)
        );
        this.w = {};
        this.I && (this.I.disable(), (this.I = null));
        this.P && (this.P.cleanup(), (this.P = null));
        for (var a = 0; a < this.U.length; a++) this.U[a].cleanup();
        this.U = [];
        this.nc.release();
      };
      function lf(a, b) {
        if (a.m) {
          var c = a.m.getOperationLogger('media_source_open').start();
          a.Eb.then(function () {
            c.log();
          });
        }
        D(a.h, a.i, 'sourceopen', a.hd.bind(a));
        b.src = window.URL.createObjectURL(a.i);
      }
      m = Y.prototype;
      m.rc = function () {};
      function pf(a, b, c) {
        var d;
        a.m && (d = a.m.getOperationLogger('source_attach').start());
        if (!a.N)
          return (
            (a = Error('Cannot call attach() right now.')),
            (a.type = 'app'),
            d && d.setError(a).log(),
            Promise.reject(a)
          );
        a.Ga = b;
        a.video = c;
        a.ba = null;
        a.b.getBool('enable_viewport_priority_adjustment', !1) &&
          ((a.P = new ViewportPriorityAdjuster(a.video)),
          a.P.setOnPriorityChanged(
            function (a) {
              Object.keys(this.o).forEach(
                function (b) {
                  this.o[b].updatePriorityWithNewAdjustment(a);
                }.bind(this)
              );
            }.bind(a)
          ));
        a.b.getBool('enable_first_video_priority_adjustment', !1) &&
          a.U.push(new FirstLoadedVideoPriorityAdjuster(a.video));
        D(a.h, a.video, 'loadedmetadata', a.gd.bind(a));
        D(a.h, a.va, 'bandwidth', a.Fd.bind(a));
        if (a.a.b || a.b.getBool('back_off_buffering_overflow', !1))
          D(a.h, b, 'bufferingStart', a.cd.bind(a)),
            D(a.h, b, 'bufferingEnd', a.bd.bind(a));
        b = a.b.getBool('enable_content_protection', !1)
          ? (b = a.video.mediaKeys) && a.video.setMediaKeys
            ? a.video.setMediaKeys(b)
            : Promise.resolve()
          : Promise.resolve();
        Lf(a)
          .then(
            H(a, function () {
              d && this.O() && d.setLiveheadPosition(Mf(Nf(this)));
              this.K && this.K.resolve();
              this.rc();
            })
          )
          .catch(
            H(a, function (a) {
              this.K && this.K.reject(a);
            })
          );
        return Promise.all([a.K, b]).then(function () {
          d && d.log();
        });
      }
      m.rb = function () {
        if (this.N) {
          var a = Error('Cannot call load() right now.');
          a.type = 'app';
          return Promise.reject(a);
        }
        if (!this.a || 0 == this.a.a.length)
          return (
            (a = Error('The manifest does not specify any content.')),
            (a.type = 'stream'),
            Promise.reject(a)
          );
        zf(this.a.a);
        if (
          0 == this.a.a.length ||
          0 == this.a.a[0].a.length ||
          !this.a.a[0].a.some(function (a) {
            return 'video' === a.contentType;
          })
        )
          return (
            (a = Error(
              'The manifest specifies content that cannot be displayed on this browser/platform.'
            )),
            (a.type = 'stream'),
            Promise.reject(a)
          );
        this.N = !0;
        this.Fa ||
          (this.g.initialStreamBufferSize = Math.max(
            this.g.initialStreamBufferSize || 0,
            this.a.f
          ));
        this.ha && this.ha.setStreamType(this.a.A);
        Jf(this);
        Kf(this);
        return Promise.resolve();
      };
      function Of(a) {
        var b = x({ type: 'manifestwrapped', bubbles: !0 });
        a.dispatchEvent(b);
      }
      function Pf(a, b) {
        var c = x({ type: 'liveheadIdleAt', seconds: b, bubbles: !0 });
        a.dispatchEvent(c);
      }
      function Mf(a) {
        return Math.min.apply(
          Math,
          a
            .map(function (a) {
              return a.length() ? a.last().endTime : null;
            })
            .filter(function (a) {
              return !!a;
            })
        );
      }
      m.Fb = function (a, b) {
        var c;
        this.b.getBool('decouple_mpd_update_loop_from_request_loop', !1) &&
          Qf(this, 0);
        this.V && (this.V.log(), (this.V = null));
        this.m && (c = this.m.getOperationLogger('update_manifest').start());
        if (!b || this.N) {
          var d = Date.now();
          this.b.getBool('decouple_mpd_update_loop_from_request_loop', !1) ||
            (this.u = null);
          var e = null,
            f,
            g;
          if (this.qa && (!this.ab || this.ab > this.ec)) {
            f = Math.floor(Rf(this)) + 1;
            f = Math.min(f, this.cc);
            var h = this.c.video;
            if ((h = h ? h.zb() : null))
              (h = h.last()),
                null != h.unscaledStartTime && (g = h.unscaledStartTime);
            if (this.video.paused || this.Z) f = 0;
          }
          f && this.ec++;
          h = this.a.h;
          h = this.b.getBool('enable_clean_failover_uri_on_mpd_requests', !0)
            ? h.clone()
            : h;
          c && !a && c.setResource(h.toString());
          (a ? this.sc() : this.tc(h, f, g))
            .then(
              H(this, function (b) {
                a || this.H.informNetworkResumed();
                e = new Bf(b);
                var c;
                this.m &&
                  (c = this.m
                    .getOperationLogger('update_manifest_info')
                    .start());
                b = e.update(this.a);
                c && c.log();
                return b;
              })
            )
            .then(
              H(this, function (a) {
                e.destroy();
                e = null;
                var f = Nf(this);
                this.Ia('SegmentIndexesUpdated', f);
                if (this.b.getBool('emit_live_playhead_idle_from_client', !0)) {
                  var h = this.b.getNumber(
                      'live_playhead_idle_all_stream_threshold',
                      4
                    ),
                    g = this.b.getNumber(
                      'live_playhead_idle_single_stream_threshold',
                      5
                    );
                  if (
                    Nf(this).every(function (a) {
                      return a.u() >= h;
                    }) ||
                    Nf(this).some(function (a) {
                      return a.u() >= g;
                    })
                  ) {
                    var v = Mf(f);
                    Pf(this, v);
                  }
                }
                f.some(function (a) {
                  return a.mb();
                }) && Of(this);
                v = Sf(this, f);
                c && this.O() && c.setLiveheadPosition(Mf(f));
                c &&
                  c
                    .setManifestType(this.a.b ? 'dynamic' : 'static')
                    .setUpdatePeriod(
                      null === this.a.c ? null : Math.ceil(1e3 * this.a.c)
                    );
                this.na && Tf(this, v);
                this.b.getBool('skip_remaining_buffered_on_stream_end', !1) &&
                  v &&
                  this.a.b &&
                  this.a.g &&
                  this.video.paused &&
                  (this.video.currentTime = this.ia - 0.1);
                if (yf(this)) return c && c.log(), this.Xa();
                for (f = 0; f < a.length; ++f) Uf(this, a[f]);
                this.Fa ||
                  (this.g.initialStreamBufferSize = Math.max(
                    this.g.initialStreamBufferSize || 0,
                    this.a.f
                  ));
                this.g.useInitialBufferSizeWhenPaused = this.a.b;
                Jf(this);
                Kf(this);
                0 == Object.keys(this.c).length
                  ? Lf(this)
                  : ((a = Date.now()), b || Qf(this, (a - d) / 1e3));
                c && c.log();
                this.ob() && extractCEA608.prepare();
                this.b.getBool(
                  'update_cea608_availability_on_mpd_parsing',
                  !1
                ) &&
                  ((a = this.ob()),
                  this.Vb !== a &&
                    ((f = x({
                      type: 'cea608AvailabilityChanged',
                      bubbles: !0,
                    })),
                    this.dispatchEvent(f),
                    (this.Vb = a)));
              })
            )
            .catch(
              H(this, function (a) {
                c && c.setError(a).log();
                e && (e.destroy(), (e = null));
                if (!b) {
                  var d = this.a.i || this.b.getBool('retry_egress_500s', !1),
                    f = [0, 410];
                  !this.b.getBool('no_retry_on_502_503', !1) &&
                    d &&
                    (f = f.concat([502, 503]));
                  d = this.b.getBool(
                    'fix_live_stream_gone_on_manifest_update',
                    !0
                  )
                    ? -1 === f.indexOf(a.status)
                    : 0 !== a.status;
                  if (
                    this.b.getBool('allow_infinite_retry_on_net_err', !0) &&
                    'net' === a.type &&
                    !d
                  )
                    switch (a.status) {
                      case 410:
                        this.dc = !0;
                        this.j && (clearTimeout(this.j), (this.j = null));
                        this.Xa();
                        break;
                      default:
                        Vf(this);
                    }
                  0 === a.status
                    ? this.H.informNetworkInterrupted()
                    : this.H.informNetworkResumed();
                  if ('delay' == a.type) return Vf(this);
                  (this.b.getBool('allow_infinite_retry_on_net_err', !0) &&
                    !d) ||
                    'aborted' == a.type ||
                    ((a = y(a)), this.dispatchEvent(a), this.a && Vf(this));
                }
              })
            );
        }
      };
      m.tc = function () {
        return Promise.reject(
          'Cannot update manifest with this VideoSource implementation.'
        );
      };
      m.sc = function () {
        return Promise.reject(
          'Cannot update manifest with this VideoSource implementation.'
        );
      };
      function Tf(a, b) {
        if (b && a.a && a.a.b)
          if (
            a.b.getBool(
              'seek_over_unavailable_segments_on_manifest_update',
              !1
            ) &&
            a.fa
          )
            b.end > a.video.currentTime + 10 &&
              ((a.fa = !1), (a.video.currentTime = b.end), Wf(a));
          else if (a.video.paused && b.end > a.video.currentTime + 10)
            if (a.b.getBool('enable_lazy_livehead_catchup', !1)) {
              var c = a.wa;
              c < a.yd && (a.wa = ++c);
              Xf(a, c);
              a.ca = b.end;
            } else (a.fa = !1), (a.video.currentTime = b.end), Wf(a);
      }
      function Qf(a, b) {
        if (null == a.a.c)
          BanzaiODS.bumpEntityKey('videos.www.live', 'update_period_is_null');
        else if (!a.Ea) {
          if (
            a.b.getBool('decouple_mpd_update_loop_from_request_loop', !1) &&
            (a.u && (clearTimeout(a.u), (a.u = null)), yf(a))
          )
            return;
          var c = Math.max(a.a.c, a.Gb),
            c = Math.max(c - b, 0),
            d = a.Fb.bind(a, !1);
          !c && a.g.useMicroTaskTimeouts
            ? Promise.resolve().then(d)
            : (a.V && a.V.setResult('failed').log(),
              a.m &&
                (a.V = a.m
                  .getOperationLogger('schedule_manifest_update')
                  .start()
                  .setUpdatePeriod(Math.ceil(1e3 * c))),
              (a.u = setTimeout(d, 1e3 * c)));
        }
      }
      function Uf(a, b) {
        var c = Td(b),
          d = a.c[c];
        if (d && d.Pa() == b) {
          var e = a.f
            .get(Td(b))
            .map(function (a) {
              return a.v;
            })
            .reduce(function (a, b) {
              return a.concat(b);
            }, [])
            .filter(function (a) {
              return a.oa && a.ea;
            });
          if (0 == e.length) {
            c = Error(
              'All usable streams have been removed from the manifest.'
            );
            c.type = 'app';
            c = y(c);
            a.dispatchEvent(c);
            return;
          }
          a.C[c].Kc == b && delete a.C[c];
          d.eb(e[0], !0);
          b.destroy();
        }
        b.destroy();
      }
      m.Bd = function (a) {
        this.Lb = a;
      };
      Y.prototype.setTaggedTimeRanges = Y.prototype.Bd;
      Y.prototype.td = function () {
        return 0 === Object.keys(this.c).length
          ? !1
          : ['audio', 'video'].every(
              H(this, function (a) {
                return !this.c[a] || this.c[a].S;
              })
            );
      };
      Y.prototype.hasHitBufferingGoal = Y.prototype.td;
      Y.prototype.Y = function (a) {
        if (!this.f || !this.f.a.hasOwnProperty('video')) return [];
        a = (a && a.useLocalBitrate) || !1;
        var b = this.c.video,
          c = b ? b.Pa() : null,
          d = c ? c.W : 0,
          e = 1,
          f = null;
        this.b.getBool('use_live_bitrate_estimates', !1) &&
          this.O() &&
          null != b &&
          ((f = b.ja()), null != c && 0 < c.bandwidth && (e = f / c.bandwidth));
        for (var c = [], g = this.f.get('video'), h = 0; h < g.length; ++h)
          for (var k = g[h], l = 0; l < k.v.length; ++l) {
            var n = k.v[l];
            if (n.oa && n.ea) {
              var p = null;
              if (a && null !== n.R) {
                var v = n.R.b(),
                  w = b;
                if (this.O() || null === v || null === w) p = null;
                else {
                  var p = we(w, this.video.currentTime, v),
                    C = v.getSegments();
                  this.b.getBool('start_local_bitrate_at_buffer_end', !1) &&
                    ((w = LocalBitrateHelper.getBufferEndSegmentIndex(
                      C,
                      p,
                      this.video.currentTime + me(w, this.video.currentTime)
                    )),
                    null !== w && (p = w));
                  p = LocalBitrateHelper.getLocalBitrate(
                    v.getSegments(),
                    p,
                    this.b.getNumber('local_bitrate_segments_ahead', 10)
                  );
                }
                this.b.getBool('use_max_local_bitrate', !1) &&
                  (p = Math.max(p, n.bandwidth));
              }
              v = n.W;
              p = p || n.bandwidth;
              this.b.getBool('use_live_bitrate_estimates', !1) &&
                null != f &&
                (v === d ? (p = Math.max(p, f)) : 1 < e && (p = p * e),
                (p = Math.round(p)));
              n = new Ba(
                v,
                p,
                n.width,
                n.height,
                n.id,
                n.fbQualityLabel,
                n.fbQualityClass,
                n.f,
                n.frameRate,
                n.mimeType,
                n.codecs,
                n.g,
                n.h
              );
              v == d && (n.active = !0);
              c.push(n);
            }
          }
        return c;
      };
      Y.prototype.getVideoTracks = Y.prototype.Y;
      Y.prototype.Oc = function () {
        if (this.ga) return this.ga;
        if (!this.a) return null;
        for (var a = 0; a < this.a.a.length; ++a)
          for (var b = this.a.a[a], c = 0; c < b.a.length; ++c)
            if ((this.ga = b.a[c].c)) return this.ga;
        return null;
      };
      Y.prototype.getVideoProjection = Y.prototype.Oc;
      Y.prototype.Mc = function () {
        return this.Cb;
      };
      Y.prototype.getLocalEstimator = Y.prototype.Mc;
      function Yf(a) {
        a = a.Y();
        for (var b = 0; b < a.length; b++) if (a[b].active) return a[b];
      }
      Y.prototype.ua = function () {
        if (!this.f || !this.f.a.hasOwnProperty('audio')) return [];
        for (
          var a = this.c.audio,
            a = (a = a ? a.Pa() : null) ? a.W : 0,
            b = [],
            c = this.f.get('audio'),
            d = 0;
          d < c.length;
          ++d
        )
          for (var e = c[d], f = e.lang, g = 0; g < e.v.length; ++g) {
            var h = e.v[g];
            if (h.oa && h.ea) {
              var k = h.W,
                h = new ma(
                  k,
                  h.bandwidth,
                  f,
                  h.id,
                  h.mimeType,
                  h.codecs,
                  this.a.o,
                  h.c
                );
              k == a && (h.active = !0);
              b.push(h);
            }
          }
        return b;
      };
      Y.prototype.getAudioTracks = Y.prototype.ua;
      Y.prototype.ic = function () {
        if (!this.f || !this.f.a.hasOwnProperty('text')) return [];
        for (
          var a = this.c.text,
            b = a ? a.Pa() : null,
            b = b ? b.W : 0,
            c = [],
            d = this.f.get('text'),
            e = 0;
          e < d.length;
          ++e
        )
          for (var f = d[e], g = f.lang, h = 0; h < f.v.length; ++h) {
            var k = f.v[h].W,
              l = new Aa(k, g);
            k == b && ((l.active = !0), (l.enabled = a.wb()));
            c.push(l);
          }
        return c;
      };
      Y.prototype.getTextTracks = Y.prototype.ic;
      Y.prototype.Yb = function () {
        return this.a && this.a.l && 0 < this.a.l ? !0 : !1;
      };
      Y.prototype.isUsingASRCaptions = Y.prototype.Yb;
      function xf(a) {
        var b = Number(a.g.initialStreamBufferSize);
        a.g.fixBufferingGoalDetermination && (b = 1);
        if (a.b.getBool('back_off_buffering_overflow', !1)) b = a.L;
        else {
          var c = a.b.getNumber('buffering_overflow_threshold', 0);
          0 < c && (b = c);
        }
        return a.Xb ? Number(a.g.streamBufferSize) : b;
      }
      function Ue(a) {
        if (a.N) {
          a = a.a.a[0];
          for (var b = [], c = 0; c < a.a.length; ++c)
            b.push.apply(b, Xd(a.a[c]));
          a = b;
        } else a = [];
        return a;
      }
      function We(a, b) {
        if (a.N) {
          for (var c = {}, d = a.a.a[0], e = 0; e < d.a.length; ++e) {
            var f = d.a[e];
            c[f.W] = f;
          }
          a.f.a = {};
          d = hb(b);
          for (e = 0; e < d.length; ++e) {
            var f = d[e],
              g = b.get(f);
            if ('video' == f) {
              var h = g[0].id;
              a.f.push(f, c[h]);
            } else if ('audio' == f) {
              if (0 < g.length)
                for (var h = g[0].b.split(';')[0], k = 0; k < g.length; ++k) {
                  var l = g[k];
                  l.b.split(';')[0] == h && a.f.push(f, c[l.id]);
                }
            } else
              for (k = 0; k < g.length; ++k) (h = g[k].id), a.f.push(f, c[h]);
          }
          a.xa = !0;
          if ((c = a.f.get('audio')))
            Zf(a, c),
              a.f.set('audio', c),
              (c = c[0].lang || a.S),
              Xa(2, a.S, c) && (a.xa = !1);
          if ((c = a.f.get('text')))
            Zf(a, c),
              a.f.set('text', c),
              (c = c[0].lang || a.S),
              Xa(2, a.S, c) || (a.xa = !1);
        }
      }
      Y.prototype.Uc = function () {
        this.Da = !0;
      };
      Y.prototype.setClearBufferAfterSeeking = Y.prototype.Uc;
      Y.prototype.selectVideoTrack = function (a, b, c, d, e) {
        return sf(this, 'video', a, b, c, d, e);
      };
      Y.prototype.resumeVideoFetching = function () {
        var a = this.c.video ? this.c.video.G : null;
        a && a.resumeVideoFetching();
      };
      Y.prototype.resumeVideoFetching = Y.prototype.resumeVideoFetching;
      Y.prototype.vd = function () {
        var a = this.c.video ? this.c.video.G : null;
        a && a.stopUntilSegmentsUpdate();
      };
      Y.prototype.stopUntilVideoStreamSwitch = Y.prototype.vd;
      function tf(a, b) {
        var c = a.c.text;
        c && c.pb(b);
      }
      function Kf(a) {
        if (a.l) {
          for (var b = !1, c = 0; c < a.a.a.length; ++c)
            for (var d = a.a.a[c], e = 0; e < d.a.length; ++e) {
              var f = d.a[e];
              if ('video' == f.contentType)
                for (var g = 0; g < f.v.length; ++g) {
                  var h = f.v[g],
                    k = h.ea;
                  h.ea = !0;
                  a.l.maxWidth && h.width > a.l.maxWidth && (h.ea = !1);
                  a.l.maxHeight && h.height > a.l.maxHeight && (h.ea = !1);
                  a.l.minHeight && h.height < a.l.minHeight && (h.ea = !1);
                  a.l.maxBandwidth &&
                    h.bandwidth > a.l.maxBandwidth &&
                    (h.ea = !1);
                  a.l.minBandwidth &&
                    h.bandwidth < a.l.minBandwidth &&
                    (h.ea = !1);
                  k != h.ea && (b = !0);
                }
            }
          0 != gb(a.f).length &&
            b &&
            ($f(a),
            0 < a.Y().length ||
              ((b = Error('The application has restricted all video tracks!')),
              (b.type = 'app'),
              (b = y(b)),
              a.dispatchEvent(b)));
        }
      }
      Y.prototype.O = function () {
        return this.a ? this.a.b : null;
      };
      Y.prototype.isLive = Y.prototype.O;
      Y.prototype.Vc = function (a) {
        this.Xb = a;
      };
      Y.prototype.setIsLiveInterrupted = Y.prototype.Vc;
      Y.prototype.Zc = function () {
        for (var a in this.c) this.c[a].Gc();
      };
      Y.prototype.forceResyncVideoBuffer = Y.prototype.Zc;
      function cf(a, b) {
        for (var c, d = !1, e = new B(), f = gb(a.f), g = 0; g < f.length; ++g)
          for (var h = f[g], k = 0; k < h.v.length; ++k) {
            var l = h.v[k];
            l.b.forEach(function (a) {
              e.push(a, l);
            });
          }
        for (c in b)
          if (((f = Va[b[c]] || null), (h = e.get(c))))
            for (g = 0; g < h.length; ++g)
              (l = h[g]), (k = l.oa), (l.oa = !f), k != l.oa && (d = !0);
          else ob(c);
        d &&
          ($f(a),
          (d = a.ua()),
          (c = a.Y()),
          (d = a.f.a.hasOwnProperty('audio') && 0 == d.length),
          (c = a.f.a.hasOwnProperty('video') && 0 == c.length),
          d || c) &&
          ((c = Error(
            'The key system has restricted all ' +
              (d && c
                ? 'audio and video tracks.'
                : d
                ? 'audio tracks.'
                : 'video tracks.')
          )),
          (c.type = 'drm'),
          (c = y(c)),
          a.dispatchEvent(c));
      }
      function $f(a) {
        var b = x({ type: 'trackschanged', bubbles: !0 });
        a.dispatchEvent(b);
      }
      function sf(a, b, c, d, e, f, g) {
        g = !!g;
        if (!a.f.a.hasOwnProperty(b) || !a.c[b]) return !1;
        for (var h = a.f.get(b), k = 0; k < h.length; ++k)
          for (var l = h[k], n = 0; n < l.v.length; ++n) {
            var p = l.v[n];
            if (p.W == c) {
              if (!p.oa || !p.ea) return !1;
              if ('text' != b && !a.Ba)
                return (
                  (c = a.C[b]),
                  (a.C[b] = {
                    Kc: p,
                    oc: (null != c && c.oc) || d,
                    pc: (null != c && c.pc) || e,
                    switchReason: f,
                    Ha: g,
                  }),
                  !0
                );
              a.c[b].eb(p, d, e, f, g);
              return !0;
            }
          }
        return !1;
      }
      function Zf(a, b) {
        for (var c = 0; 2 >= c; ++c)
          for (var d = 0; d < b.length; ++d) {
            var e = b[d];
            if (Xa(c, a.S, e.lang)) {
              b.splice(d, 1);
              b.splice(0, 0, e);
              return;
            }
          }
        for (d = 0; d < b.length; ++d)
          if (((e = b[d]), e.f)) {
            b.splice(d, 1);
            b.splice(0, 0, e);
            break;
          }
      }
      m = Y.prototype;
      m.hd = function () {
        this.h.gb(this.i, 'sourceopen');
        this.Eb.resolve();
      };
      function Lf(a) {
        var b;
        a.m && (b = a.m.getOperationLogger('start_streams').start());
        for (
          var c = [], d = ['audio', 'video', 'text'], e = 0;
          e < d.length;
          ++e
        ) {
          var f = d[e];
          a.f.a.hasOwnProperty(f) && c.push(a.f.get(f)[0]);
        }
        for (var g = ag(a, c), e = 0; e < d.length; ++e)
          if (((f = d[e]), a.f.a.hasOwnProperty(f) && !g[f]))
            return (
              (a = Error(
                'Unable to select an initial ' +
                  f +
                  ' stream: all ' +
                  f +
                  ' streams have been restricted (by the application or by the key system).'
              )),
              (a.type = 'stream'),
              b && b.setError(a).log(),
              Promise.reject(a)
            );
        c = cb(g).map(function (a) {
          return a.R.create();
        });
        c.push(a.Eb);
        return Promise.all(c)
          .then(
            H(a, function (a) {
              a.pop();
              if (
                !a.every(function (a) {
                  return a.length();
                })
              )
                return (
                  (a = Error('Some streams are not available.')),
                  (a.type = 'stream'),
                  Promise.reject(a)
                );
              a = Sf(this, a);
              if (!a)
                return (
                  (a = Error('Some streams are not available.')),
                  (a.type = 'stream'),
                  Promise.reject(a)
                );
              if (!bg(this, g))
                return (
                  (a = Error('Failed to create Stream objects.')),
                  (a.type = 'stream'),
                  Promise.reject(a)
                );
              this.A.start();
              cg(this, g, a);
              return Promise.resolve();
            })
          )
          .then(function () {
            b && b.log();
          })
          .catch(
            H(a, function (a) {
              if ('aborted' == a.type) b && b.setError(a).log();
              else {
                Object.keys(this.c);
                if (this.a.b)
                  return (
                    Fa() < this.a.j
                      ? ((a = Math.max(this.a.j - Date.now() / 1e3, this.Gb)),
                        (this.u = setTimeout(this.Fb.bind(this, !0), 1e3 * a)))
                      : Qf(this, 0),
                    b && b.log(),
                    Promise.resolve()
                  );
                b && b.setError(a).log();
                return Promise.reject(a);
              }
            })
          );
      }
      function ag(a, b) {
        for (var c = {}, d = 0; d < b.length; ++d) {
          var e = b[d],
            f = null;
          if ('video' == e.contentType) {
            var g = a.A.getInitialVideoTrackId();
            if (null == g) continue;
            f = e.v.filter(function (a) {
              return a.W == g;
            });
            if (0 == f.length) continue;
            f = f[0];
          } else if ('audio' == e.contentType)
            if (
              ((g = a.A.getInitialAudioTrackId()),
              (f = e.v.filter(function (a) {
                return a.W == g;
              })),
              0 == f.length)
            ) {
              f = e.v.filter(function (a) {
                return a.oa && a.ea;
              });
              if (0 == f.length) continue;
              f = e.v[Math.floor(f.length / 2)];
            } else f = f[0];
          else 0 < e.v.length && (f = e.v[0]);
          c[e.contentType] = f;
        }
        return c;
      }
      function bg(a, b) {
        var c = {},
          d;
        for (d in b) {
          var e = b[d],
            e = 'text' == d ? new Ae(a, a.video) : dg(a, e);
          if (!e)
            return (
              cb(c).forEach(function (a) {
                a.destroy();
              }),
              !1
            );
          c[d] = e;
        }
        a.jc(a.kc);
        a.c = c;
        return !0;
      }
      function dg(a, b) {
        var c = Ud(b),
          d = eg(c.split(';')[0]),
          e = null,
          f = a.b.getBool('use_local_estimator_for_abr_sampling', !0)
            ? a.Cb
            : a.va,
          g = null,
          h = null,
          k = a.a.i || a.a.w,
          k = a.b.getBool('skip_segment_request_manager', !1) && k;
        a.Sb && canUseFetchStream()
          ? ((h = new MultipleSegmentsProvider(
              a.b.getNumber('streaming_segment_size', 4)
            )),
            (g = fg(a, h, d, f)))
          : a.Rb && !k && (e = gg(a, d, f));
        var k = null,
          l = a.f.get(d);
        'video' === d &&
          0 < l.length &&
          (k = function (a, b) {
            for (var c = null, d = null, e = 0; e < l[0].v.length; e++)
              l[0].v[e].id === a
                ? (c = l[0].v[e])
                : l[0].v[e].id === b && (d = l[0].v[e]);
            return null === c || null === d
              ? 0
              : c.bandwidth > d.bandwidth
              ? 1
              : -1;
          });
        c = new U(
          a,
          a.video,
          a.b,
          a.i,
          c,
          f,
          a.Lb,
          a.da,
          k,
          a.H,
          e,
          g,
          h,
          a.ha
        );
        c.na(a.g);
        return c;
      }
      function fg(a, b, c, d) {
        var e = a.w[c],
          f = 'audio' !== c || a.b.getBool('enable_audio_streaming', !1);
        if (!e && f) {
          var e = new VideoStreamingManager(a.b, b, c, a.m, a.U),
            g = 'video' === c;
          g &&
            e.addListener(
              'bandwidthUpdate',
              function (a) {
                d.sample(
                  a.timeTaken,
                  a.bytesRead,
                  g,
                  { timeToLastByte: a.timeTaken },
                  this.Jb,
                  this.m,
                  !this.b.getBool('evaluate_abr_on_stream_bandwidth_sample', !0)
                );
              }.bind(a)
            );
        }
        e && (a.w[c] = e);
        return e || null;
      }
      function gg(a, b, c) {
        if (
          'video' === b ||
          ('audio' === b &&
            a.b.getBool('enable_request_pipelining_for_vod_audios', !1))
        ) {
          var d = a.o[b];
          d ||
            ((d = new SegmentRequestManager(
              a.b,
              b,
              a.O()
                ? VideoPriorityCalculator.calculateLive
                : VideoPriorityCalculator.calculate,
              a.m,
              c,
              a.Jb,
              a.da,
              a.ha
            )),
            a.P &&
              d.updatePriorityWithNewAdjustment(a.P.getPriorityAdjustment()),
            (a.o[b] = d));
          return d;
        }
        return null;
      }
      function hg(a, b) {
        a.video.currentTime = b;
        a.D = b;
      }
      function cg(a, b, c) {
        a.gc = a.video.playbackRate;
        a.video.playbackRate = 0;
        ig(a, c);
        var d;
        a.ka && a.ka <= c.end && a.ka >= c.start
          ? (d = a.ka)
          : a.a.b
          ? ((d = jg(a, c)), (a.ac = !0))
          : (d = c.start);
        D(a.h, a.video, 'seeking', a.md.bind(a));
        a.I
          ? (a.I.setOnPlaying(a.hb.bind(a, !0)),
            a.I.setOnPaused(a.hb.bind(a, !1)),
            a.I.enable())
          : (D(a.h, a.video, 'playing', a.hb.bind(a, !0)),
            a.b.getBool('update_priority_on_play_event', !0) &&
              D(a.h, a.video, 'play', a.hb.bind(a, !0)),
            D(a.h, a.video, 'pause', a.hb.bind(a, !1)));
        D(a.h, a.video, 'seeking', a.Lc.bind(a));
        D(
          a.h,
          a.video,
          'timeupdate',
          throttle(
            a.Lc.bind(a),
            a.b.getNumber('scheduler_priority_update_interval', 1e3)
          )
        );
        if (a.video.currentTime != d)
          if (a.Ob) 0 !== a.video.readyState ? hg(a, d) : kg(a, d);
          else
            try {
              hg(a, d);
            } catch (e) {
              kg(a, d);
            }
        lg(a, c.start, c.end, c.last, c.Sa);
        var f = [],
          g;
        for (g in a.c) {
          c = a.c[g];
          H(a, function (a) {
            f.push(
              a.Jc(this.ra).then(
                H(this, function (b) {
                  var c = a.nb();
                  c > this.Kb && (this.Kb = c);
                  return b;
                })
              )
            );
          })(c);
          D(a.h, c, 'ended', a.od.bind(a));
          D(a.h, c, 'should_end_all_streams', a.pd.bind(a));
          D(a.h, c, 'should_nudge', a.jd.bind(a));
          d = b[g];
          var h = a.A.getInitialSwitchReason() || void 0;
          c.eb(d, !1, void 0, h);
        }
        Promise.all(f)
          .then(
            H(a, function (a) {
              (this.b.getBool('prevent_stream_start_if_streams_change', !1) &&
                !mg(this)) ||
                ng(this, a);
            })
          )
          .catch(
            H(a, function (a) {
              'destroy' != a.type && ((a = y(a)), this.dispatchEvent(a));
            })
          );
        tf(a, a.xa);
      }
      m.hb = function (a) {
        Object.keys(this.o).forEach(
          function (b) {
            this.o[b].updatePriorityWithNewPlayingState(a);
          }.bind(this)
        );
        Object.keys(this.w).forEach(
          function (b) {
            this.w[b].getPriorityUpdater().updatePriorityWithNewPlayingState(a);
          }.bind(this)
        );
        if (this.m) {
          var b = Sf(this, Nf(this));
          b &&
            this.video.currentTime < b.start &&
            BanzaiODS.bumpEntityKey(
              'videos.www.shaka',
              'current_time_at_playing_less_than_stream_limits_start'
            );
        }
        a && null !== this.ca && ((this.wa = 1), Xf(this, this.wa), og(this));
      };
      m.Lc = function () {
        this.video &&
          (Object.keys(this.o).forEach(
            function (a) {
              this.o[a].updatePriorityWithNewPlayhead(this.video.currentTime);
            }.bind(this)
          ),
          Object.keys(this.w).forEach(
            function (a) {
              this.w[a]
                .getPriorityUpdater()
                .updatePriorityWithNewPlayhead(this.video.currentTime);
            }.bind(this)
          ));
      };
      function Wf(a) {
        if (
          a.b.getBool(
            'clear_current_segment_indexes_during_livehead_catchup',
            !1
          )
        )
          for (var b in a.c) a.c[b].i = null;
      }
      function kg(a, b) {
        a.ba = b;
        for (var c in a.c) {
          var d = a.c[c];
          a.ba && (d.ra = a.ba);
        }
      }
      function mg(a) {
        return !Object.keys(a.c).some(
          H(a, function (a) {
            return this.c[a] && !this.c[a].h;
          })
        );
      }
      function ng(a, b) {
        da(b && b.length == Object.keys(a.c).length);
        for (
          var c = Number.POSITIVE_INFINITY, d = Number.NEGATIVE_INFINITY, e = 0;
          e < b.length;
          ++e
        )
          var f = b[e], c = Math.min(c, f), d = Math.max(d, f);
        c = Nf(a);
        for (e = 0; e < c.length; ++e) c[e].La(d);
        a.b.getBool('process_deferred_switches_early', !1) && pg(a);
        qg(a, c, d);
        var g = cb(a.c).map(function (a) {
          return a.Pa().id;
        });
        a.b.getBool('sequentially_load_streams', !1)
          ? rg(a, g, d)
          : ((e = gb(a.f)
              .map(function (a) {
                return a.v;
              })
              .reduce(function (a, b) {
                return a.concat(b);
              }, [])
              .filter(function (a) {
                return !~g.indexOf(a.id);
              })
              .map(
                H(a, function (a) {
                  var b = [a.R.kb ? a.R.kb() : a.R.create()];
                  a.aa && b.push(a.aa.create(this.m, this.da));
                  return Promise.all(b);
                })
              )),
            Promise.all(e)
              .then(
                H(a, function (a) {
                  for (var b = 0; b < a.length; ++b) a[b][0].La(d);
                  this.Ba = !0;
                  pg(this);
                })
              )
              .catch(
                H(a, function (a) {
                  'aborted' != a.type && ((a = y(a)), this.dispatchEvent(a));
                })
              ));
      }
      function rg(a, b, c) {
        var d = Promise.resolve();
        gb(a.f)
          .map(function (a) {
            return a.v;
          })
          .reduce(function (a, b) {
            return a.concat(b);
          }, [])
          .filter(function (a) {
            return !~b.indexOf(a.id);
          })
          .forEach(function (a) {
            d = d
              .then(
                H(this, function (b) {
                  b && b[0].La(c);
                  b = [a.R.kb ? a.R.kb() : a.R.create()];
                  a.aa && b.push(a.aa.create(this.m, this.da));
                  return Promise.all(b);
                })
              )
              .catch(function (a) {
                throw a;
              });
          });
        d.then(
          H(a, function () {
            this.Ba = !0;
            pg(this);
          })
        ).catch(
          H(a, function (a) {
            'aborted' != a.type && ((a = y(a)), this.dispatchEvent(a));
          })
        );
      }
      function pg(a) {
        for (var b in a.C) {
          var c = a.C[b];
          a.c[b].eb(c.Kc, c.oc, c.pc, c.switchReason, c.Ha);
        }
        a.C = {};
      }
      function qg(a, b, c) {
        if ((b = Sf(a, b))) ig(a, b), lg(a, b.start, b.end, b.last, b.Sa);
        0 != c
          ? ((c = a.video.currentTime + c),
            (a.video.currentTime = c),
            (a.D = c))
          : a.ac &&
            b &&
            ((c = jg(a, b)),
            Math.abs(c - a.video.currentTime) >= a.$b &&
              (a.video.currentTime = c));
        a.b.getBool('unify_stream_start_with_buffer_detector', !1)
          ? ((c = x({ type: 'allStreamsStarted', bubbles: !0 })),
            a.dispatchEvent(c))
          : (a.video.playbackRate = a.gc);
        a.a.b && null != a.a.c && Qf(a, 0);
        sg(a);
        a.ra.resolve();
      }
      function jg(a, b) {
        var c = b.end;
        void 0 !== b.wc && (c = b.wc);
        if (a.Zb) {
          var d = a.video.currentTime;
          d >= b.start && d <= b.end && d < c && (c = d);
        }
        return c;
      }
      function ig(a, b) {
        if (a.a.b) isNaN(a.i.duration) && (a.i.duration = b.end + 2592e3);
        else if (isNaN(a.i.duration) || b.end > a.i.duration)
          if (
            ((a.i.duration = b.end),
            !a.b.getBool('disable_append_window_end', !1))
          )
            for (
              var c = a.b.getNumber('append_window_end_fudge_factor', 0), d = 0;
              d < a.i.sourceBuffers.length;
              ++d
            )
              a.i.sourceBuffers[d].appendWindowEnd = b.end + c;
      }
      m.rd = function () {
        this.ja = null;
        sg(this);
        var a = Sf(this, Nf(this));
        if (a) {
          var b = this.a.b;
          this.b.getBool('treat_live_static_manifest_as_dynamic', !1) &&
            (b = b || this.a.g);
          b &&
            this.ia != a.last &&
            ((this.ia = a.last),
            null != this.j && (clearTimeout(this.j), (this.j = null)));
          lg(this, a.start, a.end, a.last, a.Sa);
          this.video.paused || tg(this, this.video.currentTime, a.start, a.end);
        }
      };
      function lg(a, b, c, d, e) {
        b = x({
          type: 'seekrangechanged',
          bubbles: !0,
          start: b,
          end: c,
          last: d,
          seekRangeGaps: e,
        });
        a.dispatchEvent(b);
      }
      m.md = function () {
        var a = this.video.currentTime,
          b = Sf(this, Nf(this));
        this.m &&
          b &&
          a < b.start &&
          BanzaiODS.bumpEntityKey(
            'videos.www.shaka',
            'current_time_at_seek_less_than_stream_limits_start'
          );
        if (null != this.D) {
          if (a >= this.D - 0.01 && a <= this.D + 0.01) {
            this.D = null;
            this.m &&
              b &&
              a < b.start &&
              BanzaiODS.bumpEntityKey(
                'videos.www.shaka',
                'ignored_seek_when_current_time_at_seek_less_than_stream_limits_start'
              );
            return;
          }
          this.D = null;
        }
        if (b) {
          var c = b.start,
            d = b.end;
          this.b.getBool('skip_remaining_buffered_on_stream_end', !1) &&
            this.a.b &&
            this.a.g &&
            this.video.paused &&
            (d = this.ia);
          (c = tg(this, a, c, d)) ||
            (a <= d + 0.01 || (this.a.b && !ug(this, d))
              ? (c = !1)
              : ((this.video.currentTime = d), (c = !0)));
          if (c)
            this.m &&
              a < b.start &&
              BanzaiODS.bumpEntityKey(
                'videos.www.shaka',
                'clamp_playhead_when_current_time_at_seek_less_than_stream_limits_start'
              );
          else {
            for (var e in this.c) this.c[e].xc(this.Da);
            this.Da = !1;
          }
        }
      };
      function tg(a, b, c, d) {
        if (b >= c - 0.01) return !1;
        b = 0;
        a.a.b && ((b = 0.5), ug(a, c + b) || (b = a.a.f));
        a.video.currentTime = Math.min(c + b, d);
        return !0;
      }
      function ug(a, b) {
        for (var c in a.c) if (!a.c[c].Hc(b)) return !1;
        return !0;
      }
      m.od = function () {
        if (!this.a.b || this.Ea) {
          for (var a in this.c) if (!this.c[a].Ya()) return;
          this.Xa();
        }
      };
      m.pd = function () {
        clearTimeout(this.u);
        this.Ea = !0;
        for (var a in this.c) this.c[a].Ya() || this.c[a].vb();
      };
      m.jd = function () {
        this.b.getBool('ignore_seek_when_nudging', !0) &&
          (this.D = this.video.currentTime);
        this.video.currentTime += 0.001;
      };
      m.ob = function () {
        if (this.Yb() && this.b.getBool('enable_asr_captions', !1)) return !0;
        var a = this.a,
          b = null,
          c = null;
        a && a.a && a.a[0] && (b = a.a[0]);
        b && b.a && b.a[0] && (c = b.a[0]);
        return !!c && c.b;
      };
      Y.prototype.hasInlinedCea608Subtitles = Y.prototype.ob;
      Y.prototype.jc = function (a) {
        this.kc = a;
        var b = this.c;
        'video' in b && ((a = a && this.ob()), (b.video.c.S = a));
      };
      Y.prototype.setEnableCea608Parsing = Y.prototype.jc;
      function yf(a) {
        var b = a.b.getNumber('live_buffering_underflow_threshold', 0.5),
          c =
            a.b.getBool('fix_live_stream_gone_on_manifest_update', !0) && a.dc,
          d = !1;
        if (a.a.g) {
          var d = a.b.getNumber('live_stream_end_slack', 0),
            e;
          for (e in a.c) a.c[e].Ya() || (d = 0);
          d = a.video.currentTime + b + d > a.ia;
        }
        return c || d;
      }
      m = Y.prototype;
      m.cd = function () {
        this.Z = !0;
        if (this.a && this.a.b) {
          if (yf(this)) return this.Xa();
          (this.b.getBool('allow_infinite_retry_on_net_err', !0) &&
            this.H.isNetworkInterrupted()) ||
            !cb(this.c).every(function (a) {
              return a.Ya();
            }) ||
            vg(this, this.bb);
        }
        this.b.getBool('back_off_buffering_overflow', !1) &&
          (null === this.L ||
          Date.now() - this.bc >
            this.b.getNumber('back_off_buffering_overflow_time_window', 2e3)
            ? (this.L = this.b.getNumber('buffering_overflow_threshold', 0))
            : (this.L *= this.b.getNumber(
                'back_off_buffering_overflow_time_factor',
                2
              )),
          (this.L = Math.min(
            this.L,
            this.b.getNumber('back_off_buffering_overflow_max', 5)
          )));
      };
      function vg(a, b) {
        a.j = setTimeout(a.Xa.bind(a), b);
      }
      m.bd = function () {
        this.Z = !1;
        this.b.getBool('back_off_buffering_overflow', !1) &&
          (this.bc = Date.now());
        null != this.j && (clearTimeout(this.j), (this.j = null));
      };
      m.gd = function () {
        null !== this.ba && (hg(this, this.ba), kg(this, null));
      };
      m.Fd = function () {};
      m.Xa = function () {
        this.Z = !1;
        this.j = null;
        var a;
        if (
          (a = this.b.getBool(
            'test_source_buffers_not_updating_end_of_stream',
            !1
          ))
        )
          a: {
            for (a = 0; a < this.i.sourceBuffers.length; ++a)
              if (this.i.sourceBuffers[a].updating) {
                a = !0;
                break a;
              }
            a = !1;
          }
        if (a) return vg(this, 1e3);
        'open' == this.i.readyState && this.i.endOfStream();
      };
      function Nf(a) {
        return cb(a.c)
          .map(function (a) {
            return a.zb();
          })
          .filter(function (a) {
            return null != a;
          });
      }
      function Rf(a) {
        return Math.max(a.a ? a.a.f : 1, a.Wb ? a.g.streamBufferSize || 0 : 0);
      }
      function Sf(a, b) {
        for (
          var c = 0,
            d = Number.POSITIVE_INFINITY,
            e = Number.POSITIVE_INFINITY,
            f = [],
            g = !VideoPlayerShakaGlobalConfig.getBool(
              'no_seek_range_gaps_during_compute_stream_limits',
              !1
            ),
            h = 0;
          h < b.length;
          ++h
        ) {
          var k = b[h].Ab();
          g && (f = f.concat(b[h].getSeekRangeGaps()));
          c = Math.max(c, k.start);
          null != k.end && (d = Math.min(d, k.end));
          b[h].length() && (e = Math.min(e, b[h].last().endTime));
        }
        g && (f = mergeSeekRangeGaps(f));
        if (d == Number.POSITIVE_INFINITY)
          if (((d = a.a.a[0]), d.duration)) d = (d.start || 0) + d.duration;
          else return null;
        if (a.a.b) {
          var g = Rf(a),
            d = Math.max(d - g, c),
            l;
          a.qa &&
            a.b.getBool('live_jump_to_pushed_segment', !1) &&
            b.length &&
            ((h = Math.floor(Rf(a) / 1) + 1),
            (g = b[0]),
            (h = g.length() - h),
            (g = g.get(h)) && (l = g.startTime));
        }
        if (c > d) return null;
        d = Math.floor(1e5 * d) / 1e5;
        return { start: c, end: d, last: e, Sa: f, wc: l };
      }
      m.ib = function () {
        return Sf(this, Nf(this));
      };
      Y.prototype.computeStreamLimits = Y.prototype.ib;
      function sg(a) {
        a.a.b && (a.ja = setTimeout(a.rd.bind(a), 1e3));
      }
      function Jf(a) {
        for (var b in a.c) a.c[b].na(a.g);
      }
      Y.prototype.nb = function () {
        return this.Kb;
      };
      Y.prototype.getLongestInitResponseTime = Y.prototype.nb;
      function eg(a) {
        return 'v' === a.charAt(0)
          ? 'video'
          : 'a' === a.charAt(0)
          ? 'audio'
          : null;
      }
      Y.prototype.Rc = function () {
        var a = x({ type: 'networkinterrupted', bubbles: !0 });
        this.dispatchEvent(a);
        this.T = this.T || Date.now();
        this.Z && this.j && clearTimeout(this.j);
      };
      Y.prototype.Sc = function () {
        var a = x({ type: 'networkresumed', bubbles: !0 });
        this.dispatchEvent(a);
        a = this.b.getNumber('max_network_interrupted_time_before_seek', 1e4);
        null !== this.T &&
          Date.now() - this.T >= a &&
          ((this.T = null), (this.fa = !0));
        this.b.getBool('fix_network_interrupted_start_not_nulled', !1) &&
          (this.T = null);
        this.Z && vg(this, this.bb);
      };
      Y.prototype.Tc = function () {
        this.fa = !0;
      };
      function Vf(a) {
        a.b.getBool('decouple_mpd_update_loop_from_request_loop', !1) ||
          Qf(a, 0);
      }
      Y.prototype.lc = function (a) {
        this.na = a;
      };
      Y.prototype.setEnableLiveheadCatchup = Y.prototype.lc;
      Y.prototype.ud = function () {
        return this.na;
      };
      Y.prototype.isLiveheadCatchupEnabled = Y.prototype.ud;
      Y.prototype.Pc = function () {
        return this.c.video ? this.c.video.c.i : null;
      };
      Y.prototype.getVideoStreamProgressTracker = Y.prototype.Pc;
      Y.prototype.lb = function () {
        return this.c.video ? this.c.video.lb() : null;
      };
      Y.prototype.getBufferVelocity = Y.prototype.lb;
      function Xf(a, b) {
        for (var c in a.c) a.c[c].ha = b;
      }
      function og(a) {
        var b = [];
        if (null !== a.ca) {
          var c = a.ca,
            d;
          for (d in a.c) b.push(ye(a.c[d], a.ca));
          Promise.all(b).then(
            H(a, function () {
              if (c) {
                for (var a in this.c) {
                  var b = this.c[a];
                  b.K = null;
                  b.U = !1;
                  b.I = null;
                }
                c > this.video.currentTime && (this.video.currentTime = c);
              }
            })
          );
        }
        a.ca = null;
      }
      function Z(a, b, c, d, e) {
        d || (d = new F());
        e || (e = new X());
        Y.call(this, null, b, d, e);
        'string' === typeof a ? (this.fc = a) : (this.Ib = a);
        this.b = b;
        this.G = null;
        this.sa = c;
        this.Ca = [];
        this.Mb = [];
        this.Nb = [];
        this.Za = 0;
        this.X = null;
      }
      r(Z, Y);
      q('shaka.player.DashVideoSource', Z);
      Z.prototype.Gd = function (a) {
        this.G = a;
        this.Fb(!0, !0);
      };
      Z.prototype.updateManifest = Z.prototype.Gd;
      Z.prototype.Tb = function () {
        return this.Ib || this.G;
      };
      Z.prototype.getManifest = Z.prototype.Tb;
      Z.prototype.Pb = function () {
        return this.Tb();
      };
      Z.prototype.debugGetManifest = Z.prototype.Pb;
      Z.prototype.Xc = function (a, b, c) {
        this.Ca.push(a);
        this.Mb.push(b || '');
        this.Nb.push(c || '');
      };
      Z.prototype.addExternalCaptions = Z.prototype.Xc;
      Z.prototype.Yc = function (a) {
        this.X = a;
      };
      Z.prototype.setNetworkCallback = Z.prototype.Yc;
      Z.prototype.destroy = function () {
        this.G = this.X = this.sa = null;
        Y.prototype.destroy.call(this);
      };
      Z.prototype.rb = function () {
        var a;
        this.m && (a = this.m.getOperationLogger('source_load').start());
        var b,
          c = H(this, function (c) {
            this.Ia('MPDFetchDuration', (Date.now() - b) / 1e3);
            this.G = c;
            for (var d = 0; d < this.Ca.length; d++)
              Sc(c, this.Ca[d], this.Mb[d], this.Nb[d]);
            var d = new Fe(this.sa, this.m),
              e;
            this.m &&
              (e = this.m.getOperationLogger('process_manifest').start());
            this.a = Ge(d, c, this.X);
            e && e.log();
            a && a.setManifestType(this.a.b ? 'dynamic' : 'static');
            return Y.prototype.rb.call(this).then(function () {
              a && a.log();
            });
          });
        if (this.Ib) return (b = Date.now()), c(this.Ib);
        var d = [new J(this.fc)],
          e;
        if (this.qa) {
          var f = new VideoPushParametersHelper(this.fc);
          f.setStreamEndOffset(Math.floor(Rf(this) / 1));
          this.$a && f.setPushVideoRepresentationID(this.$a);
          this.pa && f.setPushAudioRepresentationID(this.pa);
          this.la && f.setUseLongCacheForManifest(this.la);
          e = new nd(null);
          e.a = f;
        }
        d = new I(this.X, d);
        e = new ld(d, this.Hb, e, this.da);
        b = Date.now();
        return md(e, this.m).then(c);
      };
      Z.prototype.rc = function () {
        if (this.Qb) {
          var a = this.a;
          if ((a = (a = a && a.a) && a[0])) {
            var a = a.a.reduce(function (a, b) {
                return a.concat(b.v);
              }, []),
              b = function (a) {
                return null != a;
              };
            Promise.all(
              a.map(function (a) {
                a = a.R;
                return a.Qc ? a.Ka : a.create();
              })
            ).then(
              function (a) {
                a = a.filter(b);
                this.Ia('InitialSegmentIndexes', a);
              }.bind(this)
            );
            Promise.all(
              a.map(function (a) {
                return a.aa;
              })
            ).then(
              function (a) {
                a = a.filter(b);
                this.Ia('SegmentInitSources', a);
              }.bind(this)
            );
          }
        }
      };
      Z.prototype.tc = function (a, b, c) {
        if (this.video.paused && this.Za + 1e4 > Date.now() && this.a)
          return Promise.reject({ type: 'delay' });
        var d;
        if (b && void 0 != c)
          (d = new nd(b)),
            (d.f = c),
            (b = Yf(this)),
            null != b && ((d.c = b.streamInfoID), (d.b = this.pa));
        else
          for (b = a.c, c = 0; c < b.length; c++) {
            var e = new VideoPushParametersHelper(b[c].toString());
            this.la && e.setUseLongCacheForManifest(this.la);
            b[c] = new J(e.getURL());
          }
        a = new ld(a, this.Hb, d, this.da);
        var f = Date.now();
        return md(a, this.m).then(
          H(this, function (a) {
            this.Za = Date.now();
            this.Ia('MPDFetchDuration', (this.Za - f) / 1e3);
            this.b.getBool('treat_live_static_manifest_as_dynamic', !1) &&
              (a.manifestIsLiveStreaming =
                'dynamic' === (this.G ? this.G.type : a.type));
            this.G = a;
            var b = new Fe(this.sa, this.m);
            if (this.m)
              var c = this.m.getOperationLogger('process_manifest').start();
            a = Ge(b, a, this.X);
            c && c.log();
            return Promise.resolve(a);
          })
        );
      };
      Z.prototype.sc = function () {
        var a = Ge(new Fe(this.sa), this.G, this.X);
        return Promise.resolve(a);
      };
    }).bind(g, global)();

    module.exports = g.shaka;

    /*  */
  },
  null
);
