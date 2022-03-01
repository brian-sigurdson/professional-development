function myFactorial(arg1) {
    if (arg1 > 0) {
        console.log("arg1 = ", arg1);
        return arg1 * myFactorial(arg1 -1);
    } else {
        return 1;
    }
}


let result = myFactorial(3);
console.log("result = ", result);

