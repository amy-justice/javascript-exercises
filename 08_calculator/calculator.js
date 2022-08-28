const add = function(one, two) {
	return one + two;
};

const subtract = function(one, two) {
	return one - two;
};

const sum = function(array) {
  let totalSum = 0;
  if (array) {
    for (i = 0; i < array.length; i++) {
      totalSum += array[i]
    }
  }
  return totalSum;
};

const multiply = function(array) {
  let total = array[0];
  for (i = 1; i < array.length; i++) {
    total *= array[i];
  }
  return total;
};

const power = function(one, two) {
	return one ** two;
};

const factorial = function(number) {
  factor = 1;
	if (number == 0 || number == 1) {
    return factor;
  } else {
    for (i = number; i >= 1; i--) {
      factor *= number
      number--
    }
  }
  return factor
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

multiply([2,4])
