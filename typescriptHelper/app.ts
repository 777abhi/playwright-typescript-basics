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

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
//   while (true){};
}

const result = generateError("An Error occurred!", 500);
console.log(result);
