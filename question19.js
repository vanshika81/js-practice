async function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000); 
    });
}
async function finalData() {
    const result = await fetchData();
    console.log(result); 
}

finalData();
