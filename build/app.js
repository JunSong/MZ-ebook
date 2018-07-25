(function(){
      
  var createAppHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(4)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(7);
var defined = __webpack_require__(8);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(40);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var $app_script$ = __webpack_require__(23)

$app_define$('@app-application/app', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
})

$app_bootstrap$('@app-application/app',{ packagerVersion: '0.0.5'})


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(24);

var _assign2 = _interopRequireDefault(_assign);

var _util = __webpack_require__(52);

var _util2 = _interopRequireDefault(_util);

var _system = $app_require$('@app-module/system.device');

var _system2 = _interopRequireDefault(_system);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fetch = $app_require$("@app-module/system.fetch");

var Fly = __webpack_require__(53);
var fly = new Fly(fetch);
fly.config.baseURL = "https://ebook.meizu.com/";

var deviceInfo = {};

exports.default = {
  showMenu: _util2.default.showMenu,
  createShortcut: _util2.default.createShortcut,
  onCreate: function onCreate() {
    var self = this;
    _system2.default.getInfo({
      success: function success(ret) {
        (0, _assign2.default)(deviceInfo, ret);
        _system2.default.getId({
          type: ['device', 'user'],
          success: function success(data) {
            (0, _assign2.default)(deviceInfo, data);

            fly.interceptors.request.use(function (request) {
              (0, _assign2.default)(request.headers, {
                uid: 0,
                app: 'ebook',
                os: deviceInfo.osVersionName,
                brand: deviceInfo.brand,
                device_model: deviceInfo.model,
                screen_size: deviceInfo.screenWidth + '*' + deviceInfo.screenHeight,
                imei: deviceInfo.device
              });

              return request;
            });
            self.$http = fly;
          },
          fail: function fail(data, code) {
            console.log('handling fail, code = ' + code);
          }
        });
      }
    });
  }
};
(exports.default || module.exports).manifest = {"package":"com.application.demo","name":"MZ-ebook","versionName":"1.0.0","versionCode":"1","minPlatformVersion":"101","icon":"/Common/imgs/logo.png","features":[{"name":"system.prompt"},{"name":"system.router"},{"name":"system.shortcut"},{"name":"system.fetch"},{"name":"system.device"}],"permissions":[{"origin":"*"}],"config":{"logLevel":"debug","designWidth":1080},"router":{"entry":"Home","pages":{"Home":{"component":"index"},"About":{"component":"index"}}},"display":{"titleBarBackgroundColor":"#ffffff","titleBarTextColor":"#686868","menu":true,"pages":{"Demo":{"titleBarText":"示例页","menu":false},"DemoDetail":{"titleBarText":"详情页"},"About":{"menu":false}}}};
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(25), __esModule: true };

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(26);
module.exports = __webpack_require__(1).Object.assign;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(27);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(37) });


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(1);
var ctx = __webpack_require__(28);
var hide = __webpack_require__(30);
var has = __webpack_require__(5);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(29);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(31);
var createDesc = __webpack_require__(36);
module.exports = __webpack_require__(3) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(32);
var IE8_DOM_DEFINE = __webpack_require__(33);
var toPrimitive = __webpack_require__(35);
var dP = Object.defineProperty;

