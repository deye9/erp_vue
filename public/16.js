webpackJsonp([16],{

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(610)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(612)
/* template */
var __vue_template__ = __webpack_require__(613)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-9b53a2fe"
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
Component.options.__file = "front_end/pages/ui/Icon.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9b53a2fe", Component.options)
  } else {
    hotAPI.reload("data-v-9b53a2fe", Component.options)
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

/***/ 610:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(611);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("6785f3fe", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9b53a2fe\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Icon.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9b53a2fe\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Icon.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 611:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.demo-icons-list[data-v-9b53a2fe] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    font-size: 32px\n}\n.demo-icons-list li[data-v-9b53a2fe] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n        align-items: center;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n        justify-content: center;\n    margin-right: 20px;\n    margin-bottom: 20px;\n    width: 72px;\n    height: 72px;\n    text-align: center;\n    cursor: pointer;\n    -webkit-transition: .1s;\n    transition: .1s\n}\n.demo-icons-list li .material-icons[data-v-9b53a2fe] {\n    font-size: inherit\n}\n.demo-icons-list li [data-i8-icon][data-v-9b53a2fe] {\n    margin: 0 10px\n}\n.demo-icons-list li [data-provide~=emoji] svg[data-v-9b53a2fe] {\n    width: 32px;\n    height: 32px\n}\n.demo-icons-list li[data-v-9b53a2fe]:hover {\n    background-color: #f7fafc\n}\n.demo-icons-list.icons-size-16px[data-v-9b53a2fe] {\n    font-size: 16px\n}\n.demo-icons-list.icons-size-16px li[data-v-9b53a2fe] {\n    width: 56px;\n    height: 56px\n}\n.demo-icons-list.icons-size-24px[data-v-9b53a2fe] {\n    font-size: 24px\n}\n.demo-icons-list.icons-size-24px li[data-v-9b53a2fe] {\n    width: 64px;\n    height: 64px\n}\n.demo-icons-list.icons-size-32px[data-v-9b53a2fe] {\n    font-size: 32px\n}\n.demo-icons-list.icons-size-32px li[data-v-9b53a2fe] {\n    width: 72px;\n    height: 72px\n}\n.demo-icons-list.icons-size-48px[data-v-9b53a2fe] {\n    font-size: 48px\n}\n.demo-icons-list.icons-size-48px li[data-v-9b53a2fe] {\n    width: 88px;\n    height: 88px\n}\n.demo-icons-list.icons-size-64px[data-v-9b53a2fe] {\n    font-size: 64px\n}\n.demo-icons-list.icons-size-64px li[data-v-9b53a2fe] {\n    width: 104px;\n    height: 104px\n}\n.demo-icons-list.icons-size-80px[data-v-9b53a2fe] {\n    font-size: 80px\n}\n.demo-icons-list.icons-size-80px li[data-v-9b53a2fe] {\n    width: 120px;\n    height: 120px\n}\n.demo-icons-list.icons-size-96px[data-v-9b53a2fe] {\n    font-size: 96px\n}\n.demo-icons-list.icons-size-96px li[data-v-9b53a2fe] {\n    width: 136px;\n    height: 136px\n}\n", ""]);

// exports


/***/ }),

/***/ 612:
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VWidget: __WEBPACK_IMPORTED_MODULE_0__components_VWidget___default.a
  },
  data: function data() {
    return {
      selectedTab: null,
      tabs: null,
      material: null,
      ft: null
    };
  },

  computed: {},
  created: function created() {
    var _this = this;

    fetch('/static/data/material.json').then(function (response) {
      return response.json();
    }).then(function (json) {
      _this.material = json.icons.splice(0, 100);
    });
    fetch('/static/data/font-awesome.json').then(function (response) {
      return response.json();
    }).then(function (json) {
      var version = '4.7.0';
      _this.ft = json[version].splice(0, 100);
    });
  },

  methods: {}
});

/***/ }),

/***/ 613:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "page-icons" } },
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
                { attrs: { "12": "" } },
                [
                  _c(
                    "v-tabs",
                    {
                      attrs: { color: "grey lighten-3" },
                      model: {
                        value: _vm.selectedTab,
                        callback: function($$v) {
                          _vm.selectedTab = $$v
                        },
                        expression: "selectedTab"
                      }
                    },
                    [
                      _c("v-tab", { attrs: { ripple: "", href: "#tab-1" } }, [
                        _vm._v("\n            Matrial Icons\n          ")
                      ]),
                      _vm._v(" "),
                      _c("v-tab", { attrs: { ripple: "", href: "#tab-2" } }, [
                        _vm._v("\n            Font Awesome\n          ")
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-tabs-items",
                        {
                          model: {
                            value: _vm.selectedTab,
                            callback: function($$v) {
                              _vm.selectedTab = $$v
                            },
                            expression: "selectedTab"
                          }
                        },
                        [
                          _c(
                            "v-tab-item",
                            { attrs: { id: "tab-1" } },
                            [
                              _c(
                                "v-card",
                                { attrs: { flat: "" } },
                                [
                                  _c("v-card-text", [
                                    _c(
                                      "ul",
                                      { staticClass: "demo-icons-list" },
                                      _vm._l(_vm.material, function(
                                        item,
                                        index
                                      ) {
                                        return _c("li", { key: index }, [
                                          _c(
                                            "i",
                                            {
                                              staticClass: "icon material-icons"
                                            },
                                            [
                                              _vm._v(
                                                " " + _vm._s(item.ligature)
                                              )
                                            ]
                                          )
                                        ])
                                      })
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "text-sm-center" },
                                      [
                                        _c(
                                          "v-btn",
                                          {
                                            attrs: {
                                              href:
                                                "https://material.io/icons/",
                                              color: "primary",
                                              large: "",
                                              depressed: ""
                                            }
                                          },
                                          [_vm._v("More")]
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
                          ),
                          _vm._v(" "),
                          _c(
                            "v-tab-item",
                            { attrs: { id: "tab-2" } },
                            [
                              _c(
                                "v-card",
                                { attrs: { flat: "" } },
                                [
                                  _c("v-card-text", [
                                    _c(
                                      "ul",
                                      { staticClass: "demo-icons-list" },
                                      _vm._l(_vm.ft, function(item, index) {
                                        return _c("li", { key: index }, [
                                          _c("i", {
                                            staticClass: "fa",
                                            class: item
                                          })
                                        ])
                                      })
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "text-sm-center" },
                                      [
                                        _c(
                                          "v-btn",
                                          {
                                            attrs: {
                                              href:
                                                "https://fontawesome.com/icons?d=gallery",
                                              color: "primary",
                                              large: "",
                                              depressed: ""
                                            }
                                          },
                                          [_vm._v("More")]
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
    require("vue-hot-reload-api")      .rerender("data-v-9b53a2fe", module.exports)
  }
}

/***/ })

});