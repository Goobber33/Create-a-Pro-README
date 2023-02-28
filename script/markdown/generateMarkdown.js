// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
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
  function generateMarkdown(data) {}
