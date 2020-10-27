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
// define base questions for all employee types
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
] 

// function call to initialize questions 
async function init() {
    try {
        // Prompt Inquirer questions
        const response = await inquirer.prompt(baseQuestion);
        switch(response.role) {
            case "engineer": 
                engineerSelect(response)
                break;
            case "intern": 
                internSelect(response)
                break;
            case "manager":
                managerSelect(response)
                break
            default:
                break;
        }
    } catch (error) {
        console.log(error);
    }
};

init()


// accumulate employee answers in an object

// pass employee answer objects array into render function 

// if user selects engineer when proment with role question then prompt user with engineer specific questions 

async function engineerSelect(response) {
    // add engineer questions
    const engQuestion = [{
        type: 'input',
        message: 'What is your github username (without @)',
        name: 'engId'
    }]

    try {
    // Prompt Inquirer questions
    const engResponse = await inquirer.prompt(engQuestion);
    const newEngineer = new Engineer (response.name, response.userid, response.email, engResponse.github);
    addEmployeePrompt()
    employeeArray.push(newEngineer)
    } catch (error) {
        console.log(error);
    }
    
};


// if user selects intern when proment with role question then prompt user with intern specific questions
async function internSelect(response) {
  // add engineer questions
  const internQuestion = [{
    type: 'input',
    message: 'What is your school/ university name?',
    name: 'school'
}]

try {
// Prompt Inquirer questions
const internResponse = await inquirer.prompt(internQuestion);
const newIntern = new Intern (response.name, response.userid, response.email, internResponse.school);
addEmployeePrompt()
employeeArray.push(newIntern)
} catch (error) {
    console.log(error);
}

};
// if user selects manager when proment with role question then prompt user with manager specific questions
async function managerSelect(response) {
const mgrQuestion = [{
        type: 'input',
        message: 'What your office number?',
        name: 'office'
    }]
    try {
    // Prompt Inquirer questions
    const mgrResponse = await inquirer.prompt(mgrQuestion);
    const newMgr = new Manager (response.name, response.userid, response.email, mgrResponse.office);
    addEmployeePrompt()
    employeeArray.push(newMgr)
    } catch (error) {
        console.log(error);
        }

}
// function to ask user if they want to add another employee
async function addEmployeePrompt() {
    try {
        const addMemberQuestion =[{
            type: 'confirm',
            message: 'would you like to add another team member?',
            name: 'nextEmployee'
        }]

        const additionalEmployee = await inquirer.prompt(addMemberQuestion)

        if (additionalEmployee.nextEmployee){
            init()
        } else {
            render()
        }
        // employeeArray.push(newEngineer)
    } catch (error) {
        console.log(error);
    }
 }

