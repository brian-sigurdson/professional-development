function myfact(val) {
    console.log("Entering " + val);

    if (val >= 2) {
        return val * myfact(val - 1);
    } else {
        return 1;
        console.log("leaving " + val);
    }
}

let result = myfact(5);
console.log(result);