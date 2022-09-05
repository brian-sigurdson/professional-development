function snippet(text: string, length: number): string {
    if (text.length < length) {
        return text;
    }

    const ellipsis = "...";
    let result = text.slice(0, length - ellipsis.length);

    const lastSpace = result.lastIndexOf(" ");
    result = `${result.slice(0, lastSpace)}${ellipsis}}`;

    return result;
}

const result1 = snippet("TypeScript is a programming language that is a strict syntactical superset of JavaScript and adds optional static typing to the language.", 40);
console.log(result1);

// const result2 = snippet("tional static typing to the language.");
// console.log(result2);

// const result3 = snippet(false, 40);
// console.log(result3);

// const result4 = snippet("tional static typing to the language.", false);
// console.log(result4);

// const result5 = snippet("tional static typing to the language.", 20);
// console.log(result5);