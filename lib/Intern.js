const Employee = require("../lib/Employee");

function Intern(name, id, email, school) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
};

Intern.prototype = Object.create(Employee.prototype);

Intern.prototype.getSchool = function() {
    return this.school;
};

Intern.prototype.getRole = function() {
    return "Intern";
};

module.exports = Intern;