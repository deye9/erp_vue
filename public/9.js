webpackJsonp([9],{

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(651)
/* template */
var __vue_template__ = __webpack_require__(652)
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
Component.options.__file = "front_end/pages/layout/Timeline.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a48a821a", Component.options)
  } else {
    hotAPI.reload("data-v-a48a821a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

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

/***/ 141:
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

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getMail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getMailById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getMailByType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user__ = __webpack_require__(141);


var MailItem = [{
  'uuid': 'bb428c03-1bc6-4f3d-9d5e-268ec44eebc3',
  'type': 'trashed',
  'tag': 'Promotion',
  'title': 'Similique voluptate laboriosam laborum.',
  'created_at': '2018-04-10T23:10:41.266Z',
  'content': 'Tempora et optio quis ducimus. Veniam et qui quia ut necessitatibus architecto ad. Vel ut consequatur non sint est error sint.\n \rError asperiores a esse ad. Rerum eum magni aperiam voluptas excepturi. Suscipit est modi magni et ut eum ut.\n \rCumque eius voluptatem sit qui nisi. Eos eum est cumque est ipsa odit earum voluptas. Dolorum ipsam rerum ut.\n \rAutem quia delectus quia rerum deleniti reprehenderit voluptatibus quisquam. Necessitatibus molestias vel odio neque expedita nulla libero voluptatem numquam. In labore modi. Unde molestiae id molestias vero delectus rerum nesciunt voluptatum exercitationem.\n \rCorrupti et voluptatibus ea dolorem laboriosam. Amet cupiditate beatae nulla. Facilis sit est. Sed ducimus ducimus alias rem nam.',
  'fromId': '14ddae1e-986d-42f4-8d17-46a02d469b2b',
  'attachments': []
}, {
  'uuid': 'a19bf9fc-e877-49e7-a75a-b089a2c35f18',
  'type': 'draft',
  'tag': 'Social',
  'title': 'Ipsum maiores ab amet voluptas enim.',
  'created_at': '2018-04-10T12:05:32.328Z',
  'content': 'Dolores corporis quam perferendis consequatur autem minus recusandae non. Id corrupti qui et. Sed a accusamus veritatis earum et consequatur mollitia. Iure consequatur omnis aspernatur itaque laboriosam aut ut. Enim repellendus sed similique minima voluptatem sed ea. Exercitationem aut est eius rerum.\n \rUt veniam quidem et numquam reprehenderit aliquam. Omnis eos qui enim hic modi maiores. Nisi itaque et unde ullam laborum ut aut facilis. Enim qui aut est.\n \rTotam molestiae velit aperiam rerum. Voluptatum quo ab. Quae cupiditate sit quia illum delectus nobis adipisci sunt.\n \rAlias nostrum ad ipsam aut nulla et repudiandae incidunt doloribus. Vero rerum omnis. Consequatur eius et accusamus quaerat et unde animi. Sed et quaerat sit quis mollitia. Accusantium voluptatem perferendis qui enim similique molestiae ut sit velit.\n \rProvident quibusdam excepturi asperiores vitae earum ut fugiat. Eligendi illum nisi dolor. Maiores velit vitae minus.',
  'fromId': '60d07662-bfec-42c7-b044-c81bc4ff8c7a',
  'attachments': []
}, {
  'uuid': '910d7e0a-f3b0-47a7-bb53-9036ed717298',
  'type': 'starred',
  'tag': 'Work',
  'title': 'Quo consequatur cumque.',
  'created_at': '2018-04-11T02:12:00.447Z',
  'content': 'Accusamus enim nihil aliquam soluta praesentium repudiandae autem voluptatum. Dolore aut at incidunt molestias commodi odit et. Quis possimus et dolorem. Cupiditate nulla voluptas. Quis sit ab.\n \rIusto accusamus neque commodi est omnis et aut doloremque autem. Illo unde est deserunt accusantium. Quia iusto velit autem dignissimos natus sit voluptatum. Aliquam et quibusdam mollitia consectetur quod aut at eveniet consequatur.\n \rMagnam et repellat tenetur libero. Quasi autem animi exercitationem est enim dolores facere earum fugit. Porro necessitatibus est amet quis. Officia qui itaque inventore magnam ut temporibus ad.\n \rOfficia ratione velit vel consequatur et est. Quibusdam consequatur et earum et ut consequatur dolorem at minus. Sit aperiam voluptas dolorem id. Et ad deleniti sunt consequatur omnis commodi distinctio dolor. Asperiores eum similique est aut. Totam harum voluptates ipsum dolores eos dolor ut.\n \rNam qui sed. Maiores occaecati voluptatibus iste quae temporibus odit. Voluptas vel quis suscipit ex ab. Dolores aut explicabo modi rerum et odit similique. Ut officia corrupti rerum repellendus laborum. Velit in aliquam ex blanditiis et ab.',
  'fromId': '77f4b102-9df5-43ba-966a-6f816806c5e2',
  'attachments': []
}, {
  'uuid': 'c79cb60a-baf8-4349-b9c3-88d567b965a2',
  'type': 'draft',
  'tag': 'Social',
  'title': 'Qui consequatur et rerum optio atque.',
  'created_at': '2018-04-10T18:56:23.358Z',
  'content': 'Explicabo quidem a dolore modi nihil id nostrum voluptates ex. Repellendus quis tempore unde molestiae unde ipsa. Excepturi quod omnis facere est porro incidunt ratione suscipit.\n \rCupiditate et sunt iure aperiam. Beatae cupiditate cumque. Dolorem iste quia unde cum est molestiae est.\n \rMolestiae et sit dolore iste ipsam voluptas quia. Ut quia unde culpa ipsa commodi possimus. Ut maiores molestiae sunt qui labore. Provident sit eius recusandae numquam eum exercitationem quis asperiores.\n \rEaque et at ea voluptatem id qui omnis. Aut ex rem. Iste voluptate magni sequi eaque sit numquam accusantium aut molestias.\n \rSit laboriosam magni illum accusantium aut nulla corporis sed. Et ratione iusto dolor porro voluptatem voluptatem voluptate. Autem non animi. Aut unde aliquid omnis natus suscipit. Saepe dicta veritatis id autem doloremque tempore corrupti.',
  'fromId': '7d910620-84e1-49fc-951e-d375587b8189',
  'attachments': []
}, {
  'uuid': '35bddac1-1046-4c96-a1ac-ffd75def7f5a',
  'type': 'trashed',
  'tag': 'Social',
  'title': 'Reiciendis sunt aliquid.',
  'created_at': '2018-04-10T19:58:14.408Z',
  'content': 'Qui facere quia est consequatur nihil dolores dolorem magni eum. Occaecati ab atque ut vitae ipsum officiis et expedita. Quisquam architecto repellat eos. Ut repellendus animi rerum delectus natus. Explicabo est enim est fugiat nisi est alias non.\n \rMaxime autem eum ut est et dolorem. Non ab deserunt voluptatem sequi deleniti quo commodi. Est tempore rerum quia. Id est temporibus iste voluptas amet omnis amet. Veniam blanditiis consequuntur laborum.\n \rVoluptates nihil ut. Doloremque dicta at consequuntur qui. Sit culpa possimus aut nemo. Aut atque quaerat voluptatum nostrum voluptatum laudantium officia quia incidunt. Quia est earum aut.\n \rQuisquam dolorum dolorum. Dicta quas veniam dignissimos fugiat. Ut nostrum dolores explicabo eos rem dolores dolorum autem. A dolorem eum reiciendis amet ea et.\n \rSit tempore ut. Culpa veniam voluptatum quod odio. Cum fugit autem doloremque quidem molestias labore.',
  'fromId': '46d6f992-5729-4588-b7f8-ce74f21157ba',
  'attachments': []
}, {
  'uuid': '0c914dfd-be0d-4d46-b963-47bcb064154f',
  'type': 'sent',
  'tag': 'Work',
  'title': 'Libero odit voluptate dolorem error cupiditate in.',
  'created_at': '2018-04-11T04:07:16.152Z',
  'content': 'Delectus nisi enim ut illum magni quasi. Voluptatem consequatur quia quis. Consectetur dolores molestiae debitis aut voluptatem recusandae sit. Ut voluptas expedita aut et possimus sint.\n \rAmet cumque corporis ipsam non iure autem. Aut molestiae est. Est itaque doloremque consequuntur nesciunt et error quibusdam.\n \rEos architecto dignissimos voluptatem ut voluptate quisquam. Fugiat provident iste perspiciatis provident accusamus rerum. Tempora et ducimus velit eaque ratione eum. Voluptas tempore ullam. Et cum eos dolor nesciunt perferendis est.\n \rPerferendis aperiam id adipisci ea distinctio totam ut fugit eaque. Qui harum autem et vero vero sit. Ex pariatur hic deleniti.\n \rVoluptatem tenetur dolorem omnis dolorem vel ratione vel dolores necessitatibus. Eius culpa harum excepturi. Corrupti ut aut. Vitae quia ut necessitatibus aliquam et. Libero mollitia sit et dicta.',
  'fromId': '65a6eb21-67b5-45c3-9af7-faca2d9b60d4',
  'attachments': []
}, {
  'uuid': '11538c3a-f2a7-4a7c-a237-4e61aa96423b',
  'type': 'sent',
  'tag': 'Personal',
  'title': 'Consequuntur nostrum aut iusto est porro voluptate.',
  'created_at': '2018-04-10T08:22:54.855Z',
  'content': 'Voluptatibus ipsum voluptatem. Recusandae eius ad quia et nisi similique non. Enim nulla suscipit sed. Est neque aut itaque asperiores quia accusantium quas.\n \rSit vel facere suscipit ut eaque sapiente saepe et voluptates. Magni numquam voluptatem. Dolores magnam harum omnis ipsam quia ut ut iste.\n \rOdio temporibus est possimus minima id magnam et quas. Architecto nobis rerum non. Eum ipsa unde. Atque eaque sequi officiis omnis rerum aut. Voluptate debitis perferendis atque illo consectetur cupiditate. Autem eaque eum aut incidunt sunt error natus nostrum.\n \rPariatur ad quae dolorem. Sint quo itaque repudiandae suscipit ut accusamus. Esse perspiciatis consequatur qui perspiciatis quia. Ut sed eveniet eveniet dolor nostrum quisquam numquam. Cumque facilis temporibus et non facilis neque omnis.\n \rConsectetur sunt totam enim odio voluptatum ratione fuga ut. Eaque alias deserunt laboriosam deserunt aliquid. Sequi fuga totam. Eos ipsa nobis eveniet ut.',
  'fromId': '28d9f265-74d7-4f85-83d4-6a21fca57dcf',
  'attachments': []
}, {
  'uuid': '0f0a5482-8e4f-42a0-b3bb-1f96bc04d85a',
  'type': 'draft',
  'tag': 'Promotion',
  'title': 'Sunt odit nisi sint cupiditate accusantium.',
  'created_at': '2018-04-11T05:59:14.238Z',
  'content': 'Saepe asperiores incidunt aspernatur. Non animi eos impedit et veritatis consequatur voluptas culpa. Nihil culpa voluptas dolor doloremque ad laboriosam sed. Ut dolor vel earum deserunt molestias sint quo delectus. Accusamus et corporis et inventore optio consectetur ea culpa. Repellat suscipit voluptas laudantium pariatur rerum eum mollitia ipsum maiores.\n \rCorporis quam aut voluptatem voluptas consequatur rerum in. Repudiandae id nihil tenetur asperiores. Qui impedit et est animi ducimus adipisci. Eaque esse qui ipsum laudantium distinctio.\n \rCulpa occaecati optio autem libero sequi sed. Autem doloremque consectetur beatae soluta inventore voluptas et consequatur voluptate. Magni aspernatur sint facere sed molestiae quae ut et.\n \rBeatae ea et et occaecati. Cupiditate adipisci tempora illo aliquid. Esse illum qui omnis adipisci nihil. Corrupti officiis voluptatem perferendis nobis recusandae temporibus aut. Qui et facilis quidem amet velit incidunt consequatur repellat iste. Id aut fugit omnis placeat consectetur nostrum.\n \rAb quae accusamus omnis quidem cupiditate illum sit. Atque possimus aut esse saepe dolorum eos veniam repellendus. Ullam debitis dolore quisquam omnis sed ab eum ipsa. Voluptas facilis labore sapiente saepe quia.',
  'fromId': '5c44b666-baca-4f18-a3cb-23068c6edc14',
  'attachments': []
}, {
  'uuid': '2b0e4083-00e4-48fd-9cb3-05434767ca66',
  'type': 'starred',
  'tag': 'Work',
  'title': 'Est deleniti dolores enim.',
  'created_at': '2018-04-11T01:37:34.384Z',
  'content': 'Esse consequatur id dolorum culpa quia saepe unde quo consequatur. Facilis tempore incidunt dolorem est. Nihil animi omnis voluptatem earum facilis nulla animi temporibus reprehenderit.\n \rDeserunt voluptatem qui qui et alias. Ut corporis totam ut ducimus labore et. Vitae ut minus suscipit occaecati hic eum eum.\n \rQuia eos aliquam aspernatur in voluptas quo. Rem harum hic exercitationem impedit et earum adipisci quo aliquid. Voluptas commodi ut ipsam. Et consequatur sed eveniet corrupti voluptatum a tempore repudiandae. Repellat nihil fugit rem in impedit quo corporis iste nihil. Rerum deleniti quia.\n \rEt tenetur doloremque eos iste odit error. Molestias in repellat ea. Beatae ipsa est dolor.\n \rOccaecati nostrum sed voluptatem voluptatibus. Itaque perspiciatis aperiam. Alias sit iste quas est velit nihil perferendis deleniti.',
  'fromId': 'afdb5033-5bcc-4cec-b932-353a83410b44',
  'attachments': []
}, {
  'uuid': 'bf7ab76b-c076-4992-a580-13b1859cd395',
  'type': 'sent',
  'tag': 'Work',
  'title': 'Et dolores odit quas quasi voluptas.',
  'created_at': '2018-04-10T08:36:08.703Z',
  'content': 'Maxime quaerat voluptate inventore eveniet nesciunt neque. Tempora laudantium dolorem facere nobis suscipit quam quia ut. Veniam et sed eaque laboriosam voluptates odit nihil ipsum.\n \rAliquam sit repellat. Eveniet vel consequatur est facilis dolore quae. Voluptatem doloribus expedita hic fugit reiciendis consequuntur et dolor veritatis.\n \rItaque deleniti ad accusantium labore quibusdam. Id quo nam natus nisi vero quam iure a ea. Eveniet autem non at autem accusantium dolores nihil odit. Aut iusto necessitatibus minima architecto quidem repellat.\n \rDolore cupiditate libero ratione quis qui quia. Harum maxime fuga quia quis ipsa. Animi provident facere corrupti eligendi dolorum dolores. Animi vel est tempore alias consequatur voluptatem. Explicabo maxime molestiae dolore. Voluptatem cumque aliquid.\n \rVitae voluptatem doloribus voluptate corporis. Qui qui quibusdam doloribus cum est. Libero impedit commodi et recusandae explicabo. Aliquam ratione eius cumque id quae. Sed veniam ut sit illum aut reprehenderit pariatur et. Praesentium totam sunt sint doloribus ab in illum.',
  'fromId': '899d0e31-b71e-4d95-a8a0-6a8bceb314bd',
  'attachments': []
}, {
  'uuid': '2d72dac8-42e8-4414-b14f-6b1680cbdcfb',
  'type': 'starred',
  'tag': 'Personal',
  'title': 'Aut consequuntur molestiae labore velit nihil consectetur facere rerum et.',
  'created_at': '2018-04-11T02:00:01.416Z',
  'content': 'Et temporibus alias et dolor. Expedita sapiente fuga ut consequuntur facilis omnis provident quia labore. Placeat omnis aperiam veritatis velit veritatis ut suscipit in. Blanditiis non praesentium sit rerum ullam. Voluptatem ex voluptates illo qui quaerat consequuntur distinctio.\n \rNesciunt ipsa iusto odit enim qui excepturi assumenda aut consectetur. Nisi deleniti eaque ratione illo ut ut. Recusandae consequatur harum. Voluptas dolor recusandae qui. Illum animi deserunt animi fugiat saepe et quia. Non id sapiente nihil earum.\n \rOfficiis eum ut similique reprehenderit ipsum. Id provident culpa harum ipsam in commodi. Voluptates assumenda harum aperiam aliquid assumenda. Ipsam aperiam unde molestiae earum dolores ullam aspernatur tempora officia. Porro dolores sit.\n \rAd et sed reiciendis illum quia ut qui. Velit sunt harum accusamus. Amet dolores reprehenderit vitae aut expedita nobis optio ad assumenda. Accusamus reprehenderit quaerat minima velit expedita eos animi autem occaecati. Quidem dolor eligendi nemo. Architecto harum sint fugit sit at dolorem reprehenderit vero quia.\n \rVoluptatum voluptate ad. Ipsa ut quos et sint et doloremque. A voluptas libero ipsum aut deleniti eaque facere nostrum sed. Nesciunt voluptas facere. Non et et ut.',
  'fromId': '77f4b102-9df5-43ba-966a-6f816806c5e2',
  'attachments': []
}, {
  'uuid': '156dfed3-0235-4a38-a5b2-6a99a2a39d59',
  'type': 'sent',
  'tag': 'Personal',
  'title': 'Corporis et voluptatem quam nam rem voluptas iure facilis tempora.',
  'created_at': '2018-04-11T02:30:04.516Z',
  'content': 'Inventore est minima esse deleniti porro in aut cumque. Voluptatem ut et nulla. Illo aliquid quidem. Corrupti fuga vel in consequuntur aut et rerum eaque. Enim nihil cumque non aliquid eos repellat quam et maiores.\n \rVeritatis vero qui aut corporis veritatis quo similique dicta quisquam. Est et praesentium rem ea accusantium nobis. Consequatur nisi quisquam. Quisquam officiis quis enim. Dolores quis qui dignissimos voluptatem ea. Animi repellendus cum occaecati sint est vero voluptatibus neque.\n \rId molestiae doloremque doloremque totam. Est adipisci deserunt rerum officiis expedita. Quis tempore aliquam ducimus sunt accusamus velit autem. Quam voluptates quaerat labore dolorem blanditiis. Et magni dolorem.\n \rUllam sunt voluptatum. Vero eum reprehenderit quas labore. Nulla aliquam expedita ex iste sit aut. Voluptatem possimus est qui aut praesentium consequatur iste dolores. Et est accusantium aliquid temporibus accusantium similique officiis officiis esse. Molestiae beatae quidem culpa recusandae animi sint.\n \rEnim esse consectetur quibusdam aliquid. Deserunt dicta eveniet doloremque id ex voluptas iste est sapiente. Possimus sed aliquam voluptatum dignissimos voluptate natus. Fugit rerum vero expedita accusamus sequi.',
  'fromId': 'da95e977-cd54-4077-a767-1b7f33ef6919',
  'attachments': []
}, {
  'uuid': '2eedaa3e-1509-49fc-b60b-069bfc83558b',
  'type': 'trashed',
  'tag': 'Personal',
  'title': 'Eligendi nam quia pariatur iusto commodi omnis dignissimos nihil.',
  'created_at': '2018-04-11T06:44:11.696Z',
  'content': 'Voluptatum est aut nulla occaecati. Sunt optio ea beatae. Occaecati quis et veritatis ipsum. Id hic eaque molestias facere. Impedit doloribus hic omnis.\n \rEt illo dolores. Suscipit aliquid dolorem. Esse est laboriosam voluptatibus. Quia voluptas repellendus.\n \rMinima molestiae illo corporis quae neque eligendi. Harum illo recusandae et dolor hic. In voluptas est quo iusto.\n \rEum soluta possimus atque quo cupiditate consequatur non. Non sed quidem porro explicabo. Perspiciatis omnis quis at eveniet asperiores quia. Cupiditate autem excepturi nobis id et dicta.\n \rQuibusdam minima sint molestias vitae incidunt voluptate voluptas et. Alias nihil rerum sapiente. Atque minus assumenda eveniet consectetur. Amet nulla odio nostrum architecto.',
  'fromId': '36a1ead7-57a0-4275-8a21-956194ab7cdf',
  'attachments': []
}, {
  'uuid': 'ef82e384-801e-49fb-91d4-1472ddc124fb',
  'type': 'trashed',
  'tag': 'Promotion',
  'title': 'Optio provident aspernatur nihil repellendus quia architecto.',
  'created_at': '2018-04-10T12:18:03.092Z',
  'content': 'Voluptas in mollitia tenetur voluptatem tempora ducimus est exercitationem est. Delectus tempore aut quae maxime soluta rerum. Doloremque et ratione recusandae perspiciatis ad. Voluptatem inventore error amet eos non est corporis aut. Quae aut autem.\n \rFuga architecto consequatur sed et dolorum animi neque vitae voluptatibus. Quasi et ducimus officia sint quibusdam ea dolores ipsa magni. In cumque ab est aut. Animi consequatur debitis dignissimos tempore voluptatum est suscipit provident neque.\n \rReprehenderit possimus voluptatem. Itaque beatae dolore fuga alias autem et omnis aspernatur. Sit et facilis blanditiis pariatur et tenetur dolores.\n \rConsequatur officiis in modi. Quis omnis molestias voluptatem. Et accusamus minus atque officiis aliquid quo ut quis inventore. Sint quod inventore magnam sint voluptates. Facilis dolorem dolorem harum veritatis repellat et suscipit.\n \rError occaecati expedita. Est ipsa rerum ab. Ipsum sed impedit a id et fugit non soluta.',
  'fromId': 'afdb5033-5bcc-4cec-b932-353a83410b44',
  'attachments': []
}, {
  'uuid': 'dae6e84d-4adb-4170-bc5f-087bc01b903d',
  'type': 'draft',
  'tag': 'Personal',
  'title': 'Id ipsam dolor facere quis numquam distinctio eveniet omnis et.',
  'created_at': '2018-04-10T22:26:07.420Z',
  'content': 'Est doloribus et pariatur ut et voluptatum sed repellendus rerum. Dolor deleniti iusto voluptatem. Ipsam soluta aliquid in ut. Quaerat qui culpa in ex ut accusantium non consectetur cum.\n \rEos corporis dolores corporis rem quam. Ducimus aliquam mollitia ratione quo. Sed dolor eum aut est sint quaerat mollitia. Sunt quasi iste facere voluptatem. Illum perferendis accusamus quos quisquam voluptatem ab iste distinctio nisi.\n \rEst laborum ea illo similique magnam autem ullam numquam. Consequatur perspiciatis aut neque temporibus molestiae. Sed ullam incidunt officiis sed assumenda possimus quibusdam ex consequatur.\n \rRepellat ex ut nobis eaque aliquam. Voluptatibus sed consequatur et velit veniam. Eum natus est unde voluptates delectus id quia quaerat dignissimos. Repudiandae laboriosam atque magnam est nam. Dolor laborum libero sed libero.\n \rOfficiis non quidem amet in laborum repellendus aliquam. Illo ducimus numquam qui voluptates. Accusamus accusamus qui voluptatem ullam velit qui modi omnis. Sed dolores voluptatibus maiores sed. Voluptas amet impedit est molestiae cupiditate quo. Itaque quo beatae corporis esse maxime sequi qui.',
  'fromId': '28d9f265-74d7-4f85-83d4-6a21fca57dcf',
  'attachments': []
}, {
  'uuid': 'afe865e9-1c5b-49b4-8832-3186efc50304',
  'type': 'sent',
  'tag': 'Personal',
  'title': 'Provident tempore aut in ipsam.',
  'created_at': '2018-04-11T05:28:24.777Z',
  'content': 'Sit ullam libero necessitatibus deserunt eum. Aut labore itaque sequi voluptatem dolor ab beatae. Sint enim iusto quis explicabo sed similique velit provident asperiores. Sequi repellendus totam impedit perspiciatis reiciendis. Est consequatur officiis rerum voluptatem dolorem fugiat. Minus reiciendis voluptatem totam magni quas earum aut consequatur ratione.\n \rId distinctio nesciunt quam. Laudantium id assumenda qui dolore. Debitis nemo velit voluptatem. Officiis harum deserunt. Facere eligendi et aperiam aut vel asperiores sit sed. Esse omnis fugiat ut voluptatem sint beatae et.\n \rEt odit exercitationem repellat laudantium accusamus. Et quasi incidunt qui non. Voluptas quod necessitatibus ipsum officia. Incidunt animi temporibus quis harum non. Dolores explicabo non dolor.\n \rAut sit provident voluptatum beatae quidem harum et. Necessitatibus voluptate quas dolorem officia deserunt consequuntur. Ex nihil sunt quidem.\n \rAb aut quia voluptatem. Et sed laboriosam nesciunt. Eaque provident natus dolorem voluptas quibusdam culpa voluptate voluptatem voluptate. Ut officia consectetur omnis natus. Consectetur dolorem sint. Sint est nostrum ullam.',
  'fromId': 'a41c6c4a-9cb1-45d1-8c6f-091044ba51ff',
  'attachments': []
}, {
  'uuid': '38c6b789-dab8-41e3-8448-e498140f797e',
  'type': 'draft',
  'tag': 'Social',
  'title': 'Error accusantium vitae incidunt.',
  'created_at': '2018-04-10T12:23:56.599Z',
  'content': 'Quaerat at blanditiis et quis voluptatum id. Recusandae tempore et rerum. Facilis est quo eum accusamus eligendi voluptate consequatur unde. Labore laboriosam sit sed ea. Qui nihil impedit dolor consequatur. Aut reiciendis similique quaerat et iste autem aut nostrum inventore.\n \rAut maxime non libero quibusdam ducimus. Ut veritatis sequi optio in provident sint magnam aut. Aspernatur quis libero molestiae corporis dicta. Deleniti tenetur recusandae et. Aperiam ullam voluptatem.\n \rQuae voluptates fugit. Est ullam voluptas eum illum aspernatur eius illo fugit. Harum placeat ad soluta fugiat.\n \rQuo deleniti optio quod minima. Voluptates dolores molestiae velit doloremque. Molestias illo eos. Aut quas mollitia in nam asperiores quo corrupti nostrum omnis. Excepturi et optio iste aut qui molestiae placeat culpa.\n \rIste earum dolorum cupiditate architecto possimus. Iste et doloribus doloribus. Sint vel velit dolorum omnis sunt sequi facilis. Consequuntur qui itaque. Cupiditate quis sit dolor doloribus molestiae qui. Corrupti ullam enim sit laborum voluptates provident atque est.',
  'fromId': '5c44b666-baca-4f18-a3cb-23068c6edc14',
  'attachments': []
}, {
  'uuid': '8bbcd627-394c-4a14-bc69-b357f7bc2547',
  'type': 'draft',
  'tag': 'Personal',
  'title': 'Consequatur dolorem dignissimos distinctio cum odio.',
  'created_at': '2018-04-10T09:41:01.839Z',
  'content': 'Ut placeat earum eius eos. Sed officiis earum impedit officiis temporibus incidunt ad voluptatem. Nihil perferendis aut adipisci sint enim ea modi qui velit. Sed fugiat deleniti et et labore hic error quidem. Repellat natus aut. Incidunt nam porro voluptate sit ut quo.\n \rVoluptas qui nihil. Dolores alias tempore. Ipsum perspiciatis voluptatem tenetur debitis eum sint natus. Numquam sed quos nam.\n \rQuia eius aspernatur ut incidunt repudiandae qui neque. Modi soluta voluptas libero qui quo et voluptatem ut. Corporis sint debitis ab nisi quis ut.\n \rAut fugiat quia quisquam ut ipsam rerum. Autem rerum optio commodi. Modi esse numquam facere ad eligendi numquam est. Dolorem doloremque corporis excepturi fugit.\n \rReiciendis eos error. Facere culpa accusamus sunt magnam rerum dolores sint consequatur. Amet impedit dolores voluptatem tempore quia temporibus accusantium nostrum alias. Consectetur commodi sint explicabo qui quaerat eaque. Facere voluptate sequi et et est delectus et. Rerum debitis dolor eligendi qui.',
  'fromId': 'ee272550-36e8-4fe2-889d-c1ee701c5863',
  'attachments': []
}, {
  'uuid': '60c2248b-3cb2-4fdf-b157-770f07d2a1f3',
  'type': 'trashed',
  'tag': 'Work',
  'title': 'Vel molestiae reprehenderit explicabo adipisci quia vitae cumque maxime.',
  'created_at': '2018-04-11T07:22:28.487Z',
  'content': 'Placeat eaque voluptatem voluptatum suscipit quod deleniti iusto. Officiis ut enim vel. Quibusdam nostrum et qui maxime tempore sed facilis non. Molestiae et provident. Non harum iste voluptatem architecto recusandae est. Quas et molestiae labore sequi et sit ad.\n \rPlaceat aut et impedit aut officia qui maxime et nobis. Aut reiciendis dolores nesciunt ratione tempora. Consequatur aut aliquam ut optio dicta rerum qui. Nisi ut et doloribus asperiores at. Ducimus asperiores quo ut.\n \rFugit ratione ipsa non fugiat enim sit velit omnis. Omnis unde molestias laboriosam aspernatur ullam labore quod. Et officiis sed beatae assumenda qui nostrum voluptates maiores similique. Corrupti laborum fugiat minima itaque et et dolor omnis soluta. Optio consectetur tempore id temporibus. Ullam magni ex quibusdam enim occaecati eveniet quia saepe.\n \rQuia quas harum delectus et voluptas. Aut consequatur fugit enim aliquid nobis excepturi. Dolores delectus delectus accusamus non veniam tempora excepturi iste doloremque. Id praesentium ea dolorem exercitationem aliquid.\n \rNecessitatibus vel in eligendi veniam sit. Quia et praesentium eius in. Autem magni ut. Ab repellat aut nobis voluptatibus aperiam quisquam expedita. Nam eius magni exercitationem consequatur provident voluptas sunt aut.',
  'fromId': '3782c174-1f2c-4dc4-b75d-0bedf400e023',
  'attachments': []
}, {
  'uuid': '59608cba-b69e-4c05-b1f8-39d2e9c16fdc',
  'type': 'sent',
  'tag': 'Personal',
  'title': 'Iste omnis eius dolores dolor nam eos ea.',
  'created_at': '2018-04-10T22:12:01.722Z',
  'content': 'Magni maiores cumque et exercitationem voluptates molestiae facilis recusandae. In sed et rerum tenetur et sit vero ut quas. Ut alias fugit eos dolorum dolorem et possimus. Et occaecati quam laborum est dignissimos atque amet ea iure. Enim et et fugit laboriosam commodi. Ipsam quo et qui tenetur vitae fugit.\n \rFacere veniam eum corrupti perferendis. Eos unde nobis ut sit illum harum. Deserunt saepe pariatur.\n \rQui debitis laborum maiores voluptatem cupiditate. Ab et qui illo. Veritatis aspernatur delectus. Aliquid officia consequuntur ut vel corporis esse magnam molestiae minus. Voluptatem saepe commodi aspernatur. Aut perferendis quaerat magni aut vel.\n \rQuos qui dolorem nobis ut nostrum et voluptas aut est. Vel saepe ipsum sed. Ullam laboriosam qui est ex. Enim a autem deleniti eos. Qui aut quibusdam ut sunt.\n \rAlias autem non quidem numquam vero accusantium voluptatum. Et illo neque ex est eligendi ullam eaque laudantium. Laborum laboriosam dolor magnam.',
  'fromId': '28d9f265-74d7-4f85-83d4-6a21fca57dcf',
  'attachments': []
}];

// add user to mail
MailItem.map(function (item) {
  var users = __WEBPACK_IMPORTED_MODULE_0__user__["b" /* getUser */]();
  item.from = users.find(function (x) {
    return x.uuid === item.fromId;
  });
  return item;
});
//

var MailMenu = [{
  title: 'Email',
  group: 'email',
  icon: 'email',
  to: { path: '/mail/all' },
  chip: 10
}, {
  title: 'Sent',
  group: 'email',
  icon: 'send',
  to: { path: '/mail/sent' },
  chip: 5
}, {
  title: 'Starred',
  group: 'email',
  icon: 'star',
  to: { path: '/mail/starred' },
  chip: 2
}, {
  title: 'Draft',
  group: 'email',
  icon: 'content_copy',
  to: { path: '/mail/draft' },
  chip: 3
}, {
  title: 'Trash',
  group: 'email',
  icon: 'delete',
  to: { path: '/mail/trashed' },
  chip: 1
}, { heading: 'Label' }, { icon: 'radio_button_checked', iconColor: 'yellow', title: 'Work', iconSize: 'small' }, { icon: 'radio_button_checked', iconColor: 'green', title: 'Client', iconSize: 'small' }, { icon: 'radio_button_checked', iconColor: 'red', title: 'Project', iconSize: 'small' }, { icon: 'radio_button_checked', iconColor: 'grey', title: 'Peronal', iconSize: 'small' }];

var getMail = function getMail(limit) {
  return limit ? MailItem.slice(0, limit) : MailItem;
};

var getMailById = function getMailById(uuid) {
  return uuid === undefined ? MailItem[0] : MailItem.find(function (x) {
    return x.uuid === uuid;
  });
};

var getMailByType = function getMailByType(type) {
  return type === 'all' ? MailItem : MailItem.filter(function (x) {
    return x.type === type;
  });
};


/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Projects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getProject; });
var Projects = [{
  username: 'Dessie',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ludwiczakpawel/128.jpg',
  name: 'Template PSD',
  deadline: '2 days later',
  progress: 90,
  color: 'pink'
}, {
  username: 'Jakayla',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/suprb/128.jpg',
  name: 'Logo Design',
  deadline: '1 weeks later',
  progress: 70,
  color: 'success'
}, {
  username: 'Ludwiczakpawel',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ludwiczakpawel/128.jpg',
  name: 'REST API',
  deadline: '1 Month later',
  progress: 50,
  color: 'info'
}, {
  username: 'Damenleeturks',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/damenleeturks/128.jpg',
  name: 'API Unit Test',
  deadline: '2 Month later',
  progress: 30,
  color: 'teal'
}, {
  username: 'Caspergrl',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/caspergrl/128.jpg',
  name: 'Project Deploy',
  deadline: 'half year later',
  progress: 15,
  color: 'grey'
}];

