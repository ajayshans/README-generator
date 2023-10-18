// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch(license) {
        case 'MIT':
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]('+ renderLicenseLink(license)+')';
            break;
        case 'GPL 3.0':
            return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]('+ renderLicenseLink(license)+')';
            break;
        case 'Apache 2.0':
            return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]('+ renderLicenseLink(license)+')';
            break;
        case 'ISC':
            return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]('+ renderLicenseLink(license)+')';
            break;
        case 'Unlicense':
            return '';
    }
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    switch(license) {
        case 'MIT':
            return 'https://opensource.org/licenses/MIT';
            break;
        case 'GPL 3.0':
            return 'https://www.gnu.org/licenses/gpl-3.0';
            break;
        case 'Apache 2.0':
            return 'https://opensource.org/licenses/Apache-2.0';
            break;
        case 'ISC':
            return 'https://opensource.org/licenses/ISC';
            break;
        case 'Unlicense':
            return '';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
