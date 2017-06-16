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

eval("function insertSort(arr){\r\n    for(var i = 1 ; i < arr.length ; i++){\r\n        var val = arr[i]\r\n        var j = i - 1\r\n        while(j >= 0 && arr[j] > val){\r\n            arr[j + 1] = arr[j]\r\n            j--\r\n        }\r\n        arr[j + 1] = val\r\n    }\r\n}\r\n\r\n//require('./getAvgExecutTime')(insertSort, 10, 3, true)\r\n\r\nmodule.exports = insertSort//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbnNlcnRTb3J0LmpzPzIxMzYiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gaW5zZXJ0U29ydChhcnIpe1xyXG4gICAgZm9yKHZhciBpID0gMSA7IGkgPCBhcnIubGVuZ3RoIDsgaSsrKXtcclxuICAgICAgICB2YXIgdmFsID0gYXJyW2ldXHJcbiAgICAgICAgdmFyIGogPSBpIC0gMVxyXG4gICAgICAgIHdoaWxlKGogPj0gMCAmJiBhcnJbal0gPiB2YWwpe1xyXG4gICAgICAgICAgICBhcnJbaiArIDFdID0gYXJyW2pdXHJcbiAgICAgICAgICAgIGotLVxyXG4gICAgICAgIH1cclxuICAgICAgICBhcnJbaiArIDFdID0gdmFsXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vcmVxdWlyZSgnLi9nZXRBdmdFeGVjdXRUaW1lJykoaW5zZXJ0U29ydCwgMTAsIDMsIHRydWUpXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFNvcnRcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbnNlcnRTb3J0LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

eval("const insertSort = __webpack_require__(0)\r\n\r\nonmessage = ({data}) =>{\r\n    insertSort(data)\r\n    postMessage(true)\r\n\r\n    close()\r\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbnNlcnRTb3J0Lndvcmtlci5qcz80NGZlIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGluc2VydFNvcnQgPSByZXF1aXJlKCcuL2luc2VydFNvcnQnKVxyXG5cclxub25tZXNzYWdlID0gKHtkYXRhfSkgPT57XHJcbiAgICBpbnNlcnRTb3J0KGRhdGEpXHJcbiAgICBwb3N0TWVzc2FnZSh0cnVlKVxyXG5cclxuICAgIGNsb3NlKClcclxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luc2VydFNvcnQud29ya2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);