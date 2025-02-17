// Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department. Override the annual salary calculation method to include bonuses for managers. Create two instances of the 'Manager' class and calculate their annual salary.

'use strict';
class Employee {
  #salary; 

  constructor(name, salary) {
    if (typeof name !== 'string' || typeof salary !== 'number' || salary <= 0) {
      throw new Error("Name must be a string and salary must be a positive number");
    }
    this.name = name;
    this.#salary = salary;
  }

  calculateAnnualSalary() {
    return 12 * this.#salary;
  }

  getSalary() {
    return this.#salary;
  }
}

class Manager extends Employee {
  constructor(name, salary, department, bonus) {
    super(name, salary);
    if (typeof department !== 'string' || typeof bonus !== 'number' || bonus < 0) {
      throw new Error("Department must be a string and bonus must be a non-negative number");
    }
    this.department = department;
    this.bonus = bonus;
  }

  calculateAnnualSalary() {
    return super.calculateAnnualSalary() + this.bonus;
  }
}

const manager1 = new Manager("Dixita", 50000, "IT", 1000);
console.log("Annual Salary of Manager 1:", manager1.calculateAnnualSalary());

const manager2 = new Manager("Nirmi", 30000, "HR", 2000);
console.log("Annual Salary of Manager 2:", manager2.calculateAnnualSalary());



