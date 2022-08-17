webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n\nvar _jsxFileName = \"/Users/nicholashooley/Documents/practice-react-folder/react-nextjs-meetup-app/pages/index.js\";\n\n\n\n// doesnt include server side imports in front end bundle, next.js detects this.\n// const DUMMY_MEETUPS = [\n//   {\n//     id: 'm1',\n//     title: '1st meetup',\n//     image:\n//       'https://www.tripsavvy.com/thmb/6qw_gIgao_S0HDGTpQJkNAN8UN0=/900x0/filters:no_upscale():max_bytes(150000):strip_icc():gifv():format(webp)/GettyImages-4540860191-59930af8396e5a0010a21cde.jpg',\n//     address: 'Snowdonia',\n//     description: 'Welsh hills',\n//   },\n//   {\n//     id: 'm2',\n//     title: '2nd meetup',\n//     image:\n//       'https://www.coppermines.co.uk/wp-content/uploads/2021/04/Lake-District-Cottages-Fantastic-Facts-About-the-Lake-District-Blog-Image.jpg',\n//     address: 'Lake District',\n//     description: 'English hills',\n//   },\n// ];\nfunction HomePage(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    meetups: props.meetups\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 10\n  }, this);\n} // doesnt execute on the client, unlike useEffect.\n// fixes the html in devtools not been shown due to useEffect working on second re-render cycle.\n// data fetching for pre rendering.\n// ONLY WORKING - for pages files, not in components.\n// is a pre-rendering process - calls BEFORE calling component function.\n// executed during build process.\n// SEO improvements.\n// fetch data from an API etc.\n// need to return an object.\n// return a props object, has to be called props/\n// revalidate: 10 etc\n// updated after deployment\n// responsible for regeneration, on the server, post deployment\n// value is in seconds\n\n\n_c = HomePage;\n// Rus on server, like getStaticProps, but runs on client, after deployment.\n// this is preferable to getStaticProps when you have mulitple updates per second, otherwise getStaticProps is better.\n// get access to req / res, unlike getStaticProps\n// export async function getServerSideProps(context) {\n//   context.req = context.req;\n//   const res = context.res;\n//   return {\n//     props: {\n//       meetups: DUMMY_MEETUPS,\n//     },\n//   };\n// }\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lUGFnZSIsInByb3BzIiwibWVldHVwcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQ3ZCLHNCQUFPLHFFQUFDLHNFQUFEO0FBQVksV0FBTyxFQUFFQSxLQUFLLENBQUNDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNELEMsQ0FFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7S0FqQlNGLFE7QUE2Q1Q7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlQSx1RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNZWV0dXBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0JztcbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYic7XG5cbi8vIGRvZXNudCBpbmNsdWRlIHNlcnZlciBzaWRlIGltcG9ydHMgaW4gZnJvbnQgZW5kIGJ1bmRsZSwgbmV4dC5qcyBkZXRlY3RzIHRoaXMuXG5cbi8vIGNvbnN0IERVTU1ZX01FRVRVUFMgPSBbXG4vLyAgIHtcbi8vICAgICBpZDogJ20xJyxcbi8vICAgICB0aXRsZTogJzFzdCBtZWV0dXAnLFxuLy8gICAgIGltYWdlOlxuLy8gICAgICAgJ2h0dHBzOi8vd3d3LnRyaXBzYXZ2eS5jb20vdGhtYi82cXdfZ0lnYW9fUzBIREdUcFFKa05BTjhVTjA9LzkwMHgwL2ZpbHRlcnM6bm9fdXBzY2FsZSgpOm1heF9ieXRlcygxNTAwMDApOnN0cmlwX2ljYygpOmdpZnYoKTpmb3JtYXQod2VicCkvR2V0dHlJbWFnZXMtNDU0MDg2MDE5MS01OTkzMGFmODM5NmU1YTAwMTBhMjFjZGUuanBnJyxcbi8vICAgICBhZGRyZXNzOiAnU25vd2RvbmlhJyxcbi8vICAgICBkZXNjcmlwdGlvbjogJ1dlbHNoIGhpbGxzJyxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGlkOiAnbTInLFxuLy8gICAgIHRpdGxlOiAnMm5kIG1lZXR1cCcsXG4vLyAgICAgaW1hZ2U6XG4vLyAgICAgICAnaHR0cHM6Ly93d3cuY29wcGVybWluZXMuY28udWsvd3AtY29udGVudC91cGxvYWRzLzIwMjEvMDQvTGFrZS1EaXN0cmljdC1Db3R0YWdlcy1GYW50YXN0aWMtRmFjdHMtQWJvdXQtdGhlLUxha2UtRGlzdHJpY3QtQmxvZy1JbWFnZS5qcGcnLFxuLy8gICAgIGFkZHJlc3M6ICdMYWtlIERpc3RyaWN0Jyxcbi8vICAgICBkZXNjcmlwdGlvbjogJ0VuZ2xpc2ggaGlsbHMnLFxuLy8gICB9LFxuLy8gXTtcblxuZnVuY3Rpb24gSG9tZVBhZ2UocHJvcHMpIHtcbiAgcmV0dXJuIDxNZWV0dXBMaXN0IG1lZXR1cHM9e3Byb3BzLm1lZXR1cHN9PjwvTWVldHVwTGlzdD47XG59XG5cbi8vIGRvZXNudCBleGVjdXRlIG9uIHRoZSBjbGllbnQsIHVubGlrZSB1c2VFZmZlY3QuXG4vLyBmaXhlcyB0aGUgaHRtbCBpbiBkZXZ0b29scyBub3QgYmVlbiBzaG93biBkdWUgdG8gdXNlRWZmZWN0IHdvcmtpbmcgb24gc2Vjb25kIHJlLXJlbmRlciBjeWNsZS5cbi8vIGRhdGEgZmV0Y2hpbmcgZm9yIHByZSByZW5kZXJpbmcuXG4vLyBPTkxZIFdPUktJTkcgLSBmb3IgcGFnZXMgZmlsZXMsIG5vdCBpbiBjb21wb25lbnRzLlxuLy8gaXMgYSBwcmUtcmVuZGVyaW5nIHByb2Nlc3MgLSBjYWxscyBCRUZPUkUgY2FsbGluZyBjb21wb25lbnQgZnVuY3Rpb24uXG4vLyBleGVjdXRlZCBkdXJpbmcgYnVpbGQgcHJvY2Vzcy5cbi8vIFNFTyBpbXByb3ZlbWVudHMuXG4vLyBmZXRjaCBkYXRhIGZyb20gYW4gQVBJIGV0Yy5cbi8vIG5lZWQgdG8gcmV0dXJuIGFuIG9iamVjdC5cbi8vIHJldHVybiBhIHByb3BzIG9iamVjdCwgaGFzIHRvIGJlIGNhbGxlZCBwcm9wcy9cbi8vIHJldmFsaWRhdGU6IDEwIGV0Y1xuLy8gdXBkYXRlZCBhZnRlciBkZXBsb3ltZW50XG4vLyByZXNwb25zaWJsZSBmb3IgcmVnZW5lcmF0aW9uLCBvbiB0aGUgc2VydmVyLCBwb3N0IGRlcGxveW1lbnRcbi8vIHZhbHVlIGlzIGluIHNlY29uZHNcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuICAgIGBtb25nb2RiK3NydjovLyR7REJfQ1JFREVOVElBTFMudXNlcm5hbWV9OiR7REJfQ1JFREVOVElBTFMucGFzc3dvcmR9QGNsdXN0ZXIwLmdjYm5jNXYubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlgXG4gICk7XG5cbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcblxuICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ21lZXR1cHMnKTtcblxuICBjb25zdCBtZWV0dXBzID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZCgpLnRvQXJyYXkoKTtcblxuICBjbGllbnQuY2xvc2UoKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBtZWV0dXBzOiBtZWV0dXBzLm1hcCgobWVldHVwKSA9PiAoe1xuICAgICAgICB0aXRsZTogbWVldHVwLnRpdGxlLFxuICAgICAgICBhZGRyZXNzOiBtZWV0dXAuYWRkcmVzcyxcbiAgICAgICAgaW1hZ2U6IG1lZXR1cC5pbWFnZSxcbiAgICAgICAgaWQ6IG1lZXR1cC5faWQudG9TdHJpbmcoKSxcbiAgICAgIH0pKSxcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDEwLFxuICB9O1xufVxuXG4vLyBSdXMgb24gc2VydmVyLCBsaWtlIGdldFN0YXRpY1Byb3BzLCBidXQgcnVucyBvbiBjbGllbnQsIGFmdGVyIGRlcGxveW1lbnQuXG4vLyB0aGlzIGlzIHByZWZlcmFibGUgdG8gZ2V0U3RhdGljUHJvcHMgd2hlbiB5b3UgaGF2ZSBtdWxpdHBsZSB1cGRhdGVzIHBlciBzZWNvbmQsIG90aGVyd2lzZSBnZXRTdGF0aWNQcm9wcyBpcyBiZXR0ZXIuXG4vLyBnZXQgYWNjZXNzIHRvIHJlcSAvIHJlcywgdW5saWtlIGdldFN0YXRpY1Byb3BzXG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuLy8gICBjb250ZXh0LnJlcSA9IGNvbnRleHQucmVxO1xuLy8gICBjb25zdCByZXMgPSBjb250ZXh0LnJlcztcbi8vICAgcmV0dXJuIHtcbi8vICAgICBwcm9wczoge1xuLy8gICAgICAgbWVldHVwczogRFVNTVlfTUVFVFVQUyxcbi8vICAgICB9LFxuLy8gICB9O1xuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})