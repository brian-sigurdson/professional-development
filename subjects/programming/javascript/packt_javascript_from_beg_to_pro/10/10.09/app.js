const buttons = document.querySelectorAll("button");

buttons.forEach( (btn) => {
    function output() {
        console.log(this.textContent);
    }
    btn.addEventListener("click", output);
});

buttons.forEach(element => {
    console.log(element);
});