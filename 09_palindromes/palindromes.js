const palindromes = function (string) {
    string = string.toLowerCase().replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g, "");
    stringArray = string.split('');
    trimString = stringArray.filter((i) => String(i).trim())
    orderString = trimString.join("");
    console.log(orderString)
    reverseString = trimString.reverse().join("");
    console.log(reverseString)
    if (orderString === reverseString) {
        return true 
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;

palindromes("I'm Amy")
