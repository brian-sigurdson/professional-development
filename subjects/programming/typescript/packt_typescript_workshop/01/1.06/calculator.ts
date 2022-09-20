enum Operator {
    Add = "add",
    Subtract = "subtract",
    Multiply = "multiply", 
    Divide = "divide",
    Modulo = "modulo",
}

const myCalculator = function (first: number, second: number, op: Operator) {
    const tuple = operations.find(tpl => tpl[0] === op);
    const operation = tuple![1];
    const result = operation(first, second);
    return result;
}

type Operation = (x: number, y: number) => number;
const operations: [Operator, Operation][] = [];

const myAdd = function (first: number, second: number) {
    return first + second;
}

const mySubtract = function (first: number, second: number) {
    return first - second;
}

const myMultiply = function (first: number, second: number) {
    return first * second;
}

const myDivide = function (first: number, second: number) {
    return first / second;
}

const myModulo = function (first: number, second: number) {
    return first % second;
}

operations.push([Operator.Add, myAdd]);
operations.push([Operator.Subtract, mySubtract]);
operations.push([Operator.Multiply, myMultiply]);
operations.push([Operator.Divide, myDivide]);
operations.push([Operator.Modulo, myModulo]);

console.log(myCalculator(4,6, Operator.Add));
console.log(myCalculator(4,6, Operator.Subtract));
console.log(myCalculator(4,6, Operator.Divide));
console.log(myCalculator(4,6, Operator.Multiply));
console.log(myCalculator(4,6, Operator.Modulo));