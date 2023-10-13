"use strict";
var weekDay;
(function (weekDay) {
    weekDay[weekDay["MONDAY"] = 0] = "MONDAY";
    weekDay[weekDay["TUESDAY"] = 1] = "TUESDAY";
    weekDay[weekDay["WEDNESDAY"] = 2] = "WEDNESDAY";
})(weekDay || (weekDay = {}));
const employee = {
    empName: "AB",
    dependents: 2,
    committees: ["Philanthropy", true],
    payDay: weekDay.MONDAY
};
// employee.committees[1] = "Test234";
employee.committees[1] = false;
console.log(employee);
