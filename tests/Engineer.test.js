// using Engineer constructor 
const Engineer = require("../lib/Engineer");

// Test Engineer contructor
test("Can return github user name via contructor", () => {
    const engineer = new Engineer("Victor", 1, "mingmanhk@gmail.com", "Engineer", "mingmanhk");
    let str = "mingmanhk";
    expect(engineer.github).toEqual(str);
});

// Test getGithub()
test("Can return github username", () => {
    const engineer = new Engineer("Victor", 1, "mingmanhk@gmail.com","Engineer", "mingmanhk");
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// Test getRole() 
test("Can return role", () => {
    const engineer = new Engineer("Victor", 1, "mingmanhk@gmail.com","Engineer", "mingmanhk");
    expect(engineer.getRole()).toEqual("Engineer");
});