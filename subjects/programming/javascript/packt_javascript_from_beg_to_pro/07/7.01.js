class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
}

let p1 = new Person("fname1", "lname1");
let p2 = new Person("fname2", "lname2");
console.log("Hello " + p1.firstname + " and " + p2.firstname);