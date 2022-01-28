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

  var deleteContact = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(ref) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return deleteRequest('/api/contacts/' + ref);

            case 2:
              mutate();

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function deleteContact(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  if (!data) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 12
    }, _this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h1", {
      children: "Testando FAUNA-DB"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
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
          lineNumber: 29,
          columnNumber: 22
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("hr", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 5
        }, _this)]
      }, contact.ref['@ref'].id, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 5
      }, _this);
    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("pre", {
      children: JSON.stringify(data.after, null, 2)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiZGVsZXRlUmVxdWVzdCIsInVybCIsImZldGNoIiwibWV0aG9kIiwicmVzIiwianNvbiIsImRhdGEiLCJJbmRleCIsInVzZVNXUiIsIm11dGF0ZSIsImRlbGV0ZUNvbnRhY3QiLCJyZWYiLCJtYXAiLCJjb250YWN0IiwiaWQiLCJuYW1lIiwiZW1haWwiLCJKU09OIiwic3RyaW5naWZ5IiwiYWZ0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFFQSxJQUFNQSxhQUFhO0FBQUEsOExBQUcsaUJBQU1DLEdBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDQUMsS0FBSyxDQUFDRCxHQUFELEVBQU07QUFDM0JFLG9CQUFNLEVBQUU7QUFEbUIsYUFBTixDQURMOztBQUFBO0FBQ1pDLGVBRFk7QUFBQTtBQUFBLG1CQUlIQSxHQUFHLENBQUNDLElBQUosRUFKRzs7QUFBQTtBQUloQkMsZ0JBSmdCO0FBQUEsNkNBS2JBLElBTGE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBYk4sYUFBYTtBQUFBO0FBQUE7QUFBQSxHQUFuQjs7QUFRQSxJQUFNTyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQ2xCLGdCQUF1QkMsbURBQU0sQ0FBQyxlQUFELENBQTdCO0FBQUEsTUFBT0YsSUFBUCxXQUFPQSxJQUFQO0FBQUEsTUFBYUcsTUFBYixXQUFhQSxNQUFiOztBQUNBLE1BQU1DLGFBQWE7QUFBQSxpTUFBRyxrQkFBT0MsR0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDZFgsYUFBYSxDQUFDLG1CQUFpQlcsR0FBbEIsQ0FEQzs7QUFBQTtBQUVwQkYsb0JBQU07O0FBRmM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBYkMsYUFBYTtBQUFBO0FBQUE7QUFBQSxLQUFuQjs7QUFJQyxNQUFHLENBQUNKLElBQUosRUFBUztBQUNSLHdCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDRDs7QUFDRCxzQkFDRTtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFHSEEsSUFBSSxDQUFDQSxJQUFMLENBQVVNLEdBQVYsQ0FBYyxVQUFDQyxPQUFELEVBQWE7QUFDMUIsMEJBQ0U7QUFBQSxtQkFFSEEsT0FBTyxDQUFDRixHQUFSLENBQVksTUFBWixFQUFvQkcsRUFGakIsU0FFd0JELE9BQU8sQ0FBQ1AsSUFBUixDQUFhUyxJQUZyQyxTQUU4QyxHQUY5QyxFQUdIRixPQUFPLENBQUNQLElBQVIsQ0FBYVUsS0FIVixvQkFHaUI7QUFBUSxjQUFJLEVBQUMsUUFBYjtBQUFzQixpQkFBTyxFQUFFO0FBQUEsbUJBQU1OLGFBQWEsQ0FBQ0csT0FBTyxDQUFDRixHQUFSLENBQVksTUFBWixFQUFvQkcsRUFBckIsQ0FBbkI7QUFBQSxXQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIakIsZUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpBLGVBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMQTtBQUFBLFNBQVVELE9BQU8sQ0FBQ0YsR0FBUixDQUFZLE1BQVosRUFBb0JHLEVBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVNELEtBVkEsQ0FIRyxlQWlCRDtBQUFBLGdCQUFNRyxJQUFJLENBQUNDLFNBQUwsQ0FBZVosSUFBSSxDQUFDYSxLQUFwQixFQUEyQixJQUEzQixFQUFpQyxDQUFqQztBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFqQkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFxQkQsQ0E5QkQ7O0dBQU1aLEs7VUFDbUJDLDJDOzs7S0FEbkJELEs7QUErQlNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjI5MWUzMGEwZDEzZjc5YmFjNzM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIlxyXG5cclxuY29uc3QgZGVsZXRlUmVxdWVzdCA9IGFzeW5jKHVybCkgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICAgIG1ldGhvZDogJ2RlbGV0ZScsXHJcbn0pXHJcbmNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgcmV0dXJuIGRhdGFcclxufVxyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcbiAgY29uc3Qge2RhdGEsIG11dGF0ZX0gPSB1c2VTV1IoJy9hcGkvY29udGFjdHMnKVxyXG4gIGNvbnN0IGRlbGV0ZUNvbnRhY3QgPSBhc3luYyAocmVmKSA9PiB7XHJcbiAgICBhd2FpdCBkZWxldGVSZXF1ZXN0KCcvYXBpL2NvbnRhY3RzLycrcmVmKVxyXG4gICAgbXV0YXRlKClcclxuICB9XHJcbiAgIGlmKCFkYXRhKXtcclxuICAgIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPlxyXG4gIH1cclxuICByZXR1cm4oXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDE+VGVzdGFuZG8gRkFVTkEtREI8L2gxPlxyXG5cclxue2RhdGEuZGF0YS5tYXAoKGNvbnRhY3QpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBrZXk9e2NvbnRhY3QucmVmWydAcmVmJ10uaWR9PlxyXG5cclxue2NvbnRhY3QucmVmWydAcmVmJ10uaWR9IC8ge2NvbnRhY3QuZGF0YS5uYW1lfSAtIHsnICd9XHJcbntjb250YWN0LmRhdGEuZW1haWx9IDxidXR0b24gdHlwZT0nYnV0dG9uJyBvbkNsaWNrPXsoKSA9PiBkZWxldGVDb250YWN0KGNvbnRhY3QucmVmWydAcmVmJ10uaWQpfT5SZW1vdmVyPC9idXR0b24+XHJcbiAgICA8YnIvPlxyXG4gICAgPGhyLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4pXHJcbn1cclxuXHJcbiAgIDxwcmU+e0pTT04uc3RyaW5naWZ5KGRhdGEuYWZ0ZXIsIG51bGwsIDIpfTwvcHJlPiBcclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdLCJzb3VyY2VSb290IjoiIn0=