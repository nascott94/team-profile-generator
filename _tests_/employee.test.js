const { TestWatcher } = require("jest");
const Employee = require("../lib/employee");

// console.log(newEmployee.name);

test("creates an employee object", function () {
  const newEmployee = new Employee("susan", 10, "sscott@email.com");
  expect(newEmployee.name).toEqual("susan");
});
