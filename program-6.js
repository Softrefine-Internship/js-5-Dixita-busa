// Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department. Override the annual salary calculation method to include bonuses for managers. Create two instances of the 'Manager' class and calculate their annual salary.

'use strict';
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
  calculateAnnualSalary() {
    return 12 * this.salary;
  }
};

class Manager extends Employee {
  constructor(name, salary, department, bonus) {
    super(name, salary);
    this.department = department;
    this.bonus = bonus; 
  }
  calculateAnnualSalary() {
    return super.calculateAnnualSalary() + this.bonus;
  }
};

const manager1 = new Manager("Dixita", 50000, "IT", 1000);
console.log("Annual Salary of Manager 1:", manager1.calculateAnnualSalary());

const manager2 = new Manager("Nirmi", 30000, "HR", 2000);
console.log("Annual Salary of Manager 2:", manager2.calculateAnnualSalary());
