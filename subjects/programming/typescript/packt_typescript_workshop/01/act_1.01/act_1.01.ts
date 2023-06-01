// "war AND peace" => "War And Peace"
// "Catcher in the Rye" => "Catcher In The Rye"
// "tO kILL A mOCKINGBIRD" => "To Kill A MockingBird"
function toTitleCase(msg: string) : string {

    return 'testing';
}

// "War and Peace" => 3
// "catcher-in-the-rye" => 4
// "for_whom the-bell-tolls" => 5
function countWords(msg: string) : string {

  return 'testing';
}

// "War and Peace" => [War, and, peace]
// "catcher-in-the-rye" => [catcher, in, the, rye]
// "for_whom the-bell-tolls"=> [for, whom, the, bell, tolls]
function toWords(msg: string) : string {

  return 'testing';
}

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



// "War and Peace" => false
// "Atonement" => true
// "1Q84" => false
function isAlpha(msg: string) : string {

  return 'testing';
}

// "War and Peace" => false
// " " => true
// "" => true
function isBlank(msg: string) : string {

  return 'testing';
}