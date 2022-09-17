var daysInWeek = 7;
var theName = "Ada Lovelace";
var isRaining = false;
var today = new Date();
var months = ["January", "February", "March"];
var notDefined = undefined;
var nothing = null;
var add = function (x, y) { return x + y; };
var subtract = function (x, y) { return x - y; };
var calculator = {
    add: add,
    subtract: subtract
};
var everything = [daysInWeek, theName, isRaining, today, months, notDefined, nothing, add, calculator];
for (var _i = 0, everything_1 = everything; _i < everything_1.length; _i++) {
    var something = everything_1[_i];
    var type = typeof something;
    console.log(type, "          ", something);
}
