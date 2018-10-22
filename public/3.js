webpackJsonp([3],{

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(135)
/* template */
var __vue_template__ = __webpack_require__(136)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "front_end/components/VWidget.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-32edf1d9", Component.options)
  } else {
    hotAPI.reload("data-v-32edf1d9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "v-widget",
  props: {
    title: {
      type: String
    },
    enableHeader: {
      type: Boolean,
      default: true
    },
    contentBg: {
      type: String,
      default: "white"
    }
  },

  data: function data() {
    return {};
  },

  computed: {}
});

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "v-widget" } },
    [
      _c(
        "v-card",
        [
          _vm.enableHeader
            ? _c(
                "v-toolbar",
                {
                  attrs: { color: "transparent", flat: "", dense: "", card: "" }
                },
                [
                  _c("v-toolbar-title", [
                    _c("h4", [_vm._v(_vm._s(_vm.title))])
                  ]),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _vm._t("widget-header-action")
                ],
                2
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.enableHeader ? _c("v-divider") : _vm._e(),
          _vm._v(" "),
          _c(
            "v-card-text",
            { class: _vm.contentBg },
            [_vm._t("widget-content")],
            2
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-32edf1d9", module.exports)
  }
}

/***/ }),

/***/ 137:
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ 138:
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(142)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ 140:
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ 142:
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ 143:
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(160);
var defined = __webpack_require__(150);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ 146:
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ 150:
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(153);
var createDesc = __webpack_require__(156);
module.exports = __webpack_require__(139) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(140);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(152);
var IE8_DOM_DEFINE = __webpack_require__(175);
var toPrimitive = __webpack_require__(176);
var dP = Object.defineProperty;

exports.f = __webpack_require__(139) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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

/***/ 156:
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

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(165)('keys');
var uid = __webpack_require__(167);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(138);
var core = __webpack_require__(137);
var ctx = __webpack_require__(161);
var hide = __webpack_require__(151);
var has = __webpack_require__(143);
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

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(163);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(174);
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

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(140);
var document = __webpack_require__(138).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ 163:
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(146);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(137);
var global = __webpack_require__(138);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(166) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ 166:
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ 167:
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ 168:
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(165)('wks');
var uid = __webpack_require__(167);
var Symbol = __webpack_require__(138).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(177);
var enumBugKeys = __webpack_require__(168);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ 174:
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(139) && !__webpack_require__(142)(function () {
  return Object.defineProperty(__webpack_require__(162)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(140);
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

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(143);
var toIObject = __webpack_require__(145);
var arrayIndexOf = __webpack_require__(178)(false);
var IE_PROTO = __webpack_require__(157)('IE_PROTO');

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

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(145);
var toLength = __webpack_require__(164);
var toAbsoluteIndex = __webpack_require__(179);
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

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(146);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(150);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ 198:
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(477)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(306)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(153).f;
var has = __webpack_require__(143);
var TAG = __webpack_require__(172)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(166);
var $export = __webpack_require__(159);
var redefine = __webpack_require__(478);
var hide = __webpack_require__(151);
var Iterators = __webpack_require__(198);
var $iterCreate = __webpack_require__(479);
var setToStringTag = __webpack_require__(305);
var getPrototypeOf = __webpack_require__(483);
var ITERATOR = __webpack_require__(172)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(308);
var ITERATOR = __webpack_require__(172)('iterator');
var Iterators = __webpack_require__(198);
module.exports = __webpack_require__(137).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(163);
var TAG = __webpack_require__(172)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ 474:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(475);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),

/***/ 475:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(476), __esModule: true };

/***/ }),

/***/ 476:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(304);
__webpack_require__(484);
module.exports = __webpack_require__(137).Array.from;


/***/ }),

/***/ 477:
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(146);
var defined = __webpack_require__(150);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ 478:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(151);


/***/ }),

/***/ 479:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(480);
var descriptor = __webpack_require__(156);
var setToStringTag = __webpack_require__(305);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(151)(IteratorPrototype, __webpack_require__(172)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ 480:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(152);
var dPs = __webpack_require__(481);
var enumBugKeys = __webpack_require__(168);
var IE_PROTO = __webpack_require__(157)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(162)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(482).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ 481:
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(153);
var anObject = __webpack_require__(152);
var getKeys = __webpack_require__(173);

module.exports = __webpack_require__(139) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ 482:
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(138).document;
module.exports = document && document.documentElement;


/***/ }),

/***/ 483:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(143);
var toObject = __webpack_require__(181);
var IE_PROTO = __webpack_require__(157)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ 484:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(161);
var $export = __webpack_require__(159);
var toObject = __webpack_require__(181);
var call = __webpack_require__(485);
var isArrayIter = __webpack_require__(486);
var toLength = __webpack_require__(164);
var createProperty = __webpack_require__(487);
var getIterFn = __webpack_require__(307);

