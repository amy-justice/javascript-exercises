const removeFromArray = function(array, ...remove) {
    let newArray = array;
    for (i = 0; i < remove.length; i ++){
        let toRemove = newArray.indexOf(remove[i]);
        if (toRemove > -1) {
            newArray.splice(toRemove, 1)
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
