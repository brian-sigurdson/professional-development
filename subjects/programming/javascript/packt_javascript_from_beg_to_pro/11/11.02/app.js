let divs = document.querySelectorAll("div");

divs.forEach((elem) => {
    elem.addEventListener("click", () => {
        document.body.style.backgroundColor = elem.textContent;
    })
})
