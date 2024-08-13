const repeatString = function(str, num) {
    let a = "";
    for(let i = 0; i < num; i ++) {
        a += str;
    }
    if (num  < 0) {
        return "ERROR";
    } else {
        return a;
    }
};

// Do not edit below this line
module.exports = repeatString;
