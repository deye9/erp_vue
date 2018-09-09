webpackJsonp([35],{

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(134)
/* template */
var __vue_template__ = __webpack_require__(135)
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

/***/ 134:
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

/***/ 135:
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

/***/ 584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_VWidget__ = __webpack_require__(133);
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VWidget: __WEBPACK_IMPORTED_MODULE_0__components_VWidget___default.a
  },
  data: function data() {
    return {
      alert: {
        showSuccess: true,
        showError: true,
        showWarnning: true,
        showInfo: true
      }
    };
  },

  computed: {
    showReset: function showReset() {
      return this.alert.showSuccess === this.alert.showError === this.alert.showWarnning === this.alert.showInfo === false;
    }
  },
  methods: {
    handleReset: function handleReset() {
      this.alert.showError = true;
      this.alert.showSuccess = true;
      this.alert.showWarnning = true;
      this.alert.showInfo = true;
    }
  }
});

/***/ }),

/***/ 585:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "page-alerts" } },
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
                { attrs: { sm12: "", md6: "", sm6: "" } },
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
                          "v-alert",
                          { attrs: { type: "success", value: true } },
                          [
                            _vm._v(
                              "\n              This is a success alert.\n            "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-alert",
                          { attrs: { type: "info", value: true } },
                          [
                            _vm._v(
                              "\n              This is a info alert.\n            "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-alert",
                          { attrs: { type: "warning", value: true } },
                          [
                            _vm._v(
                              "\n              This is a warning alert.\n            "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-alert",
                          { attrs: { type: "error", value: true } },
                          [
                            _vm._v(
                              "\n              This is a error alert.\n            "
                            )
                          ]
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
                { attrs: { sm12: "", md6: "", sm6: "" } },
                [
                  _c("v-widget", { attrs: { title: "Custom Icons" } }, [
                    _c(
                      "div",
                      {
                        attrs: { slot: "widget-content" },
                        slot: "widget-content"
                      },
                      [
                        _c(
                          "v-alert",
                          {
                            attrs: {
                              color: "success",
                              icon: "new_releases",
                              value: true
                            }
                          },
                          [
                            _vm._v(
                              "\n              This is a success alert with a custom icon.\n            "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-alert",
                          {
                            attrs: {
                              color: "warning",
                              value: true,
                              icon: "message"
                            }
                          },
                          [
                            _vm._v(
                              "\n              This is a warning alert with a custom icon.\n            "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-alert",
                          {
                            attrs: { color: "info", icon: "star", value: true }
                          },
                          [
                            _vm._v(
                              "\n              This is a info alert with a custom icon.\n            "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-alert",
                          { attrs: { color: "error", value: true } },
                          [
                            _vm._v(
                              "\n              This is an error alert with no icon.\n            "
                            )
                          ]
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
                { attrs: { sm12: "", md6: "", sm6: "" } },
                [
                  _c("v-widget", { attrs: { title: "Outline Alerts" } }, [
                    _c(
                      "div",
                      {
                        attrs: { slot: "widget-content" },
                        slot: "widget-content"
                      },
                      [
                        _c(
                          "v-alert",
                          {
                            attrs: {
                              outline: "",
                              color: "success",
                              icon: "check_circle",
                              value: true
                            }
                          },
                          [
                            _vm._v(
                              "\n              This is a success alert.\n            "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-alert",
                          {
                            attrs: {
                              outline: "",
                              color: "info",
                              icon: "info",
                              value: true
                            }
                          },
                          [
                            _vm._v(
                              "\n              This is an info alert.\n            "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-alert",
                          {
                            attrs: {
                              outline: "",
                              color: "warning",
                              icon: "priority_high",
                              value: true
                            }
                          },
                          [
                            _vm._v(
                              "\n              This is a warning alert.\n            "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-alert",
                          {
                            attrs: {
                              outline: "",
                              color: "error",
                              icon: "warning",
                              value: true
                            }
                          },
                          [
                            _vm._v(
                              "\n              This is a error alert.\n            "
                            )
                          ]
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
                { attrs: { sm12: "", md6: "", sm6: "" } },
                [
                  _c("v-widget", { attrs: { title: "Closable Alerts" } }, [
                    _c(
                      "div",
                      {
                        attrs: { slot: "widget-content" },
                        slot: "widget-content"
                      },
                      [
                        _c(
                          "v-alert",
                          {
                            attrs: {
                              type: "success",
                              dismissible: "",
                              transition: "scale-transition"
                            },
                            model: {
                              value: _vm.alert.showSuccess,
                              callback: function($$v) {
                                _vm.$set(_vm.alert, "showSuccess", $$v)
                              },
                              expression: "alert.showSuccess"
                            }
                          },
                          [
                            _vm._v(
                              "\n              This is a success alert that is closable with scale transition.\n            "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-alert",
                          {
                            attrs: { type: "error", dismissible: "" },
                            model: {
                              value: _vm.alert.showError,
                              callback: function($$v) {
                                _vm.$set(_vm.alert, "showError", $$v)
                              },
                              expression: "alert.showError"
                            }
                          },
                          [
                            _vm._v(
                              "\n              This is a error alert that is closable.\n            "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-alert",
                          {
                            attrs: { type: "warning", dismissible: "" },
                            model: {
                              value: _vm.alert.showWarnning,
                              callback: function($$v) {
                                _vm.$set(_vm.alert, "showWarnning", $$v)
                              },
                              expression: "alert.showWarnning"
                            }
                          },
                          [
                            _vm._v(
                              "\n              This is a warning alert that is closable.\n            "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-alert",
                          {
                            attrs: { type: "info", dismissible: "" },
                            model: {
                              value: _vm.alert.showInfo,
                              callback: function($$v) {
                                _vm.$set(_vm.alert, "showInfo", $$v)
                              },
                              expression: "alert.showInfo"
                            }
                          },
                          [
                            _vm._v(
                              "\n              This is a info alert that is closable.\n            "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "text-xs-center" },
                          [
                            _c(
                              "v-btn",
                              {
                                attrs: { color: "primary", dark: "" },
                                on: { click: _vm.handleReset }
                              },
                              [_vm._v("Reset")]
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
    require("vue-hot-reload-api")      .rerender("data-v-d274eff8", module.exports)
  }
}

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(584)
/* template */
var __vue_template__ = __webpack_require__(585)
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
Component.options.__file = "front_end/pages/ui/Alert.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d274eff8", Component.options)
  } else {
    hotAPI.reload("data-v-d274eff8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});