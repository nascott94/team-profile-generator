const Employee = require("./employee");

class Intern extends Employee {
  constructor(id, name, github) {
    super(id, name, email);
    this.github = github;
  }

  github() {
    return this.github;
  }
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
