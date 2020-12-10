const primesMultiplication = require('../index')

    test("only N amount of numbers should be generated", () => {
        expect(primesMultiplication(5).length).toBe(5);
    });

    test("the first number should be 2", () => {
        expect(primesMultiplication(5)[0]).toBe(2);
    });




