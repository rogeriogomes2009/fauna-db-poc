webpackHotUpdate_N_E("pages/create",{

/***/ "./pages/create.js":
/*!*************************!*\
  !*** ./pages/create.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);



var _jsxFileName = "C:\\meusprojetos\\fauna-db-poc\\pages\\create.js",
    _this = undefined,
    _s = $RefreshSig$();





var post = /*#__PURE__*/function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(url, data) {
    var res, returnedData;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(url, {
              method: 'post',
              body: JSON.stringify(data),
              headers: {
                Accept: 'application/json',
                'Content-type': 'application/json'
              }
            });

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.json();

          case 5:
            returnedData = _context.sent;
            return _context.abrupt("return", returnedData);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function post(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var Create = function Create() {
  _s();

  var form = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useFormik"])({
    initialValues: {
      name: '',
      email: '',
      title: ''
    },
    onSubmit: function () {
      var _onSubmit = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(values) {
        var ret;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return post('/api/contacts', values);

              case 2:
                ret = _context2.sent;
                console.log(ret); //console.log(values)

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function onSubmit(_x3) {
        return _onSubmit.apply(this, arguments);
      }

      return onSubmit;
    }()
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h1", {
      children: "Create Contact"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("form", {
      onSubmit: form.handleSubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
        type: "text",
        name: "name",
        placeholder: "name",
        onChange: form.handleChange,
        value: form.values.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
        type: "text",
        name: "email",
        placeholder: "email",
        onChange: form.handleChange,
        value: form.values.email
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
        type: "text",
        name: "title",
        placeholder: "title",
        onChange: form.handleChange,
        value: form.values.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
        type: "submit",
        children: "Salvar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, _this);
};

_s(Create, "Llg+Bdws6NXrQkecJUtHSzHQBeo=", false, function () {
  return [formik__WEBPACK_IMPORTED_MODULE_2__["useFormik"]];
});

_c = Create;
/* harmony default export */ __webpack_exports__["default"] = (Create);

var _c;

$RefreshReg$(_c, "Create");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3JlYXRlLmpzIl0sIm5hbWVzIjpbInBvc3QiLCJ1cmwiLCJkYXRhIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJBY2NlcHQiLCJyZXMiLCJqc29uIiwicmV0dXJuZWREYXRhIiwiQ3JlYXRlIiwiZm9ybSIsInVzZUZvcm1payIsImluaXRpYWxWYWx1ZXMiLCJuYW1lIiwiZW1haWwiLCJ0aXRsZSIsIm9uU3VibWl0IiwidmFsdWVzIiwicmV0IiwiY29uc29sZSIsImxvZyIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUNoYW5nZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFFQSxJQUFNQSxJQUFJO0FBQUEsOExBQUcsaUJBQU1DLEdBQU4sRUFBV0MsSUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNPQyxLQUFLLENBQUNGLEdBQUQsRUFBTTtBQUMzQkcsb0JBQU0sRUFBQyxNQURvQjtBQUUzQkMsa0JBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVMLElBQWYsQ0FGcUI7QUFHM0JNLHFCQUFPLEVBQUM7QUFDTkMsc0JBQU0sRUFBRSxrQkFERjtBQUVOLGdDQUFnQjtBQUZWO0FBSG1CLGFBQU4sQ0FEWjs7QUFBQTtBQUNMQyxlQURLO0FBQUE7QUFBQSxtQkFTZ0JBLEdBQUcsQ0FBQ0MsSUFBSixFQVRoQjs7QUFBQTtBQVNMQyx3QkFUSztBQUFBLDZDQVVKQSxZQVZJOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQUpaLElBQUk7QUFBQTtBQUFBO0FBQUEsR0FBVjs7QUFhQSxJQUFNYSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQ25CLE1BQU1DLElBQUksR0FBR0Msd0RBQVMsQ0FBRTtBQUN0QkMsaUJBQWEsRUFBQztBQUNaQyxVQUFJLEVBQUMsRUFETztBQUVaQyxXQUFLLEVBQUMsRUFGTTtBQUdaQyxXQUFLLEVBQUM7QUFITSxLQURRO0FBTXRCQyxZQUFRO0FBQUEsdU1BQUUsa0JBQU9DLE1BQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDVXJCLElBQUksQ0FBQyxlQUFELEVBQWtCcUIsTUFBbEIsQ0FEZDs7QUFBQTtBQUNGQyxtQkFERTtBQUVSQyx1QkFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosRUFGUSxDQUdSOztBQUhRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUY7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFOYyxHQUFGLENBQXRCO0FBWUEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBTSxjQUFRLEVBQUVSLElBQUksQ0FBQ1csWUFBckI7QUFBQSw4QkFDRTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLFlBQUksRUFBQyxNQUF4QjtBQUErQixtQkFBVyxFQUFDLE1BQTNDO0FBQWtELGdCQUFRLEVBQUVYLElBQUksQ0FBQ1ksWUFBakU7QUFBK0UsYUFBSyxFQUFFWixJQUFJLENBQUNPLE1BQUwsQ0FBWUo7QUFBbEc7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixZQUFJLEVBQUMsT0FBeEI7QUFBZ0MsbUJBQVcsRUFBQyxPQUE1QztBQUFvRCxnQkFBUSxFQUFFSCxJQUFJLENBQUNZLFlBQW5FO0FBQWlGLGFBQUssRUFBRVosSUFBSSxDQUFDTyxNQUFMLENBQVlIO0FBQXBHO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQUdFO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsWUFBSSxFQUFDLE9BQXhCO0FBQWdDLG1CQUFXLEVBQUMsT0FBNUM7QUFBb0QsZ0JBQVEsRUFBRUosSUFBSSxDQUFDWSxZQUFuRTtBQUFpRixhQUFLLEVBQUVaLElBQUksQ0FBQ08sTUFBTCxDQUFZRjtBQUFwRztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEYsZUFJRTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFZRCxDQXpCRDs7R0FBTU4sTTtVQUNTRSxnRDs7O0tBRFRGLE07QUEwQlNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NyZWF0ZS5mZWIyZTVjNDEzMWFlODBjNGM5OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VGb3JtaWt9IGZyb20gXCJmb3JtaWtcIlxyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuY29uc3QgcG9zdCA9IGFzeW5jKHVybCwgZGF0YSkgPT4ge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCwge1xyXG4gICAgbWV0aG9kOidwb3N0JyxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgaGVhZGVyczp7XHJcbiAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICB9XHJcbiAgfSlcclxuICBjb25zdCByZXR1cm5lZERhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgcmV0dXJuIHJldHVybmVkRGF0YVxyXG59XHJcblxyXG5jb25zdCBDcmVhdGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgZm9ybSA9IHVzZUZvcm1payAoe1xyXG4gICAgaW5pdGlhbFZhbHVlczp7XHJcbiAgICAgIG5hbWU6JycsXHJcbiAgICAgIGVtYWlsOicnLFxyXG4gICAgICB0aXRsZTonJ1xyXG4gICAgfSxcclxuICAgIG9uU3VibWl0OiBhc3luYyAodmFsdWVzKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJldCA9IGF3YWl0IHBvc3QoJy9hcGkvY29udGFjdHMnLCB2YWx1ZXMpXHJcbiAgICAgIGNvbnNvbGUubG9nKHJldClcclxuICAgICAgLy9jb25zb2xlLmxvZyh2YWx1ZXMpXHJcbiAgICB9XHJcbiAgfSlcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPkNyZWF0ZSBDb250YWN0PC9oMT5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2Zvcm0uaGFuZGxlU3VibWl0fT5cclxuICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT0nbmFtZScgcGxhY2Vob2xkZXI9J25hbWUnIG9uQ2hhbmdlPXtmb3JtLmhhbmRsZUNoYW5nZX0gdmFsdWU9e2Zvcm0udmFsdWVzLm5hbWV9Lz5cclxuICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT0nZW1haWwnIHBsYWNlaG9sZGVyPSdlbWFpbCcgb25DaGFuZ2U9e2Zvcm0uaGFuZGxlQ2hhbmdlfSB2YWx1ZT17Zm9ybS52YWx1ZXMuZW1haWx9Lz5cclxuICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT0ndGl0bGUnIHBsYWNlaG9sZGVyPSd0aXRsZScgb25DaGFuZ2U9e2Zvcm0uaGFuZGxlQ2hhbmdlfSB2YWx1ZT17Zm9ybS52YWx1ZXMudGl0bGV9Lz5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TYWx2YXI8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBDcmVhdGUiXSwic291cmNlUm9vdCI6IiJ9