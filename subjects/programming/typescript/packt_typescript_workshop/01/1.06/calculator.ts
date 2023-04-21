enum Operator {
  Add = "add", 
  Subtract = "subtract",
  Multiply = "multiply",
  Divide = "divide",
}

type Operation = (x: number, y: number) => number;
const myOperations: [Operator, Operation][] = [];

const myAdd = function (first: number, second: number) {
  return first + second;
}
myOperations.push([Operator.Add, myAdd]);

const mySubtract = function (first: number, second: number) {
  return first - second;
}
myOperations.push([Operator.Subtract, mySubtract]);

const myMultiply = function (first: number, second: number) {
  return first * second;
}
myOperations.push([Operator.Multiply, myMultiply]);

const myDivide = function (first: number, second: number) {
  return first / second;
}
myOperations.push([Operator.Divide, myDivide]);

const myCalculator = function (first: number, second: number, op: Operator) {
  const tuple = myOperations.find(tpl => tpl[0] === op);
  const myOperations = tuple[1];
  const result = myOperations(first, second);
  return result;
}

console.log(myCalculator(4, 6, Operator.Add));