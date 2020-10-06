// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { create } = require("domain");

//This array will store all employees created from user's input
const employeesArray = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)


//Call the first function to start this app
init();

//this is the first function to run it will create a manager of the team and one employee
function init() {
    console.log(" --- Creating team's manager --- ");
    console.log(" ------------------------------- ");
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
        console.log(`Team Manager was created succesfully`);
        console.log(" ------------------------------ ");


        console.log(" --- Now creating the first team member ---");
        console.log(" ------------------------------ ");

        //Create first employee
        createEmployee();
    });

}

function createEngineer() {

    inquirer.prompt([{
            name: "id",
            message: "Type employee's ID",
            type: "number"
        },
        {
            name: "name",
            message: "Employee's name:",
            type: "input"
        },
        {
            name: "email",
            message: "Type employee's email:",
            type: "input"
        },
        {
            name: "github",
            message: "Type employee's github user:",
            type: "input"
        }

    ]).then(function(data) {
        const myEngineer = new Engineer(data.id, data.name, data.email, data.github);
        employeesArray.push(myEngineer);
        console.log(`New engineer added to the team`);
        console.log(" ------------------------------ ");
        /* ask the user to continue or stop */
        userNextStep();
    });

}

function createIntern() {

    inquirer.prompt([{
            name: "id",
            message: "Type employee's ID",
            type: "number"
        },
        {
            name: "name",
            message: "Employee's name:",
            type: "input"
        },
        {
            name: "email",
            message: "Type employee's email:",
            type: "input"
        },
        {
            name: "school",
            message: "From what school did this employee graduates?",
            type: "input"
        }

    ]).then(function(data) {
        const myIntern = new Intern(data.id, data.name, data.email, data.school);
        employeesArray.push(myIntern);
        console.log(`New Intern added to the team`);
        console.log(" ------------------------------ ");

        /* ask the user to continue or stop */
        userNextStep();
    });

}

//This functions determine what role our employees are going to be and call the function to create that specific team member
function createEmployee() {
    // HINT: each employee type (manager, engineer, or intern) has slightly different
    // information; write your code to ask different questions via inquirer depending on
    // employee type.
    inquirer.prompt({
        name: "role",
        message: "What's is this employee's role going to be?",
        type: "list",
        choices: ["Engineer", "Intern"]
    }).then(function(data) {

        //verify users input type of employee object Engineer/Intern
        if (data.role === "Engineer") {
            //call create Engineer
            createEngineer();
        }
        if (data.role === "Intern") {
            createIntern();
        }

    });
}

function userNextStep() {
    console.log(" ------------------------------ ");
    inquirer.prompt(
        [{
            name: "option",
            message: "Do you want to continue adding team members?",
            type: "list",
            choices: ["Yes", "No"]
        }]
    ).then(function(data) {
        if (data.option === "Yes") {
            createEmployee();
        } else {
            console.log(`
            This is my team: 
            ${JSON.stringify(employeesArray)}
            open this link to see the html file:
            ${outputPath}`);
            // After the user has input all employees desired, call the `render` function (required
            // above) and pass in an array containing all employee objects; the `render` function will
            // generate and return a block of HTML including templated divs for each employee!
            const htmlTemplate = render(employeesArray);
            // After you have your html, you're now ready to create an HTML file using the HTML
            // returned from the `render` function. Now write it to a file named `team.html` in the
            // `output` folder. You can use the variable `outputPath` above target this location.
            // Hint: you may need to check if the `output` folder exists and create it if it
            // does not.
            fs.writeFileSync(outputPath, htmlTemplate);
        }
    });
}