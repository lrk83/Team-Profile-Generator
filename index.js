const inquirer = require('inquirer');
const generatePage = require('./src/page-template');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "What is the team manager's name?",
            validate: managerNameInput => {
                if (managerNameInput) {
                    return true;
                }else {
                    console.log('Please enter a name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerID',
            message: "please enter the team manager's employee ID",
            validate: managerIDInput => {
                if (managerIDInput) {
                    return true;
                }else {
                    console.log('Please enter and ID number!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "please enter the team manager's email",
            validate: managerEmailInput => {
                if (managerEmailInput) {
                    return true;
                }else {
                    console.log('Please enter an email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerOffice',
            message: "please enter the team manager's office number",
            validate: managerOfficeInput => {
                if (managerOfficeInput) {
                    return true;
                }else {
                    console.log('Please enter an office number!');
                    return false;
                }
            }
        }
    ]);
};

const promptProject = teamData => {
    console.log(`
    =================
    Add A New Member to the Team
    =================
    `);
    if (!teamData.members){
        teamData.members=[];
    };
        return inquirer.prompt([
            {
                type: 'list',
                name: 'type',
                message: 'Would you like to add an engineer or an intern to the team?',
                choices = ["engineer","intern"]
            }]).then(memberChoice =>{
                if (memberChoice.type==="engineer"){
                    return inquirer.prompt([
                        {
                            type: 'input',
                            name: 'engineerName',
                            message: "please enter the engineer's name",
                            validate: engineerNameInput => {
                                if (engineerNameInput) {
                                    return true;
                                }else {
                                    console.log("Please enter the engineer's name!");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'engineerID',
                            message: "please enter the engineer's ID number",
                            validate: engineerIDInput => {
                                if (engineerIDInput) {
                                    return true;
                                }else {
                                    console.log('Please enter an ID number!');
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'engineerEmail',
                            message: "please enter the engineer's email",
                            validate: engineerEmailInput => {
                                if (engineerEmailInput) {
                                    return true;
                                }else {
                                    console.log('Please enter an email!');
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'engineerGithub',
                            message: "please enter the engineer's github username",
                            validate: engineerGithubInput => {
                                if (engineerGithubInput) {
                                    return true;
                                }else {
                                    console.log('Please enter a username!');
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'confirm',
                            name: 'confirmAddProject',
                            message: 'Would you like to enter another project?',
                            default: false
                        }
                    ])
                }else {
                    return inquirer.prompt([
                        {
                            type: 'input',
                            name: 'internName',
                            message: "please enter the intern's name",
                            validate: internNameInput => {
                                if (internNameInput) {
                                    return true;
                                }else {
                                    console.log("Please enter the intern's name!");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'internID',
                            message: "please enter the intern's ID number",
                            validate: internIDInput => {
                                if (internIDInput) {
                                    return true;
                                }else {
                                    console.log('Please enter an ID number!');
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'internEmail',
                            message: "please enter the intern's email",
                            validate: internEmailInput => {
                                if (internEmailInput) {
                                    return true;
                                }else {
                                    console.log('Please enter an email!');
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'internSchool',
                            message: "please enter the intern's school",
                            validate: internSchoolInput => {
                                if (internSchoolInput) {
                                    return true;
                                }else {
                                    console.log('Please enter a school!');
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'confirm',
                            name: 'confirmAddProject',
                            message: 'Would you like to enter another project?',
                            default: false
                        }
                    ])
                }
            }).then(memberData => {
            teamData.members.push(memberData);
            if (memberData.confirmAddProject){
                return promptProject(teamData);
            }else{
                return teamData;
            }
        });
};

promptUser()
  .then(promptProject)
  .then(teamData => {
    return generatePage(teamData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });