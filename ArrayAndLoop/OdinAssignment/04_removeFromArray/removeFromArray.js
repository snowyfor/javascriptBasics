const removeFromArray = function(arr, ...args) {
    // SEE THE SOLUTION(easy to understand)!!!
    return arr.filter(element => !args.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
