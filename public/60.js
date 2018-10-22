webpackJsonp([60],{

/***/ 519:
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
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    computed: {
        tenant: function tenant() {
            return this.$store.state.tenant;
        }
    },
    methods: {
        Login: function Login() {
            this.$router.push({ path: '/login' });
        }
    }
});

/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    { attrs: { id: "home" } },
    [
      _c(
        "v-toolbar",
        { attrs: { dark: "", color: "primary", dense: "" } },
        [
          _c(
            "a",
            {
              staticClass: "d-flex router-link-active",
              attrs: { href: "/home" }
            },
            [
              _c("img", {
                attrs: { src: _vm.tenant.logo, height: "38px", width: "38px" }
              })
            ]
          ),
          _vm._v(" "),
          _c("v-toolbar-title", { staticClass: "white--text" }, [
            _vm._v("Welcome to " + _vm._s(_vm.tenant.name) + ".")
          ]),
          _vm._v(" "),
          _c("v-spacer")
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-container",
        { attrs: { fluid: "", "fill-height": "" } },
        [
          _c(
            "v-layout",
            { attrs: { "align-center": "", "justify-center": "" } },
            [
              _c("div", { staticClass: "text-md-center" }, [
                _c("h1", [_vm._v("Registration Page.")])
              ])
            ]
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
    require("vue-hot-reload-api")      .rerender("data-v-439a9bd7", module.exports)
  }
}

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(519)
/* template */
var __vue_template__ = __webpack_require__(520)
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
Component.options.__file = "front_end/pages/auth/Register.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-439a9bd7", Component.options)
  } else {
    hotAPI.reload("data-v-439a9bd7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});