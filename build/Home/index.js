(function(){
      
  var createPageHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(17)
var $app_style$ = __webpack_require__(18)
var $app_script$ = __webpack_require__(19)

$app_define$('@app-component/recblock', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(16)
__webpack_require__(23)
__webpack_require__(27)
var $app_template$ = __webpack_require__(31)
var $app_style$ = __webpack_require__(32)
var $app_script$ = __webpack_require__(33)

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})

$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.5'})


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0)
var $app_template$ = __webpack_require__(20)
var $app_style$ = __webpack_require__(21)
var $app_script$ = __webpack_require__(22)

$app_define$('@app-component/rechomelist', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "bookBlocks"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "bookBlockTitle"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return this.blocktitle}
          }
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "title_border"
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": function () {return [this.clazz]},
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "bookBlock"
          ],
          "repeat": function () {return this.books},
          "children": [
            {
              "type": "image",
              "attr": {
                "src": function () {return this.$item.image}
              },
              "classList": [
                "bookCover"
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "bookInfo"
              ],
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "bookName"
                  ],
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.$item.name}
                      }
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "bookAuthor"
                  ],
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.$item.author}
                      }
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {
                    "show": function () {return this.template=='LIST'}
                  },
                  "classList": [
                    "bookDesc"
                  ],
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.$item.summary}
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = {
  ".bookBlocks": {
    "flexDirection": "column",
    "justifyContent": "center"
  },
  ".bookBlocks .bookBlockTitle": {
    "width": "100%",
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "bookBlocks"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "bookBlockTitle"
        }
      ]
    }
  },
  ".bookBlocks .bookBlockTitle text": {
    "fontSize": "44px",
    "color": "#000000",
    "height": "50px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "bookBlocks"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "bookBlockTitle"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "text"
        }
      ]
    }
  },
  ".bookBlocks .bookBlockTitle .title_border": {
    "width": "56px",
    "height": "8px",
    "backgroundColor": "#04bfce",
    "marginTop": "24px",
    "marginBottom": "44px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "bookBlocks"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "bookBlockTitle"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "title_border"
        }
      ]
    }
  },
  ".blockCont": {
    "flexDirection": "row",
    "flexWrap": "wrap",
    "justifyContent": "space-between",
    "width": "984px",
    "marginLeft": "48px"
  },
  ".blockCont .bookBlock": {
    "flexDirection": "column",
    "width": "264px",
    "flexGrow": 1,
    "flexShrink": 0,
    "marginBottom": "44px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "blockCont"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "bookBlock"
        }
      ]
    }
  },
  ".blockCont .bookBlock .bookInfo": {
    "flexDirection": "column",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "blockCont"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "bookBlock"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "bookInfo"
        }
      ]
    }
  },
  ".blockCont .bookBlock .bookCover": {
    "width": "264px",
    "height": "378px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "blockCont"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "bookBlock"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "bookCover"
        }
      ]
    }
  },
  ".blockCont .bookBlock .bookName": {
    "height": "100px",
    "alignItems": "flex-start",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "blockCont"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "bookBlock"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "bookName"
        }
      ]
    }
  },
  ".blockCont .bookBlock .bookName text": {
    "fontSize": "40px",
    "textAlign": "left",
    "width": "264px",
    "color": "#000000",
    "textOverflow": "ellipsis",
    "lines": 2,
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "blockCont"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "bookBlock"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "bookName"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "text"
        }
      ]
    }
  },
  ".blockCont .bookBlock .bookAuthor text": {
    "width": "264px",
    "fontSize": "36px",
    "color": "#9b9b9b",
    "textOverflow": "ellipsis",
    "lines": 1,
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "blockCont"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "bookBlock"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "bookAuthor"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "text"
        }
      ]
    }
  },
  ".bookListCont": {
    "flexDirection": "column",
    "width": "984px",
    "marginLeft": "48px"
  },
  ".bookListCont .bookBlock": {
    "flexDirection": "row",
    "width": "100%",
    "marginBottom": "64px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "bookListCont"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "bookBlock"
        }
      ]
    }
  },
  ".bookListCont .bookBlock image": {
    "flexGrow": 1,
    "flexShrink": 0,
    "marginRight": "50px",
    "width": "210px",
    "height": "300px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "bookListCont"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "bookBlock"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "image"
        }
      ]
    }
  },
  ".bookListCont .bookBlock .bookInfo": {
    "flexDirection": "column",
    "alignItems": "flex-start",
    "width": "724px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "bookListCont"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "bookBlock"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "bookInfo"
        }
      ]
    }
  },
  ".bookListCont .bookBlock .bookInfo .bookName text": {
    "width": "100%",
    "fontSize": "50px",
    "color": "#000000",
    "lines": 1,
    "textOverflow": "ellipsis",
    "lineHeight": "90px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "bookListCont"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "bookBlock"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "bookInfo"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "bookName"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "text"
        }
      ]
    }
  },
  ".bookListCont .bookBlock .bookInfo .bookAuthor text": {
    "width": "100%",
    "fontSize": "36px",
    "color": "#686868",
    "lines": 1,
    "textOverflow": "ellipsis",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "bookListCont"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "bookBlock"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "bookInfo"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "bookAuthor"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "text"
        }
      ]
    }
  },
  ".bookListCont .bookBlock .bookInfo .bookDesc text": {
    "fontSize": "36px",
    "color": "#9c9c9c",
    "lines": 2,
    "textOverflow": "ellipsis",
    "lineHeight": "50px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "bookListCont"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "bookBlock"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "bookInfo"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "bookDesc"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "text"
        }
      ]
    }
  }
}

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: ['blocktitle', 'books', 'template'],
    data: {
        clazz: ''
    },
    onInit: function onInit() {
        if (this.template == 'LIST') {
            this.clazz = 'bookListCont';
        } else if (this.template == "GRID") {
            this.clazz = 'blockCont';
        }
        console.log(this.template, this.clazz);
        console.log(this.books);
    }
};}

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = {
  "type": "list",
  "attr": {},
  "classList": [
    "item-list"
  ],
  "events": {
    "scrollbottom": "getListData"
  },
  "children": [
    {
      "type": "list-item",
      "attr": {
        "type": "productLeft"
      },
      "repeat": function () {return this.bookArr},
      "classList": [
        "item-list-item"
      ],
      "children": [
        {
          "type": "recblock",
          "attr": {
            "blocktitle": function () {return this.$item.title},
            "books": function () {return this.$item.books},
            "template": function () {return this.$item.template}
          }
        }
      ]
    },
    {
      "type": "list-item",
      "attr": {
        "type": "loadStatus"
      },
      "classList": [
        "load-status"
      ],
      "children": [
        {
          "type": "progress",
          "attr": {
            "type": "circular",
            "show": function () {return !this.listData.noMore}
          }
        },
        {
          "type": "text",
          "attr": {
            "show": function () {return !this.listData.noMore},
            "value": "加载更多"
          }
        }
      ]
    }
  ]
}

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = {
  ".load-status": {
    "display": "flex",
    "justifyContent": "center",
    "marginTop": "5px",
    "marginRight": "5px",
    "marginBottom": "5px",
    "marginLeft": "5px"
  },
  ".load-status progress": {
    "marginRight": "20px",
    "fontSize": "48px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "load-status"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "progress"
        }
      ]
    }
  },
  ".load-status text": {
    "fontSize": "48px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "load-status"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "text"
        }
      ]
    }
  }
}

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var project = 'api',
    version = 'v1';