var getProject = function getProject(limit) {
  return limit ? Projects.slice(0, limit) : Projects;
};



/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Menu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Groups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getChatById; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user__ = __webpack_require__(141);

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

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getFileMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getFile; });
var getFileMenu = [{
  icon: 'photo',
  title: 'Images',
  to: { path: '/media', query: { type: 'image' } }
}, {
  icon: 'videocam',
  title: 'Video',
  to: { path: '/media', query: { type: 'video' } }
}, {
  icon: 'volume_down',
  title: 'Audio',
  to: { path: '/media', query: { type: 'audio' } }
}, {
  icon: 'insert_drive_file',
  title: 'Document',
  to: { path: '/media', query: { type: 'doc' } }
}];
var Items = [{
  'uuid': 'a32c4aec-54de-4ff4-b165-8571ae805598',
  'fileName': '.DS_Store',
  'fileType': false,
  'path': 'static/.DS_Store',
  'fullPath': '/Users/michael/themeforest/vue-material-admin/static/.DS_Store',
  'ext': '',
  'dir': 'static',
  'ctime': '2018-04-08T09:15:19.307Z',
  'size': 12292
}, {
  'uuid': 'a30f71db-7dcf-4467-978f-e32841d47825',
  'fileName': '.gitkeep',
  'fileType': false,
  'path': 'static/.gitkeep',
  'fullPath': '/Users/michael/themeforest/vue-material-admin/static/.gitkeep',
  'ext': '',
  'dir': 'static',
  'ctime': '2018-03-14T09:21:32.010Z',
  'size': 0
}, {
  'uuid': 'ca1bf511-a44e-4663-8b68-323419236ddf',
  'fileName': 'google.png',
  'fileType': 'image/png',
  'path': 'static/avatar/google.png',
  'fullPath': '/Users/michael/themeforest/vue-material-admin/static/avatar/google.png',
  'ext': '.png',
  'dir': 'static/avatar',
  'ctime': '2018-04-08T08:31:07.808Z',
  'size': 12734
}, {
  'uuid': '0693e01e-926c-4c95-818b-3f9b6d5413e7',
  'fileName': 'hangouts.png',
  'fileType': 'image/png',
  'path': 'static/avatar/hangouts.png',
  'fullPath': '/Users/michael/themeforest/vue-material-admin/static/avatar/hangouts.png',
  'ext': '.png',
  'dir': 'static/avatar',
  'ctime': '2018-04-08T08:31:10.010Z',
  'size': 15266
}, {
  'uuid': '53d3ba9d-90f2-4a60-af86-04679321f551',
  'fileName': 'inbox.png',
  'fileType': 'image/png',
  'path': 'static/avatar/inbox.png',
  'fullPath': '/Users/michael/themeforest/vue-material-admin/static/avatar/inbox.png',
  'ext': '.png',
  'dir': 'static/avatar',
  'ctime': '2018-04-08T08:31:13.303Z',
  'size': 22444
}, {
  'uuid': 'ef6397dd-ca99-459f-9694-bf9475359a51',
  'fileName': 'keep.png',
  'fileType': 'image/png',
  'path': 'static/avatar/keep.png',
  'fullPath': '/Users/michael/themeforest/vue-material-admin/static/avatar/keep.png',
  'ext': '.png',
  'dir': 'static/avatar',
  'ctime': '2018-04-08T08:31:15.534Z',
  'size': 2146
}, {
  'uuid': 'e6dcaede-1c87-4052-a4e9-f894809d5984',
  'fileName': 'messenger.png',
  'fileType': 'image/png',
  'path': 'static/avatar/messenger.png',
  'fullPath': '/Users/michael/themeforest/vue-material-admin/static/avatar/messenger.png',
  'ext': '.png',
  'dir': 'static/avatar',
  'ctime': '2018-04-08T08:31:24.183Z',
  'size': 7006
}, {
  'uuid': '78a63d97-c763-4fa4-883f-8f9ed4425a6a',
  'fileName': '1.jpg',
  'fileType': 'image/jpeg',
  'path': 'static/bg/1.jpg',
  'fullPath': '/Users/michael/themeforest/vue-material-admin/static/bg/1.jpg',
  'ext': '.jpg',
  'dir': 'static/bg',
  'ctime': '2018-03-30T08:40:27.070Z',
  'size': 275608
}, {
  'uuid': '29245130-ec05-4bf1-90ea-06574faa9bda',
  'fileName': '10.jpg',
  'fileType': 'image/jpeg',
  'path': 'static/bg/10.jpg',
  'fullPath': '/Users/michael/themeforest/vue-material-admin/static/bg/10.jpg',
  'ext': '.jpg',
  'dir': 'static/bg',
  'ctime': '2018-03-30T08:40:27.096Z',
  'size': 283680
}, {
  'uuid': '83c2cfc6-80c2-4bc0-af02-4b2e6a94a2d3',
  'fileName': '11.jpg',
  'fileType': 'image/jpeg',
  'path': 'static/bg/11.jpg',
  'fullPath': '/Users/michael/themeforest/vue-material-admin/static/bg/11.jpg',
  'ext': '.jpg',
  'dir': 'static/bg',
  'ctime': '2018-03-30T08:40:27.100Z',
  'size': 99467
}, {
  'uuid': '71fa31b2-4463-4c4c-baf2-719cd89ab15a',
  'fileName': '12.jpg',
  'fileType': 'image/jpeg',
  'path': 'static/bg/12.jpg',
  'fullPath': '/Users/michael/themeforest/vue-material-admin/static/bg/12.jpg',
  'ext': '.jpg',
  'dir': 'static/bg',
  'ctime': '2018-03-30T08:40:27.103Z',
  'size': 82253
}, {
  'uuid': '74db5dd4-f60d-415a-b6f7-3107ce2e5cda',
  'fileName': '13.jpg',
  'fileType': 'image/jpeg',
  'path': 'static/bg/13.jpg',
  'fullPath': '/Users/michael/themeforest/vue-material-admin/static/bg/13.jpg',
  'ext': '.jpg',
  'dir': 'static/bg',
  'ctime': '2018-03-30T08:41:46.865Z',
  'size': 103275
}, {
  'uuid': '54dc3e30-a9c8-4a68-9f9b-b070f5a5fea4',
  'fileName': '14.jpg',
  'fileType': 'image/jpeg',
  'path': 'static/bg/14.jpg',
  'fullPath': '/Users/michael/themeforest/vue-material-admin/static/bg/14.jpg',
  'ext': '.jpg',
  'dir': 'static/bg',
  'ctime': '2018-03-30T08:40:27.111Z',
  'size': 103446
}, {
  'uuid': 'c2c9104b-8a26-4bce-b942-7104e57687b7',
  'fileName': '15.jpg',
  'fileType': 'image/jpeg',
  'path': 'static/bg/15.jpg',
  'fullPath': '/Users/michael/themeforest/vue-material-admin/static/bg/15.jpg',
  'ext': '.jpg',
  'dir': 'static/bg',
  'ctime': '2018-03-30T08:40:27.119Z',
  'size': 105339
}, {
  'uuid': '6b608ce9-e35b-4dfb-87cb-f4ca19102996',
  'fileName': '16.jpg',
  'fileType': 'image/jpeg',
  'path': 'static/bg/16.jpg',
  'fullPath': '/Users/michael/themeforest/vue-material-admin/static/bg/16.jpg',
  'ext': '.jpg',
  'dir': 'static/bg',
  'ctime': '2018-03-30T08:40:27.122Z',
  'size': 88580
}, {
  'uuid': 'a9b26177-5927-44a5-8b7c-4cad8425e9a5',
  'fileName': '17.jpg',
  'fileType': 'image/jpeg',
  'path': 'static/bg/17.jpg',
  'fullPath': '/Users/michael/themeforest/vue-material-admin/static/bg/17.jpg',
  'ext': '.jpg',
  'dir': 'static/bg',
  'ctime': '2018-03-30T08:40:27.125Z',
  'size': 98465
}, {
  'uuid': 'f1168479-113a-4f8a-a014-45ff6351941e',
  'fileName': '18.jpg',
  'fileType': 'image/jpeg',
  'path': 'static/bg/18.jpg',
  'fullPath': '/Users/michael/themeforest/vue-material-admin/static/bg/18.jpg',
  'ext': '.jpg',
  'dir': 'static/bg',
  'ctime': '2018-03-30T08:40:27.128Z',
  'size': 100565
}, {
  'uuid': 'd1cd7b81-b301-425f-89d1-e0cbf2f7a0cb',
  'fileName': '19.jpg',
  'fileType': 'image/jpeg',
  'path': 'static/bg/19.jpg',
  'fullPath': '/Users/michael/themeforest/vue-material-admin/static/bg/19.jpg',
  'ext': '.jpg',
  'dir': 'static/bg',
  'ctime': '2018-03-30T08:40:27.138Z',
  'size': 39500
}, {
  'uuid': 'c9ebff9b-651a-43c8-8e8a-028bb69b00ef',
  'fileName': '2.jpg',
  'fileType': 'image/jpeg',
  'path': 'static/bg/2.jpg',
  'fullPath': '/Users/michael/themeforest/vue-material-admin/static/bg/2.jpg',
  'ext': '.jpg',
  'dir': 'static/bg',
  'ctime': '2018-03-30T08:40:27.075Z',
  'size': 268438
}, {
  'uuid': 'fa673c64-e747-4279-8574-be153c106ede',
  'fileName': '20.jpg',
  'fileType': 'image/jpeg',
  'path': 'static/bg/20.jpg',
  'fullPath': '/Users/michael/themeforest/vue-material-admin/static/bg/20.jpg',
  'ext': '.jpg',
  'dir': 'static/bg',
  'ctime': '2018-03-30T08:40:27.143Z',
  'size': 104204
}, {
  'uuid': '74e2ab71-4261-4fa9-b2e7-4844ef9f1d58',
  'fileName': '21.jpg',
  'fileType': 'image/jpeg',
  'path': 'static/bg/21.jpg',
  'fullPath': '/Users/michael/themeforest/vue-material-admin/static/bg/21.jpg',
  'ext': '.jpg',
  'dir': 'static/bg',
  'ctime': '2018-03-30T08:41:54.525Z',
  'size': 91890
}, {
  'uuid': '5fb2fed2-fc86-4bd5-9144-7d36b3dacd60',
  'fileName': '22.jpg',
  'fileType': 'image/jpeg',
  'path': 'static/bg/22.jpg',
  'fullPath': '/Users/michael/themeforest/vue-material-admin/static/bg/22.jpg',
  'ext': '.jpg',
  'dir': 'static/bg',
  'ctime': '2018-03-30T08:40:27.150Z',
  'size': 104620
}, {
  'uuid': '8d6cdfc5-e69a-44d2-b6e3-4265b4b87cc1',
  'fileName': '23.jpg',
  'fileType': 'image/jpeg',
  'path': 'static/bg/23.jpg',
  'fullPath': '/Users/michael/themeforest/vue-material-admin/static/bg/23.jpg',
  'ext': '.jpg',
  'dir': 'static/bg',
  'ctime': '2018-03-30T08:40:27.157Z',
  'size': 103130
}, {
  'uuid': 'd733c863-b5ed-46b2-9eb2-42eb9fa285fa',
  'fileName': '24.jpg',
  'fileType': 'image/jpeg',
  'path': 'static/bg/24.jpg',
  'fullPath': '/Users/michael/themeforest/vue-material-admin/static/bg/24.jpg',
  'ext': '.jpg',
  'dir': 'static/bg',
  'ctime': '2018-03-30T08:40:27.159Z',
  'size': 105835
}, {
  'uuid': 'f9c7064e-2542-473f-9b4d-98d122ef4364',
  'fileName': '25.jpg',
  'fileType': 'image/jpeg',
  'path': 'static/bg/25.jpg',
  'fullPath': '/Users/michael/themeforest/vue-material-admin/static/bg/25.jpg',
  'ext': '.jpg',
  'dir': 'static/bg',
  'ctime': '2018-03-30T08:40:27.162Z',
  'size': 95075
}, {
  'uuid': 'e2ea7604-a86d-4fef-bb20-40fae6bb7ce0',
  'fileName': '26.jpg',
  'fileType': 'image/jpeg',
  'path': 'static/bg/26.jpg',
  'fullPath': '/Users/michael/themeforest/vue-material-admin/static/bg/26.jpg',
  'ext': '.jpg',
  'dir': 'static/bg',
  'ctime': '2018-03-30T08:40:27.166Z',
  'size': 104342
}, {
  'uuid': 'f7570a47-938c-4e9c-aba6-a82f30b7bef5',
  'fileName': '27.jpg',
  'fileType': 'image/jpeg',
  'path': 'static/bg/27.jpg',
  'fullPath': '/Users/michael/themeforest/vue-material-admin/static/bg/27.jpg',
  'ext': '.jpg',
  'dir': 'static/bg',
  'ctime': '2018-03-30T08:40:27.168Z',
  'size': 90063
}, {
  'uuid': '4dc41162-89b5-499b-b702-cf951a04841e',
  'fileName': '28.jpg',
  'fileType': 'image/jpeg',
  'path': 'static/bg/28.jpg',
  'fullPath': '/Users/michael/themeforest/vue-material-admin/static/bg/28.jpg',
  'ext': '.jpg',
  'dir': 'static/bg',
  'ctime': '2018-03-30T08:40:27.171Z',
  'size': 132461
}, {
  'uuid': 'ed316744-39c6-4de3-a346-4436d080291a',
  'fileName': '29.jpg',
  'fileType': 'image/jpeg',
  'path': 'static/bg/29.jpg',
  'fullPath': '/Users/michael/themeforest/vue-material-admin/static/bg/29.jpg',
  'ext': '.jpg',
  'dir': 'static/bg',
  'ctime': '2018-03-30T08:40:27.173Z',
  'size': 121466
}, {
  'uuid': 'af9acc25-694a-4656-a790-584129b21cc4',
  'fileName': '3.jpg',
  'fileType': 'image/jpeg',
  'path': 'static/bg/3.jpg',
  'fullPath': '/Users/michael/themeforest/vue-material-admin/static/bg/3.jpg',
  'ext': '.jpg',
  'dir': 'static/bg',
  'ctime': '2018-03-30T08:40:27.077Z',
  'size': 308780
}, {
  'uuid': 'c2be3695-f084-4a41-bc0b-79062e4eefe0',
  'fileName': '30.jpg',
  'fileType': 'image/jpeg',
  'path': 'static/bg/30.jpg',
  'fullPath': '/Users/michael/themeforest/vue-material-admin/static/bg/30.jpg',
  'ext': '.jpg',
  'dir': 'static/bg',
  'ctime': '2018-03-30T08:40:27.176Z',
  'size': 125198
}, {
  'uuid': '708a5185-2de7-4477-ac84-d99f434fa7cc',
  'fileName': '31.jpg',
  'fileType': 'image/jpeg',
  'path': 'static/bg/31.jpg',
  'fullPath': '/Users/michael/themeforest/vue-material-admin/static/bg/31.jpg',
  'ext': '.jpg',
  'dir': 'static/bg',
  'ctime': '2018-03-30T08:40:27.179Z',
  'size': 292495
}, {
  'uuid': 'c9782516-bd3d-4ca6-9397-91b806d4d5aa',
  'fileName': '32.jpg',
  'fileType': 'image/jpeg',
  'path': 'static/bg/32.jpg',
  'fullPath': '/Users/michael/themeforest/vue-material-admin/static/bg/32.jpg',
  'ext': '.jpg',
  'dir': 'static/bg',
  'ctime': '2018-03-30T08:40:27.186Z',
  'size': 278854
}, {
  'uuid': '00ac4093-8202-408e-8b88-a33313d39e6b',
  'fileName': '33.jpg',
  'fileType': 'image/jpeg',
  'path': 'static/bg/33.jpg',
  'fullPath': '/Users/michael/themeforest/vue-material-admin/static/bg/33.jpg',
  'ext': '.jpg',
  'dir': 'static/bg',
  'ctime': '2018-03-30T08:40:27.196Z',
  'size': 296287
}, {
  'uuid': '9d3ed291-8706-4d1c-b37a-9da33f808622',
  'fileName': '34.jpg',
  'fileType': 'image/jpeg',
  'path': 'static/bg/34.jpg',
  'fullPath': '/Users/michael/themeforest/vue-material-admin/static/bg/34.jpg',
  'ext': '.jpg',
  'dir': 'static/bg',
  'ctime': '2018-03-30T08:40:27.199Z',
  'size': 298335
}, {
  'uuid': '38cfc863-13f1-4ab6-acd1-2f403b77f539',
  'fileName': '35.jpg',
  'fileType': 'image/jpeg',
  'path': 'static/bg/35.jpg',
  'fullPath': '/Users/michael/themeforest/vue-material-admin/static/bg/35.jpg',
  'ext': '.jpg',
  'dir': 'static/bg',
  'ctime': '2018-03-30T08:40:27.204Z',
  'size': 285123
}, {
  'uuid': '1cbde33c-6ef6-45e6-930a-94bfae6a4b4d',
  'fileName': '36.jpg',
  'fileType': 'image/jpeg',
  'path': 'static/bg/36.jpg',
  'fullPath': '/Users/michael/themeforest/vue-material-admin/static/bg/36.jpg',
  'ext': '.jpg',
  'dir': 'static/bg',
  'ctime': '2018-03-30T08:40:27.207Z',
  'size': 294032
}, {
  'uuid': 'c4835081-6414-4e23-ae05-6b23997a4f6f',
  'fileName': '37.jpg',
  'fileType': 'image/jpeg',
  'path': 'static/bg/37.jpg',
  'fullPath': '/Users/michael/themeforest/vue-material-admin/static/bg/37.jpg',
  'ext': '.jpg',
  'dir': 'static/bg',
  'ctime': '2018-03-30T08:40:27.210Z',
  'size': 261250
}, {
  'uuid': '16647278-2e36-4285-8347-7aeab0fbf468',
  'fileName': '38.jpg',
  'fileType': 'image/jpeg',
  'path': 'static/bg/38.jpg',
  'fullPath': '/Users/michael/themeforest/vue-material-admin/static/bg/38.jpg',
  'ext': '.jpg',
  'dir': 'static/bg',
  'ctime': '2018-03-30T08:40:27.214Z',
  'size': 292620
}, {
  'uuid': 'e8047c06-fca2-4405-8823-d5497c788362',
  'fileName': '39.jpg',
  'fileType': 'image/jpeg',
  'path': 'static/bg/39.jpg',
  'fullPath': '/Users/michael/themeforest/vue-material-admin/static/bg/39.jpg',
  'ext': '.jpg',
  'dir': 'static/bg',
  'ctime': '2018-03-30T08:40:27.217Z',
  'size': 290569
}, {
  'uuid': 'd69f047b-8ebf-4d3d-b436-09bbbf6cba4b',
  'fileName': '4.jpg',
  'fileType': 'image/jpeg',
  'path': 'static/bg/4.jpg',
  'fullPath': '/Users/michael/themeforest/vue-material-admin/static/bg/4.jpg',
  'ext': '.jpg',
  'dir': 'static/bg',
  'ctime': '2018-03-30T08:40:27.080Z',
  'size': 287013
}, {
  'uuid': 'ad16609e-154b-401d-835f-bbcb6f4a496b',
  'fileName': '40.jpg',
  'fileType': 'image/jpeg',
  'path': 'static/bg/40.jpg',
  'fullPath': '/Users/michael/themeforest/vue-material-admin/static/bg/40.jpg',
  'ext': '.jpg',
  'dir': 'static/bg',
  'ctime': '2018-03-30T08:40:27.219Z',
  'size': 297662
}, {
  'uuid': '8c4cf24d-de27-4aea-abca-f38865cc9239',
  'fileName': '5.jpg',
  'fileType': 'image/jpeg',
  'path': 'static/bg/5.jpg',
  'fullPath': '/Users/michael/themeforest/vue-material-admin/static/bg/5.jpg',
  'ext': '.jpg',
  'dir': 'static/bg',
  'ctime': '2018-03-30T08:40:27.083Z',
  'size': 318957
}, {
  'uuid': '88a031a1-323d-4ca6-9115-61762dbdffe9',
  'fileName': '6.jpg',
  'fileType': 'image/jpeg',
  'path': 'static/bg/6.jpg',
  'fullPath': '/Users/michael/themeforest/vue-material-admin/static/bg/6.jpg',
  'ext': '.jpg',
  'dir': 'static/bg',
  'ctime': '2018-03-30T08:41:50.063Z',
  'size': 287785
}, {
  'uuid': '5e42c142-b511-4a11-bdaf-ae85ac8417c6',
  'fileName': '7.jpg',
  'fileType': 'image/jpeg',
  'path': 'static/bg/7.jpg',
  'fullPath': '/Users/michael/themeforest/vue-material-admin/static/bg/7.jpg',
  'ext': '.jpg',
  'dir': 'static/bg',
  'ctime': '2018-03-30T08:40:27.089Z',
  'size': 285392
}, {
  'uuid': '5194e91c-5975-40a4-9353-83055b0c8cbb',
  'fileName': '8.jpg',
  'fileType': 'image/jpeg',
  'path': 'static/bg/8.jpg',
  'fullPath': '/Users/michael/themeforest/vue-material-admin/static/bg/8.jpg',
  'ext': '.jpg',
  'dir': 'static/bg',
  'ctime': '2018-03-30T08:40:27.091Z',
  'size': 272918
}, {
  'uuid': 'c5f859ed-012c-48d3-a037-bf164f8b0c84',
  'fileName': '9.jpg',
  'fileType': 'image/jpeg',
  'path': 'static/bg/9.jpg',
  'fullPath': '/Users/michael/themeforest/vue-material-admin/static/bg/9.jpg',
  'ext': '.jpg',
  'dir': 'static/bg',
  'ctime': '2018-03-30T08:40:27.094Z',
  'size': 285242
}, {
  'uuid': 'b83f94eb-3fa4-474f-8b09-91ec5b9e67da',
  'fileName': '403.svg',
  'fileType': 'image/svg+xml',
  'path': 'static/error/403.svg',
  'fullPath': '/Users/michael/themeforest/vue-material-admin/static/error/403.svg',
  'ext': '.svg',
  'dir': 'static/error',
  'ctime': '2018-03-30T06:10:45.825Z',
  'size': 55336
}, {
  'uuid': '7b93354a-fc3c-45ae-890a-8bcb5c294f55',
  'fileName': '404.svg',
  'fileType': 'image/svg+xml',
  'path': 'static/error/404.svg',
  'fullPath': '/Users/michael/themeforest/vue-material-admin/static/error/404.svg',
  'ext': '.svg',
  'dir': 'static/error',
  'ctime': '2018-03-30T06:10:45.814Z',
  'size': 88876
}, {
  'uuid': 'd2b741d4-206d-4be5-819d-3a00fd6895f0',
  'fileName': '500.svg',
  'fileType': 'image/svg+xml',
  'path': 'static/error/500.svg',
  'fullPath': '/Users/michael/themeforest/vue-material-admin/static/error/500.svg',
  'ext': '.svg',
  'dir': 'static/error',
  'ctime': '2018-03-30T06:10:45.818Z',
  'size': 88720
}, {
  'uuid': 'cf1cd0df-861e-4216-beba-c5fa266081dd',
  'fileName': 'google.svg',
  'fileType': 'image/svg+xml',
  'path': 'static/google.svg',
  'fullPath': '/Users/michael/themeforest/vue-material-admin/static/google.svg',
  'ext': '.svg',
  'dir': 'static',
  'ctime': '2018-03-30T06:10:12.693Z',
  'size': 1574
}, {
  'uuid': 'd145ac45-57b4-4754-a058-79bf42bb2963',
  'fileName': 'manifest.json',
  'fileType': 'application/json',
  'path': 'static/manifest.json',
  'fullPath': '/Users/michael/themeforest/vue-material-admin/static/manifest.json',
  'ext': '.json',
  'dir': 'static',
  'ctime': '2018-03-14T09:21:32.018Z',
  'size': 303
}, {
  'uuid': '8b2ca729-a2eb-4950-855d-1dd3ce831765',
  'fileName': 'robots.txt',
  'fileType': 'text/plain',
  'path': 'static/robots.txt',
  'fullPath': '/Users/michael/themeforest/vue-material-admin/static/robots.txt',
  'ext': '.txt',
  'dir': 'static',
  'ctime': '2018-03-14T09:21:32.021Z',
  'size': 23
}, {
  'uuid': 'e5a6e6f5-a9c8-49be-b2e2-c5074f4fa6c2',
  'fileName': 'sitemap.xml',
  'fileType': 'application/xml',
  'path': 'static/sitemap.xml',
  'fullPath': '/Users/michael/themeforest/vue-material-admin/static/sitemap.xml',
  'ext': '.xml',
  'dir': 'static',
  'ctime': '2018-03-14T09:21:32.019Z',
  'size': 15488
}, {
  'uuid': '7cf65477-4aad-45de-924c-a38ded2471ef',
  'fileName': 'v.png',
  'fileType': 'image/png',
  'path': 'static/v.png',
  'fullPath': '/Users/michael/themeforest/vue-material-admin/static/v.png',
  'ext': '.png',
  'dir': 'static',
  'ctime': '2018-03-14T09:21:32.023Z',
  'size': 5674
}, {
  'uuid': '5d333a3d-9140-4b8c-9ae3-9a8a96f0309e',
  'fileName': 'v.svg',
  'fileType': 'image/svg+xml',
  'path': 'static/v.svg',
  'fullPath': '/Users/michael/themeforest/vue-material-admin/static/v.svg',
  'ext': '.svg',
  'dir': 'static',
  'ctime': '2018-03-14T09:21:32.017Z',
  'size': 538
}];

