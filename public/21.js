webpackJsonp([21],{

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(619)
/* template */
var __vue_template__ = __webpack_require__(620)
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
Component.options.__file = "front_end/pages/layout/Lists.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-708b4d5a", Component.options)
  } else {
    hotAPI.reload("data-v-708b4d5a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(124)
/* template */
var __vue_template__ = __webpack_require__(125)
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

/***/ 124:
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
  name: 'v-widget',
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
      default: 'white'
    }
  },

  data: function data() {
    return {};
  },

  computed: {}
});

/***/ }),

/***/ 125:
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

/***/ 619:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_user__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_VWidget__ = __webpack_require__(123);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      notifications: false,
      sound: false,
      video: false,
      widgets: true,
      invites: false,
      folders: [{ icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Photos', subtitle: 'Jan 9, 2014' }, { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Recipes', subtitle: 'Jan 17, 2014' }, { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Work', subtitle: 'Jan 28, 2014' }],
      files: [{ icon: 'assignment', iconClass: 'blue white--text', title: 'Vacation itinerary', subtitle: 'Jan 20, 2014' }, { icon: 'call_to_action', iconClass: 'amber white--text', title: 'Kitchen remodel', subtitle: 'Jan 10, 2014' }],
      topics: [{
        action: 'local_activity',
        title: 'Attractions',
        items: [{ title: 'List Item' }]
      }, {
        action: 'restaurant',
        title: 'Dining',
        active: true,
        items: [{ title: 'Breakfast & brunch' }, { title: 'New American' }, { title: 'Sushi' }]
      }, {
        action: 'school',
        title: 'Education',
        items: [{ title: 'List Item' }]
      }, {
        action: 'directions_run',
        title: 'Family',
        items: [{ title: 'List Item' }]
      }, {
        action: 'healing',
        title: 'Health',
        items: [{ title: 'List Item' }]
      }, {
        action: 'content_cut',
        title: 'Office',
        items: [{ title: 'List Item' }]
      }, {
        action: 'local_offer',
        title: 'Promotions',
        items: [{ title: 'List Item' }]
      }],
      chats: [{ header: 'Today' }, { avatar: 'https://randomuser.me/api/portraits/men/1.jpg', title: 'Brunch this weekend?', subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?" }, { divider: true, inset: true }, { avatar: 'https://randomuser.me/api/portraits/men/2.jpg', title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>', subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend." }, { divider: true, inset: true }, { avatar: 'https://randomuser.me/api/portraits/men/3.jpg', title: 'Oui oui', subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?" }, { divider: true, inset: true }, { avatar: 'https://randomuser.me/api/portraits/men/4.jpg', title: 'Birthday gift', subtitle: "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?" }, { divider: true, inset: true }, { avatar: 'https://randomuser.me/api/portraits/men/5.jpg', title: 'Recipe to try', subtitle: "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos." }]
    };
  },

  computed: {
    users: function users() {
      return Object(__WEBPACK_IMPORTED_MODULE_0__api_user__["b" /* getUser */])(3);
    },
    allUsers: function allUsers() {
      return Object(__WEBPACK_IMPORTED_MODULE_0__api_user__["b" /* getUser */])();
    }
  },
  methods: {
    handleClick: function handleClick(e) {
      return false;
    }
  }
});

/***/ }),

