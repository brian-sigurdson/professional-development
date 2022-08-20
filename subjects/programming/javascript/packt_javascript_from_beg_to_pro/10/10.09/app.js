const btns = document.querySelectorAll("button");

btns.forEach((btn)=>{
    function output(){
        console.log(this.textContent);
    }
    btn.addEventListener("click",output);
});