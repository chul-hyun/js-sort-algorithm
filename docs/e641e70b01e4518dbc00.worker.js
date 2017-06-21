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

eval("function mergeSort(target) {\r\n    divide(target, 0, target.length - 1)\r\n}\r\n\r\nfunction divide(target, leftStart, rightEnd) {\r\n    if (leftStart < rightEnd) {\r\n        const leftEnd = Math.floor((leftStart + rightEnd) / 2)\r\n        const rightStart = leftEnd + 1\r\n\r\n        divide(target, leftStart, leftEnd)\r\n        divide(target, rightStart, rightEnd)\r\n        mergeSortedArray(target, leftStart, leftEnd, rightStart, rightEnd)\r\n    }\r\n}\r\n\r\nfunction mergeSortedArray(target, leftStart, leftEnd, rightStart, rightEnd) {\r\n    let leftIndex = leftStart\r\n    let rightIndex = rightStart\r\n\r\n    const resultLength = rightEnd - leftStart + 1\r\n    const result = []\r\n\r\n    for (let i = 0 ; i < resultLength ; i++) {\r\n        if (target[leftIndex] < target[rightIndex]) {\r\n            result.push(target[leftIndex])\r\n            leftIndex++\r\n        } else {\r\n            result.push(target[rightIndex])\r\n            rightIndex++\r\n        }\r\n\r\n        if (leftIndex > leftEnd) {\r\n            if (rightIndex <= rightEnd) {\r\n                Array.prototype.push.apply(result, target.slice(rightIndex, rightEnd + 1))\r\n            }\r\n            break;\r\n        } else if (rightIndex > rightEnd) {\r\n            if (leftIndex <= leftEnd) {\r\n                Array.prototype.push.apply(result, target.slice(leftIndex, leftEnd + 1))\r\n            }\r\n            break;\r\n        }\r\n    }\r\n\r\n    result.forEach((val, i) => {\r\n        target[leftStart + i] = val\r\n    })\r\n}\r\n\r\nmodule.exports = mergeSort\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tZXJnZVNvcnQuanM/OGJiMyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBtZXJnZVNvcnQodGFyZ2V0KSB7XHJcbiAgICBkaXZpZGUodGFyZ2V0LCAwLCB0YXJnZXQubGVuZ3RoIC0gMSlcclxufVxyXG5cclxuZnVuY3Rpb24gZGl2aWRlKHRhcmdldCwgbGVmdFN0YXJ0LCByaWdodEVuZCkge1xyXG4gICAgaWYgKGxlZnRTdGFydCA8IHJpZ2h0RW5kKSB7XHJcbiAgICAgICAgY29uc3QgbGVmdEVuZCA9IE1hdGguZmxvb3IoKGxlZnRTdGFydCArIHJpZ2h0RW5kKSAvIDIpXHJcbiAgICAgICAgY29uc3QgcmlnaHRTdGFydCA9IGxlZnRFbmQgKyAxXHJcblxyXG4gICAgICAgIGRpdmlkZSh0YXJnZXQsIGxlZnRTdGFydCwgbGVmdEVuZClcclxuICAgICAgICBkaXZpZGUodGFyZ2V0LCByaWdodFN0YXJ0LCByaWdodEVuZClcclxuICAgICAgICBtZXJnZVNvcnRlZEFycmF5KHRhcmdldCwgbGVmdFN0YXJ0LCBsZWZ0RW5kLCByaWdodFN0YXJ0LCByaWdodEVuZClcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbWVyZ2VTb3J0ZWRBcnJheSh0YXJnZXQsIGxlZnRTdGFydCwgbGVmdEVuZCwgcmlnaHRTdGFydCwgcmlnaHRFbmQpIHtcclxuICAgIGxldCBsZWZ0SW5kZXggPSBsZWZ0U3RhcnRcclxuICAgIGxldCByaWdodEluZGV4ID0gcmlnaHRTdGFydFxyXG5cclxuICAgIGNvbnN0IHJlc3VsdExlbmd0aCA9IHJpZ2h0RW5kIC0gbGVmdFN0YXJ0ICsgMVxyXG4gICAgY29uc3QgcmVzdWx0ID0gW11cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMCA7IGkgPCByZXN1bHRMZW5ndGggOyBpKyspIHtcclxuICAgICAgICBpZiAodGFyZ2V0W2xlZnRJbmRleF0gPCB0YXJnZXRbcmlnaHRJbmRleF0pIHtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2godGFyZ2V0W2xlZnRJbmRleF0pXHJcbiAgICAgICAgICAgIGxlZnRJbmRleCsrXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2godGFyZ2V0W3JpZ2h0SW5kZXhdKVxyXG4gICAgICAgICAgICByaWdodEluZGV4KytcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChsZWZ0SW5kZXggPiBsZWZ0RW5kKSB7XHJcbiAgICAgICAgICAgIGlmIChyaWdodEluZGV4IDw9IHJpZ2h0RW5kKSB7XHJcbiAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShyZXN1bHQsIHRhcmdldC5zbGljZShyaWdodEluZGV4LCByaWdodEVuZCArIDEpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmlnaHRJbmRleCA+IHJpZ2h0RW5kKSB7XHJcbiAgICAgICAgICAgIGlmIChsZWZ0SW5kZXggPD0gbGVmdEVuZCkge1xyXG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkocmVzdWx0LCB0YXJnZXQuc2xpY2UobGVmdEluZGV4LCBsZWZ0RW5kICsgMSkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlc3VsdC5mb3JFYWNoKCh2YWwsIGkpID0+IHtcclxuICAgICAgICB0YXJnZXRbbGVmdFN0YXJ0ICsgaV0gPSB2YWxcclxuICAgIH0pXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbWVyZ2VTb3J0XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21lcmdlU29ydC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

eval("const mergeSort = __webpack_require__(0)\r\n\r\nonmessage = ({ data }) => {\r\n    mergeSort(data)\r\n    postMessage(true)\r\n\r\n    close()\r\n}\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tZXJnZVNvcnQud29ya2VyLmpzPzc1MmQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbWVyZ2VTb3J0ID0gcmVxdWlyZSgnLi9tZXJnZVNvcnQnKVxyXG5cclxub25tZXNzYWdlID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgICBtZXJnZVNvcnQoZGF0YSlcclxuICAgIHBvc3RNZXNzYWdlKHRydWUpXHJcblxyXG4gICAgY2xvc2UoKVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21lcmdlU29ydC53b3JrZXIuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);