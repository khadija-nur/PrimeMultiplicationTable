const primesMultiplication = require('../index')

    test("only N amount of numbers should be generated", () => {
        expect(primesMultiplication(5).length).toBe(5);
    });



