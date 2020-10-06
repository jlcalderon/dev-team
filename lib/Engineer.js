// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');
class Engineer extends Employee {
    constructor(_id, _name, _email, _github) {
        const role = 'Engineer';
        const id = _id;
        const name = _name;
        const email = _email;
        super(id, name, email, role);
        this.github = _github;
    }

    getGithub() {
        return this.github;
    }

    setGithub(arg) {
        this.github = arg;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;