function snippet(text, length) {
    if (text.length < length) {
        return text;
    }
    var ellipsis = "...";
    var result = text.slice(0, length - ellipsis.length);
    var lastSpace = result.lastIndexOf(" ");
    result = "".concat(result.slice(0, lastSpace)).concat(ellipsis);
    return result;
}
// testing
var r1 = snippet("TypeScript is a programming language that is a strict syntactical superset of JavaScript and adds optional static typing to the language.", 40);
console.log(r1);
// const r2 = snippet("Lorem ipsum dolor sit amet");
// console.log(r2);
