(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./djsr/frontend/src/components/LoadingForButtons.js":
/*!***********************************************************!*\
  !*** ./djsr/frontend/src/components/LoadingForButtons.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoadingScreenB; });
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");




var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    root: {
      display: 'flex',
      alignItems: 'center'
    },
    wrapper: {
      margin: theme.spacing(1),
      position: 'relative',
      padding: '6px'
    }
  };
});
function LoadingScreenB() {
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.wrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: 20,
    className: classes.buttonProgress,
    style: {
      'color': 'purple'
    }
  })));
}

/***/ }),

/***/ "./djsr/frontend/src/components/MaterialUiPasswordReset.js":
/*!*****************************************************************!*\
  !*** ./djsr/frontend/src/components/MaterialUiPasswordReset.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "./node_modules/@material-ui/core/esm/InputAdornment/index.js");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Icon */ "./node_modules/@material-ui/core/esm/Icon/index.js");
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Email */ "./node_modules/@material-ui/icons/Email.js");
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/People */ "./node_modules/@material-ui/icons/People.js");
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Lock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Lock */ "./node_modules/@material-ui/icons/Lock.js");
/* harmony import */ var _material_ui_icons_Lock__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Lock__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_components_Header_Header_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material_ui_components/Header/Header.js */ "./djsr/frontend/src/components/material_ui_components/Header/Header.js");
/* harmony import */ var _material_ui_components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./material_ui_components/Header/HeaderLinks.js */ "./djsr/frontend/src/components/material_ui_components/Header/HeaderLinks.js");
/* harmony import */ var _material_ui_components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./material_ui_components/Footer/Footer.js */ "./djsr/frontend/src/components/material_ui_components/Footer/Footer.js");
/* harmony import */ var _material_ui_components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./material_ui_components/Grid/GridContainer.js */ "./djsr/frontend/src/components/material_ui_components/Grid/GridContainer.js");
/* harmony import */ var _material_ui_components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./material_ui_components/Grid/GridItem.js */ "./djsr/frontend/src/components/material_ui_components/Grid/GridItem.js");
/* harmony import */ var _material_ui_components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ././material_ui_components/CustomButtons/Button.js */ "./djsr/frontend/src/components/material_ui_components/CustomButtons/Button.js");
/* harmony import */ var _material_ui_components_Card_Card_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./material_ui_components/Card/Card.js */ "./djsr/frontend/src/components/material_ui_components/Card/Card.js");
/* harmony import */ var _material_ui_components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./material_ui_components/Card/CardBody.js */ "./djsr/frontend/src/components/material_ui_components/Card/CardBody.js");
/* harmony import */ var _material_ui_components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./material_ui_components/Card/CardHeader.js */ "./djsr/frontend/src/components/material_ui_components/Card/CardHeader.js");
/* harmony import */ var _material_ui_components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./material_ui_components/Card/CardFooter.js */ "./djsr/frontend/src/components/material_ui_components/Card/CardFooter.js");
/* harmony import */ var _material_ui_components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./material_ui_components/CustomInput/CustomInput.js */ "./djsr/frontend/src/components/material_ui_components/CustomInput/CustomInput.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _assets_jss_material_kit_react_views_loginPage_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./assets/jss/material-kit-react/views/loginPage.js */ "./djsr/frontend/src/components/assets/jss/material-kit-react/views/loginPage.js");
/* harmony import */ var _img_genspr_parralax_bg_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./img/genspr-parralax-bg.png */ "./djsr/frontend/src/components/img/genspr-parralax-bg.png");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _axiosAPI__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./axiosAPI */ "./djsr/frontend/src/components/axiosAPI.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _MaterialFormikField__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./MaterialFormikField */ "./djsr/frontend/src/components/MaterialFormikField.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/dist/notistack.esm.js");
/* harmony import */ var _LoadingForButtons__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./LoadingForButtons */ "./djsr/frontend/src/components/LoadingForButtons.js");
var _this = undefined;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





























var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(_assets_jss_material_kit_react_views_loginPage_js__WEBPACK_IMPORTED_MODULE_19__["default"]);

