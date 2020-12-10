
const primesMultiplication = require('../index')
const isPrime = require("../isPrime")

    test("only N amount of numbers should be generated", () => {
        expect(primesMultiplication(5).length).toBe(5);
    });

    test("the first number should be 2", () => {
        expect(primesMultiplication(5)[0]).toBe(2);
    });

    test("the numbers returned should be prime", () => {
        expect(isPrime(primesMultiplication(5)[0])).toBe(true);
    });


