// Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.

'use strict';
class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = parseInt(balance);
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log("Deposited: " + amount + ", New Balance: " + this.balance);
    } else {
      console.log("Deposit amount must be positive");
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log("Withdrawn: " + amount + ", Remaining Balance: " + this.balance);
    } else {
      console.log("Invalid withdrawal amount");
    }
  }
}

const account1 = new BankAccount(101, 500);
account1.deposit(200);
account1.withdraw(100);

const account2 = new BankAccount(102, 1000);
account2.deposit(500);
account2.withdraw(1500);
