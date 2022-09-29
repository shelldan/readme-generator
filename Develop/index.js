// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const { title } = require('process') //why it auto generate? 
const generateMarkdown = require('./utils/generateMarkdown') 


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
        message: 'How many contributor(s)?'
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
        choices: ['MIT','GPLv3','GPL','NO-License']
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
    const readmeContent = generateMarkdown(answers);

    fs.writeFile('Markdown.md',readmeContent,(err)=> err
    ? console.log(err)
    : console.log('Successfully created Markdown.md'))
})


// preAnswer
// 1.README Generator
// 2.Generate a README for any GitHub project through a series of questions and generate a formatted Markdown file.
// 3.First, clone the repo to your local machine. Then, within the cloned folder run 'npm install' to install the necessary packages.
// 4.This provides a quick and easy way to generate a formatted README file for any GitHub project.
// 5.2 Contributors
// 6.run 'node index.js' on the command line and answer through the questions; if successful, it will generate a Markdown.md file; 
