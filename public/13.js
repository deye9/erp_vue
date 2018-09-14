webpackJsonp([13],{

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(717)
/* template */
var __vue_template__ = __webpack_require__(718)
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
Component.options.__file = "front_end/pages/widgets/Post.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-220aedba", Component.options)
  } else {
    hotAPI.reload("data-v-220aedba", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Projects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getProject; });
var Projects = [{
  username: 'Dessie',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ludwiczakpawel/128.jpg',
  name: 'Template PSD',
  deadline: '2 days later',
  progress: 90,
  color: 'pink'
}, {
  username: 'Jakayla',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/suprb/128.jpg',
  name: 'Logo Design',
  deadline: '1 weeks later',
  progress: 70,
  color: 'success'
}, {
  username: 'Ludwiczakpawel',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ludwiczakpawel/128.jpg',
  name: 'REST API',
  deadline: '1 Month later',
  progress: 50,
  color: 'info'
}, {
  username: 'Damenleeturks',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/damenleeturks/128.jpg',
  name: 'API Unit Test',
  deadline: '2 Month later',
  progress: 30,
  color: 'teal'
}, {
  username: 'Caspergrl',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/caspergrl/128.jpg',
  name: 'Project Deploy',
  deadline: 'half year later',
  progress: 15,
  color: 'grey'
}];

var getProject = function getProject(limit) {
  return limit ? Projects.slice(0, limit) : Projects;
};



/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(294)
/* template */
var __vue_template__ = __webpack_require__(295)
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
Component.options.__file = "front_end/components/widgets/list/PlainTable.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-177b7b14", Component.options)
  } else {
    hotAPI.reload("data-v-177b7b14", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_project__ = __webpack_require__(196);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      headers: [{
        text: '',
        align: 'center',
        sortable: false,
        value: 'avatar'
      }, {
        text: 'Name',
        align: 'left',
        value: 'name'
      }, { text: 'Deadline', value: 'deadline' }, { text: 'Progress', value: 'progress' }, { text: 'Action', value: 'action', align: 'right' }]
    };
  },

  computed: {
    projects: function projects() {
      return __WEBPACK_IMPORTED_MODULE_0__api_project__["a" /* Projects */];
    }
  }
});

