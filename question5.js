//5. Create an object with a method using both normal and arrow functions. Test how this behaves.

const user1 = {
    username: "vanshika",

   
    normalMethod: function () {
        console.log(this.username) //o/p: vanshika
    }
}
user1.normalMethod(); 

const user2= {
    arrowMethod: () => {
        username: "vanshika",
       console.log(this.username); // o/p: undefined
    }
}
user2.arrowMethod(); 
// arrow function doesnt has its own this, so when used in objects will refer to outer scope