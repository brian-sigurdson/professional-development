let arr1 = ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike", "Laurence", "Mike", "Laurence", "Mike"]

function checkString(element, index) {
    // console.log("Element: ", element, " , index: ", index);

    // this is not the first occurance, so it is a duplicate
    let pos = arr1.indexOf(element);
    return pos == index;
}

console.log(arr1);

let filterArr1 = arr1.filter(checkString);
console.log(filterArr1);