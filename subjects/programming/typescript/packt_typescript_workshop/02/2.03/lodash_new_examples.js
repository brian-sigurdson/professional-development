"use strict";
exports.__esModule = true;
var mydash = require("lodash");
var playerNames = ["Albert", "Betty", "Carl", "Diane"];
var lineupOrder = [1, 2, 3, 4];
var myzip = mydash.zip(lineupOrder, playerNames);
console.log(myzip);
myzip.forEach(function (element) {
    console.log(element);
});
