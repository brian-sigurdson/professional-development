function addOne() {
    var a = document.getElementById("addItem").value;
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(a));
    document.getElementById("sList").appendChild(li);
}

document.getElementById("addNew").onclick = function () {
    addOne();
}