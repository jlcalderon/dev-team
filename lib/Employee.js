// TODO: Write code to define and export the Employee class
class Employee {
    constructor(_id, _name, _email, _role) {
        this.id = _id;
        this.name = _name;
        this.email = _email;
        this.role = _role;
    }

    //SET AND GET methods for ID
    setId(idArg) {
        this.id = idArg;
    }

    getId() {
        return this.id;
    }

    //SET AND GET methods for NAME
    setName(nameArg) {
        this.name = nameArg;
    }

    getName() {
        return this.name;
    }

    //SET AND GET methods for EMAIL
    setEmail(emailArg) {
        this.email = emailArg;
    }

    getEmail() {
        return this.email;
    }

    //SET AND  GET methods for ROLE
    setRole(roleArg) {
        this.role = roleArg;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Employee;