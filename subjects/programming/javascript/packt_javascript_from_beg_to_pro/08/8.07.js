let mydate = new Date();
console.log(mydate);

let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let theDate = mydate.getDate();
console.log(theDate);
console.log(mydate.getFullYear());
console.log(mydate.getMonth());

console.log(months[mydate.getMonth()]);