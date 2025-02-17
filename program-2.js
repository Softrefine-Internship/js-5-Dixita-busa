//  Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.

'use strict';
class Rectangle {
  constructor(width, height) {
    if (typeof width !== 'number' || typeof height !== 'number' || width <= 0 || height <= 0) {
      throw new Error("Width and height must be positive numbers");
    }
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }

  calculatePerimeter() {
    return 2 * (this.width + this.height);
  }
}

const rectangle = new Rectangle(12, 8);
console.log("Area : " + rectangle.calculateArea());
console.log("Perimeter : " + rectangle.calculatePerimeter());

