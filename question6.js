const arr = [1, 2, 3, 4, 5]
// map()
const double = arr.map(number => number * 2)
console.log("Doubled:", double);

// filter()
const even = arr.filter(number => number % 2 === 0);
console.log("Even numbers:", even);

// reduce()
const result = arr.reduce((total, number) => total + number, 0);
console.log("Sum:", result);


const reverse = [];

for (let num of arr) {
    reverse.unshift(num); 
}

console.log("Reversed array:", reverse);