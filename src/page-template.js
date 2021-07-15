const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("constants");
const Engineer= require("../lib/Engineer");
const Intern= require("../lib/Intern");
const Manager= require("../lib/Manager");

const generateManager = templateData => {
  let newManager = new Manager(templateData.managerName,templateData.managerID,templateData.managerEmail,templateData.managerOffice);
  return `
  <div class = "col-3">
  <div class="card border-dark mb-3">
  <div class="card-header"><h3>${newManager.getName()}</h3></div>
    <div class="card-body">
      <div class = "row">
      ${newManager.getEmail()}
      </div>
      <div class = "row">
      ${newManager.getID()}
      </div>
      <div class = "row">
      ${newManager.getOffice()}
            </div>
          </div>
        </div>
        </div>`
};

const generateTeamMembers = templateData => {
  let teamMembers = [];
  for (x=0;x<templateData.members.length;x++){
    let newMemberInfo = templateData.members[x];
    if (newMemberInfo.engineerName){
      let newEngineer = new Engineer(newMemberInfo.engineerName,newMemberInfo.engineerID,newMemberInfo.engineerEmail,newMemberInfo.engineerGitHub)
      teamMembers.push(newEngineer);
    } else {
      let newIntern = new Intern(newMemberInfo.internName,newMemberInfo.internID,newMemberInfo.internEmail,newMemberInfo.internSchool)
      teamMembers.push(newIntern);
    };
  };

  let cards = ``;

  for (x=0;x<teamMembers.length;x++){
    let htmlBlock = `
    <div class="col-3">
    <div class="card border-dark mb-3">
    <div class="card-header"><h3>${teamMembers[x].getName()}</h3></div>
      <div class="card-body">
        <div class = "row">
        ${teamMembers[x].getEmail()}
        </div>
        <div class = "row">
        ${teamMembers[x].getID()}
        </div>
        <div class = "row">`
      
    if (teamMembers[x].getRole()==="Engineer"){
      htmlBlock = htmlBlock+ `
            ${teamMembers[x].getGithub()}
            </div>
          </div>
        </div>
        </div>`
    } else {
      htmlBlock = htmlBlock+ `
            ${teamMembers[x].getSchool()}
            </div>
          </div>
        </div>
        </div>`
    }; 

    console.log("HTML block: "+htmlBlock);
    cards=cards+htmlBlock;

  };

  return cards;

};

const generatePage = templateData => {

    return `
    <!DOCTYPE html> 
    <html lang="en"> 
      
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Profile Example</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
    </head>

    <body>
      <header>
      <div class="jumbotron bg-light">
        <h1 class="display-4">My Team!</h1>
      </header>
    </body>
    <div class="container">
    <div class= "row d-flex justify-content-center">
      ${generateManager(templateData)}
      ${generateTeamMembers(templateData)}
    </div>
  </div>
    </html>
    `;
};

module.exports = generatePage;