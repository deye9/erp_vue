webpackJsonp([45],{

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

/***/ 535:
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


/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        VWidget: __WEBPACK_IMPORTED_MODULE_0__components_VWidget___default.a
    },
    data: function data() {
        return {
            alert: {
                showSuccess: true,
                showError: true,
                showWarnning: true,
                showInfo: true
            }
        };
    },

    computed: {
        showReset: function showReset() {
            return this.alert.showSuccess === this.alert.showError === this.alert.showWarnning === this.alert.showInfo === false;
        }
    },
    methods: {
        registerRole: function registerRole() {
            alert("Register Roles");
        },
        setPermissions: function setPermissions() {
            alert("Set Permissions");
        },
        registerUsers: function registerUsers() {
            alert("Register Users");
        }
    },
    created: function created() {
        // Issue a get command to get the roles and associated permissions.
        // query {acl{id,name,permissions{id,name,title,group,icon,component}}}

        // query acl {
        //   acl {
        //   	id
        //     name
        //     created_at
        //     updated_at
        //     permissions {
        //       id
        //       name
        //       title
        //       group
        //       icon
        //     }
        //   }
        // }
    },
    mounted: function mounted() {
        alert('mounted');
    }
});

/***/ }),

/***/ 536:
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
                { attrs: { sm12: "", md6: "", sm6: "" } },
                [
                  _c("v-widget", { attrs: { title: "Roles" } }, [
                    _c(
                      "div",
                      {
                        attrs: { slot: "widget-header-action" },
                        slot: "widget-header-action"
                      },
                      [
                        _c(
                          "v-btn",
                          {
                            attrs: {
                              fab: "",
                              dark: "",
                              small: "",
                              color: "indigo",
                              loading: _vm.loading
                            },
                            on: { click: _vm.registerRole }
                          },
                          [_c("v-icon", [_vm._v("add")])],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        attrs: { slot: "widget-content" },
                        slot: "widget-content"
                      },
                      [
                        _c(
                          "v-alert",
                          { attrs: { type: "success", value: true } },
                          [
                            _vm._v(
                              "\n              This is a success alert.\n            "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-alert",
                          { attrs: { type: "info", value: true } },
                          [
                            _vm._v(
                              "\n              This is a info alert.\n            "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-alert",
                          { attrs: { type: "warning", value: true } },
                          [
                            _vm._v(
                              "\n              This is a warning alert.\n            "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-alert",
                          { attrs: { type: "error", value: true } },
                          [
                            _vm._v(
                              "\n              This is a error alert.\n            "
                            )
                          ]
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
                { attrs: { sm12: "", md6: "", sm6: "" } },
                [
                  _c("v-widget", { attrs: { title: "Permissions" } }, [
                    _c(
                      "div",
                      {
                        attrs: { slot: "widget-header-action" },
                        slot: "widget-header-action"
                      },
                      [
                        _c(
                          "v-btn",
                          {
                            attrs: {
                              fab: "",
                              dark: "",
                              small: "",
                              color: "indigo",
                              loading: _vm.loading
                            },
                            on: { click: _vm.setPermissions }
                          },
                          [_c("v-icon", [_vm._v("add")])],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        attrs: { slot: "widget-content" },
                        slot: "widget-content"
                      },
                      [
                        _c(
                          "v-alert",
                          {
                            attrs: {
                              color: "success",
                              icon: "new_releases",
                              value: true
                            }
                          },
                          [
                            _vm._v(
                              "\n                  This is a success alert with a custom icon.\n              "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-alert",
                          {
                            attrs: {
                              color: "warning",
                              value: true,
                              icon: "message"
                            }
                          },
                          [
                            _vm._v(
                              "\n                  This is a warning alert with a custom icon.\n              "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-alert",
                          {
                            attrs: { color: "info", icon: "star", value: true }
                          },
                          [
                            _vm._v(
                              "\n                  This is a info alert with a custom icon.\n              "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-alert",
                          { attrs: { color: "error", value: true } },
                          [
                            _vm._v(
                              "\n                  This is an error alert with no icon.\n              "
                            )
                          ]
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
                  _c("v-widget", { attrs: { title: "Users" } }, [
                    _c(
                      "div",
                      {
                        attrs: { slot: "widget-header-action" },
                        slot: "widget-header-action"
                      },
                      [
                        _c(
                          "v-btn",
                          {
                            attrs: {
                              fab: "",
                              dark: "",
                              small: "",
                              color: "indigo",
                              loading: _vm.loading
                            },
                            on: { click: _vm.registerUsers }
                          },
                          [_c("v-icon", [_vm._v("add")])],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        attrs: { slot: "widget-content" },
                        slot: "widget-content"
                      },
                      [
                        _c(
                          "v-alert",
                          {
                            attrs: {
                              outline: "",
                              color: "success",
                              icon: "check_circle",
                              value: true
                            }
                          },
                          [
                            _vm._v(
                              "\n                  This is a success alert.\n              "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-alert",
                          {
                            attrs: {
                              outline: "",
                              color: "info",
                              icon: "info",
                              value: true
                            }
                          },
                          [
                            _vm._v(
                              "\n                  This is an info alert.\n              "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-alert",
                          {
                            attrs: {
                              outline: "",
                              color: "warning",
                              icon: "priority_high",
                              value: true
                            }
                          },
                          [
                            _vm._v(
                              "\n                  This is a warning alert.\n              "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-alert",
                          {
                            attrs: {
                              outline: "",
                              color: "error",
                              icon: "warning",
                              value: true
                            }
                          },
                          [
                            _vm._v(
                              "\n                  This is a error alert.\n              "
                            )
                          ]
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
    require("vue-hot-reload-api")      .rerender("data-v-2065d03c", module.exports)
  }
}

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(535)
/* template */
var __vue_template__ = __webpack_require__(536)
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
Component.options.__file = "front_end/admin/acl.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2065d03c", Component.options)
  } else {
    hotAPI.reload("data-v-2065d03c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});