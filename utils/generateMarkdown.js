// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "none") {
    return "";
  }
  return `![GitHub License](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`;
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "none") {
    return "";
  }
  if (license === "MIT") {
    return "https://choosealicense.com/licenses/mit/";
  }
  if (license === "GNU GPLv3") {
    return "https://choosealicense.com/licenses/gpl-3.0/";
  }
  if (license === "Apache 2.0") {
    return "https://choosealicense.com/licenses/apache-2.0/";
  }
  if (license === "ISC") {
    return "https://choosealicense.com/licenses/isc/";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License](#license)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  This application utilizes the following technologies:
  ${data.technologies}

  Contributors:
  ${data.contributors}

  ## Tests
  ${data.tests}

  ## Questions
  Please reach out with any additional questions related to this application.
  Email: ${data.email} 
  GitHub Profile: https://github.com/${data.github}

  ## License
  This project is licensed under the terms of the ${data.license} licence.
  ${renderLicenseLink(data.license)}
`;
}

module.exports = generateMarkdown;
