let val1 = 1;
let val2 = 2;
let opAdd = "+";

function add(param1, param2) {
    return param1 + param2;
}

function sub(param1, param2) {
    return param1 - param2;
}

function doAddOrSub(param1, param2, operation = "-") {

    switch(operation) {
        case "+":
            console.log(add(param1, param2));
            console.log("+");
            break;
        case "-":
            console.log(sub(param1, param2));
            console.log("-");
            break;
        default:
            console.log(add(param1, param2));
            console.log("default");
    }
}

doAddOrSub(val1, val2, "+");
doAddOrSub(val1, val2, "-");
doAddOrSub(val1, val2);