var getFile = function getFile(limit) {
  return limit ? Items.slice(0, limit) : Items;
};



/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getPost; });
var posts = [{
  title: 'A sample post with image',
  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry scrambled it to make text of the printing and typesetting industry scrambled a type specimen book text of the dummy text of the printing printing and typesetting industry scrambled dummy text of the printing.',
  featuredImage: '/static/discover_word/thumb/ds_1.jpg',
  author: 'Jessie Wang',
  createdAt: new Date().toLocaleDateString()
}, {
  title: 'A sample post with image',
  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry scrambled it to make text of the printing and typesetting industry scrambled a type specimen book text of the dummy text of the printing printing and typesetting industry scrambled dummy text of the printing.',
  featuredImage: '/static/discover_word/thumb/ds_2.jpg',
  author: 'Li Love',
  createdAt: new Date().toLocaleDateString()
}, {
  title: 'A sample post with image',
  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry scrambled it to make text of the printing and typesetting industry scrambled a type specimen book text of the dummy text of the printing printing and typesetting industry scrambled dummy text of the printing.',
  featuredImage: '/static/discover_word/thumb/ds_3.jpg',
  author: 'Jim Wang',
  createdAt: new Date().toLocaleDateString()
}, {
  title: 'A sample post with image',
  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry scrambled it to make text of the printing and typesetting industry scrambled a type specimen book text of the dummy text of the printing printing and typesetting industry scrambled dummy text of the printing.',
  featuredImage: '/static/discover_word/thumb/ds_4.jpg',
  author: 'John Doe',
  createdAt: new Date().toLocaleDateString()
}];

