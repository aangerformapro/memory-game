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
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
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
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
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
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
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
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function () {};
      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get");
  return _classApplyDescriptorGet(receiver, descriptor);
}
function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set");
  _classApplyDescriptorSet(receiver, descriptor, value);
  return value;
}
function _classExtractFieldDescriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to " + action + " private field on non-instance");
  }
  return privateMap.get(receiver);
}
function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) {
  _classCheckPrivateStaticAccess(receiver, classConstructor);
  _classCheckPrivateStaticFieldDescriptor(descriptor, "get");
  return _classApplyDescriptorGet(receiver, descriptor);
}
function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) {
  _classCheckPrivateStaticAccess(receiver, classConstructor);
  _classCheckPrivateStaticFieldDescriptor(descriptor, "set");
  _classApplyDescriptorSet(receiver, descriptor, value);
  return value;
}
function _classApplyDescriptorGet(receiver, descriptor) {
  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }
  return descriptor.value;
}
function _classApplyDescriptorSet(receiver, descriptor, value) {
  if (descriptor.set) {
    descriptor.set.call(receiver, value);
  } else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }
    descriptor.value = value;
  }
}
function _classCheckPrivateStaticAccess(receiver, classConstructor) {
  if (receiver !== classConstructor) {
    throw new TypeError("Private static access of wrong provenance");
  }
}
function _classCheckPrivateStaticFieldDescriptor(descriptor, action) {
  if (descriptor === undefined) {
    throw new TypeError("attempted to " + action + " private static field before its declaration");
  }
}
function _classPrivateMethodGet(receiver, privateSet, fn) {
  if (!privateSet.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }
  return fn;
}
function _checkPrivateRedeclaration(obj, privateCollection) {
  if (privateCollection.has(obj)) {
    throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
}
function _classPrivateFieldInitSpec(obj, privateMap, value) {
  _checkPrivateRedeclaration(obj, privateMap);
  privateMap.set(obj, value);
}
function _classPrivateMethodInitSpec(obj, privateSet) {
  _checkPrivateRedeclaration(obj, privateSet);
  privateSet.add(obj);
}

/* global unsafeWindow, globalThis */

var global = typeof unsafeWindow !== 'undefined' ? unsafeWindow : typeof globalThis !== 'undefined' ? globalThis : window;
var document$1 = global.document,
  JSON$2 = global.JSON;
var RE_NUMERIC = /^-?(?:[\d]+\.)?\d+$/;
var isPlainObject = function isPlainObject(param) {
    return param instanceof Object && Object.getPrototypeOf(param) === Object.prototype;
  },
  isUndef = function isUndef(param) {
    return typeof param === 'undefined';
  },
  isString = function isString(param) {
    return typeof param === 'string';
  },
  isNumber = function isNumber(param) {
    return typeof param === 'number';
  },
  isInt = function isInt(param) {
    return Number.isInteger(param);
  },
  isFloat = function isFloat(param) {
    return isNumber(param) && parseFloat(param) === param;
  },
  isNumeric = function isNumeric(param) {
    return isInt(param) || isFloat(param) || RE_NUMERIC.test(param);
  },
  isArray = function isArray(param) {
    return Array.isArray(param);
  },
  isNull = function isNull(param) {
    return param === null;
  },
  isCallable = function isCallable(param) {
    return typeof param === 'function';
  },
  isFunction = isCallable,
  capitalize = function capitalize(param) {
    return isString(param) && param.split(/\s+/).map(function (param) {
      return param.charAt(0).toUpperCase() + param.slice(1).toLowerCase();
    }).join(' ');
  };
function isEmpty(param) {
  if (isUndef(param) || param === null) {
    return true;
  }
  if (isString(param) || isArray(param)) {
    return param.length === 0;
  }
  if (isNumber(param)) {
    return param === 0;
  }
  if (isPlainObject(param)) {
    return Object.keys(param).length === 0;
  }
  return false;
}
function runAsync(callback) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  if (isFunction(callback)) {
    setTimeout(function () {
      callback.apply(void 0, args);
    }, 0);
  }
}
function uuidv4() {
  var uuid = "",
    i,
    random;
  for (i = 0; i < 32; i++) {
    random = Math.random() * 16 | 0;
    if (i == 8 || i == 12 || i == 16 || i == 20) {
      uuid += "-";
    }
    uuid += (i == 12 ? 4 : i == 16 ? random & 3 | 8 : random).toString(16);
  }
  return uuid;
}
function isHTML(param) {
  return isString(param) && param.startsWith('<') && param.endsWith('>');
}
function decode$1(value) {
  if (isUndef(value) || isNull(value) || value === '') {
    return null;
  }
  if (value.startsWith('{') && value.endsWith('}') || value.startsWith('[') && value.endsWith(']') || isNumeric(value) || value === 'true' || value === 'false') {
    return JSON$2.parse(value);
  }
  return value;
}
function encode$1(value) {
  if (!isString(value)) {
    return JSON$2.stringify(value);
  }
  return value;
}
function parseDataElement(data) {
  var _data;
  var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var result = [];
  (_data = data) !== null && _data !== void 0 ? _data : data = {};
  var _loop = function _loop(key) {
    var value = data[key];
    if (isPlainObject(value)) {
      result = result.concat(parseDataElement(value, false).map(function (item) {
        return [key + '-' + item[0], item[1]];
      }));
      return "continue";
    }
    result.push([key, encode$1(value)]);
  };
  for (var key in data) {
    var _ret = _loop(key);
    if (_ret === "continue") continue;
  }
  return result.map(function (item) {
    return root ? ['data-' + item[0], item[1]] : item;
  });
}

/**
 * Creates an Element
 *
 * @param {string} tagName
 * @param {Object} [params]
 * @param {string|HTMLElement|string[]|HTMLElement[]} [html]
 * @returns {HTMLElement}
 */
function createElement(tag) {
  var _params, _html;
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var html = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  if (typeof tag !== 'string') {
    throw new TypeError('tag must be a String');
  }
  if (typeof params === 'string' || params instanceof Element || isArray(params)) {
    html = params;
    params = {};
  }
  (_params = params) !== null && _params !== void 0 ? _params : params = {};
  (_html = html) !== null && _html !== void 0 ? _html : html = '';
  var elem = isHTML(tag) ? html2element(tag) : document$1.createElement(tag);
  for (var attr in params) {
    var value = params[attr];
    if (attr === 'html') {
      html = value;
      continue;
    }
    if (attr === 'data') {
      if (isPlainObject(value)) {
        parseDataElement(value).forEach(function (item) {
          var _item = _slicedToArray(item, 2),
            key = _item[0],
            value = _item[1];
          elem.setAttribute(key, value);
        });
      }
      continue;
    }
    if (typeof value === 'string') {
      elem.setAttribute(attr, value);
    } else {
      elem[attr] = value;
    }
  }
  if (html instanceof Element || isString(html)) {
    html = [html];
  }
  if (Array.isArray(html)) {
    html.forEach(function (item) {
      if (item instanceof Element) {
        elem.appendChild(item);
      } else if (typeof item === 'string') {
        elem.innerHTML += item;
      }
    });
  }
  return elem;
}

/**
 * Generate a unique ID
 * @returns {String}
 */
function uniqid() {
  var _uniqid$values;
  var value;
  (_uniqid$values = uniqid.values) !== null && _uniqid$values !== void 0 ? _uniqid$values : uniqid.values = [];
  while (!value || uniqid.values.includes(value)) {
    value = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }
  uniqid.values.push(value);
  return value;
}

/**
 * Creates an HTMLElement from html code
 * @param {string} html
 * @returns {HTMLElement|Array|undefined}
 */
function html2element(html) {
  if (isString(html) && html.length > 0) {
    var template = createElement('template', html),
      content = template.content;
    if (content.childNodes.length === 0) {
      return;
    } else if (content.childNodes.length > 1) {
      return _toConsumableArray(content.childNodes);
    }
    return content.childNodes[0];
  }
}

