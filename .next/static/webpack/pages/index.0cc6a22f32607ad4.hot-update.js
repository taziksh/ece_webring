/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/ui/search.jsx":
/*!**************************************!*\
  !*** ./src/components/ui/search.jsx ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./src/pages/index.jsx":
/*!*****************************!*\
  !*** ./src/pages/index.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ui_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/search */ \"./src/components/ui/search.jsx\");\n/* harmony import */ var _components_ui_search__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_ui_search__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fontsource_variable_tourney__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fontsource-variable/tourney */ \"./node_modules/@fontsource-variable/tourney/index.css\");\n/* harmony import */ var _fontsource_variable_tourney__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fontsource_variable_tourney__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"space-y-16 py-12 px-16 min-h-screen min-w-screen bg-zinc-950 flex flex-col items-start hover:cursor-cell inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: \"ECE Webring\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sunni\\\\OneDrive\\\\Documents\\\\GitHub\\\\ece-webring\\\\ece_webring\\\\src\\\\pages\\\\index.jsx\",\n                            lineNumber: 13,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"shortcut icon\",\n                            href: \"/ece.ico\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sunni\\\\OneDrive\\\\Documents\\\\GitHub\\\\ece-webring\\\\ece_webring\\\\src\\\\pages\\\\index.jsx\",\n                            lineNumber: 14,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\sunni\\\\OneDrive\\\\Documents\\\\GitHub\\\\ece-webring\\\\ece_webring\\\\src\\\\pages\\\\index.jsx\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: \"flex flex-row justify-start\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-3xl font-bold text-white font-tourney\",\n                        children: \"ECE Webring\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sunni\\\\OneDrive\\\\Documents\\\\GitHub\\\\ece-webring\\\\ece_webring\\\\src\\\\pages\\\\index.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\sunni\\\\OneDrive\\\\Documents\\\\GitHub\\\\ece-webring\\\\ece_webring\\\\src\\\\pages\\\\index.jsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                    className: \"grid w-full lg:grid-cols-2 place-content-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_ui_search__WEBPACK_IMPORTED_MODULE_1___default()), {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sunni\\\\OneDrive\\\\Documents\\\\GitHub\\\\ece-webring\\\\ece_webring\\\\src\\\\pages\\\\index.jsx\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center justify-center p-8 text-white rounded-lg\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"wip\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sunni\\\\OneDrive\\\\Documents\\\\GitHub\\\\ece-webring\\\\ece_webring\\\\src\\\\pages\\\\index.jsx\",\n                                lineNumber: 25,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sunni\\\\OneDrive\\\\Documents\\\\GitHub\\\\ece-webring\\\\ece_webring\\\\src\\\\pages\\\\index.jsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\sunni\\\\OneDrive\\\\Documents\\\\GitHub\\\\ece-webring\\\\ece_webring\\\\src\\\\pages\\\\index.jsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                    className: \"fixed flex items-center justify-center w-full h-10 font-mono bottom-4 text-neutral-300\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Made in\\xa0\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://github.com/roozbehali/ece_webring/pulls\",\n                                target: \"_blank\",\n                                className: \"text-yellow-500 hover:text-yellow-700\",\n                                children: \"Waterloo.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sunni\\\\OneDrive\\\\Documents\\\\GitHub\\\\ece-webring\\\\ece_webring\\\\src\\\\pages\\\\index.jsx\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\sunni\\\\OneDrive\\\\Documents\\\\GitHub\\\\ece-webring\\\\ece_webring\\\\src\\\\pages\\\\index.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\sunni\\\\OneDrive\\\\Documents\\\\GitHub\\\\ece-webring\\\\ece_webring\\\\src\\\\pages\\\\index.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\sunni\\\\OneDrive\\\\Documents\\\\GitHub\\\\ece-webring\\\\ece_webring\\\\src\\\\pages\\\\index.jsx\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFLTUE7QUFKc0M7QUFDZjtBQUNTO0FBSXZCLFNBQVNHO0lBQ3RCLHFCQUNFO2tCQUNFLDRFQUFDQztZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0gsa0RBQUlBOztzQ0FDSCw4REFBQ0k7c0NBQU07Ozs7OztzQ0FDUCw4REFBQ0M7NEJBQUtDLEtBQUk7NEJBQWdCQyxNQUFLOzs7Ozs7Ozs7Ozs7OEJBRWpDLDhEQUFDQztvQkFBSUwsV0FBVTs4QkFDYiw0RUFBQ007d0JBQUVOLFdBQVU7a0NBQTZDOzs7Ozs7Ozs7Ozs4QkFLNUQsOERBQUNPO29CQUFLUCxXQUFVOztzQ0FDZCw4REFBQ0osOERBQU1BOzs7OztzQ0FDUCw4REFBQ0c7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNNOzBDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFJUCw4REFBQ0U7b0JBQU9SLFdBQVU7OEJBQ2hCLDRFQUFDTTs7NEJBQUU7MENBRUQsOERBQUNHO2dDQUNDTCxNQUFLO2dDQUNMTSxRQUFPO2dDQUNQVixXQUFVOzBDQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRYjtLQXBDd0JGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qc3g/ZDM1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTb3VyY2VfQ29kZV9Qcm8gfSBmcm9tICduZXh0L2ZvbnQvZ29vZ2xlJztcclxuaW1wb3J0IFNlYXJjaCBmcm9tICdAL2NvbXBvbmVudHMvdWkvc2VhcmNoJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0ICdAZm9udHNvdXJjZS12YXJpYWJsZS90b3VybmV5JztcclxuXHJcbmNvbnN0IHNvdXJjZV9jb2RlX3BybyA9IFNvdXJjZV9Db2RlX1Bybyh7IHN1YnNldHM6IFsnbGF0aW4nXSB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xNiBweS0xMiBweC0xNiBtaW4taC1zY3JlZW4gbWluLXctc2NyZWVuIGJnLXppbmMtOTUwIGZsZXggZmxleC1jb2wgaXRlbXMtc3RhcnQgaG92ZXI6Y3Vyc29yLWNlbGwgaW5zZXQtMCBiZy1bbGluZWFyLWdyYWRpZW50KHRvX3JpZ2h0LCM4MDgwODAxMl8xcHgsdHJhbnNwYXJlbnRfMXB4KSxsaW5lYXItZ3JhZGllbnQodG9fYm90dG9tLCM4MDgwODAxMl8xcHgsdHJhbnNwYXJlbnRfMXB4KV0gYmctW3NpemU6MzJweF8zMnB4XVwiPlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPHRpdGxlPkVDRSBXZWJyaW5nPC90aXRsZT5cclxuICAgICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiL2VjZS5pY29cIj48L2xpbms+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LXN0YXJ0XCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC13aGl0ZSBmb250LXRvdXJuZXlcIj5cclxuICAgICAgICAgICAgRUNFIFdlYnJpbmdcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L25hdj5cclxuXHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZ3JpZCB3LWZ1bGwgbGc6Z3JpZC1jb2xzLTIgcGxhY2UtY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxTZWFyY2ggLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC04IHRleHQtd2hpdGUgcm91bmRlZC1sZ1wiPlxyXG4gICAgICAgICAgICA8cD53aXA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L21haW4+XHJcblxyXG4gICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiZml4ZWQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsIGgtMTAgZm9udC1tb25vIGJvdHRvbS00IHRleHQtbmV1dHJhbC0zMDBcIj5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICBNYWRlIGluJm5ic3A7XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9yb296YmVoYWxpL2VjZV93ZWJyaW5nL3B1bGxzXCJcclxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQteWVsbG93LTUwMCBob3Zlcjp0ZXh0LXllbGxvdy03MDBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgV2F0ZXJsb28uXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJzb3VyY2VfY29kZV9wcm8iLCJTZWFyY2giLCJIZWFkIiwiSG9tZSIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwibGluayIsInJlbCIsImhyZWYiLCJuYXYiLCJwIiwibWFpbiIsImZvb3RlciIsImEiLCJ0YXJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.jsx\n"));

/***/ })

});