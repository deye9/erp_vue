webpackJsonp([26],{

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

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_VWidget__ = __webpack_require__(123);
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VWidget: __WEBPACK_IMPORTED_MODULE_0__components_VWidget___default.a
  },
  data: function data() {
    return {
      snackbar: false,
      y: 'top',
      x: null,
      mode: '',
      timeout: 6000,
      color: '',
      text: 'Hello, I\'m a snackbar'
    };
  },

  computed: {},
  methods: {}
});

/***/ }),

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "page-snackbar" } },
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
                { attrs: { lg12: "", sm12: "" } },
                [
                  _c("v-widget", { attrs: { title: "Basic Usage" } }, [
                    _c(
                      "section",
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
                                  { attrs: { xs12: "" } },
                                  [
                                    _c(
                                      "v-radio-group",
                                      {
                                        attrs: { row: "" },
                                        model: {
                                          value: _vm.color,
                                          callback: function($$v) {
                                            _vm.color = $$v
                                          },
                                          expression: "color"
                                        }
                                      },
                                      _vm._l(
                                        [
                                          "success",
                                          "info",
                                          "error",
                                          "cyan darken-2"
                                        ],
                                        function(colorValue, i) {
                                          return _c("v-radio", {
                                            key: i,
                                            attrs: {
                                              value: colorValue,
                                              label: colorValue,
                                              color: colorValue
                                            }
                                          })
                                        }
                                      )
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  { attrs: { xs12: "", sm3: "" } },
                                  [
                                    _c("v-checkbox", {
                                      attrs: { value: "left", label: "Left" },
                                      model: {
                                        value: _vm.x,
                                        callback: function($$v) {
                                          _vm.x = $$v
                                        },
                                        expression: "x"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  { attrs: { xs6: "", sm3: "" } },
                                  [
                                    _c("v-checkbox", {
                                      attrs: { value: "right", label: "Right" },
                                      model: {
                                        value: _vm.x,
                                        callback: function($$v) {
                                          _vm.x = $$v
                                        },
                                        expression: "x"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  { attrs: { xs6: "", sm3: "" } },
                                  [
                                    _c("v-checkbox", {
                                      attrs: { value: "top", label: "Top" },
                                      model: {
                                        value: _vm.y,
                                        callback: function($$v) {
                                          _vm.y = $$v
                                        },
                                        expression: "y"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  { attrs: { xs6: "", sm3: "" } },
                                  [
                                    _c("v-checkbox", {
                                      attrs: {
                                        value: "bottom",
                                        label: "Bottom"
                                      },
                                      model: {
                                        value: _vm.y,
                                        callback: function($$v) {
                                          _vm.y = $$v
                                        },
                                        expression: "y"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  { attrs: { xs12: "", sm3: "" } },
                                  [
                                    _c("v-checkbox", {
                                      attrs: {
                                        value: "multi-line",
                                        label: "Multi-line (mobile)"
                                      },
                                      model: {
                                        value: _vm.mode,
                                        callback: function($$v) {
                                          _vm.mode = $$v
                                        },
                                        expression: "mode"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  { attrs: { xs12: "", sm3: "" } },
                                  [
                                    _c("v-checkbox", {
                                      attrs: {
                                        value: "vertical",
                                        label: "Vertical (mobile)"
                                      },
                                      model: {
                                        value: _vm.mode,
                                        callback: function($$v) {
                                          _vm.mode = $$v
                                        },
                                        expression: "mode"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  { attrs: { xs12: "", sm4: "" } },
                                  [
                                    _c("v-text-field", {
                                      attrs: { type: "text", label: "Text" },
                                      model: {
                                        value: _vm.text,
                                        callback: function($$v) {
                                          _vm.text = $$v
                                        },
                                        expression: "text"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  { attrs: { xs12: "", sm4: "" } },
                                  [
                                    _c("v-text-field", {
                                      attrs: {
                                        type: "number",
                                        label: "Timeout"
                                      },
                                      model: {
                                        value: _vm.timeout,
                                        callback: function($$v) {
                                          _vm.timeout = _vm._n($$v)
                                        },
                                        expression: "timeout"
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
                        ),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            attrs: { block: "", color: "primary", dark: "" },
                            nativeOn: {
                              click: function($event) {
                                _vm.snackbar = true
                              }
                            }
                          },
                          [_vm._v("Show Snackbar")]
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
      ),
      _vm._v(" "),
      _c(
        "v-snackbar",
        {
          attrs: {
            timeout: _vm.timeout,
            color: _vm.color,
            top: _vm.y === "top",
            bottom: _vm.y === "bottom",
            right: _vm.x === "right",
            left: _vm.x === "left",
            "multi-line": _vm.mode === "multi-line",
            vertical: _vm.mode === "vertical"
          },
          model: {
            value: _vm.snackbar,
            callback: function($$v) {
              _vm.snackbar = $$v
            },
            expression: "snackbar"
          }
        },
        [
          _vm._v("\n    " + _vm._s(_vm.text) + "\n    "),
          _c(
            "v-btn",
            {
              attrs: { flat: "", icon: "", dark: "" },
              nativeOn: {
                click: function($event) {
                  _vm.snackbar = false
                }
              }
            },
            [_c("v-icon", [_vm._v("close")])],
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
    require("vue-hot-reload-api")      .rerender("data-v-c85f85e6", module.exports)
  }
}

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(563)
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
Component.options.__file = "front_end/pages/ui/Snackbar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c85f85e6", Component.options)
  } else {
    hotAPI.reload("data-v-c85f85e6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});