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
var repeat = function (first, second) {
    var val = "";
    for (var i = 0; i < second; i++) {
        val += first;
    }
    return val;
};
var isAlpha = function (first) {
    for (var i = 0; i < first.length; i++) {
        var tmp = first.charAt(i);
        if (!/[A-Za-z]/.test(tmp)) {
            return false;
        }
    }
    return true;
};
var isBlank = function (first) {
    if (first.length == 0) {
        return true;
    }
    for (var i = 0; i < first.length; i++) {
        var tmp = first.charAt(i);
        if (!/[" "]/.test(tmp)) {
            return false;
        }
    }
    return true;
};
var result_1 = toTitleCase("tO kILL A mOCKINGBIRD");
console.log("toTitleCase: ", result_1);
var result_2 = countWords("for_whom the-bell-tolls");
console.log("countWords: ", result_2);
var result_3 = toWords("for_whom the-bell-tolls");
console.log("toWords: ", result_3);
var result_4 = repeat("_bob_", 4);
console.log("repeat: ", result_4);
// const result_5 = isAlpha("War and Peace");
var result_5 = isAlpha("1Q44");
console.log("isAlpha: ", result_5);
var result_6 = isBlank("     ");
console.log("isBlank: ", result_6);