var getPost = function getPost(limit) {
  return limit ? posts.slice(0, limit) : posts;
};



/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return monthVisitData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return campaignData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return locationData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return StackData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SinData; });
var range = function range(start, end) {
  return new Array(end - start).fill(start).map(function (el, i) {
    return start + i;
  });
};

var shortMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var monthVisitData = shortMonth.map(function (m) {
  return {
    'month': m,
    'Unique Visit': Math.floor(Math.random() * 1000) + 200,
    'Page View': Math.floor(Math.random() * 1000) + 250
  };
});

var campaignData = [{
  value: 335,
  name: 'Website'
}, {
  value: 310,
  name: 'Email'
}, {
  value: 234,
  name: 'Ads'
}, {
  value: 135,
  name: 'Video'
}, {
  value: 1548,
  name: 'Search'
}];
var locationData = [{
  value: 50,
  name: 'China'
}, {
  value: 35,
  name: 'USA'
}, {
  value: 25,
  name: 'EU'
}, {
  value: 10,
  name: 'Russia'
}, {
  value: 10,
  name: 'Other'
}];

var StackMainData = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
var StackData = StackMainData.map(function (item, key) {
  return {
    'label': key + 'D',
    'max': 500,
    'sales': item
  };
});
var SinData = range(1, 12).map(function (i) {
  return {
    'cate': 'Cat' + i,
    'value': (Math.sin(i / 5) * (i / 5 - 0.1) + i / 6) * 5
  };
});



