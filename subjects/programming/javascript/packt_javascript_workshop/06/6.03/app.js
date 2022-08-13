var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var container = document.getElementById("container");

var content1 = "Button 1 was pressed";
var content2 = "Button 2 was pressed";
var content3 = "Button 3 was pressed";

btn1.addEventListener("click", () => container.innerHTML = content1);
btn2.addEventListener("click", () => container.innerHTML = content2);
btn3.addEventListener("click", () => container.innerHTML = content3);

