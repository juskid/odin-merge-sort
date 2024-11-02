/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("function mergeSort (array) {\n    console.log('Array: '+ array);\n    let icount = 0;\n    let jcount = 0;\n    const newArray = new Array();\n\n    if (array.length <= 1){\n        console.log('Array Length: '+ array.length);\n        return array;\n    }\n    else {\n        const middleIndex = Math.ceil(array.length / 2);\n        console.log('Middle: ' + middleIndex);\n        const arrayLeft = mergeSort(array.splice(0, middleIndex));\n        console.log('After left array' + array);\n        console.log('iniate right');\n        const arrayRight = mergeSort(array);\n        console.log('Array Right: ' + arrayRight + 'Array Left' + arrayLeft);\n        console.log('done recursion');\n        while (icount < arrayLeft.length || jcount < arrayRight.length) {\n            if (icount >= arrayLeft.length) {\n                newArray.push(...arrayRight);\n                jcount = arrayRight.length;\n            }\n            else if (jcount >= arrayRight.length) {\n                newArray.push(...arrayLeft);\n                icount = arrayLeft.length;\n            }\n            else if (arrayLeft[icount] < arrayRight[jcount]) {\n                newArray.push(arrayLeft[icount]);\n                icount++;\n            }\n            else {\n                newArray.push(arrayRight[jcount]);\n                jcount++;\n            }\n        }\n        return newArray;\n    }\n};\n\nconsole.log(mergeSort(new Array(5, 4, 3, 2, 1)));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBtZXJnZVNvcnQgKGFycmF5KSB7XG4gICAgY29uc29sZS5sb2coJ0FycmF5OiAnKyBhcnJheSk7XG4gICAgbGV0IGljb3VudCA9IDA7XG4gICAgbGV0IGpjb3VudCA9IDA7XG4gICAgY29uc3QgbmV3QXJyYXkgPSBuZXcgQXJyYXkoKTtcblxuICAgIGlmIChhcnJheS5sZW5ndGggPD0gMSl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdBcnJheSBMZW5ndGg6ICcrIGFycmF5Lmxlbmd0aCk7XG4gICAgICAgIHJldHVybiBhcnJheTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IG1pZGRsZUluZGV4ID0gTWF0aC5jZWlsKGFycmF5Lmxlbmd0aCAvIDIpO1xuICAgICAgICBjb25zb2xlLmxvZygnTWlkZGxlOiAnICsgbWlkZGxlSW5kZXgpO1xuICAgICAgICBjb25zdCBhcnJheUxlZnQgPSBtZXJnZVNvcnQoYXJyYXkuc3BsaWNlKDAsIG1pZGRsZUluZGV4KSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdBZnRlciBsZWZ0IGFycmF5JyArIGFycmF5KTtcbiAgICAgICAgY29uc29sZS5sb2coJ2luaWF0ZSByaWdodCcpO1xuICAgICAgICBjb25zdCBhcnJheVJpZ2h0ID0gbWVyZ2VTb3J0KGFycmF5KTtcbiAgICAgICAgY29uc29sZS5sb2coJ0FycmF5IFJpZ2h0OiAnICsgYXJyYXlSaWdodCArICdBcnJheSBMZWZ0JyArIGFycmF5TGVmdCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkb25lIHJlY3Vyc2lvbicpO1xuICAgICAgICB3aGlsZSAoaWNvdW50IDwgYXJyYXlMZWZ0Lmxlbmd0aCB8fCBqY291bnQgPCBhcnJheVJpZ2h0Lmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGljb3VudCA+PSBhcnJheUxlZnQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgbmV3QXJyYXkucHVzaCguLi5hcnJheVJpZ2h0KTtcbiAgICAgICAgICAgICAgICBqY291bnQgPSBhcnJheVJpZ2h0Lmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGpjb3VudCA+PSBhcnJheVJpZ2h0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIG5ld0FycmF5LnB1c2goLi4uYXJyYXlMZWZ0KTtcbiAgICAgICAgICAgICAgICBpY291bnQgPSBhcnJheUxlZnQubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYXJyYXlMZWZ0W2ljb3VudF0gPCBhcnJheVJpZ2h0W2pjb3VudF0pIHtcbiAgICAgICAgICAgICAgICBuZXdBcnJheS5wdXNoKGFycmF5TGVmdFtpY291bnRdKTtcbiAgICAgICAgICAgICAgICBpY291bnQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG5ld0FycmF5LnB1c2goYXJyYXlSaWdodFtqY291bnRdKTtcbiAgICAgICAgICAgICAgICBqY291bnQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3QXJyYXk7XG4gICAgfVxufTtcblxuY29uc29sZS5sb2cobWVyZ2VTb3J0KG5ldyBBcnJheSg1LCA0LCAzLCAyLCAxKSkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;