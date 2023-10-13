enum weekDay {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
}
const employee: {
  empName: string;
  dependents: number;
  committees: [string, boolean];
  payDay: number;
} = {
  empName: "AB",
  dependents: 2,
  committees: ["Philanthropy", true],
  payDay: weekDay.MONDAY
};
// employee.committees[1] = "Test234";
//employee.committees.push("AB2",200);
employee.committees[1] = false;
console.log(employee);
