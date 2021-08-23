const inquirer = require('inquirer');
const util = require("util");
const fs = require('fs');

//import modeles
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

//Define Employees
this.employees = [];

//Define HTMLstring
htmlstring = "";
htmlemployeecard = "";

// Array of questions to ask the user
const addEmployee = async(role) =>{
    return await inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: `What is the name of the ${role}?`,
                validate: name => {
                    if (name) {
                        return true;
                    } else {
                        console.log(`Please enter ${role} name!`);
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: `What is the ${role} ID?`,
                validate: id => {
                    if (id) {
                        return true;
                    } else {
                        console.log(`Please enter ${role} ID!`);
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: `What is the ${role} Email?`,
                validate: email => {
                    if (email) {
                        return true;
                    } else {
                        console.log(`Please enter ${role} email!`);
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'officenumber',
                message: `What is the ${role} Office number?`,
                when: role === "Manager",
                validate: officenumber => {
                    if (officenumber) {
                        return true;
                    } else {
                        console.log(`Please enter ${role} office number!`);
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: `What is the ${role} Github username?`,
                when: role === "Engineer",
                validate: github => {
                    if (github) {
                        return true;
                    } else {
                        console.log(`Please enter ${role} Github username!`);
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: `What is the ${role} School name?`,
                when: role === "Intern",
                validate: school => {
                    if (school) {
                        return true;
                    } else {
                        console.log(`Please enter ${role} School name!`);
                        return false;
                    }
                }
           }

         ])
        .then
        (
            data => {
                switch (role) {
                    case "Manager":
                        this.employees.push(new Manager(data.name, data.id, data.email, role, data.officenumber));
                        break;
                    case "Engineer":
                        this.employees.push(new Engineer(data.name, data.id, data.email, role, data.github));
                        break;
                    case "Intern":
                        this.employees.push(new Intern(data.name, data.id, data.email, role, data.school));
                        break;
                    default:// do nothing;
                        break;
                }
            }
            
    
    )   
}

// define employee size
const employeesize = () => {
    return inquirer
        .prompt([
            {
                type: 'number',
                name: 'noEngineer',
                message: `Please enter no of Engineer!`,
                validate: noEngineer => {
                    if (!isNaN(noEngineer)) {
                        return true;
                    } else {
                        console.log(`Please enter no of Engineer!`);
                        noEngineer = "";
                        return false;
                    }
                }
            },
            {
                type: 'number',
                name: 'noIntern',
                message: `Please enter no of Intern!`,
                validate: noIntern => {
                    if (!isNaN(noIntern)) {
                        return true;
                    } else {
                        console.log(`Please enter no of Intern!`);
                        return false;
                    }
                }
            }])
}

// generate employee card html
const generateemployeecardHTML=(employee)=>{
    switch (employee.role) {
                    case "Manager":
            return `
                <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="card-body bg-primary text-white ">
                    <h2>${employee.name}</h2>
                    <h3><i class="bi bi-cup-fill pr-3 "></i>Manager</h3>
                </div>
                 <div class="card-body bg-light text-dark">
                   <div class="d-flex justify-content-between align-items-center bg-white text-dark border border-light">
                    <p class="card-text pl-3 m-2">ID: ${employee.id}</p>
                  </div>
                   <div class="d-flex justify-content-between align-items-center bg-white text-dark border border-light">
                    <p class="card-text pl-3 m-2">Email: <a href="mailto: ${employee.email}">${employee.email}</a></p>
                  </div>
                  <div class="d-flex justify-content-between align-items-center bg-white text-dark border border-light">
                    <p class="card-text pl-3 m-2">Office Number: ${employee.officenumber}</p>
                  </div>
                </div>
              </div>
            </div>
            `;
                        break;
                    case "Engineer":
            return `
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="card-body bg-primary text-white ">
                    <h2>${employee.name}</h2>
                    <h3><i class="bi bi-eyeglasses pr-3"></i>Engineer</h3>
                </div>
                 <div class="card-body bg-light text-dark">
                   <div class="d-flex justify-content-between align-items-center bg-white text-dark border border-light">
                    <p class="card-text pl-3 m-2">ID: ${employee.id}</p>
                  </div>
                   <div class="d-flex justify-content-between align-items-center bg-white text-dark border border-light">
                    <p class="card-text pl-3 m-2">Email: <a href="mailto: ${employee.email}">${employee.email}</a></p>
                  </div>
                  <div class="d-flex justify-content-between align-items-center bg-white text-dark border border-light">
                    <p class="card-text pl-3 m-2">Github: <a href="https://github.com/${employee.github}">${employee.github}</a></p>
                  </div>
                </div>
              </div>
            </div>
            `;
            break;
                    case "Intern":
            return `
             <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="card-body bg-primary text-white ">
                    <h2>${employee.name}</h2>
                    <h3><i class="bi bi-person-bounding-box pr-3"></i>Intern</h3>
                </div>
                 <div class="card-body bg-light text-dark">
                   <div class="d-flex justify-content-between align-items-center bg-white text-dark border border-light">
                    <p class="card-text pl-3 m-2">ID: ${employee.id}</p>
                  </div>
                   <div class="d-flex justify-content-between align-items-center bg-white text-dark border border-light">
                    <p class="card-text pl-3 m-2">Email: <a href="mailto: ${employee.email}">${employee.email}</a></p>
                  </div>
                  <div class="d-flex justify-content-between align-items-center bg-white text-dark border border-light">
                    <p class="card-text pl-3 m-2">School: ${employee.school}</p>
                  </div>
                </div>
              </div>
            </div>
            `;
            break;
                    default:// do nothing;
            break;
        }
}

// get html template 
const generatindexHTML=(employeecardHTML) =>{
        fs.readFile('src/index.html', 'utf8', (err, htmlString) => {

            htmlString = htmlString.split("<script></script>").join(employeecardHTML);

            fs.writeFile('output/index.html', htmlString, (err) => {
                // throws an error, you could also catch it here
                if (err) throw err;
                // success case, the file was saved
                console.log('HTML generated!');
            });
        });

    }

//start collect employee info by asking employee size
employeesize()
    .then(async data => {
        //only 1 Manager
       await addEmployee("Manager");
        //add engineer by loop
        for (let i = 0; i < data.noEngineer; i++) {
            console.log(`Please enter engineer ${i+1}`)
            await addEmployee("Engineer")
        }
         //add intern by loop
        for (let i = 0; i < data.noIntern; i++) {
            console.log(`Please enter intern ${i+1}`)
            await addEmployee("Intern");
        }
    })
    .then(
        async () =>
        {
            this.employees.forEach(employee => {
                htmlemployeecard += generateemployeecardHTML(employee);
            })
            generatindexHTML(htmlemployeecard)
            }
    )
