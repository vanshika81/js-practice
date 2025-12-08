function sumAll(...nums) {
    let sum = 0;

    for (let num of nums) {
        sum += num;
    }

    return sum;
}


console.log(sumAll(67, 45, 90));