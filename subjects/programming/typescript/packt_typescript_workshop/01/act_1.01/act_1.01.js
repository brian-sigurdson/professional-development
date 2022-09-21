var toTitleCase = function (first) {
    var tmp = first.toLowerCase();
    var words = tmp.split(" ");
    words.forEach(function (item, index, arr) {
        var char0 = item.charAt(0).toUpperCase();
        arr[index] = char0 + item.substring(1);
    });
    var words2 = words.join(" ");
    // console.log(words2);
    return words2;
};
var spaceDashUnderscore = function (first) {
    return first.split(/[" "-_]/);
};
var countWords = function (first) {
    return spaceDashUnderscore(first).length;
};
var toWords = function (first) {
    return spaceDashUnderscore(first);
};
var repeat = function (first) {
};
var isAlpha = function (first) {
};
var isBlank = function (first) {
};
var result_1 = toTitleCase("tO kILL A mOCKINGBIRD");
console.log(result_1);
var result_2 = countWords("for_whom the-bell-tolls");
console.log(result_2);
var result_3 = toWords("for_whom the-bell-tolls");
console.log(result_3);
