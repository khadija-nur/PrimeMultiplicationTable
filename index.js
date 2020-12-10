const primesMultiplication = (n) => {
    if (typeof(n) !== "number"){
        return "Please insert a number"
    };

    if (n < 1){
        return "Please insert a value of at least 1"
    }
    if (n % 1 != 0){
        console.log(n % 1)
        return "Please insert a whole number";
    }
    let numbersArray = [];
    for (i = 1; i <= n; i++ ) {
        numbersArray.push(i)
    }
    console.log(numbersArray)
    return numbersArray;
}
console.log(primesMultiplication(1))
module.exports = primesMultiplication;
