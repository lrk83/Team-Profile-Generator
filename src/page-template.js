const Engineer= require("../lib/Engineer");
const Intern= require("../lib/Intern");
const Manager= require("../lib/Manager");
const Employee = require("../lib/Employee");

const generatePage = templateData => {

  let manager = new Employee(templateData.managerName, templateData.managerID, templateData.mangerEmail, templateData.managerOffice);

  members = [];
  for (x=0;x<templateData.members.length;x++){
    let member = templateData.members[x]
    if (member.engineerName){
      let engineer = new Employee(member.engineerName, member.engineerID, member.engineerGithub);
      members.push(engineer);
    } else{
      let intern = new Employee(member.internName, member.internID, member.internSchool);
      members.push(intern);
    }
  };

    console.log(templateData);

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
      <div class= "col-12">
        <div class="card border-dark mb-3">
          <div class="card-header"><h3>${manager.getName()}</h3></div>
            <div class="card-body">
              <div class = "row">
              ${manager.getEmail()}
              </div>
              <div class = "row">
              ${manager.getID()}
              </div>
              <div class = "row">
              ${manager.getOfficeNumber()}
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
    </html>
    `;
};

module.exports = generatePage;