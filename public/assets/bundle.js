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
global.document;
  global.JSON;
var isString = function isString(param) {
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
var _paused = /*#__PURE__*/new WeakMap();
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
    _classPrivateFieldInitSpec(this, _paused, {
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
      _classPrivateFieldSet(this, _paused, true);
      if (!_classPrivateFieldGet(this, _running)) {
        return _classPrivateFieldGet(this, _elapsedTime);
      }
      return this.stop();
    }
  }, {
    key: "resume",
    value: function resume() {
      if (!_classPrivateFieldGet(this, _paused)) {
        return;
      }
      _classPrivateFieldSet(this, _paused, false);
      _classPrivateFieldSet(this, _startTime, computeTime(_classPrivateFieldGet(this, _elapsedTime)));
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
      return this.isStarted() && _classPrivateFieldGet(this, _paused);
    }
  }, {
    key: "elapsed",
    get: function get() {
      if (this.isStarted) {
        return computeTime(_classPrivateFieldGet(this, _startTime));
      }
      return _classPrivateFieldGet(this, _elapsedTime);
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
var _duration = /*#__PURE__*/new WeakMap();
var _ticks = /*#__PURE__*/new WeakMap();
var _chrono = /*#__PURE__*/new WeakMap();
var _timeout = /*#__PURE__*/new WeakMap();
var _interval = /*#__PURE__*/new WeakMap();
var Timer = /*#__PURE__*/function () {
  function Timer() {
    var _this = this;
    var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : MINUTE;
    var ticks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
    _classCallCheck(this, Timer);
    _classPrivateFieldInitSpec(this, _duration, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _ticks, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _chrono, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _timeout, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _interval, {
      writable: true,
      value: void 0
    });
    if (!isInt(duration)) {
      throw new TypeError('duration must be an integer');
    }
    if (!isInt(ticks)) {
      throw new TypeError('ticks must be an integer');
    }
    _classPrivateFieldSet(this, _duration, duration);
    _classPrivateFieldSet(this, _ticks, ticks);
    _classPrivateFieldSet(this, _chrono, new Chronometer(false));
    EventManager.mixin(this);
    this.on('ended', function () {
      _this.stop();
    });
  }
  _createClass(Timer, [{
    key: "started",
    get: function get() {
      return _classPrivateFieldGet(this, _chrono).isStarted();
    }
  }, {
    key: "paused",
    get: function get() {
      return _classPrivateFieldGet(this, _chrono).isPaused();
    }
  }, {
    key: "elapsed",
    get: function get() {
      return _classPrivateFieldGet(this, _chrono).elapsed;
    }
  }, {
    key: "start",
    value: function start() {
      var _this2 = this;
      if (this.started) {
        return;
      }
      _classPrivateFieldSet(this, _timeout, setTimeout(function () {
        _this2.trigger('ended');
      }, _classPrivateFieldGet(this, _duration)));
      _classPrivateFieldSet(this, _interval, setInterval(function () {
        _this2.trigger('tick', {
          chrono: _classPrivateFieldGet(_this2, _chrono),
          timer: _this2
        });
      }, _classPrivateFieldGet(this, _ticks)));
      this.trigger('started');
      _classPrivateFieldGet(this, _chrono).start();
    }
  }, {
    key: "stop",
    value: function stop() {
      if (!this.started) {
        return _classPrivateFieldGet(this, _chrono).stop();
      }
      clearTimeout(_classPrivateFieldGet(this, _timeout));
      clearInterval(_classPrivateFieldGet(this, _interval));
      this.trigger('stopped');
      return _classPrivateFieldGet(this, _chrono).stop();
    }
  }, {
    key: "pause",
    value: function pause() {
      if (this.paused || !this.started) {
        return this.elapsed;
      }
      clearTimeout(_classPrivateFieldGet(this, _timeout));
      clearInterval(_classPrivateFieldGet(this, _interval));
      this.trigger('paused');
      return _classPrivateFieldGet(this, _chrono).pause();
    }
  }, {
    key: "resume",
    value: function resume() {
      var _this3 = this;
      if (!this.paused) {
        return;
      }
      var timeout = _classPrivateFieldGet(this, _duration) - this.elapsed;
      _classPrivateFieldSet(this, _interval, setInterval(function () {
        _this3.trigger('tick', {
          chrono: _classPrivateFieldGet(_this3, _chrono),
          timer: _this3
        });
      }, _classPrivateFieldGet(this, _ticks)));
      _classPrivateFieldSet(this, _timeout, setTimeout(function () {
        _this3.trigger('ended');
      }, timeout));
    }
  }]);
  return Timer;
}();

var timer = new Timer(2000);
timer.on('tick', function (e) {
  var chrono = e.data.chrono;
  console.debug(new TimeStamp(chrono.elapsed).toString());
});
timer.on('ended', function (e) {
  alert('GAME OVER');
});
timer.start();
//# sourceMappingURL=bundle.js.map
