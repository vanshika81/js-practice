
async function getUserInfo() {
  return { id: 1, name: "Alice", age: 25 };
}



async function displayUser() {
  const user = await getUserInfo();        
  const { name, age } = user;              
  console.log(`Name: ${name}, Age: ${age}`); 
}
displayUser();
