import mydash = require("lodash");

const playerNames = ["Albert", "Betty", "Carl", "Diane"];
const lineupOrder = [1, 2, 3, 4];

console.log(mydash.zip(lineupOrder, playerNames));