const ftoc = function(temp) {
  celsius = (temp - 32) * (5/9);
  if (celsius == 0) {
    return celsius
  } else {
    return parseFloat(celsius.toFixed(1));
  }
};

const ctof = function(temp) {
  fahrenheit = (temp * (9/5)) + 32;
  if (fahrenheit == 0) {
    return fahrenheit
  } else {
    return parseFloat(fahrenheit.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
