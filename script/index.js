// Import necessary packages

const inquirerPackage = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./markdown/generateMarkdown');

// Create an array of questions for user input

const questionsArray = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter in a brief description of your project:',
    },
    {
        type: 'input',
        name: 'tableOfContents',
        message: 'Please provide a table of contents for your README:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide details on how to install your project:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions on how to use your project:',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide guidelines for contributions on your project:',
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Please provide testing instructions for your project:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license is your project using?',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter in your email:',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter in your GitHub username:',
    },
];

// Function to write README file

function writeToFile(fileName, data) {
    // Use fs to write data to a file
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err); // Log error if there is one
        }
        else {
            console.log('README.md created!'); // Log success message if there is no error
        }   
    });
}

// Function to initialize app

function init() {
    // Use inquirer to prompt user with questions and then generate README file based on their responses
    inquirerPackage.prompt(questionsArray)
        .then((data) => {
            const readme = generateMarkdown(data);
            writeToFile('README.md', readme);
        });
}

// Call function to initialize app

init();
