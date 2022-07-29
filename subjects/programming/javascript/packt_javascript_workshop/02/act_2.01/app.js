var myList = document.getElementById('myList');
console.log("Child count: " + myList.childElementCount);
var newItem = document.createElement('li');
newItem.innerText = "New Item";
myList.appendChild(newItem);
myList.lastChild.style.color = "red";
console.log("Child count: " + myList.childElementCount);