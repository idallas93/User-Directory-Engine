const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const employeeArray = []


const render = require("./lib/htmlRenderer");

const baseQuestion = [{
    type: 'input',
    message: 'what is your first name?',
    name: 'name',
},

{
    type: 'input',
    message: 'what is your user id?',
    name: 'userid',
},

{
    type: 'input',
    message: 'what is your email?',
    name: 'email',
},

{
    type: 'list',
    name: 'role',
    message: 'what is your role?',
    choices: ['engineer', 'intern', 'manager']
    
},

{
    type: 'list',
    name: 'role',
    message: 'what is your role?',
    choices: ['engineer', 'intern', 'manager']
    
},
] 

// function call to initialize program
async function init() {
    try {
        // Prompt Inquirer questions
        const response = await inquirer.prompt(questions);
        switch(response.role) {
            case "engineer": 
                engineerSelect(response)
                break;
            case "intern": 
                internSelect()
                break;
            case "manager":
                managerSelect()
                break
            default:
                break;
        }
        addEmployeePrompt()
    } catch (error) {
        console.log(error);
    }
};

init()



const newIntern = new Engineer (response.name, response.userid, response.email, response.school);
const newManager = new Engineer (response.name, response.userid, response.email, response.officeNumber);

// accumulate employee answers in an object

// pass employee answer objects array into render function 

// if user selects engineer when proment with role question then prompt user with engineer specific questions 

const engineerSelect = (response) => {
    // add engineer questions
    []

    try {
    // Prompt Inquirer questions
    const engResponse = await inquirer.prompt(questions);
    const newEngineer = new Engineer (response.name, response.userid, response.email, engResponse.github);
    employeeArray.push(newEngineer)
    } catch (error) {
        console.log(error);
    }
    
};


// if user selects intern when proment with role question then prompt user with intern specific questions
const internSelect = () => {

}

// if user selects manager when proment with role question then prompt user with manager specific questions
const managerSelect = () => {

}
async function addEmployeePrompt() {
    try {
        // Prompt Inquirer questions
        []
        const additionalEmployee = await inquirer.prompt(questions)
        if (additionalEmployee.add){
            init()
        } else {
            render()
        }
        employeeArray.push(newEngineer)
    } catch (error) {
        console.log(error);
    }
 }

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

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



// ### User input

// The project must prompt the user to build an engineering team. An engineering
// team consists of a manager, and any number of engineers and interns.

// ### Roster output

// The project must generate a `team.html` page in the `output` directory, that displays a nicely formatted team roster. Each team member should display the following in no particular order:

// * Name

// * Role

// * ID

// * Role-specific property (School, link to GitHub profile, or office number)

// ## Bonus

// * Use validation to ensure that the information provided is in the proper expected format.

// * Add the application to your portfolio.

// ## Commit Early and Often

// One of the most important skills to master as a web developer is version control. Building the habit of committing via Git is important for two reasons:

// * Your commit history is a signal to employers that you are actively working on projects and learning new skills.

// * Your commit history allows you to revert your codebase in the event that you need to return to a previous state.

// Follow these guidelines for committing:

// * Make single-purpose commits for related changes to ensure a clean, manageable history. If you are fixing two issues, make two commits.

// * Write descriptive, meaningful commit messages so that you and anyone else looking at your repository can easily understand its history.

// * Don't commit half-done work, for the sake of your collaborators (and your future self!).

// * Test your application before you commit to ensure functionality at every step in the development process.

// We would like you to have well over 200 commits by graduation, so commit early and often
 