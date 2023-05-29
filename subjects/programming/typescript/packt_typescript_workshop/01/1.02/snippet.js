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
var resultOne = snippet("Typescript is a programming language that is a strict syntactical superset of JavaScript and adds ", 40);
console.log(resultOne);
// const resultTwo = snippet("Lorem ipsum dolor sit amet");
// console.log(resultTwo);
