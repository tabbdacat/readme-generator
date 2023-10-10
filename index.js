// Includes packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// Array of questions for user input
const questions = [
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
        type: 'list',
        message: 'Which license are you using for this project?',
        name: 'license',
        choices: ["MIT", "GNU GPLv3", "Apache 2.0", "ISC", "none"]
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
  ]



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data => {
        console.log(data);
        fs.writeFile('./README.md', generateMarkdown(data), (err) => {
            err ? console.log(err) : console.log('Success!') 
});
})
}


// Function call to initialize app
init();