/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    [
      _c(
        "v-toolbar",
        { attrs: { card: "", dense: "", color: "transparent" } },
        [
          _c("v-toolbar-title", [_c("h4", [_vm._v("Project")])]),
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
      _c("v-divider"),
      _vm._v(" "),
      _c(
        "v-card-text",
        { staticClass: "pa-0" },
        [
          [
            _c("v-data-table", {
              staticClass: "elevation-0",
              attrs: {
                headers: _vm.headers,
                items: _vm.projects,
                "hide-actions": ""
              },
              scopedSlots: _vm._u([
                {
                  key: "items",
                  fn: function(props) {
                    return [
                      _c(
                        "td",
                        [
                          _c("v-avatar", { attrs: { size: "36px" } }, [
                            _c("img", {
                              attrs: {
                                src: props.item.avatar,
                                alt: props.item.username
                              }
                            })
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(props.item.name))]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-xs-left" }, [
                        _vm._v(_vm._s(props.item.deadline))
                      ]),
                      _vm._v(" "),
                      _c(
                        "td",
                        { staticClass: "text-xs-left" },
                        [
                          _c("v-progress-linear", {
                            attrs: {
                              value: props.item.progress,
                              height: "5",
                              color: props.item.color
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        { staticClass: "text-xs-right" },
                        [
                          _c(
                            "v-btn",
                            { attrs: { flat: "", icon: "", color: "grey" } },
                            [_c("v-icon", [_vm._v("edit")])],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            { attrs: { flat: "", icon: "", color: "grey" } },
                            [_c("v-icon", [_vm._v("delete")])],
                            1
                          )
                        ],
                        1
                      )
                    ]
                  }
                }
              ])
            })
          ],
          _vm._v(" "),
          _c("v-divider")
        ],
        2
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
    require("vue-hot-reload-api")      .rerender("data-v-177b7b14", module.exports)
  }
}

/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(297)
/* template */
var __vue_template__ = __webpack_require__(299)
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
Component.options.__file = "front_end/components/widgets/list/PlainTableOrder.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-63fb27ca", Component.options)
  } else {
    hotAPI.reload("data-v-63fb27ca", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_order__ = __webpack_require__(298);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      headers: [{
        text: '#',
        align: 'left',
        sortable: false,
        value: 'id'
      }, { text: 'Product', value: 'deadline' }, { text: 'Price', value: 'progress' }, { text: 'Status', value: 'status' }],
      items: __WEBPACK_IMPORTED_MODULE_0__api_order__["a" /* default */],
      colors: {
        processing: 'blue',
        sent: 'red',
        delivered: 'green'
      }
    };
  },

  computed: {
    randomColor: function randomColor() {
      var item = Math.floor(Math.random() * this.colors.length);
      return this.colors[item];
    }
  },
  methods: {
    getColorByStatus: function getColorByStatus(status) {
      return this.colors[status];
    }
  }
});

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([{
  id: '150',
  product: 'iPhone6',
  price: '$699',
  status: 'processing'
}, {
  id: '151',
  product: 'iPad Pro',
  price: '$299',
  status: 'sent'
}, {
  id: '300',
  product: 'Microsoft surface',
  price: '$1,699',
  status: 'processing'
}, {
  id: '320',
  product: 'Galaxy S7 edge',
  price: '$729',
  status: 'processing'
}, {
  id: '501',
  product: '128G SD Card',
  price: '$699',
  status: 'delivered'
}]);

/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    [
      _c(
        "v-toolbar",
        { attrs: { card: "", dense: "", color: "transparent" } },
        [
          _c("v-toolbar-title", [_c("h4", [_vm._v("Order")])]),
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
      _c("v-divider"),
      _vm._v(" "),
      _c(
        "v-card-text",
        { staticClass: "pa-0" },
        [
          [
            _c("v-data-table", {
              staticClass: "elevation-0 table-striped",
              attrs: {
                headers: _vm.headers,
                items: _vm.items,
                "hide-actions": ""
              },
              scopedSlots: _vm._u([
                {
                  key: "items",
                  fn: function(props) {
                    return [
                      _c("td", [_vm._v(_vm._s(props.item.id))]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-xs-left" }, [
                        _vm._v(_vm._s(props.item.product))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-xs-left" }, [
                        _vm._v(_vm._s(props.item.price))
                      ]),
                      _vm._v(" "),
                      _c(
                        "td",
                        { staticClass: "text-xs-left" },
                        [
                          _c(
                            "v-chip",
                            {
                              attrs: {
                                label: "",
                                small: "",
                                color: _vm.getColorByStatus(props.item.status),
                                "text-color": "white"
                              }
                            },
                            [_vm._v(_vm._s(props.item.status))]
                          )
                        ],
                        1
                      )
                    ]
                  }
                }
              ])
            })
          ],
          _vm._v(" "),
          _c("v-divider")
        ],
        2
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
    require("vue-hot-reload-api")      .rerender("data-v-63fb27ca", module.exports)
  }
}

/***/ }),

/***/ 495:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(496)
/* template */
var __vue_template__ = __webpack_require__(498)
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
Component.options.__file = "front_end/components/widgets/list/MessageList.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-21f12205", Component.options)
  } else {
    hotAPI.reload("data-v-21f12205", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_message__ = __webpack_require__(497);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      items: __WEBPACK_IMPORTED_MODULE_0__api_message__["a" /* default */]
    };
  },
  methods: {
    handleClick: function handleClick(e) {
      console.log(e);
    }
  }

});

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([{ avatar: 'https://randomuser.me/api/portraits/men/1.jpg', title: 'Brunch this weekend?', subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood ?" }, { divider: true, inset: true }, { avatar: 'https://randomuser.me/api/portraits/men/2.jpg', title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>', subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend." }, { divider: true, inset: true }, { avatar: 'https://randomuser.me/api/portraits/men/3.jpg', title: 'Oui oui', subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?" }, { divider: true, inset: true }, { avatar: 'https://randomuser.me/api/portraits/men/1.jpg', title: 'Dash', subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?" }]);

