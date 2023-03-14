#!/usr/bin/node
exports.converter = function (base) {
  // Use recursion to convert the number to the desired base
  return function convert (number) {
    // Base case: if the number is 0, return an empty string
    if (number === 0) return '';

    // Recursive case: divide the number by the base and pass the quotient to the next recursive call
    // The remainder is used to construct the final output string
    return convert(Math.floor(number / base)) + (number % base);
  };
};
