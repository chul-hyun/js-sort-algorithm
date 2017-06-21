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

eval("function insertSort(target) {\r\n    for (let i = 1 ; i < target.length ; i++) {\r\n        const toIns = target[i]\r\n        let pos = i - 1\r\n        while (pos >= 0 && target[pos] > toIns) {\r\n            target[pos + 1] = target[pos]\r\n            pos--\r\n        }\r\n        target[pos + 1] = toIns\r\n    }\r\n}\r\n\r\nmodule.exports = insertSort\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbnNlcnRTb3J0LmpzPzIxMzYiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gaW5zZXJ0U29ydCh0YXJnZXQpIHtcclxuICAgIGZvciAobGV0IGkgPSAxIDsgaSA8IHRhcmdldC5sZW5ndGggOyBpKyspIHtcclxuICAgICAgICBjb25zdCB0b0lucyA9IHRhcmdldFtpXVxyXG4gICAgICAgIGxldCBwb3MgPSBpIC0gMVxyXG4gICAgICAgIHdoaWxlIChwb3MgPj0gMCAmJiB0YXJnZXRbcG9zXSA+IHRvSW5zKSB7XHJcbiAgICAgICAgICAgIHRhcmdldFtwb3MgKyAxXSA9IHRhcmdldFtwb3NdXHJcbiAgICAgICAgICAgIHBvcy0tXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRhcmdldFtwb3MgKyAxXSA9IHRvSW5zXHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U29ydFxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbnNlcnRTb3J0LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

eval("const insertSort = __webpack_require__(0)\r\n\r\nonmessage = ({ data }) => {\r\n    insertSort(data)\r\n    postMessage(true)\r\n\r\n    close()\r\n}\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbnNlcnRTb3J0Lndvcmtlci5qcz80NGZlIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGluc2VydFNvcnQgPSByZXF1aXJlKCcuL2luc2VydFNvcnQnKVxyXG5cclxub25tZXNzYWdlID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgICBpbnNlcnRTb3J0KGRhdGEpXHJcbiAgICBwb3N0TWVzc2FnZSh0cnVlKVxyXG5cclxuICAgIGNsb3NlKClcclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbnNlcnRTb3J0Lndvcmtlci5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);