let names = ["Amy", "Brian", "Claire", "Dave"];

const table = document.createElement("table");
document.body.appendChild(table);

function generateTableHeader(table) {
    let thead = table.createTHead();
}

generateTableHeader(table);
console.log(table);