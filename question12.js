//12. Write a function with a nested function. Show how the inner function
//  can access variables from the outer function (closure).


function outerFunction() {
    const variable1 = "outer function variable";

    function innerFunction() {
        console.log(variable1);  // o/p: outer function variable
    }
 innerFunction();
}

outerFunction();
