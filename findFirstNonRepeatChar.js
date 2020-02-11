//Transitional Steps
// accept input as a string
  // 'abaaba' | 'abacabad' | 'abaabad'

// output should be the first non repeated character or null if no such character
  // null | 'c' | 'd'

/*
  1. Create a function
  2. Create a nonRepeatChar variable and assign it to empty string
  3. Create an empty object variable
  4. Iterate through the word, check if the key exists in object, if exists increment the value of it if not add value as 1

  Case 1:-
  input is 'abacabad', output should be 'c'

  iter    currentword  check in object | count | output
  0       a            does not exist  | 1     | {a:1}
  1       b            does not exist  | 1     | {a:1, b:1}
  2       a            exists          | 2     | {a:2, b:1}
  3       c            does not exist  | 1     | {a:2. b:1, c:1}
  4       a            exists          | 3     | {a:3, b:1, c:1}
  5       b            exists          | 2     | {a:3, b:2, c:1}
  6       a            exists          | 4     | {a:4, b:2, c:1}
  7       d            does not exist  | 1     | {a:4, b:2, c:1, d:1}

  5. After the object is returned we then check for first key whose value is 1 and return that, if all the keys have values > 1 return null
*/

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

//console.log(findFirstNonRepeatChar('abaaba')); //returns null
//console.log(findFirstNonRepeatChar('abacabad')); //returns c
//console.log(findFirstNonRepeatChar('abaabad')); //returns d