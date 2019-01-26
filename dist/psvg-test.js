/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 333);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(specifier) {
  var n = specifier.length / 6 | 0, colors = new Array(n), i = 0;
  while (i < n) colors[i] = "#" + specifier.slice(i * 6, ++i * 6);
  return colors;
});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_interpolate__ = __webpack_require__(8);


/* harmony default export */ __webpack_exports__["a"] = (function(scheme) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_interpolate__["f" /* interpolateRgbBasis */])(scheme[scheme.length - 1]);
});


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return epsilon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return epsilon2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return pi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return halfPi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return quarterPi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return tau; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return degrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return radians; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return abs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return atan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return atan2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return cos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ceil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return exp; });
/* unused harmony export floor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return pow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return sin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return sign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return sqrt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return tan; });
/* harmony export (immutable) */ __webpack_exports__["b"] = acos;
/* harmony export (immutable) */ __webpack_exports__["c"] = asin;
/* harmony export (immutable) */ __webpack_exports__["m"] = haversin;
var epsilon = 1e-6;
var epsilon2 = 1e-12;
var pi = Math.PI;
var halfPi = pi / 2;
var quarterPi = pi / 4;
var tau = pi * 2;

var degrees = 180 / pi;
var radians = pi / 180;

var abs = Math.abs;
var atan = Math.atan;
var atan2 = Math.atan2;
var cos = Math.cos;
var ceil = Math.ceil;
var exp = Math.exp;
var floor = Math.floor;
var log = Math.log;
var pow = Math.pow;
var sin = Math.sin;
var sign = Math.sign || function(x) { return x > 0 ? 1 : x < 0 ? -1 : 0; };
var sqrt = Math.sqrt;
var tan = Math.tan;

function acos(x) {
  return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}

function asin(x) {
  return x > 1 ? halfPi : x < -1 ? -halfPi : Math.asin(x);
}

function haversin(x) {
  return (x = sin(x / 2)) * x;
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = newInterval;
var t0 = new Date,
    t1 = new Date;

function newInterval(floori, offseti, count, field) {

  function interval(date) {
    return floori(date = new Date(+date)), date;
  }

  interval.floor = interval;

  interval.ceil = function(date) {
    return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
  };

  interval.round = function(date) {
    var d0 = interval(date),
        d1 = interval.ceil(date);
    return date - d0 < d1 - date ? d0 : d1;
  };

  interval.offset = function(date, step) {
    return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
  };

  interval.range = function(start, stop, step) {
    var range = [], previous;
    start = interval.ceil(start);
    step = step == null ? 1 : Math.floor(step);
    if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
    do range.push(previous = new Date(+start)), offseti(start, step), floori(start);
    while (previous < start && start < stop);
    return range;
  };

  interval.filter = function(test) {
    return newInterval(function(date) {
      if (date >= date) while (floori(date), !test(date)) date.setTime(date - 1);
    }, function(date, step) {
      if (date >= date) {
        if (step < 0) while (++step <= 0) {
          while (offseti(date, -1), !test(date)) {} // eslint-disable-line no-empty
        } else while (--step >= 0) {
          while (offseti(date, +1), !test(date)) {} // eslint-disable-line no-empty
        }
      }
    });
  };

  if (count) {
    interval.count = function(start, end) {
      t0.setTime(+start), t1.setTime(+end);
      floori(t0), floori(t1);
      return Math.floor(count(t0, t1));
    };

    interval.every = function(step) {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null
          : !(step > 1) ? interval
          : interval.filter(field
              ? function(d) { return field(d) % step === 0; }
              : function(d) { return interval.count(0, d) % step === 0; });
    };
  }

  return interval;
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return root; });
/* harmony export (immutable) */ __webpack_exports__["a"] = Selection;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__select__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selectAll__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enter__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__exit__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__merge__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__order__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sort__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__call__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__nodes__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__node__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__size__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__empty__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__each__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__attr__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__style__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__property__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__classed__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__text__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__html__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__raise__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__lower__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__append__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__insert__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__remove__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__clone__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__datum__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__on__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__dispatch__ = __webpack_require__(217);































var root = [null];

function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}

function selection() {
  return new Selection([[document.documentElement]], root);
}

Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: __WEBPACK_IMPORTED_MODULE_0__select__["a" /* default */],
  selectAll: __WEBPACK_IMPORTED_MODULE_1__selectAll__["a" /* default */],
  filter: __WEBPACK_IMPORTED_MODULE_2__filter__["a" /* default */],
  data: __WEBPACK_IMPORTED_MODULE_3__data__["a" /* default */],
  enter: __WEBPACK_IMPORTED_MODULE_4__enter__["b" /* default */],
  exit: __WEBPACK_IMPORTED_MODULE_5__exit__["a" /* default */],
  merge: __WEBPACK_IMPORTED_MODULE_6__merge__["a" /* default */],
  order: __WEBPACK_IMPORTED_MODULE_7__order__["a" /* default */],
  sort: __WEBPACK_IMPORTED_MODULE_8__sort__["a" /* default */],
  call: __WEBPACK_IMPORTED_MODULE_9__call__["a" /* default */],
  nodes: __WEBPACK_IMPORTED_MODULE_10__nodes__["a" /* default */],
  node: __WEBPACK_IMPORTED_MODULE_11__node__["a" /* default */],
  size: __WEBPACK_IMPORTED_MODULE_12__size__["a" /* default */],
  empty: __WEBPACK_IMPORTED_MODULE_13__empty__["a" /* default */],
  each: __WEBPACK_IMPORTED_MODULE_14__each__["a" /* default */],
  attr: __WEBPACK_IMPORTED_MODULE_15__attr__["a" /* default */],
  style: __WEBPACK_IMPORTED_MODULE_16__style__["a" /* default */],
  property: __WEBPACK_IMPORTED_MODULE_17__property__["a" /* default */],
  classed: __WEBPACK_IMPORTED_MODULE_18__classed__["a" /* default */],
  text: __WEBPACK_IMPORTED_MODULE_19__text__["a" /* default */],
  html: __WEBPACK_IMPORTED_MODULE_20__html__["a" /* default */],
  raise: __WEBPACK_IMPORTED_MODULE_21__raise__["a" /* default */],
  lower: __WEBPACK_IMPORTED_MODULE_22__lower__["a" /* default */],
  append: __WEBPACK_IMPORTED_MODULE_23__append__["a" /* default */],
  insert: __WEBPACK_IMPORTED_MODULE_24__insert__["a" /* default */],
  remove: __WEBPACK_IMPORTED_MODULE_25__remove__["a" /* default */],
  clone: __WEBPACK_IMPORTED_MODULE_26__clone__["a" /* default */],
  datum: __WEBPACK_IMPORTED_MODULE_27__datum__["a" /* default */],
  on: __WEBPACK_IMPORTED_MODULE_28__on__["a" /* default */],
  dispatch: __WEBPACK_IMPORTED_MODULE_29__dispatch__["a" /* default */]
};

/* harmony default export */ __webpack_exports__["b"] = (selection);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bisect__ = __webpack_require__(57);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__bisect__["a"]; });
/* unused harmony reexport bisectRight */
/* unused harmony reexport bisectLeft */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ascending__ = __webpack_require__(11);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__ascending__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bisector__ = __webpack_require__(58);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__bisector__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cross__ = __webpack_require__(118);
/* unused harmony reexport cross */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__descending__ = __webpack_require__(119);
/* unused harmony reexport descending */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__deviation__ = __webpack_require__(60);
/* unused harmony reexport deviation */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__extent__ = __webpack_require__(62);
/* unused harmony reexport extent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__histogram__ = __webpack_require__(120);
/* unused harmony reexport histogram */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__threshold_freedmanDiaconis__ = __webpack_require__(123);
/* unused harmony reexport thresholdFreedmanDiaconis */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__threshold_scott__ = __webpack_require__(124);
/* unused harmony reexport thresholdScott */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__threshold_sturges__ = __webpack_require__(66);
/* unused harmony reexport thresholdSturges */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__max__ = __webpack_require__(125);
/* unused harmony reexport max */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__mean__ = __webpack_require__(126);
/* unused harmony reexport mean */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__median__ = __webpack_require__(127);
/* unused harmony reexport median */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__merge__ = __webpack_require__(128);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_14__merge__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__min__ = __webpack_require__(67);
/* unused harmony reexport min */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pairs__ = __webpack_require__(59);
/* unused harmony reexport pairs */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__permute__ = __webpack_require__(129);
/* unused harmony reexport permute */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__quantile__ = __webpack_require__(34);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_18__quantile__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__range__ = __webpack_require__(64);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_19__range__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__scan__ = __webpack_require__(130);
/* unused harmony reexport scan */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shuffle__ = __webpack_require__(131);
/* unused harmony reexport shuffle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__sum__ = __webpack_require__(132);
/* unused harmony reexport sum */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ticks__ = __webpack_require__(65);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_23__ticks__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_23__ticks__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_23__ticks__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__transpose__ = __webpack_require__(68);
/* unused harmony reexport transpose */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__variance__ = __webpack_require__(61);
/* unused harmony reexport variance */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__zip__ = __webpack_require__(133);
/* unused harmony reexport zip */





























/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__color__ = __webpack_require__(37);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__color__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__color__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__color__["f"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lab__ = __webpack_require__(140);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__lab__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__lab__["b"]; });
/* unused harmony reexport lch */
/* unused harmony reexport gray */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cubehelix__ = __webpack_require__(141);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__cubehelix__["a"]; });





/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return durationSecond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return durationMinute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return durationHour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return durationDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return durationWeek; });
var durationSecond = 1e3;
var durationMinute = 6e4;
var durationHour = 36e5;
var durationDay = 864e5;
var durationWeek = 6048e5;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__value__ = __webpack_require__(36);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__value__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__(74);
/* unused harmony reexport interpolateArray */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basis__ = __webpack_require__(39);
/* unused harmony reexport interpolateBasis */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__basisClosed__ = __webpack_require__(72);
/* unused harmony reexport interpolateBasisClosed */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__date__ = __webpack_require__(75);
/* unused harmony reexport interpolateDate */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__discrete__ = __webpack_require__(142);
/* unused harmony reexport interpolateDiscrete */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__hue__ = __webpack_require__(143);
/* unused harmony reexport interpolateHue */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__number__ = __webpack_require__(23);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_7__number__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__object__ = __webpack_require__(76);
/* unused harmony reexport interpolateObject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__round__ = __webpack_require__(144);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_9__round__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__string__ = __webpack_require__(77);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_10__string__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__transform_index__ = __webpack_require__(145);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_11__transform_index__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_11__transform_index__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__zoom__ = __webpack_require__(148);
/* unused harmony reexport interpolateZoom */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__rgb__ = __webpack_require__(71);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_13__rgb__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_13__rgb__["b"]; });
/* unused harmony reexport interpolateRgbBasisClosed */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__hsl__ = __webpack_require__(149);
/* unused harmony reexport interpolateHsl */
/* unused harmony reexport interpolateHslLong */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__lab__ = __webpack_require__(150);
/* unused harmony reexport interpolateLab */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__hcl__ = __webpack_require__(151);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_16__hcl__["a"]; });
/* unused harmony reexport interpolateHclLong */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__cubehelix__ = __webpack_require__(152);
/* unused harmony reexport interpolateCubehelix */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_17__cubehelix__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__piecewise__ = __webpack_require__(153);
/* unused harmony reexport piecewise */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__quantize__ = __webpack_require__(154);
/* unused harmony reexport quantize */






















/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return slice; });
var array = Array.prototype;

var map = array.map;
var slice = array.slice;


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function constant() {
    return x;
  };
});


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
});


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = linearish;
/* harmony export (immutable) */ __webpack_exports__["a"] = linear;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__continuous__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tickFormat__ = __webpack_require__(155);





function linearish(scale) {
  var domain = scale.domain;

  scale.ticks = function(count) {
    var d = domain();
    return Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["i" /* ticks */])(d[0], d[d.length - 1], count == null ? 10 : count);
  };

  scale.tickFormat = function(count, specifier) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__tickFormat__["a" /* default */])(domain(), count, specifier);
  };

  scale.nice = function(count) {
    if (count == null) count = 10;

    var d = domain(),
        i0 = 0,
        i1 = d.length - 1,
        start = d[i0],
        stop = d[i1],
        step;

    if (stop < start) {
      step = start, start = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }

    step = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["g" /* tickIncrement */])(start, stop, count);

    if (step > 0) {
      start = Math.floor(start / step) * step;
      stop = Math.ceil(stop / step) * step;
      step = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["g" /* tickIncrement */])(start, stop, count);
    } else if (step < 0) {
      start = Math.ceil(start * step) / step;
      stop = Math.floor(stop * step) / step;
      step = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["g" /* tickIncrement */])(start, stop, count);
    }

    if (step > 0) {
      d[i0] = Math.floor(start / step) * step;
      d[i1] = Math.ceil(stop / step) * step;
      domain(d);
    } else if (step < 0) {
      d[i0] = Math.ceil(start * step) / step;
      d[i1] = Math.floor(stop * step) / step;
      domain(d);
    }

    return scale;
  };

  return scale;
}

function linear() {
  var scale = Object(__WEBPACK_IMPORTED_MODULE_2__continuous__["b" /* default */])(__WEBPACK_IMPORTED_MODULE_2__continuous__["c" /* deinterpolateLinear */], __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["d" /* interpolateNumber */]);

  scale.copy = function() {
    return Object(__WEBPACK_IMPORTED_MODULE_2__continuous__["a" /* copy */])(scale, linear());
  };

  return linearish(scale);
}


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = hue;
/* harmony export (immutable) */ __webpack_exports__["b"] = gamma;
/* harmony export (immutable) */ __webpack_exports__["a"] = nogamma;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant__ = __webpack_require__(73);


function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}

function hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(isNaN(a) ? b : a);
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(isNaN(a) ? b : a);
}


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CREATED */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SCHEDULED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return STARTING; });
/* unused harmony export STARTED */
/* unused harmony export RUNNING */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ENDED; });
/* harmony export (immutable) */ __webpack_exports__["g"] = init;
/* harmony export (immutable) */ __webpack_exports__["h"] = set;
/* harmony export (immutable) */ __webpack_exports__["f"] = get;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_dispatch__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_timer__ = __webpack_require__(304);



var emptyOn = Object(__WEBPACK_IMPORTED_MODULE_0_d3_dispatch__["a" /* dispatch */])("start", "end", "cancel", "interrupt");
var emptyTween = [];

var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;

/* harmony default export */ __webpack_exports__["e"] = (function(node, name, id, index, group, timing) {
  var schedules = node.__transition;
  if (!schedules) node.__transition = {};
  else if (id in schedules) return;
  create(node, id, {
    name: name,
    index: index, // For context during callback.
    group: group, // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
});

function init(node, id) {
  var schedule = get(node, id);
  if (schedule.state > CREATED) throw new Error("too late; already scheduled");
  return schedule;
}

function set(node, id) {
  var schedule = get(node, id);
  if (schedule.state > STARTED) throw new Error("too late; already running");
  return schedule;
}

function get(node, id) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
  return schedule;
}

function create(node, id, self) {
  var schedules = node.__transition,
      tween;

  // Initialize the self timer when the transition is created.
  // Note the actual delay is not known until the first callback!
  schedules[id] = self;
  self.timer = Object(__WEBPACK_IMPORTED_MODULE_1_d3_timer__["c" /* timer */])(schedule, 0, self.time);

  function schedule(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start, self.delay, self.time);

    // If the elapsed delay is less than our first sleep, start immediately.
    if (self.delay <= elapsed) start(elapsed - self.delay);
  }

  function start(elapsed) {
    var i, j, n, o;

    // If the state is not SCHEDULED, then we previously errored on start.
    if (self.state !== SCHEDULED) return stop();

    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name) continue;

      // While this element already has a starting transition during this frame,
      // defer starting an interrupting transition until that transition has a
      // chance to tick (and possibly end); see d3/d3-transition#54!
      if (o.state === STARTED) return Object(__WEBPACK_IMPORTED_MODULE_1_d3_timer__["b" /* timeout */])(start);

      // Interrupt the active transition, if any.
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }

      // Cancel any pre-empted transitions.
      else if (+i < id) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("cancel", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }
    }

    // Defer the first tick to end of the current frame; see d3/d3#1576.
    // Note the transition may be canceled after start and before the first tick!
    // Note this must be scheduled before the start event; see d3/d3-transition#16!
    // Assuming this is successful, subsequent callbacks go straight to tick.
    Object(__WEBPACK_IMPORTED_MODULE_1_d3_timer__["b" /* timeout */])(function() {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });

    // Dispatch the start event.
    // Note this must be done before the tween are initialized.
    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING) return; // interrupted
    self.state = STARTED;

    // Initialize the tween, deleting null tween.
    tween = new Array(n = self.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }

  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
        i = -1,
        n = tween.length;

    while (++i < n) {
      tween[i].call(node, t);
    }

    // Dispatch the end event.
    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }

  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id];
    for (var i in schedules) return; // eslint-disable-line no-unused-vars
    delete node.__transition;
  }
}


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__create__ = __webpack_require__(189);
/* unused harmony reexport create */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__creator__ = __webpack_require__(26);
/* unused harmony reexport creator */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__local__ = __webpack_require__(218);
/* unused harmony reexport local */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__matcher__ = __webpack_require__(90);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__matcher__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mouse__ = __webpack_require__(219);
/* unused harmony reexport mouse */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__namespace__ = __webpack_require__(44);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__namespace__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__namespaces__ = __webpack_require__(45);
/* unused harmony reexport namespaces */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__point__ = __webpack_require__(27);
/* unused harmony reexport clientPoint */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__select__ = __webpack_require__(88);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_8__select__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__selectAll__ = __webpack_require__(220);
/* unused harmony reexport selectAll */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__selection_index__ = __webpack_require__(4);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_10__selection_index__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__selector__ = __webpack_require__(46);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_11__selector__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__selectorAll__ = __webpack_require__(89);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_12__selectorAll__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__selection_style__ = __webpack_require__(93);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_13__selection_style__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__touch__ = __webpack_require__(221);
/* unused harmony reexport touch */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__touches__ = __webpack_require__(222);
/* unused harmony reexport touches */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__window__ = __webpack_require__(47);
/* unused harmony reexport window */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__selection_on__ = __webpack_require__(48);
/* unused harmony reexport event */
/* unused harmony reexport customEvent */




















/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x === null ? NaN : +x;
});


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__path__ = __webpack_require__(229);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__path__["a"]; });



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return abs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return atan2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return cos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return sin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return sqrt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return epsilon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return pi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return halfPi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return tau; });
/* harmony export (immutable) */ __webpack_exports__["b"] = acos;
/* harmony export (immutable) */ __webpack_exports__["c"] = asin;
var abs = Math.abs;
var atan2 = Math.atan2;
var cos = Math.cos;
var max = Math.max;
var min = Math.min;
var sin = Math.sin;
var sqrt = Math.sqrt;

var epsilon = 1e-12;
var pi = Math.PI;
var halfPi = pi / 2;
var tau = 2 * pi;

function acos(x) {
  return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}

function asin(x) {
  return x >= 1 ? halfPi : x <= -1 ? -halfPi : Math.asin(x);
}


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(series, order) {
  if (!((n = series.length) > 1)) return;
  for (var i = 1, j, s0, s1 = series[order[0]], n, m = s1.length; i < n; ++i) {
    s0 = s1, s1 = series[order[i]];
    for (j = 0; j < m; ++j) {
      s1[j][1] += s1[j][0] = isNaN(s0[j][1]) ? s0[j][0] : s0[j][1];
    }
  }
});


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(series) {
  var n = series.length, o = new Array(n);
  while (--n >= 0) o[n] = n;
  return o;
});


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = projection;
/* harmony export (immutable) */ __webpack_exports__["b"] = projectionMutator;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clip_antimeridian__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clip_circle__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clip_rectangle__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__compose__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__identity__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__math__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rotation__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__transform__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__fit__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__resample__ = __webpack_require__(352);











var transformRadians = Object(__WEBPACK_IMPORTED_MODULE_7__transform__["b" /* transformer */])({
  point: function(x, y) {
    this.stream.point(x * __WEBPACK_IMPORTED_MODULE_5__math__["r" /* radians */], y * __WEBPACK_IMPORTED_MODULE_5__math__["r" /* radians */]);
  }
});

function transformRotate(rotate) {
  return Object(__WEBPACK_IMPORTED_MODULE_7__transform__["b" /* transformer */])({
    point: function(x, y) {
      var r = rotate(x, y);
      return this.stream.point(r[0], r[1]);
    }
  });
}

function scaleTranslate(k, dx, dy) {
  function transform(x, y) {
    return [dx + k * x, dy - k * y];
  }
  transform.invert = function(x, y) {
    return [(x - dx) / k, (dy - y) / k];
  };
  return transform;
}

function scaleTranslateRotate(k, dx, dy, alpha) {
  var cosAlpha = Object(__WEBPACK_IMPORTED_MODULE_5__math__["g" /* cos */])(alpha),
      sinAlpha = Object(__WEBPACK_IMPORTED_MODULE_5__math__["t" /* sin */])(alpha),
      a = cosAlpha * k,
      b = sinAlpha * k,
      ai = cosAlpha / k,
      bi = sinAlpha / k,
      ci = (sinAlpha * dy - cosAlpha * dx) / k,
      fi = (sinAlpha * dx + cosAlpha * dy) / k;
  function transform(x, y) {
    return [a * x - b * y + dx, dy - b * x - a * y];
  }
  transform.invert = function(x, y) {
    return [ai * x - bi * y + ci, fi - bi * x - ai * y];
  };
  return transform;
}

function projection(project) {
  return projectionMutator(function() { return project; })();
}

function projectionMutator(projectAt) {
  var project,
      k = 150, // scale
      x = 480, y = 250, // translate
      lambda = 0, phi = 0, // center
      deltaLambda = 0, deltaPhi = 0, deltaGamma = 0, rotate, // pre-rotate
      alpha = 0, // post-rotate
      theta = null, preclip = __WEBPACK_IMPORTED_MODULE_0__clip_antimeridian__["a" /* default */], // pre-clip angle
      x0 = null, y0, x1, y1, postclip = __WEBPACK_IMPORTED_MODULE_4__identity__["a" /* default */], // post-clip extent
      delta2 = 0.5, // precision
      projectResample,
      projectTransform,
      projectRotateTransform,
      cache,
      cacheStream;

  function projection(point) {
    return projectRotateTransform(point[0] * __WEBPACK_IMPORTED_MODULE_5__math__["r" /* radians */], point[1] * __WEBPACK_IMPORTED_MODULE_5__math__["r" /* radians */]);
  }

  function invert(point) {
    point = projectRotateTransform.invert(point[0], point[1]);
    return point && [point[0] * __WEBPACK_IMPORTED_MODULE_5__math__["h" /* degrees */], point[1] * __WEBPACK_IMPORTED_MODULE_5__math__["h" /* degrees */]];
  }

  projection.stream = function(stream) {
    return cache && cacheStream === stream ? cache : cache = transformRadians(transformRotate(rotate)(preclip(projectResample(postclip(cacheStream = stream)))));
  };

  projection.preclip = function(_) {
    return arguments.length ? (preclip = _, theta = undefined, reset()) : preclip;
  };

  projection.postclip = function(_) {
    return arguments.length ? (postclip = _, x0 = y0 = x1 = y1 = null, reset()) : postclip;
  };

  projection.clipAngle = function(_) {
    return arguments.length ? (preclip = +_ ? Object(__WEBPACK_IMPORTED_MODULE_1__clip_circle__["a" /* default */])(theta = _ * __WEBPACK_IMPORTED_MODULE_5__math__["r" /* radians */]) : (theta = null, __WEBPACK_IMPORTED_MODULE_0__clip_antimeridian__["a" /* default */]), reset()) : theta * __WEBPACK_IMPORTED_MODULE_5__math__["h" /* degrees */];
  };

  projection.clipExtent = function(_) {
    return arguments.length ? (postclip = _ == null ? (x0 = y0 = x1 = y1 = null, __WEBPACK_IMPORTED_MODULE_4__identity__["a" /* default */]) : Object(__WEBPACK_IMPORTED_MODULE_2__clip_rectangle__["a" /* default */])(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reset()) : x0 == null ? null : [[x0, y0], [x1, y1]];
  };

  projection.scale = function(_) {
    return arguments.length ? (k = +_, recenter()) : k;
  };

  projection.translate = function(_) {
    return arguments.length ? (x = +_[0], y = +_[1], recenter()) : [x, y];
  };

  projection.center = function(_) {
    return arguments.length ? (lambda = _[0] % 360 * __WEBPACK_IMPORTED_MODULE_5__math__["r" /* radians */], phi = _[1] % 360 * __WEBPACK_IMPORTED_MODULE_5__math__["r" /* radians */], recenter()) : [lambda * __WEBPACK_IMPORTED_MODULE_5__math__["h" /* degrees */], phi * __WEBPACK_IMPORTED_MODULE_5__math__["h" /* degrees */]];
  };

  projection.rotate = function(_) {
    return arguments.length ? (deltaLambda = _[0] % 360 * __WEBPACK_IMPORTED_MODULE_5__math__["r" /* radians */], deltaPhi = _[1] % 360 * __WEBPACK_IMPORTED_MODULE_5__math__["r" /* radians */], deltaGamma = _.length > 2 ? _[2] % 360 * __WEBPACK_IMPORTED_MODULE_5__math__["r" /* radians */] : 0, recenter()) : [deltaLambda * __WEBPACK_IMPORTED_MODULE_5__math__["h" /* degrees */], deltaPhi * __WEBPACK_IMPORTED_MODULE_5__math__["h" /* degrees */], deltaGamma * __WEBPACK_IMPORTED_MODULE_5__math__["h" /* degrees */]];
  };

  projection.angle = function(_) {
    return arguments.length ? (alpha = _ % 360 * __WEBPACK_IMPORTED_MODULE_5__math__["r" /* radians */], recenter()) : alpha * __WEBPACK_IMPORTED_MODULE_5__math__["h" /* degrees */];
  };

  projection.precision = function(_) {
    return arguments.length ? (projectResample = Object(__WEBPACK_IMPORTED_MODULE_9__resample__["a" /* default */])(projectTransform, delta2 = _ * _), reset()) : Object(__WEBPACK_IMPORTED_MODULE_5__math__["u" /* sqrt */])(delta2);
  };

  projection.fitExtent = function(extent, object) {
    return Object(__WEBPACK_IMPORTED_MODULE_8__fit__["a" /* fitExtent */])(projection, extent, object);
  };

  projection.fitSize = function(size, object) {
    return Object(__WEBPACK_IMPORTED_MODULE_8__fit__["c" /* fitSize */])(projection, size, object);
  };

  projection.fitWidth = function(width, object) {
    return Object(__WEBPACK_IMPORTED_MODULE_8__fit__["d" /* fitWidth */])(projection, width, object);
  };

  projection.fitHeight = function(height, object) {
    return Object(__WEBPACK_IMPORTED_MODULE_8__fit__["b" /* fitHeight */])(projection, height, object);
  };

  function recenter() {
    var center = scaleTranslateRotate(k, 0, 0, alpha).apply(null, project(lambda, phi)),
        transform = (alpha ? scaleTranslateRotate : scaleTranslate)(k, x - center[0], y - center[1], alpha);
    rotate = Object(__WEBPACK_IMPORTED_MODULE_6__rotation__["b" /* rotateRadians */])(deltaLambda, deltaPhi, deltaGamma);
    projectTransform = Object(__WEBPACK_IMPORTED_MODULE_3__compose__["a" /* default */])(project, transform);
    projectRotateTransform = Object(__WEBPACK_IMPORTED_MODULE_3__compose__["a" /* default */])(rotate, projectTransform);
    projectResample = Object(__WEBPACK_IMPORTED_MODULE_9__resample__["a" /* default */])(projectTransform, delta2);
    return reset();
  }

  function reset() {
    cache = cacheStream = null;
    return projection;
  }

  return function() {
    project = projectAt.apply(this, arguments);
    projection.invert = project.invert && invert;
    return recenter();
  };
}


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_scale__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_selection__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_interpolate__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_axis__ = __webpack_require__(223);





let Data = {
    json: [],
    domains: {},
    vmap: {}
}

let View = {
    container: null,
    svg: null,
    height: 300,
    width: 400,
    axes: true
}

class Plot {
    constructor(data = Data, view = View) {
        this.data = data;
        this.view = view;
        this.container = view.container;
        this.padding = view.padding || {top: 0, bottom: 0, left: 0, right: 0};
        this.height = view.height;
        this.width = view.width;
        this.svg = {};

        if(!view.svg || view.svg === null) {
            if(view.container !== null) {
                this.svg = this.createSvg();
            }
            this.height -= this.padding.top + this.padding.bottom;
            this.width -= this.padding.left + this.padding.right;
            this.svg.main = this.svg.append('g')
                .attr("transform", `translate(${this.padding.left}, ${this.padding.top})`);
    
        } else {
            this.svg.main = Object(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["c" /* select */])(view.svg);
        }

        if(this.data.json) {
            this.scales = this.getScales();
        }
    }

    createSvg() {
        let svg = Object(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["c" /* select */])(this.container)
            .append('svg')
                .attr('width', this.width)
                .attr('height', this.height);
        return svg;
    }

    channels() {
        return {
            x: [0, this.width],
            y: [this.height, 0],
            color: ['steelblue', 'red'],
            opacity: [0, 1],
            size: [2, 20],
            width: [0, this.width],
            height: [0, this.height]
        }
    }

    getScales() {
        let scales = {};
        let channels = this.channels();
        let vmap = this.data.vmap;
        let domains = this.data.domains || null;
        let fields = this.data.fields || null;
        if(fields === null && this.data.json) {
            this.data.fields = Object.keys(this.data.json[0]);
            fields = Object.keys(this.data.json[0]);
        }
        
        for (let channel of Object.keys(channels)) {
            if(channel in vmap && fields.indexOf(vmap[channel]) !== -1) {
                let domain; 
                if(domains === null) {
                    let value = this.data.json.map(d=>d[vmap[channel]]);
                    let min = Math.min(...value) || 0;
                    let max = Math.max(...value) || 0;
                   
                    if(max === min) {
                        max += 1e-6;
                    }
                    domain = [min, max];
                } else {
                    domain = domains[vmap[channel]] || [0, 1];
                }
                
                let range = channels[channel];
                scales[channel] = Object(__WEBPACK_IMPORTED_MODULE_0_d3_scale__["a" /* scaleLinear */])().domain(domain).range(range);
                if(channel == 'color') {
                    scales[channel].interpolate(__WEBPACK_IMPORTED_MODULE_2_d3_interpolate__["c" /* interpolateHcl */])
                }
            } else {
                scales[channel] = () => vmap[channel]
            }
        }

        return scales;
    }

    axes() {
        if(!this.view.hideAxes) {
            this.xAxis = this.svg.main.append('g')
            .attr("transform", `translate(0, ${this.height})`)
            .call(Object(__WEBPACK_IMPORTED_MODULE_3_d3_axis__["a" /* axisBottom */])(this.scales.x))
            
            this.yAxis = this.svg.main.append('g')
                .call(Object(__WEBPACK_IMPORTED_MODULE_3_d3_axis__["b" /* axisLeft */])(this.scales.y).ticks(this.height/20))

            if(this.view.gridlines && this.view.gridlines.y) {
                this.yGridlines = this.yAxis.append('g')
                .style('opacity', 0.3)
                .call(Object(__WEBPACK_IMPORTED_MODULE_3_d3_axis__["b" /* axisLeft */])(this.scales.y).ticks(this.height/30).tickSize(-this.width))
                .selectAll('text').remove()
            }
            
        }
    }

    render() {
        this.axes();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Plot;


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  return a = +a, b -= a, function(t) {
    return a + b * t;
  };
});


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = deinterpolateLinear;
/* harmony export (immutable) */ __webpack_exports__["a"] = copy;
/* harmony export (immutable) */ __webpack_exports__["b"] = continuous;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__array__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constant__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__number__ = __webpack_require__(78);






var unit = [0, 1];

function deinterpolateLinear(a, b) {
  return (b -= (a = +a))
      ? function(x) { return (x - a) / b; }
      : Object(__WEBPACK_IMPORTED_MODULE_3__constant__["a" /* default */])(b);
}

function deinterpolateClamp(deinterpolate) {
  return function(a, b) {
    var d = deinterpolate(a = +a, b = +b);
    return function(x) { return x <= a ? 0 : x >= b ? 1 : d(x); };
  };
}

function reinterpolateClamp(reinterpolate) {
  return function(a, b) {
    var r = reinterpolate(a = +a, b = +b);
    return function(t) { return t <= 0 ? a : t >= 1 ? b : r(t); };
  };
}

function bimap(domain, range, deinterpolate, reinterpolate) {
  var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
  if (d1 < d0) d0 = deinterpolate(d1, d0), r0 = reinterpolate(r1, r0);
  else d0 = deinterpolate(d0, d1), r0 = reinterpolate(r0, r1);
  return function(x) { return r0(d0(x)); };
}

function polymap(domain, range, deinterpolate, reinterpolate) {
  var j = Math.min(domain.length, range.length) - 1,
      d = new Array(j),
      r = new Array(j),
      i = -1;

  // Reverse descending domains.
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range = range.slice().reverse();
  }

  while (++i < j) {
    d[i] = deinterpolate(domain[i], domain[i + 1]);
    r[i] = reinterpolate(range[i], range[i + 1]);
  }

  return function(x) {
    var i = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["b" /* bisect */])(domain, x, 1, j) - 1;
    return r[i](d[i](x));
  };
}

function copy(source, target) {
  return target
      .domain(source.domain())
      .range(source.range())
      .interpolate(source.interpolate())
      .clamp(source.clamp());
}

// deinterpolate(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// reinterpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding domain value x in [a,b].
function continuous(deinterpolate, reinterpolate) {
  var domain = unit,
      range = unit,
      interpolate = __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["a" /* interpolate */],
      clamp = false,
      piecewise,
      output,
      input;

  function rescale() {
    piecewise = Math.min(domain.length, range.length) > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }

  function scale(x) {
    return (output || (output = piecewise(domain, range, clamp ? deinterpolateClamp(deinterpolate) : deinterpolate, interpolate)))(+x);
  }

  scale.invert = function(y) {
    return (input || (input = piecewise(range, domain, deinterpolateLinear, clamp ? reinterpolateClamp(reinterpolate) : reinterpolate)))(+y);
  };

  scale.domain = function(_) {
    return arguments.length ? (domain = __WEBPACK_IMPORTED_MODULE_2__array__["a" /* map */].call(_, __WEBPACK_IMPORTED_MODULE_4__number__["a" /* default */]), rescale()) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = __WEBPACK_IMPORTED_MODULE_2__array__["b" /* slice */].call(_), rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = __WEBPACK_IMPORTED_MODULE_2__array__["b" /* slice */].call(_), interpolate = __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["g" /* interpolateRound */], rescale();
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, rescale()) : clamp;
  };

  scale.interpolate = function(_) {
    return arguments.length ? (interpolate = _, rescale()) : interpolate;
  };

  return rescale();
}


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formatDecimal__ = __webpack_require__(41);


/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x = Object(__WEBPACK_IMPORTED_MODULE_0__formatDecimal__["a" /* default */])(Math.abs(x)), x ? x[1] : NaN;
});


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__namespace__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__namespaces__ = __webpack_require__(45);



function creatorInherit(name) {
  return function() {
    var document = this.ownerDocument,
        uri = this.namespaceURI;
    return uri === __WEBPACK_IMPORTED_MODULE_1__namespaces__["b" /* xhtml */] && document.documentElement.namespaceURI === __WEBPACK_IMPORTED_MODULE_1__namespaces__["b" /* xhtml */]
        ? document.createElement(name)
        : document.createElementNS(uri, name);
  };
}

function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name) {
  var fullname = Object(__WEBPACK_IMPORTED_MODULE_0__namespace__["a" /* default */])(name);
  return (fullname.local
      ? creatorFixed
      : creatorInherit)(fullname);
});


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(node, event) {
  var svg = node.ownerSVGElement || node;

  if (svg.createSVGPoint) {
    var point = svg.createSVGPoint();
    point.x = event.clientX, point.y = event.clientY;
    point = point.matrixTransform(node.getScreenCTM().inverse());
    return [point.x, point.y];
  }

  var rect = node.getBoundingClientRect();
  return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
});


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function Linear(context) {
  this._context = context;
}

Linear.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; // proceed
      default: this._context.lineTo(x, y); break;
    }
  }
};

/* harmony default export */ __webpack_exports__["a"] = (function(context) {
  return new Linear(context);
});


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {});


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = point;
/* harmony export (immutable) */ __webpack_exports__["a"] = Basis;
function point(that, x, y) {
  that._context.bezierCurveTo(
    (2 * that._x0 + that._x1) / 3,
    (2 * that._y0 + that._y1) / 3,
    (that._x0 + 2 * that._x1) / 3,
    (that._y0 + 2 * that._y1) / 3,
    (that._x0 + 4 * that._x1 + x) / 6,
    (that._y0 + 4 * that._y1 + y) / 6
  );
}

function Basis(context) {
  this._context = context;
}

Basis.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3: point(this, this._x1, this._y1); // proceed
      case 2: this._context.lineTo(this._x1, this._y1); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6); // proceed
      default: point(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/* harmony default export */ __webpack_exports__["b"] = (function(context) {
  return new Basis(context);
});


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = point;
/* harmony export (immutable) */ __webpack_exports__["a"] = Cardinal;
function point(that, x, y) {
  that._context.bezierCurveTo(
    that._x1 + that._k * (that._x2 - that._x0),
    that._y1 + that._k * (that._y2 - that._y0),
    that._x2 + that._k * (that._x1 - x),
    that._y2 + that._k * (that._y1 - y),
    that._x2,
    that._y2
  );
}

function Cardinal(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

Cardinal.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x2, this._y2); break;
      case 3: point(this, this._x1, this._y1); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; this._x1 = x, this._y1 = y; break;
      case 2: this._point = 3; // proceed
      default: point(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* unused harmony default export */ var _unused_webpack_default_export = ((function custom(tension) {

  function cardinal(context) {
    return new Cardinal(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0));


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = noop;
function noop() {}


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Transition;
/* harmony export (immutable) */ __webpack_exports__["b"] = transition;
/* harmony export (immutable) */ __webpack_exports__["c"] = newId;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__attr__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__attrTween__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__delay__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__duration__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ease__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__filter__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__merge__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__on__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__remove__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__select__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__selectAll__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__selection__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__style__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__styleTween__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__text__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__transition__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__tween__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__end__ = __webpack_require__(408);




















var id = 0;

function Transition(groups, parents, name, id) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id;
}

function transition(name) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["d" /* selection */])().transition(name);
}

function newId() {
  return ++id;
}

var selection_prototype = __WEBPACK_IMPORTED_MODULE_0_d3_selection__["d" /* selection */].prototype;

Transition.prototype = transition.prototype = {
  constructor: Transition,
  select: __WEBPACK_IMPORTED_MODULE_10__select__["a" /* default */],
  selectAll: __WEBPACK_IMPORTED_MODULE_11__selectAll__["a" /* default */],
  filter: __WEBPACK_IMPORTED_MODULE_6__filter__["a" /* default */],
  merge: __WEBPACK_IMPORTED_MODULE_7__merge__["a" /* default */],
  selection: __WEBPACK_IMPORTED_MODULE_12__selection__["a" /* default */],
  transition: __WEBPACK_IMPORTED_MODULE_16__transition__["a" /* default */],
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: __WEBPACK_IMPORTED_MODULE_8__on__["a" /* default */],
  attr: __WEBPACK_IMPORTED_MODULE_1__attr__["a" /* default */],
  attrTween: __WEBPACK_IMPORTED_MODULE_2__attrTween__["a" /* default */],
  style: __WEBPACK_IMPORTED_MODULE_13__style__["a" /* default */],
  styleTween: __WEBPACK_IMPORTED_MODULE_14__styleTween__["a" /* default */],
  text: __WEBPACK_IMPORTED_MODULE_15__text__["a" /* default */],
  remove: __WEBPACK_IMPORTED_MODULE_9__remove__["a" /* default */],
  tween: __WEBPACK_IMPORTED_MODULE_17__tween__["a" /* default */],
  delay: __WEBPACK_IMPORTED_MODULE_3__delay__["a" /* default */],
  duration: __WEBPACK_IMPORTED_MODULE_4__duration__["a" /* default */],
  ease: __WEBPACK_IMPORTED_MODULE_5__ease__["a" /* default */],
  end: __WEBPACK_IMPORTED_MODULE_18__end__["a" /* default */]
};


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(16);


/* harmony default export */ __webpack_exports__["a"] = (function(values, p, valueof) {
  if (valueof == null) valueof = __WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */];
  if (!(n = values.length)) return;
  if ((p = +p) <= 0 || n < 2) return +valueof(values[0], 0, values);
  if (p >= 1) return +valueof(values[n - 1], n - 1, values);
  var n,
      i = (n - 1) * p,
      i0 = Math.floor(i),
      value0 = +valueof(values[i0], i0, values),
      value1 = +valueof(values[i0 + 1], i0 + 1, values);
  return value0 + (value1 - value0) * (i - i0);
});


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return prefix; });
var prefix = "$";

function Map() {}

Map.prototype = map.prototype = {
  constructor: Map,
  has: function(key) {
    return (prefix + key) in this;
  },
  get: function(key) {
    return this[prefix + key];
  },
  set: function(key, value) {
    this[prefix + key] = value;
    return this;
  },
  remove: function(key) {
    var property = prefix + key;
    return property in this && delete this[property];
  },
  clear: function() {
    for (var property in this) if (property[0] === prefix) delete this[property];
  },
  keys: function() {
    var keys = [];
    for (var property in this) if (property[0] === prefix) keys.push(property.slice(1));
    return keys;
  },
  values: function() {
    var values = [];
    for (var property in this) if (property[0] === prefix) values.push(this[property]);
    return values;
  },
  entries: function() {
    var entries = [];
    for (var property in this) if (property[0] === prefix) entries.push({key: property.slice(1), value: this[property]});
    return entries;
  },
  size: function() {
    var size = 0;
    for (var property in this) if (property[0] === prefix) ++size;
    return size;
  },
  empty: function() {
    for (var property in this) if (property[0] === prefix) return false;
    return true;
  },
  each: function(f) {
    for (var property in this) if (property[0] === prefix) f(this[property], property.slice(1), this);
  }
};

function map(object, f) {
  var map = new Map;

  // Copy constructor.
  if (object instanceof Map) object.each(function(value, key) { map.set(key, value); });

  // Index array by numeric index or specified key function.
  else if (Array.isArray(object)) {
    var i = -1,
        n = object.length,
        o;

    if (f == null) while (++i < n) map.set(i, object[i]);
    else while (++i < n) map.set(f(o = object[i], i, object), o);
  }

  // Convert object to map.
  else if (object) for (var key in object) map.set(key, object[key]);

  return map;
}

/* harmony default export */ __webpack_exports__["a"] = (map);


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rgb__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__array__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__date__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__number__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__object__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__string__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constant__ = __webpack_require__(73);









/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? Object(__WEBPACK_IMPORTED_MODULE_7__constant__["a" /* default */])(b)
      : (t === "number" ? __WEBPACK_IMPORTED_MODULE_4__number__["a" /* default */]
      : t === "string" ? ((c = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["a" /* color */])(b)) ? (b = c, __WEBPACK_IMPORTED_MODULE_1__rgb__["a" /* default */]) : __WEBPACK_IMPORTED_MODULE_6__string__["a" /* default */])
      : b instanceof __WEBPACK_IMPORTED_MODULE_0_d3_color__["a" /* color */] ? __WEBPACK_IMPORTED_MODULE_1__rgb__["a" /* default */]
      : b instanceof Date ? __WEBPACK_IMPORTED_MODULE_3__date__["a" /* default */]
      : Array.isArray(b) ? __WEBPACK_IMPORTED_MODULE_2__array__["a" /* default */]
      : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? __WEBPACK_IMPORTED_MODULE_5__object__["a" /* default */]
      : __WEBPACK_IMPORTED_MODULE_4__number__["a" /* default */])(a, b);
});


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Color;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return darker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return brighter; });
/* harmony export (immutable) */ __webpack_exports__["e"] = color;
/* harmony export (immutable) */ __webpack_exports__["h"] = rgbConvert;
/* harmony export (immutable) */ __webpack_exports__["g"] = rgb;
/* harmony export (immutable) */ __webpack_exports__["b"] = Rgb;
/* unused harmony export hslConvert */
/* harmony export (immutable) */ __webpack_exports__["f"] = hsl;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__define__ = __webpack_require__(38);


function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex3 = /^#([0-9a-f]{3})$/,
    reHex6 = /^#([0-9a-f]{6})$/,
    reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
    reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
    reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
    reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
    reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
    reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Color, color, {
  displayable: function() {
    return this.rgb().displayable();
  },
  hex: function() {
    return this.rgb().hex();
  },
  toString: function() {
    return this.rgb() + "";
  }
});

function color(format) {
  var m;
  format = (format + "").trim().toLowerCase();
  return (m = reHex3.exec(format)) ? (m = parseInt(m[1], 16), new Rgb((m >> 8 & 0xf) | (m >> 4 & 0x0f0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1)) // #f00
      : (m = reHex6.exec(format)) ? rgbn(parseInt(m[1], 16)) // #ff0000
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format])
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb;
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Rgb, rgb, Object(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return (0 <= this.r && this.r <= 255)
        && (0 <= this.g && this.g <= 255)
        && (0 <= this.b && this.b <= 255)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: function() {
    return "#" + hex(this.r) + hex(this.g) + hex(this.b);
  },
  toString: function() {
    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "rgb(" : "rgba(")
        + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.b) || 0))
        + (a === 1 ? ")" : ", " + a + ")");
  }
}));

function hex(value) {
  value = Math.max(0, Math.min(255, Math.round(value) || 0));
  return (value < 16 ? "0" : "") + value.toString(16);
}

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl;
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Hsl, hsl, Object(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  }
}));

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = extend;
/* harmony default export */ __webpack_exports__["a"] = (function(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
});

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = basis;
function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1, t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0
      + (4 - 6 * t2 + 3 * t3) * v1
      + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2
      + t3 * v3) / 6;
}

/* harmony default export */ __webpack_exports__["b"] = (function(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
        v1 = values[i],
        v2 = values[i + 1],
        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
});


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Computes the decimal coefficient and exponent of the specified number x with
// significant digits p, where x is positive and p is in [1, 21] or undefined.
// For example, formatDecimal(1.23) returns ["123", 0].
/* harmony default export */ __webpack_exports__["a"] = (function(x, p) {
  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
  var i, coefficient = x.slice(0, i);

  // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
  // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x.slice(i + 1)
  ];
});


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(3);
/* unused harmony reexport timeInterval */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__millisecond__ = __webpack_require__(171);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__millisecond__["a"]; });
/* unused harmony reexport timeMilliseconds */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_1__millisecond__["a"]; });
/* unused harmony reexport utcMilliseconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__second__ = __webpack_require__(172);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_2__second__["a"]; });
/* unused harmony reexport timeSeconds */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_2__second__["a"]; });
/* unused harmony reexport utcSeconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__minute__ = __webpack_require__(173);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__minute__["a"]; });
/* unused harmony reexport timeMinutes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hour__ = __webpack_require__(174);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__hour__["a"]; });
/* unused harmony reexport timeHours */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__day__ = __webpack_require__(175);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__day__["a"]; });
/* unused harmony reexport timeDays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__week__ = __webpack_require__(176);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_6__week__["b"]; });
/* unused harmony reexport timeWeeks */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_6__week__["b"]; });
/* unused harmony reexport timeSundays */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_6__week__["a"]; });
/* unused harmony reexport timeMondays */
/* unused harmony reexport timeTuesday */
/* unused harmony reexport timeTuesdays */
/* unused harmony reexport timeWednesday */
/* unused harmony reexport timeWednesdays */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_6__week__["c"]; });
/* unused harmony reexport timeThursdays */
/* unused harmony reexport timeFriday */
/* unused harmony reexport timeFridays */
/* unused harmony reexport timeSaturday */
/* unused harmony reexport timeSaturdays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__month__ = __webpack_require__(177);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_7__month__["a"]; });
/* unused harmony reexport timeMonths */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__year__ = __webpack_require__(178);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_8__year__["a"]; });
/* unused harmony reexport timeYears */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utcMinute__ = __webpack_require__(179);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_9__utcMinute__["a"]; });
/* unused harmony reexport utcMinutes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utcHour__ = __webpack_require__(180);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_10__utcHour__["a"]; });
/* unused harmony reexport utcHours */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utcDay__ = __webpack_require__(181);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_11__utcDay__["a"]; });
/* unused harmony reexport utcDays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utcWeek__ = __webpack_require__(182);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_12__utcWeek__["b"]; });
/* unused harmony reexport utcWeeks */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_12__utcWeek__["b"]; });
/* unused harmony reexport utcSundays */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_12__utcWeek__["a"]; });
/* unused harmony reexport utcMondays */
/* unused harmony reexport utcTuesday */
/* unused harmony reexport utcTuesdays */
/* unused harmony reexport utcWednesday */
/* unused harmony reexport utcWednesdays */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_12__utcWeek__["c"]; });
/* unused harmony reexport utcThursdays */
/* unused harmony reexport utcFriday */
/* unused harmony reexport utcFridays */
/* unused harmony reexport utcSaturday */
/* unused harmony reexport utcSaturdays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__utcMonth__ = __webpack_require__(183);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_13__utcMonth__["a"]; });
/* unused harmony reexport utcMonths */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__utcYear__ = __webpack_require__(184);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_14__utcYear__["a"]; });
/* unused harmony reexport utcYears */































/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return timeFormat; });
/* unused harmony export timeParse */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return utcFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return utcParse; });
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__locale__ = __webpack_require__(86);


var locale;
var timeFormat;
var timeParse;
var utcFormat;
var utcParse;

defaultLocale({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});

function defaultLocale(definition) {
  locale = Object(__WEBPACK_IMPORTED_MODULE_0__locale__["a" /* default */])(definition);
  timeFormat = locale.format;
  timeParse = locale.parse;
  utcFormat = locale.utcFormat;
  utcParse = locale.utcParse;
  return locale;
}


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__namespaces__ = __webpack_require__(45);


/* harmony default export */ __webpack_exports__["a"] = (function(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return __WEBPACK_IMPORTED_MODULE_0__namespaces__["a" /* default */].hasOwnProperty(prefix) ? {space: __WEBPACK_IMPORTED_MODULE_0__namespaces__["a" /* default */][prefix], local: name} : name;
});


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return xhtml; });
var xhtml = "http://www.w3.org/1999/xhtml";

/* harmony default export */ __webpack_exports__["a"] = ({
  svg: "http://www.w3.org/2000/svg",
  xhtml: xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
});


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function none() {}

/* harmony default export */ __webpack_exports__["a"] = (function(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
});


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(node) {
  return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
      || (node.document && node) // node is a Window
      || node.defaultView; // node is a Document
});


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return event; });
/* unused harmony export customEvent */
var filterEvents = {};

var event = null;

if (typeof document !== "undefined") {
  var element = document.documentElement;
  if (!("onmouseenter" in element)) {
    filterEvents = {mouseenter: "mouseover", mouseleave: "mouseout"};
  }
}

function filterContextListener(listener, index, group) {
  listener = contextListener(listener, index, group);
  return function(event) {
    var related = event.relatedTarget;
    if (!related || (related !== this && !(related.compareDocumentPosition(this) & 8))) {
      listener.call(this, event);
    }
  };
}

function contextListener(listener, index, group) {
  return function(event1) {
    var event0 = event; // Events can be reentrant (e.g., focus).
    event = event1;
    try {
      listener.call(this, this.__data__, index, group);
    } finally {
      event = event0;
    }
  };
}

function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return {type: t, name: name};
  });
}

function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on) return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
      } else {
        on[++i] = o;
      }
    }
    if (++i) on.length = i;
    else delete this.__on;
  };
}

function onAdd(typename, value, capture) {
  var wrap = filterEvents.hasOwnProperty(typename.type) ? filterContextListener : contextListener;
  return function(d, i, group) {
    var on = this.__on, o, listener = wrap(value, i, group);
    if (on) for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
        this.addEventListener(o.type, o.listener = listener, o.capture = capture);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, capture);
    o = {type: typename.type, name: typename.name, value: value, listener: listener, capture: capture};
    if (!on) this.__on = [o];
    else on.push(o);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(typename, value, capture) {
  var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;

  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }

  on = value ? onAdd : onRemove;
  if (capture == null) capture = false;
  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, capture));
  return this;
});

function customEvent(event1, listener, that, args) {
  var event0 = event;
  event1.sourceEvent = event;
  event = event1;
  try {
    return listener.apply(that, args);
  } finally {
    event = event0;
  }
}


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selection_on__ = __webpack_require__(48);


/* harmony default export */ __webpack_exports__["a"] = (function() {
  var current = __WEBPACK_IMPORTED_MODULE_0__selection_on__["b" /* event */], source;
  while (source = current.sourceEvent) current = source;
  return current;
});


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_path__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__curve_linear__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__point__ = __webpack_require__(51);





/* harmony default export */ __webpack_exports__["a"] = (function() {
  var x = __WEBPACK_IMPORTED_MODULE_3__point__["a" /* x */],
      y = __WEBPACK_IMPORTED_MODULE_3__point__["b" /* y */],
      defined = Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(true),
      context = null,
      curve = __WEBPACK_IMPORTED_MODULE_2__curve_linear__["a" /* default */],
      output = null;

  function line(data) {
    var i,
        n = data.length,
        d,
        defined0 = false,
        buffer;

    if (context == null) output = curve(buffer = Object(__WEBPACK_IMPORTED_MODULE_0_d3_path__["a" /* path */])());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) output.lineStart();
        else output.lineEnd();
      }
      if (defined0) output.point(+x(d, i, data), +y(d, i, data));
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  line.x = function(_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), line) : x;
  };

  line.y = function(_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), line) : y;
  };

  line.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(!!_), line) : defined;
  };

  line.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
  };

  line.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
  };

  return line;
});


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = x;
/* harmony export (immutable) */ __webpack_exports__["b"] = y;
function x(p) {
  return p[0];
}

function y(p) {
  return p[1];
}


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = point;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cardinal__ = __webpack_require__(31);



function point(that, x, y) {
  var x1 = that._x1,
      y1 = that._y1,
      x2 = that._x2,
      y2 = that._y2;

  if (that._l01_a > __WEBPACK_IMPORTED_MODULE_0__math__["f" /* epsilon */]) {
    var a = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a,
        n = 3 * that._l01_a * (that._l01_a + that._l12_a);
    x1 = (x1 * a - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
    y1 = (y1 * a - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
  }

  if (that._l23_a > __WEBPACK_IMPORTED_MODULE_0__math__["f" /* epsilon */]) {
    var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a,
        m = 3 * that._l23_a * (that._l23_a + that._l12_a);
    x2 = (x2 * b + that._x1 * that._l23_2a - x * that._l12_2a) / m;
    y2 = (y2 * b + that._y1 * that._l23_2a - y * that._l12_2a) / m;
  }

  that._context.bezierCurveTo(x1, y1, x2, y2, that._x2, that._y2);
}

function CatmullRom(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRom.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x2, this._y2); break;
      case 3: this.point(this._x2, this._y2); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; // proceed
      default: point(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* unused harmony default export */ var _unused_webpack_default_export = ((function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRom(context, alpha) : new __WEBPACK_IMPORTED_MODULE_1__cardinal__["a" /* Cardinal */](context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5));


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = sum;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__none__ = __webpack_require__(20);


/* harmony default export */ __webpack_exports__["a"] = (function(series) {
  var sums = series.map(sum);
  return Object(__WEBPACK_IMPORTED_MODULE_0__none__["a" /* default */])(series).sort(function(a, b) { return sums[a] - sums[b]; });
});

function sum(series) {
  var s = 0, i = -1, n = series.length, v;
  while (++i < n) if (v = +series[i][1]) s += v;
  return s;
}


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function streamGeometry(geometry, stream) {
  if (geometry && streamGeometryType.hasOwnProperty(geometry.type)) {
    streamGeometryType[geometry.type](geometry, stream);
  }
}

var streamObjectType = {
  Feature: function(object, stream) {
    streamGeometry(object.geometry, stream);
  },
  FeatureCollection: function(object, stream) {
    var features = object.features, i = -1, n = features.length;
    while (++i < n) streamGeometry(features[i].geometry, stream);
  }
};

var streamGeometryType = {
  Sphere: function(object, stream) {
    stream.sphere();
  },
  Point: function(object, stream) {
    object = object.coordinates;
    stream.point(object[0], object[1], object[2]);
  },
  MultiPoint: function(object, stream) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) object = coordinates[i], stream.point(object[0], object[1], object[2]);
  },
  LineString: function(object, stream) {
    streamLine(object.coordinates, stream, 0);
  },
  MultiLineString: function(object, stream) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) streamLine(coordinates[i], stream, 0);
  },
  Polygon: function(object, stream) {
    streamPolygon(object.coordinates, stream);
  },
  MultiPolygon: function(object, stream) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) streamPolygon(coordinates[i], stream);
  },
  GeometryCollection: function(object, stream) {
    var geometries = object.geometries, i = -1, n = geometries.length;
    while (++i < n) streamGeometry(geometries[i], stream);
  }
};

function streamLine(coordinates, stream, closed) {
  var i = -1, n = coordinates.length - closed, coordinate;
  stream.lineStart();
  while (++i < n) coordinate = coordinates[i], stream.point(coordinate[0], coordinate[1], coordinate[2]);
  stream.lineEnd();
}

function streamPolygon(coordinates, stream) {
  var i = -1, n = coordinates.length;
  stream.polygonStart();
  while (++i < n) streamLine(coordinates[i], stream, 1);
  stream.polygonEnd();
}

/* harmony default export */ __webpack_exports__["a"] = (function(object, stream) {
  if (object && streamObjectType.hasOwnProperty(object.type)) {
    streamObjectType[object.type](object, stream);
  } else {
    streamGeometry(object, stream);
  }
});


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Adds floating point numbers with twice the normal precision.
// Reference: J. R. Shewchuk, Adaptive Precision Floating-Point Arithmetic and
// Fast Robust Geometric Predicates, Discrete & Computational Geometry 18(3)
// 305–363 (1997).
// Code adapted from GeographicLib by Charles F. F. Karney,
// http://geographiclib.sourceforge.net/

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return new Adder;
});

function Adder() {
  this.reset();
}

Adder.prototype = {
  constructor: Adder,
  reset: function() {
    this.s = // rounded value
    this.t = 0; // exact error
  },
  add: function(y) {
    add(temp, y, this.t);
    add(this, temp.s, this.s);
    if (this.s) this.t += temp.t;
    else this.s = temp.t;
  },
  valueOf: function() {
    return this.s;
  }
};

var temp = new Adder;

function add(adder, a, b) {
  var x = adder.s = a + b,
      bv = x - a,
      av = x - bv;
  adder.t = (a - av) + (b - bv);
}


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__band__ = __webpack_require__(117);
/* unused harmony reexport scaleBand */
/* unused harmony reexport scalePoint */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__identity__ = __webpack_require__(139);
/* unused harmony reexport scaleIdentity */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__linear__ = __webpack_require__(12);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__linear__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__log__ = __webpack_require__(166);
/* unused harmony reexport scaleLog */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ordinal__ = __webpack_require__(69);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__ordinal__["a"]; });
/* unused harmony reexport scaleImplicit */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pow__ = __webpack_require__(167);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_5__pow__["a"]; });
/* unused harmony reexport scaleSqrt */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__quantile__ = __webpack_require__(168);
/* unused harmony reexport scaleQuantile */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__quantize__ = __webpack_require__(169);
/* unused harmony reexport scaleQuantize */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__threshold__ = __webpack_require__(170);
/* unused harmony reexport scaleThreshold */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__time__ = __webpack_require__(84);
/* unused harmony reexport scaleTime */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utcTime__ = __webpack_require__(186);
/* unused harmony reexport scaleUtc */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__sequential__ = __webpack_require__(187);
/* unused harmony reexport scaleSequential */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__diverging__ = __webpack_require__(188);
/* unused harmony reexport scaleDiverging */



























/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export bisectRight */
/* unused harmony export bisectLeft */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bisector__ = __webpack_require__(58);



var ascendingBisect = Object(__WEBPACK_IMPORTED_MODULE_1__bisector__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */]);
var bisectRight = ascendingBisect.right;
var bisectLeft = ascendingBisect.left;
/* harmony default export */ __webpack_exports__["a"] = (bisectRight);


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(11);


/* harmony default export */ __webpack_exports__["a"] = (function(compare) {
  if (compare.length === 1) compare = ascendingComparator(compare);
  return {
    left: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) < 0) lo = mid + 1;
        else hi = mid;
      }
      return lo;
    },
    right: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) > 0) hi = mid;
        else lo = mid + 1;
      }
      return lo;
    }
  };
});

function ascendingComparator(f) {
  return function(d, x) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */])(f(d), x);
  };
}


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = pair;
/* unused harmony default export */ var _unused_webpack_default_export = (function(array, f) {
  if (f == null) f = pair;
  var i = 0, n = array.length - 1, p = array[0], pairs = new Array(n < 0 ? 0 : n);
  while (i < n) pairs[i] = f(p, p = array[++i]);
  return pairs;
});

function pair(a, b) {
  return [a, b];
}


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__variance__ = __webpack_require__(61);


/* harmony default export */ __webpack_exports__["a"] = (function(array, f) {
  var v = Object(__WEBPACK_IMPORTED_MODULE_0__variance__["a" /* default */])(array, f);
  return v ? Math.sqrt(v) : v;
});


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(16);


/* harmony default export */ __webpack_exports__["a"] = (function(values, valueof) {
  var n = values.length,
      m = 0,
      i = -1,
      mean = 0,
      value,
      delta,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(values[i]))) {
        delta = value - mean;
        mean += delta / ++m;
        sum += delta * (value - mean);
      }
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(valueof(values[i], i, values)))) {
        delta = value - mean;
        mean += delta / ++m;
        sum += delta * (value - mean);
      }
    }
  }

  if (m > 1) return sum / (m - 1);
});


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      min,
      max;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        min = max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null) {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        min = max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null) {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
  }

  return [min, max];
});


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return slice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return map; });
var array = Array.prototype;

var slice = array.slice;
var map = array.map;


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

  var i = -1,
      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
      range = new Array(n);

  while (++i < n) {
    range[i] = start + i * step;
  }

  return range;
});


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = tickIncrement;
/* harmony export (immutable) */ __webpack_exports__["c"] = tickStep;
var e10 = Math.sqrt(50),
    e5 = Math.sqrt(10),
    e2 = Math.sqrt(2);

/* harmony default export */ __webpack_exports__["a"] = (function(start, stop, count) {
  var reverse,
      i = -1,
      n,
      ticks,
      step;

  stop = +stop, start = +start, count = +count;
  if (start === stop && count > 0) return [start];
  if (reverse = stop < start) n = start, start = stop, stop = n;
  if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];

  if (step > 0) {
    start = Math.ceil(start / step);
    stop = Math.floor(stop / step);
    ticks = new Array(n = Math.ceil(stop - start + 1));
    while (++i < n) ticks[i] = (start + i) * step;
  } else {
    start = Math.floor(start * step);
    stop = Math.ceil(stop * step);
    ticks = new Array(n = Math.ceil(start - stop + 1));
    while (++i < n) ticks[i] = (start - i) / step;
  }

  if (reverse) ticks.reverse();

  return ticks;
});

function tickIncrement(start, stop, count) {
  var step = (stop - start) / Math.max(0, count),
      power = Math.floor(Math.log(step) / Math.LN10),
      error = step / Math.pow(10, power);
  return power >= 0
      ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power)
      : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}

function tickStep(start, stop, count) {
  var step0 = Math.abs(stop - start) / Math.max(0, count),
      step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
      error = step0 / step1;
  if (error >= e10) step1 *= 10;
  else if (error >= e5) step1 *= 5;
  else if (error >= e2) step1 *= 2;
  return stop < start ? -step1 : step1;
}


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(values) {
  return Math.ceil(Math.log(values.length) / Math.LN2) + 1;
});


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      min;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        min = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null && min > value) {
            min = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        min = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null && min > value) {
            min = value;
          }
        }
      }
    }
  }

  return min;
});


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__min__ = __webpack_require__(67);


/* harmony default export */ __webpack_exports__["a"] = (function(matrix) {
  if (!(n = matrix.length)) return [];
  for (var i = -1, m = Object(__WEBPACK_IMPORTED_MODULE_0__min__["a" /* default */])(matrix, length), transpose = new Array(m); ++i < m;) {
    for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n;) {
      row[j] = matrix[j][i];
    }
  }
  return transpose;
});

function length(d) {
  return d.length;
}


/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export implicit */
/* harmony export (immutable) */ __webpack_exports__["a"] = ordinal;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_collection__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__(9);



var implicit = {name: "implicit"};

function ordinal(range) {
  var index = Object(__WEBPACK_IMPORTED_MODULE_0_d3_collection__["a" /* map */])(),
      domain = [],
      unknown = implicit;

  range = range == null ? [] : __WEBPACK_IMPORTED_MODULE_1__array__["b" /* slice */].call(range);

  function scale(d) {
    var key = d + "", i = index.get(key);
    if (!i) {
      if (unknown !== implicit) return unknown;
      index.set(key, i = domain.push(d));
    }
    return range[(i - 1) % range.length];
  }

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [], index = Object(__WEBPACK_IMPORTED_MODULE_0_d3_collection__["a" /* map */])();
    var i = -1, n = _.length, d, key;
    while (++i < n) if (!index.has(key = (d = _[i]) + "")) index.set(key, domain.push(d));
    return scale;
  };

  scale.range = function(_) {
    return arguments.length ? (range = __WEBPACK_IMPORTED_MODULE_1__array__["b" /* slice */].call(_), scale) : range.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return ordinal()
        .domain(domain)
        .range(range)
        .unknown(unknown);
  };

  return scale;
}


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deg2rad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return rad2deg; });
var deg2rad = Math.PI / 180;
var rad2deg = 180 / Math.PI;


/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return rgbBasis; });
/* unused harmony export rgbBasisClosed */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__basis__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basisClosed__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__color__ = __webpack_require__(13);





/* harmony default export */ __webpack_exports__["a"] = ((function rgbGamma(y) {
  var color = Object(__WEBPACK_IMPORTED_MODULE_3__color__["b" /* gamma */])(y);

  function rgb(start, end) {
    var r = color((start = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["f" /* rgb */])(start)).r, (end = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["f" /* rgb */])(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = Object(__WEBPACK_IMPORTED_MODULE_3__color__["a" /* default */])(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb.gamma = rgbGamma;

  return rgb;
})(1));

function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length,
        r = new Array(n),
        g = new Array(n),
        b = new Array(n),
        i, color;
    for (i = 0; i < n; ++i) {
      color = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["f" /* rgb */])(colors[i]);
      r[i] = color.r || 0;
      g[i] = color.g || 0;
      b[i] = color.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color.opacity = 1;
    return function(t) {
      color.r = r(t);
      color.g = g(t);
      color.b = b(t);
      return color + "";
    };
  };
}

var rgbBasis = rgbSpline(__WEBPACK_IMPORTED_MODULE_1__basis__["b" /* default */]);
var rgbBasisClosed = rgbSpline(__WEBPACK_IMPORTED_MODULE_2__basisClosed__["a" /* default */]);


/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basis__ = __webpack_require__(39);


/* harmony default export */ __webpack_exports__["a"] = (function(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
        v0 = values[(i + n - 1) % n],
        v1 = values[i % n],
        v2 = values[(i + 1) % n],
        v3 = values[(i + 2) % n];
    return Object(__WEBPACK_IMPORTED_MODULE_0__basis__["a" /* basis */])((t - i / n) * n, v0, v1, v2, v3);
  };
});


/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__value__ = __webpack_require__(36);


/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(na),
      c = new Array(nb),
      i;

  for (i = 0; i < na; ++i) x[i] = Object(__WEBPACK_IMPORTED_MODULE_0__value__["a" /* default */])(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];

  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
});


/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var d = new Date;
  return a = +a, b -= a, function(t) {
    return d.setTime(a + b * t), d;
  };
});


/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__value__ = __webpack_require__(36);


/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var i = {},
      c = {},
      k;

  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = Object(__WEBPACK_IMPORTED_MODULE_0__value__["a" /* default */])(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
});


/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(23);


var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function() {
    return b;
  };
}

function one(b) {
  return function(t) {
    return b(t) + "";
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
      am, // current match in a
      bm, // current match in b
      bs, // string preceding current number in b, if any
      i = -1, // index in s
      s = [], // string constants and placeholders
      q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a))
      && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) { // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else { // interpolate non-matching numbers
      s[++i] = null;
      q.push({i: i, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(am, bm)});
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? (q[0]
      ? one(q[0].x)
      : zero(b))
      : (b = q.length, function(t) {
          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
});


/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return +x;
});


/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultLocale__ = __webpack_require__(156);
/* unused harmony reexport formatDefaultLocale */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__defaultLocale__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__defaultLocale__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__locale__ = __webpack_require__(80);
/* unused harmony reexport formatLocale */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__formatSpecifier__ = __webpack_require__(81);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__formatSpecifier__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__precisionFixed__ = __webpack_require__(163);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__precisionFixed__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__precisionPrefix__ = __webpack_require__(164);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__precisionPrefix__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__precisionRound__ = __webpack_require__(165);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__precisionRound__["a"]; });








/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exponent__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__formatGroup__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__formatNumerals__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__formatSpecifier__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__formatTrim__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__formatTypes__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__formatPrefixAuto__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__identity__ = __webpack_require__(162);









var prefixes = ["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];

/* harmony default export */ __webpack_exports__["a"] = (function(locale) {
  var group = locale.grouping && locale.thousands ? Object(__WEBPACK_IMPORTED_MODULE_1__formatGroup__["a" /* default */])(locale.grouping, locale.thousands) : __WEBPACK_IMPORTED_MODULE_7__identity__["a" /* default */],
      currency = locale.currency,
      decimal = locale.decimal,
      numerals = locale.numerals ? Object(__WEBPACK_IMPORTED_MODULE_2__formatNumerals__["a" /* default */])(locale.numerals) : __WEBPACK_IMPORTED_MODULE_7__identity__["a" /* default */],
      percent = locale.percent || "%";

  function newFormat(specifier) {
    specifier = Object(__WEBPACK_IMPORTED_MODULE_3__formatSpecifier__["a" /* default */])(specifier);

    var fill = specifier.fill,
        align = specifier.align,
        sign = specifier.sign,
        symbol = specifier.symbol,
        zero = specifier.zero,
        width = specifier.width,
        comma = specifier.comma,
        precision = specifier.precision,
        trim = specifier.trim,
        type = specifier.type;

    // The "n" type is an alias for ",g".
    if (type === "n") comma = true, type = "g";

    // The "" type, and any invalid type, is an alias for ".12~g".
    else if (!__WEBPACK_IMPORTED_MODULE_5__formatTypes__["a" /* default */][type]) precision == null && (precision = 12), trim = true, type = "g";

    // If zero fill is specified, padding goes after sign and before digits.
    if (zero || (fill === "0" && align === "=")) zero = true, fill = "0", align = "=";

    // Compute the prefix and suffix.
    // For SI-prefix, the suffix is lazily computed.
    var prefix = symbol === "$" ? currency[0] : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
        suffix = symbol === "$" ? currency[1] : /[%p]/.test(type) ? percent : "";

    // What format function should we use?
    // Is this an integer type?
    // Can this type generate exponential notation?
    var formatType = __WEBPACK_IMPORTED_MODULE_5__formatTypes__["a" /* default */][type],
        maybeSuffix = /[defgprs%]/.test(type);

    // Set the default precision if not specified,
    // or clamp the specified precision to the supported range.
    // For significant precision, it must be in [1, 21].
    // For fixed precision, it must be in [0, 20].
    precision = precision == null ? 6
        : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision))
        : Math.max(0, Math.min(20, precision));

    function format(value) {
      var valuePrefix = prefix,
          valueSuffix = suffix,
          i, n, c;

      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;

        // Perform the initial formatting.
        var valueNegative = value < 0;
        value = formatType(Math.abs(value), precision);

        // Trim insignificant zeros.
        if (trim) value = Object(__WEBPACK_IMPORTED_MODULE_4__formatTrim__["a" /* default */])(value);

        // If a negative value rounds to zero during formatting, treat as positive.
        if (valueNegative && +value === 0) valueNegative = false;

        // Compute the prefix and suffix.
        valuePrefix = (valueNegative ? (sign === "(" ? sign : "-") : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes[8 + __WEBPACK_IMPORTED_MODULE_6__formatPrefixAuto__["b" /* prefixExponent */] / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");

        // Break the formatted value into the integer “value” part that can be
        // grouped, and fractional or exponential “suffix” part that is not.
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }

      // If the fill character is not "0", grouping is applied before padding.
      if (comma && !zero) value = group(value, Infinity);

      // Compute the padding.
      var length = valuePrefix.length + value.length + valueSuffix.length,
          padding = length < width ? new Array(width - length + 1).join(fill) : "";

      // If the fill character is "0", grouping is applied after padding.
      if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";

      // Reconstruct the final output based on the desired alignment.
      switch (align) {
        case "<": value = valuePrefix + value + valueSuffix + padding; break;
        case "=": value = valuePrefix + padding + value + valueSuffix; break;
        case "^": value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length); break;
        default: value = padding + valuePrefix + value + valueSuffix; break;
      }

      return numerals(value);
    }

    format.toString = function() {
      return specifier + "";
    };

    return format;
  }

  function formatPrefix(specifier, value) {
    var f = newFormat((specifier = Object(__WEBPACK_IMPORTED_MODULE_3__formatSpecifier__["a" /* default */])(specifier), specifier.type = "f", specifier)),
        e = Math.max(-8, Math.min(8, Math.floor(Object(__WEBPACK_IMPORTED_MODULE_0__exponent__["a" /* default */])(value) / 3))) * 3,
        k = Math.pow(10, -e),
        prefix = prefixes[8 + e / 3];
    return function(value) {
      return f(k * value) + prefix;
    };
  }

  return {
    format: newFormat,
    formatPrefix: formatPrefix
  };
});


/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = formatSpecifier;
// [[fill]align][sign][symbol][0][width][,][.precision][~][type]
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

function formatSpecifier(specifier) {
  return new FormatSpecifier(specifier);
}

formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof

function FormatSpecifier(specifier) {
  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
  var match;
  this.fill = match[1] || " ";
  this.align = match[2] || ">";
  this.sign = match[3] || "-";
  this.symbol = match[4] || "";
  this.zero = !!match[5];
  this.width = match[6] && +match[6];
  this.comma = !!match[7];
  this.precision = match[8] && +match[8].slice(1);
  this.trim = !!match[9];
  this.type = match[10] || "";
}

FormatSpecifier.prototype.toString = function() {
  return this.fill
      + this.align
      + this.sign
      + this.symbol
      + (this.zero ? "0" : "")
      + (this.width == null ? "" : Math.max(1, this.width | 0))
      + (this.comma ? "," : "")
      + (this.precision == null ? "" : "." + Math.max(0, this.precision | 0))
      + (this.trim ? "~" : "")
      + this.type;
};


/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return prefixExponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formatDecimal__ = __webpack_require__(41);


var prefixExponent;

/* harmony default export */ __webpack_exports__["a"] = (function(x, p) {
  var d = Object(__WEBPACK_IMPORTED_MODULE_0__formatDecimal__["a" /* default */])(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1],
      i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
      n = coefficient.length;
  return i === n ? coefficient
      : i > n ? coefficient + new Array(i - n + 1).join("0")
      : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i)
      : "0." + new Array(1 - i).join("0") + Object(__WEBPACK_IMPORTED_MODULE_0__formatDecimal__["a" /* default */])(x, Math.max(0, p + i - 1))[0]; // less than 1y!
});


/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(domain, interval) {
  domain = domain.slice();

  var i0 = 0,
      i1 = domain.length - 1,
      x0 = domain[i0],
      x1 = domain[i1],
      t;

  if (x1 < x0) {
    t = i0, i0 = i1, i1 = t;
    t = x0, x0 = x1, x1 = t;
  }

  domain[i0] = interval.floor(x0);
  domain[i1] = interval.ceil(x1);
  return domain;
});


/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = calendar;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_time__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_time_format__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__array__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__continuous__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nice__ = __webpack_require__(83);








var durationSecond = 1000,
    durationMinute = durationSecond * 60,
    durationHour = durationMinute * 60,
    durationDay = durationHour * 24,
    durationWeek = durationDay * 7,
    durationMonth = durationDay * 30,
    durationYear = durationDay * 365;

function date(t) {
  return new Date(t);
}

function number(t) {
  return t instanceof Date ? +t : +new Date(+t);
}

function calendar(year, month, week, day, hour, minute, second, millisecond, format) {
  var scale = Object(__WEBPACK_IMPORTED_MODULE_5__continuous__["b" /* default */])(__WEBPACK_IMPORTED_MODULE_5__continuous__["c" /* deinterpolateLinear */], __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["d" /* interpolateNumber */]),
      invert = scale.invert,
      domain = scale.domain;

  var formatMillisecond = format(".%L"),
      formatSecond = format(":%S"),
      formatMinute = format("%I:%M"),
      formatHour = format("%I %p"),
      formatDay = format("%a %d"),
      formatWeek = format("%b %d"),
      formatMonth = format("%B"),
      formatYear = format("%Y");

  var tickIntervals = [
    [second,  1,      durationSecond],
    [second,  5,  5 * durationSecond],
    [second, 15, 15 * durationSecond],
    [second, 30, 30 * durationSecond],
    [minute,  1,      durationMinute],
    [minute,  5,  5 * durationMinute],
    [minute, 15, 15 * durationMinute],
    [minute, 30, 30 * durationMinute],
    [  hour,  1,      durationHour  ],
    [  hour,  3,  3 * durationHour  ],
    [  hour,  6,  6 * durationHour  ],
    [  hour, 12, 12 * durationHour  ],
    [   day,  1,      durationDay   ],
    [   day,  2,  2 * durationDay   ],
    [  week,  1,      durationWeek  ],
    [ month,  1,      durationMonth ],
    [ month,  3,  3 * durationMonth ],
    [  year,  1,      durationYear  ]
  ];

  function tickFormat(date) {
    return (second(date) < date ? formatMillisecond
        : minute(date) < date ? formatSecond
        : hour(date) < date ? formatMinute
        : day(date) < date ? formatHour
        : month(date) < date ? (week(date) < date ? formatDay : formatWeek)
        : year(date) < date ? formatMonth
        : formatYear)(date);
  }

  function tickInterval(interval, start, stop, step) {
    if (interval == null) interval = 10;

    // If a desired tick count is specified, pick a reasonable tick interval
    // based on the extent of the domain and a rough estimate of tick size.
    // Otherwise, assume interval is already a time interval and use it.
    if (typeof interval === "number") {
      var target = Math.abs(stop - start) / interval,
          i = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["c" /* bisector */])(function(i) { return i[2]; }).right(tickIntervals, target);
      if (i === tickIntervals.length) {
        step = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["h" /* tickStep */])(start / durationYear, stop / durationYear, interval);
        interval = year;
      } else if (i) {
        i = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
        step = i[1];
        interval = i[0];
      } else {
        step = Math.max(Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["h" /* tickStep */])(start, stop, interval), 1);
        interval = millisecond;
      }
    }

    return step == null ? interval : interval.every(step);
  }

  scale.invert = function(y) {
    return new Date(invert(y));
  };

  scale.domain = function(_) {
    return arguments.length ? domain(__WEBPACK_IMPORTED_MODULE_4__array__["a" /* map */].call(_, number)) : domain().map(date);
  };

  scale.ticks = function(interval, step) {
    var d = domain(),
        t0 = d[0],
        t1 = d[d.length - 1],
        r = t1 < t0,
        t;
    if (r) t = t0, t0 = t1, t1 = t;
    t = tickInterval(interval, t0, t1, step);
    t = t ? t.range(t0, t1 + 1) : []; // inclusive stop
    return r ? t.reverse() : t;
  };

  scale.tickFormat = function(count, specifier) {
    return specifier == null ? tickFormat : format(specifier);
  };

  scale.nice = function(interval, step) {
    var d = domain();
    return (interval = tickInterval(interval, d[0], d[d.length - 1], step))
        ? domain(Object(__WEBPACK_IMPORTED_MODULE_6__nice__["a" /* default */])(d, interval))
        : scale;
  };

  scale.copy = function() {
    return Object(__WEBPACK_IMPORTED_MODULE_5__continuous__["a" /* copy */])(scale, calendar(year, month, week, day, hour, minute, second, millisecond, format));
  };

  return scale;
}

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return calendar(__WEBPACK_IMPORTED_MODULE_2_d3_time__["k" /* timeYear */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["f" /* timeMonth */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["j" /* timeWeek */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["a" /* timeDay */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["b" /* timeHour */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["d" /* timeMinute */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["g" /* timeSecond */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["c" /* timeMillisecond */], __WEBPACK_IMPORTED_MODULE_3_d3_time_format__["a" /* timeFormat */]).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]);
});


/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultLocale__ = __webpack_require__(43);
/* unused harmony reexport timeFormatDefaultLocale */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__defaultLocale__["a"]; });
/* unused harmony reexport timeParse */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__defaultLocale__["b"]; });
/* unused harmony reexport utcParse */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__locale__ = __webpack_require__(86);
/* unused harmony reexport timeFormatLocale */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isoFormat__ = __webpack_require__(87);
/* unused harmony reexport isoFormat */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__isoParse__ = __webpack_require__(185);
/* unused harmony reexport isoParse */






/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = formatLocale;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_time__ = __webpack_require__(42);


function localDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
    date.setFullYear(d.y);
    return date;
  }
  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}

function utcDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
    date.setUTCFullYear(d.y);
    return date;
  }
  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}

function newYear(y) {
  return {y: y, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0};
}

function formatLocale(locale) {
  var locale_dateTime = locale.dateTime,
      locale_date = locale.date,
      locale_time = locale.time,
      locale_periods = locale.periods,
      locale_weekdays = locale.days,
      locale_shortWeekdays = locale.shortDays,
      locale_months = locale.months,
      locale_shortMonths = locale.shortMonths;

  var periodRe = formatRe(locale_periods),
      periodLookup = formatLookup(locale_periods),
      weekdayRe = formatRe(locale_weekdays),
      weekdayLookup = formatLookup(locale_weekdays),
      shortWeekdayRe = formatRe(locale_shortWeekdays),
      shortWeekdayLookup = formatLookup(locale_shortWeekdays),
      monthRe = formatRe(locale_months),
      monthLookup = formatLookup(locale_months),
      shortMonthRe = formatRe(locale_shortMonths),
      shortMonthLookup = formatLookup(locale_shortMonths);

  var formats = {
    "a": formatShortWeekday,
    "A": formatWeekday,
    "b": formatShortMonth,
    "B": formatMonth,
    "c": null,
    "d": formatDayOfMonth,
    "e": formatDayOfMonth,
    "f": formatMicroseconds,
    "H": formatHour24,
    "I": formatHour12,
    "j": formatDayOfYear,
    "L": formatMilliseconds,
    "m": formatMonthNumber,
    "M": formatMinutes,
    "p": formatPeriod,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatSeconds,
    "u": formatWeekdayNumberMonday,
    "U": formatWeekNumberSunday,
    "V": formatWeekNumberISO,
    "w": formatWeekdayNumberSunday,
    "W": formatWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatYear,
    "Y": formatFullYear,
    "Z": formatZone,
    "%": formatLiteralPercent
  };

  var utcFormats = {
    "a": formatUTCShortWeekday,
    "A": formatUTCWeekday,
    "b": formatUTCShortMonth,
    "B": formatUTCMonth,
    "c": null,
    "d": formatUTCDayOfMonth,
    "e": formatUTCDayOfMonth,
    "f": formatUTCMicroseconds,
    "H": formatUTCHour24,
    "I": formatUTCHour12,
    "j": formatUTCDayOfYear,
    "L": formatUTCMilliseconds,
    "m": formatUTCMonthNumber,
    "M": formatUTCMinutes,
    "p": formatUTCPeriod,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatUTCSeconds,
    "u": formatUTCWeekdayNumberMonday,
    "U": formatUTCWeekNumberSunday,
    "V": formatUTCWeekNumberISO,
    "w": formatUTCWeekdayNumberSunday,
    "W": formatUTCWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatUTCYear,
    "Y": formatUTCFullYear,
    "Z": formatUTCZone,
    "%": formatLiteralPercent
  };

  var parses = {
    "a": parseShortWeekday,
    "A": parseWeekday,
    "b": parseShortMonth,
    "B": parseMonth,
    "c": parseLocaleDateTime,
    "d": parseDayOfMonth,
    "e": parseDayOfMonth,
    "f": parseMicroseconds,
    "H": parseHour24,
    "I": parseHour24,
    "j": parseDayOfYear,
    "L": parseMilliseconds,
    "m": parseMonthNumber,
    "M": parseMinutes,
    "p": parsePeriod,
    "Q": parseUnixTimestamp,
    "s": parseUnixTimestampSeconds,
    "S": parseSeconds,
    "u": parseWeekdayNumberMonday,
    "U": parseWeekNumberSunday,
    "V": parseWeekNumberISO,
    "w": parseWeekdayNumberSunday,
    "W": parseWeekNumberMonday,
    "x": parseLocaleDate,
    "X": parseLocaleTime,
    "y": parseYear,
    "Y": parseFullYear,
    "Z": parseZone,
    "%": parseLiteralPercent
  };

  // These recursive directive definitions must be deferred.
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);

  function newFormat(specifier, formats) {
    return function(date) {
      var string = [],
          i = -1,
          j = 0,
          n = specifier.length,
          c,
          pad,
          format;

      if (!(date instanceof Date)) date = new Date(+date);

      while (++i < n) {
        if (specifier.charCodeAt(i) === 37) {
          string.push(specifier.slice(j, i));
          if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);
          else pad = c === "e" ? " " : "0";
          if (format = formats[c]) c = format(date, pad);
          string.push(c);
          j = i + 1;
        }
      }

      string.push(specifier.slice(j, i));
      return string.join("");
    };
  }

  function newParse(specifier, newDate) {
    return function(string) {
      var d = newYear(1900),
          i = parseSpecifier(d, specifier, string += "", 0),
          week, day;
      if (i != string.length) return null;

      // If a UNIX timestamp is specified, return it.
      if ("Q" in d) return new Date(d.Q);

      // The am-pm flag is 0 for AM, and 1 for PM.
      if ("p" in d) d.H = d.H % 12 + d.p * 12;

      // Convert day-of-week and week-of-year to day-of-year.
      if ("V" in d) {
        if (d.V < 1 || d.V > 53) return null;
        if (!("w" in d)) d.w = 1;
        if ("Z" in d) {
          week = utcDate(newYear(d.y)), day = week.getUTCDay();
          week = day > 4 || day === 0 ? __WEBPACK_IMPORTED_MODULE_0_d3_time__["p" /* utcMonday */].ceil(week) : Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["p" /* utcMonday */])(week);
          week = __WEBPACK_IMPORTED_MODULE_0_d3_time__["l" /* utcDay */].offset(week, (d.V - 1) * 7);
          d.y = week.getUTCFullYear();
          d.m = week.getUTCMonth();
          d.d = week.getUTCDate() + (d.w + 6) % 7;
        } else {
          week = newDate(newYear(d.y)), day = week.getDay();
          week = day > 4 || day === 0 ? __WEBPACK_IMPORTED_MODULE_0_d3_time__["e" /* timeMonday */].ceil(week) : Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["e" /* timeMonday */])(week);
          week = __WEBPACK_IMPORTED_MODULE_0_d3_time__["a" /* timeDay */].offset(week, (d.V - 1) * 7);
          d.y = week.getFullYear();
          d.m = week.getMonth();
          d.d = week.getDate() + (d.w + 6) % 7;
        }
      } else if ("W" in d || "U" in d) {
        if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
        day = "Z" in d ? utcDate(newYear(d.y)).getUTCDay() : newDate(newYear(d.y)).getDay();
        d.m = 0;
        d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
      }

      // If a time zone is specified, all fields are interpreted as UTC and then
      // offset according to the specified time zone.
      if ("Z" in d) {
        d.H += d.Z / 100 | 0;
        d.M += d.Z % 100;
        return utcDate(d);
      }

      // Otherwise, all fields are in local time.
      return newDate(d);
    };
  }

  function parseSpecifier(d, specifier, string, j) {
    var i = 0,
        n = specifier.length,
        m = string.length,
        c,
        parse;

    while (i < n) {
      if (j >= m) return -1;
      c = specifier.charCodeAt(i++);
      if (c === 37) {
        c = specifier.charAt(i++);
        parse = parses[c in pads ? specifier.charAt(i++) : c];
        if (!parse || ((j = parse(d, string, j)) < 0)) return -1;
      } else if (c != string.charCodeAt(j++)) {
        return -1;
      }
    }

    return j;
  }

  function parsePeriod(d, string, i) {
    var n = periodRe.exec(string.slice(i));
    return n ? (d.p = periodLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseShortWeekday(d, string, i) {
    var n = shortWeekdayRe.exec(string.slice(i));
    return n ? (d.w = shortWeekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseWeekday(d, string, i) {
    var n = weekdayRe.exec(string.slice(i));
    return n ? (d.w = weekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseShortMonth(d, string, i) {
    var n = shortMonthRe.exec(string.slice(i));
    return n ? (d.m = shortMonthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseMonth(d, string, i) {
    var n = monthRe.exec(string.slice(i));
    return n ? (d.m = monthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseLocaleDateTime(d, string, i) {
    return parseSpecifier(d, locale_dateTime, string, i);
  }

  function parseLocaleDate(d, string, i) {
    return parseSpecifier(d, locale_date, string, i);
  }

  function parseLocaleTime(d, string, i) {
    return parseSpecifier(d, locale_time, string, i);
  }

  function formatShortWeekday(d) {
    return locale_shortWeekdays[d.getDay()];
  }

  function formatWeekday(d) {
    return locale_weekdays[d.getDay()];
  }

  function formatShortMonth(d) {
    return locale_shortMonths[d.getMonth()];
  }

  function formatMonth(d) {
    return locale_months[d.getMonth()];
  }

  function formatPeriod(d) {
    return locale_periods[+(d.getHours() >= 12)];
  }

  function formatUTCShortWeekday(d) {
    return locale_shortWeekdays[d.getUTCDay()];
  }

  function formatUTCWeekday(d) {
    return locale_weekdays[d.getUTCDay()];
  }

  function formatUTCShortMonth(d) {
    return locale_shortMonths[d.getUTCMonth()];
  }

  function formatUTCMonth(d) {
    return locale_months[d.getUTCMonth()];
  }

  function formatUTCPeriod(d) {
    return locale_periods[+(d.getUTCHours() >= 12)];
  }

  return {
    format: function(specifier) {
      var f = newFormat(specifier += "", formats);
      f.toString = function() { return specifier; };
      return f;
    },
    parse: function(specifier) {
      var p = newParse(specifier += "", localDate);
      p.toString = function() { return specifier; };
      return p;
    },
    utcFormat: function(specifier) {
      var f = newFormat(specifier += "", utcFormats);
      f.toString = function() { return specifier; };
      return f;
    },
    utcParse: function(specifier) {
      var p = newParse(specifier, utcDate);
      p.toString = function() { return specifier; };
      return p;
    }
  };
}

var pads = {"-": "", "_": " ", "0": "0"},
    numberRe = /^\s*\d+/, // note: ignores next directive
    percentRe = /^%/,
    requoteRe = /[\\^$*+?|[\]().{}]/g;

function pad(value, fill, width) {
  var sign = value < 0 ? "-" : "",
      string = (sign ? -value : value) + "",
      length = string.length;
  return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}

function requote(s) {
  return s.replace(requoteRe, "\\$&");
}

function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}

function formatLookup(names) {
  var map = {}, i = -1, n = names.length;
  while (++i < n) map[names[i].toLowerCase()] = i;
  return map;
}

function parseWeekdayNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.w = +n[0], i + n[0].length) : -1;
}

function parseWeekdayNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.u = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.U = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberISO(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.V = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.W = +n[0], i + n[0].length) : -1;
}

function parseFullYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 4));
  return n ? (d.y = +n[0], i + n[0].length) : -1;
}

function parseYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
}

function parseZone(d, string, i) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}

function parseMonthNumber(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}

function parseDayOfMonth(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.d = +n[0], i + n[0].length) : -1;
}

function parseDayOfYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}

function parseHour24(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.H = +n[0], i + n[0].length) : -1;
}

function parseMinutes(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.M = +n[0], i + n[0].length) : -1;
}

function parseSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.S = +n[0], i + n[0].length) : -1;
}

function parseMilliseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.L = +n[0], i + n[0].length) : -1;
}

function parseMicroseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 6));
  return n ? (d.L = Math.floor(n[0] / 1000), i + n[0].length) : -1;
}

function parseLiteralPercent(d, string, i) {
  var n = percentRe.exec(string.slice(i, i + 1));
  return n ? i + n[0].length : -1;
}

function parseUnixTimestamp(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = +n[0], i + n[0].length) : -1;
}

function parseUnixTimestampSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = (+n[0]) * 1000, i + n[0].length) : -1;
}

function formatDayOfMonth(d, p) {
  return pad(d.getDate(), p, 2);
}

function formatHour24(d, p) {
  return pad(d.getHours(), p, 2);
}

function formatHour12(d, p) {
  return pad(d.getHours() % 12 || 12, p, 2);
}

function formatDayOfYear(d, p) {
  return pad(1 + __WEBPACK_IMPORTED_MODULE_0_d3_time__["a" /* timeDay */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["k" /* timeYear */])(d), d), p, 3);
}

function formatMilliseconds(d, p) {
  return pad(d.getMilliseconds(), p, 3);
}

function formatMicroseconds(d, p) {
  return formatMilliseconds(d, p) + "000";
}

function formatMonthNumber(d, p) {
  return pad(d.getMonth() + 1, p, 2);
}

function formatMinutes(d, p) {
  return pad(d.getMinutes(), p, 2);
}

function formatSeconds(d, p) {
  return pad(d.getSeconds(), p, 2);
}

function formatWeekdayNumberMonday(d) {
  var day = d.getDay();
  return day === 0 ? 7 : day;
}

function formatWeekNumberSunday(d, p) {
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["h" /* timeSunday */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["k" /* timeYear */])(d), d), p, 2);
}

function formatWeekNumberISO(d, p) {
  var day = d.getDay();
  d = (day >= 4 || day === 0) ? Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["i" /* timeThursday */])(d) : __WEBPACK_IMPORTED_MODULE_0_d3_time__["i" /* timeThursday */].ceil(d);
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["i" /* timeThursday */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["k" /* timeYear */])(d), d) + (Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["k" /* timeYear */])(d).getDay() === 4), p, 2);
}

function formatWeekdayNumberSunday(d) {
  return d.getDay();
}

function formatWeekNumberMonday(d, p) {
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["e" /* timeMonday */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["k" /* timeYear */])(d), d), p, 2);
}

function formatYear(d, p) {
  return pad(d.getFullYear() % 100, p, 2);
}

function formatFullYear(d, p) {
  return pad(d.getFullYear() % 10000, p, 4);
}

function formatZone(d) {
  var z = d.getTimezoneOffset();
  return (z > 0 ? "-" : (z *= -1, "+"))
      + pad(z / 60 | 0, "0", 2)
      + pad(z % 60, "0", 2);
}

function formatUTCDayOfMonth(d, p) {
  return pad(d.getUTCDate(), p, 2);
}

function formatUTCHour24(d, p) {
  return pad(d.getUTCHours(), p, 2);
}

function formatUTCHour12(d, p) {
  return pad(d.getUTCHours() % 12 || 12, p, 2);
}

function formatUTCDayOfYear(d, p) {
  return pad(1 + __WEBPACK_IMPORTED_MODULE_0_d3_time__["l" /* utcDay */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["v" /* utcYear */])(d), d), p, 3);
}

function formatUTCMilliseconds(d, p) {
  return pad(d.getUTCMilliseconds(), p, 3);
}

function formatUTCMicroseconds(d, p) {
  return formatUTCMilliseconds(d, p) + "000";
}

function formatUTCMonthNumber(d, p) {
  return pad(d.getUTCMonth() + 1, p, 2);
}

function formatUTCMinutes(d, p) {
  return pad(d.getUTCMinutes(), p, 2);
}

function formatUTCSeconds(d, p) {
  return pad(d.getUTCSeconds(), p, 2);
}

function formatUTCWeekdayNumberMonday(d) {
  var dow = d.getUTCDay();
  return dow === 0 ? 7 : dow;
}

function formatUTCWeekNumberSunday(d, p) {
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["s" /* utcSunday */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["v" /* utcYear */])(d), d), p, 2);
}

function formatUTCWeekNumberISO(d, p) {
  var day = d.getUTCDay();
  d = (day >= 4 || day === 0) ? Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["t" /* utcThursday */])(d) : __WEBPACK_IMPORTED_MODULE_0_d3_time__["t" /* utcThursday */].ceil(d);
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["t" /* utcThursday */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["v" /* utcYear */])(d), d) + (Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["v" /* utcYear */])(d).getUTCDay() === 4), p, 2);
}

function formatUTCWeekdayNumberSunday(d) {
  return d.getUTCDay();
}

function formatUTCWeekNumberMonday(d, p) {
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["p" /* utcMonday */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["v" /* utcYear */])(d), d), p, 2);
}

function formatUTCYear(d, p) {
  return pad(d.getUTCFullYear() % 100, p, 2);
}

function formatUTCFullYear(d, p) {
  return pad(d.getUTCFullYear() % 10000, p, 4);
}

function formatUTCZone() {
  return "+0000";
}

function formatLiteralPercent() {
  return "%";
}

function formatUnixTimestamp(d) {
  return +d;
}

function formatUnixTimestampSeconds(d) {
  return Math.floor(+d / 1000);
}


/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isoSpecifier; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultLocale__ = __webpack_require__(43);


var isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";

function formatIsoNative(date) {
  return date.toISOString();
}

var formatIso = Date.prototype.toISOString
    ? formatIsoNative
    : Object(__WEBPACK_IMPORTED_MODULE_0__defaultLocale__["b" /* utcFormat */])(isoSpecifier);

/* unused harmony default export */ var _unused_webpack_default_export = (formatIso);


/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selection_index__ = __webpack_require__(4);


/* harmony default export */ __webpack_exports__["a"] = (function(selector) {
  return typeof selector === "string"
      ? new __WEBPACK_IMPORTED_MODULE_0__selection_index__["a" /* Selection */]([[document.querySelector(selector)]], [document.documentElement])
      : new __WEBPACK_IMPORTED_MODULE_0__selection_index__["a" /* Selection */]([[selector]], __WEBPACK_IMPORTED_MODULE_0__selection_index__["c" /* root */]);
});


/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function empty() {
  return [];
}

/* harmony default export */ __webpack_exports__["a"] = (function(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
});


/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var matcher = function(selector) {
  return function() {
    return this.matches(selector);
  };
};

if (typeof document !== "undefined") {
  var element = document.documentElement;
  if (!element.matches) {
    var vendorMatches = element.webkitMatchesSelector
        || element.msMatchesSelector
        || element.mozMatchesSelector
        || element.oMatchesSelector;
    matcher = function(selector) {
      return function() {
        return vendorMatches.call(this, selector);
      };
    };
  }
}

/* harmony default export */ __webpack_exports__["a"] = (matcher);


/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = EnterNode;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sparse__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(4);



/* harmony default export */ __webpack_exports__["b"] = (function() {
  return new __WEBPACK_IMPORTED_MODULE_1__index__["a" /* Selection */](this._enter || this._groups.map(__WEBPACK_IMPORTED_MODULE_0__sparse__["a" /* default */]), this._parents);
});

function EnterNode(parent, datum) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum;
}

EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
  insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
  querySelector: function(selector) { return this._parent.querySelector(selector); },
  querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
};


/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(update) {
  return new Array(update.length);
});


/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = styleValue;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__window__ = __webpack_require__(47);


function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}

function styleFunction(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);
    else this.style.setProperty(name, v, priority);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, value, priority) {
  return arguments.length > 1
      ? this.each((value == null
            ? styleRemove : typeof value === "function"
            ? styleFunction
            : styleConstant)(name, value, priority == null ? "" : priority))
      : styleValue(this.node(), name);
});

function styleValue(node, name) {
  return node.style.getPropertyValue(name)
      || Object(__WEBPACK_IMPORTED_MODULE_0__window__["a" /* default */])(node).getComputedStyle(node, null).getPropertyValue(name);
}


/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_path__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__curve_linear__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__line__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__point__ = __webpack_require__(51);






/* harmony default export */ __webpack_exports__["a"] = (function() {
  var x0 = __WEBPACK_IMPORTED_MODULE_4__point__["a" /* x */],
      x1 = null,
      y0 = Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(0),
      y1 = __WEBPACK_IMPORTED_MODULE_4__point__["b" /* y */],
      defined = Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(true),
      context = null,
      curve = __WEBPACK_IMPORTED_MODULE_2__curve_linear__["a" /* default */],
      output = null;

  function area(data) {
    var i,
        j,
        k,
        n = data.length,
        d,
        defined0 = false,
        buffer,
        x0z = new Array(n),
        y0z = new Array(n);

    if (context == null) output = curve(buffer = Object(__WEBPACK_IMPORTED_MODULE_0_d3_path__["a" /* path */])());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) {
          j = i;
          output.areaStart();
          output.lineStart();
        } else {
          output.lineEnd();
          output.lineStart();
          for (k = i - 1; k >= j; --k) {
            output.point(x0z[k], y0z[k]);
          }
          output.lineEnd();
          output.areaEnd();
        }
      }
      if (defined0) {
        x0z[i] = +x0(d, i, data), y0z[i] = +y0(d, i, data);
        output.point(x1 ? +x1(d, i, data) : x0z[i], y1 ? +y1(d, i, data) : y0z[i]);
      }
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  function arealine() {
    return Object(__WEBPACK_IMPORTED_MODULE_3__line__["a" /* default */])().defined(defined).curve(curve).context(context);
  }

  area.x = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), x1 = null, area) : x0;
  };

  area.x0 = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), area) : x0;
  };

  area.x1 = function(_) {
    return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), area) : x1;
  };

  area.y = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), y1 = null, area) : y0;
  };

  area.y0 = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), area) : y0;
  };

  area.y1 = function(_) {
    return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), area) : y1;
  };

  area.lineX0 =
  area.lineY0 = function() {
    return arealine().x(x0).y(y0);
  };

  area.lineY1 = function() {
    return arealine().x(x0).y(y1);
  };

  area.lineX1 = function() {
    return arealine().x(x1).y(y0);
  };

  area.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(!!_), area) : defined;
  };

  area.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), area) : curve;
  };

  area.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
  };

  return area;
});


/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return curveRadialLinear; });
/* harmony export (immutable) */ __webpack_exports__["b"] = curveRadial;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__linear__ = __webpack_require__(28);


var curveRadialLinear = curveRadial(__WEBPACK_IMPORTED_MODULE_0__linear__["a" /* default */]);

function Radial(curve) {
  this._curve = curve;
}

Radial.prototype = {
  areaStart: function() {
    this._curve.areaStart();
  },
  areaEnd: function() {
    this._curve.areaEnd();
  },
  lineStart: function() {
    this._curve.lineStart();
  },
  lineEnd: function() {
    this._curve.lineEnd();
  },
  point: function(a, r) {
    this._curve.point(r * Math.sin(a), r * -Math.cos(a));
  }
};

function curveRadial(curve) {

  function radial(context) {
    return new Radial(curve(context));
  }

  radial._curve = curve;

  return radial;
}


/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = lineRadial;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curve_radial__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__line__ = __webpack_require__(50);



function lineRadial(l) {
  var c = l.curve;

  l.angle = l.x, delete l.x;
  l.radius = l.y, delete l.y;

  l.curve = function(_) {
    return arguments.length ? c(Object(__WEBPACK_IMPORTED_MODULE_0__curve_radial__["b" /* default */])(_)) : c()._curve;
  };

  return l;
}

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return lineRadial(Object(__WEBPACK_IMPORTED_MODULE_1__line__["a" /* default */])().curve(__WEBPACK_IMPORTED_MODULE_0__curve_radial__["a" /* curveRadialLinear */]));
});


/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x, y) {
  return [(y = +y) * Math.cos(x -= Math.PI / 2), y * Math.sin(x)];
});


/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slice; });
var slice = Array.prototype.slice;


/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(18);


/* harmony default export */ __webpack_exports__["a"] = ({
  draw: function(context, size) {
    var r = Math.sqrt(size / __WEBPACK_IMPORTED_MODULE_0__math__["j" /* pi */]);
    context.moveTo(r, 0);
    context.arc(0, 0, r, 0, __WEBPACK_IMPORTED_MODULE_0__math__["m" /* tau */]);
  }
});


/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  draw: function(context, size) {
    var r = Math.sqrt(size / 5) / 2;
    context.moveTo(-3 * r, -r);
    context.lineTo(-r, -r);
    context.lineTo(-r, -3 * r);
    context.lineTo(r, -3 * r);
    context.lineTo(r, -r);
    context.lineTo(3 * r, -r);
    context.lineTo(3 * r, r);
    context.lineTo(r, r);
    context.lineTo(r, 3 * r);
    context.lineTo(-r, 3 * r);
    context.lineTo(-r, r);
    context.lineTo(-3 * r, r);
    context.closePath();
  }
});


/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var tan30 = Math.sqrt(1 / 3),
    tan30_2 = tan30 * 2;

/* harmony default export */ __webpack_exports__["a"] = ({
  draw: function(context, size) {
    var y = Math.sqrt(size / tan30_2),
        x = y * tan30;
    context.moveTo(0, -y);
    context.lineTo(x, 0);
    context.lineTo(0, y);
    context.lineTo(-x, 0);
    context.closePath();
  }
});


/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(18);


var ka = 0.89081309152928522810,
    kr = Math.sin(__WEBPACK_IMPORTED_MODULE_0__math__["j" /* pi */] / 10) / Math.sin(7 * __WEBPACK_IMPORTED_MODULE_0__math__["j" /* pi */] / 10),
    kx = Math.sin(__WEBPACK_IMPORTED_MODULE_0__math__["m" /* tau */] / 10) * kr,
    ky = -Math.cos(__WEBPACK_IMPORTED_MODULE_0__math__["m" /* tau */] / 10) * kr;

/* harmony default export */ __webpack_exports__["a"] = ({
  draw: function(context, size) {
    var r = Math.sqrt(size * ka),
        x = kx * r,
        y = ky * r;
    context.moveTo(0, -r);
    context.lineTo(x, y);
    for (var i = 1; i < 5; ++i) {
      var a = __WEBPACK_IMPORTED_MODULE_0__math__["m" /* tau */] * i / 5,
          c = Math.cos(a),
          s = Math.sin(a);
      context.lineTo(s * r, -c * r);
      context.lineTo(c * x - s * y, s * x + c * y);
    }
    context.closePath();
  }
});


/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  draw: function(context, size) {
    var w = Math.sqrt(size),
        x = -w / 2;
    context.rect(x, x, w, w);
  }
});


/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var sqrt3 = Math.sqrt(3);

/* harmony default export */ __webpack_exports__["a"] = ({
  draw: function(context, size) {
    var y = -Math.sqrt(size / (sqrt3 * 3));
    context.moveTo(0, y * 2);
    context.lineTo(-sqrt3 * y, -y);
    context.lineTo(sqrt3 * y, -y);
    context.closePath();
  }
});


/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var c = -0.5,
    s = Math.sqrt(3) / 2,
    k = 1 / Math.sqrt(12),
    a = (k / 2 + 1) * 3;

/* harmony default export */ __webpack_exports__["a"] = ({
  draw: function(context, size) {
    var r = Math.sqrt(size / a),
        x0 = r / 2,
        y0 = r * k,
        x1 = x0,
        y1 = r * k + r,
        x2 = -x1,
        y2 = y1;
    context.moveTo(x0, y0);
    context.lineTo(x1, y1);
    context.lineTo(x2, y2);
    context.lineTo(c * x0 - s * y0, s * x0 + c * y0);
    context.lineTo(c * x1 - s * y1, s * x1 + c * y1);
    context.lineTo(c * x2 - s * y2, s * x2 + c * y2);
    context.lineTo(c * x0 + s * y0, c * y0 - s * x0);
    context.lineTo(c * x1 + s * y1, c * y1 - s * x1);
    context.lineTo(c * x2 + s * y2, c * y2 - s * x2);
    context.closePath();
  }
});


/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = CardinalClosed;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__noop__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cardinal__ = __webpack_require__(31);



function CardinalClosed(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

CardinalClosed.prototype = {
  areaStart: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  areaEnd: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._x3 = x, this._y3 = y; break;
      case 1: this._point = 2; this._context.moveTo(this._x4 = x, this._y4 = y); break;
      case 2: this._point = 3; this._x5 = x, this._y5 = y; break;
      default: Object(__WEBPACK_IMPORTED_MODULE_1__cardinal__["b" /* point */])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* unused harmony default export */ var _unused_webpack_default_export = ((function custom(tension) {

  function cardinal(context) {
    return new CardinalClosed(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0));


/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = CardinalOpen;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cardinal__ = __webpack_require__(31);


function CardinalOpen(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

CardinalOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
      case 3: this._point = 4; // proceed
      default: Object(__WEBPACK_IMPORTED_MODULE_0__cardinal__["b" /* point */])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* unused harmony default export */ var _unused_webpack_default_export = ((function custom(tension) {

  function cardinal(context) {
    return new CardinalOpen(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0));


/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["g"] = spherical;
/* harmony export (immutable) */ __webpack_exports__["a"] = cartesian;
/* harmony export (immutable) */ __webpack_exports__["d"] = cartesianDot;
/* harmony export (immutable) */ __webpack_exports__["c"] = cartesianCross;
/* harmony export (immutable) */ __webpack_exports__["b"] = cartesianAddInPlace;
/* harmony export (immutable) */ __webpack_exports__["f"] = cartesianScale;
/* harmony export (immutable) */ __webpack_exports__["e"] = cartesianNormalizeInPlace;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(2);


function spherical(cartesian) {
  return [Object(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* atan2 */])(cartesian[1], cartesian[0]), Object(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* asin */])(cartesian[2])];
}

function cartesian(spherical) {
  var lambda = spherical[0], phi = spherical[1], cosPhi = Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(phi);
  return [cosPhi * Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(lambda), cosPhi * Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(lambda), Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(phi)];
}

function cartesianDot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

function cartesianCross(a, b) {
  return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
}

// TODO return a
function cartesianAddInPlace(a, b) {
  a[0] += b[0], a[1] += b[1], a[2] += b[2];
}

function cartesianScale(vector, k) {
  return [vector[0] * k, vector[1] * k, vector[2] * k];
}

// TODO return d
function cartesianNormalizeInPlace(d) {
  var l = Object(__WEBPACK_IMPORTED_MODULE_0__math__["u" /* sqrt */])(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
  d[0] /= l, d[1] /= l, d[2] /= l;
}


/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = azimuthalRaw;
/* harmony export (immutable) */ __webpack_exports__["a"] = azimuthalInvert;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(2);


function azimuthalRaw(scale) {
  return function(x, y) {
    var cx = Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(x),
        cy = Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(y),
        k = scale(cx * cy);
    return [
      k * cy * Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(x),
      k * Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(y)
    ];
  }
}

function azimuthalInvert(angle) {
  return function(x, y) {
    var z = Object(__WEBPACK_IMPORTED_MODULE_0__math__["u" /* sqrt */])(x * x + y * y),
        c = angle(z),
        sc = Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(c),
        cc = Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(c);
    return [
      Object(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* atan2 */])(x * sc, z * cc),
      Object(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* asin */])(z && y * sc / z)
    ];
  }
}


/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nest__ = __webpack_require__(134);
/* unused harmony reexport nest */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__set__ = __webpack_require__(135);
/* unused harmony reexport set */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map__ = __webpack_require__(35);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__map__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__keys__ = __webpack_require__(136);
/* unused harmony reexport keys */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__values__ = __webpack_require__(137);
/* unused harmony reexport values */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entries__ = __webpack_require__(138);
/* unused harmony reexport entries */








/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__arc__ = __webpack_require__(228);
/* unused harmony reexport arc */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__area__ = __webpack_require__(94);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__area__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__line__ = __webpack_require__(50);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__line__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pie__ = __webpack_require__(230);
/* unused harmony reexport pie */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__areaRadial__ = __webpack_require__(233);
/* unused harmony reexport areaRadial */
/* unused harmony reexport radialArea */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lineRadial__ = __webpack_require__(96);
/* unused harmony reexport lineRadial */
/* unused harmony reexport radialLine */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pointRadial__ = __webpack_require__(97);
/* unused harmony reexport pointRadial */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__link_index__ = __webpack_require__(234);
/* unused harmony reexport linkHorizontal */
/* unused harmony reexport linkVertical */
/* unused harmony reexport linkRadial */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__symbol__ = __webpack_require__(235);
/* unused harmony reexport symbol */
/* unused harmony reexport symbols */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__symbol_circle__ = __webpack_require__(99);
/* unused harmony reexport symbolCircle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__symbol_cross__ = __webpack_require__(100);
/* unused harmony reexport symbolCross */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__symbol_diamond__ = __webpack_require__(101);
/* unused harmony reexport symbolDiamond */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__symbol_square__ = __webpack_require__(103);
/* unused harmony reexport symbolSquare */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__symbol_star__ = __webpack_require__(102);
/* unused harmony reexport symbolStar */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__symbol_triangle__ = __webpack_require__(104);
/* unused harmony reexport symbolTriangle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__symbol_wye__ = __webpack_require__(105);
/* unused harmony reexport symbolWye */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__curve_basisClosed__ = __webpack_require__(236);
/* unused harmony reexport curveBasisClosed */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__curve_basisOpen__ = __webpack_require__(237);
/* unused harmony reexport curveBasisOpen */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__curve_basis__ = __webpack_require__(30);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_18__curve_basis__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__curve_bundle__ = __webpack_require__(238);
/* unused harmony reexport curveBundle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__curve_cardinalClosed__ = __webpack_require__(106);
/* unused harmony reexport curveCardinalClosed */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__curve_cardinalOpen__ = __webpack_require__(107);
/* unused harmony reexport curveCardinalOpen */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__curve_cardinal__ = __webpack_require__(31);
/* unused harmony reexport curveCardinal */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__curve_catmullRomClosed__ = __webpack_require__(239);
/* unused harmony reexport curveCatmullRomClosed */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__curve_catmullRomOpen__ = __webpack_require__(240);
/* unused harmony reexport curveCatmullRomOpen */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__curve_catmullRom__ = __webpack_require__(52);
/* unused harmony reexport curveCatmullRom */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__curve_linearClosed__ = __webpack_require__(241);
/* unused harmony reexport curveLinearClosed */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__curve_linear__ = __webpack_require__(28);
/* unused harmony reexport curveLinear */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__curve_monotone__ = __webpack_require__(242);
/* unused harmony reexport curveMonotoneX */
/* unused harmony reexport curveMonotoneY */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__curve_natural__ = __webpack_require__(243);
/* unused harmony reexport curveNatural */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__curve_step__ = __webpack_require__(244);
/* unused harmony reexport curveStep */
/* unused harmony reexport curveStepAfter */
/* unused harmony reexport curveStepBefore */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__stack__ = __webpack_require__(245);
/* unused harmony reexport stack */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__offset_expand__ = __webpack_require__(246);
/* unused harmony reexport stackOffsetExpand */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__offset_diverging__ = __webpack_require__(247);
/* unused harmony reexport stackOffsetDiverging */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__offset_none__ = __webpack_require__(19);
/* unused harmony reexport stackOffsetNone */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__offset_silhouette__ = __webpack_require__(248);
/* unused harmony reexport stackOffsetSilhouette */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__offset_wiggle__ = __webpack_require__(249);
/* unused harmony reexport stackOffsetWiggle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__order_ascending__ = __webpack_require__(53);
/* unused harmony reexport stackOrderAscending */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__order_descending__ = __webpack_require__(250);
/* unused harmony reexport stackOrderDescending */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__order_insideOut__ = __webpack_require__(251);
/* unused harmony reexport stackOrderInsideOut */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__order_none__ = __webpack_require__(20);
/* unused harmony reexport stackOrderNone */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__order_reverse__ = __webpack_require__(252);
/* unused harmony reexport stackOrderReverse */




 // Note: radialArea is deprecated!
 // Note: radialLine is deprecated!









































/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = rotateRadians;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compose__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(2);



function rotationIdentity(lambda, phi) {
  return [lambda > __WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */] ? lambda - __WEBPACK_IMPORTED_MODULE_1__math__["w" /* tau */] : lambda < -__WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */] ? lambda + __WEBPACK_IMPORTED_MODULE_1__math__["w" /* tau */] : lambda, phi];
}

rotationIdentity.invert = rotationIdentity;

function rotateRadians(deltaLambda, deltaPhi, deltaGamma) {
  return (deltaLambda %= __WEBPACK_IMPORTED_MODULE_1__math__["w" /* tau */]) ? (deltaPhi || deltaGamma ? Object(__WEBPACK_IMPORTED_MODULE_0__compose__["a" /* default */])(rotationLambda(deltaLambda), rotationPhiGamma(deltaPhi, deltaGamma))
    : rotationLambda(deltaLambda))
    : (deltaPhi || deltaGamma ? rotationPhiGamma(deltaPhi, deltaGamma)
    : rotationIdentity);
}

function forwardRotationLambda(deltaLambda) {
  return function(lambda, phi) {
    return lambda += deltaLambda, [lambda > __WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */] ? lambda - __WEBPACK_IMPORTED_MODULE_1__math__["w" /* tau */] : lambda < -__WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */] ? lambda + __WEBPACK_IMPORTED_MODULE_1__math__["w" /* tau */] : lambda, phi];
  };
}

function rotationLambda(deltaLambda) {
  var rotation = forwardRotationLambda(deltaLambda);
  rotation.invert = forwardRotationLambda(-deltaLambda);
  return rotation;
}

function rotationPhiGamma(deltaPhi, deltaGamma) {
  var cosDeltaPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* cos */])(deltaPhi),
      sinDeltaPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(deltaPhi),
      cosDeltaGamma = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* cos */])(deltaGamma),
      sinDeltaGamma = Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(deltaGamma);

  function rotation(lambda, phi) {
    var cosPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* cos */])(phi),
        x = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* cos */])(lambda) * cosPhi,
        y = Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(lambda) * cosPhi,
        z = Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(phi),
        k = z * cosDeltaPhi + x * sinDeltaPhi;
    return [
      Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* atan2 */])(y * cosDeltaGamma - k * sinDeltaGamma, x * cosDeltaPhi - z * sinDeltaPhi),
      Object(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* asin */])(k * cosDeltaGamma + y * sinDeltaGamma)
    ];
  }

  rotation.invert = function(lambda, phi) {
    var cosPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* cos */])(phi),
        x = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* cos */])(lambda) * cosPhi,
        y = Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(lambda) * cosPhi,
        z = Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(phi),
        k = z * cosDeltaGamma - y * sinDeltaGamma;
    return [
      Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* atan2 */])(y * cosDeltaGamma + z * sinDeltaGamma, x * cosDeltaPhi + k * sinDeltaPhi),
      Object(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* asin */])(k * cosDeltaPhi - x * sinDeltaPhi)
    ];
  };

  return rotation;
}

/* harmony default export */ __webpack_exports__["a"] = (function(rotate) {
  rotate = rotateRadians(rotate[0] * __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */], rotate[1] * __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */], rotate.length > 2 ? rotate[2] * __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */] : 0);

  function forward(coordinates) {
    coordinates = rotate(coordinates[0] * __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */], coordinates[1] * __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */]);
    return coordinates[0] *= __WEBPACK_IMPORTED_MODULE_1__math__["h" /* degrees */], coordinates[1] *= __WEBPACK_IMPORTED_MODULE_1__math__["h" /* degrees */], coordinates;
  }

  forward.invert = function(coordinates) {
    coordinates = rotate.invert(coordinates[0] * __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */], coordinates[1] * __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */]);
    return coordinates[0] *= __WEBPACK_IMPORTED_MODULE_1__math__["h" /* degrees */], coordinates[1] *= __WEBPACK_IMPORTED_MODULE_1__math__["h" /* degrees */], coordinates;
  };

  return forward;
});


/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = clipRectangle;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__buffer__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__line__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rejoin__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3_array__ = __webpack_require__(5);






var clipMax = 1e9, clipMin = -clipMax;

// TODO Use d3-polygon’s polygonContains here for the ring check?
// TODO Eliminate duplicate buffering in clipBuffer and polygon.push?

function clipRectangle(x0, y0, x1, y1) {

  function visible(x, y) {
    return x0 <= x && x <= x1 && y0 <= y && y <= y1;
  }

  function interpolate(from, to, direction, stream) {
    var a = 0, a1 = 0;
    if (from == null
        || (a = corner(from, direction)) !== (a1 = corner(to, direction))
        || comparePoint(from, to) < 0 ^ direction > 0) {
      do stream.point(a === 0 || a === 3 ? x0 : x1, a > 1 ? y1 : y0);
      while ((a = (a + direction + 4) % 4) !== a1);
    } else {
      stream.point(to[0], to[1]);
    }
  }

  function corner(p, direction) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* abs */])(p[0] - x0) < __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */] ? direction > 0 ? 0 : 3
        : Object(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* abs */])(p[0] - x1) < __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */] ? direction > 0 ? 2 : 1
        : Object(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* abs */])(p[1] - y0) < __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */] ? direction > 0 ? 1 : 0
        : direction > 0 ? 3 : 2; // abs(p[1] - y1) < epsilon
  }

  function compareIntersection(a, b) {
    return comparePoint(a.x, b.x);
  }

  function comparePoint(a, b) {
    var ca = corner(a, 1),
        cb = corner(b, 1);
    return ca !== cb ? ca - cb
        : ca === 0 ? b[1] - a[1]
        : ca === 1 ? a[0] - b[0]
        : ca === 2 ? a[1] - b[1]
        : b[0] - a[0];
  }

  return function(stream) {
    var activeStream = stream,
        bufferStream = Object(__WEBPACK_IMPORTED_MODULE_1__buffer__["a" /* default */])(),
        segments,
        polygon,
        ring,
        x__, y__, v__, // first point
        x_, y_, v_, // previous point
        first,
        clean;

    var clipStream = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: polygonStart,
      polygonEnd: polygonEnd
    };

    function point(x, y) {
      if (visible(x, y)) activeStream.point(x, y);
    }

    function polygonInside() {
      var winding = 0;

      for (var i = 0, n = polygon.length; i < n; ++i) {
        for (var ring = polygon[i], j = 1, m = ring.length, point = ring[0], a0, a1, b0 = point[0], b1 = point[1]; j < m; ++j) {
          a0 = b0, a1 = b1, point = ring[j], b0 = point[0], b1 = point[1];
          if (a1 <= y1) { if (b1 > y1 && (b0 - a0) * (y1 - a1) > (b1 - a1) * (x0 - a0)) ++winding; }
          else { if (b1 <= y1 && (b0 - a0) * (y1 - a1) < (b1 - a1) * (x0 - a0)) --winding; }
        }
      }

      return winding;
    }

    // Buffer geometry within a polygon and then clip it en masse.
    function polygonStart() {
      activeStream = bufferStream, segments = [], polygon = [], clean = true;
    }

    function polygonEnd() {
      var startInside = polygonInside(),
          cleanInside = clean && startInside,
          visible = (segments = Object(__WEBPACK_IMPORTED_MODULE_4_d3_array__["d" /* merge */])(segments)).length;
      if (cleanInside || visible) {
        stream.polygonStart();
        if (cleanInside) {
          stream.lineStart();
          interpolate(null, null, 1, stream);
          stream.lineEnd();
        }
        if (visible) {
          Object(__WEBPACK_IMPORTED_MODULE_3__rejoin__["a" /* default */])(segments, compareIntersection, startInside, interpolate, stream);
        }
        stream.polygonEnd();
      }
      activeStream = stream, segments = polygon = ring = null;
    }

    function lineStart() {
      clipStream.point = linePoint;
      if (polygon) polygon.push(ring = []);
      first = true;
      v_ = false;
      x_ = y_ = NaN;
    }

    // TODO rather than special-case polygons, simply handle them separately.
    // Ideally, coincident intersection points should be jittered to avoid
    // clipping issues.
    function lineEnd() {
      if (segments) {
        linePoint(x__, y__);
        if (v__ && v_) bufferStream.rejoin();
        segments.push(bufferStream.result());
      }
      clipStream.point = point;
      if (v_) activeStream.lineEnd();
    }

    function linePoint(x, y) {
      var v = visible(x, y);
      if (polygon) ring.push([x, y]);
      if (first) {
        x__ = x, y__ = y, v__ = v;
        first = false;
        if (v) {
          activeStream.lineStart();
          activeStream.point(x, y);
        }
      } else {
        if (v && v_) activeStream.point(x, y);
        else {
          var a = [x_ = Math.max(clipMin, Math.min(clipMax, x_)), y_ = Math.max(clipMin, Math.min(clipMax, y_))],
              b = [x = Math.max(clipMin, Math.min(clipMax, x)), y = Math.max(clipMin, Math.min(clipMax, y))];
          if (Object(__WEBPACK_IMPORTED_MODULE_2__line__["a" /* default */])(a, b, x0, y0, x1, y1)) {
            if (!v_) {
              activeStream.lineStart();
              activeStream.point(a[0], a[1]);
            }
            activeStream.point(b[0], b[1]);
            if (!v) activeStream.lineEnd();
            clean = false;
          } else if (v) {
            activeStream.lineStart();
            activeStream.point(x, y);
            clean = false;
          }
        }
      }
      x_ = x, y_ = y, v_ = v;
    }

    return clipStream;
  };
}


/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = transformer;
/* harmony default export */ __webpack_exports__["a"] = (function(methods) {
  return {
    stream: transformer(methods)
  };
});

function transformer(methods) {
  return function(stream) {
    var s = new TransformStream;
    for (var key in methods) s[key] = methods[key];
    s.stream = stream;
    return s;
  };
}

function TransformStream() {}

TransformStream.prototype = {
  constructor: TransformStream,
  point: function(x, y) { this.stream.point(x, y); },
  sphere: function() { this.stream.sphere(); },
  lineStart: function() { this.stream.lineStart(); },
  lineEnd: function() { this.stream.lineEnd(); },
  polygonStart: function() { this.stream.polygonStart(); },
  polygonEnd: function() { this.stream.polygonEnd(); }
};


/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__request__ = __webpack_require__(302);


/* harmony default export */ __webpack_exports__["a"] = (function(defaultMimeType, response) {
  return function(url, callback) {
    var r = Object(__WEBPACK_IMPORTED_MODULE_0__request__["a" /* default */])(url).mimeType(defaultMimeType).response(response);
    if (callback != null) {
      if (typeof callback !== "function") throw new Error("invalid callback: " + callback);
      return r.get(callback);
    }
    return r;
  };
});


/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = tweenValue;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__schedule__ = __webpack_require__(14);


function tweenRemove(id, name) {
  var tween0, tween1;
  return function() {
    var schedule = Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["h" /* set */])(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }

    schedule.tween = tween1;
  };
}

function tweenFunction(id, name, value) {
  var tween0, tween1;
  if (typeof value !== "function") throw new Error;
  return function() {
    var schedule = Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["h" /* set */])(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = {name: name, value: value}, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n) tween1.push(t);
    }

    schedule.tween = tween1;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, value) {
  var id = this._id;

  name += "";

  if (arguments.length < 2) {
    var tween = Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["f" /* get */])(this.node(), id).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }

  return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
});

function tweenValue(transition, name, value) {
  var id = transition._id;

  transition.each(function() {
    var schedule = Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["h" /* set */])(this, id);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });

  return function(node) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["f" /* get */])(node, id).value[name];
  };
}


/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* unused harmony export point */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ordinal__ = __webpack_require__(69);



function band() {
  var scale = Object(__WEBPACK_IMPORTED_MODULE_1__ordinal__["a" /* default */])().unknown(undefined),
      domain = scale.domain,
      ordinalRange = scale.range,
      range = [0, 1],
      step,
      bandwidth,
      round = false,
      paddingInner = 0,
      paddingOuter = 0,
      align = 0.5;

  delete scale.unknown;

  function rescale() {
    var n = domain().length,
        reverse = range[1] < range[0],
        start = range[reverse - 0],
        stop = range[1 - reverse];
    step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
    if (round) step = Math.floor(step);
    start += (stop - start - step * (n - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
    var values = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["f" /* range */])(n).map(function(i) { return start + step * i; });
    return ordinalRange(reverse ? values.reverse() : values);
  }

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.range = function(_) {
    return arguments.length ? (range = [+_[0], +_[1]], rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = [+_[0], +_[1]], round = true, rescale();
  };

  scale.bandwidth = function() {
    return bandwidth;
  };

  scale.step = function() {
    return step;
  };

  scale.round = function(_) {
    return arguments.length ? (round = !!_, rescale()) : round;
  };

  scale.padding = function(_) {
    return arguments.length ? (paddingInner = paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
  };

  scale.paddingInner = function(_) {
    return arguments.length ? (paddingInner = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
  };

  scale.paddingOuter = function(_) {
    return arguments.length ? (paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingOuter;
  };

  scale.align = function(_) {
    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
  };

  scale.copy = function() {
    return band()
        .domain(domain())
        .range(range)
        .round(round)
        .paddingInner(paddingInner)
        .paddingOuter(paddingOuter)
        .align(align);
  };

  return rescale();
}

function pointish(scale) {
  var copy = scale.copy;

  scale.padding = scale.paddingOuter;
  delete scale.paddingInner;
  delete scale.paddingOuter;

  scale.copy = function() {
    return pointish(copy());
  };

  return scale;
}

function point() {
  return pointish(band().paddingInner(1));
}


/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pairs__ = __webpack_require__(59);


/* unused harmony default export */ var _unused_webpack_default_export = (function(values0, values1, reduce) {
  var n0 = values0.length,
      n1 = values1.length,
      values = new Array(n0 * n1),
      i0,
      i1,
      i,
      value0;

  if (reduce == null) reduce = __WEBPACK_IMPORTED_MODULE_0__pairs__["a" /* pair */];

  for (i0 = i = 0; i0 < n0; ++i0) {
    for (value0 = values0[i0], i1 = 0; i1 < n1; ++i1, ++i) {
      values[i] = reduce(value0, values1[i1]);
    }
  }

  return values;
});


/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
});


/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bisect__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__extent__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__identity__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__range__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ticks__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__threshold_sturges__ = __webpack_require__(66);









/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  var value = __WEBPACK_IMPORTED_MODULE_4__identity__["a" /* default */],
      domain = __WEBPACK_IMPORTED_MODULE_3__extent__["a" /* default */],
      threshold = __WEBPACK_IMPORTED_MODULE_7__threshold_sturges__["a" /* default */];

  function histogram(data) {
    var i,
        n = data.length,
        x,
        values = new Array(n);

    for (i = 0; i < n; ++i) {
      values[i] = value(data[i], i, data);
    }

    var xz = domain(values),
        x0 = xz[0],
        x1 = xz[1],
        tz = threshold(values, x0, x1);

    // Convert number of thresholds into uniform thresholds.
    if (!Array.isArray(tz)) {
      tz = Object(__WEBPACK_IMPORTED_MODULE_6__ticks__["c" /* tickStep */])(x0, x1, tz);
      tz = Object(__WEBPACK_IMPORTED_MODULE_5__range__["a" /* default */])(Math.ceil(x0 / tz) * tz, x1, tz); // exclusive
    }

    // Remove any thresholds outside the domain.
    var m = tz.length;
    while (tz[0] <= x0) tz.shift(), --m;
    while (tz[m - 1] > x1) tz.pop(), --m;

    var bins = new Array(m + 1),
        bin;

    // Initialize bins.
    for (i = 0; i <= m; ++i) {
      bin = bins[i] = [];
      bin.x0 = i > 0 ? tz[i - 1] : x0;
      bin.x1 = i < m ? tz[i] : x1;
    }

    // Assign data to bins by value, ignoring any outside the domain.
    for (i = 0; i < n; ++i) {
      x = values[i];
      if (x0 <= x && x <= x1) {
        bins[Object(__WEBPACK_IMPORTED_MODULE_1__bisect__["a" /* default */])(tz, x, 0, m)].push(data[i]);
      }
    }

    return bins;
  }

  histogram.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(_), histogram) : value;
  };

  histogram.domain = function(_) {
    return arguments.length ? (domain = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])([_[0], _[1]]), histogram) : domain;
  };

  histogram.thresholds = function(_) {
    return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? Object(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__array__["b" /* slice */].call(_)) : Object(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(_), histogram) : threshold;
  };

  return histogram;
});


/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x;
});


/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ascending__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__number__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quantile__ = __webpack_require__(34);





/* unused harmony default export */ var _unused_webpack_default_export = (function(values, min, max) {
  values = __WEBPACK_IMPORTED_MODULE_0__array__["a" /* map */].call(values, __WEBPACK_IMPORTED_MODULE_2__number__["a" /* default */]).sort(__WEBPACK_IMPORTED_MODULE_1__ascending__["a" /* default */]);
  return Math.ceil((max - min) / (2 * (Object(__WEBPACK_IMPORTED_MODULE_3__quantile__["a" /* default */])(values, 0.75) - Object(__WEBPACK_IMPORTED_MODULE_3__quantile__["a" /* default */])(values, 0.25)) * Math.pow(values.length, -1 / 3)));
});


/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__deviation__ = __webpack_require__(60);


/* unused harmony default export */ var _unused_webpack_default_export = (function(values, min, max) {
  return Math.ceil((max - min) / (3.5 * Object(__WEBPACK_IMPORTED_MODULE_0__deviation__["a" /* default */])(values) * Math.pow(values.length, -1 / 3)));
});


/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      max;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null && value > max) {
            max = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null && value > max) {
            max = value;
          }
        }
      }
    }
  }

  return max;
});


/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(16);


/* unused harmony default export */ var _unused_webpack_default_export = (function(values, valueof) {
  var n = values.length,
      m = n,
      i = -1,
      value,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(values[i]))) sum += value;
      else --m;
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(valueof(values[i], i, values)))) sum += value;
      else --m;
    }
  }

  if (m) return sum / m;
});


/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__number__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quantile__ = __webpack_require__(34);




/* unused harmony default export */ var _unused_webpack_default_export = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      numbers = [];

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = Object(__WEBPACK_IMPORTED_MODULE_1__number__["a" /* default */])(values[i]))) {
        numbers.push(value);
      }
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = Object(__WEBPACK_IMPORTED_MODULE_1__number__["a" /* default */])(valueof(values[i], i, values)))) {
        numbers.push(value);
      }
    }
  }

  return Object(__WEBPACK_IMPORTED_MODULE_2__quantile__["a" /* default */])(numbers.sort(__WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */]), 0.5);
});


/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(arrays) {
  var n = arrays.length,
      m,
      i = -1,
      j = 0,
      merged,
      array;

  while (++i < n) j += arrays[i].length;
  merged = new Array(j);

  while (--n >= 0) {
    array = arrays[n];
    m = array.length;
    while (--m >= 0) {
      merged[--j] = array[m];
    }
  }

  return merged;
});


/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(array, indexes) {
  var i = indexes.length, permutes = new Array(i);
  while (i--) permutes[i] = array[indexes[i]];
  return permutes;
});


/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(11);


/* unused harmony default export */ var _unused_webpack_default_export = (function(values, compare) {
  if (!(n = values.length)) return;
  var n,
      i = 0,
      j = 0,
      xi,
      xj = values[j];

  if (compare == null) compare = __WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */];

  while (++i < n) {
    if (compare(xi = values[i], xj) < 0 || compare(xj, xj) !== 0) {
      xj = xi, j = i;
    }
  }

  if (compare(xj, xj) === 0) return j;
});


/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(array, i0, i1) {
  var m = (i1 == null ? array.length : i1) - (i0 = i0 == null ? 0 : +i0),
      t,
      i;

  while (m) {
    i = Math.random() * m-- | 0;
    t = array[m + i0];
    array[m + i0] = array[i + i0];
    array[i + i0] = t;
  }

  return array;
});


/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (value = +values[i]) sum += value; // Note: zero and null are equivalent.
    }
  }

  else {
    while (++i < n) {
      if (value = +valueof(values[i], i, values)) sum += value;
    }
  }

  return sum;
});


/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transpose__ = __webpack_require__(68);


/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__transpose__["a" /* default */])(arguments);
});


/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map__ = __webpack_require__(35);


/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  var keys = [],
      sortKeys = [],
      sortValues,
      rollup,
      nest;

  function apply(array, depth, createResult, setResult) {
    if (depth >= keys.length) {
      if (sortValues != null) array.sort(sortValues);
      return rollup != null ? rollup(array) : array;
    }

    var i = -1,
        n = array.length,
        key = keys[depth++],
        keyValue,
        value,
        valuesByKey = Object(__WEBPACK_IMPORTED_MODULE_0__map__["a" /* default */])(),
        values,
        result = createResult();

    while (++i < n) {
      if (values = valuesByKey.get(keyValue = key(value = array[i]) + "")) {
        values.push(value);
      } else {
        valuesByKey.set(keyValue, [value]);
      }
    }

    valuesByKey.each(function(values, key) {
      setResult(result, key, apply(values, depth, createResult, setResult));
    });

    return result;
  }

  function entries(map, depth) {
    if (++depth > keys.length) return map;
    var array, sortKey = sortKeys[depth - 1];
    if (rollup != null && depth >= keys.length) array = map.entries();
    else array = [], map.each(function(v, k) { array.push({key: k, values: entries(v, depth)}); });
    return sortKey != null ? array.sort(function(a, b) { return sortKey(a.key, b.key); }) : array;
  }

  return nest = {
    object: function(array) { return apply(array, 0, createObject, setObject); },
    map: function(array) { return apply(array, 0, createMap, setMap); },
    entries: function(array) { return entries(apply(array, 0, createMap, setMap), 0); },
    key: function(d) { keys.push(d); return nest; },
    sortKeys: function(order) { sortKeys[keys.length - 1] = order; return nest; },
    sortValues: function(order) { sortValues = order; return nest; },
    rollup: function(f) { rollup = f; return nest; }
  };
});

function createObject() {
  return {};
}

function setObject(object, key, value) {
  object[key] = value;
}

function createMap() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__map__["a" /* default */])();
}

function setMap(map, key, value) {
  map.set(key, value);
}


/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map__ = __webpack_require__(35);


function Set() {}

var proto = __WEBPACK_IMPORTED_MODULE_0__map__["a" /* default */].prototype;

Set.prototype = set.prototype = {
  constructor: Set,
  has: proto.has,
  add: function(value) {
    value += "";
    this[__WEBPACK_IMPORTED_MODULE_0__map__["b" /* prefix */] + value] = value;
    return this;
  },
  remove: proto.remove,
  clear: proto.clear,
  values: proto.keys,
  size: proto.size,
  empty: proto.empty,
  each: proto.each
};

function set(object, f) {
  var set = new Set;

  // Copy constructor.
  if (object instanceof Set) object.each(function(value) { set.add(value); });

  // Otherwise, assume it’s an array.
  else if (object) {
    var i = -1, n = object.length;
    if (f == null) while (++i < n) set.add(object[i]);
    else while (++i < n) set.add(f(object[i], i, object));
  }

  return set;
}

/* unused harmony default export */ var _unused_webpack_default_export = (set);


/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(map) {
  var keys = [];
  for (var key in map) keys.push(key);
  return keys;
});


/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(map) {
  var values = [];
  for (var key in map) values.push(map[key]);
  return values;
});


/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(map) {
  var entries = [];
  for (var key in map) entries.push({key: key, value: map[key]});
  return entries;
});


/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__linear__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__number__ = __webpack_require__(78);




function identity() {
  var domain = [0, 1];

  function scale(x) {
    return +x;
  }

  scale.invert = scale;

  scale.domain = scale.range = function(_) {
    return arguments.length ? (domain = __WEBPACK_IMPORTED_MODULE_0__array__["a" /* map */].call(_, __WEBPACK_IMPORTED_MODULE_2__number__["a" /* default */]), scale) : domain.slice();
  };

  scale.copy = function() {
    return identity().domain(domain);
  };

  return Object(__WEBPACK_IMPORTED_MODULE_1__linear__["b" /* linearish */])(scale);
}


/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export gray */
/* harmony export (immutable) */ __webpack_exports__["a"] = lab;
/* unused harmony export Lab */
/* unused harmony export lch */
/* harmony export (immutable) */ __webpack_exports__["b"] = hcl;
/* unused harmony export Hcl */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__define__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(70);




// https://beta.observablehq.com/@mbostock/lab-and-rgb
var K = 18,
    Xn = 0.96422,
    Yn = 1,
    Zn = 0.82521,
    t0 = 4 / 29,
    t1 = 6 / 29,
    t2 = 3 * t1 * t1,
    t3 = t1 * t1 * t1;

function labConvert(o) {
  if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
  if (o instanceof Hcl) {
    if (isNaN(o.h)) return new Lab(o.l, 0, 0, o.opacity);
    var h = o.h * __WEBPACK_IMPORTED_MODULE_2__math__["a" /* deg2rad */];
    return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
  }
  if (!(o instanceof __WEBPACK_IMPORTED_MODULE_1__color__["b" /* Rgb */])) o = Object(__WEBPACK_IMPORTED_MODULE_1__color__["h" /* rgbConvert */])(o);
  var r = rgb2lrgb(o.r),
      g = rgb2lrgb(o.g),
      b = rgb2lrgb(o.b),
      y = xyz2lab((0.2225045 * r + 0.7168786 * g + 0.0606169 * b) / Yn), x, z;
  if (r === g && g === b) x = z = y; else {
    x = xyz2lab((0.4360747 * r + 0.3850649 * g + 0.1430804 * b) / Xn);
    z = xyz2lab((0.0139322 * r + 0.0971045 * g + 0.7141733 * b) / Zn);
  }
  return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
}

function gray(l, opacity) {
  return new Lab(l, 0, 0, opacity == null ? 1 : opacity);
}

function lab(l, a, b, opacity) {
  return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
}

function Lab(l, a, b, opacity) {
  this.l = +l;
  this.a = +a;
  this.b = +b;
  this.opacity = +opacity;
}

Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Lab, lab, Object(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* Color */], {
  brighter: function(k) {
    return new Lab(this.l + K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  darker: function(k) {
    return new Lab(this.l - K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  rgb: function() {
    var y = (this.l + 16) / 116,
        x = isNaN(this.a) ? y : y + this.a / 500,
        z = isNaN(this.b) ? y : y - this.b / 200;
    x = Xn * lab2xyz(x);
    y = Yn * lab2xyz(y);
    z = Zn * lab2xyz(z);
    return new __WEBPACK_IMPORTED_MODULE_1__color__["b" /* Rgb */](
      lrgb2rgb( 3.1338561 * x - 1.6168667 * y - 0.4906146 * z),
      lrgb2rgb(-0.9787684 * x + 1.9161415 * y + 0.0334540 * z),
      lrgb2rgb( 0.0719453 * x - 0.2289914 * y + 1.4052427 * z),
      this.opacity
    );
  }
}));

function xyz2lab(t) {
  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
}

function lab2xyz(t) {
  return t > t1 ? t * t * t : t2 * (t - t0);
}

function lrgb2rgb(x) {
  return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
}

function rgb2lrgb(x) {
  return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}

function hclConvert(o) {
  if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
  if (!(o instanceof Lab)) o = labConvert(o);
  if (o.a === 0 && o.b === 0) return new Hcl(NaN, 0, o.l, o.opacity);
  var h = Math.atan2(o.b, o.a) * __WEBPACK_IMPORTED_MODULE_2__math__["b" /* rad2deg */];
  return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
}

function lch(l, c, h, opacity) {
  return arguments.length === 1 ? hclConvert(l) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function hcl(h, c, l, opacity) {
  return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function Hcl(h, c, l, opacity) {
  this.h = +h;
  this.c = +c;
  this.l = +l;
  this.opacity = +opacity;
}

Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Hcl, hcl, Object(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* Color */], {
  brighter: function(k) {
    return new Hcl(this.h, this.c, this.l + K * (k == null ? 1 : k), this.opacity);
  },
  darker: function(k) {
    return new Hcl(this.h, this.c, this.l - K * (k == null ? 1 : k), this.opacity);
  },
  rgb: function() {
    return labConvert(this).rgb();
  }
}));


/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = cubehelix;
/* unused harmony export Cubehelix */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__define__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(70);




var A = -0.14861,
    B = +1.78277,
    C = -0.29227,
    D = -0.90649,
    E = +1.97294,
    ED = E * D,
    EB = E * B,
    BC_DA = B * C - D * A;

function cubehelixConvert(o) {
  if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof __WEBPACK_IMPORTED_MODULE_1__color__["b" /* Rgb */])) o = Object(__WEBPACK_IMPORTED_MODULE_1__color__["h" /* rgbConvert */])(o);
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),
      bl = b - l,
      k = (E * (g - l) - C * bl) / D,
      s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)), // NaN if l=0 or l=1
      h = s ? Math.atan2(k, bl) * __WEBPACK_IMPORTED_MODULE_2__math__["b" /* rad2deg */] - 120 : NaN;
  return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
}

function cubehelix(h, s, l, opacity) {
  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
}

function Cubehelix(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Cubehelix, cubehelix, Object(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* Color */], {
  brighter: function(k) {
    k = k == null ? __WEBPACK_IMPORTED_MODULE_1__color__["c" /* brighter */] : Math.pow(__WEBPACK_IMPORTED_MODULE_1__color__["c" /* brighter */], k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? __WEBPACK_IMPORTED_MODULE_1__color__["d" /* darker */] : Math.pow(__WEBPACK_IMPORTED_MODULE_1__color__["d" /* darker */], k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = isNaN(this.h) ? 0 : (this.h + 120) * __WEBPACK_IMPORTED_MODULE_2__math__["a" /* deg2rad */],
        l = +this.l,
        a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
        cosh = Math.cos(h),
        sinh = Math.sin(h);
    return new __WEBPACK_IMPORTED_MODULE_1__color__["b" /* Rgb */](
      255 * (l + a * (A * cosh + B * sinh)),
      255 * (l + a * (C * cosh + D * sinh)),
      255 * (l + a * (E * cosh)),
      this.opacity
    );
  }
}));


/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(range) {
  var n = range.length;
  return function(t) {
    return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
  };
});


/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__color__ = __webpack_require__(13);


/* unused harmony default export */ var _unused_webpack_default_export = (function(a, b) {
  var i = Object(__WEBPACK_IMPORTED_MODULE_0__color__["c" /* hue */])(+a, +b);
  return function(t) {
    var x = i(t);
    return x - 360 * Math.floor(x / 360);
  };
});


/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  return a = +a, b -= a, function(t) {
    return Math.round(a + b * t);
  };
});


/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return interpolateTransformCss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return interpolateTransformSvg; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parse__ = __webpack_require__(146);



function interpolateTransform(parse, pxComma, pxParen, degParen) {

  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }

  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({i: i - 4, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(xa, xb)}, {i: i - 2, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(ya, yb)});
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }

  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
      q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(a, b)});
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }

  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(a, b)});
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }

  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({i: i - 4, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(xa, xb)}, {i: i - 2, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(ya, yb)});
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }

  return function(a, b) {
    var s = [], // string constants and placeholders
        q = []; // number interpolators
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null; // gc
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}

var interpolateTransformCss = interpolateTransform(__WEBPACK_IMPORTED_MODULE_1__parse__["a" /* parseCss */], "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(__WEBPACK_IMPORTED_MODULE_1__parse__["b" /* parseSvg */], ", ", ")", ")");


/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = parseCss;
/* harmony export (immutable) */ __webpack_exports__["b"] = parseSvg;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__decompose__ = __webpack_require__(147);


var cssNode,
    cssRoot,
    cssView,
    svgNode;

function parseCss(value) {
  if (value === "none") return __WEBPACK_IMPORTED_MODULE_0__decompose__["b" /* identity */];
  if (!cssNode) cssNode = document.createElement("DIV"), cssRoot = document.documentElement, cssView = document.defaultView;
  cssNode.style.transform = value;
  value = cssView.getComputedStyle(cssRoot.appendChild(cssNode), null).getPropertyValue("transform");
  cssRoot.removeChild(cssNode);
  value = value.slice(7, -1).split(",");
  return Object(__WEBPACK_IMPORTED_MODULE_0__decompose__["a" /* default */])(+value[0], +value[1], +value[2], +value[3], +value[4], +value[5]);
}

function parseSvg(value) {
  if (value == null) return __WEBPACK_IMPORTED_MODULE_0__decompose__["b" /* identity */];
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return __WEBPACK_IMPORTED_MODULE_0__decompose__["b" /* identity */];
  value = value.matrix;
  return Object(__WEBPACK_IMPORTED_MODULE_0__decompose__["a" /* default */])(value.a, value.b, value.c, value.d, value.e, value.f);
}


/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return identity; });
var degrees = 180 / Math.PI;

var identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};

/* harmony default export */ __webpack_exports__["a"] = (function(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX: scaleX,
    scaleY: scaleY
  };
});


/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var rho = Math.SQRT2,
    rho2 = 2,
    rho4 = 4,
    epsilon2 = 1e-12;

function cosh(x) {
  return ((x = Math.exp(x)) + 1 / x) / 2;
}

function sinh(x) {
  return ((x = Math.exp(x)) - 1 / x) / 2;
}

function tanh(x) {
  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}

// p0 = [ux0, uy0, w0]
// p1 = [ux1, uy1, w1]
/* unused harmony default export */ var _unused_webpack_default_export = (function(p0, p1) {
  var ux0 = p0[0], uy0 = p0[1], w0 = p0[2],
      ux1 = p1[0], uy1 = p1[1], w1 = p1[2],
      dx = ux1 - ux0,
      dy = uy1 - uy0,
      d2 = dx * dx + dy * dy,
      i,
      S;

  // Special case for u0 ≅ u1.
  if (d2 < epsilon2) {
    S = Math.log(w1 / w0) / rho;
    i = function(t) {
      return [
        ux0 + t * dx,
        uy0 + t * dy,
        w0 * Math.exp(rho * t * S)
      ];
    }
  }

  // General case.
  else {
    var d1 = Math.sqrt(d2),
        b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
        b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
        r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
        r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
    S = (r1 - r0) / rho;
    i = function(t) {
      var s = t * S,
          coshr0 = cosh(r0),
          u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
      return [
        ux0 + u * dx,
        uy0 + u * dy,
        w0 * coshr0 / cosh(rho * s + r0)
      ];
    }
  }

  i.duration = S * 1000;

  return i;
});


/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export hslLong */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(13);



function hsl(hue) {
  return function(start, end) {
    var h = hue((start = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["d" /* hsl */])(start)).h, (end = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["d" /* hsl */])(end)).h),
        s = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.s, end.s),
        l = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.l, end.l),
        opacity = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.s = s(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

/* unused harmony default export */ var _unused_webpack_default_export = (hsl(__WEBPACK_IMPORTED_MODULE_1__color__["c" /* hue */]));
var hslLong = hsl(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */]);


/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(13);



function lab(start, end) {
  var l = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])((start = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["e" /* lab */])(start)).l, (end = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["e" /* lab */])(end)).l),
      a = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.a, end.a),
      b = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.b, end.b),
      opacity = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.opacity, end.opacity);
  return function(t) {
    start.l = l(t);
    start.a = a(t);
    start.b = b(t);
    start.opacity = opacity(t);
    return start + "";
  };
}


/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export hclLong */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(13);



function hcl(hue) {
  return function(start, end) {
    var h = hue((start = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["c" /* hcl */])(start)).h, (end = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["c" /* hcl */])(end)).h),
        c = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.c, end.c),
        l = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.l, end.l),
        opacity = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.c = c(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

/* harmony default export */ __webpack_exports__["a"] = (hcl(__WEBPACK_IMPORTED_MODULE_1__color__["c" /* hue */]));
var hclLong = hcl(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */]);


/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cubehelixLong; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(13);



function cubehelix(hue) {
  return (function cubehelixGamma(y) {
    y = +y;

    function cubehelix(start, end) {
      var h = hue((start = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(start)).h, (end = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(end)).h),
          s = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.s, end.s),
          l = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.l, end.l),
          opacity = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.opacity, end.opacity);
      return function(t) {
        start.h = h(t);
        start.s = s(t);
        start.l = l(Math.pow(t, y));
        start.opacity = opacity(t);
        return start + "";
      };
    }

    cubehelix.gamma = cubehelixGamma;

    return cubehelix;
  })(1);
}

/* unused harmony default export */ var _unused_webpack_default_export = (cubehelix(__WEBPACK_IMPORTED_MODULE_1__color__["c" /* hue */]));
var cubehelixLong = cubehelix(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */]);


/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
function piecewise(interpolate, values) {
  var i = 0, n = values.length - 1, v = values[0], I = new Array(n < 0 ? 0 : n);
  while (i < n) I[i] = interpolate(v, v = values[++i]);
  return function(t) {
    var i = Math.max(0, Math.min(n - 1, Math.floor(t *= n)));
    return I[i](t - i);
  };
}


/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(interpolator, n) {
  var samples = new Array(n);
  for (var i = 0; i < n; ++i) samples[i] = interpolator(i / (n - 1));
  return samples;
});


/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_format__ = __webpack_require__(79);



/* harmony default export */ __webpack_exports__["a"] = (function(domain, count, specifier) {
  var start = domain[0],
      stop = domain[domain.length - 1],
      step = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["h" /* tickStep */])(start, stop, count == null ? 10 : count),
      precision;
  specifier = Object(__WEBPACK_IMPORTED_MODULE_1_d3_format__["c" /* formatSpecifier */])(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = Object(__WEBPACK_IMPORTED_MODULE_1_d3_format__["e" /* precisionPrefix */])(step, value))) specifier.precision = precision;
      return Object(__WEBPACK_IMPORTED_MODULE_1_d3_format__["b" /* formatPrefix */])(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = Object(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* precisionRound */])(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = Object(__WEBPACK_IMPORTED_MODULE_1_d3_format__["d" /* precisionFixed */])(step))) specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return Object(__WEBPACK_IMPORTED_MODULE_1_d3_format__["a" /* format */])(specifier);
});


/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return formatPrefix; });
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__locale__ = __webpack_require__(80);


var locale;
var format;
var formatPrefix;

defaultLocale({
  decimal: ".",
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});

function defaultLocale(definition) {
  locale = Object(__WEBPACK_IMPORTED_MODULE_0__locale__["a" /* default */])(definition);
  format = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}


/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(grouping, thousands) {
  return function(value, width) {
    var i = value.length,
        t = [],
        j = 0,
        g = grouping[0],
        length = 0;

    while (i > 0 && g > 0) {
      if (length + g + 1 > width) g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width) break;
      g = grouping[j = (j + 1) % grouping.length];
    }

    return t.reverse().join(thousands);
  };
});


/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i) {
      return numerals[+i];
    });
  };
});


/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
/* harmony default export */ __webpack_exports__["a"] = (function(s) {
  out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
    switch (s[i]) {
      case ".": i0 = i1 = i; break;
      case "0": if (i0 === 0) i0 = i; i1 = i; break;
      default: if (i0 > 0) { if (!+s[i]) break out; i0 = 0; } break;
    }
  }
  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
});


/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formatPrefixAuto__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__formatRounded__ = __webpack_require__(161);



/* harmony default export */ __webpack_exports__["a"] = ({
  "%": function(x, p) { return (x * 100).toFixed(p); },
  "b": function(x) { return Math.round(x).toString(2); },
  "c": function(x) { return x + ""; },
  "d": function(x) { return Math.round(x).toString(10); },
  "e": function(x, p) { return x.toExponential(p); },
  "f": function(x, p) { return x.toFixed(p); },
  "g": function(x, p) { return x.toPrecision(p); },
  "o": function(x) { return Math.round(x).toString(8); },
  "p": function(x, p) { return Object(__WEBPACK_IMPORTED_MODULE_1__formatRounded__["a" /* default */])(x * 100, p); },
  "r": __WEBPACK_IMPORTED_MODULE_1__formatRounded__["a" /* default */],
  "s": __WEBPACK_IMPORTED_MODULE_0__formatPrefixAuto__["a" /* default */],
  "X": function(x) { return Math.round(x).toString(16).toUpperCase(); },
  "x": function(x) { return Math.round(x).toString(16); }
});


/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formatDecimal__ = __webpack_require__(41);


/* harmony default export */ __webpack_exports__["a"] = (function(x, p) {
  var d = Object(__WEBPACK_IMPORTED_MODULE_0__formatDecimal__["a" /* default */])(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1];
  return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient
      : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1)
      : coefficient + new Array(exponent - coefficient.length + 2).join("0");
});


/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x;
});


/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exponent__ = __webpack_require__(25);


/* harmony default export */ __webpack_exports__["a"] = (function(step) {
  return Math.max(0, -Object(__WEBPACK_IMPORTED_MODULE_0__exponent__["a" /* default */])(Math.abs(step)));
});


/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exponent__ = __webpack_require__(25);


/* harmony default export */ __webpack_exports__["a"] = (function(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Object(__WEBPACK_IMPORTED_MODULE_0__exponent__["a" /* default */])(value) / 3))) * 3 - Object(__WEBPACK_IMPORTED_MODULE_0__exponent__["a" /* default */])(Math.abs(step)));
});


/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exponent__ = __webpack_require__(25);


/* harmony default export */ __webpack_exports__["a"] = (function(step, max) {
  step = Math.abs(step), max = Math.abs(max) - step;
  return Math.max(0, Object(__WEBPACK_IMPORTED_MODULE_0__exponent__["a" /* default */])(max) - Object(__WEBPACK_IMPORTED_MODULE_0__exponent__["a" /* default */])(step)) + 1;
});


/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_format__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nice__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__continuous__ = __webpack_require__(24);






function deinterpolate(a, b) {
  return (b = Math.log(b / a))
      ? function(x) { return Math.log(x / a) / b; }
      : Object(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(b);
}

function reinterpolate(a, b) {
  return a < 0
      ? function(t) { return -Math.pow(-b, t) * Math.pow(-a, 1 - t); }
      : function(t) { return Math.pow(b, t) * Math.pow(a, 1 - t); };
}

function pow10(x) {
  return isFinite(x) ? +("1e" + x) : x < 0 ? 0 : x;
}

function powp(base) {
  return base === 10 ? pow10
      : base === Math.E ? Math.exp
      : function(x) { return Math.pow(base, x); };
}

function logp(base) {
  return base === Math.E ? Math.log
      : base === 10 && Math.log10
      || base === 2 && Math.log2
      || (base = Math.log(base), function(x) { return Math.log(x) / base; });
}

function reflect(f) {
  return function(x) {
    return -f(-x);
  };
}

function log() {
  var scale = Object(__WEBPACK_IMPORTED_MODULE_4__continuous__["b" /* default */])(deinterpolate, reinterpolate).domain([1, 10]),
      domain = scale.domain,
      base = 10,
      logs = logp(10),
      pows = powp(10);

  function rescale() {
    logs = logp(base), pows = powp(base);
    if (domain()[0] < 0) logs = reflect(logs), pows = reflect(pows);
    return scale;
  }

  scale.base = function(_) {
    return arguments.length ? (base = +_, rescale()) : base;
  };

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.ticks = function(count) {
    var d = domain(),
        u = d[0],
        v = d[d.length - 1],
        r;

    if (r = v < u) i = u, u = v, v = i;

    var i = logs(u),
        j = logs(v),
        p,
        k,
        t,
        n = count == null ? 10 : +count,
        z = [];

    if (!(base % 1) && j - i < n) {
      i = Math.round(i) - 1, j = Math.round(j) + 1;
      if (u > 0) for (; i < j; ++i) {
        for (k = 1, p = pows(i); k < base; ++k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      } else for (; i < j; ++i) {
        for (k = base - 1, p = pows(i); k >= 1; --k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      }
    } else {
      z = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["i" /* ticks */])(i, j, Math.min(j - i, n)).map(pows);
    }

    return r ? z.reverse() : z;
  };

  scale.tickFormat = function(count, specifier) {
    if (specifier == null) specifier = base === 10 ? ".0e" : ",";
    if (typeof specifier !== "function") specifier = Object(__WEBPACK_IMPORTED_MODULE_1_d3_format__["a" /* format */])(specifier);
    if (count === Infinity) return specifier;
    if (count == null) count = 10;
    var k = Math.max(1, base * count / scale.ticks().length); // TODO fast estimate?
    return function(d) {
      var i = d / pows(Math.round(logs(d)));
      if (i * base < base - 0.5) i *= base;
      return i <= k ? specifier(d) : "";
    };
  };

  scale.nice = function() {
    return domain(Object(__WEBPACK_IMPORTED_MODULE_3__nice__["a" /* default */])(domain(), {
      floor: function(x) { return pows(Math.floor(logs(x))); },
      ceil: function(x) { return pows(Math.ceil(logs(x))); }
    }));
  };

  scale.copy = function() {
    return Object(__WEBPACK_IMPORTED_MODULE_4__continuous__["a" /* copy */])(scale, log().base(base));
  };

  return scale;
}


/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = pow;
/* unused harmony export sqrt */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__linear__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__continuous__ = __webpack_require__(24);




function raise(x, exponent) {
  return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
}

function pow() {
  var exponent = 1,
      scale = Object(__WEBPACK_IMPORTED_MODULE_2__continuous__["b" /* default */])(deinterpolate, reinterpolate),
      domain = scale.domain;

  function deinterpolate(a, b) {
    return (b = raise(b, exponent) - (a = raise(a, exponent)))
        ? function(x) { return (raise(x, exponent) - a) / b; }
        : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(b);
  }

  function reinterpolate(a, b) {
    b = raise(b, exponent) - (a = raise(a, exponent));
    return function(t) { return raise(a + b * t, 1 / exponent); };
  }

  scale.exponent = function(_) {
    return arguments.length ? (exponent = +_, domain(domain())) : exponent;
  };

  scale.copy = function() {
    return Object(__WEBPACK_IMPORTED_MODULE_2__continuous__["a" /* copy */])(scale, pow().exponent(exponent));
  };

  return Object(__WEBPACK_IMPORTED_MODULE_1__linear__["b" /* linearish */])(scale);
}

function sqrt() {
  return pow().exponent(0.5);
}


/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__(9);



function quantile() {
  var domain = [],
      range = [],
      thresholds = [];

  function rescale() {
    var i = 0, n = Math.max(1, range.length);
    thresholds = new Array(n - 1);
    while (++i < n) thresholds[i - 1] = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["e" /* quantile */])(domain, i / n);
    return scale;
  }

  function scale(x) {
    if (!isNaN(x = +x)) return range[Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["b" /* bisect */])(thresholds, x)];
  }

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN] : [
      i > 0 ? thresholds[i - 1] : domain[0],
      i < thresholds.length ? thresholds[i] : domain[domain.length - 1]
    ];
  };

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [];
    for (var i = 0, n = _.length, d; i < n; ++i) if (d = _[i], d != null && !isNaN(d = +d)) domain.push(d);
    domain.sort(__WEBPACK_IMPORTED_MODULE_0_d3_array__["a" /* ascending */]);
    return rescale();
  };

  scale.range = function(_) {
    return arguments.length ? (range = __WEBPACK_IMPORTED_MODULE_1__array__["b" /* slice */].call(_), rescale()) : range.slice();
  };

  scale.quantiles = function() {
    return thresholds.slice();
  };

  scale.copy = function() {
    return quantile()
        .domain(domain)
        .range(range);
  };

  return scale;
}


/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__linear__ = __webpack_require__(12);




function quantize() {
  var x0 = 0,
      x1 = 1,
      n = 1,
      domain = [0.5],
      range = [0, 1];

  function scale(x) {
    if (x <= x) return range[Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["b" /* bisect */])(domain, x, 0, n)];
  }

  function rescale() {
    var i = -1;
    domain = new Array(n);
    while (++i < n) domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
    return scale;
  }

  scale.domain = function(_) {
    return arguments.length ? (x0 = +_[0], x1 = +_[1], rescale()) : [x0, x1];
  };

  scale.range = function(_) {
    return arguments.length ? (n = (range = __WEBPACK_IMPORTED_MODULE_1__array__["b" /* slice */].call(_)).length - 1, rescale()) : range.slice();
  };

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN]
        : i < 1 ? [x0, domain[0]]
        : i >= n ? [domain[n - 1], x1]
        : [domain[i - 1], domain[i]];
  };

  scale.copy = function() {
    return quantize()
        .domain([x0, x1])
        .range(range);
  };

  return Object(__WEBPACK_IMPORTED_MODULE_2__linear__["b" /* linearish */])(scale);
}


/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__(9);



function threshold() {
  var domain = [0.5],
      range = [0, 1],
      n = 1;

  function scale(x) {
    if (x <= x) return range[Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["b" /* bisect */])(domain, x, 0, n)];
  }

  scale.domain = function(_) {
    return arguments.length ? (domain = __WEBPACK_IMPORTED_MODULE_1__array__["b" /* slice */].call(_), n = Math.min(domain.length, range.length - 1), scale) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = __WEBPACK_IMPORTED_MODULE_1__array__["b" /* slice */].call(_), n = Math.min(domain.length, range.length - 1), scale) : range.slice();
  };

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return [domain[i - 1], domain[i]];
  };

  scale.copy = function() {
    return threshold()
        .domain(domain)
        .range(range);
  };

  return scale;
}


/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export milliseconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(3);


var millisecond = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function() {
  // noop
}, function(date, step) {
  date.setTime(+date + step);
}, function(start, end) {
  return end - start;
});

// An optimized implementation for this simple case.
millisecond.every = function(k) {
  k = Math.floor(k);
  if (!isFinite(k) || !(k > 0)) return null;
  if (!(k > 1)) return millisecond;
  return Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
    date.setTime(Math.floor(date / k) * k);
  }, function(date, step) {
    date.setTime(+date + step * k);
  }, function(start, end) {
    return (end - start) / k;
  });
};

/* harmony default export */ __webpack_exports__["a"] = (millisecond);
var milliseconds = millisecond.range;


/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export seconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(7);



var second = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setTime(Math.floor(date / __WEBPACK_IMPORTED_MODULE_1__duration__["d" /* durationSecond */]) * __WEBPACK_IMPORTED_MODULE_1__duration__["d" /* durationSecond */]);
}, function(date, step) {
  date.setTime(+date + step * __WEBPACK_IMPORTED_MODULE_1__duration__["d" /* durationSecond */]);
}, function(start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["d" /* durationSecond */];
}, function(date) {
  return date.getUTCSeconds();
});

/* harmony default export */ __webpack_exports__["a"] = (second);
var seconds = second.range;


/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export minutes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(7);



var minute = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setTime(Math.floor(date / __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationMinute */]) * __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationMinute */]);
}, function(date, step) {
  date.setTime(+date + step * __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationMinute */]);
}, function(start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationMinute */];
}, function(date) {
  return date.getMinutes();
});

/* harmony default export */ __webpack_exports__["a"] = (minute);
var minutes = minute.range;


/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export hours */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(7);



var hour = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  var offset = date.getTimezoneOffset() * __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationMinute */] % __WEBPACK_IMPORTED_MODULE_1__duration__["b" /* durationHour */];
  if (offset < 0) offset += __WEBPACK_IMPORTED_MODULE_1__duration__["b" /* durationHour */];
  date.setTime(Math.floor((+date - offset) / __WEBPACK_IMPORTED_MODULE_1__duration__["b" /* durationHour */]) * __WEBPACK_IMPORTED_MODULE_1__duration__["b" /* durationHour */] + offset);
}, function(date, step) {
  date.setTime(+date + step * __WEBPACK_IMPORTED_MODULE_1__duration__["b" /* durationHour */]);
}, function(start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["b" /* durationHour */];
}, function(date) {
  return date.getHours();
});

/* harmony default export */ __webpack_exports__["a"] = (hour);
var hours = hour.range;


/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export days */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(7);



var day = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setDate(date.getDate() + step);
}, function(start, end) {
  return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationMinute */]) / __WEBPACK_IMPORTED_MODULE_1__duration__["a" /* durationDay */];
}, function(date) {
  return date.getDate() - 1;
});

/* harmony default export */ __webpack_exports__["a"] = (day);
var days = day.range;


/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return sunday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return monday; });
/* unused harmony export tuesday */
/* unused harmony export wednesday */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return thursday; });
/* unused harmony export friday */
/* unused harmony export saturday */
/* unused harmony export sundays */
/* unused harmony export mondays */
/* unused harmony export tuesdays */
/* unused harmony export wednesdays */
/* unused harmony export thursdays */
/* unused harmony export fridays */
/* unused harmony export saturdays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(7);



function weekday(i) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
    date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setDate(date.getDate() + step * 7);
  }, function(start, end) {
    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationMinute */]) / __WEBPACK_IMPORTED_MODULE_1__duration__["e" /* durationWeek */];
  });
}

var sunday = weekday(0);
var monday = weekday(1);
var tuesday = weekday(2);
var wednesday = weekday(3);
var thursday = weekday(4);
var friday = weekday(5);
var saturday = weekday(6);

var sundays = sunday.range;
var mondays = monday.range;
var tuesdays = tuesday.range;
var wednesdays = wednesday.range;
var thursdays = thursday.range;
var fridays = friday.range;
var saturdays = saturday.range;


/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export months */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(3);


var month = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setMonth(date.getMonth() + step);
}, function(start, end) {
  return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
}, function(date) {
  return date.getMonth();
});

/* harmony default export */ __webpack_exports__["a"] = (month);
var months = month.range;


/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export years */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(3);


var year = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setMonth(0, 1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setFullYear(date.getFullYear() + step);
}, function(start, end) {
  return end.getFullYear() - start.getFullYear();
}, function(date) {
  return date.getFullYear();
});

// An optimized implementation for this simple case.
year.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
    date.setFullYear(Math.floor(date.getFullYear() / k) * k);
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setFullYear(date.getFullYear() + step * k);
  });
};

/* harmony default export */ __webpack_exports__["a"] = (year);
var years = year.range;


/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export utcMinutes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(7);



var utcMinute = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setUTCSeconds(0, 0);
}, function(date, step) {
  date.setTime(+date + step * __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationMinute */]);
}, function(start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationMinute */];
}, function(date) {
  return date.getUTCMinutes();
});

/* harmony default export */ __webpack_exports__["a"] = (utcMinute);
var utcMinutes = utcMinute.range;


/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export utcHours */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(7);



var utcHour = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setUTCMinutes(0, 0, 0);
}, function(date, step) {
  date.setTime(+date + step * __WEBPACK_IMPORTED_MODULE_1__duration__["b" /* durationHour */]);
}, function(start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["b" /* durationHour */];
}, function(date) {
  return date.getUTCHours();
});

/* harmony default export */ __webpack_exports__["a"] = (utcHour);
var utcHours = utcHour.range;


/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export utcDays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(7);



var utcDay = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCDate(date.getUTCDate() + step);
}, function(start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["a" /* durationDay */];
}, function(date) {
  return date.getUTCDate() - 1;
});

/* harmony default export */ __webpack_exports__["a"] = (utcDay);
var utcDays = utcDay.range;


/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return utcSunday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return utcMonday; });
/* unused harmony export utcTuesday */
/* unused harmony export utcWednesday */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return utcThursday; });
/* unused harmony export utcFriday */
/* unused harmony export utcSaturday */
/* unused harmony export utcSundays */
/* unused harmony export utcMondays */
/* unused harmony export utcTuesdays */
/* unused harmony export utcWednesdays */
/* unused harmony export utcThursdays */
/* unused harmony export utcFridays */
/* unused harmony export utcSaturdays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(7);



function utcWeekday(i) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
    date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCDate(date.getUTCDate() + step * 7);
  }, function(start, end) {
    return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["e" /* durationWeek */];
  });
}

var utcSunday = utcWeekday(0);
var utcMonday = utcWeekday(1);
var utcTuesday = utcWeekday(2);
var utcWednesday = utcWeekday(3);
var utcThursday = utcWeekday(4);
var utcFriday = utcWeekday(5);
var utcSaturday = utcWeekday(6);

var utcSundays = utcSunday.range;
var utcMondays = utcMonday.range;
var utcTuesdays = utcTuesday.range;
var utcWednesdays = utcWednesday.range;
var utcThursdays = utcThursday.range;
var utcFridays = utcFriday.range;
var utcSaturdays = utcSaturday.range;


/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export utcMonths */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(3);


var utcMonth = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setUTCDate(1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCMonth(date.getUTCMonth() + step);
}, function(start, end) {
  return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
}, function(date) {
  return date.getUTCMonth();
});

/* harmony default export */ __webpack_exports__["a"] = (utcMonth);
var utcMonths = utcMonth.range;


/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export utcYears */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(3);


var utcYear = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCFullYear(date.getUTCFullYear() + step);
}, function(start, end) {
  return end.getUTCFullYear() - start.getUTCFullYear();
}, function(date) {
  return date.getUTCFullYear();
});

// An optimized implementation for this simple case.
utcYear.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
    date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCFullYear(date.getUTCFullYear() + step * k);
  });
};

/* harmony default export */ __webpack_exports__["a"] = (utcYear);
var utcYears = utcYear.range;


/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isoFormat__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__defaultLocale__ = __webpack_require__(43);



function parseIsoNative(string) {
  var date = new Date(string);
  return isNaN(date) ? null : date;
}

var parseIso = +new Date("2000-01-01T00:00:00.000Z")
    ? parseIsoNative
    : Object(__WEBPACK_IMPORTED_MODULE_1__defaultLocale__["c" /* utcParse */])(__WEBPACK_IMPORTED_MODULE_0__isoFormat__["a" /* isoSpecifier */]);

/* unused harmony default export */ var _unused_webpack_default_export = (parseIso);


/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__time__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_time_format__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_time__ = __webpack_require__(42);




/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__time__["a" /* calendar */])(__WEBPACK_IMPORTED_MODULE_2_d3_time__["v" /* utcYear */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["q" /* utcMonth */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["u" /* utcWeek */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["l" /* utcDay */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["m" /* utcHour */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["o" /* utcMinute */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["r" /* utcSecond */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["n" /* utcMillisecond */], __WEBPACK_IMPORTED_MODULE_1_d3_time_format__["b" /* utcFormat */]).domain([Date.UTC(2000, 0, 1), Date.UTC(2000, 0, 2)]);
});


/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__linear__ = __webpack_require__(12);


function sequential(interpolator) {
  var x0 = 0,
      x1 = 1,
      k10 = 1,
      clamp = false;

  function scale(x) {
    var t = (x - x0) * k10;
    return interpolator(clamp ? Math.max(0, Math.min(1, t)) : t);
  }

  scale.domain = function(_) {
    return arguments.length ? (x0 = +_[0], x1 = +_[1], k10 = x0 === x1 ? 0 : 1 / (x1 - x0), scale) : [x0, x1];
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  scale.copy = function() {
    return sequential(interpolator).domain([x0, x1]).clamp(clamp);
  };

  return Object(__WEBPACK_IMPORTED_MODULE_0__linear__["b" /* linearish */])(scale);
}


/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__linear__ = __webpack_require__(12);


function diverging(interpolator) {
  var x0 = 0,
      x1 = 0.5,
      x2 = 1,
      k10 = 1,
      k21 = 1,
      clamp = false;

  function scale(x) {
    var t = 0.5 + ((x = +x) - x1) * (x < x1 ? k10 : k21);
    return interpolator(clamp ? Math.max(0, Math.min(1, t)) : t);
  }

  scale.domain = function(_) {
    return arguments.length ? (x0 = +_[0], x1 = +_[1], x2 = +_[2], k10 = x0 === x1 ? 0 : 0.5 / (x1 - x0), k21 = x1 === x2 ? 0 : 0.5 / (x2 - x1), scale) : [x0, x1, x2];
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  scale.copy = function() {
    return diverging(interpolator).domain([x0, x1, x2]).clamp(clamp);
  };

  return Object(__WEBPACK_IMPORTED_MODULE_0__linear__["b" /* linearish */])(scale);
}


/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__creator__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__select__ = __webpack_require__(88);



/* unused harmony default export */ var _unused_webpack_default_export = (function(name) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__select__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_0__creator__["a" /* default */])(name).call(document.documentElement));
});


/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selector__ = __webpack_require__(46);



/* harmony default export */ __webpack_exports__["a"] = (function(select) {
  if (typeof select !== "function") select = Object(__WEBPACK_IMPORTED_MODULE_1__selector__["a" /* default */])(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["a" /* Selection */](subgroups, this._parents);
});


/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selectorAll__ = __webpack_require__(89);



/* harmony default export */ __webpack_exports__["a"] = (function(select) {
  if (typeof select !== "function") select = Object(__WEBPACK_IMPORTED_MODULE_1__selectorAll__["a" /* default */])(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["a" /* Selection */](subgroups, parents);
});


/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__matcher__ = __webpack_require__(90);



/* harmony default export */ __webpack_exports__["a"] = (function(match) {
  if (typeof match !== "function") match = Object(__WEBPACK_IMPORTED_MODULE_1__matcher__["a" /* default */])(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["a" /* Selection */](subgroups, this._parents);
});


/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enter__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant__ = __webpack_require__(194);




var keyPrefix = "$"; // Protect against keys like “__proto__”.

function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0,
      node,
      groupLength = group.length,
      dataLength = data.length;

  // Put any non-null nodes that fit into update.
  // Put any null nodes into enter.
  // Put any remaining data into enter.
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new __WEBPACK_IMPORTED_MODULE_1__enter__["a" /* EnterNode */](parent, data[i]);
    }
  }

  // Put any non-null nodes that don’t fit into exit.
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}

function bindKey(parent, group, enter, update, exit, data, key) {
  var i,
      node,
      nodeByKeyValue = {},
      groupLength = group.length,
      dataLength = data.length,
      keyValues = new Array(groupLength),
      keyValue;

  // Compute the key for each node.
  // If multiple nodes have the same key, the duplicates are added to exit.
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = keyPrefix + key.call(node, node.__data__, i, group);
      if (keyValue in nodeByKeyValue) {
        exit[i] = node;
      } else {
        nodeByKeyValue[keyValue] = node;
      }
    }
  }

  // Compute the key for each datum.
  // If there a node associated with this key, join and add it to update.
  // If there is not (or the key is a duplicate), add it to enter.
  for (i = 0; i < dataLength; ++i) {
    keyValue = keyPrefix + key.call(parent, data[i], i, data);
    if (node = nodeByKeyValue[keyValue]) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue[keyValue] = null;
    } else {
      enter[i] = new __WEBPACK_IMPORTED_MODULE_1__enter__["a" /* EnterNode */](parent, data[i]);
    }
  }

  // Add any remaining nodes that were not bound to data to exit.
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && (nodeByKeyValue[keyValues[i]] === node)) {
      exit[i] = node;
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (function(value, key) {
  if (!value) {
    data = new Array(this.size()), j = -1;
    this.each(function(d) { data[++j] = d; });
    return data;
  }

  var bind = key ? bindKey : bindIndex,
      parents = this._parents,
      groups = this._groups;

  if (typeof value !== "function") value = Object(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(value);

  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j],
        group = groups[j],
        groupLength = group.length,
        data = value.call(parent, parent && parent.__data__, j, parents),
        dataLength = data.length,
        enterGroup = enter[j] = new Array(dataLength),
        updateGroup = update[j] = new Array(dataLength),
        exitGroup = exit[j] = new Array(groupLength);

    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

    // Now connect the enter nodes to their following update node, such that
    // appendChild can insert the materialized enter node before this node,
    // rather than at the end of the parent node.
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength);
        previous._next = next || null;
      }
    }
  }

  update = new __WEBPACK_IMPORTED_MODULE_0__index__["a" /* Selection */](update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
});


/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sparse__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(4);



/* harmony default export */ __webpack_exports__["a"] = (function() {
  return new __WEBPACK_IMPORTED_MODULE_1__index__["a" /* Selection */](this._exit || this._groups.map(__WEBPACK_IMPORTED_MODULE_0__sparse__["a" /* default */]), this._parents);
});


/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(4);


/* harmony default export */ __webpack_exports__["a"] = (function(selection) {

  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["a" /* Selection */](merges, this._parents);
});


/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {

  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
      if (node = group[i]) {
        if (next && next !== node.nextSibling) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }

  return this;
});


/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(4);


/* harmony default export */ __webpack_exports__["a"] = (function(compare) {
  if (!compare) compare = ascending;

  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }

  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["a" /* Selection */](sortgroups, this._parents).order();
});

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}


/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
});


/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {
  var nodes = new Array(this.size()), i = -1;
  this.each(function() { nodes[++i] = this; });
  return nodes;
});


/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }

  return null;
});


/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {
  var size = 0;
  this.each(function() { ++size; });
  return size;
});


/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {
  return !this.node();
});


/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(callback) {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }

  return this;
});


/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__namespace__ = __webpack_require__(44);


function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}

function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}

function attrFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);
    else this.setAttribute(name, v);
  };
}

function attrFunctionNS(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
    else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, value) {
  var fullname = Object(__WEBPACK_IMPORTED_MODULE_0__namespace__["a" /* default */])(name);

  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local
        ? node.getAttributeNS(fullname.space, fullname.local)
        : node.getAttribute(fullname);
  }

  return this.each((value == null
      ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)
      : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));
});


/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}

function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}

function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];
    else this[name] = v;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, value) {
  return arguments.length > 1
      ? this.each((value == null
          ? propertyRemove : typeof value === "function"
          ? propertyFunction
          : propertyConstant)(name, value))
      : this.node()[name];
});


/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function classArray(string) {
  return string.trim().split(/^|\s+/);
}

function classList(node) {
  return node.classList || new ClassList(node);
}

function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}

ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};

function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.add(names[i]);
}

function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.remove(names[i]);
}

function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}

function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}

function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, value) {
  var names = classArray(name + "");

  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n) if (!list.contains(names[i])) return false;
    return true;
  }

  return this.each((typeof value === "function"
      ? classedFunction : value
      ? classedTrue
      : classedFalse)(names, value));
});


/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function textRemove() {
  this.textContent = "";
}

function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(value) {
  return arguments.length
      ? this.each(value == null
          ? textRemove : (typeof value === "function"
          ? textFunction
          : textConstant)(value))
      : this.node().textContent;
});


/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function htmlRemove() {
  this.innerHTML = "";
}

function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}

function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(value) {
  return arguments.length
      ? this.each(value == null
          ? htmlRemove : (typeof value === "function"
          ? htmlFunction
          : htmlConstant)(value))
      : this.node().innerHTML;
});


/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return this.each(raise);
});


/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return this.each(lower);
});


/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__creator__ = __webpack_require__(26);


/* harmony default export */ __webpack_exports__["a"] = (function(name) {
  var create = typeof name === "function" ? name : Object(__WEBPACK_IMPORTED_MODULE_0__creator__["a" /* default */])(name);
  return this.select(function() {
    return this.appendChild(create.apply(this, arguments));
  });
});


/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__creator__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selector__ = __webpack_require__(46);



function constantNull() {
  return null;
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, before) {
  var create = typeof name === "function" ? name : Object(__WEBPACK_IMPORTED_MODULE_0__creator__["a" /* default */])(name),
      select = before == null ? constantNull : typeof before === "function" ? before : Object(__WEBPACK_IMPORTED_MODULE_1__selector__["a" /* default */])(before);
  return this.select(function() {
    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
  });
});


/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return this.each(remove);
});


/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function selection_cloneShallow() {
  return this.parentNode.insertBefore(this.cloneNode(false), this.nextSibling);
}

function selection_cloneDeep() {
  return this.parentNode.insertBefore(this.cloneNode(true), this.nextSibling);
}

/* harmony default export */ __webpack_exports__["a"] = (function(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
});


/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(value) {
  return arguments.length
      ? this.property("__data__", value)
      : this.node().__data__;
});


/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__window__ = __webpack_require__(47);


function dispatchEvent(node, type, params) {
  var window = Object(__WEBPACK_IMPORTED_MODULE_0__window__["a" /* default */])(node),
      event = window.CustomEvent;

  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window.document.createEvent("Event");
    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else event.initEvent(type, false, false);
  }

  node.dispatchEvent(event);
}

function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}

function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(type, params) {
  return this.each((typeof params === "function"
      ? dispatchFunction
      : dispatchConstant)(type, params));
});


/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
var nextId = 0;

function local() {
  return new Local;
}

function Local() {
  this._ = "@" + (++nextId).toString(36);
}

Local.prototype = local.prototype = {
  constructor: Local,
  get: function(node) {
    var id = this._;
    while (!(id in node)) if (!(node = node.parentNode)) return;
    return node[id];
  },
  set: function(node, value) {
    return node[this._] = value;
  },
  remove: function(node) {
    return this._ in node && delete node[this._];
  },
  toString: function() {
    return this._;
  }
};


/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sourceEvent__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__point__ = __webpack_require__(27);



/* unused harmony default export */ var _unused_webpack_default_export = (function(node) {
  var event = Object(__WEBPACK_IMPORTED_MODULE_0__sourceEvent__["a" /* default */])();
  if (event.changedTouches) event = event.changedTouches[0];
  return Object(__WEBPACK_IMPORTED_MODULE_1__point__["a" /* default */])(node, event);
});


/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selection_index__ = __webpack_require__(4);


/* unused harmony default export */ var _unused_webpack_default_export = (function(selector) {
  return typeof selector === "string"
      ? new __WEBPACK_IMPORTED_MODULE_0__selection_index__["a" /* Selection */]([document.querySelectorAll(selector)], [document.documentElement])
      : new __WEBPACK_IMPORTED_MODULE_0__selection_index__["a" /* Selection */]([selector == null ? [] : selector], __WEBPACK_IMPORTED_MODULE_0__selection_index__["c" /* root */]);
});


/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sourceEvent__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__point__ = __webpack_require__(27);



/* unused harmony default export */ var _unused_webpack_default_export = (function(node, touches, identifier) {
  if (arguments.length < 3) identifier = touches, touches = Object(__WEBPACK_IMPORTED_MODULE_0__sourceEvent__["a" /* default */])().changedTouches;

  for (var i = 0, n = touches ? touches.length : 0, touch; i < n; ++i) {
    if ((touch = touches[i]).identifier === identifier) {
      return Object(__WEBPACK_IMPORTED_MODULE_1__point__["a" /* default */])(node, touch);
    }
  }

  return null;
});


/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sourceEvent__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__point__ = __webpack_require__(27);



/* unused harmony default export */ var _unused_webpack_default_export = (function(node, touches) {
  if (touches == null) touches = Object(__WEBPACK_IMPORTED_MODULE_0__sourceEvent__["a" /* default */])().touches;

  for (var i = 0, n = touches ? touches.length : 0, points = new Array(n); i < n; ++i) {
    points[i] = Object(__WEBPACK_IMPORTED_MODULE_1__point__["a" /* default */])(node, touches[i]);
  }

  return points;
});


/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__axis__ = __webpack_require__(224);
/* unused harmony reexport axisTop */
/* unused harmony reexport axisRight */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__axis__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__axis__["b"]; });



/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export axisTop */
/* unused harmony export axisRight */
/* harmony export (immutable) */ __webpack_exports__["a"] = axisBottom;
/* harmony export (immutable) */ __webpack_exports__["b"] = axisLeft;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__identity__ = __webpack_require__(226);



var top = 1,
    right = 2,
    bottom = 3,
    left = 4,
    epsilon = 1e-6;

function translateX(x) {
  return "translate(" + (x + 0.5) + ",0)";
}

function translateY(y) {
  return "translate(0," + (y + 0.5) + ")";
}

function number(scale) {
  return function(d) {
    return +scale(d);
  };
}

function center(scale) {
  var offset = Math.max(0, scale.bandwidth() - 1) / 2; // Adjust for 0.5px offset.
  if (scale.round()) offset = Math.round(offset);
  return function(d) {
    return +scale(d) + offset;
  };
}

function entering() {
  return !this.__axis;
}

function axis(orient, scale) {
  var tickArguments = [],
      tickValues = null,
      tickFormat = null,
      tickSizeInner = 6,
      tickSizeOuter = 6,
      tickPadding = 3,
      k = orient === top || orient === left ? -1 : 1,
      x = orient === left || orient === right ? "x" : "y",
      transform = orient === top || orient === bottom ? translateX : translateY;

  function axis(context) {
    var values = tickValues == null ? (scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain()) : tickValues,
        format = tickFormat == null ? (scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : __WEBPACK_IMPORTED_MODULE_1__identity__["a" /* default */]) : tickFormat,
        spacing = Math.max(tickSizeInner, 0) + tickPadding,
        range = scale.range(),
        range0 = +range[0] + 0.5,
        range1 = +range[range.length - 1] + 0.5,
        position = (scale.bandwidth ? center : number)(scale.copy()),
        selection = context.selection ? context.selection() : context,
        path = selection.selectAll(".domain").data([null]),
        tick = selection.selectAll(".tick").data(values, scale).order(),
        tickExit = tick.exit(),
        tickEnter = tick.enter().append("g").attr("class", "tick"),
        line = tick.select("line"),
        text = tick.select("text");

    path = path.merge(path.enter().insert("path", ".tick")
        .attr("class", "domain")
        .attr("stroke", "currentColor"));

    tick = tick.merge(tickEnter);

    line = line.merge(tickEnter.append("line")
        .attr("stroke", "currentColor")
        .attr(x + "2", k * tickSizeInner));

    text = text.merge(tickEnter.append("text")
        .attr("fill", "currentColor")
        .attr(x, k * spacing)
        .attr("dy", orient === top ? "0em" : orient === bottom ? "0.71em" : "0.32em"));

    if (context !== selection) {
      path = path.transition(context);
      tick = tick.transition(context);
      line = line.transition(context);
      text = text.transition(context);

      tickExit = tickExit.transition(context)
          .attr("opacity", epsilon)
          .attr("transform", function(d) { return isFinite(d = position(d)) ? transform(d) : this.getAttribute("transform"); });

      tickEnter
          .attr("opacity", epsilon)
          .attr("transform", function(d) { var p = this.parentNode.__axis; return transform(p && isFinite(p = p(d)) ? p : position(d)); });
    }

    tickExit.remove();

    path
        .attr("d", orient === left || orient == right
            ? (tickSizeOuter ? "M" + k * tickSizeOuter + "," + range0 + "H0.5V" + range1 + "H" + k * tickSizeOuter : "M0.5," + range0 + "V" + range1)
            : (tickSizeOuter ? "M" + range0 + "," + k * tickSizeOuter + "V0.5H" + range1 + "V" + k * tickSizeOuter : "M" + range0 + ",0.5H" + range1));

    tick
        .attr("opacity", 1)
        .attr("transform", function(d) { return transform(position(d)); });

    line
        .attr(x + "2", k * tickSizeInner);

    text
        .attr(x, k * spacing)
        .text(format);

    selection.filter(entering)
        .attr("fill", "none")
        .attr("font-size", 10)
        .attr("font-family", "sans-serif")
        .attr("text-anchor", orient === right ? "start" : orient === left ? "end" : "middle");

    selection
        .each(function() { this.__axis = position; });
  }

  axis.scale = function(_) {
    return arguments.length ? (scale = _, axis) : scale;
  };

  axis.ticks = function() {
    return tickArguments = __WEBPACK_IMPORTED_MODULE_0__array__["a" /* slice */].call(arguments), axis;
  };

  axis.tickArguments = function(_) {
    return arguments.length ? (tickArguments = _ == null ? [] : __WEBPACK_IMPORTED_MODULE_0__array__["a" /* slice */].call(_), axis) : tickArguments.slice();
  };

  axis.tickValues = function(_) {
    return arguments.length ? (tickValues = _ == null ? null : __WEBPACK_IMPORTED_MODULE_0__array__["a" /* slice */].call(_), axis) : tickValues && tickValues.slice();
  };

  axis.tickFormat = function(_) {
    return arguments.length ? (tickFormat = _, axis) : tickFormat;
  };

  axis.tickSize = function(_) {
    return arguments.length ? (tickSizeInner = tickSizeOuter = +_, axis) : tickSizeInner;
  };

  axis.tickSizeInner = function(_) {
    return arguments.length ? (tickSizeInner = +_, axis) : tickSizeInner;
  };

  axis.tickSizeOuter = function(_) {
    return arguments.length ? (tickSizeOuter = +_, axis) : tickSizeOuter;
  };

  axis.tickPadding = function(_) {
    return arguments.length ? (tickPadding = +_, axis) : tickPadding;
  };

  return axis;
}

function axisTop(scale) {
  return axis(top, scale);
}

function axisRight(scale) {
  return axis(right, scale);
}

function axisBottom(scale) {
  return axis(bottom, scale);
}

function axisLeft(scale) {
  return axis(left, scale);
}


/***/ }),
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slice; });
var slice = Array.prototype.slice;


/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x;
});


/***/ }),
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plot__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_shape__ = __webpack_require__(111);



class AreaChart extends __WEBPACK_IMPORTED_MODULE_0__plot__["a" /* default */] {
   
    constructor(data, view) {
        super(data, view);
        this.render();
    }

    render() {
        let vmap = this.data.vmap;

        super.axes();
        let shape = Object(__WEBPACK_IMPORTED_MODULE_1_d3_shape__["a" /* area */])()
            .curve(__WEBPACK_IMPORTED_MODULE_1_d3_shape__["b" /* curveBasis */])
            .x( d => this.scales.x(d[vmap.x]) )
            .y0(this.height)
            .y1( d => this.scales.y(d[vmap.y]) );

        this.svg.main.append("path")
            .datum(this.data.json)
            .attr("d", shape)
            .style("fill", vmap.color)
            .style("fill-opacity", vmap.opacity)
            .style("stroke-width", 0)
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AreaChart;


/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_path__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(18);




function arcInnerRadius(d) {
  return d.innerRadius;
}

function arcOuterRadius(d) {
  return d.outerRadius;
}

function arcStartAngle(d) {
  return d.startAngle;
}

function arcEndAngle(d) {
  return d.endAngle;
}

function arcPadAngle(d) {
  return d && d.padAngle; // Note: optional!
}

function intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
  var x10 = x1 - x0, y10 = y1 - y0,
      x32 = x3 - x2, y32 = y3 - y2,
      t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / (y32 * x10 - x32 * y10);
  return [x0 + t * x10, y0 + t * y10];
}

// Compute perpendicular offset line of length rc.
// http://mathworld.wolfram.com/Circle-LineIntersection.html
function cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
  var x01 = x0 - x1,
      y01 = y0 - y1,
      lo = (cw ? rc : -rc) / Object(__WEBPACK_IMPORTED_MODULE_2__math__["l" /* sqrt */])(x01 * x01 + y01 * y01),
      ox = lo * y01,
      oy = -lo * x01,
      x11 = x0 + ox,
      y11 = y0 + oy,
      x10 = x1 + ox,
      y10 = y1 + oy,
      x00 = (x11 + x10) / 2,
      y00 = (y11 + y10) / 2,
      dx = x10 - x11,
      dy = y10 - y11,
      d2 = dx * dx + dy * dy,
      r = r1 - rc,
      D = x11 * y10 - x10 * y11,
      d = (dy < 0 ? -1 : 1) * Object(__WEBPACK_IMPORTED_MODULE_2__math__["l" /* sqrt */])(Object(__WEBPACK_IMPORTED_MODULE_2__math__["h" /* max */])(0, r * r * d2 - D * D)),
      cx0 = (D * dy - dx * d) / d2,
      cy0 = (-D * dx - dy * d) / d2,
      cx1 = (D * dy + dx * d) / d2,
      cy1 = (-D * dx + dy * d) / d2,
      dx0 = cx0 - x00,
      dy0 = cy0 - y00,
      dx1 = cx1 - x00,
      dy1 = cy1 - y00;

  // Pick the closer of the two intersection points.
  // TODO Is there a faster way to determine which intersection to use?
  if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;

  return {
    cx: cx0,
    cy: cy0,
    x01: -ox,
    y01: -oy,
    x11: cx0 * (r1 / r - 1),
    y11: cy0 * (r1 / r - 1)
  };
}

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  var innerRadius = arcInnerRadius,
      outerRadius = arcOuterRadius,
      cornerRadius = Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(0),
      padRadius = null,
      startAngle = arcStartAngle,
      endAngle = arcEndAngle,
      padAngle = arcPadAngle,
      context = null;

  function arc() {
    var buffer,
        r,
        r0 = +innerRadius.apply(this, arguments),
        r1 = +outerRadius.apply(this, arguments),
        a0 = startAngle.apply(this, arguments) - __WEBPACK_IMPORTED_MODULE_2__math__["g" /* halfPi */],
        a1 = endAngle.apply(this, arguments) - __WEBPACK_IMPORTED_MODULE_2__math__["g" /* halfPi */],
        da = Object(__WEBPACK_IMPORTED_MODULE_2__math__["a" /* abs */])(a1 - a0),
        cw = a1 > a0;

    if (!context) context = buffer = Object(__WEBPACK_IMPORTED_MODULE_0_d3_path__["a" /* path */])();

    // Ensure that the outer radius is always larger than the inner radius.
    if (r1 < r0) r = r1, r1 = r0, r0 = r;

    // Is it a point?
    if (!(r1 > __WEBPACK_IMPORTED_MODULE_2__math__["f" /* epsilon */])) context.moveTo(0, 0);

    // Or is it a circle or annulus?
    else if (da > __WEBPACK_IMPORTED_MODULE_2__math__["m" /* tau */] - __WEBPACK_IMPORTED_MODULE_2__math__["f" /* epsilon */]) {
      context.moveTo(r1 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["e" /* cos */])(a0), r1 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["k" /* sin */])(a0));
      context.arc(0, 0, r1, a0, a1, !cw);
      if (r0 > __WEBPACK_IMPORTED_MODULE_2__math__["f" /* epsilon */]) {
        context.moveTo(r0 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["e" /* cos */])(a1), r0 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["k" /* sin */])(a1));
        context.arc(0, 0, r0, a1, a0, cw);
      }
    }

    // Or is it a circular or annular sector?
    else {
      var a01 = a0,
          a11 = a1,
          a00 = a0,
          a10 = a1,
          da0 = da,
          da1 = da,
          ap = padAngle.apply(this, arguments) / 2,
          rp = (ap > __WEBPACK_IMPORTED_MODULE_2__math__["f" /* epsilon */]) && (padRadius ? +padRadius.apply(this, arguments) : Object(__WEBPACK_IMPORTED_MODULE_2__math__["l" /* sqrt */])(r0 * r0 + r1 * r1)),
          rc = Object(__WEBPACK_IMPORTED_MODULE_2__math__["i" /* min */])(Object(__WEBPACK_IMPORTED_MODULE_2__math__["a" /* abs */])(r1 - r0) / 2, +cornerRadius.apply(this, arguments)),
          rc0 = rc,
          rc1 = rc,
          t0,
          t1;

      // Apply padding? Note that since r1 ≥ r0, da1 ≥ da0.
      if (rp > __WEBPACK_IMPORTED_MODULE_2__math__["f" /* epsilon */]) {
        var p0 = Object(__WEBPACK_IMPORTED_MODULE_2__math__["c" /* asin */])(rp / r0 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["k" /* sin */])(ap)),
            p1 = Object(__WEBPACK_IMPORTED_MODULE_2__math__["c" /* asin */])(rp / r1 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["k" /* sin */])(ap));
        if ((da0 -= p0 * 2) > __WEBPACK_IMPORTED_MODULE_2__math__["f" /* epsilon */]) p0 *= (cw ? 1 : -1), a00 += p0, a10 -= p0;
        else da0 = 0, a00 = a10 = (a0 + a1) / 2;
        if ((da1 -= p1 * 2) > __WEBPACK_IMPORTED_MODULE_2__math__["f" /* epsilon */]) p1 *= (cw ? 1 : -1), a01 += p1, a11 -= p1;
        else da1 = 0, a01 = a11 = (a0 + a1) / 2;
      }

      var x01 = r1 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["e" /* cos */])(a01),
          y01 = r1 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["k" /* sin */])(a01),
          x10 = r0 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["e" /* cos */])(a10),
          y10 = r0 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["k" /* sin */])(a10);

      // Apply rounded corners?
      if (rc > __WEBPACK_IMPORTED_MODULE_2__math__["f" /* epsilon */]) {
        var x11 = r1 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["e" /* cos */])(a11),
            y11 = r1 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["k" /* sin */])(a11),
            x00 = r0 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["e" /* cos */])(a00),
            y00 = r0 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["k" /* sin */])(a00);

        // Restrict the corner radius according to the sector angle.
        if (da < __WEBPACK_IMPORTED_MODULE_2__math__["j" /* pi */]) {
          var oc = da0 > __WEBPACK_IMPORTED_MODULE_2__math__["f" /* epsilon */] ? intersect(x01, y01, x00, y00, x11, y11, x10, y10) : [x10, y10],
              ax = x01 - oc[0],
              ay = y01 - oc[1],
              bx = x11 - oc[0],
              by = y11 - oc[1],
              kc = 1 / Object(__WEBPACK_IMPORTED_MODULE_2__math__["k" /* sin */])(Object(__WEBPACK_IMPORTED_MODULE_2__math__["b" /* acos */])((ax * bx + ay * by) / (Object(__WEBPACK_IMPORTED_MODULE_2__math__["l" /* sqrt */])(ax * ax + ay * ay) * Object(__WEBPACK_IMPORTED_MODULE_2__math__["l" /* sqrt */])(bx * bx + by * by))) / 2),
              lc = Object(__WEBPACK_IMPORTED_MODULE_2__math__["l" /* sqrt */])(oc[0] * oc[0] + oc[1] * oc[1]);
          rc0 = Object(__WEBPACK_IMPORTED_MODULE_2__math__["i" /* min */])(rc, (r0 - lc) / (kc - 1));
          rc1 = Object(__WEBPACK_IMPORTED_MODULE_2__math__["i" /* min */])(rc, (r1 - lc) / (kc + 1));
        }
      }

      // Is the sector collapsed to a line?
      if (!(da1 > __WEBPACK_IMPORTED_MODULE_2__math__["f" /* epsilon */])) context.moveTo(x01, y01);

      // Does the sector’s outer ring have rounded corners?
      else if (rc1 > __WEBPACK_IMPORTED_MODULE_2__math__["f" /* epsilon */]) {
        t0 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
        t1 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);

        context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01);

        // Have the corners merged?
        if (rc1 < rc) context.arc(t0.cx, t0.cy, rc1, Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t0.y01, t0.x01), Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t1.y01, t1.x01), !cw);

        // Otherwise, draw the two corners and the ring.
        else {
          context.arc(t0.cx, t0.cy, rc1, Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t0.y01, t0.x01), Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r1, Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t0.cy + t0.y11, t0.cx + t0.x11), Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t1.cy + t1.y11, t1.cx + t1.x11), !cw);
          context.arc(t1.cx, t1.cy, rc1, Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t1.y11, t1.x11), Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t1.y01, t1.x01), !cw);
        }
      }

      // Or is the outer ring just a circular arc?
      else context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);

      // Is there no inner ring, and it’s a circular sector?
      // Or perhaps it’s an annular sector collapsed due to padding?
      if (!(r0 > __WEBPACK_IMPORTED_MODULE_2__math__["f" /* epsilon */]) || !(da0 > __WEBPACK_IMPORTED_MODULE_2__math__["f" /* epsilon */])) context.lineTo(x10, y10);

      // Does the sector’s inner ring (or point) have rounded corners?
      else if (rc0 > __WEBPACK_IMPORTED_MODULE_2__math__["f" /* epsilon */]) {
        t0 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
        t1 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);

        context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01);

        // Have the corners merged?
        if (rc0 < rc) context.arc(t0.cx, t0.cy, rc0, Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t0.y01, t0.x01), Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t1.y01, t1.x01), !cw);

        // Otherwise, draw the two corners and the ring.
        else {
          context.arc(t0.cx, t0.cy, rc0, Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t0.y01, t0.x01), Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r0, Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t0.cy + t0.y11, t0.cx + t0.x11), Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t1.cy + t1.y11, t1.cx + t1.x11), cw);
          context.arc(t1.cx, t1.cy, rc0, Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t1.y11, t1.x11), Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t1.y01, t1.x01), !cw);
        }
      }

      // Or is the inner ring just a circular arc?
      else context.arc(0, 0, r0, a10, a00, cw);
    }

    context.closePath();

    if (buffer) return context = null, buffer + "" || null;
  }

  arc.centroid = function() {
    var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2,
        a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - __WEBPACK_IMPORTED_MODULE_2__math__["j" /* pi */] / 2;
    return [Object(__WEBPACK_IMPORTED_MODULE_2__math__["e" /* cos */])(a) * r, Object(__WEBPACK_IMPORTED_MODULE_2__math__["k" /* sin */])(a) * r];
  };

  arc.innerRadius = function(_) {
    return arguments.length ? (innerRadius = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), arc) : innerRadius;
  };

  arc.outerRadius = function(_) {
    return arguments.length ? (outerRadius = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), arc) : outerRadius;
  };

  arc.cornerRadius = function(_) {
    return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), arc) : cornerRadius;
  };

  arc.padRadius = function(_) {
    return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), arc) : padRadius;
  };

  arc.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), arc) : startAngle;
  };

  arc.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), arc) : endAngle;
  };

  arc.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), arc) : padAngle;
  };

  arc.context = function(_) {
    return arguments.length ? ((context = _ == null ? null : _), arc) : context;
  };

  return arc;
});


/***/ }),
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var pi = Math.PI,
    tau = 2 * pi,
    epsilon = 1e-6,
    tauEpsilon = tau - epsilon;

function Path() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null; // end of current subpath
  this._ = "";
}

function path() {
  return new Path;
}

Path.prototype = path.prototype = {
  constructor: Path,
  moveTo: function(x, y) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y);
  },
  closePath: function() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._ += "Z";
    }
  },
  lineTo: function(x, y) {
    this._ += "L" + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  quadraticCurveTo: function(x1, y1, x, y) {
    this._ += "Q" + (+x1) + "," + (+y1) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  bezierCurveTo: function(x1, y1, x2, y2, x, y) {
    this._ += "C" + (+x1) + "," + (+y1) + "," + (+x2) + "," + (+y2) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  arcTo: function(x1, y1, x2, y2, r) {
    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
    var x0 = this._x1,
        y0 = this._y1,
        x21 = x2 - x1,
        y21 = y2 - y1,
        x01 = x0 - x1,
        y01 = y0 - y1,
        l01_2 = x01 * x01 + y01 * y01;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x1,y1).
    if (this._x1 === null) {
      this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
    else if (!(l01_2 > epsilon));

    // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
    // Equivalently, is (x1,y1) coincident with (x2,y2)?
    // Or, is the radius zero? Line to (x1,y1).
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
      this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Otherwise, draw an arc!
    else {
      var x20 = x2 - x0,
          y20 = y2 - y0,
          l21_2 = x21 * x21 + y21 * y21,
          l20_2 = x20 * x20 + y20 * y20,
          l21 = Math.sqrt(l21_2),
          l01 = Math.sqrt(l01_2),
          l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
          t01 = l / l01,
          t21 = l / l21;

      // If the start tangent is not coincident with (x0,y0), line to.
      if (Math.abs(t01 - 1) > epsilon) {
        this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
      }

      this._ += "A" + r + "," + r + ",0,0," + (+(y01 * x20 > x01 * y20)) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
    }
  },
  arc: function(x, y, r, a0, a1, ccw) {
    x = +x, y = +y, r = +r;
    var dx = r * Math.cos(a0),
        dy = r * Math.sin(a0),
        x0 = x + dx,
        y0 = y + dy,
        cw = 1 ^ ccw,
        da = ccw ? a0 - a1 : a1 - a0;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x0,y0).
    if (this._x1 === null) {
      this._ += "M" + x0 + "," + y0;
    }

    // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
    else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
      this._ += "L" + x0 + "," + y0;
    }

    // Is this arc empty? We’re done.
    if (!r) return;

    // Does the angle go the wrong way? Flip the direction.
    if (da < 0) da = da % tau + tau;

    // Is this a complete circle? Draw two arcs to complete the circle.
    if (da > tauEpsilon) {
      this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x - dx) + "," + (y - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
    }

    // Is this arc non-empty? Draw an arc!
    else if (da > epsilon) {
      this._ += "A" + r + "," + r + ",0," + (+(da >= pi)) + "," + cw + "," + (this._x1 = x + r * Math.cos(a1)) + "," + (this._y1 = y + r * Math.sin(a1));
    }
  },
  rect: function(x, y, w, h) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y) + "h" + (+w) + "v" + (+h) + "h" + (-w) + "Z";
  },
  toString: function() {
    return this._;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (path);


/***/ }),
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__descending__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__identity__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__math__ = __webpack_require__(18);





/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  var value = __WEBPACK_IMPORTED_MODULE_2__identity__["a" /* default */],
      sortValues = __WEBPACK_IMPORTED_MODULE_1__descending__["a" /* default */],
      sort = null,
      startAngle = Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(0),
      endAngle = Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_3__math__["m" /* tau */]),
      padAngle = Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(0);

  function pie(data) {
    var i,
        n = data.length,
        j,
        k,
        sum = 0,
        index = new Array(n),
        arcs = new Array(n),
        a0 = +startAngle.apply(this, arguments),
        da = Math.min(__WEBPACK_IMPORTED_MODULE_3__math__["m" /* tau */], Math.max(-__WEBPACK_IMPORTED_MODULE_3__math__["m" /* tau */], endAngle.apply(this, arguments) - a0)),
        a1,
        p = Math.min(Math.abs(da) / n, padAngle.apply(this, arguments)),
        pa = p * (da < 0 ? -1 : 1),
        v;

    for (i = 0; i < n; ++i) {
      if ((v = arcs[index[i] = i] = +value(data[i], i, data)) > 0) {
        sum += v;
      }
    }

    // Optionally sort the arcs by previously-computed values or by data.
    if (sortValues != null) index.sort(function(i, j) { return sortValues(arcs[i], arcs[j]); });
    else if (sort != null) index.sort(function(i, j) { return sort(data[i], data[j]); });

    // Compute the arcs! They are stored in the original data's order.
    for (i = 0, k = sum ? (da - n * pa) / sum : 0; i < n; ++i, a0 = a1) {
      j = index[i], v = arcs[j], a1 = a0 + (v > 0 ? v * k : 0) + pa, arcs[j] = {
        data: data[j],
        index: i,
        value: v,
        startAngle: a0,
        endAngle: a1,
        padAngle: p
      };
    }

    return arcs;
  }

  pie.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(+_), pie) : value;
  };

  pie.sortValues = function(_) {
    return arguments.length ? (sortValues = _, sort = null, pie) : sortValues;
  };

  pie.sort = function(_) {
    return arguments.length ? (sort = _, sortValues = null, pie) : sort;
  };

  pie.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(+_), pie) : startAngle;
  };

  pie.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(+_), pie) : endAngle;
  };

  pie.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(+_), pie) : padAngle;
  };

  return pie;
});


/***/ }),
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
});


/***/ }),
/* 232 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(d) {
  return d;
});


/***/ }),
/* 233 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curve_radial__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__area__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lineRadial__ = __webpack_require__(96);




/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  var a = Object(__WEBPACK_IMPORTED_MODULE_1__area__["a" /* default */])().curve(__WEBPACK_IMPORTED_MODULE_0__curve_radial__["a" /* curveRadialLinear */]),
      c = a.curve,
      x0 = a.lineX0,
      x1 = a.lineX1,
      y0 = a.lineY0,
      y1 = a.lineY1;

  a.angle = a.x, delete a.x;
  a.startAngle = a.x0, delete a.x0;
  a.endAngle = a.x1, delete a.x1;
  a.radius = a.y, delete a.y;
  a.innerRadius = a.y0, delete a.y0;
  a.outerRadius = a.y1, delete a.y1;
  a.lineStartAngle = function() { return Object(__WEBPACK_IMPORTED_MODULE_2__lineRadial__["a" /* lineRadial */])(x0()); }, delete a.lineX0;
  a.lineEndAngle = function() { return Object(__WEBPACK_IMPORTED_MODULE_2__lineRadial__["a" /* lineRadial */])(x1()); }, delete a.lineX1;
  a.lineInnerRadius = function() { return Object(__WEBPACK_IMPORTED_MODULE_2__lineRadial__["a" /* lineRadial */])(y0()); }, delete a.lineY0;
  a.lineOuterRadius = function() { return Object(__WEBPACK_IMPORTED_MODULE_2__lineRadial__["a" /* lineRadial */])(y1()); }, delete a.lineY1;

  a.curve = function(_) {
    return arguments.length ? c(Object(__WEBPACK_IMPORTED_MODULE_0__curve_radial__["b" /* default */])(_)) : c()._curve;
  };

  return a;
});


/***/ }),
/* 234 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export linkHorizontal */
/* unused harmony export linkVertical */
/* unused harmony export linkRadial */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_path__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__point__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pointRadial__ = __webpack_require__(97);






function linkSource(d) {
  return d.source;
}

function linkTarget(d) {
  return d.target;
}

function link(curve) {
  var source = linkSource,
      target = linkTarget,
      x = __WEBPACK_IMPORTED_MODULE_3__point__["a" /* x */],
      y = __WEBPACK_IMPORTED_MODULE_3__point__["b" /* y */],
      context = null;

  function link() {
    var buffer, argv = __WEBPACK_IMPORTED_MODULE_1__array__["a" /* slice */].call(arguments), s = source.apply(this, argv), t = target.apply(this, argv);
    if (!context) context = buffer = Object(__WEBPACK_IMPORTED_MODULE_0_d3_path__["a" /* path */])();
    curve(context, +x.apply(this, (argv[0] = s, argv)), +y.apply(this, argv), +x.apply(this, (argv[0] = t, argv)), +y.apply(this, argv));
    if (buffer) return context = null, buffer + "" || null;
  }

  link.source = function(_) {
    return arguments.length ? (source = _, link) : source;
  };

  link.target = function(_) {
    return arguments.length ? (target = _, link) : target;
  };

  link.x = function(_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(+_), link) : x;
  };

  link.y = function(_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(+_), link) : y;
  };

  link.context = function(_) {
    return arguments.length ? ((context = _ == null ? null : _), link) : context;
  };

  return link;
}

function curveHorizontal(context, x0, y0, x1, y1) {
  context.moveTo(x0, y0);
  context.bezierCurveTo(x0 = (x0 + x1) / 2, y0, x0, y1, x1, y1);
}

function curveVertical(context, x0, y0, x1, y1) {
  context.moveTo(x0, y0);
  context.bezierCurveTo(x0, y0 = (y0 + y1) / 2, x1, y0, x1, y1);
}

function curveRadial(context, x0, y0, x1, y1) {
  var p0 = Object(__WEBPACK_IMPORTED_MODULE_4__pointRadial__["a" /* default */])(x0, y0),
      p1 = Object(__WEBPACK_IMPORTED_MODULE_4__pointRadial__["a" /* default */])(x0, y0 = (y0 + y1) / 2),
      p2 = Object(__WEBPACK_IMPORTED_MODULE_4__pointRadial__["a" /* default */])(x1, y0),
      p3 = Object(__WEBPACK_IMPORTED_MODULE_4__pointRadial__["a" /* default */])(x1, y1);
  context.moveTo(p0[0], p0[1]);
  context.bezierCurveTo(p1[0], p1[1], p2[0], p2[1], p3[0], p3[1]);
}

function linkHorizontal() {
  return link(curveHorizontal);
}

function linkVertical() {
  return link(curveVertical);
}

function linkRadial() {
  var l = link(curveRadial);
  l.angle = l.x, delete l.x;
  l.radius = l.y, delete l.y;
  return l;
}


/***/ }),
/* 235 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export symbols */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_path__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__symbol_circle__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__symbol_cross__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__symbol_diamond__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__symbol_star__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__symbol_square__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__symbol_triangle__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__symbol_wye__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constant__ = __webpack_require__(10);










var symbols = [
  __WEBPACK_IMPORTED_MODULE_1__symbol_circle__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__symbol_cross__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_3__symbol_diamond__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_5__symbol_square__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_4__symbol_star__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_6__symbol_triangle__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_7__symbol_wye__["a" /* default */]
];

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  var type = Object(__WEBPACK_IMPORTED_MODULE_8__constant__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__symbol_circle__["a" /* default */]),
      size = Object(__WEBPACK_IMPORTED_MODULE_8__constant__["a" /* default */])(64),
      context = null;

  function symbol() {
    var buffer;
    if (!context) context = buffer = Object(__WEBPACK_IMPORTED_MODULE_0_d3_path__["a" /* path */])();
    type.apply(this, arguments).draw(context, +size.apply(this, arguments));
    if (buffer) return context = null, buffer + "" || null;
  }

  symbol.type = function(_) {
    return arguments.length ? (type = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_8__constant__["a" /* default */])(_), symbol) : type;
  };

  symbol.size = function(_) {
    return arguments.length ? (size = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_8__constant__["a" /* default */])(+_), symbol) : size;
  };

  symbol.context = function(_) {
    return arguments.length ? (context = _ == null ? null : _, symbol) : context;
  };

  return symbol;
});


/***/ }),
/* 236 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__noop__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__basis__ = __webpack_require__(30);



function BasisClosed(context) {
  this._context = context;
}

BasisClosed.prototype = {
  areaStart: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  areaEnd: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
        this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2);
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._x2 = x, this._y2 = y; break;
      case 1: this._point = 2; this._x3 = x, this._y3 = y; break;
      case 2: this._point = 3; this._x4 = x, this._y4 = y; this._context.moveTo((this._x0 + 4 * this._x1 + x) / 6, (this._y0 + 4 * this._y1 + y) / 6); break;
      default: Object(__WEBPACK_IMPORTED_MODULE_1__basis__["c" /* point */])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/* unused harmony default export */ var _unused_webpack_default_export = (function(context) {
  return new BasisClosed(context);
});


/***/ }),
/* 237 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basis__ = __webpack_require__(30);


function BasisOpen(context) {
  this._context = context;
}

BasisOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; var x0 = (this._x0 + 4 * this._x1 + x) / 6, y0 = (this._y0 + 4 * this._y1 + y) / 6; this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0); break;
      case 3: this._point = 4; // proceed
      default: Object(__WEBPACK_IMPORTED_MODULE_0__basis__["c" /* point */])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/* unused harmony default export */ var _unused_webpack_default_export = (function(context) {
  return new BasisOpen(context);
});


/***/ }),
/* 238 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basis__ = __webpack_require__(30);


function Bundle(context, beta) {
  this._basis = new __WEBPACK_IMPORTED_MODULE_0__basis__["a" /* Basis */](context);
  this._beta = beta;
}

Bundle.prototype = {
  lineStart: function() {
    this._x = [];
    this._y = [];
    this._basis.lineStart();
  },
  lineEnd: function() {
    var x = this._x,
        y = this._y,
        j = x.length - 1;

    if (j > 0) {
      var x0 = x[0],
          y0 = y[0],
          dx = x[j] - x0,
          dy = y[j] - y0,
          i = -1,
          t;

      while (++i <= j) {
        t = i / j;
        this._basis.point(
          this._beta * x[i] + (1 - this._beta) * (x0 + t * dx),
          this._beta * y[i] + (1 - this._beta) * (y0 + t * dy)
        );
      }
    }

    this._x = this._y = null;
    this._basis.lineEnd();
  },
  point: function(x, y) {
    this._x.push(+x);
    this._y.push(+y);
  }
};

/* unused harmony default export */ var _unused_webpack_default_export = ((function custom(beta) {

  function bundle(context) {
    return beta === 1 ? new __WEBPACK_IMPORTED_MODULE_0__basis__["a" /* Basis */](context) : new Bundle(context, beta);
  }

  bundle.beta = function(beta) {
    return custom(+beta);
  };

  return bundle;
})(0.85));


/***/ }),
/* 239 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cardinalClosed__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__noop__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__catmullRom__ = __webpack_require__(52);




function CatmullRomClosed(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRomClosed.prototype = {
  areaStart: __WEBPACK_IMPORTED_MODULE_1__noop__["a" /* default */],
  areaEnd: __WEBPACK_IMPORTED_MODULE_1__noop__["a" /* default */],
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; this._x3 = x, this._y3 = y; break;
      case 1: this._point = 2; this._context.moveTo(this._x4 = x, this._y4 = y); break;
      case 2: this._point = 3; this._x5 = x, this._y5 = y; break;
      default: Object(__WEBPACK_IMPORTED_MODULE_2__catmullRom__["a" /* point */])(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* unused harmony default export */ var _unused_webpack_default_export = ((function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRomClosed(context, alpha) : new __WEBPACK_IMPORTED_MODULE_0__cardinalClosed__["a" /* CardinalClosed */](context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5));


/***/ }),
/* 240 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cardinalOpen__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__catmullRom__ = __webpack_require__(52);



function CatmullRomOpen(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRomOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
      case 3: this._point = 4; // proceed
      default: Object(__WEBPACK_IMPORTED_MODULE_1__catmullRom__["a" /* point */])(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* unused harmony default export */ var _unused_webpack_default_export = ((function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRomOpen(context, alpha) : new __WEBPACK_IMPORTED_MODULE_0__cardinalOpen__["a" /* CardinalOpen */](context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5));


/***/ }),
/* 241 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__noop__ = __webpack_require__(29);


function LinearClosed(context) {
  this._context = context;
}

LinearClosed.prototype = {
  areaStart: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  areaEnd: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._point) this._context.closePath();
  },
  point: function(x, y) {
    x = +x, y = +y;
    if (this._point) this._context.lineTo(x, y);
    else this._point = 1, this._context.moveTo(x, y);
  }
};

/* unused harmony default export */ var _unused_webpack_default_export = (function(context) {
  return new LinearClosed(context);
});


/***/ }),
/* 242 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export monotoneX */
/* unused harmony export monotoneY */
function sign(x) {
  return x < 0 ? -1 : 1;
}

// Calculate the slopes of the tangents (Hermite-type interpolation) based on
// the following paper: Steffen, M. 1990. A Simple Method for Monotonic
// Interpolation in One Dimension. Astronomy and Astrophysics, Vol. 239, NO.
// NOV(II), P. 443, 1990.
function slope3(that, x2, y2) {
  var h0 = that._x1 - that._x0,
      h1 = x2 - that._x1,
      s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0),
      s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0),
      p = (s0 * h1 + s1 * h0) / (h0 + h1);
  return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
}

// Calculate a one-sided slope.
function slope2(that, t) {
  var h = that._x1 - that._x0;
  return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
}

// According to https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Representations
// "you can express cubic Hermite interpolation in terms of cubic Bézier curves
// with respect to the four values p0, p0 + m0 / 3, p1 - m1 / 3, p1".
function point(that, t0, t1) {
  var x0 = that._x0,
      y0 = that._y0,
      x1 = that._x1,
      y1 = that._y1,
      dx = (x1 - x0) / 3;
  that._context.bezierCurveTo(x0 + dx, y0 + dx * t0, x1 - dx, y1 - dx * t1, x1, y1);
}

function MonotoneX(context) {
  this._context = context;
}

MonotoneX.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 =
    this._t0 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x1, this._y1); break;
      case 3: point(this, this._t0, slope2(this, this._t0)); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    var t1 = NaN;

    x = +x, y = +y;
    if (x === this._x1 && y === this._y1) return; // Ignore coincident points.
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; point(this, slope2(this, t1 = slope3(this, x, y)), t1); break;
      default: point(this, this._t0, t1 = slope3(this, x, y)); break;
    }

    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
    this._t0 = t1;
  }
}

function MonotoneY(context) {
  this._context = new ReflectContext(context);
}

(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x, y) {
  MonotoneX.prototype.point.call(this, y, x);
};

function ReflectContext(context) {
  this._context = context;
}

ReflectContext.prototype = {
  moveTo: function(x, y) { this._context.moveTo(y, x); },
  closePath: function() { this._context.closePath(); },
  lineTo: function(x, y) { this._context.lineTo(y, x); },
  bezierCurveTo: function(x1, y1, x2, y2, x, y) { this._context.bezierCurveTo(y1, x1, y2, x2, y, x); }
};

function monotoneX(context) {
  return new MonotoneX(context);
}

function monotoneY(context) {
  return new MonotoneY(context);
}


/***/ }),
/* 243 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function Natural(context) {
  this._context = context;
}

Natural.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [];
    this._y = [];
  },
  lineEnd: function() {
    var x = this._x,
        y = this._y,
        n = x.length;

    if (n) {
      this._line ? this._context.lineTo(x[0], y[0]) : this._context.moveTo(x[0], y[0]);
      if (n === 2) {
        this._context.lineTo(x[1], y[1]);
      } else {
        var px = controlPoints(x),
            py = controlPoints(y);
        for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) {
          this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x[i1], y[i1]);
        }
      }
    }

    if (this._line || (this._line !== 0 && n === 1)) this._context.closePath();
    this._line = 1 - this._line;
    this._x = this._y = null;
  },
  point: function(x, y) {
    this._x.push(+x);
    this._y.push(+y);
  }
};

// See https://www.particleincell.com/2012/bezier-splines/ for derivation.
function controlPoints(x) {
  var i,
      n = x.length - 1,
      m,
      a = new Array(n),
      b = new Array(n),
      r = new Array(n);
  a[0] = 0, b[0] = 2, r[0] = x[0] + 2 * x[1];
  for (i = 1; i < n - 1; ++i) a[i] = 1, b[i] = 4, r[i] = 4 * x[i] + 2 * x[i + 1];
  a[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x[n - 1] + x[n];
  for (i = 1; i < n; ++i) m = a[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
  a[n - 1] = r[n - 1] / b[n - 1];
  for (i = n - 2; i >= 0; --i) a[i] = (r[i] - a[i + 1]) / b[i];
  b[n - 1] = (x[n] + a[n - 1]) / 2;
  for (i = 0; i < n - 1; ++i) b[i] = 2 * x[i + 1] - a[i + 1];
  return [a, b];
}

/* unused harmony default export */ var _unused_webpack_default_export = (function(context) {
  return new Natural(context);
});


/***/ }),
/* 244 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export stepBefore */
/* unused harmony export stepAfter */
function Step(context, t) {
  this._context = context;
  this._t = t;
}

Step.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    if (this._line >= 0) this._t = 1 - this._t, this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; // proceed
      default: {
        if (this._t <= 0) {
          this._context.lineTo(this._x, y);
          this._context.lineTo(x, y);
        } else {
          var x1 = this._x * (1 - this._t) + x * this._t;
          this._context.lineTo(x1, this._y);
          this._context.lineTo(x1, y);
        }
        break;
      }
    }
    this._x = x, this._y = y;
  }
};

/* unused harmony default export */ var _unused_webpack_default_export = (function(context) {
  return new Step(context, 0.5);
});

function stepBefore(context) {
  return new Step(context, 0);
}

function stepAfter(context) {
  return new Step(context, 1);
}


/***/ }),
/* 245 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__offset_none__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_none__ = __webpack_require__(20);





function stackValue(d, key) {
  return d[key];
}

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  var keys = Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])([]),
      order = __WEBPACK_IMPORTED_MODULE_3__order_none__["a" /* default */],
      offset = __WEBPACK_IMPORTED_MODULE_2__offset_none__["a" /* default */],
      value = stackValue;

  function stack(data) {
    var kz = keys.apply(this, arguments),
        i,
        m = data.length,
        n = kz.length,
        sz = new Array(n),
        oz;

    for (i = 0; i < n; ++i) {
      for (var ki = kz[i], si = sz[i] = new Array(m), j = 0, sij; j < m; ++j) {
        si[j] = sij = [0, +value(data[j], ki, j, data)];
        sij.data = data[j];
      }
      si.key = ki;
    }

    for (i = 0, oz = order(sz); i < n; ++i) {
      sz[oz[i]].index = i;
    }

    offset(sz, oz);
    return sz;
  }

  stack.keys = function(_) {
    return arguments.length ? (keys = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__array__["a" /* slice */].call(_)), stack) : keys;
  };

  stack.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), stack) : value;
  };

  stack.order = function(_) {
    return arguments.length ? (order = _ == null ? __WEBPACK_IMPORTED_MODULE_3__order_none__["a" /* default */] : typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__array__["a" /* slice */].call(_)), stack) : order;
  };

  stack.offset = function(_) {
    return arguments.length ? (offset = _ == null ? __WEBPACK_IMPORTED_MODULE_2__offset_none__["a" /* default */] : _, stack) : offset;
  };

  return stack;
});


/***/ }),
/* 246 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__none__ = __webpack_require__(19);


/* unused harmony default export */ var _unused_webpack_default_export = (function(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var i, n, j = 0, m = series[0].length, y; j < m; ++j) {
    for (y = i = 0; i < n; ++i) y += series[i][j][1] || 0;
    if (y) for (i = 0; i < n; ++i) series[i][j][1] /= y;
  }
  Object(__WEBPACK_IMPORTED_MODULE_0__none__["a" /* default */])(series, order);
});


/***/ }),
/* 247 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(series, order) {
  if (!((n = series.length) > 1)) return;
  for (var i, j = 0, d, dy, yp, yn, n, m = series[order[0]].length; j < m; ++j) {
    for (yp = yn = 0, i = 0; i < n; ++i) {
      if ((dy = (d = series[order[i]][j])[1] - d[0]) >= 0) {
        d[0] = yp, d[1] = yp += dy;
      } else if (dy < 0) {
        d[1] = yn, d[0] = yn += dy;
      } else {
        d[0] = yp;
      }
    }
  }
});


/***/ }),
/* 248 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__none__ = __webpack_require__(19);


/* unused harmony default export */ var _unused_webpack_default_export = (function(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var j = 0, s0 = series[order[0]], n, m = s0.length; j < m; ++j) {
    for (var i = 0, y = 0; i < n; ++i) y += series[i][j][1] || 0;
    s0[j][1] += s0[j][0] = -y / 2;
  }
  Object(__WEBPACK_IMPORTED_MODULE_0__none__["a" /* default */])(series, order);
});


/***/ }),
/* 249 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__none__ = __webpack_require__(19);


/* unused harmony default export */ var _unused_webpack_default_export = (function(series, order) {
  if (!((n = series.length) > 0) || !((m = (s0 = series[order[0]]).length) > 0)) return;
  for (var y = 0, j = 1, s0, m, n; j < m; ++j) {
    for (var i = 0, s1 = 0, s2 = 0; i < n; ++i) {
      var si = series[order[i]],
          sij0 = si[j][1] || 0,
          sij1 = si[j - 1][1] || 0,
          s3 = (sij0 - sij1) / 2;
      for (var k = 0; k < i; ++k) {
        var sk = series[order[k]],
            skj0 = sk[j][1] || 0,
            skj1 = sk[j - 1][1] || 0;
        s3 += skj0 - skj1;
      }
      s1 += sij0, s2 += s3 * sij0;
    }
    s0[j - 1][1] += s0[j - 1][0] = y;
    if (s1) y -= s2 / s1;
  }
  s0[j - 1][1] += s0[j - 1][0] = y;
  Object(__WEBPACK_IMPORTED_MODULE_0__none__["a" /* default */])(series, order);
});


/***/ }),
/* 250 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(53);


/* unused harmony default export */ var _unused_webpack_default_export = (function(series) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */])(series).reverse();
});


/***/ }),
/* 251 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__none__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ascending__ = __webpack_require__(53);



/* unused harmony default export */ var _unused_webpack_default_export = (function(series) {
  var n = series.length,
      i,
      j,
      sums = series.map(__WEBPACK_IMPORTED_MODULE_1__ascending__["b" /* sum */]),
      order = Object(__WEBPACK_IMPORTED_MODULE_0__none__["a" /* default */])(series).sort(function(a, b) { return sums[b] - sums[a]; }),
      top = 0,
      bottom = 0,
      tops = [],
      bottoms = [];

  for (i = 0; i < n; ++i) {
    j = order[i];
    if (top < bottom) {
      top += sums[j];
      tops.push(j);
    } else {
      bottom += sums[j];
      bottoms.push(j);
    }
  }

  return bottoms.reverse().concat(tops);
});


/***/ }),
/* 252 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__none__ = __webpack_require__(20);


/* unused harmony default export */ var _unused_webpack_default_export = (function(series) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__none__["a" /* default */])(series).reverse();
});


/***/ }),
/* 253 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__categorical_category10__ = __webpack_require__(254);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__categorical_category10__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__categorical_Accent__ = __webpack_require__(255);
/* unused harmony reexport schemeAccent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categorical_Dark2__ = __webpack_require__(256);
/* unused harmony reexport schemeDark2 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__categorical_Paired__ = __webpack_require__(257);
/* unused harmony reexport schemePaired */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__categorical_Pastel1__ = __webpack_require__(258);
/* unused harmony reexport schemePastel1 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__categorical_Pastel2__ = __webpack_require__(259);
/* unused harmony reexport schemePastel2 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__categorical_Set1__ = __webpack_require__(260);
/* unused harmony reexport schemeSet1 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__categorical_Set2__ = __webpack_require__(261);
/* unused harmony reexport schemeSet2 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__categorical_Set3__ = __webpack_require__(262);
/* unused harmony reexport schemeSet3 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__diverging_BrBG__ = __webpack_require__(263);
/* unused harmony reexport interpolateBrBG */
/* unused harmony reexport schemeBrBG */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__diverging_PRGn__ = __webpack_require__(264);
/* unused harmony reexport interpolatePRGn */
/* unused harmony reexport schemePRGn */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__diverging_PiYG__ = __webpack_require__(265);
/* unused harmony reexport interpolatePiYG */
/* unused harmony reexport schemePiYG */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__diverging_PuOr__ = __webpack_require__(266);
/* unused harmony reexport interpolatePuOr */
/* unused harmony reexport schemePuOr */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__diverging_RdBu__ = __webpack_require__(267);
/* unused harmony reexport interpolateRdBu */
/* unused harmony reexport schemeRdBu */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__diverging_RdGy__ = __webpack_require__(268);
/* unused harmony reexport interpolateRdGy */
/* unused harmony reexport schemeRdGy */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__diverging_RdYlBu__ = __webpack_require__(269);
/* unused harmony reexport interpolateRdYlBu */
/* unused harmony reexport schemeRdYlBu */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__diverging_RdYlGn__ = __webpack_require__(270);
/* unused harmony reexport interpolateRdYlGn */
/* unused harmony reexport schemeRdYlGn */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__diverging_Spectral__ = __webpack_require__(271);
/* unused harmony reexport interpolateSpectral */
/* unused harmony reexport schemeSpectral */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__sequential_multi_BuGn__ = __webpack_require__(272);
/* unused harmony reexport interpolateBuGn */
/* unused harmony reexport schemeBuGn */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__sequential_multi_BuPu__ = __webpack_require__(273);
/* unused harmony reexport interpolateBuPu */
/* unused harmony reexport schemeBuPu */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__sequential_multi_GnBu__ = __webpack_require__(274);
/* unused harmony reexport interpolateGnBu */
/* unused harmony reexport schemeGnBu */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__sequential_multi_OrRd__ = __webpack_require__(275);
/* unused harmony reexport interpolateOrRd */
/* unused harmony reexport schemeOrRd */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__sequential_multi_PuBuGn__ = __webpack_require__(276);
/* unused harmony reexport interpolatePuBuGn */
/* unused harmony reexport schemePuBuGn */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__sequential_multi_PuBu__ = __webpack_require__(277);
/* unused harmony reexport interpolatePuBu */
/* unused harmony reexport schemePuBu */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__sequential_multi_PuRd__ = __webpack_require__(278);
/* unused harmony reexport interpolatePuRd */
/* unused harmony reexport schemePuRd */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__sequential_multi_RdPu__ = __webpack_require__(279);
/* unused harmony reexport interpolateRdPu */
/* unused harmony reexport schemeRdPu */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__sequential_multi_YlGnBu__ = __webpack_require__(280);
/* unused harmony reexport interpolateYlGnBu */
/* unused harmony reexport schemeYlGnBu */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__sequential_multi_YlGn__ = __webpack_require__(281);
/* unused harmony reexport interpolateYlGn */
/* unused harmony reexport schemeYlGn */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__sequential_multi_YlOrBr__ = __webpack_require__(282);
/* unused harmony reexport interpolateYlOrBr */
/* unused harmony reexport schemeYlOrBr */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__sequential_multi_YlOrRd__ = __webpack_require__(283);
/* unused harmony reexport interpolateYlOrRd */
/* unused harmony reexport schemeYlOrRd */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__sequential_single_Blues__ = __webpack_require__(284);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_30__sequential_single_Blues__["a"]; });
/* unused harmony reexport schemeBlues */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__sequential_single_Greens__ = __webpack_require__(285);
/* unused harmony reexport interpolateGreens */
/* unused harmony reexport schemeGreens */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__sequential_single_Greys__ = __webpack_require__(286);
/* unused harmony reexport interpolateGreys */
/* unused harmony reexport schemeGreys */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__sequential_single_Purples__ = __webpack_require__(287);
/* unused harmony reexport interpolatePurples */
/* unused harmony reexport schemePurples */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__sequential_single_Reds__ = __webpack_require__(288);
/* unused harmony reexport interpolateReds */
/* unused harmony reexport schemeReds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__sequential_single_Oranges__ = __webpack_require__(289);
/* unused harmony reexport interpolateOranges */
/* unused harmony reexport schemeOranges */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__sequential_multi_cubehelix__ = __webpack_require__(290);
/* unused harmony reexport interpolateCubehelixDefault */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__sequential_multi_rainbow__ = __webpack_require__(291);
/* unused harmony reexport interpolateRainbow */
/* unused harmony reexport interpolateWarm */
/* unused harmony reexport interpolateCool */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__sequential_multi_sinebow__ = __webpack_require__(292);
/* unused harmony reexport interpolateSinebow */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__sequential_multi_viridis__ = __webpack_require__(293);
/* unused harmony reexport interpolateViridis */
/* unused harmony reexport interpolateMagma */
/* unused harmony reexport interpolateInferno */
/* unused harmony reexport interpolatePlasma */










































/***/ }),
/* 254 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"));


/***/ }),
/* 255 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);


/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"));


/***/ }),
/* 256 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);


/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"));


/***/ }),
/* 257 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);


/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"));


/***/ }),
/* 258 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);


/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"));


/***/ }),
/* 259 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);


/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"));


/***/ }),
/* 260 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);


/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"));


/***/ }),
/* 261 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);


/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"));


/***/ }),
/* 262 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);


/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"));


/***/ }),
/* 263 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export scheme */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(1);



var scheme = new Array(3).concat(
  "d8b365f5f5f55ab4ac",
  "a6611adfc27d80cdc1018571",
  "a6611adfc27df5f5f580cdc1018571",
  "8c510ad8b365f6e8c3c7eae55ab4ac01665e",
  "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e",
  "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e",
  "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e",
  "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30",
  "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 264 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export scheme */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(1);



var scheme = new Array(3).concat(
  "af8dc3f7f7f77fbf7b",
  "7b3294c2a5cfa6dba0008837",
  "7b3294c2a5cff7f7f7a6dba0008837",
  "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837",
  "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837",
  "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837",
  "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837",
  "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b",
  "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 265 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export scheme */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(1);



var scheme = new Array(3).concat(
  "e9a3c9f7f7f7a1d76a",
  "d01c8bf1b6dab8e1864dac26",
  "d01c8bf1b6daf7f7f7b8e1864dac26",
  "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221",
  "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221",
  "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221",
  "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221",
  "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419",
  "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 266 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export scheme */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(1);



var scheme = new Array(3).concat(
  "998ec3f7f7f7f1a340",
  "5e3c99b2abd2fdb863e66101",
  "5e3c99b2abd2f7f7f7fdb863e66101",
  "542788998ec3d8daebfee0b6f1a340b35806",
  "542788998ec3d8daebf7f7f7fee0b6f1a340b35806",
  "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806",
  "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806",
  "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08",
  "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 267 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export scheme */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(1);



var scheme = new Array(3).concat(
  "ef8a62f7f7f767a9cf",
  "ca0020f4a58292c5de0571b0",
  "ca0020f4a582f7f7f792c5de0571b0",
  "b2182bef8a62fddbc7d1e5f067a9cf2166ac",
  "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac",
  "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac",
  "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac",
  "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061",
  "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 268 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export scheme */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(1);



var scheme = new Array(3).concat(
  "ef8a62ffffff999999",
  "ca0020f4a582bababa404040",
  "ca0020f4a582ffffffbababa404040",
  "b2182bef8a62fddbc7e0e0e09999994d4d4d",
  "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d",
  "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d",
  "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d",
  "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a",
  "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 269 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export scheme */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(1);



var scheme = new Array(3).concat(
  "fc8d59ffffbf91bfdb",
  "d7191cfdae61abd9e92c7bb6",
  "d7191cfdae61ffffbfabd9e92c7bb6",
  "d73027fc8d59fee090e0f3f891bfdb4575b4",
  "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4",
  "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4",
  "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4",
  "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695",
  "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 270 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export scheme */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(1);



var scheme = new Array(3).concat(
  "fc8d59ffffbf91cf60",
  "d7191cfdae61a6d96a1a9641",
  "d7191cfdae61ffffbfa6d96a1a9641",
  "d73027fc8d59fee08bd9ef8b91cf601a9850",
  "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850",
  "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850",
  "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850",
  "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837",
  "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 271 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export scheme */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(1);



var scheme = new Array(3).concat(
  "fc8d59ffffbf99d594",
  "d7191cfdae61abdda42b83ba",
  "d7191cfdae61ffffbfabdda42b83ba",
  "d53e4ffc8d59fee08be6f59899d5943288bd",
  "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd",
  "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd",
  "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd",
  "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2",
  "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 272 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export scheme */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(1);



var scheme = new Array(3).concat(
  "e5f5f999d8c92ca25f",
  "edf8fbb2e2e266c2a4238b45",
  "edf8fbb2e2e266c2a42ca25f006d2c",
  "edf8fbccece699d8c966c2a42ca25f006d2c",
  "edf8fbccece699d8c966c2a441ae76238b45005824",
  "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824",
  "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 273 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export scheme */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(1);



var scheme = new Array(3).concat(
  "e0ecf49ebcda8856a7",
  "edf8fbb3cde38c96c688419d",
  "edf8fbb3cde38c96c68856a7810f7c",
  "edf8fbbfd3e69ebcda8c96c68856a7810f7c",
  "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b",
  "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b",
  "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 274 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export scheme */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(1);



var scheme = new Array(3).concat(
  "e0f3dba8ddb543a2ca",
  "f0f9e8bae4bc7bccc42b8cbe",
  "f0f9e8bae4bc7bccc443a2ca0868ac",
  "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac",
  "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e",
  "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e",
  "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 275 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export scheme */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(1);



var scheme = new Array(3).concat(
  "fee8c8fdbb84e34a33",
  "fef0d9fdcc8afc8d59d7301f",
  "fef0d9fdcc8afc8d59e34a33b30000",
  "fef0d9fdd49efdbb84fc8d59e34a33b30000",
  "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000",
  "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000",
  "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 276 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export scheme */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(1);



var scheme = new Array(3).concat(
  "ece2f0a6bddb1c9099",
  "f6eff7bdc9e167a9cf02818a",
  "f6eff7bdc9e167a9cf1c9099016c59",
  "f6eff7d0d1e6a6bddb67a9cf1c9099016c59",
  "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450",
  "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450",
  "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 277 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export scheme */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(1);



var scheme = new Array(3).concat(
  "ece7f2a6bddb2b8cbe",
  "f1eef6bdc9e174a9cf0570b0",
  "f1eef6bdc9e174a9cf2b8cbe045a8d",
  "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d",
  "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b",
  "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b",
  "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 278 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export scheme */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(1);



var scheme = new Array(3).concat(
  "e7e1efc994c7dd1c77",
  "f1eef6d7b5d8df65b0ce1256",
  "f1eef6d7b5d8df65b0dd1c77980043",
  "f1eef6d4b9dac994c7df65b0dd1c77980043",
  "f1eef6d4b9dac994c7df65b0e7298ace125691003f",
  "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f",
  "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 279 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export scheme */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(1);



var scheme = new Array(3).concat(
  "fde0ddfa9fb5c51b8a",
  "feebe2fbb4b9f768a1ae017e",
  "feebe2fbb4b9f768a1c51b8a7a0177",
  "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177",
  "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177",
  "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177",
  "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 280 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export scheme */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(1);



var scheme = new Array(3).concat(
  "edf8b17fcdbb2c7fb8",
  "ffffcca1dab441b6c4225ea8",
  "ffffcca1dab441b6c42c7fb8253494",
  "ffffccc7e9b47fcdbb41b6c42c7fb8253494",
  "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84",
  "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84",
  "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 281 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export scheme */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(1);



var scheme = new Array(3).concat(
  "f7fcb9addd8e31a354",
  "ffffccc2e69978c679238443",
  "ffffccc2e69978c67931a354006837",
  "ffffccd9f0a3addd8e78c67931a354006837",
  "ffffccd9f0a3addd8e78c67941ab5d238443005a32",
  "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32",
  "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 282 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export scheme */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(1);



var scheme = new Array(3).concat(
  "fff7bcfec44fd95f0e",
  "ffffd4fed98efe9929cc4c02",
  "ffffd4fed98efe9929d95f0e993404",
  "ffffd4fee391fec44ffe9929d95f0e993404",
  "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04",
  "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04",
  "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 283 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export scheme */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(1);



var scheme = new Array(3).concat(
  "ffeda0feb24cf03b20",
  "ffffb2fecc5cfd8d3ce31a1c",
  "ffffb2fecc5cfd8d3cf03b20bd0026",
  "ffffb2fed976feb24cfd8d3cf03b20bd0026",
  "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026",
  "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026",
  "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 284 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export scheme */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(1);



var scheme = new Array(3).concat(
  "deebf79ecae13182bd",
  "eff3ffbdd7e76baed62171b5",
  "eff3ffbdd7e76baed63182bd08519c",
  "eff3ffc6dbef9ecae16baed63182bd08519c",
  "eff3ffc6dbef9ecae16baed64292c62171b5084594",
  "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594",
  "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 285 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export scheme */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(1);



var scheme = new Array(3).concat(
  "e5f5e0a1d99b31a354",
  "edf8e9bae4b374c476238b45",
  "edf8e9bae4b374c47631a354006d2c",
  "edf8e9c7e9c0a1d99b74c47631a354006d2c",
  "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32",
  "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32",
  "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 286 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export scheme */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(1);



var scheme = new Array(3).concat(
  "f0f0f0bdbdbd636363",
  "f7f7f7cccccc969696525252",
  "f7f7f7cccccc969696636363252525",
  "f7f7f7d9d9d9bdbdbd969696636363252525",
  "f7f7f7d9d9d9bdbdbd969696737373525252252525",
  "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525",
  "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 287 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export scheme */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(1);



var scheme = new Array(3).concat(
  "efedf5bcbddc756bb1",
  "f2f0f7cbc9e29e9ac86a51a3",
  "f2f0f7cbc9e29e9ac8756bb154278f",
  "f2f0f7dadaebbcbddc9e9ac8756bb154278f",
  "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486",
  "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486",
  "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 288 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export scheme */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(1);



var scheme = new Array(3).concat(
  "fee0d2fc9272de2d26",
  "fee5d9fcae91fb6a4acb181d",
  "fee5d9fcae91fb6a4ade2d26a50f15",
  "fee5d9fcbba1fc9272fb6a4ade2d26a50f15",
  "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d",
  "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d",
  "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 289 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export scheme */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(1);



var scheme = new Array(3).concat(
  "fee6cefdae6be6550d",
  "feeddefdbe85fd8d3cd94701",
  "feeddefdbe85fd8d3ce6550da63603",
  "feeddefdd0a2fdae6bfd8d3ce6550da63603",
  "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04",
  "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04",
  "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 290 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__(8);



/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["b" /* interpolateCubehelixLong */])(Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(300, 0.5, 0.0), Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(-240, 0.5, 1.0)));


/***/ }),
/* 291 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export warm */
/* unused harmony export cool */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__(8);



var warm = Object(__WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["b" /* interpolateCubehelixLong */])(Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(-100, 0.75, 0.35), Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(80, 1.50, 0.8));

var cool = Object(__WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["b" /* interpolateCubehelixLong */])(Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(260, 0.75, 0.35), Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(80, 1.50, 0.8));

var c = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])();

/* unused harmony default export */ var _unused_webpack_default_export = (function(t) {
  if (t < 0 || t > 1) t -= Math.floor(t);
  var ts = Math.abs(t - 0.5);
  c.h = 360 * t - 100;
  c.s = 1.5 - 1.5 * ts;
  c.l = 0.8 - 0.9 * ts;
  return c + "";
});


/***/ }),
/* 292 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(6);


var c = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["f" /* rgb */])(),
    pi_1_3 = Math.PI / 3,
    pi_2_3 = Math.PI * 2 / 3;

/* unused harmony default export */ var _unused_webpack_default_export = (function(t) {
  var x;
  t = (0.5 - t) * Math.PI;
  c.r = 255 * (x = Math.sin(t)) * x;
  c.g = 255 * (x = Math.sin(t + pi_1_3)) * x;
  c.b = 255 * (x = Math.sin(t + pi_2_3)) * x;
  return c + "";
});


/***/ }),
/* 293 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export magma */
/* unused harmony export inferno */
/* unused harmony export plasma */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);


function ramp(range) {
  var n = range.length;
  return function(t) {
    return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
  };
}

/* unused harmony default export */ var _unused_webpack_default_export = (ramp(Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")));

var magma = ramp(Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));

var inferno = ramp(Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));

var plasma = ramp(Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));


/***/ }),
/* 294 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plot__ = __webpack_require__(22);


class ScatterPlot extends __WEBPACK_IMPORTED_MODULE_0__plot__["a" /* default */] {
   
    constructor(data, view) {
        super(data, view);
        this.render();
    }

    render() {
        let vmap = this.data.vmap;

        super.axes();

        this.svg.main.selectAll('.plot-circles')
            .data(this.data.json)
            .enter()
            .append('circle')
                .attr('class', 'plot-circles')
                .attr('cx', d => this.scales.x(d[vmap.x]))
                .attr('cy', d => this.scales.y(d[vmap.y]))
                .attr('r', d => this.scales.size(d[vmap.size]))
                .style("fill", d => this.scales.color(d[vmap.color]))
                .style("fill-opacity", 1)
                .style("stroke-width", 0)
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ScatterPlot;


/***/ }),
/* 295 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x;
});


/***/ }),
/* 296 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = conicEqualAreaRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__conic__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cylindricalEqualArea__ = __webpack_require__(353);




function conicEqualAreaRaw(y0, y1) {
  var sy0 = Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(y0), n = (sy0 + Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(y1)) / 2;

  // Are the parallels symmetrical around the Equator?
  if (Object(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* abs */])(n) < __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */]) return Object(__WEBPACK_IMPORTED_MODULE_2__cylindricalEqualArea__["a" /* cylindricalEqualAreaRaw */])(y0);

  var c = 1 + sy0 * (2 * n - sy0), r0 = Object(__WEBPACK_IMPORTED_MODULE_0__math__["u" /* sqrt */])(c) / n;

  function project(x, y) {
    var r = Object(__WEBPACK_IMPORTED_MODULE_0__math__["u" /* sqrt */])(c - 2 * n * Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(y)) / n;
    return [r * Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(x *= n), r0 - r * Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(x)];
  }

  project.invert = function(x, y) {
    var r0y = r0 - y;
    return [Object(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* atan2 */])(x, Object(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* abs */])(r0y)) / n * Object(__WEBPACK_IMPORTED_MODULE_0__math__["s" /* sign */])(r0y), Object(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* asin */])((c - (x * x + r0y * r0y) * n * n) / (2 * n))];
  };

  return project;
}

/* harmony default export */ __webpack_exports__["b"] = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_1__conic__["a" /* conicProjection */])(conicEqualAreaRaw)
      .scale(155.424)
      .center([0, 33.6442]);
});


/***/ }),
/* 297 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = conicProjection;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(21);



function conicProjection(projectAt) {
  var phi0 = 0,
      phi1 = __WEBPACK_IMPORTED_MODULE_0__math__["o" /* pi */] / 3,
      m = Object(__WEBPACK_IMPORTED_MODULE_1__index__["b" /* projectionMutator */])(projectAt),
      p = m(phi0, phi1);

  p.parallels = function(_) {
    return arguments.length ? m(phi0 = _[0] * __WEBPACK_IMPORTED_MODULE_0__math__["r" /* radians */], phi1 = _[1] * __WEBPACK_IMPORTED_MODULE_0__math__["r" /* radians */]) : [phi0 * __WEBPACK_IMPORTED_MODULE_0__math__["h" /* degrees */], phi1 * __WEBPACK_IMPORTED_MODULE_0__math__["h" /* degrees */]];
  };

  return p;
}


/***/ }),
/* 298 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = fitExtent;
/* harmony export (immutable) */ __webpack_exports__["c"] = fitSize;
/* harmony export (immutable) */ __webpack_exports__["d"] = fitWidth;
/* harmony export (immutable) */ __webpack_exports__["b"] = fitHeight;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stream__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__path_bounds__ = __webpack_require__(318);



function fit(projection, fitBounds, object) {
  var clip = projection.clipExtent && projection.clipExtent();
  projection.scale(150).translate([0, 0]);
  if (clip != null) projection.clipExtent(null);
  Object(__WEBPACK_IMPORTED_MODULE_0__stream__["a" /* default */])(object, projection.stream(__WEBPACK_IMPORTED_MODULE_1__path_bounds__["a" /* default */]));
  fitBounds(__WEBPACK_IMPORTED_MODULE_1__path_bounds__["a" /* default */].result());
  if (clip != null) projection.clipExtent(clip);
  return projection;
}

function fitExtent(projection, extent, object) {
  return fit(projection, function(b) {
    var w = extent[1][0] - extent[0][0],
        h = extent[1][1] - extent[0][1],
        k = Math.min(w / (b[1][0] - b[0][0]), h / (b[1][1] - b[0][1])),
        x = +extent[0][0] + (w - k * (b[1][0] + b[0][0])) / 2,
        y = +extent[0][1] + (h - k * (b[1][1] + b[0][1])) / 2;
    projection.scale(150 * k).translate([x, y]);
  }, object);
}

function fitSize(projection, size, object) {
  return fitExtent(projection, [[0, 0], size], object);
}

function fitWidth(projection, width, object) {
  return fit(projection, function(b) {
    var w = +width,
        k = w / (b[1][0] - b[0][0]),
        x = (w - k * (b[1][0] + b[0][0])) / 2,
        y = -k * b[0][1];
    projection.scale(150 * k).translate([x, y]);
  }, object);
}

function fitHeight(projection, height, object) {
  return fit(projection, function(b) {
    var h = +height,
        k = h / (b[1][1] - b[0][1]),
        x = -k * b[0][0],
        y = (h - k * (b[1][1] + b[0][1])) / 2;
    projection.scale(150 * k).translate([x, y]);
  }, object);
}


/***/ }),
/* 299 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = mercatorRaw;
/* harmony export (immutable) */ __webpack_exports__["b"] = mercatorProjection;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rotation__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(21);




function mercatorRaw(lambda, phi) {
  return [lambda, Object(__WEBPACK_IMPORTED_MODULE_0__math__["n" /* log */])(Object(__WEBPACK_IMPORTED_MODULE_0__math__["v" /* tan */])((__WEBPACK_IMPORTED_MODULE_0__math__["l" /* halfPi */] + phi) / 2))];
}

mercatorRaw.invert = function(x, y) {
  return [x, 2 * Object(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* atan */])(Object(__WEBPACK_IMPORTED_MODULE_0__math__["k" /* exp */])(y)) - __WEBPACK_IMPORTED_MODULE_0__math__["l" /* halfPi */]];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return mercatorProjection(mercatorRaw)
      .scale(961 / __WEBPACK_IMPORTED_MODULE_0__math__["w" /* tau */]);
});

function mercatorProjection(project) {
  var m = Object(__WEBPACK_IMPORTED_MODULE_2__index__["a" /* default */])(project),
      center = m.center,
      scale = m.scale,
      translate = m.translate,
      clipExtent = m.clipExtent,
      x0 = null, y0, x1, y1; // clip extent

  m.scale = function(_) {
    return arguments.length ? (scale(_), reclip()) : scale();
  };

  m.translate = function(_) {
    return arguments.length ? (translate(_), reclip()) : translate();
  };

  m.center = function(_) {
    return arguments.length ? (center(_), reclip()) : center();
  };

  m.clipExtent = function(_) {
    return arguments.length ? ((_ == null ? x0 = y0 = x1 = y1 = null : (x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1])), reclip()) : x0 == null ? null : [[x0, y0], [x1, y1]];
  };

  function reclip() {
    var k = __WEBPACK_IMPORTED_MODULE_0__math__["o" /* pi */] * scale(),
        t = m(Object(__WEBPACK_IMPORTED_MODULE_1__rotation__["a" /* default */])(m.rotate()).invert([0, 0]));
    return clipExtent(x0 == null
        ? [[t[0] - k, t[1] - k], [t[0] + k, t[1] + k]] : project === mercatorRaw
        ? [[Math.max(t[0] - k, x0), y0], [Math.min(t[0] + k, x1), y1]]
        : [[x0, Math.max(t[1] - k, y0)], [x1, Math.min(t[1] + k, y1)]]);
  }

  return reclip();
}


/***/ }),
/* 300 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__identity__ = __webpack_require__(322);


/* harmony default export */ __webpack_exports__["a"] = (function(transform) {
  if (transform == null) return __WEBPACK_IMPORTED_MODULE_0__identity__["a" /* default */];
  var x0,
      y0,
      kx = transform.scale[0],
      ky = transform.scale[1],
      dx = transform.translate[0],
      dy = transform.translate[1];
  return function(input, i) {
    if (!i) x0 = y0 = 0;
    var j = 2, n = input.length, output = new Array(n);
    output[0] = (x0 += input[0]) * kx + dx;
    output[1] = (y0 += input[1]) * ky + dy;
    while (j < n) output[j] = input[j], ++j;
    return output;
  };
});


/***/ }),
/* 301 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export feature */
/* harmony export (immutable) */ __webpack_exports__["b"] = object;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reverse__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transform__ = __webpack_require__(300);



/* harmony default export */ __webpack_exports__["a"] = (function(topology, o) {
  return o.type === "GeometryCollection"
      ? {type: "FeatureCollection", features: o.geometries.map(function(o) { return feature(topology, o); })}
      : feature(topology, o);
});

function feature(topology, o) {
  var id = o.id,
      bbox = o.bbox,
      properties = o.properties == null ? {} : o.properties,
      geometry = object(topology, o);
  return id == null && bbox == null ? {type: "Feature", properties: properties, geometry: geometry}
      : bbox == null ? {type: "Feature", id: id, properties: properties, geometry: geometry}
      : {type: "Feature", id: id, bbox: bbox, properties: properties, geometry: geometry};
}

function object(topology, o) {
  var transformPoint = Object(__WEBPACK_IMPORTED_MODULE_1__transform__["a" /* default */])(topology.transform),
      arcs = topology.arcs;

  function arc(i, points) {
    if (points.length) points.pop();
    for (var a = arcs[i < 0 ? ~i : i], k = 0, n = a.length; k < n; ++k) {
      points.push(transformPoint(a[k], k));
    }
    if (i < 0) Object(__WEBPACK_IMPORTED_MODULE_0__reverse__["a" /* default */])(points, n);
  }

  function point(p) {
    return transformPoint(p);
  }

  function line(arcs) {
    var points = [];
    for (var i = 0, n = arcs.length; i < n; ++i) arc(arcs[i], points);
    if (points.length < 2) points.push(points[0]); // This should never happen per the specification.
    return points;
  }

  function ring(arcs) {
    var points = line(arcs);
    while (points.length < 4) points.push(points[0]); // This may happen if an arc has only two points.
    return points;
  }

  function polygon(arcs) {
    return arcs.map(ring);
  }

  function geometry(o) {
    var type = o.type, coordinates;
    switch (type) {
      case "GeometryCollection": return {type: type, geometries: o.geometries.map(geometry)};
      case "Point": coordinates = point(o.coordinates); break;
      case "MultiPoint": coordinates = o.coordinates.map(point); break;
      case "LineString": coordinates = line(o.arcs); break;
      case "MultiLineString": coordinates = o.arcs.map(line); break;
      case "Polygon": coordinates = polygon(o.arcs); break;
      case "MultiPolygon": coordinates = o.arcs.map(polygon); break;
      default: return null;
    }
    return {type: type, coordinates: coordinates};
  }

  return geometry(o);
}


/***/ }),
/* 302 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_collection__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_dispatch__ = __webpack_require__(326);



/* harmony default export */ __webpack_exports__["a"] = (function(url, callback) {
  var request,
      event = Object(__WEBPACK_IMPORTED_MODULE_1_d3_dispatch__["a" /* dispatch */])("beforesend", "progress", "load", "error"),
      mimeType,
      headers = Object(__WEBPACK_IMPORTED_MODULE_0_d3_collection__["a" /* map */])(),
      xhr = new XMLHttpRequest,
      user = null,
      password = null,
      response,
      responseType,
      timeout = 0;

  // If IE does not support CORS, use XDomainRequest.
  if (typeof XDomainRequest !== "undefined"
      && !("withCredentials" in xhr)
      && /^(http(s)?:)?\/\//.test(url)) xhr = new XDomainRequest;

  "onload" in xhr
      ? xhr.onload = xhr.onerror = xhr.ontimeout = respond
      : xhr.onreadystatechange = function(o) { xhr.readyState > 3 && respond(o); };

  function respond(o) {
    var status = xhr.status, result;
    if (!status && hasResponse(xhr)
        || status >= 200 && status < 300
        || status === 304) {
      if (response) {
        try {
          result = response.call(request, xhr);
        } catch (e) {
          event.call("error", request, e);
          return;
        }
      } else {
        result = xhr;
      }
      event.call("load", request, result);
    } else {
      event.call("error", request, o);
    }
  }

  xhr.onprogress = function(e) {
    event.call("progress", request, e);
  };

  request = {
    header: function(name, value) {
      name = (name + "").toLowerCase();
      if (arguments.length < 2) return headers.get(name);
      if (value == null) headers.remove(name);
      else headers.set(name, value + "");
      return request;
    },

    // If mimeType is non-null and no Accept header is set, a default is used.
    mimeType: function(value) {
      if (!arguments.length) return mimeType;
      mimeType = value == null ? null : value + "";
      return request;
    },

    // Specifies what type the response value should take;
    // for instance, arraybuffer, blob, document, or text.
    responseType: function(value) {
      if (!arguments.length) return responseType;
      responseType = value;
      return request;
    },

    timeout: function(value) {
      if (!arguments.length) return timeout;
      timeout = +value;
      return request;
    },

    user: function(value) {
      return arguments.length < 1 ? user : (user = value == null ? null : value + "", request);
    },

    password: function(value) {
      return arguments.length < 1 ? password : (password = value == null ? null : value + "", request);
    },

    // Specify how to convert the response content to a specific type;
    // changes the callback value on "load" events.
    response: function(value) {
      response = value;
      return request;
    },

    // Alias for send("GET", …).
    get: function(data, callback) {
      return request.send("GET", data, callback);
    },

    // Alias for send("POST", …).
    post: function(data, callback) {
      return request.send("POST", data, callback);
    },

    // If callback is non-null, it will be used for error and load events.
    send: function(method, data, callback) {
      xhr.open(method, url, true, user, password);
      if (mimeType != null && !headers.has("accept")) headers.set("accept", mimeType + ",*/*");
      if (xhr.setRequestHeader) headers.each(function(value, name) { xhr.setRequestHeader(name, value); });
      if (mimeType != null && xhr.overrideMimeType) xhr.overrideMimeType(mimeType);
      if (responseType != null) xhr.responseType = responseType;
      if (timeout > 0) xhr.timeout = timeout;
      if (callback == null && typeof data === "function") callback = data, data = null;
      if (callback != null && callback.length === 1) callback = fixCallback(callback);
      if (callback != null) request.on("error", callback).on("load", function(xhr) { callback(null, xhr); });
      event.call("beforesend", request, xhr);
      xhr.send(data == null ? null : data);
      return request;
    },

    abort: function() {
      xhr.abort();
      return request;
    },

    on: function() {
      var value = event.on.apply(event, arguments);
      return value === event ? request : value;
    }
  };

  if (callback != null) {
    if (typeof callback !== "function") throw new Error("invalid callback: " + callback);
    return request.get(callback);
  }

  return request;
});

function fixCallback(callback) {
  return function(error, xhr) {
    callback(error == null ? xhr : null);
  };
}

function hasResponse(xhr) {
  var type = xhr.responseType;
  return type && type !== "text"
      ? xhr.response // null on error
      : xhr.responseText; // "" on error
}


/***/ }),
/* 303 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var EOL = {},
    EOF = {},
    QUOTE = 34,
    NEWLINE = 10,
    RETURN = 13;

function objectConverter(columns) {
  return new Function("d", "return {" + columns.map(function(name, i) {
    return JSON.stringify(name) + ": d[" + i + "]";
  }).join(",") + "}");
}

function customConverter(columns, f) {
  var object = objectConverter(columns);
  return function(row, i) {
    return f(object(row), i, columns);
  };
}

// Compute unique columns in order of discovery.
function inferColumns(rows) {
  var columnSet = Object.create(null),
      columns = [];

  rows.forEach(function(row) {
    for (var column in row) {
      if (!(column in columnSet)) {
        columns.push(columnSet[column] = column);
      }
    }
  });

  return columns;
}

/* harmony default export */ __webpack_exports__["a"] = (function(delimiter) {
  var reFormat = new RegExp("[\"" + delimiter + "\n\r]"),
      DELIMITER = delimiter.charCodeAt(0);

  function parse(text, f) {
    var convert, columns, rows = parseRows(text, function(row, i) {
      if (convert) return convert(row, i - 1);
      columns = row, convert = f ? customConverter(row, f) : objectConverter(row);
    });
    rows.columns = columns || [];
    return rows;
  }

  function parseRows(text, f) {
    var rows = [], // output rows
        N = text.length,
        I = 0, // current character index
        n = 0, // current line number
        t, // current token
        eof = N <= 0, // current token followed by EOF?
        eol = false; // current token followed by EOL?

    // Strip the trailing newline.
    if (text.charCodeAt(N - 1) === NEWLINE) --N;
    if (text.charCodeAt(N - 1) === RETURN) --N;

    function token() {
      if (eof) return EOF;
      if (eol) return eol = false, EOL;

      // Unescape quotes.
      var i, j = I, c;
      if (text.charCodeAt(j) === QUOTE) {
        while (I++ < N && text.charCodeAt(I) !== QUOTE || text.charCodeAt(++I) === QUOTE);
        if ((i = I) >= N) eof = true;
        else if ((c = text.charCodeAt(I++)) === NEWLINE) eol = true;
        else if (c === RETURN) { eol = true; if (text.charCodeAt(I) === NEWLINE) ++I; }
        return text.slice(j + 1, i - 1).replace(/""/g, "\"");
      }

      // Find next delimiter or newline.
      while (I < N) {
        if ((c = text.charCodeAt(i = I++)) === NEWLINE) eol = true;
        else if (c === RETURN) { eol = true; if (text.charCodeAt(I) === NEWLINE) ++I; }
        else if (c !== DELIMITER) continue;
        return text.slice(j, i);
      }

      // Return last token before EOF.
      return eof = true, text.slice(j, N);
    }

    while ((t = token()) !== EOF) {
      var row = [];
      while (t !== EOL && t !== EOF) row.push(t), t = token();
      if (f && (row = f(row, n++)) == null) continue;
      rows.push(row);
    }

    return rows;
  }

  function format(rows, columns) {
    if (columns == null) columns = inferColumns(rows);
    return [columns.map(formatValue).join(delimiter)].concat(rows.map(function(row) {
      return columns.map(function(column) {
        return formatValue(row[column]);
      }).join(delimiter);
    })).join("\n");
  }

  function formatRows(rows) {
    return rows.map(formatRow).join("\n");
  }

  function formatRow(row) {
    return row.map(formatValue).join(delimiter);
  }

  function formatValue(text) {
    return text == null ? ""
        : reFormat.test(text += "") ? "\"" + text.replace(/"/g, "\"\"") + "\""
        : text;
  }

  return {
    parse: parse,
    parseRows: parseRows,
    format: format,
    formatRows: formatRows
  };
});


/***/ }),
/* 304 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__timer__ = __webpack_require__(305);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__timer__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__timer__["c"]; });
/* unused harmony reexport timerFlush */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__timeout__ = __webpack_require__(386);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__timeout__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interval__ = __webpack_require__(387);
/* unused harmony reexport interval */







/***/ }),
/* 305 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = now;
/* harmony export (immutable) */ __webpack_exports__["a"] = Timer;
/* harmony export (immutable) */ __webpack_exports__["c"] = timer;
/* unused harmony export timerFlush */
var frame = 0, // is an animation frame pending?
    timeout = 0, // is a timeout pending?
    interval = 0, // are any timers active?
    pokeDelay = 1000, // how frequently we check for clock skew
    taskHead,
    taskTail,
    clockLast = 0,
    clockNow = 0,
    clockSkew = 0,
    clock = typeof performance === "object" && performance.now ? performance : Date,
    setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer() {
  this._call =
  this._time =
  this._next = null;
}

Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};

function timer(callback, delay, time) {
  var t = new Timer;
  t.restart(callback, delay, time);
  return t;
}

function timerFlush() {
  now(); // Get the current time, if not already set.
  ++frame; // Pretend we’ve set an alarm, if we haven’t already.
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
    t = t._next;
  }
  --frame;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(), delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}

function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (frame) return; // Soonest alarm already set, or will be.
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}


/***/ }),
/* 306 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return areaRingSum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return areaStream; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adder__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__noop__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stream__ = __webpack_require__(54);





var areaRingSum = Object(__WEBPACK_IMPORTED_MODULE_0__adder__["a" /* default */])();

var areaSum = Object(__WEBPACK_IMPORTED_MODULE_0__adder__["a" /* default */])(),
    lambda00,
    phi00,
    lambda0,
    cosPhi0,
    sinPhi0;

var areaStream = {
  point: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  lineStart: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  lineEnd: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  polygonStart: function() {
    areaRingSum.reset();
    areaStream.lineStart = areaRingStart;
    areaStream.lineEnd = areaRingEnd;
  },
  polygonEnd: function() {
    var areaRing = +areaRingSum;
    areaSum.add(areaRing < 0 ? __WEBPACK_IMPORTED_MODULE_1__math__["w" /* tau */] + areaRing : areaRing);
    this.lineStart = this.lineEnd = this.point = __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */];
  },
  sphere: function() {
    areaSum.add(__WEBPACK_IMPORTED_MODULE_1__math__["w" /* tau */]);
  }
};

function areaRingStart() {
  areaStream.point = areaPointFirst;
}

function areaRingEnd() {
  areaPoint(lambda00, phi00);
}

function areaPointFirst(lambda, phi) {
  areaStream.point = areaPoint;
  lambda00 = lambda, phi00 = phi;
  lambda *= __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */];
  lambda0 = lambda, cosPhi0 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* cos */])(phi = phi / 2 + __WEBPACK_IMPORTED_MODULE_1__math__["q" /* quarterPi */]), sinPhi0 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(phi);
}

function areaPoint(lambda, phi) {
  lambda *= __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */];
  phi = phi / 2 + __WEBPACK_IMPORTED_MODULE_1__math__["q" /* quarterPi */]; // half the angular distance from south pole

  // Spherical excess E for a spherical triangle with vertices: south pole,
  // previous point, current point.  Uses a formula derived from Cagnoli’s
  // theorem.  See Todhunter, Spherical Trig. (1871), Sec. 103, Eq. (2).
  var dLambda = lambda - lambda0,
      sdLambda = dLambda >= 0 ? 1 : -1,
      adLambda = sdLambda * dLambda,
      cosPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* cos */])(phi),
      sinPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(phi),
      k = sinPhi0 * sinPhi,
      u = cosPhi0 * cosPhi + k * Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* cos */])(adLambda),
      v = k * sdLambda * Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(adLambda);
  areaRingSum.add(Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* atan2 */])(v, u));

  // Advance the previous points.
  lambda0 = lambda, cosPhi0 = cosPhi, sinPhi0 = sinPhi;
}

/* harmony default export */ __webpack_exports__["c"] = (function(object) {
  areaSum.reset();
  Object(__WEBPACK_IMPORTED_MODULE_3__stream__["a" /* default */])(object, areaStream);
  return areaSum * 2;
});


/***/ }),
/* 307 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = circleStream;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cartesian__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rotation__ = __webpack_require__(112);





// Generates a circle centered at [0°, 0°], with a given radius and precision.
function circleStream(stream, radius, delta, direction, t0, t1) {
  if (!delta) return;
  var cosRadius = Object(__WEBPACK_IMPORTED_MODULE_2__math__["g" /* cos */])(radius),
      sinRadius = Object(__WEBPACK_IMPORTED_MODULE_2__math__["t" /* sin */])(radius),
      step = direction * delta;
  if (t0 == null) {
    t0 = radius + direction * __WEBPACK_IMPORTED_MODULE_2__math__["w" /* tau */];
    t1 = radius - step / 2;
  } else {
    t0 = circleRadius(cosRadius, t0);
    t1 = circleRadius(cosRadius, t1);
    if (direction > 0 ? t0 < t1 : t0 > t1) t0 += direction * __WEBPACK_IMPORTED_MODULE_2__math__["w" /* tau */];
  }
  for (var point, t = t0; direction > 0 ? t > t1 : t < t1; t -= step) {
    point = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["g" /* spherical */])([cosRadius, -sinRadius * Object(__WEBPACK_IMPORTED_MODULE_2__math__["g" /* cos */])(t), -sinRadius * Object(__WEBPACK_IMPORTED_MODULE_2__math__["t" /* sin */])(t)]);
    stream.point(point[0], point[1]);
  }
}

// Returns the signed angle of a cartesian point relative to [cosRadius, 0, 0].
function circleRadius(cosRadius, point) {
  point = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["a" /* cartesian */])(point), point[0] -= cosRadius;
  Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["e" /* cartesianNormalizeInPlace */])(point);
  var radius = Object(__WEBPACK_IMPORTED_MODULE_2__math__["b" /* acos */])(-point[1]);
  return ((-point[2] < 0 ? -radius : radius) + __WEBPACK_IMPORTED_MODULE_2__math__["w" /* tau */] - __WEBPACK_IMPORTED_MODULE_2__math__["i" /* epsilon */]) % __WEBPACK_IMPORTED_MODULE_2__math__["w" /* tau */];
}

/* harmony default export */ __webpack_exports__["b"] = (function() {
  var center = Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])([0, 0]),
      radius = Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(90),
      precision = Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(6),
      ring,
      rotate,
      stream = {point: point};

  function point(x, y) {
    ring.push(x = rotate(x, y));
    x[0] *= __WEBPACK_IMPORTED_MODULE_2__math__["h" /* degrees */], x[1] *= __WEBPACK_IMPORTED_MODULE_2__math__["h" /* degrees */];
  }

  function circle() {
    var c = center.apply(this, arguments),
        r = radius.apply(this, arguments) * __WEBPACK_IMPORTED_MODULE_2__math__["r" /* radians */],
        p = precision.apply(this, arguments) * __WEBPACK_IMPORTED_MODULE_2__math__["r" /* radians */];
    ring = [];
    rotate = Object(__WEBPACK_IMPORTED_MODULE_3__rotation__["b" /* rotateRadians */])(-c[0] * __WEBPACK_IMPORTED_MODULE_2__math__["r" /* radians */], -c[1] * __WEBPACK_IMPORTED_MODULE_2__math__["r" /* radians */], 0).invert;
    circleStream(stream, r, p, 1);
    c = {type: "Polygon", coordinates: [ring]};
    ring = rotate = null;
    return c;
  }

  circle.center = function(_) {
    return arguments.length ? (center = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])([+_[0], +_[1]]), circle) : center;
  };

  circle.radius = function(_) {
    return arguments.length ? (radius = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), circle) : radius;
  };

  circle.precision = function(_) {
    return arguments.length ? (precision = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), circle) : precision;
  };

  return circle;
});


/***/ }),
/* 308 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {

  function compose(x, y) {
    return x = a(x, y), b(x[0], x[1]);
  }

  if (a.invert && b.invert) compose.invert = function(x, y) {
    return x = b.invert(x, y), x && a.invert(x[0], x[1]);
  };

  return compose;
});


/***/ }),
/* 309 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(2);



/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__index__["a" /* default */])(
  function() { return true; },
  clipAntimeridianLine,
  clipAntimeridianInterpolate,
  [-__WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */], -__WEBPACK_IMPORTED_MODULE_1__math__["l" /* halfPi */]]
));

// Takes a line and cuts into visible segments. Return values: 0 - there were
// intersections or the line was empty; 1 - no intersections; 2 - there were
// intersections, and the first and last segments should be rejoined.
function clipAntimeridianLine(stream) {
  var lambda0 = NaN,
      phi0 = NaN,
      sign0 = NaN,
      clean; // no intersections

  return {
    lineStart: function() {
      stream.lineStart();
      clean = 1;
    },
    point: function(lambda1, phi1) {
      var sign1 = lambda1 > 0 ? __WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */] : -__WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */],
          delta = Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(lambda1 - lambda0);
      if (Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(delta - __WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */]) < __WEBPACK_IMPORTED_MODULE_1__math__["i" /* epsilon */]) { // line crosses a pole
        stream.point(lambda0, phi0 = (phi0 + phi1) / 2 > 0 ? __WEBPACK_IMPORTED_MODULE_1__math__["l" /* halfPi */] : -__WEBPACK_IMPORTED_MODULE_1__math__["l" /* halfPi */]);
        stream.point(sign0, phi0);
        stream.lineEnd();
        stream.lineStart();
        stream.point(sign1, phi0);
        stream.point(lambda1, phi0);
        clean = 0;
      } else if (sign0 !== sign1 && delta >= __WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */]) { // line crosses antimeridian
        if (Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(lambda0 - sign0) < __WEBPACK_IMPORTED_MODULE_1__math__["i" /* epsilon */]) lambda0 -= sign0 * __WEBPACK_IMPORTED_MODULE_1__math__["i" /* epsilon */]; // handle degeneracies
        if (Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(lambda1 - sign1) < __WEBPACK_IMPORTED_MODULE_1__math__["i" /* epsilon */]) lambda1 -= sign1 * __WEBPACK_IMPORTED_MODULE_1__math__["i" /* epsilon */];
        phi0 = clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1);
        stream.point(sign0, phi0);
        stream.lineEnd();
        stream.lineStart();
        stream.point(sign1, phi0);
        clean = 0;
      }
      stream.point(lambda0 = lambda1, phi0 = phi1);
      sign0 = sign1;
    },
    lineEnd: function() {
      stream.lineEnd();
      lambda0 = phi0 = NaN;
    },
    clean: function() {
      return 2 - clean; // if intersections, rejoin first and last segments
    }
  };
}

function clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1) {
  var cosPhi0,
      cosPhi1,
      sinLambda0Lambda1 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(lambda0 - lambda1);
  return Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(sinLambda0Lambda1) > __WEBPACK_IMPORTED_MODULE_1__math__["i" /* epsilon */]
      ? Object(__WEBPACK_IMPORTED_MODULE_1__math__["d" /* atan */])((Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(phi0) * (cosPhi1 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* cos */])(phi1)) * Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(lambda1)
          - Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(phi1) * (cosPhi0 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* cos */])(phi0)) * Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(lambda0))
          / (cosPhi0 * cosPhi1 * sinLambda0Lambda1))
      : (phi0 + phi1) / 2;
}

function clipAntimeridianInterpolate(from, to, direction, stream) {
  var phi;
  if (from == null) {
    phi = direction * __WEBPACK_IMPORTED_MODULE_1__math__["l" /* halfPi */];
    stream.point(-__WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */], phi);
    stream.point(0, phi);
    stream.point(__WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */], phi);
    stream.point(__WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */], 0);
    stream.point(__WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */], -phi);
    stream.point(0, -phi);
    stream.point(-__WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */], -phi);
    stream.point(-__WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */], 0);
    stream.point(-__WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */], phi);
  } else if (Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(from[0] - to[0]) > __WEBPACK_IMPORTED_MODULE_1__math__["i" /* epsilon */]) {
    var lambda = from[0] < to[0] ? __WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */] : -__WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */];
    phi = direction * lambda / 2;
    stream.point(-lambda, phi);
    stream.point(0, phi);
    stream.point(lambda, phi);
  } else {
    stream.point(to[0], to[1]);
  }
}


/***/ }),
/* 310 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__buffer__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rejoin__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__polygonContains__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3_array__ = __webpack_require__(5);






/* harmony default export */ __webpack_exports__["a"] = (function(pointVisible, clipLine, interpolate, start) {
  return function(sink) {
    var line = clipLine(sink),
        ringBuffer = Object(__WEBPACK_IMPORTED_MODULE_0__buffer__["a" /* default */])(),
        ringSink = clipLine(ringBuffer),
        polygonStarted = false,
        polygon,
        segments,
        ring;

    var clip = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: function() {
        clip.point = pointRing;
        clip.lineStart = ringStart;
        clip.lineEnd = ringEnd;
        segments = [];
        polygon = [];
      },
      polygonEnd: function() {
        clip.point = point;
        clip.lineStart = lineStart;
        clip.lineEnd = lineEnd;
        segments = Object(__WEBPACK_IMPORTED_MODULE_4_d3_array__["d" /* merge */])(segments);
        var startInside = Object(__WEBPACK_IMPORTED_MODULE_3__polygonContains__["a" /* default */])(polygon, start);
        if (segments.length) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          Object(__WEBPACK_IMPORTED_MODULE_1__rejoin__["a" /* default */])(segments, compareIntersection, startInside, interpolate, sink);
        } else if (startInside) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          sink.lineStart();
          interpolate(null, null, 1, sink);
          sink.lineEnd();
        }
        if (polygonStarted) sink.polygonEnd(), polygonStarted = false;
        segments = polygon = null;
      },
      sphere: function() {
        sink.polygonStart();
        sink.lineStart();
        interpolate(null, null, 1, sink);
        sink.lineEnd();
        sink.polygonEnd();
      }
    };

    function point(lambda, phi) {
      if (pointVisible(lambda, phi)) sink.point(lambda, phi);
    }

    function pointLine(lambda, phi) {
      line.point(lambda, phi);
    }

    function lineStart() {
      clip.point = pointLine;
      line.lineStart();
    }

    function lineEnd() {
      clip.point = point;
      line.lineEnd();
    }

    function pointRing(lambda, phi) {
      ring.push([lambda, phi]);
      ringSink.point(lambda, phi);
    }

    function ringStart() {
      ringSink.lineStart();
      ring = [];
    }

    function ringEnd() {
      pointRing(ring[0][0], ring[0][1]);
      ringSink.lineEnd();

      var clean = ringSink.clean(),
          ringSegments = ringBuffer.result(),
          i, n = ringSegments.length, m,
          segment,
          point;

      ring.pop();
      polygon.push(ring);
      ring = null;

      if (!n) return;

      // No intersections.
      if (clean & 1) {
        segment = ringSegments[0];
        if ((m = segment.length - 1) > 0) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          sink.lineStart();
          for (i = 0; i < m; ++i) sink.point((point = segment[i])[0], point[1]);
          sink.lineEnd();
        }
        return;
      }

      // Rejoin connected segments.
      // TODO reuse ringBuffer.rejoin()?
      if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));

      segments.push(ringSegments.filter(validSegment));
    }

    return clip;
  };
});

function validSegment(segment) {
  return segment.length > 1;
}

// Intersections are sorted along the clip edge. For both antimeridian cutting
// and circle clipping, the same comparison is used.
function compareIntersection(a, b) {
  return ((a = a.x)[0] < 0 ? a[1] - __WEBPACK_IMPORTED_MODULE_2__math__["l" /* halfPi */] - __WEBPACK_IMPORTED_MODULE_2__math__["i" /* epsilon */] : __WEBPACK_IMPORTED_MODULE_2__math__["l" /* halfPi */] - a[1])
       - ((b = b.x)[0] < 0 ? b[1] - __WEBPACK_IMPORTED_MODULE_2__math__["l" /* halfPi */] - __WEBPACK_IMPORTED_MODULE_2__math__["i" /* epsilon */] : __WEBPACK_IMPORTED_MODULE_2__math__["l" /* halfPi */] - b[1]);
}


/***/ }),
/* 311 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__noop__ = __webpack_require__(32);


/* harmony default export */ __webpack_exports__["a"] = (function() {
  var lines = [],
      line;
  return {
    point: function(x, y) {
      line.push([x, y]);
    },
    lineStart: function() {
      lines.push(line = []);
    },
    lineEnd: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
    rejoin: function() {
      if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
    },
    result: function() {
      var result = lines;
      lines = [];
      line = null;
      return result;
    }
  };
});


/***/ }),
/* 312 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pointEqual__ = __webpack_require__(313);


function Intersection(point, points, other, entry) {
  this.x = point;
  this.z = points;
  this.o = other; // another intersection
  this.e = entry; // is an entry?
  this.v = false; // visited
  this.n = this.p = null; // next & previous
}

// A generalized polygon clipping algorithm: given a polygon that has been cut
// into its visible line segments, and rejoins the segments by interpolating
// along the clip edge.
/* harmony default export */ __webpack_exports__["a"] = (function(segments, compareIntersection, startInside, interpolate, stream) {
  var subject = [],
      clip = [],
      i,
      n;

  segments.forEach(function(segment) {
    if ((n = segment.length - 1) <= 0) return;
    var n, p0 = segment[0], p1 = segment[n], x;

    // If the first and last points of a segment are coincident, then treat as a
    // closed ring. TODO if all rings are closed, then the winding order of the
    // exterior ring should be checked.
    if (Object(__WEBPACK_IMPORTED_MODULE_0__pointEqual__["a" /* default */])(p0, p1)) {
      stream.lineStart();
      for (i = 0; i < n; ++i) stream.point((p0 = segment[i])[0], p0[1]);
      stream.lineEnd();
      return;
    }

    subject.push(x = new Intersection(p0, segment, null, true));
    clip.push(x.o = new Intersection(p0, null, x, false));
    subject.push(x = new Intersection(p1, segment, null, false));
    clip.push(x.o = new Intersection(p1, null, x, true));
  });

  if (!subject.length) return;

  clip.sort(compareIntersection);
  link(subject);
  link(clip);

  for (i = 0, n = clip.length; i < n; ++i) {
    clip[i].e = startInside = !startInside;
  }

  var start = subject[0],
      points,
      point;

  while (1) {
    // Find first unvisited intersection.
    var current = start,
        isSubject = true;
    while (current.v) if ((current = current.n) === start) return;
    points = current.z;
    stream.lineStart();
    do {
      current.v = current.o.v = true;
      if (current.e) {
        if (isSubject) {
          for (i = 0, n = points.length; i < n; ++i) stream.point((point = points[i])[0], point[1]);
        } else {
          interpolate(current.x, current.n.x, 1, stream);
        }
        current = current.n;
      } else {
        if (isSubject) {
          points = current.p.z;
          for (i = points.length - 1; i >= 0; --i) stream.point((point = points[i])[0], point[1]);
        } else {
          interpolate(current.x, current.p.x, -1, stream);
        }
        current = current.p;
      }
      current = current.o;
      points = current.z;
      isSubject = !isSubject;
    } while (!current.v);
    stream.lineEnd();
  }
});

function link(array) {
  if (!(n = array.length)) return;
  var n,
      i = 0,
      a = array[0],
      b;
  while (++i < n) {
    a.n = b = array[i];
    b.p = a;
    a = b;
  }
  a.n = b = array[0];
  b.p = a;
}


/***/ }),
/* 313 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(2);


/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* abs */])(a[0] - b[0]) < __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */] && Object(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* abs */])(a[1] - b[1]) < __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */];
});


/***/ }),
/* 314 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adder__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cartesian__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(2);




var sum = Object(__WEBPACK_IMPORTED_MODULE_0__adder__["a" /* default */])();

/* harmony default export */ __webpack_exports__["a"] = (function(polygon, point) {
  var lambda = point[0],
      phi = point[1],
      sinPhi = Object(__WEBPACK_IMPORTED_MODULE_2__math__["t" /* sin */])(phi),
      normal = [Object(__WEBPACK_IMPORTED_MODULE_2__math__["t" /* sin */])(lambda), -Object(__WEBPACK_IMPORTED_MODULE_2__math__["g" /* cos */])(lambda), 0],
      angle = 0,
      winding = 0;

  sum.reset();

  if (sinPhi === 1) phi = __WEBPACK_IMPORTED_MODULE_2__math__["l" /* halfPi */] + __WEBPACK_IMPORTED_MODULE_2__math__["i" /* epsilon */];
  else if (sinPhi === -1) phi = -__WEBPACK_IMPORTED_MODULE_2__math__["l" /* halfPi */] - __WEBPACK_IMPORTED_MODULE_2__math__["i" /* epsilon */];

  for (var i = 0, n = polygon.length; i < n; ++i) {
    if (!(m = (ring = polygon[i]).length)) continue;
    var ring,
        m,
        point0 = ring[m - 1],
        lambda0 = point0[0],
        phi0 = point0[1] / 2 + __WEBPACK_IMPORTED_MODULE_2__math__["q" /* quarterPi */],
        sinPhi0 = Object(__WEBPACK_IMPORTED_MODULE_2__math__["t" /* sin */])(phi0),
        cosPhi0 = Object(__WEBPACK_IMPORTED_MODULE_2__math__["g" /* cos */])(phi0);

    for (var j = 0; j < m; ++j, lambda0 = lambda1, sinPhi0 = sinPhi1, cosPhi0 = cosPhi1, point0 = point1) {
      var point1 = ring[j],
          lambda1 = point1[0],
          phi1 = point1[1] / 2 + __WEBPACK_IMPORTED_MODULE_2__math__["q" /* quarterPi */],
          sinPhi1 = Object(__WEBPACK_IMPORTED_MODULE_2__math__["t" /* sin */])(phi1),
          cosPhi1 = Object(__WEBPACK_IMPORTED_MODULE_2__math__["g" /* cos */])(phi1),
          delta = lambda1 - lambda0,
          sign = delta >= 0 ? 1 : -1,
          absDelta = sign * delta,
          antimeridian = absDelta > __WEBPACK_IMPORTED_MODULE_2__math__["o" /* pi */],
          k = sinPhi0 * sinPhi1;

      sum.add(Object(__WEBPACK_IMPORTED_MODULE_2__math__["e" /* atan2 */])(k * sign * Object(__WEBPACK_IMPORTED_MODULE_2__math__["t" /* sin */])(absDelta), cosPhi0 * cosPhi1 + k * Object(__WEBPACK_IMPORTED_MODULE_2__math__["g" /* cos */])(absDelta)));
      angle += antimeridian ? delta + sign * __WEBPACK_IMPORTED_MODULE_2__math__["w" /* tau */] : delta;

      // Are the longitudes either side of the point’s meridian (lambda),
      // and are the latitudes smaller than the parallel (phi)?
      if (antimeridian ^ lambda0 >= lambda ^ lambda1 >= lambda) {
        var arc = Object(__WEBPACK_IMPORTED_MODULE_1__cartesian__["c" /* cartesianCross */])(Object(__WEBPACK_IMPORTED_MODULE_1__cartesian__["a" /* cartesian */])(point0), Object(__WEBPACK_IMPORTED_MODULE_1__cartesian__["a" /* cartesian */])(point1));
        Object(__WEBPACK_IMPORTED_MODULE_1__cartesian__["e" /* cartesianNormalizeInPlace */])(arc);
        var intersection = Object(__WEBPACK_IMPORTED_MODULE_1__cartesian__["c" /* cartesianCross */])(normal, arc);
        Object(__WEBPACK_IMPORTED_MODULE_1__cartesian__["e" /* cartesianNormalizeInPlace */])(intersection);
        var phiArc = (antimeridian ^ delta >= 0 ? -1 : 1) * Object(__WEBPACK_IMPORTED_MODULE_2__math__["c" /* asin */])(intersection[2]);
        if (phi > phiArc || phi === phiArc && (arc[0] || arc[1])) {
          winding += antimeridian ^ delta >= 0 ? 1 : -1;
        }
      }
    }
  }

  // First, determine whether the South pole is inside or outside:
  //
  // It is inside if:
  // * the polygon winds around it in a clockwise direction.
  // * the polygon does not (cumulatively) wind around it, but has a negative
  //   (counter-clockwise) area.
  //
  // Second, count the (signed) number of times a segment crosses a lambda
  // from the point to the South pole.  If it is zero, then the point is the
  // same side as the South pole.

  return (angle < -__WEBPACK_IMPORTED_MODULE_2__math__["i" /* epsilon */] || angle < __WEBPACK_IMPORTED_MODULE_2__math__["i" /* epsilon */] && sum < -__WEBPACK_IMPORTED_MODULE_2__math__["i" /* epsilon */]) ^ (winding & 1);
});


/***/ }),
/* 315 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cartesian__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__circle__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pointEqual__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index__ = __webpack_require__(310);






/* harmony default export */ __webpack_exports__["a"] = (function(radius) {
  var cr = Object(__WEBPACK_IMPORTED_MODULE_2__math__["g" /* cos */])(radius),
      delta = 6 * __WEBPACK_IMPORTED_MODULE_2__math__["r" /* radians */],
      smallRadius = cr > 0,
      notHemisphere = Object(__WEBPACK_IMPORTED_MODULE_2__math__["a" /* abs */])(cr) > __WEBPACK_IMPORTED_MODULE_2__math__["i" /* epsilon */]; // TODO optimise for this common case

  function interpolate(from, to, direction, stream) {
    Object(__WEBPACK_IMPORTED_MODULE_1__circle__["a" /* circleStream */])(stream, radius, delta, direction, from, to);
  }

  function visible(lambda, phi) {
    return Object(__WEBPACK_IMPORTED_MODULE_2__math__["g" /* cos */])(lambda) * Object(__WEBPACK_IMPORTED_MODULE_2__math__["g" /* cos */])(phi) > cr;
  }

  // Takes a line and cuts into visible segments. Return values used for polygon
  // clipping: 0 - there were intersections or the line was empty; 1 - no
  // intersections 2 - there were intersections, and the first and last segments
  // should be rejoined.
  function clipLine(stream) {
    var point0, // previous point
        c0, // code for previous point
        v0, // visibility of previous point
        v00, // visibility of first point
        clean; // no intersections
    return {
      lineStart: function() {
        v00 = v0 = false;
        clean = 1;
      },
      point: function(lambda, phi) {
        var point1 = [lambda, phi],
            point2,
            v = visible(lambda, phi),
            c = smallRadius
              ? v ? 0 : code(lambda, phi)
              : v ? code(lambda + (lambda < 0 ? __WEBPACK_IMPORTED_MODULE_2__math__["o" /* pi */] : -__WEBPACK_IMPORTED_MODULE_2__math__["o" /* pi */]), phi) : 0;
        if (!point0 && (v00 = v0 = v)) stream.lineStart();
        // Handle degeneracies.
        // TODO ignore if not clipping polygons.
        if (v !== v0) {
          point2 = intersect(point0, point1);
          if (!point2 || Object(__WEBPACK_IMPORTED_MODULE_3__pointEqual__["a" /* default */])(point0, point2) || Object(__WEBPACK_IMPORTED_MODULE_3__pointEqual__["a" /* default */])(point1, point2)) {
            point1[0] += __WEBPACK_IMPORTED_MODULE_2__math__["i" /* epsilon */];
            point1[1] += __WEBPACK_IMPORTED_MODULE_2__math__["i" /* epsilon */];
            v = visible(point1[0], point1[1]);
          }
        }
        if (v !== v0) {
          clean = 0;
          if (v) {
            // outside going in
            stream.lineStart();
            point2 = intersect(point1, point0);
            stream.point(point2[0], point2[1]);
          } else {
            // inside going out
            point2 = intersect(point0, point1);
            stream.point(point2[0], point2[1]);
            stream.lineEnd();
          }
          point0 = point2;
        } else if (notHemisphere && point0 && smallRadius ^ v) {
          var t;
          // If the codes for two points are different, or are both zero,
          // and there this segment intersects with the small circle.
          if (!(c & c0) && (t = intersect(point1, point0, true))) {
            clean = 0;
            if (smallRadius) {
              stream.lineStart();
              stream.point(t[0][0], t[0][1]);
              stream.point(t[1][0], t[1][1]);
              stream.lineEnd();
            } else {
              stream.point(t[1][0], t[1][1]);
              stream.lineEnd();
              stream.lineStart();
              stream.point(t[0][0], t[0][1]);
            }
          }
        }
        if (v && (!point0 || !Object(__WEBPACK_IMPORTED_MODULE_3__pointEqual__["a" /* default */])(point0, point1))) {
          stream.point(point1[0], point1[1]);
        }
        point0 = point1, v0 = v, c0 = c;
      },
      lineEnd: function() {
        if (v0) stream.lineEnd();
        point0 = null;
      },
      // Rejoin first and last segments if there were intersections and the first
      // and last points were visible.
      clean: function() {
        return clean | ((v00 && v0) << 1);
      }
    };
  }

  // Intersects the great circle between a and b with the clip circle.
  function intersect(a, b, two) {
    var pa = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["a" /* cartesian */])(a),
        pb = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["a" /* cartesian */])(b);

    // We have two planes, n1.p = d1 and n2.p = d2.
    // Find intersection line p(t) = c1 n1 + c2 n2 + t (n1 ⨯ n2).
    var n1 = [1, 0, 0], // normal
        n2 = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["c" /* cartesianCross */])(pa, pb),
        n2n2 = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["d" /* cartesianDot */])(n2, n2),
        n1n2 = n2[0], // cartesianDot(n1, n2),
        determinant = n2n2 - n1n2 * n1n2;

    // Two polar points.
    if (!determinant) return !two && a;

    var c1 =  cr * n2n2 / determinant,
        c2 = -cr * n1n2 / determinant,
        n1xn2 = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["c" /* cartesianCross */])(n1, n2),
        A = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["f" /* cartesianScale */])(n1, c1),
        B = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["f" /* cartesianScale */])(n2, c2);
    Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["b" /* cartesianAddInPlace */])(A, B);

    // Solve |p(t)|^2 = 1.
    var u = n1xn2,
        w = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["d" /* cartesianDot */])(A, u),
        uu = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["d" /* cartesianDot */])(u, u),
        t2 = w * w - uu * (Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["d" /* cartesianDot */])(A, A) - 1);

    if (t2 < 0) return;

    var t = Object(__WEBPACK_IMPORTED_MODULE_2__math__["u" /* sqrt */])(t2),
        q = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["f" /* cartesianScale */])(u, (-w - t) / uu);
    Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["b" /* cartesianAddInPlace */])(q, A);
    q = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["g" /* spherical */])(q);

    if (!two) return q;

    // Two intersection points.
    var lambda0 = a[0],
        lambda1 = b[0],
        phi0 = a[1],
        phi1 = b[1],
        z;

    if (lambda1 < lambda0) z = lambda0, lambda0 = lambda1, lambda1 = z;

    var delta = lambda1 - lambda0,
        polar = Object(__WEBPACK_IMPORTED_MODULE_2__math__["a" /* abs */])(delta - __WEBPACK_IMPORTED_MODULE_2__math__["o" /* pi */]) < __WEBPACK_IMPORTED_MODULE_2__math__["i" /* epsilon */],
        meridian = polar || delta < __WEBPACK_IMPORTED_MODULE_2__math__["i" /* epsilon */];

    if (!polar && phi1 < phi0) z = phi0, phi0 = phi1, phi1 = z;

    // Check that the first point is between a and b.
    if (meridian
        ? polar
          ? phi0 + phi1 > 0 ^ q[1] < (Object(__WEBPACK_IMPORTED_MODULE_2__math__["a" /* abs */])(q[0] - lambda0) < __WEBPACK_IMPORTED_MODULE_2__math__["i" /* epsilon */] ? phi0 : phi1)
          : phi0 <= q[1] && q[1] <= phi1
        : delta > __WEBPACK_IMPORTED_MODULE_2__math__["o" /* pi */] ^ (lambda0 <= q[0] && q[0] <= lambda1)) {
      var q1 = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["f" /* cartesianScale */])(u, (-w + t) / uu);
      Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["b" /* cartesianAddInPlace */])(q1, A);
      return [q, Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["g" /* spherical */])(q1)];
    }
  }

  // Generates a 4-bit vector representing the location of a point relative to
  // the small circle's bounding box.
  function code(lambda, phi) {
    var r = smallRadius ? radius : __WEBPACK_IMPORTED_MODULE_2__math__["o" /* pi */] - radius,
        code = 0;
    if (lambda < -r) code |= 1; // left
    else if (lambda > r) code |= 2; // right
    if (phi < -r) code |= 4; // below
    else if (phi > r) code |= 8; // above
    return code;
  }

  return Object(__WEBPACK_IMPORTED_MODULE_4__index__["a" /* default */])(visible, clipLine, interpolate, smallRadius ? [0, -radius] : [-__WEBPACK_IMPORTED_MODULE_2__math__["o" /* pi */], radius - __WEBPACK_IMPORTED_MODULE_2__math__["o" /* pi */]]);
});


/***/ }),
/* 316 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__length__ = __webpack_require__(317);


var coordinates = [null, null],
    object = {type: "LineString", coordinates: coordinates};

/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  coordinates[0] = a;
  coordinates[1] = b;
  return Object(__WEBPACK_IMPORTED_MODULE_0__length__["a" /* default */])(object);
});


/***/ }),
/* 317 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adder__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__noop__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stream__ = __webpack_require__(54);





var lengthSum = Object(__WEBPACK_IMPORTED_MODULE_0__adder__["a" /* default */])(),
    lambda0,
    sinPhi0,
    cosPhi0;

var lengthStream = {
  sphere: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  point: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  lineStart: lengthLineStart,
  lineEnd: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  polygonStart: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  polygonEnd: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */]
};

function lengthLineStart() {
  lengthStream.point = lengthPointFirst;
  lengthStream.lineEnd = lengthLineEnd;
}

function lengthLineEnd() {
  lengthStream.point = lengthStream.lineEnd = __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */];
}

function lengthPointFirst(lambda, phi) {
  lambda *= __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */];
  lambda0 = lambda, sinPhi0 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(phi), cosPhi0 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* cos */])(phi);
  lengthStream.point = lengthPoint;
}

function lengthPoint(lambda, phi) {
  lambda *= __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */];
  var sinPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(phi),
      cosPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* cos */])(phi),
      delta = Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(lambda - lambda0),
      cosDelta = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* cos */])(delta),
      sinDelta = Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(delta),
      x = cosPhi * sinDelta,
      y = cosPhi0 * sinPhi - sinPhi0 * cosPhi * cosDelta,
      z = sinPhi0 * sinPhi + cosPhi0 * cosPhi * cosDelta;
  lengthSum.add(Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* atan2 */])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["u" /* sqrt */])(x * x + y * y), z));
  lambda0 = lambda, sinPhi0 = sinPhi, cosPhi0 = cosPhi;
}

/* harmony default export */ __webpack_exports__["a"] = (function(object) {
  lengthSum.reset();
  Object(__WEBPACK_IMPORTED_MODULE_3__stream__["a" /* default */])(object, lengthStream);
  return +lengthSum;
});


/***/ }),
/* 318 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__noop__ = __webpack_require__(32);


var x0 = Infinity,
    y0 = x0,
    x1 = -x0,
    y1 = x1;

var boundsStream = {
  point: boundsPoint,
  lineStart: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  lineEnd: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  polygonStart: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  polygonEnd: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  result: function() {
    var bounds = [[x0, y0], [x1, y1]];
    x1 = y1 = -(y0 = x0 = Infinity);
    return bounds;
  }
};

function boundsPoint(x, y) {
  if (x < x0) x0 = x;
  if (x > x1) x1 = x;
  if (y < y0) y0 = y;
  if (y > y1) y1 = y;
}

/* harmony default export */ __webpack_exports__["a"] = (boundsStream);


/***/ }),
/* 319 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__conicEqualArea__ = __webpack_require__(296);


/* harmony default export */ __webpack_exports__["a"] = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__conicEqualArea__["b" /* default */])()
      .parallels([29.5, 45.5])
      .scale(1070)
      .translate([480, 250])
      .rotate([96, 0])
      .center([-0.6, 38.7]);
});


/***/ }),
/* 320 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = equirectangularRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(21);


function equirectangularRaw(lambda, phi) {
  return [lambda, phi];
}

equirectangularRaw.invert = equirectangularRaw;

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__index__["a" /* default */])(equirectangularRaw)
      .scale(152.63);
});


/***/ }),
/* 321 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transform__ = __webpack_require__(300);


/* harmony default export */ __webpack_exports__["a"] = (function(topology) {
  var t = Object(__WEBPACK_IMPORTED_MODULE_0__transform__["a" /* default */])(topology.transform), key,
      x0 = Infinity, y0 = x0, x1 = -x0, y1 = -x0;

  function bboxPoint(p) {
    p = t(p);
    if (p[0] < x0) x0 = p[0];
    if (p[0] > x1) x1 = p[0];
    if (p[1] < y0) y0 = p[1];
    if (p[1] > y1) y1 = p[1];
  }

  function bboxGeometry(o) {
    switch (o.type) {
      case "GeometryCollection": o.geometries.forEach(bboxGeometry); break;
      case "Point": bboxPoint(o.coordinates); break;
      case "MultiPoint": o.coordinates.forEach(bboxPoint); break;
    }
  }

  topology.arcs.forEach(function(arc) {
    var i = -1, n = arc.length, p;
    while (++i < n) {
      p = t(arc[i], i);
      if (p[0] < x0) x0 = p[0];
      if (p[0] > x1) x1 = p[0];
      if (p[1] < y0) y0 = p[1];
      if (p[1] > y1) y1 = p[1];
    }
  });

  for (key in topology.objects) {
    bboxGeometry(topology.objects[key]);
  }

  return [x0, y0, x1, y1];
});


/***/ }),
/* 322 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x;
});


/***/ }),
/* 323 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(topology, arcs) {
  var stitchedArcs = {},
      fragmentByStart = {},
      fragmentByEnd = {},
      fragments = [],
      emptyIndex = -1;

  // Stitch empty arcs first, since they may be subsumed by other arcs.
  arcs.forEach(function(i, j) {
    var arc = topology.arcs[i < 0 ? ~i : i], t;
    if (arc.length < 3 && !arc[1][0] && !arc[1][1]) {
      t = arcs[++emptyIndex], arcs[emptyIndex] = i, arcs[j] = t;
    }
  });

  arcs.forEach(function(i) {
    var e = ends(i),
        start = e[0],
        end = e[1],
        f, g;

    if (f = fragmentByEnd[start]) {
      delete fragmentByEnd[f.end];
      f.push(i);
      f.end = end;
      if (g = fragmentByStart[end]) {
        delete fragmentByStart[g.start];
        var fg = g === f ? f : f.concat(g);
        fragmentByStart[fg.start = f.start] = fragmentByEnd[fg.end = g.end] = fg;
      } else {
        fragmentByStart[f.start] = fragmentByEnd[f.end] = f;
      }
    } else if (f = fragmentByStart[end]) {
      delete fragmentByStart[f.start];
      f.unshift(i);
      f.start = start;
      if (g = fragmentByEnd[start]) {
        delete fragmentByEnd[g.end];
        var gf = g === f ? f : g.concat(f);
        fragmentByStart[gf.start = g.start] = fragmentByEnd[gf.end = f.end] = gf;
      } else {
        fragmentByStart[f.start] = fragmentByEnd[f.end] = f;
      }
    } else {
      f = [i];
      fragmentByStart[f.start = start] = fragmentByEnd[f.end = end] = f;
    }
  });

  function ends(i) {
    var arc = topology.arcs[i < 0 ? ~i : i], p0 = arc[0], p1;
    if (topology.transform) p1 = [0, 0], arc.forEach(function(dp) { p1[0] += dp[0], p1[1] += dp[1]; });
    else p1 = arc[arc.length - 1];
    return i < 0 ? [p1, p0] : [p0, p1];
  }

  function flush(fragmentByEnd, fragmentByStart) {
    for (var k in fragmentByEnd) {
      var f = fragmentByEnd[k];
      delete fragmentByStart[f.start];
      delete f.start;
      delete f.end;
      f.forEach(function(i) { stitchedArcs[i < 0 ? ~i : i] = 1; });
      fragments.push(f);
    }
  }

  flush(fragmentByEnd, fragmentByStart);
  flush(fragmentByStart, fragmentByEnd);
  arcs.forEach(function(i) { if (!stitchedArcs[i < 0 ? ~i : i]) fragments.push([i]); });

  return fragments;
});


/***/ }),
/* 324 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__identity__ = __webpack_require__(322);


/* harmony default export */ __webpack_exports__["a"] = (function(transform) {
  if (transform == null) return __WEBPACK_IMPORTED_MODULE_0__identity__["a" /* default */];
  var x0,
      y0,
      kx = transform.scale[0],
      ky = transform.scale[1],
      dx = transform.translate[0],
      dy = transform.translate[1];
  return function(input, i) {
    if (!i) x0 = y0 = 0;
    var j = 2,
        n = input.length,
        output = new Array(n),
        x1 = Math.round((input[0] - dx) / kx),
        y1 = Math.round((input[1] - dy) / ky);
    output[0] = x1 - x0, x0 = x1;
    output[1] = y1 - y0, y0 = y1;
    while (j < n) output[j] = input[j], ++j;
    return output;
  };
});


/***/ }),
/* 325 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_request__ = __webpack_require__(302);
/* unused harmony reexport request */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_html__ = __webpack_require__(376);
/* unused harmony reexport html */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_json__ = __webpack_require__(377);
/* unused harmony reexport json */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_text__ = __webpack_require__(378);
/* unused harmony reexport text */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_xml__ = __webpack_require__(379);
/* unused harmony reexport xml */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_csv__ = __webpack_require__(380);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__src_csv__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_tsv__ = __webpack_require__(383);
/* unused harmony reexport tsv */









/***/ }),
/* 326 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dispatch__ = __webpack_require__(375);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__dispatch__["a"]; });



/***/ }),
/* 327 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dsv__ = __webpack_require__(303);
/* unused harmony reexport dsvFormat */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__csv__ = __webpack_require__(381);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__csv__["a"]; });
/* unused harmony reexport csvParseRows */
/* unused harmony reexport csvFormat */
/* unused harmony reexport csvFormatRows */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tsv__ = __webpack_require__(382);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__tsv__["a"]; });
/* unused harmony reexport tsvParseRows */
/* unused harmony reexport tsvFormat */
/* unused harmony reexport tsvFormatRows */





/***/ }),
/* 328 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__request__ = __webpack_require__(302);


/* harmony default export */ __webpack_exports__["a"] = (function(defaultMimeType, parse) {
  return function(url, row, callback) {
    if (arguments.length < 3) callback = row, row = null;
    var r = Object(__WEBPACK_IMPORTED_MODULE_0__request__["a" /* default */])(url).mimeType(defaultMimeType);
    r.row = function(_) { return arguments.length ? r.response(responseOf(parse, row = _)) : row; };
    r.row(row);
    return callback ? r.get(callback) : r;
  };
});

function responseOf(parse, row) {
  return function(request) {
    return parse(request.responseText, row);
  };
}


/***/ }),
/* 329 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transition_schedule__ = __webpack_require__(14);


/* harmony default export */ __webpack_exports__["a"] = (function(node, name) {
  var schedules = node.__transition,
      schedule,
      active,
      empty = true,
      i;

  if (!schedules) return;

  name = name == null ? null : name + "";

  for (i in schedules) {
    if ((schedule = schedules[i]).name !== name) { empty = false; continue; }
    active = schedule.state > __WEBPACK_IMPORTED_MODULE_0__transition_schedule__["d" /* STARTING */] && schedule.state < __WEBPACK_IMPORTED_MODULE_0__transition_schedule__["b" /* ENDING */];
    schedule.state = __WEBPACK_IMPORTED_MODULE_0__transition_schedule__["a" /* ENDED */];
    schedule.timer.stop();
    schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
    delete schedules[i];
  }

  if (empty) delete node.__transition;
});


/***/ }),
/* 330 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__(8);



/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var c;
  return (typeof b === "number" ? __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["d" /* interpolateNumber */]
      : b instanceof __WEBPACK_IMPORTED_MODULE_0_d3_color__["a" /* color */] ? __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["e" /* interpolateRgb */]
      : (c = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["a" /* color */])(b)) ? (b = c, __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["e" /* interpolateRgb */])
      : __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["h" /* interpolateString */])(a, b);
});


/***/ }),
/* 331 */,
/* 332 */,
/* 333 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__test_map__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_circle__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__test_animate__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_area__ = __webpack_require__(227);






let exampleList = document.getElementById('examples');
let examples = [
  'circle',
  'area',
  'map',
  'ross'
]

for (let example of examples) {
  exampleList.innerHTML += '<a href="?' + example + '">' + example + '</a><br />';
}

let data = {
  json: [{
      time: 1,
      value: 130
    },
    {
      time: 2,
      value: 391
    },
    {
      time: 3,
      value: 230
    },
    {
      time: 4,
      value: 630
    },
    {
      time: 5,
      value: 500
    },
  ],
  vmap: {
    x: 'time',
    y: 'value',
    size: 10,
    color: 'steelblue'
  }
}

let view = {
  container: 'body',
  width: 800,
  height: 500,
  padding: {
    left: 100,
    right: 10,
    top: 10,
    bottom: 60
  },
  axes: true
}

let url = new URL(window.location.href);

if (url.searchParams.get('map') !== null) {
  Object(__WEBPACK_IMPORTED_MODULE_0__test_map__["a" /* default */])();
} else if (url.searchParams.get('area') !== null) {
  new __WEBPACK_IMPORTED_MODULE_3__src_area__["a" /* default */](data, view).render();
} else if (url.searchParams.get('ext') !== null) {
  testP4ext();
} else if (url.searchParams.get('ross') !== null) {
  Object(__WEBPACK_IMPORTED_MODULE_2__test_animate__["a" /* default */])(view);
} else {
  new __WEBPACK_IMPORTED_MODULE_1__src_circle__["a" /* default */](data, view).render();
}

/***/ }),
/* 334 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_airports_json__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_airports_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__assets_airports_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_map__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_request__ = __webpack_require__(325);




/* harmony default export */ __webpack_exports__["a"] = (function() {
    Object(__WEBPACK_IMPORTED_MODULE_2_d3_request__["a" /* csv */])('../assets/governments.csv', function(rows){

        let data = {
            json: rows,
            join: {
                field: 'ISO Country code',
                type: 'code'
            },
            vmap: {
                color: 'population'
            }
        };
    
        let view = {
            container: 'body',
            width: 1000,
            height: 800,
            scale: 150,
            projection: 'Mercator',
            padding: {left: 50, right: 50, top: 50, bottom: 50},
        }
    
        let testMap = new __WEBPACK_IMPORTED_MODULE_1__src_map__["a" /* default */](data, view).render();
        testMap.addLayer({type: 'point', data: __WEBPACK_IMPORTED_MODULE_0__assets_airports_json___default.a, feature: 'airports'});
    })

});

/***/ }),
/* 335 */
/***/ (function(module, exports) {

module.exports = {"type":"Topology","transform":{"scale":[0.032229964456445645,0.006392461796179619],"translate":[-176.6460306,7.367222]},"objects":{"airports":{"type":"MultiPoint","coordinates":[[2712,3846],[2532,3647],[2236,4939],[3059,5533],[2939,3648],[2744,4243],[2793,3986],[2744,5587],[2978,5210],[2619,5174],[2708,4155],[2491,6181],[2769,5342],[2446,3762],[1881,5042],[2822,3925],[2747,5416],[2389,6494],[2709,4093],[3172,5328],[1923,5414],[2841,5309],[2534,3936],[2849,5507],[2438,5279],[2802,3936],[2303,6403],[2437,5206],[2702,3972],[2746,3872],[2954,3708],[2398,5360],[2685,4164],[3091,4927],[2818,4476],[2778,3999],[2931,4537],[426,8536],[3283,5797],[2463,5512],[3230,5510],[3221,5748],[3245,5300],[2730,5480],[2479,5435],[2804,5472],[2379,5885],[2191,4320],[2123,4434],[2447,4103],[2409,5306],[2514,4383],[2497,4506],[2481,4196],[3038,5590],[2496,5167],[2858,5334],[3098,5555],[2381,4949],[2865,4849],[2836,3790],[2802,3703],[2833,3754],[2556,5532],[1843,4747],[1902,4442],[1929,4527],[2640,4148],[2746,4422],[2746,4480],[2758,4497],[2691,4223],[2651,3982],[1737,4814],[1690,5096],[1702,4875],[1631,5109],[1701,5186],[2694,3743],[2767,3699],[2623,3536],[2641,3785],[2605,3847],[2585,3851],[1775,6506],[1670,6364],[2190,4876],[2410,5185],[3029,4657],[2358,5622],[2060,4590],[2738,5480],[2562,5879],[2938,5188],[3180,5359],[1875,5410],[2828,3835],[3015,5296],[2748,5425],[2846,3759],[2490,3574],[2716,5401],[2617,6327],[2779,3704],[2438,5112],[2566,5799],[2835,5644],[2493,4768],[3160,5256],[2809,3761],[2662,4038],[2537,6027],[2386,4039],[2891,3718],[2745,4287],[1046,8458],[440,8375],[2898,5276],[2861,3813],[1654,5573],[2906,5227],[2847,3698],[2300,4600],[2694,3831],[3152,5058],[545,8075],[2901,4219],[2862,4588],[2888,4193],[2687,4029],[3155,5070],[1335,7659],[2863,4325],[2892,4357],[2882,4574],[2823,4541],[2796,3922],[3332,5888],[3193,5463],[3207,5670],[3271,5417],[2746,5370],[2484,5923],[2891,5472],[2414,5637],[2542,5844],[2455,5932],[2423,5865],[2467,4189],[2467,4178],[2477,4188],[2445,4037],[2886,5322],[2954,5285],[1949,4477],[2943,5281],[3118,5602],[2672,4905],[2733,4959],[2632,4865],[2750,4995],[3182,5474],[2791,5189],[2824,3672],[2452,4299],[2456,4346],[2413,4567],[2347,4706],[2670,3554],[1930,4758],[2019,4752],[1980,4770],[2618,4296],[2672,4032],[2762,4210],[2797,4571],[2722,4561],[2616,4654],[3223,5234],[3160,4982],[3153,5256],[3138,5194],[2471,6144],[2417,4203],[1667,4946],[1718,4823],[2417,4437],[1687,5302],[2621,3801],[2675,3791],[2756,3676],[1686,6216],[2172,6085],[1758,6094],[1853,6386],[2026,5456],[2140,4605],[2323,5419],[2215,5111],[2219,4859],[2127,4914],[2800,4161],[2733,4030],[3185,5415],[2254,6187],[2180,5113],[2599,5886],[2435,4045],[3215,5382],[2922,4999],[2718,4209],[3130,5231],[2942,3583],[2727,3866],[3214,5223],[2410,3405],[2899,4372],[2904,3587],[2164,4608],[2848,3806],[2718,4279],[2436,2983],[2818,4054],[3165,4989],[2484,3384],[1828,5418],[2911,4181],[2494,5844],[2947,4214],[2861,4828],[2946,3487],[2993,5284],[2959,5294],[2044,5894],[2845,4398],[2845,4533],[703,7847],[406,8707],[657,8446],[3240,5634],[3328,5850],[3238,5712],[2964,5256],[2437,6070],[2318,3971],[2501,4534],[2505,4055],[2630,3971],[2976,5161],[3009,5098],[3019,5039],[3029,5111],[2724,5012],[2573,4629],[2769,4691],[2746,5150],[2966,3030],[2947,3819],[2924,4007],[2937,3993],[2857,3634],[2324,4726],[2392,4305],[725,8764],[2754,4653],[2773,4359],[2539,4391],[2704,3908],[2690,4366],[1728,5096],[1681,4882],[1749,4653],[1813,4606],[2429,4401],[2783,5947],[1699,4882],[2730,3798],[2781,3640],[2741,3619],[2444,3356],[1680,6271],[1665,5933],[1699,5508],[1796,6317],[2296,4195],[2159,4678],[2217,5130],[2308,5120],[2293,5121],[3089,4885],[3105,4841],[1145,8165],[2545,5478],[2295,3959],[3266,5437],[1942,6125],[2816,3705],[2698,4192],[3135,4982],[1807,6219],[2938,4245],[2817,5500],[1736,5979],[2339,4787],[1652,5385],[2023,5180],[2621,4505],[3037,4381],[479,8916],[1981,6104],[2018,4848],[3164,5167],[2757,3804],[2785,4208],[2888,4543],[2996,4326],[2468,4740],[3245,5433],[3322,5959],[3288,5433],[3231,5321],[2866,5677],[2740,5450],[2877,5659],[2649,6073],[2775,5908],[2806,5828],[2571,3864],[2563,3988],[2489,4448],[2812,5642],[2405,5892],[2944,5261],[2928,5246],[3087,5610],[2806,5579],[2933,4935],[2862,5091],[2967,3930],[2901,4103],[2476,4955],[2323,4790],[2694,4906],[2336,4863],[2709,5129],[2698,4974],[2810,4560],[2750,4070],[2623,4097],[2700,5229],[3174,5156],[2504,6240],[2452,6313],[1727,4676],[2459,4319],[2388,4348],[2427,4224],[1713,4618],[2537,4569],[2446,3284],[2506,3379],[2611,3565],[2580,3782],[2605,3578],[1643,5433],[1652,5497],[1752,5925],[2878,5641],[2672,4924],[2625,5893],[2472,3526],[2805,5392],[1978,6067],[1978,6275],[2064,6381],[2260,5157],[2733,5853],[2632,5571],[2563,5318],[1278,8113],[2887,3551],[3126,5101],[2077,5259],[2017,4999],[2631,4490],[2819,5661],[2935,3516],[2217,6374],[3005,4383],[3332,5915],[3192,5371],[3006,4305],[2911,5373],[2556,3593],[2874,4300],[2404,6270],[3189,5415],[2861,4214],[2999,4277],[3166,5186],[2363,5204],[2896,3915],[2851,5704],[2978,4899],[2380,4865],[2105,6445],[2221,5106],[2858,4264],[2477,3974],[1930,4248],[2620,5680],[445,8369],[2838,4169],[2605,4463],[2812,4274],[2864,4070],[2821,4240],[3189,5505],[3180,5536],[3203,5711],[3192,5709],[3220,5369],[3222,5404],[2602,5260],[2851,5538],[2398,5122],[2554,3880],[2534,3962],[2986,5331],[3032,5527],[2964,5070],[3070,5477],[2993,5018],[2928,4743],[2920,5156],[2787,5047],[2910,5186],[2939,3730],[2898,3730],[2887,3666],[2950,3658],[698,8200],[749,7908],[2613,5219],[352,8323],[2576,4539],[2635,4292],[2612,4416],[2787,4604],[2645,4267],[2668,4542],[3174,5281],[2460,4595],[2537,4152],[2429,4601],[2054,4446],[2704,3699],[2753,3770],[2754,3612],[2664,6166],[2613,3613],[2746,3581],[1620,5482],[1709,5992],[1842,5942],[1677,5920],[1761,5052],[2473,3924],[2037,6436],[2205,6265],[2106,5119],[2229,4744],[2438,5435],[3042,4260],[523,8575],[1447,7592],[2768,5223],[2997,4038],[2496,5123],[2450,3517],[2417,6098],[846,9038],[2891,4105],[2201,3952],[2991,4204],[2508,4891],[2807,3654],[2851,5837],[2953,3636],[1705,6137],[2895,5243],[2584,4846],[1636,6046],[3342,5777],[2738,5542],[3301,5985],[2727,4168],[2696,4082],[559,8121],[2853,3999],[3189,5582],[3249,5389],[3197,5525],[839,9495],[2870,5573],[2336,4041],[2595,3976],[3062,5571],[2878,5243],[3010,5163],[2885,5376],[838,8375],[2805,5132],[1789,5793],[3033,4180],[2323,4863],[2783,4230],[2647,4207],[2614,4142],[2746,4688],[2464,6177],[2469,6256],[691,8705],[608,8035],[676,8230],[2441,3618],[2759,3607],[2497,3423],[2580,3609],[450,8779],[2468,3866],[2170,3834],[2362,3361],[1058,8723],[2016,5929],[2059,6293],[2108,4588],[2331,5704],[3013,4432],[1310,7967],[795,8787],[2401,4111],[3047,4151],[2770,3850],[1917,4470],[2725,5568],[1674,5969],[1663,5699],[2969,5303],[2471,3567],[1736,5611],[1355,7734],[2694,5724],[1823,6441],[2924,4044],[1872,6469],[2273,5795],[1942,4609],[1373,7680],[1814,6302],[2866,3942],[2866,4045],[2878,4353],[2942,4544],[745,9258],[3212,5728],[3148,5577],[3261,5489],[3246,5819],[3109,5560],[2835,5596],[2439,6190],[2530,4276],[3006,5356],[2961,5105],[2835,4734],[2959,4134],[2982,4040],[2942,4154],[2443,5491],[2425,4524],[1045,8754],[2939,4769],[2634,4513],[2636,5125],[2663,4288],[2675,4406],[3185,5221],[3185,5219],[2360,5411],[2532,3596],[725,7798],[2419,3663],[2068,6013],[1630,5727],[2091,5985],[1939,6082],[2106,5997],[2258,5620],[2942,4645],[2308,5729],[2112,4829],[2869,3679],[2824,3764],[1837,6236],[2667,5539],[2978,3917],[2975,5086],[1674,6434],[2066,5148],[2885,3804],[2918,5530],[2902,5622],[1664,5719],[2891,5646],[2996,4974],[2800,3745],[2048,6332],[2760,3960],[2751,3925],[2836,3980],[2832,4030],[2936,4470],[3227,5469],[2900,5502],[2494,4015],[2531,4102],[2453,3824],[2421,3840],[3063,5602],[2965,5331],[2882,5169],[2919,4723],[1282,8147],[2786,4707],[2487,5488],[929,8369],[2646,4106],[2578,4249],[2688,4430],[2569,4402],[2683,4538],[2685,3533],[3088,5445],[3141,5063],[1940,6289],[1996,5970],[1658,5866],[2039,6122],[1997,6403],[2188,4919],[2423,5118],[3124,4410],[2513,4196],[3293,5755],[2684,5705],[2249,5285],[2851,6026],[2339,5884],[1377,7567],[2466,3545],[2083,4432],[2422,4341],[2673,3991],[2713,5590],[2731,5555],[2959,4009],[1910,6507],[2915,5355],[2804,4202],[2804,4228],[2833,4543],[3288,5885],[2746,5721],[2471,5991],[2822,5594],[2449,5870],[2454,5735],[2453,4049],[3009,5403],[2967,5142],[2993,5230],[2367,4765],[1393,7512],[2730,4258],[1937,6308],[1742,6280],[3005,3993],[2213,6165],[2021,6095],[2407,5505],[2569,5911],[2695,5620],[2513,4346],[3349,5758],[2679,5618],[2387,4417],[2467,5297],[2567,4588],[2487,4523],[2443,6503],[1350,7626],[2237,6024],[2374,5840],[2964,4057],[2423,5348],[2879,4108],[540,8481],[2770,4269],[2834,4274],[2961,4289],[597,7846],[2834,5714],[2395,5815],[2396,5608],[2268,5977],[2401,6432],[2832,5521],[3038,5552],[3004,5199],[3045,5577],[3043,5602],[3036,5177],[2687,5139],[2897,4778],[677,8144],[2570,4914],[2432,4908],[2436,4739],[2712,4057],[2644,3986],[2615,4217],[2209,6482],[1917,6226],[2019,6024],[2087,6286],[1767,5957],[2117,6489],[1844,5021],[2145,5267],[2302,5533],[2324,5600],[2399,5694],[3122,4541],[2823,4191],[587,8062],[1281,7772],[1668,5348],[1696,5400],[433,8286],[508,8088],[554,7647],[418,8214],[2842,3497],[2464,4752],[2833,4691],[1740,5336],[3140,5206],[2387,3917],[3412,1733],[2173,4329],[2427,5957],[2868,3780],[2837,5885],[2868,3870],[3307,5300],[2578,5742],[2464,3792],[1630,5257],[3166,5020],[3060,4278],[2526,6113],[2872,5397],[2481,4292],[0,6963],[2470,4213],[749,7881],[2476,4004],[2345,5079],[2535,5371],[2167,4345],[2583,5680],[2609,3748],[1326,7758],[2989,5126],[2506,5199],[583,9345],[3246,5543],[2038,5529],[2461,4007],[3000,5160],[1305,7843],[2588,4045],[2937,4067],[2430,5584],[2614,5931],[2895,4158],[1303,7646],[2483,5299],[2291,5426],[2824,5121],[2715,5911],[2946,4111],[2531,5325],[2574,6129],[2744,4026],[3170,5004],[2609,4807],[566,7656],[2758,4886],[1831,4150],[2888,4244],[542,7593],[75,7016],[2962,4354],[478,8375],[696,7754],[620,8026],[2278,5132],[772,9506],[2953,5267],[1351,7542],[2769,3933],[3190,5534],[2439,3187],[2192,3984],[2686,4931],[2613,5504],[2196,4703],[1810,6058],[2813,3996],[2325,4357],[2920,3780],[2853,5624],[2887,4925],[2575,5416],[2816,4101],[826,8417],[2914,4243],[2588,5909],[530,8480],[2840,5361],[510,8647],[2378,5508],[2437,4660],[1964,5668],[2873,5215],[3050,5151],[2227,5037],[1686,4825],[2943,2938],[2888,5899],[2825,4332],[1844,4256],[1351,7538],[458,8195],[795,9830],[3210,5526],[853,8384],[2629,3546],[2882,5452],[964,9503],[2659,4498],[2735,5382],[3122,5729],[2696,6032],[2693,3594],[2164,4983],[2560,4506],[3261,5540],[3086,4525],[2554,3934],[2810,4098],[1637,6068],[2817,5304],[2659,6129],[2558,4025],[596,9871],[2861,4110],[2239,3986],[2734,5770],[2466,5873],[3315,5780],[2440,5244],[371,8652],[2597,5678],[1723,4941],[2830,3949],[2450,3570],[2699,5875],[3059,4586],[2419,4600],[2919,4390],[2951,3163],[3131,5314],[2030,3917],[1806,4073],[2636,5304],[516,9897],[2681,4343],[1690,6381],[2555,5586],[2520,6022],[2398,4275],[2865,5182],[2213,4545],[2924,3735],[1974,4629],[2916,3835],[2826,5454],[3207,5640],[1780,5011],[3106,5586],[3294,5646],[3302,5900],[3224,5442],[2815,4989],[1854,5198],[2906,5696],[2438,3494],[2513,5938],[2399,3724],[3006,4263],[2389,5329],[2985,4668],[2001,4746],[2661,5769],[2995,2974],[841,8455],[2545,6470],[2083,4726],[3225,5408],[2604,4344],[3211,5286],[2210,5954],[3268,5491],[2799,5437],[459,8355],[3040,5386],[2266,5398],[1686,6282],[2389,4614],[1786,4390],[2748,3638],[2798,4923],[2644,6238],[2334,4432],[2854,3692],[2810,4350],[3123,5450],[832,8473],[3345,5856],[3359,5800],[2924,3808],[2245,6097],[2789,4097],[3259,5287],[2478,5152],[959,8858],[1808,4693],[2113,6013],[2354,6164],[2809,5534],[2219,5090],[2535,6279],[2940,5241],[2412,3965],[1825,5861],[2946,5342],[2922,3301],[2963,4758],[2476,5778],[2961,4681],[1921,4106],[1678,6480],[3180,5134],[2693,4877],[2003,5347],[2793,4971],[2722,5179],[3272,5820],[2432,3656],[2557,3551],[2791,4498],[1297,7778],[1855,4154],[2955,4050],[1789,5666],[2568,5425],[1874,5662],[1624,5429],[3277,5474],[2943,3218],[2064,5509],[2611,4536],[2563,3532],[2953,3737],[3397,1740],[2560,6105],[2653,5227],[2457,2900],[616,9999],[2828,4762],[3339,5794],[1026,9818],[2835,5465],[1990,6036],[2448,6014],[3000,5226],[779,9315],[3211,5804],[1857,4613],[2404,5382],[3037,5564],[2553,4837],[1808,4197],[3014,4486],[2986,5225],[480,9169],[2438,5375],[2501,4598],[1682,6430],[2637,4436],[3280,5509],[1896,4008],[2410,3821],[2799,4630],[3102,4975],[2483,6082],[2692,3667],[2936,4016],[1984,4075],[1102,8871],[2169,5790],[1950,5502],[2032,6008],[2665,5300],[889,8245],[2737,5327],[2698,5181],[2640,5422],[2755,5336],[2610,5533],[2702,5592],[2742,5180],[2688,5656],[2704,5661],[2740,5525],[2760,5320],[2835,5335],[2803,5318],[2668,5250],[2655,3743],[2705,5391],[2707,5264],[2724,5468],[1748,4504],[2748,5468],[1707,4765],[2808,5416],[2830,5773],[2963,4156],[2144,5182],[2953,5248],[2280,4548],[3370,6179],[2571,5533],[3037,5044],[2509,5301],[2587,5974],[2345,5015],[1829,4183],[2850,4058],[1693,4790],[2607,5585],[431,7483],[1971,4745],[2602,4107],[2949,5100],[2904,3405],[2981,4210],[2282,5548],[967,8310],[3176,5241],[1626,5383],[3230,5448],[2473,5201],[988,9105],[2909,4271],[2839,5057],[2796,3662],[2738,4583],[2110,4682],[2491,3652],[2783,5101],[383,8256],[2092,4002],[2515,4650],[1349,7526],[2918,3363],[3121,4876],[2952,5349],[2701,4670],[3094,4945],[2762,5395],[2013,4002],[2837,4328],[2011,4051],[2441,4337],[3046,4813],[993,9091],[2997,3993],[2579,5070],[2641,5667],[1699,5072],[2635,5399],[2000,6329],[1021,9273],[2539,5424],[2712,4645],[2859,6082],[3065,4874],[574,8525],[2991,4994],[2676,6331],[2881,3851],[3003,4122],[2672,4213],[2482,6331],[2515,5532],[959,8318],[2768,4576],[1076,8870],[1841,4029],[2941,5325],[2727,5826],[2411,4406],[2490,3632],[1648,6375],[561,8052],[1665,6149],[2969,4356],[2913,3224],[1785,4199],[2908,5104],[2741,5111],[2735,6226],[2665,5724],[2584,5264],[3235,5632],[2450,5034],[2245,3906],[1830,4162],[2301,5273],[2518,4740],[2468,3796],[2075,4910],[2098,5811],[1856,6321],[2977,3281],[2396,3828],[3262,5605],[2610,6153],[2232,4918],[2402,3299],[2619,4919],[3038,4208],[3112,4583],[1812,4149],[2177,5559],[2683,4881],[3454,1712],[2857,5180],[2476,4435],[3309,5369],[1010,9145],[3038,4136],[2951,3593],[1770,4495],[2455,3191],[1841,4029],[2489,3857],[2630,4037],[2949,4850],[2731,4309],[2373,5152],[2845,3934],[2402,4375],[2552,5264],[2840,4471],[1994,6451],[2838,4108],[2686,5193],[2902,3483],[3049,4318],[2967,4161],[2478,4471],[2746,4806],[2265,5688],[2853,4955],[2639,4520],[2282,4232],[1655,5808],[2834,5934],[2698,5852],[2590,3573],[2678,5391],[2940,3883],[999,8481],[3045,4602],[820,9367],[1896,3958],[2520,3595],[1765,4978],[2867,3730],[3096,5138],[2906,5029],[2228,5285],[2466,5009],[2377,5240],[3119,5430],[2845,4237],[1073,8557],[2383,3309],[2271,6072],[2333,6302],[2315,5892],[2365,6486],[2495,5671],[3029,5521],[2692,6062],[3081,5559],[2533,5766],[2275,6501],[2427,6474],[2320,6170],[2288,6415],[2884,4132],[3041,5562],[2846,5953],[2897,5584],[2906,5542],[2965,3412],[1857,4299],[2475,3985],[3019,4568],[3280,5618],[2867,5089],[2906,3941],[2666,5480],[3090,4925],[612,9319],[2783,4268],[2777,4901],[2379,4754],[3208,5557],[2723,5079],[2958,3394],[430,9182],[2634,5617],[2233,5082],[2551,4173],[2905,5481],[1837,6351],[2861,5314],[2470,3993],[2210,5542],[2829,3747],[2299,4482],[2291,6168],[2728,5407],[3021,5494],[2878,4473],[562,8084],[2620,6175],[2695,5655],[1988,5927],[1781,4439],[1721,5983],[2901,5148],[238,9134],[2138,3894],[2589,4902],[3091,5043],[2935,4082],[2847,4279],[2521,5415],[2762,5136],[3139,4968],[2742,5403],[3061,4322],[2909,3771],[2584,3670],[2137,4659],[2349,3442],[2574,5345],[3069,5507],[1989,5008],[2505,6172],[2572,3937],[2465,4041],[2797,3603],[2894,5450],[2489,4157],[2441,4239],[2080,3770],[3032,5289],[313,7279],[2315,4456],[427,8227],[2850,4725],[2411,6374],[2670,5356],[1678,4814],[2003,4117],[2516,3550],[2913,4878],[2690,4600],[3200,5319],[2496,5884],[2989,4019],[3149,5156],[2706,4478],[2624,6156],[2287,3788],[2277,3924],[2154,3956],[2272,4002],[2276,4050],[2299,3905],[2422,4027],[2333,4515],[2068,4136],[1980,4161],[2280,3873],[2187,3777],[2263,3600],[2341,4513],[1969,4259],[2303,4359],[2018,3979],[1984,4003],[2166,4267],[2248,4380],[2081,4496],[2102,4065],[2056,3853],[1101,8980],[2225,5426],[2408,5218],[1751,6262],[2642,5865],[2568,5486],[3117,4519],[2244,5712],[3105,4483],[2815,3743],[1924,4286],[454,8267],[3238,5558],[2133,5112],[2788,4037],[2258,5845],[2528,3479],[3239,5869],[2701,5513],[2553,5419],[2163,5048],[2542,5590],[2459,4686],[2711,6032],[2319,4635],[2948,4362],[2760,4761],[597,7950],[2700,4562],[1629,5230],[2812,5373],[3003,4931],[1888,5233],[2847,4612],[2814,4743],[2783,4058],[2492,3478],[2601,4044],[446,8955],[2396,4389],[3095,5442],[1741,6205],[2631,6328],[2180,3823],[1250,7951],[1917,4995],[3060,5434],[2050,5390],[2496,4843],[1818,4179],[3076,4586],[788,8323],[2716,4872],[377,8669],[855,8945],[1942,5217],[2752,5510],[2644,5176],[2552,4605],[1772,6248],[3401,5872],[2476,4756],[2979,4325],[2993,5430],[2406,3536],[2829,6092],[2778,6000],[2617,3758],[3120,4917],[2541,5637],[2746,5640],[3074,4469],[2485,6009],[2415,3918],[2839,3845],[1657,5749],[1861,5674],[2969,3392],[2610,6266],[2535,5160],[2764,4797],[2035,5304],[3131,5029],[3279,5367],[2462,4800],[3090,4334],[3179,5213],[372,8380],[1278,7986],[2989,4444],[2803,5078],[2944,2688],[2689,5293],[2901,3886],[2555,5062],[2496,4105],[2385,4209],[2400,4201],[2372,4298],[2513,4369],[2501,4386],[2537,3875],[2559,3827],[2457,3908],[2361,4281],[2462,4539],[2586,3954],[2439,4396],[2445,4399],[2471,4248],[2482,4165],[2456,4205],[2410,4370],[2940,3151],[2481,4121],[2481,3904],[2507,3879],[2991,3047],[2488,3998],[2326,4085],[2524,4000],[2525,4043],[2445,3922],[2386,3995],[1846,4099],[2497,4228],[2493,4389],[2530,4367],[2293,4123],[2615,3966],[2603,3885],[2635,3877],[2419,4407],[2489,4336],[893,8986],[2675,4754],[224,1071],[2476,6187],[1766,4600],[3033,4321],[2585,5781],[2055,5322],[2465,5133],[1935,6405],[1763,4593],[3075,4699],[2581,5860],[2664,4313],[3080,5013],[2409,4221],[2964,4215],[2884,5263],[2701,5456],[2486,5331],[3132,4481],[2856,4065],[2626,5269],[2497,6087],[2846,4820],[2014,4081],[2882,4876],[1663,6438],[2057,3789],[3047,5268],[3254,5504],[3002,5320],[3094,4588],[2795,5147],[2735,5694],[2015,4344],[2993,2926],[3007,4195],[2608,4524],[578,8617],[1796,5026],[3099,4961],[2122,4595],[2940,3006],[2453,5196],[2514,5117],[2222,5175],[1295,7960],[2882,5568],[2736,4896],[2558,5504],[2512,4940],[3227,5236],[1629,5191],[2987,3148],[2938,4389],[3203,5218],[2792,4871],[2551,5674],[3052,4935],[2479,5665],[2509,6292],[2540,4760],[2552,4375],[3212,5877],[2287,3683],[2247,4241],[2647,5208],[2237,5071],[2626,4923],[2459,3981],[2858,4131],[1820,4146],[3361,6244],[3047,4691],[2837,5257],[2737,4851],[3165,5292],[2461,3941],[2993,2945],[2575,5610],[2707,4354],[2794,4331],[974,9261],[2558,4479],[2897,3803],[2893,5291],[3110,5629],[1820,4936],[2809,4161],[2459,6419],[2385,4525],[3086,4974],[611,8974],[152,8822],[2931,4922],[2413,4845],[2674,5251],[842,9559],[3203,5446],[2206,5785],[2355,4780],[2518,4525],[2001,4471],[2550,5368],[2911,4509],[3246,5503],[2228,6221],[2859,5726],[2932,4671],[3142,4899],[1834,6296],[2878,4929],[1996,4092],[2127,5811],[2818,5039],[2465,6348],[3196,5627],[2550,5312],[3019,4058],[2324,5240],[2542,3913],[2603,5372],[2800,5216],[2172,6389],[2767,4453],[2523,5987],[2944,3237],[2113,4967],[2991,5359],[967,8570],[2889,4456],[2468,3957],[2325,5006],[2465,4111],[2657,4085],[2852,5889],[2537,3425],[2813,4640],[2574,4847],[2541,4573],[2925,4298],[2194,5118],[2694,4140],[1919,5561],[2132,4348],[467,8095],[2928,3492],[2458,4455],[3245,5312],[2554,5000],[2469,3962],[2717,3604],[2579,6232],[2914,5222],[2746,5806],[2931,4205],[2707,4922],[2430,5256],[2445,3707],[2310,5543],[974,1064],[2827,5555],[2818,5343],[959,1212],[3000,4494],[2929,4306],[1270,7987],[2025,6275],[2732,4080],[2450,3646],[2162,4875],[988,956],[2105,4402],[2331,4586],[2879,4208],[3055,5579],[2500,4020],[2685,4087],[2451,6077],[3061,4394],[2234,5173],[2924,4284],[1994,4075],[2768,5357],[2780,3762],[2779,4346],[2528,4578],[2520,4310],[2650,5006],[2604,4788],[3136,5549],[2582,4396],[2631,4973],[2481,4365],[2513,4591],[2522,4514],[2608,4848],[2679,4730],[2490,4546],[2721,4793],[2477,4539],[2750,4184],[2643,5061],[1679,4715],[2825,5411],[2858,5005],[480,9047],[2330,6476],[2711,3738],[2407,4321],[2417,3125],[2625,4402],[2552,5864],[2472,6474],[2675,3622],[2398,5175],[572,2223],[2848,4357],[2154,5180],[2403,3440],[2667,4256],[3075,4904],[2295,6045],[2307,5193],[2648,3792],[3226,5376],[2809,5046],[3069,5059],[2365,4462],[2829,5238],[2976,3888],[1809,4154],[2516,4171],[533,2321],[2600,6260],[3260,5788],[2574,4959],[1932,4255],[1666,5971],[2452,5128],[1769,4528],[2693,4469],[2681,3905],[2955,4438],[2383,5007],[2978,5132],[2006,6138],[2973,4598],[1849,4124],[3044,5118],[2782,4830],[1279,7935],[580,2182],[640,2100],[2522,5352],[1275,8115],[3044,4535],[2278,3960],[2888,4977],[2912,3705],[780,8178],[2433,5790],[2592,4241],[2524,3485],[325,8472],[3193,5271],[2588,5530],[2335,4661],[1635,6195],[2920,4092],[2485,3970],[1780,6016],[2450,2950],[2590,4520],[858,8838],[2477,4898],[2305,4300],[2705,3598],[2733,4762],[3134,4359],[2426,5199],[628,9125],[3003,4784],[2272,5631],[2788,4266],[1799,4877],[2853,5786],[3239,5254],[2919,4849],[2771,5019],[3377,6062],[2667,3472],[694,9178],[2444,4802],[2767,4613],[2045,4857],[3219,5302],[2075,6441],[2994,4229],[1691,4738],[1299,7940],[2991,2915],[2072,6114],[3220,5232],[2976,3888],[2738,5628],[3300,5366],[1359,7483],[2444,3523],[1365,7526],[2643,6047],[2400,4924],[3025,4139],[2736,4493],[2329,6245],[3122,5259],[2642,3652],[2977,5383],[2751,4720],[2869,5142],[2950,4729],[2942,4937],[2874,5056],[2845,5131],[2892,5037],[2951,4700],[2888,4812],[2827,4999],[2894,4613],[2864,4734],[2941,5153],[2798,4883],[2918,4945],[2879,4768],[2907,4974],[2663,5102],[2878,5027],[2850,4988],[2866,5020],[2868,4960],[2882,5125],[2573,5269],[2807,5227],[2894,5140],[2808,4886],[2930,5056],[2731,5249],[2798,4758],[2885,5200],[3077,4939],[3031,5590],[2522,3537],[502,9325],[2264,5290],[2532,5217],[2457,4737],[2003,5654],[3026,5203],[2667,4085],[2509,4660],[866,8355],[2300,5577],[2592,3812],[2586,5491],[1926,4347],[643,8127],[1945,4363],[2764,5345],[371,8307],[2627,5488],[391,8223],[2911,4131],[3241,5377],[2680,5069],[2755,5272],[2577,5369],[2449,3710],[3134,5054],[674,8195],[3063,4208],[2327,5184],[2955,2982],[2829,4910],[2746,6015],[2807,5068],[2803,5060],[2278,3818],[2582,6444],[2991,4500],[2045,4326],[2875,4801],[2640,5361],[2962,4398],[1894,3983],[3094,5299],[2609,5119],[2829,5388],[2954,3273],[2265,6384],[3072,4374],[3212,5229],[2807,6039],[2693,5786],[2862,4987],[3108,5494],[670,1932],[2307,4986],[2016,4058],[2684,6126],[2818,5224],[3317,5724],[265,9113],[2512,3512],[2536,4921],[1824,4425],[841,8479],[1755,4261],[3279,5729],[2044,5669],[2686,3902],[2563,3679],[2869,4531],[2946,3617],[2668,4452],[2385,3620],[2162,6252],[2621,4884],[1929,5531],[2940,3783],[3191,5204],[2771,4150],[619,2126],[3021,5441],[2760,3585],[2481,6174],[2895,4728],[2548,4659],[2586,6025],[2419,6188],[1305,7976],[3048,4407],[2744,5342],[2976,4382],[3184,5222],[3184,5214],[576,2180],[2526,3832],[3034,5154],[2718,5514],[2820,4849],[2427,4457],[2784,4507],[2860,5458],[2546,5728],[2949,3954],[2856,5405],[3074,4960],[2451,5245],[2998,3963],[2860,4236],[601,8190],[2508,5165],[2692,4771],[2675,5100],[3168,5645],[2605,4809],[2897,4696],[2916,4753],[2840,4636],[401,8999],[2638,4731],[2534,4918],[2658,4850],[2498,5326],[319,9053],[2521,5174],[2527,5037],[2436,5022],[2862,4902],[2531,4660],[2526,4835],[2463,4933],[2535,4876],[2415,5067],[2509,5089],[2521,4771],[2611,5062],[2740,5070],[1324,7760],[555,8910],[1359,7608],[561,7656],[767,8132],[594,8132],[410,7427],[514,8686],[532,7591],[1722,4514],[480,9005],[753,7950],[505,8473],[613,8095],[1667,6061],[1989,4637],[599,8147],[639,1935],[1334,7662],[432,7366],[336,7315],[414,8555],[1368,7559],[1394,7507],[315,9067],[446,7469],[375,9443],[471,8359],[1372,7535],[688,7852],[587,8996],[1904,3984],[1806,4436],[1854,4551],[1871,4050],[1846,4179],[1908,4475],[1774,4344],[1842,4065],[1777,4419],[1840,4225],[2688,3610],[1855,4207],[2659,3567],[2584,3723],[2604,3657],[1788,4373],[2680,3453],[1738,4338],[1838,4186],[1809,4245],[1819,4346],[1840,4449],[2583,3561],[2662,3501],[1767,4420],[1906,4692],[2294,4802],[2783,5169],[2936,3225],[2183,4460],[2856,5539],[2202,5310],[1907,4491],[2427,4255],[1806,4157],[2321,4113],[3017,5148],[2356,5281],[2348,4642],[2606,4736],[3027,4261],[2518,3401],[2471,5455],[2588,3560],[3264,5663],[2907,5075],[2918,3569],[3177,5201],[2799,5724],[3237,5672],[2942,3356],[2312,6030],[3300,5738],[2855,4797],[2540,3733],[2626,3572],[3188,5226],[1814,4137],[2841,4011],[1819,5932],[2010,5384],[827,8418],[1715,4934],[2916,5066],[3078,5282],[2269,4800],[3050,4482],[2264,4991],[536,2285],[2619,4280],[2548,5902],[3185,5771],[2972,4279],[3061,4793],[1745,5442],[1936,5812],[2634,4109],[2554,4712],[2717,4032],[1703,5442],[2996,3007],[2479,3944],[2107,5545],[2478,5238],[2712,6067],[2955,5368],[2920,4633],[3113,5123],[611,2099],[1802,5115],[2747,5356],[2822,4827],[2872,4649],[1743,4270],[2931,5315],[2914,4292],[2406,4824],[2394,3156],[3354,5943],[2496,5539],[2163,3898],[2108,3905],[2649,5711],[2241,5535],[1730,4645],[2787,4402],[2861,4964],[2714,3802],[610,2165],[2525,3465],[1701,4744],[2053,5996],[2588,5828],[2218,4425],[2986,4769],[2526,4950],[2567,5203],[1915,5279],[3274,5529],[1850,6102],[2084,6207],[2762,4911],[2553,6035],[2385,5228],[2552,4942],[2182,4982],[2486,3797],[3023,4686],[2433,4845],[2875,4162],[2686,4354],[2768,4499],[2613,4335],[2701,4413],[2698,4506],[2718,4356],[2666,4655],[2676,3838],[2703,3663],[2754,4415],[2675,3900],[2584,4728],[2574,4122],[2651,4422],[2776,4670],[2759,4236],[2715,3902],[2714,3672],[2732,4599],[2560,4303],[2751,4382],[2727,4664],[2647,4063],[2799,4538],[2741,4637],[2651,4303],[2672,4131],[2557,4251],[2735,4146],[2703,4292],[2691,3790],[2718,4149],[2169,6020],[2627,4687],[2738,4424],[2723,4448],[2802,4508],[2563,4620],[2721,3746],[2648,4365],[2664,4358],[2658,4517],[2718,4251],[2642,4230],[2132,6413],[2699,3616],[2569,4165],[2602,4218],[2633,3929],[2795,4300],[2729,4101],[2593,4181],[2783,4563],[2756,4121],[2677,4274],[2607,4253],[2888,3982],[1754,4633],[2309,3844],[2837,3671],[3174,5864],[3019,4194],[2688,4573],[3397,1703],[2365,5972],[2804,5773],[2685,3922],[2872,5657],[2800,4459],[2613,5021],[2673,3724],[2854,6022],[1741,4680],[652,8695],[2542,4995],[2359,5137],[2885,3961],[2957,3294],[2585,5598],[2788,5215],[3086,4457],[2312,3859],[2403,4554],[2711,4757],[680,8719],[2468,5733],[3099,5135],[2758,5384],[2678,5902],[3018,4290],[2727,3905],[2367,4679],[2689,4329],[1739,4695],[1765,4948],[2508,5445],[2920,5233],[2432,2942],[2682,5830],[1668,5476],[3130,4736],[2786,5371],[3176,5341],[2800,3900],[2880,3710],[3001,5049],[2867,5040],[2438,5695],[2481,4970],[2588,4963],[755,8840],[2934,3911],[1717,4878],[3264,5563],[1814,4331],[2989,2882],[2335,6421],[2584,5896],[2831,5142],[2536,4621],[1782,4401],[3151,5005],[2597,5435],[2533,5675],[3175,5093],[2410,5812],[2545,4967],[2753,5565],[2805,5600],[2956,4619],[606,2156],[2722,4416],[2522,4425],[2566,5765],[2624,3711],[2946,2914],[2978,3243],[2508,4304],[2498,5291],[1974,4858],[2672,5331],[2898,4033],[452,8525],[2195,6110],[3349,5988],[2625,3933],[806,9015],[1793,4733],[2857,4384],[3221,5340],[2507,5801],[3171,5229],[1660,5917],[2635,4634],[2992,4101],[2761,5906],[2903,5201],[2862,4408],[2435,3801],[2657,4884],[2553,4887],[2742,3648],[1727,4733],[2851,5671],[2893,4507],[2338,6396],[402,8561],[2503,5975],[2715,3978],[2598,4344],[3142,5282],[2449,4847],[3229,5762],[2641,5252],[2668,5186],[3132,4466],[2815,5080],[2769,6098],[2909,3868],[2796,4480],[3061,5011],[2775,4409],[2253,3598],[3102,4281],[831,8423],[2681,5556],[2948,4451],[1700,4570],[2533,4030],[2762,4282],[2708,5596],[1940,6186],[2588,5868],[3158,5877],[3160,5371],[2680,3539],[2966,2715],[2133,4871],[1398,7471],[3109,4999],[2741,5023],[3249,5273],[2998,4577],[2760,5750],[650,1976],[2652,5318],[2770,3768],[2511,5882],[2190,4718],[3227,5814],[3387,5840],[2723,4842],[3289,5322],[2719,4753],[2749,5591],[1778,6232],[2981,4551],[2438,3975],[2529,5717],[2862,5031],[2683,4462],[2652,5453],[1846,3981],[1053,8442],[1878,5869],[3031,4116],[321,8291],[1708,4963],[2482,5082],[2026,3933],[2822,5181],[3172,5460],[3116,5510],[3229,5303],[3175,5253],[3140,5136],[3179,5115],[3109,5260],[3159,5094],[3140,5465],[2204,4604],[3108,5377],[2151,4181],[3145,5341],[3031,5256],[3163,5358],[3079,5375],[3154,5193],[3132,5145],[3161,5196],[3148,5266],[3129,5078],[3151,5499],[3145,5126],[3071,5100],[3193,5351],[3175,5306],[3161,5089],[3105,5235],[3161,5052],[3170,5354],[3153,5196],[3166,5138],[3173,5375],[423,8945],[3135,5104],[3003,4547],[2954,4546],[2451,6478],[2424,6045],[2380,6323],[2314,6460],[2429,6361],[2431,6097],[2370,6077],[2306,6099],[2346,6255],[2687,3547],[3254,5696],[3133,5595],[2692,4378],[2381,5081],[576,8973],[2554,4768],[3174,5573],[1746,5076],[1719,5149],[1695,4976],[1656,5072],[2544,4441],[1735,4711],[1639,5118],[1726,4983],[1635,5217],[1643,5268],[1744,4796],[1785,4785],[1817,4571],[1732,4753],[1652,5019],[1667,4894],[1774,4583],[2380,4277],[1690,5061],[1699,4897],[1785,4541],[1783,4949],[2340,4613],[1681,5335],[2479,4398],[1641,4989],[1707,4968],[2447,4602],[1666,5221],[1781,4833],[1752,5347],[1664,4913],[1726,4899],[2430,4496],[1756,4715],[1676,4832],[1732,4850],[1715,5400],[1682,5194],[1673,5258],[1704,4822],[1713,5264],[3072,4295],[1688,4748],[1702,4585],[2972,3112],[613,9314],[2929,3411],[2542,3787],[2753,5867],[3090,4411],[2304,3840],[2410,5358],[2841,5407],[2352,4965],[2604,5935],[2457,5415],[3078,4746],[2323,5280],[2971,4081],[2005,5291],[627,2116],[2708,6175],[3139,5837],[2872,5319],[2919,5299],[2910,5360],[3137,5506],[2361,5078],[2541,4924],[1839,4043],[2452,4384],[2810,5187],[2503,4427],[2305,5324],[3056,4970],[2910,4004],[3350,5879],[3049,5455],[2205,6371],[1667,6195],[2041,3762],[2460,5331],[2694,4319],[2744,4904],[2627,5524],[2505,5308],[347,8939],[3059,4830],[1772,6429],[2964,3431],[2635,5742],[2418,5491],[2163,4169],[1850,5733],[1631,5821],[1831,4175],[2414,4064],[2900,5433],[2610,5296],[1278,7938],[357,8317],[2990,2900],[2623,3627],[2866,4002],[3265,5354],[2665,5425],[1763,6014],[2599,6358],[2500,5572],[2753,5414],[3237,5506],[3116,4619],[2570,3551],[3250,5459],[738,7902],[2957,3313],[1667,6467],[1077,8696],[484,9301],[2893,5801],[2733,5728],[2903,5117],[2702,4023],[2515,5676],[1625,5639],[2612,5277],[435,9310],[2456,4361],[1707,5024],[2824,4955],[2667,5599],[2587,5749],[2776,4751],[3272,5447],[2525,4876],[3313,5842],[2875,5266],[3149,4840],[3211,5336],[2850,5026],[2791,5312],[1782,4197],[2591,5308],[3045,5325],[2340,3655],[2875,5516],[1978,3923],[2071,3753],[2023,3999],[2047,4065],[2063,4313],[1935,4189],[1999,4369],[2071,3891],[3012,5121],[2004,4280],[3003,5137],[1686,6341],[2726,4645],[528,2272],[2026,4206],[1691,4707],[855,8483],[2628,4193],[2675,5997],[2995,3021],[216,7698],[817,9365],[2931,3227],[2909,5342],[2718,5782],[2653,5577],[2865,4146],[1793,5995],[1676,5979],[2596,5323],[1253,7913],[3090,5517],[2269,3756],[2424,3376],[2822,3573],[2022,4624],[2936,3058],[769,8131],[2672,4489],[3079,4422],[2954,5178],[3107,4656],[2399,5063],[3013,4080],[2977,3037],[3146,5084],[2920,5560],[305,9539],[2328,5738],[2738,4532],[2005,4077],[2697,5208],[2708,3770],[2915,3213],[1987,5560],[2460,2940],[2847,3984],[2369,5790],[2991,5181],[423,9756],[2708,4788],[461,8343],[2953,5002],[2530,6184],[2675,6036],[3199,5838],[2843,5175],[2849,5976],[2804,4097],[2463,6503],[1816,4264],[2910,4923],[2995,2953],[2504,5253],[3237,5452],[3099,4449],[2073,5542],[2468,4593],[3153,5117],[2576,5974],[3384,5918],[591,7855],[2775,3614],[1826,4180],[2678,4600],[2544,5533],[3188,5359],[2105,5866],[2347,4418],[806,9299],[2517,4687],[184,1089],[2789,5350],[2664,5048],[3369,6151],[2734,3612],[2492,5728],[3444,1716],[1738,4427],[1992,4268],[2760,5057],[2793,3829],[2559,5390],[2519,4109],[3057,5243],[1784,6084],[3415,1664],[3206,5484],[1355,7733],[2977,4657],[3283,5586],[2511,3818],[1865,4139],[2494,3341],[3075,4664],[3155,5836],[558,7757],[2892,5521],[2646,3495],[2541,4705],[2417,4745],[460,8078],[1786,4483],[3136,5142],[2238,4837],[2044,5044],[2674,5525],[3302,5429],[3264,5374],[1734,4905],[3108,4601],[2464,4277],[2014,5139],[2324,4192],[2451,4406],[2552,6156],[2237,6479],[2461,3772],[2753,5435],[3299,5675],[1671,6277],[2881,3933],[2987,4282],[3286,5403],[2354,4543],[2880,5950],[2304,4154],[2322,4254],[2190,4483],[2103,4119],[1652,4950],[1717,5019],[2304,4095],[1645,5181],[2310,4037],[1778,4549],[2272,4189],[2089,4186],[2195,4111],[2336,4166],[2234,4530],[2361,4604],[1743,4613],[1713,4839],[2306,4254],[2234,4312],[1730,4936],[1752,4770],[1658,5190],[1746,4597],[1707,5059],[1712,4897],[1655,5137],[1708,4648],[2756,5536],[1836,4158],[2283,5737],[2475,3959],[2391,5506],[1653,5611],[1687,5128],[2978,3997],[657,8973],[2281,5753],[2806,5271],[2657,5965],[1686,5184],[2525,5262],[1721,5770],[2458,6350],[3036,4460],[598,8513],[2090,5916],[2716,5448],[2461,3273],[2611,5822],[2704,5985],[1701,4687],[3081,4714],[2848,5066],[2002,4907],[2138,5030],[1723,4868],[1842,4147],[2115,5584],[3336,5740],[2469,3241],[2544,4326],[2096,5354],[2853,4466],[1779,6091],[3141,5610],[2838,4221],[822,9095],[2844,5457],[2817,4432],[2609,5910],[1853,4015],[1764,5026],[1688,6277],[2664,4128],[2999,4686],[3070,5592],[2560,4537],[8626,1049],[9655,0],[2596,5996],[2237,4057],[2511,6490],[2450,5076],[2633,5952],[2112,6117],[2827,5687],[2096,4424],[2697,5918],[2522,6503],[475,8511],[2414,4928],[2608,3933],[2610,5716],[2761,4950],[2944,2998],[2238,4595],[2592,4363],[2377,6417],[2982,4423],[3217,5657],[2931,3862],[3072,5210],[2909,4550],[2530,5816],[3064,4456],[2154,5387],[2793,5275],[2011,5704],[2031,3875],[2727,5600],[2855,4168],[2775,5253],[2614,6015],[2904,5017],[3069,4547],[2006,6382],[1675,5447],[1620,5587],[1720,5745],[1759,6335],[1662,5830],[1621,6347],[1712,5711],[1837,6467],[2904,5307],[2277,6324],[1934,6384],[2376,6512],[1666,5813],[1666,6431],[2436,6266],[1721,5834],[1915,6273],[1729,5775],[1763,6076],[1692,6341],[1632,5867],[1639,5952],[1688,6251],[1752,6422],[1897,6400],[1687,6318],[2060,6222],[1853,5670],[1865,5665],[1873,6120],[1985,6196],[1786,6167],[2091,6448],[1863,6251],[1881,6077],[1877,6034],[1875,6285],[2238,6380],[1851,5762],[1866,6082],[1730,6228],[1837,6177],[1766,6372],[2166,5330],[1711,4872],[2079,3986],[2189,4419],[1844,3968],[2697,4815],[2425,3467],[2961,3873],[2769,6098],[2539,6103],[1762,4232],[1843,4181],[2755,5694],[2802,5372],[2925,3948],[1737,4359],[2165,5185],[2561,5667],[2009,6441],[3137,4845],[2482,5356],[874,9828],[2802,4036],[3065,5238],[3187,5551],[1719,4775],[343,8522],[2856,4550],[2301,5968],[2484,5622],[2453,5798],[2389,6012],[2483,5731],[2384,5927],[2353,6011],[2356,5707],[2441,5633],[2376,5715],[2520,5222],[2820,4819],[2008,4107],[1851,3942],[500,7500],[2248,6310],[1685,6270],[1851,3982],[2956,3142],[3095,5233],[2781,3907],[2434,3887],[2815,4936],[2675,4937],[2012,4299],[2960,3349],[2382,5635],[1840,6306],[3286,5635],[1683,4732],[3104,4585],[2685,5424],[3262,5405],[2583,4673],[2879,5079],[2957,3534],[2512,3481],[2594,5864],[2639,4260],[1956,4649],[1282,8149],[3032,4833],[604,9311],[327,9211],[2507,5606],[1659,6236],[2161,5850],[2569,3923],[529,8655],[3429,1734],[2701,4619],[1280,7771],[2767,4966],[1680,5383],[1697,4692],[2087,4247],[2362,3752],[3432,1732],[2825,5995],[1830,6296],[2533,5477],[789,8541],[2202,4550],[2525,5511],[2006,5228],[1664,5872],[2549,4508],[3178,5790],[2450,4915],[2720,4892],[604,8500],[2513,4034],[2838,5283],[2855,4644],[1708,4900],[1947,5905],[1805,4168],[3164,5202],[2987,4165],[1743,4306],[1823,4115],[2743,4349],[2348,3961],[2472,4378],[199,7790],[1707,4582],[2285,5277],[3017,4359],[773,8146],[2067,4207],[2937,4309],[1668,6007],[2260,5805],[2917,3190],[2582,4007],[2698,5080],[9999,1193],[2424,4164],[2526,5600],[2531,3463],[2698,5377],[1687,4715],[2827,4487],[2634,4355],[2919,3133],[2206,4082],[622,8513],[2425,3436],[2955,3720],[2628,6001],[2562,5972],[2702,5815],[2724,4077],[2536,5069],[2276,5201],[2677,4908],[2593,5876],[1670,4871],[3464,1716],[3470,1616],[2991,3099],[2481,4445],[2768,5862],[1934,5653],[2668,4895],[3058,4155],[2623,6151],[2490,5480],[190,8810],[2125,3952],[1739,5163],[2968,4442],[854,9173],[844,8253],[3181,5340],[2468,4504],[2467,5240],[2363,3926],[2971,4828],[366,8627],[794,8308],[2322,5067],[2798,4410],[3119,5591],[2877,3784],[1786,4220],[1864,6403],[2734,4354],[2543,3504],[2024,4493],[2694,5960],[2436,3103],[2434,3713],[2472,3678],[2683,3719],[2531,3488],[752,7886],[2424,4144],[2330,3886],[2449,3193],[2520,3744],[2480,3992],[2371,4036],[2440,2942],[2454,3233],[2462,3397],[2482,3676],[2457,3630],[2542,3552],[2439,3157],[2411,3578],[2413,3437],[2550,3509],[2481,3329],[2243,4676],[761,9043],[3277,5398],[2709,5032],[2621,4751],[2944,3928],[2266,4351],[2762,4044],[2152,4046],[638,8701],[1712,4743],[3030,4523],[1670,6118],[2890,5349],[3182,5237],[2791,4794],[2861,5506],[2132,4784],[2724,4468],[3122,4764],[2804,4382],[1903,6289],[2123,5677],[3095,5091],[1677,6241],[2973,3308],[823,8596],[1285,7886],[2483,4037],[2687,4515],[2863,3602],[1778,4503],[486,8405],[2890,3764],[2985,2859],[962,1193],[1883,4186],[2970,2893],[2594,5366],[1809,4135],[2600,5733],[504,8085],[2812,3831],[2880,5353],[2513,4959],[2249,5427],[2920,3223],[2922,3214],[1847,4801],[2458,3720],[692,8265],[2496,5380],[2533,4468],[2350,4866],[2923,4553],[1753,4998],[2493,3964],[1876,4108],[2576,5117],[2965,5192],[1805,4343],[958,1682],[3026,4413],[1683,5972],[2892,5408],[3159,5148],[2505,4510],[2726,4208],[2038,3871],[2623,4656],[2825,5846],[2496,6366],[2878,3681],[2598,5211],[1757,4931],[2656,3908],[1994,5200],[1928,5493],[2634,6207],[2564,4080],[2064,4237],[2804,5109],[2520,3908],[2874,4449],[2901,5089],[2617,5398],[2823,4593],[1994,5606],[1919,5510],[1965,6093],[1929,4568],[2008,5434],[2009,5064],[2077,5659],[1933,4482],[2060,4942],[1978,5561],[2005,5201],[2088,4782],[1984,4828],[1993,4767],[2033,5690],[2116,5873],[2056,5134],[1881,5807],[1890,5594],[2016,5127],[1867,5847],[2050,4704],[1671,5925],[2626,5966],[2738,4082],[2644,4802],[3141,5596],[2985,5265],[2719,4538],[1873,4126],[3002,4236],[2743,5580],[2754,5483],[1616,6346],[2651,5095],[2906,5521],[2964,4514],[1658,4968],[2510,4839],[3141,5172],[2548,5780],[2335,4730],[2811,5094],[2929,4981],[491,8841],[2629,4616],[2728,5640],[3065,5237],[2815,4354],[2702,4226],[644,2017],[2870,5356],[2515,3657],[825,8508],[3269,5344],[2652,4828],[2386,3417],[2833,5085],[2891,5094],[2965,4320],[343,8473],[3158,5095],[2557,4533],[1696,4850],[2473,3361],[1838,4259],[2925,3883],[943,8410],[938,9332],[2083,5173],[2605,4939],[2858,5136],[1906,4512],[2229,3706],[2633,4811],[2672,5817],[1776,4528],[2935,4586],[2714,4947],[2896,3662],[2473,5537],[2922,3082],[2855,5240],[1804,4199],[2848,4185],[2796,3616],[2781,5332],[2940,3574],[3448,1684],[2985,3173],[3230,5627],[2922,5108],[2625,5451],[2361,5551],[2993,4387],[1675,5984],[2489,5934],[2714,5316],[1628,6200],[3083,5080],[2630,5870],[2990,4948],[3112,4944],[3054,4629],[1664,6440],[3059,4357],[3128,4794],[3001,4425],[3045,4896],[3069,4883],[3034,4590],[3123,4338],[3087,4714],[3099,4717],[3025,4947],[1682,5985],[1786,6344],[1681,6359],[1798,6255],[2994,5089],[445,8783],[907,9228],[3127,5307],[873,9407],[2446,4538],[2884,4163],[1806,4206],[1812,4282],[2470,4661],[516,9266],[1688,5029],[1825,5245],[410,8967],[455,8341],[1373,7683],[2131,5725],[822,9391],[609,8030],[3252,5316],[424,9416],[1702,4625],[3318,5814],[3156,4949],[2392,4547],[2033,5838],[2955,2891],[2941,3101],[2948,3211],[2978,3024],[2954,3031],[2925,3229],[2972,3325],[2947,3372],[2983,3198],[2924,3393],[2926,3354],[2993,2880],[2985,2906],[2961,3457],[2981,2836],[2981,3221],[2921,3439],[3439,1684],[3465,1716],[3473,1623],[3443,1711],[3470,1716],[2554,4523],[2557,6198],[2443,5555],[2477,5645],[2858,5989],[2350,6163],[2358,6053],[2868,5768],[2446,6418],[2886,5496],[2709,5737],[2660,5664],[2721,5967],[2502,6041],[2882,6044],[2514,5769],[2841,5564],[2311,6346],[2910,5645],[2870,5887],[1147,8155],[9765,336],[2889,5454],[1740,6132],[2459,5561],[2977,5302],[1924,3956],[216,1066],[438,8369],[472,8375],[624,8725],[831,8451],[932,8592],[480,7609],[854,8906],[956,9215],[2054,4166],[2974,4522],[3111,5215],[2931,3263],[2105,4335],[2939,5096]]}},"arcs":[]}

/***/ }),
/* 336 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plot__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_geo__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_topojson_client__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_scale_chromatic__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3_scale__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_world_110m_json__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_world_110m_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__assets_world_110m_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_countries_json__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_countries_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__assets_countries_json__);








class Map extends __WEBPACK_IMPORTED_MODULE_0__plot__["a" /* default */] {
    constructor(data, view) {
        super(data, view);
        
        this.feature = data.feature || 'countries';
        this.circle = data.vmap.points;
        this.scale = data.vmap.scale;
        this.gis = data.gis || __WEBPACK_IMPORTED_MODULE_5__assets_world_110m_json___default.a;

        this.borders = view.borders || true;
        this.translate = view.translate || [this.width / 2, this.height / 1.5];
        this.scale = view.scale || ((view.projection == 'Albers') ? 1 : 150);
        this.exponent = view.exponent || 1/3;
        this.projection = __WEBPACK_IMPORTED_MODULE_1_d3_geo__['geo'+ (view.projection || 'Albers')].call()
            .scale(this.scale)
            .translate(this.translate);

        this.path = __WEBPACK_IMPORTED_MODULE_1_d3_geo__["geoPath"]()
            .projection(this.projection);

        if(data.vmap.color) {
            let valueById = {};
            data.json.forEach( d => {
                let country = __WEBPACK_IMPORTED_MODULE_6__assets_countries_json___default.a.filter(c => c[data.join.type || 'code']== d[data.join.field])[0] || -1;
                if(country && country.id){
                    valueById[country.id] = Number(d[data.vmap.color].replace(/,/g, ''));
                }
            })
            let values = Object.keys(valueById).map(k => valueById[k]).filter(d=>!Number.isNaN(d));
            let domain = [Math.min(...values), Math.max(...values)]
            let colorScale = Object(__WEBPACK_IMPORTED_MODULE_4_d3_scale__["c" /* scalePow */])().exponent(1/3).domain(domain).range([0.1, 1]);
            this.setColor = function(d) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_d3_scale_chromatic__["a" /* interpolateBlues */])(colorScale(valueById[d.id] || domain[0]));
            }
            if(view.color && typeof(view.color.setter) === 'function') {
                this.setColor = function() {
                    return this.color.setter(colorScale(valueById[d.id] || domain[0]))
                }
            }
        }
    }

    render() { 
        this.svg.main.selectAll(".geo-paths")
            .data(__WEBPACK_IMPORTED_MODULE_2_topojson_client__["a" /* feature */](this.gis, this.gis.objects[this.feature]).features)
            .enter()
            .append('path')
                .attr('class', 'geo-paths')
                .attr("d", this.path)
                .attr("stroke", "white")
                .attr("fill", this.setColor);
            
        if(this.borders) {
            this.svg.main.append("path")
            .attr('class', 'geo-borders')
            .datum(__WEBPACK_IMPORTED_MODULE_2_topojson_client__["b" /* mesh */](this.gis, this.gis.objects[this.feature], function(a, b) { return a !== b; }))
            .attr("d", this.path)
            .attr("fill", "none")
            .attr("stroke", "white");
        }

        return this;
    }

    addLayer({type = 'point', radius = 1.0, data, feature}) {
        if(type == 'point') {
            this.path.pointRadius(radius);
            this.svg.main.append("path")
                .datum(__WEBPACK_IMPORTED_MODULE_2_topojson_client__["a" /* feature */](data, data.objects[feature]))
                .attr("d", this.path);
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Map;


/***/ }),
/* 337 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__area__ = __webpack_require__(306);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoArea", function() { return __WEBPACK_IMPORTED_MODULE_0__area__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bounds__ = __webpack_require__(338);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoBounds", function() { return __WEBPACK_IMPORTED_MODULE_1__bounds__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__centroid__ = __webpack_require__(339);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoCentroid", function() { return __WEBPACK_IMPORTED_MODULE_2__centroid__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__circle__ = __webpack_require__(307);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoCircle", function() { return __WEBPACK_IMPORTED_MODULE_3__circle__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__clip_antimeridian__ = __webpack_require__(309);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoClipAntimeridian", function() { return __WEBPACK_IMPORTED_MODULE_4__clip_antimeridian__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__clip_circle__ = __webpack_require__(315);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoClipCircle", function() { return __WEBPACK_IMPORTED_MODULE_5__clip_circle__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__clip_extent__ = __webpack_require__(341);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoClipExtent", function() { return __WEBPACK_IMPORTED_MODULE_6__clip_extent__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__clip_rectangle__ = __webpack_require__(113);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoClipRectangle", function() { return __WEBPACK_IMPORTED_MODULE_7__clip_rectangle__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contains__ = __webpack_require__(343);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoContains", function() { return __WEBPACK_IMPORTED_MODULE_8__contains__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__distance__ = __webpack_require__(316);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoDistance", function() { return __WEBPACK_IMPORTED_MODULE_9__distance__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__graticule__ = __webpack_require__(344);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoGraticule", function() { return __WEBPACK_IMPORTED_MODULE_10__graticule__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoGraticule10", function() { return __WEBPACK_IMPORTED_MODULE_10__graticule__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__interpolate__ = __webpack_require__(345);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoInterpolate", function() { return __WEBPACK_IMPORTED_MODULE_11__interpolate__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__length__ = __webpack_require__(317);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoLength", function() { return __WEBPACK_IMPORTED_MODULE_12__length__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__path_index__ = __webpack_require__(346);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoPath", function() { return __WEBPACK_IMPORTED_MODULE_13__path_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__projection_albers__ = __webpack_require__(319);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoAlbers", function() { return __WEBPACK_IMPORTED_MODULE_14__projection_albers__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__projection_albersUsa__ = __webpack_require__(354);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoAlbersUsa", function() { return __WEBPACK_IMPORTED_MODULE_15__projection_albersUsa__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__projection_azimuthalEqualArea__ = __webpack_require__(355);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoAzimuthalEqualArea", function() { return __WEBPACK_IMPORTED_MODULE_16__projection_azimuthalEqualArea__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoAzimuthalEqualAreaRaw", function() { return __WEBPACK_IMPORTED_MODULE_16__projection_azimuthalEqualArea__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__projection_azimuthalEquidistant__ = __webpack_require__(356);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoAzimuthalEquidistant", function() { return __WEBPACK_IMPORTED_MODULE_17__projection_azimuthalEquidistant__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoAzimuthalEquidistantRaw", function() { return __WEBPACK_IMPORTED_MODULE_17__projection_azimuthalEquidistant__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__projection_conicConformal__ = __webpack_require__(357);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoConicConformal", function() { return __WEBPACK_IMPORTED_MODULE_18__projection_conicConformal__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoConicConformalRaw", function() { return __WEBPACK_IMPORTED_MODULE_18__projection_conicConformal__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__projection_conicEqualArea__ = __webpack_require__(296);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoConicEqualArea", function() { return __WEBPACK_IMPORTED_MODULE_19__projection_conicEqualArea__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoConicEqualAreaRaw", function() { return __WEBPACK_IMPORTED_MODULE_19__projection_conicEqualArea__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__projection_conicEquidistant__ = __webpack_require__(358);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoConicEquidistant", function() { return __WEBPACK_IMPORTED_MODULE_20__projection_conicEquidistant__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoConicEquidistantRaw", function() { return __WEBPACK_IMPORTED_MODULE_20__projection_conicEquidistant__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__projection_equalEarth__ = __webpack_require__(359);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoEqualEarth", function() { return __WEBPACK_IMPORTED_MODULE_21__projection_equalEarth__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoEqualEarthRaw", function() { return __WEBPACK_IMPORTED_MODULE_21__projection_equalEarth__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__projection_equirectangular__ = __webpack_require__(320);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoEquirectangular", function() { return __WEBPACK_IMPORTED_MODULE_22__projection_equirectangular__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoEquirectangularRaw", function() { return __WEBPACK_IMPORTED_MODULE_22__projection_equirectangular__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__projection_gnomonic__ = __webpack_require__(360);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoGnomonic", function() { return __WEBPACK_IMPORTED_MODULE_23__projection_gnomonic__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoGnomonicRaw", function() { return __WEBPACK_IMPORTED_MODULE_23__projection_gnomonic__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__projection_identity__ = __webpack_require__(361);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoIdentity", function() { return __WEBPACK_IMPORTED_MODULE_24__projection_identity__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__projection_index__ = __webpack_require__(21);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoProjection", function() { return __WEBPACK_IMPORTED_MODULE_25__projection_index__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoProjectionMutator", function() { return __WEBPACK_IMPORTED_MODULE_25__projection_index__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__projection_mercator__ = __webpack_require__(299);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoMercator", function() { return __WEBPACK_IMPORTED_MODULE_26__projection_mercator__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoMercatorRaw", function() { return __WEBPACK_IMPORTED_MODULE_26__projection_mercator__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__projection_naturalEarth1__ = __webpack_require__(362);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoNaturalEarth1", function() { return __WEBPACK_IMPORTED_MODULE_27__projection_naturalEarth1__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoNaturalEarth1Raw", function() { return __WEBPACK_IMPORTED_MODULE_27__projection_naturalEarth1__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__projection_orthographic__ = __webpack_require__(363);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoOrthographic", function() { return __WEBPACK_IMPORTED_MODULE_28__projection_orthographic__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoOrthographicRaw", function() { return __WEBPACK_IMPORTED_MODULE_28__projection_orthographic__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__projection_stereographic__ = __webpack_require__(364);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoStereographic", function() { return __WEBPACK_IMPORTED_MODULE_29__projection_stereographic__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoStereographicRaw", function() { return __WEBPACK_IMPORTED_MODULE_29__projection_stereographic__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__projection_transverseMercator__ = __webpack_require__(365);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoTransverseMercator", function() { return __WEBPACK_IMPORTED_MODULE_30__projection_transverseMercator__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoTransverseMercatorRaw", function() { return __WEBPACK_IMPORTED_MODULE_30__projection_transverseMercator__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__rotation__ = __webpack_require__(112);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoRotation", function() { return __WEBPACK_IMPORTED_MODULE_31__rotation__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__stream__ = __webpack_require__(54);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoStream", function() { return __WEBPACK_IMPORTED_MODULE_32__stream__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__transform__ = __webpack_require__(114);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoTransform", function() { return __WEBPACK_IMPORTED_MODULE_33__transform__["a"]; });






 // DEPRECATED! Use d3.geoIdentity().clipExtent(…).





























/***/ }),
/* 338 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adder__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__area__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cartesian__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__math__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stream__ = __webpack_require__(54);






var lambda0, phi0, lambda1, phi1, // bounds
    lambda2, // previous lambda-coordinate
    lambda00, phi00, // first point
    p0, // previous 3D point
    deltaSum = Object(__WEBPACK_IMPORTED_MODULE_0__adder__["a" /* default */])(),
    ranges,
    range;

var boundsStream = {
  point: boundsPoint,
  lineStart: boundsLineStart,
  lineEnd: boundsLineEnd,
  polygonStart: function() {
    boundsStream.point = boundsRingPoint;
    boundsStream.lineStart = boundsRingStart;
    boundsStream.lineEnd = boundsRingEnd;
    deltaSum.reset();
    __WEBPACK_IMPORTED_MODULE_1__area__["b" /* areaStream */].polygonStart();
  },
  polygonEnd: function() {
    __WEBPACK_IMPORTED_MODULE_1__area__["b" /* areaStream */].polygonEnd();
    boundsStream.point = boundsPoint;
    boundsStream.lineStart = boundsLineStart;
    boundsStream.lineEnd = boundsLineEnd;
    if (__WEBPACK_IMPORTED_MODULE_1__area__["a" /* areaRingSum */] < 0) lambda0 = -(lambda1 = 180), phi0 = -(phi1 = 90);
    else if (deltaSum > __WEBPACK_IMPORTED_MODULE_3__math__["i" /* epsilon */]) phi1 = 90;
    else if (deltaSum < -__WEBPACK_IMPORTED_MODULE_3__math__["i" /* epsilon */]) phi0 = -90;
    range[0] = lambda0, range[1] = lambda1;
  }
};

function boundsPoint(lambda, phi) {
  ranges.push(range = [lambda0 = lambda, lambda1 = lambda]);
  if (phi < phi0) phi0 = phi;
  if (phi > phi1) phi1 = phi;
}

function linePoint(lambda, phi) {
  var p = Object(__WEBPACK_IMPORTED_MODULE_2__cartesian__["a" /* cartesian */])([lambda * __WEBPACK_IMPORTED_MODULE_3__math__["r" /* radians */], phi * __WEBPACK_IMPORTED_MODULE_3__math__["r" /* radians */]]);
  if (p0) {
    var normal = Object(__WEBPACK_IMPORTED_MODULE_2__cartesian__["c" /* cartesianCross */])(p0, p),
        equatorial = [normal[1], -normal[0], 0],
        inflection = Object(__WEBPACK_IMPORTED_MODULE_2__cartesian__["c" /* cartesianCross */])(equatorial, normal);
    Object(__WEBPACK_IMPORTED_MODULE_2__cartesian__["e" /* cartesianNormalizeInPlace */])(inflection);
    inflection = Object(__WEBPACK_IMPORTED_MODULE_2__cartesian__["g" /* spherical */])(inflection);
    var delta = lambda - lambda2,
        sign = delta > 0 ? 1 : -1,
        lambdai = inflection[0] * __WEBPACK_IMPORTED_MODULE_3__math__["h" /* degrees */] * sign,
        phii,
        antimeridian = Object(__WEBPACK_IMPORTED_MODULE_3__math__["a" /* abs */])(delta) > 180;
    if (antimeridian ^ (sign * lambda2 < lambdai && lambdai < sign * lambda)) {
      phii = inflection[1] * __WEBPACK_IMPORTED_MODULE_3__math__["h" /* degrees */];
      if (phii > phi1) phi1 = phii;
    } else if (lambdai = (lambdai + 360) % 360 - 180, antimeridian ^ (sign * lambda2 < lambdai && lambdai < sign * lambda)) {
      phii = -inflection[1] * __WEBPACK_IMPORTED_MODULE_3__math__["h" /* degrees */];
      if (phii < phi0) phi0 = phii;
    } else {
      if (phi < phi0) phi0 = phi;
      if (phi > phi1) phi1 = phi;
    }
    if (antimeridian) {
      if (lambda < lambda2) {
        if (angle(lambda0, lambda) > angle(lambda0, lambda1)) lambda1 = lambda;
      } else {
        if (angle(lambda, lambda1) > angle(lambda0, lambda1)) lambda0 = lambda;
      }
    } else {
      if (lambda1 >= lambda0) {
        if (lambda < lambda0) lambda0 = lambda;
        if (lambda > lambda1) lambda1 = lambda;
      } else {
        if (lambda > lambda2) {
          if (angle(lambda0, lambda) > angle(lambda0, lambda1)) lambda1 = lambda;
        } else {
          if (angle(lambda, lambda1) > angle(lambda0, lambda1)) lambda0 = lambda;
        }
      }
    }
  } else {
    ranges.push(range = [lambda0 = lambda, lambda1 = lambda]);
  }
  if (phi < phi0) phi0 = phi;
  if (phi > phi1) phi1 = phi;
  p0 = p, lambda2 = lambda;
}

function boundsLineStart() {
  boundsStream.point = linePoint;
}

function boundsLineEnd() {
  range[0] = lambda0, range[1] = lambda1;
  boundsStream.point = boundsPoint;
  p0 = null;
}

function boundsRingPoint(lambda, phi) {
  if (p0) {
    var delta = lambda - lambda2;
    deltaSum.add(Object(__WEBPACK_IMPORTED_MODULE_3__math__["a" /* abs */])(delta) > 180 ? delta + (delta > 0 ? 360 : -360) : delta);
  } else {
    lambda00 = lambda, phi00 = phi;
  }
  __WEBPACK_IMPORTED_MODULE_1__area__["b" /* areaStream */].point(lambda, phi);
  linePoint(lambda, phi);
}

function boundsRingStart() {
  __WEBPACK_IMPORTED_MODULE_1__area__["b" /* areaStream */].lineStart();
}

function boundsRingEnd() {
  boundsRingPoint(lambda00, phi00);
  __WEBPACK_IMPORTED_MODULE_1__area__["b" /* areaStream */].lineEnd();
  if (Object(__WEBPACK_IMPORTED_MODULE_3__math__["a" /* abs */])(deltaSum) > __WEBPACK_IMPORTED_MODULE_3__math__["i" /* epsilon */]) lambda0 = -(lambda1 = 180);
  range[0] = lambda0, range[1] = lambda1;
  p0 = null;
}

// Finds the left-right distance between two longitudes.
// This is almost the same as (lambda1 - lambda0 + 360°) % 360°, except that we want
// the distance between ±180° to be 360°.
function angle(lambda0, lambda1) {
  return (lambda1 -= lambda0) < 0 ? lambda1 + 360 : lambda1;
}

function rangeCompare(a, b) {
  return a[0] - b[0];
}

function rangeContains(range, x) {
  return range[0] <= range[1] ? range[0] <= x && x <= range[1] : x < range[0] || range[1] < x;
}

/* harmony default export */ __webpack_exports__["a"] = (function(feature) {
  var i, n, a, b, merged, deltaMax, delta;

  phi1 = lambda1 = -(lambda0 = phi0 = Infinity);
  ranges = [];
  Object(__WEBPACK_IMPORTED_MODULE_4__stream__["a" /* default */])(feature, boundsStream);

  // First, sort ranges by their minimum longitudes.
  if (n = ranges.length) {
    ranges.sort(rangeCompare);

    // Then, merge any ranges that overlap.
    for (i = 1, a = ranges[0], merged = [a]; i < n; ++i) {
      b = ranges[i];
      if (rangeContains(a, b[0]) || rangeContains(a, b[1])) {
        if (angle(a[0], b[1]) > angle(a[0], a[1])) a[1] = b[1];
        if (angle(b[0], a[1]) > angle(a[0], a[1])) a[0] = b[0];
      } else {
        merged.push(a = b);
      }
    }

    // Finally, find the largest gap between the merged ranges.
    // The final bounding box will be the inverse of this gap.
    for (deltaMax = -Infinity, n = merged.length - 1, i = 0, a = merged[n]; i <= n; a = b, ++i) {
      b = merged[i];
      if ((delta = angle(a[1], b[0])) > deltaMax) deltaMax = delta, lambda0 = b[0], lambda1 = a[1];
    }
  }

  ranges = range = null;

  return lambda0 === Infinity || phi0 === Infinity
      ? [[NaN, NaN], [NaN, NaN]]
      : [[lambda0, phi0], [lambda1, phi1]];
});


/***/ }),
/* 339 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__noop__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stream__ = __webpack_require__(54);




var W0, W1,
    X0, Y0, Z0,
    X1, Y1, Z1,
    X2, Y2, Z2,
    lambda00, phi00, // first point
    x0, y0, z0; // previous point

var centroidStream = {
  sphere: __WEBPACK_IMPORTED_MODULE_1__noop__["a" /* default */],
  point: centroidPoint,
  lineStart: centroidLineStart,
  lineEnd: centroidLineEnd,
  polygonStart: function() {
    centroidStream.lineStart = centroidRingStart;
    centroidStream.lineEnd = centroidRingEnd;
  },
  polygonEnd: function() {
    centroidStream.lineStart = centroidLineStart;
    centroidStream.lineEnd = centroidLineEnd;
  }
};

// Arithmetic mean of Cartesian vectors.
function centroidPoint(lambda, phi) {
  lambda *= __WEBPACK_IMPORTED_MODULE_0__math__["r" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_0__math__["r" /* radians */];
  var cosPhi = Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(phi);
  centroidPointCartesian(cosPhi * Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(lambda), cosPhi * Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(lambda), Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(phi));
}

function centroidPointCartesian(x, y, z) {
  ++W0;
  X0 += (x - X0) / W0;
  Y0 += (y - Y0) / W0;
  Z0 += (z - Z0) / W0;
}

function centroidLineStart() {
  centroidStream.point = centroidLinePointFirst;
}

function centroidLinePointFirst(lambda, phi) {
  lambda *= __WEBPACK_IMPORTED_MODULE_0__math__["r" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_0__math__["r" /* radians */];
  var cosPhi = Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(phi);
  x0 = cosPhi * Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(lambda);
  y0 = cosPhi * Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(lambda);
  z0 = Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(phi);
  centroidStream.point = centroidLinePoint;
  centroidPointCartesian(x0, y0, z0);
}

function centroidLinePoint(lambda, phi) {
  lambda *= __WEBPACK_IMPORTED_MODULE_0__math__["r" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_0__math__["r" /* radians */];
  var cosPhi = Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(phi),
      x = cosPhi * Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(lambda),
      y = cosPhi * Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(lambda),
      z = Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(phi),
      w = Object(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* atan2 */])(Object(__WEBPACK_IMPORTED_MODULE_0__math__["u" /* sqrt */])((w = y0 * z - z0 * y) * w + (w = z0 * x - x0 * z) * w + (w = x0 * y - y0 * x) * w), x0 * x + y0 * y + z0 * z);
  W1 += w;
  X1 += w * (x0 + (x0 = x));
  Y1 += w * (y0 + (y0 = y));
  Z1 += w * (z0 + (z0 = z));
  centroidPointCartesian(x0, y0, z0);
}

function centroidLineEnd() {
  centroidStream.point = centroidPoint;
}

// See J. E. Brock, The Inertia Tensor for a Spherical Triangle,
// J. Applied Mechanics 42, 239 (1975).
function centroidRingStart() {
  centroidStream.point = centroidRingPointFirst;
}

function centroidRingEnd() {
  centroidRingPoint(lambda00, phi00);
  centroidStream.point = centroidPoint;
}

function centroidRingPointFirst(lambda, phi) {
  lambda00 = lambda, phi00 = phi;
  lambda *= __WEBPACK_IMPORTED_MODULE_0__math__["r" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_0__math__["r" /* radians */];
  centroidStream.point = centroidRingPoint;
  var cosPhi = Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(phi);
  x0 = cosPhi * Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(lambda);
  y0 = cosPhi * Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(lambda);
  z0 = Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(phi);
  centroidPointCartesian(x0, y0, z0);
}

function centroidRingPoint(lambda, phi) {
  lambda *= __WEBPACK_IMPORTED_MODULE_0__math__["r" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_0__math__["r" /* radians */];
  var cosPhi = Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(phi),
      x = cosPhi * Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(lambda),
      y = cosPhi * Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(lambda),
      z = Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(phi),
      cx = y0 * z - z0 * y,
      cy = z0 * x - x0 * z,
      cz = x0 * y - y0 * x,
      m = Object(__WEBPACK_IMPORTED_MODULE_0__math__["u" /* sqrt */])(cx * cx + cy * cy + cz * cz),
      w = Object(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* asin */])(m), // line weight = angle
      v = m && -w / m; // area weight multiplier
  X2 += v * cx;
  Y2 += v * cy;
  Z2 += v * cz;
  W1 += w;
  X1 += w * (x0 + (x0 = x));
  Y1 += w * (y0 + (y0 = y));
  Z1 += w * (z0 + (z0 = z));
  centroidPointCartesian(x0, y0, z0);
}

/* harmony default export */ __webpack_exports__["a"] = (function(object) {
  W0 = W1 =
  X0 = Y0 = Z0 =
  X1 = Y1 = Z1 =
  X2 = Y2 = Z2 = 0;
  Object(__WEBPACK_IMPORTED_MODULE_2__stream__["a" /* default */])(object, centroidStream);

  var x = X2,
      y = Y2,
      z = Z2,
      m = x * x + y * y + z * z;

  // If the area-weighted ccentroid is undefined, fall back to length-weighted ccentroid.
  if (m < __WEBPACK_IMPORTED_MODULE_0__math__["j" /* epsilon2 */]) {
    x = X1, y = Y1, z = Z1;
    // If the feature has zero length, fall back to arithmetic mean of point vectors.
    if (W1 < __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */]) x = X0, y = Y0, z = Z0;
    m = x * x + y * y + z * z;
    // If the feature still has an undefined ccentroid, then return.
    if (m < __WEBPACK_IMPORTED_MODULE_0__math__["j" /* epsilon2 */]) return [NaN, NaN];
  }

  return [Object(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* atan2 */])(y, x) * __WEBPACK_IMPORTED_MODULE_0__math__["h" /* degrees */], Object(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* asin */])(z / Object(__WEBPACK_IMPORTED_MODULE_0__math__["u" /* sqrt */])(m)) * __WEBPACK_IMPORTED_MODULE_0__math__["h" /* degrees */]];
});


/***/ }),
/* 340 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 341 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rectangle__ = __webpack_require__(113);


/* harmony default export */ __webpack_exports__["a"] = (function() {
  var x0 = 0,
      y0 = 0,
      x1 = 960,
      y1 = 500,
      cache,
      cacheStream,
      clip;

  return clip = {
    stream: function(stream) {
      return cache && cacheStream === stream ? cache : cache = Object(__WEBPACK_IMPORTED_MODULE_0__rectangle__["a" /* default */])(x0, y0, x1, y1)(cacheStream = stream);
    },
    extent: function(_) {
      return arguments.length ? (x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1], cache = cacheStream = null, clip) : [[x0, y0], [x1, y1]];
    }
  };
});


/***/ }),
/* 342 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b, x0, y0, x1, y1) {
  var ax = a[0],
      ay = a[1],
      bx = b[0],
      by = b[1],
      t0 = 0,
      t1 = 1,
      dx = bx - ax,
      dy = by - ay,
      r;

  r = x0 - ax;
  if (!dx && r > 0) return;
  r /= dx;
  if (dx < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dx > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }

  r = x1 - ax;
  if (!dx && r < 0) return;
  r /= dx;
  if (dx < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dx > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }

  r = y0 - ay;
  if (!dy && r > 0) return;
  r /= dy;
  if (dy < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dy > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }

  r = y1 - ay;
  if (!dy && r < 0) return;
  r /= dy;
  if (dy < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dy > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }

  if (t0 > 0) a[0] = ax + t0 * dx, a[1] = ay + t0 * dy;
  if (t1 < 1) b[0] = ax + t1 * dx, b[1] = ay + t1 * dy;
  return true;
});


/***/ }),
/* 343 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polygonContains__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__distance__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(2);




var containsObjectType = {
  Feature: function(object, point) {
    return containsGeometry(object.geometry, point);
  },
  FeatureCollection: function(object, point) {
    var features = object.features, i = -1, n = features.length;
    while (++i < n) if (containsGeometry(features[i].geometry, point)) return true;
    return false;
  }
};

var containsGeometryType = {
  Sphere: function() {
    return true;
  },
  Point: function(object, point) {
    return containsPoint(object.coordinates, point);
  },
  MultiPoint: function(object, point) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) if (containsPoint(coordinates[i], point)) return true;
    return false;
  },
  LineString: function(object, point) {
    return containsLine(object.coordinates, point);
  },
  MultiLineString: function(object, point) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) if (containsLine(coordinates[i], point)) return true;
    return false;
  },
  Polygon: function(object, point) {
    return containsPolygon(object.coordinates, point);
  },
  MultiPolygon: function(object, point) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) if (containsPolygon(coordinates[i], point)) return true;
    return false;
  },
  GeometryCollection: function(object, point) {
    var geometries = object.geometries, i = -1, n = geometries.length;
    while (++i < n) if (containsGeometry(geometries[i], point)) return true;
    return false;
  }
};

function containsGeometry(geometry, point) {
  return geometry && containsGeometryType.hasOwnProperty(geometry.type)
      ? containsGeometryType[geometry.type](geometry, point)
      : false;
}

function containsPoint(coordinates, point) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__distance__["a" /* default */])(coordinates, point) === 0;
}

function containsLine(coordinates, point) {
  var ab = Object(__WEBPACK_IMPORTED_MODULE_1__distance__["a" /* default */])(coordinates[0], coordinates[1]),
      ao = Object(__WEBPACK_IMPORTED_MODULE_1__distance__["a" /* default */])(coordinates[0], point),
      ob = Object(__WEBPACK_IMPORTED_MODULE_1__distance__["a" /* default */])(point, coordinates[1]);
  return ao + ob <= ab + __WEBPACK_IMPORTED_MODULE_2__math__["i" /* epsilon */];
}

function containsPolygon(coordinates, point) {
  return !!Object(__WEBPACK_IMPORTED_MODULE_0__polygonContains__["a" /* default */])(coordinates.map(ringRadians), pointRadians(point));
}

function ringRadians(ring) {
  return ring = ring.map(pointRadians), ring.pop(), ring;
}

function pointRadians(point) {
  return [point[0] * __WEBPACK_IMPORTED_MODULE_2__math__["r" /* radians */], point[1] * __WEBPACK_IMPORTED_MODULE_2__math__["r" /* radians */]];
}

/* harmony default export */ __webpack_exports__["a"] = (function(object, point) {
  return (object && containsObjectType.hasOwnProperty(object.type)
      ? containsObjectType[object.type]
      : containsGeometry)(object, point);
});


/***/ }),
/* 344 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = graticule;
/* harmony export (immutable) */ __webpack_exports__["b"] = graticule10;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(2);



function graticuleX(y0, y1, dy) {
  var y = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["f" /* range */])(y0, y1 - __WEBPACK_IMPORTED_MODULE_1__math__["i" /* epsilon */], dy).concat(y1);
  return function(x) { return y.map(function(y) { return [x, y]; }); };
}

function graticuleY(x0, x1, dx) {
  var x = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["f" /* range */])(x0, x1 - __WEBPACK_IMPORTED_MODULE_1__math__["i" /* epsilon */], dx).concat(x1);
  return function(y) { return x.map(function(x) { return [x, y]; }); };
}

function graticule() {
  var x1, x0, X1, X0,
      y1, y0, Y1, Y0,
      dx = 10, dy = dx, DX = 90, DY = 360,
      x, y, X, Y,
      precision = 2.5;

  function graticule() {
    return {type: "MultiLineString", coordinates: lines()};
  }

  function lines() {
    return Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["f" /* range */])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* ceil */])(X0 / DX) * DX, X1, DX).map(X)
        .concat(Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["f" /* range */])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* ceil */])(Y0 / DY) * DY, Y1, DY).map(Y))
        .concat(Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["f" /* range */])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* ceil */])(x0 / dx) * dx, x1, dx).filter(function(x) { return Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(x % DX) > __WEBPACK_IMPORTED_MODULE_1__math__["i" /* epsilon */]; }).map(x))
        .concat(Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["f" /* range */])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* ceil */])(y0 / dy) * dy, y1, dy).filter(function(y) { return Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(y % DY) > __WEBPACK_IMPORTED_MODULE_1__math__["i" /* epsilon */]; }).map(y));
  }

  graticule.lines = function() {
    return lines().map(function(coordinates) { return {type: "LineString", coordinates: coordinates}; });
  };

  graticule.outline = function() {
    return {
      type: "Polygon",
      coordinates: [
        X(X0).concat(
        Y(Y1).slice(1),
        X(X1).reverse().slice(1),
        Y(Y0).reverse().slice(1))
      ]
    };
  };

  graticule.extent = function(_) {
    if (!arguments.length) return graticule.extentMinor();
    return graticule.extentMajor(_).extentMinor(_);
  };

  graticule.extentMajor = function(_) {
    if (!arguments.length) return [[X0, Y0], [X1, Y1]];
    X0 = +_[0][0], X1 = +_[1][0];
    Y0 = +_[0][1], Y1 = +_[1][1];
    if (X0 > X1) _ = X0, X0 = X1, X1 = _;
    if (Y0 > Y1) _ = Y0, Y0 = Y1, Y1 = _;
    return graticule.precision(precision);
  };

  graticule.extentMinor = function(_) {
    if (!arguments.length) return [[x0, y0], [x1, y1]];
    x0 = +_[0][0], x1 = +_[1][0];
    y0 = +_[0][1], y1 = +_[1][1];
    if (x0 > x1) _ = x0, x0 = x1, x1 = _;
    if (y0 > y1) _ = y0, y0 = y1, y1 = _;
    return graticule.precision(precision);
  };

  graticule.step = function(_) {
    if (!arguments.length) return graticule.stepMinor();
    return graticule.stepMajor(_).stepMinor(_);
  };

  graticule.stepMajor = function(_) {
    if (!arguments.length) return [DX, DY];
    DX = +_[0], DY = +_[1];
    return graticule;
  };

  graticule.stepMinor = function(_) {
    if (!arguments.length) return [dx, dy];
    dx = +_[0], dy = +_[1];
    return graticule;
  };

  graticule.precision = function(_) {
    if (!arguments.length) return precision;
    precision = +_;
    x = graticuleX(y0, y1, 90);
    y = graticuleY(x0, x1, precision);
    X = graticuleX(Y0, Y1, 90);
    Y = graticuleY(X0, X1, precision);
    return graticule;
  };

  return graticule
      .extentMajor([[-180, -90 + __WEBPACK_IMPORTED_MODULE_1__math__["i" /* epsilon */]], [180, 90 - __WEBPACK_IMPORTED_MODULE_1__math__["i" /* epsilon */]]])
      .extentMinor([[-180, -80 - __WEBPACK_IMPORTED_MODULE_1__math__["i" /* epsilon */]], [180, 80 + __WEBPACK_IMPORTED_MODULE_1__math__["i" /* epsilon */]]]);
}

function graticule10() {
  return graticule()();
}


/***/ }),
/* 345 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(2);


/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var x0 = a[0] * __WEBPACK_IMPORTED_MODULE_0__math__["r" /* radians */],
      y0 = a[1] * __WEBPACK_IMPORTED_MODULE_0__math__["r" /* radians */],
      x1 = b[0] * __WEBPACK_IMPORTED_MODULE_0__math__["r" /* radians */],
      y1 = b[1] * __WEBPACK_IMPORTED_MODULE_0__math__["r" /* radians */],
      cy0 = Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(y0),
      sy0 = Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(y0),
      cy1 = Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(y1),
      sy1 = Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(y1),
      kx0 = cy0 * Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(x0),
      ky0 = cy0 * Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(x0),
      kx1 = cy1 * Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(x1),
      ky1 = cy1 * Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(x1),
      d = 2 * Object(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* asin */])(Object(__WEBPACK_IMPORTED_MODULE_0__math__["u" /* sqrt */])(Object(__WEBPACK_IMPORTED_MODULE_0__math__["m" /* haversin */])(y1 - y0) + cy0 * cy1 * Object(__WEBPACK_IMPORTED_MODULE_0__math__["m" /* haversin */])(x1 - x0))),
      k = Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(d);

  var interpolate = d ? function(t) {
    var B = Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(t *= d) / k,
        A = Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(d - t) / k,
        x = A * kx0 + B * kx1,
        y = A * ky0 + B * ky1,
        z = A * sy0 + B * sy1;
    return [
      Object(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* atan2 */])(y, x) * __WEBPACK_IMPORTED_MODULE_0__math__["h" /* degrees */],
      Object(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* atan2 */])(z, Object(__WEBPACK_IMPORTED_MODULE_0__math__["u" /* sqrt */])(x * x + y * y)) * __WEBPACK_IMPORTED_MODULE_0__math__["h" /* degrees */]
    ];
  } : function() {
    return [x0 * __WEBPACK_IMPORTED_MODULE_0__math__["h" /* degrees */], y0 * __WEBPACK_IMPORTED_MODULE_0__math__["h" /* degrees */]];
  };

  interpolate.distance = d;

  return interpolate;
});


/***/ }),
/* 346 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__identity__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stream__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__area__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bounds__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__centroid__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__context__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__measure__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__string__ = __webpack_require__(351);









/* harmony default export */ __webpack_exports__["a"] = (function(projection, context) {
  var pointRadius = 4.5,
      projectionStream,
      contextStream;

  function path(object) {
    if (object) {
      if (typeof pointRadius === "function") contextStream.pointRadius(+pointRadius.apply(this, arguments));
      Object(__WEBPACK_IMPORTED_MODULE_1__stream__["a" /* default */])(object, projectionStream(contextStream));
    }
    return contextStream.result();
  }

  path.area = function(object) {
    Object(__WEBPACK_IMPORTED_MODULE_1__stream__["a" /* default */])(object, projectionStream(__WEBPACK_IMPORTED_MODULE_2__area__["a" /* default */]));
    return __WEBPACK_IMPORTED_MODULE_2__area__["a" /* default */].result();
  };

  path.measure = function(object) {
    Object(__WEBPACK_IMPORTED_MODULE_1__stream__["a" /* default */])(object, projectionStream(__WEBPACK_IMPORTED_MODULE_6__measure__["a" /* default */]));
    return __WEBPACK_IMPORTED_MODULE_6__measure__["a" /* default */].result();
  };

  path.bounds = function(object) {
    Object(__WEBPACK_IMPORTED_MODULE_1__stream__["a" /* default */])(object, projectionStream(__WEBPACK_IMPORTED_MODULE_3__bounds__["a" /* default */]));
    return __WEBPACK_IMPORTED_MODULE_3__bounds__["a" /* default */].result();
  };

  path.centroid = function(object) {
    Object(__WEBPACK_IMPORTED_MODULE_1__stream__["a" /* default */])(object, projectionStream(__WEBPACK_IMPORTED_MODULE_4__centroid__["a" /* default */]));
    return __WEBPACK_IMPORTED_MODULE_4__centroid__["a" /* default */].result();
  };

  path.projection = function(_) {
    return arguments.length ? (projectionStream = _ == null ? (projection = null, __WEBPACK_IMPORTED_MODULE_0__identity__["a" /* default */]) : (projection = _).stream, path) : projection;
  };

  path.context = function(_) {
    if (!arguments.length) return context;
    contextStream = _ == null ? (context = null, new __WEBPACK_IMPORTED_MODULE_7__string__["a" /* default */]) : new __WEBPACK_IMPORTED_MODULE_5__context__["a" /* default */](context = _);
    if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
    return path;
  };

  path.pointRadius = function(_) {
    if (!arguments.length) return pointRadius;
    pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
    return path;
  };

  return path.projection(projection).context(context);
});


/***/ }),
/* 347 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adder__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__noop__ = __webpack_require__(32);




var areaSum = Object(__WEBPACK_IMPORTED_MODULE_0__adder__["a" /* default */])(),
    areaRingSum = Object(__WEBPACK_IMPORTED_MODULE_0__adder__["a" /* default */])(),
    x00,
    y00,
    x0,
    y0;

var areaStream = {
  point: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  lineStart: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  lineEnd: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  polygonStart: function() {
    areaStream.lineStart = areaRingStart;
    areaStream.lineEnd = areaRingEnd;
  },
  polygonEnd: function() {
    areaStream.lineStart = areaStream.lineEnd = areaStream.point = __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */];
    areaSum.add(Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(areaRingSum));
    areaRingSum.reset();
  },
  result: function() {
    var area = areaSum / 2;
    areaSum.reset();
    return area;
  }
};

function areaRingStart() {
  areaStream.point = areaPointFirst;
}

function areaPointFirst(x, y) {
  areaStream.point = areaPoint;
  x00 = x0 = x, y00 = y0 = y;
}

function areaPoint(x, y) {
  areaRingSum.add(y0 * x - x0 * y);
  x0 = x, y0 = y;
}

function areaRingEnd() {
  areaPoint(x00, y00);
}

/* harmony default export */ __webpack_exports__["a"] = (areaStream);


/***/ }),
/* 348 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(2);


// TODO Enforce positive area for exterior, negative area for interior?

var X0 = 0,
    Y0 = 0,
    Z0 = 0,
    X1 = 0,
    Y1 = 0,
    Z1 = 0,
    X2 = 0,
    Y2 = 0,
    Z2 = 0,
    x00,
    y00,
    x0,
    y0;

var centroidStream = {
  point: centroidPoint,
  lineStart: centroidLineStart,
  lineEnd: centroidLineEnd,
  polygonStart: function() {
    centroidStream.lineStart = centroidRingStart;
    centroidStream.lineEnd = centroidRingEnd;
  },
  polygonEnd: function() {
    centroidStream.point = centroidPoint;
    centroidStream.lineStart = centroidLineStart;
    centroidStream.lineEnd = centroidLineEnd;
  },
  result: function() {
    var centroid = Z2 ? [X2 / Z2, Y2 / Z2]
        : Z1 ? [X1 / Z1, Y1 / Z1]
        : Z0 ? [X0 / Z0, Y0 / Z0]
        : [NaN, NaN];
    X0 = Y0 = Z0 =
    X1 = Y1 = Z1 =
    X2 = Y2 = Z2 = 0;
    return centroid;
  }
};

function centroidPoint(x, y) {
  X0 += x;
  Y0 += y;
  ++Z0;
}

function centroidLineStart() {
  centroidStream.point = centroidPointFirstLine;
}

function centroidPointFirstLine(x, y) {
  centroidStream.point = centroidPointLine;
  centroidPoint(x0 = x, y0 = y);
}

function centroidPointLine(x, y) {
  var dx = x - x0, dy = y - y0, z = Object(__WEBPACK_IMPORTED_MODULE_0__math__["u" /* sqrt */])(dx * dx + dy * dy);
  X1 += z * (x0 + x) / 2;
  Y1 += z * (y0 + y) / 2;
  Z1 += z;
  centroidPoint(x0 = x, y0 = y);
}

function centroidLineEnd() {
  centroidStream.point = centroidPoint;
}

function centroidRingStart() {
  centroidStream.point = centroidPointFirstRing;
}

function centroidRingEnd() {
  centroidPointRing(x00, y00);
}

function centroidPointFirstRing(x, y) {
  centroidStream.point = centroidPointRing;
  centroidPoint(x00 = x0 = x, y00 = y0 = y);
}

function centroidPointRing(x, y) {
  var dx = x - x0,
      dy = y - y0,
      z = Object(__WEBPACK_IMPORTED_MODULE_0__math__["u" /* sqrt */])(dx * dx + dy * dy);

  X1 += z * (x0 + x) / 2;
  Y1 += z * (y0 + y) / 2;
  Z1 += z;

  z = y0 * x - x0 * y;
  X2 += z * (x0 + x);
  Y2 += z * (y0 + y);
  Z2 += z * 3;
  centroidPoint(x0 = x, y0 = y);
}

/* harmony default export */ __webpack_exports__["a"] = (centroidStream);


/***/ }),
/* 349 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = PathContext;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__noop__ = __webpack_require__(32);



function PathContext(context) {
  this._context = context;
}

PathContext.prototype = {
  _radius: 4.5,
  pointRadius: function(_) {
    return this._radius = _, this;
  },
  polygonStart: function() {
    this._line = 0;
  },
  polygonEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line === 0) this._context.closePath();
    this._point = NaN;
  },
  point: function(x, y) {
    switch (this._point) {
      case 0: {
        this._context.moveTo(x, y);
        this._point = 1;
        break;
      }
      case 1: {
        this._context.lineTo(x, y);
        break;
      }
      default: {
        this._context.moveTo(x + this._radius, y);
        this._context.arc(x, y, this._radius, 0, __WEBPACK_IMPORTED_MODULE_0__math__["w" /* tau */]);
        break;
      }
    }
  },
  result: __WEBPACK_IMPORTED_MODULE_1__noop__["a" /* default */]
};


/***/ }),
/* 350 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adder__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__noop__ = __webpack_require__(32);




var lengthSum = Object(__WEBPACK_IMPORTED_MODULE_0__adder__["a" /* default */])(),
    lengthRing,
    x00,
    y00,
    x0,
    y0;

var lengthStream = {
  point: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  lineStart: function() {
    lengthStream.point = lengthPointFirst;
  },
  lineEnd: function() {
    if (lengthRing) lengthPoint(x00, y00);
    lengthStream.point = __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */];
  },
  polygonStart: function() {
    lengthRing = true;
  },
  polygonEnd: function() {
    lengthRing = null;
  },
  result: function() {
    var length = +lengthSum;
    lengthSum.reset();
    return length;
  }
};

function lengthPointFirst(x, y) {
  lengthStream.point = lengthPoint;
  x00 = x0 = x, y00 = y0 = y;
}

function lengthPoint(x, y) {
  x0 -= x, y0 -= y;
  lengthSum.add(Object(__WEBPACK_IMPORTED_MODULE_1__math__["u" /* sqrt */])(x0 * x0 + y0 * y0));
  x0 = x, y0 = y;
}

/* harmony default export */ __webpack_exports__["a"] = (lengthStream);


/***/ }),
/* 351 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = PathString;
function PathString() {
  this._string = [];
}

PathString.prototype = {
  _radius: 4.5,
  _circle: circle(4.5),
  pointRadius: function(_) {
    if ((_ = +_) !== this._radius) this._radius = _, this._circle = null;
    return this;
  },
  polygonStart: function() {
    this._line = 0;
  },
  polygonEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line === 0) this._string.push("Z");
    this._point = NaN;
  },
  point: function(x, y) {
    switch (this._point) {
      case 0: {
        this._string.push("M", x, ",", y);
        this._point = 1;
        break;
      }
      case 1: {
        this._string.push("L", x, ",", y);
        break;
      }
      default: {
        if (this._circle == null) this._circle = circle(this._radius);
        this._string.push("M", x, ",", y, this._circle);
        break;
      }
    }
  },
  result: function() {
    if (this._string.length) {
      var result = this._string.join("");
      this._string = [];
      return result;
    } else {
      return null;
    }
  }
};

function circle(radius) {
  return "m0," + radius
      + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius
      + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius
      + "z";
}


/***/ }),
/* 352 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cartesian__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transform__ = __webpack_require__(114);




var maxDepth = 16, // maximum depth of subdivision
    cosMinDistance = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* cos */])(30 * __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */]); // cos(minimum angular distance)

/* harmony default export */ __webpack_exports__["a"] = (function(project, delta2) {
  return +delta2 ? resample(project, delta2) : resampleNone(project);
});

function resampleNone(project) {
  return Object(__WEBPACK_IMPORTED_MODULE_2__transform__["b" /* transformer */])({
    point: function(x, y) {
      x = project(x, y);
      this.stream.point(x[0], x[1]);
    }
  });
}

function resample(project, delta2) {

  function resampleLineTo(x0, y0, lambda0, a0, b0, c0, x1, y1, lambda1, a1, b1, c1, depth, stream) {
    var dx = x1 - x0,
        dy = y1 - y0,
        d2 = dx * dx + dy * dy;
    if (d2 > 4 * delta2 && depth--) {
      var a = a0 + a1,
          b = b0 + b1,
          c = c0 + c1,
          m = Object(__WEBPACK_IMPORTED_MODULE_1__math__["u" /* sqrt */])(a * a + b * b + c * c),
          phi2 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* asin */])(c /= m),
          lambda2 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(c) - 1) < __WEBPACK_IMPORTED_MODULE_1__math__["i" /* epsilon */] || Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(lambda0 - lambda1) < __WEBPACK_IMPORTED_MODULE_1__math__["i" /* epsilon */] ? (lambda0 + lambda1) / 2 : Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* atan2 */])(b, a),
          p = project(lambda2, phi2),
          x2 = p[0],
          y2 = p[1],
          dx2 = x2 - x0,
          dy2 = y2 - y0,
          dz = dy * dx2 - dx * dy2;
      if (dz * dz / d2 > delta2 // perpendicular projected distance
          || Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])((dx * dx2 + dy * dy2) / d2 - 0.5) > 0.3 // midpoint close to an end
          || a0 * a1 + b0 * b1 + c0 * c1 < cosMinDistance) { // angular distance
        resampleLineTo(x0, y0, lambda0, a0, b0, c0, x2, y2, lambda2, a /= m, b /= m, c, depth, stream);
        stream.point(x2, y2);
        resampleLineTo(x2, y2, lambda2, a, b, c, x1, y1, lambda1, a1, b1, c1, depth, stream);
      }
    }
  }
  return function(stream) {
    var lambda00, x00, y00, a00, b00, c00, // first point
        lambda0, x0, y0, a0, b0, c0; // previous point

    var resampleStream = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: function() { stream.polygonStart(); resampleStream.lineStart = ringStart; },
      polygonEnd: function() { stream.polygonEnd(); resampleStream.lineStart = lineStart; }
    };

    function point(x, y) {
      x = project(x, y);
      stream.point(x[0], x[1]);
    }

    function lineStart() {
      x0 = NaN;
      resampleStream.point = linePoint;
      stream.lineStart();
    }

    function linePoint(lambda, phi) {
      var c = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["a" /* cartesian */])([lambda, phi]), p = project(lambda, phi);
      resampleLineTo(x0, y0, lambda0, a0, b0, c0, x0 = p[0], y0 = p[1], lambda0 = lambda, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
      stream.point(x0, y0);
    }

    function lineEnd() {
      resampleStream.point = point;
      stream.lineEnd();
    }

    function ringStart() {
      lineStart();
      resampleStream.point = ringPoint;
      resampleStream.lineEnd = ringEnd;
    }

    function ringPoint(lambda, phi) {
      linePoint(lambda00 = lambda, phi), x00 = x0, y00 = y0, a00 = a0, b00 = b0, c00 = c0;
      resampleStream.point = linePoint;
    }

    function ringEnd() {
      resampleLineTo(x0, y0, lambda0, a0, b0, c0, x00, y00, lambda00, a00, b00, c00, maxDepth, stream);
      resampleStream.lineEnd = lineEnd;
      lineEnd();
    }

    return resampleStream;
  };
}


/***/ }),
/* 353 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = cylindricalEqualAreaRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(2);


function cylindricalEqualAreaRaw(phi0) {
  var cosPhi0 = Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(phi0);

  function forward(lambda, phi) {
    return [lambda * cosPhi0, Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(phi) / cosPhi0];
  }

  forward.invert = function(x, y) {
    return [x / cosPhi0, Object(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* asin */])(y * cosPhi0)];
  };

  return forward;
}


/***/ }),
/* 354 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__albers__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__conicEqualArea__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fit__ = __webpack_require__(298);





// The projections must have mutually exclusive clip regions on the sphere,
// as this will avoid emitting interleaving lines and polygons.
function multiplex(streams) {
  var n = streams.length;
  return {
    point: function(x, y) { var i = -1; while (++i < n) streams[i].point(x, y); },
    sphere: function() { var i = -1; while (++i < n) streams[i].sphere(); },
    lineStart: function() { var i = -1; while (++i < n) streams[i].lineStart(); },
    lineEnd: function() { var i = -1; while (++i < n) streams[i].lineEnd(); },
    polygonStart: function() { var i = -1; while (++i < n) streams[i].polygonStart(); },
    polygonEnd: function() { var i = -1; while (++i < n) streams[i].polygonEnd(); }
  };
}

// A composite projection for the United States, configured by default for
// 960×500. The projection also works quite well at 960×600 if you change the
// scale to 1285 and adjust the translate accordingly. The set of standard
// parallels for each region comes from USGS, which is published here:
// http://egsc.usgs.gov/isb/pubs/MapProjections/projections.html#albers
/* harmony default export */ __webpack_exports__["a"] = (function() {
  var cache,
      cacheStream,
      lower48 = Object(__WEBPACK_IMPORTED_MODULE_1__albers__["a" /* default */])(), lower48Point,
      alaska = Object(__WEBPACK_IMPORTED_MODULE_2__conicEqualArea__["b" /* default */])().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), alaskaPoint, // EPSG:3338
      hawaii = Object(__WEBPACK_IMPORTED_MODULE_2__conicEqualArea__["b" /* default */])().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), hawaiiPoint, // ESRI:102007
      point, pointStream = {point: function(x, y) { point = [x, y]; }};

  function albersUsa(coordinates) {
    var x = coordinates[0], y = coordinates[1];
    return point = null,
        (lower48Point.point(x, y), point)
        || (alaskaPoint.point(x, y), point)
        || (hawaiiPoint.point(x, y), point);
  }

  albersUsa.invert = function(coordinates) {
    var k = lower48.scale(),
        t = lower48.translate(),
        x = (coordinates[0] - t[0]) / k,
        y = (coordinates[1] - t[1]) / k;
    return (y >= 0.120 && y < 0.234 && x >= -0.425 && x < -0.214 ? alaska
        : y >= 0.166 && y < 0.234 && x >= -0.214 && x < -0.115 ? hawaii
        : lower48).invert(coordinates);
  };

  albersUsa.stream = function(stream) {
    return cache && cacheStream === stream ? cache : cache = multiplex([lower48.stream(cacheStream = stream), alaska.stream(stream), hawaii.stream(stream)]);
  };

  albersUsa.precision = function(_) {
    if (!arguments.length) return lower48.precision();
    lower48.precision(_), alaska.precision(_), hawaii.precision(_);
    return reset();
  };

  albersUsa.scale = function(_) {
    if (!arguments.length) return lower48.scale();
    lower48.scale(_), alaska.scale(_ * 0.35), hawaii.scale(_);
    return albersUsa.translate(lower48.translate());
  };

  albersUsa.translate = function(_) {
    if (!arguments.length) return lower48.translate();
    var k = lower48.scale(), x = +_[0], y = +_[1];

    lower48Point = lower48
        .translate(_)
        .clipExtent([[x - 0.455 * k, y - 0.238 * k], [x + 0.455 * k, y + 0.238 * k]])
        .stream(pointStream);

    alaskaPoint = alaska
        .translate([x - 0.307 * k, y + 0.201 * k])
        .clipExtent([[x - 0.425 * k + __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */], y + 0.120 * k + __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */]], [x - 0.214 * k - __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */], y + 0.234 * k - __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */]]])
        .stream(pointStream);

    hawaiiPoint = hawaii
        .translate([x - 0.205 * k, y + 0.212 * k])
        .clipExtent([[x - 0.214 * k + __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */], y + 0.166 * k + __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */]], [x - 0.115 * k - __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */], y + 0.234 * k - __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */]]])
        .stream(pointStream);

    return reset();
  };

  albersUsa.fitExtent = function(extent, object) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__fit__["a" /* fitExtent */])(albersUsa, extent, object);
  };

  albersUsa.fitSize = function(size, object) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__fit__["c" /* fitSize */])(albersUsa, size, object);
  };

  albersUsa.fitWidth = function(width, object) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__fit__["d" /* fitWidth */])(albersUsa, width, object);
  };

  albersUsa.fitHeight = function(height, object) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__fit__["b" /* fitHeight */])(albersUsa, height, object);
  };

  function reset() {
    cache = cacheStream = null;
    return albersUsa;
  }

  return albersUsa.scale(1070);
});


/***/ }),
/* 355 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return azimuthalEqualAreaRaw; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__azimuthal__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(21);




var azimuthalEqualAreaRaw = Object(__WEBPACK_IMPORTED_MODULE_1__azimuthal__["b" /* azimuthalRaw */])(function(cxcy) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__math__["u" /* sqrt */])(2 / (1 + cxcy));
});

azimuthalEqualAreaRaw.invert = Object(__WEBPACK_IMPORTED_MODULE_1__azimuthal__["a" /* azimuthalInvert */])(function(z) {
  return 2 * Object(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* asin */])(z / 2);
});

/* harmony default export */ __webpack_exports__["b"] = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_2__index__["a" /* default */])(azimuthalEqualAreaRaw)
      .scale(124.75)
      .clipAngle(180 - 1e-3);
});


/***/ }),
/* 356 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return azimuthalEquidistantRaw; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__azimuthal__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(21);




var azimuthalEquidistantRaw = Object(__WEBPACK_IMPORTED_MODULE_1__azimuthal__["b" /* azimuthalRaw */])(function(c) {
  return (c = Object(__WEBPACK_IMPORTED_MODULE_0__math__["b" /* acos */])(c)) && c / Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(c);
});

azimuthalEquidistantRaw.invert = Object(__WEBPACK_IMPORTED_MODULE_1__azimuthal__["a" /* azimuthalInvert */])(function(z) {
  return z;
});

/* harmony default export */ __webpack_exports__["b"] = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_2__index__["a" /* default */])(azimuthalEquidistantRaw)
      .scale(79.4188)
      .clipAngle(180 - 1e-3);
});


/***/ }),
/* 357 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = conicConformalRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__conic__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mercator__ = __webpack_require__(299);




function tany(y) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__math__["v" /* tan */])((__WEBPACK_IMPORTED_MODULE_0__math__["l" /* halfPi */] + y) / 2);
}

function conicConformalRaw(y0, y1) {
  var cy0 = Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(y0),
      n = y0 === y1 ? Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(y0) : Object(__WEBPACK_IMPORTED_MODULE_0__math__["n" /* log */])(cy0 / Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(y1)) / Object(__WEBPACK_IMPORTED_MODULE_0__math__["n" /* log */])(tany(y1) / tany(y0)),
      f = cy0 * Object(__WEBPACK_IMPORTED_MODULE_0__math__["p" /* pow */])(tany(y0), n) / n;

  if (!n) return __WEBPACK_IMPORTED_MODULE_2__mercator__["c" /* mercatorRaw */];

  function project(x, y) {
    if (f > 0) { if (y < -__WEBPACK_IMPORTED_MODULE_0__math__["l" /* halfPi */] + __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */]) y = -__WEBPACK_IMPORTED_MODULE_0__math__["l" /* halfPi */] + __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */]; }
    else { if (y > __WEBPACK_IMPORTED_MODULE_0__math__["l" /* halfPi */] - __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */]) y = __WEBPACK_IMPORTED_MODULE_0__math__["l" /* halfPi */] - __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */]; }
    var r = f / Object(__WEBPACK_IMPORTED_MODULE_0__math__["p" /* pow */])(tany(y), n);
    return [r * Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(n * x), f - r * Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(n * x)];
  }

  project.invert = function(x, y) {
    var fy = f - y, r = Object(__WEBPACK_IMPORTED_MODULE_0__math__["s" /* sign */])(n) * Object(__WEBPACK_IMPORTED_MODULE_0__math__["u" /* sqrt */])(x * x + fy * fy);
    return [Object(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* atan2 */])(x, Object(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* abs */])(fy)) / n * Object(__WEBPACK_IMPORTED_MODULE_0__math__["s" /* sign */])(fy), 2 * Object(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* atan */])(Object(__WEBPACK_IMPORTED_MODULE_0__math__["p" /* pow */])(f / r, 1 / n)) - __WEBPACK_IMPORTED_MODULE_0__math__["l" /* halfPi */]];
  };

  return project;
}

/* harmony default export */ __webpack_exports__["b"] = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_1__conic__["a" /* conicProjection */])(conicConformalRaw)
      .scale(109.5)
      .parallels([30, 30]);
});


/***/ }),
/* 358 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = conicEquidistantRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__conic__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__equirectangular__ = __webpack_require__(320);




function conicEquidistantRaw(y0, y1) {
  var cy0 = Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(y0),
      n = y0 === y1 ? Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(y0) : (cy0 - Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(y1)) / (y1 - y0),
      g = cy0 / n + y0;

  if (Object(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* abs */])(n) < __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */]) return __WEBPACK_IMPORTED_MODULE_2__equirectangular__["b" /* equirectangularRaw */];

  function project(x, y) {
    var gy = g - y, nx = n * x;
    return [gy * Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(nx), g - gy * Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(nx)];
  }

  project.invert = function(x, y) {
    var gy = g - y;
    return [Object(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* atan2 */])(x, Object(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* abs */])(gy)) / n * Object(__WEBPACK_IMPORTED_MODULE_0__math__["s" /* sign */])(gy), g - Object(__WEBPACK_IMPORTED_MODULE_0__math__["s" /* sign */])(n) * Object(__WEBPACK_IMPORTED_MODULE_0__math__["u" /* sqrt */])(x * x + gy * gy)];
  };

  return project;
}

/* harmony default export */ __webpack_exports__["b"] = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_1__conic__["a" /* conicProjection */])(conicEquidistantRaw)
      .scale(131.154)
      .center([0, 13.9389]);
});


/***/ }),
/* 359 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = equalEarthRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(2);



var A1 = 1.340264,
    A2 = -0.081106,
    A3 = 0.000893,
    A4 = 0.003796,
    M = Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["u" /* sqrt */])(3) / 2,
    iterations = 12;

function equalEarthRaw(lambda, phi) {
  var l = Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* asin */])(M * Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["t" /* sin */])(phi)), l2 = l * l, l6 = l2 * l2 * l2;
  return [
    lambda * Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* cos */])(l) / (M * (A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2))),
    l * (A1 + A2 * l2 + l6 * (A3 + A4 * l2))
  ];
}

equalEarthRaw.invert = function(x, y) {
  var l = y, l2 = l * l, l6 = l2 * l2 * l2;
  for (var i = 0, delta, fy, fpy; i < iterations; ++i) {
    fy = l * (A1 + A2 * l2 + l6 * (A3 + A4 * l2)) - y;
    fpy = A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2);
    l -= delta = fy / fpy, l2 = l * l, l6 = l2 * l2 * l2;
    if (Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* abs */])(delta) < __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* epsilon2 */]) break;
  }
  return [
    M * x * (A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2)) / Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* cos */])(l),
    Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* asin */])(Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["t" /* sin */])(l) / M)
  ];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */])(equalEarthRaw)
      .scale(177.158);
});


/***/ }),
/* 360 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = gnomonicRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__azimuthal__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(21);




function gnomonicRaw(x, y) {
  var cy = Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(y), k = Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(x) * cy;
  return [cy * Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(x) / k, Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(y) / k];
}

gnomonicRaw.invert = Object(__WEBPACK_IMPORTED_MODULE_1__azimuthal__["a" /* azimuthalInvert */])(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* atan */]);

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_2__index__["a" /* default */])(gnomonicRaw)
      .scale(144.049)
      .clipAngle(60);
});


/***/ }),
/* 361 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clip_rectangle__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__identity__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transform__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fit__ = __webpack_require__(298);





function scaleTranslate(kx, ky, tx, ty) {
  return kx === 1 && ky === 1 && tx === 0 && ty === 0 ? __WEBPACK_IMPORTED_MODULE_1__identity__["a" /* default */] : Object(__WEBPACK_IMPORTED_MODULE_2__transform__["b" /* transformer */])({
    point: function(x, y) {
      this.stream.point(x * kx + tx, y * ky + ty);
    }
  });
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  var k = 1, tx = 0, ty = 0, sx = 1, sy = 1, transform = __WEBPACK_IMPORTED_MODULE_1__identity__["a" /* default */], // scale, translate and reflect
      x0 = null, y0, x1, y1, // clip extent
      postclip = __WEBPACK_IMPORTED_MODULE_1__identity__["a" /* default */],
      cache,
      cacheStream,
      projection;

  function reset() {
    cache = cacheStream = null;
    return projection;
  }

  return projection = {
    stream: function(stream) {
      return cache && cacheStream === stream ? cache : cache = transform(postclip(cacheStream = stream));
    },
    postclip: function(_) {
      return arguments.length ? (postclip = _, x0 = y0 = x1 = y1 = null, reset()) : postclip;
    },
    clipExtent: function(_) {
      return arguments.length ? (postclip = _ == null ? (x0 = y0 = x1 = y1 = null, __WEBPACK_IMPORTED_MODULE_1__identity__["a" /* default */]) : Object(__WEBPACK_IMPORTED_MODULE_0__clip_rectangle__["a" /* default */])(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reset()) : x0 == null ? null : [[x0, y0], [x1, y1]];
    },
    scale: function(_) {
      return arguments.length ? (transform = scaleTranslate((k = +_) * sx, k * sy, tx, ty), reset()) : k;
    },
    translate: function(_) {
      return arguments.length ? (transform = scaleTranslate(k * sx, k * sy, tx = +_[0], ty = +_[1]), reset()) : [tx, ty];
    },
    reflectX: function(_) {
      return arguments.length ? (transform = scaleTranslate(k * (sx = _ ? -1 : 1), k * sy, tx, ty), reset()) : sx < 0;
    },
    reflectY: function(_) {
      return arguments.length ? (transform = scaleTranslate(k * sx, k * (sy = _ ? -1 : 1), tx, ty), reset()) : sy < 0;
    },
    fitExtent: function(extent, object) {
      return Object(__WEBPACK_IMPORTED_MODULE_3__fit__["a" /* fitExtent */])(projection, extent, object);
    },
    fitSize: function(size, object) {
      return Object(__WEBPACK_IMPORTED_MODULE_3__fit__["c" /* fitSize */])(projection, size, object);
    },
    fitWidth: function(width, object) {
      return Object(__WEBPACK_IMPORTED_MODULE_3__fit__["d" /* fitWidth */])(projection, width, object);
    },
    fitHeight: function(height, object) {
      return Object(__WEBPACK_IMPORTED_MODULE_3__fit__["b" /* fitHeight */])(projection, height, object);
    }
  };
});


/***/ }),
/* 362 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = naturalEarth1Raw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(2);



function naturalEarth1Raw(lambda, phi) {
  var phi2 = phi * phi, phi4 = phi2 * phi2;
  return [
    lambda * (0.8707 - 0.131979 * phi2 + phi4 * (-0.013791 + phi4 * (0.003971 * phi2 - 0.001529 * phi4))),
    phi * (1.007226 + phi2 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi2 - 0.005916 * phi4)))
  ];
}

naturalEarth1Raw.invert = function(x, y) {
  var phi = y, i = 25, delta;
  do {
    var phi2 = phi * phi, phi4 = phi2 * phi2;
    phi -= delta = (phi * (1.007226 + phi2 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi2 - 0.005916 * phi4))) - y) /
        (1.007226 + phi2 * (0.015085 * 3 + phi4 * (-0.044475 * 7 + 0.028874 * 9 * phi2 - 0.005916 * 11 * phi4)));
  } while (Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(delta) > __WEBPACK_IMPORTED_MODULE_1__math__["i" /* epsilon */] && --i > 0);
  return [
    x / (0.8707 + (phi2 = phi * phi) * (-0.131979 + phi2 * (-0.013791 + phi2 * phi2 * phi2 * (0.003971 - 0.001529 * phi2)))),
    phi
  ];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__index__["a" /* default */])(naturalEarth1Raw)
      .scale(175.295);
});


/***/ }),
/* 363 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = orthographicRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__azimuthal__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(21);




function orthographicRaw(x, y) {
  return [Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(y) * Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(x), Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(y)];
}

orthographicRaw.invert = Object(__WEBPACK_IMPORTED_MODULE_1__azimuthal__["a" /* azimuthalInvert */])(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* asin */]);

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_2__index__["a" /* default */])(orthographicRaw)
      .scale(249.5)
      .clipAngle(90 + __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */]);
});


/***/ }),
/* 364 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = stereographicRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__azimuthal__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(21);




function stereographicRaw(x, y) {
  var cy = Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(y), k = 1 + Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(x) * cy;
  return [cy * Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(x) / k, Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(y) / k];
}

stereographicRaw.invert = Object(__WEBPACK_IMPORTED_MODULE_1__azimuthal__["a" /* azimuthalInvert */])(function(z) {
  return 2 * Object(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* atan */])(z);
});

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_2__index__["a" /* default */])(stereographicRaw)
      .scale(250)
      .clipAngle(142);
});


/***/ }),
/* 365 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = transverseMercatorRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mercator__ = __webpack_require__(299);



function transverseMercatorRaw(lambda, phi) {
  return [Object(__WEBPACK_IMPORTED_MODULE_0__math__["n" /* log */])(Object(__WEBPACK_IMPORTED_MODULE_0__math__["v" /* tan */])((__WEBPACK_IMPORTED_MODULE_0__math__["l" /* halfPi */] + phi) / 2)), -lambda];
}

transverseMercatorRaw.invert = function(x, y) {
  return [-y, 2 * Object(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* atan */])(Object(__WEBPACK_IMPORTED_MODULE_0__math__["k" /* exp */])(x)) - __WEBPACK_IMPORTED_MODULE_0__math__["l" /* halfPi */]];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  var m = Object(__WEBPACK_IMPORTED_MODULE_1__mercator__["b" /* mercatorProjection */])(transverseMercatorRaw),
      center = m.center,
      rotate = m.rotate;

  m.center = function(_) {
    return arguments.length ? center([-_[1], _[0]]) : (_ = center(), [_[1], -_[0]]);
  };

  m.rotate = function(_) {
    return arguments.length ? rotate([_[0], _[1], _.length > 2 ? _[2] + 90 : 90]) : (_ = rotate(), [_[0], _[1], _[2] - 90]);
  };

  return rotate([0, 0, 90])
      .scale(159.155);
});


/***/ }),
/* 366 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_bbox__ = __webpack_require__(321);
/* unused harmony reexport bbox */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_feature__ = __webpack_require__(301);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__src_feature__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_mesh__ = __webpack_require__(368);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__src_mesh__["a"]; });
/* unused harmony reexport meshArcs */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_merge__ = __webpack_require__(369);
/* unused harmony reexport merge */
/* unused harmony reexport mergeArcs */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_neighbors__ = __webpack_require__(370);
/* unused harmony reexport neighbors */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_quantize__ = __webpack_require__(372);
/* unused harmony reexport quantize */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_transform__ = __webpack_require__(300);
/* unused harmony reexport transform */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_untransform__ = __webpack_require__(324);
/* unused harmony reexport untransform */










/***/ }),
/* 367 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(array, n) {
  var t, j = array.length, i = j - n;
  while (i < --j) t = array[i], array[i++] = array[j], array[j] = t;
});


/***/ }),
/* 368 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export meshArcs */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__feature__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stitch__ = __webpack_require__(323);



/* harmony default export */ __webpack_exports__["a"] = (function(topology) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__feature__["b" /* object */])(topology, meshArcs.apply(this, arguments));
});

function meshArcs(topology, object, filter) {
  var arcs, i, n;
  if (arguments.length > 1) arcs = extractArcs(topology, object, filter);
  else for (i = 0, arcs = new Array(n = topology.arcs.length); i < n; ++i) arcs[i] = i;
  return {type: "MultiLineString", arcs: Object(__WEBPACK_IMPORTED_MODULE_1__stitch__["a" /* default */])(topology, arcs)};
}

function extractArcs(topology, object, filter) {
  var arcs = [],
      geomsByArc = [],
      geom;

  function extract0(i) {
    var j = i < 0 ? ~i : i;
    (geomsByArc[j] || (geomsByArc[j] = [])).push({i: i, g: geom});
  }

  function extract1(arcs) {
    arcs.forEach(extract0);
  }

  function extract2(arcs) {
    arcs.forEach(extract1);
  }

  function extract3(arcs) {
    arcs.forEach(extract2);
  }

  function geometry(o) {
    switch (geom = o, o.type) {
      case "GeometryCollection": o.geometries.forEach(geometry); break;
      case "LineString": extract1(o.arcs); break;
      case "MultiLineString": case "Polygon": extract2(o.arcs); break;
      case "MultiPolygon": extract3(o.arcs); break;
    }
  }

  geometry(object);

  geomsByArc.forEach(filter == null
      ? function(geoms) { arcs.push(geoms[0].i); }
      : function(geoms) { if (filter(geoms[0].g, geoms[geoms.length - 1].g)) arcs.push(geoms[0].i); });

  return arcs;
}


/***/ }),
/* 369 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export mergeArcs */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__feature__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stitch__ = __webpack_require__(323);



function planarRingArea(ring) {
  var i = -1, n = ring.length, a, b = ring[n - 1], area = 0;
  while (++i < n) a = b, b = ring[i], area += a[0] * b[1] - a[1] * b[0];
  return Math.abs(area); // Note: doubled area!
}

/* unused harmony default export */ var _unused_webpack_default_export = (function(topology) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__feature__["b" /* object */])(topology, mergeArcs.apply(this, arguments));
});

function mergeArcs(topology, objects) {
  var polygonsByArc = {},
      polygons = [],
      groups = [];

  objects.forEach(geometry);

  function geometry(o) {
    switch (o.type) {
      case "GeometryCollection": o.geometries.forEach(geometry); break;
      case "Polygon": extract(o.arcs); break;
      case "MultiPolygon": o.arcs.forEach(extract); break;
    }
  }

  function extract(polygon) {
    polygon.forEach(function(ring) {
      ring.forEach(function(arc) {
        (polygonsByArc[arc = arc < 0 ? ~arc : arc] || (polygonsByArc[arc] = [])).push(polygon);
      });
    });
    polygons.push(polygon);
  }

  function area(ring) {
    return planarRingArea(Object(__WEBPACK_IMPORTED_MODULE_0__feature__["b" /* object */])(topology, {type: "Polygon", arcs: [ring]}).coordinates[0]);
  }

  polygons.forEach(function(polygon) {
    if (!polygon._) {
      var group = [],
          neighbors = [polygon];
      polygon._ = 1;
      groups.push(group);
      while (polygon = neighbors.pop()) {
        group.push(polygon);
        polygon.forEach(function(ring) {
          ring.forEach(function(arc) {
            polygonsByArc[arc < 0 ? ~arc : arc].forEach(function(polygon) {
              if (!polygon._) {
                polygon._ = 1;
                neighbors.push(polygon);
              }
            });
          });
        });
      }
    }
  });

  polygons.forEach(function(polygon) {
    delete polygon._;
  });

  return {
    type: "MultiPolygon",
    arcs: groups.map(function(polygons) {
      var arcs = [], n;

      // Extract the exterior (unique) arcs.
      polygons.forEach(function(polygon) {
        polygon.forEach(function(ring) {
          ring.forEach(function(arc) {
            if (polygonsByArc[arc < 0 ? ~arc : arc].length < 2) {
              arcs.push(arc);
            }
          });
        });
      });

      // Stitch the arcs into one or more rings.
      arcs = Object(__WEBPACK_IMPORTED_MODULE_1__stitch__["a" /* default */])(topology, arcs);

      // If more than one ring is returned,
      // at most one of these rings can be the exterior;
      // choose the one with the greatest absolute area.
      if ((n = arcs.length) > 1) {
        for (var i = 1, k = area(arcs[0]), ki, t; i < n; ++i) {
          if ((ki = area(arcs[i])) > k) {
            t = arcs[0], arcs[0] = arcs[i], arcs[i] = t, k = ki;
          }
        }
      }

      return arcs;
    })
  };
}


/***/ }),
/* 370 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bisect__ = __webpack_require__(371);


/* unused harmony default export */ var _unused_webpack_default_export = (function(objects) {
  var indexesByArc = {}, // arc index -> array of object indexes
      neighbors = objects.map(function() { return []; });

  function line(arcs, i) {
    arcs.forEach(function(a) {
      if (a < 0) a = ~a;
      var o = indexesByArc[a];
      if (o) o.push(i);
      else indexesByArc[a] = [i];
    });
  }

  function polygon(arcs, i) {
    arcs.forEach(function(arc) { line(arc, i); });
  }

  function geometry(o, i) {
    if (o.type === "GeometryCollection") o.geometries.forEach(function(o) { geometry(o, i); });
    else if (o.type in geometryType) geometryType[o.type](o.arcs, i);
  }

  var geometryType = {
    LineString: line,
    MultiLineString: polygon,
    Polygon: polygon,
    MultiPolygon: function(arcs, i) { arcs.forEach(function(arc) { polygon(arc, i); }); }
  };

  objects.forEach(geometry);

  for (var i in indexesByArc) {
    for (var indexes = indexesByArc[i], m = indexes.length, j = 0; j < m; ++j) {
      for (var k = j + 1; k < m; ++k) {
        var ij = indexes[j], ik = indexes[k], n;
        if ((n = neighbors[ij])[i = Object(__WEBPACK_IMPORTED_MODULE_0__bisect__["a" /* default */])(n, ik)] !== ik) n.splice(i, 0, ik);
        if ((n = neighbors[ik])[i = Object(__WEBPACK_IMPORTED_MODULE_0__bisect__["a" /* default */])(n, ij)] !== ij) n.splice(i, 0, ij);
      }
    }
  }

  return neighbors;
});


/***/ }),
/* 371 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, x) {
  var lo = 0, hi = a.length;
  while (lo < hi) {
    var mid = lo + hi >>> 1;
    if (a[mid] < x) lo = mid + 1;
    else hi = mid;
  }
  return lo;
});


/***/ }),
/* 372 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bbox__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__untransform__ = __webpack_require__(324);



/* unused harmony default export */ var _unused_webpack_default_export = (function(topology, transform) {
  if (topology.transform) throw new Error("already quantized");

  if (!transform || !transform.scale) {
    if (!((n = Math.floor(transform)) >= 2)) throw new Error("n must be ≥2");
    box = topology.bbox || Object(__WEBPACK_IMPORTED_MODULE_0__bbox__["a" /* default */])(topology);
    var x0 = box[0], y0 = box[1], x1 = box[2], y1 = box[3], n;
    transform = {scale: [x1 - x0 ? (x1 - x0) / (n - 1) : 1, y1 - y0 ? (y1 - y0) / (n - 1) : 1], translate: [x0, y0]};
  } else {
    box = topology.bbox;
  }

  var t = Object(__WEBPACK_IMPORTED_MODULE_1__untransform__["a" /* default */])(transform), box, key, inputs = topology.objects, outputs = {};

  function quantizePoint(point) {
    return t(point);
  }

  function quantizeGeometry(input) {
    var output;
    switch (input.type) {
      case "GeometryCollection": output = {type: "GeometryCollection", geometries: input.geometries.map(quantizeGeometry)}; break;
      case "Point": output = {type: "Point", coordinates: quantizePoint(input.coordinates)}; break;
      case "MultiPoint": output = {type: "MultiPoint", coordinates: input.coordinates.map(quantizePoint)}; break;
      default: return input;
    }
    if (input.id != null) output.id = input.id;
    if (input.bbox != null) output.bbox = input.bbox;
    if (input.properties != null) output.properties = input.properties;
    return output;
  }

  function quantizeArc(input) {
    var i = 0, j = 1, n = input.length, p, output = new Array(n); // pessimistic
    output[0] = t(input[0], 0);
    while (++i < n) if ((p = t(input[i], i))[0] || p[1]) output[j++] = p; // non-coincident points
    if (j === 1) output[j++] = [0, 0]; // an arc must have at least two points
    output.length = j;
    return output;
  }

  for (key in inputs) outputs[key] = quantizeGeometry(inputs[key]);

  return {
    type: "Topology",
    bbox: box,
    transform: transform,
    objects: outputs,
    arcs: topology.arcs.map(quantizeArc)
  };
});


/***/ }),
/* 373 */
/***/ (function(module, exports) {

module.exports = {"type":"Topology","objects":{"countries":{"type":"GeometryCollection","geometries":[{"type":"Polygon","arcs":[[0,1,2,3,4,5]],"id":"004"},{"type":"MultiPolygon","arcs":[[[6,7,8,9]],[[10,11,12]]],"id":"024"},{"type":"Polygon","arcs":[[13,14,15,16,17]],"id":"008"},{"type":"Polygon","arcs":[[18,19,20,21,22]],"id":"784"},{"type":"MultiPolygon","arcs":[[[23,24]],[[25,26,27,28,29,30]]],"id":"032"},{"type":"Polygon","arcs":[[31,32,33,34,35]],"id":"051"},{"type":"MultiPolygon","arcs":[[[36]],[[37]],[[38]],[[39]],[[40]],[[41]],[[42]],[[43]]],"id":"010"},{"type":"Polygon","arcs":[[44]],"id":"260"},{"type":"MultiPolygon","arcs":[[[45]],[[46]]],"id":"036"},{"type":"Polygon","arcs":[[47,48,49,50,51,52,53]],"id":"040"},{"type":"MultiPolygon","arcs":[[[54,-35]],[[55,56,-33,57,58]]],"id":"031"},{"type":"Polygon","arcs":[[59,60,61]],"id":"108"},{"type":"Polygon","arcs":[[62,63,64,65,66]],"id":"056"},{"type":"Polygon","arcs":[[67,68,69,70,71]],"id":"204"},{"type":"Polygon","arcs":[[72,73,74,-70,75,76]],"id":"854"},{"type":"Polygon","arcs":[[77,78,79]],"id":"050"},{"type":"Polygon","arcs":[[80,81,82,83,84,85]],"id":"100"},{"type":"MultiPolygon","arcs":[[[86]],[[87]],[[88]]],"id":"044"},{"type":"Polygon","arcs":[[89,90,91]],"id":"070"},{"type":"Polygon","arcs":[[92,93,94,95,96]],"id":"112"},{"type":"Polygon","arcs":[[97,98,99]],"id":"084"},{"type":"Polygon","arcs":[[100,101,102,103,-31]],"id":"068"},{"type":"Polygon","arcs":[[-27,104,-103,105,106,107,108,109,110,111,112]],"id":"076"},{"type":"Polygon","arcs":[[113,114]],"id":"096"},{"type":"Polygon","arcs":[[115,116]],"id":"064"},{"type":"Polygon","arcs":[[117,118,119,120]],"id":"072"},{"type":"Polygon","arcs":[[121,122,123,124,125,126,127]],"id":"140"},{"type":"MultiPolygon","arcs":[[[128]],[[129]],[[130]],[[131]],[[132]],[[133]],[[134]],[[135]],[[136]],[[137]],[[138,139,140,141]],[[142]],[[143]],[[144]],[[145]],[[146]],[[147]],[[148]],[[149]],[[150]],[[151]],[[152]],[[153]],[[154]],[[155]],[[156]],[[157]],[[158]],[[159]],[[160]]],"id":"124"},{"type":"Polygon","arcs":[[-51,161,162,163]],"id":"756"},{"type":"MultiPolygon","arcs":[[[-24,164]],[[-30,165,166,-101]]],"id":"152"},{"type":"MultiPolygon","arcs":[[[167]],[[168,169,170,171,172,173,-117,174,175,176,177,-4,178,179,180,181,182,183]]],"id":"156"},{"type":"Polygon","arcs":[[184,185,186,187,-73,188]],"id":"384"},{"type":"Polygon","arcs":[[189,190,191,192,193,194,-128,195]],"id":"120"},{"type":"Polygon","arcs":[[196,197,-60,198,199,200,201,-10,202,-13,203,-126,204]],"id":"180"},{"type":"Polygon","arcs":[[-12,205,206,-196,-127,-204]],"id":"178"},{"type":"Polygon","arcs":[[207,208,209,210,211,-107,212]],"id":"170"},{"type":"Polygon","arcs":[[213,214,215,216]],"id":"188"},{"type":"Polygon","arcs":[[217]],"id":"192"},{"type":"Polygon","arcs":[[218,219]],"id":"-99"},{"type":"Polygon","arcs":[[220,-220]],"id":"196"},{"type":"Polygon","arcs":[[-53,221,222,223]],"id":"203"},{"type":"Polygon","arcs":[[224,225,-222,-52,-164,226,227,-64,228,229,230]],"id":"276"},{"type":"Polygon","arcs":[[231,232,233,234]],"id":"262"},{"type":"MultiPolygon","arcs":[[[235]],[[-231,236]]],"id":"208"},{"type":"Polygon","arcs":[[237,238]],"id":"214"},{"type":"Polygon","arcs":[[239,240,241,242,243,244,245,246]],"id":"012"},{"type":"Polygon","arcs":[[247,-208,248]],"id":"218"},{"type":"Polygon","arcs":[[249,250,251,252,253]],"id":"818"},{"type":"Polygon","arcs":[[254,255,256,-235]],"id":"232"},{"type":"Polygon","arcs":[[257,258,259,260]],"id":"724"},{"type":"Polygon","arcs":[[261,262,263]],"id":"233"},{"type":"Polygon","arcs":[[-234,264,265,266,267,268,269,-255]],"id":"231"},{"type":"Polygon","arcs":[[270,271,272,273]],"id":"246"},{"type":"MultiPolygon","arcs":[[[274]],[[275]]],"id":"242"},{"type":"Polygon","arcs":[[276]],"id":"238"},{"type":"MultiPolygon","arcs":[[[277,278,279,-111]],[[280]],[[281,-227,-163,282,283,-259,284,-66]]],"id":"250"},{"type":"Polygon","arcs":[[285,286,-190,-207]],"id":"266"},{"type":"MultiPolygon","arcs":[[[287,288]],[[289]]],"id":"826"},{"type":"Polygon","arcs":[[290,291,-58,-32,292]],"id":"268"},{"type":"Polygon","arcs":[[293,-189,-77,294]],"id":"288"},{"type":"Polygon","arcs":[[295,296,297,298,299,300,-187]],"id":"324"},{"type":"Polygon","arcs":[[301,302]],"id":"270"},{"type":"Polygon","arcs":[[303,304,-299]],"id":"624"},{"type":"Polygon","arcs":[[305,-191,-287]],"id":"226"},{"type":"MultiPolygon","arcs":[[[306]],[[307,-15,308,-84,309]]],"id":"300"},{"type":"Polygon","arcs":[[310]],"id":"304"},{"type":"Polygon","arcs":[[311,312,-100,313,314,315]],"id":"320"},{"type":"Polygon","arcs":[[316,317,-109,318]],"id":"328"},{"type":"Polygon","arcs":[[319,320,-315,321,322]],"id":"340"},{"type":"Polygon","arcs":[[323,-92,324,325,326,327]],"id":"191"},{"type":"Polygon","arcs":[[-239,328]],"id":"332"},{"type":"Polygon","arcs":[[-48,329,330,331,332,-328,333]],"id":"348"},{"type":"MultiPolygon","arcs":[[[334]],[[335,336]],[[337]],[[338]],[[339]],[[340]],[[341]],[[342]],[[343,344]],[[345]],[[346]],[[347,348]],[[349]]],"id":"360"},{"type":"Polygon","arcs":[[-177,350,-175,-116,-174,351,-80,352,353]],"id":"356"},{"type":"Polygon","arcs":[[354,-288]],"id":"372"},{"type":"Polygon","arcs":[[355,-6,356,357,358,359,-55,-34,-57,360]],"id":"364"},{"type":"Polygon","arcs":[[361,362,363,364,365,366,-359]],"id":"368"},{"type":"Polygon","arcs":[[367]],"id":"352"},{"type":"Polygon","arcs":[[368,369,370,-254,371,372,373]],"id":"376"},{"type":"MultiPolygon","arcs":[[[374]],[[375]],[[376,377,-283,-162,-50]]],"id":"380"},{"type":"Polygon","arcs":[[378]],"id":"388"},{"type":"Polygon","arcs":[[-369,379,-365,380,381,-371,382]],"id":"400"},{"type":"MultiPolygon","arcs":[[[383]],[[384]],[[385]]],"id":"392"},{"type":"Polygon","arcs":[[386,387,388,389,-181,390]],"id":"398"},{"type":"Polygon","arcs":[[391,392,393,394,-267,395]],"id":"404"},{"type":"Polygon","arcs":[[-391,-180,396,397]],"id":"417"},{"type":"Polygon","arcs":[[398,399,400,401]],"id":"116"},{"type":"Polygon","arcs":[[402,403]],"id":"410"},{"type":"Polygon","arcs":[[-18,404,405,406]],"id":"-99"},{"type":"Polygon","arcs":[[407,408,-363]],"id":"414"},{"type":"Polygon","arcs":[[409,410,-172,411,-400]],"id":"418"},{"type":"Polygon","arcs":[[-373,412,413]],"id":"422"},{"type":"Polygon","arcs":[[414,415,-296,-186]],"id":"430"},{"type":"Polygon","arcs":[[416,-247,417,418,-252,419,420]],"id":"434"},{"type":"Polygon","arcs":[[421]],"id":"144"},{"type":"Polygon","arcs":[[422]],"id":"426"},{"type":"Polygon","arcs":[[423,424,425,-93,426]],"id":"440"},{"type":"Polygon","arcs":[[-228,-282,-65]],"id":"442"},{"type":"Polygon","arcs":[[427,-264,428,-94,-426]],"id":"428"},{"type":"Polygon","arcs":[[-244,429,430]],"id":"504"},{"type":"Polygon","arcs":[[431,432]],"id":"498"},{"type":"Polygon","arcs":[[433]],"id":"450"},{"type":"Polygon","arcs":[[434,-98,-313,435,436]],"id":"484"},{"type":"Polygon","arcs":[[-407,437,-85,-309,-14]],"id":"807"},{"type":"Polygon","arcs":[[438,-241,439,-74,-188,-301,440]],"id":"466"},{"type":"Polygon","arcs":[[441,-78,-352,-173,-411,442]],"id":"104"},{"type":"Polygon","arcs":[[443,-325,-91,444,-405,-17]],"id":"499"},{"type":"Polygon","arcs":[[445,-183]],"id":"496"},{"type":"Polygon","arcs":[[446,447,448,449,450,451,452,453]],"id":"508"},{"type":"Polygon","arcs":[[454,455,456,-242,-439]],"id":"478"},{"type":"Polygon","arcs":[[-454,457,458]],"id":"454"},{"type":"MultiPolygon","arcs":[[[459,460]],[[-348,461,-115,462]]],"id":"458"},{"type":"Polygon","arcs":[[463,-8,464,-119,465]],"id":"516"},{"type":"Polygon","arcs":[[466]],"id":"540"},{"type":"Polygon","arcs":[[-75,-440,-240,-417,467,-194,468,-71]],"id":"562"},{"type":"Polygon","arcs":[[469,-72,-469,-193]],"id":"566"},{"type":"Polygon","arcs":[[470,-323,471,-215]],"id":"558"},{"type":"Polygon","arcs":[[-229,-63,472]],"id":"528"},{"type":"MultiPolygon","arcs":[[[473,-274,474,475]],[[476]],[[477]],[[478]]],"id":"578"},{"type":"Polygon","arcs":[[-351,-176]],"id":"524"},{"type":"MultiPolygon","arcs":[[[479]],[[480]]],"id":"554"},{"type":"MultiPolygon","arcs":[[[481,482,-22,483]],[[-20,484]]],"id":"512"},{"type":"Polygon","arcs":[[-178,-354,485,-357,-5]],"id":"586"},{"type":"Polygon","arcs":[[486,-217,487,-210]],"id":"591"},{"type":"Polygon","arcs":[[-167,488,-249,-213,-106,-102]],"id":"604"},{"type":"MultiPolygon","arcs":[[[489]],[[490]],[[491]],[[492]],[[493]],[[494]],[[495]]],"id":"608"},{"type":"MultiPolygon","arcs":[[[496]],[[497]],[[-344,498]],[[499]]],"id":"598"},{"type":"Polygon","arcs":[[-226,500,501,-427,-97,502,503,-223]],"id":"616"},{"type":"Polygon","arcs":[[504]],"id":"630"},{"type":"Polygon","arcs":[[505,506,-404,507,-169]],"id":"408"},{"type":"Polygon","arcs":[[-261,508]],"id":"620"},{"type":"Polygon","arcs":[[-104,-105,-26]],"id":"600"},{"type":"Polygon","arcs":[[-383,-370]],"id":"275"},{"type":"Polygon","arcs":[[509,510]],"id":"634"},{"type":"Polygon","arcs":[[511,-433,512,513,-81,514,-332]],"id":"642"},{"type":"MultiPolygon","arcs":[[[515]],[[-502,516,-424]],[[517]],[[518]],[[519]],[[520]],[[521]],[[-506,-184,-446,-182,-390,522,-59,-292,523,524,-95,-429,-263,525,-271,-474,526]],[[527]],[[528]],[[529]]],"id":"643"},{"type":"Polygon","arcs":[[530,-61,-198,531]],"id":"646"},{"type":"Polygon","arcs":[[-243,-457,532,-430]],"id":"732"},{"type":"Polygon","arcs":[[533,-381,-364,-409,534,-511,535,-23,-483,536]],"id":"682"},{"type":"Polygon","arcs":[[537,538,-123,539,-420,-251,540,-256,-270,541]],"id":"729"},{"type":"Polygon","arcs":[[542,-268,-395,543,-205,-125,544,-538]],"id":"728"},{"type":"Polygon","arcs":[[545,-455,-441,-300,-305,546,-303]],"id":"686"},{"type":"MultiPolygon","arcs":[[[547]],[[548]],[[549]],[[550]],[[551]]],"id":"090"},{"type":"Polygon","arcs":[[552,-297,-416]],"id":"694"},{"type":"Polygon","arcs":[[553,-316,-321]],"id":"222"},{"type":"Polygon","arcs":[[-265,-233,554,555]],"id":"-99"},{"type":"Polygon","arcs":[[-396,-266,-556,556]],"id":"706"},{"type":"Polygon","arcs":[[-86,-438,-406,-445,-90,-324,-333,-515]],"id":"688"},{"type":"Polygon","arcs":[[557,-279,558,-110,-318]],"id":"740"},{"type":"Polygon","arcs":[[-504,559,-330,-54,-224]],"id":"703"},{"type":"Polygon","arcs":[[-49,-334,-327,560,-377]],"id":"705"},{"type":"Polygon","arcs":[[-475,-273,561]],"id":"752"},{"type":"Polygon","arcs":[[562,-450]],"id":"748"},{"type":"Polygon","arcs":[[-380,-374,-414,563,564,-366]],"id":"760"},{"type":"Polygon","arcs":[[-468,-421,-540,-122,-195]],"id":"148"},{"type":"Polygon","arcs":[[565,-295,-76,-69]],"id":"768"},{"type":"Polygon","arcs":[[566,-461,567,-443,-410,-399]],"id":"764"},{"type":"Polygon","arcs":[[-397,-179,-3,568]],"id":"762"},{"type":"Polygon","arcs":[[-356,569,-388,570,-1]],"id":"795"},{"type":"Polygon","arcs":[[571,-336]],"id":"626"},{"type":"Polygon","arcs":[[572]],"id":"780"},{"type":"Polygon","arcs":[[-246,573,-418]],"id":"788"},{"type":"MultiPolygon","arcs":[[[-293,-36,-360,-367,-565,574]],[[-310,-83,575]]],"id":"792"},{"type":"Polygon","arcs":[[576]],"id":"158"},{"type":"Polygon","arcs":[[-393,577,-447,-459,578,-201,579,-199,-62,-531,580]],"id":"834"},{"type":"Polygon","arcs":[[-532,-197,-544,-394,-581]],"id":"800"},{"type":"Polygon","arcs":[[-525,581,-513,-432,-512,-331,-560,-503,-96]],"id":"804"},{"type":"Polygon","arcs":[[-113,582,-28]],"id":"858"},{"type":"MultiPolygon","arcs":[[[583]],[[584]],[[585]],[[586]],[[587]],[[588,-437,589,-139]],[[590]],[[591]],[[592]],[[-141,593]]],"id":"840"},{"type":"Polygon","arcs":[[-571,-387,-398,-569,-2]],"id":"860"},{"type":"Polygon","arcs":[[594,-319,-108,-212]],"id":"862"},{"type":"Polygon","arcs":[[595,-401,-412,-171]],"id":"704"},{"type":"MultiPolygon","arcs":[[[596]],[[597]]],"id":"548"},{"type":"Polygon","arcs":[[598,-537,-482]],"id":"887"},{"type":"Polygon","arcs":[[-466,-118,599,-451,-563,-449,600],[-423]],"id":"710"},{"type":"Polygon","arcs":[[-458,-453,601,-120,-465,-7,-202,-579]],"id":"894"},{"type":"Polygon","arcs":[[-600,-121,-602,-452]],"id":"716"}]},"land":{"type":"GeometryCollection","geometries":[{"type":"MultiPolygon","arcs":[[[595,401,566,459,567,441,78,352,485,357,361,407,534,509,535,18,484,20,483,598,533,381,249,540,256,231,554,556,391,577,447,600,463,8,202,10,205,285,305,191,469,67,565,293,184,414,552,297,303,546,301,545,455,532,430,244,573,418,252,371,412,563,574,290,523,581,513,81,575,307,15,443,325,560,377,283,259,508,257,284,66,472,229,236,224,500,516,424,427,261,525,271,561,475,526,506,402,507,169],[123,544,538],[199,579],[542,268,541],[388,522,55,360,569]],[[24,164]],[[582,28,165,488,247,208,486,213,470,319,553,311,435,589,139,593,141,588,434,98,313,321,471,215,487,210,594,316,557,279,111],[558,277]],[[36]],[[37]],[[38]],[[39]],[[40]],[[41]],[[42]],[[43]],[[44]],[[45]],[[46]],[[86]],[[87]],[[88]],[[461,113,462,348]],[[128]],[[129]],[[130]],[[131]],[[132]],[[133]],[[134]],[[135]],[[136]],[[137]],[[142]],[[143]],[[144]],[[145]],[[146]],[[147]],[[148]],[[149]],[[150]],[[151]],[[152]],[[153]],[[154]],[[155]],[[156]],[[157]],[[158]],[[159]],[[160]],[[167]],[[217]],[[218,220]],[[235]],[[237,328]],[[274]],[[275]],[[276]],[[280]],[[288,354]],[[289]],[[306]],[[310]],[[334]],[[336,571]],[[337]],[[338]],[[339]],[[340]],[[341]],[[342]],[[344,498]],[[345]],[[346]],[[349]],[[367]],[[374]],[[375]],[[378]],[[383]],[[384]],[[385]],[[421]],[[433]],[[466]],[[476]],[[477]],[[478]],[[479]],[[480]],[[489]],[[490]],[[491]],[[492]],[[493]],[[494]],[[495]],[[496]],[[497]],[[499]],[[504]],[[515]],[[517]],[[518]],[[519]],[[520]],[[521]],[[527]],[[528]],[[529]],[[547]],[[548]],[[549]],[[550]],[[551]],[[572]],[[576]],[[583]],[[584]],[[585]],[[586]],[[587]],[[590]],[[591]],[[592]],[[596]],[[597]]]}]}},"arcs":[[[67002,71642],[284,-224],[209,79],[58,268],[219,89],[157,180],[55,472],[234,114],[44,211],[131,-158],[84,-19]],[[68477,72654],[154,-4],[210,-124]],[[68841,72526],[85,-72],[201,189],[93,-114],[90,271],[166,-12],[43,86],[29,239],[120,205],[150,-134],[-30,-181],[84,-28],[-26,-496],[110,-194],[97,125],[123,58],[173,265],[192,-44],[286,-1]],[[70827,72688],[50,-169]],[[70877,72519],[-162,-67],[-141,-109],[-319,-68],[-298,-124],[-163,-258],[66,-250],[32,-294],[-139,-248],[12,-227],[-76,-213],[-265,18],[110,-390],[-177,-150],[-118,-356],[15,-355],[-108,-166],[-103,55],[-212,-77],[-31,-166],[-207,1],[-154,-334],[-10,-503],[-361,-246],[-194,52],[-56,-129],[-166,75],[-278,-88],[-465,301]],[[66909,68203],[252,536],[-23,380],[-210,100],[-22,375],[-91,472],[119,323],[-121,87],[76,430],[113,736]],[[56642,44124],[29,-184],[-32,-286],[49,-277],[-41,-222],[24,-203],[-579,7],[-13,-1880],[188,-483],[181,-369]],[[56448,40227],[-510,-241],[-673,83],[-192,284],[-1126,-26],[-42,-41],[-166,267],[-180,17],[-166,-100],[-134,-113]],[[53259,40357],[-26,372],[38,519],[96,541],[15,254],[90,532],[66,243],[159,386],[90,263],[29,438],[-15,335],[-83,211],[-74,358],[-68,355],[15,122],[85,235],[-84,570],[-57,396],[-139,374],[26,115]],[[53422,46976],[115,79],[80,-11],[98,71],[820,-8],[68,-440],[80,-354],[64,-191],[106,-309],[184,47],[91,83],[154,-83],[42,148],[69,344],[172,23],[15,103],[142,2],[-24,-213],[337,5],[5,-372],[56,-228],[-41,-356],[21,-363],[93,-219],[-15,-703],[68,54],[121,-15],[172,89],[127,-35]],[[53383,47159],[-74,444]],[[53309,47603],[112,255],[84,100],[104,-203]],[[53609,47755],[-101,-124],[-45,-152],[-9,-258],[-71,-62]],[[55719,75309],[-35,-201],[39,-254],[115,-144]],[[55838,74710],[-5,-155],[-91,-85],[-16,-192],[-129,-287]],[[55597,73991],[-48,41],[-5,130],[-154,199],[-24,281],[23,403],[38,184],[-47,93]],[[55380,75322],[-18,188],[120,291],[18,-111],[75,52]],[[55575,75742],[59,-159],[66,-60],[19,-214]],[[64327,64904],[49,29],[11,-162],[217,93],[230,-15],[168,-18],[190,400],[207,379],[176,364]],[[65575,65974],[52,-202]],[[65627,65772],[38,-466]],[[65665,65306],[-142,-3],[-23,-384],[50,-82],[-126,-117],[-1,-241],[-81,-245],[-7,-238]],[[65335,63996],[-56,-125],[-835,298],[-106,599],[-11,136]],[[31400,18145],[-168,16],[-297,1],[0,1319]],[[30935,19481],[106,-274],[139,-443],[361,-355],[389,-147],[-125,-296],[-264,-29],[-141,208]],[[32587,37434],[511,-964],[227,-89],[339,-437],[286,-231],[40,-261],[-273,-898],[280,-160],[312,-91],[220,95],[252,453],[45,521]],[[34826,35372],[138,114],[139,-341],[-6,-472],[-234,-326],[-186,-241],[-314,-573],[-370,-806]],[[33993,32727],[-70,-473],[-74,-607],[3,-588],[-61,-132],[-21,-382]],[[33770,30545],[-19,-308],[353,-506],[-38,-408],[173,-257],[-14,-289],[-267,-757],[-412,-317],[-557,-123],[-305,59],[59,-352],[-57,-442],[51,-298],[-167,-208],[-284,-82],[-267,216],[-108,-155],[39,-587],[188,-178],[152,186],[82,-307],[-255,-183],[-223,-367],[-41,-595],[-66,-316],[-262,-2],[-218,-302],[-80,-443],[273,-433],[266,-119],[-96,-531],[-328,-333],[-180,-692],[-254,-234],[-113,-276],[89,-614],[185,-342],[-117,30]],[[30952,19680],[-257,93],[-672,79],[-115,344],[6,443],[-185,-38],[-98,214],[-24,626],[213,260],[88,375],[-33,299],[148,504],[101,782],[-30,347],[122,112],[-30,223],[-129,118],[92,248],[-126,224],[-65,682],[112,120],[-47,720],[65,605],[75,527],[166,215],[-84,576],[-1,543],[210,386],[-7,494],[159,576],[1,544],[-72,108],[-128,1020],[171,607],[-27,572],[100,537],[182,555],[196,367],[-83,232],[58,190],[-9,985],[302,291],[96,614],[-34,148]],[[31359,37147],[231,534],[364,-144],[163,-427],[109,475],[316,-24],[45,-127]],[[62106,74858],[386,92]],[[62492,74950],[57,-155],[106,-103],[-56,-148],[148,-202],[-78,-189],[118,-160],[124,-97],[7,-410]],[[62918,73486],[-101,-17]],[[62817,73469],[-113,342],[1,91],[-123,-2],[-82,159],[-58,-16]],[[62442,74043],[-109,172],[-207,147],[27,288],[-47,208]],[[33452,3290],[-82,-301],[-81,-266],[-582,81],[-621,-35],[-348,197],[0,23],[-152,174],[625,-23],[599,-58],[207,243],[147,208],[288,-243]],[[5775,3611],[-533,-81],[-364,208],[-163,209],[-11,35],[-180,162],[169,220],[517,-93],[277,-185],[212,-209],[76,-266]],[[37457,4468],[342,-255],[120,-359],[33,-254],[11,-301],[-430,-186],[-452,-150],[-522,-139],[-582,-116],[-658,35],[-365,197],[49,243],[593,162],[239,197],[174,254],[126,220],[168,209],[180,243],[141,0],[414,127],[419,-127]],[[16330,7154],[359,-93],[332,104],[-158,-208],[-261,-151],[-386,47],[-278,208],[60,197],[332,-104]],[[15122,7165],[425,-231],[-164,23],[-359,58],[-381,162],[202,127],[277,-139]],[[22505,8080],[305,-81],[304,69],[163,-335],[-217,46],[-337,-23],[-343,23],[-376,-35],[-283,116],[-146,243],[174,104],[353,-81],[403,-46]],[[30985,8657],[33,-266],[-49,-231],[-76,-220],[-326,-81],[-311,-116],[-364,11],[136,232],[-327,-81],[-310,-81],[-212,174],[-16,243],[305,231],[190,70],[321,-23],[82,301],[16,219],[-6,475],[158,278],[256,93],[147,-220],[65,-220],[120,-267],[92,-254],[76,-267]],[[0,529],[16,-5],[245,344],[501,-185],[32,21],[294,188],[38,-7],[32,-4],[402,-246],[352,246],[63,34],[816,104],[265,-138],[130,-71],[419,-196],[789,-151],[625,-185],[1072,-139],[800,162],[1181,-116],[669,-185],[734,174],[773,162],[60,278],[-1094,23],[-898,139],[-234,231],[-745,128],[49,266],[103,243],[104,220],[-55,243],[-462,162],[-212,209],[-430,185],[675,-35],[642,93],[402,-197],[495,173],[457,220],[223,197],[-98,243],[-359,162],[-408,174],[-571,35],[-500,81],[-539,58],[-180,220],[-359,185],[-217,208],[-87,672],[136,-58],[250,-185],[457,58],[441,81],[228,-255],[441,58],[370,127],[348,162],[315,197],[419,58],[-11,220],[-97,220],[81,208],[359,104],[163,-196],[425,115],[321,151],[397,12],[375,57],[376,139],[299,128],[337,127],[218,-35],[190,-46],[414,81],[370,-104],[381,11],[364,81],[375,-57],[414,-58],[386,23],[403,-12],[413,-11],[381,23],[283,174],[337,92],[349,-127],[331,104],[300,208],[179,-185],[98,-208],[180,-197],[288,174],[332,-220],[375,-70],[321,-162],[392,35],[354,104],[418,-23],[376,-81],[381,-104],[147,254],[-180,197],[-136,209],[-359,46],[-158,220],[-60,220],[-98,440],[213,-81],[364,-35],[359,35],[327,-93],[283,-174],[119,-208],[376,-35],[359,81],[381,116],[342,70],[283,-139],[370,46],[239,451],[224,-266],[321,-104],[348,58],[228,-232],[365,-23],[337,-69],[332,-128],[218,220],[108,209],[278,-232],[381,58],[283,-127],[190,-197],[370,58],[288,127],[283,151],[337,81],[392,69],[354,81],[272,127],[163,186],[65,254],[-32,244],[-87,231],[-98,232],[-87,231],[-71,209],[-16,231],[27,232],[130,220],[109,243],[44,231],[-55,255],[-32,232],[136,266],[152,173],[180,220],[190,186],[223,173],[109,255],[152,162],[174,151],[267,34],[174,186],[196,115],[228,70],[202,150],[157,186],[218,69],[163,-151],[-103,-196],[-283,-174],[-120,-127],[-206,92],[-229,-58],[-190,-139],[-202,-150],[-136,-174],[-38,-231],[17,-220],[130,-197],[-190,-139],[-261,-46],[-153,-197],[-163,-185],[-174,-255],[-44,-220],[98,-243],[147,-185],[229,-139],[212,-185],[114,-232],[60,-220],[82,-232],[130,-196],[82,-220],[38,-544],[81,-220],[22,-232],[87,-231],[-38,-313],[-152,-243],[-163,-197],[-370,-81],[-125,-208],[-169,-197],[-419,-220],[-370,-93],[-348,-127],[-376,-128],[-223,-243],[-446,-23],[-489,23],[-441,-46],[-468,0],[87,-232],[424,-104],[311,-162],[174,-208],[-310,-185],[-479,58],[-397,-151],[-17,-243],[-11,-232],[327,-196],[60,-220],[353,-220],[588,-93],[500,-162],[398,-185],[506,-186],[690,-92],[681,-162],[473,-174],[517,-197],[272,-278],[136,-220],[337,209],[457,173],[484,186],[577,150],[495,162],[691,12],[680,-81],[560,-139],[180,255],[386,173],[702,12],[550,127],[522,128],[577,81],[614,104],[430,150],[-196,209],[-119,208],[0,220],[-539,-23],[-571,-93],[-544,0],[-77,220],[39,440],[125,128],[397,138],[468,139],[337,174],[337,174],[251,231],[380,104],[376,81],[190,47],[430,23],[408,81],[343,116],[337,139],[305,139],[386,185],[245,197],[261,173],[82,232],[-294,139],[98,243],[185,185],[288,116],[305,139],[283,185],[217,232],[136,277],[202,163],[331,-35],[136,-197],[332,-23],[11,220],[142,231],[299,-58],[71,-220],[331,-34],[360,104],[348,69],[315,-34],[120,-243],[305,196],[283,105],[315,81],[310,81],[283,139],[310,92],[240,128],[168,208],[207,-151],[288,81],[202,-277],[157,-209],[316,116],[125,232],[283,162],[365,-35],[108,-220],[229,220],[299,69],[326,23],[294,-11],[310,-70],[300,-34],[130,-197],[180,-174],[304,104],[327,24],[315,0],[310,11],[278,81],[294,70],[245,162],[261,104],[283,58],[212,162],[152,324],[158,197],[288,-93],[109,-208],[239,-139],[289,46],[196,-208],[206,-151],[283,139],[98,255],[250,104],[289,197],[272,81],[326,116],[218,127],[228,139],[218,127],[261,-69],[250,208],[180,162],[261,-11],[229,139],[54,208],[234,162],[228,116],[278,93],[256,46],[244,-35],[262,-58],[223,-162],[27,-254],[245,-197],[168,-162],[332,-70],[185,-162],[229,-162],[266,-35],[223,116],[240,243],[261,-127],[272,-70],[261,-69],[272,-46],[277,0],[229,-614],[-11,-150],[-33,-267],[-266,-150],[-218,-220],[38,-232],[310,12],[-38,-232],[-141,-220],[-131,-243],[212,-185],[321,-58],[321,104],[153,232],[92,220],[153,185],[174,174],[70,208],[147,289],[174,58],[316,24],[277,69],[283,93],[136,231],[82,220],[190,220],[272,151],[234,115],[153,197],[157,104],[202,93],[277,-58],[250,58],[272,69],[305,-34],[201,162],[142,393],[103,-162],[131,-278],[234,-115],[266,-47],[267,70],[283,-46],[261,-12],[174,58],[234,-35],[212,-127],[250,81],[300,0],[255,81],[289,-81],[185,197],[141,196],[191,163],[348,439],[179,-81],[212,-162],[185,-208],[354,-359],[272,-12],[256,0],[299,70],[299,81],[229,162],[190,174],[310,23],[207,127],[218,-116],[141,-185],[196,-185],[305,23],[190,-150],[332,-151],[348,-58],[288,47],[218,185],[185,185],[250,46],[251,-81],[288,-58],[261,93],[250,0],[245,-58],[256,-58],[250,104],[299,93],[283,23],[316,0],[255,58],[251,46],[76,290],[11,243],[174,-162],[49,-266],[92,-244],[115,-196],[234,-105],[315,35],[365,12],[250,35],[364,0],[262,11],[364,-23],[310,-46],[196,-186],[-54,-220],[179,-173],[299,-139],[310,-151],[360,-104],[375,-92],[283,-93],[315,-12],[180,197],[245,-162],[212,-185],[245,-139],[337,-58],[321,-69],[136,-232],[316,-139],[212,-208],[310,-93],[321,12],[299,-35],[332,12],[332,-47],[310,-81],[288,-139],[289,-116],[195,-173],[-32,-232],[-147,-208],[-125,-266],[-98,-209],[-131,-243],[-364,-93],[-163,-208],[-360,-127],[-125,-232],[-190,-220],[-201,-185],[-115,-243],[-70,-220],[-28,-266],[6,-220],[158,-232],[60,-220],[130,-208],[517,-81],[109,-255],[-501,-93],[-424,-127],[-528,-23],[-234,-336],[-49,-278],[-119,-220],[-147,-220],[370,-196],[141,-244],[239,-219],[338,-197],[386,-186],[419,-185],[636,-185],[142,-289],[800,-128],[53,-45],[208,-175],[767,151],[636,-186],[-99520,-142]],[[69148,21851],[179,-186],[263,-74],[9,-112],[-77,-269],[-427,-38],[-7,314],[41,244],[19,121]],[[90387,26479],[269,-204],[151,81],[217,113],[166,-39],[20,-702],[-95,-203],[-29,-476],[-97,162],[-193,-412],[-57,32],[-171,19],[-171,505],[-38,390],[-160,515],[7,271],[181,-52]],[[89877,42448],[100,-464],[179,223],[92,-250],[133,-231],[-29,-262],[60,-506],[42,-295],[70,-72],[75,-505],[-27,-307],[90,-400],[301,-309],[197,-281],[186,-257],[-37,-143],[159,-371],[108,-639],[111,130],[113,-256],[68,91],[48,-626],[197,-363],[129,-226],[217,-478],[78,-475],[7,-337],[-19,-365],[132,-502],[-16,-523],[-48,-274],[-75,-527],[6,-339],[-55,-423],[-123,-538],[-205,-290],[-102,-458],[-93,-292],[-82,-510],[-107,-294],[-70,-442],[-36,-407],[14,-187],[-159,-205],[-311,-22],[-257,-242],[-127,-229],[-168,-254],[-230,262],[-170,104],[43,308],[-152,-112],[-243,-428],[-240,160],[-158,94],[-159,42],[-269,171],[-179,364],[-52,449],[-64,298],[-137,240],[-267,71],[91,287],[-67,438],[-136,-408],[-247,-109],[146,327],[42,341],[107,289],[-22,438],[-226,-504],[-174,-202],[-106,-470],[-217,243],[9,313],[-174,429],[-147,221],[52,137],[-356,358],[-195,17],[-267,287],[-498,-56],[-359,-211],[-317,-197],[-265,39],[-294,-303],[-241,-137],[-53,-309],[-103,-240],[-236,-15],[-174,-52],[-246,107],[-199,-64],[-191,-27],[-165,-315],[-81,26],[-140,-167],[-133,-187],[-203,23],[-186,0],[-295,377],[-149,113],[6,338],[138,81],[47,134],[-10,212],[34,411],[-31,350],[-147,598],[-45,337],[12,336],[-111,385],[-7,174],[-123,235],[-35,463],[-158,467],[-39,252],[122,-255],[-93,548],[137,-171],[83,-229],[-5,303],[-138,465],[-26,186],[-65,177],[31,341],[56,146],[38,295],[-29,346],[114,425],[21,-450],[118,406],[225,198],[136,252],[212,217],[126,46],[77,-73],[219,220],[168,66],[42,129],[74,54],[153,-14],[292,173],[151,262],[71,316],[163,300],[13,236],[7,321],[194,502],[117,-510],[119,118],[-99,279],[87,287],[122,-128],[34,449],[152,291],[67,233],[140,101],[4,165],[122,-69],[5,148],[122,85],[134,80],[205,-271],[155,-350],[173,-4],[177,-56],[-59,325],[133,473],[126,155],[-44,147],[121,338],[168,208],[142,-70],[234,111],[-5,302],[-204,195],[148,86],[184,-147],[148,-242],[234,-151],[79,60],[172,-182],[162,169],[105,-51],[65,113],[127,-292],[-74,-316],[-105,-239],[-96,-20],[32,-236],[-81,-295],[-99,-291],[20,-166],[221,-327],[214,-189],[143,-204],[201,-350],[78,1],[145,-151],[43,-183],[265,-200],[183,202],[55,317],[56,262],[34,324],[85,470],[-39,286],[20,171],[-32,339],[37,445],[53,120],[-43,197],[67,313],[52,325],[7,168],[104,222],[78,-289],[19,-371],[70,-71],[11,-249],[101,-300],[21,-335],[-10,-214]],[[54716,79012],[-21,-241],[-156,-2],[53,-128],[-92,-380]],[[54500,78261],[-53,-100],[-243,-14],[-140,-134],[-229,45]],[[53835,78058],[-398,153],[-62,205],[-274,-102],[-32,-113],[-169,84]],[[52900,78285],[-142,16],[-125,108],[42,145],[-10,104]],[[52665,78658],[83,33],[141,-164],[39,156],[245,-25],[199,106],[133,-18],[87,-121],[26,100],[-40,385],[100,75],[98,272]],[[53776,79457],[206,-190],[157,242],[98,44],[215,-180],[131,30],[128,-111]],[[54711,79292],[-23,-75],[28,-205]],[[62817,73469],[-190,78],[-141,273],[-44,223]],[[63495,75281],[146,-311],[141,-419],[130,-28],[85,-159],[-228,-47],[-49,-459],[-48,-207],[-101,-138],[7,-293]],[[63578,73220],[-69,-29],[-173,309],[95,292],[-82,174],[-104,-44],[-327,-436]],[[62492,74950],[68,96],[207,-169],[149,-36],[38,70],[-136,319],[72,82]],[[62890,75312],[78,-20],[191,-359],[122,-40],[48,150],[166,238]],[[58149,47921],[-17,713],[-70,268]],[[58062,48902],[169,-46],[85,336],[147,-38]],[[58463,49154],[16,-233],[60,-134],[3,-192],[-69,-124],[-108,-308],[-101,-214],[-115,-28]],[[50920,80916],[204,-47],[257,123],[176,-258],[153,-138]],[[51710,80596],[-32,-400]],[[51678,80196],[-72,-22],[-30,-331]],[[51576,79843],[-243,269],[-143,-46],[-194,279],[-129,237],[-129,10],[-40,207]],[[50698,80799],[222,117]],[[50747,54278],[-229,-69]],[[50518,54209],[-69,407],[13,1357],[-56,122],[-11,290],[-96,207],[-85,174],[35,311]],[[50249,57077],[96,67],[56,258],[136,56],[61,176]],[[50598,57634],[93,173],[100,2],[212,-340]],[[51003,57469],[-11,-197],[62,-350],[-54,-238],[29,-159],[-135,-366],[-86,-181],[-52,-372],[7,-376],[-16,-952]],[[49214,56277],[-190,152],[-130,-22],[-97,-149],[-125,125],[-49,195],[-125,129]],[[48498,56707],[-18,343],[76,250],[-7,200],[221,490],[41,405],[76,144],[134,-79],[116,120],[38,152],[216,265],[53,184],[259,246],[153,84],[70,-114],[178,3]],[[50104,59400],[-22,-286],[37,-269],[156,-386],[9,-286],[320,-134],[-6,-405]],[[50249,57077],[-243,13]],[[50006,57090],[-128,47],[-90,-96],[-123,43],[-482,-27],[-7,-336],[38,-444]],[[75742,63602],[-6,-424],[-97,90],[18,-476]],[[75657,62792],[-79,308],[-16,301],[-53,285],[-116,344],[-256,23],[25,-243],[-87,-329],[-118,120],[-41,-108],[-78,65],[-108,53]],[[74730,63611],[-43,486],[-96,444],[47,356],[-171,159],[62,215],[173,220],[-200,313],[98,401],[220,-255],[133,-30],[24,-410],[265,-81],[257,8],[160,-101],[-128,-500],[-124,-34],[-86,-336],[152,-306],[46,377],[76,2],[147,-937]],[[56293,76715],[80,-243],[108,43],[213,-92],[408,-31],[138,150],[327,138],[202,-215],[163,-62]],[[57932,76403],[-144,-245],[-101,-422],[89,-337]],[[57776,75399],[-239,79],[-283,-186]],[[57254,75292],[-3,-294],[-252,-56],[-196,206],[-222,-162],[-206,17]],[[56375,75003],[-20,391],[-139,189]],[[56216,75583],[46,84],[-30,70],[47,188],[105,185],[-135,255],[-24,216],[68,134]],[[28462,64617],[-68,-29],[-70,340],[-104,171],[60,375],[84,-23],[97,-491],[1,-343]],[[28383,66284],[-303,-95],[-19,219],[130,47],[184,-18],[8,-153]],[[28611,66290],[-48,-420],[-51,75],[4,309],[-124,234],[-1,67],[220,-265]],[[55279,77084],[100,2],[-69,-260],[134,-227],[-41,-278],[-65,-27]],[[55338,76294],[-52,-53],[-90,-138],[-41,-325]],[[55155,75778],[-246,224],[-105,247],[-106,130],[-127,221],[-61,183],[-136,277],[59,245],[99,-136],[60,123],[130,13],[239,-98],[192,8],[126,-131]],[[56523,82432],[268,-4],[302,223],[64,333],[228,190],[-26,264]],[[57359,83438],[169,100],[298,228]],[[57826,83766],[293,-149],[39,-146],[146,70],[272,-141],[27,-277],[-60,-159],[174,-387],[113,-108],[-16,-107],[187,-104],[80,-157],[-108,-129],[-224,20],[-54,-55],[66,-196],[68,-379]],[[58829,81362],[-239,-35],[-85,-129],[-18,-298],[-111,57],[-250,-28],[-73,138],[-104,-103],[-105,86],[-218,12],[-310,141],[-281,47],[-215,-14],[-152,-160],[-133,-23]],[[56535,81053],[-6,263],[-85,274],[166,121],[2,235],[-77,225],[-12,261]],[[25238,61101],[-2,87],[33,27],[51,-70],[99,357],[53,8]],[[25472,61510],[1,-87],[53,-3],[-5,-160],[-45,-256],[24,-91],[-29,-212],[18,-56],[-32,-299],[-55,-156],[-50,-19],[-55,-205]],[[25297,59966],[-83,0],[22,667],[2,468]],[[31359,37147],[-200,-81],[-109,814],[-150,663],[88,572],[-146,250],[-37,426],[-136,402]],[[30669,40193],[175,638],[-119,496],[63,199],[-49,219],[108,295],[6,503],[13,415],[60,200],[-240,951]],[[30686,44109],[206,-50],[143,13],[62,179],[243,239],[147,222],[363,100],[-29,-443],[34,-227],[-23,-396],[302,-529],[311,-98],[109,-220],[188,-117],[115,-172],[175,6],[161,-175],[12,-342],[55,-172],[3,-255],[-81,-10],[107,-688],[533,-24],[-41,-342],[30,-233],[151,-166],[66,-367],[-49,-465],[-77,-259],[27,-337],[-87,-122]],[[33842,38659],[-4,182],[-259,302],[-258,9],[-484,-172],[-133,-520],[-7,-318],[-110,-708]],[[34826,35372],[54,341],[38,350],[0,325],[-100,107],[-104,-96],[-103,26],[-33,228],[-26,541],[-52,177],[-187,160],[-114,-116],[-293,113],[18,802],[-82,329]],[[30686,44109],[-157,-102],[-126,68],[18,898],[-228,-348],[-245,15],[-105,315],[-184,34],[59,254],[-155,359],[-115,532],[73,108],[0,250],[168,171],[-28,319],[71,206],[20,275],[318,402],[227,114],[37,89],[251,-28]],[[30585,48040],[125,1620],[6,256],[-43,339],[-123,215],[1,430],[156,97],[56,-61],[9,226],[-162,61],[-4,370],[541,-13],[92,203],[77,-187],[55,-349],[52,73]],[[31423,51320],[153,-312],[216,38],[54,181],[206,138],[115,97],[32,250],[198,168],[-15,124],[-235,51],[-39,372],[12,396],[-125,153],[52,55],[206,-76],[221,-148],[80,140],[200,92],[310,221],[102,225],[-37,167]],[[33129,53652],[145,26],[64,-136],[-36,-259],[96,-90],[63,-274],[-77,-209],[-44,-502],[71,-299],[20,-274],[171,-277],[137,-29],[30,116],[88,25],[126,104],[90,157],[154,-50],[67,21]],[[34294,51702],[151,-48],[25,120],[-46,118],[28,171],[112,-53],[131,61],[159,-125]],[[34854,51946],[121,-122],[86,160],[62,-25],[38,-166],[133,42],[107,224],[85,436],[164,540]],[[35650,53035],[95,28],[69,-327],[155,-1033],[149,-97],[7,-408],[-208,-487],[86,-178],[491,-92],[10,-593],[211,388],[349,-212],[462,-361],[135,-346],[-45,-327],[323,182],[540,-313],[415,23],[411,-489],[355,-662],[214,-170],[237,-24],[101,-186],[94,-752],[46,-358],[-110,-977],[-142,-385],[-391,-822],[-177,-668],[-206,-513],[-69,-11],[-78,-435],[20,-1107],[-77,-910],[-30,-390],[-88,-233],[-49,-790],[-282,-771],[-47,-610],[-225,-256],[-65,-355],[-302,2],[-437,-227],[-195,-263],[-311,-173],[-327,-470],[-235,-586],[-41,-441],[46,-326],[-51,-597],[-63,-289],[-195,-325],[-308,-1040],[-244,-468],[-189,-277],[-127,-562],[-183,-337]],[[35174,30629],[-77,334],[122,280],[-160,402],[-218,327],[-286,379],[-103,-18],[-279,457],[-180,-63]],[[81723,53254],[110,221],[236,323]],[[82069,53798],[-13,-291],[-16,-377],[-133,19],[-58,-202],[-126,307]],[[75471,66988],[113,-189],[-20,-363],[-227,-17],[-234,39],[-175,-92],[-252,224],[-6,119]],[[74670,66709],[184,439],[150,150],[198,-137],[147,-14],[122,-159]],[[58175,37528],[-393,-435],[-249,-442],[-93,-393],[-83,-222],[-152,-47],[-48,-283],[-28,-184],[-178,-138],[-226,29],[-133,166],[-117,71],[-135,-137],[-68,-283],[-132,-177],[-139,-264],[-199,-60],[-62,207],[26,360],[-165,562],[-75,88]],[[55526,35946],[0,1725],[274,20],[8,2105],[207,19],[428,207],[106,-243],[177,231],[85,2],[156,133]],[[56967,40145],[50,-44]],[[57017,40101],[107,-473],[56,-105],[87,-342],[315,-649],[119,-64],[0,-208],[82,-375],[215,-90],[177,-267]],[[54244,54965],[229,44],[52,152],[46,-11],[69,-134],[350,226],[118,230],[145,207],[-28,208],[78,54],[269,-36],[261,273],[201,645],[141,239],[176,101]],[[56351,57163],[31,-253],[160,-369],[1,-241],[-45,-246],[18,-184],[96,-170]],[[56612,55700],[212,-258]],[[56824,55442],[152,-239],[2,-192],[187,-308],[116,-255],[70,-355],[208,-234],[44,-187]],[[57603,53672],[-91,-63],[-178,14],[-209,62],[-104,-51],[-41,-143],[-90,-18],[-110,125],[-309,-295],[-127,60],[-38,-46],[-83,-357],[-207,115],[-203,59],[-177,218],[-229,200],[-149,-190],[-108,-300],[-25,-412]],[[55125,52650],[-178,33],[-188,99],[-166,-313],[-146,-550]],[[54447,51919],[-29,172],[-12,269],[-127,190],[-103,305],[-23,212],[-132,309],[23,176],[-28,249],[21,458],[67,107],[140,599]],[[32315,78082],[202,-79],[257,16],[-137,-242],[-102,-38],[-353,250],[-69,198],[105,183],[97,-288]],[[32831,79592],[-135,-11],[-360,186],[-258,279],[96,49],[365,-148],[284,-247],[8,-108]],[[15692,79240],[-140,-82],[-456,269],[-84,209],[-248,207],[-50,168],[-286,107],[-107,321],[24,137],[291,-129],[171,-89],[261,-63],[94,-204],[138,-280],[277,-244],[115,-327]],[[34407,80527],[-184,-517],[181,199],[187,-126],[-98,-206],[247,-162],[128,144],[277,-182],[-86,-433],[194,101],[36,-313],[86,-367],[-117,-520],[-125,-22],[-183,111],[60,484],[-77,75],[-322,-513],[-166,21],[196,277],[-267,144],[-298,-35],[-539,18],[-43,175],[173,208],[-121,160],[234,356],[287,941],[172,336],[241,204],[129,-26],[-54,-160],[-148,-372]],[[13005,82584],[131,-76],[267,47],[-84,-671],[242,-475],[-111,1],[-167,270],[-103,272],[-140,184],[-51,260],[16,188]],[[27981,87304],[-108,-310],[-123,50],[-73,176],[13,41],[107,177],[114,-13],[70,-121]],[[27250,87631],[-325,-326],[-196,13],[-61,160],[207,273],[381,-6],[-6,-114]],[[26344,89371],[51,-259],[143,91],[161,-155],[304,-203],[318,-184],[25,-281],[204,46],[199,-196],[-247,-186],[-432,142],[-156,266],[-275,-314],[-396,-306],[-95,346],[-377,-57],[242,292],[35,465],[95,542],[201,-49]],[[28926,90253],[-312,-30],[-69,289],[118,331],[255,82],[217,-163],[3,-253],[-32,-82],[-180,-174]],[[23431,91410],[-173,-207],[-374,179],[-226,-65],[-380,266],[245,183],[194,256],[295,-168],[166,-106],[84,-112],[169,-226]],[[31350,77248],[-181,334],[0,805],[-123,171],[-187,-100],[-92,155],[-212,-446],[-84,-460],[-99,-269],[-118,-91],[-89,-30],[-28,-146],[-512,0],[-422,-4],[-125,-109],[-294,-425],[-34,-46],[-89,-231],[-255,1],[-273,-3],[-125,-93],[44,-116],[25,-181],[-5,-60],[-363,-293],[-286,-93],[-323,-316],[-70,0],[-94,93],[-31,85],[6,61],[61,207],[131,325],[81,349],[-56,514],[-59,536],[-290,277],[35,105],[-41,73],[-76,0],[-56,93],[-14,140],[-54,-61],[-75,18],[17,59],[-65,58],[-27,155],[-216,189],[-224,197],[-272,229],[-261,214],[-248,-167],[-91,-6],[-342,154],[-225,-77],[-269,183],[-284,94],[-194,36],[-86,100],[-49,325],[-94,-3],[-1,-227],[-575,0],[-951,0],[-944,0],[-833,0],[-834,0],[-819,0],[-847,0],[-273,0],[-825,0],[-788,0]],[[15878,79530],[-38,1],[-537,581],[-199,255],[-503,244],[-155,523],[40,363],[-356,252],[-48,476],[-336,429],[-6,304]],[[13740,82958],[154,285],[-7,373],[-473,376],[-284,674],[-173,424],[-255,266],[-187,242],[-147,306],[-279,-192],[-270,-330],[-247,388],[-194,259],[-271,164],[-273,17],[1,3364],[2,2193]],[[10837,91767],[518,-142],[438,-285],[289,-54],[244,247],[336,184],[413,-72],[416,259],[455,148],[191,-245],[207,138],[62,278],[192,-63],[470,-530],[369,401],[38,-449],[341,97],[105,173],[337,-34],[424,-248],[650,-217],[383,-100],[272,38],[374,-300],[-390,-293],[502,-127],[750,70],[236,103],[296,-354],[302,299],[-283,251],[179,202],[338,27],[223,59],[224,-141],[279,-321],[310,47],[491,-266],[431,94],[405,-14],[-32,367],[247,103],[431,-200],[-2,-559],[177,471],[223,-16],[126,594],[-298,364],[-324,239],[22,653],[329,429],[366,-95],[281,-261],[378,-666],[-247,-290],[517,-120],[-1,-604],[371,463],[332,-380],[-83,-438],[269,-399],[290,427],[202,510],[16,649],[394,-46],[411,-87],[373,-293],[17,-293],[-207,-315],[196,-316],[-36,-288],[-544,-413],[-386,-91],[-287,178],[-83,-297],[-268,-498],[-81,-259],[-322,-399],[-397,-39],[-220,-250],[-18,-384],[-323,-74],[-340,-479],[-301,-665],[-108,-466],[-16,-686],[409,-99],[125,-553],[130,-448],[388,117],[517,-256],[277,-225],[199,-279],[348,-163],[294,-248],[459,-34],[302,-58],[-45,-511],[86,-594],[201,-661],[414,-561],[214,192],[150,607],[-145,934],[-196,311],[445,276],[314,415],[154,411],[-23,395],[-188,502],[-338,445],[328,619],[-121,535],[-93,922],[194,137],[476,-161],[286,-57],[230,155],[258,-200],[342,-343],[85,-229],[495,-45],[-8,-496],[92,-747],[254,-92],[201,-348],[402,328],[266,652],[184,274],[216,-527],[362,-754],[307,-709],[-112,-371],[370,-333],[250,-338],[442,-152],[179,-189],[110,-500],[216,-78],[112,-223],[20,-664],[-202,-222],[-199,-207],[-458,-210],[-349,-486],[-470,-96],[-594,125],[-417,4],[-287,-41],[-233,-424],[-354,-262],[-401,-782],[-320,-545],[236,97],[446,776],[583,493],[415,58],[246,-289],[-262,-397],[88,-637],[91,-446],[361,-295],[459,86],[278,664],[19,-429],[180,-214],[-344,-387],[-615,-351],[-276,-239],[-310,-426],[-211,44],[-11,500],[483,488],[-445,-19],[-309,-72]],[[18287,93781],[-139,-277],[618,179],[386,-298],[314,302],[254,-194],[227,-580],[140,244],[-197,606],[244,86],[276,-94],[311,-239],[175,-575],[86,-417],[466,-293],[502,-279],[-31,-260],[-456,-48],[178,-227],[-94,-217],[-503,93],[-478,160],[-322,-36],[-522,-201],[-704,-88],[-494,-56],[-151,279],[-379,161],[-246,-66],[-343,468],[185,62],[429,101],[392,-26],[362,103],[-537,138],[-594,-47],[-394,12],[-146,217],[644,237],[-428,-9],[-485,156],[233,443],[193,235],[744,359],[284,-114]],[[20972,93958],[-244,-390],[-434,413],[95,83],[372,24],[211,-130]],[[28794,93770],[25,-163],[-296,17],[-299,13],[-304,-80],[-80,36],[-306,313],[12,213],[133,39],[636,-63],[479,-325]],[[25955,93803],[219,-369],[256,477],[704,242],[477,-611],[-42,-387],[550,172],[263,235],[616,-299],[383,-282],[36,-258],[515,134],[290,-376],[670,-234],[242,-238],[263,-553],[-510,-275],[654,-386],[441,-130],[400,-543],[437,-39],[-87,-414],[-487,-687],[-342,253],[-437,568],[-359,-74],[-35,-338],[292,-344],[377,-272],[114,-157],[181,-584],[-96,-425],[-350,160],[-697,473],[393,-509],[289,-357],[45,-206],[-753,236],[-596,343],[-337,287],[97,167],[-414,304],[-405,286],[5,-171],[-803,-94],[-235,203],[183,435],[522,10],[571,76],[-92,211],[96,294],[360,576],[-77,261],[-107,203],[-425,286],[-563,201],[178,150],[-294,367],[-245,34],[-219,201],[-149,-175],[-503,-76],[-1011,132],[-588,174],[-450,89],[-231,207],[290,270],[-394,2],[-88,599],[213,528],[286,241],[717,158],[-204,-382]],[[22123,94208],[331,-124],[496,75],[72,-172],[-259,-283],[420,-254],[-50,-532],[-455,-229],[-268,50],[-192,225],[-690,456],[5,189],[567,-73],[-306,386],[329,286]],[[24112,93575],[-298,-442],[-317,22],[-173,519],[4,294],[145,251],[276,161],[579,-20],[530,-144],[-415,-526],[-331,-115]],[[16539,92755],[-731,-285],[-147,259],[-641,312],[119,250],[192,432],[241,388],[-272,362],[939,93],[397,-123],[709,-33],[270,-171],[298,-249],[-349,-149],[-681,-415],[-344,-414],[0,-257]],[[23996,94879],[-151,-229],[-403,44],[-337,155],[148,266],[399,159],[243,-208],[101,-187]],[[22639,95907],[212,-273],[9,-303],[-127,-440],[-458,-60],[-298,94],[5,345],[-455,-46],[-18,457],[299,-18],[419,201],[390,-34],[22,77]],[[19941,95601],[109,-210],[247,99],[291,-26],[49,-289],[-169,-281],[-940,-91],[-701,-256],[-423,-14],[-35,193],[577,261],[-1255,-70],[-389,106],[379,577],[262,165],[782,-199],[493,-350],[485,-45],[-397,565],[255,215],[286,-68],[94,-282]],[[23699,96131],[308,-190],[547,1],[240,-194],[-64,-222],[319,-134],[177,-140],[374,-26],[406,-50],[441,128],[566,51],[451,-42],[298,-223],[62,-244],[-174,-157],[-414,-127],[-355,72],[-797,-91],[-570,-11],[-449,73],[-738,190],[-96,325],[-34,293],[-279,258],[-574,72],[-322,183],[104,242],[573,-37]],[[17722,96454],[-38,-454],[-214,-205],[-259,-29],[-517,-252],[-444,-91],[-377,128],[472,442],[570,383],[426,-9],[381,87]],[[23933,96380],[-126,-17],[-521,38],[-74,165],[559,-9],[195,-109],[-33,-68]],[[19392,96485],[-518,-170],[-411,191],[224,188],[406,60],[392,-92],[-93,-177]],[[19538,97019],[-339,-115],[-461,1],[5,84],[285,177],[149,-27],[361,-120]],[[23380,96697],[-411,-122],[-226,138],[-119,221],[-22,245],[360,-24],[162,-39],[332,-205],[-76,-214]],[[22205,96856],[108,-247],[-453,66],[-457,192],[-619,21],[268,176],[-335,142],[-21,227],[546,-81],[751,-215],[212,-281]],[[25828,97644],[334,-190],[-381,-176],[-513,-445],[-492,-42],[-575,76],[-299,240],[4,215],[220,157],[-508,-4],[-306,196],[-176,268],[193,262],[192,180],[285,42],[-122,135],[646,30],[355,-315],[468,-127],[455,-112],[220,-390]],[[30972,99681],[742,-47],[597,-75],[508,-161],[-12,-157],[-678,-257],[-672,-119],[-251,-133],[605,3],[-656,-358],[-452,-167],[-476,-483],[-573,-98],[-177,-120],[-841,-64],[383,-74],[-192,-105],[230,-292],[-264,-202],[-429,-167],[-132,-232],[-388,-176],[39,-134],[475,23],[6,-144],[-742,-355],[-726,163],[-816,-91],[-414,71],[-525,31],[-35,284],[514,133],[-137,427],[170,41],[742,-255],[-379,379],[-450,113],[225,229],[492,141],[79,206],[-392,231],[-118,304],[759,-26],[220,-64],[433,216],[-625,68],[-972,-38],[-491,201],[-232,239],[-324,173],[-61,202],[413,112],[324,19],[545,96],[409,220],[344,-30],[300,-166],[211,319],[367,95],[498,65],[849,24],[148,-63],[802,100],[601,-38],[602,-37]],[[52900,78285],[-22,-242],[-122,-100],[-206,75],[-60,-239],[-132,-19],[-48,94],[-156,-200],[-134,-28],[-120,126]],[[51900,77752],[-95,259],[-133,-92],[5,267],[203,332],[-9,150],[126,-54],[77,101]],[[52074,78715],[236,-4],[57,128],[298,-181]],[[31400,18145],[-92,-239],[-238,-183],[-137,19],[-164,48],[-202,177],[-291,86],[-350,330],[-283,317],[-383,662],[229,-124],[390,-395],[369,-212],[143,271],[90,405],[256,244],[198,-70]],[[30952,19680],[-247,4],[-134,-145],[-250,-213],[-45,-552],[-118,-14],[-313,192],[-318,412],[-346,338],[-87,374],[79,346],[-140,393],[-36,1007],[119,568],[293,457],[-422,172],[265,522],[94,982],[309,-208],[145,1224],[-186,157],[-87,-738],[-175,83],[87,845],[95,1095],[127,404],[-80,576],[-22,666],[117,19],[170,954],[192,945],[118,881],[-64,885],[83,487],[-34,730],[163,721],[50,1143],[89,1227],[87,1321],[-20,967],[-58,832]],[[30452,39739],[143,151],[74,303]],[[80649,61615],[-240,-284],[-228,183],[-8,509],[137,267],[304,166],[159,-14],[62,-226],[-122,-260],[-64,-341]],[[86288,75628],[-179,348],[-111,-331],[-429,-254],[44,-312],[-241,22],[-131,185],[-191,-419],[-306,-318],[-227,-379]],[[84517,74170],[-388,-171],[-204,-277],[-300,-161],[148,274],[-58,230],[220,397],[-147,310],[-242,-209],[-314,-411],[-171,-381],[-272,-29],[-142,-275],[147,-400],[227,-97],[9,-265],[220,-173],[311,422],[247,-230],[179,-15],[45,-310],[-393,-165],[-130,-319],[-270,-296],[-142,-414],[299,-325],[109,-581],[169,-541],[189,-454],[-5,-439],[-174,-161],[66,-315],[164,-184],[-43,-481],[-71,-468],[-155,-53],[-203,-640],[-225,-775],[-258,-705],[-382,-545],[-386,-498],[-313,-68],[-170,-262],[-96,192],[-157,-294],[-388,-296],[-294,-90],[-95,-624],[-154,-35],[-73,429],[66,228],[-373,189],[-131,-96]],[[80013,63313],[-280,154],[-132,240],[44,340],[-254,108],[-134,222],[-236,-315],[-271,-68],[-221,3],[-149,-145]],[[78380,63852],[-144,-86],[42,-676],[-148,16],[-25,139]],[[78105,63245],[-9,244],[-203,-172],[-121,109],[-206,222],[81,490],[-176,115],[-66,544],[-293,-98],[33,701],[263,493],[11,487],[-8,452],[-121,141],[-93,348],[-162,-44]],[[77035,67277],[-300,89],[94,248],[-130,367],[-198,-249],[-233,145],[-321,-376],[-252,-439],[-224,-74]],[[74670,66709],[-23,465],[-170,-124]],[[74477,67050],[-324,57],[-314,136],[-225,259],[-216,117],[-93,284],[-157,84],[-280,385],[-223,182],[-115,-141]],[[72530,68413],[-386,413],[-273,374],[-78,651],[200,-79],[9,301],[-111,303],[28,482],[-298,692]],[[71621,71550],[-457,239],[-82,454],[-205,276]],[[70827,72688],[-42,337],[10,230],[-169,134],[-91,-59],[-70,546]],[[70465,73876],[79,136],[-39,138],[266,279],[192,116],[294,-80],[105,378],[356,70],[99,234],[438,320],[39,134]],[[72294,75601],[-22,337],[190,154],[-250,1026],[550,236],[143,131],[200,1058],[551,-194],[155,267],[13,592],[230,56],[212,393]],[[74266,79657],[109,49]],[[74375,79706],[73,-413],[233,-313],[396,-222],[192,-476],[-107,-690],[100,-256],[330,-101],[374,-83],[336,-368],[171,-66],[127,-544],[163,-351],[306,14],[574,-133],[369,82],[274,-88],[411,-359],[336,1],[123,-184],[324,318],[448,205],[417,22],[324,208],[200,316],[194,199],[-45,195],[-89,227],[146,381],[156,-53],[286,-120],[277,313],[423,229],[204,391],[195,168],[404,78],[219,-66],[30,210],[-251,413],[-223,189],[-214,-219],[-274,92],[-157,-74],[-72,241],[197,590],[135,446]],[[82410,80055],[333,-223],[392,373],[-3,260],[251,627],[155,189],[-4,326],[-152,141],[229,294],[345,106],[369,16],[415,-176],[244,-217],[172,-596],[104,-254],[97,-363],[103,-579],[483,-189],[329,-420],[112,-555],[423,-1],[240,233],[459,175],[-146,-532],[-107,-216],[-96,-647],[-186,-575],[-338,104],[-238,-208],[73,-506],[-40,-698],[-142,-16],[2,-300]],[[49206,53531],[-126,-7],[-194,116],[-178,-7],[-329,-103],[-193,-170],[-275,-217],[-54,15]],[[47857,53158],[22,487],[26,74],[-8,233],[-118,247],[-88,40],[-81,162],[60,262],[-28,286],[13,172]],[[47655,55121],[44,0],[17,258],[-22,114],[27,82],[103,71],[-69,473],[-64,245],[23,200],[55,46]],[[47769,56610],[36,54],[77,-89],[215,-5],[51,172],[48,-11],[80,67],[43,-253],[65,74],[114,88]],[[49214,56277],[74,-841],[-117,-496],[-73,-667],[121,-509],[-13,-233]],[[53632,51919],[-35,32],[-164,-76],[-169,79],[-132,-38]],[[53132,51916],[-452,13]],[[52680,51929],[40,466],[-108,391],[-127,100],[-56,265],[-72,85],[4,163]],[[52361,53399],[71,418],[132,570],[81,6],[165,345],[105,10],[156,-243],[191,199],[26,246],[63,238],[43,299],[148,243],[56,414],[59,132],[39,307],[74,377],[234,457],[14,196],[31,107],[-110,235]],[[53939,57955],[9,188],[78,34]],[[54026,58177],[111,-378],[18,-392],[-10,-393],[151,-537],[-155,6],[-78,-42],[-127,60],[-60,-279],[164,-345],[121,-100],[39,-245],[87,-407],[-43,-160]],[[54447,51919],[-20,-319],[-220,140],[-225,156],[-350,23]],[[58564,52653],[-16,-691],[111,-80],[-89,-210],[-107,-157],[-106,-308],[-59,-274],[-15,-475],[-65,-225],[-2,-446]],[[58216,49787],[-80,-165],[-10,-351],[-38,-46],[-26,-323]],[[58149,47921],[50,-544],[-27,-307]],[[58172,47070],[55,-343],[161,-330]],[[58388,46397],[150,-745]],[[58538,45652],[-109,60],[-373,-99],[-75,-71],[-79,-377],[62,-261],[-49,-699],[-34,-593],[75,-105],[194,-230],[76,107],[23,-637],[-212,5],[-114,325],[-103,252],[-213,82],[-62,310],[-170,-187],[-222,83],[-93,268],[-176,55],[-131,-15],[-15,184],[-96,15]],[[53422,46976],[-39,183]],[[53609,47755],[73,-60],[95,226],[152,-6],[17,-167],[104,-105],[164,370],[161,289],[71,189],[-10,486],[121,574],[127,304],[183,285],[32,189],[7,216],[45,205],[-14,335],[34,524],[55,368],[83,316],[16,357]],[[57603,53672],[169,-488],[124,-71],[75,99],[128,-39],[155,125],[66,-252],[244,-393]],[[53309,47603],[-228,626]],[[53081,48229],[212,326],[-105,391],[95,148],[187,73],[23,261],[148,-283],[245,-25],[85,279],[36,393],[-31,461],[-131,350],[120,684],[-69,117],[-207,-48],[-78,305],[21,258]],[[29063,50490],[-119,140],[-137,195],[-79,-94],[-235,82],[-68,255],[-52,-10],[-278,338]],[[28095,51396],[-37,183],[103,44],[-12,296],[65,214],[138,40],[117,371],[106,310],[-102,141],[52,343],[-62,540],[59,155],[-44,500],[-112,315]],[[28366,54848],[36,287],[89,-43],[52,176],[-64,348],[34,86]],[[28513,55702],[143,-18],[209,412],[114,63],[3,195],[51,500],[159,274],[175,11],[22,123],[218,-49],[218,298],[109,132],[134,285],[98,-36],[73,-156],[-54,-199]],[[30185,57537],[-178,-99],[-71,-295],[-107,-169],[-81,-220],[-34,-422],[-77,-345],[144,-40],[35,-271],[62,-130],[21,-238],[-33,-219],[10,-123],[69,-49],[66,-207],[357,57],[161,-75],[196,-508],[112,63],[200,-32],[158,68],[99,-102],[-50,-318],[-62,-199],[-22,-423],[56,-393],[79,-175],[9,-133],[-140,-294],[100,-130],[74,-207],[85,-589]],[[30585,48040],[-139,314],[-83,14],[179,602],[-213,276],[-166,-51],[-101,103],[-153,-157],[-207,74],[-163,620],[-129,152],[-89,279],[-184,280],[-74,-56]],[[26954,55439],[-151,131],[-56,124],[32,103],[-11,130],[-77,142],[-109,116],[-95,76],[-19,173],[-73,105],[18,-172],[-55,-141],[-64,164],[-89,58],[-38,120],[2,179],[36,187],[-78,83],[64,114]],[[26191,57131],[42,76],[183,-156],[63,77],[89,-50],[46,-121],[82,-40],[66,126]],[[26762,57043],[70,-321],[108,-238],[130,-252]],[[27070,56232],[-107,-53],[1,-238],[58,-88],[-41,-70],[10,-107],[-23,-120],[-14,-117]],[[27147,64280],[240,-42],[219,-7],[261,-201],[110,-216],[260,66],[98,-138],[235,-366],[173,-267],[92,8],[165,-120],[-20,-167],[205,-24],[210,-242],[-33,-138],[-185,-75],[-187,-29],[-191,46],[-398,-57],[186,329],[-113,154],[-179,39],[-96,171],[-66,336],[-157,-23],[-259,159],[-83,124],[-362,91],[-97,115],[104,148],[-273,30],[-199,-307],[-115,-8],[-40,-144],[-138,-65],[-118,56],[146,183],[60,213],[126,131],[142,116],[210,56],[67,65]],[[59092,71341],[19,3],[40,143],[200,-8],[253,176],[-188,-251],[21,-111]],[[59437,71293],[-30,21],[-53,-45],[-42,12],[-14,-22],[-5,59],[-20,37],[-54,6],[-75,-51],[-52,31]],[[59437,71293],[8,-48],[-285,-240],[-136,77],[-64,237],[132,22]],[[53776,79457],[-157,254],[-141,142],[-30,249],[-49,176],[202,129],[103,147],[200,114],[70,113],[73,-68],[124,62]],[[54171,80775],[132,-191],[207,-51],[-17,-163],[151,-122],[41,153],[191,-66],[26,-185],[207,-36],[127,-291]],[[55236,79823],[-82,-1],[-43,-106],[-64,-26],[-18,-134],[-54,-28],[-7,-55],[-95,-61],[-123,10],[-39,-130]],[[52756,83065],[4,-228],[281,-138],[-3,-210],[283,111],[156,162],[313,-233],[132,-189]],[[53922,82340],[64,-300],[-77,-158],[101,-210],[69,-316],[-22,-204],[114,-377]],[[52074,78715],[35,421],[140,404],[-400,109],[-131,155]],[[51718,79804],[16,259],[-56,133]],[[51710,80596],[-47,619],[167,0],[70,222],[69,541],[-51,200]],[[51918,82178],[54,125],[232,32],[52,-130],[188,291],[-63,222],[-13,335]],[[52368,83053],[210,-78],[178,90]],[[61966,58083],[66,-183],[-9,-245],[-158,-142],[119,-161]],[[61984,57352],[-102,-317]],[[61882,57035],[-62,106],[-67,-42],[-155,10],[-4,180],[-22,163],[94,277],[98,261]],[[61764,57990],[119,-51],[83,144]],[[53524,83435],[-166,-478],[-291,333],[-39,246],[408,195],[88,-296]],[[52368,83053],[-113,328],[-8,604],[46,159],[80,177],[244,37],[98,163],[223,167],[-9,-304],[-82,-192],[33,-166],[151,-89],[-68,-223],[-83,64],[-200,-425],[76,-288]],[[30080,62227],[34,101],[217,-3],[165,-152],[73,15],[50,-209],[152,11],[-9,-176],[124,-21],[136,-217],[-103,-240],[-132,128],[-127,-25],[-92,28],[-50,-107],[-106,-37],[-43,144],[-92,-85],[-111,-405],[-71,94],[-14,170]],[[30081,61241],[5,161],[-71,177],[68,99],[21,228],[-24,321]],[[53333,64447],[-952,-1126],[-804,-1161],[-392,-263]],[[51185,61897],[-308,-58],[-3,376],[-129,96],[-173,169],[-66,277],[-937,1289],[-937,1289]],[[48632,65335],[-1045,1431]],[[47587,66766],[6,114],[-1,40]],[[47592,66920],[-2,700],[449,436],[277,90],[227,159],[107,295],[324,234],[12,438],[161,51],[126,219],[363,99],[51,230],[-73,125],[-96,624],[-17,359],[-104,379]],[[49397,71358],[267,323],[300,102],[175,244],[268,180],[471,105],[459,48],[140,-87],[262,232],[297,5],[113,-137],[190,35]],[[52339,72408],[-57,-303],[44,-563],[-65,-487],[-171,-330],[24,-445],[227,-352],[3,-143],[171,-238],[118,-1061]],[[52633,68486],[90,-522],[15,-274],[-49,-482],[21,-270],[-36,-323],[24,-371],[-110,-247],[164,-431],[11,-253],[99,-330],[130,109],[219,-275],[122,-370]],[[27693,48568],[148,442],[-60,258],[-106,-275],[-166,259],[56,167],[-47,536],[97,89],[52,368],[105,381],[-20,241],[153,126],[190,236]],[[29063,50490],[38,-449],[-86,-384],[-303,-619],[-334,-233],[-170,-514],[-53,-398],[-157,-243],[-116,298],[-113,64],[-114,-47],[-8,216],[79,141],[-33,246]],[[59700,68010],[-78,-238],[-60,-446],[-75,-308],[-65,-103],[-93,191],[-125,263],[-198,847],[-29,-53],[115,-624],[171,-594],[210,-920],[102,-321],[90,-334],[249,-654],[-55,-103],[9,-384],[323,-530],[49,-121]],[[60240,63578],[-1102,0],[-1077,0],[-1117,0]],[[56944,63578],[0,2175],[0,2101],[-83,476],[71,365],[-43,253],[101,283]],[[56990,69231],[369,10],[268,-156],[275,-175],[129,-92],[214,188],[114,169],[245,49],[198,-75],[75,-293],[65,193],[222,-140],[217,-33],[137,149]],[[59518,69025],[182,-1015]],[[61764,57990],[-95,191],[-114,346],[-124,190],[-71,204],[-242,237],[-191,7],[-67,124],[-163,-139],[-168,268],[-87,-441],[-323,124]],[[60119,59101],[-30,236],[120,868],[27,393],[88,181],[204,97],[141,337]],[[60669,61213],[161,-684],[77,-542],[152,-288],[379,-558],[154,-336],[151,-341],[87,-203],[136,-178]],[[47490,75324],[14,420],[-114,257],[393,426],[340,-106],[373,3],[296,-101],[230,31],[449,-19]],[[49471,76235],[111,-230],[511,-268],[101,127],[313,-267],[322,77]],[[50829,75674],[15,-344],[-263,-393],[-356,-125],[-25,-199],[-171,-327],[-107,-481],[108,-338],[-160,-263],[-60,-384],[-210,-118],[-197,-454],[-352,-9],[-265,11],[-174,-209],[-106,-223],[-136,49],[-103,199],[-79,340],[-259,92]],[[47929,72498],[-23,195],[103,222],[38,161],[-96,175],[77,388],[-111,355],[120,48],[11,280],[45,86],[3,461],[129,160],[-78,296],[-162,21],[-47,-75],[-164,0],[-70,289],[-113,-86],[-101,-150]],[[56753,84725],[32,349],[-102,-75],[-176,210],[-24,340],[351,164],[350,86],[301,-97],[287,17]],[[57772,85719],[42,-103],[-198,-341],[83,-551],[-120,-187]],[[57579,84537],[-229,1],[-239,219],[-121,73],[-237,-105]],[[61882,57035],[-61,-209],[103,-325],[102,-285],[106,-210],[909,-702],[233,4]],[[63274,55308],[-785,-1773],[-362,-26],[-247,-417],[-178,-11],[-76,-186]],[[61626,52895],[-190,0],[-112,200],[-254,-247],[-82,-247],[-185,47],[-62,68],[-65,-16],[-87,6],[-352,502],[-193,0],[-95,194],[0,332],[-145,99]],[[59804,53833],[-164,643],[-127,137],[-48,236],[-141,288],[-171,42],[95,337],[147,14],[42,181]],[[59437,55711],[-4,531]],[[59433,56242],[82,618],[132,166],[28,241],[119,451],[168,293],[112,582],[45,508]],[[57942,91385],[-41,-414],[425,-394],[-256,-445],[323,-673],[-187,-506],[250,-440],[-113,-385],[411,-405],[-105,-301],[-258,-341],[-594,-755]],[[57797,86326],[-504,-47],[-489,-216],[-452,-125],[-161,323],[-269,193],[62,582],[-135,533],[133,345],[252,371],[635,640],[185,124],[-28,250],[-387,279]],[[56639,89578],[-93,230],[-8,910],[-433,402],[-371,289]],[[55734,91409],[167,156],[309,-312],[362,29],[298,-143],[265,262],[137,433],[431,200],[356,-235],[-117,-414]],[[99547,40335],[96,-171],[-46,-308],[-172,-81],[-153,73],[-27,260],[107,203],[126,-74],[69,98]],[[0,41087],[57,27],[-34,-284],[-23,-32],[99822,-145],[-177,-124],[-36,220],[139,121],[88,33],[-99836,184]],[[33000,19946],[333,354],[236,-148],[167,237],[222,-266],[-83,-207],[-375,-177],[-125,207],[-236,-266],[-139,266]],[[34854,51946],[70,252],[24,269],[48,253],[-107,349]],[[34889,53069],[-22,404],[144,508]],[[35011,53981],[95,-65],[204,-140],[294,-499],[46,-242]],[[52655,75484],[-92,-456],[-126,120],[-64,398],[56,219],[179,226],[47,-507]],[[51576,79843],[62,-52],[80,13]],[[51900,77752],[-11,-167],[82,-222],[-97,-180],[72,-457],[151,-75],[-32,-256]],[[52065,76395],[-252,-334],[-548,160],[-404,-192],[-32,-355]],[[49471,76235],[144,354],[53,1177],[-287,620],[-205,299],[-424,227],[-28,431],[360,129],[466,-152],[-88,669],[263,-254],[646,461],[84,484],[243,119]],[[53081,48229],[-285,596],[-184,488],[-169,610],[9,196],[61,189],[67,430],[56,438]],[[52636,51176],[94,35],[404,-6],[-2,711]],[[48278,82406],[-210,122],[-172,-9],[57,317],[-57,317]],[[47896,83153],[233,24],[298,-365],[-149,-406]],[[49165,85222],[-297,-639],[283,81],[304,-3],[-72,-481],[-250,-530],[287,-38],[22,-62],[248,-697],[190,-95],[171,-673],[79,-233],[337,-113],[-34,-378],[-142,-173],[111,-305],[-250,-310],[-371,6],[-473,-163],[-130,116],[-183,-276],[-257,67],[-195,-226],[-148,118],[407,621],[249,127],[-2,1],[-434,98],[-79,235],[291,183],[-152,319],[52,387],[413,-54],[1,0],[40,343],[-186,364],[-4,8],[-337,104],[-66,160],[101,264],[-92,163],[-149,-279],[-17,569],[-140,301],[101,611],[216,480],[222,-47],[335,49]],[[61542,75120],[42,252],[-70,403],[-160,218],[-154,68],[-102,181]],[[61098,76242],[34,70],[235,-101],[409,-96],[378,-283],[48,-110],[169,93],[259,-124],[85,-242],[175,-137]],[[62106,74858],[-268,290],[-296,-28]],[[50294,54083],[-436,-346],[-154,-203],[-250,-171],[-248,168]],[[50006,57090],[-20,-184],[116,-305],[-1,-429],[27,-466],[69,-215],[-61,-532],[22,-294],[74,-375],[62,-207]],[[47655,55121],[-78,15],[-57,-238],[-78,3],[-55,126],[19,237],[-116,362],[-73,-67],[-59,-13]],[[47158,55546],[-77,-34],[3,217],[-44,155],[9,171],[-60,249],[-78,211],[-222,1],[-65,-112],[-76,-13],[-48,-128],[-32,-163],[-148,-260]],[[46320,55840],[-122,349],[-108,232],[-71,76],[-69,118],[-32,261],[-41,130],[-80,97]],[[45797,57103],[123,288],[84,-11],[73,99],[61,1],[44,78],[-24,196],[31,62],[5,200]],[[46194,58016],[134,-6],[200,-144],[61,13],[21,66],[151,-47],[40,33]],[[46801,57931],[16,-216],[44,1],[73,78],[46,-19],[77,-150],[119,-48],[76,128],[90,79],[67,83],[55,-15],[62,-130],[33,-163],[114,-248],[-57,-152],[-11,-192],[59,58],[35,-69],[-15,-176],[85,-170]],[[45321,58350],[36,262]],[[45357,58612],[302,17],[63,140],[88,9],[110,-145],[86,-3],[92,99],[56,-170],[-120,-133],[-121,11],[-119,124],[-103,-136],[-50,-5],[-67,-83],[-253,13]],[[45797,57103],[-149,247],[-117,39],[-63,166],[1,90],[-84,125],[-18,127]],[[45367,57897],[147,96],[92,-19],[75,67],[513,-25]],[[52636,51176],[-52,90],[96,663]],[[56583,71675],[152,-199],[216,34],[207,-42],[-7,-103],[151,71],[-35,-175],[-400,-50],[3,98],[-339,115],[52,251]],[[57237,74699],[-169,17],[-145,56],[-336,-154],[192,-332],[-141,-96],[-154,-1],[-147,305],[-52,-130],[62,-353],[139,-277],[-105,-129],[155,-273],[137,-171],[4,-334],[-257,157],[82,-302],[-176,-62],[105,-521],[-184,-8],[-228,257],[-104,473],[-49,393],[-108,272],[-143,337],[-18,168]],[[55838,74710],[182,53],[106,129],[150,-12],[46,103],[53,20]],[[57254,75292],[135,-157],[-86,-369],[-66,-67]],[[37010,99398],[932,353],[975,-27],[354,218],[982,57],[2219,-74],[1737,-469],[-513,-227],[-1062,-26],[-1496,-58],[140,-105],[984,65],[836,-204],[540,181],[231,-212],[-305,-344],[707,220],[1348,229],[833,-114],[156,-253],[-1132,-420],[-157,-136],[-888,-102],[643,-28],[-324,-431],[-224,-383],[9,-658],[333,-386],[-434,-24],[-457,-187],[513,-313],[65,-502],[-297,-55],[360,-508],[-617,-42],[322,-241],[-91,-208],[-391,-91],[-388,-2],[348,-400],[4,-263],[-549,244],[-143,-158],[375,-148],[364,-361],[105,-476],[-495,-114],[-214,228],[-344,340],[95,-401],[-322,-311],[732,-25],[383,-32],[-745,-515],[-755,-466],[-813,-204],[-306,-2],[-288,-228],[-386,-624],[-597,-414],[-192,-24],[-370,-145],[-399,-138],[-238,-365],[-4,-415],[-141,-388],[-453,-472],[112,-462],[-125,-488],[-142,-577],[-391,-36],[-410,482],[-556,3],[-269,324],[-186,577],[-481,735],[-141,385],[-38,530],[-384,546],[100,435],[-186,208],[275,691],[418,220],[110,247],[58,461],[-318,-209],[-151,-88],[-249,-84],[-341,193],[-19,401],[109,314],[258,9],[567,-157],[-478,375],[-249,202],[-276,-83],[-232,147],[310,550],[-169,220],[-220,409],[-335,626],[-353,230],[3,247],[-745,346],[-590,43],[-743,-24],[-677,-44],[-323,188],[-482,372],[729,186],[559,31],[-1188,154],[-627,241],[39,229],[1051,285],[1018,284],[107,214],[-750,213],[243,235],[961,413],[404,63],[-115,265],[658,156],[854,93],[853,5],[303,-184],[737,325],[663,-221],[390,-46],[577,-192],[-660,318],[38,253]],[[24973,58695],[-142,103],[-174,11],[-127,117],[-149,244]],[[24381,59170],[7,172],[32,138],[-39,111],[133,481],[357,2],[7,201],[-45,36],[-31,128],[-103,136],[-103,198],[125,1],[1,333],[259,1],[257,-7]],[[25297,59966],[90,-107],[24,88],[82,-75]],[[25493,59872],[-127,-225],[-131,-166],[-20,-113],[22,-116],[-58,-150]],[[25179,59102],[-65,-37],[15,-69],[-52,-66],[-95,-149],[-9,-86]],[[33400,55523],[183,-217],[171,-385],[8,-304],[105,-14],[149,-289],[109,-205]],[[34125,54109],[-44,-532],[-169,-154],[15,-139],[-51,-305],[123,-429],[89,-1],[37,-333],[169,-514]],[[33129,53652],[-188,448],[75,163],[-5,273],[171,95],[69,110],[-95,220],[24,215],[220,347]],[[25745,58251],[-48,185],[-84,51]],[[25613,58487],[19,237],[-38,64],[-57,42],[-122,-70],[-10,79],[-84,95],[-60,118],[-82,50]],[[25493,59872],[29,-23],[61,104],[79,8],[26,-48],[43,29],[129,-53],[128,15],[90,66],[32,66],[89,-31],[66,-40],[73,14],[55,51],[127,-82],[44,-13],[85,-110],[80,-132],[101,-91],[73,-162]],[[26903,59440],[-95,12],[-38,-81],[-97,-77],[-70,0],[-61,-76],[-56,27],[-47,90],[-29,-17],[-36,-141],[-27,5],[-4,-121],[-97,-163],[-51,-70],[-29,-74],[-82,120],[-60,-158],[-58,4],[-65,-14],[6,-290],[-41,-5],[-35,-135],[-86,-25]],[[55230,77704],[67,-229],[89,-169],[-107,-222]],[[55155,75778],[-31,-100]],[[55124,75678],[-261,218],[-161,213],[-254,176],[-233,434],[56,45],[-127,248],[-5,200],[-179,93],[-85,-255],[-82,198],[6,205],[10,9]],[[53809,77462],[194,-20],[51,100],[94,-97],[109,-11],[-1,165],[97,60],[27,239],[221,157]],[[54601,78055],[88,-73],[208,-253],[229,-114],[104,89]],[[30081,61241],[-185,100],[-131,-41],[-169,43],[-130,-110],[-149,184],[24,190],[256,-82],[210,-47],[100,131],[-127,256],[2,226],[-175,92],[62,163],[170,-26],[241,-93]],[[54716,79012],[141,-151],[103,-65],[233,73],[22,118],[111,18],[135,92],[30,-38],[130,74],[66,139],[91,36],[297,-180],[59,61]],[[56134,79189],[155,-161],[19,-159]],[[56308,78869],[-170,-123],[-131,-401],[-168,-401],[-223,-111]],[[55616,77833],[-173,26],[-213,-155]],[[54601,78055],[-54,200],[-47,6]],[[83531,44530],[-117,-11],[-368,414],[259,116],[146,-180],[97,-180],[-17,-159]],[[84713,45326],[28,-117],[5,-179]],[[84746,45030],[-181,-441],[-238,-130],[-33,71],[25,201],[119,360],[275,235]],[[82749,45797],[100,-158],[172,48],[69,-251],[-321,-119],[-193,-79],[-149,5],[95,340],[153,5],[74,209]],[[84139,45797],[-41,-328],[-417,-168],[-370,73],[0,216],[220,123],[174,-177],[185,45],[249,216]],[[80172,46575],[533,-59],[61,244],[515,-284],[101,-383],[417,-108],[341,-351],[-317,-225],[-306,238],[-251,-16],[-288,44],[-260,106],[-322,225],[-204,59],[-116,-74],[-506,243],[-48,254],[-255,44],[191,564],[337,-35],[224,-231],[115,-45],[38,-210]],[[87423,46908],[-143,-402],[-27,445],[49,212],[58,200],[63,-173],[0,-282]],[[85346,48536],[-104,-196],[-192,108],[-54,254],[281,29],[69,-195]],[[86241,48752],[101,-452],[-234,244],[-232,49],[-157,-39],[-192,21],[65,325],[344,24],[305,-172]],[[89166,49043],[5,-1925],[4,-1925]],[[89175,45193],[-247,485],[-282,118],[-69,-168],[-352,-18],[118,481],[175,164],[-72,642],[-134,496],[-538,500],[-229,50],[-417,546],[-82,-287],[-107,-52],[-63,216],[-1,257],[-212,290],[299,213],[198,-11],[-23,156],[-407,1],[-110,352],[-248,109],[-117,293],[374,143],[142,192],[446,-242],[44,-220],[78,-955],[287,-354],[232,627],[319,356],[247,1],[238,-206],[206,-212],[298,-113]],[[84788,51419],[-223,-587],[-209,-113],[-267,115],[-463,-29],[-243,-85],[-39,-447],[248,-526],[150,268],[518,201],[-22,-272],[-121,86],[-121,-347],[-245,-229],[263,-757],[-50,-203],[249,-682],[-2,-388],[-148,-173],[-109,207],[134,484],[-273,-229],[-69,164],[36,228],[-200,346],[21,576],[-186,-179],[24,-689],[11,-846],[-176,-85],[-119,173],[79,544],[-43,570],[-117,4],[-86,405],[115,387],[40,469],[139,891],[58,243],[237,439],[217,-174],[350,-82],[319,25],[275,429],[48,-132]],[[85746,51249],[-15,-517],[-143,58],[-42,-359],[114,-312],[-78,-71],[-112,374],[-82,755],[56,472],[92,215],[20,-322],[164,-52],[26,-241]],[[80461,51765],[47,-395],[190,-334],[179,121],[177,-43],[162,299],[133,52],[263,-166],[226,126],[143,822],[107,205],[96,672],[319,0],[241,-100]],[[82744,53024],[-158,-533],[204,-560],[-48,-272],[312,-546],[-329,-70],[-93,-403],[12,-535],[-267,-404],[-7,-589],[-107,-903],[-41,210],[-316,-266],[-110,361],[-198,34],[-139,189],[-330,-212],[-101,285],[-182,-32],[-229,68],[-43,793],[-138,164],[-134,505],[-38,517],[32,548],[165,392]],[[79393,47122],[-308,-12],[-234,494],[-356,482],[-119,358],[-210,481],[-138,443],[-212,827],[-244,493],[-81,508],[-103,461],[-250,372],[-145,506],[-209,330],[-290,652],[-24,300],[178,-24],[430,-114],[246,-577],[215,-401],[153,-246],[263,-635],[283,-9],[233,-405],[161,-495],[211,-270],[-111,-482],[159,-205],[100,-15],[47,-412],[97,-330],[204,-52],[135,-374],[-70,-735],[-11,-914]],[[72530,68413],[-176,-268],[-108,-553],[269,-224],[262,-289],[362,-332],[381,-76],[160,-301],[215,-56],[334,-138],[231,10],[32,234],[-36,375],[21,255]],[[77035,67277],[20,-224],[-97,-108],[23,-364],[-199,107],[-359,-408],[8,-338],[-153,-496],[-14,-288],[-124,-487],[-217,135],[-11,-612],[-63,-201],[30,-251],[-137,-140]],[[74730,63611],[-39,-216],[-189,7],[-343,-122],[16,-445],[-148,-349],[-400,-398],[-311,-695],[-209,-373],[-276,-387],[-1,-271],[-138,-146],[-251,-212],[-129,-31],[-84,-450],[58,-769],[15,-490],[-118,-561],[-1,-1004],[-144,-29],[-126,-450],[84,-195],[-253,-168],[-93,-401],[-112,-170],[-263,552],[-128,827],[-107,596],[-97,279],[-148,568],[-69,739],[-48,369],[-253,811],[-115,1145],[-83,756],[1,716],[-54,553],[-404,-353],[-196,70],[-362,716],[133,214],[-82,232],[-326,501]],[[68937,64577],[185,395],[612,-2],[-56,507],[-156,300],[-31,455],[-182,265],[306,619],[323,-45],[290,620],[174,599],[270,593],[-4,421],[236,342],[-224,292],[-96,400],[-99,517],[137,255],[421,-144],[310,88],[268,496]],[[48278,82406],[46,-422],[-210,-528],[-493,-349],[-393,89],[225,617],[-145,601],[378,463],[210,276]],[[64978,72558],[244,114],[197,338],[186,-17],[122,110],[197,-55],[308,-299],[221,-65],[318,-523],[207,-21],[24,-498]],[[66909,68203],[137,-310],[112,-357],[266,-260],[7,-520],[133,-96],[23,-272],[-400,-305],[-105,-687]],[[67082,65396],[-523,179],[-303,136],[-313,76],[-118,725],[-133,105],[-214,-106],[-280,-286],[-339,196],[-281,454],[-267,168],[-186,561],[-205,788],[-149,-96],[-177,196],[-104,-231]],[[63490,68261],[-153,311],[-3,314],[-89,0],[46,428],[-143,449],[-340,324],[-193,562],[65,461],[139,204],[-21,345],[-182,177],[-180,705]],[[62436,72541],[-152,473],[55,183],[-87,678],[190,168]],[[63578,73220],[88,-436],[263,-123],[193,-296],[395,-102],[434,156],[27,139]],[[63490,68261],[-164,29]],[[63326,68290],[-187,49],[-204,-567]],[[62935,67772],[-516,47],[-784,1188],[-413,414],[-335,160]],[[60887,69581],[-112,720]],[[60775,70301],[615,614],[105,715],[-26,431],[152,146],[142,369]],[[61763,72576],[119,92],[324,-77],[97,-150],[133,100]],[[45969,89843],[-64,-382],[314,-403],[-361,-451],[-801,-405],[-240,-107],[-365,87],[-775,187],[273,261],[-605,289],[492,114],[-12,174],[-583,137],[188,385],[421,87],[433,-400],[422,321],[349,-167],[453,315],[461,-42]],[[59922,69905],[-49,-186]],[[59873,69719],[-100,82],[-58,-394],[69,-66],[-71,-81],[-12,-156],[131,80]],[[59832,69184],[7,-230],[-139,-944]],[[59518,69025],[80,194],[-19,34],[74,276],[56,446],[40,149],[8,6]],[[59757,70130],[93,-1],[25,104],[75,8]],[[59950,70241],[4,-242],[-38,-90],[6,-4]],[[54311,73167],[-100,-465],[41,-183],[-58,-303],[-213,222],[-141,64],[-387,300],[38,304],[325,-54],[284,64],[211,51]],[[52558,74927],[166,-419],[-39,-782],[-126,38],[-113,-197],[-105,156],[-11,713],[-64,338],[153,-30],[139,183]],[[53835,78058],[-31,-291],[67,-251]],[[53871,77516],[-221,86],[-226,-210],[15,-293],[-34,-168],[91,-301],[261,-298],[140,-488],[309,-476],[217,3],[68,-130],[-78,-118],[249,-214],[204,-178],[238,-308],[29,-111],[-52,-211],[-154,276],[-242,97],[-116,-382],[200,-219],[-33,-309],[-116,-35],[-148,-506],[-116,-46],[1,181],[57,317],[60,126],[-108,342],[-85,298],[-115,74],[-82,255],[-179,107],[-120,238],[-206,38],[-217,267],[-254,384],[-189,340],[-86,585],[-138,68],[-226,195],[-128,-80],[-161,-274],[-115,-43]],[[28453,61504],[187,-53],[147,-142],[46,-161],[-195,-11],[-84,-99],[-156,95],[-159,215],[34,135],[116,41],[64,-20]],[[59922,69905],[309,-234],[544,630]],[[60887,69581],[-53,-89],[-556,-296],[277,-591],[-92,-101],[-46,-197],[-212,-82],[-66,-213],[-120,-182],[-310,94]],[[59709,67924],[-9,86]],[[59832,69184],[41,173],[0,362]],[[87399,70756],[35,-203],[-156,-357],[-114,189],[-143,-137],[-73,-346],[-181,168],[2,281],[154,352],[158,-68],[114,248],[204,-127]],[[89159,72524],[-104,-472],[48,-296],[-145,-416],[-355,-278],[-488,-36],[-396,-675],[-186,227],[-12,442],[-483,-130],[-329,-279],[-325,-11],[282,-435],[-186,-1004],[-179,-248],[-135,229],[69,533],[-176,172],[-113,405],[263,182],[145,371],[280,306],[203,403],[553,177],[297,-121],[291,1050],[185,-282],[408,591],[158,229],[174,723],[-47,664],[117,374],[295,108],[152,-819],[-9,-479],[-256,-595],[4,-610]],[[89974,76679],[195,-126],[197,250],[62,-663],[-412,-162],[-244,-587],[-436,404],[-152,-646],[-308,-9],[-39,587],[138,455],[296,33],[81,817],[83,460],[326,-615],[213,-198]],[[69711,75551],[-159,-109],[-367,-412],[-121,-422],[-104,-4],[-76,280],[-353,19],[-57,484],[-135,4],[21,593],[-333,431],[-476,-46],[-326,-86],[-265,533],[-227,223],[-431,423],[-52,51],[-715,-349],[11,-2178]],[[65546,74986],[-142,-29],[-195,463],[-188,166],[-315,-123],[-123,-197]],[[64583,75266],[-15,144],[68,246],[-53,206],[-322,202],[-125,530],[-154,150],[-9,192],[270,-56],[11,432],[236,96],[243,-88],[50,576],[-50,365],[-278,-28],[-236,144],[-321,-260],[-259,-124]],[[63639,77993],[-142,96],[29,304],[-177,395],[-207,-17],[-235,401],[160,448],[-81,120],[222,649],[285,-342],[35,431],[573,643],[434,15],[612,-409],[329,-239],[295,249],[440,12],[356,-306],[80,175],[391,-25],[69,280],[-450,406],[267,288],[-52,161],[266,153],[-200,405],[127,202],[1039,205],[136,146],[695,218],[250,245],[499,-127],[88,-612],[290,144],[356,-202],[-23,-322],[267,33],[696,558],[-102,-185],[355,-457],[620,-1500],[148,309],[383,-340],[399,151],[154,-106],[133,-341],[194,-115],[119,-251],[358,79],[147,-361]],[[72294,75601],[-171,87],[-140,212],[-412,62],[-461,16],[-100,-65],[-396,248],[-158,-122],[-43,-349],[-457,204],[-183,-84],[-62,-259]],[[61551,49585],[-195,-236],[-68,-246],[-104,-44],[-40,-416],[-89,-238],[-54,-393],[-112,-195]],[[60889,47817],[-399,590],[-19,343],[-1007,1203],[-47,65]],[[59417,50018],[-3,627],[80,239],[137,391],[101,431],[-123,678],[-32,296],[-132,411]],[[59445,53091],[171,352],[188,390]],[[61626,52895],[-243,-670],[3,-2152],[165,-488]],[[70465,73876],[-526,-89],[-343,192],[-301,-46],[26,340],[303,-98],[101,182]],[[69725,74357],[212,-58],[355,425],[-329,311],[-198,-147],[-205,223],[234,382],[-83,58]],[[78495,57780],[-66,713],[178,492],[359,112],[261,-84]],[[79227,59013],[229,-232],[126,407],[246,-217]],[[79828,58971],[64,-394],[-34,-708],[-467,-455],[122,-358],[-292,-43],[-240,-238]],[[78981,56775],[-233,87],[-112,307],[-141,611]],[[85652,73393],[240,-697],[68,-383],[3,-681],[-105,-325],[-252,-113],[-222,-245],[-250,-51],[-31,322],[51,443],[-122,615],[206,99],[-190,506]],[[85048,72883],[17,54],[124,-21],[108,266],[197,29],[118,39],[40,143]],[[55575,75742],[52,132]],[[55627,75874],[66,43],[38,196],[50,33],[40,-84],[52,-36],[36,-94],[46,-28],[54,-110],[39,4],[-31,-144],[-33,-71],[9,-44]],[[55993,75539],[-62,-23],[-164,-91],[-13,-121],[-35,5]],[[63326,68290],[58,-261],[-25,-135],[89,-445]],[[63448,67449],[-196,-16],[-69,282],[-248,57]],[[79227,59013],[90,266],[12,500],[-224,515],[-18,583],[-211,480],[-210,40],[-56,-205],[-163,-17],[-83,104],[-293,-353],[-6,530],[68,623],[-188,27],[-16,355],[-120,182]],[[77809,62643],[59,218],[237,384]],[[78380,63852],[162,-466],[125,-537],[342,-5],[108,-515],[-178,-155],[-80,-212],[333,-353],[231,-699],[175,-520],[210,-411],[70,-418],[-50,-590]],[[59757,70130],[99,482],[138,416],[5,21]],[[59999,71049],[125,-31],[45,-231],[-151,-223],[-68,-323]],[[47857,53158],[-73,-5],[-286,282],[-252,449],[-237,324],[-187,381]],[[46822,54589],[66,189],[15,172],[126,320],[129,276]],[[54125,64088],[-197,-220],[-156,324],[-439,255]],[[52633,68486],[136,137],[24,250],[-30,244],[191,228],[86,189],[135,170],[16,454]],[[53191,70158],[326,-204],[117,51],[232,-98],[368,-264],[130,-526],[250,-114],[391,-248],[296,-293],[136,153],[133,272],[-65,452],[87,288],[200,277],[192,80],[375,-121],[95,-264],[104,-2],[88,-101],[276,-70],[68,-195]],[[56944,63578],[0,-1180],[-320,-2],[-3,-248]],[[56621,62148],[-1108,1131],[-1108,1132],[-280,-323]],[[72718,55024],[-42,-615],[-116,-168],[-242,-135],[-132,470],[-49,849],[126,959],[192,-328],[129,-416],[134,-616]],[[58049,33472],[96,-178],[-85,-288],[-47,-192],[-155,-93],[-51,-188],[-99,-59],[-209,454],[148,374],[151,232],[130,120],[121,-182]],[[56314,82678],[-23,150],[30,162],[-123,94],[-291,103]],[[55907,83187],[-59,497]],[[55848,83684],[318,181],[466,-38],[273,59],[39,-123],[148,-38],[267,-287]],[[56523,82432],[-67,182],[-142,64]],[[55848,83684],[10,445],[136,371],[262,202],[221,-442],[223,12],[53,453]],[[57579,84537],[134,-136],[24,-287],[89,-348]],[[47592,66920],[-42,0],[7,-317],[-172,-19],[-90,-134],[-126,0],[-100,76],[-234,-63],[-91,-460],[-86,-44],[-131,-745],[-386,-637],[-92,-816],[-114,-265],[-33,-213],[-625,-48],[-5,1]],[[45272,63236],[13,274],[106,161],[91,308],[-18,200],[96,417],[155,376],[93,95],[74,344],[6,315],[100,365],[185,216],[177,603],[5,8],[139,227],[259,65],[218,404],[140,158],[232,493],[-70,735],[106,508],[37,312],[179,399],[278,270],[206,244],[186,612],[87,362],[205,-2],[167,-251],[264,41],[288,-131],[121,-6]],[[57394,79070],[66,87],[185,58],[204,-184],[115,-22],[125,-159],[-20,-200],[101,-97],[40,-247],[97,-150],[-19,-88],[52,-60],[-74,-44],[-164,18],[-27,81],[-58,-47],[20,-106],[-76,-188],[-49,-203],[-70,-64]],[[57842,77455],[-50,270],[30,252],[-9,259],[-160,352],[-89,249],[-86,175],[-84,58]],[[63761,43212],[74,-251],[69,-390],[45,-711],[72,-276],[-28,-284],[-49,-174],[-94,347],[-53,-175],[53,-438],[-24,-250],[-77,-137],[-18,-500],[-109,-689],[-137,-814],[-172,-1120],[-106,-821],[-125,-685],[-226,-140],[-243,-250],[-160,151],[-220,211],[-77,312],[-18,524],[-98,471],[-26,425],[50,426],[128,102],[1,197],[133,447],[25,377],[-65,280],[-52,372],[-23,544],[97,331],[38,375],[138,22],[155,121],[103,107],[122,7],[158,337],[229,364],[83,297],[-38,253],[118,-71],[153,410],[6,356],[92,264],[96,-254]],[[23016,65864],[-107,-518],[-49,-426],[-20,-791],[-27,-289],[48,-322],[86,-288],[56,-458],[184,-440],[65,-337],[109,-291],[295,-157],[114,-247],[244,165],[212,60],[208,106],[175,101],[176,241],[67,345],[22,496],[48,173],[188,155],[294,137],[246,-21],[169,50],[66,-125],[-9,-285],[-149,-351],[-66,-360],[51,-103],[-42,-255],[-69,-461],[-71,152],[-58,-10]],[[24381,59170],[-314,636],[-144,191],[-226,155],[-156,-43],[-223,-223],[-140,-58],[-196,156],[-208,112],[-260,271],[-208,83],[-314,275],[-233,282],[-70,158],[-155,35],[-284,187],[-116,270],[-299,335],[-139,373],[-66,288],[93,57],[-29,169],[64,153],[1,204],[-93,266],[-25,235],[-94,298],[-244,587],[-280,462],[-135,368],[-238,241],[-51,145],[42,365],[-142,138],[-164,287],[-69,412],[-149,48],[-162,311],[-130,288],[-12,184],[-149,446],[-99,452],[5,227],[-201,234],[-93,-25],[-159,163],[-44,-240],[46,-284],[27,-444],[95,-243],[206,-407],[46,-139],[42,-42],[37,-203],[49,8],[56,-381],[85,-150],[59,-210],[174,-300],[92,-550],[83,-259],[77,-277],[15,-311],[134,-20],[112,-268],[100,-264],[-6,-106],[-117,-217],[-49,3],[-74,359],[-181,337],[-201,286],[-142,150],[9,432],[-42,320],[-132,183],[-191,264],[-37,-76],[-70,154],[-171,143],[-164,343],[20,44],[115,-33],[103,221],[10,266],[-214,422],[-163,163],[-102,369],[-103,388],[-129,472],[-113,531]],[[17464,69802],[316,46],[353,64],[-26,-116],[419,-287],[634,-416],[552,4],[221,0],[0,244],[481,0],[102,-210],[142,-186],[165,-260],[92,-309],[69,-325],[144,-178],[230,-177],[175,467],[227,11],[196,-236],[139,-404],[96,-346],[164,-337],[61,-414],[78,-277],[217,-184],[197,-130],[108,18]],[[55993,75539],[95,35],[128,9]],[[46619,59216],[93,107],[47,348],[88,14],[194,-165],[157,117],[107,-39],[42,131],[1114,9],[62,414],[-48,73],[-134,2550],[-134,2550],[425,10]],[[51185,61897],[1,-1361],[-152,-394],[-24,-364],[-247,-94],[-379,-51],[-102,-210],[-178,-23]],[[46801,57931],[13,184],[-24,229],[-104,166],[-54,338],[-13,368]],[[77375,56448],[-27,439],[86,452],[-94,350],[23,644],[-113,306],[-90,707],[-50,746],[-121,490],[-183,-297],[-315,-421],[-156,53],[-172,138],[96,732],[-58,554],[-218,681],[34,213],[-163,76],[-197,481]],[[77809,62643],[-159,-137],[-162,-256],[-196,-26],[-127,-639],[-117,-107],[134,-519],[177,-431],[113,-390],[-101,-514],[-96,-109],[66,-296],[185,-470],[32,-330],[-4,-274],[108,-539],[-152,-551],[-135,-607]],[[55380,75322],[-58,46],[-78,192],[-120,118]],[[55338,76294],[74,-101],[40,-82],[91,-63],[106,-123],[-22,-51]],[[74375,79706],[292,102],[530,509],[423,278],[242,-182],[289,-8],[186,-276],[277,-22],[402,-148],[270,411],[-113,348],[288,612],[311,-244],[252,-69],[327,-152],[53,-443],[394,-248],[263,109],[351,78],[279,-78],[272,-284],[168,-302],[258,6],[350,-96],[255,146],[366,98],[407,416],[166,-63],[146,-198],[331,49]],[[59599,43773],[209,48],[334,-166],[73,74],[193,16],[99,177],[167,-10],[303,230],[221,342]],[[61198,44484],[45,-265],[-11,-588],[34,-519],[11,-923],[49,-290],[-83,-422],[-108,-410],[-177,-366],[-254,-225],[-313,-287],[-313,-634],[-107,-108],[-194,-420],[-115,-136],[-23,-421],[132,-448],[54,-346],[4,-177],[49,29],[-8,-579],[-45,-275],[65,-101],[-41,-245],[-116,-211],[-229,-199],[-334,-320],[-122,-219],[24,-248],[71,-40],[-24,-311]],[[59119,34780],[-211,5]],[[58908,34785],[-24,261],[-41,265]],[[58843,35311],[-23,212],[49,659],[-72,419],[-133,832]],[[58664,37433],[292,671],[74,426],[42,53],[31,348],[-45,175],[12,442],[54,409],[0,748],[-145,190],[-132,43],[-60,146],[-128,125],[-232,-12],[-18,220]],[[58409,41417],[-26,421],[843,487]],[[59226,42325],[159,-284],[77,54],[110,-149],[16,-237],[-59,-274],[21,-417],[181,-365],[85,410],[120,124],[-24,760],[-116,427],[-100,191],[-97,-9],[-77,768],[77,449]],[[46619,59216],[-184,405],[-168,435],[-184,157],[-133,173],[-155,-6],[-135,-129],[-138,51],[-96,-189]],[[45426,60113],[-24,318],[78,291],[34,557],[-30,583],[-34,294],[28,295],[-72,281],[-146,255]],[[45260,62987],[60,197],[1088,-4],[-53,853],[68,304],[261,53],[-9,1512],[911,-31],[1,895]],[[59226,42325],[-147,153],[85,549],[87,205],[-53,490],[56,479],[47,160],[-71,501],[-131,264]],[[59099,45126],[273,-110],[55,-164],[95,-275],[77,-804]],[[78372,54256],[64,-56],[164,-356],[116,-396],[16,-398],[-29,-269],[27,-203],[20,-349],[98,-163],[109,-523],[-5,-199],[-197,-40],[-263,438],[-329,469],[-32,301],[-161,395],[-38,489],[-100,322],[30,431],[-61,250]],[[77801,54399],[48,105],[227,-258],[22,-304],[183,71],[91,243]],[[80461,51765],[204,-202],[214,110],[56,500],[119,112],[333,128],[199,467],[137,374]],[[82069,53798],[214,411],[140,462],[112,2],[143,-299],[13,-257],[183,-165],[231,-177],[-20,-232],[-186,-29],[50,-289],[-205,-201]],[[54540,33696],[-207,446],[-108,432],[-62,575],[-68,428],[-93,910],[-7,707],[-35,322],[-108,243],[-144,489],[-146,708],[-60,371],[-226,577],[-17,453]],[[56448,40227],[228,134],[180,-34],[109,-133],[2,-49]],[[55526,35946],[0,-2182],[-248,-302],[-149,-43],[-175,112],[-125,43],[-47,252],[-109,162],[-133,-292]],[[96049,38125],[228,-366],[144,-272],[-105,-142],[-153,160],[-199,266],[-179,313],[-184,416],[-38,201],[119,-9],[156,-201],[122,-200],[89,-166]],[[54125,64088],[68,-919],[104,-153],[4,-188],[116,-203],[-60,-254],[-107,-1199],[-15,-769],[-354,-557],[-120,-778],[115,-219],[0,-380],[178,-13],[-28,-279]],[[53939,57955],[-52,-13],[-188,647],[-65,24],[-217,-331],[-215,173],[-150,34],[-80,-83],[-163,18],[-164,-252],[-141,-14],[-337,305],[-131,-145],[-142,10],[-104,223],[-279,221],[-298,-70],[-72,-128],[-39,-340],[-80,-238],[-19,-527]],[[52361,53399],[-289,-213],[-105,31],[-107,-132],[-222,13],[-149,370],[-91,427],[-197,389],[-209,-7],[-245,1]],[[26191,57131],[-96,186],[-130,238],[-61,200],[-117,185],[-140,267],[31,91],[46,-88],[21,41]],[[26903,59440],[-24,-57],[-14,-132],[29,-216],[-64,-202],[-30,-237],[-9,-261],[15,-152],[7,-266],[-43,-58],[-26,-253],[19,-156],[-56,-151],[12,-159],[43,-97]],[[50920,80916],[143,162],[244,869],[380,248],[231,-17]],[[58639,91676],[-473,-237],[-224,-54]],[[55734,91409],[-172,-24],[-41,-389],[-523,95],[-74,-329],[-267,2],[-183,-421],[-278,-655],[-431,-831],[101,-202],[-97,-234],[-275,10],[-180,-554],[17,-784],[177,-300],[-92,-694],[-231,-405],[-122,-341]],[[53063,85353],[-187,363],[-548,-684],[-371,-138],[-384,301],[-99,635],[-88,1363],[256,381],[733,496],[549,609],[508,824],[668,1141],[465,444],[763,741],[610,259],[457,-31],[423,489],[506,-26],[499,118],[869,-433],[-358,-158],[305,-371]],[[56867,96577],[-620,-241],[-490,137],[191,152],[-167,189],[575,119],[110,-222],[401,-134]],[[55069,97669],[915,-440],[-699,-233],[-155,-435],[-243,-111],[-132,-490],[-335,-23],[-598,361],[252,210],[-416,170],[-541,499],[-216,463],[757,212],[152,-207],[396,8],[105,202],[408,20],[350,-206]],[[57068,98086],[545,-207],[-412,-318],[-806,-70],[-819,98],[-50,163],[-398,11],[-304,271],[858,165],[403,-142],[281,177],[702,-148]],[[98060,26404],[63,-244],[198,239],[80,-249],[0,-249],[-103,-274],[-182,-435],[-142,-238],[103,-284],[-214,-7],[-238,-223],[-75,-387],[-157,-597],[-219,-264],[-138,-169],[-256,13],[-180,194],[-302,42],[-46,217],[149,438],[349,583],[179,111],[200,225],[238,310],[167,306],[123,441],[106,149],[41,330],[195,273],[61,-251]],[[98502,29218],[202,-622],[5,403],[126,-161],[41,-447],[224,-192],[188,-48],[158,226],[141,-69],[-67,-524],[-85,-345],[-212,12],[-74,-179],[26,-254],[-41,-110],[-105,-319],[-138,-404],[-214,-236],[-48,155],[-116,85],[160,486],[-91,326],[-299,236],[8,214],[201,206],[47,455],[-13,382],[-113,396],[8,104],[-133,244],[-218,523],[-117,418],[104,46],[151,-328],[216,-153],[78,-526]],[[64752,60417],[-91,413],[-217,975]],[[64444,61805],[833,591],[185,1182],[-127,418]],[[65665,65306],[125,-404],[155,-214],[203,-78],[165,-107],[125,-339],[75,-196],[100,-75],[-1,-132],[-101,-352],[-44,-166],[-117,-189],[-104,-404],[-126,31],[-58,-141],[-44,-300],[34,-395],[-26,-72],[-128,2],[-174,-221],[-27,-288],[-63,-125],[-173,5],[-109,-149],[1,-238],[-134,-165],[-153,56],[-186,-199],[-128,-34]],[[65575,65974],[80,201],[35,-51],[-26,-244],[-37,-108]],[[68937,64577],[-203,150],[-83,424],[-215,450],[-512,-111],[-451,-11],[-391,-83]],[[28366,54848],[-93,170],[-59,319],[68,158],[-70,40],[-52,196],[-138,164],[-122,-38],[-56,-205],[-112,-149],[-61,-20],[-27,-123],[132,-321],[-75,-76],[-40,-87],[-130,-30],[-48,353],[-36,-101],[-92,35],[-56,238],[-114,39],[-72,69],[-119,-1],[-8,-128],[-32,89]],[[27070,56232],[100,-212],[-6,-126],[111,-26],[26,48],[77,-145],[136,42],[119,150],[168,119],[95,176],[153,-34],[-10,-58],[155,-21],[124,-102],[90,-177],[105,-164]],[[30452,39739],[-279,340],[-24,242],[-551,593],[-498,646],[-214,365],[-115,488],[46,170],[-236,775],[-274,1090],[-262,1177],[-114,269],[-87,435],[-216,386],[-198,239],[90,264],[-134,563],[86,414],[221,373]],[[85104,55551],[28,-392],[16,-332],[-94,-540],[-102,602],[-130,-300],[89,-435],[-79,-277],[-327,343],[-78,428],[84,280],[-176,280],[-87,-245],[-131,23],[-205,-330],[-46,173],[109,498],[175,166],[151,223],[98,-268],[212,162],[45,264],[196,15],[-16,457],[225,-280],[23,-297],[20,-218]],[[84439,56653],[-100,-195],[-87,-373],[-87,-175],[-171,409],[57,158],[70,165],[30,367],[153,35],[-44,-398],[205,570],[-26,-563]],[[82917,56084],[-369,-561],[136,414],[200,364],[167,409],[146,587],[49,-482],[-183,-325],[-146,-406]],[[83856,57606],[166,-183],[177,1],[-5,-247],[-129,-251],[-176,-178],[-10,275],[20,301],[-43,282]],[[84861,57766],[78,-660],[-214,157],[5,-199],[68,-364],[-132,-133],[-11,416],[-84,31],[-43,357],[163,-47],[-4,224],[-169,451],[266,-13],[77,-220]],[[83757,58301],[-74,-510],[-119,295],[-142,450],[238,-22],[97,-213]],[[83700,61512],[171,-168],[85,153],[26,-150],[-46,-245],[95,-423],[-73,-491],[-164,-196],[-43,-476],[62,-471],[147,-65],[123,70],[347,-328],[-27,-321],[91,-142],[-29,-272],[-216,290],[-103,310],[-71,-217],[-177,354],[-253,-87],[-138,130],[14,244],[87,151],[-83,136],[-36,-213],[-137,340],[-41,257],[-11,566],[112,-195],[29,925],[90,535],[169,-1]],[[93299,46550],[-78,-59],[-120,227],[-122,375],[-59,450],[38,57],[30,-175],[84,-134],[135,-375],[131,-200],[-39,-166]],[[92217,47343],[-146,-48],[-44,-166],[-152,-144],[-142,-138],[-148,1],[-228,171],[-158,165],[23,183],[249,-86],[152,46],[42,283],[40,15],[27,-314],[158,45],[78,202],[155,211],[-30,348],[166,11],[56,-97],[-5,-327],[-93,-361]],[[89166,49043],[482,-407],[513,-338],[192,-302],[154,-297],[43,-349],[462,-365],[68,-313],[-256,-64],[62,-393],[248,-388],[180,-627],[159,20],[-11,-262],[215,-100],[-84,-111],[295,-249],[-30,-171],[-184,-41],[-69,153],[-238,66],[-281,89],[-216,377],[-158,325],[-144,517],[-362,259],[-235,-169],[-170,-195],[35,-436],[-218,-203],[-155,99],[-288,25]],[[92538,47921],[-87,-157],[-52,348],[-65,229],[-126,193],[-158,252],[-200,174],[77,143],[150,-166],[94,-130],[117,-142],[111,-248],[106,-189],[33,-307]],[[53922,82340],[189,174],[434,273],[350,200],[277,-100],[21,-144],[268,-7]],[[55461,82736],[342,-67],[511,9]],[[56535,81053],[139,-515],[-29,-166],[-138,-69],[-252,-491],[71,-266],[-60,35]],[[56266,79581],[-264,227],[-200,-84],[-131,61],[-165,-127],[-140,210],[-114,-81],[-16,36]],[[31588,61519],[142,-52],[50,-118],[-71,-149],[-209,4],[-163,-21],[-16,253],[40,86],[227,-3]],[[86288,75628],[39,-104]],[[86327,75524],[-106,36],[-120,-200],[-83,-202],[10,-424],[-143,-130],[-50,-105],[-104,-174],[-185,-97],[-121,-159],[-9,-256],[-32,-65],[111,-96],[157,-259]],[[85048,72883],[-135,112],[-34,-111],[-81,-49],[-10,112],[-72,54],[-75,94],[76,260],[66,69],[-25,108],[71,319],[-18,96],[-163,65],[-131,158]],[[47929,72498],[-112,-153],[-146,83],[-143,-65],[42,462],[-26,363],[-124,55],[-67,224],[22,386],[111,215],[20,239],[58,355],[-6,250],[-56,212],[-12,200]],[[64113,65205],[-18,430],[75,310],[76,64],[84,-185],[5,-346],[-61,-348]],[[64274,65130],[-77,-42],[-84,117]],[[56308,78869],[120,127],[172,-65],[178,-3],[129,-144],[95,91],[205,56],[69,139],[118,0]],[[57842,77455],[124,-109],[131,95],[126,-101]],[[58223,77340],[6,-152],[-135,-128],[-84,56],[-78,-713]],[[56293,76715],[-51,103],[65,99],[-69,74],[-87,-133],[-162,172],[-22,244],[-169,139],[-31,188],[-151,232]],[[89901,80562],[280,-1046],[-411,195],[-171,-854],[271,-605],[-8,-413],[-211,356],[-182,-457],[-51,496],[31,575],[-32,638],[64,446],[13,790],[-163,581],[24,808],[257,271],[-110,274],[123,83],[73,-391],[96,-569],[-7,-581],[114,-597]],[[55461,82736],[63,260],[383,191]],[[99999,92429],[-305,-30],[-49,187],[-99645,247],[36,24],[235,-1],[402,-169],[-24,-81],[-286,-141],[-363,-36],[99999,0]],[[89889,93835],[-421,-4],[-569,66],[-49,31],[263,234],[348,54],[394,-226],[34,-155]],[[91869,94941],[-321,-234],[-444,53],[-516,233],[66,192],[518,-89],[697,-155]],[[90301,95224],[-219,-439],[-1023,16],[-461,-139],[-550,384],[149,406],[366,111],[734,-26],[1004,-313]],[[65981,92363],[-164,-52],[-907,77],[-74,262],[-503,158],[-40,320],[284,126],[-10,323],[551,503],[-255,73],[665,518],[-75,268],[621,312],[917,380],[925,110],[475,220],[541,76],[193,-233],[-187,-184],[-984,-293],[-848,-282],[-863,-562],[-414,-577],[-435,-568],[56,-491],[531,-484]],[[63639,77993],[-127,-350],[-269,-97],[-276,-610],[252,-561],[-27,-398],[303,-696]],[[61098,76242],[-354,499],[-317,223],[-240,347],[202,95],[231,494],[-156,234],[410,241],[-8,129],[-249,-95]],[[60617,78409],[9,262],[143,165],[269,43],[44,197],[-62,326],[113,310],[-3,173],[-410,192],[-162,-6],[-172,277],[-213,-94],[-352,208],[6,116],[-99,256],[-222,29],[-23,183],[70,120],[-178,334],[-288,-57],[-84,30],[-70,-134],[-104,23]],[[57772,85719],[316,327],[-291,280]],[[58639,91676],[286,206],[456,-358],[761,-140],[1050,-668],[213,-281],[18,-393],[-308,-311],[-454,-157],[-1240,449],[-204,-75],[453,-433],[18,-274],[18,-604],[358,-180],[217,-153],[36,286],[-168,254],[177,224],[672,-368],[233,144],[-186,433],[647,578],[256,-34],[260,-206],[161,406],[-231,352],[136,353],[-204,367],[777,-190],[158,-331],[-351,-73],[1,-328],[219,-203],[429,128],[68,377],[580,282],[970,507],[209,-29],[-273,-359],[344,-61],[199,202],[521,16],[412,245],[317,-356],[315,391],[-291,343],[145,195],[820,-179],[385,-185],[1006,-675],[186,309],[-282,313],[-8,125],[-335,58],[92,280],[-149,461],[-8,189],[512,535],[183,537],[206,116],[736,-156],[57,-328],[-263,-479],[173,-189],[89,-413],[-63,-809],[307,-362],[-120,-395],[-544,-839],[318,-87],[110,213],[306,151],[74,293],[240,281],[-162,336],[130,390],[-304,49],[-67,328],[222,593],[-361,482],[497,398],[-64,421],[139,13],[145,-328],[-109,-570],[297,-108],[-127,426],[465,233],[577,31],[513,-337],[-247,492],[-28,630],[483,119],[669,-26],[602,77],[-226,309],[321,388],[319,16],[540,293],[734,79],[93,162],[729,55],[227,-133],[624,314],[510,-10],[77,255],[265,252],[656,242],[476,-191],[-378,-146],[629,-90],[75,-292],[254,143],[812,-7],[626,-289],[223,-221],[-69,-307],[-307,-175],[-730,-328],[-209,-175],[345,-83],[410,-149],[251,112],[141,-379],[122,153],[444,93],[892,-97],[67,-276],[1162,-88],[15,451],[590,-104],[443,4],[449,-312],[128,-378],[-165,-247],[349,-465],[437,-240],[268,620],[446,-266],[473,159],[538,-182],[204,166],[455,-83],[-201,549],[367,256],[2509,-384],[236,-351],[727,-451],[1122,112],[553,-98],[231,-244],[-33,-432],[342,-168],[372,121],[492,15],[525,-116],[526,66],[484,-526],[344,189],[-224,378],[123,262],[886,-165],[578,36],[799,-282],[-99610,-258],[681,-451],[728,-588],[-24,-367],[187,-147],[-64,429],[754,-88],[544,-553],[-276,-257],[-455,-61],[-7,-578],[-111,-122],[-260,17],[-212,206],[-369,172],[-62,257],[-283,96],[-315,-76],[-151,207],[60,219],[-333,-140],[126,-278],[-158,-251],[99997,-3],[-357,-260],[-360,44],[250,-315],[166,-487],[128,-159],[32,-244],[-71,-157],[-518,129],[-777,-445],[-247,-69],[-425,-415],[-403,-362],[-102,-269],[-397,409],[-724,-464],[-126,219],[-268,-253],[-371,81],[-90,-388],[-333,-572],[10,-239],[316,-132],[-37,-860],[-258,-22],[-119,-494],[116,-255],[-486,-302],[-96,-674],[-415,-144],[-83,-600],[-400,-551],[-103,407],[-119,862],[-155,1313],[134,819],[234,353],[14,276],[432,132],[496,744],[479,608],[499,471],[223,833],[-337,-50],[-167,-487],[-705,-649],[-227,727],[-717,-201],[-696,-990],[230,-362],[-620,-154],[-430,-61],[20,427],[-431,90],[-344,-291],[-850,102],[-914,-175],[-899,-1153],[-1065,-1394],[438,-74],[136,-370],[270,-132],[178,295],[305,-38],[401,-650],[9,-503],[-217,-590],[-23,-705],[-126,-945],[-418,-855],[-94,-409],[-377,-688],[-374,-682],[-179,-349],[-370,-346],[-175,-8],[-175,287],[-373,-432],[-43,-197]],[[79187,96845],[-1566,-228],[507,776],[229,66],[208,-38],[704,-336],[-82,-240]],[[64204,98169],[-373,-78],[-250,-45],[-39,-97],[-324,-98],[-301,140],[158,185],[-618,18],[542,107],[422,8],[57,-160],[159,142],[262,97],[412,-129],[-107,-90]],[[77760,97184],[-606,-73],[-773,170],[-462,226],[-213,423],[-379,117],[722,404],[600,133],[540,-297],[640,-572],[-69,-531]],[[58449,49909],[110,-333],[-16,-348],[-80,-74]],[[58216,49787],[67,-60],[166,182]],[[45260,62987],[12,249]],[[61883,60238],[-37,252],[-83,178],[-22,236],[-143,212],[-148,495],[-79,482],[-192,406],[-124,97],[-184,563],[-32,411],[12,350],[-159,655],[-130,231],[-150,122],[-92,339],[15,133],[-77,306],[-81,132],[-108,440],[-170,476],[-141,406],[-139,-3],[44,325],[12,206],[34,236]],[[63448,67449],[109,-510],[137,-135],[47,-207],[190,-249],[16,-243],[-27,-197],[35,-199],[80,-165],[37,-194],[41,-145]],[[64274,65130],[53,-226]],[[64444,61805],[-801,-226],[-259,-266],[-199,-620],[-130,-99],[-70,197],[-106,-30],[-269,60],[-50,59],[-321,-14],[-75,-53],[-114,153],[-74,-290],[28,-249],[-121,-189]],[[59434,56171],[-39,12],[5,294],[-33,203],[-143,233],[-34,426],[34,436],[-129,41],[-19,-132],[-167,-30],[67,-173],[23,-355],[-152,-324],[-138,-426],[-144,-61],[-233,345],[-105,-122],[-29,-172],[-143,-112],[-9,-122],[-277,0],[-38,122],[-200,20],[-100,-101],[-77,51],[-143,344],[-48,163],[-200,-81],[-76,-274],[-72,-528],[-95,-111],[-85,-65]],[[56635,55672],[-23,28]],[[56351,57163],[3,143],[-102,174],[-3,343],[-58,228],[-98,-34],[28,217],[72,246],[-32,245],[92,181],[-58,138],[73,365],[127,435],[240,-41],[-14,2345]],[[60240,63578],[90,-580],[-61,-107],[40,-608],[102,-706],[106,-145],[152,-219]],[[59433,56242],[1,-71]],[[59434,56171],[3,-460]],[[59445,53091],[-171,-272],[-195,1],[-224,-138],[-176,132],[-115,-161]],[[56824,55442],[-189,230]],[[45357,58612],[-115,460],[-138,210],[122,112],[134,415],[66,304]],[[45367,57897],[-46,453]],[[95032,44386],[78,-203],[-194,4],[-106,363],[166,-142],[56,-22]],[[94680,44747],[-108,-14],[-170,60],[-58,91],[17,235],[183,-93],[91,-124],[45,-155]],[[94910,44908],[-42,-109],[-206,512],[-57,353],[94,0],[100,-473],[111,-283]],[[94409,45654],[12,-119],[-218,251],[-152,212],[-104,197],[41,60],[128,-142],[228,-272],[65,-187]],[[93760,46238],[-56,-33],[-121,134],[-114,243],[14,99],[166,-250],[111,-193]],[[46822,54589],[-75,44],[-200,238],[-144,316],[-49,216],[-34,437]],[[25613,58487],[-31,-139],[-161,9],[-100,57],[-115,117],[-154,37],[-79,127]],[[61984,57352],[91,-109],[54,-245],[125,-247],[138,-2],[262,151],[302,70],[245,184],[138,39],[99,108],[158,20]],[[63596,57321],[-2,-9],[-1,-244],[0,-596],[0,-308],[-125,-363],[-194,-493]],[[63596,57321],[89,12],[128,88],[147,59],[132,202],[105,2],[6,-163],[-25,-344],[1,-310],[-59,-214],[-78,-639],[-134,-659],[-172,-755],[-238,-866],[-237,-661],[-327,-806],[-278,-479],[-415,-586],[-259,-450],[-304,-715],[-64,-312],[-63,-140]],[[34125,54109],[333,-119],[30,107],[225,43],[298,-159]],[[34889,53069],[109,-351],[-49,-254],[-24,-270],[-71,-248]],[[56266,79581],[-77,-154],[-55,-238]],[[53809,77462],[62,54]],[[56639,89578],[-478,-167],[-269,-413],[43,-361],[-441,-475],[-537,-509],[-202,-832],[198,-416],[265,-328],[-255,-666],[-289,-138],[-106,-992],[-157,-554],[-337,57],[-158,-468],[-321,-27],[-89,558],[-232,671],[-211,835]],[[58908,34785],[-56,-263],[-163,-63],[-166,320],[-2,204],[76,222],[26,172],[80,42],[140,-108]],[[59999,71049],[-26,452],[68,243]],[[60041,71744],[74,129],[75,130],[15,329],[91,-115],[306,165],[147,-112],[229,2],[320,222],[149,-10],[316,92]],[[50518,54209],[-224,-126]],[[78495,57780],[-249,271],[-238,-11],[41,464],[-245,-3],[-22,-650],[-150,-863],[-90,-522],[19,-428],[181,-18],[113,-539],[50,-512],[155,-338],[168,-69],[144,-306]],[[77801,54399],[-110,227],[-47,292],[-148,334],[-135,280],[-45,-347],[-53,328],[30,369],[82,566]],[[68841,72526],[156,598],[-60,440],[-204,140],[72,261],[232,-28],[132,326],[89,380],[371,137],[-58,-274],[40,-164],[114,15]],[[64978,72558],[-52,417],[40,618],[-216,200],[71,405],[-184,34],[61,498],[262,-145],[244,189],[-202,355],[-80,338],[-224,-151],[-28,-433],[-87,383]],[[65546,74986],[313,8],[-45,297],[237,204],[234,343],[374,-312],[30,-471],[106,-121],[301,27],[93,-108],[137,-609],[317,-408],[181,-278],[291,-289],[369,-253],[-7,-362]],[[84713,45326],[32,139],[239,133],[194,20],[87,74],[105,-74],[-102,-160],[-289,-258],[-233,-170]],[[32866,56937],[160,77],[58,-21],[-11,-440],[-232,-65],[-50,53],[81,163],[-6,233]],[[52339,72408],[302,239],[195,-71],[-9,-299],[236,217],[20,-113],[-139,-290],[-2,-273],[96,-147],[-36,-511],[-183,-297],[53,-322],[143,-10],[70,-281],[106,-92]],[[60041,71744],[-102,268],[105,222],[-169,-51],[-233,136],[-191,-340],[-421,-66],[-225,317],[-300,20],[-64,-245],[-192,-70],[-268,314],[-303,-11],[-165,588],[-203,328],[135,459],[-176,283],[308,565],[428,23],[117,449],[529,-78],[334,383],[324,167],[459,13],[485,-417],[399,-228],[323,91],[239,-53],[328,309]],[[57776,75399],[33,-228],[243,-190],[-51,-145],[-330,-33],[-118,-182],[-232,-319],[-87,276],[3,121]],[[83826,64992],[-167,-947],[-119,-485],[-146,499],[-32,438],[163,581],[223,447],[127,-176],[-49,-357]],[[60889,47817],[-128,-728],[16,-335],[178,-216],[8,-153],[-76,-357],[16,-180],[-18,-282],[97,-370],[115,-583],[101,-129]],[[59099,45126],[-157,177],[-177,100],[-111,99],[-116,150]],[[58388,46397],[-161,331],[-55,342]],[[58449,49909],[98,71],[304,-7],[566,45]],[[60617,78409],[-222,-48],[-185,-191],[-260,-31],[-239,-220],[16,-368],[136,-142],[284,35],[-55,-210],[-304,-103],[-377,-342],[-154,121],[61,277],[-304,173],[50,113],[265,197],[-80,135],[-432,149],[-19,221],[-257,-73],[-103,-325],[-215,-437]],[[35174,30629],[-121,-372],[-313,-328],[-205,118],[-151,-63],[-256,253],[-189,-19],[-169,327]],[[6794,61855],[-41,-99],[-69,84],[8,165],[-46,216],[14,65],[48,97],[-19,116],[16,55],[21,-11],[107,-100],[49,-51],[45,-79],[71,-207],[-7,-33],[-108,-126],[-89,-92]],[[6645,62777],[-94,-43],[-47,125],[-32,48],[-3,37],[27,50],[99,-56],[73,-90],[-23,-71]],[[6456,63091],[-9,-63],[-149,17],[21,72],[137,-26]],[[6207,63177],[-15,-34],[-19,8],[-97,21],[-35,133],[-11,24],[74,82],[23,-38],[80,-196]],[[5737,63567],[-33,-58],[-93,107],[14,43],[43,58],[64,-12],[5,-138]],[[31350,77248],[48,-194],[-296,-286],[-286,-204],[-293,-175],[-147,-351],[-47,-133],[-3,-313],[92,-313],[115,-15],[-29,216],[83,-131],[-22,-169],[-188,-96],[-133,11],[-205,-103],[-121,-29],[-162,-29],[-231,-171],[408,111],[82,-112],[-389,-177],[-177,-1],[8,72],[-84,-164],[82,-27],[-60,-424],[-203,-455],[-20,152],[-61,30],[-91,148],[57,-318],[69,-105],[5,-223],[-89,-230],[-157,-472],[-25,24],[86,402],[-142,225],[-33,491],[-53,-255],[59,-375],[-183,93],[191,-191],[12,-562],[79,-41],[29,-204],[39,-591],[-176,-439],[-288,-175],[-182,-346],[-139,-38],[-141,-217],[-39,-199],[-305,-383],[-157,-281],[-131,-351],[-43,-419],[50,-411],[92,-505],[124,-418],[1,-256],[132,-685],[-9,-398],[-12,-230],[-69,-361],[-83,-75],[-137,72],[-44,259],[-105,136],[-148,508],[-129,452],[-42,231],[57,393],[-77,325],[-217,494],[-108,90],[-281,-268],[-49,30],[-135,275],[-174,147],[-314,-75],[-247,66],[-212,-41],[-114,-92],[50,-157],[-5,-240],[59,-117],[-53,-77],[-103,87],[-104,-112],[-202,18],[-207,312],[-242,-73],[-202,137],[-173,-42],[-234,-138],[-253,-438],[-276,-255],[-152,-282],[-63,-266],[-3,-407],[14,-284],[52,-201]],[[17464,69802],[-46,302],[-180,340],[-130,71],[-30,169],[-156,30],[-100,159],[-258,59],[-71,95],[-33,324],[-270,594],[-231,821],[10,137],[-123,195],[-215,495],[-38,482],[-148,323],[61,489],[-10,507],[-89,453],[109,557],[34,536],[33,536],[-50,792],[-88,506],[-80,274],[33,115],[402,-200],[148,-558],[69,156],[-45,484],[-94,485]],[[7498,84325],[-277,-225],[-142,152],[-43,277],[252,210],[148,90],[185,-40],[117,-183],[-240,-281]],[[4006,85976],[-171,-92],[-182,110],[-168,161],[274,101],[220,-54],[27,-226]],[[2297,88264],[171,-113],[173,61],[225,-156],[276,-79],[-23,-64],[-211,-125],[-211,128],[-106,107],[-245,-34],[-66,52],[17,223]],[[13740,82958],[-153,223],[-245,188],[-78,515],[-358,478],[-150,558],[-267,38],[-441,15],[-326,170],[-574,613],[-266,112],[-486,211],[-385,-51],[-546,272],[-330,252],[-309,-125],[58,-411],[-154,-38],[-321,-123],[-245,-199],[-308,-126],[-39,348],[125,580],[295,182],[-76,148],[-354,-329],[-190,-394],[-400,-420],[203,-287],[-262,-424],[-299,-248],[-278,-180],[-69,-261],[-434,-305],[-87,-278],[-325,-252],[-191,45],[-259,-165],[-282,-201],[-231,-197],[-477,-169],[-43,99],[304,276],[271,182],[296,324],[345,66],[137,243],[385,353],[62,119],[205,208],[48,448],[141,349],[-320,-179],[-90,102],[-150,-215],[-181,300],[-75,-212],[-104,294],[-278,-236],[-170,0],[-24,352],[50,216],[-179,211],[-361,-113],[-235,277],[-190,142],[-1,334],[-214,252],[108,340],[226,330],[99,303],[225,43],[191,-94],[224,285],[201,-51],[212,183],[-52,270],[-155,106],[205,228],[-170,-7],[-295,-128],[-85,-131],[-219,131],[-392,-67],[-407,142],[-117,238],[-351,343],[390,247],[620,289],[228,0],[-38,-296],[586,23],[-225,366],[-342,225],[-197,296],[-267,252],[-381,187],[155,309],[493,19],[350,270],[66,287],[284,281],[271,68],[526,262],[256,-40],[427,315],[421,-124],[201,-266],[123,114],[469,-35],[-16,-136],[425,-101],[283,59],[585,-186],[534,-56],[214,-77],[370,96],[421,-177],[302,-83]],[[30185,57537],[-8,-139],[-163,-69],[91,-268],[-3,-309],[-123,-344],[105,-468],[120,38],[62,427],[-86,208],[-14,447],[346,241],[-38,278],[97,186],[100,-415],[195,-9],[180,-330],[11,-195],[249,-6],[297,61],[159,-264],[213,-74],[155,185],[4,149],[344,35],[333,9],[-236,-175],[95,-279],[222,-44],[210,-291],[45,-473],[144,13],[109,-139]],[[80013,63313],[-371,-505],[-231,-558],[-61,-410],[212,-623],[260,-772],[252,-365],[169,-475],[127,-1093],[-37,-1039],[-232,-389],[-318,-381],[-227,-492],[-346,-550],[-101,378],[78,401],[-206,335]],[[96623,40851],[-92,-78],[-93,259],[10,158],[175,-339]],[[96418,41756],[45,-476],[-75,74],[-58,-32],[-39,163],[-6,453],[133,-182]],[[64752,60417],[-201,-158],[-54,-263],[-6,-201],[-277,-249],[-444,-276],[-249,-417],[-122,-33],[-83,35],[-163,-245],[-177,-114],[-233,-30],[-70,-34],[-61,-156],[-73,-43],[-43,-150],[-137,13],[-89,-80],[-192,30],[-72,345],[8,323],[-46,174],[-54,437],[-80,243],[56,29],[-29,270],[34,114],[-12,257]],[[58175,37528],[113,-7],[134,-100],[94,71],[148,-59]],[[59119,34780],[-70,-430],[-32,-491],[-72,-267],[-190,-298],[-54,-86],[-118,-300],[-77,-303],[-158,-424],[-314,-609],[-196,-355],[-210,-269],[-290,-229],[-141,-31],[-36,-164],[-169,88],[-138,-113],[-301,114],[-168,-72],[-115,31],[-286,-233],[-238,-94],[-171,-223],[-127,-14],[-117,210],[-94,11],[-120,264],[-13,-82],[-37,159],[2,346],[-90,396],[89,108],[-7,453],[-182,553],[-139,501],[-1,1],[-199,768]],[[58409,41417],[-210,-81],[-159,-235],[-33,-205],[-100,-46],[-241,-486],[-154,-383],[-94,-13],[-90,68],[-311,65]]],"bbox":[-180,-85.60903777459767,180,83.64513000000001],"transform":{"scale":[0.0036000360003600037,0.00169255860333201],"translate":[-180,-85.60903777459767]}}

/***/ }),
/* 374 */
/***/ (function(module, exports) {

module.exports = [{"name":"Kosovo","code":"-99","id":"-99"},{"name":"Somaliland","code":"-99","id":"-99"},{"name":"Northern Cyprus","code":"-99","id":"-99"},{"name":"Afghanistan","code":"AFG","id":"4"},{"name":"Angola","code":"AGO","id":"24"},{"name":"Albania","code":"ALB","id":"8"},{"name":"United Arab Emirates","code":"ARE","id":"784"},{"name":"Argentina","code":"ARG","id":"32"},{"name":"Armenia","code":"ARM","id":"51"},{"name":"Antarctica","code":"ATA","id":"10"},{"name":"France","code":"ATF","id":"260"},{"name":"Australia","code":"AUS","id":"36"},{"name":"Austria","code":"AUT","id":"40"},{"name":"Azerbaijan","code":"AZE","id":"31"},{"name":"Burundi","code":"BDI","id":"108"},{"name":"Belgium","code":"BEL","id":"56"},{"name":"Benin","code":"BEN","id":"204"},{"name":"Burkina Faso","code":"BFA","id":"854"},{"name":"Bangladesh","code":"BGD","id":"50"},{"name":"Bulgaria","code":"BGR","id":"100"},{"name":"The Bahamas","code":"BHS","id":"44"},{"name":"Bosnia and Herzegovina","code":"BIH","id":"70"},{"name":"Belarus","code":"BLR","id":"112"},{"name":"Belize","code":"BLZ","id":"84"},{"name":"Bolivia","code":"BOL","id":"68"},{"name":"Brazil","code":"BRA","id":"76"},{"name":"Brunei","code":"BRN","id":"96"},{"name":"Bhutan","code":"BTN","id":"64"},{"name":"Botswana","code":"BWA","id":"72"},{"name":"Central African Republic","code":"CAF","id":"140"},{"name":"Canada","code":"CAN","id":"124"},{"name":"Switzerland","code":"CHE","id":"756"},{"name":"Chile","code":"CHL","id":"152"},{"name":"China","code":"CHN","id":"156"},{"name":"Ivory Coast","code":"CIV","id":"384"},{"name":"Cameroon","code":"CMR","id":"120"},{"name":"Democratic Republic of the Congo","code":"COD","id":"180"},{"name":"Republic of Congo","code":"COG","id":"178"},{"name":"Colombia","code":"COL","id":"170"},{"name":"Costa Rica","code":"CRI","id":"188"},{"name":"Cuba","code":"CUB","id":"192"},{"name":"Cyprus","code":"CYP","id":"196"},{"name":"Czech Republic","code":"CZE","id":"203"},{"name":"Germany","code":"DEU","id":"276"},{"name":"Djibouti","code":"DJI","id":"262"},{"name":"Denmark","code":"DNK","id":"208"},{"name":"Dominican Republic","code":"DOM","id":"214"},{"name":"Algeria","code":"DZA","id":"12"},{"name":"Ecuador","code":"ECU","id":"218"},{"name":"Egypt","code":"EGY","id":"818"},{"name":"Eritrea","code":"ERI","id":"232"},{"name":"Western Sahara","code":"ESH","id":"732"},{"name":"Spain","code":"ESP","id":"724"},{"name":"Estonia","code":"EST","id":"233"},{"name":"Ethiopia","code":"ETH","id":"231"},{"name":"Finland","code":"FIN","id":"246"},{"name":"Fiji","code":"FJI","id":"242"},{"name":"United Kingdom","code":"FLK","id":"238"},{"name":"France","code":"FRA","id":"250"},{"name":"Gabon","code":"GAB","id":"266"},{"name":"United Kingdom","code":"GBR","id":"826"},{"name":"Georgia","code":"GEO","id":"268"},{"name":"Ghana","code":"GHA","id":"288"},{"name":"Guinea","code":"GIN","id":"324"},{"name":"Gambia","code":"GMB","id":"270"},{"name":"Guinea Bissau","code":"GNB","id":"624"},{"name":"Equatorial Guinea","code":"GNQ","id":"226"},{"name":"Greece","code":"GRC","id":"300"},{"name":"Denmark","code":"GRL","id":"304"},{"name":"Guatemala","code":"GTM","id":"320"},{"name":"Guyana","code":"GUY","id":"328"},{"name":"Honduras","code":"HND","id":"340"},{"name":"Croatia","code":"HRV","id":"191"},{"name":"Haiti","code":"HTI","id":"332"},{"name":"Hungary","code":"HUN","id":"348"},{"name":"Indonesia","code":"IDN","id":"360"},{"name":"India","code":"IND","id":"356"},{"name":"Ireland","code":"IRL","id":"372"},{"name":"Iran","code":"IRN","id":"364"},{"name":"Iraq","code":"IRQ","id":"368"},{"name":"Iceland","code":"ISL","id":"352"},{"name":"Israel","code":"ISR","id":"376"},{"name":"Italy","code":"ITA","id":"380"},{"name":"Jamaica","code":"JAM","id":"388"},{"name":"Jordan","code":"JOR","id":"400"},{"name":"Japan","code":"JPN","id":"392"},{"name":"Kazakhstan","code":"KAZ","id":"398"},{"name":"Kenya","code":"KEN","id":"404"},{"name":"Kyrgyzstan","code":"KGZ","id":"417"},{"name":"Cambodia","code":"KHM","id":"116"},{"name":"South Korea","code":"KOR","id":"410"},{"name":"Kuwait","code":"KWT","id":"414"},{"name":"Laos","code":"LAO","id":"418"},{"name":"Lebanon","code":"LBN","id":"422"},{"name":"Liberia","code":"LBR","id":"430"},{"name":"Libya","code":"LBY","id":"434"},{"name":"Sri Lanka","code":"LKA","id":"144"},{"name":"Lesotho","code":"LSO","id":"426"},{"name":"Lithuania","code":"LTU","id":"440"},{"name":"Luxembourg","code":"LUX","id":"442"},{"name":"Latvia","code":"LVA","id":"428"},{"name":"Morocco","code":"MAR","id":"504"},{"name":"Moldova","code":"MDA","id":"498"},{"name":"Madagascar","code":"MDG","id":"450"},{"name":"Mexico","code":"MEX","id":"484"},{"name":"Macedonia","code":"MKD","id":"807"},{"name":"Mali","code":"MLI","id":"466"},{"name":"Myanmar","code":"MMR","id":"104"},{"name":"Montenegro","code":"MNE","id":"499"},{"name":"Mongolia","code":"MNG","id":"496"},{"name":"Mozambique","code":"MOZ","id":"508"},{"name":"Mauritania","code":"MRT","id":"478"},{"name":"Malawi","code":"MWI","id":"454"},{"name":"Malaysia","code":"MYS","id":"458"},{"name":"Namibia","code":"NAM","id":"516"},{"name":"France","code":"NCL","id":"540"},{"name":"Niger","code":"NER","id":"562"},{"name":"Nigeria","code":"NGA","id":"566"},{"name":"Nicaragua","code":"NIC","id":"558"},{"name":"Netherlands","code":"NLD","id":"528"},{"name":"Norway","code":"NOR","id":"578"},{"name":"Nepal","code":"NPL","id":"524"},{"name":"New Zealand","code":"NZL","id":"554"},{"name":"Oman","code":"OMN","id":"512"},{"name":"Pakistan","code":"PAK","id":"586"},{"name":"Panama","code":"PAN","id":"591"},{"name":"Peru","code":"PER","id":"604"},{"name":"Philippines","code":"PHL","id":"608"},{"name":"Papua New Guinea","code":"PNG","id":"598"},{"name":"Poland","code":"POL","id":"616"},{"name":"United States of America","code":"PRI","id":"630"},{"name":"North Korea","code":"PRK","id":"408"},{"name":"Portugal","code":"PRT","id":"620"},{"name":"Paraguay","code":"PRY","id":"600"},{"name":"Israel","code":"PSE","id":"275"},{"name":"Qatar","code":"QAT","id":"634"},{"name":"Romania","code":"ROU","id":"642"},{"name":"Russia","code":"RUS","id":"643"},{"name":"Rwanda","code":"RWA","id":"646"},{"name":"Saudi Arabia","code":"SAU","id":"682"},{"name":"Sudan","code":"SDN","id":"729"},{"name":"Senegal","code":"SEN","id":"686"},{"name":"Solomon Islands","code":"SLB","id":"90"},{"name":"Sierra Leone","code":"SLE","id":"694"},{"name":"El Salvador","code":"SLV","id":"222"},{"name":"Somalia","code":"SOM","id":"706"},{"name":"Republic of Serbia","code":"SRB","id":"688"},{"name":"South Sudan","code":"SSD","id":"728"},{"name":"Suriname","code":"SUR","id":"740"},{"name":"Slovakia","code":"SVK","id":"703"},{"name":"Slovenia","code":"SVN","id":"705"},{"name":"Sweden","code":"SWE","id":"752"},{"name":"Swaziland","code":"SWZ","id":"748"},{"name":"Syria","code":"SYR","id":"760"},{"name":"Chad","code":"TCD","id":"148"},{"name":"Togo","code":"TGO","id":"768"},{"name":"Thailand","code":"THA","id":"764"},{"name":"Tajikistan","code":"TJK","id":"762"},{"name":"Turkmenistan","code":"TKM","id":"795"},{"name":"East Timor","code":"TLS","id":"626"},{"name":"Trinidad and Tobago","code":"TTO","id":"780"},{"name":"Tunisia","code":"TUN","id":"788"},{"name":"Turkey","code":"TUR","id":"792"},{"name":"Taiwan","code":"TWN","id":"158"},{"name":"United Republic of Tanzania","code":"TZA","id":"834"},{"name":"Uganda","code":"UGA","id":"800"},{"name":"Ukraine","code":"UKR","id":"804"},{"name":"Uruguay","code":"URY","id":"858"},{"name":"United States of America","code":"USA","id":"840"},{"name":"Uzbekistan","code":"UZB","id":"860"},{"name":"Venezuela","code":"VEN","id":"862"},{"name":"Vietnam","code":"VNM","id":"704"},{"name":"Vanuatu","code":"VUT","id":"548"},{"name":"Yemen","code":"YEM","id":"887"},{"name":"South Africa","code":"ZAF","id":"710"},{"name":"Zambia","code":"ZMB","id":"894"},{"name":"Zimbabwe","code":"ZWE","id":"716"}]

/***/ }),
/* 375 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var noop = {value: function() {}};

function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || (t in _)) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}

function Dispatch(_) {
  this._ = _;
}

function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return {type: t, name: name};
  });
}

Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._,
        T = parseTypenames(typename + "", _),
        t,
        i = -1,
        n = T.length;

    // If no callback was specified, return the callback of the given type and name.
    if (arguments.length < 2) {
      while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
      return;
    }

    // If a type was specified, set the callback for the given type and name.
    // Otherwise, if a null callback was specified, remove callbacks of the given name.
    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
      else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
    }

    return this;
  },
  copy: function() {
    var copy = {}, _ = this._;
    for (var t in _) copy[t] = _[t].slice();
    return new Dispatch(copy);
  },
  call: function(type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  },
  apply: function(type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  }
};

function get(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}

function set(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null) type.push({name: name, value: callback});
  return type;
}

/* harmony default export */ __webpack_exports__["a"] = (dispatch);


/***/ }),
/* 376 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__type__ = __webpack_require__(115);


/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_0__type__["a" /* default */])("text/html", function(xhr) {
  return document.createRange().createContextualFragment(xhr.responseText);
}));


/***/ }),
/* 377 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__type__ = __webpack_require__(115);


/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_0__type__["a" /* default */])("application/json", function(xhr) {
  return JSON.parse(xhr.responseText);
}));


/***/ }),
/* 378 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__type__ = __webpack_require__(115);


/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_0__type__["a" /* default */])("text/plain", function(xhr) {
  return xhr.responseText;
}));


/***/ }),
/* 379 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__type__ = __webpack_require__(115);


/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_0__type__["a" /* default */])("application/xml", function(xhr) {
  var xml = xhr.responseXML;
  if (!xml) throw new Error("parse error");
  return xml;
}));


/***/ }),
/* 380 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_dsv__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dsv__ = __webpack_require__(328);



/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__dsv__["a" /* default */])("text/csv", __WEBPACK_IMPORTED_MODULE_0_d3_dsv__["a" /* csvParse */]));


/***/ }),
/* 381 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return csvParse; });
/* unused harmony export csvParseRows */
/* unused harmony export csvFormat */
/* unused harmony export csvFormatRows */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dsv__ = __webpack_require__(303);


var csv = Object(__WEBPACK_IMPORTED_MODULE_0__dsv__["a" /* default */])(",");

var csvParse = csv.parse;
var csvParseRows = csv.parseRows;
var csvFormat = csv.format;
var csvFormatRows = csv.formatRows;


/***/ }),
/* 382 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tsvParse; });
/* unused harmony export tsvParseRows */
/* unused harmony export tsvFormat */
/* unused harmony export tsvFormatRows */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dsv__ = __webpack_require__(303);


var tsv = Object(__WEBPACK_IMPORTED_MODULE_0__dsv__["a" /* default */])("\t");

var tsvParse = tsv.parse;
var tsvParseRows = tsv.parseRows;
var tsvFormat = tsv.format;
var tsvFormatRows = tsv.formatRows;


/***/ }),
/* 383 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_dsv__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dsv__ = __webpack_require__(328);



/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1__dsv__["a" /* default */])("text/tab-separated-values", __WEBPACK_IMPORTED_MODULE_0_d3_dsv__["b" /* tsvParse */]));


/***/ }),
/* 384 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_animate__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_request__ = __webpack_require__(325);



/* harmony default export */ __webpack_exports__["a"] = (function(view) {
  Object(__WEBPACK_IMPORTED_MODULE_1_d3_request__["a" /* csv */])('../assets/ross_filtered.csv', function(rows) {

    let data = {
      json: rows,
      vmap: {
        x: 'pe',
        y: 'total_rollbacks',
        time: 'real_TS',
        size: 5,
        color: 'steelblue'
      }
    };

    let animatedScatterPlot = new __WEBPACK_IMPORTED_MODULE_0__src_animate__["a" /* default */](data, view);
  })

});

/***/ }),
/* 385 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plot__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_timer__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_transition__ = __webpack_require__(388);




let i = 0;

class AnimatedScatterPlot extends __WEBPACK_IMPORTED_MODULE_0__plot__["a" /* default */] {

  constructor(data, view) {
    super(data, view);
    this.timeStep();
  }

  //define timeSteps
  timeStep() {
    let lookup = {};
    let attribute = this.data.vmap.time;
    let items = this.data.json;
    let result = [];

    for (var i = 0; i < items.length; i++) {
      let timeStep = items[i][attribute];

      if (!(timeStep in lookup)) {
        lookup[timeStep] = 1;
        result.push(timeStep);
      }
    }
    result = result.sort((a, b) => a - b);
    this.filter(result);
  }

  //filter the data based on the timstep
  filter(timeSteps, i) {
    let that = this;
    let data = this.data.json;

    // render()
    for (let i = 0; i < timeSteps.length; i++) {
      let filtered = data.filter(d => d.real_TS == timeSteps[i]);
      (function(ind) {
        setTimeout(function() {
          that.render(filtered, i);
        }, 2000 * ind);
      })(i);
    }
  }

  render(result, i) {
    const t = Object(__WEBPACK_IMPORTED_MODULE_2_d3_transition__["a" /* transition */])().duration(750);
    let vmap = this.data.vmap;

    if (i == 0) {
      super.axes();
    }

    // JOIN new data with old elements.
    const circle = this.svg.main.selectAll('circle')
      .data(result);

    // EXIT old elements not present in new data.
    circle.exit()
      .attr("class", "exit")
      .transition(t)
      .style("fill-opacity", 1e-6)
      .remove();

    //UPDATE old elements present in new data.
    circle
      .data(result)
      .attr("class", "update")
      .transition(t)
      .attr('cx', d => this.scales.x(d[vmap.x]))
      .attr('cy', d => this.scales.y(d[vmap.y]))
      .attr('r', d => this.scales.size(d[vmap.size]))
      .style("fill-opacity", 0.8);

    //Create new elements
    circle
      .data(result)
      .enter().append('circle')
      .attr('class', 'new-plot-circles')
      .attr('cx', d => this.scales.x(d[vmap.x]))
      .attr('cy', d => this.scales.y(d[vmap.y]))
      .attr('r', d => this.scales.size(d[vmap.size]))
      .style("fill", d => this.scales.color(d[vmap.color]))
      .style("fill-opacity", 1)
      .style("stroke-width", 0)

  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AnimatedScatterPlot;


/***/ }),
/* 386 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__timer__ = __webpack_require__(305);


/* harmony default export */ __webpack_exports__["a"] = (function(callback, delay, time) {
  var t = new __WEBPACK_IMPORTED_MODULE_0__timer__["a" /* Timer */];
  delay = delay == null ? 0 : +delay;
  t.restart(function(elapsed) {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
});


/***/ }),
/* 387 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__timer__ = __webpack_require__(305);


/* unused harmony default export */ var _unused_webpack_default_export = (function(callback, delay, time) {
  var t = new __WEBPACK_IMPORTED_MODULE_0__timer__["a" /* Timer */], total = delay;
  if (delay == null) return t.restart(callback, delay, time), t;
  delay = +delay, time = time == null ? Object(__WEBPACK_IMPORTED_MODULE_0__timer__["b" /* now */])() : +time;
  t.restart(function tick(elapsed) {
    elapsed += total;
    t.restart(tick, total += delay, time);
    callback(elapsed);
  }, delay, time);
  return t;
});


/***/ }),
/* 388 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selection_index__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transition_index__ = __webpack_require__(33);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__transition_index__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__active__ = __webpack_require__(420);
/* unused harmony reexport active */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interrupt__ = __webpack_require__(329);
/* unused harmony reexport interrupt */






/***/ }),
/* 389 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interrupt__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transition__ = __webpack_require__(391);




__WEBPACK_IMPORTED_MODULE_0_d3_selection__["d" /* selection */].prototype.interrupt = __WEBPACK_IMPORTED_MODULE_1__interrupt__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0_d3_selection__["d" /* selection */].prototype.transition = __WEBPACK_IMPORTED_MODULE_2__transition__["a" /* default */];


/***/ }),
/* 390 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interrupt__ = __webpack_require__(329);


/* harmony default export */ __webpack_exports__["a"] = (function(name) {
  return this.each(function() {
    Object(__WEBPACK_IMPORTED_MODULE_0__interrupt__["a" /* default */])(this, name);
  });
});


/***/ }),
/* 391 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transition_index__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transition_schedule__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_ease__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_timer__ = __webpack_require__(304);





var defaultTiming = {
  time: null, // Set on use.
  delay: 0,
  duration: 250,
  ease: __WEBPACK_IMPORTED_MODULE_2_d3_ease__["a" /* easeCubicInOut */]
};

function inherit(node, id) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id])) {
    if (!(node = node.parentNode)) {
      return defaultTiming.time = Object(__WEBPACK_IMPORTED_MODULE_3_d3_timer__["a" /* now */])(), defaultTiming;
    }
  }
  return timing;
}

/* harmony default export */ __webpack_exports__["a"] = (function(name) {
  var id,
      timing;

  if (name instanceof __WEBPACK_IMPORTED_MODULE_0__transition_index__["a" /* Transition */]) {
    id = name._id, name = name._name;
  } else {
    id = Object(__WEBPACK_IMPORTED_MODULE_0__transition_index__["c" /* newId */])(), (timing = defaultTiming).time = Object(__WEBPACK_IMPORTED_MODULE_3_d3_timer__["a" /* now */])(), name = name == null ? null : name + "";
  }

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        Object(__WEBPACK_IMPORTED_MODULE_1__transition_schedule__["e" /* default */])(node, name, id, i, group, timing || inherit(node, id));
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_0__transition_index__["a" /* Transition */](groups, this._parents, name, id);
});


/***/ }),
/* 392 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_interpolate__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_selection__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tween__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interpolate__ = __webpack_require__(330);





function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = this.getAttribute(name);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attrConstantNS(fullname, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = this.getAttributeNS(fullname.space, fullname.local);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attrFunction(name, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttribute(name);
    string0 = this.getAttribute(name);
    string1 = value1 + "";
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function attrFunctionNS(fullname, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
    string0 = this.getAttributeNS(fullname.space, fullname.local);
    string1 = value1 + "";
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, value) {
  var fullname = Object(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["b" /* namespace */])(name), i = fullname === "transform" ? __WEBPACK_IMPORTED_MODULE_0_d3_interpolate__["j" /* interpolateTransformSvg */] : __WEBPACK_IMPORTED_MODULE_3__interpolate__["a" /* default */];
  return this.attrTween(name, typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, Object(__WEBPACK_IMPORTED_MODULE_2__tween__["b" /* tweenValue */])(this, "attr." + name, value))
      : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname)
      : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));
});


/***/ }),
/* 393 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(15);


function attrInterpolate(name, i) {
  return function(t) {
    this.setAttribute(name, i(t));
  };
}

function attrInterpolateNS(fullname, i) {
  return function(t) {
    this.setAttributeNS(fullname.space, fullname.local, i(t));
  };
}

function attrTweenNS(fullname, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
    return t0;
  }
  tween._value = value;
  return tween;
}

function attrTween(name, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
    return t0;
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  var fullname = Object(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["b" /* namespace */])(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
});


/***/ }),
/* 394 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__schedule__ = __webpack_require__(14);


function delayFunction(id, value) {
  return function() {
    Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["g" /* init */])(this, id).delay = +value.apply(this, arguments);
  };
}

function delayConstant(id, value) {
  return value = +value, function() {
    Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["g" /* init */])(this, id).delay = value;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? delayFunction
          : delayConstant)(id, value))
      : Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["f" /* get */])(this.node(), id).delay;
});


/***/ }),
/* 395 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__schedule__ = __webpack_require__(14);


function durationFunction(id, value) {
  return function() {
    Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["h" /* set */])(this, id).duration = +value.apply(this, arguments);
  };
}

function durationConstant(id, value) {
  return value = +value, function() {
    Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["h" /* set */])(this, id).duration = value;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? durationFunction
          : durationConstant)(id, value))
      : Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["f" /* get */])(this.node(), id).duration;
});


/***/ }),
/* 396 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__schedule__ = __webpack_require__(14);


function easeConstant(id, value) {
  if (typeof value !== "function") throw new Error;
  return function() {
    Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["h" /* set */])(this, id).ease = value;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(value) {
  var id = this._id;

  return arguments.length
      ? this.each(easeConstant(id, value))
      : Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["f" /* get */])(this.node(), id).ease;
});


/***/ }),
/* 397 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(33);



/* harmony default export */ __webpack_exports__["a"] = (function(match) {
  if (typeof match !== "function") match = Object(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["a" /* matcher */])(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_1__index__["a" /* Transition */](subgroups, this._parents, this._name, this._id);
});


/***/ }),
/* 398 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(33);


/* harmony default export */ __webpack_exports__["a"] = (function(transition) {
  if (transition._id !== this._id) throw new Error;

  for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["a" /* Transition */](merges, this._parents, this._name, this._id);
});


/***/ }),
/* 399 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__schedule__ = __webpack_require__(14);


function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0) t = t.slice(0, i);
    return !t || t === "start";
  });
}

function onFunction(id, name, listener) {
  var on0, on1, sit = start(name) ? __WEBPACK_IMPORTED_MODULE_0__schedule__["g" /* init */] : __WEBPACK_IMPORTED_MODULE_0__schedule__["h" /* set */];
  return function() {
    var schedule = sit(this, id),
        on = schedule.on;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);

    schedule.on = on1;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, listener) {
  var id = this._id;

  return arguments.length < 2
      ? Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["f" /* get */])(this.node(), id).on.on(name)
      : this.each(onFunction(id, name, listener));
});


/***/ }),
/* 400 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function removeFunction(id) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition) if (+i !== id) return;
    if (parent) parent.removeChild(this);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return this.on("end.remove", removeFunction(this._id));
});


/***/ }),
/* 401 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schedule__ = __webpack_require__(14);




/* harmony default export */ __webpack_exports__["a"] = (function(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = Object(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["e" /* selector */])(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        Object(__WEBPACK_IMPORTED_MODULE_2__schedule__["e" /* default */])(subgroup[i], name, id, i, subgroup, Object(__WEBPACK_IMPORTED_MODULE_2__schedule__["f" /* get */])(node, id));
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_1__index__["a" /* Transition */](subgroups, this._parents, name, id);
});


/***/ }),
/* 402 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schedule__ = __webpack_require__(14);




/* harmony default export */ __webpack_exports__["a"] = (function(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = Object(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["f" /* selectorAll */])(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children = select.call(node, node.__data__, i, group), child, inherit = Object(__WEBPACK_IMPORTED_MODULE_2__schedule__["f" /* get */])(node, id), k = 0, l = children.length; k < l; ++k) {
          if (child = children[k]) {
            Object(__WEBPACK_IMPORTED_MODULE_2__schedule__["e" /* default */])(child, name, id, k, children, inherit);
          }
        }
        subgroups.push(children);
        parents.push(node);
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_1__index__["a" /* Transition */](subgroups, parents, name, id);
});


/***/ }),
/* 403 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(15);


var Selection = __WEBPACK_IMPORTED_MODULE_0_d3_selection__["d" /* selection */].prototype.constructor;

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return new Selection(this._groups, this._parents);
});


/***/ }),
/* 404 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_interpolate__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_selection__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schedule__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tween__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__interpolate__ = __webpack_require__(330);






function styleNull(name, interpolate) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0 = Object(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["g" /* style */])(this, name),
        string1 = (this.style.removeProperty(name), Object(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["g" /* style */])(this, name));
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, string10 = string1);
  };
}

function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = Object(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["g" /* style */])(this, name);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function styleFunction(name, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0 = Object(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["g" /* style */])(this, name),
        value1 = value(this),
        string1 = value1 + "";
    if (value1 == null) string1 = value1 = (this.style.removeProperty(name), Object(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["g" /* style */])(this, name));
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function styleMaybeRemove(id, name) {
  var on0, on1, listener0, key = "style." + name, event = "end." + key, remove;
  return function() {
    var schedule = Object(__WEBPACK_IMPORTED_MODULE_2__schedule__["h" /* set */])(this, id),
        on = schedule.on,
        listener = schedule.value[key] == null ? remove || (remove = styleRemove(name)) : undefined;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);

    schedule.on = on1;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, value, priority) {
  var i = (name += "") === "transform" ? __WEBPACK_IMPORTED_MODULE_0_d3_interpolate__["i" /* interpolateTransformCss */] : __WEBPACK_IMPORTED_MODULE_4__interpolate__["a" /* default */];
  return value == null ? this
      .styleTween(name, styleNull(name, i))
      .on("end.style." + name, styleRemove(name))
    : typeof value === "function" ? this
      .styleTween(name, styleFunction(name, i, Object(__WEBPACK_IMPORTED_MODULE_3__tween__["b" /* tweenValue */])(this, "style." + name, value)))
      .each(styleMaybeRemove(this._id, name))
    : this
      .styleTween(name, styleConstant(name, i, value), priority)
      .on("end.style." + name, null);
});


/***/ }),
/* 405 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function styleInterpolate(name, i, priority) {
  return function(t) {
    this.style.setProperty(name, i(t), priority);
  };
}

function styleTween(name, value, priority) {
  var t, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
    return t;
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
});


/***/ }),
/* 406 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tween__ = __webpack_require__(116);


function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(value) {
  return this.tween("text", typeof value === "function"
      ? textFunction(Object(__WEBPACK_IMPORTED_MODULE_0__tween__["b" /* tweenValue */])(this, "text", value))
      : textConstant(value == null ? "" : value + ""));
});


/***/ }),
/* 407 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__schedule__ = __webpack_require__(14);



/* harmony default export */ __webpack_exports__["a"] = (function() {
  var name = this._name,
      id0 = this._id,
      id1 = Object(__WEBPACK_IMPORTED_MODULE_0__index__["c" /* newId */])();

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit = Object(__WEBPACK_IMPORTED_MODULE_1__schedule__["f" /* get */])(node, id0);
        Object(__WEBPACK_IMPORTED_MODULE_1__schedule__["e" /* default */])(node, name, id1, i, group, {
          time: inherit.time + inherit.delay + inherit.duration,
          delay: 0,
          duration: inherit.duration,
          ease: inherit.ease
        });
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["a" /* Transition */](groups, this._parents, name, id1);
});


/***/ }),
/* 408 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__schedule__ = __webpack_require__(14);


/* harmony default export */ __webpack_exports__["a"] = (function() {
  var on0, on1, that = this, id = that._id, size = that.size();
  return new Promise(function(resolve, reject) {
    var cancel = {value: reject},
        end = {value: function() { if (--size === 0) resolve(); }};

    that.each(function() {
      var schedule = Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["h" /* set */])(this, id),
          on = schedule.on;

      // If this node shared a dispatch with the previous node,
      // just assign the updated shared dispatch and we’re done!
      // Otherwise, copy-on-write.
      if (on !== on0) {
        on1 = (on0 = on).copy();
        on1._.cancel.push(cancel);
        on1._.interrupt.push(cancel);
        on1._.end.push(end);
      }

      schedule.on = on1;
    });
  });
});


/***/ }),
/* 409 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__linear__ = __webpack_require__(410);
/* unused harmony reexport easeLinear */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__quad__ = __webpack_require__(411);
/* unused harmony reexport easeQuad */
/* unused harmony reexport easeQuadIn */
/* unused harmony reexport easeQuadOut */
/* unused harmony reexport easeQuadInOut */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cubic__ = __webpack_require__(412);
/* unused harmony reexport easeCubic */
/* unused harmony reexport easeCubicIn */
/* unused harmony reexport easeCubicOut */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__cubic__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__poly__ = __webpack_require__(413);
/* unused harmony reexport easePoly */
/* unused harmony reexport easePolyIn */
/* unused harmony reexport easePolyOut */
/* unused harmony reexport easePolyInOut */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sin__ = __webpack_require__(414);
/* unused harmony reexport easeSin */
/* unused harmony reexport easeSinIn */
/* unused harmony reexport easeSinOut */
/* unused harmony reexport easeSinInOut */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__exp__ = __webpack_require__(415);
/* unused harmony reexport easeExp */
/* unused harmony reexport easeExpIn */
/* unused harmony reexport easeExpOut */
/* unused harmony reexport easeExpInOut */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__circle__ = __webpack_require__(416);
/* unused harmony reexport easeCircle */
/* unused harmony reexport easeCircleIn */
/* unused harmony reexport easeCircleOut */
/* unused harmony reexport easeCircleInOut */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bounce__ = __webpack_require__(417);
/* unused harmony reexport easeBounce */
/* unused harmony reexport easeBounceIn */
/* unused harmony reexport easeBounceOut */
/* unused harmony reexport easeBounceInOut */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__back__ = __webpack_require__(418);
/* unused harmony reexport easeBack */
/* unused harmony reexport easeBackIn */
/* unused harmony reexport easeBackOut */
/* unused harmony reexport easeBackInOut */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__elastic__ = __webpack_require__(419);
/* unused harmony reexport easeElastic */
/* unused harmony reexport easeElasticIn */
/* unused harmony reexport easeElasticOut */
/* unused harmony reexport easeElasticInOut */





















/***/ }),
/* 410 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export linear */
function linear(t) {
  return +t;
}


/***/ }),
/* 411 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export quadIn */
/* unused harmony export quadOut */
/* unused harmony export quadInOut */
function quadIn(t) {
  return t * t;
}

function quadOut(t) {
  return t * (2 - t);
}

function quadInOut(t) {
  return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
}


/***/ }),
/* 412 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export cubicIn */
/* unused harmony export cubicOut */
/* harmony export (immutable) */ __webpack_exports__["a"] = cubicInOut;
function cubicIn(t) {
  return t * t * t;
}

function cubicOut(t) {
  return --t * t * t + 1;
}

function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}


/***/ }),
/* 413 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export polyIn */
/* unused harmony export polyOut */
/* unused harmony export polyInOut */
var exponent = 3;

var polyIn = (function custom(e) {
  e = +e;

  function polyIn(t) {
    return Math.pow(t, e);
  }

  polyIn.exponent = custom;

  return polyIn;
})(exponent);

var polyOut = (function custom(e) {
  e = +e;

  function polyOut(t) {
    return 1 - Math.pow(1 - t, e);
  }

  polyOut.exponent = custom;

  return polyOut;
})(exponent);

var polyInOut = (function custom(e) {
  e = +e;

  function polyInOut(t) {
    return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
  }

  polyInOut.exponent = custom;

  return polyInOut;
})(exponent);


/***/ }),
/* 414 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export sinIn */
/* unused harmony export sinOut */
/* unused harmony export sinInOut */
var pi = Math.PI,
    halfPi = pi / 2;

function sinIn(t) {
  return 1 - Math.cos(t * halfPi);
}

function sinOut(t) {
  return Math.sin(t * halfPi);
}

function sinInOut(t) {
  return (1 - Math.cos(pi * t)) / 2;
}


/***/ }),
/* 415 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export expIn */
/* unused harmony export expOut */
/* unused harmony export expInOut */
function expIn(t) {
  return Math.pow(2, 10 * t - 10);
}

function expOut(t) {
  return 1 - Math.pow(2, -10 * t);
}

function expInOut(t) {
  return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2;
}


/***/ }),
/* 416 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export circleIn */
/* unused harmony export circleOut */
/* unused harmony export circleInOut */
function circleIn(t) {
  return 1 - Math.sqrt(1 - t * t);
}

function circleOut(t) {
  return Math.sqrt(1 - --t * t);
}

function circleInOut(t) {
  return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
}


/***/ }),
/* 417 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export bounceIn */
/* unused harmony export bounceOut */
/* unused harmony export bounceInOut */
var b1 = 4 / 11,
    b2 = 6 / 11,
    b3 = 8 / 11,
    b4 = 3 / 4,
    b5 = 9 / 11,
    b6 = 10 / 11,
    b7 = 15 / 16,
    b8 = 21 / 22,
    b9 = 63 / 64,
    b0 = 1 / b1 / b1;

function bounceIn(t) {
  return 1 - bounceOut(1 - t);
}

function bounceOut(t) {
  return (t = +t) < b1 ? b0 * t * t : t < b3 ? b0 * (t -= b2) * t + b4 : t < b6 ? b0 * (t -= b5) * t + b7 : b0 * (t -= b8) * t + b9;
}

function bounceInOut(t) {
  return ((t *= 2) <= 1 ? 1 - bounceOut(1 - t) : bounceOut(t - 1) + 1) / 2;
}


/***/ }),
/* 418 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export backIn */
/* unused harmony export backOut */
/* unused harmony export backInOut */
var overshoot = 1.70158;

var backIn = (function custom(s) {
  s = +s;

  function backIn(t) {
    return t * t * ((s + 1) * t - s);
  }

  backIn.overshoot = custom;

  return backIn;
})(overshoot);

var backOut = (function custom(s) {
  s = +s;

  function backOut(t) {
    return --t * t * ((s + 1) * t + s) + 1;
  }

  backOut.overshoot = custom;

  return backOut;
})(overshoot);

var backInOut = (function custom(s) {
  s = +s;

  function backInOut(t) {
    return ((t *= 2) < 1 ? t * t * ((s + 1) * t - s) : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2;
  }

  backInOut.overshoot = custom;

  return backInOut;
})(overshoot);


/***/ }),
/* 419 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export elasticIn */
/* unused harmony export elasticOut */
/* unused harmony export elasticInOut */
var tau = 2 * Math.PI,
    amplitude = 1,
    period = 0.3;

var elasticIn = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticIn(t) {
    return a * Math.pow(2, 10 * --t) * Math.sin((s - t) / p);
  }

  elasticIn.amplitude = function(a) { return custom(a, p * tau); };
  elasticIn.period = function(p) { return custom(a, p); };

  return elasticIn;
})(amplitude, period);

var elasticOut = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticOut(t) {
    return 1 - a * Math.pow(2, -10 * (t = +t)) * Math.sin((t + s) / p);
  }

  elasticOut.amplitude = function(a) { return custom(a, p * tau); };
  elasticOut.period = function(p) { return custom(a, p); };

  return elasticOut;
})(amplitude, period);

var elasticInOut = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticInOut(t) {
    return ((t = t * 2 - 1) < 0
        ? a * Math.pow(2, 10 * t) * Math.sin((s - t) / p)
        : 2 - a * Math.pow(2, -10 * t) * Math.sin((s + t) / p)) / 2;
  }

  elasticInOut.amplitude = function(a) { return custom(a, p * tau); };
  elasticInOut.period = function(p) { return custom(a, p); };

  return elasticInOut;
})(amplitude, period);


/***/ }),
/* 420 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transition_index__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transition_schedule__ = __webpack_require__(14);



var root = [null];

/* unused harmony default export */ var _unused_webpack_default_export = (function(node, name) {
  var schedules = node.__transition,
      schedule,
      i;

  if (schedules) {
    name = name == null ? null : name + "";
    for (i in schedules) {
      if ((schedule = schedules[i]).state > __WEBPACK_IMPORTED_MODULE_1__transition_schedule__["c" /* SCHEDULED */] && schedule.name === name) {
        return new __WEBPACK_IMPORTED_MODULE_0__transition_index__["a" /* Transition */]([[node]], root, name, +i);
      }
    }
  }

  return null;
});


/***/ })
/******/ ]);
//# sourceMappingURL=psvg-test.js.map