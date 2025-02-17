// Write a JavaScript program that creates a class called 'Animal' with properties for species and sound. Include a method to make the animal's sound. Create a subclass called 'Dog' that inherits from the 'Animal' class and adds an additional property for color. Override the make sound method to include the dog's color. Create an instance of the 'Dog' class and make it make its sound.

'use strict';
class Animal {
    constructor(species, sound) {
        if (typeof species !== 'string' || typeof sound !== 'string') {
            throw new Error('Both species and sound must be strings');
        }
        this.species = species;
        this.sound = sound;
    }

    makeSound() {
        return `The ${this.species} makes a '${this.sound}' sound.`;
    }
}

class Dog extends Animal {
    constructor(species, sound, color) {
        if (typeof color !== 'string') {
            throw new Error('Color must be a string');
        }
        super(species, sound);
        this.color = color;
    }

    makeSound() {
        return `The ${this.color} ${this.species} barking like '${this.sound}'.`;
    }
}

const dog = new Dog("Bulldog", "Ruff Ruff", "Brown");
console.log(dog.makeSound());


