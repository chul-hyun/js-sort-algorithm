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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const view = __webpack_require__(4)
const utill = __webpack_require__(3)

function getAvgExecutTime(sortAlgorithm, len, num = 1, check = false){
    let avgExecutTime = view.calulateExecTimeMulti(sortAlgorithm, (callback)=>{
        let randoms = utill.getRandomNumbers(len, 0, 100000)
        
        if(check){
            var sorted = utill.copyArray(randoms)
            sorted.sort((a, b) => a - b)
        }
        
        callback(randoms)
        
        if(check && !utill.arrayEaual(randoms, sorted)){
            console.log(randoms, sorted)
            throw new Error('sorted fail')
        }
        
    }, num)

    return avgExecutTime
}

module.exports = getAvgExecutTime

/***/ }),
/* 1 */
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
    //replace(arr, leftStart, result)
}

function replace(target, start, newItems){
    let args = []
    args.push(start)
    args.push(newItems.length)
    Array.prototype.push.apply(args, newItems)
    Array.prototype.splice.apply(target, args)
}


module.exports = mergeSort

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const mergeSort = __webpack_require__(1)
const getAvgExecutTime = __webpack_require__(0)

onmessage = ({ data }) =>{
    const { len, repeat } = data

    postMessage({ executTime: getAvgExecutTime(mergeSort, len, repeat) })

    close()
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function getRandomNumber(min = 0, max = 20) {
	return min + Math.floor(Math.random() * (max+1))
}

function getRandomNumberPromise(min = 0, max = 20) {
    return new Promise((resolve) => {
        resolve(getRandomNumber(min, max))
    })
}

function getRandomNumbers(len = 20, min = 0, max = 20) {
    let result = []
    for(let i = 0 ; i < len ; i++){
        result.push(getRandomNumber(min, max))
    }
    return result
    //return Array(len).fill(0).map(() => getRandomNumber(min, max)) // 더 느림.
}

function arrayEaual(source, target){
    return source.every((val, i) => val === target[i])
}

function copyArray(source){
    return source.map((val) => val)
}

module.exports = {
    getRandomNumber,
    getRandomNumbers,
    arrayEaual,
    copyArray
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

function calulateExecTime(callback, ...args){
    let startTime = +(new Date())
    let result = callback.apply(undefined, args)
    let endTime = +(new Date())
    let execTime = endTime - startTime

    return [result, execTime]
}

function printExecTime(callback, ...args){
    let [result, execTime] = calulateExecTime(callback, ...args)
    
    console.log('걸린시간', `${execTime}ms`)
    
    return [result, execTime]
}

function printDetailExecTime(callback, ...args){
    console.log('입력', args)
    
    let [result, execTime] = calulateExecTime(callback, ...args)
    
    console.log('출력', result)
    console.log('걸린시간', `${execTime}ms`)
    
    return [result, execTime]
}

function calulateExecTimeMulti(callback, exewrapCallback, executNum){
    let execTimes = []
    for(let i = 0 ; i < executNum ; i++){
        exewrapCallback((...args) => {
            let [result, execTime] = calulateExecTime(callback, ...args)
            execTimes.push(execTime)
            return result;
        })
    }
    let sum = execTimes.reduce((sum, execTime) => sum + execTime, 0)
    return sum / executNum
}

module.exports = {
    calulateExecTime,
    printExecTime,
    printDetailExecTime,
    calulateExecTimeMulti
}

/***/ })
/******/ ]);