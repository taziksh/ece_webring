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

/***/ "./src/components/ui/search.jsx":
/*!**************************************!*\
  !*** ./src/components/ui/search.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/input */ \"./src/components/ui/input.jsx\");\n/* harmony import */ var _pages_api_members__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/pages/api/members */ \"./src/pages/api/members.js\");\n/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fuse.js */ \"./node_modules/fuse.js/dist/fuse.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Search = ()=>{\n    _s();\n    // Fuse.js for search\n    const options = {\n        threshold: 0.3,\n        keys: [\n            \"name\",\n            \"siteURL\",\n            \"year\"\n        ],\n        useExtendedSearch: true\n    };\n    const fuse = new fuse_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](_pages_api_members__WEBPACK_IMPORTED_MODULE_3__.members, options);\n    // initially set to all members\n    const [currMemberState, setCurrMemberState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        fuse.search('\" \"')\n    ][0]);\n    const handleKeyDown = (e)=>{\n        // if(e.keyCode === 13) {\n        if (!e.target.value) {\n            setCurrMemberState([\n                fuse.search('\" \"')\n            ][0]);\n        } else {\n            setCurrMemberState([\n                fuse.search(e.target.value)\n            ][0]);\n        }\n    // }\n    };\n    return(// wrapper div\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"w-full h-full space-y-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid w-full grid-cols-7\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-center w-full col-span-1 font-mono text-lg bg-black text-neutral-500\",\n                        children: \"grep>\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sunni\\\\OneDrive\\\\Documents\\\\GitHub\\\\ece-webring\\\\ece_webring\\\\src\\\\components\\\\ui\\\\search.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                        type: \"text\",\n                        placeholder: \"filter by name, year, site ...\",\n                        onChange: handleKeyDown\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sunni\\\\OneDrive\\\\Documents\\\\GitHub\\\\ece-webring\\\\ece_webring\\\\src\\\\components\\\\ui\\\\search.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sunni\\\\OneDrive\\\\Documents\\\\GitHub\\\\ece-webring\\\\ece_webring\\\\src\\\\components\\\\ui\\\\search.jsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"pl-12 space-y-2 list-disc text-zinc-50 h-60\",\n                children: currMemberState.map((member, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"px-4 py-2 font-mono border-2 border-dotted border-neutral-600 hover:bg-neutral-800 hover:cursor-crosshair\",\n                        children: [\n                            member.item.name,\n                            \" |\\xa0\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-yellow-400 underline hover:text-yellow-600\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: member.item.siteURL,\n                                    target: \"_blank\",\n                                    children: member.item.siteURL\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\sunni\\\\OneDrive\\\\Documents\\\\GitHub\\\\ece-webring\\\\ece_webring\\\\src\\\\components\\\\ui\\\\search.jsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sunni\\\\OneDrive\\\\Documents\\\\GitHub\\\\ece-webring\\\\ece_webring\\\\src\\\\components\\\\ui\\\\search.jsx\",\n                                lineNumber: 55,\n                                columnNumber: 15\n                            }, undefined),\n                            \"\\xa0| \",\n                            member.item.year\n                        ]\n                    }, index, true, {\n                        fileName: \"C:\\\\Users\\\\sunni\\\\OneDrive\\\\Documents\\\\GitHub\\\\ece-webring\\\\ece_webring\\\\src\\\\components\\\\ui\\\\search.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sunni\\\\OneDrive\\\\Documents\\\\GitHub\\\\ece-webring\\\\ece_webring\\\\src\\\\components\\\\ui\\\\search.jsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\sunni\\\\OneDrive\\\\Documents\\\\GitHub\\\\ece-webring\\\\ece_webring\\\\src\\\\components\\\\ui\\\\search.jsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined));\n};\n_s(Search, \"/pn8ZJmDB76i4kzFc7rH92+qEmU=\");\n_c = Search;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);\nvar _c;\n$RefreshReg$(_c, \"Search\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy91aS9zZWFyY2guanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDa0I7QUFDRTtBQUNBO0FBQ25CO0FBRTNCLE1BQU1NLFNBQVM7O0lBQ2IscUJBQXFCO0lBQ3JCLE1BQU1DLFVBQVU7UUFDZEMsV0FBVztRQUNYQyxNQUFNO1lBQUM7WUFBUTtZQUFXO1NBQU87UUFDakNDLG1CQUFtQjtJQUNyQjtJQUNBLE1BQU1DLE9BQU8sSUFBSU4sK0NBQUlBLENBQUNELHVEQUFPQSxFQUFFRztJQUUvQiwrQkFBK0I7SUFDL0IsTUFBTSxDQUFDSyxpQkFBaUJDLG1CQUFtQixHQUFHWiwrQ0FBUUEsQ0FDcEQ7UUFBQ1UsS0FBS0csTUFBTSxDQUFDO0tBQU8sQ0FBQyxFQUFFO0lBR3pCLE1BQU1DLGdCQUFnQixDQUFDQztRQUNyQix5QkFBeUI7UUFDekIsSUFBSSxDQUFDQSxFQUFFQyxNQUFNLENBQUNDLEtBQUssRUFBRTtZQUNuQkwsbUJBQW1CO2dCQUFDRixLQUFLRyxNQUFNLENBQUM7YUFBTyxDQUFDLEVBQUU7UUFDNUMsT0FBTztZQUNMRCxtQkFBbUI7Z0JBQUNGLEtBQUtHLE1BQU0sQ0FBQ0UsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO2FBQUUsQ0FBQyxFQUFFO1FBQ3JEO0lBQ0EsSUFBSTtJQUNOO0lBRUEsT0FDRSxjQUFjO2tCQUNkLDhEQUFDQztRQUFRQyxXQUFVOzswQkFFakIsOERBQUNDO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUlELFdBQVU7a0NBQWlHOzs7Ozs7a0NBR2hILDhEQUFDakIsdURBQUtBO3dCQUNKbUIsTUFBSzt3QkFDTEMsYUFBWTt3QkFDWkMsVUFBVVQ7Ozs7Ozs7Ozs7OzswQkFLZCw4REFBQ1U7Z0JBQUdMLFdBQVU7MEJBQ1hSLGdCQUFnQmMsR0FBRyxDQUFDLENBQUNDLFFBQVFDO29CQUM1QixxQkFDRSw4REFBQ0M7d0JBRUNULFdBQVU7OzRCQUVUTyxPQUFPRyxJQUFJLENBQUNDLElBQUk7NEJBQUM7MENBQ2xCLDhEQUFDQztnQ0FBS1osV0FBVTswQ0FDZCw0RUFBQ2E7b0NBQUVDLE1BQU1QLE9BQU9HLElBQUksQ0FBQ0ssT0FBTztvQ0FBRWxCLFFBQU87OENBQ2xDVSxPQUFPRyxJQUFJLENBQUNLLE9BQU87Ozs7Ozs7Ozs7OzRCQUVqQjs0QkFDRVIsT0FBT0csSUFBSSxDQUFDTSxJQUFJOzt1QkFUcEJSOzs7OztnQkFZWDs7Ozs7Ozs7Ozs7O0FBSVI7R0E1RE10QjtLQUFBQTtBQThETiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy91aS9zZWFyY2guanN4PzRmODIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvaW5wdXQnO1xyXG5pbXBvcnQgeyBtZW1iZXJzIH0gZnJvbSAnQC9wYWdlcy9hcGkvbWVtYmVycyc7XHJcbmltcG9ydCBGdXNlIGZyb20gJ2Z1c2UuanMnO1xyXG5cclxuY29uc3QgU2VhcmNoID0gKCkgPT4ge1xyXG4gIC8vIEZ1c2UuanMgZm9yIHNlYXJjaFxyXG4gIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICB0aHJlc2hvbGQ6IDAuMyxcclxuICAgIGtleXM6IFsnbmFtZScsICdzaXRlVVJMJywgJ3llYXInXSxcclxuICAgIHVzZUV4dGVuZGVkU2VhcmNoOiB0cnVlLFxyXG4gIH07XHJcbiAgY29uc3QgZnVzZSA9IG5ldyBGdXNlKG1lbWJlcnMsIG9wdGlvbnMpO1xyXG5cclxuICAvLyBpbml0aWFsbHkgc2V0IHRvIGFsbCBtZW1iZXJzXHJcbiAgY29uc3QgW2N1cnJNZW1iZXJTdGF0ZSwgc2V0Q3Vyck1lbWJlclN0YXRlXSA9IHVzZVN0YXRlKFxyXG4gICAgW2Z1c2Uuc2VhcmNoKCdcIiBcIicpXVswXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZSkgPT4ge1xyXG4gICAgLy8gaWYoZS5rZXlDb2RlID09PSAxMykge1xyXG4gICAgaWYgKCFlLnRhcmdldC52YWx1ZSkge1xyXG4gICAgICBzZXRDdXJyTWVtYmVyU3RhdGUoW2Z1c2Uuc2VhcmNoKCdcIiBcIicpXVswXSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRDdXJyTWVtYmVyU3RhdGUoW2Z1c2Uuc2VhcmNoKGUudGFyZ2V0LnZhbHVlKV1bMF0pO1xyXG4gICAgfVxyXG4gICAgLy8gfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAvLyB3cmFwcGVyIGRpdlxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBzcGFjZS15LTRcIj5cclxuICAgICAgey8qIHNlYXJjaCBiYXIgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCB3LWZ1bGwgZ3JpZC1jb2xzLTdcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctZnVsbCBjb2wtc3Bhbi0xIGZvbnQtbW9ubyB0ZXh0LWxnIGJnLWJsYWNrIHRleHQtbmV1dHJhbC01MDBcIj5cclxuICAgICAgICAgIGdyZXAmZ3Q7XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cImZpbHRlciBieSBuYW1lLCB5ZWFyLCBzaXRlIC4uLlwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlS2V5RG93bn1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiBzZWFyY2ggcmVzdWx0cyAqL31cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cInBsLTEyIHNwYWNlLXktMiBsaXN0LWRpc2MgdGV4dC16aW5jLTUwIGgtNjBcIj5cclxuICAgICAgICB7Y3Vyck1lbWJlclN0YXRlLm1hcCgobWVtYmVyLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IHB5LTIgZm9udC1tb25vIGJvcmRlci0yIGJvcmRlci1kb3R0ZWQgYm9yZGVyLW5ldXRyYWwtNjAwIGhvdmVyOmJnLW5ldXRyYWwtODAwIGhvdmVyOmN1cnNvci1jcm9zc2hhaXJcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge21lbWJlci5pdGVtLm5hbWV9IHwmbmJzcDtcclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXllbGxvdy00MDAgdW5kZXJsaW5lIGhvdmVyOnRleHQteWVsbG93LTYwMFwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj17bWVtYmVyLml0ZW0uc2l0ZVVSTH0gdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgIHttZW1iZXIuaXRlbS5zaXRlVVJMfVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAmbmJzcDt8IHttZW1iZXIuaXRlbS55ZWFyfVxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC91bD5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIklucHV0IiwibWVtYmVycyIsIkZ1c2UiLCJTZWFyY2giLCJvcHRpb25zIiwidGhyZXNob2xkIiwia2V5cyIsInVzZUV4dGVuZGVkU2VhcmNoIiwiZnVzZSIsImN1cnJNZW1iZXJTdGF0ZSIsInNldEN1cnJNZW1iZXJTdGF0ZSIsInNlYXJjaCIsImhhbmRsZUtleURvd24iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ1bCIsIm1hcCIsIm1lbWJlciIsImluZGV4IiwibGkiLCJpdGVtIiwibmFtZSIsInNwYW4iLCJhIiwiaHJlZiIsInNpdGVVUkwiLCJ5ZWFyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ui/search.jsx\n"));

/***/ })

});