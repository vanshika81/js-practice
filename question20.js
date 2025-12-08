//8. Modify fetchData() to throw an error if a flag isError is true. 
// Use try...catch with async/await to handle it.


async function fetchData(hasError) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (hasError) {
        reject("Error");
      } else {
        resolve("Data received");
      }
    }, 2000);
  });
}


async function finalData() {
  try {
    const result = await fetchData(true); 
    console.log(result);         
  } catch (error) {
    console.log(error);              //o/p : Error

  }
}

finalData();