var _listeners = /*#__PURE__*/new WeakMap();
var _useasync = /*#__PURE__*/new WeakMap();
var EventManager = /*#__PURE__*/function () {
  function EventManager() {
    var useasync = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    _classCallCheck(this, EventManager);
    _classPrivateFieldInitSpec(this, _listeners, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _useasync, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldSet(this, _listeners, []);
    _classPrivateFieldSet(this, _useasync, useasync);
  }
  _createClass(EventManager, [{
    key: "getListenersForEvent",
    value: function getListenersForEvent(type) {
      if (!isString(type) || type.includes(' ')) {
        throw new TypeError('Invalid event type, not a String or contains spaces.');
      }
      return _classPrivateFieldGet(this, _listeners).filter(function (item) {
        return item.type === type;
      }).map(function (item) {
        return item.listener;
      });
    }
  }, {
    key: "on",
    value: function on(type, listener) {
      var _this = this;
      var once = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      if (!isString(type)) {
        throw new TypeError('Invalid event type, not a String.');
      }
      if (!isFunction(listener)) {
        throw new TypeError('Invalid listener, not a function');
      }
      type.split(/\s+/).forEach(function (type) {
        _classPrivateFieldGet(_this, _listeners).push({
          type: type,
          listener: listener,
          once: once === true
        });
      });
      return this;
    }
  }, {
    key: "one",
    value: function one(type, listener) {
      return this.on(type, listener, true);
    }
  }, {
    key: "off",
    value: function off(type, listener) {
      var _this2 = this;
      if (!isString(type)) {
        throw new TypeError('Invalid event type, not a String.');
      }
      type.split(/\s+/).forEach(function (type) {
        _classPrivateFieldSet(_this2, _listeners, _classPrivateFieldGet(_this2, _listeners).filter(function (item) {
          if (type === item.type) {
            if (listener === item.listener || !listener) {
              return false;
            }
          }
          return true;
        }));
      });
      return this;
    }
  }, {
    key: "trigger",
    value: function trigger(type) {
      var _this3 = this;
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var event;
      if (type instanceof Event) {
        var _event, _event$data;
        event = type;
        (_event$data = (_event = event).data) !== null && _event$data !== void 0 ? _event$data : _event.data = data;
        type = event.type;
      }
      if (!isString(type) && type instanceof Event === false) {
        throw new TypeError('Invalid event type, not a String|Event.');
      }
      var listeners = Array.from(_classPrivateFieldGet(this, _listeners)),
        types = [];
      type.split(/\s+/).forEach(function (type) {
        if (types.includes(type)) {
          return;
        }
        types.push(type);
        for (var _i = 0, _listeners2 = listeners; _i < _listeners2.length; _i++) {
          var item = _listeners2[_i];
          if (item.type === type) {
            if (_classPrivateFieldGet(_this3, _useasync)) {
              var _event2;
              runAsync(item.listener, (_event2 = event) !== null && _event2 !== void 0 ? _event2 : {
                type: type,
                data: data
              });
            } else {
              var _event3;
              item.listener((_event3 = event) !== null && _event3 !== void 0 ? _event3 : {
                type: type,
                data: data
              });
            }
            if (item.once) {
              _this3.off(type, item.listener);
            }
          }
        }
      });
      return this;
    }
  }, {
    key: "mixin",
    value: function mixin(binding) {
      var _this4 = this;
      if (binding instanceof Object) {
        ['on', 'off', 'one', 'trigger'].forEach(function (method) {
          Object.defineProperty(binding, method, {
            enumerable: false,
            configurable: true,
            value: function value() {
              _this4[method].apply(_this4, arguments);
              return binding;
            }
          });
        });
      }
      return this;
    }
  }], [{
    key: "mixin",
    value: function mixin(binding) {
      var useasync = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      return new EventManager(useasync).mixin(binding);
    }
  }, {
    key: "on",
    value: function on(type, listener) {
      var _classStaticPrivateFi;
      var once = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      (_classStaticPrivateFi = _classStaticPrivateFieldSpecGet(this, EventManager, _events)) !== null && _classStaticPrivateFi !== void 0 ? _classStaticPrivateFi : _classStaticPrivateFieldSpecSet(this, EventManager, _events, new EventManager());
      return _classStaticPrivateFieldSpecGet(this, EventManager, _events).on(type, listener, once);
    }
  }, {
    key: "one",
    value: function one(type, listener) {
      var _classStaticPrivateFi2;
      (_classStaticPrivateFi2 = _classStaticPrivateFieldSpecGet(this, EventManager, _events)) !== null && _classStaticPrivateFi2 !== void 0 ? _classStaticPrivateFi2 : _classStaticPrivateFieldSpecSet(this, EventManager, _events, new EventManager());
      return _classStaticPrivateFieldSpecGet(this, EventManager, _events).one(type, listener);
    }
  }, {
    key: "off",
    value: function off(type, listener) {
      var _classStaticPrivateFi3;
      (_classStaticPrivateFi3 = _classStaticPrivateFieldSpecGet(this, EventManager, _events)) !== null && _classStaticPrivateFi3 !== void 0 ? _classStaticPrivateFi3 : _classStaticPrivateFieldSpecSet(this, EventManager, _events, new EventManager());
      return _classStaticPrivateFieldSpecGet(this, EventManager, _events).off(type, listener);
    }
  }, {
    key: "trigger",
    value: function trigger(type) {
      var _classStaticPrivateFi4;
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      (_classStaticPrivateFi4 = _classStaticPrivateFieldSpecGet(this, EventManager, _events)) !== null && _classStaticPrivateFi4 !== void 0 ? _classStaticPrivateFi4 : _classStaticPrivateFieldSpecSet(this, EventManager, _events, new EventManager());
      return _classStaticPrivateFieldSpecGet(this, EventManager, _events).trigger(type, data);
    }
  }]);
  return EventManager;
}();
var _events = {
  writable: true,
  value: void 0
};

/**
 * The default DataStore interface
 */
var DataStore = /*#__PURE__*/function () {
  function DataStore() {
    _classCallCheck(this, DataStore);
  }
  _createClass(DataStore, [{
    key: "key",
    value: function key(name) {
      return name;
    }
  }, {
    key: "has",
    value: function has(name) {
      return this.get(name, null) !== null;
    }
  }, {
    key: "multiset",
    value: function multiset(values) {
      if (!isPlainObject(values) || isEmpty(values)) {
        throw new TypeError('values is not a non empty Object');
      }
      for (var name in values) {
        var value = values[name];
        this.set(name, value);
      }
    }
  }, {
    key: "remove",
    value: function remove(name) {
      this.set(name, null);
    }
  }, {
    key: "set",
    value: function set(name, value) {
      throw new Error('set() not implemented');
    }
  }, {
    key: "get",
    value: function get(name) {
      throw new Error('get() not implemented');
    }
  }, {
    key: "clear",
    value: function clear() {
      throw new Error('clear() not implemented');
    }
  }]);
  return DataStore;
}();

var _storage = /*#__PURE__*/new WeakMap();
var _prefix = /*#__PURE__*/new WeakMap();
var _generatePrefix = /*#__PURE__*/new WeakSet();
var WebStorage = /*#__PURE__*/function (_DataStore) {
  _inherits(WebStorage, _DataStore);
  var _super = _createSuper(WebStorage);
  function WebStorage(webstorage, prefix) {
    var _webstorage, _prefix2;
    var _this;
    _classCallCheck(this, WebStorage);
    _this = _super.call(this);
    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _generatePrefix);
    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _storage, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _prefix, {
      writable: true,
      value: void 0
    });
    (_webstorage = webstorage) !== null && _webstorage !== void 0 ? _webstorage : webstorage = sessionStorage;
    if (![localStorage, sessionStorage].includes(webstorage)) {
      throw new TypeError('webstorage not an instance of Storage');
    }
    _classPrivateFieldSet(_assertThisInitialized(_this), _storage, webstorage);
    (_prefix2 = prefix) !== null && _prefix2 !== void 0 ? _prefix2 : prefix = _classPrivateMethodGet(_assertThisInitialized(_this), _generatePrefix, _generatePrefix2).call(_assertThisInitialized(_this));
    if (!isEmpty(prefix) && !prefix.endsWith(':')) {
      prefix += ':';
    }
    _classPrivateFieldSet(_assertThisInitialized(_this), _prefix, prefix);
    return _this;
  }
  _createClass(WebStorage, [{
    key: "key",
    value: function key(name) {
      return _classPrivateFieldGet(this, _prefix) + name;
    }
  }, {
    key: "get",
    value: function get(name) {
      var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (!isString(name) || isEmpty(name)) {
        throw new TypeError('name is not a non empty string');
      }
      var value = _classPrivateFieldGet(this, _storage).getItem(this.key(name));
      if (!isString(value)) {
        return defaultValue;
      }
      return JSON$2.parse(value);
    }
  }, {
    key: "set",
    value: function set(name, value) {
      if (!isString(name) || isEmpty(name)) {
        throw new TypeError('name is not a non empty string');
      }
      if (isUndef(value)) {
        throw new TypeError('value is undefined');
      }
      if (value === null) {
        _classPrivateFieldGet(this, _storage).removeItem(this.key(name));
      } else {
        _classPrivateFieldGet(this, _storage).setItem(this.key(name), JSON$2.stringify(value));
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      var prefix = _classPrivateFieldGet(this, _prefix),
        store = _classPrivateFieldGet(this, _storage);
      for (var i = 0; i < store.length; i++) {
        var name = store.key(i);
        if (name.indexOf(prefix) === 0 || isEmpty(prefix)) {
          name = name.substring(prefix.length);
          this.remove(name);
        }
      }
    }
  }]);
  return WebStorage;
}(DataStore);
function _generatePrefix2() {
  var key = 'NGSOFT:WebStorage:UUID',
    result = localStorage.getItem(key);
  if (isNull(result)) {
    localStorage.setItem(key, result = uuidv4());
  }
  return result;
}
new WebStorage(sessionStorage);
  var LocalStore = new WebStorage(localStorage);

var _bootstrap = bootstrap,
  Modal = _bootstrap.Modal,
  defaults$1 = {
    title: document.title,
    body: ''
  };
