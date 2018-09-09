webpackJsonp([14],{

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(708)
/* template */
var __vue_template__ = __webpack_require__(714)
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
Component.options.__file = "front_end/pages/widgets/Social.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ec87eaa0", Component.options)
  } else {
    hotAPI.reload("data-v-ec87eaa0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 452:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(453)
/* template */
var __vue_template__ = __webpack_require__(454)
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
Component.options.__file = "front_end/components/widgets/card/ProfileCard.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4463d18b", Component.options)
  } else {
    hotAPI.reload("data-v-4463d18b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 453:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    [
      _c(
        "v-img",
        { attrs: { src: "/static/people/man/m1.jpg", height: "390" } },
        [
          _c(
            "v-layout",
            { staticClass: "media ma-0", attrs: { column: "" } },
            [
              _c(
                "v-card-title",
                [
                  _c(
                    "v-btn",
                    { attrs: { dark: "", icon: "" } },
                    [_c("v-icon", [_vm._v("chevron_left")])],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    { staticClass: "mr-3", attrs: { dark: "", icon: "" } },
                    [_c("v-icon", [_vm._v("edit")])],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    { attrs: { dark: "", icon: "" } },
                    [_c("v-icon", [_vm._v("more_vert")])],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c("v-card-title", { staticClass: "white--text pl-5 pt-5" }, [
                _c("div", { staticClass: "display-1 pl-5 pt-5" }, [
                  _vm._v("Ali Conners")
                ])
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-list",
        { staticClass: "pa-0", attrs: { "two-line": "" } },
        [
          _c(
            "v-list-tile",
            { attrs: { href: "#" } },
            [
              _c(
                "v-list-tile-action",
                [
                  _c("v-icon", { attrs: { color: "indigo" } }, [
                    _vm._v("phone")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-tile-content",
                [
                  _c("v-list-tile-title", [_vm._v("(650) 555-1234")]),
                  _vm._v(" "),
                  _c("v-list-tile-sub-title", [_vm._v("Mobile")])
                ],
                1
              ),
              _vm._v(" "),
              _c("v-list-tile-action", [_c("v-icon", [_vm._v("chat")])], 1)
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-list-tile",
            { attrs: { href: "#" } },
            [
              _c("v-list-tile-action"),
              _vm._v(" "),
              _c(
                "v-list-tile-content",
                [
                  _c("v-list-tile-title", [_vm._v("(323) 555-6789")]),
                  _vm._v(" "),
                  _c("v-list-tile-sub-title", [_vm._v("Work")])
                ],
                1
              ),
              _vm._v(" "),
              _c("v-list-tile-action", [_c("v-icon", [_vm._v("chat")])], 1)
            ],
            1
          ),
          _vm._v(" "),
          _c("v-divider", { attrs: { inset: "" } }),
          _vm._v(" "),
          _c(
            "v-list-tile",
            { attrs: { href: "#" } },
            [
              _c(
                "v-list-tile-action",
                [
                  _c("v-icon", { attrs: { color: "indigo" } }, [_vm._v("mail")])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-tile-content",
                [
                  _c("v-list-tile-title", [_vm._v("aliconnors@example.com")]),
                  _vm._v(" "),
                  _c("v-list-tile-sub-title", [_vm._v("Personal")])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-list-tile",
            { attrs: { href: "#" } },
            [
              _c("v-list-tile-action"),
              _vm._v(" "),
              _c(
                "v-list-tile-content",
                [
                  _c("v-list-tile-title", [_vm._v("ali_connors@example.com")]),
                  _vm._v(" "),
                  _c("v-list-tile-sub-title", [_vm._v("Work")])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-divider", { attrs: { inset: "" } }),
          _vm._v(" "),
          _c(
            "v-list-tile",
            { attrs: { href: "#" } },
            [
              _c(
                "v-list-tile-action",
                [
                  _c("v-icon", { attrs: { color: "indigo" } }, [
                    _vm._v("location_on")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-tile-content",
                [
                  _c("v-list-tile-title", [_vm._v("1400 Main Street")]),
                  _vm._v(" "),
                  _c("v-list-tile-sub-title", [_vm._v("Orlando, FL 79938")])
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
    require("vue-hot-reload-api")      .rerender("data-v-4463d18b", module.exports)
  }
}

/***/ }),

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_widgets_card_NameCard__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_widgets_card_NameCard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_widgets_card_NameCard__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_widgets_card_ProfileCard__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_widgets_card_ProfileCard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_widgets_card_ProfileCard__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    NameCard: __WEBPACK_IMPORTED_MODULE_0__components_widgets_card_NameCard___default.a,
    ProfileCard: __WEBPACK_IMPORTED_MODULE_1__components_widgets_card_ProfileCard___default.a
  },
  data: function data() {
    return {
      users: [{
        jobTitle: 'Web Developer',
        name: 'Michael Wang',
        avatar: {
          src: 'https://randomuser.me/api/portraits/men/1.jpg',
          size: '36'
        }
      }, {
        jobTitle: 'Web Designer',
        name: 'Jessie J',
        color: 'pink',
        dark: true,
        avatar: {
          src: 'https://randomuser.me/api/portraits/women/1.jpg',
          size: '36'
        }
      }, {
        jobTitle: 'Web Developer',
        name: 'Jim J',
        color: 'teal',
        dark: true,
        avatar: {
          src: 'https://randomuser.me/api/portraits/men/10.jpg',
          size: '36'
        }
      }, {
        jobTitle: 'Product Manager',
        name: 'John Doe',
        dark: true,
        cardBgImage: '/static/bg/15.jpg',
        avatar: {
          src: 'https://randomuser.me/api/portraits/men/5.jpg',
          size: '36'
        }
      }]
    };
  }
});

/***/ }),

/***/ 709:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(710)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(712)
/* template */
var __vue_template__ = __webpack_require__(713)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5e7eb879"
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
Component.options.__file = "front_end/components/widgets/card/NameCard.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5e7eb879", Component.options)
  } else {
    hotAPI.reload("data-v-5e7eb879", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 710:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(711);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("6e434c6e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5e7eb879\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/stylus-loader/index.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./NameCard.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5e7eb879\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/stylus-loader/index.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./NameCard.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 711:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.caption[data-v-5e7eb879],\n.subheading[data-v-5e7eb879] {\n  font-weight: 200;\n}\n", ""]);

// exports


/***/ }),

/***/ 712:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: {
    name: {
      type: String,
      default: ''
    },
    avatar: {
      type: Object,
      default: null
    },
    jobTitle: {
      type: String,
      default: ''
    },
    cardBgImage: {
      type: String
    },
    color: {
      type: String,
      default: ''
    },
    dark: {
      type: Boolean,
      default: false
    },
    bottomNav: {
      type: Boolean,
      default: false
    },
    topNav: {
      type: Boolean,
      default: false
    },
    mini: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {};
  },

  computed: {
    computeCardLayout: function computeCardLayout() {
      return this.mini ? 'row' : 'column';
    },
    computeTextAlgin: function computeTextAlgin() {
      return this.mini ? 'text-sm-right' : 'text-sm-center';
    },
    computeAvatarSize: function computeAvatarSize() {
      return this.mini ? '48' : '96';
    },
    showAvatar: function showAvatar() {
      return this.avatar !== null && this.avatar.src;
    },
    showBottomNav: function showBottomNav() {
      return this.mini === false && this.bottomNav;
    },
    showTopNav: function showTopNav() {
      return this.mini === false && this.topNav;
    }
  },

  methods: {}

});

/***/ }),

/***/ 713:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "name-card" },
    [
      _c(
        "v-card",
        {
          ref: "card",
          attrs: { color: _vm.color, dark: _vm.dark, img: _vm.cardBgImage }
        },
        [
          _vm.showTopNav
            ? _c(
                "v-img",
                [
                  _c(
                    "v-layout",
                    {
                      staticClass: "ma-0",
                      attrs: { row: "", "justify-space-between": "" }
                    },
                    [
                      _c(
                        "v-flex",
                        { attrs: { xs2: "" } },
                        [
                          _c("v-icon", { attrs: { color: "pink" } }, [
                            _vm._v("favorite")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { staticClass: "text-sm-right", attrs: { xs2: "" } },
                        [_c("v-icon", [_vm._v("more_vert")])],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c("v-card-text", [
            _c(
              "div",
              {
                staticClass: "layout ma-0 align-center",
                class: _vm.computeCardLayout
              },
              [
                _c(
                  "v-avatar",
                  { attrs: { size: _vm.computeAvatarSize, color: "primary" } },
                  [
                    _vm.showAvatar
                      ? _c("img", {
                          attrs: { src: _vm.avatar.src, alt: _vm.name }
                        })
                      : _c("span", { staticClass: "white--text headline" }, [
                          _vm._v(_vm._s(_vm.name.charAt(0)))
                        ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "flex", class: _vm.computeTextAlgin },
                  [
                    _c("div", { staticClass: "subheading" }, [
                      _vm._v(_vm._s(_vm.name))
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "caption" }, [
                      _vm._v(_vm._s(_vm.jobTitle))
                    ])
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
      _vm.showBottomNav
        ? _c(
            "v-bottom-nav",
            { attrs: { value: true, color: "transparent", height: 64 } },
            [
              _c(
                "v-btn",
                { attrs: { flat: "", color: "teal", value: "recent" } },
                [
                  _c("span", [_vm._v("Recent")]),
                  _vm._v(" "),
                  _c("v-icon", [_vm._v("history")])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                { attrs: { flat: "", color: "teal", value: "favorites" } },
                [
                  _c("span", [_vm._v("Favorites")]),
                  _vm._v(" "),
                  _c("v-icon", [_vm._v("favorite")])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                { attrs: { flat: "", color: "teal", value: "nearby" } },
                [
                  _c("span", [_vm._v("Nearby")]),
                  _vm._v(" "),
                  _c("v-icon", [_vm._v("place")])
                ],
                1
              )
            ],
            1
          )
        : _vm._e()
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
    require("vue-hot-reload-api")      .rerender("data-v-5e7eb879", module.exports)
  }
}

/***/ }),

/***/ 714:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "social" } },
    [
      _c(
        "v-container",
        { attrs: { "grid-list-xl": "", fluid: "" } },
        [
          _c(
            "v-layout",
            { attrs: { row: "", wrap: "" } },
            [
              _c("v-flex", { attrs: { sm12: "" } }, [
                _c("h4", [_vm._v("Mini Name Card")])
              ]),
              _vm._v(" "),
              _vm._l(_vm.users, function(item, index) {
                return _c(
                  "v-flex",
                  { key: "mini" + index, attrs: { lg3: "", sm12: "" } },
                  [
                    _c(
                      "name-card",
                      _vm._b({ attrs: { mini: "" } }, "name-card", item, false)
                    )
                  ],
                  1
                )
              }),
              _vm._v(" "),
              _c("v-flex", { attrs: { sm12: "" } }, [
                _c("h4", [_vm._v("Basic Name Card")])
              ]),
              _vm._v(" "),
              _vm._l(_vm.users, function(item, index) {
                return _c(
                  "v-flex",
                  { key: "basic" + index, attrs: { lg3: "", sm12: "" } },
                  [_c("name-card", _vm._b({}, "name-card", item, false))],
                  1
                )
              }),
              _vm._v(" "),
              _c("v-flex", { attrs: { sm12: "" } }, [
                _c("h4", [_vm._v("Basic Name Card with top nav")])
              ]),
              _vm._v(" "),
              _vm._l(_vm.users, function(item, index) {
                return _c(
                  "v-flex",
                  {
                    key: "basic-top-nav" + index,
                    attrs: { lg3: "", sm12: "" }
                  },
                  [
                    _c(
                      "name-card",
                      _vm._b(
                        { attrs: { "top-nav": "" } },
                        "name-card",
                        item,
                        false
                      )
                    )
                  ],
                  1
                )
              }),
              _vm._v(" "),
              _c("v-flex", { attrs: { sm12: "" } }, [
                _c("h4", [_vm._v("Bottom Nav Name Card")])
              ]),
              _vm._v(" "),
              _vm._l(_vm.users, function(item, index) {
                return _c(
                  "v-flex",
                  { key: "bottom-nav" + index, attrs: { lg3: "", sm12: "" } },
                  [
                    _c(
                      "name-card",
                      _vm._b(
                        { attrs: { "bottom-nav": "" } },
                        "name-card",
                        item,
                        false
                      )
                    )
                  ],
                  1
                )
              }),
              _vm._v(" "),
              _c("v-flex", { attrs: { sm12: "" } }, [
                _c("h4", [_vm._v("Contact Card")])
              ]),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { lg4: "", sm12: "" } },
                [_c("profile-card")],
                1
              )
            ],
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
    require("vue-hot-reload-api")      .rerender("data-v-ec87eaa0", module.exports)
  }
}

/***/ })

});