let output = document.getElementById("output");
let sText = document.getElementById("sText");
let rText = document.getElementById("rText");
let b1 = document.querySelector("button").addEventListener("click", lookup);

function lookup() {
    const ov = output.textContent;
    const sv = sText.textContent.value;
    const rv = rText.textContent.value;

    console.log(ov);
    console.log(sv);
    console.log(rv);
    if (ov.match(/sv/)) {
        // ov.replace("/" + sv + "/", rv);
        console.log("match");
    }
}