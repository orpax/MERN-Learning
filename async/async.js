console.log("Starting file operations...");

function sleep(miliseconds) {
  let startTime = new Date().getTime();
  console.log("Sleeping for " + miliseconds + " milliseconds...");
  while (new Date().getTime() < startTime + miliseconds) {
    console.log("Still sleeping...");
  }
  console.log("Woke up after " + miliseconds + " milliseconds!");
}

sleep(2000);

console.log("File operations will continue after sleep...");
