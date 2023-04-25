#!/usr/bin/node
const Rectangle = require('./4-rectangle');

class Square extends Rectangle { // defines a square and inherits from Rectangle
  constructor (size) {
    super(size, size); // call the constructor of the Rectangle class with size as both arguments
  }
}

module.exports = Square;
