let val = 1000;

(function (){
    let val = 5;
    console.log(val);
})();

let exp = (function (){
    let val = 10;
    return val;
})();

console.log(val);
console.log(exp);