function innerHTML(elem, html) {
  if (elem instanceof Element) {
    if (isString(html) || html instanceof Element) {
      html = [html];
    }
    if (isArray(html)) {
      elem.innerHTML = '';
      html.forEach(function (item) {
        if (isString(item)) {
          elem.innerHTML += item;
        } else if (item instanceof Element) {
          elem.appendChild(item);
        }
      });
    }
  }
  return elem;
}
var _modal = /*#__PURE__*/new WeakMap();
var _addEventListener = /*#__PURE__*/new WeakSet();
var Dialog = /*#__PURE__*/function () {
  function Dialog(id, params) {
    var _id,
      _this = this;
    _classCallCheck(this, Dialog);
    _classPrivateMethodInitSpec(this, _addEventListener);
    _defineProperty(this, "elements", void 0);
    _defineProperty(this, "element", void 0);
    _classPrivateFieldInitSpec(this, _modal, {
      writable: true,
      value: void 0
    });
    params = Object.assign({}, defaults$1, isPlainObject(params) ? params : {});
    (_id = id) !== null && _id !== void 0 ? _id : id = uniqid();
    var titleText = params.title,
      bodyContents = params.body;
    var title = createElement("<h1 class=\"modal-title fs-5\" id=\"".concat(id, "Label\"/>"), titleText),
      header = createElement('<div class="modal-header"/>', [title, '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>']),
      body = createElement('<div class="modal-body"/>', [bodyContents]),
      cancelBtn = createElement('<button type="button" class="btn btn-secondary" data-bs-dismiss="modal"/>', 'Annuler'),
      saveBtn = createElement('<button type="button" class="btn btn-primary"/>', {
        onclick: function onclick(e) {
          e.preventDefault();
          _this.onHidden(function () {
            e.target.dispatchEvent(new Event('save.bs.modal', {
              bubbles: true
            }));
          });
          modal.hide();
        }
      }, 'Sauvegarder'),
      footer = createElement('<div class="modal-footer"/>', [cancelBtn, saveBtn]),
      content = createElement('<div class="modal-content"/>', [header, body, footer]),
      dialog = createElement('<div class="modal-dialog modal-dialog-centered modal-fullscreen-md-down user-select-none"/>', content),
      root = createElement("<div class=\"modal fade\" id=\"".concat(id, "\" tabindex=\"-1\" aria-labelledby=\"").concat(id, "Label\" aria-hidden=\"true\"/>"), dialog),
      modal = new Modal(root);
    _classPrivateFieldSet(this, _modal, modal);
    this.elements = {
      root: root,
      dialog: dialog,
      content: content,
      header: header,
      title: title,
      body: body,
      footer: footer,
      cancelBtn: cancelBtn,
      saveBtn: saveBtn
    };
    this.element = root;
  }
  _createClass(Dialog, [{
    key: "modal",
    get: function get() {
      return _classPrivateFieldGet(this, _modal);
    }
  }, {
    key: "title",
    get: function get() {
      return this.elements.title.innerHTML;
    },
    set: function set(title) {
      if (isString(title)) {
        this.elements.title.innerHTML = title;
      }
    }
  }, {
    key: "body",
    get: function get() {
      return this.elements.body;
    },
    set: function set(body) {
      innerHTML(this.elements.body, body);
    }
  }, {
    key: "hide",
    value: function hide() {
      var _classPrivateFieldGet2;
      return (_classPrivateFieldGet2 = _classPrivateFieldGet(this, _modal)).hide.apply(_classPrivateFieldGet2, arguments);
    }
  }, {
    key: "show",
    value: function show() {
      var _classPrivateFieldGet3;
      return (_classPrivateFieldGet3 = _classPrivateFieldGet(this, _modal)).show.apply(_classPrivateFieldGet3, arguments);
    }
  }, {
    key: "toggle",
    value: function toggle() {
      var _classPrivateFieldGet4;
      return (_classPrivateFieldGet4 = _classPrivateFieldGet(this, _modal)).toggle.apply(_classPrivateFieldGet4, arguments);
    }
  }, {
    key: "onHide",
    value: function onHide(listener) {
      _classPrivateMethodGet(this, _addEventListener, _addEventListener2).call(this, listener, 'hide.bs.modal');
    }
  }, {
    key: "onHidden",
    value: function onHidden(listener) {
      _classPrivateMethodGet(this, _addEventListener, _addEventListener2).call(this, listener, 'hidden.bs.modal');
    }
  }, {
    key: "onShow",
    value: function onShow(listener) {
      _classPrivateMethodGet(this, _addEventListener, _addEventListener2).call(this, listener, 'show.bs.modal');
    }
  }, {
    key: "onShown",
    value: function onShown(listener) {
      _classPrivateMethodGet(this, _addEventListener, _addEventListener2).call(this, listener, 'shown.bs.modal');
    }
  }, {
    key: "onSave",
    value: function onSave(listener) {
      _classPrivateMethodGet(this, _addEventListener, _addEventListener2).call(this, listener, 'save.bs.modal');
    }
  }]);
  return Dialog;
}();
function _addEventListener2(listener, type) {
  if (isFunction(listener)) {
    this.elements.root.addEventListener(type, listener);
  }
}

var RangeSlider = /*#__PURE__*/function () {
  function RangeSlider(id, params) {
    var _id,
      _this = this;
    _classCallCheck(this, RangeSlider);
    _defineProperty(this, "elements", void 0);
    _defineProperty(this, "element", void 0);
    var defaults = {
      label: '',
      min: 0,
      max: 1,
      step: 1,
      value: 0,
      after: ''
    };
    (_id = id) !== null && _id !== void 0 ? _id : id = uniqid();
    params = Object.assign({}, defaults, isPlainObject(params) ? params : {});
    EventManager.mixin(this);
    var label = createElement("<label for=\"".concat(id, "\" class=\"form-label\" />"), params.label),
      input = createElement('input', {
        type: 'range',
        class: 'form-range',
        min: params.min,
        max: params.max,
        step: params.step,
        value: params.value,
        id: id,
        name: id,
        after: ''
      }),
      inputLabel = createElement('<span class="input-label ms-auto"/>', {
        'data-after': params.after
      }, '' + input.value),
      inputContainer = createElement('<div class="d-flex"/>', [createElement('<div class="col-9"/>', input), inputLabel]),
      root = createElement('<div class="row flex-column mb-3"/>', {
        id: id + 'FormElement'
      }, [label, inputContainer]);
    this.elements = {
      root: root,
      label: label,
      input: input,
      inputLabel: inputLabel
    };
    this.element = root;
    input.addEventListener('change', function () {
      inputLabel.innerHTML = input.value;
      _this.trigger('change', {
        value: _this.value,
        slider: _this
      });
    });
  }
  _createClass(RangeSlider, [{
    key: "id",
    get: function get() {
      return this.elements.input.id;
    }
  }, {
    key: "label",
    get: function get() {
      return this.elements.label.innerHTML;
    },
    set: function set(label) {
      if (isString(label)) {
        this.elements.label.innerHTML = label;
      }
    }
  }, {
    key: "value",
    get: function get() {
      return JSON.parse(this.elements.input.value);
    },
    set: function set(value) {
      if (isInt(value)) {
        value = JSON.stringify(value);
      }
      if (/^\d+$/.test(value)) {
        this.elements.input.value = value;
        this.elements.input.dispatchEvent(new Event('change', {
          bubbles: true
        }));
      }
    }
  }, {
    key: "inputLabel",
    get: function get() {
      return this.elements.inputLabel.innerHTML;
    },
    set: function set(label) {
      this.elements.inputLabel.innerHTML = label;
    }
  }, {
    key: "inputLabelAfter",
    get: function get() {
      return this.elements.inputLabel.dataset.after;
    },
    set: function set(after) {
      this.elements.inputLabel.dataset.after = after;
    }
  }]);
  return RangeSlider;
}();

