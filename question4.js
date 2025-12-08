 //4. Write a normal function and an arrow function that both return the sum of two numbers. 


function sumNormal(number1, number2) {
    return number1 + number2;
}
console.log(sumNormal(1, 109)); //o/p: 110

//------------------------------Arrow function----------------------------------------------- 
const sumArrow = (number1, number2) => number1 + number2;
console.log(sumArrow(1, 109)) //o/p : 110