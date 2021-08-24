// using Employee constructor 
const Employee = require("../lib/Employee");

// Test Employee contructor
describe("Can employeee object via constructor", () => {
  it("Can instantiate Employee instance", () => {
    const e = new Employee();
    expect(typeof (e)).toBe("object");
  });
  it("Can set name", () => {
    let str = "Victor";
    const e = new Employee(str);
    expect(e.name).toBe(str);
  });
  it("Can set id", () => {
    let str = 1;
    const e = new Employee("Victor", str);
    expect(e.id).toBe(str);
  });
  it("Can set email", () => {
    let str = "test@test.com";
    const e = new Employee("Victor", 1, str);
    expect(e.email).toBe(str);
  })
});

// Test getName()
describe("Can return employee name", () => {
    const employee = new Employee("Victor", 1, "mingmanhk@gmail.com","Employee");
    expect(employee.getName()).toEqual("Victor");
});

// Test getId()
describe("Can return id", () => {
    const employee = new Employee("Victor", 1, "mingmanhk@gmail.com","Employee");
    expect(employee.getId()).toEqual(1);
});

// Test getEmail()
describe("Can return Email", () => {
    const employee = new Employee("Victor", 1, "mingmanhk@gmail.com","Employee");
    expect(employee.getEmail()).toEqual("mingmanhk@gmail.com");
});

// Test getRole() 
describe("Can return role", () => {
    const employee = new Employee("Victor", 1, "mingmanhk@gmail.com","Employee");
    expect(employee.getRole()).toEqual("Employee");
});