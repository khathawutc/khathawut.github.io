webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_components_Header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Header/Header */ \"./src/components/Header/Header.js\");\n/* harmony import */ var _Introduce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Introduce */ \"./pages/Introduce.js\");\n/* harmony import */ var _Detail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Detail */ \"./pages/Detail.js\");\n\n\n\nvar _jsxFileName = \"/Users/khathawut/Documents/My works/Portfolio/portfolio/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Portfolio = function Portfolio() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      currPage = _useState[0],\n      setCurrPage = _useState[1];\n\n  var handlePage = function handlePage(pageId) {\n    setCurrPage(pageId);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit\n    var vh = window.innerHeight * 0.01; // Then we set the value in the --vh custom property to the root of the document\n\n    document.documentElement.style.setProperty('--vh', \"\".concat(vh, \"px\")); // We listen to the resize event\n\n    window.addEventListener('resize', function () {\n      // We execute the same script as before\n      var vh = window.innerHeight * 0.01;\n      document.documentElement.style.setProperty('--vh', \"\".concat(vh, \"px\"));\n    });\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"KHATHAWUT\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:title\",\n        content: \"My page title\"\n      }, \"title\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, _this), currPage !== 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Detail__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      currPage: currPage,\n      handlePage: handlePage\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 26\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_components_Header_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      handlePage: handlePage\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Introduce__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Portfolio, \"9RVj/FYOFrthchRin8fSHhvjE1Q=\");\n\n_c = Portfolio;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Portfolio);\n\nvar _c;\n\n$RefreshReg$(_c, \"Portfolio\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJQb3J0Zm9saW8iLCJ1c2VTdGF0ZSIsImN1cnJQYWdlIiwic2V0Q3VyclBhZ2UiLCJoYW5kbGVQYWdlIiwicGFnZUlkIiwidXNlRWZmZWN0IiwidmgiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQUEsa0JBQ1VDLHNEQUFRLENBQUMsQ0FBRCxDQURsQjtBQUFBLE1BQ2ZDLFFBRGU7QUFBQSxNQUNMQyxXQURLOztBQUV0QixNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxNQUFELEVBQVk7QUFDN0JGLGVBQVcsQ0FBQ0UsTUFBRCxDQUFYO0FBQ0QsR0FGRDs7QUFHQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2Q7QUFDQSxRQUFJQyxFQUFFLEdBQUdDLE1BQU0sQ0FBQ0MsV0FBUCxHQUFxQixJQUE5QixDQUZjLENBR2Q7O0FBQ0FDLFlBQVEsQ0FBQ0MsZUFBVCxDQUF5QkMsS0FBekIsQ0FBK0JDLFdBQS9CLENBQTJDLE1BQTNDLFlBQXNETixFQUF0RCxTQUpjLENBTWQ7O0FBQ0FDLFVBQU0sQ0FBQ00sZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsWUFBTTtBQUN0QztBQUNBLFVBQUlQLEVBQUUsR0FBR0MsTUFBTSxDQUFDQyxXQUFQLEdBQXFCLElBQTlCO0FBQ0FDLGNBQVEsQ0FBQ0MsZUFBVCxDQUF5QkMsS0FBekIsQ0FBK0JDLFdBQS9CLENBQTJDLE1BQTNDLFlBQXNETixFQUF0RDtBQUNELEtBSkQ7QUFLRCxHQVpRLEVBWU4sRUFaTSxDQUFUO0FBYUEsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFNLGdCQUFRLEVBQUMsVUFBZjtBQUEwQixlQUFPLEVBQUM7QUFBbEMsU0FBc0QsT0FBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBS0dMLFFBQVEsS0FBSyxDQUFiLGlCQUFrQixxRUFBQywrQ0FBRDtBQUFRLGNBQVEsRUFBRUEsUUFBbEI7QUFBNEIsZ0JBQVUsRUFBRUU7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxyQixlQU1FLHFFQUFDLHFFQUFEO0FBQVEsZ0JBQVUsRUFBRUE7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GLGVBT0UscUVBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGO0FBQUEsa0JBREY7QUFXRCxDQTdCRDs7R0FBTUosUzs7S0FBQUEsUztBQStCU0Esd0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlcidcbmltcG9ydCBJbnRyb2R1Y2UgZnJvbSAnLi9JbnRyb2R1Y2UnXG5pbXBvcnQgRGV0YWlsIGZyb20gJy4vRGV0YWlsJ1xuXG5jb25zdCBQb3J0Zm9saW8gPSAoKSA9PiB7XG4gIGNvbnN0IFtjdXJyUGFnZSwgc2V0Q3VyclBhZ2VdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgaGFuZGxlUGFnZSA9IChwYWdlSWQpID0+IHtcbiAgICBzZXRDdXJyUGFnZShwYWdlSWQpXG4gIH1cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBGaXJzdCB3ZSBnZXQgdGhlIHZpZXdwb3J0IGhlaWdodCBhbmQgd2UgbXVsdGlwbGUgaXQgYnkgMSUgdG8gZ2V0IGEgdmFsdWUgZm9yIGEgdmggdW5pdFxuICAgIGxldCB2aCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuMDFcbiAgICAvLyBUaGVuIHdlIHNldCB0aGUgdmFsdWUgaW4gdGhlIC0tdmggY3VzdG9tIHByb3BlcnR5IHRvIHRoZSByb290IG9mIHRoZSBkb2N1bWVudFxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS12aCcsIGAke3ZofXB4YClcblxuICAgIC8vIFdlIGxpc3RlbiB0byB0aGUgcmVzaXplIGV2ZW50XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgIC8vIFdlIGV4ZWN1dGUgdGhlIHNhbWUgc2NyaXB0IGFzIGJlZm9yZVxuICAgICAgbGV0IHZoID0gd2luZG93LmlubmVySGVpZ2h0ICogMC4wMVxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXZoJywgYCR7dmh9cHhgKVxuICAgIH0pXG4gIH0sIFtdKVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPktIQVRIQVdVVDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PVwiTXkgcGFnZSB0aXRsZVwiIGtleT1cInRpdGxlXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIHtjdXJyUGFnZSAhPT0gMCAmJiA8RGV0YWlsIGN1cnJQYWdlPXtjdXJyUGFnZX0gaGFuZGxlUGFnZT17aGFuZGxlUGFnZX0gLz59XG4gICAgICA8SGVhZGVyIGhhbmRsZVBhZ2U9e2hhbmRsZVBhZ2V9IC8+XG4gICAgICA8SW50cm9kdWNlIC8+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9ydGZvbGlvXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})