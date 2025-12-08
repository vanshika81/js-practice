/*6. let arr = [1, 2, 3, 4, 5]:

Use .map() to double each number.

Use .filter() to get even numbers.

Use .reduce() to calculate the sum.

Reverse the array without using .reverse().*/

const arr = [1, 2, 3, 4, 5]
// map()
const double = arr.map(number => number * 2)
console.log("Doubled:", double);  // o/p:Doubled: [ 2, 4, 6, 8, 10 ]

// filter()
const even = arr.filter(number => number % 2 === 0);
console.log("Even numbers:", even); //o/p:Even numbers: [ 2, 4 ]

// reduce()
const result = arr.reduce((total, number) => total + number, 0);
console.log("Sum:", result); //o/p:Sum: 15


const reverse = [];

for (let num of arr) {
    reverse.unshift(num); 
}

console.log("Reversed array:", reverse); //o/p:Reversed array: [ 5, 4, 3, 2, 1 ]