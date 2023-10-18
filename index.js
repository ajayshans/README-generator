// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        // Sample Input: README-sample-project
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please briefly describe your project:',
        // Sample Input: The purpose of this project is to create a sample README using the README generator.
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide CLI command that needs to be run to install required dependencies:',
        // Sample Input: npm install inquirer
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please explain how to use this project:',
        // Sample Input: To use this project, please navigate to the relevant repo in terminal. Enter node index.js and complete the prompts to generate README
    },
    {
        type: 'list',
        name: 'licence',
        message: 'Please choose a licence for your application from the list below:',
        choices: ['MIT', 'GPL 3.0','Apache 2.0','ISC','Unlicence'],
        // Sample Choice: MIT
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide instructions and guidelines on how to contribute to your project:',
        // Sample Input: No public contributions available for this project
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide CLI command that needs to be run to install required dependencies:',
        // Sample Input: To test, please run npm test
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username:',
        // Sample Input: ajayshans
    },  
    {
        type: 'input',
        name: 'linkedin',
        message: 'Enter your email address:',
        // Sample Input: ajay+test@gmail.com
    },              
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    try {
        fs.writeFileSync(fileName, data);
        console.log('File written successfully.');
    } catch (err) {
        console.error('Error writing to the file:', err);
    }
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data => writeToFile('README.md', generateMarkdown(data))))
}

// Function call to initialize app
init();
