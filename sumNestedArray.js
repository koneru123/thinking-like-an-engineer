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

