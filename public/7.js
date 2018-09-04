webpackJsonp([7],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(605)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(607)
/* template */
var __vue_template__ = __webpack_require__(608)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
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
Component.options.__file = "front_end/pages/ui/Colors.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-20031ff8", Component.options)
  } else {
    hotAPI.reload("data-v-20031ff8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 126:
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ 127:
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(131)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ 129:
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ 131:
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ 132:
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(149);
var defined = __webpack_require__(139);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ 135:
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ 139:
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(142);
var createDesc = __webpack_require__(145);
module.exports = __webpack_require__(128) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(129);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(141);
var IE8_DOM_DEFINE = __webpack_require__(164);
var toPrimitive = __webpack_require__(165);
var dP = Object.defineProperty;

exports.f = __webpack_require__(128) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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

/***/ 145:
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

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(154)('keys');
var uid = __webpack_require__(156);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(127);
var core = __webpack_require__(126);
var ctx = __webpack_require__(150);
var hide = __webpack_require__(140);
var has = __webpack_require__(132);
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

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(152);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(163);
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

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(129);
var document = __webpack_require__(127).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ 152:
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(135);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(126);
var global = __webpack_require__(127);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(155) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ 155:
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ 156:
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ 157:
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(166);
var enumBugKeys = __webpack_require__(157);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ 163:
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(128) && !__webpack_require__(131)(function () {
  return Object.defineProperty(__webpack_require__(151)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(129);
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

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(132);
var toIObject = __webpack_require__(134);
var arrayIndexOf = __webpack_require__(167)(false);
var IE_PROTO = __webpack_require__(146)('IE_PROTO');

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

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(134);
var toLength = __webpack_require__(153);
var toAbsoluteIndex = __webpack_require__(168);
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

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(135);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(139);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ 477:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(478), __esModule: true };

/***/ }),

/***/ 478:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(479);
module.exports = __webpack_require__(126).Object.keys;


/***/ }),

/***/ 479:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(170);
var $keys = __webpack_require__(162);

__webpack_require__(480)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ 480:
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(148);
var core = __webpack_require__(126);
var fails = __webpack_require__(131);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ 605:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(606);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("4fe50d20", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-20031ff8\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/stylus-loader/index.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Colors.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-20031ff8\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/stylus-loader/index.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Colors.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 606:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n#colors-page .flex {\n  margin: 1rem 0;\n}\n#colors-page .card {\n  color: #fff;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n  padding: 1rem;\n  border-radius: 0;\n}\n#colors-page .card .card__text h3 {\n  color: #fff;\n  -ms-flex-item-align: start;\n      align-self: flex-start;\n  font-size: 1.5rem;\n  margin: 0;\n}\n#colors-page .card__text {\n  padding: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ 607:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuetify_es5_util_colors__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuetify_es5_util_colors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuetify_es5_util_colors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(11);

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
  data: function data() {
    return {
      colors: __WEBPACK_IMPORTED_MODULE_1_vuetify_es5_util_colors___default.a,
      search: ''
    };
  },

  computed: {
    computedColors: function computedColors() {
      var _this = this;

      var colors = {};
      var search = this.search.toLowerCase();

      __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(this.colors).forEach(function (key) {
        var kebabKey = __WEBPACK_IMPORTED_MODULE_2__util__["a" /* default */].kebab(key).toLowerCase();

        if (kebabKey.indexOf(search) > -1) {
          colors[kebabKey] = _this.colors[key];
        }
      });

      return colors;
    }
  },

  methods: {
    endStr: function endStr(str) {
      return str[str.length - 1];
    },
    convertToClass: function convertToClass(str) {
      var end = this.endStr(str);
      var sub = str.substr(0, str.length - 1);

      if (isNaN(parseInt(end, 10))) return str;

      return sub + '-' + end;
    },
    getColorClass: function getColorClass(key) {
      if (['white', 'transparent'].includes(key) || key.indexOf('light') > -1 || key.indexOf('accent') > -1) return 'black--text';

      return 'white--text';
    }
  }
});

/***/ }),

/***/ 608:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    { attrs: { id: "page-colors", fluid: "", "grid-list-xl": "" } },
    [
      _c(
        "v-layout",
        { attrs: { row: "", wrap: "" } },
        [
          _c(
            "v-flex",
            { staticClass: "mb-3", attrs: { xs12: "" } },
            [
              _c("v-text-field", {
                attrs: {
                  "prepend-icon": "filter_list",
                  solo: "solo",
                  label: "Search Materil Colors",
                  "single-line": "single-line"
                },
                model: {
                  value: _vm.search,
                  callback: function($$v) {
                    _vm.search = $$v
                  },
                  expression: "search"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _vm._l(_vm.computedColors, function(color, key) {
            return _c(
              "v-flex",
              { key: key, attrs: { xs12: "", sm6: "", md4: "" } },
              [
                _c(
                  "v-card",
                  { attrs: { color: key, tile: "tile" } },
                  [
                    _c("v-card-text", [
                      _c("h3", { staticClass: "white--text" }, [
                        _vm._v(_vm._s(key))
                      ])
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _vm._l(color, function(subColor, key2) {
                  return _c(
                    "v-card",
                    {
                      key: key2,
                      class: _vm.getColorClass(key2),
                      attrs: {
                        color: key + " " + _vm.convertToClass(key2),
                        tile: "tile"
                      }
                    },
                    [
                      _c(
                        "v-card-text",
                        [
                          _c(
                            "v-layout",
                            [
                              _c(
                                "v-flex",
                                {
                                  staticClass: "caption",
                                  attrs: { xs8: "xs8" }
                                },
                                [
                                  key !== "shades"
                                    ? _c("span", [_vm._v(_vm._s(key) + " ")])
                                    : _vm._e(),
                                  key2 !== "base"
                                    ? _c("span", [
                                        _vm._v(
                                          _vm._s(
                                            key2.replace(/(.*)(\d)/, "$1-$2")
                                          )
                                        )
                                      ])
                                    : _vm._e()
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-flex",
                                {
                                  staticClass: "text-xs-right",
                                  attrs: { xs4: "xs4" }
                                },
                                [
                                  subColor !== "transparent"
                                    ? _c("span", [
                                        _vm._v(_vm._s(subColor.toUpperCase()))
                                      ])
                                    : _vm._e()
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
                })
              ],
              2
            )
          })
        ],
        2
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
    require("vue-hot-reload-api")      .rerender("data-v-20031ff8", module.exports)
  }
}

/***/ })

});