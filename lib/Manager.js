const Employee = require("./Employee");

class Manager extends Employee{
  constructor(name, id, email, role, officenumber) {
        super(name, id, email, role);
        this.officenumber = officenumber;
    }

    getOfficeNumber() 
    {
    return this.officenumber;
    };
  
      getRole()
    {
          return this.role;
    };
}
module.exports = Manager;