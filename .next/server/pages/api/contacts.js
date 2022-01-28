module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/contacts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/contacts/index.js":
/*!*************************************!*\
  !*** ./pages/api/contacts/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return handler; });
/* harmony import */ var _services_contacts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/contacts */ "./services/contacts.js");

async function handler(req, res) {
  if (req.method === 'POST') {
    const contact = await Object(_services_contacts__WEBPACK_IMPORTED_MODULE_0__["createContact"])(req.body);
    res.send(contact);
  } else {
    const contacts = await Object(_services_contacts__WEBPACK_IMPORTED_MODULE_0__["getAllContacts"])();
    res.json(contacts);
  }
}

/***/ }),

/***/ "./services/contacts.js":
/*!******************************!*\
  !*** ./services/contacts.js ***!
  \******************************/
/*! exports provided: getAllContacts, createContact, deleteContact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllContacts", function() { return getAllContacts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createContact", function() { return createContact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteContact", function() { return deleteContact; });
/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/db */ "./utils/db.js");

const getAllContacts = () => {
  return _utils_db__WEBPACK_IMPORTED_MODULE_0__["client"].query(_utils_db__WEBPACK_IMPORTED_MODULE_0__["q"].Map(_utils_db__WEBPACK_IMPORTED_MODULE_0__["q"].Paginate(_utils_db__WEBPACK_IMPORTED_MODULE_0__["q"].Match('allContacts'), {
    size: 10
  }), _utils_db__WEBPACK_IMPORTED_MODULE_0__["q"].Lambda(x => _utils_db__WEBPACK_IMPORTED_MODULE_0__["q"].Get(x))));
};
const createContact = data => {
  return _utils_db__WEBPACK_IMPORTED_MODULE_0__["client"].query(_utils_db__WEBPACK_IMPORTED_MODULE_0__["q"].Create(_utils_db__WEBPACK_IMPORTED_MODULE_0__["q"].Collection('contacts'), {
    data
  }));
};
const deleteContact = ref => {
  return _utils_db__WEBPACK_IMPORTED_MODULE_0__["client"].query(_utils_db__WEBPACK_IMPORTED_MODULE_0__["q"].Delete(_utils_db__WEBPACK_IMPORTED_MODULE_0__["q"].Ref(_utils_db__WEBPACK_IMPORTED_MODULE_0__["q"].Collection('contacts'), ref)));
};

/***/ }),

/***/ "./utils/db.js":
/*!*********************!*\
  !*** ./utils/db.js ***!
  \*********************/
/*! exports provided: q, client */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "client", function() { return client; });
const faunadb = __webpack_require__(/*! faunadb */ "faunadb");

const q = faunadb.query;
const client = new faunadb.Client({
  secret: 'fnAEd6hxlfACT0t2cF19Tq6cZY6ciQSJQ-sANytc'
});

/***/ }),

