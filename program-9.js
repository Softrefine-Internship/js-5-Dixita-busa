// Write a JavaScript program that creates a class called Bank with properties for bank names and branches. Include methods to add a branch, remove a branch, and display all branches. Create an instance of the Bank class and perform operations to add and remove branches.

"use strict";
class Bank {
  constructor(bankName) {
    if (typeof bankName !== 'string') {
      throw new Error('Bank name must be a string');
    }
    this.bankName = bankName;
    this.branches = new Set();
  }

  addBranch(branchName) {
    if (typeof branchName !== 'string') {
      throw new Error('Branch name must be a string');
    }
    if (this.branches.has(branchName)) {
      console.log(branchName + " branch already exists");
    } else {
      this.branches.add(branchName);
      console.log(branchName + " branch added");
    }
  }

  removeBranch(branchName) {
    if (typeof branchName !== 'string') {
      throw new Error('Branch name must be a string');
    }
    if (this.branches.has(branchName)) {
      this.branches.delete(branchName);
      console.log(branchName + " branch removed");
    } else {
      console.log(branchName + " branch not found");
    }
  }

  displayBranches() {
    console.log("Branches of " + this.bankName + ": " + [...this.branches].join(", "));
  }
}

const bank = new Bank("State Bank");

bank.addBranch("Ahmedabad");
bank.addBranch("Surat");
bank.addBranch("Ahmedabad");
bank.displayBranches();

bank.removeBranch("Surat");
bank.displayBranches();

