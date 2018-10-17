webpackJsonp([49],{

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_js__ = __webpack_require__(10);



var actions = {
    check: 'api/user?token=',
    signinuser: 'api/signin',
    registeruser: 'api/registeruser',
    resetpassword: 'api/resetpassword',
    forgotpassword: 'api/forgotpassword',
    emailsError: 'Emails do not match. Kindly correct it.',
    passwordError: 'Passwords do not match. Kindly correct it.',
    isavailableError: 'Unfortunately we are unable to determine the status of your request. Please check your data and re-try. Thanks.'
};

/* harmony default export */ __webpack_exports__["a"] = ({
    user: {
        profile: null,
        authenticated: false
    },
    buildmenu: function buildmenu(data) {
        var Menu = {};
        this.user.profile = data.data;
        this.user.authenticated = true;
        var _roles = data.data.user.roles;
        return true;

        // $.each(_roles, function(key, value) {
        //     // Get all Unique Parent Names
        //     var _permissions = value.permissions;
        //     var UniqueParentNames = $.unique(_permissions.map(function (d) {
        //         return d.parent_name;
        //     }));

        //     // Get all child menu associated with the parent and log into an array.
        //     $.each(UniqueParentNames, function( key, value ) {
        //         var localMenuScope = [];
        //         localMenuScope.push($.map(_permissions, function( a, index ) {
        //             if (a.parent_name.toLowerCase() === value.toLowerCase())
        //             return [ a.name ];
        //         }));
        //         Menu[value] = localMenuScope;
        //     });
        // });

        // // Add the Dashboard and Profile Menu option automatically.
        // var HtmlMenu = '<div class="sidebar-sticky">';
        // HtmlMenu += '<ul class="nav flex-column"><li class="nav-item">';
        // HtmlMenu += '<a class="nav-link" href="javascript:null" @click="LoadComponent(\'Dashboard\')">';
        // HtmlMenu += '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>';
        // HtmlMenu += 'Dashboard <span class="sr-only">(current)</span>';
        // HtmlMenu += '</a></li>';

        // HtmlMenu += '<li class="nav-item"><a class="btn btn-link float-left nav-link" href="#/profile">';
        // HtmlMenu += '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>';
        // HtmlMenu += 'Profile';
        // HtmlMenu += '</a></li></ul>';

        // // Build out the Menu String.
        // $.each(Menu, function( key, value ) {
        //     HtmlMenu += '<button class="accordion"> ' + toPascalCase(key) + ' </button>\n';
        //     HtmlMenu += '<div class="panel">\n';
        //     HtmlMenu += '<ul class="nav flex-column mb-2">\n';
        //     $.each(value[0], function(_key, _value) {
        //         HtmlMenu += '<li class="nav-item">\n';
        //         HtmlMenu += '<a class="nav-link" href="javascript:null">\n';
        //         HtmlMenu += '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>\n';
        //         HtmlMenu += toPascalCase(_value) + '\n';
        //         HtmlMenu += '</a>\n';
        //         HtmlMenu += '</li>\n';
        //     });
        //     HtmlMenu += '</ul>\n';
        //     HtmlMenu += '</div>\n';
        // });
        // HtmlMenu += '</div>';
        // sessionStorage.setItem("permittedMenu", HtmlMenu);
    },
    check: function check() {
        var _this = this;

        var token = sessionStorage.getItem('id_token');
        if (token !== null) {
            __WEBPACK_IMPORTED_MODULE_1__main_js__["default"].http.get(actions.check + token).then(function (response) {
                _this.buildmenu(response.data);
            });
        }
    },
    mountresetcomponents: function mountresetcomponents() {
        __WEBPACK_IMPORTED_MODULE_0__router__["a" /* default */].push({
            name: 'Reset'
        });
    },
    register: function register(context, name, email, password) {
        __WEBPACK_IMPORTED_MODULE_1__main_js__["default"].http.post(this.registeruser, {
            name: name,
            email: email,
            password: password
        }).then(function (response) {
            context.success = true;
        }, function (response) {
            context.error = true;
            context.response = response.data;
        });
    },
    signin: function signin(context, email, password) {
        var _this2 = this;

        __WEBPACK_IMPORTED_MODULE_1__main_js__["default"].http.post(actions.signinuser, { email: email, password: password }).then(function (response) {
            context.error = false;

            sessionStorage.setItem('id_token', response.data.meta.token);
            __WEBPACK_IMPORTED_MODULE_1__main_js__["default"].http.headers.common['Authorization'] = 'Token ' + sessionStorage.getItem('id_token');

            _this2.buildmenu(response.data);
            __WEBPACK_IMPORTED_MODULE_0__router__["a" /* default */].push({
                name: 'Dashboard'
            });
        }, function (response) {
            context.error = true;
        });
    },
    forgotpassword: function forgotpassword(context, email) {
        __WEBPACK_IMPORTED_MODULE_1__main_js__["default"].http.post(actions.forgotpassword, { email: email }).then(function (response) {
            context.error = false;

            __WEBPACK_IMPORTED_MODULE_0__router__["a" /* default */].push({
                name: 'Login'
            });
        }, function (response) {
            context.error = true;
        });
    },
    reset: function reset(context, email, password, password_confirmation) {
        if (password !== password_confirmation) {
            context.error = true;
            return false;
        }
        var token = location.pathname.replace('/password/reset/', '');
        __WEBPACK_IMPORTED_MODULE_1__main_js__["default"].http.post(actions.resetpassword, { email: email, password: password, password_confirmation: password_confirmation, token: token }).then(function (response) {
            context.error = false;

            __WEBPACK_IMPORTED_MODULE_0__router__["a" /* default */].push({
                name: 'Login'
            });
        }, function (response) {
            context.error = true;
        });
    },
    signout: function signout() {
        sessionStorage.removeItem('id_token');
        sessionStorage.removeItem('permittedMenu');

        this.user.profile = null;
        this.user.authenticated = false;

        __WEBPACK_IMPORTED_MODULE_0__router__["a" /* default */].push({
            name: 'Login'
        });
    }
});

/***/ }),

