webpackJsonp([5],{

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

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Items; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getUserById; });
var Items = [{
  'uuid': '65a6eb21-67b5-45c3-9af7-faca2d9b60d4',
  'name': 'Dessie',
  'email': 'Dessie7937@gmail.com',
  'username': 'Dessie79',
  'jobTitle': 'Web Developer',
  'phone': '1-360-812-9380 x511',
  'avatar': '/static/avatar/a2.jpg',
  'address': {
    'street': '655 Archibald Groves',
    'suite': 'Apt. 818',
    'city': 'Carlosshire',
    'state': 'Arkansas',
    'country': 'Somalia',
    'zipcode': '10406',
    'geo': {
      'lat': '-44.6063',
      'lng': '-169.7706'
    }
  }
}, {
  'uuid': '28d9f265-74d7-4f85-83d4-6a21fca57dcf',
  'name': 'Jakayla',
  'jobTitle': 'Web Designer',
  'email': 'Jakayla_Crooks867@yahoo.com',
  'username': 'Jakayla_Crooks86',
  'phone': '610.499.1240',
  'avatar': '/static/avatar/a3.jpg',
  'address': {
    'street': '281 Tillman Forge',
    'suite': 'Apt. 381',
    'city': 'New Sandrinemouth',
    'state': 'North Dakota',
    'country': 'Reunion',
    'zipcode': '19540-8186',
    'geo': {
      'lat': '-12.3375',
      'lng': '-117.9067'
    }
  }
}, {
  'uuid': '14ddae1e-986d-42f4-8d17-46a02d469b2b',
  'name': 'Hobart',
  'jobTitle': 'Sales',
  'email': 'Hobart_Mueller.Thiel@hotmail.com',
  'username': 'Hobart_Mueller',
  'phone': '1-590-385-3349',
  'avatar': 'static/avatar/a1.jpg',
  'address': {
    'street': '706 Padberg Knoll',
    'suite': 'Suite 818',
    'city': 'Port Mablefurt',
    'state': 'Arkansas',
    'country': 'Netherlands Antilles',
    'zipcode': '89975-6584',
    'geo': {
      'lat': '-42.9187',
      'lng': '8.5866'
    }
  }
}, {
  'uuid': '6a03248b-1752-4332-a3a9-7108528cc9d3',
  'name': 'Celestine',
  'jobTitle': 'Marketing',
  'email': 'Celestine.Casper59@hotmail.com',
  'username': 'Celestine.Casper',
  'phone': '1-830-046-3289',
  'avatar': '/static/avatar/a4.jpg',
  'address': {
    'street': '9528 Schroeder Track',
    'suite': 'Apt. 443',
    'city': 'Godfreyburgh',
    'state': 'Montana',
    'country': 'Slovenia',
    'zipcode': '10220',
    'geo': {
      'lat': '36.8638',
      'lng': '20.0047'
    }
  }
}, {
  'uuid': 'ee272550-36e8-4fe2-889d-c1ee701c5863',
  'name': 'Hortense',
  'email': 'Hortense99.Jakubowski@yahoo.com',
  'jobTitle': 'Project Manager',
  'username': 'Hortense99',
  'phone': '712.916.2569 x0663',
  'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/moscoz/128.jpg',
  'address': {
    'street': '9046 Allen Ferry',
    'suite': 'Suite 429',
    'city': 'Angushaven',
    'state': 'Michigan',
    'country': 'Costa Rica',
    'zipcode': '92378-7065',
    'geo': {
      'lat': '78.1292',
      'lng': '-134.6632'
    }
  }
}, {
  'uuid': '77f4b102-9df5-43ba-966a-6f816806c5e2',
  'name': 'Pat',
  'jobTitle': 'Product Manager',
  'email': 'Pat_Zulauf81.Bartell86@gmail.com',
  'username': 'Pat_Zulauf81',
  'phone': '(058) 200-7342',
  'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/rehatkathuria/128.jpg',
  'address': {
    'street': '62268 Favian Coves',
    'suite': 'Suite 993',
    'city': 'Baumbachstad',
    'state': 'New Mexico',
    'country': 'Montserrat',
    'zipcode': '44440',
    'geo': {
      'lat': '-34.7835',
      'lng': '148.8907'
    }
  }
}, {
  'uuid': '36a1ead7-57a0-4275-8a21-956194ab7cdf',
  'name': 'Solon',
  'jobTitle': 'Web Developer',
  'email': 'Solon.Bauch4_Rath@hotmail.com',
  'username': 'Solon.Bauch4',
  'phone': '789-914-4904 x173',
  'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/spacewood_/128.jpg',
  'address': {
    'street': '8153 Favian Walk',
    'suite': 'Apt. 495',
    'city': 'East Preston',
    'state': 'Idaho',
    'country': 'Iceland',
    'zipcode': '24555',
    'geo': {
      'lat': '-42.5691',
      'lng': '-2.5791'
    }
  }
}, {
  'uuid': 'b5899bef-d01e-42d8-af2d-edfb16b6b21e',
  'name': 'Calista',
  'jobTitle': 'Programmer',
  'email': 'Calista_Mertz1757@hotmail.com',
  'username': 'Calista_Mertz17',
  'phone': '961-703-4134',
  'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/moscoz/128.jpg',
  'address': {
    'street': '886 Wendy Circles',
    'suite': 'Apt. 933',
    'city': 'Lake Loy',
    'state': 'Rhode Island',
    'country': 'South Africa',
    'zipcode': '65261',
    'geo': {
      'lat': '-58.9245',
      'lng': '-43.6330'
    }
  }
}, {
  'uuid': '7d910620-84e1-49fc-951e-d375587b8189',
  'name': 'Jackeline',
  'jobTitle': 'Sales Executive',
  'email': 'Jackeline.Abshire_Dach@yahoo.com',
  'username': 'Jackeline.Abshire',
  'phone': '(326) 903-5706 x6854',
  'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/larrybolt/128.jpg',
  'address': {
    'street': '416 Cathy Spur',
    'suite': 'Apt. 431',
    'city': 'North Camila',
    'state': 'Pennsylvania',
    'country': 'Libyan Arab Jamahiriya',
    'zipcode': '31751',
    'geo': {
      'lat': '64.0673',
      'lng': '154.7671'
    }
  }
}, {
  'uuid': 'afdb5033-5bcc-4cec-b932-353a83410b44',
  'name': 'Jamey',
  'jobTitle': 'PHP Developer',
  'email': 'Jamey_Grant_Cruickshank73@gmail.com',
  'username': 'Jamey_Grant',
  'phone': '545-939-2404 x32373',
  'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/mikebeecham/128.jpg',
  'address': {
    'street': '38372 Mante Glen',
    'suite': 'Suite 090',
    'city': 'Robertsside',
    'state': 'Texas',
    'country': 'Equatorial Guinea',
    'zipcode': '86558-7214',
    'geo': {
      'lat': '-55.0222',
      'lng': '-100.5977'
    }
  }
}, {
  'uuid': '60d07662-bfec-42c7-b044-c81bc4ff8c7a',
  'name': 'Barton',
  'email': 'Barton85_Emard@gmail.com',
  'jobTitle': 'Web Developer',
  'username': 'Barton85',
  'phone': '(979) 560-8322 x174',
  'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/a_harris88/128.jpg',
  'address': {
    'street': '185 Florine Spurs',
    'suite': 'Suite 178',
    'city': 'Port Carrollburgh',
    'state': 'Alaska',
    'country': 'Saint Barthelemy',
    'zipcode': '30126',
    'geo': {
      'lat': '24.0545',
      'lng': '-88.8499'
    }
  }
}, {
  'uuid': '5c44b666-baca-4f18-a3cb-23068c6edc14',
  'name': 'Gloria',
  'jobTitle': 'Assets',
  'email': 'Gloria78.Nicolas83@hotmail.com',
  'username': 'Gloria78',
  'phone': '188.890.3246',
  'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/nehfy/128.jpg',
  'address': {
    'street': '643 Arch Mews',
    'suite': 'Apt. 171',
    'city': 'Wymanland',
    'state': 'Indiana',
    'country': 'Jersey',
    'zipcode': '73594-9840',
    'geo': {
      'lat': '-70.9980',
      'lng': '-151.6234'
    }
  }
}, {
  'uuid': '46d6f992-5729-4588-b7f8-ce74f21157ba',
  'name': 'Olin',
  'jobTitle': 'Finaice',
  'email': 'Olin.Robel49.Schowalter24@yahoo.com',
  'username': 'Olin.Robel49',
  'phone': '1-982-234-7756',
  'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/jcubic/128.jpg',
  'address': {
    'street': '0813 Mayer Greens',
    'suite': 'Apt. 551',
    'city': 'Bergstromburgh',
    'state': 'Ohio',
    'country': 'Anguilla',
    'zipcode': '42502-9731',
    'geo': {
      'lat': '-48.2520',
      'lng': '60.6556'
    }
  }
}, {
  'uuid': 'bd30e201-cceb-410e-8497-a4072bc399f5',
  'name': 'Rollin',
  'jobTitle': 'Supporting',
  'email': 'Rollin43_Fay@yahoo.com',
  'username': 'Rollin43',
  'phone': '477-651-5715 x502',
  'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/horaciobella/128.jpg',
  'address': {
    'street': '5704 Spinka Causeway',
    'suite': 'Suite 388',
    'city': 'Pollyburgh',
    'state': 'Arizona',
    'country': 'Virgin Islands, U.S.',
    'zipcode': '45048',
    'geo': {
      'lat': '55.3046',
      'lng': '3.8129'
    }
  }
}, {
  'uuid': 'da95e977-cd54-4077-a767-1b7f33ef6919',
  'name': 'Murl',
  'email': 'Murl_Abshire41_Lakin@hotmail.com',
  'username': 'Murl_Abshire41',
  'jobTitle': 'Web Developer',
  'phone': '107-733-1219 x0615',
  'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/stayuber/128.jpg',
  'address': {
    'street': '4880 Tanner Circles',
    'suite': 'Apt. 994',
    'city': 'Bauchside',
    'state': 'Ohio',
    'country': 'Uganda',
    'zipcode': '11259',
    'geo': {
      'lat': '11.6209',
      'lng': '-45.1766'
    }
  }
}, {
  'uuid': '6124d4e8-77ed-4b34-868d-d312bfab5de2',
  'name': 'Breanna',
  'jobTitle': 'Web Developer',
  'email': 'Breanna.Bartoletti21@hotmail.com',
  'username': 'Breanna.Bartoletti',
  'phone': '645.045.0876 x35882',
  'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/flexrs/128.jpg',
  'address': {
    'street': '431 Grimes Common',
    'suite': 'Apt. 530',
    'city': 'East Lunahaven',
    'state': 'Virginia',
    'country': 'Hungary',
    'zipcode': '12012-3038',
    'geo': {
      'lat': '29.7991',
      'lng': '-70.4033'
    }
  }
}, {
  'uuid': 'eef93cb1-7766-4413-a5cf-ecbf71fa3674',
  'name': 'Maya',
  'email': 'Maya55_Dickens16@yahoo.com',
  'username': 'Maya55',
  'jobTitle': 'Web Developer',
  'phone': '199.260.3770 x2815',
  'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/nvkznemo/128.jpg',
  'address': {
    'street': '58581 Guillermo Springs',
    'suite': 'Suite 574',
    'city': 'Cloydville',
    'state': 'Delaware',
    'country': 'Saint Barthelemy',
    'zipcode': '95633-3394',
    'geo': {
      'lat': '-57.5740',
      'lng': '104.5634'
    }
  }
}, {
  'uuid': '899d0e31-b71e-4d95-a8a0-6a8bceb314bd',
  'name': 'Santiago',
  'jobTitle': 'Web Developer',
  'email': 'Santiago41_Crooks15@yahoo.com',
  'username': 'Santiago41',
  'phone': '1-489-921-2159 x8655',
  'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/ernestsemerda/128.jpg',
  'address': {
    'street': '7868 Windler Dam',
    'suite': 'Suite 876',
    'city': 'Port Emmetfurt',
    'state': 'Alabama',
    'country': 'Belarus',
    'zipcode': '63739-4581',
    'geo': {
      'lat': '-28.7166',
      'lng': '-167.7070'
    }
  }
}, {
  'uuid': 'a41c6c4a-9cb1-45d1-8c6f-091044ba51ff',
  'name': 'Leonardo',
  'email': 'Leonardo10.Macejkovic@yahoo.com',
  'username': 'Leonardo10',
  'phone': '445-761-1519',
  'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/adobi/128.jpg',
  'address': {
    'street': '146 Lemke Mountains',
    'suite': 'Apt. 407',
    'city': 'North Toyfort',
    'state': 'Connecticut',
    'country': 'Senegal',
    'zipcode': '90211-1855',
    'geo': {
      'lat': '-56.3849',
      'lng': '-167.1372'
    }
  }
}, {
  'uuid': '3782c174-1f2c-4dc4-b75d-0bedf400e023',
  'name': 'Lora',
  'jobTitle': 'Web Developer',
  'email': 'Lora_Kessler586@hotmail.com',
  'username': 'Lora_Kessler5',
  'phone': '315-215-2852 x69280',
  'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/antongenkin/128.jpg',
  'address': {
    'street': '4018 Willms Turnpike',
    'suite': 'Suite 573',
    'city': 'Leuschkemouth',
    'state': 'Kentucky',
    'country': 'Dominican Republic',
    'zipcode': '70964',
    'geo': {
      'lat': '80.2384',
      'lng': '38.1323'
    }
  }
}];

