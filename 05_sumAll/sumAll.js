const sumAll = function(one, two) {
    if (typeof one !== 'number' || typeof two !== 'number' || one < 0 || two < 0) {
        return 'ERROR'
    } else {
        if (one > two) {
            let sum = two;
            for (i = two; i < one; i++) {
                sum += two + i
            }
            return sum;
        } else {
            let sum = one;
            for (i = one; i < two; i++) {
                sum += one + i
            }
            return sum;
        }
    }
};

// Do not edit below this line
module.exports = sumAll;
