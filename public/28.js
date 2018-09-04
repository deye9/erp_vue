webpackJsonp([28],{

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

/***/ 581:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      interval: {},
      value: 0
    };
  },

  computed: {},
  beforeDestroy: function beforeDestroy() {
    clearInterval(this.interval);
  },
  mounted: function mounted() {
    var _this = this;

    this.interval = setInterval(function () {
      if (_this.value === 100) {
        return _this.value === 0;
      }
      _this.value += 10;
    }, 1000);
  },

  methods: {}

});

/***/ }),

/***/ 582:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "page-progress" } },
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
                { attrs: { lg6: "" } },
                [
                  _c("v-widget", { attrs: { title: "Circular" } }, [
                    _c(
                      "div",
                      {
                        staticClass: "text-xs-center",
                        attrs: { slot: "widget-content" },
                        slot: "widget-content"
                      },
                      [
                        _c("v-progress-circular", {
                          attrs: { value: 100, color: "blue-grey" }
                        }),
                        _vm._v(" "),
                        _c("v-progress-circular", {
                          attrs: { value: 80, color: "deep-orange lighten-2" }
                        }),
                        _vm._v(" "),
                        _c("v-progress-circular", {
                          attrs: { value: 60, color: "brown" }
                        }),
                        _vm._v(" "),
                        _c("v-progress-circular", {
                          attrs: { value: 40, color: "lime" }
                        }),
                        _vm._v(" "),
                        _c("v-progress-circular", {
                          attrs: { value: 20, color: "indigo darken-2" }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-widget",
                    { staticClass: "mt-3", attrs: { title: "Interminate" } },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "text-xs-center",
                          attrs: { slot: "widget-content" },
                          slot: "widget-content"
                        },
                        [
                          _c("v-progress-circular", {
                            attrs: { indeterminate: "", color: "primary" }
                          }),
                          _vm._v(" "),
                          _c("v-progress-circular", {
                            attrs: { indeterminate: "", color: "red" }
                          }),
                          _vm._v(" "),
                          _c("v-progress-circular", {
                            attrs: { indeterminate: "", color: "purple" }
                          }),
                          _vm._v(" "),
                          _c("v-progress-circular", {
                            attrs: { indeterminate: "", color: "green" }
                          }),
                          _vm._v(" "),
                          _c("v-progress-circular", {
                            attrs: { indeterminate: "", color: "amber" }
                          })
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-widget",
                    { staticClass: "mt-3", attrs: { title: "Sizing" } },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "text-xs-center",
                          attrs: { slot: "widget-content" },
                          slot: "widget-content"
                        },
                        [
                          _c("v-progress-circular", {
                            attrs: {
                              indeterminate: "",
                              size: 50,
                              color: "primary"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-progress-circular", {
                            attrs: { indeterminate: "", width: 3, color: "red" }
                          }),
                          _vm._v(" "),
                          _c("v-progress-circular", {
                            attrs: {
                              indeterminate: "",
                              size: 70,
                              width: 7,
                              color: "purple"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-progress-circular", {
                            attrs: {
                              indeterminate: "",
                              width: 3,
                              color: "green"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-progress-circular", {
                            attrs: {
                              indeterminate: "",
                              size: 50,
                              color: "amber"
                            }
                          })
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-widget",
                    { staticClass: "mt-3", attrs: { title: "Rotate" } },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "text-xs-center",
                          attrs: { slot: "widget-content" },
                          slot: "widget-content"
                        },
                        [
                          _c(
                            "v-progress-circular",
                            {
                              attrs: {
                                size: 100,
                                width: 15,
                                rotate: 360,
                                value: _vm.value,
                                color: "teal"
                              }
                            },
                            [
                              _vm._v(
                                "\n                " +
                                  _vm._s(_vm.value) +
                                  "\n              "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-progress-circular",
                            {
                              attrs: {
                                size: 100,
                                width: 15,
                                rotate: -90,
                                value: _vm.value,
                                color: "primary"
                              }
                            },
                            [
                              _vm._v(
                                "\n                " +
                                  _vm._s(_vm.value) +
                                  "\n              "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-progress-circular",
                            {
                              attrs: {
                                size: 100,
                                width: 15,
                                rotate: 90,
                                value: _vm.value,
                                color: "red"
                              }
                            },
                            [
                              _vm._v(
                                "\n                " +
                                  _vm._s(_vm.value) +
                                  "\n              "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-progress-circular",
                            {
                              attrs: {
                                size: 100,
                                width: 15,
                                rotate: 180,
                                value: _vm.value,
                                color: "pink"
                              }
                            },
                            [
                              _vm._v(
                                "\n                " +
                                  _vm._s(_vm.value) +
                                  "\n              "
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
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { lg6: "" } },
                [
                  _c("v-widget", { attrs: { title: "Linear" } }, [
                    _c(
                      "div",
                      {
                        attrs: { slot: "widget-content" },
                        slot: "widget-content"
                      },
                      [
                        _c("v-progress-linear", {
                          attrs: { value: "15", color: "primary" }
                        }),
                        _vm._v(" "),
                        _c("v-progress-linear", {
                          attrs: { value: "30", color: "red" }
                        }),
                        _vm._v(" "),
                        _c("v-progress-linear", {
                          attrs: { value: "50", color: "purple" }
                        }),
                        _vm._v(" "),
                        _c("v-progress-linear", {
                          attrs: { value: "70", color: "green" }
                        }),
                        _vm._v(" "),
                        _c("v-progress-linear", {
                          attrs: { value: "90", color: "amber" }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-widget",
                    {
                      staticClass: "mt-3",
                      attrs: { title: "Linear indeterminate" }
                    },
                    [
                      _c(
                        "div",
                        {
                          attrs: { slot: "widget-content" },
                          slot: "widget-content"
                        },
                        [
                          _c("v-progress-linear", {
                            attrs: {
                              indeterminate: "",
                              value: "15",
                              color: "primary"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-progress-linear", {
                            attrs: {
                              indeterminate: "",
                              value: "15",
                              color: "pink"
                            }
                          })
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-widget",
                    { staticClass: "mt-3", attrs: { title: "Linear custom" } },
                    [
                      _c(
                        "div",
                        {
                          attrs: { slot: "widget-content" },
                          slot: "widget-content"
                        },
                        [
                          _c("v-progress-linear", {
                            attrs: {
                              value: "15",
                              height: "2",
                              color: "secondary"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-progress-linear", {
                            attrs: {
                              value: "30",
                              height: "5",
                              color: "success"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-progress-linear", {
                            attrs: { value: "45", height: "10", color: "info" }
                          }),
                          _vm._v(" "),
                          _c("v-progress-linear", {
                            attrs: {
                              value: "60",
                              height: "15",
                              color: "warning"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-progress-linear", {
                            attrs: { value: "75", height: "20", color: "error" }
                          })
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
    require("vue-hot-reload-api")      .rerender("data-v-1a044235", module.exports)
  }
}

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(581)
/* template */
var __vue_template__ = __webpack_require__(582)
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
Component.options.__file = "front_end/pages/ui/Progress.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1a044235", Component.options)
  } else {
    hotAPI.reload("data-v-1a044235", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});