// Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.

'use strict';
class BankAccount {
  #accountNumber;
  #balance;

  constructor(accountNumber, balance) {
    if (typeof accountNumber !== 'number' || typeof balance !== 'number') {
      throw new Error("Account number and balance must be numbers");
    }
    this.#accountNumber = accountNumber;
    this.#balance = balance;
  }

  deposit(amount) {
    if (amount <= 0 || typeof amount !== 'number') {
      console.log("Deposit amount must be a positive number");
    } else {
      this.#balance += amount;
      console.log("Deposited: " + amount + ", New Balance: " + this.#balance);
    }
  }

  withdraw(amount) {
    if (amount <= 0 || typeof amount !== 'number') {
      console.log("Withdrawal amount must be a positive number");
    } else if (amount > this.#balance) {
      console.log("Insufficient balance");
    } else {
      this.#balance -= amount;
      console.log("Withdrawn: " + amount + ", Remaining Balance: " + this.#balance);
    }
  }

  getAccountNumber() {
    return this.#accountNumber;
  }

  getBalance() {
    return this.#balance;
  }
}

const account1 = new BankAccount(101, 500);
account1.deposit(200);
account1.withdraw(100);