exports.f = __webpack_require__(3) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(2);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(3) && !__webpack_require__(4)(function () {
  return Object.defineProperty(__webpack_require__(34)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(2);
var document = __webpack_require__(0).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(2);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(38);
var gOPS = __webpack_require__(49);
var pIE = __webpack_require__(50);
var toObject = __webpack_require__(51);
var IObject = __webpack_require__(7);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(4)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(39);
var enumBugKeys = __webpack_require__(48);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(5);
var toIObject = __webpack_require__(6);
var arrayIndexOf = __webpack_require__(41)(false);
var IE_PROTO = __webpack_require__(44)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 40 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(6);
var toLength = __webpack_require__(42);
var toAbsoluteIndex = __webpack_require__(43);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(9);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(9);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(45)('keys');
var uid = __webpack_require__(47);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(1);
var global = __webpack_require__(0);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(46) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 47 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 48 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 49 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 50 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(8);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * 显示菜单
 */
function showMenu() {
  var prompt = $app_require$('@app-module/system.prompt');
  var router = $app_require$('@app-module/system.router');
  var appInfo = $app_require$('@app-module/system.app').getInfo();
  prompt.showContextMenu({
    itemList: ['保存桌面', '关于', '取消'],
    success: function success(ret) {
      switch (ret.index) {
        case 0:
          // 保存桌面
          createShortcut();
          break;
        case 1:
          // 关于
          router.push({
            uri: '/About',
            params: {
              name: appInfo.name,
              icon: appInfo.icon
            }
          });
          break;
        case 2:
          // 取消
          break;
        default:
          prompt.showToast({
            message: 'error'
          });
      }
    }
  });
}

/**
 * 创建桌面图标
 * 注意：使用加载器测试`创建桌面快捷方式`功能时，请先在`系统设置`中打开`应用加载器`的`桌面快捷方式`权限
 */
function createShortcut() {
  var prompt = $app_require$('@app-module/system.prompt');
  var shortcut = $app_require$('@app-module/system.shortcut');
  shortcut.hasInstalled({
    success: function success(ret) {
      if (ret) {
        prompt.showToast({
          message: '已创建桌面图标'
        });
      } else {
        shortcut.install({
          success: function success() {
            prompt.showToast({
              message: '成功创建桌面图标'
            });
          },
          fail: function fail(errmsg, errcode) {
            prompt.showToast({
              message: errcode + ': ' + errmsg
            });
          }
        });
      }
    }
  });
}

exports.default = {
  showMenu: showMenu,
  createShortcut: createShortcut
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
    if (true)
        module.exports = factory();
    else if (typeof define === 'function' && define.amd)
        define([], factory);
    else {
        var a = factory();
        for (var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
    }
})(this, function () {
    return /******/ (function (modules) { // webpackBootstrap
        /******/ 	// The module cache
        /******/
        var installedModules = {};
        /******/
        /******/ 	// The require function
        /******/
        function __webpack_require__(moduleId) {
            /******/
            /******/ 		// Check if module is in cache
            /******/
            if (installedModules[moduleId]) {
                /******/
                return installedModules[moduleId].exports;
                /******/
            }
            /******/ 		// Create a new module (and put it into the cache)
            /******/
            var module = installedModules[moduleId] = {
                /******/            i: moduleId,
                /******/            l: false,
                /******/            exports: {}
                /******/
            };
            /******/
            /******/ 		// Execute the module function
            /******/
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            /******/
            /******/ 		// Flag the module as loaded
            /******/
            module.l = true;
            /******/
            /******/ 		// Return the exports of the module
            /******/
            return module.exports;
            /******/
        }

        /******/
        /******/
        /******/ 	// expose the modules object (__webpack_modules__)
        /******/
        __webpack_require__.m = modules;
        /******/
        /******/ 	// expose the module cache
        /******/
        __webpack_require__.c = installedModules;
        /******/
        /******/ 	// identity function for calling harmony imports with the correct context
        /******/
        __webpack_require__.i = function (value) {
            return value;
        };
        /******/
        /******/ 	// define getter function for harmony exports
        /******/
        __webpack_require__.d = function (exports, name, getter) {
            /******/
            if (!__webpack_require__.o(exports, name)) {
                /******/
                Object.defineProperty(exports, name, {
                    /******/                configurable: false,
                    /******/                enumerable: true,
                    /******/                get: getter
                    /******/
                });
                /******/
            }
            /******/
        };
        /******/
        /******/ 	// getDefaultExport function for compatibility with non-harmony modules
        /******/
        __webpack_require__.n = function (module) {
            /******/
            var getter = module && module.__esModule ?
                /******/            function getDefault() {
                    return module['default'];
                } :
                /******/            function getModuleExports() {
                    return module;
                };
            /******/
            __webpack_require__.d(getter, 'a', getter);
            /******/
            return getter;
            /******/
        };
        /******/
        /******/ 	// Object.prototype.hasOwnProperty.call
        /******/
        __webpack_require__.o = function (object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
        /******/
        /******/ 	// __webpack_public_path__
        /******/
        __webpack_require__.p = "";
        /******/
        /******/ 	// Load entry module and return exports
        /******/
        return __webpack_require__(__webpack_require__.s = 9);
        /******/
    })
    /************************************************************************/
    /******/([
        /* 0 */
        /***/ (function (module, exports, __webpack_require__) {

            "use strict";


            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
                return typeof obj;
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };

            module.exports = {
                type: function type(ob) {
                    return Object.prototype.toString.call(ob).slice(8, -1).toLowerCase();
                },
                isObject: function isObject(ob, real) {
                    if (real) {
                        return this.type(ob) === "object";
                    } else {
                        return ob && (typeof ob === 'undefined' ? 'undefined' : _typeof(ob)) === 'object';
                    }
                },
                isFormData: function isFormData(val) {
                    return typeof FormData !== 'undefined' && val instanceof FormData;
                },
                trim: function trim(str) {
                    return str.replace(/(^\s*)|(\s*$)/g, '');
                },
                encode: function encode(val) {
                    return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
                },
                formatParams: function formatParams(data) {
                    var str = "";
                    var first = true;
                    var that = this;
                    if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) != "object") {
                        return data;
                    }

                    function _encode(sub, path) {
                        var encode = that.encode;
                        var type = that.type(sub);
                        if (type == "array") {
                            sub.forEach(function (e, i) {
                                _encode(e, path + "%5B%5D");
                            });
                        } else if (type == "object") {
                            for (var key in sub) {
                                if (path) {
                                    _encode(sub[key], path + "%5B" + encode(key) + "%5D");
                                } else {
                                    _encode(sub[key], encode(key));
                                }
                            }
                        } else {
                            if (!first) {
                                str += "&";
                            }
                            first = false;
                            str += path + "=" + encode(sub);
                        }
                    }

                    _encode(data, "");
                    return str;
                },

                // Do not overwrite existing attributes
                merge: function merge(a, b) {
                    for (var key in b) {
                        if (!a.hasOwnProperty(key)) {
                            a[key] = b[key];
                        } else if (this.isObject(b[key], 1) && this.isObject(a[key], 1)) {
                            this.merge(a[key], b[key]);
                        }
                    }
                    return a;
                }
            };

            /***/
        }),
        /* 1 */
        /***/ (function (module, exports, __webpack_require__) {

            function KEEP(_, cb) {
                cb();
            }

            "use strict";

            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
                return typeof obj;
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            /*
             * author: wendu
             * email: 824783146@qq.com
             **/

            var util = __webpack_require__(0);
            var isBrowser = typeof document !== "undefined";

//EngineWrapper can help  generating  a  http engine quickly through a adapter
            function EngineWrapper(adapter) {
                var AjaxEngine = function () {
                    function AjaxEngine() {
                        _classCallCheck(this, AjaxEngine);

                        this.requestHeaders = {};
                        this.readyState = 0;
                        this.timeout = 0; // 0 stands for no timeout
                        this.responseURL = "";
                        this.responseHeaders = {};
                    }

                    _createClass(AjaxEngine, [{
                        key: "_call",
                        value: function _call(name) {
                            this[name] && this[name].apply(this, [].splice.call(arguments, 1));
                        }
                    }, {
                        key: "_changeReadyState",
                        value: function _changeReadyState(state) {
                            this.readyState = state;
                            this._call("onreadystatechange");
                        }
                    }, {
                        key: "open",
                        value: function open(method, url) {
                            this.method = method;
                            if (!url) {
                                url = location.href;
                            } else {
                                url = util.trim(url);
                                if (url.indexOf("http") !== 0) {
                                    // Normalize the request url
                                    if (isBrowser) {
                                        var t = document.createElement("a");
                                        t.href = url;
                                        url = t.href;
                                    }
                                }
                            }
                            this.responseURL = url;
                            this._changeReadyState(1);
                        }
                    }, {
                        key: "send",
                        value: function send(arg) {
                            var _this = this;

                            arg = arg || null;
                            if (isBrowser) {
                                var cookie = document.cookie;
                                if (cookie) {
                                    this.requestHeaders.cookie = cookie;
                                }
                            }
                            var self = this;
                            if (adapter) {
                                var request = {
                                    method: self.method,
                                    url: self.responseURL,
                                    headers: self.requestHeaders || {},
                                    body: arg
                                };
                                util.merge(request, self._options || {});
                                if (request.method === "GET") {
                                    request.body = null;
                                }
                                self._changeReadyState(3);
                                var timer;
                                self.timeout = self.timeout || 0;
                                if (self.timeout > 0) {
                                    timer = setTimeout(function () {
                                        if (self.readyState === 3) {
                                            _this._call("onloadend");
                                            self._changeReadyState(0);
                                            self._call("ontimeout");
                                        }
                                    }, self.timeout);
                                }
                                request.timeout = self.timeout;
                                adapter(request, function (response) {

                                    function getAndDelete(key) {
                                        var t = response[key];
                                        delete response[key];
                                        return t;
                                    }

                                    // If the request has already timeout, return
                                    if (self.readyState !== 3) return;
                                    clearTimeout(timer);

                                    // Make sure the type of status is integer
                                    self.status = getAndDelete("statusCode") - 0;

                                    var responseText = getAndDelete("responseText");
                                    var statusMessage = getAndDelete("statusMessage");

                                    // Network error, set the status code 0
                                    if (!self.status) {
                                        self.statusText = responseText;
                                        self._call("onerror", {msg: statusMessage});
                                    } else {
                                        // Parsing the response headers to array in a object,  because
                                        // there may be multiple values with the same header name
                                        var responseHeaders = getAndDelete("headers");
                                        var headers = {};
                                        for (var field in responseHeaders) {
                                            var value = responseHeaders[field];
                                            var key = field.toLowerCase();
                                            // Is array
                                            if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object") {
                                                headers[key] = value;
                                            } else {
                                                headers[key] = headers[key] || [];
                                                headers[key].push(value);
                                            }
                                        }
                                        var cookies = headers["set-cookie"];
                                        if (isBrowser && cookies) {
                                            cookies.forEach(function (e) {
                                                // Remove the http-Only property of the  cookie
                                                // so that JavaScript can operate it.
                                                document.cookie = e.replace(/;\s*httpOnly/ig, "");
                                            });
                                        }
                                        self.responseHeaders = headers;
                                        // Set the fields of engine from response
                                        self.statusText = statusMessage || "";
                                        self.response = self.responseText = responseText;
                                        self._response = response;
                                        self._changeReadyState(4);
                                        self._call("onload");
                                    }
                                    self._call("onloadend");
                                });
                            } else {
                                console.error("Ajax require adapter");
                            }
                        }
                    }, {
                        key: "setRequestHeader",
                        value: function setRequestHeader(key, value) {
                            this.requestHeaders[util.trim(key)] = value;
                        }
                    }, {
                        key: "getResponseHeader",
                        value: function getResponseHeader(key) {
                            return (this.responseHeaders[key.toLowerCase()] || "").toString() || null;
                        }
                    }, {
                        key: "getAllResponseHeaders",
                        value: function getAllResponseHeaders() {
                            var str = "";
                            for (var key in this.responseHeaders) {
                                str += key + ":" + this.getResponseHeader(key) + "\r\n";
                            }
                            return str || null;
                        }
                    }, {
                        key: "abort",
                        value: function abort(msg) {
                            this._changeReadyState(0);
                            this._call("onerror", {msg: msg});
                            this._call("onloadend");
                        }
                    }], [{
                        key: "setAdapter",
                        value: function setAdapter(requestAdapter) {
                            adapter = requestAdapter;
                        }
                    }]);

                    return AjaxEngine;
                }();

                return AjaxEngine;
            }

// learn more about keep-loader: https://github.com/wendux/keep-loader
            ;
            module.exports = EngineWrapper;

            /***/
        }),
        /* 2 */
        /***/ (function (module, exports, __webpack_require__) {

            function KEEP(_, cb) {
                cb();
            }

            "use strict";

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var utils = __webpack_require__(0);
            var isBrowser = typeof document !== "undefined";

            var Fly = function () {
                function Fly(engine) {
                    _classCallCheck(this, Fly);

                    this.engine = engine || XMLHttpRequest;

                    this.default = this; //For typeScript

                    /**
                     * Add  lock/unlock API for interceptor.
                     *
                     * Once an request/response interceptor is locked, the incoming request/response
                     * will be added to a queue before they enter the interceptor, they will not be
                     * continued  until the interceptor is unlocked.
                     *
                     * @param [interceptor] either is interceptors.request or interceptors.response
                     */
                    function wrap(interceptor) {
                        var completer;
                        utils.merge(interceptor, {
                            lock: function lock() {
                                if (!completer) {
                                    interceptor.p = new Promise(function (resolve) {
                                        completer = resolve;
                                    });
                                }
                            },
                            unlock: function unlock() {
                                if (completer) {
                                    completer();
                                    interceptor.p = completer = null;
                                }
                            }
                        });
                    }

                    var interceptors = this.interceptors = {
                        response: {
                            use: function use(handler, onerror) {
                                this.handler = handler;
                                this.onerror = onerror;
                            }
                        },
                        request: {
                            use: function use(handler) {
                                this.handler = handler;
                            }
                        }
                    };

                    var irq = interceptors.request;
                    var irp = interceptors.response;
                    wrap(irp);
                    wrap(irq);

                    this.config = {
                        method: "GET",
                        baseURL: "",
                        headers: {},
                        timeout: 0,
                        parseJson: true, // Convert response data to JSON object automatically.
                        withCredentials: false
                    };
                }

                _createClass(Fly, [{
                    key: "request",
                    value: function request(url, data, options) {
                        var _this = this;

                        var engine = new this.engine();
                        var contentType = "Content-Type";
                        var contentTypeLowerCase = contentType.toLowerCase();
                        var interceptors = this.interceptors;
                        var requestInterceptor = interceptors.request;
                        var responseInterceptor = interceptors.response;
                        var requestInterceptorHandler = requestInterceptor.handler;
                        var promise = new Promise(function (resolve, reject) {
                            if (utils.isObject(url)) {
                                options = url;
                                url = options.url;
                            }
                            options = options || {};
                            options.headers = options.headers || {};

                            function isPromise(p) {
                                // some  polyfill implementation of Promise may be not standard,
                                // so, we test by duck-typing
                                return p && p.then && p.catch;
                            }

                            /**
                             * If the request/response interceptor has been locked，
                             * the new request/response will enter a queue. otherwise, it will be performed directly.
                             * @param [promise] if the promise exist, means the interceptor is  locked.
                             * @param [callback]
                             */
                            function enqueueIfLocked(promise, callback) {
                                if (promise) {
                                    promise.then(function () {
                                        callback();
                                    });
                                } else {
                                    callback();
                                }
                            }

                            // make the http request
                            function makeRequest(options) {
                                data = options.body;
                                // Normalize the request url
                                url = utils.trim(options.url);
                                var baseUrl = utils.trim(options.baseURL || "");
                                if (!url && isBrowser && !baseUrl) url = location.href;
                                if (url.indexOf("http") !== 0) {
                                    var isAbsolute = url[0] === "/";
                                    if (!baseUrl && isBrowser) {
                                        var arr = location.pathname.split("/");
                                        arr.pop();
                                        baseUrl = location.protocol + "//" + location.host + (isAbsolute ? "" : arr.join("/"));
                                    }
                                    if (baseUrl[baseUrl.length - 1] !== "/") {
                                        baseUrl += "/";
                                    }
                                    url = baseUrl + (isAbsolute ? url.substr(1) : url);
                                    if (isBrowser) {

                                        // Normalize the url which contains the ".." or ".", such as
                                        // "http://xx.com/aa/bb/../../xx" to "http://xx.com/xx" .
                                        var t = document.createElement("a");
                                        t.href = url;
                                        url = t.href;
                                    }
                                }

                                var responseType = utils.trim(options.responseType || "");
                                engine.withCredentials = !!options.withCredentials;
                                var isGet = options.method === "GET";
                                if (isGet) {
                                    if (data) {
                                        if (utils.type(data) !== "string") {
                                            data = utils.formatParams(data);
                                        }
                                        url += (url.indexOf("?") === -1 ? "?" : "&") + data;
                                    }
                                }
                                engine.open(options.method, url);

                                // try catch for ie >=9
                                try {
                                    engine.timeout = options.timeout || 0;
                                    if (responseType !== "stream") {
                                        engine.responseType = responseType;
                                    }
                                } catch (e) {
                                }

                                if (!isGet) {
                                    // default content type
                                    var _contentType = "application/x-www-form-urlencoded";
                                    // If the request data is json object, transforming it  to json string,
                                    // and set request content-type to "json". In browser,  the data will
                                    // be sent as RequestBody instead of FormData
                                    if (utils.trim((options.headers[contentType] || "").toLowerCase()) === _contentType) {
                                        data = utils.formatParams(data);
                                    } else if (!utils.isFormData(data) && ["object", "array"].indexOf(utils.type(data)) !== -1) {
                                        _contentType = 'application/json;charset=utf-8';
                                        data = JSON.stringify(data);
                                    }
                                    options.headers[contentType] = _contentType;
                                }

                                for (var k in options.headers) {
                                    if (k === contentType && (utils.isFormData(data) || !data || isGet)) {
                                        // Delete the content-type, Let the browser set it
                                        delete options.headers[k];
                                    } else {
                                        try {
                                            // In browser environment, some header fields are readonly,
                                            // write will cause the exception .
                                            engine.setRequestHeader(k, options.headers[k]);
                                        } catch (e) {
                                        }
                                    }
                                }

                                function onresult(handler, data, type) {
                                    enqueueIfLocked(responseInterceptor.p, function () {
                                        if (handler) {
                                            //如果失败，添加请求信息
                                            if (type) {
                                                data.request = options;
                                            }
                                            var ret = handler.call(responseInterceptor, data, Promise);
                                            data = ret === undefined ? data : ret;
                                        }
                                        if (!isPromise(data)) {
                                            data = Promise[type === 0 ? "resolve" : "reject"](data);
                                        }
                                        data.then(function (d) {
                                            resolve(d);
                                        }).catch(function (e) {
                                            reject(e);
                                        });
                                    });
                                }

                                function onerror(e) {
                                    e.engine = engine;
                                    onresult(responseInterceptor.onerror, e, -1);
                                }

                                function Err(msg, status) {
                                    this.message = msg;
                                    this.status = status;
                                }

                                engine.onload = function () {
                                    // The xhr of IE9 has not response filed
                                    var response = engine.response || engine.responseText;
                                    if (options.parseJson && (engine.getResponseHeader(contentType) || "").indexOf("json") !== -1
                                        // Some third engine implementation may transform the response text to json object automatically,
                                        // so we should test the type of response before transforming it
                                        && !utils.isObject(response)) {
                                        response = JSON.parse(response);
                                    }
                                    var headers = {};
                                    var items = (engine.getAllResponseHeaders() || "").split("\r\n");
                                    items.pop();
                                    items.forEach(function (e) {
                                        var key = e.split(":")[0];
                                        headers[key] = engine.getResponseHeader(key);
                                    });
                                    var status = engine.status;
                                    var statusText = engine.statusText;
                                    var data = {
                                        data: response,
                                        headers: headers,
                                        status: status,
                                        statusText: statusText
                                    };
                                    // The _response filed of engine is set in  adapter which be called in engine-wrapper.js
                                    utils.merge(data, engine._response);
                                    if (status >= 200 && status < 300 || status === 304) {
                                        data.engine = engine;
                                        data.request = options;
                                        onresult(responseInterceptor.handler, data, 0);
                                    } else {
                                        var e = new Err(statusText, status);
                                        e.response = data;
                                        onerror(e);
                                    }
                                };

                                engine.onerror = function (e) {
                                    onerror(new Err(e.msg || "Network Error", 0));
                                };

                                engine.ontimeout = function () {
                                    onerror(new Err("timeout [ " + engine.timeout + "ms ]", 1));
                                };
                                engine._options = options;
                                setTimeout(function () {
                                    engine.send(isGet ? null : data);
                                }, 0);
                            }

                            enqueueIfLocked(requestInterceptor.p, function () {
                                utils.merge(options, _this.config);
                                var headers = options.headers;
                                headers[contentType] = headers[contentType] || headers[contentTypeLowerCase] || "";
                                delete headers[contentTypeLowerCase];
                                options.body = data || options.body;
                                url = utils.trim(url || "");
                                options.method = options.method.toUpperCase();
                                options.url = url;
                                var ret = options;
                                if (requestInterceptorHandler) {
                                    ret = requestInterceptorHandler.call(requestInterceptor, options, Promise) || options;
                                }
                                if (!isPromise(ret)) {
                                    ret = Promise.resolve(ret);
                                }
                                ret.then(function (d) {
                                    //if options continue
                                    if (d === options) {
                                        makeRequest(d);
                                    } else {
                                        resolve(d);
                                    }
                                }, function (err) {
                                    reject(err);
                                });
                            });
                        });
                        promise.engine = engine;
                        return promise;
                    }
                }, {
                    key: "all",
                    value: function all(promises) {
                        return Promise.all(promises);
                    }
                }, {
                    key: "spread",
                    value: function spread(callback) {
                        return function (arr) {
                            return callback.apply(null, arr);
                        };
                    }
                }, {
                    key: "lock",
                    value: function lock() {
                        this.interceptors.request.lock();
                    }
                }, {
                    key: "unlock",
                    value: function unlock() {
                        this.interceptors.request.unlock();
                    }
                }]);

                return Fly;
            }();

//For typeScript


            Fly.default = Fly;

            ["get", "post", "put", "patch", "head", "delete"].forEach(function (e) {
                Fly.prototype[e] = function (url, data, option) {
                    return this.request(url, data, utils.merge({method: e}, option));
                };
            });
// Learn more about keep-loader: https://github.com/wendux/keep-loader
            ;
            module.exports = Fly;

            /***/
        }),
        /* 3 */,
        /* 4 */
        /***/ (function (module, exports, __webpack_require__) {

            "use strict";


            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
                return typeof obj;
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };

//hap adapter
            module.exports = function (fetch) {
                return function (request, responseCallback) {
                    request.data = request.body;
                    request.header = request.headers;
                    request.complete = function (ret) {
                        if ((typeof ret === "undefined" ? "undefined" : _typeof(ret)) !== "object") {
                            ret = {
                                code: 0,
                                msg: ret
                            };
                        }
                        responseCallback({
                            statusCode: ret.code || 0,
                            responseText: ret.data,
                            headers: ret.headers,
                            statusMessage: ret.msg
                        });
                    };
                    fetch.fetch(request);
                };
            };

            /***/
        }),
        /* 5 */,
        /* 6 */,
        /* 7 */,
        /* 8 */,
        /* 9 */
        /***/ (function (module, exports, __webpack_require__) {

            "use strict";


//quick app entry
            var Fly = __webpack_require__(2);
            var EngineWrapper = __webpack_require__(1);
            var adapter = __webpack_require__(4);
module.exports = function (fetch) {
    var hapEngine = EngineWrapper(adapter(fetch));
    return new Fly(hapEngine);
};

            /***/
        })
        /******/]);
});

/***/ })
/******/ ]);
  };
  if (typeof window === "undefined") {
    return createAppHandler();
  }
  else {
    window.createAppHandler = createAppHandler
    // H5注入manifest以获取features
    global.manifest = {"package":"com.application.demo","name":"MZ-ebook","versionName":"1.0.0","versionCode":"1","minPlatformVersion":"101","icon":"/Common/imgs/logo.png","features":[{"name":"system.prompt"},{"name":"system.router"},{"name":"system.shortcut"},{"name":"system.fetch"},{"name":"system.device"}],"permissions":[{"origin":"*"}],"config":{"logLevel":"debug","designWidth":1080},"router":{"entry":"Home","pages":{"Home":{"component":"index"},"About":{"component":"index"}}},"display":{"titleBarBackgroundColor":"#ffffff","titleBarTextColor":"#686868","menu":true,"pages":{"Demo":{"titleBarText":"示例页","menu":false},"DemoDetail":{"titleBarText":"详情页"},"About":{"menu":false}}}};
  }
})();
//# sourceMappingURL=app.js.map