/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VCircle_css__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VCircle_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__VCircle_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuetify_es5_mixins_colorable__ = __webpack_require__(239);
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

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(238);

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

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".circle {\n  border-radius: 3px;\n  padding: 0.25em 0.4em;\n  font-weight: 400;\n  line-height: 1.3;\n  font-size: 85%;\n}\n.circle:empty {\n  display: inline-block;\n  vertical-align: inherit;\n}\n.circle-pill {\n  color: #fff;\n  padding-right: 0.6em;\n  padding-left: 0.6em;\n  border-radius: 10rem;\n}\n.circle-sm {\n  line-height: 1.2;\n  padding-top: 1px;\n  padding-bottom: 2px;\n  font-size: 75%;\n}\n.circle-lg {\n  line-height: 1.5;\n  padding: 5px 7px;\n  font-size: 95%;\n}\n.circle-xl {\n  line-height: 1.7;\n  padding: 7px 9px;\n  font-size: 100%;\n}\n.circle-dot {\n  width: 8px;\n  height: 8px;\n  padding: 0;\n  border-radius: 100%;\n  vertical-align: middle;\n}\n.circle-dot.circle-sm {\n  width: 6px;\n  height: 6px;\n}\n.circle-dot.circle-lg {\n  width: 10px;\n  height: 10px;\n}\n.circle-dot.circle-xl {\n  width: 12px;\n  height: 12px;\n}\n.circle-ring {\n  position: relative;\n  width: 10px;\n  height: 10px;\n  padding: 0;\n  border-radius: 100%;\n  vertical-align: middle;\n}\n.circle-ring::after {\n  content: '';\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background-color: #fff;\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n.circle-ring.circle-sm {\n  width: 8px;\n  height: 8px;\n}\n.circle-ring.circle-sm::after {\n  width: 4px;\n  height: 4px;\n}\n.circle-ring.circle-lg {\n  width: 12px;\n  height: 12px;\n}\n.circle-ring.circle-lg::after {\n  width: 8px;\n  height: 8px;\n}\n.circle-ring.circle-xl {\n  width: 14px;\n  height: 14px;\n}\n.circle-ring.circle-xl::after {\n  width: 10px;\n  height: 10px;\n}\n.circle-ring.fill::after {\n  -webkit-transform: scale(0);\n  transform: scale(0);\n}\n.circle-bold {\n  text-transform: uppercase;\n  font-weight: 500;\n  letter-spacing: 1px;\n}\n", ""]);

