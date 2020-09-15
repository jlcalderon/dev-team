const Employee = require("../lib/Employee");
describe("TESTING EMPLOYEE CLASS", () => {
    test("Can instantiate Employee instance", () => {
        const e = new Employee();
        expect(typeof(e)).toBe("object");
    });

    test("Can set id via constructor argument", () => {
        const testValue = 100;
        const e = new Employee(testValue, "Foo", "foo@email.com", "foo-role");
        expect(e.id).toBe(testValue);
    });

    test("Can set name via constructor arguments", () => {
        const name = "Alice";
        const e = new Employee(1, name, "foo@email.com", "foo-role");
        expect(e.name).toBe(name);
    });

    test("Can set email via constructor argument", () => {
        const testValue = "test@test.com";
        const e = new Employee(1, "Foo", testValue, "foo-role");
        expect(e.email).toBe(testValue);
    });

    test("Can set role via constructor argument", () => {
        const testValue = "Engineer";
        const e = new Employee(1, "Foo", "foo@email.com", testValue);
        expect(e.role).toBe(testValue);
    });

    test("Can set and get name via setter and getter methods", () => {
        const testValue = "Alice";
        const e = new Employee();
        e.setName(testValue);
        expect(e.getName()).toBe(testValue);
    });

    test("Can set and get id via setter and getter methods", () => {
        const testValue = 100;
        const e = new Employee();
        e.setId(testValue);
        expect(e.getId()).toBe(testValue);
    });

    test("Can set and get email via setter and getter methods", () => {
        const testValue = "test@test.com";
        const e = new Employee();
        e.setEmail(testValue);
        expect(e.getEmail()).toBe(testValue);
    });

    test("Can set and get role via setter and getter methods", () => {
        const testValue = "Employee";
        const e = new Employee();
        e.setRole(testValue);
        expect(e.getRole()).toBe(testValue);
    })

    /* test("getRole() should return \"Employee\"", () => {
        const testValue = "Employee";
        const e = new Employee("Alice", 1, "test@test.com");
        expect(e.getRole()).toBe(testValue);
    }); */
});