var RadioElement = /*#__PURE__*/function () {
  function RadioElement(id, name, value) {
    _classCallCheck(this, RadioElement);
    _defineProperty(this, "element", void 0);
    _defineProperty(this, "elements", void 0);
    var label = createElement('label', {
        for: id
      }),
      input = createElement('<input type="radio">', {
        id: id,
        name: name,
        value: encode$1(value)
      }),
      root = createElement('span', {
        class: "color-picker d-inline-block mx-3"
      }, [input, label]);
    this.elements = {
      root: root,
      label: label,
      input: input
    };
    this.element = root;
  }
  _createClass(RadioElement, [{
    key: "value",
    get: function get() {
      return decode$1(this.elements.input.value);
    }
  }, {
    key: "name",
    get: function get() {
      return this.elements.input.getAttribute('name');
    }
  }, {
    key: "id",
    get: function get() {
      return this.elements.input.getAttribute('id');
    }
  }, {
    key: "checked",
    get: function get() {
      return this.elements.input.checked === true;
    },
    set: function set(checked) {
      this.elements.input.checked = checked === true;
    }
  }]);
  return RadioElement;
}();
var ThemeSelector = /*#__PURE__*/function () {
  function ThemeSelector(themes, value) {
    _classCallCheck(this, ThemeSelector);
    _defineProperty(this, "elements", void 0);
    _defineProperty(this, "element", void 0);
    if (!isArray(themes)) {
      throw new TypeError('themes must be an Array');
    }
    themes = themes.map(function (value) {
      return new RadioElement('theme' + value, 'theme', value);
    });
    var root = createElement('div', {
      class: 'theme-selector',
      id: 'themeFormElement'
    }, [createElement('<div class="form-label"/>', 'Theme'), createElement('<div class="d-flex">', themes.map(function (t) {
      return t.element;
    }))]);
    this.elements = themes;
    this.element = root;
    themes.forEach(function (theme) {
      if (theme.value === value) {
        theme.checked = true;
      }
    });
  }
  _createClass(ThemeSelector, [{
    key: "value",
    get: function get() {
      var _iterator = _createForOfIteratorHelper(this.elements),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var theme = _step.value;
          if (theme.checked) {
            return theme.value;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return null;
    }
  }]);
  return ThemeSelector;
}();

var defaults = {
    difficulty: 4,
    timeout: 0,
    lives: 0,
    matched: 1
  };
var Settings = /*#__PURE__*/function () {
  function Settings() {
    _classCallCheck(this, Settings);
  }
  _createClass(Settings, null, [{
    key: "difficulty",
    get: function get() {
      return LocalStore.get('difficulty', defaults.difficulty);
    },
    set: function set(difficulty) {
      LocalStore.set('difficulty', difficulty);
    }
  }, {
    key: "timeout",
    get: function get() {
      return LocalStore.get('timeout', defaults.timeout);
    },
    set: function set(timeout) {
      LocalStore.set('timeout', timeout);
    }
  }, {
    key: "lives",
    get: function get() {
      return LocalStore.get('lives', defaults.lives);
    },
    set: function set(lives) {
      LocalStore.set('lives', lives);
    }
  }, {
    key: "matched",
    get: function get() {
      return LocalStore.get('matched', defaults.matched);
    },
    set: function set(matched) {
      LocalStore.set('matched', matched);
    }
  }, {
    key: "theme",
    get: function get() {
      return LocalStore.get('theme', -1);
    },
    set: function set(theme) {
      return LocalStore.set('theme', theme);
    }
  }, {
    key: "settings",
    get: function get() {
      var result = {};
      for (var key in defaults) {
        result[key] = this[key];
      }
      return result;
    }
  }]);
  return Settings;
}();
var DialogSettings = /*#__PURE__*/_createClass(function DialogSettings() {
  var _this = this;
  _classCallCheck(this, DialogSettings);
  _defineProperty(this, "element", void 0);
  _defineProperty(this, "dialog", void 0);
  var dialog = this.dialog = new Dialog('settings', {
    title: 'Réglages'
  });
  EventManager.mixin(this);

  //build form

  var difficultyRange = new RangeSlider('difficulty', {
      label: 'Difficulté',
      min: 2,
      max: 8,
      step: 2,
      value: 4
    }),
    timeoutRange = new RangeSlider('timeout', {
      label: 'Limite de temps',
      min: 0,
      max: 5,
      step: 1,
      value: 0,
      after: ' minutes'
    }),
    livesRange = new RangeSlider('lives', {
      label: 'Nombre de vies',
      min: 0,
      max: 5,
      step: 1,
      value: 0
    }),
    matchedRange = new RangeSlider('matched', {
      label: 'Enlever les cartes valides',
      min: 0,
      max: 1,
      step: 1,
      value: 0
    }),
    themeSelector = new ThemeSelector([-1, 1, 2, 3, 4], Settings.theme),
    form = createElement('<form action="#"/>', {
      onsubmit: function onsubmit(e) {
        e.preventDefault();
      }
    }, [difficultyRange.element, timeoutRange.element, livesRange.element, matchedRange.element, themeSelector.element]),
    elements = {
      form: form,
      difficultyRange: difficultyRange,
      timeoutRange: timeoutRange,
      livesRange: livesRange,
      matchedRange: matchedRange,
      themeSelector: themeSelector
    };
  var changed = false,
    loaded = false;
  difficultyRange.on('change', function (e) {
    var value = e.data.value;
    difficultyRange.inputLabel = value + 'x' + value;
  });
  livesRange.on('change', function (e) {
    var value = e.data.value;
    if (0 === value) {
      livesRange.inputLabelAfter = '';
      livesRange.inputLabel = '&infin;';
    } else {
      livesRange.inputLabelAfter = ' vie';
      if (value > 1) {
        livesRange.inputLabelAfter += "s";
      }
    }
  });
  timeoutRange.on('change', function (e) {
    var value = e.data.value;
    if (0 === value) {
      timeoutRange.inputLabelAfter = '';
      timeoutRange.inputLabel = '&infin;';
    } else {
      timeoutRange.inputLabelAfter = ' minute';
      if (value > 1) {
        timeoutRange.inputLabelAfter += "s";
      }
    }
  });
  matchedRange.on('change', function (e) {
    var value = e.data.value;
    matchedRange.inputLabel = 'on';
    if (0 === value) {
      matchedRange.inputLabel = 'off';
    }
  });
  dialog.body = form;
  document.body.appendChild(dialog.element);
  this.element = dialog.element;
  this.one('loaded', function () {
    loaded = true;
  });

  // load settings
  var settings = Settings.settings;
  for (var key in settings) {
    var value = settings[key],
      range = key + 'Range';
    if (elements[range]) {
      elements[range].value = value;
    }
  }
  this.trigger('loaded', {
    dialog: dialog,
    settings: settings
  });
  form.addEventListener('change', function () {
    changed = loaded;
  });
  dialog.onSave(function (e) {
    for (var _key in defaults) {
      var _range = _key + 'Range';
      if (elements[_range]) {
        Settings[_key] = elements[_range].value;
      }
    }
    Settings.theme = themeSelector.value;
    if (changed) {
      _this.trigger('update', {
        dialog: dialog,
        settings: Settings
      });
    }
    _this.trigger('save', {
      dialog: dialog,
      settings: Settings
    });
    changed = false;
  });
});

var _ref = typeof globalThis !== 'undefined' ? globalThis : window,
  JSON$1 = _ref.JSON;
var api;
if (typeof document !== "undefined" && document.head && document.head.dataset) {
  api = {
    set: function set(node, attr, value) {
      if (isUndef(value) || isNull(value)) {
        return this.remove(node, attr);
      }
      node.dataset[attr] = encode(value);
    },
    get: function get(node, attr) {
      return decode(node.dataset[attr]);
    },
    remove: function remove(node, attr) {
      delete node.dataset[attr];
    }
  };
} else {
  api = {
    set: function set(node, attr, value) {
      if (isUndef(value) || isNull(value)) {
        return this.remove(node, attr);
      }
      node.setAttribute('data-' + toDashed(attr), encode(value));
    },
    get: function get(node, attr) {
      return decode(node.getAttribute('data-' + toDashed(attr)));
    },
    remove: function remove(node, attr) {
      node.removeAttribute('data-' + toDashed(attr));
    }
  };
}
function toDashed(name) {
  return name.replace(/([A-Z])/g, function (u) {
    return "-" + u.toLowerCase();
  });
}
function getElem(elem) {
  if (isString(elem)) {
    elem = document.querySelectorAll(elem);
    if (elem.length === 1) {
      elem = elem[0];
    }
  }
  return elem;
}
function decode(value) {
  //unification
  if (isUndef(value) || isNull(value) || value === '') {
    return null;
  }
  if (value.startsWith('{') && value.endsWith('}') || value.startsWith('[') && value.endsWith(']') || isNumeric(value) || value === 'true' || value === 'false') {
    return JSON$1.parse(value);
  }
  return value;
}
function encode(value) {
  if (!isString(value)) {
    return JSON$1.stringify(value);
  }
  return value;
}

/**
 * data-attribute reader/setter
 * @param {Node|NodeList|String} elem 
 * @param {String} attr 
 * @param {Any} [value]
 */
function dataset(elem, attr, value) {
  elem = getElem(elem);
  var $this = {
    get: function get(attr) {
      if (elem instanceof NodeList) {
        elem = elem[0];
      }
      if (elem instanceof HTMLElement) {
        return api.get(elem, attr);
      }
      return null;
    },
    set: function set(attr, value) {
      if (elem instanceof NodeList) {
        elem.forEach(function (el) {
          api.set(el, attr, value);
        });
      } else if (elem instanceof HTMLElement) {
        api.set(elem, attr, value);
      }
      return $this;
    },
    remove: function remove(attr) {
      if (elem instanceof NodeList) {
        elem.forEach(function (el) {
          api.remove(el, attr);
        });
      } else if (elem instanceof HTMLElement) {
        api.remove(elem, attr);
      }
      return $this;
    }
  };
  switch (arguments.length) {
    case 2:
      return $this.get(attr);
    case 3:
      return $this.set(attr, value);
  }
  return $this;
}

var icons = {
    adonisjs: "devicon-adonisjs-original",
    aftereffects: "devicon-aftereffects-plain",
    amazonwebservices: "devicon-amazonwebservices-original",
    android: "devicon-android-plain",
    androidstudio: "devicon-androidstudio-plain",
    aarch64: "devicon-aarch64-plain",
    angularjs: "devicon-angularjs-plain",
    ansible: "devicon-ansible-plain",
    apache: "devicon-apache-plain",
    apachekafka: "devicon-apachekafka-original",
    appcelerator: "devicon-appcelerator-original",
    apple: "devicon-apple-original",
    appwrite: "devicon-appwrite-plain",
    arduino: "devicon-arduino-plain",
    atom: "devicon-atom-original",
    azure: "devicon-azure-plain",
    babel: "devicon-babel-plain",
    backbonejs: "devicon-backbonejs-plain",
    bamboo: "devicon-bamboo-original",
    bash: "devicon-bash-plain",
    behance: "devicon-behance-plain",
    bitbucket: "devicon-bitbucket-original",
    bootstrap: "devicon-bootstrap-plain",
    bulma: "devicon-bulma-plain",
    bower: "devicon-bower-plain",
    c: "devicon-c-plain",
    cakephp: "devicon-cakephp-plain",
    canva: "devicon-canva-original",
    centos: "devicon-centos-plain",
    ceylon: "devicon-ceylon-plain",
    chrome: "devicon-chrome-plain",
    circleci: "devicon-circleci-plain",
    clojure: "devicon-clojure-plain",
    cmake: "devicon-cmake-plain",
    clojurescript: "devicon-clojurescript-plain",
    codecov: "devicon-codecov-plain",
    codeigniter: "devicon-codeigniter-plain",
    codepen: "devicon-codepen-plain",
    coffeescript: "devicon-coffeescript-original",
    confluence: "devicon-confluence-original",
    couchdb: "devicon-couchdb-plain",
    cplusplus: "devicon-cplusplus-plain",
    csharp: "devicon-csharp-plain",
    css3: "devicon-css3-plain",
    cucumber: "devicon-cucumber-plain",
    crystal: "devicon-crystal-original",
    d3js: "devicon-d3js-plain",
    dart: "devicon-dart-plain",
    debian: "devicon-debian-plain",
    denojs: "devicon-denojs-original",
    devicon: "devicon-devicon-plain",
    django: "devicon-django-plain",
    docker: "devicon-docker-plain",
    doctrine: "devicon-doctrine-plain",
    "dot-net": "devicon-dot-net-plain",
    dotnetcore: "devicon-dotnetcore-plain",
    drupal: "devicon-drupal-plain",
    digitalocean: "devicon-digitalocean-plain",
    discordjs: "devicon-discordjs-plain",
    electron: "devicon-electron-original",
    eleventy: "devicon-eleventy-plain",
    elixir: "devicon-elixir-plain",
    elm: "devicon-elm-plain",
    embeddedc: "devicon-embeddedc-plain",
    erlang: "devicon-erlang-plain",
    eslint: "devicon-eslint-original",
    express: "devicon-express-original",
    facebook: "devicon-facebook-plain",
    feathersjs: "devicon-feathersjs-original",
    figma: "devicon-figma-plain",
    filezilla: "devicon-filezilla-plain",
    firebase: "devicon-firebase-plain",
    firefox: "devicon-firefox-plain",
    flask: "devicon-flask-original",
    flutter: "devicon-flutter-plain",
    foundation: "devicon-foundation-plain",
    fsharp: "devicon-fsharp-plain",
    gatling: "devicon-gatling-plain",
    gatsby: "devicon-gatsby-plain",
    rect: "devicon-rect-plain",
    gcc: "devicon-gcc-plain",
    gentoo: "devicon-gentoo-plain",
    gimp: "devicon-gimp-plain",
    git: "devicon-git-plain",
    github: "devicon-github-original",
    gitlab: "devicon-gitlab-plain",
    gitter: "devicon-gitter-plain",
    go: "devicon-go-plain",
    google: "devicon-google-plain",
    googlecloud: "devicon-googlecloud-plain",
    gradle: "devicon-gradle-plain",
    grafana: "devicon-grafana-original",
    grails: "devicon-grails-plain",
    graphql: "devicon-graphql-plain",
    groovy: "devicon-groovy-plain",
    grunt: "devicon-grunt-plain",
    gulp: "devicon-gulp-plain",
    godot: "devicon-godot-plain",
    haskell: "devicon-haskell-plain",
    handlebars: "devicon-handlebars-plain",
    haxe: "devicon-haxe-plain",
    heroku: "devicon-heroku-original",
    html5: "devicon-html5-plain",
    hugo: "devicon-hugo-plain",
    ie10: "devicon-ie10-original",
    ifttt: "devicon-ifttt-original",
    illustrator: "devicon-illustrator-plain",
    inkscape: "devicon-inkscape-plain",
    intellij: "devicon-intellij-plain",
    ionic: "devicon-ionic-original",
    jamstack: "devicon-jamstack-original",
    jasmine: "devicon-jasmine-plain",
    java: "devicon-java-plain",
    javascript: "devicon-javascript-plain",
    jeet: "devicon-jeet-plain",
    jest: "devicon-jest-plain",
    jenkins: "devicon-jenkins-plain",
    jetbrains: "devicon-jetbrains-plain",
    jira: "devicon-jira-plain",
    jquery: "devicon-jquery-plain",
    julia: "devicon-julia-plain",
    jupyter: "devicon-jupyter-plain",
    kaggle: "devicon-kaggle-original",
    karma: "devicon-karma-plain",
    kotlin: "devicon-kotlin-plain",
    krakenjs: "devicon-krakenjs-plain",
    kubernetes: "devicon-kubernetes-plain",
    labview: "devicon-labview-plain",
    laravel: "devicon-laravel-plain",
    latex: "devicon-latex-original",
    linkedin: "devicon-linkedin-plain",
    lua: "devicon-lua-plain",
    linux: "devicon-linux-plain",
    materialui: "devicon-materialui-plain",
    matlab: "devicon-matlab-plain",
    magento: "devicon-magento-original",
    markdown: "devicon-markdown-original",
    maya: "devicon-maya-plain",
    meteor: "devicon-meteor-plain",
    minitab: "devicon-minitab-plain",
    mocha: "devicon-mocha-plain",
    modx: "devicon-modx-plain",
    mongodb: "devicon-mongodb-plain",
    moodle: "devicon-moodle-plain",
    mysql: "devicon-mysql-plain",
    neo4j: "devicon-neo4j-plain",
    nestjs: "devicon-nestjs-plain",
    networkx: "devicon-networkx-original",
    nextjs: "devicon-nextjs-original",
    nginx: "devicon-nginx-original",
    nixos: "devicon-nixos-plain",
    nodejs: "devicon-nodejs-plain",
    nodewebkit: "devicon-nodewebkit-plain",
    nuget: "devicon-nuget-original",
    numpy: "devicon-numpy-original",
    nuxtjs: "devicon-nuxtjs-plain",
    objectivec: "devicon-objectivec-plain",
    opera: "devicon-opera-plain",
    ocaml: "devicon-ocaml-plain",
    openal: "devicon-openal-plain",
    opengl: "devicon-opengl-plain",
    opensuse: "devicon-opensuse-plain",
    oracle: "devicon-oracle-original",
    pandas: "devicon-pandas-original",
    perl: "devicon-perl-plain",
    phalcon: "devicon-phalcon-plain",
    photoshop: "devicon-photoshop-plain",
    php: "devicon-php-plain",
    phpstorm: "devicon-phpstorm-plain",
    podman: "devicon-podman-plain",
    polygon: "devicon-polygon-plain",
    postgresql: "devicon-postgresql-plain",
    premierepro: "devicon-premierepro-plain",
    processing: "devicon-processing-plain",
    protractor: "devicon-protractor-plain",
    putty: "devicon-putty-plain",
    pycharm: "devicon-pycharm-plain",
    python: "devicon-python-plain",
    pytorch: "devicon-pytorch-original",
    phoenix: "devicon-phoenix-plain",
    qt: "devicon-qt-original",
    r: "devicon-r-original",
    rails: "devicon-rails-plain",
    react: "devicon-react-original",
    redhat: "devicon-redhat-plain",
    redis: "devicon-redis-plain",
    redux: "devicon-redux-original",
    rocksdb: "devicon-rocksdb-plain",
    ruby: "devicon-ruby-plain",
    rubymine: "devicon-rubymine-plain",
    rust: "devicon-rust-plain",
    safari: "devicon-safari-plain",
    salesforce: "devicon-salesforce-plain",
    sdl: "devicon-sdl-plain",
    rstudio: "devicon-rstudio-plain",
    sass: "devicon-sass-original",
    scala: "devicon-scala-plain",
    selenium: "devicon-selenium-original",
    sequelize: "devicon-sequelize-plain",
    shopware: "devicon-shopware-original",
    shotgrid: "devicon-shotgrid-plain",
    slack: "devicon-slack-plain",
    socketio: "devicon-socketio-original",
    solidity: "devicon-solidity-plain",
    sourcetree: "devicon-sourcetree-original",
    spring: "devicon-spring-plain",
    spss: "devicon-spss-plain",
    sqlalchemy: "devicon-sqlalchemy-plain",
    sqlite: "devicon-sqlite-plain",
    subversion: "devicon-subversion-original",
    microsoftsqlserver: "devicon-microsoftsqlserver-plain",
    ssh: "devicon-ssh-original",
    stylus: "devicon-stylus-original",
    svelte: "devicon-svelte-plain",
    swift: "devicon-swift-plain",
    symfony: "devicon-symfony-original",
    storybook: "devicon-storybook-plain",
    tailwindcss: "devicon-tailwindcss-plain",
    tensorflow: "devicon-tensorflow-original",
    terraform: "devicon-terraform-plain",
    threejs: "devicon-threejs-original",
    tortoisegit: "devicon-tortoisegit-plain",
    towergit: "devicon-towergit-plain",
    travis: "devicon-travis-plain",
    thealgorithms: "devicon-thealgorithms-plain",
    trello: "devicon-trello-plain",
    twitter: "devicon-twitter-original",
    typescript: "devicon-typescript-plain",
    typo3: "devicon-typo3-plain",
    ubuntu: "devicon-ubuntu-plain",
    unity: "devicon-unity-original",
    unix: "devicon-unix-original",
    unrealengine: "devicon-unrealengine-original",
    uwsgi: "devicon-uwsgi-plain",
    vagrant: "devicon-vagrant-plain",
    vim: "devicon-vim-plain",
    visualstudio: "devicon-visualstudio-plain",
    vuejs: "devicon-vuejs-plain",
    vuestorefront: "devicon-vuestorefront-plain",
    vscode: "devicon-vscode-plain",
    webflow: "devicon-webflow-original",
    weblate: "devicon-weblate-plain",
    webpack: "devicon-webpack-plain",
    webstorm: "devicon-webstorm-plain",
    windows8: "devicon-windows8-original",
    woocommerce: "devicon-woocommerce-plain",
    wordpress: "devicon-wordpress-plain",
    xamarin: "devicon-xamarin-original",
    xcode: "devicon-xcode-plain",
    xd: "devicon-xd-plain",
    yarn: "devicon-yarn-plain",
    yii: "devicon-yii-plain",
    yunohost: "devicon-yunohost-plain",
    zend: "devicon-zend-plain",
    zig: "devicon-zig-original",
    pytest: "devicon-pytest-plain",
    opencv: "devicon-opencv-plain",
    fastapi: "devicon-fastapi-plain",
    k3s: "devicon-k3s-original",
    packer: "devicon-packer-original",
    anaconda: "devicon-anaconda-original",
    rspec: "devicon-rspec-original",
    argocd: "devicon-argocd-plain",
    prometheus: "devicon-prometheus-original",
    blender: "devicon-blender-original",
    dropwizard: "devicon-dropwizard-plain",
    vuetify: "devicon-vuetify-plain",
    fedora: "devicon-fedora-plain"
  },
  iconNames = Object.keys(icons);
var _elem$2 = /*#__PURE__*/new WeakMap();
var _label = /*#__PURE__*/new WeakMap();
var Icon = /*#__PURE__*/function () {
  function Icon(label) {
    _classCallCheck(this, Icon);
    _classPrivateFieldInitSpec(this, _elem$2, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _label, {
      writable: true,
      value: void 0
    });
    if (!isString(label)) {
      throw new TypeError('name must be a String');
    }
    if (!icons[label]) {
      throw new Error('Invalid label ' + label);
    }
    _classPrivateFieldSet(this, _label, label);
    _classPrivateFieldSet(this, _elem$2, createElement('i', {
      class: icons[label] + ' font-face'
    }));
  }
  _createClass(Icon, [{
    key: "element",
    get: function get() {
      return _classPrivateFieldGet(this, _elem$2);
    }
  }, {
    key: "label",
    get: function get() {
      return _classPrivateFieldGet(this, _label);
    }
  }]);
  return Icon;
}();

/**
 * @link https://marina-ferreira.github.io/projects/js/memory-game/
 */
var _icon = /*#__PURE__*/new WeakMap();
var _elem$1 = /*#__PURE__*/new WeakMap();
var Card = /*#__PURE__*/function () {
  function Card(icon) {
    var _this = this;
    _classCallCheck(this, Card);
    _classPrivateFieldInitSpec(this, _icon, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _elem$1, {
      writable: true,
      value: void 0
    });
    _defineProperty(this, "elements", void 0);
    if (isString(icon)) {
      icon = new Icon(icon);
    }
    if (icon instanceof Icon === false) {
      throw new TypeError('icon must be instance of Icon');
    }
    _classPrivateFieldSet(this, _icon, icon);
    _classPrivateFieldSet(this, _elem$1, createElement('div', {
      class: 'memory-card'
    }, [createElement('div', {
      class: 'front-face'
    }, ['<div></div>', icon.element, createElement('div', {
      class: 'card-label'
    }, capitalize(icon.label))]), createElement('div', {
      class: 'back-face'
    })]));
    Object.defineProperty(_classPrivateFieldGet(this, _elem$1), '_cardInstance', {
      value: this,
      configurable: true,
      enumerable: false
    });
    EventManager.mixin(this);
    _classPrivateFieldGet(this, _elem$1).addEventListener('click', function (e) {
      _this.toggle();
    });
  }
  _createClass(Card, [{
    key: "attached",
    get: function get() {
      return _classPrivateFieldGet(this, _elem$1).closest('body') !== null;
    }
  }, {
    key: "element",
    get: function get() {
      return _classPrivateFieldGet(this, _elem$1);
    }
  }, {
    key: "label",
    get: function get() {
      return _classPrivateFieldGet(this, _icon).label;
    }
  }, {
    key: "icon",
    get: function get() {
      return _classPrivateFieldGet(this, _icon);
    }
  }, {
    key: "flipped",
    get: function get() {
      return _classPrivateFieldGet(this, _elem$1).classList.contains('flip');
    }
  }, {
    key: "matched",
    get: function get() {
      return _classPrivateFieldGet(this, _elem$1).classList.contains('matched');
    },
    set: function set(bool) {
      _classPrivateFieldGet(this, _elem$1).classList.remove('matched');
      if (bool === true) {
        _classPrivateFieldGet(this, _elem$1).classList.add('matched');
      }
    }
  }, {
    key: "detached",
    get: function get() {
      return _classPrivateFieldGet(this, _elem$1).parentElement === null;
    }
  }, {
    key: "order",
    get: function get() {
      var _classPrivateFieldGet2;
      return parseInt((_classPrivateFieldGet2 = _classPrivateFieldGet(this, _elem$1).style.order) !== null && _classPrivateFieldGet2 !== void 0 ? _classPrivateFieldGet2 : 0);
    },
    set: function set(num) {
      if (!isInt(num)) {
        throw new TypeError('num must be an integer');
      }
      _classPrivateFieldGet(this, _elem$1).style.order = num;
    }
  }, {
    key: "toggle",
    value: function toggle() {
      if (!this.flipped) {
        _classPrivateFieldGet(this, _elem$1).classList.add('flip');
      } else {
        _classPrivateFieldGet(this, _elem$1).classList.remove('flip');
      }
      this.trigger('flipped', {
        card: this,
        flipped: this.flipped
      });
    }
  }, {
    key: "disable",
    value: function disable() {
      var flag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      if (flag) {
        _classPrivateFieldGet(this, _elem$1).classList.add('disabled');
      } else {
        _classPrivateFieldGet(this, _elem$1).classList.remove('disabled');
      }
    }
  }, {
    key: "disabled",
    get: function get() {
      return _classPrivateFieldGet(this, _elem$1).classList.contains('disabled');
    }
  }]);
  return Card;
}();

function _shuffle(list) {
  var copy = _toConsumableArray(list),
    result = [];
  while (copy.length > 0) {
    var randomNumber = Math.floor(Math.random() * copy.length);
    result.push(copy[randomNumber]);
    copy.splice(randomNumber, 1);
  }
  return result;
}
var _elem = /*#__PURE__*/new WeakMap();
var _cardArea = /*#__PURE__*/new WeakMap();
var _flipped = /*#__PURE__*/new WeakMap();
var _cards = /*#__PURE__*/new WeakMap();
var _pairs = /*#__PURE__*/new WeakMap();
var _flips = /*#__PURE__*/new WeakMap();
var _over = /*#__PURE__*/new WeakMap();
var _complete = /*#__PURE__*/new WeakMap();
var Deck = /*#__PURE__*/function () {
  function Deck() {
    var _this = this;
    var cards = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    _classCallCheck(this, Deck);
    _classPrivateFieldInitSpec(this, _elem, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _cardArea, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _flipped, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _cards, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _pairs, {
      writable: true,
      value: 0
    });
    _classPrivateFieldInitSpec(this, _flips, {
      writable: true,
      value: 0
    });
    _classPrivateFieldInitSpec(this, _over, {
      writable: true,
      value: false
    });
    _classPrivateFieldInitSpec(this, _complete, {
      writable: true,
      value: false
    });
    _classPrivateFieldSet(this, _cards, []);
    _classPrivateFieldSet(this, _flipped, []);
    _classPrivateFieldSet(this, _pairs, 0);
    _classPrivateFieldSet(this, _cardArea, createElement('div', {
      class: "card-area"
    }));
    _classPrivateFieldSet(this, _elem, createElement('div', {
      class: 'memory-game-area border border-top-0'
    }, _classPrivateFieldGet(this, _cardArea)));
    EventManager.mixin(this);
    cards.forEach(function (card) {
      return _this.push(card);
    });
    this.on('flipped', function (e) {
      var _e$data = e.data,
        card = _e$data.card,
        flipped = _e$data.flipped;
      var index = _classPrivateFieldGet(_this, _flipped).indexOf(card);
      if (index !== -1) {
        if (!flipped) {
          _classPrivateFieldGet(_this, _flipped).splice(index, 1);
        }
        return;
      }
      if (flipped) {
        _classPrivateFieldSet(_this, _flipped, _toConsumableArray(_classPrivateFieldGet(_this, _cards)).filter(function (card) {
          return card.flipped;
        }).filter(function (card) {
          return !card.disabled;
        }));
        if (_classPrivateFieldGet(_this, _flipped).length === 2) {
          var _this$flips;
          _classPrivateFieldSet(_this, _flips, (_this$flips = _classPrivateFieldGet(_this, _flips), _this$flips++, _this$flips));
          _this.disable();
          var _classPrivateFieldGet2 = _classPrivateFieldGet(_this, _flipped),
            _classPrivateFieldGet3 = _slicedToArray(_classPrivateFieldGet2, 2),
            one = _classPrivateFieldGet3[0],
            two = _classPrivateFieldGet3[1];
          if (one.label === two.label) {
            var _this$pairs;
            _classPrivateFieldSet(_this, _pairs, (_this$pairs = _classPrivateFieldGet(_this, _pairs), _this$pairs++, _this$pairs));
            _classPrivateFieldSet(_this, _flipped, []);
            one.disable();
            two.disable();
            _this.trigger('success', {
              deck: _this,
              cards: [one, two]
            });
            if (_this.pairs === _this.max) {
              _classPrivateFieldSet(_this, _complete, true);
              _this.trigger('complete', {
                deck: _this
              });
              setTimeout(function () {
                _classPrivateFieldGet(_this, _elem).classList.add('complete');
              }, 1700);
            } else {
              _this.disable(false);
            }
          } else {
            _classPrivateFieldSet(_this, _flipped, []);
            _this.trigger('failed', {
              deck: _this,
              cards: [one, two]
            });
          }
        }
      }
    });
    this.on('failed', function (e) {
      _this.element.classList.add('failed');
      setTimeout(function () {
        _this.element.classList.remove('failed');
        if (!_classPrivateFieldGet(_this, _over)) {
          e.data.cards.forEach(function (card) {
            return card.toggle();
          });
          _this.disable(false);
        }
      }, 1500);
    });
    this.on('gameover', function (e) {
      _classPrivateFieldSet(_this, _over, _classPrivateFieldSet(_this, _complete, true));
      _this.disable(true);
      setTimeout(function () {
        _classPrivateFieldGet(_this, _elem).classList.add('gameover');
      }, 1500);
    });
    this.trigger('displayed', {
      deck: this
    });
    dataset(_classPrivateFieldGet(this, _elem), 'grid', this.grid);
  }
  _createClass(Deck, [{
    key: "attached",
    get: function get() {
      return _classPrivateFieldGet(this, _elem).closest('body') !== null;
    }
  }, {
    key: "grid",
    get: function get() {
      return Math.sqrt(this.length);
    }
  }, {
    key: "complete",
    get: function get() {
      return _classPrivateFieldGet(this, _complete);
    }
  }, {
    key: "flips",
    get: function get() {
      return _classPrivateFieldGet(this, _flips);
    }
  }, {
    key: "isGameOver",
    value: function isGameOver() {
      return _classPrivateFieldGet(this, _over);
    }
  }, {
    key: "element",
    get: function get() {
      return _classPrivateFieldGet(this, _elem);
    }
  }, {
    key: "pairs",
    get: function get() {
      return _classPrivateFieldGet(this, _pairs);
    }
  }, {
    key: "max",
    get: function get() {
      return Math.floor(this.length / 2);
    }
  }, {
    key: "length",
    get: function get() {
      return _classPrivateFieldGet(this, _cards).length;
    }
  }, {
    key: "width",
    get: function get() {
      return _classPrivateFieldGet(this, _cardArea).offsetWidth;
    },
    set: function set(width) {
      _classPrivateFieldGet(this, _cardArea).style.maxWidth = encode$1(width) + 'px';
    }
  }, {
    key: "height",
    get: function get() {
      return _classPrivateFieldGet(this, _cardArea).offsetHeight;
    },
    set: function set(height) {
      _classPrivateFieldGet(this, _cardArea).style.height = encode$1(height) + 'px';
    }
  }, {
    key: "disable",
    value: function disable() {
      var flag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      if (flag === true) {
        _classPrivateFieldGet(this, _elem).classList.add('disabled');
      } else {
        _classPrivateFieldGet(this, _elem).classList.remove('disabled');
      }
    }
  }, {
    key: "disabled",
    get: function get() {
      return _classPrivateFieldGet(this, _elem).classList.contains('disabled');
    }
  }, {
    key: "push",
    value: function push(card) {
      var _this2 = this;
      if (card instanceof Card) {
        _classPrivateFieldGet(this, _cards).push(card);
        _classPrivateFieldGet(this, _cardArea).appendChild(card.element);
        card.on('flipped', function (e) {
          _this2.trigger('flipped', e.data);
        });
      }
      return this.length;
    }
  }, {
    key: "forEach",
    value: function forEach(callback) {
      _classPrivateFieldGet(this, _cards).forEach(callback);
    }
  }, {
    key: "shuffle",
    value: function shuffle() {
      var _this3 = this;
      _classPrivateFieldSet(this, _cards, _shuffle(_classPrivateFieldGet(this, _cards)));
      _classPrivateFieldGet(this, _cardArea).innerHTML = '';
      _classPrivateFieldGet(this, _cards).forEach(function (card) {
        return _classPrivateFieldGet(_this3, _cardArea).appendChild(card.element);
      });
      return this;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.element.remove();
    }
  }], [{
    key: "generateGrid",
    value: function generateGrid(difficulty) {
      if (!isInt(difficulty)) {
        throw new TypeError('difficulty must be an integer.');
      }
      return this.generate(difficulty * difficulty);
    }
  }, {
    key: "generate",
    value: function generate() {
      var numberOfCards = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4;
      if (!isInt(numberOfCards)) {
        throw new TypeError('numberOfCards must be an integer.');
      }
      var cards = Math.max(4, numberOfCards + numberOfCards % 2),
        available = _toConsumableArray(iconNames),
        labels = [];
      for (var i = 0; i < cards / 2; i++) {
        var rand = Math.floor(Math.random() * available.length),
          label = available[rand];
        available.splice(rand, 1);
        for (var j = 0; j < 2; j++) {
          labels.push(new Card(label));
        }
      }
      return new Deck(_shuffle(labels));
    }
  }]);
  return Deck;
}();

var MILLISECOND = 1,
  SECOND = 1000,
  MINUTE = 60000,
  HOUR = 3600000;
function computeTime(start) {
  var elapsed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return +new Date() - start + elapsed;
}
var _ms = /*#__PURE__*/new WeakMap();
var TimeStamp = /*#__PURE__*/function () {
  function TimeStamp(ms) {
    _classCallCheck(this, TimeStamp);
    _classPrivateFieldInitSpec(this, _ms, {
      writable: true,
      value: void 0
    });
    if (!isInt(ms)) {
      throw new TypeError('ms must be an integer');
    }
    _classPrivateFieldSet(this, _ms, ms);
  }
  _createClass(TimeStamp, [{
    key: "hours",
    get: function get() {
      return Math.floor(_classPrivateFieldGet(this, _ms) / HOUR);
    }
  }, {
    key: "minutes",
    get: function get() {
      return Math.floor(_classPrivateFieldGet(this, _ms) / MINUTE);
    }
  }, {
    key: "seconds",
    get: function get() {
      return Math.floor(_classPrivateFieldGet(this, _ms) / SECOND);
    }
  }, {
    key: "miliseconds",
    get: function get() {
      return _classPrivateFieldGet(this, _ms);
    }
  }, {
    key: "export",
    value: function _export() {
      var values = {
          hours: HOUR,
          minutes: MINUTE,
          seconds: SECOND,
          miliseconds: MILLISECOND
        },
        remaining = _classPrivateFieldGet(this, _ms),
        result = {};
      for (var key in values) {
        var divider = values[key],
          floor = Math.floor(remaining / divider);
        remaining -= floor * divider;
        result[key] = floor;
      }
      result.timestamp = _classPrivateFieldGet(this, _ms);
      return result;
    }
  }, {
    key: "toString",
    value: function toString() {
      return formatTime(_classPrivateFieldGet(this, _ms));
    }
  }]);
  return TimeStamp;
}();
var _startTime = /*#__PURE__*/new WeakMap();
var _running = /*#__PURE__*/new WeakMap();
var _paused$1 = /*#__PURE__*/new WeakMap();
var _elapsedTime = /*#__PURE__*/new WeakMap();
var _laps = /*#__PURE__*/new WeakMap();
var Chronometer = /*#__PURE__*/function () {
  function Chronometer() {
    var autostart = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    _classCallCheck(this, Chronometer);
    _classPrivateFieldInitSpec(this, _startTime, {
      writable: true,
      value: 0
    });
    _classPrivateFieldInitSpec(this, _running, {
      writable: true,
      value: false
    });
    _classPrivateFieldInitSpec(this, _paused$1, {
      writable: true,
      value: false
    });
    _classPrivateFieldInitSpec(this, _elapsedTime, {
      writable: true,
      value: 0
    });
    _classPrivateFieldInitSpec(this, _laps, {
      writable: true,
      value: []
    });
    if (autostart) {
      this.start();
    }
  }
  _createClass(Chronometer, [{
    key: "start",
    value: function start() {
      if (!_classPrivateFieldGet(this, _running)) {
        _classPrivateFieldSet(this, _running, true);
        _classPrivateFieldSet(this, _laps, []);
        _classPrivateFieldSet(this, _elapsedTime, 0);
        _classPrivateFieldSet(this, _startTime, +new Date());
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (!_classPrivateFieldGet(this, _running)) {
        var _classPrivateFieldGet2;
        return (_classPrivateFieldGet2 = _classPrivateFieldGet(this, _elapsedTime)) !== null && _classPrivateFieldGet2 !== void 0 ? _classPrivateFieldGet2 : 0;
      }
      _classPrivateFieldSet(this, _running, false);
      return _classPrivateFieldSet(this, _elapsedTime, computeTime(_classPrivateFieldGet(this, _startTime)));
    }
  }, {
    key: "pause",
    value: function pause() {
      _classPrivateFieldSet(this, _paused$1, true);
      if (!_classPrivateFieldGet(this, _running)) {
        return _classPrivateFieldGet(this, _elapsedTime);
      }
      return this.stop();
    }
  }, {
    key: "resume",
    value: function resume() {
      if (!_classPrivateFieldGet(this, _paused$1)) {
        return;
      }
      _classPrivateFieldSet(this, _paused$1, false);
      _classPrivateFieldSet(this, _startTime, +new Date() - _classPrivateFieldGet(this, _elapsedTime));
      _classPrivateFieldSet(this, _running, true);
    }
  }, {
    key: "lap",
    value: function lap() {
      var _classPrivateFieldGet3, _classPrivateFieldGet4;
      if (!this.isStarted()) {
        return _classPrivateFieldGet(this, _laps)[_classPrivateFieldGet(this, _laps).length - 1];
      }
      var prev = (_classPrivateFieldGet3 = (_classPrivateFieldGet4 = _classPrivateFieldGet(this, _laps)[_classPrivateFieldGet(this, _laps).length - 1]) === null || _classPrivateFieldGet4 === void 0 ? void 0 : _classPrivateFieldGet4.elapsed) !== null && _classPrivateFieldGet3 !== void 0 ? _classPrivateFieldGet3 : _classPrivateFieldGet(this, _startTime),
        current = this.elapsed,
        lapTime = {
          start: _classPrivateFieldGet(this, _startTime),
          elapsed: current,
          time: current - prev
        };
      _classPrivateFieldGet(this, _laps).push(lapTime);
      return lapTime;
    }
  }, {
    key: "isStarted",
    value: function isStarted() {
      return _classPrivateFieldGet(this, _running);
    }
  }, {
    key: "isPaused",
    value: function isPaused() {
      return _classPrivateFieldGet(this, _paused$1);
    }
  }, {
    key: "elapsed",
    get: function get() {
      if (this.isStarted()) {
        return computeTime(_classPrivateFieldGet(this, _startTime));
      }
      return _classPrivateFieldGet(this, _elapsedTime);
    }
  }, {
    key: "export",
    value: function _export() {
      return new TimeStamp(this.elapsed).export();
    }
  }]);
  return Chronometer;
}();
function formatTime(ms) {
  var _TimeStamp$export = new TimeStamp(ms).export(),
    hours = _TimeStamp$export.hours,
    minutes = _TimeStamp$export.minutes,
    seconds = _TimeStamp$export.seconds,
    miliseconds = _TimeStamp$export.miliseconds,
    result = '';
  if (hours < 10) {
    result += '0';
  }
  result += hours + ':';
  if (minutes < 10) {
    result += '0';
  }
  result += minutes + ':';
  if (seconds < 10) {
    result += '0';
  }
  result += seconds + ',';
  if (miliseconds < 100) {
    result += '0';
  }
  if (miliseconds < 10) {
    result += '0';
  }
  result += miliseconds;
  return result;
}

var _vies = /*#__PURE__*/new WeakMap();
var Stats = /*#__PURE__*/function () {
  function Stats(deck, settings) {
    var _this = this;
    _classCallCheck(this, Stats);
    _defineProperty(this, "element", void 0);
    _defineProperty(this, "elements", void 0);
    _defineProperty(this, "timer", void 0);
    _defineProperty(this, "countdown", void 0);
    _defineProperty(this, "deck", void 0);
    _defineProperty(this, "settings", void 0);
    _classPrivateFieldInitSpec(this, _vies, {
      writable: true,
      value: void 0
    });
    this.deck = deck;
    this.settings = settings;
    EventManager.mixin(this);
    _classPrivateFieldSet(this, _vies, settings.lives === 0 ? -1 : settings.lives);
    var tour = createElement('td', '0'),
      pairs = createElement('td', '0/' + deck.max),
      vies = createElement('td', '&infin;'),
      timer = this.timer = new Clock(),
      countdown = this.countdown = new CountDownClock(timer, settings.timeout * MINUTE),
      root = createElement('<table class="table table-fixed table-bordered text-center mb-0 game-stats">', ['<thead><tr><th>Tour</th><th>Paires</th><th>Cartes</th><th>Vies</th><th>Timer</th></tr></thead>', createElement('tbody', [createElement('tr', [tour, pairs, createElement('td', encode(deck.length)), vies, createElement('td', timer.element)]), createElement('tr', [createElement('<td colspan="5"/>', countdown.element)])])]);
    this.element = root;
    this.elements = {
      root: root,
      tour: tour,
      pairs: pairs,
      vies: vies
    };
    countdown.on('timeout', function (e) {
      deck.trigger('gameover');
    });
    deck.one('flipped', function (e) {
      timer.start();
    });
    deck.on('success failed', function (e) {
      _this.tour = deck.flips;
      _this.pairs = deck.pairs + '/' + deck.max;
      if (e.type === 'failed') {
        if (_classPrivateFieldGet(_this, _vies) === 0) {
          deck.trigger('gameover');
        } else {
          var _this$vies;
          _classPrivateFieldSet(_this, _vies, (_this$vies = _classPrivateFieldGet(_this, _vies), _this$vies--, _this$vies));
          if (_classPrivateFieldGet(_this, _vies) > -1) {
            _this.vies = _classPrivateFieldGet(_this, _vies);
          }
        }
      } else if (settings.matched > 0) {
        var _e$data$cards = _slicedToArray(e.data.cards, 2),
          one = _e$data$cards[0],
          two = _e$data$cards[1];
        one.matched = true;
        two.matched = true;
      }
    });
    deck.on('gameover complete', function (e) {
      timer.stop();
    });
    if (_classPrivateFieldGet(this, _vies) > -1) {
      this.vies = _classPrivateFieldGet(this, _vies);
    }
  }
  _createClass(Stats, [{
    key: "tour",
    get: function get() {
      return decode(this.elements.tour.innerHTML);
    },
    set: function set(tour) {
      this.elements.tour.innerHTML = encode(tour);
    }
  }, {
    key: "pairs",
    get: function get() {
      return decode(this.elements.pairs.innerHTML);
    },
    set: function set(pairs) {
      this.elements.pairs.innerHTML = encode(pairs);
    }
  }, {
    key: "vies",
    get: function get() {
      return decode(this.elements.vies.innerHTML);
    },
    set: function set(vies) {
      this.elements.vies.innerHTML = encode(vies);
    }
  }, {
    key: "elapsed",
    get: function get() {
      return this.timer.elapsed;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.timer.stop();
      this.element.remove();
      this.deck.destroy();
    }
  }]);
  return Stats;
}();
var _interval = /*#__PURE__*/new WeakMap();
var _update = /*#__PURE__*/new WeakSet();
var Clock = /*#__PURE__*/function () {
  function Clock() {
    _classCallCheck(this, Clock);
    _classPrivateMethodInitSpec(this, _update);
    _defineProperty(this, "chrono", void 0);
    _defineProperty(this, "elements", void 0);
    _defineProperty(this, "element", void 0);
    _classPrivateFieldInitSpec(this, _interval, {
      writable: true,
      value: void 0
    });
    var hours = createElement('<span class="hours" />'),
      minutes = createElement('<span class="minutes"/>'),
      seconds = createElement('<span class="seconds"/>'),
      root = createElement('<div class="time  mx-auto"/>', [hours, minutes, seconds]);
    this.chrono = new Chronometer(false);
    this.elements = {
      root: root,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
    this.element = root;
    EventManager.mixin(this);
  }
  _createClass(Clock, [{
    key: "seconds",
    get: function get() {
      return this.chrono.export().seconds;
    }
  }, {
    key: "hours",
    get: function get() {
      return this.chrono.export().hours;
    }
  }, {
    key: "minutes",
    get: function get() {
      return this.chrono.export().minutes;
    }
  }, {
    key: "elapsed",
    get: function get() {
      return Math.floor(this.chrono.elapsed / 1000);
    }
  }, {
    key: "started",
    get: function get() {
      return this.chrono.isStarted();
    }
  }, {
    key: "paused",
    get: function get() {
      return this.chrono.isPaused();
    }
  }, {
    key: "start",
    value: function start() {
      var _this2 = this;
      if (!this.chrono.isStarted()) {
        this.chrono.start();
        _classPrivateFieldSet(this, _interval, setInterval(function () {
          _classPrivateMethodGet(_this2, _update, _update2).call(_this2);
        }, 50));
        this.trigger('start', {
          clock: this
        });
        _classPrivateMethodGet(this, _update, _update2).call(this);
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (_classPrivateFieldGet(this, _interval)) {
        this.chrono.stop();
        clearInterval(_classPrivateFieldGet(this, _interval));
        this.trigger('stop', {
          clock: this
        });
        _classPrivateMethodGet(this, _update, _update2).call(this);
      }
      _classPrivateFieldSet(this, _interval, null);
    }
  }, {
    key: "pause",
    value: function pause() {
      if (this.chrono.isStarted()) {
        _classPrivateMethodGet(this, _update, _update2).call(this);
        this.chrono.pause();
      }
    }
  }, {
    key: "resume",
    value: function resume() {
      if (this.chrono.isPaused()) {
        this.chrono.resume();
      }
    }
  }]);
  return Clock;
}();
function _update2() {
  var _this4 = this;
  if (this.chrono.isPaused()) {
    return;
  }
  var data = this.chrono.export();
  if (data.timestamp > 0) {
    ['hours', 'minutes', 'seconds'].forEach(function (key) {
      if (key === 'hours' && data[key] === 0) {
        return;
      }
      var value = data[key];
      _this4.elements[key].innerHTML = value < 10 ? "0".concat(value) : "".concat(value);
    });
  }
  this.trigger('update', {
    data: data,
    clock: this,
    chrono: this.chrono
  });
}
var _update3 = /*#__PURE__*/new WeakSet();
var CountDownClock = /*#__PURE__*/_createClass(function CountDownClock(clock) {
  var _this3 = this;
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  _classCallCheck(this, CountDownClock);
  _classPrivateMethodInitSpec(this, _update3);
  _defineProperty(this, "clock", void 0);
  _defineProperty(this, "element", void 0);
  _defineProperty(this, "elements", void 0);
  _defineProperty(this, "timeout", void 0);
  if (clock instanceof Clock === false) {
    throw new TypeError('clock must be an instance of Clock');
  }
  if (!isInt(timeout)) {
    throw new TypeError('timeout must be an integer');
  }
  EventManager.mixin(this);
  this.clock = clock;
  var hours = createElement('<span class="hours" />'),
    minutes = createElement('<span class="minutes"/>'),
    seconds = createElement('<span class="seconds"/>'),
    root = createElement('<div class="time mx-auto"/>', [hours, minutes, seconds]);
  this.elements = {
    root: root,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
  this.element = root;
  if (timeout > 0) {
    clock.on('update', function (e) {
      var data = e.data.data;
      if (data.timestamp >= timeout) {
        _classPrivateMethodGet(_this3, _update3, _update4).call(_this3, 0);
        clock.stop();
        _this3.trigger('timeout', {
          clock: clock,
          chrono: clock.chrono,
          countdown: _this3
        });
      } else {
        _classPrivateMethodGet(_this3, _update3, _update4).call(_this3, timeout - data.timestamp);
      }
    });
  }
});
function _update4(ms) {
  var _this5 = this;
  var data = new TimeStamp(ms).export();
  ['hours', 'minutes', 'seconds'].forEach(function (key) {
    if (key === 'hours' && data[key] === 0) {
      return;
    }
    var value = data[key];
    _this5.elements[key].innerHTML = value < 10 ? "0".concat(value) : "".concat(value);
  });
}

var _paused = /*#__PURE__*/new WeakMap();
var _started = /*#__PURE__*/new WeakMap();
var Game = /*#__PURE__*/function () {
  function Game(container) {
    var _this = this;
    _classCallCheck(this, Game);
    _defineProperty(this, "container", void 0);
    _defineProperty(this, "stats", void 0);
    _defineProperty(this, "deck", void 0);
    _classPrivateFieldInitSpec(this, _paused, {
      writable: true,
      value: false
    });
    _classPrivateFieldInitSpec(this, _started, {
      writable: true,
      value: false
    });
    if (container instanceof Element === false) {
      throw new TypeError('container must be an Element');
    }
    this.container = container;
    EventManager.mixin(this);
    this.on('pause', function (e) {
      _this.stats.timer.pause();
      _this.deck.element.classList.add('paused');
      _this.deck.disable();
    });
    this.on('resume', function (e) {
      _this.deck.element.classList.remove('paused');
      _this.deck.disable(false);
      _this.stats.timer.resume();
    });

    // this.start(Settings);
  }
  _createClass(Game, [{
    key: "paused",
    get: function get() {
      return _classPrivateFieldGet(this, _paused);
    }
  }, {
    key: "started",
    get: function get() {
      return _classPrivateFieldGet(this, _started);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.stats.destroy();
      this.trigger('destroy', {
        game: this
      });
    }
  }, {
    key: "start",
    value: function start(settings) {
      var _this2 = this;
      if (this.stats) {
        this.destroy();
      }
      _classPrivateFieldSet(this, _started, _classPrivateFieldSet(this, _paused, false));
      var difficulty = settings.difficulty,
        theme = settings.theme,
        container = this.container;
      var deck = this.deck = Deck.generateGrid(difficulty),
        stats = this.stats = new Stats(deck, settings);
      dataset(deck.element, 'theme', theme);
      container.appendChild(stats.element);
      container.appendChild(deck.element);
      deck.one('flipped', function (e) {
        _classPrivateFieldSet(_this2, _started, true);
        _this2.trigger('start', {
          game: _this2
        });
      });
      deck.on('gameover complete', function (e) {
        _this2.trigger(e.type + ' stop', {
          game: _this2
        });
      });
      deck.element.addEventListener('click', function (e) {
        if (deck.isGameOver() || deck.complete) {
          _this2.start(settings);
        } else if (_classPrivateFieldGet(_this2, _paused)) {
          _this2.resume();
        }
      });
      this.trigger('displayed', {
        game: this
      });
    }
  }, {
    key: "pause",
    value: function pause() {
      if (!_classPrivateFieldGet(this, _paused) && _classPrivateFieldGet(this, _started)) {
        _classPrivateFieldSet(this, _paused, true);
        this.trigger('pause', {
          game: this
        });
      }
    }
  }, {
    key: "resume",
    value: function resume() {
      if (_classPrivateFieldGet(this, _paused)) {
        _classPrivateFieldSet(this, _paused, false);
        this.trigger('resume', {
          game: this
        });
      }
    }
  }]);
  return Game;
}();

/**
 * @link https://getbootstrap.com/docs/5.3/components/tooltips/
 */

_toConsumableArray(document.querySelectorAll('[data-toggle="tooltip"],[data-bs-toggle="tooltip"]')).map(function (el) {
  return new bootstrap.Tooltip(el);
});
var app = document.querySelector('#app'),
  settingsUI = new DialogSettings(),
  game = new Game(app),
  playbtn = document.querySelector('#playbtn');
document.body.appendChild(settingsUI.element);
settingsUI.on('update', function (e) {
  var settings = e.data.settings;
  dataset(playbtn, 'play', "stopped");
  game.start(settings);
});
settingsUI.dialog.onShow(function (e) {
  if (!game.paused) {
    game.pause();
  }
});
game.on('pause resume', function (e) {
  var type = e.type;
  dataset(playbtn, 'play', type === 'pause' ? "paused" : "play");
}).on('gameover complete', function (e) {
  dataset(playbtn, 'play', "stopped");
}).on('start', function (e) {
  dataset(playbtn, 'play', "play");
});
playbtn.addEventListener('click', function (e) {
  e.preventDefault();
  if (game.started) {
    if (game.paused) {
      game.resume();
    } else {
      game.pause();
    }
  }
});
function onResize() {
  var deck = game.deck,
    height = deck.height;
  deck.width = Math.floor(height * 3 / 4);
  deck.forEach(function (card) {
    var width = card.element.offsetWidth;
    card.icon.element.style.fontSize = Math.floor(.6 * width) + 'px';
    card.element.querySelector('.card-label').style.fontSize = Math.floor(.1 * width) + 'px';
  });
}
addEventListener('resize', onResize);
game.on('displayed', onResize);
game.start(Settings);
//# sourceMappingURL=bundle.js.map
