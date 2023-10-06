"use strict";
const ab = {
    name: "test",
    salary: 30,
    committees: [3, "H&S", "Philanthropy"]
};
console.log(ab.name);
//ab.committees[0]= "Test"; //Error outs
//ab.committees.push("","",""); //will pass 
ab.committees[0] = 3;
const someFunction = function (aParameter) {
    if (typeof aParameter == 'number') {
        aParameter = aParameter * aParameter;
    }
    console.log(aParameter);
};
someFunction("test");
someFunction(2.0);
