let names = ["Amy", "Brian", "Claire", "Dave"];

const table = document.createElement("table");
document.body.appendChild(table);

function generateTableHeader(table) {
    let thead = table.createTHead();
    let row = thead.insertRow();

    let thIndex = document.createElement("th");
    let indexText = document.createTextNode("#");
    thIndex.appendChild(indexText);
    row.appendChild(thIndex);

    let thNames = document.createElement("th");
    let namesText = document.createTextNode("Names");
    thNames.appendChild(namesText);
    row.appendChild(thNames);
}

function generateTableBody(table, data) {
    let cnt = 1;
    data.forEach(element => {
        let row = table.insertRow();
        let cellIndex = row.insertCell();
        let cellIndexValue = document.createTextNode(cnt++);
        cellIndex.appendChild(cellIndexValue);
        
        let cellName = row.insertCell();
        let cellNameValue = document.createTextNode(element);
        cellName.appendChild(cellNameValue);
    });
}

generateTableHeader(table);
generateTableBody(table, names);
console.log(table);