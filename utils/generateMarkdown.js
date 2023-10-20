// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch(license) {
        case 'MIT':
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
            break;
        case 'GPL 3.0':
            return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
            break;
        case 'Apache 2.0':
            return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
            break;
        case 'ISC':
            return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
            break;
        case 'Unlicense':
            return '';
    }
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    const licenseLink = license === 'Unlicense' ? '' : '\n- [License](#license)';
    return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    const licenseSection = license === 'Unlicense' ? '' : `\n## License\nThis project uses a ${license} license`
    return licenseSection
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage) ${renderLicenseLink(data.license)}
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)


## Installation
To install required dependencies, in terminal please run the CLI command:
\`\`\`
${data.installation}
\`\`\`

## Usage
${data.usage} 
${renderLicenseSection(data.license)}

## Contribution
${data.contribution}

## Tests
To execute relevant tests, in terminal please run the CLI command:
\`\`\`
${data.test}
\`\`\`

## Questions
Please direct any additional questions to the below contact details:
- Email:[${data.email}](${data.email})
- GitHub Profile:[${data.github}](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;
