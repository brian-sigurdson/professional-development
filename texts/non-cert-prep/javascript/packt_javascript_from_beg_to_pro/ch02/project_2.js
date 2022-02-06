let height_inches = 72;
let weight_pounds = 160;
let height_cm = height_inches * 2.54;
let height_meters = height_cm / 100;
let weight_kilos = weight_pounds / 2.2046;

let bmi = weight_kilos / (height_meters ** 2);

console.log(`${bmi}`);
