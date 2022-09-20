var Operator;
(function (Operator) {
    Operator["Add"] = "add";
    Operator["Subtract"] = "subtract";
    Operator["Multiply"] = "multiply";
    Operator["Divide"] = "divide";
    Operator["Modulo"] = "modulo";
})(Operator || (Operator = {}));
var myCalculator = function (first, second, op) {
    var tuple = operations.find(function (tpl) { return tpl[0] === op; });
    var operation = tuple[1];
    var result = operation(first, second);
    return result;
};
var operations = [];
var myAdd = function (first, second) {
    return first + second;
};
var mySubtract = function (first, second) {
    return first - second;
};
var myMultiply = function (first, second) {
    return first * second;
};
var myDivide = function (first, second) {
    return first / second;
};
var myModulo = function (first, second) {
    return first % second;
};
operations.push([Operator.Add, myAdd]);
operations.push([Operator.Subtract, mySubtract]);
operations.push([Operator.Multiply, myMultiply]);
operations.push([Operator.Divide, myDivide]);
operations.push([Operator.Modulo, myModulo]);
console.log(myCalculator(4, 6, Operator.Add));
console.log(myCalculator(4, 6, Operator.Subtract));
console.log(myCalculator(4, 6, Operator.Divide));
console.log(myCalculator(4, 6, Operator.Multiply));
console.log(myCalculator(4, 6, Operator.Modulo));
