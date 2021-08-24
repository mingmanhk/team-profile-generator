// using Intern constructor 
const Intern = require("../lib/Intern");

// Test Intern contructor
test("Can return github user name via contructor", () => {
    const intern = new Intern("Victor", 1, "mingmanhk@gmail.com", "Intern", "University of Washingston");
    let str = "University of Washingston";
    expect(intern.school).toEqual(str);
});

// Test getGithub()
test("Can return school", () => {
    const intern = new Intern("Victor", 1, "mingmanhk@gmail.com","Intern", "University of Washingston");
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// Test getRole() 
test("Can return role", () => {
    const intern = new Intern("Victor", 1, "mingmanhk@gmail.com","Intern", "University of Washingston");
    expect(intern.getRole()).toEqual("Intern");
});