var getUserById = function getUserById(uuid) {
  return uuid === undefined ? Items[0] : Items.find(function (x) {
    return x.uuid === uuid;
  });
};

var getUser = function getUser(limit) {
  return limit ? Items.slice(0, limit) : Items;
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

/***/ 202:
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VCircle_css__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VCircle_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__VCircle_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuetify_es5_mixins_colorable__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuetify_es5_mixins_colorable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuetify_es5_mixins_colorable__);



/* harmony default export */ __webpack_exports__["a"] = ({

  mixins: [__WEBPACK_IMPORTED_MODULE_1_vuetify_es5_mixins_colorable___default.a],

  props: {
    text: String,
    small: Boolean,
    large: Boolean,
    medium: Boolean,
    dot: Boolean,
    pill: Boolean,
    ring: Boolean
  },
  computed: {
    classes: function classes() {
      var classes = this.addBackgroundColorClassChecks({
        'circle-sm': this.small,
        'circle-lg': this.medium,
        'circle-xl': this.large,
        'circle-ring': this.ring,
        'circle-dot': this.dot,
        'circle-pill': this.pill,
        'theme--light': this.light,
        'theme--dark': this.dark
      });
      return classes;
    }
  },
  render: function render(h) {
    var data = {
      staticClass: 'circle',
      'class': this.classes,
      attrs: { tabindex: this.disabled ? -1 : 0 },
      on: this.$listeners
    };

    return h('span', data, [this.$slots.default]);
  }
});

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(226);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js!./VCircle.css", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js!./VCircle.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".circle {\n  border-radius: 3px;\n  padding: 0.25em 0.4em;\n  font-weight: 400;\n  line-height: 1.3;\n  font-size: 85%;\n}\n.circle:empty {\n  display: inline-block;\n  vertical-align: inherit;\n}\n.circle-pill {\n  color: #fff;\n  padding-right: 0.6em;\n  padding-left: 0.6em;\n  border-radius: 10rem;\n}\n.circle-sm {\n  line-height: 1.2;\n  padding-top: 1px;\n  padding-bottom: 2px;\n  font-size: 75%;\n}\n.circle-lg {\n  line-height: 1.5;\n  padding: 5px 7px;\n  font-size: 95%;\n}\n.circle-xl {\n  line-height: 1.7;\n  padding: 7px 9px;\n  font-size: 100%;\n}\n.circle-dot {\n  width: 8px;\n  height: 8px;\n  padding: 0;\n  border-radius: 100%;\n  vertical-align: middle;\n}\n.circle-dot.circle-sm {\n  width: 6px;\n  height: 6px;\n}\n.circle-dot.circle-lg {\n  width: 10px;\n  height: 10px;\n}\n.circle-dot.circle-xl {\n  width: 12px;\n  height: 12px;\n}\n.circle-ring {\n  position: relative;\n  width: 10px;\n  height: 10px;\n  padding: 0;\n  border-radius: 100%;\n  vertical-align: middle;\n}\n.circle-ring::after {\n  content: '';\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background-color: #fff;\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n.circle-ring.circle-sm {\n  width: 8px;\n  height: 8px;\n}\n.circle-ring.circle-sm::after {\n  width: 4px;\n  height: 4px;\n}\n.circle-ring.circle-lg {\n  width: 12px;\n  height: 12px;\n}\n.circle-ring.circle-lg::after {\n  width: 8px;\n  height: 8px;\n}\n.circle-ring.circle-xl {\n  width: 14px;\n  height: 14px;\n}\n.circle-ring.circle-xl::after {\n  width: 10px;\n  height: 10px;\n}\n.circle-ring.fill::after {\n  -webkit-transform: scale(0);\n  transform: scale(0);\n}\n.circle-bold {\n  text-transform: uppercase;\n  font-weight: 500;\n  letter-spacing: 1px;\n}\n", ""]);

// exports


/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _vue = __webpack_require__(5);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function isCssColor(color) {
    return !!color && !!color.match(/^(#|(rgb|hsl)a?\()/);
}
exports.default = _vue2.default.extend({
    name: 'colorable',
    props: {
        color: String
    },
    methods: {
        setBackgroundColor: function setBackgroundColor(color) {
            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            if (isCssColor(color)) {
                data.style = _extends({}, data.style, {
                    'background-color': '' + color,
                    'border-color': '' + color
                });
            } else if (color) {
                data.class = _extends({}, data.class, _defineProperty({}, color, true));
            }
            return data;
        },
        setTextColor: function setTextColor(color) {
            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            if (isCssColor(color)) {
                data.style = _extends({}, data.style, {
                    'color': '' + color,
                    'caret-color': '' + color
                });
            } else if (color) {
                var _color$toString$trim$ = color.toString().trim().split(' ', 2),
                    _color$toString$trim$2 = _slicedToArray(_color$toString$trim$, 2),
                    colorName = _color$toString$trim$2[0],
                    colorModifier = _color$toString$trim$2[1];

                data.class = _extends({}, data.class, _defineProperty({}, colorName + '--text', true));
                if (colorModifier) {
                    data.class['text--' + colorModifier] = true;
                }
            }
            return data;
        }
    }
});
//# sourceMappingURL=colorable.js.map

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(288), __esModule: true };

/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(289);
module.exports = __webpack_require__(126).Object.assign;


/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(148);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(290) });


