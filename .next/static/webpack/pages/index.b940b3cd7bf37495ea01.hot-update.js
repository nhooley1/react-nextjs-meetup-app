webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n\nvar _jsxFileName = \"/Users/nicholashooley/Documents/practice-react-folder/react-nextjs-meetup-app/pages/index.js\";\n\n\n\n// doesnt include server side imports in front end bundle, next.js detects this.\n// const DUMMY_MEETUPS = [\n//   {\n//     id: 'm1',\n//     title: '1st meetup',\n//     image:\n//       'https://www.tripsavvy.com/thmb/6qw_gIgao_S0HDGTpQJkNAN8UN0=/900x0/filters:no_upscale():max_bytes(150000):strip_icc():gifv():format(webp)/GettyImages-4540860191-59930af8396e5a0010a21cde.jpg',\n//     address: 'Snowdonia',\n//     description: 'Welsh hills',\n//   },\n//   {\n//     id: 'm2',\n//     title: '2nd meetup',\n//     image:\n//       'https://www.coppermines.co.uk/wp-content/uploads/2021/04/Lake-District-Cottages-Fantastic-Facts-About-the-Lake-District-Blog-Image.jpg',\n//     address: 'Lake District',\n//     description: 'English hills',\n//   },\n// ];\nfunction HomePage(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    meetups: props.meetups\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 10\n  }, this);\n} // doesnt execute on the client, unlike useEffect.\n// fixes the html in devtools not been shown due to useEffect working on second re-render cycle.\n// data fetching for pre rendering.\n// ONLY WORKING - for pages files, not in components.\n// is a pre-rendering process - calls BEFORE calling component function.\n// executed during build process.\n// SEO improvements.\n// fetch data from an API etc.\n// need to return an object.\n// return a props object, has to be called props/\n// revalidate: 10 etc\n// updated after deployment\n// responsible for regeneration, on the server, post deployment\n// value is in seconds\n\n\n_c = HomePage;\n// Rus on server, like getStaticProps, but runs on client, after deployment.\n// this is preferable to getStaticProps when you have mulitple updates per second, otherwise getStaticProps is better.\n// get access to req / res, unlike getStaticProps\n// export async function getServerSideProps(context) {\n//   context.req = context.req;\n//   const res = context.res;\n//   return {\n//     props: {\n//       meetups: DUMMY_MEETUPS,\n//     },\n//   };\n// }\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lUGFnZSIsInByb3BzIiwibWVldHVwcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQ3ZCLHNCQUFPLHFFQUFDLHNFQUFEO0FBQVksV0FBTyxFQUFFQSxLQUFLLENBQUNDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNELEMsQ0FFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7S0FqQlNGLFE7QUE2Q1Q7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlQSx1RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNZWV0dXBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0JztcbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYic7XG5pbXBvcnQgeyBEQl9DUkVERU5USUFMUyB9IGZyb20gJy4uLy4uL2RiLWNyZWRlbnRpYWxzL2RiLWNyZWRlbnRpYWxzJztcblxuLy8gZG9lc250IGluY2x1ZGUgc2VydmVyIHNpZGUgaW1wb3J0cyBpbiBmcm9udCBlbmQgYnVuZGxlLCBuZXh0LmpzIGRldGVjdHMgdGhpcy5cblxuLy8gY29uc3QgRFVNTVlfTUVFVFVQUyA9IFtcbi8vICAge1xuLy8gICAgIGlkOiAnbTEnLFxuLy8gICAgIHRpdGxlOiAnMXN0IG1lZXR1cCcsXG4vLyAgICAgaW1hZ2U6XG4vLyAgICAgICAnaHR0cHM6Ly93d3cudHJpcHNhdnZ5LmNvbS90aG1iLzZxd19nSWdhb19TMEhER1RwUUprTkFOOFVOMD0vOTAweDAvZmlsdGVyczpub191cHNjYWxlKCk6bWF4X2J5dGVzKDE1MDAwMCk6c3RyaXBfaWNjKCk6Z2lmdigpOmZvcm1hdCh3ZWJwKS9HZXR0eUltYWdlcy00NTQwODYwMTkxLTU5OTMwYWY4Mzk2ZTVhMDAxMGEyMWNkZS5qcGcnLFxuLy8gICAgIGFkZHJlc3M6ICdTbm93ZG9uaWEnLFxuLy8gICAgIGRlc2NyaXB0aW9uOiAnV2Vsc2ggaGlsbHMnLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgaWQ6ICdtMicsXG4vLyAgICAgdGl0bGU6ICcybmQgbWVldHVwJyxcbi8vICAgICBpbWFnZTpcbi8vICAgICAgICdodHRwczovL3d3dy5jb3BwZXJtaW5lcy5jby51ay93cC1jb250ZW50L3VwbG9hZHMvMjAyMS8wNC9MYWtlLURpc3RyaWN0LUNvdHRhZ2VzLUZhbnRhc3RpYy1GYWN0cy1BYm91dC10aGUtTGFrZS1EaXN0cmljdC1CbG9nLUltYWdlLmpwZycsXG4vLyAgICAgYWRkcmVzczogJ0xha2UgRGlzdHJpY3QnLFxuLy8gICAgIGRlc2NyaXB0aW9uOiAnRW5nbGlzaCBoaWxscycsXG4vLyAgIH0sXG4vLyBdO1xuXG5mdW5jdGlvbiBIb21lUGFnZShwcm9wcykge1xuICByZXR1cm4gPE1lZXR1cExpc3QgbWVldHVwcz17cHJvcHMubWVldHVwc30+PC9NZWV0dXBMaXN0Pjtcbn1cblxuLy8gZG9lc250IGV4ZWN1dGUgb24gdGhlIGNsaWVudCwgdW5saWtlIHVzZUVmZmVjdC5cbi8vIGZpeGVzIHRoZSBodG1sIGluIGRldnRvb2xzIG5vdCBiZWVuIHNob3duIGR1ZSB0byB1c2VFZmZlY3Qgd29ya2luZyBvbiBzZWNvbmQgcmUtcmVuZGVyIGN5Y2xlLlxuLy8gZGF0YSBmZXRjaGluZyBmb3IgcHJlIHJlbmRlcmluZy5cbi8vIE9OTFkgV09SS0lORyAtIGZvciBwYWdlcyBmaWxlcywgbm90IGluIGNvbXBvbmVudHMuXG4vLyBpcyBhIHByZS1yZW5kZXJpbmcgcHJvY2VzcyAtIGNhbGxzIEJFRk9SRSBjYWxsaW5nIGNvbXBvbmVudCBmdW5jdGlvbi5cbi8vIGV4ZWN1dGVkIGR1cmluZyBidWlsZCBwcm9jZXNzLlxuLy8gU0VPIGltcHJvdmVtZW50cy5cbi8vIGZldGNoIGRhdGEgZnJvbSBhbiBBUEkgZXRjLlxuLy8gbmVlZCB0byByZXR1cm4gYW4gb2JqZWN0LlxuLy8gcmV0dXJuIGEgcHJvcHMgb2JqZWN0LCBoYXMgdG8gYmUgY2FsbGVkIHByb3BzL1xuLy8gcmV2YWxpZGF0ZTogMTAgZXRjXG4vLyB1cGRhdGVkIGFmdGVyIGRlcGxveW1lbnRcbi8vIHJlc3BvbnNpYmxlIGZvciByZWdlbmVyYXRpb24sIG9uIHRoZSBzZXJ2ZXIsIHBvc3QgZGVwbG95bWVudFxuLy8gdmFsdWUgaXMgaW4gc2Vjb25kc1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXG4gICAgYG1vbmdvZGIrc3J2Oi8vJHtEQl9DUkVERU5USUFMUy51c2VybmFtZX06JHtEQl9DUkVERU5USUFMUy5wYXNzd29yZH1AY2x1c3RlcjAuZ2NibmM1di5tb25nb2RiLm5ldC9tZWV0dXBzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eWBcbiAgKTtcblxuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xuXG4gIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbignbWVldHVwcycpO1xuXG4gIGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kKCkudG9BcnJheSgpO1xuXG4gIGNsaWVudC5jbG9zZSgpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIG1lZXR1cHM6IG1lZXR1cHMubWFwKChtZWV0dXApID0+ICh7XG4gICAgICAgIHRpdGxlOiBtZWV0dXAudGl0bGUsXG4gICAgICAgIGFkZHJlc3M6IG1lZXR1cC5hZGRyZXNzLFxuICAgICAgICBpbWFnZTogbWVldHVwLmltYWdlLFxuICAgICAgICBpZDogbWVldHVwLl9pZC50b1N0cmluZygpLFxuICAgICAgfSkpLFxuICAgIH0sXG4gICAgcmV2YWxpZGF0ZTogMTAsXG4gIH07XG59XG5cbi8vIFJ1cyBvbiBzZXJ2ZXIsIGxpa2UgZ2V0U3RhdGljUHJvcHMsIGJ1dCBydW5zIG9uIGNsaWVudCwgYWZ0ZXIgZGVwbG95bWVudC5cbi8vIHRoaXMgaXMgcHJlZmVyYWJsZSB0byBnZXRTdGF0aWNQcm9wcyB3aGVuIHlvdSBoYXZlIG11bGl0cGxlIHVwZGF0ZXMgcGVyIHNlY29uZCwgb3RoZXJ3aXNlIGdldFN0YXRpY1Byb3BzIGlzIGJldHRlci5cbi8vIGdldCBhY2Nlc3MgdG8gcmVxIC8gcmVzLCB1bmxpa2UgZ2V0U3RhdGljUHJvcHNcblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4vLyAgIGNvbnRleHQucmVxID0gY29udGV4dC5yZXE7XG4vLyAgIGNvbnN0IHJlcyA9IGNvbnRleHQucmVzO1xuLy8gICByZXR1cm4ge1xuLy8gICAgIHByb3BzOiB7XG4vLyAgICAgICBtZWV0dXBzOiBEVU1NWV9NRUVUVVBTLFxuLy8gICAgIH0sXG4vLyAgIH07XG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})