// exports


/***/ }),

/***/ 239:
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

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__activity__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__file__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mail__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__post__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chart__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__project__ = __webpack_require__(197);
// implement your own methods in here, if your data is coming from A rest API









/* harmony default export */ __webpack_exports__["a"] = ({
  // user
  getUser: __WEBPACK_IMPORTED_MODULE_0__user__["b" /* getUser */],
  getUserById: __WEBPACK_IMPORTED_MODULE_0__user__["c" /* getUserById */],
  // project
  getProject: __WEBPACK_IMPORTED_MODULE_7__project__["b" /* getProject */],
  // activity
  getActivity: __WEBPACK_IMPORTED_MODULE_1__activity__["a" /* default */].getActivity,
  // post
  getPost: __WEBPACK_IMPORTED_MODULE_5__post__["a" /* getPost */],
  // chat
  getChatMenu: __WEBPACK_IMPORTED_MODULE_2__chat__["b" /* Menu */],
  getChatGroup: __WEBPACK_IMPORTED_MODULE_2__chat__["a" /* Groups */],
  getChatGroupById: __WEBPACK_IMPORTED_MODULE_2__chat__["c" /* getChatById */],
  // FIle 
  getFile: __WEBPACK_IMPORTED_MODULE_3__file__["a" /* getFile */],
  getFileMenu: __WEBPACK_IMPORTED_MODULE_3__file__["b" /* getFileMenu */],
  // mail
  getMail: __WEBPACK_IMPORTED_MODULE_4__mail__["b" /* getMail */],
  getMailMenu: __WEBPACK_IMPORTED_MODULE_4__mail__["a" /* MailMenu */],
  getMailById: __WEBPACK_IMPORTED_MODULE_4__mail__["c" /* getMailById */],
  getMailByType: __WEBPACK_IMPORTED_MODULE_4__mail__["d" /* getMailByType */],
  // chart data
  getMonthVisit: __WEBPACK_IMPORTED_MODULE_6__chart__["e" /* monthVisitData */],
  getCampaign: __WEBPACK_IMPORTED_MODULE_6__chart__["c" /* campaignData */],
  getLocation: __WEBPACK_IMPORTED_MODULE_6__chart__["d" /* locationData */]

});

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var Items = [{
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ludwiczakpawel/128.jpg',
  timeString: 'Just now',
  color: 'primary',
  text: 'Michael finished  one task just now.'
}, {
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/suprb/128.jpg',
  timeString: '30 min ago',
  color: 'teal',
  text: 'Jim created a new  task.'
}, {
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/suprb/128.jpg',
  timeString: '1 hour ago',
  color: 'indigo',
  text: 'Li completed the PSD to html convert.'
}, {
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/suprb/128.jpg',
  timeString: '3 hour ago',
  color: 'pink',
  text: 'Michael upload a new pic.'
}, {
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/suprb/128.jpg',
  timeString: '10 min ago',
  color: 'cyan',
  text: 'Li assigned a a task to Michael'
}];

