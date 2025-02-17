// Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details.

'use strict';
class Person {
  constructor(name, age, country) {
    if (typeof name !== 'string' || typeof country !== 'string') {
      throw new Error("Name and country must be strings");
    }
    if (typeof age !== 'number' || age < 0) {
      throw new Error("Age must be a positive number");
    }
    this.name = name;
    this.age = age;
    this.country = country;
  }

  personsDetails() {
    console.log("Name: " + this.name + ", Age: " + this.age + ", Country: " + this.country);
  }
}

const person1 = new Person("Dixita", 20, "India");
person1.personsDetails();

const person2 = new Person("Nirmi", 22, "Canada");
person2.personsDetails();

