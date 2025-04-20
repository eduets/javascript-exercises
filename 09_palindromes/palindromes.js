const palindromes = function (str) {
    let isPlaindrome = false;
    const cleanInputArray = str.match(/[a-zA-Z0-9]/g);
    const cleanInput = cleanInputArray.join("").toLowerCase();
    const cleanReverse = cleanInput.split("").reverse().join("");
    if (cleanInput === cleanReverse) {
        isPlaindrome = true;
    }
    return isPlaindrome;
};

// Do not edit below this line
module.exports = palindromes;