/***/ 620:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "pageList" } },
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
                { attrs: { lg4: "" } },
                [
                  _c("v-widget", { attrs: { title: "Default" } }, [
                    _c(
                      "div",
                      {
                        attrs: { slot: "widget-content" },
                        slot: "widget-content"
                      },
                      [
                        _c(
                          "v-list",
                          _vm._l(_vm.users, function(item) {
                            return _c(
                              "v-list-tile",
                              {
                                key: item.title,
                                attrs: { avatar: "" },
                                on: { click: _vm.handleClick }
                              },
                              [
                                _c(
                                  "v-list-tile-action",
                                  [
                                    _c("v-icon", { attrs: { color: "pink" } }, [
                                      _vm._v("star")
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-tile-content",
                                  [
                                    _c("v-list-tile-title", {
                                      domProps: {
                                        textContent: _vm._s(item.name)
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("v-list-tile-avatar", [
                                  _c("img", { attrs: { src: item.avatar } })
                                ])
                              ],
                              1
                            )
                          })
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-widget",
                    { staticClass: "mt-3", attrs: { title: "Two line" } },
                    [
                      _c(
                        "div",
                        {
                          attrs: { slot: "widget-content" },
                          slot: "widget-content"
                        },
                        [
                          _c(
                            "v-list",
                            { attrs: { "two-line": "", subheader: "" } },
                            [
                              _c("v-subheader", { attrs: { inset: "" } }, [
                                _vm._v("Folders")
                              ]),
                              _vm._v(" "),
                              _vm._l(_vm.folders, function(item) {
                                return _c(
                                  "v-list-tile",
                                  {
                                    key: item.title,
                                    attrs: { avatar: "" },
                                    on: { click: _vm.handleClick }
                                  },
                                  [
                                    _c(
                                      "v-list-tile-avatar",
                                      [
                                        _c(
                                          "v-icon",
                                          { class: [item.iconClass] },
                                          [_vm._v(_vm._s(item.icon))]
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-list-tile-content",
                                      [
                                        _c("v-list-tile-title", [
                                          _vm._v(_vm._s(item.title))
                                        ]),
                                        _vm._v(" "),
                                        _c("v-list-tile-sub-title", [
                                          _vm._v(_vm._s(item.subtitle))
                                        ])
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-list-tile-action",
                                      [
                                        _c(
                                          "v-btn",
                                          { attrs: { icon: "", ripple: "" } },
                                          [
                                            _c(
                                              "v-icon",
                                              {
                                                attrs: {
                                                  color: "grey lighten-1"
                                                }
                                              },
                                              [_vm._v("info")]
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
                              }),
                              _vm._v(" "),
                              _c("v-subheader", { attrs: { inset: "" } }, [
                                _vm._v("Files")
                              ]),
                              _vm._v(" "),
                              _vm._l(_vm.files, function(item) {
                                return _c(
                                  "v-list-tile",
                                  {
                                    key: item.title,
                                    attrs: { avatar: "" },
                                    on: { click: _vm.handleClick }
                                  },
                                  [
                                    _c(
                                      "v-list-tile-avatar",
                                      [
                                        _c(
                                          "v-icon",
                                          { class: [item.iconClass] },
                                          [_vm._v(_vm._s(item.icon))]
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-list-tile-content",
                                      [
                                        _c("v-list-tile-title", [
                                          _vm._v(_vm._s(item.title))
                                        ]),
                                        _vm._v(" "),
                                        _c("v-list-tile-sub-title", [
                                          _vm._v(_vm._s(item.subtitle))
                                        ])
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-list-tile-action",
                                      [
                                        _c(
                                          "v-btn",
                                          { attrs: { icon: "", ripple: "" } },
                                          [
                                            _c(
                                              "v-icon",
                                              {
                                                attrs: {
                                                  color: "grey lighten-1"
                                                }
                                              },
                                              [_vm._v("info")]
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
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-widget",
                    { staticClass: "mt-3", attrs: { title: "Three line" } },
                    [
                      _c(
                        "div",
                        {
                          attrs: { slot: "widget-content" },
                          slot: "widget-content"
                        },
                        [
                          _c(
                            "v-list",
                            { attrs: { "three-line": "" } },
                            [
                              _vm._l(_vm.chats, function(item, index) {
                                return [
                                  item.header
                                    ? _c("v-subheader", { key: item.header }, [
                                        _vm._v(_vm._s(item.header))
                                      ])
                                    : item.divider
                                      ? _c("v-divider", {
                                          key: index,
                                          attrs: { inset: item.inset }
                                        })
                                      : _c(
                                          "v-list-tile",
                                          {
                                            key: item.title,
                                            attrs: { avatar: "", href: "#" }
                                          },
                                          [
                                            _c("v-list-tile-avatar", [
                                              _c("img", {
                                                attrs: { src: item.avatar }
                                              })
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "v-list-tile-content",
                                              [
                                                _c("v-list-tile-title", {
                                                  domProps: {
                                                    innerHTML: _vm._s(
                                                      item.title
                                                    )
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c("v-list-tile-sub-title", {
                                                  domProps: {
                                                    innerHTML: _vm._s(
                                                      item.subtitle
                                                    )
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
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { lg4: "" } },
                [
                  _c("v-widget", { attrs: { title: "Complex" } }, [
                    _c(
                      "div",
                      {
                        attrs: { slot: "widget-content" },
                        slot: "widget-content"
                      },
                      [
                        _c(
                          "v-list",
                          { attrs: { "two-line": "", subheader: "" } },
                          [
                            _c("v-subheader", [_vm._v("General")]),
                            _vm._v(" "),
                            _c(
                              "v-list-tile",
                              { attrs: { avatar: "" } },
                              [
                                _c(
                                  "v-list-tile-content",
                                  [
                                    _c("v-list-tile-title", [
                                      _vm._v("Profile photo")
                                    ]),
                                    _vm._v(" "),
                                    _c("v-list-tile-sub-title", [
                                      _vm._v(
                                        "Change your Google+ profile photo"
                                      )
                                    ])
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-list-tile",
                              { attrs: { avatar: "" } },
                              [
                                _c(
                                  "v-list-tile-content",
                                  [
                                    _c("v-list-tile-title", [
                                      _vm._v("Show your status")
                                    ]),
                                    _vm._v(" "),
                                    _c("v-list-tile-sub-title", [
                                      _vm._v(
                                        "Your status is visible to everyone"
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
                        ),
                        _vm._v(" "),
                        _c("v-divider"),
                        _vm._v(" "),
                        _c(
                          "v-list",
                          { attrs: { "two-line": "", subheader: "" } },
                          [
                            _c("v-subheader", [
                              _vm._v("Hangout notifications")
                            ]),
                            _vm._v(" "),
                            _c(
                              "v-list-tile",
                              { attrs: { avatar: "" } },
                              [
                                _c(
                                  "v-list-tile-action",
                                  [
                                    _c("v-checkbox", {
                                      model: {
                                        value: _vm.notifications,
                                        callback: function($$v) {
                                          _vm.notifications = $$v
                                        },
                                        expression: "notifications"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-tile-content",
                                  [
                                    _c("v-list-tile-title", [
                                      _vm._v("Notifications")
                                    ]),
                                    _vm._v(" "),
                                    _c("v-list-tile-sub-title", [
                                      _vm._v("Allow notifications")
                                    ])
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-list-tile",
                              { attrs: { avatar: "" } },
                              [
                                _c(
                                  "v-list-tile-action",
                                  [
                                    _c("v-checkbox", {
                                      model: {
                                        value: _vm.sound,
                                        callback: function($$v) {
                                          _vm.sound = $$v
                                        },
                                        expression: "sound"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-tile-content",
                                  [
                                    _c("v-list-tile-title", [_vm._v("Sound")]),
                                    _vm._v(" "),
                                    _c("v-list-tile-sub-title", [
                                      _vm._v("Hangouts message")
                                    ])
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-list-tile",
                              { attrs: { avatar: "" } },
                              [
                                _c(
                                  "v-list-tile-action",
                                  [
                                    _c("v-checkbox", {
                                      model: {
                                        value: _vm.video,
                                        callback: function($$v) {
                                          _vm.video = $$v
                                        },
                                        expression: "video"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-tile-content",
                                  [
                                    _c("v-list-tile-title", [
                                      _vm._v("Video sounds")
                                    ]),
                                    _vm._v(" "),
                                    _c("v-list-tile-sub-title", [
                                      _vm._v("Hangouts video call")
                                    ])
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-list-tile",
                              { attrs: { avatar: "" } },
                              [
                                _c(
                                  "v-list-tile-action",
                                  [
                                    _c("v-checkbox", {
                                      model: {
                                        value: _vm.invites,
                                        callback: function($$v) {
                                          _vm.invites = $$v
                                        },
                                        expression: "invites"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-tile-content",
                                  [
                                    _c("v-list-tile-title", [
                                      _vm._v("Invites")
                                    ]),
                                    _vm._v(" "),
                                    _c("v-list-tile-sub-title", [
                                      _vm._v("Notify when receiving invites")
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
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-widget",
                    {
                      staticClass: "mt-3",
                      attrs: { title: "Complex (Three-line)" }
                    },
                    [
                      _c(
                        "div",
                        {
                          attrs: { slot: "widget-content" },
                          slot: "widget-content"
                        },
                        [
                          _c(
                            "v-list",
                            { attrs: { "three-line": "", subheader: "" } },
                            [
                              _c("v-subheader", [_vm._v("User Controls")]),
                              _vm._v(" "),
                              _c(
                                "v-list-tile",
                                [
                                  _c(
                                    "v-list-tile-content",
                                    [
                                      _c("v-list-tile-title", [
                                        _vm._v("Content filtering")
                                      ]),
                                      _vm._v(" "),
                                      _c("v-list-tile-sub-title", [
                                        _vm._v(
                                          "Set the content filtering level to restrict appts that can be downloaded"
                                        )
                                      ])
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-list-tile",
                                [
                                  _c(
                                    "v-list-tile-content",
                                    [
                                      _c("v-list-tile-title", [
                                        _vm._v("Password")
                                      ]),
                                      _vm._v(" "),
                                      _c("v-list-tile-sub-title", [
                                        _vm._v(
                                          "Require password for purchase or use password to restrict purchase"
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
                          ),
                          _vm._v(" "),
                          _c("v-divider"),
                          _vm._v(" "),
                          _c(
                            "v-list",
                            { attrs: { "three-line": "", subheader: "" } },
                            [
                              _c("v-subheader", [_vm._v("General")]),
                              _vm._v(" "),
                              _c(
                                "v-list-tile",
                                { attrs: { href: "javascript:;" } },
                                [
                                  _c(
                                    "v-list-tile-action",
                                    [
                                      _c("v-checkbox", {
                                        attrs: { readonly: "" },
                                        model: {
                                          value: _vm.notifications,
                                          callback: function($$v) {
                                            _vm.notifications = $$v
                                          },
                                          expression: "notifications"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-list-tile-content",
                                    {
                                      on: {
                                        click: function($event) {
                                          _vm.notifications = !_vm.notifications
                                        }
                                      }
                                    },
                                    [
                                      _c("v-list-tile-title", [
                                        _vm._v("Notifications")
                                      ]),
                                      _vm._v(" "),
                                      _c("v-list-tile-sub-title", [
                                        _vm._v(
                                          "Notify me about updates to apps or games that I downloaded"
                                        )
                                      ])
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-list-tile",
                                { attrs: { href: "javascript:;" } },
                                [
                                  _c(
                                    "v-list-tile-action",
                                    [
                                      _c("v-checkbox", {
                                        model: {
                                          value: _vm.sound,
                                          callback: function($$v) {
                                            _vm.sound = $$v
                                          },
                                          expression: "sound"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-list-tile-content",
                                    {
                                      on: {
                                        click: function($event) {
                                          _vm.sound = !_vm.sound
                                        }
                                      }
                                    },
                                    [
                                      _c("v-list-tile-title", [
                                        _vm._v("Sound")
                                      ]),
                                      _vm._v(" "),
                                      _c("v-list-tile-sub-title", [
                                        _vm._v(
                                          "Auto-update apps at any time. Data charges may apply"
                                        )
                                      ])
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-list-tile",
                                { attrs: { href: "javascript:;" } },
                                [
                                  _c(
                                    "v-list-tile-action",
                                    [
                                      _c("v-checkbox", {
                                        model: {
                                          value: _vm.widgets,
                                          callback: function($$v) {
                                            _vm.widgets = $$v
                                          },
                                          expression: "widgets"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-list-tile-content",
                                    {
                                      on: {
                                        click: function($event) {
                                          _vm.widgets = !_vm.widgets
                                        }
                                      }
                                    },
                                    [
                                      _c("v-list-tile-title", [
                                        _vm._v("Auto-add widgets")
                                      ]),
                                      _vm._v(" "),
                                      _c("v-list-tile-sub-title", [
                                        _vm._v(
                                          "Automatically add home screen widgets"
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
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-widget",
                    {
                      staticClass: "mt-3",
                      attrs: { title: "Long dark list with scroll" }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticStyle: {
                            "max-height": "250px",
                            "overflow-y": "scroll"
                          },
                          attrs: { slot: "widget-content" },
                          slot: "widget-content"
                        },
                        [
                          _c(
                            "v-list",
                            { attrs: { dense: "", dark: "" } },
                            _vm._l(_vm.allUsers, function(item) {
                              return _c(
                                "v-list-tile",
                                {
                                  key: item.title,
                                  attrs: { avatar: "" },
                                  on: { click: _vm.handleClick }
                                },
                                [
                                  _c(
                                    "v-list-tile-action",
                                    [
                                      _c(
                                        "v-icon",
                                        { attrs: { color: "pink" } },
                                        [_vm._v("star")]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-list-tile-content",
                                    [
                                      _c("v-list-tile-title", {
                                        domProps: {
                                          textContent: _vm._s(item.name)
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("v-list-tile-avatar", [
                                    _c("img", { attrs: { src: item.avatar } })
                                  ])
                                ],
                                1
                              )
                            })
                          )
                        ],
                        1
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { lg4: "" } },
                [
                  _c("v-widget", { attrs: { title: "Expandable list" } }, [
                    _c(
                      "div",
                      {
                        attrs: { slot: "widget-content" },
                        slot: "widget-content"
                      },
                      [
                        _c(
                          "v-list",
                          _vm._l(_vm.topics, function(item) {
                            return _c(
                              "v-list-group",
                              {
                                key: item.title,
                                attrs: {
                                  "prepend-icon": item.action,
                                  "no-action": ""
                                },
                                model: {
                                  value: item.active,
                                  callback: function($$v) {
                                    _vm.$set(item, "active", $$v)
                                  },
                                  expression: "item.active"
                                }
                              },
                              [
                                _c(
                                  "v-list-tile",
                                  {
                                    attrs: { slot: "activator" },
                                    slot: "activator"
                                  },
                                  [
                                    _c(
                                      "v-list-tile-content",
                                      [
                                        _c("v-list-tile-title", [
                                          _vm._v(_vm._s(item.title))
                                        ])
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _vm._l(item.items, function(subItem) {
                                  return _c(
                                    "v-list-tile",
                                    {
                                      key: subItem.title,
                                      attrs: { href: "#" }
                                    },
                                    [
                                      _c(
                                        "v-list-tile-content",
                                        [
                                          _c("v-list-tile-title", [
                                            _vm._v(_vm._s(subItem.title))
                                          ])
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-list-tile-action",
                                        [
                                          _c("v-icon", [
                                            _vm._v(_vm._s(subItem.action))
                                          ])
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
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-card",
                    { staticClass: "mt-3" },
                    [
                      _c(
                        "v-card-media",
                        {
                          attrs: { src: "/static/bg/15.jpg", height: "300px" }
                        },
                        [
                          _c(
                            "v-layout",
                            { staticClass: "media", attrs: { column: "" } },
                            [
                              _c(
                                "v-card-title",
                                [
                                  _c(
                                    "v-btn",
                                    { attrs: { dark: "", icon: "" } },
                                    [_c("v-icon", [_vm._v("chevron_left")])],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("v-spacer"),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      staticClass: "mr-3",
                                      attrs: { dark: "", icon: "" }
                                    },
                                    [_c("v-icon", [_vm._v("edit")])],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    { attrs: { dark: "", icon: "" } },
                                    [_c("v-icon", [_vm._v("more_vert")])],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-card-title",
                                { staticClass: "white--text pl-5 pt-5" },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "display-1 pl-5 pt-5" },
                                    [_vm._v("Ali Conners")]
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list",
                        { attrs: { "two-line": "" } },
                        [
                          _c(
                            "v-list-tile",
                            { attrs: { href: "" } },
                            [
                              _c(
                                "v-list-tile-action",
                                [
                                  _c("v-icon", { attrs: { color: "indigo" } }, [
                                    _vm._v("phone")
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-list-tile-content",
                                [
                                  _c("v-list-tile-title", [
                                    _vm._v("(650) 555-1234")
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
                                [_c("v-icon", [_vm._v("chat")])],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-tile",
                            { attrs: { href: "#" } },
                            [
                              _c("v-list-tile-action"),
                              _vm._v(" "),
                              _c(
                                "v-list-tile-content",
                                [
                                  _c("v-list-tile-title", [
                                    _vm._v("(323) 555-6789")
                                  ]),
                                  _vm._v(" "),
                                  _c("v-list-tile-sub-title", [_vm._v("Work")])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-list-tile-action",
                                [_c("v-icon", [_vm._v("chat")])],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-divider", { attrs: { inset: "" } }),
                          _vm._v(" "),
                          _c(
                            "v-list-tile",
                            { attrs: { href: "#" } },
                            [
                              _c(
                                "v-list-tile-action",
                                [
                                  _c("v-icon", { attrs: { color: "indigo" } }, [
                                    _vm._v("mail")
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-list-tile-content",
                                [
                                  _c("v-list-tile-title", [
                                    _vm._v("aliconnors@example.com")
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
                          _c(
                            "v-list-tile",
                            { attrs: { href: "#" } },
                            [
                              _c("v-list-tile-action"),
                              _vm._v(" "),
                              _c(
                                "v-list-tile-content",
                                [
                                  _c("v-list-tile-title", [
                                    _vm._v("ali_connors@example.com")
                                  ]),
                                  _vm._v(" "),
                                  _c("v-list-tile-sub-title", [_vm._v("Work")])
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-divider", { attrs: { inset: "" } }),
                          _vm._v(" "),
                          _c(
                            "v-list-tile",
                            { attrs: { href: "#" } },
                            [
                              _c(
                                "v-list-tile-action",
                                [
                                  _c("v-icon", { attrs: { color: "indigo" } }, [
                                    _vm._v("location_on")
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-list-tile-content",
                                [
                                  _c("v-list-tile-title", [
                                    _vm._v("1400 Main Street")
                                  ]),
                                  _vm._v(" "),
                                  _c("v-list-tile-sub-title", [
                                    _vm._v("Orlando, FL 79938")
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
    require("vue-hot-reload-api")      .rerender("data-v-708b4d5a", module.exports)
  }
}

/***/ })

});