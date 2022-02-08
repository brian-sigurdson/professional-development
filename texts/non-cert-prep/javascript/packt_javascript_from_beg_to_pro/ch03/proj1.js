const theList = ['Laurence', 'svekis', true, 35, null, undefined, {test: 'one', score: 55}, ['one', 'two']];
console.log(theList);

theList.splice(0,1,"FIRST");
console.log(theList);

for (let i = 0; i < 6; i++) {
    theList.pop();
}
console.log(theList);

theList.push("MIDDLE");
theList.push("hello world");
theList.push("LAST");
console.log(theList);
