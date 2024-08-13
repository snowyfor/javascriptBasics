const fibonacci = function(input) {
    // checks argument's type and makes sure we use 
    // a number throughout rest of function.
    let num;
    if (typeof input !== 'number') {
        num = parseInt(input);
    } else {
        num = input;
    }

    if (num === 0) return 0;
    if (num < 0) return "OOPS";

    let firstPrev = 1;
    let secondPrev = 0;
    for(let i = 2; i <= num; i++) {
        let current = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = current;
    }
    return firstPrev;
};

// Another way to do it is by using an iterative approach with an array containing two values, 0 and 1.
// const fib = [0, 1];
// for (let i = 2; i <= num; i++) {
//    fib[i] = fib[i - 1] + fib[i - 2];
// }
// return fib[num];

// Do not edit below this line
module.exports = fibonacci;
