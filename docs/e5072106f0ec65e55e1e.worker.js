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

eval("function mergeSort(arr){\r\n    divide(arr, 0, arr.length - 1)\r\n}\r\n\r\nfunction divide(arr, leftStart, rightEnd){\r\n    if(leftStart < rightEnd){\r\n        let leftEnd = Math.floor((leftStart + rightEnd)/2)\r\n        let rightStart = leftEnd + 1\r\n\r\n        divide(arr, leftStart, leftEnd)\r\n        divide(arr, rightStart, rightEnd)\r\n        _mergeSort(arr, leftStart, leftEnd, rightStart, rightEnd)\r\n    }\r\n}\r\n\r\nfunction _mergeSort(arr, leftStart, leftEnd, rightStart, rightEnd){\r\n    let leftIndex = leftStart\r\n    let rightIndex = rightStart\r\n\r\n    let NumOfItemsToSort = rightEnd - leftStart + 1\r\n    let result = []\r\n\r\n    for(let i = 0 ; i < NumOfItemsToSort ; i++){\r\n        if(arr[leftIndex] < arr[rightIndex]){\r\n            result.push(arr[leftIndex])\r\n            leftIndex++\r\n        }else{\r\n            result.push(arr[rightIndex])\r\n            rightIndex++\r\n        }\r\n\r\n        if(leftIndex > leftEnd){\r\n            if(rightIndex <= rightEnd){\r\n                Array.prototype.push.apply(result, arr.slice(rightIndex, rightEnd + 1))\r\n            }\r\n            break;\r\n        }else if(rightIndex > rightEnd){\r\n            if(leftIndex <= leftEnd){\r\n                Array.prototype.push.apply(result, arr.slice(leftIndex, leftEnd + 1))\r\n            }\r\n            break;\r\n        }\r\n    }\r\n    \r\n    result.forEach((val, i) => {\r\n        arr[leftStart + i] = val\r\n    })\r\n    \r\n    //replace(arr, leftStart + 1, result)\r\n}\r\n\r\nfunction replace(target, start, newItems){\r\n    let args = []\r\n    args.push(start)\r\n    args.push(newItems.length + 1)\r\n    Array.prototype.push.apply(args, newItems)\r\n    Array.prototype.splice.apply(target, args)\r\n}\r\n\r\n\r\nmodule.exports = mergeSort//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tZXJnZVNvcnQuanM/OGJiMyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBtZXJnZVNvcnQoYXJyKXtcclxuICAgIGRpdmlkZShhcnIsIDAsIGFyci5sZW5ndGggLSAxKVxyXG59XHJcblxyXG5mdW5jdGlvbiBkaXZpZGUoYXJyLCBsZWZ0U3RhcnQsIHJpZ2h0RW5kKXtcclxuICAgIGlmKGxlZnRTdGFydCA8IHJpZ2h0RW5kKXtcclxuICAgICAgICBsZXQgbGVmdEVuZCA9IE1hdGguZmxvb3IoKGxlZnRTdGFydCArIHJpZ2h0RW5kKS8yKVxyXG4gICAgICAgIGxldCByaWdodFN0YXJ0ID0gbGVmdEVuZCArIDFcclxuXHJcbiAgICAgICAgZGl2aWRlKGFyciwgbGVmdFN0YXJ0LCBsZWZ0RW5kKVxyXG4gICAgICAgIGRpdmlkZShhcnIsIHJpZ2h0U3RhcnQsIHJpZ2h0RW5kKVxyXG4gICAgICAgIF9tZXJnZVNvcnQoYXJyLCBsZWZ0U3RhcnQsIGxlZnRFbmQsIHJpZ2h0U3RhcnQsIHJpZ2h0RW5kKVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBfbWVyZ2VTb3J0KGFyciwgbGVmdFN0YXJ0LCBsZWZ0RW5kLCByaWdodFN0YXJ0LCByaWdodEVuZCl7XHJcbiAgICBsZXQgbGVmdEluZGV4ID0gbGVmdFN0YXJ0XHJcbiAgICBsZXQgcmlnaHRJbmRleCA9IHJpZ2h0U3RhcnRcclxuXHJcbiAgICBsZXQgTnVtT2ZJdGVtc1RvU29ydCA9IHJpZ2h0RW5kIC0gbGVmdFN0YXJ0ICsgMVxyXG4gICAgbGV0IHJlc3VsdCA9IFtdXHJcblxyXG4gICAgZm9yKGxldCBpID0gMCA7IGkgPCBOdW1PZkl0ZW1zVG9Tb3J0IDsgaSsrKXtcclxuICAgICAgICBpZihhcnJbbGVmdEluZGV4XSA8IGFycltyaWdodEluZGV4XSl7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGFycltsZWZ0SW5kZXhdKVxyXG4gICAgICAgICAgICBsZWZ0SW5kZXgrK1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChhcnJbcmlnaHRJbmRleF0pXHJcbiAgICAgICAgICAgIHJpZ2h0SW5kZXgrK1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYobGVmdEluZGV4ID4gbGVmdEVuZCl7XHJcbiAgICAgICAgICAgIGlmKHJpZ2h0SW5kZXggPD0gcmlnaHRFbmQpe1xyXG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkocmVzdWx0LCBhcnIuc2xpY2UocmlnaHRJbmRleCwgcmlnaHRFbmQgKyAxKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9ZWxzZSBpZihyaWdodEluZGV4ID4gcmlnaHRFbmQpe1xyXG4gICAgICAgICAgICBpZihsZWZ0SW5kZXggPD0gbGVmdEVuZCl7XHJcbiAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShyZXN1bHQsIGFyci5zbGljZShsZWZ0SW5kZXgsIGxlZnRFbmQgKyAxKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlc3VsdC5mb3JFYWNoKCh2YWwsIGkpID0+IHtcclxuICAgICAgICBhcnJbbGVmdFN0YXJ0ICsgaV0gPSB2YWxcclxuICAgIH0pXHJcbiAgICBcclxuICAgIC8vcmVwbGFjZShhcnIsIGxlZnRTdGFydCArIDEsIHJlc3VsdClcclxufVxyXG5cclxuZnVuY3Rpb24gcmVwbGFjZSh0YXJnZXQsIHN0YXJ0LCBuZXdJdGVtcyl7XHJcbiAgICBsZXQgYXJncyA9IFtdXHJcbiAgICBhcmdzLnB1c2goc3RhcnQpXHJcbiAgICBhcmdzLnB1c2gobmV3SXRlbXMubGVuZ3RoICsgMSlcclxuICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGFyZ3MsIG5ld0l0ZW1zKVxyXG4gICAgQXJyYXkucHJvdG90eXBlLnNwbGljZS5hcHBseSh0YXJnZXQsIGFyZ3MpXHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG1lcmdlU29ydFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21lcmdlU29ydC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

eval("const mergeSort = __webpack_require__(0)\r\n\r\nonmessage = ({data}) =>{\r\n    mergeSort(data)\r\n    postMessage(true)\r\n\r\n    close()\r\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tZXJnZVNvcnQud29ya2VyLmpzPzc1MmQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbWVyZ2VTb3J0ID0gcmVxdWlyZSgnLi9tZXJnZVNvcnQnKVxyXG5cclxub25tZXNzYWdlID0gKHtkYXRhfSkgPT57XHJcbiAgICBtZXJnZVNvcnQoZGF0YSlcclxuICAgIHBvc3RNZXNzYWdlKHRydWUpXHJcblxyXG4gICAgY2xvc2UoKVxyXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWVyZ2VTb3J0Lndvcmtlci5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })
/******/ ]);