exports.default = {
    props: ['startload'],
    data: {
        listData: {
            params: {
                channel: 4,
                offset: 0,
                count: 10
            },
            noMore: false
        },
        bookArr: []
    },
    onInit: function onInit() {
        var self = this;

        self.$watch('startload', 'loadStatusChange');
    },
    loadStatusChange: function loadStatusChange() {
        var self = this;
        if (self.startload) {
            self.requestOnReady(function () {
                self.getListData();
            });
        }
    },

    requestOnReady: function requestOnReady(fn) {
        var self = this;
        if (self.$app.$http) {
            fn && fn();
        } else {
            setTimeout(function () {
                self.requestOnReady.call(self, fn);
            }, 200);
        }
    },
    getListData: function getListData() {
        var self = this;
        if (self.listData.noMore) return;
        this.get('public/homepage', self.listData.params, function (res) {
            var recommendations = res.recommendations;
            self.listData.params.offset += self.listData.params.count;
            if (self.listData.params.offset >= res.total || recommendations.length == 0) self.listData.noMore = true;

            recommendations.forEach(function (element, index) {
                if (element.template == 'AD') recommendations.splice(index, 1);
            });
            self.bookArr = self.bookArr.concat(recommendations);
        }, function (err) {
            console.log('请求出错: ' + err);
        });
    },
    get: function get(url, params, success, fail) {
        this.$app.$http.get(project + '/' + version + '/' + url, params).then(function (response) {
            console.log(response, url);
            success && success(response.data.value);
        }).catch(function (error) {
            console.log(error);
            fail && fail(error);
        });
    }
};}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0)
var $app_template$ = __webpack_require__(24)
var $app_style$ = __webpack_require__(25)
var $app_script$ = __webpack_require__(26)

