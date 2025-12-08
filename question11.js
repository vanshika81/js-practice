//Declare a global variable and access it inside a function. Declare a variable
//  inside a function and try accessing it outside.

var variable1 = "Global variable";

function scopeAccess() {
    var varivale2 = "local variable";
    console.log(varivale2);  //o/p: local variable
    console.log(variable1);  //o/p: Global variable
}

scopeAccess();
console.log(variable1);  //o/p: Global variable
console.log(variable2); // o/p: error



