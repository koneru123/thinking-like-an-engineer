//Transitional Steps
// accept input as a string
  // 'priya' | 'apple'

// output reverse input of a string
  // 'ayiyp' | 'elppa'

/*
  1. first
  2. Iterate through input string backwards, and concatenate the current value to the result string.
  3. return result string

  input 'priya', output 'ayiyp'
  word length = 5-1 = 4

  iter    current character from input | output
  4       a         | '' + 'a'  = 'a'
  3       y         | 'a' + 'y' = 'ay'
  2       i         | 'ay' + 'i' = 'ayi'
  1       r         | 'ayi' + 'r' = 'ayir'
  0       p         | 'ayir' + 'p' = 'ayirp'

  return output
*/

// Create a function reverseString, which has a word as an argument
function reverseString(word) {
  // first lets understand the input and output, in this case it is a string
  // create a variable reverse to store that string
  let reverse = '';
  // then loop through the string with i as string.length-1, till i >= 0, keep decrementing i
  for(let i = word.length-1; i >= 0 ; i--) {
    // print it from reverse, concatenate it to the variable created above
    reverse += word[i];
  }
  // return that variable
  return reverse;
}

//console.log(reverseString('priya')); // return ayirp








