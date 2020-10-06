const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

//This array will store all employees created from user's input
const employeesArray = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

inquirer.prompt(
    [{
            name: "id",
            message: "Type manager ID",
            type: "number"
        },
        {
            name: "name",
            message: "Manager's name:",
            type: "input"
        },
        {
            name: "email",
            message: "Type manager's email:",
            type: "input"
        },
        {
            name: "office_number",
            message: "Type manager's office number",
            type: "number"
        }
    ]
).then(function(data) {
    const myManager = new Manager(data.id, data.name, data.email, data.office_number);
    //pushing the manager employee to the array
    employeesArray.push(myManager);
    //logging some info to the user
    console.log(`Team Manager was created with the following data -> 
        ${JSON.stringify(employeesArray[0])}`); //The team manager is alway the index 0 in my employees array 
});



// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```