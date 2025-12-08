//5. Write a function greet(name = "Guest") that prints "Hello, Guest!" if no argument is passed.

function greet(name = "Guest") {
    console.log(`Hello ${name} !`);
}


greet("vanshika");   // o/p: Hello vanshika !
greet();            // o/p : Hello Guest !