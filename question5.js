const user1 = {
    username: "vanshika",

   
    normalMethod: function () {
        console.log(this.username)
    }
}
user1.normalMethod(); 

const user2= {
    arrowMethod: () => {
        username: "vanshika",
        console.log(this.username);
    }
}
user2.arrowMethod(); 
// arrow function doesnt has its own this, so when used in objects will refer to outer scope
