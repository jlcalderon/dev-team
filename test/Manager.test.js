const Manager = require("../lib/Manager");

describe("TESTING MANAGER CLASS", () => {
    test("Can set office number via constructor argument", () => {
        const testValue = 100;
        const e = new Manager(1, "Foo", "test@test.com", testValue);
        expect(e.officeNumber).toBe(testValue);
    });

    test('getRole() should return "Manager"', () => {
        const testValue = "Manager";
        const e = new Manager(1, "Foo", "test@test.com", 100);
        expect(e.getRole()).toBe(testValue);
    });

    test("Can get office number via getOffice()", () => {
        const testValue = 100;
        const e = new Manager(1, "Foo", "test@test.com", testValue);
        expect(e.getOfficeNumber()).toBe(testValue);
    });
});