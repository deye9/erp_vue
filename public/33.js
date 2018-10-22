webpackJsonp([33],{

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

/***/ 589:
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VWidget: __WEBPACK_IMPORTED_MODULE_0__components_VWidget___default.a
  },
  data: function data() {
    return {};
  },

  computed: {},
  methods: {}
});

/***/ }),

/***/ 590:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "pageBadge" } },
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
                { attrs: { lg4: "", sm12: "" } },
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
                          "div",
                          { staticClass: "text-xs-center" },
                          [
                            _c(
                              "v-badge",
                              { attrs: { left: "" } },
                              [
                                _c(
                                  "span",
                                  { attrs: { slot: "badge" }, slot: "badge" },
                                  [_vm._v("6")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-icon",
                                  {
                                    attrs: {
                                      large: "",
                                      color: "grey lighten-1"
                                    }
                                  },
                                  [_vm._v("shopping_cart")]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-badge",
                              { attrs: { color: "red" } },
                              [
                                _c(
                                  "span",
                                  { attrs: { slot: "badge" }, slot: "badge" },
                                  [_vm._v("!")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-icon",
                                  { attrs: { large: "", color: "grey" } },
                                  [_vm._v("mail")]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("v-label", [_vm._v("Label")])
                          ],
                          1
                        )
                      ]
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { lg4: "", sm12: "" } },
                [
                  _c("v-widget", { attrs: { title: "Inline Badge" } }, [
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
                            _c("v-badge", { attrs: { left: "" } }, [
                              _c(
                                "span",
                                { attrs: { slot: "badge" }, slot: "badge" },
                                [_vm._v("2")]
                              ),
                              _vm._v(" "),
                              _c("span", [_vm._v("Examples")])
                            ]),
                            _vm._v("\n              \n            "),
                            _c(
                              "v-badge",
                              { attrs: { color: "green" } },
                              [
                                _c(
                                  "v-icon",
                                  {
                                    attrs: {
                                      slot: "badge",
                                      dark: "",
                                      small: ""
                                    },
                                    slot: "badge"
                                  },
                                  [_vm._v("list")]
                                ),
                                _vm._v(" "),
                                _c("span", [_vm._v("Lists")])
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ]
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { lg4: "", sm12: "" } },
                [
                  _c("v-widget", { attrs: { title: "Icon Badge" } }, [
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
                              "v-badge",
                              { attrs: { left: "", color: "purple" } },
                              [
                                _c(
                                  "v-icon",
                                  {
                                    attrs: {
                                      slot: "badge",
                                      dark: "",
                                      small: ""
                                    },
                                    slot: "badge"
                                  },
                                  [_vm._v("layers")]
                                ),
                                _vm._v(" "),
                                _c("span", [
                                  _vm._v(
                                    "\n                  MDI icon\n                "
                                  )
                                ])
                              ],
                              1
                            ),
                            _vm._v("\n                \n              "),
                            _c(
                              "v-badge",
                              { attrs: { color: "orange" } },
                              [
                                _c(
                                  "v-icon",
                                  {
                                    attrs: {
                                      slot: "badge",
                                      dark: "",
                                      small: ""
                                    },
                                    slot: "badge"
                                  },
                                  [_vm._v("fa fa-apple")]
                                ),
                                _vm._v(" "),
                                _c("span", [
                                  _vm._v(
                                    "\n                  Font Awesome icon\n                "
                                  )
                                ])
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ]
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
    require("vue-hot-reload-api")      .rerender("data-v-6bde1ecb", module.exports)
  }
}

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(589)
/* template */
var __vue_template__ = __webpack_require__(590)
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
Component.options.__file = "front_end/pages/ui/Badge.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6bde1ecb", Component.options)
  } else {
    hotAPI.reload("data-v-6bde1ecb", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});