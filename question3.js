//3. Convert ‘123’ into a number and add 10. Convert true into a string and concatenate with " is a boolean".
//  What happens if you run Number("hello")?

const stringValue ="123"
const convertToNumber = Number(stringValue)
const finalResult = convertToNumber + 10
console.log(finalResult); // o/p :133

const booleanValue = true
const converttoString = String(booleanValue)
const endResult = converttoString + " is a boolean"
console.log(endResult);   // 0/p true is a boolean

const value = Number("hello")
console.log(value); //o/p : NaN


