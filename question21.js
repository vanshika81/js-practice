/*9. function delay(ms) {

return new Promise(resolve => setTimeout(resolve, ms));

}

Write an async function that waits 3 seconds using await delay(3000) and then logs "Finished waiting".*/


function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitThreeSeconds() {
  await delay(3000);
  console.log("Finished waiting");                  //o/p: Finished waiting
}

waitThreeSeconds();
