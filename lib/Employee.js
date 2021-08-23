class Employee {
  constructor(name, id, email,role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
  }

  getName(){
    return this.name;
  }

  getId()
  {
    return this.id;
  }

  getEmail()
  {
    return this.email;
  }

  getRole() {
    console.log(this.Employee)
    return "Employee";
  }
}

module.exports =Employee;
