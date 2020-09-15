// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');
class Intern extends Employee {
    constructor(_id, _name, _email, _school) {
        const role = 'Intern';
        const id = _id;
        const name = _name;
        const email = _email;
        super(id, name, email, role);
        this.school = _school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;