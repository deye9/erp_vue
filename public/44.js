webpackJsonp([44],{

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(702)
/* template */
var __vue_template__ = __webpack_require__(703)
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
Component.options.__file = "front_end/pages/form/SelectionControls.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3d284f7a", Component.options)
  } else {
    hotAPI.reload("data-v-3d284f7a", Component.options)
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

/***/ 702:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      includeFiles: false,
      enabled: false,
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
      checkbox4: false,
      checkbox5: false,
      radio1: false,
      radio2: false,
      radio3: false,
      radio4: false,
      radio5: false,
      s1: false,
      s2: false,
      ex7: 'red',
      ex8: 'primary',
      colors: ['red', 'indigo', 'orange', 'primary']

    };
  },

  computed: {},
  methods: {}
});

/***/ }),

/***/ 703:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "page-selection-controls" } },
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
                { attrs: { lg6: "", sm12: "" } },
                [
                  _c("v-widget", { attrs: { title: "Checkbox" } }, [
                    _c(
                      "div",
                      {
                        attrs: { slot: "widget-content" },
                        slot: "widget-content"
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "basic" },
                          [
                            _c("v-subheader", { staticClass: "pa-0" }, [
                              _vm._v("Single")
                            ]),
                            _vm._v(" "),
                            _c("v-checkbox", {
                              attrs: {
                                label: "Default: " + _vm.checkbox1.toString()
                              },
                              model: {
                                value: _vm.checkbox1,
                                callback: function($$v) {
                                  _vm.checkbox1 = $$v
                                },
                                expression: "checkbox1"
                              }
                            }),
                            _vm._v(" "),
                            _c("v-checkbox", {
                              attrs: {
                                label: "Purple : " + _vm.checkbox2.toString(),
                                color: "purple"
                              },
                              model: {
                                value: _vm.checkbox2,
                                callback: function($$v) {
                                  _vm.checkbox2 = $$v
                                },
                                expression: "checkbox2"
                              }
                            }),
                            _vm._v(" "),
                            _c("v-checkbox", {
                              attrs: {
                                label: "Disabled : " + _vm.checkbox3.toString(),
                                color: "success",
                                disabled: ""
                              },
                              model: {
                                value: _vm.checkbox3,
                                callback: function($$v) {
                                  _vm.checkbox3 = $$v
                                },
                                expression: "checkbox3"
                              }
                            }),
                            _vm._v(" "),
                            _c("v-checkbox", {
                              attrs: {
                                label:
                                  "Indeterminate : " + _vm.checkbox4.toString(),
                                color: "success",
                                indeterminate: ""
                              },
                              model: {
                                value: _vm.checkbox4,
                                callback: function($$v) {
                                  _vm.checkbox4 = $$v
                                },
                                expression: "checkbox4"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "multile" },
                          [
                            _c(
                              "v-container",
                              { staticClass: "pa-0", attrs: { fluid: "" } },
                              [
                                _c(
                                  "v-layout",
                                  { attrs: { row: "", wrap: "" } },
                                  [
                                    _c(
                                      "v-flex",
                                      { attrs: { xs12: "" } },
                                      [
                                        _c(
                                          "v-subheader",
                                          { staticClass: "pa-0" },
                                          [
                                            _vm._v(
                                              "Multple Selected : [" +
                                                _vm._s(_vm.colors.toString()) +
                                                "]"
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-flex",
                                      { attrs: { xs12: "", sm4: "", md4: "" } },
                                      [
                                        _c("v-checkbox", {
                                          attrs: {
                                            label: "red",
                                            color: "red",
                                            value: "red",
                                            "hide-details": ""
                                          },
                                          model: {
                                            value: _vm.colors,
                                            callback: function($$v) {
                                              _vm.colors = $$v
                                            },
                                            expression: "colors"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("v-checkbox", {
                                          attrs: {
                                            label: "red darken-3",
                                            color: "red darken-3",
                                            value: "red darken-3",
                                            "hide-details": ""
                                          },
                                          model: {
                                            value: _vm.colors,
                                            callback: function($$v) {
                                              _vm.colors = $$v
                                            },
                                            expression: "colors"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-flex",
                                      { attrs: { xs12: "", sm4: "", md4: "" } },
                                      [
                                        _c("v-checkbox", {
                                          attrs: {
                                            label: "indigo",
                                            color: "indigo",
                                            value: "indigo",
                                            "hide-details": ""
                                          },
                                          model: {
                                            value: _vm.colors,
                                            callback: function($$v) {
                                              _vm.colors = $$v
                                            },
                                            expression: "colors"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("v-checkbox", {
                                          attrs: {
                                            label: "indigo darken-3",
                                            color: "indigo darken-3",
                                            value: "indigo darken-3",
                                            "hide-details": ""
                                          },
                                          model: {
                                            value: _vm.colors,
                                            callback: function($$v) {
                                              _vm.colors = $$v
                                            },
                                            expression: "colors"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-flex",
                                      { attrs: { xs12: "", sm4: "", md4: "" } },
                                      [
                                        _c("v-checkbox", {
                                          attrs: {
                                            label: "orange",
                                            color: "orange",
                                            value: "orange",
                                            "hide-details": ""
                                          },
                                          model: {
                                            value: _vm.colors,
                                            callback: function($$v) {
                                              _vm.colors = $$v
                                            },
                                            expression: "colors"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("v-checkbox", {
                                          attrs: {
                                            label: "orange darken-3",
                                            color: "orange darken-3",
                                            value: "orange darken-3",
                                            "hide-details": ""
                                          },
                                          model: {
                                            value: _vm.colors,
                                            callback: function($$v) {
                                              _vm.colors = $$v
                                            },
                                            expression: "colors"
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
                                  "v-layout",
                                  { attrs: { row: "", wrap: "" } },
                                  [
                                    _c(
                                      "v-flex",
                                      { attrs: { xs12: "", sm4: "", md4: "" } },
                                      [
                                        _c("v-checkbox", {
                                          attrs: {
                                            label: "primary",
                                            color: "primary",
                                            value: "primary",
                                            "hide-details": ""
                                          },
                                          model: {
                                            value: _vm.colors,
                                            callback: function($$v) {
                                              _vm.colors = $$v
                                            },
                                            expression: "colors"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("v-checkbox", {
                                          attrs: {
                                            label: "secondary",
                                            color: "secondary",
                                            value: "secondary",
                                            "hide-details": ""
                                          },
                                          model: {
                                            value: _vm.colors,
                                            callback: function($$v) {
                                              _vm.colors = $$v
                                            },
                                            expression: "colors"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-flex",
                                      { attrs: { xs12: "", sm4: "", md4: "" } },
                                      [
                                        _c("v-checkbox", {
                                          attrs: {
                                            label: "success",
                                            color: "success",
                                            value: "success",
                                            "hide-details": ""
                                          },
                                          model: {
                                            value: _vm.colors,
                                            callback: function($$v) {
                                              _vm.colors = $$v
                                            },
                                            expression: "colors"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("v-checkbox", {
                                          attrs: {
                                            label: "info",
                                            color: "info",
                                            value: "info",
                                            "hide-details": ""
                                          },
                                          model: {
                                            value: _vm.colors,
                                            callback: function($$v) {
                                              _vm.colors = $$v
                                            },
                                            expression: "colors"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-flex",
                                      { attrs: { xs12: "", sm4: "", md4: "" } },
                                      [
                                        _c("v-checkbox", {
                                          attrs: {
                                            label: "warning",
                                            color: "warning",
                                            value: "warning",
                                            "hide-details": ""
                                          },
                                          model: {
                                            value: _vm.colors,
                                            callback: function($$v) {
                                              _vm.colors = $$v
                                            },
                                            expression: "colors"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("v-checkbox", {
                                          attrs: {
                                            label: "error",
                                            color: "error",
                                            value: "error",
                                            "hide-details": ""
                                          },
                                          model: {
                                            value: _vm.colors,
                                            callback: function($$v) {
                                              _vm.colors = $$v
                                            },
                                            expression: "colors"
                                          }
                                        })
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
                          "div",
                          { staticClass: "text-mixed  mt-3" },
                          [
                            _c("v-subheader", { staticClass: "pa-0" }, [
                              _vm._v("Inline with a textfield")
                            ]),
                            _vm._v(" "),
                            _c(
                              "v-layout",
                              {
                                staticClass: "ma-0",
                                attrs: { "align-center": "" }
                              },
                              [
                                _c("v-checkbox", {
                                  staticClass: "shrink mr-2",
                                  attrs: { "hide-details": "" },
                                  model: {
                                    value: _vm.includeFiles,
                                    callback: function($$v) {
                                      _vm.includeFiles = $$v
                                    },
                                    expression: "includeFiles"
                                  }
                                }),
                                _vm._v(" "),
                                _c("v-text-field", {
                                  attrs: { label: "Include files" }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-layout",
                              {
                                staticClass: "ma-0",
                                attrs: { "align-center": "" }
                              },
                              [
                                _c("v-checkbox", {
                                  staticClass: "shrink mr-2",
                                  attrs: { "hide-details": "" },
                                  model: {
                                    value: _vm.enabled,
                                    callback: function($$v) {
                                      _vm.enabled = $$v
                                    },
                                    expression: "enabled"
                                  }
                                }),
                                _vm._v(" "),
                                _c("v-text-field", {
                                  attrs: {
                                    label: "I only work if you check the box",
                                    disabled: !_vm.enabled
                                  }
                                })
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
                { attrs: { lg6: "", sm12: "" } },
                [
                  _c("v-widget", { attrs: { title: "Raidio Buttons" } }, [
                    _c(
                      "div",
                      {
                        attrs: { slot: "widget-content" },
                        slot: "widget-content"
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "basic" },
                          [
                            _c("v-subheader", { staticClass: "pa-0" }, [
                              _vm._v("Default vertical ")
                            ]),
                            _vm._v(" "),
                            _c(
                              "v-radio-group",
                              {
                                attrs: { mandatory: false },
                                model: {
                                  value: _vm.radio1,
                                  callback: function($$v) {
                                    _vm.radio1 = $$v
                                  },
                                  expression: "radio1"
                                }
                              },
                              [
                                _c("v-radio", {
                                  attrs: {
                                    label: "Primary",
                                    color: "primary",
                                    value: "radio-1"
                                  }
                                }),
                                _vm._v(" "),
                                _c("v-radio", {
                                  attrs: {
                                    label: "Success",
                                    color: "success",
                                    value: "radio-2"
                                  }
                                }),
                                _vm._v(" "),
                                _c("v-radio", {
                                  attrs: {
                                    label: "Info",
                                    color: "info",
                                    value: "radio-3"
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
                          "div",
                          { staticClass: "basic" },
                          [
                            _c("v-subheader", { staticClass: "pa-0" }, [
                              _vm._v("Horizontal ")
                            ]),
                            _vm._v(" "),
                            _c(
                              "v-radio-group",
                              {
                                attrs: { mandatory: false, row: "" },
                                model: {
                                  value: _vm.radio2,
                                  callback: function($$v) {
                                    _vm.radio2 = $$v
                                  },
                                  expression: "radio2"
                                }
                              },
                              [
                                _c("v-radio", {
                                  attrs: {
                                    label: "Radio 1",
                                    value: "radio-1",
                                    color: "pink"
                                  }
                                }),
                                _vm._v(" "),
                                _c("v-radio", {
                                  attrs: {
                                    label: "Radio 2",
                                    value: "radio-2",
                                    color: "secondary"
                                  }
                                }),
                                _vm._v(" "),
                                _c("v-radio", {
                                  attrs: {
                                    label: "Radio 3",
                                    value: "radio-3",
                                    color: "teal"
                                  }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-widget",
                    { staticClass: "mt-3", attrs: { title: "Switches" } },
                    [
                      _c(
                        "div",
                        {
                          attrs: { slot: "widget-content" },
                          slot: "widget-content"
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "basic" },
                            [
                              _c("v-subheader", { staticClass: "pa-0" }, [
                                _vm._v("Default value: " + _vm._s(_vm.s1) + " ")
                              ]),
                              _vm._v(" "),
                              _c("v-switch", {
                                attrs: { label: _vm.s1 ? "On" : "Off" },
                                model: {
                                  value: _vm.s1,
                                  callback: function($$v) {
                                    _vm.s1 = $$v
                                  },
                                  expression: "s1"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "basic" },
                            [
                              _c("v-subheader", { staticClass: "pa-0" }, [
                                _vm._v(
                                  "Custom text value:  " + _vm._s(_vm.s2) + " "
                                )
                              ]),
                              _vm._v(" "),
                              _c("v-switch", {
                                attrs: {
                                  value: "Yes",
                                  label: _vm.s2 ? "Yes" : "No",
                                  color: "success"
                                },
                                model: {
                                  value: _vm.s2,
                                  callback: function($$v) {
                                    _vm.s2 = $$v
                                  },
                                  expression: "s2"
                                }
                              })
                            ],
                            1
                          )
                        ]
                      )
                    ]
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
    require("vue-hot-reload-api")      .rerender("data-v-3d284f7a", module.exports)
  }
}

/***/ })

});