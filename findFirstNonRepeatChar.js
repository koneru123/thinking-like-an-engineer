// Create a function findFirstNonRepeatChar() which accepts word as an argument
function findFirstNonRepeatChar(word) {
  // Lets understand the input and expected output
  // Input is a word and expected is to find the first character that is not repeated.
  // First create a string variable(nonRepeatChar) and assign it to empty string
  let nonRepeatChar = '';

  // we need to create an empty object so we can map each character to how many times is it repeated in the word
  let obj = {};
  // loop through the word till its length by initially setting it to 0 and incrementing the value
  for(let i = 0; i < word.length; i++) {
    // we check if the word exists, if not we set the value to 1
    if(!obj[word[i]]) {
      obj[word[i]] = 1;
    } else {
      // we check if the word exists, if yes we increment the value
      obj[word[i]]++;
    }
  }
  // Now we need to loop through the object
  for(let j in obj) {
    // look for first occurance of keys in the object whose value is 1
    if(obj[j] === 1) {
      //assign that key to nonRepeatChar variable
      nonRepeatChar = j;
      //return the function here
      return nonRepeatChar;
    } else {
      // handle the edgecase to return null when no such character
      nonRepeatChar = null;
    }
  }
  // else return the function here
  return nonRepeatChar;
}

//console.log(findFirstNonRepeatChar('abaaba')); returns null
//console.log(findFirstNonRepeatChar('abacabad')); returns c
//console.log(findFirstNonRepeatChar('abaabad')); returns d