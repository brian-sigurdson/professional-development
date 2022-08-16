let v1 = "How's%20it%20going%3F"
let v2 = "How's it going?"
let v3 = "http://www.basescripts.com?=Hello World";

console.log(decodeURIComponent(v1));
console.log(encodeURIComponent(v1));

console.log(decodeURIComponent(v2));
console.log(encodeURIComponent(v2));

console.log(decodeURIComponent(v3));
console.log(encodeURIComponent(v3));