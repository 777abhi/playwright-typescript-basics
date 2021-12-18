"use strict";
var userInput;
var userName;
userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var result = generateError("An Error occurred!", 500);
console.log(result);
//# sourceMappingURL=unknown.js.map