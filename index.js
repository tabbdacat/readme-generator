// Includes packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// Array of questions for user input
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
    },
    {
        type: 'input',
        message: 'What does your project do?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the instructions for installation of your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What is the usage your project?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What technologies did you use for this project?',
        name: 'technologies',
    },
    {
        type: 'input',
        message: 'Who helped contribute to this project? (GitHub usernames)',
        name: 'contibutors',
    },
    {
        type: 'checklist',
        message: '',
        name: 'license',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
  ])
  .then(answers => console.log(answers));


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
