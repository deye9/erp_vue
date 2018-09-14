webpackJsonp([31],{

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(618)
/* template */
var __vue_template__ = __webpack_require__(619)
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
Component.options.__file = "front_end/pages/ui/Slider.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1407bae9", Component.options)
  } else {
    hotAPI.reload("data-v-1407bae9", Component.options)
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

/***/ 618:
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VWidget: __WEBPACK_IMPORTED_MODULE_0__components_VWidget___default.a
  },
  data: function data() {
    return {
      slider1: 0,
      slider2: 0,
      slider3: 0,
      media1: 0,
      media2: 0,
      ex1: { label: 'color', val: 25, color: 'orange darken-3' },
      ex2: { label: 'track-color', val: 75, color: 'green lighten-1' },
      ex3: { label: 'thumb-color', val: 50, color: 'red' }
    };
  },

  computed: {},
  methods: {}
});

/***/ }),

/***/ 619:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "page-sliders" } },
    [
      _c(
        "v-container",
        { attrs: { "grid-list-lg": "", fluid: "" } },
        [
          _c(
            "v-layout",
            { attrs: { row: "", wrap: "" } },
            [
              _c(
                "v-flex",
                { attrs: { xs12: "" } },
                [
                  _c("v-widget", { attrs: { title: "Basic Usage" } }, [
                    _c(
                      "div",
                      {
                        attrs: { slot: "widget-content" },
                        slot: "widget-content"
                      },
                      [
                        _c("v-subheader", [_vm._v("Default")]),
                        _vm._v(" "),
                        _c("div", { staticClass: "container" }, [
                          _c("div", { staticClass: "layout column" }, [
                            _c(
                              "div",
                              { staticClass: "flex" },
                              [
                                _c("v-slider", {
                                  attrs: { step: "0" },
                                  model: {
                                    value: _vm.slider1,
                                    callback: function($$v) {
                                      _vm.slider1 = $$v
                                    },
                                    expression: "slider1"
                                  }
                                })
                              ],
                              1
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("v-subheader", [_vm._v("Disabled")]),
                        _vm._v(" "),
                        _c("div", { staticClass: "container" }, [
                          _c("div", { staticClass: "layout column" }, [
                            _c(
                              "div",
                              { staticClass: "flex" },
                              [
                                _c("v-slider", {
                                  attrs: { step: "0", disabled: "" },
                                  model: {
                                    value: _vm.slider2,
                                    callback: function($$v) {
                                      _vm.slider2 = $$v
                                    },
                                    expression: "slider2"
                                  }
                                })
                              ],
                              1
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("v-subheader", [
                          _vm._v("Concreate step (Drag the slider) ")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "container" }, [
                          _c("div", { staticClass: "layout column" }, [
                            _c(
                              "div",
                              { staticClass: "flex" },
                              [
                                _c("v-slider", {
                                  attrs: {
                                    placeholder: "step",
                                    color: "pink",
                                    max: 255,
                                    "thumb-label": "",
                                    step: "10",
                                    ticks: ""
                                  },
                                  model: {
                                    value: _vm.slider3,
                                    callback: function($$v) {
                                      _vm.slider3 = $$v
                                    },
                                    expression: "slider3"
                                  }
                                })
                              ],
                              1
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("v-subheader", [_vm._v("With Icon ")]),
                        _vm._v(" "),
                        _c("div", { staticClass: "container" }, [
                          _c("div", { staticClass: "layout column" }, [
                            _c(
                              "div",
                              { staticClass: "flex" },
                              [
                                _c("v-slider", {
                                  attrs: { "prepend-icon": "volume_up" },
                                  model: {
                                    value: _vm.media1,
                                    callback: function($$v) {
                                      _vm.media1 = $$v
                                    },
                                    expression: "media1"
                                  }
                                }),
                                _vm._v(" "),
                                _c("v-slider", {
                                  attrs: { "prepend-icon": "volume_down" },
                                  model: {
                                    value: _vm.media2,
                                    callback: function($$v) {
                                      _vm.media2 = $$v
                                    },
                                    expression: "media2"
                                  }
                                })
                              ],
                              1
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("v-subheader", [_vm._v("Custom color")]),
                        _vm._v(" "),
                        _c("div", { staticClass: "container" }, [
                          _c("div", { staticClass: "layout column" }, [
                            _c(
                              "div",
                              { staticClass: "flex" },
                              [
                                _c("v-slider", {
                                  attrs: {
                                    label: _vm.ex1.label,
                                    color: _vm.ex1.color
                                  },
                                  model: {
                                    value: _vm.ex1.val,
                                    callback: function($$v) {
                                      _vm.$set(_vm.ex1, "val", $$v)
                                    },
                                    expression: "ex1.val"
                                  }
                                }),
                                _vm._v(" "),
                                _c("v-slider", {
                                  attrs: {
                                    label: _vm.ex2.label,
                                    "track-color": _vm.ex2.color
                                  },
                                  model: {
                                    value: _vm.ex2.val,
                                    callback: function($$v) {
                                      _vm.$set(_vm.ex2, "val", $$v)
                                    },
                                    expression: "ex2.val"
                                  }
                                }),
                                _vm._v(" "),
                                _c("v-slider", {
                                  attrs: {
                                    label: _vm.ex3.label,
                                    "thumb-color": _vm.ex3.color,
                                    "thumb-label": ""
                                  },
                                  model: {
                                    value: _vm.ex3.val,
                                    callback: function($$v) {
                                      _vm.$set(_vm.ex3, "val", $$v)
                                    },
                                    expression: "ex3.val"
                                  }
                                })
                              ],
                              1
                            )
                          ])
                        ])
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
    require("vue-hot-reload-api")      .rerender("data-v-1407bae9", module.exports)
  }
}

/***/ })

});