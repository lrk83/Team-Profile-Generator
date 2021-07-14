const generatePage = require('./src/page-template');
const writeFile = require("./src/generate-site.js");
const {promptUser, promptMember} = require("./src/prompts.js");

promptUser()
  .then(promptMember)
  .then(teamData => {
    return generatePage(teamData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
  });