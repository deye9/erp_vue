webpackJsonp([10],{

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(684)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(686)
/* template */
var __vue_template__ = __webpack_require__(687)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b31b1e46"
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
Component.options.__file = "front_end/pages/widgets/Statistic.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b31b1e46", Component.options)
  } else {
    hotAPI.reload("data-v-b31b1e46", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 433:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(434)
/* template */
var __vue_template__ = __webpack_require__(435)
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
Component.options.__file = "front_end/components/widgets/statistic/MiniStatistic.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1ff4f359", Component.options)
  } else {
    hotAPI.reload("data-v-1ff4f359", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 434:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    icon: String,
    title: String,
    subTitle: String,
    color: String
  }
});

/***/ }),

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    [
      _c(
        "v-card-text",
        { staticClass: "pa-0" },
        [
          _c("v-container", { staticClass: "pa-0" }, [
            _c("div", { staticClass: "layout row ma-0" }, [
              _c("div", { staticClass: "sm6 xs6 flex" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "layout column ma-0 justify-center align-center"
                  },
                  [
                    _c(
                      "v-icon",
                      { attrs: { size: "56px", color: _vm.color } },
                      [_vm._v(_vm._s(_vm.icon))]
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "sm6 xs6 flex text-sm-center py-3 white--text",
                  class: _vm.color
                },
                [
                  _c("div", { staticClass: "headline" }, [
                    _vm._v(_vm._s(_vm.title))
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "caption" }, [
                    _vm._v(_vm._s(_vm.subTitle))
                  ])
                ]
              )
            ])
          ])
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
    require("vue-hot-reload-api")      .rerender("data-v-1ff4f359", module.exports)
  }
}

/***/ }),

/***/ 452:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(453)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(455)
/* template */
var __vue_template__ = __webpack_require__(456)
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
Component.options.__file = "front_end/components/widgets/statistic/CircleStatistic.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4a292580", Component.options)
  } else {
    hotAPI.reload("data-v-4a292580", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(454);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("2f3f3dcd", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4a292580\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CircleStatistic.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4a292580\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CircleStatistic.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 455:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    icon: String,
    title: String,
    subTitle: String,
    caption: String,
    value: Number,
    color: String
  }

});

