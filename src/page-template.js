const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("constants");
const Engineer= require("../lib/Engineer");
const Intern= require("../lib/Intern");
const Manager= require("../lib/Manager");

const generateManager = templateData => {
  let newManager = new Manager(templateData.managerName,templateData.managerID,templateData.managerEmail,templateData.managerOffice);
  return `
  <div class = "col-4">
  <div class="card border-dark mb-3">
  <div class="card-header"><h3>${newManager.getName()}</h3> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cup" viewBox="0 0 16 16">
  <path d="M1 2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1h.5A1.5 1.5 0 0 1 16 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-.55a2.5 2.5 0 0 1-2.45 2h-8A2.5 2.5 0 0 1 1 12.5V2zm13 10h.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H14v8zM13 2H2v10.5A1.5 1.5 0 0 0 3.5 14h8a1.5 1.5 0 0 0 1.5-1.5V2z"/>
</svg> </div>
    <div class="card-body bg-light">
      <div class = "row bg-white">
      email: <a href="mailto:${newManager.getEmail()}">${newManager.getEmail()}</a>
      </div>
      <div class = "row bg-white">
      ID number: ${newManager.getID()}
      </div>
      <div class = "row bg-white">
      Office number: ${newManager.getOffice()}
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
      let newEngineer = new Engineer(newMemberInfo.engineerName,newMemberInfo.engineerID,newMemberInfo.engineerEmail,newMemberInfo.engineerGithub)
      teamMembers.push(newEngineer);
    } else {
      let newIntern = new Intern(newMemberInfo.internName,newMemberInfo.internID,newMemberInfo.internEmail,newMemberInfo.internSchool)
      teamMembers.push(newIntern);
    };
  };

  let cards = ``;

  for (x=0;x<teamMembers.length;x++){
    let htmlBlock = `
    <div class="col-4">
    <div class="card border-dark mb-3">
    <div class="card-header"><h3>${teamMembers[x].getName()}</h3>`
    
    if (teamMembers[x].getRole==="Engineer"){
      console.log(teamMembers[x]);
      htmlBlock=htmlBlock+`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyeglasses" viewBox="0 0 16 16">
      <path d="M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A1.993 1.993 0 0 0 8 6c-.532 0-1.016.208-1.375.547zM14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
    </svg>`;
    } else {
      htmlBlock = htmlBlock + `<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-award-fill' viewBox='0 0 16 16'>
      <path d='m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z'/>
      <path d='M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794'/>
    </svg>`;
    };

    htmlBlock=htmlBlock+`</div>
      <div class="card-body bg-light">
        <div class = "row bg-white">
        email: <a href="mailto:${teamMembers[x].getEmail()}">${teamMembers[x].getEmail()}</a>
        </div>
        <div class = "row bg-white">
        ID number: ${teamMembers[x].getID()}
        </div>
        <div class = "row bg-white">`;
      
    if (teamMembers[x].getRole()==="Engineer"){
      htmlBlock = htmlBlock+ `
            github account: <a href="github.com/${teamMembers[x].getGithub()}" target="_blank">${teamMembers[x].getGithub()}</a>
            </div>
          </div>
        </div>
        </div>`
      console.log(htmlBlock);
    } else {
      htmlBlock = htmlBlock+ `
            school: ${teamMembers[x].getSchool()}
            </div>
          </div>
        </div>
        </div>`
    }; 
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
      <div class = "container header-container">
      <header>
        <div class="jumbotron bg-light">
          <h1 class="display-4">My Team!</h1>
        </header>
      </div>
      <div class="container">
        <div class= "row d-flex justify-content-center myflexrow">
          ${generateManager(templateData)}
          ${generateTeamMembers(templateData)}
        </div>
      </div>
  </body>
  </html>`;
};

module.exports = generatePage;