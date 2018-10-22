webpackJsonp([31],{

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(609)
/* template */
var __vue_template__ = __webpack_require__(610)
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
Component.options.__file = "front_end/pages/ui/Dialogs.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-75776753", Component.options)
  } else {
    hotAPI.reload("data-v-75776753", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

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

/***/ 609:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      basic: {
        dialog: false
      },
      fullscreen: {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false
      },
      scrollable: {
        name: '',
        dialog: false
      }
    };
  },

  computed: {},
  methods: {}
});

/***/ }),

/***/ 610:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "page-dialogs" } },
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
                { attrs: { lg4: "" } },
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
                          "v-dialog",
                          {
                            attrs: { persistent: "", "max-width": "500px" },
                            model: {
                              value: _vm.basic.dialog,
                              callback: function($$v) {
                                _vm.$set(_vm.basic, "dialog", $$v)
                              },
                              expression: "basic.dialog"
                            }
                          },
                          [
                            _c(
                              "v-btn",
                              {
                                attrs: {
                                  slot: "activator",
                                  color: "primary",
                                  dark: ""
                                },
                                slot: "activator"
                              },
                              [_vm._v("Open Dialog")]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-card",
                              [
                                _c("v-card-title", [
                                  _c("span", { staticClass: "headline" }, [
                                    _vm._v("User Profile")
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("v-divider"),
                                _vm._v(" "),
                                _c(
                                  "v-card-text",
                                  [
                                    _c(
                                      "v-container",
                                      { attrs: { "grid-list-md": "" } },
                                      [
                                        _c(
                                          "v-layout",
                                          { attrs: { wrap: "" } },
                                          [
                                            _c(
                                              "v-flex",
                                              {
                                                attrs: {
                                                  xs12: "",
                                                  sm6: "",
                                                  md4: ""
                                                }
                                              },
                                              [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    label: "Legal first name",
                                                    required: ""
                                                  }
                                                })
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-flex",
                                              {
                                                attrs: {
                                                  xs12: "",
                                                  sm6: "",
                                                  md4: ""
                                                }
                                              },
                                              [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    label: "Legal middle name",
                                                    hint:
                                                      "example of helper text only on focus"
                                                  }
                                                })
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-flex",
                                              {
                                                attrs: {
                                                  xs12: "",
                                                  sm6: "",
                                                  md4: ""
                                                }
                                              },
                                              [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    label: "Legal last name",
                                                    hint:
                                                      "example of persistent helper text",
                                                    "persistent-hint": "",
                                                    required: ""
                                                  }
                                                })
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-flex",
                                              { attrs: { xs12: "" } },
                                              [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    label: "Email",
                                                    required: ""
                                                  }
                                                })
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-flex",
                                              { attrs: { xs12: "" } },
                                              [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    label: "Password",
                                                    type: "password",
                                                    required: ""
                                                  }
                                                })
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-flex",
                                              { attrs: { xs12: "", sm6: "" } },
                                              [
                                                _c("v-select", {
                                                  attrs: {
                                                    label: "Age",
                                                    required: "",
                                                    items: [
                                                      "0-17",
                                                      "18-29",
                                                      "30-54",
                                                      "54+"
                                                    ]
                                                  }
                                                })
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-flex",
                                              { attrs: { xs12: "", sm6: "" } },
                                              [
                                                _c("v-select", {
                                                  attrs: {
                                                    label: "Interests",
                                                    multiple: "",
                                                    autocomplete: "",
                                                    chips: "",
                                                    items: [
                                                      "Skiing",
                                                      "Ice hockey",
                                                      "Soccer",
                                                      "Basketball",
                                                      "Hockey",
                                                      "Reading",
                                                      "Writing",
                                                      "Coding",
                                                      "Basejump"
                                                    ]
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
                                    ),
                                    _vm._v(" "),
                                    _c("small", [
                                      _vm._v("*indicates required field")
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-card-actions",
                                  [
                                    _c("v-spacer"),
                                    _vm._v(" "),
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: {
                                          color: "blue darken-1",
                                          flat: ""
                                        },
                                        nativeOn: {
                                          click: function($event) {
                                            _vm.basic.dialog = false
                                          }
                                        }
                                      },
                                      [_vm._v("Close")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: {
                                          color: "blue darken-1",
                                          flat: ""
                                        },
                                        nativeOn: {
                                          click: function($event) {
                                            _vm.basic.dialog = false
                                          }
                                        }
                                      },
                                      [_vm._v("Save")]
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
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { xl4: "" } },
                [
                  _c("v-widget", { attrs: { title: "Fullscreen Dialog" } }, [
                    _c(
                      "div",
                      {
                        attrs: { slot: "widget-content" },
                        slot: "widget-content"
                      },
                      [
                        _c(
                          "v-dialog",
                          {
                            attrs: {
                              fullscreen: "",
                              transition: "dialog-bottom-transition",
                              overlay: false
                            },
                            model: {
                              value: _vm.fullscreen.dialog,
                              callback: function($$v) {
                                _vm.$set(_vm.fullscreen, "dialog", $$v)
                              },
                              expression: "fullscreen.dialog"
                            }
                          },
                          [
                            _c(
                              "v-btn",
                              {
                                attrs: {
                                  slot: "activator",
                                  color: "primary",
                                  dark: ""
                                },
                                slot: "activator"
                              },
                              [_vm._v("Open Dialog")]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-card",
                              [
                                _c(
                                  "v-toolbar",
                                  { attrs: { dark: "", color: "primary" } },
                                  [
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: { icon: "", dark: "" },
                                        nativeOn: {
                                          click: function($event) {
                                            _vm.fullscreen.dialog = false
                                          }
                                        }
                                      },
                                      [_c("v-icon", [_vm._v("close")])],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c("v-toolbar-title", [_vm._v("Settings")]),
                                    _vm._v(" "),
                                    _c("v-spacer"),
                                    _vm._v(" "),
                                    _c(
                                      "v-toolbar-items",
                                      [
                                        _c(
                                          "v-btn",
                                          {
                                            attrs: { dark: "", flat: "" },
                                            nativeOn: {
                                              click: function($event) {
                                                _vm.dialog = false
                                              }
                                            }
                                          },
                                          [_vm._v("Save")]
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list",
                                  {
                                    attrs: { "three-line": "", subheader: "" }
                                  },
                                  [
                                    _c("v-subheader", [
                                      _vm._v("User Controls")
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "v-list-tile",
                                      { attrs: { avatar: "" } },
                                      [
                                        _c(
                                          "v-list-tile-content",
                                          [
                                            _c("v-list-tile-title", [
                                              _vm._v("Content filtering")
                                            ]),
                                            _vm._v(" "),
                                            _c("v-list-tile-sub-title", [
                                              _vm._v(
                                                "Set the content filtering level to restrict apps that can be downloaded"
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
                                      "v-list-tile",
                                      { attrs: { avatar: "" } },
                                      [
                                        _c(
                                          "v-list-tile-content",
                                          [
                                            _c("v-list-tile-title", [
                                              _vm._v("Password")
                                            ]),
                                            _vm._v(" "),
                                            _c("v-list-tile-sub-title", [
                                              _vm._v(
                                                "Require password for purchase or use password to restrict purchase"
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
                                ),
                                _vm._v(" "),
                                _c("v-divider"),
                                _vm._v(" "),
                                _c(
                                  "v-list",
                                  {
                                    attrs: { "three-line": "", subheader: "" }
                                  },
                                  [
                                    _c("v-subheader", [_vm._v("General")]),
                                    _vm._v(" "),
                                    _c(
                                      "v-list-tile",
                                      { attrs: { avatar: "" } },
                                      [
                                        _c(
                                          "v-list-tile-action",
                                          [
                                            _c("v-checkbox", {
                                              model: {
                                                value:
                                                  _vm.fullscreen.notifications,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.fullscreen,
                                                    "notifications",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "fullscreen.notifications"
                                              }
                                            })
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-list-tile-content",
                                          [
                                            _c("v-list-tile-title", [
                                              _vm._v("Notifications")
                                            ]),
                                            _vm._v(" "),
                                            _c("v-list-tile-sub-title", [
                                              _vm._v(
                                                "Notify me about updates to apps or games that I downloaded"
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
                                      "v-list-tile",
                                      { attrs: { avatar: "" } },
                                      [
                                        _c(
                                          "v-list-tile-action",
                                          [
                                            _c("v-checkbox", {
                                              model: {
                                                value: _vm.fullscreen.sound,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.fullscreen,
                                                    "sound",
                                                    $$v
                                                  )
                                                },
                                                expression: "fullscreen.sound"
                                              }
                                            })
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-list-tile-content",
                                          [
                                            _c("v-list-tile-title", [
                                              _vm._v("Sound")
                                            ]),
                                            _vm._v(" "),
                                            _c("v-list-tile-sub-title", [
                                              _vm._v(
                                                "Auto-update apps at any time. Data charges may apply"
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
                                      "v-list-tile",
                                      { attrs: { avatar: "" } },
                                      [
                                        _c(
                                          "v-list-tile-action",
                                          [
                                            _c("v-checkbox", {
                                              model: {
                                                value: _vm.fullscreen.widgets,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.fullscreen,
                                                    "widgets",
                                                    $$v
                                                  )
                                                },
                                                expression: "fullscreen.widgets"
                                              }
                                            })
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-list-tile-content",
                                          [
                                            _c("v-list-tile-title", [
                                              _vm._v("Auto-add widgets")
                                            ]),
                                            _vm._v(" "),
                                            _c("v-list-tile-sub-title", [
                                              _vm._v(
                                                "Automatically add home screen widgets"
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
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { xl4: "" } },
                [
                  _c("v-widget", { attrs: { title: "Scrollable Dialog" } }, [
                    _c(
                      "div",
                      {
                        attrs: { slot: "widget-content" },
                        slot: "widget-content"
                      },
                      [
                        _c(
                          "v-dialog",
                          {
                            attrs: { scrollable: "", "max-width": "300px" },
                            model: {
                              value: _vm.scrollable.dialog,
                              callback: function($$v) {
                                _vm.$set(_vm.scrollable, "dialog", $$v)
                              },
                              expression: "scrollable.dialog"
                            }
                          },
                          [
                            _c(
                              "v-btn",
                              {
                                attrs: {
                                  slot: "activator",
                                  color: "primary",
                                  dark: ""
                                },
                                slot: "activator"
                              },
                              [_vm._v("Open Dialog")]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-card",
                              [
                                _c("v-card-title", [_vm._v("Select Country")]),
                                _vm._v(" "),
                                _c("v-divider"),
                                _vm._v(" "),
                                _c(
                                  "v-card-text",
                                  [
                                    _c(
                                      "v-radio-group",
                                      {
                                        attrs: { column: "" },
                                        model: {
                                          value: _vm.scrollable.name,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.scrollable,
                                              "name",
                                              $$v
                                            )
                                          },
                                          expression: "scrollable.name"
                                        }
                                      },
                                      [
                                        _c("v-radio", {
                                          attrs: {
                                            label: "Bahamas, The",
                                            value: "bahamas"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("v-radio", {
                                          attrs: {
                                            label: "Bahrain",
                                            value: "bahrain"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("v-radio", {
                                          attrs: {
                                            label: "Bangladesh",
                                            value: "bangladesh"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("v-radio", {
                                          attrs: {
                                            label: "Barbados",
                                            value: "barbados"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("v-radio", {
                                          attrs: {
                                            label: "Belarus",
                                            value: "belarus"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("v-radio", {
                                          attrs: {
                                            label: "Belgium",
                                            value: "belgium"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("v-radio", {
                                          attrs: {
                                            label: "Belize",
                                            value: "belize"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("v-radio", {
                                          attrs: {
                                            label: "Benin",
                                            value: "benin"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("v-radio", {
                                          attrs: {
                                            label: "Bhutan",
                                            value: "bhutan"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("v-radio", {
                                          attrs: {
                                            label: "Bolivia",
                                            value: "bolivia"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("v-radio", {
                                          attrs: {
                                            label: "Bosnia and Herzegovina",
                                            value: "bosnia"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("v-radio", {
                                          attrs: {
                                            label: "Botswana",
                                            value: "botswana"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("v-radio", {
                                          attrs: {
                                            label: "Brazil",
                                            value: "brazil"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("v-radio", {
                                          attrs: {
                                            label: "Brunei",
                                            value: "brunei"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("v-radio", {
                                          attrs: {
                                            label: "Bulgaria",
                                            value: "bulgaria"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("v-radio", {
                                          attrs: {
                                            label: "Burkina Faso",
                                            value: "burkina"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("v-radio", {
                                          attrs: {
                                            label: "Burma",
                                            value: "burma"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("v-radio", {
                                          attrs: {
                                            label: "Burundi",
                                            value: "burundi"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("v-divider"),
                                _vm._v(" "),
                                _c(
                                  "v-card-actions",
                                  [
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: {
                                          color: "blue darken-1",
                                          flat: ""
                                        },
                                        nativeOn: {
                                          click: function($event) {
                                            _vm.scrollable.dialog = false
                                          }
                                        }
                                      },
                                      [_vm._v("Close")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: {
                                          color: "blue darken-1",
                                          flat: ""
                                        },
                                        nativeOn: {
                                          click: function($event) {
                                            _vm.scrollable.dialog = false
                                          }
                                        }
                                      },
                                      [_vm._v("Save")]
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
    require("vue-hot-reload-api")      .rerender("data-v-75776753", module.exports)
  }
}

/***/ })

});