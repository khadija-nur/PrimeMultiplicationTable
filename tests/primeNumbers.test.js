// const { describe } = require('yargs')
const primesMultiplication = require('../index')

    // should be a number 
    // should be at least 1
    // should be a whole number
    // 
    test("should be of type Number", () => {
        expect(primesMultiplication(2)).toBe("number");
    })