$export($export.S + $export.F * !__webpack_require__(488)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ 485:
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(152);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ 486:
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(198);
var ITERATOR = __webpack_require__(172)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ 487:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(153);
var createDesc = __webpack_require__(156);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ 488:
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(172)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_VWidget__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_VWidget___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_VWidget__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VWidget: __WEBPACK_IMPORTED_MODULE_1__components_VWidget___default.a
  },
  data: function data() {
    return {
      chips: ['Programming', 'Watching', 'Sleeping'],
      chip1: true,
      chip2: true
    };
  },

  computed: {},
  methods: {
    remove: function remove(item) {
      this.chips.splice(this.chips.indexOf(item), 1);
      this.chips = [].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(this.chips));
    }
  }
});

/***/ }),

/***/ 600:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "page-chips" } },
    [
      _c(
        "v-container",
        { attrs: { "grid-list-xl": "", fluid: "" } },
        [
          _c(
            "v-layout",
            { attrs: { row: "", wrap: "" } },
            [
              _c(
                "v-flex",
                { attrs: { lg6: "" } },
                [
                  _c("v-widget", { attrs: { title: "Icon Chip" } }, [
                    _c(
                      "div",
                      {
                        attrs: { slot: "widget-content" },
                        slot: "widget-content"
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "text-xs-center" },
                          [
                            _c(
                              "v-chip",
                              {
                                attrs: {
                                  color: "indigo",
                                  "text-color": "white"
                                }
                              },
                              [
                                _c(
                                  "v-avatar",
                                  [_c("v-icon", [_vm._v("account_circle")])],
                                  1
                                ),
                                _vm._v(
                                  "\n                Ranee\n              "
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-chip",
                              {
                                attrs: {
                                  color: "orange",
                                  "text-color": "white"
                                }
                              },
                              [
                                _vm._v(
                                  "\n                Premium\n                "
                                ),
                                _c("v-icon", { attrs: { right: "" } }, [
                                  _vm._v("star")
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-chip",
                              {
                                attrs: {
                                  color: "primary",
                                  "text-color": "white"
                                }
                              },
                              [
                                _vm._v(
                                  "\n                1 Year\n                "
                                ),
                                _c("v-icon", { attrs: { right: "" } }, [
                                  _vm._v("cake")
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-chip",
                              {
                                attrs: { color: "green", "text-color": "white" }
                              },
                              [
                                _c(
                                  "v-avatar",
                                  { staticClass: "green darken-4" },
                                  [_vm._v("1")]
                                ),
                                _vm._v(
                                  "\n                Years\n              "
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-chip",
                              {
                                attrs: {
                                  close: "",
                                  color: "teal",
                                  "text-color": "white"
                                },
                                model: {
                                  value: _vm.chip1,
                                  callback: function($$v) {
                                    _vm.chip1 = $$v
                                  },
                                  expression: "chip1"
                                }
                              },
                              [
                                _c(
                                  "v-avatar",
                                  [_c("v-icon", [_vm._v("check_circle")])],
                                  1
                                ),
                                _vm._v(
                                  "\n                Confirmed\n              "
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-widget",
                    { staticClass: "mt-3", attrs: { title: "Colored Chip" } },
                    [
                      _c(
                        "div",
                        {
                          attrs: { slot: "widget-content" },
                          slot: "widget-content"
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "text-xs-center" },
                            [
                              _c(
                                "v-chip",
                                {
                                  attrs: {
                                    color: "primary",
                                    "text-color": "white"
                                  }
                                },
                                [_vm._v("Primary")]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-chip",
                                {
                                  attrs: {
                                    color: "secondary",
                                    "text-color": "white"
                                  }
                                },
                                [_vm._v("Secondary")]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-chip",
                                {
                                  attrs: { color: "red", "text-color": "white" }
                                },
                                [_vm._v("Colored Chip")]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-chip",
                                {
                                  attrs: {
                                    color: "green",
                                    "text-color": "white"
                                  }
                                },
                                [_vm._v("Colored Chip")]
                              )
                            ],
                            1
                          )
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-widget",
                    { staticClass: "mt-3", attrs: { title: "Outline Chip" } },
                    [
                      _c(
                        "div",
                        {
                          attrs: { slot: "widget-content" },
                          slot: "widget-content"
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "text-xs-center" },
                            [
                              _c(
                                "v-chip",
                                { attrs: { color: "primary", outline: "" } },
                                [_vm._v("Primary")]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-chip",
                                { attrs: { color: "secondary", outline: "" } },
                                [_vm._v("Secondary")]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-chip",
                                { attrs: { color: "red", outline: "" } },
                                [_vm._v("Colored Chip")]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-chip",
                                { attrs: { color: "green", outline: "" } },
                                [_vm._v("Colored Chip")]
                              )
                            ],
                            1
                          )
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-widget",
                    { staticClass: "mt-3", attrs: { title: "Lable Chip" } },
                    [
                      _c(
                        "div",
                        {
                          attrs: { slot: "widget-content" },
                          slot: "widget-content"
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "text-xs-center" },
                            [
                              _c("v-chip", { attrs: { label: "" } }, [
                                _vm._v("Label")
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-chip",
                                {
                                  attrs: {
                                    label: "",
                                    color: "pink",
                                    "text-color": "white"
                                  }
                                },
                                [
                                  _c("v-icon", { attrs: { left: "" } }, [
                                    _vm._v("label")
                                  ]),
                                  _vm._v("Tags\n              ")
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-chip",
                                {
                                  attrs: {
                                    label: "",
                                    outline: "",
                                    color: "red"
                                  }
                                },
                                [_vm._v("Outline")]
                              )
                            ],
                            1
                          )
                        ]
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { lg6: "" } },
                [
                  _c("v-widget", { attrs: { title: "Basic Usage" } }, [
                    _c(
                      "div",
                      {
                        attrs: { slot: "widget-content" },
                        slot: "widget-content"
                      },
                      [
                        _c(
                          "v-container",
                          { staticClass: "pa-0", attrs: { fluid: "" } },
                          [
                            _c(
                              "v-layout",
                              { attrs: { row: "", wrap: "" } },
                              [
                                _c("v-flex", { attrs: { md6: "", sm12: "" } }, [
                                  _c(
                                    "div",
                                    { staticClass: "text-xs-center" },
                                    [
                                      _c(
                                        "v-chip",
                                        {
                                          attrs: { close: "" },
                                          model: {
                                            value: _vm.chip2,
                                            callback: function($$v) {
                                              _vm.chip2 = $$v
                                            },
                                            expression: "chip2"
                                          }
                                        },
                                        [_vm._v("Example Chip")]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "text-xs-center" },
                                    [_c("v-chip", [_vm._v("Example Chip")])],
                                    1
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  { attrs: { md6: "", sm12: "", xs12: "" } },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "text-xs-center" },
                                      [
                                        _c(
                                          "v-chip",
                                          { attrs: { close: "" } },
                                          [
                                            _c("v-avatar", [
                                              _c("img", {
                                                attrs: {
                                                  src:
                                                    "https://randomuser.me/api/portraits/men/35.jpg",
                                                  alt: "trevor"
                                                }
                                              })
                                            ]),
                                            _vm._v(
                                              "\n                      Trevor Hansen\n                    "
                                            )
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "text-xs-center" },
                                      [
                                        _c(
                                          "v-chip",
                                          [
                                            _c(
                                              "v-avatar",
                                              { staticClass: "teal" },
                                              [_vm._v("A")]
                                            ),
                                            _vm._v(
                                              "\n                      ANZ Bank\n                    "
                                            )
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-widget",
                    { staticClass: "mt-3", attrs: { title: "Complex usage" } },
                    [
                      _c(
                        "div",
                        {
                          attrs: { slot: "widget-content" },
                          slot: "widget-content"
                        },
                        [
                          _c("v-select", {
                            attrs: {
                              label: "Your favorite hobbies",
                              chips: "",
                              tags: "",
                              solo: "",
                              "prepend-icon": "filter_list",
                              "append-icon": "",
                              clearable: ""
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "selection",
                                fn: function(data) {
                                  return [
                                    _c(
                                      "v-chip",
                                      {
                                        attrs: {
                                          close: "",
                                          selected: data.selected
                                        },
                                        on: {
                                          input: function($event) {
                                            _vm.remove(data.item)
                                          }
                                        }
                                      },
                                      [
                                        _c("strong", [
                                          _vm._v(_vm._s(data.item))
                                        ]),
                                        _vm._v(" \n                  "),
                                        _c("span", [_vm._v("(interest)")])
                                      ]
                                    )
                                  ]
                                }
                              }
                            ]),
                            model: {
                              value: _vm.chips,
                              callback: function($$v) {
                                _vm.chips = $$v
                              },
                              expression: "chips"
                            }
                          })
                        ],
                        1
                      )
                    ]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-416d64d4", module.exports)
  }
}

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(599)
/* template */
var __vue_template__ = __webpack_require__(600)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "front_end/pages/ui/Chip.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-416d64d4", Component.options)
  } else {
    hotAPI.reload("data-v-416d64d4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});