/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(162);
var gOPS = __webpack_require__(291);
var pIE = __webpack_require__(202);
var toObject = __webpack_require__(170);
var IObject = __webpack_require__(149);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(131)(function () {
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

/***/ 291:
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ChatContactList__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ChatContactList___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ChatContactList__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ChatContactProfile__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ChatContactProfile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ChatContactProfile__);
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
    ChatContactList: __WEBPACK_IMPORTED_MODULE_0__ChatContactList___default.a,
    ChatContactProfile: __WEBPACK_IMPORTED_MODULE_1__ChatContactProfile___default.a
  },
  data: function data() {
    return {
      chat: null,
      selectedTab: null
    };
  },

  computed: {
    showSidebar: function showSidebar() {
      return this.$route.params.uuid === undefined;
    },
    showWindow: function showWindow() {
      return this.$route.params.uuid !== undefined;
    }
  }
});

/***/ }),

/***/ 531:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(532)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(534)
/* template */
var __vue_template__ = __webpack_require__(535)
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
Component.options.__file = "front_end/components/chat/ChatContactList.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-05417600", Component.options)
  } else {
    hotAPI.reload("data-v-05417600", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(533);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("0e12c7b0", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-05417600\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ChatContactList.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-05417600\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ChatContactList.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 533:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_user__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__circle_VCircle__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_perfect_scrollbar__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_perfect_scrollbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_perfect_scrollbar__);
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
    VuePerfectScrollbar: __WEBPACK_IMPORTED_MODULE_2_vue_perfect_scrollbar___default.a,
    VCircle: __WEBPACK_IMPORTED_MODULE_1__circle_VCircle__["a" /* default */]
  },
  data: function data() {
    return {};
  },
  computed: {
    users: function users() {
      return Object(__WEBPACK_IMPORTED_MODULE_0__api_user__["b" /* getUser */])();
    }
  },
  methods: {
    contactRoute: function contactRoute(id) {
      return '/chat/contact/' + id;
    },
    firstLetter: function firstLetter(name) {
      return name.charAt(0);
    },
    userStatusColor: function userStatusColor(item) {
      return item.active ? 'green' : 'grey';
    }
  }
});

