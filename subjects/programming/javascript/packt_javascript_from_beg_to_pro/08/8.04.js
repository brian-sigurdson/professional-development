let words = "thIs will be capiTalized for each word";

function caps(sentence) {
    // sentence = sentence.toLowerCase();
    let empty = [];
    let arr = sentence.split(" ");
    
    arr.forEach(element => {
        let first = element.slice(0, 1);
        first = first.toUpperCase();
        let rest = element.slice(1);
        rest = rest.toLowerCase();
        empty.push(first + rest);
    });

    return empty;
}

console.log(caps(words));