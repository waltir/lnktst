const add = (a, b) => a + b;

const generateGreeting = (name) => `Hello ${name}!`;

test('Name should be Mike', () => {
    const result = generateGreeting('Mike');
    expect(result).toBe('Hello Mike!');
    // if (name === 'Mike'){
    //     expect(name).toBe('Mike');
    //     console.log(generateGreeting);
    // } else {
    //     throw new Error(`Woah nelly - this isn't Mike! We got ${name}`)
    // }
});

test('should add two numbers', () => {
    const result = add (3, 4);
    expect(result).toBe(7);
});