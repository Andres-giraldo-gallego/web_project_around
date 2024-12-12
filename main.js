/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/FormValidator.js":
/*!*****************************************!*\
  !*** ./src/components/FormValidator.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ FormValidator; }
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var FormValidator = /*#__PURE__*/function () {
  function FormValidator(settings) {
    _classCallCheck(this, FormValidator);
    this.settings = settings;
  }
  return _createClass(FormValidator, [{
    key: "enableValidation",
    value: function enableValidation() {
      var _this = this;
      var formList = document.querySelectorAll(this.settings.formSelector);
      formList.forEach(function (forElement) {
        var inputList = Array.from(forElement.querySelectorAll(_this.settings.inputSelector));
        var submitButton = forElement.querySelector(_this.settings.submitButtonSelector);
        _this.checkImputValiditi(inputList, submitButton, _this.settings);
        inputList.forEach(function (inputElement) {
          var errorElement = forElement.querySelector("#".concat(inputElement.name, "-error"));
          var hanValue = inputList.some(function (item) {
            return item.value.length > 0;
          });
          inputElement.classList.remove(_this.settings.inputErrorClass);
          errorElement.textContent = hanValue ? inputElement.validationMessage : "";
          if (!inputElement.checkValidity()) {
            inputElement.classList.add(_this.settings.inputErrorClass);
          } else {
            inputElement.classList.remove(_this.settings.inputErrorClass);
          }
          inputElement.addEventListener("input", function () {
            _this.checkImputValiditi(inputList, submitButton, _this.settings);
            errorElement.textContent = inputElement.validationMessage;
            if (!inputElement.checkValidity()) {
              inputElement.classList.add(_this.settings.inputErrorClass);
            } else {
              inputElement.classList.remove(_this.settings.inputErrorClass);
            }
          });
        });
      });
    }
  }, {
    key: "checkImputValiditi",
    value: function checkImputValiditi(inputList, submitButton, settings) {
      var hasInvalidInput = inputList.some(function (inputElement) {
        return !inputElement.checkValidity();
      });
      if (hasInvalidInput) {
        submitButton.disabled = true;
        submitButton.classList.add(settings.inactiveButtonClass);
      } else {
        submitButton.disabled = false;
        submitButton.classList.remove(settings.inactiveButtonClass);
      }
    }
  }]);
}();


/***/ }),

/***/ "./src/components/PopupWithConfirmation.js":
/*!*************************************************!*\
  !*** ./src/components/PopupWithConfirmation.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PopupWithConfirmation; }
/* harmony export */ });
/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup.js */ "./src/components/popup.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var PopupWithConfirmation = /*#__PURE__*/function (_Popup) {
  function PopupWithConfirmation(popupSelector, handleOnSubmit) {
    var _this;
    _classCallCheck(this, PopupWithConfirmation);
    _this = _callSuper(this, PopupWithConfirmation, [popupSelector]);
    _this.handleOnSubmit = handleOnSubmit;
    _this._cardId = null;
    return _this;
  }
  _inherits(PopupWithConfirmation, _Popup);
  return _createClass(PopupWithConfirmation, [{
    key: "open",
    value: function open(cardId, card) {
      _superPropGet(PopupWithConfirmation, "open", this, 3)([]);
      this._cardId = cardId;
      this.card = card;
    }
  }, {
    key: "renderLogin",
    value: function renderLogin(isLoading, botonLoading, originalText) {
      console.log(originalText);
      if (isLoading) {
        botonLoading.textContent = "Cargando...";
      } else {
        botonLoading.textContent = originalText;
      }
      setTimeout(function () {}, 3000);
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;
      _superPropGet(PopupWithConfirmation, "setEventListeners", this, 3)([]);
      var botonLoading = this.popup.querySelector(".button-loading");
      var originalText = botonLoading.textContent;
      this.popup.querySelector(".popup__form").addEventListener("submit", function (evt) {
        evt.preventDefault();
        _this2.renderLogin(true, botonLoading, originalText);
        _this2.handleOnSubmit(_this2._cardId, _this2.card).then(function () {
          _this2.renderLogin(false, botonLoading, originalText);
        });
      });
    }
  }]);
}(_popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/components/PopupWithForm.js":
/*!*****************************************!*\
  !*** ./src/components/PopupWithForm.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PopupWithForm; }
/* harmony export */ });
/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup.js */ "./src/components/popup.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var PopupWithForm = /*#__PURE__*/function (_Popup) {
  function PopupWithForm(popup, handleForsubmit) {
    var _this;
    _classCallCheck(this, PopupWithForm);
    _this = _callSuper(this, PopupWithForm, [popup]);
    _this.handleForsubmit = handleForsubmit;
    return _this;
  }
  _inherits(PopupWithForm, _Popup);
  return _createClass(PopupWithForm, [{
    key: "close",
    value: function close() {
      _superPropGet(PopupWithForm, "close", this, 3)([]);
      var form = this.popup.querySelector(".popup__form");
      form.reset();
    }
  }, {
    key: "getInputValues",
    value: function getInputValues() {
      var values = {};
      var form = this.popup.querySelector(".popup__form");
      var inputList = form.querySelectorAll("input");
      inputList.forEach(function (popup) {
        if (popup.name) {
          values[popup.name] = popup.value;
        }
      });
      return values;
    }
  }, {
    key: "renderLogin",
    value: function renderLogin(isLoading, botonLoading, originalText) {
      console.log(originalText);
      if (isLoading) {
        botonLoading.textContent = "Cargando...";
      } else {
        botonLoading.textContent = originalText;
      }
      setTimeout(function () {}, 3000);
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;
      _superPropGet(PopupWithForm, "setEventListeners", this, 3)([]);
      var form = this.popup.querySelector(".popup__form");
      var botonLoading = this.popup.querySelector(".button-loading");
      var originalText = botonLoading.textContent;
      form.addEventListener("submit", function (evt) {
        evt.preventDefault();
        _this2.renderLogin(true, botonLoading, originalText);
        var data = _this2.getInputValues();
        _this2.handleForsubmit(data).then(function () {
          _this2.renderLogin(false, botonLoading, originalText);
          _this2.close();
        });
      });
    }
  }]);
}(_popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/components/PopupWithImage.js":
/*!******************************************!*\
  !*** ./src/components/PopupWithImage.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PopupWithImage; }
/* harmony export */ });
/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup.js */ "./src/components/popup.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var PopupWithImage = /*#__PURE__*/function (_Popup) {
  function PopupWithImage(popup) {
    var _this;
    _classCallCheck(this, PopupWithImage);
    _this = _callSuper(this, PopupWithImage, [popup]);
    _this.name = _this.popup.querySelector(".dialog__text");
    _this.link = _this.popup.querySelector(".dialog__img");
    return _this;
  }
  _inherits(PopupWithImage, _Popup);
  return _createClass(PopupWithImage, [{
    key: "open",
    value: function open(name, link) {
      _superPropGet(PopupWithImage, "open", this, 3)([]);
      this.link.src = link;
      this.name.textContent = name;
    }
  }]);
}(_popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/components/UserInfo.js":
/*!************************************!*\
  !*** ./src/components/UserInfo.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ UserInfo; }
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var UserInfo = /*#__PURE__*/function () {
  function UserInfo() {
    _classCallCheck(this, UserInfo);
    this.name = document.querySelector(".profile__name");
    this.about = document.querySelector(".profile__hobbie");
    this.avatar = document.querySelector(".profile__avatar");
  }
  return _createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      return {
        name: this.name.textContent,
        about: this.about.textContent,
        avatar: this.avatar.src
      };
    }
  }, {
    key: "setUserInfo",
    value: function setUserInfo(name, about, avatar) {
      this.name.textContent = name;
      this.about.textContent = about;
      this.avatar.src = avatar;
    }
  }]);
}();


/***/ }),

/***/ "./src/components/card.js":
/*!********************************!*\
  !*** ./src/components/card.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Card; }
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var dialogImg = document.querySelector(".dialog__content");
var imgDialog = document.querySelector("#dialog-img");
var textDialog = document.querySelector("#dialog-text");
var Card = /*#__PURE__*/function () {
  function Card(name, link, id, handleCardClick, handleDeleteClick, handlelick, handleDisLike, isLiked) {
    _classCallCheck(this, Card);
    this.name = name;
    this.link = link;
    this.id = id;
    this.handleCardClick = handleCardClick;
    this.handleDeleteClick = handleDeleteClick;
    this.handlelick = handlelick;
    this.handleDisLike = handleDisLike;
    this.isLiked = isLiked;
  }
  return _createClass(Card, [{
    key: "getTemplate",
    value: function getTemplate() {
      var cardElement = document.querySelector("#elements_template").content;
      return cardElement.querySelector(".elements_card").cloneNode(true);
    }
  }, {
    key: "setProperties",
    value: function setProperties() {
      this.htmlCard = this.getTemplate();
      this.cardImage = this.htmlCard.querySelector(".elements_img");
      this.cardDescription = this.htmlCard.querySelector(".elements_text");
      this.buttonTrash = this.htmlCard.querySelector(".elements__trash-img");
      this.buttonLink = this.htmlCard.querySelector(".elements_link-img");
      this.cardImage.src = this.link;
      this.cardDescription.textContent = this.name;
      if (this.isLiked) {
        this.buttonLink.classList.add("elements_link-img-active");
      }
    }
  }, {
    key: "createCard",
    value: function createCard() {
      this.setProperties();
      this.setEventsListeners();
      return this.htmlCard;
    }
  }, {
    key: "toggleLike",
    value: function toggleLike() {
      this.buttonLink.classList.add("elements_link-img-active");
      this.handlelick(this.id, this.buttonLink);
    }
  }, {
    key: "removeLike",
    value: function removeLike() {
      this.buttonLink.classList.remove("elements_link-img-active");
      this.handleDisLike(this.id, this.buttonLink);
    }
  }, {
    key: "removeCard",
    value: function removeCard() {
      this.htmlCard.remove();
    }
  }, {
    key: "setEventsListeners",
    value: function setEventsListeners() {
      var _this = this;
      this.buttonLink.addEventListener("click", function () {
        if (_this.buttonLink.classList.contains("elements_link-img-active")) {
          _this.removeLike();
        } else {
          _this.toggleLike();
        }
      });
      this.buttonTrash.addEventListener("click", function () {
        _this.handleDeleteClick(_this.id);
      });
      this.cardImage.addEventListener("click", function () {
        _this.handleCardClick(_this.name, _this.link);
      });
    }
  }]);
}();


/***/ }),

/***/ "./src/components/popup.js":
/*!*********************************!*\
  !*** ./src/components/popup.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Popup; }
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Popup = /*#__PURE__*/function () {
  function Popup(popup) {
    _classCallCheck(this, Popup);
    this.popup = document.querySelector(popup);
    this._isDialog = false;

    // uso de this.popup en lugar de this._popupSelector
    if (this.popup && this.popup.tagName === "DIALOG") {
      this._isDialog = true;
    }
  }
  return _createClass(Popup, [{
    key: "open",
    value: function open() {
      if (this.popup && this.popup.tagName === "DIALOG") {
        this.popup.showModal();
      } else {
        this.popup.classList.add("popup_opened");
      }
    }
  }, {
    key: "close",
    value: function close() {
      // cierre del popup dependiendo de si es un DIALOG o un div
      if (this._isDialog) {
        this.popup.close();
      } else {
        this.popup.classList.remove("popup_opened");
      }
    }
  }, {
    key: "handleEscClose",
    value: function handleEscClose(evt) {
      // Cierra el popup si se presiona la tecla Escape
      if (evt.key === "Escape") {
        this.close();
      }
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this = this;
      // Escucha el evento de Escape para cerrar el popup
      document.addEventListener("keyup", function (e) {
        _this.handleEscClose(e);
      });

      // Selecciona todos los botones de cierre
      var closeButtons = this.popup.querySelectorAll(".popup__close-btn");
      if (this.popup && this.popup.tagName === "DIALOG") {
        closeButtons = this.popup.querySelectorAll(".dialog__button");
      }

      // Asegura que cada botón de cierre cierre el popup
      closeButtons.forEach(function (button) {
        button.addEventListener("click", function () {
          _this.close();
        });
      });

      // Cierra el popup si se hace clic en el fondo (overlay)
      this.popup.addEventListener("click", function (evt) {
        // Si el objetivo del clic es el fondo, cierra el popup
        if (evt.target === _this.popup) {
          _this.close();
        }
      });
    }
  }]);
}();


/***/ }),

/***/ "./src/components/section.js":
/*!***********************************!*\
  !*** ./src/components/section.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Section; }
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Section = /*#__PURE__*/function () {
  function Section(items, render, selector) {
    _classCallCheck(this, Section);
    this.container = selector;
    this.items = items;
    this.render = render;
  }
  // metodo que se encarga de mapear
  return _createClass(Section, [{
    key: "renderer",
    value: function renderer() {
      var _this = this;
      this.items.forEach(function (element) {
        _this.addItem(element);
      });
    }

    // agregar elemento al Dom
  }, {
    key: "addItem",
    value: function addItem(item) {
      this.container.append(this.render(item));
    }
  }, {
    key: "addNewItem",
    value: function addNewItem(item) {
      this.container.prepend(item);
    }
  }]);
}();


/***/ }),

/***/ "./src/scripts/Api.js":
/*!****************************!*\
  !*** ./src/scripts/Api.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var baseURL = "https://around-api.es.tripleten-services.com/v1";
var headers = {
  authorization: "387a3808-ad6d-45cd-b127-9db5833c8e93",
  "Content-Type": "application/json"
};
var Api = /*#__PURE__*/function () {
  function Api() {
    _classCallCheck(this, Api);
  }
  return _createClass(Api, [{
    key: "getInitialCards",
    value: function getInitialCards() {
      return fetch("".concat(baseURL, "/cards"), {
        method: "GET",
        headers: headers
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        }
      });
    }
  }, {
    key: "getUserInfo",
    value: function getUserInfo() {
      return fetch("".concat(baseURL, "/users/me"), {
        method: "GET",
        headers: headers
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        }
      });
    }
  }, {
    key: "editUserInfo",
    value: function editUserInfo(body) {
      return fetch("".concat(baseURL, "/users/me"), {
        method: "PATCH",
        headers: headers,
        body: JSON.stringify(body)
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        }
      });
    }
  }, {
    key: "editAvatarUser",
    value: function editAvatarUser(avatar) {
      return fetch("".concat(baseURL, "/users/me/avatar"), {
        method: "PATCH",
        headers: headers,
        body: JSON.stringify({
          avatar: avatar
        })
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        }
      });
    }
  }, {
    key: "createCard",
    value: function createCard(body) {
      return fetch("".concat(baseURL, "/cards/"), {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body)
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        }
      });
    }
  }, {
    key: "deleteCard",
    value: function deleteCard(id) {
      return fetch("".concat(baseURL, "/cards/").concat(id), {
        method: "DELETE",
        headers: headers
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        }
      });
    }
  }, {
    key: "likeCard",
    value: function likeCard(id) {
      return fetch("".concat(baseURL, "/cards/").concat(id, "/likes"), {
        method: "PUT",
        headers: headers
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        }
      });
    }
  }, {
    key: "dislikeCard",
    value: function dislikeCard(id) {
      return fetch("".concat(baseURL, "/cards/").concat(id, "/likes"), {
        method: "DELETE",
        headers: headers
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        }
      });
    }
  }]);
}();
var api = new Api();
/* harmony default export */ __webpack_exports__["default"] = (api);

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
!function() {
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/FormValidator.js */ "./src/components/FormValidator.js");
/* harmony import */ var _components_card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/card.js */ "./src/components/card.js");
/* harmony import */ var _components_section_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/section.js */ "./src/components/section.js");
/* harmony import */ var _components_popup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/popup.js */ "./src/components/popup.js");
/* harmony import */ var _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PopupWithImage.js */ "./src/components/PopupWithImage.js");
/* harmony import */ var _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PopupWithForm.js */ "./src/components/PopupWithForm.js");
/* harmony import */ var _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/UserInfo.js */ "./src/components/UserInfo.js");
/* harmony import */ var _Api_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Api.js */ "./src/scripts/Api.js");
/* harmony import */ var _components_PopupWithConfirmation_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/PopupWithConfirmation.js */ "./src/components/PopupWithConfirmation.js");
/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pages/index.css */ "./src/pages/index.css");


