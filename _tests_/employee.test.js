const { TestWatcher } = require("jest");
const Employee = require("../lib/employee");

// console.log(newEmployee.name);

test("creates an employee object", function () {
  const newEmployee = new Employee("olive", 10, "oscott@email.com");
  expect(newEmployee.name).toEqual("olive");
});
