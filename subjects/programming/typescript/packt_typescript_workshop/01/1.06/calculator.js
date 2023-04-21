var Operator;
(function (Operator) {
    Operator["Add"] = "add";
    Operator["Subtract"] = "subtract";
    Operator["Multiply"] = "multiply";
    Operator["Divide"] = "divide";
})(Operator || (Operator = {}));
var operations = [];
var myAdd = function (first, second) {
    return first + second;
};
operations.push([Operator.Add, myAdd]);
var mySubtract = function (first, second) {
    return first - second;
};
operations.push([Operator.Subtract, mySubtract]);
var myMultiply = function (first, second) {
    return first * second;
};
operations.push([Operator.Multiply, myMultiply]);
var myDivide = function (first, second) {
    return first / second;
};
operations.push([Operator.Divide, myDivide]);
var myCalculator = function (first, second, op) {
    var tuple = operations.find(function (tpl) { return tpl[0] === op; });
    var operations = tuple[1];
    var result = operations(first, second);
    return result;
};
console.log(myCalculator(4, 6, Operator.Add));
