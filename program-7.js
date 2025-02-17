// Write a JavaScript program that creates a class `Book` with properties for title, author, and publication year. Include a method to display book details. Create a subclass called 'Ebook' that inherits from the 'Book' class and includes an additional property for book price. Override the display method to include the book price. Create an instance of the 'Ebook' class and display its details.

'use strict';
class Book {
    constructor(title, author, publicationYear) {
        if (typeof title !== 'string' || typeof author !== 'string' || typeof publicationYear !== 'number') {
            throw new Error("Title and author must be strings, publication year must be a number");
        }
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
    }

    displayDetails() {
        return "Title: " + this.title + ", Author: " + this.author + ", Publication Year: " + this.publicationYear;
    }
}

class Ebook extends Book {
    constructor(title, author, publicationYear, price) {
        super(title, author, publicationYear);
        if (typeof price !== 'number' || price <= 0) {
            throw new Error("Price must be a positive number");
        }
        this.price = price;
    }

    displayDetails() {
        return super.displayDetails() + ", Price: $" + this.price;
    }
}

const book = new Ebook("Shreemad Bhagavad Geeta", "Ved Vyasa", 3000, 10);
console.log(book.displayDetails());


