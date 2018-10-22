webpackJsonp([23],{

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(685)
/* template */
var __vue_template__ = __webpack_require__(686)
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
Component.options.__file = "front_end/pages/form/Selects.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-344d778f", Component.options)
  } else {
    hotAPI.reload("data-v-344d778f", Component.options)
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

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([{
  'country': 'Aruba',
  'abbr': 'AW'
}, {
  'country': 'Afghanistan',
  'abbr': 'AF'
}, {
  'country': 'Angola',
  'abbr': 'AO'
}, {
  'country': 'Anguilla',
  'abbr': 'AI'
}, {
  'country': 'Albania',
  'abbr': 'AL'
}, {
  'country': 'Andorra',
  'abbr': 'AD'
}, {
  'country': 'Netherlands Antilles',
  'abbr': 'AN'
}, {
  'country': 'United Arab Emirates',
  'abbr': 'AE'
}, {
  'country': 'Argentina',
  'abbr': 'AR'
}, {
  'country': 'Armenia',
  'abbr': 'AM'
}, {
  'country': 'American Samoa',
  'abbr': 'AS'
}, {
  'country': 'Antarctica',
  'abbr': 'AQ'
}, {
  'country': 'French Southern territories',
  'abbr': 'TF'
}, {
  'country': 'Antigua and Barbuda',
  'abbr': 'AG'
}, {
  'country': 'Australia',
  'abbr': 'AU'
}, {
  'country': 'Austria',
  'abbr': 'AT'
}, {
  'country': 'Azerbaijan',
  'abbr': 'AZ'
}, {
  'country': 'Burundi',
  'abbr': 'BI'
}, {
  'country': 'Belgium',
  'abbr': 'BE'
}, {
  'country': 'Benin',
  'abbr': 'BJ'
}, {
  'country': 'Burkina Faso',
  'abbr': 'BF'
}, {
  'country': 'Bangladesh',
  'abbr': 'BD'
}, {
  'country': 'Bulgaria',
  'abbr': 'BG'
}, {
  'country': 'Bahrain',
  'abbr': 'BH'
}, {
  'country': 'Bahamas',
  'abbr': 'BS'
}, {
  'country': 'Bosnia and Herzegovina',
  'abbr': 'BA'
}, {
  'country': 'Belarus',
  'abbr': 'BY'
}, {
  'country': 'Belize',
  'abbr': 'BZ'
}, {
  'country': 'Bermuda',
  'abbr': 'BM'
}, {
  'country': 'Bolivia',
  'abbr': 'BO'
}, {
  'country': 'Brazil',
  'abbr': 'BR'
}, {
  'country': 'Barbados',
  'abbr': 'BB'
}, {
  'country': 'Brunei',
  'abbr': 'BN'
}, {
  'country': 'Bhutan',
  'abbr': 'BT'
}, {
  'country': 'Bouvet Island',
  'abbr': 'BV'
}, {
  'country': 'Botswana',
  'abbr': 'BW'
}, {
  'country': 'Central African Republic',
  'abbr': 'CF'
}, {
  'country': 'Canada',
  'abbr': 'CA'
}, {
  'country': 'Cocos (Keeling) Islands',
  'abbr': 'CC'
}, {
  'country': 'Switzerland',
  'abbr': 'CH'
}, {
  'country': 'Chile',
  'abbr': 'CL'
}, {
  'country': 'China',
  'abbr': 'CN'
}, {
  'country': 'Ivory Coast',
  'abbr': 'CI'
}, {
  'country': 'Cameroon',
  'abbr': 'CM'
}, {
  'country': 'Congo, The Democratic Republic of the',
  'abbr': 'CD'
}, {
  'country': 'Congo',
  'abbr': 'CG'
}, {
  'country': 'Cook Islands',
  'abbr': 'CK'
}, {
  'country': 'Colombia',
  'abbr': 'CO'
}, {
  'country': 'Comoros',
  'abbr': 'KM'
}, {
  'country': 'Cape Verde',
  'abbr': 'CV'
}, {
  'country': 'Costa Rica',
  'abbr': 'CR'
}, {
  'country': 'Cuba',
  'abbr': 'CU'
}, {
  'country': 'Christmas Island',
  'abbr': 'CX'
}, {
  'country': 'Cayman Islands',
  'abbr': 'KY'
}, {
  'country': 'Cyprus',
  'abbr': 'CY'
}, {
  'country': 'Czech Republic',
  'abbr': 'CZ'
}, {
  'country': 'Germany',
  'abbr': 'DE'
}, {
  'country': 'Djibouti',
  'abbr': 'DJ'
}, {
  'country': 'Dominica',
  'abbr': 'DM'
}, {
  'country': 'Denmark',
  'abbr': 'DK'
}, {
  'country': 'Dominican Republic',
  'abbr': 'DO'
}, {
  'country': 'Algeria',
  'abbr': 'DZ'
}, {
  'country': 'Ecuador',
  'abbr': 'EC'
}, {
  'country': 'Egypt',
  'abbr': 'EG'
}, {
  'country': 'Eritrea',
  'abbr': 'ER'
}, {
  'country': 'Western Sahara',
  'abbr': 'EH'
}, {
  'country': 'Spain',
  'abbr': 'ES'
}, {
  'country': 'Estonia',
  'abbr': 'EE'
}, {
  'country': 'Ethiopia',
  'abbr': 'ET'
}, {
  'country': 'Finland',
  'abbr': 'FI'
}, {
  'country': 'Fiji Islands',
  'abbr': 'FJ'
}, {
  'country': 'Falkland Islands',
  'abbr': 'FK'
}, {
  'country': 'France',
  'abbr': 'FR'
}, {
  'country': 'Faroe Islands',
  'abbr': 'FO'
}, {
  'country': 'Federated States of Micronesia',
  'abbr': 'FM'
}, {
  'country': 'Gabon',
  'abbr': 'GA'
}, {
  'country': 'United Kingdom',
  'abbr': 'GB'
}, {
  'country': 'Georgia',
  'abbr': 'GE'
}, {
  'country': 'Ghana',
  'abbr': 'GH'
}, {
  'country': 'Gibraltar',
  'abbr': 'GI'
}, {
  'country': 'Guinea',
  'abbr': 'GN'
}, {
  'country': 'Guadeloupe',
  'abbr': 'GP'
}, {
  'country': 'Gambia',
  'abbr': 'GM'
}, {
  'country': 'Guinea-Bissau',
  'abbr': 'GW'
}, {
  'country': 'Equatorial Guinea',
  'abbr': 'GQ'
}, {
  'country': 'Greece',
  'abbr': 'GR'
}, {
  'country': 'Grenada',
  'abbr': 'GD'
}, {
  'country': 'Greenland',
  'abbr': 'GL'
}, {
  'country': 'Guatemala',
  'abbr': 'GT'
}, {
  'country': 'French Guiana',
  'abbr': 'GF'
}, {
  'country': 'Guam',
  'abbr': 'GU'
}, {
  'country': 'Guyana',
  'abbr': 'GY'
}, {
  'country': 'Hong Kong',
  'abbr': 'HK'
}, {
  'country': 'Heard Island and McDonald Islands',
  'abbr': 'HM'
}, {
  'country': 'Honduras',
  'abbr': 'HN'
}, {
  'country': 'Croatia',
  'abbr': 'HR'
}, {
  'country': 'Haiti',
  'abbr': 'HT'
}, {
  'country': 'Hungary',
  'abbr': 'HU'
}, {
  'country': 'Indonesia',
  'abbr': 'ID'
}, {
  'country': 'India',
  'abbr': 'IN'
}, {
  'country': 'British Indian Ocean Territory',
  'abbr': 'IO'
}, {
  'country': 'Ireland',
  'abbr': 'IE'
}, {
  'country': 'Iran',
  'abbr': 'IR'
}, {
  'country': 'Iraq',
  'abbr': 'IQ'
}, {
  'country': 'Iceland',
  'abbr': 'IS'
}, {
  'country': 'Israel',
  'abbr': 'IL'
}, {
  'country': 'Italy',
  'abbr': 'IT'
}, {
  'country': 'Jamaica',
  'abbr': 'JM'
}, {
  'country': 'Jordan',
  'abbr': 'JO'
}, {
  'country': 'Japan',
  'abbr': 'JP'
}, {
  'country': 'Kazakhstan',
  'abbr': 'KZ'
}, {
  'country': 'Kenya',
  'abbr': 'KE'
}, {
  'country': 'Kyrgyzstan',
  'abbr': 'KG'
}, {
  'country': 'Cambodia',
  'abbr': 'KH'
}, {
  'country': 'Kiribati',
  'abbr': 'KI'
}, {
  'country': 'Saint Kitts and Nevis',
  'abbr': 'KN'
}, {
  'country': 'South Korea',
  'abbr': 'KR'
}, {
  'country': 'Kuwait',
  'abbr': 'KW'
}, {
  'country': 'Laos',
  'abbr': 'LA'
}, {
  'country': 'Lebanon',
  'abbr': 'LB'
}, {
  'country': 'Liberia',
  'abbr': 'LR'
}, {
  'country': 'Libyan Arab Jamahiriya',
  'abbr': 'LY'
}, {
  'country': 'Saint Lucia',
  'abbr': 'LC'
}, {
  'country': 'Liechtenstein',
  'abbr': 'LI'
}, {
  'country': 'Sri Lanka',
  'abbr': 'LK'
}, {
  'country': 'Lesotho',
  'abbr': 'LS'
}, {
  'country': 'Lithuania',
  'abbr': 'LT'
}, {
  'country': 'Luxembourg',
  'abbr': 'LU'
}, {
  'country': 'Latvia',
  'abbr': 'LV'
}, {
  'country': 'Macao',
  'abbr': 'MO'
}, {
  'country': 'Morocco',
  'abbr': 'MA'
}, {
  'country': 'Monaco',
  'abbr': 'MC'
}, {
  'country': 'Moldova',
  'abbr': 'MD'
}, {
  'country': 'Madagascar',
  'abbr': 'MG'
}, {
  'country': 'Maldives',
  'abbr': 'MV'
}, {
  'country': 'Mexico',
  'abbr': 'MX'
}, {
  'country': 'Marshall Islands',
  'abbr': 'MH'
}, {
  'country': 'Macedonia',
  'abbr': 'MK'
}, {
  'country': 'Mali',
  'abbr': 'ML'
}, {
  'country': 'Malta',
  'abbr': 'MT'
}, {
  'country': 'Myanmar',
  'abbr': 'MM'
}, {
  'country': 'Mongolia',
  'abbr': 'MN'
}, {
  'country': 'Northern Mariana Islands',
  'abbr': 'MP'
}, {
  'country': 'Mozambique',
  'abbr': 'MZ'
}, {
  'country': 'Mauritania',
  'abbr': 'MR'
}, {
  'country': 'Montserrat',
  'abbr': 'MS'
}, {
  'country': 'Martinique',
  'abbr': 'MQ'
}, {
  'country': 'Mauritius',
  'abbr': 'MU'
}, {
  'country': 'Malawi',
  'abbr': 'MW'
}, {
  'country': 'Malaysia',
  'abbr': 'MY'
}, {
  'country': 'Mayotte',
  'abbr': 'YT'
}, {
  'country': 'Namibia',
  'abbr': 'NA'
}, {
  'country': 'New Caledonia',
  'abbr': 'NC'
}, {
  'country': 'Niger',
  'abbr': 'NE'
}, {
  'country': 'Norfolk Island',
  'abbr': 'NF'
}, {
  'country': 'Nigeria',
  'abbr': 'NG'
}, {
  'country': 'Nicaragua',
  'abbr': 'NI'
}, {
  'country': 'Niue',
  'abbr': 'NU'
}, {
  'country': 'Netherlands',
  'abbr': 'NL'
}, {
  'country': 'Norway',
  'abbr': 'NO'
}, {
  'country': 'Nepal',
  'abbr': 'NP'
}, {
  'country': 'Nauru',
  'abbr': 'NR'
}, {
  'country': 'New Zealand',
  'abbr': 'NZ'
}, {
  'country': 'Oman',
  'abbr': 'OM'
}, {
  'country': 'Pakistan',
  'abbr': 'PK'
}, {
  'country': 'Panama',
  'abbr': 'PA'
}, {
  'country': 'Pitcairn',
  'abbr': 'PN'
}, {
  'country': 'Peru',
  'abbr': 'PE'
}, {
  'country': 'Philippines',
  'abbr': 'PH'
}, {
  'country': 'Palau',
  'abbr': 'PW'
}, {
  'country': 'Papua New Guinea',
  'abbr': 'PG'
}, {
  'country': 'Poland',
  'abbr': 'PL'
}, {
  'country': 'Puerto Rico',
  'abbr': 'PR'
}, {
  'country': 'North Korea',
  'abbr': 'KP'
}, {
  'country': 'Portugal',
  'abbr': 'PT'
}, {
  'country': 'Paraguay',
  'abbr': 'PY'
}, {
  'country': 'Palestine',
  'abbr': 'PS'
}, {
  'country': 'French Polynesia',
  'abbr': 'PF'
}, {
  'country': 'Qatar',
  'abbr': 'QA'
}, {
  'country': 'Reunion',
  'abbr': 'RE'
}, {
  'country': 'Romania',
  'abbr': 'RO'
}, {
  'country': 'Russian Federation',
  'abbr': 'RU'
}, {
  'country': 'Rwanda',
  'abbr': 'RW'
}, {
  'country': 'Saudi Arabia',
  'abbr': 'SA'
}, {
  'country': 'Sudan',
  'abbr': 'SD'
}, {
  'country': 'Senegal',
  'abbr': 'SN'
}, {
  'country': 'Singapore',
  'abbr': 'SG'
}, {
  'country': 'South Georgia and the South Sandwich Islands',
  'abbr': 'GS'
}, {
  'country': 'Saint Helena',
  'abbr': 'SH'
}, {
  'country': 'Svalbard and Jan Mayen',
  'abbr': 'SJ'
}, {
  'country': 'Solomon Islands',
  'abbr': 'SB'
}, {
  'country': 'Sierra Leone',
  'abbr': 'SL'
}, {
  'country': 'El Salvador',
  'abbr': 'SV'
}, {
  'country': 'San Marino',
  'abbr': 'SM'
}, {
  'country': 'Somalia',
  'abbr': 'SO'
}, {
  'country': 'Saint Pierre and Miquelon',
  'abbr': 'PM'
}, {
  'country': 'Sao Tome and Principe',
  'abbr': 'ST'
}, {
  'country': 'Suriname',
  'abbr': 'SR'
}, {
  'country': 'Slovakia',
  'abbr': 'SK'
}, {
  'country': 'Slovenia',
  'abbr': 'SI'
}, {
  'country': 'Sweden',
  'abbr': 'SE'
}, {
  'country': 'Swaziland',
  'abbr': 'SZ'
}, {
  'country': 'Seychelles',
  'abbr': 'SC'
}, {
  'country': 'Syria',
  'abbr': 'SY'
}, {
  'country': 'Turks and Caicos Islands',
  'abbr': 'TC'
}, {
  'country': 'Chad',
  'abbr': 'TD'
}, {
  'country': 'Togo',
  'abbr': 'TG'
}, {
  'country': 'Thailand',
  'abbr': 'TH'
}, {
  'country': 'Tajikistan',
  'abbr': 'TJ'
}, {
  'country': 'Tokelau',
  'abbr': 'TK'
}, {
  'country': 'Turkmenistan',
  'abbr': 'TM'
}, {
  'country': 'East Timor',
  'abbr': 'TP'
}, {
  'country': 'Tonga',
  'abbr': 'TO'
}, {
  'country': 'Trinidad and Tobago',
  'abbr': 'TT'
}, {
  'country': 'Tunisia',
  'abbr': 'TN'
}, {
  'country': 'Turkey',
  'abbr': 'TR'
}, {
  'country': 'Tuvalu',
  'abbr': 'TV'
}, {
  'country': 'Taiwan',
  'abbr': 'TW'
}, {
  'country': 'Tanzania',
  'abbr': 'TZ'
}, {
  'country': 'Uganda',
  'abbr': 'UG'
}, {
  'country': 'Ukraine',
  'abbr': 'UA'
}, {
  'country': 'United States Minor Outlying Islands',
  'abbr': 'UM'
}, {
  'country': 'Uruguay',
  'abbr': 'UY'
}, {
  'country': 'United States',
  'abbr': 'US'
}, {
  'country': 'Uzbekistan',
  'abbr': 'UZ'
}, {
  'country': 'Holy See (Vatican City State)',
  'abbr': 'VA'
}, {
  'country': 'Saint Vincent and the Grenadines',
  'abbr': 'VC'
}, {
  'country': 'Venezuela',
  'abbr': 'VE'
}, {
  'country': 'British Virgin Islands',
  'abbr': 'VG'
}, {
  'country': 'United States Virgin Islands',
  'abbr': 'VI'
}, {
  'country': 'Vietnam',
  'abbr': 'VN'
}, {
  'country': 'Vanuatu',
  'abbr': 'VU'
}, {
  'country': 'Wallis and Futuna',
  'abbr': 'WF'
}, {
  'country': 'Samoa',
  'abbr': 'WS'
}, {
  'country': 'Yemen',
  'abbr': 'YE'
}, {
  'country': 'Yugoslavia',
  'abbr': 'YU'
}, {
  'country': 'South Africa',
  'abbr': 'ZA'
}, {
  'country': 'Zambia',
  'abbr': 'ZM'
}, {
  'country': 'Zimbabwe',
  'abbr': 'ZW'
}]);

/***/ }),

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_VWidget__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_VWidget___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_VWidget__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_country__ = __webpack_require__(493);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    VWidget: __WEBPACK_IMPORTED_MODULE_0__components_VWidget___default.a
  },
  data: function data() {
    return {
      loading: false,
      items: [],
      search: null,
      select: [],
      e1: null,
      e2: null,
      e3: null,
      e4: null,
      e5: null,
      e6: null,
      e7: null,
      multi1: [],
      multi2: [],
      multi3: [],
      multi4: [],
      multi5: [],
      countries: __WEBPACK_IMPORTED_MODULE_1__api_country__["a" /* default */]
    };
  },

  computed: {},
  watch: {
    search: function search(val) {
      val && this.querySelections(val);
    }
  },
  methods: {
    querySelections: function querySelections(v) {
      var _this = this;

      console.log(v);
      this.loading = true;
      // Simulated ajax query
      setTimeout(function () {
        _this.items = _this.countries.filter(function (e) {
          return (e.country || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1;
        });
        _this.loading = false;
      }, 500);
    }
  }
});

