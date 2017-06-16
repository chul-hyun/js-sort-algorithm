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

eval("function bubbleSort(arr){\r\n    for(let i = arr.length ; i >= 0 ; i--){\r\n        for(let j = 1 ; j < i ; j++){\r\n            if(arr[j - 1] > arr[j]){\r\n                swap(arr, j - 1, j)\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\nfunction swap(arr, i, j){\r\n    const temp = arr[i]\r\n    arr[i] = arr[j]\r\n    arr[j] = temp\r\n}\r\n\r\n// require('./getAvgExecutTime')(bubbleSort, 10, 3, true)\r\n\r\nmodule.exports = bubbleSort//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9idWJibGVTb3J0LmpzP2EyOTQiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gYnViYmxlU29ydChhcnIpe1xyXG4gICAgZm9yKGxldCBpID0gYXJyLmxlbmd0aCA7IGkgPj0gMCA7IGktLSl7XHJcbiAgICAgICAgZm9yKGxldCBqID0gMSA7IGogPCBpIDsgaisrKXtcclxuICAgICAgICAgICAgaWYoYXJyW2ogLSAxXSA+IGFycltqXSl7XHJcbiAgICAgICAgICAgICAgICBzd2FwKGFyciwgaiAtIDEsIGopXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN3YXAoYXJyLCBpLCBqKXtcclxuICAgIGNvbnN0IHRlbXAgPSBhcnJbaV1cclxuICAgIGFycltpXSA9IGFycltqXVxyXG4gICAgYXJyW2pdID0gdGVtcFxyXG59XHJcblxyXG4vLyByZXF1aXJlKCcuL2dldEF2Z0V4ZWN1dFRpbWUnKShidWJibGVTb3J0LCAxMCwgMywgdHJ1ZSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gYnViYmxlU29ydFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2J1YmJsZVNvcnQuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

eval("const bubbleSort = __webpack_require__(0)\r\n\r\nonmessage = ({data}) =>{\r\n    bubbleSort(data)\r\n    postMessage(true)\r\n\r\n    close()\r\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9idWJibGVTb3J0Lndvcmtlci5qcz83YzM4Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJ1YmJsZVNvcnQgPSByZXF1aXJlKCcuL2J1YmJsZVNvcnQnKVxyXG5cclxub25tZXNzYWdlID0gKHtkYXRhfSkgPT57XHJcbiAgICBidWJibGVTb3J0KGRhdGEpXHJcbiAgICBwb3N0TWVzc2FnZSh0cnVlKVxyXG5cclxuICAgIGNsb3NlKClcclxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2J1YmJsZVNvcnQud29ya2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);