$app_define$('@app-component/recmalelist', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = {
  "type": "list",
  "attr": {},
  "classList": [
    "item-list"
  ],
  "events": {
    "scrollbottom": "getListData"
  },
  "children": [
    {
      "type": "list-item",
      "attr": {
        "type": "productLeft"
      },
      "repeat": function () {return this.bookArr},
      "classList": [
        "item-list-item"
      ],
      "children": [
        {
          "type": "recblock",
          "attr": {
            "blocktitle": function () {return this.$item.title},
            "books": function () {return this.$item.books},
            "template": function () {return this.$item.template}
          }
        }
      ]
    },
    {
      "type": "list-item",
      "attr": {
        "type": "loadStatus"
      },
      "classList": [
        "load-status"
      ],
      "children": [
        {
          "type": "progress",
          "attr": {
            "type": "circular",
            "show": function () {return !this.listData.noMore}
          }
        },
        {
          "type": "text",
          "attr": {
            "show": function () {return !this.listData.noMore},
            "value": "加载更多"
          }
        }
      ]
    }
  ]
}

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = {
  ".load-status": {
    "display": "flex",
    "justifyContent": "center",
    "marginTop": "5px",
    "marginRight": "5px",
    "marginBottom": "5px",
    "marginLeft": "5px"
  },
  ".load-status progress": {
    "marginRight": "20px",
    "fontSize": "48px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "load-status"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "progress"
        }
      ]
    }
  },
  ".load-status text": {
    "fontSize": "48px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "load-status"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "text"
        }
      ]
    }
  }
}

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var project = 'api',
    version = 'v1';
exports.default = {
    props: ['startload'],
    data: {
        listData: {
            params: {
                channel: 1,
                offset: 0,
                count: 10
            },
            noMore: false
        },
        bookArr: []
    },
    onInit: function onInit() {
        var self = this;

        self.$watch('startload', 'loadStatusChange');
    },
    loadStatusChange: function loadStatusChange() {
        var self = this;
        if (self.startload) {
            self.requestOnReady(function () {
                self.getListData();
            });
        }
    },

    requestOnReady: function requestOnReady(fn) {
        var self = this;
        if (self.$app.$http) {
            fn && fn();
        } else {
            setTimeout(function () {
                self.requestOnReady.call(self, fn);
            }, 200);
        }
    },
    getListData: function getListData() {
        var self = this;
        if (self.listData.noMore) return;
        this.get('public/homepage', self.listData.params, function (res) {
            var recommendations = res.recommendations;
            self.listData.params.offset += self.listData.params.count;
            if (self.listData.params.offset >= res.total || recommendations.length == 0) self.listData.noMore = true;

            recommendations.forEach(function (element, index) {
                if (element.template == 'AD') recommendations.splice(index, 1);
            });
            self.bookArr = self.bookArr.concat(recommendations);
        }, function (err) {
            console.log('请求出错: ' + err);
        });
    },
    get: function get(url, params, success, fail) {
        this.$app.$http.get(project + '/' + version + '/' + url, params).then(function (response) {
            console.log(response, url);
            success && success(response.data.value);
        }).catch(function (error) {
            console.log(error);
            fail && fail(error);
        });
    }
};}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0)
var $app_template$ = __webpack_require__(28)
var $app_style$ = __webpack_require__(29)
var $app_script$ = __webpack_require__(30)

