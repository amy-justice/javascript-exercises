const findTheOldest = function(people) {
    let oldest;
    let ages = [];
    for (i = 0; i < people.length; i++) {
        if (people[i].yearOfDeath) {
            let age = people[i].yearOfDeath - people[i].yearOfBirth;
            ages.push(age);
        } else {
            const date = new Date();
            currentYear = date.getFullYear();
            let age = currentYear - people[i].yearOfBirth;
            ages.push(age)
        }
    }
    maxAge = Math.max(...ages);
    oldestIndex = ages.indexOf(maxAge);
    oldest = people[oldestIndex]
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
