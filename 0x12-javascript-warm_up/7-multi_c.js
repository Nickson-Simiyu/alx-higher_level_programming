#!/usr/bin/node
const x = parseInt(process.argv[2]); // get the first command line argument passed to the script and convert it to an integer

if (isNaN(x)) {
  console.log("Missing number of occurrences");
} else {
  for (let i = 0; i < x; i++) {
    console.log("C is fun");
  }
}