$app_define$('@app-component/recfemalelist', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = {
  "type": "list",
  "attr": {},
  "classList": [
    "item-list"
  ],
  "events": {
    "scrollbottom": "getListData"
  },
  "children": [
    {
      "type": "list-item",
      "attr": {
        "type": "productLeft"
      },
      "repeat": function () {return this.bookArr},
      "classList": [
        "item-list-item"
      ],
      "children": [
        {
          "type": "recblock",
          "attr": {
            "blocktitle": function () {return this.$item.title},
            "books": function () {return this.$item.books},
            "template": function () {return this.$item.template}
          }
        }
      ]
    },
    {
      "type": "list-item",
      "attr": {
        "type": "loadStatus"
      },
      "classList": [
        "load-status"
      ],
      "children": [
        {
          "type": "progress",
          "attr": {
            "type": "circular",
            "show": function () {return !this.listData.noMore}
          }
        },
        {
          "type": "text",
          "attr": {
            "show": function () {return !this.listData.noMore},
            "value": "加载更多"
          }
        }
      ]
    }
  ]
}

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = {
  ".load-status": {
    "display": "flex",
    "justifyContent": "center",
    "marginTop": "5px",
    "marginRight": "5px",
    "marginBottom": "5px",
    "marginLeft": "5px"
  },
  ".load-status progress": {
    "marginRight": "20px",
    "fontSize": "48px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "load-status"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "progress"
        }
      ]
    }
  },
  ".load-status text": {
    "fontSize": "48px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "load-status"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "text"
        }
      ]
    }
  }
}

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var project = 'api',
    version = 'v1';
