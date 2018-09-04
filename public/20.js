webpackJsonp([20],{

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(629)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(631)
/* template */
var __vue_template__ = __webpack_require__(632)
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
Component.options.__file = "front_end/pages/layout/NavigationDrawers.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b0c765a8", Component.options)
  } else {
    hotAPI.reload("data-v-b0c765a8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

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

/***/ 629:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(630);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("22113d84", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b0c765a8\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/stylus-loader/index.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./NavigationDrawers.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b0c765a8\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/stylus-loader/index.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./NavigationDrawers.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 630:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.application--example {\n  position: relative;\n  -webkit-transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n  overflow: hidden;\n  z-index: 0;\n}\n.application--example > .container {\n  min-height: 350px;\n}\n", ""]);

// exports


/***/ }),

/***/ 631:
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VWidget: __WEBPACK_IMPORTED_MODULE_0__components_VWidget___default.a
  },
  data: function data() {
    return {
      drawer: true,
      miniDrawer: false,
      items: [{ title: 'Home', icon: 'dashboard' }, { title: 'About', icon: 'question_answer' }],
      right: null
    };
  },

  computed: {},
  methods: {}
});

/***/ }),

/***/ 632:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "page-badges" } },
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
                        _c(
                          "div",
                          { staticClass: "application--example" },
                          [
                            _c(
                              "v-container",
                              { staticClass: "application--example-container" },
                              [
                                _c(
                                  "v-layout",
                                  { attrs: { "justify-center": "" } },
                                  [
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: { dark: "", color: "pink" },
                                        on: {
                                          click: function($event) {
                                            $event.stopPropagation()
                                            _vm.drawer = !_vm.drawer
                                          }
                                        }
                                      },
                                      [_vm._v("Toggle")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: { dark: "", color: "pink" },
                                        on: {
                                          click: function($event) {
                                            $event.stopPropagation()
                                            _vm.miniDrawer = !_vm.miniDrawer
                                          }
                                        }
                                      },
                                      [_vm._v("Mini Drawer")]
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-navigation-drawer",
                              {
                                attrs: {
                                  absolute: "",
                                  "mini-variant": _vm.miniDrawer
                                },
                                model: {
                                  value: _vm.drawer,
                                  callback: function($$v) {
                                    _vm.drawer = $$v
                                  },
                                  expression: "drawer"
                                }
                              },
                              [
                                _c(
                                  "v-toolbar",
                                  {
                                    staticClass: "transparent",
                                    attrs: { flat: "" }
                                  },
                                  [
                                    _c(
                                      "v-list",
                                      { staticClass: "pa-0" },
                                      [
                                        _c(
                                          "v-list-tile",
                                          { attrs: { avatar: "" } },
                                          [
                                            _c("v-list-tile-avatar", [
                                              _c("img", {
                                                attrs: {
                                                  src:
                                                    "https://randomuser.me/api/portraits/men/85.jpg"
                                                }
                                              })
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "v-list-tile-content",
                                              [
                                                _c("v-list-tile-title", [
                                                  _vm._v("John Leider")
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
                                  "v-list",
                                  { staticClass: "pt-0", attrs: { dense: "" } },
                                  [
                                    _c("v-divider"),
                                    _vm._v(" "),
                                    _vm._l(_vm.items, function(item) {
                                      return _c(
                                        "v-list-tile",
                                        {
                                          key: item.title,
                                          attrs: { href: "#" }
                                        },
                                        [
                                          _c(
                                            "v-list-tile-action",
                                            [
                                              _c("v-icon", [
                                                _vm._v(_vm._s(item.icon))
                                              ])
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-list-tile-content",
                                            [
                                              _c("v-list-tile-title", [
                                                _vm._v(_vm._s(item.title))
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
    require("vue-hot-reload-api")      .rerender("data-v-b0c765a8", module.exports)
  }
}

/***/ })

});