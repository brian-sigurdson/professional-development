let arr = ["laurence", "laurence", "mike", "mike", "larry", "kim", "joanne", "laurence", "mike", "laurence", "mike", "laurence", "mike"];

const arr2 = arr.filter(
    (value, index, array) => {
        console.log(value, index, array.indexOf(value));
        return array.indexOf(value) == index;
})

console.log(arr2);