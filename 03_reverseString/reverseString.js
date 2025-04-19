const reverseString = function(inputString) {
    let result = "";
    const stringArray = inputString.split("");
    for (i=stringArray.length-1; i>=0; i--) {
        result += stringArray[i];
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
