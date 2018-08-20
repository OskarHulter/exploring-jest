const functions = require('./functions');

// toBe - used for primitives
test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
});

// toEqual - used for reference types
test('User should be Oskar Hulter object', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Oskar',
        lastName: 'Hulter'
    });
});

// less & greater than
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
});

// Regex
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/);
});

// Arrays
test('admin shoud be in usernames', () => {
    usernames = ['John', 'Karen', 'Admin'];
    expect(usernames).toContain('Admin');
});
