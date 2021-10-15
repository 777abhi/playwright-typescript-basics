"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result: " + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResult(add(5, 12));
console.log(printResult(add(5, 12)));
// let combineValue: Function;
// combineValue = add;
// console.log(combineValue(8, 8));
var combineValue;
combineValue = add;
// combineValue = printResult;
console.log(combineValue(8, 8));
// let someValue: undefined;
addAndHandle(10, 20, function (result) {
    console.log(result);
});
