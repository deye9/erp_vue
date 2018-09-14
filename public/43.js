webpackJsonp([43],{

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(650)
/* template */
var __vue_template__ = __webpack_require__(651)
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
Component.options.__file = "front_end/pages/layout/Footers.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3cfc18f6", Component.options)
  } else {
    hotAPI.reload("data-v-3cfc18f6", Component.options)
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

/***/ 650:
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VWidget: __WEBPACK_IMPORTED_MODULE_0__components_VWidget___default.a
  },
  data: function data() {
    return {
      icons: ['fa-facebook', 'fa-twitter', 'fa-google-plus', 'fa-linkedin', 'fa-instagram'],
      rows: [{
        title: 'Company Name',
        children: ['Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit']
      }, {
        title: 'Products',
        children: ['MDBootstrap', 'MDWordPress', 'BrandFlow', 'Bootstrap Angular']
      }, {
        title: 'Useful Links',
        children: ['Your account', 'Become an Affiliate', 'Shipping Rates', 'Helper']
      }]
    };
  },

  computed: {},
  methods: {}
});

/***/ }),

/***/ 651:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "page-footers" } },
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
                { attrs: { lg12: "" } },
                [
                  _c("v-widget", { attrs: { title: "Default" } }, [
                    _c(
                      "div",
                      {
                        attrs: { slot: "widget-content" },
                        slot: "widget-content"
                      },
                      [
                        _c(
                          "v-footer",
                          { staticClass: "pa-3" },
                          [
                            _c("v-spacer"),
                            _vm._v(" "),
                            _c("div", [
                              _vm._v("© " + _vm._s(new Date().getFullYear()))
                            ])
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
                { attrs: { lg12: "" } },
                [
                  _c("v-widget", { attrs: { title: "With icon" } }, [
                    _c(
                      "div",
                      {
                        attrs: { slot: "widget-content" },
                        slot: "widget-content"
                      },
                      [
                        _c(
                          "v-footer",
                          { attrs: { height: "auto" } },
                          [
                            _c(
                              "v-card",
                              {
                                staticClass:
                                  "indigo lighten-1 white--text text-xs-center",
                                attrs: { flat: "", tile: "" }
                              },
                              [
                                _c(
                                  "v-card-text",
                                  _vm._l(_vm.icons, function(icon) {
                                    return _c(
                                      "v-btn",
                                      {
                                        key: icon,
                                        staticClass: "mx-3 white--text",
                                        attrs: { icon: "" }
                                      },
                                      [
                                        _c(
                                          "v-icon",
                                          { attrs: { size: "24px" } },
                                          [_vm._v(_vm._s(icon))]
                                        )
                                      ],
                                      1
                                    )
                                  })
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-card-text",
                                  { staticClass: "white--text pt-0" },
                                  [
                                    _vm._v(
                                      "\n                    Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n                  "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-card-text",
                                  { staticClass: "white--text" },
                                  [
                                    _vm._v("\n                    ©2018 — "),
                                    _c("strong", [_vm._v("Vuetify")])
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
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { lg12: "" } },
                [
                  _c("v-widget", { attrs: { title: "Complex layout" } }, [
                    _c(
                      "div",
                      {
                        attrs: { slot: "widget-content" },
                        slot: "widget-content"
                      },
                      [
                        _c(
                          "v-footer",
                          { attrs: { height: "auto" } },
                          [
                            _c(
                              "v-card",
                              { attrs: { flat: "", tile: "" } },
                              [
                                _c(
                                  "v-card-title",
                                  { staticClass: "teal white--text" },
                                  [
                                    _c(
                                      "strong",
                                      { staticClass: "subheading" },
                                      [
                                        _vm._v(
                                          "Get connected with us on social networks!"
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("v-spacer"),
                                    _vm._v(" "),
                                    _vm._l(_vm.icons, function(icon) {
                                      return _c(
                                        "v-btn",
                                        {
                                          key: icon,
                                          staticClass: "mx-3",
                                          attrs: { icon: "", dark: "" }
                                        },
                                        [
                                          _c(
                                            "v-icon",
                                            { attrs: { size: "24px" } },
                                            [_vm._v(_vm._s(icon))]
                                          )
                                        ],
                                        1
                                      )
                                    })
                                  ],
                                  2
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-card-text",
                                  { staticClass: "grey lighten-3" },
                                  [
                                    _c(
                                      "v-layout",
                                      [
                                        _vm._l(_vm.rows, function(col, i) {
                                          return _c(
                                            "v-flex",
                                            { key: i, attrs: { xs3: "" } },
                                            [
                                              _c("span", {
                                                staticClass: "body-2",
                                                domProps: {
                                                  textContent: _vm._s(
                                                    col.title.toUpperCase()
                                                  )
                                                }
                                              }),
                                              _vm._v(" "),
                                              _vm._l(col.children, function(
                                                child,
                                                i
                                              ) {
                                                return _c("div", {
                                                  key: i,
                                                  domProps: {
                                                    textContent: _vm._s(child)
                                                  }
                                                })
                                              })
                                            ],
                                            2
                                          )
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "v-flex",
                                          {
                                            attrs: {
                                              xs3: "",
                                              layout: "",
                                              column: ""
                                            }
                                          },
                                          [
                                            _c(
                                              "span",
                                              { staticClass: "body-2" },
                                              [_vm._v("CONTACT")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              [
                                                _c(
                                                  "v-icon",
                                                  {
                                                    staticClass: "mr-3",
                                                    attrs: { size: "18px" }
                                                  },
                                                  [_vm._v("fa-home")]
                                                ),
                                                _vm._v(
                                                  "\n                        New York, NY 10012, US\n                      "
                                                )
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              [
                                                _c(
                                                  "v-icon",
                                                  {
                                                    staticClass: "mr-3",
                                                    attrs: { size: "18px" }
                                                  },
                                                  [_vm._v("fa-envelope")]
                                                ),
                                                _vm._v(
                                                  "\n                        info@example.com\n                      "
                                                )
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              [
                                                _c(
                                                  "v-icon",
                                                  {
                                                    staticClass: "mr-3",
                                                    attrs: { size: "18px" }
                                                  },
                                                  [_vm._v("fa-phone")]
                                                ),
                                                _vm._v(
                                                  "\n                        + 01 234 567 88\n                      "
                                                )
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              [
                                                _c(
                                                  "v-icon",
                                                  {
                                                    staticClass: "mr-3",
                                                    attrs: { size: "18px" }
                                                  },
                                                  [_vm._v("fa-print")]
                                                ),
                                                _vm._v(
                                                  "\n                        + 01 234 567 89\n                      "
                                                )
                                              ],
                                              1
                                            )
                                          ]
                                        )
                                      ],
                                      2
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-card-actions",
                                  {
                                    staticClass: "grey lighten-2 justify-center"
                                  },
                                  [
                                    _vm._v("\n                  ©2018 — "),
                                    _c("strong", [_vm._v("Vuetify")])
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
    require("vue-hot-reload-api")      .rerender("data-v-3cfc18f6", module.exports)
  }
}

/***/ })

});