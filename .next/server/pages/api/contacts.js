"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/contacts";
exports.ids = ["pages/api/contacts"];
exports.modules = {

/***/ "faunadb":
/*!**************************!*\
  !*** external "faunadb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("faunadb");

/***/ }),

/***/ "(api)/./pages/api/contacts.js":
/*!*******************************!*\
  !*** ./pages/api/contacts.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/db */ \"(api)/./utils/db.js\");\n\nconst getAllContacts = ()=>{\n    return _utils_db__WEBPACK_IMPORTED_MODULE_0__.client.query(_utils_db__WEBPACK_IMPORTED_MODULE_0__.q.Map(_utils_db__WEBPACK_IMPORTED_MODULE_0__.q.Paginate(_utils_db__WEBPACK_IMPORTED_MODULE_0__.q.Match('allContacts'), {\n        size: 2\n    }), _utils_db__WEBPACK_IMPORTED_MODULE_0__.q.Lambda((x)=>_utils_db__WEBPACK_IMPORTED_MODULE_0__.q.Get(x)\n    )));\n};\nasync function handler(req, res) {\n    const contacts = await getAllContacts();\n    res.json(contacts);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29udGFjdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMEM7QUFFMUMsS0FBSyxDQUFDRSxjQUFjLE9BQVMsQ0FBQztJQUM1QixNQUFNLENBQUNELG1EQUFZLENBQ2pCRCw0Q0FBSyxDQUNMQSxpREFBVSxDQUNWQSw4Q0FBTyxDQUFDLENBQWEsZUFDbkIsQ0FBQztRQUFDTyxJQUFJLEVBQUUsQ0FBQztJQUFDLENBQUMsR0FFYlAsK0NBQVEsRUFBQ1MsQ0FBQyxHQUFJVCw0Q0FBSyxDQUFDUyxDQUFDOztBQUd6QixDQUFDO0FBRWMsZUFBZUUsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBQy9DLEtBQUssQ0FBQ0MsUUFBUSxHQUFHLEtBQUssQ0FBQ1osY0FBYztJQUNyQ1csR0FBRyxDQUFDRSxJQUFJLENBQUNELFFBQVE7QUFDbkIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZhdW5hLWRiLXBvYy8uL3BhZ2VzL2FwaS9jb250YWN0cy5qcz80MTBjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHEsIGNsaWVudCB9IGZyb20gJy4uLy4uL3V0aWxzL2RiJ1xyXG5cclxuY29uc3QgZ2V0QWxsQ29udGFjdHMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGNsaWVudC5xdWVyeShcclxuICAgIHEuTWFwKFxyXG4gICAgcS5QYWdpbmF0ZShcclxuICAgIHEuTWF0Y2goJ2FsbENvbnRhY3RzJyksXHJcbiAgICAgIHsgc2l6ZTogMiB9XHJcbiAgICAgKSxcclxuICAgIHEuTGFtYmRhKHggPT4gcS5HZXQoeCkpXHJcbiAgIClcclxuIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGNvbnN0IGNvbnRhY3RzID0gYXdhaXQgZ2V0QWxsQ29udGFjdHMoKVxyXG4gIHJlcy5qc29uKGNvbnRhY3RzKVxyXG59Il0sIm5hbWVzIjpbInEiLCJjbGllbnQiLCJnZXRBbGxDb250YWN0cyIsInF1ZXJ5IiwiTWFwIiwiUGFnaW5hdGUiLCJNYXRjaCIsInNpemUiLCJMYW1iZGEiLCJ4IiwiR2V0IiwiaGFuZGxlciIsInJlcSIsInJlcyIsImNvbnRhY3RzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/contacts.js\n");

/***/ }),

/***/ "(api)/./utils/db.js":
/*!*********************!*\
  !*** ./utils/db.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"q\": () => (/* binding */ q),\n/* harmony export */   \"client\": () => (/* binding */ client)\n/* harmony export */ });\nconst faunadb = __webpack_require__(/*! faunadb */ \"faunadb\");\nconst q = faunadb.query;\nconst client = new faunadb.Client({\n    secret: 'fnAEd6hxlfACT0t2cF19Tq6cZY6ciQSJQ-sANytc'\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLEtBQUssQ0FBQ0EsT0FBTyxHQUFHQyxtQkFBTyxDQUFDLHdCQUFTO0FBQzFCLEtBQUssQ0FBQ0MsQ0FBQyxHQUFHRixPQUFPLENBQUNHLEtBQUs7QUFFdkIsS0FBSyxDQUFDQyxNQUFNLEdBQUcsR0FBRyxDQUFDSixPQUFPLENBQUNLLE1BQU0sQ0FBQyxDQUFDO0lBQ3hDQyxNQUFNLEVBQUUsQ0FBMEM7QUFDcEQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZhdW5hLWRiLXBvYy8uL3V0aWxzL2RiLmpzPzdjYjIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZmF1bmFkYiA9IHJlcXVpcmUoJ2ZhdW5hZGInKVxyXG5leHBvcnQgY29uc3QgcSA9IGZhdW5hZGIucXVlcnlcclxuXHJcbmV4cG9ydCBjb25zdCBjbGllbnQgPSBuZXcgZmF1bmFkYi5DbGllbnQoe1xyXG4gIHNlY3JldDogJ2ZuQUVkNmh4bGZBQ1QwdDJjRjE5VHE2Y1pZNmNpUVNKUS1zQU55dGMnXHJcbn0pIl0sIm5hbWVzIjpbImZhdW5hZGIiLCJyZXF1aXJlIiwicSIsInF1ZXJ5IiwiY2xpZW50IiwiQ2xpZW50Iiwic2VjcmV0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./utils/db.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/contacts.js"));
module.exports = __webpack_exports__;

})();