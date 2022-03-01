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


console.log(calc(1,3, '+'));
console.log(calc(5,3, '-'));
console.log(calc(2,3, '***'));