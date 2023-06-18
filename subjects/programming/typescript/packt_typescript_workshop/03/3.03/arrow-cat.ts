export const sentence = (subject: string, verb: string, ...objects: string[]): string => {
  return capitalize(`${subject} ${verb} ${arrayToObjectSegment(objects)}.`);
};

export const arrayToObjectSegment = (words: string[]) : string => {
  // empty string
  if (words.length < 1) {
    return '';
  }

  // one word
  if (words.length === 1) {
    return ` ${words[0]}`;
  }

  let segment = '';
  for (let i = 0; i < words.length; i++) {
    if (i === 0){
      segment += `${words[i]},`;
      continue;
    }

    if (i === words.length -1) {
      segment += ` and ${words[i]}`;
    } else {
      segment += ` ${words[i]},`;
    }
  }
  return segment;
  
};

export const capitalize = (sentence: string): string => {
  return `${sentence.charAt(0).toUpperCase()}${sentence.slice(1).toLocaleLowerCase()}`;
};

console.log(sentence('the cat', 'ate', 'apples', 'cheese', 'pancakes'));
console.log(sentence('the cat', 'slept', 'all day'));
console.log(sentence('the cat', 'sneezed'));