// Write a JavaScript program that creates a class called BankAccount with properties for account number, account holder name, and balance. Include methods to deposit, withdraw, and transfer money between accounts. Create multiple instances of the BankAccount class and perform operations such as depositing, withdrawing, and transferring money.

'use strict';
class BankAccount {
    constructor(accountNumber, accountHolder, balance) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance = this.balance + amount;
            console.log(`Deposited ${amount} into ${this.accountHolder}'s account. New balance: ${this.balance}`);
        } else {
            console.log("Deposit amount must be greater than zero.");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance = this.balance - amount;
            console.log(`Withdrawn ${amount} from ${this.accountHolder}'s account. New balance: ${this.balance}`);
        } else {
            console.log("Insufficient balance or invalid amount.");
        }
    }

    transfer(amount, recipientAccount) {
        if (amount > 0 && amount <= this.balance) {
            this.withdraw(amount); 
            recipientAccount.deposit(amount); 
            console.log(`Transferred ${amount} from ${this.accountHolder} to ${recipientAccount.accountHolder}.`);
        } else {
            console.log("Transfer failed due to insufficient balance or invalid amount.");
        }
    }
}

const account1 = new BankAccount(101, "Dixita", 50000);
const account2 = new BankAccount(102, "Nirmi", 30000);

account1.deposit(500); 
account1.withdraw(300); 
account1.transfer(200, account2); 

console.log(`${account1.accountHolder}'s final balance: ${account1.balance}`);
console.log(`${account2.accountHolder}'s final balance: ${account2.balance}`);

