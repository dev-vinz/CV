/* tslint:disable */
// @ts-nocheck
const { writeFile } = require('fs');
const { argv } = require('yargs');

require('dotenv').config();
const environment = argv.environment;

function writeFileUsingFS(targetPath, environmentFileContent) {
  writeFile(targetPath, environmentFileContent, function (err) {
    if (err) {
      console.log(err);
    }
    if (environmentFileContent !== '') {
      console.log(`Wrote variables to ${targetPath}`);
    }
  });
}

// Checks whether command line argument of `prod` was provided signifying production mode
const isProduction = environment === 'production';

// Choose the correct targetPath based on the environment chosen
const targetPath = './src/environments/environment.final.ts';

// Actual content to be compiled dynamically and pasted into respective environment files
const environmentFileContent = `export const environment = {
    production: ${isProduction},
    TOKEN_GITHUB_API: '${process.env.TOKEN_GITHUB_API}'
  };
`;

writeFileUsingFS(targetPath, environmentFileContent);

/* tslint:enable */
