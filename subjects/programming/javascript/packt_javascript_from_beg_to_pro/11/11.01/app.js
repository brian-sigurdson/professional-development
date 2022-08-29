let isDark = false;
window.onclick = () => {
    console.log(isDark);

    if (!isDark) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        isDark = true;
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        isDark = false;
    }
    
}



document.getElementById("addNew").addEventListener("click", addItemToList);


function addItemToList() {
    let item = document.getElementById("addItem");
    let li = document.createElement("li");
    li.innerText = item.value;
    let olist = document.getElementById("sList");
    olist.appendChild(li);
}

