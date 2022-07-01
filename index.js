const inquirer = require('inquirer');
const fs = require('fs');
const generateReadme = require('./utils/generateReadme')



function init() {
    inquirer
    .prompt([
            {
                type: 'input',
                message: 'What is the project name?',
                name: 'projectName',
                default: 'Test Project Name'
            },
            {
                type: 'input',
                message: 'A short description of the project?',
                name: 'description',
                default: 'Bootcamp - Phase 2 - Homework'
            },
            {
                type: 'input',
                message: 'User Story?',
                name: 'userStory',
            },
            {
                type: 'list',
                message: 'Include a Table of Contents? (Recommended)',
                name: 'tableOfContents',
                choices: ["Yes", "No"],
                default: "Yes"
            },
            {
                type: 'input',
                message: 'Installation requirements?',
                name: 'Installation',
            },
            {
                type: 'input',
                message: 'Usage?',
                name: 'Usage',
            },
            {
                type: 'input',
                message: 'Contributing?',
                name: 'Contributing',
                default: 'Please fork the repository.',
            },


            {
                type: 'list',
                message: 'License?',
                name: 'License',
                choices: ['MIT']
            },
            {
                type: 'input',
                message: 'Copyright Holder?',
                name: 'CopyrightHolder'
            },

            {
                type: 'input',
                message: 'Year?',
                name: 'Year',
                default: 2022
            },

            {
                type: 'input',
                message: 'Tests',
                name: 'Tests',
                default: 'No testing is required currently.'
            },
            {
                type: 'input',
                message: 'Questions',
                name: 'Questions',
                default: 'JesseC262@gmail.com'
            },



        ])


        .then((response) => {
            const readmeData = generateReadme(response);
            console.log(readmeData)
            writeToFile(readmeData)
        }
        );
    }

function writeToFile(response) {
    fs.writeFile(`README.md`, response, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

init()