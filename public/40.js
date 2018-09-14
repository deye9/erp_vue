webpackJsonp([40],{

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(668)
/* template */
var __vue_template__ = __webpack_require__(669)
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
Component.options.__file = "front_end/pages/layout/Tabs.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8a2ed6a0", Component.options)
  } else {
    hotAPI.reload("data-v-8a2ed6a0", Component.options)
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

/***/ 668:
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VWidget: __WEBPACK_IMPORTED_MODULE_0__components_VWidget___default.a
  },
  data: function data() {
    return {
      items: ['Item One', 'Item Seventeen', 'Item Five'],
      tab: null,
      tabs: null,
      more: ['News', 'Maps', 'Books', 'Flights', 'Apps'],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
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

/***/ 669:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "pageTab" } },
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
                  _c(
                    "v-widget",
                    {
                      attrs: {
                        title: "Basic Usage",
                        "content-bg": "grey lighten-3"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          attrs: { slot: "widget-content" },
                          slot: "widget-content"
                        },
                        [
                          _c("v-subheader", [_vm._v("Left Align")]),
                          _vm._v(" "),
                          _c(
                            "v-tabs",
                            _vm._l(3, function(n) {
                              return _c("v-tab", { key: n }, [
                                _vm._v(
                                  "\n                Item " +
                                    _vm._s(n) +
                                    "\n              "
                                )
                              ])
                            })
                          ),
                          _vm._v(" "),
                          _c("v-subheader", [_vm._v("Right Align")]),
                          _vm._v(" "),
                          _c(
                            "v-tabs",
                            { attrs: { right: "" } },
                            _vm._l(3, function(n) {
                              return _c("v-tab", { key: n }, [
                                _vm._v(
                                  "\n                Item " +
                                    _vm._s(n) +
                                    "\n              "
                                )
                              ])
                            })
                          ),
                          _vm._v(" "),
                          _c("v-subheader", [_vm._v("Center Align")]),
                          _vm._v(" "),
                          _c(
                            "v-tabs",
                            { attrs: { centered: "" } },
                            _vm._l(3, function(n) {
                              return _c("v-tab", { key: n }, [
                                _vm._v(
                                  "\n                Item " +
                                    _vm._s(n) +
                                    "\n              "
                                )
                              ])
                            })
                          ),
                          _vm._v(" "),
                          _c("v-subheader", [_vm._v("With menu")]),
                          _vm._v(" "),
                          _c(
                            "v-tabs",
                            { attrs: { centered: "" } },
                            [
                              _vm._l(3, function(n) {
                                return _c("v-tab", { key: n }, [
                                  _vm._v(
                                    "\n                Item " +
                                      _vm._s(n) +
                                      "\n              "
                                  )
                                ])
                              }),
                              _vm._v(" "),
                              _vm.more.length
                                ? _c(
                                    "v-menu",
                                    {
                                      staticClass: "tabs__div",
                                      attrs: { left: "", bottom: "" }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "tabs__item",
                                          attrs: { slot: "activator" },
                                          slot: "activator"
                                        },
                                        [
                                          _vm._v(
                                            "\n                  more\n                  "
                                          ),
                                          _c("v-icon", [
                                            _vm._v("arrow_drop_down")
                                          ])
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-list",
                                        { staticClass: "grey lighten-3" },
                                        _vm._l(_vm.more, function(item) {
                                          return _c(
                                            "v-list-tile",
                                            {
                                              key: item,
                                              on: { click: _vm.handleClick }
                                            },
                                            [
                                              _vm._v(
                                                "\n                    " +
                                                  _vm._s(item) +
                                                  "\n                  "
                                              )
                                            ]
                                          )
                                        })
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e()
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c("v-subheader", [_vm._v("Icon and text")]),
                          _vm._v(" "),
                          _c(
                            "v-tabs",
                            {
                              attrs: {
                                "icons-and-text": "",
                                centered: "",
                                dark: "",
                                color: "cyan"
                              }
                            },
                            [
                              _c("v-tabs-slider", {
                                attrs: { color: "yellow" }
                              }),
                              _vm._v(" "),
                              _c(
                                "v-tab",
                                { attrs: { href: "#tab-1" } },
                                [
                                  _vm._v(
                                    "\n                Recents\n                "
                                  ),
                                  _c("v-icon", [_vm._v("phone")])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-tab",
                                { attrs: { href: "#tab-2" } },
                                [
                                  _vm._v(
                                    "\n                Favorites\n                "
                                  ),
                                  _c("v-icon", [_vm._v("favorite")])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-tab",
                                { attrs: { href: "#tab-3" } },
                                [
                                  _vm._v(
                                    "\n                Nearby\n                "
                                  ),
                                  _c("v-icon", [_vm._v("account_box")])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _vm._l(3, function(i) {
                                return _c(
                                  "v-tab-item",
                                  { key: i, attrs: { id: "tab-" + i } },
                                  [
                                    _c(
                                      "v-card",
                                      { attrs: { flat: "" } },
                                      [
                                        _c("v-card-text", [
                                          _vm._v(_vm._s(_vm.text))
                                        ])
                                      ],
                                      1
                                    )
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
                  _c(
                    "v-widget",
                    {
                      attrs: {
                        title: "Complex",
                        "content-bg": "grey lighten-3"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          attrs: { slot: "widget-content" },
                          slot: "widget-content"
                        },
                        [
                          _c("v-subheader", [_vm._v("Mixed with toolbar")]),
                          _vm._v(" "),
                          _c(
                            "v-toolbar",
                            { attrs: { color: "cyan", dark: "", tabs: "" } },
                            [
                              _c("v-toolbar-side-icon"),
                              _vm._v(" "),
                              _c("v-toolbar-title", [_vm._v("Page title")]),
                              _vm._v(" "),
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                { attrs: { icon: "" } },
                                [_c("v-icon", [_vm._v("search")])],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                { attrs: { icon: "" } },
                                [_c("v-icon", [_vm._v("more_vert")])],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-tabs",
                                {
                                  attrs: {
                                    slot: "extension",
                                    color: "cyan",
                                    grow: ""
                                  },
                                  slot: "extension",
                                  model: {
                                    value: _vm.tab,
                                    callback: function($$v) {
                                      _vm.tab = $$v
                                    },
                                    expression: "tab"
                                  }
                                },
                                [
                                  _c("v-tabs-slider", {
                                    attrs: { color: "yellow" }
                                  }),
                                  _vm._v(" "),
                                  _vm._l(_vm.items, function(item) {
                                    return _c("v-tab", { key: item }, [
                                      _vm._v(
                                        "\n                  " +
                                          _vm._s(item) +
                                          "\n                "
                                      )
                                    ])
                                  })
                                ],
                                2
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-tabs-items",
                            {
                              model: {
                                value: _vm.tab,
                                callback: function($$v) {
                                  _vm.tab = $$v
                                },
                                expression: "tab"
                              }
                            },
                            _vm._l(_vm.items, function(item) {
                              return _c(
                                "v-tab-item",
                                { key: item },
                                [
                                  _c(
                                    "v-card",
                                    { attrs: { flat: "" } },
                                    [
                                      _c("v-card-text", [
                                        _vm._v(_vm._s(_vm.text))
                                      ])
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            })
                          ),
                          _vm._v(" "),
                          _c("v-subheader", [_vm._v("Mixed with toolbar2")]),
                          _vm._v(" "),
                          _c(
                            "v-toolbar",
                            { attrs: { tabs: "", color: "purple", dark: "" } },
                            [
                              _c("v-toolbar-side-icon"),
                              _vm._v(" "),
                              _c("v-toolbar-title", [_vm._v("Page title")]),
                              _vm._v(" "),
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                { attrs: { icon: "" } },
                                [_c("v-icon", [_vm._v("search")])],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                { attrs: { icon: "" } },
                                [_c("v-icon", [_vm._v("more_vert")])],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-tabs",
                                {
                                  attrs: {
                                    slot: "extension",
                                    "fixed-tabs": "",
                                    color: "transparent"
                                  },
                                  slot: "extension",
                                  model: {
                                    value: _vm.tabs,
                                    callback: function($$v) {
                                      _vm.tabs = $$v
                                    },
                                    expression: "tabs"
                                  }
                                },
                                [
                                  _c("v-tabs-slider"),
                                  _vm._v(" "),
                                  _c(
                                    "v-tab",
                                    {
                                      staticClass: "primary--text",
                                      attrs: { href: "#mobile-tabs-5-1" }
                                    },
                                    [_c("v-icon", [_vm._v("phone")])],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-tab",
                                    {
                                      staticClass: "primary--text",
                                      attrs: { href: "#mobile-tabs-5-2" }
                                    },
                                    [_c("v-icon", [_vm._v("favorite")])],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-tab",
                                    {
                                      staticClass: "primary--text",
                                      attrs: { href: "#mobile-tabs-5-3" }
                                    },
                                    [_c("v-icon", [_vm._v("account_box")])],
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
                            "v-tabs-items",
                            {
                              staticClass: "white elevation-1",
                              model: {
                                value: _vm.tabs,
                                callback: function($$v) {
                                  _vm.tabs = $$v
                                },
                                expression: "tabs"
                              }
                            },
                            _vm._l(3, function(i) {
                              return _c(
                                "v-tab-item",
                                { key: i, attrs: { id: "mobile-tabs-5-" + i } },
                                [
                                  _c(
                                    "v-card",
                                    [
                                      _c("v-card-text", [
                                        _vm._v(_vm._s(_vm.text))
                                      ])
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
    require("vue-hot-reload-api")      .rerender("data-v-8a2ed6a0", module.exports)
  }
}

/***/ })

});