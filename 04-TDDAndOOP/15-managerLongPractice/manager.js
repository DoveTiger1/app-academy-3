// manager.js

const Employee = require('./employee');

class Manager extends Employee { 
    constructor(name, salary, title, manager, employees) { 
        super(name, salary, title, manager); 
        this.employees = (Array.isArray(employees)) ? employees : [];
    }

    addEmployee(employee) { 
        if (employee instanceof Employee) { 
            this.employees.push(employee);
        } else { 
            throw new Error('Invalid employee');
        }
    }

    calculateBonus(multiplier) { // override method in parent class 
        if (this instanceof Manager) { 
            return (this.salary + this._totalSubSalary()) * multiplier;
        } 
    }

    _totalSubSalary() { 
        let sum = 0; 
        this.employees.forEach((employee) => {
            if (employee instanceof Manager) { 
                sum += employee.salary + employee._totalSubSalary(employee.employees);
            } else { 
                sum += employee.salary;
            } 
        });
    

        return sum; 
    }
}

module.exports = Manager;
