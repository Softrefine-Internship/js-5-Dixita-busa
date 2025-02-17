// Write a JavaScript program that creates a class called University with properties for university name and departments. Include methods to add a department, remove a department, and display all departments. Create an instance of the University class and add and remove departments.

'use strict';
class University {
    constructor(universityName) {
        if (typeof universityName !== 'string') {
            throw new Error('University name must be a string');
        }
        this.universityName = universityName;
        this.departments = [];
    }

    addDepartment(departmentName) {
        if (typeof departmentName !== 'string') {
            throw new Error('Department name must be a string');
        }
        this.departments.push(departmentName);
        console.log(`Added department: ${departmentName}`);
    }

    removeDepartment(departmentName) {
        if (typeof departmentName !== 'string') {
            throw new Error('Department name must be a string');
        }
        const index = this.departments.indexOf(departmentName);
        if (index !== -1) {
            this.departments.splice(index, 1);
            console.log(`Removed department: ${departmentName}`);
        } else {
            console.log(`Department ${departmentName} not found.`);
        }
    }

    displayDepartments() {
        if (this.departments.length === 0) {
            console.log("No departments found.");
        } else {
            console.log(`Departments in ${this.universityName}:`);
            this.departments.forEach(department => console.log(`- ${department}`));
        }
    }
}

const university = new University("Tech University");
university.addDepartment("Computer Engineering");
university.addDepartment("Electrical Engineering");
university.addDepartment("Mechanical Engineering");
university.displayDepartments();
university.removeDepartment("Electrical Engineering");
university.displayDepartments();

