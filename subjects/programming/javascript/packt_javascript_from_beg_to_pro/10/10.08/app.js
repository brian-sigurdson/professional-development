let names = ["alan", "barbara", "charles", "dana"];

function build() {
    let html = "<h1>My Friends Table</h1><table>";
    names.forEach((item, index) => {
        html += `<tr class="box" data-row="${index+1}" data-name="${item}" onclick="getData(this)"> <td>${item}</td>`;
        html += `<td >${index + 1}</td></tr>`;
        });
    html += "</table>";
    document.getElementById("output").innerHTML = html;
}

function getData(el) {
    let temp = el.getAttribute("data-row");
    let tempName = el.getAttribute("data-name");
    message.innerHTML = `${tempName } is in row #${temp}`;
}

build();