/*import { initialCards } from "./utils.js";*/








var buttonEdit = document.querySelector(".profile__edit-button");
var inputName = document.querySelector("#popup-name");
var inputAbout = document.querySelector("#popup-about");
var profileName = document.querySelector(".profile__name");
var profileHobbie = document.querySelector(".profile__hobbie");
var buttonAdd = document.querySelector(".profile__add-button");
var cardName = document.querySelector("#popup-card-name");
var cardLink = document.querySelector("#popup-link");
var imagAvatar = document.querySelector(".profile__avatar-edit");

// clase popup
var popup = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__["default"]("#popup-card", creatCard);
var popupEditAvatar = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__["default"]("#popup-avatar", editAvatar);
function editAvatar(data) {
  return _Api_js__WEBPACK_IMPORTED_MODULE_7__["default"].editAvatarUser(data.avatar).then(function (response) {
    userInfo.setUserInfo(response.name, response.about, response.avatar);
  });
}
var popupprofile = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__["default"]("#popup-profile", profileForm);
var popupDialog = new _components_popup_js__WEBPACK_IMPORTED_MODULE_3__["default"]("#dialog");
var imagepopup = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_4__["default"]("#dialog");
var userInfo = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_6__["default"]();
var popupWithConfirmation = new _components_PopupWithConfirmation_js__WEBPACK_IMPORTED_MODULE_8__["default"]("#popup-delete", function (cardId, card) {
  return _Api_js__WEBPACK_IMPORTED_MODULE_7__["default"].deleteCard(cardId).then(function () {
    popupWithConfirmation.close();
    card.removeCard();
  });
});
function handleLick(id, buttonLink) {
  console.log(id, buttonLink);
  _Api_js__WEBPACK_IMPORTED_MODULE_7__["default"].likeCard(id).then(function () {
    console.log('¡Tarjeta marcada como "me gusta" exitosamente!');
  });
}
function handleDisLike(id) {
  _Api_js__WEBPACK_IMPORTED_MODULE_7__["default"].dislikeCard(id).then(function () {
    console.log('¡Quitado el "me gusta" exitosamente!');
  });
}
popup.setEventListeners();
popupprofile.setEventListeners();
popupDialog.setEventListeners();
imagepopup.setEventListeners();
popupEditAvatar.setEventListeners();
popupWithConfirmation.setEventListeners();

// clase PopupWithForm

buttonAdd.addEventListener("click", function (e) {
  e.preventDefault();
  popup.open();
});
buttonEdit.addEventListener("click", function (e) {
  e.preventDefault();
  popupprofile.open();
  cambiarNombre();
});
var section;
function creatCard() {
  return _Api_js__WEBPACK_IMPORTED_MODULE_7__["default"].createCard({
    name: cardName.value,
    link: cardLink.value
  }).then(function (response) {
    var newCard = createCard(response);
    section.addNewItem(newCard);
  });
}
_Api_js__WEBPACK_IMPORTED_MODULE_7__["default"].getInitialCards().then(function (initialCards) {
  section = new _components_section_js__WEBPACK_IMPORTED_MODULE_2__["default"](initialCards, createCard, elements);
  section.renderer();
});
_Api_js__WEBPACK_IMPORTED_MODULE_7__["default"].getUserInfo().then(function (Response) {
  userInfo.setUserInfo(Response.name, Response.about, Response.avatar);
});
imagAvatar.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupEditAvatar.open();
});
function profileForm(data) {
  return _Api_js__WEBPACK_IMPORTED_MODULE_7__["default"].editUserInfo(data).then(function (Response) {
    userInfo.setUserInfo(Response.name, Response.about, Response.avatar);
  });
}
function cambiarNombre() {
  inputName.value = profileName.textContent;
  inputAbout.value = profileHobbie.textContent;
}
cambiarNombre();

//  clase section
function createCard(item) {
  var card = new _components_card_js__WEBPACK_IMPORTED_MODULE_1__["default"](item.name, item.link, item._id, handleOpenImage, function () {
    popupWithConfirmation.open(item._id, card);
  }, handleLick, handleDisLike, item.isLiked);
  var cardElement = card.createCard();
  return cardElement;
}
var elements = document.querySelector(".elements__container");
function handleOpenImage(name, link) {
  imagepopup.open(name, link);
}

// clase formValidator

