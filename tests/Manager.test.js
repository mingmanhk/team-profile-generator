// using Manager constructor 
const Manager = require("../lib/Manager");

// Test Manager contructor
test("Can return office number via contructor", () => {
    const manager = new Manager("Victor", 1, "mingmanhk@gmail.com", "Manager", "1234567890");
    let str = "1234567890";
    expect(manager.officenumber).toEqual(str);
});

// Test getOfficeNumber()
test("Can return OfficeNumber", () => {
    const manager = new Manager("Victor", 1, "mingmanhk@gmail.com","Manager", "1234567890");
    expect(manager.getOfficeNumber()).toEqual(expect.stringContaining(manager.officenumber.toString()));
});

// Test getRole() 
test("Can return role", () => {
    const manager = new Manager("Victor", 1, "mingmanhk@gmail.com","Manager", "1234567890");
    expect(manager.getRole()).toEqual("Manager");
});