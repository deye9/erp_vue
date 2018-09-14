webpackJsonp([6],{

/***/ 136:
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ 137:
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(141)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ 139:
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ 140:
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

/***/ 141:
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ 142:
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(159);
var defined = __webpack_require__(149);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ 145:
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ 149:
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(152);
var createDesc = __webpack_require__(155);
module.exports = __webpack_require__(138) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(139);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(151);
var IE8_DOM_DEFINE = __webpack_require__(174);
var toPrimitive = __webpack_require__(175);
var dP = Object.defineProperty;

exports.f = __webpack_require__(138) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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

/***/ 155:
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

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(164)('keys');
var uid = __webpack_require__(166);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(137);
var core = __webpack_require__(136);
var ctx = __webpack_require__(160);
var hide = __webpack_require__(150);
var has = __webpack_require__(142);
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

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(162);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(173);
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

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(139);
var document = __webpack_require__(137).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ 162:
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(145);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(136);
var global = __webpack_require__(137);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(165) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ 165:
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ 166:
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ 167:
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(176);
var enumBugKeys = __webpack_require__(167);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ 173:
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(138) && !__webpack_require__(141)(function () {
  return Object.defineProperty(__webpack_require__(161)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(139);
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

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(142);
var toIObject = __webpack_require__(144);
var arrayIndexOf = __webpack_require__(177)(false);
var IE_PROTO = __webpack_require__(156)('IE_PROTO');

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

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(144);
var toLength = __webpack_require__(163);
var toAbsoluteIndex = __webpack_require__(178);
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

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(145);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(149);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Menu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Groups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getChatById; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user__ = __webpack_require__(140);

// chat menu
var Menu = [{
  text: 'Chat',
  icon: 'chat',
  to: { path: '/chat/messaging' }
}, {
  text: 'Contacts',
  icon: 'contacts',
  to: { path: '/chat/contact' }
}, {
  text: 'File',
  icon: 'insert_drive_file',
  to: { path: '/chat/media' }
}, {
  text: 'Settings',
  icon: 'settings',
  to: { path: '/chat/settings' }
}];
// chat group
var Groups = [{
  'uuid': 'a44f8ade-513c-46b5-bae4-0acf809860e6',
  'title': 'nisi',
  'users': ['da95e977-cd54-4077-a767-1b7f33ef6919'],
  'created_by': '60d07662-bfec-42c7-b044-c81bc4ff8c7a',
  'created_at': '2018-04-10T15:02:15.476Z'
}, {
  'uuid': 'c86f170d-9a36-4f2c-bb76-2de65aa8c7bf',
  'title': 'odio',
  'users': ['46d6f992-5729-4588-b7f8-ce74f21157ba', '7d910620-84e1-49fc-951e-d375587b8189'],
  'created_by': 'eef93cb1-7766-4413-a5cf-ecbf71fa3674',
  'created_at': '2018-04-11T04:02:56.728Z'
}, {
  'uuid': '9c750cd1-a04d-4b9b-afe2-3e5f1b8d04fa',
  'title': 'delectus',
  'users': ['60d07662-bfec-42c7-b044-c81bc4ff8c7a'],
  'created_by': 'bd30e201-cceb-410e-8497-a4072bc399f5',
  'created_at': '2018-04-10T10:35:26.982Z'
}, {
  'uuid': '0b29c8d1-6467-4680-9210-01d7669d47c1',
  'title': 'placeat',
  'users': ['da95e977-cd54-4077-a767-1b7f33ef6919'],
  'created_by': '6124d4e8-77ed-4b34-868d-d312bfab5de2',
  'created_at': '2018-04-10T22:33:14.365Z'
}, {
  'uuid': 'ff04dee6-34f0-4ac9-b38b-463a2e0227e9',
  'title': 'minima',
  'users': ['5c44b666-baca-4f18-a3cb-23068c6edc14', '14ddae1e-986d-42f4-8d17-46a02d469b2b'],
  'created_by': 'ee272550-36e8-4fe2-889d-c1ee701c5863',
  'created_at': '2018-04-10T07:56:08.876Z'
}, {
  'uuid': '42e3d8f8-a097-4049-bd6e-53eab86f3722',
  'title': 'ducimus',
  'users': ['46d6f992-5729-4588-b7f8-ce74f21157ba', '6124d4e8-77ed-4b34-868d-d312bfab5de2'],
  'created_by': '77f4b102-9df5-43ba-966a-6f816806c5e2',
  'created_at': '2018-04-11T00:04:45.012Z'
}, {
  'uuid': '14c43a19-3938-41ec-90ca-9f09d9390a6f',
  'title': 'et',
  'users': ['65a6eb21-67b5-45c3-9af7-faca2d9b60d4', '3782c174-1f2c-4dc4-b75d-0bedf400e023'],
  'created_by': 'afdb5033-5bcc-4cec-b932-353a83410b44',
  'created_at': '2018-04-10T20:30:02.955Z'
}, {
  'uuid': 'b42daaa7-ef3c-4cbe-89cc-52476f169232',
  'title': 'qui',
  'users': ['afdb5033-5bcc-4cec-b932-353a83410b44'],
  'created_by': '36a1ead7-57a0-4275-8a21-956194ab7cdf',
  'created_at': '2018-04-11T05:27:15.635Z'
}, {
  'uuid': 'a4fb2a31-7e6f-4103-b512-3a0e1856b42d',
  'title': 'totam',
  'users': ['65a6eb21-67b5-45c3-9af7-faca2d9b60d4', '5c44b666-baca-4f18-a3cb-23068c6edc14', '7d910620-84e1-49fc-951e-d375587b8189'],
  'created_by': '60d07662-bfec-42c7-b044-c81bc4ff8c7a',
  'created_at': '2018-04-10T14:47:13.370Z'
}, {
  'uuid': 'b1f03c8b-837f-4579-a18b-974d3ce93f3b',
  'title': 'placeat',
  'users': ['6a03248b-1752-4332-a3a9-7108528cc9d3', '28d9f265-74d7-4f85-83d4-6a21fca57dcf', '65a6eb21-67b5-45c3-9af7-faca2d9b60d4'],
  'created_by': 'a41c6c4a-9cb1-45d1-8c6f-091044ba51ff',
  'created_at': '2018-04-11T01:23:23.603Z'
}];

var Messages = [{
  'uuid': '2cc7e60b-a81b-4859-bb88-e894e11eb77d',
  'chatId': 'a44f8ade-513c-46b5-bae4-0acf809860e6',
  'text': 'Ex laudantium veniam aut repellendus voluptatem vitae suscipit at quisquam.',
  'userId': 'da95e977-cd54-4077-a767-1b7f33ef6919',
  'created_at': '2018-04-10T18:42:25.141Z'
}, {
  'uuid': '2a2c7ea4-e2c1-47ac-8dc8-73ed074abb99',
  'chatId': 'a44f8ade-513c-46b5-bae4-0acf809860e6',
  'text': 'Natus ex qui at in et porro.',
  'userId': 'da95e977-cd54-4077-a767-1b7f33ef6919',
  'created_at': '2018-04-10T09:39:34.913Z'
}, {
  'uuid': '063c9eb5-249a-4778-9367-ebfd33f69a4e',
  'chatId': 'a44f8ade-513c-46b5-bae4-0acf809860e6',
  'text': 'Ut et qui unde nulla.',
  'userId': 'da95e977-cd54-4077-a767-1b7f33ef6919',
  'created_at': '2018-04-11T04:47:33.345Z'
}, {
  'uuid': '2ea77894-ae69-4a2b-9bf2-86b555f4d84b',
  'chatId': 'c86f170d-9a36-4f2c-bb76-2de65aa8c7bf',
  'text': 'Impedit sed ducimus ut suscipit nobis id.',
  'userId': '46d6f992-5729-4588-b7f8-ce74f21157ba',
  'created_at': '2018-04-10T23:11:40.311Z'
}, {
  'uuid': '09fc211d-e8a2-4bae-bb40-6a707c3c5eac',
  'chatId': 'c86f170d-9a36-4f2c-bb76-2de65aa8c7bf',
  'text': 'Quia laborum labore maiores magnam sint.',
  'userId': '46d6f992-5729-4588-b7f8-ce74f21157ba',
  'created_at': '2018-04-10T16:47:00.297Z'
}, {
  'uuid': '9150380c-7675-4780-8395-e1d6fa1749f7',
  'chatId': 'c86f170d-9a36-4f2c-bb76-2de65aa8c7bf',
  'text': 'Aut consectetur est eligendi impedit.',
  'userId': '46d6f992-5729-4588-b7f8-ce74f21157ba',
  'created_at': '2018-04-11T00:22:22.961Z'
}, {
  'uuid': '757c2b29-5121-4c51-a9a0-390a537307bc',
  'chatId': 'c86f170d-9a36-4f2c-bb76-2de65aa8c7bf',
  'text': 'Recusandae voluptatibus nisi perferendis et ut quo repellat.',
  'userId': '7d910620-84e1-49fc-951e-d375587b8189',
  'created_at': '2018-04-10T14:30:41.149Z'
}, {
  'uuid': 'c06da098-5532-4b4b-95fe-f9cc9b64a44a',
  'chatId': 'c86f170d-9a36-4f2c-bb76-2de65aa8c7bf',
  'text': 'Beatae laborum enim.',
  'userId': '7d910620-84e1-49fc-951e-d375587b8189',
  'created_at': '2018-04-10T20:57:39.530Z'
}, {
  'uuid': '9e6b676c-9042-497c-a96e-c78b2d30570f',
  'chatId': 'c86f170d-9a36-4f2c-bb76-2de65aa8c7bf',
  'text': 'Ullam aliquid sint dicta nisi veritatis dolor.',
  'userId': '7d910620-84e1-49fc-951e-d375587b8189',
  'created_at': '2018-04-10T11:14:29.366Z'
}, {
  'uuid': '68863c56-f8bd-486b-a904-cf7abe788849',
  'chatId': '9c750cd1-a04d-4b9b-afe2-3e5f1b8d04fa',
  'text': 'Est minima quo doloribus adipisci qui.',
  'userId': '60d07662-bfec-42c7-b044-c81bc4ff8c7a',
  'created_at': '2018-04-10T19:05:08.963Z'
}, {
  'uuid': '96d13a69-7bd1-4523-bd47-d9986d7819d0',
  'chatId': '9c750cd1-a04d-4b9b-afe2-3e5f1b8d04fa',
  'text': 'Molestiae id amet tempore labore ipsam debitis.',
  'userId': '60d07662-bfec-42c7-b044-c81bc4ff8c7a',
  'created_at': '2018-04-10T15:49:06.410Z'
}, {
  'uuid': '2657bfda-59df-43ec-baa5-bfad08c5c412',
  'chatId': '0b29c8d1-6467-4680-9210-01d7669d47c1',
  'text': 'Voluptatem excepturi minima quidem id non.',
  'userId': 'da95e977-cd54-4077-a767-1b7f33ef6919',
  'created_at': '2018-04-11T02:29:58.528Z'
}, {
  'uuid': 'd9bcf3b5-6ef7-4aef-ab62-1e94947fecd0',
  'chatId': '0b29c8d1-6467-4680-9210-01d7669d47c1',
  'text': 'Qui non laudantium et.',
  'userId': 'da95e977-cd54-4077-a767-1b7f33ef6919',
  'created_at': '2018-04-10T12:41:25.616Z'
}, {
  'uuid': 'ed87358b-c859-4f0e-be23-2f038a53b65c',
  'chatId': '0b29c8d1-6467-4680-9210-01d7669d47c1',
  'text': 'Magni est nihil repellat.',
  'userId': 'da95e977-cd54-4077-a767-1b7f33ef6919',
  'created_at': '2018-04-11T04:51:19.790Z'
}, {
  'uuid': 'b56554d9-b98a-4c9c-99cc-d7964da81dce',
  'chatId': '0b29c8d1-6467-4680-9210-01d7669d47c1',
  'text': 'Magnam blanditiis eum unde et sapiente dolore aliquid unde dolor.',
  'userId': 'da95e977-cd54-4077-a767-1b7f33ef6919',
  'created_at': '2018-04-10T21:15:03.304Z'
}, {
  'uuid': '380a2600-2aa7-4764-b3de-8e0563ba33cf',
  'chatId': 'ff04dee6-34f0-4ac9-b38b-463a2e0227e9',
  'text': 'Suscipit rerum voluptate sint saepe quis.',
  'userId': '5c44b666-baca-4f18-a3cb-23068c6edc14',
  'created_at': '2018-04-11T04:37:10.098Z'
}, {
  'uuid': 'f207c65c-8a55-436f-8eb6-7c0f8880ac0d',
  'chatId': 'ff04dee6-34f0-4ac9-b38b-463a2e0227e9',
  'text': 'Earum quis facere aut nostrum voluptatem.',
  'userId': '14ddae1e-986d-42f4-8d17-46a02d469b2b',
  'created_at': '2018-04-10T16:16:49.913Z'
}, {
  'uuid': '1f2c46a2-072f-40ce-9fa7-a54dee81d8b8',
  'chatId': 'ff04dee6-34f0-4ac9-b38b-463a2e0227e9',
  'text': 'Non maiores eligendi facere sunt totam optio.',
  'userId': '14ddae1e-986d-42f4-8d17-46a02d469b2b',
  'created_at': '2018-04-11T00:48:29.388Z'
}, {
  'uuid': '65d307b0-69c9-4fda-9012-0819f9010d44',
  'chatId': 'ff04dee6-34f0-4ac9-b38b-463a2e0227e9',
  'text': 'Excepturi placeat necessitatibus ea et alias repudiandae.',
  'userId': '14ddae1e-986d-42f4-8d17-46a02d469b2b',
  'created_at': '2018-04-10T20:55:54.204Z'
}, {
  'uuid': '833654bc-5c4a-46f7-9a77-7e6a4f6707fe',
  'chatId': '42e3d8f8-a097-4049-bd6e-53eab86f3722',
  'text': 'Labore corporis et.',
  'userId': '46d6f992-5729-4588-b7f8-ce74f21157ba',
  'created_at': '2018-04-11T04:22:25.581Z'
}, {
  'uuid': '8f85169b-37c2-4d2f-bf5a-e193b5768823',
  'chatId': '42e3d8f8-a097-4049-bd6e-53eab86f3722',
  'text': 'Repudiandae similique neque blanditiis voluptatem.',
  'userId': '46d6f992-5729-4588-b7f8-ce74f21157ba',
  'created_at': '2018-04-11T04:31:40.571Z'
}, {
  'uuid': 'b29dbfa3-b34e-48ac-b65a-f9f22c311df0',
  'chatId': '42e3d8f8-a097-4049-bd6e-53eab86f3722',
  'text': 'Ut doloribus ad.',
  'userId': '46d6f992-5729-4588-b7f8-ce74f21157ba',
  'created_at': '2018-04-10T17:52:24.773Z'
}, {
  'uuid': '6bad98e9-2615-4fca-80e3-8388078ee4df',
  'chatId': '42e3d8f8-a097-4049-bd6e-53eab86f3722',
  'text': 'Quia molestiae perspiciatis nihil voluptas facilis enim fugit occaecati laboriosam.',
  'userId': '6124d4e8-77ed-4b34-868d-d312bfab5de2',
  'created_at': '2018-04-10T16:19:53.205Z'
}, {
  'uuid': 'b2e5993f-a367-4183-97f9-6a778e99970a',
  'chatId': '42e3d8f8-a097-4049-bd6e-53eab86f3722',
  'text': 'Explicabo sapiente voluptatibus provident.',
  'userId': '6124d4e8-77ed-4b34-868d-d312bfab5de2',
  'created_at': '2018-04-10T10:07:06.317Z'
}, {
  'uuid': '60f3ae3b-fc7e-41bf-9b50-330d42b4eabe',
  'chatId': '14c43a19-3938-41ec-90ca-9f09d9390a6f',
  'text': 'Qui eius velit esse est hic voluptas possimus consequatur.',
  'userId': '65a6eb21-67b5-45c3-9af7-faca2d9b60d4',
  'created_at': '2018-04-10T07:12:32.351Z'
}, {
  'uuid': '88583551-1f48-434e-80a7-8c3e282ab527',
  'chatId': '14c43a19-3938-41ec-90ca-9f09d9390a6f',
  'text': 'Expedita distinctio ea.',
  'userId': '65a6eb21-67b5-45c3-9af7-faca2d9b60d4',
  'created_at': '2018-04-11T06:22:54.274Z'
}, {
  'uuid': 'b504481e-6c57-4eaf-a3de-a46e007af2fc',
  'chatId': '14c43a19-3938-41ec-90ca-9f09d9390a6f',
  'text': 'Numquam sit minima.',
  'userId': '65a6eb21-67b5-45c3-9af7-faca2d9b60d4',
  'created_at': '2018-04-10T11:36:29.344Z'
}, {
  'uuid': '69c572f4-0f07-4434-abfd-61e22af047bb',
  'chatId': '14c43a19-3938-41ec-90ca-9f09d9390a6f',
  'text': 'Eos facilis sunt non autem hic.',
  'userId': '3782c174-1f2c-4dc4-b75d-0bedf400e023',
  'created_at': '2018-04-11T04:23:08.344Z'
}, {
  'uuid': 'd7f57929-a16b-4037-9b23-480224efbb52',
  'chatId': '14c43a19-3938-41ec-90ca-9f09d9390a6f',
  'text': 'Sed voluptatibus ut tempora ut voluptas alias quas.',
  'userId': '3782c174-1f2c-4dc4-b75d-0bedf400e023',
  'created_at': '2018-04-11T05:01:28.334Z'
}, {
  'uuid': 'be2034ef-d0e9-4110-9df9-e46fef8b2de7',
  'chatId': '14c43a19-3938-41ec-90ca-9f09d9390a6f',
  'text': 'Omnis a ea aut est reiciendis consequatur earum molestias quod.',
  'userId': '3782c174-1f2c-4dc4-b75d-0bedf400e023',
  'created_at': '2018-04-11T06:25:41.867Z'
}, {
  'uuid': 'fc273883-0360-42ab-ae03-53923c906a8c',
  'chatId': 'b42daaa7-ef3c-4cbe-89cc-52476f169232',
  'text': 'Voluptas eligendi sit et.',
  'userId': 'afdb5033-5bcc-4cec-b932-353a83410b44',
  'created_at': '2018-04-10T08:50:09.825Z'
}, {
  'uuid': '4548dbd5-cd36-447e-9476-a831b5000ab3',
  'chatId': 'a4fb2a31-7e6f-4103-b512-3a0e1856b42d',
  'text': 'At est rem.',
  'userId': '65a6eb21-67b5-45c3-9af7-faca2d9b60d4',
  'created_at': '2018-04-10T10:52:17.635Z'
}, {
  'uuid': '2ee80955-bdc4-4195-a22e-a32cc2f87b9d',
  'chatId': 'a4fb2a31-7e6f-4103-b512-3a0e1856b42d',
  'text': 'Dolores alias amet dolor blanditiis consequatur qui consequatur harum.',
  'userId': '65a6eb21-67b5-45c3-9af7-faca2d9b60d4',
  'created_at': '2018-04-10T12:05:44.794Z'
}, {
  'uuid': '709514c4-e86f-4a39-acb1-0162df208042',
  'chatId': 'a4fb2a31-7e6f-4103-b512-3a0e1856b42d',
  'text': 'Ut odit voluptas et voluptates esse consequatur eius aut.',
  'userId': '65a6eb21-67b5-45c3-9af7-faca2d9b60d4',
  'created_at': '2018-04-10T23:37:57.117Z'
}, {
  'uuid': '9272611c-6842-4a3d-957a-e129b75a9ff8',
  'chatId': 'a4fb2a31-7e6f-4103-b512-3a0e1856b42d',
  'text': 'Molestiae praesentium maiores amet cum quasi.',
  'userId': '5c44b666-baca-4f18-a3cb-23068c6edc14',
  'created_at': '2018-04-10T08:17:01.849Z'
}, {
  'uuid': '156dc16b-58a6-4b63-9703-85f120ef58e9',
  'chatId': 'a4fb2a31-7e6f-4103-b512-3a0e1856b42d',
  'text': 'Asperiores voluptatibus illo autem ipsa sit excepturi tempora sint.',
  'userId': '7d910620-84e1-49fc-951e-d375587b8189',
  'created_at': '2018-04-10T17:05:53.637Z'
}, {
  'uuid': '0a402ffd-3d7c-491e-957b-a521b823fe30',
  'chatId': 'a4fb2a31-7e6f-4103-b512-3a0e1856b42d',
  'text': 'Dignissimos praesentium quo tenetur facere sed voluptatibus doloribus.',
  'userId': '7d910620-84e1-49fc-951e-d375587b8189',
  'created_at': '2018-04-10T19:04:30.895Z'
}, {
  'uuid': 'ffbdadc3-8029-45d4-85d1-5caa50064836',
  'chatId': 'a4fb2a31-7e6f-4103-b512-3a0e1856b42d',
  'text': 'Dolorem repudiandae ut ipsum maiores omnis deleniti libero similique.',
  'userId': '7d910620-84e1-49fc-951e-d375587b8189',
  'created_at': '2018-04-11T00:24:35.538Z'
}, {
  'uuid': 'ade76548-7eed-448d-85b9-b3f73a7caf3f',
  'chatId': 'a4fb2a31-7e6f-4103-b512-3a0e1856b42d',
  'text': 'Quia et nulla officiis sed incidunt.',
  'userId': '7d910620-84e1-49fc-951e-d375587b8189',
  'created_at': '2018-04-10T20:07:30.303Z'
}, {
  'uuid': 'f887af23-b252-4ac7-9f69-cb9161ac9f3b',
  'chatId': 'b1f03c8b-837f-4579-a18b-974d3ce93f3b',
  'text': 'Delectus sed aperiam.',
  'userId': '6a03248b-1752-4332-a3a9-7108528cc9d3',
  'created_at': '2018-04-10T23:33:05.619Z'
}, {
  'uuid': 'c87bae69-5c3e-4546-9694-ff339bdf35de',
  'chatId': 'b1f03c8b-837f-4579-a18b-974d3ce93f3b',
  'text': 'Ad nam perspiciatis.',
  'userId': '28d9f265-74d7-4f85-83d4-6a21fca57dcf',
  'created_at': '2018-04-10T07:12:52.646Z'
}, {
  'uuid': '6ecfe4f2-bc8b-4ced-b569-d48ced93eb1f',
  'chatId': 'b1f03c8b-837f-4579-a18b-974d3ce93f3b',
  'text': 'Numquam expedita vero.',
  'userId': '28d9f265-74d7-4f85-83d4-6a21fca57dcf',
  'created_at': '2018-04-10T18:40:01.513Z'
}, {
  'uuid': 'e5a22400-92d8-4f7b-86c2-d82ce81e252f',
  'chatId': 'b1f03c8b-837f-4579-a18b-974d3ce93f3b',
  'text': 'Nemo aliquid molestiae veniam maxime molestiae velit pariatur.',
  'userId': '28d9f265-74d7-4f85-83d4-6a21fca57dcf',
  'created_at': '2018-04-11T03:56:04.139Z'
}, {
  'uuid': 'ffb0733c-648a-4d5b-8730-7e6b80f15140',
  'chatId': 'b1f03c8b-837f-4579-a18b-974d3ce93f3b',
  'text': 'Quis aut rerum illum.',
  'userId': '28d9f265-74d7-4f85-83d4-6a21fca57dcf',
  'created_at': '2018-04-10T09:04:51.772Z'
}, {
  'uuid': '3523d9b3-43b1-4190-8dba-45df3e5e7458',
  'chatId': 'b1f03c8b-837f-4579-a18b-974d3ce93f3b',
  'text': 'Eos laborum quo quis repellat qui aut et quibusdam consequatur.',
  'userId': '65a6eb21-67b5-45c3-9af7-faca2d9b60d4',
  'created_at': '2018-04-11T05:01:13.162Z'
}, {
  'uuid': '52baaf8e-3bca-41c8-bbad-945bae0d681a',
  'chatId': 'b1f03c8b-837f-4579-a18b-974d3ce93f3b',
  'text': 'Inventore labore similique eaque ipsam sunt est deleniti.',
  'userId': '65a6eb21-67b5-45c3-9af7-faca2d9b60d4',
  'created_at': '2018-04-10T14:40:01.818Z'
}, {
  'uuid': 'd63b9475-669a-49fb-b8eb-63a50bbc8fd0',
  'chatId': 'b1f03c8b-837f-4579-a18b-974d3ce93f3b',
  'text': 'Sunt et vero nemo voluptate sint eos quae tempore.',
  'userId': '65a6eb21-67b5-45c3-9af7-faca2d9b60d4',
  'created_at': '2018-04-10T07:44:03.117Z'
}, {
  'uuid': '8bec71cc-eb61-4d8d-ace7-b3a343f5efc8',
  'chatId': 'b1f03c8b-837f-4579-a18b-974d3ce93f3b',
  'text': 'Voluptatem vel hic mollitia laborum.',
  'userId': '65a6eb21-67b5-45c3-9af7-faca2d9b60d4',
  'created_at': '2018-04-10T14:46:17.356Z'
}];

// Add user to map 
Messages.map(function (item) {
  var tmp = Object(__WEBPACK_IMPORTED_MODULE_0__user__["b" /* getUser */])().find(function (x) {
    return x.uuid === item.userId;
  });
  item.user = {
    'uuid': tmp.uuid,
    'name': tmp.name,
    'avatar': tmp.avatar
  };
  return item;
});

// add messages to group
Groups.map(function (item) {
  item.messages = Messages.filter(function (x) {
    return x.chatId === item.uuid;
  });
  item.user = Object(__WEBPACK_IMPORTED_MODULE_0__user__["b" /* getUser */])().find(function (x) {
    return x.uuid === item.created_by;
  });
  return item;
});

// get chat group
var getChatById = function getChatById(uuid) {
  return uuid !== undefined ? Groups.find(function (x) {
    return x.uuid === uuid;
  }) : Groups[0];
};



/***/ }),

/***/ 212:
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VCircle_css__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VCircle_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__VCircle_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuetify_es5_mixins_colorable__ = __webpack_require__(240);
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

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(239);

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

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".circle {\n  border-radius: 3px;\n  padding: 0.25em 0.4em;\n  font-weight: 400;\n  line-height: 1.3;\n  font-size: 85%;\n}\n.circle:empty {\n  display: inline-block;\n  vertical-align: inherit;\n}\n.circle-pill {\n  color: #fff;\n  padding-right: 0.6em;\n  padding-left: 0.6em;\n  border-radius: 10rem;\n}\n.circle-sm {\n  line-height: 1.2;\n  padding-top: 1px;\n  padding-bottom: 2px;\n  font-size: 75%;\n}\n.circle-lg {\n  line-height: 1.5;\n  padding: 5px 7px;\n  font-size: 95%;\n}\n.circle-xl {\n  line-height: 1.7;\n  padding: 7px 9px;\n  font-size: 100%;\n}\n.circle-dot {\n  width: 8px;\n  height: 8px;\n  padding: 0;\n  border-radius: 100%;\n  vertical-align: middle;\n}\n.circle-dot.circle-sm {\n  width: 6px;\n  height: 6px;\n}\n.circle-dot.circle-lg {\n  width: 10px;\n  height: 10px;\n}\n.circle-dot.circle-xl {\n  width: 12px;\n  height: 12px;\n}\n.circle-ring {\n  position: relative;\n  width: 10px;\n  height: 10px;\n  padding: 0;\n  border-radius: 100%;\n  vertical-align: middle;\n}\n.circle-ring::after {\n  content: '';\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background-color: #fff;\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n.circle-ring.circle-sm {\n  width: 8px;\n  height: 8px;\n}\n.circle-ring.circle-sm::after {\n  width: 4px;\n  height: 4px;\n}\n.circle-ring.circle-lg {\n  width: 12px;\n  height: 12px;\n}\n.circle-ring.circle-lg::after {\n  width: 8px;\n  height: 8px;\n}\n.circle-ring.circle-xl {\n  width: 14px;\n  height: 14px;\n}\n.circle-ring.circle-xl::after {\n  width: 10px;\n  height: 10px;\n}\n.circle-ring.fill::after {\n  -webkit-transform: scale(0);\n  transform: scale(0);\n}\n.circle-bold {\n  text-transform: uppercase;\n  font-weight: 500;\n  letter-spacing: 1px;\n}\n", ""]);

// exports


/***/ }),

