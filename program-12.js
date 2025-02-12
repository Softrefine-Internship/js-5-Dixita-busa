// Write a JavaScript program that creates a class called University with properties for university name and departments. Include methods to add a department, remove a department, and display all departments. Create an instance of the University class and add and remove departments.

'use strict';
class University {
    constructor(universityName) {
        this.universityName = universityName;
        this.departments = new Array(100); 
        this.count = 0; 
    }

    addDepartment(departmentName) {
        this.departments[this.count] = departmentName;
        this.count++; 
        console.log(`Added department: ${departmentName}`);
    }

    removeDepartment(departmentName) {
        let index = -1;
        for (let i = 0; i < this.count; i++) {
            if (this.departments[i] === departmentName) {
                index = i;
                break;
            }
        }
        if (index !== -1) {
            for (let i = index; i < this.count - 1; i++) {
                this.departments[i] = this.departments[i + 1];
            }
            this.count--; 
            console.log(`Removed department: ${departmentName}`);
        } else {
            console.log(`Department ${departmentName} not found.`);
        }
    }

    displayDepartments() {
        console.log(`Departments in ${this.universityName}:`);
        for (let i = 0; i < this.count; i++) {
            console.log(`- ${this.departments[i]}`);
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
