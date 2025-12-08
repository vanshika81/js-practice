/*3. Combine two arrays:

const arr1 = [1, 2, 3];

const arr2 = [4, 5, 6];

into a single array using the spread operator.*/

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const finalArray = [...arr1, ...arr2];

console.log(finalArray);  // o/p:[ 1, 2, 3, 4, 5, 6 ]