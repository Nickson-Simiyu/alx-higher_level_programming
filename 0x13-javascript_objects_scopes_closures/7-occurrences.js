#!usr/bin/node
exports.nbOccurences = function (list, searchElement) {
  // Initialize a variable to keep track of the count of occurrences
  let count = 0;

  // Loop through the list using a for...of loop
  for (const element of list) {
    // If the current element matches the search element, increment the count
    if (element === searchElement) {
      count++;
    }
  }

  // Return the count of occurrences
  return count;
};
