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

eval("function selectionSort(arr){\r\n    const len = arr.length\r\n    const end = len - 1\r\n    for(let i = 0 ; i < end ; i++){\r\n        let minIndex = min(arr, i, end)\r\n        swap(arr, i, minIndex)\r\n    }\r\n    \r\n}\r\n\r\nfunction min(arr, start, end){\r\n    let index = start\r\n\r\n    for(let i = end + 1 ; i > start ; i--){\r\n        if(arr[i] < arr[index]){\r\n            index = i\r\n        }\r\n    }\r\n\r\n    return index\r\n}\r\n\r\nfunction swap(arr, i, j){\r\n    const temp = arr[i]\r\n    arr[i] = arr[j]\r\n    arr[j] = temp \r\n}\r\n\r\n// require('./getAvgExecutTime')(selectionSort, 10, 3, true)\r\n\r\nmodule.exports = selectionSort//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zZWxlY3Rpb25Tb3J0LmpzPzNhYmIiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gc2VsZWN0aW9uU29ydChhcnIpe1xyXG4gICAgY29uc3QgbGVuID0gYXJyLmxlbmd0aFxyXG4gICAgY29uc3QgZW5kID0gbGVuIC0gMVxyXG4gICAgZm9yKGxldCBpID0gMCA7IGkgPCBlbmQgOyBpKyspe1xyXG4gICAgICAgIGxldCBtaW5JbmRleCA9IG1pbihhcnIsIGksIGVuZClcclxuICAgICAgICBzd2FwKGFyciwgaSwgbWluSW5kZXgpXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuZnVuY3Rpb24gbWluKGFyciwgc3RhcnQsIGVuZCl7XHJcbiAgICBsZXQgaW5kZXggPSBzdGFydFxyXG5cclxuICAgIGZvcihsZXQgaSA9IGVuZCArIDEgOyBpID4gc3RhcnQgOyBpLS0pe1xyXG4gICAgICAgIGlmKGFycltpXSA8IGFycltpbmRleF0pe1xyXG4gICAgICAgICAgICBpbmRleCA9IGlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGluZGV4XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN3YXAoYXJyLCBpLCBqKXtcclxuICAgIGNvbnN0IHRlbXAgPSBhcnJbaV1cclxuICAgIGFycltpXSA9IGFycltqXVxyXG4gICAgYXJyW2pdID0gdGVtcCBcclxufVxyXG5cclxuLy8gcmVxdWlyZSgnLi9nZXRBdmdFeGVjdXRUaW1lJykoc2VsZWN0aW9uU29ydCwgMTAsIDMsIHRydWUpXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHNlbGVjdGlvblNvcnRcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zZWxlY3Rpb25Tb3J0LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

eval("const selectionSort = __webpack_require__(0)\r\n\r\nonmessage = ({data}) =>{\r\n    selectionSort(data)\r\n    postMessage(true)\r\n\r\n    close()\r\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zZWxlY3Rpb25Tb3J0Lndvcmtlci5qcz8wNTVjIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNlbGVjdGlvblNvcnQgPSByZXF1aXJlKCcuL3NlbGVjdGlvblNvcnQnKVxyXG5cclxub25tZXNzYWdlID0gKHtkYXRhfSkgPT57XHJcbiAgICBzZWxlY3Rpb25Tb3J0KGRhdGEpXHJcbiAgICBwb3N0TWVzc2FnZSh0cnVlKVxyXG5cclxuICAgIGNsb3NlKClcclxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NlbGVjdGlvblNvcnQud29ya2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);