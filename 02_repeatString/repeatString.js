const repeatString = function(string, num) {
    finalString = '';
    for (i = 0; i < num; i++) {
        finalString = finalString.concat(string)
    }
    if (num < 0) {
        finalString = 'ERROR'
    }
    return finalString
};

// Do not edit below this line
module.exports = repeatString;
