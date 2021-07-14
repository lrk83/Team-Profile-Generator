const { expect, test } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates an employee object', () =>{
    const employee = new Employee("Lukas","20037","lrk83@cornell.edu");
    
    expect(employee.name).toBe('Lukas');
    expect(employee.id).toBe('20037');
    expect(employee.email).toBe('lrk83@cornell.edu')
});

test("returns an employee's name", () =>{
    const employee = new Employee("Lukas","20037","lrk83@cornell.edu");

    let name = employee.getName();
    expect(name).toBe('Lukas');
});

test("returns an employee's ID number", () =>{
    const employee = new Employee("Lukas","20037","lrk83@cornell.edu");

    let id = employee.getID();
    expect(id).toBe('20037');
});

test("returns an employee's email", () =>{
    const employee = new Employee("Lukas","20037","lrk83@cornell.edu");

    let email = employee.getEmail();
    expect(email).toBe('lrk83@cornell.edu');
});

test("returns an employee's role", () =>{
    const employee = new Employee("Lukas","20037","lrk83@cornell.edu");

    let role = employee.getRole();
    expect(role).toBe('Employee');
});