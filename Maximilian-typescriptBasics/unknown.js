"use strict";
// let userInput: unknown;
// let userName: string;
// userInput = 5;
// userInput = 'Max';
// userName = userInput;
// let userInput: any;
// let userName: string;
// userInput = 5;
// userInput = 'Max';
// userName = userInput;
var userInput;
var userName;
userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
    //   while (true){};
}
var result = generateError("An Error occurred!", 500);
console.log(result);
