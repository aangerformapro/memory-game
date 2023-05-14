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
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;
  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };
  return _wrapNativeSuper(Class);
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
function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }
  return object;
}
function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get.bind();
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);
      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }
      return desc.value;
    };
  }
  return _get.apply(this, arguments);
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
function _checkPrivateRedeclaration(obj, privateCollection) {
  if (privateCollection.has(obj)) {
    throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
}
function _classPrivateFieldInitSpec(obj, privateMap, value) {
  _checkPrivateRedeclaration(obj, privateMap);
  privateMap.set(obj, value);
}

/* global unsafeWindow, globalThis */

var global = typeof unsafeWindow !== 'undefined' ? unsafeWindow : typeof globalThis !== 'undefined' ? globalThis : window;
var document$1 = global.document;
  global.JSON;
var isPlainObject = function isPlainObject(param) {
    return param instanceof Object && Object.getPrototypeOf(param) === Object.prototype;
  },
  isString = function isString(param) {
    return typeof param === 'string';
  },
  isInt = function isInt(param) {
    return Number.isInteger(param);
  },
  isCallable = function isCallable(param) {
    return typeof param === 'function';
  },
  isFunction = isCallable;
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
function toDashed(name) {
  return name.replace(/([A-Z])/g, function (u) {
    return "-" + u.toLowerCase();
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
  if (typeof params === 'string' || params instanceof Element || params instanceof NodeList || Array.isArray(params)) {
    html = params;
    params = {};
  }
  (_params = params) !== null && _params !== void 0 ? _params : params = {};
  (_html = html) !== null && _html !== void 0 ? _html : html = '';
  var elem = document$1.createElement(tag);
  for (var attr in params) {
    var value = params[attr];
    if (attr === 'html') {
      html = value;
      continue;
    }
    if (/^data(set)?$/.test(attr) && isPlainObject(value)) {
      for (var key in value) {
        elem.dataset[key] = value[key];
      }
      continue;
    } else if (/^data(-)?\w/.test(attr)) {
      elem.setAttribute(toDashed(attr), value);
      continue;
    }
    if (typeof value === 'string') {
      elem.setAttribute(attr, value);
    } else {
      elem[attr] = value;
    }
  }
  if (html instanceof Element) {
    html = [html];
  }
  if (Array.isArray(html) || html instanceof NodeList) {
    html.forEach(function (item) {
      if (item instanceof Element) {
        elem.appendChild(item);
      } else if (typeof item === 'string') {
        elem.innerHTML += item;
      }
    });
  } else if (typeof html === 'string') {
    elem.innerHTML = html;
  }
  return elem;
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

if (typeof document !== "undefined" && document.head && document.head.dataset) ;

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
var _index = /*#__PURE__*/new WeakMap();
var _icon = /*#__PURE__*/new WeakMap();
var _elem$1 = /*#__PURE__*/new WeakMap();
var Card = /*#__PURE__*/function () {
  function Card(index, icon) {
    var _this = this;
    _classCallCheck(this, Card);
    _classPrivateFieldInitSpec(this, _index, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _icon, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _elem$1, {
      writable: true,
      value: void 0
    });
    if (!isInt(index)) {
      throw new TypeError('name must be an integer');
    }
    if (isString(icon)) {
      icon = new Icon(icon);
    }
    if (icon instanceof Icon === false) {
      throw new TypeError('icon must be instance of Icon');
    }
    _classPrivateFieldSet(this, _icon, icon);
    _classPrivateFieldSet(this, _index, index);
    _classPrivateFieldSet(this, _elem$1, createElement('div', {
      class: 'memory-card col-3',
      'data-index': index,
      'style': 'order: ' + index
    }, [createElement('div', {
      class: 'front-face'
    }, [icon.element]), createElement('div', {
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
    key: "index",
    get: function get() {
      return _classPrivateFieldGet(this, _index);
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

var _elem = /*#__PURE__*/new WeakMap();
var _flipped = /*#__PURE__*/new WeakMap();
var _pairs = /*#__PURE__*/new WeakMap();
var Deck = /*#__PURE__*/function (_Array) {
  _inherits(Deck, _Array);
  var _super = _createSuper(Deck);
  function Deck() {
    var _this;
    var cards = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    _classCallCheck(this, Deck);
    _this = _super.call(this);
    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _elem, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _flipped, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _pairs, {
      writable: true,
      value: 0
    });
    _classPrivateFieldSet(_assertThisInitialized(_this), _flipped, []);
    _classPrivateFieldSet(_assertThisInitialized(_this), _pairs, 0);
    _classPrivateFieldSet(_assertThisInitialized(_this), _elem, createElement('div', {
      class: 'memory-game-area'
    }));
    EventManager.mixin(_assertThisInitialized(_this));
    cards.forEach(function (card) {
      return _this.push(card);
    });
    _this.on('flipped', function (e) {
      var _e$data = e.data,
        card = _e$data.card,
        flipped = _e$data.flipped;
      var index = _classPrivateFieldGet(_assertThisInitialized(_this), _flipped).indexOf(card);
      if (index !== -1) {
        if (!flipped) {
          _classPrivateFieldGet(_assertThisInitialized(_this), _flipped).splice(index, 1);
        }
        return;
      }
      if (flipped) {
        _classPrivateFieldSet(_assertThisInitialized(_this), _flipped, _toConsumableArray(_assertThisInitialized(_this)).filter(function (card) {
          return card.flipped;
        }).filter(function (card) {
          return !card.disabled;
        }));
        console.debug(_classPrivateFieldGet(_assertThisInitialized(_this), _flipped));
        if (_classPrivateFieldGet(_assertThisInitialized(_this), _flipped).length === 2) {
          _this.disable();
          var _classPrivateFieldGet2 = _classPrivateFieldGet(_assertThisInitialized(_this), _flipped),
            _classPrivateFieldGet3 = _slicedToArray(_classPrivateFieldGet2, 2),
            one = _classPrivateFieldGet3[0],
            two = _classPrivateFieldGet3[1];
          if (one.label === two.label) {
            var _this$pairs;
            _classPrivateFieldSet(_assertThisInitialized(_this), _pairs, (_this$pairs = _classPrivateFieldGet(_assertThisInitialized(_this), _pairs), _this$pairs++, _this$pairs));
            _classPrivateFieldSet(_assertThisInitialized(_this), _flipped, []);
            one.disable();
            two.disable();
            _this.trigger('success', {
              deck: _assertThisInitialized(_this),
              cards: [one, two]
            });
            if (_this.pairs === _this.max) {
              _this.trigger('complete', {
                deck: _assertThisInitialized(_this)
              });
            } else {
              _this.disable(false);
            }
          } else {
            _classPrivateFieldSet(_assertThisInitialized(_this), _flipped, []);
            _this.trigger('failed', {
              deck: _assertThisInitialized(_this),
              cards: [one, two]
            });
          }
        }
      }
    });
    _this.on('failed', function (e) {
      setTimeout(function () {
        e.data.cards.forEach(function (card) {
          return card.toggle();
        });
        _this.disable(false);
      }, 1500);
    });
    return _this;
  }
  _createClass(Deck, [{
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
        _get(_getPrototypeOf(Deck.prototype), "push", this).call(this, card);
        _classPrivateFieldGet(this, _elem).appendChild(card.element);
        card.on('flipped', function (e) {
          _this2.trigger('flipped', e.data);
        });
      }
      return this.length;
    }
  }, {
    key: "shuffle",
    value: function shuffle() {
      var _this3 = this;
      this.forEach(function (card) {
        card.order = Math.floor(Math.random() * _this3.length);
      });
      return this;
    }
  }], [{
    key: "generate",
    value: function generate() {
      var numberOfCards = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4;
      if (!isInt(numberOfCards)) {
        throw new TypeError('numberOfCards must be an integer.');
      }
      var cards = Math.max(4, numberOfCards + numberOfCards % 2),
        available = _toConsumableArray(iconNames),
        labels = new Deck();
      for (var i = 0; i < cards / 2; i++) {
        var rand = Math.floor(Math.random() * available.length),
          label = available[rand];
        available.splice(rand, 1);
        for (var j = 1; j < 3; j++) {
          labels.push(new Card(i * j, label));
        }
      }
      return labels.shuffle();
    }
  }]);
  return Deck;
}( /*#__PURE__*/_wrapNativeSuper(Array));

var app = document.querySelector('#app');

// const timer = new Timer(2000);

// timer.on('tick', e => {

//     const { chrono } = e.data;

//     console.debug((new TimeStamp(chrono.elapsed)).toString());

// });
// timer.on('ended', e => {
//     alert('GAME OVER');
// });

//timer.start();

var deck = Deck.generate(15);
app.appendChild(deck.element);
console.debug(deck);
//# sourceMappingURL=bundle.js.map
