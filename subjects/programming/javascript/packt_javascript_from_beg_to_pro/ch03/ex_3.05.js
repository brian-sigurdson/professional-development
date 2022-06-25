let people = {
    friends: [],
};

let friend1 = { fname: "bob", lname: "smith", age: 15, };
let friend2 = { fname: "sally", lname: "smith", age: 13, };
let friend3 = { fname: "sue", lname: "smith", age: 16, };

people.friends.push(friend1);
people.friends.push(friend2);
people.friends.push(friend3);

console.log(people);