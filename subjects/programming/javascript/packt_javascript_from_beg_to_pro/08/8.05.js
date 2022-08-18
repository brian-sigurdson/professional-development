let str = "I love JavaScript"
let vowels = ['a', 'e', 'i', 'o', 'u']

console.log(str);

function replaceVowels(element, index) {
    console.log(element);
    str = str.replaceAll(element, index);
}

vowels.forEach(replaceVowels);

console.log(str);

