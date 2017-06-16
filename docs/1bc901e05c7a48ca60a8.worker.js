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

function mergeSort(arr){
    divide(arr, 0, arr.length - 1)
}

function divide(arr, leftStart, rightEnd){
    if(leftStart < rightEnd){
        let leftEnd = Math.floor((leftStart + rightEnd)/2)
        let rightStart = leftEnd + 1

        divide(arr, leftStart, leftEnd)
        divide(arr, rightStart, rightEnd)
        _mergeSort(arr, leftStart, leftEnd, rightStart, rightEnd)
    }
}

function _mergeSort(arr, leftStart, leftEnd, rightStart, rightEnd){
    let leftIndex = leftStart
    let rightIndex = rightStart

    let NumOfItemsToSort = rightEnd - leftStart + 1
    let result = []

    for(let i = 0 ; i < NumOfItemsToSort ; i++){
        if(arr[leftIndex] < arr[rightIndex]){
            result.push(arr[leftIndex])
            leftIndex++
        }else{
            result.push(arr[rightIndex])
            rightIndex++
        }

        if(leftIndex > leftEnd){
            if(rightIndex <= rightEnd){
                Array.prototype.push.apply(result, arr.slice(rightIndex, rightEnd + 1))
            }
            break;
        }else if(rightIndex > rightEnd){
            if(leftIndex <= leftEnd){
                Array.prototype.push.apply(result, arr.slice(leftIndex, leftEnd + 1))
            }
            break;
        }
    }
    
    result.forEach((val, i) => {
        arr[leftStart + i] = val
    })
    
    //replace(arr, leftStart + 1, result)
}

function replace(target, start, newItems){
    let args = []
    args.push(start)
    args.push(newItems.length + 1)
    Array.prototype.push.apply(args, newItems)
    Array.prototype.splice.apply(target, args)
}


module.exports = mergeSort

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const mergeSort = __webpack_require__(0)

onmessage = ({data}) =>{
    mergeSort(data)
    postMessage(true)

    close()
}

/***/ })
/******/ ]);