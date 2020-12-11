
const primesMultiplication = require('../index')
const isPrime = require("../helpers/isPrime")

    test("only N amount of numbers should be generated", () => {
        expect(primesMultiplication(5).length).toBe(5);
        expect(primesMultiplication(11).length).toBe(24;
        expect(primesMultiplication(24).length).toBe(11);

    });

    test("the first number should be 2", () => {
        expect(primesMultiplication(5)[0]).toBe(2);
    });

    test("the first number returned in the array should be prime", () => {
        expect(isPrime(primesMultiplication(5)[0])).toBe(true);
    });


