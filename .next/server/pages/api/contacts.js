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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/contacts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/contacts.js":
/*!*******************************!*\
  !*** ./pages/api/contacts.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return handler; });
/* harmony import */ var _services_contacts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/contacts */ "./services/contacts.js");

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
/*! exports provided: getAllContacts, createContact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllContacts", function() { return getAllContacts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createContact", function() { return createContact; });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2NvbnRhY3RzLmpzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL2NvbnRhY3RzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2RiLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImZhdW5hZGJcIiJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiY29udGFjdCIsImNyZWF0ZUNvbnRhY3QiLCJib2R5Iiwic2VuZCIsImNvbnRhY3RzIiwiZ2V0QWxsQ29udGFjdHMiLCJqc29uIiwiY2xpZW50IiwicXVlcnkiLCJxIiwiTWFwIiwiUGFnaW5hdGUiLCJNYXRjaCIsInNpemUiLCJMYW1iZGEiLCJ4IiwiR2V0IiwiZGF0YSIsIkNyZWF0ZSIsIkNvbGxlY3Rpb24iLCJmYXVuYWRiIiwicmVxdWlyZSIsIkNsaWVudCIsInNlY3JldCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQUE7QUFBQTtBQUVlLGVBQWVBLE9BQWYsQ0FBdUJDLEdBQXZCLEVBQTRCQyxHQUE1QixFQUFpQztBQUM5QyxNQUFHRCxHQUFHLENBQUNFLE1BQUosS0FBZSxNQUFsQixFQUF5QjtBQUN4QixVQUFNQyxPQUFPLEdBQUcsTUFBTUMsd0VBQWEsQ0FBQ0osR0FBRyxDQUFDSyxJQUFMLENBQW5DO0FBQ0FKLE9BQUcsQ0FBQ0ssSUFBSixDQUFTSCxPQUFUO0FBQ0EsR0FIRCxNQUdLO0FBQ0wsVUFBTUksUUFBUSxHQUFHLE1BQU1DLHlFQUFjLEVBQXJDO0FBQ0FQLE9BQUcsQ0FBQ1EsSUFBSixDQUFTRixRQUFUO0FBQ0Q7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNWRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTUMsY0FBYyxHQUFHLE1BQU07QUFDbEMsU0FBT0UsZ0RBQU0sQ0FBQ0MsS0FBUCxDQUNMQywyQ0FBQyxDQUFDQyxHQUFGLENBQ0FELDJDQUFDLENBQUNFLFFBQUYsQ0FDQUYsMkNBQUMsQ0FBQ0csS0FBRixDQUFRLGFBQVIsQ0FEQSxFQUVFO0FBQUVDLFFBQUksRUFBRTtBQUFSLEdBRkYsQ0FEQSxFQUtBSiwyQ0FBQyxDQUFDSyxNQUFGLENBQVNDLENBQUMsSUFBSU4sMkNBQUMsQ0FBQ08sR0FBRixDQUFNRCxDQUFOLENBQWQsQ0FMQSxDQURLLENBQVA7QUFTRCxDQVZNO0FBWUEsTUFBTWQsYUFBYSxHQUFHZ0IsSUFBSSxJQUFJO0FBQ25DLFNBQU9WLGdEQUFNLENBQUNDLEtBQVAsQ0FBYUMsMkNBQUMsQ0FBQ1MsTUFBRixDQUFTVCwyQ0FBQyxDQUFDVSxVQUFGLENBQWEsVUFBYixDQUFULEVBQWtDO0FBQUVGO0FBQUYsR0FBbEMsQ0FBYixDQUFQO0FBQ0QsQ0FGTSxDOzs7Ozs7Ozs7Ozs7QUNkUDtBQUFBO0FBQUE7QUFBQSxNQUFNRyxPQUFPLEdBQUdDLG1CQUFPLENBQUMsd0JBQUQsQ0FBdkI7O0FBQ08sTUFBTVosQ0FBQyxHQUFHVyxPQUFPLENBQUNaLEtBQWxCO0FBRUEsTUFBTUQsTUFBTSxHQUFHLElBQUlhLE9BQU8sQ0FBQ0UsTUFBWixDQUFtQjtBQUN2Q0MsUUFBTSxFQUFFO0FBRCtCLENBQW5CLENBQWYsQzs7Ozs7Ozs7Ozs7QUNIUCxvQyIsImZpbGUiOiJwYWdlcy9hcGkvY29udGFjdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS9jb250YWN0cy5qc1wiKTtcbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRhY3QsIGdldEFsbENvbnRhY3RzIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2NvbnRhY3RzXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBpZihyZXEubWV0aG9kID09PSAnUE9TVCcpe1xyXG4gICBjb25zdCBjb250YWN0ID0gYXdhaXQgY3JlYXRlQ29udGFjdChyZXEuYm9keSlcclxuICAgcmVzLnNlbmQoY29udGFjdClcclxuICB9ZWxzZXtcclxuICBjb25zdCBjb250YWN0cyA9IGF3YWl0IGdldEFsbENvbnRhY3RzKClcclxuICByZXMuanNvbihjb250YWN0cylcclxufVxyXG59IiwiaW1wb3J0IHsgcSwgY2xpZW50IH0gZnJvbSAnLi4vdXRpbHMvZGInXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QWxsQ29udGFjdHMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGNsaWVudC5xdWVyeShcclxuICAgIHEuTWFwKFxyXG4gICAgcS5QYWdpbmF0ZShcclxuICAgIHEuTWF0Y2goJ2FsbENvbnRhY3RzJyksXHJcbiAgICAgIHsgc2l6ZTogMTAgfVxyXG4gICAgICksXHJcbiAgICBxLkxhbWJkYSh4ID0+IHEuR2V0KHgpKVxyXG4gICApXHJcbiApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVDb250YWN0ID0gZGF0YSA9PiB7XHJcbiAgcmV0dXJuIGNsaWVudC5xdWVyeShxLkNyZWF0ZShxLkNvbGxlY3Rpb24oJ2NvbnRhY3RzJykseyBkYXRhIH0pKVxyXG59IiwiY29uc3QgZmF1bmFkYiA9IHJlcXVpcmUoJ2ZhdW5hZGInKVxyXG5leHBvcnQgY29uc3QgcSA9IGZhdW5hZGIucXVlcnlcclxuXHJcbmV4cG9ydCBjb25zdCBjbGllbnQgPSBuZXcgZmF1bmFkYi5DbGllbnQoe1xyXG4gIHNlY3JldDogJ2ZuQUVkNmh4bGZBQ1QwdDJjRjE5VHE2Y1pZNmNpUVNKUS1zQU55dGMnXHJcbn0pIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmF1bmFkYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9