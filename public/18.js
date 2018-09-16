webpackJsonp([18],{

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

/***/ 590:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(591);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("effe9a7c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-31104e8c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Button.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-31104e8c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Button.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 591:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.custom-loader {\n  -webkit-animation: loader 1s infinite;\n          animation: loader 1s infinite;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n@-webkit-keyframes loader {\nfrom {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n}\nto {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@keyframes loader {\nfrom {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n}\nto {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 592:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      text: 'center',
      icon: 'justify',
      toggle_none: null,
      toggle_one: 0,
      toggle_exclusive: 2,
      toggle_multiple: [0, 1, 2],
      loader: null,
      loading: false,
      loading2: false,
      loading3: false,
      loading4: false
    };
  },

  computed: {},
  watch: {
    loader: function loader() {
      var _this = this;

      var l = this.loader;
      this[l] = !this[l];

      setTimeout(function () {
        _this[l] = false;
      }, 3000);
      this.loader = null;
    }
  },
  methods: {}
});

/***/ }),

/***/ 593:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "page-buttons" } },
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
                { attrs: { xl6: "" } },
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
                          [
                            _c("v-btn", { attrs: { color: "success" } }, [
                              _vm._v("Success")
                            ]),
                            _vm._v(" "),
                            _c("v-btn", { attrs: { color: "error" } }, [
                              _vm._v("Error")
                            ]),
                            _vm._v(" "),
                            _c("v-btn", { attrs: { color: "warning" } }, [
                              _vm._v("Warning")
                            ]),
                            _vm._v(" "),
                            _c("v-btn", { attrs: { color: "info" } }, [
                              _vm._v("Info")
                            ])
                          ],
                          1
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-widget",
                    { staticClass: "mt-3", attrs: { title: "Flat button" } },
                    [
                      _c(
                        "div",
                        {
                          attrs: { slot: "widget-content" },
                          slot: "widget-content"
                        },
                        [
                          _c(
                            "div",
                            [
                              _c(
                                "v-btn",
                                { attrs: { color: "success", flat: "" } },
                                [_vm._v("Success")]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                { attrs: { color: "error", flat: "" } },
                                [_vm._v("Error")]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                { attrs: { color: "warning", flat: "" } },
                                [_vm._v("Warning")]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                { attrs: { color: "info", flat: "" } },
                                [_vm._v("Info")]
                              )
                            ],
                            1
                          )
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-widget",
                    {
                      staticClass: "mt-3",
                      attrs: { title: "Depressed button" }
                    },
                    [
                      _c(
                        "div",
                        {
                          attrs: { slot: "widget-content" },
                          slot: "widget-content"
                        },
                        [
                          _c(
                            "div",
                            [
                              _c(
                                "v-btn",
                                { attrs: { color: "success", depressed: "" } },
                                [_vm._v("Success")]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                { attrs: { color: "error", depressed: "" } },
                                [_vm._v("Error")]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                { attrs: { color: "warning", depressed: "" } },
                                [_vm._v("Warning")]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                { attrs: { color: "info", depressed: "" } },
                                [_vm._v("Info")]
                              )
                            ],
                            1
                          )
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-widget",
                    { staticClass: "mt-3", attrs: { title: "Outline button" } },
                    [
                      _c(
                        "div",
                        {
                          attrs: { slot: "widget-content" },
                          slot: "widget-content"
                        },
                        [
                          _c(
                            "div",
                            [
                              _c(
                                "v-btn",
                                { attrs: { color: "success", outline: "" } },
                                [_vm._v("Success")]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                { attrs: { color: "error", outline: "" } },
                                [_vm._v("Error")]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                { attrs: { color: "warning", outline: "" } },
                                [_vm._v("Warning")]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                { attrs: { color: "info", outline: "" } },
                                [_vm._v("Info")]
                              )
                            ],
                            1
                          )
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-widget",
                    { staticClass: "mt-3", attrs: { title: "Rounded button" } },
                    [
                      _c(
                        "div",
                        {
                          attrs: { slot: "widget-content" },
                          slot: "widget-content"
                        },
                        [
                          _c(
                            "div",
                            [
                              _c(
                                "v-btn",
                                { attrs: { color: "success", round: "" } },
                                [_vm._v("Success")]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                { attrs: { color: "error", round: "" } },
                                [_vm._v("Error")]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                { attrs: { color: "warning", round: "" } },
                                [_vm._v("Warning")]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                { attrs: { color: "info", round: "" } },
                                [_vm._v("Info")]
                              )
                            ],
                            1
                          )
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-widget",
                    {
                      staticClass: "mt-3",
                      attrs: { title: "Floating button" }
                    },
                    [
                      _c(
                        "div",
                        {
                          attrs: { slot: "widget-content" },
                          slot: "widget-content"
                        },
                        [
                          _c(
                            "div",
                            [
                              _c(
                                "v-btn",
                                {
                                  attrs: { color: "success", dark: "", fab: "" }
                                },
                                [
                                  _c("v-icon", { attrs: { dark: "" } }, [
                                    _vm._v("remove")
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                { attrs: { color: "pink", dark: "", fab: "" } },
                                [
                                  _c("v-icon", { attrs: { dark: "" } }, [
                                    _vm._v("favorite")
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                { attrs: { color: "red", dark: "", fab: "" } },
                                [
                                  _c("v-icon", { attrs: { dark: "" } }, [
                                    _vm._v("add")
                                  ])
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-widget",
                    { staticClass: "mt-3", attrs: { title: "Loading button" } },
                    [
                      _c(
                        "div",
                        {
                          attrs: { slot: "widget-content" },
                          slot: "widget-content"
                        },
                        [
                          _c(
                            "div",
                            [
                              _c(
                                "v-btn",
                                {
                                  attrs: {
                                    color: "secondary",
                                    loading: _vm.loading,
                                    disabled: _vm.loading
                                  },
                                  nativeOn: {
                                    click: function($event) {
                                      _vm.loader = "loading"
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                Accept Terms\n              "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  staticClass: "white--text",
                                  attrs: {
                                    loading: _vm.loading3,
                                    disabled: _vm.loading3,
                                    color: "blue-grey"
                                  },
                                  nativeOn: {
                                    click: function($event) {
                                      _vm.loader = "loading3"
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                Upload\n                "
                                  ),
                                  _c(
                                    "v-icon",
                                    { attrs: { right: "", dark: "" } },
                                    [_vm._v("cloud_upload")]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: {
                                    color: "success",
                                    loading: _vm.loading2,
                                    disabled: _vm.loading2
                                  },
                                  nativeOn: {
                                    click: function($event) {
                                      _vm.loader = "loading2"
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                Custom Loader\n                "
                                  ),
                                  _c(
                                    "span",
                                    {
                                      attrs: { slot: "loader" },
                                      slot: "loader"
                                    },
                                    [_vm._v("Loading...")]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: {
                                    color: "info",
                                    loading: _vm.loading4,
                                    disabled: _vm.loading4
                                  },
                                  nativeOn: {
                                    click: function($event) {
                                      _vm.loader = "loading4"
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                Icon Loader\n                "
                                  ),
                                  _c(
                                    "span",
                                    {
                                      staticClass: "custom-loader",
                                      attrs: { slot: "loader" },
                                      slot: "loader"
                                    },
                                    [
                                      _c("v-icon", { attrs: { light: "" } }, [
                                        _vm._v("cached")
                                      ])
                                    ],
                                    1
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ]
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { xl6: "" } },
                [
                  _c("v-widget", { attrs: { title: "Icon button" } }, [
                    _c(
                      "div",
                      {
                        attrs: { slot: "widget-content" },
                        slot: "widget-content"
                      },
                      [
                        _c(
                          "v-container",
                          { staticClass: "pa-0", attrs: { fluid: "" } },
                          [
                            _c(
                              "v-layout",
                              { attrs: { row: "", wrap: "" } },
                              [
                                _c("v-flex", { attrs: { xs12: "" } }, [
                                  _c("p", [_vm._v("Normal")])
                                ]),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  { attrs: { xs12: "", sm3: "" } },
                                  [
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: {
                                          flat: "",
                                          icon: "",
                                          color: "pink"
                                        }
                                      },
                                      [_c("v-icon", [_vm._v("favorite")])],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  { attrs: { xs12: "", sm3: "" } },
                                  [
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: {
                                          flat: "",
                                          icon: "",
                                          color: "indigo"
                                        }
                                      },
                                      [_c("v-icon", [_vm._v("star")])],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  { attrs: { xs12: "", sm3: "" } },
                                  [
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: {
                                          flat: "",
                                          icon: "",
                                          color: "green"
                                        }
                                      },
                                      [_c("v-icon", [_vm._v("cached")])],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  { attrs: { xs12: "", sm3: "" } },
                                  [
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: {
                                          flat: "",
                                          icon: "",
                                          color: "deep-orange"
                                        }
                                      },
                                      [_c("v-icon", [_vm._v("thumb_up")])],
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
                              "v-layout",
                              {
                                staticClass: "mt-5",
                                attrs: { row: "", wrap: "" }
                              },
                              [
                                _c("v-flex", { attrs: { xs12: "" } }, [
                                  _c("p", [_vm._v("Disabled")])
                                ]),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  { attrs: { xs12: "", sm3: "" } },
                                  [
                                    _c(
                                      "v-btn",
                                      { attrs: { icon: "", disabled: "" } },
                                      [_c("v-icon", [_vm._v("favorite")])],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  { attrs: { xs12: "", sm3: "" } },
                                  [
                                    _c(
                                      "v-btn",
                                      { attrs: { icon: "", disabled: "" } },
                                      [_c("v-icon", [_vm._v("star")])],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  { attrs: { xs12: "", sm3: "" } },
                                  [
                                    _c(
                                      "v-btn",
                                      { attrs: { icon: "", disabled: "" } },
                                      [_c("v-icon", [_vm._v("cached")])],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  { attrs: { xs12: "", sm3: "" } },
                                  [
                                    _c(
                                      "v-btn",
                                      { attrs: { icon: "", disabled: "" } },
                                      [_c("v-icon", [_vm._v("thumb_up")])],
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
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-widget",
                    { staticClass: "mt-3", attrs: { title: "Sizing button" } },
                    [
                      _c(
                        "div",
                        {
                          attrs: { slot: "widget-content" },
                          slot: "widget-content"
                        },
                        [
                          _c(
                            "v-container",
                            { staticClass: "pa-0", attrs: { fluid: "" } },
                            [
                              _c(
                                "v-layout",
                                {
                                  attrs: {
                                    row: "",
                                    wrap: "",
                                    "align-center": ""
                                  }
                                },
                                [
                                  _c(
                                    "v-flex",
                                    { attrs: { xs12: "", sm6: "" } },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "text-xs-center" },
                                        [
                                          _c(
                                            "div",
                                            [
                                              _c(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    small: "",
                                                    color: "primary",
                                                    dark: ""
                                                  }
                                                },
                                                [_vm._v("Small Button")]
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            [
                                              _c(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    color: "warning",
                                                    dark: ""
                                                  }
                                                },
                                                [_vm._v("Normal Button")]
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            [
                                              _c(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    color: "error",
                                                    dark: "",
                                                    large: ""
                                                  }
                                                },
                                                [_vm._v("Large Button")]
                                              )
                                            ],
                                            1
                                          )
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-flex",
                                    { attrs: { xs12: "", sm6: "" } },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "text-xs-center" },
                                        [
                                          _c(
                                            "div",
                                            [
                                              _c(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    color: "primary",
                                                    fab: "",
                                                    small: "",
                                                    dark: ""
                                                  }
                                                },
                                                [
                                                  _c("v-icon", [_vm._v("edit")])
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            [
                                              _c(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    color: "warning",
                                                    fab: "",
                                                    dark: ""
                                                  }
                                                },
                                                [
                                                  _c("v-icon", [
                                                    _vm._v("account_circle")
                                                  ])
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            [
                                              _c(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    color: "error",
                                                    fab: "",
                                                    large: "",
                                                    dark: ""
                                                  }
                                                },
                                                [
                                                  _c("v-icon", [
                                                    _vm._v("alarm")
                                                  ])
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          )
                                        ]
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
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-widget",
                    { staticClass: "mt-3", attrs: { title: "Block button" } },
                    [
                      _c(
                        "div",
                        {
                          attrs: { slot: "widget-content" },
                          slot: "widget-content"
                        },
                        [
                          _c(
                            "div",
                            [
                              _c(
                                "v-btn",
                                { attrs: { color: "success", block: "" } },
                                [_vm._v("Success")]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                { attrs: { color: "error", block: "" } },
                                [_vm._v("Error")]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                { attrs: { color: "warning", block: "" } },
                                [_vm._v("Warning")]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                { attrs: { color: "info", block: "" } },
                                [_vm._v("Info")]
                              )
                            ],
                            1
                          )
                        ]
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { xl12: "" } },
                [
                  _c("v-widget", { attrs: { title: "Toggle button" } }, [
                    _c(
                      "div",
                      {
                        attrs: { slot: "widget-content" },
                        slot: "widget-content"
                      },
                      [
                        _c(
                          "v-container",
                          { staticClass: "pa-0", attrs: { fluid: "" } },
                          [
                            _c(
                              "v-layout",
                              { attrs: { row: "", wrap: "" } },
                              [
                                _c(
                                  "v-flex",
                                  {
                                    staticClass: "py-2",
                                    attrs: { xs12: "", sm6: "" }
                                  },
                                  [
                                    _c("p", [_vm._v("Exclusive")]),
                                    _vm._v(" "),
                                    _c(
                                      "v-btn-toggle",
                                      {
                                        model: {
                                          value: _vm.toggle_exclusive,
                                          callback: function($$v) {
                                            _vm.toggle_exclusive = $$v
                                          },
                                          expression: "toggle_exclusive"
                                        }
                                      },
                                      [
                                        _c(
                                          "v-btn",
                                          { attrs: { flat: "" } },
                                          [
                                            _c("v-icon", [
                                              _vm._v("format_align_left")
                                            ])
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-btn",
                                          { attrs: { flat: "" } },
                                          [
                                            _c("v-icon", [
                                              _vm._v("format_align_center")
                                            ])
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-btn",
                                          { attrs: { flat: "" } },
                                          [
                                            _c("v-icon", [
                                              _vm._v("format_align_right")
                                            ])
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-btn",
                                          { attrs: { flat: "" } },
                                          [
                                            _c("v-icon", [
                                              _vm._v("format_align_justify")
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
                                  "v-flex",
                                  {
                                    staticClass: "py-2",
                                    attrs: { xs12: "", sm6: "" }
                                  },
                                  [
                                    _c("p", [_vm._v("Multiple")]),
                                    _vm._v(" "),
                                    _c(
                                      "v-btn-toggle",
                                      {
                                        attrs: { multiple: "" },
                                        model: {
                                          value: _vm.toggle_multiple,
                                          callback: function($$v) {
                                            _vm.toggle_multiple = $$v
                                          },
                                          expression: "toggle_multiple"
                                        }
                                      },
                                      [
                                        _c(
                                          "v-btn",
                                          { attrs: { flat: "" } },
                                          [
                                            _c("v-icon", [
                                              _vm._v("format_bold")
                                            ])
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-btn",
                                          { attrs: { flat: "" } },
                                          [
                                            _c("v-icon", [
                                              _vm._v("format_italic")
                                            ])
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-btn",
                                          { attrs: { flat: "" } },
                                          [
                                            _c("v-icon", [
                                              _vm._v("format_underlined")
                                            ])
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-btn",
                                          { attrs: { flat: "" } },
                                          [
                                            _c("v-icon", [
                                              _vm._v("format_color_fill")
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
                                  "v-flex",
                                  {
                                    staticClass: "py-2",
                                    attrs: { xs12: "", sm6: "" }
                                  },
                                  [
                                    _c("p", [_vm._v("No Options Selected")]),
                                    _vm._v(" "),
                                    _c(
                                      "v-btn-toggle",
                                      {
                                        model: {
                                          value: _vm.toggle_none,
                                          callback: function($$v) {
                                            _vm.toggle_none = $$v
                                          },
                                          expression: "toggle_none"
                                        }
                                      },
                                      [
                                        _c(
                                          "v-btn",
                                          { attrs: { flat: "" } },
                                          [
                                            _c("v-icon", [
                                              _vm._v("format_align_left")
                                            ])
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-btn",
                                          { attrs: { flat: "" } },
                                          [
                                            _c("v-icon", [
                                              _vm._v("format_align_center")
                                            ])
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-btn",
                                          { attrs: { flat: "" } },
                                          [
                                            _c("v-icon", [
                                              _vm._v("format_align_right")
                                            ])
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-btn",
                                          { attrs: { flat: "" } },
                                          [
                                            _c("v-icon", [
                                              _vm._v("format_align_justify")
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
                                  "v-flex",
                                  {
                                    staticClass: "py-2",
                                    attrs: { xs12: "", sm6: "" }
                                  },
                                  [
                                    _c("p", [_vm._v("Mandatory")]),
                                    _vm._v(" "),
                                    _c(
                                      "v-btn-toggle",
                                      {
                                        attrs: { mandatory: "" },
                                        model: {
                                          value: _vm.toggle_one,
                                          callback: function($$v) {
                                            _vm.toggle_one = $$v
                                          },
                                          expression: "toggle_one"
                                        }
                                      },
                                      [
                                        _c(
                                          "v-btn",
                                          { attrs: { flat: "" } },
                                          [
                                            _c("v-icon", [
                                              _vm._v("format_align_left")
                                            ])
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-btn",
                                          { attrs: { flat: "" } },
                                          [
                                            _c("v-icon", [
                                              _vm._v("format_align_center")
                                            ])
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-btn",
                                          { attrs: { flat: "" } },
                                          [
                                            _c("v-icon", [
                                              _vm._v("format_align_right")
                                            ])
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-btn",
                                          { attrs: { flat: "" } },
                                          [
                                            _c("v-icon", [
                                              _vm._v("format_align_justify")
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
                                  "v-flex",
                                  {
                                    staticClass: "py-2",
                                    attrs: { xs12: "", sm6: "" }
                                  },
                                  [
                                    _c("p", [_vm._v("Text Options")]),
                                    _vm._v(" "),
                                    _c(
                                      "v-btn-toggle",
                                      {
                                        model: {
                                          value: _vm.text,
                                          callback: function($$v) {
                                            _vm.text = $$v
                                          },
                                          expression: "text"
                                        }
                                      },
                                      [
                                        _c(
                                          "v-btn",
                                          {
                                            attrs: { flat: "", value: "left" }
                                          },
                                          [
                                            _vm._v(
                                              "\n                      Left\n                    "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-btn",
                                          {
                                            attrs: { flat: "", value: "center" }
                                          },
                                          [
                                            _vm._v(
                                              "\n                      Center\n                    "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-btn",
                                          {
                                            attrs: { flat: "", value: "right" }
                                          },
                                          [
                                            _vm._v(
                                              "\n                      Right\n                    "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-btn",
                                          {
                                            attrs: {
                                              flat: "",
                                              value: "justify"
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                      Justify\n                    "
                                            )
                                          ]
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
                                  {
                                    staticClass: "py-2",
                                    attrs: { xs12: "", sm6: "" }
                                  },
                                  [
                                    _c("p", [_vm._v("Text & Icon Options")]),
                                    _vm._v(" "),
                                    _c(
                                      "v-btn-toggle",
                                      {
                                        model: {
                                          value: _vm.icon,
                                          callback: function($$v) {
                                            _vm.icon = $$v
                                          },
                                          expression: "icon"
                                        }
                                      },
                                      [
                                        _c(
                                          "v-btn",
                                          {
                                            attrs: { flat: "", value: "left" }
                                          },
                                          [
                                            _c("span", [_vm._v("Left")]),
                                            _vm._v(" "),
                                            _c("v-icon", [
                                              _vm._v("format_align_left")
                                            ])
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-btn",
                                          {
                                            attrs: { flat: "", value: "center" }
                                          },
                                          [
                                            _c("span", [_vm._v("Center")]),
                                            _vm._v(" "),
                                            _c("v-icon", [
                                              _vm._v("format_align_center")
                                            ])
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-btn",
                                          {
                                            attrs: { flat: "", value: "right" }
                                          },
                                          [
                                            _c("span", [_vm._v("Right")]),
                                            _vm._v(" "),
                                            _c("v-icon", [
                                              _vm._v("format_align_right")
                                            ])
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-btn",
                                          {
                                            attrs: {
                                              flat: "",
                                              value: "justify"
                                            }
                                          },
                                          [
                                            _c("span", [_vm._v("Justify")]),
                                            _vm._v(" "),
                                            _c("v-icon", [
                                              _vm._v("format_align_justify")
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
    require("vue-hot-reload-api")      .rerender("data-v-31104e8c", module.exports)
  }
}

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(590)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(592)
/* template */
var __vue_template__ = __webpack_require__(593)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
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
Component.options.__file = "front_end/pages/ui/Button.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-31104e8c", Component.options)
  } else {
    hotAPI.reload("data-v-31104e8c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});