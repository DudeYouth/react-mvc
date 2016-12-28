webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(32);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRouter = __webpack_require__(178);

	var _index = __webpack_require__(233);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(234);

	var _index4 = _interopRequireDefault(_index3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Index = new _index2.default();
	var Comp = Index.components;
	_reactDom2.default.render(_react2.default.createElement(
	            _reactRouter.Router,
	            { history: _reactRouter.browserHistory },
	            _react2.default.createElement(_reactRouter.Route, { path: "/view/", component: Comp.__index.Index })
	), document.getElementById("container"));

/***/ },

/***/ 233:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _desc, _value, _class;

	var _index = __webpack_require__(234);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(235);

	var _index4 = _interopRequireDefault(_index3);

	var _title = __webpack_require__(236);

	var _title2 = _interopRequireDefault(_title);

	var _test = __webpack_require__(238);

	var _test2 = _interopRequireDefault(_test);

	var _index5 = __webpack_require__(237);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	    var desc = {};
	    Object['ke' + 'ys'](descriptor).forEach(function (key) {
	        desc[key] = descriptor[key];
	    });
	    desc.enumerable = !!desc.enumerable;
	    desc.configurable = !!desc.configurable;

	    if ('value' in desc || desc.initializer) {
	        desc.writable = true;
	    }

	    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	        return decorator(target, property, desc) || desc;
	    }, desc);

	    if (context && desc.initializer !== void 0) {
	        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	        desc.initializer = undefined;
	    }

	    if (desc.initializer === void 0) {
	        Object['define' + 'Property'](target, property, desc);
	        desc = null;
	    }

	    return desc;
	}

	var Index = (_class = function (_Module) {
	    _inherits(Index, _Module);

	    function Index(props) {
	        _classCallCheck(this, Index);

	        return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));
	    }

	    _createClass(Index, [{
	        key: "setindex",
	        value: function setindex(model) {
	            this.render('__index', [_index4.default, _test2.default], model || { "title": "holle word!", text: { text: "test" } });
	        }
	    }, {
	        key: "setTitle",
	        value: function setTitle(model) {
	            this.render('__title', _title2.default, model);
	        }
	    }]);

	    return Index;
	}(_index2.default), (_applyDecoratedDescriptor(_class.prototype, "setindex", [_index.Interface], Object.getOwnPropertyDescriptor(_class.prototype, "setindex"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setTitle", [_index.Interface], Object.getOwnPropertyDescriptor(_class.prototype, "setTitle"), _class.prototype)), _class);
	exports.default = Index;

/***/ },

/***/ 234:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = exports.Interface = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Interface = exports.Interface = function Interface(target, name, descriptor) {
	    descriptor.enumerable = true;
	    return descriptor;
	};

	var Item = function () {
	    function Item() {
	        var _this2 = this;

	        _classCallCheck(this, Item);

	        this.components = {};
	        this.states = {};
	        var keys = Object.keys(this.__proto__);
	        keys.forEach(function (name) {
	            if (name != "constructor" && _this2[name] && typeof _this2[name] == 'function') {
	                _this2[name]();
	            }
	        });
	    }

	    _createClass(Item, [{
	        key: "render",
	        value: function render(name, View, model) {
	            var _this4 = this;

	            var _this = this;
	            var _components = [];
	            if (this.states[name]) {
	                this.states[name].forEach(function (comp) {
	                    comp.setState(model);
	                });
	            } else {
	                this.states[name] = [];
	                if (View instanceof Array) {
	                    _components = View;
	                } else {
	                    _components = [View];
	                }
	                _components.forEach(function (Comp) {
	                    var Child = function (_Component) {
	                        _inherits(Child, _Component);

	                        function Child(props) {
	                            _classCallCheck(this, Child);

	                            var _this3 = _possibleConstructorReturn(this, (Child.__proto__ || Object.getPrototypeOf(Child)).call(this, props));

	                            _this.states[name].push(_this3);
	                            _this3.state = Object.assign({}, props, model);
	                            return _this3;
	                        }

	                        _createClass(Child, [{
	                            key: "render",
	                            value: function render() {
	                                var props = Object.assign({}, this.state, _this, _this.__proto__, { 'render': function render() {
	                                        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	                                            args[_key] = arguments[_key];
	                                        }

	                                        _this.render.apply(_this, args);
	                                    } });
	                                return _react2.default.createElement(Comp, props);
	                            }
	                        }]);

	                        return Child;
	                    }(_react.Component);

	                    _this4.components[name] = _this4.components[name] || {};
	                    _this4.components[name][Comp.prototype.constructor.name] = Child;
	                });
	            }
	        }
	    }]);

	    return Item;
	}();

	exports.default = Item;

/***/ },

/***/ 235:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(178);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Index = function (_Component) {
	    _inherits(Index, _Component);

	    function Index() {
	        _classCallCheck(this, Index);

	        return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
	    }

	    _createClass(Index, [{
	        key: "render",
	        value: function render() {
	            var Title = this.props.components.__title;
	            var Test = this.props.components.__index;
	            return _react2.default.createElement(
	                "div",
	                null,
	                _react2.default.createElement(Title.Row, this.props.text),
	                _react2.default.createElement(
	                    "h1",
	                    null,
	                    this.props.title || "123"
	                ),
	                _react2.default.createElement(
	                    "h2",
	                    null,
	                    this.props.text.text
	                ),
	                _react2.default.createElement(Test.Test, null)
	            );
	        }
	    }]);

	    return Index;
	}(_react.Component);

	exports.default = Index;

/***/ },

/***/ 236:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Row = function (_Component) {
	    _inherits(Row, _Component);

	    function Row() {
	        _classCallCheck(this, Row);

	        return _possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).apply(this, arguments));
	    }

	    _createClass(Row, [{
	        key: "render",
	        value: function render() {
	            var _this2 = this;

	            return _react2.default.createElement(
	                "div",
	                null,
	                _react2.default.createElement(
	                    "p",
	                    { onClick: function onClick() {
	                            _this2.props.setindex({ title: 789 });
	                        } },
	                    this.props.text
	                )
	            );
	        }
	    }]);

	    return Row;
	}(_react.Component);

	exports.default = Row;

/***/ },

/***/ 237:
/***/ function(module, exports) {

	"use strict";

/***/ },

/***/ 238:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Test = function (_Component) {
	    _inherits(Test, _Component);

	    function Test() {
	        _classCallCheck(this, Test);

	        return _possibleConstructorReturn(this, (Test.__proto__ || Object.getPrototypeOf(Test)).apply(this, arguments));
	    }

	    _createClass(Test, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "div",
	                null,
	                _react2.default.createElement(
	                    "p",
	                    null,
	                    this.props.title
	                )
	            );
	        }
	    }]);

	    return Test;
	}(_react.Component);

	exports.default = Test;

/***/ }

});