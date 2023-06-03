// ===============================================================
// Passing tests
//
// "war AND peace" => "War And Peace"
// "Catcher in the Rye" => "Catcher In The Rye"

import { totalmem } from "os";

// "tO kILL A mOCKINGBIRD" => "To Kill A MockingBird"
function toTitleCase(msg: string) : string {

    const theWords = toWords(msg);
    for (let i = 0; i < theWords.length; i++) {
      let first = theWords[i].substring(0,1).toUpperCase();
      let rest = theWords[i].substring(1).toLowerCase();
      theWords[i] = first + rest;
    }

    return theWords.join(" ");
}

// console.log(toTitleCase("war AND peace"));
// console.log(toTitleCase("Catcher in the Rye"));

// ===============================================================
// Passing tests
//
// "War and Peace" => 3
// "catcher-in-the-rye" => 4
// "for_whom the-bell-tolls" => 5
function countWords(msg: string) : number {
  const word_array = toWords(msg);
  return word_array.length;
}

// console.log(countWords("abc"));

// ===============================================================
// Passing tests
//
// "War and Peace" => [War, and, peace]
// "catcher-in-the-rye" => [catcher, in, the, rye]
// "for_whom the-bell-tolls"=> [for, whom, the, bell, tolls]
function toWords(msg: string) : string[] {
  return msg.split(/ |-|_/);
}

// console.log(toWords("for_whom the-bell-tolls"));

// ===============================================================
// Passing tests
//
// "War", 3 => "WarWarWar"
// "rye", 1 => "rye"
// "bell", 0 => ""
function repeat(msg: string, cnt: number) : string {
  let tmp: string = "";

  for (let i = 0; i < cnt; i++){
    tmp += msg;
  }

  return tmp;
}

// console.log(repeat("War", 3));
// console.log(repeat("rye", 1));
// console.log(repeat("bell", 0));


// ===============================================================
// Passing tests
//
// "War and Peace" => false
// "Atonement" => true
// "1Q84" => false
function isAlpha(msg: string) : boolean {
  // console.log(`msg: ${msg}`);

  const theChars = msg.split('');
  // console.log(`theChars: ${theChars}`);

  const lowerChars = theChars.map(x => x.toLowerCase());
  // console.log(`lowerChars: ${lowerChars}`);

  const sizeBefore = lowerChars.length;
  const passed = lowerChars.filter(checkAlpha);
  if (sizeBefore == passed.length) {
    return true;
  } else {
    return false;
  }
}

// is the indvidual character an alpha?
function checkAlpha(theChar: string) : boolean {
  if (theChar >= 'a' && theChar <= 'z') {
    return true;
  } else {
    return false;
  }
}

// console.log(isAlpha("War and Peace"));
// console.log(isAlpha("Atonement"));
// console.log(isAlpha("1Q84"));

// ===============================================================
// Passing tests
//
// "War and Peace" => false
// " " => true
// "" => true
function isBlank(msg: string) : boolean {

  for (let i = 0; i < msg.length; i++){
    if (msg[i] !== " " && msg[i] !== "") {
      return false;
    } else {
      continue;
    }
  }

  return true;
}

// console.log(isBlank("War and Peace"));
// console.log(isBlank(" "));
// console.log(isBlank(""));