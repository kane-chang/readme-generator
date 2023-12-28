// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}

  ![Static Badge](https://img.shields.io/badge/license-MIT-blue)
  
  ${data.description}
  
  ## Table of Contents
  1. [Installation](#Installation)
  2. [Usage](#Usage)
  3. [Contributing](#Contributing)
  4. [License](#License)
  
  
  ## Installation
  
  To install necessary dependencies, run the following command:
  
  \`\`\`bash

  ${data.installCommand}

  \`\`\`
  
  ## Usage
  
  ${data.usage}
  
  To run tests, run the following command:
  
  \`\`\`bash
  ${data.installCommand}
  \`\`\`
  
  ## Contributing
  
  ${data.contribution}
  
  ## License
  
  [MIT](https://choosealicense.com/licenses/mit/)
  
  ## Questions
  
  To get in touch, contact me at ${data.email}. You can find my other works at [${data.username}](https://github.com/${data.username})
`;
}

module.exports = generateMarkdown;
