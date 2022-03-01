let arr = [1,2,3,4,5];

let mapped_arr1 = arr.map(
    (value, index, array) => {
        return value * 2;
    })
console.log(mapped_arr1);

let mapped_arr2 = arr.map(x => x * 2);
console.log(mapped_arr2);

