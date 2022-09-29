// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license,github) {
  if(license === 'NO-License'){
    license = '';
  }else{
    license = `[![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)](https://github.com/${github})`;
  }
  return license
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'NO-License'){
    license = ''
  } else{
    license = `* [License](#license)`
  }
  return license
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'NO-License'){
    license = ''
  }else{
    license = `## License
    * The application is covered under ${license}`
  }
  return license
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = ({ 
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
`${renderLicenseBadge(license,github)}

# ${title}

## Description
${description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Test](#test)
${renderLicenseLink(license)}
* [Question](#question)


## Installation
${installation}

## Usage
${usage}

## Contribution
${contribution}

## Test
${test}

${renderLicenseSection(license)}

## Question
* Click [here](https://github.com/${github}) to go to my Github Repositories
* feel free to reach me at ${email} if you have additional questions

`;

module.exports = generateMarkdown;
