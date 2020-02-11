//Transitional Steps
// accept input as a nested multi-dimensional array
  // [[12,12],[6,6]]

// output should be an array with the total of each nested array elements
  // [24, 12]

/*
  1. Create a function
  2. Create a sumArray variable and assign it to an empty array
  3. Create a sum variable to store the sum of individual nestes array items and assign it to 0.
  4. loop throgh the input array, based on the length of the array

  iter          currentValue    sum          | output
  0             [12,12]         12+12 = 24   | [24]
  1             [6,6]           6+6 = 12     | [24, 12]

  5. We use the .reduce() method on each element of the array, resulting in a single output
  6. return the output array
*/

// Create a function sumNestedArray with array as an argument
function sumNestedArray(arr) {
  // Expected is an array, so lets create a sumArray and assign it to [].
  let sumArr = [];
  // Create a sum variable to store the sum of individual nested array items
  let sum = 0;

  // loop through the input array
  for(let i = 0; i < arr.length; i++) {
      // create a new arr1 variable to store the individual nested array
      let arr1 = arr[i];
      // create a value variable with .reduce() method on each element of the array, resulting in a single output value.
      let value = arr1.reduce((sum, element) => sum + element);
      // Push that individual value into the sumArr
      sumArr.push(value);
  }
  //return sumArr
  return sumArr;
}
//const arr = [[12,12],[6,6]];
//console.log(sumNestedArray(arr));//[24, 12]

