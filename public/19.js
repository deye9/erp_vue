webpackJsonp([19],{

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(621)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(623)
/* template */
var __vue_template__ = __webpack_require__(624)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-66b14cb9"
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
Component.options.__file = "front_end/pages/layout/Toolbar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-66b14cb9", Component.options)
  } else {
    hotAPI.reload("data-v-66b14cb9", Component.options)
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

/***/ 621:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(622);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("dd2dfc6a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-66b14cb9\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Toolbar.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-66b14cb9\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Toolbar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 622:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.card--flex-toolbar[data-v-66b14cb9] {\n  margin-top: -64px;\n}\n", ""]);

// exports


/***/ }),

/***/ 623:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    return {};
  },

  computed: {},
  methods: {}
});

/***/ }),

/***/ 624:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "page-toolbars" } },
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
                          [
                            _c("v-subheader", [_vm._v("Default")]),
                            _vm._v(" "),
                            _c(
                              "v-toolbar",
                              { attrs: { dark: "", color: "primary" } },
                              [
                                _c("v-toolbar-side-icon"),
                                _vm._v(" "),
                                _c(
                                  "v-toolbar-title",
                                  { staticClass: "white--text" },
                                  [_vm._v("Title")]
                                ),
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
                                  [_c("v-icon", [_vm._v("apps")])],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-btn",
                                  { attrs: { icon: "" } },
                                  [_c("v-icon", [_vm._v("refresh")])],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-btn",
                                  { attrs: { icon: "" } },
                                  [_c("v-icon", [_vm._v("more_vert")])],
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
                          "div",
                          [
                            _c("v-subheader", [_vm._v("Dense")]),
                            _vm._v(" "),
                            _c(
                              "v-toolbar",
                              {
                                attrs: { dark: "", color: "purple", dense: "" }
                              },
                              [
                                _c("v-toolbar-side-icon"),
                                _vm._v(" "),
                                _c(
                                  "v-toolbar-title",
                                  { staticClass: "white--text" },
                                  [_vm._v("Title")]
                                ),
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
                                  [_c("v-icon", [_vm._v("apps")])],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-btn",
                                  { attrs: { icon: "" } },
                                  [_c("v-icon", [_vm._v("refresh")])],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-btn",
                                  { attrs: { icon: "" } },
                                  [_c("v-icon", [_vm._v("more_vert")])],
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
                          "div",
                          [
                            _c("v-subheader", [_vm._v("Link items")]),
                            _vm._v(" "),
                            _c(
                              "v-toolbar",
                              [
                                _c("v-spacer"),
                                _vm._v(" "),
                                _c(
                                  "v-toolbar-items",
                                  [
                                    _c("v-btn", { attrs: { flat: "" } }, [
                                      _vm._v("Link One")
                                    ]),
                                    _vm._v(" "),
                                    _c("v-btn", { attrs: { flat: "" } }, [
                                      _vm._v("Link Two")
                                    ]),
                                    _vm._v(" "),
                                    _c("v-btn", { attrs: { flat: "" } }, [
                                      _vm._v("Link Three")
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
                          "div",
                          [
                            _c("v-subheader", [_vm._v("Extended")]),
                            _vm._v(" "),
                            _c(
                              "v-toolbar",
                              {
                                attrs: {
                                  dark: "",
                                  color: "primary",
                                  extended: ""
                                }
                              },
                              [
                                _c("v-toolbar-side-icon"),
                                _vm._v(" "),
                                _c(
                                  "v-toolbar-title",
                                  {
                                    staticClass: "white--text",
                                    attrs: { slot: "extension" },
                                    slot: "extension"
                                  },
                                  [_vm._v("Title")]
                                ),
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
                                  [_c("v-icon", [_vm._v("apps")])],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-btn",
                                  { attrs: { icon: "" } },
                                  [_c("v-icon", [_vm._v("refresh")])],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-btn",
                                  { attrs: { icon: "" } },
                                  [_c("v-icon", [_vm._v("more_vert")])],
                                  1
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
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { xs12: "" } },
                [
                  _c(
                    "v-card",
                    { attrs: { flat: "" } },
                    [
                      _c(
                        "v-toolbar",
                        {
                          attrs: {
                            dark: "",
                            color: "primary",
                            flat: "",
                            extended: ""
                          }
                        },
                        [
                          _c("v-toolbar-side-icon"),
                          _vm._v(" "),
                          _c("v-toolbar-title", [
                            _vm._v("Complex usage in page layout")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-layout",
                        { attrs: { row: "", "pb-2": "" } },
                        [
                          _c(
                            "v-flex",
                            { attrs: { xs8: "", "offset-xs2": "" } },
                            [
                              _c(
                                "v-card",
                                { staticClass: "card--flex-toolbar" },
                                [
                                  _c(
                                    "v-toolbar",
                                    { attrs: { card: "", prominent: "" } },
                                    [
                                      _c(
                                        "v-toolbar-title",
                                        { staticClass: "body-2 grey--text" },
                                        [_vm._v("Title")]
                                      ),
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
                                        [_c("v-icon", [_vm._v("apps")])],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        { attrs: { icon: "" } },
                                        [_c("v-icon", [_vm._v("more_vert")])],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("v-divider"),
                                  _vm._v(" "),
                                  _c("v-card-text")
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
    require("vue-hot-reload-api")      .rerender("data-v-66b14cb9", module.exports)
  }
}

/***/ })

});