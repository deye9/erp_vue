webpackJsonp([37],{

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(660)
/* template */
var __vue_template__ = __webpack_require__(661)
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
Component.options.__file = "front_end/pages/layout/Menus.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-94a0759c", Component.options)
  } else {
    hotAPI.reload("data-v-94a0759c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

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

/***/ 660:
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VWidget: __WEBPACK_IMPORTED_MODULE_0__components_VWidget___default.a
  },
  data: function data() {
    return {
      items: [{ title: 'Click Me' }, { title: 'Click Me' }, { title: 'Click Me' }, { title: 'Click Me 2' }],
      nudge: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      }
    };
  },

  computed: {},
  methods: {
    handleClick: function handleClick(e) {
      e.preventDefault();
    }
  }
});

/***/ }),

/***/ 661:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "page-menus" } },
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
                                  {
                                    staticClass: "text-xs-center",
                                    attrs: { xs12: "" }
                                  },
                                  [
                                    _c(
                                      "v-menu",
                                      {
                                        attrs: {
                                          "offset-y": "",
                                          "nudge-bottom": _vm.nudge.bottom,
                                          "nudge-left": _vm.nudge.left,
                                          "nudge-right": _vm.nudge.right,
                                          "nudge-top": _vm.nudge.top
                                        }
                                      },
                                      [
                                        _c(
                                          "v-btn",
                                          {
                                            attrs: {
                                              slot: "activator",
                                              dark: "",
                                              color: "primary"
                                            },
                                            slot: "activator"
                                          },
                                          [
                                            _vm._v(
                                              "\n                      Menu Offset Bottom\n                    "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-list",
                                          _vm._l(_vm.items, function(
                                            item,
                                            key
                                          ) {
                                            return _c(
                                              "v-list-tile",
                                              {
                                                key: key,
                                                on: { click: _vm.handleClick }
                                              },
                                              [
                                                _c("v-list-tile-title", [
                                                  _vm._v(_vm._s(item.title))
                                                ])
                                              ],
                                              1
                                            )
                                          })
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-menu",
                                      { attrs: { "offset-y": "", top: "" } },
                                      [
                                        _c(
                                          "v-btn",
                                          {
                                            attrs: {
                                              slot: "activator",
                                              dark: "",
                                              color: "primary"
                                            },
                                            slot: "activator"
                                          },
                                          [
                                            _vm._v(
                                              "\n                      Menu Offset Top\n                    "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-list",
                                          _vm._l(_vm.items, function(
                                            item,
                                            key
                                          ) {
                                            return _c(
                                              "v-list-tile",
                                              {
                                                key: key,
                                                on: { click: _vm.handleClick }
                                              },
                                              [
                                                _c("v-list-tile-title", [
                                                  _vm._v(_vm._s(item.title))
                                                ])
                                              ],
                                              1
                                            )
                                          })
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  { attrs: { xs12: "" } },
                                  [
                                    _c("v-slider", {
                                      attrs: { label: "Top offset", max: 50 },
                                      model: {
                                        value: _vm.nudge.top,
                                        callback: function($$v) {
                                          _vm.$set(_vm.nudge, "top", $$v)
                                        },
                                        expression: "nudge.top"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  { attrs: { xs12: "" } },
                                  [
                                    _c("v-slider", {
                                      attrs: {
                                        label: "Bottom offset",
                                        max: 50
                                      },
                                      model: {
                                        value: _vm.nudge.bottom,
                                        callback: function($$v) {
                                          _vm.$set(_vm.nudge, "bottom", $$v)
                                        },
                                        expression: "nudge.bottom"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  { attrs: { xs12: "" } },
                                  [
                                    _c("v-slider", {
                                      attrs: { label: "Left offset", max: 50 },
                                      model: {
                                        value: _vm.nudge.left,
                                        callback: function($$v) {
                                          _vm.$set(_vm.nudge, "left", $$v)
                                        },
                                        expression: "nudge.left"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  { attrs: { xs12: "" } },
                                  [
                                    _c("v-slider", {
                                      attrs: { label: "Right offset", max: 50 },
                                      model: {
                                        value: _vm.nudge.right,
                                        callback: function($$v) {
                                          _vm.$set(_vm.nudge, "right", $$v)
                                        },
                                        expression: "nudge.right"
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
    require("vue-hot-reload-api")      .rerender("data-v-94a0759c", module.exports)
  }
}

/***/ })

});