const createMultiplicationTable = require('./helpers/createMultiplicationTable')
const createPrimes = require("./helpers/createPrimes")
const validateInput = require("./helpers/validateInput")
const primesMultiplication = (n) => {
if(validateInput(n) != "validation passed") {
    return validateInput(n)
}
const primesArray = createPrimes(n)
    return createMultiplicationTable(primesArray);
}





console.log(primesMultiplication(3))
console.log(primesMultiplication(1))
console.log(primesMultiplication(0))
console.log(primesMultiplication(-1))
module.exports = primesMultiplication;
