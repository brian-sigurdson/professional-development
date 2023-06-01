// "war AND peace" => "War And Peace"
// "Catcher in the Rye" => "Catcher In The Rye"
// "tO kILL A mOCKINGBIRD" => "To Kill A MockingBird"
function toTitleCase(msg) {
    return 'testing';
}
// "War and Peace" => 3
// "catcher-in-the-rye" => 4
// "for_whom the-bell-tolls" => 5
function countWords(msg) {
    return 'testing';
}
// "War and Peace" => [War, and, peace]
// "catcher-in-the-rye" => [catcher, in, the, rye]
// "for_whom the-bell-tolls"=> [for, whom, the, bell, tolls]
function toWords(msg) {
    return 'testing';
}
// "War", 3 => "WarWarWar"
// "rye", 1 => "rye"
// "bell", 0 => ""
function repeat(msg, cnt) {
    var tmp = "";
    for (var i = 0; i < cnt; i++) {
        tmp += msg;
    }
    return tmp;
}
console.log(repeat("War", 3));
console.log(repeat("rye", 1));
console.log(repeat("bell", 0));
// "War and Peace" => false
// "Atonement" => true
// "1Q84" => false
function isAlpha(msg) {
    return 'testing';
}
// "War and Peace" => false
// " " => true
// "" => true
function isBlank(msg) {
    return 'testing';
}
