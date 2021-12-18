

const resultM = function addA (a:number, b:number) {
    return a + b;
}

console.log(resultM(1,2));

const resultN = (a:number, b:number = 10) => a + b;

console.log(resultN(1,2));

const printOutput = (message:string | number) => console.log(message);

console.log(printOutput(resultN(8,2)));
console.log(printOutput(resultN(8)));


// const hobbies = ['Sports', 'Cooking'];
// const activeHobbies = ['Hiking'];

// activeHobbies.push(...hobbies);

// console.log(activeHobbies);

const hobbies = ['Sports', 'Cooking', 'dancing'];
const activeHobbies = ['Hiking', ...hobbies];

console.log(activeHobbies);


const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobby1, hobby2, hobbies, remainingHobbies);

const person = {
    firstName: 'Max',
    age: 30
};

const {firstName: fN, age: a} = person;
console.log(fN, a);

const copiedPerson = {...person};

console.log(copiedPerson);


const addT = (...numbers :number[]) => {
    return numbers.reduce((currentResult, currentValue) => {
        return currentResult + currentValue;
    }, 0);
}
const addNums = addT(5,5,6,7,8,9,10);
console.log(addNums);

const addNumsK = addT(9,10);
console.log(addNumsK);