/***/ "faunadb":
/*!**************************!*\
  !*** external "faunadb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("faunadb");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2NvbnRhY3RzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL2NvbnRhY3RzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2RiLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImZhdW5hZGJcIiJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiY29udGFjdCIsImNyZWF0ZUNvbnRhY3QiLCJib2R5Iiwic2VuZCIsImNvbnRhY3RzIiwiZ2V0QWxsQ29udGFjdHMiLCJqc29uIiwiY2xpZW50IiwicXVlcnkiLCJxIiwiTWFwIiwiUGFnaW5hdGUiLCJNYXRjaCIsInNpemUiLCJMYW1iZGEiLCJ4IiwiR2V0IiwiZGF0YSIsIkNyZWF0ZSIsIkNvbGxlY3Rpb24iLCJkZWxldGVDb250YWN0IiwicmVmIiwiRGVsZXRlIiwiUmVmIiwiZmF1bmFkYiIsInJlcXVpcmUiLCJDbGllbnQiLCJzZWNyZXQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBQUE7QUFJZSxlQUFlQSxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUM7QUFDOUMsTUFBR0QsR0FBRyxDQUFDRSxNQUFKLEtBQWUsTUFBbEIsRUFBeUI7QUFDeEIsVUFBTUMsT0FBTyxHQUFHLE1BQU1DLHdFQUFhLENBQUNKLEdBQUcsQ0FBQ0ssSUFBTCxDQUFuQztBQUNBSixPQUFHLENBQUNLLElBQUosQ0FBU0gsT0FBVDtBQUNBLEdBSEQsTUFHSztBQUNMLFVBQU1JLFFBQVEsR0FBRyxNQUFNQyx5RUFBYyxFQUFyQztBQUNBUCxPQUFHLENBQUNRLElBQUosQ0FBU0YsUUFBVDtBQUNEO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDWkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTUMsY0FBYyxHQUFHLE1BQU07QUFDbEMsU0FBT0UsZ0RBQU0sQ0FBQ0MsS0FBUCxDQUNMQywyQ0FBQyxDQUFDQyxHQUFGLENBQ0FELDJDQUFDLENBQUNFLFFBQUYsQ0FDQUYsMkNBQUMsQ0FBQ0csS0FBRixDQUFRLGFBQVIsQ0FEQSxFQUVFO0FBQUVDLFFBQUksRUFBRTtBQUFSLEdBRkYsQ0FEQSxFQUtBSiwyQ0FBQyxDQUFDSyxNQUFGLENBQVNDLENBQUMsSUFBSU4sMkNBQUMsQ0FBQ08sR0FBRixDQUFNRCxDQUFOLENBQWQsQ0FMQSxDQURLLENBQVA7QUFTRCxDQVZNO0FBWUEsTUFBTWQsYUFBYSxHQUFHZ0IsSUFBSSxJQUFJO0FBQ25DLFNBQU9WLGdEQUFNLENBQUNDLEtBQVAsQ0FBYUMsMkNBQUMsQ0FBQ1MsTUFBRixDQUFTVCwyQ0FBQyxDQUFDVSxVQUFGLENBQWEsVUFBYixDQUFULEVBQWtDO0FBQUVGO0FBQUYsR0FBbEMsQ0FBYixDQUFQO0FBQ0QsQ0FGTTtBQUlBLE1BQU1HLGFBQWEsR0FBSUMsR0FBRCxJQUFTO0FBQ3BDLFNBQU9kLGdEQUFNLENBQUNDLEtBQVAsQ0FBYUMsMkNBQUMsQ0FBQ2EsTUFBRixDQUFTYiwyQ0FBQyxDQUFDYyxHQUFGLENBQU1kLDJDQUFDLENBQUNVLFVBQUYsQ0FBYSxVQUFiLENBQU4sRUFBZ0NFLEdBQWhDLENBQVQsQ0FBYixDQUFQO0FBQ0QsQ0FGTSxDOzs7Ozs7Ozs7Ozs7QUNsQlA7QUFBQTtBQUFBO0FBQUEsTUFBTUcsT0FBTyxHQUFHQyxtQkFBTyxDQUFDLHdCQUFELENBQXZCOztBQUNPLE1BQU1oQixDQUFDLEdBQUdlLE9BQU8sQ0FBQ2hCLEtBQWxCO0FBRUEsTUFBTUQsTUFBTSxHQUFHLElBQUlpQixPQUFPLENBQUNFLE1BQVosQ0FBbUI7QUFDdkNDLFFBQU0sRUFBRTtBQUQrQixDQUFuQixDQUFmLEM7Ozs7Ozs7Ozs7O0FDSFAsb0MiLCJmaWxlIjoicGFnZXMvYXBpL2NvbnRhY3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hcGkvY29udGFjdHMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBjcmVhdGVDb250YWN0LCBnZXRBbGxDb250YWN0cyB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9jb250YWN0c1wiXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBpZihyZXEubWV0aG9kID09PSAnUE9TVCcpe1xyXG4gICBjb25zdCBjb250YWN0ID0gYXdhaXQgY3JlYXRlQ29udGFjdChyZXEuYm9keSlcclxuICAgcmVzLnNlbmQoY29udGFjdClcclxuICB9ZWxzZXtcclxuICBjb25zdCBjb250YWN0cyA9IGF3YWl0IGdldEFsbENvbnRhY3RzKClcclxuICByZXMuanNvbihjb250YWN0cylcclxufVxyXG59IiwiaW1wb3J0IHsgcSwgY2xpZW50IH0gZnJvbSAnLi4vdXRpbHMvZGInXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QWxsQ29udGFjdHMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGNsaWVudC5xdWVyeShcclxuICAgIHEuTWFwKFxyXG4gICAgcS5QYWdpbmF0ZShcclxuICAgIHEuTWF0Y2goJ2FsbENvbnRhY3RzJyksXHJcbiAgICAgIHsgc2l6ZTogMTAgfVxyXG4gICAgICksXHJcbiAgICBxLkxhbWJkYSh4ID0+IHEuR2V0KHgpKVxyXG4gICApXHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVDb250YWN0ID0gZGF0YSA9PiB7XHJcbiAgcmV0dXJuIGNsaWVudC5xdWVyeShxLkNyZWF0ZShxLkNvbGxlY3Rpb24oJ2NvbnRhY3RzJykseyBkYXRhIH0pKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlQ29udGFjdCA9IChyZWYpID0+IHtcclxuICByZXR1cm4gY2xpZW50LnF1ZXJ5KHEuRGVsZXRlKHEuUmVmKHEuQ29sbGVjdGlvbignY29udGFjdHMnKSwgcmVmICkpKVxyXG59IiwiY29uc3QgZmF1bmFkYiA9IHJlcXVpcmUoJ2ZhdW5hZGInKVxyXG5leHBvcnQgY29uc3QgcSA9IGZhdW5hZGIucXVlcnlcclxuXHJcbmV4cG9ydCBjb25zdCBjbGllbnQgPSBuZXcgZmF1bmFkYi5DbGllbnQoe1xyXG4gIHNlY3JldDogJ2ZuQUVkNmh4bGZBQ1QwdDJjRjE5VHE2Y1pZNmNpUVNKUS1zQU55dGMnXHJcbn0pIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmF1bmFkYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9