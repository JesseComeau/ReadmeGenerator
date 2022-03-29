const inquirer = require('inquirer');
const fs = require('fs');
let answers = {
    projectName: "",
    tableOfContents: "",
    Installation: "",
    Usage: "",
    Contributing: "",
    License: "",
    Tests: "",
    Questions: [],
}

// initialSetup()

// function initialSetup() {
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the project name?',
            name: 'projectName',
            default: 'Test Project Name'
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
            default: "npm install inquirer"
        },
        {
            type: 'input',
            message: 'Usage?',
            name: 'Usage',
            default: 'Create Readme Files'
        },
        {
            type: 'input',
            message: 'Contributing?',
            name: 'Contributing',
            default: 'Jesse Comeau',
        },
        
        {
            type: 'list',
            message: 'License?',
            name: 'License',
            choices: ['MIT', 'Custom']
        },

        {
            type: 'input',
            message: 'Tests',
            name: 'Tests',
            default: 'All the testing'
        },
        {
            type: 'input',
            message: 'Questions',
            name: 'Questions',
            default: 'JesseC262@gmail.com'
        },
        
       

    ])

//     .then(response => { 
//     answers = response.cloneNode(true);
//     console.log(answers)
//     console.log(response)
//     })
// }   
    
//     .then(response => {
//         console.log(response)
        
//     if (response.License == "MIT") {
//         inquirer.prompt({
//             type: 'input',
//             message: 'Current Year?',
//             name: 'Year',
            
//         },
//         {
//             type: 'input',
//             message: 'Your Name',
//             name: 'Name',
//             default: 'Jesse Comeau'
//         })
//     }
//     else {inquirer.prompt({
//         type: 'input',
//         message: 'License Details',
//         name: 'licenseDetails',
//         default: 'Lorem Ipsum....'
//     })

        
//     };

// })


    .then(response => {
    console.log(response)
    
    let template = `# **${response.projectName}**
## Table of Contents
1. [Installation](#Installation)
2. [Usage](#Usage)
3. [Contributing](#Contributing)
4. [License](#License)
4. [Tests](#Tests)
5. [Questions](#Questions)

## Installation<a id="Installation"></a>
${response.Installation}

## Usage<a id="Usage"></a>
${response.Usage}

## Contributing<a id="Contributing"></a>
${response.Contributing}

## License <a id="License"></a>
${response.License}

## Tests<a id="Tests"></a>
${response.Tests}

## Questions<a id="Questions"></a>
${response.Questions}

${response}`
    fs.writeFile(`README.md`, (template), (err) =>
    err ? console.error(err) : console.log('Success!')
    );
}
);
// console.log(response)