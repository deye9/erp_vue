webpackJsonp([38],{

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(659)
/* template */
var __vue_template__ = __webpack_require__(660)
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
Component.options.__file = "front_end/pages/layout/Jumbotrons.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-200f2979", Component.options)
  } else {
    hotAPI.reload("data-v-200f2979", Component.options)
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

/***/ 659:
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VWidget: __WEBPACK_IMPORTED_MODULE_0__components_VWidget___default.a
  },
  data: function data() {
    return {
      gradient: 'to top, #7B1FA2, #E1BEE7',
      gradient2: 'to top right, rgba(63,81,181, .7), rgba(25,32,72, .7)'
    };
  },

  computed: {},
  methods: {}
});

/***/ }),

/***/ 660:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "page-jumbotrons" } },
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
                  _c("v-widget", { attrs: { title: "Basic Usage" } }, [
                    _c(
                      "div",
                      {
                        attrs: { slot: "widget-content" },
                        slot: "widget-content"
                      },
                      [
                        _c(
                          "v-jumbotron",
                          { attrs: { color: "grey lighten-2" } },
                          [
                            _c(
                              "v-container",
                              { attrs: { "fill-height": "" } },
                              [
                                _c(
                                  "v-layout",
                                  { attrs: { "align-center": "" } },
                                  [
                                    _c(
                                      "v-flex",
                                      [
                                        _c("h3", { staticClass: "display-3" }, [
                                          _vm._v("Welcome to the site")
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          { staticClass: "subheading" },
                                          [
                                            _vm._v(
                                              "Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae id, ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare assueverit ex eum, ne nam essent vocent admodum."
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("v-divider", {
                                          staticClass: "my-3"
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "title mb-3" },
                                          [
                                            _vm._v(
                                              "Check out our newest features!"
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-btn",
                                          {
                                            staticClass: "mx-0",
                                            attrs: {
                                              large: "",
                                              color: "primary"
                                            }
                                          },
                                          [_vm._v("See more")]
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
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { lg6: "" } },
                [
                  _c("v-widget", { attrs: { title: "Coloring" } }, [
                    _c(
                      "div",
                      {
                        attrs: { slot: "widget-content" },
                        slot: "widget-content"
                      },
                      [
                        _c(
                          "v-jumbotron",
                          { attrs: { color: "primary", dark: "" } },
                          [
                            _c(
                              "v-container",
                              { attrs: { "fill-height": "" } },
                              [
                                _c(
                                  "v-layout",
                                  { attrs: { "align-center": "" } },
                                  [
                                    _c(
                                      "v-flex",
                                      { attrs: { "text-xs-center": "" } },
                                      [
                                        _c("h3", { staticClass: "display-3" }, [
                                          _vm._v("Custom Color")
                                        ])
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
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { lg6: "" } },
                [
                  _c("v-widget", { attrs: { title: "Gradient" } }, [
                    _c(
                      "div",
                      {
                        attrs: { slot: "widget-content" },
                        slot: "widget-content"
                      },
                      [
                        _c("v-text-field", {
                          attrs: { label: "Gradient" },
                          model: {
                            value: _vm.gradient,
                            callback: function($$v) {
                              _vm.gradient = $$v
                            },
                            expression: "gradient"
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "v-jumbotron",
                          { attrs: { gradient: _vm.gradient, dark: "" } },
                          [
                            _c(
                              "v-container",
                              { attrs: { "fill-height": "" } },
                              [
                                _c(
                                  "v-layout",
                                  { attrs: { "align-center": "" } },
                                  [
                                    _c(
                                      "v-flex",
                                      { attrs: { "text-xs-center": "" } },
                                      [
                                        _c("h3", { staticClass: "display-3" }, [
                                          _vm._v("Gradient")
                                        ])
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
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { lg6: "" } },
                [
                  _c("v-widget", { attrs: { title: "Gradient with image" } }, [
                    _c(
                      "div",
                      {
                        attrs: { slot: "widget-content" },
                        slot: "widget-content"
                      },
                      [
                        _c("v-text-field", {
                          attrs: { label: "Gradient" },
                          model: {
                            value: _vm.gradient2,
                            callback: function($$v) {
                              _vm.gradient2 = $$v
                            },
                            expression: "gradient2"
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "v-jumbotron",
                          {
                            attrs: {
                              src: "/static/bg/16.jpg",
                              gradient: _vm.gradient2,
                              dark: ""
                            }
                          },
                          [
                            _c(
                              "v-container",
                              { attrs: { "fill-height": "" } },
                              [
                                _c(
                                  "v-layout",
                                  { attrs: { "align-center": "" } },
                                  [
                                    _c(
                                      "v-flex",
                                      { attrs: { "text-xs-center": "" } },
                                      [
                                        _c("h3", { staticClass: "display-3" }, [
                                          _vm._v("Gradient over Image")
                                        ])
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
    require("vue-hot-reload-api")      .rerender("data-v-200f2979", module.exports)
  }
}

/***/ })

});