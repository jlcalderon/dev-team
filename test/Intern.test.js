const Intern = require("../lib/Intern");

describe("TESTING INTERN CLASS", () => {
    test("Can set school via constructor", () => {
        const testValue = "UCLA";
        const e = new Intern(1, "Foo", "test@test.com", testValue);
        expect(e.school).toBe(testValue);
    });

    test("getRole() should return \"Intern\"", () => {
        const testValue = "Intern";
        const e = new Intern(1, "Foo", "test@test.com", "UCLA");
        expect(e.getRole()).toBe(testValue);
    });

    test("Can get school via getSchool()", () => {
        const testValue = "UCLA";
        const e = new Intern(1, "Foo", "test@test.com", testValue);
        expect(e.getSchool()).toBe(testValue);
    });
});