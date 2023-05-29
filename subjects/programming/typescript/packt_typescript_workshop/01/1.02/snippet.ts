function snippet (text: string, length: number) : string {
  if (text.length < length) {
    return text;
  }

  const ellipsis = "...";
  let result = text.slice(0, length - ellipsis.length);

  const lastSpace = result.lastIndexOf(" ");
  result = `${result.slice(0, lastSpace)}${ellipsis}`;

  return result;
}

const resultOne = snippet("Typescript is a programming language that is a strict syntactical superset of JavaScript and adds ", 40);
console.log(resultOne);

// const resultTwo = snippet("Lorem ipsum dolor sit amet");
// console.log(resultTwo);