/***/ 240:
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

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(301), __esModule: true };

/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(302);
module.exports = __webpack_require__(136).Object.assign;


/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(158);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(303) });


/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(172);
var gOPS = __webpack_require__(304);
var pIE = __webpack_require__(212);
var toObject = __webpack_require__(180);
var IObject = __webpack_require__(159);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(141)(function () {
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

/***/ 304:
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 462:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(463)
/* template */
var __vue_template__ = __webpack_require__(464)
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
Component.options.__file = "front_end/components/chat/ChatWindow.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6dcb9ebe", Component.options)
  } else {
    hotAPI.reload("data-v-6dcb9ebe", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_chat__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_user__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_perfect_scrollbar__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_perfect_scrollbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vue_perfect_scrollbar__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    VuePerfectScrollbar: __WEBPACK_IMPORTED_MODULE_3_vue_perfect_scrollbar___default.a
  },
  props: {
    uuid: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: null
    }
  },
  computed: {
    chat: function chat() {
      var chatOrigin = {
        title: 'Chat',
        users: [],
        messages: []
      };
      var chat = Object(__WEBPACK_IMPORTED_MODULE_1__api_chat__["c" /* getChatById */])(this.$route.params.uuid);
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(chatOrigin, chat);
    },
    computeHeight: function computeHeight() {
      return {
        height: this.height || ''
      };
    }
  },

  methods: {
    getAvatar: function getAvatar(uid) {
      return Object(__WEBPACK_IMPORTED_MODULE_2__api_user__["c" /* getUserById */])(uid).avatar;
    }
  }
});

