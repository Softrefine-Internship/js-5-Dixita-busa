// Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. Override the display method to include the number of doors.

'use strict';
class Vehicle {
  constructor(make, model, year) {
    if (typeof make !== 'string' || typeof model !== 'string' || typeof year !== 'number') {
      throw new Error("Make and model must be strings, year must be a number");
    }
    this.make = make;
    this.model = model;
    this.year = year;
  }

  displayDetails() {
    console.log("Make: " + this.make + ", Model: " + this.model + ", Year: " + this.year);
  }
}

class Car extends Vehicle {
  constructor(make, model, year, doors) {
    super(make, model, year);
    if (typeof doors !== 'number' || doors <= 0) {
      throw new Error("Doors must be a positive number");
    }
    this.doors = doors;
  }

  displayDetails() {
    super.displayDetails();
    console.log("Doors: " , this.doors);
  }
}

const car = new Car("Rolls-Royce", "Phantom", 2025, 4);
car.displayDetails();

