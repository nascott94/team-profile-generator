const Employee = require("./employee");

class Intern extends Employee {
  constructor(id, name, email, school) {
    super(id, name, email);
    this.getSchool = school;
    this.role = "Intern";
  }

  getSchool() {
    return this.getSchool;
  }
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
