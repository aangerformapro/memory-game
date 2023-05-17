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
function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return exports;
  };
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
    define = function (obj, key, value) {
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
        return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
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
      value: function (method, arg) {
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
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
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
            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
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
    for (var key in object) keys.push(key);
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function () {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function (exception) {
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
    abrupt: function (type, arg) {
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
    complete: function (record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    catch: function (tryLoc) {
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
    delegateYield: function (iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
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
  isUnsignedInt = function isUnsignedInt(param) {
    return param >= 0 && isInt(param);
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
function isHTML(param) {
  return isString(param) && param.startsWith('<') && param.endsWith('>');
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
  var elem = isHTML(tag) ? html2element(tag) : document$1.createElement(tag);
  for (var attr in params) {
    var value = params[attr];
    if (attr === 'html') {
      html = value;
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

/**
 * Generate a unique ID
 * @returns {String}
 */
function uniqid() {
  uniqid.values = uniqid.values || [];
  var value;
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
    }
    if (content.childNodes.length > 1) {
      return _toConsumableArray(content.childNodes);
    } else {
      return content.childNodes[0];
    }
  }
}

var _listeners$1 = /*#__PURE__*/new WeakMap();
var _useasync = /*#__PURE__*/new WeakMap();
var EventManager = /*#__PURE__*/function () {
  function EventManager() {
    var useasync = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    _classCallCheck(this, EventManager);
    _classPrivateFieldInitSpec(this, _listeners$1, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _useasync, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldSet(this, _listeners$1, []);
    _classPrivateFieldSet(this, _useasync, useasync);
  }
  _createClass(EventManager, [{
    key: "getListenersForEvent",
    value: function getListenersForEvent(type) {
      if (!isString(type) || type.includes(' ')) {
        throw new TypeError('Invalid event type, not a String or contains spaces.');
      }
      return _classPrivateFieldGet(this, _listeners$1).filter(function (item) {
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
        _classPrivateFieldGet(_this, _listeners$1).push({
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
        _classPrivateFieldSet(_this2, _listeners$1, _classPrivateFieldGet(_this2, _listeners$1).filter(function (item) {
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
      var listeners = Array.from(_classPrivateFieldGet(this, _listeners$1)),
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
 * Checks for changes in the datastore
 */
var _store = /*#__PURE__*/new WeakMap();
var _key = /*#__PURE__*/new WeakMap();
var _listeners = /*#__PURE__*/new WeakMap();
var _id = /*#__PURE__*/new WeakMap();
var _interval$1 = /*#__PURE__*/new WeakMap();
var _update$1 = /*#__PURE__*/new WeakSet();
var ValueChangeListener = /*#__PURE__*/function () {
  function ValueChangeListener(_store2, key) {
    var interval = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
    _classCallCheck(this, ValueChangeListener);
    _classPrivateMethodInitSpec(this, _update$1);
    _classPrivateFieldInitSpec(this, _store, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _key, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _listeners, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _id, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _interval$1, {
      writable: true,
      value: void 0
    });
    if (_store2 instanceof DataStore === false) {
      throw new TypeError('invalid storage provided');
    }
    if (isEmpty(key) || !isString(key)) {
      throw new TypeError('Key is not a non empty String.');
    }
    if (!isUnsignedInt(interval)) {
      throw new TypeError('Interval can only be a positive integer.');
    }
    _classPrivateFieldSet(this, _interval$1, interval);
    _classPrivateFieldSet(this, _store, _store2);
    _classPrivateFieldSet(this, _key, key);
    _classPrivateFieldSet(this, _id, null);
    _classPrivateFieldSet(this, _listeners, new Set());
  }
  _createClass(ValueChangeListener, [{
    key: "started",
    get: function get() {
      return !isNull(_classPrivateFieldGet(this, _id));
    }
  }, {
    key: "length",
    get: function get() {
      return _classPrivateFieldGet(this, _listeners).size;
    }
  }, {
    key: "add",
    value: function add(listener) {
      if (!isFunction(listener)) {
        throw new TypeError('Listener is not a Function.');
      }
      _classPrivateFieldGet(this, _listeners).add(listener);
      _classPrivateMethodGet(this, _update$1, _update2$1).call(this);
    }
  }, {
    key: "delete",
    value: function _delete(listener) {
      if (!isFunction(listener)) {
        throw new TypeError('Listener is not a Function.');
      }
      _classPrivateFieldGet(this, _listeners).delete(listener);
      _classPrivateMethodGet(this, _update$1, _update2$1).call(this);
    }
  }, {
    key: "clear",
    value: function clear() {
      _classPrivateFieldGet(this, _listeners).clear();
      _classPrivateMethodGet(this, _update$1, _update2$1).call(this);
    }
  }]);
  return ValueChangeListener;
}();
/**
 * The default DataStore interface
 * Implements ValueChangeListener
 */
function _update2$1() {
  return _update3$1.apply(this, arguments);
}
function _update3$1() {
  _update3$1 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
    var _this = this;
    var store, prev;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          if (!(this.length > 0 && !this.started)) {
            _context8.next = 8;
            break;
          }
          store = _classPrivateFieldGet(this, _store);
          _context8.next = 4;
          return store.get(_classPrivateFieldGet(this, _key));
        case 4:
          prev = _context8.sent;
          _classPrivateFieldSet(this, _id, setInterval( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
            var _iterator, _step, listener;
            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.next = 2;
                  return store.get(_classPrivateFieldGet(_this, _key));
                case 2:
                  value = _context7.sent;
                  if (value !== prev) {
                    _iterator = _createForOfIteratorHelper(_classPrivateFieldGet(_this, _listeners));
                    try {
                      for (_iterator.s(); !(_step = _iterator.n()).done;) {
                        listener = _step.value;
                        runAsync(listener, value, _classPrivateFieldGet(_this, _key), store);
                      }
                    } catch (err) {
                      _iterator.e(err);
                    } finally {
                      _iterator.f();
                    }
                  }
                case 4:
                case "end":
                  return _context7.stop();
              }
            }, _callee7);
          })), _classPrivateFieldGet(this, _interval$1)));
          _context8.next = 9;
          break;
        case 8:
          if (this.started) {
            clearInterval(_classPrivateFieldGet(this, _id));
            _classPrivateFieldSet(this, _id, null);
          }
        case 9:
        case "end":
          return _context8.stop();
      }
    }, _callee8, this);
  }));
  return _update3$1.apply(this, arguments);
}
var _listeners2 = /*#__PURE__*/new WeakMap();
var _getListeners = /*#__PURE__*/new WeakSet();
var DataStore = /*#__PURE__*/function () {
  function DataStore() {
    _classCallCheck(this, DataStore);
    _classPrivateMethodInitSpec(this, _getListeners);
    _classPrivateFieldInitSpec(this, _listeners2, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldSet(this, _listeners2, {});
  }
  _createClass(DataStore, [{
    key: "addValueChangeListener",
    value: function addValueChangeListener(name, listener) {
      if (!isFunction(listener)) {
        throw new TypeError('Listener is not a Function.');
      }
      _classPrivateMethodGet(this, _getListeners, _getListeners2).call(this, name).add(listener);
    }
  }, {
    key: "removeValueChangeListener",
    value: function removeValueChangeListener(name, listener) {
      var listeners = _classPrivateMethodGet(this, _getListeners, _getListeners2).call(this, name);
      if (!listener) {
        listeners.clear();
      } else if (isFunction(listener)) {
        listeners.delete(listener);
      }
    }
  }, {
    key: "has",
    value: function () {
      var _has = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(name) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.get(name, null);
            case 2:
              _context.t0 = _context.sent;
              return _context.abrupt("return", _context.t0 !== null);
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function has(_x) {
        return _has.apply(this, arguments);
      }
      return has;
    }()
  }, {
    key: "multiset",
    value: function () {
      var _multiset = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(values) {
        var names, promises, i, name, _value;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(!isPlainObject(values) || isEmpty(values))) {
                _context2.next = 2;
                break;
              }
              throw new TypeError('values is not a non empty Object');
            case 2:
              names = Object.keys(values), promises = [];
              for (i = 0; i < names.length; i++) {
                name = names[i], _value = values[name];
                promises.push(this.set(name, _value));
              }
              _context2.next = 6;
              return Promise.all(promises).then(function () {
                return values;
              });
            case 6:
              return _context2.abrupt("return", _context2.sent);
            case 7:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function multiset(_x2) {
        return _multiset.apply(this, arguments);
      }
      return multiset;
    }()
  }, {
    key: "remove",
    value: function () {
      var _remove = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(name) {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.set(name, null);
            case 2:
              return _context3.abrupt("return", _context3.sent);
            case 3:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function remove(_x3) {
        return _remove.apply(this, arguments);
      }
      return remove;
    }()
  }, {
    key: "set",
    value: function () {
      var _set = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(name, value) {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              throw new Error('set() not implemented');
            case 1:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      function set(_x4, _x5) {
        return _set.apply(this, arguments);
      }
      return set;
    }()
  }, {
    key: "get",
    value: function () {
      var _get = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(name) {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              throw new Error('get() not implemented');
            case 2:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      function get(_x6) {
        return _get.apply(this, arguments);
      }
      return get;
    }()
  }, {
    key: "clear",
    value: function () {
      var _clear = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              throw new Error('clear() not implemented');
            case 1:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }));
      function clear() {
        return _clear.apply(this, arguments);
      }
      return clear;
    }()
  }]);
  return DataStore;
}();
function _getListeners2(name) {
  var _classPrivateFieldGet2, _classPrivateFieldGet3;
  if (isEmpty(name) || !isString(name)) {
    throw new TypeError('Name is not a non empty String.');
  }
  return (_classPrivateFieldGet3 = (_classPrivateFieldGet2 = _classPrivateFieldGet(this, _listeners2))[name]) !== null && _classPrivateFieldGet3 !== void 0 ? _classPrivateFieldGet3 : _classPrivateFieldGet2[name] = new ValueChangeListener(this, name);
}

// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }
  return getRandomValues(rnds8);
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

var randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var native = {
  randomUUID: randomUUID
};

function v4(options, buf, offset) {
  if (native.randomUUID && !buf && !options) {
    return native.randomUUID();
  }
  options = options || {};
  var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;
    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return unsafeStringify(rnds);
}

/**
 * Reads or generates UUID for Storage prefix
 * 
 * @returns String
 */
function __UUID__() {
  var key = 'NGSOFT:WebStorage:UUID',
    result = localStorage.getItem(key);
  if (result === null) {
    localStorage.setItem(key, result = v4());
  }
  return result;
}
var _storage = /*#__PURE__*/new WeakMap();
var _prefix = /*#__PURE__*/new WeakMap();
var WebStorage = /*#__PURE__*/function (_DataStore) {
  _inherits(WebStorage, _DataStore);
  var _super = _createSuper(WebStorage);
  function WebStorage(webstorage, prefix) {
    var _webstorage, _prefix2;
    var _this;
    _classCallCheck(this, WebStorage);
    _this = _super.call(this);
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
    _classPrivateFieldSet(_assertThisInitialized(_this), _prefix, (_prefix2 = prefix) !== null && _prefix2 !== void 0 ? _prefix2 : prefix = __UUID__() + ':');
    return _this;
  }
  _createClass(WebStorage, [{
    key: "get",
    value: function () {
      var _get = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(name) {
        var defaultValue,
          value,
          _args = arguments;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              defaultValue = _args.length > 1 && _args[1] !== undefined ? _args[1] : null;
              if (!(!isString(name) || isEmpty(name))) {
                _context.next = 3;
                break;
              }
              throw new TypeError('name is not a non empty string');
            case 3:
              value = _classPrivateFieldGet(this, _storage).getItem(_classPrivateFieldGet(this, _prefix) + name);
              if (isString(value)) {
                _context.next = 6;
                break;
              }
              return _context.abrupt("return", defaultValue);
            case 6:
              return _context.abrupt("return", JSON$2.parse(value));
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function get(_x) {
        return _get.apply(this, arguments);
      }
      return get;
    }()
  }, {
    key: "set",
    value: function () {
      var _set = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(name, value) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(!isString(name) || isEmpty(name))) {
                _context2.next = 2;
                break;
              }
              throw new TypeError('name is not a non empty string');
            case 2:
              if (!isUndef(value)) {
                _context2.next = 4;
                break;
              }
              throw new TypeError('value is undefined');
            case 4:
              if (value === null) {
                _classPrivateFieldGet(this, _storage).removeItem(_classPrivateFieldGet(this, _prefix) + name);
              } else {
                _classPrivateFieldGet(this, _storage).setItem(_classPrivateFieldGet(this, _prefix) + name, JSON$2.stringify(value));
              }
              return _context2.abrupt("return", {
                name: name,
                value: value
              });
            case 6:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function set(_x2, _x3) {
        return _set.apply(this, arguments);
      }
      return set;
    }()
  }, {
    key: "clear",
    value: function () {
      var _clear = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var prefix, store, promises, keys, i, name;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              prefix = _classPrivateFieldGet(this, _prefix), store = _classPrivateFieldGet(this, _storage), promises = [], keys = [];
              for (i = 0; i < store.length; i++) {
                name = store.key(i);
                if (name.indexOf(prefix) === 0 || isEmpty(prefix)) {
                  name = name.substring(prefix.length);
                  keys.push(name);
                  promises.push(this.remove(name));
                }
              }
              return _context3.abrupt("return", Promise.all(promises).then(function () {
                return keys;
              }));
            case 3:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function clear() {
        return _clear.apply(this, arguments);
      }
      return clear;
    }()
  }]);
  return WebStorage;
}(DataStore);
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

var defaults = {
    difficulty: 4,
    timeout: 0,
    lives: 0,
    matched: 1
  },
  keys = Object.keys(defaults);
var Settings = /*#__PURE__*/function () {
  function Settings() {
    _classCallCheck(this, Settings);
  }
  _createClass(Settings, null, [{
    key: "difficulty",
    get: function get() {
      return new Promise(function (resolve) {
        LocalStore.get('difficulty', defaults.difficulty).then(resolve);
      });
    },
    set: function set(difficulty) {
      return new Promise(function (resolve) {
        LocalStore.set('difficulty', difficulty).then(resolve);
      });
    }
  }, {
    key: "timeout",
    get: function get() {
      return new Promise(function (resolve) {
        LocalStore.get('timeout', defaults.timeout).then(resolve);
      });
    },
    set: function set(timeout) {
      return new Promise(function (resolve) {
        LocalStore.set('timeout', timeout).then(resolve);
      });
    }
  }, {
    key: "lives",
    get: function get() {
      return new Promise(function (resolve) {
        LocalStore.get('lives', defaults.lives).then(resolve);
      });
    },
    set: function set(lives) {
      return new Promise(function (resolve) {
        LocalStore.set('lives', lives).then(resolve);
      });
    }
  }, {
    key: "matched",
    get: function get() {
      return new Promise(function (resolve) {
        LocalStore.get('matched', defaults.matched).then(resolve);
      });
    },
    set: function set(matched) {
      return new Promise(function (resolve) {
        LocalStore.set('matched', matched).then(resolve);
      });
    }
  }, {
    key: "settings",
    get: function get() {
      var _this = this;
      return new Promise(function (resolve) {
        Promise.all(keys.map(function (key) {
          return _this[key];
        })).then(function (values) {
          var result = {};
          keys.forEach(function (key, index) {
            result[key] = values[index];
          });
          resolve(result);
        });
      });
    }
  }]);
  return Settings;
}();
var DialogSettings = /*#__PURE__*/_createClass(function DialogSettings() {
  var _this2 = this;
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
      max: 10,
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
    form = createElement('<form action="#"/>', {
      onsubmit: function onsubmit(e) {
        e.preventDefault();
      }
    }, [difficultyRange.element, timeoutRange.element, livesRange.element, matchedRange.element]),
    elements = {
      form: form,
      difficultyRange: difficultyRange,
      timeoutRange: timeoutRange,
      livesRange: livesRange,
      matchedRange: matchedRange
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

  Settings.settings.then(function (settings) {
    for (var key in settings) {
      var value = settings[key],
        range = key + 'Range';
      if (elements[range]) {
        elements[range].value = value;
      }
    }
    _this2.trigger('loaded', {
      dialog: dialog,
      settings: settings
    });
    form.addEventListener('change', function () {
      changed = loaded;
    });
  });
  dialog.onSave(function (e) {
    Promise.all(keys.map(function (key) {
      var range = key + 'Range',
        value;
      if (elements[range]) {
        value = elements[range].value;
      }
      console.debug(key, value);
      return Settings[key] = value;
    })).then(function (values) {
      var settings = {};
      keys.forEach(function (key, index) {
        settings[key] = values[index];
      });
      if (changed) {
        _this2.trigger('update', {
          dialog: dialog,
          settings: settings
        });
      }
      _this2.trigger('save', {
        dialog: dialog,
        settings: settings
      });
      changed = false;
    });
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
    _classPrivateFieldSet(this, _elem, createElement('div', {
      class: 'memory-game-area border border-top-0'
    }));
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
              _classPrivateFieldGet(_this, _elem).classList.add('complete');
              _this.trigger('complete', {
                deck: _this
              });
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
      setTimeout(function () {
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
      _classPrivateFieldGet(_this, _elem).classList.add('gameover');
      //new game
      //this.disable(false);
    });

    this.trigger('displayed', {
      deck: this
    });
    dataset(_classPrivateFieldGet(this, _elem), 'grid', this.grid);
  }
  _createClass(Deck, [{
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
        _classPrivateFieldGet(this, _elem).appendChild(card.element);
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
      _classPrivateFieldGet(this, _elem).innerHTML = '';
      _classPrivateFieldGet(this, _cards).forEach(function (card) {
        return _classPrivateFieldGet(_this3, _elem).appendChild(card.element);
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
      pairs = createElement('td', '0'),
      vies = createElement('td', '&infin;'),
      timer = this.timer = new Clock(),
      countdown = this.countdown = new CountDownClock(timer, settings.timeout * MINUTE),
      root = createElement('<table class="table table-fixed table-bordered text-center mb-0 game-stats">', ['<thead><tr><th>Cartes</th><th>Tour</th><th>Paires</th><th>Vies</th><th>Timer</th></tr></thead>', createElement('tbody', [createElement('tr', [createElement('td', encode(deck.length)), tour, pairs, vies, createElement('td', timer.element)]), createElement('tr', [createElement('<td colspan="5"/>', countdown.element)])])]);
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
      _this.pairs = deck.pairs;
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
        setTimeout(function () {
          one.matched = true;
          two.matched = true;
        }, 2000);
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
      _classPrivateMethodGet(this, _update, _update2).call(this);
      this.chrono.pause();
    }
  }, {
    key: "resume",
    value: function resume() {
      this.chrono.resume();
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
    Settings.settings.then(function (settings) {
      return _this.start(settings);
    });
  }
  _createClass(Game, [{
    key: "destroy",
    value: function destroy() {
      this.stats.destroy();
    }
  }, {
    key: "start",
    value: function start(settings) {
      var _this2 = this;
      if (this.stats) {
        this.destroy();
      }
      var difficulty = settings.difficulty,
        container = this.container;
      var deck = this.deck = Deck.generateGrid(difficulty),
        stats = this.stats = new Stats(deck, settings);
      container.appendChild(stats.element);
      container.appendChild(deck.element);
      deck.element.addEventListener('click', function (e) {
        if (deck.isGameOver() || deck.complete) {
          _this2.start(settings);
        }
      });
    }
  }, {
    key: "pause",
    value: function pause() {
      if (!_classPrivateFieldGet(this, _paused)) {
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
console.debug(document.querySelectorAll('[data-toggle="tooltip"]'));
var app = document.querySelector('#app'),
  game = new Game(app),
  settingsUI = new DialogSettings();
document.body.appendChild(settingsUI.element);
settingsUI.on('update', function (e) {
  var settings = e.data.settings;
  game.start(settings);
});
settingsUI.dialog.onShow(function (e) {
  game.pause();
});
settingsUI.dialog.onHidden(function (e) {
  console.debug(e, game);
  game.resume();
});
//# sourceMappingURL=bundle.js.map
