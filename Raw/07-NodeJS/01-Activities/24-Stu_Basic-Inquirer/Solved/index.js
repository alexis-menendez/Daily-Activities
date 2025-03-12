import inquirer from 'inquirer';
import colors from 'colors';

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What text would you like to log?',
      name: 'text',
    },
    {
      type: 'list',
      message: 'What color would you like to use?',
      name: 'color',
      choices: ['red', 'blue', 'green', 'yellow', 'cyan', 'magenta'],
    },
  ])
  .then((response) => console.log(colors[response.color](response.text)));
