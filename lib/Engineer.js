const Employee = require("../lib/Employee");

function Engineer(name, id, email, gitHub) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.gitHub = gitHub;
};

Engineer.prototype = Object.create(Employee.prototype);

Engineer.prototype.getGithub = function() {
    return this.gitHub;
};

Engineer.prototype.getRole = function() {
    return "Engineer";
};

module.exports = Engineer;