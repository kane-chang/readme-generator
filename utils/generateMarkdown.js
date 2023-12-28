// function to generate markdown for README
function generateMarkdown(data) {
  let licenseBadge = ''
  let licenseURL = ''
  switch (data.license) {
    case 'APACHE 2.0':
      licenseBadge = 'APACHE%202.0'
      licenseURL = 'https://www.apache.org/licenses/LICENSE-2.0'
      break;
    case 'GPL 3.0':
      licenseBadge = 'GPL%203.0'
      licenseURL = 'https://www.gnu.org/licenses/gpl-3.0.en.html'
      break;
    case 'BSD 3':
      licenseBadge = 'BSD%203'
      licenseURL = 'https://opensource.org/license/bsd-3-clause/'
      break;  
    case 'MIT':
      licenseBadge = 'MIT'
      licenseURL = 'https://choosealicense.com/licenses/mit/'
      break;  
    default:
      licenseBadge = data.license
      break;
  }
  // } (data.license == 'APACHE 2.0') {
  //   const licenseURL = 'APACHE%202.0'
  // } else if ()
  return `# ${data.projectName}

  ![Static Badge](https://img.shields.io/badge/license-${licenseBadge}-blue)
  
  ${data.description}
  
  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Contributing](#contributing)
  4. [License](#license)
  5. [Questions](#questions)
  
  ## Installation
  
  To install necessary dependencies, run the following command:
  
  \`\`\`bash

  ${data.installCommand}

  \`\`\`
  
  ## Usage
  
  ${data.usage}
  
  To run tests, run the following command:
  
  \`\`\`bash
  ${data.testCommand}
  \`\`\`
  
  ## Contributing
  
  ${data.contribution}
  
  ## License
  
  The license is: [${data.license}](${licenseURL})
  
  ## Questions
  
  To get in touch, contact me at [${data.email}](${data.email}). You can find my other works at [${data.username}](https://github.com/${data.username})
`;
}

module.exports = generateMarkdown;