/***/ }),

/***/ 498:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    [
      _c(
        "v-toolbar",
        { attrs: { card: "", dense: "", color: "transparent" } },
        [_c("v-toolbar-title", [_c("h4", [_vm._v("Message")])])],
        1
      ),
      _vm._v(" "),
      _c("v-divider"),
      _vm._v(" "),
      _c(
        "v-card-text",
        { staticClass: "pa-0" },
        [
          _c(
            "v-list",
            { staticClass: "pa-0", attrs: { "two-line": "" } },
            [
              _vm._l(_vm.items, function(item, index) {
                return [
                  item.header
                    ? _c("v-subheader", { key: item.header }, [
                        _vm._v(_vm._s(item.header))
                      ])
                    : item.divider
                      ? _c("v-divider", { key: index })
                      : _c(
                          "v-list-tile",
                          {
                            key: item.title,
                            attrs: { avatar: "" },
                            on: { click: _vm.handleClick }
                          },
                          [
                            _c("v-list-tile-avatar", [
                              _c("img", { attrs: { src: item.avatar } })
                            ]),
                            _vm._v(" "),
                            _c(
                              "v-list-tile-content",
                              [
                                _c("v-list-tile-title", {
                                  domProps: { innerHTML: _vm._s(item.title) }
                                }),
                                _vm._v(" "),
                                _c("v-list-tile-sub-title", {
                                  domProps: { innerHTML: _vm._s(item.subtitle) }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        )
                ]
              })
            ],
            2
          ),
          _vm._v(" "),
          _c("v-divider"),
          _vm._v(" "),
          _c("v-btn", { staticClass: "ma-0", attrs: { block: "", flat: "" } }, [
            _vm._v("All")
          ]),
          _vm._v(" "),
          _c("v-divider")
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
    require("vue-hot-reload-api")      .rerender("data-v-21f12205", module.exports)
  }
}

/***/ }),

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_widgets_list_MessageList__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_widgets_list_MessageList___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_widgets_list_MessageList__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_widgets_list_NotificationList__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_widgets_list_NotificationList___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_widgets_list_NotificationList__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_widgets_list_PlainTable__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_widgets_list_PlainTable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_widgets_list_PlainTable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_widgets_list_PlainTableOrder__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_widgets_list_PlainTableOrder___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_widgets_list_PlainTableOrder__);
//
//
//
//
//
//
//
//
//
//
//
//
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
    MessageList: __WEBPACK_IMPORTED_MODULE_0__components_widgets_list_MessageList___default.a,
    NotificationList: __WEBPACK_IMPORTED_MODULE_1__components_widgets_list_NotificationList___default.a,
    PlainTable: __WEBPACK_IMPORTED_MODULE_2__components_widgets_list_PlainTable___default.a,
    PlainTableOrder: __WEBPACK_IMPORTED_MODULE_3__components_widgets_list_PlainTableOrder___default.a
  },
  data: function data() {
    return {};
  },

  methods: {
    handleClick: function handleClick(e) {
      console.log(e);
    }
  }

});

/***/ }),

/***/ 718:
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
              _c("v-flex", { attrs: { lg6: "" } }, [_c("message-list")], 1),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { lg6: "" } },
                [_c("notification-list")],
                1
              ),
              _vm._v(" "),
              _c("v-flex", { attrs: { lg6: "" } }, [_c("plain-table")], 1),
              _vm._v(" "),
              _c("v-flex", { attrs: { lg6: "" } }, [_c("plain-table-order")], 1)
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
    require("vue-hot-reload-api")      .rerender("data-v-220aedba", module.exports)
  }
}

/***/ })

});