const { expect, test } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('creates an intern object', () =>{
    const intern = new Intern("Lukas","20037","lrk83@cornell.edu","Cornell");
    
    expect(intern.name).toBe('Lukas');
    expect(intern.id).toBe('20037');
    expect(intern.email).toBe('lrk83@cornell.edu');
    expect(intern.school).toBe('Cornell');
});

test("returns an intern's role", () =>{
    const intern = new Intern("Lukas","20037","lrk83@cornell.edu","Cornell");

    let role = intern.getRole();
    expect(role).toBe('Intern');
});

test("returns an intern's school", () =>{
    const intern = new Intern("Lukas","20037","lrk83@cornell.edu","Cornell");

    let school = intern.getSchool();
    expect(school).toBe('Cornell');
});