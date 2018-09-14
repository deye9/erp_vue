webpackJsonp([38],{

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

/***/ 588:
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VWidget: __WEBPACK_IMPORTED_MODULE_0__components_VWidget___default.a
  },
  data: function data() {
    return {
      messages: [{
        avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
        name: 'John Leider',
        title: 'Welcome to Vuetify.js!',
        excerpt: 'Thank you for joining our community...'
      }, {
        color: 'red',
        icon: 'people',
        name: 'Social',
        new: 1,
        total: 3,
        title: 'Twitter'
      }, {
        color: 'teal',
        icon: 'local_offer',
        name: 'Promos',
        new: 2,
        total: 4,
        title: 'Shop your way',
        exceprt: 'New deals available, Join Today'
      }],
      slider: 56,
      tile: false,
      lorem: 'Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.'
    };
  },
  computed: {
    avatarSize: function avatarSize() {
      return this.slider + 'px';
    }
  },
  methods: {}
});

/***/ }),

/***/ 589:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "page-alerts" } },
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
                  _c("v-widget", { attrs: { title: "Basic Usage" } }, [
                    _c(
                      "div",
                      {
                        attrs: { slot: "widget-content" },
                        slot: "widget-content"
                      },
                      [
                        _c(
                          "v-layout",
                          {
                            staticClass: "ma-0",
                            attrs: {
                              wrap: "",
                              "justify-space-around": "",
                              "align-center": ""
                            }
                          },
                          [
                            _c(
                              "v-avatar",
                              { staticClass: "indigo" },
                              [
                                _c("v-icon", { attrs: { dark: "" } }, [
                                  _vm._v("account_circle")
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("v-avatar", [
                              _c("img", {
                                attrs: {
                                  src: "/static/avatar/me.jpeg",
                                  alt: "John"
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c(
                              "v-badge",
                              { attrs: { overlap: "" } },
                              [
                                _c(
                                  "span",
                                  { attrs: { slot: "badge" }, slot: "badge" },
                                  [_vm._v("3")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-avatar",
                                  { staticClass: "purple red--after" },
                                  [
                                    _c("v-icon", { attrs: { dark: "" } }, [
                                      _vm._v("notifications")
                                    ])
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("v-avatar", { staticClass: "teal" }, [
                              _c(
                                "span",
                                { staticClass: "white--text headline" },
                                [_vm._v("C")]
                              )
                            ]),
                            _vm._v(" "),
                            _c("v-avatar", { staticClass: "red" }, [
                              _c(
                                "span",
                                { staticClass: "white--text headline" },
                                [_vm._v("J")]
                              )
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
                  _c("v-widget", { attrs: { title: "Advance usage" } }, [
                    _c(
                      "div",
                      {
                        attrs: { slot: "widget-content" },
                        slot: "widget-content"
                      },
                      [
                        _c(
                          "v-layout",
                          {
                            staticClass: "ma-0",
                            attrs: { "justify-center": "", column: "" }
                          },
                          [
                            _c("v-subheader", [_vm._v("Today")]),
                            _vm._v(" "),
                            _c(
                              "v-expansion-panel",
                              { attrs: { popout: "" } },
                              _vm._l(_vm.messages, function(message, i) {
                                return _c(
                                  "v-expansion-panel-content",
                                  { key: i, attrs: { "hide-actions": "" } },
                                  [
                                    _c(
                                      "v-layout",
                                      {
                                        attrs: {
                                          slot: "header",
                                          "align-center": "",
                                          row: "",
                                          spacer: ""
                                        },
                                        slot: "header"
                                      },
                                      [
                                        _c(
                                          "v-flex",
                                          {
                                            attrs: { xs4: "", sm2: "", md1: "" }
                                          },
                                          [
                                            _c(
                                              "v-avatar",
                                              {
                                                attrs: {
                                                  slot: "activator",
                                                  size: "36px"
                                                },
                                                slot: "activator"
                                              },
                                              [
                                                message.avatar
                                                  ? _c("img", {
                                                      attrs: {
                                                        src:
                                                          "/static/avatar/me.jpeg",
                                                        alt: ""
                                                      }
                                                    })
                                                  : _c(
                                                      "v-icon",
                                                      {
                                                        attrs: {
                                                          color: message.color
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(message.icon)
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
                                            attrs: {
                                              sm5: "",
                                              md3: "",
                                              "hidden-xs-only": ""
                                            }
                                          },
                                          [
                                            _c("strong", {
                                              domProps: {
                                                innerHTML: _vm._s(message.name)
                                              }
                                            }),
                                            _vm._v(" "),
                                            message.total
                                              ? _c(
                                                  "span",
                                                  { staticClass: "grey--text" },
                                                  [
                                                    _vm._v(
                                                      " (" +
                                                        _vm._s(message.total) +
                                                        ")"
                                                    )
                                                  ]
                                                )
                                              : _vm._e()
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-flex",
                                          {
                                            attrs: {
                                              "no-wrap": "",
                                              xs5: "",
                                              sm3: ""
                                            }
                                          },
                                          [
                                            message.new
                                              ? _c(
                                                  "v-chip",
                                                  {
                                                    staticClass: "ml-0",
                                                    attrs: {
                                                      label: "",
                                                      small: "",
                                                      color:
                                                        message.color +
                                                        " lighten-4"
                                                    }
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(message.new) +
                                                        " new"
                                                    )
                                                  ]
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _c("strong", {
                                              domProps: {
                                                innerHTML: _vm._s(message.title)
                                              }
                                            })
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        message.excerpt
                                          ? _c(
                                              "v-flex",
                                              {
                                                staticClass: "grey--text",
                                                attrs: {
                                                  ellipsis: "",
                                                  "hidden-sm-and-down": ""
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  "\n                      —\n                      " +
                                                    _vm._s(message.excerpt) +
                                                    "\n                    "
                                                )
                                              ]
                                            )
                                          : _vm._e()
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-card",
                                      [
                                        _c("v-divider"),
                                        _vm._v(" "),
                                        _c("v-card-text", {
                                          domProps: {
                                            textContent: _vm._s(_vm.lorem)
                                          }
                                        })
                                      ],
                                      1
                                    )
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
                  _c("v-widget", { attrs: { title: "Resizable" } }, [
                    _c(
                      "div",
                      {
                        attrs: { slot: "widget-content" },
                        slot: "widget-content"
                      },
                      [
                        _c(
                          "v-container",
                          { attrs: { "grid-list-md": "" } },
                          [
                            _c(
                              "v-layout",
                              { attrs: { row: "", wrap: "" } },
                              [
                                _c(
                                  "v-flex",
                                  { attrs: { xs12: "", sm6: "", md4: "" } },
                                  [
                                    _c("v-slider", {
                                      attrs: {
                                        min: 16,
                                        max: 256,
                                        label: "Size",
                                        "thumb-label": ""
                                      },
                                      model: {
                                        value: _vm.slider,
                                        callback: function($$v) {
                                          _vm.slider = $$v
                                        },
                                        expression: "slider"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("v-switch", {
                                      attrs: { label: "Tile" },
                                      model: {
                                        value: _vm.tile,
                                        callback: function($$v) {
                                          _vm.tile = $$v
                                        },
                                        expression: "tile"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  {
                                    attrs: {
                                      xs12: "",
                                      sm6: "",
                                      md8: "",
                                      "text-xs-center": "",
                                      layout: "",
                                      "align-center": "",
                                      "justify-center": ""
                                    }
                                  },
                                  [
                                    _c(
                                      "v-avatar",
                                      {
                                        staticClass: "grey lighten-4",
                                        attrs: {
                                          tile: _vm.tile,
                                          size: _vm.avatarSize
                                        }
                                      },
                                      [
                                        _c("img", {
                                          attrs: {
                                            src: "/static/avatar/me.jpeg",
                                            alt: "avatar"
                                          }
                                        })
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
    require("vue-hot-reload-api")      .rerender("data-v-8bddf13e", module.exports)
  }
}

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(588)
/* template */
var __vue_template__ = __webpack_require__(589)
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
Component.options.__file = "front_end/pages/ui/Avatar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8bddf13e", Component.options)
  } else {
    hotAPI.reload("data-v-8bddf13e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});