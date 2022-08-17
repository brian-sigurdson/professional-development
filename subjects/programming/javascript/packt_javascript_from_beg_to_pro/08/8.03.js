let arr = [1, 2, 3, 4];
let arr2 = [0, 1, 2, 3, 4];

// using an arrow funcation
let mapped_arr = arr.map(x => x * 2);

console.log(arr);
console.log(mapped_arr);


// using an anonymous funcation
let mapped_arr2 = arr2.map(
    function (x) {
        return x * 2;
    }
);

console.log(arr2);
console.log(mapped_arr2);