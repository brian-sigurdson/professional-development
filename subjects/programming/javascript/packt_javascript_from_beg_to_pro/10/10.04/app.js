let divs = document.getElementsByClassName("example");

console.log(divs);

for (let i = 0; i < divs.length; i++) {
    console.log(divs[i]);
}

for (let i = 0; i < divs.length; i++) {
    console.log(divs[i].textContent);
}