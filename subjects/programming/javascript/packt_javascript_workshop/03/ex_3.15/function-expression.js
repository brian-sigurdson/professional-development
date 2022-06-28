// getRandomStringCharacter();

var getRandomStringCharacter = function(source) {
  let returnChar = '';

  if (source != undefined && source.length > 0) {
    returnChar = source.charAt(Math.floor(Math.random() * source.length));
  } 

  return returnChar;
}

console.log('():', getRandomStringCharacter());
console.log('("AEIOU")', getRandomStringCharacter("AEIOU"));