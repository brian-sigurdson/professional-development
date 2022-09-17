const daysInWeek = 7;
const theName = "Ada Lovelace";
const isRaining = false;
const today = new Date();
const months = ["January", "February", "March"];
const notDefined = undefined;
const nothing = null;
const add = (x: number, y: number) => x + y;
const subtract = (x: number, y: number) => x - y;
const calculator = {
    add,
    subtract
}

const everything = [daysInWeek, theName, isRaining, today, months, notDefined, nothing, add, calculator];

for (const something of everything) {
    const type = typeof something;
    console.log(type, "          ", something);
}