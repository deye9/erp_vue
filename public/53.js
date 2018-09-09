webpackJsonp([53],{

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(634)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(636)
/* template */
var __vue_template__ = __webpack_require__(637)
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
Component.options.__file = "front_end/pages/ui/Typography.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-36a52f92", Component.options)
  } else {
    hotAPI.reload("data-v-36a52f92", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 634:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(635);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("0729adaa", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-36a52f92\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/stylus-loader/index.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Typography.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-36a52f92\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/stylus-loader/index.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Typography.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 635:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n#typography-page .component-example__container > div,\n#typography-page .component-example__container dl {\n  width: 100%;\n}\n#typography-page .component-example__container > div:after,\n#typography-page .component-example__container dl:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n#typography-page .component-example__container .headings dt,\n#typography-page .component-example__container .headings dd {\n  float: left;\n}\n#typography-page .component-example__container .headings dd {\n  margin: 0 0 2rem;\n  clear: both;\n}\n#typography-page .component-example__container .headings dd > div {\n  margin-bottom: 16px;\n}\n#typography-page .component-example__container .headings dd strong {\n  margin-right: 16px;\n}\n", ""]);

// exports


/***/ }),

/***/ 636:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ 637:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "typography-page" } },
    [
      _c(
        "v-container",
        { attrs: { fluid: "", "grid-list-lg": "" } },
        [
          _c(
            "v-card",
            [
              _c(
                "v-toolbar",
                { attrs: { card: "", prominent: "" } },
                [
                  _c("v-toolbar-title", { staticClass: "body-2 grey--text" }, [
                    _vm._v("Typography")
                  ]),
                  _vm._v(" "),
                  _c("v-spacer"),
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
              _c("v-card-text", [
                _c("div", { staticClass: "component-example" }, [
                  _c("div", { staticClass: "component-example__container" }, [
                    _c("dl", { staticClass: "headings" }, [
                      _c("dd", [
                        _c(
                          "div",
                          {
                            staticClass: "display-4 grey--text text--darken-1"
                          },
                          [_vm._v("Light 112sp")]
                        ),
                        _vm._v(" "),
                        _c("strong", [_vm._v(".display-4")]),
                        _vm._v(" "),
                        _c("span", [_vm._v("font-weight 300")])
                      ]),
                      _vm._v(" "),
                      _c("dd", [
                        _c(
                          "div",
                          {
                            staticClass: "display-3 grey--text text--darken-1"
                          },
                          [_vm._v("Regular 56sp")]
                        ),
                        _vm._v(" "),
                        _c("strong", [_vm._v(".display-3")]),
                        _c("span", [_vm._v("font-weight 400")])
                      ]),
                      _vm._v(" "),
                      _c("dd", [
                        _c(
                          "div",
                          {
                            staticClass: "display-2 grey--text text--darken-1"
                          },
                          [_vm._v("Regular 45sp")]
                        ),
                        _vm._v(" "),
                        _c("strong", [_vm._v(".display-2")]),
                        _vm._v(" "),
                        _c("span", [_vm._v("font-weight 400")])
                      ]),
                      _vm._v(" "),
                      _c("dd", [
                        _c(
                          "div",
                          {
                            staticClass: "display-1 grey--text text--darken-1"
                          },
                          [_vm._v("Regular 34sp")]
                        ),
                        _vm._v(" "),
                        _c("strong", [_vm._v(".display-1")]),
                        _vm._v(" "),
                        _c("span", [_vm._v("font-weight 400")])
                      ]),
                      _vm._v(" "),
                      _c("dd", [
                        _c(
                          "div",
                          { staticClass: "headline grey--text text--darken-1" },
                          [_vm._v("Regular 24sp")]
                        ),
                        _vm._v(" "),
                        _c("strong", [_vm._v(".headline")]),
                        _c("span", [_vm._v("font-weight 400")])
                      ]),
                      _vm._v(" "),
                      _c("dd", [
                        _c(
                          "div",
                          { staticClass: "title grey--text text--darken-1" },
                          [_vm._v("Medium 20sp")]
                        ),
                        _vm._v(" "),
                        _c("strong", [_vm._v(".title")]),
                        _c("span", [_vm._v("font-weight 500")])
                      ]),
                      _vm._v(" "),
                      _c("dd", [
                        _c(
                          "div",
                          {
                            staticClass: "subheading grey--text text--darken-1"
                          },
                          [_vm._v("Regular 16sp")]
                        ),
                        _vm._v(" "),
                        _c("strong", [_vm._v(".subheading")]),
                        _c("span", [_vm._v("font-weight 400")])
                      ]),
                      _vm._v(" "),
                      _c("dd", [
                        _c(
                          "div",
                          { staticClass: "body-2 grey--text text--darken-1" },
                          [_vm._v("Medium 14sp")]
                        ),
                        _vm._v(" "),
                        _c("strong", [_vm._v(".body-2")]),
                        _c("span", [_vm._v("font-weight 500")])
                      ]),
                      _vm._v(" "),
                      _c("dd", [
                        _c(
                          "div",
                          { staticClass: "body-1 grey--text text--darken-1" },
                          [_vm._v("Regular 14sp")]
                        ),
                        _vm._v(" "),
                        _c("strong", [_vm._v(".body-1")]),
                        _c("span", [_vm._v("font-weight 400")])
                      ]),
                      _vm._v(" "),
                      _c("dd", [
                        _c(
                          "div",
                          { staticClass: "caption grey--text text--darken-1" },
                          [_vm._v("Regular 12sp")]
                        ),
                        _vm._v(" "),
                        _c("strong", [_vm._v(".caption")]),
                        _c("span", [_vm._v("font-weight 400")])
                      ])
                    ])
                  ])
                ])
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
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-36a52f92", module.exports)
  }
}

/***/ })

});