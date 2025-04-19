const removeFromArray = function(inputArray, ...args) {
    for (const currentArg of args) {
        let noCoincidences = false;
        do {
            const indexFound = inputArray.indexOf(currentArg);
            if (indexFound === -1) {
                noCoincidences = true;
            } else {
                inputArray.splice(indexFound, 1);
            }
        } while (!noCoincidences);
    }
    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
