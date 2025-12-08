
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
    console.log(error);
  }
}

finalData();
