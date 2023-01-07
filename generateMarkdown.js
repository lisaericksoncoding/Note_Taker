// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return ``;
  }
  else {
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)](${renderLicenseLink(license)})`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `cd`
  }
  if (license === 'GPLv3') {
    return `https://www.gnu.org/licenses/gpl-3.0`
  }
  if (license === 'None') {
    return ``
  }
  else {
     (!license)
      return ``;
    }
  }



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ``;
  }
  if (license === 'None') {
    return ``;
  }
  else {
    return `This project is covered under the ${license} license. To learn more, click the license button at the top.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Questions](#questions)

## Description 
  ${data.description}
  [Video of Application]()

  ## Installation
  ${data.installation}

  ## Usage
 ${data.usage}

  ## Credits
  ${data.credits}

  ## License
  ${renderLicenseSection(data.license)}

  ## Questions 
  Email me with any questions or feedback @ ${data.email} or find me on github @ [${data.github}](https://github.com/${data.github})`

}

module.exports = generateMarkdown;
