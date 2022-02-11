let arr = ["grapefruit", 4, "hello", 5.6, true];

function printStuff(element, index) {
    console.log("Printing stuff: ", element, "on array position", index);
}

arr.forEach(printStuff);