exports.default = {
    props: ['startload'],
    data: {
        listData: {
            params: {
                channel: 2,
                offset: 0,
                count: 10
            },
            noMore: false
        },
        bookArr: []
    },
    onInit: function onInit() {
        var self = this;

        self.$watch('startload', 'loadStatusChange');
    },
    loadStatusChange: function loadStatusChange() {
        var self = this;
        if (self.startload) {
            self.requestOnReady(function () {
                self.getListData();
            });
        }
    },

    requestOnReady: function requestOnReady(fn) {
        var self = this;
        if (self.$app.$http) {
            fn && fn();
        } else {
            setTimeout(function () {
                self.requestOnReady.call(self, fn);
            }, 200);
        }
    },
    getListData: function getListData() {
        var self = this;
        if (self.listData.noMore) return;
        this.get('public/homepage', self.listData.params, function (res) {
            var recommendations = res.recommendations;
            self.listData.params.offset += self.listData.params.count;
            if (self.listData.params.offset >= res.total || recommendations.length == 0) self.listData.noMore = true;

            recommendations.forEach(function (element, index) {
                if (element.template == 'AD') recommendations.splice(index, 1);
            });
            self.bookArr = self.bookArr.concat(recommendations);
        }, function (err) {
            console.log('请求出错: ' + err);
        });
    },
    get: function get(url, params, success, fail) {
        this.$app.$http.get(project + '/' + version + '/' + url, params).then(function (response) {
            console.log(response, url);
            success && success(response.data.value);
        }).catch(function (error) {
            console.log(error);
            fail && fail(error);
        });
    }
};}

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "container"
  ],
  "children": [
    {
      "type": "tabs",
      "attr": {
        "index": "1"
      },
      "events": {
        "change": "tabsChange"
      },
      "children": [
        {
          "type": "tab-bar",
          "attr": {},
          "classList": [
            "tab-bar"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "tid": "id",
                "value": function () {return this.$item}
              },
              "repeat": function () {return this.titles},
              "classList": [
                "item-tabbar-text"
              ]
            }
          ]
        },
        {
          "type": "tab-content",
          "attr": {},
          "classList": [
            "tab-content"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "tab-group-content"
              ],
              "children": [
                {
                  "type": "list",
                  "attr": {},
                  "classList": [
                    "item-list"
                  ],
                  "children": [
                    {
                      "type": "list-item",
                      "attr": {
                        "type": "item"
                      },
                      "repeat": function () {return this.bookshelf},
                      "classList": [
                        "item-list-item"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "tab-group-content"
              ],
              "children": [
                {
                  "type": "rechomelist",
                  "attr": {
                    "startload": function () {return this.homeLoadStatus}
                  }
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "tab-group-content"
              ],
              "children": [
                {
                  "type": "recmalelist",
                  "attr": {
                    "startload": function () {return this.maleLoadStatus}
                  }
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "tab-group-content"
              ],
              "children": [
                {
                  "type": "recfemalelist",
                  "attr": {
                    "startload": function () {return this.femaleLoadStatus}
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = {
  ".tab-bar text": {
    "fontSize": "42px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-bar"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "text"
        }
      ]
    }
  },
  ".container": {
    "flexDirection": "column",
    "flex": 1
  },
  ".tab-bar": {
    "height": "100px",
    "borderBottomWidth": "2px",
    "borderTopColor": "#e5e5e5",
    "borderRightColor": "#e5e5e5",
    "borderBottomColor": "#e5e5e5",
    "borderLeftColor": "#e5e5e5"
  },
  ".tab-content": {
    "flex": 1,
    "backgroundColor": "#ffffff"
  },
  ".tab-group-content": {
    "paddingTop": "24px"
  },
  ".item-list-item": {
    "paddingTop": "62px",
    "paddingRight": "0px",
    "paddingBottom": "0px",
    "paddingLeft": "0px",
    "borderBottomWidth": "1px",
    "borderTopColor": "#BBBBBB",
    "borderRightColor": "#BBBBBB",
    "borderBottomColor": "#BBBBBB",
    "borderLeftColor": "#BBBBBB"
  },
  ".item-list-item-text": {
    "fontSize": "32px",
    "color": "#908C8C"
  },
  ".item-tabbar-text": {
    "color": "#666666",
    "height": "100px",
    "textAlign": "center",
    "color:active": "#04bfce",
    "borderBottomWidth:active": "4px",
    "borderTopColor:active": "#04bfce",
    "borderRightColor:active": "#04bfce",
    "borderBottomColor:active": "#04bfce",
    "borderLeftColor:active": "#04bfce"
  },
  ".load-status": {
    "display": "flex",
    "justifyContent": "center",
    "marginTop": "5px",
    "marginRight": "5px",
    "marginBottom": "5px",
    "marginLeft": "5px"
  },
  ".load-status progress": {
    "marginRight": "20px",
    "fontSize": "48px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "load-status"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "progress"
        }
      ]
    }
  },
  ".load-status text": {
    "fontSize": "48px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "load-status"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "text"
        }
      ]
    }
  }
}

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var project = 'api',
    version = 'v1';
module.exports = {
    data: function () {return {
        titles: ['书架', '出版物', '男生小说', '女生小说'],
        bookshelf: [],
        publication: [],
        MaleChannel: [],
        FemaleChannel: [],
        homeData: {
            params: {
                channel: 4,
                offset: 0,
                count: 10
            },
            noMore: false
        },
        homeLoadStatus: true,
        maleLoadStatus: false,
        femaleLoadStatus: false
    }},
    onInit: function onInit(e) {
        var self = this;
        self.$page.setTitleBar({
            text: '顶部选项卡'
        });
        self.requestOnReady(function () {
            self.getHomeData();
        });
    },
    tabsChange: function tabsChange(e) {
        var self = this;
        var index = e.index;
        switch (index) {
            case 1:
                break;
            case 2:
                self.maleLoadStatus = true;
                break;
            case 3:
                self.femaleLoadStatus = true;
                break;
            default:
                break;
        }
    },

    requestOnReady: function requestOnReady(fn) {
        var self = this;
        if (self.$app.$http) {
            fn && fn();
        } else {
            setTimeout(function () {
                self.requestOnReady.call(self, fn);
            }, 200);
        }
    },
    getHomeData: function getHomeData() {
        var self = this;
        if (self.homeData.noMore) return;
        this.get('public/homepage', self.homeData.params, function (res) {
            var recommendations = res.recommendations;
            self.homeData.params.offset += self.homeData.params.count;
            if (self.homeData.params.offset >= res.total || recommendations.length == 0) self.homeData.noMore = true;

            recommendations.forEach(function (element, index) {
                if (element.template == 'AD') recommendations.splice(index, 1);
            });
            self.publication = self.publication.concat(recommendations);
        }, function (err) {
            console.log('请求出错: ' + err);
        });
    },
    get: function get(url, params, success, fail) {
        this.$app.$http.get(project + '/' + version + '/' + url, params).then(function (response) {
            console.log(response, url);
            success && success(response.data.value);
        }).catch(function (error) {
            console.log(error);
            fail && fail(error);
        });
    }
};

var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];

if (moduleOwn.data && accessors.some(function (acc) {
    return moduleOwn[acc];
})) {
    throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
} else if (!moduleOwn.data) {
    moduleOwn.data = {};
    moduleOwn._descriptor = {};
    accessors.forEach(function (acc) {
        var accType = _typeof(moduleOwn[acc]);
        if (accType === 'object') {
            moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
            for (var name in moduleOwn[acc]) {
                moduleOwn._descriptor[name] = { access: acc };
            }
        } else if (accType === 'function') {
            console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
        }
    });
}}

/***/ })
/******/ ]);
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map