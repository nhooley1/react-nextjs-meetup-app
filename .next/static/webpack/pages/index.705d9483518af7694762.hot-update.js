webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n\n\nvar _jsxFileName = \"/Users/nicholashooley/Documents/practice-react-folder/react-nextjs-meetup-app/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\nvar DUMMY_MEETUPS = [{\n  id: 'm1',\n  title: '1st meetup',\n  image: 'https://www.tripsavvy.com/thmb/6qw_gIgao_S0HDGTpQJkNAN8UN0=/900x0/filters:no_upscale():max_bytes(150000):strip_icc():gifv():format(webp)/GettyImages-4540860191-59930af8396e5a0010a21cde.jpg',\n  address: 'Snowdonia',\n  description: 'Welsh hills'\n}, {\n  id: 'm2',\n  title: '2nd meetup',\n  image: 'https://www.coppermines.co.uk/wp-content/uploads/2021/04/Lake-District-Cottages-Fantastic-Facts-About-the-Lake-District-Blog-Image.jpg',\n  address: 'Lake District',\n  description: 'English hills'\n}];\n\nfunction HomePage(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      loadedMeetups = _useState[0],\n      setLoadedMeetups = _useState[1];\n\n  console.log(loadedMeetups); // useEffect renders after component function renders;\n  // loadedMeetups initially will be null, then populated.\n  // two component render cycles due to state updating.\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    // send a http request\n    setLoadedMeetups(DUMMY_MEETUPS);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    meetups: loadedMeetups\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 10\n  }, this);\n} // doesnt execute on the client\n\n\n_s(HomePage, \"lt95aOlOC9RW+nrRzHOiZRPQygU=\");\n\n_c = HomePage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJEVU1NWV9NRUVUVVBTIiwiaWQiLCJ0aXRsZSIsImltYWdlIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiSG9tZVBhZ2UiLCJwcm9wcyIsInVzZVN0YXRlIiwibG9hZGVkTWVldHVwcyIsInNldExvYWRlZE1lZXR1cHMiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsYUFBYSxHQUFHLENBQ3BCO0FBQ0VDLElBQUUsRUFBRSxJQUROO0FBRUVDLE9BQUssRUFBRSxZQUZUO0FBR0VDLE9BQUssRUFDSCw4TEFKSjtBQUtFQyxTQUFPLEVBQUUsV0FMWDtBQU1FQyxhQUFXLEVBQUU7QUFOZixDQURvQixFQVNwQjtBQUNFSixJQUFFLEVBQUUsSUFETjtBQUVFQyxPQUFLLEVBQUUsWUFGVDtBQUdFQyxPQUFLLEVBQ0gsd0lBSko7QUFLRUMsU0FBTyxFQUFFLGVBTFg7QUFNRUMsYUFBVyxFQUFFO0FBTmYsQ0FUb0IsQ0FBdEI7O0FBbUJBLFNBQVNDLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQUE7O0FBQUEsa0JBQ21CQyxzREFBUSxDQUFDLEVBQUQsQ0FEM0I7QUFBQSxNQUNoQkMsYUFEZ0I7QUFBQSxNQUNEQyxnQkFEQzs7QUFHdkJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxhQUFaLEVBSHVCLENBS3ZCO0FBQ0E7QUFDQTs7QUFDQUkseURBQVMsQ0FBQyxZQUFNO0FBQ2Q7QUFFQUgsb0JBQWdCLENBQUNWLGFBQUQsQ0FBaEI7QUFDRCxHQUpRLEVBSU4sRUFKTSxDQUFUO0FBTUEsc0JBQU8scUVBQUMsc0VBQUQ7QUFBWSxXQUFPLEVBQUVTO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNELEMsQ0FFRDs7O0dBakJTSCxROztLQUFBQSxROztBQTJCTUEsdUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTWVldHVwTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdCc7XG5cbmNvbnN0IERVTU1ZX01FRVRVUFMgPSBbXG4gIHtcbiAgICBpZDogJ20xJyxcbiAgICB0aXRsZTogJzFzdCBtZWV0dXAnLFxuICAgIGltYWdlOlxuICAgICAgJ2h0dHBzOi8vd3d3LnRyaXBzYXZ2eS5jb20vdGhtYi82cXdfZ0lnYW9fUzBIREdUcFFKa05BTjhVTjA9LzkwMHgwL2ZpbHRlcnM6bm9fdXBzY2FsZSgpOm1heF9ieXRlcygxNTAwMDApOnN0cmlwX2ljYygpOmdpZnYoKTpmb3JtYXQod2VicCkvR2V0dHlJbWFnZXMtNDU0MDg2MDE5MS01OTkzMGFmODM5NmU1YTAwMTBhMjFjZGUuanBnJyxcbiAgICBhZGRyZXNzOiAnU25vd2RvbmlhJyxcbiAgICBkZXNjcmlwdGlvbjogJ1dlbHNoIGhpbGxzJyxcbiAgfSxcbiAge1xuICAgIGlkOiAnbTInLFxuICAgIHRpdGxlOiAnMm5kIG1lZXR1cCcsXG4gICAgaW1hZ2U6XG4gICAgICAnaHR0cHM6Ly93d3cuY29wcGVybWluZXMuY28udWsvd3AtY29udGVudC91cGxvYWRzLzIwMjEvMDQvTGFrZS1EaXN0cmljdC1Db3R0YWdlcy1GYW50YXN0aWMtRmFjdHMtQWJvdXQtdGhlLUxha2UtRGlzdHJpY3QtQmxvZy1JbWFnZS5qcGcnLFxuICAgIGFkZHJlc3M6ICdMYWtlIERpc3RyaWN0JyxcbiAgICBkZXNjcmlwdGlvbjogJ0VuZ2xpc2ggaGlsbHMnLFxuICB9LFxuXTtcblxuZnVuY3Rpb24gSG9tZVBhZ2UocHJvcHMpIHtcbiAgY29uc3QgW2xvYWRlZE1lZXR1cHMsIHNldExvYWRlZE1lZXR1cHNdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnNvbGUubG9nKGxvYWRlZE1lZXR1cHMpO1xuXG4gIC8vIHVzZUVmZmVjdCByZW5kZXJzIGFmdGVyIGNvbXBvbmVudCBmdW5jdGlvbiByZW5kZXJzO1xuICAvLyBsb2FkZWRNZWV0dXBzIGluaXRpYWxseSB3aWxsIGJlIG51bGwsIHRoZW4gcG9wdWxhdGVkLlxuICAvLyB0d28gY29tcG9uZW50IHJlbmRlciBjeWNsZXMgZHVlIHRvIHN0YXRlIHVwZGF0aW5nLlxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIHNlbmQgYSBodHRwIHJlcXVlc3RcblxuICAgIHNldExvYWRlZE1lZXR1cHMoRFVNTVlfTUVFVFVQUyk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gPE1lZXR1cExpc3QgbWVldHVwcz17bG9hZGVkTWVldHVwc30+PC9NZWV0dXBMaXN0Pjtcbn1cblxuLy8gZG9lc250IGV4ZWN1dGUgb24gdGhlIGNsaWVudFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICAvLyBmZXRjaCBkYXRhIGZyb20gYW4gQVBJXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIG1lZXR1cHM6IERVTU1UX01FRVRVUFMsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})