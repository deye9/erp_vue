webpackJsonp([43],{

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(707)
/* template */
var __vue_template__ = __webpack_require__(708)
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
Component.options.__file = "front_end/pages/form/Steppers.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-22c1904c", Component.options)
  } else {
    hotAPI.reload("data-v-22c1904c", Component.options)
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

/***/ 707:
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VWidget: __WEBPACK_IMPORTED_MODULE_0__components_VWidget___default.a
  },
  data: function data() {
    return {
      step: 1,
      e13: 1
    };
  },

  computed: {},
  methods: {}
});

/***/ }),

/***/ 708:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "page-steppers" } },
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
                  _c("v-subheader", [_vm._v("Horizontal Step ")]),
                  _vm._v(" "),
                  _c(
                    "v-stepper",
                    {
                      model: {
                        value: _vm.step,
                        callback: function($$v) {
                          _vm.step = $$v
                        },
                        expression: "step"
                      }
                    },
                    [
                      _c(
                        "v-stepper-header",
                        [
                          _c(
                            "v-stepper-step",
                            { attrs: { step: "1", complete: _vm.step > 1 } },
                            [_vm._v("Name of step 1")]
                          ),
                          _vm._v(" "),
                          _c("v-divider"),
                          _vm._v(" "),
                          _c(
                            "v-stepper-step",
                            { attrs: { step: "2", complete: _vm.step > 2 } },
                            [_vm._v("Name of step 2")]
                          ),
                          _vm._v(" "),
                          _c("v-divider"),
                          _vm._v(" "),
                          _c("v-stepper-step", { attrs: { step: "3" } }, [
                            _vm._v("Name of step 3")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-stepper-items",
                        [
                          _c(
                            "v-stepper-content",
                            { attrs: { step: "1" } },
                            [
                              _c("v-card", {
                                staticClass: "mb-5",
                                attrs: {
                                  color: "grey lighten-1",
                                  height: "200px"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { color: "primary" },
                                  nativeOn: {
                                    click: function($event) {
                                      _vm.step = 2
                                    }
                                  }
                                },
                                [_vm._v("Continue")]
                              ),
                              _vm._v(" "),
                              _c("v-btn", { attrs: { flat: "" } }, [
                                _vm._v("Cancel")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-stepper-content",
                            { attrs: { step: "2" } },
                            [
                              _c("v-card", {
                                staticClass: "mb-5",
                                attrs: {
                                  color: "grey lighten-1",
                                  height: "200px"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { color: "primary" },
                                  nativeOn: {
                                    click: function($event) {
                                      _vm.step = 3
                                    }
                                  }
                                },
                                [_vm._v("Continue")]
                              ),
                              _vm._v(" "),
                              _c("v-btn", { attrs: { flat: "" } }, [
                                _vm._v("Cancel")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-stepper-content",
                            { attrs: { step: "3" } },
                            [
                              _c("v-card", {
                                staticClass: "mb-5",
                                attrs: {
                                  color: "grey lighten-1",
                                  height: "200px"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { color: "primary" },
                                  nativeOn: {
                                    click: function($event) {
                                      _vm.step = 1
                                    }
                                  }
                                },
                                [_vm._v("Continue")]
                              ),
                              _vm._v(" "),
                              _c("v-btn", { attrs: { flat: "" } }, [
                                _vm._v("Cancel")
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
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { sm12: "" } },
                [
                  _c("v-subheader", [_vm._v("Vertical Step ")]),
                  _vm._v(" "),
                  _c(
                    "v-stepper",
                    {
                      attrs: { vertical: "" },
                      model: {
                        value: _vm.e13,
                        callback: function($$v) {
                          _vm.e13 = $$v
                        },
                        expression: "e13"
                      }
                    },
                    [
                      _c(
                        "v-stepper-step",
                        { attrs: { step: "1", complete: "" } },
                        [_vm._v("\n            Name of step 1\n          ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-stepper-content",
                        { attrs: { step: "1" } },
                        [
                          _c("v-card", {
                            staticClass: "mb-5",
                            attrs: { color: "grey lighten-1", height: "200px" }
                          }),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "primary" },
                              nativeOn: {
                                click: function($event) {
                                  _vm.e13 = 2
                                }
                              }
                            },
                            [_vm._v("Continue")]
                          ),
                          _vm._v(" "),
                          _c("v-btn", { attrs: { flat: "" } }, [
                            _vm._v("Cancel")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-stepper-step",
                        { attrs: { step: "2", complete: "" } },
                        [_vm._v("Name of step 2")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-stepper-content",
                        { attrs: { step: "2" } },
                        [
                          _c("v-card", {
                            staticClass: "mb-5",
                            attrs: { color: "grey lighten-1", height: "200px" }
                          }),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "primary" },
                              nativeOn: {
                                click: function($event) {
                                  _vm.e13 = 3
                                }
                              }
                            },
                            [_vm._v("Continue")]
                          ),
                          _vm._v(" "),
                          _c("v-btn", { attrs: { flat: "" } }, [
                            _vm._v("Cancel")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-stepper-step",
                        {
                          attrs: {
                            step: "3",
                            rules: [
                              function() {
                                return false
                              }
                            ]
                          }
                        },
                        [
                          _vm._v("\n            Ad templates\n            "),
                          _c("small", [_vm._v("Alert message")])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-stepper-content",
                        { attrs: { step: "3" } },
                        [
                          _c("v-card", {
                            staticClass: "mb-5",
                            attrs: { color: "grey lighten-1", height: "200px" }
                          }),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "primary" },
                              nativeOn: {
                                click: function($event) {
                                  _vm.e13 = 4
                                }
                              }
                            },
                            [_vm._v("Continue")]
                          ),
                          _vm._v(" "),
                          _c("v-btn", { attrs: { flat: "" } }, [
                            _vm._v("Cancel")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-stepper-step", { attrs: { step: "4" } }, [
                        _vm._v("View setup instructions")
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-stepper-content",
                        { attrs: { step: "4" } },
                        [
                          _c("v-card", {
                            staticClass: "mb-5",
                            attrs: { color: "grey lighten-1", height: "200px" }
                          }),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "primary" },
                              nativeOn: {
                                click: function($event) {
                                  _vm.e13 = 1
                                }
                              }
                            },
                            [_vm._v("Continue")]
                          ),
                          _vm._v(" "),
                          _c("v-btn", { attrs: { flat: "" } }, [
                            _vm._v("Cancel")
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
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-22c1904c", module.exports)
  }
}

/***/ })

});