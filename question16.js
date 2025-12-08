//4. Write a function sumAll(...nums) that takes any number of arguments and returns their sum.

function sumAll(...nums) {
    let sum = 0;

    for (let num of nums) {
        sum += num;
    }

    return sum;
}


console.log(sumAll(67, 45, 90)); // o/p :202