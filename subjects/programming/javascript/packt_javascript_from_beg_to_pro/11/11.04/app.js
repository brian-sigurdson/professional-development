let red = document.getElementById("red");
red.textContent = "Hello World!";
red.style.height = 200;
red.style.width = 100;
red.style.backgroundColor = "red";

function updates(color, event) {
    console.log(color);
    console.log(typeof(event));
}

red.addEventListener("mousedown", (e) => {
    updates("green", this)
});

red.addEventListener("mouseover", (e) => {
    updates("red", this)
});

red.addEventListener("mouseleave", (e) => {
    updates("yellow", this)
});