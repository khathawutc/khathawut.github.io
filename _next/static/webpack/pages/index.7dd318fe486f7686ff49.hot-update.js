webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/About.js":
/*!************************!*\
  !*** ./pages/About.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _src_components_Layout_DetailLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Layout/DetailLayout */ \"./src/components/Layout/DetailLayout.jsx\");\n/* harmony import */ var _src_components_Timeline_Timeline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Timeline/Timeline */ \"./src/components/Timeline/Timeline.js\");\n/* harmony import */ var _src_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/constants */ \"./src/constants/index.js\");\n/* harmony import */ var _src_components_MouseAnimation_MouseAnimation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/MouseAnimation/MouseAnimation */ \"./src/components/MouseAnimation/MouseAnimation.js\");\n\n\nvar _jsxFileName = \"/Users/khathawut/Documents/My works/Portfolio/portfolio/pages/About.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar About = function About(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isShowTimeline = _useState[0],\n      setIsShowTimeline = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var listenScroll = function listenScroll(e) {\n      var scrollTop = e.target.scrollTop;\n      var scrollHeight = e.target.scrollHeight;\n      var clientHeight = e.target.clientHeight;\n\n      if (scrollTop + clientHeight >= scrollHeight - 5) {\n        setIsShowTimeline(true);\n      }\n    };\n\n    window.addEventListener('scroll', listenScroll, true);\n\n    if (isShowTimeline) {\n      window.removeEventListener('scroll', listenScroll, true);\n    }\n\n    return function () {\n      return window.removeEventListener('scroll', listenScroll, true);\n    };\n  }, [isShowTimeline]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_components_Layout_DetailLayout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Container, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DetailContainer, {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(TextContainer, {\n          children: [\"My name is \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(HilightText, {\n            children: \"Khathawut\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 24\n          }, _this), \" ,\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 13\n          }, _this), \"born on the 7th of March 1997.\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 13\n          }, _this), \"I'm Web developer located at Bangkok.\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 13\n          }, _this), \"Experience with \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(HilightText, {\n            children: \"React\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 29\n          }, _this), \" and\", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(HilightText, {\n            children: \"Express\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(RemarkLink, {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              target: \"_blank\",\n              href: \"\",\n              children: \"Developer at Agoda\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 45,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_components_MouseAnimation_MouseAnimation__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(TimelineContainer, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(TimelineWrapper, {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_components_Timeline_Timeline__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            isShowTimeline: isShowTimeline\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(About, \"YwGa756Vg5zqdVbAmkfKMIdY1Y4=\");\n\n_c = About;\nvar HilightText = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].span.withConfig({\n  displayName: \"About__HilightText\",\n  componentId: \"j1i91q-0\"\n})([\"color:#4ca708;font-style:italic;font-size:52px;font-weight:500;@media only screen and (max-width:\", \"px){font-size:28px;}\"], _src_constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].screenSize.small);\n_c2 = HilightText;\nvar RemarkLink = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].span.withConfig({\n  displayName: \"About__RemarkLink\",\n  componentId: \"j1i91q-1\"\n})([\"font-size:16px;font-style:italic;transition:font-size 1.2s;position:relative;@media only screen and (max-width:\", \"px){font-size:12px;&:hover{font-size:14px;}}&:hover{font-size:18px;}&::after{background:none repeat scroll 0 0 transparent;bottom:-8px;content:'';display:block;height:1px;left:50%;position:absolute;background:#2d2d2b;transition:width 1.5s ease 0s,left 1.5s ease 0s;width:0;}&:hover::after{width:100%;left:0;}\"], _src_constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].screenSize.small);\n_c3 = RemarkLink;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"About__Container\",\n  componentId: \"j1i91q-2\"\n})([\"width:100%;position:relative;\"]);\n_c4 = Container;\nvar DetailContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"About__DetailContainer\",\n  componentId: \"j1i91q-3\"\n})([\"position:relative;width:100%;height:calc(var(--vh,1vh) * 100);display:flex;align-items:center;padding:0 40px;scroll-snap-align:center;@media only screen and (max-width:\", \"px){padding:0 20px;}\"], _src_constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].screenSize.small);\n_c5 = DetailContainer;\nvar TimelineContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(DetailContainer).withConfig({\n  displayName: \"About__TimelineContainer\",\n  componentId: \"j1i91q-4\"\n})([\"max-width:100vw;overflow-x:scroll;\"]);\n_c6 = TimelineContainer;\nvar TimelineWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"About__TimelineWrapper\",\n  componentId: \"j1i91q-5\"\n})([\"min-width:100%;position:relative;@media only screen and (max-width:\", \"px){min-width:1024px;padding-right:20px;}\"], _src_constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].screenSize.small);\n_c7 = TimelineWrapper;\nvar TextContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"About__TextContainer\",\n  componentId: \"j1i91q-6\"\n})([\"font-size:42px;line-height:1.6;@media only screen and (max-width:\", \"px){font-size:24px;}\"], _src_constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].screenSize.small);\n_c8 = TextContainer;\nvar Line = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].span.withConfig({\n  displayName: \"About__Line\",\n  componentId: \"j1i91q-7\"\n})([\"width:100%;border-bottom:2px solid;\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;\n\n$RefreshReg$(_c, \"About\");\n$RefreshReg$(_c2, \"HilightText\");\n$RefreshReg$(_c3, \"RemarkLink\");\n$RefreshReg$(_c4, \"Container\");\n$RefreshReg$(_c5, \"DetailContainer\");\n$RefreshReg$(_c6, \"TimelineContainer\");\n$RefreshReg$(_c7, \"TimelineWrapper\");\n$RefreshReg$(_c8, \"TextContainer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQWJvdXQuanM/M2Q5NCJdLCJuYW1lcyI6WyJBYm91dCIsInByb3BzIiwidXNlU3RhdGUiLCJpc1Nob3dUaW1lbGluZSIsInNldElzU2hvd1RpbWVsaW5lIiwidXNlRWZmZWN0IiwibGlzdGVuU2Nyb2xsIiwiZSIsInNjcm9sbFRvcCIsInRhcmdldCIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiSGlsaWdodFRleHQiLCJzdHlsZWQiLCJzcGFuIiwiQ09OU1RBTlQiLCJzY3JlZW5TaXplIiwic21hbGwiLCJSZW1hcmtMaW5rIiwiQ29udGFpbmVyIiwiZGl2IiwiRGV0YWlsQ29udGFpbmVyIiwiVGltZWxpbmVDb250YWluZXIiLCJUaW1lbGluZVdyYXBwZXIiLCJUZXh0Q29udGFpbmVyIiwiTGluZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDcUJDLHNEQUFRLENBQUMsS0FBRCxDQUQ3QjtBQUFBLE1BQ2hCQyxjQURnQjtBQUFBLE1BQ0FDLGlCQURBOztBQUV2QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzFCLFVBQU1DLFNBQVMsR0FBR0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNELFNBQTNCO0FBQ0EsVUFBTUUsWUFBWSxHQUFHSCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsWUFBOUI7QUFDQSxVQUFNQyxZQUFZLEdBQUdKLENBQUMsQ0FBQ0UsTUFBRixDQUFTRSxZQUE5Qjs7QUFFQSxVQUFJSCxTQUFTLEdBQUdHLFlBQVosSUFBNEJELFlBQVksR0FBRyxDQUEvQyxF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WCx5REFBTSxDQUFDTyxHQUFWO0FBQUE7QUFBQTtBQUFBLGtHQUlvQkwsc0RBQVEsQ0FBQ0MsVUFBVCxDQUFvQkMsS0FKeEMsQ0FBbkI7TUFBTU8sYTtBQVNOLElBQU1DLElBQUksR0FBR1oseURBQU0sQ0FBQ0MsSUFBVjtBQUFBO0FBQUE7QUFBQSwyQ0FBVjtBQUtlakIsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9BYm91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgQ29udGVudENvbnRhaW5lciBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvRGV0YWlsTGF5b3V0J1xuaW1wb3J0IFRpbWVsaW5lIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1RpbWVsaW5lL1RpbWVsaW5lJ1xuaW1wb3J0IENPTlNUQU5UIGZyb20gJy4uL3NyYy9jb25zdGFudHMnXG5pbXBvcnQgTW91c2VBbmltYXRpb24gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvTW91c2VBbmltYXRpb24vTW91c2VBbmltYXRpb24nXG5cbmNvbnN0IEFib3V0ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtpc1Nob3dUaW1lbGluZSwgc2V0SXNTaG93VGltZWxpbmVdID0gdXNlU3RhdGUoZmFsc2UpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbGlzdGVuU2Nyb2xsID0gKGUpID0+IHtcbiAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IGUudGFyZ2V0LnNjcm9sbFRvcFxuICAgICAgY29uc3Qgc2Nyb2xsSGVpZ2h0ID0gZS50YXJnZXQuc2Nyb2xsSGVpZ2h0XG4gICAgICBjb25zdCBjbGllbnRIZWlnaHQgPSBlLnRhcmdldC5jbGllbnRIZWlnaHRcblxuICAgICAgaWYgKHNjcm9sbFRvcCArIGNsaWVudEhlaWdodCA+PSBzY3JvbGxIZWlnaHQgLSA1KSB7XG4gICAgICAgIHNldElzU2hvd1RpbWVsaW5lKHRydWUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGxpc3RlblNjcm9sbCwgdHJ1ZSlcblxuICAgIGlmIChpc1Nob3dUaW1lbGluZSkge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGxpc3RlblNjcm9sbCwgdHJ1ZSlcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGxpc3RlblNjcm9sbCwgdHJ1ZSlcbiAgfSwgW2lzU2hvd1RpbWVsaW5lXSlcblxuICByZXR1cm4gKFxuICAgIDxDb250ZW50Q29udGFpbmVyPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPERldGFpbENvbnRhaW5lcj5cbiAgICAgICAgICA8VGV4dENvbnRhaW5lcj5cbiAgICAgICAgICAgIE15IG5hbWUgaXMgPEhpbGlnaHRUZXh0PktoYXRoYXd1dDwvSGlsaWdodFRleHQ+ICxcbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgYm9ybiBvbiB0aGUgN3RoIG9mIE1hcmNoIDE5OTcuXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIEknbSBXZWIgZGV2ZWxvcGVyIGxvY2F0ZWQgYXQgQmFuZ2tvay5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgRXhwZXJpZW5jZSB3aXRoIDxIaWxpZ2h0VGV4dD5SZWFjdDwvSGlsaWdodFRleHQ+IGFuZHsnICd9XG4gICAgICAgICAgICA8SGlsaWdodFRleHQ+RXhwcmVzczwvSGlsaWdodFRleHQ+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxSZW1hcmtMaW5rPlxuICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiXCI+XG4gICAgICAgICAgICAgICAgRGV2ZWxvcGVyIGF0IEFnb2RhXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvUmVtYXJrTGluaz5cbiAgICAgICAgICA8L1RleHRDb250YWluZXI+XG4gICAgICAgICAgPE1vdXNlQW5pbWF0aW9uIC8+XG4gICAgICAgIDwvRGV0YWlsQ29udGFpbmVyPlxuICAgICAgICA8VGltZWxpbmVDb250YWluZXI+XG4gICAgICAgICAgPFRpbWVsaW5lV3JhcHBlcj5cbiAgICAgICAgICAgIDxUaW1lbGluZSBpc1Nob3dUaW1lbGluZT17aXNTaG93VGltZWxpbmV9IC8+XG4gICAgICAgICAgPC9UaW1lbGluZVdyYXBwZXI+XG4gICAgICAgIDwvVGltZWxpbmVDb250YWluZXI+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0NvbnRlbnRDb250YWluZXI+XG4gIClcbn1cblxuY29uc3QgSGlsaWdodFRleHQgPSBzdHlsZWQuc3BhbmBcbiAgY29sb3I6ICM0Y2E3MDg7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1zaXplOiA1MnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHtDT05TVEFOVC5zY3JlZW5TaXplLnNtYWxsfXB4KSB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICB9XG5gXG5cbmNvbnN0IFJlbWFya0xpbmsgPSBzdHlsZWQuc3BhbmBcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIHRyYW5zaXRpb246IGZvbnQtc2l6ZSAxLjJzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAke0NPTlNUQU5ULnNjcmVlblNpemUuc21hbGx9cHgpIHtcbiAgICBmb250LXNpemU6IDEycHg7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cblxuICAmOjphZnRlciB7XG4gICAgYmFja2dyb3VuZDogbm9uZSByZXBlYXQgc2Nyb2xsIDAgMCB0cmFuc3BhcmVudDtcbiAgICBib3R0b206IC04cHg7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgbGVmdDogNTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kOiAjMmQyZDJiO1xuICAgIHRyYW5zaXRpb246IHdpZHRoIDEuNXMgZWFzZSAwcywgbGVmdCAxLjVzIGVhc2UgMHM7XG4gICAgd2lkdGg6IDA7XG4gIH1cblxuICAmOmhvdmVyOjphZnRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGVmdDogMDtcbiAgfVxuYFxuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYFxuXG5jb25zdCBEZXRhaWxDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGModmFyKC0tdmgsIDF2aCkgKiAxMDApO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIDQwcHg7XG4gIHNjcm9sbC1zbmFwLWFsaWduOiBjZW50ZXI7XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAke0NPTlNUQU5ULnNjcmVlblNpemUuc21hbGx9cHgpIHtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG4gIH1cbmBcblxuY29uc3QgVGltZWxpbmVDb250YWluZXIgPSBzdHlsZWQoRGV0YWlsQ29udGFpbmVyKWBcbiAgbWF4LXdpZHRoOiAxMDB2dztcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuYFxuXG5jb25zdCBUaW1lbGluZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBtaW4td2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7Q09OU1RBTlQuc2NyZWVuU2l6ZS5zbWFsbH1weCkge1xuICAgIG1pbi13aWR0aDogMTAyNHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIH1cbmBcblxuY29uc3QgVGV4dENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogNDJweDtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7Q09OU1RBTlQuc2NyZWVuU2l6ZS5zbWFsbH1weCkge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxuYFxuXG5jb25zdCBMaW5lID0gc3R5bGVkLnNwYW5gXG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XG5gXG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/About.js\n");

/***/ })

})