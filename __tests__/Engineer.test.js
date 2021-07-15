const { expect, test } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('creates an engineer object', () =>{
    const engineer = new Engineer("Lukas","20037","lrk83@cornell.edu","lrk83");
    
    expect(engineer.name).toBe('Lukas');
    expect(engineer.id).toBe('20037');
    expect(engineer.email).toBe('lrk83@cornell.edu');
    expect(engineer.gitHub).toBe('lrk83');
});

test("returns an engineer's role", () =>{
    const engineer = new Engineer("Lukas","20037","lrk83@cornell.edu","lrk83");

    let role = engineer.getRole();
    expect(role).toBe('Engineer');
});

test("returns an engineer's gitHub username", () =>{
    const engineer = new Engineer("Lukas","20037","lrk83@cornell.edu","lrk83");

    let github = engineer.getGithub();
    expect(github).toBe('lrk83');
});