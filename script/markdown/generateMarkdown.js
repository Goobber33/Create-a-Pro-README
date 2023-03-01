// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// This function takes in a license type as a parameter and returns a corresponding license badge image link. If no license is passed in, it returns an empty string.

function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  } else if (license === 'Apache 2.0') {
    return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
  } else if (license === 'GPL 3.0') {
    return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
  } else if (license === 'BSD 3') {
    return '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

// This function takes in a license type as a parameter and returns a corresponding license link. If no license is passed in, it returns an empty string.

function renderLicenseLink(license) {
  if (license === 'MIT') {
    return 'MIT';
  } else if (license === 'Apache 2.0') {
    return 'Apache 2.0';
  } else if (license === 'GPL 3.0') {
    return 'GPL 3.0';
  } else if (license === 'BSD 3') {
    return 'BSD 3';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

// This function takes in a license type as a parameter and returns a formatted license section for the README file. If no license is passed in, it returns an empty string.

function renderLicenseSection(license) {
  if (license) {
    return `
  
  License
  This project is licensed under the ${renderLicenseLink(license)} license.`
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README

// This function takes in an object of data that contains information for the README file and generates a markdown formatted output string for the file.

function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);


  // Return a markdown formatted string that includes the data from the data object, the license badge image link and license section obtained from the renderLicenseBadge and renderLicenseSection functions

  return `# ${data.title}
  
  ${licenseBadge}
  
  Description
  ${data.description}
  
  Table of Contents
  ${data.tableOfContents}
  
  Installation
  ${data.installation}
  
  Usage
  ${data.usage}
  
  Contributing
  ${data.contributing}
  
  Tests
  ${data.tests}
  
  ${licenseSection}
  
  Questions
  If you have any questions, feel free to reach out to me at ${data.email}. You can also check out my GitHub profile for more of my projects.
  
  `;
}

// Export the generateMarkdown function for use in other files

module.exports = generateMarkdown;