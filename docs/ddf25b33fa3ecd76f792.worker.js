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

eval("function quickSort(target) {\r\n    quickSortNested(target, 0, target.length - 1)\r\n}\r\nfunction quickSortNested(target, left, right) {\r\n    if (left >= right) {\r\n        return\r\n    }\r\n\r\n    const pivot = left\r\n    const pivotData = target[pivot]\r\n\r\n    let i = left + 1\r\n    let j = right\r\n\r\n    while (i !== j) {\r\n        if (target[i] <= pivotData) {\r\n            i++\r\n        } else if (target[j] >= pivotData) {\r\n            j--\r\n        } else {\r\n            swap(target, i, j)\r\n        }\r\n    }\r\n\r\n    if (pivotData < target[i]) {\r\n        swap(target, pivot, i - 1)\r\n    } else {\r\n        swap(target, pivot, i)\r\n    }\r\n\r\n\r\n    quickSortNested(target, left, i - 1)\r\n    quickSortNested(target, i + 1, right)\r\n}\r\n\r\nfunction swap(arr, i, j) {\r\n    const temp = arr[i]\r\n    arr[i] = arr[j]\r\n    arr[j] = temp\r\n}\r\n\r\nmodule.exports = quickSort\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9xdWlja1NvcnQuanM/MzAzZSJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBxdWlja1NvcnQodGFyZ2V0KSB7XHJcbiAgICBxdWlja1NvcnROZXN0ZWQodGFyZ2V0LCAwLCB0YXJnZXQubGVuZ3RoIC0gMSlcclxufVxyXG5mdW5jdGlvbiBxdWlja1NvcnROZXN0ZWQodGFyZ2V0LCBsZWZ0LCByaWdodCkge1xyXG4gICAgaWYgKGxlZnQgPj0gcmlnaHQpIHtcclxuICAgICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwaXZvdCA9IGxlZnRcclxuICAgIGNvbnN0IHBpdm90RGF0YSA9IHRhcmdldFtwaXZvdF1cclxuXHJcbiAgICBsZXQgaSA9IGxlZnQgKyAxXHJcbiAgICBsZXQgaiA9IHJpZ2h0XHJcblxyXG4gICAgd2hpbGUgKGkgIT09IGopIHtcclxuICAgICAgICBpZiAodGFyZ2V0W2ldIDw9IHBpdm90RGF0YSkge1xyXG4gICAgICAgICAgICBpKytcclxuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldFtqXSA+PSBwaXZvdERhdGEpIHtcclxuICAgICAgICAgICAgai0tXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3dhcCh0YXJnZXQsIGksIGopXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChwaXZvdERhdGEgPCB0YXJnZXRbaV0pIHtcclxuICAgICAgICBzd2FwKHRhcmdldCwgcGl2b3QsIGkgLSAxKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBzd2FwKHRhcmdldCwgcGl2b3QsIGkpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHF1aWNrU29ydE5lc3RlZCh0YXJnZXQsIGxlZnQsIGkgLSAxKVxyXG4gICAgcXVpY2tTb3J0TmVzdGVkKHRhcmdldCwgaSArIDEsIHJpZ2h0KVxyXG59XHJcblxyXG5mdW5jdGlvbiBzd2FwKGFyciwgaSwgaikge1xyXG4gICAgY29uc3QgdGVtcCA9IGFycltpXVxyXG4gICAgYXJyW2ldID0gYXJyW2pdXHJcbiAgICBhcnJbal0gPSB0ZW1wXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcXVpY2tTb3J0XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3F1aWNrU29ydC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

eval("const quickSort = __webpack_require__(0)\r\n\r\nonmessage = ({ data }) => {\r\n    quickSort(data)\r\n    postMessage(true)\r\n\r\n    close()\r\n}\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9xdWlja1NvcnQud29ya2VyLmpzPzRiZTgiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcXVpY2tTb3J0ID0gcmVxdWlyZSgnLi9xdWlja1NvcnQnKVxyXG5cclxub25tZXNzYWdlID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgICBxdWlja1NvcnQoZGF0YSlcclxuICAgIHBvc3RNZXNzYWdlKHRydWUpXHJcblxyXG4gICAgY2xvc2UoKVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3F1aWNrU29ydC53b3JrZXIuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);