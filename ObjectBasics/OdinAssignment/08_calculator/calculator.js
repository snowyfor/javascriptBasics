const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	//if(arr.length == 0) return 0; replaced by '0' in reduce second parameter
  return arr.reduce((total, num) => total + num, 0);
};

const multiply = function(arr) {
  if(arr.length == 0) return 0;
  return arr.reduce((total, num) => total * num);
};

const power = function(a, b) {
  // shortcut: return Math.pow(a,b);
  let result = 1;
	for(let i = 0; i < b; i++) {
    result *= a;
  }
  return result;
};

const factorial = function(num) {
	if(num === 0) return 1
  let result = 1;
  for(let i = num; i > 0; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
