function add(param1, param2) {
    return param1 + param2;
}

function sub(param1, param2) {
    return param1 - param2;
}

function doAddOrSub(param1, param2, operation = "+") {

    switch(operation) {
        case "+":
            return add(param1, param2);
            break;
        case "-":
            return sub(param1, param2);
            break;
        default:
            return add(param1, param2);
    }
}

myvals = [];

for (let i = 0; i < 10; i++) {
    myvals.push(doAddOrSub(i * 5, i * i, "+"));
}

console.log(myvals);