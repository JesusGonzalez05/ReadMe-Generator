// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your PROJECT TITLE?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Give a breif desciption of your product any Installations, Usages, Contributors, or Tests?',
    },
    {
      type: 'input',
      name: 'Github',
      message: 'What is your Github username?',   
     },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'list',
      message: 'What license are you using?',
      name: 'contact',
      choices: ['MIT', 'Apache2.0', 'unlicensed'],
    },
  ])
  .then((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

