const fs = require("fs");
// const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'projectName',
        message: 'What is your project name?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'input',
        name: 'installCommand',
        message: 'What command should be used to run to install dependencies?',
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'testCommand',
        message: 'What command should be used to run tests',
        default: 'npm test'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What does the user need to know about contributing to the repo?',
    }
];

// // function to write README file
// function writeToFile(fileName, data) {
    
// }

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        fs.writeFile(`${response.projectName}.md`, generateMarkdown(response), (err) =>
        err ? console.error(err) : console.log('README file generated!'));
        // fs.writeFile(response.projectName, generateMarkdown(response));
    });
};

// function call to initialize program
init();
