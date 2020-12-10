// const { describe } = require('yargs')
const { test } = require('@jest/globals');
const primesMultiplication = require('../index')

    // should be a number 
    // should be at least 1
    // should be a whole number
describe("validate user input N", () => {
    test("should be of type Number", () => {
        expect(primesMultiplication("string")).toBe("Please insert a number");
    });

    test("user input should be atleast 1", () => {
        expect(primesMultiplication(-1)).toBe("Please insert a value of at least 1");
    });
    test("check number is a whole number", () => {
        expect(primesMultiplication(1.2).toBe("Please insert a whole number"));

    })

});

