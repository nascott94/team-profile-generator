const Employee = require("./employee");

class Intern extends Employee {
  constructor(id, name, school) {
    super(id, name, email);
    this.getSchool = school;
  }

  getSchool() {
    return this.getSchool;
  }
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
