const getTheTitles = function(bookList) {
    newArray = [];
    for (i = 0; i < bookList.length; i++) {
        newArray.push(bookList[i].title);
    }
    
    return newArray
};

// Do not edit below this line
module.exports = getTheTitles;