var getActivity = function getActivity(limit) {
  return limit ? Items.slice(0, limit) : Items;
};

/* harmony default export */ __webpack_exports__["a"] = ({
  getActivity: getActivity
});

/***/ }),

/***/ 651:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_VWidget__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_VWidget___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_VWidget__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_circle_VCircle_js__ = __webpack_require__(236);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    VWidget: __WEBPACK_IMPORTED_MODULE_0__components_VWidget___default.a,
    VCircle: __WEBPACK_IMPORTED_MODULE_2__components_circle_VCircle_js__["a" /* default */]
  },
  data: function data() {
    return {};
  },

  computed: {
    activity: function activity() {
      return __WEBPACK_IMPORTED_MODULE_1__api__["a" /* default */].getActivity();
    }
  },

  methods: {}
});

/***/ }),

/***/ 652:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "page-timeline" } },
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
                { attrs: { sm12: "" } },
                [
                  _c(
                    "v-widget",
                    { attrs: { title: "Complex", contentBg: "lighten-4" } },
                    [
                      _c(
                        "div",
                        {
                          attrs: { slot: "widget-content" },
                          slot: "widget-content"
                        },
                        [
                          _c(
                            "ol",
                            { staticClass: "timeline timeline-point-lg" },
                            [
                              _c("li", { staticClass: "timeline-period" }, [
                                _c("time", [_vm._v("Today")])
                              ]),
                              _vm._v(" "),
                              _c("li", { staticClass: "timeline-block" }, [
                                _c(
                                  "div",
                                  { staticClass: "timeline-content" },
                                  [
                                    _c(
                                      "v-card",
                                      { attrs: { dark: "", color: "blue" } },
                                      [
                                        _c("v-card-text", [
                                          _vm._v(
                                            "\n                    Authoritatively syndicate goal-oriented leadership skills for clicks mortar outsourcing synergistically reconceptualize enabled.\n                    "
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
                                  "div",
                                  { staticClass: "timeline-point" },
                                  [
                                    _c("v-avatar", [
                                      _c("img", {
                                        attrs: {
                                          src: "/static/avatar/me.jpeg",
                                          alt: ""
                                        }
                                      })
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "timeline-detail" }, [
                                  _c(
                                    "time",
                                    {
                                      staticClass: "caption",
                                      attrs: { datetime: "2018" }
                                    },
                                    [_vm._v("Just now")]
                                  ),
                                  _vm._v(" "),
                                  _c("p", [
                                    _vm._v("Michael update his status.")
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c("li", { staticClass: "timeline-block" }, [
                                _c(
                                  "div",
                                  { staticClass: "timeline-content" },
                                  [
                                    _c(
                                      "v-card",
                                      { staticClass: "elevation-1" },
                                      [
                                        _c(
                                          "v-card-text",
                                          { staticClass: "pa-0" },
                                          [
                                            _c(
                                              "v-container",
                                              { attrs: { "grid-list-md": "" } },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "layout row align-center ma-0"
                                                  },
                                                  [
                                                    _c(
                                                      "v-avatar",
                                                      {
                                                        staticClass: "mx-auto",
                                                        attrs: { color: "info" }
                                                      },
                                                      [
                                                        _c("img", {
                                                          attrs: {
                                                            src:
                                                              "/static/avatar/a1.jpg"
                                                          }
                                                        })
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "text-center flex ml-2"
                                                      },
                                                      [
                                                        _c(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "subheading"
                                                          },
                                                          [_vm._v("John Doe")]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "caption"
                                                          },
                                                          [
                                                            _vm._v(
                                                              "Web Developer"
                                                            )
                                                          ]
                                                        )
                                                      ]
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
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "timeline-point" },
                                  [
                                    _c(
                                      "v-avatar",
                                      { staticClass: "indigo" },
                                      [
                                        _c("v-icon", { attrs: { dark: "" } }, [
                                          _vm._v("account_circle")
                                        ])
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "timeline-detail" }, [
                                  _c(
                                    "time",
                                    {
                                      staticClass: "caption",
                                      attrs: { datetime: "2018" }
                                    },
                                    [_vm._v("4 hours agon")]
                                  ),
                                  _vm._v(" "),
                                  _c("p", [_vm._v("New friend request")])
                                ])
                              ]),
                              _vm._v(" "),
                              _c("li", { staticClass: "timeline-block" }, [
                                _c(
                                  "div",
                                  { staticClass: "timeline-content" },
                                  [
                                    _c(
                                      "v-card",
                                      [
                                        _c("v-img", {
                                          attrs: {
                                            src: "/static/bg/5.jpg",
                                            height: "200px"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "v-card-title",
                                          { attrs: { "primary-title": "" } },
                                          [
                                            _c("div", [
                                              _c(
                                                "div",
                                                { staticClass: "headline" },
                                                [
                                                  _vm._v(
                                                    "Top western road trips"
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "span",
                                                { staticClass: "grey--text" },
                                                [
                                                  _vm._v(
                                                    "1,000 miles of wonder"
                                                  )
                                                ]
                                              )
                                            ])
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
                                  "div",
                                  { staticClass: "timeline-point" },
                                  [
                                    _c("v-avatar", [
                                      _c("img", {
                                        attrs: {
                                          src:
                                            "https://randomuser.me/api/portraits/men/1.jpg",
                                          alt: ""
                                        }
                                      })
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "timeline-detail" }, [
                                  _c(
                                    "time",
                                    {
                                      staticClass: "caption",
                                      attrs: { datetime: "2018" }
                                    },
                                    [_vm._v("1 Day ago")]
                                  ),
                                  _vm._v(" "),
                                  _c("p", [_vm._v("John doe post a picture")])
                                ])
                              ])
                            ]
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
                { attrs: { sm12: "" } },
                [
                  _c(
                    "v-widget",
                    { attrs: { title: "Basic Usage", contentBg: "white" } },
                    [
                      _c(
                        "div",
                        {
                          attrs: { slot: "widget-content" },
                          slot: "widget-content"
                        },
                        [
                          _c(
                            "ol",
                            {
                              staticClass:
                                "timeline timeline-activity timeline-point-sm timeline-content-right"
                            },
                            _vm._l(_vm.activity, function(item, index) {
                              return _c(
                                "li",
                                { key: index, staticClass: "timeline-block" },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "timeline-point" },
                                    [
                                      _c("v-circle", {
                                        attrs: {
                                          dot: "",
                                          large: "",
                                          color: item.color
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "timeline-content" },
                                    [
                                      _c(
                                        "time",
                                        {
                                          staticClass: "caption",
                                          attrs: { datetime: "2018" }
                                        },
                                        [_vm._v(_vm._s(item.timeString))]
                                      ),
                                      _vm._v(" "),
                                      _c("div", {
                                        domProps: {
                                          innerHTML: _vm._s(item.text)
                                        }
                                      })
                                    ]
                                  )
                                ]
                              )
                            })
                          )
                        ]
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
    require("vue-hot-reload-api")      .rerender("data-v-a48a821a", module.exports)
  }
}

/***/ })

});