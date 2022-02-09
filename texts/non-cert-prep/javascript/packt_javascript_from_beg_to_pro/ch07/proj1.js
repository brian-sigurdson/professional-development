class Employee {
    constructor(firstName, lastName, yearsService) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.yearsService = yearsService;
    }
}

let emp1 = new Employee('f1', 'l1', 2);
let emp2 = new Employee('f2', 'l2', 3);
let employees = [emp1, emp2];

for (let emp of employees) {
    console.log(emp.lastName);
}