const createMultiplicationTable = require('./helpers/createMultiplicationTable')
const isPrime = require("./helpers/isPrime")
const validateInput = require("./helpers/validateInput")
const primesMultiplication = (n) => {
if(validateInput(n) != "validation passed") {
    return validateInput(n)
}
    let numbersArray = [];
    for (i = 1; n > numbersArray.length; i++ ) {
        if(isPrime(i)){
            numbersArray.push(i)
        }
    }
    return createMultiplicationTable(numbersArray);
}





console.log(primesMultiplication("hello"))
console.log(primesMultiplication(3))
module.exports = primesMultiplication;