/***/ }),

/***/ 535:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "chat-contact" },
    [
      _c(
        "v-toolbar",
        {
          staticClass: "chat-contact--toolbar",
          attrs: { flat: "", dense: "" }
        },
        [
          _c("v-text-field", {
            attrs: {
              flat: "",
              solo: "",
              "full-width": "",
              "prepend-icon": "search",
              label: "Search"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vue-perfect-scrollbar",
        { staticClass: "chat-history--scrollbar" },
        [
          _c("v-divider"),
          _vm._v(" "),
          _c(
            "v-list",
            { staticClass: "chat-contact--list", attrs: { "two-line": "" } },
            [
              _c("v-subheader", [_vm._v("Contacts")]),
              _vm._v(" "),
              _vm._l(_vm.users, function(item, index) {
                return [
                  _c("v-divider", { key: index }),
                  _vm._v(" "),
                  _c(
                    "v-list-tile",
                    {
                      key: item.name + index,
                      attrs: { avatar: "", to: _vm.contactRoute(item.uuid) }
                    },
                    [
                      _c(
                        "v-list-tile-avatar",
                        { attrs: { color: "primary" } },
                        [
                          item.avatar
                            ? _c("img", { attrs: { src: item.avatar } })
                            : _c(
                                "span",
                                { staticClass: "white--text headline" },
                                [_vm._v(_vm._s(_vm.firstLetter(item.name)))]
                              )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile-content",
                        [
                          _c("v-list-tile-title", [
                            _vm._v(
                              "\n              " +
                                _vm._s(item.name) +
                                "\n            "
                            )
                          ]),
                          _vm._v(" "),
                          _c("v-list-tile-sub-title", [
                            _vm._v(_vm._s(item.jobTitle))
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile-action",
                        [
                          _c("v-circle", {
                            attrs: {
                              dot: "",
                              small: "",
                              color: _vm.userStatusColor(item)
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ]
              })
            ],
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
    require("vue-hot-reload-api")      .rerender("data-v-05417600", module.exports)
  }
}

/***/ }),

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(537)
/* template */
var __vue_template__ = __webpack_require__(538)
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
Component.options.__file = "front_end/components/chat/ChatContactProfile.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b2e23c92", Component.options)
  } else {
    hotAPI.reload("data-v-b2e23c92", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_user__ = __webpack_require__(130);

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
  data: function data() {
    return {
      chat: null,
      selectedTab: null
    };
  },

  computed: {
    user: function user() {
      var Origin = {
        name: 'Chat',
        avatar: ''
      };
      var user = Object(__WEBPACK_IMPORTED_MODULE_1__api_user__["c" /* getUserById */])(this.$route.params.uuid);
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(Origin, user);
    }
  }
});

/***/ }),

/***/ 538:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    {
      staticClass: "pa-0 ma-0 white",
      attrs: { fluid: "", "fill-height": "", id: "profile" }
    },
    [
      _c(
        "v-layout",
        { staticClass: "pa-0 ma-0", attrs: { column: "" } },
        [
          _c(
            "v-card",
            { staticClass: "elevation-0" },
            [
              _c(
                "v-card-media",
                { attrs: { height: "380", src: "/static/bg/4.jpg" } },
                [
                  _c(
                    "v-layout",
                    {
                      attrs: {
                        column: "",
                        "align-center": "",
                        "justify-center": ""
                      }
                    },
                    [
                      _c(
                        "v-avatar",
                        { staticClass: "mx-5", attrs: { size: "200" } },
                        [
                          _c("img", {
                            attrs: { src: _vm.user.avatar, alt: _vm.user.name }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c("h1", { staticClass: "white--text" }, [
                        _vm._v(_vm._s(_vm.user.name))
                      ])
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                { staticClass: "pa-0" },
                [
                  _c(
                    "v-layout",
                    {
                      staticClass: "grey lighten-4 pa-3",
                      attrs: { row: "", wrap: "" }
                    },
                    [
                      _c("v-flex", { attrs: { xs4: "" } }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "layout column justify-center align-center"
                          },
                          [
                            _c(
                              "v-btn",
                              {
                                attrs: {
                                  icon: "",
                                  outline: "",
                                  color: "indigo"
                                }
                              },
                              [_c("v-icon", [_vm._v("fa fa-facebook")])],
                              1
                            ),
                            _vm._v(" "),
                            _c("h3", { staticClass: "indigo--text" }, [
                              _vm._v("100+")
                            ])
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("v-flex", { attrs: { xs4: "" } }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "layout column justify-center align-center"
                          },
                          [
                            _c(
                              "v-btn",
                              {
                                attrs: { icon: "", outline: "", color: "pink" }
                              },
                              [_c("v-icon", [_vm._v("fa fa-instagram")])],
                              1
                            ),
                            _vm._v(" "),
                            _c("h3", { staticClass: "pink--text" }, [
                              _vm._v("200+")
                            ])
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("v-flex", { attrs: { xs4: "" } }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "layout column justify-center align-center"
                          },
                          [
                            _c(
                              "v-btn",
                              {
                                attrs: { icon: "", outline: "", color: "blue" }
                              },
                              [_c("v-icon", [_vm._v("fa fa-twitter")])],
                              1
                            ),
                            _vm._v(" "),
                            _c("h3", { staticClass: "blue--text" }, [
                              _vm._v("50+")
                            ])
                          ],
                          1
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-tabs",
                    {
                      model: {
                        value: _vm.selectedTab,
                        callback: function($$v) {
                          _vm.selectedTab = $$v
                        },
                        expression: "selectedTab"
                      }
                    },
                    [
                      _c("v-tab", { attrs: { ripple: "", href: "#tab-1" } }, [
                        _vm._v("\n            Profile\n          ")
                      ]),
                      _vm._v(" "),
                      _c("v-tab", { attrs: { ripple: "", href: "#tab-2" } }, [
                        _vm._v("\n            Activity\n          ")
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-tabs-items",
                        {
                          model: {
                            value: _vm.selectedTab,
                            callback: function($$v) {
                              _vm.selectedTab = $$v
                            },
                            expression: "selectedTab"
                          }
                        },
                        [
                          _c(
                            "v-tab-item",
                            { attrs: { id: "tab-1" } },
                            [
                              _c(
                                "v-card",
                                { attrs: { flat: "" } },
                                [
                                  _c(
                                    "v-card-text",
                                    [
                                      _c(
                                        "v-list",
                                        {
                                          staticClass: "pa-0",
                                          attrs: { "two-line": "" }
                                        },
                                        [
                                          _c(
                                            "v-list-tile",
                                            { attrs: { href: "#" } },
                                            [
                                              _c(
                                                "v-list-tile-action",
                                                [
                                                  _c(
                                                    "v-icon",
                                                    {
                                                      attrs: { color: "indigo" }
                                                    },
                                                    [_vm._v("work")]
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-list-tile-content",
                                                [
                                                  _c("v-list-tile-title", [
                                                    _vm._v(
                                                      _vm._s(_vm.user.jobTitle)
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("v-list-tile-sub-title", [
                                                    _vm._v("Job Title")
                                                  ])
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c("v-list-tile-action")
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c("v-divider", {
                                            attrs: { inset: "" }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "v-list-tile",
                                            { attrs: { href: "#" } },
                                            [
                                              _c(
                                                "v-list-tile-action",
                                                [
                                                  _c(
                                                    "v-icon",
                                                    {
                                                      attrs: { color: "indigo" }
                                                    },
                                                    [_vm._v("phone")]
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-list-tile-content",
                                                [
                                                  _c("v-list-tile-title", [
                                                    _vm._v(
                                                      _vm._s(_vm.user.phone)
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("v-list-tile-sub-title", [
                                                    _vm._v("Mobile")
                                                  ])
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-list-tile-action",
                                                [
                                                  _c("v-icon", [_vm._v("chat")])
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c("v-divider", {
                                            attrs: { inset: "" }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "v-list-tile",
                                            { attrs: { href: "#" } },
                                            [
                                              _c(
                                                "v-list-tile-action",
                                                [
                                                  _c(
                                                    "v-icon",
                                                    {
                                                      attrs: { color: "indigo" }
                                                    },
                                                    [_vm._v("mail")]
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-list-tile-content",
                                                [
                                                  _c("v-list-tile-title", [
                                                    _vm._v(
                                                      _vm._s(_vm.user.email)
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("v-list-tile-sub-title", [
                                                    _vm._v("Personal")
                                                  ])
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c("v-divider", {
                                            attrs: { inset: "" }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "v-list-tile",
                                            { attrs: { href: "#" } },
                                            [
                                              _c(
                                                "v-list-tile-action",
                                                [
                                                  _c(
                                                    "v-icon",
                                                    {
                                                      attrs: { color: "indigo" }
                                                    },
                                                    [_vm._v("location_on")]
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-list-tile-content",
                                                [
                                                  _c("v-list-tile-title", [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.user.address.street
                                                      )
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("v-list-tile-sub-title", [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.user.address.city
                                                      ) +
                                                        ", " +
                                                        _vm._s(
                                                          _vm.user.address.state
                                                        ) +
                                                        " " +
                                                        _vm._s(
                                                          _vm.user.address
                                                            .zipcode
                                                        )
                                                    )
                                                  ])
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
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-tab-item",
                            { attrs: { id: "tab-2" } },
                            [
                              _c(
                                "v-card",
                                { attrs: { flat: "" } },
                                [_c("v-card-text")],
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
    require("vue-hot-reload-api")      .rerender("data-v-b2e23c92", module.exports)
  }
}

/***/ }),

/***/ 539:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    { staticClass: "fill-height pa-0 ma-0 chat-drawer-container fluid" },
    [
      !_vm.$vuetify.breakpoint.smAndDown
        ? [
            _c(
              "v-layout",
              { attrs: { row: "" } },
              [
                _c(
                  "v-flex",
                  {
                    staticClass: "chat-contact--sidebar white",
                    attrs: { lg3: "" }
                  },
                  [_c("chat-contact-list")],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-flex",
                  { attrs: { lg9: "" } },
                  [_c("chat-contact-profile")],
                  1
                )
              ],
              1
            )
          ]
        : [
            _c(
              "v-layout",
              { attrs: { column: "" } },
              [
                _vm.showSidebar
                  ? _c(
                      "v-flex",
                      { staticClass: "white", attrs: { sm12: "" } },
                      [_c("chat-contact-list")],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.showWindow
                  ? _c(
                      "v-flex",
                      { attrs: { sm12: "" } },
                      [_c("chat-contact-profile")],
                      1
                    )
                  : _vm._e()
              ],
              1
            )
          ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-42d1757c", module.exports)
  }
}

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(530)
/* template */
var __vue_template__ = __webpack_require__(539)
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
Component.options.__file = "front_end/components/chat/ChatContact.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-42d1757c", Component.options)
  } else {
    hotAPI.reload("data-v-42d1757c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});