const { expect, test } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('creates a manager object', () =>{
    const manager = new Manager("Lukas","20037","lrk83@cornell.edu","Room 15");
    
    expect(manager.name).toBe('Lukas');
    expect(manager.id).toBe('20037');
    expect(manager.email).toBe('lrk83@cornell.edu');
    expect(manager.officeNumber).toBe('Room 15');
});

test("returns a manager's role", () =>{
    const manager = new Manager("Lukas","20037","lrk83@cornell.edu","Room 15");

    let role = manager.getRole();
    expect(role).toBe('Manager');
});

test("returns a manager's office number", () =>{
    const manager = new Manager("Lukas","20037","lrk83@cornell.edu","Room 15");

    let office = manager.getOffice();
    expect(office).toBe('Room 15');
});