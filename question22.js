/*10. Write an async function getUserInfo() that returns an object:

{ id: 1, name: "Alice", age: 25 }

Use destructuring to extract name and age, and print them using template literals.*/
async function getUserInfo() {
  return { id: 1, name: "Alice", age: 25 };
}



async function displayUser() {
  const user = await getUserInfo();        
  const { name, age } = user;              
  console.log(`Name: ${name}, Age: ${age}`);              // o/p: Name: Alice, Age: 25
}
displayUser();
