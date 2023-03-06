const Manager = require("../lib/manager");

describe("Testing the manager class", () => {
  const testManager = new Manager("John", 1, "john@email.com", 4370000000);
  it("matches manager object shape", () => {
    expect(testManager).toMatchObject({
      name: "John",
      id: 1,
      email: "john@email.com",
      officeNumber: 4370000000,
    });
  });
  it("has getName handler", () => {
    expect(testManager.getName()).toEqual("John");
  });

  it("has getId handler", () => {
    expect(testManager.getId()).toEqual(1);
  });

  it("has getEmail handler", () => {
    expect(testManager.getEmail()).toEqual("john@email.com");
  });

  it("has getRole handler", () => {
    expect(testManager.getRole()).toEqual("Manager");
  });

  it("has getOfficeNumber handler", () => {
    expect(testManager.getOfficeNumber()).toEqual(4370000000);
  });
});