/***/ }),

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    { staticClass: "chat-room" },
    [
      _c(
        "v-toolbar",
        {
          staticClass: "white chat-room--toolbar",
          attrs: { card: "", dense: "", flat: "", light: "" }
        },
        [
          _c(
            "v-btn",
            { attrs: { icon: "" } },
            [
              _c("v-icon", { attrs: { color: "text--secondary" } }, [
                _vm._v("keyboard_arrow_left")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _vm.chat.users
            ? _vm._l(_vm.chat.users, function(user_id, index) {
                return _c(
                  "v-avatar",
                  {
                    key: index,
                    staticClass: "avatar-stack",
                    attrs: { size: "32" }
                  },
                  [
                    _c("img", {
                      attrs: { src: _vm.getAvatar(user_id), alt: "" }
                    })
                  ]
                )
              })
            : _vm._e(),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c("v-toolbar-title", [_c("h4", [_vm._v("Chat Channel")])]),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-tooltip",
            { attrs: { bottom: "" } },
            [
              _c(
                "v-btn",
                { attrs: { slot: "activator", icon: "" }, slot: "activator" },
                [
                  _c("v-icon", { attrs: { color: "text--secondary" } }, [
                    _vm._v("add")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c("span", [_vm._v("Add user")])
            ],
            1
          )
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "vue-perfect-scrollbar",
        {
          staticClass: "chat-room--scrollbar grey lighten-5",
          style: _vm.computeHeight
        },
        [
          _c(
            "v-card-text",
            { staticClass: "chat-room--list pa-3" },
            [
              _vm._l(_vm.chat.messages, function(item, index) {
                return [
                  _c(
                    "div",
                    {
                      key: index,
                      staticClass: "messaging-item layout row my-4",
                      class: [index % 2 == 0 ? "reverse" : ""]
                    },
                    [
                      _c(
                        "v-avatar",
                        { staticClass: "indigo mx-1", attrs: { size: "40" } },
                        [
                          _c("img", {
                            attrs: { src: item.user.avatar, alt: "" }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "messaging--body layout column mx-2" },
                        [
                          _c(
                            "p",
                            {
                              staticClass: "pa-2",
                              class: [
                                index % 2 == 0 ? "primary white--text" : "white"
                              ],
                              attrs: { value: true }
                            },
                            [
                              _vm._v(
                                "\n              " +
                                  _vm._s(item.text) +
                                  "\n            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "caption px-2 text--secondary" },
                            [
                              _vm._v(
                                _vm._s(
                                  new Date(item.created_at).toLocaleString()
                                )
                              )
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("v-spacer")
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
      ),
      _vm._v(" "),
      _c(
        "v-card-actions",
        [
          _c(
            "v-text-field",
            {
              attrs: {
                "full-width": "",
                flat: "",
                clearable: "",
                solo: "",
                "append-icon": "send",
                label: "Type some message here"
              }
            },
            [
              _c(
                "v-icon",
                { attrs: { slot: "append-icon" }, slot: "append-icon" },
                [_vm._v("send")]
              ),
              _vm._v(" "),
              _c(
                "v-icon",
                {
                  staticClass: "mx-2",
                  attrs: { slot: "append-icon" },
                  slot: "append-icon"
                },
                [_vm._v("photo")]
              ),
              _vm._v(" "),
              _c(
                "v-icon",
                { attrs: { slot: "append-icon" }, slot: "append-icon" },
                [_vm._v("face")]
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
    require("vue-hot-reload-api")      .rerender("data-v-6dcb9ebe", module.exports)
  }
}

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ChatHistory__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ChatHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ChatHistory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ChatWindow__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ChatWindow___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ChatWindow__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    ChatHistory: __WEBPACK_IMPORTED_MODULE_0__ChatHistory___default.a,
    ChatWindow: __WEBPACK_IMPORTED_MODULE_1__ChatWindow___default.a
  },
  data: function data() {
    return {};
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

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(562)
/* template */
var __vue_template__ = __webpack_require__(563)
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
Component.options.__file = "front_end/components/chat/ChatHistory.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1dbaa894", Component.options)
  } else {
    hotAPI.reload("data-v-1dbaa894", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_chat__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_user__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__circle_VCircle__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_perfect_scrollbar__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_perfect_scrollbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vue_perfect_scrollbar__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    VuePerfectScrollbar: __WEBPACK_IMPORTED_MODULE_4_vue_perfect_scrollbar___default.a,
    VCircle: __WEBPACK_IMPORTED_MODULE_2__circle_VCircle__["a" /* default */]
  },

  data: function data() {
    return {
      chats: __WEBPACK_IMPORTED_MODULE_0__api_chat__["a" /* Groups */]
    };
  },

  methods: {
    chatRoute: function chatRoute(id) {
      return '/chat/messaging/' + id;
    },
    firstLetter: function firstLetter(title) {
      return title.charAt(0);
    },
    formatChatTime: function formatChatTime(s) {
      return new Date(s).toLocaleDateString();
    },
    computeTitle: function computeTitle(item) {
      var username = item.users.length === 1 ? Object(__WEBPACK_IMPORTED_MODULE_1__api_user__["c" /* getUserById */])(item.users[0]).username : '';
      return item.users.length === 1 ? username : item.title;
    },
    randomAvatarColor: function randomAvatarColor(item) {
      return item.users.length === 1 ? '' : __WEBPACK_IMPORTED_MODULE_3__util__["a" /* default */].randomElement(['blue', 'indigo', 'success', 'error', 'pink']);
    },
    chatStatusColor: function chatStatusColor(item) {
      return __WEBPACK_IMPORTED_MODULE_3__util__["a" /* default */].randomElement(['blue', 'indigo', 'success', 'error', 'pink']);
    }
  }
});

/***/ }),

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "chat-history" },
    [
      _c(
        "v-toolbar",
        { staticClass: "chat-history-toolbar", attrs: { dense: "" } },
        [
          _c("v-text-field", {
            attrs: {
              flat: "",
              solo: "",
              "full-width": "",
              clearable: "",
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
            { staticClass: "chat-history--list", attrs: { "two-line": "" } },
            [
              _c("v-subheader", [_vm._v("History")]),
              _vm._v(" "),
              _vm._l(_vm.chats, function(item, index) {
                return [
                  _c("v-divider", { key: index }),
                  _vm._v(" "),
                  _c(
                    "v-list-tile",
                    {
                      key: item.title + index,
                      staticClass: "chat-list",
                      attrs: { avatar: "", to: _vm.chatRoute(item.uuid) }
                    },
                    [
                      _c(
                        "v-list-tile-avatar",
                        { attrs: { color: _vm.randomAvatarColor(item) } },
                        [
                          item.users.length === 1
                            ? _c("img", { attrs: { src: item.user.avatar } })
                            : _c(
                                "span",
                                { staticClass: "white--text headline" },
                                [_vm._v(_vm._s(_vm.firstLetter(item.title)))]
                              )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile-content",
                        [
                          _c("v-list-tile-title", [
                            _vm._v(" " + _vm._s(_vm.computeTitle(item)))
                          ]),
                          _vm._v(" "),
                          _c("v-list-tile-sub-title", [
                            _vm._v("Some Latest message")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile-action",
                        [
                          _c("v-list-tile-action-text", [
                            _vm._v(
                              "\n              " +
                                _vm._s(_vm.formatChatTime(item.created_at)) +
                                "\n            "
                            )
                          ]),
                          _vm._v(" "),
                          _c("v-circle", {
                            attrs: {
                              dot: "",
                              small: "",
                              color: _vm.chatStatusColor(item)
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
    require("vue-hot-reload-api")      .rerender("data-v-1dbaa894", module.exports)
  }
}

/***/ }),

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    {
      staticClass: "fill-height pa-0 ma-0 messaging fluid",
      attrs: { id: "messaging" }
    },
    [
      !_vm.$vuetify.breakpoint.smAndDown
        ? [
            _c(
              "v-layout",
              { attrs: { row: "" } },
              [
                _c(
                  "v-flex",
                  { staticClass: "white", attrs: { lg3: "" } },
                  [_c("chat-history")],
                  1
                ),
                _vm._v(" "),
                _c("v-flex", { attrs: { lg9: "" } }, [_c("chat-window")], 1)
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
                      [_c("chat-history")],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.showWindow
                  ? _c(
                      "v-flex",
                      { attrs: { sm12: "" } },
                      [_c("chat-window")],
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
    require("vue-hot-reload-api")      .rerender("data-v-5419cba6", module.exports)
  }
}

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(560)
/* template */
var __vue_template__ = __webpack_require__(564)
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
Component.options.__file = "front_end/components/chat/ChatMessaging.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5419cba6", Component.options)
  } else {
    hotAPI.reload("data-v-5419cba6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});