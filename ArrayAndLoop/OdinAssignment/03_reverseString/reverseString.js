const reverseString = function(string) {
    const reversed = string.split('').reverse().join('');
    return reversed;

    /*
    // Convert the string to an array
    const strArray = str.split('');
    
    // Reverse the array
    const reversedArray = strArray.reverse();
    
    // Join the array back into a string
    const reversedString = reversedArray.join('');
    
    return reversedString;
    */
};

// Do not edit below this line
module.exports = reverseString;
