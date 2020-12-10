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
    return typeof(n);

}
console.log(primesMultiplication(1))
module.exports = primesMultiplication;
