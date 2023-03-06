const Engineer = require("../lib/engineer");

describe("Testing the engineer class", () => {
  const testEngineer = new Engineer("Julia", 15, "julia@email.com", "juliams");

  it("matches manager object shape", () => {
    expect(testEngineer).toMatchObject({
      name: "Julia",
      id: 15,
      email: "julia@email.com",
      github: "juliams",
    });
  });

  it("has getName handler", () => {
    expect(testEngineer.getName()).toEqual("Julia");
  });

  it("has getId handler", () => {
    expect(testEngineer.getId()).toEqual(15);
  });

  it("has getEmail handler", () => {
    expect(testEngineer.getEmail()).toEqual("julia@email.com");
  });

  it("has getRole handler", () => {
    expect(testEngineer.getRole()).toEqual("Engineer");
  });

  it("has getOfficeNumber handler", () => {
    expect(testEngineer.getGithub()).toEqual("juliams");
  });
});
