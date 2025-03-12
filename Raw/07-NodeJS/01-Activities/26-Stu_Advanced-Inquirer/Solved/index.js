import inquirer from 'inquirer';
import colors from 'colors';
import fs from 'fs';

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: colors.brightMagenta('What is your name?'),
    },
    {
      type: 'checkbox',
      message: colors.brightMagenta('What languages do you know?'),
      name: 'stack',
      choices: ['HTML', 'CSS', 'JavaScript', 'PostgreSQL'],
    },
    {
      type: 'list',
      message: colors.brightMagenta(
        'What is your preferred method of communication?'
      ),
      name: 'contact',
      choices: ['email', 'phone', 'telekinesis'],
    },
  ])
  .then((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
