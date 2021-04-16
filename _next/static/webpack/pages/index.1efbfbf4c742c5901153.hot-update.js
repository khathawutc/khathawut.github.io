webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/Works.js":
/*!************************!*\
  !*** ./pages/Works.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var styled_tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-tools */ \"./node_modules/styled-tools/dist/es/index.js\");\n/* harmony import */ var _src_components_Layout_DetailLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Layout/DetailLayout */ \"./src/components/Layout/DetailLayout.jsx\");\n/* harmony import */ var _src_components_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/Pagination/Pagination */ \"./src/components/Pagination/Pagination.jsx\");\n/* harmony import */ var _work_detail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./work-detail */ \"./pages/work-detail.js\");\n/* harmony import */ var _src_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/constants */ \"./src/constants/index.js\");\n\n\n\nvar _jsxFileName = \"/Users/khathawut/Documents/My works/Portfolio/portfolio/pages/Works.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar worksData = [{\n  id: 1,\n  title: 'senior project',\n  description: 'Lorem ipsum dolor sit amet, pri ea duis probo alterum,',\n  stackList: '#React-Native, #MongoDB',\n  coverImg: '/images/senior_cover_2.png'\n}, {\n  id: 2,\n  title: 'Actis',\n  description: 'Lorem ipsum dolor sit amet, pri ea duis probo alterum,',\n  stackList: '#NodeJs, #MongoDB',\n  coverImg: '/images/actis_cover_4.png'\n}];\n\nvar Works = function Works(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      workId = _useState[0],\n      setWorkId = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isFadeOut = _useState2[0],\n      setIsFadeOut = _useState2[1];\n\n  var handleClickDetail = function handleClickDetail(id) {\n    setIsFadeOut(true);\n    setTimeout(function () {\n      setWorkId(id);\n      setIsFadeOut(false);\n    }, 500);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_work_detail__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      workId: workId,\n      handleWorkId: setWorkId\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_components_Layout_DetailLayout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      isHide: workId !== 0,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Container, {\n        children: worksData.map(function (work, idx) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(WorkContainer, {\n            onClick: function onClick() {\n              return handleClickDetail(work.id);\n            },\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(WorkCardContainer, {\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(LeftContainer, {\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(TitleContainer, {\n                    children: work === null || work === void 0 ? void 0 : work.title\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 48,\n                    columnNumber: 21\n                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DescriptionContainer, {\n                    children: work === null || work === void 0 ? void 0 : work.description\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 49,\n                    columnNumber: 21\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 47,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(StackContainer, {\n                  children: work === null || work === void 0 ? void 0 : work.stackList\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 53,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 46,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ImageContainer, {\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ImageWork, {\n                  src: work === null || work === void 0 ? void 0 : work.coverImg,\n                  alt: work === null || work === void 0 ? void 0 : work.title\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 56,\n                  columnNumber: 19\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 55,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 45,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_components_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n              idx: idx + 1,\n              listLength: worksData.length\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 64,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Works, \"i+a6KTzEcMF6qSlqp+OsZGpew34=\");\n\n_c = Works;\nvar ImageWork = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].img.withConfig({\n  displayName: \"Works__ImageWork\",\n  componentId: \"sc-1seb4ea-0\"\n})([\"width:100%;height:100%;object-fit:cover;transition:transform 1.2s;&:hover{transform:scale(1.05);}\"]);\n_c2 = ImageWork;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Works__Container\",\n  componentId: \"sc-1seb4ea-1\"\n})([\"width:100%;position:relative;opacity:\", \";transition:opacity 2s ease 0s;\"], Object(styled_tools__WEBPACK_IMPORTED_MODULE_3__[\"ifProp\"])('isFadeOut', 0, 1));\n_c3 = Container;\nvar WorkContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Works__WorkContainer\",\n  componentId: \"sc-1seb4ea-2\"\n})([\"position:relative;width:100%;height:100vh;display:flex;padding:0 40px;align-items:center;scroll-snap-align:center;justify-content:center;@media only screen and (max-width:\", \"px){padding:0 10px;}\"], _src_constants__WEBPACK_IMPORTED_MODULE_7__[\"default\"].screenSize.small);\n_c4 = WorkContainer;\nvar Arrow = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Works__Arrow\",\n  componentId: \"sc-1seb4ea-3\"\n})([\"background:#2d2d2b;height:1px;width:40px;margin:22px auto;position:relative;cursor:pointer;transition:width 1s ease 0s;&:before,&:after{content:'';background:#2d2d2b;position:absolute;height:1px;width:8px;}&:before{right:-1px;bottom:-3px;transform:rotate(-45deg);}&:after{right:-1px;top:-3px;transform:rotate(45deg);}\"]);\nvar DescriptionContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Works__DescriptionContainer\",\n  componentId: \"sc-1seb4ea-4\"\n})([\"font-size:16px;margin-bottom:18px;\"]);\n_c5 = DescriptionContainer;\nvar StackContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Works__StackContainer\",\n  componentId: \"sc-1seb4ea-5\"\n})([\"font-size:16px;margin-top:18px;\"]);\n_c6 = StackContainer;\nvar LeftContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Works__LeftContainer\",\n  componentId: \"sc-1seb4ea-6\"\n})([\"width:25%;height:100%;display:flex;flex-direction:column;justify-content:space-between;@media only screen and (max-width:\", \"px){width:100%;flex-direction:row;\", \",\", \"{display:none;}}\"], _src_constants__WEBPACK_IMPORTED_MODULE_7__[\"default\"].screenSize.small, DescriptionContainer, StackContainer);\n_c7 = LeftContainer;\nvar RightContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Works__RightContainer\",\n  componentId: \"sc-1seb4ea-7\"\n})([\"width:15%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;\"]);\nvar TitleContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Works__TitleContainer\",\n  componentId: \"sc-1seb4ea-8\"\n})([\"font-size:28px;text-transform:uppercase;margin-bottom:24px;\"]);\n_c8 = TitleContainer;\nvar SmallText = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Works__SmallText\",\n  componentId: \"sc-1seb4ea-9\"\n})([\"font-size:14px;font-style:italic;opacity:0;transition:opacity 1s ease 0s;\"]);\nvar ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Works__ImageContainer\",\n  componentId: \"sc-1seb4ea-10\"\n})([\"width:60%;height:100%;overflow:hidden;\"]);\n_c9 = ImageContainer;\nvar WorkCardContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Works__WorkCardContainer\",\n  componentId: \"sc-1seb4ea-11\"\n})([\"cursor:pointer;width:100%;height:55vh;position:relative;display:flex;flex-direction:row;padding:0 40px;&:hover{\", \"{width:80px;transition:width 1s ease 0s;}\", \"{opacity:1;transition:opacity 2s ease 0s;}}\"], Arrow, SmallText);\n_c10 = WorkCardContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Works);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;\n\n$RefreshReg$(_c, \"Works\");\n$RefreshReg$(_c2, \"ImageWork\");\n$RefreshReg$(_c3, \"Container\");\n$RefreshReg$(_c4, \"WorkContainer\");\n$RefreshReg$(_c5, \"DescriptionContainer\");\n$RefreshReg$(_c6, \"StackContainer\");\n$RefreshReg$(_c7, \"LeftContainer\");\n$RefreshReg$(_c8, \"TitleContainer\");\n$RefreshReg$(_c9, \"ImageContainer\");\n$RefreshReg$(_c10, \"WorkCardContainer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvV29ya3MuanM/MDMwZSJdLCJuYW1lcyI6WyJ3b3Jrc0RhdGEiLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzdGFja0xpc3QiLCJjb3ZlckltZyIsIldvcmtzIiwicHJvcHMiLCJ1c2VTdGF0ZSIsIndvcmtJZCIsInNldFdvcmtJZCIsImlzRmFkZU91dCIsInNldElzRmFkZU91dCIsImhhbmRsZUNsaWNrRGV0YWlsIiwic2V0VGltZW91dCIsIm1hcCIsIndvcmsiLCJpZHgiLCJsZW5ndGgiLCJJbWFnZVdvcmsiLCJzdHlsZWQiLCJpbWciLCJDb250YWluZXIiLCJkaXYiLCJpZlByb3AiLCJXb3JrQ29udGFpbmVyIiwiQ09OU1RBTlQiLCJzY3JlZW5TaXplIiwic21hbGwiLCJBcnJvdyIsIkRlc2NyaXB0aW9uQ29udGFpbmVyIiwiU3RhY2tDb250YWluZXIiLCJMZWZ0Q29udGFpbmVyIiwiUmlnaHRDb250YWluZXIiLCJUaXRsZUNvbnRhaW5lciIsIlNtYWxsVGV4dCIsIkltYWdlQ29udGFpbmVyIiwiV29ya0NhcmRDb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHLENBQ2hCO0FBQ0VDLElBQUUsRUFBRSxDQUROO0FBRUVDLE9BQUssRUFBRSxnQkFGVDtBQUdFQyxhQUFXLEVBQUUsd0RBSGY7QUFJRUMsV0FBUyxFQUFFLHlCQUpiO0FBS0VDLFVBQVEsRUFBRTtBQUxaLENBRGdCLEVBUWhCO0FBQ0VKLElBQUUsRUFBRSxDQUROO0FBRUVDLE9BQUssRUFBRSxPQUZUO0FBR0VDLGFBQVcsRUFBRSx3REFIZjtBQUlFQyxXQUFTLEVBQUUsbUJBSmI7QUFLRUMsVUFBUSxFQUFFO0FBTFosQ0FSZ0IsQ0FBbEI7O0FBaUJBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEtBQUQsRUFB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QUFBO0FBQUEsNE1BVW9CRyxzREFBUSxDQUFDQyxVQUFULENBQW9CQyxLQVZ4QyxDQUFuQjtNQUFNSCxhO0FBZU4sSUFBTUksS0FBSyxHQUFHVCx5REFBTSxDQUFDRyxHQUFWO0FBQUE7QUFBQTtBQUFBLHFVQUFYO0FBK0JBLElBQU1PLG9CQUFvQixHQUFHVix5REFBTSxDQUFDRyxHQUFWO0FBQUE7QUFBQTtBQUFBLDBDQUExQjtNQUFNTyxvQjtBQUtOLElBQU1DLGNBQWMsR0FBR1gseURBQU0sQ0FBQ0csR0FBVjtBQUFBO0FBQUE7QUFBQSx1Q0FBcEI7TUFBTVEsYztBQUtOLElBQU1DLGFBQWEsR0FBR1oseURBQU0sQ0FBQ0csR0FBVjtBQUFBO0FBQUE7QUFBQSxpTUFPb0JHLHNEQUFRLENBQUNDLFVBQVQsQ0FBb0JDLEtBUHhDLEVBVWJFLG9CQVZhLEVBVVlDLGNBVlosQ0FBbkI7TUFBTUMsYTtBQWVOLElBQU1DLGNBQWMsR0FBR2IseURBQU0sQ0FBQ0csR0FBVjtBQUFBO0FBQUE7QUFBQSw2SEFBcEI7QUFVQSxJQUFNVyxjQUFjLEdBQUdkLHlEQUFNLENBQUNHLEdBQVY7QUFBQTtBQUFBO0FBQUEsbUVBQXBCO01BQU1XLGM7QUFNTixJQUFNQyxTQUFTLEdBQUdmLHlEQUFNLENBQUNHLEdBQVY7QUFBQTtBQUFBO0FBQUEsaUZBQWY7QUFPQSxJQUFNYSxjQUFjLEdBQUdoQix5REFBTSxDQUFDRyxHQUFWO0FBQUE7QUFBQTtBQUFBLDhDQUFwQjtNQUFNYSxjO0FBTU4sSUFBTUMsaUJBQWlCLEdBQUdqQix5REFBTSxDQUFDRyxHQUFWO0FBQUE7QUFBQTtBQUFBLG9OQVVqQk0sS0FWaUIsRUFlakJNLFNBZmlCLENBQXZCO09BQU1FLGlCO0FBc0JTL0Isb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9Xb3Jrcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgaWZQcm9wIH0gZnJvbSAnc3R5bGVkLXRvb2xzJ1xuaW1wb3J0IENvbnRlbnRDb250YWluZXIgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0RldGFpbExheW91dCdcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1BhZ2luYXRpb24vUGFnaW5hdGlvbidcbmltcG9ydCBXb3JrRGV0YWlsIGZyb20gJy4vd29yay1kZXRhaWwnXG5pbXBvcnQgQ09OU1RBTlQgZnJvbSAnLi4vc3JjL2NvbnN0YW50cydcblxuY29uc3Qgd29ya3NEYXRhID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgdGl0bGU6ICdzZW5pb3IgcHJvamVjdCcsXG4gICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgcHJpIGVhIGR1aXMgcHJvYm8gYWx0ZXJ1bSwnLFxuICAgIHN0YWNrTGlzdDogJyNSZWFjdC1OYXRpdmUsICNNb25nb0RCJyxcbiAgICBjb3ZlckltZzogJy9pbWFnZXMvc2VuaW9yX2NvdmVyXzIucG5nJyxcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIHRpdGxlOiAnQWN0aXMnLFxuICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIHByaSBlYSBkdWlzIHByb2JvIGFsdGVydW0sJyxcbiAgICBzdGFja0xpc3Q6ICcjTm9kZUpzLCAjTW9uZ29EQicsXG4gICAgY292ZXJJbWc6ICcvaW1hZ2VzL2FjdGlzX2NvdmVyXzQucG5nJyxcbiAgfSxcbl1cblxuY29uc3QgV29ya3MgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW3dvcmtJZCwgc2V0V29ya0lkXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtpc0ZhZGVPdXQsIHNldElzRmFkZU91dF0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBoYW5kbGVDbGlja0RldGFpbCA9IChpZCkgPT4ge1xuICAgIHNldElzRmFkZU91dCh0cnVlKVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0V29ya0lkKGlkKVxuICAgICAgc2V0SXNGYWRlT3V0KGZhbHNlKVxuICAgIH0sIDUwMClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxXb3JrRGV0YWlsIHdvcmtJZD17d29ya0lkfSBoYW5kbGVXb3JrSWQ9e3NldFdvcmtJZH0gLz5cbiAgICAgIDxDb250ZW50Q29udGFpbmVyIGlzSGlkZT17d29ya0lkICE9PSAwfT5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICB7d29ya3NEYXRhLm1hcCgod29yaywgaWR4KSA9PiAoXG4gICAgICAgICAgICA8V29ya0NvbnRhaW5lciBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGlja0RldGFpbCh3b3JrLmlkKX0+XG4gICAgICAgICAgICAgIDxXb3JrQ2FyZENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8TGVmdENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZUNvbnRhaW5lcj57d29yaz8udGl0bGV9PC9UaXRsZUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPERlc2NyaXB0aW9uQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgIHt3b3JrPy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9EZXNjcmlwdGlvbkNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPFN0YWNrQ29udGFpbmVyPnt3b3JrPy5zdGFja0xpc3R9PC9TdGFja0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L0xlZnRDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPEltYWdlQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgPEltYWdlV29yayBzcmM9e3dvcms/LmNvdmVySW1nfSBhbHQ9e3dvcms/LnRpdGxlfSAvPlxuICAgICAgICAgICAgICAgIDwvSW1hZ2VDb250YWluZXI+XG4gICAgICAgICAgICAgICAgey8qIDxSaWdodENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgIDxTbWFsbFRleHQ+dmlldzwvU21hbGxUZXh0PlxuICAgICAgICAgICAgICAgICAgPEFycm93IC8+XG4gICAgICAgICAgICAgICAgICA8U21hbGxUZXh0PnByb2plY3Q8L1NtYWxsVGV4dD5cbiAgICAgICAgICAgICAgICA8L1JpZ2h0Q29udGFpbmVyPiAqL31cbiAgICAgICAgICAgICAgPC9Xb3JrQ2FyZENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPFBhZ2luYXRpb24gaWR4PXtpZHggKyAxfSBsaXN0TGVuZ3RoPXt3b3Jrc0RhdGEubGVuZ3RofSAvPlxuICAgICAgICAgICAgPC9Xb3JrQ29udGFpbmVyPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQ29udGVudENvbnRhaW5lcj5cbiAgICA8Lz5cbiAgKVxufVxuXG5jb25zdCBJbWFnZVdvcmsgPSBzdHlsZWQuaW1nYFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEuMnM7XG5cbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgfVxuYFxuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIG9wYWNpdHk6ICR7aWZQcm9wKCdpc0ZhZGVPdXQnLCAwLCAxKX07XG5cbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAycyBlYXNlIDBzO1xuYFxuXG5jb25zdCBXb3JrQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMCA0MHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBzY3JvbGwtc25hcC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7Q09OU1RBTlQuc2NyZWVuU2l6ZS5zbWFsbH1weCkge1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgfVxuYFxuXG5jb25zdCBBcnJvdyA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6ICMyZDJkMmI7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogNDBweDtcbiAgbWFyZ2luOiAyMnB4IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAxcyBlYXNlIDBzO1xuXG4gICY6YmVmb3JlLFxuICAmOmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBiYWNrZ3JvdW5kOiAjMmQyZDJiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICB3aWR0aDogOHB4O1xuICB9XG5cbiAgJjpiZWZvcmUge1xuICAgIHJpZ2h0OiAtMXB4O1xuICAgIGJvdHRvbTogLTNweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB9XG5cbiAgJjphZnRlciB7XG4gICAgcmlnaHQ6IC0xcHg7XG4gICAgdG9wOiAtM3B4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgfVxuYFxuXG5jb25zdCBEZXNjcmlwdGlvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbmBcblxuY29uc3QgU3RhY2tDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG5gXG5cbmNvbnN0IExlZnRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMjUlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7Q09OU1RBTlQuc2NyZWVuU2l6ZS5zbWFsbH1weCkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgJHtEZXNjcmlwdGlvbkNvbnRhaW5lcn0sICR7U3RhY2tDb250YWluZXJ9IHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5gXG5jb25zdCBSaWdodENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxNSU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbmBcblxuY29uc3QgVGl0bGVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6IDI4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG5gXG5cbmNvbnN0IFNtYWxsVGV4dCA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UgMHM7XG5gXG5cbmNvbnN0IEltYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDYwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuYFxuXG5jb25zdCBXb3JrQ2FyZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTV2aDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBwYWRkaW5nOiAwIDQwcHg7XG5cbiAgJjpob3ZlciB7XG4gICAgJHtBcnJvd30ge1xuICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICB0cmFuc2l0aW9uOiB3aWR0aCAxcyBlYXNlIDBzO1xuICAgIH1cblxuICAgICR7U21hbGxUZXh0fSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAycyBlYXNlIDBzO1xuICAgIH1cbiAgfVxuYFxuXG5leHBvcnQgZGVmYXVsdCBXb3Jrc1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Works.js\n");

/***/ })

})