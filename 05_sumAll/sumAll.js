const isNaturalNumber = function(number) {
    isNatural = true;
    if (!Number.isInteger(number)) {
        isNatural = false;
    } else if (number < 0) {
        isNatural = false;
    }
    return isNatural;
};

const sumAll = function(startNumber, endNumber) {
    let result = null;
    if (!isNaturalNumber(startNumber) || !isNaturalNumber(endNumber)) {
        result = "ERROR";
        return result;
    }

    const smallNumber = startNumber < endNumber ? startNumber : endNumber;
    const bigNumber = endNumber > startNumber ? endNumber : startNumber;
    result = 0;
    for (let i=smallNumber; i<=bigNumber; i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