/***/ }),

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    [
      _c("v-card-title", [
        _c(
          "div",
          { staticClass: "layout row ma-0 justify-space-between pb-1" },
          [
            _c("div", { staticClass: "subheading" }, [
              _vm._v(_vm._s(_vm.title))
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "icon" },
              [
                _c("v-icon", { attrs: { color: _vm.color } }, [
                  _vm._v(_vm._s(_vm.icon))
                ])
              ],
              1
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c("v-card-text", [
        _c(
          "div",
          { staticClass: "justify-center row layout ma-0" },
          [
            _c(
              "v-progress-circular",
              {
                attrs: {
                  size: 150,
                  width: 15,
                  rotate: -90,
                  value: _vm.value,
                  color: _vm.color
                }
              },
              [_vm._v("\n        " + _vm._s(_vm.value) + "\n      ")]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("v-divider"),
      _vm._v(" "),
      _c("v-card-actions", [
        _c("div", { staticClass: "headline" }, [_vm._v(_vm._s(_vm.subTitle))]),
        _vm._v(" "),
        _c("div", { staticClass: "caption" }, [_vm._v(_vm._s(_vm.caption))])
      ])
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
    require("vue-hot-reload-api")      .rerender("data-v-4a292580", module.exports)
  }
}

/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(458)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(460)
/* template */
var __vue_template__ = __webpack_require__(461)
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
Component.options.__file = "front_end/components/widgets/statistic/LinearStatistic.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bd0ef56a", Component.options)
  } else {
    hotAPI.reload("data-v-bd0ef56a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(459);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("31e4aa2f", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-bd0ef56a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./LinearStatistic.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-bd0ef56a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./LinearStatistic.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 459:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 460:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    icon: String,
    title: String,
    subTitle: String,
    value: Number,
    color: String
  },
  computed: {
    caption: function caption() {
      return this.value + '% ' + this.subTitle;
    }
  }
});

/***/ }),

/***/ 461:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    [
      _c("v-card-title", [
        _c(
          "div",
          { staticClass: "layout row ma-0 justify-space-between pb-1" },
          [
            _c("div", { staticClass: "subheading" }, [
              _vm._v(_vm._s(_vm.title))
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "icon" },
              [
                _c("v-icon", { attrs: { mini: "", color: _vm.color } }, [
                  _vm._v(_vm._s(_vm.icon))
                ])
              ],
              1
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c(
        "v-card-text",
        { staticClass: "pt-2" },
        [
          _c("h3", { staticClass: "headline" }, [_vm._v(_vm._s(_vm.subTitle))]),
          _vm._v(" "),
          _c("v-progress-linear", {
            attrs: { value: _vm.value, height: "5", color: _vm.color }
          }),
          _vm._v(" "),
          _c("span", { staticClass: "caption" }, [_vm._v(_vm._s(_vm.caption))])
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
    require("vue-hot-reload-api")      .rerender("data-v-bd0ef56a", module.exports)
  }
}

/***/ }),

/***/ 684:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(685);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("44c661fe", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b31b1e46\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/stylus-loader/index.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Statistic.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b31b1e46\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/stylus-loader/index.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Statistic.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 685:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_widgets_statistic_MiniStatistic__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_widgets_statistic_MiniStatistic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_widgets_statistic_MiniStatistic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_widgets_statistic_LinearStatistic__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_widgets_statistic_LinearStatistic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_widgets_statistic_LinearStatistic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_widgets_statistic_CircleStatistic__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_widgets_statistic_CircleStatistic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_widgets_statistic_CircleStatistic__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    CircleStatistic: __WEBPACK_IMPORTED_MODULE_2__components_widgets_statistic_CircleStatistic___default.a,
    MiniStatistic: __WEBPACK_IMPORTED_MODULE_0__components_widgets_statistic_MiniStatistic___default.a,
    LinearStatistic: __WEBPACK_IMPORTED_MODULE_1__components_widgets_statistic_LinearStatistic___default.a
  },
  data: function data() {
    return {
      trending: [{
        subheading: 'Sales',
        headline: '2,55',
        caption: 'increase',
        percent: 15,
        icon: {
          label: 'trending_up',
          color: 'success'
        },
        linear: {
          value: 15,
          color: 'success'
        }
      }, {
        subheading: 'Revenue',
        headline: '6,553',
        caption: 'increase',
        percent: 10,
        icon: {
          label: 'trending_down',
          color: 'error'
        },
        linear: {
          value: 15,
          color: 'error'
        }
      }, {
        subheading: 'Orders',
        headline: '5,00',
        caption: 'increase',
        percent: 50,
        icon: {
          label: 'arrow_upward',
          color: 'info'
        },
        linear: {
          value: 50,
          color: 'info'
        }
      }],
      trending2: [{
        subheading: 'Email',
        headline: '15+',
        caption: 'email opens',
        percent: 15,
        icon: {
          label: 'email',
          color: 'info'
        },
        linear: {
          value: 15,
          color: 'info'
        }
      }, {
        subheading: 'Tasks',
        headline: '90%',
        caption: 'tasks completed.',
        percent: 90,
        icon: {
          label: 'list',
          color: 'primary'
        },
        linear: {
          value: 90,
          color: 'success'
        }
      }, {
        subheading: 'Issues',
        headline: '100%',
        caption: 'issues fixed.',
        percent: 100,
        icon: {
          label: 'bug_report',
          color: 'primary'
        },
        linear: {
          value: 100,
          color: 'error'
        }
      }]
    };
  }
});

/***/ }),

/***/ 687:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "page-statistic" } },
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
                _c("h4", [_vm._v("Social")])
              ]),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { lg3: "", sm6: "", xs12: "" } },
                [
                  _c("mini-statistic", {
                    attrs: {
                      icon: "fa fa-facebook",
                      title: "100+",
                      "sub-title": "Likes",
                      color: "indigo"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { lg3: "", sm6: "", xs12: "" } },
                [
                  _c("mini-statistic", {
                    attrs: {
                      icon: "fa fa-google",
                      title: "150+",
                      "sub-title": "Connections",
                      color: "red"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { lg3: "", sm6: "", xs12: "" } },
                [
                  _c("mini-statistic", {
                    attrs: {
                      icon: "fa fa-twitter",
                      title: "200+",
                      "sub-title": "Followers",
                      color: "light-blue"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { lg3: "", sm6: "", xs12: "" } },
                [
                  _c("mini-statistic", {
                    attrs: {
                      icon: "fa fa-instagram",
                      title: "50+",
                      "sub-title": "Shots",
                      color: "purple"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("v-flex", { attrs: { sm12: "" } }, [
                _c("h4", [_vm._v("Linear Trending")])
              ]),
              _vm._v(" "),
              _vm._l(_vm.trending, function(item, index) {
                return _c(
                  "v-flex",
                  { key: "trending" + index, attrs: { lg4: "", sm12: "" } },
                  [
                    _c("linear-statistic", {
                      attrs: {
                        title: item.subheading,
                        "sub-title": item.caption,
                        icon: item.icon.label,
                        color: item.icon.color,
                        value: item.linear.value
                      }
                    })
                  ],
                  1
                )
              }),
              _vm._v(" "),
              _c("v-flex", { attrs: { sm12: "" } }, [
                _c("h4", [_vm._v("Circle Trending")])
              ]),
              _vm._v(" "),
              _vm._l(_vm.trending2, function(item, index) {
                return _c(
                  "v-flex",
                  { key: "c-trending" + index, attrs: { lg4: "", sm12: "" } },
                  [
                    _c("circle-statistic", {
                      attrs: {
                        title: item.subheading,
                        "sub-title": item.headline,
                        caption: item.caption,
                        icon: item.icon.label,
                        color: item.linear.color,
                        value: item.linear.value
                      }
                    })
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
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-b31b1e46", module.exports)
  }
}

/***/ })

});