/***/ }),

/***/ 686:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "page-selects" } },
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
                { attrs: { lg6: "", xs12: "" } },
                [
                  _c("v-widget", { attrs: { title: "Single Selection" } }, [
                    _c(
                      "div",
                      {
                        attrs: { slot: "widget-content" },
                        slot: "widget-content"
                      },
                      [
                        _c(
                          "v-container",
                          { attrs: { fluid: "" } },
                          [
                            _c(
                              "v-layout",
                              { attrs: { row: "", wrap: "" } },
                              [
                                _c(
                                  "v-flex",
                                  { attrs: { xs6: "" } },
                                  [_c("v-subheader", [_vm._v("Standard")])],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  { attrs: { xs6: "" } },
                                  [
                                    _c("v-select", {
                                      attrs: {
                                        items: _vm.countries,
                                        label: "Select",
                                        "item-text": "country",
                                        "item-value": "abbr",
                                        "single-line": ""
                                      },
                                      model: {
                                        value: _vm.e1,
                                        callback: function($$v) {
                                          _vm.e1 = $$v
                                        },
                                        expression: "e1"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  { attrs: { xs6: "" } },
                                  [
                                    _c("v-subheader", [
                                      _vm._v("Standard with focus")
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  { attrs: { xs6: "" } },
                                  [
                                    _c("v-select", {
                                      staticClass: "input-group--focused",
                                      attrs: {
                                        items: _vm.countries,
                                        label: "Select",
                                        "item-text": "country",
                                        "item-value": "abbr"
                                      },
                                      model: {
                                        value: _vm.e2,
                                        callback: function($$v) {
                                          _vm.e2 = $$v
                                        },
                                        expression: "e2"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  { attrs: { xs6: "" } },
                                  [_c("v-subheader", [_vm._v("Error")])],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  { attrs: { xs6: "" } },
                                  [
                                    _c("v-select", {
                                      attrs: {
                                        label: "Select",
                                        items: _vm.countries,
                                        "error-messages": [
                                          "Please select an option"
                                        ],
                                        "item-text": "country",
                                        "item-value": "abbr"
                                      },
                                      model: {
                                        value: _vm.e3,
                                        callback: function($$v) {
                                          _vm.e3 = $$v
                                        },
                                        expression: "e3"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  { attrs: { xs6: "" } },
                                  [_c("v-subheader", [_vm._v("Prepend Icon")])],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  { attrs: { xs6: "" } },
                                  [
                                    _c("v-select", {
                                      attrs: {
                                        label: "Select",
                                        "prepend-icon": "map",
                                        items: _vm.countries,
                                        "item-text": "country",
                                        "item-value": "abbr"
                                      },
                                      model: {
                                        value: _vm.e5,
                                        callback: function($$v) {
                                          _vm.e5 = $$v
                                        },
                                        expression: "e5"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  { attrs: { xs6: "" } },
                                  [_c("v-subheader", [_vm._v("Append Icon")])],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  { attrs: { xs6: "" } },
                                  [
                                    _c("v-select", {
                                      attrs: {
                                        label: "Select",
                                        items: _vm.countries,
                                        "append-icon": "map",
                                        "item-text": "country",
                                        "item-value": "abbr"
                                      },
                                      model: {
                                        value: _vm.e6,
                                        callback: function($$v) {
                                          _vm.e6 = $$v
                                        },
                                        expression: "e6"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  { attrs: { xs6: "" } },
                                  [
                                    _c("v-subheader", [_vm._v("Auto complete")])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  { attrs: { xs6: "" } },
                                  [
                                    _c("v-select", {
                                      attrs: {
                                        label: "Select",
                                        items: _vm.countries,
                                        autocomplete: "",
                                        "item-text": "country",
                                        "item-value": "abbr"
                                      },
                                      model: {
                                        value: _vm.e7,
                                        callback: function($$v) {
                                          _vm.e7 = $$v
                                        },
                                        expression: "e7"
                                      }
                                    })
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
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { lg6: "", xs12: "" } },
                [
                  _c("v-widget", { attrs: { title: "Mulitple Selection" } }, [
                    _c(
                      "div",
                      {
                        attrs: { slot: "widget-content" },
                        slot: "widget-content"
                      },
                      [
                        _c(
                          "v-container",
                          { attrs: { fluid: "" } },
                          [
                            _c(
                              "v-layout",
                              { attrs: { row: "", wrap: "" } },
                              [
                                _c(
                                  "v-flex",
                                  { attrs: { xs6: "" } },
                                  [_c("v-subheader", [_vm._v("Tags")])],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  { attrs: { xs6: "" } },
                                  [
                                    _c("v-select", {
                                      attrs: {
                                        items: _vm.countries,
                                        tags: "",
                                        label: "Select",
                                        "multi-line": "",
                                        "item-text": "country",
                                        "item-value": "abbr",
                                        "return-object": ""
                                      },
                                      model: {
                                        value: _vm.multi1,
                                        callback: function($$v) {
                                          _vm.multi1 = $$v
                                        },
                                        expression: "multi1"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  { attrs: { xs6: "" } },
                                  [
                                    _c("v-subheader", [
                                      _vm._v("Tags and chips")
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  { attrs: { xs6: "" } },
                                  [
                                    _c("v-select", {
                                      staticClass: "input-group--focused",
                                      attrs: {
                                        items: _vm.countries,
                                        tags: "",
                                        chips: "",
                                        multiple: "",
                                        label: "Select",
                                        "item-text": "country"
                                      },
                                      model: {
                                        value: _vm.multi2,
                                        callback: function($$v) {
                                          _vm.multi2 = $$v
                                        },
                                        expression: "multi2"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  { attrs: { xs6: "" } },
                                  [_c("v-subheader", [_vm._v("Rules")])],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  { attrs: { xs6: "" } },
                                  [
                                    _c("v-select", {
                                      attrs: {
                                        label: "Async items",
                                        autocomplete: "",
                                        loading: _vm.loading,
                                        multiple: "",
                                        "cache-items": "",
                                        chips: "",
                                        required: "",
                                        items: _vm.items,
                                        "item-text": "country",
                                        "item-value": "country",
                                        rules: [
                                          function() {
                                            return (
                                              _vm.select.length > 0 ||
                                              "You must choose at least one"
                                            )
                                          }
                                        ],
                                        "search-input": _vm.search
                                      },
                                      on: {
                                        "update:searchInput": function($event) {
                                          _vm.search = $event
                                        }
                                      },
                                      model: {
                                        value: _vm.select,
                                        callback: function($$v) {
                                          _vm.select = $$v
                                        },
                                        expression: "select"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  { attrs: { xs6: "" } },
                                  [
                                    _c("v-subheader", [
                                      _vm._v("Slots - Closable chips")
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  { attrs: { xs6: "" } },
                                  [
                                    _c("v-select", {
                                      attrs: {
                                        label: "Select",
                                        items: _vm.countries,
                                        chips: "",
                                        tags: "",
                                        "multi-line": "",
                                        "item-text": "country",
                                        "item-value": "abbr",
                                        "return-object": ""
                                      },
                                      scopedSlots: _vm._u([
                                        {
                                          key: "selection",
                                          fn: function(data) {
                                            return [
                                              _c(
                                                "v-chip",
                                                {
                                                  key: JSON.stringify(
                                                    data.item.abbr
                                                  ),
                                                  staticClass:
                                                    "chip--select-multi",
                                                  attrs: {
                                                    close: "",
                                                    selected: data.selected
                                                  },
                                                  on: {
                                                    input: function($event) {
                                                      data.parent.selectItem(
                                                        data.item.abbr
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "v-avatar",
                                                    { staticClass: "accent" },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          data.item.abbr
                                                            .slice(0, 1)
                                                            .toUpperCase()
                                                        )
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(
                                                    "\n                        " +
                                                      _vm._s(
                                                        data.item.country
                                                      ) +
                                                      "\n                      "
                                                  )
                                                ],
                                                1
                                              )
                                            ]
                                          }
                                        }
                                      ]),
                                      model: {
                                        value: _vm.multi4,
                                        callback: function($$v) {
                                          _vm.multi4 = $$v
                                        },
                                        expression: "multi4"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  { attrs: { xs6: "" } },
                                  [_c("v-subheader", [_vm._v("Slots")])],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  { attrs: { xs6: "" } },
                                  [
                                    _c("v-select", {
                                      attrs: {
                                        label: "Select",
                                        items: _vm.countries,
                                        chips: "",
                                        tags: "",
                                        "multi-line": "",
                                        "item-text": "country",
                                        "item-value": "abbr",
                                        "return-object": ""
                                      },
                                      scopedSlots: _vm._u([
                                        {
                                          key: "selection",
                                          fn: function(data) {
                                            return [
                                              _c(
                                                "v-chip",
                                                {
                                                  key: JSON.stringify(
                                                    data.item.abbr
                                                  ),
                                                  staticClass:
                                                    "chip--select-multi",
                                                  attrs: {
                                                    selected: data.selected
                                                  },
                                                  on: {
                                                    input: function($event) {
                                                      data.parent.selectItem(
                                                        data.item.abbr
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "v-avatar",
                                                    { staticClass: "accent" },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          data.item.abbr
                                                            .slice(0, 1)
                                                            .toUpperCase()
                                                        )
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(
                                                    "\n                        " +
                                                      _vm._s(
                                                        data.item.country
                                                      ) +
                                                      "\n                      "
                                                  )
                                                ],
                                                1
                                              )
                                            ]
                                          }
                                        }
                                      ]),
                                      model: {
                                        value: _vm.multi3,
                                        callback: function($$v) {
                                          _vm.multi3 = $$v
                                        },
                                        expression: "multi3"
                                      }
                                    })
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
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-344d778f", module.exports)
  }
}

/***/ })

});