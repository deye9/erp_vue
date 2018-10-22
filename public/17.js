webpackJsonp([17],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(601)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(603)
/* template */
var __vue_template__ = __webpack_require__(604)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3f3eeaea"
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
Component.options.__file = "front_end/pages/ui/Cards.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3f3eeaea", Component.options)
  } else {
    hotAPI.reload("data-v-3f3eeaea", Component.options)
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

/***/ 601:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(602);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("b414dd5c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3f3eeaea\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/stylus-loader/index.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Cards.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3f3eeaea\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/stylus-loader/index.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Cards.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 602:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.mt-45[data-v-3f3eeaea] {\n  margin-top: -45px;\n}\n.mt-56[data-v-3f3eeaea] {\n  margin-top: -56px;\n}\n", ""]);

// exports


/***/ }),

/***/ 603:
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VWidget: __WEBPACK_IMPORTED_MODULE_0__components_VWidget___default.a
  },
  data: function data() {
    return {
      show: true,
      cardText: 'Hey there, I am a very simple card. I am good at containing small bits of information. I am quite convenient because I require little markup to use effectively.'
    };
  },

  computed: {},
  methods: {}
});

/***/ }),

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "pageCard" } },
    [
      _c(
        "v-container",
        { attrs: { "grid-list-xl": "", fluid: "" } },
        [
          _c(
            "v-layout",
            { attrs: { row: "", wrap: "" } },
            [
              _c("v-flex", { attrs: { sm12: "" } }, [
                _c("h3", [_vm._v("Simple")])
              ]),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { lg4: "", sm12: "" } },
                [
                  _c(
                    "v-card",
                    { attrs: { color: "purple", dark: "" } },
                    [
                      _c("v-card-title", { staticClass: "pb-0" }, [
                        _c("h4", [
                          _vm._v("Basic card with `purple` background")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("v-card-text", [
                        _vm._v(
                          "\n            " +
                            _vm._s(_vm.cardText) +
                            "\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card-actions",
                        [
                          _c("v-btn", { attrs: { flat: "", small: "" } }, [
                            _vm._v("Link")
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
                { attrs: { lg4: "", sm12: "" } },
                [
                  _c(
                    "v-card",
                    { attrs: { color: "teal", dark: "" } },
                    [
                      _c("v-card-title", { staticClass: "pb-0" }, [
                        _c("h4", [_vm._v("Basic card with `teal` background")])
                      ]),
                      _vm._v(" "),
                      _c("v-card-text", [
                        _vm._v(
                          "\n            " +
                            _vm._s(_vm.cardText) +
                            "\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card-actions",
                        [
                          _c("v-btn", { attrs: { flat: "", small: "" } }, [
                            _vm._v("Link")
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
                { attrs: { lg4: "", sm12: "" } },
                [
                  _c(
                    "v-card",
                    [
                      _c("v-card-title", { staticClass: "pb-0" }, [
                        _c("h4", [_vm._v("Basic")])
                      ]),
                      _vm._v(" "),
                      _c("v-card-text", [
                        _vm._v(
                          "\n            " +
                            _vm._s(_vm.cardText) +
                            "\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card-actions",
                        [
                          _c("v-btn", { attrs: { flat: "", small: "" } }, [
                            _vm._v("Link")
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
            "v-layout",
            { attrs: { row: "", wrap: "" } },
            [
              _c("v-flex", { attrs: { sm12: "" } }, [
                _c("h3", [_vm._v("Image Card")])
              ]),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { lg4: "", sm12: "" } },
                [
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-img",
                        { attrs: { src: "/static/bg/8.jpg", height: "250" } },
                        [
                          _c("h2", { staticClass: "white--text pa-3" }, [
                            _vm._v(
                              "\n              Card with image\n            "
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("v-card-text", [
                        _c("div", [
                          _vm._v(
                            "\n              " +
                              _vm._s(_vm.cardText) +
                              "\n            "
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("v-divider"),
                      _vm._v(" "),
                      _c(
                        "v-card-actions",
                        [
                          _c("v-btn", { attrs: { flat: "", small: "" } }, [
                            _vm._v("Link")
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
                { attrs: { lg4: "", sm12: "" } },
                [
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-img",
                        {
                          attrs: {
                            src: "/static/nature/n3.jpeg",
                            height: "250"
                          }
                        },
                        [
                          _c("h2", { staticClass: "white--text pa-3" }, [
                            _vm._v(
                              "\n              Card with image\n            "
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        [
                          _c(
                            "v-avatar",
                            {
                              staticClass: "right mt-56",
                              attrs: { size: "64px" }
                            },
                            [
                              _c("img", {
                                attrs: {
                                  src: "/static/avatar/man_2.jpg",
                                  alt: ""
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", [
                            _vm._v(
                              "\n             " +
                                _vm._s(_vm.cardText) +
                                "\n            "
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-divider"),
                      _vm._v(" "),
                      _c(
                        "v-card-actions",
                        [
                          _c("v-btn", { attrs: { flat: "", small: "" } }, [
                            _vm._v("Link")
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
                { attrs: { lg4: "", sm12: "" } },
                [
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-img",
                        {
                          attrs: {
                            src: "/static/nature/n4.jpeg",
                            height: "250"
                          }
                        },
                        [
                          _c("h2", { staticClass: "white--text pa-3" }, [
                            _vm._v(
                              "\n              Card with image\n            "
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        [
                          _c(
                            "v-btn",
                            {
                              staticClass: "right mt-45",
                              attrs: {
                                icon: "",
                                fab: "",
                                color: "red",
                                dark: ""
                              }
                            },
                            [_c("v-icon", [_vm._v("favorite")])],
                            1
                          ),
                          _vm._v(" "),
                          _c("div", [
                            _vm._v(
                              "\n              " +
                                _vm._s(_vm.cardText) +
                                "\n            "
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-divider"),
                      _vm._v(" "),
                      _c(
                        "v-card-actions",
                        [
                          _c("v-btn", { attrs: { flat: "", small: "" } }, [
                            _vm._v("Link")
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
            "v-layout",
            { attrs: { row: "", wrap: "" } },
            [
              _c("v-flex", { attrs: { sm12: "" } }, [
                _c("h3", [_vm._v("Carousel Cards")])
              ]),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { lg4: "", sm12: "" } },
                [
                  _c(
                    "v-carousel",
                    {
                      staticClass: "fill-height",
                      attrs: { "hide-controls": "", "hide-delimiters": "" }
                    },
                    [
                      _c(
                        "v-carousel-item",
                        [
                          _c(
                            "v-card",
                            { attrs: { color: "indigo", dark: "" } },
                            [
                              _c("v-card-title", { staticClass: "pb-0" }, [
                                _c("h3", [
                                  _vm._v("Basic card with `purple` background")
                                ])
                              ]),
                              _vm._v(" "),
                              _c("v-card-text", [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(_vm.cardText) +
                                    "\n              "
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-card-actions",
                                [
                                  _c(
                                    "v-btn",
                                    { attrs: { flat: "", small: "" } },
                                    [_vm._v("Link")]
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
                        "v-carousel-item",
                        [
                          _c(
                            "v-card",
                            { attrs: { color: "teal", dark: "" } },
                            [
                              _c("v-card-title", { staticClass: "pb-0" }, [
                                _c("h3", [
                                  _vm._v("Basic card with `purple` background")
                                ])
                              ]),
                              _vm._v(" "),
                              _c("v-card-text", [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(_vm.cardText) +
                                    "\n              "
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-card-actions",
                                [
                                  _c(
                                    "v-btn",
                                    { attrs: { flat: "", small: "" } },
                                    [_vm._v("Link")]
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
                        "v-carousel-item",
                        [
                          _c(
                            "v-card",
                            { attrs: { color: "purple", dark: "" } },
                            [
                              _c("v-card-title", { staticClass: "pb-0" }, [
                                _c("h3", [
                                  _vm._v("Basic card with `purple` background")
                                ])
                              ]),
                              _vm._v(" "),
                              _c("v-card-text", [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(_vm.cardText) +
                                    "\n              "
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-card-actions",
                                [
                                  _c(
                                    "v-btn",
                                    { attrs: { flat: "", small: "" } },
                                    [_vm._v("Link")]
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
    require("vue-hot-reload-api")      .rerender("data-v-3f3eeaea", module.exports)
  }
}

/***/ })

});