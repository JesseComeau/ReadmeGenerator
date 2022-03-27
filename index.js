const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the project name?',
            name: 'projectName',
        },
        {
            type: 'list',
            message: 'Include a Table of Contents? (Recommended)',
            name: 'tableOfContents',
            choices: ["Yes", "No"]
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
        },
        {
            type: 'input',
            message: 'Tests',
            name: 'Tests',
        },
        {
            type: 'input',
            message: 'Questions',
            name: 'Questions',
        },
       

    ])

// }
    .then(response => {
    console.log(response)

    let template = ``
    // fs.writeFile(`${README}.md`, (template), (err) =>
    //     err ? console.error(err) : console.log('Success!')
    // );
}
);