var MaterialUiPasswordReset = function MaterialUiPasswordReset(props) {
  var FRS = "Pole wymagane";
  var user = props.appState.user;

  if (!!user) {
    props.history.push("/");
  }

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("password"),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      editView = _React$useState2[0],
      setEditView = _React$useState2[1];

  var _useSnackbar = Object(notistack__WEBPACK_IMPORTED_MODULE_26__["useSnackbar"])(),
      enqueueSnackbar = _useSnackbar.enqueueSnackbar,
      closeSnackbar = _useSnackbar.closeSnackbar;

  var strongToken = Object(react_router__WEBPACK_IMPORTED_MODULE_18__["useParams"])().token;
  console.log(strongToken);

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("cardHidden"),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      cardAnimaton = _React$useState4[0],
      setCardAnimation = _React$useState4[1];

  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  var classes = useStyles();

  var rest = _extends({}, props);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.pageHeader,
    style: {
      backgroundImage: "url(" + _img_genspr_parralax_bg_png__WEBPACK_IMPORTED_MODULE_20__["default"] + ")",
      backgroundSize: "cover",
      backgroundPosition: "top center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    justify: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
    xs: 12,
    sm: 12,
    md: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_Card_Card_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: classes[cardAnimaton]
  }, editView == "password" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_23__["Formik"], {
    initialValues: {
      password: "",
      passwordConfirm: ""
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_21__["object"]().shape({
      password: yup__WEBPACK_IMPORTED_MODULE_21__["string"]().min(8, "Has??o musi zawiera?? co najmniej 8 znak??w!").max(50, "Has??o mo??e zawiera?? maksymalnie 50 znak??w!").required("Pole wymagane").oneOf([yup__WEBPACK_IMPORTED_MODULE_21__["ref"]("passwordConfirm")], "Has??a s?? r????ne"),
      passwordConfirm: yup__WEBPACK_IMPORTED_MODULE_21__["string"]().oneOf([yup__WEBPACK_IMPORTED_MODULE_21__["ref"]("password")], "Has??a s?? r????ne").required("Pole wymagane")
    }),
    onSubmit: function onSubmit(values, helpers) {
      setTimeout(function () {
        helpers.setSubmitting(true);
        _axiosAPI__WEBPACK_IMPORTED_MODULE_22__["axiosInstanceNoAuth"].post("/user/passreset/".concat(strongToken, "/$"), {
          password: values.password
        }).then(function (response) {
          enqueueSnackbar("Has??o zmienione!", {
            variant: 'success'
          });
          helpers.setStatus("Pomyslnie zmieniono has??o");
          helpers.setSubmitting(false);
        })["catch"](function (error) {
          var errResponse = error.response;
          enqueueSnackbar("Co?? posz??o nie tak!", {
            variant: 'error'
          });
          helpers.setSubmitting(false);

          _this.setState({
            locked: false
          });

          helpers.setValues({
            password: "",
            passwordConfirm: ""
          }, false);
          helpers.setTouched({
            password: false,
            passwordConfirm: false
          }, false);
          helpers.setFieldError("oldPassword", "Podano nieprawid??owe stare has??o");
        });
      }, 400);
    }
  }, function (_ref) {
    var values = _ref.values,
        errors = _ref.errors,
        touched = _ref.touched,
        handleChange = _ref.handleChange,
        handleBlur = _ref.handleBlur,
        handleSubmit = _ref.handleSubmit,
        isSubmitting = _ref.isSubmitting;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      className: classes.form
    }, console.log(touched, errors), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
      color: "primary",
      className: classes.cardHeader
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Wprowad\u017A nowe has\u0142o")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_14__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_23__["Field"], {
      component: _MaterialFormikField__WEBPACK_IMPORTED_MODULE_24__["default"],
      name: "password",
      formControlProps: {
        fullWidth: true
      },
      labelText: "Has\u0142o",
      inputProps: {
        type: "password",
        endAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_2__["default"], {
          position: "end"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Lock__WEBPACK_IMPORTED_MODULE_6___default.a, {
          className: classes.inputIconsColor
        }))
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_23__["Field"], {
      component: _MaterialFormikField__WEBPACK_IMPORTED_MODULE_24__["default"],
      name: "passwordConfirm",
      formControlProps: {
        fullWidth: true
      },
      labelText: "Powt\xF3rz has\u0142o",
      inputProps: {
        type: "password",
        endAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_2__["default"], {
          position: "end"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Lock__WEBPACK_IMPORTED_MODULE_6___default.a, {
          className: classes.inputIconsColor
        }))
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
      className: classes.cardFooter
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
      simple: true,
      color: "primary",
      size: "lg",
      onClick: function onClick() {
        handleSubmit();
      },
      disabled: isSubmitting
    }, "Zmie\u0144 has\u0142o"), isSubmitting && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoadingForButtons__WEBPACK_IMPORTED_MODULE_27__["default"], null)));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null)))))));
};

/* harmony default export */ __webpack_exports__["default"] = (MaterialUiPasswordReset);

/***/ }),

/***/ "./djsr/frontend/src/components/img/genspr-parralax-bg.png":
/*!*****************************************************************!*\
  !*** ./djsr/frontend/src/components/img/genspr-parralax-bg.png ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "8ae80ee488d6ec36fd62f67865d06356.png");

/***/ }),

/***/ "./node_modules/@material-ui/icons/Delete.js":
/*!***************************************************!*\
  !*** ./node_modules/@material-ui/icons/Delete.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
}), 'Delete');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/Favorite.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material-ui/icons/Favorite.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
}), 'Favorite');

exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=9.main.js.map