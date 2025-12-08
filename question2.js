//2. Write a function with an if block that declares a variable using var. Check if
//  it’s accessible outside the block. Do the same with let.

if (true) {
    var var1 = "welcome to Javascript";
    console.log("Inside the block:", var1);
}

console.log("Outside the block:", var1);


// Using let
if (true) {
    let var2 = "welcome to javascript";
    console.log("Inside the block :", var2);
}
console.log("Outside the block:", var2); //o/p :error

// we will get error when let variable is accessed outside of the if block

//o/p: Inside the block :welcome to Javascript
//Outside the block :welcome to Javascript
//Inside the block :welcome to Javascript
