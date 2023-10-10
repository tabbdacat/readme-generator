// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ##Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [Questions](#Questions)
  - [License](#license)

  ##Installation
  ${data.installation}

  ##Usage
  ${data.usage}

  ##Credits
  This application utilizes the following technologies:
  ${data.technologies}

  Contibutors:
  ${data.contributors}

  ##Questions
  Reach out to ${data.email} with any questions related to this application.
  GitHub Profile: https://github.com/${data.github}

  ##License
  ${data.license}
`;
}

module.exports = generateMarkdown;
