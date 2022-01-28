webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\meusprojetos\\fauna-db-poc\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();




var Index = function Index() {
  _s();

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_0__["default"])('/api/contacts'),
      data = _useSWR.data;

  if (!data) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 12
    }, _this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
      children: "Testando FAUNA-DB"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, _this), data.data.map(function (contact) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        children: [JSON.stringify(contact.ref), contact.data.name, " - ", contact.data.email, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("hr", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 5
        }, _this)]
      }, contact.ref['@ref'].id, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 5
      }, _this);
    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("pre", {
      children: JSON.stringify(data.after, null, 2)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, _this);
};

_s(Index, "0sj2yJGYzZcCGI13NamvRceNarI=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_0__["default"]];
});

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJ1c2VTV1IiLCJkYXRhIiwibWFwIiwiY29udGFjdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZWYiLCJuYW1lIiwiZW1haWwiLCJpZCIsImFmdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUVsQixnQkFBZUMsbURBQU0sQ0FBQyxlQUFELENBQXJCO0FBQUEsTUFBT0MsSUFBUCxXQUFPQSxJQUFQOztBQUNBLE1BQUcsQ0FBQ0EsSUFBSixFQUFTO0FBQ1Asd0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNEOztBQUVELHNCQUNFO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUdIQSxJQUFJLENBQUNBLElBQUwsQ0FBVUMsR0FBVixDQUFjLFVBQUNDLE9BQUQsRUFBYTtBQUMxQiwwQkFDRTtBQUFBLG1CQUNFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUYsT0FBTyxDQUFDRyxHQUF2QixDQURGLEVBRUNILE9BQU8sQ0FBQ0YsSUFBUixDQUFhTSxJQUZkLFNBRXVCSixPQUFPLENBQUNGLElBQVIsQ0FBYU8sS0FGcEMsZUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhBLGVBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKQTtBQUFBLFNBQVVMLE9BQU8sQ0FBQ0csR0FBUixDQUFZLE1BQVosRUFBb0JHLEVBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVFELEtBVEEsQ0FIRyxlQWdCRDtBQUFBLGdCQUFNTCxJQUFJLENBQUNDLFNBQUwsQ0FBZUosSUFBSSxDQUFDUyxLQUFwQixFQUEyQixJQUEzQixFQUFpQyxDQUFqQztBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoQkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFvQkQsQ0EzQkQ7O0dBQU1YLEs7VUFFV0MsMkM7OztLQUZYRCxLO0FBNEJTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wNWQ1NGQ5ODZkMmU2NzI4YTkwNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCJcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCB7ZGF0YX0gPSB1c2VTV1IoJy9hcGkvY29udGFjdHMnKVxyXG4gIGlmKCFkYXRhKXtcclxuICAgIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPlxyXG4gIH1cclxuXHJcbiAgcmV0dXJuKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPlRlc3RhbmRvIEZBVU5BLURCPC9oMT5cclxuXHJcbntkYXRhLmRhdGEubWFwKChjb250YWN0KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYga2V5PXtjb250YWN0LnJlZlsnQHJlZiddLmlkfT5cclxuICAgICB7SlNPTi5zdHJpbmdpZnkoY29udGFjdC5yZWYpfVxyXG4gICAge2NvbnRhY3QuZGF0YS5uYW1lfSAtIHtjb250YWN0LmRhdGEuZW1haWx9XHJcbiAgICA8YnIvPlxyXG4gICAgPGhyLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4pXHJcbn1cclxuXHJcbiAgIDxwcmU+e0pTT04uc3RyaW5naWZ5KGRhdGEuYWZ0ZXIsIG51bGwsIDIpfTwvcHJlPiBcclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdLCJzb3VyY2VSb290IjoiIn0=