var settingsValidation = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__Submit-Button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
};
var validation = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_0__["default"](settingsValidation);
validation.enableValidation();
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFxQkEsYUFBYTtFQUNoQyxTQUFBQSxjQUFZQyxRQUFRLEVBQUU7SUFBQUMsZUFBQSxPQUFBRixhQUFBO0lBQ3BCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQSxRQUFRO0VBQzFCO0VBQUMsT0FBQUUsWUFBQSxDQUFBSCxhQUFBO0lBQUFJLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFDLGdCQUFnQkEsQ0FBQSxFQUFHO01BQUEsSUFBQUMsS0FBQTtNQUNqQixJQUFNQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsSUFBSSxDQUFDVCxRQUFRLENBQUNVLFlBQVksQ0FBQztNQUV0RUgsUUFBUSxDQUFDSSxPQUFPLENBQUMsVUFBQ0MsVUFBVSxFQUFLO1FBQy9CLElBQU1DLFNBQVMsR0FBR0MsS0FBSyxDQUFDQyxJQUFJLENBQzFCSCxVQUFVLENBQUNILGdCQUFnQixDQUFDSCxLQUFJLENBQUNOLFFBQVEsQ0FBQ2dCLGFBQWEsQ0FDekQsQ0FBQztRQUNELElBQU1DLFlBQVksR0FBR0wsVUFBVSxDQUFDTSxhQUFhLENBQzNDWixLQUFJLENBQUNOLFFBQVEsQ0FBQ21CLG9CQUNoQixDQUFDO1FBQ0RiLEtBQUksQ0FBQ2Msa0JBQWtCLENBQUNQLFNBQVMsRUFBRUksWUFBWSxFQUFFWCxLQUFJLENBQUNOLFFBQVEsQ0FBQztRQUUvRGEsU0FBUyxDQUFDRixPQUFPLENBQUMsVUFBQ1UsWUFBWSxFQUFLO1VBQ2xDLElBQU1DLFlBQVksR0FBR1YsVUFBVSxDQUFDTSxhQUFhLEtBQUFLLE1BQUEsQ0FDdkNGLFlBQVksQ0FBQ0csSUFBSSxXQUN2QixDQUFDO1VBQ0QsSUFBTUMsUUFBUSxHQUFHWixTQUFTLENBQUNhLElBQUksQ0FBQyxVQUFDQyxJQUFJO1lBQUEsT0FBS0EsSUFBSSxDQUFDdkIsS0FBSyxDQUFDd0IsTUFBTSxHQUFHLENBQUM7VUFBQSxFQUFDO1VBQ2hFUCxZQUFZLENBQUNRLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDeEIsS0FBSSxDQUFDTixRQUFRLENBQUMrQixlQUFlLENBQUM7VUFDNURULFlBQVksQ0FBQ1UsV0FBVyxHQUFHUCxRQUFRLEdBQy9CSixZQUFZLENBQUNZLGlCQUFpQixHQUM5QixFQUFFO1VBRU4sSUFBSSxDQUFDWixZQUFZLENBQUNhLGFBQWEsQ0FBQyxDQUFDLEVBQUU7WUFDakNiLFlBQVksQ0FBQ1EsU0FBUyxDQUFDTSxHQUFHLENBQUM3QixLQUFJLENBQUNOLFFBQVEsQ0FBQytCLGVBQWUsQ0FBQztVQUMzRCxDQUFDLE1BQU07WUFDTFYsWUFBWSxDQUFDUSxTQUFTLENBQUNDLE1BQU0sQ0FBQ3hCLEtBQUksQ0FBQ04sUUFBUSxDQUFDK0IsZUFBZSxDQUFDO1VBQzlEO1VBRUFWLFlBQVksQ0FBQ2UsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07WUFDM0M5QixLQUFJLENBQUNjLGtCQUFrQixDQUFDUCxTQUFTLEVBQUVJLFlBQVksRUFBRVgsS0FBSSxDQUFDTixRQUFRLENBQUM7WUFDL0RzQixZQUFZLENBQUNVLFdBQVcsR0FBR1gsWUFBWSxDQUFDWSxpQkFBaUI7WUFFekQsSUFBSSxDQUFDWixZQUFZLENBQUNhLGFBQWEsQ0FBQyxDQUFDLEVBQUU7Y0FDakNiLFlBQVksQ0FBQ1EsU0FBUyxDQUFDTSxHQUFHLENBQUM3QixLQUFJLENBQUNOLFFBQVEsQ0FBQytCLGVBQWUsQ0FBQztZQUMzRCxDQUFDLE1BQU07Y0FDTFYsWUFBWSxDQUFDUSxTQUFTLENBQUNDLE1BQU0sQ0FBQ3hCLEtBQUksQ0FBQ04sUUFBUSxDQUFDK0IsZUFBZSxDQUFDO1lBQzlEO1VBQ0YsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDO01BQ0osQ0FBQyxDQUFDO0lBQ0o7RUFBQztJQUFBNUIsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQWdCLGtCQUFrQkEsQ0FBQ1AsU0FBUyxFQUFFSSxZQUFZLEVBQUVqQixRQUFRLEVBQUU7TUFDcEQsSUFBTXFDLGVBQWUsR0FBR3hCLFNBQVMsQ0FBQ2EsSUFBSSxDQUFDLFVBQUNMLFlBQVksRUFBSztRQUN2RCxPQUFPLENBQUNBLFlBQVksQ0FBQ2EsYUFBYSxDQUFDLENBQUM7TUFDdEMsQ0FBQyxDQUFDO01BQ0YsSUFBSUcsZUFBZSxFQUFFO1FBQ25CcEIsWUFBWSxDQUFDcUIsUUFBUSxHQUFHLElBQUk7UUFDNUJyQixZQUFZLENBQUNZLFNBQVMsQ0FBQ00sR0FBRyxDQUFDbkMsUUFBUSxDQUFDdUMsbUJBQW1CLENBQUM7TUFDMUQsQ0FBQyxNQUFNO1FBQ0x0QixZQUFZLENBQUNxQixRQUFRLEdBQUcsS0FBSztRQUM3QnJCLFlBQVksQ0FBQ1ksU0FBUyxDQUFDQyxNQUFNLENBQUM5QixRQUFRLENBQUN1QyxtQkFBbUIsQ0FBQztNQUM3RDtJQUNGO0VBQUM7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRDRCO0FBQUEsSUFFVkcscUJBQXFCLDBCQUFBQyxNQUFBO0VBQ3hDLFNBQUFELHNCQUFZRSxhQUFhLEVBQUVDLGNBQWMsRUFBRTtJQUFBLElBQUF2QyxLQUFBO0lBQUFMLGVBQUEsT0FBQXlDLHFCQUFBO0lBQ3pDcEMsS0FBQSxHQUFBd0MsVUFBQSxPQUFBSixxQkFBQSxHQUFNRSxhQUFhO0lBQ25CdEMsS0FBQSxDQUFLdUMsY0FBYyxHQUFHQSxjQUFjO0lBQ3BDdkMsS0FBQSxDQUFLeUMsT0FBTyxHQUFHLElBQUk7SUFBQyxPQUFBekMsS0FBQTtFQUN0QjtFQUFDMEMsU0FBQSxDQUFBTixxQkFBQSxFQUFBQyxNQUFBO0VBQUEsT0FBQXpDLFlBQUEsQ0FBQXdDLHFCQUFBO0lBQUF2QyxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBNkMsSUFBSUEsQ0FBQ0MsTUFBTSxFQUFFQyxJQUFJLEVBQUU7TUFDakJDLGFBQUEsQ0FBQVYscUJBQUE7TUFDQSxJQUFJLENBQUNLLE9BQU8sR0FBR0csTUFBTTtNQUNyQixJQUFJLENBQUNDLElBQUksR0FBR0EsSUFBSTtJQUNsQjtFQUFDO0lBQUFoRCxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBaUQsV0FBV0EsQ0FBQ0MsU0FBUyxFQUFFQyxZQUFZLEVBQUVDLFlBQVksRUFBRTtNQUNqREMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLFlBQVksQ0FBQztNQUN6QixJQUFJRixTQUFTLEVBQUU7UUFDYkMsWUFBWSxDQUFDdkIsV0FBVyxHQUFHLGFBQWE7TUFDMUMsQ0FBQyxNQUFNO1FBQ0x1QixZQUFZLENBQUN2QixXQUFXLEdBQUd3QixZQUFZO01BQ3pDO01BQ0FHLFVBQVUsQ0FBQyxZQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQztJQUM1QjtFQUFDO0lBQUF4RCxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBd0QsaUJBQWlCQSxDQUFBLEVBQUc7TUFBQSxJQUFBQyxNQUFBO01BQ2xCVCxhQUFBLENBQUFWLHFCQUFBO01BQ0EsSUFBTWEsWUFBWSxHQUFHLElBQUksQ0FBQ08sS0FBSyxDQUFDNUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDO01BQ2hFLElBQU1zQyxZQUFZLEdBQUdELFlBQVksQ0FBQ3ZCLFdBQVc7TUFDN0MsSUFBSSxDQUFDOEIsS0FBSyxDQUNQNUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUM3QmtCLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFDMkIsR0FBRyxFQUFLO1FBQ25DQSxHQUFHLENBQUNDLGNBQWMsQ0FBQyxDQUFDO1FBQ3BCSCxNQUFJLENBQUNSLFdBQVcsQ0FBQyxJQUFJLEVBQUVFLFlBQVksRUFBRUMsWUFBWSxDQUFDO1FBQ2xESyxNQUFJLENBQUNoQixjQUFjLENBQUNnQixNQUFJLENBQUNkLE9BQU8sRUFBRWMsTUFBSSxDQUFDVixJQUFJLENBQUMsQ0FBQ2MsSUFBSSxDQUFDLFlBQU07VUFDdERKLE1BQUksQ0FBQ1IsV0FBVyxDQUFDLEtBQUssRUFBRUUsWUFBWSxFQUFFQyxZQUFZLENBQUM7UUFDckQsQ0FBQyxDQUFDO01BQ0osQ0FBQyxDQUFDO0lBQ047RUFBQztBQUFBLEVBcENnRGYsaURBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRnpCO0FBQUEsSUFFVnlCLGFBQWEsMEJBQUF2QixNQUFBO0VBQ2hDLFNBQUF1QixjQUFZSixLQUFLLEVBQUVLLGVBQWUsRUFBRTtJQUFBLElBQUE3RCxLQUFBO0lBQUFMLGVBQUEsT0FBQWlFLGFBQUE7SUFDbEM1RCxLQUFBLEdBQUF3QyxVQUFBLE9BQUFvQixhQUFBLEdBQU1KLEtBQUs7SUFDWHhELEtBQUEsQ0FBSzZELGVBQWUsR0FBR0EsZUFBZTtJQUFDLE9BQUE3RCxLQUFBO0VBQ3pDO0VBQUMwQyxTQUFBLENBQUFrQixhQUFBLEVBQUF2QixNQUFBO0VBQUEsT0FBQXpDLFlBQUEsQ0FBQWdFLGFBQUE7SUFBQS9ELEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFnRSxLQUFLQSxDQUFBLEVBQUc7TUFDTmhCLGFBQUEsQ0FBQWMsYUFBQTtNQUNBLElBQU1HLElBQUksR0FBRyxJQUFJLENBQUNQLEtBQUssQ0FBQzVDLGFBQWEsQ0FBQyxjQUFjLENBQUM7TUFDckRtRCxJQUFJLENBQUNDLEtBQUssQ0FBQyxDQUFDO0lBQ2Q7RUFBQztJQUFBbkUsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQW1FLGNBQWNBLENBQUEsRUFBRztNQUNmLElBQUlDLE1BQU0sR0FBRyxDQUFDLENBQUM7TUFDZixJQUFNSCxJQUFJLEdBQUcsSUFBSSxDQUFDUCxLQUFLLENBQUM1QyxhQUFhLENBQUMsY0FBYyxDQUFDO01BQ3JELElBQU1MLFNBQVMsR0FBR3dELElBQUksQ0FBQzVELGdCQUFnQixDQUFDLE9BQU8sQ0FBQztNQUNoREksU0FBUyxDQUFDRixPQUFPLENBQUMsVUFBQ21ELEtBQUssRUFBSztRQUMzQixJQUFJQSxLQUFLLENBQUN0QyxJQUFJLEVBQUU7VUFDZGdELE1BQU0sQ0FBQ1YsS0FBSyxDQUFDdEMsSUFBSSxDQUFDLEdBQUdzQyxLQUFLLENBQUMxRCxLQUFLO1FBQ2xDO01BQ0YsQ0FBQyxDQUFDO01BQ0YsT0FBT29FLE1BQU07SUFDZjtFQUFDO0lBQUFyRSxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBaUQsV0FBV0EsQ0FBQ0MsU0FBUyxFQUFFQyxZQUFZLEVBQUVDLFlBQVksRUFBRTtNQUNqREMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLFlBQVksQ0FBQztNQUN6QixJQUFJRixTQUFTLEVBQUU7UUFDYkMsWUFBWSxDQUFDdkIsV0FBVyxHQUFHLGFBQWE7TUFDMUMsQ0FBQyxNQUFNO1FBQ0x1QixZQUFZLENBQUN2QixXQUFXLEdBQUd3QixZQUFZO01BQ3pDO01BQ0FHLFVBQVUsQ0FBQyxZQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQztJQUM1QjtFQUFDO0lBQUF4RCxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBd0QsaUJBQWlCQSxDQUFBLEVBQUc7TUFBQSxJQUFBQyxNQUFBO01BQ2xCVCxhQUFBLENBQUFjLGFBQUE7TUFDQSxJQUFNRyxJQUFJLEdBQUcsSUFBSSxDQUFDUCxLQUFLLENBQUM1QyxhQUFhLENBQUMsY0FBYyxDQUFDO01BQ3JELElBQU1xQyxZQUFZLEdBQUcsSUFBSSxDQUFDTyxLQUFLLENBQUM1QyxhQUFhLENBQUMsaUJBQWlCLENBQUM7TUFDaEUsSUFBTXNDLFlBQVksR0FBR0QsWUFBWSxDQUFDdkIsV0FBVztNQUM3Q3FDLElBQUksQ0FBQ2pDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFDMkIsR0FBRyxFQUFLO1FBQ3ZDQSxHQUFHLENBQUNDLGNBQWMsQ0FBQyxDQUFDO1FBQ3BCSCxNQUFJLENBQUNSLFdBQVcsQ0FBQyxJQUFJLEVBQUVFLFlBQVksRUFBRUMsWUFBWSxDQUFDO1FBQ2xELElBQU1pQixJQUFJLEdBQUdaLE1BQUksQ0FBQ1UsY0FBYyxDQUFDLENBQUM7UUFDbENWLE1BQUksQ0FBQ00sZUFBZSxDQUFDTSxJQUFJLENBQUMsQ0FBQ1IsSUFBSSxDQUFDLFlBQU07VUFDcENKLE1BQUksQ0FBQ1IsV0FBVyxDQUFDLEtBQUssRUFBRUUsWUFBWSxFQUFFQyxZQUFZLENBQUM7VUFDbkRLLE1BQUksQ0FBQ08sS0FBSyxDQUFDLENBQUM7UUFDZCxDQUFDLENBQUM7TUFDSixDQUFDLENBQUM7SUFDSjtFQUFDO0FBQUEsRUFoRHdDM0IsaURBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRmpCO0FBQUEsSUFFVmlDLGNBQWMsMEJBQUEvQixNQUFBO0VBQ2pDLFNBQUErQixlQUFZWixLQUFLLEVBQUU7SUFBQSxJQUFBeEQsS0FBQTtJQUFBTCxlQUFBLE9BQUF5RSxjQUFBO0lBQ2pCcEUsS0FBQSxHQUFBd0MsVUFBQSxPQUFBNEIsY0FBQSxHQUFNWixLQUFLO0lBQ1h4RCxLQUFBLENBQUtrQixJQUFJLEdBQUdsQixLQUFBLENBQUt3RCxLQUFLLENBQUM1QyxhQUFhLENBQUMsZUFBZSxDQUFDO0lBQ3JEWixLQUFBLENBQUtxRSxJQUFJLEdBQUdyRSxLQUFBLENBQUt3RCxLQUFLLENBQUM1QyxhQUFhLENBQUMsY0FBYyxDQUFDO0lBQUMsT0FBQVosS0FBQTtFQUN2RDtFQUFDMEMsU0FBQSxDQUFBMEIsY0FBQSxFQUFBL0IsTUFBQTtFQUFBLE9BQUF6QyxZQUFBLENBQUF3RSxjQUFBO0lBQUF2RSxHQUFBO0lBQUFDLEtBQUEsRUFDRCxTQUFBNkMsSUFBSUEsQ0FBQ3pCLElBQUksRUFBRW1ELElBQUksRUFBRTtNQUNmdkIsYUFBQSxDQUFBc0IsY0FBQTtNQUNBLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLEdBQUdELElBQUk7TUFDcEIsSUFBSSxDQUFDbkQsSUFBSSxDQUFDUSxXQUFXLEdBQUdSLElBQUk7SUFDOUI7RUFBQztBQUFBLEVBVnlDaUIsaURBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0Y1Qm9DLFFBQVE7RUFDM0IsU0FBQUEsU0FBQSxFQUFjO0lBQUE1RSxlQUFBLE9BQUE0RSxRQUFBO0lBQ1osSUFBSSxDQUFDckQsSUFBSSxHQUFHaEIsUUFBUSxDQUFDVSxhQUFhLENBQUMsZ0JBQWdCLENBQUM7SUFDcEQsSUFBSSxDQUFDNEQsS0FBSyxHQUFHdEUsUUFBUSxDQUFDVSxhQUFhLENBQUMsa0JBQWtCLENBQUM7SUFDdkQsSUFBSSxDQUFDNkQsTUFBTSxHQUFHdkUsUUFBUSxDQUFDVSxhQUFhLENBQUMsa0JBQWtCLENBQUM7RUFDMUQ7RUFBQyxPQUFBaEIsWUFBQSxDQUFBMkUsUUFBQTtJQUFBMUUsR0FBQTtJQUFBQyxLQUFBLEVBQ0QsU0FBQTRFLFdBQVdBLENBQUEsRUFBRztNQUNaLE9BQU87UUFDTHhELElBQUksRUFBRSxJQUFJLENBQUNBLElBQUksQ0FBQ1EsV0FBVztRQUMzQjhDLEtBQUssRUFBRSxJQUFJLENBQUNBLEtBQUssQ0FBQzlDLFdBQVc7UUFDN0IrQyxNQUFNLEVBQUUsSUFBSSxDQUFDQSxNQUFNLENBQUNIO01BQ3RCLENBQUM7SUFDSDtFQUFDO0lBQUF6RSxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBNkUsV0FBV0EsQ0FBQ3pELElBQUksRUFBRXNELEtBQUssRUFBRUMsTUFBTSxFQUFFO01BQy9CLElBQUksQ0FBQ3ZELElBQUksQ0FBQ1EsV0FBVyxHQUFHUixJQUFJO01BQzVCLElBQUksQ0FBQ3NELEtBQUssQ0FBQzlDLFdBQVcsR0FBRzhDLEtBQUs7TUFDOUIsSUFBSSxDQUFDQyxNQUFNLENBQUNILEdBQUcsR0FBR0csTUFBTTtJQUMxQjtFQUFDO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCSCxJQUFNRyxTQUFTLEdBQUcxRSxRQUFRLENBQUNVLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztBQUM1RCxJQUFNaUUsU0FBUyxHQUFHM0UsUUFBUSxDQUFDVSxhQUFhLENBQUMsYUFBYSxDQUFDO0FBQ3ZELElBQU1rRSxVQUFVLEdBQUc1RSxRQUFRLENBQUNVLGFBQWEsQ0FBQyxjQUFjLENBQUM7QUFBQyxJQUVyQ21FLElBQUk7RUFDdkIsU0FBQUEsS0FDRTdELElBQUksRUFDSm1ELElBQUksRUFDSlcsRUFBRSxFQUNGQyxlQUFlLEVBQ2ZDLGlCQUFpQixFQUNqQkMsVUFBVSxFQUNWQyxhQUFhLEVBQ2JDLE9BQU8sRUFDUDtJQUFBMUYsZUFBQSxPQUFBb0YsSUFBQTtJQUNBLElBQUksQ0FBQzdELElBQUksR0FBR0EsSUFBSTtJQUNoQixJQUFJLENBQUNtRCxJQUFJLEdBQUdBLElBQUk7SUFDaEIsSUFBSSxDQUFDVyxFQUFFLEdBQUdBLEVBQUU7SUFDWixJQUFJLENBQUNDLGVBQWUsR0FBR0EsZUFBZTtJQUN0QyxJQUFJLENBQUNDLGlCQUFpQixHQUFHQSxpQkFBaUI7SUFDMUMsSUFBSSxDQUFDQyxVQUFVLEdBQUdBLFVBQVU7SUFDNUIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBLGFBQWE7SUFDbEMsSUFBSSxDQUFDQyxPQUFPLEdBQUdBLE9BQU87RUFDeEI7RUFBQyxPQUFBekYsWUFBQSxDQUFBbUYsSUFBQTtJQUFBbEYsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQXdGLFdBQVdBLENBQUEsRUFBRztNQUNaLElBQU1DLFdBQVcsR0FBR3JGLFFBQVEsQ0FBQ1UsYUFBYSxDQUFDLG9CQUFvQixDQUFDLENBQUM0RSxPQUFPO01BRXhFLE9BQU9ELFdBQVcsQ0FBQzNFLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDNkUsU0FBUyxDQUFDLElBQUksQ0FBQztJQUNwRTtFQUFDO0lBQUE1RixHQUFBO0lBQUFDLEtBQUEsRUFDRCxTQUFBNEYsYUFBYUEsQ0FBQSxFQUFHO01BQ2QsSUFBSSxDQUFDQyxRQUFRLEdBQUcsSUFBSSxDQUFDTCxXQUFXLENBQUMsQ0FBQztNQUNsQyxJQUFJLENBQUNNLFNBQVMsR0FBRyxJQUFJLENBQUNELFFBQVEsQ0FBQy9FLGFBQWEsQ0FBQyxlQUFlLENBQUM7TUFDN0QsSUFBSSxDQUFDaUYsZUFBZSxHQUFHLElBQUksQ0FBQ0YsUUFBUSxDQUFDL0UsYUFBYSxDQUFDLGdCQUFnQixDQUFDO01BQ3BFLElBQUksQ0FBQ2tGLFdBQVcsR0FBRyxJQUFJLENBQUNILFFBQVEsQ0FBQy9FLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQztNQUN0RSxJQUFJLENBQUNtRixVQUFVLEdBQUcsSUFBSSxDQUFDSixRQUFRLENBQUMvRSxhQUFhLENBQUMsb0JBQW9CLENBQUM7TUFFbkUsSUFBSSxDQUFDZ0YsU0FBUyxDQUFDdEIsR0FBRyxHQUFHLElBQUksQ0FBQ0QsSUFBSTtNQUM5QixJQUFJLENBQUN3QixlQUFlLENBQUNuRSxXQUFXLEdBQUcsSUFBSSxDQUFDUixJQUFJO01BQzVDLElBQUksSUFBSSxDQUFDbUUsT0FBTyxFQUFFO1FBQ2hCLElBQUksQ0FBQ1UsVUFBVSxDQUFDeEUsU0FBUyxDQUFDTSxHQUFHLENBQUMsMEJBQTBCLENBQUM7TUFDM0Q7SUFDRjtFQUFDO0lBQUFoQyxHQUFBO0lBQUFDLEtBQUEsRUFDRCxTQUFBa0csVUFBVUEsQ0FBQSxFQUFHO01BQ1gsSUFBSSxDQUFDTixhQUFhLENBQUMsQ0FBQztNQUNwQixJQUFJLENBQUNPLGtCQUFrQixDQUFDLENBQUM7TUFDekIsT0FBTyxJQUFJLENBQUNOLFFBQVE7SUFDdEI7RUFBQztJQUFBOUYsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQW9HLFVBQVVBLENBQUEsRUFBRztNQUNYLElBQUksQ0FBQ0gsVUFBVSxDQUFDeEUsU0FBUyxDQUFDTSxHQUFHLENBQUMsMEJBQTBCLENBQUM7TUFDekQsSUFBSSxDQUFDc0QsVUFBVSxDQUFDLElBQUksQ0FBQ0gsRUFBRSxFQUFFLElBQUksQ0FBQ2UsVUFBVSxDQUFDO0lBQzNDO0VBQUM7SUFBQWxHLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFxRyxVQUFVQSxDQUFBLEVBQUc7TUFDWCxJQUFJLENBQUNKLFVBQVUsQ0FBQ3hFLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLDBCQUEwQixDQUFDO01BQzVELElBQUksQ0FBQzRELGFBQWEsQ0FBQyxJQUFJLENBQUNKLEVBQUUsRUFBRSxJQUFJLENBQUNlLFVBQVUsQ0FBQztJQUM5QztFQUFDO0lBQUFsRyxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBc0csVUFBVUEsQ0FBQSxFQUFHO01BQ1gsSUFBSSxDQUFDVCxRQUFRLENBQUNuRSxNQUFNLENBQUMsQ0FBQztJQUN4QjtFQUFDO0lBQUEzQixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBbUcsa0JBQWtCQSxDQUFBLEVBQUc7TUFBQSxJQUFBakcsS0FBQTtNQUNuQixJQUFJLENBQUMrRixVQUFVLENBQUNqRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtRQUM5QyxJQUFJOUIsS0FBSSxDQUFDK0YsVUFBVSxDQUFDeEUsU0FBUyxDQUFDOEUsUUFBUSxDQUFDLDBCQUEwQixDQUFDLEVBQUU7VUFDbEVyRyxLQUFJLENBQUNtRyxVQUFVLENBQUMsQ0FBQztRQUNuQixDQUFDLE1BQU07VUFDTG5HLEtBQUksQ0FBQ2tHLFVBQVUsQ0FBQyxDQUFDO1FBQ25CO01BQ0YsQ0FBQyxDQUFDO01BRUYsSUFBSSxDQUFDSixXQUFXLENBQUNoRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtRQUMvQzlCLEtBQUksQ0FBQ2tGLGlCQUFpQixDQUFDbEYsS0FBSSxDQUFDZ0YsRUFBRSxDQUFDO01BQ2pDLENBQUMsQ0FBQztNQUVGLElBQUksQ0FBQ1ksU0FBUyxDQUFDOUQsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07UUFDN0M5QixLQUFJLENBQUNpRixlQUFlLENBQUNqRixLQUFJLENBQUNrQixJQUFJLEVBQUVsQixLQUFJLENBQUNxRSxJQUFJLENBQUM7TUFDNUMsQ0FBQyxDQUFDO0lBQ0o7RUFBQztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUMvRWtCbEMsS0FBSztFQUN4QixTQUFBQSxNQUFZcUIsS0FBSyxFQUFFO0lBQUE3RCxlQUFBLE9BQUF3QyxLQUFBO0lBQ2pCLElBQUksQ0FBQ3FCLEtBQUssR0FBR3RELFFBQVEsQ0FBQ1UsYUFBYSxDQUFDNEMsS0FBSyxDQUFDO0lBQzFDLElBQUksQ0FBQzhDLFNBQVMsR0FBRyxLQUFLOztJQUV0QjtJQUNBLElBQUksSUFBSSxDQUFDOUMsS0FBSyxJQUFJLElBQUksQ0FBQ0EsS0FBSyxDQUFDK0MsT0FBTyxLQUFLLFFBQVEsRUFBRTtNQUNqRCxJQUFJLENBQUNELFNBQVMsR0FBRyxJQUFJO0lBQ3ZCO0VBQ0Y7RUFBQyxPQUFBMUcsWUFBQSxDQUFBdUMsS0FBQTtJQUFBdEMsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQTZDLElBQUlBLENBQUEsRUFBRztNQUNMLElBQUksSUFBSSxDQUFDYSxLQUFLLElBQUksSUFBSSxDQUFDQSxLQUFLLENBQUMrQyxPQUFPLEtBQUssUUFBUSxFQUFFO1FBQ2pELElBQUksQ0FBQy9DLEtBQUssQ0FBQ2dELFNBQVMsQ0FBQyxDQUFDO01BQ3hCLENBQUMsTUFBTTtRQUNMLElBQUksQ0FBQ2hELEtBQUssQ0FBQ2pDLFNBQVMsQ0FBQ00sR0FBRyxDQUFDLGNBQWMsQ0FBQztNQUMxQztJQUNGO0VBQUM7SUFBQWhDLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFnRSxLQUFLQSxDQUFBLEVBQUc7TUFDTjtNQUNBLElBQUksSUFBSSxDQUFDd0MsU0FBUyxFQUFFO1FBQ2xCLElBQUksQ0FBQzlDLEtBQUssQ0FBQ00sS0FBSyxDQUFDLENBQUM7TUFDcEIsQ0FBQyxNQUFNO1FBQ0wsSUFBSSxDQUFDTixLQUFLLENBQUNqQyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxjQUFjLENBQUM7TUFDN0M7SUFDRjtFQUFDO0lBQUEzQixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBMkcsY0FBY0EsQ0FBQ2hELEdBQUcsRUFBRTtNQUNsQjtNQUNBLElBQUlBLEdBQUcsQ0FBQzVELEdBQUcsS0FBSyxRQUFRLEVBQUU7UUFDeEIsSUFBSSxDQUFDaUUsS0FBSyxDQUFDLENBQUM7TUFDZDtJQUNGO0VBQUM7SUFBQWpFLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUF3RCxpQkFBaUJBLENBQUEsRUFBRztNQUFBLElBQUF0RCxLQUFBO01BQ2xCO01BQ0FFLFFBQVEsQ0FBQzRCLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDNEUsQ0FBQyxFQUFLO1FBQ3hDMUcsS0FBSSxDQUFDeUcsY0FBYyxDQUFDQyxDQUFDLENBQUM7TUFDeEIsQ0FBQyxDQUFDOztNQUVGO01BQ0EsSUFBSUMsWUFBWSxHQUFHLElBQUksQ0FBQ25ELEtBQUssQ0FBQ3JELGdCQUFnQixDQUFDLG1CQUFtQixDQUFDO01BQ25FLElBQUksSUFBSSxDQUFDcUQsS0FBSyxJQUFJLElBQUksQ0FBQ0EsS0FBSyxDQUFDK0MsT0FBTyxLQUFLLFFBQVEsRUFBRTtRQUNqREksWUFBWSxHQUFHLElBQUksQ0FBQ25ELEtBQUssQ0FBQ3JELGdCQUFnQixDQUFDLGlCQUFpQixDQUFDO01BQy9EOztNQUVBO01BQ0F3RyxZQUFZLENBQUN0RyxPQUFPLENBQUMsVUFBQ3VHLE1BQU0sRUFBSztRQUMvQkEsTUFBTSxDQUFDOUUsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07VUFDckM5QixLQUFJLENBQUM4RCxLQUFLLENBQUMsQ0FBQztRQUNkLENBQUMsQ0FBQztNQUNKLENBQUMsQ0FBQzs7TUFFRjtNQUNBLElBQUksQ0FBQ04sS0FBSyxDQUFDMUIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUMyQixHQUFHLEVBQUs7UUFDNUM7UUFDQSxJQUFJQSxHQUFHLENBQUNvRCxNQUFNLEtBQUs3RyxLQUFJLENBQUN3RCxLQUFLLEVBQUU7VUFDN0J4RCxLQUFJLENBQUM4RCxLQUFLLENBQUMsQ0FBQztRQUNkO01BQ0YsQ0FBQyxDQUFDO0lBQ0o7RUFBQztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUM3RGtCZ0QsT0FBTztFQUMxQixTQUFBQSxRQUFZQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxFQUFFO0lBQUF0SCxlQUFBLE9BQUFtSCxPQUFBO0lBQ25DLElBQUksQ0FBQ0ksU0FBUyxHQUFHRCxRQUFRO0lBQ3pCLElBQUksQ0FBQ0YsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNO0VBQ3RCO0VBQ0E7RUFBQSxPQUFBcEgsWUFBQSxDQUFBa0gsT0FBQTtJQUFBakgsR0FBQTtJQUFBQyxLQUFBLEVBQ0EsU0FBQXFILFFBQVFBLENBQUEsRUFBRztNQUFBLElBQUFuSCxLQUFBO01BQ1QsSUFBSSxDQUFDK0csS0FBSyxDQUFDMUcsT0FBTyxDQUFDLFVBQUMrRyxPQUFPLEVBQUs7UUFDOUJwSCxLQUFJLENBQUNxSCxPQUFPLENBQUNELE9BQU8sQ0FBQztNQUN2QixDQUFDLENBQUM7SUFDSjs7SUFFQTtFQUFBO0lBQUF2SCxHQUFBO0lBQUFDLEtBQUEsRUFDQSxTQUFBdUgsT0FBT0EsQ0FBQ2hHLElBQUksRUFBRTtNQUNaLElBQUksQ0FBQzZGLFNBQVMsQ0FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQ04sTUFBTSxDQUFDM0YsSUFBSSxDQUFDLENBQUM7SUFDMUM7RUFBQztJQUFBeEIsR0FBQTtJQUFBQyxLQUFBLEVBQ0QsU0FBQXlILFVBQVVBLENBQUNsRyxJQUFJLEVBQUU7TUFDZixJQUFJLENBQUM2RixTQUFTLENBQUNNLE9BQU8sQ0FBQ25HLElBQUksQ0FBQztJQUM5QjtFQUFDO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CSCxJQUFNb0csT0FBTyxHQUFHLGlEQUFpRDtBQUNqRSxJQUFNQyxPQUFPLEdBQUc7RUFDZEMsYUFBYSxFQUFFLHNDQUFzQztFQUNyRCxjQUFjLEVBQUU7QUFDbEIsQ0FBQztBQUFDLElBQ0lDLEdBQUc7RUFBQSxTQUFBQSxJQUFBO0lBQUFqSSxlQUFBLE9BQUFpSSxHQUFBO0VBQUE7RUFBQSxPQUFBaEksWUFBQSxDQUFBZ0ksR0FBQTtJQUFBL0gsR0FBQTtJQUFBQyxLQUFBLEVBQ1AsU0FBQStILGVBQWVBLENBQUEsRUFBRztNQUNoQixPQUFPQyxLQUFLLElBQUE3RyxNQUFBLENBQUl3RyxPQUFPLGFBQVU7UUFDL0JNLE1BQU0sRUFBRSxLQUFLO1FBQ2JMLE9BQU8sRUFBUEE7TUFDRixDQUFDLENBQUMsQ0FBQy9ELElBQUksQ0FBQyxVQUFDcUUsR0FBRyxFQUFLO1FBQ2YsSUFBSUEsR0FBRyxDQUFDQyxFQUFFLEVBQUU7VUFDVixPQUFPRCxHQUFHLENBQUNFLElBQUksQ0FBQyxDQUFDO1FBQ25CO01BQ0YsQ0FBQyxDQUFDO0lBQ0o7RUFBQztJQUFBckksR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQTRFLFdBQVdBLENBQUEsRUFBRztNQUNaLE9BQU9vRCxLQUFLLElBQUE3RyxNQUFBLENBQUl3RyxPQUFPLGdCQUFhO1FBQ2xDTSxNQUFNLEVBQUUsS0FBSztRQUNiTCxPQUFPLEVBQVBBO01BQ0YsQ0FBQyxDQUFDLENBQUMvRCxJQUFJLENBQUMsVUFBQ3FFLEdBQUcsRUFBSztRQUNmLElBQUlBLEdBQUcsQ0FBQ0MsRUFBRSxFQUFFO1VBQ1YsT0FBT0QsR0FBRyxDQUFDRSxJQUFJLENBQUMsQ0FBQztRQUNuQjtNQUNGLENBQUMsQ0FBQztJQUNKO0VBQUM7SUFBQXJJLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFxSSxZQUFZQSxDQUFDQyxJQUFJLEVBQUU7TUFDakIsT0FBT04sS0FBSyxJQUFBN0csTUFBQSxDQUFJd0csT0FBTyxnQkFBYTtRQUNsQ00sTUFBTSxFQUFFLE9BQU87UUFDZkwsT0FBTyxFQUFQQSxPQUFPO1FBQ1BVLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNGLElBQUk7TUFDM0IsQ0FBQyxDQUFDLENBQUN6RSxJQUFJLENBQUMsVUFBQ3FFLEdBQUcsRUFBSztRQUNmLElBQUlBLEdBQUcsQ0FBQ0MsRUFBRSxFQUFFO1VBQ1YsT0FBT0QsR0FBRyxDQUFDRSxJQUFJLENBQUMsQ0FBQztRQUNuQjtNQUNGLENBQUMsQ0FBQztJQUNKO0VBQUM7SUFBQXJJLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUF5SSxjQUFjQSxDQUFDOUQsTUFBTSxFQUFFO01BQ3JCLE9BQU9xRCxLQUFLLElBQUE3RyxNQUFBLENBQUl3RyxPQUFPLHVCQUFvQjtRQUN6Q00sTUFBTSxFQUFFLE9BQU87UUFDZkwsT0FBTyxFQUFQQSxPQUFPO1FBQ1BVLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUM7VUFDbkI3RCxNQUFNLEVBQUVBO1FBQ1YsQ0FBQztNQUNILENBQUMsQ0FBQyxDQUFDZCxJQUFJLENBQUMsVUFBQ3FFLEdBQUcsRUFBSztRQUNmLElBQUlBLEdBQUcsQ0FBQ0MsRUFBRSxFQUFFO1VBQ1YsT0FBT0QsR0FBRyxDQUFDRSxJQUFJLENBQUMsQ0FBQztRQUNuQjtNQUNGLENBQUMsQ0FBQztJQUNKO0VBQUM7SUFBQXJJLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFrRyxVQUFVQSxDQUFDb0MsSUFBSSxFQUFFO01BQ2YsT0FBT04sS0FBSyxJQUFBN0csTUFBQSxDQUFJd0csT0FBTyxjQUFXO1FBQ2hDTSxNQUFNLEVBQUUsTUFBTTtRQUNkTCxPQUFPLEVBQVBBLE9BQU87UUFDUFUsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0YsSUFBSTtNQUMzQixDQUFDLENBQUMsQ0FBQ3pFLElBQUksQ0FBQyxVQUFDcUUsR0FBRyxFQUFLO1FBQ2YsSUFBSUEsR0FBRyxDQUFDQyxFQUFFLEVBQUU7VUFDVixPQUFPRCxHQUFHLENBQUNFLElBQUksQ0FBQyxDQUFDO1FBQ25CO01BQ0YsQ0FBQyxDQUFDO0lBQ0o7RUFBQztJQUFBckksR0FBQTtJQUFBQyxLQUFBLEVBQ0QsU0FBQTBJLFVBQVVBLENBQUN4RCxFQUFFLEVBQUU7TUFDYixPQUFPOEMsS0FBSyxJQUFBN0csTUFBQSxDQUFJd0csT0FBTyxhQUFBeEcsTUFBQSxDQUFVK0QsRUFBRSxHQUFJO1FBQ3JDK0MsTUFBTSxFQUFFLFFBQVE7UUFDaEJMLE9BQU8sRUFBUEE7TUFDRixDQUFDLENBQUMsQ0FBQy9ELElBQUksQ0FBQyxVQUFDcUUsR0FBRyxFQUFLO1FBQ2YsSUFBSUEsR0FBRyxDQUFDQyxFQUFFLEVBQUU7VUFDVixPQUFPRCxHQUFHLENBQUNFLElBQUksQ0FBQyxDQUFDO1FBQ25CO01BQ0YsQ0FBQyxDQUFDO0lBQ0o7RUFBQztJQUFBckksR0FBQTtJQUFBQyxLQUFBLEVBQ0QsU0FBQTJJLFFBQVFBLENBQUN6RCxFQUFFLEVBQUU7TUFDWCxPQUFPOEMsS0FBSyxJQUFBN0csTUFBQSxDQUFJd0csT0FBTyxhQUFBeEcsTUFBQSxDQUFVK0QsRUFBRSxhQUFVO1FBQzNDK0MsTUFBTSxFQUFFLEtBQUs7UUFDYkwsT0FBTyxFQUFQQTtNQUNGLENBQUMsQ0FBQyxDQUFDL0QsSUFBSSxDQUFDLFVBQUNxRSxHQUFHLEVBQUs7UUFDZixJQUFJQSxHQUFHLENBQUNDLEVBQUUsRUFBRTtVQUNWLE9BQU9ELEdBQUcsQ0FBQ0UsSUFBSSxDQUFDLENBQUM7UUFDbkI7TUFDRixDQUFDLENBQUM7SUFDSjtFQUFDO0lBQUFySSxHQUFBO0lBQUFDLEtBQUEsRUFDRCxTQUFBNEksV0FBV0EsQ0FBQzFELEVBQUUsRUFBRTtNQUNkLE9BQU84QyxLQUFLLElBQUE3RyxNQUFBLENBQUl3RyxPQUFPLGFBQUF4RyxNQUFBLENBQVUrRCxFQUFFLGFBQVU7UUFDM0MrQyxNQUFNLEVBQUUsUUFBUTtRQUNoQkwsT0FBTyxFQUFQQTtNQUNGLENBQUMsQ0FBQyxDQUFDL0QsSUFBSSxDQUFDLFVBQUNxRSxHQUFHLEVBQUs7UUFDZixJQUFJQSxHQUFHLENBQUNDLEVBQUUsRUFBRTtVQUNWLE9BQU9ELEdBQUcsQ0FBQ0UsSUFBSSxDQUFDLENBQUM7UUFDbkI7TUFDRixDQUFDLENBQUM7SUFDSjtFQUFDO0FBQUE7QUFHSCxJQUFNUyxHQUFHLEdBQUcsSUFBSWYsR0FBRyxDQUFDLENBQUM7QUFFckIsK0RBQWVlLEdBQUc7Ozs7Ozs7Ozs7O0FDbkdsQjs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEEsOENBQThDOzs7OztXQ0E5QztXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ04yRDtBQUNsQjtBQUN6QztBQUMrQztBQUNKO0FBQ2tCO0FBQ0Y7QUFDVjtBQUN0QjtBQUNnRDtBQUMvQztBQUU1QixJQUFNQyxVQUFVLEdBQUcxSSxRQUFRLENBQUNVLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQztBQUNsRSxJQUFNaUksU0FBUyxHQUFHM0ksUUFBUSxDQUFDVSxhQUFhLENBQUMsYUFBYSxDQUFDO0FBQ3ZELElBQU1rSSxVQUFVLEdBQUc1SSxRQUFRLENBQUNVLGFBQWEsQ0FBQyxjQUFjLENBQUM7QUFDekQsSUFBTW1JLFdBQVcsR0FBRzdJLFFBQVEsQ0FBQ1UsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0FBQzVELElBQU1vSSxhQUFhLEdBQUc5SSxRQUFRLENBQUNVLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztBQUNoRSxJQUFNcUksU0FBUyxHQUFHL0ksUUFBUSxDQUFDVSxhQUFhLENBQUMsc0JBQXNCLENBQUM7QUFDaEUsSUFBTXNJLFFBQVEsR0FBR2hKLFFBQVEsQ0FBQ1UsYUFBYSxDQUFDLGtCQUFrQixDQUFDO0FBQzNELElBQU11SSxRQUFRLEdBQUdqSixRQUFRLENBQUNVLGFBQWEsQ0FBQyxhQUFhLENBQUM7QUFDdEQsSUFBTXdJLFVBQVUsR0FBR2xKLFFBQVEsQ0FBQ1UsYUFBYSxDQUFDLHVCQUF1QixDQUFDOztBQUVsRTtBQUNBLElBQU00QyxLQUFLLEdBQUcsSUFBSUksb0VBQWEsQ0FBQyxhQUFhLEVBQUV5RixTQUFTLENBQUM7QUFFekQsSUFBTUMsZUFBZSxHQUFHLElBQUkxRixvRUFBYSxDQUFDLGVBQWUsRUFBRTJGLFVBQVUsQ0FBQztBQUN0RSxTQUFTQSxVQUFVQSxDQUFDcEYsSUFBSSxFQUFFO0VBQ3hCLE9BQU93RSwrQ0FBRyxDQUFDSixjQUFjLENBQUNwRSxJQUFJLENBQUNNLE1BQU0sQ0FBQyxDQUFDZCxJQUFJLENBQUMsVUFBQzZGLFFBQVEsRUFBSztJQUN4REMsUUFBUSxDQUFDOUUsV0FBVyxDQUFDNkUsUUFBUSxDQUFDdEksSUFBSSxFQUFFc0ksUUFBUSxDQUFDaEYsS0FBSyxFQUFFZ0YsUUFBUSxDQUFDL0UsTUFBTSxDQUFDO0VBQ3RFLENBQUMsQ0FBQztBQUNKO0FBRUEsSUFBTWlGLFlBQVksR0FBRyxJQUFJOUYsb0VBQWEsQ0FBQyxnQkFBZ0IsRUFBRStGLFdBQVcsQ0FBQztBQUNyRSxJQUFNQyxXQUFXLEdBQUcsSUFBSXpILDREQUFLLENBQUMsU0FBUyxDQUFDO0FBQ3hDLElBQU0wSCxVQUFVLEdBQUcsSUFBSXpGLHFFQUFjLENBQUMsU0FBUyxDQUFDO0FBQ2hELElBQU1xRixRQUFRLEdBQUcsSUFBSWxGLCtEQUFRLENBQUMsQ0FBQztBQUUvQixJQUFNdUYscUJBQXFCLEdBQUcsSUFBSTFILDRFQUFxQixDQUNyRCxlQUFlLEVBQ2YsVUFBQ1EsTUFBTSxFQUFFQyxJQUFJLEVBQUs7RUFDaEIsT0FBTzhGLCtDQUFHLENBQUNILFVBQVUsQ0FBQzVGLE1BQU0sQ0FBQyxDQUFDZSxJQUFJLENBQUMsWUFBTTtJQUN2Q21HLHFCQUFxQixDQUFDaEcsS0FBSyxDQUFDLENBQUM7SUFDN0JqQixJQUFJLENBQUN1RCxVQUFVLENBQUMsQ0FBQztFQUNuQixDQUFDLENBQUM7QUFDSixDQUNGLENBQUM7QUFFRCxTQUFTMkQsVUFBVUEsQ0FBQy9FLEVBQUUsRUFBRWUsVUFBVSxFQUFFO0VBQ2xDNUMsT0FBTyxDQUFDQyxHQUFHLENBQUM0QixFQUFFLEVBQUVlLFVBQVUsQ0FBQztFQUUzQjRDLCtDQUFHLENBQUNGLFFBQVEsQ0FBQ3pELEVBQUUsQ0FBQyxDQUFDckIsSUFBSSxDQUFDLFlBQU07SUFDMUJSLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGdEQUFnRCxDQUFDO0VBQy9ELENBQUMsQ0FBQztBQUNKO0FBRUEsU0FBU2dDLGFBQWFBLENBQUNKLEVBQUUsRUFBRTtFQUN6QjJELCtDQUFHLENBQUNELFdBQVcsQ0FBQzFELEVBQUUsQ0FBQyxDQUFDckIsSUFBSSxDQUFDLFlBQU07SUFDN0JSLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHNDQUFzQyxDQUFDO0VBQ3JELENBQUMsQ0FBQztBQUNKO0FBRUFJLEtBQUssQ0FBQ0YsaUJBQWlCLENBQUMsQ0FBQztBQUN6Qm9HLFlBQVksQ0FBQ3BHLGlCQUFpQixDQUFDLENBQUM7QUFDaENzRyxXQUFXLENBQUN0RyxpQkFBaUIsQ0FBQyxDQUFDO0FBQy9CdUcsVUFBVSxDQUFDdkcsaUJBQWlCLENBQUMsQ0FBQztBQUM5QmdHLGVBQWUsQ0FBQ2hHLGlCQUFpQixDQUFDLENBQUM7QUFDbkN3RyxxQkFBcUIsQ0FBQ3hHLGlCQUFpQixDQUFDLENBQUM7O0FBRXpDOztBQUVBMkYsU0FBUyxDQUFDbkgsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVU0RSxDQUFDLEVBQUU7RUFDL0NBLENBQUMsQ0FBQ2hELGNBQWMsQ0FBQyxDQUFDO0VBQ2xCRixLQUFLLENBQUNiLElBQUksQ0FBQyxDQUFDO0FBQ2QsQ0FBQyxDQUFDO0FBRUZpRyxVQUFVLENBQUM5RyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBVTRFLENBQUMsRUFBRTtFQUNoREEsQ0FBQyxDQUFDaEQsY0FBYyxDQUFDLENBQUM7RUFDbEJnRyxZQUFZLENBQUMvRyxJQUFJLENBQUMsQ0FBQztFQUNuQnFILGFBQWEsQ0FBQyxDQUFDO0FBQ2pCLENBQUMsQ0FBQztBQUVGLElBQUlDLE9BQU87QUFFWCxTQUFTWixTQUFTQSxDQUFBLEVBQUc7RUFDbkIsT0FBT1YsK0NBQUcsQ0FDUDNDLFVBQVUsQ0FBQztJQUNWOUUsSUFBSSxFQUFFZ0ksUUFBUSxDQUFDcEosS0FBSztJQUNwQnVFLElBQUksRUFBRThFLFFBQVEsQ0FBQ3JKO0VBQ2pCLENBQUMsQ0FBQyxDQUNENkQsSUFBSSxDQUFDLFVBQUM2RixRQUFRLEVBQUs7SUFDbEIsSUFBTVUsT0FBTyxHQUFHbEUsVUFBVSxDQUFDd0QsUUFBUSxDQUFDO0lBRXBDUyxPQUFPLENBQUMxQyxVQUFVLENBQUMyQyxPQUFPLENBQUM7RUFDN0IsQ0FBQyxDQUFDO0FBQ047QUFFQXZCLCtDQUFHLENBQUNkLGVBQWUsQ0FBQyxDQUFDLENBQUNsRSxJQUFJLENBQUMsVUFBQ3dHLFlBQVksRUFBSztFQUMzQ0YsT0FBTyxHQUFHLElBQUluRCw4REFBTyxDQUFDcUQsWUFBWSxFQUFFbkUsVUFBVSxFQUFFb0UsUUFBUSxDQUFDO0VBRXpESCxPQUFPLENBQUM5QyxRQUFRLENBQUMsQ0FBQztBQUNwQixDQUFDLENBQUM7QUFFRndCLCtDQUFHLENBQUNqRSxXQUFXLENBQUMsQ0FBQyxDQUFDZixJQUFJLENBQUMsVUFBQzBHLFFBQVEsRUFBSztFQUNuQ1osUUFBUSxDQUFDOUUsV0FBVyxDQUFDMEYsUUFBUSxDQUFDbkosSUFBSSxFQUFFbUosUUFBUSxDQUFDN0YsS0FBSyxFQUFFNkYsUUFBUSxDQUFDNUYsTUFBTSxDQUFDO0FBQ3RFLENBQUMsQ0FBQztBQUVGMkUsVUFBVSxDQUFDdEgsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUMyQixHQUFHLEVBQUs7RUFDNUNBLEdBQUcsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7RUFDcEI0RixlQUFlLENBQUMzRyxJQUFJLENBQUMsQ0FBQztBQUN4QixDQUFDLENBQUM7QUFFRixTQUFTZ0gsV0FBV0EsQ0FBQ3hGLElBQUksRUFBRTtFQUN6QixPQUFPd0UsK0NBQUcsQ0FBQ1IsWUFBWSxDQUFDaEUsSUFBSSxDQUFDLENBQUNSLElBQUksQ0FBQyxVQUFDMEcsUUFBUSxFQUFLO0lBQy9DWixRQUFRLENBQUM5RSxXQUFXLENBQUMwRixRQUFRLENBQUNuSixJQUFJLEVBQUVtSixRQUFRLENBQUM3RixLQUFLLEVBQUU2RixRQUFRLENBQUM1RixNQUFNLENBQUM7RUFDdEUsQ0FBQyxDQUFDO0FBQ0o7QUFDQSxTQUFTdUYsYUFBYUEsQ0FBQSxFQUFHO0VBQ3ZCbkIsU0FBUyxDQUFDL0ksS0FBSyxHQUFHaUosV0FBVyxDQUFDckgsV0FBVztFQUN6Q29ILFVBQVUsQ0FBQ2hKLEtBQUssR0FBR2tKLGFBQWEsQ0FBQ3RILFdBQVc7QUFDOUM7QUFDQXNJLGFBQWEsQ0FBQyxDQUFDOztBQUVmO0FBQ0EsU0FBU2hFLFVBQVVBLENBQUMzRSxJQUFJLEVBQUU7RUFDeEIsSUFBTXdCLElBQUksR0FBRyxJQUFJa0MsMkRBQUksQ0FDbkIxRCxJQUFJLENBQUNILElBQUksRUFDVEcsSUFBSSxDQUFDZ0QsSUFBSSxFQUNUaEQsSUFBSSxDQUFDaUosR0FBRyxFQUNSQyxlQUFlLEVBQ2YsWUFBTTtJQUNKVCxxQkFBcUIsQ0FBQ25ILElBQUksQ0FBQ3RCLElBQUksQ0FBQ2lKLEdBQUcsRUFBRXpILElBQUksQ0FBQztFQUM1QyxDQUFDLEVBQ0RrSCxVQUFVLEVBQ1YzRSxhQUFhLEVBQ2IvRCxJQUFJLENBQUNnRSxPQUNQLENBQUM7RUFFRCxJQUFNRSxXQUFXLEdBQUcxQyxJQUFJLENBQUNtRCxVQUFVLENBQUMsQ0FBQztFQUNyQyxPQUFPVCxXQUFXO0FBQ3BCO0FBQ0EsSUFBTTZFLFFBQVEsR0FBR2xLLFFBQVEsQ0FBQ1UsYUFBYSxDQUFDLHNCQUFzQixDQUFDO0FBRS9ELFNBQVMySixlQUFlQSxDQUFDckosSUFBSSxFQUFFbUQsSUFBSSxFQUFFO0VBQ25Dd0YsVUFBVSxDQUFDbEgsSUFBSSxDQUFDekIsSUFBSSxFQUFFbUQsSUFBSSxDQUFDO0FBQzdCOztBQUVBOztBQUVBLElBQU1tRyxrQkFBa0IsR0FBRztFQUN6QnBLLFlBQVksRUFBRSxjQUFjO0VBQzVCTSxhQUFhLEVBQUUsZUFBZTtFQUM5Qkcsb0JBQW9CLEVBQUUsdUJBQXVCO0VBQzdDb0IsbUJBQW1CLEVBQUUsd0JBQXdCO0VBQzdDUixlQUFlLEVBQUUseUJBQXlCO0VBQzFDZ0osVUFBVSxFQUFFO0FBQ2QsQ0FBQztBQUVELElBQU1DLFVBQVUsR0FBRyxJQUFJakwsb0VBQWEsQ0FBQytLLGtCQUFrQixDQUFDO0FBQ3hERSxVQUFVLENBQUMzSyxnQkFBZ0IsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJfcHJvamVjdF9hcm91bmQvLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0X2Fyb3VuZC8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aENvbmZpcm1hdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF9hcm91bmQvLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0X2Fyb3VuZC8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0X2Fyb3VuZC8uL3NyYy9jb21wb25lbnRzL1VzZXJJbmZvLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0X2Fyb3VuZC8uL3NyYy9jb21wb25lbnRzL2NhcmQuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kLy4vc3JjL2NvbXBvbmVudHMvcG9wdXAuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kLy4vc3JjL2NvbXBvbmVudHMvc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF9hcm91bmQvLi9zcmMvc2NyaXB0cy9BcGkuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kLy4vc3JjL3BhZ2VzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF9hcm91bmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF9hcm91bmQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF9hcm91bmQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF9hcm91bmQvLi9zcmMvc2NyaXB0cy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtVmFsaWRhdG9yIHtcclxuICBjb25zdHJ1Y3RvcihzZXR0aW5ncykge1xyXG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xyXG4gIH1cclxuXHJcbiAgZW5hYmxlVmFsaWRhdGlvbigpIHtcclxuICAgIGNvbnN0IGZvcm1MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLnNldHRpbmdzLmZvcm1TZWxlY3Rvcik7XHJcblxyXG4gICAgZm9ybUxpc3QuZm9yRWFjaCgoZm9yRWxlbWVudCkgPT4ge1xyXG4gICAgICBjb25zdCBpbnB1dExpc3QgPSBBcnJheS5mcm9tKFxyXG4gICAgICAgIGZvckVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLnNldHRpbmdzLmlucHV0U2VsZWN0b3IpXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGZvckVsZW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICB0aGlzLnNldHRpbmdzLnN1Ym1pdEJ1dHRvblNlbGVjdG9yXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuY2hlY2tJbXB1dFZhbGlkaXRpKGlucHV0TGlzdCwgc3VibWl0QnV0dG9uLCB0aGlzLnNldHRpbmdzKTtcclxuXHJcbiAgICAgIGlucHV0TGlzdC5mb3JFYWNoKChpbnB1dEVsZW1lbnQpID0+IHtcclxuICAgICAgICBjb25zdCBlcnJvckVsZW1lbnQgPSBmb3JFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICBgIyR7aW5wdXRFbGVtZW50Lm5hbWV9LWVycm9yYFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgaGFuVmFsdWUgPSBpbnB1dExpc3Quc29tZSgoaXRlbSkgPT4gaXRlbS52YWx1ZS5sZW5ndGggPiAwKTtcclxuICAgICAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLnNldHRpbmdzLmlucHV0RXJyb3JDbGFzcyk7XHJcbiAgICAgICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gaGFuVmFsdWVcclxuICAgICAgICAgID8gaW5wdXRFbGVtZW50LnZhbGlkYXRpb25NZXNzYWdlXHJcbiAgICAgICAgICA6IFwiXCI7XHJcblxyXG4gICAgICAgIGlmICghaW5wdXRFbGVtZW50LmNoZWNrVmFsaWRpdHkoKSkge1xyXG4gICAgICAgICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5zZXR0aW5ncy5pbnB1dEVycm9yQ2xhc3MpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLnNldHRpbmdzLmlucHV0RXJyb3JDbGFzcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuY2hlY2tJbXB1dFZhbGlkaXRpKGlucHV0TGlzdCwgc3VibWl0QnV0dG9uLCB0aGlzLnNldHRpbmdzKTtcclxuICAgICAgICAgIGVycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IGlucHV0RWxlbWVudC52YWxpZGF0aW9uTWVzc2FnZTtcclxuXHJcbiAgICAgICAgICBpZiAoIWlucHV0RWxlbWVudC5jaGVja1ZhbGlkaXR5KCkpIHtcclxuICAgICAgICAgICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5zZXR0aW5ncy5pbnB1dEVycm9yQ2xhc3MpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5zZXR0aW5ncy5pbnB1dEVycm9yQ2xhc3MpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tJbXB1dFZhbGlkaXRpKGlucHV0TGlzdCwgc3VibWl0QnV0dG9uLCBzZXR0aW5ncykge1xyXG4gICAgY29uc3QgaGFzSW52YWxpZElucHV0ID0gaW5wdXRMaXN0LnNvbWUoKGlucHV0RWxlbWVudCkgPT4ge1xyXG4gICAgICByZXR1cm4gIWlucHV0RWxlbWVudC5jaGVja1ZhbGlkaXR5KCk7XHJcbiAgICB9KTtcclxuICAgIGlmIChoYXNJbnZhbGlkSW5wdXQpIHtcclxuICAgICAgc3VibWl0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoc2V0dGluZ3MuaW5hY3RpdmVCdXR0b25DbGFzcyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdWJtaXRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoc2V0dGluZ3MuaW5hY3RpdmVCdXR0b25DbGFzcyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9wb3B1cC5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoQ29uZmlybWF0aW9uIGV4dGVuZHMgUG9wdXAge1xyXG4gIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IsIGhhbmRsZU9uU3VibWl0KSB7XHJcbiAgICBzdXBlcihwb3B1cFNlbGVjdG9yKTtcclxuICAgIHRoaXMuaGFuZGxlT25TdWJtaXQgPSBoYW5kbGVPblN1Ym1pdDtcclxuICAgIHRoaXMuX2NhcmRJZCA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBvcGVuKGNhcmRJZCwgY2FyZCkge1xyXG4gICAgc3VwZXIub3BlbigpO1xyXG4gICAgdGhpcy5fY2FyZElkID0gY2FyZElkO1xyXG4gICAgdGhpcy5jYXJkID0gY2FyZDtcclxuICB9XHJcblxyXG4gIHJlbmRlckxvZ2luKGlzTG9hZGluZywgYm90b25Mb2FkaW5nLCBvcmlnaW5hbFRleHQpIHtcclxuICAgIGNvbnNvbGUubG9nKG9yaWdpbmFsVGV4dCk7XHJcbiAgICBpZiAoaXNMb2FkaW5nKSB7XHJcbiAgICAgIGJvdG9uTG9hZGluZy50ZXh0Q29udGVudCA9IFwiQ2FyZ2FuZG8uLi5cIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJvdG9uTG9hZGluZy50ZXh0Q29udGVudCA9IG9yaWdpbmFsVGV4dDtcclxuICAgIH1cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge30sIDMwMDApO1xyXG4gIH1cclxuXHJcbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xyXG4gICAgY29uc3QgYm90b25Mb2FkaW5nID0gdGhpcy5wb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1sb2FkaW5nXCIpO1xyXG4gICAgY29uc3Qgb3JpZ2luYWxUZXh0ID0gYm90b25Mb2FkaW5nLnRleHRDb250ZW50O1xyXG4gICAgdGhpcy5wb3B1cFxyXG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fZm9ybVwiKVxyXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZ0KSA9PiB7XHJcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJMb2dpbih0cnVlLCBib3RvbkxvYWRpbmcsIG9yaWdpbmFsVGV4dCk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVPblN1Ym1pdCh0aGlzLl9jYXJkSWQsIHRoaXMuY2FyZCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnJlbmRlckxvZ2luKGZhbHNlLCBib3RvbkxvYWRpbmcsIG9yaWdpbmFsVGV4dCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vcG9wdXAuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEZvcm0gZXh0ZW5kcyBQb3B1cCB7XHJcbiAgY29uc3RydWN0b3IocG9wdXAsIGhhbmRsZUZvcnN1Ym1pdCkge1xyXG4gICAgc3VwZXIocG9wdXApO1xyXG4gICAgdGhpcy5oYW5kbGVGb3JzdWJtaXQgPSBoYW5kbGVGb3JzdWJtaXQ7XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpIHtcclxuICAgIHN1cGVyLmNsb3NlKCk7XHJcbiAgICBjb25zdCBmb3JtID0gdGhpcy5wb3B1cC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19mb3JtXCIpO1xyXG4gICAgZm9ybS5yZXNldCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW5wdXRWYWx1ZXMoKSB7XHJcbiAgICBsZXQgdmFsdWVzID0ge307XHJcbiAgICBjb25zdCBmb3JtID0gdGhpcy5wb3B1cC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19mb3JtXCIpO1xyXG4gICAgY29uc3QgaW5wdXRMaXN0ID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIik7XHJcbiAgICBpbnB1dExpc3QuZm9yRWFjaCgocG9wdXApID0+IHtcclxuICAgICAgaWYgKHBvcHVwLm5hbWUpIHtcclxuICAgICAgICB2YWx1ZXNbcG9wdXAubmFtZV0gPSBwb3B1cC52YWx1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdmFsdWVzO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyTG9naW4oaXNMb2FkaW5nLCBib3RvbkxvYWRpbmcsIG9yaWdpbmFsVGV4dCkge1xyXG4gICAgY29uc29sZS5sb2cob3JpZ2luYWxUZXh0KTtcclxuICAgIGlmIChpc0xvYWRpbmcpIHtcclxuICAgICAgYm90b25Mb2FkaW5nLnRleHRDb250ZW50ID0gXCJDYXJnYW5kby4uLlwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYm90b25Mb2FkaW5nLnRleHRDb250ZW50ID0gb3JpZ2luYWxUZXh0O1xyXG4gICAgfVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7fSwgMzAwMCk7XHJcbiAgfVxyXG5cclxuICBzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICBjb25zdCBmb3JtID0gdGhpcy5wb3B1cC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19mb3JtXCIpO1xyXG4gICAgY29uc3QgYm90b25Mb2FkaW5nID0gdGhpcy5wb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1sb2FkaW5nXCIpO1xyXG4gICAgY29uc3Qgb3JpZ2luYWxUZXh0ID0gYm90b25Mb2FkaW5nLnRleHRDb250ZW50O1xyXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldnQpID0+IHtcclxuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHRoaXMucmVuZGVyTG9naW4odHJ1ZSwgYm90b25Mb2FkaW5nLCBvcmlnaW5hbFRleHQpO1xyXG4gICAgICBjb25zdCBkYXRhID0gdGhpcy5nZXRJbnB1dFZhbHVlcygpO1xyXG4gICAgICB0aGlzLmhhbmRsZUZvcnN1Ym1pdChkYXRhKS50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLnJlbmRlckxvZ2luKGZhbHNlLCBib3RvbkxvYWRpbmcsIG9yaWdpbmFsVGV4dCk7XHJcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vcG9wdXAuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEltYWdlIGV4dGVuZHMgUG9wdXAge1xyXG4gIGNvbnN0cnVjdG9yKHBvcHVwKSB7XHJcbiAgICBzdXBlcihwb3B1cCk7XHJcbiAgICB0aGlzLm5hbWUgPSB0aGlzLnBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuZGlhbG9nX190ZXh0XCIpO1xyXG4gICAgdGhpcy5saW5rID0gdGhpcy5wb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmRpYWxvZ19faW1nXCIpO1xyXG4gIH1cclxuICBvcGVuKG5hbWUsIGxpbmspIHtcclxuICAgIHN1cGVyLm9wZW4oKTtcclxuICAgIHRoaXMubGluay5zcmMgPSBsaW5rO1xyXG4gICAgdGhpcy5uYW1lLnRleHRDb250ZW50ID0gbmFtZTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckluZm8ge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5uYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19uYW1lXCIpO1xyXG4gICAgdGhpcy5hYm91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9faG9iYmllXCIpO1xyXG4gICAgdGhpcy5hdmF0YXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2F2YXRhclwiKTtcclxuICB9XHJcbiAgZ2V0VXNlckluZm8oKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuYW1lOiB0aGlzLm5hbWUudGV4dENvbnRlbnQsXHJcbiAgICAgIGFib3V0OiB0aGlzLmFib3V0LnRleHRDb250ZW50LFxyXG4gICAgICBhdmF0YXI6IHRoaXMuYXZhdGFyLnNyYyxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzZXRVc2VySW5mbyhuYW1lLCBhYm91dCwgYXZhdGFyKSB7XHJcbiAgICB0aGlzLm5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgdGhpcy5hYm91dC50ZXh0Q29udGVudCA9IGFib3V0O1xyXG4gICAgdGhpcy5hdmF0YXIuc3JjID0gYXZhdGFyO1xyXG4gIH1cclxufVxyXG4iLCJjb25zdCBkaWFsb2dJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpYWxvZ19fY29udGVudFwiKTtcclxuY29uc3QgaW1nRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkaWFsb2ctaW1nXCIpO1xyXG5jb25zdCB0ZXh0RGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkaWFsb2ctdGV4dFwiKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgbmFtZSxcclxuICAgIGxpbmssXHJcbiAgICBpZCxcclxuICAgIGhhbmRsZUNhcmRDbGljayxcclxuICAgIGhhbmRsZURlbGV0ZUNsaWNrLFxyXG4gICAgaGFuZGxlbGljayxcclxuICAgIGhhbmRsZURpc0xpa2UsXHJcbiAgICBpc0xpa2VkXHJcbiAgKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5saW5rID0gbGluaztcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMuaGFuZGxlQ2FyZENsaWNrID0gaGFuZGxlQ2FyZENsaWNrO1xyXG4gICAgdGhpcy5oYW5kbGVEZWxldGVDbGljayA9IGhhbmRsZURlbGV0ZUNsaWNrO1xyXG4gICAgdGhpcy5oYW5kbGVsaWNrID0gaGFuZGxlbGljaztcclxuICAgIHRoaXMuaGFuZGxlRGlzTGlrZSA9IGhhbmRsZURpc0xpa2U7XHJcbiAgICB0aGlzLmlzTGlrZWQgPSBpc0xpa2VkO1xyXG4gIH1cclxuXHJcbiAgZ2V0VGVtcGxhdGUoKSB7XHJcbiAgICBjb25zdCBjYXJkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWxlbWVudHNfdGVtcGxhdGVcIikuY29udGVudDtcclxuXHJcbiAgICByZXR1cm4gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50c19jYXJkXCIpLmNsb25lTm9kZSh0cnVlKTtcclxuICB9XHJcbiAgc2V0UHJvcGVydGllcygpIHtcclxuICAgIHRoaXMuaHRtbENhcmQgPSB0aGlzLmdldFRlbXBsYXRlKCk7XHJcbiAgICB0aGlzLmNhcmRJbWFnZSA9IHRoaXMuaHRtbENhcmQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50c19pbWdcIik7XHJcbiAgICB0aGlzLmNhcmREZXNjcmlwdGlvbiA9IHRoaXMuaHRtbENhcmQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50c190ZXh0XCIpO1xyXG4gICAgdGhpcy5idXR0b25UcmFzaCA9IHRoaXMuaHRtbENhcmQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50c19fdHJhc2gtaW1nXCIpO1xyXG4gICAgdGhpcy5idXR0b25MaW5rID0gdGhpcy5odG1sQ2FyZC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRzX2xpbmstaW1nXCIpO1xyXG5cclxuICAgIHRoaXMuY2FyZEltYWdlLnNyYyA9IHRoaXMubGluaztcclxuICAgIHRoaXMuY2FyZERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGhpcy5uYW1lO1xyXG4gICAgaWYgKHRoaXMuaXNMaWtlZCkge1xyXG4gICAgICB0aGlzLmJ1dHRvbkxpbmsuY2xhc3NMaXN0LmFkZChcImVsZW1lbnRzX2xpbmstaW1nLWFjdGl2ZVwiKTtcclxuICAgIH1cclxuICB9XHJcbiAgY3JlYXRlQ2FyZCgpIHtcclxuICAgIHRoaXMuc2V0UHJvcGVydGllcygpO1xyXG4gICAgdGhpcy5zZXRFdmVudHNMaXN0ZW5lcnMoKTtcclxuICAgIHJldHVybiB0aGlzLmh0bWxDYXJkO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlTGlrZSgpIHtcclxuICAgIHRoaXMuYnV0dG9uTGluay5jbGFzc0xpc3QuYWRkKFwiZWxlbWVudHNfbGluay1pbWctYWN0aXZlXCIpO1xyXG4gICAgdGhpcy5oYW5kbGVsaWNrKHRoaXMuaWQsIHRoaXMuYnV0dG9uTGluayk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVMaWtlKCkge1xyXG4gICAgdGhpcy5idXR0b25MaW5rLmNsYXNzTGlzdC5yZW1vdmUoXCJlbGVtZW50c19saW5rLWltZy1hY3RpdmVcIik7XHJcbiAgICB0aGlzLmhhbmRsZURpc0xpa2UodGhpcy5pZCwgdGhpcy5idXR0b25MaW5rKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUNhcmQoKSB7XHJcbiAgICB0aGlzLmh0bWxDYXJkLnJlbW92ZSgpO1xyXG4gIH1cclxuXHJcbiAgc2V0RXZlbnRzTGlzdGVuZXJzKCkge1xyXG4gICAgdGhpcy5idXR0b25MaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmJ1dHRvbkxpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZWxlbWVudHNfbGluay1pbWctYWN0aXZlXCIpKSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVMaWtlKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy50b2dnbGVMaWtlKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuYnV0dG9uVHJhc2guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5oYW5kbGVEZWxldGVDbGljayh0aGlzLmlkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuY2FyZEltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuaGFuZGxlQ2FyZENsaWNrKHRoaXMubmFtZSwgdGhpcy5saW5rKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCB7XHJcbiAgY29uc3RydWN0b3IocG9wdXApIHtcclxuICAgIHRoaXMucG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBvcHVwKTtcclxuICAgIHRoaXMuX2lzRGlhbG9nID0gZmFsc2U7XHJcblxyXG4gICAgLy8gdXNvIGRlIHRoaXMucG9wdXAgZW4gbHVnYXIgZGUgdGhpcy5fcG9wdXBTZWxlY3RvclxyXG4gICAgaWYgKHRoaXMucG9wdXAgJiYgdGhpcy5wb3B1cC50YWdOYW1lID09PSBcIkRJQUxPR1wiKSB7XHJcbiAgICAgIHRoaXMuX2lzRGlhbG9nID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9wZW4oKSB7XHJcbiAgICBpZiAodGhpcy5wb3B1cCAmJiB0aGlzLnBvcHVwLnRhZ05hbWUgPT09IFwiRElBTE9HXCIpIHtcclxuICAgICAgdGhpcy5wb3B1cC5zaG93TW9kYWwoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucG9wdXAuY2xhc3NMaXN0LmFkZChcInBvcHVwX29wZW5lZFwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsb3NlKCkge1xyXG4gICAgLy8gY2llcnJlIGRlbCBwb3B1cCBkZXBlbmRpZW5kbyBkZSBzaSBlcyB1biBESUFMT0cgbyB1biBkaXZcclxuICAgIGlmICh0aGlzLl9pc0RpYWxvZykge1xyXG4gICAgICB0aGlzLnBvcHVwLmNsb3NlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJwb3B1cF9vcGVuZWRcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVFc2NDbG9zZShldnQpIHtcclxuICAgIC8vIENpZXJyYSBlbCBwb3B1cCBzaSBzZSBwcmVzaW9uYSBsYSB0ZWNsYSBFc2NhcGVcclxuICAgIGlmIChldnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XHJcbiAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgLy8gRXNjdWNoYSBlbCBldmVudG8gZGUgRXNjYXBlIHBhcmEgY2VycmFyIGVsIHBvcHVwXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGUpID0+IHtcclxuICAgICAgdGhpcy5oYW5kbGVFc2NDbG9zZShlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFNlbGVjY2lvbmEgdG9kb3MgbG9zIGJvdG9uZXMgZGUgY2llcnJlXHJcbiAgICBsZXQgY2xvc2VCdXR0b25zID0gdGhpcy5wb3B1cC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBvcHVwX19jbG9zZS1idG5cIik7XHJcbiAgICBpZiAodGhpcy5wb3B1cCAmJiB0aGlzLnBvcHVwLnRhZ05hbWUgPT09IFwiRElBTE9HXCIpIHtcclxuICAgICAgY2xvc2VCdXR0b25zID0gdGhpcy5wb3B1cC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRpYWxvZ19fYnV0dG9uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFzZWd1cmEgcXVlIGNhZGEgYm90w7NuIGRlIGNpZXJyZSBjaWVycmUgZWwgcG9wdXBcclxuICAgIGNsb3NlQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcclxuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIENpZXJyYSBlbCBwb3B1cCBzaSBzZSBoYWNlIGNsaWMgZW4gZWwgZm9uZG8gKG92ZXJsYXkpXHJcbiAgICB0aGlzLnBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZ0KSA9PiB7XHJcbiAgICAgIC8vIFNpIGVsIG9iamV0aXZvIGRlbCBjbGljIGVzIGVsIGZvbmRvLCBjaWVycmEgZWwgcG9wdXBcclxuICAgICAgaWYgKGV2dC50YXJnZXQgPT09IHRoaXMucG9wdXApIHtcclxuICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9uIHtcclxuICBjb25zdHJ1Y3RvcihpdGVtcywgcmVuZGVyLCBzZWxlY3Rvcikge1xyXG4gICAgdGhpcy5jb250YWluZXIgPSBzZWxlY3RvcjtcclxuICAgIHRoaXMuaXRlbXMgPSBpdGVtcztcclxuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyO1xyXG4gIH1cclxuICAvLyBtZXRvZG8gcXVlIHNlIGVuY2FyZ2EgZGUgbWFwZWFyXHJcbiAgcmVuZGVyZXIoKSB7XHJcbiAgICB0aGlzLml0ZW1zLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgdGhpcy5hZGRJdGVtKGVsZW1lbnQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBhZ3JlZ2FyIGVsZW1lbnRvIGFsIERvbVxyXG4gIGFkZEl0ZW0oaXRlbSkge1xyXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kKHRoaXMucmVuZGVyKGl0ZW0pKTtcclxuICB9XHJcbiAgYWRkTmV3SXRlbShpdGVtKSB7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5wcmVwZW5kKGl0ZW0pO1xyXG4gIH1cclxufVxyXG4iLCJjb25zdCBiYXNlVVJMID0gXCJodHRwczovL2Fyb3VuZC1hcGkuZXMudHJpcGxldGVuLXNlcnZpY2VzLmNvbS92MVwiO1xyXG5jb25zdCBoZWFkZXJzID0ge1xyXG4gIGF1dGhvcml6YXRpb246IFwiMzg3YTM4MDgtYWQ2ZC00NWNkLWIxMjctOWRiNTgzM2M4ZTkzXCIsXHJcbiAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbn07XHJcbmNsYXNzIEFwaSB7XHJcbiAgZ2V0SW5pdGlhbENhcmRzKCkge1xyXG4gICAgcmV0dXJuIGZldGNoKGAke2Jhc2VVUkx9L2NhcmRzYCwge1xyXG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgIGhlYWRlcnMsXHJcbiAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgaWYgKHJlcy5vaykge1xyXG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldFVzZXJJbmZvKCkge1xyXG4gICAgcmV0dXJuIGZldGNoKGAke2Jhc2VVUkx9L3VzZXJzL21lYCwge1xyXG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgIGhlYWRlcnMsXHJcbiAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgaWYgKHJlcy5vaykge1xyXG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGVkaXRVc2VySW5mbyhib2R5KSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7YmFzZVVSTH0vdXNlcnMvbWVgLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQQVRDSFwiLFxyXG4gICAgICBoZWFkZXJzLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcclxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZWRpdEF2YXRhclVzZXIoYXZhdGFyKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7YmFzZVVSTH0vdXNlcnMvbWUvYXZhdGFyYCwge1xyXG4gICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcclxuICAgICAgaGVhZGVycyxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGF2YXRhcjogYXZhdGFyLFxyXG4gICAgICB9KSxcclxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlQ2FyZChib2R5KSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7YmFzZVVSTH0vY2FyZHMvYCwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcclxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICBkZWxldGVDYXJkKGlkKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7YmFzZVVSTH0vY2FyZHMvJHtpZH1gLCB7XHJcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgaGVhZGVycyxcclxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICBsaWtlQ2FyZChpZCkge1xyXG4gICAgcmV0dXJuIGZldGNoKGAke2Jhc2VVUkx9L2NhcmRzLyR7aWR9L2xpa2VzYCwge1xyXG4gICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICAgIGhlYWRlcnMsXHJcbiAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgaWYgKHJlcy5vaykge1xyXG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgZGlzbGlrZUNhcmQoaWQpIHtcclxuICAgIHJldHVybiBmZXRjaChgJHtiYXNlVVJMfS9jYXJkcy8ke2lkfS9saWtlc2AsIHtcclxuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICBoZWFkZXJzLFxyXG4gICAgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGlmIChyZXMub2spIHtcclxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBhcGkgPSBuZXcgQXBpKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcGk7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBGb3JtVmFsaWRhdG9yIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanNcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2FyZC5qc1wiO1xyXG4vKmltcG9ydCB7IGluaXRpYWxDYXJkcyB9IGZyb20gXCIuL3V0aWxzLmpzXCI7Ki9cclxuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvc2VjdGlvbi5qc1wiO1xyXG5pbXBvcnQgUG9wdXAgZnJvbSBcIi4uL2NvbXBvbmVudHMvcG9wdXAuanNcIjtcclxuaW1wb3J0IFBvcHVwV2l0aEltYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzXCI7XHJcbmltcG9ydCBQb3B1cFdpdGhGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanNcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCIuLi9jb21wb25lbnRzL1VzZXJJbmZvLmpzXCI7XHJcbmltcG9ydCBhcGkgZnJvbSBcIi4vQXBpLmpzXCI7XHJcbmltcG9ydCBQb3B1cFdpdGhDb25maXJtYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoQ29uZmlybWF0aW9uLmpzXCI7XHJcbmltcG9ydCBcIi4uL3BhZ2VzL2luZGV4LmNzc1wiO1xyXG5cclxuY29uc3QgYnV0dG9uRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fZWRpdC1idXR0b25cIik7XHJcbmNvbnN0IGlucHV0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcG9wdXAtbmFtZVwiKTtcclxuY29uc3QgaW5wdXRBYm91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcG9wdXAtYWJvdXRcIik7XHJcbmNvbnN0IHByb2ZpbGVOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19uYW1lXCIpO1xyXG5jb25zdCBwcm9maWxlSG9iYmllID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19ob2JiaWVcIik7XHJcbmNvbnN0IGJ1dHRvbkFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fYWRkLWJ1dHRvblwiKTtcclxuY29uc3QgY2FyZE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BvcHVwLWNhcmQtbmFtZVwiKTtcclxuY29uc3QgY2FyZExpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BvcHVwLWxpbmtcIik7XHJcbmNvbnN0IGltYWdBdmF0YXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2F2YXRhci1lZGl0XCIpO1xyXG5cclxuLy8gY2xhc2UgcG9wdXBcclxuY29uc3QgcG9wdXAgPSBuZXcgUG9wdXBXaXRoRm9ybShcIiNwb3B1cC1jYXJkXCIsIGNyZWF0Q2FyZCk7XHJcblxyXG5jb25zdCBwb3B1cEVkaXRBdmF0YXIgPSBuZXcgUG9wdXBXaXRoRm9ybShcIiNwb3B1cC1hdmF0YXJcIiwgZWRpdEF2YXRhcik7XHJcbmZ1bmN0aW9uIGVkaXRBdmF0YXIoZGF0YSkge1xyXG4gIHJldHVybiBhcGkuZWRpdEF2YXRhclVzZXIoZGF0YS5hdmF0YXIpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICB1c2VySW5mby5zZXRVc2VySW5mbyhyZXNwb25zZS5uYW1lLCByZXNwb25zZS5hYm91dCwgcmVzcG9uc2UuYXZhdGFyKTtcclxuICB9KTtcclxufVxyXG5cclxuY29uc3QgcG9wdXBwcm9maWxlID0gbmV3IFBvcHVwV2l0aEZvcm0oXCIjcG9wdXAtcHJvZmlsZVwiLCBwcm9maWxlRm9ybSk7XHJcbmNvbnN0IHBvcHVwRGlhbG9nID0gbmV3IFBvcHVwKFwiI2RpYWxvZ1wiKTtcclxuY29uc3QgaW1hZ2Vwb3B1cCA9IG5ldyBQb3B1cFdpdGhJbWFnZShcIiNkaWFsb2dcIik7XHJcbmNvbnN0IHVzZXJJbmZvID0gbmV3IFVzZXJJbmZvKCk7XHJcblxyXG5jb25zdCBwb3B1cFdpdGhDb25maXJtYXRpb24gPSBuZXcgUG9wdXBXaXRoQ29uZmlybWF0aW9uKFxyXG4gIFwiI3BvcHVwLWRlbGV0ZVwiLFxyXG4gIChjYXJkSWQsIGNhcmQpID0+IHtcclxuICAgIHJldHVybiBhcGkuZGVsZXRlQ2FyZChjYXJkSWQpLnRoZW4oKCkgPT4ge1xyXG4gICAgICBwb3B1cFdpdGhDb25maXJtYXRpb24uY2xvc2UoKTtcclxuICAgICAgY2FyZC5yZW1vdmVDYXJkKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbik7XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVMaWNrKGlkLCBidXR0b25MaW5rKSB7XHJcbiAgY29uc29sZS5sb2coaWQsIGJ1dHRvbkxpbmspO1xyXG5cclxuICBhcGkubGlrZUNhcmQoaWQpLnRoZW4oKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ8KhVGFyamV0YSBtYXJjYWRhIGNvbW8gXCJtZSBndXN0YVwiIGV4aXRvc2FtZW50ZSEnKTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlRGlzTGlrZShpZCkge1xyXG4gIGFwaS5kaXNsaWtlQ2FyZChpZCkudGhlbigoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnwqFRdWl0YWRvIGVsIFwibWUgZ3VzdGFcIiBleGl0b3NhbWVudGUhJyk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbnBvcHVwLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcbnBvcHVwcHJvZmlsZS5zZXRFdmVudExpc3RlbmVycygpO1xyXG5wb3B1cERpYWxvZy5zZXRFdmVudExpc3RlbmVycygpO1xyXG5pbWFnZXBvcHVwLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcbnBvcHVwRWRpdEF2YXRhci5zZXRFdmVudExpc3RlbmVycygpO1xyXG5wb3B1cFdpdGhDb25maXJtYXRpb24uc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbi8vIGNsYXNlIFBvcHVwV2l0aEZvcm1cclxuXHJcbmJ1dHRvbkFkZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgcG9wdXAub3BlbigpO1xyXG59KTtcclxuXHJcbmJ1dHRvbkVkaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIHBvcHVwcHJvZmlsZS5vcGVuKCk7XHJcbiAgY2FtYmlhck5vbWJyZSgpO1xyXG59KTtcclxuXHJcbmxldCBzZWN0aW9uO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRDYXJkKCkge1xyXG4gIHJldHVybiBhcGlcclxuICAgIC5jcmVhdGVDYXJkKHtcclxuICAgICAgbmFtZTogY2FyZE5hbWUudmFsdWUsXHJcbiAgICAgIGxpbms6IGNhcmRMaW5rLnZhbHVlLFxyXG4gICAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBjb25zdCBuZXdDYXJkID0gY3JlYXRlQ2FyZChyZXNwb25zZSk7XHJcblxyXG4gICAgICBzZWN0aW9uLmFkZE5ld0l0ZW0obmV3Q2FyZCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuYXBpLmdldEluaXRpYWxDYXJkcygpLnRoZW4oKGluaXRpYWxDYXJkcykgPT4ge1xyXG4gIHNlY3Rpb24gPSBuZXcgU2VjdGlvbihpbml0aWFsQ2FyZHMsIGNyZWF0ZUNhcmQsIGVsZW1lbnRzKTtcclxuXHJcbiAgc2VjdGlvbi5yZW5kZXJlcigpO1xyXG59KTtcclxuXHJcbmFwaS5nZXRVc2VySW5mbygpLnRoZW4oKFJlc3BvbnNlKSA9PiB7XHJcbiAgdXNlckluZm8uc2V0VXNlckluZm8oUmVzcG9uc2UubmFtZSwgUmVzcG9uc2UuYWJvdXQsIFJlc3BvbnNlLmF2YXRhcik7XHJcbn0pO1xyXG5cclxuaW1hZ0F2YXRhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT4ge1xyXG4gIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIHBvcHVwRWRpdEF2YXRhci5vcGVuKCk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gcHJvZmlsZUZvcm0oZGF0YSkge1xyXG4gIHJldHVybiBhcGkuZWRpdFVzZXJJbmZvKGRhdGEpLnRoZW4oKFJlc3BvbnNlKSA9PiB7XHJcbiAgICB1c2VySW5mby5zZXRVc2VySW5mbyhSZXNwb25zZS5uYW1lLCBSZXNwb25zZS5hYm91dCwgUmVzcG9uc2UuYXZhdGFyKTtcclxuICB9KTtcclxufVxyXG5mdW5jdGlvbiBjYW1iaWFyTm9tYnJlKCkge1xyXG4gIGlucHV0TmFtZS52YWx1ZSA9IHByb2ZpbGVOYW1lLnRleHRDb250ZW50O1xyXG4gIGlucHV0QWJvdXQudmFsdWUgPSBwcm9maWxlSG9iYmllLnRleHRDb250ZW50O1xyXG59XHJcbmNhbWJpYXJOb21icmUoKTtcclxuXHJcbi8vICBjbGFzZSBzZWN0aW9uXHJcbmZ1bmN0aW9uIGNyZWF0ZUNhcmQoaXRlbSkge1xyXG4gIGNvbnN0IGNhcmQgPSBuZXcgQ2FyZChcclxuICAgIGl0ZW0ubmFtZSxcclxuICAgIGl0ZW0ubGluayxcclxuICAgIGl0ZW0uX2lkLFxyXG4gICAgaGFuZGxlT3BlbkltYWdlLFxyXG4gICAgKCkgPT4ge1xyXG4gICAgICBwb3B1cFdpdGhDb25maXJtYXRpb24ub3BlbihpdGVtLl9pZCwgY2FyZCk7XHJcbiAgICB9LFxyXG4gICAgaGFuZGxlTGljayxcclxuICAgIGhhbmRsZURpc0xpa2UsXHJcbiAgICBpdGVtLmlzTGlrZWRcclxuICApO1xyXG5cclxuICBjb25zdCBjYXJkRWxlbWVudCA9IGNhcmQuY3JlYXRlQ2FyZCgpO1xyXG4gIHJldHVybiBjYXJkRWxlbWVudDtcclxufVxyXG5jb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudHNfX2NvbnRhaW5lclwiKTtcclxuXHJcbmZ1bmN0aW9uIGhhbmRsZU9wZW5JbWFnZShuYW1lLCBsaW5rKSB7XHJcbiAgaW1hZ2Vwb3B1cC5vcGVuKG5hbWUsIGxpbmspO1xyXG59XHJcblxyXG4vLyBjbGFzZSBmb3JtVmFsaWRhdG9yXHJcblxyXG5jb25zdCBzZXR0aW5nc1ZhbGlkYXRpb24gPSB7XHJcbiAgZm9ybVNlbGVjdG9yOiBcIi5wb3B1cF9fZm9ybVwiLFxyXG4gIGlucHV0U2VsZWN0b3I6IFwiLnBvcHVwX19pbnB1dFwiLFxyXG4gIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiBcIi5wb3B1cF9fU3VibWl0LUJ1dHRvblwiLFxyXG4gIGluYWN0aXZlQnV0dG9uQ2xhc3M6IFwicG9wdXBfX2J1dHRvbl9kaXNhYmxlZFwiLFxyXG4gIGlucHV0RXJyb3JDbGFzczogXCJwb3B1cF9faW5wdXRfdHlwZV9lcnJvclwiLFxyXG4gIGVycm9yQ2xhc3M6IFwicG9wdXBfX2Vycm9yX3Zpc2libGVcIixcclxufTtcclxuXHJcbmNvbnN0IHZhbGlkYXRpb24gPSBuZXcgRm9ybVZhbGlkYXRvcihzZXR0aW5nc1ZhbGlkYXRpb24pO1xyXG52YWxpZGF0aW9uLmVuYWJsZVZhbGlkYXRpb24oKTtcclxuIl0sIm5hbWVzIjpbIkZvcm1WYWxpZGF0b3IiLCJzZXR0aW5ncyIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiZW5hYmxlVmFsaWRhdGlvbiIsIl90aGlzIiwiZm9ybUxpc3QiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JtU2VsZWN0b3IiLCJmb3JFYWNoIiwiZm9yRWxlbWVudCIsImlucHV0TGlzdCIsIkFycmF5IiwiZnJvbSIsImlucHV0U2VsZWN0b3IiLCJzdWJtaXRCdXR0b24iLCJxdWVyeVNlbGVjdG9yIiwic3VibWl0QnV0dG9uU2VsZWN0b3IiLCJjaGVja0ltcHV0VmFsaWRpdGkiLCJpbnB1dEVsZW1lbnQiLCJlcnJvckVsZW1lbnQiLCJjb25jYXQiLCJuYW1lIiwiaGFuVmFsdWUiLCJzb21lIiwiaXRlbSIsImxlbmd0aCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImlucHV0RXJyb3JDbGFzcyIsInRleHRDb250ZW50IiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJjaGVja1ZhbGlkaXR5IiwiYWRkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhc0ludmFsaWRJbnB1dCIsImRpc2FibGVkIiwiaW5hY3RpdmVCdXR0b25DbGFzcyIsImRlZmF1bHQiLCJQb3B1cCIsIlBvcHVwV2l0aENvbmZpcm1hdGlvbiIsIl9Qb3B1cCIsInBvcHVwU2VsZWN0b3IiLCJoYW5kbGVPblN1Ym1pdCIsIl9jYWxsU3VwZXIiLCJfY2FyZElkIiwiX2luaGVyaXRzIiwib3BlbiIsImNhcmRJZCIsImNhcmQiLCJfc3VwZXJQcm9wR2V0IiwicmVuZGVyTG9naW4iLCJpc0xvYWRpbmciLCJib3RvbkxvYWRpbmciLCJvcmlnaW5hbFRleHQiLCJjb25zb2xlIiwibG9nIiwic2V0VGltZW91dCIsInNldEV2ZW50TGlzdGVuZXJzIiwiX3RoaXMyIiwicG9wdXAiLCJldnQiLCJwcmV2ZW50RGVmYXVsdCIsInRoZW4iLCJQb3B1cFdpdGhGb3JtIiwiaGFuZGxlRm9yc3VibWl0IiwiY2xvc2UiLCJmb3JtIiwicmVzZXQiLCJnZXRJbnB1dFZhbHVlcyIsInZhbHVlcyIsImRhdGEiLCJQb3B1cFdpdGhJbWFnZSIsImxpbmsiLCJzcmMiLCJVc2VySW5mbyIsImFib3V0IiwiYXZhdGFyIiwiZ2V0VXNlckluZm8iLCJzZXRVc2VySW5mbyIsImRpYWxvZ0ltZyIsImltZ0RpYWxvZyIsInRleHREaWFsb2ciLCJDYXJkIiwiaWQiLCJoYW5kbGVDYXJkQ2xpY2siLCJoYW5kbGVEZWxldGVDbGljayIsImhhbmRsZWxpY2siLCJoYW5kbGVEaXNMaWtlIiwiaXNMaWtlZCIsImdldFRlbXBsYXRlIiwiY2FyZEVsZW1lbnQiLCJjb250ZW50IiwiY2xvbmVOb2RlIiwic2V0UHJvcGVydGllcyIsImh0bWxDYXJkIiwiY2FyZEltYWdlIiwiY2FyZERlc2NyaXB0aW9uIiwiYnV0dG9uVHJhc2giLCJidXR0b25MaW5rIiwiY3JlYXRlQ2FyZCIsInNldEV2ZW50c0xpc3RlbmVycyIsInRvZ2dsZUxpa2UiLCJyZW1vdmVMaWtlIiwicmVtb3ZlQ2FyZCIsImNvbnRhaW5zIiwiX2lzRGlhbG9nIiwidGFnTmFtZSIsInNob3dNb2RhbCIsImhhbmRsZUVzY0Nsb3NlIiwiZSIsImNsb3NlQnV0dG9ucyIsImJ1dHRvbiIsInRhcmdldCIsIlNlY3Rpb24iLCJpdGVtcyIsInJlbmRlciIsInNlbGVjdG9yIiwiY29udGFpbmVyIiwicmVuZGVyZXIiLCJlbGVtZW50IiwiYWRkSXRlbSIsImFwcGVuZCIsImFkZE5ld0l0ZW0iLCJwcmVwZW5kIiwiYmFzZVVSTCIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwiQXBpIiwiZ2V0SW5pdGlhbENhcmRzIiwiZmV0Y2giLCJtZXRob2QiLCJyZXMiLCJvayIsImpzb24iLCJlZGl0VXNlckluZm8iLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImVkaXRBdmF0YXJVc2VyIiwiZGVsZXRlQ2FyZCIsImxpa2VDYXJkIiwiZGlzbGlrZUNhcmQiLCJhcGkiLCJidXR0b25FZGl0IiwiaW5wdXROYW1lIiwiaW5wdXRBYm91dCIsInByb2ZpbGVOYW1lIiwicHJvZmlsZUhvYmJpZSIsImJ1dHRvbkFkZCIsImNhcmROYW1lIiwiY2FyZExpbmsiLCJpbWFnQXZhdGFyIiwiY3JlYXRDYXJkIiwicG9wdXBFZGl0QXZhdGFyIiwiZWRpdEF2YXRhciIsInJlc3BvbnNlIiwidXNlckluZm8iLCJwb3B1cHByb2ZpbGUiLCJwcm9maWxlRm9ybSIsInBvcHVwRGlhbG9nIiwiaW1hZ2Vwb3B1cCIsInBvcHVwV2l0aENvbmZpcm1hdGlvbiIsImhhbmRsZUxpY2siLCJjYW1iaWFyTm9tYnJlIiwic2VjdGlvbiIsIm5ld0NhcmQiLCJpbml0aWFsQ2FyZHMiLCJlbGVtZW50cyIsIlJlc3BvbnNlIiwiX2lkIiwiaGFuZGxlT3BlbkltYWdlIiwic2V0dGluZ3NWYWxpZGF0aW9uIiwiZXJyb3JDbGFzcyIsInZhbGlkYXRpb24iXSwic291cmNlUm9vdCI6IiJ9