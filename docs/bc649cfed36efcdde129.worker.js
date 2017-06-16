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

eval("\r\nfunction quickSort(arr){\r\n    _quickSort(arr, 0, arr.length - 1)\r\n}\r\nfunction _quickSort(arr, left, right){\r\n    if(left >= right){\r\n        return\r\n    }\r\n\r\n    // let pivot = getPivot(arr, left, right)\r\n    let pivot = left\r\n    let pivotData = arr[pivot]\r\n\r\n    let i = left + 1\r\n    let j = right\r\n\r\n    while(i !== j){\r\n        if(arr[i] <= pivotData){\r\n            i++\r\n            continue\r\n        }\r\n\r\n        if(arr[j] >= pivotData){\r\n            j--\r\n            continue\r\n        }\r\n\r\n        swap(arr, i, j)\r\n    }\r\n\r\n    if(pivotData < arr[i]){\r\n        swap(arr, pivot, i - 1)\r\n    }else{\r\n        swap(arr, pivot, i)\r\n    }\r\n    \r\n\r\n    _quickSort(arr, left, i - 1)\r\n    _quickSort(arr, i + 1, right)\r\n}\r\n\r\nfunction swap(arr, i, j){\r\n    const temp = arr[i]\r\n    arr[i] = arr[j]\r\n    arr[j] = temp \r\n}\r\n\r\nfunction getPivot(arr, left, right){\r\n    return left\r\n}\r\n\r\nmodule.exports = quickSort//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9xdWlja1NvcnQuanM/MzAzZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZnVuY3Rpb24gcXVpY2tTb3J0KGFycil7XHJcbiAgICBfcXVpY2tTb3J0KGFyciwgMCwgYXJyLmxlbmd0aCAtIDEpXHJcbn1cclxuZnVuY3Rpb24gX3F1aWNrU29ydChhcnIsIGxlZnQsIHJpZ2h0KXtcclxuICAgIGlmKGxlZnQgPj0gcmlnaHQpe1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIC8vIGxldCBwaXZvdCA9IGdldFBpdm90KGFyciwgbGVmdCwgcmlnaHQpXHJcbiAgICBsZXQgcGl2b3QgPSBsZWZ0XHJcbiAgICBsZXQgcGl2b3REYXRhID0gYXJyW3Bpdm90XVxyXG5cclxuICAgIGxldCBpID0gbGVmdCArIDFcclxuICAgIGxldCBqID0gcmlnaHRcclxuXHJcbiAgICB3aGlsZShpICE9PSBqKXtcclxuICAgICAgICBpZihhcnJbaV0gPD0gcGl2b3REYXRhKXtcclxuICAgICAgICAgICAgaSsrXHJcbiAgICAgICAgICAgIGNvbnRpbnVlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihhcnJbal0gPj0gcGl2b3REYXRhKXtcclxuICAgICAgICAgICAgai0tXHJcbiAgICAgICAgICAgIGNvbnRpbnVlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzd2FwKGFyciwgaSwgailcclxuICAgIH1cclxuXHJcbiAgICBpZihwaXZvdERhdGEgPCBhcnJbaV0pe1xyXG4gICAgICAgIHN3YXAoYXJyLCBwaXZvdCwgaSAtIDEpXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBzd2FwKGFyciwgcGl2b3QsIGkpXHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICBfcXVpY2tTb3J0KGFyciwgbGVmdCwgaSAtIDEpXHJcbiAgICBfcXVpY2tTb3J0KGFyciwgaSArIDEsIHJpZ2h0KVxyXG59XHJcblxyXG5mdW5jdGlvbiBzd2FwKGFyciwgaSwgail7XHJcbiAgICBjb25zdCB0ZW1wID0gYXJyW2ldXHJcbiAgICBhcnJbaV0gPSBhcnJbal1cclxuICAgIGFycltqXSA9IHRlbXAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFBpdm90KGFyciwgbGVmdCwgcmlnaHQpe1xyXG4gICAgcmV0dXJuIGxlZnRcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBxdWlja1NvcnRcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9xdWlja1NvcnQuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

eval("const quickSort = __webpack_require__(0)\r\n\r\nonmessage = ({data}) =>{\r\n    quickSort(data)\r\n    postMessage(true)\r\n\r\n    close()\r\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9xdWlja1NvcnQud29ya2VyLmpzPzRiZTgiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcXVpY2tTb3J0ID0gcmVxdWlyZSgnLi9xdWlja1NvcnQnKVxyXG5cclxub25tZXNzYWdlID0gKHtkYXRhfSkgPT57XHJcbiAgICBxdWlja1NvcnQoZGF0YSlcclxuICAgIHBvc3RNZXNzYWdlKHRydWUpXHJcblxyXG4gICAgY2xvc2UoKVxyXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcXVpY2tTb3J0Lndvcmtlci5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })
/******/ ]);