webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "C:\\meusprojetos\\fauna-db-poc\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();




var deleteRequest = /*#__PURE__*/function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(url) {
    var res, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(url, {
              method: 'delete'
            });

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.json();

          case 5:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function deleteRequest(_x) {
    return _ref.apply(this, arguments);
  };
}();

var Index = function Index() {
  _s();

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_2__["default"])('/api/contacts'),
      data = _useSWR.data,
      mutate = _useSWR.mutate;

  var deleteContact = function deleteContact(ref) {
    deleteRequest('/api/contacts/' + ref);
  };

  if (!data) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 12
    }, _this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h1", {
      children: "Testando FAUNA-DB"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, _this), data.data.map(function (contact) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        children: [contact.ref['@ref'].id, " / ", contact.data.name, " - ", ' ', contact.data.email, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
          type: "button",
          onClick: function onClick() {
            return deleteContact(contact.ref['@ref'].id);
          },
          children: "Remover"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 22
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("hr", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 5
        }, _this)]
      }, contact.ref['@ref'].id, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 5
      }, _this);
    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("pre", {
      children: JSON.stringify(data.after, null, 2)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, _this);
};

_s(Index, "6vhvSH8KniInToGbrj1D2ZsLYtA=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_2__["default"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiZGVsZXRlUmVxdWVzdCIsInVybCIsImZldGNoIiwibWV0aG9kIiwicmVzIiwianNvbiIsImRhdGEiLCJJbmRleCIsInVzZVNXUiIsIm11dGF0ZSIsImRlbGV0ZUNvbnRhY3QiLCJyZWYiLCJtYXAiLCJjb250YWN0IiwiaWQiLCJuYW1lIiwiZW1haWwiLCJKU09OIiwic3RyaW5naWZ5IiwiYWZ0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFFQSxJQUFNQSxhQUFhO0FBQUEsOExBQUcsaUJBQU1DLEdBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDQUMsS0FBSyxDQUFDRCxHQUFELEVBQU07QUFDM0JFLG9CQUFNLEVBQUU7QUFEbUIsYUFBTixDQURMOztBQUFBO0FBQ1pDLGVBRFk7QUFBQTtBQUFBLG1CQUlIQSxHQUFHLENBQUNDLElBQUosRUFKRzs7QUFBQTtBQUloQkMsZ0JBSmdCO0FBQUEsNkNBS2JBLElBTGE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBYk4sYUFBYTtBQUFBO0FBQUE7QUFBQSxHQUFuQjs7QUFRQSxJQUFNTyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQ2xCLGdCQUF1QkMsbURBQU0sQ0FBQyxlQUFELENBQTdCO0FBQUEsTUFBT0YsSUFBUCxXQUFPQSxJQUFQO0FBQUEsTUFBYUcsTUFBYixXQUFhQSxNQUFiOztBQUNBLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsR0FBRCxFQUFTO0FBQzdCWCxpQkFBYSxDQUFDLG1CQUFpQlcsR0FBbEIsQ0FBYjtBQUNELEdBRkQ7O0FBR0EsTUFBRyxDQUFDTCxJQUFKLEVBQVM7QUFDUCx3QkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0Q7O0FBQ0Qsc0JBQ0U7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBR0hBLElBQUksQ0FBQ0EsSUFBTCxDQUFVTSxHQUFWLENBQWMsVUFBQ0MsT0FBRCxFQUFhO0FBQzFCLDBCQUNFO0FBQUEsbUJBRUhBLE9BQU8sQ0FBQ0YsR0FBUixDQUFZLE1BQVosRUFBb0JHLEVBRmpCLFNBRXdCRCxPQUFPLENBQUNQLElBQVIsQ0FBYVMsSUFGckMsU0FFOEMsR0FGOUMsRUFHSEYsT0FBTyxDQUFDUCxJQUFSLENBQWFVLEtBSFYsb0JBR2lCO0FBQVEsY0FBSSxFQUFDLFFBQWI7QUFBc0IsaUJBQU8sRUFBRTtBQUFBLG1CQUFNTixhQUFhLENBQUNHLE9BQU8sQ0FBQ0YsR0FBUixDQUFZLE1BQVosRUFBb0JHLEVBQXJCLENBQW5CO0FBQUEsV0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSGpCLGVBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKQSxlQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEE7QUFBQSxTQUFVRCxPQUFPLENBQUNGLEdBQVIsQ0FBWSxNQUFaLEVBQW9CRyxFQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFTRCxLQVZBLENBSEcsZUFpQkQ7QUFBQSxnQkFBTUcsSUFBSSxDQUFDQyxTQUFMLENBQWVaLElBQUksQ0FBQ2EsS0FBcEIsRUFBMkIsSUFBM0IsRUFBaUMsQ0FBakM7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBakJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBcUJELENBN0JEOztHQUFNWixLO1VBQ21CQywyQzs7O0tBRG5CRCxLO0FBOEJTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kMTA1MmE1MDM0NmM0ZmZjNzM2My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCJcclxuXHJcbmNvbnN0IGRlbGV0ZVJlcXVlc3QgPSBhc3luYyh1cmwpID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCwge1xyXG4gICAgICBtZXRob2Q6ICdkZWxldGUnLFxyXG59KVxyXG5jb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gIHJldHVybiBkYXRhXHJcbn1cclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHtkYXRhLCBtdXRhdGV9ID0gdXNlU1dSKCcvYXBpL2NvbnRhY3RzJylcclxuICBjb25zdCBkZWxldGVDb250YWN0ID0gKHJlZikgPT4ge1xyXG4gICAgZGVsZXRlUmVxdWVzdCgnL2FwaS9jb250YWN0cy8nK3JlZilcclxuICB9XHJcbiAgaWYoIWRhdGEpe1xyXG4gICAgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+XHJcbiAgfVxyXG4gIHJldHVybihcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT5UZXN0YW5kbyBGQVVOQS1EQjwvaDE+XHJcblxyXG57ZGF0YS5kYXRhLm1hcCgoY29udGFjdCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGtleT17Y29udGFjdC5yZWZbJ0ByZWYnXS5pZH0+XHJcblxyXG57Y29udGFjdC5yZWZbJ0ByZWYnXS5pZH0gLyB7Y29udGFjdC5kYXRhLm5hbWV9IC0geycgJ31cclxue2NvbnRhY3QuZGF0YS5lbWFpbH0gPGJ1dHRvbiB0eXBlPSdidXR0b24nIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUNvbnRhY3QoY29udGFjdC5yZWZbJ0ByZWYnXS5pZCl9PlJlbW92ZXI8L2J1dHRvbj5cclxuICAgIDxici8+XHJcbiAgICA8aHIvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbilcclxufVxyXG5cclxuICAgPHByZT57SlNPTi5zdHJpbmdpZnkoZGF0YS5hZnRlciwgbnVsbCwgMil9PC9wcmU+IFxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==