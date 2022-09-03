function message(msg, event) {
    console.log(msg);
    console.log(event);
}

document.addEventListener("DOMContentLoaded", (e) => {
    message("DOMContentLoaded", e);
});

window.onload = (e) => {
    message("Window.onload", e);
}


// document.addEventListener("DOMContentLoaded", (e) => {
//     message("DOMContentLoaded", e);
// });