// Write a JavaScript program that creates a class called Product with properties for product ID, name, and price. Include a method to calculate the total price by multiplying the price by the quantity. Create a subclass called PersonalCareProduct that inherits from the Product class and adds an additional property for the warranty period. Override the total price calculation method to include the warranty period. Create an instance of the PersonalCareProduct class and calculate its total price.

'use strict';
class Product {
    constructor(productID, name, price) {
        this.productID = productID;
        this.name = name;
        this.price = price;
    }
    totalPrice(quantity) {
        let total = 0;
        for (let i = 0; i < quantity; i++) {
            total = total + this.price; 
        }
        return total;
    }
}

class PersonalCareProduct extends Product {
    constructor(productID, name, price, warrantyPeriod) {
        super(productID, name, price);
        this.warrantyPeriod = warrantyPeriod; 
    }
    totalPrice(quantity) {
        let total = super.totalPrice(quantity);
        return total + (this.warrantyPeriod * 10); 
    }
}

const product = new PersonalCareProduct(101, "perfume", 5, 2); 
console.log("Total Price:", product.totalPrice(3));
