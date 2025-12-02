function outerFunction() {
    const variable1 = "outer function variable";

    function innerFunction() {
        console.log(variable1);  
    }
 innerFunction();
}

outerFunction();
