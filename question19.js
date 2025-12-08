//7. Write an async function fetchData() that simulates fetching data 
// with setTimeout (2 seconds) and returns "Data received".

async function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000); 
    });
}
async function finalData() {
    const result = await fetchData();
    console.log(result);   // o/p: Data received
}

finalData();
