// create a function that takes 2 arguments: an array of numbers, and a number. 
// the function should return true if any of the two numbers in the array equal the number in the argument after adding them together.
function hasTargetSum(array, target) {
  // Iterate through the array and add the first number with every other number
      for (let i = 0; i < array.length; i++){
          let x = target - array[i]
          for (let j = i + 1; j < array.length; j++){
              if (array[j] === x){
                  return true
              }
          }
      }
   return false
}

/* 
  Write the Big O time complexity of your function here
  0(n^2)
*/

/* 
  Add your pseudocode here

  Iterate through the array and add the first number with every other number
  Return true if the sum of the numbers equals the target number
  Repeat this process with every number in the array
  If none of the sums equals the target number, return false

*/

/*
  Add written explanation of your solution here



*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
