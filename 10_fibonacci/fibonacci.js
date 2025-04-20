const fibonacci = function(index) {
    let result = 0;
    let curatedIndex = Number(index);
    if (curatedIndex < 0) {
        result = "OOPS";
        return result;
    }

    let fibonacciSequence = [1, 1];
    for (let i=2; i<index; i++) {
        fibonacciSequence.push(
            fibonacciSequence[fibonacciSequence.length-1] + fibonacciSequence[fibonacciSequence.length-2]
        );
    }
    if (curatedIndex > 0) {
        result = fibonacciSequence[fibonacciSequence.length-1];
    }
    return result;
};

// Do not edit below this line
module.exports = fibonacci;
