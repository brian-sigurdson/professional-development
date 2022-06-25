// 1
let shopping_list = [];
print("Before push:", shopping_list);
// 2
shopping_list.push("Milk");
shopping_list.push("Bread");
shopping_list.push("Apples");
print("After push:", shopping_list);
// 3
shopping_list.splice(1,1, "Bananas", "Eggs");
print("After update:", shopping_list);
// 4
console.log(shopping_list.pop());
// 5
console.log(shopping_list.sort());
// 6
console.log("6) Index of milk: ", shopping_list.indexOf("Milk"));
// 7
print("7) Before update:", shopping_list);
let index = shopping_list.indexOf("Bananas");
console.log("7) Index of Banansa: ", index);
shopping_list.splice(index + 1, 0, "Carrots", "Lettuce");
print("After update:", shopping_list);
// 8
let new_list = ["Juice", "Pop"];
print("8) New list:", new_list);
// 9
shopping_list = shopping_list.concat(new_list);
print("9) After concat:", shopping_list);
shopping_list = shopping_list.concat(new_list);
print("9) After concat:", shopping_list);
// 10
console.log("10) Index of Pop: ", shopping_list.lastIndexOf("Pop"));
// 11
console.log(shopping_list);

function print(msg, printMe) {
    console.log(msg, printMe);
}