/***/ 524:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(525);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("3d2c3bfe", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1c7cbc6a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Reset.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1c7cbc6a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Reset.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n#reset[data-v-1c7cbc6a] {\n    height: 50%;\n    width: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    content: \"\";\n    z-index: 0;\n}\n.form-gap[data-v-1c7cbc6a] {\n    padding-top: 70px;\n}\n", ""]);

// exports


/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_js__ = __webpack_require__(213);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    data: function data() {
        return {
            email: null,
            error: false,
            password: null,
            loading: false,
            err_message: '',
            password_confirmation: null
        };
    },

    methods: {
        Login: function Login() {
            this.$router.push({ path: '/login' });
        },
        Register: function Register() {
            this.$router.push({ path: '/register' });
        },
        resetpassword: function resetpassword() {
            this.loading = true;
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
                __WEBPACK_IMPORTED_MODULE_0__auth_js__["a" /* default */].reset(this, this.email, this.password, this.password_confirmation);
                return true;
            }
            this.error = true;
            this.loading = false;
            this.err_message = 'There was an error, unable to reset your password based on those credentials. Kindly try again.';
        }
    }
});

/***/ }),

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    { staticClass: "primary", attrs: { id: "reset" } },
    [
      _c(
        "v-toolbar",
        { attrs: { dark: "", color: "primary", dense: "" } },
        [
          _c(
            "a",
            {
              staticClass: "d-flex router-link-active",
              attrs: { href: "#/home" }
            },
            [
              _c("img", {
                attrs: {
                  src: "https://cdn.vuetifyjs.com/images/logos/v-alt.svg",
                  height: "38px",
                  width: "38px"
                }
              })
            ]
          ),
          _vm._v(" "),
          _c("v-toolbar-title", { staticClass: "white--text" }, [
            _vm._v("Welcome to Pentaville.")
          ]),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-toolbar-items",
            [
              _c("v-btn", { attrs: { flat: "" }, on: { click: _vm.Login } }, [
                _vm._v("Login")
              ]),
              _vm._v(" "),
              _c(
                "v-btn",
                { attrs: { flat: "" }, on: { click: _vm.Register } },
                [_vm._v("Register")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-content",
        [
          _c(
            "v-container",
            { attrs: { fluid: "", "fill-height": "" } },
            [
              _c(
                "v-layout",
                { attrs: { "align-center": "", "justify-center": "" } },
                [
                  _c(
                    "v-flex",
                    { attrs: { xs12: "", sm8: "", md4: "", lg4: "" } },
                    [
                      _c(
                        "v-alert",
                        {
                          attrs: {
                            value: _vm.error,
                            dismissible: "",
                            type: "error"
                          }
                        },
                        [
                          _vm._v(
                            "\n                        " +
                              _vm._s(_vm.err_message) +
                              "\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card",
                        { staticClass: "elevation-1 pa-3" },
                        [
                          _c(
                            "v-card-text",
                            [
                              _c(
                                "div",
                                { staticClass: "layout column align-center" },
                                [
                                  _c("img", {
                                    attrs: {
                                      src: "/static/m.png",
                                      alt: "Pentaville Schools",
                                      width: "120",
                                      height: "120"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "h3",
                                    {
                                      staticClass:
                                        "flex my-4 primary--text align-center"
                                    },
                                    [_vm._v("Reset your Password")]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-form",
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      "append-icon": "person",
                                      name: "login",
                                      label: "Email Address",
                                      type: "text"
                                    },
                                    model: {
                                      value: _vm.email,
                                      callback: function($$v) {
                                        _vm.email = $$v
                                      },
                                      expression: "email"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("v-text-field", {
                                    attrs: {
                                      "append-icon": "lock",
                                      name: "password",
                                      label: "Password",
                                      id: "password",
                                      type: "password"
                                    },
                                    model: {
                                      value: _vm.password,
                                      callback: function($$v) {
                                        _vm.password = $$v
                                      },
                                      expression: "password"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("v-text-field", {
                                    attrs: {
                                      "append-icon": "lock",
                                      name: "password_confirmation",
                                      label: "Confirm Password",
                                      id: "password_confirmation",
                                      type: "password"
                                    },
                                    model: {
                                      value: _vm.password_confirmation,
                                      callback: function($$v) {
                                        _vm.password_confirmation = $$v
                                      },
                                      expression: "password_confirmation"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-card-actions",
                            [
                              _c(
                                "v-btn",
                                {
                                  attrs: {
                                    block: "",
                                    color: "primary",
                                    loading: _vm.loading
                                  },
                                  on: { click: _vm.resetpassword }
                                },
                                [_vm._v("Reset Password")]
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
    require("vue-hot-reload-api")      .rerender("data-v-1c7cbc6a", module.exports)
  }
}

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(524)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(526)
/* template */
var __vue_template__ = __webpack_require__(527)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1c7cbc6a"
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
Component.options.__file = "front_end/pages/auth/Reset.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1c7cbc6a", Component.options)
  } else {
    hotAPI.reload("data-v-1c7cbc6a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});