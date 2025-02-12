// Write a JavaScript program that creates a class called Bank with properties for bank names and branches. Include methods to add a branch, remove a branch, and display all branches. Create an instance of the Bank class and perform operations to add and remove branches.

"use strict";
class Bank {
  constructor(bankName) {
    this.bankName = bankName;
    this.branches = [];
  }
  addBranch(branchName) {
    this.branches.push(branchName);
    console.log(branchName + " branch added");
  }

  removeBranch(branchName) {
    for (let i = 0; i < this.branches.length; i++) {
      if (this.branches[i] === branchName) {
        this.branches.splice(i, 1);
        console.log(branchName + " branch removed");
        return;
      }
    }
    console.log(branchName + " branch not found");
  }

  displayBranches() {
    console.log("Branches of " + this.bankName + ": " + this.branches.join(", "));
  }
}

const bank = new Bank("State Bank");

bank.addBranch("Ahmedabad");

bank.addBranch("Surat");
bank.displayBranches();

bank.removeBranch("Surat");
bank.displayBranches();
