var secs, mins, hrs, date;

setTime = function() {
    date = new Date();
    hrs = date.getHours();
    mins = date.getMinutes();
    secs = date.getSeconds();

    document.body.innerHTML = `${hrs}:${mins}:${secs}`;
}

setInterval(setTime, 500);