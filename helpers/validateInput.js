
module.exports = (num) =>{
    if (typeof(num) !== "number"){
        return "Please insert a number"
    };
    
    if (num < 1){
        return "Please insert a value of at least 1"
    }
    if (num % 1 != 0){
        console.log(num % 1)
        return "Please insert a whole number";
    }
    return "validation passed";
  }
