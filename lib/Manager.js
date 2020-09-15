// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee');
class Manager extends Employee {
    constructor(_id, _name, _email, _officeNumber) {
        const role = 'Manager';
        const id = _id;
        const name = _name;
        const email = _email;
        super(id, name, email, role);
        this.officeNumber = _officeNumber;
    }

    getRole() {
        return 'Manager';
    }

    //Set and get methods helper for office Number
    setOfficeNumber(numberArg) {
        this.officeNumber = numberArg;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;