class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    fullname() {
        return this.firstname + " " + this.lastname;
    }
}

let p1 = new Person("fname1", "lname1");
let p2 = new Person("fname2", "lname2");
console.log("Hello " + p1.fullname() + " and " + p2.fullname());