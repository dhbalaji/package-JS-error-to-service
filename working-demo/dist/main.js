/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../src/index.js":
/*!***********************!*\
  !*** ../src/index.js ***!
  \***********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 60:0-14 */
/***/ ((module) => {

eval("class dhbalajiLogger {\r\n    constructor(url, showLogsInConsole, headerObj) {\r\n        this.url = url; //'https://jsonplaceholder.typicode.com/posts'\r\n        this.shouldShowLogsInConsole = showLogsInConsole;\r\n        this.headerObj = headerObj || {\r\n            headers: {\r\n                \"content-type\": \"application/json; charset=UTF-8\"\r\n            },\r\n            method: 'POST'\r\n        };\r\n        this.init();\r\n    }\r\n\r\n    successCB() {\r\n        if (this.shouldShowLogsInConsole) {\r\n            return 'Error logged'\r\n        }\r\n        return;\r\n    }\r\n\r\n    errorCB() {\r\n        if (this.shouldShowLogsInConsole) {\r\n            return 'Error submission errored'\r\n        }\r\n        return;\r\n    }\r\n\r\n    getUserAgent() {\r\n        if (window && window.navigator) {\r\n            const {doNotTrack, cookieEnabled, language, userAgent} = window.navigator;\r\n            return {doNotTrack, cookieEnabled, language, userAgent};\r\n        }\r\n    }\r\n\r\n    init() {\r\n        window.onerror = (message, source, lineno, colno, error) => {\r\n            const errorObj = {\r\n                message,\r\n                source,\r\n                lineno,\r\n                colno,\r\n                error,\r\n                date: new Date(),\r\n                userAppSettings: this.getUserAgent()\r\n            };\r\n            const payload = Object.assign({}, { ...this.headerObj }, {\r\n                body: JSON.stringify(errorObj)\r\n            })\r\n            if (this.shouldShowLogsInConsole) {\r\n                console.clear();\r\n                console.error(errorObj);\r\n            }\r\n            if (this.url) {\r\n                fetch(this.url, payload).then(() => this.successCB()).catch(() => this.errorCB())\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\nmodule.exports = (URL, showLogsInConsole, headerObj) => {\r\n    new dhbalajiLogger(URL, showLogsInConsole, headerObj);\r\n};\r\n\n\n//# sourceURL=webpack://working-demo/../src/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/index */ \"../src/index.js\");\n/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_index__WEBPACK_IMPORTED_MODULE_0__);\n;\r\n\r\n_src_index__WEBPACK_IMPORTED_MODULE_0___default()('https://jsonplaceholder.typicode.com/posts', true);\n\n//# sourceURL=webpack://working-demo/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;