import mydash = require("lodash");

const playerNames = ["Albert", "Betty", "Carl", "Diane"];
const lineupOrder = [1, 2, 3, 4];

let myzip = mydash.zip(lineupOrder, playerNames);
console.log(myzip);

myzip.forEach( element => {
    console.log(element);
})