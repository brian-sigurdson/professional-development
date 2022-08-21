// let red = document.getElementById("red").addEventListener("click", reder);
// let green = document.getElementById("green").addEventListener("click", greener);
// let blue = document.getElementById("blue").addEventListener("click", blueer);

// function reder() { red.style.backgroundColor = "red";}
// function greener() { green.style.backgroundColor = "green";}
// function blueer() { blue.style.backgroundColor = "blue";}


const divs = document.querySelectorAll("div");
    divs.forEach((el)=>{
        el.addEventListener("click",()=>{
        document.body.style.backgroundColor = el.textContent;
    });
})
