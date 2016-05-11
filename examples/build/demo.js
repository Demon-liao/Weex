/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/e5b2b140904ff7c38b033ef8262d6ade", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	  __webpack_require__(1);
	  var log=__webpack_require__(9);
	  var someModule = __weex_require__('@weex-module/event')
	  __weex_module__.exports = {
	    data: function () {return {
	       cardNo:"",
	       OilItems:[
	          {
	            "id": 1,
	            "OilName": "100元",
	            "OilCode": "OilItem_10001",
	            "Discount": "9.95折",
	            "IsDefault": "false",
	            "ItemPrice": 99.5
	          },
	          {
	            "id": 2,
	            "OilName": "200元",
	            "OilCode": "OilItem_88888",
	            "Discount": "9.95折",
	            "IsDefault": "false",
	            "ItemPrice": 199
	          },
	          {
	            "id": 3,
	            "OilName": "500元",
	            "OilCode": "OilItem_10003",
	            "Discount": "9.95折",
	            "IsDefault": "true",
	            "ItemPrice": 497.5
	          },
	          {
	            "id": 4,
	            "OilName": "1000元",
	            "OilCode": "OilItem_10004",
	            "Discount": "9.95折",
	            "IsDefault": "false",
	            "ItemPrice": 995
	          }
	        ]
	    }},
	    ready:function  (argument) {
	      var _self=this;
	    // console.log(JSON.stringify(log))
	     /*this.$sendHttp({
	      "url":"http://192.168.60.240/test.js",
	      },function(data){
	        _self.OilItems=JSON.parse(data)
	     })*/
	    /* someModule.testLog("22",function(data){
	         _self.$call('modal', 'alert', {
	            'message': data,
	            'okTitle': "okTitle",
	            'cancelTitle': "cancelTitle"
	          },function(){

	          });
	     })*/
	      //this.$openURL("//baidu.com")
	    },
	    methods:{
	      itemClick:function(index){
	        var _index=index;
	        var _len=this.OilItems.length;
	        for (var i = 0; i < _len; i++) {
	          if(i!=_index){
	            this.OilItems[i].IsDefault="false";
	          }
	        };
	        this.OilItems[_index].IsDefault="true";
	        console.log(JSON.stringify(this.OilItems))
	      },
	      back:function(){
	        this.$call('modal', 'toast', {
	          'message': "back",
	          'duration': 1
	        });
	      },
	      input:function(e){
	       /* var a="aaa".replace("aa","1");
	        console.log(a);
	        var _e=JSON.stringify(e);
	        var _val=e.value.replace("\n","");
	        this.cardNo=_val;
	        //console.log(_e)
	        console.log(_val)*/
	      }
	    }
	  }
	  __weex_module__.exports.style=__webpack_require__(10); 

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "children": [
	    {
	      "type": "header",
	      "classList": [
	        "ycm-bar",
	        "ycm-bar-nav"
	      ],
	      "children": [
	        {
	          "type": "image",
	          "attr": {
	            "src": "http://192.168.60.240/weex/android/weex/examples/common/images/arrow@3x.png"
	          },
	          "classList": [
	            "ycm-bar-back"
	          ],
	          "events": {
	            "click": "back"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "ycm-title"
	          ],
	          "attr": {
	            "value": "油卡充值"
	          }
	        }
	      ]
	    },
	    {
	      "type": "scroller",
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "ycm-content-padded"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "f28"
	              ],
	              "attr": {
	                "value": "持卡信息"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "yk_info"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "yc_info_li"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "f28",
	                    "yc_info_tx"
	                  ],
	                  "style": {
	                    "flex": 1
	                  },
	                  "attr": {
	                    "value": "加油卡号"
	                  }
	                },
	                {
	                  "type": "input",
	                  "events": {
	                    "input": "input"
	                  },
	                  "attr": {
	                    "value": function () {return this.cardNo},
	                    "type": "tel",
	                    "placeholder": "请输入19位加油卡号"
	                  },
	                  "style": {
	                    "flex": 4
	                  },
	                  "classList": [
	                    "f28"
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "yc_info_li"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "f28",
	                    "yc_info_tx"
	                  ],
	                  "style": {
	                    "flex": 1
	                  },
	                  "attr": {
	                    "value": "确认卡号"
	                  }
	                },
	                {
	                  "type": "input",
	                  "style": {
	                    "flex": 4
	                  },
	                  "attr": {
	                    "type": "tel",
	                    "placeholder": "请再次确认卡号"
	                  },
	                  "classList": [
	                    "f28"
	                  ]
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "ycm-content-padded"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "f28"
	              ],
	              "attr": {
	                "value": "充值金额"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "czje"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "events": {
	                "click": function ($event) {this.itemClick(this.INDEX,$event)}
	              },
	              "classList": function () {return ['OilItem', 'OilItem_' + (this.IsDefault)]},
	              "attr": {
	                "index": function () {return this.id}
	              },
	              "repeat": function () {return this.OilItems},
	              "children": [
	                {
	                  "type": "text",
	                  "classList": function () {return ['f28', 'OilItem-tx', 'OilItem-tx-' + (this.IsDefault)]},
	                  "attr": {
	                    "value": function () {return this.OilName}
	                  }
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "info"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "info-t"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "info-t-tx"
	                  ],
	                  "attr": {
	                    "value": "加油卡充值说明"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "info-t-p"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "f28"
	                  ],
	                  "attr": {
	                    "value": "1. 充值订单的订单状态可以在充值记录中查询"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "info-t-p"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "f28"
	                  ],
	                  "attr": {
	                    "value": "2. 充值成功后，使用油卡加油前，请先将油卡交给加油站工作人员进行圈存，然后即可使用"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "info-t-p"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "f28"
	                  ],
	                  "attr": {
	                    "value": "3. 官方直充，全国通用，充值成功，立即到账"
	                  }
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "yk-ft"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "rule-box"
	              ],
	              "children": [
	                {
	                  "type": "switch",
	                  "attr": {
	                    "checked": "true"
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "f28"
	                  ],
	                  "style": {
	                    "paddingTop": 15
	                  },
	                  "attr": {
	                    "value": "我已阅读《用户充值协议》"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "pay-btn"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "pay-btn-tx"
	                  ],
	                  "attr": {
	                    "value": "待支付"
	                  }
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "rule-box": {
	    "paddingTop": 20,
	    "height": 88
	  },
	  "yk-ft": {
	    "paddingRight": 20,
	    "paddingLeft": 20,
	    "backgroundColor": "#f2f2f2",
	    "height": 400,
	    "marginTop": 20
	  },
	  "yk-ck": {
	    "width": 30,
	    "height": 30
	  },
	  "info": {
	    "paddingLeft": 20,
	    "paddingRight": 20
	  },
	  "info-t": {
	    "borderTopWidth": 1,
	    "borderColor": "#d8d8d8",
	    "marginTop": 20,
	    "marginBottom": 15
	  },
	  "info-t-p": {
	    "marginTop": 5
	  },
	  "info-t-tx": {
	    "fontSize": 32,
	    "color": "#999999",
	    "marginTop": 20
	  },
	  "yk_info": {
	    "backgroundColor": "#ffffff",
	    "paddingLeft": 20,
	    "paddingRight": 20,
	    "borderBottomWidth": 1,
	    "borderTopWidth": 1,
	    "borderColor": "#d8d8d8"
	  },
	  "yc_info_li": {
	    "height": 88,
	    "borderBottomWidth": 1,
	    "borderColor": "#d8d8d8",
	    "flexDirection": "row",
	    "alignItems": "flex-start"
	  },
	  "yc_info_tx": {
	    "paddingTop": 28
	  },
	  "czje": {
	    "paddingTop": 20,
	    "paddingRight": 20,
	    "paddingLeft": 10,
	    "borderTopWidth": 1,
	    "borderColor": "#d8d8d8",
	    "flexDirection": "row",
	    "alignItems": "flex-start",
	    "justifyContent": "space-between"
	  },
	  "OilItem": {
	    "flex": 1,
	    "width": 135,
	    "height": 76,
	    "borderWidth": 1,
	    "borderColor": "#ff7519",
	    "borderRadius": 10,
	    "textAlign": "center",
	    "position": "relative",
	    "fontSize": 28,
	    "marginLeft": 10,
	    "backgroundColor": "rgba(0,0,0,0)"
	  },
	  "OilItem_true": {
	    "backgroundColor": "#ff7519"
	  },
	  "OilItem-tx": {
	    "textAlign": "center",
	    "paddingTop": 18,
	    "color": "#ff7519"
	  },
	  "OilItem-tx-true": {
	    "color": "#ffffff"
	  },
	  "pay-btn": {
	    "borderWidth": 1,
	    "borderColor": "#ff7519",
	    "borderRadius": 10,
	    "textAlign": "center",
	    "position": "relative",
	    "fontSize": 28,
	    "height": 88,
	    "backgroundColor": "#ff7519",
	    "marginTop": 10
	  },
	  "pay-btn-tx": {
	    "color": "#ffffff",
	    "textAlign": "center",
	    "paddingTop": 25,
	    "fontSize": 28
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/e5b2b140904ff7c38b033ef8262d6ade", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/index", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	  __webpack_require__(2);
	  __webpack_require__(3);
	  __webpack_require__(4);
	  __webpack_require__(5);
	  __webpack_require__(6);

	})

/***/ },
/* 2 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/ui-button", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	  __weex_module__.exports = {
	    data: function () {return {
	      type: 'default',
	      size: 'large',
	      value: '',
	      click: null,
	      disabled: false
	    }},
	    methods: {
	      clicked: function(ev) {
	        if (this.disabled) return;
	        this.click(ev);
	      }
	    }
	  }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": function () {return ['btn', 'btn-' + (this.type), 'btn-sz-' + (this.size)]},
	  "events": {
	    "click": "clicked"
	  },
	  "style": {},
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['btn-txt', 'btn-txt-' + (this.type), 'btn-txt-sz-' + (this.size)]},
	      "attr": {
	        "value": function () {return this.value}
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "btn": {
	    "marginBottom": 0,
	    "alignItems": "center",
	    "justifyContent": "center",
	    "borderWidth": 1,
	    "borderStyle": "solid",
	    "borderColor": "#333333"
	  },
	  "btn-default": {
	    "color": "rgb(51,51,51)"
	  },
	  "btn-primary": {
	    "backgroundColor": "rgb(40,96,144)",
	    "borderColor": "rgb(40,96,144)"
	  },
	  "btn-success": {
	    "backgroundColor": "rgb(92,184,92)",
	    "borderColor": "rgb(76,174,76)"
	  },
	  "btn-info": {
	    "backgroundColor": "rgb(91,192,222)",
	    "borderColor": "rgb(70,184,218)"
	  },
	  "btn-warning": {
	    "backgroundColor": "rgb(240,173,78)",
	    "borderColor": "rgb(238,162,54)"
	  },
	  "btn-danger": {
	    "backgroundColor": "rgb(217,83,79)",
	    "borderColor": "rgb(212,63,58)"
	  },
	  "btn-link": {
	    "borderColor": "rgba(0,0,0,0)",
	    "borderRadius": 0
	  },
	  "btn-txt-default": {
	    "color": "rgb(51,51,51)"
	  },
	  "btn-txt-primary": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-success": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-info": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-warning": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-danger": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-link": {
	    "color": "rgb(51,122,183)"
	  },
	  "btn-sz-large": {
	    "width": 300,
	    "height": 100,
	    "paddingTop": 25,
	    "paddingBottom": 25,
	    "paddingLeft": 40,
	    "paddingRight": 40,
	    "borderRadius": 15
	  },
	  "btn-sz-middle": {
	    "width": 240,
	    "height": 80,
	    "paddingTop": 15,
	    "paddingBottom": 15,
	    "paddingLeft": 30,
	    "paddingRight": 30,
	    "borderRadius": 10
	  },
	  "btn-sz-small": {
	    "width": 170,
	    "height": 60,
	    "paddingTop": 12,
	    "paddingBottom": 12,
	    "paddingLeft": 25,
	    "paddingRight": 25,
	    "borderRadius": 7
	  },
	  "btn-txt-sz-large": {
	    "fontSize": 45
	  },
	  "btn-txt-sz-middle": {
	    "fontSize": 35
	  },
	  "btn-txt-sz-small": {
	    "fontSize": 30
	  }
	})
	})

/***/ },
/* 3 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/ui-hn", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	  __weex_module__.exports = {
	    data: function () {return {
	      level: 1,
	      value: ''
	    }},
	    methods: {}
	  }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": function () {return ['h' + (this.level)]},
	  "style": {
	    "justifyContent": "center"
	  },
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['txt-h' + (this.level)]},
	      "attr": {
	        "value": function () {return this.value}
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "h1": {
	    "height": 110,
	    "paddingTop": 20,
	    "paddingBottom": 20
	  },
	  "h2": {
	    "height": 110,
	    "paddingTop": 20,
	    "paddingBottom": 20
	  },
	  "h3": {
	    "height": 110,
	    "paddingTop": 20,
	    "paddingBottom": 20
	  },
	  "txt-h1": {
	    "fontSize": 70
	  },
	  "txt-h2": {
	    "fontSize": 52
	  },
	  "txt-h3": {
	    "fontSize": 42
	  }
	})
	})

/***/ },
/* 4 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/ui-list-item", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	  __weex_module__.exports = {
	    data: function () {return {
	      bgColor: '#ffffff',
	      click: function() {
	      }
	    }},
	    methods: {
	      touchstart: function() {
	        // FIXME android touch
	        // TODO adaptive opposite bgColor
	//        this.bgColor = '#e6e6e6';
	      },
	      touchend: function() {
	        // FIXME android touchend not triggered
	//        this.bgColor = '#ffffff';
	      }
	    }
	  }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "item"
	  ],
	  "events": {
	    "click": "click",
	    "touchstart": "touchstart",
	    "touchend": "touchend"
	  },
	  "style": {
	    "backgroundColor": function () {return this.bgColor}
	  },
	  "children": [
	    {
	      "type": "content"
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "item": {
	    "paddingTop": 25,
	    "paddingBottom": 25,
	    "paddingLeft": 35,
	    "paddingRight": 35,
	    "height": 160,
	    "justifyContent": "center",
	    "borderBottomWidth": 1,
	    "borderColor": "#dddddd"
	  }
	})
	})

/***/ },
/* 5 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/ui-panel", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	  __weex_module__.exports = {
	    data: function () {return {
	      type: 'default',
	      title: '',
	      paddingBody: 20,
	      paddingHead: 20,
	      dataClass: '', // FIXME transfer class
	      border: 0
	    }},
	    ready: function() {
	      console.log(this.data);
	    }
	  }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": function () {return ['panel', 'panel-' + (this.type)]},
	  "style": {
	    "borderWidth": function () {return this.border}
	  },
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['panel-header', 'panel-header-' + (this.type)]},
	      "style": {
	        "paddingTop": function () {return this.paddingHead},
	        "paddingBottom": function () {return this.paddingHead},
	        "paddingLeft": function () {return this.paddingHead*1.5},
	        "paddingRight": function () {return this.paddingHead*1.5}
	      },
	      "attr": {
	        "value": function () {return this.title}
	      }
	    },
	    {
	      "type": "div",
	      "classList": function () {return ['panel-body', 'panel-body-' + (this.type)]},
	      "style": {
	        "paddingTop": function () {return this.paddingBody},
	        "paddingBottom": function () {return this.paddingBody},
	        "paddingLeft": function () {return this.paddingBody*1.5},
	        "paddingRight": function () {return this.paddingBody*1.5}
	      },
	      "children": [
	        {
	          "type": "content"
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "panel": {
	    "marginBottom": 20,
	    "backgroundColor": "#ffffff",
	    "borderColor": "#dddddd",
	    "borderWidth": 1
	  },
	  "panel-primary": {
	    "borderColor": "rgb(40,96,144)"
	  },
	  "panel-success": {
	    "borderColor": "rgb(76,174,76)"
	  },
	  "panel-info": {
	    "borderColor": "rgb(70,184,218)"
	  },
	  "panel-warning": {
	    "borderColor": "rgb(238,162,54)"
	  },
	  "panel-danger": {
	    "borderColor": "rgb(212,63,58)"
	  },
	  "panel-header": {
	    "backgroundColor": "#f5f5f5",
	    "fontSize": 40,
	    "color": "#333333"
	  },
	  "panel-header-primary": {
	    "backgroundColor": "rgb(40,96,144)",
	    "color": "#ffffff"
	  },
	  "panel-header-success": {
	    "backgroundColor": "rgb(92,184,92)",
	    "color": "#ffffff"
	  },
	  "panel-header-info": {
	    "backgroundColor": "rgb(91,192,222)",
	    "color": "#ffffff"
	  },
	  "panel-header-warning": {
	    "backgroundColor": "rgb(240,173,78)",
	    "color": "#ffffff"
	  },
	  "panel-header-danger": {
	    "backgroundColor": "rgb(217,83,79)",
	    "color": "#ffffff"
	  },
	  "panel-body": {}
	})
	})

/***/ },
/* 6 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/ui-tip", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	  __weex_module__.exports = {
	    data: function () {return {
	      type: 'success',
	      value: ''
	    }}
	  }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": function () {return ['tip', 'tip-' + (this.type)]},
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['tip-txt', 'tip-txt-' + (this.type)]},
	      "attr": {
	        "value": function () {return this.value}
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "tip": {
	    "paddingLeft": 36,
	    "paddingRight": 36,
	    "paddingTop": 36,
	    "paddingBottom": 36,
	    "borderRadius": 10
	  },
	  "tip-txt": {
	    "fontSize": 28
	  },
	  "tip-success": {
	    "backgroundColor": "#dff0d8",
	    "borderColor": "#d6e9c6"
	  },
	  "tip-txt-success": {
	    "color": "#3c763d"
	  },
	  "tip-info": {
	    "backgroundColor": "#d9edf7",
	    "borderColor": "#bce8f1"
	  },
	  "tip-txt-info": {
	    "color": "#31708f"
	  },
	  "tip-warning": {
	    "backgroundColor": "#fcf8e3",
	    "borderColor": "#faebcc"
	  },
	  "tip-txt-warning": {
	    "color": "#8a6d3b"
	  },
	  "tip-danger": {
	    "backgroundColor": "#f2dede",
	    "borderColor": "#ebccd1"
	  },
	  "tip-txt-danger": {
	    "color": "#a94442"
	  }
	})
	})

/***/ },
/* 7 */,
/* 8 */,
/* 9 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/ycApp", [], function(__weex_require__, __weex_exports__, __weex_module__){
	exports.methods = {
		demo:function(){
		      console.log(11)
		}
	}
	})

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports={
	  "f28": {
	    "fontSize": 28
	  },
	  "ycm-bar": {
	    "zIndex": 10,
	    "height": 88,
	    "position": "relative",
	    "paddingRight": 20,
	    "paddingLeft": 20,
	    "borderBottom": 0,
	    "backgroundColor": "#f7f7f7",
	    "boxShadow": "0 0 2px rgba(0,0,0,.85)",
	    "backfaceVisibility": "hidden"
	  },
	  "ycm-title": {
	    "textAlign": "center",
	    "margin": 0,
	    "textOverflow": "ellipsis",
	    "color": "#000000",
	    "fontSize": 32,
	    "paddingTop": 24,
	    "lineHeight": 88
	  },
	  "ycm-bar-back": {
	    "width": 48,
	    "height": 48,
	    "paddingLeft": 20,
	    "position": "absolute",
	    "left": 20,
	    "top": 20,
	    "transform": "rotate(180deg)"
	  },
	  "ycm-content-padded": {
	    "padding": 20,
	    "paddingTop": 25,
	    "height": 80,
	    "fontSize": 24,
	    "backgroundColor": "#f2f2f2"
	  }
	}

/***/ }
/******/ ]);