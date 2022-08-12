var curTime, lastTime, interval = 500;

function main() {
    let running = true;
    while (running) {
        curTime = new Date().getTime();
        lastTime = lastTime || curTime;
        if (curTime - lastTime > interval) {
            console.log(curTime);
            lastTime = curTime;
        }
    }
}
