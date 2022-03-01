class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    fullName() {
        return this.firstName + " " + this.lastName;
    }
}

let per1 = new Person("f1", "l1");

console.log("Hello, ", per1.fullName());