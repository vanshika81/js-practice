//7. For example an object person = { name: "Alice", age: 25, city: "Delhi" }.
//  Use destructuring to extract name and age.

const user1 = {
    username: "vanshika",
    website: "youtube",
    age: "23"
};


const { username, age } = user1;

console.log(username); //o/p: vanshika
console.log(age); //o/p: 23