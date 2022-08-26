const reverseString = function(string) {
    let stringArray = string.split('');
    let newString = stringArray.reverse();
    return newString.join('');
};

// Do not edit below this line
module.exports = reverseString;
