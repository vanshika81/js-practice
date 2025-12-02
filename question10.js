function Array(numbers) {
    if (numbers.length === 0) return {};

    const smallest = Math.min(...numbers);
    const largest = Math.max(...numbers);
    const total = numbers.reduce((sum, n) => sum + n, 0);
    const average = total / numbers.length;

    return { smallest, largest, average };
}

console.log(Array([18, 200, 30, 4, 90]));


