const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();

    const oldestPerson = people.reduce(
        (accumulation, item) => {
            if (item.yearOfDeath === undefined) {
                item.yearOfDeath = currentYear;
            }
            const currentHighestAge = accumulation.yearOfDeath - accumulation.yearOfBirth;
            const newAge = item.yearOfDeath - item.yearOfBirth;
            let result = accumulation;
            if (newAge > currentHighestAge) {
                result = item;
            }
            return result;
        },
        {
            yearOfDeath: currentYear,
            yearOfBirth: currentYear
        } // Initial value
    );

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
