const Employee = require("./employee");

class Engineer extends Employee {
  constructor(id, name, github) {
    super(id, name, email);
    this.github = github;
  }

  github() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
