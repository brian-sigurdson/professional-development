let val1 = "global val1";

function myfunc() {
    let val1 = "local val1 myfunc()";
    console.log(val1)
}

myfunc();
console.log(val1);

(function() {
    let val1 = "local val1 IIFE";
    console.log(val1)
}) ();

myfunc();
console.log(val1);