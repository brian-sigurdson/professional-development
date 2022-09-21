const toTitleCase = function (first: string): string {
    const tmp = first.toLowerCase();
    const words = tmp.split(" ");
    words.forEach( 
        function(item, index, arr) {
            const char0 = item.charAt(0).toUpperCase();
            arr[index] = char0 + item.substring(1);
        }
    );    

    const words2 = words.join(" ");
    // console.log(words2);
    return words2;
}

const spaceDashUnderscore = function (first: string) {
    return first.split(/[" "-_]/);
}

const countWords = function (first: string): number {
    return spaceDashUnderscore(first).length;
}

const toWords = function (first: string) {
    return spaceDashUnderscore(first);
}

const repeat = function (first: string, second: number): string {
    let val = "";
    for (let i = 0; i < second; i++) {
        val += first;
    }
    return val;
}

const isAlpha = function (first: string) {
    for (let i = 0; i < first.length; i++) {
        let tmp = first.charAt(i);

        if (!/[A-Za-z]/.test(tmp)) {
            return false;
        }
    }

    return true;
}

const isBlank = function (first: string) {

    if (first.length == 0){
        return true;
    }

    for (let i = 0; i < first.length; i++) {
        let tmp = first.charAt(i);

        if (!/[" "]/.test(tmp)) {
            return false;
        }
    }

    return true;
}


const result_1 = toTitleCase("tO kILL A mOCKINGBIRD");
console.log("toTitleCase: ", result_1);

const result_2 = countWords("for_whom the-bell-tolls");
console.log("countWords: ", result_2);

const result_3 = toWords("for_whom the-bell-tolls");
console.log("toWords: ", result_3);

const result_4 = repeat("_bob_", 4);
console.log("repeat: ", result_4);

// const result_5 = isAlpha("War and Peace");
const result_5 = isAlpha("1Q44");
console.log("isAlpha: ", result_5);

const result_6 = isBlank("     ");
console.log("isBlank: ", result_6);