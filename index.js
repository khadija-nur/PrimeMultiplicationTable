const isPrime = require("./helpers/isPrime")
const validateInput = require("./helpers/validateInput")
const primesMultiplication = (n) => {
validateInput(n)
    let numbersArray = [];
    for (i = 1; n > numbersArray.length; i++ ) {
        if(isPrime(i)){
            numbersArray.push(i)
        }
    }
    console.log(numbersArray)
    return numbersArray;
}

console.log(primesMultiplication(5))
module.exports = primesMultiplication;
