function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitThreeSeconds() {
  await delay(3000);
  console.log("Finished waiting");
}

waitThreeSeconds();
