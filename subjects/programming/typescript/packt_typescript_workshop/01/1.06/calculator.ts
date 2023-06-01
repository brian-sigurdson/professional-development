enum Operator {
  Add = "add",
  Subtract = "subtract",
  Multiply = "multiply",
  Divide = "divide",
}

const _calculator = function (first: number, second: number, op: Operator) {
  
  const tuple = operations.find(tpl => tpl[0] === op);
  if (tuple !== undefined) {
    const operation = tuple[1];
    const result = operation(first, second);
    return result;
  } else {
    console.log(`op " not found"`);
  }

}

type Operation = (x: number, y: number) => number;

const operations: [Operator, Operation][] =[];

const _add = function (first: number, second: number) {
  return first + second;
}

operations.push([Operator.Add, _add]);

console.log(_calculator(4,6, Operator.Add));