document.getElementById("addNew").addEventListener("click", addItemToList);


function addItemToList() {
    let item = document.getElementById("addItem");
    let li = document.createElement("li");
    li.innerText = item.value;
    let olist = document.getElementById("sList");
    olist.appendChild(li);
}

