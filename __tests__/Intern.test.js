const Intern = require("../lib/intern");

describe("Testing the intern class", () => {
  const testIntern = new Intern("peter", 23, "peter@email.com", "Trent");

  it("matches intern object shape", () => {
    expect(testIntern).toMatchObject({
      name: "peter",
      id: 23,
      email: "peter@email.com",
      school: "Trent",
    });
  });

  it("has getName handler", () => {
    expect(testIntern.getName()).toEqual("peter");
  });

  it("has getId handler", () => {
    expect(testIntern.getId()).toEqual(23);
  });

  it("has getEmail handler", () => {
    expect(testIntern.getEmail()).toEqual("peter@email.com");
  });

  it("has getRole handler", () => {
    expect(testIntern.getRole()).toEqual("Intern");
  });

  it("has getSchool handler", () => {
    expect(testIntern.getSchool()).toEqual("Trent");
  });
});
