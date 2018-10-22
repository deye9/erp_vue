webpackJsonp([41],{

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(645)
/* template */
var __vue_template__ = __webpack_require__(646)
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
Component.options.__file = "front_end/pages/layout/BottomSheets.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5a20c7b1", Component.options)
  } else {
    hotAPI.reload("data-v-5a20c7b1", Component.options)
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

/***/ 645:
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VWidget: __WEBPACK_IMPORTED_MODULE_0__components_VWidget___default.a
  },
  data: function data() {
    return {
      sheet: false,
      tiles: [{ img: 'keep.png', title: 'Keep' }, { img: 'inbox.png', title: 'Inbox' }, { img: 'hangouts.png', title: 'Hangouts' }, { img: 'google.png', title: 'Google+' }]
    };
  },

  computed: {},
  methods: {}
});

/***/ }),

/***/ 646:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "page-bottom-sheets" } },
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
                  _c("v-widget", { attrs: { title: "Inset" } }, [
                    _c(
                      "div",
                      {
                        attrs: { slot: "widget-content" },
                        slot: "widget-content"
                      },
                      [
                        _c(
                          "v-bottom-sheet",
                          { attrs: { inset: "" } },
                          [
                            _c(
                              "v-btn",
                              {
                                attrs: {
                                  slot: "activator",
                                  color: "red",
                                  dark: ""
                                },
                                slot: "activator"
                              },
                              [_vm._v("Show player")]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-card",
                              { attrs: { tile: "" } },
                              [
                                _c("v-progress-linear", {
                                  staticClass: "my-0",
                                  attrs: { height: "3", value: 50 }
                                }),
                                _vm._v(" "),
                                _c(
                                  "v-list",
                                  [
                                    _c(
                                      "v-list-tile",
                                      [
                                        _c(
                                          "v-list-tile-content",
                                          [
                                            _c("v-list-tile-title", [
                                              _vm._v("The Walker")
                                            ]),
                                            _vm._v(" "),
                                            _c("v-list-tile-sub-title", [
                                              _vm._v("Fitz & The Trantrums")
                                            ])
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c("v-spacer"),
                                        _vm._v(" "),
                                        _c(
                                          "v-list-tile-action",
                                          [
                                            _c(
                                              "v-btn",
                                              { attrs: { icon: "" } },
                                              [
                                                _c("v-icon", [
                                                  _vm._v("fast_rewind")
                                                ])
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-list-tile-action",
                                          {
                                            class: {
                                              "mx-5":
                                                _vm.$vuetify.breakpoint.mdAndUp
                                            }
                                          },
                                          [
                                            _c(
                                              "v-btn",
                                              { attrs: { icon: "" } },
                                              [_c("v-icon", [_vm._v("pause")])],
                                              1
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-list-tile-action",
                                          {
                                            class: {
                                              "mr-3":
                                                _vm.$vuetify.breakpoint.mdAndUp
                                            }
                                          },
                                          [
                                            _c(
                                              "v-btn",
                                              { attrs: { icon: "" } },
                                              [
                                                _c("v-icon", [
                                                  _vm._v("fast_forward")
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
                  _c("v-widget", { attrs: { title: "Inset" } }, [
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
                              "v-bottom-sheet",
                              {
                                model: {
                                  value: _vm.sheet,
                                  callback: function($$v) {
                                    _vm.sheet = $$v
                                  },
                                  expression: "sheet"
                                }
                              },
                              [
                                _c(
                                  "v-btn",
                                  {
                                    attrs: {
                                      slot: "activator",
                                      color: "purple",
                                      dark: ""
                                    },
                                    slot: "activator"
                                  },
                                  [_vm._v("Click me")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list",
                                  [
                                    _c("v-subheader", [_vm._v("Open in")]),
                                    _vm._v(" "),
                                    _vm._l(_vm.tiles, function(tile) {
                                      return _c(
                                        "v-list-tile",
                                        {
                                          key: tile.title,
                                          on: {
                                            click: function($event) {
                                              _vm.sheet = false
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "v-list-tile-avatar",
                                            [
                                              _c(
                                                "v-avatar",
                                                {
                                                  attrs: {
                                                    size: "32px",
                                                    tile: ""
                                                  }
                                                },
                                                [
                                                  _c("img", {
                                                    attrs: {
                                                      src:
                                                        "/static/icon/" +
                                                        tile.img,
                                                      alt: tile.title
                                                    }
                                                  })
                                                ]
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c("v-list-tile-title", [
                                            _vm._v(_vm._s(tile.title))
                                          ])
                                        ],
                                        1
                                      )
                                    })
                                  ],
                                  2
                                )
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
    require("vue-hot-reload-api")      .rerender("data-v-5a20c7b1", module.exports)
  }
}

/***/ })

});