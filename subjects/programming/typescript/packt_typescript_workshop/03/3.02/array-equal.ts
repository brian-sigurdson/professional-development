const array1 = [7,6,8,9,2,25];
const array2 = [6,8,9,2,25];
const array3 = [6,8,9,2,25,7];

function arrayCompare(a1: number[], a2: number[]): boolean {
  if (a1.length !== a2.length){
    return false;
  }

  a1.sort();
  a2.sort();

  for (let i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]){
      return false;
    }
  }
  return true;
}

console.log(`Are ${array1} and ${array2} equal?`, arrayCompare(array1, array2));
console.log(`Are ${array1} and ${array3} equal?`, arrayCompare(array1, array3));
console.log(`Are ${array2} and ${array3} equal?`, arrayCompare(array2, array3));