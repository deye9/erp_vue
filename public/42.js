webpackJsonp([42],{

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(705)
/* template */
var __vue_template__ = __webpack_require__(706)
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
Component.options.__file = "front_end/pages/form/TextFields.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-71c8dc5e", Component.options)
  } else {
    hotAPI.reload("data-v-71c8dc5e", Component.options)
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

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_VWidget__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_VWidget___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_VWidget__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      email: '',
      rules: {
        required: function required(value) {
          return !!value || 'Required.';
        },
        email: function email(value) {
          var pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || 'Invalid e-mail.';
        }
      }
    };
  },

  computed: {},
  methods: {}
});

/***/ }),

/***/ 706:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "page-text-fields" } },
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
                          [
                            _c(
                              "v-layout",
                              { attrs: { row: "" } },
                              [
                                _c(
                                  "v-flex",
                                  { attrs: { xs4: "" } },
                                  [_c("v-subheader", [_vm._v("Validation")])],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  { attrs: { xs8: "" } },
                                  [
                                    _c("v-text-field", {
                                      attrs: {
                                        label: "E-mail",
                                        rules: [
                                          _vm.rules.required,
                                          _vm.rules.email
                                        ]
                                      },
                                      model: {
                                        value: _vm.email,
                                        callback: function($$v) {
                                          _vm.email = $$v
                                        },
                                        expression: "email"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-layout",
                              { attrs: { row: "" } },
                              [
                                _c(
                                  "v-flex",
                                  { attrs: { xs4: "" } },
                                  [
                                    _c("v-subheader", [
                                      _vm._v("Normal with hint text/label")
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  { attrs: { xs8: "" } },
                                  [
                                    _c("v-text-field", {
                                      attrs: {
                                        name: "input-1",
                                        label: "Label Text",
                                        color: "primary",
                                        id: "testing"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-layout",
                              { attrs: { row: "" } },
                              [
                                _c(
                                  "v-flex",
                                  { attrs: { xs4: "" } },
                                  [_c("v-subheader", [_vm._v("Focus")])],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  { attrs: { xs8: "" } },
                                  [
                                    _c("v-text-field", {
                                      staticClass: "input-group--focused",
                                      attrs: {
                                        name: "input-2",
                                        label: "Label Text",
                                        value: "Input text",
                                        color: "success"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-layout",
                              { attrs: { row: "" } },
                              [
                                _c(
                                  "v-flex",
                                  { attrs: { xs4: "" } },
                                  [
                                    _c("v-subheader", [
                                      _vm._v("Normal with input text + label")
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  { attrs: { xs8: "" } },
                                  [
                                    _c("v-text-field", {
                                      attrs: {
                                        name: "input-3",
                                        label: "Label Text",
                                        color: "pink",
                                        value: "Input text"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-layout",
                              { attrs: { row: "" } },
                              [
                                _c(
                                  "v-flex",
                                  { attrs: { xs4: "" } },
                                  [_c("v-subheader", [_vm._v("Single")])],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  { attrs: { xs8: "" } },
                                  [
                                    _c("v-text-field", {
                                      attrs: {
                                        name: "input-3",
                                        label: "Label Text",
                                        value: "Input text",
                                        disabled: ""
                                      }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-layout",
                              { attrs: { row: "" } },
                              [
                                _c(
                                  "v-flex",
                                  { attrs: { xs4: "" } },
                                  [
                                    _c("v-subheader", [
                                      _vm._v("Single line  (no hint) ")
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  { attrs: { xs8: "" } },
                                  [
                                    _c("v-text-field", {
                                      attrs: {
                                        name: "input-4",
                                        label: "Label Text",
                                        value: "Input text",
                                        color: "info",
                                        "single-line": ""
                                      }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-layout",
                              { attrs: { row: "" } },
                              [
                                _c(
                                  "v-flex",
                                  { attrs: { xs4: "" } },
                                  [_c("v-subheader", [_vm._v("Multiline ")])],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  { attrs: { xs8: "" } },
                                  [
                                    _c("v-text-field", {
                                      attrs: {
                                        name: "input-5",
                                        label: "Label Text",
                                        value: "Input text",
                                        color: "teal",
                                        "multi-line": ""
                                      }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-layout",
                              { attrs: { row: "" } },
                              [
                                _c(
                                  "v-flex",
                                  { attrs: { xs4: "" } },
                                  [
                                    _c("v-subheader", [
                                      _vm._v("Character counter ")
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  { attrs: { xs8: "" } },
                                  [
                                    _c("v-text-field", {
                                      attrs: {
                                        name: "input-6",
                                        label: "Label Text",
                                        value: "Input text",
                                        rules: [
                                          function(v) {
                                            return (
                                              v.length <= 25 ||
                                              "Max 25 characters"
                                            )
                                          }
                                        ],
                                        counter: 25,
                                        "single-line": ""
                                      }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-layout",
                              { attrs: { row: "" } },
                              [
                                _c(
                                  "v-flex",
                                  { attrs: { xs4: "" } },
                                  [_c("v-subheader", [_vm._v("Append icon ")])],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  { attrs: { xs8: "" } },
                                  [
                                    _c("v-text-field", {
                                      attrs: {
                                        name: "input-7",
                                        label: "Label Text",
                                        value: "Input text",
                                        "append-icon": "phone"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-layout",
                              { attrs: { row: "" } },
                              [
                                _c(
                                  "v-flex",
                                  { attrs: { xs4: "" } },
                                  [
                                    _c("v-subheader", [_vm._v("Prepend icon ")])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  { attrs: { xs8: "" } },
                                  [
                                    _c("v-text-field", {
                                      attrs: {
                                        name: "input-7",
                                        label: "Label Text",
                                        value: "Input text",
                                        "prepend-icon": "phone"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-layout",
                              { attrs: { row: "" } },
                              [
                                _c(
                                  "v-flex",
                                  { attrs: { xs4: "" } },
                                  [
                                    _c("v-subheader", [
                                      _vm._v("Prefix for dollar currency")
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  { attrs: { xs8: "" } },
                                  [
                                    _c("v-text-field", {
                                      attrs: {
                                        label: "Amount",
                                        value: "10.00",
                                        prefix: "$"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-layout",
                              { attrs: { row: "" } },
                              [
                                _c(
                                  "v-flex",
                                  { attrs: { xs4: "" } },
                                  [
                                    _c("v-subheader", [
                                      _vm._v("Suffix for weight")
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  { attrs: { xs8: "" } },
                                  [
                                    _c("v-text-field", {
                                      attrs: {
                                        label: "Weight",
                                        value: "28.00",
                                        suffix: "lbs"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-layout",
                              { attrs: { row: "" } },
                              [
                                _c(
                                  "v-flex",
                                  { attrs: { xs4: "" } },
                                  [
                                    _c("v-subheader", [
                                      _vm._v("Suffix for email domain")
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  { attrs: { xs8: "" } },
                                  [
                                    _c("v-text-field", {
                                      attrs: {
                                        label: "Email address",
                                        value: "example",
                                        suffix: "@gmail.com"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-layout",
                              { attrs: { row: "" } },
                              [
                                _c(
                                  "v-flex",
                                  { attrs: { xs4: "" } },
                                  [
                                    _c("v-subheader", [
                                      _vm._v("Suffix for time zone")
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  { attrs: { xs8: "" } },
                                  [
                                    _c("v-text-field", {
                                      attrs: {
                                        label: "Label Text",
                                        value: "12:30:00",
                                        type: "time",
                                        suffix: "PST"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-layout",
                              { attrs: { row: "" } },
                              [
                                _c(
                                  "v-flex",
                                  { attrs: { xs4: "" } },
                                  [
                                    _c("v-subheader", [
                                      _vm._v("Input with mask")
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  { attrs: { xs8: "" } },
                                  [
                                    _c("v-text-field", {
                                      attrs: {
                                        label: "Credit Card",
                                        mask: "credit-card",
                                        value: "4444444444444444"
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
    require("vue-hot-reload-api")      .rerender("data-v-71c8dc5e", module.exports)
  }
}

/***/ })

});