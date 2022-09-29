// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const { title } = require('process') //why it auto generate? 
const util = require('util')

const generateREADME = ({ 
    title, 
    description,
    installation,
    usage,
    contribution,
    test, 
    license,
    github,
    email,
}) =>
`# ${title}

[![GitHub License](https://img.shields.io/github/license/shelldan/readme_generator)](https://github.com/${github})

## Description
${description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Test](#test)
* [License](#license)
* [Question](#question)


## Installation
${installation}

## Usage
${usage}

## Contribution
${contribution}

## Test
${test}

## License
* The application is covered under ${license}

## Question
* Click [here](https://github.com/${github}) to go to my Github Repositories
* feel free to reach me at ${email} if you have additional questions

`




// TODO: Create an array of questions for user input

inquirer
.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your APP?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the APP for?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How to install the APP?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How to use the APP?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How to make contribution for the APP?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'How to test the APP?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'what is the license?',
        choices: ['MIT','GPLv3','GPL']
    },
    {
        type: 'input',
        name: 'github',
        message: 'what is your github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
])
.then((answers)=>{
    const readmeContent = generateREADME(answers);

    fs.writeFile('README.md',readmeContent,(err)=> err
    ? console.log(err)
    : console.log('Successfully created README.md'))
})

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

