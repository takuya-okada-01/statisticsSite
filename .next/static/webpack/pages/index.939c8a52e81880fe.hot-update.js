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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer */ \"./src/components/Footer.tsx\");\n/* harmony import */ var _Head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Head */ \"./src/components/Head.tsx\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ \"./src/components/Header.tsx\");\nvar _this = undefined;\n\n\n\n\n\nvar DefaultLayout = function(param) {\n    var children = param.children;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n        flexDir: \"column\",\n        flex: 1,\n        fontSize: \"20px\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Head__WEBPACK_IMPORTED_MODULE_2__.Head, {}, void 0, false, {\n                fileName: \"/Users/okadatakuya/my_folder/GitHub/statisticsSite/src/components/DefaultLayout.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/okadatakuya/my_folder/GitHub/statisticsSite/src/components/DefaultLayout.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                overflowY: \"scroll\",\n                m: \"2%\",\n                \"padding-bottom\": true,\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/okadatakuya/my_folder/GitHub/statisticsSite/src/components/DefaultLayout.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Footer__WEBPACK_IMPORTED_MODULE_1__.Footer, {}, void 0, false, {\n                fileName: \"/Users/okadatakuya/my_folder/GitHub/statisticsSite/src/components/DefaultLayout.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/okadatakuya/my_folder/GitHub/statisticsSite/src/components/DefaultLayout.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, _this);\n};\n_c = DefaultLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DefaultLayout);\nvar _c;\n$RefreshReg$(_c, \"DefaultLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9EZWZhdWx0TGF5b3V0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQTZDO0FBRVg7QUFDSjtBQUVBO0FBTTlCLElBQU1LLGFBQWEsR0FBRyxnQkFBc0M7UUFBbkNDLFFBQVEsU0FBUkEsUUFBUTtJQUMvQixxQkFDRSw4REFBQ0wsa0RBQUk7UUFBQ00sT0FBTyxFQUFDLFFBQVE7UUFBQ0MsSUFBSSxFQUFFLENBQUM7UUFBRUMsUUFBUSxFQUFDLE1BQU07OzBCQUM3Qyw4REFBQ04sdUNBQUk7Ozs7cUJBQUc7MEJBQ1IsOERBQUNDLCtDQUFNOzs7O3FCQUFHOzBCQUNWLDhEQUFDSixpREFBRztnQkFBQ1UsU0FBUyxFQUFDLFFBQVE7Z0JBQUNDLENBQUMsRUFBQyxJQUFJO2dCQUFDQyxnQkFBYzswQkFDMUNOLFFBQVE7Ozs7O3FCQUNMOzBCQUNOLDhEQUFDSiwyQ0FBTTs7OztxQkFBRzs7Ozs7O2FBQ0wsQ0FDUDtDQUNIO0FBWEtHLEtBQUFBLGFBQWE7QUFhbkIsK0RBQWVBLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9EZWZhdWx0TGF5b3V0LnRzeD8yOTdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgRmxleCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gXCIuL0Zvb3RlclwiO1xuaW1wb3J0IHsgSGVhZCB9IGZyb20gXCIuL0hlYWRcIjtcblxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcblxudHlwZSBEZWZhdWx0TGF5b3V0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59O1xuXG5jb25zdCBEZWZhdWx0TGF5b3V0ID0gKHsgY2hpbGRyZW4gfTogRGVmYXVsdExheW91dFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEZsZXggZmxleERpcj1cImNvbHVtblwiIGZsZXg9ezF9IGZvbnRTaXplPVwiMjBweFwiPlxuICAgICAgPEhlYWQgLz5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxCb3ggb3ZlcmZsb3dZPVwic2Nyb2xsXCIgbT1cIjIlXCIgcGFkZGluZy1ib3R0b20+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvQm94PlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvRmxleD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERlZmF1bHRMYXlvdXQ7XG4iXSwibmFtZXMiOlsiQm94IiwiRmxleCIsIkZvb3RlciIsIkhlYWQiLCJIZWFkZXIiLCJEZWZhdWx0TGF5b3V0IiwiY2hpbGRyZW4iLCJmbGV4RGlyIiwiZmxleCIsImZvbnRTaXplIiwib3ZlcmZsb3dZIiwibSIsInBhZGRpbmctYm90dG9tIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/DefaultLayout.tsx\n"));

/***/ })

});