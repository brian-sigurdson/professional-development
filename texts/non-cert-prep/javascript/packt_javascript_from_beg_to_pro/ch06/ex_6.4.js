function calc(arg1, arg2, operand) {
    switch (operand) {
        case '+':
            return arg1 + arg2;
            break;
        case '-':
            return arg1 - arg2;
            break;
        default:
            return arg1 + arg2;
    }
}

let results = [];
let arg1 = 0;
let arg2 = 0;

for (let i = 0; i < 10; i++) {
    arg1 = i * 5;
    arg2 = i ** 2;
    results.push(calc(arg1, arg2, '+'));
}

console.log(results);