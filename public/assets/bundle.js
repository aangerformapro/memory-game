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

function computeTime(start) {
  var elapsed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return +new Date() - start + elapsed;
}
var _startTime = /*#__PURE__*/new WeakMap();
var _running = /*#__PURE__*/new WeakMap();
var _elapsedTime = /*#__PURE__*/new WeakMap();
var _laps = /*#__PURE__*/new WeakMap();
var Chronometer = /*#__PURE__*/function () {
  function Chronometer() {
    _classCallCheck(this, Chronometer);
    _classPrivateFieldInitSpec(this, _startTime, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _running, {
      writable: true,
      value: false
    });
    _classPrivateFieldInitSpec(this, _elapsedTime, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _laps, {
      writable: true,
      value: []
    });
    this.start();
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
      if (!this.running) {
        return _classPrivateFieldGet(this, _elapsedTime);
      }
      this.running = false;
      return _classPrivateFieldSet(this, _elapsedTime, computeTime(_classPrivateFieldGet(this, _startTime)));
    }
  }, {
    key: "lap",
    value: function lap() {
      var _classPrivateFieldGet2, _classPrivateFieldGet3;
      if (!this.isStarted()) {
        return _classPrivateFieldGet(this, _laps)[_classPrivateFieldGet(this, _laps).length - 1];
      }
      var prev = (_classPrivateFieldGet2 = (_classPrivateFieldGet3 = _classPrivateFieldGet(this, _laps)[_classPrivateFieldGet(this, _laps).length - 1]) === null || _classPrivateFieldGet3 === void 0 ? void 0 : _classPrivateFieldGet3.elapsed) !== null && _classPrivateFieldGet2 !== void 0 ? _classPrivateFieldGet2 : _classPrivateFieldGet(this, _startTime),
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
    key: "elapsed",
    get: function get() {
      return computeTime(_classPrivateFieldGet(this, _startTime));
    }
  }]);
  return Chronometer;
}();
function formatTime(ms) {
  var tens, seconds;
  seconds = Math.floor(ms / 1000);
  tens = Math.floor((ms - seconds * 1000) / 10);
  if (tens < 10) {
    tens = '0' + tens;
  }
  console.debug(seconds, tens);
}

var chrono = new Chronometer();
console.log(chrono);
setInterval(function () {
  formatTime(chrono.lap().elapsed);
}, 20);
//# sourceMappingURL=bundle.js.map
