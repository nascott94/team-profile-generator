const Employee = require("./employee");

class Manager extends Employee {
  constructor(id, name, officeNumber) {
    super(id, name, email);
    this.officeNumber = officeNumber;
  }

  officeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
