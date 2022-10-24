// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is your PROJECT TITLE?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Give a breif DESCRIPTION of your product.',
      },
    {
      type: 'input',
      name: 'installation',
      message: 'Give a breif desciption of your products INSTALLATION instructions.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is the USAGE information for your poroject?',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'What are the CONTRIBUTION guidelines for your project?',
    },
    {
      type: 'input',
      name: 'test',
      message: 'What are the TEST instructions for your project?',
    },
    {
      type: 'list',
      message: 'What license are you using?',
      name: 'contact',
      choices: ['MIT', 'Apache2.0', 'unlicensed'],
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your Github username?',   
     },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
  ];
  // TODO: Create a function to write README file
  function writeToFile(data) {
    fs.writeFile('README.md', data, (err) =>
      err ? console.log(err) : console.log('Your README.md file is mow created!')
    );
  };

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((responses) => writeToFile(generateMarkdown(responses)));
}

// Function call to initialize app
init();

