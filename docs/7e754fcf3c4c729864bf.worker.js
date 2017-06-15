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

eval("const view = __webpack_require__(4)\r\nconst utill = __webpack_require__(3)\r\n\r\nfunction getAvgExecutTime(sortAlgorithm, len, num = 1, check = false){\r\n    let avgExecutTime = view.calulateExecTimeMulti(sortAlgorithm, (callback)=>{\r\n        let randoms = utill.getRandomNumbers(len, 0, 100000)\r\n        \r\n        if(check){\r\n            var sorted = utill.copyArray(randoms)\r\n            sorted.sort((a, b) => a - b)\r\n        }\r\n        \r\n        callback(randoms)\r\n        \r\n        if(check && !utill.arrayEaual(randoms, sorted)){\r\n            console.log(randoms, sorted)\r\n            throw new Error('sorted fail')\r\n        }\r\n        \r\n    }, num)\r\n\r\n    return avgExecutTime\r\n}\r\n\r\nmodule.exports = getAvgExecutTime//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9nZXRBdmdFeGVjdXRUaW1lLmpzP2EyOTEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdmlldyA9IHJlcXVpcmUoJy4vdmlldycpXHJcbmNvbnN0IHV0aWxsID0gcmVxdWlyZSgnLi91dGlsbCcpXHJcblxyXG5mdW5jdGlvbiBnZXRBdmdFeGVjdXRUaW1lKHNvcnRBbGdvcml0aG0sIGxlbiwgbnVtID0gMSwgY2hlY2sgPSBmYWxzZSl7XHJcbiAgICBsZXQgYXZnRXhlY3V0VGltZSA9IHZpZXcuY2FsdWxhdGVFeGVjVGltZU11bHRpKHNvcnRBbGdvcml0aG0sIChjYWxsYmFjayk9PntcclxuICAgICAgICBsZXQgcmFuZG9tcyA9IHV0aWxsLmdldFJhbmRvbU51bWJlcnMobGVuLCAwLCAxMDAwMDApXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoY2hlY2spe1xyXG4gICAgICAgICAgICB2YXIgc29ydGVkID0gdXRpbGwuY29weUFycmF5KHJhbmRvbXMpXHJcbiAgICAgICAgICAgIHNvcnRlZC5zb3J0KChhLCBiKSA9PiBhIC0gYilcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2FsbGJhY2socmFuZG9tcylcclxuICAgICAgICBcclxuICAgICAgICBpZihjaGVjayAmJiAhdXRpbGwuYXJyYXlFYXVhbChyYW5kb21zLCBzb3J0ZWQpKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmFuZG9tcywgc29ydGVkKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3NvcnRlZCBmYWlsJylcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9LCBudW0pXHJcblxyXG4gICAgcmV0dXJuIGF2Z0V4ZWN1dFRpbWVcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnZXRBdmdFeGVjdXRUaW1lXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZ2V0QXZnRXhlY3V0VGltZS5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("function sort(arr){\r\n    arr.sort((a, b) => a - b)\r\n}\r\n\r\nmodule.exports = sort//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zb3J0LmpzP2QwMTciXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gc29ydChhcnIpe1xyXG4gICAgYXJyLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHNvcnRcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zb3J0LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

eval("const sort = __webpack_require__(1)\r\nconst getAvgExecutTime = __webpack_require__(0)\r\n\r\nonmessage = ({ data }) =>{\r\n    const { len, repeat } = data\r\n\r\n    postMessage({ executTime: getAvgExecutTime(sort, len, repeat) })\r\n\r\n    close()\r\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zb3J0Lndvcmtlci5qcz84OTZkIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNvcnQgPSByZXF1aXJlKCcuL3NvcnQnKVxyXG5jb25zdCBnZXRBdmdFeGVjdXRUaW1lID0gcmVxdWlyZSgnLi9nZXRBdmdFeGVjdXRUaW1lJylcclxuXHJcbm9ubWVzc2FnZSA9ICh7IGRhdGEgfSkgPT57XHJcbiAgICBjb25zdCB7IGxlbiwgcmVwZWF0IH0gPSBkYXRhXHJcblxyXG4gICAgcG9zdE1lc3NhZ2UoeyBleGVjdXRUaW1lOiBnZXRBdmdFeGVjdXRUaW1lKHNvcnQsIGxlbiwgcmVwZWF0KSB9KVxyXG5cclxuICAgIGNsb3NlKClcclxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NvcnQud29ya2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

eval("function getRandomNumber(min = 0, max = 20) {\r\n\treturn min + Math.floor(Math.random() * (max+1))\r\n}\r\n\r\nfunction getRandomNumberPromise(min = 0, max = 20) {\r\n    return new Promise((resolve) => {\r\n        resolve(getRandomNumber(min, max))\r\n    })\r\n}\r\n\r\nfunction getRandomNumbers(len = 20, min = 0, max = 20) {\r\n    let result = []\r\n    for(let i = 0 ; i < len ; i++){\r\n        result.push(getRandomNumber(min, max))\r\n    }\r\n    return result\r\n    //return Array(len).fill(0).map(() => getRandomNumber(min, max)) // 더 느림.\r\n}\r\n\r\nfunction arrayEaual(source, target){\r\n    return source.every((val, i) => val === target[i])\r\n}\r\n\r\nfunction copyArray(source){\r\n    return source.map((val) => val)\r\n}\r\n\r\nmodule.exports = {\r\n    getRandomNumber,\r\n    getRandomNumbers,\r\n    arrayEaual,\r\n    copyArray\r\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy91dGlsbC5qcz9lNmJiIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGdldFJhbmRvbU51bWJlcihtaW4gPSAwLCBtYXggPSAyMCkge1xyXG5cdHJldHVybiBtaW4gKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4KzEpKVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRSYW5kb21OdW1iZXJQcm9taXNlKG1pbiA9IDAsIG1heCA9IDIwKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICByZXNvbHZlKGdldFJhbmRvbU51bWJlcihtaW4sIG1heCkpXHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRSYW5kb21OdW1iZXJzKGxlbiA9IDIwLCBtaW4gPSAwLCBtYXggPSAyMCkge1xyXG4gICAgbGV0IHJlc3VsdCA9IFtdXHJcbiAgICBmb3IobGV0IGkgPSAwIDsgaSA8IGxlbiA7IGkrKyl7XHJcbiAgICAgICAgcmVzdWx0LnB1c2goZ2V0UmFuZG9tTnVtYmVyKG1pbiwgbWF4KSlcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHRcclxuICAgIC8vcmV0dXJuIEFycmF5KGxlbikuZmlsbCgwKS5tYXAoKCkgPT4gZ2V0UmFuZG9tTnVtYmVyKG1pbiwgbWF4KSkgLy8g642UIOuKkOumvC5cclxufVxyXG5cclxuZnVuY3Rpb24gYXJyYXlFYXVhbChzb3VyY2UsIHRhcmdldCl7XHJcbiAgICByZXR1cm4gc291cmNlLmV2ZXJ5KCh2YWwsIGkpID0+IHZhbCA9PT0gdGFyZ2V0W2ldKVxyXG59XHJcblxyXG5mdW5jdGlvbiBjb3B5QXJyYXkoc291cmNlKXtcclxuICAgIHJldHVybiBzb3VyY2UubWFwKCh2YWwpID0+IHZhbClcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBnZXRSYW5kb21OdW1iZXIsXHJcbiAgICBnZXRSYW5kb21OdW1iZXJzLFxyXG4gICAgYXJyYXlFYXVhbCxcclxuICAgIGNvcHlBcnJheVxyXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdXRpbGwuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

eval("function calulateExecTime(callback, ...args){\r\n    let startTime = +(new Date())\r\n    let result = callback.apply(undefined, args)\r\n    let endTime = +(new Date())\r\n    let execTime = endTime - startTime\r\n\r\n    return [result, execTime]\r\n}\r\n\r\nfunction printExecTime(callback, ...args){\r\n    let [result, execTime] = calulateExecTime(callback, ...args)\r\n    \r\n    console.log('걸린시간', `${execTime}ms`)\r\n    \r\n    return [result, execTime]\r\n}\r\n\r\nfunction printDetailExecTime(callback, ...args){\r\n    console.log('입력', args)\r\n    \r\n    let [result, execTime] = calulateExecTime(callback, ...args)\r\n    \r\n    console.log('출력', result)\r\n    console.log('걸린시간', `${execTime}ms`)\r\n    \r\n    return [result, execTime]\r\n}\r\n\r\nfunction calulateExecTimeMulti(callback, exewrapCallback, executNum){\r\n    let execTimes = []\r\n    for(let i = 0 ; i < executNum ; i++){\r\n        exewrapCallback((...args) => {\r\n            let [result, execTime] = calulateExecTime(callback, ...args)\r\n            execTimes.push(execTime)\r\n            return result;\r\n        })\r\n    }\r\n    let sum = execTimes.reduce((sum, execTime) => sum + execTime, 0)\r\n    return sum / executNum\r\n}\r\n\r\nmodule.exports = {\r\n    calulateExecTime,\r\n    printExecTime,\r\n    printDetailExecTime,\r\n    calulateExecTimeMulti\r\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy92aWV3LmpzPzMyMGEiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY2FsdWxhdGVFeGVjVGltZShjYWxsYmFjaywgLi4uYXJncyl7XHJcbiAgICBsZXQgc3RhcnRUaW1lID0gKyhuZXcgRGF0ZSgpKVxyXG4gICAgbGV0IHJlc3VsdCA9IGNhbGxiYWNrLmFwcGx5KHVuZGVmaW5lZCwgYXJncylcclxuICAgIGxldCBlbmRUaW1lID0gKyhuZXcgRGF0ZSgpKVxyXG4gICAgbGV0IGV4ZWNUaW1lID0gZW5kVGltZSAtIHN0YXJ0VGltZVxyXG5cclxuICAgIHJldHVybiBbcmVzdWx0LCBleGVjVGltZV1cclxufVxyXG5cclxuZnVuY3Rpb24gcHJpbnRFeGVjVGltZShjYWxsYmFjaywgLi4uYXJncyl7XHJcbiAgICBsZXQgW3Jlc3VsdCwgZXhlY1RpbWVdID0gY2FsdWxhdGVFeGVjVGltZShjYWxsYmFjaywgLi4uYXJncylcclxuICAgIFxyXG4gICAgY29uc29sZS5sb2coJ+qxuOumsOyLnOqwhCcsIGAke2V4ZWNUaW1lfW1zYClcclxuICAgIFxyXG4gICAgcmV0dXJuIFtyZXN1bHQsIGV4ZWNUaW1lXVxyXG59XHJcblxyXG5mdW5jdGlvbiBwcmludERldGFpbEV4ZWNUaW1lKGNhbGxiYWNrLCAuLi5hcmdzKXtcclxuICAgIGNvbnNvbGUubG9nKCfsnoXroKUnLCBhcmdzKVxyXG4gICAgXHJcbiAgICBsZXQgW3Jlc3VsdCwgZXhlY1RpbWVdID0gY2FsdWxhdGVFeGVjVGltZShjYWxsYmFjaywgLi4uYXJncylcclxuICAgIFxyXG4gICAgY29uc29sZS5sb2coJ+y2nOugpScsIHJlc3VsdClcclxuICAgIGNvbnNvbGUubG9nKCfqsbjrprDsi5zqsIQnLCBgJHtleGVjVGltZX1tc2ApXHJcbiAgICBcclxuICAgIHJldHVybiBbcmVzdWx0LCBleGVjVGltZV1cclxufVxyXG5cclxuZnVuY3Rpb24gY2FsdWxhdGVFeGVjVGltZU11bHRpKGNhbGxiYWNrLCBleGV3cmFwQ2FsbGJhY2ssIGV4ZWN1dE51bSl7XHJcbiAgICBsZXQgZXhlY1RpbWVzID0gW11cclxuICAgIGZvcihsZXQgaSA9IDAgOyBpIDwgZXhlY3V0TnVtIDsgaSsrKXtcclxuICAgICAgICBleGV3cmFwQ2FsbGJhY2soKC4uLmFyZ3MpID0+IHtcclxuICAgICAgICAgICAgbGV0IFtyZXN1bHQsIGV4ZWNUaW1lXSA9IGNhbHVsYXRlRXhlY1RpbWUoY2FsbGJhY2ssIC4uLmFyZ3MpXHJcbiAgICAgICAgICAgIGV4ZWNUaW1lcy5wdXNoKGV4ZWNUaW1lKVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBsZXQgc3VtID0gZXhlY1RpbWVzLnJlZHVjZSgoc3VtLCBleGVjVGltZSkgPT4gc3VtICsgZXhlY1RpbWUsIDApXHJcbiAgICByZXR1cm4gc3VtIC8gZXhlY3V0TnVtXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgY2FsdWxhdGVFeGVjVGltZSxcclxuICAgIHByaW50RXhlY1RpbWUsXHJcbiAgICBwcmludERldGFpbEV4ZWNUaW1lLFxyXG4gICAgY2FsdWxhdGVFeGVjVGltZU11bHRpXHJcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy92aWV3LmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);