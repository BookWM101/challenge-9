const inquirer = require('inquirer');
const fs = require('fs');

// Questions to gather info for README
const questions = [
  {
    type: 'input',
    name: 'projectTitle',
    message: "What's the title of your project?",
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation steps?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How do you use the project? / Usage?',
  },
  {
    type: 'input',
    name: 'testing',
    message: 'How do you test the project?',
  },
  {
    type: 'input',
    name: 'contributors',
    message: 'Who contributed to your project?',
  },
  {
    type: 'input',
    name: 'license',
    message: 'What license did you use?',
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: "What's your GitHub username?",
  },
  {
    type: 'input',
    name: 'email',
    message: "What's your email address?",
  },
];

// Generate README content
const generateREADME = (answers) => `
# ${answers.projectTitle}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Contributors](#contributors)
- [License](#license)
- [Questions](#questions)

## Description
${answers.description}

## Installation
\`\`\`
${answers.installation}
\`\`\`

## Usage
${answers.usage}

## Testing
${answers.testing}

## Contributors
${answers.contributors}

## License
This project is licensed under the ${answers.license} license.

## Questions
If you have any questions, feel free to reach out:
- GitHub: [${answers.githubUsername}](https://github.com/${answers.githubUsername})
- Email: ${answers.email}
`;

// To Run App
inquirer.prompt(questions).then((answers) => {
  const readmeContent = generateREADME(answers);

  // To Write it into a README file
  fs.writeFileSync('README.md', readmeContent);
  console.log('README.md has been created successfully!');
});
