//2. const user = { id: 1, username: "john_doe", email: "john@example.com" };
//Extract username and email using object destructuring.

const user = { 
  id: 1, 
  username: "john_doe", 
  email: "john@example.com" 
};

const { username, email } = user;

console.log(username); //o/p: john_doe
console.log(email);   // o/p: john@example.com