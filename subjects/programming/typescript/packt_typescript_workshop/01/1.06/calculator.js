var Operator;
(function (Operator) {
    Operator["Add"] = "add";
    Operator["Subtract"] = "subtract";
    Operator["Multiply"] = "multiply";
    Operator["Divide"] = "divide";
})(Operator || (Operator = {}));
var _calculator = function (first, second, op) {
    var tuple = operations.find(function (tpl) { return tpl[0] === op; });
    if (tuple !== undefined) {
        var operation = tuple[1];
        var result = operation(first, second);
        return result;
    }
    else {
        console.log("op \" not found\"");
    }
};
var operations = [];
var _add = function (first, second) {
    return first + second;
};
operations.push([Operator.Add, _add]);
console.log(_calculator(4, 6, Operator.Add));
