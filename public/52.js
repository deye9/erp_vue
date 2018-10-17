webpackJsonp([52],{

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

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(511);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("2ee69a3d", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1866c182\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Home.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1866c182\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Home.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\nh1[data-v-1866c182] {\n  font-size: 150px;\n  line-height: 150px;\n  font-weight: 700;\n  color: #252932;\n  text-shadow: rgba(61, 61, 61, 0.3) 1px 1px, rgba(61, 61, 61, 0.2) 2px 2px, rgba(61, 61, 61, 0.3) 3px 3px;\n  /* style=\"color: #636b6f;\" */\n}\n", ""]);

// exports


/***/ }),

/***/ 512:
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


/* harmony default export */ __webpack_exports__["default"] = ({
    methods: {
        Login: function Login() {
            this.$router.push({ path: '/login' });
        },
        Register: function Register() {
            this.$router.push({ path: '/register' });
        }
    },
    mounted: function mounted() {
        if (location.pathname.toLocaleLowerCase().includes("/password/reset/")) {
            __WEBPACK_IMPORTED_MODULE_0__auth_js__["a" /* default */].mountresetcomponents();
        }
        this.$nextTick(function () {
            __WEBPACK_IMPORTED_MODULE_0__auth_js__["a" /* default */].check();
        });
    }
});

/***/ }),

/***/ 513:
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
            _vm._v("Pentaville Schools.")
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
        "v-container",
        { attrs: { fluid: "", "fill-height": "" } },
        [
          _c(
            "v-layout",
            { attrs: { "align-center": "", "justify-center": "" } },
            [
              _c("div", { staticClass: "text-md-center" }, [
                _c("h1", [_vm._v("Pentaville Schools.")]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("h2", { staticClass: "my-3 headline" }, [
                  _vm._v("Pride in Excellence")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "links" }, [
                  _c("a", { attrs: { href: "https://laravel.com/docs" } }, [
                    _vm._v("Documentation")
                  ]),
                  _vm._v(" "),
                  _c("a", { attrs: { href: "https://laracasts.com" } }, [
                    _vm._v("Laracasts")
                  ]),
                  _vm._v(" "),
                  _c("a", { attrs: { href: "https://laravel-news.com" } }, [
                    _vm._v("News")
                  ]),
                  _vm._v(" "),
                  _c("a", { attrs: { href: "https://forge.laravel.com" } }, [
                    _vm._v("Forge")
                  ]),
                  _vm._v(" "),
                  _c(
                    "a",
                    { attrs: { href: "https://github.com/laravel/laravel" } },
                    [_vm._v("GitHub")]
                  )
                ])
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
    require("vue-hot-reload-api")      .rerender("data-v-1866c182", module.exports)
  }
}

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(510)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(512)
/* template */
var __vue_template__ = __webpack_require__(513)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1866c182"
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
Component.options.__file = "front_end/pages/Home.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1866c182", Component.options)
  } else {
    hotAPI.reload("data-v-1866c182", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});