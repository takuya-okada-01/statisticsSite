"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/DefaultLayout.tsx":
/*!******************************************!*\
  !*** ./src/components/DefaultLayout.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer */ \"./src/components/Footer.tsx\");\n/* harmony import */ var _Head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Head */ \"./src/components/Head.tsx\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ \"./src/components/Header.tsx\");\nvar _this = undefined;\n\n\n\n\n\nvar DefaultLayout = function(param) {\n    var children = param.children;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n        flexDir: \"column\",\n        flex: 1,\n        fontSize: \"20px\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Head__WEBPACK_IMPORTED_MODULE_2__.Head, {}, void 0, false, {\n                fileName: \"/Users/okadatakuya/my_folder/GitHub/statisticsSite/src/components/DefaultLayout.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/okadatakuya/my_folder/GitHub/statisticsSite/src/components/DefaultLayout.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                overflowY: \"scroll\",\n                m: \"2%\",\n                \"padding-bottom\": \"20\",\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/okadatakuya/my_folder/GitHub/statisticsSite/src/components/DefaultLayout.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Footer__WEBPACK_IMPORTED_MODULE_1__.Footer, {}, void 0, false, {\n                fileName: \"/Users/okadatakuya/my_folder/GitHub/statisticsSite/src/components/DefaultLayout.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/okadatakuya/my_folder/GitHub/statisticsSite/src/components/DefaultLayout.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, _this);\n};\n_c = DefaultLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DefaultLayout);\nvar _c;\n$RefreshReg$(_c, \"DefaultLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9EZWZhdWx0TGF5b3V0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQTZDO0FBRVg7QUFDSjtBQUVBO0FBTTlCLElBQU1LLGFBQWEsR0FBRyxnQkFBc0M7UUFBbkNDLFFBQVEsU0FBUkEsUUFBUTtJQUMvQixxQkFDRSw4REFBQ0wsa0RBQUk7UUFBQ00sT0FBTyxFQUFDLFFBQVE7UUFBQ0MsSUFBSSxFQUFFLENBQUM7UUFBRUMsUUFBUSxFQUFDLE1BQU07OzBCQUM3Qyw4REFBQ04sdUNBQUk7Ozs7cUJBQUc7MEJBQ1IsOERBQUNDLCtDQUFNOzs7O3FCQUFHOzBCQUNWLDhEQUFDSixpREFBRztnQkFBQ1UsU0FBUyxFQUFDLFFBQVE7Z0JBQUNDLENBQUMsRUFBQyxJQUFJO2dCQUFDQyxnQkFBYyxFQUFDLElBQUk7MEJBQy9DTixRQUFROzs7OztxQkFDTDswQkFDTiw4REFBQ0osMkNBQU07Ozs7cUJBQUc7Ozs7OzthQUNMLENBQ1A7Q0FDSDtBQVhLRyxLQUFBQSxhQUFhO0FBYW5CLCtEQUFlQSxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRGVmYXVsdExheW91dC50c3g/Mjk3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEZsZXggfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tIFwiLi9Gb290ZXJcIjtcbmltcG9ydCB7IEhlYWQgfSBmcm9tIFwiLi9IZWFkXCI7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG5cbnR5cGUgRGVmYXVsdExheW91dFByb3BzID0ge1xuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xufTtcblxuY29uc3QgRGVmYXVsdExheW91dCA9ICh7IGNoaWxkcmVuIH06IERlZmF1bHRMYXlvdXRQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxGbGV4IGZsZXhEaXI9XCJjb2x1bW5cIiBmbGV4PXsxfSBmb250U2l6ZT1cIjIwcHhcIj5cbiAgICAgIDxIZWFkIC8+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8Qm94IG92ZXJmbG93WT1cInNjcm9sbFwiIG09XCIyJVwiIHBhZGRpbmctYm90dG9tPVwiMjBcIj5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9Cb3g+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9GbGV4PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGVmYXVsdExheW91dDtcbiJdLCJuYW1lcyI6WyJCb3giLCJGbGV4IiwiRm9vdGVyIiwiSGVhZCIsIkhlYWRlciIsIkRlZmF1bHRMYXlvdXQiLCJjaGlsZHJlbiIsImZsZXhEaXIiLCJmbGV4IiwiZm9udFNpemUiLCJvdmVyZmxvd1kiLCJtIiwicGFkZGluZy1ib3R0b20iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/DefaultLayout.tsx\n"));

/***/ })

});