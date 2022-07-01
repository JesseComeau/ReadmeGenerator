function generateReadme(response) {
    console.log(response)

    let template =
`# **${response.projectName}**

## Description

${response.description}

## User Story
\`\`\`md
${response.userStory}
\`\`\`\n`

    if (response.tableOfContents == 'Yes') {
        template +=
`## Table of Contents
1. [Installation](#Installation)
2. [Usage](#Usage)
3. [Contributing](#Contributing)
4. [License](#License)
5. [Tests](#Tests)
6. [Questions](#Questions)\n`

    } else { template += '' }

    template +=
`## Installation<a id="Installation"></a>
${response.Installation}

## Usage<a id="Usage"></a>
${response.Usage}

## Contributing<a id="Contributing"></a>
${response.Contributing}

## License <a id="License"></a>`

    if (response.License == 'MIT') {
        template +=
`Copyright ${response.Year} ${response.CopyrightHolder}

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
    } else { template += '' }
    template +=

`## Tests<a id="Tests"></a>
${response.Tests}

## Questions<a id="Questions"></a>
${response.Questions}`;

    return template
}

module.exports = generateReadme;