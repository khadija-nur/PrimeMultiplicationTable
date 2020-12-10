const primesMultiplication = (n) => {
    if (typeof(n) !== "number"){
        return "Please insert a number"
    };

    if (n < 1){
        return "Please insert a value of at least 1"
    }
    return typeof(n);

}
console.log(primesMultiplication(1))
module.exports = primesMultiplication;
