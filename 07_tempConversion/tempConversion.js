const roundOneDecimal = function(number) {
  let result = Math.round(number*10)/10;
  return result;
};

const convertToCelsius = function(inputTemp) {
  let result = (inputTemp - 32) * 5/9;
  result = roundOneDecimal(result);
  return result;
};

const convertToFahrenheit = function(inputTemp) {
  let result = inputTemp * 9/5 + 32;
  result = roundOneDecimal(result);
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
