/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("function selectionSort(target) {\r\n    const len = target.length\r\n    const end = len - 1\r\n    for (let i = 0 ; i < end ; i++) {\r\n        const minIndex = min(target, i, end)\r\n        swap(target, i, minIndex)\r\n    }\r\n}\r\n\r\nfunction min(target, start, end) {\r\n    let index = start\r\n\r\n    for (let i = end + 1 ; i > start ; i--) {\r\n        if (target[i] < target[index]) {\r\n            index = i\r\n        }\r\n    }\r\n\r\n    return index\r\n}\r\n\r\nfunction swap(target, i, j) {\r\n    const temp = target[i]\r\n    target[i] = target[j]\r\n    target[j] = temp\r\n}\r\n\r\nmodule.exports = selectionSort\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zZWxlY3Rpb25Tb3J0LmpzPzNhYmIiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gc2VsZWN0aW9uU29ydCh0YXJnZXQpIHtcclxuICAgIGNvbnN0IGxlbiA9IHRhcmdldC5sZW5ndGhcclxuICAgIGNvbnN0IGVuZCA9IGxlbiAtIDFcclxuICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IGVuZCA7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IG1pbkluZGV4ID0gbWluKHRhcmdldCwgaSwgZW5kKVxyXG4gICAgICAgIHN3YXAodGFyZ2V0LCBpLCBtaW5JbmRleClcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbWluKHRhcmdldCwgc3RhcnQsIGVuZCkge1xyXG4gICAgbGV0IGluZGV4ID0gc3RhcnRcclxuXHJcbiAgICBmb3IgKGxldCBpID0gZW5kICsgMSA7IGkgPiBzdGFydCA7IGktLSkge1xyXG4gICAgICAgIGlmICh0YXJnZXRbaV0gPCB0YXJnZXRbaW5kZXhdKSB7XHJcbiAgICAgICAgICAgIGluZGV4ID0gaVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaW5kZXhcclxufVxyXG5cclxuZnVuY3Rpb24gc3dhcCh0YXJnZXQsIGksIGopIHtcclxuICAgIGNvbnN0IHRlbXAgPSB0YXJnZXRbaV1cclxuICAgIHRhcmdldFtpXSA9IHRhcmdldFtqXVxyXG4gICAgdGFyZ2V0W2pdID0gdGVtcFxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHNlbGVjdGlvblNvcnRcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2VsZWN0aW9uU29ydC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

eval("const selectionSort = __webpack_require__(0)\r\n\r\nonmessage = ({ data }) => {\r\n    selectionSort(data)\r\n    postMessage(true)\r\n\r\n    close()\r\n}\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zZWxlY3Rpb25Tb3J0Lndvcmtlci5qcz8wNTVjIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNlbGVjdGlvblNvcnQgPSByZXF1aXJlKCcuL3NlbGVjdGlvblNvcnQnKVxyXG5cclxub25tZXNzYWdlID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgICBzZWxlY3Rpb25Tb3J0KGRhdGEpXHJcbiAgICBwb3N0TWVzc2FnZSh0cnVlKVxyXG5cclxuICAgIGNsb3NlKClcclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zZWxlY3Rpb25Tb3J0Lndvcmtlci5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);