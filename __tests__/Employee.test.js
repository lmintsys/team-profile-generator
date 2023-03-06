const Employee = require("../lib/employee");

describe("Testing the employee class", () => {
  const testEmployee = new Employee("peter", 23, "peter@email.com");

  it("has getName handler", () => {
    expect(testEmployee.getName()).toEqual("peter");
  });

  it("has getId handler", () => {
    expect(testEmployee.getId()).toEqual(23);
  });

  it("has getEmail handler", () => {
    expect(testEmployee.getEmail()).toEqual("peter@email.com");
  });

  it("has getRole handler", () => {
    expect(testEmployee.getRole()).toEqual("Employee");
  });

  it("not to have intern-specific properties", () => {
    expect(testEmployee).not.toHaveProperty("getSchool");
  });

  it("not to have manager-specific properties", () => {
    expect(testEmployee).not.toHaveProperty("getOfficeNumber");
  });

  it("not to have engineer-specific properties", () => {
    expect(testEmployee).not.toHaveProperty("getGithub");
  });
});
