function snippet (text: string, length: number) : string {
    if (text.length < length) {
        return text;
    }

    const ellipsis = "...";
    let result = text.slice(0, length - ellipsis.length);

    const lastSpace = result.lastIndexOf(" ");
    result = `${result.slice(0, lastSpace)}${ellipsis}`
    return result;
}

// testing
const r1 = snippet("TypeScript is a programming language that is a strict syntactical superset of JavaScript and adds optional static typing to the language.", 40);
console.log(r1);

// const r2 = snippet("Lorem ipsum dolor sit amet");
// console.log(r2);

