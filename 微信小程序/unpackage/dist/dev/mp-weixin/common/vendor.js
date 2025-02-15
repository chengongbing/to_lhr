(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!*********************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var objectKeys = ['qy', 'env', 'error', 'version', 'lanDebug', 'cloud', 'serviceMarket', 'router', 'worklet'];
var singlePageDisableKey = ['lanDebug', 'router', 'worklet'];
var target = typeof globalThis !== 'undefined' ? globalThis : function () {
  return this;
}();
var key = ['w', 'x'].join('');
var oldWx = target[key];
var launchOption = oldWx.getLaunchOptionsSync ? oldWx.getLaunchOptionsSync() : null;
function isWxKey(key) {
  if (launchOption && launchOption.scene === 1154 && singlePageDisableKey.includes(key)) {
    return false;
  }
  return objectKeys.indexOf(key) > -1 || typeof oldWx[key] === 'function';
}
function initWx() {
  var newWx = {};
  for (var _key in oldWx) {
    if (isWxKey(_key)) {
      // TODO wrapper function
      newWx[_key] = oldWx[_key];
    }
  }
  return newWx;
}
target[key] = initWx();
var _default = target[key];
exports.default = _default;

/***/ }),

/***/ 10:
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 11:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 12);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 12:
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ 14);
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 13:
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 14:
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 15:
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ 16);
var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct.js */ 17);
function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct.bind(), module.exports.__esModule = true, module.exports["default"] = module.exports;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
  return _construct.apply(null, arguments);
}
module.exports = _construct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 16:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 17:
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 18:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ 19);
var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ 20);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 8);
var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ 21);
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 19:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 9);
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 2:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, global) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createApp = createApp;
exports.createComponent = createComponent;
exports.createPage = createPage;
exports.createPlugin = createPlugin;
exports.createSubpackageApp = createSubpackageApp;
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 5));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _construct2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/construct */ 15));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 22);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var realAtob;
var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var b64re = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
if (typeof atob !== 'function') {
  realAtob = function realAtob(str) {
    str = String(str).replace(/[\t\n\f\r ]+/g, '');
    if (!b64re.test(str)) {
      throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    }

    // Adding the padding if missing, for semplicity
    str += '=='.slice(2 - (str.length & 3));
    var bitmap;
    var result = '';
    var r1;
    var r2;
    var i = 0;
    for (; i < str.length;) {
      bitmap = b64.indexOf(str.charAt(i++)) << 18 | b64.indexOf(str.charAt(i++)) << 12 | (r1 = b64.indexOf(str.charAt(i++))) << 6 | (r2 = b64.indexOf(str.charAt(i++)));
      result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) : r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) : String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
    }
    return result;
  };
} else {
  // 注意atob只能在全局对象上调用，例如：`const Base64 = {atob};Base64.atob('xxxx')`是错误的用法
  realAtob = atob;
}
function b64DecodeUnicode(str) {
  return decodeURIComponent(realAtob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}
function getCurrentUserInfo() {
  var token = wx.getStorageSync('uni_id_token') || '';
  var tokenArr = token.split('.');
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0
    };
  }
  var userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error('获取当前用户信息出错，详细错误信息为：' + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1000;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}
function uniIdMixin(Vue) {
  Vue.prototype.uniIDHasRole = function (roleId) {
    var _getCurrentUserInfo = getCurrentUserInfo(),
      role = _getCurrentUserInfo.role;
    return role.indexOf(roleId) > -1;
  };
  Vue.prototype.uniIDHasPermission = function (permissionId) {
    var _getCurrentUserInfo2 = getCurrentUserInfo(),
      permission = _getCurrentUserInfo2.permission;
    return this.uniIDHasRole('admin') || permission.indexOf(permissionId) > -1;
  };
  Vue.prototype.uniIDTokenValid = function () {
    var _getCurrentUserInfo3 = getCurrentUserInfo(),
      tokenExpired = _getCurrentUserInfo3.tokenExpired;
    return tokenExpired > Date.now();
  };
}
var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;
function isFn(fn) {
  return typeof fn === 'function';
}
function isStr(str) {
  return typeof str === 'string';
}
function isObject(obj) {
  return obj !== null && (0, _typeof2.default)(obj) === 'object';
}
function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
function noop() {}

/**
 * Create a cached version of a pure function.
 */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});
function sortObject(obj) {
  var sortObj = {};
  if (isPlainObject(obj)) {
    Object.keys(obj).sort().forEach(function (key) {
      sortObj[key] = obj[key];
    });
  }
  return !Object.keys(sortObj) ? obj : sortObj;
}
var HOOKS = ['invoke', 'success', 'fail', 'complete', 'returnValue'];
var globalInterceptors = {};
var scopedInterceptors = {};
function mergeHook(parentVal, childVal) {
  var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
  return res ? dedupeHooks(res) : res;
}
function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}
function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}
function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}
function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}
function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}
function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}
function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}
function isPromise(obj) {
  return !!obj && ((0, _typeof2.default)(obj) === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}
function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {}
        };
      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    }
  };
}
function wrapperOptions(interceptor) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}
function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, (0, _toConsumableArray2.default)(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, (0, _toConsumableArray2.default)(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}
function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}
function invokeApi(method, api, options) {
  for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    params[_key - 3] = arguments[_key];
  }
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}
var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return new Promise(function (resolve, reject) {
      res.then(function (res) {
        if (res[0]) {
          reject(res[0]);
        } else {
          resolve(res[1]);
        }
      });
    });
  }
};
var SYNC_API_RE = /^\$|Window$|WindowStyle$|sendHostEvent|sendNativeEvent|restoreGlobal|requireGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getLocale|setLocale|invokePushCallback|getWindowInfo|getDeviceInfo|getAppBaseInfo|getSystemSetting|getAppAuthorizeSetting|initUTS|requireUTS|registerUTS/;
var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection', 'createPushMessage'];
var CALLBACK_API_RE = /^on|^off/;
function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}
function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}
function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).catch(function (err) {
    return [err];
  });
}
function shouldPromise(name) {
  if (isContextApi(name) || isSyncApi(name) || isCallbackApi(name)) {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
function promisify(name, api) {
  if (!shouldPromise(name) || !isFn(api)) {
    return api;
  }
  return function promiseApi() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      params[_key2 - 1] = arguments[_key2];
    }
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject
      })].concat(params));
    })));
  };
}
var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;
function checkDeviceWidth() {
  var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
    platform = _wx$getSystemInfoSync.platform,
    pixelRatio = _wx$getSystemInfoSync.pixelRatio,
    windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}
function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }
  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}
var LOCALE_ZH_HANS = 'zh-Hans';
var LOCALE_ZH_HANT = 'zh-Hant';
var LOCALE_EN = 'en';
var LOCALE_FR = 'fr';
var LOCALE_ES = 'es';
var messages = {};
var locale;
{
  locale = normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN;
}
function initI18nMessages() {
  if (!isEnableLocale()) {
    return;
  }
  var localeKeys = Object.keys(__uniConfig.locales);
  if (localeKeys.length) {
    localeKeys.forEach(function (locale) {
      var curMessages = messages[locale];
      var userMessages = __uniConfig.locales[locale];
      if (curMessages) {
        Object.assign(curMessages, userMessages);
      } else {
        messages[locale] = userMessages;
      }
    });
  }
}
initI18nMessages();
var i18n = (0, _uniI18n.initVueI18n)(locale, {});
var t = i18n.t;
var i18nMixin = i18n.mixin = {
  beforeCreate: function beforeCreate() {
    var _this = this;
    var unwatch = i18n.i18n.watchLocale(function () {
      _this.$forceUpdate();
    });
    this.$once('hook:beforeDestroy', function () {
      unwatch();
    });
  },
  methods: {
    $$t: function $$t(key, values) {
      return t(key, values);
    }
  }
};
var setLocale = i18n.setLocale;
var getLocale = i18n.getLocale;
function initAppLocale(Vue, appVm, locale) {
  var state = Vue.observable({
    locale: locale || i18n.getLocale()
  });
  var localeWatchers = [];
  appVm.$watchLocale = function (fn) {
    localeWatchers.push(fn);
  };
  Object.defineProperty(appVm, '$locale', {
    get: function get() {
      return state.locale;
    },
    set: function set(v) {
      state.locale = v;
      localeWatchers.forEach(function (watch) {
        return watch(v);
      });
    }
  });
}
function isEnableLocale() {
  return typeof __uniConfig !== 'undefined' && __uniConfig.locales && !!Object.keys(__uniConfig.locales).length;
}
function include(str, parts) {
  return !!parts.find(function (part) {
    return str.indexOf(part) !== -1;
  });
}
function startsWith(str, parts) {
  return parts.find(function (part) {
    return str.indexOf(part) === 0;
  });
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale === 'chinese') {
    // 支付宝
    return LOCALE_ZH_HANS;
  }
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}
// export function initI18n() {
//   const localeKeys = Object.keys(__uniConfig.locales || {})
//   if (localeKeys.length) {
//     localeKeys.forEach((locale) =>
//       i18n.add(locale, __uniConfig.locales[locale])
//     )
//   }
// }

function getLocale$1() {
  // 优先使用 $locale
  if (isFn(getApp)) {
    var app = getApp({
      allowDefault: true
    });
    if (app && app.$vm) {
      return app.$vm.$locale;
    }
  }
  return normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN;
}
function setLocale$1(locale) {
  var app = isFn(getApp) ? getApp() : false;
  if (!app) {
    return false;
  }
  var oldLocale = app.$vm.$locale;
  if (oldLocale !== locale) {
    app.$vm.$locale = locale;
    onLocaleChangeCallbacks.forEach(function (fn) {
      return fn({
        locale: locale
      });
    });
    return true;
  }
  return false;
}
var onLocaleChangeCallbacks = [];
function onLocaleChange(fn) {
  if (onLocaleChangeCallbacks.indexOf(fn) === -1) {
    onLocaleChangeCallbacks.push(fn);
  }
}
if (typeof global !== 'undefined') {
  global.getLocale = getLocale$1;
}
var interceptors = {
  promiseInterceptor: promiseInterceptor
};
var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  getLocale: getLocale$1,
  setLocale: setLocale$1,
  onLocaleChange: onLocaleChange,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors
});
function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}
var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  }
};
var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(function (item, index) {
        return index < currentIndex ? item !== urls[currentIndex] : true;
      });
    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false
    };
  }
};
var UUID_KEY = '__DC_STAT_UUID';
var deviceId;
function useDeviceId(result) {
  deviceId = deviceId || wx.getStorageSync(UUID_KEY);
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7);
    wx.setStorage({
      key: UUID_KEY,
      data: deviceId
    });
  }
  result.deviceId = deviceId;
}
function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.screenHeight - safeArea.bottom
    };
  }
}
function populateParameters(result) {
  var _result$brand = result.brand,
    brand = _result$brand === void 0 ? '' : _result$brand,
    _result$model = result.model,
    model = _result$model === void 0 ? '' : _result$model,
    _result$system = result.system,
    system = _result$system === void 0 ? '' : _result$system,
    _result$language = result.language,
    language = _result$language === void 0 ? '' : _result$language,
    theme = result.theme,
    version = result.version,
    platform = result.platform,
    fontSizeSetting = result.fontSizeSetting,
    SDKVersion = result.SDKVersion,
    pixelRatio = result.pixelRatio,
    deviceOrientation = result.deviceOrientation;
  // const isQuickApp = "mp-weixin".indexOf('quickapp-webview') !== -1

  var extraParam = {};

  // osName osVersion
  var osName = '';
  var osVersion = '';
  {
    osName = system.split(' ')[0] || '';
    osVersion = system.split(' ')[1] || '';
  }
  var hostVersion = version;

  // deviceType
  var deviceType = getGetDeviceType(result, model);

  // deviceModel
  var deviceBrand = getDeviceBrand(brand);

  // hostName
  var _hostName = getHostName(result);

  // deviceOrientation
  var _deviceOrientation = deviceOrientation; // 仅 微信 百度 支持

  // devicePixelRatio
  var _devicePixelRatio = pixelRatio;

  // SDKVersion
  var _SDKVersion = SDKVersion;

  // hostLanguage
  var hostLanguage = language.replace(/_/g, '-');

  // wx.getAccountInfoSync

  var parameters = {
    appId: "__UNI__EF50DBF",
    appName: "vue2",
    appVersion: "1.0.0",
    appVersionCode: "100",
    appLanguage: getAppLanguage(hostLanguage),
    uniCompileVersion: "3.7.9",
    uniRuntimeVersion: "3.7.9",
    uniPlatform: undefined || "mp-weixin",
    deviceBrand: deviceBrand,
    deviceModel: model,
    deviceType: deviceType,
    devicePixelRatio: _devicePixelRatio,
    deviceOrientation: _deviceOrientation,
    osName: osName.toLocaleLowerCase(),
    osVersion: osVersion,
    hostTheme: theme,
    hostVersion: hostVersion,
    hostLanguage: hostLanguage,
    hostName: _hostName,
    hostSDKVersion: _SDKVersion,
    hostFontSizeSetting: fontSizeSetting,
    windowTop: 0,
    windowBottom: 0,
    // TODO
    osLanguage: undefined,
    osTheme: undefined,
    ua: undefined,
    hostPackageName: undefined,
    browserName: undefined,
    browserVersion: undefined
  };
  Object.assign(result, parameters, extraParam);
}
function getGetDeviceType(result, model) {
  var deviceType = result.deviceType || 'phone';
  {
    var deviceTypeMaps = {
      ipad: 'pad',
      windows: 'pc',
      mac: 'pc'
    };
    var deviceTypeMapsKeys = Object.keys(deviceTypeMaps);
    var _model = model.toLocaleLowerCase();
    for (var index = 0; index < deviceTypeMapsKeys.length; index++) {
      var _m = deviceTypeMapsKeys[index];
      if (_model.indexOf(_m) !== -1) {
        deviceType = deviceTypeMaps[_m];
        break;
      }
    }
  }
  return deviceType;
}
function getDeviceBrand(brand) {
  var deviceBrand = brand;
  if (deviceBrand) {
    deviceBrand = brand.toLocaleLowerCase();
  }
  return deviceBrand;
}
function getAppLanguage(defaultLanguage) {
  return getLocale$1 ? getLocale$1() : defaultLanguage;
}
function getHostName(result) {
  var _platform = 'WeChat';
  var _hostName = result.hostName || _platform; // mp-jd
  {
    if (result.environment) {
      _hostName = result.environment;
    } else if (result.host && result.host.env) {
      _hostName = result.host.env;
    }
  }
  return _hostName;
}
var getSystemInfo = {
  returnValue: function returnValue(result) {
    useDeviceId(result);
    addSafeAreaInsets(result);
    populateParameters(result);
  }
};
var showActionSheet = {
  args: function args(fromArgs) {
    if ((0, _typeof2.default)(fromArgs) === 'object') {
      fromArgs.alertText = fromArgs.title;
    }
  }
};
var getAppBaseInfo = {
  returnValue: function returnValue(result) {
    var _result = result,
      version = _result.version,
      language = _result.language,
      SDKVersion = _result.SDKVersion,
      theme = _result.theme;
    var _hostName = getHostName(result);
    var hostLanguage = language.replace('_', '-');
    result = sortObject(Object.assign(result, {
      appId: "__UNI__EF50DBF",
      appName: "vue2",
      appVersion: "1.0.0",
      appVersionCode: "100",
      appLanguage: getAppLanguage(hostLanguage),
      hostVersion: version,
      hostLanguage: hostLanguage,
      hostName: _hostName,
      hostSDKVersion: SDKVersion,
      hostTheme: theme
    }));
  }
};
var getDeviceInfo = {
  returnValue: function returnValue(result) {
    var _result2 = result,
      brand = _result2.brand,
      model = _result2.model;
    var deviceType = getGetDeviceType(result, model);
    var deviceBrand = getDeviceBrand(brand);
    useDeviceId(result);
    result = sortObject(Object.assign(result, {
      deviceType: deviceType,
      deviceBrand: deviceBrand,
      deviceModel: model
    }));
  }
};
var getWindowInfo = {
  returnValue: function returnValue(result) {
    addSafeAreaInsets(result);
    result = sortObject(Object.assign(result, {
      windowTop: 0,
      windowBottom: 0
    }));
  }
};
var getAppAuthorizeSetting = {
  returnValue: function returnValue(result) {
    var locationReducedAccuracy = result.locationReducedAccuracy;
    result.locationAccuracy = 'unsupported';
    if (locationReducedAccuracy === true) {
      result.locationAccuracy = 'reduced';
    } else if (locationReducedAccuracy === false) {
      result.locationAccuracy = 'full';
    }
  }
};

// import navigateTo from 'uni-helpers/navigate-to'

var compressImage = {
  args: function args(fromArgs) {
    // https://developers.weixin.qq.com/community/develop/doc/000c08940c865011298e0a43256800?highLine=compressHeight
    if (fromArgs.compressedHeight && !fromArgs.compressHeight) {
      fromArgs.compressHeight = fromArgs.compressedHeight;
    }
    if (fromArgs.compressedWidth && !fromArgs.compressWidth) {
      fromArgs.compressWidth = fromArgs.compressedWidth;
    }
  }
};
var protocols = {
  redirectTo: redirectTo,
  // navigateTo,  // 由于在微信开发者工具的页面参数，会显示__id__参数，因此暂时关闭mp-weixin对于navigateTo的AOP
  previewImage: previewImage,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfo,
  showActionSheet: showActionSheet,
  getAppBaseInfo: getAppBaseInfo,
  getDeviceInfo: getDeviceInfo,
  getWindowInfo: getWindowInfo,
  getAppAuthorizeSetting: getAppAuthorizeSetting,
  compressImage: compressImage
};
var todos = ['vibrate', 'preloadPage', 'unPreloadPage', 'loadSubPackage'];
var canIUses = [];
var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];
function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}
function processArgs(methodName, fromArgs) {
  var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {
    // 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {
          // 不支持的参数
          console.warn("The '".concat(methodName, "' method of platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support option '").concat(key, "'"));
        } else if (isStr(keyOption)) {
          // 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {
          // {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}
function processReturnValue(methodName, res, returnValue) {
  var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {
    // 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}
function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {
      // 暂不支持的 api
      return function () {
        console.error("Platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support '".concat(methodName, "'."));
      };
    }
    return function (arg1, arg2) {
      // 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }
      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);
      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {
        // 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}
var todoApis = Object.create(null);
var TODOS = ['onTabBarMidButtonTap', 'subscribePush', 'unsubscribePush', 'onPush', 'offPush', 'share'];
function createTodoApi(name) {
  return function todoApi(_ref) {
    var fail = _ref.fail,
      complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail method '").concat(name, "' not supported")
    };
    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}
TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});
var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin']
};
function getProvider(_ref2) {
  var service = _ref2.service,
    success = _ref2.success,
    fail = _ref2.fail,
    complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service]
    };
    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail service not found'
    };
    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}
var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider
});
var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();
function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}
function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}
var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit
});

/**
 * 框架内 try-catch
 */
/**
 * 开发者 try-catch
 */
function tryCatch(fn) {
  return function () {
    try {
      return fn.apply(fn, arguments);
    } catch (e) {
      // TODO
      console.error(e);
    }
  };
}
function getApiCallbacks(params) {
  var apiCallbacks = {};
  for (var name in params) {
    var param = params[name];
    if (isFn(param)) {
      apiCallbacks[name] = tryCatch(param);
      delete params[name];
    }
  }
  return apiCallbacks;
}
var cid;
var cidErrMsg;
var enabled;
function normalizePushMessage(message) {
  try {
    return JSON.parse(message);
  } catch (e) {}
  return message;
}
function invokePushCallback(args) {
  if (args.type === 'enabled') {
    enabled = true;
  } else if (args.type === 'clientId') {
    cid = args.cid;
    cidErrMsg = args.errMsg;
    invokeGetPushCidCallbacks(cid, args.errMsg);
  } else if (args.type === 'pushMsg') {
    var message = {
      type: 'receive',
      data: normalizePushMessage(args.message)
    };
    for (var i = 0; i < onPushMessageCallbacks.length; i++) {
      var callback = onPushMessageCallbacks[i];
      callback(message);
      // 该消息已被阻止
      if (message.stopped) {
        break;
      }
    }
  } else if (args.type === 'click') {
    onPushMessageCallbacks.forEach(function (callback) {
      callback({
        type: 'click',
        data: normalizePushMessage(args.message)
      });
    });
  }
}
var getPushCidCallbacks = [];
function invokeGetPushCidCallbacks(cid, errMsg) {
  getPushCidCallbacks.forEach(function (callback) {
    callback(cid, errMsg);
  });
  getPushCidCallbacks.length = 0;
}
function getPushClientId(args) {
  if (!isPlainObject(args)) {
    args = {};
  }
  var _getApiCallbacks = getApiCallbacks(args),
    success = _getApiCallbacks.success,
    fail = _getApiCallbacks.fail,
    complete = _getApiCallbacks.complete;
  var hasSuccess = isFn(success);
  var hasFail = isFn(fail);
  var hasComplete = isFn(complete);
  Promise.resolve().then(function () {
    if (typeof enabled === 'undefined') {
      enabled = false;
      cid = '';
      cidErrMsg = 'uniPush is not enabled';
    }
    getPushCidCallbacks.push(function (cid, errMsg) {
      var res;
      if (cid) {
        res = {
          errMsg: 'getPushClientId:ok',
          cid: cid
        };
        hasSuccess && success(res);
      } else {
        res = {
          errMsg: 'getPushClientId:fail' + (errMsg ? ' ' + errMsg : '')
        };
        hasFail && fail(res);
      }
      hasComplete && complete(res);
    });
    if (typeof cid !== 'undefined') {
      invokeGetPushCidCallbacks(cid, cidErrMsg);
    }
  });
}
var onPushMessageCallbacks = [];
// 不使用 defineOnApi 实现，是因为 defineOnApi 依赖 UniServiceJSBridge ，该对象目前在小程序上未提供，故简单实现
var onPushMessage = function onPushMessage(fn) {
  if (onPushMessageCallbacks.indexOf(fn) === -1) {
    onPushMessageCallbacks.push(fn);
  }
};
var offPushMessage = function offPushMessage(fn) {
  if (!fn) {
    onPushMessageCallbacks.length = 0;
  } else {
    var index = onPushMessageCallbacks.indexOf(fn);
    if (index > -1) {
      onPushMessageCallbacks.splice(index, 1);
    }
  }
};
var baseInfo = wx.getAppBaseInfo && wx.getAppBaseInfo();
if (!baseInfo) {
  baseInfo = wx.getSystemInfoSync();
}
var host = baseInfo ? baseInfo.host : null;
var shareVideoMessage = host && host.env === 'SAAASDK' ? wx.miniapp.shareVideoMessage : wx.shareVideoMessage;
var api = /*#__PURE__*/Object.freeze({
  __proto__: null,
  shareVideoMessage: shareVideoMessage,
  getPushClientId: getPushClientId,
  onPushMessage: onPushMessage,
  offPushMessage: offPushMessage,
  invokePushCallback: invokePushCallback
});
var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];
function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}
function initBehavior(options) {
  return Behavior(options);
}
function isPage() {
  return !!this.route;
}
function initRelation(detail) {
  this.triggerEvent('__l', detail);
}
function selectAllComponents(mpInstance, selector, $refs) {
  var components = mpInstance.selectAllComponents(selector) || [];
  components.forEach(function (component) {
    var ref = component.dataset.ref;
    $refs[ref] = component.$vm || toSkip(component);
    {
      if (component.dataset.vueGeneric === 'scoped') {
        component.selectAllComponents('.scoped-ref').forEach(function (scopedComponent) {
          selectAllComponents(scopedComponent, selector, $refs);
        });
      }
    }
  });
}
function syncRefs(refs, newRefs) {
  var oldKeys = (0, _construct2.default)(Set, (0, _toConsumableArray2.default)(Object.keys(refs)));
  var newKeys = Object.keys(newRefs);
  newKeys.forEach(function (key) {
    var oldValue = refs[key];
    var newValue = newRefs[key];
    if (Array.isArray(oldValue) && Array.isArray(newValue) && oldValue.length === newValue.length && newValue.every(function (value) {
      return oldValue.includes(value);
    })) {
      return;
    }
    refs[key] = newValue;
    oldKeys.delete(key);
  });
  oldKeys.forEach(function (key) {
    delete refs[key];
  });
  return refs;
}
function initRefs(vm) {
  var mpInstance = vm.$scope;
  var refs = {};
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      selectAllComponents(mpInstance, '.vue-ref', $refs);
      // TODO 暂不考虑 for 中的 scoped
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for') || [];
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || toSkip(component));
      });
      return syncRefs(refs, $refs);
    }
  });
}
function handleLink(event) {
  var _ref3 = event.detail || event.value,
    vuePid = _ref3.vuePid,
    vueOptions = _ref3.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;
  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }
  if (!parentVm) {
    parentVm = this.$vm;
  }
  vueOptions.parent = parentVm;
}
function markMPComponent(component) {
  // 在 Vue 中标记为小程序组件
  var IS_MP = '__v_isMPComponent';
  Object.defineProperty(component, IS_MP, {
    configurable: true,
    enumerable: false,
    value: true
  });
  return component;
}
function toSkip(obj) {
  var OB = '__ob__';
  var SKIP = '__v_skip';
  if (isObject(obj) && Object.isExtensible(obj)) {
    // 避免被 @vue/composition-api 观测
    Object.defineProperty(obj, OB, {
      configurable: true,
      enumerable: false,
      value: (0, _defineProperty2.default)({}, SKIP, true)
    });
  }
  return obj;
}
var WORKLET_RE = /_(.*)_worklet_factory_/;
function initWorkletMethods(mpMethods, vueMethods) {
  if (vueMethods) {
    Object.keys(vueMethods).forEach(function (name) {
      var matches = name.match(WORKLET_RE);
      if (matches) {
        var workletName = matches[1];
        mpMethods[name] = vueMethods[name];
        mpMethods[workletName] = vueMethods[workletName];
      }
    });
  }
}
var MPPage = Page;
var MPComponent = Component;
var customizeRE = /:/g;
var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});
function initTriggerEvent(mpInstance) {
  var oldTriggerEvent = mpInstance.triggerEvent;
  var newTriggerEvent = function newTriggerEvent(event) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }
    // 事件名统一转驼峰格式，仅处理：当前组件为 vue 组件、当前组件为 vue 组件子组件
    if (this.$vm || this.dataset && this.dataset.comType) {
      event = customize(event);
    } else {
      // 针对微信/QQ小程序单独补充驼峰格式事件，以兼容历史项目
      var newEvent = customize(event);
      if (newEvent !== event) {
        oldTriggerEvent.apply(this, [newEvent].concat(args));
      }
    }
    return oldTriggerEvent.apply(this, [event].concat(args));
  };
  try {
    // 京东小程序 triggerEvent 为只读
    mpInstance.triggerEvent = newTriggerEvent;
  } catch (error) {
    mpInstance._triggerEvent = newTriggerEvent;
  }
}
function initHook(name, options, isComponent) {
  var oldHook = options[name];
  options[name] = function () {
    markMPComponent(this);
    initTriggerEvent(this);
    if (oldHook) {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      return oldHook.apply(this, args);
    }
  };
}
if (!MPPage.__$wrappered) {
  MPPage.__$wrappered = true;
  Page = function Page() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('onLoad', options);
    return MPPage(options);
  };
  Page.after = MPPage.after;
  Component = function Component() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('created', options);
    return MPComponent(options);
  };
}
var PAGE_EVENT_HOOKS = ['onPullDownRefresh', 'onReachBottom', 'onAddToFavorites', 'onShareTimeline', 'onShareAppMessage', 'onPageScroll', 'onResize', 'onTabItemTap'];
function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}
function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }
  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }
  vueOptions = vueOptions.default || vueOptions;
  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super && vueOptions.super.options && Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }
  if (isFn(vueOptions[hook]) || Array.isArray(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {
      return hasHook(hook, mixin);
    });
  }
}
function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}
function initUnknownHooks(mpOptions, vueOptions) {
  var excludes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  findHooks(vueOptions).forEach(function (hook) {
    return initHook$1(mpOptions, hook, excludes);
  });
}
function findHooks(vueOptions) {
  var hooks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  if (vueOptions) {
    Object.keys(vueOptions).forEach(function (name) {
      if (name.indexOf('on') === 0 && isFn(vueOptions[name])) {
        hooks.push(name);
      }
    });
  }
  return hooks;
}
function initHook$1(mpOptions, hook, excludes) {
  if (excludes.indexOf(hook) === -1 && !hasOwn(mpOptions, hook)) {
    mpOptions[hook] = function (args) {
      return this.$vm && this.$vm.__call_hook(hook, args);
    };
  }
}
function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}
function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}
function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;
  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}
function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};
  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"vue2","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }
  if (!isPlainObject(data)) {
    data = {};
  }
  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });
  return data;
}
var PROP_TYPES = [String, Number, Boolean, Object, Array, null];
function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;
  var vueProps = vueOptions.props;
  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }
  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: ''
          };
          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: ''
          };
        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(initBehavior({
      properties: initProperties(vueExtends.props, true)
    }));
  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(initBehavior({
          properties: initProperties(vueMixin.props, true)
        }));
      }
    });
  }
  return behaviors;
}
function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}
function initProperties(props) {
  var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var options = arguments.length > 3 ? arguments[3] : undefined;
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: ''
    };
    {
      if (options.virtualHost) {
        properties.virtualHostStyle = {
          type: null,
          value: ''
        };
        properties.virtualHostClass = {
          type: null,
          value: ''
        };
      }
    }
    // scopedSlotsCompiler auto
    properties.scopedSlotsCompiler = {
      type: String,
      value: ''
    };
    properties.vueSlots = {
      // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots
        });
      }
    };
  }
  if (Array.isArray(props)) {
    // ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key)
      };
    });
  } else if (isPlainObject(props)) {
    // {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {
        // title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }
        opts.type = parsePropType(key, opts.type);
        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key)
        };
      } else {
        // content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key)
        };
      }
    });
  }
  return properties;
}
function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}
  event.stopPropagation = noop;
  event.preventDefault = noop;
  event.target = event.target || {};
  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }
  if (hasOwn(event, 'markerId')) {
    event.detail = (0, _typeof2.default)(event.detail) === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }
  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }
  return event;
}
function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {
      // ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];
      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }
      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }
      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}
function processEventExtra(vm, extra, event, __args__) {
  var extraObj = {};
  if (Array.isArray(extra) && extra.length) {
    /**
     *[
     *    ['data.items', 'data.id', item.data.id],
     *    ['metas', 'id', meta.id]
     *],
     *[
     *    ['data.items', 'data.id', item.data.id],
     *    ['metas', 'id', meta.id]
     *],
     *'test'
     */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {
          // model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {
            // $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            extraObj['$' + index] = event.detail ? event.detail.__args__ || __args__ : __args__;
          } else if (dataPath.indexOf('$event.') === 0) {
            // $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }
  return extraObj;
}
function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}
function processEventArgs(vm, event) {
  var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var isCustom = arguments.length > 4 ? arguments[4] : undefined;
  var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象

  // fixed 用户直接触发 mpInstance.triggerEvent
  var __args__ = isPlainObject(event.detail) ? event.detail.__args__ || [event.detail] : [event.detail];
  if (isCustom) {
    // 自定义事件
    isCustomMPEvent = event.currentTarget && event.currentTarget.dataset && event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {
      // 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return __args__;
    }
  }
  var extraObj = processEventExtra(vm, extra, event, __args__);
  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {
        // input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(__args__[0]);
        } else {
          // wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });
  return ret;
}
var ONCE = '~';
var CUSTOM = '^';
function isMatchEventType(eventType, optType) {
  return eventType === optType || optType === 'regionchange' && (eventType === 'begin' || eventType === 'end');
}
function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}
function handleEvent(event) {
  var _this2 = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;
  var ret = [];
  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];
    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;
    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this2.$vm;
          if (handlerCtx.$options.generic) {
            // mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx, processEventArgs(_this2.$vm, event, eventArray[1], eventArray[2], isCustom, methodName));
            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            var _type = _this2.$vm.mpType === 'page' ? 'Page' : 'Component';
            var path = _this2.route || _this2.is;
            throw new Error("".concat(_type, " \"").concat(path, "\" does not have a method \"").concat(methodName, "\""));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(_this2.$vm, event, eventArray[1], eventArray[2], isCustom, methodName);
          params = Array.isArray(params) ? params : [];
          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          if (/=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(handler.toString())) {
            // eslint-disable-next-line no-sparse-arrays
            params = params.concat([,,,,,,,,,, event]);
          }
          ret.push(handler.apply(handlerCtx, params));
        }
      });
    }
  });
  if (eventType === 'input' && ret.length === 1 && typeof ret[0] !== 'undefined') {
    return ret[0];
  }
}
var eventChannels = {};
var eventChannelStack = [];
function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}
var hooks = ['onShow', 'onHide', 'onError', 'onPageNotFound', 'onThemeChange', 'onUnhandledRejection'];
function initEventChannel() {
  _vue.default.prototype.getOpenerEventChannel = function () {
    // 微信小程序使用自身getOpenerEventChannel
    {
      return this.$scope.getOpenerEventChannel();
    }
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
}
function initScopedSlotsParams() {
  var center = {};
  var parents = {};
  _vue.default.prototype.$hasScopedSlotsParams = function (vueId) {
    var has = center[vueId];
    if (!has) {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
    return has;
  };
  _vue.default.prototype.$getScopedSlotsParams = function (vueId, name, key) {
    var data = center[vueId];
    if (data) {
      var object = data[name] || {};
      return key ? object[key] : object;
    } else {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
  };
  _vue.default.prototype.$setScopedSlotsParams = function (name, value) {
    var vueIds = this.$options.propsData.vueId;
    if (vueIds) {
      var vueId = vueIds.split(',')[0];
      var object = center[vueId] = center[vueId] || {};
      object[name] = value;
      if (parents[vueId]) {
        parents[vueId].$forceUpdate();
      }
    }
  };
  _vue.default.mixin({
    destroyed: function destroyed() {
      var propsData = this.$options.propsData;
      var vueId = propsData && propsData.vueId;
      if (vueId) {
        delete center[vueId];
        delete parents[vueId];
      }
    }
  });
}
function parseBaseApp(vm, _ref4) {
  var mocks = _ref4.mocks,
    initRefs = _ref4.initRefs;
  initEventChannel();
  {
    initScopedSlotsParams();
  }
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }
  uniIdMixin(_vue.default);
  _vue.default.prototype.mpHost = "mp-weixin";
  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }
      this.mpType = this.$options.mpType;
      this.$mp = (0, _defineProperty2.default)({
        data: {}
      }, this.mpType, this.$options.mpInstance);
      this.$scope = this.$options.mpInstance;
      delete this.$options.mpType;
      delete this.$options.mpInstance;
      if (this.mpType === 'page' && typeof getApp === 'function') {
        // hack vue-i18n
        var app = getApp();
        if (app.$vm && app.$vm.$i18n) {
          this._i18n = app.$vm.$i18n;
        }
      }
      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    }
  });
  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {
        // 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (wx.canIUse && !wx.canIUse('nextTick')) {
          // 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }
      this.$vm = vm;
      this.$vm.$mp = {
        app: this
      };
      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;
      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);
      this.$vm.__call_hook('onLaunch', args);
    }
  };

  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }
  initAppLocale(_vue.default, vm, normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN);
  initHooks(appOptions, hooks);
  initUnknownHooks(appOptions, vm.$options);
  return appOptions;
}
function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs
  });
}
function createApp(vm) {
  App(parseApp(vm));
  return vm;
}
var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {
  return '%' + c.charCodeAt(0).toString(16);
};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {
  return encodeURIComponent(str).replace(encodeReserveRE, encodeReserveReplacer).replace(commaRE, ',');
};
function stringifyQuery(obj) {
  var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];
    if (val === undefined) {
      return '';
    }
    if (val === null) {
      return encodeStr(key);
    }
    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }
    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {
    return x.length > 0;
  }).join('&') : null;
  return res ? "?".concat(res) : '';
}
function parseBaseComponent(vueComponentOptions) {
  var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    isPage = _ref5.isPage,
    initRelation = _ref5.initRelation;
  var needVueOptions = arguments.length > 2 ? arguments[2] : undefined;
  var _initVueComponent = initVueComponent(_vue.default, vueComponentOptions),
    _initVueComponent2 = (0, _slicedToArray2.default)(_initVueComponent, 2),
    VueComponent = _initVueComponent2[0],
    vueOptions = _initVueComponent2[1];
  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true
  }, vueOptions.options || {});
  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }
  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file, options),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;
        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties
        };
        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options
        });

        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      }
    },
    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      }
    },
    methods: {
      __l: handleLink,
      __e: handleEvent
    }
  };
  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }
  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }
  if (needVueOptions) {
    return [componentOptions, vueOptions, VueComponent];
  }
  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}
function parseComponent(vueComponentOptions, needVueOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation
  }, needVueOptions);
}
var hooks$1 = ['onShow', 'onHide', 'onUnload'];
hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);
function parseBasePage(vuePageOptions) {
  var _parseComponent = parseComponent(vuePageOptions, true),
    _parseComponent2 = (0, _slicedToArray2.default)(_parseComponent, 2),
    pageOptions = _parseComponent2[0],
    vueOptions = _parseComponent2[1];
  initHooks(pageOptions.methods, hooks$1, vueOptions);
  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery)
    };
    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };
  {
    initUnknownHooks(pageOptions.methods, vuePageOptions, ['onReady']);
  }
  {
    initWorkletMethods(pageOptions.methods, vueOptions.methods);
  }
  return pageOptions;
}
function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions);
}
function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}
function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}
function createSubpackageApp(vm) {
  var appOptions = parseApp(vm);
  var app = getApp({
    allowDefault: true
  });
  vm.$scope = app;
  var globalData = app.globalData;
  if (globalData) {
    Object.keys(appOptions.globalData).forEach(function (name) {
      if (!hasOwn(globalData, name)) {
        globalData[name] = appOptions.globalData[name];
      }
    });
  }
  Object.keys(appOptions).forEach(function (name) {
    if (!hasOwn(app, name)) {
      app[name] = appOptions[name];
    }
  });
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}
function createPlugin(vm) {
  var appOptions = parseApp(vm);
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {
      for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}
todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});
canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name : canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});
var uni = {};
if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    }
  });
} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });
  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }
  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });
  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });
  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}
wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;
wx.createSubpackageApp = createSubpackageApp;
wx.createPlugin = createPlugin;
var uni$1 = uni;
var _default = uni$1;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 20:
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 21:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 22:
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.es.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, global) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOCALE_ZH_HANT = exports.LOCALE_ZH_HANS = exports.LOCALE_FR = exports.LOCALE_ES = exports.LOCALE_EN = exports.I18n = exports.Formatter = void 0;
exports.compileI18nJsonStr = compileI18nJsonStr;
exports.hasI18nJson = hasI18nJson;
exports.initVueI18n = initVueI18n;
exports.isI18nStr = isI18nStr;
exports.isString = void 0;
exports.normalizeLocale = normalizeLocale;
exports.parseI18nJson = parseI18nJson;
exports.resolveLocale = resolveLocale;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 5));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var isArray = Array.isArray;
var isObject = function isObject(val) {
  return val !== null && (0, _typeof2.default)(val) === 'object';
};
var defaultDelimiters = ['{', '}'];
var BaseFormatter = /*#__PURE__*/function () {
  function BaseFormatter() {
    (0, _classCallCheck2.default)(this, BaseFormatter);
    this._caches = Object.create(null);
  }
  (0, _createClass2.default)(BaseFormatter, [{
    key: "interpolate",
    value: function interpolate(message, values) {
      var delimiters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDelimiters;
      if (!values) {
        return [message];
      }
      var tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }]);
  return BaseFormatter;
}();
exports.Formatter = BaseFormatter;
var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format, _ref) {
  var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
    startDelimiter = _ref2[0],
    endDelimiter = _ref2[1];
  var tokens = [];
  var position = 0;
  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({
          type: 'text',
          value: text
        });
      }
      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== endDelimiter) {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === endDelimiter;
      var type = RE_TOKEN_LIST_VALUE.test(sub) ? 'list' : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? 'named' : 'unknown';
      tokens.push({
        value: sub,
        type: type
      });
    }
    //  else if (char === '%') {
    //   // when found rails i18n syntax, skip text capture
    //   if (format[position] !== '{') {
    //     text += char
    //   }
    // }
    else {
      text += char;
    }
  }
  text && tokens.push({
    type: 'text',
    value: text
  });
  return tokens;
}
function compile(tokens, values) {
  var compiled = [];
  var index = 0;
  var mode = isArray(values) ? 'list' : isObject(values) ? 'named' : 'unknown';
  if (mode === 'unknown') {
    return compiled;
  }
  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break;
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case 'named':
        if (mode === 'named') {
          compiled.push(values[token.value]);
        } else {
          if (true) {
            console.warn("Type of token '".concat(token.type, "' and format of value '").concat(mode, "' don't match!"));
          }
        }
        break;
      case 'unknown':
        if (true) {
          console.warn("Detect 'unknown' type of token!");
        }
        break;
    }
    index++;
  }
  return compiled;
}
var LOCALE_ZH_HANS = 'zh-Hans';
exports.LOCALE_ZH_HANS = LOCALE_ZH_HANS;
var LOCALE_ZH_HANT = 'zh-Hant';
exports.LOCALE_ZH_HANT = LOCALE_ZH_HANT;
var LOCALE_EN = 'en';
exports.LOCALE_EN = LOCALE_EN;
var LOCALE_FR = 'fr';
exports.LOCALE_FR = LOCALE_FR;
var LOCALE_ES = 'es';
exports.LOCALE_ES = LOCALE_ES;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {
  return hasOwnProperty.call(val, key);
};
var defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find(function (part) {
    return str.indexOf(part) !== -1;
  });
}
function startsWith(str, parts) {
  return parts.find(function (part) {
    return str.indexOf(part) === 0;
  });
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}
var I18n = /*#__PURE__*/function () {
  function I18n(_ref3) {
    var locale = _ref3.locale,
      fallbackLocale = _ref3.fallbackLocale,
      messages = _ref3.messages,
      watcher = _ref3.watcher,
      formater = _ref3.formater;
    (0, _classCallCheck2.default)(this, I18n);
    this.locale = LOCALE_EN;
    this.fallbackLocale = LOCALE_EN;
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater || defaultFormatter;
    this.messages = messages || {};
    this.setLocale(locale || LOCALE_EN);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }
  (0, _createClass2.default)(I18n, [{
    key: "setLocale",
    value: function setLocale(locale) {
      var _this = this;
      var oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        // 可能初始化时不存在
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      // 仅发生变化时，通知
      if (oldLocale !== this.locale) {
        this.watchers.forEach(function (watcher) {
          watcher(_this.locale, oldLocale);
        });
      }
    }
  }, {
    key: "getLocale",
    value: function getLocale() {
      return this.locale;
    }
  }, {
    key: "watchLocale",
    value: function watchLocale(fn) {
      var _this2 = this;
      var index = this.watchers.push(fn) - 1;
      return function () {
        _this2.watchers.splice(index, 1);
      };
    }
  }, {
    key: "add",
    value: function add(locale, message) {
      var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach(function (key) {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
  }, {
    key: "f",
    value: function f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join('');
    }
  }, {
    key: "t",
    value: function t(key, locale, values) {
      var message = this.message;
      if (typeof locale === 'string') {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn("Cannot translate the value of keypath ".concat(key, ". Use the value of keypath as default."));
        return key;
      }
      return this.formater.interpolate(message[key], values).join('');
    }
  }]);
  return I18n;
}();
exports.I18n = I18n;
function watchAppLocale(appVm, i18n) {
  // 需要保证 watch 的触发在组件渲染之前
  if (appVm.$watchLocale) {
    // vue2
    appVm.$watchLocale(function (newLocale) {
      i18n.setLocale(newLocale);
    });
  } else {
    appVm.$watch(function () {
      return appVm.$locale;
    }, function (newLocale) {
      i18n.setLocale(newLocale);
    });
  }
}
function getDefaultLocale() {
  if (typeof uni !== 'undefined' && uni.getLocale) {
    return uni.getLocale();
  }
  // 小程序平台，uni 和 uni-i18n 互相引用，导致访问不到 uni，故在 global 上挂了 getLocale
  if (typeof global !== 'undefined' && global.getLocale) {
    return global.getLocale();
  }
  return LOCALE_EN;
}
function initVueI18n(locale) {
  var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var fallbackLocale = arguments.length > 2 ? arguments[2] : undefined;
  var watcher = arguments.length > 3 ? arguments[3] : undefined;
  // 兼容旧版本入参
  if (typeof locale !== 'string') {
    var _ref4 = [messages, locale];
    locale = _ref4[0];
    messages = _ref4[1];
  }
  if (typeof locale !== 'string') {
    // 因为小程序平台，uni-i18n 和 uni 互相引用，导致此时访问 uni 时，为 undefined
    locale = getDefaultLocale();
  }
  if (typeof fallbackLocale !== 'string') {
    fallbackLocale = typeof __uniConfig !== 'undefined' && __uniConfig.fallbackLocale || LOCALE_EN;
  }
  var i18n = new I18n({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    watcher: watcher
  });
  var _t = function t(key, values) {
    if (typeof getApp !== 'function') {
      // app view
      /* eslint-disable no-func-assign */
      _t = function t(key, values) {
        return i18n.t(key, values);
      };
    } else {
      var isWatchedAppLocale = false;
      _t = function t(key, values) {
        var appVm = getApp().$vm;
        // 可能$vm还不存在，比如在支付宝小程序中，组件定义较早，在props的default里使用了t()函数（如uni-goods-nav），此时app还未初始化
        // options: {
        // 	type: Array,
        // 	default () {
        // 		return [{
        // 			icon: 'shop',
        // 			text: t("uni-goods-nav.options.shop"),
        // 		}, {
        // 			icon: 'cart',
        // 			text: t("uni-goods-nav.options.cart")
        // 		}]
        // 	}
        // },
        if (appVm) {
          // 触发响应式
          appVm.$locale;
          if (!isWatchedAppLocale) {
            isWatchedAppLocale = true;
            watchAppLocale(appVm, i18n);
          }
        }
        return i18n.t(key, values);
      };
    }
    return _t(key, values);
  };
  return {
    i18n: i18n,
    f: function f(message, values, delimiters) {
      return i18n.f(message, values, delimiters);
    },
    t: function t(key, values) {
      return _t(key, values);
    },
    add: function add(locale, message) {
      var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return i18n.add(locale, message, override);
    },
    watch: function watch(fn) {
      return i18n.watchLocale(fn);
    },
    getLocale: function getLocale() {
      return i18n.getLocale();
    },
    setLocale: function setLocale(newLocale) {
      return i18n.setLocale(newLocale);
    }
  };
}
var isString = function isString(val) {
  return typeof val === 'string';
};
exports.isString = isString;
var formater;
function hasI18nJson(jsonObj, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  return walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        return true;
      }
    } else {
      return hasI18nJson(value, delimiters);
    }
  });
}
function parseI18nJson(jsonObj, values, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        jsonObj[key] = compileStr(value, values, delimiters);
      }
    } else {
      parseI18nJson(value, values, delimiters);
    }
  });
  return jsonObj;
}
function compileI18nJsonStr(jsonStr, _ref5) {
  var locale = _ref5.locale,
    locales = _ref5.locales,
    delimiters = _ref5.delimiters;
  if (!isI18nStr(jsonStr, delimiters)) {
    return jsonStr;
  }
  if (!formater) {
    formater = new BaseFormatter();
  }
  var localeValues = [];
  Object.keys(locales).forEach(function (name) {
    if (name !== locale) {
      localeValues.push({
        locale: name,
        values: locales[name]
      });
    }
  });
  localeValues.unshift({
    locale: locale,
    values: locales[locale]
  });
  try {
    return JSON.stringify(compileJsonObj(JSON.parse(jsonStr), localeValues, delimiters), null, 2);
  } catch (e) {}
  return jsonStr;
}
function isI18nStr(value, delimiters) {
  return value.indexOf(delimiters[0]) > -1;
}
function compileStr(value, values, delimiters) {
  return formater.interpolate(value, values, delimiters).join('');
}
function compileValue(jsonObj, key, localeValues, delimiters) {
  var value = jsonObj[key];
  if (isString(value)) {
    // 存在国际化
    if (isI18nStr(value, delimiters)) {
      jsonObj[key] = compileStr(value, localeValues[0].values, delimiters);
      if (localeValues.length > 1) {
        // 格式化国际化语言
        var valueLocales = jsonObj[key + 'Locales'] = {};
        localeValues.forEach(function (localValue) {
          valueLocales[localValue.locale] = compileStr(value, localValue.values, delimiters);
        });
      }
    }
  } else {
    compileJsonObj(value, localeValues, delimiters);
  }
}
function compileJsonObj(jsonObj, localeValues, delimiters) {
  walkJsonObj(jsonObj, function (jsonObj, key) {
    compileValue(jsonObj, key, localeValues, delimiters);
  });
  return jsonObj;
}
function walkJsonObj(jsonObj, walk) {
  if (isArray(jsonObj)) {
    for (var i = 0; i < jsonObj.length; i++) {
      if (walk(jsonObj, i)) {
        return true;
      }
    }
  } else if (isObject(jsonObj)) {
    for (var key in jsonObj) {
      if (walk(jsonObj, key)) {
        return true;
      }
    }
  }
  return false;
}
function resolveLocale(locales) {
  return function (locale) {
    if (!locale) {
      return locale;
    }
    locale = normalizeLocale(locale) || locale;
    return resolveLocaleChain(locale).find(function (locale) {
      return locales.indexOf(locale) > -1;
    });
  };
}
function resolveLocaleChain(locale) {
  var chain = [];
  var tokens = locale.split('-');
  while (tokens.length) {
    chain.push(tokens.join('-'));
    tokens.pop();
  }
  return chain;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 23:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 24:
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 12);
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 25:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2022 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue &&
    !value.__v_isMPComponent
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i, i++)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu' || vm.mpHost === 'mp-kuaishou' || vm.mpHost === 'mp-xhs'){//百度、快手、小红书 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
var NULLTYPE = '[object Null]';
var UNDEFINEDTYPE = '[object Undefined]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function nullOrUndefined(currentType, preType) {
    if(
        (currentType === NULLTYPE || currentType === UNDEFINEDTYPE) && 
        (preType === NULLTYPE || preType === UNDEFINEDTYPE)
    ) {
        return false
    }
    return true
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue !== pre[key] && nullOrUndefined(currentType, preType)) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"vue2","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"vue2","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"vue2","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function clearInstance(key, value) {
  // 简易去除 Vue 和小程序组件实例
  if (value) {
    if (value._isVue || value.__v_isMPComponent) {
      return {}
    }
  }
  return value
}

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret, clearInstance))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"vue2","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = typeof getApp === 'function' && getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      var triggerEvent = this.$scope['_triggerEvent'] || this.$scope['triggerEvent'];
      if (triggerEvent) {
        try {
          triggerEvent.call(this.$scope, event, {
            __args__: toArray(arguments, 1)
          });
        } catch (error) {

        }
      }
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value);
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value);
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onInit',
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize',
    'onUploadDouyinVideo'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 26:
/*!**************************************!*\
  !*** F:/to_LHR/code/vue2/pages.json ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 286:
/*!************************************************************************!*\
  !*** F:/to_LHR/code/vue2/uni_modules/vk-uview-ui/libs/util/emitter.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * 递归使用 call 方式this指向
 * @param componentName // 需要找的组件的名称
 * @param eventName // 事件名称
 * @param params // 需要传递的参数
 */
function _broadcast(componentName, eventName, params) {
  // 循环子节点找到名称一样的子节点 否则 递归 当前子节点
  var $children;
  $children = this.$children;
  $children.map(function (child) {
    if (componentName === child.$options.name) {
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      _broadcast.apply(child, [componentName, eventName].concat(params));
    }
  });
}
var _default = {
  methods: {
    /**
     * 派发 (向上查找) (一个)
     * @param componentName // 需要找的组件的名称
     * @param eventName // 事件名称
     * @param params // 需要传递的参数
     */
    dispatch: function dispatch(componentName, eventName, params) {
      var parent = this.$parent || this.$root; //$parent 找到最近的父节点 $root 根节点
      var name = parent.$options.name; // 获取当前组件实例的name
      // 如果当前有节点 && 当前没名称 且 当前名称等于需要传进来的名称的时候就去查找当前的节点
      // 循环出当前名称的一样的组件实例
      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;
        if (parent) {
          name = parent.$options.name;
        }
      }
      // 有节点表示当前找到了name一样的实例
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },
    /**
     * 广播 (向下查找) (广播多个)
     * @param componentName // 需要找的组件的名称
     * @param eventName // 事件名称
     * @param params // 需要传递的参数
     */
    broadcast: function broadcast(componentName, eventName, params) {
      _broadcast.call(this, componentName, eventName, params);
    }
  }
};
exports.default = _default;

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 32:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    if(typeof renderjs.beforeCreate === 'function'){
			renderjs.beforeCreate = [renderjs.beforeCreate]
		}
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 33:
/*!************************************************************!*\
  !*** F:/to_LHR/code/vue2/uni_modules/vk-uview-ui/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mixin = _interopRequireDefault(__webpack_require__(/*! ./libs/mixin/mixin.js */ 34));
var _request = _interopRequireDefault(__webpack_require__(/*! ./libs/request */ 35));
var _queryParams = _interopRequireDefault(__webpack_require__(/*! ./libs/function/queryParams.js */ 39));
var _route = _interopRequireDefault(__webpack_require__(/*! ./libs/function/route.js */ 40));
var _timeFormat = _interopRequireDefault(__webpack_require__(/*! ./libs/function/timeFormat.js */ 44));
var _timeFrom = _interopRequireDefault(__webpack_require__(/*! ./libs/function/timeFrom.js */ 45));
var _colorGradient = _interopRequireDefault(__webpack_require__(/*! ./libs/function/colorGradient.js */ 46));
var _guid = _interopRequireDefault(__webpack_require__(/*! ./libs/function/guid.js */ 47));
var _color = _interopRequireDefault(__webpack_require__(/*! ./libs/function/color.js */ 48));
var _type2icon = _interopRequireDefault(__webpack_require__(/*! ./libs/function/type2icon.js */ 49));
var _randomArray = _interopRequireDefault(__webpack_require__(/*! ./libs/function/randomArray.js */ 50));
var _deepClone = _interopRequireDefault(__webpack_require__(/*! ./libs/function/deepClone.js */ 37));
var _deepMerge = _interopRequireDefault(__webpack_require__(/*! ./libs/function/deepMerge.js */ 36));
var _addUnit = _interopRequireDefault(__webpack_require__(/*! ./libs/function/addUnit.js */ 51));
var _test = _interopRequireDefault(__webpack_require__(/*! ./libs/function/test.js */ 38));
var _random = _interopRequireDefault(__webpack_require__(/*! ./libs/function/random.js */ 52));
var _trim = _interopRequireDefault(__webpack_require__(/*! ./libs/function/trim.js */ 53));
var _toast = _interopRequireDefault(__webpack_require__(/*! ./libs/function/toast.js */ 54));
var _getParent = _interopRequireDefault(__webpack_require__(/*! ./libs/function/getParent.js */ 55));
var _$parent = _interopRequireDefault(__webpack_require__(/*! ./libs/function/$parent.js */ 56));
var _sys = __webpack_require__(/*! ./libs/function/sys.js */ 57);
var _debounce = _interopRequireDefault(__webpack_require__(/*! ./libs/function/debounce.js */ 58));
var _throttle = _interopRequireDefault(__webpack_require__(/*! ./libs/function/throttle.js */ 59));
var _config = _interopRequireDefault(__webpack_require__(/*! ./libs/config/config.js */ 60));
var _zIndex = _interopRequireDefault(__webpack_require__(/*! ./libs/config/zIndex.js */ 61));
// 引入全局mixin

// 引入关于是否mixin集成小程序分享的配置
// import wxshare from './libs/mixin/mpShare.js'
// 全局挂载引入http相关请求拦截插件

function wranning(str) {
  // 开发环境进行信息输出,主要是一些报错信息
  // 这个环境的来由是在程序编写时候,点击hx编辑器运行调试代码的时候,详见:
  // 	https://uniapp.dcloud.io/frame?id=%e5%bc%80%e5%8f%91%e7%8e%af%e5%a2%83%e5%92%8c%e7%94%9f%e4%ba%a7%e7%8e%af%e5%a2%83
  if (true) {
    console.warn(str);
  }
}

// 尝试判断在根目录的/store中是否有$u.mixin.js，此文件uView默认为需要挂在到全局的vuex的state变量
// HX2.6.11版本,放到try中,控制台依然会警告,暂时不用此方式，
// let vuexStore = {};
// try {
// 	vuexStore = require("@/store/$u.mixin.js");
// } catch (e) {
// 	//TODO handle the exception
// }

// post类型对象参数转为get类型url参数

var $u = {
  queryParams: _queryParams.default,
  route: _route.default,
  timeFormat: _timeFormat.default,
  date: _timeFormat.default,
  // 另名date
  timeFrom: _timeFrom.default,
  colorGradient: _colorGradient.default.colorGradient,
  colorToRgba: _colorGradient.default.colorToRgba,
  guid: _guid.default,
  color: _color.default,
  sys: _sys.sys,
  os: _sys.os,
  type2icon: _type2icon.default,
  randomArray: _randomArray.default,
  wranning: wranning,
  get: _request.default.get,
  post: _request.default.post,
  put: _request.default.put,
  'delete': _request.default.delete,
  hexToRgb: _colorGradient.default.hexToRgb,
  rgbToHex: _colorGradient.default.rgbToHex,
  test: _test.default,
  random: _random.default,
  deepClone: _deepClone.default,
  deepMerge: _deepMerge.default,
  getParent: _getParent.default,
  $parent: _$parent.default,
  addUnit: _addUnit.default,
  trim: _trim.default,
  type: ['primary', 'success', 'error', 'warning', 'info'],
  http: _request.default,
  toast: _toast.default,
  config: _config.default,
  // uView配置信息相关，比如版本号
  zIndex: _zIndex.default,
  debounce: _debounce.default,
  throttle: _throttle.default
};

// $u挂载到uni对象上
uni.$u = $u;
var install = function install(Vue) {
  Vue.mixin(_mixin.default);
  if (Vue.prototype.openShare) {
    Vue.mixin(mpShare);
  }
  // Vue.mixin(vuexStore);
  // 时间格式化，同时两个名称，date和timeFormat
  Vue.filter('timeFormat', function (timestamp, format) {
    return (0, _timeFormat.default)(timestamp, format);
  });
  Vue.filter('date', function (timestamp, format) {
    return (0, _timeFormat.default)(timestamp, format);
  });
  // 将多久以前的方法，注入到全局过滤器
  Vue.filter('timeFrom', function (timestamp, format) {
    return (0, _timeFrom.default)(timestamp, format);
  });
  Vue.prototype.$u = $u;
};
var _default = {
  install: install
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 331:
/*!*******************************************************************************!*\
  !*** F:/to_LHR/code/vue2/uni_modules/vk-uview-ui/libs/address/provinces.json ***!
  \*******************************************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"code\":\"110000\",\"name\":\"北京市\"},{\"code\":\"120000\",\"name\":\"天津市\"},{\"code\":\"130000\",\"name\":\"河北省\"},{\"code\":\"140000\",\"name\":\"山西省\"},{\"code\":\"150000\",\"name\":\"内蒙古自治区\"},{\"code\":\"210000\",\"name\":\"辽宁省\"},{\"code\":\"220000\",\"name\":\"吉林省\"},{\"code\":\"230000\",\"name\":\"黑龙江省\"},{\"code\":\"310000\",\"name\":\"上海市\"},{\"code\":\"320000\",\"name\":\"江苏省\"},{\"code\":\"330000\",\"name\":\"浙江省\"},{\"code\":\"340000\",\"name\":\"安徽省\"},{\"code\":\"350000\",\"name\":\"福建省\"},{\"code\":\"360000\",\"name\":\"江西省\"},{\"code\":\"370000\",\"name\":\"山东省\"},{\"code\":\"410000\",\"name\":\"河南省\"},{\"code\":\"420000\",\"name\":\"湖北省\"},{\"code\":\"430000\",\"name\":\"湖南省\"},{\"code\":\"440000\",\"name\":\"广东省\"},{\"code\":\"450000\",\"name\":\"广西壮族自治区\"},{\"code\":\"460000\",\"name\":\"海南省\"},{\"code\":\"500000\",\"name\":\"重庆市\"},{\"code\":\"510000\",\"name\":\"四川省\"},{\"code\":\"520000\",\"name\":\"贵州省\"},{\"code\":\"530000\",\"name\":\"云南省\"},{\"code\":\"540000\",\"name\":\"西藏自治区\"},{\"code\":\"610000\",\"name\":\"陕西省\"},{\"code\":\"620000\",\"name\":\"甘肃省\"},{\"code\":\"630000\",\"name\":\"青海省\"},{\"code\":\"640000\",\"name\":\"宁夏回族自治区\"},{\"code\":\"650000\",\"name\":\"新疆维吾尔自治区\"},{\"code\":\"710000\",\"name\":\"台湾省\"},{\"code\":\"810000\",\"name\":\"香港特别行政区\"},{\"code\":\"820000\",\"name\":\"澳门特别行政区\"}]");

/***/ }),

/***/ 332:
/*!***************************************************************************!*\
  !*** F:/to_LHR/code/vue2/uni_modules/vk-uview-ui/libs/address/citys.json ***!
  \***************************************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, default */
/***/ (function(module) {

module.exports = JSON.parse("[[{\"code\":\"110100\",\"name\":\"北京市\"}],[{\"code\":\"120100\",\"name\":\"天津市\"}],[{\"code\":\"130100\",\"name\":\"石家庄市\"},{\"code\":\"130200\",\"name\":\"唐山市\"},{\"code\":\"130300\",\"name\":\"秦皇岛市\"},{\"code\":\"130400\",\"name\":\"邯郸市\"},{\"code\":\"130500\",\"name\":\"邢台市\"},{\"code\":\"130600\",\"name\":\"保定市\"},{\"code\":\"130700\",\"name\":\"张家口市\"},{\"code\":\"130800\",\"name\":\"承德市\"},{\"code\":\"130900\",\"name\":\"沧州市\"},{\"code\":\"131000\",\"name\":\"廊坊市\"},{\"code\":\"131100\",\"name\":\"衡水市\"}],[{\"code\":\"140100\",\"name\":\"太原市\"},{\"code\":\"140200\",\"name\":\"大同市\"},{\"code\":\"140300\",\"name\":\"阳泉市\"},{\"code\":\"140400\",\"name\":\"长治市\"},{\"code\":\"140500\",\"name\":\"晋城市\"},{\"code\":\"140600\",\"name\":\"朔州市\"},{\"code\":\"140700\",\"name\":\"晋中市\"},{\"code\":\"140800\",\"name\":\"运城市\"},{\"code\":\"140900\",\"name\":\"忻州市\"},{\"code\":\"141000\",\"name\":\"临汾市\"},{\"code\":\"141100\",\"name\":\"吕梁市\"}],[{\"code\":\"150100\",\"name\":\"呼和浩特市\"},{\"code\":\"150200\",\"name\":\"包头市\"},{\"code\":\"150300\",\"name\":\"乌海市\"},{\"code\":\"150400\",\"name\":\"赤峰市\"},{\"code\":\"150500\",\"name\":\"通辽市\"},{\"code\":\"150600\",\"name\":\"鄂尔多斯市\"},{\"code\":\"150700\",\"name\":\"呼伦贝尔市\"},{\"code\":\"150800\",\"name\":\"巴彦淖尔市\"},{\"code\":\"150900\",\"name\":\"乌兰察布市\"},{\"code\":\"152200\",\"name\":\"兴安盟\"},{\"code\":\"152500\",\"name\":\"锡林郭勒盟\"},{\"code\":\"152900\",\"name\":\"阿拉善盟\"}],[{\"code\":\"210100\",\"name\":\"沈阳市\"},{\"code\":\"210200\",\"name\":\"大连市\"},{\"code\":\"210300\",\"name\":\"鞍山市\"},{\"code\":\"210400\",\"name\":\"抚顺市\"},{\"code\":\"210500\",\"name\":\"本溪市\"},{\"code\":\"210600\",\"name\":\"丹东市\"},{\"code\":\"210700\",\"name\":\"锦州市\"},{\"code\":\"210800\",\"name\":\"营口市\"},{\"code\":\"210900\",\"name\":\"阜新市\"},{\"code\":\"211000\",\"name\":\"辽阳市\"},{\"code\":\"211100\",\"name\":\"盘锦市\"},{\"code\":\"211200\",\"name\":\"铁岭市\"},{\"code\":\"211300\",\"name\":\"朝阳市\"},{\"code\":\"211400\",\"name\":\"葫芦岛市\"}],[{\"code\":\"220100\",\"name\":\"长春市\"},{\"code\":\"220200\",\"name\":\"吉林市\"},{\"code\":\"220300\",\"name\":\"四平市\"},{\"code\":\"220400\",\"name\":\"辽源市\"},{\"code\":\"220500\",\"name\":\"通化市\"},{\"code\":\"220600\",\"name\":\"白山市\"},{\"code\":\"220700\",\"name\":\"松原市\"},{\"code\":\"220800\",\"name\":\"白城市\"},{\"code\":\"222400\",\"name\":\"延边朝鲜族自治州\"}],[{\"code\":\"230100\",\"name\":\"哈尔滨市\"},{\"code\":\"230200\",\"name\":\"齐齐哈尔市\"},{\"code\":\"230300\",\"name\":\"鸡西市\"},{\"code\":\"230400\",\"name\":\"鹤岗市\"},{\"code\":\"230500\",\"name\":\"双鸭山市\"},{\"code\":\"230600\",\"name\":\"大庆市\"},{\"code\":\"230700\",\"name\":\"伊春市\"},{\"code\":\"230800\",\"name\":\"佳木斯市\"},{\"code\":\"230900\",\"name\":\"七台河市\"},{\"code\":\"231000\",\"name\":\"牡丹江市\"},{\"code\":\"231100\",\"name\":\"黑河市\"},{\"code\":\"231200\",\"name\":\"绥化市\"},{\"code\":\"232700\",\"name\":\"大兴安岭地区\"}],[{\"code\":\"310100\",\"name\":\"上海市\"}],[{\"code\":\"320100\",\"name\":\"南京市\"},{\"code\":\"320200\",\"name\":\"无锡市\"},{\"code\":\"320300\",\"name\":\"徐州市\"},{\"code\":\"320400\",\"name\":\"常州市\"},{\"code\":\"320500\",\"name\":\"苏州市\"},{\"code\":\"320600\",\"name\":\"南通市\"},{\"code\":\"320700\",\"name\":\"连云港市\"},{\"code\":\"320800\",\"name\":\"淮安市\"},{\"code\":\"320900\",\"name\":\"盐城市\"},{\"code\":\"321000\",\"name\":\"扬州市\"},{\"code\":\"321100\",\"name\":\"镇江市\"},{\"code\":\"321200\",\"name\":\"泰州市\"},{\"code\":\"321300\",\"name\":\"宿迁市\"}],[{\"code\":\"330100\",\"name\":\"杭州市\"},{\"code\":\"330200\",\"name\":\"宁波市\"},{\"code\":\"330300\",\"name\":\"温州市\"},{\"code\":\"330400\",\"name\":\"嘉兴市\"},{\"code\":\"330500\",\"name\":\"湖州市\"},{\"code\":\"330600\",\"name\":\"绍兴市\"},{\"code\":\"330700\",\"name\":\"金华市\"},{\"code\":\"330800\",\"name\":\"衢州市\"},{\"code\":\"330900\",\"name\":\"舟山市\"},{\"code\":\"331000\",\"name\":\"台州市\"},{\"code\":\"331100\",\"name\":\"丽水市\"}],[{\"code\":\"340100\",\"name\":\"合肥市\"},{\"code\":\"340200\",\"name\":\"芜湖市\"},{\"code\":\"340300\",\"name\":\"蚌埠市\"},{\"code\":\"340400\",\"name\":\"淮南市\"},{\"code\":\"340500\",\"name\":\"马鞍山市\"},{\"code\":\"340600\",\"name\":\"淮北市\"},{\"code\":\"340700\",\"name\":\"铜陵市\"},{\"code\":\"340800\",\"name\":\"安庆市\"},{\"code\":\"341000\",\"name\":\"黄山市\"},{\"code\":\"341100\",\"name\":\"滁州市\"},{\"code\":\"341200\",\"name\":\"阜阳市\"},{\"code\":\"341300\",\"name\":\"宿州市\"},{\"code\":\"341500\",\"name\":\"六安市\"},{\"code\":\"341600\",\"name\":\"亳州市\"},{\"code\":\"341700\",\"name\":\"池州市\"},{\"code\":\"341800\",\"name\":\"宣城市\"}],[{\"code\":\"350100\",\"name\":\"福州市\"},{\"code\":\"350200\",\"name\":\"厦门市\"},{\"code\":\"350300\",\"name\":\"莆田市\"},{\"code\":\"350400\",\"name\":\"三明市\"},{\"code\":\"350500\",\"name\":\"泉州市\"},{\"code\":\"350600\",\"name\":\"漳州市\"},{\"code\":\"350700\",\"name\":\"南平市\"},{\"code\":\"350800\",\"name\":\"龙岩市\"},{\"code\":\"350900\",\"name\":\"宁德市\"}],[{\"code\":\"360100\",\"name\":\"南昌市\"},{\"code\":\"360200\",\"name\":\"景德镇市\"},{\"code\":\"360300\",\"name\":\"萍乡市\"},{\"code\":\"360400\",\"name\":\"九江市\"},{\"code\":\"360500\",\"name\":\"新余市\"},{\"code\":\"360600\",\"name\":\"鹰潭市\"},{\"code\":\"360700\",\"name\":\"赣州市\"},{\"code\":\"360800\",\"name\":\"吉安市\"},{\"code\":\"360900\",\"name\":\"宜春市\"},{\"code\":\"361000\",\"name\":\"抚州市\"},{\"code\":\"361100\",\"name\":\"上饶市\"}],[{\"code\":\"370100\",\"name\":\"济南市\"},{\"code\":\"370200\",\"name\":\"青岛市\"},{\"code\":\"370300\",\"name\":\"淄博市\"},{\"code\":\"370400\",\"name\":\"枣庄市\"},{\"code\":\"370500\",\"name\":\"东营市\"},{\"code\":\"370600\",\"name\":\"烟台市\"},{\"code\":\"370700\",\"name\":\"潍坊市\"},{\"code\":\"370800\",\"name\":\"济宁市\"},{\"code\":\"370900\",\"name\":\"泰安市\"},{\"code\":\"371000\",\"name\":\"威海市\"},{\"code\":\"371100\",\"name\":\"日照市\"},{\"code\":\"371200\",\"name\":\"莱芜市\"},{\"code\":\"371300\",\"name\":\"临沂市\"},{\"code\":\"371400\",\"name\":\"德州市\"},{\"code\":\"371500\",\"name\":\"聊城市\"},{\"code\":\"371600\",\"name\":\"滨州市\"},{\"code\":\"371700\",\"name\":\"菏泽市\"}],[{\"code\":\"410100\",\"name\":\"郑州市\"},{\"code\":\"410200\",\"name\":\"开封市\"},{\"code\":\"410300\",\"name\":\"洛阳市\"},{\"code\":\"410400\",\"name\":\"平顶山市\"},{\"code\":\"410500\",\"name\":\"安阳市\"},{\"code\":\"410600\",\"name\":\"鹤壁市\"},{\"code\":\"410700\",\"name\":\"新乡市\"},{\"code\":\"410800\",\"name\":\"焦作市\"},{\"code\":\"410900\",\"name\":\"濮阳市\"},{\"code\":\"411000\",\"name\":\"许昌市\"},{\"code\":\"411100\",\"name\":\"漯河市\"},{\"code\":\"411200\",\"name\":\"三门峡市\"},{\"code\":\"411300\",\"name\":\"南阳市\"},{\"code\":\"411400\",\"name\":\"商丘市\"},{\"code\":\"411500\",\"name\":\"信阳市\"},{\"code\":\"411600\",\"name\":\"周口市\"},{\"code\":\"411700\",\"name\":\"驻马店市\"},{\"code\":\"419000\",\"name\":\"省直辖县级行政区划\"}],[{\"code\":\"420100\",\"name\":\"武汉市\"},{\"code\":\"420200\",\"name\":\"黄石市\"},{\"code\":\"420300\",\"name\":\"十堰市\"},{\"code\":\"420500\",\"name\":\"宜昌市\"},{\"code\":\"420600\",\"name\":\"襄阳市\"},{\"code\":\"420700\",\"name\":\"鄂州市\"},{\"code\":\"420800\",\"name\":\"荆门市\"},{\"code\":\"420900\",\"name\":\"孝感市\"},{\"code\":\"421000\",\"name\":\"荆州市\"},{\"code\":\"421100\",\"name\":\"黄冈市\"},{\"code\":\"421200\",\"name\":\"咸宁市\"},{\"code\":\"421300\",\"name\":\"随州市\"},{\"code\":\"422800\",\"name\":\"恩施土家族苗族自治州\"},{\"code\":\"429000\",\"name\":\"省直辖县级行政区划\"}],[{\"code\":\"430100\",\"name\":\"长沙市\"},{\"code\":\"430200\",\"name\":\"株洲市\"},{\"code\":\"430300\",\"name\":\"湘潭市\"},{\"code\":\"430400\",\"name\":\"衡阳市\"},{\"code\":\"430500\",\"name\":\"邵阳市\"},{\"code\":\"430600\",\"name\":\"岳阳市\"},{\"code\":\"430700\",\"name\":\"常德市\"},{\"code\":\"430800\",\"name\":\"张家界市\"},{\"code\":\"430900\",\"name\":\"益阳市\"},{\"code\":\"431000\",\"name\":\"郴州市\"},{\"code\":\"431100\",\"name\":\"永州市\"},{\"code\":\"431200\",\"name\":\"怀化市\"},{\"code\":\"431300\",\"name\":\"娄底市\"},{\"code\":\"433100\",\"name\":\"湘西土家族苗族自治州\"}],[{\"code\":\"440100\",\"name\":\"广州市\"},{\"code\":\"440200\",\"name\":\"韶关市\"},{\"code\":\"440300\",\"name\":\"深圳市\"},{\"code\":\"440400\",\"name\":\"珠海市\"},{\"code\":\"440500\",\"name\":\"汕头市\"},{\"code\":\"440600\",\"name\":\"佛山市\"},{\"code\":\"440700\",\"name\":\"江门市\"},{\"code\":\"440800\",\"name\":\"湛江市\"},{\"code\":\"440900\",\"name\":\"茂名市\"},{\"code\":\"441200\",\"name\":\"肇庆市\"},{\"code\":\"441300\",\"name\":\"惠州市\"},{\"code\":\"441400\",\"name\":\"梅州市\"},{\"code\":\"441500\",\"name\":\"汕尾市\"},{\"code\":\"441600\",\"name\":\"河源市\"},{\"code\":\"441700\",\"name\":\"阳江市\"},{\"code\":\"441800\",\"name\":\"清远市\"},{\"code\":\"441900\",\"name\":\"东莞市\"},{\"code\":\"442000\",\"name\":\"中山市\"},{\"code\":\"445100\",\"name\":\"潮州市\"},{\"code\":\"445200\",\"name\":\"揭阳市\"},{\"code\":\"445300\",\"name\":\"云浮市\"}],[{\"code\":\"450100\",\"name\":\"南宁市\"},{\"code\":\"450200\",\"name\":\"柳州市\"},{\"code\":\"450300\",\"name\":\"桂林市\"},{\"code\":\"450400\",\"name\":\"梧州市\"},{\"code\":\"450500\",\"name\":\"北海市\"},{\"code\":\"450600\",\"name\":\"防城港市\"},{\"code\":\"450700\",\"name\":\"钦州市\"},{\"code\":\"450800\",\"name\":\"贵港市\"},{\"code\":\"450900\",\"name\":\"玉林市\"},{\"code\":\"451000\",\"name\":\"百色市\"},{\"code\":\"451100\",\"name\":\"贺州市\"},{\"code\":\"451200\",\"name\":\"河池市\"},{\"code\":\"451300\",\"name\":\"来宾市\"},{\"code\":\"451400\",\"name\":\"崇左市\"}],[{\"code\":\"460100\",\"name\":\"海口市\"},{\"code\":\"460200\",\"name\":\"三亚市\"},{\"code\":\"460300\",\"name\":\"三沙市\"},{\"code\":\"460400\",\"name\":\"儋州市\"},{\"code\":\"469000\",\"name\":\"省直辖县级行政区划\"}],[{\"code\":\"500100\",\"name\":\"重庆市\"},{\"code\":\"500200\",\"name\":\"县\"}],[{\"code\":\"510100\",\"name\":\"成都市\"},{\"code\":\"510300\",\"name\":\"自贡市\"},{\"code\":\"510400\",\"name\":\"攀枝花市\"},{\"code\":\"510500\",\"name\":\"泸州市\"},{\"code\":\"510600\",\"name\":\"德阳市\"},{\"code\":\"510700\",\"name\":\"绵阳市\"},{\"code\":\"510800\",\"name\":\"广元市\"},{\"code\":\"510900\",\"name\":\"遂宁市\"},{\"code\":\"511000\",\"name\":\"内江市\"},{\"code\":\"511100\",\"name\":\"乐山市\"},{\"code\":\"511300\",\"name\":\"南充市\"},{\"code\":\"511400\",\"name\":\"眉山市\"},{\"code\":\"511500\",\"name\":\"宜宾市\"},{\"code\":\"511600\",\"name\":\"广安市\"},{\"code\":\"511700\",\"name\":\"达州市\"},{\"code\":\"511800\",\"name\":\"雅安市\"},{\"code\":\"511900\",\"name\":\"巴中市\"},{\"code\":\"512000\",\"name\":\"资阳市\"},{\"code\":\"513200\",\"name\":\"阿坝藏族羌族自治州\"},{\"code\":\"513300\",\"name\":\"甘孜藏族自治州\"},{\"code\":\"513400\",\"name\":\"凉山彝族自治州\"}],[{\"code\":\"520100\",\"name\":\"贵阳市\"},{\"code\":\"520200\",\"name\":\"六盘水市\"},{\"code\":\"520300\",\"name\":\"遵义市\"},{\"code\":\"520400\",\"name\":\"安顺市\"},{\"code\":\"520500\",\"name\":\"毕节市\"},{\"code\":\"520600\",\"name\":\"铜仁市\"},{\"code\":\"522300\",\"name\":\"黔西南布依族苗族自治州\"},{\"code\":\"522600\",\"name\":\"黔东南苗族侗族自治州\"},{\"code\":\"522700\",\"name\":\"黔南布依族苗族自治州\"}],[{\"code\":\"530100\",\"name\":\"昆明市\"},{\"code\":\"530300\",\"name\":\"曲靖市\"},{\"code\":\"530400\",\"name\":\"玉溪市\"},{\"code\":\"530500\",\"name\":\"保山市\"},{\"code\":\"530600\",\"name\":\"昭通市\"},{\"code\":\"530700\",\"name\":\"丽江市\"},{\"code\":\"530800\",\"name\":\"普洱市\"},{\"code\":\"530900\",\"name\":\"临沧市\"},{\"code\":\"532300\",\"name\":\"楚雄彝族自治州\"},{\"code\":\"532500\",\"name\":\"红河哈尼族彝族自治州\"},{\"code\":\"532600\",\"name\":\"文山壮族苗族自治州\"},{\"code\":\"532800\",\"name\":\"西双版纳傣族自治州\"},{\"code\":\"532900\",\"name\":\"大理白族自治州\"},{\"code\":\"533100\",\"name\":\"德宏傣族景颇族自治州\"},{\"code\":\"533300\",\"name\":\"怒江傈僳族自治州\"},{\"code\":\"533400\",\"name\":\"迪庆藏族自治州\"}],[{\"code\":\"540100\",\"name\":\"拉萨市\"},{\"code\":\"540200\",\"name\":\"日喀则市\"},{\"code\":\"540300\",\"name\":\"昌都市\"},{\"code\":\"540400\",\"name\":\"林芝市\"},{\"code\":\"540500\",\"name\":\"山南市\"},{\"code\":\"542400\",\"name\":\"那曲地区\"},{\"code\":\"542500\",\"name\":\"阿里地区\"}],[{\"code\":\"610100\",\"name\":\"西安市\"},{\"code\":\"610200\",\"name\":\"铜川市\"},{\"code\":\"610300\",\"name\":\"宝鸡市\"},{\"code\":\"610400\",\"name\":\"咸阳市\"},{\"code\":\"610500\",\"name\":\"渭南市\"},{\"code\":\"610600\",\"name\":\"延安市\"},{\"code\":\"610700\",\"name\":\"汉中市\"},{\"code\":\"610800\",\"name\":\"榆林市\"},{\"code\":\"610900\",\"name\":\"安康市\"},{\"code\":\"611000\",\"name\":\"商洛市\"}],[{\"code\":\"620100\",\"name\":\"兰州市\"},{\"code\":\"620200\",\"name\":\"嘉峪关市\"},{\"code\":\"620300\",\"name\":\"金昌市\"},{\"code\":\"620400\",\"name\":\"白银市\"},{\"code\":\"620500\",\"name\":\"天水市\"},{\"code\":\"620600\",\"name\":\"武威市\"},{\"code\":\"620700\",\"name\":\"张掖市\"},{\"code\":\"620800\",\"name\":\"平凉市\"},{\"code\":\"620900\",\"name\":\"酒泉市\"},{\"code\":\"621000\",\"name\":\"庆阳市\"},{\"code\":\"621100\",\"name\":\"定西市\"},{\"code\":\"621200\",\"name\":\"陇南市\"},{\"code\":\"622900\",\"name\":\"临夏回族自治州\"},{\"code\":\"623000\",\"name\":\"甘南藏族自治州\"}],[{\"code\":\"630100\",\"name\":\"西宁市\"},{\"code\":\"630200\",\"name\":\"海东市\"},{\"code\":\"632200\",\"name\":\"海北藏族自治州\"},{\"code\":\"632300\",\"name\":\"黄南藏族自治州\"},{\"code\":\"632500\",\"name\":\"海南藏族自治州\"},{\"code\":\"632600\",\"name\":\"果洛藏族自治州\"},{\"code\":\"632700\",\"name\":\"玉树藏族自治州\"},{\"code\":\"632800\",\"name\":\"海西蒙古族藏族自治州\"}],[{\"code\":\"640100\",\"name\":\"银川市\"},{\"code\":\"640200\",\"name\":\"石嘴山市\"},{\"code\":\"640300\",\"name\":\"吴忠市\"},{\"code\":\"640400\",\"name\":\"固原市\"},{\"code\":\"640500\",\"name\":\"中卫市\"}],[{\"code\":\"650100\",\"name\":\"乌鲁木齐市\"},{\"code\":\"650200\",\"name\":\"克拉玛依市\"},{\"code\":\"650400\",\"name\":\"吐鲁番市\"},{\"code\":\"650500\",\"name\":\"哈密市\"},{\"code\":\"652300\",\"name\":\"昌吉回族自治州\"},{\"code\":\"652700\",\"name\":\"博尔塔拉蒙古自治州\"},{\"code\":\"652800\",\"name\":\"巴音郭楞蒙古自治州\"},{\"code\":\"652900\",\"name\":\"阿克苏地区\"},{\"code\":\"653000\",\"name\":\"克孜勒苏柯尔克孜自治州\"},{\"code\":\"653100\",\"name\":\"喀什地区\"},{\"code\":\"653200\",\"name\":\"和田地区\"},{\"code\":\"654000\",\"name\":\"伊犁哈萨克自治州\"},{\"code\":\"654200\",\"name\":\"塔城地区\"},{\"code\":\"654300\",\"name\":\"阿勒泰地区\"},{\"code\":\"659000\",\"name\":\"自治区直辖县级行政区划\"}],[{\"code\":\"710100\",\"name\":\"台北市\"},{\"code\":\"710200\",\"name\":\"高雄市\"},{\"code\":\"710300\",\"name\":\"台南市\"},{\"code\":\"710400\",\"name\":\"台中市\"},{\"code\":\"710600\",\"name\":\"南投县\"},{\"code\":\"710700\",\"name\":\"基隆市\"},{\"code\":\"710800\",\"name\":\"新竹市\"},{\"code\":\"710900\",\"name\":\"嘉义市\"},{\"code\":\"711100\",\"name\":\"新北市\"},{\"code\":\"711200\",\"name\":\"宜兰县\"},{\"code\":\"711300\",\"name\":\"新竹县\"},{\"code\":\"711400\",\"name\":\"桃园市\"},{\"code\":\"711500\",\"name\":\"苗栗县\"},{\"code\":\"711700\",\"name\":\"彰化县\"},{\"code\":\"711900\",\"name\":\"嘉义县\"},{\"code\":\"712100\",\"name\":\"云林县\"},{\"code\":\"712400\",\"name\":\"屏东县\"},{\"code\":\"712500\",\"name\":\"台东县\"},{\"code\":\"712600\",\"name\":\"花莲县\"},{\"code\":\"712700\",\"name\":\"澎湖县\"}],[{\"code\":\"810100\",\"name\":\"香港特别行政区\"}],[{\"code\":\"820100\",\"name\":\"澳门特别行政区\"}]]");

/***/ }),

/***/ 333:
/*!***************************************************************************!*\
  !*** F:/to_LHR/code/vue2/uni_modules/vk-uview-ui/libs/address/areas.json ***!
  \***************************************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, default */
/***/ (function(module) {

module.exports = JSON.parse("[[[{\"code\":\"110101\",\"name\":\"东城区\"},{\"code\":\"110102\",\"name\":\"西城区\"},{\"code\":\"110105\",\"name\":\"朝阳区\"},{\"code\":\"110106\",\"name\":\"丰台区\"},{\"code\":\"110107\",\"name\":\"石景山区\"},{\"code\":\"110108\",\"name\":\"海淀区\"},{\"code\":\"110109\",\"name\":\"门头沟区\"},{\"code\":\"110111\",\"name\":\"房山区\"},{\"code\":\"110112\",\"name\":\"通州区\"},{\"code\":\"110113\",\"name\":\"顺义区\"},{\"code\":\"110114\",\"name\":\"昌平区\"},{\"code\":\"110115\",\"name\":\"大兴区\"},{\"code\":\"110116\",\"name\":\"怀柔区\"},{\"code\":\"110117\",\"name\":\"平谷区\"},{\"code\":\"110118\",\"name\":\"密云区\"},{\"code\":\"110119\",\"name\":\"延庆区\"}]],[[{\"code\":\"120101\",\"name\":\"和平区\"},{\"code\":\"120102\",\"name\":\"河东区\"},{\"code\":\"120103\",\"name\":\"河西区\"},{\"code\":\"120104\",\"name\":\"南开区\"},{\"code\":\"120105\",\"name\":\"河北区\"},{\"code\":\"120106\",\"name\":\"红桥区\"},{\"code\":\"120110\",\"name\":\"东丽区\"},{\"code\":\"120111\",\"name\":\"西青区\"},{\"code\":\"120112\",\"name\":\"津南区\"},{\"code\":\"120113\",\"name\":\"北辰区\"},{\"code\":\"120114\",\"name\":\"武清区\"},{\"code\":\"120115\",\"name\":\"宝坻区\"},{\"code\":\"120116\",\"name\":\"滨海新区\"},{\"code\":\"120117\",\"name\":\"宁河区\"},{\"code\":\"120118\",\"name\":\"静海区\"},{\"code\":\"120119\",\"name\":\"蓟州区\"}]],[[{\"code\":\"130102\",\"name\":\"长安区\"},{\"code\":\"130104\",\"name\":\"桥西区\"},{\"code\":\"130105\",\"name\":\"新华区\"},{\"code\":\"130107\",\"name\":\"井陉矿区\"},{\"code\":\"130108\",\"name\":\"裕华区\"},{\"code\":\"130109\",\"name\":\"藁城区\"},{\"code\":\"130110\",\"name\":\"鹿泉区\"},{\"code\":\"130111\",\"name\":\"栾城区\"},{\"code\":\"130121\",\"name\":\"井陉县\"},{\"code\":\"130123\",\"name\":\"正定县\"},{\"code\":\"130125\",\"name\":\"行唐县\"},{\"code\":\"130126\",\"name\":\"灵寿县\"},{\"code\":\"130127\",\"name\":\"高邑县\"},{\"code\":\"130128\",\"name\":\"深泽县\"},{\"code\":\"130129\",\"name\":\"赞皇县\"},{\"code\":\"130130\",\"name\":\"无极县\"},{\"code\":\"130131\",\"name\":\"平山县\"},{\"code\":\"130132\",\"name\":\"元氏县\"},{\"code\":\"130133\",\"name\":\"赵县\"},{\"code\":\"130181\",\"name\":\"辛集市\"},{\"code\":\"130183\",\"name\":\"晋州市\"},{\"code\":\"130184\",\"name\":\"新乐市\"}],[{\"code\":\"130202\",\"name\":\"路南区\"},{\"code\":\"130203\",\"name\":\"路北区\"},{\"code\":\"130204\",\"name\":\"古冶区\"},{\"code\":\"130205\",\"name\":\"开平区\"},{\"code\":\"130207\",\"name\":\"丰南区\"},{\"code\":\"130208\",\"name\":\"丰润区\"},{\"code\":\"130209\",\"name\":\"曹妃甸区\"},{\"code\":\"130223\",\"name\":\"滦县\"},{\"code\":\"130224\",\"name\":\"滦南县\"},{\"code\":\"130225\",\"name\":\"乐亭县\"},{\"code\":\"130227\",\"name\":\"迁西县\"},{\"code\":\"130229\",\"name\":\"玉田县\"},{\"code\":\"130281\",\"name\":\"遵化市\"},{\"code\":\"130283\",\"name\":\"迁安市\"}],[{\"code\":\"130302\",\"name\":\"海港区\"},{\"code\":\"130303\",\"name\":\"山海关区\"},{\"code\":\"130304\",\"name\":\"北戴河区\"},{\"code\":\"130306\",\"name\":\"抚宁区\"},{\"code\":\"130321\",\"name\":\"青龙满族自治县\"},{\"code\":\"130322\",\"name\":\"昌黎县\"},{\"code\":\"130324\",\"name\":\"卢龙县\"}],[{\"code\":\"130402\",\"name\":\"邯山区\"},{\"code\":\"130403\",\"name\":\"丛台区\"},{\"code\":\"130404\",\"name\":\"复兴区\"},{\"code\":\"130406\",\"name\":\"峰峰矿区\"},{\"code\":\"130407\",\"name\":\"肥乡区\"},{\"code\":\"130408\",\"name\":\"永年区\"},{\"code\":\"130423\",\"name\":\"临漳县\"},{\"code\":\"130424\",\"name\":\"成安县\"},{\"code\":\"130425\",\"name\":\"大名县\"},{\"code\":\"130426\",\"name\":\"涉县\"},{\"code\":\"130427\",\"name\":\"磁县\"},{\"code\":\"130430\",\"name\":\"邱县\"},{\"code\":\"130431\",\"name\":\"鸡泽县\"},{\"code\":\"130432\",\"name\":\"广平县\"},{\"code\":\"130433\",\"name\":\"馆陶县\"},{\"code\":\"130434\",\"name\":\"魏县\"},{\"code\":\"130435\",\"name\":\"曲周县\"},{\"code\":\"130481\",\"name\":\"武安市\"}],[{\"code\":\"130502\",\"name\":\"桥东区\"},{\"code\":\"130503\",\"name\":\"桥西区\"},{\"code\":\"130521\",\"name\":\"邢台县\"},{\"code\":\"130522\",\"name\":\"临城县\"},{\"code\":\"130523\",\"name\":\"内丘县\"},{\"code\":\"130524\",\"name\":\"柏乡县\"},{\"code\":\"130525\",\"name\":\"隆尧县\"},{\"code\":\"130526\",\"name\":\"任县\"},{\"code\":\"130527\",\"name\":\"南和县\"},{\"code\":\"130528\",\"name\":\"宁晋县\"},{\"code\":\"130529\",\"name\":\"巨鹿县\"},{\"code\":\"130530\",\"name\":\"新河县\"},{\"code\":\"130531\",\"name\":\"广宗县\"},{\"code\":\"130532\",\"name\":\"平乡县\"},{\"code\":\"130533\",\"name\":\"威县\"},{\"code\":\"130534\",\"name\":\"清河县\"},{\"code\":\"130535\",\"name\":\"临西县\"},{\"code\":\"130581\",\"name\":\"南宫市\"},{\"code\":\"130582\",\"name\":\"沙河市\"}],[{\"code\":\"130602\",\"name\":\"竞秀区\"},{\"code\":\"130606\",\"name\":\"莲池区\"},{\"code\":\"130607\",\"name\":\"满城区\"},{\"code\":\"130608\",\"name\":\"清苑区\"},{\"code\":\"130609\",\"name\":\"徐水区\"},{\"code\":\"130623\",\"name\":\"涞水县\"},{\"code\":\"130624\",\"name\":\"阜平县\"},{\"code\":\"130626\",\"name\":\"定兴县\"},{\"code\":\"130627\",\"name\":\"唐县\"},{\"code\":\"130628\",\"name\":\"高阳县\"},{\"code\":\"130629\",\"name\":\"容城县\"},{\"code\":\"130630\",\"name\":\"涞源县\"},{\"code\":\"130631\",\"name\":\"望都县\"},{\"code\":\"130632\",\"name\":\"安新县\"},{\"code\":\"130633\",\"name\":\"易县\"},{\"code\":\"130634\",\"name\":\"曲阳县\"},{\"code\":\"130635\",\"name\":\"蠡县\"},{\"code\":\"130636\",\"name\":\"顺平县\"},{\"code\":\"130637\",\"name\":\"博野县\"},{\"code\":\"130638\",\"name\":\"雄县\"},{\"code\":\"130681\",\"name\":\"涿州市\"},{\"code\":\"130682\",\"name\":\"定州市\"},{\"code\":\"130683\",\"name\":\"安国市\"},{\"code\":\"130684\",\"name\":\"高碑店市\"}],[{\"code\":\"130702\",\"name\":\"桥东区\"},{\"code\":\"130703\",\"name\":\"桥西区\"},{\"code\":\"130705\",\"name\":\"宣化区\"},{\"code\":\"130706\",\"name\":\"下花园区\"},{\"code\":\"130708\",\"name\":\"万全区\"},{\"code\":\"130709\",\"name\":\"崇礼区\"},{\"code\":\"130722\",\"name\":\"张北县\"},{\"code\":\"130723\",\"name\":\"康保县\"},{\"code\":\"130724\",\"name\":\"沽源县\"},{\"code\":\"130725\",\"name\":\"尚义县\"},{\"code\":\"130726\",\"name\":\"蔚县\"},{\"code\":\"130727\",\"name\":\"阳原县\"},{\"code\":\"130728\",\"name\":\"怀安县\"},{\"code\":\"130730\",\"name\":\"怀来县\"},{\"code\":\"130731\",\"name\":\"涿鹿县\"},{\"code\":\"130732\",\"name\":\"赤城县\"}],[{\"code\":\"130802\",\"name\":\"双桥区\"},{\"code\":\"130803\",\"name\":\"双滦区\"},{\"code\":\"130804\",\"name\":\"鹰手营子矿区\"},{\"code\":\"130821\",\"name\":\"承德县\"},{\"code\":\"130822\",\"name\":\"兴隆县\"},{\"code\":\"130824\",\"name\":\"滦平县\"},{\"code\":\"130825\",\"name\":\"隆化县\"},{\"code\":\"130826\",\"name\":\"丰宁满族自治县\"},{\"code\":\"130827\",\"name\":\"宽城满族自治县\"},{\"code\":\"130828\",\"name\":\"围场满族蒙古族自治县\"},{\"code\":\"130881\",\"name\":\"平泉市\"}],[{\"code\":\"130902\",\"name\":\"新华区\"},{\"code\":\"130903\",\"name\":\"运河区\"},{\"code\":\"130921\",\"name\":\"沧县\"},{\"code\":\"130922\",\"name\":\"青县\"},{\"code\":\"130923\",\"name\":\"东光县\"},{\"code\":\"130924\",\"name\":\"海兴县\"},{\"code\":\"130925\",\"name\":\"盐山县\"},{\"code\":\"130926\",\"name\":\"肃宁县\"},{\"code\":\"130927\",\"name\":\"南皮县\"},{\"code\":\"130928\",\"name\":\"吴桥县\"},{\"code\":\"130929\",\"name\":\"献县\"},{\"code\":\"130930\",\"name\":\"孟村回族自治县\"},{\"code\":\"130981\",\"name\":\"泊头市\"},{\"code\":\"130982\",\"name\":\"任丘市\"},{\"code\":\"130983\",\"name\":\"黄骅市\"},{\"code\":\"130984\",\"name\":\"河间市\"}],[{\"code\":\"131002\",\"name\":\"安次区\"},{\"code\":\"131003\",\"name\":\"广阳区\"},{\"code\":\"131022\",\"name\":\"固安县\"},{\"code\":\"131023\",\"name\":\"永清县\"},{\"code\":\"131024\",\"name\":\"香河县\"},{\"code\":\"131025\",\"name\":\"大城县\"},{\"code\":\"131026\",\"name\":\"文安县\"},{\"code\":\"131028\",\"name\":\"大厂回族自治县\"},{\"code\":\"131081\",\"name\":\"霸州市\"},{\"code\":\"131082\",\"name\":\"三河市\"}],[{\"code\":\"131102\",\"name\":\"桃城区\"},{\"code\":\"131103\",\"name\":\"冀州区\"},{\"code\":\"131121\",\"name\":\"枣强县\"},{\"code\":\"131122\",\"name\":\"武邑县\"},{\"code\":\"131123\",\"name\":\"武强县\"},{\"code\":\"131124\",\"name\":\"饶阳县\"},{\"code\":\"131125\",\"name\":\"安平县\"},{\"code\":\"131126\",\"name\":\"故城县\"},{\"code\":\"131127\",\"name\":\"景县\"},{\"code\":\"131128\",\"name\":\"阜城县\"},{\"code\":\"131182\",\"name\":\"深州市\"}]],[[{\"code\":\"140105\",\"name\":\"小店区\"},{\"code\":\"140106\",\"name\":\"迎泽区\"},{\"code\":\"140107\",\"name\":\"杏花岭区\"},{\"code\":\"140108\",\"name\":\"尖草坪区\"},{\"code\":\"140109\",\"name\":\"万柏林区\"},{\"code\":\"140110\",\"name\":\"晋源区\"},{\"code\":\"140121\",\"name\":\"清徐县\"},{\"code\":\"140122\",\"name\":\"阳曲县\"},{\"code\":\"140123\",\"name\":\"娄烦县\"},{\"code\":\"140181\",\"name\":\"古交市\"}],[{\"code\":\"140202\",\"name\":\"城区\"},{\"code\":\"140203\",\"name\":\"矿区\"},{\"code\":\"140211\",\"name\":\"南郊区\"},{\"code\":\"140212\",\"name\":\"新荣区\"},{\"code\":\"140221\",\"name\":\"阳高县\"},{\"code\":\"140222\",\"name\":\"天镇县\"},{\"code\":\"140223\",\"name\":\"广灵县\"},{\"code\":\"140224\",\"name\":\"灵丘县\"},{\"code\":\"140225\",\"name\":\"浑源县\"},{\"code\":\"140226\",\"name\":\"左云县\"},{\"code\":\"140227\",\"name\":\"大同县\"}],[{\"code\":\"140302\",\"name\":\"城区\"},{\"code\":\"140303\",\"name\":\"矿区\"},{\"code\":\"140311\",\"name\":\"郊区\"},{\"code\":\"140321\",\"name\":\"平定县\"},{\"code\":\"140322\",\"name\":\"盂县\"}],[{\"code\":\"140402\",\"name\":\"城区\"},{\"code\":\"140411\",\"name\":\"郊区\"},{\"code\":\"140421\",\"name\":\"长治县\"},{\"code\":\"140423\",\"name\":\"襄垣县\"},{\"code\":\"140424\",\"name\":\"屯留县\"},{\"code\":\"140425\",\"name\":\"平顺县\"},{\"code\":\"140426\",\"name\":\"黎城县\"},{\"code\":\"140427\",\"name\":\"壶关县\"},{\"code\":\"140428\",\"name\":\"长子县\"},{\"code\":\"140429\",\"name\":\"武乡县\"},{\"code\":\"140430\",\"name\":\"沁县\"},{\"code\":\"140431\",\"name\":\"沁源县\"},{\"code\":\"140481\",\"name\":\"潞城市\"}],[{\"code\":\"140502\",\"name\":\"城区\"},{\"code\":\"140521\",\"name\":\"沁水县\"},{\"code\":\"140522\",\"name\":\"阳城县\"},{\"code\":\"140524\",\"name\":\"陵川县\"},{\"code\":\"140525\",\"name\":\"泽州县\"},{\"code\":\"140581\",\"name\":\"高平市\"}],[{\"code\":\"140602\",\"name\":\"朔城区\"},{\"code\":\"140603\",\"name\":\"平鲁区\"},{\"code\":\"140621\",\"name\":\"山阴县\"},{\"code\":\"140622\",\"name\":\"应县\"},{\"code\":\"140623\",\"name\":\"右玉县\"},{\"code\":\"140624\",\"name\":\"怀仁县\"}],[{\"code\":\"140702\",\"name\":\"榆次区\"},{\"code\":\"140721\",\"name\":\"榆社县\"},{\"code\":\"140722\",\"name\":\"左权县\"},{\"code\":\"140723\",\"name\":\"和顺县\"},{\"code\":\"140724\",\"name\":\"昔阳县\"},{\"code\":\"140725\",\"name\":\"寿阳县\"},{\"code\":\"140726\",\"name\":\"太谷县\"},{\"code\":\"140727\",\"name\":\"祁县\"},{\"code\":\"140728\",\"name\":\"平遥县\"},{\"code\":\"140729\",\"name\":\"灵石县\"},{\"code\":\"140781\",\"name\":\"介休市\"}],[{\"code\":\"140802\",\"name\":\"盐湖区\"},{\"code\":\"140821\",\"name\":\"临猗县\"},{\"code\":\"140822\",\"name\":\"万荣县\"},{\"code\":\"140823\",\"name\":\"闻喜县\"},{\"code\":\"140824\",\"name\":\"稷山县\"},{\"code\":\"140825\",\"name\":\"新绛县\"},{\"code\":\"140826\",\"name\":\"绛县\"},{\"code\":\"140827\",\"name\":\"垣曲县\"},{\"code\":\"140828\",\"name\":\"夏县\"},{\"code\":\"140829\",\"name\":\"平陆县\"},{\"code\":\"140830\",\"name\":\"芮城县\"},{\"code\":\"140881\",\"name\":\"永济市\"},{\"code\":\"140882\",\"name\":\"河津市\"}],[{\"code\":\"140902\",\"name\":\"忻府区\"},{\"code\":\"140921\",\"name\":\"定襄县\"},{\"code\":\"140922\",\"name\":\"五台县\"},{\"code\":\"140923\",\"name\":\"代县\"},{\"code\":\"140924\",\"name\":\"繁峙县\"},{\"code\":\"140925\",\"name\":\"宁武县\"},{\"code\":\"140926\",\"name\":\"静乐县\"},{\"code\":\"140927\",\"name\":\"神池县\"},{\"code\":\"140928\",\"name\":\"五寨县\"},{\"code\":\"140929\",\"name\":\"岢岚县\"},{\"code\":\"140930\",\"name\":\"河曲县\"},{\"code\":\"140931\",\"name\":\"保德县\"},{\"code\":\"140932\",\"name\":\"偏关县\"},{\"code\":\"140981\",\"name\":\"原平市\"}],[{\"code\":\"141002\",\"name\":\"尧都区\"},{\"code\":\"141021\",\"name\":\"曲沃县\"},{\"code\":\"141022\",\"name\":\"翼城县\"},{\"code\":\"141023\",\"name\":\"襄汾县\"},{\"code\":\"141024\",\"name\":\"洪洞县\"},{\"code\":\"141025\",\"name\":\"古县\"},{\"code\":\"141026\",\"name\":\"安泽县\"},{\"code\":\"141027\",\"name\":\"浮山县\"},{\"code\":\"141028\",\"name\":\"吉县\"},{\"code\":\"141029\",\"name\":\"乡宁县\"},{\"code\":\"141030\",\"name\":\"大宁县\"},{\"code\":\"141031\",\"name\":\"隰县\"},{\"code\":\"141032\",\"name\":\"永和县\"},{\"code\":\"141033\",\"name\":\"蒲县\"},{\"code\":\"141034\",\"name\":\"汾西县\"},{\"code\":\"141081\",\"name\":\"侯马市\"},{\"code\":\"141082\",\"name\":\"霍州市\"}],[{\"code\":\"141102\",\"name\":\"离石区\"},{\"code\":\"141121\",\"name\":\"文水县\"},{\"code\":\"141122\",\"name\":\"交城县\"},{\"code\":\"141123\",\"name\":\"兴县\"},{\"code\":\"141124\",\"name\":\"临县\"},{\"code\":\"141125\",\"name\":\"柳林县\"},{\"code\":\"141126\",\"name\":\"石楼县\"},{\"code\":\"141127\",\"name\":\"岚县\"},{\"code\":\"141128\",\"name\":\"方山县\"},{\"code\":\"141129\",\"name\":\"中阳县\"},{\"code\":\"141130\",\"name\":\"交口县\"},{\"code\":\"141181\",\"name\":\"孝义市\"},{\"code\":\"141182\",\"name\":\"汾阳市\"}]],[[{\"code\":\"150102\",\"name\":\"新城区\"},{\"code\":\"150103\",\"name\":\"回民区\"},{\"code\":\"150104\",\"name\":\"玉泉区\"},{\"code\":\"150105\",\"name\":\"赛罕区\"},{\"code\":\"150121\",\"name\":\"土默特左旗\"},{\"code\":\"150122\",\"name\":\"托克托县\"},{\"code\":\"150123\",\"name\":\"和林格尔县\"},{\"code\":\"150124\",\"name\":\"清水河县\"},{\"code\":\"150125\",\"name\":\"武川县\"}],[{\"code\":\"150202\",\"name\":\"东河区\"},{\"code\":\"150203\",\"name\":\"昆都仑区\"},{\"code\":\"150204\",\"name\":\"青山区\"},{\"code\":\"150205\",\"name\":\"石拐区\"},{\"code\":\"150206\",\"name\":\"白云鄂博矿区\"},{\"code\":\"150207\",\"name\":\"九原区\"},{\"code\":\"150221\",\"name\":\"土默特右旗\"},{\"code\":\"150222\",\"name\":\"固阳县\"},{\"code\":\"150223\",\"name\":\"达尔罕茂明安联合旗\"}],[{\"code\":\"150302\",\"name\":\"海勃湾区\"},{\"code\":\"150303\",\"name\":\"海南区\"},{\"code\":\"150304\",\"name\":\"乌达区\"}],[{\"code\":\"150402\",\"name\":\"红山区\"},{\"code\":\"150403\",\"name\":\"元宝山区\"},{\"code\":\"150404\",\"name\":\"松山区\"},{\"code\":\"150421\",\"name\":\"阿鲁科尔沁旗\"},{\"code\":\"150422\",\"name\":\"巴林左旗\"},{\"code\":\"150423\",\"name\":\"巴林右旗\"},{\"code\":\"150424\",\"name\":\"林西县\"},{\"code\":\"150425\",\"name\":\"克什克腾旗\"},{\"code\":\"150426\",\"name\":\"翁牛特旗\"},{\"code\":\"150428\",\"name\":\"喀喇沁旗\"},{\"code\":\"150429\",\"name\":\"宁城县\"},{\"code\":\"150430\",\"name\":\"敖汉旗\"}],[{\"code\":\"150502\",\"name\":\"科尔沁区\"},{\"code\":\"150521\",\"name\":\"科尔沁左翼中旗\"},{\"code\":\"150522\",\"name\":\"科尔沁左翼后旗\"},{\"code\":\"150523\",\"name\":\"开鲁县\"},{\"code\":\"150524\",\"name\":\"库伦旗\"},{\"code\":\"150525\",\"name\":\"奈曼旗\"},{\"code\":\"150526\",\"name\":\"扎鲁特旗\"},{\"code\":\"150581\",\"name\":\"霍林郭勒市\"}],[{\"code\":\"150602\",\"name\":\"东胜区\"},{\"code\":\"150603\",\"name\":\"康巴什区\"},{\"code\":\"150621\",\"name\":\"达拉特旗\"},{\"code\":\"150622\",\"name\":\"准格尔旗\"},{\"code\":\"150623\",\"name\":\"鄂托克前旗\"},{\"code\":\"150624\",\"name\":\"鄂托克旗\"},{\"code\":\"150625\",\"name\":\"杭锦旗\"},{\"code\":\"150626\",\"name\":\"乌审旗\"},{\"code\":\"150627\",\"name\":\"伊金霍洛旗\"}],[{\"code\":\"150702\",\"name\":\"海拉尔区\"},{\"code\":\"150703\",\"name\":\"扎赉诺尔区\"},{\"code\":\"150721\",\"name\":\"阿荣旗\"},{\"code\":\"150722\",\"name\":\"莫力达瓦达斡尔族自治旗\"},{\"code\":\"150723\",\"name\":\"鄂伦春自治旗\"},{\"code\":\"150724\",\"name\":\"鄂温克族自治旗\"},{\"code\":\"150725\",\"name\":\"陈巴尔虎旗\"},{\"code\":\"150726\",\"name\":\"新巴尔虎左旗\"},{\"code\":\"150727\",\"name\":\"新巴尔虎右旗\"},{\"code\":\"150781\",\"name\":\"满洲里市\"},{\"code\":\"150782\",\"name\":\"牙克石市\"},{\"code\":\"150783\",\"name\":\"扎兰屯市\"},{\"code\":\"150784\",\"name\":\"额尔古纳市\"},{\"code\":\"150785\",\"name\":\"根河市\"}],[{\"code\":\"150802\",\"name\":\"临河区\"},{\"code\":\"150821\",\"name\":\"五原县\"},{\"code\":\"150822\",\"name\":\"磴口县\"},{\"code\":\"150823\",\"name\":\"乌拉特前旗\"},{\"code\":\"150824\",\"name\":\"乌拉特中旗\"},{\"code\":\"150825\",\"name\":\"乌拉特后旗\"},{\"code\":\"150826\",\"name\":\"杭锦后旗\"}],[{\"code\":\"150902\",\"name\":\"集宁区\"},{\"code\":\"150921\",\"name\":\"卓资县\"},{\"code\":\"150922\",\"name\":\"化德县\"},{\"code\":\"150923\",\"name\":\"商都县\"},{\"code\":\"150924\",\"name\":\"兴和县\"},{\"code\":\"150925\",\"name\":\"凉城县\"},{\"code\":\"150926\",\"name\":\"察哈尔右翼前旗\"},{\"code\":\"150927\",\"name\":\"察哈尔右翼中旗\"},{\"code\":\"150928\",\"name\":\"察哈尔右翼后旗\"},{\"code\":\"150929\",\"name\":\"四子王旗\"},{\"code\":\"150981\",\"name\":\"丰镇市\"}],[{\"code\":\"152201\",\"name\":\"乌兰浩特市\"},{\"code\":\"152202\",\"name\":\"阿尔山市\"},{\"code\":\"152221\",\"name\":\"科尔沁右翼前旗\"},{\"code\":\"152222\",\"name\":\"科尔沁右翼中旗\"},{\"code\":\"152223\",\"name\":\"扎赉特旗\"},{\"code\":\"152224\",\"name\":\"突泉县\"}],[{\"code\":\"152501\",\"name\":\"二连浩特市\"},{\"code\":\"152502\",\"name\":\"锡林浩特市\"},{\"code\":\"152522\",\"name\":\"阿巴嘎旗\"},{\"code\":\"152523\",\"name\":\"苏尼特左旗\"},{\"code\":\"152524\",\"name\":\"苏尼特右旗\"},{\"code\":\"152525\",\"name\":\"东乌珠穆沁旗\"},{\"code\":\"152526\",\"name\":\"西乌珠穆沁旗\"},{\"code\":\"152527\",\"name\":\"太仆寺旗\"},{\"code\":\"152528\",\"name\":\"镶黄旗\"},{\"code\":\"152529\",\"name\":\"正镶白旗\"},{\"code\":\"152530\",\"name\":\"正蓝旗\"},{\"code\":\"152531\",\"name\":\"多伦县\"}],[{\"code\":\"152921\",\"name\":\"阿拉善左旗\"},{\"code\":\"152922\",\"name\":\"阿拉善右旗\"},{\"code\":\"152923\",\"name\":\"额济纳旗\"}]],[[{\"code\":\"210102\",\"name\":\"和平区\"},{\"code\":\"210103\",\"name\":\"沈河区\"},{\"code\":\"210104\",\"name\":\"大东区\"},{\"code\":\"210105\",\"name\":\"皇姑区\"},{\"code\":\"210106\",\"name\":\"铁西区\"},{\"code\":\"210111\",\"name\":\"苏家屯区\"},{\"code\":\"210112\",\"name\":\"浑南区\"},{\"code\":\"210113\",\"name\":\"沈北新区\"},{\"code\":\"210114\",\"name\":\"于洪区\"},{\"code\":\"210115\",\"name\":\"辽中区\"},{\"code\":\"210123\",\"name\":\"康平县\"},{\"code\":\"210124\",\"name\":\"法库县\"},{\"code\":\"210181\",\"name\":\"新民市\"}],[{\"code\":\"210202\",\"name\":\"中山区\"},{\"code\":\"210203\",\"name\":\"西岗区\"},{\"code\":\"210204\",\"name\":\"沙河口区\"},{\"code\":\"210211\",\"name\":\"甘井子区\"},{\"code\":\"210212\",\"name\":\"旅顺口区\"},{\"code\":\"210213\",\"name\":\"金州区\"},{\"code\":\"210214\",\"name\":\"普兰店区\"},{\"code\":\"210224\",\"name\":\"长海县\"},{\"code\":\"210281\",\"name\":\"瓦房店市\"},{\"code\":\"210283\",\"name\":\"庄河市\"}],[{\"code\":\"210302\",\"name\":\"铁东区\"},{\"code\":\"210303\",\"name\":\"铁西区\"},{\"code\":\"210304\",\"name\":\"立山区\"},{\"code\":\"210311\",\"name\":\"千山区\"},{\"code\":\"210321\",\"name\":\"台安县\"},{\"code\":\"210323\",\"name\":\"岫岩满族自治县\"},{\"code\":\"210381\",\"name\":\"海城市\"}],[{\"code\":\"210402\",\"name\":\"新抚区\"},{\"code\":\"210403\",\"name\":\"东洲区\"},{\"code\":\"210404\",\"name\":\"望花区\"},{\"code\":\"210411\",\"name\":\"顺城区\"},{\"code\":\"210421\",\"name\":\"抚顺县\"},{\"code\":\"210422\",\"name\":\"新宾满族自治县\"},{\"code\":\"210423\",\"name\":\"清原满族自治县\"}],[{\"code\":\"210502\",\"name\":\"平山区\"},{\"code\":\"210503\",\"name\":\"溪湖区\"},{\"code\":\"210504\",\"name\":\"明山区\"},{\"code\":\"210505\",\"name\":\"南芬区\"},{\"code\":\"210521\",\"name\":\"本溪满族自治县\"},{\"code\":\"210522\",\"name\":\"桓仁满族自治县\"}],[{\"code\":\"210602\",\"name\":\"元宝区\"},{\"code\":\"210603\",\"name\":\"振兴区\"},{\"code\":\"210604\",\"name\":\"振安区\"},{\"code\":\"210624\",\"name\":\"宽甸满族自治县\"},{\"code\":\"210681\",\"name\":\"东港市\"},{\"code\":\"210682\",\"name\":\"凤城市\"}],[{\"code\":\"210702\",\"name\":\"古塔区\"},{\"code\":\"210703\",\"name\":\"凌河区\"},{\"code\":\"210711\",\"name\":\"太和区\"},{\"code\":\"210726\",\"name\":\"黑山县\"},{\"code\":\"210727\",\"name\":\"义县\"},{\"code\":\"210781\",\"name\":\"凌海市\"},{\"code\":\"210782\",\"name\":\"北镇市\"}],[{\"code\":\"210802\",\"name\":\"站前区\"},{\"code\":\"210803\",\"name\":\"西市区\"},{\"code\":\"210804\",\"name\":\"鲅鱼圈区\"},{\"code\":\"210811\",\"name\":\"老边区\"},{\"code\":\"210881\",\"name\":\"盖州市\"},{\"code\":\"210882\",\"name\":\"大石桥市\"}],[{\"code\":\"210902\",\"name\":\"海州区\"},{\"code\":\"210903\",\"name\":\"新邱区\"},{\"code\":\"210904\",\"name\":\"太平区\"},{\"code\":\"210905\",\"name\":\"清河门区\"},{\"code\":\"210911\",\"name\":\"细河区\"},{\"code\":\"210921\",\"name\":\"阜新蒙古族自治县\"},{\"code\":\"210922\",\"name\":\"彰武县\"}],[{\"code\":\"211002\",\"name\":\"白塔区\"},{\"code\":\"211003\",\"name\":\"文圣区\"},{\"code\":\"211004\",\"name\":\"宏伟区\"},{\"code\":\"211005\",\"name\":\"弓长岭区\"},{\"code\":\"211011\",\"name\":\"太子河区\"},{\"code\":\"211021\",\"name\":\"辽阳县\"},{\"code\":\"211081\",\"name\":\"灯塔市\"}],[{\"code\":\"211102\",\"name\":\"双台子区\"},{\"code\":\"211103\",\"name\":\"兴隆台区\"},{\"code\":\"211104\",\"name\":\"大洼区\"},{\"code\":\"211122\",\"name\":\"盘山县\"}],[{\"code\":\"211202\",\"name\":\"银州区\"},{\"code\":\"211204\",\"name\":\"清河区\"},{\"code\":\"211221\",\"name\":\"铁岭县\"},{\"code\":\"211223\",\"name\":\"西丰县\"},{\"code\":\"211224\",\"name\":\"昌图县\"},{\"code\":\"211281\",\"name\":\"调兵山市\"},{\"code\":\"211282\",\"name\":\"开原市\"}],[{\"code\":\"211302\",\"name\":\"双塔区\"},{\"code\":\"211303\",\"name\":\"龙城区\"},{\"code\":\"211321\",\"name\":\"朝阳县\"},{\"code\":\"211322\",\"name\":\"建平县\"},{\"code\":\"211324\",\"name\":\"喀喇沁左翼蒙古族自治县\"},{\"code\":\"211381\",\"name\":\"北票市\"},{\"code\":\"211382\",\"name\":\"凌源市\"}],[{\"code\":\"211402\",\"name\":\"连山区\"},{\"code\":\"211403\",\"name\":\"龙港区\"},{\"code\":\"211404\",\"name\":\"南票区\"},{\"code\":\"211421\",\"name\":\"绥中县\"},{\"code\":\"211422\",\"name\":\"建昌县\"},{\"code\":\"211481\",\"name\":\"兴城市\"}]],[[{\"code\":\"220102\",\"name\":\"南关区\"},{\"code\":\"220103\",\"name\":\"宽城区\"},{\"code\":\"220104\",\"name\":\"朝阳区\"},{\"code\":\"220105\",\"name\":\"二道区\"},{\"code\":\"220106\",\"name\":\"绿园区\"},{\"code\":\"220112\",\"name\":\"双阳区\"},{\"code\":\"220113\",\"name\":\"九台区\"},{\"code\":\"220122\",\"name\":\"农安县\"},{\"code\":\"220182\",\"name\":\"榆树市\"},{\"code\":\"220183\",\"name\":\"德惠市\"}],[{\"code\":\"220202\",\"name\":\"昌邑区\"},{\"code\":\"220203\",\"name\":\"龙潭区\"},{\"code\":\"220204\",\"name\":\"船营区\"},{\"code\":\"220211\",\"name\":\"丰满区\"},{\"code\":\"220221\",\"name\":\"永吉县\"},{\"code\":\"220281\",\"name\":\"蛟河市\"},{\"code\":\"220282\",\"name\":\"桦甸市\"},{\"code\":\"220283\",\"name\":\"舒兰市\"},{\"code\":\"220284\",\"name\":\"磐石市\"}],[{\"code\":\"220302\",\"name\":\"铁西区\"},{\"code\":\"220303\",\"name\":\"铁东区\"},{\"code\":\"220322\",\"name\":\"梨树县\"},{\"code\":\"220323\",\"name\":\"伊通满族自治县\"},{\"code\":\"220381\",\"name\":\"公主岭市\"},{\"code\":\"220382\",\"name\":\"双辽市\"}],[{\"code\":\"220402\",\"name\":\"龙山区\"},{\"code\":\"220403\",\"name\":\"西安区\"},{\"code\":\"220421\",\"name\":\"东丰县\"},{\"code\":\"220422\",\"name\":\"东辽县\"}],[{\"code\":\"220502\",\"name\":\"东昌区\"},{\"code\":\"220503\",\"name\":\"二道江区\"},{\"code\":\"220521\",\"name\":\"通化县\"},{\"code\":\"220523\",\"name\":\"辉南县\"},{\"code\":\"220524\",\"name\":\"柳河县\"},{\"code\":\"220581\",\"name\":\"梅河口市\"},{\"code\":\"220582\",\"name\":\"集安市\"}],[{\"code\":\"220602\",\"name\":\"浑江区\"},{\"code\":\"220605\",\"name\":\"江源区\"},{\"code\":\"220621\",\"name\":\"抚松县\"},{\"code\":\"220622\",\"name\":\"靖宇县\"},{\"code\":\"220623\",\"name\":\"长白朝鲜族自治县\"},{\"code\":\"220681\",\"name\":\"临江市\"}],[{\"code\":\"220702\",\"name\":\"宁江区\"},{\"code\":\"220721\",\"name\":\"前郭尔罗斯蒙古族自治县\"},{\"code\":\"220722\",\"name\":\"长岭县\"},{\"code\":\"220723\",\"name\":\"乾安县\"},{\"code\":\"220781\",\"name\":\"扶余市\"}],[{\"code\":\"220802\",\"name\":\"洮北区\"},{\"code\":\"220821\",\"name\":\"镇赉县\"},{\"code\":\"220822\",\"name\":\"通榆县\"},{\"code\":\"220881\",\"name\":\"洮南市\"},{\"code\":\"220882\",\"name\":\"大安市\"}],[{\"code\":\"222401\",\"name\":\"延吉市\"},{\"code\":\"222402\",\"name\":\"图们市\"},{\"code\":\"222403\",\"name\":\"敦化市\"},{\"code\":\"222404\",\"name\":\"珲春市\"},{\"code\":\"222405\",\"name\":\"龙井市\"},{\"code\":\"222406\",\"name\":\"和龙市\"},{\"code\":\"222424\",\"name\":\"汪清县\"},{\"code\":\"222426\",\"name\":\"安图县\"}]],[[{\"code\":\"230102\",\"name\":\"道里区\"},{\"code\":\"230103\",\"name\":\"南岗区\"},{\"code\":\"230104\",\"name\":\"道外区\"},{\"code\":\"230108\",\"name\":\"平房区\"},{\"code\":\"230109\",\"name\":\"松北区\"},{\"code\":\"230110\",\"name\":\"香坊区\"},{\"code\":\"230111\",\"name\":\"呼兰区\"},{\"code\":\"230112\",\"name\":\"阿城区\"},{\"code\":\"230113\",\"name\":\"双城区\"},{\"code\":\"230123\",\"name\":\"依兰县\"},{\"code\":\"230124\",\"name\":\"方正县\"},{\"code\":\"230125\",\"name\":\"宾县\"},{\"code\":\"230126\",\"name\":\"巴彦县\"},{\"code\":\"230127\",\"name\":\"木兰县\"},{\"code\":\"230128\",\"name\":\"通河县\"},{\"code\":\"230129\",\"name\":\"延寿县\"},{\"code\":\"230183\",\"name\":\"尚志市\"},{\"code\":\"230184\",\"name\":\"五常市\"}],[{\"code\":\"230202\",\"name\":\"龙沙区\"},{\"code\":\"230203\",\"name\":\"建华区\"},{\"code\":\"230204\",\"name\":\"铁锋区\"},{\"code\":\"230205\",\"name\":\"昂昂溪区\"},{\"code\":\"230206\",\"name\":\"富拉尔基区\"},{\"code\":\"230207\",\"name\":\"碾子山区\"},{\"code\":\"230208\",\"name\":\"梅里斯达斡尔族区\"},{\"code\":\"230221\",\"name\":\"龙江县\"},{\"code\":\"230223\",\"name\":\"依安县\"},{\"code\":\"230224\",\"name\":\"泰来县\"},{\"code\":\"230225\",\"name\":\"甘南县\"},{\"code\":\"230227\",\"name\":\"富裕县\"},{\"code\":\"230229\",\"name\":\"克山县\"},{\"code\":\"230230\",\"name\":\"克东县\"},{\"code\":\"230231\",\"name\":\"拜泉县\"},{\"code\":\"230281\",\"name\":\"讷河市\"}],[{\"code\":\"230302\",\"name\":\"鸡冠区\"},{\"code\":\"230303\",\"name\":\"恒山区\"},{\"code\":\"230304\",\"name\":\"滴道区\"},{\"code\":\"230305\",\"name\":\"梨树区\"},{\"code\":\"230306\",\"name\":\"城子河区\"},{\"code\":\"230307\",\"name\":\"麻山区\"},{\"code\":\"230321\",\"name\":\"鸡东县\"},{\"code\":\"230381\",\"name\":\"虎林市\"},{\"code\":\"230382\",\"name\":\"密山市\"}],[{\"code\":\"230402\",\"name\":\"向阳区\"},{\"code\":\"230403\",\"name\":\"工农区\"},{\"code\":\"230404\",\"name\":\"南山区\"},{\"code\":\"230405\",\"name\":\"兴安区\"},{\"code\":\"230406\",\"name\":\"东山区\"},{\"code\":\"230407\",\"name\":\"兴山区\"},{\"code\":\"230421\",\"name\":\"萝北县\"},{\"code\":\"230422\",\"name\":\"绥滨县\"}],[{\"code\":\"230502\",\"name\":\"尖山区\"},{\"code\":\"230503\",\"name\":\"岭东区\"},{\"code\":\"230505\",\"name\":\"四方台区\"},{\"code\":\"230506\",\"name\":\"宝山区\"},{\"code\":\"230521\",\"name\":\"集贤县\"},{\"code\":\"230522\",\"name\":\"友谊县\"},{\"code\":\"230523\",\"name\":\"宝清县\"},{\"code\":\"230524\",\"name\":\"饶河县\"}],[{\"code\":\"230602\",\"name\":\"萨尔图区\"},{\"code\":\"230603\",\"name\":\"龙凤区\"},{\"code\":\"230604\",\"name\":\"让胡路区\"},{\"code\":\"230605\",\"name\":\"红岗区\"},{\"code\":\"230606\",\"name\":\"大同区\"},{\"code\":\"230621\",\"name\":\"肇州县\"},{\"code\":\"230622\",\"name\":\"肇源县\"},{\"code\":\"230623\",\"name\":\"林甸县\"},{\"code\":\"230624\",\"name\":\"杜尔伯特蒙古族自治县\"}],[{\"code\":\"230702\",\"name\":\"伊春区\"},{\"code\":\"230703\",\"name\":\"南岔区\"},{\"code\":\"230704\",\"name\":\"友好区\"},{\"code\":\"230705\",\"name\":\"西林区\"},{\"code\":\"230706\",\"name\":\"翠峦区\"},{\"code\":\"230707\",\"name\":\"新青区\"},{\"code\":\"230708\",\"name\":\"美溪区\"},{\"code\":\"230709\",\"name\":\"金山屯区\"},{\"code\":\"230710\",\"name\":\"五营区\"},{\"code\":\"230711\",\"name\":\"乌马河区\"},{\"code\":\"230712\",\"name\":\"汤旺河区\"},{\"code\":\"230713\",\"name\":\"带岭区\"},{\"code\":\"230714\",\"name\":\"乌伊岭区\"},{\"code\":\"230715\",\"name\":\"红星区\"},{\"code\":\"230716\",\"name\":\"上甘岭区\"},{\"code\":\"230722\",\"name\":\"嘉荫县\"},{\"code\":\"230781\",\"name\":\"铁力市\"}],[{\"code\":\"230803\",\"name\":\"向阳区\"},{\"code\":\"230804\",\"name\":\"前进区\"},{\"code\":\"230805\",\"name\":\"东风区\"},{\"code\":\"230811\",\"name\":\"郊区\"},{\"code\":\"230822\",\"name\":\"桦南县\"},{\"code\":\"230826\",\"name\":\"桦川县\"},{\"code\":\"230828\",\"name\":\"汤原县\"},{\"code\":\"230881\",\"name\":\"同江市\"},{\"code\":\"230882\",\"name\":\"富锦市\"},{\"code\":\"230883\",\"name\":\"抚远市\"}],[{\"code\":\"230902\",\"name\":\"新兴区\"},{\"code\":\"230903\",\"name\":\"桃山区\"},{\"code\":\"230904\",\"name\":\"茄子河区\"},{\"code\":\"230921\",\"name\":\"勃利县\"}],[{\"code\":\"231002\",\"name\":\"东安区\"},{\"code\":\"231003\",\"name\":\"阳明区\"},{\"code\":\"231004\",\"name\":\"爱民区\"},{\"code\":\"231005\",\"name\":\"西安区\"},{\"code\":\"231025\",\"name\":\"林口县\"},{\"code\":\"231081\",\"name\":\"绥芬河市\"},{\"code\":\"231083\",\"name\":\"海林市\"},{\"code\":\"231084\",\"name\":\"宁安市\"},{\"code\":\"231085\",\"name\":\"穆棱市\"},{\"code\":\"231086\",\"name\":\"东宁市\"}],[{\"code\":\"231102\",\"name\":\"爱辉区\"},{\"code\":\"231121\",\"name\":\"嫩江县\"},{\"code\":\"231123\",\"name\":\"逊克县\"},{\"code\":\"231124\",\"name\":\"孙吴县\"},{\"code\":\"231181\",\"name\":\"北安市\"},{\"code\":\"231182\",\"name\":\"五大连池市\"}],[{\"code\":\"231202\",\"name\":\"北林区\"},{\"code\":\"231221\",\"name\":\"望奎县\"},{\"code\":\"231222\",\"name\":\"兰西县\"},{\"code\":\"231223\",\"name\":\"青冈县\"},{\"code\":\"231224\",\"name\":\"庆安县\"},{\"code\":\"231225\",\"name\":\"明水县\"},{\"code\":\"231226\",\"name\":\"绥棱县\"},{\"code\":\"231281\",\"name\":\"安达市\"},{\"code\":\"231282\",\"name\":\"肇东市\"},{\"code\":\"231283\",\"name\":\"海伦市\"}],[{\"code\":\"232701\",\"name\":\"加格达奇区\"},{\"code\":\"232702\",\"name\":\"松岭区\"},{\"code\":\"232703\",\"name\":\"新林区\"},{\"code\":\"232704\",\"name\":\"呼中区\"},{\"code\":\"232721\",\"name\":\"呼玛县\"},{\"code\":\"232722\",\"name\":\"塔河县\"},{\"code\":\"232723\",\"name\":\"漠河县\"}]],[[{\"code\":\"310101\",\"name\":\"黄浦区\"},{\"code\":\"310104\",\"name\":\"徐汇区\"},{\"code\":\"310105\",\"name\":\"长宁区\"},{\"code\":\"310106\",\"name\":\"静安区\"},{\"code\":\"310107\",\"name\":\"普陀区\"},{\"code\":\"310109\",\"name\":\"虹口区\"},{\"code\":\"310110\",\"name\":\"杨浦区\"},{\"code\":\"310112\",\"name\":\"闵行区\"},{\"code\":\"310113\",\"name\":\"宝山区\"},{\"code\":\"310114\",\"name\":\"嘉定区\"},{\"code\":\"310115\",\"name\":\"浦东新区\"},{\"code\":\"310116\",\"name\":\"金山区\"},{\"code\":\"310117\",\"name\":\"松江区\"},{\"code\":\"310118\",\"name\":\"青浦区\"},{\"code\":\"310120\",\"name\":\"奉贤区\"},{\"code\":\"310151\",\"name\":\"崇明区\"}]],[[{\"code\":\"320102\",\"name\":\"玄武区\"},{\"code\":\"320104\",\"name\":\"秦淮区\"},{\"code\":\"320105\",\"name\":\"建邺区\"},{\"code\":\"320106\",\"name\":\"鼓楼区\"},{\"code\":\"320111\",\"name\":\"浦口区\"},{\"code\":\"320113\",\"name\":\"栖霞区\"},{\"code\":\"320114\",\"name\":\"雨花台区\"},{\"code\":\"320115\",\"name\":\"江宁区\"},{\"code\":\"320116\",\"name\":\"六合区\"},{\"code\":\"320117\",\"name\":\"溧水区\"},{\"code\":\"320118\",\"name\":\"高淳区\"}],[{\"code\":\"320205\",\"name\":\"锡山区\"},{\"code\":\"320206\",\"name\":\"惠山区\"},{\"code\":\"320211\",\"name\":\"滨湖区\"},{\"code\":\"320213\",\"name\":\"梁溪区\"},{\"code\":\"320214\",\"name\":\"新吴区\"},{\"code\":\"320281\",\"name\":\"江阴市\"},{\"code\":\"320282\",\"name\":\"宜兴市\"}],[{\"code\":\"320302\",\"name\":\"鼓楼区\"},{\"code\":\"320303\",\"name\":\"云龙区\"},{\"code\":\"320305\",\"name\":\"贾汪区\"},{\"code\":\"320311\",\"name\":\"泉山区\"},{\"code\":\"320312\",\"name\":\"铜山区\"},{\"code\":\"320321\",\"name\":\"丰县\"},{\"code\":\"320322\",\"name\":\"沛县\"},{\"code\":\"320324\",\"name\":\"睢宁县\"},{\"code\":\"320381\",\"name\":\"新沂市\"},{\"code\":\"320382\",\"name\":\"邳州市\"}],[{\"code\":\"320402\",\"name\":\"天宁区\"},{\"code\":\"320404\",\"name\":\"钟楼区\"},{\"code\":\"320411\",\"name\":\"新北区\"},{\"code\":\"320412\",\"name\":\"武进区\"},{\"code\":\"320413\",\"name\":\"金坛区\"},{\"code\":\"320481\",\"name\":\"溧阳市\"}],[{\"code\":\"320505\",\"name\":\"虎丘区\"},{\"code\":\"320506\",\"name\":\"吴中区\"},{\"code\":\"320507\",\"name\":\"相城区\"},{\"code\":\"320508\",\"name\":\"姑苏区\"},{\"code\":\"320509\",\"name\":\"吴江区\"},{\"code\":\"320581\",\"name\":\"常熟市\"},{\"code\":\"320582\",\"name\":\"张家港市\"},{\"code\":\"320583\",\"name\":\"昆山市\"},{\"code\":\"320585\",\"name\":\"太仓市\"}],[{\"code\":\"320602\",\"name\":\"崇川区\"},{\"code\":\"320611\",\"name\":\"港闸区\"},{\"code\":\"320612\",\"name\":\"通州区\"},{\"code\":\"320621\",\"name\":\"海安县\"},{\"code\":\"320623\",\"name\":\"如东县\"},{\"code\":\"320681\",\"name\":\"启东市\"},{\"code\":\"320682\",\"name\":\"如皋市\"},{\"code\":\"320684\",\"name\":\"海门市\"}],[{\"code\":\"320703\",\"name\":\"连云区\"},{\"code\":\"320706\",\"name\":\"海州区\"},{\"code\":\"320707\",\"name\":\"赣榆区\"},{\"code\":\"320722\",\"name\":\"东海县\"},{\"code\":\"320723\",\"name\":\"灌云县\"},{\"code\":\"320724\",\"name\":\"灌南县\"}],[{\"code\":\"320803\",\"name\":\"淮安区\"},{\"code\":\"320804\",\"name\":\"淮阴区\"},{\"code\":\"320812\",\"name\":\"清江浦区\"},{\"code\":\"320813\",\"name\":\"洪泽区\"},{\"code\":\"320826\",\"name\":\"涟水县\"},{\"code\":\"320830\",\"name\":\"盱眙县\"},{\"code\":\"320831\",\"name\":\"金湖县\"}],[{\"code\":\"320902\",\"name\":\"亭湖区\"},{\"code\":\"320903\",\"name\":\"盐都区\"},{\"code\":\"320904\",\"name\":\"大丰区\"},{\"code\":\"320921\",\"name\":\"响水县\"},{\"code\":\"320922\",\"name\":\"滨海县\"},{\"code\":\"320923\",\"name\":\"阜宁县\"},{\"code\":\"320924\",\"name\":\"射阳县\"},{\"code\":\"320925\",\"name\":\"建湖县\"},{\"code\":\"320981\",\"name\":\"东台市\"}],[{\"code\":\"321002\",\"name\":\"广陵区\"},{\"code\":\"321003\",\"name\":\"邗江区\"},{\"code\":\"321012\",\"name\":\"江都区\"},{\"code\":\"321023\",\"name\":\"宝应县\"},{\"code\":\"321081\",\"name\":\"仪征市\"},{\"code\":\"321084\",\"name\":\"高邮市\"}],[{\"code\":\"321102\",\"name\":\"京口区\"},{\"code\":\"321111\",\"name\":\"润州区\"},{\"code\":\"321112\",\"name\":\"丹徒区\"},{\"code\":\"321181\",\"name\":\"丹阳市\"},{\"code\":\"321182\",\"name\":\"扬中市\"},{\"code\":\"321183\",\"name\":\"句容市\"}],[{\"code\":\"321202\",\"name\":\"海陵区\"},{\"code\":\"321203\",\"name\":\"高港区\"},{\"code\":\"321204\",\"name\":\"姜堰区\"},{\"code\":\"321281\",\"name\":\"兴化市\"},{\"code\":\"321282\",\"name\":\"靖江市\"},{\"code\":\"321283\",\"name\":\"泰兴市\"}],[{\"code\":\"321302\",\"name\":\"宿城区\"},{\"code\":\"321311\",\"name\":\"宿豫区\"},{\"code\":\"321322\",\"name\":\"沭阳县\"},{\"code\":\"321323\",\"name\":\"泗阳县\"},{\"code\":\"321324\",\"name\":\"泗洪县\"}]],[[{\"code\":\"330102\",\"name\":\"上城区\"},{\"code\":\"330105\",\"name\":\"拱墅区\"},{\"code\":\"330106\",\"name\":\"西湖区\"},{\"code\":\"330108\",\"name\":\"滨江区\"},{\"code\":\"330109\",\"name\":\"萧山区\"},{\"code\":\"330110\",\"name\":\"余杭区\"},{\"code\":\"330111\",\"name\":\"富阳区\"},{\"code\":\"330112\",\"name\":\"临安区\"},{\"code\":\"330113\",\"name\":\"临平区\"},{\"code\":\"330114\",\"name\":\"钱塘区\"},{\"code\":\"330122\",\"name\":\"桐庐县\"},{\"code\":\"330127\",\"name\":\"淳安县\"},{\"code\":\"330182\",\"name\":\"建德市\"}],[{\"code\":\"330203\",\"name\":\"海曙区\"},{\"code\":\"330205\",\"name\":\"江北区\"},{\"code\":\"330206\",\"name\":\"北仑区\"},{\"code\":\"330211\",\"name\":\"镇海区\"},{\"code\":\"330212\",\"name\":\"鄞州区\"},{\"code\":\"330213\",\"name\":\"奉化区\"},{\"code\":\"330225\",\"name\":\"象山县\"},{\"code\":\"330226\",\"name\":\"宁海县\"},{\"code\":\"330281\",\"name\":\"余姚市\"},{\"code\":\"330282\",\"name\":\"慈溪市\"}],[{\"code\":\"330302\",\"name\":\"鹿城区\"},{\"code\":\"330303\",\"name\":\"龙湾区\"},{\"code\":\"330304\",\"name\":\"瓯海区\"},{\"code\":\"330305\",\"name\":\"洞头区\"},{\"code\":\"330324\",\"name\":\"永嘉县\"},{\"code\":\"330326\",\"name\":\"平阳县\"},{\"code\":\"330327\",\"name\":\"苍南县\"},{\"code\":\"330328\",\"name\":\"文成县\"},{\"code\":\"330329\",\"name\":\"泰顺县\"},{\"code\":\"330381\",\"name\":\"瑞安市\"},{\"code\":\"330382\",\"name\":\"乐清市\"}],[{\"code\":\"330402\",\"name\":\"南湖区\"},{\"code\":\"330411\",\"name\":\"秀洲区\"},{\"code\":\"330421\",\"name\":\"嘉善县\"},{\"code\":\"330424\",\"name\":\"海盐县\"},{\"code\":\"330481\",\"name\":\"海宁市\"},{\"code\":\"330482\",\"name\":\"平湖市\"},{\"code\":\"330483\",\"name\":\"桐乡市\"}],[{\"code\":\"330502\",\"name\":\"吴兴区\"},{\"code\":\"330503\",\"name\":\"南浔区\"},{\"code\":\"330521\",\"name\":\"德清县\"},{\"code\":\"330522\",\"name\":\"长兴县\"},{\"code\":\"330523\",\"name\":\"安吉县\"}],[{\"code\":\"330602\",\"name\":\"越城区\"},{\"code\":\"330603\",\"name\":\"柯桥区\"},{\"code\":\"330604\",\"name\":\"上虞区\"},{\"code\":\"330624\",\"name\":\"新昌县\"},{\"code\":\"330681\",\"name\":\"诸暨市\"},{\"code\":\"330683\",\"name\":\"嵊州市\"}],[{\"code\":\"330702\",\"name\":\"婺城区\"},{\"code\":\"330703\",\"name\":\"金东区\"},{\"code\":\"330723\",\"name\":\"武义县\"},{\"code\":\"330726\",\"name\":\"浦江县\"},{\"code\":\"330727\",\"name\":\"磐安县\"},{\"code\":\"330781\",\"name\":\"兰溪市\"},{\"code\":\"330782\",\"name\":\"义乌市\"},{\"code\":\"330783\",\"name\":\"东阳市\"},{\"code\":\"330784\",\"name\":\"永康市\"}],[{\"code\":\"330802\",\"name\":\"柯城区\"},{\"code\":\"330803\",\"name\":\"衢江区\"},{\"code\":\"330822\",\"name\":\"常山县\"},{\"code\":\"330824\",\"name\":\"开化县\"},{\"code\":\"330825\",\"name\":\"龙游县\"},{\"code\":\"330881\",\"name\":\"江山市\"}],[{\"code\":\"330902\",\"name\":\"定海区\"},{\"code\":\"330903\",\"name\":\"普陀区\"},{\"code\":\"330921\",\"name\":\"岱山县\"},{\"code\":\"330922\",\"name\":\"嵊泗县\"}],[{\"code\":\"331002\",\"name\":\"椒江区\"},{\"code\":\"331003\",\"name\":\"黄岩区\"},{\"code\":\"331004\",\"name\":\"路桥区\"},{\"code\":\"331022\",\"name\":\"三门县\"},{\"code\":\"331023\",\"name\":\"天台县\"},{\"code\":\"331024\",\"name\":\"仙居县\"},{\"code\":\"331081\",\"name\":\"温岭市\"},{\"code\":\"331082\",\"name\":\"临海市\"},{\"code\":\"331083\",\"name\":\"玉环市\"}],[{\"code\":\"331102\",\"name\":\"莲都区\"},{\"code\":\"331121\",\"name\":\"青田县\"},{\"code\":\"331122\",\"name\":\"缙云县\"},{\"code\":\"331123\",\"name\":\"遂昌县\"},{\"code\":\"331124\",\"name\":\"松阳县\"},{\"code\":\"331125\",\"name\":\"云和县\"},{\"code\":\"331126\",\"name\":\"庆元县\"},{\"code\":\"331127\",\"name\":\"景宁畲族自治县\"},{\"code\":\"331181\",\"name\":\"龙泉市\"}]],[[{\"code\":\"340102\",\"name\":\"瑶海区\"},{\"code\":\"340103\",\"name\":\"庐阳区\"},{\"code\":\"340104\",\"name\":\"蜀山区\"},{\"code\":\"340111\",\"name\":\"包河区\"},{\"code\":\"340121\",\"name\":\"长丰县\"},{\"code\":\"340122\",\"name\":\"肥东县\"},{\"code\":\"340123\",\"name\":\"肥西县\"},{\"code\":\"340124\",\"name\":\"庐江县\"},{\"code\":\"340181\",\"name\":\"巢湖市\"}],[{\"code\":\"340202\",\"name\":\"镜湖区\"},{\"code\":\"340203\",\"name\":\"弋江区\"},{\"code\":\"340207\",\"name\":\"鸠江区\"},{\"code\":\"340208\",\"name\":\"三山区\"},{\"code\":\"340221\",\"name\":\"芜湖县\"},{\"code\":\"340222\",\"name\":\"繁昌县\"},{\"code\":\"340223\",\"name\":\"南陵县\"},{\"code\":\"340225\",\"name\":\"无为县\"}],[{\"code\":\"340302\",\"name\":\"龙子湖区\"},{\"code\":\"340303\",\"name\":\"蚌山区\"},{\"code\":\"340304\",\"name\":\"禹会区\"},{\"code\":\"340311\",\"name\":\"淮上区\"},{\"code\":\"340321\",\"name\":\"怀远县\"},{\"code\":\"340322\",\"name\":\"五河县\"},{\"code\":\"340323\",\"name\":\"固镇县\"}],[{\"code\":\"340402\",\"name\":\"大通区\"},{\"code\":\"340403\",\"name\":\"田家庵区\"},{\"code\":\"340404\",\"name\":\"谢家集区\"},{\"code\":\"340405\",\"name\":\"八公山区\"},{\"code\":\"340406\",\"name\":\"潘集区\"},{\"code\":\"340421\",\"name\":\"凤台县\"},{\"code\":\"340422\",\"name\":\"寿县\"}],[{\"code\":\"340503\",\"name\":\"花山区\"},{\"code\":\"340504\",\"name\":\"雨山区\"},{\"code\":\"340506\",\"name\":\"博望区\"},{\"code\":\"340521\",\"name\":\"当涂县\"},{\"code\":\"340522\",\"name\":\"含山县\"},{\"code\":\"340523\",\"name\":\"和县\"}],[{\"code\":\"340602\",\"name\":\"杜集区\"},{\"code\":\"340603\",\"name\":\"相山区\"},{\"code\":\"340604\",\"name\":\"烈山区\"},{\"code\":\"340621\",\"name\":\"濉溪县\"}],[{\"code\":\"340705\",\"name\":\"铜官区\"},{\"code\":\"340706\",\"name\":\"义安区\"},{\"code\":\"340711\",\"name\":\"郊区\"},{\"code\":\"340722\",\"name\":\"枞阳县\"}],[{\"code\":\"340802\",\"name\":\"迎江区\"},{\"code\":\"340803\",\"name\":\"大观区\"},{\"code\":\"340811\",\"name\":\"宜秀区\"},{\"code\":\"340822\",\"name\":\"怀宁县\"},{\"code\":\"340824\",\"name\":\"潜山县\"},{\"code\":\"340825\",\"name\":\"太湖县\"},{\"code\":\"340826\",\"name\":\"宿松县\"},{\"code\":\"340827\",\"name\":\"望江县\"},{\"code\":\"340828\",\"name\":\"岳西县\"},{\"code\":\"340881\",\"name\":\"桐城市\"}],[{\"code\":\"341002\",\"name\":\"屯溪区\"},{\"code\":\"341003\",\"name\":\"黄山区\"},{\"code\":\"341004\",\"name\":\"徽州区\"},{\"code\":\"341021\",\"name\":\"歙县\"},{\"code\":\"341022\",\"name\":\"休宁县\"},{\"code\":\"341023\",\"name\":\"黟县\"},{\"code\":\"341024\",\"name\":\"祁门县\"}],[{\"code\":\"341102\",\"name\":\"琅琊区\"},{\"code\":\"341103\",\"name\":\"南谯区\"},{\"code\":\"341122\",\"name\":\"来安县\"},{\"code\":\"341124\",\"name\":\"全椒县\"},{\"code\":\"341125\",\"name\":\"定远县\"},{\"code\":\"341126\",\"name\":\"凤阳县\"},{\"code\":\"341181\",\"name\":\"天长市\"},{\"code\":\"341182\",\"name\":\"明光市\"}],[{\"code\":\"341202\",\"name\":\"颍州区\"},{\"code\":\"341203\",\"name\":\"颍东区\"},{\"code\":\"341204\",\"name\":\"颍泉区\"},{\"code\":\"341221\",\"name\":\"临泉县\"},{\"code\":\"341222\",\"name\":\"太和县\"},{\"code\":\"341225\",\"name\":\"阜南县\"},{\"code\":\"341226\",\"name\":\"颍上县\"},{\"code\":\"341282\",\"name\":\"界首市\"}],[{\"code\":\"341302\",\"name\":\"埇桥区\"},{\"code\":\"341321\",\"name\":\"砀山县\"},{\"code\":\"341322\",\"name\":\"萧县\"},{\"code\":\"341323\",\"name\":\"灵璧县\"},{\"code\":\"341324\",\"name\":\"泗县\"}],[{\"code\":\"341502\",\"name\":\"金安区\"},{\"code\":\"341503\",\"name\":\"裕安区\"},{\"code\":\"341504\",\"name\":\"叶集区\"},{\"code\":\"341522\",\"name\":\"霍邱县\"},{\"code\":\"341523\",\"name\":\"舒城县\"},{\"code\":\"341524\",\"name\":\"金寨县\"},{\"code\":\"341525\",\"name\":\"霍山县\"}],[{\"code\":\"341602\",\"name\":\"谯城区\"},{\"code\":\"341621\",\"name\":\"涡阳县\"},{\"code\":\"341622\",\"name\":\"蒙城县\"},{\"code\":\"341623\",\"name\":\"利辛县\"}],[{\"code\":\"341702\",\"name\":\"贵池区\"},{\"code\":\"341721\",\"name\":\"东至县\"},{\"code\":\"341722\",\"name\":\"石台县\"},{\"code\":\"341723\",\"name\":\"青阳县\"}],[{\"code\":\"341802\",\"name\":\"宣州区\"},{\"code\":\"341821\",\"name\":\"郎溪县\"},{\"code\":\"341822\",\"name\":\"广德县\"},{\"code\":\"341823\",\"name\":\"泾县\"},{\"code\":\"341824\",\"name\":\"绩溪县\"},{\"code\":\"341825\",\"name\":\"旌德县\"},{\"code\":\"341881\",\"name\":\"宁国市\"}]],[[{\"code\":\"350102\",\"name\":\"鼓楼区\"},{\"code\":\"350103\",\"name\":\"台江区\"},{\"code\":\"350104\",\"name\":\"仓山区\"},{\"code\":\"350105\",\"name\":\"马尾区\"},{\"code\":\"350111\",\"name\":\"晋安区\"},{\"code\":\"350112\",\"name\":\"长乐区\"},{\"code\":\"350121\",\"name\":\"闽侯县\"},{\"code\":\"350122\",\"name\":\"连江县\"},{\"code\":\"350123\",\"name\":\"罗源县\"},{\"code\":\"350124\",\"name\":\"闽清县\"},{\"code\":\"350125\",\"name\":\"永泰县\"},{\"code\":\"350128\",\"name\":\"平潭县\"},{\"code\":\"350181\",\"name\":\"福清市\"}],[{\"code\":\"350203\",\"name\":\"思明区\"},{\"code\":\"350205\",\"name\":\"海沧区\"},{\"code\":\"350206\",\"name\":\"湖里区\"},{\"code\":\"350211\",\"name\":\"集美区\"},{\"code\":\"350212\",\"name\":\"同安区\"},{\"code\":\"350213\",\"name\":\"翔安区\"}],[{\"code\":\"350302\",\"name\":\"城厢区\"},{\"code\":\"350303\",\"name\":\"涵江区\"},{\"code\":\"350304\",\"name\":\"荔城区\"},{\"code\":\"350305\",\"name\":\"秀屿区\"},{\"code\":\"350322\",\"name\":\"仙游县\"}],[{\"code\":\"350404\",\"name\":\"三元区\"},{\"code\":\"350405\",\"name\":\"沙县区\"},{\"code\":\"350421\",\"name\":\"明溪县\"},{\"code\":\"350423\",\"name\":\"清流县\"},{\"code\":\"350424\",\"name\":\"宁化县\"},{\"code\":\"350425\",\"name\":\"大田县\"},{\"code\":\"350426\",\"name\":\"尤溪县\"},{\"code\":\"350428\",\"name\":\"将乐县\"},{\"code\":\"350429\",\"name\":\"泰宁县\"},{\"code\":\"350430\",\"name\":\"建宁县\"},{\"code\":\"350481\",\"name\":\"永安市\"}],[{\"code\":\"350502\",\"name\":\"鲤城区\"},{\"code\":\"350503\",\"name\":\"丰泽区\"},{\"code\":\"350504\",\"name\":\"洛江区\"},{\"code\":\"350505\",\"name\":\"泉港区\"},{\"code\":\"350521\",\"name\":\"惠安县\"},{\"code\":\"350524\",\"name\":\"安溪县\"},{\"code\":\"350525\",\"name\":\"永春县\"},{\"code\":\"350526\",\"name\":\"德化县\"},{\"code\":\"350527\",\"name\":\"金门县\"},{\"code\":\"350581\",\"name\":\"石狮市\"},{\"code\":\"350582\",\"name\":\"晋江市\"},{\"code\":\"350583\",\"name\":\"南安市\"}],[{\"code\":\"350602\",\"name\":\"芗城区\"},{\"code\":\"350603\",\"name\":\"龙文区\"},{\"code\":\"350604\",\"name\":\"龙海区\"},{\"code\":\"350605\",\"name\":\"长泰区\"},{\"code\":\"350622\",\"name\":\"云霄县\"},{\"code\":\"350623\",\"name\":\"漳浦县\"},{\"code\":\"350624\",\"name\":\"诏安县\"},{\"code\":\"350626\",\"name\":\"东山县\"},{\"code\":\"350627\",\"name\":\"南靖县\"},{\"code\":\"350628\",\"name\":\"平和县\"},{\"code\":\"350629\",\"name\":\"华安县\"}],[{\"code\":\"350702\",\"name\":\"延平区\"},{\"code\":\"350703\",\"name\":\"建阳区\"},{\"code\":\"350721\",\"name\":\"顺昌县\"},{\"code\":\"350722\",\"name\":\"浦城县\"},{\"code\":\"350723\",\"name\":\"光泽县\"},{\"code\":\"350724\",\"name\":\"松溪县\"},{\"code\":\"350725\",\"name\":\"政和县\"},{\"code\":\"350781\",\"name\":\"邵武市\"},{\"code\":\"350782\",\"name\":\"武夷山市\"},{\"code\":\"350783\",\"name\":\"建瓯市\"}],[{\"code\":\"350802\",\"name\":\"新罗区\"},{\"code\":\"350803\",\"name\":\"永定区\"},{\"code\":\"350821\",\"name\":\"长汀县\"},{\"code\":\"350823\",\"name\":\"上杭县\"},{\"code\":\"350824\",\"name\":\"武平县\"},{\"code\":\"350825\",\"name\":\"连城县\"},{\"code\":\"350881\",\"name\":\"漳平市\"}],[{\"code\":\"350902\",\"name\":\"蕉城区\"},{\"code\":\"350921\",\"name\":\"霞浦县\"},{\"code\":\"350922\",\"name\":\"古田县\"},{\"code\":\"350923\",\"name\":\"屏南县\"},{\"code\":\"350924\",\"name\":\"寿宁县\"},{\"code\":\"350925\",\"name\":\"周宁县\"},{\"code\":\"350926\",\"name\":\"柘荣县\"},{\"code\":\"350981\",\"name\":\"福安市\"},{\"code\":\"350982\",\"name\":\"福鼎市\"}]],[[{\"code\":\"360102\",\"name\":\"东湖区\"},{\"code\":\"360103\",\"name\":\"西湖区\"},{\"code\":\"360104\",\"name\":\"青云谱区\"},{\"code\":\"360105\",\"name\":\"湾里区\"},{\"code\":\"360111\",\"name\":\"青山湖区\"},{\"code\":\"360112\",\"name\":\"新建区\"},{\"code\":\"360121\",\"name\":\"南昌县\"},{\"code\":\"360123\",\"name\":\"安义县\"},{\"code\":\"360124\",\"name\":\"进贤县\"}],[{\"code\":\"360202\",\"name\":\"昌江区\"},{\"code\":\"360203\",\"name\":\"珠山区\"},{\"code\":\"360222\",\"name\":\"浮梁县\"},{\"code\":\"360281\",\"name\":\"乐平市\"}],[{\"code\":\"360302\",\"name\":\"安源区\"},{\"code\":\"360313\",\"name\":\"湘东区\"},{\"code\":\"360321\",\"name\":\"莲花县\"},{\"code\":\"360322\",\"name\":\"上栗县\"},{\"code\":\"360323\",\"name\":\"芦溪县\"}],[{\"code\":\"360402\",\"name\":\"濂溪区\"},{\"code\":\"360403\",\"name\":\"浔阳区\"},{\"code\":\"360404\",\"name\":\"柴桑区\"},{\"code\":\"360423\",\"name\":\"武宁县\"},{\"code\":\"360424\",\"name\":\"修水县\"},{\"code\":\"360425\",\"name\":\"永修县\"},{\"code\":\"360426\",\"name\":\"德安县\"},{\"code\":\"360428\",\"name\":\"都昌县\"},{\"code\":\"360429\",\"name\":\"湖口县\"},{\"code\":\"360430\",\"name\":\"彭泽县\"},{\"code\":\"360481\",\"name\":\"瑞昌市\"},{\"code\":\"360482\",\"name\":\"共青城市\"},{\"code\":\"360483\",\"name\":\"庐山市\"}],[{\"code\":\"360502\",\"name\":\"渝水区\"},{\"code\":\"360521\",\"name\":\"分宜县\"}],[{\"code\":\"360602\",\"name\":\"月湖区\"},{\"code\":\"360622\",\"name\":\"余江区\"},{\"code\":\"360681\",\"name\":\"贵溪市\"}],[{\"code\":\"360702\",\"name\":\"章贡区\"},{\"code\":\"360703\",\"name\":\"南康区\"},{\"code\":\"360704\",\"name\":\"赣县区\"},{\"code\":\"360722\",\"name\":\"信丰县\"},{\"code\":\"360723\",\"name\":\"大余县\"},{\"code\":\"360724\",\"name\":\"上犹县\"},{\"code\":\"360725\",\"name\":\"崇义县\"},{\"code\":\"360726\",\"name\":\"安远县\"},{\"code\":\"360727\",\"name\":\"龙南县\"},{\"code\":\"360728\",\"name\":\"定南县\"},{\"code\":\"360729\",\"name\":\"全南县\"},{\"code\":\"360730\",\"name\":\"宁都县\"},{\"code\":\"360731\",\"name\":\"于都县\"},{\"code\":\"360732\",\"name\":\"兴国县\"},{\"code\":\"360733\",\"name\":\"会昌县\"},{\"code\":\"360734\",\"name\":\"寻乌县\"},{\"code\":\"360735\",\"name\":\"石城县\"},{\"code\":\"360781\",\"name\":\"瑞金市\"}],[{\"code\":\"360802\",\"name\":\"吉州区\"},{\"code\":\"360803\",\"name\":\"青原区\"},{\"code\":\"360821\",\"name\":\"吉安县\"},{\"code\":\"360822\",\"name\":\"吉水县\"},{\"code\":\"360823\",\"name\":\"峡江县\"},{\"code\":\"360824\",\"name\":\"新干县\"},{\"code\":\"360825\",\"name\":\"永丰县\"},{\"code\":\"360826\",\"name\":\"泰和县\"},{\"code\":\"360827\",\"name\":\"遂川县\"},{\"code\":\"360828\",\"name\":\"万安县\"},{\"code\":\"360829\",\"name\":\"安福县\"},{\"code\":\"360830\",\"name\":\"永新县\"},{\"code\":\"360881\",\"name\":\"井冈山市\"}],[{\"code\":\"360902\",\"name\":\"袁州区\"},{\"code\":\"360921\",\"name\":\"奉新县\"},{\"code\":\"360922\",\"name\":\"万载县\"},{\"code\":\"360923\",\"name\":\"上高县\"},{\"code\":\"360924\",\"name\":\"宜丰县\"},{\"code\":\"360925\",\"name\":\"靖安县\"},{\"code\":\"360926\",\"name\":\"铜鼓县\"},{\"code\":\"360981\",\"name\":\"丰城市\"},{\"code\":\"360982\",\"name\":\"樟树市\"},{\"code\":\"360983\",\"name\":\"高安市\"}],[{\"code\":\"361002\",\"name\":\"临川区\"},{\"code\":\"361003\",\"name\":\"东乡区\"},{\"code\":\"361021\",\"name\":\"南城县\"},{\"code\":\"361022\",\"name\":\"黎川县\"},{\"code\":\"361023\",\"name\":\"南丰县\"},{\"code\":\"361024\",\"name\":\"崇仁县\"},{\"code\":\"361025\",\"name\":\"乐安县\"},{\"code\":\"361026\",\"name\":\"宜黄县\"},{\"code\":\"361027\",\"name\":\"金溪县\"},{\"code\":\"361028\",\"name\":\"资溪县\"},{\"code\":\"361030\",\"name\":\"广昌县\"}],[{\"code\":\"361102\",\"name\":\"信州区\"},{\"code\":\"361103\",\"name\":\"广丰区\"},{\"code\":\"361121\",\"name\":\"上饶县\"},{\"code\":\"361123\",\"name\":\"玉山县\"},{\"code\":\"361124\",\"name\":\"铅山县\"},{\"code\":\"361125\",\"name\":\"横峰县\"},{\"code\":\"361126\",\"name\":\"弋阳县\"},{\"code\":\"361127\",\"name\":\"余干县\"},{\"code\":\"361128\",\"name\":\"鄱阳县\"},{\"code\":\"361129\",\"name\":\"万年县\"},{\"code\":\"361130\",\"name\":\"婺源县\"},{\"code\":\"361181\",\"name\":\"德兴市\"}]],[[{\"code\":\"370102\",\"name\":\"历下区\"},{\"code\":\"370103\",\"name\":\"市中区\"},{\"code\":\"370104\",\"name\":\"槐荫区\"},{\"code\":\"370105\",\"name\":\"天桥区\"},{\"code\":\"370112\",\"name\":\"历城区\"},{\"code\":\"370113\",\"name\":\"长清区\"},{\"code\":\"370114\",\"name\":\"章丘区\"},{\"code\":\"370124\",\"name\":\"平阴县\"},{\"code\":\"370125\",\"name\":\"济阳县\"},{\"code\":\"370126\",\"name\":\"商河县\"}],[{\"code\":\"370202\",\"name\":\"市南区\"},{\"code\":\"370203\",\"name\":\"市北区\"},{\"code\":\"370211\",\"name\":\"黄岛区\"},{\"code\":\"370212\",\"name\":\"崂山区\"},{\"code\":\"370213\",\"name\":\"李沧区\"},{\"code\":\"370214\",\"name\":\"城阳区\"},{\"code\":\"370215\",\"name\":\"即墨区\"},{\"code\":\"370281\",\"name\":\"胶州市\"},{\"code\":\"370283\",\"name\":\"平度市\"},{\"code\":\"370285\",\"name\":\"莱西市\"}],[{\"code\":\"370302\",\"name\":\"淄川区\"},{\"code\":\"370303\",\"name\":\"张店区\"},{\"code\":\"370304\",\"name\":\"博山区\"},{\"code\":\"370305\",\"name\":\"临淄区\"},{\"code\":\"370306\",\"name\":\"周村区\"},{\"code\":\"370321\",\"name\":\"桓台县\"},{\"code\":\"370322\",\"name\":\"高青县\"},{\"code\":\"370323\",\"name\":\"沂源县\"}],[{\"code\":\"370402\",\"name\":\"市中区\"},{\"code\":\"370403\",\"name\":\"薛城区\"},{\"code\":\"370404\",\"name\":\"峄城区\"},{\"code\":\"370405\",\"name\":\"台儿庄区\"},{\"code\":\"370406\",\"name\":\"山亭区\"},{\"code\":\"370481\",\"name\":\"滕州市\"}],[{\"code\":\"370502\",\"name\":\"东营区\"},{\"code\":\"370503\",\"name\":\"河口区\"},{\"code\":\"370505\",\"name\":\"垦利区\"},{\"code\":\"370522\",\"name\":\"利津县\"},{\"code\":\"370523\",\"name\":\"广饶县\"}],[{\"code\":\"370602\",\"name\":\"芝罘区\"},{\"code\":\"370611\",\"name\":\"福山区\"},{\"code\":\"370612\",\"name\":\"牟平区\"},{\"code\":\"370613\",\"name\":\"莱山区\"},{\"code\":\"370634\",\"name\":\"长岛县\"},{\"code\":\"370681\",\"name\":\"龙口市\"},{\"code\":\"370682\",\"name\":\"莱阳市\"},{\"code\":\"370683\",\"name\":\"莱州市\"},{\"code\":\"370684\",\"name\":\"蓬莱市\"},{\"code\":\"370685\",\"name\":\"招远市\"},{\"code\":\"370686\",\"name\":\"栖霞市\"},{\"code\":\"370687\",\"name\":\"海阳市\"}],[{\"code\":\"370702\",\"name\":\"潍城区\"},{\"code\":\"370703\",\"name\":\"寒亭区\"},{\"code\":\"370704\",\"name\":\"坊子区\"},{\"code\":\"370705\",\"name\":\"奎文区\"},{\"code\":\"370724\",\"name\":\"临朐县\"},{\"code\":\"370725\",\"name\":\"昌乐县\"},{\"code\":\"370781\",\"name\":\"青州市\"},{\"code\":\"370782\",\"name\":\"诸城市\"},{\"code\":\"370783\",\"name\":\"寿光市\"},{\"code\":\"370784\",\"name\":\"安丘市\"},{\"code\":\"370785\",\"name\":\"高密市\"},{\"code\":\"370786\",\"name\":\"昌邑市\"}],[{\"code\":\"370811\",\"name\":\"任城区\"},{\"code\":\"370812\",\"name\":\"兖州区\"},{\"code\":\"370826\",\"name\":\"微山县\"},{\"code\":\"370827\",\"name\":\"鱼台县\"},{\"code\":\"370828\",\"name\":\"金乡县\"},{\"code\":\"370829\",\"name\":\"嘉祥县\"},{\"code\":\"370830\",\"name\":\"汶上县\"},{\"code\":\"370831\",\"name\":\"泗水县\"},{\"code\":\"370832\",\"name\":\"梁山县\"},{\"code\":\"370881\",\"name\":\"曲阜市\"},{\"code\":\"370883\",\"name\":\"邹城市\"}],[{\"code\":\"370902\",\"name\":\"泰山区\"},{\"code\":\"370911\",\"name\":\"岱岳区\"},{\"code\":\"370921\",\"name\":\"宁阳县\"},{\"code\":\"370923\",\"name\":\"东平县\"},{\"code\":\"370982\",\"name\":\"新泰市\"},{\"code\":\"370983\",\"name\":\"肥城市\"}],[{\"code\":\"371002\",\"name\":\"环翠区\"},{\"code\":\"371003\",\"name\":\"文登区\"},{\"code\":\"371082\",\"name\":\"荣成市\"},{\"code\":\"371083\",\"name\":\"乳山市\"}],[{\"code\":\"371102\",\"name\":\"东港区\"},{\"code\":\"371103\",\"name\":\"岚山区\"},{\"code\":\"371121\",\"name\":\"五莲县\"},{\"code\":\"371122\",\"name\":\"莒县\"}],[{\"code\":\"371202\",\"name\":\"莱城区\"},{\"code\":\"371203\",\"name\":\"钢城区\"}],[{\"code\":\"371302\",\"name\":\"兰山区\"},{\"code\":\"371311\",\"name\":\"罗庄区\"},{\"code\":\"371312\",\"name\":\"河东区\"},{\"code\":\"371321\",\"name\":\"沂南县\"},{\"code\":\"371322\",\"name\":\"郯城县\"},{\"code\":\"371323\",\"name\":\"沂水县\"},{\"code\":\"371324\",\"name\":\"兰陵县\"},{\"code\":\"371325\",\"name\":\"费县\"},{\"code\":\"371326\",\"name\":\"平邑县\"},{\"code\":\"371327\",\"name\":\"莒南县\"},{\"code\":\"371328\",\"name\":\"蒙阴县\"},{\"code\":\"371329\",\"name\":\"临沭县\"}],[{\"code\":\"371402\",\"name\":\"德城区\"},{\"code\":\"371403\",\"name\":\"陵城区\"},{\"code\":\"371422\",\"name\":\"宁津县\"},{\"code\":\"371423\",\"name\":\"庆云县\"},{\"code\":\"371424\",\"name\":\"临邑县\"},{\"code\":\"371425\",\"name\":\"齐河县\"},{\"code\":\"371426\",\"name\":\"平原县\"},{\"code\":\"371427\",\"name\":\"夏津县\"},{\"code\":\"371428\",\"name\":\"武城县\"},{\"code\":\"371481\",\"name\":\"乐陵市\"},{\"code\":\"371482\",\"name\":\"禹城市\"}],[{\"code\":\"371502\",\"name\":\"东昌府区\"},{\"code\":\"371521\",\"name\":\"阳谷县\"},{\"code\":\"371522\",\"name\":\"莘县\"},{\"code\":\"371523\",\"name\":\"茌平县\"},{\"code\":\"371524\",\"name\":\"东阿县\"},{\"code\":\"371525\",\"name\":\"冠县\"},{\"code\":\"371526\",\"name\":\"高唐县\"},{\"code\":\"371581\",\"name\":\"临清市\"}],[{\"code\":\"371602\",\"name\":\"滨城区\"},{\"code\":\"371603\",\"name\":\"沾化区\"},{\"code\":\"371621\",\"name\":\"惠民县\"},{\"code\":\"371622\",\"name\":\"阳信县\"},{\"code\":\"371623\",\"name\":\"无棣县\"},{\"code\":\"371625\",\"name\":\"博兴县\"},{\"code\":\"371626\",\"name\":\"邹平县\"}],[{\"code\":\"371702\",\"name\":\"牡丹区\"},{\"code\":\"371703\",\"name\":\"定陶区\"},{\"code\":\"371721\",\"name\":\"曹县\"},{\"code\":\"371722\",\"name\":\"单县\"},{\"code\":\"371723\",\"name\":\"成武县\"},{\"code\":\"371724\",\"name\":\"巨野县\"},{\"code\":\"371725\",\"name\":\"郓城县\"},{\"code\":\"371726\",\"name\":\"鄄城县\"},{\"code\":\"371728\",\"name\":\"东明县\"}]],[[{\"code\":\"410102\",\"name\":\"中原区\"},{\"code\":\"410103\",\"name\":\"二七区\"},{\"code\":\"410104\",\"name\":\"管城回族区\"},{\"code\":\"410105\",\"name\":\"金水区\"},{\"code\":\"410106\",\"name\":\"上街区\"},{\"code\":\"410108\",\"name\":\"惠济区\"},{\"code\":\"410122\",\"name\":\"中牟县\"},{\"code\":\"410181\",\"name\":\"巩义市\"},{\"code\":\"410182\",\"name\":\"荥阳市\"},{\"code\":\"410183\",\"name\":\"新密市\"},{\"code\":\"410184\",\"name\":\"新郑市\"},{\"code\":\"410185\",\"name\":\"登封市\"}],[{\"code\":\"410202\",\"name\":\"龙亭区\"},{\"code\":\"410203\",\"name\":\"顺河回族区\"},{\"code\":\"410204\",\"name\":\"鼓楼区\"},{\"code\":\"410205\",\"name\":\"禹王台区\"},{\"code\":\"410212\",\"name\":\"祥符区\"},{\"code\":\"410221\",\"name\":\"杞县\"},{\"code\":\"410222\",\"name\":\"通许县\"},{\"code\":\"410223\",\"name\":\"尉氏县\"},{\"code\":\"410225\",\"name\":\"兰考县\"}],[{\"code\":\"410302\",\"name\":\"老城区\"},{\"code\":\"410303\",\"name\":\"西工区\"},{\"code\":\"410304\",\"name\":\"瀍河回族区\"},{\"code\":\"410305\",\"name\":\"涧西区\"},{\"code\":\"410307\",\"name\":\"偃师区\"},{\"code\":\"410308\",\"name\":\"孟津区\"},{\"code\":\"410311\",\"name\":\"洛龙区\"},{\"code\":\"410323\",\"name\":\"新安县\"},{\"code\":\"410324\",\"name\":\"栾川县\"},{\"code\":\"410325\",\"name\":\"嵩县\"},{\"code\":\"410326\",\"name\":\"汝阳县\"},{\"code\":\"410327\",\"name\":\"宜阳县\"},{\"code\":\"410328\",\"name\":\"洛宁县\"},{\"code\":\"410329\",\"name\":\"伊川县\"}],[{\"code\":\"410402\",\"name\":\"新华区\"},{\"code\":\"410403\",\"name\":\"卫东区\"},{\"code\":\"410404\",\"name\":\"石龙区\"},{\"code\":\"410411\",\"name\":\"湛河区\"},{\"code\":\"410421\",\"name\":\"宝丰县\"},{\"code\":\"410422\",\"name\":\"叶县\"},{\"code\":\"410423\",\"name\":\"鲁山县\"},{\"code\":\"410425\",\"name\":\"郏县\"},{\"code\":\"410481\",\"name\":\"舞钢市\"},{\"code\":\"410482\",\"name\":\"汝州市\"}],[{\"code\":\"410502\",\"name\":\"文峰区\"},{\"code\":\"410503\",\"name\":\"北关区\"},{\"code\":\"410505\",\"name\":\"殷都区\"},{\"code\":\"410506\",\"name\":\"龙安区\"},{\"code\":\"410522\",\"name\":\"安阳县\"},{\"code\":\"410523\",\"name\":\"汤阴县\"},{\"code\":\"410526\",\"name\":\"滑县\"},{\"code\":\"410527\",\"name\":\"内黄县\"},{\"code\":\"410581\",\"name\":\"林州市\"}],[{\"code\":\"410602\",\"name\":\"鹤山区\"},{\"code\":\"410603\",\"name\":\"山城区\"},{\"code\":\"410611\",\"name\":\"淇滨区\"},{\"code\":\"410621\",\"name\":\"浚县\"},{\"code\":\"410622\",\"name\":\"淇县\"}],[{\"code\":\"410702\",\"name\":\"红旗区\"},{\"code\":\"410703\",\"name\":\"卫滨区\"},{\"code\":\"410704\",\"name\":\"凤泉区\"},{\"code\":\"410711\",\"name\":\"牧野区\"},{\"code\":\"410721\",\"name\":\"新乡县\"},{\"code\":\"410724\",\"name\":\"获嘉县\"},{\"code\":\"410725\",\"name\":\"原阳县\"},{\"code\":\"410726\",\"name\":\"延津县\"},{\"code\":\"410727\",\"name\":\"封丘县\"},{\"code\":\"410728\",\"name\":\"长垣县\"},{\"code\":\"410781\",\"name\":\"卫辉市\"},{\"code\":\"410782\",\"name\":\"辉县市\"}],[{\"code\":\"410802\",\"name\":\"解放区\"},{\"code\":\"410803\",\"name\":\"中站区\"},{\"code\":\"410804\",\"name\":\"马村区\"},{\"code\":\"410811\",\"name\":\"山阳区\"},{\"code\":\"410821\",\"name\":\"修武县\"},{\"code\":\"410822\",\"name\":\"博爱县\"},{\"code\":\"410823\",\"name\":\"武陟县\"},{\"code\":\"410825\",\"name\":\"温县\"},{\"code\":\"410882\",\"name\":\"沁阳市\"},{\"code\":\"410883\",\"name\":\"孟州市\"}],[{\"code\":\"410902\",\"name\":\"华龙区\"},{\"code\":\"410922\",\"name\":\"清丰县\"},{\"code\":\"410923\",\"name\":\"南乐县\"},{\"code\":\"410926\",\"name\":\"范县\"},{\"code\":\"410927\",\"name\":\"台前县\"},{\"code\":\"410928\",\"name\":\"濮阳县\"}],[{\"code\":\"411002\",\"name\":\"魏都区\"},{\"code\":\"411003\",\"name\":\"建安区\"},{\"code\":\"411024\",\"name\":\"鄢陵县\"},{\"code\":\"411025\",\"name\":\"襄城县\"},{\"code\":\"411081\",\"name\":\"禹州市\"},{\"code\":\"411082\",\"name\":\"长葛市\"}],[{\"code\":\"411102\",\"name\":\"源汇区\"},{\"code\":\"411103\",\"name\":\"郾城区\"},{\"code\":\"411104\",\"name\":\"召陵区\"},{\"code\":\"411121\",\"name\":\"舞阳县\"},{\"code\":\"411122\",\"name\":\"临颍县\"}],[{\"code\":\"411202\",\"name\":\"湖滨区\"},{\"code\":\"411203\",\"name\":\"陕州区\"},{\"code\":\"411221\",\"name\":\"渑池县\"},{\"code\":\"411224\",\"name\":\"卢氏县\"},{\"code\":\"411281\",\"name\":\"义马市\"},{\"code\":\"411282\",\"name\":\"灵宝市\"}],[{\"code\":\"411302\",\"name\":\"宛城区\"},{\"code\":\"411303\",\"name\":\"卧龙区\"},{\"code\":\"411321\",\"name\":\"南召县\"},{\"code\":\"411322\",\"name\":\"方城县\"},{\"code\":\"411323\",\"name\":\"西峡县\"},{\"code\":\"411324\",\"name\":\"镇平县\"},{\"code\":\"411325\",\"name\":\"内乡县\"},{\"code\":\"411326\",\"name\":\"淅川县\"},{\"code\":\"411327\",\"name\":\"社旗县\"},{\"code\":\"411328\",\"name\":\"唐河县\"},{\"code\":\"411329\",\"name\":\"新野县\"},{\"code\":\"411330\",\"name\":\"桐柏县\"},{\"code\":\"411381\",\"name\":\"邓州市\"}],[{\"code\":\"411402\",\"name\":\"梁园区\"},{\"code\":\"411403\",\"name\":\"睢阳区\"},{\"code\":\"411421\",\"name\":\"民权县\"},{\"code\":\"411422\",\"name\":\"睢县\"},{\"code\":\"411423\",\"name\":\"宁陵县\"},{\"code\":\"411424\",\"name\":\"柘城县\"},{\"code\":\"411425\",\"name\":\"虞城县\"},{\"code\":\"411426\",\"name\":\"夏邑县\"},{\"code\":\"411481\",\"name\":\"永城市\"}],[{\"code\":\"411502\",\"name\":\"浉河区\"},{\"code\":\"411503\",\"name\":\"平桥区\"},{\"code\":\"411521\",\"name\":\"罗山县\"},{\"code\":\"411522\",\"name\":\"光山县\"},{\"code\":\"411523\",\"name\":\"新县\"},{\"code\":\"411524\",\"name\":\"商城县\"},{\"code\":\"411525\",\"name\":\"固始县\"},{\"code\":\"411526\",\"name\":\"潢川县\"},{\"code\":\"411527\",\"name\":\"淮滨县\"},{\"code\":\"411528\",\"name\":\"息县\"}],[{\"code\":\"411602\",\"name\":\"川汇区\"},{\"code\":\"411621\",\"name\":\"扶沟县\"},{\"code\":\"411622\",\"name\":\"西华县\"},{\"code\":\"411623\",\"name\":\"商水县\"},{\"code\":\"411624\",\"name\":\"沈丘县\"},{\"code\":\"411625\",\"name\":\"郸城县\"},{\"code\":\"411626\",\"name\":\"淮阳县\"},{\"code\":\"411627\",\"name\":\"太康县\"},{\"code\":\"411628\",\"name\":\"鹿邑县\"},{\"code\":\"411681\",\"name\":\"项城市\"}],[{\"code\":\"411702\",\"name\":\"驿城区\"},{\"code\":\"411721\",\"name\":\"西平县\"},{\"code\":\"411722\",\"name\":\"上蔡县\"},{\"code\":\"411723\",\"name\":\"平舆县\"},{\"code\":\"411724\",\"name\":\"正阳县\"},{\"code\":\"411725\",\"name\":\"确山县\"},{\"code\":\"411726\",\"name\":\"泌阳县\"},{\"code\":\"411727\",\"name\":\"汝南县\"},{\"code\":\"411728\",\"name\":\"遂平县\"},{\"code\":\"411729\",\"name\":\"新蔡县\"}],[{\"code\":\"419001\",\"name\":\"济源市\"}]],[[{\"code\":\"420102\",\"name\":\"江岸区\"},{\"code\":\"420103\",\"name\":\"江汉区\"},{\"code\":\"420104\",\"name\":\"硚口区\"},{\"code\":\"420105\",\"name\":\"汉阳区\"},{\"code\":\"420106\",\"name\":\"武昌区\"},{\"code\":\"420107\",\"name\":\"青山区\"},{\"code\":\"420111\",\"name\":\"洪山区\"},{\"code\":\"420112\",\"name\":\"东西湖区\"},{\"code\":\"420113\",\"name\":\"汉南区\"},{\"code\":\"420114\",\"name\":\"蔡甸区\"},{\"code\":\"420115\",\"name\":\"江夏区\"},{\"code\":\"420116\",\"name\":\"黄陂区\"},{\"code\":\"420117\",\"name\":\"新洲区\"}],[{\"code\":\"420202\",\"name\":\"黄石港区\"},{\"code\":\"420203\",\"name\":\"西塞山区\"},{\"code\":\"420204\",\"name\":\"下陆区\"},{\"code\":\"420205\",\"name\":\"铁山区\"},{\"code\":\"420222\",\"name\":\"阳新县\"},{\"code\":\"420281\",\"name\":\"大冶市\"}],[{\"code\":\"420302\",\"name\":\"茅箭区\"},{\"code\":\"420303\",\"name\":\"张湾区\"},{\"code\":\"420304\",\"name\":\"郧阳区\"},{\"code\":\"420322\",\"name\":\"郧西县\"},{\"code\":\"420323\",\"name\":\"竹山县\"},{\"code\":\"420324\",\"name\":\"竹溪县\"},{\"code\":\"420325\",\"name\":\"房县\"},{\"code\":\"420381\",\"name\":\"丹江口市\"}],[{\"code\":\"420502\",\"name\":\"西陵区\"},{\"code\":\"420503\",\"name\":\"伍家岗区\"},{\"code\":\"420504\",\"name\":\"点军区\"},{\"code\":\"420505\",\"name\":\"猇亭区\"},{\"code\":\"420506\",\"name\":\"夷陵区\"},{\"code\":\"420525\",\"name\":\"远安县\"},{\"code\":\"420526\",\"name\":\"兴山县\"},{\"code\":\"420527\",\"name\":\"秭归县\"},{\"code\":\"420528\",\"name\":\"长阳土家族自治县\"},{\"code\":\"420529\",\"name\":\"五峰土家族自治县\"},{\"code\":\"420581\",\"name\":\"宜都市\"},{\"code\":\"420582\",\"name\":\"当阳市\"},{\"code\":\"420583\",\"name\":\"枝江市\"}],[{\"code\":\"420602\",\"name\":\"襄城区\"},{\"code\":\"420606\",\"name\":\"樊城区\"},{\"code\":\"420607\",\"name\":\"襄州区\"},{\"code\":\"420624\",\"name\":\"南漳县\"},{\"code\":\"420625\",\"name\":\"谷城县\"},{\"code\":\"420626\",\"name\":\"保康县\"},{\"code\":\"420682\",\"name\":\"老河口市\"},{\"code\":\"420683\",\"name\":\"枣阳市\"},{\"code\":\"420684\",\"name\":\"宜城市\"}],[{\"code\":\"420702\",\"name\":\"梁子湖区\"},{\"code\":\"420703\",\"name\":\"华容区\"},{\"code\":\"420704\",\"name\":\"鄂城区\"}],[{\"code\":\"420802\",\"name\":\"东宝区\"},{\"code\":\"420804\",\"name\":\"掇刀区\"},{\"code\":\"420821\",\"name\":\"京山县\"},{\"code\":\"420822\",\"name\":\"沙洋县\"},{\"code\":\"420881\",\"name\":\"钟祥市\"}],[{\"code\":\"420902\",\"name\":\"孝南区\"},{\"code\":\"420921\",\"name\":\"孝昌县\"},{\"code\":\"420922\",\"name\":\"大悟县\"},{\"code\":\"420923\",\"name\":\"云梦县\"},{\"code\":\"420981\",\"name\":\"应城市\"},{\"code\":\"420982\",\"name\":\"安陆市\"},{\"code\":\"420984\",\"name\":\"汉川市\"}],[{\"code\":\"421002\",\"name\":\"沙市区\"},{\"code\":\"421003\",\"name\":\"荆州区\"},{\"code\":\"421022\",\"name\":\"公安县\"},{\"code\":\"421023\",\"name\":\"监利县\"},{\"code\":\"421024\",\"name\":\"江陵县\"},{\"code\":\"421081\",\"name\":\"石首市\"},{\"code\":\"421083\",\"name\":\"洪湖市\"},{\"code\":\"421087\",\"name\":\"松滋市\"}],[{\"code\":\"421102\",\"name\":\"黄州区\"},{\"code\":\"421121\",\"name\":\"团风县\"},{\"code\":\"421122\",\"name\":\"红安县\"},{\"code\":\"421123\",\"name\":\"罗田县\"},{\"code\":\"421124\",\"name\":\"英山县\"},{\"code\":\"421125\",\"name\":\"浠水县\"},{\"code\":\"421126\",\"name\":\"蕲春县\"},{\"code\":\"421127\",\"name\":\"黄梅县\"},{\"code\":\"421181\",\"name\":\"麻城市\"},{\"code\":\"421182\",\"name\":\"武穴市\"}],[{\"code\":\"421202\",\"name\":\"咸安区\"},{\"code\":\"421221\",\"name\":\"嘉鱼县\"},{\"code\":\"421222\",\"name\":\"通城县\"},{\"code\":\"421223\",\"name\":\"崇阳县\"},{\"code\":\"421224\",\"name\":\"通山县\"},{\"code\":\"421281\",\"name\":\"赤壁市\"}],[{\"code\":\"421303\",\"name\":\"曾都区\"},{\"code\":\"421321\",\"name\":\"随县\"},{\"code\":\"421381\",\"name\":\"广水市\"}],[{\"code\":\"422801\",\"name\":\"恩施市\"},{\"code\":\"422802\",\"name\":\"利川市\"},{\"code\":\"422822\",\"name\":\"建始县\"},{\"code\":\"422823\",\"name\":\"巴东县\"},{\"code\":\"422825\",\"name\":\"宣恩县\"},{\"code\":\"422826\",\"name\":\"咸丰县\"},{\"code\":\"422827\",\"name\":\"来凤县\"},{\"code\":\"422828\",\"name\":\"鹤峰县\"}],[{\"code\":\"429004\",\"name\":\"仙桃市\"},{\"code\":\"429005\",\"name\":\"潜江市\"},{\"code\":\"429006\",\"name\":\"天门市\"},{\"code\":\"429021\",\"name\":\"神农架林区\"}]],[[{\"code\":\"430102\",\"name\":\"芙蓉区\"},{\"code\":\"430103\",\"name\":\"天心区\"},{\"code\":\"430104\",\"name\":\"岳麓区\"},{\"code\":\"430105\",\"name\":\"开福区\"},{\"code\":\"430111\",\"name\":\"雨花区\"},{\"code\":\"430112\",\"name\":\"望城区\"},{\"code\":\"430121\",\"name\":\"长沙县\"},{\"code\":\"430181\",\"name\":\"浏阳市\"},{\"code\":\"430182\",\"name\":\"宁乡市\"}],[{\"code\":\"430202\",\"name\":\"荷塘区\"},{\"code\":\"430203\",\"name\":\"芦淞区\"},{\"code\":\"430204\",\"name\":\"石峰区\"},{\"code\":\"430211\",\"name\":\"天元区\"},{\"code\":\"430221\",\"name\":\"株洲县\"},{\"code\":\"430223\",\"name\":\"攸县\"},{\"code\":\"430224\",\"name\":\"茶陵县\"},{\"code\":\"430225\",\"name\":\"炎陵县\"},{\"code\":\"430281\",\"name\":\"醴陵市\"}],[{\"code\":\"430302\",\"name\":\"雨湖区\"},{\"code\":\"430304\",\"name\":\"岳塘区\"},{\"code\":\"430321\",\"name\":\"湘潭县\"},{\"code\":\"430381\",\"name\":\"湘乡市\"},{\"code\":\"430382\",\"name\":\"韶山市\"}],[{\"code\":\"430405\",\"name\":\"珠晖区\"},{\"code\":\"430406\",\"name\":\"雁峰区\"},{\"code\":\"430407\",\"name\":\"石鼓区\"},{\"code\":\"430408\",\"name\":\"蒸湘区\"},{\"code\":\"430412\",\"name\":\"南岳区\"},{\"code\":\"430421\",\"name\":\"衡阳县\"},{\"code\":\"430422\",\"name\":\"衡南县\"},{\"code\":\"430423\",\"name\":\"衡山县\"},{\"code\":\"430424\",\"name\":\"衡东县\"},{\"code\":\"430426\",\"name\":\"祁东县\"},{\"code\":\"430481\",\"name\":\"耒阳市\"},{\"code\":\"430482\",\"name\":\"常宁市\"}],[{\"code\":\"430502\",\"name\":\"双清区\"},{\"code\":\"430503\",\"name\":\"大祥区\"},{\"code\":\"430511\",\"name\":\"北塔区\"},{\"code\":\"430521\",\"name\":\"邵东县\"},{\"code\":\"430522\",\"name\":\"新邵县\"},{\"code\":\"430523\",\"name\":\"邵阳县\"},{\"code\":\"430524\",\"name\":\"隆回县\"},{\"code\":\"430525\",\"name\":\"洞口县\"},{\"code\":\"430527\",\"name\":\"绥宁县\"},{\"code\":\"430528\",\"name\":\"新宁县\"},{\"code\":\"430529\",\"name\":\"城步苗族自治县\"},{\"code\":\"430581\",\"name\":\"武冈市\"}],[{\"code\":\"430602\",\"name\":\"岳阳楼区\"},{\"code\":\"430603\",\"name\":\"云溪区\"},{\"code\":\"430611\",\"name\":\"君山区\"},{\"code\":\"430621\",\"name\":\"岳阳县\"},{\"code\":\"430623\",\"name\":\"华容县\"},{\"code\":\"430624\",\"name\":\"湘阴县\"},{\"code\":\"430626\",\"name\":\"平江县\"},{\"code\":\"430681\",\"name\":\"汨罗市\"},{\"code\":\"430682\",\"name\":\"临湘市\"}],[{\"code\":\"430702\",\"name\":\"武陵区\"},{\"code\":\"430703\",\"name\":\"鼎城区\"},{\"code\":\"430721\",\"name\":\"安乡县\"},{\"code\":\"430722\",\"name\":\"汉寿县\"},{\"code\":\"430723\",\"name\":\"澧县\"},{\"code\":\"430724\",\"name\":\"临澧县\"},{\"code\":\"430725\",\"name\":\"桃源县\"},{\"code\":\"430726\",\"name\":\"石门县\"},{\"code\":\"430781\",\"name\":\"津市市\"}],[{\"code\":\"430802\",\"name\":\"永定区\"},{\"code\":\"430811\",\"name\":\"武陵源区\"},{\"code\":\"430821\",\"name\":\"慈利县\"},{\"code\":\"430822\",\"name\":\"桑植县\"}],[{\"code\":\"430902\",\"name\":\"资阳区\"},{\"code\":\"430903\",\"name\":\"赫山区\"},{\"code\":\"430921\",\"name\":\"南县\"},{\"code\":\"430922\",\"name\":\"桃江县\"},{\"code\":\"430923\",\"name\":\"安化县\"},{\"code\":\"430981\",\"name\":\"沅江市\"}],[{\"code\":\"431002\",\"name\":\"北湖区\"},{\"code\":\"431003\",\"name\":\"苏仙区\"},{\"code\":\"431021\",\"name\":\"桂阳县\"},{\"code\":\"431022\",\"name\":\"宜章县\"},{\"code\":\"431023\",\"name\":\"永兴县\"},{\"code\":\"431024\",\"name\":\"嘉禾县\"},{\"code\":\"431025\",\"name\":\"临武县\"},{\"code\":\"431026\",\"name\":\"汝城县\"},{\"code\":\"431027\",\"name\":\"桂东县\"},{\"code\":\"431028\",\"name\":\"安仁县\"},{\"code\":\"431081\",\"name\":\"资兴市\"}],[{\"code\":\"431102\",\"name\":\"零陵区\"},{\"code\":\"431103\",\"name\":\"冷水滩区\"},{\"code\":\"431122\",\"name\":\"东安县\"},{\"code\":\"431123\",\"name\":\"双牌县\"},{\"code\":\"431124\",\"name\":\"道县\"},{\"code\":\"431125\",\"name\":\"江永县\"},{\"code\":\"431126\",\"name\":\"宁远县\"},{\"code\":\"431127\",\"name\":\"蓝山县\"},{\"code\":\"431128\",\"name\":\"新田县\"},{\"code\":\"431129\",\"name\":\"江华瑶族自治县\"},{\"code\":\"431181\",\"name\":\"祁阳市\"}],[{\"code\":\"431202\",\"name\":\"鹤城区\"},{\"code\":\"431221\",\"name\":\"中方县\"},{\"code\":\"431222\",\"name\":\"沅陵县\"},{\"code\":\"431223\",\"name\":\"辰溪县\"},{\"code\":\"431224\",\"name\":\"溆浦县\"},{\"code\":\"431225\",\"name\":\"会同县\"},{\"code\":\"431226\",\"name\":\"麻阳苗族自治县\"},{\"code\":\"431227\",\"name\":\"新晃侗族自治县\"},{\"code\":\"431228\",\"name\":\"芷江侗族自治县\"},{\"code\":\"431229\",\"name\":\"靖州苗族侗族自治县\"},{\"code\":\"431230\",\"name\":\"通道侗族自治县\"},{\"code\":\"431281\",\"name\":\"洪江市\"}],[{\"code\":\"431302\",\"name\":\"娄星区\"},{\"code\":\"431321\",\"name\":\"双峰县\"},{\"code\":\"431322\",\"name\":\"新化县\"},{\"code\":\"431381\",\"name\":\"冷水江市\"},{\"code\":\"431382\",\"name\":\"涟源市\"}],[{\"code\":\"433101\",\"name\":\"吉首市\"},{\"code\":\"433122\",\"name\":\"泸溪县\"},{\"code\":\"433123\",\"name\":\"凤凰县\"},{\"code\":\"433124\",\"name\":\"花垣县\"},{\"code\":\"433125\",\"name\":\"保靖县\"},{\"code\":\"433126\",\"name\":\"古丈县\"},{\"code\":\"433127\",\"name\":\"永顺县\"},{\"code\":\"433130\",\"name\":\"龙山县\"}]],[[{\"code\":\"440103\",\"name\":\"荔湾区\"},{\"code\":\"440104\",\"name\":\"越秀区\"},{\"code\":\"440105\",\"name\":\"海珠区\"},{\"code\":\"440106\",\"name\":\"天河区\"},{\"code\":\"440111\",\"name\":\"白云区\"},{\"code\":\"440112\",\"name\":\"黄埔区\"},{\"code\":\"440113\",\"name\":\"番禺区\"},{\"code\":\"440114\",\"name\":\"花都区\"},{\"code\":\"440115\",\"name\":\"南沙区\"},{\"code\":\"440117\",\"name\":\"从化区\"},{\"code\":\"440118\",\"name\":\"增城区\"}],[{\"code\":\"440203\",\"name\":\"武江区\"},{\"code\":\"440204\",\"name\":\"浈江区\"},{\"code\":\"440205\",\"name\":\"曲江区\"},{\"code\":\"440222\",\"name\":\"始兴县\"},{\"code\":\"440224\",\"name\":\"仁化县\"},{\"code\":\"440229\",\"name\":\"翁源县\"},{\"code\":\"440232\",\"name\":\"乳源瑶族自治县\"},{\"code\":\"440233\",\"name\":\"新丰县\"},{\"code\":\"440281\",\"name\":\"乐昌市\"},{\"code\":\"440282\",\"name\":\"南雄市\"}],[{\"code\":\"440303\",\"name\":\"罗湖区\"},{\"code\":\"440304\",\"name\":\"福田区\"},{\"code\":\"440305\",\"name\":\"南山区\"},{\"code\":\"440306\",\"name\":\"宝安区\"},{\"code\":\"440307\",\"name\":\"龙岗区\"},{\"code\":\"440308\",\"name\":\"盐田区\"},{\"code\":\"440309\",\"name\":\"龙华区\"},{\"code\":\"440310\",\"name\":\"坪山区\"}],[{\"code\":\"440402\",\"name\":\"香洲区\"},{\"code\":\"440403\",\"name\":\"斗门区\"},{\"code\":\"440404\",\"name\":\"金湾区\"}],[{\"code\":\"440507\",\"name\":\"龙湖区\"},{\"code\":\"440511\",\"name\":\"金平区\"},{\"code\":\"440512\",\"name\":\"濠江区\"},{\"code\":\"440513\",\"name\":\"潮阳区\"},{\"code\":\"440514\",\"name\":\"潮南区\"},{\"code\":\"440515\",\"name\":\"澄海区\"},{\"code\":\"440523\",\"name\":\"南澳县\"}],[{\"code\":\"440604\",\"name\":\"禅城区\"},{\"code\":\"440605\",\"name\":\"南海区\"},{\"code\":\"440606\",\"name\":\"顺德区\"},{\"code\":\"440607\",\"name\":\"三水区\"},{\"code\":\"440608\",\"name\":\"高明区\"}],[{\"code\":\"440703\",\"name\":\"蓬江区\"},{\"code\":\"440704\",\"name\":\"江海区\"},{\"code\":\"440705\",\"name\":\"新会区\"},{\"code\":\"440781\",\"name\":\"台山市\"},{\"code\":\"440783\",\"name\":\"开平市\"},{\"code\":\"440784\",\"name\":\"鹤山市\"},{\"code\":\"440785\",\"name\":\"恩平市\"}],[{\"code\":\"440802\",\"name\":\"赤坎区\"},{\"code\":\"440803\",\"name\":\"霞山区\"},{\"code\":\"440804\",\"name\":\"坡头区\"},{\"code\":\"440811\",\"name\":\"麻章区\"},{\"code\":\"440823\",\"name\":\"遂溪县\"},{\"code\":\"440825\",\"name\":\"徐闻县\"},{\"code\":\"440881\",\"name\":\"廉江市\"},{\"code\":\"440882\",\"name\":\"雷州市\"},{\"code\":\"440883\",\"name\":\"吴川市\"}],[{\"code\":\"440902\",\"name\":\"茂南区\"},{\"code\":\"440904\",\"name\":\"电白区\"},{\"code\":\"440981\",\"name\":\"高州市\"},{\"code\":\"440982\",\"name\":\"化州市\"},{\"code\":\"440983\",\"name\":\"信宜市\"}],[{\"code\":\"441202\",\"name\":\"端州区\"},{\"code\":\"441203\",\"name\":\"鼎湖区\"},{\"code\":\"441204\",\"name\":\"高要区\"},{\"code\":\"441223\",\"name\":\"广宁县\"},{\"code\":\"441224\",\"name\":\"怀集县\"},{\"code\":\"441225\",\"name\":\"封开县\"},{\"code\":\"441226\",\"name\":\"德庆县\"},{\"code\":\"441284\",\"name\":\"四会市\"}],[{\"code\":\"441302\",\"name\":\"惠城区\"},{\"code\":\"441303\",\"name\":\"惠阳区\"},{\"code\":\"441322\",\"name\":\"博罗县\"},{\"code\":\"441323\",\"name\":\"惠东县\"},{\"code\":\"441324\",\"name\":\"龙门县\"}],[{\"code\":\"441402\",\"name\":\"梅江区\"},{\"code\":\"441403\",\"name\":\"梅县区\"},{\"code\":\"441422\",\"name\":\"大埔县\"},{\"code\":\"441423\",\"name\":\"丰顺县\"},{\"code\":\"441424\",\"name\":\"五华县\"},{\"code\":\"441426\",\"name\":\"平远县\"},{\"code\":\"441427\",\"name\":\"蕉岭县\"},{\"code\":\"441481\",\"name\":\"兴宁市\"}],[{\"code\":\"441502\",\"name\":\"城区\"},{\"code\":\"441521\",\"name\":\"海丰县\"},{\"code\":\"441523\",\"name\":\"陆河县\"},{\"code\":\"441581\",\"name\":\"陆丰市\"}],[{\"code\":\"441602\",\"name\":\"源城区\"},{\"code\":\"441621\",\"name\":\"紫金县\"},{\"code\":\"441622\",\"name\":\"龙川县\"},{\"code\":\"441623\",\"name\":\"连平县\"},{\"code\":\"441624\",\"name\":\"和平县\"},{\"code\":\"441625\",\"name\":\"东源县\"}],[{\"code\":\"441702\",\"name\":\"江城区\"},{\"code\":\"441704\",\"name\":\"阳东区\"},{\"code\":\"441721\",\"name\":\"阳西县\"},{\"code\":\"441781\",\"name\":\"阳春市\"}],[{\"code\":\"441802\",\"name\":\"清城区\"},{\"code\":\"441803\",\"name\":\"清新区\"},{\"code\":\"441821\",\"name\":\"佛冈县\"},{\"code\":\"441823\",\"name\":\"阳山县\"},{\"code\":\"441825\",\"name\":\"连山壮族瑶族自治县\"},{\"code\":\"441826\",\"name\":\"连南瑶族自治县\"},{\"code\":\"441881\",\"name\":\"英德市\"},{\"code\":\"441882\",\"name\":\"连州市\"}],[{\"code\":\"441901\",\"name\":\"东城街道\"},{\"code\":\"441902\",\"name\":\"南城街道\"},{\"code\":\"441903\",\"name\":\"万江街道\"},{\"code\":\"441904\",\"name\":\"莞城街道\"},{\"code\":\"441905\",\"name\":\"石碣镇\"},{\"code\":\"441906\",\"name\":\"石龙镇\"},{\"code\":\"441907\",\"name\":\"茶山镇\"},{\"code\":\"441908\",\"name\":\"石排镇\"},{\"code\":\"441909\",\"name\":\"企石镇\"},{\"code\":\"441910\",\"name\":\"横沥镇\"},{\"code\":\"441911\",\"name\":\"桥头镇\"},{\"code\":\"441912\",\"name\":\"谢岗镇\"},{\"code\":\"441913\",\"name\":\"东坑镇\"},{\"code\":\"441914\",\"name\":\"常平镇\"},{\"code\":\"441915\",\"name\":\"寮步镇\"},{\"code\":\"441916\",\"name\":\"樟木头镇\"},{\"code\":\"441917\",\"name\":\"大朗镇\"},{\"code\":\"441918\",\"name\":\"黄江镇\"},{\"code\":\"441919\",\"name\":\"清溪镇\"},{\"code\":\"441920\",\"name\":\"塘厦镇\"},{\"code\":\"441921\",\"name\":\"凤岗镇\"},{\"code\":\"441922\",\"name\":\"大岭山镇\"},{\"code\":\"441923\",\"name\":\"长安镇\"},{\"code\":\"441924\",\"name\":\"虎门镇\"},{\"code\":\"441925\",\"name\":\"厚街镇\"},{\"code\":\"441926\",\"name\":\"沙田镇\"},{\"code\":\"441927\",\"name\":\"道滘镇\"},{\"code\":\"441928\",\"name\":\"洪梅镇\"},{\"code\":\"441929\",\"name\":\"麻涌镇\"},{\"code\":\"441930\",\"name\":\"望牛墩镇\"},{\"code\":\"441931\",\"name\":\"中堂镇\"},{\"code\":\"441932\",\"name\":\"高埗镇\"},{\"code\":\"441933\",\"name\":\"松山湖管委会\"},{\"code\":\"441934\",\"name\":\"虎门港管委会\"},{\"code\":\"441935\",\"name\":\"东莞生态园\"}],[{\"code\":\"442001\",\"name\":\"石岐区街道\"},{\"code\":\"442002\",\"name\":\"东区街道\"},{\"code\":\"442003\",\"name\":\"火炬开发区\"},{\"code\":\"442004\",\"name\":\"西区街道\"},{\"code\":\"442005\",\"name\":\"南区街道\"},{\"code\":\"442006\",\"name\":\"五桂山街道\"},{\"code\":\"442007\",\"name\":\"小榄镇\"},{\"code\":\"442008\",\"name\":\"黄圃镇\"},{\"code\":\"442009\",\"name\":\"民众镇\"},{\"code\":\"442010\",\"name\":\"东凤镇\"},{\"code\":\"442011\",\"name\":\"东升镇\"},{\"code\":\"442012\",\"name\":\"古镇镇\"},{\"code\":\"442013\",\"name\":\"沙溪镇\"},{\"code\":\"442014\",\"name\":\"坦洲镇\"},{\"code\":\"442015\",\"name\":\"港口镇\"},{\"code\":\"442016\",\"name\":\"三角镇\"},{\"code\":\"442017\",\"name\":\"横栏镇\"},{\"code\":\"442018\",\"name\":\"南头镇\"},{\"code\":\"442019\",\"name\":\"阜沙镇\"},{\"code\":\"442020\",\"name\":\"南朗镇\"},{\"code\":\"442021\",\"name\":\"三乡镇\"},{\"code\":\"442022\",\"name\":\"板芙镇\"},{\"code\":\"442023\",\"name\":\"大涌镇\"},{\"code\":\"442024\",\"name\":\"神湾镇\"}],[{\"code\":\"445102\",\"name\":\"湘桥区\"},{\"code\":\"445103\",\"name\":\"潮安区\"},{\"code\":\"445122\",\"name\":\"饶平县\"}],[{\"code\":\"445202\",\"name\":\"榕城区\"},{\"code\":\"445203\",\"name\":\"揭东区\"},{\"code\":\"445222\",\"name\":\"揭西县\"},{\"code\":\"445224\",\"name\":\"惠来县\"},{\"code\":\"445281\",\"name\":\"普宁市\"}],[{\"code\":\"445302\",\"name\":\"云城区\"},{\"code\":\"445303\",\"name\":\"云安区\"},{\"code\":\"445321\",\"name\":\"新兴县\"},{\"code\":\"445322\",\"name\":\"郁南县\"},{\"code\":\"445381\",\"name\":\"罗定市\"}]],[[{\"code\":\"450102\",\"name\":\"兴宁区\"},{\"code\":\"450103\",\"name\":\"青秀区\"},{\"code\":\"450105\",\"name\":\"江南区\"},{\"code\":\"450107\",\"name\":\"西乡塘区\"},{\"code\":\"450108\",\"name\":\"良庆区\"},{\"code\":\"450109\",\"name\":\"邕宁区\"},{\"code\":\"450110\",\"name\":\"武鸣区\"},{\"code\":\"450123\",\"name\":\"隆安县\"},{\"code\":\"450124\",\"name\":\"马山县\"},{\"code\":\"450125\",\"name\":\"上林县\"},{\"code\":\"450126\",\"name\":\"宾阳县\"},{\"code\":\"450181\",\"name\":\"横州市\"}],[{\"code\":\"450202\",\"name\":\"城中区\"},{\"code\":\"450203\",\"name\":\"鱼峰区\"},{\"code\":\"450204\",\"name\":\"柳南区\"},{\"code\":\"450205\",\"name\":\"柳北区\"},{\"code\":\"450206\",\"name\":\"柳江区\"},{\"code\":\"450222\",\"name\":\"柳城县\"},{\"code\":\"450223\",\"name\":\"鹿寨县\"},{\"code\":\"450224\",\"name\":\"融安县\"},{\"code\":\"450225\",\"name\":\"融水苗族自治县\"},{\"code\":\"450226\",\"name\":\"三江侗族自治县\"}],[{\"code\":\"450302\",\"name\":\"秀峰区\"},{\"code\":\"450303\",\"name\":\"叠彩区\"},{\"code\":\"450304\",\"name\":\"象山区\"},{\"code\":\"450305\",\"name\":\"七星区\"},{\"code\":\"450311\",\"name\":\"雁山区\"},{\"code\":\"450312\",\"name\":\"临桂区\"},{\"code\":\"450321\",\"name\":\"阳朔县\"},{\"code\":\"450323\",\"name\":\"灵川县\"},{\"code\":\"450324\",\"name\":\"全州县\"},{\"code\":\"450325\",\"name\":\"兴安县\"},{\"code\":\"450326\",\"name\":\"永福县\"},{\"code\":\"450327\",\"name\":\"灌阳县\"},{\"code\":\"450328\",\"name\":\"龙胜各族自治县\"},{\"code\":\"450329\",\"name\":\"资源县\"},{\"code\":\"450330\",\"name\":\"平乐县\"},{\"code\":\"450331\",\"name\":\"荔浦县\"},{\"code\":\"450332\",\"name\":\"恭城瑶族自治县\"}],[{\"code\":\"450403\",\"name\":\"万秀区\"},{\"code\":\"450405\",\"name\":\"长洲区\"},{\"code\":\"450406\",\"name\":\"龙圩区\"},{\"code\":\"450421\",\"name\":\"苍梧县\"},{\"code\":\"450422\",\"name\":\"藤县\"},{\"code\":\"450423\",\"name\":\"蒙山县\"},{\"code\":\"450481\",\"name\":\"岑溪市\"}],[{\"code\":\"450502\",\"name\":\"海城区\"},{\"code\":\"450503\",\"name\":\"银海区\"},{\"code\":\"450512\",\"name\":\"铁山港区\"},{\"code\":\"450521\",\"name\":\"合浦县\"}],[{\"code\":\"450602\",\"name\":\"港口区\"},{\"code\":\"450603\",\"name\":\"防城区\"},{\"code\":\"450621\",\"name\":\"上思县\"},{\"code\":\"450681\",\"name\":\"东兴市\"}],[{\"code\":\"450702\",\"name\":\"钦南区\"},{\"code\":\"450703\",\"name\":\"钦北区\"},{\"code\":\"450721\",\"name\":\"灵山县\"},{\"code\":\"450722\",\"name\":\"浦北县\"}],[{\"code\":\"450802\",\"name\":\"港北区\"},{\"code\":\"450803\",\"name\":\"港南区\"},{\"code\":\"450804\",\"name\":\"覃塘区\"},{\"code\":\"450821\",\"name\":\"平南县\"},{\"code\":\"450881\",\"name\":\"桂平市\"}],[{\"code\":\"450902\",\"name\":\"玉州区\"},{\"code\":\"450903\",\"name\":\"福绵区\"},{\"code\":\"450921\",\"name\":\"容县\"},{\"code\":\"450922\",\"name\":\"陆川县\"},{\"code\":\"450923\",\"name\":\"博白县\"},{\"code\":\"450924\",\"name\":\"兴业县\"},{\"code\":\"450981\",\"name\":\"北流市\"}],[{\"code\":\"451002\",\"name\":\"右江区\"},{\"code\":\"451021\",\"name\":\"田阳县\"},{\"code\":\"451022\",\"name\":\"田东县\"},{\"code\":\"451023\",\"name\":\"平果县\"},{\"code\":\"451024\",\"name\":\"德保县\"},{\"code\":\"451026\",\"name\":\"那坡县\"},{\"code\":\"451027\",\"name\":\"凌云县\"},{\"code\":\"451028\",\"name\":\"乐业县\"},{\"code\":\"451029\",\"name\":\"田林县\"},{\"code\":\"451030\",\"name\":\"西林县\"},{\"code\":\"451031\",\"name\":\"隆林各族自治县\"},{\"code\":\"451081\",\"name\":\"靖西市\"}],[{\"code\":\"451102\",\"name\":\"八步区\"},{\"code\":\"451103\",\"name\":\"平桂区\"},{\"code\":\"451121\",\"name\":\"昭平县\"},{\"code\":\"451122\",\"name\":\"钟山县\"},{\"code\":\"451123\",\"name\":\"富川瑶族自治县\"}],[{\"code\":\"451202\",\"name\":\"金城江区\"},{\"code\":\"451203\",\"name\":\"宜州区\"},{\"code\":\"451221\",\"name\":\"南丹县\"},{\"code\":\"451222\",\"name\":\"天峨县\"},{\"code\":\"451223\",\"name\":\"凤山县\"},{\"code\":\"451224\",\"name\":\"东兰县\"},{\"code\":\"451225\",\"name\":\"罗城仫佬族自治县\"},{\"code\":\"451226\",\"name\":\"环江毛南族自治县\"},{\"code\":\"451227\",\"name\":\"巴马瑶族自治县\"},{\"code\":\"451228\",\"name\":\"都安瑶族自治县\"},{\"code\":\"451229\",\"name\":\"大化瑶族自治县\"}],[{\"code\":\"451302\",\"name\":\"兴宾区\"},{\"code\":\"451321\",\"name\":\"忻城县\"},{\"code\":\"451322\",\"name\":\"象州县\"},{\"code\":\"451323\",\"name\":\"武宣县\"},{\"code\":\"451324\",\"name\":\"金秀瑶族自治县\"},{\"code\":\"451381\",\"name\":\"合山市\"}],[{\"code\":\"451402\",\"name\":\"江州区\"},{\"code\":\"451421\",\"name\":\"扶绥县\"},{\"code\":\"451422\",\"name\":\"宁明县\"},{\"code\":\"451423\",\"name\":\"龙州县\"},{\"code\":\"451424\",\"name\":\"大新县\"},{\"code\":\"451425\",\"name\":\"天等县\"},{\"code\":\"451481\",\"name\":\"凭祥市\"}]],[[{\"code\":\"460105\",\"name\":\"秀英区\"},{\"code\":\"460106\",\"name\":\"龙华区\"},{\"code\":\"460107\",\"name\":\"琼山区\"},{\"code\":\"460108\",\"name\":\"美兰区\"}],[{\"code\":\"460202\",\"name\":\"海棠区\"},{\"code\":\"460203\",\"name\":\"吉阳区\"},{\"code\":\"460204\",\"name\":\"天涯区\"},{\"code\":\"460205\",\"name\":\"崖州区\"}],[{\"code\":\"460321\",\"name\":\"西沙群岛\"},{\"code\":\"460322\",\"name\":\"南沙群岛\"},{\"code\":\"460323\",\"name\":\"中沙群岛的岛礁及其海域\"}],[{\"code\":\"460401\",\"name\":\"那大镇\"},{\"code\":\"460402\",\"name\":\"和庆镇\"},{\"code\":\"460403\",\"name\":\"南丰镇\"},{\"code\":\"460404\",\"name\":\"大成镇\"},{\"code\":\"460405\",\"name\":\"雅星镇\"},{\"code\":\"460406\",\"name\":\"兰洋镇\"},{\"code\":\"460407\",\"name\":\"光村镇\"},{\"code\":\"460408\",\"name\":\"木棠镇\"},{\"code\":\"460409\",\"name\":\"海头镇\"},{\"code\":\"460410\",\"name\":\"峨蔓镇\"},{\"code\":\"460411\",\"name\":\"三都镇\"},{\"code\":\"460412\",\"name\":\"王五镇\"},{\"code\":\"460413\",\"name\":\"白马井镇\"},{\"code\":\"460414\",\"name\":\"中和镇\"},{\"code\":\"460415\",\"name\":\"排浦镇\"},{\"code\":\"460416\",\"name\":\"东成镇\"},{\"code\":\"460417\",\"name\":\"新州镇\"},{\"code\":\"460418\",\"name\":\"国营西培农场\"},{\"code\":\"460419\",\"name\":\"国营西联农场\"},{\"code\":\"460420\",\"name\":\"国营蓝洋农场\"},{\"code\":\"460421\",\"name\":\"国营八一农场\"},{\"code\":\"460422\",\"name\":\"洋浦经济开发区\"},{\"code\":\"460423\",\"name\":\"华南热作学院\"},{\"code\":\"460424\",\"name\":\"红岭农场\"}],[{\"code\":\"469001\",\"name\":\"五指山市\"},{\"code\":\"469002\",\"name\":\"琼海市\"},{\"code\":\"469005\",\"name\":\"文昌市\"},{\"code\":\"469006\",\"name\":\"万宁市\"},{\"code\":\"469007\",\"name\":\"东方市\"},{\"code\":\"469021\",\"name\":\"定安县\"},{\"code\":\"469022\",\"name\":\"屯昌县\"},{\"code\":\"469023\",\"name\":\"澄迈县\"},{\"code\":\"469024\",\"name\":\"临高县\"},{\"code\":\"469025\",\"name\":\"白沙黎族自治县\"},{\"code\":\"469026\",\"name\":\"昌江黎族自治县\"},{\"code\":\"469027\",\"name\":\"乐东黎族自治县\"},{\"code\":\"469028\",\"name\":\"陵水黎族自治县\"},{\"code\":\"469029\",\"name\":\"保亭黎族苗族自治县\"},{\"code\":\"469030\",\"name\":\"琼中黎族苗族自治县\"}]],[[{\"code\":\"500101\",\"name\":\"万州区\"},{\"code\":\"500102\",\"name\":\"涪陵区\"},{\"code\":\"500103\",\"name\":\"渝中区\"},{\"code\":\"500104\",\"name\":\"大渡口区\"},{\"code\":\"500105\",\"name\":\"江北区\"},{\"code\":\"500106\",\"name\":\"沙坪坝区\"},{\"code\":\"500107\",\"name\":\"九龙坡区\"},{\"code\":\"500108\",\"name\":\"南岸区\"},{\"code\":\"500109\",\"name\":\"北碚区\"},{\"code\":\"500110\",\"name\":\"綦江区\"},{\"code\":\"500111\",\"name\":\"大足区\"},{\"code\":\"500112\",\"name\":\"渝北区\"},{\"code\":\"500113\",\"name\":\"巴南区\"},{\"code\":\"500114\",\"name\":\"黔江区\"},{\"code\":\"500115\",\"name\":\"长寿区\"},{\"code\":\"500116\",\"name\":\"江津区\"},{\"code\":\"500117\",\"name\":\"合川区\"},{\"code\":\"500118\",\"name\":\"永川区\"},{\"code\":\"500119\",\"name\":\"南川区\"},{\"code\":\"500120\",\"name\":\"璧山区\"},{\"code\":\"500151\",\"name\":\"铜梁区\"},{\"code\":\"500152\",\"name\":\"潼南区\"},{\"code\":\"500153\",\"name\":\"荣昌区\"},{\"code\":\"500154\",\"name\":\"开州区\"},{\"code\":\"500155\",\"name\":\"梁平区\"},{\"code\":\"500156\",\"name\":\"武隆区\"}],[{\"code\":\"500229\",\"name\":\"城口县\"},{\"code\":\"500230\",\"name\":\"丰都县\"},{\"code\":\"500231\",\"name\":\"垫江县\"},{\"code\":\"500233\",\"name\":\"忠县\"},{\"code\":\"500235\",\"name\":\"云阳县\"},{\"code\":\"500236\",\"name\":\"奉节县\"},{\"code\":\"500237\",\"name\":\"巫山县\"},{\"code\":\"500238\",\"name\":\"巫溪县\"},{\"code\":\"500240\",\"name\":\"石柱土家族自治县\"},{\"code\":\"500241\",\"name\":\"秀山土家族苗族自治县\"},{\"code\":\"500242\",\"name\":\"酉阳土家族苗族自治县\"},{\"code\":\"500243\",\"name\":\"彭水苗族土家族自治县\"}]],[[{\"code\":\"510104\",\"name\":\"锦江区\"},{\"code\":\"510105\",\"name\":\"青羊区\"},{\"code\":\"510106\",\"name\":\"金牛区\"},{\"code\":\"510107\",\"name\":\"武侯区\"},{\"code\":\"510108\",\"name\":\"成华区\"},{\"code\":\"510112\",\"name\":\"龙泉驿区\"},{\"code\":\"510113\",\"name\":\"青白江区\"},{\"code\":\"510114\",\"name\":\"新都区\"},{\"code\":\"510115\",\"name\":\"温江区\"},{\"code\":\"510116\",\"name\":\"双流区\"},{\"code\":\"510117\",\"name\":\"郫都区\"},{\"code\":\"510121\",\"name\":\"金堂县\"},{\"code\":\"510129\",\"name\":\"大邑县\"},{\"code\":\"510131\",\"name\":\"蒲江县\"},{\"code\":\"510132\",\"name\":\"新津县\"},{\"code\":\"510181\",\"name\":\"都江堰市\"},{\"code\":\"510182\",\"name\":\"彭州市\"},{\"code\":\"510183\",\"name\":\"邛崃市\"},{\"code\":\"510184\",\"name\":\"崇州市\"},{\"code\":\"510185\",\"name\":\"简阳市\"}],[{\"code\":\"510302\",\"name\":\"自流井区\"},{\"code\":\"510303\",\"name\":\"贡井区\"},{\"code\":\"510304\",\"name\":\"大安区\"},{\"code\":\"510311\",\"name\":\"沿滩区\"},{\"code\":\"510321\",\"name\":\"荣县\"},{\"code\":\"510322\",\"name\":\"富顺县\"}],[{\"code\":\"510402\",\"name\":\"东区\"},{\"code\":\"510403\",\"name\":\"西区\"},{\"code\":\"510411\",\"name\":\"仁和区\"},{\"code\":\"510421\",\"name\":\"米易县\"},{\"code\":\"510422\",\"name\":\"盐边县\"}],[{\"code\":\"510502\",\"name\":\"江阳区\"},{\"code\":\"510503\",\"name\":\"纳溪区\"},{\"code\":\"510504\",\"name\":\"龙马潭区\"},{\"code\":\"510521\",\"name\":\"泸县\"},{\"code\":\"510522\",\"name\":\"合江县\"},{\"code\":\"510524\",\"name\":\"叙永县\"},{\"code\":\"510525\",\"name\":\"古蔺县\"}],[{\"code\":\"510603\",\"name\":\"旌阳区\"},{\"code\":\"510604\",\"name\":\"罗江区\"},{\"code\":\"510623\",\"name\":\"中江县\"},{\"code\":\"510681\",\"name\":\"广汉市\"},{\"code\":\"510682\",\"name\":\"什邡市\"},{\"code\":\"510683\",\"name\":\"绵竹市\"}],[{\"code\":\"510703\",\"name\":\"涪城区\"},{\"code\":\"510704\",\"name\":\"游仙区\"},{\"code\":\"510705\",\"name\":\"安州区\"},{\"code\":\"510722\",\"name\":\"三台县\"},{\"code\":\"510723\",\"name\":\"盐亭县\"},{\"code\":\"510725\",\"name\":\"梓潼县\"},{\"code\":\"510726\",\"name\":\"北川羌族自治县\"},{\"code\":\"510727\",\"name\":\"平武县\"},{\"code\":\"510781\",\"name\":\"江油市\"}],[{\"code\":\"510802\",\"name\":\"利州区\"},{\"code\":\"510811\",\"name\":\"昭化区\"},{\"code\":\"510812\",\"name\":\"朝天区\"},{\"code\":\"510821\",\"name\":\"旺苍县\"},{\"code\":\"510822\",\"name\":\"青川县\"},{\"code\":\"510823\",\"name\":\"剑阁县\"},{\"code\":\"510824\",\"name\":\"苍溪县\"}],[{\"code\":\"510903\",\"name\":\"船山区\"},{\"code\":\"510904\",\"name\":\"安居区\"},{\"code\":\"510921\",\"name\":\"蓬溪县\"},{\"code\":\"510922\",\"name\":\"射洪县\"},{\"code\":\"510923\",\"name\":\"大英县\"}],[{\"code\":\"511002\",\"name\":\"市中区\"},{\"code\":\"511011\",\"name\":\"东兴区\"},{\"code\":\"511024\",\"name\":\"威远县\"},{\"code\":\"511025\",\"name\":\"资中县\"},{\"code\":\"511083\",\"name\":\"隆昌市\"}],[{\"code\":\"511102\",\"name\":\"市中区\"},{\"code\":\"511111\",\"name\":\"沙湾区\"},{\"code\":\"511112\",\"name\":\"五通桥区\"},{\"code\":\"511113\",\"name\":\"金口河区\"},{\"code\":\"511123\",\"name\":\"犍为县\"},{\"code\":\"511124\",\"name\":\"井研县\"},{\"code\":\"511126\",\"name\":\"夹江县\"},{\"code\":\"511129\",\"name\":\"沐川县\"},{\"code\":\"511132\",\"name\":\"峨边彝族自治县\"},{\"code\":\"511133\",\"name\":\"马边彝族自治县\"},{\"code\":\"511181\",\"name\":\"峨眉山市\"}],[{\"code\":\"511302\",\"name\":\"顺庆区\"},{\"code\":\"511303\",\"name\":\"高坪区\"},{\"code\":\"511304\",\"name\":\"嘉陵区\"},{\"code\":\"511321\",\"name\":\"南部县\"},{\"code\":\"511322\",\"name\":\"营山县\"},{\"code\":\"511323\",\"name\":\"蓬安县\"},{\"code\":\"511324\",\"name\":\"仪陇县\"},{\"code\":\"511325\",\"name\":\"西充县\"},{\"code\":\"511381\",\"name\":\"阆中市\"}],[{\"code\":\"511402\",\"name\":\"东坡区\"},{\"code\":\"511403\",\"name\":\"彭山区\"},{\"code\":\"511421\",\"name\":\"仁寿县\"},{\"code\":\"511423\",\"name\":\"洪雅县\"},{\"code\":\"511424\",\"name\":\"丹棱县\"},{\"code\":\"511425\",\"name\":\"青神县\"}],[{\"code\":\"511502\",\"name\":\"翠屏区\"},{\"code\":\"511503\",\"name\":\"南溪区\"},{\"code\":\"511521\",\"name\":\"宜宾县\"},{\"code\":\"511523\",\"name\":\"江安县\"},{\"code\":\"511524\",\"name\":\"长宁县\"},{\"code\":\"511525\",\"name\":\"高县\"},{\"code\":\"511526\",\"name\":\"珙县\"},{\"code\":\"511527\",\"name\":\"筠连县\"},{\"code\":\"511528\",\"name\":\"兴文县\"},{\"code\":\"511529\",\"name\":\"屏山县\"}],[{\"code\":\"511602\",\"name\":\"广安区\"},{\"code\":\"511603\",\"name\":\"前锋区\"},{\"code\":\"511621\",\"name\":\"岳池县\"},{\"code\":\"511622\",\"name\":\"武胜县\"},{\"code\":\"511623\",\"name\":\"邻水县\"},{\"code\":\"511681\",\"name\":\"华蓥市\"}],[{\"code\":\"511702\",\"name\":\"通川区\"},{\"code\":\"511703\",\"name\":\"达川区\"},{\"code\":\"511722\",\"name\":\"宣汉县\"},{\"code\":\"511723\",\"name\":\"开江县\"},{\"code\":\"511724\",\"name\":\"大竹县\"},{\"code\":\"511725\",\"name\":\"渠县\"},{\"code\":\"511781\",\"name\":\"万源市\"}],[{\"code\":\"511802\",\"name\":\"雨城区\"},{\"code\":\"511803\",\"name\":\"名山区\"},{\"code\":\"511822\",\"name\":\"荥经县\"},{\"code\":\"511823\",\"name\":\"汉源县\"},{\"code\":\"511824\",\"name\":\"石棉县\"},{\"code\":\"511825\",\"name\":\"天全县\"},{\"code\":\"511826\",\"name\":\"芦山县\"},{\"code\":\"511827\",\"name\":\"宝兴县\"}],[{\"code\":\"511902\",\"name\":\"巴州区\"},{\"code\":\"511903\",\"name\":\"恩阳区\"},{\"code\":\"511921\",\"name\":\"通江县\"},{\"code\":\"511922\",\"name\":\"南江县\"},{\"code\":\"511923\",\"name\":\"平昌县\"}],[{\"code\":\"512002\",\"name\":\"雁江区\"},{\"code\":\"512021\",\"name\":\"安岳县\"},{\"code\":\"512022\",\"name\":\"乐至县\"}],[{\"code\":\"513201\",\"name\":\"马尔康市\"},{\"code\":\"513221\",\"name\":\"汶川县\"},{\"code\":\"513222\",\"name\":\"理县\"},{\"code\":\"513223\",\"name\":\"茂县\"},{\"code\":\"513224\",\"name\":\"松潘县\"},{\"code\":\"513225\",\"name\":\"九寨沟县\"},{\"code\":\"513226\",\"name\":\"金川县\"},{\"code\":\"513227\",\"name\":\"小金县\"},{\"code\":\"513228\",\"name\":\"黑水县\"},{\"code\":\"513230\",\"name\":\"壤塘县\"},{\"code\":\"513231\",\"name\":\"阿坝县\"},{\"code\":\"513232\",\"name\":\"若尔盖县\"},{\"code\":\"513233\",\"name\":\"红原县\"}],[{\"code\":\"513301\",\"name\":\"康定市\"},{\"code\":\"513322\",\"name\":\"泸定县\"},{\"code\":\"513323\",\"name\":\"丹巴县\"},{\"code\":\"513324\",\"name\":\"九龙县\"},{\"code\":\"513325\",\"name\":\"雅江县\"},{\"code\":\"513326\",\"name\":\"道孚县\"},{\"code\":\"513327\",\"name\":\"炉霍县\"},{\"code\":\"513328\",\"name\":\"甘孜县\"},{\"code\":\"513329\",\"name\":\"新龙县\"},{\"code\":\"513330\",\"name\":\"德格县\"},{\"code\":\"513331\",\"name\":\"白玉县\"},{\"code\":\"513332\",\"name\":\"石渠县\"},{\"code\":\"513333\",\"name\":\"色达县\"},{\"code\":\"513334\",\"name\":\"理塘县\"},{\"code\":\"513335\",\"name\":\"巴塘县\"},{\"code\":\"513336\",\"name\":\"乡城县\"},{\"code\":\"513337\",\"name\":\"稻城县\"},{\"code\":\"513338\",\"name\":\"得荣县\"}],[{\"code\":\"513401\",\"name\":\"西昌市\"},{\"code\":\"513402\",\"name\":\"会理市\"},{\"code\":\"513422\",\"name\":\"木里藏族自治县\"},{\"code\":\"513423\",\"name\":\"盐源县\"},{\"code\":\"513424\",\"name\":\"德昌县\"},{\"code\":\"513426\",\"name\":\"会东县\"},{\"code\":\"513427\",\"name\":\"宁南县\"},{\"code\":\"513428\",\"name\":\"普格县\"},{\"code\":\"513429\",\"name\":\"布拖县\"},{\"code\":\"513430\",\"name\":\"金阳县\"},{\"code\":\"513431\",\"name\":\"昭觉县\"},{\"code\":\"513432\",\"name\":\"喜德县\"},{\"code\":\"513433\",\"name\":\"冕宁县\"},{\"code\":\"513434\",\"name\":\"越西县\"},{\"code\":\"513435\",\"name\":\"甘洛县\"},{\"code\":\"513436\",\"name\":\"美姑县\"},{\"code\":\"513437\",\"name\":\"雷波县\"}]],[[{\"code\":\"520102\",\"name\":\"南明区\"},{\"code\":\"520103\",\"name\":\"云岩区\"},{\"code\":\"520111\",\"name\":\"花溪区\"},{\"code\":\"520112\",\"name\":\"乌当区\"},{\"code\":\"520113\",\"name\":\"白云区\"},{\"code\":\"520115\",\"name\":\"观山湖区\"},{\"code\":\"520121\",\"name\":\"开阳县\"},{\"code\":\"520122\",\"name\":\"息烽县\"},{\"code\":\"520123\",\"name\":\"修文县\"},{\"code\":\"520181\",\"name\":\"清镇市\"}],[{\"code\":\"520201\",\"name\":\"钟山区\"},{\"code\":\"520203\",\"name\":\"六枝特区\"},{\"code\":\"520221\",\"name\":\"水城县\"},{\"code\":\"520281\",\"name\":\"盘州市\"}],[{\"code\":\"520302\",\"name\":\"红花岗区\"},{\"code\":\"520303\",\"name\":\"汇川区\"},{\"code\":\"520304\",\"name\":\"播州区\"},{\"code\":\"520322\",\"name\":\"桐梓县\"},{\"code\":\"520323\",\"name\":\"绥阳县\"},{\"code\":\"520324\",\"name\":\"正安县\"},{\"code\":\"520325\",\"name\":\"道真仡佬族苗族自治县\"},{\"code\":\"520326\",\"name\":\"务川仡佬族苗族自治县\"},{\"code\":\"520327\",\"name\":\"凤冈县\"},{\"code\":\"520328\",\"name\":\"湄潭县\"},{\"code\":\"520329\",\"name\":\"余庆县\"},{\"code\":\"520330\",\"name\":\"习水县\"},{\"code\":\"520381\",\"name\":\"赤水市\"},{\"code\":\"520382\",\"name\":\"仁怀市\"}],[{\"code\":\"520402\",\"name\":\"西秀区\"},{\"code\":\"520403\",\"name\":\"平坝区\"},{\"code\":\"520422\",\"name\":\"普定县\"},{\"code\":\"520423\",\"name\":\"镇宁布依族苗族自治县\"},{\"code\":\"520424\",\"name\":\"关岭布依族苗族自治县\"},{\"code\":\"520425\",\"name\":\"紫云苗族布依族自治县\"}],[{\"code\":\"520502\",\"name\":\"七星关区\"},{\"code\":\"520521\",\"name\":\"大方县\"},{\"code\":\"520523\",\"name\":\"金沙县\"},{\"code\":\"520524\",\"name\":\"织金县\"},{\"code\":\"520525\",\"name\":\"纳雍县\"},{\"code\":\"520526\",\"name\":\"威宁彝族回族苗族自治县\"},{\"code\":\"520527\",\"name\":\"赫章县\"},{\"code\":\"520581\",\"name\":\"黔西市\"}],[{\"code\":\"520602\",\"name\":\"碧江区\"},{\"code\":\"520603\",\"name\":\"万山区\"},{\"code\":\"520621\",\"name\":\"江口县\"},{\"code\":\"520622\",\"name\":\"玉屏侗族自治县\"},{\"code\":\"520623\",\"name\":\"石阡县\"},{\"code\":\"520624\",\"name\":\"思南县\"},{\"code\":\"520625\",\"name\":\"印江土家族苗族自治县\"},{\"code\":\"520626\",\"name\":\"德江县\"},{\"code\":\"520627\",\"name\":\"沿河土家族自治县\"},{\"code\":\"520628\",\"name\":\"松桃苗族自治县\"}],[{\"code\":\"522301\",\"name\":\"兴义市\"},{\"code\":\"522322\",\"name\":\"兴仁县\"},{\"code\":\"522323\",\"name\":\"普安县\"},{\"code\":\"522324\",\"name\":\"晴隆县\"},{\"code\":\"522325\",\"name\":\"贞丰县\"},{\"code\":\"522326\",\"name\":\"望谟县\"},{\"code\":\"522327\",\"name\":\"册亨县\"},{\"code\":\"522328\",\"name\":\"安龙县\"}],[{\"code\":\"522601\",\"name\":\"凯里市\"},{\"code\":\"522622\",\"name\":\"黄平县\"},{\"code\":\"522623\",\"name\":\"施秉县\"},{\"code\":\"522624\",\"name\":\"三穗县\"},{\"code\":\"522625\",\"name\":\"镇远县\"},{\"code\":\"522626\",\"name\":\"岑巩县\"},{\"code\":\"522627\",\"name\":\"天柱县\"},{\"code\":\"522628\",\"name\":\"锦屏县\"},{\"code\":\"522629\",\"name\":\"剑河县\"},{\"code\":\"522630\",\"name\":\"台江县\"},{\"code\":\"522631\",\"name\":\"黎平县\"},{\"code\":\"522632\",\"name\":\"榕江县\"},{\"code\":\"522633\",\"name\":\"从江县\"},{\"code\":\"522634\",\"name\":\"雷山县\"},{\"code\":\"522635\",\"name\":\"麻江县\"},{\"code\":\"522636\",\"name\":\"丹寨县\"}],[{\"code\":\"522701\",\"name\":\"都匀市\"},{\"code\":\"522702\",\"name\":\"福泉市\"},{\"code\":\"522722\",\"name\":\"荔波县\"},{\"code\":\"522723\",\"name\":\"贵定县\"},{\"code\":\"522725\",\"name\":\"瓮安县\"},{\"code\":\"522726\",\"name\":\"独山县\"},{\"code\":\"522727\",\"name\":\"平塘县\"},{\"code\":\"522728\",\"name\":\"罗甸县\"},{\"code\":\"522729\",\"name\":\"长顺县\"},{\"code\":\"522730\",\"name\":\"龙里县\"},{\"code\":\"522731\",\"name\":\"惠水县\"},{\"code\":\"522732\",\"name\":\"三都水族自治县\"}]],[[{\"code\":\"530102\",\"name\":\"五华区\"},{\"code\":\"530103\",\"name\":\"盘龙区\"},{\"code\":\"530111\",\"name\":\"官渡区\"},{\"code\":\"530112\",\"name\":\"西山区\"},{\"code\":\"530113\",\"name\":\"东川区\"},{\"code\":\"530114\",\"name\":\"呈贡区\"},{\"code\":\"530115\",\"name\":\"晋宁区\"},{\"code\":\"530124\",\"name\":\"富民县\"},{\"code\":\"530125\",\"name\":\"宜良县\"},{\"code\":\"530126\",\"name\":\"石林彝族自治县\"},{\"code\":\"530127\",\"name\":\"嵩明县\"},{\"code\":\"530128\",\"name\":\"禄劝彝族苗族自治县\"},{\"code\":\"530129\",\"name\":\"寻甸回族彝族自治县\"},{\"code\":\"530181\",\"name\":\"安宁市\"}],[{\"code\":\"530302\",\"name\":\"麒麟区\"},{\"code\":\"530303\",\"name\":\"沾益区\"},{\"code\":\"530321\",\"name\":\"马龙县\"},{\"code\":\"530322\",\"name\":\"陆良县\"},{\"code\":\"530323\",\"name\":\"师宗县\"},{\"code\":\"530324\",\"name\":\"罗平县\"},{\"code\":\"530325\",\"name\":\"富源县\"},{\"code\":\"530326\",\"name\":\"会泽县\"},{\"code\":\"530381\",\"name\":\"宣威市\"}],[{\"code\":\"530402\",\"name\":\"红塔区\"},{\"code\":\"530403\",\"name\":\"江川区\"},{\"code\":\"530422\",\"name\":\"澄江县\"},{\"code\":\"530423\",\"name\":\"通海县\"},{\"code\":\"530424\",\"name\":\"华宁县\"},{\"code\":\"530425\",\"name\":\"易门县\"},{\"code\":\"530426\",\"name\":\"峨山彝族自治县\"},{\"code\":\"530427\",\"name\":\"新平彝族傣族自治县\"},{\"code\":\"530428\",\"name\":\"元江哈尼族彝族傣族自治县\"}],[{\"code\":\"530502\",\"name\":\"隆阳区\"},{\"code\":\"530521\",\"name\":\"施甸县\"},{\"code\":\"530523\",\"name\":\"龙陵县\"},{\"code\":\"530524\",\"name\":\"昌宁县\"},{\"code\":\"530581\",\"name\":\"腾冲市\"}],[{\"code\":\"530602\",\"name\":\"昭阳区\"},{\"code\":\"530621\",\"name\":\"鲁甸县\"},{\"code\":\"530622\",\"name\":\"巧家县\"},{\"code\":\"530623\",\"name\":\"盐津县\"},{\"code\":\"530624\",\"name\":\"大关县\"},{\"code\":\"530625\",\"name\":\"永善县\"},{\"code\":\"530626\",\"name\":\"绥江县\"},{\"code\":\"530627\",\"name\":\"镇雄县\"},{\"code\":\"530628\",\"name\":\"彝良县\"},{\"code\":\"530629\",\"name\":\"威信县\"},{\"code\":\"530630\",\"name\":\"水富县\"}],[{\"code\":\"530702\",\"name\":\"古城区\"},{\"code\":\"530721\",\"name\":\"玉龙纳西族自治县\"},{\"code\":\"530722\",\"name\":\"永胜县\"},{\"code\":\"530723\",\"name\":\"华坪县\"},{\"code\":\"530724\",\"name\":\"宁蒗彝族自治县\"}],[{\"code\":\"530802\",\"name\":\"思茅区\"},{\"code\":\"530821\",\"name\":\"宁洱哈尼族彝族自治县\"},{\"code\":\"530822\",\"name\":\"墨江哈尼族自治县\"},{\"code\":\"530823\",\"name\":\"景东彝族自治县\"},{\"code\":\"530824\",\"name\":\"景谷傣族彝族自治县\"},{\"code\":\"530825\",\"name\":\"镇沅彝族哈尼族拉祜族自治县\"},{\"code\":\"530826\",\"name\":\"江城哈尼族彝族自治县\"},{\"code\":\"530827\",\"name\":\"孟连傣族拉祜族佤族自治县\"},{\"code\":\"530828\",\"name\":\"澜沧拉祜族自治县\"},{\"code\":\"530829\",\"name\":\"西盟佤族自治县\"}],[{\"code\":\"530902\",\"name\":\"临翔区\"},{\"code\":\"530921\",\"name\":\"凤庆县\"},{\"code\":\"530922\",\"name\":\"云县\"},{\"code\":\"530923\",\"name\":\"永德县\"},{\"code\":\"530924\",\"name\":\"镇康县\"},{\"code\":\"530925\",\"name\":\"双江拉祜族佤族布朗族傣族自治县\"},{\"code\":\"530926\",\"name\":\"耿马傣族佤族自治县\"},{\"code\":\"530927\",\"name\":\"沧源佤族自治县\"}],[{\"code\":\"532301\",\"name\":\"楚雄市\"},{\"code\":\"532302\",\"name\":\"禄丰市\"},{\"code\":\"532322\",\"name\":\"双柏县\"},{\"code\":\"532323\",\"name\":\"牟定县\"},{\"code\":\"532324\",\"name\":\"南华县\"},{\"code\":\"532325\",\"name\":\"姚安县\"},{\"code\":\"532326\",\"name\":\"大姚县\"},{\"code\":\"532327\",\"name\":\"永仁县\"},{\"code\":\"532328\",\"name\":\"元谋县\"},{\"code\":\"532329\",\"name\":\"武定县\"}],[{\"code\":\"532501\",\"name\":\"个旧市\"},{\"code\":\"532502\",\"name\":\"开远市\"},{\"code\":\"532503\",\"name\":\"蒙自市\"},{\"code\":\"532504\",\"name\":\"弥勒市\"},{\"code\":\"532523\",\"name\":\"屏边苗族自治县\"},{\"code\":\"532524\",\"name\":\"建水县\"},{\"code\":\"532525\",\"name\":\"石屏县\"},{\"code\":\"532527\",\"name\":\"泸西县\"},{\"code\":\"532528\",\"name\":\"元阳县\"},{\"code\":\"532529\",\"name\":\"红河县\"},{\"code\":\"532530\",\"name\":\"金平苗族瑶族傣族自治县\"},{\"code\":\"532531\",\"name\":\"绿春县\"},{\"code\":\"532532\",\"name\":\"河口瑶族自治县\"}],[{\"code\":\"532601\",\"name\":\"文山市\"},{\"code\":\"532622\",\"name\":\"砚山县\"},{\"code\":\"532623\",\"name\":\"西畴县\"},{\"code\":\"532624\",\"name\":\"麻栗坡县\"},{\"code\":\"532625\",\"name\":\"马关县\"},{\"code\":\"532626\",\"name\":\"丘北县\"},{\"code\":\"532627\",\"name\":\"广南县\"},{\"code\":\"532628\",\"name\":\"富宁县\"}],[{\"code\":\"532801\",\"name\":\"景洪市\"},{\"code\":\"532822\",\"name\":\"勐海县\"},{\"code\":\"532823\",\"name\":\"勐腊县\"}],[{\"code\":\"532901\",\"name\":\"大理市\"},{\"code\":\"532922\",\"name\":\"漾濞彝族自治县\"},{\"code\":\"532923\",\"name\":\"祥云县\"},{\"code\":\"532924\",\"name\":\"宾川县\"},{\"code\":\"532925\",\"name\":\"弥渡县\"},{\"code\":\"532926\",\"name\":\"南涧彝族自治县\"},{\"code\":\"532927\",\"name\":\"巍山彝族回族自治县\"},{\"code\":\"532928\",\"name\":\"永平县\"},{\"code\":\"532929\",\"name\":\"云龙县\"},{\"code\":\"532930\",\"name\":\"洱源县\"},{\"code\":\"532931\",\"name\":\"剑川县\"},{\"code\":\"532932\",\"name\":\"鹤庆县\"}],[{\"code\":\"533102\",\"name\":\"瑞丽市\"},{\"code\":\"533103\",\"name\":\"芒市\"},{\"code\":\"533122\",\"name\":\"梁河县\"},{\"code\":\"533123\",\"name\":\"盈江县\"},{\"code\":\"533124\",\"name\":\"陇川县\"}],[{\"code\":\"533301\",\"name\":\"泸水市\"},{\"code\":\"533323\",\"name\":\"福贡县\"},{\"code\":\"533324\",\"name\":\"贡山独龙族怒族自治县\"},{\"code\":\"533325\",\"name\":\"兰坪白族普米族自治县\"}],[{\"code\":\"533401\",\"name\":\"香格里拉市\"},{\"code\":\"533422\",\"name\":\"德钦县\"},{\"code\":\"533423\",\"name\":\"维西傈僳族自治县\"}]],[[{\"code\":\"540102\",\"name\":\"城关区\"},{\"code\":\"540103\",\"name\":\"堆龙德庆区\"},{\"code\":\"540104\",\"name\":\"达孜区\"},{\"code\":\"540121\",\"name\":\"林周县\"},{\"code\":\"540122\",\"name\":\"当雄县\"},{\"code\":\"540123\",\"name\":\"尼木县\"},{\"code\":\"540124\",\"name\":\"曲水县\"},{\"code\":\"540127\",\"name\":\"墨竹工卡县\"}],[{\"code\":\"540202\",\"name\":\"桑珠孜区\"},{\"code\":\"540221\",\"name\":\"南木林县\"},{\"code\":\"540222\",\"name\":\"江孜县\"},{\"code\":\"540223\",\"name\":\"定日县\"},{\"code\":\"540224\",\"name\":\"萨迦县\"},{\"code\":\"540225\",\"name\":\"拉孜县\"},{\"code\":\"540226\",\"name\":\"昂仁县\"},{\"code\":\"540227\",\"name\":\"谢通门县\"},{\"code\":\"540228\",\"name\":\"白朗县\"},{\"code\":\"540229\",\"name\":\"仁布县\"},{\"code\":\"540230\",\"name\":\"康马县\"},{\"code\":\"540231\",\"name\":\"定结县\"},{\"code\":\"540232\",\"name\":\"仲巴县\"},{\"code\":\"540233\",\"name\":\"亚东县\"},{\"code\":\"540234\",\"name\":\"吉隆县\"},{\"code\":\"540235\",\"name\":\"聂拉木县\"},{\"code\":\"540236\",\"name\":\"萨嘎县\"},{\"code\":\"540237\",\"name\":\"岗巴县\"}],[{\"code\":\"540302\",\"name\":\"卡若区\"},{\"code\":\"540321\",\"name\":\"江达县\"},{\"code\":\"540322\",\"name\":\"贡觉县\"},{\"code\":\"540323\",\"name\":\"类乌齐县\"},{\"code\":\"540324\",\"name\":\"丁青县\"},{\"code\":\"540325\",\"name\":\"察雅县\"},{\"code\":\"540326\",\"name\":\"八宿县\"},{\"code\":\"540327\",\"name\":\"左贡县\"},{\"code\":\"540328\",\"name\":\"芒康县\"},{\"code\":\"540329\",\"name\":\"洛隆县\"},{\"code\":\"540330\",\"name\":\"边坝县\"}],[{\"code\":\"540402\",\"name\":\"巴宜区\"},{\"code\":\"540421\",\"name\":\"工布江达县\"},{\"code\":\"540422\",\"name\":\"米林县\"},{\"code\":\"540423\",\"name\":\"墨脱县\"},{\"code\":\"540424\",\"name\":\"波密县\"},{\"code\":\"540425\",\"name\":\"察隅县\"},{\"code\":\"540426\",\"name\":\"朗县\"}],[{\"code\":\"540502\",\"name\":\"乃东区\"},{\"code\":\"540521\",\"name\":\"扎囊县\"},{\"code\":\"540522\",\"name\":\"贡嘎县\"},{\"code\":\"540523\",\"name\":\"桑日县\"},{\"code\":\"540524\",\"name\":\"琼结县\"},{\"code\":\"540525\",\"name\":\"曲松县\"},{\"code\":\"540526\",\"name\":\"措美县\"},{\"code\":\"540527\",\"name\":\"洛扎县\"},{\"code\":\"540528\",\"name\":\"加查县\"},{\"code\":\"540529\",\"name\":\"隆子县\"},{\"code\":\"540530\",\"name\":\"错那县\"},{\"code\":\"540531\",\"name\":\"浪卡子县\"}],[{\"code\":\"542421\",\"name\":\"那曲县\"},{\"code\":\"542422\",\"name\":\"嘉黎县\"},{\"code\":\"542423\",\"name\":\"比如县\"},{\"code\":\"542424\",\"name\":\"聂荣县\"},{\"code\":\"542425\",\"name\":\"安多县\"},{\"code\":\"542426\",\"name\":\"申扎县\"},{\"code\":\"542427\",\"name\":\"索县\"},{\"code\":\"542428\",\"name\":\"班戈县\"},{\"code\":\"542429\",\"name\":\"巴青县\"},{\"code\":\"542430\",\"name\":\"尼玛县\"},{\"code\":\"542431\",\"name\":\"双湖县\"}],[{\"code\":\"542521\",\"name\":\"普兰县\"},{\"code\":\"542522\",\"name\":\"札达县\"},{\"code\":\"542523\",\"name\":\"噶尔县\"},{\"code\":\"542524\",\"name\":\"日土县\"},{\"code\":\"542525\",\"name\":\"革吉县\"},{\"code\":\"542526\",\"name\":\"改则县\"},{\"code\":\"542527\",\"name\":\"措勤县\"}]],[[{\"code\":\"610102\",\"name\":\"新城区\"},{\"code\":\"610103\",\"name\":\"碑林区\"},{\"code\":\"610104\",\"name\":\"莲湖区\"},{\"code\":\"610111\",\"name\":\"灞桥区\"},{\"code\":\"610112\",\"name\":\"未央区\"},{\"code\":\"610113\",\"name\":\"雁塔区\"},{\"code\":\"610114\",\"name\":\"阎良区\"},{\"code\":\"610115\",\"name\":\"临潼区\"},{\"code\":\"610116\",\"name\":\"长安区\"},{\"code\":\"610117\",\"name\":\"高陵区\"},{\"code\":\"610118\",\"name\":\"鄠邑区\"},{\"code\":\"610122\",\"name\":\"蓝田县\"},{\"code\":\"610124\",\"name\":\"周至县\"}],[{\"code\":\"610202\",\"name\":\"王益区\"},{\"code\":\"610203\",\"name\":\"印台区\"},{\"code\":\"610204\",\"name\":\"耀州区\"},{\"code\":\"610222\",\"name\":\"宜君县\"}],[{\"code\":\"610302\",\"name\":\"渭滨区\"},{\"code\":\"610303\",\"name\":\"金台区\"},{\"code\":\"610304\",\"name\":\"陈仓区\"},{\"code\":\"610305\",\"name\":\"凤翔区\"},{\"code\":\"610323\",\"name\":\"岐山县\"},{\"code\":\"610324\",\"name\":\"扶风县\"},{\"code\":\"610326\",\"name\":\"眉县\"},{\"code\":\"610327\",\"name\":\"陇县\"},{\"code\":\"610328\",\"name\":\"千阳县\"},{\"code\":\"610329\",\"name\":\"麟游县\"},{\"code\":\"610330\",\"name\":\"凤县\"},{\"code\":\"610331\",\"name\":\"太白县\"}],[{\"code\":\"610402\",\"name\":\"秦都区\"},{\"code\":\"610403\",\"name\":\"杨陵区\"},{\"code\":\"610404\",\"name\":\"渭城区\"},{\"code\":\"610422\",\"name\":\"三原县\"},{\"code\":\"610423\",\"name\":\"泾阳县\"},{\"code\":\"610424\",\"name\":\"乾县\"},{\"code\":\"610425\",\"name\":\"礼泉县\"},{\"code\":\"610426\",\"name\":\"永寿县\"},{\"code\":\"610427\",\"name\":\"彬州市\"},{\"code\":\"610428\",\"name\":\"长武县\"},{\"code\":\"610429\",\"name\":\"旬邑县\"},{\"code\":\"610430\",\"name\":\"淳化县\"},{\"code\":\"610431\",\"name\":\"武功县\"},{\"code\":\"610481\",\"name\":\"兴平市\"}],[{\"code\":\"610502\",\"name\":\"临渭区\"},{\"code\":\"610503\",\"name\":\"华州区\"},{\"code\":\"610522\",\"name\":\"潼关县\"},{\"code\":\"610523\",\"name\":\"大荔县\"},{\"code\":\"610524\",\"name\":\"合阳县\"},{\"code\":\"610525\",\"name\":\"澄城县\"},{\"code\":\"610526\",\"name\":\"蒲城县\"},{\"code\":\"610527\",\"name\":\"白水县\"},{\"code\":\"610528\",\"name\":\"富平县\"},{\"code\":\"610581\",\"name\":\"韩城市\"},{\"code\":\"610582\",\"name\":\"华阴市\"}],[{\"code\":\"610602\",\"name\":\"宝塔区\"},{\"code\":\"610603\",\"name\":\"安塞区\"},{\"code\":\"610621\",\"name\":\"延长县\"},{\"code\":\"610622\",\"name\":\"延川县\"},{\"code\":\"610623\",\"name\":\"子长县\"},{\"code\":\"610625\",\"name\":\"志丹县\"},{\"code\":\"610626\",\"name\":\"吴起县\"},{\"code\":\"610627\",\"name\":\"甘泉县\"},{\"code\":\"610628\",\"name\":\"富县\"},{\"code\":\"610629\",\"name\":\"洛川县\"},{\"code\":\"610630\",\"name\":\"宜川县\"},{\"code\":\"610631\",\"name\":\"黄龙县\"},{\"code\":\"610632\",\"name\":\"黄陵县\"}],[{\"code\":\"610702\",\"name\":\"汉台区\"},{\"code\":\"610703\",\"name\":\"南郑区\"},{\"code\":\"610722\",\"name\":\"城固县\"},{\"code\":\"610723\",\"name\":\"洋县\"},{\"code\":\"610724\",\"name\":\"西乡县\"},{\"code\":\"610725\",\"name\":\"勉县\"},{\"code\":\"610726\",\"name\":\"宁强县\"},{\"code\":\"610727\",\"name\":\"略阳县\"},{\"code\":\"610728\",\"name\":\"镇巴县\"},{\"code\":\"610729\",\"name\":\"留坝县\"},{\"code\":\"610730\",\"name\":\"佛坪县\"}],[{\"code\":\"610802\",\"name\":\"榆阳区\"},{\"code\":\"610803\",\"name\":\"横山区\"},{\"code\":\"610822\",\"name\":\"府谷县\"},{\"code\":\"610824\",\"name\":\"靖边县\"},{\"code\":\"610825\",\"name\":\"定边县\"},{\"code\":\"610826\",\"name\":\"绥德县\"},{\"code\":\"610827\",\"name\":\"米脂县\"},{\"code\":\"610828\",\"name\":\"佳县\"},{\"code\":\"610829\",\"name\":\"吴堡县\"},{\"code\":\"610830\",\"name\":\"清涧县\"},{\"code\":\"610831\",\"name\":\"子洲县\"},{\"code\":\"610881\",\"name\":\"神木市\"}],[{\"code\":\"610902\",\"name\":\"汉滨区\"},{\"code\":\"610921\",\"name\":\"汉阴县\"},{\"code\":\"610922\",\"name\":\"石泉县\"},{\"code\":\"610923\",\"name\":\"宁陕县\"},{\"code\":\"610924\",\"name\":\"紫阳县\"},{\"code\":\"610925\",\"name\":\"岚皋县\"},{\"code\":\"610926\",\"name\":\"平利县\"},{\"code\":\"610927\",\"name\":\"镇坪县\"},{\"code\":\"610929\",\"name\":\"白河县\"},{\"code\":\"610981\",\"name\":\"旬阳市\"}],[{\"code\":\"611002\",\"name\":\"商州区\"},{\"code\":\"611021\",\"name\":\"洛南县\"},{\"code\":\"611022\",\"name\":\"丹凤县\"},{\"code\":\"611023\",\"name\":\"商南县\"},{\"code\":\"611024\",\"name\":\"山阳县\"},{\"code\":\"611025\",\"name\":\"镇安县\"},{\"code\":\"611026\",\"name\":\"柞水县\"}]],[[{\"code\":\"620102\",\"name\":\"城关区\"},{\"code\":\"620103\",\"name\":\"七里河区\"},{\"code\":\"620104\",\"name\":\"西固区\"},{\"code\":\"620105\",\"name\":\"安宁区\"},{\"code\":\"620111\",\"name\":\"红古区\"},{\"code\":\"620121\",\"name\":\"永登县\"},{\"code\":\"620122\",\"name\":\"皋兰县\"},{\"code\":\"620123\",\"name\":\"榆中县\"}],[{\"code\":\"620201\",\"name\":\"雄关区\"},{\"code\":\"620202\",\"name\":\"镜铁区\"},{\"code\":\"620203\",\"name\":\"长城区\"}],[{\"code\":\"620302\",\"name\":\"金川区\"},{\"code\":\"620321\",\"name\":\"永昌县\"}],[{\"code\":\"620402\",\"name\":\"白银区\"},{\"code\":\"620403\",\"name\":\"平川区\"},{\"code\":\"620421\",\"name\":\"靖远县\"},{\"code\":\"620422\",\"name\":\"会宁县\"},{\"code\":\"620423\",\"name\":\"景泰县\"}],[{\"code\":\"620502\",\"name\":\"秦州区\"},{\"code\":\"620503\",\"name\":\"麦积区\"},{\"code\":\"620521\",\"name\":\"清水县\"},{\"code\":\"620522\",\"name\":\"秦安县\"},{\"code\":\"620523\",\"name\":\"甘谷县\"},{\"code\":\"620524\",\"name\":\"武山县\"},{\"code\":\"620525\",\"name\":\"张家川回族自治县\"}],[{\"code\":\"620602\",\"name\":\"凉州区\"},{\"code\":\"620621\",\"name\":\"民勤县\"},{\"code\":\"620622\",\"name\":\"古浪县\"},{\"code\":\"620623\",\"name\":\"天祝藏族自治县\"}],[{\"code\":\"620702\",\"name\":\"甘州区\"},{\"code\":\"620721\",\"name\":\"肃南裕固族自治县\"},{\"code\":\"620722\",\"name\":\"民乐县\"},{\"code\":\"620723\",\"name\":\"临泽县\"},{\"code\":\"620724\",\"name\":\"高台县\"},{\"code\":\"620725\",\"name\":\"山丹县\"}],[{\"code\":\"620802\",\"name\":\"崆峒区\"},{\"code\":\"620821\",\"name\":\"泾川县\"},{\"code\":\"620822\",\"name\":\"灵台县\"},{\"code\":\"620823\",\"name\":\"崇信县\"},{\"code\":\"620824\",\"name\":\"华亭县\"},{\"code\":\"620825\",\"name\":\"庄浪县\"},{\"code\":\"620826\",\"name\":\"静宁县\"}],[{\"code\":\"620902\",\"name\":\"肃州区\"},{\"code\":\"620921\",\"name\":\"金塔县\"},{\"code\":\"620922\",\"name\":\"瓜州县\"},{\"code\":\"620923\",\"name\":\"肃北蒙古族自治县\"},{\"code\":\"620924\",\"name\":\"阿克塞哈萨克族自治县\"},{\"code\":\"620981\",\"name\":\"玉门市\"},{\"code\":\"620982\",\"name\":\"敦煌市\"}],[{\"code\":\"621002\",\"name\":\"西峰区\"},{\"code\":\"621021\",\"name\":\"庆城县\"},{\"code\":\"621022\",\"name\":\"环县\"},{\"code\":\"621023\",\"name\":\"华池县\"},{\"code\":\"621024\",\"name\":\"合水县\"},{\"code\":\"621025\",\"name\":\"正宁县\"},{\"code\":\"621026\",\"name\":\"宁县\"},{\"code\":\"621027\",\"name\":\"镇原县\"}],[{\"code\":\"621102\",\"name\":\"安定区\"},{\"code\":\"621121\",\"name\":\"通渭县\"},{\"code\":\"621122\",\"name\":\"陇西县\"},{\"code\":\"621123\",\"name\":\"渭源县\"},{\"code\":\"621124\",\"name\":\"临洮县\"},{\"code\":\"621125\",\"name\":\"漳县\"},{\"code\":\"621126\",\"name\":\"岷县\"}],[{\"code\":\"621202\",\"name\":\"武都区\"},{\"code\":\"621221\",\"name\":\"成县\"},{\"code\":\"621222\",\"name\":\"文县\"},{\"code\":\"621223\",\"name\":\"宕昌县\"},{\"code\":\"621224\",\"name\":\"康县\"},{\"code\":\"621225\",\"name\":\"西和县\"},{\"code\":\"621226\",\"name\":\"礼县\"},{\"code\":\"621227\",\"name\":\"徽县\"},{\"code\":\"621228\",\"name\":\"两当县\"}],[{\"code\":\"622901\",\"name\":\"临夏市\"},{\"code\":\"622921\",\"name\":\"临夏县\"},{\"code\":\"622922\",\"name\":\"康乐县\"},{\"code\":\"622923\",\"name\":\"永靖县\"},{\"code\":\"622924\",\"name\":\"广河县\"},{\"code\":\"622925\",\"name\":\"和政县\"},{\"code\":\"622926\",\"name\":\"东乡族自治县\"},{\"code\":\"622927\",\"name\":\"积石山保安族东乡族撒拉族自治县\"}],[{\"code\":\"623001\",\"name\":\"合作市\"},{\"code\":\"623021\",\"name\":\"临潭县\"},{\"code\":\"623022\",\"name\":\"卓尼县\"},{\"code\":\"623023\",\"name\":\"舟曲县\"},{\"code\":\"623024\",\"name\":\"迭部县\"},{\"code\":\"623025\",\"name\":\"玛曲县\"},{\"code\":\"623026\",\"name\":\"碌曲县\"},{\"code\":\"623027\",\"name\":\"夏河县\"}]],[[{\"code\":\"630102\",\"name\":\"城东区\"},{\"code\":\"630103\",\"name\":\"城中区\"},{\"code\":\"630104\",\"name\":\"城西区\"},{\"code\":\"630105\",\"name\":\"城北区\"},{\"code\":\"630121\",\"name\":\"大通回族土族自治县\"},{\"code\":\"630122\",\"name\":\"湟中县\"},{\"code\":\"630123\",\"name\":\"湟源县\"}],[{\"code\":\"630202\",\"name\":\"乐都区\"},{\"code\":\"630203\",\"name\":\"平安区\"},{\"code\":\"630222\",\"name\":\"民和回族土族自治县\"},{\"code\":\"630223\",\"name\":\"互助土族自治县\"},{\"code\":\"630224\",\"name\":\"化隆回族自治县\"},{\"code\":\"630225\",\"name\":\"循化撒拉族自治县\"}],[{\"code\":\"632221\",\"name\":\"门源回族自治县\"},{\"code\":\"632222\",\"name\":\"祁连县\"},{\"code\":\"632223\",\"name\":\"海晏县\"},{\"code\":\"632224\",\"name\":\"刚察县\"}],[{\"code\":\"632321\",\"name\":\"同仁县\"},{\"code\":\"632322\",\"name\":\"尖扎县\"},{\"code\":\"632323\",\"name\":\"泽库县\"},{\"code\":\"632324\",\"name\":\"河南蒙古族自治县\"}],[{\"code\":\"632521\",\"name\":\"共和县\"},{\"code\":\"632522\",\"name\":\"同德县\"},{\"code\":\"632523\",\"name\":\"贵德县\"},{\"code\":\"632524\",\"name\":\"兴海县\"},{\"code\":\"632525\",\"name\":\"贵南县\"}],[{\"code\":\"632621\",\"name\":\"玛沁县\"},{\"code\":\"632622\",\"name\":\"班玛县\"},{\"code\":\"632623\",\"name\":\"甘德县\"},{\"code\":\"632624\",\"name\":\"达日县\"},{\"code\":\"632625\",\"name\":\"久治县\"},{\"code\":\"632626\",\"name\":\"玛多县\"}],[{\"code\":\"632701\",\"name\":\"玉树市\"},{\"code\":\"632722\",\"name\":\"杂多县\"},{\"code\":\"632723\",\"name\":\"称多县\"},{\"code\":\"632724\",\"name\":\"治多县\"},{\"code\":\"632725\",\"name\":\"囊谦县\"},{\"code\":\"632726\",\"name\":\"曲麻莱县\"}],[{\"code\":\"632801\",\"name\":\"格尔木市\"},{\"code\":\"632802\",\"name\":\"德令哈市\"},{\"code\":\"632821\",\"name\":\"乌兰县\"},{\"code\":\"632822\",\"name\":\"都兰县\"},{\"code\":\"632823\",\"name\":\"天峻县\"},{\"code\":\"632824\",\"name\":\"冷湖行政委员会\"},{\"code\":\"632825\",\"name\":\"大柴旦行政委员会\"},{\"code\":\"632826\",\"name\":\"茫崖行政委员会\"}]],[[{\"code\":\"640104\",\"name\":\"兴庆区\"},{\"code\":\"640105\",\"name\":\"西夏区\"},{\"code\":\"640106\",\"name\":\"金凤区\"},{\"code\":\"640121\",\"name\":\"永宁县\"},{\"code\":\"640122\",\"name\":\"贺兰县\"},{\"code\":\"640181\",\"name\":\"灵武市\"}],[{\"code\":\"640202\",\"name\":\"大武口区\"},{\"code\":\"640205\",\"name\":\"惠农区\"},{\"code\":\"640221\",\"name\":\"平罗县\"}],[{\"code\":\"640302\",\"name\":\"利通区\"},{\"code\":\"640303\",\"name\":\"红寺堡区\"},{\"code\":\"640323\",\"name\":\"盐池县\"},{\"code\":\"640324\",\"name\":\"同心县\"},{\"code\":\"640381\",\"name\":\"青铜峡市\"}],[{\"code\":\"640402\",\"name\":\"原州区\"},{\"code\":\"640422\",\"name\":\"西吉县\"},{\"code\":\"640423\",\"name\":\"隆德县\"},{\"code\":\"640424\",\"name\":\"泾源县\"},{\"code\":\"640425\",\"name\":\"彭阳县\"}],[{\"code\":\"640502\",\"name\":\"沙坡头区\"},{\"code\":\"640521\",\"name\":\"中宁县\"},{\"code\":\"640522\",\"name\":\"海原县\"}]],[[{\"code\":\"650102\",\"name\":\"天山区\"},{\"code\":\"650103\",\"name\":\"沙依巴克区\"},{\"code\":\"650104\",\"name\":\"新市区\"},{\"code\":\"650105\",\"name\":\"水磨沟区\"},{\"code\":\"650106\",\"name\":\"头屯河区\"},{\"code\":\"650107\",\"name\":\"达坂城区\"},{\"code\":\"650109\",\"name\":\"米东区\"},{\"code\":\"650121\",\"name\":\"乌鲁木齐县\"}],[{\"code\":\"650202\",\"name\":\"独山子区\"},{\"code\":\"650203\",\"name\":\"克拉玛依区\"},{\"code\":\"650204\",\"name\":\"白碱滩区\"},{\"code\":\"650205\",\"name\":\"乌尔禾区\"}],[{\"code\":\"650402\",\"name\":\"高昌区\"},{\"code\":\"650421\",\"name\":\"鄯善县\"},{\"code\":\"650422\",\"name\":\"托克逊县\"}],[{\"code\":\"650502\",\"name\":\"伊州区\"},{\"code\":\"650521\",\"name\":\"巴里坤哈萨克自治县\"},{\"code\":\"650522\",\"name\":\"伊吾县\"}],[{\"code\":\"652301\",\"name\":\"昌吉市\"},{\"code\":\"652302\",\"name\":\"阜康市\"},{\"code\":\"652323\",\"name\":\"呼图壁县\"},{\"code\":\"652324\",\"name\":\"玛纳斯县\"},{\"code\":\"652325\",\"name\":\"奇台县\"},{\"code\":\"652327\",\"name\":\"吉木萨尔县\"},{\"code\":\"652328\",\"name\":\"木垒哈萨克自治县\"}],[{\"code\":\"652701\",\"name\":\"博乐市\"},{\"code\":\"652702\",\"name\":\"阿拉山口市\"},{\"code\":\"652722\",\"name\":\"精河县\"},{\"code\":\"652723\",\"name\":\"温泉县\"}],[{\"code\":\"652801\",\"name\":\"库尔勒市\"},{\"code\":\"652822\",\"name\":\"轮台县\"},{\"code\":\"652823\",\"name\":\"尉犁县\"},{\"code\":\"652824\",\"name\":\"若羌县\"},{\"code\":\"652825\",\"name\":\"且末县\"},{\"code\":\"652826\",\"name\":\"焉耆回族自治县\"},{\"code\":\"652827\",\"name\":\"和静县\"},{\"code\":\"652828\",\"name\":\"和硕县\"},{\"code\":\"652829\",\"name\":\"博湖县\"}],[{\"code\":\"652901\",\"name\":\"阿克苏市\"},{\"code\":\"652922\",\"name\":\"温宿县\"},{\"code\":\"652923\",\"name\":\"库车县\"},{\"code\":\"652924\",\"name\":\"沙雅县\"},{\"code\":\"652925\",\"name\":\"新和县\"},{\"code\":\"652926\",\"name\":\"拜城县\"},{\"code\":\"652927\",\"name\":\"乌什县\"},{\"code\":\"652928\",\"name\":\"阿瓦提县\"},{\"code\":\"652929\",\"name\":\"柯坪县\"}],[{\"code\":\"653001\",\"name\":\"阿图什市\"},{\"code\":\"653022\",\"name\":\"阿克陶县\"},{\"code\":\"653023\",\"name\":\"阿合奇县\"},{\"code\":\"653024\",\"name\":\"乌恰县\"}],[{\"code\":\"653101\",\"name\":\"喀什市\"},{\"code\":\"653121\",\"name\":\"疏附县\"},{\"code\":\"653122\",\"name\":\"疏勒县\"},{\"code\":\"653123\",\"name\":\"英吉沙县\"},{\"code\":\"653124\",\"name\":\"泽普县\"},{\"code\":\"653125\",\"name\":\"莎车县\"},{\"code\":\"653126\",\"name\":\"叶城县\"},{\"code\":\"653127\",\"name\":\"麦盖提县\"},{\"code\":\"653128\",\"name\":\"岳普湖县\"},{\"code\":\"653129\",\"name\":\"伽师县\"},{\"code\":\"653130\",\"name\":\"巴楚县\"},{\"code\":\"653131\",\"name\":\"塔什库尔干塔吉克自治县\"}],[{\"code\":\"653201\",\"name\":\"和田市\"},{\"code\":\"653221\",\"name\":\"和田县\"},{\"code\":\"653222\",\"name\":\"墨玉县\"},{\"code\":\"653223\",\"name\":\"皮山县\"},{\"code\":\"653224\",\"name\":\"洛浦县\"},{\"code\":\"653225\",\"name\":\"策勒县\"},{\"code\":\"653226\",\"name\":\"于田县\"},{\"code\":\"653227\",\"name\":\"民丰县\"}],[{\"code\":\"654002\",\"name\":\"伊宁市\"},{\"code\":\"654003\",\"name\":\"奎屯市\"},{\"code\":\"654004\",\"name\":\"霍尔果斯市\"},{\"code\":\"654021\",\"name\":\"伊宁县\"},{\"code\":\"654022\",\"name\":\"察布查尔锡伯自治县\"},{\"code\":\"654023\",\"name\":\"霍城县\"},{\"code\":\"654024\",\"name\":\"巩留县\"},{\"code\":\"654025\",\"name\":\"新源县\"},{\"code\":\"654026\",\"name\":\"昭苏县\"},{\"code\":\"654027\",\"name\":\"特克斯县\"},{\"code\":\"654028\",\"name\":\"尼勒克县\"}],[{\"code\":\"654201\",\"name\":\"塔城市\"},{\"code\":\"654202\",\"name\":\"乌苏市\"},{\"code\":\"654203\",\"name\":\"沙湾市\"},{\"code\":\"654221\",\"name\":\"额敏县\"},{\"code\":\"654224\",\"name\":\"托里县\"},{\"code\":\"654225\",\"name\":\"裕民县\"},{\"code\":\"654226\",\"name\":\"和布克赛尔蒙古自治县\"}],[{\"code\":\"654301\",\"name\":\"阿勒泰市\"},{\"code\":\"654321\",\"name\":\"布尔津县\"},{\"code\":\"654322\",\"name\":\"富蕴县\"},{\"code\":\"654323\",\"name\":\"福海县\"},{\"code\":\"654324\",\"name\":\"哈巴河县\"},{\"code\":\"654325\",\"name\":\"青河县\"},{\"code\":\"654326\",\"name\":\"吉木乃县\"}],[{\"code\":\"659001\",\"name\":\"石河子市\"},{\"code\":\"659002\",\"name\":\"阿拉尔市\"},{\"code\":\"659003\",\"name\":\"图木舒克市\"},{\"code\":\"659004\",\"name\":\"五家渠市\"},{\"code\":\"659005\",\"name\":\"北屯市\"},{\"code\":\"659006\",\"name\":\"铁门关市\"},{\"code\":\"659007\",\"name\":\"双河市\"},{\"code\":\"659008\",\"name\":\"可克达拉市\"},{\"code\":\"659009\",\"name\":\"昆玉市\"}]],[[{\"code\":\"710101\",\"name\":\"中正区\"},{\"code\":\"710102\",\"name\":\"大同区\"},{\"code\":\"710103\",\"name\":\"中山区\"},{\"code\":\"710104\",\"name\":\"松山区\"},{\"code\":\"710105\",\"name\":\"大安区\"},{\"code\":\"710106\",\"name\":\"万华区\"},{\"code\":\"710107\",\"name\":\"信义区\"},{\"code\":\"710108\",\"name\":\"士林区\"},{\"code\":\"710109\",\"name\":\"北投区\"},{\"code\":\"710110\",\"name\":\"内湖区\"},{\"code\":\"710111\",\"name\":\"南港区\"},{\"code\":\"710112\",\"name\":\"文山区\"}],[{\"code\":\"710201\",\"name\":\"新兴区\"},{\"code\":\"710202\",\"name\":\"前金区\"},{\"code\":\"710203\",\"name\":\"苓雅区\"},{\"code\":\"710204\",\"name\":\"盐埕区\"},{\"code\":\"710205\",\"name\":\"鼓山区\"},{\"code\":\"710206\",\"name\":\"旗津区\"},{\"code\":\"710207\",\"name\":\"前镇区\"},{\"code\":\"710208\",\"name\":\"三民区\"},{\"code\":\"710209\",\"name\":\"左营区\"},{\"code\":\"710210\",\"name\":\"楠梓区\"},{\"code\":\"710211\",\"name\":\"小港区\"},{\"code\":\"710242\",\"name\":\"仁武区\"},{\"code\":\"710243\",\"name\":\"大社区\"},{\"code\":\"710244\",\"name\":\"冈山区\"},{\"code\":\"710245\",\"name\":\"路竹区\"},{\"code\":\"710246\",\"name\":\"阿莲区\"},{\"code\":\"710247\",\"name\":\"田寮区\"},{\"code\":\"710248\",\"name\":\"燕巢区\"},{\"code\":\"710249\",\"name\":\"桥头区\"},{\"code\":\"710250\",\"name\":\"梓官区\"},{\"code\":\"710251\",\"name\":\"弥陀区\"},{\"code\":\"710252\",\"name\":\"永安区\"},{\"code\":\"710253\",\"name\":\"湖内区\"},{\"code\":\"710254\",\"name\":\"凤山区\"},{\"code\":\"710255\",\"name\":\"大寮区\"},{\"code\":\"710256\",\"name\":\"林园区\"},{\"code\":\"710257\",\"name\":\"鸟松区\"},{\"code\":\"710258\",\"name\":\"大树区\"},{\"code\":\"710259\",\"name\":\"旗山区\"},{\"code\":\"710260\",\"name\":\"美浓区\"},{\"code\":\"710261\",\"name\":\"六龟区\"},{\"code\":\"710262\",\"name\":\"内门区\"},{\"code\":\"710263\",\"name\":\"杉林区\"},{\"code\":\"710264\",\"name\":\"甲仙区\"},{\"code\":\"710265\",\"name\":\"桃源区\"},{\"code\":\"710266\",\"name\":\"那玛夏区\"},{\"code\":\"710267\",\"name\":\"茂林区\"},{\"code\":\"710268\",\"name\":\"茄萣区\"}],[{\"code\":\"710301\",\"name\":\"中西区\"},{\"code\":\"710302\",\"name\":\"东区\"},{\"code\":\"710303\",\"name\":\"南区\"},{\"code\":\"710304\",\"name\":\"北区\"},{\"code\":\"710305\",\"name\":\"安平区\"},{\"code\":\"710306\",\"name\":\"安南区\"},{\"code\":\"710339\",\"name\":\"永康区\"},{\"code\":\"710340\",\"name\":\"归仁区\"},{\"code\":\"710341\",\"name\":\"新化区\"},{\"code\":\"710342\",\"name\":\"左镇区\"},{\"code\":\"710343\",\"name\":\"玉井区\"},{\"code\":\"710344\",\"name\":\"楠西区\"},{\"code\":\"710345\",\"name\":\"南化区\"},{\"code\":\"710346\",\"name\":\"仁德区\"},{\"code\":\"710347\",\"name\":\"关庙区\"},{\"code\":\"710348\",\"name\":\"龙崎区\"},{\"code\":\"710349\",\"name\":\"官田区\"},{\"code\":\"710350\",\"name\":\"麻豆区\"},{\"code\":\"710351\",\"name\":\"佳里区\"},{\"code\":\"710352\",\"name\":\"西港区\"},{\"code\":\"710353\",\"name\":\"七股区\"},{\"code\":\"710354\",\"name\":\"将军区\"},{\"code\":\"710355\",\"name\":\"学甲区\"},{\"code\":\"710356\",\"name\":\"北门区\"},{\"code\":\"710357\",\"name\":\"新营区\"},{\"code\":\"710358\",\"name\":\"后壁区\"},{\"code\":\"710359\",\"name\":\"白河区\"},{\"code\":\"710360\",\"name\":\"东山区\"},{\"code\":\"710361\",\"name\":\"六甲区\"},{\"code\":\"710362\",\"name\":\"下营区\"},{\"code\":\"710363\",\"name\":\"柳营区\"},{\"code\":\"710364\",\"name\":\"盐水区\"},{\"code\":\"710365\",\"name\":\"善化区\"},{\"code\":\"710366\",\"name\":\"大内区\"},{\"code\":\"710367\",\"name\":\"山上区\"},{\"code\":\"710368\",\"name\":\"新市区\"},{\"code\":\"710369\",\"name\":\"安定区\"}],[{\"code\":\"710401\",\"name\":\"中区\"},{\"code\":\"710402\",\"name\":\"东区\"},{\"code\":\"710403\",\"name\":\"南区\"},{\"code\":\"710404\",\"name\":\"西区\"},{\"code\":\"710405\",\"name\":\"北区\"},{\"code\":\"710406\",\"name\":\"北屯区\"},{\"code\":\"710407\",\"name\":\"西屯区\"},{\"code\":\"710408\",\"name\":\"南屯区\"},{\"code\":\"710431\",\"name\":\"太平区\"},{\"code\":\"710432\",\"name\":\"大里区\"},{\"code\":\"710433\",\"name\":\"雾峰区\"},{\"code\":\"710434\",\"name\":\"乌日区\"},{\"code\":\"710435\",\"name\":\"丰原区\"},{\"code\":\"710436\",\"name\":\"后里区\"},{\"code\":\"710437\",\"name\":\"石冈区\"},{\"code\":\"710438\",\"name\":\"东势区\"},{\"code\":\"710439\",\"name\":\"和平区\"},{\"code\":\"710440\",\"name\":\"新社区\"},{\"code\":\"710441\",\"name\":\"潭子区\"},{\"code\":\"710442\",\"name\":\"大雅区\"},{\"code\":\"710443\",\"name\":\"神冈区\"},{\"code\":\"710444\",\"name\":\"大肚区\"},{\"code\":\"710445\",\"name\":\"沙鹿区\"},{\"code\":\"710446\",\"name\":\"龙井区\"},{\"code\":\"710447\",\"name\":\"梧栖区\"},{\"code\":\"710448\",\"name\":\"清水区\"},{\"code\":\"710449\",\"name\":\"大甲区\"},{\"code\":\"710450\",\"name\":\"外埔区\"},{\"code\":\"710451\",\"name\":\"大安区\"}],[{\"code\":\"710614\",\"name\":\"南投市\"},{\"code\":\"710615\",\"name\":\"中寮乡\"},{\"code\":\"710616\",\"name\":\"草屯镇\"},{\"code\":\"710617\",\"name\":\"国姓乡\"},{\"code\":\"710618\",\"name\":\"埔里镇\"},{\"code\":\"710619\",\"name\":\"仁爱乡\"},{\"code\":\"710620\",\"name\":\"名间乡\"},{\"code\":\"710621\",\"name\":\"集集镇\"},{\"code\":\"710622\",\"name\":\"水里乡\"},{\"code\":\"710623\",\"name\":\"鱼池乡\"},{\"code\":\"710624\",\"name\":\"信义乡\"},{\"code\":\"710625\",\"name\":\"竹山镇\"},{\"code\":\"710626\",\"name\":\"鹿谷乡\"}],[{\"code\":\"710701\",\"name\":\"仁爱区\"},{\"code\":\"710702\",\"name\":\"信义区\"},{\"code\":\"710703\",\"name\":\"中正区\"},{\"code\":\"710704\",\"name\":\"中山区\"},{\"code\":\"710705\",\"name\":\"安乐区\"},{\"code\":\"710706\",\"name\":\"暖暖区\"},{\"code\":\"710707\",\"name\":\"七堵区\"}],[{\"code\":\"710801\",\"name\":\"东区\"},{\"code\":\"710802\",\"name\":\"北区\"},{\"code\":\"710803\",\"name\":\"香山区\"}],[{\"code\":\"710901\",\"name\":\"东区\"},{\"code\":\"710902\",\"name\":\"西区\"}],[{\"code\":\"711130\",\"name\":\"万里区\"},{\"code\":\"711131\",\"name\":\"金山区\"},{\"code\":\"711132\",\"name\":\"板桥区\"},{\"code\":\"711133\",\"name\":\"汐止区\"},{\"code\":\"711134\",\"name\":\"深坑区\"},{\"code\":\"711135\",\"name\":\"石碇区\"},{\"code\":\"711136\",\"name\":\"瑞芳区\"},{\"code\":\"711137\",\"name\":\"平溪区\"},{\"code\":\"711138\",\"name\":\"双溪区\"},{\"code\":\"711139\",\"name\":\"贡寮区\"},{\"code\":\"711140\",\"name\":\"新店区\"},{\"code\":\"711141\",\"name\":\"坪林区\"},{\"code\":\"711142\",\"name\":\"乌来区\"},{\"code\":\"711143\",\"name\":\"永和区\"},{\"code\":\"711144\",\"name\":\"中和区\"},{\"code\":\"711145\",\"name\":\"土城区\"},{\"code\":\"711146\",\"name\":\"三峡区\"},{\"code\":\"711147\",\"name\":\"树林区\"},{\"code\":\"711148\",\"name\":\"莺歌区\"},{\"code\":\"711149\",\"name\":\"三重区\"},{\"code\":\"711150\",\"name\":\"新庄区\"},{\"code\":\"711151\",\"name\":\"泰山区\"},{\"code\":\"711152\",\"name\":\"林口区\"},{\"code\":\"711153\",\"name\":\"芦洲区\"},{\"code\":\"711154\",\"name\":\"五股区\"},{\"code\":\"711155\",\"name\":\"八里区\"},{\"code\":\"711156\",\"name\":\"淡水区\"},{\"code\":\"711157\",\"name\":\"三芝区\"},{\"code\":\"711158\",\"name\":\"石门区\"}],[{\"code\":\"711214\",\"name\":\"宜兰市\"},{\"code\":\"711215\",\"name\":\"头城镇\"},{\"code\":\"711216\",\"name\":\"礁溪乡\"},{\"code\":\"711217\",\"name\":\"壮围乡\"},{\"code\":\"711218\",\"name\":\"员山乡\"},{\"code\":\"711219\",\"name\":\"罗东镇\"},{\"code\":\"711220\",\"name\":\"三星乡\"},{\"code\":\"711221\",\"name\":\"大同乡\"},{\"code\":\"711222\",\"name\":\"五结乡\"},{\"code\":\"711223\",\"name\":\"冬山乡\"},{\"code\":\"711224\",\"name\":\"苏澳镇\"},{\"code\":\"711225\",\"name\":\"南澳乡\"}],[{\"code\":\"711314\",\"name\":\"竹北市\"},{\"code\":\"711315\",\"name\":\"湖口乡\"},{\"code\":\"711316\",\"name\":\"新丰乡\"},{\"code\":\"711317\",\"name\":\"新埔镇\"},{\"code\":\"711318\",\"name\":\"关西镇\"},{\"code\":\"711319\",\"name\":\"芎林乡\"},{\"code\":\"711320\",\"name\":\"宝山乡\"},{\"code\":\"711321\",\"name\":\"竹东镇\"},{\"code\":\"711322\",\"name\":\"五峰乡\"},{\"code\":\"711323\",\"name\":\"横山乡\"},{\"code\":\"711324\",\"name\":\"尖石乡\"},{\"code\":\"711325\",\"name\":\"北埔乡\"},{\"code\":\"711326\",\"name\":\"峨眉乡\"}],[{\"code\":\"711414\",\"name\":\"中坜区\"},{\"code\":\"711415\",\"name\":\"平镇区\"},{\"code\":\"711416\",\"name\":\"龙潭区\"},{\"code\":\"711417\",\"name\":\"杨梅区\"},{\"code\":\"711418\",\"name\":\"新屋区\"},{\"code\":\"711419\",\"name\":\"观音区\"},{\"code\":\"711420\",\"name\":\"桃园区\"},{\"code\":\"711421\",\"name\":\"龟山区\"},{\"code\":\"711422\",\"name\":\"八德区\"},{\"code\":\"711423\",\"name\":\"大溪区\"},{\"code\":\"711424\",\"name\":\"复兴区\"},{\"code\":\"711425\",\"name\":\"大园区\"},{\"code\":\"711426\",\"name\":\"芦竹区\"}],[{\"code\":\"711519\",\"name\":\"竹南镇\"},{\"code\":\"711520\",\"name\":\"头份市\"},{\"code\":\"711521\",\"name\":\"三湾乡\"},{\"code\":\"711522\",\"name\":\"南庄乡\"},{\"code\":\"711523\",\"name\":\"狮潭乡\"},{\"code\":\"711524\",\"name\":\"后龙镇\"},{\"code\":\"711525\",\"name\":\"通霄镇\"},{\"code\":\"711526\",\"name\":\"苑里镇\"},{\"code\":\"711527\",\"name\":\"苗栗市\"},{\"code\":\"711528\",\"name\":\"造桥乡\"},{\"code\":\"711529\",\"name\":\"头屋乡\"},{\"code\":\"711530\",\"name\":\"公馆乡\"},{\"code\":\"711531\",\"name\":\"大湖乡\"},{\"code\":\"711532\",\"name\":\"泰安乡\"},{\"code\":\"711533\",\"name\":\"铜锣乡\"},{\"code\":\"711534\",\"name\":\"三义乡\"},{\"code\":\"711535\",\"name\":\"西湖乡\"},{\"code\":\"711536\",\"name\":\"卓兰镇\"}],[{\"code\":\"711727\",\"name\":\"彰化市\"},{\"code\":\"711728\",\"name\":\"芬园乡\"},{\"code\":\"711729\",\"name\":\"花坛乡\"},{\"code\":\"711730\",\"name\":\"秀水乡\"},{\"code\":\"711731\",\"name\":\"鹿港镇\"},{\"code\":\"711732\",\"name\":\"福兴乡\"},{\"code\":\"711733\",\"name\":\"线西乡\"},{\"code\":\"711734\",\"name\":\"和美镇\"},{\"code\":\"711735\",\"name\":\"伸港乡\"},{\"code\":\"711736\",\"name\":\"员林市\"},{\"code\":\"711737\",\"name\":\"社头乡\"},{\"code\":\"711738\",\"name\":\"永靖乡\"},{\"code\":\"711739\",\"name\":\"埔心乡\"},{\"code\":\"711740\",\"name\":\"溪湖镇\"},{\"code\":\"711741\",\"name\":\"大村乡\"},{\"code\":\"711742\",\"name\":\"埔盐乡\"},{\"code\":\"711743\",\"name\":\"田中镇\"},{\"code\":\"711744\",\"name\":\"北斗镇\"},{\"code\":\"711745\",\"name\":\"田尾乡\"},{\"code\":\"711746\",\"name\":\"埤头乡\"},{\"code\":\"711747\",\"name\":\"溪州乡\"},{\"code\":\"711748\",\"name\":\"竹塘乡\"},{\"code\":\"711749\",\"name\":\"二林镇\"},{\"code\":\"711750\",\"name\":\"大城乡\"},{\"code\":\"711751\",\"name\":\"芳苑乡\"},{\"code\":\"711752\",\"name\":\"二水乡\"}],[{\"code\":\"711919\",\"name\":\"番路乡\"},{\"code\":\"711920\",\"name\":\"梅山乡\"},{\"code\":\"711921\",\"name\":\"竹崎乡\"},{\"code\":\"711922\",\"name\":\"阿里山乡\"},{\"code\":\"711923\",\"name\":\"中埔乡\"},{\"code\":\"711924\",\"name\":\"大埔乡\"},{\"code\":\"711925\",\"name\":\"水上乡\"},{\"code\":\"711926\",\"name\":\"鹿草乡\"},{\"code\":\"711927\",\"name\":\"太保市\"},{\"code\":\"711928\",\"name\":\"朴子市\"},{\"code\":\"711929\",\"name\":\"东石乡\"},{\"code\":\"711930\",\"name\":\"六脚乡\"},{\"code\":\"711931\",\"name\":\"新港乡\"},{\"code\":\"711932\",\"name\":\"民雄乡\"},{\"code\":\"711933\",\"name\":\"大林镇\"},{\"code\":\"711934\",\"name\":\"溪口乡\"},{\"code\":\"711935\",\"name\":\"义竹乡\"},{\"code\":\"711936\",\"name\":\"布袋镇\"}],[{\"code\":\"712121\",\"name\":\"斗南镇\"},{\"code\":\"712122\",\"name\":\"大埤乡\"},{\"code\":\"712123\",\"name\":\"虎尾镇\"},{\"code\":\"712124\",\"name\":\"土库镇\"},{\"code\":\"712125\",\"name\":\"褒忠乡\"},{\"code\":\"712126\",\"name\":\"东势乡\"},{\"code\":\"712127\",\"name\":\"台西乡\"},{\"code\":\"712128\",\"name\":\"仑背乡\"},{\"code\":\"712129\",\"name\":\"麦寮乡\"},{\"code\":\"712130\",\"name\":\"斗六市\"},{\"code\":\"712131\",\"name\":\"林内乡\"},{\"code\":\"712132\",\"name\":\"古坑乡\"},{\"code\":\"712133\",\"name\":\"莿桐乡\"},{\"code\":\"712134\",\"name\":\"西螺镇\"},{\"code\":\"712135\",\"name\":\"二仑乡\"},{\"code\":\"712136\",\"name\":\"北港镇\"},{\"code\":\"712137\",\"name\":\"水林乡\"},{\"code\":\"712138\",\"name\":\"口湖乡\"},{\"code\":\"712139\",\"name\":\"四湖乡\"},{\"code\":\"712140\",\"name\":\"元长乡\"}],[{\"code\":\"712434\",\"name\":\"屏东市\"},{\"code\":\"712435\",\"name\":\"三地门乡\"},{\"code\":\"712436\",\"name\":\"雾台乡\"},{\"code\":\"712437\",\"name\":\"玛家乡\"},{\"code\":\"712438\",\"name\":\"九如乡\"},{\"code\":\"712439\",\"name\":\"里港乡\"},{\"code\":\"712440\",\"name\":\"高树乡\"},{\"code\":\"712441\",\"name\":\"盐埔乡\"},{\"code\":\"712442\",\"name\":\"长治乡\"},{\"code\":\"712443\",\"name\":\"麟洛乡\"},{\"code\":\"712444\",\"name\":\"竹田乡\"},{\"code\":\"712445\",\"name\":\"内埔乡\"},{\"code\":\"712446\",\"name\":\"万丹乡\"},{\"code\":\"712447\",\"name\":\"潮州镇\"},{\"code\":\"712448\",\"name\":\"泰武乡\"},{\"code\":\"712449\",\"name\":\"来义乡\"},{\"code\":\"712450\",\"name\":\"万峦乡\"},{\"code\":\"712451\",\"name\":\"崁顶乡\"},{\"code\":\"712452\",\"name\":\"新埤乡\"},{\"code\":\"712453\",\"name\":\"南州乡\"},{\"code\":\"712454\",\"name\":\"林边乡\"},{\"code\":\"712455\",\"name\":\"东港镇\"},{\"code\":\"712456\",\"name\":\"琉球乡\"},{\"code\":\"712457\",\"name\":\"佳冬乡\"},{\"code\":\"712458\",\"name\":\"新园乡\"},{\"code\":\"712459\",\"name\":\"枋寮乡\"},{\"code\":\"712460\",\"name\":\"枋山乡\"},{\"code\":\"712461\",\"name\":\"春日乡\"},{\"code\":\"712462\",\"name\":\"狮子乡\"},{\"code\":\"712463\",\"name\":\"车城乡\"},{\"code\":\"712464\",\"name\":\"牡丹乡\"},{\"code\":\"712465\",\"name\":\"恒春镇\"},{\"code\":\"712466\",\"name\":\"满州乡\"}],[{\"code\":\"712517\",\"name\":\"台东市\"},{\"code\":\"712518\",\"name\":\"绿岛乡\"},{\"code\":\"712519\",\"name\":\"兰屿乡\"},{\"code\":\"712520\",\"name\":\"延平乡\"},{\"code\":\"712521\",\"name\":\"卑南乡\"},{\"code\":\"712522\",\"name\":\"鹿野乡\"},{\"code\":\"712523\",\"name\":\"关山镇\"},{\"code\":\"712524\",\"name\":\"海端乡\"},{\"code\":\"712525\",\"name\":\"池上乡\"},{\"code\":\"712526\",\"name\":\"东河乡\"},{\"code\":\"712527\",\"name\":\"成功镇\"},{\"code\":\"712528\",\"name\":\"长滨乡\"},{\"code\":\"712529\",\"name\":\"金峰乡\"},{\"code\":\"712530\",\"name\":\"大武乡\"},{\"code\":\"712531\",\"name\":\"达仁乡\"},{\"code\":\"712532\",\"name\":\"太麻里乡\"}],[{\"code\":\"712615\",\"name\":\"花莲市\"},{\"code\":\"712616\",\"name\":\"新城乡\"},{\"code\":\"712618\",\"name\":\"秀林乡\"},{\"code\":\"712619\",\"name\":\"吉安乡\"},{\"code\":\"712620\",\"name\":\"寿丰乡\"},{\"code\":\"712621\",\"name\":\"凤林镇\"},{\"code\":\"712622\",\"name\":\"光复乡\"},{\"code\":\"712623\",\"name\":\"丰滨乡\"},{\"code\":\"712624\",\"name\":\"瑞穗乡\"},{\"code\":\"712625\",\"name\":\"万荣乡\"},{\"code\":\"712626\",\"name\":\"玉里镇\"},{\"code\":\"712627\",\"name\":\"卓溪乡\"},{\"code\":\"712628\",\"name\":\"富里乡\"}],[{\"code\":\"712707\",\"name\":\"马公市\"},{\"code\":\"712708\",\"name\":\"西屿乡\"},{\"code\":\"712709\",\"name\":\"望安乡\"},{\"code\":\"712710\",\"name\":\"七美乡\"},{\"code\":\"712711\",\"name\":\"白沙乡\"},{\"code\":\"712712\",\"name\":\"湖西乡\"}]],[[{\"code\":\"810101\",\"name\":\"中西区\"},{\"code\":\"810102\",\"name\":\"东区\"},{\"code\":\"810103\",\"name\":\"九龙城区\"},{\"code\":\"810104\",\"name\":\"观塘区\"},{\"code\":\"810105\",\"name\":\"南区\"},{\"code\":\"810106\",\"name\":\"深水埗区\"},{\"code\":\"810107\",\"name\":\"湾仔区\"},{\"code\":\"810108\",\"name\":\"黄大仙区\"},{\"code\":\"810109\",\"name\":\"油尖旺区\"},{\"code\":\"810110\",\"name\":\"离岛区\"},{\"code\":\"810111\",\"name\":\"葵青区\"},{\"code\":\"810112\",\"name\":\"北区\"},{\"code\":\"810113\",\"name\":\"西贡区\"},{\"code\":\"810114\",\"name\":\"沙田区\"},{\"code\":\"810115\",\"name\":\"屯门区\"},{\"code\":\"810116\",\"name\":\"大埔区\"},{\"code\":\"810117\",\"name\":\"荃湾区\"},{\"code\":\"810118\",\"name\":\"元朗区\"}]],[[{\"code\":\"820101\",\"name\":\"澳门半岛\"},{\"code\":\"820102\",\"name\":\"凼仔\"},{\"code\":\"820103\",\"name\":\"路凼城\"},{\"code\":\"820104\",\"name\":\"路环\"}]]]");

/***/ }),

/***/ 34:
/*!***********************************************************************!*\
  !*** F:/to_LHR/code/vue2/uni_modules/vk-uview-ui/libs/mixin/mixin.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  data: function data() {
    return {};
  },
  onLoad: function onLoad() {
    // getRect挂载到$u上，因为这方法需要使用in(this)，所以无法把它独立成一个单独的文件导出
    this.$u.getRect = this.$uGetRect;
  },
  methods: {
    // 查询节点信息
    // 目前此方法在支付宝小程序中无法获取组件跟接点的尺寸，为支付宝的bug(2020-07-21)
    // 解决办法为在组件根部再套一个没有任何作用的view元素
    $uGetRect: function $uGetRect(selector, all) {
      var _this = this;
      return new Promise(function (resolve) {
        uni.createSelectorQuery().in(_this)[all ? 'selectAll' : 'select'](selector).boundingClientRect(function (rect) {
          if (all && Array.isArray(rect) && rect.length) {
            resolve(rect);
          }
          if (!all && rect) {
            resolve(rect);
          }
        }).exec();
      });
    },
    getParentData: function getParentData() {
      var _this2 = this;
      var parentName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      // 避免在created中去定义parent变量
      if (!this.parent) this.parent = false;
      // 这里的本质原理是，通过获取父组件实例(也即u-radio-group的this)
      // 将父组件this中对应的参数，赋值给本组件(u-radio的this)的parentData对象中对应的属性
      // 之所以需要这么做，是因为所有端中，头条小程序不支持通过this.parent.xxx去监听父组件参数的变化
      this.parent = this.$u.$parent.call(this, parentName);
      if (this.parent) {
        // 历遍parentData中的属性，将parent中的同名属性赋值给parentData
        Object.keys(this.parentData).map(function (key) {
          _this2.parentData[key] = _this2.parent[key];
        });
      }
    },
    // 阻止事件冒泡
    preventEvent: function preventEvent(e) {
      e && e.stopPropagation && e.stopPropagation();
    }
  },
  onReachBottom: function onReachBottom() {
    uni.$emit('uOnReachBottom');
  },
  beforeDestroy: function beforeDestroy() {
    var _this3 = this;
    // 判断当前页面是否存在parent和chldren，一般在checkbox和checkbox-group父子联动的场景会有此情况
    // 组件销毁时，移除子组件在父组件children数组中的实例，释放资源，避免数据混乱
    if (this.parent && uni.$u.test.array(this.parent.children)) {
      // 组件销毁时，移除父组件中的children数组中对应的实例
      var childrenList = this.parent.children;
      childrenList.map(function (child, index) {
        // 如果相等，则移除
        if (child === _this3) {
          childrenList.splice(index, 1);
        }
      });
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 35:
/*!*************************************************************************!*\
  !*** F:/to_LHR/code/vue2/uni_modules/vk-uview-ui/libs/request/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
var _deepMerge = _interopRequireDefault(__webpack_require__(/*! ../function/deepMerge */ 36));
var _test = _interopRequireDefault(__webpack_require__(/*! ../function/test */ 38));
var Request = /*#__PURE__*/function () {
  function Request() {
    var _this = this;
    (0, _classCallCheck2.default)(this, Request);
    this.config = {
      baseUrl: '',
      // 请求的根域名
      // 默认的请求头
      header: {},
      method: 'POST',
      // 设置为json，返回后uni.request会对数据进行一次JSON.parse
      dataType: 'json',
      // 此参数无需处理，因为5+和支付宝小程序不支持，默认为text即可
      responseType: 'text',
      showLoading: true,
      // 是否显示请求中的loading
      loadingText: '请求中...',
      loadingTime: 800,
      // 在此时间内，请求还没回来的话，就显示加载中动画，单位ms
      timer: null,
      // 定时器
      originalData: false,
      // 是否在拦截器中返回服务端的原始数据，见文档说明
      loadingMask: true // 展示loading的时候，是否给一个透明的蒙层，防止触摸穿透
    };

    // 拦截器
    this.interceptor = {
      // 请求前的拦截
      request: null,
      // 请求后的拦截
      response: null
    };

    // get请求
    this.get = function (url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this.request({
        method: 'GET',
        url: url,
        header: header,
        data: data
      });
    };

    // post请求
    this.post = function (url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this.request({
        url: url,
        method: 'POST',
        header: header,
        data: data
      });
    };

    // put请求，不支持支付宝小程序(HX2.6.15)
    this.put = function (url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this.request({
        url: url,
        method: 'PUT',
        header: header,
        data: data
      });
    };

    // delete请求，不支持支付宝和头条小程序(HX2.6.15)
    this.delete = function (url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this.request({
        url: url,
        method: 'DELETE',
        header: header,
        data: data
      });
    };
  }
  (0, _createClass2.default)(Request, [{
    key: "setConfig",
    value:
    // 设置全局默认配置
    function setConfig(customConfig) {
      // 深度合并对象，否则会造成对象深层属性丢失
      this.config = (0, _deepMerge.default)(this.config, customConfig);
    }

    // 主要请求部分
  }, {
    key: "request",
    value: function request() {
      var _this2 = this;
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // 检查请求拦截
      if (this.interceptor.request && typeof this.interceptor.request === 'function') {
        var tmpConfig = {};
        var interceptorRequest = this.interceptor.request(options);
        if (interceptorRequest === false) {
          // 返回一个处于pending状态中的Promise，来取消原promise，避免进入then()回调
          return new Promise(function () {});
        }
        this.options = interceptorRequest;
      }
      options.dataType = options.dataType || this.config.dataType;
      options.responseType = options.responseType || this.config.responseType;
      options.url = options.url || '';
      options.params = options.params || {};
      options.header = Object.assign({}, this.config.header, options.header);
      options.method = options.method || this.config.method;
      return new Promise(function (resolve, reject) {
        options.complete = function (response) {
          // 请求返回后，隐藏loading(如果请求返回快的话，可能会没有loading)
          uni.hideLoading();
          // 清除定时器，如果请求回来了，就无需loading
          clearTimeout(_this2.config.timer);
          _this2.config.timer = null;
          // 判断用户对拦截返回数据的要求，如果originalData为true，返回所有的数据(response)到拦截器，否则只返回response.data
          if (_this2.config.originalData) {
            // 判断是否存在拦截器
            if (_this2.interceptor.response && typeof _this2.interceptor.response === 'function') {
              var resInterceptors = _this2.interceptor.response(response);
              // 如果拦截器不返回false，就将拦截器返回的内容给this.$u.post的then回调
              if (resInterceptors !== false) {
                resolve(resInterceptors);
              } else {
                // 如果拦截器返回false，意味着拦截器定义者认为返回有问题，直接接入catch回调
                reject(response);
              }
            } else {
              // 如果要求返回原始数据，就算没有拦截器，也返回最原始的数据
              resolve(response);
            }
          } else {
            if (response.statusCode == 200) {
              if (_this2.interceptor.response && typeof _this2.interceptor.response === 'function') {
                var _resInterceptors = _this2.interceptor.response(response.data);
                if (_resInterceptors !== false) {
                  resolve(_resInterceptors);
                } else {
                  reject(response.data);
                }
              } else {
                // 如果不是返回原始数据(originalData=false)，且没有拦截器的情况下，返回纯数据给then回调
                resolve(response.data);
              }
            } else {
              // 不返回原始数据的情况下，服务器状态码不为200，modal弹框提示
              // if(response.errMsg) {
              // 	uni.showModal({
              // 		title: response.errMsg
              // 	});
              // }
              reject(response);
            }
          }
        };

        // 判断用户传递的URL是否/开头,如果不是,加上/，这里使用了uView的test.js验证库的url()方法
        options.url = _test.default.url(options.url) ? options.url : _this2.config.baseUrl + (options.url.indexOf('/') == 0 ? options.url : '/' + options.url);

        // 是否显示loading
        // 加一个是否已有timer定时器的判断，否则有两个同时请求的时候，后者会清除前者的定时器id
        // 而没有清除前者的定时器，导致前者超时，一直显示loading
        if (_this2.config.showLoading && !_this2.config.timer) {
          _this2.config.timer = setTimeout(function () {
            uni.showLoading({
              title: _this2.config.loadingText,
              mask: _this2.config.loadingMask
            });
            _this2.config.timer = null;
          }, _this2.config.loadingTime);
        }
        uni.request(options);
      });
      // .catch(res => {
      // 	// 如果返回reject()，不让其进入this.$u.post().then().catch()后面的catct()
      // 	// 因为很多人都会忘了写后面的catch()，导致报错捕获不到catch
      // 	return new Promise(()=>{});
      // })
    }
  }]);
  return Request;
}();
var _default = new Request();
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 36:
/*!******************************************************************************!*\
  !*** F:/to_LHR/code/vue2/uni_modules/vk-uview-ui/libs/function/deepMerge.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _deepClone = _interopRequireDefault(__webpack_require__(/*! ./deepClone */ 37));
// JS对象深度合并
function deepMerge() {
  var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  target = (0, _deepClone.default)(target);
  if ((0, _typeof2.default)(target) !== 'object' || (0, _typeof2.default)(source) !== 'object') return false;
  for (var prop in source) {
    if (!source.hasOwnProperty(prop)) continue;
    if (prop in target) {
      if ((0, _typeof2.default)(target[prop]) !== 'object') {
        target[prop] = source[prop];
      } else {
        if ((0, _typeof2.default)(source[prop]) !== 'object') {
          target[prop] = source[prop];
        } else {
          if (target[prop].concat && source[prop].concat) {
            target[prop] = target[prop].concat(source[prop]);
          } else {
            target[prop] = deepMerge(target[prop], source[prop]);
          }
        }
      }
    } else {
      target[prop] = source[prop];
    }
  }
  return target;
}
var _default = deepMerge;
exports.default = _default;

/***/ }),

/***/ 37:
/*!******************************************************************************!*\
  !*** F:/to_LHR/code/vue2/uni_modules/vk-uview-ui/libs/function/deepClone.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
// 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]';
}

// 深度克隆
function deepClone(obj) {
  // 对常见的“非”值，直接返回原来值
  if ([null, undefined, NaN, false].includes(obj)) return obj;
  if ((0, _typeof2.default)(obj) !== "object" && typeof obj !== 'function') {
    //原始类型直接返回
    return obj;
  }
  var o = isArray(obj) ? [] : {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = (0, _typeof2.default)(obj[i]) === "object" ? deepClone(obj[i]) : obj[i];
    }
  }
  return o;
}
var _default = deepClone;
exports.default = _default;

/***/ }),

/***/ 38:
/*!*************************************************************************!*\
  !*** F:/to_LHR/code/vue2/uni_modules/vk-uview-ui/libs/function/test.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
/**
 * 验证电子邮箱格式
 */
function email(value) {
  return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value);
}

/**
 * 验证手机格式
 */
function mobile(value) {
  return /^1[23456789]\d{9}$/.test(value);
}

/**
 * 验证URL格式
 */
function url(value) {
  return /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?/.test(value);
}

/**
 * 验证日期格式
 */
function date(value) {
  return !/Invalid|NaN/.test(new Date(value).toString());
}

/**
 * 验证ISO类型的日期格式
 */
function dateISO(value) {
  return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
}

/**
 * 验证十进制数字
 */
function number(value) {
  return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
}

/**
 * 验证整数
 */
function digits(value) {
  return /^\d+$/.test(value);
}

/**
 * 验证身份证号码
 */
function idCard(value) {
  return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(value);
}

/**
 * 是否车牌号
 */
function carNo(value) {
  // 新能源车牌
  var xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
  // 旧车牌
  var creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
  if (value.length === 7) {
    return creg.test(value);
  } else if (value.length === 8) {
    return xreg.test(value);
  } else {
    return false;
  }
}

/**
 * 金额,只允许2位小数
 */
function amount(value) {
  //金额，只允许保留两位小数
  return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value);
}

/**
 * 中文
 */
function chinese(value) {
  var reg = /^[\u4e00-\u9fa5]+$/gi;
  return reg.test(value);
}

/**
 * 只能输入字母
 */
function letter(value) {
  return /^[a-zA-Z]*$/.test(value);
}

/**
 * 只能是字母或者数字
 */
function enOrNum(value) {
  //英文或者数字
  var reg = /^[0-9a-zA-Z]*$/g;
  return reg.test(value);
}

/**
 * 验证是否包含某个值
 */
function contains(value, param) {
  return value.indexOf(param) >= 0;
}

/**
 * 验证一个值范围[min, max]
 */
function range(value, param) {
  return value >= param[0] && value <= param[1];
}

/**
 * 验证一个长度范围[min, max]
 */
function rangeLength(value, param) {
  return value.length >= param[0] && value.length <= param[1];
}

/**
 * 是否固定电话
 */
function landline(value) {
  var reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
  return reg.test(value);
}

/**
 * 判断是否为空
 */
function empty(value) {
  switch ((0, _typeof2.default)(value)) {
    case 'undefined':
      return true;
    case 'string':
      if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0) return true;
      break;
    case 'boolean':
      if (!value) return true;
      break;
    case 'number':
      if (0 === value || isNaN(value)) return true;
      break;
    case 'object':
      if (null === value || value.length === 0) return true;
      for (var i in value) {
        return false;
      }
      return true;
  }
  return false;
}

/**
 * 是否json字符串
 */
function jsonString(value) {
  if (typeof value == 'string') {
    try {
      var obj = JSON.parse(value);
      if ((0, _typeof2.default)(obj) == 'object' && obj) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  }
  return false;
}

/**
 * 是否数组
 */
function array(value) {
  if (typeof Array.isArray === "function") {
    return Array.isArray(value);
  } else {
    return Object.prototype.toString.call(value) === "[object Array]";
  }
}

/**
 * 是否对象
 */
function object(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
}

/**
 * 是否短信验证码
 */
function code(value) {
  var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return new RegExp("^\\d{".concat(len, "}$")).test(value);
}
var _default = {
  email: email,
  mobile: mobile,
  url: url,
  date: date,
  dateISO: dateISO,
  number: number,
  digits: digits,
  idCard: idCard,
  carNo: carNo,
  amount: amount,
  chinese: chinese,
  letter: letter,
  enOrNum: enOrNum,
  contains: contains,
  range: range,
  rangeLength: rangeLength,
  empty: empty,
  isEmpty: empty,
  jsonString: jsonString,
  landline: landline,
  object: object,
  array: array,
  code: code
};
exports.default = _default;

/***/ }),

/***/ 39:
/*!********************************************************************************!*\
  !*** F:/to_LHR/code/vue2/uni_modules/vk-uview-ui/libs/function/queryParams.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * 对象转url参数
 * @param {*} data,对象
 * @param {*} isPrefix,是否自动加上"?"
 */
function queryParams() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var isPrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var arrayFormat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'brackets';
  var prefix = isPrefix ? '?' : '';
  var _result = [];
  if (['indices', 'brackets', 'repeat', 'comma'].indexOf(arrayFormat) == -1) arrayFormat = 'brackets';
  var _loop = function _loop(key) {
    var value = data[key];
    // 去掉为空的参数
    if (['', undefined, null].indexOf(value) >= 0) {
      return "continue";
    }
    // 如果值为数组，另行处理
    if (value.constructor === Array) {
      // e.g. {ids: [1, 2, 3]}
      switch (arrayFormat) {
        case 'indices':
          // 结果: ids[0]=1&ids[1]=2&ids[2]=3
          for (var i = 0; i < value.length; i++) {
            _result.push(key + '[' + i + ']=' + value[i]);
          }
          break;
        case 'brackets':
          // 结果: ids[]=1&ids[]=2&ids[]=3
          value.forEach(function (_value) {
            _result.push(key + '[]=' + _value);
          });
          break;
        case 'repeat':
          // 结果: ids=1&ids=2&ids=3
          value.forEach(function (_value) {
            _result.push(key + '=' + _value);
          });
          break;
        case 'comma':
          // 结果: ids=1,2,3
          var commaStr = "";
          value.forEach(function (_value) {
            commaStr += (commaStr ? "," : "") + _value;
          });
          _result.push(key + '=' + commaStr);
          break;
        default:
          value.forEach(function (_value) {
            _result.push(key + '[]=' + _value);
          });
      }
    } else {
      _result.push(key + '=' + value);
    }
  };
  for (var key in data) {
    var _ret = _loop(key);
    if (_ret === "continue") continue;
  }
  return _result.length ? prefix + _result.join('&') : '';
}
var _default = queryParams;
exports.default = _default;

/***/ }),

/***/ 4:
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 40:
/*!**************************************************************************!*\
  !*** F:/to_LHR/code/vue2/uni_modules/vk-uview-ui/libs/function/route.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 41));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 43));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
/**
 * 路由跳转方法，该方法相对于直接使用uni.xxx的好处是使用更加简单快捷
 * 并且带有路由拦截功能
 */
var Router = /*#__PURE__*/function () {
  function Router() {
    (0, _classCallCheck2.default)(this, Router);
    // 原始属性定义
    this.config = {
      type: 'navigateTo',
      url: '',
      delta: 1,
      // navigateBack页面后退时,回退的层数
      params: {},
      // 传递的参数
      animationType: 'pop-in',
      // 窗口动画,只在APP有效
      animationDuration: 300,
      // 窗口动画持续时间,单位毫秒,只在APP有效
      intercept: false // 是否需要拦截
    };
    // 因为route方法是需要对外赋值给另外的对象使用，同时route内部有使用this，会导致route失去上下文
    // 这里在构造函数中进行this绑定
    this.route = this.route.bind(this);
  }

  // 判断url前面是否有"/"，如果没有则加上，否则无法跳转
  (0, _createClass2.default)(Router, [{
    key: "addRootPath",
    value: function addRootPath(url) {
      return url[0] === '/' ? url : "/".concat(url);
    }

    // 整合路由参数
  }, {
    key: "mixinParam",
    value: function mixinParam(url, params) {
      url = url && this.addRootPath(url);

      // 使用正则匹配，主要依据是判断是否有"/","?","="等，如“/page/index/index?name=mary"
      // 如果有url中有get参数，转换后无需带上"?"
      var query = '';
      if (/.*\/.*\?.*=.*/.test(url)) {
        // object对象转为get类型的参数
        query = uni.$u.queryParams(params, false);
        // 因为已有get参数,所以后面拼接的参数需要带上"&"隔开
        return url += "&" + query;
      } else {
        // 直接拼接参数，因为此处url中没有后面的query参数，也就没有"?/&"之类的符号
        query = uni.$u.queryParams(params);
        return url += query;
      }
    }

    // 对外的方法名称
  }, {
    key: "route",
    value: function () {
      var _route = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var options,
          params,
          mergeConfig,
          isNext,
          _args = arguments;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                options = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
                params = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
                // 合并用户的配置和内部的默认配置
                mergeConfig = {};
                if (typeof options === 'string') {
                  // 如果options为字符串，则为route(url, params)的形式
                  mergeConfig.url = this.mixinParam(options, params);
                  mergeConfig.type = 'navigateTo';
                } else {
                  mergeConfig = uni.$u.deepClone(options, this.config);
                  // 否则正常使用mergeConfig中的url和params进行拼接
                  mergeConfig.url = this.mixinParam(options.url, options.params);
                }
                if (params.intercept) {
                  this.config.intercept = params.intercept;
                }
                // params参数也带给拦截器
                mergeConfig.params = params;
                // 合并内外部参数
                mergeConfig = uni.$u.deepMerge(this.config, mergeConfig);
                // 判断用户是否定义了拦截器
                if (!(typeof uni.$u.routeIntercept === 'function')) {
                  _context.next = 14;
                  break;
                }
                _context.next = 10;
                return new Promise(function (resolve, reject) {
                  uni.$u.routeIntercept(mergeConfig, resolve);
                });
              case 10:
                isNext = _context.sent;
                // 如果isNext为true，则执行路由跳转
                isNext && this.openPage(mergeConfig);
                _context.next = 15;
                break;
              case 14:
                this.openPage(mergeConfig);
              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function route() {
        return _route.apply(this, arguments);
      }
      return route;
    }() // 执行路由跳转
  }, {
    key: "openPage",
    value: function openPage(config) {
      // 解构参数
      var url = config.url,
        type = config.type,
        delta = config.delta,
        animationType = config.animationType,
        animationDuration = config.animationDuration;
      if (config.type == 'navigateTo' || config.type == 'to') {
        uni.navigateTo({
          url: url,
          animationType: animationType,
          animationDuration: animationDuration
        });
      }
      if (config.type == 'redirectTo' || config.type == 'redirect') {
        uni.redirectTo({
          url: url
        });
      }
      if (config.type == 'switchTab' || config.type == 'tab') {
        uni.switchTab({
          url: url
        });
      }
      if (config.type == 'reLaunch' || config.type == 'launch') {
        uni.reLaunch({
          url: url
        });
      }
      if (config.type == 'navigateBack' || config.type == 'back') {
        uni.navigateBack({
          delta: delta
        });
      }
    }
  }]);
  return Router;
}();
var _default = new Router().route;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 41:
/*!************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/@babel/runtime/regenerator/index.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! @babel/runtime/helpers/regeneratorRuntime */ 42)();
module.exports = runtime;

/***/ }),

/***/ 42:
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) {
              if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            }
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) {
      keys.push(key);
    }
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      }
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 43:
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 44:
/*!*******************************************************************************!*\
  !*** F:/to_LHR/code/vue2/uni_modules/vk-uview-ui/libs/function/timeFormat.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// padStart 的 polyfill，因为某些机型或情况，还无法支持es7的padStart，比如电脑版的微信小程序
// 所以这里做一个兼容polyfill的兼容处理
if (!String.prototype.padStart) {
  // 为了方便表示这里 fillString 用了ES6 的默认参数，不影响理解
  String.prototype.padStart = function (maxLength) {
    var fillString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';
    if (Object.prototype.toString.call(fillString) !== "[object String]") throw new TypeError('fillString must be String');
    var str = this;
    // 返回 String(str) 这里是为了使返回的值是字符串字面量，在控制台中更符合直觉
    if (str.length >= maxLength) return String(str);
    var fillLength = maxLength - str.length,
      times = Math.ceil(fillLength / fillString.length);
    while (times >>= 1) {
      fillString += fillString;
      if (times === 1) {
        fillString += fillString;
      }
    }
    return fillString.slice(0, fillLength) + str;
  };
}

// 其他更多是格式化有如下:
// yyyy:mm:dd|yyyy:mm|yyyy年mm月dd日|yyyy年mm月dd日 hh时MM分等,可自定义组合
function timeFormat() {
  var dateTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var fmt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';
  // 如果为null,则格式化当前时间
  if (!dateTime) dateTime = Number(new Date());
  // 如果dateTime长度为10或者13，则为秒和毫秒的时间戳，如果超过13位，则为其他的时间格式
  if (dateTime.toString().length == 10) dateTime *= 1000;
  var date = new Date(dateTime);
  var ret;
  var opt = {
    "y+": date.getFullYear().toString(),
    // 年
    "m+": (date.getMonth() + 1).toString(),
    // 月
    "d+": date.getDate().toString(),
    // 日
    "h+": date.getHours().toString(),
    // 时
    "M+": date.getMinutes().toString(),
    // 分
    "s+": date.getSeconds().toString() // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };

  for (var k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0"));
    }
    ;
  }
  ;
  return fmt;
}
var _default = timeFormat;
exports.default = _default;

/***/ }),

/***/ 45:
/*!*****************************************************************************!*\
  !*** F:/to_LHR/code/vue2/uni_modules/vk-uview-ui/libs/function/timeFrom.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _timeFormat = _interopRequireDefault(__webpack_require__(/*! ../../libs/function/timeFormat.js */ 44));
/**
 * 时间戳转为多久之前
 * @param String timestamp 时间戳
 * @param String | Boolean format 如果为时间格式字符串，超出一定时间范围，返回固定的时间格式；
 * 如果为布尔值false，无论什么时间，都返回多久以前的格式
 */
function timeFrom() {
  var dateTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';
  // 如果为null,则格式化当前时间
  if (!dateTime) dateTime = Number(new Date());
  // 如果dateTime长度为10或者13，则为秒和毫秒的时间戳，如果超过13位，则为其他的时间格式
  if (dateTime.toString().length == 10) dateTime *= 1000;
  var timestamp = +new Date(Number(dateTime));
  var timer = (Number(new Date()) - timestamp) / 1000;
  // 如果小于5分钟,则返回"刚刚",其他以此类推
  var tips = '';
  switch (true) {
    case timer < 300:
      tips = '刚刚';
      break;
    case timer >= 300 && timer < 3600:
      tips = parseInt(timer / 60) + '分钟前';
      break;
    case timer >= 3600 && timer < 86400:
      tips = parseInt(timer / 3600) + '小时前';
      break;
    case timer >= 86400 && timer < 2592000:
      tips = parseInt(timer / 86400) + '天前';
      break;
    default:
      // 如果format为false，则无论什么时间戳，都显示xx之前
      if (format === false) {
        if (timer >= 2592000 && timer < 365 * 86400) {
          tips = parseInt(timer / (86400 * 30)) + '个月前';
        } else {
          tips = parseInt(timer / (86400 * 365)) + '年前';
        }
      } else {
        tips = (0, _timeFormat.default)(timestamp, format);
      }
  }
  return tips;
}
var _default = timeFrom;
exports.default = _default;

/***/ }),

/***/ 46:
/*!**********************************************************************************!*\
  !*** F:/to_LHR/code/vue2/uni_modules/vk-uview-ui/libs/function/colorGradient.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * 求两个颜色之间的渐变值
 * @param {string} startColor 开始的颜色
 * @param {string} endColor 结束的颜色
 * @param {number} step 颜色等分的份额
 * */
function colorGradient() {
  var startColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'rgb(0, 0, 0)';
  var endColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rgb(255, 255, 255)';
  var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
  var startRGB = hexToRgb(startColor, false); //转换为rgb数组模式
  var startR = startRGB[0];
  var startG = startRGB[1];
  var startB = startRGB[2];
  var endRGB = hexToRgb(endColor, false);
  var endR = endRGB[0];
  var endG = endRGB[1];
  var endB = endRGB[2];
  var sR = (endR - startR) / step; //总差值
  var sG = (endG - startG) / step;
  var sB = (endB - startB) / step;
  var colorArr = [];
  for (var i = 0; i < step; i++) {
    //计算每一步的hex值 
    var hex = rgbToHex('rgb(' + Math.round(sR * i + startR) + ',' + Math.round(sG * i + startG) + ',' + Math.round(sB * i + startB) + ')');
    colorArr.push(hex);
  }
  return colorArr;
}

// 将hex表示方式转换为rgb表示方式(这里返回rgb数组模式)
function hexToRgb(sColor) {
  var str = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  sColor = sColor.toLowerCase();
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = "#";
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    //处理六位的颜色值
    var sColorChange = [];
    for (var _i = 1; _i < 7; _i += 2) {
      sColorChange.push(parseInt("0x" + sColor.slice(_i, _i + 2)));
    }
    if (!str) {
      return sColorChange;
    } else {
      return "rgb(".concat(sColorChange[0], ",").concat(sColorChange[1], ",").concat(sColorChange[2], ")");
    }
  } else if (/^(rgb|RGB)/.test(sColor)) {
    var arr = sColor.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
    return arr.map(function (val) {
      return Number(val);
    });
  } else {
    return sColor;
  }
}
;

// 将rgb表示方式转换为hex表示方式
function rgbToHex(rgb) {
  var _this = rgb;
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  if (/^(rgb|RGB)/.test(_this)) {
    var aColor = _this.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
    var strHex = "#";
    for (var i = 0; i < aColor.length; i++) {
      var hex = Number(aColor[i]).toString(16);
      hex = String(hex).length == 1 ? 0 + '' + hex : hex; // 保证每个rgb的值为2位
      if (hex === "0") {
        hex += hex;
      }
      strHex += hex;
    }
    if (strHex.length !== 7) {
      strHex = _this;
    }
    return strHex;
  } else if (reg.test(_this)) {
    var aNum = _this.replace(/#/, "").split("");
    if (aNum.length === 6) {
      return _this;
    } else if (aNum.length === 3) {
      var numHex = "#";
      for (var _i2 = 0; _i2 < aNum.length; _i2 += 1) {
        numHex += aNum[_i2] + aNum[_i2];
      }
      return numHex;
    }
  } else {
    return _this;
  }
}

/**
* JS颜色十六进制转换为rgb或rgba,返回的格式为 rgba（255，255，255，0.5）字符串
* sHex为传入的十六进制的色值
* alpha为rgba的透明度
*/
function colorToRgba(color) {
  var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.3;
  color = rgbToHex(color);
  // 十六进制颜色值的正则表达式
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  /* 16进制颜色转为RGB格式 */
  var sColor = color.toLowerCase();
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = '#';
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    // 处理六位的颜色值
    var sColorChange = [];
    for (var _i3 = 1; _i3 < 7; _i3 += 2) {
      sColorChange.push(parseInt('0x' + sColor.slice(_i3, _i3 + 2)));
    }
    // return sColorChange.join(',')
    return 'rgba(' + sColorChange.join(',') + ',' + alpha + ')';
  } else {
    return sColor;
  }
}
var _default = {
  colorGradient: colorGradient,
  hexToRgb: hexToRgb,
  rgbToHex: rgbToHex,
  colorToRgba: colorToRgba
};
exports.default = _default;

/***/ }),

/***/ 47:
/*!*************************************************************************!*\
  !*** F:/to_LHR/code/vue2/uni_modules/vk-uview-ui/libs/function/guid.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * 本算法来源于简书开源代码，详见：https://www.jianshu.com/p/fdbf293d0a85
 * 全局唯一标识符（uuid，Globally Unique Identifier）,也称作 uuid(Universally Unique IDentifier) 
 * 一般用于多个组件之间,给它一个唯一的标识符,或者v-for循环的时候,如果使用数组的index可能会导致更新列表出现问题
 * 最可能的情况是左滑删除item或者对某条信息流"不喜欢"并去掉它的时候,会导致组件内的数据可能出现错乱
 * v-for的时候,推荐使用后端返回的id而不是循环的index
 * @param {Number} len uuid的长度
 * @param {Boolean} firstU 将返回的首字母置为"u"
 * @param {Nubmer} radix 生成uuid的基数(意味着返回的字符串都是这个基数),2-二进制,8-八进制,10-十进制,16-十六进制
 */
function guid() {
  var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;
  var firstU = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var radix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  var uuid = [];
  radix = radix || chars.length;
  if (len) {
    // 如果指定uuid长度,只是取随机的字符,0|x为位运算,能去掉x的小数位,返回整数位
    for (var i = 0; i < len; i++) {
      uuid[i] = chars[0 | Math.random() * radix];
    }
  } else {
    var r;
    // rfc4122标准要求返回的uuid中,某些位为固定的字符
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
    uuid[14] = '4';
    for (var _i = 0; _i < 36; _i++) {
      if (!uuid[_i]) {
        r = 0 | Math.random() * 16;
        uuid[_i] = chars[_i == 19 ? r & 0x3 | 0x8 : r];
      }
    }
  }
  // 移除第一个字符,并用u替代,因为第一个字符为数值时,该guuid不能用作id或者class
  if (firstU) {
    uuid.shift();
    return 'u' + uuid.join('');
  } else {
    return uuid.join('');
  }
}
var _default = guid;
exports.default = _default;

/***/ }),

/***/ 48:
/*!**************************************************************************!*\
  !*** F:/to_LHR/code/vue2/uni_modules/vk-uview-ui/libs/function/color.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// 为了让用户能够自定义主题，会逐步弃用此文件，各颜色通过css提供
// 为了给某些特殊场景使用和向后兼容，无需删除此文件(2020-06-20)
var color = {
  primary: "#2979ff",
  primaryDark: "#2b85e4",
  primaryDisabled: "#a0cfff",
  primaryLight: "#ecf5ff",
  bgColor: "#f3f4f6",
  info: "#909399",
  infoDark: "#82848a",
  infoDisabled: "#c8c9cc",
  infoLight: "#f4f4f5",
  warning: "#ff9900",
  warningDark: "#f29100",
  warningDisabled: "#fcbd71",
  warningLight: "#fdf6ec",
  error: "#fa3534",
  errorDark: "#dd6161",
  errorDisabled: "#fab6b6",
  errorLight: "#fef0f0",
  success: "#19be6b",
  successDark: "#18b566",
  successDisabled: "#71d5a1",
  successLight: "#dbf1e1",
  mainColor: "#303133",
  contentColor: "#606266",
  tipsColor: "#909399",
  lightColor: "#c0c4cc",
  borderColor: "#e4e7ed"
};
var _default = color;
exports.default = _default;

/***/ }),

/***/ 49:
/*!******************************************************************************!*\
  !*** F:/to_LHR/code/vue2/uni_modules/vk-uview-ui/libs/function/type2icon.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * 根据主题type值,获取对应的图标
 * @param String type 主题名称,primary|info|error|warning|success
 * @param String fill 是否使用fill填充实体的图标  
 */
function type2icon() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'success';
  var fill = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  // 如果非预置值,默认为success
  if (['primary', 'info', 'error', 'warning', 'success'].indexOf(type) == -1) type = 'success';
  var iconName = '';
  // 目前(2019-12-12),info和primary使用同一个图标
  switch (type) {
    case 'primary':
      iconName = 'info-circle';
      break;
    case 'info':
      iconName = 'info-circle';
      break;
    case 'error':
      iconName = 'close-circle';
      break;
    case 'warning':
      iconName = 'error-circle';
      break;
    case 'success':
      iconName = 'checkmark-circle';
      break;
    default:
      iconName = 'checkmark-circle';
  }
  // 是否是实体类型,加上-fill,在icon组件库中,实体的类名是后面加-fill的
  if (fill) iconName += '-fill';
  return iconName;
}
var _default = type2icon;
exports.default = _default;

/***/ }),

/***/ 5:
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ 6);
var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ 7);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 8);
var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ 10);
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 50:
/*!********************************************************************************!*\
  !*** F:/to_LHR/code/vue2/uni_modules/vk-uview-ui/libs/function/randomArray.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// 打乱数组
function randomArray() {
  var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  // 原理是sort排序,Math.random()产生0<= x < 1之间的数,会导致x-0.05大于或者小于0
  return array.sort(function () {
    return Math.random() - 0.5;
  });
}
var _default = randomArray;
exports.default = _default;

/***/ }),

/***/ 51:
/*!****************************************************************************!*\
  !*** F:/to_LHR/code/vue2/uni_modules/vk-uview-ui/libs/function/addUnit.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addUnit;
var _test = _interopRequireDefault(__webpack_require__(/*! ./test.js */ 38));
// 添加单位，如果有rpx，%，px等单位结尾或者值为auto，直接返回，否则加上rpx单位结尾
function addUnit() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'auto';
  var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rpx';
  value = String(value);
  // 用uView内置验证规则中的number判断是否为数值
  return _test.default.number(value) ? "".concat(value).concat(unit) : value;
}

/***/ }),

/***/ 52:
/*!***************************************************************************!*\
  !*** F:/to_LHR/code/vue2/uni_modules/vk-uview-ui/libs/function/random.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function random(min, max) {
  if (min >= 0 && max > 0 && max >= min) {
    var gab = max - min + 1;
    return Math.floor(Math.random() * gab + min);
  } else {
    return 0;
  }
}
var _default = random;
exports.default = _default;

/***/ }),

/***/ 53:
/*!*************************************************************************!*\
  !*** F:/to_LHR/code/vue2/uni_modules/vk-uview-ui/libs/function/trim.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function trim(str) {
  var pos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'both';
  if (pos == 'both') {
    return str.replace(/^\s+|\s+$/g, "");
  } else if (pos == "left") {
    return str.replace(/^\s*/, '');
  } else if (pos == 'right') {
    return str.replace(/(\s*$)/g, "");
  } else if (pos == 'all') {
    return str.replace(/\s+/g, "");
  } else {
    return str;
  }
}
var _default = trim;
exports.default = _default;

/***/ }),

/***/ 54:
/*!**************************************************************************!*\
  !*** F:/to_LHR/code/vue2/uni_modules/vk-uview-ui/libs/function/toast.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function toast(title) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1500;
  uni.showToast({
    title: title,
    icon: 'none',
    duration: duration
  });
}
var _default = toast;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 55:
/*!******************************************************************************!*\
  !*** F:/to_LHR/code/vue2/uni_modules/vk-uview-ui/libs/function/getParent.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getParent;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
// 获取父组件的参数，因为支付宝小程序不支持provide/inject的写法
// this.$parent在非H5中，可以准确获取到父组件，但是在H5中，需要多次this.$parent.$parent.xxx
function getParent(name, keys) {
  var parent = this.$parent;
  // 通过while历遍，这里主要是为了H5需要多层解析的问题
  while (parent) {
    // 父组件
    if (parent.$options.name !== name) {
      // 如果组件的name不相等，继续上一级寻找
      parent = parent.$parent;
    } else {
      var _ret = function () {
        var data = {};
        // 判断keys是否数组，如果传过来的是一个数组，那么直接使用数组元素值当做键值去父组件寻找
        if (Array.isArray(keys)) {
          keys.map(function (val) {
            data[val] = parent[val] ? parent[val] : '';
          });
        } else {
          // 历遍传过来的对象参数
          for (var i in keys) {
            // 如果子组件有此值则用，无此值则用父组件的值
            // 判断是否空数组，如果是，则用父组件的值，否则用子组件的值
            if (Array.isArray(keys[i])) {
              if (keys[i].length) {
                data[i] = keys[i];
              } else {
                data[i] = parent[i];
              }
            } else if (keys[i].constructor === Object) {
              // 判断是否对象，如果是对象，且有属性，那么使用子组件的值，否则使用父组件的值
              if (Object.keys(keys[i]).length) {
                data[i] = keys[i];
              } else {
                data[i] = parent[i];
              }
            } else {
              // 只要子组件有传值，即使是false值，也是“传值”了，也需要覆盖父组件的同名参数
              data[i] = keys[i] || keys[i] === false ? keys[i] : parent[i];
            }
          }
        }
        return {
          v: data
        };
      }();
      if ((0, _typeof2.default)(_ret) === "object") return _ret.v;
    }
  }
  return {};
}

/***/ }),

/***/ 56:
/*!****************************************************************************!*\
  !*** F:/to_LHR/code/vue2/uni_modules/vk-uview-ui/libs/function/$parent.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = $parent;
// 获取父组件的参数，因为支付宝小程序不支持provide/inject的写法
// this.$parent在非H5中，可以准确获取到父组件，但是在H5中，需要多次this.$parent.$parent.xxx
// 这里默认值等于undefined有它的含义，因为最顶层元素(组件)的$parent就是undefined，意味着不传name
// 值(默认为undefined)，就是查找最顶层的$parent
function $parent() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
  var parent = this.$parent;
  // 通过while历遍，这里主要是为了H5需要多层解析的问题
  while (parent) {
    // 父组件
    if (parent.$options && parent.$options.name !== name) {
      // 如果组件的name不相等，继续上一级寻找
      parent = parent.$parent;
    } else {
      return parent;
    }
  }
  return false;
}

/***/ }),

/***/ 57:
/*!************************************************************************!*\
  !*** F:/to_LHR/code/vue2/uni_modules/vk-uview-ui/libs/function/sys.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.os = os;
exports.sys = sys;
function os() {
  return uni.getSystemInfoSync().platform;
}
;
function sys() {
  return uni.getSystemInfoSync();
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 58:
/*!*****************************************************************************!*\
  !*** F:/to_LHR/code/vue2/uni_modules/vk-uview-ui/libs/function/debounce.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var timeout = null;

/**
 * 防抖原理：一定时间内，只有最后一次操作，再过wait毫秒后才执行函数
 * 
 * @param {Function} func 要执行的回调函数 
 * @param {Number} wait 延时的时间
 * @param {Boolean} immediate 是否立即执行 
 * @return null
 */
function debounce(func) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // 清除定时器
  if (timeout !== null) clearTimeout(timeout);
  // 立即执行，此类情况一般用不到
  if (immediate) {
    var callNow = !timeout;
    timeout = setTimeout(function () {
      timeout = null;
    }, wait);
    if (callNow) typeof func === 'function' && func();
  } else {
    // 设置定时器，当最后一次操作后，timeout不会再被清除，所以在延时wait毫秒后执行func回调方法
    timeout = setTimeout(function () {
      typeof func === 'function' && func();
    }, wait);
  }
}
var _default = debounce;
exports.default = _default;

/***/ }),

/***/ 59:
/*!*****************************************************************************!*\
  !*** F:/to_LHR/code/vue2/uni_modules/vk-uview-ui/libs/function/throttle.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var timeoutArr = [];
var flagArr = [];
/**
 * 节流函数
 * 节流原理：在一定时间内，只能触发一次
 * @param {Function} fn 要执行的回调函数 
 * @param {Number} time 延时的时间
 * @param {Boolean} isImmediate 是否立即执行
 * @param {String} timeoutName 定时器ID
 * @return null
 */
function throttle(fn) {
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var isImmediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var timeoutName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "default";
  if (!timeoutArr[timeoutName]) timeoutArr[timeoutName] = null;
  if (isImmediate) {
    if (!flagArr[timeoutName]) {
      flagArr[timeoutName] = true;
      // 如果是立即执行，则在time毫秒内开始时执行
      if (typeof fn === 'function') fn();
      timeoutArr[timeoutName] = setTimeout(function () {
        flagArr[timeoutName] = false;
      }, time);
    }
  } else {
    if (!flagArr[timeoutName]) {
      flagArr[timeoutName] = true;
      // 如果是非立即执行，则在time毫秒内的结束处执行
      timeoutArr[timeoutName] = setTimeout(function () {
        flagArr[timeoutName] = false;
        if (typeof fn === 'function') fn();
      }, time);
    }
  }
}
;
var _default = throttle;
exports.default = _default;

/***/ }),

/***/ 6:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 60:
/*!*************************************************************************!*\
  !*** F:/to_LHR/code/vue2/uni_modules/vk-uview-ui/libs/config/config.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// 第一版 1.10.1 版本发布于2021-11-18
var version = '1.10.1';
var _default = {
  v: version,
  version: version,
  // 主题名称
  type: ['primary', 'success', 'info', 'error', 'warning']
};
exports.default = _default;

/***/ }),

/***/ 61:
/*!*************************************************************************!*\
  !*** F:/to_LHR/code/vue2/uni_modules/vk-uview-ui/libs/config/zIndex.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// uniapp在H5中各API的z-index值如下：
/**
 * actionsheet: 999
 * modal: 999
 * navigate: 998
 * tabbar: 998
 * toast: 999
 */
var _default = {
  toast: 10090,
  noNetwork: 10080,
  // popup包含popup，actionsheet，keyboard，picker的值
  popup: 10075,
  mask: 10070,
  navbar: 980,
  topTips: 975,
  sticky: 970,
  indexListSticky: 965
};
exports.default = _default;

/***/ }),

/***/ 62:
/*!*******************************************!*\
  !*** F:/to_LHR/code/vue2/utils/config.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var miniappName = "林风社交论坛"; //分享时的标题
var shareH5Url = "https://www.linfeng.tech/#/"; //H5分享路径

//本地环境配置
var baseUrl = "localhost:9090";
var domain = 'http://' + baseUrl + "/";

//线上环境配置
// const baseUrl = "";
// const domain = 'https://' + baseUrl + "/app/";
var _default = {
  baseUrl: baseUrl,
  domain: domain,
  miniappName: miniappName,
  shareH5Url: shareH5Url
};
exports.default = _default;

/***/ }),

/***/ 63:
/*!********************************************!*\
  !*** F:/to_LHR/code/vue2/utils/request.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _config = _interopRequireDefault(__webpack_require__(/*! ./config.js */ 62));
var _default = {
  request: function request() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return new Promise(function (resolve, reject) {
      var url = options.url;
      if (url.indexOf("http://") == -1 && url.indexOf("https://") == -1) {
        options.url = _config.default.domain + url;
      }
      options.header.token = uni.getStorageSync("token");
      options.complete = function (response) {
        if (response.statusCode == 200 || response.statusCode == 0) {
          if (response.data.code == 401 || response.data.code == 420) {
            uni.navigateTo({
              url: "/pages/login/weixin"
            });
          }
          if (response.data.code == 500) {
            uni.showToast({
              title: response.data.msg,
              icon: "none",
              duration: 2000
            });
          }
          resolve(response.data);
        } else {
          uni.showToast({
            title: '请求异常！',
            icon: "none"
          });
        }
      };
      uni.request(options);
    });
  },
  post: function post(url) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var options = {
      url: url,
      data: data,
      header: header,
      method: "POST"
    };
    return this.request(options);
  },
  put: function put(url) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var options = {
      url: url,
      data: data,
      header: header,
      method: "PUT"
    };
    return this.request(options);
  },
  get: function get(url) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var options = {
      url: url,
      data: data,
      header: header,
      method: "GET"
    };
    return this.request(options);
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 64:
/*!******************************************!*\
  !*** F:/to_LHR/code/vue2/store/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 65));
_vue.default.use(_vuex.default);
var store = new _vuex.default.Store({
  state: {
    hasLogin: uni.getStorageSync("hasLoginin"),
    sessionKey: uni.getStorageSync("sessionKey"),
    messegeNum: []
  },
  mutations: {
    login: function login(state, userInfo) {
      state.hasLogin = uni.getStorageSync("hasLogin");
      state.sessionKey = uni.getStorageSync("sessionKey");
    },
    logout: function logout(state) {
      state.hasLogin = false;
      state.sessionKey = null;
    }
  }
});
var _default = store;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 65:
/*!**************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vuex3/dist/vuex.common.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */


function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
    ? global
    : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
function find (list, f) {
  return list.filter(f)[0]
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
function deepCopy (obj, cache) {
  if ( cache === void 0 ) cache = [];

  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  var hit = find(cache, function (c) { return c.original === obj; });
  if (hit) {
    return hit.copy
  }

  var copy = Array.isArray(obj) ? [] : {};
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy: copy
  });

  Object.keys(obj).forEach(function (key) {
    copy[key] = deepCopy(obj[key], cache);
  });

  return copy
}

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.hasChild = function hasChild (key) {
  return key in this._children
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if ((true)) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  var child = parent.getChild(key);

  if (!child) {
    if ((true)) {
      console.warn(
        "[vuex] trying to unregister module '" + key + "', which is " +
        "not registered"
      );
    }
    return
  }

  if (!child.runtime) {
    return
  }

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  if (parent) {
    return parent.hasChild(key)
  }

  return false
};

function update (path, targetModule, newModule) {
  if ((true)) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if ((true)) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if ((true)) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if ((true)) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });

  this._subscribers
    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    ( true) &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if ((true)) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.after; })
          .forEach(function (sub) { return sub.after(action, this$1.state); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.error; })
          .forEach(function (sub) { return sub.error(action, this$1.state, error); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  })
};

Store.prototype.subscribe = function subscribe (fn, options) {
  return genericSubscribe(fn, this._subscribers, options)
};

Store.prototype.subscribeAction = function subscribeAction (fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if ((true)) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule (path) {
  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path)
};

Store.prototype[[104,111,116,85,112,100,97,116,101].map(function (item) {return String.fromCharCode(item)}).join('')] = function (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend
      ? subs.unshift(fn)
      : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && ("development" !== 'production')) {
      console.error(("[vuex] duplicate namespace " + namespace + " for the namespaced module " + (path.join('/'))));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if ((true)) {
        if (moduleName in parentState) {
          console.warn(
            ("[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + (path.join('.')) + "\"")
          );
        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) { return }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () { return store.getters[type]; },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace]
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if ((true)) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if ((true)) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.reduce(function (state, key) { return state[key]; }, state)
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if ((true)) {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if ((true)) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if (( true) && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept another params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (( true) && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (( true) && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (( true) && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (( true) && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap (map) {
  return Array.isArray(map) || isObject(map)
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (( true) && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

// Credits: borrowed code from fcomb/redux-logger

function createLogger (ref) {
  if ( ref === void 0 ) ref = {};
  var collapsed = ref.collapsed; if ( collapsed === void 0 ) collapsed = true;
  var filter = ref.filter; if ( filter === void 0 ) filter = function (mutation, stateBefore, stateAfter) { return true; };
  var transformer = ref.transformer; if ( transformer === void 0 ) transformer = function (state) { return state; };
  var mutationTransformer = ref.mutationTransformer; if ( mutationTransformer === void 0 ) mutationTransformer = function (mut) { return mut; };
  var actionFilter = ref.actionFilter; if ( actionFilter === void 0 ) actionFilter = function (action, state) { return true; };
  var actionTransformer = ref.actionTransformer; if ( actionTransformer === void 0 ) actionTransformer = function (act) { return act; };
  var logMutations = ref.logMutations; if ( logMutations === void 0 ) logMutations = true;
  var logActions = ref.logActions; if ( logActions === void 0 ) logActions = true;
  var logger = ref.logger; if ( logger === void 0 ) logger = console;

  return function (store) {
    var prevState = deepCopy(store.state);

    if (typeof logger === 'undefined') {
      return
    }

    if (logMutations) {
      store.subscribe(function (mutation, state) {
        var nextState = deepCopy(state);

        if (filter(mutation, prevState, nextState)) {
          var formattedTime = getFormattedTime();
          var formattedMutation = mutationTransformer(mutation);
          var message = "mutation " + (mutation.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c prev state', 'color: #9E9E9E; font-weight: bold', transformer(prevState));
          logger.log('%c mutation', 'color: #03A9F4; font-weight: bold', formattedMutation);
          logger.log('%c next state', 'color: #4CAF50; font-weight: bold', transformer(nextState));
          endMessage(logger);
        }

        prevState = nextState;
      });
    }

    if (logActions) {
      store.subscribeAction(function (action, state) {
        if (actionFilter(action, state)) {
          var formattedTime = getFormattedTime();
          var formattedAction = actionTransformer(action);
          var message = "action " + (action.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c action', 'color: #03A9F4; font-weight: bold', formattedAction);
          endMessage(logger);
        }
      });
    }
  }
}

function startMessage (logger, message, collapsed) {
  var startMessage = collapsed
    ? logger.groupCollapsed
    : logger.group;

  // render
  try {
    startMessage.call(logger, message);
  } catch (e) {
    logger.log(message);
  }
}

function endMessage (logger) {
  try {
    logger.groupEnd();
  } catch (e) {
    logger.log('—— log end ——');
  }
}

function getFormattedTime () {
  var time = new Date();
  return (" @ " + (pad(time.getHours(), 2)) + ":" + (pad(time.getMinutes(), 2)) + ":" + (pad(time.getSeconds(), 2)) + "." + (pad(time.getMilliseconds(), 3)))
}

function repeat (str, times) {
  return (new Array(times + 1)).join(str)
}

function pad (num, maxLength) {
  return repeat('0', maxLength - num.toString().length) + num
}

var index_cjs = {
  Store: Store,
  install: install,
  version: '3.6.2',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers,
  createLogger: createLogger
};

module.exports = index_cjs;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 7:
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) {
        ;
      }
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 8:
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 9);
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 9:
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map