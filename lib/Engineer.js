const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, role, github) {
        super(name, id, email, role);
        this.github = github;
        super.role = "Engineer";
    }
    
    getGithub() {
        return this.github;
    };
    
    getRole()
    {
        return "Engineer";
    };
}

module.exports =Engineer;
