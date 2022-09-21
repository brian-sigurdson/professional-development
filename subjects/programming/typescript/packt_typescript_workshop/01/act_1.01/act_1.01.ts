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

const repeat = function (first: string) {
    
}

const isAlpha = function (first: string) {
    
}

const isBlank = function (first: string) {
    
}


const result_1 = toTitleCase("tO kILL A mOCKINGBIRD");
console.log(result_1);

const result_2 = countWords("for_whom the-bell-tolls");
console.log(result_2);

const result_3 = toWords("for_whom the-bell-tolls");
console.log(result_3);