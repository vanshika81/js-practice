var variable1 = "Global variable";

function scopeAccess() {
    var varivale2 = "local variable";
    console.log(varivale2);
    console.log(variable1); 
}

scopeAccess();
console.log(variable1);
console.log(variable2);



