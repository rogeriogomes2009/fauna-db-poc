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

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
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
      lineNumber: 33,
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
        lineNumber: 35,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
        type: "text",
        name: "email",
        placeholder: "email",
        onChange: form.handleChange,
        value: form.values.email
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
        type: "text",
        name: "title",
        placeholder: "title",
        onChange: form.handleChange,
        value: form.values.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
        type: "submit",
        children: "Salvar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, _this);
};

_s(Create, "43ggaYxp7URBihIKbCYIk+pWv34=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"], formik__WEBPACK_IMPORTED_MODULE_2__["useFormik"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3JlYXRlLmpzIl0sIm5hbWVzIjpbInBvc3QiLCJ1cmwiLCJkYXRhIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJBY2NlcHQiLCJyZXMiLCJqc29uIiwicmV0dXJuZWREYXRhIiwiQ3JlYXRlIiwicm91dGVyIiwidXNlUm91dGVyIiwiZm9ybSIsInVzZUZvcm1payIsImluaXRpYWxWYWx1ZXMiLCJuYW1lIiwiZW1haWwiLCJ0aXRsZSIsIm9uU3VibWl0IiwidmFsdWVzIiwicmV0IiwiY29uc29sZSIsImxvZyIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUNoYW5nZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFFQSxJQUFNQSxJQUFJO0FBQUEsOExBQUcsaUJBQU1DLEdBQU4sRUFBV0MsSUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNPQyxLQUFLLENBQUNGLEdBQUQsRUFBTTtBQUMzQkcsb0JBQU0sRUFBQyxNQURvQjtBQUUzQkMsa0JBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVMLElBQWYsQ0FGcUI7QUFHM0JNLHFCQUFPLEVBQUM7QUFDTkMsc0JBQU0sRUFBRSxrQkFERjtBQUVOLGdDQUFnQjtBQUZWO0FBSG1CLGFBQU4sQ0FEWjs7QUFBQTtBQUNMQyxlQURLO0FBQUE7QUFBQSxtQkFTZ0JBLEdBQUcsQ0FBQ0MsSUFBSixFQVRoQjs7QUFBQTtBQVNMQyx3QkFUSztBQUFBLDZDQVVKQSxZQVZJOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQUpaLElBQUk7QUFBQTtBQUFBO0FBQUEsR0FBVjs7QUFhQSxJQUFNYSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQ25CLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFNQyxJQUFJLEdBQUdDLHdEQUFTLENBQUU7QUFDdEJDLGlCQUFhLEVBQUM7QUFDWkMsVUFBSSxFQUFDLEVBRE87QUFFWkMsV0FBSyxFQUFDLEVBRk07QUFHWkMsV0FBSyxFQUFDO0FBSE0sS0FEUTtBQU10QkMsWUFBUTtBQUFBLHVNQUFFLGtCQUFPQyxNQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ1V2QixJQUFJLENBQUMsZUFBRCxFQUFrQnVCLE1BQWxCLENBRGQ7O0FBQUE7QUFDRkMsbUJBREU7QUFFUkMsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLEVBRlEsQ0FHUjs7QUFIUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFGOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBTmMsR0FBRixDQUF0QjtBQVlBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQU0sY0FBUSxFQUFFUixJQUFJLENBQUNXLFlBQXJCO0FBQUEsOEJBQ0U7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixZQUFJLEVBQUMsTUFBeEI7QUFBK0IsbUJBQVcsRUFBQyxNQUEzQztBQUFrRCxnQkFBUSxFQUFFWCxJQUFJLENBQUNZLFlBQWpFO0FBQStFLGFBQUssRUFBRVosSUFBSSxDQUFDTyxNQUFMLENBQVlKO0FBQWxHO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsWUFBSSxFQUFDLE9BQXhCO0FBQWdDLG1CQUFXLEVBQUMsT0FBNUM7QUFBb0QsZ0JBQVEsRUFBRUgsSUFBSSxDQUFDWSxZQUFuRTtBQUFpRixhQUFLLEVBQUVaLElBQUksQ0FBQ08sTUFBTCxDQUFZSDtBQUFwRztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFHRTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLFlBQUksRUFBQyxPQUF4QjtBQUFnQyxtQkFBVyxFQUFDLE9BQTVDO0FBQW9ELGdCQUFRLEVBQUVKLElBQUksQ0FBQ1ksWUFBbkU7QUFBaUYsYUFBSyxFQUFFWixJQUFJLENBQUNPLE1BQUwsQ0FBWUY7QUFBcEc7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGLGVBSUU7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBWUQsQ0ExQkQ7O0dBQU1SLE07VUFDV0UscUQsRUFDRkUsZ0Q7OztLQUZUSixNO0FBMkJTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jcmVhdGUuMThmMGE5ODBjNmZkNzZlYTUxZWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRm9ybWlrfSBmcm9tIFwiZm9ybWlrXCJcclxuaW1wb3J0IHtSb3V0ZXIsIHVzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jb25zdCBwb3N0ID0gYXN5bmModXJsLCBkYXRhKSA9PiB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICBtZXRob2Q6J3Bvc3QnLFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICBoZWFkZXJzOntcclxuICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgIH1cclxuICB9KVxyXG4gIGNvbnN0IHJldHVybmVkRGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuICByZXR1cm4gcmV0dXJuZWREYXRhXHJcbn1cclxuXHJcbmNvbnN0IENyZWF0ZSA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IGZvcm0gPSB1c2VGb3JtaWsgKHtcclxuICAgIGluaXRpYWxWYWx1ZXM6e1xyXG4gICAgICBuYW1lOicnLFxyXG4gICAgICBlbWFpbDonJyxcclxuICAgICAgdGl0bGU6JydcclxuICAgIH0sXHJcbiAgICBvblN1Ym1pdDogYXN5bmMgKHZhbHVlcykgPT4ge1xyXG4gICAgICBjb25zdCByZXQgPSBhd2FpdCBwb3N0KCcvYXBpL2NvbnRhY3RzJywgdmFsdWVzKVxyXG4gICAgICBjb25zb2xlLmxvZyhyZXQpXHJcbiAgICAgIC8vY29uc29sZS5sb2codmFsdWVzKVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT5DcmVhdGUgQ29udGFjdDwvaDE+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtmb3JtLmhhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIG5hbWU9J25hbWUnIHBsYWNlaG9sZGVyPSduYW1lJyBvbkNoYW5nZT17Zm9ybS5oYW5kbGVDaGFuZ2V9IHZhbHVlPXtmb3JtLnZhbHVlcy5uYW1lfS8+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIG5hbWU9J2VtYWlsJyBwbGFjZWhvbGRlcj0nZW1haWwnIG9uQ2hhbmdlPXtmb3JtLmhhbmRsZUNoYW5nZX0gdmFsdWU9e2Zvcm0udmFsdWVzLmVtYWlsfS8+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIG5hbWU9J3RpdGxlJyBwbGFjZWhvbGRlcj0ndGl0bGUnIG9uQ2hhbmdlPXtmb3JtLmhhbmRsZUNoYW5nZX0gdmFsdWU9e2Zvcm0udmFsdWVzLnRpdGxlfS8+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2FsdmFyPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==