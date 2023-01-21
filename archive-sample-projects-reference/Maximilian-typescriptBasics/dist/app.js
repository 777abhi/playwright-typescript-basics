"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var resultM = function addA(a, b) {
    return a + b;
};
console.log(resultM(1, 2));
var resultN = function (a, b) {
    if (b === void 0) { b = 10; }
    return a + b;
};
console.log(resultN(1, 2));
var printOutput = function (message) { return console.log(message); };
console.log(printOutput(resultN(8, 2)));
console.log(printOutput(resultN(8)));
var hobbies = ['Sports', 'Cooking', 'dancing'];
var activeHobbies = __spreadArray(['Hiking'], hobbies, true);
console.log(activeHobbies);
var hobby1 = hobbies[0], hobby2 = hobbies[1], remainingHobbies = hobbies.slice(2);
console.log(hobby1, hobby2, hobbies, remainingHobbies);
var person = {
    firstName: 'Max',
    age: 30
};
var fN = person.firstName, a = person.age;
console.log(fN, a);
var copiedPerson = __assign({}, person);
console.log(copiedPerson);
var addT = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (currentResult, currentValue) {
        return currentResult + currentValue;
    }, 0);
};
var addNums = addT(5, 5, 6, 7, 8, 9, 10);
console.log(addNums);
var addNumsK = addT(9, 10);
console.log(addNumsK);
//# sourceMappingURL=app.js.map